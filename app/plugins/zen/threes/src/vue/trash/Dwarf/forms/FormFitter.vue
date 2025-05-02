<template>
    <div class="form">
        <template v-for="element in scheme">
            <template v-if="element.slot">
                <slot :name="element.slot"></slot>
            </template>
            <Tabs v-if="element.type === 'tabs'"
                  :element="element"
                  :modelValue="modelValue"
                  @update:modelValue="$emit('update:modelValue', $event)"
            >
                <template v-for="(_, name) in $slots" v-slot:[name]>
                    <slot :name="name" />
                </template>
            </Tabs>
            <FormSection
                v-if="element.type === 'section' && element.field"
                :size="element.size"
                :label="element.label"
                :scheme="element.scheme"
                :style="element.style"
                :modelValue="modelValue[element.field]"
                @update:modelValue="modelValue[element.field] = $event"
            >
                <template v-for="(_, name) in $slots" v-slot:[name]>
                    <slot :name="name" />
                </template>
            </FormSection>
            <FormSection
                v-if="element.type === 'section' && !element.field"
                :size="element.size"
                :label="element.label"
                :scheme="element.scheme"
                :style="element.style"
                :modelValue="modelValue"
                @update:modelValue="$emit('update:modelValue', $event)"
            >
                <template v-for="(_, name) in $slots" v-slot:[name]>
                    <slot :name="name" />
                </template>
            </FormSection>
            <template v-if="modelValue">
                <DwarfString
                    v-if="element.type === 'string'|| element.type === 'password'"
                    :type="element.type === 'password' ? 'password' : 'text'"
                    :modelValue="modelValue[element.field]"
                    @update:modelValue="modelValue[element.field] = $event"
                    :size="element.size"
                    :label="element.label"
                    :style="element.style"
                    :element="element"
                />

                <DwarfNumber
                    v-if="element.type === 'number'"
                    :modelValue="modelValue[element.field]"
                    @update:modelValue="modelValue[element.field] = $event"
                    :size="element.size"
                    :label="element.label"
                    :style="element.style"
                    :min="element.min"
                    :max="element.max"
                    :element="element"
                />

                <DwarfRepeater
                    v-if="element.type === 'repeater'"
                    :modelValue="modelValue[element.field]"
                    @update:modelValue="modelValue[element.field] = $event"
                    :size="element.size"
                    :label="element.label"
                    :scheme="element.scheme"
                    :add_text="element.add_text"
                    :empty_object="element.empty_object"
                />

                <DwarfSelect
                    v-if="element.type === 'select'"
                    :size="element.size"
                    :label="element.label"
                    :options="element.options"
                    :style="element.style"
                    :search="element.search"
                    :element="element"
                    :modelValue="modelValue[element.field]"
                    @update:modelValue="modelValue[element.field] = $event"
                />

                <DwarfSwitcher
                    v-if="element.type === 'switcher' || element.type === 'activator'"
                    :modelValue="modelValue[element.field]"
                    @update:modelValue="modelValue[element.field] = $event"
                    :size="element.size"
                    :label="element.label"
                    :type="element.type"
                />

                <DwarfTextEditor
                    v-if="element.type === 'textEditor'"
                    :modelValue="modelValue[element.field]"
                    @update:modelValue="modelValue[element.field] = $event"
                    :crypto="element.crypto"
                    :size="element.size"
                    :label="element.label"
                />

                <DwarfTextArea
                    v-if="element.type === 'textarea'"
                    :modelValue="modelValue[element.field]"
                    @update:modelValue="modelValue[element.field] = $event"
                    :size="element.size"
                    :label="element.label"
                />

                <DwarfImageBox
                    v-if="element.type === 'images'"
                    :modelValue="modelValue[element.field]"
                    @update:modelValue="modelValue[element.field] = $event"
                    :size="element.size"
                    :label="element.label"
                />

                <DwarfCheckboxList
                    v-if="element.type === 'checkboxList'"
                    :modelValue="modelValue[element.field]"
                    @update:modelValue="modelValue[element.field] = $event"
                    :size="element.size"
                    :label="element.label"
                    :list="element.list"
                />

                <DwarfDatetime
                    v-if="element.type === 'datetime'"
                    :modelValue="modelValue[element.field]"
                    @update:modelValue="modelValue[element.field] = $event"
                    :size="element.size"
                    :label="element.label"
                    :mode="element.mode"
                    :width="element.width"
                />

                <DwarfUsers
                    v-if="element.type === 'users'"
                    :modelValue="modelValue[element.field]"
                    @update:modelValue="modelValue[element.field] = $event"
                    :size="element.size"
                    :label="element.label"
                    :readonly="element.readonly"
                />

                <DwarfFiles
                    v-if="element.type === 'files'"
                    :modelValue="modelValue[element.field]"
                    @update:modelValue="modelValue[element.field] = $event"
                    :size="element.size"
                    :label="element.label"
                    :readonly="element.readonly"
                />
                <KritiJsonEditor
                    v-if="element.type === 'json-editor'"
                    :json="modelValue[element.field]"
                    @update:json="modelValue[element.field] = $event"
                    :label="element.label"
                    :size="element.size"
                />

                <ControlPanel
                    v-if="element.type === 'ControlPanel'"
                    :buttons="element.buttons"
                />
            </template>
        </template>
    </div>
</template>

<script>
import Tabs from "./Tabs";
import DwarfString from "../inputs/DwarfString";
import DwarfNumber from "../inputs/DwarfNumber";
import DwarfSelect from "../inputs/DwarfSelect";
import ControlPanel from "./ControlPanel";
import DwarfSwitcher from "../inputs/DwarfSwitcher";
import DwarfImageBox from "../inputs/DwarfImageBox";
import DwarfTextEditor from "../inputs/DwarfTextEditor";
import DwarfTextArea from "../inputs/DwarfTextArea";
import DwarfCheckboxList from "../inputs/DwarfCheckboxList";
import DwarfDatetime from "../inputs/DwarfDatetime";
import DwarfRepeater from "../inputs/DwarfRepeater";
import DwarfUsers from "../inputs/DwarfUsers";
import DwarfFiles from "../inputs/DwarfFiles";
import KritiJsonEditor from "../inputs/KritiJsonEditor";

export default {
    name: "FormFitter",
    emits: ['update:modelValue'],
    components: {
        Tabs, DwarfString, ControlPanel, DwarfSwitcher, DwarfImageBox, DwarfNumber,
        DwarfTextEditor, DwarfTextArea, DwarfCheckboxList, DwarfDatetime, DwarfRepeater,
        DwarfUsers, DwarfSelect, DwarfFiles, KritiJsonEditor
    },
    props: {
        scheme: {
            type: Object,
            default: null
        },
        modelValue: null
    },
    data() {
        return {
            form_data: null
        }
    },
    watch: {
        modelValue: {
            handler(modelValue) {
                this.$emit('update:modelValue', modelValue);
            },
            deep: true
        }
    }
}
</script>

<style lang="scss">
.form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
}
</style>
