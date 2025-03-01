<template>
    <div class="input-repeater" :class="size">
        <div v-if="inner_label" class="input-repeater__label">
            {{ inner_label }}
        </div>
        <div v-if="repeater_objects" class="input-repeater__wrapper"
             :class="{dragging: this.reorder_record !== null}"
             @mouseup="dropReorder"
             @mousemove="writeCursor"
             @mouseleave="leaveReorder"
        >
            <div v-for="repeater_object in repeater_objects"
                 class="input-repeater__form"
                 :class="[{draggable:repeater_object.draggable}, repeater_object.reorder_class]"
                 :style="rowStyle(repeater_object)"
                 @mousemove="rowMouseMove(repeater_object, $event)"
                 @mouseleave="rowMouseLeave(repeater_object)"
            >
                <div class="input-repeater__reorder">
                    <i class="bi bi-grip-vertical" @mousedown.stop="holdReorder(repeater_object, $event)"></i>
                </div>
                <div class="input-repeater__block">
                    <FormFitter :scheme="scheme" :modelValue="repeater_object"/>
                </div>
                <div class="input-repeater__control">
                    <i @click="deleteElement(repeater_object)" class="bi bi-trash delete-button"></i>
                </div>
            </div>
            <button @click="addForm" class="btn btn-primary add-button">
                <i class="bi bi-plus-square"></i> {{ add_text }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dwarf Repeater v0.1",
    components: {
    },
    emits: ['update:modelValue'],
    props: {
        modelValue: null,
        size: {
            type: String,
            default: 'full'
        },
        label: {
            type: [String, Function],
            default: null
        },
        add_text: {
            type: String,
            default: 'Добавить'
        },
        scheme: {
            default: null
        },
        empty_object: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            cursor_y: null,
            reorder_record: null,
            reorder_raw_height: null,
            repeater_objects: []
        }
    },
    created() {
        if (!this.modelValue) {
           return
        }
        this.repeater_objects = this.modelValue
    },
    watch: {
        modelValue: {
            handler(modelValue) {
                this.repeater_objects = modelValue
            },
            deep: true
        },
        repeater_objects: {
            handler(repeater_objects) {
                this.$emit('update:modelValue', repeater_objects)
            },
            deep: true
        },
        cursor_y(y) {
            if (this.reorder_record) {
                this.reorder_record.y = y - 15
            }
        }
    },
    computed: {
        inner_label() {
            if (this.label === null) {
                return null
            }
            if (typeof this.label === 'string') {
                return this.label
            }
            return this.label()
        }
    },
    methods: {
        addForm() {
            //this.repeater_objects.push({})

            // if (this.modelValue) {
            //     let last_object = _.cloneDeep(this.repeater_objects[this.repeater_objects.length - 1])
            //     this.repeater_objects.push(last_object)
            // } else {
            //     this.repeater_objects.push({})
            // }

            //let last_object = _.cloneDeep(this.repeater_objects[this.repeater_objects.length - 1])
            //this.repeater_objects.push(last_object)

            this.repeater_objects.push(_.cloneDeep(this.empty_object))

            //this.$emit('update:modelValue', repeater_objects)
        },

        // Записывается Y-координата курсора
        writeCursor(event) {
            this.cursor_y = event.layerY
        },

        // Мышка зажимается на элементе
        holdReorder(record, event) {
            record.draggable = true
            this.reorder_record = record
            this.reorder_raw_height = $(event.target).closest('.input-repeater__form').height()
        },

        // Мышка отпускается
        dropReorder() {
            if (this.reorder_record === null) {
                return
            }
            this.makeReorder(this.reorder_record, this.reorder_target_record)
            delete this.reorder_record.draggable
            this.reorder_record = null
        },

        // Совершить перестановку
        makeReorder(source, target) {
            if (!source || !target) {
                return
            }
            let position = target.reorder_class === 'drop-top' ? 'before' : 'after'
            let new_array = []
            for (let i = 0; i < this.repeater_objects.length; i++) {
                if (this.repeater_objects[i] === source) {
                    continue
                }
                if (this.repeater_objects[i] === target && position === 'before') {
                    new_array.push(source)
                }
                new_array.push(this.repeater_objects[i])
                if (this.repeater_objects[i] === target && position === 'after') {
                    new_array.push(source)
                }
            }
            this.repeater_objects = new_array
        },
        leaveReorder() {
            if (!this.reorder_record) {
                return
            }
            if (this.reorder_record.draggable) {
                this.reorder_record.draggable = false
            }
            this.reorder_record = null
        },
        rowStyle(record) {
            let style = []
            if (this.reorder_record) {
                if (this.reorder_record === record) {
                    style.push(`top:${this.reorder_record.y}px`)
                    style.push('pointer-events:none')
                }
            }
            return style.join(';')
        },
        rowMouseMove(record, event) {
            if (!this.reorder_record) {
                return
            }
            let y = event.offsetY
            let h = this.reorder_raw_height

            if (y < h / 2) {
                record.reorder_class = 'drop-top'
                this.reorder_target_record = record
            } else {
                record.reorder_class = 'drop-bottom'
                this.reorder_target_record = record
            }
        },
        rowMouseLeave(record) {
            delete record.reorder_class
        },
        deleteElement(element)
        {
            this.deleteElementHandler(element)
        },
        deleteElementHandler(element)
        {
            let index = this.repeater_objects.indexOf(element)
            this.repeater_objects.splice(index, 1)
        }
    }
}
</script>

<style lang="scss">
.input-repeater {
    margin-bottom: 20px;

    &__label {
        font-weight: bold;
        color: #777;
        font-size: 14px;
        margin-bottom: 4px;
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

    &__form {
        display: flex;
        flex-direction: row;
        border: 1px solid #d3d3d3;
        padding: 5px;
        margin-bottom: 10px;
        border-radius: 5px;
        background: #f5f8fc;

        &.draggable {
            position: absolute;
            z-index: 100;
            width: 100%;
            box-shadow: -1px 2px 14px 0 #00000014;
            opacity: 0.5;
        }

        &.drop-top {
            border-top: 1px solid #00b7ff;
        }

        &.drop-bottom {
            border-bottom: 1px solid #00b7ff;
        }
    }

    &__wrapper {
        border: 1px solid #d3d3d3;
        padding: 10px;
        padding-top: 11px;
        border-radius: 5px;
        background: #fff;
    }

    &__wrapper.dragging {
        user-select: none;
        padding-bottom: 100px;
        > div * {
            pointer-events: none;
        }
    }

    &__reorder {
        width: 20px;
        display: flex;
        justify-content: center;
        align-content: flex-start;
        i {
            cursor: n-resize;
        }
    }

    &__block {
        flex: 1 1 0;
    }

    &__control {
        width: 20px;
        display: flex;
        justify-content: center;
        align-content: flex-start;
        i {
            cursor: pointer;
            transition: 200ms;
        }
        .delete-button:hover {
            color:red;
        }
    }

    .add-button {
        i {
            margin-right: 5px;
        }
    }
}
</style>
