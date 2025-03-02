<template>
    <div class="user-avatar" :style="`width:${width}px;height:${width}px`">
        <div v-if="image" class="user-avatar__img" :style="`background-image:url(${ image.disk_name })`"></div>
        <div v-else class="user-avatar__empty" style="background-image:url(/images/svg/user.svg)"></div>
        <input accept=".jpg,.jpeg,.png" type="file" @input="isDropFiles">
    </div>
</template>

<script>
export default {
    name: "DwarfAvatar",
    props: {
        width: {
            type: Number,
            default: 500
        },
        image_width: {
            type: Number,
            default: 500
        }
    },
    data() {
        return {
            image: null
        }
    },
    created() {
        this.getAvatar()
    },
    methods: {
        isDropFiles(event) {
            let file = Array.from(event.target.files)[0]
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
                    this.image_width,
                    this.image_width, // Так как аватар квадратный, это не ошибка
                    (resized_base64_data) => {
                        this.uploadImage({
                            file_name: file.name,
                            base64: resized_base64_data,
                            model_name: 'User',
                            field: 'avatar'
                        })
                    })
            }
        },
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
        getAvatar() {
            if (APP.data.user.avatar) {
                this.image = {
                    disk_name: APP.data.user.avatar
                }
                return
            }
            APP.api({
                url: '/api/images:avatar',
                then: response => {
                    this.image = response.image
                }
            })
        },
        uploadImage(image) {
            APP.api({
                url: '/api/images:put',
                data: {image},
                no_preloader: true,
                then: response => {
                    this.image = response.image
                    APP.data.user.avatar = response.image.disk_name
                }
            })
        },
    }
}
</script>

<style lang="scss">
.user-avatar {
    position: relative;

    &__img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        background-position: center;
        background-size: cover;
        border-radius: 15px;
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
    &__empty {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        background-position: center;
        background-size: 90%;
        background-repeat: no-repeat;
        opacity: 0.2;
    }
}
</style>
