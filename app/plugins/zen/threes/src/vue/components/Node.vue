<template>
    <component
        v-if="should_render"
        :is="asyncComponent"
        :node="node"
        :scope="scope"
        @remove="$emit('remove')"
    />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    name: "Node",
    props: {
        node: {
            type: Object,
            required: true
        },
        scope: {
            type: String,
            required: false,
            default: false
        }
    },
    emits: ['remove'],
    computed: {
        should_render() {
            return this.node?.props?.self_content !== false
        },
        asyncComponent() {
            if (!this.node.component) {
                return null
            }
            const component = this.node.component
            try {
                return defineAsyncComponent(() =>
                    import(`./types/${component}.vue`)
                )
            } catch (e) {
                console.warn(`Не удалось загрузить компонент: ${this.node.component}`, e)
                return null
            }
        }
    }
}
</script>
