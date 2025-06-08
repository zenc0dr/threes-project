"use strict";
(self["webpackChunkthrees"] = self["webpackChunkthrees"] || []).push([["src_vue_components_nodes_NodeText_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/nodes/NodeText.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/nodes/NodeText.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NodeText",
  props: {
    node: {
      type: Object,
      required: true
    },
    scope: {
      type: String,
      required: false,
      "default": null
    }
  },
  data: function data() {
    return {
      content: this.node.data,
      ths: window.ths,
      debouncedUpdate: null
    };
  },
  watch: {
    content: function content(new_val, old_val) {
      if (new_val === old_val) {
        return;
      }
      this.debouncedUpdate();
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.resize();
    this.debouncedUpdate = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)(function () {
      return _this.updateData(_this.content);
    }, 2000);
  },
  methods: {
    onInput: function onInput() {
      this.resize();
    },
    resize: function resize() {
      var ta = this.$refs.textarea;
      if (ta) {
        ta.style.height = "auto";
        ta.style.height = ta.scrollHeight + "px";
      }
    },
    updateData: function updateData(data) {
      var _this2 = this;
      this.ths.api({
        api: 'nodes.node:update-data',
        data: {
          nid: this.node.nid,
          data: data
        },
        then: function then() {
          _this2.ths.exe('Schema', 'getSchema');
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/nodes/NodeText.vue?vue&type=template&id=1759cd58":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/nodes/NodeText.vue?vue&type=template&id=1759cd58 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "node-text"
};
var _hoisted_2 = {
  key: 0,
  "class": "node-text__header"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$props.scope === 'schema' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.node.name), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "node-text__content",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.content = $event;
    }),
    onInput: _cache[1] || (_cache[1] = function () {
      return $options.onInput && $options.onInput.apply($options, arguments);
    }),
    ref: "textarea"
  }, "        ", 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.content]])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/nodes/NodeText.vue?vue&type=style&index=0&id=1759cd58&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/nodes/NodeText.vue?vue&type=style&index=0&id=1759cd58&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".node-text {\n  background: #fff;\n  border-radius: 4px;\n}\n.node-text__header {\n  font-size: 18px;\n  margin-left: 20px;\n  font-weight: bold;\n  color: #8c8c8c;\n  margin-bottom: -6px;\n}\n.node-text__content {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 5px 10px;\n  font-size: 17px;\n  resize: none;\n  overflow: hidden;\n  outline: none;\n  border: none;\n}", "",{"version":3,"sources":["webpack://./src/vue/components/nodes/NodeText.vue"],"names":[],"mappings":"AACA;EACI,gBAAA;EACA,kBAAA;AAAJ;AACI;EACI,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,cAAA;EACA,mBAAA;AACR;AACI;EACI,WAAA;EACA,sBAAA;EACA,iBAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;EACA,YAAA;AACR","sourcesContent":["\n.node-text {\n    background: #fff;\n    border-radius: 4px;\n    &__header {\n        font-size: 18px;\n        margin-left: 20px;\n        font-weight: bold;\n        color: #8c8c8c;\n        margin-bottom: -6px;\n    }\n    &__content {\n        width: 100%;\n        box-sizing: border-box;\n        padding: 5px 10px;\n        font-size: 17px;\n        resize: none;\n        overflow: hidden;\n        outline: none;\n        border: none;\n    }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/nodes/NodeText.vue?vue&type=style&index=0&id=1759cd58&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/nodes/NodeText.vue?vue&type=style&index=0&id=1759cd58&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeText_vue_vue_type_style_index_0_id_1759cd58_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NodeText.vue?vue&type=style&index=0&id=1759cd58&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/nodes/NodeText.vue?vue&type=style&index=0&id=1759cd58&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeText_vue_vue_type_style_index_0_id_1759cd58_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeText_vue_vue_type_style_index_0_id_1759cd58_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/vue/components/nodes/NodeText.vue":
/*!***********************************************!*\
  !*** ./src/vue/components/nodes/NodeText.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NodeText_vue_vue_type_template_id_1759cd58__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeText.vue?vue&type=template&id=1759cd58 */ "./src/vue/components/nodes/NodeText.vue?vue&type=template&id=1759cd58");
/* harmony import */ var _NodeText_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeText.vue?vue&type=script&lang=js */ "./src/vue/components/nodes/NodeText.vue?vue&type=script&lang=js");
/* harmony import */ var _NodeText_vue_vue_type_style_index_0_id_1759cd58_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NodeText.vue?vue&type=style&index=0&id=1759cd58&lang=scss */ "./src/vue/components/nodes/NodeText.vue?vue&type=style&index=0&id=1759cd58&lang=scss");
/* harmony import */ var _app_plugins_zen_threes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_app_plugins_zen_threes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_NodeText_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NodeText_vue_vue_type_template_id_1759cd58__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/vue/components/nodes/NodeText.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/vue/components/nodes/NodeText.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./src/vue/components/nodes/NodeText.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeText_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeText_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NodeText.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/nodes/NodeText.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/vue/components/nodes/NodeText.vue?vue&type=template&id=1759cd58":
/*!*****************************************************************************!*\
  !*** ./src/vue/components/nodes/NodeText.vue?vue&type=template&id=1759cd58 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeText_vue_vue_type_template_id_1759cd58__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeText_vue_vue_type_template_id_1759cd58__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NodeText.vue?vue&type=template&id=1759cd58 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/nodes/NodeText.vue?vue&type=template&id=1759cd58");


/***/ }),

/***/ "./src/vue/components/nodes/NodeText.vue?vue&type=style&index=0&id=1759cd58&lang=scss":
/*!********************************************************************************************!*\
  !*** ./src/vue/components/nodes/NodeText.vue?vue&type=style&index=0&id=1759cd58&lang=scss ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeText_vue_vue_type_style_index_0_id_1759cd58_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NodeText.vue?vue&type=style&index=0&id=1759cd58&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/nodes/NodeText.vue?vue&type=style&index=0&id=1759cd58&lang=scss");


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc3JjX3Z1ZV9jb21wb25lbnRzX25vZGVzX05vZGVUZXh0X3Z1ZS5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBa0JnQztBQUVoQyxpRUFBZTtFQUNYQyxJQUFJLEVBQUUsVUFBVTtFQUNoQkMsS0FBSyxFQUFFO0lBQ0hDLElBQUksRUFBRTtNQUNGQyxJQUFJLEVBQUVDLE1BQU07TUFDWkMsUUFBUSxFQUFFO0lBQ2QsQ0FBQztJQUNEQyxLQUFLLEVBQUU7TUFDSEgsSUFBSSxFQUFFSSxNQUFNO01BQ1pGLFFBQVEsRUFBRSxLQUFLO01BQ2YsV0FBUztJQUNiO0VBQ0osQ0FBQztFQUNERyxJQUFJLFdBQUpBLElBQUlBLENBQUEsRUFBRztJQUNILE9BQU87TUFDSEMsT0FBTyxFQUFFLElBQUksQ0FBQ1AsSUFBSSxDQUFDTSxJQUFJO01BQ3ZCRSxHQUFHLEVBQUVDLE1BQU0sQ0FBQ0QsR0FBRztNQUNmRSxlQUFlLEVBQUU7SUFDckIsQ0FBQztFQUNMLENBQUM7RUFDREMsS0FBSyxFQUFFO0lBQ0hKLE9BQU8sV0FBUEEsT0FBT0EsQ0FBQ0ssT0FBTyxFQUFFQyxPQUFPLEVBQUU7TUFDdEIsSUFBSUQsT0FBTSxLQUFNQyxPQUFPLEVBQUU7UUFDckI7TUFDSjtNQUNBLElBQUksQ0FBQ0gsZUFBZSxDQUFDO0lBQ3pCO0VBQ0osQ0FBQztFQUNESSxPQUFPLFdBQVBBLE9BQU9BLENBQUEsRUFBRztJQUFBLElBQUFDLEtBQUE7SUFDTixJQUFJLENBQUNDLE1BQU0sQ0FBQztJQUNaLElBQUksQ0FBQ04sZUFBYyxHQUFJYixnREFBUSxDQUFDO01BQUEsT0FBTWtCLEtBQUksQ0FBQ0UsVUFBVSxDQUFDRixLQUFJLENBQUNSLE9BQU8sQ0FBQztJQUFBLEdBQUUsSUFBSTtFQUM3RSxDQUFDO0VBQ0RXLE9BQU8sRUFBRTtJQUNMQyxPQUFPLFdBQVBBLE9BQU9BLENBQUEsRUFBRztNQUNOLElBQUksQ0FBQ0gsTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDREEsTUFB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cy8uL3NyYy92dWUvY29tcG9uZW50cy9ub2Rlcy9Ob2RlVGV4dC52dWUiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL25vZGVzL05vZGVUZXh0LnZ1ZT8wODkxIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9ub2Rlcy9Ob2RlVGV4dC52dWU/NWQ1YSIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvbm9kZXMvTm9kZVRleHQudnVlPzZhOTkiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL25vZGVzL05vZGVUZXh0LnZ1ZT80MzZhIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibm9kZS10ZXh0XCI+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwic2NvcGUgPT09ICdzY2hlbWEnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS10ZXh0X19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICB7eyBub2RlLm5hbWUgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGNsYXNzPVwibm9kZS10ZXh0X19jb250ZW50XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJjb250ZW50XCJcbiAgICAgICAgICAgIEBpbnB1dD1cIm9uSW5wdXRcIlxuICAgICAgICAgICAgcmVmPVwidGV4dGFyZWFcIlxuICAgICAgICA+XG4gICAgICAgIDwvdGV4dGFyZWE+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIk5vZGVUZXh0XCIsXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbm9kZToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMubm9kZS5kYXRhLFxuICAgICAgICAgICAgdGhzOiB3aW5kb3cudGhzLFxuICAgICAgICAgICAgZGVib3VuY2VkVXBkYXRlOiBudWxsXG4gICAgICAgIH07XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBjb250ZW50KG5ld192YWwsIG9sZF92YWwpIHtcbiAgICAgICAgICAgIGlmIChuZXdfdmFsID09PSBvbGRfdmFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kZWJvdW5jZWRVcGRhdGUoKVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLnJlc2l6ZSgpXG4gICAgICAgIHRoaXMuZGVib3VuY2VkVXBkYXRlID0gZGVib3VuY2UoKCkgPT4gdGhpcy51cGRhdGVEYXRhKHRoaXMuY29udGVudCksIDIwMDApXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uSW5wdXQoKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSgpXG4gICAgICAgIH0sXG4gICAgICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhID0gdGhpcy4kcmVmcy50ZXh0YXJlYVxuICAgICAgICAgICAgaWYgKHRhKSB7XG4gICAgICAgICAgICAgICAgdGEuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCJcbiAgICAgICAgICAgICAgICB0YS5zdHlsZS5oZWlnaHQgPSB0YS5zY3JvbGxIZWlnaHQgKyBcInB4XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlRGF0YShkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnRocy5hcGkoe1xuICAgICAgICAgICAgICAgIGFwaTogJ25vZGVzLm5vZGU6dXBkYXRlLWRhdGEnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbmlkOiB0aGlzLm5vZGUubmlkLFxuICAgICAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhzLmV4ZSgnU2NoZW1hJywgJ2dldFNjaGVtYScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLm5vZGUtdGV4dCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgJl9faGVhZGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjOGM4YzhjO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtNnB4O1xuICAgIH1cbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbn1cblxuPC9zdHlsZT5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5vZGUtdGV4dCB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4ubm9kZS10ZXh0X19oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjOGM4YzhjO1xcbiAgbWFyZ2luLWJvdHRvbTogLTZweDtcXG59XFxuLm5vZGUtdGV4dF9fY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdnVlL2NvbXBvbmVudHMvbm9kZXMvTm9kZVRleHQudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUFKO0FBQ0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQ0k7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5ub2RlLXRleHQge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICZfX2hlYWRlciB7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgY29sb3I6ICM4YzhjOGM7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtNnB4O1xcbiAgICB9XFxuICAgICZfX2NvbnRlbnQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgICAgICBmb250LXNpemU6IDE3cHg7XFxuICAgICAgICByZXNpemU6IG5vbmU7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGVUZXh0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE3NTljZDU4Jmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL05vZGVUZXh0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNzU5Y2Q1OFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05vZGVUZXh0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Ob2RlVGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL05vZGVUZXh0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE3NTljZDU4Jmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9hcHAvcGx1Z2lucy96ZW4vdGhyZWVzL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJzcmMvdnVlL2NvbXBvbmVudHMvbm9kZXMvTm9kZVRleHQudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjE3NTljZDU4XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMTc1OWNkNTgnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCcxNzU5Y2Q1OCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTm9kZVRleHQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE3NTljZDU4XCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzE3NTljZDU4JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2RlVGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2RlVGV4dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiJdLCJuYW1lcyI6WyJkZWJvdW5jZSIsIm5hbWUiLCJwcm9wcyIsIm5vZGUiLCJ0eXBlIiwiT2JqZWN0IiwicmVxdWlyZWQiLCJzY29wZSIsIlN0cmluZyIsImRhdGEiLCJjb250ZW50IiwidGhzIiwid2luZG93IiwiZGVib3VuY2VkVXBkYXRlIiwid2F0Y2giLCJuZXdfdmFsIiwib2xkX3ZhbCIsIm1vdW50ZWQiLCJfdGhpcyIsInJlc2l6ZSIsInVwZGF0ZURhdGEiLCJtZXRob2RzIiwib25JbnB1dCIsInRhIiwiJHJlZnMiLCJ0ZXh0YXJlYSIsInN0eWxlIiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiX3RoaXMyIiwiYXBpIiwibmlkIiwidGhlbiIsImV4ZSIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfaG9pc3RlZF8xIiwiJHByb3BzIiwiX2hvaXN0ZWRfMiIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiJGRhdGEiLCIkZXZlbnQiLCJfY2FjaGUiLCIkb3B0aW9ucyIsImFwcGx5IiwiYXJndW1lbnRzIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==