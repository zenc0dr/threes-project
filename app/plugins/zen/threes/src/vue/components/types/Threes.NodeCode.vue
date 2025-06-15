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
        <div class="node-code__code">
            <component
                v-for="(block, i) in content"
                :key="i"
                :is="block.type"
                v-model="block.data"
            />
        </div>
    </div>
</template>

<script>
import textarea from "./threes_nodecode/textarea.vue";

export default {
    name: "NodeCode",
    components: {
        textarea
    },
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
            content: [
                {
                    type: 'textarea',
                    data: '',
                }
            ],
        };
    },
    watch: {

    },
    mounted() {

    },
    methods: {
    }
};
</script>

<style lang="scss">
.node-code {
    background: #fff;
    border-radius: 4px;

    &__header {
        font-size: 18px;
        margin-left: 20px;
        font-weight: bold;
        color: #8c8c8c;
        margin-bottom: -6px;
    }

    &__content {
        width: 100%;
        box-sizing: border-box;
        padding: 20px 20px;
        font-size: 16px;
        resize: none;
        overflow: hidden;
        outline: none;
        border: none;
        color: #2e7d32;
        background: #eafff5;
        font-family: "Exo 2", sans-serif;
    }

    &__panel {
        display: flex;
        background: #d2f0e1;


        &__button {
            display: flex;
            padding: 1px 10px;
            background: #ffffff;
            color: #57876f;
            margin: 5px 4px;
            border-radius: 4px;
            cursor: pointer;

            &:active {

            }
        }
    }

    &__code {

    }
}

</style>
