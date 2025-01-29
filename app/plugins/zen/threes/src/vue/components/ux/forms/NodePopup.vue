<template>
<div class="node-popup" :style="style" v-click-outside-element="handleClickOutside">
    <div class="btn btn-primary">Копировать</div>
    <div class="btn btn-primary">Удалить</div>
    <div class="btn btn-primary">Настройки</div>
</div>
</template>
<script>
export default {
    name: 'NodePopup',
    emits: ['select'],
    props: {
        x: 0,
        y: 0
    },
    data() {
        return {
            buttons: [

            ]
        }
    },
    computed: {
        style() {
            return {
                top: this.y + 'px',
                left: this.x + 'px'
            }
        },
    },
    methods: {
        handleClickOutside() {
            this.select('close');
        },
        select(action) {
            this.$emit('select', action);
        }
    }
}
</script>
<style lang="scss">
.node-popup {
    display: flex;
    position: absolute;
    padding: 7px;
    border-radius: 4px;
    background-color: #d3d3d3;
    flex-direction: column;

    .btn {
        margin: 5px;
    }
}
</style>
