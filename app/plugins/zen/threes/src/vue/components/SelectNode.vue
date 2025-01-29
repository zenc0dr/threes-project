<template>
    <div class="select-node">
        <div class="threes-global__note">
            Выберите тип нода
        </div>
        <div class="select-node__types">
            <div @click="selectType(item.type)"
                 v-for="item in node_types"
                 class="select-node__type"
                 :class="{active:item.type === selected_type}"
            >
                <div class="select-node__type__head">
                    <img
                        :src="`/plugins/zen/threes/assets/images/node_types/` + item.icon" :alt="item.name"
                        class="select-node__type__icon"
                    >
                    <div class="select-node__type__name">
                        {{ item.name }}
                    </div>
                </div>
                <div class="select-node__type__body">
                    {{ item.desc }}
                </div>
            </div>
        </div>
        <SelectUnit v-if="selected_type === 'unit'" @fetch="makeNode"/>

    </div>
</template>
<script>
import SelectUnit from "./SelectUnit.vue";
export default {
    name: "SelectNode",
    emits: ['fetch'],
    components: {
        SelectUnit
    },
    mounted() {
        this.getTypes()
    },
    data() {
        return {
            node_types: null,
            selected_type: null,
        }
    },
    watch: {
        selected_type(selected_type) {
            if (selected_type !== 'unit') {
                this.$emit('fetch', {
                    type: selected_type,
                })
            }
        }
    },
    methods: {
        getTypes() {
            ths.api({
                api: 'Sprites.SelectNode:records',
                then: response => {
                    this.node_types = response.node_types
                }
            })
        },
        selectType(type) {
            this.selected_type = type
        },
        makeNode(node) {
            this.$emit('fetch', node)
        }
    }
}
</script>
<style lang="scss">
.select-node {

    &__types {
        display: flex;
        margin: 0 -5px;
        margin-bottom: 15px;
    }

    &__type {
        padding: 9px 16px;
        margin: 5px;
        border: 1px solid #b2b2b2;
        border-radius: 4px;
        cursor: pointer;
        transition: 200ms;
        background-color: #f5f5f5;
        user-select: none;
        width: 150px;

        &.active {
            background-color: #adffb5;
            border-color: #80ce88;
        }

        &__head {
            display: flex;
            align-content: center;
            align-items: center;
            font-size: 20px;
            margin-bottom: 10px;
        }

        &__body {
            line-height: 13px;
            font-size: 12px;
            color: #5a5a5a;
        }

        &__icon {
            width: 30px;
            height: 30px;
            margin-right: 8px;
        }

        &__name {
            flex: 1 1 0;
        }

        &:hover {
            background-color: #cfd3ff;
        }

        &:active {
            transform: scale(0.98);
        }
    }
}
</style>
