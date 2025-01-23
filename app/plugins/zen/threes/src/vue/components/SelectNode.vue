<template>
    <div class="select-node">
        <div class="select-node__title">
            Выберите тип нода
        </div>
        <div class="select-node__types">
            <div @click="selectType(item.type)" v-for="item in node_types" class="select-node__type">
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
        <div style="font-size: 50px" v-if="selected_type">
            Выбран тип: {{ selected_type }}
        </div>
    </div>
</template>
<script>
export default {
    name: "SelectNode",
    mounted() {
        this.getTypes()
    },
    data() {
        return {
            node_types: null,
            selected_type: null,
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
        }
    }
}
</script>
<style lang="scss">
.select-node {

    &__types {
        display: flex;
        margin: 0 -5px;
    }

    &__title {
        font-size: 18px;
        background: #e3ebf8;
        color: #7b7b7b;
        padding: 5px 13px;
        margin-bottom: 8px;
        border-radius: 4px;
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
