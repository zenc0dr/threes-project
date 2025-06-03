export default {
    beforeMount(el, binding) {
        if (typeof binding.value !== 'function') {
            console.warn(`[v-click-outside] Expected a function, got ${typeof binding.value}`);
            return;
        }

        const bubble = binding.modifiers?.bubble;

        el.__vueClickOutside__ = (e) => {
            if (bubble || (!el.contains(e.target) && el !== e.target)) {
                binding.value(e);
            }
        };

        document.addEventListener('click', el.__vueClickOutside__);
    },

    unmounted(el) {
        document.removeEventListener('click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    }
}
