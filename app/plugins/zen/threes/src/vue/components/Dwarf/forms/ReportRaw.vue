<template>
    <div class="report-param">
        <div class="report-param__key">
            {{ title }}
        </div>
        <div class="report-param__value">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "ReportRaw",
    props: {
        title: {
            type: String,
            default: null
        }
    }
}
</script>

<style lang="scss">
.report-param {
    display: flex;
    flex-direction: row;
    background: #f2f2f2;
    font-size: 15px;
    margin: 3px 0;

    div {
        padding: 5px 10px;
    }

    &__key {
        width: 400px;
        font-weight: bold;
        color: #6a6a6a;
        border-right: 1px solid #c1c1c1;
    }
    &__value {
        flex: 1 0 0;
    }
}
</style>
