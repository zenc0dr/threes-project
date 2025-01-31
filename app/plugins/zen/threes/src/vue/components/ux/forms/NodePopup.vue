<template>
<div class="node-popup" :style="style" v-click-outside-element="handleClickOutside">
    <slot :handleClick="handleClick"></slot>
</div>
</template>
<script>
export default {
    name: 'NodePopup',
    emits: ['select', 'close'],
    props: {
        x: 0,
        y: 0
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
            this.$emit('select', 'close');
        },
        handleClick(event) {
            console.log('handleClick event', event);
            const action = event.target.dataset.action;
            if (action) {
                this.$emit('select', action);
            }
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
