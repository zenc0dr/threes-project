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
      ths: window.ths // Добавляем ссылку на window.ths
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
      this.square_position = (this.square_position + 2) % 150; // Изменено на 150
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQWNmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJtRDtBQUNWO0FBQ0w7O0FBRW5ELENBQWlFOztBQUVpQztBQUNsRyxpQ0FBaUMsZ0hBQWUsQ0FBQywwRUFBTSxhQUFhLDRFQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFjZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQzFCb007Ozs7Ozs7Ozs7Ozs7OztBQ0FWOzs7Ozs7Ozs7Ozs7Ozs7QUNBUTs7Ozs7Ozs7Ozs7Ozs7O0FDQVAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvRnJhbWVQcmVsb2FkZXIudnVlIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9Ob2RlLnZ1ZSIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZXNNZXRob2RzLnZ1ZSIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3NjcmVlbnMvRnJhbWUudnVlIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9GcmFtZVByZWxvYWRlci52dWU/N2JiZCIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZS52dWU/MDcwYiIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZXNNZXRob2RzLnZ1ZT8zNjAxIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvc2NyZWVucy9GcmFtZS52dWU/NzYwOCIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvRnJhbWVQcmVsb2FkZXIudnVlP2NlZDgiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL05vZGUudnVlPzE5OGIiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL05vZGVzTWV0aG9kcy52dWU/NGNjMSIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3NjcmVlbnMvRnJhbWUudnVlP2I0NjgiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL0ZyYW1lUHJlbG9hZGVyLnZ1ZT9hOGJiIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9Ob2RlLnZ1ZT8wYzAzIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9Ob2Rlc01ldGhvZHMudnVlP2I4NjAiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9zY3JlZW5zL0ZyYW1lLnZ1ZT9iZGUyIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9GcmFtZVByZWxvYWRlci52dWU/MmE4MCIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZS52dWU/NGNlMyIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZXNNZXRob2RzLnZ1ZT80NjIxIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvc2NyZWVucy9GcmFtZS52dWU/OWM3MyIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvRnJhbWVQcmVsb2FkZXIudnVlP2E3MWMiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL05vZGUudnVlPzhmY2YiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL05vZGVzTWV0aG9kcy52dWU/NWZmMyIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3NjcmVlbnMvRnJhbWUudnVlPzU2ZjAiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL0ZyYW1lUHJlbG9hZGVyLnZ1ZT83YmVhIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9Ob2RlLnZ1ZT8wZDJjIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9Ob2Rlc01ldGhvZHMudnVlPzQyODQiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9zY3JlZW5zL0ZyYW1lLnZ1ZT9jMTg1Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwidGhyZWVzLXByZWxvYWRlclwiPlxuICAgICAgICA8ZGl2IHYtaWY9XCJ0aHMuZGF0YS5wcm9jZXNzXCIgY2xhc3M9XCJ0aHJlZXMtcHJlbG9hZGVyX19zcXVhcmVcIiA6c3R5bGU9XCJ7IGxlZnQ6IHNxdWFyZV9wb3NpdGlvbiArICdweCcgfVwiPjwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3F1YXJlX3Bvc2l0aW9uOiAwLFxuICAgICAgICAgICAgYW5pbWF0aW9uX2ZyYW1lX2lkOiBudWxsLFxuICAgICAgICAgICAgdGhzOiB3aW5kb3cudGhzLCAvLyDQlNC+0LHQsNCy0LvRj9C10Lwg0YHRgdGL0LvQutGDINC90LAgd2luZG93LnRoc1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMudGhzLmRhdGEucHJvY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHVubW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxfYW5pbWF0aW9uKCk7XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICAndGhzLmRhdGEucHJvY2VzcycobmV3X3ZhbHVlKSB7XG4gICAgICAgICAgICBpZiAobmV3X3ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBhbmltYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5zcXVhcmVfcG9zaXRpb24gPSAodGhpcy5zcXVhcmVfcG9zaXRpb24gKyAyKSAlIDE1MDsgLy8g0JjQt9C80LXQvdC10L3QviDQvdCwIDE1MFxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25fZnJhbWVfaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2FuY2VsX2FuaW1hdGlvbigpIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uX2ZyYW1lX2lkKTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi50aHJlZXMtcHJlbG9hZGVyIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgJl9fc3F1YXJlIHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk0YjFkMTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbjxkaXYgdi1pZj1cIm5vZGUubmlkXCIgY2xhc3M9XCJ0aHJlZXMtbm9kZVwiPlxuICAgIHt7IG5vZGUubmlkIH19XG48L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJOb2RlXCIsXG4gICAgZW1pdHM6IFsndXBkYXRlJ10sXG4gICAgY29tcG9uZW50czoge1xuXG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBoYXNDc3NMYXllcigpIHtcbiAgICAgICAgICAgIC8vcmV0dXJuIHRoaXMubm9kZS5sYXllcnMuc29tZShsYXllciA9PiBsYXllci5hc3BlY3QgPT09ICd0aHJlZXMudW5pdHMudWlAY3NzJyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIG5vZGU6IG51bGxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcblxuICAgIH1cbn1cbjwvc2NyaXB0PlxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4udGhyZWVzLW5vZGUge1xuXG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuPGRpdiBjbGFzcz1cInRocmVlc19ub2Rlc19tZXRob2RzXCI+XG4gICAgPGRpdlxuICAgICAgICBAY2xpY2s9XCJhZGROZXdOb2RlXCJcbiAgICAgICAgY2xhc3M9XCJ0aHJlZXNfbm9kZXNfbWV0aG9kc19fYnV0dG9uXCJcbiAgICAgICAgOmNsYXNzPVwie2luYWN0aXZlOiFsaW5lc31cIlxuICAgICAgICB0aXRsZT1cItCU0L7QsdCw0LLQuNGC0Ywg0L3QvtC0INC90LAg0LvQuNC90LjRjlwiXG4gICAgPlxuICAgICAgICA8aSBjbGFzcz1cImljb24tY3ViZVwiPjwvaT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICAgIEBjbGljaz1cInNlbGVjdEFsbE5vZGVzXCJcbiAgICAgICAgY2xhc3M9XCJ0aHJlZXNfbm9kZXNfbWV0aG9kc19fYnV0dG9uXCJcbiAgICAgICAgOmNsYXNzPVwie2luYWN0aXZlOiFsaW5lc31cIlxuICAgICAgICB0aXRsZT1cItCS0YvQsdGA0LDRgtGMINCy0YHQtSDQvdC+0LTRiyDQvdCwINGB0YXQtdC80LVcIlxuICAgID5cbiAgICAgICAgPGkgY2xhc3M9XCJpY29uLWJ1bGxzZXllXCI+PC9pPlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICAgICAgQGNsaWNrPVwicmVtb3ZlTm9kZXNcIlxuICAgICAgICBjbGFzcz1cInRocmVlc19ub2Rlc19tZXRob2RzX19idXR0b25cIlxuICAgICAgICA6Y2xhc3M9XCJ7aW5hY3RpdmU6c2VsZWN0ZWRfbm9uZX1cIlxuICAgICAgICB0aXRsZT1cItCj0LTQsNC70LjRgtGMINCy0YvQsdGA0LDQvdC90YvQtSDQvdC+0LTRi1wiXG4gICAgPlxuICAgICAgICA8aSBjbGFzcz1cImljb24tdHJhc2gtMVwiID48L2k+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgICBAY2xpY2s9XCJjb3B5Tm9kZXNcIlxuICAgICAgICBjbGFzcz1cInRocmVlc19ub2Rlc19tZXRob2RzX19idXR0b25cIlxuICAgICAgICA6Y2xhc3M9XCJ7aW5hY3RpdmU6c2VsZWN0ZWRfbm9uZX1cIlxuICAgICAgICB0aXRsZT1cItCa0L7Qv9C40YDQvtCy0LDRgtGMINCy0YvQsdGA0LDQvdC90YvQtSDQvdC+0LTRi1wiXG4gICAgPlxuICAgICAgICA8aSBjbGFzcz1cImljb24tY29weVwiPjwvaT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGhyZWVzX25vZGVzX21ldGhvZHNfX2luZm9cIj5cbiAgICAgICAge3sgaW5mbyB9fVxuICAgIDwvZGl2PlxuICAgIDxGcmFtZVByZWxvYWRlciBjbGFzcz1cInRocmVlc19ub2Rlc19tZXRob2RzX19wcmVsb2FkZXJcIiAvPlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBGcmFtZVByZWxvYWRlciBmcm9tICcuL0ZyYW1lUHJlbG9hZGVyLnZ1ZSc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ05vZGVzTWV0aG9kcycsXG4gICAgcHJvcHM6IHtcbiAgICAgICAgZmlkOiBudWxsLFxuICAgICAgICBuaWRzOiBudWxsLFxuICAgICAgICBpbmZvOiBudWxsLFxuICAgICAgICBsaW5lczogbnVsbFxuICAgIH0sXG4gICAgZW1pdHM6IFsndXBkYXRlJywgJ3NlbGVjdEFsbE5vZGVzJywgJ2FkZE5ld05vZGUnXSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEZyYW1lUHJlbG9hZGVyXG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBzZWxlY3RlZF9ub25lKCkge1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzLm5pZHMgfHwgdGhpcy5uaWRzLmxlbmd0aCA8IDFcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2VsZWN0QWxsTm9kZXMoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzZWxlY3RBbGxOb2RlcycpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVOb2RlcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkX25vbmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocy5hcGkoe1xuICAgICAgICAgICAgICAgIGFwaTogJ25vZGVzLk5vZGU6cmVtb3ZlTm9kZXMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlkOiB0aGlzLmZpZCxcbiAgICAgICAgICAgICAgICAgICAgbmlkczogdGhpcy5uaWRzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgY29weU5vZGVzKClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRfbm9uZSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhzLmFwaSh7XG4gICAgICAgICAgICAgICAgYXBpOiAnbm9kZXMuTm9kZTpjb3B5Tm9kZXMnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlkOiB0aGlzLmZpZCxcbiAgICAgICAgICAgICAgICAgICAgbmlkczogdGhpcy5uaWRzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgYWRkTmV3Tm9kZSgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2FkZE5ld05vZGUnKVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLnRocmVlc19ub2Rlc19tZXRob2RzIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgJl9faW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cblxuICAgICZfX3ByZWxvYWRlciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG4gICAgJl9fYnV0dG9uIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIGNvbG9yOiAjNzc3Nzc3O1xuICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcbiAgICAgICAgbWFyZ2luOiAzcHg7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZlN2JhO1xuICAgICAgICAgICAgY29sb3I6ICM3OTU1MTI7XG4gICAgICAgIH1cblxuICAgICAgICAmLmluYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gICAgICAgICAgICBjb2xvcjogI2NkY2RjZDtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPE5vZGVzTWV0aG9kc1xuICAgICAgICA6ZmlkPVwiZmlkXCJcbiAgICAgICAgOm5pZHM9XCJzZWxlY3RlZF9ub2Rlc1wiXG4gICAgICAgIDppbmZvPVwiaW5mb1wiXG4gICAgICAgIDpsaW5lcz1cInByb2dyYW1fbGluZXNfY291bnRcIlxuICAgICAgICBAdXBkYXRlPVwibG9hZFByb2dyYW1cIlxuICAgICAgICBAc2VsZWN0QWxsTm9kZXM9XCJzZWxlY3RBbGxOb2Rlc1wiXG4gICAgICAgIEBhZGROZXdOb2RlPVwiY3JlYXRlTm9kZVwiXG4gICAgLz5cbiAgICA8ZGl2IGNsYXNzPVwiZnJhbWVcIiBAY2xpY2s9XCJjbGVhclNlbGVjdGlvbigkZXZlbnQpXCI+XG4gICAgICAgIDxkcmFnZ2FibGVcbiAgICAgICAgICAgIHYtZm9yPVwiKGxpbmUsIGxpbmVfaW5kZXgpIGluIHByb2dyYW1cIlxuICAgICAgICAgICAgOmtleT1cImxpbmVfaW5kZXhcIlxuICAgICAgICAgICAgdi1tb2RlbD1cInByb2dyYW1bbGluZV9pbmRleF1cIlxuICAgICAgICAgICAgdGFnPVwiZGl2XCJcbiAgICAgICAgICAgIGNsYXNzPVwiZnJhbWVfX2xpbmVcIlxuICAgICAgICAgICAgOmNsYXNzPVwie3NlbGVjdGVkOiBsaW5lU2VsZWN0ZWQobGluZV9pbmRleCl9XCJcbiAgICAgICAgICAgIGdyb3VwPVwibm9kZXNcIlxuICAgICAgICAgICAgaXRlbS1rZXk9XCJuaWRcIlxuICAgICAgICAgICAgOm11bHRpLWRyYWc9XCJ0cnVlXCJcbiAgICAgICAgICAgIDpzZWxlY3RlZC1pdGVtcz1cInNlbGVjdGVkX25vZGVzXCJcbiAgICAgICAgICAgIEBlbmQ9XCJzYXZlUHJvZ3JhbVwiXG4gICAgICAgICAgICBAY2xpY2s9XCJzZWxlY3RMaW5lKGxpbmVfaW5kZXgpXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHRlbXBsYXRlICNpdGVtPVwie2VsZW1lbnQ6bm9kZX1cIj5cbiAgICAgICAgICAgICAgICA8Tm9kZVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZyYW1lX19ub2RlXCJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydzZWxlY3RlZCc6aXNOb2RlU2VsZWN0ZWQobm9kZSl9XCJcbiAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwiZ2V0Tm9kZVN0eWxlKG5vZGUpXCJcbiAgICAgICAgICAgICAgICAgICAgOm5vZGU9XCJub2RlXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiaGFuZGxlTm9kZUNsaWNrKG5vZGUsICRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICBAY29udGV4dG1lbnUucHJldmVudD1cImhhbmRsZU5vZGVSaWdodENsaWNrKG5vZGUsICRldmVudClcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2RyYWdnYWJsZT5cbiAgICAgICAgPGRpdiBAY2xpY2s9XCJhZGRQcm9ncmFtTGluZVwiIGNsYXNzPVwiZnJhbWVfX2FkZC1saW5lXCIgdGl0bGU9XCLQlNC+0LHQsNCy0LjRgtGMINC90L7QstGD0Y4g0LvQuNC90LjRjlwiPis8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgZHJhZ2dhYmxlIGZyb20gJ3Z1ZWRyYWdnYWJsZSc7XG5pbXBvcnQgTm9kZXNNZXRob2RzIGZyb20gXCIuLi9jb21wb25lbnRzL05vZGVzTWV0aG9kcy52dWVcIjtcbmltcG9ydCBOb2RlIGZyb20gXCIuLi9jb21wb25lbnRzL05vZGUudnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnRnJhbWUnLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgZHJhZ2dhYmxlLFxuICAgICAgICBOb2Rlc01ldGhvZHMsXG4gICAgICAgIE5vZGUsXG4gICAgfSxcbiAgICBwcm9wczogWydiYWNrZW5kJywgJ2ZpZCddLFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9ncmFtOiBbXSwgLy8gRFNMINC/0YDQvtCz0YDQsNC80LzQsFxuICAgICAgICAgICAgc2VsZWN0ZWRfbGluZV9pbmRleDogMCxcbiAgICAgICAgICAgIHNlbGVjdGVkX25vZGVzOiBbXSwgLy8g0JzQsNGB0YHQuNCyIG5pZCDQstGL0LHRgNCw0L3QvdGL0YUg0L3QvtC00L7QslxuICAgICAgICAgICAgbm9kZV9pbl9wYW5lbDogbnVsbCAvLyDQodGO0LTQsCDQstGB0YLQsNCy0LjRgtGMINC90L7QtCDRh9GC0L7QsdGLINC+0YLQutGA0YvRgtGMINC/0LDQvdC10LvRjFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgLy90aGlzLmxvYWRQcm9ncmFtKCk7XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBzZWxlY3RlZF9ub2RlcygpIHtcbiAgICAgICAgICAgIHRocy5kYXRhLm5pZHMgPSB0aGlzLnNlbGVjdGVkX25vZGVzXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGluZm8oKSB7XG4gICAgICAgICAgICByZXR1cm4gJ9CS0YvQtNC10LvQtdC90L46ICcgKyB0aGlzLnNlbGVjdGVkX25vZGVzLmxlbmd0aFxuICAgICAgICB9LFxuICAgICAgICBwcm9ncmFtX2xpbmVzX2NvdW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZ3JhbT8ubGVuZ3RoID8/IDBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAvLyDQntGC0LrRgNGL0YLRjCDQv9Cw0L3QtdC70Ywg0L3QvtC00LBcbiAgICAgICAgb3Blbk5vZGVQYW5lbChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVfaW5fcGFuZWwgPSBub2RlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JLRi9C00LXQu9C10L3QuNC1INC70LjQvdC40LhcbiAgICAgICAgbGluZVNlbGVjdGVkKGxpbmVfaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkX2xpbmVfaW5kZXggPT09IGxpbmVfaW5kZXhcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQl9Cw0LrRgNGL0YLRjCDQv9Cw0L3QtdC70Ywg0L3QvtC00LBcbiAgICAgICAgY2xvc2VOb2RlUGFuZWwoKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVfaW5fcGFuZWwgPSBudWxsXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0J7Rh9C40YHRgtC40YLRjCDQvNC90L7QttC10YHRgtCy0LXQvdC90L7QtSDQstGL0LTQtdC70LXQvdC40LVcbiAgICAgICAgY2xlYXJTZWxlY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcygnLmZyYW1lLCAuZnJhbWVfX2xpbmUnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbm9kZXMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQktGL0LHRgNCw0YLRjCDQstGB0LUg0L3QvtC00YtcbiAgICAgICAgc2VsZWN0QWxsTm9kZXMoKSB7XG4gICAgICAgICAgICBsZXQgYWxsX25vZGVzID0gW11cbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbS5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgICAgICAgICAgIGxpbmUuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxsX25vZGVzLnB1c2gobm9kZS5uaWQpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkX25vZGVzID0gYWxsX25vZGVzXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0J7RhNC+0YDQvNC40YLRjCDRgdGC0LjQu9GMINC90L7QtNCwINCyINC30LDQstC40YHQuNC80L7RgdGC0Lgg0L7RgiDQtdCz0L4g0YHQu9C+0Y8gY3NzXG4gICAgICAgIGdldE5vZGVTdHlsZShub2RlKSB7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgbGV0IHN0eWxlID0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc1cHggN3B4JyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzZlYjM5ZCcsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogJzUwcHgnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIG5vZGUubGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxheWVyID0gbm9kZS5sYXllcnNbaV1cbiAgICAgICAgICAgICAgICBpZiAobGF5ZXIuYXNwZWN0ID09PSAndGhyZWVzLnVuaXRzLnVpQGNzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxheWVyLmV4ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSBsYXllci5leGVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHlsZVxuICAgICAgICAgICAgKi9cbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQldGB0LvQuCDQvdC+0LQg0LLRi9C00LXQu9C10L1cbiAgICAgICAgaXNOb2RlU2VsZWN0ZWQobm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRfbm9kZXMuaW5jbHVkZXMobm9kZS5uaWQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCd0LDQttCw0YLQuNC1INC70LXQstC+0Lkg0LrQvdC+0L/QutC+0Lkg0LzRi9GI0Lgg0L3QsCDQvdC+0LTQtVxuICAgICAgICBoYW5kbGVOb2RlQ2xpY2sobm9kZSwgZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5kZXRhaWwgPT09IDIpIHJldHVybjsgLy8g0J/RgNC+0L/Rg9GB0LrQsNC10Lwg0LTQstC+0LnQvdC+0Lkg0LrQu9C40LpcblxuICAgICAgICAgICAgY29uc3QgbmlkID0gbm9kZS5uaWQ7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuICAgICAgICAgICAgICAgIC8vINCc0L3QvtC20LXRgdGC0LLQtdC90L3Ri9C5INCy0YvQsdC+0YAg0YEgQ3RybFxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWxlY3RlZF9ub2Rlcy5pbmRleE9mKG5pZCk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkX25vZGVzLnB1c2gobmlkKSAvLyDQlNC+0LHQsNCy0LvRj9C10LwsINC10YHQu9C4INC90LUg0LLRi9Cx0YDQsNC9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9ub2Rlcy5zcGxpY2UoaW5kZXgsIDEpOyAvLyDQo9Cx0LjRgNCw0LXQvCwg0LXRgdC70Lgg0YPQttC1INCy0YvQsdGA0LDQvVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g0J7QtNC40L3QvtGH0L3Ri9C5INCy0YvQsdC+0YAg0LHQtdC3IEN0cmxcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZF9ub2Rlcy5sZW5ndGggPT09IDEgJiYgdGhpcy5zZWxlY3RlZF9ub2Rlc1swXSA9PT0gbmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbm9kZXMgPSBbXSAvLyDQodC90LjQvNCw0LXQvCDQstGL0LHQvtGALCDQtdGB0LvQuCDQutC70LjQutC90YPQu9C4INC90LAg0YPQttC1INCy0YvQsdGA0LDQvdC90YvQuVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbm9kZXMgPSBbbmlkXSAvLyDQktGL0LHQuNGA0LDQtdC8INGC0L7Qu9GM0LrQviDRjdGC0L7RgiDQvdC+0LRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0J3QsNC20LDRgtC40LUg0L/RgNCw0LLQvtC5INC60L3QvtC/0LrQvtC5INC80YvRiNC4INC90LAg0L3QvtC00LVcbiAgICAgICAgaGFuZGxlTm9kZVJpZ2h0Q2xpY2sobm9kZSwgZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zZWxlY3RlZF9ub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5Ob2RlUGFuZWwobm9kZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQodC+0LfQtNCw0YLRjCDQvdC+0LLRi9C5INC90L7QtFxuICAgICAgICBjcmVhdGVOb2RlKCkge1xuICAgICAgICAgICAgdGhzLmFwaSh7XG4gICAgICAgICAgICAgICAgYXBpOiAnbm9kZXMuTm9kZTpjcmVhdGUnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlkOiB0aGlzLmZpZCxcbiAgICAgICAgICAgICAgICAgICAgbGluZV9pbmRleDogdGhpcy5zZWxlY3RlZF9saW5lX2luZGV4XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFByb2dyYW0oKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQn9GA0Lgg0L7QsdC90L7QstC70LXQvdC40Lgg0L3QvtC00LBcbiAgICAgICAgb25Ob2RlVXBkYXRlZChub2RlKSB7XG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZV9pbl9wYW5lbCA9IG5vZGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubG9hZFByb2dyYW0oKVxuICAgICAgICB9LFxuXG4gICAgICAgIHNlbGVjdExpbmUobGluZV9pbmRleCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9saW5lX2luZGV4ID0gbGluZV9pbmRleFxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCU0L7QsdCw0LLQuNGC0Ywg0L/RgNC+0LPRgNCw0LzQvNC90YPRjiDQu9C40L3QuNGOXG4gICAgICAgIGFkZFByb2dyYW1MaW5lKCkge1xuICAgICAgICAgICAgdGhzLmFwaSh7XG4gICAgICAgICAgICAgICAgYXBpOiAnZnJhbWVzLkZyYW1lOmFkZExpbmUnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgZmlkOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRQcm9ncmFtKClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JfQsNCz0YDRg9C30LjRgtGMINC/0YDQvtCz0YDQsNC80LzRg1xuICAgICAgICBsb2FkUHJvZ3JhbSgpIHtcbiAgICAgICAgICAgIHRocy5hcGkoe1xuICAgICAgICAgICAgICAgIGFwaTogJ2ZyYW1lcy5GcmFtZTpsb2FkUHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBmaWQ6IHRoaXMuZmlkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3JhbSA9IHJlc3BvbnNlLnByb2dyYW07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCh0L7RhdGA0LDQvdC40YLRjCDQv9GA0L7Qs9GA0LDQvNC80YNcbiAgICAgICAgc2F2ZVByb2dyYW0oKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkX25vZGVzID0gW11cbiAgICAgICAgICAgIHRocy5hcGkoe1xuICAgICAgICAgICAgICAgIGFwaTogJ2ZyYW1lcy5GcmFtZTpzYXZlUHJvZ3JhbScsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBmaWQ6IHRoaXMuZmlkLFxuICAgICAgICAgICAgICAgICAgICBwcm9ncmFtOiB0aGlzLnByb2dyYW1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkUHJvZ3JhbSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5mcmFtZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICAgLm5vZGUtdGVzdCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0Nzk1YjE7XG4gICAgfVxuXG4gICAgJl9fbGluZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZ2FwOiA1cHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XG5cbiAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAtM3B4IDAgMCAwICM4NTAwZmY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19ub2RlIHtcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xuXG4gICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICMwMDdiZmY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19hZGQtbGluZSB7XG4gICAgICAgIG1hcmdpbjogM3B4O1xuICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgICAgICAgY29sb3I6ICM3OTc5Nzk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgICAgICAgY29sb3I6ICM3OTc5Nzk7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3N0eWxlPlxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudGhyZWVzLXByZWxvYWRlciB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLnRocmVlcy1wcmVsb2FkZXJfX3NxdWFyZSB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NGIxZDE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92dWUvY29tcG9uZW50cy9GcmFtZVByZWxvYWRlci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQVJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLnRocmVlcy1wcmVsb2FkZXIge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFxuICAgICZfX3NxdWFyZSB7XFxuICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGIxZDE7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRocmVlc19ub2Rlc19tZXRob2RzIHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi50aHJlZXNfbm9kZXNfbWV0aG9kc19faW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sb3I6ICM3MDcwNzA7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi50aHJlZXNfbm9kZXNfbWV0aG9kc19fcHJlbG9hZGVyIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4udGhyZWVzX25vZGVzX21ldGhvZHNfX2J1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgYmFja2dyb3VuZDogI2U5ZTllOTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGNvbG9yOiAjNzc3Nzc3O1xcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxuICBtYXJnaW46IDNweDtcXG59XFxuLnRocmVlc19ub2Rlc19tZXRob2RzX19idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2ZmZTdiYTtcXG4gIGNvbG9yOiAjNzk1NTEyO1xcbn1cXG4udGhyZWVzX25vZGVzX21ldGhvZHNfX2J1dHRvbi5pbmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xcbiAgY29sb3I6ICNjZGNkY2Q7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92dWUvY29tcG9uZW50cy9Ob2Rlc01ldGhvZHMudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUFKO0FBRUk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFSO0FBR0k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBRFI7QUFJSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBRlI7QUFJUTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQUZaO0FBS1E7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFIWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4udGhyZWVzX25vZGVzX21ldGhvZHMge1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICAmX19pbmZvIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBjb2xvcjogIzcwNzA3MDtcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgfVxcblxcbiAgICAmX19wcmVsb2FkZXIge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgJl9fYnV0dG9uIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDNweCA1cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgY29sb3I6ICM3Nzc3Nzc7XFxuICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcXG4gICAgICAgIG1hcmdpbjogM3B4O1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZTdiYTtcXG4gICAgICAgICAgICBjb2xvcjogIzc5NTUxMjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYuaW5hY3RpdmUge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XFxuICAgICAgICAgICAgY29sb3I6ICNjZGNkY2Q7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZyYW1lIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4uZnJhbWUgLm5vZGUtdGVzdCB7XFxuICBiYWNrZ3JvdW5kOiAjNDc5NWIxO1xcbn1cXG4uZnJhbWVfX2xpbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogNXB4O1xcbiAgbWluLWhlaWdodDogNDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbn1cXG4uZnJhbWVfX2xpbmUuc2VsZWN0ZWQge1xcbiAgYm94LXNoYWRvdzogLTNweCAwIDAgMCAjODUwMGZmO1xcbn1cXG4uZnJhbWVfX25vZGUge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG4uZnJhbWVfX25vZGUuc2VsZWN0ZWQge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICMwMDdiZmY7XFxufVxcbi5mcmFtZV9fYWRkLWxpbmUge1xcbiAgbWFyZ2luOiAzcHg7XFxuICBwYWRkaW5nOiA3cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcbiAgY29sb3I6ICM3OTc5Nzk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZnJhbWVfX2FkZC1saW5lOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XFxuICBjb2xvcjogIzc5Nzk3OTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Z1ZS9zY3JlZW5zL0ZyYW1lLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBQ0ksbUJBQUE7QUFBUjtBQUdJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRFI7QUFHUTtFQUNJLDhCQUFBO0FBRFo7QUFLSTtFQUNJLFlBQUE7QUFIUjtBQUtRO0VBQ0ksbUNBQUE7QUFIWjtBQU9JO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFMUjtBQU9RO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBTFpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLmZyYW1lIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG5cXG4gICAgLm5vZGUtdGVzdCB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjNDc5NWIxO1xcbiAgICB9XFxuXFxuICAgICZfX2xpbmUge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICAgICAgbWluLWhlaWdodDogNDBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcXG4gICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xcblxcbiAgICAgICAgJi5zZWxlY3RlZCB7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogLTNweCAwIDAgMCAjODUwMGZmO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX25vZGUge1xcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xcblxcbiAgICAgICAgJi5zZWxlY3RlZCB7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4ICMwMDdiZmY7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fYWRkLWxpbmUge1xcbiAgICAgICAgbWFyZ2luOiAzcHg7XFxuICAgICAgICBwYWRkaW5nOiA3cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcbiAgICAgICAgY29sb3I6ICM3OTc5Nzk7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcXG4gICAgICAgICAgICBjb2xvcjogIzc5Nzk3OTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZyYW1lUHJlbG9hZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYwNzJkNGYwJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIyNTM0N2E5Jmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2Rlc01ldGhvZHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzU1M2JhZTgmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZyYW1lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWVhOTQ4NTFhJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0ZyYW1lUHJlbG9hZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MDcyZDRmMFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZyYW1lUHJlbG9hZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9GcmFtZVByZWxvYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0ZyYW1lUHJlbG9hZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYwNzJkNGYwJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9hcHAvcGx1Z2lucy96ZW4vdGhyZWVzL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJzcmMvdnVlL2NvbXBvbmVudHMvRnJhbWVQcmVsb2FkZXIudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjYwNzJkNGYwXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNjA3MmQ0ZjAnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCc2MDcyZDRmMCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRnJhbWVQcmVsb2FkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYwNzJkNGYwXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzYwNzJkNGYwJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMjUzNDdhOVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTIyNTM0N2E5Jmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9hcHAvcGx1Z2lucy96ZW4vdGhyZWVzL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJzcmMvdnVlL2NvbXBvbmVudHMvTm9kZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMjI1MzQ3YTlcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcyMjUzNDdhOScsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzIyNTM0N2E5JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ob2RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMjUzNDdhOVwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCcyMjUzNDdhOScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vTm9kZXNNZXRob2RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NTUzYmFlOFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05vZGVzTWV0aG9kcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vTm9kZXNNZXRob2RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vTm9kZXNNZXRob2RzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc1NTNiYWU4Jmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9hcHAvcGx1Z2lucy96ZW4vdGhyZWVzL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJzcmMvdnVlL2NvbXBvbmVudHMvTm9kZXNNZXRob2RzLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI3NTUzYmFlOFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzc1NTNiYWU4JywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnNzU1M2JhZTgnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05vZGVzTWV0aG9kcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzU1M2JhZThcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignNzU1M2JhZTgnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0ZyYW1lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lYTk0ODUxYVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZyYW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9GcmFtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0ZyYW1lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWVhOTQ4NTFhJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9hcHAvcGx1Z2lucy96ZW4vdGhyZWVzL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJzcmMvdnVlL3NjcmVlbnMvRnJhbWUudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcImVhOTQ4NTFhXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnZWE5NDg1MWEnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCdlYTk0ODUxYScsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRnJhbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWVhOTQ4NTFhXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJ2VhOTQ4NTFhJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9GcmFtZVByZWxvYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9GcmFtZVByZWxvYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGVzTWV0aG9kcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2Rlc01ldGhvZHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9GcmFtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9GcmFtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9GcmFtZVByZWxvYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjA3MmQ0ZjBcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2RlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMjUzNDdhOVwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGVzTWV0aG9kcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzU1M2JhZThcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9GcmFtZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWE5NDg1MWFcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZyYW1lUHJlbG9hZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYwNzJkNGYwJmxhbmc9c2Nzc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMjUzNDdhOSZsYW5nPXNjc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGVzTWV0aG9kcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NTUzYmFlOCZsYW5nPXNjc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZyYW1lLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWVhOTQ4NTFhJmxhbmc9c2Nzc1wiIl0sIm5hbWVzIjpbImRhdGEiLCJzcXVhcmVfcG9zaXRpb24iLCJhbmltYXRpb25fZnJhbWVfaWQiLCJ0aHMiLCJ3aW5kb3ciLCJtb3VudGVkIiwicHJvY2VzcyIsImFuaW1hdGUiLCJ1bm1vdW50ZWQiLCJjYW5jZWxfYW5pbWF0aW9uIiwid2F0Y2giLCJ0aHNEYXRhUHJvY2VzcyIsIm5ld192YWx1ZSIsIm1ldGhvZHMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIm5hbWUiLCJlbWl0cyIsImNvbXBvbmVudHMiLCJjb21wdXRlZCIsImhhc0Nzc0xheWVyIiwicHJvcHMiLCJub2RlIiwiRnJhbWVQcmVsb2FkZXIiLCJmaWQiLCJuaWRzIiwiaW5mbyIsImxpbmVzIiwic2VsZWN0ZWRfbm9uZSIsImxlbmd0aCIsInNlbGVjdEFsbE5vZGVzIiwiJGVtaXQiLCJyZW1vdmVOb2RlcyIsIl90aGlzIiwiYXBpIiwidGhlbiIsImNvcHlOb2RlcyIsIl90aGlzMiIsImFkZE5ld05vZGUiLCJkcmFnZ2FibGUiLCJOb2Rlc01ldGhvZHMiLCJOb2RlIiwicHJvZ3JhbSIsInNlbGVjdGVkX2xpbmVfaW5kZXgiLCJzZWxlY3RlZF9ub2RlcyIsIm5vZGVfaW5fcGFuZWwiLCJwcm9ncmFtX2xpbmVzX2NvdW50IiwiX3RoaXMkcHJvZ3JhbSRsZW5ndGgiLCJfdGhpcyRwcm9ncmFtIiwib3Blbk5vZGVQYW5lbCIsImxpbmVTZWxlY3RlZCIsImxpbmVfaW5kZXgiLCJjbG9zZU5vZGVQYW5lbCIsImNsZWFyU2VsZWN0aW9uIiwiZXZlbnQiLCJ0YXJnZXQiLCJtYXRjaGVzIiwiYWxsX25vZGVzIiwiZm9yRWFjaCIsImxpbmUiLCJwdXNoIiwibmlkIiwiZ2V0Tm9kZVN0eWxlIiwiaXNOb2RlU2VsZWN0ZWQiLCJpbmNsdWRlcyIsImhhbmRsZU5vZGVDbGljayIsImRldGFpbCIsImN0cmxLZXkiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJoYW5kbGVOb2RlUmlnaHRDbGljayIsImNyZWF0ZU5vZGUiLCJsb2FkUHJvZ3JhbSIsIm9uTm9kZVVwZGF0ZWQiLCJzZWxlY3RMaW5lIiwiYWRkUHJvZ3JhbUxpbmUiLCJyZXNwb25zZSIsIl90aGlzMyIsInNhdmVQcm9ncmFtIiwiX3RoaXM0IiwiX2NyZWF0ZUVsZW1lbnRCbG9jayIsIl9ob2lzdGVkXzEiLCIkZGF0YSIsInN0eWxlIiwiX25vcm1hbGl6ZVN0eWxlIiwibGVmdCIsIiRwcm9wcyIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwib25DbGljayIsIl9jYWNoZSIsIiRvcHRpb25zIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfbm9ybWFsaXplQ2xhc3MiLCJpbmFjdGl2ZSIsInRpdGxlIiwiX2hvaXN0ZWRfMiIsIl9jcmVhdGVWTm9kZSIsIl9jb21wb25lbnRfRnJhbWVQcmVsb2FkZXIiLCJfY29tcG9uZW50X05vZGVzTWV0aG9kcyIsIm9uVXBkYXRlIiwib25TZWxlY3RBbGxOb2RlcyIsIm9uQWRkTmV3Tm9kZSIsIiRldmVudCIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiX2NyZWF0ZUJsb2NrIiwiX2NvbXBvbmVudF9kcmFnZ2FibGUiLCJrZXkiLCJ0YWciLCJzZWxlY3RlZCIsImdyb3VwIiwib25FbmQiLCJpdGVtIiwiX3dpdGhDdHgiLCJfcmVmIiwiZWxlbWVudCIsIl9jb21wb25lbnRfTm9kZSIsIm9uQ29udGV4dG1lbnUiLCJfd2l0aE1vZGlmaWVycyJdLCJzb3VyY2VSb290IjoiIn0=