<template>
    <div class="kriti-json-editor" :class="size">
        <div class="kriti-json-editor__label">{{ inner_label }}</div>
        <Vue3JsonEditor
            v-model="localJson"
            :show-btns="false"
            :expandedOnStart="true"
            @json-change="onJsonChange"
        />
    </div>
</template>

<script>
import { Vue3JsonEditor } from 'vue3-json-editor'
export default {
    props: {
        json: {
            type: Object,
            required: true
        },
        label: {
            type: [String, Function],
            default: null
        },
        size: {
            type: String,
            default: 'full'
        },
    },
    components: {
        Vue3JsonEditor
    },
    data(){
        return {
            localJson: this.json
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
        onJsonChange(value) {
            this.$emit('update:json', value)
        }
    },
    watch: {
        json(newVal) {
            this.localJson = newVal
        }
    }
}
</script>
<style lang="scss">
.kriti-json-editor {
    background: #fff;
    color: #000;
    padding: 15px;
    margin-bottom: 20px;

    div.jsoneditor-field, div.jsoneditor-value, div.jsoneditor td, div.jsoneditor th, div.jsoneditor textarea, .jsoneditor-schema-error {
        font-family: 'Exo 2', sans-serif;
        font-size: 16px;
    }

    div.jsoneditor {
        border: none;
    }

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
}
</style>
