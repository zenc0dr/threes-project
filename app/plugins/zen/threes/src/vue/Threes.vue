<template>
    <div class="threes">
        <router-view />
        <threes-alerts />
        <threes-submit />
    </div>
</template>
<script>
import ThreesAlerts from "./components/ThreesAlerts.vue";
import ThreesSubmit from "./components/ThreesSubmit.vue";
export default {
    name: "Threes",
    components: {
        ThreesAlerts,
        ThreesSubmit
    }
}
</script>
<style lang="css">
.threes {
    min-height: 300px;
}
</style>
