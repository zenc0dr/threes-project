<template>
<div class="sprite">
    ok sid: {{ sid }}
</div>
</template>
<script>
export default {
    name: "SpriteScheme",
    data() {
        return {
            sid: null,
            test: null
        }
    },
    mounted() {
        this.sid = this.$route.params.sid
        console.log('Идентификатор', this.sid)

        this.testLoadContent()
    },
    methods: {
        testLoadContent() {
            ths.api({
                api: 'debug.Tests:apiTest',
                then: response => {
                    this.test = response
                }
            })
        }
    },
}
</script>
<style>
.sprite {
    border: 1px solid #b3b3b3;
    padding: 15px;
    min-height: 300px;
    border-radius: 4px;
}
</style>
