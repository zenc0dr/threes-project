<template>
    <div v-if="show" class="threes-modal" @keydown.esc="close" @click="close">
        <div :style="style" class="threes-modal__body" ref="modalBody" @click.stop>
            <div v-if="loading" class="threes-modal__loading">
                Загрузка...
            </div>
            <div v-else>
                <div class="threes-modal__header">
                    <div class="threes-modal__header__title">
                        <template v-if="heading">
                            {{ heading }}
                        </template>
                        <template v-else>
                            <slot name="heading"></slot>
                        </template>
                    </div>
                    <div @click="close" class="threes-modal__header__close">
                        <i class="bi bi-x"></i>
                    </div>
                </div>
                <div class="threes-modal__content">
                    <slot></slot>
                </div>
                <div class="threes-modal__footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "modal",
    emits: ['close'],
    props: {
        show: {
            type: Boolean,
            default: false
        },
        heading: {
            type: String,
            default: null,
        },
        maxWidth: {
            type: String,
            default: '90%'
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        style() {
            return {
                maxWidth: this.maxWidth
            }
        }
    },
    mounted() {
        document.addEventListener('keydown', this.handleEscapeKey);
    },
    beforeUnmount() {
        document.removeEventListener('keydown', this.handleEscapeKey);
    },
    methods: {
        close() {
            this.$emit('close');
        },
        handleEscapeKey(event) {
            if (event.key === 'Escape') {
                this.close();
            }
        }
    },
}
</script>

<style lang="scss">
.threes-modal {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #0000009c;
    overflow-y: auto;
    z-index: 100;

    &__body {
        margin-top: 50px;
        padding: 15px;
        border-radius: 10px;
        background-color: #fff;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
    }

    &__loading {
        text-align: center;
    }

    &__header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        &__title {
            color: #424242;
            font-size: 19px;
            margin-right: 10px;
        }

        &__close {
            color: #000;
            i {
                cursor: pointer;
                border-radius: 50%;
                padding: 0px 3px;
                padding-top: 2px;
                font-size: 24px;
                transition: 200ms;
                color: #7b7b7b;

                &:hover {
                    background: #ebebeb;
                    color: #636363;
                }
            }
        }
    }

    &__content {
        margin-top: 10px;
    }

    &__footer {
        margin-top: 20px;
    }
}
</style>
