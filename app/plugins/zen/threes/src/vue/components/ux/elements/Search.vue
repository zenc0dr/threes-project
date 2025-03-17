<template>
<div class="threes-search">
    <InputText
        :modelValue="text"
        @input="onInput($event.target.value)"
    />
</div>
</template>
<script>
import InputText from 'primevue/inputtext';
export default {
    name: "Search",
    emits: ["update:text"],
    props: {
        text: ''
    },
    components: {
        InputText
    },
    mounted() {
        this.$emit('update:text', '')
    },
    data() {
        return {
            timer: null,
            timout: 1000, // Задержка перед запросом 2 секунды
        }
    },
    watch: {
        text(text) {
            if (text) {
                this.onInput(text)
            }
        }
    },
    methods: {
        onInput(text) {
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
            if (!text) {
                text = ''
            }
            this.timer = setTimeout(() => {
                this.$emit('update:text', text)
            }, this.timout)
        }
    }
}
</script>
<style lang="scss">
.threes-search {
    padding: 10px;
    background: #fbfbfb;
    border-radius: 4px;
    margin-bottom: 10px;

    .p-inputtext {
        width: 100%;
    }
}
</style>
