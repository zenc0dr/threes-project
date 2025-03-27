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
/* harmony import */ var _NodesStore_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodesStore.vue */ "./src/vue/components/NodesStore.vue");
/* harmony import */ var _modal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.vue */ "./src/vue/components/modal.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'NodesMethods',
  props: {
    nid: null,
    nids: null,
    info: null,
    lines: null
  },
  emits: ['update', 'selectAllNodes'],
  components: {
    FramePreloader: _FramePreloader_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    NodesStore: _NodesStore_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    modal: _modal_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      nodes_store: false
    };
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
      this.nodes_store = true;

      //this.$emit('update')
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/NodesStore.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/NodesStore.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icon_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon.vue */ "./src/vue/components/icon.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "NodesStore",
  components: {
    icon: _icon_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      store_nodes: []
    };
  },
  mounted: function mounted() {
    this.getStoreNodes();
  },
  methods: {
    getStoreNodes: function getStoreNodes() {
      var _this = this;
      ths.api({
        api: 'nodes.store:get-store-nodes',
        then: function then(response) {
          _this.store_nodes = response.store_nodes;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/icon.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/icon.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "icon",
  props: {
    src: null,
    width: '30px',
    height: '30px'
  },
  data: function data() {
    return {
      aliases: {
        '@node_types': '/plugins/zen/threes/assets/images/node_types'
      }
    };
  },
  computed: {
    aliased_src: function aliased_src() {
      if (!this.src) {
        return '';
      }
      var processed = this.src;
      for (var key in this.aliases) {
        processed = processed.replace(key, this.aliases[key]);
      }
      return processed;
    },
    style: function style() {
      if (!this.aliased_src) {
        return {};
      }
      return {
        backgroundImage: "url(".concat(this.aliased_src, ")"),
        width: this.width,
        height: this.height
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/modal.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/modal.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "modal",
  emits: ['close'],
  props: {
    show: {
      type: Boolean,
      "default": false
    },
    heading: {
      type: String,
      "default": null
    },
    maxWidth: {
      type: String,
      "default": '90%'
    },
    loading: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    style: function style() {
      return {
        maxWidth: this.maxWidth
      };
    }
  },
  mounted: function mounted() {
    document.addEventListener('keydown', this.handleEscapeKey);
  },
  beforeUnmount: function beforeUnmount() {
    document.removeEventListener('keydown', this.handleEscapeKey);
  },
  methods: {
    close: function close() {
      this.$emit('close');
    },
    handleEscapeKey: function handleEscapeKey(event) {
      if (event.key === 'Escape') {
        this.close();
      }
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
    // createNode() {
    //     ths.api({
    //         api: 'nodes.node:create',
    //         data: {
    //             nid: this.nid,
    //             line_index: this.selected_line_index
    //         },
    //         then: () => {
    //             this.getNodes()
    //         },
    //     });
    // },
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
      var _this = this;
      ths.api({
        api: 'nodes.node:add-line',
        data: {
          nid: this.nid
        },
        then: function then(response) {
          _this.getNodes();
        }
      });
    },
    // Получить ноды
    getNodes: function getNodes() {
      var _this2 = this;
      ths.api({
        api: 'nodes.node:nodes',
        data: {
          nid: this.nid
        },
        then: function then(response) {
          _this2.nodes = response.nodes;
        }
      });
    },
    // Сохранить программу
    setNodes: function setNodes() {
      var _this3 = this;
      this.selected_nodes = [];
      ths.api({
        api: 'frames.Frame:setNodes',
        data: {
          nid: this.nid,
          nodes: this.nodes
        },
        then: function then() {
          _this3.getNodes();
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
  var _component_NodesStore = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("NodesStore");
  var _component_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("modal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.addNewNode && $options.addNewNode.apply($options, arguments);
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["threes_nodes_methods__button", {
      inactive: !$props.lines
    }]),
    title: "Добавить нод на линию"
  }, _cache[5] || (_cache[5] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icon-cube"
  }, null, -1 /* HOISTED */)]), 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.selectAllNodes && $options.selectAllNodes.apply($options, arguments);
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["threes_nodes_methods__button", {
      inactive: !$props.lines
    }]),
    title: "Выбрать все ноды на схеме"
  }, _cache[6] || (_cache[6] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icon-bullseye"
  }, null, -1 /* HOISTED */)]), 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.removeNodes && $options.removeNodes.apply($options, arguments);
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["threes_nodes_methods__button", {
      inactive: $options.selected_none
    }]),
    title: "Удалить выбранные ноды"
  }, _cache[7] || (_cache[7] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icon-trash-1"
  }, null, -1 /* HOISTED */)]), 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.copyNodes && $options.copyNodes.apply($options, arguments);
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["threes_nodes_methods__button", {
      inactive: $options.selected_none
    }]),
    title: "Копировать выбранные ноды"
  }, _cache[8] || (_cache[8] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "icon-copy"
  }, null, -1 /* HOISTED */)]), 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.info), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FramePreloader, {
    "class": "threes_nodes_methods__preloader"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_modal, {
    show: $data.nodes_store,
    onClose: _cache[4] || (_cache[4] = function ($event) {
      return $data.nodes_store = false;
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_NodesStore)];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/NodesStore.vue?vue&type=template&id=bb89efd2":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/NodesStore.vue?vue&type=template&id=bb89efd2 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "nodes-store"
};
var _hoisted_2 = {
  "class": "nodes-store__items"
};
var _hoisted_3 = {
  "class": "nodes-store__item"
};
var _hoisted_4 = {
  "class": "nodes-store__name"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.store_nodes, function (node) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icon, {
      src: node.icon,
      "class": "nodes-store__icon"
    }, null, 8 /* PROPS */, ["src"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(node.name), 1 /* TEXT */)]);
  }), 256 /* UNKEYED_FRAGMENT */))])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/icon.vue?vue&type=template&id=a0e74300":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/icon.vue?vue&type=template&id=a0e74300 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": "threes-icon",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.style)
  }, null, 4 /* STYLE */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/modal.vue?vue&type=template&id=18d4b8b6":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/modal.vue?vue&type=template&id=18d4b8b6 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "threes-modal__loading"
};
var _hoisted_2 = {
  key: 1
};
var _hoisted_3 = {
  "class": "threes-modal__header"
};
var _hoisted_4 = {
  "class": "threes-modal__header__title"
};
var _hoisted_5 = {
  "class": "threes-modal__content"
};
var _hoisted_6 = {
  "class": "threes-modal__footer"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.show ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    "class": "threes-modal",
    onKeydown: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(function () {
      return $options.close && $options.close.apply($options, arguments);
    }, ["esc"])),
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.close && $options.close.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.style),
    "class": "threes-modal__body",
    ref: "modalBody",
    onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {}, ["stop"]))
  }, [$props.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, " Загрузка... ")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [$props.heading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.heading), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "heading", {
    key: 1
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.close && $options.close.apply($options, arguments);
    }),
    "class": "threes-modal__header__close"
  }, _cache[4] || (_cache[4] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "bi bi-x"
  }, null, -1 /* HOISTED */)]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "footer")])]))], 4 /* STYLE */)], 32 /* NEED_HYDRATION */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
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
    onSelectAllNodes: $options.selectAllNodes
  }, null, 8 /* PROPS */, ["nid", "nids", "info", "lines", "onUpdate", "onSelectAllNodes"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
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
      onEnd: $options.setNodes,
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/NodesStore.vue?vue&type=style&index=0&id=bb89efd2&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/NodesStore.vue?vue&type=style&index=0&id=bb89efd2&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".nodes-store {\n  padding: 15px;\n}\n.nodes-store__items {\n  display: flex;\n}\n.nodes-store__item {\n  display: flex;\n  border: 1px solid #666;\n  border-radius: 4px;\n  padding: 9px 10px;\n  margin: 5px;\n  font-size: 16px;\n}\n.nodes-store__name {\n  padding: 10px;\n}", "",{"version":3,"sources":["webpack://./src/vue/components/NodesStore.vue"],"names":[],"mappings":"AACA;EACI,aAAA;AAAJ;AAEI;EACI,aAAA;AAAR;AAEI;EACI,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;AAAR;AAKI;EACI,aAAA;AAHR","sourcesContent":["\n.nodes-store {\n    padding: 15px;\n\n    &__items {\n        display: flex;\n    }\n    &__item {\n        display: flex;\n        border: 1px solid #666;\n        border-radius: 4px;\n        padding: 9px 10px;\n        margin: 5px;\n        font-size: 16px;\n    }\n    &__icon {\n\n    }\n    &__name {\n        padding: 10px;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/icon.vue?vue&type=style&index=0&id=a0e74300&lang=scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/icon.vue?vue&type=style&index=0&id=a0e74300&lang=scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".threes-icon {\n  width: 30px;\n  height: 30px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}", "",{"version":3,"sources":["webpack://./src/vue/components/icon.vue"],"names":[],"mappings":"AACA;EACI,WAAA;EACA,YAAA;EACA,wBAAA;EACA,4BAAA;EACA,2BAAA;AAAJ","sourcesContent":["\n.threes-icon {\n    width: 30px;\n    height: 30px;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/modal.vue?vue&type=style&index=0&id=18d4b8b6&lang=scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/modal.vue?vue&type=style&index=0&id=18d4b8b6&lang=scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".threes-modal {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6117647059);\n  overflow-y: auto;\n  z-index: 100;\n}\n.threes-modal__body {\n  margin-top: 50px;\n  padding: 15px;\n  border-radius: 10px;\n  background-color: #fff;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.threes-modal__loading {\n  text-align: center;\n}\n.threes-modal__header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.threes-modal__header__title {\n  color: #424242;\n  font-size: 19px;\n  margin-right: 10px;\n}\n.threes-modal__header__close {\n  color: #000;\n}\n.threes-modal__header__close i {\n  cursor: pointer;\n  border-radius: 50%;\n  padding: 0px 3px;\n  padding-top: 2px;\n  font-size: 24px;\n  transition: 200ms;\n  color: #7b7b7b;\n}\n.threes-modal__header__close i:hover {\n  background: #ebebeb;\n  color: #636363;\n}\n.threes-modal__content {\n  margin-top: 10px;\n}\n.threes-modal__footer {\n  margin-top: 20px;\n}", "",{"version":3,"sources":["webpack://./src/vue/components/modal.vue"],"names":[],"mappings":"AACA;EACI,eAAA;EACA,aAAA;EACA,uBAAA;EACA,uBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,uCAAA;EACA,gBAAA;EACA,YAAA;AAAJ;AAEI;EACI,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,WAAA;EACA,gBAAA;EACA,gBAAA;AAAR;AAGI;EACI,kBAAA;AADR;AAII;EACI,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,mBAAA;AAFR;AAIQ;EACI,cAAA;EACA,eAAA;EACA,kBAAA;AAFZ;AAKQ;EACI,WAAA;AAHZ;AAIY;EACI,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;AAFhB;AAIgB;EACI,mBAAA;EACA,cAAA;AAFpB;AAQI;EACI,gBAAA;AANR;AASI;EACI,gBAAA;AAPR","sourcesContent":["\n.threes-modal {\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #0000009c;\n    overflow-y: auto;\n    z-index: 100;\n\n    &__body {\n        margin-top: 50px;\n        padding: 15px;\n        border-radius: 10px;\n        background-color: #fff;\n        width: 100%;\n        max-height: 90vh;\n        overflow-y: auto;\n    }\n\n    &__loading {\n        text-align: center;\n    }\n\n    &__header {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n        align-items: center;\n\n        &__title {\n            color: #424242;\n            font-size: 19px;\n            margin-right: 10px;\n        }\n\n        &__close {\n            color: #000;\n            i {\n                cursor: pointer;\n                border-radius: 50%;\n                padding: 0px 3px;\n                padding-top: 2px;\n                font-size: 24px;\n                transition: 200ms;\n                color: #7b7b7b;\n\n                &:hover {\n                    background: #ebebeb;\n                    color: #636363;\n                }\n            }\n        }\n    }\n\n    &__content {\n        margin-top: 10px;\n    }\n\n    &__footer {\n        margin-top: 20px;\n    }\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/NodesStore.vue?vue&type=style&index=0&id=bb89efd2&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/NodesStore.vue?vue&type=style&index=0&id=bb89efd2&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodesStore_vue_vue_type_style_index_0_id_bb89efd2_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NodesStore.vue?vue&type=style&index=0&id=bb89efd2&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/NodesStore.vue?vue&type=style&index=0&id=bb89efd2&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodesStore_vue_vue_type_style_index_0_id_bb89efd2_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodesStore_vue_vue_type_style_index_0_id_bb89efd2_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/icon.vue?vue&type=style&index=0&id=a0e74300&lang=scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/icon.vue?vue&type=style&index=0&id=a0e74300&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_icon_vue_vue_type_style_index_0_id_a0e74300_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./icon.vue?vue&type=style&index=0&id=a0e74300&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/icon.vue?vue&type=style&index=0&id=a0e74300&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_icon_vue_vue_type_style_index_0_id_a0e74300_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_icon_vue_vue_type_style_index_0_id_a0e74300_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/modal.vue?vue&type=style&index=0&id=18d4b8b6&lang=scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/modal.vue?vue&type=style&index=0&id=18d4b8b6&lang=scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_modal_vue_vue_type_style_index_0_id_18d4b8b6_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./modal.vue?vue&type=style&index=0&id=18d4b8b6&lang=scss */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/modal.vue?vue&type=style&index=0&id=18d4b8b6&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_modal_vue_vue_type_style_index_0_id_18d4b8b6_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_modal_vue_vue_type_style_index_0_id_18d4b8b6_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./src/vue/components/NodesStore.vue":
/*!*******************************************!*\
  !*** ./src/vue/components/NodesStore.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NodesStore_vue_vue_type_template_id_bb89efd2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodesStore.vue?vue&type=template&id=bb89efd2 */ "./src/vue/components/NodesStore.vue?vue&type=template&id=bb89efd2");
/* harmony import */ var _NodesStore_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodesStore.vue?vue&type=script&lang=js */ "./src/vue/components/NodesStore.vue?vue&type=script&lang=js");
/* harmony import */ var _NodesStore_vue_vue_type_style_index_0_id_bb89efd2_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NodesStore.vue?vue&type=style&index=0&id=bb89efd2&lang=scss */ "./src/vue/components/NodesStore.vue?vue&type=style&index=0&id=bb89efd2&lang=scss");
/* harmony import */ var _app_plugins_zen_threes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_app_plugins_zen_threes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_NodesStore_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_NodesStore_vue_vue_type_template_id_bb89efd2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/vue/components/NodesStore.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/vue/components/icon.vue":
/*!*************************************!*\
  !*** ./src/vue/components/icon.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icon_vue_vue_type_template_id_a0e74300__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon.vue?vue&type=template&id=a0e74300 */ "./src/vue/components/icon.vue?vue&type=template&id=a0e74300");
/* harmony import */ var _icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.vue?vue&type=script&lang=js */ "./src/vue/components/icon.vue?vue&type=script&lang=js");
/* harmony import */ var _icon_vue_vue_type_style_index_0_id_a0e74300_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon.vue?vue&type=style&index=0&id=a0e74300&lang=scss */ "./src/vue/components/icon.vue?vue&type=style&index=0&id=a0e74300&lang=scss");
/* harmony import */ var _app_plugins_zen_threes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_app_plugins_zen_threes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_icon_vue_vue_type_template_id_a0e74300__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/vue/components/icon.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/vue/components/modal.vue":
/*!**************************************!*\
  !*** ./src/vue/components/modal.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal_vue_vue_type_template_id_18d4b8b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.vue?vue&type=template&id=18d4b8b6 */ "./src/vue/components/modal.vue?vue&type=template&id=18d4b8b6");
/* harmony import */ var _modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.vue?vue&type=script&lang=js */ "./src/vue/components/modal.vue?vue&type=script&lang=js");
/* harmony import */ var _modal_vue_vue_type_style_index_0_id_18d4b8b6_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.vue?vue&type=style&index=0&id=18d4b8b6&lang=scss */ "./src/vue/components/modal.vue?vue&type=style&index=0&id=18d4b8b6&lang=scss");
/* harmony import */ var _app_plugins_zen_threes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_app_plugins_zen_threes_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_modal_vue_vue_type_template_id_18d4b8b6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/vue/components/modal.vue"]])
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

/***/ "./src/vue/components/NodesStore.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./src/vue/components/NodesStore.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodesStore_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodesStore_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NodesStore.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/NodesStore.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/vue/components/icon.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/vue/components/icon.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_icon_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./icon.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/icon.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/vue/components/modal.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./src/vue/components/modal.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./modal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/modal.vue?vue&type=script&lang=js");
 

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

/***/ "./src/vue/components/NodesStore.vue?vue&type=template&id=bb89efd2":
/*!*************************************************************************!*\
  !*** ./src/vue/components/NodesStore.vue?vue&type=template&id=bb89efd2 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodesStore_vue_vue_type_template_id_bb89efd2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodesStore_vue_vue_type_template_id_bb89efd2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NodesStore.vue?vue&type=template&id=bb89efd2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/NodesStore.vue?vue&type=template&id=bb89efd2");


/***/ }),

/***/ "./src/vue/components/icon.vue?vue&type=template&id=a0e74300":
/*!*******************************************************************!*\
  !*** ./src/vue/components/icon.vue?vue&type=template&id=a0e74300 ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_icon_vue_vue_type_template_id_a0e74300__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_icon_vue_vue_type_template_id_a0e74300__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./icon.vue?vue&type=template&id=a0e74300 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/icon.vue?vue&type=template&id=a0e74300");


/***/ }),

/***/ "./src/vue/components/modal.vue?vue&type=template&id=18d4b8b6":
/*!********************************************************************!*\
  !*** ./src/vue/components/modal.vue?vue&type=template&id=18d4b8b6 ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_modal_vue_vue_type_template_id_18d4b8b6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_modal_vue_vue_type_template_id_18d4b8b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./modal.vue?vue&type=template&id=18d4b8b6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/modal.vue?vue&type=template&id=18d4b8b6");


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

/***/ "./src/vue/components/NodesStore.vue?vue&type=style&index=0&id=bb89efd2&lang=scss":
/*!****************************************************************************************!*\
  !*** ./src/vue/components/NodesStore.vue?vue&type=style&index=0&id=bb89efd2&lang=scss ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NodesStore_vue_vue_type_style_index_0_id_bb89efd2_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NodesStore.vue?vue&type=style&index=0&id=bb89efd2&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/NodesStore.vue?vue&type=style&index=0&id=bb89efd2&lang=scss");


/***/ }),

/***/ "./src/vue/components/icon.vue?vue&type=style&index=0&id=a0e74300&lang=scss":
/*!**********************************************************************************!*\
  !*** ./src/vue/components/icon.vue?vue&type=style&index=0&id=a0e74300&lang=scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_icon_vue_vue_type_style_index_0_id_a0e74300_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./icon.vue?vue&type=style&index=0&id=a0e74300&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/icon.vue?vue&type=style&index=0&id=a0e74300&lang=scss");


/***/ }),

/***/ "./src/vue/components/modal.vue?vue&type=style&index=0&id=18d4b8b6&lang=scss":
/*!***********************************************************************************!*\
  !*** ./src/vue/components/modal.vue?vue&type=style&index=0&id=18d4b8b6&lang=scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_modal_vue_vue_type_style_index_0_id_18d4b8b6_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./modal.vue?vue&type=style&index=0&id=18d4b8b6&lang=scss */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/components/modal.vue?vue&type=style&index=0&id=18d4b8b6&lang=scss");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLEVBY2Y7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQmtEO0FBQ1Y7QUFDTDs7QUFFbEQsQ0FBZ0U7O0FBRWtDO0FBQ2xHLGlDQUFpQyxnSEFBZSxDQUFDLHlFQUFNLGFBQWEsMkVBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQWNmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJtRDtBQUNWO0FBQ0w7O0FBRW5ELENBQWlFOztBQUVpQztBQUNsRyxpQ0FBaUMsZ0hBQWUsQ0FBQywwRUFBTSxhQUFhLDRFQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFjZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCbUQ7QUFDVjtBQUNMOztBQUVuRCxDQUFpRTs7QUFFaUM7QUFDbEcsaUNBQWlDLGdIQUFlLENBQUMsMEVBQU0sYUFBYSw0RUFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBY2Y7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUMxQm9NOzs7Ozs7Ozs7Ozs7Ozs7QUNBVjs7Ozs7Ozs7Ozs7Ozs7O0FDQVE7Ozs7Ozs7Ozs7Ozs7OztBQ0FGOzs7Ozs7Ozs7Ozs7Ozs7QUNBTjs7Ozs7Ozs7Ozs7Ozs7O0FDQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL0ZyYW1lUHJlbG9hZGVyLnZ1ZSIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZS52dWUiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL05vZGVzTWV0aG9kcy52dWUiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL05vZGVzU3RvcmUudnVlIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9pY29uLnZ1ZSIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvbW9kYWwudnVlIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvc2NyZWVucy9GcmFtZS52dWUiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL0ZyYW1lUHJlbG9hZGVyLnZ1ZT83YmJkIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9Ob2RlLnZ1ZT8wNzBiIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9Ob2Rlc01ldGhvZHMudnVlPzM2MDEiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL05vZGVzU3RvcmUudnVlP2Q1NWMiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL2ljb24udnVlPzAxZDAiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL21vZGFsLnZ1ZT8wOTg4Iiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvc2NyZWVucy9GcmFtZS52dWU/NzYwOCIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvRnJhbWVQcmVsb2FkZXIudnVlP2NlZDgiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL05vZGUudnVlPzE5OGIiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL05vZGVzTWV0aG9kcy52dWU/NGNjMSIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZXNTdG9yZS52dWU/NTkxNyIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvaWNvbi52dWU/MWQzMyIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvbW9kYWwudnVlPzMxYWIiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9zY3JlZW5zL0ZyYW1lLnZ1ZT9iNDY4Iiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9GcmFtZVByZWxvYWRlci52dWU/YThiYiIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZS52dWU/MGMwMyIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZXNNZXRob2RzLnZ1ZT9iODYwIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9Ob2Rlc1N0b3JlLnZ1ZT8wZDI0Iiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9pY29uLnZ1ZT84MzkxIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9tb2RhbC52dWU/ZjU5NiIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3NjcmVlbnMvRnJhbWUudnVlP2JkZTIiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL0ZyYW1lUHJlbG9hZGVyLnZ1ZT8yYTgwIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9Ob2RlLnZ1ZT80Y2UzIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvY29tcG9uZW50cy9Ob2Rlc01ldGhvZHMudnVlPzQ2MjEiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL05vZGVzU3RvcmUudnVlPzMzNGUiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL2ljb24udnVlPzJiOWYiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS9jb21wb25lbnRzL21vZGFsLnZ1ZT9lNjFiIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvc2NyZWVucy9GcmFtZS52dWU/OWM3MyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInRocmVlcy1wcmVsb2FkZXJcIj5cbiAgICAgICAgPGRpdiB2LWlmPVwidGhzLmRhdGEucHJvY2Vzc1wiIGNsYXNzPVwidGhyZWVzLXByZWxvYWRlcl9fc3F1YXJlXCIgOnN0eWxlPVwieyBsZWZ0OiBzcXVhcmVfcG9zaXRpb24gKyAncHgnIH1cIj48L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNxdWFyZV9wb3NpdGlvbjogMCxcbiAgICAgICAgICAgIGFuaW1hdGlvbl9mcmFtZV9pZDogbnVsbCxcbiAgICAgICAgICAgIHRoczogd2luZG93LnRocyxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnRocy5kYXRhLnByb2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSgpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHVubW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5jYW5jZWxfYW5pbWF0aW9uKClcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgICd0aHMuZGF0YS5wcm9jZXNzJyhuZXdfdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChuZXdfdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGUoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbF9hbmltYXRpb24oKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBhbmltYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5zcXVhcmVfcG9zaXRpb24gPSAodGhpcy5zcXVhcmVfcG9zaXRpb24gKyAyKSAlIDE1MFxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25fZnJhbWVfaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKVxuICAgICAgICB9LFxuICAgICAgICBjYW5jZWxfYW5pbWF0aW9uKCkge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25fZnJhbWVfaWQpXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4udGhyZWVzLXByZWxvYWRlciB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgICZfX3NxdWFyZSB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGIxZDE7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG48ZGl2IHYtaWY9XCJub2RlLm5pZFwiIGNsYXNzPVwidGhyZWVzLW5vZGVcIj5cbiAgICB7eyBub2RlLm5pZCB9fVxuPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiTm9kZVwiLFxuICAgIGVtaXRzOiBbJ3VwZGF0ZSddLFxuICAgIGNvbXBvbmVudHM6IHtcblxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgaGFzQ3NzTGF5ZXIoKSB7XG4gICAgICAgICAgICAvL3JldHVybiB0aGlzLm5vZGUubGF5ZXJzLnNvbWUobGF5ZXIgPT4gbGF5ZXIuYXNwZWN0ID09PSAndGhyZWVzLnVuaXRzLnVpQGNzcycpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBub2RlOiBudWxsXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG5cbiAgICB9XG59XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLnRocmVlcy1ub2RlIHtcblxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbjxkaXYgY2xhc3M9XCJ0aHJlZXNfbm9kZXNfbWV0aG9kc1wiPlxuICAgIDxkaXZcbiAgICAgICAgQGNsaWNrPVwiYWRkTmV3Tm9kZVwiXG4gICAgICAgIGNsYXNzPVwidGhyZWVzX25vZGVzX21ldGhvZHNfX2J1dHRvblwiXG4gICAgICAgIDpjbGFzcz1cIntpbmFjdGl2ZTohbGluZXN9XCJcbiAgICAgICAgdGl0bGU9XCLQlNC+0LHQsNCy0LjRgtGMINC90L7QtCDQvdCwINC70LjQvdC40Y5cIlxuICAgID5cbiAgICAgICAgPGkgY2xhc3M9XCJpY29uLWN1YmVcIj48L2k+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgICBAY2xpY2s9XCJzZWxlY3RBbGxOb2Rlc1wiXG4gICAgICAgIGNsYXNzPVwidGhyZWVzX25vZGVzX21ldGhvZHNfX2J1dHRvblwiXG4gICAgICAgIDpjbGFzcz1cIntpbmFjdGl2ZTohbGluZXN9XCJcbiAgICAgICAgdGl0bGU9XCLQktGL0LHRgNCw0YLRjCDQstGB0LUg0L3QvtC00Ysg0L3QsCDRgdGF0LXQvNC1XCJcbiAgICA+XG4gICAgICAgIDxpIGNsYXNzPVwiaWNvbi1idWxsc2V5ZVwiPjwvaT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICAgIEBjbGljaz1cInJlbW92ZU5vZGVzXCJcbiAgICAgICAgY2xhc3M9XCJ0aHJlZXNfbm9kZXNfbWV0aG9kc19fYnV0dG9uXCJcbiAgICAgICAgOmNsYXNzPVwie2luYWN0aXZlOnNlbGVjdGVkX25vbmV9XCJcbiAgICAgICAgdGl0bGU9XCLQo9C00LDQu9C40YLRjCDQstGL0LHRgNCw0L3QvdGL0LUg0L3QvtC00YtcIlxuICAgID5cbiAgICAgICAgPGkgY2xhc3M9XCJpY29uLXRyYXNoLTFcIiA+PC9pPlxuICAgIDwvZGl2PlxuICAgIDxkaXZcbiAgICAgICAgQGNsaWNrPVwiY29weU5vZGVzXCJcbiAgICAgICAgY2xhc3M9XCJ0aHJlZXNfbm9kZXNfbWV0aG9kc19fYnV0dG9uXCJcbiAgICAgICAgOmNsYXNzPVwie2luYWN0aXZlOnNlbGVjdGVkX25vbmV9XCJcbiAgICAgICAgdGl0bGU9XCLQmtC+0L/QuNGA0L7QstCw0YLRjCDQstGL0LHRgNCw0L3QvdGL0LUg0L3QvtC00YtcIlxuICAgID5cbiAgICAgICAgPGkgY2xhc3M9XCJpY29uLWNvcHlcIj48L2k+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInRocmVlc19ub2Rlc19tZXRob2RzX19pbmZvXCI+XG4gICAgICAgIHt7IGluZm8gfX1cbiAgICA8L2Rpdj5cbiAgICA8RnJhbWVQcmVsb2FkZXIgY2xhc3M9XCJ0aHJlZXNfbm9kZXNfbWV0aG9kc19fcHJlbG9hZGVyXCIgLz5cbjwvZGl2PlxuPG1vZGFsIDpzaG93PVwibm9kZXNfc3RvcmVcIiBAY2xvc2U9XCJub2Rlc19zdG9yZSA9IGZhbHNlXCI+XG4gICAgPHRlbXBsYXRlICNkZWZhdWx0PlxuICAgICAgICA8Tm9kZXNTdG9yZSAvPlxuICAgIDwvdGVtcGxhdGU+XG48L21vZGFsPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgRnJhbWVQcmVsb2FkZXIgZnJvbSAnLi9GcmFtZVByZWxvYWRlci52dWUnXG5pbXBvcnQgTm9kZXNTdG9yZSBmcm9tIFwiLi9Ob2Rlc1N0b3JlLnZ1ZVwiXG5pbXBvcnQgbW9kYWwgZnJvbSBcIi4vbW9kYWwudnVlXCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdOb2Rlc01ldGhvZHMnLFxuICAgIHByb3BzOiB7XG4gICAgICAgIG5pZDogbnVsbCxcbiAgICAgICAgbmlkczogbnVsbCxcbiAgICAgICAgaW5mbzogbnVsbCxcbiAgICAgICAgbGluZXM6IG51bGxcbiAgICB9LFxuICAgIGVtaXRzOiBbJ3VwZGF0ZScsICdzZWxlY3RBbGxOb2RlcyddLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgRnJhbWVQcmVsb2FkZXIsXG4gICAgICAgIE5vZGVzU3RvcmUsXG4gICAgICAgIG1vZGFsXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbm9kZXNfc3RvcmU6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHNlbGVjdGVkX25vbmUoKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMubmlkcyB8fCB0aGlzLm5pZHMubGVuZ3RoIDwgMVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzZWxlY3RBbGxOb2RlcygpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NlbGVjdEFsbE5vZGVzJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZU5vZGVzKClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRfbm9uZSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhzLmFwaSh7XG4gICAgICAgICAgICAgICAgYXBpOiAnbm9kZXMuTm9kZTpyZW1vdmVOb2RlcycsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBuaWQ6IHRoaXMubmlkLFxuICAgICAgICAgICAgICAgICAgICBuaWRzOiB0aGlzLm5pZHNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBjb3B5Tm9kZXMoKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZF9ub25lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHMuYXBpKHtcbiAgICAgICAgICAgICAgICBhcGk6ICdub2Rlcy5Ob2RlOmNvcHlOb2RlcycsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBuaWQ6IHRoaXMubmlkLFxuICAgICAgICAgICAgICAgICAgICBuaWRzOiB0aGlzLm5pZHNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBhZGROZXdOb2RlKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5ub2Rlc19zdG9yZSA9IHRydWVcblxuXG5cbiAgICAgICAgICAgIC8vdGhpcy4kZW1pdCgndXBkYXRlJylcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi50aHJlZXNfbm9kZXNfbWV0aG9kcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICZfX2luZm8ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBjb2xvcjogIzcwNzA3MDtcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG5cbiAgICAmX19wcmVsb2FkZXIge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cblxuICAgICZfX2J1dHRvbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogM3B4IDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2U5ZTllOTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBjb2xvcjogIzc3Nzc3NztcbiAgICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XG4gICAgICAgIG1hcmdpbjogM3B4O1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZTdiYTtcbiAgICAgICAgICAgIGNvbG9yOiAjNzk1NTEyO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5pbmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAgICAgICAgICAgY29sb3I6ICNjZGNkY2Q7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuPGRpdiBjbGFzcz1cIm5vZGVzLXN0b3JlXCI+XG4gICAgPGRpdiBjbGFzcz1cIm5vZGVzLXN0b3JlX19pdGVtc1wiPlxuICAgICAgICA8ZGl2IHYtZm9yPVwibm9kZSBpbiBzdG9yZV9ub2Rlc1wiIGNsYXNzPVwibm9kZXMtc3RvcmVfX2l0ZW1cIj5cbiAgICAgICAgICAgIDxpY29uIDpzcmM9XCJub2RlLmljb25cIiBjbGFzcz1cIm5vZGVzLXN0b3JlX19pY29uXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2Rlcy1zdG9yZV9fbmFtZVwiPlxuICAgICAgICAgICAgICAgIHt7IG5vZGUubmFtZSB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBpY29uIGZyb20gXCIuL2ljb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIk5vZGVzU3RvcmVcIixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGljb25cbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdG9yZV9ub2RlczogW11cbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5nZXRTdG9yZU5vZGVzKClcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0U3RvcmVOb2RlcygpIHtcbiAgICAgICAgICAgIHRocy5hcGkoe1xuICAgICAgICAgICAgICAgIGFwaTogJ25vZGVzLnN0b3JlOmdldC1zdG9yZS1ub2RlcycsXG4gICAgICAgICAgICAgICAgdGhlbjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlX25vZGVzID0gcmVzcG9uc2Uuc3RvcmVfbm9kZXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5ub2Rlcy1zdG9yZSB7XG4gICAgcGFkZGluZzogMTVweDtcblxuICAgICZfX2l0ZW1zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgJl9faXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgcGFkZGluZzogOXB4IDEwcHg7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgICZfX2ljb24ge1xuXG4gICAgfVxuICAgICZfX25hbWUge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInRocmVlcy1pY29uXCIgOnN0eWxlPVwic3R5bGVcIj48L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiaWNvblwiLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHNyYzogbnVsbCxcbiAgICAgICAgd2lkdGg6ICczMHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMzBweCdcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbGlhc2VzOiB7XG4gICAgICAgICAgICAgICAgJ0Bub2RlX3R5cGVzJzogJy9wbHVnaW5zL3plbi90aHJlZXMvYXNzZXRzL2ltYWdlcy9ub2RlX3R5cGVzJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBhbGlhc2VkX3NyYygpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zcmMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHByb2Nlc3NlZCA9IHRoaXMuc3JjO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5hbGlhc2VzKSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc2VkID0gcHJvY2Vzc2VkLnJlcGxhY2Uoa2V5LCB0aGlzLmFsaWFzZXNba2V5XSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3NlZDtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGUoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYWxpYXNlZF9zcmMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt0aGlzLmFsaWFzZWRfc3JjfSlgLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4udGhyZWVzLWljb24ge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgdi1pZj1cInNob3dcIiBjbGFzcz1cInRocmVlcy1tb2RhbFwiIEBrZXlkb3duLmVzYz1cImNsb3NlXCIgQGNsaWNrPVwiY2xvc2VcIj5cbiAgICAgICAgPGRpdiA6c3R5bGU9XCJzdHlsZVwiIGNsYXNzPVwidGhyZWVzLW1vZGFsX19ib2R5XCIgcmVmPVwibW9kYWxCb2R5XCIgQGNsaWNrLnN0b3A+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJsb2FkaW5nXCIgY2xhc3M9XCJ0aHJlZXMtbW9kYWxfX2xvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICDQl9Cw0LPRgNGD0LfQutCwLi4uXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgdi1lbHNlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZXMtbW9kYWxfX2hlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGhyZWVzLW1vZGFsX19oZWFkZXJfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBoZWFkaW5nIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiaGVhZGluZ1wiPjwvc2xvdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IEBjbGljaz1cImNsb3NlXCIgY2xhc3M9XCJ0aHJlZXMtbW9kYWxfX2hlYWRlcl9fY2xvc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmkteFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRocmVlcy1tb2RhbF9fY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRocmVlcy1tb2RhbF9fZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJmb290ZXJcIj48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICBlbWl0czogWydjbG9zZSddLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHNob3c6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBoZWFkaW5nOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBtYXhXaWR0aDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJzkwJSdcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZGluZzoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHN0eWxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogdGhpcy5tYXhXaWR0aFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVFc2NhcGVLZXkpO1xuICAgIH0sXG4gICAgYmVmb3JlVW5tb3VudCgpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlRXNjYXBlS2V5KTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgY2xvc2UoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVFc2NhcGVLZXkoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi50aHJlZXMtbW9kYWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwOWM7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB6LWluZGV4OiAxMDA7XG5cbiAgICAmX19ib2R5IHtcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDkwdmg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxuXG4gICAgJl9fbG9hZGluZyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgY29sb3I6ICM0MjQyNDI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmX19jbG9zZSB7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDNweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcbiAgICAgICAgICAgICAgICBjb2xvcjogIzdiN2I3YjtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzYzNjM2MztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAmX19mb290ZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPE5vZGVzTWV0aG9kc1xuICAgICAgICA6bmlkPVwibmlkXCJcbiAgICAgICAgOm5pZHM9XCJzZWxlY3RlZF9ub2Rlc1wiXG4gICAgICAgIDppbmZvPVwiaW5mb1wiXG4gICAgICAgIDpsaW5lcz1cIm5vZGVzX2xpbmVzX2NvdW50XCJcbiAgICAgICAgQHVwZGF0ZT1cImdldE5vZGVzXCJcbiAgICAgICAgQHNlbGVjdEFsbE5vZGVzPVwic2VsZWN0QWxsTm9kZXNcIlxuICAgIC8+XG4gICAgPGRpdiBjbGFzcz1cImZyYW1lXCIgQGNsaWNrPVwiY2xlYXJTZWxlY3Rpb24oJGV2ZW50KVwiPlxuICAgICAgICA8ZHJhZ2dhYmxlXG4gICAgICAgICAgICB2LWZvcj1cIihsaW5lLCBsaW5lX2luZGV4KSBpbiBub2Rlc1wiXG4gICAgICAgICAgICA6a2V5PVwibGluZV9pbmRleFwiXG4gICAgICAgICAgICB2LW1vZGVsPVwibm9kZXNbbGluZV9pbmRleF1cIlxuICAgICAgICAgICAgdGFnPVwiZGl2XCJcbiAgICAgICAgICAgIGNsYXNzPVwiZnJhbWVfX2xpbmVcIlxuICAgICAgICAgICAgOmNsYXNzPVwie3NlbGVjdGVkOiBsaW5lU2VsZWN0ZWQobGluZV9pbmRleCl9XCJcbiAgICAgICAgICAgIGdyb3VwPVwibm9kZXNcIlxuICAgICAgICAgICAgaXRlbS1rZXk9XCJuaWRcIlxuICAgICAgICAgICAgOm11bHRpLWRyYWc9XCJ0cnVlXCJcbiAgICAgICAgICAgIDpzZWxlY3RlZC1pdGVtcz1cInNlbGVjdGVkX25vZGVzXCJcbiAgICAgICAgICAgIEBlbmQ9XCJzZXROb2Rlc1wiXG4gICAgICAgICAgICBAY2xpY2s9XCJzZWxlY3RMaW5lKGxpbmVfaW5kZXgpXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHRlbXBsYXRlICNpdGVtPVwie2VsZW1lbnQ6bm9kZX1cIj5cbiAgICAgICAgICAgICAgICA8Tm9kZVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZyYW1lX19ub2RlXCJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydzZWxlY3RlZCc6aXNOb2RlU2VsZWN0ZWQobm9kZSl9XCJcbiAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwiZ2V0Tm9kZVN0eWxlKG5vZGUpXCJcbiAgICAgICAgICAgICAgICAgICAgOm5vZGU9XCJub2RlXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiaGFuZGxlTm9kZUNsaWNrKG5vZGUsICRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICBAY29udGV4dG1lbnUucHJldmVudD1cImhhbmRsZU5vZGVSaWdodENsaWNrKG5vZGUsICRldmVudClcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2RyYWdnYWJsZT5cbiAgICAgICAgPGRpdiBAY2xpY2s9XCJhZGRMaW5lXCIgY2xhc3M9XCJmcmFtZV9fYWRkLWxpbmVcIiB0aXRsZT1cItCU0L7QsdCw0LLQuNGC0Ywg0L3QvtCy0YPRjiDQu9C40L3QuNGOXCI+KzwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBkcmFnZ2FibGUgZnJvbSAndnVlZHJhZ2dhYmxlJztcbmltcG9ydCBOb2Rlc01ldGhvZHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvTm9kZXNNZXRob2RzLnZ1ZVwiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvTm9kZS52dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdGcmFtZScsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBkcmFnZ2FibGUsXG4gICAgICAgIE5vZGVzTWV0aG9kcyxcbiAgICAgICAgTm9kZSxcbiAgICB9LFxuICAgIHByb3BzOiBbJ2JhY2tlbmQnLCAnbmlkJ10sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5vZGVzOiBbXSwgLy8gRFNMINC/0YDQvtCz0YDQsNC80LzQsFxuICAgICAgICAgICAgc2VsZWN0ZWRfbGluZV9pbmRleDogMCxcbiAgICAgICAgICAgIHNlbGVjdGVkX25vZGVzOiBbXSwgLy8g0JzQsNGB0YHQuNCyIG5pZCDQstGL0LHRgNCw0L3QvdGL0YUg0L3QvtC00L7QslxuICAgICAgICAgICAgbm9kZV9pbl9wYW5lbDogbnVsbCAvLyDQodGO0LTQsCDQstGB0YLQsNCy0LjRgtGMINC90L7QtCDRh9GC0L7QsdGLINC+0YLQutGA0YvRgtGMINC/0LDQvdC10LvRjFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5nZXROb2RlcygpO1xuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgc2VsZWN0ZWRfbm9kZXMoKSB7XG4gICAgICAgICAgICB0aHMuZGF0YS5uaWRzID0gdGhpcy5zZWxlY3RlZF9ub2Rlc1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBpbmZvKCkge1xuICAgICAgICAgICAgcmV0dXJuICfQktGL0LTQtdC70LXQvdC+OiAnICsgdGhpcy5zZWxlY3RlZF9ub2Rlcy5sZW5ndGhcbiAgICAgICAgfSxcbiAgICAgICAgbm9kZXNfbGluZXNfY291bnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2Rlcz8ubGVuZ3RoID8/IDBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAvLyDQntGC0LrRgNGL0YLRjCDQv9Cw0L3QtdC70Ywg0L3QvtC00LBcbiAgICAgICAgb3Blbk5vZGVQYW5lbChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVfaW5fcGFuZWwgPSBub2RlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JLRi9C00LXQu9C10L3QuNC1INC70LjQvdC40LhcbiAgICAgICAgbGluZVNlbGVjdGVkKGxpbmVfaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkX2xpbmVfaW5kZXggPT09IGxpbmVfaW5kZXhcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQl9Cw0LrRgNGL0YLRjCDQv9Cw0L3QtdC70Ywg0L3QvtC00LBcbiAgICAgICAgY2xvc2VOb2RlUGFuZWwoKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVfaW5fcGFuZWwgPSBudWxsXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0J7Rh9C40YHRgtC40YLRjCDQvNC90L7QttC10YHRgtCy0LXQvdC90L7QtSDQstGL0LTQtdC70LXQvdC40LVcbiAgICAgICAgY2xlYXJTZWxlY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcygnLmZyYW1lLCAuZnJhbWVfX2xpbmUnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbm9kZXMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQktGL0LHRgNCw0YLRjCDQstGB0LUg0L3QvtC00YtcbiAgICAgICAgc2VsZWN0QWxsTm9kZXMoKSB7XG4gICAgICAgICAgICBsZXQgYWxsX25vZGVzID0gW11cbiAgICAgICAgICAgIHRoaXMubm9kZXMuZm9yRWFjaChsaW5lID0+IHtcbiAgICAgICAgICAgICAgICBsaW5lLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsbF9ub2Rlcy5wdXNoKG5vZGUubmlkKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9ub2RlcyA9IGFsbF9ub2Rlc1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCe0YTQvtGA0LzQuNGC0Ywg0YHRgtC40LvRjCDQvdC+0LTQsCDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0LXQs9C+INGB0LvQvtGPIGNzc1xuICAgICAgICBnZXROb2RlU3R5bGUobm9kZSkge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIGxldCBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNXB4IDdweCcsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyM2ZWIzOWQnLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzNweCcsXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6ICc1MHB4J1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBub2RlLmxheWVycykge1xuICAgICAgICAgICAgICAgIGxldCBsYXllciA9IG5vZGUubGF5ZXJzW2ldXG4gICAgICAgICAgICAgICAgaWYgKGxheWVyLmFzcGVjdCA9PT0gJ3RocmVlcy51bml0cy51aUBjc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXllci5leGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0gbGF5ZXIuZXhlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3R5bGVcbiAgICAgICAgICAgICovXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0JXRgdC70Lgg0L3QvtC0INCy0YvQtNC10LvQtdC9XG4gICAgICAgIGlzTm9kZVNlbGVjdGVkKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkX25vZGVzLmluY2x1ZGVzKG5vZGUubmlkKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQndCw0LbQsNGC0LjQtSDQu9C10LLQvtC5INC60L3QvtC/0LrQvtC5INC80YvRiNC4INC90LAg0L3QvtC00LVcbiAgICAgICAgaGFuZGxlTm9kZUNsaWNrKG5vZGUsIGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGV0YWlsID09PSAyKSByZXR1cm47IC8vINCf0YDQvtC/0YPRgdC60LDQtdC8INC00LLQvtC50L3QvtC5INC60LvQuNC6XG5cbiAgICAgICAgICAgIGNvbnN0IG5pZCA9IG5vZGUubmlkO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICAvLyDQnNC90L7QttC10YHRgtCy0LXQvdC90YvQuSDQstGL0LHQvtGAINGBIEN0cmxcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuc2VsZWN0ZWRfbm9kZXMuaW5kZXhPZihuaWQpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZF9ub2Rlcy5wdXNoKG5pZCkgLy8g0JTQvtCx0LDQstC70Y/QtdC8LCDQtdGB0LvQuCDQvdC1INCy0YvQsdGA0LDQvVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbm9kZXMuc3BsaWNlKGluZGV4LCAxKTsgLy8g0KPQsdC40YDQsNC10LwsINC10YHQu9C4INGD0LbQtSDQstGL0LHRgNCw0L1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vINCe0LTQuNC90L7Rh9C90YvQuSDQstGL0LHQvtGAINCx0LXQtyBDdHJsXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRfbm9kZXMubGVuZ3RoID09PSAxICYmIHRoaXMuc2VsZWN0ZWRfbm9kZXNbMF0gPT09IG5pZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkX25vZGVzID0gW10gLy8g0KHQvdC40LzQsNC10Lwg0LLRi9Cx0L7RgCwg0LXRgdC70Lgg0LrQu9C40LrQvdGD0LvQuCDQvdCwINGD0LbQtSDQstGL0LHRgNCw0L3QvdGL0LlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkX25vZGVzID0gW25pZF0gLy8g0JLRi9Cx0LjRgNCw0LXQvCDRgtC+0LvRjNC60L4g0Y3RgtC+0YIg0L3QvtC0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCd0LDQttCw0YLQuNC1INC/0YDQsNCy0L7QuSDQutC90L7Qv9C60L7QuSDQvNGL0YjQuCDQvdCwINC90L7QtNC1XG4gICAgICAgIGhhbmRsZU5vZGVSaWdodENsaWNrKG5vZGUsIGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWRfbm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuTm9kZVBhbmVsKG5vZGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0KHQvtC30LTQsNGC0Ywg0L3QvtCy0YvQuSDQvdC+0LRcbiAgICAgICAgLy8gY3JlYXRlTm9kZSgpIHtcbiAgICAgICAgLy8gICAgIHRocy5hcGkoe1xuICAgICAgICAvLyAgICAgICAgIGFwaTogJ25vZGVzLm5vZGU6Y3JlYXRlJyxcbiAgICAgICAgLy8gICAgICAgICBkYXRhOiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIG5pZDogdGhpcy5uaWQsXG4gICAgICAgIC8vICAgICAgICAgICAgIGxpbmVfaW5kZXg6IHRoaXMuc2VsZWN0ZWRfbGluZV9pbmRleFxuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAgdGhlbjogKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmdldE5vZGVzKClcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vIH0sXG5cbiAgICAgICAgLy8g0J/RgNC4INC+0LHQvdC+0LLQu9C10L3QuNC4INC90L7QtNCwXG4gICAgICAgIG9uTm9kZVVwZGF0ZWQobm9kZSkge1xuICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVfaW5fcGFuZWwgPSBub2RlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdldE5vZGVzKClcbiAgICAgICAgfSxcblxuICAgICAgICBzZWxlY3RMaW5lKGxpbmVfaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbGluZV9pbmRleCA9IGxpbmVfaW5kZXhcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQlNC+0LHQsNCy0LjRgtGMINC/0YDQvtCz0YDQsNC80LzQvdGD0Y4g0LvQuNC90LjRjlxuICAgICAgICBhZGRMaW5lKCkge1xuICAgICAgICAgICAgdGhzLmFwaSh7XG4gICAgICAgICAgICAgICAgYXBpOiAnbm9kZXMubm9kZTphZGQtbGluZScsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBuaWQ6IHRoaXMubmlkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZXMoKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQn9C+0LvRg9GH0LjRgtGMINC90L7QtNGLXG4gICAgICAgIGdldE5vZGVzKCkge1xuICAgICAgICAgICAgdGhzLmFwaSh7XG4gICAgICAgICAgICAgICAgYXBpOiAnbm9kZXMubm9kZTpub2RlcycsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBuaWQ6IHRoaXMubmlkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZXMgPSByZXNwb25zZS5ub2RlcztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0KHQvtGF0YDQsNC90LjRgtGMINC/0YDQvtCz0YDQsNC80LzRg1xuICAgICAgICBzZXROb2RlcygpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfbm9kZXMgPSBbXVxuICAgICAgICAgICAgdGhzLmFwaSh7XG4gICAgICAgICAgICAgICAgYXBpOiAnZnJhbWVzLkZyYW1lOnNldE5vZGVzJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIG5pZDogdGhpcy5uaWQsXG4gICAgICAgICAgICAgICAgICAgIG5vZGVzOiB0aGlzLm5vZGVzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZXMoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uZnJhbWUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAgIC5ub2RlLXRlc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNDc5NWIxO1xuICAgIH1cblxuICAgICZfX2xpbmUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGdhcDogNXB4O1xuICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xuXG4gICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogLTNweCAwIDAgMCAjODUwMGZmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fbm9kZSB7XG4gICAgICAgIGN1cnNvcjogbW92ZTtcblxuICAgICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjMDA3YmZmO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fYWRkLWxpbmUge1xuICAgICAgICBtYXJnaW46IDNweDtcbiAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgICAgIGNvbG9yOiAjNzk3OTc5O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICAgICAgICAgIGNvbG9yOiAjNzk3OTc5O1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRocmVlcy1wcmVsb2FkZXIge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi50aHJlZXMtcHJlbG9hZGVyX19zcXVhcmUge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRiMWQxO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdnVlL2NvbXBvbmVudHMvRnJhbWVQcmVsb2FkZXIudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFKO0FBRUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUFSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi50aHJlZXMtcHJlbG9hZGVyIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcblxcbiAgICAmX19zcXVhcmUge1xcbiAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTRiMWQxO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50aHJlZXNfbm9kZXNfbWV0aG9kcyB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4udGhyZWVzX25vZGVzX21ldGhvZHNfX2luZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiAjNzA3MDcwO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4udGhyZWVzX25vZGVzX21ldGhvZHNfX3ByZWxvYWRlciB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLnRocmVlc19ub2Rlc19tZXRob2RzX19idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogM3B4IDVweDtcXG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjb2xvcjogIzc3Nzc3NztcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgbWFyZ2luOiAzcHg7XFxufVxcbi50aHJlZXNfbm9kZXNfbWV0aG9kc19fYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmZmU3YmE7XFxuICBjb2xvcjogIzc5NTUxMjtcXG59XFxuLnRocmVlc19ub2Rlc19tZXRob2RzX19idXR0b24uaW5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcXG4gIGNvbG9yOiAjY2RjZGNkO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZXNNZXRob2RzLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFBSjtBQUVJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUdJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQURSO0FBSUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUZSO0FBSVE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFGWjtBQUtRO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBSFpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLnRocmVlc19ub2Rlc19tZXRob2RzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgJl9faW5mbyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgY29sb3I6ICM3MDcwNzA7XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgJl9fcHJlbG9hZGVyIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICB9XFxuXFxuICAgICZfX2J1dHRvbiB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogI2U5ZTllOTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgICAgIGNvbG9yOiAjNzc3Nzc3O1xcbiAgICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XFxuICAgICAgICBtYXJnaW46IDNweDtcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmU3YmE7XFxuICAgICAgICAgICAgY29sb3I6ICM3OTU1MTI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLmluYWN0aXZlIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xcbiAgICAgICAgICAgIGNvbG9yOiAjY2RjZGNkO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5ub2Rlcy1zdG9yZSB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG4ubm9kZXMtc3RvcmVfX2l0ZW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5ub2Rlcy1zdG9yZV9faXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzY2NjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBhZGRpbmc6IDlweCAxMHB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5ub2Rlcy1zdG9yZV9fbmFtZSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdnVlL2NvbXBvbmVudHMvTm9kZXNTdG9yZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxhQUFBO0FBQUo7QUFFSTtFQUNJLGFBQUE7QUFBUjtBQUVJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQVI7QUFLSTtFQUNJLGFBQUE7QUFIUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4ubm9kZXMtc3RvcmUge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcblxcbiAgICAmX19pdGVtcyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuICAgICZfX2l0ZW0ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICAgICBwYWRkaW5nOiA5cHggMTBweDtcXG4gICAgICAgIG1hcmdpbjogNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB9XFxuICAgICZfX2ljb24ge1xcblxcbiAgICB9XFxuICAgICZfX25hbWUge1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudGhyZWVzLWljb24ge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdnVlL2NvbXBvbmVudHMvaWNvbi52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQUFKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi50aHJlZXMtaWNvbiB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudGhyZWVzLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYxMTc2NDcwNTkpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuLnRocmVlcy1tb2RhbF9fYm9keSB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiA5MHZoO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLnRocmVlcy1tb2RhbF9fbG9hZGluZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50aHJlZXMtbW9kYWxfX2hlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50aHJlZXMtbW9kYWxfX2hlYWRlcl9fdGl0bGUge1xcbiAgY29sb3I6ICM0MjQyNDI7XFxuICBmb250LXNpemU6IDE5cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi50aHJlZXMtbW9kYWxfX2hlYWRlcl9fY2xvc2Uge1xcbiAgY29sb3I6ICMwMDA7XFxufVxcbi50aHJlZXMtbW9kYWxfX2hlYWRlcl9fY2xvc2UgaSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiAwcHggM3B4O1xcbiAgcGFkZGluZy10b3A6IDJweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgY29sb3I6ICM3YjdiN2I7XFxufVxcbi50aHJlZXMtbW9kYWxfX2hlYWRlcl9fY2xvc2UgaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xcbiAgY29sb3I6ICM2MzYzNjM7XFxufVxcbi50aHJlZXMtbW9kYWxfX2NvbnRlbnQge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLnRocmVlcy1tb2RhbF9fZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92dWUvY29tcG9uZW50cy9tb2RhbC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFBSjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQVI7QUFHSTtFQUNJLGtCQUFBO0FBRFI7QUFJSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFGUjtBQUlRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUZaO0FBS1E7RUFDSSxXQUFBO0FBSFo7QUFJWTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRmhCO0FBSWdCO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBRnBCO0FBUUk7RUFDSSxnQkFBQTtBQU5SO0FBU0k7RUFDSSxnQkFBQTtBQVBSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi50aHJlZXMtbW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwOWM7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIHotaW5kZXg6IDEwMDtcXG5cXG4gICAgJl9fYm9keSB7XFxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICAgICAgcGFkZGluZzogMTVweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtaGVpZ2h0OiA5MHZoO1xcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgfVxcblxcbiAgICAmX19sb2FkaW5nIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAmX19oZWFkZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgICAgJl9fdGl0bGUge1xcbiAgICAgICAgICAgIGNvbG9yOiAjNDI0MjQyO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmX19jbG9zZSB7XFxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XFxuICAgICAgICAgICAgaSB7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggM3B4O1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogIzdiN2I3YjtcXG5cXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2MzYzNjM7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fY29udGVudCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgICZfX2Zvb3RlciB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mcmFtZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLmZyYW1lIC5ub2RlLXRlc3Qge1xcbiAgYmFja2dyb3VuZDogIzQ3OTViMTtcXG59XFxuLmZyYW1lX19saW5lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDVweDtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG59XFxuLmZyYW1lX19saW5lLnNlbGVjdGVkIHtcXG4gIGJveC1zaGFkb3c6IC0zcHggMCAwIDAgIzg1MDBmZjtcXG59XFxuLmZyYW1lX19ub2RlIHtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuLmZyYW1lX19ub2RlLnNlbGVjdGVkIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjMDA3YmZmO1xcbn1cXG4uZnJhbWVfX2FkZC1saW5lIHtcXG4gIG1hcmdpbjogM3B4O1xcbiAgcGFkZGluZzogN3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcXG4gIGNvbG9yOiAjNzk3OTc5O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmZyYW1lX19hZGQtbGluZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xcbiAgY29sb3I6ICM3OTc5Nzk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92dWUvc2NyZWVucy9GcmFtZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFSTtFQUNJLG1CQUFBO0FBQVI7QUFHSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQURSO0FBR1E7RUFDSSw4QkFBQTtBQURaO0FBS0k7RUFDSSxZQUFBO0FBSFI7QUFLUTtFQUNJLG1DQUFBO0FBSFo7QUFPSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTFI7QUFPUTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQUxaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5mcmFtZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuXFxuICAgIC5ub2RlLXRlc3Qge1xcbiAgICAgICAgYmFja2dyb3VuZDogIzQ3OTViMTtcXG4gICAgfVxcblxcbiAgICAmX19saW5lIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICBnYXA6IDVweDtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcXG5cXG4gICAgICAgICYuc2VsZWN0ZWQge1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0zcHggMCAwIDAgIzg1MDBmZjtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19ub2RlIHtcXG4gICAgICAgIGN1cnNvcjogbW92ZTtcXG5cXG4gICAgICAgICYuc2VsZWN0ZWQge1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjMDA3YmZmO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2FkZC1saW5lIHtcXG4gICAgICAgIG1hcmdpbjogM3B4O1xcbiAgICAgICAgcGFkZGluZzogN3B4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcXG4gICAgICAgIGNvbG9yOiAjNzk3OTc5O1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XFxuICAgICAgICAgICAgY29sb3I6ICM3OTc5Nzk7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9GcmFtZVByZWxvYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MDcyZDRmMCZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yMjUzNDdhOSZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZXNNZXRob2RzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc1NTNiYWU4Jmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2Rlc1N0b3JlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWJiODllZmQyJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9pY29uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWEwZTc0MzAwJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9tb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xOGQ0YjhiNiZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRnJhbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZWE5NDg1MWEmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vRnJhbWVQcmVsb2FkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYwNzJkNGYwXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRnJhbWVQcmVsb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZyYW1lUHJlbG9hZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vRnJhbWVQcmVsb2FkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjA3MmQ0ZjAmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL2FwcC9wbHVnaW5zL3plbi90aHJlZXMvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy92dWUvY29tcG9uZW50cy9GcmFtZVByZWxvYWRlci52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNjA3MmQ0ZjBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc2MDcyZDRmMCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzYwNzJkNGYwJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GcmFtZVByZWxvYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjA3MmQ0ZjBcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignNjA3MmQ0ZjAnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIyNTM0N2E5XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vTm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjI1MzQ3YTkmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL2FwcC9wbHVnaW5zL3plbi90aHJlZXMvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy92dWUvY29tcG9uZW50cy9Ob2RlLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIyMjUzNDdhOVwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzIyNTM0N2E5JywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnMjI1MzQ3YTknLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05vZGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIyNTM0N2E5XCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJzIyNTM0N2E5JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Ob2Rlc01ldGhvZHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc1NTNiYWU4XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTm9kZXNNZXRob2RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Ob2Rlc01ldGhvZHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Ob2Rlc01ldGhvZHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzU1M2JhZTgmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL2FwcC9wbHVnaW5zL3plbi90aHJlZXMvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy92dWUvY29tcG9uZW50cy9Ob2Rlc01ldGhvZHMudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjc1NTNiYWU4XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNzU1M2JhZTgnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCc3NTUzYmFlOCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTm9kZXNNZXRob2RzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NTUzYmFlOFwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCc3NTUzYmFlOCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vTm9kZXNTdG9yZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmI4OWVmZDJcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ob2Rlc1N0b3JlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Ob2Rlc1N0b3JlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vTm9kZXNTdG9yZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iYjg5ZWZkMiZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvYXBwL3BsdWdpbnMvemVuL3RocmVlcy9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL3Z1ZS9jb21wb25lbnRzL05vZGVzU3RvcmUudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcImJiODllZmQyXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnYmI4OWVmZDInLCBfX2V4cG9ydHNfXykpIHtcbiAgICBjb25zb2xlLmxvZygncmVsb2FkJylcbiAgICBhcGkucmVsb2FkKCdiYjg5ZWZkMicsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTm9kZXNTdG9yZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmI4OWVmZDJcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignYmI4OWVmZDInLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL2ljb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWEwZTc0MzAwXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaWNvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vaWNvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL2ljb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTBlNzQzMDAmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL2FwcC9wbHVnaW5zL3plbi90aHJlZXMvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy92dWUvY29tcG9uZW50cy9pY29uLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCJhMGU3NDMwMFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJ2EwZTc0MzAwJywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnYTBlNzQzMDAnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2ljb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWEwZTc0MzAwXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncmUtcmVuZGVyJylcbiAgICBhcGkucmVyZW5kZXIoJ2EwZTc0MzAwJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9tb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MThkNGI4YjZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vbW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9tb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xOGQ0YjhiNiZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvYXBwL3BsdWdpbnMvemVuL3RocmVlcy9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL3Z1ZS9jb21wb25lbnRzL21vZGFsLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIxOGQ0YjhiNlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzE4ZDRiOGI2JywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnMThkNGI4YjYnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL21vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xOGQ0YjhiNlwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCcxOGQ0YjhiNicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vRnJhbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWVhOTQ4NTFhXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRnJhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZyYW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vRnJhbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZWE5NDg1MWEmbGFuZz1zY3NzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL2FwcC9wbHVnaW5zL3plbi90aHJlZXMvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy92dWUvc2NyZWVucy9GcmFtZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiZWE5NDg1MWFcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCdlYTk0ODUxYScsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJ2VhOTQ4NTFhJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GcmFtZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWE5NDg1MWFcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignZWE5NDg1MWEnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZyYW1lUHJlbG9hZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0ZyYW1lUHJlbG9hZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ob2RlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZXNNZXRob2RzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGVzTWV0aG9kcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL05vZGVzU3RvcmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTm9kZXNTdG9yZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL2ljb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vaWNvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL21vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL21vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRnJhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRnJhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiXSwibmFtZXMiOlsiZGF0YSIsInNxdWFyZV9wb3NpdGlvbiIsImFuaW1hdGlvbl9mcmFtZV9pZCIsInRocyIsIndpbmRvdyIsIm1vdW50ZWQiLCJwcm9jZXNzIiwiYW5pbWF0ZSIsInVubW91bnRlZCIsImNhbmNlbF9hbmltYXRpb24iLCJ3YXRjaCIsInRoc0RhdGFQcm9jZXNzIiwibmV3X3ZhbHVlIiwibWV0aG9kcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibmFtZSIsImVtaXRzIiwiY29tcG9uZW50cyIsImNvbXB1dGVkIiwiaGFzQ3NzTGF5ZXIiLCJwcm9wcyIsIm5vZGUiLCJGcmFtZVByZWxvYWRlciIsIk5vZGVzU3RvcmUiLCJtb2RhbCIsIm5pZCIsIm5pZHMiLCJpbmZvIiwibGluZXMiLCJub2Rlc19zdG9yZSIsInNlbGVjdGVkX25vbmUiLCJsZW5ndGgiLCJzZWxlY3RBbGxOb2RlcyIsIiRlbWl0IiwicmVtb3ZlTm9kZXMiLCJfdGhpcyIsImFwaSIsInRoZW4iLCJjb3B5Tm9kZXMiLCJfdGhpczIiLCJhZGROZXdOb2RlIiwiaWNvbiIsInN0b3JlX25vZGVzIiwiZ2V0U3RvcmVOb2RlcyIsInJlc3BvbnNlIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbGlhc2VzIiwiYWxpYXNlZF9zcmMiLCJwcm9jZXNzZWQiLCJrZXkiLCJyZXBsYWNlIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb25jYXQiLCJzaG93IiwidHlwZSIsIkJvb2xlYW4iLCJoZWFkaW5nIiwiU3RyaW5nIiwibWF4V2lkdGgiLCJsb2FkaW5nIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlRXNjYXBlS2V5IiwiYmVmb3JlVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbG9zZSIsImV2ZW50IiwiZHJhZ2dhYmxlIiwiTm9kZXNNZXRob2RzIiwiTm9kZSIsIm5vZGVzIiwic2VsZWN0ZWRfbGluZV9pbmRleCIsInNlbGVjdGVkX25vZGVzIiwibm9kZV9pbl9wYW5lbCIsImdldE5vZGVzIiwibm9kZXNfbGluZXNfY291bnQiLCJfdGhpcyRub2RlcyRsZW5ndGgiLCJfdGhpcyRub2RlcyIsIm9wZW5Ob2RlUGFuZWwiLCJsaW5lU2VsZWN0ZWQiLCJsaW5lX2luZGV4IiwiY2xvc2VOb2RlUGFuZWwiLCJjbGVhclNlbGVjdGlvbiIsInRhcmdldCIsIm1hdGNoZXMiLCJhbGxfbm9kZXMiLCJmb3JFYWNoIiwibGluZSIsInB1c2giLCJnZXROb2RlU3R5bGUiLCJpc05vZGVTZWxlY3RlZCIsImluY2x1ZGVzIiwiaGFuZGxlTm9kZUNsaWNrIiwiZGV0YWlsIiwiY3RybEtleSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImhhbmRsZU5vZGVSaWdodENsaWNrIiwib25Ob2RlVXBkYXRlZCIsInNlbGVjdExpbmUiLCJhZGRMaW5lIiwic2V0Tm9kZXMiLCJfdGhpczMiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2hvaXN0ZWRfMSIsIiRkYXRhIiwiX25vcm1hbGl6ZVN0eWxlIiwibGVmdCIsIiRwcm9wcyIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwib25DbGljayIsIl9jYWNoZSIsIiRvcHRpb25zIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfbm9ybWFsaXplQ2xhc3MiLCJpbmFjdGl2ZSIsInRpdGxlIiwiX2hvaXN0ZWRfMiIsIl9jcmVhdGVWTm9kZSIsIl9jb21wb25lbnRfRnJhbWVQcmVsb2FkZXIiLCJfY29tcG9uZW50X21vZGFsIiwib25DbG9zZSIsIiRldmVudCIsIl93aXRoQ3R4IiwiX2NvbXBvbmVudF9Ob2Rlc1N0b3JlIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJfaG9pc3RlZF8zIiwiX2NvbXBvbmVudF9pY29uIiwiX2hvaXN0ZWRfNCIsIm9uS2V5ZG93biIsIl93aXRoS2V5cyIsInJlZiIsIl93aXRoTW9kaWZpZXJzIiwiX3JlbmRlclNsb3QiLCJfY3R4IiwiJHNsb3RzIiwiX2hvaXN0ZWRfNSIsIl9ob2lzdGVkXzYiLCJfY29tcG9uZW50X05vZGVzTWV0aG9kcyIsIm9uVXBkYXRlIiwib25TZWxlY3RBbGxOb2RlcyIsIl9jcmVhdGVCbG9jayIsIl9jb21wb25lbnRfZHJhZ2dhYmxlIiwidGFnIiwic2VsZWN0ZWQiLCJncm91cCIsIm9uRW5kIiwiaXRlbSIsIl9yZWYiLCJlbGVtZW50IiwiX2NvbXBvbmVudF9Ob2RlIiwib25Db250ZXh0bWVudSJdLCJzb3VyY2VSb290IjoiIn0=