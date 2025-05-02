<template>
    <div class="threes_store">
        <Search :text="filter_text" @update:text="getStore" />
        <div class="threes_store__items">
            <div class="threes_store__item__separator">
                Слои юнитов <span>{{ unit_layers?.length ?? 0 }}</span>
            </div>
            <div v-for="layer in unit_layers" class="threes_store__item unit_item">
                <div class="threes_store__item__icon">
                    <icon width="20px" height="20px" :src="layer.icon" />
                </div>
                <div class="threes_store__item__title">
                    <div class="threes_store__item__name">
                        {{ layer.name }}
                    </div>
                    <div class="threes_store__item__aspect">
                        {{ layer.aspect }}
                    </div>
                </div>
                <div class="threes_store__item__description" v-html="layer.description"></div>
                <div class="threes_store__item__buttons">
                    <div @click="addLayer(layer)" class="btn btn-default threes_store__item__button">
                        <i class="icon-angle-double-left" />
                        Добавить
                    </div>
                </div>
            </div>

            <div class="threes_store__item__separator" style="margin-top: 10px">
                Слои фреймов <span>{{ layers_count }}</span>
            </div>
            <div v-for="layer in layers" class="threes_store__item">
                <div class="threes_store__item__icon">
                    <icon width="20px" height="20px" :src="layer.icon" />
                </div>
                <div class="threes_store__item__title">
                    <div class="threes_store__item__name">
                        {{ layer.name }}
                    </div>
                    <div class="threes_store__item__aspect">
                        {{ layer.aspect }}
                    </div>
                </div>
                <div class="threes_store__item__description" v-html="layer.description"></div>
                <div class="threes_store__item__buttons">
                    <div @click="addLayer(layer)" class="btn btn-default threes_store__item__button">
                        <i class="icon-angle-double-left" />
                        Добавить
                    </div>
                    <div class="btn btn-default threes_store__item__button">
                        <i class="icon-copy" />
                        Копировать
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import icon from './icon.vue';
import Search from './Search.vue';
export default {
    name: "Store",
    emits: ['add:layer'],
    components: {
        icon,
        Search
    },
    mounted() {
        this.getStore()
    },
    data() {
        return {
            layers: [],
            unit_layers: [],
            nodes: [],
            filter_text: ''
        }
    },
    computed: {
        layers_count() {
            return Object.keys(this.layers || {}).length;
        }
    },
    methods: {
        getStore(filter_text) {
            if (typeof filter_text === 'undefined') {
                return
            }
            ths.api({
                api: 'layers.Layer:getStore',
                data: {
                    filter_text
                },
                then: response => {
                    this.layers = response.layers
                    this.unit_layers = response.unit_layers
                    this.nodes = response.nodes
                }
            })
        },
        addLayer(layer) {
            this.$emit('add:layer', layer)
        },
        copyLayer(layer) {

        }
    }
}
</script>
<style lang="scss">
.threes_store {
    &__items {
        max-height: 500px;
        overflow-y: auto;
    }
    &__item {
        display: flex;
        background: #f7f7f7;
        margin-bottom: 5px;
        padding: 4px 15px;
        border-radius: 4px;
        border: 1px solid #e9e9e9;

        .unit_item {
            border: 2px solid green;
        }

        &__icon {
            display: flex;
            align-items: center;
            margin-right: 15px;
        }

        &__title {
            display: flex;
            flex-direction: column;
            width: 240px;
            align-items: flex-start;
        }

        &__name {
            margin-bottom: 3px;
            font-weight: bold;
            color: #656565;
        }

        &__aspect {
            background: #e1e1e1;
            padding: 2px 5px;
            border-radius: 4px;
            font-size: 14px;
        }

        &__description {
            display: flex;
            background: #fff;
            padding: 4px 7px;
            border-radius: 4px;
            flex-direction: column;
            flex: 1 1 0;
            margin-right: 16px;

            p {
                margin-bottom: 2px;
            }
        }

        &__buttons {
            display: flex;
            align-items: center;
        }

        &__button {
            display: flex;
            &:not(:last-child) {
                margin-right: 7px;
            }
            i {
                margin-right: 5px;
            }
        }
        &__separator {
            display: flex;
            padding: 5px 11px;
            background: #d9dbe2;
            color: #565a65;
            font-size: 15px;
            font-weight: bold;
            margin-bottom: 7px;
            border-radius: 4px;
            align-items: center;
            justify-content: space-between;

            span {
                padding: 1px 10px;
                background: #9fa7ca;
                color: #ffffff;
                border-radius: 4px;
            }
        }
    }
}
</style>
