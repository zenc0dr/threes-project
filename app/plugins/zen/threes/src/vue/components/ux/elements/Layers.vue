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
                        <div class="threes-layers__control">
                            <div @click="openParams(layer)" class="threes-layers__control__button">
                                Параметры
                            </div>
                            <div @click="openSettings(layer)" class="threes-layers__control__button">
                                Настройки
                            </div>
                        </div>
                    </div>
                </template>
            </draggable>
        </div>
        <div class="threes-layers__panel">
            right pan
        </div>
    </div>
    <modal :show="open_layer_params !== null" @close="open_layer_params = null">
        <FormFitter
            :scheme="layer_params"
            v-model="open_layer_params"
        />
    </modal>
</template>

<script>
import draggable from 'vuedraggable';
import icon from './icon.vue';
import modal from './modal.vue';

export default {
    name: "Layers",
    props: {
        node: null,
        backend: null
    },
    emits: [
        'update'
    ],
    components: {
        draggable,
        icon,
        modal,
    },
    data() {
        return {
            local_layers: [],
            open_layer_params: null,
            layer_params: [
                {
                    field: 'name',
                    type: 'string',
                    label: 'Название слоя',
                    size: 'full'
                },
                {
                    field: 'description',
                    type: 'textEditor',
                    label: 'Описание слоя',
                    size: 'full'
                },
            ]
        };
    },
    computed: {
        layers() {
            return this.node?.layers ?? [];
        }
    },
    watch: {
        layers(new_layers) {
            this.local_layers = [...new_layers];
        }
    },
    created() {
        this.local_layers = [...this.layers];
    },
    methods: {
        openLayer(layer) {
            this.open_layer_params = layer;
        },
        onDragEnd() {
            this.$emit('update', {
                ...this.node,
                layers: [...this.local_layers]
            }, true);
        },
        openParams(layer) {
            this.open_layer_params = layer
        },
        openSettings(layer) {
            window.open(
                location.origin + `/${this.backend}/zen/threes/layercontroller/update/` + layer.lid,
                '_blank'
            )
        }
    }
};
</script>

<style lang="scss">
.threes-layers {
    display: flex;
    flex-direction: row;

    &__draggable {
        min-height: 50px;
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
        cursor: move;
        transition: 200ms;

        &:hover {
            background: #e8e8e8;
        }
    }

    &__icon {
        display: flex;
        align-items: center;
        margin-right: 15px;
    }

    &__title {
        flex: 1;
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
        margin-right: 10px;
        p {
            margin-bottom: 10px;
        }
    }

    &__control {
        display: flex;
        align-items: center;

        &__button {
            padding: 5px 10px;
            background: #ffffff;
            margin: 3px;
            border-radius: 4px;
            font-size: 11px;
            font-weight: bold;
            color: #666;
            border: 1px solid #d8d8d8;
            cursor: pointer;
            transition: 200ms;

            &:hover {
                background: #ecffdc;
                color: #617054;
            }
            &:active {
                transform: scale(0.95);
            }
        }
    }
}
</style>
