"use strict";
(self["webpackChunkthrees"] = self["webpackChunkthrees"] || []).push([["nodes_NodeCode_NodeCode_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./nodes/NodeCode/NodeCode.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./nodes/NodeCode/NodeCode.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NodeCode",
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./nodes/NodeCode/NodeCode.vue?vue&type=template&id=50bb0e93":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./nodes/NodeCode/NodeCode.vue?vue&type=template&id=50bb0e93 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "node-code"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Хай йоу ")), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "node-code__content",
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./nodes/NodeCode/NodeCode.vue?vue&type=style&index=0&id=50bb0e93&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./nodes/NodeCode/NodeCode.vue?vue&type=style&index=0&id=50bb0e93&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".node-text {\n  background: #fff;\n  border-radius: 4px;\n}\n.node-text__header {\n  font-size: 18px;\n  margin-left: 20px;\n  font-weight: bold;\n  color: #8c8c8c;\n  margin-bottom: -6px;\n}\n.node-text__content {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 5px 10px;\n  font-size: 17px;\n  resize: none;\n  overflow: hidden;\n  outline: none;\n  border: none;\n}", "",{"version":3,"sources":["webpack://./nodes/NodeCode/NodeCode.vue"],"names":[],"mappings":"AACA;EACI,gBAAA;EACA,kBAAA;AAAJ;AACI;EACI,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,cAAA;EACA,mBAAA;AACR;AACI;EACI,WAAA;EACA,sBAAA;EACA,iBAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;EACA,YAAA;AACR","sourcesContent":["\n.node-text {\n    background: #fff;\n    border-radius: 4px;\n    &__header {\n        font-size: 18px;\n        margin-left: 20px;\n        font-weight: bold;\n        color: #8c8c8c;\n        margin-bottom: -6px;\n    }\n    &__content {\n        width: 100%;\n        box-sizing: border-box;\n        padding: 5px 10px;\n        font-size: 17px;\n        resize: none;\n        overflow: hidden;\n        outline: none;\n        border: none;\n    }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./nodes/NodeCode/NodeCode.vue?vue&type=style&index=0&id=50bb0e93&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./nodes/NodeCode/NodeCode.vue?vue&type=style&index=0&id=50bb0e93&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeCode_vue_vue_type_style_index_0_id_50bb0e93_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NodeCode.vue?vue&type=style&index=0&id=50bb0e93&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./nodes/NodeCode/NodeCode.vue?vue&type=style&index=0&id=50bb0e93&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeCode_vue_vue_type_style_index_0_id_50bb0e93_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeCode_vue_vue_type_style_index_0_id_50bb0e93_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./nodes/NodeCode/NodeCode.vue":
/*!*************************************!*\
  !*** ./nodes/NodeCode/NodeCode.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NodeCode_vue_vue_type_template_id_50bb0e93__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeCode.vue?vue&type=template&id=50bb0e93 */ "./nodes/NodeCode/NodeCode.vue?vue&type=template&id=50bb0e93");
/* harmony import */ var _NodeCode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeCode.vue?vue&type=script&lang=js */ "./nodes/NodeCode/NodeCode.vue?vue&type=script&lang=js");
/* harmony import */ var _NodeCode_vue_vue_type_style_index_0_id_50bb0e93_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NodeCode.vue?vue&type=style&index=0&id=50bb0e93&lang=scss */ "./nodes/NodeCode/NodeCode.vue?vue&type=style&index=0&id=50bb0e93&lang=scss");
/* harmony import */ var _app_plugins_zen_threes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_app_plugins_zen_threes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_NodeCode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NodeCode_vue_vue_type_template_id_50bb0e93__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"nodes/NodeCode/NodeCode.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./nodes/NodeCode/NodeCode.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./nodes/NodeCode/NodeCode.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeCode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeCode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NodeCode.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./nodes/NodeCode/NodeCode.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./nodes/NodeCode/NodeCode.vue?vue&type=template&id=50bb0e93":
/*!*******************************************************************!*\
  !*** ./nodes/NodeCode/NodeCode.vue?vue&type=template&id=50bb0e93 ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeCode_vue_vue_type_template_id_50bb0e93__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeCode_vue_vue_type_template_id_50bb0e93__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NodeCode.vue?vue&type=template&id=50bb0e93 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./nodes/NodeCode/NodeCode.vue?vue&type=template&id=50bb0e93");


/***/ }),

/***/ "./nodes/NodeCode/NodeCode.vue?vue&type=style&index=0&id=50bb0e93&lang=scss":
/*!**********************************************************************************!*\
  !*** ./nodes/NodeCode/NodeCode.vue?vue&type=style&index=0&id=50bb0e93&lang=scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeCode_vue_vue_type_style_index_0_id_50bb0e93_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NodeCode.vue?vue&type=style&index=0&id=50bb0e93&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./nodes/NodeCode/NodeCode.vue?vue&type=style&index=0&id=50bb0e93&lang=scss");


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUNMNUI7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLHNEQUFzRCxxQkFBcUIsdUJBQXVCLEdBQUcsc0JBQXNCLG9CQUFvQixzQkFBc0Isc0JBQXNCLG1CQUFtQix3QkFBd0IsR0FBRyx1QkFBdUIsZ0JBQWdCLDJCQUEyQixzQkFBc0Isb0JBQW9CLGlCQUFpQixxQkFBcUIsa0JBQWtCLGlCQUFpQixHQUFHLE9BQU8sOEZBQThGLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsdUNBQXVDLHVCQUF1Qix5QkFBeUIsaUJBQWlCLDBCQUEwQiw0QkFBNEIsNEJBQTRCLHlCQUF5Qiw4QkFBOEIsT0FBTyxrQkFBa0Isc0JBQXNCLGlDQUFpQyw0QkFBNEIsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHVCQUF1QixPQUFPLEdBQUcsdUJBQXVCO0FBQ2pyQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQcUQ7QUFDNUYsWUFBbWE7O0FBRW5hOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLDhYQUFPOzs7O0FBSXhCLGlFQUFlLDhYQUFPLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1prQztBQUNWO0FBQ0w7O0FBRXRELENBQW9FOztBQUU4QjtBQUNsRyxpQ0FBaUMsZ0hBQWUsQ0FBQyw2RUFBTSxhQUFhLCtFQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFjZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQzFCd0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aHJlZXMvLi9ub2Rlcy9Ob2RlQ29kZS9Ob2RlQ29kZS52dWUiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vbm9kZXMvTm9kZUNvZGUvTm9kZUNvZGUudnVlP2M1YWMiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vbm9kZXMvTm9kZUNvZGUvTm9kZUNvZGUudnVlPzZiN2MiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vbm9kZXMvTm9kZUNvZGUvTm9kZUNvZGUudnVlP2FmM2YiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vbm9kZXMvTm9kZUNvZGUvTm9kZUNvZGUudnVlPzNkMmMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJub2RlLWNvZGVcIj5cbiAgICAgICAg0KXQsNC5INC50L7Rg1xuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGNsYXNzPVwibm9kZS1jb2RlX19jb250ZW50XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJjb250ZW50XCJcbiAgICAgICAgICAgIEBpbnB1dD1cIm9uSW5wdXRcIlxuICAgICAgICAgICAgcmVmPVwidGV4dGFyZWFcIlxuICAgICAgICA+XG4gICAgICAgIDwvdGV4dGFyZWE+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIk5vZGVDb2RlXCIsXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbm9kZToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMubm9kZS5kYXRhLFxuICAgICAgICAgICAgdGhzOiB3aW5kb3cudGhzLFxuICAgICAgICAgICAgZGVib3VuY2VkVXBkYXRlOiBudWxsXG4gICAgICAgIH07XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBjb250ZW50KG5ld192YWwsIG9sZF92YWwpIHtcbiAgICAgICAgICAgIGlmIChuZXdfdmFsID09PSBvbGRfdmFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kZWJvdW5jZWRVcGRhdGUoKVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLnJlc2l6ZSgpXG4gICAgICAgIHRoaXMuZGVib3VuY2VkVXBkYXRlID0gZGVib3VuY2UoKCkgPT4gdGhpcy51cGRhdGVEYXRhKHRoaXMuY29udGVudCksIDIwMDApXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uSW5wdXQoKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSgpXG4gICAgICAgIH0sXG4gICAgICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhID0gdGhpcy4kcmVmcy50ZXh0YXJlYVxuICAgICAgICAgICAgaWYgKHRhKSB7XG4gICAgICAgICAgICAgICAgdGEuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCJcbiAgICAgICAgICAgICAgICB0YS5zdHlsZS5oZWlnaHQgPSB0YS5zY3JvbGxIZWlnaHQgKyBcInB4XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlRGF0YShkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnRocy5hcGkoe1xuICAgICAgICAgICAgICAgIGFwaTogJ25vZGVzLm5vZGU6dXBkYXRlLWRhdGEnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbmlkOiB0aGlzLm5vZGUubmlkLFxuICAgICAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhzLmV4ZSgnU2NoZW1hJywgJ2dldFNjaGVtYScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLm5vZGUtdGV4dCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgJl9faGVhZGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjOGM4YzhjO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtNnB4O1xuICAgIH1cbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbn1cblxuPC9zdHlsZT5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5vZGUtdGV4dCB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4ubm9kZS10ZXh0X19oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjOGM4YzhjO1xcbiAgbWFyZ2luLWJvdHRvbTogLTZweDtcXG59XFxuLm5vZGUtdGV4dF9fY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2Rlcy9Ob2RlQ29kZS9Ob2RlQ29kZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFDSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQ1I7QUFDSTtFQUNJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ1JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLm5vZGUtdGV4dCB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgJl9faGVhZGVyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBjb2xvcjogIzhjOGM4YztcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC02cHg7XFxuICAgIH1cXG4gICAgJl9fY29udGVudCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZUNvZGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTBiYjBlOTMmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vTm9kZUNvZGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUwYmIwZTkzXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTm9kZUNvZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL05vZGVDb2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vTm9kZUNvZGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTBiYjBlOTMmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL2FwcC9wbHVnaW5zL3plbi90aHJlZXMvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcIm5vZGVzL05vZGVDb2RlL05vZGVDb2RlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI1MGJiMGU5M1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzUwYmIwZTkzJywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnNTBiYjBlOTMnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05vZGVDb2RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MGJiMGU5M1wiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCc1MGJiMGU5MycsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZUNvZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZUNvZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiXSwibmFtZXMiOlsiZGVib3VuY2UiLCJuYW1lIiwicHJvcHMiLCJub2RlIiwidHlwZSIsIk9iamVjdCIsInJlcXVpcmVkIiwic2NvcGUiLCJTdHJpbmciLCJkYXRhIiwiY29udGVudCIsInRocyIsIndpbmRvdyIsImRlYm91bmNlZFVwZGF0ZSIsIndhdGNoIiwibmV3X3ZhbCIsIm9sZF92YWwiLCJtb3VudGVkIiwiX3RoaXMiLCJyZXNpemUiLCJ1cGRhdGVEYXRhIiwibWV0aG9kcyIsIm9uSW5wdXQiLCJ0YSIsIiRyZWZzIiwidGV4dGFyZWEiLCJzdHlsZSIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsIl90aGlzMiIsImFwaSIsIm5pZCIsInRoZW4iLCJleGUiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2hvaXN0ZWRfMSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCIkZGF0YSIsIiRldmVudCIsIl9jYWNoZSIsIiRvcHRpb25zIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9