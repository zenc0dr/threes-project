<template>
    <div class="node-code">
        <template v-if="scope === 'schema'">
            <div class="node-code__header">
                {{ node.name }}
            </div>
        </template>
        <div class="node-code__panel">
            <div class="node-code__panel__button">
                <i class="oc-icon-caret-right"></i>
            </div>
        </div>
        <div class="node-code__code">
            <div class="node-code__block" v-for="(block, i) in content">
                <component
                    :key="i"
                    :is="block.type"
                    v-model="block.data"
                    @remove="removeComponent(i)"
                />
            </div>
            <div
                v-click-outside="closePanel"
                @click.self="closePanel"
                class="node-code__buttons"
            >
                <i v-if="!add_panel" @click.stop="add_panel = true" class="oc-icon-plus node-code__buttons__add"></i>
                <div v-if="add_panel" class="node-code__add-panel">
                    <div v-for="type in types" class="node-code__node-type">
                        <i @click.stop="addType(type)" :class="type.icon" :title="type.description"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


import Textarea from "./threes_nodecode/textarea.vue";

export default {
    name: "NodeCode",
    components: {
        Textarea
    },
    props: {
        node: {
            type: Object,
            required: true
        },
        scope: {
            type: String,
            required: false,
            default: null
        }
    },
    data() {
        return {
            add_panel: false,
            content: [
                {
                    type: 'Textarea',
                    data: '',
                }
            ],
            types: [ // Просмотреть типы и вывести их
                {
                    name: 'Текст',
                    icon: 'oc-icon-font',
                    type: 'Textarea',
                    description: 'Добавляет текстовый блок',
                },
                {
                    name: 'Метод',
                    icon: 'oc-icon-play-circle',
                    type: 'Method',
                    description: 'Добавляет метод',
                },
            ]
        };
    },
    methods: {
        addType(type)
        {
            this.content.push({
                type: type.type,
                data: type.data || '',
            })
        },
        removeComponent(index)
        {
            this.content.splice(index, 1)
        },
        closePanel()
        {
            this.add_panel = false
        }
    }
};
</script>

<style lang="scss">
.node-code {
    background: #fff;
    border-radius: 4px;

    &__header {
        font-size: 18px;
        margin-left: 20px;
        font-weight: bold;
        color: #8c8c8c;
        margin-bottom: -6px;
    }

    &__content {
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

    &__panel {
        display: flex;
        background: #d2f0e1;


        &__button {
            display: flex;
            padding: 1px 10px;
            background: #ffffff;
            color: #57876f;
            margin: 5px 4px;
            border-radius: 4px;
            cursor: pointer;
        }
    }

    &__buttons {
        background: #f9f9f9;
        padding: 6px 6px;
        display: flex;

        &__add {
            background: #e5e5e5;
            border-radius: 4px;
            padding: 3px 1px 2px 10px;
            font-size: 12px;
            cursor: pointer;
            transition: 300ms;

            &:hover {
                background: #8df1b7;
                color: #1f4a22;
            }
        }
    }
    &__add-panel {
        display: flex;
        flex-direction: row;
    }
    &__node-type {
        padding: 3px;
    }
}

</style>
