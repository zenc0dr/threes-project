<template>
    <div class="threes-ui" :class="{ fullscreen: fullscreen }">
        <div v-if="backend" class="threes-settings">
            <div class="threes-settings__button">
                <i
                    class="oc-icon-expand"
                    style="cursor:pointer"
                    @click="goToApp"
                    title="Полноэкранный режим"
                />
            </div>
        </div>
        <div class="threes-layout">
            <div class="threes-sidebar" :class="{ collapsed: sidebarCollapsed }" :style="sidebarStyle">
                <TreeHeader 
                    :collapsed="sidebarCollapsed"
                    @toggle="toggleSidebar"
                    @search="handleSearch"
                    @add-node="handleAddNode"
                />
                <Tree v-if="!sidebarCollapsed" :search="treeSearch" />
                <User v-if="!sidebarCollapsed" />
                <div 
                    v-if="!sidebarCollapsed"
                    class="threes-sidebar__resizer"
                    @mousedown="startResize"
                    title="Изменить ширину"
                ></div>
            </div>
            <div class="threes-main">
                <Schema />
            </div>
        </div>
    </div>
</template>
<script>
import Tree from '../components/Tree.vue'
import Schema from '../components/Schema.vue'
import Store from '../components/Store.vue'
import User from '../components/User.vue'
import TreeHeader from '../components/TreeHeader.vue'

export default {
    name: 'Stand',
    props: {
        nid: {
            type: String,
            default: null
        },
        backend: {
            type: String,
            default: null,
        }
    },
    data() {
        return {
            fullscreen: false,
            sidebarWidth: 300,
            sidebarCollapsed: false,
            isResizing: false,
            minWidth: 200,
            maxWidth: 600,
            resizeThrottle: null,
            treeSearch: ''
        }
    },
    computed: {
        sidebarStyle() {
            if (this.sidebarCollapsed) {
                return { width: '40px' }
            }
            return { width: this.sidebarWidth + 'px' }
        }
    },
    components: {
        Tree,
        Schema,
        Store,
        User,
        TreeHeader
    },
    mounted() {
        if (this.nid) {
            ths.data.node_selected_nid = this.nid
        }
        ths.data.backend = this.backend
        if (!this.backend) {
            this.fullscreen = true
        }
        
        // Загружаем сохраненную ширину из localStorage
        this.loadSidebarWidth()
        this.loadSidebarCollapsed()
        
        // Добавляем глобальные обработчики событий мыши
        document.addEventListener('mousemove', this.handleMouseMove)
        document.addEventListener('mouseup', this.handleMouseUp)
    },
    beforeUnmount() {
        // Удаляем глобальные обработчики
        document.removeEventListener('mousemove', this.handleMouseMove)
        document.removeEventListener('mouseup', this.handleMouseUp)
    },
    methods: {
        goToApp() {
            window.location.href = '/app/node'
        },
        
        loadSidebarWidth() {
            const saved = localStorage.getItem('threes_sidebar_width')
            if (saved) {
                const width = parseInt(saved)
                if (width >= this.minWidth && width <= this.maxWidth) {
                    this.sidebarWidth = width
                }
            }
        },
        
        loadSidebarCollapsed() {
            const saved = localStorage.getItem('threes_sidebar_collapsed')
            if (saved) {
                this.sidebarCollapsed = saved === 'true'
            }
        },
        
        saveSidebarWidth() {
            localStorage.setItem('threes_sidebar_width', this.sidebarWidth.toString())
        },
        
        saveSidebarCollapsed() {
            localStorage.setItem('threes_sidebar_collapsed', this.sidebarCollapsed.toString())
        },
        
        toggleSidebar() {
            this.sidebarCollapsed = !this.sidebarCollapsed
            this.saveSidebarCollapsed()
        },
        
        handleSearch(search) {
            this.treeSearch = search
        },
        
        handleAddNode() {
            // TODO: Реализовать добавление нода
            console.log('Add node clicked')
        },
        
        startResize(event) {
            event.preventDefault()
            this.isResizing = true
            document.body.style.cursor = 'col-resize'
            document.body.style.userSelect = 'none'
        },
        
        handleMouseMove(event) {
            if (!this.isResizing) return
            
            // Throttling для оптимизации производительности
            if (this.resizeThrottle) return
            
            this.resizeThrottle = requestAnimationFrame(() => {
                const newWidth = event.clientX
                if (newWidth >= this.minWidth && newWidth <= this.maxWidth) {
                    this.sidebarWidth = newWidth
                }
                this.resizeThrottle = null
            })
        },
        
        handleMouseUp() {
            if (this.isResizing) {
                this.isResizing = false
                document.body.style.cursor = ''
                document.body.style.userSelect = ''
                this.saveSidebarWidth()
            }
        }
    }
};
</script>
<style lang="scss">
.threes-ui {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: #f5f5f5;
}

.threes-settings {
    padding: 3px 4px;
    background: #e4e4e4;

    i {
        padding: 2px 0px 2px 8px;
        background: #939393;
        color: #fff;
        border-radius: 3px;
    }
}

.threes-layout {
    display: flex;
    flex: 1 1 auto;
    overflow: hidden;
}

.threes-sidebar {
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border-right: 1px solid #e2e2e2;
    flex-shrink: 0;
    min-width: 40px;
    max-width: 600px;
    height: 100%;
    overflow: hidden;
    position: relative;
    transition: width 0.2s ease;
    
    &.collapsed {
        width: 40px !important;
        min-width: 40px;
    }
    
    &__resizer {
        position: absolute;
        top: 0;
        right: -3px;
        width: 6px;
        height: 100%;
        cursor: col-resize;
        background: transparent;
        z-index: 10;
        
        &:hover {
            background: rgba(0, 0, 0, 0.1);
        }
        
        &:active {
            background: rgba(0, 0, 0, 0.2);
        }
    }
}

.threes-main {
    flex: 1 1 auto;
    height: 100%;
    overflow-y: auto;
    background: #f4f4f4;
}
</style>
