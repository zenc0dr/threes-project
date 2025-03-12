<template>
<div class="threes-layers">
    <div class="threes-layers__panel">
        <div v-for="layer in layers" class="threes-layers__layer">
            <div class="threes-layers__icon">
                <icon :src="layer.icon" />
            </div>
            <div class="threes-layers__title">
                <div class="threes-layers__name">
                    {{ layer.name }}
                </div>
                <div class="threes-layers__description" v-html="layer.description"></div>
            </div>
        </div>
    </div>
    <div class="threes-layers__panel">
        SECOND
    </div>
</div>
</template>
<script>
import icon from './icon.vue'
export default {
    name: "Layers",
    props: {
        node: null
    },
    components: {
        icon
    },
    computed: {
        layers() {
            return this.node?.layers ?? []
        }
    }
}
</script>
<style lang="scss">
.threes-layers {
    display: flex;
    flex-direction: row;

    &__panel {
        flex: 1 1 50%;
    }

    &__layer {
        padding: 10px 15px;
        display: flex;
        background: #f1f1f1;
        border-radius: 4px;
        margin: 4px;
    }

    &__icon {
        display: flex;
        align-items: center;
        margin-right: 15px;
    }

    &__title {

    }

    &__name {
        font-size: 17px;
        color: #37375d;
    }

    &__description {

    }
}
</style>
