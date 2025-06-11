<template>
    <div class="node-code">
        <template v-if="scope === 'schema'">
            <div class="node-code__header">
                {{ node.name }}
            </div>
        </template>
        <div class="node-code__panel">
            <div class="node-code__panel__button">
                <i class="oc-icon-caret-right"></i>
            </div>
        </div>
        <MilkdownRoot>
            <MilkdownEditor v-model="content" />
        </MilkdownRoot>
    </div>
</template>

<script>
import { debounce } from 'lodash'
import MilkdownEditor from '../MilkdownEditor.vue'
import MilkdownRoot from '../MilkdownRoot.vue'

export default {
    name: "NodeCode",
    components: { MilkdownEditor, MilkdownRoot },
    props: {
        node: {
            type: Object,
            required: true
        },
        scope: {
            type: String,
            required: false,
            default: null
        }
    },
    data() {
        return {
            content: this.node.data,
            ths: window.ths,
            debouncedUpdate: null
        };
    },
    watch: {
        content(new_val, old_val) {
            if (new_val !== old_val) {
                this.debouncedUpdate()
            }
        }
    },
    mounted() {
        this.debouncedUpdate = debounce(() => this.updateData(this.content), 2000)
    },
    methods: {
        updateData(data) {
            this.ths.api({
                api: 'nodes.node:update-data',
                data: {
                    nid: this.node.nid,
                    data
                },
                then: () => {
                    //this.ths.exe('Schema', 'getSchema')
                }
            });
        }
    }
}
</script>
