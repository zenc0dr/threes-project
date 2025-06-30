<template>
    <div class="threes-ui" :class="{ fullscreen: fullscreen, mobile: isMobile }">
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
            <!-- Мобильное меню overlay -->
            <div v-if="isMobile" class="threes-mobile-overlay" :class="{ active: mobileMenuOpen }" @click="closeMobileMenu"></div>
            
            <div class="threes-sidebar" :class="{ collapsed: sidebarCollapsed, 'mobile-open': mobileMenuOpen }" :style="sidebarStyle">
                <TreeHeader 
                    :collapsed="sidebarCollapsed"
                    @toggle="toggleSidebar"
                    @search="handleSearch"
                    @add-node="handleAddNode"
                />
                <Tree v-if="!sidebarCollapsed" :search="treeSearch" />
                <User v-if="!sidebarCollapsed && !isMobile" />
                <div 
                    v-if="!sidebarCollapsed && !isMobile"
                    class="threes-sidebar__resizer"
                    @mousedown="startResize"
                    title="Изменить ширину"
                ></div>
            </div>
            <div class="threes-main">
                <Schema />
            </div>
        </div>
        
        <!-- Мобильная bottom navigation -->
        <div v-if="isMobile" class="threes-mobile-nav">
            <User @toggle-mobile-menu="toggleMobileMenu" />
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
            treeSearch: '',
            isMobile: false,
            mobileMenuOpen: false
        }
    },
    computed: {
        sidebarStyle() {
            if (this.isMobile) {
                return { width: '280px' }
            }
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
        
        // Определяем мобильное устройство
        this.checkMobile()
        window.addEventListener('resize', this.checkMobile)
        
        // Загружаем сохраненную ширину из localStorage
        this.loadSidebarWidth()
        this.loadSidebarCollapsed()
        
        // Добавляем глобальные обработчики событий мыши
        document.addEventListener('mousemove', this.handleMouseMove)
        document.addEventListener('mouseup', this.handleMouseUp)
    },
    beforeUnmount() {
        // Удаляем глобальные обработчики
        window.removeEventListener('resize', this.checkMobile)
        document.removeEventListener('mousemove', this.handleMouseMove)
        document.removeEventListener('mouseup', this.handleMouseUp)
    },
    methods: {
        checkMobile() {
            this.isMobile = ths.isMobile()
            if (this.isMobile && this.mobileMenuOpen) {
                this.closeMobileMenu()
            }
        },
        
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
            if (this.isMobile) {
                this.toggleMobileMenu()
            } else {
                this.sidebarCollapsed = !this.sidebarCollapsed
                this.saveSidebarCollapsed()
            }
        },
        
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen
        },
        
        closeMobileMenu() {
            this.mobileMenuOpen = false
        },
        
        handleSearch(search) {
            this.treeSearch = search
        },
        
        handleAddNode() {
            // TODO: Реализовать добавление нода
            console.log('Add node clicked')
        },
        
        startResize(event) {
            if (this.isMobile) return
            event.preventDefault()
            this.isResizing = true
            document.body.style.cursor = 'col-resize'
            document.body.style.userSelect = 'none'
        },
        
        handleMouseMove(event) {
            if (!this.isResizing || this.isMobile) return
            
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
    
    &.mobile {
        .threes-layout {
            flex: 1;
            position: relative;
        }
        
        .threes-main {
            width: 100%;
            height: 100%;
        }
    }
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

.threes-mobile-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    
    &.active {
        opacity: 1;
        visibility: visible;
    }
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
    
    // Мобильные стили
    .mobile & {
        position: fixed;
        top: 0;
        left: -280px;
        width: 280px !important;
        height: 100vh;
        z-index: 1000;
        transition: left 0.3s ease;
        
        &.mobile-open {
            left: 0;
        }
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

.threes-mobile-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #ffffff;
    border-top: 1px solid #e2e2e2;
    z-index: 1001;
    padding-bottom: env(safe-area-inset-bottom);
}
</style>
