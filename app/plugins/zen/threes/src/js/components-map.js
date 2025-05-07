import FormInputText from '../vue/components/FormInputText.vue';
import FormInputNumber from "../vue/components/FormInputNumber.vue";
import FormInputSwitcher from "../vue/components/FormInputSwitcher.vue";
import FormInputSelect from "../vue/components/FormInputSelect.vue";
import FormInputRepeater from "../vue/components/FormInputRepeater.vue";

export default {
    string: FormInputText,
    password: FormInputText,
    number: FormInputNumber,
    switcher: FormInputSwitcher,
    select: FormInputSelect,
    repeater: FormInputRepeater,
}
