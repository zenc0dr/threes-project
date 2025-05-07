<template>
    <div class="tabs-wrapper" :class="{ vertical: isVertical }">
        <div class="tabs" v-if="tabs.length">
            <div
                v-for="tab in tabs"
                :key="tab.label"
                @click="tabSetActive(tab)"
                class="tab"
                :class="{ active: tabIsActive(tab) }"
            >
                {{ resolveLabel(tab) }}
            </div>
        </div>

        <div
            v-for="tab in tabs"
            :key="tab.label + '-content'"
            v-show="tabIsActive(tab)"
            class="tabs__content"
        >
            <FormFitter
                :scheme="tab.scheme"
                :modelValue="modelValue"
                @update:modelValue="$emit('update:modelValue', $event)"
            >
                <template v-for="(_, name) in $slots" v-slot:[name]>
                    <slot :name="name" />
                </template>
            </FormFitter>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormTabs',
    props: {
        element: {
            type: Object,
            required: true
        },
        modelValue: {
            type: Object,
            default: () => ({})
        }
    },
    emits: ['update:modelValue'],
    data() {
        return {
            activeLabel: null
        }
    },
    computed: {
        tabs() {
            return this.element.scheme || []
        },
        isVertical() {
            return this.element.options?.direction === 'vertical'
        }
    },
    methods: {
        resolveLabel(tab) {
            return typeof tab.label === 'function' ? tab.label() : tab.label
        },
        tabIsActive(tab) {
            if (!this.activeLabel && this.tabs.length) {
                this.activeLabel = this.resolveLabel(this.tabs[0])
            }
            return this.resolveLabel(tab) === this.activeLabel
        },
        tabSetActive(tab) {
            this.activeLabel = this.resolveLabel(tab)
        }
    }
}
</script>

<style lang="scss">
.tabs-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;

    .tabs {
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;
        border-bottom: 1px solid #f1f1f1;

        .tab {
            padding: 2px 9px;
            color: #9d9d9d;
            font-size: 15px;
            cursor: pointer;
            transition: 200ms;

            &.active {
                color: #7284d6;
                border-bottom: 1px solid #7284d6;
                margin-bottom: -1px;
            }
        }
    }

    .tabs__content {
        width: 100%;
    }

    &.vertical {
        flex-direction: row;

        .tabs {
            flex-direction: column;
            width: 300px;
            margin-right: 20px;
            margin-bottom: auto;
            position: sticky;
            top: 10px;
            padding: 4px 0;

            .tab {
                text-align: right;
                padding-right: 20px;
                margin: 3px 5px;
            }
        }
    }
}
</style>
