<template>
    <Modal :title="title" :max-width="1200" :show="open_entity" @close="close">
        <div class="modal-entity" :class="element_class">
            <template v-if="open_entity">
                <Records
                    ref="records_ref"
                    :records_url="records_url"
                    :record_url="record_url"
                    :hash_router="hash_router"
                    :header="header"
                    :record_preset="record_preset"
                    :records_preset="records_preset"
                    :delete_preset="delete_preset"
                    :transform_update="transform_update"
                    @loaded="loaded = true"
                    @record-loaded="$emit('record-loaded', $event)"
                    @record-updated="$emit('record-updated', $event)"
                >
                    <template v-for="(_, name) in $slots" v-slot:[name]>
                        <slot :name="name" />
                    </template>
                </Records>
                <div class="modal-entity__preload" v-if="!loaded">
                    Загрузка данных...
                </div>
            </template>
        </div>
    </Modal>
</template>

<script>
import Modal from "./Modal";
export default {
    name: "ModalEntity",
    components: {
        Modal
    },
    props: {
        title: {
            type: String,
            default: null
        },
        records_url: {
            type: String,
            default: null
        },
        record_url: {
            type: String,
            default: null
        },
        /* Главный заголовок */
        header: {
            type: String,
            default: null
        },
        /* Данные которые примешиваются к response getRecord */
        record_preset: {
            type: [Object, Function],
            default: null
        },
        /* Данные которые примешиваются к запросу getRecords */
        records_preset: {
            type: Object,
            default: null
        },
        delete_preset: {
            type: Object,
            default: null
        },
        transform_update: {
            type: Function,
            default: null
        },
        element_class: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            open_entity: false,
            loaded: false,
            hash_router: true,
            after_loaded: null,
        }
    },
    created() {
        this.openHash()
    },
    watch: {
        loaded(loaded) {
            if (!loaded) {
                return
            }
            if (this.after_loaded) {
                this.after_loaded()
            }
        }
    },

    methods: {
        open() {
            this.open_entity = true
        },
        close() {
            this.open_entity = false
            this.loaded = false
            window.location.hash = ''
        },
        openHash() {
            let hash = window.location.hash

            if (!hash) {
                return
            }

            if (hash.indexOf('#' + this.record_url) !== 0) {
                return
            }

            this.hash_router = false
            this.after_loaded = () => {
                let record_id = this.getRecordId()
                if (record_id) {
                    this.$refs.records_ref.getRecord(record_id, () => {
                        this.hash_router = true
                    })
                }
            }

            setTimeout(() => {
                this.open()
            }, 10)
        },
        getRecordId() {
            let hash = window.location.hash
            let record_id = null
            let is_record = /\/(\d+)$/.exec(hash)
            if (is_record) {
                record_id = is_record[1]
            }
            return record_id
        }
    }
}
</script>
<style lang="scss">
.modal-entity {
    &__preload {
        text-align: center;
        padding: 170px 0;
    }
}
</style>
