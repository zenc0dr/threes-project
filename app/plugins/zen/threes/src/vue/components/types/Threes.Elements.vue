<template>
    <div class="threes-elements">
        <div class="threes-elements__body" :style="style">
            <EditableText
                v-model="content"
                @save="updateDataDebounced"
                @remove="$emit('remove')"
            />
        </div>
        <div class="threes-elements__settings">
            <i @click="settings_open = true" class="oc-icon-cog" />
        </div>
        <modal max-width="600px" :show="settings_open" @close="settings_open = null">
            <template #heading>
                Настройки элемента
            </template>
            <template #default>
                <div class="threes-elements__modal">
                    <FormFitter :scheme="settings_scheme" v-model="settings"/>
                </div>
            </template>
        </modal>
    </div>
</template>

<script>
import EditableText from '../EditableText.vue';
import Node from "../Node.vue";
import debounce from 'lodash/debounce';
import modal from '../modal.vue';

export default {
    name: "Elements",
    components: {
        Node,
        EditableText,
        modal
    },
    emits: ["remove"],
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
            content: this.node.data?.content ?? '',
            settings: this.node.data?.settings ?? [],
            ths: window.ths,
            updateDataDebounced: () => {},
            settings_open: false,
            settings_scheme: [
                {
                    field: "type",
                    label: "Элемент",
                    type: "select",
                    options: [
                        {
                            id: 'h1',
                            name: 'H1'
                        },
                        {
                            id: 'h2',
                            name: 'H2'
                        },
                        {
                            id: 'h3',
                            name: 'H3'
                        },
                    ]
                }
            ],
            styles: {
                h1: {
                    fontSize: '34px',
                    color: '#7a7a7a',
                    paddingLeft: '15px',
                    paddingTop: '15px',
                    marginBottom: '10px'
                },
                h2: {
                    fontSize: '28px',
                    color: '#7a7a7a',
                    paddingLeft: '15px',
                    paddingTop: '15px',
                    marginBottom: '10px'
                },
                h3: {
                    fontSize: '24px',
                    color: '#7a7a7a',
                    paddingLeft: '15px',
                    paddingTop: '15px',
                    marginBottom: '10px'
                },
            }
        };
    },
    watch: {
        'node.data': {
            handler(newVal) {
                this.content = newVal?.content ?? '';
                this.settings = newVal?.settings ?? [];
            },
            deep: true,
        },
        content(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.updateDataDebounced();
            }
        },
        settings: {
            handler() {
                this.updateDataDebounced();
            },
            deep: true,
        }
    },
    computed: {
        style() {
            return this.styles[this.settings.type]
        }
    },
    created() {
        this.updateDataDebounced = debounce(this.updateData, 300);
    },
    methods: {
        updateData() {
            const newData = {
                content: this.content,
                settings: this.settings,
            };
            this.ths.api({
                api: 'nodes.node:update-data',
                data: {
                    nid: this.node.nid,
                    data: newData,
                },
            });
        },
    },
};
</script>

<style lang="scss">
.threes-elements {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &__body {
        flex: 1 1 0;
        background: #fff;
    }

    &__settings {
        display: flex;
        width: 30px;
        align-items: center;
        margin-left: 15px;

        i {
            cursor: pointer;
            color: #9b9b9b;
            font-size: 14px;
            transition: 200ms;

            &:hover {
                color: #6282e4;
            }
        }
    }

    &__modal {
        min-height: 300px;
    }
}
</style>
