<template>
    <div class="dwarf-checkbox" :class="{checked}" @click="$emit('check')">
        <i :class="iconClass"></i>
        <div class="dwarf-checkbox__label">
            {{ inner_label }}
        </div>
    </div>
</template>

<script>
export default {
    name: "DwarfCheckbox",
    emits: ['check'],
    props: {
        checked: {
            type: Boolean,
            default: false,
        },
        label: {
            type: [String, Function],
            default: 'Checkbox'
        }
    },
    computed: {
        iconClass() {
            return this.checked ? 'bi bi-check-square-fill' : 'bi bi-square'
        },
        inner_label() {
            if (typeof this.label === 'string') {
                return this.label
            }
            return this.label()
        }
    },
}
</script>

<style lang="scss">
.dwarf-checkbox {
    display: flex;
    cursor: pointer;
    flex-direction: row;
    background: #fff;
    padding: 2px 7px;
    margin: 3px 0;
    border-radius: 5px;
    align-items: center;
    color: #494c4d;
    animation: fade-in;
    animation-duration: 200ms;
    border: 1px solid #fff;

    &:hover {
        border: 1px solid #ced4da;
    }

    i {
        margin-right: 10px;
        font-size: 18px;
        color: #6c6c6c;
        &.bi-check-square-fill {
            color: #1c157e;
        }
    }

    &__label {
        user-select: none;
    }
    &.checked {
        color: #000;
    }
    @keyframes fade-in {
        from {
            opacity: 0
        }
    }
}
</style>
