"use strict";
(self["webpackChunkthrees"] = self["webpackChunkthrees"] || []).push([["src_vue_pages_Frame_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/pages/Frame.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/pages/Frame.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Frame',
  components: {
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_0___default())
  },
  props: ['backend', 'fid'],
  data: function data() {
    return {
      program: [],
      selectedNodes: []
    };
  },
  mounted: function mounted() {
    this.loadProgram();
  },
  methods: {
    getNodeStyle: function getNodeStyle(node) {
      var cssLayer = node.layers['threes.units.ui@css'];
      return cssLayer ? JSON.parse(cssLayer) : {
        padding: '5px 7px',
        background: '#e9e9e9',
        borderRadius: '3px'
      };
    },
    getNodeComponent: function getNodeComponent(node) {
      // Логика выбора компонента на основе слоёв
      if (node.layers['threes.units.chart_js']) {
        return 'ChartNode'; // Компонент для графиков
      } else if (node.layers['threes.units.ui@button']) {
        return 'ButtonNode'; // Компонент для кнопок
      }
      return 'DefaultNode'; // По умолчанию
    },
    handleNodeClick: function handleNodeClick(node, event) {
      if (event.ctrlKey) {
        var index = this.selectedNodes.indexOf(node.nid);
        if (index === -1) this.selectedNodes.push(node.nid);else this.selectedNodes.splice(index, 1);
      } else {
        this.selectedNodes = [node.nid];
      }
    },
    createNodeAtPosition: function createNodeAtPosition(event) {
      var line_index = Math.floor(event.offsetY / 40); // Пример высоты строки
      this.createNode(line_index);
    },
    createNode: function createNode(line_index) {
      var _this = this;
      ths.api({
        api: 'nodes.Node:Create',
        data: {
          fid: this.fid,
          line_index: line_index
        },
        then: function then() {
          return _this.loadProgram();
        }
      });
    },
    addProgramLine: function addProgramLine() {
      var _this2 = this;
      ths.api({
        api: 'frames.Frame:addLine',
        data: {
          fid: this.fid
        },
        then: function then() {
          return _this2.loadProgram();
        }
      });
    },
    loadProgram: function loadProgram() {
      var _this3 = this;
      ths.api({
        api: 'frames.Frame:loadProgram',
        data: {
          fid: this.fid
        },
        then: function then(response) {
          _this3.program = response.program.map(function (line) {
            return line.map(function (node) {
              return _objectSpread(_objectSpread({}, node), {}, {
                x: 0 // x не нужен, так как позиция управляется через Flexbox
              });
            });
          });
        }
      });
    },
    saveProgram: function saveProgram() {
      var _this4 = this;
      ths.api({
        api: 'frames.Frame:saveProgram',
        data: {
          fid: this.fid,
          program: this.program
        },
        then: function then() {
          return _this4.loadProgram();
        }
      });
    }
  }
});

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
var _hoisted_2 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_draggable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("draggable");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.program, function (line, line_index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_draggable, {
      key: line_index,
      modelValue: $data.program[line_index],
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.program[line_index] = $event;
      },
      tag: "div",
      "class": "frame__line",
      group: "nodes",
      "item-key": "nid",
      onEnd: $options.saveProgram
    }, {
      item: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
        var node = _ref.element;
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          "class": "frame__node",
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.getNodeStyle(node)),
          onClick: function onClick($event) {
            return $options.handleNodeClick(node, $event);
          }
        }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($options.getNodeComponent(node)), {
          node: node
        }, null, 8 /* PROPS */, ["node"]))], 12 /* STYLE, PROPS */, _hoisted_2)];
      }),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["modelValue", "onUpdate:modelValue", "onEnd"]);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onDblclick: _cache[0] || (_cache[0] = function () {
      return $options.createNodeAtPosition && $options.createNodeAtPosition.apply($options, arguments);
    }),
    "class": "frame__add-line"
  }, "+", 32 /* NEED_HYDRATION */)]);
}

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
___CSS_LOADER_EXPORT___.push([module.id, ".frame {\n  border: 1px solid #ddd;\n  padding: 10px;\n}\n.frame__line {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  min-height: 34px;\n  margin-bottom: 10px;\n}\n.frame__node {\n  cursor: move;\n}\n.frame__add-line {\n  margin: 3px;\n  padding: 7px;\n  border-radius: 4px;\n  background: #f5f5f5;\n  color: #797979;\n  text-align: center;\n  font-weight: bold;\n  transition: 200ms;\n  cursor: pointer;\n}\n.frame__add-line:hover {\n  background: #efefef;\n  color: #797979;\n}", "",{"version":3,"sources":["webpack://./src/vue/pages/Frame.vue"],"names":[],"mappings":"AACA;EACI,sBAAA;EACA,aAAA;AAAJ;AAEI;EACI,aAAA;EACA,eAAA;EACA,QAAA;EACA,gBAAA;EACA,mBAAA;AAAR;AAGI;EACI,YAAA;AADR;AAII;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,eAAA;AAFR;AAIQ;EACI,mBAAA;EACA,cAAA;AAFZ","sourcesContent":["\n.frame {\n    border: 1px solid #ddd;\n    padding: 10px;\n\n    &__line {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 5px;\n        min-height: 34px;\n        margin-bottom: 10px;\n    }\n\n    &__node {\n        cursor: move;\n    }\n\n    &__add-line {\n        margin: 3px;\n        padding: 7px;\n        border-radius: 4px;\n        background: #f5f5f5;\n        color: #797979;\n        text-align: center;\n        font-weight: bold;\n        transition: 200ms;\n        cursor: pointer;\n\n        &:hover {\n            background: #efefef;\n            color: #797979;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./src/vue/pages/Frame.vue?vue&type=style&index=0&id=464d24f0&lang=scss":
/*!******************************************************************************!*\
  !*** ./src/vue/pages/Frame.vue?vue&type=style&index=0&id=464d24f0&lang=scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Frame_vue_vue_type_style_index_0_id_464d24f0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Frame.vue?vue&type=style&index=0&id=464d24f0&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/pages/Frame.vue?vue&type=style&index=0&id=464d24f0&lang=scss");


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc3JjX3Z1ZV9wYWdlc19GcmFtZV92dWUuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCcUM7QUFFckMsaUVBQWU7RUFDWEMsSUFBSSxFQUFFLE9BQU87RUFDYkMsVUFBVSxFQUFFO0lBQUVGLFNBQVEsRUFBUkEscURBQVNBO0VBQUMsQ0FBQztFQUN6QkcsS0FBSyxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztFQUN6QkMsSUFBSSxXQUFKQSxJQUFJQSxDQUFBLEVBQUc7SUFDSCxPQUFPO01BQ0hDLE9BQU8sRUFBRSxFQUFFO01BQ1hDLGFBQWEsRUFBRTtJQUNuQixDQUFDO0VBQ0wsQ0FBQztFQUNEQyxPQUFPLFdBQVBBLE9BQU9BLENBQUEsRUFBRztJQUNOLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7RUFDdEIsQ0FBQztFQUNEQyxPQUFPLEVBQUU7SUFDTEMsWUFBWSxXQUFaQSxZQUFZQSxDQUFDQyxJQUFJLEVBQUU7TUFDZixJQUFNQyxRQUFPLEdBQUlELElBQUksQ0FBQ0UsTUFBTSxDQUFDLHFCQUFxQixDQUFDO01BQ25ELE9BQU9ELFFBQU8sR0FBSUUsSUFBSSxDQUFDQyxLQUFLLENBQUNILFFBQVEsSUFBSTtRQUFFSSxPQUFPLEVBQUUsU0FBUztRQUFFQyxVQUFVLEVBQUUsU0FBUztRQUFFQyxZQUFZLEVBQUU7TUFBTSxDQUFDO0lBQy9HLENBQUM7SUFDREMsZ0JBQWdCLFdBQWhCQSxnQkFBZ0JBLENBQUNSLElBQUksRUFBRTtNQUNuQjtNQUNBLElBQUlBLElBQUksQ0FBQ0UsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEVBQUU7UUFDdEMsT0FBTyxXQUFXLEVBQUU7TUFDeEIsT0FBTyxJQUFJRixJQUFJLENBQUNFLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFO1FBQzlDLE9BQU8sWUFBWSxFQUFFO01BQ3pCO01BQ0EsT0FBTyxhQUFhLEVBQUU7SUFDMUIsQ0FBQztJQUNETyxlQUFlLFdBQWZBLGVBQWVBLENBQUNULElBQUksRUFBRVUsS0FBSyxFQUFFO01BQ3pCLElBQUlBLEtBQUssQ0FBQ0MsT0FBTyxFQUFFO1FBQ2YsSUFBTUMsS0FBSSxHQUFJLElBQUksQ0FBQ2pCLGFBQWEsQ0FBQ2tCLE9BQU8sQ0FBQ2IsSUFBSSxDQUFDYyxHQUFHLENBQUM7UUFDbEQsSUFBSUYsS0FBSSxLQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ2pCLGFBQWEsQ0FBQ29CLElBQUksQ0FBQ2YsSUFBSSxDQUFDYyxHQUFHLENBQUMsTUFDOUMsSUFBSSxDQUFDbkIsYUFBYSxDQUFDcUIsTUFBTSxDQUFDSixLQUFLLEVBQUUsQ0FBQyxDQUFDO01BQzVDLE9BQU87UUFDSCxJQUFJLENBQUNqQixhQUFZLEdBQUksQ0FBQ0ssSUFBSSxDQUFDYyxHQUFHLENBQUM7TUFDbkM7SUFDSixDQUFDO0lBQ0RHLG9CQUFvQixXQUFwQkEsb0JBQW9CQSxDQUFDUCxLQUFLLEVBQUU7TUFDeEIsSUFBTVEsVUFBUyxHQUFJQyxJQUFJLENBQUNDLEtBQUssQ0FBQ1YsS0FBSyxDQUFDVyxPQUFNLEdBQUksRUFBRSxDQUFDLEVBQUU7TUFDbkQsSUFBSSxDQUFDQyxVQUFVLENBQUNKLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBQ0RJLFVBQVUsV0FBVkEsVUFBVUEsQ0FBQ0osVUFBVSxFQUFFO01BQUEsSUFBQUssS0FBQTtNQUNuQkMsR0FBRyxDQUFDQyxHQUFHLENBQUM7UUFDSkEsR0FBRyxFQUFFLG1CQUFtQjtRQUN4QmhDLElBQUksRUFBRTtVQUFFaUMsR0FBRyxFQUFFLElBQUksQ0FBQ0EsR0FBRztVQUFFUixVQUFVLEVBQUVBO1FBQVcsQ0FBQztRQUMvQ1MsSUFBSSxFQUFFLFNBQU5BLElBQUlBLENBQUE7VUFBQSxPQUFRSixLQUFJLENBQUMxQixXQUFXLENBQUMsQ0FBQztRQUFBO01BQ2xDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDRCtCLGNBQWMsV0FBZEEsY0FBY0EsQ0FBQSxFQUFHO01BQUEsSUFBQUMsTUFBQTtNQUNiTCxHQUFHLENBQUNDLEdBQUcsQ0FBQztRQUNKQSxHQUFHLEVBQUUsc0JBQXNCO1FBQzNCaEMsSUFBSSxFQUFFO1VBQUVpQyxHQUFHLEVBQUUsSUFBSSxDQUFDQTtRQUFJLENBQUM7UUFDdkJDLElBQUksRUFBRSxTQUFOQSxJQUFJQSxDQUFBO1VBQUEsT0FBUUUsTUFBSSxDQUFDaEMsV0FBVyxDQUFDLENBQUM7UUFBQTtNQUNsQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0RBLFdBQVcsV0FBWEEsV0FBV0EsQ0FBQSxFQUFHO01BQUEsSUFBQWlDLE1BQUE7TUFDVk4sR0FBRyxDQUFDQyxHQUFHLENBQUM7UUFDSkEsR0FBRyxFQUFFLDBCQUEwQjtRQUMvQmhDLElBQUksRUFBRTtVQUFFaUMsR0FBRyxFQUFFLElBQUksQ0FBQ0E7UUFBSSxDQUFDO1FBQ3ZCQyxJQUFJLEVBQUUsU0FBTkEsSUFBSUEsQ0FBRUksUUFBTyxFQUFLO1VBQ2RELE1BQUksQ0FBQ3BDLE9BQU0sR0FBSXFDLFFBQVEsQ0FBQ3JDLE9BQU8sQ0FBQ3NDLEdBQUcsQ0FBQyxVQUFBQyxJQUFHO1lBQUEsT0FBS0EsSUFBSSxDQUFDRCxHQUFHLENBQUMsVUFBQWhDLElBQUc7Y0FBQSxPQUFBa0MsYUFBQSxDQUFBQSxhQUFBLEtBQ2pEbEMsSUFBSTtnQkFDUG1DLENBQUMsRUFBRSxDQUFDLENBQUU7Y0FBQTtZQUFBLENBQ1IsQ0FBQztVQUFBLEVBQUM7UUFDUjtNQUNKLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDREMsV0FBVyxXQUFYQSxXQUFXQSxDQUFBLEVBQUc7TUFBQSxJQUFBQyxNQUFBO01BQ1ZiLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDO1FBQ0pBLEdBQUcsRUFBRSwwQkFBMEI7UUFDL0JoQyxJQUFJLEVBQUU7VUFBRWlDLEdBQUcsRUFBRSxJQUFJLENBQUNBLEdBQUc7VUFBRWhDLE9BQU8sRUFBRSxJQUFJLENBQUNBO1FBQVEsQ0FBQztRQUM5Q2lDLElBQUksRUFBRSxTQUFOQSxJQUFJQSxDQUFBO1VBQUEsT0FBUVUsTUFBSSxDQUFDeEMsV0FBVyxDQUFDLENBQUM7UUFBQTtNQUNsQyxDQUFDLENBQUM7SUFDTjtFQUNKO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF0R1EsU0FBTTtBQUFPOzs7OzJEQUFsQnlDLHVEQUFBLENBc0JNLE9BdEJOQyxVQXNCTSwwREFyQkZELHVEQUFBLENBbUJZRSx5Q0FBQSxRQUFBQywrQ0FBQSxDQWxCcUJDLEtBQUEsQ0FBQWhELE9BQU8sWUFBNUJ1QyxJQUFJLEVBQUVmLFVBQVU7NkRBRDVCeUIsZ0RBQUEsQ0FtQllDLG9CQUFBO01BakJQQyxHQUFHLEVBQUUzQixVQUFVO2tCQUNQd0IsS0FBQSxDQUFBaEQsT0FBTyxDQUFDd0IsVUFBVTs7ZUFBbEJ3QixLQUFBLENBQUFoRCxPQUFPLENBQUN3QixVQUFVLElBQUE0QixNQUFBO01BQUE7TUFDM0JDLEdBQUcsRUFBQyxLQUFLO01BQ1QsU0FBTSxhQUFhO01BQ25CQyxLQUFLLEVBQUMsT0FBTztNQUNiLFVBQVEsRUFBQyxLQUFLO01BQ2JDLEtBQUcsRUFBRUMsUUFBQSxDQUFBZDs7TUFFS2UsSUFBSSxFQUFBQyw0Q0FBQSxDQUNYLFVBQUFDLElBQUE7UUFBQSxJQUR3QnJELElBQUksR0FBQXFELElBQUEsQ0FPdEJDLE9BQUE7UUFBQSxPQVBzQixDQUM1QkMsdURBQUEsQ0FNTTtVQUxGLFNBQU0sYUFBYTtVQUNsQkMsS0FBSyxFQUFBQyxtREFBQSxDQUFFUCxRQUFBLENBQUFuRCxZQUFZLENBQUNDLElBQUk7VUFDeEIwRCxPQUFLLFdBQUxBLE9BQUtBLENBQUFaLE1BQUE7WUFBQSxPQUFFSSxRQUFBLENBQUF6QyxlQUFlLENBQUNULElBQUksRUFBRThDLE1BQU07VUFBQTsrREFFcENILGdEQUFBLENBQXVEZ0IsNERBQUEsQ0FBdkNULFFBQUEsQ0FBQTFDLGdCQUFnQixDQUFDUixJQUFJO1VBQUlBLElBQUksRUFBRUE7UUFBSTs7OztrQ0FJL0R1RCx1REFBQSxDQUFxRTtJQUEvREssVUFBUSxFQUFBQyxNQUFBLFFBQUFBLE1BQUE7TUFBQSxPQUFFWCxRQUFBLENBQUFqQyxvQkFBQSxJQUFBaUMsUUFBQSxDQUFBakMsb0JBQUEsQ0FBQTZDLEtBQUEsQ0FBQVosUUFBQSxFQUFBYSxTQUFBLENBQW9CO0lBQUE7SUFBRSxTQUFNO0tBQWtCLEdBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QnZFO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxrREFBa0QsMkJBQTJCLGtCQUFrQixHQUFHLGdCQUFnQixrQkFBa0Isb0JBQW9CLGFBQWEscUJBQXFCLHdCQUF3QixHQUFHLGdCQUFnQixpQkFBaUIsR0FBRyxvQkFBb0IsZ0JBQWdCLGlCQUFpQix1QkFBdUIsd0JBQXdCLG1CQUFtQix1QkFBdUIsc0JBQXNCLHNCQUFzQixvQkFBb0IsR0FBRywwQkFBMEIsd0JBQXdCLG1CQUFtQixHQUFHLE9BQU8sMEZBQTBGLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLG1DQUFtQyw2QkFBNkIsb0JBQW9CLGlCQUFpQix3QkFBd0IsMEJBQTBCLG1CQUFtQiwyQkFBMkIsOEJBQThCLE9BQU8saUJBQWlCLHVCQUF1QixPQUFPLHFCQUFxQixzQkFBc0IsdUJBQXVCLDZCQUE2Qiw4QkFBOEIseUJBQXlCLDZCQUE2Qiw0QkFBNEIsNEJBQTRCLDBCQUEwQixxQkFBcUIsa0NBQWtDLDZCQUE2QixXQUFXLE9BQU8sR0FBRyxxQkFBcUI7QUFDOS9DO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B3RDtBQUMvRixZQUErYTs7QUFFL2E7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsMlhBQU87Ozs7QUFJeEIsaUVBQWUsMlhBQU8sYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWitCO0FBQ1Y7QUFDTDs7QUFFbkQsQ0FBaUU7O0FBRWlDO0FBQ2xHLGlDQUFpQyxnSEFBZSxDQUFDLDBFQUFNLGFBQWEsNEVBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQWNmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDMUIyTCIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvcGFnZXMvRnJhbWUudnVlIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvcGFnZXMvRnJhbWUudnVlP2MxZDYiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9wYWdlcy9GcmFtZS52dWU/N2M5MiIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3BhZ2VzL0ZyYW1lLnZ1ZT81MmE0Iiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvcGFnZXMvRnJhbWUudnVlP2QyZjkiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJmcmFtZVwiPlxuICAgICAgICA8ZHJhZ2dhYmxlXG4gICAgICAgICAgICB2LWZvcj1cIihsaW5lLCBsaW5lX2luZGV4KSBpbiBwcm9ncmFtXCJcbiAgICAgICAgICAgIDprZXk9XCJsaW5lX2luZGV4XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJwcm9ncmFtW2xpbmVfaW5kZXhdXCJcbiAgICAgICAgICAgIHRhZz1cImRpdlwiXG4gICAgICAgICAgICBjbGFzcz1cImZyYW1lX19saW5lXCJcbiAgICAgICAgICAgIGdyb3VwPVwibm9kZXNcIlxuICAgICAgICAgICAgaXRlbS1rZXk9XCJuaWRcIlxuICAgICAgICAgICAgQGVuZD1cInNhdmVQcm9ncmFtXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHRlbXBsYXRlICNpdGVtPVwieyBlbGVtZW50OiBub2RlIH1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZnJhbWVfX25vZGVcIlxuICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJnZXROb2RlU3R5bGUobm9kZSlcIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJoYW5kbGVOb2RlQ2xpY2sobm9kZSwgJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Y29tcG9uZW50IDppcz1cImdldE5vZGVDb21wb25lbnQobm9kZSlcIiA6bm9kZT1cIm5vZGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kcmFnZ2FibGU+XG4gICAgICAgIDxkaXYgQGRibGNsaWNrPVwiY3JlYXRlTm9kZUF0UG9zaXRpb25cIiBjbGFzcz1cImZyYW1lX19hZGQtbGluZVwiPis8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgZHJhZ2dhYmxlIGZyb20gJ3Z1ZWRyYWdnYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnRnJhbWUnLFxuICAgIGNvbXBvbmVudHM6IHsgZHJhZ2dhYmxlIH0sXG4gICAgcHJvcHM6IFsnYmFja2VuZCcsICdmaWQnXSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvZ3JhbTogW10sXG4gICAgICAgICAgICBzZWxlY3RlZE5vZGVzOiBbXSxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMubG9hZFByb2dyYW0oKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0Tm9kZVN0eWxlKG5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNzc0xheWVyID0gbm9kZS5sYXllcnNbJ3RocmVlcy51bml0cy51aUBjc3MnXTtcbiAgICAgICAgICAgIHJldHVybiBjc3NMYXllciA/IEpTT04ucGFyc2UoY3NzTGF5ZXIpIDogeyBwYWRkaW5nOiAnNXB4IDdweCcsIGJhY2tncm91bmQ6ICcjZTllOWU5JywgYm9yZGVyUmFkaXVzOiAnM3B4JyB9O1xuICAgICAgICB9LFxuICAgICAgICBnZXROb2RlQ29tcG9uZW50KG5vZGUpIHtcbiAgICAgICAgICAgIC8vINCb0L7Qs9C40LrQsCDQstGL0LHQvtGA0LAg0LrQvtC80L/QvtC90LXQvdGC0LAg0L3QsCDQvtGB0L3QvtCy0LUg0YHQu9C+0ZHQslxuICAgICAgICAgICAgaWYgKG5vZGUubGF5ZXJzWyd0aHJlZXMudW5pdHMuY2hhcnRfanMnXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnQ2hhcnROb2RlJzsgLy8g0JrQvtC80L/QvtC90LXQvdGCINC00LvRjyDQs9GA0LDRhNC40LrQvtCyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUubGF5ZXJzWyd0aHJlZXMudW5pdHMudWlAYnV0dG9uJ10pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0J1dHRvbk5vZGUnOyAvLyDQmtC+0LzQv9C+0L3QtdC90YIg0LTQu9GPINC60L3QvtC/0L7QulxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICdEZWZhdWx0Tm9kZSc7IC8vINCf0L4g0YPQvNC+0LvRh9Cw0L3QuNGOXG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZU5vZGVDbGljayhub2RlLCBldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuc2VsZWN0ZWROb2Rlcy5pbmRleE9mKG5vZGUubmlkKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB0aGlzLnNlbGVjdGVkTm9kZXMucHVzaChub2RlLm5pZCk7XG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLnNlbGVjdGVkTm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzID0gW25vZGUubmlkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlTm9kZUF0UG9zaXRpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmVfaW5kZXggPSBNYXRoLmZsb29yKGV2ZW50Lm9mZnNldFkgLyA0MCk7IC8vINCf0YDQuNC80LXRgCDQstGL0YHQvtGC0Ysg0YHRgtGA0L7QutC4XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU5vZGUobGluZV9pbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZU5vZGUobGluZV9pbmRleCkge1xuICAgICAgICAgICAgdGhzLmFwaSh7XG4gICAgICAgICAgICAgICAgYXBpOiAnbm9kZXMuTm9kZTpDcmVhdGUnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgZmlkOiB0aGlzLmZpZCwgbGluZV9pbmRleDogbGluZV9pbmRleCB9LFxuICAgICAgICAgICAgICAgIHRoZW46ICgpID0+IHRoaXMubG9hZFByb2dyYW0oKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBhZGRQcm9ncmFtTGluZSgpIHtcbiAgICAgICAgICAgIHRocy5hcGkoe1xuICAgICAgICAgICAgICAgIGFwaTogJ2ZyYW1lcy5GcmFtZTphZGRMaW5lJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGZpZDogdGhpcy5maWQgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiAoKSA9PiB0aGlzLmxvYWRQcm9ncmFtKCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFByb2dyYW0oKSB7XG4gICAgICAgICAgICB0aHMuYXBpKHtcbiAgICAgICAgICAgICAgICBhcGk6ICdmcmFtZXMuRnJhbWU6bG9hZFByb2dyYW0nLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgZmlkOiB0aGlzLmZpZCB9LFxuICAgICAgICAgICAgICAgIHRoZW46IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtID0gcmVzcG9uc2UucHJvZ3JhbS5tYXAobGluZSA9PiBsaW5lLm1hcChub2RlID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5ub2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgeDogMCwgLy8geCDQvdC1INC90YPQttC10L0sINGC0LDQuiDQutCw0Log0L/QvtC30LjRhtC40Y8g0YPQv9GA0LDQstC70Y/QtdGC0YHRjyDRh9C10YDQtdC3IEZsZXhib3hcbiAgICAgICAgICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmVQcm9ncmFtKCkge1xuICAgICAgICAgICAgdGhzLmFwaSh7XG4gICAgICAgICAgICAgICAgYXBpOiAnZnJhbWVzLkZyYW1lOnNhdmVQcm9ncmFtJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGZpZDogdGhpcy5maWQsIHByb2dyYW06IHRoaXMucHJvZ3JhbSB9LFxuICAgICAgICAgICAgICAgIHRoZW46ICgpID0+IHRoaXMubG9hZFByb2dyYW0oKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLmZyYW1lIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAmX19saW5lIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBnYXA6IDVweDtcbiAgICAgICAgbWluLWhlaWdodDogMzRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAmX19ub2RlIHtcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xuICAgIH1cblxuICAgICZfX2FkZC1saW5lIHtcbiAgICAgICAgbWFyZ2luOiAzcHg7XG4gICAgICAgIHBhZGRpbmc6IDdweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgICBjb2xvcjogIzc5Nzk3OTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgICAgICAgICBjb2xvcjogIzc5Nzk3OTtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mcmFtZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLmZyYW1lX19saW5lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDVweDtcXG4gIG1pbi1oZWlnaHQ6IDM0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uZnJhbWVfX25vZGUge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG4uZnJhbWVfX2FkZC1saW5lIHtcXG4gIG1hcmdpbjogM3B4O1xcbiAgcGFkZGluZzogN3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcXG4gIGNvbG9yOiAjNzk3OTc5O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmZyYW1lX19hZGQtbGluZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xcbiAgY29sb3I6ICM3OTc5Nzk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92dWUvcGFnZXMvRnJhbWUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0FBQUo7QUFFSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUdJO0VBQ0ksWUFBQTtBQURSO0FBSUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUZSO0FBSVE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFGWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4uZnJhbWUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICAmX19saW5lIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBnYXA6IDVweDtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM0cHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgICZfX25vZGUge1xcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xcbiAgICB9XFxuXFxuICAgICZfX2FkZC1saW5lIHtcXG4gICAgICAgIG1hcmdpbjogM3B4O1xcbiAgICAgICAgcGFkZGluZzogN3B4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcXG4gICAgICAgIGNvbG9yOiAjNzk3OTc5O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XFxuICAgICAgICAgICAgY29sb3I6ICM3OTc5Nzk7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9GcmFtZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NjRkMjRmMCZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9GcmFtZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDY0ZDI0ZjBcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GcmFtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRnJhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9GcmFtZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NjRkMjRmMCZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvYXBwL3BsdWdpbnMvemVuL3RocmVlcy9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL3Z1ZS9wYWdlcy9GcmFtZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNDY0ZDI0ZjBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc0NjRkMjRmMCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzQ2NGQyNGYwJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GcmFtZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDY0ZDI0ZjBcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignNDY0ZDI0ZjAnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZyYW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZyYW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIl0sIm5hbWVzIjpbImRyYWdnYWJsZSIsIm5hbWUiLCJjb21wb25lbnRzIiwicHJvcHMiLCJkYXRhIiwicHJvZ3JhbSIsInNlbGVjdGVkTm9kZXMiLCJtb3VudGVkIiwibG9hZFByb2dyYW0iLCJtZXRob2RzIiwiZ2V0Tm9kZVN0eWxlIiwibm9kZSIsImNzc0xheWVyIiwibGF5ZXJzIiwiSlNPTiIsInBhcnNlIiwicGFkZGluZyIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJnZXROb2RlQ29tcG9uZW50IiwiaGFuZGxlTm9kZUNsaWNrIiwiZXZlbnQiLCJjdHJsS2V5IiwiaW5kZXgiLCJpbmRleE9mIiwibmlkIiwicHVzaCIsInNwbGljZSIsImNyZWF0ZU5vZGVBdFBvc2l0aW9uIiwibGluZV9pbmRleCIsIk1hdGgiLCJmbG9vciIsIm9mZnNldFkiLCJjcmVhdGVOb2RlIiwiX3RoaXMiLCJ0aHMiLCJhcGkiLCJmaWQiLCJ0aGVuIiwiYWRkUHJvZ3JhbUxpbmUiLCJfdGhpczIiLCJfdGhpczMiLCJyZXNwb25zZSIsIm1hcCIsImxpbmUiLCJfb2JqZWN0U3ByZWFkIiwieCIsInNhdmVQcm9ncmFtIiwiX3RoaXM0IiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9ob2lzdGVkXzEiLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIiRkYXRhIiwiX2NyZWF0ZUJsb2NrIiwiX2NvbXBvbmVudF9kcmFnZ2FibGUiLCJrZXkiLCIkZXZlbnQiLCJ0YWciLCJncm91cCIsIm9uRW5kIiwiJG9wdGlvbnMiLCJpdGVtIiwiX3dpdGhDdHgiLCJfcmVmIiwiZWxlbWVudCIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJzdHlsZSIsIl9ub3JtYWxpemVTdHlsZSIsIm9uQ2xpY2siLCJfcmVzb2x2ZUR5bmFtaWNDb21wb25lbnQiLCJvbkRibGNsaWNrIiwiX2NhY2hlIiwiYXBwbHkiLCJhcmd1bWVudHMiXSwic291cmNlUm9vdCI6IiJ9