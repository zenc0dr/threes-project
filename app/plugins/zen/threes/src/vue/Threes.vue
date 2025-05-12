<template>
    <div class="threes">
        <router-view />
        <threes-alerts />
    </div>
</template>
<script>
import ThreesAlerts from "./components/ThreesAlerts.vue";
export default {
    name: "Threes",
    components: {
        ThreesAlerts
    }
}
</script>
<style lang="css">
.threes {
    min-height: 300px;
}
</style>
