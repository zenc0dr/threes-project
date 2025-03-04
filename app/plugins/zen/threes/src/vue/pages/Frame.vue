<template>
<div class="frame">
    <div v-for="(line, line_index) in program" class="frame__line">
        <div class="frame__line__number">
            {{ line_index }}
        </div>
        <div class="frame__line__nodes">
            <div v-for="node in line" class="frame__node">
                <Node :node="node" />
            </div>
        </div>
        <div class="frame__add_node">
            <div @click="createNode(line_index)" class="frame__add_node__btn">
                +
            </div>
        </div>
    </div>
    <div @click="addProgramLine" class="frame__add-line">
        +
    </div>
</div>
</template>
<script>
import Node from "../components/Node.vue"
export default {
    name: "Frame",
    props: ['backend', 'fid'],
    components: {
        Node
    },
    data() {
        return {
            program: [],
        }
    },
    mounted() {
        this.loadProgram()
    },
    methods: {
        // Добавить нод
        createNode(line_index) {
            ths.api({
                api: 'nodes.Node:Create',
                data: {
                    fid: this.fid,
                    line_index
                },
                then: response => {
                    this.loadProgram()
                }
            })
        },

        // Добавить программную линию
        addProgramLine() {
            ths.api({
                api: 'frames.Frame:addLine',
                data: {
                    fid: this.fid,
                },
                then: response => {
                    this.loadProgram()
                }
            })
        },
        // Загрузить программу
        loadProgram() {
            ths.api({
                api: 'frames.Frame:loadProgram',
                data: {
                    'fid': this.fid
                },
                then: response => {
                    this.program = response.program
                }
            })
        },
        // Сохранить программу
        saveProgram() {
            ths.api({
                api: 'frames.Frame:saveProgram',
                data: {
                    'fid': this.fid
                },
                then: response => {
                    this.loadProgram()
                }
            })
        }
    }
}
</script>
<style lang="scss">
.frame {
    &__node {
        padding: 5px 7px;
        background: #e9e9e9;
        border-radius: 3px;
        margin: 3px;
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

    &__line {
        display: flex;
        flex-direction: row;

        &__number {
            display: flex;
            flex: 0 0 17px;
            font-weight: bold;
            justify-content: center;
            align-items: center;
            background: #d6d8ff;
            margin: 1px 3px;
            border-radius: 3px;
            color: #9093df;
            min-height: 34px;
            font-size: 11px;
        }
        &__nodes {
            display: flex;
            flex-direction: row;
        }
    }
    &__add-line {
        margin: 3px;
        padding: 7px;
        border-radius: 4px;
        background: #f5f5f5;
        color: #797979;
        text-align: center;
        font-weight: bold;
        transition: 200ms;
        cursor: pointer;

        &:hover {
            background: #efefef;
            color: #797979;
        }
    }
}
</style>
