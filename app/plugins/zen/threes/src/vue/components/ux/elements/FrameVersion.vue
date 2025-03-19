<template>
    <div class="threes-frame-version">
        <vSelect
            label="name"
            :reduce="record => record.id"
            :create-option="record => ({id:record, name:record})"
            :options="versions"
            v-model="version"
        />
        <div @click="build" class="btn btn-primary threes-build-btn">Собрать</div>
        <div @click="restoreVersion" class="btn btn-primary">Загрузить</div>
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
        this.getVersions()
    },
    data() {
        return {
            version: 0,
            versions: []
        }
    },
    methods: {
        getVersions() {
            ths.api({
                api: 'frames.Frame:getVersions',
                data: {
                    fid: this.fid
                },
                then: response => {
                    this.version = response.version
                    this.versions = response.versions
                }
            })
        },
        restoreVersion() {
            console.log('Восстанавливаем версию')
        },
        build() {
            ths.api({
                api: 'frames.Frame:buildFrame',
                data: {
                    fid: this.fid
                },
                then: response => {
                    this.getVersions()
                    this.$emit('update:version')
                }
            })
        }
    }

}
</script>
<style lang="scss">
.threes-frame-version {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .v-select {
        flex: 1 1 0;
        margin-right: 10px;
    }

    .threes-build-btn {
        margin-right: 5px;
    }
}
</style>
