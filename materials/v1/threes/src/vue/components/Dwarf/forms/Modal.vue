<template>
    <div v-if="reallyShow" class="modal dwarf-modal" style="display:block">
        <div class="modal-dialog" :style="inner_style">
            <div class="modal-content">
                <template v-if="loaded || loaded === null">
                    <div class="modal-header d-flex">
                        <div v-if="title" class="fs-3 fw-boldest">{{ title }}</div>
                        <slot name="header"></slot>
                        <div v-if="!blockClose" class="dwarf-modal__close" @click="closeModal">
                            <div class="dwarf-modal__close__btn">
                                <i class="bi bi-x"></i>
                            </div>
                        </div>
                    </div>
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                    <div v-if="$slots.footer" class="modal-footer">
                        <slot name="footer"></slot>
                    </div>
                </template>
                <template v-else>
                    <div class="modal-body">
                        <div class="dwarf-modal__preloader">
                            Загрузка...
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Modal',
    props: {
        show: {
            type: Boolean,
            required: true,
        },
        title: {
            type: String,
            default: null
        },
        loaded: {
            type: Boolean,
            default: null
        },
        maxWidth: {
            type: [Number, String],
            default: 800
        },
        blockClose: {
            type: Boolean,
            default: false
        },
        style: {
            type: String,
            default: null,
        }
    },
    data() {
        return {
            reallyShow: false
        }
    },
    computed: {
        inner_style() {
            if (this.style) {
                return this.style
            }

            let style = []
            if (typeof this.maxWidth === "number") {
                style.push(`max-width:${this.maxWidth}px`)
            }
            if (typeof this.maxWidth === "string") {
                style.push(`max-width:${this.maxWidth}`)
            }
            return style.join(';')
        }
    },
    watch: {
        show(value) {

            if (!value) {
                this.reallyShow = false
                return
            }

            if (this.loaded === null) {
                this.reallyShow = true
                return
            }

            setTimeout(() => {
                this.reallyShow = true
            }, 300);
        },
        loaded(value) {
            if (value) this.reallyShow = true
        },
        reallyShow(value) {
            if (value) {
                $('body').css('overflow-y', 'hidden')
            } else {
                $('body').css('overflow-y', 'auto')
            }
        }
    },
    methods: {
        closeModal() {
            if (!this.blockClose) {
                this.reallyShow = false
                this.$emit('close')
            }
        }
    }
}
</script>
<style lang="scss">
.dwarf-modal {
    background: #0000009c;
    overflow-y: auto;
    animation: modal_flopped 200ms;

    &__close {
        margin-left: auto;
        cursor: pointer;
        &__btn {
            display: flex;
            background: #dcedff;
            color: #62707f;
            width: 39px;
            height: 30px;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            i {
                font-size: 21px;
            }
        }
    }

    &__preloader {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 300px;
    }

    .modal-dialog {
        transition: all 300ms ease 0s;
    }
}

/* Animations */
@keyframes modal_flopped {
    from {
        transform: scale(1.3);
    }
    to {
        transform: scale(1);
    }
}
</style>
