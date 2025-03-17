<template>
    <div class="threes-frame-version">
        <vSelect
            label="name"
            :reduce="record => record.id"
            :create-option="record => ({id:record, name:record})"
            :options="versions"
            :modelValue="version"
            @update:modelValue="onInput"
        />
        <div @click="build" class="btn btn-primary threes-build-btn">Собрать</div>
        <div class="btn btn-primary">Загрузить</div>
    </div>
</template>
<script>
import vSelect from 'vue-select'
export default {
    name: 'FrameVersion',
    emits: ['update:version'],
    props: {
        fid: null
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
                api: 'frames.Frame:getVersion',
                data: {
                    fid: this.fid
                },
                then: response => {
                    this.version = response.version
                    this.versions = response.versions
                }
            })
        },
        build() {
            ths.api({
                api: 'frames.Frame:buildFrame',
                data: {
                    fid: this.fid
                },
                then: response => {
                    this.$emit('update:version')
                }
            })
        },
        onInput() {
            console.log('Чёт сделать')
        }
    }

}
</script>
<style lang="scss">
.threes-frame-version {
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
