<template>
    <component
        v-if="should_render"
        :is="asyncComponent"
        :data="node.data"
        :node="node"
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
        }
    },
    computed: {
        should_render() {
            return this.node?.props?.self_content !== false
        },
        asyncComponent() {
            if (!this.node.handler) return null

            try {
                return defineAsyncComponent(() =>
                    import(`./nodes/${this.node.handler}.vue`)
                )
            } catch (e) {
                console.warn(`Не удалось загрузить компонент: ${this.node.handler}`, e)
                return null
            }
        }
    }
}
</script>
