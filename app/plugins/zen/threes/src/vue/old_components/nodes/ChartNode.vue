<template>
    <div :style="{ width: '100%', height: '300px' }">
        <!-- Здесь компонент для графика, например, Chart.js -->
        <p>Chart for {{ node.layers['threes.units.chart_js'] }}</p>
    </div>
</template>

<script>
export default {
    props: ['node'],
};
</script>
