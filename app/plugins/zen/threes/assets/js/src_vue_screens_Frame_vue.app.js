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
    fid: null,
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
          fid: this.fid,
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
          fid: this.fid,
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
  props: ['backend', 'fid'],
  data: function data() {
    return {
      program: [],
      // DSL программа
      selected_line_index: 0,
      selected_nodes: [],
      // Массив nid выбранных нодов
      node_in_panel: null // Сюда вставить нод чтобы открыть панель
    };
  },
  mounted: function mounted() {
    //this.loadProgram();
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
    program_lines_count: function program_lines_count() {
      var _this$program$length, _this$program;
      return (_this$program$length = (_this$program = this.program) === null || _this$program === void 0 ? void 0 : _this$program.length) !== null && _this$program$length !== void 0 ? _this$program$length : 0;
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
      this.program.forEach(function (line) {
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
          fid: this.fid,
          line_index: this.selected_line_index
        },
        then: function then() {
          _this.loadProgram();
        }
      });
    },
    // При обновлении нода
    onNodeUpdated: function onNodeUpdated(node) {
      if (node) {
        this.node_in_panel = node;
      }
      this.loadProgram();
    },
    selectLine: function selectLine(line_index) {
      this.selected_line_index = line_index;
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
          fid: this.fid
        },
        then: function then(response) {
          _this3.program = response.program;
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
    fid: $props.fid,
    nids: $data.selected_nodes,
    info: $options.info,
    lines: $options.program_lines_count,
    onUpdate: $options.loadProgram,
    onSelectAllNodes: $options.selectAllNodes,
    onAddNewNode: $options.createNode
  }, null, 8 /* PROPS */, ["fid", "nids", "info", "lines", "onUpdate", "onSelectAllNodes", "onAddNewNode"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
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
      return $options.addProgramLine && $options.addProgramLine.apply($options, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJtRDtBQUNWO0FBQ0w7O0FBRW5ELENBQWlFOztBQUVpQztBQUNsRyxpQ0FBaUMsZ0hBQWUsQ0FBQywwRUFBTSxhQUFhLDRFQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFjZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQzFCb007Ozs7Ozs7Ozs7Ozs7OztBQ0FWOzs7Ozs7Ozs7Ozs7Ozs7QUNBUTs7Ozs7Ozs7Ozs7Ozs7O0FDQVAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvRnJhbWVQcmVsb2FkZXIudnVlIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9Ob2RlLnZ1ZSIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZXNNZXRob2RzLnZ1ZSIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3NjcmVlbnMvRnJhbWUudnVlIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9GcmFtZVByZWxvYWRlci52dWU/N2JiZCIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZS52dWU/MDcwYiIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZXNNZXRob2RzLnZ1ZT8zNjAxIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvc2NyZWVucy9GcmFtZS52dWU/NzYwOCIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvRnJhbWVQcmVsb2FkZXIudnVlP2NlZDgiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL05vZGUudnVlPzE5OGIiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL05vZGVzTWV0aG9kcy52dWU/NGNjMSIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3NjcmVlbnMvRnJhbWUudnVlP2I0NjgiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL0ZyYW1lUHJlbG9hZGVyLnZ1ZT9hOGJiIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9Ob2RlLnZ1ZT8wYzAzIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9Ob2Rlc01ldGhvZHMudnVlP2I4NjAiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9zY3JlZW5zL0ZyYW1lLnZ1ZT9iZGUyIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9GcmFtZVByZWxvYWRlci52dWU/MmE4MCIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZS52dWU/NGNlMyIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZXNNZXRob2RzLnZ1ZT80NjIxIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvc2NyZWVucy9GcmFtZS52dWU/OWM3MyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInRocmVlcy1wcmVsb2FkZXJcIj5cbiAgICAgICAgPGRpdiB2LWlmPVwidGhzLmRhdGEucHJvY2Vzc1wiIGNsYXNzPVwidGhyZWVzLXByZWxvYWRlcl9fc3F1YXJlXCIgOnN0eWxlPVwieyBsZWZ0OiBzcXVhcmVfcG9zaXRpb24gKyAncHgnIH1cIj48L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNxdWFyZV9wb3NpdGlvbjogMCxcbiAgICAgICAgICAgIGFuaW1hdGlvbl9mcmFtZV9pZDogbnVsbCxcbiAgICAgICAgICAgIHRoczogd2luZG93LnRocyxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnRocy5kYXRhLnByb2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSgpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHVubW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxfYW5pbWF0aW9uKClcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgICd0aHMuZGF0YS5wcm9jZXNzJyhuZXdfdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChuZXdfdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGUoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbF9hbmltYXRpb24oKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBhbmltYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5zcXVhcmVfcG9zaXRpb24gPSAodGhpcy5zcXVhcmVfcG9zaXRpb24gKyAyKSAlIDE1MFxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25fZnJhbWVfaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKVxuICAgICAgICB9LFxuICAgICAgICBjYW5jZWxfYW5pbWF0aW9uKCkge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25fZnJhbWVfaWQpXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4udGhyZWVzLXByZWxvYWRlciB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgICZfX3NxdWFyZSB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGIxZDE7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG48ZGl2IHYtaWY9XCJub2RlLm5pZFwiIGNsYXNzPVwidGhyZWVzLW5vZGVcIj5cbiAgICB7eyBub2RlLm5pZCB9fVxuPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiTm9kZVwiLFxuICAgIGVtaXRzOiBbJ3VwZGF0ZSddLFxuICAgIGNvbXBvbmVudHM6IHtcblxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgaGFzQ3NzTGF5ZXIoKSB7XG4gICAgICAgICAgICAvL3JldHVybiB0aGlzLm5vZGUubGF5ZXJzLnNvbWUobGF5ZXIgPT4gbGF5ZXIuYXNwZWN0ID09PSAndGhyZWVzLnVuaXRzLnVpQGNzcycpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBub2RlOiBudWxsXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG5cbiAgICB9XG59XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLnRocmVlcy1ub2RlIHtcblxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbjxkaXYgY2xhc3M9XCJ0aHJlZXNfbm9kZXNfbWV0aG9kc1wiPlxuICAgIDxkaXZcbiAgICAgICAgQGNsaWNrPVwiYWRkTmV3Tm9kZVwiXG4gICAgICAgIGNsYXNzPVwidGhyZWVzX25vZGVzX21ldGhvZHNfX2J1dHRvblwiXG4gICAgICAgIDpjbGFzcz1cIntpbmFjdGl2ZTohbGluZXN9XCJcbiAgICAgICAgdGl0bGU9XCLQlNC+0LHQsNCy0LjRgtGMINC90L7QtCDQvdCwINC70LjQvdC40Y5cIlxuICAgID5cbiAgICAgICAgPGkgY2xhc3M9XCJpY29uLWN1YmVcIj48L2k+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgICBAY2xpY2s9XCJzZWxlY3RBbGxOb2Rlc1wiXG4gICAgICAgIGNsYXNzPVwidGhyZWVzX25vZGVzX21ldGhvZHNfX2J1dHRvblwiXG4gICAgICAgIDpjbGFzcz1cIntpbmFjdGl2ZTohbGluZXN9XCJcbiAgICAgICAgdGl0bGU9XCLQktGL0LHRgNCw0YLRjCDQstGB0LUg0L3QvtC00Ysg0L3QsCDRgdGF0LXQvNC1XCJcbiAgICA+XG4gICAgICAgIDxpIGNsYXNzPVwiaWNvbi1idWxsc2V5ZVwiPjwvaT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICAgIEBjbGljaz1cInJlbW92ZU5vZGVzXCJcbiAgICAgICAgY2xhc3M9XCJ0aHJlZXNfbm9kZXNfbWV0aG9kc19fYnV0dG9uXCJcbiAgICAgICAgOmNsYXNzPVwie2luYWN0aXZlOnNlbGVjdGVkX25vbmV9XCJcbiAgICAgICAgdGl0bGU9XCLQo9C00LDQu9C40YLRjCDQstGL0LHRgNCw0L3QvdGL0LUg0L3QvtC00YtcIlxuICAgID5cbiAgICAgICAgPGkgY2xhc3M9XCJpY29uLXRyYXNoLTFcIiA+PC9pPlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICAgICAgQGNsaWNrPVwiY29weU5vZGVzXCJcbiAgICAgICAgY2xhc3M9XCJ0aHJlZXNfbm9kZXNfbWV0aG9kc19fYnV0dG9uXCJcbiAgICAgICAgOmNsYXNzPVwie2luYWN0aXZlOnNlbGVjdGVkX25vbmV9XCJcbiAgICAgICAgdGl0bGU9XCLQmtC+0L/QuNGA0L7QstCw0YLRjCDQstGL0LHRgNCw0L3QvdGL0LUg0L3QvtC00YtcIlxuICAgID5cbiAgICAgICAgPGkgY2xhc3M9XCJpY29uLWNvcHlcIj48L2k+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRocmVlc19ub2Rlc19tZXRob2RzX19pbmZvXCI+XG4gICAgICAgIHt7IGluZm8gfX1cbiAgICA8L2Rpdj5cbiAgICA8RnJhbWVQcmVsb2FkZXIgY2xhc3M9XCJ0aHJlZXNfbm9kZXNfbWV0aG9kc19fcHJlbG9hZGVyXCIgLz5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgRnJhbWVQcmVsb2FkZXIgZnJvbSAnLi9GcmFtZVByZWxvYWRlci52dWUnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdOb2Rlc01ldGhvZHMnLFxuICAgIHByb3BzOiB7XG4gICAgICAgIGZpZDogbnVsbCxcbiAgICAgICAgbmlkczogbnVsbCxcbiAgICAgICAgaW5mbzogbnVsbCxcbiAgICAgICAgbGluZXM6IG51bGxcbiAgICB9LFxuICAgIGVtaXRzOiBbJ3VwZGF0ZScsICdzZWxlY3RBbGxOb2RlcycsICdhZGROZXdOb2RlJ10sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBGcmFtZVByZWxvYWRlclxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgc2VsZWN0ZWRfbm9uZSgpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5uaWRzIHx8IHRoaXMubmlkcy5sZW5ndGggPCAxXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNlbGVjdEFsbE5vZGVzKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2VsZWN0QWxsTm9kZXMnKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlTm9kZXMoKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZF9ub25lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHMuYXBpKHtcbiAgICAgICAgICAgICAgICBhcGk6ICdub2Rlcy5Ob2RlOnJlbW92ZU5vZGVzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpZDogdGhpcy5maWQsXG4gICAgICAgICAgICAgICAgICAgIG5pZHM6IHRoaXMubmlkc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGUnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGNvcHlOb2RlcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkX25vbmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocy5hcGkoe1xuICAgICAgICAgICAgICAgIGFwaTogJ25vZGVzLk5vZGU6Y29weU5vZGVzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpZDogdGhpcy5maWQsXG4gICAgICAgICAgICAgICAgICAgIG5pZHM6IHRoaXMubmlkc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGUnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGFkZE5ld05vZGUoKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdhZGROZXdOb2RlJylcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi50aHJlZXNfbm9kZXNfbWV0aG9kcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICZfX2luZm8ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBjb2xvcjogIzcwNzA3MDtcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG5cbiAgICAmX19wcmVsb2FkZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cblxuICAgICZfX2J1dHRvbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogM3B4IDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBjb2xvcjogIzc3Nzc3NztcbiAgICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XG4gICAgICAgIG1hcmdpbjogM3B4O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZTdiYTtcbiAgICAgICAgICAgIGNvbG9yOiAjNzk1NTEyO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5pbmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAgICAgICAgICAgY29sb3I6ICNjZGNkY2Q7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxOb2Rlc01ldGhvZHNcbiAgICAgICAgOmZpZD1cImZpZFwiXG4gICAgICAgIDpuaWRzPVwic2VsZWN0ZWRfbm9kZXNcIlxuICAgICAgICA6aW5mbz1cImluZm9cIlxuICAgICAgICA6bGluZXM9XCJwcm9ncmFtX2xpbmVzX2NvdW50XCJcbiAgICAgICAgQHVwZGF0ZT1cImxvYWRQcm9ncmFtXCJcbiAgICAgICAgQHNlbGVjdEFsbE5vZGVzPVwic2VsZWN0QWxsTm9kZXNcIlxuICAgICAgICBAYWRkTmV3Tm9kZT1cImNyZWF0ZU5vZGVcIlxuICAgIC8+XG4gICAgPGRpdiBjbGFzcz1cImZyYW1lXCIgQGNsaWNrPVwiY2xlYXJTZWxlY3Rpb24oJGV2ZW50KVwiPlxuICAgICAgICA8ZHJhZ2dhYmxlXG4gICAgICAgICAgICB2LWZvcj1cIihsaW5lLCBsaW5lX2luZGV4KSBpbiBwcm9ncmFtXCJcbiAgICAgICAgICAgIDprZXk9XCJsaW5lX2luZGV4XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJwcm9ncmFtW2xpbmVfaW5kZXhdXCJcbiAgICAgICAgICAgIHRhZz1cImRpdlwiXG4gICAgICAgICAgICBjbGFzcz1cImZyYW1lX19saW5lXCJcbiAgICAgICAgICAgIDpjbGFzcz1cIntzZWxlY3RlZDogbGluZVNlbGVjdGVkKGxpbmVfaW5kZXgpfVwiXG4gICAgICAgICAgICBncm91cD1cIm5vZGVzXCJcbiAgICAgICAgICAgIGl0ZW0ta2V5PVwibmlkXCJcbiAgICAgICAgICAgIDptdWx0aS1kcmFnPVwidHJ1ZVwiXG4gICAgICAgICAgICA6c2VsZWN0ZWQtaXRlbXM9XCJzZWxlY3RlZF9ub2Rlc1wiXG4gICAgICAgICAgICBAZW5kPVwic2F2ZVByb2dyYW1cIlxuICAgICAgICAgICAgQGNsaWNrPVwic2VsZWN0TGluZShsaW5lX2luZGV4KVwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSAjaXRlbT1cIntlbGVtZW50Om5vZGV9XCI+XG4gICAgICAgICAgICAgICAgPE5vZGVcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmcmFtZV9fbm9kZVwiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsnc2VsZWN0ZWQnOmlzTm9kZVNlbGVjdGVkKG5vZGUpfVwiXG4gICAgICAgICAgICAgICAgICAgIDpzdHlsZT1cImdldE5vZGVTdHlsZShub2RlKVwiXG4gICAgICAgICAgICAgICAgICAgIDpub2RlPVwibm9kZVwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImhhbmRsZU5vZGVDbGljayhub2RlLCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgQGNvbnRleHRtZW51LnByZXZlbnQ9XCJoYW5kbGVOb2RlUmlnaHRDbGljayhub2RlLCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kcmFnZ2FibGU+XG4gICAgICAgIDxkaXYgQGNsaWNrPVwiYWRkUHJvZ3JhbUxpbmVcIiBjbGFzcz1cImZyYW1lX19hZGQtbGluZVwiIHRpdGxlPVwi0JTQvtCx0LDQstC40YLRjCDQvdC+0LLRg9GOINC70LjQvdC40Y5cIj4rPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGRyYWdnYWJsZSBmcm9tICd2dWVkcmFnZ2FibGUnO1xuaW1wb3J0IE5vZGVzTWV0aG9kcyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ob2Rlc01ldGhvZHMudnVlXCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ob2RlLnZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ0ZyYW1lJyxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGRyYWdnYWJsZSxcbiAgICAgICAgTm9kZXNNZXRob2RzLFxuICAgICAgICBOb2RlLFxuICAgIH0sXG4gICAgcHJvcHM6IFsnYmFja2VuZCcsICdmaWQnXSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvZ3JhbTogW10sIC8vIERTTCDQv9GA0L7Qs9GA0LDQvNC80LBcbiAgICAgICAgICAgIHNlbGVjdGVkX2xpbmVfaW5kZXg6IDAsXG4gICAgICAgICAgICBzZWxlY3RlZF9ub2RlczogW10sIC8vINCc0LDRgdGB0LjQsiBuaWQg0LLRi9Cx0YDQsNC90L3Ri9GFINC90L7QtNC+0LJcbiAgICAgICAgICAgIG5vZGVfaW5fcGFuZWw6IG51bGwgLy8g0KHRjtC00LAg0LLRgdGC0LDQstC40YLRjCDQvdC+0LQg0YfRgtC+0LHRiyDQvtGC0LrRgNGL0YLRjCDQv9Cw0L3QtdC70YxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIC8vdGhpcy5sb2FkUHJvZ3JhbSgpO1xuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgc2VsZWN0ZWRfbm9kZXMoKSB7XG4gICAgICAgICAgICB0aHMuZGF0YS5uaWRzID0gdGhpcy5zZWxlY3RlZF9ub2Rlc1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBpbmZvKCkge1xuICAgICAgICAgICAgcmV0dXJuICfQktGL0LTQtdC70LXQvdC+OiAnICsgdGhpcy5zZWxlY3RlZF9ub2Rlcy5sZW5ndGhcbiAgICAgICAgfSxcbiAgICAgICAgcHJvZ3JhbV9saW5lc19jb3VudCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2dyYW0/Lmxlbmd0aCA/PyAwXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgLy8g0J7RgtC60YDRi9GC0Ywg0L/QsNC90LXQu9GMINC90L7QtNCwXG4gICAgICAgIG9wZW5Ob2RlUGFuZWwobm9kZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlX2luX3BhbmVsID0gbm9kZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCS0YvQtNC10LvQtdC90LjQtSDQu9C40L3QuNC4XG4gICAgICAgIGxpbmVTZWxlY3RlZChsaW5lX2luZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZF9saW5lX2luZGV4ID09PSBsaW5lX2luZGV4XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JfQsNC60YDRi9GC0Ywg0L/QsNC90LXQu9GMINC90L7QtNCwXG4gICAgICAgIGNsb3NlTm9kZVBhbmVsKCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlX2luX3BhbmVsID0gbnVsbFxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCe0YfQuNGB0YLQuNGC0Ywg0LzQvdC+0LbQtdGB0YLQstC10L3QvdC+0LUg0LLRi9C00LXQu9C10L3QuNC1XG4gICAgICAgIGNsZWFyU2VsZWN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5mcmFtZSwgLmZyYW1lX19saW5lJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkX25vZGVzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JLRi9Cx0YDQsNGC0Ywg0LLRgdC1INC90L7QtNGLXG4gICAgICAgIHNlbGVjdEFsbE5vZGVzKCkge1xuICAgICAgICAgICAgbGV0IGFsbF9ub2RlcyA9IFtdXG4gICAgICAgICAgICB0aGlzLnByb2dyYW0uZm9yRWFjaChsaW5lID0+IHtcbiAgICAgICAgICAgICAgICBsaW5lLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsbF9ub2Rlcy5wdXNoKG5vZGUubmlkKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9ub2RlcyA9IGFsbF9ub2Rlc1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCe0YTQvtGA0LzQuNGC0Ywg0YHRgtC40LvRjCDQvdC+0LTQsCDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0LXQs9C+INGB0LvQvtGPIGNzc1xuICAgICAgICBnZXROb2RlU3R5bGUobm9kZSkge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIGxldCBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNXB4IDdweCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyM2ZWIzOWQnLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6ICc1MHB4J1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBub2RlLmxheWVycykge1xuICAgICAgICAgICAgICAgIGxldCBsYXllciA9IG5vZGUubGF5ZXJzW2ldXG4gICAgICAgICAgICAgICAgaWYgKGxheWVyLmFzcGVjdCA9PT0gJ3RocmVlcy51bml0cy51aUBjc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXllci5leGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0gbGF5ZXIuZXhlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3R5bGVcbiAgICAgICAgICAgICovXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JXRgdC70Lgg0L3QvtC0INCy0YvQtNC10LvQtdC9XG4gICAgICAgIGlzTm9kZVNlbGVjdGVkKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkX25vZGVzLmluY2x1ZGVzKG5vZGUubmlkKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQndCw0LbQsNGC0LjQtSDQu9C10LLQvtC5INC60L3QvtC/0LrQvtC5INC80YvRiNC4INC90LAg0L3QvtC00LVcbiAgICAgICAgaGFuZGxlTm9kZUNsaWNrKG5vZGUsIGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGV0YWlsID09PSAyKSByZXR1cm47IC8vINCf0YDQvtC/0YPRgdC60LDQtdC8INC00LLQvtC50L3QvtC5INC60LvQuNC6XG5cbiAgICAgICAgICAgIGNvbnN0IG5pZCA9IG5vZGUubmlkO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICAvLyDQnNC90L7QttC10YHRgtCy0LXQvdC90YvQuSDQstGL0LHQvtGAINGBIEN0cmxcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuc2VsZWN0ZWRfbm9kZXMuaW5kZXhPZihuaWQpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9ub2Rlcy5wdXNoKG5pZCkgLy8g0JTQvtCx0LDQstC70Y/QtdC8LCDQtdGB0LvQuCDQvdC1INCy0YvQsdGA0LDQvVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbm9kZXMuc3BsaWNlKGluZGV4LCAxKTsgLy8g0KPQsdC40YDQsNC10LwsINC10YHQu9C4INGD0LbQtSDQstGL0LHRgNCw0L1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vINCe0LTQuNC90L7Rh9C90YvQuSDQstGL0LHQvtGAINCx0LXQtyBDdHJsXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRfbm9kZXMubGVuZ3RoID09PSAxICYmIHRoaXMuc2VsZWN0ZWRfbm9kZXNbMF0gPT09IG5pZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkX25vZGVzID0gW10gLy8g0KHQvdC40LzQsNC10Lwg0LLRi9Cx0L7RgCwg0LXRgdC70Lgg0LrQu9C40LrQvdGD0LvQuCDQvdCwINGD0LbQtSDQstGL0LHRgNCw0L3QvdGL0LlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkX25vZGVzID0gW25pZF0gLy8g0JLRi9Cx0LjRgNCw0LXQvCDRgtC+0LvRjNC60L4g0Y3RgtC+0YIg0L3QvtC0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCd0LDQttCw0YLQuNC1INC/0YDQsNCy0L7QuSDQutC90L7Qv9C60L7QuSDQvNGL0YjQuCDQvdCwINC90L7QtNC1XG4gICAgICAgIGhhbmRsZU5vZGVSaWdodENsaWNrKG5vZGUsIGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRfbm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuTm9kZVBhbmVsKG5vZGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0KHQvtC30LTQsNGC0Ywg0L3QvtCy0YvQuSDQvdC+0LRcbiAgICAgICAgY3JlYXRlTm9kZSgpIHtcbiAgICAgICAgICAgIHRocy5hcGkoe1xuICAgICAgICAgICAgICAgIGFwaTogJ25vZGVzLk5vZGU6Y3JlYXRlJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpZDogdGhpcy5maWQsXG4gICAgICAgICAgICAgICAgICAgIGxpbmVfaW5kZXg6IHRoaXMuc2VsZWN0ZWRfbGluZV9pbmRleFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRQcm9ncmFtKClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0J/RgNC4INC+0LHQvdC+0LLQu9C10L3QuNC4INC90L7QtNCwXG4gICAgICAgIG9uTm9kZVVwZGF0ZWQobm9kZSkge1xuICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVfaW5fcGFuZWwgPSBub2RlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxvYWRQcm9ncmFtKClcbiAgICAgICAgfSxcblxuICAgICAgICBzZWxlY3RMaW5lKGxpbmVfaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbGluZV9pbmRleCA9IGxpbmVfaW5kZXhcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQlNC+0LHQsNCy0LjRgtGMINC/0YDQvtCz0YDQsNC80LzQvdGD0Y4g0LvQuNC90LjRjlxuICAgICAgICBhZGRQcm9ncmFtTGluZSgpIHtcbiAgICAgICAgICAgIHRocy5hcGkoe1xuICAgICAgICAgICAgICAgIGFwaTogJ2ZyYW1lcy5GcmFtZTphZGRMaW5lJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpZDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkUHJvZ3JhbSgpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCX0LDQs9GA0YPQt9C40YLRjCDQv9GA0L7Qs9GA0LDQvNC80YNcbiAgICAgICAgbG9hZFByb2dyYW0oKSB7XG4gICAgICAgICAgICB0aHMuYXBpKHtcbiAgICAgICAgICAgICAgICBhcGk6ICdmcmFtZXMuRnJhbWU6bG9hZFByb2dyYW0nLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlkOiB0aGlzLmZpZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyYW0gPSByZXNwb25zZS5wcm9ncmFtO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQodC+0YXRgNCw0L3QuNGC0Ywg0L/RgNC+0LPRgNCw0LzQvNGDXG4gICAgICAgIHNhdmVQcm9ncmFtKCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9ub2RlcyA9IFtdXG4gICAgICAgICAgICB0aHMuYXBpKHtcbiAgICAgICAgICAgICAgICBhcGk6ICdmcmFtZXMuRnJhbWU6c2F2ZVByb2dyYW0nLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlkOiB0aGlzLmZpZCxcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFByb2dyYW0oKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uZnJhbWUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAgIC5ub2RlLXRlc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNDc5NWIxO1xuICAgIH1cblxuICAgICZfX2xpbmUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGdhcDogNXB4O1xuICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xuXG4gICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogLTNweCAwIDAgMCAjODUwMGZmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fbm9kZSB7XG4gICAgICAgIGN1cnNvcjogbW92ZTtcblxuICAgICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjMDA3YmZmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fYWRkLWxpbmUge1xuICAgICAgICBtYXJnaW46IDNweDtcbiAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICAgIGNvbG9yOiAjNzk3OTc5O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICAgICAgICAgIGNvbG9yOiAjNzk3OTc5O1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRocmVlcy1wcmVsb2FkZXIge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi50aHJlZXMtcHJlbG9hZGVyX19zcXVhcmUge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRiMWQxO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdnVlL2NvbXBvbmVudHMvRnJhbWVQcmVsb2FkZXIudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFKO0FBRUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUFSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi50aHJlZXMtcHJlbG9hZGVyIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcblxcbiAgICAmX19zcXVhcmUge1xcbiAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRiMWQxO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50aHJlZXNfbm9kZXNfbWV0aG9kcyB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4udGhyZWVzX25vZGVzX21ldGhvZHNfX2luZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiAjNzA3MDcwO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4udGhyZWVzX25vZGVzX21ldGhvZHNfX3ByZWxvYWRlciB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLnRocmVlc19ub2Rlc19tZXRob2RzX19idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjb2xvcjogIzc3Nzc3NztcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgbWFyZ2luOiAzcHg7XFxufVxcbi50aHJlZXNfbm9kZXNfbWV0aG9kc19fYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmZmU3YmE7XFxuICBjb2xvcjogIzc5NTUxMjtcXG59XFxuLnRocmVlc19ub2Rlc19tZXRob2RzX19idXR0b24uaW5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcXG4gIGNvbG9yOiAjY2RjZGNkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZXNNZXRob2RzLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFBSjtBQUVJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUdJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQURSO0FBSUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUZSO0FBSVE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFGWjtBQUtRO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBSFpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLnRocmVlc19ub2Rlc19tZXRob2RzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgJl9faW5mbyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgY29sb3I6ICM3MDcwNzA7XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgJl9fcHJlbG9hZGVyIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICB9XFxuXFxuICAgICZfX2J1dHRvbiB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogI2U5ZTllOTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgIGNvbG9yOiAjNzc3Nzc3O1xcbiAgICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XFxuICAgICAgICBtYXJnaW46IDNweDtcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmU3YmE7XFxuICAgICAgICAgICAgY29sb3I6ICM3OTU1MTI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLmluYWN0aXZlIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xcbiAgICAgICAgICAgIGNvbG9yOiAjY2RjZGNkO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mcmFtZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLmZyYW1lIC5ub2RlLXRlc3Qge1xcbiAgYmFja2dyb3VuZDogIzQ3OTViMTtcXG59XFxuLmZyYW1lX19saW5lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDVweDtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG59XFxuLmZyYW1lX19saW5lLnNlbGVjdGVkIHtcXG4gIGJveC1zaGFkb3c6IC0zcHggMCAwIDAgIzg1MDBmZjtcXG59XFxuLmZyYW1lX19ub2RlIHtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuLmZyYW1lX19ub2RlLnNlbGVjdGVkIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjMDA3YmZmO1xcbn1cXG4uZnJhbWVfX2FkZC1saW5lIHtcXG4gIG1hcmdpbjogM3B4O1xcbiAgcGFkZGluZzogN3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcXG4gIGNvbG9yOiAjNzk3OTc5O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmZyYW1lX19hZGQtbGluZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xcbiAgY29sb3I6ICM3OTc5Nzk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92dWUvc2NyZWVucy9GcmFtZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFSTtFQUNJLG1CQUFBO0FBQVI7QUFHSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQURSO0FBR1E7RUFDSSw4QkFBQTtBQURaO0FBS0k7RUFDSSxZQUFBO0FBSFI7QUFLUTtFQUNJLG1DQUFBO0FBSFo7QUFPSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTFI7QUFPUTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQUxaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5mcmFtZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuXFxuICAgIC5ub2RlLXRlc3Qge1xcbiAgICAgICAgYmFja2dyb3VuZDogIzQ3OTViMTtcXG4gICAgfVxcblxcbiAgICAmX19saW5lIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBnYXA6IDVweDtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcXG5cXG4gICAgICAgICYuc2VsZWN0ZWQge1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0zcHggMCAwIDAgIzg1MDBmZjtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19ub2RlIHtcXG4gICAgICAgIGN1cnNvcjogbW92ZTtcXG5cXG4gICAgICAgICYuc2VsZWN0ZWQge1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjMDA3YmZmO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2FkZC1saW5lIHtcXG4gICAgICAgIG1hcmdpbjogM3B4O1xcbiAgICAgICAgcGFkZGluZzogN3B4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcXG4gICAgICAgIGNvbG9yOiAjNzk3OTc5O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XFxuICAgICAgICAgICAgY29sb3I6ICM3OTc5Nzk7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9GcmFtZVByZWxvYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MDcyZDRmMCZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMjUzNDdhOSZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZXNNZXRob2RzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc1NTNiYWU4Jmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9GcmFtZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lYTk0ODUxYSZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9GcmFtZVByZWxvYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjA3MmQ0ZjBcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GcmFtZVByZWxvYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRnJhbWVQcmVsb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9GcmFtZVByZWxvYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MDcyZDRmMCZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvYXBwL3BsdWdpbnMvemVuL3RocmVlcy9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL3Z1ZS9jb21wb25lbnRzL0ZyYW1lUHJlbG9hZGVyLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI2MDcyZDRmMFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzYwNzJkNGYwJywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnNjA3MmQ0ZjAnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZyYW1lUHJlbG9hZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MDcyZDRmMFwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCc2MDcyZDRmMCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vTm9kZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjI1MzQ3YTlcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vTm9kZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMjUzNDdhOSZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvYXBwL3BsdWdpbnMvemVuL3RocmVlcy9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL3Z1ZS9jb21wb25lbnRzL05vZGUudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjIyNTM0N2E5XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMjI1MzQ3YTknLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCcyMjUzNDdhOScsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTm9kZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjI1MzQ3YTlcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignMjI1MzQ3YTknLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL05vZGVzTWV0aG9kcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzU1M2JhZThcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ob2Rlc01ldGhvZHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL05vZGVzTWV0aG9kcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL05vZGVzTWV0aG9kcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NTUzYmFlOCZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvYXBwL3BsdWdpbnMvemVuL3RocmVlcy9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL3Z1ZS9jb21wb25lbnRzL05vZGVzTWV0aG9kcy52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNzU1M2JhZThcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc3NTUzYmFlOCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzc1NTNiYWU4JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ob2Rlc01ldGhvZHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc1NTNiYWU4XCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzc1NTNiYWU4JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9GcmFtZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWE5NDg1MWFcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GcmFtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRnJhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9GcmFtZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lYTk0ODUxYSZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvYXBwL3BsdWdpbnMvemVuL3RocmVlcy9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL3Z1ZS9zY3JlZW5zL0ZyYW1lLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCJlYTk0ODUxYVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJ2VhOTQ4NTFhJywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnZWE5NDg1MWEnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZyYW1lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYTk0ODUxYVwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCdlYTk0ODUxYScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRnJhbWVQcmVsb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRnJhbWVQcmVsb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2Rlc01ldGhvZHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZXNNZXRob2RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRnJhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRnJhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiXSwibmFtZXMiOlsiZGF0YSIsInNxdWFyZV9wb3NpdGlvbiIsImFuaW1hdGlvbl9mcmFtZV9pZCIsInRocyIsIndpbmRvdyIsIm1vdW50ZWQiLCJwcm9jZXNzIiwiYW5pbWF0ZSIsInVubW91bnRlZCIsImNhbmNlbF9hbmltYXRpb24iLCJ3YXRjaCIsInRoc0RhdGFQcm9jZXNzIiwibmV3X3ZhbHVlIiwibWV0aG9kcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibmFtZSIsImVtaXRzIiwiY29tcG9uZW50cyIsImNvbXB1dGVkIiwiaGFzQ3NzTGF5ZXIiLCJwcm9wcyIsIm5vZGUiLCJGcmFtZVByZWxvYWRlciIsImZpZCIsIm5pZHMiLCJpbmZvIiwibGluZXMiLCJzZWxlY3RlZF9ub25lIiwibGVuZ3RoIiwic2VsZWN0QWxsTm9kZXMiLCIkZW1pdCIsInJlbW92ZU5vZGVzIiwiX3RoaXMiLCJhcGkiLCJ0aGVuIiwiY29weU5vZGVzIiwiX3RoaXMyIiwiYWRkTmV3Tm9kZSIsImRyYWdnYWJsZSIsIk5vZGVzTWV0aG9kcyIsIk5vZGUiLCJwcm9ncmFtIiwic2VsZWN0ZWRfbGluZV9pbmRleCIsInNlbGVjdGVkX25vZGVzIiwibm9kZV9pbl9wYW5lbCIsInByb2dyYW1fbGluZXNfY291bnQiLCJfdGhpcyRwcm9ncmFtJGxlbmd0aCIsIl90aGlzJHByb2dyYW0iLCJvcGVuTm9kZVBhbmVsIiwibGluZVNlbGVjdGVkIiwibGluZV9pbmRleCIsImNsb3NlTm9kZVBhbmVsIiwiY2xlYXJTZWxlY3Rpb24iLCJldmVudCIsInRhcmdldCIsIm1hdGNoZXMiLCJhbGxfbm9kZXMiLCJmb3JFYWNoIiwibGluZSIsInB1c2giLCJuaWQiLCJnZXROb2RlU3R5bGUiLCJpc05vZGVTZWxlY3RlZCIsImluY2x1ZGVzIiwiaGFuZGxlTm9kZUNsaWNrIiwiZGV0YWlsIiwiY3RybEtleSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImhhbmRsZU5vZGVSaWdodENsaWNrIiwiY3JlYXRlTm9kZSIsImxvYWRQcm9ncmFtIiwib25Ob2RlVXBkYXRlZCIsInNlbGVjdExpbmUiLCJhZGRQcm9ncmFtTGluZSIsInJlc3BvbnNlIiwiX3RoaXMzIiwic2F2ZVByb2dyYW0iLCJfdGhpczQiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2hvaXN0ZWRfMSIsIiRkYXRhIiwic3R5bGUiLCJfbm9ybWFsaXplU3R5bGUiLCJsZWZ0IiwiJHByb3BzIiwiX3RvRGlzcGxheVN0cmluZyIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJvbkNsaWNrIiwiX2NhY2hlIiwiJG9wdGlvbnMiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9ub3JtYWxpemVDbGFzcyIsImluYWN0aXZlIiwidGl0bGUiLCJfaG9pc3RlZF8yIiwiX2NyZWF0ZVZOb2RlIiwiX2NvbXBvbmVudF9GcmFtZVByZWxvYWRlciIsIl9jb21wb25lbnRfTm9kZXNNZXRob2RzIiwib25VcGRhdGUiLCJvblNlbGVjdEFsbE5vZGVzIiwib25BZGROZXdOb2RlIiwiJGV2ZW50IiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfY3JlYXRlQmxvY2siLCJfY29tcG9uZW50X2RyYWdnYWJsZSIsImtleSIsInRhZyIsInNlbGVjdGVkIiwiZ3JvdXAiLCJvbkVuZCIsIml0ZW0iLCJfd2l0aEN0eCIsIl9yZWYiLCJlbGVtZW50IiwiX2NvbXBvbmVudF9Ob2RlIiwib25Db250ZXh0bWVudSIsIl93aXRoTW9kaWZpZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==