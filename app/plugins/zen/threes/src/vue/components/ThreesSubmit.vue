<template>
    <div class="threes-submit">
        <modal max-width="600px" heading="Подтвердите действие" :show="confirm !== null" @close="clear">
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
    data() {
        return {
            ths: window.ths,
            confirm: null,
            opts: null,
        }
    },
    mounted() {
        this.ths.mountComponent('Submit', this)
    },
    unmounted() {
        this.ths.unmountComponent('Submit')
    },
    computed: {
        yes_label() {
            return this.confirm?.yes_label ?? 'Да'
        },
        no_label() {
            return this.confirm?.no_label ?? 'Нет'
        }
    },
    methods: {
        push(response, opts) {
            if (response.confirm === 'no') {
                return
            }

            if (response.confirm === 'yes') {
                opts.then(response)
                return
            }
            this.opts = opts
            this.confirm = response.confirm
        },
        clear() {
            this.confirm = null
            this.opts = null
        },
        accept() {
            this.opts.data.confirm = 'yes'
            this.ths.api(this.opts)
            this.clear()
        },
        denied() {
            this.clear()
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
