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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Frame',
  props: ['backend', 'fid'],
  data: function data() {
    return {
      program: [],
      selectedNodes: [],
      mouse: {
        x: 0,
        y: 0
      },
      stageConfig: {
        width: 800,
        height: 600
      }
    };
  },
  mounted: function mounted() {
    this.loadProgram();
  },
  methods: {
    updateMouse: function updateMouse(event) {
      this.mouse.x = event.evt.layerX;
      this.mouse.y = event.evt.layerY;
    },
    getLineConfig: function getLineConfig(lineIndex) {
      return {
        x: 0,
        y: lineIndex * 40,
        width: 800,
        height: 34
      };
    },
    lineNumberConfig: function lineNumberConfig(lineIndex) {
      return {
        x: 0,
        y: 0,
        width: 17,
        height: 34,
        fill: '#d6d8ff',
        cornerRadius: 3
      };
    },
    nodesGroupConfig: function nodesGroupConfig() {
      return {
        x: 20,
        y: 0
      };
    },
    getNodeConfig: function getNodeConfig(node) {
      return {
        x: node.x || 0,
        y: node.y || 0,
        width: node.width || 100,
        height: 34,
        fill: '#e9e9e9',
        cornerRadius: 3,
        draggable: true,
        name: node.id,
        shadowColor: this.selectedNodes.includes(node.id) ? '#aaf' : null,
        shadowBlur: 5
      };
    },
    getNodeTextConfig: function getNodeTextConfig(node) {
      return {
        x: (node.x || 0) + 5,
        // Синхронизируем с x нода
        y: (node.y || 0) + 10,
        // Синхронизируем с y нода
        text: node.content || 'Node',
        fontSize: 14,
        fill: '#000'
      };
    },
    addNodeButtonConfig: function addNodeButtonConfig(lineIndex) {
      return {
        x: 600,
        y: 0,
        width: 40,
        height: 34,
        fill: '#a4ffd5',
        cornerRadius: 4,
        opacity: 0.5,
        name: "add-node-".concat(lineIndex)
      };
    },
    addLineButtonConfig: function addLineButtonConfig() {
      return {
        x: 0,
        y: this.program.length * 40,
        width: 800,
        height: 40,
        fill: '#f5f5f5',
        cornerRadius: 4
      };
    },
    handleDragEnd: function handleDragEnd(event) {
      var node = event.target;
      var nodeId = node.name();
      var lineIndex = Math.floor(node.y() / 40);
      if (lineIndex >= 0 && lineIndex < this.program.length) {
        var updatedNode = this.program[lineIndex].find(function (n) {
          return n.id === nodeId;
        });
        if (updatedNode) {
          updatedNode.x = node.x();
          updatedNode.y = node.y() % 40;
          this.saveProgram();
        }
      } else {
        var originalLine = this.program.findIndex(function (line) {
          return line.some(function (n) {
            return n.id === nodeId;
          });
        });
        if (originalLine !== -1) {
          var originalNode = this.program[originalLine].find(function (n) {
            return n.id === nodeId;
          });
          node.x(originalNode.x);
          node.y(originalLine * 40);
          this.$refs.layer.getNode().draw();
        }
      }
    },
    handleNodeClick: function handleNodeClick(node, event) {
      if (event.evt.ctrlKey) {
        var index = this.selectedNodes.indexOf(node.id);
        if (index === -1) {
          this.selectedNodes.push(node.id);
        } else {
          this.selectedNodes.splice(index, 1);
        }
      } else {
        this.selectedNodes = [node.id];
      }
    },
    createNode: function createNode(lineIndex) {
      var _this = this;
      ths.api({
        api: 'nodes.Node:Create',
        data: {
          fid: this.fid,
          line_index: lineIndex
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
          _this3.program = response.program.map(function (line, lineIndex) {
            return line.map(function (node, nodeIndex) {
              return _objectSpread(_objectSpread({}, node), {}, {
                x: node.x || nodeIndex * 110,
                // Используем x из данных, если есть
                y: node.y || 0,
                width: node.width || 100
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
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_rect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-rect");
  var _component_v_text = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-text");
  var _component_v_group = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-group");
  var _component_v_layer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-layer");
  var _component_v_stage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-stage");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_stage, {
    config: $data.stageConfig,
    ref: "stage",
    onMousemove: $options.updateMouse
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_layer, {
        ref: "layer"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.program, function (line, lineIndex) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_v_group, {
              key: lineIndex,
              config: $options.getLineConfig(lineIndex)
            }, {
              "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_rect, {
                  config: $options.lineNumberConfig(lineIndex)
                }, null, 8 /* PROPS */, ["config"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_group, {
                  config: $options.nodesGroupConfig()
                }, {
                  "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                    return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(line, function (node) {
                      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_v_rect, {
                        key: node.id,
                        config: $options.getNodeConfig(node),
                        onDragend: $options.handleDragEnd,
                        onClick: function onClick($event) {
                          return $options.handleNodeClick(node, $event);
                        }
                      }, null, 8 /* PROPS */, ["config", "onDragend", "onClick"]);
                    }), 128 /* KEYED_FRAGMENT */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(line, function (node) {
                      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_v_text, {
                        key: node.id + '-text',
                        config: $options.getNodeTextConfig(node)
                      }, null, 8 /* PROPS */, ["config"]);
                    }), 128 /* KEYED_FRAGMENT */))];
                  }),
                  _: 2 /* DYNAMIC */
                }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["config"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_rect, {
                  config: $options.addNodeButtonConfig(lineIndex),
                  onClick: function onClick($event) {
                    return $options.createNode(lineIndex);
                  }
                }, null, 8 /* PROPS */, ["config", "onClick"])];
              }),
              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["config"]);
          }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_rect, {
            config: $options.addLineButtonConfig(),
            onClick: $options.addProgramLine
          }, null, 8 /* PROPS */, ["config", "onClick"])];
        }),
        _: 1 /* STABLE */
      }, 512 /* NEED_PATCH */)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["config", "onMousemove"])]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".frame {\n  border: 1px solid #ddd;\n}", "",{"version":3,"sources":["webpack://./src/vue/pages/Frame.vue"],"names":[],"mappings":"AACA;EACI,sBAAA;AAAJ","sourcesContent":["\n.frame {\n    border: 1px solid #ddd;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MUIyTCIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvcGFnZXMvRnJhbWUudnVlIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvcGFnZXMvRnJhbWUudnVlP2MxZDYiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9wYWdlcy9GcmFtZS52dWU/N2M5MiIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3BhZ2VzL0ZyYW1lLnZ1ZT81MmE0Iiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvcGFnZXMvRnJhbWUudnVlP2QyZjkiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJmcmFtZVwiPlxuICAgICAgICA8di1zdGFnZSA6Y29uZmlnPVwic3RhZ2VDb25maWdcIiByZWY9XCJzdGFnZVwiIEBtb3VzZW1vdmU9XCJ1cGRhdGVNb3VzZVwiPlxuICAgICAgICAgICAgPHYtbGF5ZXIgcmVmPVwibGF5ZXJcIj5cbiAgICAgICAgICAgICAgICA8di1ncm91cCB2LWZvcj1cIihsaW5lLCBsaW5lSW5kZXgpIGluIHByb2dyYW1cIiA6a2V5PVwibGluZUluZGV4XCIgOmNvbmZpZz1cImdldExpbmVDb25maWcobGluZUluZGV4KVwiPlxuICAgICAgICAgICAgICAgICAgICA8di1yZWN0IDpjb25maWc9XCJsaW5lTnVtYmVyQ29uZmlnKGxpbmVJbmRleClcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8di1ncm91cCA6Y29uZmlnPVwibm9kZXNHcm91cENvbmZpZygpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8di1yZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCJub2RlIGluIGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJub2RlLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y29uZmlnPVwiZ2V0Tm9kZUNvbmZpZyhub2RlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGRyYWdlbmQ9XCJoYW5kbGVEcmFnRW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJoYW5kbGVOb2RlQ2xpY2sobm9kZSwgJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHYtdGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwibm9kZSBpbiBsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwibm9kZS5pZCArICctdGV4dCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjb25maWc9XCJnZXROb2RlVGV4dENvbmZpZyhub2RlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3YtZ3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDx2LXJlY3QgOmNvbmZpZz1cImFkZE5vZGVCdXR0b25Db25maWcobGluZUluZGV4KVwiIEBjbGljaz1cImNyZWF0ZU5vZGUobGluZUluZGV4KVwiIC8+XG4gICAgICAgICAgICAgICAgPC92LWdyb3VwPlxuICAgICAgICAgICAgICAgIDx2LXJlY3QgOmNvbmZpZz1cImFkZExpbmVCdXR0b25Db25maWcoKVwiIEBjbGljaz1cImFkZFByb2dyYW1MaW5lXCIgLz5cbiAgICAgICAgICAgIDwvdi1sYXllcj5cbiAgICAgICAgPC92LXN0YWdlPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnRnJhbWUnLFxuICAgIHByb3BzOiBbJ2JhY2tlbmQnLCAnZmlkJ10sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb2dyYW06IFtdLFxuICAgICAgICAgICAgc2VsZWN0ZWROb2RlczogW10sXG4gICAgICAgICAgICBtb3VzZTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICBzdGFnZUNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5sb2FkUHJvZ3JhbSgpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICB1cGRhdGVNb3VzZShldmVudCkge1xuICAgICAgICAgICAgdGhpcy5tb3VzZS54ID0gZXZlbnQuZXZ0LmxheWVyWDtcbiAgICAgICAgICAgIHRoaXMubW91c2UueSA9IGV2ZW50LmV2dC5sYXllclk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0TGluZUNvbmZpZyhsaW5lSW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiBsaW5lSW5kZXggKiA0MCxcbiAgICAgICAgICAgICAgICB3aWR0aDogODAwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIGxpbmVOdW1iZXJDb25maWcobGluZUluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTcsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNCxcbiAgICAgICAgICAgICAgICBmaWxsOiAnI2Q2ZDhmZicsXG4gICAgICAgICAgICAgICAgY29ybmVyUmFkaXVzOiAzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICBub2Rlc0dyb3VwQ29uZmlnKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OiAyMCxcbiAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXROb2RlQ29uZmlnKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogbm9kZS54IHx8IDAsXG4gICAgICAgICAgICAgICAgeTogbm9kZS55IHx8IDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IG5vZGUud2lkdGggfHwgMTAwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzQsXG4gICAgICAgICAgICAgICAgZmlsbDogJyNlOWU5ZTknLFxuICAgICAgICAgICAgICAgIGNvcm5lclJhZGl1czogMyxcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgbmFtZTogbm9kZS5pZCxcbiAgICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogdGhpcy5zZWxlY3RlZE5vZGVzLmluY2x1ZGVzKG5vZGUuaWQpID8gJyNhYWYnIDogbnVsbCxcbiAgICAgICAgICAgICAgICBzaGFkb3dCbHVyOiA1LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXROb2RlVGV4dENvbmZpZyhub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IChub2RlLnggfHwgMCkgKyA1LCAvLyDQodC40L3RhdGA0L7QvdC40LfQuNGA0YPQtdC8INGBIHgg0L3QvtC00LBcbiAgICAgICAgICAgICAgICB5OiAobm9kZS55IHx8IDApICsgMTAsIC8vINCh0LjQvdGF0YDQvtC90LjQt9C40YDRg9C10Lwg0YEgeSDQvdC+0LTQsFxuICAgICAgICAgICAgICAgIHRleHQ6IG5vZGUuY29udGVudCB8fCAnTm9kZScsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICAgICAgICAgIGZpbGw6ICcjMDAwJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkTm9kZUJ1dHRvbkNvbmZpZyhsaW5lSW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogNjAwLFxuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzQsXG4gICAgICAgICAgICAgICAgZmlsbDogJyNhNGZmZDUnLFxuICAgICAgICAgICAgICAgIGNvcm5lclJhZGl1czogNCxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjUsXG4gICAgICAgICAgICAgICAgbmFtZTogYGFkZC1ub2RlLSR7bGluZUluZGV4fWAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIGFkZExpbmVCdXR0b25Db25maWcoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5wcm9ncmFtLmxlbmd0aCAqIDQwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCxcbiAgICAgICAgICAgICAgICBmaWxsOiAnI2Y1ZjVmNScsXG4gICAgICAgICAgICAgICAgY29ybmVyUmFkaXVzOiA0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYW5kbGVEcmFnRW5kKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgY29uc3Qgbm9kZUlkID0gbm9kZS5uYW1lKCk7XG4gICAgICAgICAgICBjb25zdCBsaW5lSW5kZXggPSBNYXRoLmZsb29yKG5vZGUueSgpIC8gNDApO1xuXG4gICAgICAgICAgICBpZiAobGluZUluZGV4ID49IDAgJiYgbGluZUluZGV4IDwgdGhpcy5wcm9ncmFtLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWROb2RlID0gdGhpcy5wcm9ncmFtW2xpbmVJbmRleF0uZmluZChuID0+IG4uaWQgPT09IG5vZGVJZCk7XG4gICAgICAgICAgICAgICAgaWYgKHVwZGF0ZWROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWROb2RlLnggPSBub2RlLngoKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZE5vZGUueSA9IG5vZGUueSgpICUgNDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVByb2dyYW0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsTGluZSA9IHRoaXMucHJvZ3JhbS5maW5kSW5kZXgobGluZSA9PiBsaW5lLnNvbWUobiA9PiBuLmlkID09PSBub2RlSWQpKTtcbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxMaW5lICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbE5vZGUgPSB0aGlzLnByb2dyYW1bb3JpZ2luYWxMaW5lXS5maW5kKG4gPT4gbi5pZCA9PT0gbm9kZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS54KG9yaWdpbmFsTm9kZS54KTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS55KG9yaWdpbmFsTGluZSAqIDQwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5sYXllci5nZXROb2RlKCkuZHJhdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBoYW5kbGVOb2RlQ2xpY2sobm9kZSwgZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5ldnQuY3RybEtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWxlY3RlZE5vZGVzLmluZGV4T2Yobm9kZS5pZCk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkTm9kZXMucHVzaChub2RlLmlkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkTm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWROb2RlcyA9IFtub2RlLmlkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjcmVhdGVOb2RlKGxpbmVJbmRleCkge1xuICAgICAgICAgICAgdGhzLmFwaSh7XG4gICAgICAgICAgICAgICAgYXBpOiAnbm9kZXMuTm9kZTpDcmVhdGUnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgZmlkOiB0aGlzLmZpZCwgbGluZV9pbmRleDogbGluZUluZGV4IH0sXG4gICAgICAgICAgICAgICAgdGhlbjogKCkgPT4gdGhpcy5sb2FkUHJvZ3JhbSgpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkUHJvZ3JhbUxpbmUoKSB7XG4gICAgICAgICAgICB0aHMuYXBpKHtcbiAgICAgICAgICAgICAgICBhcGk6ICdmcmFtZXMuRnJhbWU6YWRkTGluZScsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBmaWQ6IHRoaXMuZmlkIH0sXG4gICAgICAgICAgICAgICAgdGhlbjogKCkgPT4gdGhpcy5sb2FkUHJvZ3JhbSgpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbG9hZFByb2dyYW0oKSB7XG4gICAgICAgICAgICB0aHMuYXBpKHtcbiAgICAgICAgICAgICAgICBhcGk6ICdmcmFtZXMuRnJhbWU6bG9hZFByb2dyYW0nLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgZmlkOiB0aGlzLmZpZCB9LFxuICAgICAgICAgICAgICAgIHRoZW46IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtID0gcmVzcG9uc2UucHJvZ3JhbS5tYXAoKGxpbmUsIGxpbmVJbmRleCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUubWFwKChub2RlLCBub2RlSW5kZXgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBub2RlLnggfHwgbm9kZUluZGV4ICogMTEwLCAvLyDQmNGB0L/QvtC70YzQt9GD0LXQvCB4INC40Lcg0LTQsNC90L3Ri9GFLCDQtdGB0LvQuCDQtdGB0YLRjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IG5vZGUueSB8fCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBub2RlLndpZHRoIHx8IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBzYXZlUHJvZ3JhbSgpIHtcbiAgICAgICAgICAgIHRocy5hcGkoe1xuICAgICAgICAgICAgICAgIGFwaTogJ2ZyYW1lcy5GcmFtZTpzYXZlUHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBmaWQ6IHRoaXMuZmlkLCBwcm9ncmFtOiB0aGlzLnByb2dyYW0gfSxcbiAgICAgICAgICAgICAgICB0aGVuOiAoKSA9PiB0aGlzLmxvYWRQcm9ncmFtKCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5mcmFtZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn1cbjwvc3R5bGU+XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mcmFtZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdnVlL3BhZ2VzL0ZyYW1lLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLHNCQUFBO0FBQUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLmZyYW1lIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9GcmFtZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NjRkMjRmMCZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9GcmFtZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDY0ZDI0ZjBcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GcmFtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRnJhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9GcmFtZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NjRkMjRmMCZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvYXBwL3BsdWdpbnMvemVuL3RocmVlcy9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL3Z1ZS9wYWdlcy9GcmFtZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNDY0ZDI0ZjBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc0NjRkMjRmMCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzQ2NGQyNGYwJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GcmFtZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDY0ZDI0ZjBcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignNDY0ZDI0ZjAnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZyYW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZyYW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIl0sIm5hbWVzIjpbIm5hbWUiLCJwcm9wcyIsImRhdGEiLCJwcm9ncmFtIiwic2VsZWN0ZWROb2RlcyIsIm1vdXNlIiwieCIsInkiLCJzdGFnZUNvbmZpZyIsIndpZHRoIiwiaGVpZ2h0IiwibW91bnRlZCIsImxvYWRQcm9ncmFtIiwibWV0aG9kcyIsInVwZGF0ZU1vdXNlIiwiZXZlbnQiLCJldnQiLCJsYXllclgiLCJsYXllclkiLCJnZXRMaW5lQ29uZmlnIiwibGluZUluZGV4IiwibGluZU51bWJlckNvbmZpZyIsImZpbGwiLCJjb3JuZXJSYWRpdXMiLCJub2Rlc0dyb3VwQ29uZmlnIiwiZ2V0Tm9kZUNvbmZpZyIsIm5vZGUiLCJkcmFnZ2FibGUiLCJpZCIsInNoYWRvd0NvbG9yIiwiaW5jbHVkZXMiLCJzaGFkb3dCbHVyIiwiZ2V0Tm9kZVRleHRDb25maWciLCJ0ZXh0IiwiY29udGVudCIsImZvbnRTaXplIiwiYWRkTm9kZUJ1dHRvbkNvbmZpZyIsIm9wYWNpdHkiLCJjb25jYXQiLCJhZGRMaW5lQnV0dG9uQ29uZmlnIiwibGVuZ3RoIiwiaGFuZGxlRHJhZ0VuZCIsInRhcmdldCIsIm5vZGVJZCIsIk1hdGgiLCJmbG9vciIsInVwZGF0ZWROb2RlIiwiZmluZCIsIm4iLCJzYXZlUHJvZ3JhbSIsIm9yaWdpbmFsTGluZSIsImZpbmRJbmRleCIsImxpbmUiLCJzb21lIiwib3JpZ2luYWxOb2RlIiwiJHJlZnMiLCJsYXllciIsImdldE5vZGUiLCJkcmF3IiwiaGFuZGxlTm9kZUNsaWNrIiwiY3RybEtleSIsImluZGV4IiwiaW5kZXhPZiIsInB1c2giLCJzcGxpY2UiLCJjcmVhdGVOb2RlIiwiX3RoaXMiLCJ0aHMiLCJhcGkiLCJmaWQiLCJsaW5lX2luZGV4IiwidGhlbiIsImFkZFByb2dyYW1MaW5lIiwiX3RoaXMyIiwiX3RoaXMzIiwicmVzcG9uc2UiLCJtYXAiLCJub2RlSW5kZXgiLCJfb2JqZWN0U3ByZWFkIiwiX3RoaXM0IiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9ob2lzdGVkXzEiLCJfY3JlYXRlVk5vZGUiLCJfY29tcG9uZW50X3Zfc3RhZ2UiLCJjb25maWciLCIkZGF0YSIsInJlZiIsIm9uTW91c2Vtb3ZlIiwiJG9wdGlvbnMiLCJfY29tcG9uZW50X3ZfbGF5ZXIiLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl9jcmVhdGVCbG9jayIsIl9jb21wb25lbnRfdl9ncm91cCIsImtleSIsIl9jb21wb25lbnRfdl9yZWN0Iiwib25EcmFnZW5kIiwib25DbGljayIsIiRldmVudCIsIl9jb21wb25lbnRfdl90ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==