<template>
    <div class="alerts">
        <div class="alerts__body">
            <Message v-for="alert of alerts"
                     :severity="alert.type"
                     :sticky="false"
            >
                {{ alert.text }}
            </Message>
        </div>
    </div>
</template>

<script>
/*
type = error || warn || info || success
*/

import Message from 'primevue/message';
export default {
    name: "AlertsApp",
    components: {
        Message
    },
    data() {
        return {
            ths: window.ths,
            alerts: []
        }
    },
    created() {
        this.ths.mountComponent('Alerts', this)
    },
    unmounted() {
        this.ths.unmountComponent('Alerts')
    },
    methods: {
        push(input)
        {
            if (Array.isArray(input)) {
                input.forEach(alert => {
                    this.alerts.push(alert)
                })
            } else {
                this.alerts.push(input)
            }
        }
    }
}
</script>

<style lang="scss">
.alerts {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 30px;
    display: flex;
    justify-content: center;
    user-select: none;
    z-index: 100000;
    &__body {
        width: 100%;
        max-width: 600px;
    }

    .p-message-close {
        margin-left: auto;
    }
}
</style>
