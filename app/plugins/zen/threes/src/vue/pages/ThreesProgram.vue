<template>
    <div class="threes-coder">
        <div v-for="(nodes, line) in program" class="threes-coder__line">
            <div class="threes-coder__line_info">{{ line }}</div>
            <div class="threes-coder__line_items">
                <ThreesNode v-for="node in nodes" :node="node" />
                <div class="threes-coder__add_node">
                    <div @click="openCreateNodeModal(line)" class="threes-coder__add_node__btn">
                        +
                    </div>
                </div>
            </div>
        </div>
        <pre>{{ program }}</pre>
    </div>
    <ThreesModal :show="new_node" max-width="1000px" @close="closeCreateNodeModal">
        <template #heading>
            Выбор нода
        </template>
        <template #default>
            <SelectNode @fetch="makeNode"/>
        </template>
    </ThreesModal>
</template>
<script>
import ThreesModal from "../components/ThreesModal.vue";
import ControlPanel from "../components/ux/forms/ControlPanel.vue";
import SelectNode from "../components/SelectNode.vue";
import ThreesNode from "../components/ThreesNode.vue";
export default {
    name: "ThreesProgram",
    props: ['backend', 'sid'],
    components: {
        ThreesModal,
        ControlPanel,
        SelectNode,
        ThreesNode
    },
    data() {
        return {
            new_node: null,
            active_line: null,
            program: [
                [],
                [],
                [],
                [],
                [],
            ]
        }
    },
    watch: {
        program: {
            handler(program) {
                const last_line = program[program.length - 1]
                if (last_line.length) {
                    program.push([])
                }
            },
            deep: true
        }
    },
    methods: {
        loadProgram() {

        },
        saveProgram() {
            ths.api({
                api: 'Sprites.Program:save',
                data: {
                    sid: this.sid,
                    program: this.program
                },
                then: response => {
                    //this.program = response.program
                }
            })
        },
        openCreateNodeModal(line) {
            this.new_node = true
            this.active_line = line
            console.log('line', line)
        },
        closeCreateNodeModal() {
            this.new_node = false
        },
        makeNode(node) {
            this.program[this.active_line].push(node)
            this.saveProgram()
        }
    }
}
</script>

<style lang="scss">
.threes-coder {
    &__line {
        display: flex;
        flex-direction: row;
        margin: 5px 0;
        min-height: 30px;
    }
    &__line_info {
        width: 27px;
        display: flex;
        align-content: center;
        justify-content: flex-end;
        align-items: center;
        background: #efefef;
        padding: 0 5px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: bold;
        color: #505e6f;
        margin-right: 5px;
    }

    &__line_items {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        width: 100%;
    }

    &__add_node {
        display: flex;
        flex-grow: 1;
        flex-shrink: 1;
        min-width: 0;
        width: 100%;
        user-select: none;

        &__btn {
            display: flex;
            width: 40px;
            background: #a4ffd5;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            cursor: pointer;
            opacity: 0;
            transition: 200ms;
            &:hover {
                background-color: #3dffa9;
            }
        }

        &:hover &__btn {
            opacity: 1;
        }
    }
}
</style>
