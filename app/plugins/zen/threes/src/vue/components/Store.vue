<template>
    <div class="threes-store" :class="{ 'is-expanded': isExpanded }">
        <div class="threes-store__switch">
            <button class="switch-btn" @click="toggleStore">
                <svg v-if="!isExpanded" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                </svg>
                <svg v-if="isExpanded" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
            </button>
        </div>
        <div class="threes-store__header" v-show="isExpanded">
            <div class="col col-action"></div>
            <div class="col col-nid">#</div>
            <div class="col col-icon"></div>
            <div class="col col-name">Название</div>
            <div class="col col-group">Группа</div>
        </div>
        <div class="threes-store__body" v-show="isExpanded">
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
            nodes: [],
            isExpanded: false,
        }
    },
    created() {
        this.ths.mountComponent('Store', this)
    },
    mounted() {
        this.getStore()
    },
    unmounted() {
        this.ths.unmountComponent('Store')
    },
    methods: {
        toggleStore() {
            this.isExpanded = !this.isExpanded
        },
        getStore() {
            this.ths.api({
                api: 'store:get',
                then: response => {
                    this.nodes = response.nodes
                }
            })
        },
        addNode(node) {
            this.ths.api({
                api: 'nodes.node:add-node',
                data: {
                    nid: node.nid,
                    type: node.type,
                    after: this.ths.data.node_selected_nid,
                },
                then: response => {
                    this.ths.exe('Tree', 'getTree')
                }
            })
        }
    }
}
</script>

<style lang="scss">
.threes-store {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    height: auto;
    display: flex;
    flex-direction: column;
    background: #a7a7a7;
    padding: 0 10px 0 10px;
    border-top: 2px solid #ffe097;

    &.is-expanded {
        height: 450px;
        padding: 10px;
    }

    &__switch {
        display: flex;
        justify-content: center;
        padding: 4px 0;
        flex-shrink: 0;
    }

    .switch-btn {
        width: 50px;
        height: 20px;
        background: #ececec;
        border: 1px solid #c5c5c5;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background: #dcdcdc;
        }

        svg {
            color: #333;
        }
    }

    &__header, &__row {
        display: flex;
        align-items: center;
        padding: 6px 10px;
        background: #fff;
        border-radius: 4px;
        margin-bottom: 4px;
        flex-shrink: 0;
    }

    &__header {
        font-weight: bold;
        background: #ececec;
    }

    &__body {
        flex-grow: 1;
        overflow-y: auto;
        min-height: 0;
        padding-right: 5px;

        &::-webkit-scrollbar {
            width: 8px;
        }
        &::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 4px;
        }
        &::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 4px;
        }
        &::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    }


    .col {
        flex: 0 0 auto;
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
            flex: 1 1 auto;
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
