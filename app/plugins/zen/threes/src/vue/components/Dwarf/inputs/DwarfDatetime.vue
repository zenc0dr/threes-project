<template>
    <div class="dw-datetime" :class="size" :style="width ? `width:${width}`: null">
        <div v-if="inner_label" class="dw-datetime__label">
            {{ inner_label }}
        </div>
        <div>
            <Datepicker v-model="value"
                        locale="ru"
                        :format="format"
                        :timePicker="mode === 'time'"
                        selectText="Выбрать"
                        cancelText="закрыть"
            />
        </div>
    </div>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker'; // https://github.com/Vuepic/vue-datepicker
import '@vuepic/vue-datepicker/dist/main.css';
import moment from 'moment';
export default {
    name: "DwarfDatetime",
    components: {
        Datepicker
    },
    emits: ['update:modelValue'],
    props: {
        modelValue: null,
        size: {
            type: String,
            default: 'full'
        },
        mode: {
            type: String,
            default: 'datetime'
        },
        label: {
            type: [String, Function],
            default: 'Строка'
        },
        width: {
            type: String,
            default: null
        }
    },
    computed: {
        value: {
            get() {
                if (!this.modelValue) {
                    return null
                }
                if (this.mode === 'time') {
                    let value = this.modelValue.split(':')
                    return {
                        hours: parseInt(value[0]),
                        minutes: parseInt(value[1]),
                        seconds: 0
                    }
                }

                return moment(this.modelValue)
            },
            set(value) {
                let output = null

                if (this.mode === 'time') {
                    output = this.timeFormat(value.hours) + ':' + this.timeFormat(value.minutes)
                }

                if (this.mode === 'date') {
                    output = moment(value).format('YYYY-MM-DD')
                }

                if (this.mode !== 'date' && this.mode !== 'time') {
                    output = moment(value).format('YYYY-MM-DD HH:mm')
                }

                this.$emit('update:modelValue', output)
            }
        },
        inner_label() {
            if (typeof this.label === 'string') {
                return this.label
            }
            return this.label()
        },
        format() {
            if (this.mode === 'date') {
                return 'dd.MM.yyyy'
            }
            else if (this.mode === 'time') {
                return 'HH:mm'
            }
            return 'dd.MM.yyyy HH:mm' // datetime
        }
    },
    methods: {
        timeFormat(num) {
            return ('0' + num).slice(-2)
        }
    }
}
</script>

<style lang="scss">
.dw-datetime {
    margin-bottom: 20px;

    &__label {
        font-weight: bold;
        color: #777;
        font-size: 14px;
        margin-bottom: 4px;
    }

    .dp__pointer {
        height: 42px;
    }

    &.full {
        width: 100%
    }

    &.half {
        width: calc(50% - 7px);
    }

    &.quarter {
        width: calc(25% - 7px);
    }
}
</style>
