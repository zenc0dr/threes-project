<template>
    <div class="select-unit">
        <div class="threes-global__note">
            Выберите юнит
        </div>
        <div class="select-unit__search">
            <input
                v-model="search_text"
                class="select-unit__search__input"
                type="text"
                @keydown.enter.prevent=""
            >
        </div>
        <div class="select-unit__list">
            <div v-for="unit in filtered_units" class="select-unit__list__item">
                <div class="select-unit__list__item__info">
                    <div class="select-unit__list__item__head">
                        <icon class="select-unit__list__item__icon" :src="unit.icon"/>
                        <div class="select-unit__list__item__name">
                            {{ unit.name }}
                        </div>
                    </div>
                    <div class="select-unit__list__item__desc" v-html="unit.description"></div>
                </div>
                <div class="select-unit__list__item__control">
                    <div @click="makeNode(unit)" class="btn btn-default">
                        <i class="icon-caret-square-o-right"></i>
                        Выбрать
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import icon from "./ux/elements/icon.vue";
export default {
    name: "SelectUnit",
    components: {
        icon
    },
    emits: ['fetch'],
    mounted() {
        this.getUnits()
    },
    data() {
        return {
            units: [],
            search_text: null
        }
    },
    computed: {
        filtered_units() {
            if (this.search_text) {
                const search_term = this.search_text.toLowerCase()
                return this.units.filter(unit => {
                    // Проверяем все указанные поля на наличие совпадений
                    const name_match = (unit.name || '').toLowerCase().includes(search_term)
                    const tid_match = String(unit.tid || '').toLowerCase().includes(search_term)
                    const desc_match = (unit.description || '').toLowerCase().includes(search_term)
                    return name_match || tid_match || desc_match
                })
            }
            return this.units
        }
    },
    methods: {
        getUnits() {
            ths.api({
                api: 'Units.SelectUnit:records',
                then: response => {
                    this.units = response.units
                }
            })
        },
        icon(unit) {
            return {
                'background-image':`url(${unit.icon})`
            }
        },
        makeNode(unit) {
            ths.api({
                api: 'Units.SelectUnit:makeNode',
                data: {
                    tid: unit.tid
                },
                then: response => {
                    this.$emit('fetch', response.node)
                }
            })
        }
    }
}
</script>
<style lang="scss">
.select-unit {
    background-color: #f5f5f5;
    border: 1px solid #b2b2b2;
    padding: 20px;
    border-radius: 4px;

    &__search {
        display: flex;
        flex-direction: row;
        margin-bottom: 15px;

        &__input {
            border: 1px solid #b2b2b2;
            outline: none;
            background-color: #fff;
            flex: 1 1 0;
            border-radius: 4px;
            padding: 7px 9px;
            font-size: 15px;
            color: #666;
        }
    }

    &__list {
        &__item {
            display: flex;
            flex-direction: row;
            padding: 10px;
            align-items: center;
            background: #eaeaea;
            margin-bottom: 6px;
            border-radius: 4px;
            &__info {
                flex: 1 1 0;
            }
            &__head {
                display: flex;
                align-items: center;
                margin-bottom: 3px;
            }
            &__desc {
                padding: 10px;
                max-height: 100px;
                overflow-y: auto;
                background: #f5f5f5;
                border: 1px solid #dfdfdf;
                border-radius: 4px;
                color: #585858;
            }

            &__control {
                display: flex;
                width: 140px;
                margin-left: 13px;
                align-items: center;
                justify-content: flex-end;
            }
            &__icon {
                width: 20px;
                height: 30px;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                margin-right: 8px;
            }
            &__name {
                flex: 1 1 0;
                font-size: 17px;
            }
        }
    }
}
</style>
