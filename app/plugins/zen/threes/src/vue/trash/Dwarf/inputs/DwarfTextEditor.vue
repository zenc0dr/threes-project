<template>
    <div class="text-editor" :class="size">
        <div class="text-editor__label">
            {{ inner_label }}
            <i v-if="crypto"
               @click="enterKey"
               :class="`bi bi-${ key ? 'un' : '' }lock-fill text-editor__label__crypto`"
            ></i>
            <i @click="switchEdit" :class="{ active: edit }" class="bi bi-pencil-square"></i>
        </div>
        <Editor v-if="edit"
                v-model="content">
            <template #toolbar>
                <span class="ql-formats">
                    <select class="ql-header"></select>
                </span>
                <span class="ql-formats">
                    <button class="ql-bold"></button>
                    <button class="ql-italic"></button>
                    <button class="ql-underline"></button>
                    <button class="ql-strike"></button>
                </span>

                <span class="ql-formats">
                    <button class="ql-list" value="ordered"></button>
                    <button class="ql-list" value="bullet"></button>
                </span>

                <span class="ql-formats">
                    <select class="ql-align">
                        <option selected></option>
                        <option value="center"></option>
                        <option value="right"></option>
                        <option value="justify"></option>
                    </select>
                </span>

                <span class="ql-formats">
                    <select class="ql-color"></select>
                    <select class="ql-background"></select>
                </span>

                <span class="ql-formats">
                    <button class="ql-code-block"></button>
                    <button class="ql-image"></button>
                    <button class="ql-link"></button>
                </span>
            </template>
        </Editor>
        <div v-else class="text-editor__page" v-html="content"></div>
    </div>
    <Modal :show="key_modal" @close="key_modal = false">
        <DwarfString
            label="Ключ шифрования"
            type="password"
            v-model="key_modal_key"
        />
        <ControlPanel
            :buttons="modal_buttons"
        />
    </Modal>
</template>

<script>
import Editor from 'primevue/editor'; // https://www.primefaces.org/primevue/editor
import CryptoJS from 'crypto-js';
import Modal from "../forms/Modal";
import DwarfString from "./DwarfString";
import ControlPanel from "../forms/ControlPanel";
// https://github.com/quilljs/quill/blob/develop/docs/_includes/standalone/full.html
export default {
    name: "DwarfTextEditor",
    components: {
        Editor, Modal, DwarfString, ControlPanel
    },
    emits: ['update:modelValue'],
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
        crypto: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            modal_scheme: [
                {
                    label: 'Ключ шифрования',
                    type: 'password',
                    field: 'password',
                }
            ],
            modal_buttons: [
                {
                    name: 'Расшифровать',
                    click: () => {
                        this.key = this.key_modal_key
                        this.key_modal = false
                    }
                }
            ],
            edit: false,
            key_modal: false,
            key_modal_key: null,
            key: null,
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
        },
        content: {
            get() {
                if (this.crypto && !this.key) {
                    return 'Содержимое зашифровано'
                }
                if (this.crypto && this.key) {
                    return this.deCrypt(this.modelValue, this.key)
                }
                return this.modelValue
            },
            set(value) {
                if (this.crypto && !this.key) {
                    return
                }
                if (this.crypto && this.key) {
                    this.$emit('update:modelValue', this.enCrypt(value, this.key))
                    return
                }
                this.$emit('update:modelValue', value)
            }
        }
    },
    methods: {
        switchEdit() {
            if (this.crypto && !this.edit && !this.key) {
                this.key_modal = true
                return
            }
            this.edit = !this.edit
        },
        enterKey() {
            if (this.key) {
                this.edit = false
                this.key = null
                this.key_modal_key = null
            } else {
                this.key_modal = true
            }
        },
        enCrypt(string, key) {
            return CryptoJS.AES.encrypt(string, key).toString()
        },
        deCrypt(string, key) {
            try {
                let bytes  = CryptoJS.AES.decrypt(string, key)
                return bytes.toString(CryptoJS.enc.Utf8)
            } catch (e) {
                return null
            }
        }
    }
}
</script>
<style lang="scss">
.text-editor {
    margin-bottom: 20px;

    > .p-editor-container {
        width: 100%;
    }

    .p-editor-container .p-editor-content .ql-editor {
        font-size: 15px;
        color: #1a1a1a;
        line-height: 23px;
        font-family: var(--bs-font-sans-serif);
        //padding: 40px 50px;
        padding-bottom: 60px;
        margin-bottom: 30px;
    }

    &__label {
        font-weight: bold;
        display: flex;
        color: #777;
        background: #fff;
        font-size: 14px;
        justify-content: space-between;
        padding: 5px 12px;
        border-radius: 5px 5px 0 0;

        &__crypto {
            margin-right: auto;
            color: #4f8daa;
            margin-left: 10px;
        }

        i {
            cursor: pointer;

            &.active {
                color: #0a53be;
            }
        }
    }

    &__page {
        font-size: 15px;
        color: #1a1a1a;
        line-height: 23px;
        font-family: var(--bs-font-sans-serif);
        background: #fff;
        //padding: 40px 50px;
        padding-bottom: 60px;
        margin-bottom: 30px;
        border-radius: 0 0 5px 5px;

        img {
            max-width: 100%;
            border-radius: 5px;
        }

        p {
            margin: 0;
            padding: 0;
        }

        .ql-syntax {
            background-color: #23241f;
            color: #f8f8f2;
            overflow: visible;
            white-space: pre-wrap;
            margin-bottom: 5px;
            margin-top: 5px;
            padding: 5px 10px;
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
