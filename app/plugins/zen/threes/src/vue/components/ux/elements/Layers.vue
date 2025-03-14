<template>
    <div class="threes-layers">
        <div class="threes-layers__panel">
            <draggable
                v-model="local_layers"
                class="threes-layers__draggable"
                item-key="id"
                tag="div"
                @end="onDragEnd"
            >
                <template #item="{ element: layer }">
                    <div class="threes-layers__layer">
                        <div class="threes-layers__icon">
                            <icon :src="layer.icon" />
                        </div>
                        <div class="threes-layers__title">
                            <div class="threes-layers__name">
                                <span class="threes-layers__aspect">{{ layer.aspect }}</span>
                                <span>{{ layer.name }}</span>
                            </div>
                            <div class="threes-layers__description" v-html="layer.description"></div>
                        </div>
                    </div>
                </template>
            </draggable>
        </div>
        <div class="threes-layers__panel">
            <LayerForm/>
        </div>
    </div>
</template>

<script>
import draggable from 'vuedraggable';
import icon from './icon.vue';
import LayerForm from "../forms/LayerForm.vue";

export default {
    name: "Layers",
    props: {
        node: null
    },
    emits: [
        'update'
    ],
    components: {
        draggable,
        icon,
        LayerForm
    },
    data() {
        return {
            local_layers: []
        };
    },
    computed: {
        layers() {
            return this.node?.layers ?? [];
        }
    },
    watch: {
        layers(new_layers) {
            // Синхронизируем local_layers при изменении входного props
            this.local_layers = [...new_layers];
        }
    },
    created() {
        // Инициализируем local_layers при создании компонента
        this.local_layers = [...this.layers];
    },
    methods: {
        onDragEnd() {
            // Эмитируем событие обновления порядка слоев наверх
            this.$emit('update', {
                ...this.node,
                layers: [...this.local_layers]
            }, true);
        }
    }
};
</script>

<style lang="scss">
.threes-layers {
    display: flex;
    flex-direction: row;

    &__draggable {
        min-height: 50px; // Чтобы область перетаскивания была видна даже если слоев нет
    }

    &__panel {
        flex: 1 1 50%;
    }

    &__layer {
        padding: 10px 15px;
        display: flex;
        background: #f1f1f1;
        border-radius: 4px;
        margin: 4px;
        cursor: move; // Показываем, что элемент можно перетаскивать

        &:hover {
            background: #e8e8e8; // Небольшой эффект при наведении
        }
    }

    &__icon {
        display: flex;
        align-items: center;
        margin-right: 15px;
    }

    &__title {
        flex: 1; // Чтобы заголовок занимал доступное пространство
    }

    &__name {
        display: flex;
        font-size: 17px;
        color: #37375d;
        align-items: center;
        align-content: center;
    }

    &__aspect {
        background: #dcdcdc;
        font-size: 13px;
        padding: 2px 6px;
        border-radius: 3px;
        color: #3f3f3f;
        margin-right: 8px;
    }

    &__description {
        // Можно добавить дополнительные стили если нужно
    }
}
</style>
