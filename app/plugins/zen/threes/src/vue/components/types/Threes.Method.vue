<template>
    <div class="code-block">
        <div class="code-block__body" :class="{ disabled: !data.enabled }">
            <div v-if="data.show_name" class="code-block__slug">
                {{ data.name }}
            </div>
            <div class="code-block__slug">
                <i @click="settings_open = true" class="oc-icon-cog code-block__settings"></i>
            </div>
        </div>

        <div v-if="data.show_code" class="code-block__code">
            <CodeEditor 
                v-model="data.code" 
                :language="data.language || 'javascript'"
                :height="'300px'"
            />
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
            settings_scheme: [
                {
                    type: 'string',
                    field: 'name',
                    label: 'Название блока'
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
                {
                    type: 'dropdown',
                    field: 'language',
                    label: 'Язык программирования',
                    options: [
                        { id: 'javascript', name: 'JavaScript' },
                        { id: 'php', name: 'PHP' },
                        { id: 'python', name: 'Python' },
                        { id: 'html', name: 'HTML' },
                        { id: 'css', name: 'CSS' },
                        { id: 'sql', name: 'SQL' },
                        { id: 'json', name: 'JSON' },
                        { id: 'xml', name: 'XML' },
                        { id: 'yaml', name: 'YAML' },
                        { id: 'markdown', name: 'Markdown' },
                        { id: 'typescript', name: 'TypeScript' }
                    ]
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
}
</style>
