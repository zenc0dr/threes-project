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
  },
  methods: {
    getNodeComponent: function getNodeComponent(node) {
      // Логика выбора компонента на основе слоёв
      if (node.layers['threes.units.chart_js']) {
        return 'ChartNode'; // Компонент для графиков
      } else if (node.layers['threes.units.ui@button']) {
        return 'ButtonNode'; // Компонент для кнопок
      }
      return 'DefaultNode'; // По умолчанию
    }
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
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Node_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Node.vue */ "./src/vue/components/Node.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Frame',
  components: {
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_0___default()),
    Node: _components_Node_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ['backend', 'fid'],
  data: function data() {
    return {
      program: [],
      selected_nodes: [] // Массив nid выбранных нодов
    };
  },
  mounted: function mounted() {
    this.loadProgram();
  },
  methods: {
    // Очистить выбранные ноды
    clearSelection: function clearSelection(event) {
      if (event.target.classList.contains('frame') || event.target.classList.contains('frame__line')) {
        this.selected_nodes = [];
      }
    },
    getNodeStyle: function getNodeStyle(node) {
      var _node$layers;
      var cssLayer = (_node$layers = node.layers) === null || _node$layers === void 0 ? void 0 : _node$layers['threes.units.ui@css'];
      return cssLayer ? JSON.parse(cssLayer) : {
        padding: '5px 7px',
        background: '#6eb39d',
        borderRadius: '3px',
        width: '50px'
      };
    },
    getNodeComponent: function getNodeComponent(node) {
      var _node$layers2, _node$layers3;
      if ((_node$layers2 = node.layers) !== null && _node$layers2 !== void 0 && _node$layers2['threes.units.chart_js']) {
        return 'ChartNode';
      } else if ((_node$layers3 = node.layers) !== null && _node$layers3 !== void 0 && _node$layers3['threes.units.ui@button']) {
        return 'ButtonNode';
      }
      return 'DefaultNode';
    },
    isNodeSelected: function isNodeSelected(nid) {
      return this.selected_nodes.includes(nid);
    },
    handleNodeClick: function handleNodeClick(node, event) {
      if (event.detail === 2) return; // Пропускаем двойной клик

      var nid = node.nid;
      if (event.ctrlKey) {
        // Множественный выбор с Ctrl
        var index = this.selected_nodes.indexOf(nid);
        if (index === -1) {
          this.selected_nodes.push(nid); // Добавляем, если не выбран
        } else {
          this.selected_nodes.splice(index, 1); // Убираем, если уже выбран
        }
      } else {
        // Одиночный выбор без Ctrl
        if (this.selected_nodes.length === 1 && this.selected_nodes[0] === nid) {
          this.selected_nodes = []; // Снимаем выбор, если кликнули на уже выбранный
        } else {
          this.selected_nodes = [nid]; // Выбираем только этот нод
        }
      }
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
          _this.loadProgram();
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
          _this2.loadProgram();
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
          _this3.program = response.program;
        }
      });
    },
    saveProgram: function saveProgram() {
      var _this4 = this;
      this.selected_nodes = [];
      ths.api({
        api: 'frames.Frame:saveProgram',
        data: {
          fid: this.fid,
          program: this.program
        },
        then: function then() {
          _this4.loadProgram();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/Node.vue?vue&type=template&id=225347a9":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/Node.vue?vue&type=template&id=225347a9 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
  return $props.node.nid ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($options.getNodeComponent($props.node)), {
    node: $props.node
  }, null, 8 /* PROPS */, ["node"]))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
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

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Node = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Node");
  var _component_draggable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("draggable");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": "frame",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.clearSelection($event);
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.program, function (line, line_index) {
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
      "multi-drag": true,
      "selected-items": $data.selected_nodes,
      onEnd: $options.saveProgram,
      onDblclick: function onDblclick($event) {
        return $options.createNode(line_index);
      }
    }, {
      item: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
        var node = _ref.element;
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Node, {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["frame__node", {
            'selected': $options.isNodeSelected(node.nid)
          }]),
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.getNodeStyle(node)),
          node: node,
          onClick: function onClick($event) {
            return $options.handleNodeClick(node, $event);
          }
        }, null, 8 /* PROPS */, ["class", "style", "node", "onClick"])];
      }),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["modelValue", "onUpdate:modelValue", "selected-items", "onEnd", "onDblclick"]);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.addProgramLine && $options.addProgramLine.apply($options, arguments);
    }),
    "class": "frame__add-line"
  }, "+")]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/Node.vue?vue&type=style&index=0&id=225347a9&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/Node.vue?vue&type=style&index=0&id=225347a9&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".frame {\n  border: 1px solid #ddd;\n  padding: 10px;\n}\n.frame .node-test {\n  background: #4795b1;\n}\n.frame__line {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  min-height: 34px;\n  margin-bottom: 10px;\n}\n.frame__node {\n  cursor: move;\n}\n.frame__node.selected {\n  outline: 2px solid #007bff;\n  outline-offset: 2px;\n}\n.frame__add-line {\n  margin: 3px;\n  padding: 7px;\n  border-radius: 4px;\n  background: #f5f5f5;\n  color: #797979;\n  text-align: center;\n  font-weight: bold;\n  transition: 200ms;\n  cursor: pointer;\n}\n.frame__add-line:hover {\n  background: #efefef;\n  color: #797979;\n}", "",{"version":3,"sources":["webpack://./src/vue/pages/Frame.vue"],"names":[],"mappings":"AACA;EACI,sBAAA;EACA,aAAA;AAAJ;AAEI;EACI,mBAAA;AAAR;AAGI;EACI,aAAA;EACA,eAAA;EACA,QAAA;EACA,gBAAA;EACA,mBAAA;AADR;AAII;EACI,YAAA;AAFR;AAIQ;EACI,0BAAA;EACA,mBAAA;AAFZ;AAMI;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,eAAA;AAJR;AAMQ;EACI,mBAAA;EACA,cAAA;AAJZ","sourcesContent":["\n.frame {\n    border: 1px solid #ddd;\n    padding: 10px;\n\n    .node-test {\n        background: #4795b1;\n    }\n\n    &__line {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 5px;\n        min-height: 34px;\n        margin-bottom: 10px;\n    }\n\n    &__node {\n        cursor: move;\n\n        &.selected {\n            outline: 2px solid #007bff; // Визуальный индикатор выбора\n            outline-offset: 2px;\n        }\n    }\n\n    &__add-line {\n        margin: 3px;\n        padding: 7px;\n        border-radius: 4px;\n        background: #f5f5f5;\n        color: #797979;\n        text-align: center;\n        font-weight: bold;\n        transition: 200ms;\n        cursor: pointer;\n\n        &:hover {\n            background: #efefef;\n            color: #797979;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/Node.vue?vue&type=style&index=0&id=225347a9&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/Node.vue?vue&type=style&index=0&id=225347a9&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Node_vue_vue_type_style_index_0_id_225347a9_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Node.vue?vue&type=style&index=0&id=225347a9&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/Node.vue?vue&type=style&index=0&id=225347a9&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Node_vue_vue_type_style_index_0_id_225347a9_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Node_vue_vue_type_style_index_0_id_225347a9_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _Node_vue_vue_type_template_id_225347a9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node.vue?vue&type=template&id=225347a9 */ "./src/vue/components/Node.vue?vue&type=template&id=225347a9");
/* harmony import */ var _Node_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node.vue?vue&type=script&lang=js */ "./src/vue/components/Node.vue?vue&type=script&lang=js");
/* harmony import */ var _Node_vue_vue_type_style_index_0_id_225347a9_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Node.vue?vue&type=style&index=0&id=225347a9&lang=scss */ "./src/vue/components/Node.vue?vue&type=style&index=0&id=225347a9&lang=scss");
/* harmony import */ var _app_plugins_zen_threes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_app_plugins_zen_threes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Node_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Node_vue_vue_type_template_id_225347a9__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/vue/components/Node.vue"]])
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

/***/ "./src/vue/components/Node.vue?vue&type=template&id=225347a9":
/*!*******************************************************************!*\
  !*** ./src/vue/components/Node.vue?vue&type=template&id=225347a9 ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Node_vue_vue_type_template_id_225347a9__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Node_vue_vue_type_template_id_225347a9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Node.vue?vue&type=template&id=225347a9 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/Node.vue?vue&type=template&id=225347a9");


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

/***/ "./src/vue/components/Node.vue?vue&type=style&index=0&id=225347a9&lang=scss":
/*!**********************************************************************************!*\
  !*** ./src/vue/components/Node.vue?vue&type=style&index=0&id=225347a9&lang=scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Node_vue_vue_type_style_index_0_id_225347a9_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Node.vue?vue&type=style&index=0&id=225347a9&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/Node.vue?vue&type=style&index=0&id=225347a9&lang=scss");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLEVBY2Y7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUMxQjBMOzs7Ozs7Ozs7Ozs7Ozs7QUNBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9Ob2RlLnZ1ZSIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3BhZ2VzL0ZyYW1lLnZ1ZSIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZS52dWU/MDcwYiIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3BhZ2VzL0ZyYW1lLnZ1ZT9jMWQ2Iiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9Ob2RlLnZ1ZT8xOThiIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvcGFnZXMvRnJhbWUudnVlPzdjOTIiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL05vZGUudnVlPzBjMDMiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9wYWdlcy9GcmFtZS52dWU/NTJhNCIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZS52dWU/NGNlMyIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3BhZ2VzL0ZyYW1lLnZ1ZT9kMmY5Iiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9Ob2RlLnZ1ZT84ZmNmIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvcGFnZXMvRnJhbWUudnVlP2UwM2EiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL05vZGUudnVlPzBkMmMiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9wYWdlcy9GcmFtZS52dWU/NDY2MiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IHYtaWY9XCJub2RlLm5pZFwiIGNsYXNzPVwidGhyZWVzLW5vZGVcIj5cbiAgICA8Y29tcG9uZW50IDppcz1cImdldE5vZGVDb21wb25lbnQobm9kZSlcIiA6bm9kZT1cIm5vZGVcIiAvPlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIk5vZGVcIixcbiAgICBwcm9wczoge1xuICAgICAgICBub2RlOiBudWxsXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldE5vZGVDb21wb25lbnQobm9kZSkge1xuICAgICAgICAgICAgLy8g0JvQvtCz0LjQutCwINCy0YvQsdC+0YDQsCDQutC+0LzQv9C+0L3QtdC90YLQsCDQvdCwINC+0YHQvdC+0LLQtSDRgdC70L7RkdCyXG4gICAgICAgICAgICBpZiAobm9kZS5sYXllcnNbJ3RocmVlcy51bml0cy5jaGFydF9qcyddKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdDaGFydE5vZGUnOyAvLyDQmtC+0LzQv9C+0L3QtdC90YIg0LTQu9GPINCz0YDQsNGE0LjQutC+0LJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5sYXllcnNbJ3RocmVlcy51bml0cy51aUBidXR0b24nXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnQnV0dG9uTm9kZSc7IC8vINCa0L7QvNC/0L7QvdC10L3RgiDQtNC70Y8g0LrQvdC+0L/QvtC6XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJ0RlZmF1bHROb2RlJzsgLy8g0J/QviDRg9C80L7Qu9GH0LDQvdC40Y5cbiAgICAgICAgfSxcbiAgICB9XG59XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLnRocmVlcy1ub2RlIHtcblxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZnJhbWVcIiBAY2xpY2s9XCJjbGVhclNlbGVjdGlvbigkZXZlbnQpXCI+XG4gICAgICAgIDxkcmFnZ2FibGVcbiAgICAgICAgICAgIHYtZm9yPVwiKGxpbmUsIGxpbmVfaW5kZXgpIGluIHByb2dyYW1cIlxuICAgICAgICAgICAgOmtleT1cImxpbmVfaW5kZXhcIlxuICAgICAgICAgICAgdi1tb2RlbD1cInByb2dyYW1bbGluZV9pbmRleF1cIlxuICAgICAgICAgICAgdGFnPVwiZGl2XCJcbiAgICAgICAgICAgIGNsYXNzPVwiZnJhbWVfX2xpbmVcIlxuICAgICAgICAgICAgZ3JvdXA9XCJub2Rlc1wiXG4gICAgICAgICAgICBpdGVtLWtleT1cIm5pZFwiXG4gICAgICAgICAgICA6bXVsdGktZHJhZz1cInRydWVcIlxuICAgICAgICAgICAgOnNlbGVjdGVkLWl0ZW1zPVwic2VsZWN0ZWRfbm9kZXNcIlxuICAgICAgICAgICAgQGVuZD1cInNhdmVQcm9ncmFtXCJcbiAgICAgICAgICAgIEBkYmxjbGljaz1cImNyZWF0ZU5vZGUobGluZV9pbmRleClcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgI2l0ZW09XCJ7ZWxlbWVudDpub2RlfVwiPlxuICAgICAgICAgICAgICAgIDxOb2RlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZnJhbWVfX25vZGVcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J3NlbGVjdGVkJzppc05vZGVTZWxlY3RlZChub2RlLm5pZCl9XCJcbiAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwiZ2V0Tm9kZVN0eWxlKG5vZGUpXCJcbiAgICAgICAgICAgICAgICAgICAgOm5vZGU9XCJub2RlXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiaGFuZGxlTm9kZUNsaWNrKG5vZGUsICRldmVudClcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2RyYWdnYWJsZT5cbiAgICAgICAgPGRpdiBAY2xpY2s9XCJhZGRQcm9ncmFtTGluZVwiIGNsYXNzPVwiZnJhbWVfX2FkZC1saW5lXCI+KzwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBkcmFnZ2FibGUgZnJvbSAndnVlZHJhZ2dhYmxlJztcbmltcG9ydCBOb2RlIGZyb20gJy4uL2NvbXBvbmVudHMvTm9kZS52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ0ZyYW1lJyxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGRyYWdnYWJsZSxcbiAgICAgICAgTm9kZVxuICAgIH0sXG4gICAgcHJvcHM6IFsnYmFja2VuZCcsICdmaWQnXSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvZ3JhbTogW10sXG4gICAgICAgICAgICBzZWxlY3RlZF9ub2RlczogW10sIC8vINCc0LDRgdGB0LjQsiBuaWQg0LLRi9Cx0YDQsNC90L3Ri9GFINC90L7QtNC+0LJcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMubG9hZFByb2dyYW0oKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgLy8g0J7Rh9C40YHRgtC40YLRjCDQstGL0LHRgNCw0L3QvdGL0LUg0L3QvtC00YtcbiAgICAgICAgY2xlYXJTZWxlY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmcmFtZScpIHx8IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZyYW1lX19saW5lJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkX25vZGVzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldE5vZGVTdHlsZShub2RlKSB7XG4gICAgICAgICAgICBjb25zdCBjc3NMYXllciA9IG5vZGUubGF5ZXJzPy5bJ3RocmVlcy51bml0cy51aUBjc3MnXTtcbiAgICAgICAgICAgIHJldHVybiBjc3NMYXllciA/IEpTT04ucGFyc2UoY3NzTGF5ZXIpIDoge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc1cHggN3B4JyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzZlYjM5ZCcsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzUwcHgnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBnZXROb2RlQ29tcG9uZW50KG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChub2RlLmxheWVycz8uWyd0aHJlZXMudW5pdHMuY2hhcnRfanMnXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnQ2hhcnROb2RlJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5sYXllcnM/LlsndGhyZWVzLnVuaXRzLnVpQGJ1dHRvbiddKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdCdXR0b25Ob2RlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnRGVmYXVsdE5vZGUnO1xuICAgICAgICB9LFxuICAgICAgICBpc05vZGVTZWxlY3RlZChuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkX25vZGVzLmluY2x1ZGVzKG5pZCk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZU5vZGVDbGljayhub2RlLCBldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRldGFpbCA9PT0gMikgcmV0dXJuOyAvLyDQn9GA0L7Qv9GD0YHQutCw0LXQvCDQtNCy0L7QudC90L7QuSDQutC70LjQulxuXG4gICAgICAgICAgICBjb25zdCBuaWQgPSBub2RlLm5pZDtcbiAgICAgICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICAgICAgICAgLy8g0JzQvdC+0LbQtdGB0YLQstC10L3QvdGL0Lkg0LLRi9Cx0L7RgCDRgSBDdHJsXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnNlbGVjdGVkX25vZGVzLmluZGV4T2YobmlkKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbm9kZXMucHVzaChuaWQpOyAvLyDQlNC+0LHQsNCy0LvRj9C10LwsINC10YHQu9C4INC90LUg0LLRi9Cx0YDQsNC9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9ub2Rlcy5zcGxpY2UoaW5kZXgsIDEpOyAvLyDQo9Cx0LjRgNCw0LXQvCwg0LXRgdC70Lgg0YPQttC1INCy0YvQsdGA0LDQvVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g0J7QtNC40L3QvtGH0L3Ri9C5INCy0YvQsdC+0YAg0LHQtdC3IEN0cmxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZF9ub2Rlcy5sZW5ndGggPT09IDEgJiYgdGhpcy5zZWxlY3RlZF9ub2Rlc1swXSA9PT0gbmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbm9kZXMgPSBbXTsgLy8g0KHQvdC40LzQsNC10Lwg0LLRi9Cx0L7RgCwg0LXRgdC70Lgg0LrQu9C40LrQvdGD0LvQuCDQvdCwINGD0LbQtSDQstGL0LHRgNCw0L3QvdGL0LlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkX25vZGVzID0gW25pZF07IC8vINCS0YvQsdC40YDQsNC10Lwg0YLQvtC70YzQutC+INGN0YLQvtGCINC90L7QtFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlTm9kZShsaW5lX2luZGV4KSB7XG4gICAgICAgICAgICB0aHMuYXBpKHtcbiAgICAgICAgICAgICAgICBhcGk6ICdub2Rlcy5Ob2RlOkNyZWF0ZScsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBmaWQ6IHRoaXMuZmlkLFxuICAgICAgICAgICAgICAgICAgICBsaW5lX2luZGV4OiBsaW5lX2luZGV4XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFByb2dyYW0oKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZFByb2dyYW1MaW5lKCkge1xuICAgICAgICAgICAgdGhzLmFwaSh7XG4gICAgICAgICAgICAgICAgYXBpOiAnZnJhbWVzLkZyYW1lOmFkZExpbmUnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgZmlkOiB0aGlzLmZpZCB9LFxuICAgICAgICAgICAgICAgIHRoZW46ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkUHJvZ3JhbSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFByb2dyYW0oKSB7XG4gICAgICAgICAgICB0aHMuYXBpKHtcbiAgICAgICAgICAgICAgICBhcGk6ICdmcmFtZXMuRnJhbWU6bG9hZFByb2dyYW0nLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlkOiB0aGlzLmZpZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW0gPSByZXNwb25zZS5wcm9ncmFtO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZVByb2dyYW0oKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkX25vZGVzID0gW11cbiAgICAgICAgICAgIHRocy5hcGkoe1xuICAgICAgICAgICAgICAgIGFwaTogJ2ZyYW1lcy5GcmFtZTpzYXZlUHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBmaWQ6IHRoaXMuZmlkLFxuICAgICAgICAgICAgICAgICAgICBwcm9ncmFtOiB0aGlzLnByb2dyYW1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkUHJvZ3JhbSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5mcmFtZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgLm5vZGUtdGVzdCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0Nzk1YjE7XG4gICAgfVxuXG4gICAgJl9fbGluZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZ2FwOiA1cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDM0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgJl9fbm9kZSB7XG4gICAgICAgIGN1cnNvcjogbW92ZTtcblxuICAgICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAjMDA3YmZmOyAvLyDQktC40LfRg9Cw0LvRjNC90YvQuSDQuNC90LTQuNC60LDRgtC+0YAg0LLRi9Cx0L7RgNCwXG4gICAgICAgICAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fYWRkLWxpbmUge1xuICAgICAgICBtYXJnaW46IDNweDtcbiAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICAgIGNvbG9yOiAjNzk3OTc5O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICAgICAgICAgIGNvbG9yOiAjNzk3OTc5O1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZyYW1lIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4uZnJhbWUgLm5vZGUtdGVzdCB7XFxuICBiYWNrZ3JvdW5kOiAjNDc5NWIxO1xcbn1cXG4uZnJhbWVfX2xpbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogNXB4O1xcbiAgbWluLWhlaWdodDogMzRweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5mcmFtZV9fbm9kZSB7XFxuICBjdXJzb3I6IG1vdmU7XFxufVxcbi5mcmFtZV9fbm9kZS5zZWxlY3RlZCB7XFxuICBvdXRsaW5lOiAycHggc29saWQgIzAwN2JmZjtcXG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxufVxcbi5mcmFtZV9fYWRkLWxpbmUge1xcbiAgbWFyZ2luOiAzcHg7XFxuICBwYWRkaW5nOiA3cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcbiAgY29sb3I6ICM3OTc5Nzk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZnJhbWVfX2FkZC1saW5lOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XFxuICBjb2xvcjogIzc5Nzk3OTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Z1ZS9wYWdlcy9GcmFtZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxzQkFBQTtFQUNBLGFBQUE7QUFBSjtBQUVJO0VBQ0ksbUJBQUE7QUFBUjtBQUdJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQURSO0FBSUk7RUFDSSxZQUFBO0FBRlI7QUFJUTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7QUFGWjtBQU1JO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFKUjtBQU1RO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBSlpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLmZyYW1lIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgLm5vZGUtdGVzdCB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjNDc5NWIxO1xcbiAgICB9XFxuXFxuICAgICZfX2xpbmUge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICAgICAgbWluLWhlaWdodDogMzRweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgJl9fbm9kZSB7XFxuICAgICAgICBjdXJzb3I6IG1vdmU7XFxuXFxuICAgICAgICAmLnNlbGVjdGVkIHtcXG4gICAgICAgICAgICBvdXRsaW5lOiAycHggc29saWQgIzAwN2JmZjsgLy8g0JLQuNC30YPQsNC70YzQvdGL0Lkg0LjQvdC00LjQutCw0YLQvtGAINCy0YvQsdC+0YDQsFxcbiAgICAgICAgICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fYWRkLWxpbmUge1xcbiAgICAgICAgbWFyZ2luOiAzcHg7XFxuICAgICAgICBwYWRkaW5nOiA3cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcbiAgICAgICAgY29sb3I6ICM3OTc5Nzk7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcXG4gICAgICAgICAgICBjb2xvcjogIzc5Nzk3OTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjI1MzQ3YTkmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZyYW1lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ2NGQyNGYwJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIyNTM0N2E5XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vTm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjI1MzQ3YTkmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL2FwcC9wbHVnaW5zL3plbi90aHJlZXMvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy92dWUvY29tcG9uZW50cy9Ob2RlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIyMjUzNDdhOVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzIyNTM0N2E5JywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnMjI1MzQ3YTknLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIyNTM0N2E5XCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzIyNTM0N2E5JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9GcmFtZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDY0ZDI0ZjBcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GcmFtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRnJhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9GcmFtZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NjRkMjRmMCZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvYXBwL3BsdWdpbnMvemVuL3RocmVlcy9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL3Z1ZS9wYWdlcy9GcmFtZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNDY0ZDI0ZjBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc0NjRkMjRmMCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzQ2NGQyNGYwJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GcmFtZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDY0ZDI0ZjBcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignNDY0ZDI0ZjAnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZyYW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZyYW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIyNTM0N2E5XCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRnJhbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ2NGQyNGYwXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIyNTM0N2E5Jmxhbmc9c2Nzc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRnJhbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDY0ZDI0ZjAmbGFuZz1zY3NzXCIiXSwibmFtZXMiOlsibmFtZSIsInByb3BzIiwibm9kZSIsIm1ldGhvZHMiLCJnZXROb2RlQ29tcG9uZW50IiwibGF5ZXJzIiwiZHJhZ2dhYmxlIiwiTm9kZSIsImNvbXBvbmVudHMiLCJkYXRhIiwicHJvZ3JhbSIsInNlbGVjdGVkX25vZGVzIiwibW91bnRlZCIsImxvYWRQcm9ncmFtIiwiY2xlYXJTZWxlY3Rpb24iLCJldmVudCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZ2V0Tm9kZVN0eWxlIiwiX25vZGUkbGF5ZXJzIiwiY3NzTGF5ZXIiLCJKU09OIiwicGFyc2UiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsIndpZHRoIiwiX25vZGUkbGF5ZXJzMiIsIl9ub2RlJGxheWVyczMiLCJpc05vZGVTZWxlY3RlZCIsIm5pZCIsImluY2x1ZGVzIiwiaGFuZGxlTm9kZUNsaWNrIiwiZGV0YWlsIiwiY3RybEtleSIsImluZGV4IiwiaW5kZXhPZiIsInB1c2giLCJzcGxpY2UiLCJsZW5ndGgiLCJjcmVhdGVOb2RlIiwibGluZV9pbmRleCIsIl90aGlzIiwidGhzIiwiYXBpIiwiZmlkIiwidGhlbiIsImFkZFByb2dyYW1MaW5lIiwiX3RoaXMyIiwiX3RoaXMzIiwicmVzcG9uc2UiLCJzYXZlUHJvZ3JhbSIsIl90aGlzNCIsIiRwcm9wcyIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfaG9pc3RlZF8xIiwiX2NyZWF0ZUJsb2NrIiwiX3Jlc29sdmVEeW5hbWljQ29tcG9uZW50IiwiJG9wdGlvbnMiLCJvbkNsaWNrIiwiX2NhY2hlIiwiJGV2ZW50IiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCIkZGF0YSIsImxpbmUiLCJfY29tcG9uZW50X2RyYWdnYWJsZSIsImtleSIsInRhZyIsImdyb3VwIiwib25FbmQiLCJvbkRibGNsaWNrIiwiaXRlbSIsIl93aXRoQ3R4IiwiX3JlZiIsImVsZW1lbnQiLCJfY3JlYXRlVk5vZGUiLCJfY29tcG9uZW50X05vZGUiLCJfbm9ybWFsaXplQ2xhc3MiLCJzdHlsZSIsIl9ub3JtYWxpemVTdHlsZSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJhcHBseSIsImFyZ3VtZW50cyJdLCJzb3VyY2VSb290IjoiIn0=