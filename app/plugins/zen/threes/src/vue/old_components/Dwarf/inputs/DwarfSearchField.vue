<template>
    <div class="search-field">
        <div class="p-inputgroup">
            <span @keydown.enter="hardEnter" class="p-input-icon-left p-input-icon-right">
                <i class="pi pi-search"/>
                <InputText type="text"
                           :modelValue="modelValue"
                           @input="onInput($event)"
                />
                <i v-if="preloader" class="pi pi-spin pi-spinner"/>
            </span>
            <slot name="button"></slot>
        </div>
    </div>
</template>

<script>
import InputText from 'primevue/inputtext';
export default {
    name: "SearchField",
    components: {
        InputText
    },
    emits: ['update:modelValue', 'search'],
    props: {
        modelValue: null,
        timout: {
            type: Number,
            default: 1000
        },
    },
    data() {
        return {
            preloader: false,
            timer: null,
            entered_text: null,
        }
    },
    methods: {
        onInput(event) {
            let text = event.target.value
            this.entered_text = text
            if (this.timout) {
                this.preloader = true
            }
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
            if (this.timout) {
                this.timer = setTimeout(() => {
                    this.preloader = false
                    this.$emit('search', text)
                }, this.timout)
            } else {
                this.$emit('search', text)
            }
            this.$emit('update:modelValue', text)
        },
        hardEnter() {
            this.preloader = false
            if (this.timer) {
                clearTimeout(this.timer)
                this.timer = null;
            }
            this.$emit('search', this.entered_text)
        }
    }
}
</script>

<style lang="scss">
.search-field {
    i {
        pointer-events: none;
    }
    .p-inputgroup {
        width: 100%
    }
    .p-input-icon-left {
        width: 100%
    }
    input {
        width: 100%!important;
    }
}
</style>
