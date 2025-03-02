<template>
<div class="frame">
    <div v-for="(line, line_index) in program" class="frame__line">
        <div class="frame__line__number">
            {{ line_index }}
        </div>
        <div class="frame__line__nodes">
            <div v-for="node in line" class="frame__node">
                {{ node.name }}
            </div>
        </div>
    </div>
    <div @click="addProgramLine" class="frame__add-line">
        +
    </div>
</div>
</template>
<script>
export default {
    name: "Frame",
    props: ['backend', 'sid'],
    data() {
        return {
            program: [
                [
                    {
                        "nid": "j6g2idn6",
                        "name": "IF",
                        "desc": "Тут я что-то пишу информационное для этого нода",
                    },
                    {
                        "nid": "wdfgwergw",
                        "name": "BOO",
                        "desc": "Тут я что-то пишу информационное для этого нода",
                    },
                    {
                        "nid": "ertwert",
                        "name": "BAA",
                        "desc": "Тут я что-то пишу информационное для этого нода",
                    },
                    {
                        "nid": "453254rsf",
                        "name": "HOHO",
                        "desc": "Тут я что-то пишу информационное для этого нода",
                    },
                    {
                        "nid": "rtf4sd7gd",
                        "name": "if",
                        "desc": "Тут я что-то пишу информационное для этого нода",
                    },
                ]
            ]
        }
    },
    methods: {
        addProgramLine() {
            this.program.push([])
        }
    }
}
</script>
<style lang="scss">
.frame {
    &__line {
        display: flex;
        flex-direction: row;

        &__number {
            display: flex;
            font-weight: bold;
            justify-content: center;
            align-items: center;
            background: #c0c2ff;
            margin: 1px 3px;
            width: 30px;
            border-radius: 3px;
            color: #5053a3;
            min-height: 34px;
        }
        &__nodes {
            display: flex;
            flex-direction: row;
        }
    }
    &__node {
        padding: 5px 7px;
        background: #e9e9e9;
        border-radius: 3px;
        margin: 3px;
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
