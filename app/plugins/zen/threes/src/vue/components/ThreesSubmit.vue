<template>
    <div class="threes-submit">
        <modal max-width="600px" title="Подтвердите действие" :show="confirm !== null">
            <template #default>
                {{ confirm.message }}
            </template>
            <template #footer>
                <div class="threes-submit__panel">
                    <div @click="accept" class="btn btn-primary">{{ yes_label }}</div>
                    <div @click="denied" class="btn btn-primary">{{ no_label }}</div>
                </div>
            </template>
        </modal>
    </div>
</template>
<script>
import modal from "./modal.vue"
export default {
    name: "ThreesSubmit",
    components: {
        modal
    },
    mounted() {
        if (ths.Submit === null) {
            ths.Submit = this
        }
    },
    computed: {
        yes_label() {
            return this.confirm?.yes_label ?? 'Да'
        },
        no_label() {
            return this.confirm?.no_label ?? 'Нет'
        }
    },
    data() {
        return {
            confirm: null,
        }
    },
    methods: {
        push(response, then) {
            if (response.confirm === 'no') {
                return
            }

            if (response.confirm === 'yes') {
                then(response)
                return
            }

            this.confirm = response.confirm
        },
        accept() {

        },
        denied() {

        }
    }
}
</script>
<style lang="scss">
.threes-submit {

    &__panel {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;

        >div {
            margin: 5px;
        }
    }
}
</style>
