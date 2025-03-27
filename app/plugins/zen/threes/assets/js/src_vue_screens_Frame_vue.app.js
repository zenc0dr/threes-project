"use strict";
(self["webpackChunkthrees"] = self["webpackChunkthrees"] || []).push([["src_vue_screens_Frame_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/FramePreloader.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/FramePreloader.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      square_position: 0,
      animation_frame_id: null,
      ths: window.ths
    };
  },
  mounted: function mounted() {
    if (this.ths.data.process) {
      this.animate();
    }
  },
  unmounted: function unmounted() {
    this.cancel_animation();
  },
  watch: {
    'ths.data.process': function thsDataProcess(new_value) {
      if (new_value) {
        this.animate();
      } else {
        this.cancel_animation();
      }
    }
  },
  methods: {
    animate: function animate() {
      this.square_position = (this.square_position + 2) % 150;
      this.animation_frame_id = requestAnimationFrame(this.animate);
    },
    cancel_animation: function cancel_animation() {
      cancelAnimationFrame(this.animation_frame_id);
    }
  }
});

/***/ }),

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
  emits: ['update'],
  components: {},
  computed: {
    hasCssLayer: function hasCssLayer() {
      //return this.node.layers.some(layer => layer.aspect === 'threes.units.ui@css');
    }
  },
  props: {
    node: null
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/NodesMethods.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/NodesMethods.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FramePreloader_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FramePreloader.vue */ "./src/vue/components/FramePreloader.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'NodesMethods',
  props: {
    nid: null,
    nids: null,
    info: null,
    lines: null
  },
  emits: ['update', 'selectAllNodes', 'addNewNode'],
  components: {
    FramePreloader: _FramePreloader_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    selected_none: function selected_none() {
      return !this.nids || this.nids.length < 1;
    }
  },
  methods: {
    selectAllNodes: function selectAllNodes() {
      this.$emit('selectAllNodes');
    },
    removeNodes: function removeNodes() {
      var _this = this;
      if (this.selected_none) {
        return;
      }
      ths.api({
        api: 'nodes.Node:removeNodes',
        data: {
          nid: this.nid,
          nids: this.nids
        },
        then: function then() {
          _this.$emit('update');
        }
      });
    },
    copyNodes: function copyNodes() {
      var _this2 = this;
      if (this.selected_none) {
        return;
      }
      ths.api({
        api: 'nodes.Node:copyNodes',
        data: {
          nid: this.nid,
          nids: this.nids
        },
        then: function then() {
          _this2.$emit('update');
        }
      });
    },
    addNewNode: function addNewNode() {
      this.$emit('addNewNode');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/screens/Frame.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/screens/Frame.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NodesMethods_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NodesMethods.vue */ "./src/vue/components/NodesMethods.vue");
/* harmony import */ var _components_Node_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Node.vue */ "./src/vue/components/Node.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Frame',
  components: {
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_0___default()),
    NodesMethods: _components_NodesMethods_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Node: _components_Node_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: ['backend', 'nid'],
  data: function data() {
    return {
      nodes: [],
      // DSL программа
      selected_line_index: 0,
      selected_nodes: [],
      // Массив nid выбранных нодов
      node_in_panel: null // Сюда вставить нод чтобы открыть панель
    };
  },
  mounted: function mounted() {
    this.getNodes();
  },
  watch: {
    selected_nodes: function selected_nodes() {
      ths.data.nids = this.selected_nodes;
    }
  },
  computed: {
    info: function info() {
      return 'Выделено: ' + this.selected_nodes.length;
    },
    nodes_lines_count: function nodes_lines_count() {
      var _this$nodes$length, _this$nodes;
      return (_this$nodes$length = (_this$nodes = this.nodes) === null || _this$nodes === void 0 ? void 0 : _this$nodes.length) !== null && _this$nodes$length !== void 0 ? _this$nodes$length : 0;
    }
  },
  methods: {
    // Открыть панель нода
    openNodePanel: function openNodePanel(node) {
      this.node_in_panel = node;
    },
    // Выделение линии
    lineSelected: function lineSelected(line_index) {
      return this.selected_line_index === line_index;
    },
    // Закрыть панель нода
    closeNodePanel: function closeNodePanel() {
      this.node_in_panel = null;
    },
    // Очистить множественное выделение
    clearSelection: function clearSelection(event) {
      if (event.target.matches('.frame, .frame__line')) {
        this.selected_nodes = [];
      }
    },
    // Выбрать все ноды
    selectAllNodes: function selectAllNodes() {
      var all_nodes = [];
      this.nodes.forEach(function (line) {
        line.forEach(function (node) {
          all_nodes.push(node.nid);
        });
      });
      this.selected_nodes = all_nodes;
    },
    // Оформить стиль нода в зависимости от его слоя css
    getNodeStyle: function getNodeStyle(node) {
      /*
      let style = {
          padding: '5px 7px',
          background: '#6eb39d',
          borderRadius: '3px',
          minWidth: '50px'
      }
      for (let i in node.layers) {
          let layer = node.layers[i]
          if (layer.aspect === 'threes.units.ui@css') {
              if (layer.exe) {
                  style = layer.exe
              }
              break
          }
      }
      return style
      */
    },
    // Если нод выделен
    isNodeSelected: function isNodeSelected(node) {
      return this.selected_nodes.includes(node.nid);
    },
    // Нажатие левой кнопкой мыши на ноде
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
    // Нажатие правой кнопкой мыши на ноде
    handleNodeRightClick: function handleNodeRightClick(node, event) {
      if (!this.selected_nodes.length) {
        this.openNodePanel(node);
      }
    },
    // Создать новый нод
    createNode: function createNode() {
      var _this = this;
      ths.api({
        api: 'nodes.Node:create',
        data: {
          nid: this.nid,
          line_index: this.selected_line_index
        },
        then: function then() {
          _this.getNodes();
        }
      });
    },
    // При обновлении нода
    onNodeUpdated: function onNodeUpdated(node) {
      if (node) {
        this.node_in_panel = node;
      }
      this.getNodes();
    },
    selectLine: function selectLine(line_index) {
      this.selected_line_index = line_index;
    },
    // Добавить программную линию
    addLine: function addLine() {
      var _this2 = this;
      ths.api({
        api: 'nodes.node:add-line',
        data: {
          nid: this.nid
        },
        then: function then(response) {
          _this2.getNodes();
        }
      });
    },
    // Получить ноды
    getNodes: function getNodes() {
      var _this3 = this;
      ths.api({
        api: 'nodes.node:nodes',
        data: {
          nid: this.nid
        },
        then: function then(response) {
          _this3.nodes = response.nodes;
        }
      });
    },
    // Сохранить программу
    saveProgram: function saveProgram() {
      var _this4 = this;
      this.selected_nodes = [];
      ths.api({
        api: 'frames.Frame:saveProgram',
        data: {
          nid: this.nid,
          nodes: this.nodes
        },
        then: function then() {
          _this4.getNodes();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/FramePreloader.vue?vue&type=template&id=6072d4f0":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/FramePreloader.vue?vue&type=template&id=6072d4f0 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "threes-preloader"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$data.ths.data.process ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "threes-preloader__square",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      left: $data.square_position + 'px'
    })
  }, null, 4 /* STYLE */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

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
  return $props.node.nid ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.node.nid), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/NodesMethods.vue?vue&type=template&id=7553bae8":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/NodesMethods.vue?vue&type=template&id=7553bae8 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "threes_nodes_methods"
};
var _hoisted_2 = {
  "class": "threes_nodes_methods__info"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_FramePreloader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FramePreloader");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.addNewNode && $options.addNewNode.apply($options, arguments);
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["threes_nodes_methods__button", {
      inactive: !$props.lines
    }]),
    title: "Добавить нод на линию"
  }, _cache[4] || (_cache[4] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icon-cube"
  }, null, -1 /* HOISTED */)]), 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.selectAllNodes && $options.selectAllNodes.apply($options, arguments);
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["threes_nodes_methods__button", {
      inactive: !$props.lines
    }]),
    title: "Выбрать все ноды на схеме"
  }, _cache[5] || (_cache[5] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icon-bullseye"
  }, null, -1 /* HOISTED */)]), 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.removeNodes && $options.removeNodes.apply($options, arguments);
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["threes_nodes_methods__button", {
      inactive: $options.selected_none
    }]),
    title: "Удалить выбранные ноды"
  }, _cache[6] || (_cache[6] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icon-trash-1"
  }, null, -1 /* HOISTED */)]), 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.copyNodes && $options.copyNodes.apply($options, arguments);
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["threes_nodes_methods__button", {
      inactive: $options.selected_none
    }]),
    title: "Копировать выбранные ноды"
  }, _cache[7] || (_cache[7] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icon-copy"
  }, null, -1 /* HOISTED */)]), 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.info), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FramePreloader, {
    "class": "threes_nodes_methods__preloader"
  })]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/screens/Frame.vue?vue&type=template&id=ea94851a":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/screens/Frame.vue?vue&type=template&id=ea94851a ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_NodesMethods = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NodesMethods");
  var _component_Node = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Node");
  var _component_draggable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("draggable");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NodesMethods, {
    nid: $props.nid,
    nids: $data.selected_nodes,
    info: $options.info,
    lines: $options.nodes_lines_count,
    onUpdate: $options.getNodes,
    onSelectAllNodes: $options.selectAllNodes,
    onAddNewNode: $options.createNode
  }, null, 8 /* PROPS */, ["nid", "nids", "info", "lines", "onUpdate", "onSelectAllNodes", "onAddNewNode"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "frame",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.clearSelection($event);
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.nodes, function (line, line_index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_draggable, {
      key: line_index,
      modelValue: $data.nodes[line_index],
      "onUpdate:modelValue": function onUpdateModelValue($event) {
        return $data.nodes[line_index] = $event;
      },
      tag: "div",
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["frame__line", {
        selected: $options.lineSelected(line_index)
      }]),
      group: "nodes",
      "item-key": "nid",
      "multi-drag": true,
      "selected-items": $data.selected_nodes,
      onEnd: $options.saveProgram,
      onClick: function onClick($event) {
        return $options.selectLine(line_index);
      }
    }, {
      item: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
        var node = _ref.element;
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Node, {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["frame__node", {
            'selected': $options.isNodeSelected(node)
          }]),
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.getNodeStyle(node)),
          node: node,
          onClick: function onClick($event) {
            return $options.handleNodeClick(node, $event);
          },
          onContextmenu: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
            return $options.handleNodeRightClick(node, $event);
          }, ["prevent"])
        }, null, 8 /* PROPS */, ["class", "style", "node", "onClick", "onContextmenu"])];
      }),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["modelValue", "onUpdate:modelValue", "class", "selected-items", "onEnd", "onClick"]);
  }), 128 /* KEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.addLine && $options.addLine.apply($options, arguments);
    }),
    "class": "frame__add-line",
    title: "Добавить новую линию"
  }, "+")])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/FramePreloader.vue?vue&type=style&index=0&id=6072d4f0&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/FramePreloader.vue?vue&type=style&index=0&id=6072d4f0&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".threes-preloader {\n  width: 150px;\n  height: 20px;\n  position: relative;\n  overflow: hidden;\n  background: #f2f2f2;\n  border-radius: 4px;\n}\n.threes-preloader__square {\n  width: 20px;\n  height: 20px;\n  background-color: #94b1d1;\n  position: absolute;\n  border-radius: 4px;\n}", "",{"version":3,"sources":["webpack://./src/vue/components/FramePreloader.vue"],"names":[],"mappings":"AACA;EACI,YAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;AAAJ;AAEI;EACI,WAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;EACA,kBAAA;AAAR","sourcesContent":["\n.threes-preloader {\n    width: 150px;\n    height: 20px;\n    position: relative;\n    overflow: hidden;\n    background: #f2f2f2;\n    border-radius: 4px;\n\n    &__square {\n        width: 20px;\n        height: 20px;\n        background-color: #94b1d1;\n        position: absolute;\n        border-radius: 4px;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/NodesMethods.vue?vue&type=style&index=0&id=7553bae8&lang=scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/NodesMethods.vue?vue&type=style&index=0&id=7553bae8&lang=scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".threes_nodes_methods {\n  margin-bottom: 8px;\n  display: flex;\n  background: #ffffff;\n  border: 1px solid #dddddd;\n  border-radius: 4px;\n  align-items: center;\n  justify-content: space-between;\n}\n.threes_nodes_methods__info {\n  display: flex;\n  color: #707070;\n  align-content: center;\n  align-items: center;\n  margin-left: 10px;\n}\n.threes_nodes_methods__preloader {\n  margin-left: auto;\n  margin-right: 10px;\n}\n.threes_nodes_methods__button {\n  cursor: pointer;\n  padding: 3px 5px;\n  background: #e9e9e9;\n  border-radius: 3px;\n  color: #777777;\n  transition: 200ms;\n  margin: 3px;\n}\n.threes_nodes_methods__button:hover {\n  background: #ffe7ba;\n  color: #795512;\n}\n.threes_nodes_methods__button.inactive {\n  background: #f9f9f9;\n  color: #cdcdcd;\n}", "",{"version":3,"sources":["webpack://./src/vue/components/NodesMethods.vue"],"names":[],"mappings":"AACA;EACI,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,mBAAA;EACA,8BAAA;AAAJ;AAEI;EACI,aAAA;EACA,cAAA;EACA,qBAAA;EACA,mBAAA;EACA,iBAAA;AAAR;AAGI;EACI,iBAAA;EACA,kBAAA;AADR;AAII;EACI,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;EACA,cAAA;EACA,iBAAA;EACA,WAAA;AAFR;AAIQ;EACI,mBAAA;EACA,cAAA;AAFZ;AAKQ;EACI,mBAAA;EACA,cAAA;AAHZ","sourcesContent":["\n.threes_nodes_methods {\n    margin-bottom: 8px;\n    display: flex;\n    background: #ffffff;\n    border: 1px solid #dddddd;\n    border-radius: 4px;\n    align-items: center;\n    justify-content: space-between;\n\n    &__info {\n        display: flex;\n        color: #707070;\n        align-content: center;\n        align-items: center;\n        margin-left: 10px;\n    }\n\n    &__preloader {\n        margin-left: auto;\n        margin-right: 10px;\n    }\n\n    &__button {\n        cursor: pointer;\n        padding: 3px 5px;\n        background: #e9e9e9;\n        border-radius: 3px;\n        color: #777777;\n        transition: 200ms;\n        margin: 3px;\n\n        &:hover {\n            background: #ffe7ba;\n            color: #795512;\n        }\n\n        &.inactive {\n            background: #f9f9f9;\n            color: #cdcdcd;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/screens/Frame.vue?vue&type=style&index=0&id=ea94851a&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/screens/Frame.vue?vue&type=style&index=0&id=ea94851a&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".frame {\n  border: 1px solid #ddd;\n  margin-bottom: 15px;\n}\n.frame .node-test {\n  background: #4795b1;\n}\n.frame__line {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n  min-height: 40px;\n  margin-bottom: 4px;\n  transition: 200ms;\n}\n.frame__line.selected {\n  box-shadow: -3px 0 0 0 #8500ff;\n}\n.frame__node {\n  cursor: move;\n}\n.frame__node.selected {\n  box-shadow: inset 0 0 0 2px #007bff;\n}\n.frame__add-line {\n  margin: 3px;\n  padding: 7px;\n  border-radius: 4px;\n  background: #f5f5f5;\n  color: #797979;\n  text-align: center;\n  font-weight: bold;\n  transition: 200ms;\n  cursor: pointer;\n}\n.frame__add-line:hover {\n  background: #efefef;\n  color: #797979;\n}", "",{"version":3,"sources":["webpack://./src/vue/screens/Frame.vue"],"names":[],"mappings":"AACA;EACI,sBAAA;EACA,mBAAA;AAAJ;AAEI;EACI,mBAAA;AAAR;AAGI;EACI,aAAA;EACA,eAAA;EACA,QAAA;EACA,gBAAA;EACA,kBAAA;EACA,iBAAA;AADR;AAGQ;EACI,8BAAA;AADZ;AAKI;EACI,YAAA;AAHR;AAKQ;EACI,mCAAA;AAHZ;AAOI;EACI,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,iBAAA;EACA,eAAA;AALR;AAOQ;EACI,mBAAA;EACA,cAAA;AALZ","sourcesContent":["\n.frame {\n    border: 1px solid #ddd;\n    margin-bottom: 15px;\n\n    .node-test {\n        background: #4795b1;\n    }\n\n    &__line {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 5px;\n        min-height: 40px;\n        margin-bottom: 4px;\n        transition: 200ms;\n\n        &.selected {\n            box-shadow: -3px 0 0 0 #8500ff;\n        }\n    }\n\n    &__node {\n        cursor: move;\n\n        &.selected {\n            box-shadow: inset 0 0 0 2px #007bff;\n        }\n    }\n\n    &__add-line {\n        margin: 3px;\n        padding: 7px;\n        border-radius: 4px;\n        background: #f5f5f5;\n        color: #797979;\n        text-align: center;\n        font-weight: bold;\n        transition: 200ms;\n        cursor: pointer;\n\n        &:hover {\n            background: #efefef;\n            color: #797979;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/FramePreloader.vue?vue&type=style&index=0&id=6072d4f0&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/FramePreloader.vue?vue&type=style&index=0&id=6072d4f0&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FramePreloader_vue_vue_type_style_index_0_id_6072d4f0_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FramePreloader.vue?vue&type=style&index=0&id=6072d4f0&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/FramePreloader.vue?vue&type=style&index=0&id=6072d4f0&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FramePreloader_vue_vue_type_style_index_0_id_6072d4f0_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FramePreloader_vue_vue_type_style_index_0_id_6072d4f0_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/NodesMethods.vue?vue&type=style&index=0&id=7553bae8&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/NodesMethods.vue?vue&type=style&index=0&id=7553bae8&lang=scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodesMethods_vue_vue_type_style_index_0_id_7553bae8_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NodesMethods.vue?vue&type=style&index=0&id=7553bae8&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/NodesMethods.vue?vue&type=style&index=0&id=7553bae8&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodesMethods_vue_vue_type_style_index_0_id_7553bae8_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodesMethods_vue_vue_type_style_index_0_id_7553bae8_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/screens/Frame.vue?vue&type=style&index=0&id=ea94851a&lang=scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/screens/Frame.vue?vue&type=style&index=0&id=ea94851a&lang=scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Frame_vue_vue_type_style_index_0_id_ea94851a_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Frame.vue?vue&type=style&index=0&id=ea94851a&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/screens/Frame.vue?vue&type=style&index=0&id=ea94851a&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Frame_vue_vue_type_style_index_0_id_ea94851a_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Frame_vue_vue_type_style_index_0_id_ea94851a_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/vue/components/FramePreloader.vue":
/*!***********************************************!*\
  !*** ./src/vue/components/FramePreloader.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FramePreloader_vue_vue_type_template_id_6072d4f0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FramePreloader.vue?vue&type=template&id=6072d4f0 */ "./src/vue/components/FramePreloader.vue?vue&type=template&id=6072d4f0");
/* harmony import */ var _FramePreloader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FramePreloader.vue?vue&type=script&lang=js */ "./src/vue/components/FramePreloader.vue?vue&type=script&lang=js");
/* harmony import */ var _FramePreloader_vue_vue_type_style_index_0_id_6072d4f0_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FramePreloader.vue?vue&type=style&index=0&id=6072d4f0&lang=scss */ "./src/vue/components/FramePreloader.vue?vue&type=style&index=0&id=6072d4f0&lang=scss");
/* harmony import */ var _app_plugins_zen_threes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_app_plugins_zen_threes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_FramePreloader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FramePreloader_vue_vue_type_template_id_6072d4f0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/vue/components/FramePreloader.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

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

/***/ "./src/vue/components/NodesMethods.vue":
/*!*********************************************!*\
  !*** ./src/vue/components/NodesMethods.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NodesMethods_vue_vue_type_template_id_7553bae8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodesMethods.vue?vue&type=template&id=7553bae8 */ "./src/vue/components/NodesMethods.vue?vue&type=template&id=7553bae8");
/* harmony import */ var _NodesMethods_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodesMethods.vue?vue&type=script&lang=js */ "./src/vue/components/NodesMethods.vue?vue&type=script&lang=js");
/* harmony import */ var _NodesMethods_vue_vue_type_style_index_0_id_7553bae8_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NodesMethods.vue?vue&type=style&index=0&id=7553bae8&lang=scss */ "./src/vue/components/NodesMethods.vue?vue&type=style&index=0&id=7553bae8&lang=scss");
/* harmony import */ var _app_plugins_zen_threes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_app_plugins_zen_threes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_NodesMethods_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NodesMethods_vue_vue_type_template_id_7553bae8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/vue/components/NodesMethods.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/vue/screens/Frame.vue":
/*!***********************************!*\
  !*** ./src/vue/screens/Frame.vue ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Frame_vue_vue_type_template_id_ea94851a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Frame.vue?vue&type=template&id=ea94851a */ "./src/vue/screens/Frame.vue?vue&type=template&id=ea94851a");
/* harmony import */ var _Frame_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Frame.vue?vue&type=script&lang=js */ "./src/vue/screens/Frame.vue?vue&type=script&lang=js");
/* harmony import */ var _Frame_vue_vue_type_style_index_0_id_ea94851a_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Frame.vue?vue&type=style&index=0&id=ea94851a&lang=scss */ "./src/vue/screens/Frame.vue?vue&type=style&index=0&id=ea94851a&lang=scss");
/* harmony import */ var _app_plugins_zen_threes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_app_plugins_zen_threes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Frame_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Frame_vue_vue_type_template_id_ea94851a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/vue/screens/Frame.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/vue/components/FramePreloader.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./src/vue/components/FramePreloader.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FramePreloader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FramePreloader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FramePreloader.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/FramePreloader.vue?vue&type=script&lang=js");
 

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

/***/ "./src/vue/components/NodesMethods.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./src/vue/components/NodesMethods.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodesMethods_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodesMethods_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NodesMethods.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/NodesMethods.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/vue/screens/Frame.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/vue/screens/Frame.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Frame_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Frame_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Frame.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/screens/Frame.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/vue/components/FramePreloader.vue?vue&type=template&id=6072d4f0":
/*!*****************************************************************************!*\
  !*** ./src/vue/components/FramePreloader.vue?vue&type=template&id=6072d4f0 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FramePreloader_vue_vue_type_template_id_6072d4f0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FramePreloader_vue_vue_type_template_id_6072d4f0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FramePreloader.vue?vue&type=template&id=6072d4f0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/FramePreloader.vue?vue&type=template&id=6072d4f0");


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

/***/ "./src/vue/components/NodesMethods.vue?vue&type=template&id=7553bae8":
/*!***************************************************************************!*\
  !*** ./src/vue/components/NodesMethods.vue?vue&type=template&id=7553bae8 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodesMethods_vue_vue_type_template_id_7553bae8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodesMethods_vue_vue_type_template_id_7553bae8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NodesMethods.vue?vue&type=template&id=7553bae8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/NodesMethods.vue?vue&type=template&id=7553bae8");


/***/ }),

/***/ "./src/vue/screens/Frame.vue?vue&type=template&id=ea94851a":
/*!*****************************************************************!*\
  !*** ./src/vue/screens/Frame.vue?vue&type=template&id=ea94851a ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Frame_vue_vue_type_template_id_ea94851a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Frame_vue_vue_type_template_id_ea94851a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Frame.vue?vue&type=template&id=ea94851a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/screens/Frame.vue?vue&type=template&id=ea94851a");


/***/ }),

/***/ "./src/vue/components/FramePreloader.vue?vue&type=style&index=0&id=6072d4f0&lang=scss":
/*!********************************************************************************************!*\
  !*** ./src/vue/components/FramePreloader.vue?vue&type=style&index=0&id=6072d4f0&lang=scss ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FramePreloader_vue_vue_type_style_index_0_id_6072d4f0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FramePreloader.vue?vue&type=style&index=0&id=6072d4f0&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/FramePreloader.vue?vue&type=style&index=0&id=6072d4f0&lang=scss");


/***/ }),

/***/ "./src/vue/components/Node.vue?vue&type=style&index=0&id=225347a9&lang=scss":
/*!**********************************************************************************!*\
  !*** ./src/vue/components/Node.vue?vue&type=style&index=0&id=225347a9&lang=scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Node_vue_vue_type_style_index_0_id_225347a9_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Node.vue?vue&type=style&index=0&id=225347a9&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/Node.vue?vue&type=style&index=0&id=225347a9&lang=scss");


/***/ }),

/***/ "./src/vue/components/NodesMethods.vue?vue&type=style&index=0&id=7553bae8&lang=scss":
/*!******************************************************************************************!*\
  !*** ./src/vue/components/NodesMethods.vue?vue&type=style&index=0&id=7553bae8&lang=scss ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodesMethods_vue_vue_type_style_index_0_id_7553bae8_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NodesMethods.vue?vue&type=style&index=0&id=7553bae8&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/NodesMethods.vue?vue&type=style&index=0&id=7553bae8&lang=scss");


/***/ }),

/***/ "./src/vue/screens/Frame.vue?vue&type=style&index=0&id=ea94851a&lang=scss":
/*!********************************************************************************!*\
  !*** ./src/vue/screens/Frame.vue?vue&type=style&index=0&id=ea94851a&lang=scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Frame_vue_vue_type_style_index_0_id_ea94851a_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Frame.vue?vue&type=style&index=0&id=ea94851a&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/screens/Frame.vue?vue&type=style&index=0&id=ea94851a&lang=scss");


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsSUFBSSxLQUFVLEVBQUUsRUFjZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCbUQ7QUFDVjtBQUNMOztBQUVuRCxDQUFpRTs7QUFFaUM7QUFDbEcsaUNBQWlDLGdIQUFlLENBQUMsMEVBQU0sYUFBYSw0RUFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBY2Y7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUMxQm9NOzs7Ozs7Ozs7Ozs7Ozs7QUNBVjs7Ozs7Ozs7Ozs7Ozs7O0FDQVE7Ozs7Ozs7Ozs7Ozs7OztBQ0FQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL0ZyYW1lUHJlbG9hZGVyLnZ1ZSIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZS52dWUiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL05vZGVzTWV0aG9kcy52dWUiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9zY3JlZW5zL0ZyYW1lLnZ1ZSIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvRnJhbWVQcmVsb2FkZXIudnVlPzdiYmQiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL05vZGUudnVlPzA3MGIiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL05vZGVzTWV0aG9kcy52dWU/MzYwMSIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3NjcmVlbnMvRnJhbWUudnVlPzc2MDgiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL0ZyYW1lUHJlbG9hZGVyLnZ1ZT9jZWQ4Iiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9Ob2RlLnZ1ZT8xOThiIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9Ob2Rlc01ldGhvZHMudnVlPzRjYzEiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9zY3JlZW5zL0ZyYW1lLnZ1ZT9iNDY4Iiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9GcmFtZVByZWxvYWRlci52dWU/YThiYiIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZS52dWU/MGMwMyIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZXNNZXRob2RzLnZ1ZT9iODYwIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvc2NyZWVucy9GcmFtZS52dWU/YmRlMiIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvRnJhbWVQcmVsb2FkZXIudnVlPzJhODAiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL05vZGUudnVlPzRjZTMiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL05vZGVzTWV0aG9kcy52dWU/NDYyMSIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3NjcmVlbnMvRnJhbWUudnVlPzljNzMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJ0aHJlZXMtcHJlbG9hZGVyXCI+XG4gICAgICAgIDxkaXYgdi1pZj1cInRocy5kYXRhLnByb2Nlc3NcIiBjbGFzcz1cInRocmVlcy1wcmVsb2FkZXJfX3NxdWFyZVwiIDpzdHlsZT1cInsgbGVmdDogc3F1YXJlX3Bvc2l0aW9uICsgJ3B4JyB9XCI+PC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcXVhcmVfcG9zaXRpb246IDAsXG4gICAgICAgICAgICBhbmltYXRpb25fZnJhbWVfaWQ6IG51bGwsXG4gICAgICAgICAgICB0aHM6IHdpbmRvdy50aHMsXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICBpZiAodGhpcy50aHMuZGF0YS5wcm9jZXNzKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUoKVxuICAgICAgICB9XG4gICAgfSxcbiAgICB1bm1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsX2FuaW1hdGlvbigpXG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICAndGhzLmRhdGEucHJvY2VzcycobmV3X3ZhbHVlKSB7XG4gICAgICAgICAgICBpZiAobmV3X3ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxfYW5pbWF0aW9uKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuc3F1YXJlX3Bvc2l0aW9uID0gKHRoaXMuc3F1YXJlX3Bvc2l0aW9uICsgMikgJSAxNTBcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uX2ZyYW1lX2lkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZSlcbiAgICAgICAgfSxcbiAgICAgICAgY2FuY2VsX2FuaW1hdGlvbigpIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uX2ZyYW1lX2lkKVxuICAgICAgICB9LFxuICAgIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLnRocmVlcy1wcmVsb2FkZXIge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICAmX19zcXVhcmUge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRiMWQxO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuPGRpdiB2LWlmPVwibm9kZS5uaWRcIiBjbGFzcz1cInRocmVlcy1ub2RlXCI+XG4gICAge3sgbm9kZS5uaWQgfX1cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIk5vZGVcIixcbiAgICBlbWl0czogWyd1cGRhdGUnXSxcbiAgICBjb21wb25lbnRzOiB7XG5cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGhhc0Nzc0xheWVyKCkge1xuICAgICAgICAgICAgLy9yZXR1cm4gdGhpcy5ub2RlLmxheWVycy5zb21lKGxheWVyID0+IGxheWVyLmFzcGVjdCA9PT0gJ3RocmVlcy51bml0cy51aUBjc3MnKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbm9kZTogbnVsbFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuXG4gICAgfVxufVxuPC9zY3JpcHQ+XG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi50aHJlZXMtbm9kZSB7XG5cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG48ZGl2IGNsYXNzPVwidGhyZWVzX25vZGVzX21ldGhvZHNcIj5cbiAgICA8ZGl2XG4gICAgICAgIEBjbGljaz1cImFkZE5ld05vZGVcIlxuICAgICAgICBjbGFzcz1cInRocmVlc19ub2Rlc19tZXRob2RzX19idXR0b25cIlxuICAgICAgICA6Y2xhc3M9XCJ7aW5hY3RpdmU6IWxpbmVzfVwiXG4gICAgICAgIHRpdGxlPVwi0JTQvtCx0LDQstC40YLRjCDQvdC+0LQg0L3QsCDQu9C40L3QuNGOXCJcbiAgICA+XG4gICAgICAgIDxpIGNsYXNzPVwiaWNvbi1jdWJlXCI+PC9pPlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICAgICAgQGNsaWNrPVwic2VsZWN0QWxsTm9kZXNcIlxuICAgICAgICBjbGFzcz1cInRocmVlc19ub2Rlc19tZXRob2RzX19idXR0b25cIlxuICAgICAgICA6Y2xhc3M9XCJ7aW5hY3RpdmU6IWxpbmVzfVwiXG4gICAgICAgIHRpdGxlPVwi0JLRi9Cx0YDQsNGC0Ywg0LLRgdC1INC90L7QtNGLINC90LAg0YHRhdC10LzQtVwiXG4gICAgPlxuICAgICAgICA8aSBjbGFzcz1cImljb24tYnVsbHNleWVcIj48L2k+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgICBAY2xpY2s9XCJyZW1vdmVOb2Rlc1wiXG4gICAgICAgIGNsYXNzPVwidGhyZWVzX25vZGVzX21ldGhvZHNfX2J1dHRvblwiXG4gICAgICAgIDpjbGFzcz1cIntpbmFjdGl2ZTpzZWxlY3RlZF9ub25lfVwiXG4gICAgICAgIHRpdGxlPVwi0KPQtNCw0LvQuNGC0Ywg0LLRi9Cx0YDQsNC90L3Ri9C1INC90L7QtNGLXCJcbiAgICA+XG4gICAgICAgIDxpIGNsYXNzPVwiaWNvbi10cmFzaC0xXCIgPjwvaT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICAgIEBjbGljaz1cImNvcHlOb2Rlc1wiXG4gICAgICAgIGNsYXNzPVwidGhyZWVzX25vZGVzX21ldGhvZHNfX2J1dHRvblwiXG4gICAgICAgIDpjbGFzcz1cIntpbmFjdGl2ZTpzZWxlY3RlZF9ub25lfVwiXG4gICAgICAgIHRpdGxlPVwi0JrQvtC/0LjRgNC+0LLQsNGC0Ywg0LLRi9Cx0YDQsNC90L3Ri9C1INC90L7QtNGLXCJcbiAgICA+XG4gICAgICAgIDxpIGNsYXNzPVwiaWNvbi1jb3B5XCI+PC9pPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0aHJlZXNfbm9kZXNfbWV0aG9kc19faW5mb1wiPlxuICAgICAgICB7eyBpbmZvIH19XG4gICAgPC9kaXY+XG4gICAgPEZyYW1lUHJlbG9hZGVyIGNsYXNzPVwidGhyZWVzX25vZGVzX21ldGhvZHNfX3ByZWxvYWRlclwiIC8+XG48L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IEZyYW1lUHJlbG9hZGVyIGZyb20gJy4vRnJhbWVQcmVsb2FkZXIudnVlJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnTm9kZXNNZXRob2RzJyxcbiAgICBwcm9wczoge1xuICAgICAgICBuaWQ6IG51bGwsXG4gICAgICAgIG5pZHM6IG51bGwsXG4gICAgICAgIGluZm86IG51bGwsXG4gICAgICAgIGxpbmVzOiBudWxsXG4gICAgfSxcbiAgICBlbWl0czogWyd1cGRhdGUnLCAnc2VsZWN0QWxsTm9kZXMnLCAnYWRkTmV3Tm9kZSddLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgRnJhbWVQcmVsb2FkZXJcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHNlbGVjdGVkX25vbmUoKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMubmlkcyB8fCB0aGlzLm5pZHMubGVuZ3RoIDwgMVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzZWxlY3RBbGxOb2RlcygpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdEFsbE5vZGVzJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZU5vZGVzKClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRfbm9uZSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhzLmFwaSh7XG4gICAgICAgICAgICAgICAgYXBpOiAnbm9kZXMuTm9kZTpyZW1vdmVOb2RlcycsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBuaWQ6IHRoaXMubmlkLFxuICAgICAgICAgICAgICAgICAgICBuaWRzOiB0aGlzLm5pZHNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBjb3B5Tm9kZXMoKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZF9ub25lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHMuYXBpKHtcbiAgICAgICAgICAgICAgICBhcGk6ICdub2Rlcy5Ob2RlOmNvcHlOb2RlcycsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBuaWQ6IHRoaXMubmlkLFxuICAgICAgICAgICAgICAgICAgICBuaWRzOiB0aGlzLm5pZHNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBhZGROZXdOb2RlKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnYWRkTmV3Tm9kZScpXG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4udGhyZWVzX25vZGVzX21ldGhvZHMge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAmX19pbmZvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgY29sb3I6ICM3MDcwNzA7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuXG4gICAgJl9fcHJlbG9hZGVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG5cbiAgICAmX19idXR0b24ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDNweCA1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlOWU5ZTk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgY29sb3I6ICM3Nzc3Nzc7XG4gICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xuICAgICAgICBtYXJnaW46IDNweDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmU3YmE7XG4gICAgICAgICAgICBjb2xvcjogIzc5NTUxMjtcbiAgICAgICAgfVxuXG4gICAgICAgICYuaW5hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICAgICAgICAgIGNvbG9yOiAjY2RjZGNkO1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8Tm9kZXNNZXRob2RzXG4gICAgICAgIDpuaWQ9XCJuaWRcIlxuICAgICAgICA6bmlkcz1cInNlbGVjdGVkX25vZGVzXCJcbiAgICAgICAgOmluZm89XCJpbmZvXCJcbiAgICAgICAgOmxpbmVzPVwibm9kZXNfbGluZXNfY291bnRcIlxuICAgICAgICBAdXBkYXRlPVwiZ2V0Tm9kZXNcIlxuICAgICAgICBAc2VsZWN0QWxsTm9kZXM9XCJzZWxlY3RBbGxOb2Rlc1wiXG4gICAgICAgIEBhZGROZXdOb2RlPVwiY3JlYXRlTm9kZVwiXG4gICAgLz5cbiAgICA8ZGl2IGNsYXNzPVwiZnJhbWVcIiBAY2xpY2s9XCJjbGVhclNlbGVjdGlvbigkZXZlbnQpXCI+XG4gICAgICAgIDxkcmFnZ2FibGVcbiAgICAgICAgICAgIHYtZm9yPVwiKGxpbmUsIGxpbmVfaW5kZXgpIGluIG5vZGVzXCJcbiAgICAgICAgICAgIDprZXk9XCJsaW5lX2luZGV4XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJub2Rlc1tsaW5lX2luZGV4XVwiXG4gICAgICAgICAgICB0YWc9XCJkaXZcIlxuICAgICAgICAgICAgY2xhc3M9XCJmcmFtZV9fbGluZVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7c2VsZWN0ZWQ6IGxpbmVTZWxlY3RlZChsaW5lX2luZGV4KX1cIlxuICAgICAgICAgICAgZ3JvdXA9XCJub2Rlc1wiXG4gICAgICAgICAgICBpdGVtLWtleT1cIm5pZFwiXG4gICAgICAgICAgICA6bXVsdGktZHJhZz1cInRydWVcIlxuICAgICAgICAgICAgOnNlbGVjdGVkLWl0ZW1zPVwic2VsZWN0ZWRfbm9kZXNcIlxuICAgICAgICAgICAgQGVuZD1cInNhdmVQcm9ncmFtXCJcbiAgICAgICAgICAgIEBjbGljaz1cInNlbGVjdExpbmUobGluZV9pbmRleClcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgI2l0ZW09XCJ7ZWxlbWVudDpub2RlfVwiPlxuICAgICAgICAgICAgICAgIDxOb2RlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZnJhbWVfX25vZGVcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J3NlbGVjdGVkJzppc05vZGVTZWxlY3RlZChub2RlKX1cIlxuICAgICAgICAgICAgICAgICAgICA6c3R5bGU9XCJnZXROb2RlU3R5bGUobm9kZSlcIlxuICAgICAgICAgICAgICAgICAgICA6bm9kZT1cIm5vZGVcIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJoYW5kbGVOb2RlQ2xpY2sobm9kZSwgJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgIEBjb250ZXh0bWVudS5wcmV2ZW50PVwiaGFuZGxlTm9kZVJpZ2h0Q2xpY2sobm9kZSwgJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZHJhZ2dhYmxlPlxuICAgICAgICA8ZGl2IEBjbGljaz1cImFkZExpbmVcIiBjbGFzcz1cImZyYW1lX19hZGQtbGluZVwiIHRpdGxlPVwi0JTQvtCx0LDQstC40YLRjCDQvdC+0LLRg9GOINC70LjQvdC40Y5cIj4rPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGRyYWdnYWJsZSBmcm9tICd2dWVkcmFnZ2FibGUnO1xuaW1wb3J0IE5vZGVzTWV0aG9kcyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ob2Rlc01ldGhvZHMudnVlXCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ob2RlLnZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ0ZyYW1lJyxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGRyYWdnYWJsZSxcbiAgICAgICAgTm9kZXNNZXRob2RzLFxuICAgICAgICBOb2RlLFxuICAgIH0sXG4gICAgcHJvcHM6IFsnYmFja2VuZCcsICduaWQnXSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbm9kZXM6IFtdLCAvLyBEU0wg0L/RgNC+0LPRgNCw0LzQvNCwXG4gICAgICAgICAgICBzZWxlY3RlZF9saW5lX2luZGV4OiAwLFxuICAgICAgICAgICAgc2VsZWN0ZWRfbm9kZXM6IFtdLCAvLyDQnNCw0YHRgdC40LIgbmlkINCy0YvQsdGA0LDQvdC90YvRhSDQvdC+0LTQvtCyXG4gICAgICAgICAgICBub2RlX2luX3BhbmVsOiBudWxsIC8vINCh0Y7QtNCwINCy0YHRgtCw0LLQuNGC0Ywg0L3QvtC0INGH0YLQvtCx0Ysg0L7RgtC60YDRi9GC0Ywg0L/QsNC90LXQu9GMXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmdldE5vZGVzKCk7XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBzZWxlY3RlZF9ub2RlcygpIHtcbiAgICAgICAgICAgIHRocy5kYXRhLm5pZHMgPSB0aGlzLnNlbGVjdGVkX25vZGVzXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGluZm8oKSB7XG4gICAgICAgICAgICByZXR1cm4gJ9CS0YvQtNC10LvQtdC90L46ICcgKyB0aGlzLnNlbGVjdGVkX25vZGVzLmxlbmd0aFxuICAgICAgICB9LFxuICAgICAgICBub2Rlc19saW5lc19jb3VudCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVzPy5sZW5ndGggPz8gMFxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIC8vINCe0YLQutGA0YvRgtGMINC/0LDQvdC10LvRjCDQvdC+0LTQsFxuICAgICAgICBvcGVuTm9kZVBhbmVsKG5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZV9pbl9wYW5lbCA9IG5vZGVcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQktGL0LTQtdC70LXQvdC40LUg0LvQuNC90LjQuFxuICAgICAgICBsaW5lU2VsZWN0ZWQobGluZV9pbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRfbGluZV9pbmRleCA9PT0gbGluZV9pbmRleFxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCX0LDQutGA0YvRgtGMINC/0LDQvdC10LvRjCDQvdC+0LTQsFxuICAgICAgICBjbG9zZU5vZGVQYW5lbCgpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZV9pbl9wYW5lbCA9IG51bGxcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQntGH0LjRgdGC0LjRgtGMINC80L3QvtC20LXRgdGC0LLQtdC90L3QvtC1INCy0YvQtNC10LvQtdC90LjQtVxuICAgICAgICBjbGVhclNlbGVjdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcuZnJhbWUsIC5mcmFtZV9fbGluZScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9ub2RlcyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCS0YvQsdGA0LDRgtGMINCy0YHQtSDQvdC+0LTRi1xuICAgICAgICBzZWxlY3RBbGxOb2RlcygpIHtcbiAgICAgICAgICAgIGxldCBhbGxfbm9kZXMgPSBbXVxuICAgICAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgICAgICAgICAgIGxpbmUuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxsX25vZGVzLnB1c2gobm9kZS5uaWQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkX25vZGVzID0gYWxsX25vZGVzXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0J7RhNC+0YDQvNC40YLRjCDRgdGC0LjQu9GMINC90L7QtNCwINCyINC30LDQstC40YHQuNC80L7RgdGC0Lgg0L7RgiDQtdCz0L4g0YHQu9C+0Y8gY3NzXG4gICAgICAgIGdldE5vZGVTdHlsZShub2RlKSB7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgbGV0IHN0eWxlID0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc1cHggN3B4JyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzZlYjM5ZCcsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogJzUwcHgnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIG5vZGUubGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxheWVyID0gbm9kZS5sYXllcnNbaV1cbiAgICAgICAgICAgICAgICBpZiAobGF5ZXIuYXNwZWN0ID09PSAndGhyZWVzLnVuaXRzLnVpQGNzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxheWVyLmV4ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSBsYXllci5leGVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHlsZVxuICAgICAgICAgICAgKi9cbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQldGB0LvQuCDQvdC+0LQg0LLRi9C00LXQu9C10L1cbiAgICAgICAgaXNOb2RlU2VsZWN0ZWQobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRfbm9kZXMuaW5jbHVkZXMobm9kZS5uaWQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCd0LDQttCw0YLQuNC1INC70LXQstC+0Lkg0LrQvdC+0L/QutC+0Lkg0LzRi9GI0Lgg0L3QsCDQvdC+0LTQtVxuICAgICAgICBoYW5kbGVOb2RlQ2xpY2sobm9kZSwgZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5kZXRhaWwgPT09IDIpIHJldHVybjsgLy8g0J/RgNC+0L/Rg9GB0LrQsNC10Lwg0LTQstC+0LnQvdC+0Lkg0LrQu9C40LpcblxuICAgICAgICAgICAgY29uc3QgbmlkID0gbm9kZS5uaWQ7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuICAgICAgICAgICAgICAgIC8vINCc0L3QvtC20LXRgdGC0LLQtdC90L3Ri9C5INCy0YvQsdC+0YAg0YEgQ3RybFxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWxlY3RlZF9ub2Rlcy5pbmRleE9mKG5pZCk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkX25vZGVzLnB1c2gobmlkKSAvLyDQlNC+0LHQsNCy0LvRj9C10LwsINC10YHQu9C4INC90LUg0LLRi9Cx0YDQsNC9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9ub2Rlcy5zcGxpY2UoaW5kZXgsIDEpOyAvLyDQo9Cx0LjRgNCw0LXQvCwg0LXRgdC70Lgg0YPQttC1INCy0YvQsdGA0LDQvVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g0J7QtNC40L3QvtGH0L3Ri9C5INCy0YvQsdC+0YAg0LHQtdC3IEN0cmxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZF9ub2Rlcy5sZW5ndGggPT09IDEgJiYgdGhpcy5zZWxlY3RlZF9ub2Rlc1swXSA9PT0gbmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbm9kZXMgPSBbXSAvLyDQodC90LjQvNCw0LXQvCDQstGL0LHQvtGALCDQtdGB0LvQuCDQutC70LjQutC90YPQu9C4INC90LAg0YPQttC1INCy0YvQsdGA0LDQvdC90YvQuVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbm9kZXMgPSBbbmlkXSAvLyDQktGL0LHQuNGA0LDQtdC8INGC0L7Qu9GM0LrQviDRjdGC0L7RgiDQvdC+0LRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0J3QsNC20LDRgtC40LUg0L/RgNCw0LLQvtC5INC60L3QvtC/0LrQvtC5INC80YvRiNC4INC90LAg0L3QvtC00LVcbiAgICAgICAgaGFuZGxlTm9kZVJpZ2h0Q2xpY2sobm9kZSwgZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zZWxlY3RlZF9ub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5Ob2RlUGFuZWwobm9kZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQodC+0LfQtNCw0YLRjCDQvdC+0LLRi9C5INC90L7QtFxuICAgICAgICBjcmVhdGVOb2RlKCkge1xuICAgICAgICAgICAgdGhzLmFwaSh7XG4gICAgICAgICAgICAgICAgYXBpOiAnbm9kZXMuTm9kZTpjcmVhdGUnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbmlkOiB0aGlzLm5pZCxcbiAgICAgICAgICAgICAgICAgICAgbGluZV9pbmRleDogdGhpcy5zZWxlY3RlZF9saW5lX2luZGV4XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZXMoKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQn9GA0Lgg0L7QsdC90L7QstC70LXQvdC40Lgg0L3QvtC00LBcbiAgICAgICAgb25Ob2RlVXBkYXRlZChub2RlKSB7XG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZV9pbl9wYW5lbCA9IG5vZGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZXMoKVxuICAgICAgICB9LFxuXG4gICAgICAgIHNlbGVjdExpbmUobGluZV9pbmRleCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9saW5lX2luZGV4ID0gbGluZV9pbmRleFxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCU0L7QsdCw0LLQuNGC0Ywg0L/RgNC+0LPRgNCw0LzQvNC90YPRjiDQu9C40L3QuNGOXG4gICAgICAgIGFkZExpbmUoKSB7XG4gICAgICAgICAgICB0aHMuYXBpKHtcbiAgICAgICAgICAgICAgICBhcGk6ICdub2Rlcy5ub2RlOmFkZC1saW5lJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIG5pZDogdGhpcy5uaWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXROb2RlcygpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNGC0Ywg0L3QvtC00YtcbiAgICAgICAgZ2V0Tm9kZXMoKSB7XG4gICAgICAgICAgICB0aHMuYXBpKHtcbiAgICAgICAgICAgICAgICBhcGk6ICdub2Rlcy5ub2RlOm5vZGVzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIG5pZDogdGhpcy5uaWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlcyA9IHJlc3BvbnNlLm5vZGVzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQodC+0YXRgNCw0L3QuNGC0Ywg0L/RgNC+0LPRgNCw0LzQvNGDXG4gICAgICAgIHNhdmVQcm9ncmFtKCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9ub2RlcyA9IFtdXG4gICAgICAgICAgICB0aHMuYXBpKHtcbiAgICAgICAgICAgICAgICBhcGk6ICdmcmFtZXMuRnJhbWU6c2F2ZVByb2dyYW0nLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbmlkOiB0aGlzLm5pZCxcbiAgICAgICAgICAgICAgICAgICAgbm9kZXM6IHRoaXMubm9kZXNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXROb2RlcygpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5mcmFtZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICAgLm5vZGUtdGVzdCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0Nzk1YjE7XG4gICAgfVxuXG4gICAgJl9fbGluZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZ2FwOiA1cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XG5cbiAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAtM3B4IDAgMCAwICM4NTAwZmY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19ub2RlIHtcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xuXG4gICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICMwMDdiZmY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19hZGQtbGluZSB7XG4gICAgICAgIG1hcmdpbjogM3B4O1xuICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgICAgY29sb3I6ICM3OTc5Nzk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgICAgICAgY29sb3I6ICM3OTc5Nzk7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3N0eWxlPlxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudGhyZWVzLXByZWxvYWRlciB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLnRocmVlcy1wcmVsb2FkZXJfX3NxdWFyZSB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NGIxZDE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92dWUvY29tcG9uZW50cy9GcmFtZVByZWxvYWRlci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQVJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLnRocmVlcy1wcmVsb2FkZXIge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFxuICAgICZfX3NxdWFyZSB7XFxuICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGIxZDE7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRocmVlc19ub2Rlc19tZXRob2RzIHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi50aHJlZXNfbm9kZXNfbWV0aG9kc19faW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sb3I6ICM3MDcwNzA7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi50aHJlZXNfbm9kZXNfbWV0aG9kc19fcHJlbG9hZGVyIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4udGhyZWVzX25vZGVzX21ldGhvZHNfX2J1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgYmFja2dyb3VuZDogI2U5ZTllOTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGNvbG9yOiAjNzc3Nzc3O1xcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxuICBtYXJnaW46IDNweDtcXG59XFxuLnRocmVlc19ub2Rlc19tZXRob2RzX19idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2ZmZTdiYTtcXG4gIGNvbG9yOiAjNzk1NTEyO1xcbn1cXG4udGhyZWVzX25vZGVzX21ldGhvZHNfX2J1dHRvbi5pbmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xcbiAgY29sb3I6ICNjZGNkY2Q7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92dWUvY29tcG9uZW50cy9Ob2Rlc01ldGhvZHMudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUFKO0FBRUk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFSO0FBR0k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBRFI7QUFJSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBRlI7QUFJUTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQUZaO0FBS1E7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFIWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4udGhyZWVzX25vZGVzX21ldGhvZHMge1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICAmX19pbmZvIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBjb2xvcjogIzcwNzA3MDtcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgfVxcblxcbiAgICAmX19wcmVsb2FkZXIge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgJl9fYnV0dG9uIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDNweCA1cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgY29sb3I6ICM3Nzc3Nzc7XFxuICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcXG4gICAgICAgIG1hcmdpbjogM3B4O1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZTdiYTtcXG4gICAgICAgICAgICBjb2xvcjogIzc5NTUxMjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYuaW5hY3RpdmUge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XFxuICAgICAgICAgICAgY29sb3I6ICNjZGNkY2Q7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZyYW1lIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4uZnJhbWUgLm5vZGUtdGVzdCB7XFxuICBiYWNrZ3JvdW5kOiAjNDc5NWIxO1xcbn1cXG4uZnJhbWVfX2xpbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogNXB4O1xcbiAgbWluLWhlaWdodDogNDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbn1cXG4uZnJhbWVfX2xpbmUuc2VsZWN0ZWQge1xcbiAgYm94LXNoYWRvdzogLTNweCAwIDAgMCAjODUwMGZmO1xcbn1cXG4uZnJhbWVfX25vZGUge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG4uZnJhbWVfX25vZGUuc2VsZWN0ZWQge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICMwMDdiZmY7XFxufVxcbi5mcmFtZV9fYWRkLWxpbmUge1xcbiAgbWFyZ2luOiAzcHg7XFxuICBwYWRkaW5nOiA3cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcbiAgY29sb3I6ICM3OTc5Nzk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZnJhbWVfX2FkZC1saW5lOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XFxuICBjb2xvcjogIzc5Nzk3OTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Z1ZS9zY3JlZW5zL0ZyYW1lLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBQ0ksbUJBQUE7QUFBUjtBQUdJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRFI7QUFHUTtFQUNJLDhCQUFBO0FBRFo7QUFLSTtFQUNJLFlBQUE7QUFIUjtBQUtRO0VBQ0ksbUNBQUE7QUFIWjtBQU9JO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFMUjtBQU9RO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBTFpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLmZyYW1lIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG5cXG4gICAgLm5vZGUtdGVzdCB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjNDc5NWIxO1xcbiAgICB9XFxuXFxuICAgICZfX2xpbmUge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICAgICAgbWluLWhlaWdodDogNDBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcXG4gICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xcblxcbiAgICAgICAgJi5zZWxlY3RlZCB7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogLTNweCAwIDAgMCAjODUwMGZmO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX25vZGUge1xcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xcblxcbiAgICAgICAgJi5zZWxlY3RlZCB7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICMwMDdiZmY7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fYWRkLWxpbmUge1xcbiAgICAgICAgbWFyZ2luOiAzcHg7XFxuICAgICAgICBwYWRkaW5nOiA3cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcbiAgICAgICAgY29sb3I6ICM3OTc5Nzk7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcXG4gICAgICAgICAgICBjb2xvcjogIzc5Nzk3OTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZyYW1lUHJlbG9hZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYwNzJkNGYwJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIyNTM0N2E5Jmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2Rlc01ldGhvZHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzU1M2JhZTgmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZyYW1lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWVhOTQ4NTFhJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0ZyYW1lUHJlbG9hZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MDcyZDRmMFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZyYW1lUHJlbG9hZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9GcmFtZVByZWxvYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0ZyYW1lUHJlbG9hZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYwNzJkNGYwJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9hcHAvcGx1Z2lucy96ZW4vdGhyZWVzL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJzcmMvdnVlL2NvbXBvbmVudHMvRnJhbWVQcmVsb2FkZXIudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjYwNzJkNGYwXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNjA3MmQ0ZjAnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCc2MDcyZDRmMCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRnJhbWVQcmVsb2FkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYwNzJkNGYwXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzYwNzJkNGYwJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMjUzNDdhOVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIyNTM0N2E5Jmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9hcHAvcGx1Z2lucy96ZW4vdGhyZWVzL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJzcmMvdnVlL2NvbXBvbmVudHMvTm9kZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMjI1MzQ3YTlcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcyMjUzNDdhOScsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzIyNTM0N2E5JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMjUzNDdhOVwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCcyMjUzNDdhOScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vTm9kZXNNZXRob2RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NTUzYmFlOFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05vZGVzTWV0aG9kcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vTm9kZXNNZXRob2RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vTm9kZXNNZXRob2RzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc1NTNiYWU4Jmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9hcHAvcGx1Z2lucy96ZW4vdGhyZWVzL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJzcmMvdnVlL2NvbXBvbmVudHMvTm9kZXNNZXRob2RzLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI3NTUzYmFlOFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzc1NTNiYWU4JywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnNzU1M2JhZTgnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05vZGVzTWV0aG9kcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzU1M2JhZThcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignNzU1M2JhZTgnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0ZyYW1lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYTk0ODUxYVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZyYW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9GcmFtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0ZyYW1lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWVhOTQ4NTFhJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9hcHAvcGx1Z2lucy96ZW4vdGhyZWVzL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJzcmMvdnVlL3NjcmVlbnMvRnJhbWUudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcImVhOTQ4NTFhXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnZWE5NDg1MWEnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCdlYTk0ODUxYScsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRnJhbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWVhOTQ4NTFhXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJ2VhOTQ4NTFhJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9GcmFtZVByZWxvYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9GcmFtZVByZWxvYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGVzTWV0aG9kcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2Rlc01ldGhvZHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9GcmFtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9GcmFtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiJdLCJuYW1lcyI6WyJkYXRhIiwic3F1YXJlX3Bvc2l0aW9uIiwiYW5pbWF0aW9uX2ZyYW1lX2lkIiwidGhzIiwid2luZG93IiwibW91bnRlZCIsInByb2Nlc3MiLCJhbmltYXRlIiwidW5tb3VudGVkIiwiY2FuY2VsX2FuaW1hdGlvbiIsIndhdGNoIiwidGhzRGF0YVByb2Nlc3MiLCJuZXdfdmFsdWUiLCJtZXRob2RzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJuYW1lIiwiZW1pdHMiLCJjb21wb25lbnRzIiwiY29tcHV0ZWQiLCJoYXNDc3NMYXllciIsInByb3BzIiwibm9kZSIsIkZyYW1lUHJlbG9hZGVyIiwibmlkIiwibmlkcyIsImluZm8iLCJsaW5lcyIsInNlbGVjdGVkX25vbmUiLCJsZW5ndGgiLCJzZWxlY3RBbGxOb2RlcyIsIiRlbWl0IiwicmVtb3ZlTm9kZXMiLCJfdGhpcyIsImFwaSIsInRoZW4iLCJjb3B5Tm9kZXMiLCJfdGhpczIiLCJhZGROZXdOb2RlIiwiZHJhZ2dhYmxlIiwiTm9kZXNNZXRob2RzIiwiTm9kZSIsIm5vZGVzIiwic2VsZWN0ZWRfbGluZV9pbmRleCIsInNlbGVjdGVkX25vZGVzIiwibm9kZV9pbl9wYW5lbCIsImdldE5vZGVzIiwibm9kZXNfbGluZXNfY291bnQiLCJfdGhpcyRub2RlcyRsZW5ndGgiLCJfdGhpcyRub2RlcyIsIm9wZW5Ob2RlUGFuZWwiLCJsaW5lU2VsZWN0ZWQiLCJsaW5lX2luZGV4IiwiY2xvc2VOb2RlUGFuZWwiLCJjbGVhclNlbGVjdGlvbiIsImV2ZW50IiwidGFyZ2V0IiwibWF0Y2hlcyIsImFsbF9ub2RlcyIsImZvckVhY2giLCJsaW5lIiwicHVzaCIsImdldE5vZGVTdHlsZSIsImlzTm9kZVNlbGVjdGVkIiwiaW5jbHVkZXMiLCJoYW5kbGVOb2RlQ2xpY2siLCJkZXRhaWwiLCJjdHJsS2V5IiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiaGFuZGxlTm9kZVJpZ2h0Q2xpY2siLCJjcmVhdGVOb2RlIiwib25Ob2RlVXBkYXRlZCIsInNlbGVjdExpbmUiLCJhZGRMaW5lIiwicmVzcG9uc2UiLCJfdGhpczMiLCJzYXZlUHJvZ3JhbSIsIl90aGlzNCIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfaG9pc3RlZF8xIiwiJGRhdGEiLCJzdHlsZSIsIl9ub3JtYWxpemVTdHlsZSIsImxlZnQiLCIkcHJvcHMiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIm9uQ2xpY2siLCJfY2FjaGUiLCIkb3B0aW9ucyIsImFwcGx5IiwiYXJndW1lbnRzIiwiX25vcm1hbGl6ZUNsYXNzIiwiaW5hY3RpdmUiLCJ0aXRsZSIsIl9ob2lzdGVkXzIiLCJfY3JlYXRlVk5vZGUiLCJfY29tcG9uZW50X0ZyYW1lUHJlbG9hZGVyIiwiX2NvbXBvbmVudF9Ob2Rlc01ldGhvZHMiLCJvblVwZGF0ZSIsIm9uU2VsZWN0QWxsTm9kZXMiLCJvbkFkZE5ld05vZGUiLCIkZXZlbnQiLCJfRnJhZ21lbnQiLCJfcmVuZGVyTGlzdCIsIl9jcmVhdGVCbG9jayIsIl9jb21wb25lbnRfZHJhZ2dhYmxlIiwia2V5IiwidGFnIiwic2VsZWN0ZWQiLCJncm91cCIsIm9uRW5kIiwiaXRlbSIsIl93aXRoQ3R4IiwiX3JlZiIsImVsZW1lbnQiLCJfY29tcG9uZW50X05vZGUiLCJvbkNvbnRleHRtZW51IiwiX3dpdGhNb2RpZmllcnMiXSwic291cmNlUm9vdCI6IiJ9