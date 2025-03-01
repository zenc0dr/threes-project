<template>
    <Modal :max-width="1000" title="Библиотека изображений" :show="show_modal" @close="$emit('close')">
        <div class="media-folder">
            <div class="media-folder__left-side">
                <div class="media-folder__tag"
                     @click="selected_folder = null"
                     :class="{active: selected_folder === null}">
                    <div class="media-folder__tag__name">/</div>
                </div>
                <div @click="selectFolder(folder)"
                     v-for="folder in folders"
                     :class="{active: selected_folder && (folder.id === selected_folder.id)}"
                     class="media-folder__tag">
                    <div class="media-folder__tag__name">{{ folder.name }}</div>
                    <div @click.stop="removeFolder(folder)" class="media-folder__tag__close">
                        <i class="bi bi-x-circle"></i>
                    </div>
                </div>
                <div class="media-folder__add">
                    <div class="p-inputgroup">
                        <Button @click="addFolder" class="p-button-sm" label="Добавить"/>
                        <InputText @keyup.enter="addFolder" v-model="new_folder_name" class="p-inputtext-sm"
                                   placeholder="Имя каталога"/>
                    </div>
                </div>
            </div>
            <div class="media-folder__right-side">

                <div class="image-box__add-wrap">
                    <template v-if="!images_upload_process">
                        <i class="bi bi-plus-circle-dotted"></i> Добавить изображения
                        <input accept=".jpg,.jpeg,.png" type="file" multiple @input="isDropFiles">
                    </template>
                    <template v-else>
                        Загрузка изображений ({{ images_upload_progress }} из {{ uploading_images_count }}) ...
                        <div class="image-box__preloader" :style="`width:${ preloader_progress }%`"></div>
                    </template>
                </div>
                <div class="media-folder__previews">
                    <div v-for="image in images" class="image-box__preview">
                        <div class="image-box__preview__image"
                             @click="editable_image = image"
                             :style="`background-image:url(${ image.disk_name })`">
                        </div>
                        <div class="image-box__preview__info">
                            <div class="image-box__preview__info__row">
                                <div class="image-box__preview__info__name">
                                    URL:
                                </div>
                                <div class="image-box__preview__info__value">
                                    <a target="_blank" :href="`${image.disk_name}`">{{
                                        image.disk_name
                                        }}</a>
                                </div>
                            </div>
                            <div class="image-box__preview__info__row">
                                <div class="image-box__preview__info__name">
                                    Заголовок:
                                </div>
                                <div class="image-box__preview__info__value">
                                    {{ image.title }}
                                </div>
                            </div>
                            <div class="image-box__preview__info__row">
                                <div class="image-box__preview__info__name">
                                    Описание:
                                </div>
                                <div class="image-box__preview__info__value">
                                    {{ image.description }}
                                </div>
                            </div>
                            <div class="image-box__preview__info__row">
                                <div class="media-folder__add-image">
                                    <div @click.stop="selectImage(image)"
                                         class="btn btn-primary"
                                         :class="isSelected(image) ? 'btn-success' : 'btn-primary'"
                                    >
                                        {{  isSelected(image) ? 'Добавлено' : 'Добавить' }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="image-box__preview__control">
                            <i @click="removeImage(image)" class="bi bi-trash-fill remove"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Modal>
</template>

<script>
import Modal from "../forms/Modal";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

export default {
    name: "DwarfMediaFolder",
    components: {
        Modal, InputText, Button
    },
    emits: ['select', 'close'],
    props: {
        show_modal: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            images: [],

            editable_image: null, // Редактирование изображения

            images_upload_process: false, // Процесс загрузки изображений
            images_upload_progress: 0, // Сколько загружено
            uploading_images_count: 0, // Сколько будет загружено всего
            uploading_images: [], // Загружаемые изображения
            image_max_width: 2000, // Максимальная ширина изображения
            image_max_height: 2000, // Максимальная высота изображения

            folders: null, // Список каталогов
            selected_folder: null, // Выбранный каталог
            new_folder_name: null, // Имя нового каталога

            selected_images: [], // Выбранные изображения
        }
    },
    watch: {
        show_modal(state) {
            if (state) {
                this.loadImages()
            }
        },
        selected_folder() {
            this.loadImages()
        }
    },
    computed: {
        image_count() {
            let count = this.images ? this.images.length : 0
            return count + ' ' + APP.inc(count, ['изображение', 'изображения', 'изображений'])
        },
        preloader_progress() {
            let of = this.uploading_images_count // всего
            let to = this.images_upload_progress // счётчик
            if (!of) {
                return 0
            }

            return to * 100 / of
        },
        folder_id() {
            return this.selected_folder ? this.selected_folder.id : null
        }
    },
    methods: {
        loadImages() {
            APP.api({
                url: '/api/images:media',
                data: {
                    folder_id: this.folder_id
                },
                then: response => {
                    if (response.success) {
                        this.images = response.images
                        this.folders = response.folders
                    }
                }
            })
        },

        loadFolders() {
            APP.api({
                url: '/api/images:folders',
                then: response => {
                    if (response.success) {
                        this.folders = response.folders
                    }
                }
            })
        },

        // Добавление новых изображений
        isDropFiles(event) {
            let files = Array.from(event.target.files)
            this.uploading_images_count = files.length
            files.map(file => {
                if (!['jpg', 'jpeg', 'png'].includes(file.type.split('/')[1])) {
                    return
                }

                let file_reader = new FileReader()
                file_reader.readAsDataURL(file);
                file_reader.onload = (e) => {
                    let base64_data = e.target.result
                    this.resizeImage(
                        base64_data,
                        file.type,
                        this.image_max_width,
                        this.image_max_height,
                        (resized_base64_data) => {
                            //this.image = resized_base64_data
                            this.addImage(file.name, resized_base64_data)
                        })
                }
            })
        },

        // Функция ресайза изображений
        resizeImage(base64_data, file_type, max_width, max_height, onResize) {
            let image = new Image();
            image.src = base64_data;
            image.onload = function () {
                let canvas = document.createElement("canvas")
                let workflow = canvas.getContext("2d")
                workflow.drawImage(image, 0, 0)
                let width = image.width
                let height = image.height
                if (width > height) {
                    if (width > max_width) {
                        height *= max_width / width
                        width = max_width
                    }
                } else {
                    if (height > max_height) {
                        width *= max_height / height
                        height = max_height
                    }
                }
                canvas.width = width
                canvas.height = height
                workflow = canvas.getContext("2d")
                workflow.drawImage(image, 0, 0, width, height)
                let base64_data = canvas.toDataURL(file_type)
                onResize(base64_data)
            }
        },

        // Добавить изображение
        addImage(file_name, base64) {
            this.uploading_images.push({file_name, base64})
            this.uploadImages()
        },
        uploadImages() {
            if (this.images_upload_process) {
                return
            }
            this.images_upload_process = true
            this.uploadImage()
        },
        uploadImage() {
            if (!this.uploading_images.length) {
                this.images_upload_process = false
                this.images_upload_progress = 0
                return
            }

            this.images_upload_progress++
            let image = this.uploading_images.shift()
            image.model_name = 'media_folder'

            APP.api({
                url: '/api/images:put',
                data: {
                    image,
                    folder_id: this.folder_id
                },
                no_preloader: true,
                then: response => {
                    if (response.success) {
                        this.images.push(response.image)
                        this.uploadImage()
                    }
                }
            })
        },
        removeImage(image) {
            APP.api({
                url: '/api/images:remove',
                data: {
                    image_id: image.id
                },
                then: response => {
                    if (response.success) {
                        let index = this.images.indexOf(image)
                        this.images.splice(index, 1)
                    }
                }
            })
        },
        addFolder() {
            APP.api({
                url: '/api/images:add-folder',
                data: {
                    folder: this.new_folder_name
                },
                then: response => {
                    if (response.success) {
                        this.new_folder_name = null
                        this.folders = response.folders
                    }
                }
            })
        },
        selectFolder(folder) {
            this.selected_folder = folder
        },
        removeFolder(folder) {
            APP.api({
                url: '/api/images:remove-folder',
                data: {
                    folder_id: folder.id
                },
                then: response => {
                    if (response.success) {
                        this.folders = response.folders
                    }
                }
            })
        },
        isSelected(image) {
            return this.selected_images.includes(image.id)
        },
        selectImage(image) {
            if (this.isSelected(image)) {
                return
            }

            this.selected_images.push(image.id)
            this.$emit('select', image)
        }
    }
}
</script>

<style lang="scss">
.media-folder {
    display: flex;
    flex-direction: row;

    &__left-side {
        width: 300px;
        display: flex;
        flex-direction: column;
        padding-right: 5px;
    }

    &__tag {
        display: flex;
        flex-direction: row;
        padding: 6px 10px;
        margin: 3px 0;
        background: #fdff89;
        color: #63777d;
        font-weight: bold;
        font-size: 12px;
        border-radius: 5px;
        justify-content: space-between;
        transition: 300ms;
        cursor: pointer;

        &__name {
            flex: 1 0 0;
        }

        &__close {
            cursor: pointer;
            display: flex;
            width: 20px;
            i {
                font-size: 20px;
                transition: 200ms;
            }
            &:hover i {
                color: red;
            }
        }

        &.active {
            background: #fcff46;
            color: #5c5c5c;
        }
    }

    &__add {
        width: 100%;
        margin-top: 10px;
    }

    &__add-image {
        display:flex;
        justify-content:flex-end;
    }

    &__previews {
        margin-top: 10px;
        padding: 0 5px;
    }


    &__right-side {
        flex: 1 0 0;
    }
}
</style>
