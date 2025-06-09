"use strict";
(self["webpackChunkthrees"] = self["webpackChunkthrees"] || []).push([["src_vue_components_nodes_NodeCode_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/nodes/NodeCode.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/nodes/NodeCode.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/nodes/NodeCode.vue?vue&type=template&id=072dbbd8":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/nodes/NodeCode.vue?vue&type=template&id=072dbbd8 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/nodes/NodeCode.vue?vue&type=style&index=0&id=072dbbd8&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/nodes/NodeCode.vue?vue&type=style&index=0&id=072dbbd8&lang=scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".node-text {\n  background: #fff;\n  border-radius: 4px;\n}\n.node-text__header {\n  font-size: 18px;\n  margin-left: 20px;\n  font-weight: bold;\n  color: #8c8c8c;\n  margin-bottom: -6px;\n}\n.node-text__content {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 5px 10px;\n  font-size: 17px;\n  resize: none;\n  overflow: hidden;\n  outline: none;\n  border: none;\n}", "",{"version":3,"sources":["webpack://./src/vue/components/nodes/NodeCode.vue"],"names":[],"mappings":"AACA;EACI,gBAAA;EACA,kBAAA;AAAJ;AACI;EACI,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,cAAA;EACA,mBAAA;AACR;AACI;EACI,WAAA;EACA,sBAAA;EACA,iBAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;EACA,YAAA;AACR","sourcesContent":["\n.node-text {\n    background: #fff;\n    border-radius: 4px;\n    &__header {\n        font-size: 18px;\n        margin-left: 20px;\n        font-weight: bold;\n        color: #8c8c8c;\n        margin-bottom: -6px;\n    }\n    &__content {\n        width: 100%;\n        box-sizing: border-box;\n        padding: 5px 10px;\n        font-size: 17px;\n        resize: none;\n        overflow: hidden;\n        outline: none;\n        border: none;\n    }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/nodes/NodeCode.vue?vue&type=style&index=0&id=072dbbd8&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/nodes/NodeCode.vue?vue&type=style&index=0&id=072dbbd8&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeCode_vue_vue_type_style_index_0_id_072dbbd8_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NodeCode.vue?vue&type=style&index=0&id=072dbbd8&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/nodes/NodeCode.vue?vue&type=style&index=0&id=072dbbd8&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeCode_vue_vue_type_style_index_0_id_072dbbd8_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeCode_vue_vue_type_style_index_0_id_072dbbd8_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/vue/components/nodes/NodeCode.vue":
/*!***********************************************!*\
  !*** ./src/vue/components/nodes/NodeCode.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NodeCode_vue_vue_type_template_id_072dbbd8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeCode.vue?vue&type=template&id=072dbbd8 */ "./src/vue/components/nodes/NodeCode.vue?vue&type=template&id=072dbbd8");
/* harmony import */ var _NodeCode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeCode.vue?vue&type=script&lang=js */ "./src/vue/components/nodes/NodeCode.vue?vue&type=script&lang=js");
/* harmony import */ var _NodeCode_vue_vue_type_style_index_0_id_072dbbd8_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NodeCode.vue?vue&type=style&index=0&id=072dbbd8&lang=scss */ "./src/vue/components/nodes/NodeCode.vue?vue&type=style&index=0&id=072dbbd8&lang=scss");
/* harmony import */ var _app_plugins_zen_threes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_app_plugins_zen_threes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_NodeCode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NodeCode_vue_vue_type_template_id_072dbbd8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/vue/components/nodes/NodeCode.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/vue/components/nodes/NodeCode.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./src/vue/components/nodes/NodeCode.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeCode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeCode_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NodeCode.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/nodes/NodeCode.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/vue/components/nodes/NodeCode.vue?vue&type=template&id=072dbbd8":
/*!*****************************************************************************!*\
  !*** ./src/vue/components/nodes/NodeCode.vue?vue&type=template&id=072dbbd8 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeCode_vue_vue_type_template_id_072dbbd8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeCode_vue_vue_type_template_id_072dbbd8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NodeCode.vue?vue&type=template&id=072dbbd8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/nodes/NodeCode.vue?vue&type=template&id=072dbbd8");


/***/ }),

/***/ "./src/vue/components/nodes/NodeCode.vue?vue&type=style&index=0&id=072dbbd8&lang=scss":
/*!********************************************************************************************!*\
  !*** ./src/vue/components/nodes/NodeCode.vue?vue&type=style&index=0&id=072dbbd8&lang=scss ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodeCode_vue_vue_type_style_index_0_id_072dbbd8_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NodeCode.vue?vue&type=style&index=0&id=072dbbd8&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/nodes/NodeCode.vue?vue&type=style&index=0&id=072dbbd8&lang=scss");


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc3JjX3Z1ZV9jb21wb25lbnRzX25vZGVzX05vZGVDb2RlX3Z1ZS5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBY2dDO0FBRWhDLGlFQUFlO0VBQ1hDLElBQUksRUFBRSxVQUFVO0VBQ2hCQyxLQUFLLEVBQUU7SUFDSEMsSUFBSSxFQUFFO01BQ0ZDLElBQUksRUFBRUMsTUFBTTtNQUNaQyxRQUFRLEVBQUU7SUFDZCxDQUFDO0lBQ0RDLEtBQUssRUFBRTtNQUNISCxJQUFJLEVBQUVJLE1BQU07TUFDWkYsUUFBUSxFQUFFLEtBQUs7TUFDZixXQUFTO0lBQ2I7RUFDSixDQUFDO0VBQ0RHLElBQUksV0FBSkEsSUFBSUEsQ0FBQSxFQUFHO0lBQ0gsT0FBTztNQUNIQyxPQUFPLEVBQUUsSUFBSSxDQUFDUCxJQUFJLENBQUNNLElBQUk7TUFDdkJFLEdBQUcsRUFBRUMsTUFBTSxDQUFDRCxHQUFHO01BQ2ZFLGVBQWUsRUFBRTtJQUNyQixDQUFDO0VBQ0wsQ0FBQztFQUNEQyxLQUFLLEVBQUU7SUFDSEosT0FBTyxXQUFQQSxPQUFPQSxDQUFDSyxPQUFPLEVBQUVDLE9BQU8sRUFBRTtNQUN0QixJQUFJRCxPQUFNLEtBQU1DLE9BQU8sRUFBRTtRQUNyQjtNQUNKO01BQ0EsSUFBSSxDQUFDSCxlQUFlLENBQUM7SUFDekI7RUFDSixDQUFDO0VBQ0RJLE9BQU8sV0FBUEEsT0FBT0EsQ0FBQSxFQUFHO0lBQUEsSUFBQUMsS0FBQTtJQUNOLElBQUksQ0FBQ0MsTUFBTSxDQUFDO0lBQ1osSUFBSSxDQUFDTixlQUFjLEdBQUliLGdEQUFRLENBQUM7TUFBQSxPQUFNa0IsS0FBSSxDQUFDRSxVQUFVLENBQUNGLEtBQUksQ0FBQ1IsT0FBTyxDQUFDO0lBQUEsR0FBRSxJQUFJO0VBQzdFLENBQUM7RUFDRFcsT0FBTyxFQUFFO0lBQ0xDLE9BQU8sV0FBUEEsT0FBT0EsQ0FBQSxFQUFHO01BQ04sSUFBSSxDQUFDSCxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUNEQSxNQUFNLFdBQU5BLE1BQU1BLENBQUEsRUFBRztNQUNMLElBQU1JLEVBQUMsR0FBSSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsUUFBTztNQUM3QixJQUFJRixFQUFFLEVBQUU7UUFDSkEsRUFBRSxDQUFDRyxLQUFLLENBQUNDLE1BQUssR0FBSSxNQUFLO1FBQ3ZCSixFQUFFLENBQUNHLEtBQUssQ0FBQ0MsTUFBSyxHQUFJSixFQUFFLENBQUNLLFlBQVcsR0FBSSxJQUFHO01BQzNDO0lBQ0osQ0FBQztJQUNEUixVQUFVLFdBQVZBLFVBQVVBLENBQUNYLElBQUksRUFBRTtNQUFBLElBQUFvQixNQUFBO01BQ2IsSUFBSSxDQUFDbEIsR0FBRyxDQUFDbUIsR0FBRyxDQUFDO1FBQ1RBLEdBQUcsRUFBRSx3QkFBd0I7UUFDN0JyQixJQUFJLEVBQUU7VUFDRnNCLEdBQUcsRUFBRSxJQUFJLENBQUM1QixJQUFJLENBQUM0QixHQUFHO1VBQ2xCdEIsSUFBRyxFQUFIQTtRQUNKLENBQUM7UUFDRHVCLElBQUksRUFBRSxTQUFOQSxJQUFJQSxDQUFBLEVBQVE7VUFDUkgsTUFBSSxDQUFDbEIsR0FBRyxDQUFDc0IsR0FBRyxDQUFDLFFBQVEsRUFBRSxXQUFXO1FBQ3RDO01BQ0osQ0FBQyxDQUFDO0lBQ047RUFDSjtBQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdkVRLFNBQU07QUFBVzs7MkRBQXRCQyx1REFBQSxDQVNNLE9BVE5DLFVBU00sa0ZBVGlCLFdBRW5CLHdEQUFBQyx1REFBQSxDQU1XO0lBTFAsU0FBTSxvQkFBb0I7O2FBQ2pCQyxLQUFBLENBQUEzQixPQUFPLEdBQUE0QixNQUFBO0lBQUE7SUFDZmhCLE9BQUssRUFBQWlCLE1BQUEsUUFBQUEsTUFBQTtNQUFBLE9BQUVDLFFBQUEsQ0FBQWxCLE9BQUEsSUFBQWtCLFFBQUEsQ0FBQWxCLE9BQUEsQ0FBQW1CLEtBQUEsQ0FBQUQsUUFBQSxFQUFBRSxTQUFBLENBQU87SUFBQTtJQUNmQyxHQUFHLEVBQUM7S0FDUCxVQUNELHdGQUphTixLQUFBLENBQUEzQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTDVCO0FBQytIO0FBQzdCO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxzREFBc0QscUJBQXFCLHVCQUF1QixHQUFHLHNCQUFzQixvQkFBb0Isc0JBQXNCLHNCQUFzQixtQkFBbUIsd0JBQXdCLEdBQUcsdUJBQXVCLGdCQUFnQiwyQkFBMkIsc0JBQXNCLG9CQUFvQixpQkFBaUIscUJBQXFCLGtCQUFrQixpQkFBaUIsR0FBRyxPQUFPLHdHQUF3RyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLHVDQUF1Qyx1QkFBdUIseUJBQXlCLGlCQUFpQiwwQkFBMEIsNEJBQTRCLDRCQUE0Qix5QkFBeUIsOEJBQThCLE9BQU8sa0JBQWtCLHNCQUFzQixpQ0FBaUMsNEJBQTRCLDBCQUEwQix1QkFBdUIsMkJBQTJCLHdCQUF3Qix1QkFBdUIsT0FBTyxHQUFHLHVCQUF1QjtBQUMzckM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUDJEO0FBQ2xHLFlBQWljOztBQUVqYzs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyw4WEFBTzs7OztBQUl4QixpRUFBZSw4WEFBTyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaa0M7QUFDVjtBQUNMOztBQUV0RCxDQUFvRTs7QUFFOEI7QUFDbEcsaUNBQWlDLGdIQUFlLENBQUMsNkVBQU0sYUFBYSwrRUFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBY2Y7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUMxQm9NIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL25vZGVzL05vZGVDb2RlLnZ1ZSIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvbm9kZXMvTm9kZUNvZGUudnVlPzUwNmQiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL25vZGVzL05vZGVDb2RlLnZ1ZT8zOWEwIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9ub2Rlcy9Ob2RlQ29kZS52dWU/MmFjMiIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvbm9kZXMvTm9kZUNvZGUudnVlPzM2ZTciXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJub2RlLWNvZGVcIj5cbiAgICAgICAg0KXQsNC5INC50L7Rg1xuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGNsYXNzPVwibm9kZS1jb2RlX19jb250ZW50XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJjb250ZW50XCJcbiAgICAgICAgICAgIEBpbnB1dD1cIm9uSW5wdXRcIlxuICAgICAgICAgICAgcmVmPVwidGV4dGFyZWFcIlxuICAgICAgICA+XG4gICAgICAgIDwvdGV4dGFyZWE+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIk5vZGVDb2RlXCIsXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbm9kZToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMubm9kZS5kYXRhLFxuICAgICAgICAgICAgdGhzOiB3aW5kb3cudGhzLFxuICAgICAgICAgICAgZGVib3VuY2VkVXBkYXRlOiBudWxsXG4gICAgICAgIH07XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBjb250ZW50KG5ld192YWwsIG9sZF92YWwpIHtcbiAgICAgICAgICAgIGlmIChuZXdfdmFsID09PSBvbGRfdmFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kZWJvdW5jZWRVcGRhdGUoKVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLnJlc2l6ZSgpXG4gICAgICAgIHRoaXMuZGVib3VuY2VkVXBkYXRlID0gZGVib3VuY2UoKCkgPT4gdGhpcy51cGRhdGVEYXRhKHRoaXMuY29udGVudCksIDIwMDApXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uSW5wdXQoKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSgpXG4gICAgICAgIH0sXG4gICAgICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhID0gdGhpcy4kcmVmcy50ZXh0YXJlYVxuICAgICAgICAgICAgaWYgKHRhKSB7XG4gICAgICAgICAgICAgICAgdGEuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCJcbiAgICAgICAgICAgICAgICB0YS5zdHlsZS5oZWlnaHQgPSB0YS5zY3JvbGxIZWlnaHQgKyBcInB4XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlRGF0YShkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnRocy5hcGkoe1xuICAgICAgICAgICAgICAgIGFwaTogJ25vZGVzLm5vZGU6dXBkYXRlLWRhdGEnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbmlkOiB0aGlzLm5vZGUubmlkLFxuICAgICAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhzLmV4ZSgnU2NoZW1hJywgJ2dldFNjaGVtYScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLm5vZGUtdGV4dCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgJl9faGVhZGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjOGM4YzhjO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtNnB4O1xuICAgIH1cbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbn1cblxuPC9zdHlsZT5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm5vZGUtdGV4dCB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4ubm9kZS10ZXh0X19oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjOGM4YzhjO1xcbiAgbWFyZ2luLWJvdHRvbTogLTZweDtcXG59XFxuLm5vZGUtdGV4dF9fY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdnVlL2NvbXBvbmVudHMvbm9kZXMvTm9kZUNvZGUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUFKO0FBQ0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQ0k7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUNSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5ub2RlLXRleHQge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICZfX2hlYWRlciB7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgY29sb3I6ICM4YzhjOGM7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtNnB4O1xcbiAgICB9XFxuICAgICZfX2NvbnRlbnQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgICAgICBmb250LXNpemU6IDE3cHg7XFxuICAgICAgICByZXNpemU6IG5vbmU7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGVDb2RlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA3MmRiYmQ4Jmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL05vZGVDb2RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNzJkYmJkOFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05vZGVDb2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Ob2RlQ29kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL05vZGVDb2RlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA3MmRiYmQ4Jmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9hcHAvcGx1Z2lucy96ZW4vdGhyZWVzL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJzcmMvdnVlL2NvbXBvbmVudHMvbm9kZXMvTm9kZUNvZGUudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjA3MmRiYmQ4XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMDcyZGJiZDgnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCcwNzJkYmJkOCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTm9kZUNvZGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3MmRiYmQ4XCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzA3MmRiYmQ4JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2RlQ29kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2RlQ29kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiJdLCJuYW1lcyI6WyJkZWJvdW5jZSIsIm5hbWUiLCJwcm9wcyIsIm5vZGUiLCJ0eXBlIiwiT2JqZWN0IiwicmVxdWlyZWQiLCJzY29wZSIsIlN0cmluZyIsImRhdGEiLCJjb250ZW50IiwidGhzIiwid2luZG93IiwiZGVib3VuY2VkVXBkYXRlIiwid2F0Y2giLCJuZXdfdmFsIiwib2xkX3ZhbCIsIm1vdW50ZWQiLCJfdGhpcyIsInJlc2l6ZSIsInVwZGF0ZURhdGEiLCJtZXRob2RzIiwib25JbnB1dCIsInRhIiwiJHJlZnMiLCJ0ZXh0YXJlYSIsInN0eWxlIiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiX3RoaXMyIiwiYXBpIiwibmlkIiwidGhlbiIsImV4ZSIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfaG9pc3RlZF8xIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIiRkYXRhIiwiJGV2ZW50IiwiX2NhY2hlIiwiJG9wdGlvbnMiLCJhcHBseSIsImFyZ3VtZW50cyIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=