<template>
    <div class="dwarf-files" :class="size">
        <div v-if="inner_label" class="dwarf-files__label">
            {{ inner_label }}
        </div>
        <div class="dwarf-files__drop-zone">
            <div class="dwarf-files__drop-zone__drop">
                <i class="bi bi-cloud-arrow-up"></i> Перетащите файлы для загрузки
            </div>
            <input type="file" multiple @input="isDropFiles">
        </div>
        <div class="dwarf-files__preview">
            <div v-for="file in files_list"
                 class="dwarf-files__file"
                 :class="{stored:file.id}"
                 @click="modal_file = file"
            >
                <i :class="icon(file)"></i>
                <i v-if="file.description" class="bi bi-chat-left-text description"></i>
                {{ file.name }}
            </div>
        </div>
        <Modal title="Файл" :show="modal_file !== null" @close="modal_file = null">
            <FormFitter v-if="modal_file" v-model="modal_file" :scheme="modal_form"/>
            <ControlPanel float="left" :buttons="modal_buttons"/>
        </Modal>
    </div>
</template>

<script>
import Modal from "../forms/Modal";
import ControlPanel from "../forms/ControlPanel";
export default {
    name: "DwarfFiles",
    components: {
        Modal,
        ControlPanel
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
        readonly: {
            type: Boolean,
            default: false,
        }
    },
    mounted() {
        this.files_list = this.modelValue
    },
    watch: {
        modelValue(modelValue) {
            if (!modelValue) {
                return
            }
            for (let i in modelValue) {
                let exist = false
                for (let ii in this.files_list) {
                    if (this.files_list[ii].id && this.files_list[ii].id === modelValue[i].id) {
                        exist = true
                    }
                }
                if (!exist) {
                    this.files_list.push(modelValue[i])
                }
            }
        },
        files_list: {
            handler(files_list) {
                if (!files_list) {
                    this.$emit('update:modelValue', [])
                    return
                }
                this.$emit('update:modelValue', files_list.filter(file => {
                    return !!file.id
                }))
            },
            deep: true
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
            modal_file: null,
            upload_process: false,
            size_limit: 30, // В мегабайтах
            total_size: 0,
            total_size_limit: 20,
            files_list: [], // Список загруженных в дропзону файлов
            uploaded_files: [], // Список загруженных на бекенд файлов
            type_names: {
                doc: [
                    'doc', 'docx', 'xls', 'xlsx', 'txt', 'csv',
                    'pdf', 'log', 'json', 'xml', 'ini', 'cfg', 'epub', 'fb2'
                ],
                sound: ['mp3', 'wav', 'ogg'],
                video: ['avi', 'mp4', 'mpeg4', 'mkv'],
                image: ['jpg', 'jpeg', 'gif', 'png', 'webp', 'svg'],
                archive: ['zip', 'rar', '7z', 'gz', 'iso'],
                dump: ['sql'],
                code: ['js', 'php', 'htm', 'html', 'vue'],
                system: ['deb', 'apk', 'exe', 'bat']
            },
            icons: {
                doc: 'bi bi-file-earmark-text-fill',
                sound: 'bi bi-soundwave',
                video: 'bi bi-youtube',
                image: 'bi bi-image',
                archive: 'bi bi-file-zip-fill',
                dump: 'bi bi-database-fill',
                code: 'bi bi-file-code-fill',
                system: 'bi bi-box2-fill',
                simple: 'bi bi-file-earmark-fill',
            },
            modal_form: [
                {
                    type: 'string',
                    label: 'Имя файла',
                    field: 'name',
                    size: 'full',
                },
                {
                    type: 'textarea',
                    label: 'Описание',
                    field: 'description',
                    size: 'full',
                }
            ],
            modal_buttons: [
                {
                    name: 'Скачать',
                    icon: 'bi bi-cloud-download',
                    click: () => {
                        this.downloadFile(this.modal_file)
                    }
                },
                {
                    name: 'Удалить',
                    icon: 'bi bi-trash-fill',
                    type: 'danger',
                    click: () => {
                        this.deleteFile()
                    }
                }
            ]
        }
    },
    methods: {
        icon(file) {
            if (file.uploading) {
                return 'pi pi-spin pi-spinner'
            }

            if (file.type_name) {
                return this.icons[file.type_name]
            }

            if (file.disk_name) {
                return this.icons[this.defineTypeName(this.getFileExtension(file.disk_name))]
            }
        },
        defineTypeName(ext) {
            for (let type in this.type_names) {
                if (this.type_names[type].includes(ext)) {
                    return type
                }
            }
            return 'simple'
        },
        isDropFiles() {
            Array.from(event.target.files).forEach((file) => {
                let ext = this.getFileExtension(file.name)
                if (!ext) {
                    return
                }

                if (!this.files_list) {
                    this.files_list = []
                }

                // Если файл уже загружен пропустить
                if (this.files_list.find(record => record.name === file.name)) {
                    return
                }

                // Добавить файлу код типа
                file.type_name = this.defineTypeName(ext)

                if (file.size > this.size_limit * 1048576) {
                    Alerts.push([
                        {
                            type: 'warn',
                            text: file.name + ' не может загружен, его размер превышает ' + this.size_limit + 'Mb'
                        }
                    ])
                    return
                }

                this.files_list.push(file)
            })

            this.uploadFiles(0)
        },
        getFileExtension(filename) {
            let ext = /\.([^\.]+)$/.exec(filename)
            if (!ext) {
                return
            }
            return ext[1]
        },
        uploadFiles(index) {
            if (!this.files_list[index]) {
                return
            }
            if (this.files_list[index].id) {
                index++
                this.uploadFiles(index)
                return
            }
            this.uploadFile(this.files_list[index], index, () => {
                index++
                this.uploadFiles(index)
            })
        },
        uploadFile(file, index, fn) {
            file.uploading = true
            let formData = new FormData()
            formData.append('file', file)
            APP.api({
                url: '/api/files:uploadFile',
                data: formData,
                config: {headers: {'Content-Type': 'multipart/form-data'}},
                no_preloader: true,
                then: response => {
                    if (response.success) {
                        this.files_list[index] = response.file
                        fn()
                    }
                }
            })
        },
        downloadFile(file) {
            if (!file.id) {
                return
            }
            let a = document.createElement('a')
            a.href = location.origin + '/storage/files/' + file.disk_name
            a.download = file.name
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        },
        deleteFile() {
            Confirmation.ask({
                    alert: 'Удалить файл?',
                    yes: 'Да',
                    no: 'Нет'
                },
                () => {
                    for (let i in this.files_list) {
                        if (this.files_list[i].id === this.modal_file.id) {
                            this.files_list.splice(i, 1)
                            break
                        }
                    }
                    APP.api({
                        url: '/api/files:deleteFile',
                        data: {
                            file: this.modal_file
                        },
                        then: response => {
                            if (response.success) {
                                this.modal_file = null
                            }
                        }
                    })
                }
            )
        }
    }
}
</script>

<style lang="scss">
.dwarf-files {
    display: flex;
    flex-direction: column;

    &__label {
        font-weight: bold;
        color: #777;
        font-size: 14px;
        margin-bottom: 4px;
    }

    &__drop-zone {
        position: relative;
        height: 84px;

        &__drop {
            position: absolute;
            display: flex;
            border: 2px dashed #b1b1b1;
            border-radius: 10px;
            top: 10px;
            left: 10px;
            right: 10px;
            bottom: 10px;
            pointer-events: none;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            color: #b5b5b5;

            i {
                margin-right: 5px;
            }
        }

        input {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0;
            cursor: pointer;
        }
    }

    &__preview {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    &__file {
        display: flex;
        border: 1px solid #e9e9e9;
        background: #f8f8f8;
        border-radius: 5px;
        padding: 5px 10px;
        font-size: 15px;
        margin: 5px;
        align-items: center;
        color: #7a7a7a;
        cursor: pointer;
        transition: 300ms;

        i {
            color: #3d586d;
            margin-right: 11px;
            font-size: 20px;
        }
        .description {
            color:#0a53be;
        }

        &.stored {
            border: 1px solid #d2dde7;
            background: #e7f3ff;
            color: #5b666f;
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
