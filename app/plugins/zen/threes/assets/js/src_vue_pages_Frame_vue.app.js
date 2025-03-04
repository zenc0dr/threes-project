"use strict";
(self["webpackChunkthrees"] = self["webpackChunkthrees"] || []).push([["src_vue_pages_Frame_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/Node.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/Node.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Node",
  props: {
    node: null
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/pages/Frame.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/pages/Frame.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Node_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Node.vue */ "./src/vue/components/Node.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Frame",
  props: ['backend', 'fid'],
  components: {
    Node: _components_Node_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      program: []
    };
  },
  mounted: function mounted() {
    this.loadProgram();
  },
  methods: {
    // Добавить нод
    createNode: function createNode(line_index) {
      var _this = this;
      ths.api({
        api: 'nodes.Node:Create',
        data: {
          fid: this.fid,
          line_index: line_index
        },
        then: function then(response) {
          _this.loadProgram();
        }
      });
    },
    // Добавить программную линию
    addProgramLine: function addProgramLine() {
      var _this2 = this;
      ths.api({
        api: 'frames.Frame:addLine',
        data: {
          fid: this.fid
        },
        then: function then(response) {
          _this2.loadProgram();
        }
      });
    },
    // Загрузить программу
    loadProgram: function loadProgram() {
      var _this3 = this;
      ths.api({
        api: 'frames.Frame:loadProgram',
        data: {
          'fid': this.fid
        },
        then: function then(response) {
          _this3.program = response.program;
        }
      });
    },
    // Сохранить программу
    saveProgram: function saveProgram() {
      var _this4 = this;
      ths.api({
        api: 'frames.Frame:saveProgram',
        data: {
          'fid': this.fid
        },
        then: function then(response) {
          _this4.loadProgram();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/Node.vue?vue&type=template&id=225347a9&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/Node.vue?vue&type=template&id=225347a9&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "threes-node"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.node.nid ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.node.name), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/pages/Frame.vue?vue&type=template&id=464d24f0":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/pages/Frame.vue?vue&type=template&id=464d24f0 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "frame"
};
var _hoisted_2 = {
  "class": "frame__line"
};
var _hoisted_3 = {
  "class": "frame__line__number"
};
var _hoisted_4 = {
  "class": "frame__line__nodes"
};
var _hoisted_5 = {
  "class": "frame__node"
};
var _hoisted_6 = {
  "class": "frame__add_node"
};
var _hoisted_7 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Node = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Node");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.program, function (line, line_index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(line_index), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(line, function (node) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Node, {
        node: node
      }, null, 8 /* PROPS */, ["node"])]);
    }), 256 /* UNKEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      onClick: function onClick($event) {
        return $options.createNode(line_index);
      },
      "class": "frame__add_node__btn"
    }, " + ", 8 /* PROPS */, _hoisted_7)])]);
  }), 256 /* UNKEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.addProgramLine && $options.addProgramLine.apply($options, arguments);
    }),
    "class": "frame__add-line"
  }, " + ")]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/Node.vue?vue&type=style&index=0&id=225347a9&scoped=true&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/Node.vue?vue&type=style&index=0&id=225347a9&scoped=true&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/pages/Frame.vue?vue&type=style&index=0&id=464d24f0&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/pages/Frame.vue?vue&type=style&index=0&id=464d24f0&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".frame__node {\n  padding: 5px 7px;\n  background: #e9e9e9;\n  border-radius: 3px;\n  margin: 3px;\n}\n.frame__add_node {\n  display: flex;\n  flex-grow: 1;\n  flex-shrink: 1;\n  min-width: 0;\n  width: 100%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.frame__add_node__btn {\n  display: flex;\n  width: 40px;\n  background: #a4ffd5;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n  cursor: pointer;\n  opacity: 0;\n  transition: 200ms;\n}\n.frame__add_node__btn:hover {\n  background-color: #3dffa9;\n}\n.frame__add_node:hover .frame__add_node__btn {\n  opacity: 1;\n}\n.frame__line {\n  display: flex;\n  flex-direction: row;\n}\n.frame__line__number {\n  display: flex;\n  flex: 0 0 17px;\n  font-weight: bold;\n  justify-content: center;\n  align-items: center;\n  background: #d6d8ff;\n  margin: 1px 3px;\n  border-radius: 3px;\n  color: #9093df;\n  min-height: 34px;\n  font-size: 11px;\n}\n.frame__line__nodes {\n  display: flex;\n  flex-direction: row;\n}\n.frame__add-line {\n  margin: 3px;\n  padding: 7px;\n  border-radius: 4px;\n  background: #f5f5f5;\n  color: #797979;\n  text-align: center;\n  font-weight: bold;\n  transition: 200ms;\n  cursor: pointer;\n}\n.frame__add-line:hover {\n  background: #efefef;\n  color: #797979;\n}", "",{"version":3,"sources":["webpack://./src/vue/pages/Frame.vue"],"names":[],"mappings":"AAEI;EACI,gBAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;AADR;AAII;EACI,aAAA;EACA,YAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;AAFR;AAIQ;EACI,aAAA;EACA,WAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,UAAA;EACA,iBAAA;AAFZ;AAGY;EACI,yBAAA;AADhB;AAKQ;EACI,UAAA;AAHZ;AAOI;EACI,aAAA;EACA,mBAAA;AALR;AAOQ;EACI,aAAA;EACA,cAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,eAAA;AALZ;AAOQ;EACI,aAAA;EACA,mBAAA;AALZ;AAQI;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,eAAA;AANR;AAQQ;EACI,mBAAA;EACA,cAAA;AANZ","sourcesContent":["\n.frame {\n    &__node {\n        padding: 5px 7px;\n        background: #e9e9e9;\n        border-radius: 3px;\n        margin: 3px;\n    }\n\n    &__add_node {\n        display: flex;\n        flex-grow: 1;\n        flex-shrink: 1;\n        min-width: 0;\n        width: 100%;\n        user-select: none;\n\n        &__btn {\n            display: flex;\n            width: 40px;\n            background: #a4ffd5;\n            justify-content: center;\n            align-items: center;\n            border-radius: 4px;\n            cursor: pointer;\n            opacity: 0;\n            transition: 200ms;\n            &:hover {\n                background-color: #3dffa9;\n            }\n        }\n\n        &:hover &__btn {\n            opacity: 1;\n        }\n    }\n\n    &__line {\n        display: flex;\n        flex-direction: row;\n\n        &__number {\n            display: flex;\n            flex: 0 0 17px;\n            font-weight: bold;\n            justify-content: center;\n            align-items: center;\n            background: #d6d8ff;\n            margin: 1px 3px;\n            border-radius: 3px;\n            color: #9093df;\n            min-height: 34px;\n            font-size: 11px;\n        }\n        &__nodes {\n            display: flex;\n            flex-direction: row;\n        }\n    }\n    &__add-line {\n        margin: 3px;\n        padding: 7px;\n        border-radius: 4px;\n        background: #f5f5f5;\n        color: #797979;\n        text-align: center;\n        font-weight: bold;\n        transition: 200ms;\n        cursor: pointer;\n\n        &:hover {\n            background: #efefef;\n            color: #797979;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/Node.vue?vue&type=style&index=0&id=225347a9&scoped=true&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/Node.vue?vue&type=style&index=0&id=225347a9&scoped=true&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Node_vue_vue_type_style_index_0_id_225347a9_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Node.vue?vue&type=style&index=0&id=225347a9&scoped=true&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/Node.vue?vue&type=style&index=0&id=225347a9&scoped=true&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Node_vue_vue_type_style_index_0_id_225347a9_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Node_vue_vue_type_style_index_0_id_225347a9_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/pages/Frame.vue?vue&type=style&index=0&id=464d24f0&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/pages/Frame.vue?vue&type=style&index=0&id=464d24f0&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Frame_vue_vue_type_style_index_0_id_464d24f0_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Frame.vue?vue&type=style&index=0&id=464d24f0&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/pages/Frame.vue?vue&type=style&index=0&id=464d24f0&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Frame_vue_vue_type_style_index_0_id_464d24f0_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Frame_vue_vue_type_style_index_0_id_464d24f0_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/vue/components/Node.vue":
/*!*************************************!*\
  !*** ./src/vue/components/Node.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Node_vue_vue_type_template_id_225347a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node.vue?vue&type=template&id=225347a9&scoped=true */ "./src/vue/components/Node.vue?vue&type=template&id=225347a9&scoped=true");
/* harmony import */ var _Node_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node.vue?vue&type=script&lang=js */ "./src/vue/components/Node.vue?vue&type=script&lang=js");
/* harmony import */ var _Node_vue_vue_type_style_index_0_id_225347a9_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Node.vue?vue&type=style&index=0&id=225347a9&scoped=true&lang=scss */ "./src/vue/components/Node.vue?vue&type=style&index=0&id=225347a9&scoped=true&lang=scss");
/* harmony import */ var _app_plugins_zen_threes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_app_plugins_zen_threes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Node_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Node_vue_vue_type_template_id_225347a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-225347a9"],['__file',"src/vue/components/Node.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/vue/pages/Frame.vue":
/*!*********************************!*\
  !*** ./src/vue/pages/Frame.vue ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Frame_vue_vue_type_template_id_464d24f0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Frame.vue?vue&type=template&id=464d24f0 */ "./src/vue/pages/Frame.vue?vue&type=template&id=464d24f0");
/* harmony import */ var _Frame_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Frame.vue?vue&type=script&lang=js */ "./src/vue/pages/Frame.vue?vue&type=script&lang=js");
/* harmony import */ var _Frame_vue_vue_type_style_index_0_id_464d24f0_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Frame.vue?vue&type=style&index=0&id=464d24f0&lang=scss */ "./src/vue/pages/Frame.vue?vue&type=style&index=0&id=464d24f0&lang=scss");
/* harmony import */ var _app_plugins_zen_threes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_app_plugins_zen_threes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Frame_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Frame_vue_vue_type_template_id_464d24f0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/vue/pages/Frame.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/vue/components/Node.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/vue/components/Node.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Node_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Node_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Node.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/Node.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/vue/pages/Frame.vue?vue&type=script&lang=js":
/*!*********************************************************!*\
  !*** ./src/vue/pages/Frame.vue?vue&type=script&lang=js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Frame_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Frame_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Frame.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/pages/Frame.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/vue/components/Node.vue?vue&type=template&id=225347a9&scoped=true":
/*!*******************************************************************************!*\
  !*** ./src/vue/components/Node.vue?vue&type=template&id=225347a9&scoped=true ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Node_vue_vue_type_template_id_225347a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Node_vue_vue_type_template_id_225347a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Node.vue?vue&type=template&id=225347a9&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/Node.vue?vue&type=template&id=225347a9&scoped=true");


/***/ }),

/***/ "./src/vue/pages/Frame.vue?vue&type=template&id=464d24f0":
/*!***************************************************************!*\
  !*** ./src/vue/pages/Frame.vue?vue&type=template&id=464d24f0 ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Frame_vue_vue_type_template_id_464d24f0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Frame_vue_vue_type_template_id_464d24f0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Frame.vue?vue&type=template&id=464d24f0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/pages/Frame.vue?vue&type=template&id=464d24f0");


/***/ }),

/***/ "./src/vue/components/Node.vue?vue&type=style&index=0&id=225347a9&scoped=true&lang=scss":
/*!**********************************************************************************************!*\
  !*** ./src/vue/components/Node.vue?vue&type=style&index=0&id=225347a9&scoped=true&lang=scss ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Node_vue_vue_type_style_index_0_id_225347a9_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Node.vue?vue&type=style&index=0&id=225347a9&scoped=true&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/Node.vue?vue&type=style&index=0&id=225347a9&scoped=true&lang=scss");


/***/ }),

/***/ "./src/vue/pages/Frame.vue?vue&type=style&index=0&id=464d24f0&lang=scss":
/*!******************************************************************************!*\
  !*** ./src/vue/pages/Frame.vue?vue&type=style&index=0&id=464d24f0&lang=scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Frame_vue_vue_type_style_index_0_id_464d24f0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Frame.vue?vue&type=style&index=0&id=464d24f0&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/pages/Frame.vue?vue&type=style&index=0&id=464d24f0&lang=scss");


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc3JjX3Z1ZV9wYWdlc19GcmFtZV92dWUuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFNQSxpRUFBZTtFQUNYQSxJQUFJLEVBQUUsTUFBTTtFQUNaQyxLQUFLLEVBQUU7SUFDSEMsSUFBSSxFQUFFO0VBQ1Y7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNZdUM7QUFDeEMsaUVBQWU7RUFDWEYsSUFBSSxFQUFFLE9BQU87RUFDYkMsS0FBSyxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztFQUN6QkcsVUFBVSxFQUFFO0lBQ1JELElBQUcsRUFBSEEsNERBQUlBO0VBQ1IsQ0FBQztFQUNERSxJQUFJLFdBQUpBLElBQUlBLENBQUEsRUFBRztJQUNILE9BQU87TUFDSEMsT0FBTyxFQUFFO0lBQ2I7RUFDSixDQUFDO0VBQ0RDLE9BQU8sV0FBUEEsT0FBT0EsQ0FBQSxFQUFHO0lBQ04sSUFBSSxDQUFDQyxXQUFXLENBQUM7RUFDckIsQ0FBQztFQUNEQyxPQUFPLEVBQUU7SUFDTDtJQUNBQyxVQUFVLFdBQVZBLFVBQVVBLENBQUNDLFVBQVUsRUFBRTtNQUFBLElBQUFDLEtBQUE7TUFDbkJDLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDO1FBQ0pBLEdBQUcsRUFBRSxtQkFBbUI7UUFDeEJULElBQUksRUFBRTtVQUNGVSxHQUFHLEVBQUUsSUFBSSxDQUFDQSxHQUFHO1VBQ2JKLFVBQVMsRUFBVEE7UUFDSixDQUFDO1FBQ0RLLElBQUksRUFBRSxTQUFOQSxJQUFJQSxDQUFFQyxRQUFPLEVBQUs7VUFDZEwsS0FBSSxDQUFDSixXQUFXLENBQUM7UUFDckI7TUFDSixDQUFDO0lBQ0wsQ0FBQztJQUVEO0lBQ0FVLGNBQWMsV0FBZEEsY0FBY0EsQ0FBQSxFQUFHO01BQUEsSUFBQUMsTUFBQTtNQUNiTixHQUFHLENBQUNDLEdBQUcsQ0FBQztRQUNKQSxHQUFHLEVBQUUsc0JBQXNCO1FBQzNCVCxJQUFJLEVBQUU7VUFDRlUsR0FBRyxFQUFFLElBQUksQ0FBQ0E7UUFDZCxDQUFDO1FBQ0RDLElBQUksRUFBRSxTQUFOQSxJQUFJQSxDQUFFQyxRQUFPLEVBQUs7VUFDZEUsTUFBSSxDQUFDWCxXQUFXLENBQUM7UUFDckI7TUFDSixDQUFDO0lBQ0wsQ0FBQztJQUNEO0lBQ0FBLFdBQVcsV0FBWEEsV0FBV0EsQ0FBQSxFQUFHO01BQUEsSUFBQVksTUFBQTtNQUNWUCxHQUFHLENBQUNDLEdBQUcsQ0FBQztRQUNKQSxHQUFHLEVBQUUsMEJBQTBCO1FBQy9CVCxJQUFJLEVBQUU7VUFDRixLQUFLLEVBQUUsSUFBSSxDQUFDVTtRQUNoQixDQUFDO1FBQ0RDLElBQUksRUFBRSxTQUFOQSxJQUFJQSxDQUFFQyxRQUFPLEVBQUs7VUFDZEcsTUFBSSxDQUFDZCxPQUFNLEdBQUlXLFFBQVEsQ0FBQ1gsT0FBTTtRQUNsQztNQUNKLENBQUM7SUFDTCxDQUFDO0lBQ0Q7SUFDQWUsV0FBVyxXQUFYQSxXQUFXQSxDQUFBLEVBQUc7TUFBQSxJQUFBQyxNQUFBO01BQ1ZULEdBQUcsQ0FBQ0MsR0FBRyxDQUFDO1FBQ0pBLEdBQUcsRUFBRSwwQkFBMEI7UUFDL0JULElBQUksRUFBRTtVQUNGLEtBQUssRUFBRSxJQUFJLENBQUNVO1FBQ2hCLENBQUM7UUFDREMsSUFBSSxFQUFFLFNBQU5BLElBQUlBLENBQUVDLFFBQU8sRUFBSztVQUNkSyxNQUFJLENBQUNkLFdBQVcsQ0FBQztRQUNyQjtNQUNKLENBQUM7SUFDTDtFQUNKO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VEekZvQixTQUFNOzs7U0FBaEJlLE1BQUEsQ0FBQXJCLElBQUksQ0FBQ3NCLEdBQUcsc0RBQW5CQyx1REFBQSxDQUVNLE9BRk5DLFVBRU0sRUFBQUMsb0RBQUEsQ0FEQ0osTUFBQSxDQUFBckIsSUFBSSxDQUFDRixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUNEWCxTQUFNO0FBQU87O0VBQzZCLFNBQU07QUFBYTs7RUFDckQsU0FBTTtBQUFxQjs7RUFHM0IsU0FBTTtBQUFvQjs7RUFDRCxTQUFNO0FBQWE7O0VBSTVDLFNBQU07QUFBaUI7Ozs7MkRBVnBDeUIsdURBQUEsQ0FtQk0sT0FuQk5DLFVBbUJNLDBEQWxCRkQsdURBQUEsQ0FjTUcseUNBQUEsUUFBQUMsK0NBQUEsQ0FkNEJDLEtBQUEsQ0FBQXhCLE9BQU8sWUFBNUJ5QixJQUFJLEVBQUVwQixVQUFVOzZEQUE3QmMsdURBQUEsQ0FjTSxPQWROTyxVQWNNLEdBYkZDLHVEQUFBLENBRU0sT0FGTkMsVUFFTSxFQUFBUCxvREFBQSxDQURDaEIsVUFBVSxrQkFFakJzQix1REFBQSxDQUlNLE9BSk5FLFVBSU0sMERBSEZWLHVEQUFBLENBRU1HLHlDQUFBLFFBQUFDLCtDQUFBLENBRmNFLElBQUksWUFBWjdCLElBQUk7K0RBQWhCdUIsdURBQUEsQ0FFTSxPQUZOVyxVQUVNLEdBREZDLGdEQUFBLENBQXFCQyxlQUFBO1FBQWRwQyxJQUFJLEVBQUVBO01BQUk7d0NBR3pCK0IsdURBQUEsQ0FJTSxPQUpOTSxVQUlNLEdBSEZOLHVEQUFBLENBRU07TUFGQU8sT0FBSyxXQUFMQSxPQUFLQSxDQUFBQyxNQUFBO1FBQUEsT0FBRUMsUUFBQSxDQUFBaEMsVUFBVSxDQUFDQyxVQUFVO01BQUE7TUFBRyxTQUFNO09BQXVCLEtBRWxFLGlCQUFBZ0MsVUFBQTtvQ0FHUlYsdURBQUEsQ0FFTTtJQUZBTyxPQUFLLEVBQUFJLE1BQUEsUUFBQUEsTUFBQTtNQUFBLE9BQUVGLFFBQUEsQ0FBQXhCLGNBQUEsSUFBQXdCLFFBQUEsQ0FBQXhCLGNBQUEsQ0FBQTJCLEtBQUEsQ0FBQUgsUUFBQSxFQUFBSSxTQUFBLENBQWM7SUFBQTtJQUFFLFNBQU07S0FBa0IsS0FFckQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQko7QUFDNEg7QUFDN0I7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLGlEQUFpRCxrRUFBa0U7QUFDbkg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0Esd0RBQXdELHFCQUFxQix3QkFBd0IsdUJBQXVCLGdCQUFnQixHQUFHLG9CQUFvQixrQkFBa0IsaUJBQWlCLG1CQUFtQixpQkFBaUIsZ0JBQWdCLDhCQUE4Qiw4QkFBOEIsOEJBQThCLEdBQUcseUJBQXlCLGtCQUFrQixnQkFBZ0Isd0JBQXdCLDRCQUE0Qix3QkFBd0IsdUJBQXVCLG9CQUFvQixlQUFlLHNCQUFzQixHQUFHLCtCQUErQiw4QkFBOEIsR0FBRyxnREFBZ0QsZUFBZSxHQUFHLGdCQUFnQixrQkFBa0Isd0JBQXdCLEdBQUcsd0JBQXdCLGtCQUFrQixtQkFBbUIsc0JBQXNCLDRCQUE0Qix3QkFBd0Isd0JBQXdCLG9CQUFvQix1QkFBdUIsbUJBQW1CLHFCQUFxQixvQkFBb0IsR0FBRyx1QkFBdUIsa0JBQWtCLHdCQUF3QixHQUFHLG9CQUFvQixnQkFBZ0IsaUJBQWlCLHVCQUF1Qix3QkFBd0IsbUJBQW1CLHVCQUF1QixzQkFBc0Isc0JBQXNCLG9CQUFvQixHQUFHLDBCQUEwQix3QkFBd0IsbUJBQW1CLEdBQUcsT0FBTywwRkFBMEYsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxtQ0FBbUMsZUFBZSwyQkFBMkIsOEJBQThCLDZCQUE2QixzQkFBc0IsT0FBTyxxQkFBcUIsd0JBQXdCLHVCQUF1Qix5QkFBeUIsdUJBQXVCLHNCQUFzQiw0QkFBNEIsb0JBQW9CLDRCQUE0QiwwQkFBMEIsa0NBQWtDLHNDQUFzQyxrQ0FBa0MsaUNBQWlDLDhCQUE4Qix5QkFBeUIsZ0NBQWdDLHVCQUF1Qiw0Q0FBNEMsZUFBZSxXQUFXLDRCQUE0Qix5QkFBeUIsV0FBVyxPQUFPLGlCQUFpQix3QkFBd0IsOEJBQThCLHVCQUF1Qiw0QkFBNEIsNkJBQTZCLGdDQUFnQyxzQ0FBc0Msa0NBQWtDLGtDQUFrQyw4QkFBOEIsaUNBQWlDLDZCQUE2QiwrQkFBK0IsOEJBQThCLFdBQVcsb0JBQW9CLDRCQUE0QixrQ0FBa0MsV0FBVyxPQUFPLG1CQUFtQixzQkFBc0IsdUJBQXVCLDZCQUE2Qiw4QkFBOEIseUJBQXlCLDZCQUE2Qiw0QkFBNEIsNEJBQTRCLDBCQUEwQixxQkFBcUIsa0NBQWtDLDZCQUE2QixXQUFXLE9BQU8sR0FBRyxxQkFBcUI7QUFDM3RIO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B3RDtBQUMvRixZQUEwYjs7QUFFMWI7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsc1lBQU87Ozs7QUFJeEIsaUVBQWUsc1lBQU8sYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaNEQ7QUFDL0YsWUFBK2E7O0FBRS9hOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLDJYQUFPOzs7O0FBSXhCLGlFQUFlLDJYQUFPLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1owQztBQUN0QjtBQUNMOztBQUVsRCxDQUE0RTs7QUFFc0I7QUFDbEcsaUNBQWlDLGdIQUFlLENBQUMseUVBQU0sYUFBYSx1RkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBY2Y7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQm1EO0FBQ1Y7QUFDTDs7QUFFbkQsQ0FBaUU7O0FBRWlDO0FBQ2xHLGlDQUFpQyxnSEFBZSxDQUFDLDBFQUFNLGFBQWEsNEVBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQWNmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDMUIwTDs7Ozs7Ozs7Ozs7Ozs7O0FDQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZS52dWUiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9wYWdlcy9GcmFtZS52dWUiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL05vZGUudnVlPzcyY2UiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9wYWdlcy9GcmFtZS52dWU/YzFkNiIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZS52dWU/YTM1YiIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3BhZ2VzL0ZyYW1lLnZ1ZT83YzkyIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9Ob2RlLnZ1ZT8wYzAzIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvcGFnZXMvRnJhbWUudnVlPzUyYTQiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL05vZGUudnVlPzRjZTMiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9wYWdlcy9GcmFtZS52dWU/ZDJmOSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IHYtaWY9XCJub2RlLm5pZFwiIGNsYXNzPVwidGhyZWVzLW5vZGVcIj5cbiAgICB7eyBub2RlLm5hbWUgfX1cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJOb2RlXCIsXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbm9kZTogbnVsbFxuICAgIH1cbn1cbjwvc2NyaXB0PlxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuLnRocmVlcy1ub2RlIHtcblxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbjxkaXYgY2xhc3M9XCJmcmFtZVwiPlxuICAgIDxkaXYgdi1mb3I9XCIobGluZSwgbGluZV9pbmRleCkgaW4gcHJvZ3JhbVwiIGNsYXNzPVwiZnJhbWVfX2xpbmVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZyYW1lX19saW5lX19udW1iZXJcIj5cbiAgICAgICAgICAgIHt7IGxpbmVfaW5kZXggfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmcmFtZV9fbGluZV9fbm9kZXNcIj5cbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJub2RlIGluIGxpbmVcIiBjbGFzcz1cImZyYW1lX19ub2RlXCI+XG4gICAgICAgICAgICAgICAgPE5vZGUgOm5vZGU9XCJub2RlXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZyYW1lX19hZGRfbm9kZVwiPlxuICAgICAgICAgICAgPGRpdiBAY2xpY2s9XCJjcmVhdGVOb2RlKGxpbmVfaW5kZXgpXCIgY2xhc3M9XCJmcmFtZV9fYWRkX25vZGVfX2J0blwiPlxuICAgICAgICAgICAgICAgICtcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IEBjbGljaz1cImFkZFByb2dyYW1MaW5lXCIgY2xhc3M9XCJmcmFtZV9fYWRkLWxpbmVcIj5cbiAgICAgICAgK1xuICAgIDwvZGl2PlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBOb2RlIGZyb20gXCIuLi9jb21wb25lbnRzL05vZGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIkZyYW1lXCIsXG4gICAgcHJvcHM6IFsnYmFja2VuZCcsICdmaWQnXSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIE5vZGVcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9ncmFtOiBbXSxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkUHJvZ3JhbSgpXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIC8vINCU0L7QsdCw0LLQuNGC0Ywg0L3QvtC0XG4gICAgICAgIGNyZWF0ZU5vZGUobGluZV9pbmRleCkge1xuICAgICAgICAgICAgdGhzLmFwaSh7XG4gICAgICAgICAgICAgICAgYXBpOiAnbm9kZXMuTm9kZTpDcmVhdGUnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlkOiB0aGlzLmZpZCxcbiAgICAgICAgICAgICAgICAgICAgbGluZV9pbmRleFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRQcm9ncmFtKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCU0L7QsdCw0LLQuNGC0Ywg0L/RgNC+0LPRgNCw0LzQvNC90YPRjiDQu9C40L3QuNGOXG4gICAgICAgIGFkZFByb2dyYW1MaW5lKCkge1xuICAgICAgICAgICAgdGhzLmFwaSh7XG4gICAgICAgICAgICAgICAgYXBpOiAnZnJhbWVzLkZyYW1lOmFkZExpbmUnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlkOiB0aGlzLmZpZCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkUHJvZ3JhbSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgLy8g0JfQsNCz0YDRg9C30LjRgtGMINC/0YDQvtCz0YDQsNC80LzRg1xuICAgICAgICBsb2FkUHJvZ3JhbSgpIHtcbiAgICAgICAgICAgIHRocy5hcGkoe1xuICAgICAgICAgICAgICAgIGFwaTogJ2ZyYW1lcy5GcmFtZTpsb2FkUHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAnZmlkJzogdGhpcy5maWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtID0gcmVzcG9uc2UucHJvZ3JhbVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIC8vINCh0L7RhdGA0LDQvdC40YLRjCDQv9GA0L7Qs9GA0LDQvNC80YNcbiAgICAgICAgc2F2ZVByb2dyYW0oKSB7XG4gICAgICAgICAgICB0aHMuYXBpKHtcbiAgICAgICAgICAgICAgICBhcGk6ICdmcmFtZXMuRnJhbWU6c2F2ZVByb2dyYW0nLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2ZpZCc6IHRoaXMuZmlkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFByb2dyYW0oKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLmZyYW1lIHtcbiAgICAmX19ub2RlIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDdweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW46IDNweDtcbiAgICB9XG5cbiAgICAmX19hZGRfbm9kZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgZmxleC1zaHJpbms6IDE7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuXG4gICAgICAgICZfX2J0biB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYTRmZmQ1O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNkZmZhOTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIgJl9fYnRuIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19saW5lIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICAgICAmX19udW1iZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXg6IDAgMCAxN3B4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDZkOGZmO1xuICAgICAgICAgICAgbWFyZ2luOiAxcHggM3B4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgY29sb3I6ICM5MDkzZGY7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB9XG4gICAgICAgICZfX25vZGVzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9XG4gICAgfVxuICAgICZfX2FkZC1saW5lIHtcbiAgICAgICAgbWFyZ2luOiAzcHg7XG4gICAgICAgIHBhZGRpbmc6IDdweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgICBjb2xvcjogIzc5Nzk3OTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgICAgICAgICBjb2xvcjogIzc5Nzk3OTtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mcmFtZV9fbm9kZSB7XFxuICBwYWRkaW5nOiA1cHggN3B4O1xcbiAgYmFja2dyb3VuZDogI2U5ZTllOTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIG1hcmdpbjogM3B4O1xcbn1cXG4uZnJhbWVfX2FkZF9ub2RlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBmbGV4LXNocmluazogMTtcXG4gIG1pbi13aWR0aDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uZnJhbWVfX2FkZF9ub2RlX19idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgYmFja2dyb3VuZDogI2E0ZmZkNTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG59XFxuLmZyYW1lX19hZGRfbm9kZV9fYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZGZmYTk7XFxufVxcbi5mcmFtZV9fYWRkX25vZGU6aG92ZXIgLmZyYW1lX19hZGRfbm9kZV9fYnRuIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5mcmFtZV9fbGluZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLmZyYW1lX19saW5lX19udW1iZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDAgMCAxN3B4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjZDZkOGZmO1xcbiAgbWFyZ2luOiAxcHggM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY29sb3I6ICM5MDkzZGY7XFxuICBtaW4taGVpZ2h0OiAzNHB4O1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbn1cXG4uZnJhbWVfX2xpbmVfX25vZGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4uZnJhbWVfX2FkZC1saW5lIHtcXG4gIG1hcmdpbjogM3B4O1xcbiAgcGFkZGluZzogN3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcXG4gIGNvbG9yOiAjNzk3OTc5O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmZyYW1lX19hZGQtbGluZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xcbiAgY29sb3I6ICM3OTc5Nzk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92dWUvcGFnZXMvRnJhbWUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQURSO0FBSUk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQUZSO0FBSVE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUZaO0FBR1k7RUFDSSx5QkFBQTtBQURoQjtBQUtRO0VBQ0ksVUFBQTtBQUhaO0FBT0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFMUjtBQU9RO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFMWjtBQU9RO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBTFo7QUFRSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTlI7QUFRUTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQU5aXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5mcmFtZSB7XFxuICAgICZfX25vZGUge1xcbiAgICAgICAgcGFkZGluZzogNXB4IDdweDtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgICBtYXJnaW46IDNweDtcXG4gICAgfVxcblxcbiAgICAmX19hZGRfbm9kZSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1ncm93OiAxO1xcbiAgICAgICAgZmxleC1zaHJpbms6IDE7XFxuICAgICAgICBtaW4td2lkdGg6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcblxcbiAgICAgICAgJl9fYnRuIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhNGZmZDU7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZGZmYTk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpob3ZlciAmX19idG4ge1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fbGluZSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gICAgICAgICZfX251bWJlciB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4OiAwIDAgMTdweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkNmQ4ZmY7XFxuICAgICAgICAgICAgbWFyZ2luOiAxcHggM3B4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgICAgICBjb2xvcjogIzkwOTNkZjtcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzNHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgICAgIH1cXG4gICAgICAgICZfX25vZGVzIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgJl9fYWRkLWxpbmUge1xcbiAgICAgICAgbWFyZ2luOiAzcHg7XFxuICAgICAgICBwYWRkaW5nOiA3cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcbiAgICAgICAgY29sb3I6ICM3OTc5Nzk7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcXG4gICAgICAgICAgICBjb2xvcjogIzc5Nzk3OTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjI1MzQ3YTkmc2NvcGVkPXRydWUmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZyYW1lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ2NGQyNGYwJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIyNTM0N2E5JnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vTm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjI1MzQ3YTkmc2NvcGVkPXRydWUmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL2FwcC9wbHVnaW5zL3plbi90aHJlZXMvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi0yMjUzNDdhOVwiXSxbJ19fZmlsZScsXCJzcmMvdnVlL2NvbXBvbmVudHMvTm9kZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMjI1MzQ3YTlcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcyMjUzNDdhOScsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzIyNTM0N2E5JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMjUzNDdhOSZzY29wZWQ9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCcyMjUzNDdhOScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vRnJhbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ2NGQyNGYwXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRnJhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZyYW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vRnJhbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDY0ZDI0ZjAmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL2FwcC9wbHVnaW5zL3plbi90aHJlZXMvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy92dWUvcGFnZXMvRnJhbWUudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjQ2NGQyNGYwXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNDY0ZDI0ZjAnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCc0NjRkMjRmMCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRnJhbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ2NGQyNGYwXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzQ2NGQyNGYwJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9GcmFtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9GcmFtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiJdLCJuYW1lcyI6WyJuYW1lIiwicHJvcHMiLCJub2RlIiwiTm9kZSIsImNvbXBvbmVudHMiLCJkYXRhIiwicHJvZ3JhbSIsIm1vdW50ZWQiLCJsb2FkUHJvZ3JhbSIsIm1ldGhvZHMiLCJjcmVhdGVOb2RlIiwibGluZV9pbmRleCIsIl90aGlzIiwidGhzIiwiYXBpIiwiZmlkIiwidGhlbiIsInJlc3BvbnNlIiwiYWRkUHJvZ3JhbUxpbmUiLCJfdGhpczIiLCJfdGhpczMiLCJzYXZlUHJvZ3JhbSIsIl90aGlzNCIsIiRwcm9wcyIsIm5pZCIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfaG9pc3RlZF8xIiwiX3RvRGlzcGxheVN0cmluZyIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiJGRhdGEiLCJsaW5lIiwiX2hvaXN0ZWRfMiIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfaG9pc3RlZF8zIiwiX2hvaXN0ZWRfNCIsIl9ob2lzdGVkXzUiLCJfY3JlYXRlVk5vZGUiLCJfY29tcG9uZW50X05vZGUiLCJfaG9pc3RlZF82Iiwib25DbGljayIsIiRldmVudCIsIiRvcHRpb25zIiwiX2hvaXN0ZWRfNyIsIl9jYWNoZSIsImFwcGx5IiwiYXJndW1lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==