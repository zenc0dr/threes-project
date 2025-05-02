<template>
<div v-if="modelValue || !readonly" class="dwarf-users" :class="size">
    <div v-if="inner_label" class="dwarf-users__label">
        {{ inner_label }}
    </div>
    <div class="dwarf-users__body">
        <div v-for="user in modelValue" class="dwarf-users__user">
            <div class="dwarf-users__avatar">
                <div class="dwarf-users__avatar__img"
                     :class="{'no-avatar':!user.avatar}"
                     :style="`background-image:url(${ avatar(user) })`">
                </div>
            </div>
            <div class="dwarf-users__info">
                <div class="dwarf-users__info__name">{{ user.name }}</div>
                <div class="dwarf-users__info__email">{{ user.email }}</div>
            </div>
            <div v-if="!readonly" class="dwarf-users__controls">
                <i @click="deleteUser(user)" class="bi bi-trash-fill"></i>
            </div>
        </div>
        <div v-if="!readonly" @click="show_user_list = true" class="dwarf-users__add-user">
            <i class="bi bi-plus-square"></i>
        </div>
    </div>
    <Modal :show="show_user_list" @close="show_user_list = false">
        <Records
            ref="users_modal"
            v-if="show_user_list"
            records_url="users:records"
            :records_buttons="users_records_buttons"
        />
    </Modal>
</div>
</template>

<script>
import Modal from "../forms/Modal";
export default {
    name: "DwarfUsers",
    emits: ['update:modelValue'],
    components: {
        Modal
    },
    props: {
        modelValue: null,
        size: {
            type: String,
            default: 'full'
        },
        label: {
            type: [String, Function],
            default: null
        },
        readonly: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        inner_label() {
            if (this.label === null) {
                return null
            }
            if (typeof this.label === 'string') {
                return this.label
            }
            return this.label()
        }
    },
    data() {
        return {
            show_user_list: false,
            users_records_buttons: [
                {
                    name: 'Добавить выбранных',
                    icon: 'bi bi-plus-square',
                    show: () => {
                        return this.$refs.users_modal.multiselect
                    },
                    disabled: () => {
                        return !(this.$refs.users_modal.selected && this.$refs.users_modal.selected.length)
                    },
                    type: 'success',
                    click: () => {
                        this.$refs.users_modal.handleSelected(selected => {
                            APP.api({
                                url: '/api/users:component',
                                data: {
                                    users_ids: selected
                                },
                                then: response => {
                                    let model = _.cloneDeep(this.modelValue)
                                    response.forEach(user => {
                                        let add = true
                                        this.modelValue.forEach(added_user => {
                                            if (added_user.id === user.id) {
                                                add = false
                                            }
                                        })
                                        if (add) {
                                            model.push(user)
                                        }
                                    })
                                    this.$emit('update:modelValue', model)
                                }
                            })
                        })
                    }
                }
            ]
        }
    },
    methods: {
        avatar(user) {
            return user.avatar ? user.avatar : '/images/svg/user.svg'
        },
        deleteUser(remove_user) {
            let model = _.cloneDeep(this.modelValue)
            for (let index in model) {
                if (remove_user.id === model[index].id) {
                    model.splice(index, 1)
                }
            }
            this.$emit('update:modelValue', model)
        }
    }
}
</script>

<style lang="scss">
.dwarf-users {
    margin-bottom: 15px;
    &__label {
        font-weight: bold;
        color: #777;
        font-size: 14px;
        margin-bottom: 4px;
    }
    &__body {
        display: flex;
        background: #e2e4e8;
        padding: 10px;
        border-radius: 5px;
        flex-direction: row;
        flex-wrap: wrap;
    }
    &__user {
        display: flex;
        flex-direction: row;
        background: #fff;
        border-radius: 5px;
        padding: 15px;
        margin: 5px;
        justify-content: space-between;
    }
    &__avatar {
        margin-right: 10px;
        &__img {
            width: 50px;
            height: 50px;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 5px;
            &.no-avatar {
                opacity: 0.3;
            }
        }
    }
    &__info {
        font-size: 13px;
        &__name {
            font-weight: bold;
            color: #444;
        }
        &__email {
            font-size: 12px;
        }
    }
    &__controls {
        display: flex;
        margin-left: 15px;
        i {
            color: #b6b6b6;
            cursor: pointer;
            transition: 200ms;
            &:hover {
                color: red;
            }
        }
    }
    &__add-user {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 87px;
        background: #c9c9c9;
        border-radius: 5px;
        margin: 5px;
        transition: 600ms;
        cursor: pointer;

        i {
            font-size: 47px;
            color: #9c9c9c;
        }

        &:hover {
            background: #0d6efd;
            color: #fff;
            i {
                color: #fff;
            }
        }
    }
    &.full {
        width: 100%
    }

    &.half {
        width: calc(50% - 7px);
    }

    &.quarter {
        width: calc(25% - 7px);
    }
}
</style>
