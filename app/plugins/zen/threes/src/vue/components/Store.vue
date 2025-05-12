<template>
    <div class="threes-store">
        <div class="threes-store__header">
            <div class="col col-action"></div>
            <div class="col col-nid">#</div>
            <div class="col col-icon"></div>
            <div class="col col-name">Название</div>
            <div class="col col-group">Группа</div>
        </div>
        <div
            class="threes-store__row"
            v-for="node in nodes"
            :key="node.nid"
        >
            <div class="col col-action">
                <div class="store-btn" @click.stop="addNode(node)">＋</div>
            </div>
            <div class="col col-nid">{{ node.nid || '--' }}</div>
            <div class="col col-icon">
                <icon :src="node.icon" width="24px" height="24px" />
            </div>
            <div class="col col-name">{{ node.name }}</div>
            <div class="col col-group">{{ node.group }}</div>
        </div>
    </div>
</template>

<script>
import icon from './icon.vue'

export default {
    name: "Store",
    components: { icon },
    data() {
        return {
            ths: window.ths,
            nodes: []
        }
    },
    mounted() {
        this.getStore()
        this.ths.bus.on('store:refresh', this.getStore)
    },
    unmounted() {
        this.ths.bus.off('store:refresh', this.getStore)
    },
    methods: {
        getStore() {
            this.ths.api({
                api: 'store:get',
                then: response => {
                    this.nodes = response.nodes
                }
            })
        },
        addNode(node) {
            ths.api({
                api: 'nodes.node:add-node',
                data: {
                    nid: node.nid,
                    class: node.class,
                },
                then: response => {
                    ths.bus.emit('tree:refresh')
                }
            })
        }
    }
}
</script>

<style lang="scss">
.threes-store {
    display: flex;
    flex-direction: column;
    background: #a7a7a7;
    padding: 10px;
    border-top: 2px solid #ffe097;

    &__header, &__row {
        display: flex;
        align-items: center;
        padding: 6px 10px;
        background: #fff;
        border-radius: 4px;
        margin-bottom: 4px;
    }

    &__header {
        font-weight: bold;
        background: #ececec;
    }

    .col {
        flex: 0 0 auto; // <-- фиксирует ширину (grow: 0, shrink: 0, auto basis)
        padding: 4px 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        &.col-nid {
            width: 120px;
        }
        &.col-icon {
            width: 40px;
        }
        &.col-group {
            width: 140px;
        }
        &.col-name {
            flex: 1 1 auto; // <-- тянется
            min-width: 0;
        }
    }
    .store-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #d0d0d0;
        color: #333;
        font-weight: bold;
        font-size: 13px;
        width: 20px;
        height: 20px;
        border-radius: 4px;
        cursor: pointer;
        transition: background 0.2s ease;
        padding-top: 3px;

        &:hover {
            background: #bfbfbf;
        }
    }
}
</style>
