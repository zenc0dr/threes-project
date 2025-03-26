<template>
    <div class="threes-preloader">
        <div v-if="ths.data.process" class="threes-preloader__square" :style="{ left: square_position + 'px' }"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            square_position: 0,
            animation_frame_id: null,
            ths: window.ths, // Добавляем ссылку на window.ths
        };
    },
    mounted() {
        if (this.ths.data.process) {
            this.animate();
        }
    },
    unmounted() {
        this.cancel_animation();
    },
    watch: {
        'ths.data.process'(new_value) {
            if (new_value) {
                this.animate();
            } else {
                this.cancel_animation();
            }
        },
    },
    methods: {
        animate() {
            this.square_position = (this.square_position + 2) % 150; // Изменено на 150
            this.animation_frame_id = requestAnimationFrame(this.animate);
        },
        cancel_animation() {
            cancelAnimationFrame(this.animation_frame_id);
        },
    },
};
</script>

<style lang="scss">
.threes-preloader {
    width: 150px;
    height: 20px;
    position: relative;
    overflow: hidden;
    background: #f2f2f2;
    border-radius: 4px;

    &__square {
        width: 20px;
        height: 20px;
        background-color: #94b1d1;
        position: absolute;
        border-radius: 4px;
    }
}
</style>
