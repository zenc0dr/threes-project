<template>
    <div class="code-block">
        <div class="code-block__body">
            <div v-if="data.show_name" class="code-block__slug">
                {{ node.name }}
            </div>
            <div class="code-block__slug">
                <i @click="settings_open = true" class="oc-icon-cog code-block__settings"></i>
            </div>
        </div>

        <modal max-width="600px" :show="settings_open" @close="settings_open = false">
            <template #heading>
                Настройки блока
            </template>
            <template #default>
                <FormFitter :scheme="settings_scheme" v-model="data" />
            </template>
        </modal>
    </div>
</template>

<script>
import debounce from 'lodash/debounce';
import modal from '../modal.vue';

export default {
    name: "Method",

    components: {
        modal,
    },

    props: {
        node: {
            type: Object,
            required: true,
        },
        scope: {
            type: String,
            default: null,
        },
    },

    data() {
        return {
            // ✅ data = node.data напрямую
            data: typeof this.node.data === 'object' && this.node.data !== null ? this.node.data : {},
            ths: window.ths,
            settings_open: false,
            updateDataDebounced: () => {},
            settings_scheme: [
                { type: 'settings_switcher', field: 'enabled', label: 'Блок включен' },
                { type: 'settings_switcher', field: 'show_name', label: 'Показывать имя' },
                { type: 'settings_switcher', field: 'show_desc', label: 'Показывать описание' },
                { type: 'settings_switcher', field: 'show_code', label: 'Показывать код' },
            ],
        };
    },

    watch: {
        'node.data': {
            handler(newVal) {
                this.data = typeof newVal === 'object' && newVal !== null ? newVal : {};
            },
            deep: true,
        },
        data: {
            handler() {
                this.updateDataDebounced();
            },
            deep: true,
        },
    },

    created() {
        this.updateDataDebounced = debounce(this.updateData, 300);
    },

    methods: {
        updateData() {
            this.ths.api({
                api: 'nodes.node:update-data',
                data: {
                    nid: this.node.nid,
                    data: this.data,
                },
            });
        },
    },
};
</script>

<style lang="scss">
.code-block {
    background: #fff;

    &__body {
        display: flex;
        border: 1px solid #ddede1;
        background: #f5fff8;
        color: #66766b;
        border-radius: 5px;
        margin: 5px;
        padding: 5px 8px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    &__settings {
        cursor: pointer;
    }
}
</style>
