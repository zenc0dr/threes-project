"use strict";
(self["webpackChunkthrees"] = self["webpackChunkthrees"] || []).push([["src_vue_trash_Dwarf_inputs_PvSelect_vue"],{

/***/ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/PvSelect.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/PvSelect.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var primevue_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/dropdown */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/dropdown/dropdown.esm.js");
 // https://www.primefaces.org/primevue/dropdown
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PvSelect",
  components: {
    Dropdown: primevue_dropdown__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  emits: ['update:modelValue'],
  props: {
    modelValue: null,
    options: {
      type: Array,
      "default": []
    },
    size: {
      type: String,
      "default": 'full'
    },
    style: {
      type: String,
      "default": null
    },
    label: {
      type: [String, Function],
      "default": null
    },
    search: {
      type: String,
      "default": null
    },
    element: {
      type: Object,
      "default": {}
    }
  },
  created: function created() {
    if (this.element && this.element.key) {
      APP.data[this.element.key] = this;
    }
  },
  computed: {
    inner_label: function inner_label() {
      if (this.label === null) {
        return null;
      }
      if (typeof this.label === 'string') {
        return this.label;
      }
      return this.label();
    },
    inner_options: function inner_options() {
      if (this.loaded_options.length) {
        return this.loaded_options;
      }
      return this.options;
    }
  },
  data: function data() {
    return {
      loaded_options: [],
      preloader: false,
      timer: null
    };
  },
  methods: {
    onInput: function onInput(event) {
      var data = event.value;
      this.$emit('update:modelValue', data);
      /* todo:to_docs element.onChange может быть функцией или строкой*/
      if (this.element && this.element.onChange) {
        if (typeof this.element.onChange === 'function') {
          this.element.onChange(data);
        } else {
          APP.data[this.element.onChange](data);
        }
      }
    },
    filter: function filter(text) {
      var _this = this;
      if (!this.search || !text) {
        return;
      }
      this.preloader = true;
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(function () {
        _this.getOptions(text);
      }, 300);
    },
    getOptions: function getOptions(text) {
      var _this2 = this;
      APP.api({
        url: '/api/' + this.search,
        data: {
          search_text: text
        },
        then: function then(options) {
          _this2.preloader = false;
          if (!options) {
            _this2.loaded_options = [];
          } else {
            options.unshift({
              id: -1,
              name: 'Все'
            });
            _this2.loaded_options = options;
          }
        }
      });
    },
    queryOptions: function queryOptions(query) {
      var _this3 = this;
      APP.api({
        url: '/api/' + query.url,
        data: query.data,
        then: function then(options) {
          _this3.preloader = false;
          if (!options) {
            _this3.loaded_options = [];
          } else {
            _this3.loaded_options = options;
          }
        }
      });
    },
    setOptions: function setOptions(options) {
      this.loaded_options = options;
    }
  }
});

/***/ }),

/***/ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/PvSelect.vue?vue&type=template&id=1449241c":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/PvSelect.vue?vue&type=template&id=1449241c ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/.pnpm/vue@3.5.16_typescript@5.8.3/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "input-text__label"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Dropdown");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["input-select", $props.size]),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($props.style)
  }, [$options.inner_label ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.inner_label), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Dropdown, {
    modelValue: $props.modelValue,
    onChange: $options.onInput,
    editable: !!$props.element.editable,
    options: $options.inner_options,
    "option-label": "name",
    "option-value": "id",
    loading: $data.preloader,
    filter: true,
    onFilter: _cache[0] || (_cache[0] = function ($event) {
      return $options.filter($event.value);
    }),
    "empty-filter-message": "Нет совпадений",
    "empty-message": "Выполните поиск"
  }, null, 8 /* PROPS */, ["modelValue", "onChange", "editable", "options", "loading"])], 6 /* CLASS, STYLE */);
}

/***/ }),

/***/ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/PvSelect.vue?vue&type=style&index=0&id=1449241c&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/PvSelect.vue?vue&type=style&index=0&id=1449241c&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".p-dropdown-panel {\n  z-index: 10000 !important;\n}\n.input-select {\n  margin-bottom: 20px;\n}\n.input-select .p-dropdown {\n  width: 100%;\n}\n.input-select__label {\n  font-weight: bold;\n  color: #777;\n  font-size: 14px;\n  margin-bottom: 4px;\n}\n.input-select.full {\n  width: 100%;\n}\n.input-select.half {\n  width: calc(50% - 7px);\n}\n.input-select.quarter {\n  width: calc(25% - 7px);\n}", "",{"version":3,"sources":["webpack://./src/vue/trash/Dwarf/inputs/PvSelect.vue"],"names":[],"mappings":"AACA;EACI,yBAAA;AAAJ;AAEA;EACI,mBAAA;AACJ;AACI;EACI,WAAA;AACR;AAEI;EACI,iBAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AAAR;AAGI;EACI,WAAA;AADR;AAII;EACI,sBAAA;AAFR;AAKI;EACI,sBAAA;AAHR","sourcesContent":["\n.p-dropdown-panel {\n    z-index: 10000!important;\n}\n.input-select {\n    margin-bottom: 20px;\n\n    .p-dropdown {\n        width: 100%;\n    }\n\n    &__label {\n        font-weight: bold;\n        color: #777;\n        font-size: 14px;\n        margin-bottom: 4px;\n    }\n\n    &.full {\n        width: 100%\n    }\n\n    &.half {\n        width: calc(50% - 7px);\n    }\n\n    &.quarter {\n        width: calc(25% - 7px);\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/dropdown/dropdown.esm.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/dropdown/dropdown.esm.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ script)
/* harmony export */ });
/* harmony import */ var primevue_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/api */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/api/api.esm.js");
/* harmony import */ var primevue_icons_blank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/icons/blank */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/icons/blank/index.esm.js");
/* harmony import */ var primevue_icons_check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primevue/icons/check */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/icons/check/index.esm.js");
/* harmony import */ var primevue_icons_chevrondown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primevue/icons/chevrondown */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/icons/chevrondown/index.esm.js");
/* harmony import */ var primevue_icons_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primevue/icons/search */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/icons/search/index.esm.js");
/* harmony import */ var primevue_icons_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primevue/icons/spinner */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/icons/spinner/index.esm.js");
/* harmony import */ var primevue_icons_times__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primevue/icons/times */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/icons/times/index.esm.js");
/* harmony import */ var primevue_overlayeventbus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primevue/overlayeventbus */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/overlayeventbus/overlayeventbus.esm.js");
/* harmony import */ var primevue_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primevue/portal */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/portal/portal.esm.js");
/* harmony import */ var primevue_ripple__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primevue/ripple */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/ripple/ripple.esm.js");
/* harmony import */ var primevue_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primevue/utils */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/utils/utils.esm.js");
/* harmony import */ var primevue_virtualscroller__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primevue/virtualscroller */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/virtualscroller/virtualscroller.esm.js");
/* harmony import */ var primevue_basecomponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primevue/basecomponent */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/basecomponent/basecomponent.esm.js");
/* harmony import */ var primevue_dropdown_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primevue/dropdown/style */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/dropdown/style/dropdownstyle.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vue */ "./node_modules/.pnpm/vue@3.5.16_typescript@5.8.3/node_modules/vue/dist/vue.esm-bundler.js");
















var script$1 = {
  name: 'BaseDropdown',
  "extends": primevue_basecomponent__WEBPACK_IMPORTED_MODULE_12__["default"],
  props: {
    modelValue: null,
    options: Array,
    optionLabel: [String, Function],
    optionValue: [String, Function],
    optionDisabled: [String, Function],
    optionGroupLabel: [String, Function],
    optionGroupChildren: [String, Function],
    scrollHeight: {
      type: String,
      "default": '200px'
    },
    filter: Boolean,
    filterPlaceholder: String,
    filterLocale: String,
    filterMatchMode: {
      type: String,
      "default": 'contains'
    },
    filterFields: {
      type: Array,
      "default": null
    },
    editable: Boolean,
    placeholder: {
      type: String,
      "default": null
    },
    variant: {
      type: String,
      "default": null
    },
    invalid: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    dataKey: null,
    showClear: {
      type: Boolean,
      "default": false
    },
    inputId: {
      type: String,
      "default": null
    },
    inputClass: {
      type: [String, Object],
      "default": null
    },
    inputStyle: {
      type: Object,
      "default": null
    },
    inputProps: {
      type: null,
      "default": null
    },
    panelClass: {
      type: [String, Object],
      "default": null
    },
    panelStyle: {
      type: Object,
      "default": null
    },
    panelProps: {
      type: null,
      "default": null
    },
    filterInputProps: {
      type: null,
      "default": null
    },
    clearIconProps: {
      type: null,
      "default": null
    },
    appendTo: {
      type: [String, Object],
      "default": 'body'
    },
    loading: {
      type: Boolean,
      "default": false
    },
    clearIcon: {
      type: String,
      "default": undefined
    },
    dropdownIcon: {
      type: String,
      "default": undefined
    },
    filterIcon: {
      type: String,
      "default": undefined
    },
    loadingIcon: {
      type: String,
      "default": undefined
    },
    resetFilterOnHide: {
      type: Boolean,
      "default": false
    },
    resetFilterOnClear: {
      type: Boolean,
      "default": false
    },
    virtualScrollerOptions: {
      type: Object,
      "default": null
    },
    autoOptionFocus: {
      type: Boolean,
      "default": false
    },
    autoFilterFocus: {
      type: Boolean,
      "default": false
    },
    selectOnFocus: {
      type: Boolean,
      "default": false
    },
    focusOnHover: {
      type: Boolean,
      "default": true
    },
    highlightOnSelect: {
      type: Boolean,
      "default": true
    },
    checkmark: {
      type: Boolean,
      "default": false
    },
    filterMessage: {
      type: String,
      "default": null
    },
    selectionMessage: {
      type: String,
      "default": null
    },
    emptySelectionMessage: {
      type: String,
      "default": null
    },
    emptyFilterMessage: {
      type: String,
      "default": null
    },
    emptyMessage: {
      type: String,
      "default": null
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    ariaLabel: {
      type: String,
      "default": null
    },
    ariaLabelledby: {
      type: String,
      "default": null
    }
  },
  style: primevue_dropdown_style__WEBPACK_IMPORTED_MODULE_13__["default"],
  provide: function provide() {
    return {
      $parentInstance: this
    };
  }
};

function _typeof$1(o) { "@babel/helpers - typeof"; return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$1(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty$1(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty$1(obj, key, value) { key = _toPropertyKey$1(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey$1(t) { var i = _toPrimitive$1(t, "string"); return "symbol" == _typeof$1(i) ? i : String(i); }
function _toPrimitive$1(t, r) { if ("object" != _typeof$1(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof$1(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var script = {
  name: 'Dropdown',
  "extends": script$1,
  inheritAttrs: false,
  emits: ['update:modelValue', 'change', 'focus', 'blur', 'before-show', 'before-hide', 'show', 'hide', 'filter'],
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  labelClickListener: null,
  overlay: null,
  list: null,
  virtualScroller: null,
  searchTimeout: null,
  searchValue: null,
  isModelValueChanged: false,
  data: function data() {
    return {
      id: this.$attrs.id,
      clicked: false,
      focused: false,
      focusedOptionIndex: -1,
      filterValue: null,
      overlayVisible: false
    };
  },
  watch: {
    '$attrs.id': function $attrsId(newValue) {
      this.id = newValue || (0,primevue_utils__WEBPACK_IMPORTED_MODULE_10__.UniqueComponentId)();
    },
    modelValue: function modelValue() {
      this.isModelValueChanged = true;
    },
    options: function options() {
      this.autoUpdateModel();
    }
  },
  mounted: function mounted() {
    this.id = this.id || (0,primevue_utils__WEBPACK_IMPORTED_MODULE_10__.UniqueComponentId)();
    this.autoUpdateModel();
    this.bindLabelClickListener();
  },
  updated: function updated() {
    if (this.overlayVisible && this.isModelValueChanged) {
      this.scrollInView(this.findSelectedOptionIndex());
    }
    this.isModelValueChanged = false;
  },
  beforeUnmount: function beforeUnmount() {
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    this.unbindLabelClickListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.overlay) {
      primevue_utils__WEBPACK_IMPORTED_MODULE_10__.ZIndexUtils.clear(this.overlay);
      this.overlay = null;
    }
  },
  methods: {
    getOptionIndex: function getOptionIndex(index, fn) {
      return this.virtualScrollerDisabled ? index : fn && fn(index)['index'];
    },
    getOptionLabel: function getOptionLabel(option) {
      return this.optionLabel ? primevue_utils__WEBPACK_IMPORTED_MODULE_10__.ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
    },
    getOptionValue: function getOptionValue(option) {
      return this.optionValue ? primevue_utils__WEBPACK_IMPORTED_MODULE_10__.ObjectUtils.resolveFieldData(option, this.optionValue) : option;
    },
    getOptionRenderKey: function getOptionRenderKey(option, index) {
      return (this.dataKey ? primevue_utils__WEBPACK_IMPORTED_MODULE_10__.ObjectUtils.resolveFieldData(option, this.dataKey) : this.getOptionLabel(option)) + '_' + index;
    },
    getPTItemOptions: function getPTItemOptions(option, itemOptions, index, key) {
      return this.ptm(key, {
        context: {
          option: option,
          index: index,
          selected: this.isSelected(option),
          focused: this.focusedOptionIndex === this.getOptionIndex(index, itemOptions),
          disabled: this.isOptionDisabled(option)
        }
      });
    },
    isOptionDisabled: function isOptionDisabled(option) {
      return this.optionDisabled ? primevue_utils__WEBPACK_IMPORTED_MODULE_10__.ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
    },
    isOptionGroup: function isOptionGroup(option) {
      return this.optionGroupLabel && option.optionGroup && option.group;
    },
    getOptionGroupLabel: function getOptionGroupLabel(optionGroup) {
      return primevue_utils__WEBPACK_IMPORTED_MODULE_10__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel);
    },
    getOptionGroupChildren: function getOptionGroupChildren(optionGroup) {
      return primevue_utils__WEBPACK_IMPORTED_MODULE_10__.ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren);
    },
    getAriaPosInset: function getAriaPosInset(index) {
      var _this = this;
      return (this.optionGroupLabel ? index - this.visibleOptions.slice(0, index).filter(function (option) {
        return _this.isOptionGroup(option);
      }).length : index) + 1;
    },
    show: function show(isFocus) {
      this.$emit('before-show');
      this.overlayVisible = true;
      this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.editable ? -1 : this.findSelectedOptionIndex();
      isFocus && primevue_utils__WEBPACK_IMPORTED_MODULE_10__.DomHandler.focus(this.$refs.focusInput);
    },
    hide: function hide(isFocus) {
      var _this2 = this;
      var _hide = function _hide() {
        _this2.$emit('before-hide');
        _this2.overlayVisible = false;
        _this2.clicked = false;
        _this2.focusedOptionIndex = -1;
        _this2.searchValue = '';
        _this2.resetFilterOnHide && (_this2.filterValue = null);
        isFocus && primevue_utils__WEBPACK_IMPORTED_MODULE_10__.DomHandler.focus(_this2.$refs.focusInput);
      };
      setTimeout(function () {
        _hide();
      }, 0); // For ScreenReaders
    },
    onFocus: function onFocus(event) {
      if (this.disabled) {
        // For ScreenReaders
        return;
      }
      this.focused = true;
      if (this.overlayVisible) {
        this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.editable ? -1 : this.findSelectedOptionIndex();
        this.scrollInView(this.focusedOptionIndex);
      }
      this.$emit('focus', event);
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.focusedOptionIndex = -1;
      this.searchValue = '';
      this.$emit('blur', event);
    },
    onKeyDown: function onKeyDown(event) {
      if (this.disabled || primevue_utils__WEBPACK_IMPORTED_MODULE_10__.DomHandler.isAndroid()) {
        event.preventDefault();
        return;
      }
      var metaKey = event.metaKey || event.ctrlKey;
      switch (event.code) {
        case 'ArrowDown':
          this.onArrowDownKey(event);
          break;
        case 'ArrowUp':
          this.onArrowUpKey(event, this.editable);
          break;
        case 'ArrowLeft':
        case 'ArrowRight':
          this.onArrowLeftKey(event, this.editable);
          break;
        case 'Home':
          this.onHomeKey(event, this.editable);
          break;
        case 'End':
          this.onEndKey(event, this.editable);
          break;
        case 'PageDown':
          this.onPageDownKey(event);
          break;
        case 'PageUp':
          this.onPageUpKey(event);
          break;
        case 'Space':
          this.onSpaceKey(event, this.editable);
          break;
        case 'Enter':
        case 'NumpadEnter':
          this.onEnterKey(event);
          break;
        case 'Escape':
          this.onEscapeKey(event);
          break;
        case 'Tab':
          this.onTabKey(event);
          break;
        case 'Backspace':
          this.onBackspaceKey(event, this.editable);
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          //NOOP
          break;
        default:
          if (!metaKey && primevue_utils__WEBPACK_IMPORTED_MODULE_10__.ObjectUtils.isPrintableCharacter(event.key)) {
            !this.overlayVisible && this.show();
            !this.editable && this.searchOptions(event, event.key);
          }
          break;
      }
      this.clicked = false;
    },
    onEditableInput: function onEditableInput(event) {
      var value = event.target.value;
      this.searchValue = '';
      var matched = this.searchOptions(event, value);
      !matched && (this.focusedOptionIndex = -1);
      this.updateModel(event, value);
      !this.overlayVisible && primevue_utils__WEBPACK_IMPORTED_MODULE_10__.ObjectUtils.isNotEmpty(value) && this.show();
    },
    onContainerClick: function onContainerClick(event) {
      if (this.disabled || this.loading) {
        return;
      }
      if (event.target.tagName === 'INPUT' || event.target.getAttribute('data-pc-section') === 'clearicon' || event.target.closest('[data-pc-section="clearicon"]')) {
        return;
      } else if (!this.overlay || !this.overlay.contains(event.target)) {
        this.overlayVisible ? this.hide(true) : this.show(true);
      }
      this.clicked = true;
    },
    onClearClick: function onClearClick(event) {
      this.updateModel(event, null);
      this.resetFilterOnClear && (this.filterValue = null);
    },
    onFirstHiddenFocus: function onFirstHiddenFocus(event) {
      var focusableEl = event.relatedTarget === this.$refs.focusInput ? primevue_utils__WEBPACK_IMPORTED_MODULE_10__.DomHandler.getFirstFocusableElement(this.overlay, ':not([data-p-hidden-focusable="true"])') : this.$refs.focusInput;
      primevue_utils__WEBPACK_IMPORTED_MODULE_10__.DomHandler.focus(focusableEl);
    },
    onLastHiddenFocus: function onLastHiddenFocus(event) {
      var focusableEl = event.relatedTarget === this.$refs.focusInput ? primevue_utils__WEBPACK_IMPORTED_MODULE_10__.DomHandler.getLastFocusableElement(this.overlay, ':not([data-p-hidden-focusable="true"])') : this.$refs.focusInput;
      primevue_utils__WEBPACK_IMPORTED_MODULE_10__.DomHandler.focus(focusableEl);
    },
    onOptionSelect: function onOptionSelect(event, option) {
      var isHide = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var value = this.getOptionValue(option);
      this.updateModel(event, value);
      isHide && this.hide(true);
    },
    onOptionMouseMove: function onOptionMouseMove(event, index) {
      if (this.focusOnHover) {
        this.changeFocusedOptionIndex(event, index);
      }
    },
    onFilterChange: function onFilterChange(event) {
      var value = event.target.value;
      this.filterValue = value;
      this.focusedOptionIndex = -1;
      this.$emit('filter', {
        originalEvent: event,
        value: value
      });
      !this.virtualScrollerDisabled && this.virtualScroller.scrollToIndex(0);
    },
    onFilterKeyDown: function onFilterKeyDown(event) {
      switch (event.code) {
        case 'ArrowDown':
          this.onArrowDownKey(event);
          break;
        case 'ArrowUp':
          this.onArrowUpKey(event, true);
          break;
        case 'ArrowLeft':
        case 'ArrowRight':
          this.onArrowLeftKey(event, true);
          break;
        case 'Home':
          this.onHomeKey(event, true);
          break;
        case 'End':
          this.onEndKey(event, true);
          break;
        case 'Enter':
        case 'NumpadEnter':
          this.onEnterKey(event);
          break;
        case 'Escape':
          this.onEscapeKey(event);
          break;
        case 'Tab':
          this.onTabKey(event, true);
          break;
      }
    },
    onFilterBlur: function onFilterBlur() {
      this.focusedOptionIndex = -1;
    },
    onFilterUpdated: function onFilterUpdated() {
      if (this.overlayVisible) {
        this.alignOverlay();
      }
    },
    onOverlayClick: function onOverlayClick(event) {
      primevue_overlayeventbus__WEBPACK_IMPORTED_MODULE_7__["default"].emit('overlay-click', {
        originalEvent: event,
        target: this.$el
      });
    },
    onOverlayKeyDown: function onOverlayKeyDown(event) {
      switch (event.code) {
        case 'Escape':
          this.onEscapeKey(event);
          break;
      }
    },
    onArrowDownKey: function onArrowDownKey(event) {
      if (!this.overlayVisible) {
        this.show();
        this.editable && this.changeFocusedOptionIndex(event, this.findSelectedOptionIndex());
      } else {
        var optionIndex = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
        this.changeFocusedOptionIndex(event, optionIndex);
      }
      event.preventDefault();
    },
    onArrowUpKey: function onArrowUpKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (event.altKey && !pressedInInputText) {
        if (this.focusedOptionIndex !== -1) {
          this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
        }
        this.overlayVisible && this.hide();
        event.preventDefault();
      } else {
        var optionIndex = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
        this.changeFocusedOptionIndex(event, optionIndex);
        !this.overlayVisible && this.show();
        event.preventDefault();
      }
    },
    onArrowLeftKey: function onArrowLeftKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      pressedInInputText && (this.focusedOptionIndex = -1);
    },
    onHomeKey: function onHomeKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (pressedInInputText) {
        var target = event.currentTarget;
        if (event.shiftKey) {
          target.setSelectionRange(0, event.target.selectionStart);
        } else {
          target.setSelectionRange(0, 0);
          this.focusedOptionIndex = -1;
        }
      } else {
        this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());
        !this.overlayVisible && this.show();
      }
      event.preventDefault();
    },
    onEndKey: function onEndKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (pressedInInputText) {
        var target = event.currentTarget;
        if (event.shiftKey) {
          target.setSelectionRange(event.target.selectionStart, target.value.length);
        } else {
          var len = target.value.length;
          target.setSelectionRange(len, len);
          this.focusedOptionIndex = -1;
        }
      } else {
        this.changeFocusedOptionIndex(event, this.findLastOptionIndex());
        !this.overlayVisible && this.show();
      }
      event.preventDefault();
    },
    onPageUpKey: function onPageUpKey(event) {
      this.scrollInView(0);
      event.preventDefault();
    },
    onPageDownKey: function onPageDownKey(event) {
      this.scrollInView(this.visibleOptions.length - 1);
      event.preventDefault();
    },
    onEnterKey: function onEnterKey(event) {
      if (!this.overlayVisible) {
        this.focusedOptionIndex = -1; // reset
        this.onArrowDownKey(event);
      } else {
        if (this.focusedOptionIndex !== -1) {
          this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
        }
        this.hide();
      }
      event.preventDefault();
    },
    onSpaceKey: function onSpaceKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      !pressedInInputText && this.onEnterKey(event);
    },
    onEscapeKey: function onEscapeKey(event) {
      this.overlayVisible && this.hide(true);
      event.preventDefault();
      event.stopPropagation(); //@todo will be changed next versionss
    },
    onTabKey: function onTabKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!pressedInInputText) {
        if (this.overlayVisible && this.hasFocusableElements()) {
          primevue_utils__WEBPACK_IMPORTED_MODULE_10__.DomHandler.focus(this.$refs.firstHiddenFocusableElementOnOverlay);
          event.preventDefault();
        } else {
          if (this.focusedOptionIndex !== -1) {
            this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
          }
          this.overlayVisible && this.hide(this.filter);
        }
      }
    },
    onBackspaceKey: function onBackspaceKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (pressedInInputText) {
        !this.overlayVisible && this.show();
      }
    },
    onOverlayEnter: function onOverlayEnter(el) {
      primevue_utils__WEBPACK_IMPORTED_MODULE_10__.ZIndexUtils.set('overlay', el, this.$primevue.config.zIndex.overlay);
      primevue_utils__WEBPACK_IMPORTED_MODULE_10__.DomHandler.addStyles(el, {
        position: 'absolute',
        top: '0',
        left: '0'
      });
      this.alignOverlay();
      this.scrollInView();
      this.autoFilterFocus && primevue_utils__WEBPACK_IMPORTED_MODULE_10__.DomHandler.focus(this.$refs.filterInput);
    },
    onOverlayAfterEnter: function onOverlayAfterEnter() {
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      this.$emit('show');
    },
    onOverlayLeave: function onOverlayLeave() {
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
      this.$emit('hide');
      this.overlay = null;
    },
    onOverlayAfterLeave: function onOverlayAfterLeave(el) {
      primevue_utils__WEBPACK_IMPORTED_MODULE_10__.ZIndexUtils.clear(el);
    },
    alignOverlay: function alignOverlay() {
      if (this.appendTo === 'self') {
        primevue_utils__WEBPACK_IMPORTED_MODULE_10__.DomHandler.relativePosition(this.overlay, this.$el);
      } else {
        this.overlay.style.minWidth = primevue_utils__WEBPACK_IMPORTED_MODULE_10__.DomHandler.getOuterWidth(this.$el) + 'px';
        primevue_utils__WEBPACK_IMPORTED_MODULE_10__.DomHandler.absolutePosition(this.overlay, this.$el);
      }
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this3 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function (event) {
          if (_this3.overlayVisible && _this3.overlay && !_this3.$el.contains(event.target) && !_this3.overlay.contains(event.target)) {
            _this3.hide();
          }
        };
        document.addEventListener('click', this.outsideClickListener);
      }
    },
    unbindOutsideClickListener: function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener('click', this.outsideClickListener);
        this.outsideClickListener = null;
      }
    },
    bindScrollListener: function bindScrollListener() {
      var _this4 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new primevue_utils__WEBPACK_IMPORTED_MODULE_10__.ConnectedOverlayScrollHandler(this.$refs.container, function () {
          if (_this4.overlayVisible) {
            _this4.hide();
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    },
    bindResizeListener: function bindResizeListener() {
      var _this5 = this;
      if (!this.resizeListener) {
        this.resizeListener = function () {
          if (_this5.overlayVisible && !primevue_utils__WEBPACK_IMPORTED_MODULE_10__.DomHandler.isTouchDevice()) {
            _this5.hide();
          }
        };
        window.addEventListener('resize', this.resizeListener);
      }
    },
    unbindResizeListener: function unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener('resize', this.resizeListener);
        this.resizeListener = null;
      }
    },
    bindLabelClickListener: function bindLabelClickListener() {
      var _this6 = this;
      if (!this.editable && !this.labelClickListener) {
        var label = document.querySelector("label[for=\"".concat(this.inputId, "\"]"));
        if (label && primevue_utils__WEBPACK_IMPORTED_MODULE_10__.DomHandler.isVisible(label)) {
          this.labelClickListener = function () {
            primevue_utils__WEBPACK_IMPORTED_MODULE_10__.DomHandler.focus(_this6.$refs.focusInput);
          };
          label.addEventListener('click', this.labelClickListener);
        }
      }
    },
    unbindLabelClickListener: function unbindLabelClickListener() {
      if (this.labelClickListener) {
        var label = document.querySelector("label[for=\"".concat(this.inputId, "\"]"));
        if (label && primevue_utils__WEBPACK_IMPORTED_MODULE_10__.DomHandler.isVisible(label)) {
          label.removeEventListener('click', this.labelClickListener);
        }
      }
    },
    hasFocusableElements: function hasFocusableElements() {
      return primevue_utils__WEBPACK_IMPORTED_MODULE_10__.DomHandler.getFocusableElements(this.overlay, ':not([data-p-hidden-focusable="true"])').length > 0;
    },
    isOptionMatched: function isOptionMatched(option) {
      var _this$getOptionLabel;
      return this.isValidOption(option) && ((_this$getOptionLabel = this.getOptionLabel(option)) === null || _this$getOptionLabel === void 0 ? void 0 : _this$getOptionLabel.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)));
    },
    isValidOption: function isValidOption(option) {
      return primevue_utils__WEBPACK_IMPORTED_MODULE_10__.ObjectUtils.isNotEmpty(option) && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
    },
    isValidSelectedOption: function isValidSelectedOption(option) {
      return this.isValidOption(option) && this.isSelected(option);
    },
    isSelected: function isSelected(option) {
      return this.isValidOption(option) && primevue_utils__WEBPACK_IMPORTED_MODULE_10__.ObjectUtils.equals(this.modelValue, this.getOptionValue(option), this.equalityKey);
    },
    findFirstOptionIndex: function findFirstOptionIndex() {
      var _this7 = this;
      return this.visibleOptions.findIndex(function (option) {
        return _this7.isValidOption(option);
      });
    },
    findLastOptionIndex: function findLastOptionIndex() {
      var _this8 = this;
      return primevue_utils__WEBPACK_IMPORTED_MODULE_10__.ObjectUtils.findLastIndex(this.visibleOptions, function (option) {
        return _this8.isValidOption(option);
      });
    },
    findNextOptionIndex: function findNextOptionIndex(index) {
      var _this9 = this;
      var matchedOptionIndex = index < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index + 1).findIndex(function (option) {
        return _this9.isValidOption(option);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    },
    findPrevOptionIndex: function findPrevOptionIndex(index) {
      var _this10 = this;
      var matchedOptionIndex = index > 0 ? primevue_utils__WEBPACK_IMPORTED_MODULE_10__.ObjectUtils.findLastIndex(this.visibleOptions.slice(0, index), function (option) {
        return _this10.isValidOption(option);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    },
    findSelectedOptionIndex: function findSelectedOptionIndex() {
      var _this11 = this;
      return this.hasSelectedOption ? this.visibleOptions.findIndex(function (option) {
        return _this11.isValidSelectedOption(option);
      }) : -1;
    },
    findFirstFocusedOptionIndex: function findFirstFocusedOptionIndex() {
      var selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    },
    findLastFocusedOptionIndex: function findLastFocusedOptionIndex() {
      var selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    },
    searchOptions: function searchOptions(event, _char) {
      var _this12 = this;
      this.searchValue = (this.searchValue || '') + _char;
      var optionIndex = -1;
      var matched = false;
      if (primevue_utils__WEBPACK_IMPORTED_MODULE_10__.ObjectUtils.isNotEmpty(this.searchValue)) {
        if (this.focusedOptionIndex !== -1) {
          optionIndex = this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function (option) {
            return _this12.isOptionMatched(option);
          });
          optionIndex = optionIndex === -1 ? this.visibleOptions.slice(0, this.focusedOptionIndex).findIndex(function (option) {
            return _this12.isOptionMatched(option);
          }) : optionIndex + this.focusedOptionIndex;
        } else {
          optionIndex = this.visibleOptions.findIndex(function (option) {
            return _this12.isOptionMatched(option);
          });
        }
        if (optionIndex !== -1) {
          matched = true;
        }
        if (optionIndex === -1 && this.focusedOptionIndex === -1) {
          optionIndex = this.findFirstFocusedOptionIndex();
        }
        if (optionIndex !== -1) {
          this.changeFocusedOptionIndex(event, optionIndex);
        }
      }
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(function () {
        _this12.searchValue = '';
        _this12.searchTimeout = null;
      }, 500);
      return matched;
    },
    changeFocusedOptionIndex: function changeFocusedOptionIndex(event, index) {
      if (this.focusedOptionIndex !== index) {
        this.focusedOptionIndex = index;
        this.scrollInView();
        if (this.selectOnFocus) {
          this.onOptionSelect(event, this.visibleOptions[index], false);
        }
      }
    },
    scrollInView: function scrollInView() {
      var _this13 = this;
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
      this.$nextTick(function () {
        var id = index !== -1 ? "".concat(_this13.id, "_").concat(index) : _this13.focusedOptionId;
        var element = primevue_utils__WEBPACK_IMPORTED_MODULE_10__.DomHandler.findSingle(_this13.list, "li[id=\"".concat(id, "\"]"));
        if (element) {
          element.scrollIntoView && element.scrollIntoView({
            block: 'nearest'
          });
        } else if (!_this13.virtualScrollerDisabled) {
          _this13.virtualScroller && _this13.virtualScroller.scrollToIndex(index !== -1 ? index : _this13.focusedOptionIndex);
        }
      });
    },
    autoUpdateModel: function autoUpdateModel() {
      if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption) {
        this.focusedOptionIndex = this.findFirstFocusedOptionIndex();
        this.onOptionSelect(null, this.visibleOptions[this.focusedOptionIndex], false);
      }
    },
    updateModel: function updateModel(event, value) {
      this.$emit('update:modelValue', value);
      this.$emit('change', {
        originalEvent: event,
        value: value
      });
    },
    flatOptions: function flatOptions(options) {
      var _this14 = this;
      return (options || []).reduce(function (result, option, index) {
        result.push({
          optionGroup: option,
          group: true,
          index: index
        });
        var optionGroupChildren = _this14.getOptionGroupChildren(option);
        optionGroupChildren && optionGroupChildren.forEach(function (o) {
          return result.push(o);
        });
        return result;
      }, []);
    },
    overlayRef: function overlayRef(el) {
      this.overlay = el;
    },
    listRef: function listRef(el, contentRef) {
      this.list = el;
      contentRef && contentRef(el); // For VirtualScroller
    },
    virtualScrollerRef: function virtualScrollerRef(el) {
      this.virtualScroller = el;
    }
  },
  computed: {
    visibleOptions: function visibleOptions() {
      var _this15 = this;
      var options = this.optionGroupLabel ? this.flatOptions(this.options) : this.options || [];
      if (this.filterValue) {
        var filteredOptions = primevue_api__WEBPACK_IMPORTED_MODULE_0__.FilterService.filter(options, this.searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
        if (this.optionGroupLabel) {
          var optionGroups = this.options || [];
          var filtered = [];
          optionGroups.forEach(function (group) {
            var groupChildren = _this15.getOptionGroupChildren(group);
            var filteredItems = groupChildren.filter(function (item) {
              return filteredOptions.includes(item);
            });
            if (filteredItems.length > 0) filtered.push(_objectSpread$1(_objectSpread$1({}, group), {}, _defineProperty$1({}, typeof _this15.optionGroupChildren === 'string' ? _this15.optionGroupChildren : 'items', _toConsumableArray(filteredItems))));
          });
          return this.flatOptions(filtered);
        }
        return filteredOptions;
      }
      return options;
    },
    hasSelectedOption: function hasSelectedOption() {
      return primevue_utils__WEBPACK_IMPORTED_MODULE_10__.ObjectUtils.isNotEmpty(this.modelValue);
    },
    label: function label() {
      var selectedOptionIndex = this.findSelectedOptionIndex();
      return selectedOptionIndex !== -1 ? this.getOptionLabel(this.visibleOptions[selectedOptionIndex]) : this.placeholder || 'p-emptylabel';
    },
    editableInputValue: function editableInputValue() {
      var selectedOptionIndex = this.findSelectedOptionIndex();
      return selectedOptionIndex !== -1 ? this.getOptionLabel(this.visibleOptions[selectedOptionIndex]) : this.modelValue || '';
    },
    equalityKey: function equalityKey() {
      return this.optionValue ? null : this.dataKey;
    },
    searchFields: function searchFields() {
      return this.filterFields || [this.optionLabel];
    },
    filterResultMessageText: function filterResultMessageText() {
      return primevue_utils__WEBPACK_IMPORTED_MODULE_10__.ObjectUtils.isNotEmpty(this.visibleOptions) ? this.filterMessageText.replaceAll('{0}', this.visibleOptions.length) : this.emptyFilterMessageText;
    },
    filterMessageText: function filterMessageText() {
      return this.filterMessage || this.$primevue.config.locale.searchMessage || '';
    },
    emptyFilterMessageText: function emptyFilterMessageText() {
      return this.emptyFilterMessage || this.$primevue.config.locale.emptySearchMessage || this.$primevue.config.locale.emptyFilterMessage || '';
    },
    emptyMessageText: function emptyMessageText() {
      return this.emptyMessage || this.$primevue.config.locale.emptyMessage || '';
    },
    selectionMessageText: function selectionMessageText() {
      return this.selectionMessage || this.$primevue.config.locale.selectionMessage || '';
    },
    emptySelectionMessageText: function emptySelectionMessageText() {
      return this.emptySelectionMessage || this.$primevue.config.locale.emptySelectionMessage || '';
    },
    selectedMessageText: function selectedMessageText() {
      return this.hasSelectedOption ? this.selectionMessageText.replaceAll('{0}', '1') : this.emptySelectionMessageText;
    },
    listAriaLabel: function listAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.listLabel : undefined;
    },
    focusedOptionId: function focusedOptionId() {
      return this.focusedOptionIndex !== -1 ? "".concat(this.id, "_").concat(this.focusedOptionIndex) : null;
    },
    ariaSetSize: function ariaSetSize() {
      var _this16 = this;
      return this.visibleOptions.filter(function (option) {
        return !_this16.isOptionGroup(option);
      }).length;
    },
    virtualScrollerDisabled: function virtualScrollerDisabled() {
      return !this.virtualScrollerOptions;
    }
  },
  directives: {
    ripple: primevue_ripple__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  components: {
    VirtualScroller: primevue_virtualscroller__WEBPACK_IMPORTED_MODULE_11__["default"],
    Portal: primevue_portal__WEBPACK_IMPORTED_MODULE_8__["default"],
    TimesIcon: primevue_icons_times__WEBPACK_IMPORTED_MODULE_6__["default"],
    ChevronDownIcon: primevue_icons_chevrondown__WEBPACK_IMPORTED_MODULE_3__["default"],
    SpinnerIcon: primevue_icons_spinner__WEBPACK_IMPORTED_MODULE_5__["default"],
    SearchIcon: primevue_icons_search__WEBPACK_IMPORTED_MODULE_4__["default"],
    CheckIcon: primevue_icons_check__WEBPACK_IMPORTED_MODULE_2__["default"],
    BlankIcon: primevue_icons_blank__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
};

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _hoisted_1 = ["id"];
var _hoisted_2 = ["id", "value", "placeholder", "tabindex", "disabled", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-invalid"];
var _hoisted_3 = ["id", "tabindex", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-disabled"];
var _hoisted_4 = ["value", "placeholder", "aria-owns", "aria-activedescendant"];
var _hoisted_5 = ["id", "aria-label"];
var _hoisted_6 = ["id"];
var _hoisted_7 = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onClick", "onMousemove", "data-p-highlight", "data-p-focused", "data-p-disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpinnerIcon = (0,vue__WEBPACK_IMPORTED_MODULE_14__.resolveComponent)("SpinnerIcon");
  var _component_CheckIcon = (0,vue__WEBPACK_IMPORTED_MODULE_14__.resolveComponent)("CheckIcon");
  var _component_BlankIcon = (0,vue__WEBPACK_IMPORTED_MODULE_14__.resolveComponent)("BlankIcon");
  var _component_VirtualScroller = (0,vue__WEBPACK_IMPORTED_MODULE_14__.resolveComponent)("VirtualScroller");
  var _component_Portal = (0,vue__WEBPACK_IMPORTED_MODULE_14__.resolveComponent)("Portal");
  var _directive_ripple = (0,vue__WEBPACK_IMPORTED_MODULE_14__.resolveDirective)("ripple");
  return (0,vue__WEBPACK_IMPORTED_MODULE_14__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementBlock)("div", (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
    ref: "container",
    id: $data.id,
    "class": _ctx.cx('root'),
    onClick: _cache[16] || (_cache[16] = function () {
      return $options.onContainerClick && $options.onContainerClick.apply($options, arguments);
    })
  }, _ctx.ptmi('root')), [_ctx.editable ? ((0,vue__WEBPACK_IMPORTED_MODULE_14__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementBlock)("input", (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
    key: 0,
    ref: "focusInput",
    id: _ctx.inputId,
    type: "text",
    "class": [_ctx.cx('input'), _ctx.inputClass],
    style: _ctx.inputStyle,
    value: $options.editableInputValue,
    placeholder: _ctx.placeholder,
    tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
    disabled: _ctx.disabled,
    autocomplete: "off",
    role: "combobox",
    "aria-label": _ctx.ariaLabel,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-expanded": $data.overlayVisible,
    "aria-controls": $data.id + '_list',
    "aria-activedescendant": $data.focused ? $options.focusedOptionId : undefined,
    "aria-invalid": _ctx.invalid || undefined,
    onFocus: _cache[0] || (_cache[0] = function () {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[1] || (_cache[1] = function () {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    }),
    onKeydown: _cache[2] || (_cache[2] = function () {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    }),
    onInput: _cache[3] || (_cache[3] = function () {
      return $options.onEditableInput && $options.onEditableInput.apply($options, arguments);
    })
  }, _objectSpread(_objectSpread({}, _ctx.inputProps), _ctx.ptm('input'))), null, 16, _hoisted_2)) : ((0,vue__WEBPACK_IMPORTED_MODULE_14__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementBlock)("span", (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
    key: 1,
    ref: "focusInput",
    id: _ctx.inputId,
    "class": [_ctx.cx('input'), _ctx.inputClass],
    style: _ctx.inputStyle,
    tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
    role: "combobox",
    "aria-label": _ctx.ariaLabel || ($options.label === 'p-emptylabel' ? undefined : $options.label),
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-expanded": $data.overlayVisible,
    "aria-controls": $data.id + '_list',
    "aria-activedescendant": $data.focused ? $options.focusedOptionId : undefined,
    "aria-disabled": _ctx.disabled,
    onFocus: _cache[4] || (_cache[4] = function () {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[5] || (_cache[5] = function () {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    }),
    onKeydown: _cache[6] || (_cache[6] = function () {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    })
  }, _objectSpread(_objectSpread({}, _ctx.inputProps), _ctx.ptm('input'))), [(0,vue__WEBPACK_IMPORTED_MODULE_14__.renderSlot)(_ctx.$slots, "value", {
    value: _ctx.modelValue,
    placeholder: _ctx.placeholder
  }, function () {
    return [(0,vue__WEBPACK_IMPORTED_MODULE_14__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_14__.toDisplayString)($options.label === 'p-emptylabel' ? ' ' : $options.label || 'empty'), 1)];
  })], 16, _hoisted_3)), _ctx.showClear && _ctx.modelValue != null ? (0,vue__WEBPACK_IMPORTED_MODULE_14__.renderSlot)(_ctx.$slots, "clearicon", {
    key: 2,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_14__.normalizeClass)(_ctx.cx('clearIcon')),
    onClick: $options.onClearClick,
    clearCallback: $options.onClearClick
  }, function () {
    return [((0,vue__WEBPACK_IMPORTED_MODULE_14__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_14__.resolveDynamicComponent)(_ctx.clearIcon ? 'i' : 'TimesIcon'), (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
      ref: "clearIcon",
      "class": [_ctx.cx('clearIcon'), _ctx.clearIcon],
      onClick: $options.onClearClick
    }, _objectSpread(_objectSpread({}, _ctx.clearIconProps), _ctx.ptm('clearIcon')), {
      "data-pc-section": "clearicon"
    }), null, 16, ["class", "onClick"]))];
  }) : (0,vue__WEBPACK_IMPORTED_MODULE_14__.createCommentVNode)("", true), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementVNode)("div", (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
    "class": _ctx.cx('trigger')
  }, _ctx.ptm('trigger')), [_ctx.loading ? (0,vue__WEBPACK_IMPORTED_MODULE_14__.renderSlot)(_ctx.$slots, "loadingicon", {
    key: 0,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_14__.normalizeClass)(_ctx.cx('loadingIcon'))
  }, function () {
    return [_ctx.loadingIcon ? ((0,vue__WEBPACK_IMPORTED_MODULE_14__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementBlock)("span", (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
      key: 0,
      "class": [_ctx.cx('loadingIcon'), 'pi-spin', _ctx.loadingIcon],
      "aria-hidden": "true"
    }, _ctx.ptm('loadingIcon')), null, 16)) : ((0,vue__WEBPACK_IMPORTED_MODULE_14__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createBlock)(_component_SpinnerIcon, (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
      key: 1,
      "class": _ctx.cx('loadingIcon'),
      spin: "",
      "aria-hidden": "true"
    }, _ctx.ptm('loadingIcon')), null, 16, ["class"]))];
  }) : (0,vue__WEBPACK_IMPORTED_MODULE_14__.renderSlot)(_ctx.$slots, "dropdownicon", {
    key: 1,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_14__.normalizeClass)(_ctx.cx('dropdownIcon'))
  }, function () {
    return [((0,vue__WEBPACK_IMPORTED_MODULE_14__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_14__.resolveDynamicComponent)(_ctx.dropdownIcon ? 'span' : 'ChevronDownIcon'), (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
      "class": [_ctx.cx('dropdownIcon'), _ctx.dropdownIcon],
      "aria-hidden": "true"
    }, _ctx.ptm('dropdownIcon')), null, 16, ["class"]))];
  })], 16), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createVNode)(_component_Portal, {
    appendTo: _ctx.appendTo
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_14__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_14__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_14__.Transition, (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
        name: "p-connected-overlay",
        onEnter: $options.onOverlayEnter,
        onAfterEnter: $options.onOverlayAfterEnter,
        onLeave: $options.onOverlayLeave,
        onAfterLeave: $options.onOverlayAfterLeave
      }, _ctx.ptm('transition')), {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_14__.withCtx)(function () {
          return [$data.overlayVisible ? ((0,vue__WEBPACK_IMPORTED_MODULE_14__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementBlock)("div", (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
            key: 0,
            ref: $options.overlayRef,
            "class": [_ctx.cx('panel'), _ctx.panelClass],
            style: _ctx.panelStyle,
            onClick: _cache[14] || (_cache[14] = function () {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            }),
            onKeydown: _cache[15] || (_cache[15] = function () {
              return $options.onOverlayKeyDown && $options.onOverlayKeyDown.apply($options, arguments);
            })
          }, _objectSpread(_objectSpread({}, _ctx.panelProps), _ctx.ptm('panel'))), [(0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementVNode)("span", (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
            ref: "firstHiddenFocusableElementOnOverlay",
            role: "presentation",
            "aria-hidden": "true",
            "class": "p-hidden-accessible p-hidden-focusable",
            tabindex: 0,
            onFocus: _cache[7] || (_cache[7] = function () {
              return $options.onFirstHiddenFocus && $options.onFirstHiddenFocus.apply($options, arguments);
            })
          }, _ctx.ptm('hiddenFirstFocusableEl'), {
            "data-p-hidden-accessible": true,
            "data-p-hidden-focusable": true
          }), null, 16), (0,vue__WEBPACK_IMPORTED_MODULE_14__.renderSlot)(_ctx.$slots, "header", {
            value: _ctx.modelValue,
            options: $options.visibleOptions
          }), _ctx.filter ? ((0,vue__WEBPACK_IMPORTED_MODULE_14__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementBlock)("div", (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
            key: 0,
            "class": _ctx.cx('header')
          }, _ctx.ptm('header')), [(0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementVNode)("div", (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
            "class": _ctx.cx('filterContainer')
          }, _ctx.ptm('filterContainer')), [(0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementVNode)("input", (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
            ref: "filterInput",
            type: "text",
            value: $data.filterValue,
            onVnodeMounted: _cache[8] || (_cache[8] = function () {
              return $options.onFilterUpdated && $options.onFilterUpdated.apply($options, arguments);
            }),
            onVnodeUpdated: _cache[9] || (_cache[9] = function () {
              return $options.onFilterUpdated && $options.onFilterUpdated.apply($options, arguments);
            }),
            "class": _ctx.cx('filterInput'),
            placeholder: _ctx.filterPlaceholder,
            role: "searchbox",
            autocomplete: "off",
            "aria-owns": $data.id + '_list',
            "aria-activedescendant": $options.focusedOptionId,
            onKeydown: _cache[10] || (_cache[10] = function () {
              return $options.onFilterKeyDown && $options.onFilterKeyDown.apply($options, arguments);
            }),
            onBlur: _cache[11] || (_cache[11] = function () {
              return $options.onFilterBlur && $options.onFilterBlur.apply($options, arguments);
            }),
            onInput: _cache[12] || (_cache[12] = function () {
              return $options.onFilterChange && $options.onFilterChange.apply($options, arguments);
            })
          }, _objectSpread(_objectSpread({}, _ctx.filterInputProps), _ctx.ptm('filterInput'))), null, 16, _hoisted_4), (0,vue__WEBPACK_IMPORTED_MODULE_14__.renderSlot)(_ctx.$slots, "filtericon", {
            "class": (0,vue__WEBPACK_IMPORTED_MODULE_14__.normalizeClass)(_ctx.cx('filterIcon'))
          }, function () {
            return [((0,vue__WEBPACK_IMPORTED_MODULE_14__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_14__.resolveDynamicComponent)(_ctx.filterIcon ? 'span' : 'SearchIcon'), (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
              "class": [_ctx.cx('filterIcon'), _ctx.filterIcon]
            }, _ctx.ptm('filterIcon')), null, 16, ["class"]))];
          })], 16), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementVNode)("span", (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
            role: "status",
            "aria-live": "polite",
            "class": "p-hidden-accessible"
          }, _ctx.ptm('hiddenFilterResult'), {
            "data-p-hidden-accessible": true
          }), (0,vue__WEBPACK_IMPORTED_MODULE_14__.toDisplayString)($options.filterResultMessageText), 17)], 16)) : (0,vue__WEBPACK_IMPORTED_MODULE_14__.createCommentVNode)("", true), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementVNode)("div", (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
            "class": _ctx.cx('wrapper'),
            style: {
              'max-height': $options.virtualScrollerDisabled ? _ctx.scrollHeight : ''
            }
          }, _ctx.ptm('wrapper')), [(0,vue__WEBPACK_IMPORTED_MODULE_14__.createVNode)(_component_VirtualScroller, (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
            ref: $options.virtualScrollerRef
          }, _ctx.virtualScrollerOptions, {
            items: $options.visibleOptions,
            style: {
              height: _ctx.scrollHeight
            },
            tabindex: -1,
            disabled: $options.virtualScrollerDisabled,
            pt: _ctx.ptm('virtualScroller')
          }), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createSlots)({
            content: (0,vue__WEBPACK_IMPORTED_MODULE_14__.withCtx)(function (_ref) {
              var styleClass = _ref.styleClass,
                contentRef = _ref.contentRef,
                items = _ref.items,
                getItemOptions = _ref.getItemOptions,
                contentStyle = _ref.contentStyle,
                itemSize = _ref.itemSize;
              return [(0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementVNode)("ul", (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
                ref: function ref(el) {
                  return $options.listRef(el, contentRef);
                },
                id: $data.id + '_list',
                "class": [_ctx.cx('list'), styleClass],
                style: contentStyle,
                role: "listbox",
                "aria-label": $options.listAriaLabel
              }, _ctx.ptm('list')), [((0,vue__WEBPACK_IMPORTED_MODULE_14__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_14__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_14__.renderList)(items, function (option, i) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_14__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
                  key: $options.getOptionRenderKey(option, $options.getOptionIndex(i, getItemOptions))
                }, [$options.isOptionGroup(option) ? ((0,vue__WEBPACK_IMPORTED_MODULE_14__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementBlock)("li", (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
                  key: 0,
                  id: $data.id + '_' + $options.getOptionIndex(i, getItemOptions),
                  style: {
                    height: itemSize ? itemSize + 'px' : undefined
                  },
                  "class": _ctx.cx('itemGroup'),
                  role: "option"
                }, _ctx.ptm('itemGroup')), [(0,vue__WEBPACK_IMPORTED_MODULE_14__.renderSlot)(_ctx.$slots, "optiongroup", {
                  option: option.optionGroup,
                  index: $options.getOptionIndex(i, getItemOptions)
                }, function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementVNode)("span", (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
                    "class": _ctx.cx('itemGroupLabel')
                  }, _ctx.ptm('itemGroupLabel')), (0,vue__WEBPACK_IMPORTED_MODULE_14__.toDisplayString)($options.getOptionGroupLabel(option.optionGroup)), 17)];
                })], 16, _hoisted_6)) : (0,vue__WEBPACK_IMPORTED_MODULE_14__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_14__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementBlock)("li", (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
                  key: 1,
                  id: $data.id + '_' + $options.getOptionIndex(i, getItemOptions),
                  "class": _ctx.cx('item', {
                    option: option,
                    focusedOption: $options.getOptionIndex(i, getItemOptions)
                  }),
                  style: {
                    height: itemSize ? itemSize + 'px' : undefined
                  },
                  role: "option",
                  "aria-label": $options.getOptionLabel(option),
                  "aria-selected": $options.isSelected(option),
                  "aria-disabled": $options.isOptionDisabled(option),
                  "aria-setsize": $options.ariaSetSize,
                  "aria-posinset": $options.getAriaPosInset($options.getOptionIndex(i, getItemOptions)),
                  onClick: function onClick($event) {
                    return $options.onOptionSelect($event, option);
                  },
                  onMousemove: function onMousemove($event) {
                    return $options.onOptionMouseMove($event, $options.getOptionIndex(i, getItemOptions));
                  },
                  "data-p-highlight": $options.isSelected(option),
                  "data-p-focused": $data.focusedOptionIndex === $options.getOptionIndex(i, getItemOptions),
                  "data-p-disabled": $options.isOptionDisabled(option)
                }, $options.getPTItemOptions(option, getItemOptions, i, 'item')), [_ctx.checkmark ? ((0,vue__WEBPACK_IMPORTED_MODULE_14__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
                  key: 0
                }, [$options.isSelected(option) ? ((0,vue__WEBPACK_IMPORTED_MODULE_14__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createBlock)(_component_CheckIcon, (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
                  key: 0,
                  "class": _ctx.cx('checkIcon')
                }, _ctx.ptm('checkIcon')), null, 16, ["class"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_14__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createBlock)(_component_BlankIcon, (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
                  key: 1,
                  "class": _ctx.cx('blankIcon')
                }, _ctx.ptm('blankIcon')), null, 16, ["class"]))], 64)) : (0,vue__WEBPACK_IMPORTED_MODULE_14__.createCommentVNode)("", true), (0,vue__WEBPACK_IMPORTED_MODULE_14__.renderSlot)(_ctx.$slots, "option", {
                  option: option,
                  index: $options.getOptionIndex(i, getItemOptions)
                }, function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementVNode)("span", (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
                    "class": _ctx.cx('itemLabel')
                  }, _ctx.ptm('itemLabel')), (0,vue__WEBPACK_IMPORTED_MODULE_14__.toDisplayString)($options.getOptionLabel(option)), 17)];
                })], 16, _hoisted_7)), [[_directive_ripple]])], 64);
              }), 128)), $data.filterValue && (!items || items && items.length === 0) ? ((0,vue__WEBPACK_IMPORTED_MODULE_14__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementBlock)("li", (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
                key: 0,
                "class": _ctx.cx('emptyMessage'),
                role: "option"
              }, _ctx.ptm('emptyMessage'), {
                "data-p-hidden-accessible": true
              }), [(0,vue__WEBPACK_IMPORTED_MODULE_14__.renderSlot)(_ctx.$slots, "emptyfilter", {}, function () {
                return [(0,vue__WEBPACK_IMPORTED_MODULE_14__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_14__.toDisplayString)($options.emptyFilterMessageText), 1)];
              })], 16)) : !_ctx.options || _ctx.options && _ctx.options.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_14__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementBlock)("li", (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
                key: 1,
                "class": _ctx.cx('emptyMessage'),
                role: "option"
              }, _ctx.ptm('emptyMessage'), {
                "data-p-hidden-accessible": true
              }), [(0,vue__WEBPACK_IMPORTED_MODULE_14__.renderSlot)(_ctx.$slots, "empty", {}, function () {
                return [(0,vue__WEBPACK_IMPORTED_MODULE_14__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_14__.toDisplayString)($options.emptyMessageText), 1)];
              })], 16)) : (0,vue__WEBPACK_IMPORTED_MODULE_14__.createCommentVNode)("", true)], 16, _hoisted_5)];
            }),
            _: 2
          }, [_ctx.$slots.loader ? {
            name: "loader",
            fn: (0,vue__WEBPACK_IMPORTED_MODULE_14__.withCtx)(function (_ref2) {
              var options = _ref2.options;
              return [(0,vue__WEBPACK_IMPORTED_MODULE_14__.renderSlot)(_ctx.$slots, "loader", {
                options: options
              })];
            }),
            key: "0"
          } : undefined]), 1040, ["items", "style", "disabled", "pt"])], 16), (0,vue__WEBPACK_IMPORTED_MODULE_14__.renderSlot)(_ctx.$slots, "footer", {
            value: _ctx.modelValue,
            options: $options.visibleOptions
          }), !_ctx.options || _ctx.options && _ctx.options.length === 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_14__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementBlock)("span", (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
            key: 1,
            role: "status",
            "aria-live": "polite",
            "class": "p-hidden-accessible"
          }, _ctx.ptm('hiddenEmptyMessage'), {
            "data-p-hidden-accessible": true
          }), (0,vue__WEBPACK_IMPORTED_MODULE_14__.toDisplayString)($options.emptyMessageText), 17)) : (0,vue__WEBPACK_IMPORTED_MODULE_14__.createCommentVNode)("", true), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementVNode)("span", (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
            role: "status",
            "aria-live": "polite",
            "class": "p-hidden-accessible"
          }, _ctx.ptm('hiddenSelectedMessage'), {
            "data-p-hidden-accessible": true
          }), (0,vue__WEBPACK_IMPORTED_MODULE_14__.toDisplayString)($options.selectedMessageText), 17), (0,vue__WEBPACK_IMPORTED_MODULE_14__.createElementVNode)("span", (0,vue__WEBPACK_IMPORTED_MODULE_14__.mergeProps)({
            ref: "lastHiddenFocusableElementOnOverlay",
            role: "presentation",
            "aria-hidden": "true",
            "class": "p-hidden-accessible p-hidden-focusable",
            tabindex: 0,
            onFocus: _cache[13] || (_cache[13] = function () {
              return $options.onLastHiddenFocus && $options.onLastHiddenFocus.apply($options, arguments);
            })
          }, _ctx.ptm('hiddenLastFocusableEl'), {
            "data-p-hidden-accessible": true,
            "data-p-hidden-focusable": true
          }), null, 16)], 16)) : (0,vue__WEBPACK_IMPORTED_MODULE_14__.createCommentVNode)("", true)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo"])], 16, _hoisted_1);
}

script.render = render;




/***/ }),

/***/ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/dropdown/style/dropdownstyle.esm.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/dropdown/style/dropdownstyle.esm.js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DropdownStyle)
/* harmony export */ });
/* harmony import */ var primevue_base_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/base/style */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/base/style/basestyle.esm.js");


var classes = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props,
      state = _ref.state;
    return ['p-dropdown p-component p-inputwrapper', {
      'p-disabled': props.disabled,
      'p-invalid': props.invalid,
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled',
      'p-dropdown-clearable': props.showClear,
      'p-focus': state.focused,
      'p-inputwrapper-filled': instance.hasSelectedOption,
      'p-inputwrapper-focus': state.focused || state.overlayVisible,
      'p-overlay-open': state.overlayVisible
    }];
  },
  input: function input(_ref2) {
    var _instance$label;
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-dropdown-label p-inputtext', {
      'p-placeholder': !props.editable && instance.label === props.placeholder,
      'p-dropdown-label-empty': !props.editable && !instance.$slots['value'] && (instance.label === 'p-emptylabel' || ((_instance$label = instance.label) === null || _instance$label === void 0 ? void 0 : _instance$label.length) === 0)
    }];
  },
  clearIcon: 'p-dropdown-clear-icon',
  trigger: 'p-dropdown-trigger',
  loadingicon: 'p-dropdown-trigger-icon',
  dropdownIcon: 'p-dropdown-trigger-icon',
  panel: function panel(_ref3) {
    _ref3.props;
      var instance = _ref3.instance;
    return ['p-dropdown-panel p-component', {
      'p-ripple-disabled': instance.$primevue.config.ripple === false
    }];
  },
  header: 'p-dropdown-header',
  filterContainer: 'p-dropdown-filter-container',
  filterInput: function filterInput(_ref4) {
    var props = _ref4.props,
      instance = _ref4.instance;
    return ['p-dropdown-filter p-inputtext p-component', {
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled'
    }];
  },
  filterIcon: 'p-dropdown-filter-icon',
  wrapper: 'p-dropdown-items-wrapper',
  list: 'p-dropdown-items',
  itemGroup: 'p-dropdown-item-group',
  itemGroupLabel: 'p-dropdown-item-group-label',
  item: function item(_ref5) {
    var instance = _ref5.instance,
      props = _ref5.props,
      state = _ref5.state,
      option = _ref5.option,
      focusedOption = _ref5.focusedOption;
    return ['p-dropdown-item', {
      'p-highlight': instance.isSelected(option) && props.highlightOnSelect,
      'p-focus': state.focusedOptionIndex === focusedOption,
      'p-disabled': instance.isOptionDisabled(option)
    }];
  },
  itemLabel: 'p-dropdown-item-label',
  checkIcon: 'p-dropdown-check-icon',
  blankIcon: 'p-dropdown-blank-icon',
  emptyMessage: 'p-dropdown-empty-message'
};
var DropdownStyle = primevue_base_style__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  name: 'dropdown',
  classes: classes
});




/***/ }),

/***/ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/icons/blank/index.esm.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/icons/blank/index.esm.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ script)
/* harmony export */ });
/* harmony import */ var primevue_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/baseicon */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/baseicon/baseicon.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/.pnpm/vue@3.5.16_typescript@5.8.3/node_modules/vue/dist/vue.esm-bundler.js");



var script = {
  name: 'BlankIcon',
  "extends": primevue_baseicon__WEBPACK_IMPORTED_MODULE_0__["default"]
};

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("rect", {
  width: "1",
  height: "1",
  fill: "currentColor",
  "fill-opacity": "0"
}, null, -1);
var _hoisted_2 = [_hoisted_1];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)("svg", (0,vue__WEBPACK_IMPORTED_MODULE_1__.mergeProps)({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2, 16);
}

script.render = render;




/***/ }),

/***/ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/icons/chevrondown/index.esm.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/icons/chevrondown/index.esm.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ script)
/* harmony export */ });
/* harmony import */ var primevue_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/baseicon */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/baseicon/baseicon.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/.pnpm/vue@3.5.16_typescript@5.8.3/node_modules/vue/dist/vue.esm-bundler.js");



var script = {
  name: 'ChevronDownIcon',
  "extends": primevue_baseicon__WEBPACK_IMPORTED_MODULE_0__["default"]
};

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("path", {
  d: "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2 = [_hoisted_1];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)("svg", (0,vue__WEBPACK_IMPORTED_MODULE_1__.mergeProps)({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2, 16);
}

script.render = render;




/***/ }),

/***/ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/icons/search/index.esm.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/icons/search/index.esm.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ script)
/* harmony export */ });
/* harmony import */ var primevue_baseicon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/baseicon */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/baseicon/baseicon.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/.pnpm/vue@3.5.16_typescript@5.8.3/node_modules/vue/dist/vue.esm-bundler.js");



var script = {
  name: 'SearchIcon',
  "extends": primevue_baseicon__WEBPACK_IMPORTED_MODULE_0__["default"]
};

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z",
  fill: "currentColor"
}, null, -1);
var _hoisted_2 = [_hoisted_1];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)("svg", (0,vue__WEBPACK_IMPORTED_MODULE_1__.mergeProps)({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _hoisted_2, 16);
}

script.render = render;




/***/ }),

/***/ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/overlayeventbus/overlayeventbus.esm.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/overlayeventbus/overlayeventbus.esm.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OverlayEventBus)
/* harmony export */ });
/* harmony import */ var primevue_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/utils */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/utils/utils.esm.js");


var OverlayEventBus = (0,primevue_utils__WEBPACK_IMPORTED_MODULE_0__.EventBus)();




/***/ }),

/***/ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/portal/portal.esm.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/portal/portal.esm.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ script)
/* harmony export */ });
/* harmony import */ var primevue_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/utils */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/utils/utils.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/.pnpm/vue@3.5.16_typescript@5.8.3/node_modules/vue/dist/vue.esm-bundler.js");



var script = {
  name: 'Portal',
  props: {
    appendTo: {
      type: [String, Object],
      "default": 'body'
    },
    disabled: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      mounted: false
    };
  },
  mounted: function mounted() {
    this.mounted = primevue_utils__WEBPACK_IMPORTED_MODULE_0__.DomHandler.isClient();
  },
  computed: {
    inline: function inline() {
      return this.disabled || this.appendTo === 'self';
    }
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.inline ? (0,vue__WEBPACK_IMPORTED_MODULE_1__.renderSlot)(_ctx.$slots, "default", {
    key: 0
  }) : $data.mounted ? ((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_1__.Teleport, {
    key: 1,
    to: $props.appendTo
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.renderSlot)(_ctx.$slots, "default")], 8, ["to"])) : (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)("", true);
}

script.render = render;




/***/ }),

/***/ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/virtualscroller/style/virtualscrollerstyle.esm.js":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/virtualscroller/style/virtualscrollerstyle.esm.js ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VirtualScrollerStyle)
/* harmony export */ });
/* harmony import */ var primevue_base_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/base/style */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/base/style/basestyle.esm.js");


var css = "\n@layer primevue {\n    .p-virtualscroller {\n        position: relative;\n        overflow: auto;\n        contain: strict;\n        transform: translateZ(0);\n        will-change: scroll-position;\n        outline: 0 none;\n    }\n\n    .p-virtualscroller-content {\n        position: absolute;\n        top: 0;\n        left: 0;\n        /* contain: content; */\n        min-height: 100%;\n        min-width: 100%;\n        will-change: transform;\n    }\n\n    .p-virtualscroller-spacer {\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 1px;\n        width: 1px;\n        transform-origin: 0 0;\n        pointer-events: none;\n    }\n\n    .p-virtualscroller .p-virtualscroller-loader {\n        position: sticky;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-virtualscroller-loader.p-component-overlay {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .p-virtualscroller-loading-icon {\n        font-size: 2rem;\n    }\n\n    .p-virtualscroller-loading-icon.p-icon {\n        width: 2rem;\n        height: 2rem;\n    }\n\n    .p-virtualscroller-horizontal > .p-virtualscroller-content {\n        display: flex;\n    }\n\n    /* Inline */\n    .p-virtualscroller-inline .p-virtualscroller-content {\n        position: static;\n    }\n}\n";
var VirtualScrollerStyle = primevue_base_style__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
  name: 'virtualscroller',
  css: css
});




/***/ }),

/***/ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/virtualscroller/virtualscroller.esm.js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/virtualscroller/virtualscroller.esm.js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ script)
/* harmony export */ });
/* harmony import */ var primevue_icons_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/icons/spinner */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/icons/spinner/index.esm.js");
/* harmony import */ var primevue_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/utils */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/utils/utils.esm.js");
/* harmony import */ var primevue_basecomponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primevue/basecomponent */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/basecomponent/basecomponent.esm.js");
/* harmony import */ var primevue_virtualscroller_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primevue/virtualscroller/style */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/virtualscroller/style/virtualscrollerstyle.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/.pnpm/vue@3.5.16_typescript@5.8.3/node_modules/vue/dist/vue.esm-bundler.js");






var script$1 = {
  name: 'BaseVirtualScroller',
  "extends": primevue_basecomponent__WEBPACK_IMPORTED_MODULE_2__["default"],
  props: {
    id: {
      type: String,
      "default": null
    },
    style: null,
    "class": null,
    items: {
      type: Array,
      "default": null
    },
    itemSize: {
      type: [Number, Array],
      "default": 0
    },
    scrollHeight: null,
    scrollWidth: null,
    orientation: {
      type: String,
      "default": 'vertical'
    },
    numToleratedItems: {
      type: Number,
      "default": null
    },
    delay: {
      type: Number,
      "default": 0
    },
    resizeDelay: {
      type: Number,
      "default": 10
    },
    lazy: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    loaderDisabled: {
      type: Boolean,
      "default": false
    },
    columns: {
      type: Array,
      "default": null
    },
    loading: {
      type: Boolean,
      "default": false
    },
    showSpacer: {
      type: Boolean,
      "default": true
    },
    showLoader: {
      type: Boolean,
      "default": false
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    inline: {
      type: Boolean,
      "default": false
    },
    step: {
      type: Number,
      "default": 0
    },
    appendOnly: {
      type: Boolean,
      "default": false
    },
    autoSize: {
      type: Boolean,
      "default": false
    }
  },
  style: primevue_virtualscroller_style__WEBPACK_IMPORTED_MODULE_3__["default"],
  provide: function provide() {
    return {
      $parentInstance: this
    };
  },
  beforeMount: function beforeMount() {
    var _this$$primevueConfig;
    primevue_virtualscroller_style__WEBPACK_IMPORTED_MODULE_3__["default"].loadStyle({
      nonce: (_this$$primevueConfig = this.$primevueConfig) === null || _this$$primevueConfig === void 0 || (_this$$primevueConfig = _this$$primevueConfig.csp) === null || _this$$primevueConfig === void 0 ? void 0 : _this$$primevueConfig.nonce
    });
  }
};

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var script = {
  name: 'VirtualScroller',
  "extends": script$1,
  inheritAttrs: false,
  emits: ['update:numToleratedItems', 'scroll', 'scroll-index-change', 'lazy-load'],
  data: function data() {
    var both = this.isBoth();
    return {
      first: both ? {
        rows: 0,
        cols: 0
      } : 0,
      last: both ? {
        rows: 0,
        cols: 0
      } : 0,
      page: both ? {
        rows: 0,
        cols: 0
      } : 0,
      numItemsInViewport: both ? {
        rows: 0,
        cols: 0
      } : 0,
      lastScrollPos: both ? {
        top: 0,
        left: 0
      } : 0,
      d_numToleratedItems: this.numToleratedItems,
      d_loading: this.loading,
      loaderArr: [],
      spacerStyle: {},
      contentStyle: {}
    };
  },
  element: null,
  content: null,
  lastScrollPos: null,
  scrollTimeout: null,
  resizeTimeout: null,
  defaultWidth: 0,
  defaultHeight: 0,
  defaultContentWidth: 0,
  defaultContentHeight: 0,
  isRangeChanged: false,
  lazyLoadState: {},
  resizeListener: null,
  initialized: false,
  watch: {
    numToleratedItems: function numToleratedItems(newValue) {
      this.d_numToleratedItems = newValue;
    },
    loading: function loading(newValue, oldValue) {
      if (this.lazy && newValue !== oldValue && newValue !== this.d_loading) {
        this.d_loading = newValue;
      }
    },
    items: function items(newValue, oldValue) {
      if (!oldValue || oldValue.length !== (newValue || []).length) {
        this.init();
        this.calculateAutoSize();
      }
    },
    itemSize: function itemSize() {
      this.init();
      this.calculateAutoSize();
    },
    orientation: function orientation() {
      this.lastScrollPos = this.isBoth() ? {
        top: 0,
        left: 0
      } : 0;
    },
    scrollHeight: function scrollHeight() {
      this.init();
      this.calculateAutoSize();
    },
    scrollWidth: function scrollWidth() {
      this.init();
      this.calculateAutoSize();
    }
  },
  mounted: function mounted() {
    this.viewInit();
    this.lastScrollPos = this.isBoth() ? {
      top: 0,
      left: 0
    } : 0;
    this.lazyLoadState = this.lazyLoadState || {};
  },
  updated: function updated() {
    !this.initialized && this.viewInit();
  },
  unmounted: function unmounted() {
    this.unbindResizeListener();
    this.initialized = false;
  },
  methods: {
    viewInit: function viewInit() {
      if (primevue_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.isVisible(this.element)) {
        this.setContentEl(this.content);
        this.init();
        this.calculateAutoSize();
        this.bindResizeListener();
        this.defaultWidth = primevue_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getWidth(this.element);
        this.defaultHeight = primevue_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getHeight(this.element);
        this.defaultContentWidth = primevue_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getWidth(this.content);
        this.defaultContentHeight = primevue_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getHeight(this.content);
        this.initialized = true;
      }
    },
    init: function init() {
      if (!this.disabled) {
        this.setSize();
        this.calculateOptions();
        this.setSpacerSize();
      }
    },
    isVertical: function isVertical() {
      return this.orientation === 'vertical';
    },
    isHorizontal: function isHorizontal() {
      return this.orientation === 'horizontal';
    },
    isBoth: function isBoth() {
      return this.orientation === 'both';
    },
    scrollTo: function scrollTo(options) {
      //this.lastScrollPos = this.both ? { top: 0, left: 0 } : 0;
      this.element && this.element.scrollTo(options);
    },
    scrollToIndex: function scrollToIndex(index) {
      var _this = this;
      var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
      var both = this.isBoth();
      var horizontal = this.isHorizontal();
      var valid = both ? index.every(function (i) {
        return i > -1;
      }) : index > -1;
      if (valid) {
        var first = this.first;
        var _this$element = this.element,
          _this$element$scrollT = _this$element.scrollTop,
          scrollTop = _this$element$scrollT === void 0 ? 0 : _this$element$scrollT,
          _this$element$scrollL = _this$element.scrollLeft,
          scrollLeft = _this$element$scrollL === void 0 ? 0 : _this$element$scrollL;
        var _this$calculateNumIte = this.calculateNumItems(),
          numToleratedItems = _this$calculateNumIte.numToleratedItems;
        var contentPos = this.getContentPosition();
        var itemSize = this.itemSize;
        var calculateFirst = function calculateFirst() {
          var _index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var _numT = arguments.length > 1 ? arguments[1] : undefined;
          return _index <= _numT ? 0 : _index;
        };
        var calculateCoord = function calculateCoord(_first, _size, _cpos) {
          return _first * _size + _cpos;
        };
        var scrollTo = function scrollTo() {
          var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          return _this.scrollTo({
            left: left,
            top: top,
            behavior: behavior
          });
        };
        var newFirst = both ? {
          rows: 0,
          cols: 0
        } : 0;
        var isRangeChanged = false,
          isScrollChanged = false;
        if (both) {
          newFirst = {
            rows: calculateFirst(index[0], numToleratedItems[0]),
            cols: calculateFirst(index[1], numToleratedItems[1])
          };
          scrollTo(calculateCoord(newFirst.cols, itemSize[1], contentPos.left), calculateCoord(newFirst.rows, itemSize[0], contentPos.top));
          isScrollChanged = this.lastScrollPos.top !== scrollTop || this.lastScrollPos.left !== scrollLeft;
          isRangeChanged = newFirst.rows !== first.rows || newFirst.cols !== first.cols;
        } else {
          newFirst = calculateFirst(index, numToleratedItems);
          horizontal ? scrollTo(calculateCoord(newFirst, itemSize, contentPos.left), scrollTop) : scrollTo(scrollLeft, calculateCoord(newFirst, itemSize, contentPos.top));
          isScrollChanged = this.lastScrollPos !== (horizontal ? scrollLeft : scrollTop);
          isRangeChanged = newFirst !== first;
        }
        this.isRangeChanged = isRangeChanged;
        isScrollChanged && (this.first = newFirst);
      }
    },
    scrollInView: function scrollInView(index, to) {
      var _this2 = this;
      var behavior = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'auto';
      if (to) {
        var both = this.isBoth();
        var horizontal = this.isHorizontal();
        var valid = both ? index.every(function (i) {
          return i > -1;
        }) : index > -1;
        if (valid) {
          var _this$getRenderedRang = this.getRenderedRange(),
            first = _this$getRenderedRang.first,
            viewport = _this$getRenderedRang.viewport;
          var scrollTo = function scrollTo() {
            var left = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return _this2.scrollTo({
              left: left,
              top: top,
              behavior: behavior
            });
          };
          var isToStart = to === 'to-start';
          var isToEnd = to === 'to-end';
          if (isToStart) {
            if (both) {
              if (viewport.first.rows - first.rows > index[0]) {
                scrollTo(viewport.first.cols * this.itemSize[1], (viewport.first.rows - 1) * this.itemSize[0]);
              } else if (viewport.first.cols - first.cols > index[1]) {
                scrollTo((viewport.first.cols - 1) * this.itemSize[1], viewport.first.rows * this.itemSize[0]);
              }
            } else {
              if (viewport.first - first > index) {
                var pos = (viewport.first - 1) * this.itemSize;
                horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
              }
            }
          } else if (isToEnd) {
            if (both) {
              if (viewport.last.rows - first.rows <= index[0] + 1) {
                scrollTo(viewport.first.cols * this.itemSize[1], (viewport.first.rows + 1) * this.itemSize[0]);
              } else if (viewport.last.cols - first.cols <= index[1] + 1) {
                scrollTo((viewport.first.cols + 1) * this.itemSize[1], viewport.first.rows * this.itemSize[0]);
              }
            } else {
              if (viewport.last - first <= index + 1) {
                var _pos2 = (viewport.first + 1) * this.itemSize;
                horizontal ? scrollTo(_pos2, 0) : scrollTo(0, _pos2);
              }
            }
          }
        }
      } else {
        this.scrollToIndex(index, behavior);
      }
    },
    getRenderedRange: function getRenderedRange() {
      var calculateFirstInViewport = function calculateFirstInViewport(_pos, _size) {
        return Math.floor(_pos / (_size || _pos));
      };
      var firstInViewport = this.first;
      var lastInViewport = 0;
      if (this.element) {
        var both = this.isBoth();
        var horizontal = this.isHorizontal();
        var _this$element2 = this.element,
          scrollTop = _this$element2.scrollTop,
          scrollLeft = _this$element2.scrollLeft;
        if (both) {
          firstInViewport = {
            rows: calculateFirstInViewport(scrollTop, this.itemSize[0]),
            cols: calculateFirstInViewport(scrollLeft, this.itemSize[1])
          };
          lastInViewport = {
            rows: firstInViewport.rows + this.numItemsInViewport.rows,
            cols: firstInViewport.cols + this.numItemsInViewport.cols
          };
        } else {
          var scrollPos = horizontal ? scrollLeft : scrollTop;
          firstInViewport = calculateFirstInViewport(scrollPos, this.itemSize);
          lastInViewport = firstInViewport + this.numItemsInViewport;
        }
      }
      return {
        first: this.first,
        last: this.last,
        viewport: {
          first: firstInViewport,
          last: lastInViewport
        }
      };
    },
    calculateNumItems: function calculateNumItems() {
      var both = this.isBoth();
      var horizontal = this.isHorizontal();
      var itemSize = this.itemSize;
      var contentPos = this.getContentPosition();
      var contentWidth = this.element ? this.element.offsetWidth - contentPos.left : 0;
      var contentHeight = this.element ? this.element.offsetHeight - contentPos.top : 0;
      var calculateNumItemsInViewport = function calculateNumItemsInViewport(_contentSize, _itemSize) {
        return Math.ceil(_contentSize / (_itemSize || _contentSize));
      };
      var calculateNumToleratedItems = function calculateNumToleratedItems(_numItems) {
        return Math.ceil(_numItems / 2);
      };
      var numItemsInViewport = both ? {
        rows: calculateNumItemsInViewport(contentHeight, itemSize[0]),
        cols: calculateNumItemsInViewport(contentWidth, itemSize[1])
      } : calculateNumItemsInViewport(horizontal ? contentWidth : contentHeight, itemSize);
      var numToleratedItems = this.d_numToleratedItems || (both ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport));
      return {
        numItemsInViewport: numItemsInViewport,
        numToleratedItems: numToleratedItems
      };
    },
    calculateOptions: function calculateOptions() {
      var _this3 = this;
      var both = this.isBoth();
      var first = this.first;
      var _this$calculateNumIte2 = this.calculateNumItems(),
        numItemsInViewport = _this$calculateNumIte2.numItemsInViewport,
        numToleratedItems = _this$calculateNumIte2.numToleratedItems;
      var calculateLast = function calculateLast(_first, _num, _numT) {
        var _isCols = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        return _this3.getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
      };
      var last = both ? {
        rows: calculateLast(first.rows, numItemsInViewport.rows, numToleratedItems[0]),
        cols: calculateLast(first.cols, numItemsInViewport.cols, numToleratedItems[1], true)
      } : calculateLast(first, numItemsInViewport, numToleratedItems);
      this.last = last;
      this.numItemsInViewport = numItemsInViewport;
      this.d_numToleratedItems = numToleratedItems;
      this.$emit('update:numToleratedItems', this.d_numToleratedItems);
      if (this.showLoader) {
        this.loaderArr = both ? Array.from({
          length: numItemsInViewport.rows
        }).map(function () {
          return Array.from({
            length: numItemsInViewport.cols
          });
        }) : Array.from({
          length: numItemsInViewport
        });
      }
      if (this.lazy) {
        Promise.resolve().then(function () {
          var _this3$items;
          _this3.lazyLoadState = {
            first: _this3.step ? both ? {
              rows: 0,
              cols: first.cols
            } : 0 : first,
            last: Math.min(_this3.step ? _this3.step : last, ((_this3$items = _this3.items) === null || _this3$items === void 0 ? void 0 : _this3$items.length) || 0)
          };
          _this3.$emit('lazy-load', _this3.lazyLoadState);
        });
      }
    },
    calculateAutoSize: function calculateAutoSize() {
      var _this4 = this;
      if (this.autoSize && !this.d_loading) {
        Promise.resolve().then(function () {
          if (_this4.content) {
            var both = _this4.isBoth();
            var horizontal = _this4.isHorizontal();
            var vertical = _this4.isVertical();
            _this4.content.style.minHeight = _this4.content.style.minWidth = 'auto';
            _this4.content.style.position = 'relative';
            _this4.element.style.contain = 'none';

            /*const [contentWidth, contentHeight] = [DomHandler.getWidth(this.content), DomHandler.getHeight(this.content)];
             contentWidth !== this.defaultContentWidth && (this.element.style.width = '');
            contentHeight !== this.defaultContentHeight && (this.element.style.height = '');*/

            var _ref = [primevue_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getWidth(_this4.element), primevue_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getHeight(_this4.element)],
              width = _ref[0],
              height = _ref[1];
            (both || horizontal) && (_this4.element.style.width = width < _this4.defaultWidth ? width + 'px' : _this4.scrollWidth || _this4.defaultWidth + 'px');
            (both || vertical) && (_this4.element.style.height = height < _this4.defaultHeight ? height + 'px' : _this4.scrollHeight || _this4.defaultHeight + 'px');
            _this4.content.style.minHeight = _this4.content.style.minWidth = '';
            _this4.content.style.position = '';
            _this4.element.style.contain = '';
          }
        });
      }
    },
    getLast: function getLast() {
      var _ref2, _this$items;
      var last = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var isCols = arguments.length > 1 ? arguments[1] : undefined;
      return this.items ? Math.min(isCols ? ((_ref2 = this.columns || this.items[0]) === null || _ref2 === void 0 ? void 0 : _ref2.length) || 0 : ((_this$items = this.items) === null || _this$items === void 0 ? void 0 : _this$items.length) || 0, last) : 0;
    },
    getContentPosition: function getContentPosition() {
      if (this.content) {
        var style = getComputedStyle(this.content);
        var left = parseFloat(style.paddingLeft) + Math.max(parseFloat(style.left) || 0, 0);
        var right = parseFloat(style.paddingRight) + Math.max(parseFloat(style.right) || 0, 0);
        var top = parseFloat(style.paddingTop) + Math.max(parseFloat(style.top) || 0, 0);
        var bottom = parseFloat(style.paddingBottom) + Math.max(parseFloat(style.bottom) || 0, 0);
        return {
          left: left,
          right: right,
          top: top,
          bottom: bottom,
          x: left + right,
          y: top + bottom
        };
      }
      return {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        x: 0,
        y: 0
      };
    },
    setSize: function setSize() {
      var _this5 = this;
      if (this.element) {
        var both = this.isBoth();
        var horizontal = this.isHorizontal();
        var parentElement = this.element.parentElement;
        var width = this.scrollWidth || "".concat(this.element.offsetWidth || parentElement.offsetWidth, "px");
        var height = this.scrollHeight || "".concat(this.element.offsetHeight || parentElement.offsetHeight, "px");
        var setProp = function setProp(_name, _value) {
          return _this5.element.style[_name] = _value;
        };
        if (both || horizontal) {
          setProp('height', height);
          setProp('width', width);
        } else {
          setProp('height', height);
        }
      }
    },
    setSpacerSize: function setSpacerSize() {
      var _this6 = this;
      var items = this.items;
      if (items) {
        var both = this.isBoth();
        var horizontal = this.isHorizontal();
        var contentPos = this.getContentPosition();
        var setProp = function setProp(_name, _value, _size) {
          var _cpos = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
          return _this6.spacerStyle = _objectSpread(_objectSpread({}, _this6.spacerStyle), _defineProperty({}, "".concat(_name), (_value || []).length * _size + _cpos + 'px'));
        };
        if (both) {
          setProp('height', items, this.itemSize[0], contentPos.y);
          setProp('width', this.columns || items[1], this.itemSize[1], contentPos.x);
        } else {
          horizontal ? setProp('width', this.columns || items, this.itemSize, contentPos.x) : setProp('height', items, this.itemSize, contentPos.y);
        }
      }
    },
    setContentPosition: function setContentPosition(pos) {
      var _this7 = this;
      if (this.content && !this.appendOnly) {
        var both = this.isBoth();
        var horizontal = this.isHorizontal();
        var first = pos ? pos.first : this.first;
        var calculateTranslateVal = function calculateTranslateVal(_first, _size) {
          return _first * _size;
        };
        var setTransform = function setTransform() {
          var _x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var _y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          return _this7.contentStyle = _objectSpread(_objectSpread({}, _this7.contentStyle), {
            transform: "translate3d(".concat(_x, "px, ").concat(_y, "px, 0)")
          });
        };
        if (both) {
          setTransform(calculateTranslateVal(first.cols, this.itemSize[1]), calculateTranslateVal(first.rows, this.itemSize[0]));
        } else {
          var translateVal = calculateTranslateVal(first, this.itemSize);
          horizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
        }
      }
    },
    onScrollPositionChange: function onScrollPositionChange(event) {
      var _this8 = this;
      var target = event.target;
      var both = this.isBoth();
      var horizontal = this.isHorizontal();
      var contentPos = this.getContentPosition();
      var calculateScrollPos = function calculateScrollPos(_pos, _cpos) {
        return _pos ? _pos > _cpos ? _pos - _cpos : _pos : 0;
      };
      var calculateCurrentIndex = function calculateCurrentIndex(_pos, _size) {
        return Math.floor(_pos / (_size || _pos));
      };
      var calculateTriggerIndex = function calculateTriggerIndex(_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) {
        return _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
      };
      var calculateFirst = function calculateFirst(_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) {
        if (_currentIndex <= _numT) return 0;else return Math.max(0, _isScrollDownOrRight ? _currentIndex < _triggerIndex ? _first : _currentIndex - _numT : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
      };
      var calculateLast = function calculateLast(_currentIndex, _first, _last, _num, _numT, _isCols) {
        var lastValue = _first + _num + 2 * _numT;
        if (_currentIndex >= _numT) {
          lastValue += _numT + 1;
        }
        return _this8.getLast(lastValue, _isCols);
      };
      var scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
      var scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);
      var newFirst = both ? {
        rows: 0,
        cols: 0
      } : 0;
      var newLast = this.last;
      var isRangeChanged = false;
      var newScrollPos = this.lastScrollPos;
      if (both) {
        var isScrollDown = this.lastScrollPos.top <= scrollTop;
        var isScrollRight = this.lastScrollPos.left <= scrollLeft;
        if (!this.appendOnly || this.appendOnly && (isScrollDown || isScrollRight)) {
          var currentIndex = {
            rows: calculateCurrentIndex(scrollTop, this.itemSize[0]),
            cols: calculateCurrentIndex(scrollLeft, this.itemSize[1])
          };
          var triggerIndex = {
            rows: calculateTriggerIndex(currentIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
            cols: calculateTriggerIndex(currentIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
          };
          newFirst = {
            rows: calculateFirst(currentIndex.rows, triggerIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
            cols: calculateFirst(currentIndex.cols, triggerIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
          };
          newLast = {
            rows: calculateLast(currentIndex.rows, newFirst.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]),
            cols: calculateLast(currentIndex.cols, newFirst.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], true)
          };
          isRangeChanged = newFirst.rows !== this.first.rows || newLast.rows !== this.last.rows || newFirst.cols !== this.first.cols || newLast.cols !== this.last.cols || this.isRangeChanged;
          newScrollPos = {
            top: scrollTop,
            left: scrollLeft
          };
        }
      } else {
        var scrollPos = horizontal ? scrollLeft : scrollTop;
        var isScrollDownOrRight = this.lastScrollPos <= scrollPos;
        if (!this.appendOnly || this.appendOnly && isScrollDownOrRight) {
          var _currentIndex2 = calculateCurrentIndex(scrollPos, this.itemSize);
          var _triggerIndex2 = calculateTriggerIndex(_currentIndex2, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
          newFirst = calculateFirst(_currentIndex2, _triggerIndex2, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
          newLast = calculateLast(_currentIndex2, newFirst, this.last, this.numItemsInViewport, this.d_numToleratedItems);
          isRangeChanged = newFirst !== this.first || newLast !== this.last || this.isRangeChanged;
          newScrollPos = scrollPos;
        }
      }
      return {
        first: newFirst,
        last: newLast,
        isRangeChanged: isRangeChanged,
        scrollPos: newScrollPos
      };
    },
    onScrollChange: function onScrollChange(event) {
      var _this$onScrollPositio = this.onScrollPositionChange(event),
        first = _this$onScrollPositio.first,
        last = _this$onScrollPositio.last,
        isRangeChanged = _this$onScrollPositio.isRangeChanged,
        scrollPos = _this$onScrollPositio.scrollPos;
      if (isRangeChanged) {
        var newState = {
          first: first,
          last: last
        };
        this.setContentPosition(newState);
        this.first = first;
        this.last = last;
        this.lastScrollPos = scrollPos;
        this.$emit('scroll-index-change', newState);
        if (this.lazy && this.isPageChanged(first)) {
          var _this$items2, _this$items3;
          var lazyLoadState = {
            first: this.step ? Math.min(this.getPageByFirst(first) * this.step, (((_this$items2 = this.items) === null || _this$items2 === void 0 ? void 0 : _this$items2.length) || 0) - this.step) : first,
            last: Math.min(this.step ? (this.getPageByFirst(first) + 1) * this.step : last, ((_this$items3 = this.items) === null || _this$items3 === void 0 ? void 0 : _this$items3.length) || 0)
          };
          var isLazyStateChanged = this.lazyLoadState.first !== lazyLoadState.first || this.lazyLoadState.last !== lazyLoadState.last;
          isLazyStateChanged && this.$emit('lazy-load', lazyLoadState);
          this.lazyLoadState = lazyLoadState;
        }
      }
    },
    onScroll: function onScroll(event) {
      var _this9 = this;
      this.$emit('scroll', event);
      if (this.delay) {
        if (this.scrollTimeout) {
          clearTimeout(this.scrollTimeout);
        }
        if (this.isPageChanged()) {
          if (!this.d_loading && this.showLoader) {
            var _this$onScrollPositio2 = this.onScrollPositionChange(event),
              isRangeChanged = _this$onScrollPositio2.isRangeChanged;
            var changed = isRangeChanged || (this.step ? this.isPageChanged() : false);
            changed && (this.d_loading = true);
          }
          this.scrollTimeout = setTimeout(function () {
            _this9.onScrollChange(event);
            if (_this9.d_loading && _this9.showLoader && (!_this9.lazy || _this9.loading === undefined)) {
              _this9.d_loading = false;
              _this9.page = _this9.getPageByFirst();
            }
          }, this.delay);
        }
      } else {
        this.onScrollChange(event);
      }
    },
    onResize: function onResize() {
      var _this10 = this;
      if (this.resizeTimeout) {
        clearTimeout(this.resizeTimeout);
      }
      this.resizeTimeout = setTimeout(function () {
        if (primevue_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.isVisible(_this10.element)) {
          var both = _this10.isBoth();
          var vertical = _this10.isVertical();
          var horizontal = _this10.isHorizontal();
          var _ref3 = [primevue_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getWidth(_this10.element), primevue_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getHeight(_this10.element)],
            width = _ref3[0],
            height = _ref3[1];
          var isDiffWidth = width !== _this10.defaultWidth,
            isDiffHeight = height !== _this10.defaultHeight;
          var reinit = both ? isDiffWidth || isDiffHeight : horizontal ? isDiffWidth : vertical ? isDiffHeight : false;
          if (reinit) {
            _this10.d_numToleratedItems = _this10.numToleratedItems;
            _this10.defaultWidth = width;
            _this10.defaultHeight = height;
            _this10.defaultContentWidth = primevue_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getWidth(_this10.content);
            _this10.defaultContentHeight = primevue_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.getHeight(_this10.content);
            _this10.init();
          }
        }
      }, this.resizeDelay);
    },
    bindResizeListener: function bindResizeListener() {
      if (!this.resizeListener) {
        this.resizeListener = this.onResize.bind(this);
        window.addEventListener('resize', this.resizeListener);
        window.addEventListener('orientationchange', this.resizeListener);
      }
    },
    unbindResizeListener: function unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener('resize', this.resizeListener);
        window.removeEventListener('orientationchange', this.resizeListener);
        this.resizeListener = null;
      }
    },
    getOptions: function getOptions(renderedIndex) {
      var count = (this.items || []).length;
      var index = this.isBoth() ? this.first.rows + renderedIndex : this.first + renderedIndex;
      return {
        index: index,
        count: count,
        first: index === 0,
        last: index === count - 1,
        even: index % 2 === 0,
        odd: index % 2 !== 0
      };
    },
    getLoaderOptions: function getLoaderOptions(index, extOptions) {
      var count = this.loaderArr.length;
      return _objectSpread({
        index: index,
        count: count,
        first: index === 0,
        last: index === count - 1,
        even: index % 2 === 0,
        odd: index % 2 !== 0
      }, extOptions);
    },
    getPageByFirst: function getPageByFirst(first) {
      return Math.floor(((first !== null && first !== void 0 ? first : this.first) + this.d_numToleratedItems * 4) / (this.step || 1));
    },
    isPageChanged: function isPageChanged(first) {
      return this.step ? this.page !== this.getPageByFirst(first !== null && first !== void 0 ? first : this.first) : true;
    },
    setContentEl: function setContentEl(el) {
      this.content = el || this.content || primevue_utils__WEBPACK_IMPORTED_MODULE_1__.DomHandler.findSingle(this.element, '[data-pc-section="content"]');
    },
    elementRef: function elementRef(el) {
      this.element = el;
    },
    contentRef: function contentRef(el) {
      this.content = el;
    }
  },
  computed: {
    containerClass: function containerClass() {
      return ['p-virtualscroller', this["class"], {
        'p-virtualscroller-inline': this.inline,
        'p-virtualscroller-both p-both-scroll': this.isBoth(),
        'p-virtualscroller-horizontal p-horizontal-scroll': this.isHorizontal()
      }];
    },
    contentClass: function contentClass() {
      return ['p-virtualscroller-content', {
        'p-virtualscroller-loading': this.d_loading
      }];
    },
    loaderClass: function loaderClass() {
      return ['p-virtualscroller-loader', {
        'p-component-overlay': !this.$slots.loader
      }];
    },
    loadedItems: function loadedItems() {
      var _this11 = this;
      if (this.items && !this.d_loading) {
        if (this.isBoth()) return this.items.slice(this.appendOnly ? 0 : this.first.rows, this.last.rows).map(function (item) {
          return _this11.columns ? item : item.slice(_this11.appendOnly ? 0 : _this11.first.cols, _this11.last.cols);
        });else if (this.isHorizontal() && this.columns) return this.items;else return this.items.slice(this.appendOnly ? 0 : this.first, this.last);
      }
      return [];
    },
    loadedRows: function loadedRows() {
      return this.d_loading ? this.loaderDisabled ? this.loaderArr : [] : this.loadedItems;
    },
    loadedColumns: function loadedColumns() {
      if (this.columns) {
        var both = this.isBoth();
        var horizontal = this.isHorizontal();
        if (both || horizontal) {
          return this.d_loading && this.loaderDisabled ? both ? this.loaderArr[0] : this.loaderArr : this.columns.slice(both ? this.first.cols : this.first, both ? this.last.cols : this.last);
        }
      }
      return this.columns;
    }
  },
  components: {
    SpinnerIcon: primevue_icons_spinner__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
};

var _hoisted_1 = ["tabindex"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpinnerIcon = (0,vue__WEBPACK_IMPORTED_MODULE_4__.resolveComponent)("SpinnerIcon");
  return !_ctx.disabled ? ((0,vue__WEBPACK_IMPORTED_MODULE_4__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_4__.createElementBlock)("div", (0,vue__WEBPACK_IMPORTED_MODULE_4__.mergeProps)({
    key: 0,
    ref: $options.elementRef,
    "class": $options.containerClass,
    tabindex: _ctx.tabindex,
    style: _ctx.style,
    onScroll: _cache[0] || (_cache[0] = function () {
      return $options.onScroll && $options.onScroll.apply($options, arguments);
    })
  }, _ctx.ptmi('root')), [(0,vue__WEBPACK_IMPORTED_MODULE_4__.renderSlot)(_ctx.$slots, "content", {
    styleClass: $options.contentClass,
    items: $options.loadedItems,
    getItemOptions: $options.getOptions,
    loading: $data.d_loading,
    getLoaderOptions: $options.getLoaderOptions,
    itemSize: _ctx.itemSize,
    rows: $options.loadedRows,
    columns: $options.loadedColumns,
    contentRef: $options.contentRef,
    spacerStyle: $data.spacerStyle,
    contentStyle: $data.contentStyle,
    vertical: $options.isVertical(),
    horizontal: $options.isHorizontal(),
    both: $options.isBoth()
  }, function () {
    return [(0,vue__WEBPACK_IMPORTED_MODULE_4__.createElementVNode)("div", (0,vue__WEBPACK_IMPORTED_MODULE_4__.mergeProps)({
      ref: $options.contentRef,
      "class": $options.contentClass,
      style: $data.contentStyle
    }, _ctx.ptm('content')), [((0,vue__WEBPACK_IMPORTED_MODULE_4__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_4__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_4__.renderList)($options.loadedItems, function (item, index) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_4__.renderSlot)(_ctx.$slots, "item", {
        key: index,
        item: item,
        options: $options.getOptions(index)
      });
    }), 128))], 16)];
  }), _ctx.showSpacer ? ((0,vue__WEBPACK_IMPORTED_MODULE_4__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_4__.createElementBlock)("div", (0,vue__WEBPACK_IMPORTED_MODULE_4__.mergeProps)({
    key: 0,
    "class": "p-virtualscroller-spacer",
    style: $data.spacerStyle
  }, _ctx.ptm('spacer')), null, 16)) : (0,vue__WEBPACK_IMPORTED_MODULE_4__.createCommentVNode)("", true), !_ctx.loaderDisabled && _ctx.showLoader && $data.d_loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_4__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_4__.createElementBlock)("div", (0,vue__WEBPACK_IMPORTED_MODULE_4__.mergeProps)({
    key: 1,
    "class": $options.loaderClass
  }, _ctx.ptm('loader')), [_ctx.$slots && _ctx.$slots.loader ? ((0,vue__WEBPACK_IMPORTED_MODULE_4__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_4__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_4__.renderList)($data.loaderArr, function (_, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_4__.renderSlot)(_ctx.$slots, "loader", {
      key: index,
      options: $options.getLoaderOptions(index, $options.isBoth() && {
        numCols: _ctx.d_numItemsInViewport.cols
      })
    });
  }), 128)) : (0,vue__WEBPACK_IMPORTED_MODULE_4__.createCommentVNode)("", true), (0,vue__WEBPACK_IMPORTED_MODULE_4__.renderSlot)(_ctx.$slots, "loadingicon", {}, function () {
    return [(0,vue__WEBPACK_IMPORTED_MODULE_4__.createVNode)(_component_SpinnerIcon, (0,vue__WEBPACK_IMPORTED_MODULE_4__.mergeProps)({
      spin: "",
      "class": "p-virtualscroller-loading-icon"
    }, _ctx.ptm('loadingIcon')), null, 16)];
  })], 16)) : (0,vue__WEBPACK_IMPORTED_MODULE_4__.createCommentVNode)("", true)], 16, _hoisted_1)) : ((0,vue__WEBPACK_IMPORTED_MODULE_4__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_4__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    key: 1
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_4__.renderSlot)(_ctx.$slots, "default"), (0,vue__WEBPACK_IMPORTED_MODULE_4__.renderSlot)(_ctx.$slots, "content", {
    items: _ctx.items,
    rows: _ctx.items,
    columns: $options.loadedColumns
  })], 64));
}

script.render = render;




/***/ }),

/***/ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/PvSelect.vue?vue&type=style&index=0&id=1449241c&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/PvSelect.vue?vue&type=style&index=0&id=1449241c&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PvSelect_vue_vue_type_style_index_0_id_1449241c_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PvSelect.vue?vue&type=style&index=0&id=1449241c&lang=scss */ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/PvSelect.vue?vue&type=style&index=0&id=1449241c&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PvSelect_vue_vue_type_style_index_0_id_1449241c_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PvSelect_vue_vue_type_style_index_0_id_1449241c_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/vue/trash/Dwarf/inputs/PvSelect.vue":
/*!*************************************************!*\
  !*** ./src/vue/trash/Dwarf/inputs/PvSelect.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PvSelect_vue_vue_type_template_id_1449241c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PvSelect.vue?vue&type=template&id=1449241c */ "./src/vue/trash/Dwarf/inputs/PvSelect.vue?vue&type=template&id=1449241c");
/* harmony import */ var _PvSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PvSelect.vue?vue&type=script&lang=js */ "./src/vue/trash/Dwarf/inputs/PvSelect.vue?vue&type=script&lang=js");
/* harmony import */ var _PvSelect_vue_vue_type_style_index_0_id_1449241c_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PvSelect.vue?vue&type=style&index=0&id=1449241c&lang=scss */ "./src/vue/trash/Dwarf/inputs/PvSelect.vue?vue&type=style&index=0&id=1449241c&lang=scss");
/* harmony import */ var _app_plugins_zen_threes_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_app_plugins_zen_threes_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_PvSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PvSelect_vue_vue_type_template_id_1449241c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/vue/trash/Dwarf/inputs/PvSelect.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/vue/trash/Dwarf/inputs/PvSelect.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./src/vue/trash/Dwarf/inputs/PvSelect.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PvSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PvSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PvSelect.vue?vue&type=script&lang=js */ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/PvSelect.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/vue/trash/Dwarf/inputs/PvSelect.vue?vue&type=style&index=0&id=1449241c&lang=scss":
/*!**********************************************************************************************!*\
  !*** ./src/vue/trash/Dwarf/inputs/PvSelect.vue?vue&type=style&index=0&id=1449241c&lang=scss ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_cjs_js_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PvSelect_vue_vue_type_style_index_0_id_1449241c_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!../../../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PvSelect.vue?vue&type=style&index=0&id=1449241c&lang=scss */ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/PvSelect.vue?vue&type=style&index=0&id=1449241c&lang=scss");


/***/ }),

/***/ "./src/vue/trash/Dwarf/inputs/PvSelect.vue?vue&type=template&id=1449241c":
/*!*******************************************************************************!*\
  !*** ./src/vue/trash/Dwarf/inputs/PvSelect.vue?vue&type=template&id=1449241c ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PvSelect_vue_vue_type_template_id_1449241c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PvSelect_vue_vue_type_template_id_1449241c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PvSelect.vue?vue&type=template&id=1449241c */ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/PvSelect.vue?vue&type=template&id=1449241c");


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc3JjX3Z1ZV90cmFzaF9Ed2FyZl9pbnB1dHNfUHZTZWxlY3RfdnVlLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQXNCeUMsQ0FBQztBQUMxQyxpRUFBZTtFQUNYQyxJQUFJLEVBQUUsVUFBVTtFQUNoQkMsVUFBVSxFQUFFO0lBQ1JGLFFBQU8sRUFBUEEseURBQVFBO0VBQ1osQ0FBQztFQUNERyxLQUFLLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztFQUM1QkMsS0FBSyxFQUFFO0lBQ0hDLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxPQUFPLEVBQUU7TUFDTEMsSUFBSSxFQUFFQyxLQUFLO01BQ1gsV0FBUztJQUNiLENBQUM7SUFDREMsSUFBSSxFQUFFO01BQ0ZGLElBQUksRUFBRUcsTUFBTTtNQUNaLFdBQVM7SUFDYixDQUFDO0lBQ0RDLEtBQUssRUFBRTtNQUNISixJQUFJLEVBQUVHLE1BQU07TUFDWixXQUFTO0lBQ2IsQ0FBQztJQUNERSxLQUFLLEVBQUU7TUFDSEwsSUFBSSxFQUFFLENBQUNHLE1BQU0sRUFBRUcsUUFBUSxDQUFDO01BQ3hCLFdBQVM7SUFDYixDQUFDO0lBQ0RDLE1BQU0sRUFBRTtNQUNKUCxJQUFJLEVBQUVHLE1BQU07TUFDWixXQUFTO0lBQ2IsQ0FBQztJQUNESyxPQUFPLEVBQUU7TUFDTFIsSUFBSSxFQUFFUyxNQUFNO01BQ1osV0FBUyxDQUFDO0lBQ2Q7RUFDSixDQUFDO0VBQ0RDLE9BQU8sV0FBUEEsT0FBT0EsQ0FBQSxFQUFHO0lBQ04sSUFBSSxJQUFJLENBQUNGLE9BQU0sSUFBSyxJQUFJLENBQUNBLE9BQU8sQ0FBQ0csR0FBRyxFQUFFO01BQ2xDQyxHQUFHLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNMLE9BQU8sQ0FBQ0csR0FBRyxJQUFJLElBQUc7SUFDcEM7RUFDSixDQUFDO0VBQ0RHLFFBQVEsRUFBRTtJQUNOQyxXQUFXLFdBQVhBLFdBQVdBLENBQUEsRUFBRztNQUNWLElBQUksSUFBSSxDQUFDVixLQUFJLEtBQU0sSUFBSSxFQUFFO1FBQ3JCLE9BQU8sSUFBRztNQUNkO01BQ0EsSUFBSSxPQUFPLElBQUksQ0FBQ0EsS0FBSSxLQUFNLFFBQVEsRUFBRTtRQUNoQyxPQUFPLElBQUksQ0FBQ0EsS0FBSTtNQUNwQjtNQUNBLE9BQU8sSUFBSSxDQUFDQSxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNEVyxhQUFhLFdBQWJBLGFBQWFBLENBQUEsRUFBRztNQUNaLElBQUksSUFBSSxDQUFDQyxjQUFjLENBQUNDLE1BQU0sRUFBRTtRQUM1QixPQUFPLElBQUksQ0FBQ0QsY0FBYTtNQUM3QjtNQUNBLE9BQU8sSUFBSSxDQUFDbEIsT0FBTTtJQUN0QjtFQUNKLENBQUM7RUFDRGMsSUFBSSxXQUFKQSxJQUFJQSxDQUFBLEVBQUc7SUFDSCxPQUFPO01BQ0hJLGNBQWMsRUFBRSxFQUFFO01BQ2xCRSxTQUFTLEVBQUUsS0FBSztNQUNoQkMsS0FBSyxFQUFFO0lBQ1g7RUFDSixDQUFDO0VBQ0RDLE9BQU8sRUFBRTtJQUNMQyxPQUFPLFdBQVBBLE9BQU9BLENBQUNDLEtBQUssRUFBRTtNQUNYLElBQUlWLElBQUcsR0FBSVUsS0FBSyxDQUFDQyxLQUFJO01BQ3JCLElBQUksQ0FBQ0MsS0FBSyxDQUFDLG1CQUFtQixFQUFFWixJQUFJO01BQ3BDO01BQ0EsSUFBSSxJQUFJLENBQUNMLE9BQU0sSUFBSyxJQUFJLENBQUNBLE9BQU8sQ0FBQ2tCLFFBQVEsRUFBRTtRQUN2QyxJQUFJLE9BQU8sSUFBSSxDQUFDbEIsT0FBTyxDQUFDa0IsUUFBTyxLQUFNLFVBQVUsRUFBRTtVQUM3QyxJQUFJLENBQUNsQixPQUFPLENBQUNrQixRQUFRLENBQUNiLElBQUk7UUFDOUIsT0FBTztVQUNIRCxHQUFHLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNMLE9BQU8sQ0FBQ2tCLFFBQVEsQ0FBQyxDQUFDYixJQUFJO1FBQ3hDO01BQ0o7SUFDSixDQUFDO0lBQ0RjLE1BQU0sV0FBTkEsTUFBTUEsQ0FBQ0MsSUFBSSxFQUFFO01BQUEsSUFBQUMsS0FBQTtNQUNULElBQUksQ0FBQyxJQUFJLENBQUN0QixNQUFLLElBQUssQ0FBQ3FCLElBQUksRUFBRTtRQUN2QjtNQUNKO01BQ0EsSUFBSSxDQUFDVCxTQUFRLEdBQUksSUFBRztNQUNwQixJQUFJLElBQUksQ0FBQ0MsS0FBSyxFQUFFO1FBQ1pVLFlBQVksQ0FBQyxJQUFJLENBQUNWLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUNBLEtBQUksR0FBSSxJQUFJO01BQ3JCO01BQ0EsSUFBSSxDQUFDQSxLQUFJLEdBQUlXLFVBQVUsQ0FBQyxZQUFNO1FBQzFCRixLQUFJLENBQUNHLFVBQVUsQ0FBQ0osSUFBSTtNQUN4QixDQUFDLEVBQUUsR0FBRztJQUNWLENBQUM7SUFDREksVUFBVSxXQUFWQSxVQUFVQSxDQUFDSixJQUFJLEVBQ2Y7TUFBQSxJQUFBSyxNQUFBO01BQ0lyQixHQUFHLENBQUNzQixHQUFHLENBQUM7UUFDSkMsR0FBRyxFQUFFLE9BQU0sR0FBSSxJQUFJLENBQUM1QixNQUFNO1FBQzFCTSxJQUFJLEVBQUU7VUFDRnVCLFdBQVcsRUFBRVI7UUFDakIsQ0FBQztRQUNEUyxJQUFJLEVBQUUsU0FBTkEsSUFBSUEsQ0FBRXRDLE9BQU0sRUFBSztVQUNia0MsTUFBSSxDQUFDZCxTQUFRLEdBQUksS0FBSTtVQUNyQixJQUFJLENBQUNwQixPQUFPLEVBQUU7WUFDVmtDLE1BQUksQ0FBQ2hCLGNBQWEsR0FBSSxFQUFDO1VBQzNCLE9BQU87WUFDSGxCLE9BQU8sQ0FBQ3VDLE9BQU8sQ0FBQztjQUFDQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2NBQUU3QyxJQUFJLEVBQUU7WUFBSyxDQUFDO1lBQ3JDdUMsTUFBSSxDQUFDaEIsY0FBYSxHQUFJbEIsT0FBTTtVQUNoQztRQUNKO01BQ0osQ0FBQztJQUNMLENBQUM7SUFDRHlDLFlBQVksV0FBWkEsWUFBWUEsQ0FBQ0MsS0FBSyxFQUFFO01BQUEsSUFBQUMsTUFBQTtNQUNoQjlCLEdBQUcsQ0FBQ3NCLEdBQUcsQ0FBQztRQUNKQyxHQUFHLEVBQUUsT0FBTSxHQUFJTSxLQUFLLENBQUNOLEdBQUc7UUFDeEJ0QixJQUFJLEVBQUU0QixLQUFLLENBQUM1QixJQUFJO1FBQ2hCd0IsSUFBSSxFQUFFLFNBQU5BLElBQUlBLENBQUV0QyxPQUFNLEVBQUs7VUFDYjJDLE1BQUksQ0FBQ3ZCLFNBQVEsR0FBSSxLQUFJO1VBQ3JCLElBQUksQ0FBQ3BCLE9BQU8sRUFBRTtZQUNWMkMsTUFBSSxDQUFDekIsY0FBYSxHQUFJLEVBQUM7VUFDM0IsT0FBTztZQUNIeUIsTUFBSSxDQUFDekIsY0FBYSxHQUFJbEIsT0FBTTtVQUNoQztRQUNKO01BQ0osQ0FBQztJQUNMLENBQUM7SUFDRDRDLFVBQVUsV0FBVkEsVUFBVUEsQ0FBQzVDLE9BQU8sRUFBRTtNQUNoQixJQUFJLENBQUNrQixjQUFhLEdBQUlsQixPQUFNO0lBQ2hDO0VBQ0o7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFqSitCLFNBQU07Ozs7MkRBRGxDNkMsdURBQUEsQ0FpQk07SUFqQkQsU0FBS0MsbURBQUEsRUFBQyxjQUFjLEVBQVNDLE1BQUEsQ0FBQTVDLElBQUk7SUFBR0UsS0FBSyxFQUFBMkMsbURBQUEsQ0FBRUQsTUFBQSxDQUFBMUMsS0FBSztNQUN0QzRDLFFBQUEsQ0FBQWpDLFdBQVcsc0RBQXRCNkIsdURBQUEsQ0FFTSxPQUZOSyxVQUVNLEVBQUFDLG9EQUFBLENBRENGLFFBQUEsQ0FBQWpDLFdBQVcsMkZBRWxCb0MsZ0RBQUEsQ0FZRUMsbUJBQUE7SUFYR3RELFVBQVUsRUFBRWdELE1BQUEsQ0FBQWhELFVBQVU7SUFDdEI0QixRQUFNLEVBQUVzQixRQUFBLENBQUExQixPQUFPO0lBQ2YrQixRQUFRLElBQUlQLE1BQUEsQ0FBQXRDLE9BQU8sQ0FBQzZDLFFBQVE7SUFDNUJ0RCxPQUFPLEVBQUVpRCxRQUFBLENBQUFoQyxhQUFhO0lBQ3ZCLGNBQVksRUFBQyxNQUFNO0lBQ25CLGNBQVksRUFBQyxJQUFJO0lBQ2hCc0MsT0FBTyxFQUFFQyxLQUFBLENBQUFwQyxTQUFTO0lBQ2xCUSxNQUFNLEVBQUUsSUFBSTtJQUNaNkIsUUFBTSxFQUFBQyxNQUFBLFFBQUFBLE1BQUEsZ0JBQUFDLE1BQUE7TUFBQSxPQUFFVixRQUFBLENBQUFyQixNQUFNLENBQUMrQixNQUFNLENBQUNsQyxLQUFLO0lBQUE7SUFDNUIsc0JBQW9CLEVBQUMsZ0JBQWdCO0lBQ3JDLGVBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQjFCO0FBQ3FMO0FBQzdCO0FBQ3hKLDhCQUE4QixxSUFBMkIsQ0FBQywwSkFBcUM7QUFDL0Y7QUFDQSw2REFBNkQsOEJBQThCLEdBQUcsaUJBQWlCLHdCQUF3QixHQUFHLDZCQUE2QixnQkFBZ0IsR0FBRyx3QkFBd0Isc0JBQXNCLGdCQUFnQixvQkFBb0IsdUJBQXVCLEdBQUcsc0JBQXNCLGdCQUFnQixHQUFHLHNCQUFzQiwyQkFBMkIsR0FBRyx5QkFBeUIsMkJBQTJCLEdBQUcsT0FBTywwR0FBMEcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyw4Q0FBOEMsK0JBQStCLEdBQUcsaUJBQWlCLDBCQUEwQixxQkFBcUIsc0JBQXNCLE9BQU8sa0JBQWtCLDRCQUE0QixzQkFBc0IsMEJBQTBCLDZCQUE2QixPQUFPLGdCQUFnQiw0QkFBNEIsZ0JBQWdCLGlDQUFpQyxPQUFPLG1CQUFtQixpQ0FBaUMsT0FBTyxHQUFHLHFCQUFxQjtBQUN2ckM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUE07QUFDQTtBQUNBO0FBQ1k7QUFDVjtBQUNFO0FBQ0o7QUFDVTtBQUNsQjtBQUNBO0FBQ21GO0FBQ2pFO0FBQ0o7QUFDQztBQUNpUjs7QUFFclU7QUFDQTtBQUNBLGFBQWEsK0RBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxL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MkJBQTJCLHNEQUFVO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLHlDQUF5QztBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNEQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzREFBVSw0QkFBNEIsc0RBQVU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHNEQUFVO0FBQ3BELDJDQUEyQyxzREFBVTtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDJDQUEyQyxzREFBVTtBQUNyRCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRUFBRSxnRUFBZ0U7QUFDM0U7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaUJBQWlCLDhEQUFXO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixxREFBZ0I7QUFDL0MsMkJBQTJCLDhDQUFTLElBQUksdURBQWtCLFFBQVEsK0NBQVU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRyx1QkFBdUIsK0NBQVU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxZQUFZLHVEQUFrQixRQUFRLCtDQUFVO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLEtBQUssMEJBQTBCLDhDQUFTLFFBQVEsdURBQWtCLENBQUMseUNBQVEsUUFBUSwrQ0FBVTtBQUM3RixhQUFhLCtDQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRyxzQkFBc0IsOENBQVMsSUFBSSx1REFBa0IsUUFBUSwrQ0FBVTtBQUMxRTtBQUNBO0FBQ0E7QUFDQSxHQUFHLG9DQUFvQyx1REFBa0IsMEVBQTBFLDhDQUFTLElBQUksdURBQWtCLFFBQVEsK0NBQVU7QUFDcEw7QUFDQTtBQUNBLEdBQUcsNkRBQTZELDhDQUFTLFFBQVEsdURBQWtCLENBQUMseUNBQVE7QUFDNUc7QUFDQSxHQUFHLEVBQUUsK0NBQVU7QUFDZixXQUFXLCtDQUFVO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRyxXQUFXLHVEQUFrQixZQUFZLCtDQUFVLCtCQUErQjtBQUNyRixZQUFZLGdEQUFXLHlCQUF5QiwrQ0FBVTtBQUMxRDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUcsV0FBVyx1REFBa0IsaUNBQWlDLDhDQUFTLElBQUksdURBQWtCLENBQUMseUNBQVE7QUFDekc7QUFDQSxHQUFHLEdBQUcsK0NBQVUsMEJBQTBCLCtDQUFVO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFNkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2g1QjZIO0FBQzFKLFlBQTYxQjs7QUFFNzFCOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSw4SkFBRyxDQUFDLGt3QkFBTzs7OztBQUl4QixpRUFBZSxrd0JBQU8sYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWmtDO0FBQ1Y7QUFDTDs7QUFFdEQsQ0FBb0U7O0FBRXdJO0FBQzVNLGlDQUFpQyx1TkFBZSxDQUFDLDZFQUFNLGFBQWEsK0VBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRTtBQUFBLEVBY2Y7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUMxQjRYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS90cmFzaC9Ed2FyZi9pbnB1dHMvUHZTZWxlY3QudnVlIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvdHJhc2gvRHdhcmYvaW5wdXRzL1B2U2VsZWN0LnZ1ZT9hMzE1Iiwid2VicGFjazovL3RocmVlcy8uL25vZGVfbW9kdWxlcy8ucG5wbS9wcmltZXZ1ZUAzLjUzLjFfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zXy9ub2RlX21vZHVsZXMvcHJpbWV2dWUvZHJvcGRvd24vZHJvcGRvd24uZXNtLmpzIiwid2VicGFjazovL3RocmVlcy8uL25vZGVfbW9kdWxlcy8ucG5wbS9wcmltZXZ1ZUAzLjUzLjFfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zXy9ub2RlX21vZHVsZXMvcHJpbWV2dWUvZHJvcGRvd24vc3R5bGUvZHJvcGRvd25zdHlsZS5lc20uanMiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3ByaW1ldnVlQDMuNTMuMV92dWVAMy41LjE2X3R5cGVzY3JpcHRANS44LjNfL25vZGVfbW9kdWxlcy9wcmltZXZ1ZS9pY29ucy9ibGFuay9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3ByaW1ldnVlQDMuNTMuMV92dWVAMy41LjE2X3R5cGVzY3JpcHRANS44LjNfL25vZGVfbW9kdWxlcy9wcmltZXZ1ZS9pY29ucy9jaGV2cm9uZG93bi9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3ByaW1ldnVlQDMuNTMuMV92dWVAMy41LjE2X3R5cGVzY3JpcHRANS44LjNfL25vZGVfbW9kdWxlcy9wcmltZXZ1ZS9pY29ucy9zZWFyY2gvaW5kZXguZXNtLmpzIiwid2VicGFjazovL3RocmVlcy8uL25vZGVfbW9kdWxlcy8ucG5wbS9wcmltZXZ1ZUAzLjUzLjFfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zXy9ub2RlX21vZHVsZXMvcHJpbWV2dWUvb3ZlcmxheWV2ZW50YnVzL292ZXJsYXlldmVudGJ1cy5lc20uanMiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3ByaW1ldnVlQDMuNTMuMV92dWVAMy41LjE2X3R5cGVzY3JpcHRANS44LjNfL25vZGVfbW9kdWxlcy9wcmltZXZ1ZS9wb3J0YWwvcG9ydGFsLmVzbS5qcyIsIndlYnBhY2s6Ly90aHJlZXMvLi9ub2RlX21vZHVsZXMvLnBucG0vcHJpbWV2dWVAMy41My4xX3Z1ZUAzLjUuMTZfdHlwZXNjcmlwdEA1LjguM18vbm9kZV9tb2R1bGVzL3ByaW1ldnVlL3ZpcnR1YWxzY3JvbGxlci9zdHlsZS92aXJ0dWFsc2Nyb2xsZXJzdHlsZS5lc20uanMiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3ByaW1ldnVlQDMuNTMuMV92dWVAMy41LjE2X3R5cGVzY3JpcHRANS44LjNfL25vZGVfbW9kdWxlcy9wcmltZXZ1ZS92aXJ0dWFsc2Nyb2xsZXIvdmlydHVhbHNjcm9sbGVyLmVzbS5qcyIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3RyYXNoL0R3YXJmL2lucHV0cy9QdlNlbGVjdC52dWU/NzYyZSIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3RyYXNoL0R3YXJmL2lucHV0cy9QdlNlbGVjdC52dWU/OTAwMCIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3RyYXNoL0R3YXJmL2lucHV0cy9QdlNlbGVjdC52dWU/ZGUwYiIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3RyYXNoL0R3YXJmL2lucHV0cy9QdlNlbGVjdC52dWU/ODQ4NyIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3RyYXNoL0R3YXJmL2lucHV0cy9QdlNlbGVjdC52dWU/ZGE4MyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImlucHV0LXNlbGVjdFwiIDpjbGFzcz1cInNpemVcIiA6c3R5bGU9XCJzdHlsZVwiPlxuICAgICAgICA8ZGl2IHYtaWY9XCJpbm5lcl9sYWJlbFwiIGNsYXNzPVwiaW5wdXQtdGV4dF9fbGFiZWxcIj5cbiAgICAgICAgICAgIHt7IGlubmVyX2xhYmVsIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICAgIDptb2RlbFZhbHVlPVwibW9kZWxWYWx1ZVwiXG4gICAgICAgICAgICBAY2hhbmdlPVwib25JbnB1dFwiXG4gICAgICAgICAgICA6ZWRpdGFibGU9XCIhIWVsZW1lbnQuZWRpdGFibGVcIlxuICAgICAgICAgICAgOm9wdGlvbnM9XCJpbm5lcl9vcHRpb25zXCJcbiAgICAgICAgICAgIG9wdGlvbi1sYWJlbD1cIm5hbWVcIlxuICAgICAgICAgICAgb3B0aW9uLXZhbHVlPVwiaWRcIlxuICAgICAgICAgICAgOmxvYWRpbmc9XCJwcmVsb2FkZXJcIlxuICAgICAgICAgICAgOmZpbHRlcj1cInRydWVcIlxuICAgICAgICAgICAgQGZpbHRlcj1cImZpbHRlcigkZXZlbnQudmFsdWUpXCJcbiAgICAgICAgICAgIGVtcHR5LWZpbHRlci1tZXNzYWdlPVwi0J3QtdGCINGB0L7QstC/0LDQtNC10L3QuNC5XCJcbiAgICAgICAgICAgIGVtcHR5LW1lc3NhZ2U9XCLQktGL0L/QvtC70L3QuNGC0LUg0L/QvtC40YHQulwiXG4gICAgICAgIC8+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ3ByaW1ldnVlL2Ryb3Bkb3duJzsgLy8gaHR0cHM6Ly93d3cucHJpbWVmYWNlcy5vcmcvcHJpbWV2dWUvZHJvcGRvd25cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIlB2U2VsZWN0XCIsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBEcm9wZG93blxuICAgIH0sXG4gICAgZW1pdHM6IFsndXBkYXRlOm1vZGVsVmFsdWUnXSxcbiAgICBwcm9wczoge1xuICAgICAgICBtb2RlbFZhbHVlOiBudWxsLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdXG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdmdWxsJ1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIEZ1bmN0aW9uXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGVsZW1lbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHt9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgJiYgdGhpcy5lbGVtZW50LmtleSkge1xuICAgICAgICAgICAgQVBQLmRhdGFbdGhpcy5lbGVtZW50LmtleV0gPSB0aGlzXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGlubmVyX2xhYmVsKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGFiZWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmxhYmVsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxhYmVsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sYWJlbCgpXG4gICAgICAgIH0sXG4gICAgICAgIGlubmVyX29wdGlvbnMoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sb2FkZWRfb3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sb2FkZWRfb3B0aW9uc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbG9hZGVkX29wdGlvbnM6IFtdLFxuICAgICAgICAgICAgcHJlbG9hZGVyOiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVyOiBudWxsLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gZXZlbnQudmFsdWVcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgZGF0YSlcbiAgICAgICAgICAgIC8qIHRvZG86dG9fZG9jcyBlbGVtZW50Lm9uQ2hhbmdlINC80L7QttC10YIg0LHRi9GC0Ywg0YTRg9C90LrRhtC40LXQuSDQuNC70Lgg0YHRgtGA0L7QutC+0LkqL1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudCAmJiB0aGlzLmVsZW1lbnQub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuZWxlbWVudC5vbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQub25DaGFuZ2UoZGF0YSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBBUFAuZGF0YVt0aGlzLmVsZW1lbnQub25DaGFuZ2VdKGRhdGEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXIodGV4dCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNlYXJjaCB8fCAhdGV4dCkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wcmVsb2FkZXIgPSB0cnVlXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE9wdGlvbnModGV4dClcbiAgICAgICAgICAgIH0sIDMwMClcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0T3B0aW9ucyh0ZXh0KVxuICAgICAgICB7XG4gICAgICAgICAgICBBUFAuYXBpKHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXBpLycgKyB0aGlzLnNlYXJjaCxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaF90ZXh0OiB0ZXh0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiBvcHRpb25zID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVsb2FkZXIgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkX29wdGlvbnMgPSBbXVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy51bnNoaWZ0KHtpZDogLTEsIG5hbWU6ICfQktGB0LUnfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkX29wdGlvbnMgPSBvcHRpb25zXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBxdWVyeU9wdGlvbnMocXVlcnkpIHtcbiAgICAgICAgICAgIEFQUC5hcGkoe1xuICAgICAgICAgICAgICAgIHVybDogJy9hcGkvJyArIHF1ZXJ5LnVybCxcbiAgICAgICAgICAgICAgICBkYXRhOiBxdWVyeS5kYXRhLFxuICAgICAgICAgICAgICAgIHRoZW46IG9wdGlvbnMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZWxvYWRlciA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkZWRfb3B0aW9ucyA9IFtdXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZF9vcHRpb25zID0gb3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlZF9vcHRpb25zID0gb3B0aW9uc1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLnAtZHJvcGRvd24tcGFuZWwge1xuICAgIHotaW5kZXg6IDEwMDAwIWltcG9ydGFudDtcbn1cbi5pbnB1dC1zZWxlY3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAucC1kcm9wZG93biB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICZfX2xhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG5cbiAgICAmLmZ1bGwge1xuICAgICAgICB3aWR0aDogMTAwJVxuICAgIH1cblxuICAgICYuaGFsZiB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDdweCk7XG4gICAgfVxuXG4gICAgJi5xdWFydGVyIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gN3B4KTtcbiAgICB9XG59XG48L3N0eWxlPlxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDUuMi43X3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA1LjIuN193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucC1kcm9wZG93bi1wYW5lbCB7XFxuICB6LWluZGV4OiAxMDAwMCAhaW1wb3J0YW50O1xcbn1cXG4uaW5wdXQtc2VsZWN0IHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5pbnB1dC1zZWxlY3QgLnAtZHJvcGRvd24ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5pbnB1dC1zZWxlY3RfX2xhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICM3Nzc7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcbi5pbnB1dC1zZWxlY3QuZnVsbCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmlucHV0LXNlbGVjdC5oYWxmIHtcXG4gIHdpZHRoOiBjYWxjKDUwJSAtIDdweCk7XFxufVxcbi5pbnB1dC1zZWxlY3QucXVhcnRlciB7XFxuICB3aWR0aDogY2FsYygyNSUgLSA3cHgpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdnVlL3RyYXNoL0R3YXJmL2lucHV0cy9QdlNlbGVjdC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSx5QkFBQTtBQUFKO0FBRUE7RUFDSSxtQkFBQTtBQUNKO0FBQ0k7RUFDSSxXQUFBO0FBQ1I7QUFFSTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFSO0FBR0k7RUFDSSxXQUFBO0FBRFI7QUFJSTtFQUNJLHNCQUFBO0FBRlI7QUFLSTtFQUNJLHNCQUFBO0FBSFJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLnAtZHJvcGRvd24tcGFuZWwge1xcbiAgICB6LWluZGV4OiAxMDAwMCFpbXBvcnRhbnQ7XFxufVxcbi5pbnB1dC1zZWxlY3Qge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcblxcbiAgICAucC1kcm9wZG93biB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAmX19sYWJlbCB7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIGNvbG9yOiAjNzc3O1xcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgICB9XFxuXFxuICAgICYuZnVsbCB7XFxuICAgICAgICB3aWR0aDogMTAwJVxcbiAgICB9XFxuXFxuICAgICYuaGFsZiB7XFxuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSA3cHgpO1xcbiAgICB9XFxuXFxuICAgICYucXVhcnRlciB7XFxuICAgICAgICB3aWR0aDogY2FsYygyNSUgLSA3cHgpO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyBGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAncHJpbWV2dWUvYXBpJztcbmltcG9ydCBCbGFua0ljb24gZnJvbSAncHJpbWV2dWUvaWNvbnMvYmxhbmsnO1xuaW1wb3J0IENoZWNrSWNvbiBmcm9tICdwcmltZXZ1ZS9pY29ucy9jaGVjayc7XG5pbXBvcnQgQ2hldnJvbkRvd25JY29uIGZyb20gJ3ByaW1ldnVlL2ljb25zL2NoZXZyb25kb3duJztcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ3ByaW1ldnVlL2ljb25zL3NlYXJjaCc7XG5pbXBvcnQgU3Bpbm5lckljb24gZnJvbSAncHJpbWV2dWUvaWNvbnMvc3Bpbm5lcic7XG5pbXBvcnQgVGltZXNJY29uIGZyb20gJ3ByaW1ldnVlL2ljb25zL3RpbWVzJztcbmltcG9ydCBPdmVybGF5RXZlbnRCdXMgZnJvbSAncHJpbWV2dWUvb3ZlcmxheWV2ZW50YnVzJztcbmltcG9ydCBQb3J0YWwgZnJvbSAncHJpbWV2dWUvcG9ydGFsJztcbmltcG9ydCBSaXBwbGUgZnJvbSAncHJpbWV2dWUvcmlwcGxlJztcbmltcG9ydCB7IFVuaXF1ZUNvbXBvbmVudElkLCBaSW5kZXhVdGlscywgT2JqZWN0VXRpbHMsIERvbUhhbmRsZXIsIENvbm5lY3RlZE92ZXJsYXlTY3JvbGxIYW5kbGVyIH0gZnJvbSAncHJpbWV2dWUvdXRpbHMnO1xuaW1wb3J0IFZpcnR1YWxTY3JvbGxlciBmcm9tICdwcmltZXZ1ZS92aXJ0dWFsc2Nyb2xsZXInO1xuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAncHJpbWV2dWUvYmFzZWNvbXBvbmVudCc7XG5pbXBvcnQgRHJvcGRvd25TdHlsZSBmcm9tICdwcmltZXZ1ZS9kcm9wZG93bi9zdHlsZSc7XG5pbXBvcnQgeyByZXNvbHZlQ29tcG9uZW50LCByZXNvbHZlRGlyZWN0aXZlLCBvcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jaywgbWVyZ2VQcm9wcywgcmVuZGVyU2xvdCwgY3JlYXRlVGV4dFZOb2RlLCB0b0Rpc3BsYXlTdHJpbmcsIG5vcm1hbGl6ZUNsYXNzLCBjcmVhdGVCbG9jaywgcmVzb2x2ZUR5bmFtaWNDb21wb25lbnQsIGNyZWF0ZUNvbW1lbnRWTm9kZSwgY3JlYXRlRWxlbWVudFZOb2RlLCBjcmVhdGVWTm9kZSwgd2l0aEN0eCwgVHJhbnNpdGlvbiwgY3JlYXRlU2xvdHMsIEZyYWdtZW50LCByZW5kZXJMaXN0LCB3aXRoRGlyZWN0aXZlcyB9IGZyb20gJ3Z1ZSc7XG5cbnZhciBzY3JpcHQkMSA9IHtcbiAgbmFtZTogJ0Jhc2VEcm9wZG93bicsXG4gIFwiZXh0ZW5kc1wiOiBCYXNlQ29tcG9uZW50LFxuICBwcm9wczoge1xuICAgIG1vZGVsVmFsdWU6IG51bGwsXG4gICAgb3B0aW9uczogQXJyYXksXG4gICAgb3B0aW9uTGFiZWw6IFtTdHJpbmcsIEZ1bmN0aW9uXSxcbiAgICBvcHRpb25WYWx1ZTogW1N0cmluZywgRnVuY3Rpb25dLFxuICAgIG9wdGlvbkRpc2FibGVkOiBbU3RyaW5nLCBGdW5jdGlvbl0sXG4gICAgb3B0aW9uR3JvdXBMYWJlbDogW1N0cmluZywgRnVuY3Rpb25dLFxuICAgIG9wdGlvbkdyb3VwQ2hpbGRyZW46IFtTdHJpbmcsIEZ1bmN0aW9uXSxcbiAgICBzY3JvbGxIZWlnaHQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIFwiZGVmYXVsdFwiOiAnMjAwcHgnXG4gICAgfSxcbiAgICBmaWx0ZXI6IEJvb2xlYW4sXG4gICAgZmlsdGVyUGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICBmaWx0ZXJMb2NhbGU6IFN0cmluZyxcbiAgICBmaWx0ZXJNYXRjaE1vZGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIFwiZGVmYXVsdFwiOiAnY29udGFpbnMnXG4gICAgfSxcbiAgICBmaWx0ZXJGaWVsZHM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgXCJkZWZhdWx0XCI6IG51bGxcbiAgICB9LFxuICAgIGVkaXRhYmxlOiBCb29sZWFuLFxuICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBcImRlZmF1bHRcIjogbnVsbFxuICAgIH0sXG4gICAgdmFyaWFudDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgXCJkZWZhdWx0XCI6IG51bGxcbiAgICB9LFxuICAgIGludmFsaWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgfSxcbiAgICBkYXRhS2V5OiBudWxsLFxuICAgIHNob3dDbGVhcjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgIH0sXG4gICAgaW5wdXRJZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgXCJkZWZhdWx0XCI6IG51bGxcbiAgICB9LFxuICAgIGlucHV0Q2xhc3M6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE9iamVjdF0sXG4gICAgICBcImRlZmF1bHRcIjogbnVsbFxuICAgIH0sXG4gICAgaW5wdXRTdHlsZToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgXCJkZWZhdWx0XCI6IG51bGxcbiAgICB9LFxuICAgIGlucHV0UHJvcHM6IHtcbiAgICAgIHR5cGU6IG51bGwsXG4gICAgICBcImRlZmF1bHRcIjogbnVsbFxuICAgIH0sXG4gICAgcGFuZWxDbGFzczoge1xuICAgICAgdHlwZTogW1N0cmluZywgT2JqZWN0XSxcbiAgICAgIFwiZGVmYXVsdFwiOiBudWxsXG4gICAgfSxcbiAgICBwYW5lbFN0eWxlOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBcImRlZmF1bHRcIjogbnVsbFxuICAgIH0sXG4gICAgcGFuZWxQcm9wczoge1xuICAgICAgdHlwZTogbnVsbCxcbiAgICAgIFwiZGVmYXVsdFwiOiBudWxsXG4gICAgfSxcbiAgICBmaWx0ZXJJbnB1dFByb3BzOiB7XG4gICAgICB0eXBlOiBudWxsLFxuICAgICAgXCJkZWZhdWx0XCI6IG51bGxcbiAgICB9LFxuICAgIGNsZWFySWNvblByb3BzOiB7XG4gICAgICB0eXBlOiBudWxsLFxuICAgICAgXCJkZWZhdWx0XCI6IG51bGxcbiAgICB9LFxuICAgIGFwcGVuZFRvOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdLFxuICAgICAgXCJkZWZhdWx0XCI6ICdib2R5J1xuICAgIH0sXG4gICAgbG9hZGluZzoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgIH0sXG4gICAgY2xlYXJJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBcImRlZmF1bHRcIjogdW5kZWZpbmVkXG4gICAgfSxcbiAgICBkcm9wZG93bkljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIFwiZGVmYXVsdFwiOiB1bmRlZmluZWRcbiAgICB9LFxuICAgIGZpbHRlckljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIFwiZGVmYXVsdFwiOiB1bmRlZmluZWRcbiAgICB9LFxuICAgIGxvYWRpbmdJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBcImRlZmF1bHRcIjogdW5kZWZpbmVkXG4gICAgfSxcbiAgICByZXNldEZpbHRlck9uSGlkZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgIH0sXG4gICAgcmVzZXRGaWx0ZXJPbkNsZWFyOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgfSxcbiAgICB2aXJ0dWFsU2Nyb2xsZXJPcHRpb25zOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBcImRlZmF1bHRcIjogbnVsbFxuICAgIH0sXG4gICAgYXV0b09wdGlvbkZvY3VzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgfSxcbiAgICBhdXRvRmlsdGVyRm9jdXM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICB9LFxuICAgIHNlbGVjdE9uRm9jdXM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICB9LFxuICAgIGZvY3VzT25Ib3Zlcjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgfSxcbiAgICBoaWdobGlnaHRPblNlbGVjdDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIFwiZGVmYXVsdFwiOiB0cnVlXG4gICAgfSxcbiAgICBjaGVja21hcms6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICB9LFxuICAgIGZpbHRlck1lc3NhZ2U6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIFwiZGVmYXVsdFwiOiBudWxsXG4gICAgfSxcbiAgICBzZWxlY3Rpb25NZXNzYWdlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBcImRlZmF1bHRcIjogbnVsbFxuICAgIH0sXG4gICAgZW1wdHlTZWxlY3Rpb25NZXNzYWdlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBcImRlZmF1bHRcIjogbnVsbFxuICAgIH0sXG4gICAgZW1wdHlGaWx0ZXJNZXNzYWdlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBcImRlZmF1bHRcIjogbnVsbFxuICAgIH0sXG4gICAgZW1wdHlNZXNzYWdlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBcImRlZmF1bHRcIjogbnVsbFxuICAgIH0sXG4gICAgdGFiaW5kZXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIFwiZGVmYXVsdFwiOiAwXG4gICAgfSxcbiAgICBhcmlhTGFiZWw6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIFwiZGVmYXVsdFwiOiBudWxsXG4gICAgfSxcbiAgICBhcmlhTGFiZWxsZWRieToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgXCJkZWZhdWx0XCI6IG51bGxcbiAgICB9XG4gIH0sXG4gIHN0eWxlOiBEcm9wZG93blN0eWxlLFxuICBwcm92aWRlOiBmdW5jdGlvbiBwcm92aWRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICAkcGFyZW50SW5zdGFuY2U6IHRoaXNcbiAgICB9O1xuICB9XG59O1xuXG5mdW5jdGlvbiBfdHlwZW9mJDEobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mJDEgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZiQxKG8pOyB9XG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOyB9XG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldOyByZXR1cm4gYXJyMjsgfVxuZnVuY3Rpb24gb3duS2V5cyQxKGUsIHIpIHsgdmFyIHQgPSBPYmplY3Qua2V5cyhlKTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIG8gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpOyByICYmIChvID0gby5maWx0ZXIoZnVuY3Rpb24gKHIpIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgcikuZW51bWVyYWJsZTsgfSkpLCB0LnB1c2guYXBwbHkodCwgbyk7IH0gcmV0dXJuIHQ7IH1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQkMShlKSB7IGZvciAodmFyIHIgPSAxOyByIDwgYXJndW1lbnRzLmxlbmd0aDsgcisrKSB7IHZhciB0ID0gbnVsbCAhPSBhcmd1bWVudHNbcl0gPyBhcmd1bWVudHNbcl0gOiB7fTsgciAlIDIgPyBvd25LZXlzJDEoT2JqZWN0KHQpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAocikgeyBfZGVmaW5lUHJvcGVydHkkMShlLCByLCB0W3JdKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHQpKSA6IG93bktleXMkMShPYmplY3QodCkpLmZvckVhY2goZnVuY3Rpb24gKHIpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgcikpOyB9KTsgfSByZXR1cm4gZTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5JDEob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5JDEoa2V5KTsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSQxKHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUkMSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZiQxKGkpID8gaSA6IFN0cmluZyhpKTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlJDEodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mJDEodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZiQxKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbnZhciBzY3JpcHQgPSB7XG4gIG5hbWU6ICdEcm9wZG93bicsXG4gIFwiZXh0ZW5kc1wiOiBzY3JpcHQkMSxcbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcbiAgZW1pdHM6IFsndXBkYXRlOm1vZGVsVmFsdWUnLCAnY2hhbmdlJywgJ2ZvY3VzJywgJ2JsdXInLCAnYmVmb3JlLXNob3cnLCAnYmVmb3JlLWhpZGUnLCAnc2hvdycsICdoaWRlJywgJ2ZpbHRlciddLFxuICBvdXRzaWRlQ2xpY2tMaXN0ZW5lcjogbnVsbCxcbiAgc2Nyb2xsSGFuZGxlcjogbnVsbCxcbiAgcmVzaXplTGlzdGVuZXI6IG51bGwsXG4gIGxhYmVsQ2xpY2tMaXN0ZW5lcjogbnVsbCxcbiAgb3ZlcmxheTogbnVsbCxcbiAgbGlzdDogbnVsbCxcbiAgdmlydHVhbFNjcm9sbGVyOiBudWxsLFxuICBzZWFyY2hUaW1lb3V0OiBudWxsLFxuICBzZWFyY2hWYWx1ZTogbnVsbCxcbiAgaXNNb2RlbFZhbHVlQ2hhbmdlZDogZmFsc2UsXG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLiRhdHRycy5pZCxcbiAgICAgIGNsaWNrZWQ6IGZhbHNlLFxuICAgICAgZm9jdXNlZDogZmFsc2UsXG4gICAgICBmb2N1c2VkT3B0aW9uSW5kZXg6IC0xLFxuICAgICAgZmlsdGVyVmFsdWU6IG51bGwsXG4gICAgICBvdmVybGF5VmlzaWJsZTogZmFsc2VcbiAgICB9O1xuICB9LFxuICB3YXRjaDoge1xuICAgICckYXR0cnMuaWQnOiBmdW5jdGlvbiAkYXR0cnNJZChuZXdWYWx1ZSkge1xuICAgICAgdGhpcy5pZCA9IG5ld1ZhbHVlIHx8IFVuaXF1ZUNvbXBvbmVudElkKCk7XG4gICAgfSxcbiAgICBtb2RlbFZhbHVlOiBmdW5jdGlvbiBtb2RlbFZhbHVlKCkge1xuICAgICAgdGhpcy5pc01vZGVsVmFsdWVDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9LFxuICAgIG9wdGlvbnM6IGZ1bmN0aW9uIG9wdGlvbnMoKSB7XG4gICAgICB0aGlzLmF1dG9VcGRhdGVNb2RlbCgpO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICB0aGlzLmlkID0gdGhpcy5pZCB8fCBVbmlxdWVDb21wb25lbnRJZCgpO1xuICAgIHRoaXMuYXV0b1VwZGF0ZU1vZGVsKCk7XG4gICAgdGhpcy5iaW5kTGFiZWxDbGlja0xpc3RlbmVyKCk7XG4gIH0sXG4gIHVwZGF0ZWQ6IGZ1bmN0aW9uIHVwZGF0ZWQoKSB7XG4gICAgaWYgKHRoaXMub3ZlcmxheVZpc2libGUgJiYgdGhpcy5pc01vZGVsVmFsdWVDaGFuZ2VkKSB7XG4gICAgICB0aGlzLnNjcm9sbEluVmlldyh0aGlzLmZpbmRTZWxlY3RlZE9wdGlvbkluZGV4KCkpO1xuICAgIH1cbiAgICB0aGlzLmlzTW9kZWxWYWx1ZUNoYW5nZWQgPSBmYWxzZTtcbiAgfSxcbiAgYmVmb3JlVW5tb3VudDogZnVuY3Rpb24gYmVmb3JlVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuYmluZE91dHNpZGVDbGlja0xpc3RlbmVyKCk7XG4gICAgdGhpcy51bmJpbmRSZXNpemVMaXN0ZW5lcigpO1xuICAgIHRoaXMudW5iaW5kTGFiZWxDbGlja0xpc3RlbmVyKCk7XG4gICAgaWYgKHRoaXMuc2Nyb2xsSGFuZGxlcikge1xuICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlciA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLm92ZXJsYXkpIHtcbiAgICAgIFpJbmRleFV0aWxzLmNsZWFyKHRoaXMub3ZlcmxheSk7XG4gICAgICB0aGlzLm92ZXJsYXkgPSBudWxsO1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldE9wdGlvbkluZGV4OiBmdW5jdGlvbiBnZXRPcHRpb25JbmRleChpbmRleCwgZm4pIHtcbiAgICAgIHJldHVybiB0aGlzLnZpcnR1YWxTY3JvbGxlckRpc2FibGVkID8gaW5kZXggOiBmbiAmJiBmbihpbmRleClbJ2luZGV4J107XG4gICAgfSxcbiAgICBnZXRPcHRpb25MYWJlbDogZnVuY3Rpb24gZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25MYWJlbCA/IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEob3B0aW9uLCB0aGlzLm9wdGlvbkxhYmVsKSA6IG9wdGlvbjtcbiAgICB9LFxuICAgIGdldE9wdGlvblZhbHVlOiBmdW5jdGlvbiBnZXRPcHRpb25WYWx1ZShvcHRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvblZhbHVlID8gT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShvcHRpb24sIHRoaXMub3B0aW9uVmFsdWUpIDogb3B0aW9uO1xuICAgIH0sXG4gICAgZ2V0T3B0aW9uUmVuZGVyS2V5OiBmdW5jdGlvbiBnZXRPcHRpb25SZW5kZXJLZXkob3B0aW9uLCBpbmRleCkge1xuICAgICAgcmV0dXJuICh0aGlzLmRhdGFLZXkgPyBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG9wdGlvbiwgdGhpcy5kYXRhS2V5KSA6IHRoaXMuZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSkgKyAnXycgKyBpbmRleDtcbiAgICB9LFxuICAgIGdldFBUSXRlbU9wdGlvbnM6IGZ1bmN0aW9uIGdldFBUSXRlbU9wdGlvbnMob3B0aW9uLCBpdGVtT3B0aW9ucywgaW5kZXgsIGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMucHRtKGtleSwge1xuICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgb3B0aW9uOiBvcHRpb24sXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIHNlbGVjdGVkOiB0aGlzLmlzU2VsZWN0ZWQob3B0aW9uKSxcbiAgICAgICAgICBmb2N1c2VkOiB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCA9PT0gdGhpcy5nZXRPcHRpb25JbmRleChpbmRleCwgaXRlbU9wdGlvbnMpLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLmlzT3B0aW9uRGlzYWJsZWQob3B0aW9uKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGlzT3B0aW9uRGlzYWJsZWQ6IGZ1bmN0aW9uIGlzT3B0aW9uRGlzYWJsZWQob3B0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25EaXNhYmxlZCA/IE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEob3B0aW9uLCB0aGlzLm9wdGlvbkRpc2FibGVkKSA6IGZhbHNlO1xuICAgIH0sXG4gICAgaXNPcHRpb25Hcm91cDogZnVuY3Rpb24gaXNPcHRpb25Hcm91cChvcHRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbkdyb3VwTGFiZWwgJiYgb3B0aW9uLm9wdGlvbkdyb3VwICYmIG9wdGlvbi5ncm91cDtcbiAgICB9LFxuICAgIGdldE9wdGlvbkdyb3VwTGFiZWw6IGZ1bmN0aW9uIGdldE9wdGlvbkdyb3VwTGFiZWwob3B0aW9uR3JvdXApIHtcbiAgICAgIHJldHVybiBPYmplY3RVdGlscy5yZXNvbHZlRmllbGREYXRhKG9wdGlvbkdyb3VwLCB0aGlzLm9wdGlvbkdyb3VwTGFiZWwpO1xuICAgIH0sXG4gICAgZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbjogZnVuY3Rpb24gZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbihvcHRpb25Hcm91cCkge1xuICAgICAgcmV0dXJuIE9iamVjdFV0aWxzLnJlc29sdmVGaWVsZERhdGEob3B0aW9uR3JvdXAsIHRoaXMub3B0aW9uR3JvdXBDaGlsZHJlbik7XG4gICAgfSxcbiAgICBnZXRBcmlhUG9zSW5zZXQ6IGZ1bmN0aW9uIGdldEFyaWFQb3NJbnNldChpbmRleCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHJldHVybiAodGhpcy5vcHRpb25Hcm91cExhYmVsID8gaW5kZXggLSB0aGlzLnZpc2libGVPcHRpb25zLnNsaWNlKDAsIGluZGV4KS5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gX3RoaXMuaXNPcHRpb25Hcm91cChvcHRpb24pO1xuICAgICAgfSkubGVuZ3RoIDogaW5kZXgpICsgMTtcbiAgICB9LFxuICAgIHNob3c6IGZ1bmN0aW9uIHNob3coaXNGb2N1cykge1xuICAgICAgdGhpcy4kZW1pdCgnYmVmb3JlLXNob3cnKTtcbiAgICAgIHRoaXMub3ZlcmxheVZpc2libGUgPSB0cnVlO1xuICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXggPSB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCAhPT0gLTEgPyB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCA6IHRoaXMuYXV0b09wdGlvbkZvY3VzID8gdGhpcy5maW5kRmlyc3RGb2N1c2VkT3B0aW9uSW5kZXgoKSA6IHRoaXMuZWRpdGFibGUgPyAtMSA6IHRoaXMuZmluZFNlbGVjdGVkT3B0aW9uSW5kZXgoKTtcbiAgICAgIGlzRm9jdXMgJiYgRG9tSGFuZGxlci5mb2N1cyh0aGlzLiRyZWZzLmZvY3VzSW5wdXQpO1xuICAgIH0sXG4gICAgaGlkZTogZnVuY3Rpb24gaGlkZShpc0ZvY3VzKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcbiAgICAgIHZhciBfaGlkZSA9IGZ1bmN0aW9uIF9oaWRlKCkge1xuICAgICAgICBfdGhpczIuJGVtaXQoJ2JlZm9yZS1oaWRlJyk7XG4gICAgICAgIF90aGlzMi5vdmVybGF5VmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICBfdGhpczIuY2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICBfdGhpczIuZm9jdXNlZE9wdGlvbkluZGV4ID0gLTE7XG4gICAgICAgIF90aGlzMi5zZWFyY2hWYWx1ZSA9ICcnO1xuICAgICAgICBfdGhpczIucmVzZXRGaWx0ZXJPbkhpZGUgJiYgKF90aGlzMi5maWx0ZXJWYWx1ZSA9IG51bGwpO1xuICAgICAgICBpc0ZvY3VzICYmIERvbUhhbmRsZXIuZm9jdXMoX3RoaXMyLiRyZWZzLmZvY3VzSW5wdXQpO1xuICAgICAgfTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfaGlkZSgpO1xuICAgICAgfSwgMCk7IC8vIEZvciBTY3JlZW5SZWFkZXJzXG4gICAgfSxcbiAgICBvbkZvY3VzOiBmdW5jdGlvbiBvbkZvY3VzKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAvLyBGb3IgU2NyZWVuUmVhZGVyc1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMub3ZlcmxheVZpc2libGUpIHtcbiAgICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXggPSB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCAhPT0gLTEgPyB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCA6IHRoaXMuYXV0b09wdGlvbkZvY3VzID8gdGhpcy5maW5kRmlyc3RGb2N1c2VkT3B0aW9uSW5kZXgoKSA6IHRoaXMuZWRpdGFibGUgPyAtMSA6IHRoaXMuZmluZFNlbGVjdGVkT3B0aW9uSW5kZXgoKTtcbiAgICAgICAgdGhpcy5zY3JvbGxJblZpZXcodGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgpO1xuICAgICAgfVxuICAgICAgdGhpcy4kZW1pdCgnZm9jdXMnLCBldmVudCk7XG4gICAgfSxcbiAgICBvbkJsdXI6IGZ1bmN0aW9uIG9uQmx1cihldmVudCkge1xuICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgICB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCA9IC0xO1xuICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9ICcnO1xuICAgICAgdGhpcy4kZW1pdCgnYmx1cicsIGV2ZW50KTtcbiAgICB9LFxuICAgIG9uS2V5RG93bjogZnVuY3Rpb24gb25LZXlEb3duKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCBEb21IYW5kbGVyLmlzQW5kcm9pZCgpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBtZXRhS2V5ID0gZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5O1xuICAgICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgdGhpcy5vbkFycm93RG93bktleShldmVudCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgIHRoaXMub25BcnJvd1VwS2V5KGV2ZW50LCB0aGlzLmVkaXRhYmxlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgdGhpcy5vbkFycm93TGVmdEtleShldmVudCwgdGhpcy5lZGl0YWJsZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICAgIHRoaXMub25Ib21lS2V5KGV2ZW50LCB0aGlzLmVkaXRhYmxlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRW5kJzpcbiAgICAgICAgICB0aGlzLm9uRW5kS2V5KGV2ZW50LCB0aGlzLmVkaXRhYmxlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUGFnZURvd24nOlxuICAgICAgICAgIHRoaXMub25QYWdlRG93bktleShldmVudCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1BhZ2VVcCc6XG4gICAgICAgICAgdGhpcy5vblBhZ2VVcEtleShldmVudCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgICAgICB0aGlzLm9uU3BhY2VLZXkoZXZlbnQsIHRoaXMuZWRpdGFibGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgIGNhc2UgJ051bXBhZEVudGVyJzpcbiAgICAgICAgICB0aGlzLm9uRW50ZXJLZXkoZXZlbnQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICAgIHRoaXMub25Fc2NhcGVLZXkoZXZlbnQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdUYWInOlxuICAgICAgICAgIHRoaXMub25UYWJLZXkoZXZlbnQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdCYWNrc3BhY2UnOlxuICAgICAgICAgIHRoaXMub25CYWNrc3BhY2VLZXkoZXZlbnQsIHRoaXMuZWRpdGFibGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTaGlmdExlZnQnOlxuICAgICAgICBjYXNlICdTaGlmdFJpZ2h0JzpcbiAgICAgICAgICAvL05PT1BcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoIW1ldGFLZXkgJiYgT2JqZWN0VXRpbHMuaXNQcmludGFibGVDaGFyYWN0ZXIoZXZlbnQua2V5KSkge1xuICAgICAgICAgICAgIXRoaXMub3ZlcmxheVZpc2libGUgJiYgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICAhdGhpcy5lZGl0YWJsZSAmJiB0aGlzLnNlYXJjaE9wdGlvbnMoZXZlbnQsIGV2ZW50LmtleSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgfSxcbiAgICBvbkVkaXRhYmxlSW5wdXQ6IGZ1bmN0aW9uIG9uRWRpdGFibGVJbnB1dChldmVudCkge1xuICAgICAgdmFyIHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9ICcnO1xuICAgICAgdmFyIG1hdGNoZWQgPSB0aGlzLnNlYXJjaE9wdGlvbnMoZXZlbnQsIHZhbHVlKTtcbiAgICAgICFtYXRjaGVkICYmICh0aGlzLmZvY3VzZWRPcHRpb25JbmRleCA9IC0xKTtcbiAgICAgIHRoaXMudXBkYXRlTW9kZWwoZXZlbnQsIHZhbHVlKTtcbiAgICAgICF0aGlzLm92ZXJsYXlWaXNpYmxlICYmIE9iamVjdFV0aWxzLmlzTm90RW1wdHkodmFsdWUpICYmIHRoaXMuc2hvdygpO1xuICAgIH0sXG4gICAgb25Db250YWluZXJDbGljazogZnVuY3Rpb24gb25Db250YWluZXJDbGljayhldmVudCkge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5sb2FkaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJyB8fCBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXBjLXNlY3Rpb24nKSA9PT0gJ2NsZWFyaWNvbicgfHwgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLXBjLXNlY3Rpb249XCJjbGVhcmljb25cIl0nKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLm92ZXJsYXkgfHwgIXRoaXMub3ZlcmxheS5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheVZpc2libGUgPyB0aGlzLmhpZGUodHJ1ZSkgOiB0aGlzLnNob3codHJ1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmNsaWNrZWQgPSB0cnVlO1xuICAgIH0sXG4gICAgb25DbGVhckNsaWNrOiBmdW5jdGlvbiBvbkNsZWFyQ2xpY2soZXZlbnQpIHtcbiAgICAgIHRoaXMudXBkYXRlTW9kZWwoZXZlbnQsIG51bGwpO1xuICAgICAgdGhpcy5yZXNldEZpbHRlck9uQ2xlYXIgJiYgKHRoaXMuZmlsdGVyVmFsdWUgPSBudWxsKTtcbiAgICB9LFxuICAgIG9uRmlyc3RIaWRkZW5Gb2N1czogZnVuY3Rpb24gb25GaXJzdEhpZGRlbkZvY3VzKGV2ZW50KSB7XG4gICAgICB2YXIgZm9jdXNhYmxlRWwgPSBldmVudC5yZWxhdGVkVGFyZ2V0ID09PSB0aGlzLiRyZWZzLmZvY3VzSW5wdXQgPyBEb21IYW5kbGVyLmdldEZpcnN0Rm9jdXNhYmxlRWxlbWVudCh0aGlzLm92ZXJsYXksICc6bm90KFtkYXRhLXAtaGlkZGVuLWZvY3VzYWJsZT1cInRydWVcIl0pJykgOiB0aGlzLiRyZWZzLmZvY3VzSW5wdXQ7XG4gICAgICBEb21IYW5kbGVyLmZvY3VzKGZvY3VzYWJsZUVsKTtcbiAgICB9LFxuICAgIG9uTGFzdEhpZGRlbkZvY3VzOiBmdW5jdGlvbiBvbkxhc3RIaWRkZW5Gb2N1cyhldmVudCkge1xuICAgICAgdmFyIGZvY3VzYWJsZUVsID0gZXZlbnQucmVsYXRlZFRhcmdldCA9PT0gdGhpcy4kcmVmcy5mb2N1c0lucHV0ID8gRG9tSGFuZGxlci5nZXRMYXN0Rm9jdXNhYmxlRWxlbWVudCh0aGlzLm92ZXJsYXksICc6bm90KFtkYXRhLXAtaGlkZGVuLWZvY3VzYWJsZT1cInRydWVcIl0pJykgOiB0aGlzLiRyZWZzLmZvY3VzSW5wdXQ7XG4gICAgICBEb21IYW5kbGVyLmZvY3VzKGZvY3VzYWJsZUVsKTtcbiAgICB9LFxuICAgIG9uT3B0aW9uU2VsZWN0OiBmdW5jdGlvbiBvbk9wdGlvblNlbGVjdChldmVudCwgb3B0aW9uKSB7XG4gICAgICB2YXIgaXNIaWRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB0cnVlO1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5nZXRPcHRpb25WYWx1ZShvcHRpb24pO1xuICAgICAgdGhpcy51cGRhdGVNb2RlbChldmVudCwgdmFsdWUpO1xuICAgICAgaXNIaWRlICYmIHRoaXMuaGlkZSh0cnVlKTtcbiAgICB9LFxuICAgIG9uT3B0aW9uTW91c2VNb3ZlOiBmdW5jdGlvbiBvbk9wdGlvbk1vdXNlTW92ZShldmVudCwgaW5kZXgpIHtcbiAgICAgIGlmICh0aGlzLmZvY3VzT25Ib3Zlcikge1xuICAgICAgICB0aGlzLmNoYW5nZUZvY3VzZWRPcHRpb25JbmRleChldmVudCwgaW5kZXgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25GaWx0ZXJDaGFuZ2U6IGZ1bmN0aW9uIG9uRmlsdGVyQ2hhbmdlKGV2ZW50KSB7XG4gICAgICB2YXIgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLmZpbHRlclZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCA9IC0xO1xuICAgICAgdGhpcy4kZW1pdCgnZmlsdGVyJywge1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICAgICF0aGlzLnZpcnR1YWxTY3JvbGxlckRpc2FibGVkICYmIHRoaXMudmlydHVhbFNjcm9sbGVyLnNjcm9sbFRvSW5kZXgoMCk7XG4gICAgfSxcbiAgICBvbkZpbHRlcktleURvd246IGZ1bmN0aW9uIG9uRmlsdGVyS2V5RG93bihldmVudCkge1xuICAgICAgc3dpdGNoIChldmVudC5jb2RlKSB7XG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgdGhpcy5vbkFycm93RG93bktleShldmVudCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgIHRoaXMub25BcnJvd1VwS2V5KGV2ZW50LCB0cnVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgdGhpcy5vbkFycm93TGVmdEtleShldmVudCwgdHJ1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0hvbWUnOlxuICAgICAgICAgIHRoaXMub25Ib21lS2V5KGV2ZW50LCB0cnVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRW5kJzpcbiAgICAgICAgICB0aGlzLm9uRW5kS2V5KGV2ZW50LCB0cnVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICBjYXNlICdOdW1wYWRFbnRlcic6XG4gICAgICAgICAgdGhpcy5vbkVudGVyS2V5KGV2ZW50KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgICB0aGlzLm9uRXNjYXBlS2V5KGV2ZW50KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnVGFiJzpcbiAgICAgICAgICB0aGlzLm9uVGFiS2V5KGV2ZW50LCB0cnVlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uRmlsdGVyQmx1cjogZnVuY3Rpb24gb25GaWx0ZXJCbHVyKCkge1xuICAgICAgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXggPSAtMTtcbiAgICB9LFxuICAgIG9uRmlsdGVyVXBkYXRlZDogZnVuY3Rpb24gb25GaWx0ZXJVcGRhdGVkKCkge1xuICAgICAgaWYgKHRoaXMub3ZlcmxheVZpc2libGUpIHtcbiAgICAgICAgdGhpcy5hbGlnbk92ZXJsYXkoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uT3ZlcmxheUNsaWNrOiBmdW5jdGlvbiBvbk92ZXJsYXlDbGljayhldmVudCkge1xuICAgICAgT3ZlcmxheUV2ZW50QnVzLmVtaXQoJ292ZXJsYXktY2xpY2snLCB7XG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICB0YXJnZXQ6IHRoaXMuJGVsXG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uT3ZlcmxheUtleURvd246IGZ1bmN0aW9uIG9uT3ZlcmxheUtleURvd24oZXZlbnQpIHtcbiAgICAgIHN3aXRjaCAoZXZlbnQuY29kZSkge1xuICAgICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICAgIHRoaXMub25Fc2NhcGVLZXkoZXZlbnQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25BcnJvd0Rvd25LZXk6IGZ1bmN0aW9uIG9uQXJyb3dEb3duS2V5KGV2ZW50KSB7XG4gICAgICBpZiAoIXRoaXMub3ZlcmxheVZpc2libGUpIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIHRoaXMuZWRpdGFibGUgJiYgdGhpcy5jaGFuZ2VGb2N1c2VkT3B0aW9uSW5kZXgoZXZlbnQsIHRoaXMuZmluZFNlbGVjdGVkT3B0aW9uSW5kZXgoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgb3B0aW9uSW5kZXggPSB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCAhPT0gLTEgPyB0aGlzLmZpbmROZXh0T3B0aW9uSW5kZXgodGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgpIDogdGhpcy5jbGlja2VkID8gdGhpcy5maW5kRmlyc3RPcHRpb25JbmRleCgpIDogdGhpcy5maW5kRmlyc3RGb2N1c2VkT3B0aW9uSW5kZXgoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VGb2N1c2VkT3B0aW9uSW5kZXgoZXZlbnQsIG9wdGlvbkluZGV4KTtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSxcbiAgICBvbkFycm93VXBLZXk6IGZ1bmN0aW9uIG9uQXJyb3dVcEtleShldmVudCkge1xuICAgICAgdmFyIHByZXNzZWRJbklucHV0VGV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgICBpZiAoZXZlbnQuYWx0S2V5ICYmICFwcmVzc2VkSW5JbnB1dFRleHQpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHRoaXMub25PcHRpb25TZWxlY3QoZXZlbnQsIHRoaXMudmlzaWJsZU9wdGlvbnNbdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm92ZXJsYXlWaXNpYmxlICYmIHRoaXMuaGlkZSgpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG9wdGlvbkluZGV4ID0gdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXggIT09IC0xID8gdGhpcy5maW5kUHJldk9wdGlvbkluZGV4KHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KSA6IHRoaXMuY2xpY2tlZCA/IHRoaXMuZmluZExhc3RPcHRpb25JbmRleCgpIDogdGhpcy5maW5kTGFzdEZvY3VzZWRPcHRpb25JbmRleCgpO1xuICAgICAgICB0aGlzLmNoYW5nZUZvY3VzZWRPcHRpb25JbmRleChldmVudCwgb3B0aW9uSW5kZXgpO1xuICAgICAgICAhdGhpcy5vdmVybGF5VmlzaWJsZSAmJiB0aGlzLnNob3coKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQXJyb3dMZWZ0S2V5OiBmdW5jdGlvbiBvbkFycm93TGVmdEtleShldmVudCkge1xuICAgICAgdmFyIHByZXNzZWRJbklucHV0VGV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgICBwcmVzc2VkSW5JbnB1dFRleHQgJiYgKHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4ID0gLTEpO1xuICAgIH0sXG4gICAgb25Ib21lS2V5OiBmdW5jdGlvbiBvbkhvbWVLZXkoZXZlbnQpIHtcbiAgICAgIHZhciBwcmVzc2VkSW5JbnB1dFRleHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgICAgaWYgKHByZXNzZWRJbklucHV0VGV4dCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgdGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKDAsIGV2ZW50LnRhcmdldC5zZWxlY3Rpb25TdGFydCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKDAsIDApO1xuICAgICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4ID0gLTE7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRm9jdXNlZE9wdGlvbkluZGV4KGV2ZW50LCB0aGlzLmZpbmRGaXJzdE9wdGlvbkluZGV4KCkpO1xuICAgICAgICAhdGhpcy5vdmVybGF5VmlzaWJsZSAmJiB0aGlzLnNob3coKTtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSxcbiAgICBvbkVuZEtleTogZnVuY3Rpb24gb25FbmRLZXkoZXZlbnQpIHtcbiAgICAgIHZhciBwcmVzc2VkSW5JbnB1dFRleHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgICAgaWYgKHByZXNzZWRJbklucHV0VGV4dCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgdGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKGV2ZW50LnRhcmdldC5zZWxlY3Rpb25TdGFydCwgdGFyZ2V0LnZhbHVlLmxlbmd0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGxlbiA9IHRhcmdldC52YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgdGFyZ2V0LnNldFNlbGVjdGlvblJhbmdlKGxlbiwgbGVuKTtcbiAgICAgICAgICB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCA9IC0xO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNoYW5nZUZvY3VzZWRPcHRpb25JbmRleChldmVudCwgdGhpcy5maW5kTGFzdE9wdGlvbkluZGV4KCkpO1xuICAgICAgICAhdGhpcy5vdmVybGF5VmlzaWJsZSAmJiB0aGlzLnNob3coKTtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSxcbiAgICBvblBhZ2VVcEtleTogZnVuY3Rpb24gb25QYWdlVXBLZXkoZXZlbnQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsSW5WaWV3KDApO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9LFxuICAgIG9uUGFnZURvd25LZXk6IGZ1bmN0aW9uIG9uUGFnZURvd25LZXkoZXZlbnQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsSW5WaWV3KHRoaXMudmlzaWJsZU9wdGlvbnMubGVuZ3RoIC0gMSk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0sXG4gICAgb25FbnRlcktleTogZnVuY3Rpb24gb25FbnRlcktleShldmVudCkge1xuICAgICAgaWYgKCF0aGlzLm92ZXJsYXlWaXNpYmxlKSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4ID0gLTE7IC8vIHJlc2V0XG4gICAgICAgIHRoaXMub25BcnJvd0Rvd25LZXkoZXZlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHRoaXMub25PcHRpb25TZWxlY3QoZXZlbnQsIHRoaXMudmlzaWJsZU9wdGlvbnNbdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXhdKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSxcbiAgICBvblNwYWNlS2V5OiBmdW5jdGlvbiBvblNwYWNlS2V5KGV2ZW50KSB7XG4gICAgICB2YXIgcHJlc3NlZEluSW5wdXRUZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICAgICFwcmVzc2VkSW5JbnB1dFRleHQgJiYgdGhpcy5vbkVudGVyS2V5KGV2ZW50KTtcbiAgICB9LFxuICAgIG9uRXNjYXBlS2V5OiBmdW5jdGlvbiBvbkVzY2FwZUtleShldmVudCkge1xuICAgICAgdGhpcy5vdmVybGF5VmlzaWJsZSAmJiB0aGlzLmhpZGUodHJ1ZSk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vQHRvZG8gd2lsbCBiZSBjaGFuZ2VkIG5leHQgdmVyc2lvbnNzXG4gICAgfSxcbiAgICBvblRhYktleTogZnVuY3Rpb24gb25UYWJLZXkoZXZlbnQpIHtcbiAgICAgIHZhciBwcmVzc2VkSW5JbnB1dFRleHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgICAgaWYgKCFwcmVzc2VkSW5JbnB1dFRleHQpIHtcbiAgICAgICAgaWYgKHRoaXMub3ZlcmxheVZpc2libGUgJiYgdGhpcy5oYXNGb2N1c2FibGVFbGVtZW50cygpKSB7XG4gICAgICAgICAgRG9tSGFuZGxlci5mb2N1cyh0aGlzLiRyZWZzLmZpcnN0SGlkZGVuRm9jdXNhYmxlRWxlbWVudE9uT3ZlcmxheSk7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5mb2N1c2VkT3B0aW9uSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLm9uT3B0aW9uU2VsZWN0KGV2ZW50LCB0aGlzLnZpc2libGVPcHRpb25zW3RoaXMuZm9jdXNlZE9wdGlvbkluZGV4XSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMub3ZlcmxheVZpc2libGUgJiYgdGhpcy5oaWRlKHRoaXMuZmlsdGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25CYWNrc3BhY2VLZXk6IGZ1bmN0aW9uIG9uQmFja3NwYWNlS2V5KGV2ZW50KSB7XG4gICAgICB2YXIgcHJlc3NlZEluSW5wdXRUZXh0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICAgIGlmIChwcmVzc2VkSW5JbnB1dFRleHQpIHtcbiAgICAgICAgIXRoaXMub3ZlcmxheVZpc2libGUgJiYgdGhpcy5zaG93KCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvbk92ZXJsYXlFbnRlcjogZnVuY3Rpb24gb25PdmVybGF5RW50ZXIoZWwpIHtcbiAgICAgIFpJbmRleFV0aWxzLnNldCgnb3ZlcmxheScsIGVsLCB0aGlzLiRwcmltZXZ1ZS5jb25maWcuekluZGV4Lm92ZXJsYXkpO1xuICAgICAgRG9tSGFuZGxlci5hZGRTdHlsZXMoZWwsIHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogJzAnLFxuICAgICAgICBsZWZ0OiAnMCdcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbGlnbk92ZXJsYXkoKTtcbiAgICAgIHRoaXMuc2Nyb2xsSW5WaWV3KCk7XG4gICAgICB0aGlzLmF1dG9GaWx0ZXJGb2N1cyAmJiBEb21IYW5kbGVyLmZvY3VzKHRoaXMuJHJlZnMuZmlsdGVySW5wdXQpO1xuICAgIH0sXG4gICAgb25PdmVybGF5QWZ0ZXJFbnRlcjogZnVuY3Rpb24gb25PdmVybGF5QWZ0ZXJFbnRlcigpIHtcbiAgICAgIHRoaXMuYmluZE91dHNpZGVDbGlja0xpc3RlbmVyKCk7XG4gICAgICB0aGlzLmJpbmRTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgdGhpcy5iaW5kUmVzaXplTGlzdGVuZXIoKTtcbiAgICAgIHRoaXMuJGVtaXQoJ3Nob3cnKTtcbiAgICB9LFxuICAgIG9uT3ZlcmxheUxlYXZlOiBmdW5jdGlvbiBvbk92ZXJsYXlMZWF2ZSgpIHtcbiAgICAgIHRoaXMudW5iaW5kT3V0c2lkZUNsaWNrTGlzdGVuZXIoKTtcbiAgICAgIHRoaXMudW5iaW5kU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgIHRoaXMudW5iaW5kUmVzaXplTGlzdGVuZXIoKTtcbiAgICAgIHRoaXMuJGVtaXQoJ2hpZGUnKTtcbiAgICAgIHRoaXMub3ZlcmxheSA9IG51bGw7XG4gICAgfSxcbiAgICBvbk92ZXJsYXlBZnRlckxlYXZlOiBmdW5jdGlvbiBvbk92ZXJsYXlBZnRlckxlYXZlKGVsKSB7XG4gICAgICBaSW5kZXhVdGlscy5jbGVhcihlbCk7XG4gICAgfSxcbiAgICBhbGlnbk92ZXJsYXk6IGZ1bmN0aW9uIGFsaWduT3ZlcmxheSgpIHtcbiAgICAgIGlmICh0aGlzLmFwcGVuZFRvID09PSAnc2VsZicpIHtcbiAgICAgICAgRG9tSGFuZGxlci5yZWxhdGl2ZVBvc2l0aW9uKHRoaXMub3ZlcmxheSwgdGhpcy4kZWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLm1pbldpZHRoID0gRG9tSGFuZGxlci5nZXRPdXRlcldpZHRoKHRoaXMuJGVsKSArICdweCc7XG4gICAgICAgIERvbUhhbmRsZXIuYWJzb2x1dGVQb3NpdGlvbih0aGlzLm92ZXJsYXksIHRoaXMuJGVsKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGJpbmRPdXRzaWRlQ2xpY2tMaXN0ZW5lcjogZnVuY3Rpb24gYmluZE91dHNpZGVDbGlja0xpc3RlbmVyKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG4gICAgICBpZiAoIXRoaXMub3V0c2lkZUNsaWNrTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5vdXRzaWRlQ2xpY2tMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmIChfdGhpczMub3ZlcmxheVZpc2libGUgJiYgX3RoaXMzLm92ZXJsYXkgJiYgIV90aGlzMy4kZWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhX3RoaXMzLm92ZXJsYXkuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgX3RoaXMzLmhpZGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vdXRzaWRlQ2xpY2tMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSxcbiAgICB1bmJpbmRPdXRzaWRlQ2xpY2tMaXN0ZW5lcjogZnVuY3Rpb24gdW5iaW5kT3V0c2lkZUNsaWNrTGlzdGVuZXIoKSB7XG4gICAgICBpZiAodGhpcy5vdXRzaWRlQ2xpY2tMaXN0ZW5lcikge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3V0c2lkZUNsaWNrTGlzdGVuZXIpO1xuICAgICAgICB0aGlzLm91dHNpZGVDbGlja0xpc3RlbmVyID0gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGJpbmRTY3JvbGxMaXN0ZW5lcjogZnVuY3Rpb24gYmluZFNjcm9sbExpc3RlbmVyKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG4gICAgICBpZiAoIXRoaXMuc2Nyb2xsSGFuZGxlcikge1xuICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIgPSBuZXcgQ29ubmVjdGVkT3ZlcmxheVNjcm9sbEhhbmRsZXIodGhpcy4kcmVmcy5jb250YWluZXIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoX3RoaXM0Lm92ZXJsYXlWaXNpYmxlKSB7XG4gICAgICAgICAgICBfdGhpczQuaGlkZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLnNjcm9sbEhhbmRsZXIuYmluZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgfSxcbiAgICB1bmJpbmRTY3JvbGxMaXN0ZW5lcjogZnVuY3Rpb24gdW5iaW5kU2Nyb2xsTGlzdGVuZXIoKSB7XG4gICAgICBpZiAodGhpcy5zY3JvbGxIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci51bmJpbmRTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYmluZFJlc2l6ZUxpc3RlbmVyOiBmdW5jdGlvbiBiaW5kUmVzaXplTGlzdGVuZXIoKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcbiAgICAgIGlmICghdGhpcy5yZXNpemVMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLnJlc2l6ZUxpc3RlbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChfdGhpczUub3ZlcmxheVZpc2libGUgJiYgIURvbUhhbmRsZXIuaXNUb3VjaERldmljZSgpKSB7XG4gICAgICAgICAgICBfdGhpczUuaGlkZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplTGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdW5iaW5kUmVzaXplTGlzdGVuZXI6IGZ1bmN0aW9uIHVuYmluZFJlc2l6ZUxpc3RlbmVyKCkge1xuICAgICAgaWYgKHRoaXMucmVzaXplTGlzdGVuZXIpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplTGlzdGVuZXIpO1xuICAgICAgICB0aGlzLnJlc2l6ZUxpc3RlbmVyID0gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGJpbmRMYWJlbENsaWNrTGlzdGVuZXI6IGZ1bmN0aW9uIGJpbmRMYWJlbENsaWNrTGlzdGVuZXIoKSB7XG4gICAgICB2YXIgX3RoaXM2ID0gdGhpcztcbiAgICAgIGlmICghdGhpcy5lZGl0YWJsZSAmJiAhdGhpcy5sYWJlbENsaWNrTGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxhYmVsW2Zvcj1cXFwiXCIuY29uY2F0KHRoaXMuaW5wdXRJZCwgXCJcXFwiXVwiKSk7XG4gICAgICAgIGlmIChsYWJlbCAmJiBEb21IYW5kbGVyLmlzVmlzaWJsZShsYWJlbCkpIHtcbiAgICAgICAgICB0aGlzLmxhYmVsQ2xpY2tMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIERvbUhhbmRsZXIuZm9jdXMoX3RoaXM2LiRyZWZzLmZvY3VzSW5wdXQpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmxhYmVsQ2xpY2tMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHVuYmluZExhYmVsQ2xpY2tMaXN0ZW5lcjogZnVuY3Rpb24gdW5iaW5kTGFiZWxDbGlja0xpc3RlbmVyKCkge1xuICAgICAgaWYgKHRoaXMubGFiZWxDbGlja0xpc3RlbmVyKSB7XG4gICAgICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbFtmb3I9XFxcIlwiLmNvbmNhdCh0aGlzLmlucHV0SWQsIFwiXFxcIl1cIikpO1xuICAgICAgICBpZiAobGFiZWwgJiYgRG9tSGFuZGxlci5pc1Zpc2libGUobGFiZWwpKSB7XG4gICAgICAgICAgbGFiZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmxhYmVsQ2xpY2tMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGhhc0ZvY3VzYWJsZUVsZW1lbnRzOiBmdW5jdGlvbiBoYXNGb2N1c2FibGVFbGVtZW50cygpIHtcbiAgICAgIHJldHVybiBEb21IYW5kbGVyLmdldEZvY3VzYWJsZUVsZW1lbnRzKHRoaXMub3ZlcmxheSwgJzpub3QoW2RhdGEtcC1oaWRkZW4tZm9jdXNhYmxlPVwidHJ1ZVwiXSknKS5sZW5ndGggPiAwO1xuICAgIH0sXG4gICAgaXNPcHRpb25NYXRjaGVkOiBmdW5jdGlvbiBpc09wdGlvbk1hdGNoZWQob3B0aW9uKSB7XG4gICAgICB2YXIgX3RoaXMkZ2V0T3B0aW9uTGFiZWw7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkT3B0aW9uKG9wdGlvbikgJiYgKChfdGhpcyRnZXRPcHRpb25MYWJlbCA9IHRoaXMuZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSkgPT09IG51bGwgfHwgX3RoaXMkZ2V0T3B0aW9uTGFiZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJGdldE9wdGlvbkxhYmVsLnRvTG9jYWxlTG93ZXJDYXNlKHRoaXMuZmlsdGVyTG9jYWxlKS5zdGFydHNXaXRoKHRoaXMuc2VhcmNoVmFsdWUudG9Mb2NhbGVMb3dlckNhc2UodGhpcy5maWx0ZXJMb2NhbGUpKSk7XG4gICAgfSxcbiAgICBpc1ZhbGlkT3B0aW9uOiBmdW5jdGlvbiBpc1ZhbGlkT3B0aW9uKG9wdGlvbikge1xuICAgICAgcmV0dXJuIE9iamVjdFV0aWxzLmlzTm90RW1wdHkob3B0aW9uKSAmJiAhKHRoaXMuaXNPcHRpb25EaXNhYmxlZChvcHRpb24pIHx8IHRoaXMuaXNPcHRpb25Hcm91cChvcHRpb24pKTtcbiAgICB9LFxuICAgIGlzVmFsaWRTZWxlY3RlZE9wdGlvbjogZnVuY3Rpb24gaXNWYWxpZFNlbGVjdGVkT3B0aW9uKG9wdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZE9wdGlvbihvcHRpb24pICYmIHRoaXMuaXNTZWxlY3RlZChvcHRpb24pO1xuICAgIH0sXG4gICAgaXNTZWxlY3RlZDogZnVuY3Rpb24gaXNTZWxlY3RlZChvcHRpb24pIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWRPcHRpb24ob3B0aW9uKSAmJiBPYmplY3RVdGlscy5lcXVhbHModGhpcy5tb2RlbFZhbHVlLCB0aGlzLmdldE9wdGlvblZhbHVlKG9wdGlvbiksIHRoaXMuZXF1YWxpdHlLZXkpO1xuICAgIH0sXG4gICAgZmluZEZpcnN0T3B0aW9uSW5kZXg6IGZ1bmN0aW9uIGZpbmRGaXJzdE9wdGlvbkluZGV4KCkge1xuICAgICAgdmFyIF90aGlzNyA9IHRoaXM7XG4gICAgICByZXR1cm4gdGhpcy52aXNpYmxlT3B0aW9ucy5maW5kSW5kZXgoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gX3RoaXM3LmlzVmFsaWRPcHRpb24ob3B0aW9uKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZmluZExhc3RPcHRpb25JbmRleDogZnVuY3Rpb24gZmluZExhc3RPcHRpb25JbmRleCgpIHtcbiAgICAgIHZhciBfdGhpczggPSB0aGlzO1xuICAgICAgcmV0dXJuIE9iamVjdFV0aWxzLmZpbmRMYXN0SW5kZXgodGhpcy52aXNpYmxlT3B0aW9ucywgZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gX3RoaXM4LmlzVmFsaWRPcHRpb24ob3B0aW9uKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZmluZE5leHRPcHRpb25JbmRleDogZnVuY3Rpb24gZmluZE5leHRPcHRpb25JbmRleChpbmRleCkge1xuICAgICAgdmFyIF90aGlzOSA9IHRoaXM7XG4gICAgICB2YXIgbWF0Y2hlZE9wdGlvbkluZGV4ID0gaW5kZXggPCB0aGlzLnZpc2libGVPcHRpb25zLmxlbmd0aCAtIDEgPyB0aGlzLnZpc2libGVPcHRpb25zLnNsaWNlKGluZGV4ICsgMSkuZmluZEluZGV4KGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIF90aGlzOS5pc1ZhbGlkT3B0aW9uKG9wdGlvbik7XG4gICAgICB9KSA6IC0xO1xuICAgICAgcmV0dXJuIG1hdGNoZWRPcHRpb25JbmRleCA+IC0xID8gbWF0Y2hlZE9wdGlvbkluZGV4ICsgaW5kZXggKyAxIDogaW5kZXg7XG4gICAgfSxcbiAgICBmaW5kUHJldk9wdGlvbkluZGV4OiBmdW5jdGlvbiBmaW5kUHJldk9wdGlvbkluZGV4KGluZGV4KSB7XG4gICAgICB2YXIgX3RoaXMxMCA9IHRoaXM7XG4gICAgICB2YXIgbWF0Y2hlZE9wdGlvbkluZGV4ID0gaW5kZXggPiAwID8gT2JqZWN0VXRpbHMuZmluZExhc3RJbmRleCh0aGlzLnZpc2libGVPcHRpb25zLnNsaWNlKDAsIGluZGV4KSwgZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICByZXR1cm4gX3RoaXMxMC5pc1ZhbGlkT3B0aW9uKG9wdGlvbik7XG4gICAgICB9KSA6IC0xO1xuICAgICAgcmV0dXJuIG1hdGNoZWRPcHRpb25JbmRleCA+IC0xID8gbWF0Y2hlZE9wdGlvbkluZGV4IDogaW5kZXg7XG4gICAgfSxcbiAgICBmaW5kU2VsZWN0ZWRPcHRpb25JbmRleDogZnVuY3Rpb24gZmluZFNlbGVjdGVkT3B0aW9uSW5kZXgoKSB7XG4gICAgICB2YXIgX3RoaXMxMSA9IHRoaXM7XG4gICAgICByZXR1cm4gdGhpcy5oYXNTZWxlY3RlZE9wdGlvbiA/IHRoaXMudmlzaWJsZU9wdGlvbnMuZmluZEluZGV4KGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMTEuaXNWYWxpZFNlbGVjdGVkT3B0aW9uKG9wdGlvbik7XG4gICAgICB9KSA6IC0xO1xuICAgIH0sXG4gICAgZmluZEZpcnN0Rm9jdXNlZE9wdGlvbkluZGV4OiBmdW5jdGlvbiBmaW5kRmlyc3RGb2N1c2VkT3B0aW9uSW5kZXgoKSB7XG4gICAgICB2YXIgc2VsZWN0ZWRJbmRleCA9IHRoaXMuZmluZFNlbGVjdGVkT3B0aW9uSW5kZXgoKTtcbiAgICAgIHJldHVybiBzZWxlY3RlZEluZGV4IDwgMCA/IHRoaXMuZmluZEZpcnN0T3B0aW9uSW5kZXgoKSA6IHNlbGVjdGVkSW5kZXg7XG4gICAgfSxcbiAgICBmaW5kTGFzdEZvY3VzZWRPcHRpb25JbmRleDogZnVuY3Rpb24gZmluZExhc3RGb2N1c2VkT3B0aW9uSW5kZXgoKSB7XG4gICAgICB2YXIgc2VsZWN0ZWRJbmRleCA9IHRoaXMuZmluZFNlbGVjdGVkT3B0aW9uSW5kZXgoKTtcbiAgICAgIHJldHVybiBzZWxlY3RlZEluZGV4IDwgMCA/IHRoaXMuZmluZExhc3RPcHRpb25JbmRleCgpIDogc2VsZWN0ZWRJbmRleDtcbiAgICB9LFxuICAgIHNlYXJjaE9wdGlvbnM6IGZ1bmN0aW9uIHNlYXJjaE9wdGlvbnMoZXZlbnQsIF9jaGFyKSB7XG4gICAgICB2YXIgX3RoaXMxMiA9IHRoaXM7XG4gICAgICB0aGlzLnNlYXJjaFZhbHVlID0gKHRoaXMuc2VhcmNoVmFsdWUgfHwgJycpICsgX2NoYXI7XG4gICAgICB2YXIgb3B0aW9uSW5kZXggPSAtMTtcbiAgICAgIHZhciBtYXRjaGVkID0gZmFsc2U7XG4gICAgICBpZiAoT2JqZWN0VXRpbHMuaXNOb3RFbXB0eSh0aGlzLnNlYXJjaFZhbHVlKSkge1xuICAgICAgICBpZiAodGhpcy5mb2N1c2VkT3B0aW9uSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgb3B0aW9uSW5kZXggPSB0aGlzLnZpc2libGVPcHRpb25zLnNsaWNlKHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KS5maW5kSW5kZXgoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMTIuaXNPcHRpb25NYXRjaGVkKG9wdGlvbik7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgb3B0aW9uSW5kZXggPSBvcHRpb25JbmRleCA9PT0gLTEgPyB0aGlzLnZpc2libGVPcHRpb25zLnNsaWNlKDAsIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4KS5maW5kSW5kZXgoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMTIuaXNPcHRpb25NYXRjaGVkKG9wdGlvbik7XG4gICAgICAgICAgfSkgOiBvcHRpb25JbmRleCArIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdGlvbkluZGV4ID0gdGhpcy52aXNpYmxlT3B0aW9ucy5maW5kSW5kZXgoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMTIuaXNPcHRpb25NYXRjaGVkKG9wdGlvbik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIG1hdGNoZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25JbmRleCA9PT0gLTEgJiYgdGhpcy5mb2N1c2VkT3B0aW9uSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgb3B0aW9uSW5kZXggPSB0aGlzLmZpbmRGaXJzdEZvY3VzZWRPcHRpb25JbmRleCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICB0aGlzLmNoYW5nZUZvY3VzZWRPcHRpb25JbmRleChldmVudCwgb3B0aW9uSW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZWFyY2hUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNlYXJjaFRpbWVvdXQpO1xuICAgICAgfVxuICAgICAgdGhpcy5zZWFyY2hUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMTIuc2VhcmNoVmFsdWUgPSAnJztcbiAgICAgICAgX3RoaXMxMi5zZWFyY2hUaW1lb3V0ID0gbnVsbDtcbiAgICAgIH0sIDUwMCk7XG4gICAgICByZXR1cm4gbWF0Y2hlZDtcbiAgICB9LFxuICAgIGNoYW5nZUZvY3VzZWRPcHRpb25JbmRleDogZnVuY3Rpb24gY2hhbmdlRm9jdXNlZE9wdGlvbkluZGV4KGV2ZW50LCBpbmRleCkge1xuICAgICAgaWYgKHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICB0aGlzLmZvY3VzZWRPcHRpb25JbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLnNjcm9sbEluVmlldygpO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RPbkZvY3VzKSB7XG4gICAgICAgICAgdGhpcy5vbk9wdGlvblNlbGVjdChldmVudCwgdGhpcy52aXNpYmxlT3B0aW9uc1tpbmRleF0sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc2Nyb2xsSW5WaWV3OiBmdW5jdGlvbiBzY3JvbGxJblZpZXcoKSB7XG4gICAgICB2YXIgX3RoaXMxMyA9IHRoaXM7XG4gICAgICB2YXIgaW5kZXggPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IC0xO1xuICAgICAgdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaWQgPSBpbmRleCAhPT0gLTEgPyBcIlwiLmNvbmNhdChfdGhpczEzLmlkLCBcIl9cIikuY29uY2F0KGluZGV4KSA6IF90aGlzMTMuZm9jdXNlZE9wdGlvbklkO1xuICAgICAgICB2YXIgZWxlbWVudCA9IERvbUhhbmRsZXIuZmluZFNpbmdsZShfdGhpczEzLmxpc3QsIFwibGlbaWQ9XFxcIlwiLmNvbmNhdChpZCwgXCJcXFwiXVwiKSk7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyAmJiBlbGVtZW50LnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICAgIGJsb2NrOiAnbmVhcmVzdCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICghX3RoaXMxMy52aXJ0dWFsU2Nyb2xsZXJEaXNhYmxlZCkge1xuICAgICAgICAgIF90aGlzMTMudmlydHVhbFNjcm9sbGVyICYmIF90aGlzMTMudmlydHVhbFNjcm9sbGVyLnNjcm9sbFRvSW5kZXgoaW5kZXggIT09IC0xID8gaW5kZXggOiBfdGhpczEzLmZvY3VzZWRPcHRpb25JbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYXV0b1VwZGF0ZU1vZGVsOiBmdW5jdGlvbiBhdXRvVXBkYXRlTW9kZWwoKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RPbkZvY3VzICYmIHRoaXMuYXV0b09wdGlvbkZvY3VzICYmICF0aGlzLmhhc1NlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4ID0gdGhpcy5maW5kRmlyc3RGb2N1c2VkT3B0aW9uSW5kZXgoKTtcbiAgICAgICAgdGhpcy5vbk9wdGlvblNlbGVjdChudWxsLCB0aGlzLnZpc2libGVPcHRpb25zW3RoaXMuZm9jdXNlZE9wdGlvbkluZGV4XSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlTW9kZWw6IGZ1bmN0aW9uIHVwZGF0ZU1vZGVsKGV2ZW50LCB2YWx1ZSkge1xuICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCB2YWx1ZSk7XG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7XG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZmxhdE9wdGlvbnM6IGZ1bmN0aW9uIGZsYXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgIHZhciBfdGhpczE0ID0gdGhpcztcbiAgICAgIHJldHVybiAob3B0aW9ucyB8fCBbXSkucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIG9wdGlvbiwgaW5kZXgpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIG9wdGlvbkdyb3VwOiBvcHRpb24sXG4gICAgICAgICAgZ3JvdXA6IHRydWUsXG4gICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgb3B0aW9uR3JvdXBDaGlsZHJlbiA9IF90aGlzMTQuZ2V0T3B0aW9uR3JvdXBDaGlsZHJlbihvcHRpb24pO1xuICAgICAgICBvcHRpb25Hcm91cENoaWxkcmVuICYmIG9wdGlvbkdyb3VwQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAobykge1xuICAgICAgICAgIHJldHVybiByZXN1bHQucHVzaChvKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9LCBbXSk7XG4gICAgfSxcbiAgICBvdmVybGF5UmVmOiBmdW5jdGlvbiBvdmVybGF5UmVmKGVsKSB7XG4gICAgICB0aGlzLm92ZXJsYXkgPSBlbDtcbiAgICB9LFxuICAgIGxpc3RSZWY6IGZ1bmN0aW9uIGxpc3RSZWYoZWwsIGNvbnRlbnRSZWYpIHtcbiAgICAgIHRoaXMubGlzdCA9IGVsO1xuICAgICAgY29udGVudFJlZiAmJiBjb250ZW50UmVmKGVsKTsgLy8gRm9yIFZpcnR1YWxTY3JvbGxlclxuICAgIH0sXG4gICAgdmlydHVhbFNjcm9sbGVyUmVmOiBmdW5jdGlvbiB2aXJ0dWFsU2Nyb2xsZXJSZWYoZWwpIHtcbiAgICAgIHRoaXMudmlydHVhbFNjcm9sbGVyID0gZWw7XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHZpc2libGVPcHRpb25zOiBmdW5jdGlvbiB2aXNpYmxlT3B0aW9ucygpIHtcbiAgICAgIHZhciBfdGhpczE1ID0gdGhpcztcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25Hcm91cExhYmVsID8gdGhpcy5mbGF0T3B0aW9ucyh0aGlzLm9wdGlvbnMpIDogdGhpcy5vcHRpb25zIHx8IFtdO1xuICAgICAgaWYgKHRoaXMuZmlsdGVyVmFsdWUpIHtcbiAgICAgICAgdmFyIGZpbHRlcmVkT3B0aW9ucyA9IEZpbHRlclNlcnZpY2UuZmlsdGVyKG9wdGlvbnMsIHRoaXMuc2VhcmNoRmllbGRzLCB0aGlzLmZpbHRlclZhbHVlLCB0aGlzLmZpbHRlck1hdGNoTW9kZSwgdGhpcy5maWx0ZXJMb2NhbGUpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25Hcm91cExhYmVsKSB7XG4gICAgICAgICAgdmFyIG9wdGlvbkdyb3VwcyA9IHRoaXMub3B0aW9ucyB8fCBbXTtcbiAgICAgICAgICB2YXIgZmlsdGVyZWQgPSBbXTtcbiAgICAgICAgICBvcHRpb25Hcm91cHMuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgICAgICAgIHZhciBncm91cENoaWxkcmVuID0gX3RoaXMxNS5nZXRPcHRpb25Hcm91cENoaWxkcmVuKGdyb3VwKTtcbiAgICAgICAgICAgIHZhciBmaWx0ZXJlZEl0ZW1zID0gZ3JvdXBDaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkT3B0aW9ucy5pbmNsdWRlcyhpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGZpbHRlcmVkSXRlbXMubGVuZ3RoID4gMCkgZmlsdGVyZWQucHVzaChfb2JqZWN0U3ByZWFkJDEoX29iamVjdFNwcmVhZCQxKHt9LCBncm91cCksIHt9LCBfZGVmaW5lUHJvcGVydHkkMSh7fSwgdHlwZW9mIF90aGlzMTUub3B0aW9uR3JvdXBDaGlsZHJlbiA9PT0gJ3N0cmluZycgPyBfdGhpczE1Lm9wdGlvbkdyb3VwQ2hpbGRyZW4gOiAnaXRlbXMnLCBfdG9Db25zdW1hYmxlQXJyYXkoZmlsdGVyZWRJdGVtcykpKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZmxhdE9wdGlvbnMoZmlsdGVyZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWx0ZXJlZE9wdGlvbnM7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9LFxuICAgIGhhc1NlbGVjdGVkT3B0aW9uOiBmdW5jdGlvbiBoYXNTZWxlY3RlZE9wdGlvbigpIHtcbiAgICAgIHJldHVybiBPYmplY3RVdGlscy5pc05vdEVtcHR5KHRoaXMubW9kZWxWYWx1ZSk7XG4gICAgfSxcbiAgICBsYWJlbDogZnVuY3Rpb24gbGFiZWwoKSB7XG4gICAgICB2YXIgc2VsZWN0ZWRPcHRpb25JbmRleCA9IHRoaXMuZmluZFNlbGVjdGVkT3B0aW9uSW5kZXgoKTtcbiAgICAgIHJldHVybiBzZWxlY3RlZE9wdGlvbkluZGV4ICE9PSAtMSA/IHRoaXMuZ2V0T3B0aW9uTGFiZWwodGhpcy52aXNpYmxlT3B0aW9uc1tzZWxlY3RlZE9wdGlvbkluZGV4XSkgOiB0aGlzLnBsYWNlaG9sZGVyIHx8ICdwLWVtcHR5bGFiZWwnO1xuICAgIH0sXG4gICAgZWRpdGFibGVJbnB1dFZhbHVlOiBmdW5jdGlvbiBlZGl0YWJsZUlucHV0VmFsdWUoKSB7XG4gICAgICB2YXIgc2VsZWN0ZWRPcHRpb25JbmRleCA9IHRoaXMuZmluZFNlbGVjdGVkT3B0aW9uSW5kZXgoKTtcbiAgICAgIHJldHVybiBzZWxlY3RlZE9wdGlvbkluZGV4ICE9PSAtMSA/IHRoaXMuZ2V0T3B0aW9uTGFiZWwodGhpcy52aXNpYmxlT3B0aW9uc1tzZWxlY3RlZE9wdGlvbkluZGV4XSkgOiB0aGlzLm1vZGVsVmFsdWUgfHwgJyc7XG4gICAgfSxcbiAgICBlcXVhbGl0eUtleTogZnVuY3Rpb24gZXF1YWxpdHlLZXkoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25WYWx1ZSA/IG51bGwgOiB0aGlzLmRhdGFLZXk7XG4gICAgfSxcbiAgICBzZWFyY2hGaWVsZHM6IGZ1bmN0aW9uIHNlYXJjaEZpZWxkcygpIHtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlckZpZWxkcyB8fCBbdGhpcy5vcHRpb25MYWJlbF07XG4gICAgfSxcbiAgICBmaWx0ZXJSZXN1bHRNZXNzYWdlVGV4dDogZnVuY3Rpb24gZmlsdGVyUmVzdWx0TWVzc2FnZVRleHQoKSB7XG4gICAgICByZXR1cm4gT2JqZWN0VXRpbHMuaXNOb3RFbXB0eSh0aGlzLnZpc2libGVPcHRpb25zKSA/IHRoaXMuZmlsdGVyTWVzc2FnZVRleHQucmVwbGFjZUFsbCgnezB9JywgdGhpcy52aXNpYmxlT3B0aW9ucy5sZW5ndGgpIDogdGhpcy5lbXB0eUZpbHRlck1lc3NhZ2VUZXh0O1xuICAgIH0sXG4gICAgZmlsdGVyTWVzc2FnZVRleHQ6IGZ1bmN0aW9uIGZpbHRlck1lc3NhZ2VUZXh0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyTWVzc2FnZSB8fCB0aGlzLiRwcmltZXZ1ZS5jb25maWcubG9jYWxlLnNlYXJjaE1lc3NhZ2UgfHwgJyc7XG4gICAgfSxcbiAgICBlbXB0eUZpbHRlck1lc3NhZ2VUZXh0OiBmdW5jdGlvbiBlbXB0eUZpbHRlck1lc3NhZ2VUZXh0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZW1wdHlGaWx0ZXJNZXNzYWdlIHx8IHRoaXMuJHByaW1ldnVlLmNvbmZpZy5sb2NhbGUuZW1wdHlTZWFyY2hNZXNzYWdlIHx8IHRoaXMuJHByaW1ldnVlLmNvbmZpZy5sb2NhbGUuZW1wdHlGaWx0ZXJNZXNzYWdlIHx8ICcnO1xuICAgIH0sXG4gICAgZW1wdHlNZXNzYWdlVGV4dDogZnVuY3Rpb24gZW1wdHlNZXNzYWdlVGV4dCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtcHR5TWVzc2FnZSB8fCB0aGlzLiRwcmltZXZ1ZS5jb25maWcubG9jYWxlLmVtcHR5TWVzc2FnZSB8fCAnJztcbiAgICB9LFxuICAgIHNlbGVjdGlvbk1lc3NhZ2VUZXh0OiBmdW5jdGlvbiBzZWxlY3Rpb25NZXNzYWdlVGV4dCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbk1lc3NhZ2UgfHwgdGhpcy4kcHJpbWV2dWUuY29uZmlnLmxvY2FsZS5zZWxlY3Rpb25NZXNzYWdlIHx8ICcnO1xuICAgIH0sXG4gICAgZW1wdHlTZWxlY3Rpb25NZXNzYWdlVGV4dDogZnVuY3Rpb24gZW1wdHlTZWxlY3Rpb25NZXNzYWdlVGV4dCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtcHR5U2VsZWN0aW9uTWVzc2FnZSB8fCB0aGlzLiRwcmltZXZ1ZS5jb25maWcubG9jYWxlLmVtcHR5U2VsZWN0aW9uTWVzc2FnZSB8fCAnJztcbiAgICB9LFxuICAgIHNlbGVjdGVkTWVzc2FnZVRleHQ6IGZ1bmN0aW9uIHNlbGVjdGVkTWVzc2FnZVRleHQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYXNTZWxlY3RlZE9wdGlvbiA/IHRoaXMuc2VsZWN0aW9uTWVzc2FnZVRleHQucmVwbGFjZUFsbCgnezB9JywgJzEnKSA6IHRoaXMuZW1wdHlTZWxlY3Rpb25NZXNzYWdlVGV4dDtcbiAgICB9LFxuICAgIGxpc3RBcmlhTGFiZWw6IGZ1bmN0aW9uIGxpc3RBcmlhTGFiZWwoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kcHJpbWV2dWUuY29uZmlnLmxvY2FsZS5hcmlhID8gdGhpcy4kcHJpbWV2dWUuY29uZmlnLmxvY2FsZS5hcmlhLmxpc3RMYWJlbCA6IHVuZGVmaW5lZDtcbiAgICB9LFxuICAgIGZvY3VzZWRPcHRpb25JZDogZnVuY3Rpb24gZm9jdXNlZE9wdGlvbklkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZm9jdXNlZE9wdGlvbkluZGV4ICE9PSAtMSA/IFwiXCIuY29uY2F0KHRoaXMuaWQsIFwiX1wiKS5jb25jYXQodGhpcy5mb2N1c2VkT3B0aW9uSW5kZXgpIDogbnVsbDtcbiAgICB9LFxuICAgIGFyaWFTZXRTaXplOiBmdW5jdGlvbiBhcmlhU2V0U2l6ZSgpIHtcbiAgICAgIHZhciBfdGhpczE2ID0gdGhpcztcbiAgICAgIHJldHVybiB0aGlzLnZpc2libGVPcHRpb25zLmZpbHRlcihmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgIHJldHVybiAhX3RoaXMxNi5pc09wdGlvbkdyb3VwKG9wdGlvbik7XG4gICAgICB9KS5sZW5ndGg7XG4gICAgfSxcbiAgICB2aXJ0dWFsU2Nyb2xsZXJEaXNhYmxlZDogZnVuY3Rpb24gdmlydHVhbFNjcm9sbGVyRGlzYWJsZWQoKSB7XG4gICAgICByZXR1cm4gIXRoaXMudmlydHVhbFNjcm9sbGVyT3B0aW9ucztcbiAgICB9XG4gIH0sXG4gIGRpcmVjdGl2ZXM6IHtcbiAgICByaXBwbGU6IFJpcHBsZVxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgVmlydHVhbFNjcm9sbGVyOiBWaXJ0dWFsU2Nyb2xsZXIsXG4gICAgUG9ydGFsOiBQb3J0YWwsXG4gICAgVGltZXNJY29uOiBUaW1lc0ljb24sXG4gICAgQ2hldnJvbkRvd25JY29uOiBDaGV2cm9uRG93bkljb24sXG4gICAgU3Bpbm5lckljb246IFNwaW5uZXJJY29uLFxuICAgIFNlYXJjaEljb246IFNlYXJjaEljb24sXG4gICAgQ2hlY2tJY29uOiBDaGVja0ljb24sXG4gICAgQmxhbmtJY29uOiBCbGFua0ljb25cbiAgfVxufTtcblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gb3duS2V5cyhlLCByKSB7IHZhciB0ID0gT2JqZWN0LmtleXMoZSk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBvID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTsgciAmJiAobyA9IG8uZmlsdGVyKGZ1bmN0aW9uIChyKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIHIpLmVudW1lcmFibGU7IH0pKSwgdC5wdXNoLmFwcGx5KHQsIG8pOyB9IHJldHVybiB0OyB9XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKGUpIHsgZm9yICh2YXIgciA9IDE7IHIgPCBhcmd1bWVudHMubGVuZ3RoOyByKyspIHsgdmFyIHQgPSBudWxsICE9IGFyZ3VtZW50c1tyXSA/IGFyZ3VtZW50c1tyXSA6IHt9OyByICUgMiA/IG93bktleXMoT2JqZWN0KHQpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAocikgeyBfZGVmaW5lUHJvcGVydHkoZSwgciwgdFtyXSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0KSkgOiBvd25LZXlzKE9iamVjdCh0KSkuZm9yRWFjaChmdW5jdGlvbiAocikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCByKSk7IH0pOyB9IHJldHVybiBlOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGtleSA9IF90b1Byb3BlcnR5S2V5KGtleSk7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBTdHJpbmcoaSk7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG52YXIgX2hvaXN0ZWRfMSA9IFtcImlkXCJdO1xudmFyIF9ob2lzdGVkXzIgPSBbXCJpZFwiLCBcInZhbHVlXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJ0YWJpbmRleFwiLCBcImRpc2FibGVkXCIsIFwiYXJpYS1sYWJlbFwiLCBcImFyaWEtbGFiZWxsZWRieVwiLCBcImFyaWEtZXhwYW5kZWRcIiwgXCJhcmlhLWNvbnRyb2xzXCIsIFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCIsIFwiYXJpYS1pbnZhbGlkXCJdO1xudmFyIF9ob2lzdGVkXzMgPSBbXCJpZFwiLCBcInRhYmluZGV4XCIsIFwiYXJpYS1sYWJlbFwiLCBcImFyaWEtbGFiZWxsZWRieVwiLCBcImFyaWEtZXhwYW5kZWRcIiwgXCJhcmlhLWNvbnRyb2xzXCIsIFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCIsIFwiYXJpYS1kaXNhYmxlZFwiXTtcbnZhciBfaG9pc3RlZF80ID0gW1widmFsdWVcIiwgXCJwbGFjZWhvbGRlclwiLCBcImFyaWEtb3duc1wiLCBcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiXTtcbnZhciBfaG9pc3RlZF81ID0gW1wiaWRcIiwgXCJhcmlhLWxhYmVsXCJdO1xudmFyIF9ob2lzdGVkXzYgPSBbXCJpZFwiXTtcbnZhciBfaG9pc3RlZF83ID0gW1wiaWRcIiwgXCJhcmlhLWxhYmVsXCIsIFwiYXJpYS1zZWxlY3RlZFwiLCBcImFyaWEtZGlzYWJsZWRcIiwgXCJhcmlhLXNldHNpemVcIiwgXCJhcmlhLXBvc2luc2V0XCIsIFwib25DbGlja1wiLCBcIm9uTW91c2Vtb3ZlXCIsIFwiZGF0YS1wLWhpZ2hsaWdodFwiLCBcImRhdGEtcC1mb2N1c2VkXCIsIFwiZGF0YS1wLWRpc2FibGVkXCJdO1xuZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICB2YXIgX2NvbXBvbmVudF9TcGlubmVySWNvbiA9IHJlc29sdmVDb21wb25lbnQoXCJTcGlubmVySWNvblwiKTtcbiAgdmFyIF9jb21wb25lbnRfQ2hlY2tJY29uID0gcmVzb2x2ZUNvbXBvbmVudChcIkNoZWNrSWNvblwiKTtcbiAgdmFyIF9jb21wb25lbnRfQmxhbmtJY29uID0gcmVzb2x2ZUNvbXBvbmVudChcIkJsYW5rSWNvblwiKTtcbiAgdmFyIF9jb21wb25lbnRfVmlydHVhbFNjcm9sbGVyID0gcmVzb2x2ZUNvbXBvbmVudChcIlZpcnR1YWxTY3JvbGxlclwiKTtcbiAgdmFyIF9jb21wb25lbnRfUG9ydGFsID0gcmVzb2x2ZUNvbXBvbmVudChcIlBvcnRhbFwiKTtcbiAgdmFyIF9kaXJlY3RpdmVfcmlwcGxlID0gcmVzb2x2ZURpcmVjdGl2ZShcInJpcHBsZVwiKTtcbiAgcmV0dXJuIG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgbWVyZ2VQcm9wcyh7XG4gICAgcmVmOiBcImNvbnRhaW5lclwiLFxuICAgIGlkOiAkZGF0YS5pZCxcbiAgICBcImNsYXNzXCI6IF9jdHguY3goJ3Jvb3QnKSxcbiAgICBvbkNsaWNrOiBfY2FjaGVbMTZdIHx8IChfY2FjaGVbMTZdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICRvcHRpb25zLm9uQ29udGFpbmVyQ2xpY2sgJiYgJG9wdGlvbnMub25Db250YWluZXJDbGljay5hcHBseSgkb3B0aW9ucywgYXJndW1lbnRzKTtcbiAgICB9KVxuICB9LCBfY3R4LnB0bWkoJ3Jvb3QnKSksIFtfY3R4LmVkaXRhYmxlID8gKG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soXCJpbnB1dFwiLCBtZXJnZVByb3BzKHtcbiAgICBrZXk6IDAsXG4gICAgcmVmOiBcImZvY3VzSW5wdXRcIixcbiAgICBpZDogX2N0eC5pbnB1dElkLFxuICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIFwiY2xhc3NcIjogW19jdHguY3goJ2lucHV0JyksIF9jdHguaW5wdXRDbGFzc10sXG4gICAgc3R5bGU6IF9jdHguaW5wdXRTdHlsZSxcbiAgICB2YWx1ZTogJG9wdGlvbnMuZWRpdGFibGVJbnB1dFZhbHVlLFxuICAgIHBsYWNlaG9sZGVyOiBfY3R4LnBsYWNlaG9sZGVyLFxuICAgIHRhYmluZGV4OiAhX2N0eC5kaXNhYmxlZCA/IF9jdHgudGFiaW5kZXggOiAtMSxcbiAgICBkaXNhYmxlZDogX2N0eC5kaXNhYmxlZCxcbiAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgcm9sZTogXCJjb21ib2JveFwiLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBfY3R4LmFyaWFMYWJlbCxcbiAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBfY3R4LmFyaWFMYWJlbGxlZGJ5LFxuICAgIFwiYXJpYS1oYXNwb3B1cFwiOiBcImxpc3Rib3hcIixcbiAgICBcImFyaWEtZXhwYW5kZWRcIjogJGRhdGEub3ZlcmxheVZpc2libGUsXG4gICAgXCJhcmlhLWNvbnRyb2xzXCI6ICRkYXRhLmlkICsgJ19saXN0JyxcbiAgICBcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiOiAkZGF0YS5mb2N1c2VkID8gJG9wdGlvbnMuZm9jdXNlZE9wdGlvbklkIDogdW5kZWZpbmVkLFxuICAgIFwiYXJpYS1pbnZhbGlkXCI6IF9jdHguaW52YWxpZCB8fCB1bmRlZmluZWQsXG4gICAgb25Gb2N1czogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gJG9wdGlvbnMub25Gb2N1cyAmJiAkb3B0aW9ucy5vbkZvY3VzLmFwcGx5KCRvcHRpb25zLCBhcmd1bWVudHMpO1xuICAgIH0pLFxuICAgIG9uQmx1cjogX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gJG9wdGlvbnMub25CbHVyICYmICRvcHRpb25zLm9uQmx1ci5hcHBseSgkb3B0aW9ucywgYXJndW1lbnRzKTtcbiAgICB9KSxcbiAgICBvbktleWRvd246IF9jYWNoZVsyXSB8fCAoX2NhY2hlWzJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICRvcHRpb25zLm9uS2V5RG93biAmJiAkb3B0aW9ucy5vbktleURvd24uYXBwbHkoJG9wdGlvbnMsIGFyZ3VtZW50cyk7XG4gICAgfSksXG4gICAgb25JbnB1dDogX2NhY2hlWzNdIHx8IChfY2FjaGVbM10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gJG9wdGlvbnMub25FZGl0YWJsZUlucHV0ICYmICRvcHRpb25zLm9uRWRpdGFibGVJbnB1dC5hcHBseSgkb3B0aW9ucywgYXJndW1lbnRzKTtcbiAgICB9KVxuICB9LCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIF9jdHguaW5wdXRQcm9wcyksIF9jdHgucHRtKCdpbnB1dCcpKSksIG51bGwsIDE2LCBfaG9pc3RlZF8yKSkgOiAob3BlbkJsb2NrKCksIGNyZWF0ZUVsZW1lbnRCbG9jayhcInNwYW5cIiwgbWVyZ2VQcm9wcyh7XG4gICAga2V5OiAxLFxuICAgIHJlZjogXCJmb2N1c0lucHV0XCIsXG4gICAgaWQ6IF9jdHguaW5wdXRJZCxcbiAgICBcImNsYXNzXCI6IFtfY3R4LmN4KCdpbnB1dCcpLCBfY3R4LmlucHV0Q2xhc3NdLFxuICAgIHN0eWxlOiBfY3R4LmlucHV0U3R5bGUsXG4gICAgdGFiaW5kZXg6ICFfY3R4LmRpc2FibGVkID8gX2N0eC50YWJpbmRleCA6IC0xLFxuICAgIHJvbGU6IFwiY29tYm9ib3hcIixcbiAgICBcImFyaWEtbGFiZWxcIjogX2N0eC5hcmlhTGFiZWwgfHwgKCRvcHRpb25zLmxhYmVsID09PSAncC1lbXB0eWxhYmVsJyA/IHVuZGVmaW5lZCA6ICRvcHRpb25zLmxhYmVsKSxcbiAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBfY3R4LmFyaWFMYWJlbGxlZGJ5LFxuICAgIFwiYXJpYS1oYXNwb3B1cFwiOiBcImxpc3Rib3hcIixcbiAgICBcImFyaWEtZXhwYW5kZWRcIjogJGRhdGEub3ZlcmxheVZpc2libGUsXG4gICAgXCJhcmlhLWNvbnRyb2xzXCI6ICRkYXRhLmlkICsgJ19saXN0JyxcbiAgICBcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiOiAkZGF0YS5mb2N1c2VkID8gJG9wdGlvbnMuZm9jdXNlZE9wdGlvbklkIDogdW5kZWZpbmVkLFxuICAgIFwiYXJpYS1kaXNhYmxlZFwiOiBfY3R4LmRpc2FibGVkLFxuICAgIG9uRm9jdXM6IF9jYWNoZVs0XSB8fCAoX2NhY2hlWzRdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICRvcHRpb25zLm9uRm9jdXMgJiYgJG9wdGlvbnMub25Gb2N1cy5hcHBseSgkb3B0aW9ucywgYXJndW1lbnRzKTtcbiAgICB9KSxcbiAgICBvbkJsdXI6IF9jYWNoZVs1XSB8fCAoX2NhY2hlWzVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICRvcHRpb25zLm9uQmx1ciAmJiAkb3B0aW9ucy5vbkJsdXIuYXBwbHkoJG9wdGlvbnMsIGFyZ3VtZW50cyk7XG4gICAgfSksXG4gICAgb25LZXlkb3duOiBfY2FjaGVbNl0gfHwgKF9jYWNoZVs2XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAkb3B0aW9ucy5vbktleURvd24gJiYgJG9wdGlvbnMub25LZXlEb3duLmFwcGx5KCRvcHRpb25zLCBhcmd1bWVudHMpO1xuICAgIH0pXG4gIH0sIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgX2N0eC5pbnB1dFByb3BzKSwgX2N0eC5wdG0oJ2lucHV0JykpKSwgW3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwidmFsdWVcIiwge1xuICAgIHZhbHVlOiBfY3R4Lm1vZGVsVmFsdWUsXG4gICAgcGxhY2Vob2xkZXI6IF9jdHgucGxhY2Vob2xkZXJcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBbY3JlYXRlVGV4dFZOb2RlKHRvRGlzcGxheVN0cmluZygkb3B0aW9ucy5sYWJlbCA9PT0gJ3AtZW1wdHlsYWJlbCcgPyAnwqAnIDogJG9wdGlvbnMubGFiZWwgfHwgJ2VtcHR5JyksIDEpXTtcbiAgfSldLCAxNiwgX2hvaXN0ZWRfMykpLCBfY3R4LnNob3dDbGVhciAmJiBfY3R4Lm1vZGVsVmFsdWUgIT0gbnVsbCA/IHJlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiY2xlYXJpY29uXCIsIHtcbiAgICBrZXk6IDIsXG4gICAgXCJjbGFzc1wiOiBub3JtYWxpemVDbGFzcyhfY3R4LmN4KCdjbGVhckljb24nKSksXG4gICAgb25DbGljazogJG9wdGlvbnMub25DbGVhckNsaWNrLFxuICAgIGNsZWFyQ2FsbGJhY2s6ICRvcHRpb25zLm9uQ2xlYXJDbGlja1xuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFsob3BlbkJsb2NrKCksIGNyZWF0ZUJsb2NrKHJlc29sdmVEeW5hbWljQ29tcG9uZW50KF9jdHguY2xlYXJJY29uID8gJ2knIDogJ1RpbWVzSWNvbicpLCBtZXJnZVByb3BzKHtcbiAgICAgIHJlZjogXCJjbGVhckljb25cIixcbiAgICAgIFwiY2xhc3NcIjogW19jdHguY3goJ2NsZWFySWNvbicpLCBfY3R4LmNsZWFySWNvbl0sXG4gICAgICBvbkNsaWNrOiAkb3B0aW9ucy5vbkNsZWFyQ2xpY2tcbiAgICB9LCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIF9jdHguY2xlYXJJY29uUHJvcHMpLCBfY3R4LnB0bSgnY2xlYXJJY29uJykpLCB7XG4gICAgICBcImRhdGEtcGMtc2VjdGlvblwiOiBcImNsZWFyaWNvblwiXG4gICAgfSksIG51bGwsIDE2LCBbXCJjbGFzc1wiLCBcIm9uQ2xpY2tcIl0pKV07XG4gIH0pIDogY3JlYXRlQ29tbWVudFZOb2RlKFwiXCIsIHRydWUpLCBjcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgbWVyZ2VQcm9wcyh7XG4gICAgXCJjbGFzc1wiOiBfY3R4LmN4KCd0cmlnZ2VyJylcbiAgfSwgX2N0eC5wdG0oJ3RyaWdnZXInKSksIFtfY3R4LmxvYWRpbmcgPyByZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImxvYWRpbmdpY29uXCIsIHtcbiAgICBrZXk6IDAsXG4gICAgXCJjbGFzc1wiOiBub3JtYWxpemVDbGFzcyhfY3R4LmN4KCdsb2FkaW5nSWNvbicpKVxuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFtfY3R4LmxvYWRpbmdJY29uID8gKG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soXCJzcGFuXCIsIG1lcmdlUHJvcHMoe1xuICAgICAga2V5OiAwLFxuICAgICAgXCJjbGFzc1wiOiBbX2N0eC5jeCgnbG9hZGluZ0ljb24nKSwgJ3BpLXNwaW4nLCBfY3R4LmxvYWRpbmdJY29uXSxcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9LCBfY3R4LnB0bSgnbG9hZGluZ0ljb24nKSksIG51bGwsIDE2KSkgOiAob3BlbkJsb2NrKCksIGNyZWF0ZUJsb2NrKF9jb21wb25lbnRfU3Bpbm5lckljb24sIG1lcmdlUHJvcHMoe1xuICAgICAga2V5OiAxLFxuICAgICAgXCJjbGFzc1wiOiBfY3R4LmN4KCdsb2FkaW5nSWNvbicpLFxuICAgICAgc3BpbjogXCJcIixcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9LCBfY3R4LnB0bSgnbG9hZGluZ0ljb24nKSksIG51bGwsIDE2LCBbXCJjbGFzc1wiXSkpXTtcbiAgfSkgOiByZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImRyb3Bkb3duaWNvblwiLCB7XG4gICAga2V5OiAxLFxuICAgIFwiY2xhc3NcIjogbm9ybWFsaXplQ2xhc3MoX2N0eC5jeCgnZHJvcGRvd25JY29uJykpXG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gWyhvcGVuQmxvY2soKSwgY3JlYXRlQmxvY2socmVzb2x2ZUR5bmFtaWNDb21wb25lbnQoX2N0eC5kcm9wZG93bkljb24gPyAnc3BhbicgOiAnQ2hldnJvbkRvd25JY29uJyksIG1lcmdlUHJvcHMoe1xuICAgICAgXCJjbGFzc1wiOiBbX2N0eC5jeCgnZHJvcGRvd25JY29uJyksIF9jdHguZHJvcGRvd25JY29uXSxcbiAgICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCJcbiAgICB9LCBfY3R4LnB0bSgnZHJvcGRvd25JY29uJykpLCBudWxsLCAxNiwgW1wiY2xhc3NcIl0pKV07XG4gIH0pXSwgMTYpLCBjcmVhdGVWTm9kZShfY29tcG9uZW50X1BvcnRhbCwge1xuICAgIGFwcGVuZFRvOiBfY3R4LmFwcGVuZFRvXG4gIH0sIHtcbiAgICBcImRlZmF1bHRcIjogd2l0aEN0eChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gW2NyZWF0ZVZOb2RlKFRyYW5zaXRpb24sIG1lcmdlUHJvcHMoe1xuICAgICAgICBuYW1lOiBcInAtY29ubmVjdGVkLW92ZXJsYXlcIixcbiAgICAgICAgb25FbnRlcjogJG9wdGlvbnMub25PdmVybGF5RW50ZXIsXG4gICAgICAgIG9uQWZ0ZXJFbnRlcjogJG9wdGlvbnMub25PdmVybGF5QWZ0ZXJFbnRlcixcbiAgICAgICAgb25MZWF2ZTogJG9wdGlvbnMub25PdmVybGF5TGVhdmUsXG4gICAgICAgIG9uQWZ0ZXJMZWF2ZTogJG9wdGlvbnMub25PdmVybGF5QWZ0ZXJMZWF2ZVxuICAgICAgfSwgX2N0eC5wdG0oJ3RyYW5zaXRpb24nKSksIHtcbiAgICAgICAgXCJkZWZhdWx0XCI6IHdpdGhDdHgoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBbJGRhdGEub3ZlcmxheVZpc2libGUgPyAob3BlbkJsb2NrKCksIGNyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBtZXJnZVByb3BzKHtcbiAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgIHJlZjogJG9wdGlvbnMub3ZlcmxheVJlZixcbiAgICAgICAgICAgIFwiY2xhc3NcIjogW19jdHguY3goJ3BhbmVsJyksIF9jdHgucGFuZWxDbGFzc10sXG4gICAgICAgICAgICBzdHlsZTogX2N0eC5wYW5lbFN0eWxlLFxuICAgICAgICAgICAgb25DbGljazogX2NhY2hlWzE0XSB8fCAoX2NhY2hlWzE0XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICRvcHRpb25zLm9uT3ZlcmxheUNsaWNrICYmICRvcHRpb25zLm9uT3ZlcmxheUNsaWNrLmFwcGx5KCRvcHRpb25zLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBvbktleWRvd246IF9jYWNoZVsxNV0gfHwgKF9jYWNoZVsxNV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiAkb3B0aW9ucy5vbk92ZXJsYXlLZXlEb3duICYmICRvcHRpb25zLm9uT3ZlcmxheUtleURvd24uYXBwbHkoJG9wdGlvbnMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgX2N0eC5wYW5lbFByb3BzKSwgX2N0eC5wdG0oJ3BhbmVsJykpKSwgW2NyZWF0ZUVsZW1lbnRWTm9kZShcInNwYW5cIiwgbWVyZ2VQcm9wcyh7XG4gICAgICAgICAgICByZWY6IFwiZmlyc3RIaWRkZW5Gb2N1c2FibGVFbGVtZW50T25PdmVybGF5XCIsXG4gICAgICAgICAgICByb2xlOiBcInByZXNlbnRhdGlvblwiLFxuICAgICAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwLWhpZGRlbi1hY2Nlc3NpYmxlIHAtaGlkZGVuLWZvY3VzYWJsZVwiLFxuICAgICAgICAgICAgdGFiaW5kZXg6IDAsXG4gICAgICAgICAgICBvbkZvY3VzOiBfY2FjaGVbN10gfHwgKF9jYWNoZVs3XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICRvcHRpb25zLm9uRmlyc3RIaWRkZW5Gb2N1cyAmJiAkb3B0aW9ucy5vbkZpcnN0SGlkZGVuRm9jdXMuYXBwbHkoJG9wdGlvbnMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sIF9jdHgucHRtKCdoaWRkZW5GaXJzdEZvY3VzYWJsZUVsJyksIHtcbiAgICAgICAgICAgIFwiZGF0YS1wLWhpZGRlbi1hY2Nlc3NpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcImRhdGEtcC1oaWRkZW4tZm9jdXNhYmxlXCI6IHRydWVcbiAgICAgICAgICB9KSwgbnVsbCwgMTYpLCByZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImhlYWRlclwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogX2N0eC5tb2RlbFZhbHVlLFxuICAgICAgICAgICAgb3B0aW9uczogJG9wdGlvbnMudmlzaWJsZU9wdGlvbnNcbiAgICAgICAgICB9KSwgX2N0eC5maWx0ZXIgPyAob3BlbkJsb2NrKCksIGNyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBtZXJnZVByb3BzKHtcbiAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgIFwiY2xhc3NcIjogX2N0eC5jeCgnaGVhZGVyJylcbiAgICAgICAgICB9LCBfY3R4LnB0bSgnaGVhZGVyJykpLCBbY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIG1lcmdlUHJvcHMoe1xuICAgICAgICAgICAgXCJjbGFzc1wiOiBfY3R4LmN4KCdmaWx0ZXJDb250YWluZXInKVxuICAgICAgICAgIH0sIF9jdHgucHRtKCdmaWx0ZXJDb250YWluZXInKSksIFtjcmVhdGVFbGVtZW50Vk5vZGUoXCJpbnB1dFwiLCBtZXJnZVByb3BzKHtcbiAgICAgICAgICAgIHJlZjogXCJmaWx0ZXJJbnB1dFwiLFxuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICB2YWx1ZTogJGRhdGEuZmlsdGVyVmFsdWUsXG4gICAgICAgICAgICBvblZub2RlTW91bnRlZDogX2NhY2hlWzhdIHx8IChfY2FjaGVbOF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiAkb3B0aW9ucy5vbkZpbHRlclVwZGF0ZWQgJiYgJG9wdGlvbnMub25GaWx0ZXJVcGRhdGVkLmFwcGx5KCRvcHRpb25zLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBvblZub2RlVXBkYXRlZDogX2NhY2hlWzldIHx8IChfY2FjaGVbOV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiAkb3B0aW9ucy5vbkZpbHRlclVwZGF0ZWQgJiYgJG9wdGlvbnMub25GaWx0ZXJVcGRhdGVkLmFwcGx5KCRvcHRpb25zLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBcImNsYXNzXCI6IF9jdHguY3goJ2ZpbHRlcklucHV0JyksXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogX2N0eC5maWx0ZXJQbGFjZWhvbGRlcixcbiAgICAgICAgICAgIHJvbGU6IFwic2VhcmNoYm94XCIsXG4gICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICBcImFyaWEtb3duc1wiOiAkZGF0YS5pZCArICdfbGlzdCcsXG4gICAgICAgICAgICBcImFyaWEtYWN0aXZlZGVzY2VuZGFudFwiOiAkb3B0aW9ucy5mb2N1c2VkT3B0aW9uSWQsXG4gICAgICAgICAgICBvbktleWRvd246IF9jYWNoZVsxMF0gfHwgKF9jYWNoZVsxMF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiAkb3B0aW9ucy5vbkZpbHRlcktleURvd24gJiYgJG9wdGlvbnMub25GaWx0ZXJLZXlEb3duLmFwcGx5KCRvcHRpb25zLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBvbkJsdXI6IF9jYWNoZVsxMV0gfHwgKF9jYWNoZVsxMV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiAkb3B0aW9ucy5vbkZpbHRlckJsdXIgJiYgJG9wdGlvbnMub25GaWx0ZXJCbHVyLmFwcGx5KCRvcHRpb25zLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBvbklucHV0OiBfY2FjaGVbMTJdIHx8IChfY2FjaGVbMTJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gJG9wdGlvbnMub25GaWx0ZXJDaGFuZ2UgJiYgJG9wdGlvbnMub25GaWx0ZXJDaGFuZ2UuYXBwbHkoJG9wdGlvbnMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgX2N0eC5maWx0ZXJJbnB1dFByb3BzKSwgX2N0eC5wdG0oJ2ZpbHRlcklucHV0JykpKSwgbnVsbCwgMTYsIF9ob2lzdGVkXzQpLCByZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImZpbHRlcmljb25cIiwge1xuICAgICAgICAgICAgXCJjbGFzc1wiOiBub3JtYWxpemVDbGFzcyhfY3R4LmN4KCdmaWx0ZXJJY29uJykpXG4gICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFsob3BlbkJsb2NrKCksIGNyZWF0ZUJsb2NrKHJlc29sdmVEeW5hbWljQ29tcG9uZW50KF9jdHguZmlsdGVySWNvbiA/ICdzcGFuJyA6ICdTZWFyY2hJY29uJyksIG1lcmdlUHJvcHMoe1xuICAgICAgICAgICAgICBcImNsYXNzXCI6IFtfY3R4LmN4KCdmaWx0ZXJJY29uJyksIF9jdHguZmlsdGVySWNvbl1cbiAgICAgICAgICAgIH0sIF9jdHgucHRtKCdmaWx0ZXJJY29uJykpLCBudWxsLCAxNiwgW1wiY2xhc3NcIl0pKV07XG4gICAgICAgICAgfSldLCAxNiksIGNyZWF0ZUVsZW1lbnRWTm9kZShcInNwYW5cIiwgbWVyZ2VQcm9wcyh7XG4gICAgICAgICAgICByb2xlOiBcInN0YXR1c1wiLFxuICAgICAgICAgICAgXCJhcmlhLWxpdmVcIjogXCJwb2xpdGVcIixcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwLWhpZGRlbi1hY2Nlc3NpYmxlXCJcbiAgICAgICAgICB9LCBfY3R4LnB0bSgnaGlkZGVuRmlsdGVyUmVzdWx0JyksIHtcbiAgICAgICAgICAgIFwiZGF0YS1wLWhpZGRlbi1hY2Nlc3NpYmxlXCI6IHRydWVcbiAgICAgICAgICB9KSwgdG9EaXNwbGF5U3RyaW5nKCRvcHRpb25zLmZpbHRlclJlc3VsdE1lc3NhZ2VUZXh0KSwgMTcpXSwgMTYpKSA6IGNyZWF0ZUNvbW1lbnRWTm9kZShcIlwiLCB0cnVlKSwgY3JlYXRlRWxlbWVudFZOb2RlKFwiZGl2XCIsIG1lcmdlUHJvcHMoe1xuICAgICAgICAgICAgXCJjbGFzc1wiOiBfY3R4LmN4KCd3cmFwcGVyJyksXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAnbWF4LWhlaWdodCc6ICRvcHRpb25zLnZpcnR1YWxTY3JvbGxlckRpc2FibGVkID8gX2N0eC5zY3JvbGxIZWlnaHQgOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIF9jdHgucHRtKCd3cmFwcGVyJykpLCBbY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9WaXJ0dWFsU2Nyb2xsZXIsIG1lcmdlUHJvcHMoe1xuICAgICAgICAgICAgcmVmOiAkb3B0aW9ucy52aXJ0dWFsU2Nyb2xsZXJSZWZcbiAgICAgICAgICB9LCBfY3R4LnZpcnR1YWxTY3JvbGxlck9wdGlvbnMsIHtcbiAgICAgICAgICAgIGl0ZW1zOiAkb3B0aW9ucy52aXNpYmxlT3B0aW9ucyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgIGhlaWdodDogX2N0eC5zY3JvbGxIZWlnaHRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWJpbmRleDogLTEsXG4gICAgICAgICAgICBkaXNhYmxlZDogJG9wdGlvbnMudmlydHVhbFNjcm9sbGVyRGlzYWJsZWQsXG4gICAgICAgICAgICBwdDogX2N0eC5wdG0oJ3ZpcnR1YWxTY3JvbGxlcicpXG4gICAgICAgICAgfSksIGNyZWF0ZVNsb3RzKHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHdpdGhDdHgoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgICAgICAgdmFyIHN0eWxlQ2xhc3MgPSBfcmVmLnN0eWxlQ2xhc3MsXG4gICAgICAgICAgICAgICAgY29udGVudFJlZiA9IF9yZWYuY29udGVudFJlZixcbiAgICAgICAgICAgICAgICBpdGVtcyA9IF9yZWYuaXRlbXMsXG4gICAgICAgICAgICAgICAgZ2V0SXRlbU9wdGlvbnMgPSBfcmVmLmdldEl0ZW1PcHRpb25zLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRTdHlsZSA9IF9yZWYuY29udGVudFN0eWxlLFxuICAgICAgICAgICAgICAgIGl0ZW1TaXplID0gX3JlZi5pdGVtU2l6ZTtcbiAgICAgICAgICAgICAgcmV0dXJuIFtjcmVhdGVFbGVtZW50Vk5vZGUoXCJ1bFwiLCBtZXJnZVByb3BzKHtcbiAgICAgICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihlbCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuICRvcHRpb25zLmxpc3RSZWYoZWwsIGNvbnRlbnRSZWYpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaWQ6ICRkYXRhLmlkICsgJ19saXN0JyxcbiAgICAgICAgICAgICAgICBcImNsYXNzXCI6IFtfY3R4LmN4KCdsaXN0JyksIHN0eWxlQ2xhc3NdLFxuICAgICAgICAgICAgICAgIHN0eWxlOiBjb250ZW50U3R5bGUsXG4gICAgICAgICAgICAgICAgcm9sZTogXCJsaXN0Ym94XCIsXG4gICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6ICRvcHRpb25zLmxpc3RBcmlhTGFiZWxcbiAgICAgICAgICAgICAgfSwgX2N0eC5wdG0oJ2xpc3QnKSksIFsob3BlbkJsb2NrKHRydWUpLCBjcmVhdGVFbGVtZW50QmxvY2soRnJhZ21lbnQsIG51bGwsIHJlbmRlckxpc3QoaXRlbXMsIGZ1bmN0aW9uIChvcHRpb24sIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3BlbkJsb2NrKCksIGNyZWF0ZUVsZW1lbnRCbG9jayhGcmFnbWVudCwge1xuICAgICAgICAgICAgICAgICAga2V5OiAkb3B0aW9ucy5nZXRPcHRpb25SZW5kZXJLZXkob3B0aW9uLCAkb3B0aW9ucy5nZXRPcHRpb25JbmRleChpLCBnZXRJdGVtT3B0aW9ucykpXG4gICAgICAgICAgICAgICAgfSwgWyRvcHRpb25zLmlzT3B0aW9uR3JvdXAob3B0aW9uKSA/IChvcGVuQmxvY2soKSwgY3JlYXRlRWxlbWVudEJsb2NrKFwibGlcIiwgbWVyZ2VQcm9wcyh7XG4gICAgICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgICAgICBpZDogJGRhdGEuaWQgKyAnXycgKyAkb3B0aW9ucy5nZXRPcHRpb25JbmRleChpLCBnZXRJdGVtT3B0aW9ucyksXG4gICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGl0ZW1TaXplID8gaXRlbVNpemUgKyAncHgnIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBfY3R4LmN4KCdpdGVtR3JvdXAnKSxcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwib3B0aW9uXCJcbiAgICAgICAgICAgICAgICB9LCBfY3R4LnB0bSgnaXRlbUdyb3VwJykpLCBbcmVuZGVyU2xvdChfY3R4LiRzbG90cywgXCJvcHRpb25ncm91cFwiLCB7XG4gICAgICAgICAgICAgICAgICBvcHRpb246IG9wdGlvbi5vcHRpb25Hcm91cCxcbiAgICAgICAgICAgICAgICAgIGluZGV4OiAkb3B0aW9ucy5nZXRPcHRpb25JbmRleChpLCBnZXRJdGVtT3B0aW9ucylcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW2NyZWF0ZUVsZW1lbnRWTm9kZShcInNwYW5cIiwgbWVyZ2VQcm9wcyh7XG4gICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogX2N0eC5jeCgnaXRlbUdyb3VwTGFiZWwnKVxuICAgICAgICAgICAgICAgICAgfSwgX2N0eC5wdG0oJ2l0ZW1Hcm91cExhYmVsJykpLCB0b0Rpc3BsYXlTdHJpbmcoJG9wdGlvbnMuZ2V0T3B0aW9uR3JvdXBMYWJlbChvcHRpb24ub3B0aW9uR3JvdXApKSwgMTcpXTtcbiAgICAgICAgICAgICAgICB9KV0sIDE2LCBfaG9pc3RlZF82KSkgOiB3aXRoRGlyZWN0aXZlcygob3BlbkJsb2NrKCksIGNyZWF0ZUVsZW1lbnRCbG9jayhcImxpXCIsIG1lcmdlUHJvcHMoe1xuICAgICAgICAgICAgICAgICAga2V5OiAxLFxuICAgICAgICAgICAgICAgICAgaWQ6ICRkYXRhLmlkICsgJ18nICsgJG9wdGlvbnMuZ2V0T3B0aW9uSW5kZXgoaSwgZ2V0SXRlbU9wdGlvbnMpLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBfY3R4LmN4KCdpdGVtJywge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb246IG9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNlZE9wdGlvbjogJG9wdGlvbnMuZ2V0T3B0aW9uSW5kZXgoaSwgZ2V0SXRlbU9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogaXRlbVNpemUgPyBpdGVtU2l6ZSArICdweCcgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICByb2xlOiBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6ICRvcHRpb25zLmdldE9wdGlvbkxhYmVsKG9wdGlvbiksXG4gICAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogJG9wdGlvbnMuaXNTZWxlY3RlZChvcHRpb24pLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWRpc2FibGVkXCI6ICRvcHRpb25zLmlzT3B0aW9uRGlzYWJsZWQob3B0aW9uKSxcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZXRzaXplXCI6ICRvcHRpb25zLmFyaWFTZXRTaXplLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLXBvc2luc2V0XCI6ICRvcHRpb25zLmdldEFyaWFQb3NJbnNldCgkb3B0aW9ucy5nZXRPcHRpb25JbmRleChpLCBnZXRJdGVtT3B0aW9ucykpLFxuICAgICAgICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRvcHRpb25zLm9uT3B0aW9uU2VsZWN0KCRldmVudCwgb3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlbW92ZTogZnVuY3Rpb24gb25Nb3VzZW1vdmUoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkb3B0aW9ucy5vbk9wdGlvbk1vdXNlTW92ZSgkZXZlbnQsICRvcHRpb25zLmdldE9wdGlvbkluZGV4KGksIGdldEl0ZW1PcHRpb25zKSk7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJkYXRhLXAtaGlnaGxpZ2h0XCI6ICRvcHRpb25zLmlzU2VsZWN0ZWQob3B0aW9uKSxcbiAgICAgICAgICAgICAgICAgIFwiZGF0YS1wLWZvY3VzZWRcIjogJGRhdGEuZm9jdXNlZE9wdGlvbkluZGV4ID09PSAkb3B0aW9ucy5nZXRPcHRpb25JbmRleChpLCBnZXRJdGVtT3B0aW9ucyksXG4gICAgICAgICAgICAgICAgICBcImRhdGEtcC1kaXNhYmxlZFwiOiAkb3B0aW9ucy5pc09wdGlvbkRpc2FibGVkKG9wdGlvbilcbiAgICAgICAgICAgICAgICB9LCAkb3B0aW9ucy5nZXRQVEl0ZW1PcHRpb25zKG9wdGlvbiwgZ2V0SXRlbU9wdGlvbnMsIGksICdpdGVtJykpLCBbX2N0eC5jaGVja21hcmsgPyAob3BlbkJsb2NrKCksIGNyZWF0ZUVsZW1lbnRCbG9jayhGcmFnbWVudCwge1xuICAgICAgICAgICAgICAgICAga2V5OiAwXG4gICAgICAgICAgICAgICAgfSwgWyRvcHRpb25zLmlzU2VsZWN0ZWQob3B0aW9uKSA/IChvcGVuQmxvY2soKSwgY3JlYXRlQmxvY2soX2NvbXBvbmVudF9DaGVja0ljb24sIG1lcmdlUHJvcHMoe1xuICAgICAgICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBfY3R4LmN4KCdjaGVja0ljb24nKVxuICAgICAgICAgICAgICAgIH0sIF9jdHgucHRtKCdjaGVja0ljb24nKSksIG51bGwsIDE2LCBbXCJjbGFzc1wiXSkpIDogKG9wZW5CbG9jaygpLCBjcmVhdGVCbG9jayhfY29tcG9uZW50X0JsYW5rSWNvbiwgbWVyZ2VQcm9wcyh7XG4gICAgICAgICAgICAgICAgICBrZXk6IDEsXG4gICAgICAgICAgICAgICAgICBcImNsYXNzXCI6IF9jdHguY3goJ2JsYW5rSWNvbicpXG4gICAgICAgICAgICAgICAgfSwgX2N0eC5wdG0oJ2JsYW5rSWNvbicpKSwgbnVsbCwgMTYsIFtcImNsYXNzXCJdKSldLCA2NCkpIDogY3JlYXRlQ29tbWVudFZOb2RlKFwiXCIsIHRydWUpLCByZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcIm9wdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICBvcHRpb246IG9wdGlvbixcbiAgICAgICAgICAgICAgICAgIGluZGV4OiAkb3B0aW9ucy5nZXRPcHRpb25JbmRleChpLCBnZXRJdGVtT3B0aW9ucylcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW2NyZWF0ZUVsZW1lbnRWTm9kZShcInNwYW5cIiwgbWVyZ2VQcm9wcyh7XG4gICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogX2N0eC5jeCgnaXRlbUxhYmVsJylcbiAgICAgICAgICAgICAgICAgIH0sIF9jdHgucHRtKCdpdGVtTGFiZWwnKSksIHRvRGlzcGxheVN0cmluZygkb3B0aW9ucy5nZXRPcHRpb25MYWJlbChvcHRpb24pKSwgMTcpXTtcbiAgICAgICAgICAgICAgICB9KV0sIDE2LCBfaG9pc3RlZF83KSksIFtbX2RpcmVjdGl2ZV9yaXBwbGVdXSldLCA2NCk7XG4gICAgICAgICAgICAgIH0pLCAxMjgpKSwgJGRhdGEuZmlsdGVyVmFsdWUgJiYgKCFpdGVtcyB8fCBpdGVtcyAmJiBpdGVtcy5sZW5ndGggPT09IDApID8gKG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soXCJsaVwiLCBtZXJnZVByb3BzKHtcbiAgICAgICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICAgICAgXCJjbGFzc1wiOiBfY3R4LmN4KCdlbXB0eU1lc3NhZ2UnKSxcbiAgICAgICAgICAgICAgICByb2xlOiBcIm9wdGlvblwiXG4gICAgICAgICAgICAgIH0sIF9jdHgucHRtKCdlbXB0eU1lc3NhZ2UnKSwge1xuICAgICAgICAgICAgICAgIFwiZGF0YS1wLWhpZGRlbi1hY2Nlc3NpYmxlXCI6IHRydWVcbiAgICAgICAgICAgICAgfSksIFtyZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImVtcHR5ZmlsdGVyXCIsIHt9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtjcmVhdGVUZXh0Vk5vZGUodG9EaXNwbGF5U3RyaW5nKCRvcHRpb25zLmVtcHR5RmlsdGVyTWVzc2FnZVRleHQpLCAxKV07XG4gICAgICAgICAgICAgIH0pXSwgMTYpKSA6ICFfY3R4Lm9wdGlvbnMgfHwgX2N0eC5vcHRpb25zICYmIF9jdHgub3B0aW9ucy5sZW5ndGggPT09IDAgPyAob3BlbkJsb2NrKCksIGNyZWF0ZUVsZW1lbnRCbG9jayhcImxpXCIsIG1lcmdlUHJvcHMoe1xuICAgICAgICAgICAgICAgIGtleTogMSxcbiAgICAgICAgICAgICAgICBcImNsYXNzXCI6IF9jdHguY3goJ2VtcHR5TWVzc2FnZScpLFxuICAgICAgICAgICAgICAgIHJvbGU6IFwib3B0aW9uXCJcbiAgICAgICAgICAgICAgfSwgX2N0eC5wdG0oJ2VtcHR5TWVzc2FnZScpLCB7XG4gICAgICAgICAgICAgICAgXCJkYXRhLXAtaGlkZGVuLWFjY2Vzc2libGVcIjogdHJ1ZVxuICAgICAgICAgICAgICB9KSwgW3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiZW1wdHlcIiwge30sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW2NyZWF0ZVRleHRWTm9kZSh0b0Rpc3BsYXlTdHJpbmcoJG9wdGlvbnMuZW1wdHlNZXNzYWdlVGV4dCksIDEpXTtcbiAgICAgICAgICAgICAgfSldLCAxNikpIDogY3JlYXRlQ29tbWVudFZOb2RlKFwiXCIsIHRydWUpXSwgMTYsIF9ob2lzdGVkXzUpXTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXzogMlxuICAgICAgICAgIH0sIFtfY3R4LiRzbG90cy5sb2FkZXIgPyB7XG4gICAgICAgICAgICBuYW1lOiBcImxvYWRlclwiLFxuICAgICAgICAgICAgZm46IHdpdGhDdHgoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgICAgIHZhciBvcHRpb25zID0gX3JlZjIub3B0aW9ucztcbiAgICAgICAgICAgICAgcmV0dXJuIFtyZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImxvYWRlclwiLCB7XG4gICAgICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGtleTogXCIwXCJcbiAgICAgICAgICB9IDogdW5kZWZpbmVkXSksIDEwNDAsIFtcIml0ZW1zXCIsIFwic3R5bGVcIiwgXCJkaXNhYmxlZFwiLCBcInB0XCJdKV0sIDE2KSwgcmVuZGVyU2xvdChfY3R4LiRzbG90cywgXCJmb290ZXJcIiwge1xuICAgICAgICAgICAgdmFsdWU6IF9jdHgubW9kZWxWYWx1ZSxcbiAgICAgICAgICAgIG9wdGlvbnM6ICRvcHRpb25zLnZpc2libGVPcHRpb25zXG4gICAgICAgICAgfSksICFfY3R4Lm9wdGlvbnMgfHwgX2N0eC5vcHRpb25zICYmIF9jdHgub3B0aW9ucy5sZW5ndGggPT09IDAgPyAob3BlbkJsb2NrKCksIGNyZWF0ZUVsZW1lbnRCbG9jayhcInNwYW5cIiwgbWVyZ2VQcm9wcyh7XG4gICAgICAgICAgICBrZXk6IDEsXG4gICAgICAgICAgICByb2xlOiBcInN0YXR1c1wiLFxuICAgICAgICAgICAgXCJhcmlhLWxpdmVcIjogXCJwb2xpdGVcIixcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwLWhpZGRlbi1hY2Nlc3NpYmxlXCJcbiAgICAgICAgICB9LCBfY3R4LnB0bSgnaGlkZGVuRW1wdHlNZXNzYWdlJyksIHtcbiAgICAgICAgICAgIFwiZGF0YS1wLWhpZGRlbi1hY2Nlc3NpYmxlXCI6IHRydWVcbiAgICAgICAgICB9KSwgdG9EaXNwbGF5U3RyaW5nKCRvcHRpb25zLmVtcHR5TWVzc2FnZVRleHQpLCAxNykpIDogY3JlYXRlQ29tbWVudFZOb2RlKFwiXCIsIHRydWUpLCBjcmVhdGVFbGVtZW50Vk5vZGUoXCJzcGFuXCIsIG1lcmdlUHJvcHMoe1xuICAgICAgICAgICAgcm9sZTogXCJzdGF0dXNcIixcbiAgICAgICAgICAgIFwiYXJpYS1saXZlXCI6IFwicG9saXRlXCIsXG4gICAgICAgICAgICBcImNsYXNzXCI6IFwicC1oaWRkZW4tYWNjZXNzaWJsZVwiXG4gICAgICAgICAgfSwgX2N0eC5wdG0oJ2hpZGRlblNlbGVjdGVkTWVzc2FnZScpLCB7XG4gICAgICAgICAgICBcImRhdGEtcC1oaWRkZW4tYWNjZXNzaWJsZVwiOiB0cnVlXG4gICAgICAgICAgfSksIHRvRGlzcGxheVN0cmluZygkb3B0aW9ucy5zZWxlY3RlZE1lc3NhZ2VUZXh0KSwgMTcpLCBjcmVhdGVFbGVtZW50Vk5vZGUoXCJzcGFuXCIsIG1lcmdlUHJvcHMoe1xuICAgICAgICAgICAgcmVmOiBcImxhc3RIaWRkZW5Gb2N1c2FibGVFbGVtZW50T25PdmVybGF5XCIsXG4gICAgICAgICAgICByb2xlOiBcInByZXNlbnRhdGlvblwiLFxuICAgICAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJwLWhpZGRlbi1hY2Nlc3NpYmxlIHAtaGlkZGVuLWZvY3VzYWJsZVwiLFxuICAgICAgICAgICAgdGFiaW5kZXg6IDAsXG4gICAgICAgICAgICBvbkZvY3VzOiBfY2FjaGVbMTNdIHx8IChfY2FjaGVbMTNdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gJG9wdGlvbnMub25MYXN0SGlkZGVuRm9jdXMgJiYgJG9wdGlvbnMub25MYXN0SGlkZGVuRm9jdXMuYXBwbHkoJG9wdGlvbnMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sIF9jdHgucHRtKCdoaWRkZW5MYXN0Rm9jdXNhYmxlRWwnKSwge1xuICAgICAgICAgICAgXCJkYXRhLXAtaGlkZGVuLWFjY2Vzc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZGF0YS1wLWhpZGRlbi1mb2N1c2FibGVcIjogdHJ1ZVxuICAgICAgICAgIH0pLCBudWxsLCAxNildLCAxNikpIDogY3JlYXRlQ29tbWVudFZOb2RlKFwiXCIsIHRydWUpXTtcbiAgICAgICAgfSksXG4gICAgICAgIF86IDNcbiAgICAgIH0sIDE2LCBbXCJvbkVudGVyXCIsIFwib25BZnRlckVudGVyXCIsIFwib25MZWF2ZVwiLCBcIm9uQWZ0ZXJMZWF2ZVwiXSldO1xuICAgIH0pLFxuICAgIF86IDNcbiAgfSwgOCwgW1wiYXBwZW5kVG9cIl0pXSwgMTYsIF9ob2lzdGVkXzEpO1xufVxuXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyO1xuXG5leHBvcnQgeyBzY3JpcHQgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IEJhc2VTdHlsZSBmcm9tICdwcmltZXZ1ZS9iYXNlL3N0eWxlJztcblxudmFyIGNsYXNzZXMgPSB7XG4gIHJvb3Q6IGZ1bmN0aW9uIHJvb3QoX3JlZikge1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXG4gICAgICBwcm9wcyA9IF9yZWYucHJvcHMsXG4gICAgICBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gICAgcmV0dXJuIFsncC1kcm9wZG93biBwLWNvbXBvbmVudCBwLWlucHV0d3JhcHBlcicsIHtcbiAgICAgICdwLWRpc2FibGVkJzogcHJvcHMuZGlzYWJsZWQsXG4gICAgICAncC1pbnZhbGlkJzogcHJvcHMuaW52YWxpZCxcbiAgICAgICdwLXZhcmlhbnQtZmlsbGVkJzogcHJvcHMudmFyaWFudCA/IHByb3BzLnZhcmlhbnQgPT09ICdmaWxsZWQnIDogaW5zdGFuY2UuJHByaW1ldnVlLmNvbmZpZy5pbnB1dFN0eWxlID09PSAnZmlsbGVkJyxcbiAgICAgICdwLWRyb3Bkb3duLWNsZWFyYWJsZSc6IHByb3BzLnNob3dDbGVhcixcbiAgICAgICdwLWZvY3VzJzogc3RhdGUuZm9jdXNlZCxcbiAgICAgICdwLWlucHV0d3JhcHBlci1maWxsZWQnOiBpbnN0YW5jZS5oYXNTZWxlY3RlZE9wdGlvbixcbiAgICAgICdwLWlucHV0d3JhcHBlci1mb2N1cyc6IHN0YXRlLmZvY3VzZWQgfHwgc3RhdGUub3ZlcmxheVZpc2libGUsXG4gICAgICAncC1vdmVybGF5LW9wZW4nOiBzdGF0ZS5vdmVybGF5VmlzaWJsZVxuICAgIH1dO1xuICB9LFxuICBpbnB1dDogZnVuY3Rpb24gaW5wdXQoX3JlZjIpIHtcbiAgICB2YXIgX2luc3RhbmNlJGxhYmVsO1xuICAgIHZhciBpbnN0YW5jZSA9IF9yZWYyLmluc3RhbmNlLFxuICAgICAgcHJvcHMgPSBfcmVmMi5wcm9wcztcbiAgICByZXR1cm4gWydwLWRyb3Bkb3duLWxhYmVsIHAtaW5wdXR0ZXh0Jywge1xuICAgICAgJ3AtcGxhY2Vob2xkZXInOiAhcHJvcHMuZWRpdGFibGUgJiYgaW5zdGFuY2UubGFiZWwgPT09IHByb3BzLnBsYWNlaG9sZGVyLFxuICAgICAgJ3AtZHJvcGRvd24tbGFiZWwtZW1wdHknOiAhcHJvcHMuZWRpdGFibGUgJiYgIWluc3RhbmNlLiRzbG90c1sndmFsdWUnXSAmJiAoaW5zdGFuY2UubGFiZWwgPT09ICdwLWVtcHR5bGFiZWwnIHx8ICgoX2luc3RhbmNlJGxhYmVsID0gaW5zdGFuY2UubGFiZWwpID09PSBudWxsIHx8IF9pbnN0YW5jZSRsYWJlbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2luc3RhbmNlJGxhYmVsLmxlbmd0aCkgPT09IDApXG4gICAgfV07XG4gIH0sXG4gIGNsZWFySWNvbjogJ3AtZHJvcGRvd24tY2xlYXItaWNvbicsXG4gIHRyaWdnZXI6ICdwLWRyb3Bkb3duLXRyaWdnZXInLFxuICBsb2FkaW5naWNvbjogJ3AtZHJvcGRvd24tdHJpZ2dlci1pY29uJyxcbiAgZHJvcGRvd25JY29uOiAncC1kcm9wZG93bi10cmlnZ2VyLWljb24nLFxuICBwYW5lbDogZnVuY3Rpb24gcGFuZWwoX3JlZjMpIHtcbiAgICBfcmVmMy5wcm9wcztcbiAgICAgIHZhciBpbnN0YW5jZSA9IF9yZWYzLmluc3RhbmNlO1xuICAgIHJldHVybiBbJ3AtZHJvcGRvd24tcGFuZWwgcC1jb21wb25lbnQnLCB7XG4gICAgICAncC1yaXBwbGUtZGlzYWJsZWQnOiBpbnN0YW5jZS4kcHJpbWV2dWUuY29uZmlnLnJpcHBsZSA9PT0gZmFsc2VcbiAgICB9XTtcbiAgfSxcbiAgaGVhZGVyOiAncC1kcm9wZG93bi1oZWFkZXInLFxuICBmaWx0ZXJDb250YWluZXI6ICdwLWRyb3Bkb3duLWZpbHRlci1jb250YWluZXInLFxuICBmaWx0ZXJJbnB1dDogZnVuY3Rpb24gZmlsdGVySW5wdXQoX3JlZjQpIHtcbiAgICB2YXIgcHJvcHMgPSBfcmVmNC5wcm9wcyxcbiAgICAgIGluc3RhbmNlID0gX3JlZjQuaW5zdGFuY2U7XG4gICAgcmV0dXJuIFsncC1kcm9wZG93bi1maWx0ZXIgcC1pbnB1dHRleHQgcC1jb21wb25lbnQnLCB7XG4gICAgICAncC12YXJpYW50LWZpbGxlZCc6IHByb3BzLnZhcmlhbnQgPyBwcm9wcy52YXJpYW50ID09PSAnZmlsbGVkJyA6IGluc3RhbmNlLiRwcmltZXZ1ZS5jb25maWcuaW5wdXRTdHlsZSA9PT0gJ2ZpbGxlZCdcbiAgICB9XTtcbiAgfSxcbiAgZmlsdGVySWNvbjogJ3AtZHJvcGRvd24tZmlsdGVyLWljb24nLFxuICB3cmFwcGVyOiAncC1kcm9wZG93bi1pdGVtcy13cmFwcGVyJyxcbiAgbGlzdDogJ3AtZHJvcGRvd24taXRlbXMnLFxuICBpdGVtR3JvdXA6ICdwLWRyb3Bkb3duLWl0ZW0tZ3JvdXAnLFxuICBpdGVtR3JvdXBMYWJlbDogJ3AtZHJvcGRvd24taXRlbS1ncm91cC1sYWJlbCcsXG4gIGl0ZW06IGZ1bmN0aW9uIGl0ZW0oX3JlZjUpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBfcmVmNS5pbnN0YW5jZSxcbiAgICAgIHByb3BzID0gX3JlZjUucHJvcHMsXG4gICAgICBzdGF0ZSA9IF9yZWY1LnN0YXRlLFxuICAgICAgb3B0aW9uID0gX3JlZjUub3B0aW9uLFxuICAgICAgZm9jdXNlZE9wdGlvbiA9IF9yZWY1LmZvY3VzZWRPcHRpb247XG4gICAgcmV0dXJuIFsncC1kcm9wZG93bi1pdGVtJywge1xuICAgICAgJ3AtaGlnaGxpZ2h0JzogaW5zdGFuY2UuaXNTZWxlY3RlZChvcHRpb24pICYmIHByb3BzLmhpZ2hsaWdodE9uU2VsZWN0LFxuICAgICAgJ3AtZm9jdXMnOiBzdGF0ZS5mb2N1c2VkT3B0aW9uSW5kZXggPT09IGZvY3VzZWRPcHRpb24sXG4gICAgICAncC1kaXNhYmxlZCc6IGluc3RhbmNlLmlzT3B0aW9uRGlzYWJsZWQob3B0aW9uKVxuICAgIH1dO1xuICB9LFxuICBpdGVtTGFiZWw6ICdwLWRyb3Bkb3duLWl0ZW0tbGFiZWwnLFxuICBjaGVja0ljb246ICdwLWRyb3Bkb3duLWNoZWNrLWljb24nLFxuICBibGFua0ljb246ICdwLWRyb3Bkb3duLWJsYW5rLWljb24nLFxuICBlbXB0eU1lc3NhZ2U6ICdwLWRyb3Bkb3duLWVtcHR5LW1lc3NhZ2UnXG59O1xudmFyIERyb3Bkb3duU3R5bGUgPSBCYXNlU3R5bGUuZXh0ZW5kKHtcbiAgbmFtZTogJ2Ryb3Bkb3duJyxcbiAgY2xhc3NlczogY2xhc3Nlc1xufSk7XG5cbmV4cG9ydCB7IERyb3Bkb3duU3R5bGUgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IEJhc2VJY29uIGZyb20gJ3ByaW1ldnVlL2Jhc2VpY29uJztcbmltcG9ydCB7IG9wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrLCBtZXJnZVByb3BzLCBjcmVhdGVFbGVtZW50Vk5vZGUgfSBmcm9tICd2dWUnO1xuXG52YXIgc2NyaXB0ID0ge1xuICBuYW1lOiAnQmxhbmtJY29uJyxcbiAgXCJleHRlbmRzXCI6IEJhc2VJY29uXG59O1xuXG52YXIgX2hvaXN0ZWRfMSA9IC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50Vk5vZGUoXCJyZWN0XCIsIHtcbiAgd2lkdGg6IFwiMVwiLFxuICBoZWlnaHQ6IFwiMVwiLFxuICBmaWxsOiBcImN1cnJlbnRDb2xvclwiLFxuICBcImZpbGwtb3BhY2l0eVwiOiBcIjBcIlxufSwgbnVsbCwgLTEpO1xudmFyIF9ob2lzdGVkXzIgPSBbX2hvaXN0ZWRfMV07XG5mdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiBvcGVuQmxvY2soKSwgY3JlYXRlRWxlbWVudEJsb2NrKFwic3ZnXCIsIG1lcmdlUHJvcHMoe1xuICAgIHdpZHRoOiBcIjE0XCIsXG4gICAgaGVpZ2h0OiBcIjE0XCIsXG4gICAgdmlld0JveDogXCIwIDAgMTQgMTRcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIF9jdHgucHRpKCkpLCBfaG9pc3RlZF8yLCAxNik7XG59XG5cbnNjcmlwdC5yZW5kZXIgPSByZW5kZXI7XG5cbmV4cG9ydCB7IHNjcmlwdCBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgQmFzZUljb24gZnJvbSAncHJpbWV2dWUvYmFzZWljb24nO1xuaW1wb3J0IHsgb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2ssIG1lcmdlUHJvcHMsIGNyZWF0ZUVsZW1lbnRWTm9kZSB9IGZyb20gJ3Z1ZSc7XG5cbnZhciBzY3JpcHQgPSB7XG4gIG5hbWU6ICdDaGV2cm9uRG93bkljb24nLFxuICBcImV4dGVuZHNcIjogQmFzZUljb25cbn07XG5cbnZhciBfaG9pc3RlZF8xID0gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnRWTm9kZShcInBhdGhcIiwge1xuICBkOiBcIk03LjAxNzQ0IDEwLjM5OEM2LjkxMjY5IDEwLjM5ODUgNi44MDg5IDEwLjM3OCA2LjcxMjE1IDEwLjMzNzlDNi42MTU0MSAxMC4yOTc3IDYuNTI3NjYgMTAuMjM4NiA2LjQ1NDA1IDEwLjE2NDFMMS4xMzkwNyA0Ljg0OTEzQzEuMDMzMDYgNC42OTQwNCAwLjk4NTIyMSA0LjUwNjUgMS4wMDM5OSA0LjMxOTU4QzEuMDIyNzYgNC4xMzI2NiAxLjEwNjkzIDMuOTU4MzggMS4yNDE2NiAzLjgyNzQ3QzEuMzc2MzkgMy42OTY1NSAxLjU1MzAxIDMuNjE3NDIgMS43NDAzOSAzLjYwNDAyQzEuOTI3NzcgMy41OTA2MiAyLjExMzg2IDMuNjQzODIgMi4yNjU4NCAzLjc1NDI0TDcuMDE3NDQgOC40NzM5NEwxMS43NjkgMy43NTQyNEMxMS45MTg5IDMuNjU3MDkgMTIuMDk3IDMuNjEzMDYgMTIuMjc0OCAzLjYyOTIxQzEyLjQ1MjcgMy42NDUzNSAxMi42MTk5IDMuNzIwNzMgMTIuNzQ5OCAzLjg0MzI4QzEyLjg3OTcgMy45NjU4MiAxMi45NjQ3IDQuMTI4NDIgMTIuOTkxMiA0LjMwNTAyQzEzLjAxNzcgNC40ODE2MiAxMi45ODQxIDQuNjYyIDEyLjg5NTggNC44MTcyNEw3LjU4MDgzIDEwLjEzMjJDNy41MDk5NiAxMC4yMTI1IDcuNDIzNDQgMTAuMjc3NSA3LjMyNjU2IDEwLjMyMzJDNy4yMjk2OCAxMC4zNjg5IDcuMTI0NDkgMTAuMzk0NCA3LjAxNzQ0IDEwLjM5OFpcIixcbiAgZmlsbDogXCJjdXJyZW50Q29sb3JcIlxufSwgbnVsbCwgLTEpO1xudmFyIF9ob2lzdGVkXzIgPSBbX2hvaXN0ZWRfMV07XG5mdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiBvcGVuQmxvY2soKSwgY3JlYXRlRWxlbWVudEJsb2NrKFwic3ZnXCIsIG1lcmdlUHJvcHMoe1xuICAgIHdpZHRoOiBcIjE0XCIsXG4gICAgaGVpZ2h0OiBcIjE0XCIsXG4gICAgdmlld0JveDogXCIwIDAgMTQgMTRcIixcbiAgICBmaWxsOiBcIm5vbmVcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIF9jdHgucHRpKCkpLCBfaG9pc3RlZF8yLCAxNik7XG59XG5cbnNjcmlwdC5yZW5kZXIgPSByZW5kZXI7XG5cbmV4cG9ydCB7IHNjcmlwdCBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgQmFzZUljb24gZnJvbSAncHJpbWV2dWUvYmFzZWljb24nO1xuaW1wb3J0IHsgb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2ssIG1lcmdlUHJvcHMsIGNyZWF0ZUVsZW1lbnRWTm9kZSB9IGZyb20gJ3Z1ZSc7XG5cbnZhciBzY3JpcHQgPSB7XG4gIG5hbWU6ICdTZWFyY2hJY29uJyxcbiAgXCJleHRlbmRzXCI6IEJhc2VJY29uXG59O1xuXG52YXIgX2hvaXN0ZWRfMSA9IC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwYXRoXCIsIHtcbiAgXCJmaWxsLXJ1bGVcIjogXCJldmVub2RkXCIsXG4gIFwiY2xpcC1ydWxlXCI6IFwiZXZlbm9kZFwiLFxuICBkOiBcIk0yLjY3NjAyIDExLjAyNjVDMy42NjYxIDExLjY4OCA0LjgzMDExIDEyLjA0MTEgNi4wMjA4NiAxMi4wNDExQzYuODExNDkgMTIuMDQxMSA3LjU5NDM4IDExLjg4NTQgOC4zMjQ4MyAxMS41ODI4QzguODcwMDUgMTEuMzU3IDkuMzc4MDggMTEuMDUyNiA5LjgzMzE3IDEwLjY4MDNMMTIuOTc2OSAxMy44MjQxQzEzLjAzMjMgMTMuODgwMSAxMy4wOTgzIDEzLjkyNDUgMTMuMTcxIDEzLjk1NDhDMTMuMjQzOCAxMy45ODUgMTMuMzIxOSAxNC4wMDAzIDEzLjQwMDcgMTRDMTMuNDc5NSAxNC4wMDAzIDEzLjU1NzUgMTMuOTg1IDEzLjYzMDMgMTMuOTU0OEMxMy43MDMxIDEzLjkyNDUgMTMuNzY5MSAxMy44ODAxIDEzLjgyNDQgMTMuODI0MUMxMy45MzY3IDEzLjcxMTYgMTMuOTk5OCAxMy41NTkyIDEzLjk5OTggMTMuNDAwM0MxMy45OTk4IDEzLjI0MTQgMTMuOTM2NyAxMy4wODkgMTMuODI0NCAxMi45NzY1TDEwLjY4MDcgOS44MzI4QzExLjA1MyA5LjM3NzczIDExLjM1NzMgOC44Njk3MiAxMS41ODMxIDguMzI0NTJDMTEuODg1NyA3LjU5NDA4IDEyLjA0MTQgNi44MTExOSAxMi4wNDE0IDYuMDIwNTZDMTIuMDQxNCA0LjgyOTggMTEuNjg4MyAzLjY2NTc5IDExLjAyNjggMi42NzU3MkMxMC4zNjUyIDEuNjg1NjQgOS40MjQ5NCAwLjkxMzk3MiA4LjMyNDgzIDAuNDU4MjlDNy4yMjQ3MiAwLjAwMjYwODU3IDYuMDE0MTggLTAuMTE2NjE4IDQuODQ2MzEgMC4xMTU2ODZDMy42Nzg0NCAwLjM0Nzk5IDIuNjA1NjggMC45MjEzOTMgMS43NjM2OSAxLjc2MzM4QzAuOTIxNjk4IDIuNjA1MzcgMC4zNDgyOTYgMy42NzgxMyAwLjExNTk5MSA0Ljg0NjAxQy0wLjExNjMxMyA2LjAxMzg4IDAuMDAyOTEzNzUgNy4yMjQ0MSAwLjQ1ODU5NSA4LjMyNDUyQzAuOTE0Mjc3IDkuNDI0NjQgMS42ODU5NSAxMC4zNjQ5IDIuNjc2MDIgMTEuMDI2NVpNMy4zNTU2NSAyLjAxNThDNC4xNDQ1NiAxLjQ4ODY3IDUuMDcyMDYgMS4yMDczMSA2LjAyMDg2IDEuMjA3MzFDNy4yOTMxNyAxLjIwNzMxIDguNTEzMzggMS43MTI3NCA5LjQxMzA0IDIuNjEyNEMxMC4zMTI3IDMuNTEyMDYgMTAuODE4MSA0LjczMjI2IDEwLjgxODEgNi4wMDQ1N0MxMC44MTgxIDYuOTUzMzcgMTAuNTM2OCA3Ljg4MDg4IDEwLjAwOTYgOC42Njk3OEM5LjQ4MjUxIDkuNDU4NjggOC43MzMyOCAxMC4wNzM2IDcuODU2NjkgMTAuNDM2N0M2Ljk4MDExIDEwLjc5OTcgNi4wMTU1NCAxMC44OTQ3IDUuMDg0OTYgMTAuNzA5NkM0LjE1NDM5IDEwLjUyNDUgMy4yOTk2IDEwLjA2NzYgMi42Mjg2OSA5LjM5Njc0QzEuOTU3NzggOC43MjU4MyAxLjUwMDg5IDcuODcxMDQgMS4zMTU3OSA2Ljk0MDQ2QzEuMTMwNjggNi4wMDk4OSAxLjIyNTY4IDUuMDQ1MzIgMS41ODg3OCA0LjE2ODc0QzEuOTUxODcgMy4yOTIxNSAyLjU2Njc1IDIuNTQyOTIgMy4zNTU2NSAyLjAxNThaXCIsXG4gIGZpbGw6IFwiY3VycmVudENvbG9yXCJcbn0sIG51bGwsIC0xKTtcbnZhciBfaG9pc3RlZF8yID0gW19ob2lzdGVkXzFdO1xuZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gb3BlbkJsb2NrKCksIGNyZWF0ZUVsZW1lbnRCbG9jayhcInN2Z1wiLCBtZXJnZVByb3BzKHtcbiAgICB3aWR0aDogXCIxNFwiLFxuICAgIGhlaWdodDogXCIxNFwiLFxuICAgIHZpZXdCb3g6IFwiMCAwIDE0IDE0XCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICB9LCBfY3R4LnB0aSgpKSwgX2hvaXN0ZWRfMiwgMTYpO1xufVxuXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyO1xuXG5leHBvcnQgeyBzY3JpcHQgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgRXZlbnRCdXMgfSBmcm9tICdwcmltZXZ1ZS91dGlscyc7XG5cbnZhciBPdmVybGF5RXZlbnRCdXMgPSBFdmVudEJ1cygpO1xuXG5leHBvcnQgeyBPdmVybGF5RXZlbnRCdXMgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgRG9tSGFuZGxlciB9IGZyb20gJ3ByaW1ldnVlL3V0aWxzJztcbmltcG9ydCB7IHJlbmRlclNsb3QsIG9wZW5CbG9jaywgY3JlYXRlQmxvY2ssIFRlbGVwb3J0LCBjcmVhdGVDb21tZW50Vk5vZGUgfSBmcm9tICd2dWUnO1xuXG52YXIgc2NyaXB0ID0ge1xuICBuYW1lOiAnUG9ydGFsJyxcbiAgcHJvcHM6IHtcbiAgICBhcHBlbmRUbzoge1xuICAgICAgdHlwZTogW1N0cmluZywgT2JqZWN0XSxcbiAgICAgIFwiZGVmYXVsdFwiOiAnYm9keSdcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgfVxuICB9LFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtb3VudGVkOiBmYWxzZVxuICAgIH07XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5tb3VudGVkID0gRG9tSGFuZGxlci5pc0NsaWVudCgpO1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGlubGluZTogZnVuY3Rpb24gaW5saW5lKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5hcHBlbmRUbyA9PT0gJ3NlbGYnO1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gJG9wdGlvbnMuaW5saW5lID8gcmVuZGVyU2xvdChfY3R4LiRzbG90cywgXCJkZWZhdWx0XCIsIHtcbiAgICBrZXk6IDBcbiAgfSkgOiAkZGF0YS5tb3VudGVkID8gKG9wZW5CbG9jaygpLCBjcmVhdGVCbG9jayhUZWxlcG9ydCwge1xuICAgIGtleTogMSxcbiAgICB0bzogJHByb3BzLmFwcGVuZFRvXG4gIH0sIFtyZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImRlZmF1bHRcIildLCA4LCBbXCJ0b1wiXSkpIDogY3JlYXRlQ29tbWVudFZOb2RlKFwiXCIsIHRydWUpO1xufVxuXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyO1xuXG5leHBvcnQgeyBzY3JpcHQgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IEJhc2VTdHlsZSBmcm9tICdwcmltZXZ1ZS9iYXNlL3N0eWxlJztcblxudmFyIGNzcyA9IFwiXFxuQGxheWVyIHByaW1ldnVlIHtcXG4gICAgLnAtdmlydHVhbHNjcm9sbGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgICAgY29udGFpbjogc3RyaWN0O1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHNjcm9sbC1wb3NpdGlvbjtcXG4gICAgICAgIG91dGxpbmU6IDAgbm9uZTtcXG4gICAgfVxcblxcbiAgICAucC12aXJ0dWFsc2Nyb2xsZXItY29udGVudCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgLyogY29udGFpbjogY29udGVudDsgKi9cXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcbiAgICB9XFxuXFxuICAgIC5wLXZpcnR1YWxzY3JvbGxlci1zcGFjZXIge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIGhlaWdodDogMXB4O1xcbiAgICAgICAgd2lkdGg6IDFweDtcXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5wLXZpcnR1YWxzY3JvbGxlciAucC12aXJ0dWFsc2Nyb2xsZXItbG9hZGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLnAtdmlydHVhbHNjcm9sbGVyLWxvYWRlci5wLWNvbXBvbmVudC1vdmVybGF5IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnAtdmlydHVhbHNjcm9sbGVyLWxvYWRpbmctaWNvbiB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgLnAtdmlydHVhbHNjcm9sbGVyLWxvYWRpbmctaWNvbi5wLWljb24ge1xcbiAgICAgICAgd2lkdGg6IDJyZW07XFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxuICAgIH1cXG5cXG4gICAgLnAtdmlydHVhbHNjcm9sbGVyLWhvcml6b250YWwgPiAucC12aXJ0dWFsc2Nyb2xsZXItY29udGVudCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIC8qIElubGluZSAqL1xcbiAgICAucC12aXJ0dWFsc2Nyb2xsZXItaW5saW5lIC5wLXZpcnR1YWxzY3JvbGxlci1jb250ZW50IHtcXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIH1cXG59XFxuXCI7XG52YXIgVmlydHVhbFNjcm9sbGVyU3R5bGUgPSBCYXNlU3R5bGUuZXh0ZW5kKHtcbiAgbmFtZTogJ3ZpcnR1YWxzY3JvbGxlcicsXG4gIGNzczogY3NzXG59KTtcblxuZXhwb3J0IHsgVmlydHVhbFNjcm9sbGVyU3R5bGUgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IFNwaW5uZXJJY29uIGZyb20gJ3ByaW1ldnVlL2ljb25zL3NwaW5uZXInO1xuaW1wb3J0IHsgRG9tSGFuZGxlciB9IGZyb20gJ3ByaW1ldnVlL3V0aWxzJztcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJ3ByaW1ldnVlL2Jhc2Vjb21wb25lbnQnO1xuaW1wb3J0IFZpcnR1YWxTY3JvbGxlclN0eWxlIGZyb20gJ3ByaW1ldnVlL3ZpcnR1YWxzY3JvbGxlci9zdHlsZSc7XG5pbXBvcnQgeyByZXNvbHZlQ29tcG9uZW50LCBvcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jaywgbWVyZ2VQcm9wcywgcmVuZGVyU2xvdCwgY3JlYXRlRWxlbWVudFZOb2RlLCBGcmFnbWVudCwgcmVuZGVyTGlzdCwgY3JlYXRlQ29tbWVudFZOb2RlLCBjcmVhdGVWTm9kZSB9IGZyb20gJ3Z1ZSc7XG5cbnZhciBzY3JpcHQkMSA9IHtcbiAgbmFtZTogJ0Jhc2VWaXJ0dWFsU2Nyb2xsZXInLFxuICBcImV4dGVuZHNcIjogQmFzZUNvbXBvbmVudCxcbiAgcHJvcHM6IHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgXCJkZWZhdWx0XCI6IG51bGxcbiAgICB9LFxuICAgIHN0eWxlOiBudWxsLFxuICAgIFwiY2xhc3NcIjogbnVsbCxcbiAgICBpdGVtczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBcImRlZmF1bHRcIjogbnVsbFxuICAgIH0sXG4gICAgaXRlbVNpemU6IHtcbiAgICAgIHR5cGU6IFtOdW1iZXIsIEFycmF5XSxcbiAgICAgIFwiZGVmYXVsdFwiOiAwXG4gICAgfSxcbiAgICBzY3JvbGxIZWlnaHQ6IG51bGwsXG4gICAgc2Nyb2xsV2lkdGg6IG51bGwsXG4gICAgb3JpZW50YXRpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIFwiZGVmYXVsdFwiOiAndmVydGljYWwnXG4gICAgfSxcbiAgICBudW1Ub2xlcmF0ZWRJdGVtczoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgXCJkZWZhdWx0XCI6IG51bGxcbiAgICB9LFxuICAgIGRlbGF5OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBcImRlZmF1bHRcIjogMFxuICAgIH0sXG4gICAgcmVzaXplRGVsYXk6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIFwiZGVmYXVsdFwiOiAxMFxuICAgIH0sXG4gICAgbGF6eToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgIH0sXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICB9LFxuICAgIGxvYWRlckRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgfSxcbiAgICBjb2x1bW5zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIFwiZGVmYXVsdFwiOiBudWxsXG4gICAgfSxcbiAgICBsb2FkaW5nOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgfSxcbiAgICBzaG93U3BhY2VyOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgXCJkZWZhdWx0XCI6IHRydWVcbiAgICB9LFxuICAgIHNob3dMb2FkZXI6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICB9LFxuICAgIHRhYmluZGV4OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBcImRlZmF1bHRcIjogMFxuICAgIH0sXG4gICAgaW5saW5lOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgXCJkZWZhdWx0XCI6IGZhbHNlXG4gICAgfSxcbiAgICBzdGVwOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBcImRlZmF1bHRcIjogMFxuICAgIH0sXG4gICAgYXBwZW5kT25seToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIFwiZGVmYXVsdFwiOiBmYWxzZVxuICAgIH0sXG4gICAgYXV0b1NpemU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBcImRlZmF1bHRcIjogZmFsc2VcbiAgICB9XG4gIH0sXG4gIHN0eWxlOiBWaXJ0dWFsU2Nyb2xsZXJTdHlsZSxcbiAgcHJvdmlkZTogZnVuY3Rpb24gcHJvdmlkZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJHBhcmVudEluc3RhbmNlOiB0aGlzXG4gICAgfTtcbiAgfSxcbiAgYmVmb3JlTW91bnQ6IGZ1bmN0aW9uIGJlZm9yZU1vdW50KCkge1xuICAgIHZhciBfdGhpcyQkcHJpbWV2dWVDb25maWc7XG4gICAgVmlydHVhbFNjcm9sbGVyU3R5bGUubG9hZFN0eWxlKHtcbiAgICAgIG5vbmNlOiAoX3RoaXMkJHByaW1ldnVlQ29uZmlnID0gdGhpcy4kcHJpbWV2dWVDb25maWcpID09PSBudWxsIHx8IF90aGlzJCRwcmltZXZ1ZUNvbmZpZyA9PT0gdm9pZCAwIHx8IChfdGhpcyQkcHJpbWV2dWVDb25maWcgPSBfdGhpcyQkcHJpbWV2dWVDb25maWcuY3NwKSA9PT0gbnVsbCB8fCBfdGhpcyQkcHJpbWV2dWVDb25maWcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJCRwcmltZXZ1ZUNvbmZpZy5ub25jZVxuICAgIH0pO1xuICB9XG59O1xuXG5mdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBvd25LZXlzKGUsIHIpIHsgdmFyIHQgPSBPYmplY3Qua2V5cyhlKTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIG8gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpOyByICYmIChvID0gby5maWx0ZXIoZnVuY3Rpb24gKHIpIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgcikuZW51bWVyYWJsZTsgfSkpLCB0LnB1c2guYXBwbHkodCwgbyk7IH0gcmV0dXJuIHQ7IH1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQoZSkgeyBmb3IgKHZhciByID0gMTsgciA8IGFyZ3VtZW50cy5sZW5ndGg7IHIrKykgeyB2YXIgdCA9IG51bGwgIT0gYXJndW1lbnRzW3JdID8gYXJndW1lbnRzW3JdIDoge307IHIgJSAyID8gb3duS2V5cyhPYmplY3QodCksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0W3JdKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHQpKSA6IG93bktleXMoT2JqZWN0KHQpKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIHIpKTsgfSk7IH0gcmV0dXJuIGU7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsga2V5ID0gX3RvUHJvcGVydHlLZXkoa2V5KTsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IFN0cmluZyhpKTsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbnZhciBzY3JpcHQgPSB7XG4gIG5hbWU6ICdWaXJ0dWFsU2Nyb2xsZXInLFxuICBcImV4dGVuZHNcIjogc2NyaXB0JDEsXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXG4gIGVtaXRzOiBbJ3VwZGF0ZTpudW1Ub2xlcmF0ZWRJdGVtcycsICdzY3JvbGwnLCAnc2Nyb2xsLWluZGV4LWNoYW5nZScsICdsYXp5LWxvYWQnXSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICB2YXIgYm90aCA9IHRoaXMuaXNCb3RoKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpcnN0OiBib3RoID8ge1xuICAgICAgICByb3dzOiAwLFxuICAgICAgICBjb2xzOiAwXG4gICAgICB9IDogMCxcbiAgICAgIGxhc3Q6IGJvdGggPyB7XG4gICAgICAgIHJvd3M6IDAsXG4gICAgICAgIGNvbHM6IDBcbiAgICAgIH0gOiAwLFxuICAgICAgcGFnZTogYm90aCA/IHtcbiAgICAgICAgcm93czogMCxcbiAgICAgICAgY29sczogMFxuICAgICAgfSA6IDAsXG4gICAgICBudW1JdGVtc0luVmlld3BvcnQ6IGJvdGggPyB7XG4gICAgICAgIHJvd3M6IDAsXG4gICAgICAgIGNvbHM6IDBcbiAgICAgIH0gOiAwLFxuICAgICAgbGFzdFNjcm9sbFBvczogYm90aCA/IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwXG4gICAgICB9IDogMCxcbiAgICAgIGRfbnVtVG9sZXJhdGVkSXRlbXM6IHRoaXMubnVtVG9sZXJhdGVkSXRlbXMsXG4gICAgICBkX2xvYWRpbmc6IHRoaXMubG9hZGluZyxcbiAgICAgIGxvYWRlckFycjogW10sXG4gICAgICBzcGFjZXJTdHlsZToge30sXG4gICAgICBjb250ZW50U3R5bGU6IHt9XG4gICAgfTtcbiAgfSxcbiAgZWxlbWVudDogbnVsbCxcbiAgY29udGVudDogbnVsbCxcbiAgbGFzdFNjcm9sbFBvczogbnVsbCxcbiAgc2Nyb2xsVGltZW91dDogbnVsbCxcbiAgcmVzaXplVGltZW91dDogbnVsbCxcbiAgZGVmYXVsdFdpZHRoOiAwLFxuICBkZWZhdWx0SGVpZ2h0OiAwLFxuICBkZWZhdWx0Q29udGVudFdpZHRoOiAwLFxuICBkZWZhdWx0Q29udGVudEhlaWdodDogMCxcbiAgaXNSYW5nZUNoYW5nZWQ6IGZhbHNlLFxuICBsYXp5TG9hZFN0YXRlOiB7fSxcbiAgcmVzaXplTGlzdGVuZXI6IG51bGwsXG4gIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgd2F0Y2g6IHtcbiAgICBudW1Ub2xlcmF0ZWRJdGVtczogZnVuY3Rpb24gbnVtVG9sZXJhdGVkSXRlbXMobmV3VmFsdWUpIHtcbiAgICAgIHRoaXMuZF9udW1Ub2xlcmF0ZWRJdGVtcyA9IG5ld1ZhbHVlO1xuICAgIH0sXG4gICAgbG9hZGluZzogZnVuY3Rpb24gbG9hZGluZyhuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmxhenkgJiYgbmV3VmFsdWUgIT09IG9sZFZhbHVlICYmIG5ld1ZhbHVlICE9PSB0aGlzLmRfbG9hZGluZykge1xuICAgICAgICB0aGlzLmRfbG9hZGluZyA9IG5ld1ZhbHVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgaXRlbXM6IGZ1bmN0aW9uIGl0ZW1zKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgaWYgKCFvbGRWYWx1ZSB8fCBvbGRWYWx1ZS5sZW5ndGggIT09IChuZXdWYWx1ZSB8fCBbXSkubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZUF1dG9TaXplKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpdGVtU2l6ZTogZnVuY3Rpb24gaXRlbVNpemUoKSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIHRoaXMuY2FsY3VsYXRlQXV0b1NpemUoKTtcbiAgICB9LFxuICAgIG9yaWVudGF0aW9uOiBmdW5jdGlvbiBvcmllbnRhdGlvbigpIHtcbiAgICAgIHRoaXMubGFzdFNjcm9sbFBvcyA9IHRoaXMuaXNCb3RoKCkgPyB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMFxuICAgICAgfSA6IDA7XG4gICAgfSxcbiAgICBzY3JvbGxIZWlnaHQ6IGZ1bmN0aW9uIHNjcm9sbEhlaWdodCgpIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgdGhpcy5jYWxjdWxhdGVBdXRvU2l6ZSgpO1xuICAgIH0sXG4gICAgc2Nyb2xsV2lkdGg6IGZ1bmN0aW9uIHNjcm9sbFdpZHRoKCkge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgICB0aGlzLmNhbGN1bGF0ZUF1dG9TaXplKCk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xuICAgIHRoaXMudmlld0luaXQoKTtcbiAgICB0aGlzLmxhc3RTY3JvbGxQb3MgPSB0aGlzLmlzQm90aCgpID8ge1xuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMFxuICAgIH0gOiAwO1xuICAgIHRoaXMubGF6eUxvYWRTdGF0ZSA9IHRoaXMubGF6eUxvYWRTdGF0ZSB8fCB7fTtcbiAgfSxcbiAgdXBkYXRlZDogZnVuY3Rpb24gdXBkYXRlZCgpIHtcbiAgICAhdGhpcy5pbml0aWFsaXplZCAmJiB0aGlzLnZpZXdJbml0KCk7XG4gIH0sXG4gIHVubW91bnRlZDogZnVuY3Rpb24gdW5tb3VudGVkKCkge1xuICAgIHRoaXMudW5iaW5kUmVzaXplTGlzdGVuZXIoKTtcbiAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB2aWV3SW5pdDogZnVuY3Rpb24gdmlld0luaXQoKSB7XG4gICAgICBpZiAoRG9tSGFuZGxlci5pc1Zpc2libGUodGhpcy5lbGVtZW50KSkge1xuICAgICAgICB0aGlzLnNldENvbnRlbnRFbCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVBdXRvU2l6ZSgpO1xuICAgICAgICB0aGlzLmJpbmRSZXNpemVMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmRlZmF1bHRXaWR0aCA9IERvbUhhbmRsZXIuZ2V0V2lkdGgodGhpcy5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5kZWZhdWx0SGVpZ2h0ID0gRG9tSGFuZGxlci5nZXRIZWlnaHQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5kZWZhdWx0Q29udGVudFdpZHRoID0gRG9tSGFuZGxlci5nZXRXaWR0aCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICB0aGlzLmRlZmF1bHRDb250ZW50SGVpZ2h0ID0gRG9tSGFuZGxlci5nZXRIZWlnaHQodGhpcy5jb250ZW50KTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U2l6ZSgpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZU9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy5zZXRTcGFjZXJTaXplKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBpc1ZlcnRpY2FsOiBmdW5jdGlvbiBpc1ZlcnRpY2FsKCkge1xuICAgICAgcmV0dXJuIHRoaXMub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCc7XG4gICAgfSxcbiAgICBpc0hvcml6b250YWw6IGZ1bmN0aW9uIGlzSG9yaXpvbnRhbCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCc7XG4gICAgfSxcbiAgICBpc0JvdGg6IGZ1bmN0aW9uIGlzQm90aCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm9yaWVudGF0aW9uID09PSAnYm90aCc7XG4gICAgfSxcbiAgICBzY3JvbGxUbzogZnVuY3Rpb24gc2Nyb2xsVG8ob3B0aW9ucykge1xuICAgICAgLy90aGlzLmxhc3RTY3JvbGxQb3MgPSB0aGlzLmJvdGggPyB7IHRvcDogMCwgbGVmdDogMCB9IDogMDtcbiAgICAgIHRoaXMuZWxlbWVudCAmJiB0aGlzLmVsZW1lbnQuc2Nyb2xsVG8ob3B0aW9ucyk7XG4gICAgfSxcbiAgICBzY3JvbGxUb0luZGV4OiBmdW5jdGlvbiBzY3JvbGxUb0luZGV4KGluZGV4KSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdmFyIGJlaGF2aW9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnYXV0byc7XG4gICAgICB2YXIgYm90aCA9IHRoaXMuaXNCb3RoKCk7XG4gICAgICB2YXIgaG9yaXpvbnRhbCA9IHRoaXMuaXNIb3Jpem9udGFsKCk7XG4gICAgICB2YXIgdmFsaWQgPSBib3RoID8gaW5kZXguZXZlcnkoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIGkgPiAtMTtcbiAgICAgIH0pIDogaW5kZXggPiAtMTtcbiAgICAgIGlmICh2YWxpZCkge1xuICAgICAgICB2YXIgZmlyc3QgPSB0aGlzLmZpcnN0O1xuICAgICAgICB2YXIgX3RoaXMkZWxlbWVudCA9IHRoaXMuZWxlbWVudCxcbiAgICAgICAgICBfdGhpcyRlbGVtZW50JHNjcm9sbFQgPSBfdGhpcyRlbGVtZW50LnNjcm9sbFRvcCxcbiAgICAgICAgICBzY3JvbGxUb3AgPSBfdGhpcyRlbGVtZW50JHNjcm9sbFQgPT09IHZvaWQgMCA/IDAgOiBfdGhpcyRlbGVtZW50JHNjcm9sbFQsXG4gICAgICAgICAgX3RoaXMkZWxlbWVudCRzY3JvbGxMID0gX3RoaXMkZWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgICAgICAgIHNjcm9sbExlZnQgPSBfdGhpcyRlbGVtZW50JHNjcm9sbEwgPT09IHZvaWQgMCA/IDAgOiBfdGhpcyRlbGVtZW50JHNjcm9sbEw7XG4gICAgICAgIHZhciBfdGhpcyRjYWxjdWxhdGVOdW1JdGUgPSB0aGlzLmNhbGN1bGF0ZU51bUl0ZW1zKCksXG4gICAgICAgICAgbnVtVG9sZXJhdGVkSXRlbXMgPSBfdGhpcyRjYWxjdWxhdGVOdW1JdGUubnVtVG9sZXJhdGVkSXRlbXM7XG4gICAgICAgIHZhciBjb250ZW50UG9zID0gdGhpcy5nZXRDb250ZW50UG9zaXRpb24oKTtcbiAgICAgICAgdmFyIGl0ZW1TaXplID0gdGhpcy5pdGVtU2l6ZTtcbiAgICAgICAgdmFyIGNhbGN1bGF0ZUZpcnN0ID0gZnVuY3Rpb24gY2FsY3VsYXRlRmlyc3QoKSB7XG4gICAgICAgICAgdmFyIF9pbmRleCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgICAgICB2YXIgX251bVQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICByZXR1cm4gX2luZGV4IDw9IF9udW1UID8gMCA6IF9pbmRleDtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGNhbGN1bGF0ZUNvb3JkID0gZnVuY3Rpb24gY2FsY3VsYXRlQ29vcmQoX2ZpcnN0LCBfc2l6ZSwgX2Nwb3MpIHtcbiAgICAgICAgICByZXR1cm4gX2ZpcnN0ICogX3NpemUgKyBfY3BvcztcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHNjcm9sbFRvID0gZnVuY3Rpb24gc2Nyb2xsVG8oKSB7XG4gICAgICAgICAgdmFyIGxlZnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICAgICAgdmFyIHRvcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgICAgYmVoYXZpb3I6IGJlaGF2aW9yXG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBuZXdGaXJzdCA9IGJvdGggPyB7XG4gICAgICAgICAgcm93czogMCxcbiAgICAgICAgICBjb2xzOiAwXG4gICAgICAgIH0gOiAwO1xuICAgICAgICB2YXIgaXNSYW5nZUNoYW5nZWQgPSBmYWxzZSxcbiAgICAgICAgICBpc1Njcm9sbENoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGJvdGgpIHtcbiAgICAgICAgICBuZXdGaXJzdCA9IHtcbiAgICAgICAgICAgIHJvd3M6IGNhbGN1bGF0ZUZpcnN0KGluZGV4WzBdLCBudW1Ub2xlcmF0ZWRJdGVtc1swXSksXG4gICAgICAgICAgICBjb2xzOiBjYWxjdWxhdGVGaXJzdChpbmRleFsxXSwgbnVtVG9sZXJhdGVkSXRlbXNbMV0pXG4gICAgICAgICAgfTtcbiAgICAgICAgICBzY3JvbGxUbyhjYWxjdWxhdGVDb29yZChuZXdGaXJzdC5jb2xzLCBpdGVtU2l6ZVsxXSwgY29udGVudFBvcy5sZWZ0KSwgY2FsY3VsYXRlQ29vcmQobmV3Rmlyc3Qucm93cywgaXRlbVNpemVbMF0sIGNvbnRlbnRQb3MudG9wKSk7XG4gICAgICAgICAgaXNTY3JvbGxDaGFuZ2VkID0gdGhpcy5sYXN0U2Nyb2xsUG9zLnRvcCAhPT0gc2Nyb2xsVG9wIHx8IHRoaXMubGFzdFNjcm9sbFBvcy5sZWZ0ICE9PSBzY3JvbGxMZWZ0O1xuICAgICAgICAgIGlzUmFuZ2VDaGFuZ2VkID0gbmV3Rmlyc3Qucm93cyAhPT0gZmlyc3Qucm93cyB8fCBuZXdGaXJzdC5jb2xzICE9PSBmaXJzdC5jb2xzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0ZpcnN0ID0gY2FsY3VsYXRlRmlyc3QoaW5kZXgsIG51bVRvbGVyYXRlZEl0ZW1zKTtcbiAgICAgICAgICBob3Jpem9udGFsID8gc2Nyb2xsVG8oY2FsY3VsYXRlQ29vcmQobmV3Rmlyc3QsIGl0ZW1TaXplLCBjb250ZW50UG9zLmxlZnQpLCBzY3JvbGxUb3ApIDogc2Nyb2xsVG8oc2Nyb2xsTGVmdCwgY2FsY3VsYXRlQ29vcmQobmV3Rmlyc3QsIGl0ZW1TaXplLCBjb250ZW50UG9zLnRvcCkpO1xuICAgICAgICAgIGlzU2Nyb2xsQ2hhbmdlZCA9IHRoaXMubGFzdFNjcm9sbFBvcyAhPT0gKGhvcml6b250YWwgPyBzY3JvbGxMZWZ0IDogc2Nyb2xsVG9wKTtcbiAgICAgICAgICBpc1JhbmdlQ2hhbmdlZCA9IG5ld0ZpcnN0ICE9PSBmaXJzdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUmFuZ2VDaGFuZ2VkID0gaXNSYW5nZUNoYW5nZWQ7XG4gICAgICAgIGlzU2Nyb2xsQ2hhbmdlZCAmJiAodGhpcy5maXJzdCA9IG5ld0ZpcnN0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNjcm9sbEluVmlldzogZnVuY3Rpb24gc2Nyb2xsSW5WaWV3KGluZGV4LCB0bykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgICB2YXIgYmVoYXZpb3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICdhdXRvJztcbiAgICAgIGlmICh0bykge1xuICAgICAgICB2YXIgYm90aCA9IHRoaXMuaXNCb3RoKCk7XG4gICAgICAgIHZhciBob3Jpem9udGFsID0gdGhpcy5pc0hvcml6b250YWwoKTtcbiAgICAgICAgdmFyIHZhbGlkID0gYm90aCA/IGluZGV4LmV2ZXJ5KGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgcmV0dXJuIGkgPiAtMTtcbiAgICAgICAgfSkgOiBpbmRleCA+IC0xO1xuICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICB2YXIgX3RoaXMkZ2V0UmVuZGVyZWRSYW5nID0gdGhpcy5nZXRSZW5kZXJlZFJhbmdlKCksXG4gICAgICAgICAgICBmaXJzdCA9IF90aGlzJGdldFJlbmRlcmVkUmFuZy5maXJzdCxcbiAgICAgICAgICAgIHZpZXdwb3J0ID0gX3RoaXMkZ2V0UmVuZGVyZWRSYW5nLnZpZXdwb3J0O1xuICAgICAgICAgIHZhciBzY3JvbGxUbyA9IGZ1bmN0aW9uIHNjcm9sbFRvKCkge1xuICAgICAgICAgICAgdmFyIGxlZnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgICAgICAgICB2YXIgdG9wID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgICAgICBiZWhhdmlvcjogYmVoYXZpb3JcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgICAgdmFyIGlzVG9TdGFydCA9IHRvID09PSAndG8tc3RhcnQnO1xuICAgICAgICAgIHZhciBpc1RvRW5kID0gdG8gPT09ICd0by1lbmQnO1xuICAgICAgICAgIGlmIChpc1RvU3RhcnQpIHtcbiAgICAgICAgICAgIGlmIChib3RoKSB7XG4gICAgICAgICAgICAgIGlmICh2aWV3cG9ydC5maXJzdC5yb3dzIC0gZmlyc3Qucm93cyA+IGluZGV4WzBdKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG8odmlld3BvcnQuZmlyc3QuY29scyAqIHRoaXMuaXRlbVNpemVbMV0sICh2aWV3cG9ydC5maXJzdC5yb3dzIC0gMSkgKiB0aGlzLml0ZW1TaXplWzBdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh2aWV3cG9ydC5maXJzdC5jb2xzIC0gZmlyc3QuY29scyA+IGluZGV4WzFdKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG8oKHZpZXdwb3J0LmZpcnN0LmNvbHMgLSAxKSAqIHRoaXMuaXRlbVNpemVbMV0sIHZpZXdwb3J0LmZpcnN0LnJvd3MgKiB0aGlzLml0ZW1TaXplWzBdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHZpZXdwb3J0LmZpcnN0IC0gZmlyc3QgPiBpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBwb3MgPSAodmlld3BvcnQuZmlyc3QgLSAxKSAqIHRoaXMuaXRlbVNpemU7XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbCA/IHNjcm9sbFRvKHBvcywgMCkgOiBzY3JvbGxUbygwLCBwb3MpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChpc1RvRW5kKSB7XG4gICAgICAgICAgICBpZiAoYm90aCkge1xuICAgICAgICAgICAgICBpZiAodmlld3BvcnQubGFzdC5yb3dzIC0gZmlyc3Qucm93cyA8PSBpbmRleFswXSArIDEpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUbyh2aWV3cG9ydC5maXJzdC5jb2xzICogdGhpcy5pdGVtU2l6ZVsxXSwgKHZpZXdwb3J0LmZpcnN0LnJvd3MgKyAxKSAqIHRoaXMuaXRlbVNpemVbMF0pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZpZXdwb3J0Lmxhc3QuY29scyAtIGZpcnN0LmNvbHMgPD0gaW5kZXhbMV0gKyAxKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG8oKHZpZXdwb3J0LmZpcnN0LmNvbHMgKyAxKSAqIHRoaXMuaXRlbVNpemVbMV0sIHZpZXdwb3J0LmZpcnN0LnJvd3MgKiB0aGlzLml0ZW1TaXplWzBdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHZpZXdwb3J0Lmxhc3QgLSBmaXJzdCA8PSBpbmRleCArIDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3BvczIgPSAodmlld3BvcnQuZmlyc3QgKyAxKSAqIHRoaXMuaXRlbVNpemU7XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbCA/IHNjcm9sbFRvKF9wb3MyLCAwKSA6IHNjcm9sbFRvKDAsIF9wb3MyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zY3JvbGxUb0luZGV4KGluZGV4LCBiZWhhdmlvcik7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRSZW5kZXJlZFJhbmdlOiBmdW5jdGlvbiBnZXRSZW5kZXJlZFJhbmdlKCkge1xuICAgICAgdmFyIGNhbGN1bGF0ZUZpcnN0SW5WaWV3cG9ydCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUZpcnN0SW5WaWV3cG9ydChfcG9zLCBfc2l6ZSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihfcG9zIC8gKF9zaXplIHx8IF9wb3MpKTtcbiAgICAgIH07XG4gICAgICB2YXIgZmlyc3RJblZpZXdwb3J0ID0gdGhpcy5maXJzdDtcbiAgICAgIHZhciBsYXN0SW5WaWV3cG9ydCA9IDA7XG4gICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgIHZhciBib3RoID0gdGhpcy5pc0JvdGgoKTtcbiAgICAgICAgdmFyIGhvcml6b250YWwgPSB0aGlzLmlzSG9yaXpvbnRhbCgpO1xuICAgICAgICB2YXIgX3RoaXMkZWxlbWVudDIgPSB0aGlzLmVsZW1lbnQsXG4gICAgICAgICAgc2Nyb2xsVG9wID0gX3RoaXMkZWxlbWVudDIuc2Nyb2xsVG9wLFxuICAgICAgICAgIHNjcm9sbExlZnQgPSBfdGhpcyRlbGVtZW50Mi5zY3JvbGxMZWZ0O1xuICAgICAgICBpZiAoYm90aCkge1xuICAgICAgICAgIGZpcnN0SW5WaWV3cG9ydCA9IHtcbiAgICAgICAgICAgIHJvd3M6IGNhbGN1bGF0ZUZpcnN0SW5WaWV3cG9ydChzY3JvbGxUb3AsIHRoaXMuaXRlbVNpemVbMF0pLFxuICAgICAgICAgICAgY29sczogY2FsY3VsYXRlRmlyc3RJblZpZXdwb3J0KHNjcm9sbExlZnQsIHRoaXMuaXRlbVNpemVbMV0pXG4gICAgICAgICAgfTtcbiAgICAgICAgICBsYXN0SW5WaWV3cG9ydCA9IHtcbiAgICAgICAgICAgIHJvd3M6IGZpcnN0SW5WaWV3cG9ydC5yb3dzICsgdGhpcy5udW1JdGVtc0luVmlld3BvcnQucm93cyxcbiAgICAgICAgICAgIGNvbHM6IGZpcnN0SW5WaWV3cG9ydC5jb2xzICsgdGhpcy5udW1JdGVtc0luVmlld3BvcnQuY29sc1xuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHNjcm9sbFBvcyA9IGhvcml6b250YWwgPyBzY3JvbGxMZWZ0IDogc2Nyb2xsVG9wO1xuICAgICAgICAgIGZpcnN0SW5WaWV3cG9ydCA9IGNhbGN1bGF0ZUZpcnN0SW5WaWV3cG9ydChzY3JvbGxQb3MsIHRoaXMuaXRlbVNpemUpO1xuICAgICAgICAgIGxhc3RJblZpZXdwb3J0ID0gZmlyc3RJblZpZXdwb3J0ICsgdGhpcy5udW1JdGVtc0luVmlld3BvcnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZpcnN0OiB0aGlzLmZpcnN0LFxuICAgICAgICBsYXN0OiB0aGlzLmxhc3QsXG4gICAgICAgIHZpZXdwb3J0OiB7XG4gICAgICAgICAgZmlyc3Q6IGZpcnN0SW5WaWV3cG9ydCxcbiAgICAgICAgICBsYXN0OiBsYXN0SW5WaWV3cG9ydFxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG4gICAgY2FsY3VsYXRlTnVtSXRlbXM6IGZ1bmN0aW9uIGNhbGN1bGF0ZU51bUl0ZW1zKCkge1xuICAgICAgdmFyIGJvdGggPSB0aGlzLmlzQm90aCgpO1xuICAgICAgdmFyIGhvcml6b250YWwgPSB0aGlzLmlzSG9yaXpvbnRhbCgpO1xuICAgICAgdmFyIGl0ZW1TaXplID0gdGhpcy5pdGVtU2l6ZTtcbiAgICAgIHZhciBjb250ZW50UG9zID0gdGhpcy5nZXRDb250ZW50UG9zaXRpb24oKTtcbiAgICAgIHZhciBjb250ZW50V2lkdGggPSB0aGlzLmVsZW1lbnQgPyB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGggLSBjb250ZW50UG9zLmxlZnQgOiAwO1xuICAgICAgdmFyIGNvbnRlbnRIZWlnaHQgPSB0aGlzLmVsZW1lbnQgPyB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gY29udGVudFBvcy50b3AgOiAwO1xuICAgICAgdmFyIGNhbGN1bGF0ZU51bUl0ZW1zSW5WaWV3cG9ydCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZU51bUl0ZW1zSW5WaWV3cG9ydChfY29udGVudFNpemUsIF9pdGVtU2l6ZSkge1xuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKF9jb250ZW50U2l6ZSAvIChfaXRlbVNpemUgfHwgX2NvbnRlbnRTaXplKSk7XG4gICAgICB9O1xuICAgICAgdmFyIGNhbGN1bGF0ZU51bVRvbGVyYXRlZEl0ZW1zID0gZnVuY3Rpb24gY2FsY3VsYXRlTnVtVG9sZXJhdGVkSXRlbXMoX251bUl0ZW1zKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoX251bUl0ZW1zIC8gMik7XG4gICAgICB9O1xuICAgICAgdmFyIG51bUl0ZW1zSW5WaWV3cG9ydCA9IGJvdGggPyB7XG4gICAgICAgIHJvd3M6IGNhbGN1bGF0ZU51bUl0ZW1zSW5WaWV3cG9ydChjb250ZW50SGVpZ2h0LCBpdGVtU2l6ZVswXSksXG4gICAgICAgIGNvbHM6IGNhbGN1bGF0ZU51bUl0ZW1zSW5WaWV3cG9ydChjb250ZW50V2lkdGgsIGl0ZW1TaXplWzFdKVxuICAgICAgfSA6IGNhbGN1bGF0ZU51bUl0ZW1zSW5WaWV3cG9ydChob3Jpem9udGFsID8gY29udGVudFdpZHRoIDogY29udGVudEhlaWdodCwgaXRlbVNpemUpO1xuICAgICAgdmFyIG51bVRvbGVyYXRlZEl0ZW1zID0gdGhpcy5kX251bVRvbGVyYXRlZEl0ZW1zIHx8IChib3RoID8gW2NhbGN1bGF0ZU51bVRvbGVyYXRlZEl0ZW1zKG51bUl0ZW1zSW5WaWV3cG9ydC5yb3dzKSwgY2FsY3VsYXRlTnVtVG9sZXJhdGVkSXRlbXMobnVtSXRlbXNJblZpZXdwb3J0LmNvbHMpXSA6IGNhbGN1bGF0ZU51bVRvbGVyYXRlZEl0ZW1zKG51bUl0ZW1zSW5WaWV3cG9ydCkpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbnVtSXRlbXNJblZpZXdwb3J0OiBudW1JdGVtc0luVmlld3BvcnQsXG4gICAgICAgIG51bVRvbGVyYXRlZEl0ZW1zOiBudW1Ub2xlcmF0ZWRJdGVtc1xuICAgICAgfTtcbiAgICB9LFxuICAgIGNhbGN1bGF0ZU9wdGlvbnM6IGZ1bmN0aW9uIGNhbGN1bGF0ZU9wdGlvbnMoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcbiAgICAgIHZhciBib3RoID0gdGhpcy5pc0JvdGgoKTtcbiAgICAgIHZhciBmaXJzdCA9IHRoaXMuZmlyc3Q7XG4gICAgICB2YXIgX3RoaXMkY2FsY3VsYXRlTnVtSXRlMiA9IHRoaXMuY2FsY3VsYXRlTnVtSXRlbXMoKSxcbiAgICAgICAgbnVtSXRlbXNJblZpZXdwb3J0ID0gX3RoaXMkY2FsY3VsYXRlTnVtSXRlMi5udW1JdGVtc0luVmlld3BvcnQsXG4gICAgICAgIG51bVRvbGVyYXRlZEl0ZW1zID0gX3RoaXMkY2FsY3VsYXRlTnVtSXRlMi5udW1Ub2xlcmF0ZWRJdGVtcztcbiAgICAgIHZhciBjYWxjdWxhdGVMYXN0ID0gZnVuY3Rpb24gY2FsY3VsYXRlTGFzdChfZmlyc3QsIF9udW0sIF9udW1UKSB7XG4gICAgICAgIHZhciBfaXNDb2xzID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzMy5nZXRMYXN0KF9maXJzdCArIF9udW0gKyAoX2ZpcnN0IDwgX251bVQgPyAyIDogMykgKiBfbnVtVCwgX2lzQ29scyk7XG4gICAgICB9O1xuICAgICAgdmFyIGxhc3QgPSBib3RoID8ge1xuICAgICAgICByb3dzOiBjYWxjdWxhdGVMYXN0KGZpcnN0LnJvd3MsIG51bUl0ZW1zSW5WaWV3cG9ydC5yb3dzLCBudW1Ub2xlcmF0ZWRJdGVtc1swXSksXG4gICAgICAgIGNvbHM6IGNhbGN1bGF0ZUxhc3QoZmlyc3QuY29scywgbnVtSXRlbXNJblZpZXdwb3J0LmNvbHMsIG51bVRvbGVyYXRlZEl0ZW1zWzFdLCB0cnVlKVxuICAgICAgfSA6IGNhbGN1bGF0ZUxhc3QoZmlyc3QsIG51bUl0ZW1zSW5WaWV3cG9ydCwgbnVtVG9sZXJhdGVkSXRlbXMpO1xuICAgICAgdGhpcy5sYXN0ID0gbGFzdDtcbiAgICAgIHRoaXMubnVtSXRlbXNJblZpZXdwb3J0ID0gbnVtSXRlbXNJblZpZXdwb3J0O1xuICAgICAgdGhpcy5kX251bVRvbGVyYXRlZEl0ZW1zID0gbnVtVG9sZXJhdGVkSXRlbXM7XG4gICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6bnVtVG9sZXJhdGVkSXRlbXMnLCB0aGlzLmRfbnVtVG9sZXJhdGVkSXRlbXMpO1xuICAgICAgaWYgKHRoaXMuc2hvd0xvYWRlcikge1xuICAgICAgICB0aGlzLmxvYWRlckFyciA9IGJvdGggPyBBcnJheS5mcm9tKHtcbiAgICAgICAgICBsZW5ndGg6IG51bUl0ZW1zSW5WaWV3cG9ydC5yb3dzXG4gICAgICAgIH0pLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oe1xuICAgICAgICAgICAgbGVuZ3RoOiBudW1JdGVtc0luVmlld3BvcnQuY29sc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KSA6IEFycmF5LmZyb20oe1xuICAgICAgICAgIGxlbmd0aDogbnVtSXRlbXNJblZpZXdwb3J0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubGF6eSkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgX3RoaXMzJGl0ZW1zO1xuICAgICAgICAgIF90aGlzMy5sYXp5TG9hZFN0YXRlID0ge1xuICAgICAgICAgICAgZmlyc3Q6IF90aGlzMy5zdGVwID8gYm90aCA/IHtcbiAgICAgICAgICAgICAgcm93czogMCxcbiAgICAgICAgICAgICAgY29sczogZmlyc3QuY29sc1xuICAgICAgICAgICAgfSA6IDAgOiBmaXJzdCxcbiAgICAgICAgICAgIGxhc3Q6IE1hdGgubWluKF90aGlzMy5zdGVwID8gX3RoaXMzLnN0ZXAgOiBsYXN0LCAoKF90aGlzMyRpdGVtcyA9IF90aGlzMy5pdGVtcykgPT09IG51bGwgfHwgX3RoaXMzJGl0ZW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpczMkaXRlbXMubGVuZ3RoKSB8fCAwKVxuICAgICAgICAgIH07XG4gICAgICAgICAgX3RoaXMzLiRlbWl0KCdsYXp5LWxvYWQnLCBfdGhpczMubGF6eUxvYWRTdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2FsY3VsYXRlQXV0b1NpemU6IGZ1bmN0aW9uIGNhbGN1bGF0ZUF1dG9TaXplKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG4gICAgICBpZiAodGhpcy5hdXRvU2l6ZSAmJiAhdGhpcy5kX2xvYWRpbmcpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKF90aGlzNC5jb250ZW50KSB7XG4gICAgICAgICAgICB2YXIgYm90aCA9IF90aGlzNC5pc0JvdGgoKTtcbiAgICAgICAgICAgIHZhciBob3Jpem9udGFsID0gX3RoaXM0LmlzSG9yaXpvbnRhbCgpO1xuICAgICAgICAgICAgdmFyIHZlcnRpY2FsID0gX3RoaXM0LmlzVmVydGljYWwoKTtcbiAgICAgICAgICAgIF90aGlzNC5jb250ZW50LnN0eWxlLm1pbkhlaWdodCA9IF90aGlzNC5jb250ZW50LnN0eWxlLm1pbldpZHRoID0gJ2F1dG8nO1xuICAgICAgICAgICAgX3RoaXM0LmNvbnRlbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICAgICAgX3RoaXM0LmVsZW1lbnQuc3R5bGUuY29udGFpbiA9ICdub25lJztcblxuICAgICAgICAgICAgLypjb25zdCBbY29udGVudFdpZHRoLCBjb250ZW50SGVpZ2h0XSA9IFtEb21IYW5kbGVyLmdldFdpZHRoKHRoaXMuY29udGVudCksIERvbUhhbmRsZXIuZ2V0SGVpZ2h0KHRoaXMuY29udGVudCldO1xuICAgICAgICAgICAgIGNvbnRlbnRXaWR0aCAhPT0gdGhpcy5kZWZhdWx0Q29udGVudFdpZHRoICYmICh0aGlzLmVsZW1lbnQuc3R5bGUud2lkdGggPSAnJyk7XG4gICAgICAgICAgICBjb250ZW50SGVpZ2h0ICE9PSB0aGlzLmRlZmF1bHRDb250ZW50SGVpZ2h0ICYmICh0aGlzLmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJycpOyovXG5cbiAgICAgICAgICAgIHZhciBfcmVmID0gW0RvbUhhbmRsZXIuZ2V0V2lkdGgoX3RoaXM0LmVsZW1lbnQpLCBEb21IYW5kbGVyLmdldEhlaWdodChfdGhpczQuZWxlbWVudCldLFxuICAgICAgICAgICAgICB3aWR0aCA9IF9yZWZbMF0sXG4gICAgICAgICAgICAgIGhlaWdodCA9IF9yZWZbMV07XG4gICAgICAgICAgICAoYm90aCB8fCBob3Jpem9udGFsKSAmJiAoX3RoaXM0LmVsZW1lbnQuc3R5bGUud2lkdGggPSB3aWR0aCA8IF90aGlzNC5kZWZhdWx0V2lkdGggPyB3aWR0aCArICdweCcgOiBfdGhpczQuc2Nyb2xsV2lkdGggfHwgX3RoaXM0LmRlZmF1bHRXaWR0aCArICdweCcpO1xuICAgICAgICAgICAgKGJvdGggfHwgdmVydGljYWwpICYmIChfdGhpczQuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgPCBfdGhpczQuZGVmYXVsdEhlaWdodCA/IGhlaWdodCArICdweCcgOiBfdGhpczQuc2Nyb2xsSGVpZ2h0IHx8IF90aGlzNC5kZWZhdWx0SGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAgICAgICBfdGhpczQuY29udGVudC5zdHlsZS5taW5IZWlnaHQgPSBfdGhpczQuY29udGVudC5zdHlsZS5taW5XaWR0aCA9ICcnO1xuICAgICAgICAgICAgX3RoaXM0LmNvbnRlbnQuc3R5bGUucG9zaXRpb24gPSAnJztcbiAgICAgICAgICAgIF90aGlzNC5lbGVtZW50LnN0eWxlLmNvbnRhaW4gPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0TGFzdDogZnVuY3Rpb24gZ2V0TGFzdCgpIHtcbiAgICAgIHZhciBfcmVmMiwgX3RoaXMkaXRlbXM7XG4gICAgICB2YXIgbGFzdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMDtcbiAgICAgIHZhciBpc0NvbHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybiB0aGlzLml0ZW1zID8gTWF0aC5taW4oaXNDb2xzID8gKChfcmVmMiA9IHRoaXMuY29sdW1ucyB8fCB0aGlzLml0ZW1zWzBdKSA9PT0gbnVsbCB8fCBfcmVmMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3JlZjIubGVuZ3RoKSB8fCAwIDogKChfdGhpcyRpdGVtcyA9IHRoaXMuaXRlbXMpID09PSBudWxsIHx8IF90aGlzJGl0ZW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRpdGVtcy5sZW5ndGgpIHx8IDAsIGxhc3QpIDogMDtcbiAgICB9LFxuICAgIGdldENvbnRlbnRQb3NpdGlvbjogZnVuY3Rpb24gZ2V0Q29udGVudFBvc2l0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuY29udGVudCkge1xuICAgICAgICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuY29udGVudCk7XG4gICAgICAgIHZhciBsZWZ0ID0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nTGVmdCkgKyBNYXRoLm1heChwYXJzZUZsb2F0KHN0eWxlLmxlZnQpIHx8IDAsIDApO1xuICAgICAgICB2YXIgcmlnaHQgPSBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdSaWdodCkgKyBNYXRoLm1heChwYXJzZUZsb2F0KHN0eWxlLnJpZ2h0KSB8fCAwLCAwKTtcbiAgICAgICAgdmFyIHRvcCA9IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ1RvcCkgKyBNYXRoLm1heChwYXJzZUZsb2F0KHN0eWxlLnRvcCkgfHwgMCwgMCk7XG4gICAgICAgIHZhciBib3R0b20gPSBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdCb3R0b20pICsgTWF0aC5tYXgocGFyc2VGbG9hdChzdHlsZS5ib3R0b20pIHx8IDAsIDApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICAgICAgcmlnaHQ6IHJpZ2h0LFxuICAgICAgICAgIHRvcDogdG9wLFxuICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxuICAgICAgICAgIHg6IGxlZnQgKyByaWdodCxcbiAgICAgICAgICB5OiB0b3AgKyBib3R0b21cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgICAgfTtcbiAgICB9LFxuICAgIHNldFNpemU6IGZ1bmN0aW9uIHNldFNpemUoKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGJvdGggPSB0aGlzLmlzQm90aCgpO1xuICAgICAgICB2YXIgaG9yaXpvbnRhbCA9IHRoaXMuaXNIb3Jpem9udGFsKCk7XG4gICAgICAgIHZhciBwYXJlbnRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMuc2Nyb2xsV2lkdGggfHwgXCJcIi5jb25jYXQodGhpcy5lbGVtZW50Lm9mZnNldFdpZHRoIHx8IHBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGgsIFwicHhcIik7XG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLnNjcm9sbEhlaWdodCB8fCBcIlwiLmNvbmNhdCh0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0IHx8IHBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0LCBcInB4XCIpO1xuICAgICAgICB2YXIgc2V0UHJvcCA9IGZ1bmN0aW9uIHNldFByb3AoX25hbWUsIF92YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczUuZWxlbWVudC5zdHlsZVtfbmFtZV0gPSBfdmFsdWU7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChib3RoIHx8IGhvcml6b250YWwpIHtcbiAgICAgICAgICBzZXRQcm9wKCdoZWlnaHQnLCBoZWlnaHQpO1xuICAgICAgICAgIHNldFByb3AoJ3dpZHRoJywgd2lkdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFByb3AoJ2hlaWdodCcsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNldFNwYWNlclNpemU6IGZ1bmN0aW9uIHNldFNwYWNlclNpemUoKSB7XG4gICAgICB2YXIgX3RoaXM2ID0gdGhpcztcbiAgICAgIHZhciBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgICBpZiAoaXRlbXMpIHtcbiAgICAgICAgdmFyIGJvdGggPSB0aGlzLmlzQm90aCgpO1xuICAgICAgICB2YXIgaG9yaXpvbnRhbCA9IHRoaXMuaXNIb3Jpem9udGFsKCk7XG4gICAgICAgIHZhciBjb250ZW50UG9zID0gdGhpcy5nZXRDb250ZW50UG9zaXRpb24oKTtcbiAgICAgICAgdmFyIHNldFByb3AgPSBmdW5jdGlvbiBzZXRQcm9wKF9uYW1lLCBfdmFsdWUsIF9zaXplKSB7XG4gICAgICAgICAgdmFyIF9jcG9zID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiAwO1xuICAgICAgICAgIHJldHVybiBfdGhpczYuc3BhY2VyU3R5bGUgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIF90aGlzNi5zcGFjZXJTdHlsZSksIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQoX25hbWUpLCAoX3ZhbHVlIHx8IFtdKS5sZW5ndGggKiBfc2l6ZSArIF9jcG9zICsgJ3B4JykpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoYm90aCkge1xuICAgICAgICAgIHNldFByb3AoJ2hlaWdodCcsIGl0ZW1zLCB0aGlzLml0ZW1TaXplWzBdLCBjb250ZW50UG9zLnkpO1xuICAgICAgICAgIHNldFByb3AoJ3dpZHRoJywgdGhpcy5jb2x1bW5zIHx8IGl0ZW1zWzFdLCB0aGlzLml0ZW1TaXplWzFdLCBjb250ZW50UG9zLngpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhvcml6b250YWwgPyBzZXRQcm9wKCd3aWR0aCcsIHRoaXMuY29sdW1ucyB8fCBpdGVtcywgdGhpcy5pdGVtU2l6ZSwgY29udGVudFBvcy54KSA6IHNldFByb3AoJ2hlaWdodCcsIGl0ZW1zLCB0aGlzLml0ZW1TaXplLCBjb250ZW50UG9zLnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBzZXRDb250ZW50UG9zaXRpb246IGZ1bmN0aW9uIHNldENvbnRlbnRQb3NpdGlvbihwb3MpIHtcbiAgICAgIHZhciBfdGhpczcgPSB0aGlzO1xuICAgICAgaWYgKHRoaXMuY29udGVudCAmJiAhdGhpcy5hcHBlbmRPbmx5KSB7XG4gICAgICAgIHZhciBib3RoID0gdGhpcy5pc0JvdGgoKTtcbiAgICAgICAgdmFyIGhvcml6b250YWwgPSB0aGlzLmlzSG9yaXpvbnRhbCgpO1xuICAgICAgICB2YXIgZmlyc3QgPSBwb3MgPyBwb3MuZmlyc3QgOiB0aGlzLmZpcnN0O1xuICAgICAgICB2YXIgY2FsY3VsYXRlVHJhbnNsYXRlVmFsID0gZnVuY3Rpb24gY2FsY3VsYXRlVHJhbnNsYXRlVmFsKF9maXJzdCwgX3NpemUpIHtcbiAgICAgICAgICByZXR1cm4gX2ZpcnN0ICogX3NpemU7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBzZXRUcmFuc2Zvcm0gPSBmdW5jdGlvbiBzZXRUcmFuc2Zvcm0oKSB7XG4gICAgICAgICAgdmFyIF94ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAwO1xuICAgICAgICAgIHZhciBfeSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgICAgICAgICByZXR1cm4gX3RoaXM3LmNvbnRlbnRTdHlsZSA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgX3RoaXM3LmNvbnRlbnRTdHlsZSksIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUzZChcIi5jb25jYXQoX3gsIFwicHgsIFwiKS5jb25jYXQoX3ksIFwicHgsIDApXCIpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChib3RoKSB7XG4gICAgICAgICAgc2V0VHJhbnNmb3JtKGNhbGN1bGF0ZVRyYW5zbGF0ZVZhbChmaXJzdC5jb2xzLCB0aGlzLml0ZW1TaXplWzFdKSwgY2FsY3VsYXRlVHJhbnNsYXRlVmFsKGZpcnN0LnJvd3MsIHRoaXMuaXRlbVNpemVbMF0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgdHJhbnNsYXRlVmFsID0gY2FsY3VsYXRlVHJhbnNsYXRlVmFsKGZpcnN0LCB0aGlzLml0ZW1TaXplKTtcbiAgICAgICAgICBob3Jpem9udGFsID8gc2V0VHJhbnNmb3JtKHRyYW5zbGF0ZVZhbCwgMCkgOiBzZXRUcmFuc2Zvcm0oMCwgdHJhbnNsYXRlVmFsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25TY3JvbGxQb3NpdGlvbkNoYW5nZTogZnVuY3Rpb24gb25TY3JvbGxQb3NpdGlvbkNoYW5nZShldmVudCkge1xuICAgICAgdmFyIF90aGlzOCA9IHRoaXM7XG4gICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgdmFyIGJvdGggPSB0aGlzLmlzQm90aCgpO1xuICAgICAgdmFyIGhvcml6b250YWwgPSB0aGlzLmlzSG9yaXpvbnRhbCgpO1xuICAgICAgdmFyIGNvbnRlbnRQb3MgPSB0aGlzLmdldENvbnRlbnRQb3NpdGlvbigpO1xuICAgICAgdmFyIGNhbGN1bGF0ZVNjcm9sbFBvcyA9IGZ1bmN0aW9uIGNhbGN1bGF0ZVNjcm9sbFBvcyhfcG9zLCBfY3Bvcykge1xuICAgICAgICByZXR1cm4gX3BvcyA/IF9wb3MgPiBfY3BvcyA/IF9wb3MgLSBfY3BvcyA6IF9wb3MgOiAwO1xuICAgICAgfTtcbiAgICAgIHZhciBjYWxjdWxhdGVDdXJyZW50SW5kZXggPSBmdW5jdGlvbiBjYWxjdWxhdGVDdXJyZW50SW5kZXgoX3BvcywgX3NpemUpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoX3BvcyAvIChfc2l6ZSB8fCBfcG9zKSk7XG4gICAgICB9O1xuICAgICAgdmFyIGNhbGN1bGF0ZVRyaWdnZXJJbmRleCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZVRyaWdnZXJJbmRleChfY3VycmVudEluZGV4LCBfZmlyc3QsIF9sYXN0LCBfbnVtLCBfbnVtVCwgX2lzU2Nyb2xsRG93bk9yUmlnaHQpIHtcbiAgICAgICAgcmV0dXJuIF9jdXJyZW50SW5kZXggPD0gX251bVQgPyBfbnVtVCA6IF9pc1Njcm9sbERvd25PclJpZ2h0ID8gX2xhc3QgLSBfbnVtIC0gX251bVQgOiBfZmlyc3QgKyBfbnVtVCAtIDE7XG4gICAgICB9O1xuICAgICAgdmFyIGNhbGN1bGF0ZUZpcnN0ID0gZnVuY3Rpb24gY2FsY3VsYXRlRmlyc3QoX2N1cnJlbnRJbmRleCwgX3RyaWdnZXJJbmRleCwgX2ZpcnN0LCBfbGFzdCwgX251bSwgX251bVQsIF9pc1Njcm9sbERvd25PclJpZ2h0KSB7XG4gICAgICAgIGlmIChfY3VycmVudEluZGV4IDw9IF9udW1UKSByZXR1cm4gMDtlbHNlIHJldHVybiBNYXRoLm1heCgwLCBfaXNTY3JvbGxEb3duT3JSaWdodCA/IF9jdXJyZW50SW5kZXggPCBfdHJpZ2dlckluZGV4ID8gX2ZpcnN0IDogX2N1cnJlbnRJbmRleCAtIF9udW1UIDogX2N1cnJlbnRJbmRleCA+IF90cmlnZ2VySW5kZXggPyBfZmlyc3QgOiBfY3VycmVudEluZGV4IC0gMiAqIF9udW1UKTtcbiAgICAgIH07XG4gICAgICB2YXIgY2FsY3VsYXRlTGFzdCA9IGZ1bmN0aW9uIGNhbGN1bGF0ZUxhc3QoX2N1cnJlbnRJbmRleCwgX2ZpcnN0LCBfbGFzdCwgX251bSwgX251bVQsIF9pc0NvbHMpIHtcbiAgICAgICAgdmFyIGxhc3RWYWx1ZSA9IF9maXJzdCArIF9udW0gKyAyICogX251bVQ7XG4gICAgICAgIGlmIChfY3VycmVudEluZGV4ID49IF9udW1UKSB7XG4gICAgICAgICAgbGFzdFZhbHVlICs9IF9udW1UICsgMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM4LmdldExhc3QobGFzdFZhbHVlLCBfaXNDb2xzKTtcbiAgICAgIH07XG4gICAgICB2YXIgc2Nyb2xsVG9wID0gY2FsY3VsYXRlU2Nyb2xsUG9zKHRhcmdldC5zY3JvbGxUb3AsIGNvbnRlbnRQb3MudG9wKTtcbiAgICAgIHZhciBzY3JvbGxMZWZ0ID0gY2FsY3VsYXRlU2Nyb2xsUG9zKHRhcmdldC5zY3JvbGxMZWZ0LCBjb250ZW50UG9zLmxlZnQpO1xuICAgICAgdmFyIG5ld0ZpcnN0ID0gYm90aCA/IHtcbiAgICAgICAgcm93czogMCxcbiAgICAgICAgY29sczogMFxuICAgICAgfSA6IDA7XG4gICAgICB2YXIgbmV3TGFzdCA9IHRoaXMubGFzdDtcbiAgICAgIHZhciBpc1JhbmdlQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgdmFyIG5ld1Njcm9sbFBvcyA9IHRoaXMubGFzdFNjcm9sbFBvcztcbiAgICAgIGlmIChib3RoKSB7XG4gICAgICAgIHZhciBpc1Njcm9sbERvd24gPSB0aGlzLmxhc3RTY3JvbGxQb3MudG9wIDw9IHNjcm9sbFRvcDtcbiAgICAgICAgdmFyIGlzU2Nyb2xsUmlnaHQgPSB0aGlzLmxhc3RTY3JvbGxQb3MubGVmdCA8PSBzY3JvbGxMZWZ0O1xuICAgICAgICBpZiAoIXRoaXMuYXBwZW5kT25seSB8fCB0aGlzLmFwcGVuZE9ubHkgJiYgKGlzU2Nyb2xsRG93biB8fCBpc1Njcm9sbFJpZ2h0KSkge1xuICAgICAgICAgIHZhciBjdXJyZW50SW5kZXggPSB7XG4gICAgICAgICAgICByb3dzOiBjYWxjdWxhdGVDdXJyZW50SW5kZXgoc2Nyb2xsVG9wLCB0aGlzLml0ZW1TaXplWzBdKSxcbiAgICAgICAgICAgIGNvbHM6IGNhbGN1bGF0ZUN1cnJlbnRJbmRleChzY3JvbGxMZWZ0LCB0aGlzLml0ZW1TaXplWzFdKVxuICAgICAgICAgIH07XG4gICAgICAgICAgdmFyIHRyaWdnZXJJbmRleCA9IHtcbiAgICAgICAgICAgIHJvd3M6IGNhbGN1bGF0ZVRyaWdnZXJJbmRleChjdXJyZW50SW5kZXgucm93cywgdGhpcy5maXJzdC5yb3dzLCB0aGlzLmxhc3Qucm93cywgdGhpcy5udW1JdGVtc0luVmlld3BvcnQucm93cywgdGhpcy5kX251bVRvbGVyYXRlZEl0ZW1zWzBdLCBpc1Njcm9sbERvd24pLFxuICAgICAgICAgICAgY29sczogY2FsY3VsYXRlVHJpZ2dlckluZGV4KGN1cnJlbnRJbmRleC5jb2xzLCB0aGlzLmZpcnN0LmNvbHMsIHRoaXMubGFzdC5jb2xzLCB0aGlzLm51bUl0ZW1zSW5WaWV3cG9ydC5jb2xzLCB0aGlzLmRfbnVtVG9sZXJhdGVkSXRlbXNbMV0sIGlzU2Nyb2xsUmlnaHQpXG4gICAgICAgICAgfTtcbiAgICAgICAgICBuZXdGaXJzdCA9IHtcbiAgICAgICAgICAgIHJvd3M6IGNhbGN1bGF0ZUZpcnN0KGN1cnJlbnRJbmRleC5yb3dzLCB0cmlnZ2VySW5kZXgucm93cywgdGhpcy5maXJzdC5yb3dzLCB0aGlzLmxhc3Qucm93cywgdGhpcy5udW1JdGVtc0luVmlld3BvcnQucm93cywgdGhpcy5kX251bVRvbGVyYXRlZEl0ZW1zWzBdLCBpc1Njcm9sbERvd24pLFxuICAgICAgICAgICAgY29sczogY2FsY3VsYXRlRmlyc3QoY3VycmVudEluZGV4LmNvbHMsIHRyaWdnZXJJbmRleC5jb2xzLCB0aGlzLmZpcnN0LmNvbHMsIHRoaXMubGFzdC5jb2xzLCB0aGlzLm51bUl0ZW1zSW5WaWV3cG9ydC5jb2xzLCB0aGlzLmRfbnVtVG9sZXJhdGVkSXRlbXNbMV0sIGlzU2Nyb2xsUmlnaHQpXG4gICAgICAgICAgfTtcbiAgICAgICAgICBuZXdMYXN0ID0ge1xuICAgICAgICAgICAgcm93czogY2FsY3VsYXRlTGFzdChjdXJyZW50SW5kZXgucm93cywgbmV3Rmlyc3Qucm93cywgdGhpcy5sYXN0LnJvd3MsIHRoaXMubnVtSXRlbXNJblZpZXdwb3J0LnJvd3MsIHRoaXMuZF9udW1Ub2xlcmF0ZWRJdGVtc1swXSksXG4gICAgICAgICAgICBjb2xzOiBjYWxjdWxhdGVMYXN0KGN1cnJlbnRJbmRleC5jb2xzLCBuZXdGaXJzdC5jb2xzLCB0aGlzLmxhc3QuY29scywgdGhpcy5udW1JdGVtc0luVmlld3BvcnQuY29scywgdGhpcy5kX251bVRvbGVyYXRlZEl0ZW1zWzFdLCB0cnVlKVxuICAgICAgICAgIH07XG4gICAgICAgICAgaXNSYW5nZUNoYW5nZWQgPSBuZXdGaXJzdC5yb3dzICE9PSB0aGlzLmZpcnN0LnJvd3MgfHwgbmV3TGFzdC5yb3dzICE9PSB0aGlzLmxhc3Qucm93cyB8fCBuZXdGaXJzdC5jb2xzICE9PSB0aGlzLmZpcnN0LmNvbHMgfHwgbmV3TGFzdC5jb2xzICE9PSB0aGlzLmxhc3QuY29scyB8fCB0aGlzLmlzUmFuZ2VDaGFuZ2VkO1xuICAgICAgICAgIG5ld1Njcm9sbFBvcyA9IHtcbiAgICAgICAgICAgIHRvcDogc2Nyb2xsVG9wLFxuICAgICAgICAgICAgbGVmdDogc2Nyb2xsTGVmdFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzY3JvbGxQb3MgPSBob3Jpem9udGFsID8gc2Nyb2xsTGVmdCA6IHNjcm9sbFRvcDtcbiAgICAgICAgdmFyIGlzU2Nyb2xsRG93bk9yUmlnaHQgPSB0aGlzLmxhc3RTY3JvbGxQb3MgPD0gc2Nyb2xsUG9zO1xuICAgICAgICBpZiAoIXRoaXMuYXBwZW5kT25seSB8fCB0aGlzLmFwcGVuZE9ubHkgJiYgaXNTY3JvbGxEb3duT3JSaWdodCkge1xuICAgICAgICAgIHZhciBfY3VycmVudEluZGV4MiA9IGNhbGN1bGF0ZUN1cnJlbnRJbmRleChzY3JvbGxQb3MsIHRoaXMuaXRlbVNpemUpO1xuICAgICAgICAgIHZhciBfdHJpZ2dlckluZGV4MiA9IGNhbGN1bGF0ZVRyaWdnZXJJbmRleChfY3VycmVudEluZGV4MiwgdGhpcy5maXJzdCwgdGhpcy5sYXN0LCB0aGlzLm51bUl0ZW1zSW5WaWV3cG9ydCwgdGhpcy5kX251bVRvbGVyYXRlZEl0ZW1zLCBpc1Njcm9sbERvd25PclJpZ2h0KTtcbiAgICAgICAgICBuZXdGaXJzdCA9IGNhbGN1bGF0ZUZpcnN0KF9jdXJyZW50SW5kZXgyLCBfdHJpZ2dlckluZGV4MiwgdGhpcy5maXJzdCwgdGhpcy5sYXN0LCB0aGlzLm51bUl0ZW1zSW5WaWV3cG9ydCwgdGhpcy5kX251bVRvbGVyYXRlZEl0ZW1zLCBpc1Njcm9sbERvd25PclJpZ2h0KTtcbiAgICAgICAgICBuZXdMYXN0ID0gY2FsY3VsYXRlTGFzdChfY3VycmVudEluZGV4MiwgbmV3Rmlyc3QsIHRoaXMubGFzdCwgdGhpcy5udW1JdGVtc0luVmlld3BvcnQsIHRoaXMuZF9udW1Ub2xlcmF0ZWRJdGVtcyk7XG4gICAgICAgICAgaXNSYW5nZUNoYW5nZWQgPSBuZXdGaXJzdCAhPT0gdGhpcy5maXJzdCB8fCBuZXdMYXN0ICE9PSB0aGlzLmxhc3QgfHwgdGhpcy5pc1JhbmdlQ2hhbmdlZDtcbiAgICAgICAgICBuZXdTY3JvbGxQb3MgPSBzY3JvbGxQb3M7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGZpcnN0OiBuZXdGaXJzdCxcbiAgICAgICAgbGFzdDogbmV3TGFzdCxcbiAgICAgICAgaXNSYW5nZUNoYW5nZWQ6IGlzUmFuZ2VDaGFuZ2VkLFxuICAgICAgICBzY3JvbGxQb3M6IG5ld1Njcm9sbFBvc1xuICAgICAgfTtcbiAgICB9LFxuICAgIG9uU2Nyb2xsQ2hhbmdlOiBmdW5jdGlvbiBvblNjcm9sbENoYW5nZShldmVudCkge1xuICAgICAgdmFyIF90aGlzJG9uU2Nyb2xsUG9zaXRpbyA9IHRoaXMub25TY3JvbGxQb3NpdGlvbkNoYW5nZShldmVudCksXG4gICAgICAgIGZpcnN0ID0gX3RoaXMkb25TY3JvbGxQb3NpdGlvLmZpcnN0LFxuICAgICAgICBsYXN0ID0gX3RoaXMkb25TY3JvbGxQb3NpdGlvLmxhc3QsXG4gICAgICAgIGlzUmFuZ2VDaGFuZ2VkID0gX3RoaXMkb25TY3JvbGxQb3NpdGlvLmlzUmFuZ2VDaGFuZ2VkLFxuICAgICAgICBzY3JvbGxQb3MgPSBfdGhpcyRvblNjcm9sbFBvc2l0aW8uc2Nyb2xsUG9zO1xuICAgICAgaWYgKGlzUmFuZ2VDaGFuZ2VkKSB7XG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICBmaXJzdDogZmlyc3QsXG4gICAgICAgICAgbGFzdDogbGFzdFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldENvbnRlbnRQb3NpdGlvbihuZXdTdGF0ZSk7XG4gICAgICAgIHRoaXMuZmlyc3QgPSBmaXJzdDtcbiAgICAgICAgdGhpcy5sYXN0ID0gbGFzdDtcbiAgICAgICAgdGhpcy5sYXN0U2Nyb2xsUG9zID0gc2Nyb2xsUG9zO1xuICAgICAgICB0aGlzLiRlbWl0KCdzY3JvbGwtaW5kZXgtY2hhbmdlJywgbmV3U3RhdGUpO1xuICAgICAgICBpZiAodGhpcy5sYXp5ICYmIHRoaXMuaXNQYWdlQ2hhbmdlZChmaXJzdCkpIHtcbiAgICAgICAgICB2YXIgX3RoaXMkaXRlbXMyLCBfdGhpcyRpdGVtczM7XG4gICAgICAgICAgdmFyIGxhenlMb2FkU3RhdGUgPSB7XG4gICAgICAgICAgICBmaXJzdDogdGhpcy5zdGVwID8gTWF0aC5taW4odGhpcy5nZXRQYWdlQnlGaXJzdChmaXJzdCkgKiB0aGlzLnN0ZXAsICgoKF90aGlzJGl0ZW1zMiA9IHRoaXMuaXRlbXMpID09PSBudWxsIHx8IF90aGlzJGl0ZW1zMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkaXRlbXMyLmxlbmd0aCkgfHwgMCkgLSB0aGlzLnN0ZXApIDogZmlyc3QsXG4gICAgICAgICAgICBsYXN0OiBNYXRoLm1pbih0aGlzLnN0ZXAgPyAodGhpcy5nZXRQYWdlQnlGaXJzdChmaXJzdCkgKyAxKSAqIHRoaXMuc3RlcCA6IGxhc3QsICgoX3RoaXMkaXRlbXMzID0gdGhpcy5pdGVtcykgPT09IG51bGwgfHwgX3RoaXMkaXRlbXMzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRpdGVtczMubGVuZ3RoKSB8fCAwKVxuICAgICAgICAgIH07XG4gICAgICAgICAgdmFyIGlzTGF6eVN0YXRlQ2hhbmdlZCA9IHRoaXMubGF6eUxvYWRTdGF0ZS5maXJzdCAhPT0gbGF6eUxvYWRTdGF0ZS5maXJzdCB8fCB0aGlzLmxhenlMb2FkU3RhdGUubGFzdCAhPT0gbGF6eUxvYWRTdGF0ZS5sYXN0O1xuICAgICAgICAgIGlzTGF6eVN0YXRlQ2hhbmdlZCAmJiB0aGlzLiRlbWl0KCdsYXp5LWxvYWQnLCBsYXp5TG9hZFN0YXRlKTtcbiAgICAgICAgICB0aGlzLmxhenlMb2FkU3RhdGUgPSBsYXp5TG9hZFN0YXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvblNjcm9sbDogZnVuY3Rpb24gb25TY3JvbGwoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpczkgPSB0aGlzO1xuICAgICAgdGhpcy4kZW1pdCgnc2Nyb2xsJywgZXZlbnQpO1xuICAgICAgaWYgKHRoaXMuZGVsYXkpIHtcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsVGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNjcm9sbFRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzUGFnZUNoYW5nZWQoKSkge1xuICAgICAgICAgIGlmICghdGhpcy5kX2xvYWRpbmcgJiYgdGhpcy5zaG93TG9hZGVyKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMkb25TY3JvbGxQb3NpdGlvMiA9IHRoaXMub25TY3JvbGxQb3NpdGlvbkNoYW5nZShldmVudCksXG4gICAgICAgICAgICAgIGlzUmFuZ2VDaGFuZ2VkID0gX3RoaXMkb25TY3JvbGxQb3NpdGlvMi5pc1JhbmdlQ2hhbmdlZDtcbiAgICAgICAgICAgIHZhciBjaGFuZ2VkID0gaXNSYW5nZUNoYW5nZWQgfHwgKHRoaXMuc3RlcCA/IHRoaXMuaXNQYWdlQ2hhbmdlZCgpIDogZmFsc2UpO1xuICAgICAgICAgICAgY2hhbmdlZCAmJiAodGhpcy5kX2xvYWRpbmcgPSB0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zY3JvbGxUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpczkub25TY3JvbGxDaGFuZ2UoZXZlbnQpO1xuICAgICAgICAgICAgaWYgKF90aGlzOS5kX2xvYWRpbmcgJiYgX3RoaXM5LnNob3dMb2FkZXIgJiYgKCFfdGhpczkubGF6eSB8fCBfdGhpczkubG9hZGluZyA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgICBfdGhpczkuZF9sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIF90aGlzOS5wYWdlID0gX3RoaXM5LmdldFBhZ2VCeUZpcnN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgdGhpcy5kZWxheSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25TY3JvbGxDaGFuZ2UoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25SZXNpemU6IGZ1bmN0aW9uIG9uUmVzaXplKCkge1xuICAgICAgdmFyIF90aGlzMTAgPSB0aGlzO1xuICAgICAgaWYgKHRoaXMucmVzaXplVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lb3V0KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoRG9tSGFuZGxlci5pc1Zpc2libGUoX3RoaXMxMC5lbGVtZW50KSkge1xuICAgICAgICAgIHZhciBib3RoID0gX3RoaXMxMC5pc0JvdGgoKTtcbiAgICAgICAgICB2YXIgdmVydGljYWwgPSBfdGhpczEwLmlzVmVydGljYWwoKTtcbiAgICAgICAgICB2YXIgaG9yaXpvbnRhbCA9IF90aGlzMTAuaXNIb3Jpem9udGFsKCk7XG4gICAgICAgICAgdmFyIF9yZWYzID0gW0RvbUhhbmRsZXIuZ2V0V2lkdGgoX3RoaXMxMC5lbGVtZW50KSwgRG9tSGFuZGxlci5nZXRIZWlnaHQoX3RoaXMxMC5lbGVtZW50KV0sXG4gICAgICAgICAgICB3aWR0aCA9IF9yZWYzWzBdLFxuICAgICAgICAgICAgaGVpZ2h0ID0gX3JlZjNbMV07XG4gICAgICAgICAgdmFyIGlzRGlmZldpZHRoID0gd2lkdGggIT09IF90aGlzMTAuZGVmYXVsdFdpZHRoLFxuICAgICAgICAgICAgaXNEaWZmSGVpZ2h0ID0gaGVpZ2h0ICE9PSBfdGhpczEwLmRlZmF1bHRIZWlnaHQ7XG4gICAgICAgICAgdmFyIHJlaW5pdCA9IGJvdGggPyBpc0RpZmZXaWR0aCB8fCBpc0RpZmZIZWlnaHQgOiBob3Jpem9udGFsID8gaXNEaWZmV2lkdGggOiB2ZXJ0aWNhbCA/IGlzRGlmZkhlaWdodCA6IGZhbHNlO1xuICAgICAgICAgIGlmIChyZWluaXQpIHtcbiAgICAgICAgICAgIF90aGlzMTAuZF9udW1Ub2xlcmF0ZWRJdGVtcyA9IF90aGlzMTAubnVtVG9sZXJhdGVkSXRlbXM7XG4gICAgICAgICAgICBfdGhpczEwLmRlZmF1bHRXaWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgX3RoaXMxMC5kZWZhdWx0SGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgX3RoaXMxMC5kZWZhdWx0Q29udGVudFdpZHRoID0gRG9tSGFuZGxlci5nZXRXaWR0aChfdGhpczEwLmNvbnRlbnQpO1xuICAgICAgICAgICAgX3RoaXMxMC5kZWZhdWx0Q29udGVudEhlaWdodCA9IERvbUhhbmRsZXIuZ2V0SGVpZ2h0KF90aGlzMTAuY29udGVudCk7XG4gICAgICAgICAgICBfdGhpczEwLmluaXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMucmVzaXplRGVsYXkpO1xuICAgIH0sXG4gICAgYmluZFJlc2l6ZUxpc3RlbmVyOiBmdW5jdGlvbiBiaW5kUmVzaXplTGlzdGVuZXIoKSB7XG4gICAgICBpZiAoIXRoaXMucmVzaXplTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5yZXNpemVMaXN0ZW5lciA9IHRoaXMub25SZXNpemUuYmluZCh0aGlzKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplTGlzdGVuZXIpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCB0aGlzLnJlc2l6ZUxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHVuYmluZFJlc2l6ZUxpc3RlbmVyOiBmdW5jdGlvbiB1bmJpbmRSZXNpemVMaXN0ZW5lcigpIHtcbiAgICAgIGlmICh0aGlzLnJlc2l6ZUxpc3RlbmVyKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZUxpc3RlbmVyKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29yaWVudGF0aW9uY2hhbmdlJywgdGhpcy5yZXNpemVMaXN0ZW5lcik7XG4gICAgICAgIHRoaXMucmVzaXplTGlzdGVuZXIgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0T3B0aW9uczogZnVuY3Rpb24gZ2V0T3B0aW9ucyhyZW5kZXJlZEluZGV4KSB7XG4gICAgICB2YXIgY291bnQgPSAodGhpcy5pdGVtcyB8fCBbXSkubGVuZ3RoO1xuICAgICAgdmFyIGluZGV4ID0gdGhpcy5pc0JvdGgoKSA/IHRoaXMuZmlyc3Qucm93cyArIHJlbmRlcmVkSW5kZXggOiB0aGlzLmZpcnN0ICsgcmVuZGVyZWRJbmRleDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgY291bnQ6IGNvdW50LFxuICAgICAgICBmaXJzdDogaW5kZXggPT09IDAsXG4gICAgICAgIGxhc3Q6IGluZGV4ID09PSBjb3VudCAtIDEsXG4gICAgICAgIGV2ZW46IGluZGV4ICUgMiA9PT0gMCxcbiAgICAgICAgb2RkOiBpbmRleCAlIDIgIT09IDBcbiAgICAgIH07XG4gICAgfSxcbiAgICBnZXRMb2FkZXJPcHRpb25zOiBmdW5jdGlvbiBnZXRMb2FkZXJPcHRpb25zKGluZGV4LCBleHRPcHRpb25zKSB7XG4gICAgICB2YXIgY291bnQgPSB0aGlzLmxvYWRlckFyci5sZW5ndGg7XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7XG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgY291bnQ6IGNvdW50LFxuICAgICAgICBmaXJzdDogaW5kZXggPT09IDAsXG4gICAgICAgIGxhc3Q6IGluZGV4ID09PSBjb3VudCAtIDEsXG4gICAgICAgIGV2ZW46IGluZGV4ICUgMiA9PT0gMCxcbiAgICAgICAgb2RkOiBpbmRleCAlIDIgIT09IDBcbiAgICAgIH0sIGV4dE9wdGlvbnMpO1xuICAgIH0sXG4gICAgZ2V0UGFnZUJ5Rmlyc3Q6IGZ1bmN0aW9uIGdldFBhZ2VCeUZpcnN0KGZpcnN0KSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigoKGZpcnN0ICE9PSBudWxsICYmIGZpcnN0ICE9PSB2b2lkIDAgPyBmaXJzdCA6IHRoaXMuZmlyc3QpICsgdGhpcy5kX251bVRvbGVyYXRlZEl0ZW1zICogNCkgLyAodGhpcy5zdGVwIHx8IDEpKTtcbiAgICB9LFxuICAgIGlzUGFnZUNoYW5nZWQ6IGZ1bmN0aW9uIGlzUGFnZUNoYW5nZWQoZmlyc3QpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0ZXAgPyB0aGlzLnBhZ2UgIT09IHRoaXMuZ2V0UGFnZUJ5Rmlyc3QoZmlyc3QgIT09IG51bGwgJiYgZmlyc3QgIT09IHZvaWQgMCA/IGZpcnN0IDogdGhpcy5maXJzdCkgOiB0cnVlO1xuICAgIH0sXG4gICAgc2V0Q29udGVudEVsOiBmdW5jdGlvbiBzZXRDb250ZW50RWwoZWwpIHtcbiAgICAgIHRoaXMuY29udGVudCA9IGVsIHx8IHRoaXMuY29udGVudCB8fCBEb21IYW5kbGVyLmZpbmRTaW5nbGUodGhpcy5lbGVtZW50LCAnW2RhdGEtcGMtc2VjdGlvbj1cImNvbnRlbnRcIl0nKTtcbiAgICB9LFxuICAgIGVsZW1lbnRSZWY6IGZ1bmN0aW9uIGVsZW1lbnRSZWYoZWwpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IGVsO1xuICAgIH0sXG4gICAgY29udGVudFJlZjogZnVuY3Rpb24gY29udGVudFJlZihlbCkge1xuICAgICAgdGhpcy5jb250ZW50ID0gZWw7XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNvbnRhaW5lckNsYXNzOiBmdW5jdGlvbiBjb250YWluZXJDbGFzcygpIHtcbiAgICAgIHJldHVybiBbJ3AtdmlydHVhbHNjcm9sbGVyJywgdGhpc1tcImNsYXNzXCJdLCB7XG4gICAgICAgICdwLXZpcnR1YWxzY3JvbGxlci1pbmxpbmUnOiB0aGlzLmlubGluZSxcbiAgICAgICAgJ3AtdmlydHVhbHNjcm9sbGVyLWJvdGggcC1ib3RoLXNjcm9sbCc6IHRoaXMuaXNCb3RoKCksXG4gICAgICAgICdwLXZpcnR1YWxzY3JvbGxlci1ob3Jpem9udGFsIHAtaG9yaXpvbnRhbC1zY3JvbGwnOiB0aGlzLmlzSG9yaXpvbnRhbCgpXG4gICAgICB9XTtcbiAgICB9LFxuICAgIGNvbnRlbnRDbGFzczogZnVuY3Rpb24gY29udGVudENsYXNzKCkge1xuICAgICAgcmV0dXJuIFsncC12aXJ0dWFsc2Nyb2xsZXItY29udGVudCcsIHtcbiAgICAgICAgJ3AtdmlydHVhbHNjcm9sbGVyLWxvYWRpbmcnOiB0aGlzLmRfbG9hZGluZ1xuICAgICAgfV07XG4gICAgfSxcbiAgICBsb2FkZXJDbGFzczogZnVuY3Rpb24gbG9hZGVyQ2xhc3MoKSB7XG4gICAgICByZXR1cm4gWydwLXZpcnR1YWxzY3JvbGxlci1sb2FkZXInLCB7XG4gICAgICAgICdwLWNvbXBvbmVudC1vdmVybGF5JzogIXRoaXMuJHNsb3RzLmxvYWRlclxuICAgICAgfV07XG4gICAgfSxcbiAgICBsb2FkZWRJdGVtczogZnVuY3Rpb24gbG9hZGVkSXRlbXMoKSB7XG4gICAgICB2YXIgX3RoaXMxMSA9IHRoaXM7XG4gICAgICBpZiAodGhpcy5pdGVtcyAmJiAhdGhpcy5kX2xvYWRpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNCb3RoKCkpIHJldHVybiB0aGlzLml0ZW1zLnNsaWNlKHRoaXMuYXBwZW5kT25seSA/IDAgOiB0aGlzLmZpcnN0LnJvd3MsIHRoaXMubGFzdC5yb3dzKS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMxMS5jb2x1bW5zID8gaXRlbSA6IGl0ZW0uc2xpY2UoX3RoaXMxMS5hcHBlbmRPbmx5ID8gMCA6IF90aGlzMTEuZmlyc3QuY29scywgX3RoaXMxMS5sYXN0LmNvbHMpO1xuICAgICAgICB9KTtlbHNlIGlmICh0aGlzLmlzSG9yaXpvbnRhbCgpICYmIHRoaXMuY29sdW1ucykgcmV0dXJuIHRoaXMuaXRlbXM7ZWxzZSByZXR1cm4gdGhpcy5pdGVtcy5zbGljZSh0aGlzLmFwcGVuZE9ubHkgPyAwIDogdGhpcy5maXJzdCwgdGhpcy5sYXN0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbXTtcbiAgICB9LFxuICAgIGxvYWRlZFJvd3M6IGZ1bmN0aW9uIGxvYWRlZFJvd3MoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kX2xvYWRpbmcgPyB0aGlzLmxvYWRlckRpc2FibGVkID8gdGhpcy5sb2FkZXJBcnIgOiBbXSA6IHRoaXMubG9hZGVkSXRlbXM7XG4gICAgfSxcbiAgICBsb2FkZWRDb2x1bW5zOiBmdW5jdGlvbiBsb2FkZWRDb2x1bW5zKCkge1xuICAgICAgaWYgKHRoaXMuY29sdW1ucykge1xuICAgICAgICB2YXIgYm90aCA9IHRoaXMuaXNCb3RoKCk7XG4gICAgICAgIHZhciBob3Jpem9udGFsID0gdGhpcy5pc0hvcml6b250YWwoKTtcbiAgICAgICAgaWYgKGJvdGggfHwgaG9yaXpvbnRhbCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmRfbG9hZGluZyAmJiB0aGlzLmxvYWRlckRpc2FibGVkID8gYm90aCA/IHRoaXMubG9hZGVyQXJyWzBdIDogdGhpcy5sb2FkZXJBcnIgOiB0aGlzLmNvbHVtbnMuc2xpY2UoYm90aCA/IHRoaXMuZmlyc3QuY29scyA6IHRoaXMuZmlyc3QsIGJvdGggPyB0aGlzLmxhc3QuY29scyA6IHRoaXMubGFzdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmNvbHVtbnM7XG4gICAgfVxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgU3Bpbm5lckljb246IFNwaW5uZXJJY29uXG4gIH1cbn07XG5cbnZhciBfaG9pc3RlZF8xID0gW1widGFiaW5kZXhcIl07XG5mdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHZhciBfY29tcG9uZW50X1NwaW5uZXJJY29uID0gcmVzb2x2ZUNvbXBvbmVudChcIlNwaW5uZXJJY29uXCIpO1xuICByZXR1cm4gIV9jdHguZGlzYWJsZWQgPyAob3BlbkJsb2NrKCksIGNyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBtZXJnZVByb3BzKHtcbiAgICBrZXk6IDAsXG4gICAgcmVmOiAkb3B0aW9ucy5lbGVtZW50UmVmLFxuICAgIFwiY2xhc3NcIjogJG9wdGlvbnMuY29udGFpbmVyQ2xhc3MsXG4gICAgdGFiaW5kZXg6IF9jdHgudGFiaW5kZXgsXG4gICAgc3R5bGU6IF9jdHguc3R5bGUsXG4gICAgb25TY3JvbGw6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICRvcHRpb25zLm9uU2Nyb2xsICYmICRvcHRpb25zLm9uU2Nyb2xsLmFwcGx5KCRvcHRpb25zLCBhcmd1bWVudHMpO1xuICAgIH0pXG4gIH0sIF9jdHgucHRtaSgncm9vdCcpKSwgW3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiY29udGVudFwiLCB7XG4gICAgc3R5bGVDbGFzczogJG9wdGlvbnMuY29udGVudENsYXNzLFxuICAgIGl0ZW1zOiAkb3B0aW9ucy5sb2FkZWRJdGVtcyxcbiAgICBnZXRJdGVtT3B0aW9uczogJG9wdGlvbnMuZ2V0T3B0aW9ucyxcbiAgICBsb2FkaW5nOiAkZGF0YS5kX2xvYWRpbmcsXG4gICAgZ2V0TG9hZGVyT3B0aW9uczogJG9wdGlvbnMuZ2V0TG9hZGVyT3B0aW9ucyxcbiAgICBpdGVtU2l6ZTogX2N0eC5pdGVtU2l6ZSxcbiAgICByb3dzOiAkb3B0aW9ucy5sb2FkZWRSb3dzLFxuICAgIGNvbHVtbnM6ICRvcHRpb25zLmxvYWRlZENvbHVtbnMsXG4gICAgY29udGVudFJlZjogJG9wdGlvbnMuY29udGVudFJlZixcbiAgICBzcGFjZXJTdHlsZTogJGRhdGEuc3BhY2VyU3R5bGUsXG4gICAgY29udGVudFN0eWxlOiAkZGF0YS5jb250ZW50U3R5bGUsXG4gICAgdmVydGljYWw6ICRvcHRpb25zLmlzVmVydGljYWwoKSxcbiAgICBob3Jpem9udGFsOiAkb3B0aW9ucy5pc0hvcml6b250YWwoKSxcbiAgICBib3RoOiAkb3B0aW9ucy5pc0JvdGgoKVxuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFtjcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgbWVyZ2VQcm9wcyh7XG4gICAgICByZWY6ICRvcHRpb25zLmNvbnRlbnRSZWYsXG4gICAgICBcImNsYXNzXCI6ICRvcHRpb25zLmNvbnRlbnRDbGFzcyxcbiAgICAgIHN0eWxlOiAkZGF0YS5jb250ZW50U3R5bGVcbiAgICB9LCBfY3R4LnB0bSgnY29udGVudCcpKSwgWyhvcGVuQmxvY2sodHJ1ZSksIGNyZWF0ZUVsZW1lbnRCbG9jayhGcmFnbWVudCwgbnVsbCwgcmVuZGVyTGlzdCgkb3B0aW9ucy5sb2FkZWRJdGVtcywgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICByZXR1cm4gcmVuZGVyU2xvdChfY3R4LiRzbG90cywgXCJpdGVtXCIsIHtcbiAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgb3B0aW9uczogJG9wdGlvbnMuZ2V0T3B0aW9ucyhpbmRleClcbiAgICAgIH0pO1xuICAgIH0pLCAxMjgpKV0sIDE2KV07XG4gIH0pLCBfY3R4LnNob3dTcGFjZXIgPyAob3BlbkJsb2NrKCksIGNyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBtZXJnZVByb3BzKHtcbiAgICBrZXk6IDAsXG4gICAgXCJjbGFzc1wiOiBcInAtdmlydHVhbHNjcm9sbGVyLXNwYWNlclwiLFxuICAgIHN0eWxlOiAkZGF0YS5zcGFjZXJTdHlsZVxuICB9LCBfY3R4LnB0bSgnc3BhY2VyJykpLCBudWxsLCAxNikpIDogY3JlYXRlQ29tbWVudFZOb2RlKFwiXCIsIHRydWUpLCAhX2N0eC5sb2FkZXJEaXNhYmxlZCAmJiBfY3R4LnNob3dMb2FkZXIgJiYgJGRhdGEuZF9sb2FkaW5nID8gKG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgbWVyZ2VQcm9wcyh7XG4gICAga2V5OiAxLFxuICAgIFwiY2xhc3NcIjogJG9wdGlvbnMubG9hZGVyQ2xhc3NcbiAgfSwgX2N0eC5wdG0oJ2xvYWRlcicpKSwgW19jdHguJHNsb3RzICYmIF9jdHguJHNsb3RzLmxvYWRlciA/IChvcGVuQmxvY2sodHJ1ZSksIGNyZWF0ZUVsZW1lbnRCbG9jayhGcmFnbWVudCwge1xuICAgIGtleTogMFxuICB9LCByZW5kZXJMaXN0KCRkYXRhLmxvYWRlckFyciwgZnVuY3Rpb24gKF8sIGluZGV4KSB7XG4gICAgcmV0dXJuIHJlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwibG9hZGVyXCIsIHtcbiAgICAgIGtleTogaW5kZXgsXG4gICAgICBvcHRpb25zOiAkb3B0aW9ucy5nZXRMb2FkZXJPcHRpb25zKGluZGV4LCAkb3B0aW9ucy5pc0JvdGgoKSAmJiB7XG4gICAgICAgIG51bUNvbHM6IF9jdHguZF9udW1JdGVtc0luVmlld3BvcnQuY29sc1xuICAgICAgfSlcbiAgICB9KTtcbiAgfSksIDEyOCkpIDogY3JlYXRlQ29tbWVudFZOb2RlKFwiXCIsIHRydWUpLCByZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImxvYWRpbmdpY29uXCIsIHt9LCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFtjcmVhdGVWTm9kZShfY29tcG9uZW50X1NwaW5uZXJJY29uLCBtZXJnZVByb3BzKHtcbiAgICAgIHNwaW46IFwiXCIsXG4gICAgICBcImNsYXNzXCI6IFwicC12aXJ0dWFsc2Nyb2xsZXItbG9hZGluZy1pY29uXCJcbiAgICB9LCBfY3R4LnB0bSgnbG9hZGluZ0ljb24nKSksIG51bGwsIDE2KV07XG4gIH0pXSwgMTYpKSA6IGNyZWF0ZUNvbW1lbnRWTm9kZShcIlwiLCB0cnVlKV0sIDE2LCBfaG9pc3RlZF8xKSkgOiAob3BlbkJsb2NrKCksIGNyZWF0ZUVsZW1lbnRCbG9jayhGcmFnbWVudCwge1xuICAgIGtleTogMVxuICB9LCBbcmVuZGVyU2xvdChfY3R4LiRzbG90cywgXCJkZWZhdWx0XCIpLCByZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImNvbnRlbnRcIiwge1xuICAgIGl0ZW1zOiBfY3R4Lml0ZW1zLFxuICAgIHJvd3M6IF9jdHguaXRlbXMsXG4gICAgY29sdW1uczogJG9wdGlvbnMubG9hZGVkQ29sdW1uc1xuICB9KV0sIDY0KSk7XG59XG5cbnNjcmlwdC5yZW5kZXIgPSByZW5kZXI7XG5cbmV4cG9ydCB7IHNjcmlwdCBhcyBkZWZhdWx0IH07XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckAyLjAuMF93ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDUuMi43X3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vdnVlLWxvYWRlckAxNi44LjNfQHZ1ZStjb21waWxlci1zZmNAMy41LjE2X3Z1ZUAzLjUuMTZfdHlwZXNjcmlwdEA1LjguM19fd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Bvc3Rjc3MtbG9hZGVyQDYuMi4xX3Bvc3Rjc3NAOC41LjRfd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2Fzcy1sb2FkZXJAMTYuMC41X3Nhc3NAMS44OS4yX3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Z1ZS1sb2FkZXJAMTYuOC4zX0B2dWUrY29tcGlsZXItc2ZjQDMuNS4xNl92dWVAMy41LjE2X3R5cGVzY3JpcHRANS44LjNfX3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vUHZTZWxlY3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTQ0OTI0MWMmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vUHZTZWxlY3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE0NDkyNDFjXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUHZTZWxlY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1B2U2VsZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vUHZTZWxlY3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTQ0OTI0MWMmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL2FwcC9wbHVnaW5zL3plbi90aHJlZXMvbm9kZV9tb2R1bGVzLy5wbnBtL3Z1ZS1sb2FkZXJAMTYuOC4zX0B2dWUrY29tcGlsZXItc2ZjQDMuNS4xNl92dWVAMy41LjE2X3R5cGVzY3JpcHRANS44LjNfX3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJzcmMvdnVlL3RyYXNoL0R3YXJmL2lucHV0cy9QdlNlbGVjdC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMTQ0OTI0MWNcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcxNDQ5MjQxYycsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzE0NDkyNDFjJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QdlNlbGVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTQ0OTI0MWNcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignMTQ0OTI0MWMnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYmFiZWwtbG9hZGVyQDguNC4xX0BiYWJlbCtjb3JlQDcuMjcuNF93ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vdnVlLWxvYWRlckAxNi44LjNfQHZ1ZStjb21waWxlci1zZmNAMy41LjE2X3Z1ZUAzLjUuMTZfdHlwZXNjcmlwdEA1LjguM19fd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9QdlNlbGVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JhYmVsLWxvYWRlckA4LjQuMV9AYmFiZWwrY29yZUA3LjI3LjRfd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Z1ZS1sb2FkZXJAMTYuOC4zX0B2dWUrY29tcGlsZXItc2ZjQDMuNS4xNl92dWVAMy41LjE2X3R5cGVzY3JpcHRANS44LjNfX3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vUHZTZWxlY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDIuMC4wX3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANS4yLjdfd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcG9zdGNzcy1sb2FkZXJANi4yLjFfcG9zdGNzc0A4LjUuNF93ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zYXNzLWxvYWRlckAxNi4wLjVfc2Fzc0AxLjg5LjJfd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vdnVlLWxvYWRlckAxNi44LjNfQHZ1ZStjb21waWxlci1zZmNAMy41LjE2X3Z1ZUAzLjUuMTZfdHlwZXNjcmlwdEA1LjguM19fd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9QdlNlbGVjdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNDQ5MjQxYyZsYW5nPXNjc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9iYWJlbC1sb2FkZXJAOC40LjFfQGJhYmVsK2NvcmVANy4yNy40X3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1B2U2VsZWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNDQ5MjQxY1wiIl0sIm5hbWVzIjpbIkRyb3Bkb3duIiwibmFtZSIsImNvbXBvbmVudHMiLCJlbWl0cyIsInByb3BzIiwibW9kZWxWYWx1ZSIsIm9wdGlvbnMiLCJ0eXBlIiwiQXJyYXkiLCJzaXplIiwiU3RyaW5nIiwic3R5bGUiLCJsYWJlbCIsIkZ1bmN0aW9uIiwic2VhcmNoIiwiZWxlbWVudCIsIk9iamVjdCIsImNyZWF0ZWQiLCJrZXkiLCJBUFAiLCJkYXRhIiwiY29tcHV0ZWQiLCJpbm5lcl9sYWJlbCIsImlubmVyX29wdGlvbnMiLCJsb2FkZWRfb3B0aW9ucyIsImxlbmd0aCIsInByZWxvYWRlciIsInRpbWVyIiwibWV0aG9kcyIsIm9uSW5wdXQiLCJldmVudCIsInZhbHVlIiwiJGVtaXQiLCJvbkNoYW5nZSIsImZpbHRlciIsInRleHQiLCJfdGhpcyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJnZXRPcHRpb25zIiwiX3RoaXMyIiwiYXBpIiwidXJsIiwic2VhcmNoX3RleHQiLCJ0aGVuIiwidW5zaGlmdCIsImlkIiwicXVlcnlPcHRpb25zIiwicXVlcnkiLCJfdGhpczMiLCJzZXRPcHRpb25zIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9ub3JtYWxpemVDbGFzcyIsIiRwcm9wcyIsIl9ub3JtYWxpemVTdHlsZSIsIiRvcHRpb25zIiwiX2hvaXN0ZWRfMSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY3JlYXRlVk5vZGUiLCJfY29tcG9uZW50X0Ryb3Bkb3duIiwiZWRpdGFibGUiLCJsb2FkaW5nIiwiJGRhdGEiLCJvbkZpbHRlciIsIl9jYWNoZSIsIiRldmVudCJdLCJzb3VyY2VSb290IjoiIn0=