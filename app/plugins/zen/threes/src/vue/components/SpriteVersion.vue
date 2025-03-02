<template>
<div class="threes-sv">
    <vSelect
        label="name"
        :reduce="record => record.id"
        :create-option="record => ({id:record, name:record})"
        :options="versions"
        :modelValue="version"
        @update:modelValue="onInput"
    />
    <div @click="build" class="btn btn-default threes-build-btn">Собрать</div>
    <div class="btn btn-default">Загрузить</div>
</div>
</template>
<script>
import vSelect from 'vue-select'
export default {
    name: 'SpriteVersion',
    props: {
        sid: null
    },
    components: {
        vSelect
    },
    mounted() {
        //this.getVersion()
    },
    data() {
        return {
            version: 0,
            versions: []
        }
    },
    methods: {
        getVersion() {
            ths.api({
                api: 'Sprites.Version:getVersion',
                data: {
                    sid: this.sid
                },
                then: response => {
                    this.version = response.version
                    this.versions = response.versions
                }
            })
        },
        build() {
            ths.api({

            })
        },
        onInput() {
            console.log('Чёт сделать')
        }
    }

}
</script>
<style lang="scss">
.threes-sv {
    display: flex;
    justify-content: space-between;

    .v-select {
        flex: 1 1 0;
        margin-right: 10px;
    }

    .threes-build-btn {
        margin-right: 5px;
    }
}
</style>
