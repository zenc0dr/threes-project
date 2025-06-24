<template>
    <div class="code-block">
        <div class="code-block__body" :class="{ disabled: !data.enabled }">
            <div class="code-block__slug">
                <div @click="runMethod" class="code-block__btn">
                    <i v-if="process" class="pi pi-cog pi-spin"></i>
                    <template v-else>
                        <span>▸</span>
                    </template>
                </div>
            </div>
            <div v-if="data.show_name" class="code-block__slug code-block__name">
                {{ data.name }}
            </div>
            <div class="code-block__slug" style="margin-left: auto">
                <i @click="settings_open = true" class="oc-icon-cog code-block__settings"></i>
            </div>
        </div>

        <div v-if="data.show_code" class="code-block__code">
            <Textarea v-model="data.code"></Textarea>
        </div>

        <modal max-width="600px" :show="settings_open" @close="settings_open = false">
            <template #heading>Настройки блока</template>
            <template #default>
                <FormFitter :scheme="settings_scheme" v-model="data" />
            </template>
        </modal>
    </div>
</template>

<script>
import debounce from 'lodash/debounce';
import modal from '../modal.vue';
import Textarea from '../Textarea.vue';
import CodeEditor from '../CodeEditor.vue';

export default {
    name: "Method",

    components: {
        modal,
        Textarea,
        CodeEditor
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
            data: JSON.parse(JSON.stringify(this.node.data || {})), // создаём изначальный клон!
            ths: window.ths,
            settings_open: false,
            updateDataDebounced: null,
            process: false,
            settings_scheme: [
                {
                    type: 'string',
                    field: 'name',
                    label: 'Название блока'
                },
                {
                    type: 'string',
                    field: 'call',
                    label: 'Вызов'
                },
                {
                    type: 'settings_switcher',
                    field: 'enabled',
                    label: 'Блок включен'
                },
                {
                    type: 'settings_switcher',
                    field: 'show_name',
                    label: 'Показывать имя'
                },
                {
                    type: 'settings_switcher',
                    field: 'show_desc',
                    label: 'Показывать описание'
                },
                {
                    type: 'settings_switcher',
                    field: 'show_code',
                    label: 'Показывать код'
                },
            ],
        };
    },

    created() {
        this.updateDataDebounced = debounce(this.updateData, 300);
    },

    watch: {
        data: {
            handler() {
                this.updateDataDebounced();
            },
            deep: true,
        },
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
        runMethod() {
            this.process = true
            ths.api({
                api: 'nodes.node:run-method',
                data: {
                    call: this.data.call
                },
                then: response => {
                    this.process = false
                    ths.exe('Schema', 'getSchema')
                }
            })
        }
    },
};
</script>

<style lang="scss">
.code-block {
    background: #fff;

    &__name {
        font-weight: bold;
    }

    &__btn {
        font-size: 16px;
        padding: 2px 14px 0px;
        line-height: 22px;
        margin-top: -2px;
        margin-bottom: -2px;
        border-radius: 7px;
        margin-right: 10px;
        background: #66766b;
        color: #fff;
        cursor: pointer;
        transition: 300ms;

        & > span {
            padding-bottom: 2px;
            padding-left: 3px;
            padding-right: 3px;
            display: block;
            margin-top: -2px;
        }

        &:hover {
            background: #75977f;
        }
    }

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
        transition: 300ms;

        &.disabled {
            background: #fafafa;
            border-color: #ebebeb;
            color: #ababab;
        }
    }

    &__settings {
        cursor: pointer;
    }

    &__code > .node-text__content {
        width: 100%;
        box-sizing: border-box;
        padding: 20px 20px;
        font-size: 16px;
        resize: none;
        overflow: hidden;
        outline: none;
        border: none;
        color: #2e7d32;
        background: #eafff5;
        font-family: "Exo 2", sans-serif;
    }
}
</style>
