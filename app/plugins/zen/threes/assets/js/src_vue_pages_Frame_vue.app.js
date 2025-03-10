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
    // Очистить множественное выделение
    clearSelection: function clearSelection(event) {
      if (event.target.classList.contains('frame') || event.target.classList.contains('frame__line')) {
        this.selected_nodes = [];
      }
    },
    // Оформить стиль нода в зависимости от его слоя css
    getNodeStyle: function getNodeStyle(node) {
      var style = {
        padding: '5px 7px',
        background: '#6eb39d',
        borderRadius: '3px',
        width: '50px'
      };
      for (var i in node.layers) {
        var layer = node.layers[i];
        if (layer.aspect === 'threes.units.ui@css') {
          style = JSON.parse(layer.exe);
          console.log('STYLE', style);
          break;
        }
      }
      return style;
    },
    getNodeComponent: function getNodeComponent(node) {
      var _node$layers, _node$layers2;
      if ((_node$layers = node.layers) !== null && _node$layers !== void 0 && _node$layers['threes.units.chart_js']) {
        return 'ChartNode';
      } else if ((_node$layers2 = node.layers) !== null && _node$layers2 !== void 0 && _node$layers2['threes.units.ui@button']) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc3JjX3Z1ZV9wYWdlc19GcmFtZV92dWUuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFNQSxpRUFBZTtFQUNYQSxJQUFJLEVBQUUsTUFBTTtFQUNaQyxLQUFLLEVBQUU7SUFDSEMsSUFBSSxFQUFFO0VBQ1YsQ0FBQztFQUNEQyxPQUFPLEVBQUU7SUFDTEMsZ0JBQWdCLFdBQWhCQSxnQkFBZ0JBLENBQUNGLElBQUksRUFBRTtNQUNuQjtNQUNBLElBQUlBLElBQUksQ0FBQ0csTUFBTSxDQUFDLHVCQUF1QixDQUFDLEVBQUU7UUFDdEMsT0FBTyxXQUFXLEVBQUU7TUFDeEIsT0FBTyxJQUFJSCxJQUFJLENBQUNHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFO1FBQzlDLE9BQU8sWUFBWSxFQUFFO01BQ3pCO01BQ0EsT0FBTyxhQUFhLEVBQUU7SUFDMUI7RUFDSjtBQUNKLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUW9DO0FBQ0s7QUFFMUMsaUVBQWU7RUFDWEwsSUFBSSxFQUFFLE9BQU87RUFDYlEsVUFBVSxFQUFFO0lBQ1JGLFNBQVMsRUFBVEEscURBQVM7SUFDVEMsSUFBRyxFQUFIQSw0REFBSUE7RUFDUixDQUFDO0VBQ0ROLEtBQUssRUFBRSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUM7RUFDekJRLElBQUksV0FBSkEsSUFBSUEsQ0FBQSxFQUFHO0lBQ0gsT0FBTztNQUNIQyxPQUFPLEVBQUUsRUFBRTtNQUNYQyxjQUFjLEVBQUUsRUFBRSxDQUFFO0lBQ3hCLENBQUM7RUFDTCxDQUFDO0VBQ0RDLE9BQU8sV0FBUEEsT0FBT0EsQ0FBQSxFQUFHO0lBQ04sSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQztFQUN0QixDQUFDO0VBQ0RWLE9BQU8sRUFBRTtJQUNMO0lBQ0FXLGNBQWMsV0FBZEEsY0FBY0EsQ0FBQ0MsS0FBSyxFQUFFO01BQ2xCLElBQUlBLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxPQUFPLEtBQUtILEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUM1RixJQUFJLENBQUNQLGNBQWEsR0FBSSxFQUFFO01BQzVCO0lBQ0osQ0FBQztJQUNEO0lBQ0FRLFlBQVksV0FBWkEsWUFBWUEsQ0FBQ2pCLElBQUksRUFBRTtNQUNmLElBQUlrQixLQUFJLEdBQUk7UUFDUkMsT0FBTyxFQUFFLFNBQVM7UUFDbEJDLFVBQVUsRUFBRSxTQUFTO1FBQ3JCQyxZQUFZLEVBQUUsS0FBSztRQUNuQkMsS0FBSyxFQUFFO01BQ1g7TUFDQSxLQUFLLElBQUlDLENBQUEsSUFBS3ZCLElBQUksQ0FBQ0csTUFBTSxFQUFFO1FBQ3ZCLElBQUlxQixLQUFJLEdBQUl4QixJQUFJLENBQUNHLE1BQU0sQ0FBQ29CLENBQUM7UUFDekIsSUFBSUMsS0FBSyxDQUFDQyxNQUFLLEtBQU0scUJBQXFCLEVBQUU7VUFDeENQLEtBQUksR0FBSVEsSUFBSSxDQUFDQyxLQUFLLENBQUNILEtBQUssQ0FBQ0ksR0FBRztVQUM1QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxFQUFFWixLQUFLO1VBQzFCO1FBQ0o7TUFDSjtNQUNBLE9BQU9BLEtBQUk7SUFDZixDQUFDO0lBQ0RoQixnQkFBZ0IsV0FBaEJBLGdCQUFnQkEsQ0FBQ0YsSUFBSSxFQUFFO01BQUEsSUFBQStCLFlBQUEsRUFBQUMsYUFBQTtNQUNuQixLQUFBRCxZQUFBLEdBQUkvQixJQUFJLENBQUNHLE1BQU0sY0FBQTRCLFlBQUEsZUFBWEEsWUFBQSxDQUFjLHVCQUF1QixDQUFDLEVBQUU7UUFDeEMsT0FBTyxXQUFXO01BQ3RCLE9BQU8sS0FBQUMsYUFBQSxHQUFJaEMsSUFBSSxDQUFDRyxNQUFNLGNBQUE2QixhQUFBLGVBQVhBLGFBQUEsQ0FBYyx3QkFBd0IsQ0FBQyxFQUFFO1FBQ2hELE9BQU8sWUFBWTtNQUN2QjtNQUNBLE9BQU8sYUFBYTtJQUN4QixDQUFDO0lBQ0RDLGNBQWMsV0FBZEEsY0FBY0EsQ0FBQ0MsR0FBRyxFQUFFO01BQ2hCLE9BQU8sSUFBSSxDQUFDekIsY0FBYyxDQUFDMEIsUUFBUSxDQUFDRCxHQUFHLENBQUM7SUFDNUMsQ0FBQztJQUNERSxlQUFlLFdBQWZBLGVBQWVBLENBQUNwQyxJQUFJLEVBQUVhLEtBQUssRUFBRTtNQUN6QixJQUFJQSxLQUFLLENBQUN3QixNQUFLLEtBQU0sQ0FBQyxFQUFFLE9BQU0sQ0FBRTs7TUFFaEMsSUFBTUgsR0FBRSxHQUFJbEMsSUFBSSxDQUFDa0MsR0FBRztNQUNwQixJQUFJckIsS0FBSyxDQUFDeUIsT0FBTyxFQUFFO1FBQ2Y7UUFDQSxJQUFNQyxLQUFJLEdBQUksSUFBSSxDQUFDOUIsY0FBYyxDQUFDK0IsT0FBTyxDQUFDTixHQUFHLENBQUM7UUFDOUMsSUFBSUssS0FBSSxLQUFNLENBQUMsQ0FBQyxFQUFFO1VBQ2QsSUFBSSxDQUFDOUIsY0FBYyxDQUFDZ0MsSUFBSSxDQUFDUCxHQUFHLEdBQUU7UUFDbEMsT0FBTztVQUNILElBQUksQ0FBQ3pCLGNBQWMsQ0FBQ2lDLE1BQU0sQ0FBQ0gsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFO1FBQzFDO01BQ0osT0FBTztRQUNIO1FBQ0EsSUFBSSxJQUFJLENBQUM5QixjQUFjLENBQUNrQyxNQUFLLEtBQU0sS0FBSyxJQUFJLENBQUNsQyxjQUFjLENBQUMsQ0FBQyxNQUFNeUIsR0FBRyxFQUFFO1VBQ3BFLElBQUksQ0FBQ3pCLGNBQWEsR0FBSSxFQUFDLEVBQUU7UUFDN0IsT0FBTztVQUNILElBQUksQ0FBQ0EsY0FBYSxHQUFJLENBQUN5QixHQUFHLEdBQUU7UUFDaEM7TUFDSjtJQUNKLENBQUM7SUFDRFUsVUFBVSxXQUFWQSxVQUFVQSxDQUFDQyxVQUFVLEVBQUU7TUFBQSxJQUFBQyxLQUFBO01BQ25CQyxHQUFHLENBQUNDLEdBQUcsQ0FBQztRQUNKQSxHQUFHLEVBQUUsbUJBQW1CO1FBQ3hCekMsSUFBSSxFQUFFO1VBQ0YwQyxHQUFHLEVBQUUsSUFBSSxDQUFDQSxHQUFHO1VBQ2JKLFVBQVUsRUFBRUE7UUFDaEIsQ0FBQztRQUNESyxJQUFJLEVBQUUsU0FBTkEsSUFBSUEsQ0FBQSxFQUFRO1VBQ1JKLEtBQUksQ0FBQ25DLFdBQVcsQ0FBQztRQUNyQjtNQUNKLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDRHdDLGNBQWMsV0FBZEEsY0FBY0EsQ0FBQSxFQUFHO01BQUEsSUFBQUMsTUFBQTtNQUNiTCxHQUFHLENBQUNDLEdBQUcsQ0FBQztRQUNKQSxHQUFHLEVBQUUsc0JBQXNCO1FBQzNCekMsSUFBSSxFQUFFO1VBQUUwQyxHQUFHLEVBQUUsSUFBSSxDQUFDQTtRQUFJLENBQUM7UUFDdkJDLElBQUksRUFBRSxTQUFOQSxJQUFJQSxDQUFBLEVBQVE7VUFDUkUsTUFBSSxDQUFDekMsV0FBVyxDQUFDO1FBQ3JCO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNEQSxXQUFXLFdBQVhBLFdBQVdBLENBQUEsRUFBRztNQUFBLElBQUEwQyxNQUFBO01BQ1ZOLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDO1FBQ0pBLEdBQUcsRUFBRSwwQkFBMEI7UUFDL0J6QyxJQUFJLEVBQUU7VUFDRjBDLEdBQUcsRUFBRSxJQUFJLENBQUNBO1FBQ2QsQ0FBQztRQUNEQyxJQUFJLEVBQUUsU0FBTkEsSUFBSUEsQ0FBRUksUUFBTyxFQUFLO1VBQ2RELE1BQUksQ0FBQzdDLE9BQU0sR0FBSThDLFFBQVEsQ0FBQzlDLE9BQU87UUFDbkM7TUFDSixDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0QrQyxXQUFXLFdBQVhBLFdBQVdBLENBQUEsRUFBRztNQUFBLElBQUFDLE1BQUE7TUFDVixJQUFJLENBQUMvQyxjQUFhLEdBQUksRUFBQztNQUN2QnNDLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDO1FBQ0pBLEdBQUcsRUFBRSwwQkFBMEI7UUFDL0J6QyxJQUFJLEVBQUU7VUFDRjBDLEdBQUcsRUFBRSxJQUFJLENBQUNBLEdBQUc7VUFDYnpDLE9BQU8sRUFBRSxJQUFJLENBQUNBO1FBQ2xCLENBQUM7UUFDRDBDLElBQUksRUFBRSxTQUFOQSxJQUFJQSxDQUFBLEVBQVE7VUFDUk0sTUFBSSxDQUFDN0MsV0FBVyxDQUFDLENBQUM7UUFDdEI7TUFDSixDQUFDLENBQUM7SUFDTjtFQUNKO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VEdkpvQixTQUFNOzs7U0FBaEI4QyxNQUFBLENBQUF6RCxJQUFJLENBQUNrQyxHQUFHLHNEQUFuQndCLHVEQUFBLENBRU0sT0FGTkMsVUFFTSxzREFERkMsZ0RBQUEsQ0FBdURDLDREQUFBLENBQXZDQyxRQUFBLENBQUE1RCxnQkFBZ0IsQ0FBQ3VELE1BQUEsQ0FBQXpELElBQUk7SUFBSUEsSUFBSSxFQUFFeUQsTUFBQSxDQUFBekQ7RUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkRDRG5EMEQsdURBQUEsQ0F5Qk07SUF6QkQsU0FBTSxPQUFPO0lBQUVLLE9BQUssRUFBQUMsTUFBQSxRQUFBQSxNQUFBLGdCQUFBQyxNQUFBO01BQUEsT0FBRUgsUUFBQSxDQUFBbEQsY0FBYyxDQUFDcUQsTUFBTTtJQUFBOzZEQUM1Q1AsdURBQUEsQ0FzQllRLHlDQUFBLFFBQUFDLCtDQUFBLENBckJxQkMsS0FBQSxDQUFBNUQsT0FBTyxZQUE1QjZELElBQUksRUFBRXhCLFVBQVU7NkRBRDVCZSxnREFBQSxDQXNCWVUsb0JBQUE7TUFwQlBDLEdBQUcsRUFBRTFCLFVBQVU7a0JBQ1B1QixLQUFBLENBQUE1RCxPQUFPLENBQUNxQyxVQUFVOztlQUFsQnVCLEtBQUEsQ0FBQTVELE9BQU8sQ0FBQ3FDLFVBQVUsSUFBQW9CLE1BQUE7TUFBQTtNQUMzQk8sR0FBRyxFQUFDLEtBQUs7TUFDVCxTQUFNLGFBQWE7TUFDbkJDLEtBQUssRUFBQyxPQUFPO01BQ2IsVUFBUSxFQUFDLEtBQUs7TUFDYixZQUFVLEVBQUUsSUFBSTtNQUNoQixnQkFBYyxFQUFFTCxLQUFBLENBQUEzRCxjQUFjO01BQzlCaUUsS0FBRyxFQUFFWixRQUFBLENBQUFQLFdBQVc7TUFDaEJvQixVQUFRLFdBQVJBLFVBQVFBLENBQUFWLE1BQUE7UUFBQSxPQUFFSCxRQUFBLENBQUFsQixVQUFVLENBQUNDLFVBQVU7TUFBQTs7TUFFckIrQixJQUFJLEVBQUFDLDRDQUFBLENBQ1gsVUFBQUMsSUFBQTtRQUFBLElBRHNCOUUsSUFBSSxHQUFBOEUsSUFBQSxDQU94QkMsT0FBQTtRQUFBLE9BUHdCLENBQzFCQyxnREFBQSxDQU1FQyxlQUFBO1VBTEUsU0FBS0MsbURBQUEsRUFBQyxhQUFhO1lBQUEsWUFDQ3BCLFFBQUEsQ0FBQTdCLGNBQWMsQ0FBQ2pDLElBQUksQ0FBQ2tDLEdBQUc7VUFBQTtVQUMxQ2hCLEtBQUssRUFBQWlFLG1EQUFBLENBQUVyQixRQUFBLENBQUE3QyxZQUFZLENBQUNqQixJQUFJO1VBQ3hCQSxJQUFJLEVBQUVBLElBQUk7VUFDVitELE9BQUssV0FBTEEsT0FBS0EsQ0FBQUUsTUFBQTtZQUFBLE9BQUVILFFBQUEsQ0FBQTFCLGVBQWUsQ0FBQ3BDLElBQUksRUFBRWlFLE1BQU07VUFBQTs7Ozs7a0NBSWhEbUIsdURBQUEsQ0FBNEQ7SUFBdERyQixPQUFLLEVBQUFDLE1BQUEsUUFBQUEsTUFBQTtNQUFBLE9BQUVGLFFBQUEsQ0FBQVgsY0FBQSxJQUFBVyxRQUFBLENBQUFYLGNBQUEsQ0FBQWtDLEtBQUEsQ0FBQXZCLFFBQUEsRUFBQXdCLFNBQUEsQ0FBYztJQUFBO0lBQUUsU0FBTTtLQUFrQixHQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI5RDtBQUM0SDtBQUM3QjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsaURBQWlELGtFQUFrRTtBQUNuSDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxrREFBa0QsMkJBQTJCLGtCQUFrQixHQUFHLHFCQUFxQix3QkFBd0IsR0FBRyxnQkFBZ0Isa0JBQWtCLG9CQUFvQixhQUFhLHFCQUFxQix3QkFBd0IsR0FBRyxnQkFBZ0IsaUJBQWlCLEdBQUcseUJBQXlCLCtCQUErQix3QkFBd0IsR0FBRyxvQkFBb0IsZ0JBQWdCLGlCQUFpQix1QkFBdUIsd0JBQXdCLG1CQUFtQix1QkFBdUIsc0JBQXNCLHNCQUFzQixvQkFBb0IsR0FBRywwQkFBMEIsd0JBQXdCLG1CQUFtQixHQUFHLE9BQU8sMEZBQTBGLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsbUNBQW1DLDZCQUE2QixvQkFBb0Isb0JBQW9CLDhCQUE4QixPQUFPLGlCQUFpQix3QkFBd0IsMEJBQTBCLG1CQUFtQiwyQkFBMkIsOEJBQThCLE9BQU8saUJBQWlCLHVCQUF1Qix3QkFBd0IsMENBQTBDLGdFQUFnRSxXQUFXLE9BQU8scUJBQXFCLHNCQUFzQix1QkFBdUIsNkJBQTZCLDhCQUE4Qix5QkFBeUIsNkJBQTZCLDRCQUE0Qiw0QkFBNEIsMEJBQTBCLHFCQUFxQixrQ0FBa0MsNkJBQTZCLFdBQVcsT0FBTyxHQUFHLHFCQUFxQjtBQUM1M0Q7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHdEO0FBQy9GLFlBQThhOztBQUU5YTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQywwWEFBTzs7OztBQUl4QixpRUFBZSwwWEFBTyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1o0RDtBQUMvRixZQUErYTs7QUFFL2E7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsMlhBQU87Ozs7QUFJeEIsaUVBQWUsMlhBQU8sYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjhCO0FBQ1Y7QUFDTDs7QUFFbEQsQ0FBZ0U7O0FBRWtDO0FBQ2xHLGlDQUFpQyxnSEFBZSxDQUFDLHlFQUFNLGFBQWEsMkVBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQWNmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJtRDtBQUNWO0FBQ0w7O0FBRW5ELENBQWlFOztBQUVpQztBQUNsRyxpQ0FBaUMsZ0hBQWUsQ0FBQywwRUFBTSxhQUFhLDRFQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFjZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQzFCMEw7Ozs7Ozs7Ozs7Ozs7OztBQ0FDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL05vZGUudnVlIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvcGFnZXMvRnJhbWUudnVlIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9Ob2RlLnZ1ZT8wNzBiIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvcGFnZXMvRnJhbWUudnVlP2MxZDYiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL05vZGUudnVlPzE5OGIiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9wYWdlcy9GcmFtZS52dWU/N2M5MiIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZS52dWU/MGMwMyIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3BhZ2VzL0ZyYW1lLnZ1ZT81MmE0Iiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9Ob2RlLnZ1ZT80Y2UzIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvcGFnZXMvRnJhbWUudnVlP2QyZjkiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGRpdiB2LWlmPVwibm9kZS5uaWRcIiBjbGFzcz1cInRocmVlcy1ub2RlXCI+XG4gICAgPGNvbXBvbmVudCA6aXM9XCJnZXROb2RlQ29tcG9uZW50KG5vZGUpXCIgOm5vZGU9XCJub2RlXCIgLz5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJOb2RlXCIsXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbm9kZTogbnVsbFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZXROb2RlQ29tcG9uZW50KG5vZGUpIHtcbiAgICAgICAgICAgIC8vINCb0L7Qs9C40LrQsCDQstGL0LHQvtGA0LAg0LrQvtC80L/QvtC90LXQvdGC0LAg0L3QsCDQvtGB0L3QvtCy0LUg0YHQu9C+0ZHQslxuICAgICAgICAgICAgaWYgKG5vZGUubGF5ZXJzWyd0aHJlZXMudW5pdHMuY2hhcnRfanMnXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnQ2hhcnROb2RlJzsgLy8g0JrQvtC80L/QvtC90LXQvdGCINC00LvRjyDQs9GA0LDRhNC40LrQvtCyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUubGF5ZXJzWyd0aHJlZXMudW5pdHMudWlAYnV0dG9uJ10pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ0J1dHRvbk5vZGUnOyAvLyDQmtC+0LzQv9C+0L3QtdC90YIg0LTQu9GPINC60L3QvtC/0L7QulxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICdEZWZhdWx0Tm9kZSc7IC8vINCf0L4g0YPQvNC+0LvRh9Cw0L3QuNGOXG4gICAgICAgIH0sXG4gICAgfVxufVxuPC9zY3JpcHQ+XG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi50aHJlZXMtbm9kZSB7XG5cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImZyYW1lXCIgQGNsaWNrPVwiY2xlYXJTZWxlY3Rpb24oJGV2ZW50KVwiPlxuICAgICAgICA8ZHJhZ2dhYmxlXG4gICAgICAgICAgICB2LWZvcj1cIihsaW5lLCBsaW5lX2luZGV4KSBpbiBwcm9ncmFtXCJcbiAgICAgICAgICAgIDprZXk9XCJsaW5lX2luZGV4XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJwcm9ncmFtW2xpbmVfaW5kZXhdXCJcbiAgICAgICAgICAgIHRhZz1cImRpdlwiXG4gICAgICAgICAgICBjbGFzcz1cImZyYW1lX19saW5lXCJcbiAgICAgICAgICAgIGdyb3VwPVwibm9kZXNcIlxuICAgICAgICAgICAgaXRlbS1rZXk9XCJuaWRcIlxuICAgICAgICAgICAgOm11bHRpLWRyYWc9XCJ0cnVlXCJcbiAgICAgICAgICAgIDpzZWxlY3RlZC1pdGVtcz1cInNlbGVjdGVkX25vZGVzXCJcbiAgICAgICAgICAgIEBlbmQ9XCJzYXZlUHJvZ3JhbVwiXG4gICAgICAgICAgICBAZGJsY2xpY2s9XCJjcmVhdGVOb2RlKGxpbmVfaW5kZXgpXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHRlbXBsYXRlICNpdGVtPVwie2VsZW1lbnQ6bm9kZX1cIj5cbiAgICAgICAgICAgICAgICA8Tm9kZVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZyYW1lX19ub2RlXCJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydzZWxlY3RlZCc6aXNOb2RlU2VsZWN0ZWQobm9kZS5uaWQpfVwiXG4gICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cImdldE5vZGVTdHlsZShub2RlKVwiXG4gICAgICAgICAgICAgICAgICAgIDpub2RlPVwibm9kZVwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImhhbmRsZU5vZGVDbGljayhub2RlLCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kcmFnZ2FibGU+XG4gICAgICAgIDxkaXYgQGNsaWNrPVwiYWRkUHJvZ3JhbUxpbmVcIiBjbGFzcz1cImZyYW1lX19hZGQtbGluZVwiPis8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgZHJhZ2dhYmxlIGZyb20gJ3Z1ZWRyYWdnYWJsZSc7XG5pbXBvcnQgTm9kZSBmcm9tICcuLi9jb21wb25lbnRzL05vZGUudnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdGcmFtZScsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBkcmFnZ2FibGUsXG4gICAgICAgIE5vZGVcbiAgICB9LFxuICAgIHByb3BzOiBbJ2JhY2tlbmQnLCAnZmlkJ10sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb2dyYW06IFtdLFxuICAgICAgICAgICAgc2VsZWN0ZWRfbm9kZXM6IFtdLCAvLyDQnNCw0YHRgdC40LIgbmlkINCy0YvQsdGA0LDQvdC90YvRhSDQvdC+0LTQvtCyXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmxvYWRQcm9ncmFtKCk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIC8vINCe0YfQuNGB0YLQuNGC0Ywg0LzQvdC+0LbQtdGB0YLQstC10L3QvdC+0LUg0LLRi9C00LXQu9C10L3QuNC1XG4gICAgICAgIGNsZWFyU2VsZWN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZnJhbWUnKSB8fCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmcmFtZV9fbGluZScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9ub2RlcyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyDQntGE0L7RgNC80LjRgtGMINGB0YLQuNC70Ywg0L3QvtC00LAg0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINC10LPQviDRgdC70L7RjyBjc3NcbiAgICAgICAgZ2V0Tm9kZVN0eWxlKG5vZGUpIHtcbiAgICAgICAgICAgIGxldCBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNXB4IDdweCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyM2ZWIzOWQnLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc1MHB4J1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBub2RlLmxheWVycykge1xuICAgICAgICAgICAgICAgIGxldCBsYXllciA9IG5vZGUubGF5ZXJzW2ldXG4gICAgICAgICAgICAgICAgaWYgKGxheWVyLmFzcGVjdCA9PT0gJ3RocmVlcy51bml0cy51aUBjc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlID0gSlNPTi5wYXJzZShsYXllci5leGUpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTVFlMRScsIHN0eWxlKVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHlsZVxuICAgICAgICB9LFxuICAgICAgICBnZXROb2RlQ29tcG9uZW50KG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChub2RlLmxheWVycz8uWyd0aHJlZXMudW5pdHMuY2hhcnRfanMnXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnQ2hhcnROb2RlJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZS5sYXllcnM/LlsndGhyZWVzLnVuaXRzLnVpQGJ1dHRvbiddKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdCdXR0b25Ob2RlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnRGVmYXVsdE5vZGUnO1xuICAgICAgICB9LFxuICAgICAgICBpc05vZGVTZWxlY3RlZChuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkX25vZGVzLmluY2x1ZGVzKG5pZCk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZU5vZGVDbGljayhub2RlLCBldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRldGFpbCA9PT0gMikgcmV0dXJuOyAvLyDQn9GA0L7Qv9GD0YHQutCw0LXQvCDQtNCy0L7QudC90L7QuSDQutC70LjQulxuXG4gICAgICAgICAgICBjb25zdCBuaWQgPSBub2RlLm5pZDtcbiAgICAgICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICAgICAgICAgLy8g0JzQvdC+0LbQtdGB0YLQstC10L3QvdGL0Lkg0LLRi9Cx0L7RgCDRgSBDdHJsXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnNlbGVjdGVkX25vZGVzLmluZGV4T2YobmlkKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbm9kZXMucHVzaChuaWQpIC8vINCU0L7QsdCw0LLQu9GP0LXQvCwg0LXRgdC70Lgg0L3QtSDQstGL0LHRgNCw0L1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkX25vZGVzLnNwbGljZShpbmRleCwgMSk7IC8vINCj0LHQuNGA0LDQtdC8LCDQtdGB0LvQuCDRg9C20LUg0LLRi9Cx0YDQsNC9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDQntC00LjQvdC+0YfQvdGL0Lkg0LLRi9Cx0L7RgCDQsdC10LcgQ3RybFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkX25vZGVzLmxlbmd0aCA9PT0gMSAmJiB0aGlzLnNlbGVjdGVkX25vZGVzWzBdID09PSBuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9ub2RlcyA9IFtdIC8vINCh0L3QuNC80LDQtdC8INCy0YvQsdC+0YAsINC10YHQu9C4INC60LvQuNC60L3Rg9C70Lgg0L3QsCDRg9C20LUg0LLRi9Cx0YDQsNC90L3Ri9C5XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9ub2RlcyA9IFtuaWRdIC8vINCS0YvQsdC40YDQsNC10Lwg0YLQvtC70YzQutC+INGN0YLQvtGCINC90L7QtFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlTm9kZShsaW5lX2luZGV4KSB7XG4gICAgICAgICAgICB0aHMuYXBpKHtcbiAgICAgICAgICAgICAgICBhcGk6ICdub2Rlcy5Ob2RlOkNyZWF0ZScsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBmaWQ6IHRoaXMuZmlkLFxuICAgICAgICAgICAgICAgICAgICBsaW5lX2luZGV4OiBsaW5lX2luZGV4XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFByb2dyYW0oKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkUHJvZ3JhbUxpbmUoKSB7XG4gICAgICAgICAgICB0aHMuYXBpKHtcbiAgICAgICAgICAgICAgICBhcGk6ICdmcmFtZXMuRnJhbWU6YWRkTGluZScsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBmaWQ6IHRoaXMuZmlkIH0sXG4gICAgICAgICAgICAgICAgdGhlbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRQcm9ncmFtKClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRQcm9ncmFtKCkge1xuICAgICAgICAgICAgdGhzLmFwaSh7XG4gICAgICAgICAgICAgICAgYXBpOiAnZnJhbWVzLkZyYW1lOmxvYWRQcm9ncmFtJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpZDogdGhpcy5maWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmFtID0gcmVzcG9uc2UucHJvZ3JhbTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmVQcm9ncmFtKCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9ub2RlcyA9IFtdXG4gICAgICAgICAgICB0aHMuYXBpKHtcbiAgICAgICAgICAgICAgICBhcGk6ICdmcmFtZXMuRnJhbWU6c2F2ZVByb2dyYW0nLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlkOiB0aGlzLmZpZCxcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFByb2dyYW0oKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uZnJhbWUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgcGFkZGluZzogMTBweDtcblxuICAgIC5ub2RlLXRlc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNDc5NWIxO1xuICAgIH1cblxuICAgICZfX2xpbmUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGdhcDogNXB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAzNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgICZfX25vZGUge1xuICAgICAgICBjdXJzb3I6IG1vdmU7XG5cbiAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICBvdXRsaW5lOiAycHggc29saWQgIzAwN2JmZjsgLy8g0JLQuNC30YPQsNC70YzQvdGL0Lkg0LjQvdC00LjQutCw0YLQvtGAINCy0YvQsdC+0YDQsFxuICAgICAgICAgICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2FkZC1saW5lIHtcbiAgICAgICAgbWFyZ2luOiAzcHg7XG4gICAgICAgIHBhZGRpbmc6IDdweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgICBjb2xvcjogIzc5Nzk3OTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgICAgICAgICBjb2xvcjogIzc5Nzk3OTtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mcmFtZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLmZyYW1lIC5ub2RlLXRlc3Qge1xcbiAgYmFja2dyb3VuZDogIzQ3OTViMTtcXG59XFxuLmZyYW1lX19saW5lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDVweDtcXG4gIG1pbi1oZWlnaHQ6IDM0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uZnJhbWVfX25vZGUge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG4uZnJhbWVfX25vZGUuc2VsZWN0ZWQge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICMwMDdiZmY7XFxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbn1cXG4uZnJhbWVfX2FkZC1saW5lIHtcXG4gIG1hcmdpbjogM3B4O1xcbiAgcGFkZGluZzogN3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcXG4gIGNvbG9yOiAjNzk3OTc5O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmZyYW1lX19hZGQtbGluZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xcbiAgY29sb3I6ICM3OTc5Nzk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92dWUvcGFnZXMvRnJhbWUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksc0JBQUE7RUFDQSxhQUFBO0FBQUo7QUFFSTtFQUNJLG1CQUFBO0FBQVI7QUFHSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUlJO0VBQ0ksWUFBQTtBQUZSO0FBSVE7RUFDSSwwQkFBQTtFQUNBLG1CQUFBO0FBRlo7QUFNSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSlI7QUFNUTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQUpaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5mcmFtZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxuICAgIC5ub2RlLXRlc3Qge1xcbiAgICAgICAgYmFja2dyb3VuZDogIzQ3OTViMTtcXG4gICAgfVxcblxcbiAgICAmX19saW5lIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBnYXA6IDVweDtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM0cHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgICZfX25vZGUge1xcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xcblxcbiAgICAgICAgJi5zZWxlY3RlZCB7XFxuICAgICAgICAgICAgb3V0bGluZTogMnB4IHNvbGlkICMwMDdiZmY7IC8vINCS0LjQt9GD0LDQu9GM0L3Ri9C5INC40L3QtNC40LrQsNGC0L7RgCDQstGL0LHQvtGA0LBcXG4gICAgICAgICAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2FkZC1saW5lIHtcXG4gICAgICAgIG1hcmdpbjogM3B4O1xcbiAgICAgICAgcGFkZGluZzogN3B4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcXG4gICAgICAgIGNvbG9yOiAjNzk3OTc5O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XFxuICAgICAgICAgICAgY29sb3I6ICM3OTc5Nzk7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIyNTM0N2E5Jmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9GcmFtZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NjRkMjRmMCZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMjUzNDdhOVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIyNTM0N2E5Jmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9hcHAvcGx1Z2lucy96ZW4vdGhyZWVzL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJzcmMvdnVlL2NvbXBvbmVudHMvTm9kZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMjI1MzQ3YTlcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcyMjUzNDdhOScsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzIyNTM0N2E5JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMjUzNDdhOVwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCcyMjUzNDdhOScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vRnJhbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ2NGQyNGYwXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRnJhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZyYW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vRnJhbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDY0ZDI0ZjAmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL2FwcC9wbHVnaW5zL3plbi90aHJlZXMvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy92dWUvcGFnZXMvRnJhbWUudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjQ2NGQyNGYwXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNDY0ZDI0ZjAnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCc0NjRkMjRmMCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRnJhbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ2NGQyNGYwXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzQ2NGQyNGYwJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9GcmFtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9GcmFtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiJdLCJuYW1lcyI6WyJuYW1lIiwicHJvcHMiLCJub2RlIiwibWV0aG9kcyIsImdldE5vZGVDb21wb25lbnQiLCJsYXllcnMiLCJkcmFnZ2FibGUiLCJOb2RlIiwiY29tcG9uZW50cyIsImRhdGEiLCJwcm9ncmFtIiwic2VsZWN0ZWRfbm9kZXMiLCJtb3VudGVkIiwibG9hZFByb2dyYW0iLCJjbGVhclNlbGVjdGlvbiIsImV2ZW50IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJnZXROb2RlU3R5bGUiLCJzdHlsZSIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwid2lkdGgiLCJpIiwibGF5ZXIiLCJhc3BlY3QiLCJKU09OIiwicGFyc2UiLCJleGUiLCJjb25zb2xlIiwibG9nIiwiX25vZGUkbGF5ZXJzIiwiX25vZGUkbGF5ZXJzMiIsImlzTm9kZVNlbGVjdGVkIiwibmlkIiwiaW5jbHVkZXMiLCJoYW5kbGVOb2RlQ2xpY2siLCJkZXRhaWwiLCJjdHJsS2V5IiwiaW5kZXgiLCJpbmRleE9mIiwicHVzaCIsInNwbGljZSIsImxlbmd0aCIsImNyZWF0ZU5vZGUiLCJsaW5lX2luZGV4IiwiX3RoaXMiLCJ0aHMiLCJhcGkiLCJmaWQiLCJ0aGVuIiwiYWRkUHJvZ3JhbUxpbmUiLCJfdGhpczIiLCJfdGhpczMiLCJyZXNwb25zZSIsInNhdmVQcm9ncmFtIiwiX3RoaXM0IiwiJHByb3BzIiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9ob2lzdGVkXzEiLCJfY3JlYXRlQmxvY2siLCJfcmVzb2x2ZUR5bmFtaWNDb21wb25lbnQiLCIkb3B0aW9ucyIsIm9uQ2xpY2siLCJfY2FjaGUiLCIkZXZlbnQiLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIiRkYXRhIiwibGluZSIsIl9jb21wb25lbnRfZHJhZ2dhYmxlIiwia2V5IiwidGFnIiwiZ3JvdXAiLCJvbkVuZCIsIm9uRGJsY2xpY2siLCJpdGVtIiwiX3dpdGhDdHgiLCJfcmVmIiwiZWxlbWVudCIsIl9jcmVhdGVWTm9kZSIsIl9jb21wb25lbnRfTm9kZSIsIl9ub3JtYWxpemVDbGFzcyIsIl9ub3JtYWxpemVTdHlsZSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJhcHBseSIsImFyZ3VtZW50cyJdLCJzb3VyY2VSb290IjoiIn0=