<template>
    <div class="pill-param">
        <div class="pill-param__key">
            {{ title }}
        </div>
        <div class="pill-param__value">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "PillItem",
    props: {
        title: {
            type: String,
            default: null
        }
    }
}
</script>

<style lang="scss">
.pill-param {
    display: flex;
    font-size: 12px;
    margin-right: 5px;

    &__key {
        background: #999999;
        padding: 4px 10px;
        border-radius: 5px 0 0 5px;
        color: #fff;
        font-weight: bold;
    }
    &__value {
        background: #ffffff;
        padding: 4px 10px;
        border-radius: 0 5px 5px 0;
        color: #1a1a1a;
    }
}
</style>
