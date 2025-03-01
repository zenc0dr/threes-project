<template>
    <div v-if="header" class="records-header">
        {{ header }}
    </div>
    <BreadCrumbs v-if="route_url" :scheme="breadcrumbs"/>
    <div class="record-panel" v-else v-if="record">
        <button class="btn btn-primary" @click="backToList">
            <i class="bi bi-arrow-left-square" style="margin-right: 4px"></i>
            К списку
        </button>
    </div>
    <slot name="records_control_panel"></slot>
    <div v-if="scheme && records && record === null" class="records">
        <div class="records__panel">
            <ControlPanel :buttons="records_panel_buttons" float="left"/>
            <div v-if="has_search" class="records__search">
                <SearchField @search="search"/>
            </div>
        </div>
        <div class="filters-panel">
            <FormFitter :scheme="filters" :modelValue="filters_data" @update:modelValue="filters_data = $event"/>
        </div>
        <template v-if="records.length">
            <div class="records__titles">
                <div v-if="multiselect" class="records__title selector" @click="selectAll">
                    <div>
                        <Checkbox v-model="all_is_selected" :binary="true"/>
                    </div>
                </div>
                <template v-for="column in scheme">
                    <div v-if="column.type !== 'log'"
                         class="records__title"
                         :class="[{sortable:column.sort}, column.class]"
                         :style="getStyle(column)"
                         @click="changeSorting(column)">
                        {{ column.name }}
                        <span v-if="column.sort"
                              :class="'p-sortable-column-icon pi pi-fw pi-sort-' + getSortStyle(column)">
                    </span>
                    </div>
                </template>
            </div>
            <div class="records__records">
                <div v-for="record in records"
                     @click="rowClick(record.id)"
                     class="records__raw"
                     :class="{hover:this.hover}"
                     :style="rowStyle(record)"
                     >
                    <div v-if="multiselect" class="records__cell selector" @click.stop="checkRecord(record)">
                        <div>
                            <Checkbox v-model="record.checked" :binary="true"/>
                        </div>
                    </div>
                    <template v-for="column in scheme">
                        <div v-if="column.type === 'activator'"
                             class="records__cell cell-activator"
                             :style="getStyle(column)">
                            <div class="state-active" :class="{active: record[column.field]}"></div>
                        </div>
                        <div v-if="column.type === 'number'"
                             :style="getStyle(column)"
                             class="records__cell cell-number">
                            {{ record[column.field] }}
                        </div>
                        <div v-if="column.type === 'string'"
                             :style="getStyle(column)"
                             class="records__cell cell-string"
                             v-html="record[column.field]"
                        ></div>
                        <div v-if="column.type === 'count'"
                             :style="getStyle(column)"
                             class="records__cell cell-count">
                            <div class="count" :class="{'zero-count': !parseInt(record[column.field])}">
                                {{ record[column.field] }}
                            </div>
                        </div>
                        <div v-if="column.type === 'log'"
                             class="cell-log">
                            <pre>{{ record[column.field] }}</pre>
                        </div>
                    </template>
                </div>
            </div>
            <div v-if="total >= 15" class="bottom-panel">
                <Dropdown
                    v-model="pagination"
                    :options="[15, 20, 30, 50, 100]"
                />
                <Paginator
                    :first="sort_page"
                    :rows="pagination"
                    :totalRecords="total"
                    @page="setPage($event)"
                />
            </div>
        </template>
        <template v-else>
            <div class="records__empty">
                Нет записей
            </div>
        </template>
    </div>
    <div>
        <Modal :show="modal_record && record !== null"
               :max-width="'calc(100% - 40px)'"
               :title="record_title"
               @close="modalRecordClose">
            <FormFitter :scheme="record_scheme" :modelValue="record" @update:modelValue="record = $event">
                <template v-for="(_, name) in $slots" v-slot:[name]>
                    <slot :name="name"/>
                </template>
            </FormFitter>
            <slot name="record"></slot>
            <ControlPanel style="margin-top: 30px" :buttons="record_buttons"/>
        </Modal>
        <div v-if="!modal_record && record !== null" class="record">
            <FormFitter :scheme="record_scheme" :modelValue="record" @update:modelValue="record = $event">
                <template v-for="(_, name) in $slots" v-slot:[name]>
                    <slot :name="name"/>
                </template>
            </FormFitter>
            <slot name="record"></slot>
            <ControlPanel style="margin-top: 30px" :buttons="record_buttons"/>
        </div>
    </div>
</template>

<script>
import Paginator from 'primevue/paginator';
import FormFitter from "./FormFitter";
import ControlPanel from "./ControlPanel";
import Checkbox from 'primevue/checkbox';
import SearchField from "../inputs/DwarfSearchField";
import BreadCrumbs from "../services/BreadCrumbs";
import Dropdown from 'primevue/dropdown';
import Modal from "./Modal";
import md5 from 'md5';

export default {
    name: "Records",
    components: {
        Paginator, FormFitter, ControlPanel, Checkbox, SearchField, BreadCrumbs, Dropdown, Modal
    },
    emits: ['loaded', 'record-loaded', 'record-updated', 'records-loaded'],
    props: {
        /* Роут списка в пропсах ex: groups:records */
        records_url: {
            type: String,
            default: null
        },
        /* Роут экземпляра в пропсах ex: groups:record */
        record_url: {
            type: String,
            default: null
        },
        /* URL списка ex: dashboard/groups */
        route_url: {
            type: String,
            default: null
        },
        /* Выделять строки и открывать экземпляр на отдельной странице */
        hover: {
            type: Boolean,
            default: true
        },
        /* Массовое выделение записей */
        multiselect: {
            type: Boolean,
            default: true
        },
        /* Кнопки панели записей (для переопределения) */
        records_buttons: {
            type: Array,
            default: null
        },
        /* Дополнительные кнопки в панели */
        extra_buttons: {
            type: Array,
            default: null
        },
        /* Дополнительный роутинг через хеш */
        hash_router: {
            type: Boolean,
            default: false
        },
        /* Открывать форму в модальном окне */
        modal_record: {
            type: Boolean,
            default: false
        },
        /* Заголовок модального окна формы */
        modal_record_title: {
            type: [String, Function],
            default: 'Редактирование записи',
        },
        /* Главный заголовок */
        header: {
            type: String,
            default: null
        },
        /* Данные которые примешиваются к response getRecord */
        record_preset: {
            type: [Object, Function],
            default: null
        },
        /* Данные которые примешиваются к запросу getRecords */
        records_preset: {
            type: Object,
            default: null
        },
        /* Поля которые должны быть скрыты в списке записей */
        records_hidden_fields: {
            type: Array,
            default: null
        },
        delete_preset: {
            type: Object,
            default: null
        },
        transform_update: {
            type: Function,
            default: null
        },
        transform_create: {
            type: Function,
            default: null
        }
    },
    data() {
        return {
            scheme: null, // array Схема списка
            records: null, // array Массив записей
            pagination: null, // int Количество записей на страницу (Приходит с бекенда)
            total: null, // Всего записей в базе данных
            page: 0, // Страница (начинается с нуля)
            sort_page: null, // Костыль для правильной работы пагинатора от PrimeVue
            record_scheme: null, // Схема экземпляра
            record: null, // Экземпляр
            original_fields: null, // Хеш значения, полей оригинальной записи
            has_search: false, // Список имеет поля участвующие в глобальном поиске
            search_text: null, // Текст глобального поиска

            has_reorder: false,
            reorder_record: null, // Экземпляр который подвергается смене порядка
            cursor_y: null,
            reorder_raw_height: null, // Высота элемента над которым проводится экземпляр меняющий свой порядок
            reorder_target_record: null,

            filters: null, // Фильтры
            filters_data: [],

            records_panel_buttons: [ // Кнопки панели списка
                {
                    name: 'Создать',
                    icon: 'bi bi-plus-square',
                    show: true,
                    click: () => {
                        this.rowClick('new')
                    }
                },
                {
                    name: 'Удалить',
                    icon: 'bi bi-trash3-fill',
                    show: () => {
                        return this.multiselect
                    },
                    disabled: () => {
                        return !(this.selected && this.selected.length)
                    },
                    type: 'danger',
                    click: () => {
                        this.deleteRecord(true)
                    }
                },
            ],
            record_buttons: [ // Кнопки панели экземпляра
                {
                    name: 'Удалить',
                    icon: 'bi bi-trash3-fill',
                    show: () => {
                        return !this.is_new_record
                    },
                    type: 'danger',
                    click: () => {
                        this.deleteRecord()
                    }
                },
                {
                    name: () => {
                        if (this.record.id === 'new') {
                            return 'Создать'
                        } else {
                            return 'Сохранить'
                        }
                    },
                    show: true,
                    click: () => {
                        this.updateRecord()
                    }
                },
            ],
            breadcrumbs: [
                {
                    icon: 'bi bi-house-door-fill',
                    to: this.route_url ? this.route_url.split('/')[0] : null,
                },
                {
                    name: this.$route.meta.title,
                    to: this.route_url,
                },
                {
                    name: () => {
                        if (this.is_new_record) {
                            return 'Создание записи'
                        } else {
                            if (this.record && this.record.name) {
                                return this.record.name
                            }
                            return 'Редактирование записи'
                        }
                    },
                    show: () => {
                        return this.record !== null
                    }
                },
            ],
        }
    },
    created() {
        /* Переопределение кнопок панели записей */
        if (this.records_buttons) {
            this.records_panel_buttons = this.records_buttons
        }

        if (this.extra_buttons) {
            this.records_panel_buttons.push({
                type: 'separator'
            })
            Array.prototype.push.apply(this.records_panel_buttons, this.extra_buttons)
        }

        if (this.route_url) {
            if (this.route_params.id) {
                this.getRecord(this.route_params.id)
            } else {
                this.getRecords()
            }
        } else {
            this.getRecords()
        }
    },
    computed: {
        sort_data() {
            if (!this.scheme) {
                return
            }
            let sort_data = null
            for (let i in this.scheme) {
                if (this.scheme[i].sort && this.scheme[i].sort !== true) {
                    sort_data = {
                        field: this.scheme[i].field,
                        direction: this.scheme[i].sort === 1 ? 'asc' : 'desc'
                    }
                    break
                }
            }
            return sort_data
        },
        // Для слежения за изменениями роута
        route_params() {
            if (this.route_url) {
                return this.$route.params
            }
        },
        // Определение, я вляется ли запись новой или загруженной
        is_new_record() {
            if (!this.record) {
                return false
            }
            if (!this.record.id) {
                return false
            }
            if (this.record.id === 'new') {
                return true
            }
            return false
        },
        all_is_selected() {
            for (let i in this.records) {
                if (!this.records[i].checked) {
                    return false
                }
            }
            return true
        },
        selected() {
            let selected = []
            this.records.map(record => {
                if (record.checked) {
                    selected.push(record.id)
                }
            })
            return selected
        },
        reorder_allow() {
            if (!this.has_reorder) {
                return false
            }
            if (!this.sort_data) {
                return false
            }
            return this.sort_data.field === 'sort_order' && this.sort_data.direction === 'asc';
        },
        record_title() {
            if (!this.modal_record_title) {
                return ''
            }

            if (typeof this.modal_record_title === 'function') {
                return this.modal_record_title(this.record)
            }
            return this.modal_record_title
        },
    },
    watch: {
        // Слежение за изменением роута
        route_params(route_params) {
            if (!this.route_url) {
                return
            }

            if (route_params.id === '') {
                // Обновить список только если мы остаёмся на той-же странице
                if (this.$route.fullPath === '/' + this.route_url) {
                    this.getRecords()
                }
                // Очистить экземпляр
                this.record = null
            } else if (route_params.id) {
                if (!location.hash.includes('records')) {
                    this.getRecord(route_params.id)
                }
            }
        },
        records() {
            this.$emit('loaded')
        },
        cursor_y(y) {
            if (this.reorder_record) {
                this.reorder_record.y = y - 15
            }
        },
        filters_data: {
            handler(new_value, old_value) {
                if (!Object.keys(old_value).length) {
                    return
                }
                this.page = 0
                this.getRecords()
            },
            deep: true
        },
        pagination(new_value, old_value) {
            if (!old_value) {
                return
            }
            this.page = 0
            this.getRecords()
        }
    },
    methods: {
        rowStyle(record) {
            let style = []
            if (this.reorder_record) {
                if (this.reorder_record === record) {
                    style.push(`top:${this.reorder_record.y}px`)
                    style.push('pointer-events:none')
                }
            }
            return style.join(';')
        },
        getStyle(column) {
            let style = ''
            if (column.size) {
                style += `width:${column.size};`
            } else {
                style += `flex:1 0 0;`
            }
            return style
        },
        getSortStyle(column) {
            if (column.sort === true) {
                return 'alt'
            }
            if (column.sort === 1) {
                return 'amount-up-alt'
            }
            if (column.sort === -1) {
                return 'amount-down'
            }
        },
        changeSorting(column) {
            if (!column.sort) {
                return
            }
            this.scheme.map(item => {
                if (item.sort && item !== column) {
                    item.sort = true
                }
            })
            if (column.sort === true) {
                column.sort = 1
            } else if (column.sort === 1) {
                column.sort = -1
            } else if (column.sort === -1) {
                column.sort = 1
            }
            this.sort_page = 0
            this.page = 0
            this.getRecords()
        },
        setPage(event) {
            this.page = event.page
            this.getRecords()
        },
        backToList() {
            this.record = null
            if (this.hash_router) {
                window.location.hash = this.records_url
            }
        },
        getRecords(fn) {
            APP.api({
                url: '/play-api/' + this.records_url,
                data: {
                    get_scheme: this.scheme === null, // Ставит метку о первом запросе для получения схемы
                    pagination: this.pagination,
                    sorting: this.sort_data,
                    search: this.search_text,
                    filters_data: this.filters_data,
                    records_preset: this.records_preset,
                    page: this.page + 1 // Разница между начальными значениями фронта 0 и бэка
                },
                then: response => {
                    if (response.success) {
                        if (!this.scheme) {
                            /* Если имеются поля для скрытия */
                            if (this.records_hidden_fields) {
                                for (let index in response.scheme) {
                                    if (this.records_hidden_fields.includes(response.scheme[index].field)) {
                                        response.scheme.splice(index, 1)
                                    }
                                }
                            }
                            this.scheme = response.scheme
                            this.has_search = response.has_search
                            this.has_reorder = response.has_reorder
                            if (response.filters) {
                                this.makeFilters(response.filters)
                            }
                        }
                        if (this.hash_router) {
                            window.location.hash = this.records_url
                        }
                        this.records = response.records
                        this.pagination = response.pagination
                        this.total = response.total
                        if (fn) {
                            fn(response)
                        }
                        this.$emit('records-loaded', response)
                    }
                }
            })
        },
        makeFilters(filters) {
            let filters_data = {}
            filters.map(filter => {
                filters_data[filter.field] = filter.default
            })
            this.filters_data = filters_data
            this.filters = filters
        },
        getRecordPreset(record) {
            return typeof this.record_preset === 'function'
                ? this.record_preset(record)
                : this.record_preset
        },
        reloadRecord(fn) {
            this.getRecord(this.record.id, fn)
        },
        getRecord(id, fn) {
            let create_data = {
                id
            }
            if (this.transform_create) {
                this.transform_create(create_data)
            }
            APP.api({
                url: '/play-api/' + this.record_url,
                data: create_data,
                then: response => {
                    if (response.success) {
                        this.record_scheme = response.scheme
                        this.record = response.record

                        this.saveOriginalFields(response.record)

                        if (this.record_preset !== null) {
                            Object.assign(this.record, this.getRecordPreset(response.record))
                        }

                        if (this.hash_router) {
                            window.location.hash = this.record_url + '/' + id
                        }

                        if (fn) {
                            fn(response)
                        }

                        this.$emit('record-loaded', this.record)
                    }
                }
            })
        },
        saveOriginalFields(record) {
            this.original_fields = {}
            for (let i in record) {
                if (i === 'id') {
                    continue
                }
                this.original_fields[i] = md5(JSON.stringify(record[i]))
            }
        },
        rowClick(record_id) { // Тыкнули строку списка
            if (!this.record_url) {
                return
            }
            if (this.route_url) {
                if (this.hover) {
                    /* Локация на экземпляр */
                    this.$router.push('/' + this.route_url + '/' + record_id)
                }
            } else {
                this.getRecord(record_id)
            }
        },
        getReadonlyFields() {
            let readonly_fields = []
            this.schemeBypass(this.record_scheme, readonly_fields)
            return readonly_fields
        },
        schemeBypass(scheme, fields) {
            for (let i in scheme) {
                if (scheme[i].field && scheme[i].readonly) {
                    fields.push(scheme[i].field)
                }
                if (scheme[i].scheme) {
                    this.schemeBypass(scheme[i].scheme, fields)
                }
            }
        },
        updateRecord() { // Обновить экземпляр
            let update_data = _.cloneDeep(this.record)

            // Удаляем поля с меткой readonly
            let readonly_fields = this.getReadonlyFields()
            for (let field_name in update_data) {
                if (readonly_fields.includes(field_name)) {
                    delete update_data[field_name]
                }
            }

            // При обновлении происходит проверка на изменение
            if (!this.is_new_record) {
                let record_updated = false

                for (let i in update_data) {
                    if (i === 'id') {
                        continue
                    }
                    if (md5(JSON.stringify(update_data[i])) === this.original_fields[i]) {
                        update_data[i] = 'no_change'
                    } else {
                        record_updated = true
                        this.original_fields[i] = md5(JSON.stringify(update_data[i]))
                    }
                }

                if (!record_updated) {
                    APP.pushAlerts([
                        {
                            'type': 'error',
                            'text': 'Данные не были изменены'
                        }
                    ])
                    return
                }
            }

            if (this.transform_update) {
                this.transform_update(update_data)
            }

            APP.api({
                url: '/play-api/' + this.record_url,
                data: {
                    update_data
                },
                then: response => {
                    if (response.success) {
                        this.getRecords()
                        this.$emit('record-updated', response)
                        if (this.route_url && response.id) {
                            if (this.record.id === 'new') {
                                this.$router.push('/' + this.route_url + '/' + response.id)
                            } else {
                                this.getRecord(response.id)
                            }
                        }
                    }
                }
            })
        },
        checkRecord(record) { // Отметить запись
            record.checked = !record.checked
        },
        selectAll() { // Отметить все записи на странице
            let direction = true
            if (this.all_is_selected) {
                direction = false
            }
            this.records.map(record => {
                record.checked = direction
            })
        },
        handleSelected(fn) {
            fn(this.selected)
        },
        deleteRecord(multiple) { // Удалить экземпляр или массив экземпляров

            let data = {
                delete_id: multiple ? this.selected : this.record.id,
            }

            if (this.delete_preset) {
                Object.assign(data, this.delete_preset)
            }

            APP.api({
                url: '/play-api/' + this.record_url,
                data,
                then: response => {
                    if (response.success) {
                        if (this.record) {
                            this.record = null
                            if (this.route_url) {
                                this.$router.push('/' + this.route_url)
                            } else {
                                this.getRecords()
                            }
                        } else {
                            this.getRecords()
                        }
                    }
                }
            })
        },
        search(text) { // Глобальный поиск
            this.search_text = text
            this.sort_page = 0
            this.page = 0
            this.getRecords()
        },
        modalRecordClose() {
            this.record = null
            if (this.modal_record && this.route_url) {
                this.$router.push('/' + this.route_url)
            } else {
                this.getRecords()
            }
        }
    }
}
</script>

<style lang="scss">

$titles_padding: 10px 9px;
$cell_padding: 10px 9px;

.record-panel {
    padding: 0 15px;
    margin-top: 15px;
}

.records-header {
    font-size: 19px;
    font-weight: bold;
    color: #818181;
    border-bottom: 1px solid #bebebe;
    margin-top: 20px;
    padding-bottom: 3px;
    margin-bottom: 15px;
    flex: 1 0 0;
}

.records {
    .reorder {
        display: flex;
        width: 30px;
        align-items: center;
        justify-content: center;
        cursor: n-resize;
        color: #b3b3b3;
        font-size: 22px;
        user-select: none;
    }

    &__panel {
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
    }

    &__search {
        width: 400px;
    }

    &__empty {
        background: #fff;
        padding: 200px 15px;
        border-radius: 5px;
        color: #9c9c9c;
        text-align: center;
    }

    padding: 15px;
    width: 100%;

    &__titles {
        display: flex;
        justify-content: space-between;
    }

    &__title {
        padding: $titles_padding;
        transition: 300ms;
        color: #8d8d8d;
        font-weight: bold;
        font-size: 12px;

        &.sortable {
            cursor: pointer;
            user-select: none;
        }

        &.sortable:hover {
            background: #ededed;
        }

        &.selector {
            cursor: pointer;

            > div {
                pointer-events: none
            }
        }
    }

    &__records {
        position: relative;
        padding-bottom: 40px;
    }

    &__raw {
        display: flex;
        justify-content: space-between;
        background: #fff;
        margin-bottom: 2px;
        font-size: 15px;
        color: #555;
        flex-wrap: wrap;

        &.hover {
            //transition: 300ms;
            cursor: pointer;

            &:hover {
                background: #f8f8f8;
            }
        }

        &.draggable {
            position: absolute;
            z-index: 100;
            width: 100%;
            box-shadow: -1px 2px 14px 0 #00000014;
            opacity: 0.5;
        }

        &.drop-top {
            border-top: 1px solid #00b7ff;
        }

        &.drop-bottom {
            border-bottom: 1px solid #00b7ff;
        }
    }

    &__cell {
        padding: $cell_padding;
        display: flex;
        align-items: center;

        &.selector {
            > div {
                pointer-events: none
            }
        }
    }

    .cell-number {
    }

    .cell-activator {
        display: flex;
        align-items: center;
        justify-content: center;

        .state-active {
            height: 15px;
            width: 15px;
            border-radius: 50%;
            background-color: #bebebe;

            &.active {
                background-color: green;
            }
        }
    }

    .cell-string {

    }

    .cell-log {
        background: #404f64;
        padding: 18px;
        padding-bottom: 0;
        color: #fff;
        width: 100%;
    }

    .cell-count {
        display: flex;

        .count {
            display: flex;
            background: #e1f6e2;
            color: #3d732f;
            min-width: 48px;
            justify-content: center;
            align-items: center;
            font-size: 13px;
            font-weight: bold;
            border-radius: 4px;
        }

        .zero-count {
            background: #f6f6f6;
            color: #8e8e8e;
        }
    }

    .filters-panel {
        display: flex;

        .form {
            justify-content: flex-start;

            > div {
                margin-right: 5px;
            }
        }
    }

    .bottom-panel {
        display: flex;
        width: 100%;
        justify-content: center;

        .p-dropdown {
            margin-right: auto;
        }

        .p-dropdown-label {
            padding-top: 17px;
        }

        .p-paginator {
            margin-right: auto;
        }
    }
}

.record {
    padding: 15px;
}
</style>
