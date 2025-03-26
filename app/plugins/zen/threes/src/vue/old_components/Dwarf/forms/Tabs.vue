<template>
    <div class="tabs-wrapper" :class="{vertical:isVertical}">
        <div v-if="element.scheme !== null" class="tabs">
            <div v-for="tab in element.scheme"
                 @click="tabSetActive(tab)"
                 class="tab"
                 :class="{active:tabIsActive(tab)}">
                {{ label(tab) }}
            </div>
        </div>
        <div v-for="tab in element.scheme"
             v-show="tabIsActive(tab, element.scheme)"
             class="tabs__content">
            <FormFitter :scheme="tab.scheme" :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)">
                <template v-for="(_, name) in $slots" v-slot:[name]>
                    <slot :name="name" />
                </template>
            </FormFitter>
        </div>
    </div>
</template>

<script>
export default {
    name: "Tabs",
    emits: ['update:modelValue'],
    props: {
        element: null,
        modelValue: null,
    },
    computed: {
        isVertical() {
            if (!this.element.options) {
                return false
            }
            return this.element.options.direction && this.element.options.direction === 'vertical';
        }
    },
    data() {
        return {
            active_tab: null,
        }
    },
    methods: {
        label(tab) {
            if (typeof tab.label === 'string') {
                return tab.label
            }
            return tab.label()
        },
        tabIsActive(tab) {
            if (!this.active_tab) {
                this.tabSetActive(tab)
            }
            return tab.label === this.active_tab
        },
        tabSetActive(tab) {
            if (this.element.id && tab.id) {
                let event_key = this.element.id + '.' + tab.id
                if (APP.tabs_events[event_key]) {
                    APP.tabs_events[event_key]()
                }
            }
            this.active_tab = tab.label
        }
    }
}
</script>

<style lang="scss">
.tabs-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;

    > .tabs {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-bottom: 20px;
        border-bottom: 1px solid #f1f1f1;

        &__content {
            width: 100%;
        }

        .tab {
            display: flex;
            padding: 2px 9px;
            color: #9d9d9d;
            font-size: 15px;
            flex-direction: row;
            align-items: center;
            transition: 200ms;
            cursor: pointer;

            &.active {
                background: #fff;
                color: #7284d6;
                border-bottom: 1px solid #7284d6;
                margin-bottom: -1px;
            }
        }
    }

    &.vertical {
        flex-direction: row;
        > .tabs {
            display: flex;
            flex-direction: column;
            width: 300px;
            min-height: auto;
            justify-content: flex-start;
            margin-right: 20px;
            margin-bottom: auto;
            position: sticky;
            top: 10px;
            padding-top: 4px;
            padding-bottom: 4px;

            .tab {
                flex: none;
                text-align: right;
                padding-right: 20px;
                margin: 3px 5px;
            }
        }
    }
}

</style>
