<template>
<div class="threes-line-control">
    {{ line_index }}
</div>
</template>
<script>
export default {
    name: 'ThreesLineControl',
    props: {
        line_index: null,
    }
}
</script>
<style lang="scss">
.threes-line-control {
    width: 27px;
    display: flex;
    align-content: center;
    justify-content: flex-end;
    align-items: center;
    background: #efefef;
    padding: 0 5px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: bold;
    color: #505e6f;
    margin-right: 5px;
    cursor: pointer;
    transition: 200ms;

    &:hover {
        background: #4978d3;
        color: #fff;
    }
}
</style>
