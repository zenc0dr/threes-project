<template>
    <div class="threes-tree-header">
        <div class="tree-header__controls">
            <div 
                @click="$emit('toggle')"
                class="tree-header__toggle-btn"
                :title="collapsed ? 'Раскрыть меню' : 'Свернуть меню'"
            >
                <i :class="collapsed ? 'oc-icon-caret-right' : 'oc-icon-caret-left'"></i>
            </div>
            
            <div v-if="!collapsed" class="tree-header__search">
                <i class="oc-icon-search"></i>
                <input
                    type="text"
                    v-model="search"
                    class="tree-header__search-input"
                    placeholder="Поиск..."
                    @keydown.enter="submitSearch"
                />
            </div>
            
            <div v-if="!collapsed" class="tree-header__add-btn">
                <i 
                    class="oc-icon-plus"
                    title="Добавить нод"
                    @click="addNode"
                ></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TreeHeader',
    props: {
        collapsed: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            search: '',
            searchTimer: null
        }
    },
    watch: {
        search() {
            clearTimeout(this.searchTimer)
            this.searchTimer = setTimeout(() => {
                this.$emit('search', this.search)
            }, 400)
        }
    },
    beforeUnmount() {
        clearTimeout(this.searchTimer)
    },
    methods: {
        submitSearch() {
            clearTimeout(this.searchTimer)
            this.$emit('search', this.search)
        },
        addNode() {
            this.$emit('add-node')
        }
    }
}
</script>

<style lang="scss">
.threes-tree-header {
    flex-shrink: 0;
    background: #f8f9fa;
    border-bottom: 1px solid #e9ecef;
    min-width: 40px;
    
    .tree-header__controls {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px;
        min-height: 40px;
        width: 100%;
        
        &__toggle-btn {
            background: #f7f7f7;
            border-radius: 4px;
            padding: 4px 8px;
            color: #b4b4b4;
            cursor: pointer;
            transition: 200ms;
            flex-shrink: 0;
            min-width: 32px;
            display: flex;
            align-items: center;
            justify-content: center;

            &:hover {
                background: #e7e7e7;
            }
        }
        
        &__search {
            position: relative;
            display: flex;
            align-items: center;
            background: white;
            border-radius: 4px;
            flex-grow: 1;
            padding-left: 24px;
            min-width: 0;

            i {
                position: absolute;
                left: 8px;
                color: #aaa;
                font-size: 14px;
            }

            &-input {
                width: 100%;
                border: none;
                outline: none;
                background: transparent;
                padding: 5px 8px;
                padding-top: 7px;
                padding-bottom: 2px;
                font-size: 13px;
                color: #333;
            }
        }
        
        &__add-btn {
            i {
                padding: 4px 8px;
                background: #28a745;
                color: white;
                border-radius: 4px;
                cursor: pointer;
                transition: 200ms;
                
                &:hover {
                    background: #218838;
                }
            }
        }
    }
}
</style> 