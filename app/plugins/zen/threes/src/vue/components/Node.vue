<template>
<div v-if="node.nid" class="threes-node">
    <component :is="getNodeComponent(node)" :node="node" />
</div>
</template>
<script>
export default {
    name: "Node",
    props: {
        node: null
    },
    methods: {
        getNodeComponent(node) {
            // Логика выбора компонента на основе слоёв
            if (node.layers['threes.units.chart_js']) {
                return 'ChartNode'; // Компонент для графиков
            } else if (node.layers['threes.units.ui@button']) {
                return 'ButtonNode'; // Компонент для кнопок
            }
            return 'DefaultNode'; // По умолчанию
        },
    }
}
</script>
<style lang="scss">
.threes-node {

}
</style>
