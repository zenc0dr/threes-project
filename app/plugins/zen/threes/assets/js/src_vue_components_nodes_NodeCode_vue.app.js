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
          //this.ths.bus.emit('schema:refresh')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc3JjX3Z1ZV9jb21wb25lbnRzX25vZGVzX05vZGVDb2RlX3Z1ZS5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBY2dDO0FBRWhDLGlFQUFlO0VBQ1hDLElBQUksRUFBRSxVQUFVO0VBQ2hCQyxLQUFLLEVBQUU7SUFDSEMsSUFBSSxFQUFFO01BQ0ZDLElBQUksRUFBRUMsTUFBTTtNQUNaQyxRQUFRLEVBQUU7SUFDZCxDQUFDO0lBQ0RDLEtBQUssRUFBRTtNQUNISCxJQUFJLEVBQUVJLE1BQU07TUFDWkYsUUFBUSxFQUFFLEtBQUs7TUFDZixXQUFTO0lBQ2I7RUFDSixDQUFDO0VBQ0RHLElBQUksV0FBSkEsSUFBSUEsQ0FBQSxFQUFHO0lBQ0gsT0FBTztNQUNIQyxPQUFPLEVBQUUsSUFBSSxDQUFDUCxJQUFJLENBQUNNLElBQUk7TUFDdkJFLEdBQUcsRUFBRUMsTUFBTSxDQUFDRCxHQUFHO01BQ2ZFLGVBQWUsRUFBRTtJQUNyQixDQUFDO0VBQ0wsQ0FBQztFQUNEQyxLQUFLLEVBQUU7SUFDSEosT0FBTyxXQUFQQSxPQUFPQSxDQUFDSyxPQUFPLEVBQUVDLE9BQU8sRUFBRTtNQUN0QixJQUFJRCxPQUFNLEtBQU1DLE9BQU8sRUFBRTtRQUNyQjtNQUNKO01BQ0EsSUFBSSxDQUFDSCxlQUFlLENBQUM7SUFDekI7RUFDSixDQUFDO0VBQ0RJLE9BQU8sV0FBUEEsT0FBT0EsQ0FBQSxFQUFHO0lBQUEsSUFBQUMsS0FBQTtJQUNOLElBQUksQ0FBQ0MsTUFBTSxDQUFDO0lBQ1osSUFBSSxDQUFDTixlQUFjLEdBQUliLGdEQUFRLENBQUM7TUFBQSxPQUFNa0IsS0FBSSxDQUFDRSxVQUFVLENBQUNGLEtBQUksQ0FBQ1IsT0FBTyxDQUFDO0lBQUEsR0FBRSxJQUFJO0VBQzdFLENBQUM7RUFDRFcsT0FBTyxFQUFFO0lBQ0xDLE9BQU8sV0FBUEEsT0FBT0EsQ0FBQSxFQUFHO01BQ04sSUFBSSxDQUFDSCxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUNEQSxNQUFNLFdBQU5BLE1BQU1BLENBQUEsRUFBRztNQUNMLElBQU1JLEVBQUMsR0FBSSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsUUFBTztNQUM3QixJQUFJRixFQUFFLEVBQUU7UUFDSkEsRUFBRSxDQUFDRyxLQUFLLENBQUNDLE1BQUssR0FBSSxNQUFLO1FBQ3ZCSixFQUFFLENBQUNHLEtBQUssQ0FBQ0MsTUFBSyxHQUFJSixFQUFFLENBQUNLLFlBQVcsR0FBSSxJQUFHO01BQzNDO0lBQ0osQ0FBQztJQUNEUixVQUFVLFdBQVZBLFVBQVVBLENBQUNYLElBQUksRUFBRTtNQUFBLElBQUFvQixNQUFBO01BQ2IsSUFBSSxDQUFDbEIsR0FBRyxDQUFDbUIsR0FBRyxDQUFDO1FBQ1RBLEdBQUcsRUFBRSx3QkFBd0I7UUFDN0JyQixJQUFJLEVBQUU7VUFDRnNCLEdBQUcsRUFBRSxJQUFJLENBQUM1QixJQUFJLENBQUM0QixHQUFHO1VBQ2xCdEIsSUFBRyxFQUFIQTtRQUNKLENBQUM7UUFDRHVCLElBQUksRUFBRSxTQUFOQSxJQUFJQSxDQUFBLEVBQVE7VUFDUjtVQUNBSCxNQUFJLENBQUNsQixHQUFHLENBQUNzQixHQUFHLENBQUMsUUFBUSxFQUFFLFdBQVc7UUFDdEM7TUFDSixDQUFDLENBQUM7SUFDTjtFQUNKO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF4RVEsU0FBTTtBQUFXOzsyREFBdEJDLHVEQUFBLENBU00sT0FUTkMsVUFTTSxrRkFUaUIsV0FFbkIsd0RBQUFDLHVEQUFBLENBTVc7SUFMUCxTQUFNLG9CQUFvQjs7YUFDakJDLEtBQUEsQ0FBQTNCLE9BQU8sR0FBQTRCLE1BQUE7SUFBQTtJQUNmaEIsT0FBSyxFQUFBaUIsTUFBQSxRQUFBQSxNQUFBO01BQUEsT0FBRUMsUUFBQSxDQUFBbEIsT0FBQSxJQUFBa0IsUUFBQSxDQUFBbEIsT0FBQSxDQUFBbUIsS0FBQSxDQUFBRCxRQUFBLEVBQUFFLFNBQUEsQ0FBTztJQUFBO0lBQ2ZDLEdBQUcsRUFBQztLQUNQLFVBQ0Qsd0ZBSmFOLEtBQUEsQ0FBQTNCLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMNUI7QUFDK0g7QUFDN0I7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLHNEQUFzRCxxQkFBcUIsdUJBQXVCLEdBQUcsc0JBQXNCLG9CQUFvQixzQkFBc0Isc0JBQXNCLG1CQUFtQix3QkFBd0IsR0FBRyx1QkFBdUIsZ0JBQWdCLDJCQUEyQixzQkFBc0Isb0JBQW9CLGlCQUFpQixxQkFBcUIsa0JBQWtCLGlCQUFpQixHQUFHLE9BQU8sd0dBQXdHLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsdUNBQXVDLHVCQUF1Qix5QkFBeUIsaUJBQWlCLDBCQUEwQiw0QkFBNEIsNEJBQTRCLHlCQUF5Qiw4QkFBOEIsT0FBTyxrQkFBa0Isc0JBQXNCLGlDQUFpQyw0QkFBNEIsMEJBQTBCLHVCQUF1QiwyQkFBMkIsd0JBQXdCLHVCQUF1QixPQUFPLEdBQUcsdUJBQXVCO0FBQzNyQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQMkQ7QUFDbEcsWUFBaWM7O0FBRWpjOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLDhYQUFPOzs7O0FBSXhCLGlFQUFlLDhYQUFPLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1prQztBQUNWO0FBQ0w7O0FBRXRELENBQW9FOztBQUU4QjtBQUNsRyxpQ0FBaUMsZ0hBQWUsQ0FBQyw2RUFBTSxhQUFhLCtFQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFjZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQzFCb00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvbm9kZXMvTm9kZUNvZGUudnVlIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9ub2Rlcy9Ob2RlQ29kZS52dWU/NTA2ZCIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvbm9kZXMvTm9kZUNvZGUudnVlPzM5YTAiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL25vZGVzL05vZGVDb2RlLnZ1ZT8yYWMyIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9ub2Rlcy9Ob2RlQ29kZS52dWU/MzZlNyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm5vZGUtY29kZVwiPlxuICAgICAgICDQpdCw0Lkg0LnQvtGDXG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgY2xhc3M9XCJub2RlLWNvZGVfX2NvbnRlbnRcIlxuICAgICAgICAgICAgdi1tb2RlbD1cImNvbnRlbnRcIlxuICAgICAgICAgICAgQGlucHV0PVwib25JbnB1dFwiXG4gICAgICAgICAgICByZWY9XCJ0ZXh0YXJlYVwiXG4gICAgICAgID5cbiAgICAgICAgPC90ZXh0YXJlYT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiTm9kZUNvZGVcIixcbiAgICBwcm9wczoge1xuICAgICAgICBub2RlOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBzY29wZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29udGVudDogdGhpcy5ub2RlLmRhdGEsXG4gICAgICAgICAgICB0aHM6IHdpbmRvdy50aHMsXG4gICAgICAgICAgICBkZWJvdW5jZWRVcGRhdGU6IG51bGxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIGNvbnRlbnQobmV3X3ZhbCwgb2xkX3ZhbCkge1xuICAgICAgICAgICAgaWYgKG5ld192YWwgPT09IG9sZF92YWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRlYm91bmNlZFVwZGF0ZSgpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMucmVzaXplKClcbiAgICAgICAgdGhpcy5kZWJvdW5jZWRVcGRhdGUgPSBkZWJvdW5jZSgoKSA9PiB0aGlzLnVwZGF0ZURhdGEodGhpcy5jb250ZW50KSwgMjAwMClcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25JbnB1dCgpIHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplKClcbiAgICAgICAgfSxcbiAgICAgICAgcmVzaXplKCkge1xuICAgICAgICAgICAgY29uc3QgdGEgPSB0aGlzLiRyZWZzLnRleHRhcmVhXG4gICAgICAgICAgICBpZiAodGEpIHtcbiAgICAgICAgICAgICAgICB0YS5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIlxuICAgICAgICAgICAgICAgIHRhLnN0eWxlLmhlaWdodCA9IHRhLnNjcm9sbEhlaWdodCArIFwicHhcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVEYXRhKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMudGhzLmFwaSh7XG4gICAgICAgICAgICAgICAgYXBpOiAnbm9kZXMubm9kZTp1cGRhdGUtZGF0YScsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBuaWQ6IHRoaXMubm9kZS5uaWQsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLnRocy5idXMuZW1pdCgnc2NoZW1hOnJlZnJlc2gnKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocy5leGUoJ1NjaGVtYScsICdnZXRTY2hlbWEnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5ub2RlLXRleHQge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICZfX2hlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogIzhjOGM4YztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTZweDtcbiAgICB9XG4gICAgJl9fY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG59XG5cbjwvc3R5bGU+XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ub2RlLXRleHQge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLm5vZGUtdGV4dF9faGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzhjOGM4YztcXG4gIG1hcmdpbi1ib3R0b206IC02cHg7XFxufVxcbi5ub2RlLXRleHRfX2NvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICByZXNpemU6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Z1ZS9jb21wb25lbnRzL25vZGVzL05vZGVDb2RlLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUNJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUNJO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4ubm9kZS10ZXh0IHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAmX19oZWFkZXIge1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIGNvbG9yOiAjOGM4YzhjO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTZweDtcXG4gICAgfVxcbiAgICAmX19jb250ZW50IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICAgICAgcmVzaXplOiBub25lO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2RlQ29kZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNzJkYmJkOCZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Ob2RlQ29kZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDcyZGJiZDhcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ob2RlQ29kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vTm9kZUNvZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Ob2RlQ29kZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNzJkYmJkOCZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvYXBwL3BsdWdpbnMvemVuL3RocmVlcy9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL3Z1ZS9jb21wb25lbnRzL25vZGVzL05vZGVDb2RlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIwNzJkYmJkOFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzA3MmRiYmQ4JywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnMDcyZGJiZDgnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05vZGVDb2RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNzJkYmJkOFwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCcwNzJkYmJkOCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZUNvZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZUNvZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiXSwibmFtZXMiOlsiZGVib3VuY2UiLCJuYW1lIiwicHJvcHMiLCJub2RlIiwidHlwZSIsIk9iamVjdCIsInJlcXVpcmVkIiwic2NvcGUiLCJTdHJpbmciLCJkYXRhIiwiY29udGVudCIsInRocyIsIndpbmRvdyIsImRlYm91bmNlZFVwZGF0ZSIsIndhdGNoIiwibmV3X3ZhbCIsIm9sZF92YWwiLCJtb3VudGVkIiwiX3RoaXMiLCJyZXNpemUiLCJ1cGRhdGVEYXRhIiwibWV0aG9kcyIsIm9uSW5wdXQiLCJ0YSIsIiRyZWZzIiwidGV4dGFyZWEiLCJzdHlsZSIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsIl90aGlzMiIsImFwaSIsIm5pZCIsInRoZW4iLCJleGUiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2hvaXN0ZWRfMSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCIkZGF0YSIsIiRldmVudCIsIl9jYWNoZSIsIiRvcHRpb25zIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9