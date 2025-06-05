import FormInputText from '../vue/components/FormInputText.vue';
import FormInputNumber from "../vue/components/FormInputNumber.vue";
import FormInputSwitcher from "../vue/components/FormInputSwitcher.vue";
import FormInputSelect from "../vue/components/FormInputSelect.vue";
import FormInputRepeater from "../vue/components/FormInputRepeater.vue";
import FormInputTextArea from "../vue/components/FormInputTextArea.vue";
// import FormButton from "../vue/components/FormButton.vue";
// import FormSeparator from "../vue/components/FormSeparator.vue";

export default {
    string: FormInputText,
    password: FormInputText,
    number: FormInputNumber,
    switcher: FormInputSwitcher,
    select: FormInputSelect,
    repeater: FormInputRepeater,
    textarea: FormInputTextArea,
    // button: FormButton,
    // separator: FormSeparator
}
