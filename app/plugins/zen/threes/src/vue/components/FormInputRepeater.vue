<template>
    <div class="input-repeater" :class="size">
        <div v-if="innerLabel" class="input-repeater__label">
            {{ innerLabel }}
        </div>

        <div class="input-repeater__wrapper">
            <div
                v-for="(item, index) in repeaterObjects"
                :key="index"
                class="input-repeater__form"
            >
                <div class="input-repeater__block">
                    <FormFitter
                        :scheme="scheme"
                        :modelValue="item"
                        @update:modelValue="val => updateItem(index, val)"
                    />
                </div>
                <div class="input-repeater__control">
                    <i class="bi bi-chevron-up move-button" @click="moveItemUp(index)"></i>
                    <i class="bi bi-chevron-down move-button" @click="moveItemDown(index)"></i>
                    <i class="bi bi-trash delete-button" @click="deleteElement(item)"></i>
                </div>
            </div>

            <button class="btn btn-primary add-button" @click="addForm">
                <i class="bi bi-plus-square"></i> {{ addText }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormInputRepeater',
    emits: ['update:modelValue'],
    props: {
        modelValue: {
            type: Array,
            default: () => []
        },
        label: [String, Function],
        size: {
            type: String,
            default: 'full'
        },
        addText: {
            type: String,
            default: 'Добавить'
        },
        scheme: {
            type: Array,
            default: () => []
        },
        empty_object: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            repeaterObjects: []
        }
    },
    watch: {
        modelValue: {
            immediate: true,
            handler(val) {
                this.repeaterObjects = [...val]
            }
        }
    },
    computed: {
        innerLabel() {
            return typeof this.label === 'function' ? this.label() : this.label
        }
    },
    methods: {
        emitValue() {
            this.$emit('update:modelValue', [...this.repeaterObjects])
        },
        addForm() {
            this.repeaterObjects.push({ ...this.empty_object })
            this.emitValue()
        },
        updateItem(index, val) {
            this.repeaterObjects.splice(index, 1, { ...val })
            this.emitValue()
        },
        deleteElement(item) {
            const i = this.repeaterObjects.indexOf(item)
            if (i !== -1) {
                this.repeaterObjects.splice(i, 1)
                this.emitValue()
            }
        },
        moveItemUp(index) {
            if (index === 0) return
            const items = [...this.repeaterObjects]
            const temp = items[index - 1]
            items[index - 1] = items[index]
            items[index] = temp
            this.repeaterObjects = items
            this.emitValue()
        },
        moveItemDown(index) {
            if (index === this.repeaterObjects.length - 1) return
            const items = [...this.repeaterObjects]
            const temp = items[index + 1]
            items[index + 1] = items[index]
            items[index] = temp
            this.repeaterObjects = items
            this.emitValue()
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
        width: 100%;
    }

    &.half {
        width: calc(50% - 7px);
    }

    &.quarter {
        width: calc(25% - 7px);
    }

    &__wrapper {
        border: 1px solid #d3d3d3;
        padding: 10px;
        border-radius: 5px;
        background: #fff;
    }

    &__form {
        display: flex;
        margin-bottom: 10px;
        padding: 5px 13px;
        border: 1px solid #d3d3d3;
        background: #f5f8fc;
        border-radius: 5px;
    }

    &__block {
        flex: 1 1 0;
    }

    &__control {
        width: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 4px;

        i {
            cursor: pointer;
            transition: 200ms;
        }

        .delete-button:hover {
            color: red;
        }
    }

    .add-button {
        margin-bottom: 10px;

        i {
            margin-right: 5px;
        }
    }
}
</style>
