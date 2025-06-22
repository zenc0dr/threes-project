<template>
    <div class="code-block">
        <div class="code-block__body">
            <div v-if="modelValue.settings.show_name" class="code-block__slug">
                {{ name }}
            </div>
            <div class="code-block__slug">
                <i @click="settings_open = true" class="oc-icon-cog code-block__settings"></i>
            </div>
        </div>
        <modal max-width="600px"
               heading="Настройки блока"
               :show="settings_open"
               @close="settings_open = false">
            <FormFitter
                :scheme="settings_scheme"
                v-model="modelValue.settings"
            />
        </modal>
    </div>
</template>

<script>
import debounce from 'lodash/debounce'
import Textarea from '../../Textarea.vue'
import icon from '../../icon.vue'
import modal from '../../modal.vue'

export default {
    name: "Method",

    components: {
        icon,
        modal,
        Textarea,
    },

    props: {
        modelValue: {
            type: Object,
            default: () => ({
                name: 'Блок кода без названия',
                desc: 'Описание блока кода',
                code: ''
            })
        }
    },

    data() {
        return {
            settings_open: false,
            localValue: { ...this.modelValue },
            debouncedEmit: null,
            settings_scheme: [
                {
                    type: 'settings_switcher',
                    field: 'enabled',
                    label: 'Блок включен',
                },
                {
                    type: 'settings_switcher',
                    field: 'show_name',
                    label: 'Показывать имя',
                },
                {
                    type: 'settings_switcher',
                    field: 'show_desc',
                    label: 'Показывать описание',
                },
                {
                    type: 'settings_switcher',
                    field: 'show_code',
                    label: 'Показывать код',
                },
            ],
        }
    },

    watch: {
        modelValue: {
            handler(val) {
                this.localValue = { ...val }
            },
            deep: true
        }
    },

    mounted() {
        this.debouncedEmit = debounce(this.emitUpdate, 500)
    },

    computed: {
        name() {
            return this.modelValue.name || null
        }
    },

    methods: {
        onInput() {
            this.debouncedEmit()
        },

        emitUpdate() {
            this.$emit('update:modelValue', this.localValue)
        }
    }
}
</script>

<style lang="scss">
.code-block {
    background: #fff;

    &__body {
        display: flex;
        border: 1px solid #ddede1;
        background: #f5fff8;
        color: #66766b;
        border-radius: 5px;
        margin: 5px;
        padding: 5px 8px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    &__settings {
        cursor: pointer;
    }

    &__slug {

    }
}
</style>
