(self["webpackChunkthrees"] = self["webpackChunkthrees"] || []).push([["src_vue_trash_ux_elements_Layers_vue"],{

/***/ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Layers.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Layers.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/.pnpm/vuedraggable@4.1.0_vue@3.5.16_typescript@5.8.3_/node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './icon.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './modal.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Store_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Store.vue */ "./src/vue/trash/ux/elements/Store.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Layers",
  props: {
    node: null,
    backend: null
  },
  emits: ['update'],
  components: {
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_0___default()),
    icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module './icon.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    modal: Object(function webpackMissingModule() { var e = new Error("Cannot find module './modal.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    Store: _Store_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      local_layers: [],
      open_node_settings: null
    };
  },
  computed: {
    layers: function layers() {
      var _this$node$layers, _this$node;
      return (_this$node$layers = (_this$node = this.node) === null || _this$node === void 0 ? void 0 : _this$node.layers) !== null && _this$node$layers !== void 0 ? _this$node$layers : [];
    }
  },
  watch: {
    layers: function layers(new_layers) {
      this.local_layers = _toConsumableArray(new_layers);
    }
  },
  created: function created() {
    this.local_layers = _toConsumableArray(this.layers);
  },
  methods: {
    onDragEnd: function onDragEnd() {
      this.$emit('update', _objectSpread(_objectSpread({}, this.node), {}, {
        layers: _toConsumableArray(this.local_layers)
      }), true);
    },
    openSettings: function openSettings(layer) {
      window.open(location.origin + "/".concat(this.backend, "/zen/threes/layercontroller/update/") + layer.lid, '_blank');
    },
    removeLayer: function removeLayer(layer) {
      this.local_layers = this.local_layers.filter(function (l) {
        return l.lid !== layer.lid;
      });
      this.$emit('update', _objectSpread(_objectSpread({}, this.node), {}, {
        layers: _toConsumableArray(this.local_layers)
      }), true);
    },
    addLayer: function addLayer(layer) {
      if (layer.lid) {
        this.local_layers.push(layer.aspect + '::' + layer.lid);
      } else {
        this.local_layers.push(layer.aspect);
      }
      this.$emit('update', _objectSpread(_objectSpread({}, this.node), {}, {
        layers: _toConsumableArray(this.local_layers)
      }), true);
    }
  }
});

/***/ }),

/***/ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Search.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Search.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var primevue_inputtext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primevue/inputtext */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/inputtext/inputtext.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Search",
  emits: ["update:text"],
  props: {
    text: ''
  },
  components: {
    InputText: primevue_inputtext__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.$emit('update:text', '');
  },
  data: function data() {
    return {
      timer: null,
      timout: 1000 // Задержка перед запросом 2 секунды
    };
  },
  watch: {
    text: function text(_text) {
      if (_text) {
        this.onInput(_text);
      }
    }
  },
  methods: {
    onInput: function onInput(text) {
      var _this = this;
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      if (!text) {
        text = '';
      }
      this.timer = setTimeout(function () {
        _this.$emit('update:text', text);
      }, this.timout);
    }
  }
});

/***/ }),

/***/ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Store.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Store.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './icon.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Search_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.vue */ "./src/vue/trash/ux/elements/Search.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Store",
  emits: ['add:layer'],
  components: {
    icon: Object(function webpackMissingModule() { var e = new Error("Cannot find module './icon.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    Search: _Search_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.getStore();
  },
  data: function data() {
    return {
      layers: [],
      unit_layers: [],
      nodes: [],
      filter_text: ''
    };
  },
  computed: {
    layers_count: function layers_count() {
      return Object.keys(this.layers || {}).length;
    }
  },
  methods: {
    getStore: function getStore(filter_text) {
      var _this = this;
      if (typeof filter_text === 'undefined') {
        return;
      }
      ths.api({
        api: 'layers.Layer:getStore',
        data: {
          filter_text: filter_text
        },
        then: function then(response) {
          _this.layers = response.layers;
          _this.unit_layers = response.unit_layers;
          _this.nodes = response.nodes;
        }
      });
    },
    addLayer: function addLayer(layer) {
      this.$emit('add:layer', layer);
    },
    copyLayer: function copyLayer(layer) {}
  }
});

/***/ }),

/***/ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Layers.vue?vue&type=template&id=88074bf2":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Layers.vue?vue&type=template&id=88074bf2 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/.pnpm/vue@3.5.16_typescript@5.8.3/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "threes-layers"
};
var _hoisted_2 = {
  "class": "threes-layers__panel"
};
var _hoisted_3 = {
  "class": "threes-layers__layer"
};
var _hoisted_4 = {
  "class": "threes-layers__icon"
};
var _hoisted_5 = {
  "class": "threes-layers__title"
};
var _hoisted_6 = {
  "class": "threes-layers__name"
};
var _hoisted_7 = {
  "class": "threes-layers__aspect"
};
var _hoisted_8 = ["innerHTML"];
var _hoisted_9 = {
  "class": "threes-layers__control"
};
var _hoisted_10 = ["onClick"];
var _hoisted_11 = {
  "class": "threes-layers__remove"
};
var _hoisted_12 = ["onClick"];
var _hoisted_13 = {
  "class": "threes-layers__panel"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon");
  var _component_draggable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("draggable");
  var _component_Store = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Store");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_draggable, {
    modelValue: $data.local_layers,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.local_layers = $event;
    }),
    "class": "threes-layers__draggable",
    "item-key": "id",
    tag: "div",
    onEnd: $options.onDragEnd
  }, {
    item: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (_ref) {
      var layer = _ref.element;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icon, {
        src: layer.icon
      }, null, 8 /* PROPS */, ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(layer.aspect), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(layer.name), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "threes-layers__description",
        innerHTML: layer.description
      }, null, 8 /* PROPS */, _hoisted_8)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        onClick: function onClick($event) {
          return $options.openSettings(layer);
        },
        "class": "threes-layers__control__button"
      }, " Настройки ", 8 /* PROPS */, _hoisted_10)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
        onClick: function onClick($event) {
          return $options.removeLayer(layer);
        },
        "class": "icon-trash-1"
      }, null, 8 /* PROPS */, _hoisted_12)])])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue", "onEnd"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Store, {
    "onAdd:layer": $options.addLayer
  }, null, 8 /* PROPS */, ["onAdd:layer"])])]);
}

/***/ }),

/***/ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Search.vue?vue&type=template&id=d91d7126":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Search.vue?vue&type=template&id=d91d7126 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/.pnpm/vue@3.5.16_typescript@5.8.3/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "threes-search"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_InputText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InputText");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
    modelValue: $props.text,
    onInput: _cache[0] || (_cache[0] = function ($event) {
      return $options.onInput($event.target.value);
    })
  }, null, 8 /* PROPS */, ["modelValue"])]);
}

/***/ }),

/***/ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Store.vue?vue&type=template&id=1011762c":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Store.vue?vue&type=template&id=1011762c ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/.pnpm/vue@3.5.16_typescript@5.8.3/node_modules/vue/dist/vue.esm-bundler.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var _hoisted_1 = {
  "class": "threes_store"
};
var _hoisted_2 = {
  "class": "threes_store__items"
};
var _hoisted_3 = {
  "class": "threes_store__item__separator"
};
var _hoisted_4 = {
  "class": "threes_store__item unit_item"
};
var _hoisted_5 = {
  "class": "threes_store__item__icon"
};
var _hoisted_6 = {
  "class": "threes_store__item__title"
};
var _hoisted_7 = {
  "class": "threes_store__item__name"
};
var _hoisted_8 = {
  "class": "threes_store__item__aspect"
};
var _hoisted_9 = ["innerHTML"];
var _hoisted_10 = {
  "class": "threes_store__item__buttons"
};
var _hoisted_11 = ["onClick"];
var _hoisted_12 = {
  "class": "threes_store__item__separator",
  style: {
    "margin-top": "10px"
  }
};
var _hoisted_13 = {
  "class": "threes_store__item"
};
var _hoisted_14 = {
  "class": "threes_store__item__icon"
};
var _hoisted_15 = {
  "class": "threes_store__item__title"
};
var _hoisted_16 = {
  "class": "threes_store__item__name"
};
var _hoisted_17 = {
  "class": "threes_store__item__aspect"
};
var _hoisted_18 = ["innerHTML"];
var _hoisted_19 = {
  "class": "threes_store__item__buttons"
};
var _hoisted_20 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$data$unit_layers$le, _$data$unit_layers;
  var _component_Search = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Search");
  var _component_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Search, {
    text: $data.filter_text,
    "onUpdate:text": $options.getStore
  }, null, 8 /* PROPS */, ["text", "onUpdate:text"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Слои юнитов ")), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$data$unit_layers$le = (_$data$unit_layers = $data.unit_layers) === null || _$data$unit_layers === void 0 ? void 0 : _$data$unit_layers.length) !== null && _$data$unit_layers$le !== void 0 ? _$data$unit_layers$le : 0), 1 /* TEXT */)]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.unit_layers, function (layer) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icon, {
      width: "20px",
      height: "20px",
      src: layer.icon
    }, null, 8 /* PROPS */, ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(layer.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(layer.aspect), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "threes_store__item__description",
      innerHTML: layer.description
    }, null, 8 /* PROPS */, _hoisted_9), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      onClick: function onClick($event) {
        return $options.addLayer(layer);
      },
      "class": "btn btn-default threes_store__item__button"
    }, _toConsumableArray(_cache[1] || (_cache[1] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": "icon-angle-double-left"
    }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Добавить ")])), 8 /* PROPS */, _hoisted_11)])]);
  }), 256 /* UNKEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [_cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Слои фреймов ")), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.layers_count), 1 /* TEXT */)]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.layers, function (layer) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icon, {
      width: "20px",
      height: "20px",
      src: layer.icon
    }, null, 8 /* PROPS */, ["src"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(layer.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(layer.aspect), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "threes_store__item__description",
      innerHTML: layer.description
    }, null, 8 /* PROPS */, _hoisted_18), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      onClick: function onClick($event) {
        return $options.addLayer(layer);
      },
      "class": "btn btn-default threes_store__item__button"
    }, _toConsumableArray(_cache[3] || (_cache[3] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": "icon-angle-double-left"
    }, null, -1 /* HOISTED */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Добавить ")])), 8 /* PROPS */, _hoisted_20), _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      "class": "btn btn-default threes_store__item__button"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": "icon-copy"
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Копировать ")], -1 /* HOISTED */))])]);
  }), 256 /* UNKEYED_FRAGMENT */))])]);
}

/***/ }),

/***/ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Layers.vue?vue&type=style&index=0&id=88074bf2&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Layers.vue?vue&type=style&index=0&id=88074bf2&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".threes-layers {\n  display: flex;\n  flex-direction: row;\n}\n.threes-layers__draggable {\n  min-height: 50px;\n}\n.threes-layers__panel {\n  flex: 1 1 50%;\n}\n.threes-layers__layer {\n  padding: 10px 15px;\n  display: flex;\n  background: #f1f1f1;\n  border-radius: 4px;\n  margin: 4px;\n  cursor: move;\n  transition: 200ms;\n}\n.threes-layers__layer:hover {\n  background: #e8e8e8;\n}\n.threes-layers__icon {\n  display: flex;\n  align-items: center;\n  margin-right: 15px;\n}\n.threes-layers__title {\n  flex: 1;\n}\n.threes-layers__name {\n  display: flex;\n  font-size: 17px;\n  color: #37375d;\n  align-items: center;\n  align-content: center;\n}\n.threes-layers__aspect {\n  background: #dcdcdc;\n  font-size: 13px;\n  padding: 2px 6px;\n  border-radius: 3px;\n  color: #3f3f3f;\n  margin-right: 8px;\n}\n.threes-layers__description {\n  margin-right: 10px;\n}\n.threes-layers__description p {\n  margin-bottom: 10px;\n}\n.threes-layers__control {\n  display: flex;\n  align-items: center;\n}\n.threes-layers__control__button {\n  padding: 5px 10px;\n  background: #ffffff;\n  margin: 3px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: bold;\n  color: #666;\n  border: 1px solid #d8d8d8;\n  cursor: pointer;\n  transition: 200ms;\n}\n.threes-layers__control__button:hover {\n  background: #ecffdc;\n  color: #617054;\n}\n.threes-layers__control__button:active {\n  transform: scale(0.95);\n}\n.threes-layers__remove {\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n  cursor: pointer;\n  transition: 200ms;\n}\n.threes-layers__remove:hover {\n  color: red;\n}", "",{"version":3,"sources":["webpack://./src/vue/trash/ux/elements/Layers.vue"],"names":[],"mappings":"AACA;EACI,aAAA;EACA,mBAAA;AAAJ;AAEI;EACI,gBAAA;AAAR;AAGI;EACI,aAAA;AADR;AAII;EACI,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;AAFR;AAIQ;EACI,mBAAA;AAFZ;AAMI;EACI,aAAA;EACA,mBAAA;EACA,kBAAA;AAJR;AAOI;EACI,OAAA;AALR;AAQI;EACI,aAAA;EACA,eAAA;EACA,cAAA;EACA,mBAAA;EACA,qBAAA;AANR;AASI;EACI,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,cAAA;EACA,iBAAA;AAPR;AAUI;EACI,kBAAA;AARR;AASQ;EACI,mBAAA;AAPZ;AAWI;EACI,aAAA;EACA,mBAAA;AATR;AAWQ;EACI,iBAAA;EACA,mBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,WAAA;EACA,yBAAA;EACA,eAAA;EACA,iBAAA;AATZ;AAWY;EACI,mBAAA;EACA,cAAA;AAThB;AAWY;EACI,sBAAA;AAThB;AAcI;EACI,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;AAZR;AAcQ;EACI,UAAA;AAZZ","sourcesContent":["\n.threes-layers {\n    display: flex;\n    flex-direction: row;\n\n    &__draggable {\n        min-height: 50px;\n    }\n\n    &__panel {\n        flex: 1 1 50%;\n    }\n\n    &__layer {\n        padding: 10px 15px;\n        display: flex;\n        background: #f1f1f1;\n        border-radius: 4px;\n        margin: 4px;\n        cursor: move;\n        transition: 200ms;\n\n        &:hover {\n            background: #e8e8e8;\n        }\n    }\n\n    &__icon {\n        display: flex;\n        align-items: center;\n        margin-right: 15px;\n    }\n\n    &__title {\n        flex: 1;\n    }\n\n    &__name {\n        display: flex;\n        font-size: 17px;\n        color: #37375d;\n        align-items: center;\n        align-content: center;\n    }\n\n    &__aspect {\n        background: #dcdcdc;\n        font-size: 13px;\n        padding: 2px 6px;\n        border-radius: 3px;\n        color: #3f3f3f;\n        margin-right: 8px;\n    }\n\n    &__description {\n        margin-right: 10px;\n        p {\n            margin-bottom: 10px;\n        }\n    }\n\n    &__control {\n        display: flex;\n        align-items: center;\n\n        &__button {\n            padding: 5px 10px;\n            background: #ffffff;\n            margin: 3px;\n            border-radius: 4px;\n            font-size: 11px;\n            font-weight: bold;\n            color: #666;\n            border: 1px solid #d8d8d8;\n            cursor: pointer;\n            transition: 200ms;\n\n            &:hover {\n                background: #ecffdc;\n                color: #617054;\n            }\n            &:active {\n                transform: scale(0.95);\n            }\n        }\n    }\n\n    &__remove {\n        display: flex;\n        align-items: center;\n        margin-left: 10px;\n        cursor: pointer;\n        transition: 200ms;\n\n        &:hover {\n            color: red;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Search.vue?vue&type=style&index=0&id=d91d7126&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Search.vue?vue&type=style&index=0&id=d91d7126&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".threes-search {\n  padding: 10px;\n  background: #fbfbfb;\n  border-radius: 4px;\n  margin-bottom: 10px;\n}\n.threes-search .p-inputtext {\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/vue/trash/ux/elements/Search.vue"],"names":[],"mappings":"AACA;EACI,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;AAAJ;AAEI;EACI,WAAA;AAAR","sourcesContent":["\n.threes-search {\n    padding: 10px;\n    background: #fbfbfb;\n    border-radius: 4px;\n    margin-bottom: 10px;\n\n    .p-inputtext {\n        width: 100%;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Store.vue?vue&type=style&index=0&id=1011762c&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Store.vue?vue&type=style&index=0&id=1011762c&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".threes_store__items {\n  max-height: 500px;\n  overflow-y: auto;\n}\n.threes_store__item {\n  display: flex;\n  background: #f7f7f7;\n  margin-bottom: 5px;\n  padding: 4px 15px;\n  border-radius: 4px;\n  border: 1px solid #e9e9e9;\n}\n.threes_store__item .unit_item {\n  border: 2px solid green;\n}\n.threes_store__item__icon {\n  display: flex;\n  align-items: center;\n  margin-right: 15px;\n}\n.threes_store__item__title {\n  display: flex;\n  flex-direction: column;\n  width: 240px;\n  align-items: flex-start;\n}\n.threes_store__item__name {\n  margin-bottom: 3px;\n  font-weight: bold;\n  color: #656565;\n}\n.threes_store__item__aspect {\n  background: #e1e1e1;\n  padding: 2px 5px;\n  border-radius: 4px;\n  font-size: 14px;\n}\n.threes_store__item__description {\n  display: flex;\n  background: #fff;\n  padding: 4px 7px;\n  border-radius: 4px;\n  flex-direction: column;\n  flex: 1 1 0;\n  margin-right: 16px;\n}\n.threes_store__item__description p {\n  margin-bottom: 2px;\n}\n.threes_store__item__buttons {\n  display: flex;\n  align-items: center;\n}\n.threes_store__item__button {\n  display: flex;\n}\n.threes_store__item__button:not(:last-child) {\n  margin-right: 7px;\n}\n.threes_store__item__button i {\n  margin-right: 5px;\n}\n.threes_store__item__separator {\n  display: flex;\n  padding: 5px 11px;\n  background: #d9dbe2;\n  color: #565a65;\n  font-size: 15px;\n  font-weight: bold;\n  margin-bottom: 7px;\n  border-radius: 4px;\n  align-items: center;\n  justify-content: space-between;\n}\n.threes_store__item__separator span {\n  padding: 1px 10px;\n  background: #9fa7ca;\n  color: #ffffff;\n  border-radius: 4px;\n}", "",{"version":3,"sources":["webpack://./src/vue/trash/ux/elements/Store.vue"],"names":[],"mappings":"AAEI;EACI,iBAAA;EACA,gBAAA;AADR;AAGI;EACI,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,yBAAA;AADR;AAGQ;EACI,uBAAA;AADZ;AAIQ;EACI,aAAA;EACA,mBAAA;EACA,kBAAA;AAFZ;AAKQ;EACI,aAAA;EACA,sBAAA;EACA,YAAA;EACA,uBAAA;AAHZ;AAMQ;EACI,kBAAA;EACA,iBAAA;EACA,cAAA;AAJZ;AAOQ;EACI,mBAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;AALZ;AAQQ;EACI,aAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,sBAAA;EACA,WAAA;EACA,kBAAA;AANZ;AAQY;EACI,kBAAA;AANhB;AAUQ;EACI,aAAA;EACA,mBAAA;AARZ;AAWQ;EACI,aAAA;AATZ;AAUY;EACI,iBAAA;AARhB;AAUY;EACI,iBAAA;AARhB;AAWQ;EACI,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,8BAAA;AATZ;AAWY;EACI,iBAAA;EACA,mBAAA;EACA,cAAA;EACA,kBAAA;AAThB","sourcesContent":["\n.threes_store {\n    &__items {\n        max-height: 500px;\n        overflow-y: auto;\n    }\n    &__item {\n        display: flex;\n        background: #f7f7f7;\n        margin-bottom: 5px;\n        padding: 4px 15px;\n        border-radius: 4px;\n        border: 1px solid #e9e9e9;\n\n        .unit_item {\n            border: 2px solid green;\n        }\n\n        &__icon {\n            display: flex;\n            align-items: center;\n            margin-right: 15px;\n        }\n\n        &__title {\n            display: flex;\n            flex-direction: column;\n            width: 240px;\n            align-items: flex-start;\n        }\n\n        &__name {\n            margin-bottom: 3px;\n            font-weight: bold;\n            color: #656565;\n        }\n\n        &__aspect {\n            background: #e1e1e1;\n            padding: 2px 5px;\n            border-radius: 4px;\n            font-size: 14px;\n        }\n\n        &__description {\n            display: flex;\n            background: #fff;\n            padding: 4px 7px;\n            border-radius: 4px;\n            flex-direction: column;\n            flex: 1 1 0;\n            margin-right: 16px;\n\n            p {\n                margin-bottom: 2px;\n            }\n        }\n\n        &__buttons {\n            display: flex;\n            align-items: center;\n        }\n\n        &__button {\n            display: flex;\n            &:not(:last-child) {\n                margin-right: 7px;\n            }\n            i {\n                margin-right: 5px;\n            }\n        }\n        &__separator {\n            display: flex;\n            padding: 5px 11px;\n            background: #d9dbe2;\n            color: #565a65;\n            font-size: 15px;\n            font-weight: bold;\n            margin-bottom: 7px;\n            border-radius: 4px;\n            align-items: center;\n            justify-content: space-between;\n\n            span {\n                padding: 1px 10px;\n                background: #9fa7ca;\n                color: #ffffff;\n                border-radius: 4px;\n            }\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/sortablejs@1.14.0/node_modules/sortablejs/modular/sortable.esm.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/sortablejs@1.14.0/node_modules/sortablejs/modular/sortable.esm.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiDrag: () => (/* binding */ MultiDragPlugin),
/* harmony export */   Sortable: () => (/* binding */ Sortable),
/* harmony export */   Swap: () => (/* binding */ SwapPlugin),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var version = "1.14.0";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !! /*@__PURE__*/navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}

function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        this.forRepaintDummy = repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.forEach(function (p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var _excluded = ["evt"];

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, _excluded);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    var threshold = sortable[expando].options.emptyInsertThreshold;
    if (!threshold || lastChild(sortable)) return;
    var rect = getRect(sortable),
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    } // Safari ignores further event handling after mousedown


    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === 'SELECT') {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread2({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // Insert to end of list
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // if there is a last element, it is the target


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          el.appendChild(dragEl);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        // Insert to start of list
        var firstChild = getChild(el, 0, options, true);

        if (firstChild === dragEl) {
          return completed(false);
        }

        target = firstChild;
        targetRect = getRect(target);

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsFirst(evt, vertical, sortable) {
  var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var spacer = 10;
  return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;

var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

var lastSwapEl;

function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }

  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
          target = _ref2.target,
          onMove = _ref2.onMove,
          activeSortable = _ref2.activeSortable,
          changed = _ref2.changed,
          cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
          options = this.options;

      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;

        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }

        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }

      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
          putSortable = _ref3.putSortable,
          dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}

function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
      p2 = n2.parentNode,
      i1,
      i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);

  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }

  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

var multiDragElements = [],
    multiDragClones = [],
    lastMultiDragSelect,
    // for selection with modifier key down (SHIFT)
multiDragSortable,
    initialFolding = false,
    // Initial multi-drag fold when drag started
folding = false,
    // Folding any other time
dragStarted = false,
    dragEl$1,
    clonesFromRect,
    clonesHidden;

function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }

    if (sortable.options.supportPointer) {
      on(document, 'pointerup', this._deselectMultiDrag);
    } else {
      on(document, 'mouseup', this._deselectMultiDrag);
      on(document, 'touchend', this._deselectMultiDrag);
    }

    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';

        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }

        dataTransfer.setData('Text', data);
      }
    };
  }

  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
          cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;

      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }

      sortable._hideClone();

      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
          rootEl = _ref3.rootEl,
          dispatchSortableEvent = _ref3.dispatchSortableEvent,
          cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;

      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
          rootEl = _ref4.rootEl,
          cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;

      var sortable = _ref5.sortable,
          cloneNowHidden = _ref5.cloneNowHidden,
          cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');

        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      var sortable = _ref6.sortable;

      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }

      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      }); // Sort multi-drag elements

      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;

      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;

      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM
        sortable.captureAnimationState();

        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }

      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;

        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        } // Remove all auxiliary multidrag items from el, if sorting enabled


        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
          completed = _ref8.completed,
          cancel = _ref8.cancel;

      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
          rootEl = _ref9.rootEl,
          sortable = _ref9.sortable,
          dragRect = _ref9.dragRect;

      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
          isOwner = _ref10.isOwner,
          insertion = _ref10.insertion,
          activeSortable = _ref10.activeSortable,
          parentEl = _ref10.parentEl,
          putSortable = _ref10.putSortable;
      var options = this.options;

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }

        initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }

          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;

            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
          isOwner = _ref11.isOwner,
          activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });

      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
          rootEl = _ref12.rootEl,
          parentEl = _ref12.parentEl,
          sortable = _ref12.sortable,
          dispatchSortableEvent = _ref12.dispatchSortableEvent,
          oldIndex = _ref12.oldIndex,
          putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
          children = parentEl.children; // Multi-drag selection

      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }

        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvt: evt
          }); // Modifier activated, select from last to dragEl

          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
                currentIndex = index(dragEl$1);

            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
              // (but previous selection existed)
              var n, i;

              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }

              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i])) continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable: sortable,
                  rootEl: rootEl,
                  name: 'select',
                  targetEl: children[i],
                  originalEvt: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }

          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvt: evt
          });
        }
      } // Multi-drag drop


      if (dragStarted && this.isMultiDrag) {
        folding = false; // Do not "unfold" after around dragEl if reverted

        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
              multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();

          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;

                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect; // Prepare unfold animation

                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed


            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }

              multiDragIndex++;
            }); // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.

            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });

              if (update) {
                dispatchSortableEvent('update');
              }
            }
          } // Must be done after capturing individual rects (scroll bar)


          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }

        multiDragSortable = toSortable;
      } // Remove clones if necessary


      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();

      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable

      if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

      if (evt && evt.button !== 0) return;

      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvt: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;

        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();

          multiDragSortable = sortable;
        }

        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },

      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
            index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;

      var oldIndicies = [],
          newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        }); // multiDragElements will already be sorted if folding

        var newIndex;

        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }

        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();

        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }

        return key;
      }
    }
  });
}

function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */


function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}

function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sortable);



/***/ }),

/***/ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Layers.vue?vue&type=style&index=0&id=88074bf2&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Layers.vue?vue&type=style&index=0&id=88074bf2&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layers_vue_vue_type_style_index_0_id_88074bf2_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layers.vue?vue&type=style&index=0&id=88074bf2&lang=scss */ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Layers.vue?vue&type=style&index=0&id=88074bf2&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layers_vue_vue_type_style_index_0_id_88074bf2_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layers_vue_vue_type_style_index_0_id_88074bf2_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Search.vue?vue&type=style&index=0&id=d91d7126&lang=scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Search.vue?vue&type=style&index=0&id=d91d7126&lang=scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_style_index_0_id_d91d7126_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Search.vue?vue&type=style&index=0&id=d91d7126&lang=scss */ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Search.vue?vue&type=style&index=0&id=d91d7126&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_style_index_0_id_d91d7126_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_style_index_0_id_d91d7126_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Store.vue?vue&type=style&index=0&id=1011762c&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Store.vue?vue&type=style&index=0&id=1011762c&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Store_vue_vue_type_style_index_0_id_1011762c_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Store.vue?vue&type=style&index=0&id=1011762c&lang=scss */ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Store.vue?vue&type=style&index=0&id=1011762c&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Store_vue_vue_type_style_index_0_id_1011762c_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Store_vue_vue_type_style_index_0_id_1011762c_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/.pnpm/vuedraggable@4.1.0_vue@3.5.16_typescript@5.8.3_/node_modules/vuedraggable/dist/vuedraggable.umd.js":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vuedraggable@4.1.0_vue@3.5.16_typescript@5.8.3_/node_modules/vuedraggable/dist/vuedraggable.umd.js ***!
  \*******************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! vue */ "./node_modules/.pnpm/vue@3.5.16_typescript@5.8.3/node_modules/vue/dist/vue.esm-bundler.js"), __webpack_require__(/*! sortablejs */ "./node_modules/.pnpm/sortablejs@1.14.0/node_modules/sortablejs/modular/sortable.esm.js"));
	else // removed by dead control flow
{}
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__, __WEBPACK_EXTERNAL_MODULE_a352__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_770__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_770__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_770__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_770__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_770__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_770__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_770__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_770__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_770__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_770__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_770__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_770__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_770__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_770__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_770__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_770__(__nested_webpack_require_770__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __nested_webpack_require_4246__) {

var wellKnownSymbol = __nested_webpack_require_4246__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __nested_webpack_require_4526__) {

var aFunction = __nested_webpack_require_4526__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __nested_webpack_require_5202__) {

var toIndexedObject = __nested_webpack_require_5202__("fc6a");
var nativeGetOwnPropertyNames = __nested_webpack_require_5202__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __nested_webpack_require_5983__) {

var DESCRIPTORS = __nested_webpack_require_5983__("83ab");
var propertyIsEnumerableModule = __nested_webpack_require_5983__("d1e7");
var createPropertyDescriptor = __nested_webpack_require_5983__("5c6c");
var toIndexedObject = __nested_webpack_require_5983__("fc6a");
var toPrimitive = __nested_webpack_require_5983__("c04e");
var has = __nested_webpack_require_5983__("5135");
var IE8_DOM_DEFINE = __nested_webpack_require_5983__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __nested_webpack_require_6977__) {

var DESCRIPTORS = __nested_webpack_require_6977__("83ab");
var fails = __nested_webpack_require_6977__("d039");
var createElement = __nested_webpack_require_6977__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "13d5":
/***/ (function(module, exports, __nested_webpack_require_7409__) {

"use strict";

var $ = __nested_webpack_require_7409__("23e7");
var $reduce = __nested_webpack_require_7409__("d58f").left;
var arrayMethodIsStrict = __nested_webpack_require_7409__("a640");
var arrayMethodUsesToLength = __nested_webpack_require_7409__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __nested_webpack_require_8178__) {

var classof = __nested_webpack_require_8178__("c6b6");
var regexpExec = __nested_webpack_require_8178__("9263");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "159b":
/***/ (function(module, exports, __nested_webpack_require_8866__) {

var global = __nested_webpack_require_8866__("da84");
var DOMIterables = __nested_webpack_require_8866__("fdbc");
var forEach = __nested_webpack_require_8866__("17c2");
var createNonEnumerableProperty = __nested_webpack_require_8866__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __nested_webpack_require_9590__) {

"use strict";

var $forEach = __nested_webpack_require_9590__("b727").forEach;
var arrayMethodIsStrict = __nested_webpack_require_9590__("a640");
var arrayMethodUsesToLength = __nested_webpack_require_9590__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __nested_webpack_require_10284__) {

var getBuiltIn = __nested_webpack_require_10284__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __nested_webpack_require_10678__) {

var wellKnownSymbol = __nested_webpack_require_10678__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __nested_webpack_require_11975__) {

var fails = __nested_webpack_require_11975__("d039");
var wellKnownSymbol = __nested_webpack_require_11975__("b622");
var V8_VERSION = __nested_webpack_require_11975__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __nested_webpack_require_12702__) {

var toInteger = __nested_webpack_require_12702__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __nested_webpack_require_13218__) {

var global = __nested_webpack_require_13218__("da84");
var getOwnPropertyDescriptor = __nested_webpack_require_13218__("06cf").f;
var createNonEnumerableProperty = __nested_webpack_require_13218__("9112");
var redefine = __nested_webpack_require_13218__("6eeb");
var setGlobal = __nested_webpack_require_13218__("ce4e");
var copyConstructorProperties = __nested_webpack_require_13218__("e893");
var isForced = __nested_webpack_require_13218__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __nested_webpack_require_15718__) {

var internalObjectKeys = __nested_webpack_require_15718__("ca84");
var enumBugKeys = __nested_webpack_require_15718__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __nested_webpack_require_16193__) {

"use strict";

var redefine = __nested_webpack_require_16193__("6eeb");
var anObject = __nested_webpack_require_16193__("825a");
var fails = __nested_webpack_require_16193__("d039");
var flags = __nested_webpack_require_16193__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2ca0":
/***/ (function(module, exports, __nested_webpack_require_17241__) {

"use strict";

var $ = __nested_webpack_require_17241__("23e7");
var getOwnPropertyDescriptor = __nested_webpack_require_17241__("06cf").f;
var toLength = __nested_webpack_require_17241__("50c4");
var notARegExp = __nested_webpack_require_17241__("5a34");
var requireObjectCoercible = __nested_webpack_require_17241__("1d80");
var correctIsRegExpLogic = __nested_webpack_require_17241__("ab13");
var IS_PURE = __nested_webpack_require_17241__("c430");

var nativeStartsWith = ''.startsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return nativeStartsWith
      ? nativeStartsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __nested_webpack_require_18702__) {

var global = __nested_webpack_require_18702__("da84");
var userAgent = __nested_webpack_require_18702__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "342f":
/***/ (function(module, exports, __nested_webpack_require_19297__) {

var getBuiltIn = __nested_webpack_require_19297__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __nested_webpack_require_19489__) {

var classof = __nested_webpack_require_19489__("f5df");
var Iterators = __nested_webpack_require_19489__("3f8c");
var wellKnownSymbol = __nested_webpack_require_19489__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __nested_webpack_require_19892__) {

var DESCRIPTORS = __nested_webpack_require_19892__("83ab");
var definePropertyModule = __nested_webpack_require_19892__("9bf2");
var anObject = __nested_webpack_require_19892__("825a");
var objectKeys = __nested_webpack_require_19892__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __nested_webpack_require_20582__) {

var isObject = __nested_webpack_require_20582__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __nested_webpack_require_20868__) {

"use strict";

var charAt = __nested_webpack_require_20868__("6547").charAt;
var InternalStateModule = __nested_webpack_require_20868__("69f3");
var defineIterator = __nested_webpack_require_20868__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4160":
/***/ (function(module, exports, __nested_webpack_require_22053__) {

"use strict";

var $ = __nested_webpack_require_22053__("23e7");
var forEach = __nested_webpack_require_22053__("17c2");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __nested_webpack_require_22424__) {

var global = __nested_webpack_require_22424__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __nested_webpack_require_22576__) {

var fails = __nested_webpack_require_22576__("d039");
var classof = __nested_webpack_require_22576__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __nested_webpack_require_23153__) {

var wellKnownSymbol = __nested_webpack_require_23153__("b622");
var create = __nested_webpack_require_23153__("7c73");
var definePropertyModule = __nested_webpack_require_23153__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __nested_webpack_require_23867__) {

var isObject = __nested_webpack_require_23867__("861d");
var classof = __nested_webpack_require_23867__("c6b6");
var wellKnownSymbol = __nested_webpack_require_23867__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __nested_webpack_require_24366__) {

var fails = __nested_webpack_require_24366__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __nested_webpack_require_24691__) {

var toIndexedObject = __nested_webpack_require_24691__("fc6a");
var toLength = __nested_webpack_require_24691__("50c4");
var toAbsoluteIndex = __nested_webpack_require_24691__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __nested_webpack_require_26024__) {

"use strict";

var $ = __nested_webpack_require_26024__("23e7");
var $filter = __nested_webpack_require_26024__("b727").filter;
var arrayMethodHasSpeciesSupport = __nested_webpack_require_26024__("1dde");
var arrayMethodUsesToLength = __nested_webpack_require_26024__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4df4":
/***/ (function(module, exports, __nested_webpack_require_26846__) {

"use strict";

var bind = __nested_webpack_require_26846__("0366");
var toObject = __nested_webpack_require_26846__("7b0b");
var callWithSafeIterationClosing = __nested_webpack_require_26846__("9bdd");
var isArrayIteratorMethod = __nested_webpack_require_26846__("e95a");
var toLength = __nested_webpack_require_26846__("50c4");
var createProperty = __nested_webpack_require_26846__("8418");
var getIteratorMethod = __nested_webpack_require_26846__("35a1");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "4fad":
/***/ (function(module, exports, __nested_webpack_require_28666__) {

var $ = __nested_webpack_require_28666__("23e7");
var $entries = __nested_webpack_require_28666__("6f53").entries;

// `Object.entries` method
// https://tc39.github.io/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __nested_webpack_require_29024__) {

var toInteger = __nested_webpack_require_29024__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5319":
/***/ (function(module, exports, __nested_webpack_require_29589__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __nested_webpack_require_29589__("d784");
var anObject = __nested_webpack_require_29589__("825a");
var toObject = __nested_webpack_require_29589__("7b0b");
var toLength = __nested_webpack_require_29589__("50c4");
var toInteger = __nested_webpack_require_29589__("a691");
var requireObjectCoercible = __nested_webpack_require_29589__("1d80");
var advanceStringIndex = __nested_webpack_require_29589__("8aa5");
var regExpExec = __nested_webpack_require_29589__("14c3");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __nested_webpack_require_34963__) {

var IS_PURE = __nested_webpack_require_34963__("c430");
var store = __nested_webpack_require_34963__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __nested_webpack_require_35385__) {

var getBuiltIn = __nested_webpack_require_35385__("d066");
var getOwnPropertyNamesModule = __nested_webpack_require_35385__("241c");
var getOwnPropertySymbolsModule = __nested_webpack_require_35385__("7418");
var anObject = __nested_webpack_require_35385__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5a34":
/***/ (function(module, exports, __nested_webpack_require_36016__) {

var isRegExp = __nested_webpack_require_36016__("44e7");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "5db7":
/***/ (function(module, exports, __nested_webpack_require_36524__) {

"use strict";

var $ = __nested_webpack_require_36524__("23e7");
var flattenIntoArray = __nested_webpack_require_36524__("a2bf");
var toObject = __nested_webpack_require_36524__("7b0b");
var toLength = __nested_webpack_require_36524__("50c4");
var aFunction = __nested_webpack_require_36524__("1c0b");
var arraySpeciesCreate = __nested_webpack_require_36524__("65f0");

// `Array.prototype.flatMap` method
// https://github.com/tc39/proposal-flatMap
$({ target: 'Array', proto: true }, {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A;
    aFunction(callbackfn);
    A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __nested_webpack_require_37358__) {

var toInteger = __nested_webpack_require_37358__("a691");
var requireObjectCoercible = __nested_webpack_require_37358__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __nested_webpack_require_38564__) {

var isObject = __nested_webpack_require_38564__("861d");
var isArray = __nested_webpack_require_38564__("e8b5");
var wellKnownSymbol = __nested_webpack_require_38564__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __nested_webpack_require_39344__) {

var NATIVE_WEAK_MAP = __nested_webpack_require_39344__("7f9a");
var global = __nested_webpack_require_39344__("da84");
var isObject = __nested_webpack_require_39344__("861d");
var createNonEnumerableProperty = __nested_webpack_require_39344__("9112");
var objectHas = __nested_webpack_require_39344__("5135");
var sharedKey = __nested_webpack_require_39344__("f772");
var hiddenKeys = __nested_webpack_require_39344__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __nested_webpack_require_40911__) {

var global = __nested_webpack_require_40911__("da84");
var createNonEnumerableProperty = __nested_webpack_require_40911__("9112");
var has = __nested_webpack_require_40911__("5135");
var setGlobal = __nested_webpack_require_40911__("ce4e");
var inspectSource = __nested_webpack_require_40911__("8925");
var InternalStateModule = __nested_webpack_require_40911__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "6f53":
/***/ (function(module, exports, __nested_webpack_require_42446__) {

var DESCRIPTORS = __nested_webpack_require_42446__("83ab");
var objectKeys = __nested_webpack_require_42446__("df75");
var toIndexedObject = __nested_webpack_require_42446__("fc6a");
var propertyIsEnumerable = __nested_webpack_require_42446__("d1e7").f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.github.io/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.github.io/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "73d9":
/***/ (function(module, exports, __nested_webpack_require_43460__) {

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables = __nested_webpack_require_43460__("44d2");

addToUnscopables('flatMap');


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __nested_webpack_require_43850__) {

var path = __nested_webpack_require_43850__("428f");
var has = __nested_webpack_require_43850__("5135");
var wrappedWellKnownSymbolModule = __nested_webpack_require_43850__("e538");
var defineProperty = __nested_webpack_require_43850__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __nested_webpack_require_44570__) {

var requireObjectCoercible = __nested_webpack_require_44570__("1d80");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __nested_webpack_require_44887__) {

var anObject = __nested_webpack_require_44887__("825a");
var defineProperties = __nested_webpack_require_44887__("37e8");
var enumBugKeys = __nested_webpack_require_44887__("7839");
var hiddenKeys = __nested_webpack_require_44887__("d012");
var html = __nested_webpack_require_44887__("1be4");
var documentCreateElement = __nested_webpack_require_44887__("cc12");
var sharedKey = __nested_webpack_require_44887__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __nested_webpack_require_47780__) {

"use strict";

var $ = __nested_webpack_require_47780__("23e7");
var createIteratorConstructor = __nested_webpack_require_47780__("9ed3");
var getPrototypeOf = __nested_webpack_require_47780__("e163");
var setPrototypeOf = __nested_webpack_require_47780__("d2bb");
var setToStringTag = __nested_webpack_require_47780__("d44e");
var createNonEnumerableProperty = __nested_webpack_require_47780__("9112");
var redefine = __nested_webpack_require_47780__("6eeb");
var wellKnownSymbol = __nested_webpack_require_47780__("b622");
var IS_PURE = __nested_webpack_require_47780__("c430");
var Iterators = __nested_webpack_require_47780__("3f8c");
var IteratorsCore = __nested_webpack_require_47780__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __nested_webpack_require_51759__) {

var global = __nested_webpack_require_51759__("da84");
var inspectSource = __nested_webpack_require_51759__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __nested_webpack_require_52060__) {

var isObject = __nested_webpack_require_52060__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __nested_webpack_require_52318__) {

var fails = __nested_webpack_require_52318__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __nested_webpack_require_52613__) {

"use strict";

var toPrimitive = __nested_webpack_require_52613__("c04e");
var definePropertyModule = __nested_webpack_require_52613__("9bf2");
var createPropertyDescriptor = __nested_webpack_require_52613__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else // removed by dead control flow
{}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __nested_webpack_require_56535__) {

var store = __nested_webpack_require_56535__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __nested_webpack_require_56948__) {

"use strict";

var charAt = __nested_webpack_require_56948__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __nested_webpack_require_57661__) {

var DESCRIPTORS = __nested_webpack_require_57661__("83ab");
var definePropertyModule = __nested_webpack_require_57661__("9bf2");
var createPropertyDescriptor = __nested_webpack_require_57661__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __nested_webpack_require_58133__) {

"use strict";

var regexpFlags = __nested_webpack_require_58133__("ad6d");
var stickyHelpers = __nested_webpack_require_58133__("9f7f");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __nested_webpack_require_61029__) {

var fails = __nested_webpack_require_61029__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __nested_webpack_require_61684__) {

"use strict";

var $ = __nested_webpack_require_61684__("23e7");
var fails = __nested_webpack_require_61684__("d039");
var isArray = __nested_webpack_require_61684__("e8b5");
var isObject = __nested_webpack_require_61684__("861d");
var toObject = __nested_webpack_require_61684__("7b0b");
var toLength = __nested_webpack_require_61684__("50c4");
var createProperty = __nested_webpack_require_61684__("8418");
var arraySpeciesCreate = __nested_webpack_require_61684__("65f0");
var arrayMethodHasSpeciesSupport = __nested_webpack_require_61684__("1dde");
var wellKnownSymbol = __nested_webpack_require_61684__("b622");
var V8_VERSION = __nested_webpack_require_61684__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __nested_webpack_require_64056__) {

var anObject = __nested_webpack_require_64056__("825a");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __nested_webpack_require_64590__) {

var DESCRIPTORS = __nested_webpack_require_64590__("83ab");
var IE8_DOM_DEFINE = __nested_webpack_require_64590__("0cfb");
var anObject = __nested_webpack_require_64590__("825a");
var toPrimitive = __nested_webpack_require_64590__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __nested_webpack_require_65445__) {

"use strict";

var IteratorPrototype = __nested_webpack_require_65445__("ae93").IteratorPrototype;
var create = __nested_webpack_require_65445__("7c73");
var createPropertyDescriptor = __nested_webpack_require_65445__("5c6c");
var setToStringTag = __nested_webpack_require_65445__("d44e");
var Iterators = __nested_webpack_require_65445__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __nested_webpack_require_66212__) {

"use strict";


var fails = __nested_webpack_require_66212__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a2bf":
/***/ (function(module, exports, __nested_webpack_require_66910__) {

"use strict";

var isArray = __nested_webpack_require_66910__("e8b5");
var toLength = __nested_webpack_require_66910__("50c4");
var bind = __nested_webpack_require_66910__("0366");

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
  var element;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),

/***/ "a352":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_a352__;

/***/ }),

/***/ "a434":
/***/ (function(module, exports, __nested_webpack_require_68187__) {

"use strict";

var $ = __nested_webpack_require_68187__("23e7");
var toAbsoluteIndex = __nested_webpack_require_68187__("23cb");
var toInteger = __nested_webpack_require_68187__("a691");
var toLength = __nested_webpack_require_68187__("50c4");
var toObject = __nested_webpack_require_68187__("7b0b");
var arraySpeciesCreate = __nested_webpack_require_68187__("65f0");
var createProperty = __nested_webpack_require_68187__("8418");
var arrayMethodHasSpeciesSupport = __nested_webpack_require_68187__("1dde");
var arrayMethodUsesToLength = __nested_webpack_require_68187__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __nested_webpack_require_70991__) {

"use strict";

var $ = __nested_webpack_require_70991__("23e7");
var global = __nested_webpack_require_70991__("da84");
var getBuiltIn = __nested_webpack_require_70991__("d066");
var IS_PURE = __nested_webpack_require_70991__("c430");
var DESCRIPTORS = __nested_webpack_require_70991__("83ab");
var NATIVE_SYMBOL = __nested_webpack_require_70991__("4930");
var USE_SYMBOL_AS_UID = __nested_webpack_require_70991__("fdbf");
var fails = __nested_webpack_require_70991__("d039");
var has = __nested_webpack_require_70991__("5135");
var isArray = __nested_webpack_require_70991__("e8b5");
var isObject = __nested_webpack_require_70991__("861d");
var anObject = __nested_webpack_require_70991__("825a");
var toObject = __nested_webpack_require_70991__("7b0b");
var toIndexedObject = __nested_webpack_require_70991__("fc6a");
var toPrimitive = __nested_webpack_require_70991__("c04e");
var createPropertyDescriptor = __nested_webpack_require_70991__("5c6c");
var nativeObjectCreate = __nested_webpack_require_70991__("7c73");
var objectKeys = __nested_webpack_require_70991__("df75");
var getOwnPropertyNamesModule = __nested_webpack_require_70991__("241c");
var getOwnPropertyNamesExternal = __nested_webpack_require_70991__("057f");
var getOwnPropertySymbolsModule = __nested_webpack_require_70991__("7418");
var getOwnPropertyDescriptorModule = __nested_webpack_require_70991__("06cf");
var definePropertyModule = __nested_webpack_require_70991__("9bf2");
var propertyIsEnumerableModule = __nested_webpack_require_70991__("d1e7");
var createNonEnumerableProperty = __nested_webpack_require_70991__("9112");
var redefine = __nested_webpack_require_70991__("6eeb");
var shared = __nested_webpack_require_70991__("5692");
var sharedKey = __nested_webpack_require_70991__("f772");
var hiddenKeys = __nested_webpack_require_70991__("d012");
var uid = __nested_webpack_require_70991__("90e3");
var wellKnownSymbol = __nested_webpack_require_70991__("b622");
var wrappedWellKnownSymbolModule = __nested_webpack_require_70991__("e538");
var defineWellKnownSymbol = __nested_webpack_require_70991__("746f");
var setToStringTag = __nested_webpack_require_70991__("d44e");
var InternalStateModule = __nested_webpack_require_70991__("69f3");
var $forEach = __nested_webpack_require_70991__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a630":
/***/ (function(module, exports, __nested_webpack_require_83743__) {

var $ = __nested_webpack_require_83743__("23e7");
var from = __nested_webpack_require_83743__("4df4");
var checkCorrectnessOfIteration = __nested_webpack_require_83743__("1c7e");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __nested_webpack_require_84230__) {

"use strict";

var fails = __nested_webpack_require_84230__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "ab13":
/***/ (function(module, exports, __nested_webpack_require_84953__) {

var wellKnownSymbol = __nested_webpack_require_84953__("b622");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __nested_webpack_require_85379__) {

"use strict";

var $ = __nested_webpack_require_85379__("23e7");
var exec = __nested_webpack_require_85379__("9263");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __nested_webpack_require_85639__) {

"use strict";

var anObject = __nested_webpack_require_85639__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __nested_webpack_require_86210__) {

var DESCRIPTORS = __nested_webpack_require_86210__("83ab");
var fails = __nested_webpack_require_86210__("d039");
var has = __nested_webpack_require_86210__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __nested_webpack_require_87178__) {

"use strict";

var getPrototypeOf = __nested_webpack_require_87178__("e163");
var createNonEnumerableProperty = __nested_webpack_require_87178__("9112");
var has = __nested_webpack_require_87178__("5135");
var wellKnownSymbol = __nested_webpack_require_87178__("b622");
var IS_PURE = __nested_webpack_require_87178__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __nested_webpack_require_88549__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __nested_webpack_require_88549__("00ee");
var classof = __nested_webpack_require_88549__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __nested_webpack_require_88990__) {

var DESCRIPTORS = __nested_webpack_require_88990__("83ab");
var defineProperty = __nested_webpack_require_88990__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __nested_webpack_require_89727__) {

var global = __nested_webpack_require_89727__("da84");
var shared = __nested_webpack_require_89727__("5692");
var has = __nested_webpack_require_89727__("5135");
var uid = __nested_webpack_require_89727__("90e3");
var NATIVE_SYMBOL = __nested_webpack_require_89727__("4930");
var USE_SYMBOL_AS_UID = __nested_webpack_require_89727__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __nested_webpack_require_90533__) {

var $ = __nested_webpack_require_90533__("23e7");
var toObject = __nested_webpack_require_90533__("7b0b");
var nativeKeys = __nested_webpack_require_90533__("df75");
var fails = __nested_webpack_require_90533__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __nested_webpack_require_91067__) {

var bind = __nested_webpack_require_91067__("0366");
var IndexedObject = __nested_webpack_require_91067__("44ad");
var toObject = __nested_webpack_require_91067__("7b0b");
var toLength = __nested_webpack_require_91067__("50c4");
var arraySpeciesCreate = __nested_webpack_require_91067__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __nested_webpack_require_93653__) {

var isObject = __nested_webpack_require_93653__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __nested_webpack_require_94766__) {

var global = __nested_webpack_require_94766__("da84");
var setGlobal = __nested_webpack_require_94766__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c740":
/***/ (function(module, exports, __nested_webpack_require_95051__) {

"use strict";

var $ = __nested_webpack_require_95051__("23e7");
var $findIndex = __nested_webpack_require_95051__("b727").findIndex;
var addToUnscopables = __nested_webpack_require_95051__("44d2");
var arrayMethodUsesToLength = __nested_webpack_require_95051__("ae40");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND_INDEX);

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c975":
/***/ (function(module, exports, __nested_webpack_require_96561__) {

"use strict";

var $ = __nested_webpack_require_96561__("23e7");
var $indexOf = __nested_webpack_require_96561__("4d64").indexOf;
var arrayMethodIsStrict = __nested_webpack_require_96561__("a640");
var arrayMethodUsesToLength = __nested_webpack_require_96561__("ae40");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __nested_webpack_require_97562__) {

var has = __nested_webpack_require_97562__("5135");
var toIndexedObject = __nested_webpack_require_97562__("fc6a");
var indexOf = __nested_webpack_require_97562__("4d64").indexOf;
var hiddenKeys = __nested_webpack_require_97562__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "caad":
/***/ (function(module, exports, __nested_webpack_require_98195__) {

"use strict";

var $ = __nested_webpack_require_98195__("23e7");
var $includes = __nested_webpack_require_98195__("4d64").includes;
var addToUnscopables = __nested_webpack_require_98195__("44d2");
var arrayMethodUsesToLength = __nested_webpack_require_98195__("ae40");

var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __nested_webpack_require_98993__) {

var global = __nested_webpack_require_98993__("da84");
var isObject = __nested_webpack_require_98993__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __nested_webpack_require_99408__) {

var global = __nested_webpack_require_99408__("da84");
var createNonEnumerableProperty = __nested_webpack_require_99408__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __nested_webpack_require_100021__) {

var path = __nested_webpack_require_100021__("428f");
var global = __nested_webpack_require_100021__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __nested_webpack_require_101210__) {

var defineWellKnownSymbol = __nested_webpack_require_101210__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __nested_webpack_require_101481__) {

var anObject = __nested_webpack_require_101481__("825a");
var aPossiblePrototype = __nested_webpack_require_101481__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __nested_webpack_require_102401__) {

var TO_STRING_TAG_SUPPORT = __nested_webpack_require_102401__("00ee");
var redefine = __nested_webpack_require_102401__("6eeb");
var toString = __nested_webpack_require_102401__("b041");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __nested_webpack_require_102836__) {

var defineProperty = __nested_webpack_require_102836__("9bf2").f;
var has = __nested_webpack_require_102836__("5135");
var wellKnownSymbol = __nested_webpack_require_102836__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d58f":
/***/ (function(module, exports, __nested_webpack_require_103312__) {

var aFunction = __nested_webpack_require_103312__("1c0b");
var toObject = __nested_webpack_require_103312__("7b0b");
var IndexedObject = __nested_webpack_require_103312__("44ad");
var toLength = __nested_webpack_require_103312__("50c4");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __nested_webpack_require_104707__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__nested_webpack_require_104707__("ac1f");
var redefine = __nested_webpack_require_104707__("6eeb");
var fails = __nested_webpack_require_104707__("d039");
var wellKnownSymbol = __nested_webpack_require_104707__("b622");
var regexpExec = __nested_webpack_require_104707__("9263");
var createNonEnumerableProperty = __nested_webpack_require_104707__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __nested_webpack_require_109390__) {

"use strict";

var $ = __nested_webpack_require_109390__("23e7");
var $map = __nested_webpack_require_109390__("b727").map;
var arrayMethodHasSpeciesSupport = __nested_webpack_require_109390__("1dde");
var arrayMethodUsesToLength = __nested_webpack_require_109390__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __nested_webpack_require_110182__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __nested_webpack_require_110182__("c8ba")))

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __nested_webpack_require_110847__) {

var $ = __nested_webpack_require_110847__("23e7");
var DESCRIPTORS = __nested_webpack_require_110847__("83ab");
var ownKeys = __nested_webpack_require_110847__("56ef");
var toIndexedObject = __nested_webpack_require_110847__("fc6a");
var getOwnPropertyDescriptorModule = __nested_webpack_require_110847__("06cf");
var createProperty = __nested_webpack_require_110847__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "dbf1":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_111898__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __nested_webpack_require_111898__.d(__nested_webpack_exports__, "a", function() { return console; });
function getConsole() {
  if (typeof window !== "undefined") {
    return window.console;
  }

  return global.console;
}

var console = getConsole();

/* WEBPACK VAR INJECTION */}.call(this, __nested_webpack_require_111898__("c8ba")))

/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __nested_webpack_require_112375__) {

var global = __nested_webpack_require_112375__("da84");
var DOMIterables = __nested_webpack_require_112375__("fdbc");
var ArrayIteratorMethods = __nested_webpack_require_112375__("e260");
var createNonEnumerableProperty = __nested_webpack_require_112375__("9112");
var wellKnownSymbol = __nested_webpack_require_112375__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __nested_webpack_require_113958__) {

var internalObjectKeys = __nested_webpack_require_113958__("ca84");
var enumBugKeys = __nested_webpack_require_113958__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __nested_webpack_require_114318__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __nested_webpack_require_114318__("23e7");
var DESCRIPTORS = __nested_webpack_require_114318__("83ab");
var global = __nested_webpack_require_114318__("da84");
var has = __nested_webpack_require_114318__("5135");
var isObject = __nested_webpack_require_114318__("861d");
var defineProperty = __nested_webpack_require_114318__("9bf2").f;
var copyConstructorProperties = __nested_webpack_require_114318__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __nested_webpack_require_116469__) {

var has = __nested_webpack_require_116469__("5135");
var toObject = __nested_webpack_require_116469__("7b0b");
var sharedKey = __nested_webpack_require_116469__("f772");
var CORRECT_PROTOTYPE_GETTER = __nested_webpack_require_116469__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __nested_webpack_require_117232__) {

var fails = __nested_webpack_require_117232__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __nested_webpack_require_117522__) {

"use strict";

var toIndexedObject = __nested_webpack_require_117522__("fc6a");
var addToUnscopables = __nested_webpack_require_117522__("44d2");
var Iterators = __nested_webpack_require_117522__("3f8c");
var InternalStateModule = __nested_webpack_require_117522__("69f3");
var defineIterator = __nested_webpack_require_117522__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e439":
/***/ (function(module, exports, __nested_webpack_require_119765__) {

var $ = __nested_webpack_require_119765__("23e7");
var fails = __nested_webpack_require_119765__("d039");
var toIndexedObject = __nested_webpack_require_119765__("fc6a");
var nativeGetOwnPropertyDescriptor = __nested_webpack_require_119765__("06cf").f;
var DESCRIPTORS = __nested_webpack_require_119765__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __nested_webpack_require_120569__) {

var wellKnownSymbol = __nested_webpack_require_120569__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __nested_webpack_require_120734__) {

var has = __nested_webpack_require_120734__("5135");
var ownKeys = __nested_webpack_require_120734__("56ef");
var getOwnPropertyDescriptorModule = __nested_webpack_require_120734__("06cf");
var definePropertyModule = __nested_webpack_require_120734__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __nested_webpack_require_121379__) {

var classof = __nested_webpack_require_121379__("c6b6");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __nested_webpack_require_121681__) {

var wellKnownSymbol = __nested_webpack_require_121681__("b622");
var Iterators = __nested_webpack_require_121681__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __nested_webpack_require_122106__) {

var TO_STRING_TAG_SUPPORT = __nested_webpack_require_122106__("00ee");
var classofRaw = __nested_webpack_require_122106__("c6b6");
var wellKnownSymbol = __nested_webpack_require_122106__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __nested_webpack_require_123159__) {

var shared = __nested_webpack_require_123159__("5692");
var uid = __nested_webpack_require_123159__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fb15":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_123448__) {

"use strict";
// ESM COMPAT FLAG
__nested_webpack_require_123448__.r(__nested_webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __nested_webpack_require_123448__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __nested_webpack_require_123448__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __nested_webpack_require_123448__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __nested_webpack_require_123448__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __nested_webpack_require_123448__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __nested_webpack_require_123448__("c975");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __nested_webpack_require_123448__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __nested_webpack_require_123448__("a434");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __nested_webpack_require_123448__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __nested_webpack_require_123448__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __nested_webpack_require_123448__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __nested_webpack_require_123448__("dbb4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __nested_webpack_require_123448__("b64b");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __nested_webpack_require_123448__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __nested_webpack_require_123448__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __nested_webpack_require_123448__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __nested_webpack_require_123448__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __nested_webpack_require_123448__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __nested_webpack_require_123448__("ddb0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js







function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __nested_webpack_require_123448__("a630");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __nested_webpack_require_123448__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __nested_webpack_require_123448__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __nested_webpack_require_123448__("25f0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js







function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js








function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: external {"commonjs":"sortablejs","commonjs2":"sortablejs","amd":"sortablejs","root":"Sortable"}
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_ = __nested_webpack_require_123448__("a352");
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default = /*#__PURE__*/__nested_webpack_require_123448__.n(external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_);

// CONCATENATED MODULE: ./src/util/htmlHelper.js
function removeNode(node) {
  if (node.parentElement !== null) {
    node.parentElement.removeChild(node);
  }
}

function insertNodeAt(fatherNode, node, position) {
  var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
  fatherNode.insertBefore(node, refNode);
}


// EXTERNAL MODULE: ./src/util/console.js
var console = __nested_webpack_require_123448__("dbf1");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __nested_webpack_require_123448__("13d5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __nested_webpack_require_123448__("4fad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __nested_webpack_require_123448__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __nested_webpack_require_123448__("5319");

// CONCATENATED MODULE: ./src/util/string.js



function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

var regex = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(regex, function (_, c) {
    return c.toUpperCase();
  });
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.flat-map.js
var es_array_flat_map = __nested_webpack_require_123448__("5db7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unscopables.flat-map.js
var es_array_unscopables_flat_map = __nested_webpack_require_123448__("73d9");

// CONCATENATED MODULE: ./src/core/sortableEvents.js




var manageAndEmit = ["Start", "Add", "Remove", "Update", "End"];
var emit = ["Choose", "Unchoose", "Sort", "Filter", "Clone"];
var manage = ["Move"];
var eventHandlerNames = [manage, manageAndEmit, emit].flatMap(function (events) {
  return events;
}).map(function (evt) {
  return "on".concat(evt);
});
var events = {
  manage: manage,
  manageAndEmit: manageAndEmit,
  emit: emit
};

function isReadOnly(eventName) {
  return eventHandlerNames.indexOf(eventName) !== -1;
}


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __nested_webpack_require_123448__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __nested_webpack_require_123448__("2ca0");

// CONCATENATED MODULE: ./src/util/tags.js


var tags = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "math", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"];

function isHtmlTag(name) {
  return tags.includes(name);
}

function isTransition(name) {
  return ["transition-group", "TransitionGroup"].includes(name);
}

function isHtmlAttribute(value) {
  return ["id", "class", "role", "style"].includes(value) || value.startsWith("data-") || value.startsWith("aria-") || value.startsWith("on");
}


// CONCATENATED MODULE: ./src/core/componentBuilderHelper.js












function project(entries) {
  return entries.reduce(function (res, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    res[key] = value;
    return res;
  }, {});
}

function getComponentAttributes(_ref3) {
  var $attrs = _ref3.$attrs,
      _ref3$componentData = _ref3.componentData,
      componentData = _ref3$componentData === void 0 ? {} : _ref3$componentData;
  var attributes = project(Object.entries($attrs).filter(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        key = _ref5[0],
        _ = _ref5[1];

    return isHtmlAttribute(key);
  }));
  return _objectSpread2(_objectSpread2({}, attributes), componentData);
}

function createSortableOption(_ref6) {
  var $attrs = _ref6.$attrs,
      callBackBuilder = _ref6.callBackBuilder;
  var options = project(getValidSortableEntries($attrs));
  Object.entries(callBackBuilder).forEach(function (_ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
        eventType = _ref8[0],
        eventBuilder = _ref8[1];

    events[eventType].forEach(function (event) {
      options["on".concat(event)] = eventBuilder(event);
    });
  });
  var draggable = "[data-draggable]".concat(options.draggable || "");
  return _objectSpread2(_objectSpread2({}, options), {}, {
    draggable: draggable
  });
}

function getValidSortableEntries(value) {
  return Object.entries(value).filter(function (_ref9) {
    var _ref10 = _slicedToArray(_ref9, 2),
        key = _ref10[0],
        _ = _ref10[1];

    return !isHtmlAttribute(key);
  }).map(function (_ref11) {
    var _ref12 = _slicedToArray(_ref11, 2),
        key = _ref12[0],
        value = _ref12[1];

    return [camelize(key), value];
  }).filter(function (_ref13) {
    var _ref14 = _slicedToArray(_ref13, 2),
        key = _ref14[0],
        _ = _ref14[1];

    return !isReadOnly(key);
  });
}


// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __nested_webpack_require_123448__("c740");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./src/core/componentStructure.js








var getHtmlElementFromNode = function getHtmlElementFromNode(_ref) {
  var el = _ref.el;
  return el;
};

var addContext = function addContext(domElement, context) {
  return domElement.__draggable_context = context;
};

var getContext = function getContext(domElement) {
  return domElement.__draggable_context;
};

var componentStructure_ComponentStructure = /*#__PURE__*/function () {
  function ComponentStructure(_ref2) {
    var _ref2$nodes = _ref2.nodes,
        header = _ref2$nodes.header,
        defaultNodes = _ref2$nodes.default,
        footer = _ref2$nodes.footer,
        root = _ref2.root,
        realList = _ref2.realList;

    _classCallCheck(this, ComponentStructure);

    this.defaultNodes = defaultNodes;
    this.children = [].concat(_toConsumableArray(header), _toConsumableArray(defaultNodes), _toConsumableArray(footer));
    this.externalComponent = root.externalComponent;
    this.rootTransition = root.transition;
    this.tag = root.tag;
    this.realList = realList;
  }

  _createClass(ComponentStructure, [{
    key: "render",
    value: function render(h, attributes) {
      var tag = this.tag,
          children = this.children,
          _isRootComponent = this._isRootComponent;
      var option = !_isRootComponent ? children : {
        default: function _default() {
          return children;
        }
      };
      return h(tag, attributes, option);
    }
  }, {
    key: "updated",
    value: function updated() {
      var defaultNodes = this.defaultNodes,
          realList = this.realList;
      defaultNodes.forEach(function (node, index) {
        addContext(getHtmlElementFromNode(node), {
          element: realList[index],
          index: index
        });
      });
    }
  }, {
    key: "getUnderlyingVm",
    value: function getUnderlyingVm(domElement) {
      return getContext(domElement);
    }
  }, {
    key: "getVmIndexFromDomIndex",
    value: function getVmIndexFromDomIndex(domIndex, element) {
      var defaultNodes = this.defaultNodes;
      var length = defaultNodes.length;
      var domChildren = element.children;
      var domElement = domChildren.item(domIndex);

      if (domElement === null) {
        return length;
      }

      var context = getContext(domElement);

      if (context) {
        return context.index;
      }

      if (length === 0) {
        return 0;
      }

      var firstDomListElement = getHtmlElementFromNode(defaultNodes[0]);

      var indexFirstDomListElement = _toConsumableArray(domChildren).findIndex(function (element) {
        return element === firstDomListElement;
      });

      return domIndex < indexFirstDomListElement ? 0 : length;
    }
  }, {
    key: "_isRootComponent",
    get: function get() {
      return this.externalComponent || this.rootTransition;
    }
  }]);

  return ComponentStructure;
}();


// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __nested_webpack_require_123448__("8bbf");

// CONCATENATED MODULE: ./src/core/renderHelper.js









function getSlot(slots, key) {
  var slotValue = slots[key];
  return slotValue ? slotValue() : [];
}

function computeNodes(_ref) {
  var $slots = _ref.$slots,
      realList = _ref.realList,
      getKey = _ref.getKey;
  var normalizedList = realList || [];

  var _map = ["header", "footer"].map(function (name) {
    return getSlot($slots, name);
  }),
      _map2 = _slicedToArray(_map, 2),
      header = _map2[0],
      footer = _map2[1];

  var item = $slots.item;

  if (!item) {
    throw new Error("draggable element must have an item slot");
  }

  var defaultNodes = normalizedList.flatMap(function (element, index) {
    return item({
      element: element,
      index: index
    }).map(function (node) {
      node.key = getKey(element);
      node.props = _objectSpread2(_objectSpread2({}, node.props || {}), {}, {
        "data-draggable": true
      });
      return node;
    });
  });

  if (defaultNodes.length !== normalizedList.length) {
    throw new Error("Item slot must have only one child");
  }

  return {
    header: header,
    footer: footer,
    default: defaultNodes
  };
}

function getRootInformation(tag) {
  var transition = isTransition(tag);
  var externalComponent = !isHtmlTag(tag) && !transition;
  return {
    transition: transition,
    externalComponent: externalComponent,
    tag: externalComponent ? Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])(tag) : transition ? external_commonjs_vue_commonjs2_vue_root_Vue_["TransitionGroup"] : tag
  };
}

function computeComponentStructure(_ref2) {
  var $slots = _ref2.$slots,
      tag = _ref2.tag,
      realList = _ref2.realList,
      getKey = _ref2.getKey;
  var nodes = computeNodes({
    $slots: $slots,
    realList: realList,
    getKey: getKey
  });
  var root = getRootInformation(tag);
  return new componentStructure_ComponentStructure({
    nodes: nodes,
    root: root,
    realList: realList
  });
}


// CONCATENATED MODULE: ./src/vuedraggable.js


















function _emit(evtName, evtData) {
  var _this = this;

  Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function () {
    return _this.$emit(evtName.toLowerCase(), evtData);
  });
}

function _manage(evtName) {
  var _this2 = this;

  return function (evtData, originalElement) {
    if (_this2.realList !== null) {
      return _this2["onDrag".concat(evtName)](evtData, originalElement);
    }
  };
}

function _manageAndEmit(evtName) {
  var _this3 = this;

  var delegateCallBack = _manage.call(this, evtName);

  return function (evtData, originalElement) {
    delegateCallBack.call(_this3, evtData, originalElement);

    _emit.call(_this3, evtName, evtData);
  };
}

var draggingElement = null;
var props = {
  list: {
    type: Array,
    required: false,
    default: null
  },
  modelValue: {
    type: Array,
    required: false,
    default: null
  },
  itemKey: {
    type: [String, Function],
    required: true
  },
  clone: {
    type: Function,
    default: function _default(original) {
      return original;
    }
  },
  tag: {
    type: String,
    default: "div"
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: false,
    default: null
  }
};
var emits = ["update:modelValue", "change"].concat(_toConsumableArray([].concat(_toConsumableArray(events.manageAndEmit), _toConsumableArray(events.emit)).map(function (evt) {
  return evt.toLowerCase();
})));
var draggableComponent = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "draggable",
  inheritAttrs: false,
  props: props,
  emits: emits,
  data: function data() {
    return {
      error: false
    };
  },
  render: function render() {
    try {
      this.error = false;
      var $slots = this.$slots,
          $attrs = this.$attrs,
          tag = this.tag,
          componentData = this.componentData,
          realList = this.realList,
          getKey = this.getKey;
      var componentStructure = computeComponentStructure({
        $slots: $slots,
        tag: tag,
        realList: realList,
        getKey: getKey
      });
      this.componentStructure = componentStructure;
      var attributes = getComponentAttributes({
        $attrs: $attrs,
        componentData: componentData
      });
      return componentStructure.render(external_commonjs_vue_commonjs2_vue_root_Vue_["h"], attributes);
    } catch (err) {
      this.error = true;
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["h"])("pre", {
        style: {
          color: "red"
        }
      }, err.stack);
    }
  },
  created: function created() {
    if (this.list !== null && this.modelValue !== null) {
      console["a" /* console */].error("modelValue and list props are mutually exclusive! Please set one or another.");
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    if (this.error) {
      return;
    }

    var $attrs = this.$attrs,
        $el = this.$el,
        componentStructure = this.componentStructure;
    componentStructure.updated();
    var sortableOptions = createSortableOption({
      $attrs: $attrs,
      callBackBuilder: {
        manageAndEmit: function manageAndEmit(event) {
          return _manageAndEmit.call(_this4, event);
        },
        emit: function emit(event) {
          return _emit.bind(_this4, event);
        },
        manage: function manage(event) {
          return _manage.call(_this4, event);
        }
      }
    });
    var targetDomElement = $el.nodeType === 1 ? $el : $el.parentElement;
    this._sortable = new external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default.a(targetDomElement, sortableOptions);
    this.targetDomElement = targetDomElement;
    targetDomElement.__draggable_component__ = this;
  },
  updated: function updated() {
    this.componentStructure.updated();
  },
  beforeUnmount: function beforeUnmount() {
    if (this._sortable !== undefined) this._sortable.destroy();
  },
  computed: {
    realList: function realList() {
      var list = this.list;
      return list ? list : this.modelValue;
    },
    getKey: function getKey() {
      var itemKey = this.itemKey;

      if (typeof itemKey === "function") {
        return itemKey;
      }

      return function (element) {
        return element[itemKey];
      };
    }
  },
  watch: {
    $attrs: {
      handler: function handler(newOptionValue) {
        var _sortable = this._sortable;
        if (!_sortable) return;
        getValidSortableEntries(newOptionValue).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          _sortable.option(key, value);
        });
      },
      deep: true
    }
  },
  methods: {
    getUnderlyingVm: function getUnderlyingVm(domElement) {
      return this.componentStructure.getUnderlyingVm(domElement) || null;
    },
    getUnderlyingPotencialDraggableComponent: function getUnderlyingPotencialDraggableComponent(htmElement) {
      //TODO check case where you need to see component children
      return htmElement.__draggable_component__;
    },
    emitChanges: function emitChanges(evt) {
      var _this5 = this;

      Object(external_commonjs_vue_commonjs2_vue_root_Vue_["nextTick"])(function () {
        return _this5.$emit("change", evt);
      });
    },
    alterList: function alterList(onList) {
      if (this.list) {
        onList(this.list);
        return;
      }

      var newList = _toConsumableArray(this.modelValue);

      onList(newList);
      this.$emit("update:modelValue", newList);
    },
    spliceList: function spliceList() {
      var _arguments = arguments;

      var spliceList = function spliceList(list) {
        return list.splice.apply(list, _toConsumableArray(_arguments));
      };

      this.alterList(spliceList);
    },
    updatePosition: function updatePosition(oldIndex, newIndex) {
      var updatePosition = function updatePosition(list) {
        return list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
      };

      this.alterList(updatePosition);
    },
    getRelatedContextFromMoveEvent: function getRelatedContextFromMoveEvent(_ref3) {
      var to = _ref3.to,
          related = _ref3.related;
      var component = this.getUnderlyingPotencialDraggableComponent(to);

      if (!component) {
        return {
          component: component
        };
      }

      var list = component.realList;
      var context = {
        list: list,
        component: component
      };

      if (to !== related && list) {
        var destination = component.getUnderlyingVm(related) || {};
        return _objectSpread2(_objectSpread2({}, destination), context);
      }

      return context;
    },
    getVmIndexFromDomIndex: function getVmIndexFromDomIndex(domIndex) {
      return this.componentStructure.getVmIndexFromDomIndex(domIndex, this.targetDomElement);
    },
    onDragStart: function onDragStart(evt) {
      this.context = this.getUnderlyingVm(evt.item);
      evt.item._underlying_vm_ = this.clone(this.context.element);
      draggingElement = evt.item;
    },
    onDragAdd: function onDragAdd(evt) {
      var element = evt.item._underlying_vm_;

      if (element === undefined) {
        return;
      }

      removeNode(evt.item);
      var newIndex = this.getVmIndexFromDomIndex(evt.newIndex);
      this.spliceList(newIndex, 0, element);
      var added = {
        element: element,
        newIndex: newIndex
      };
      this.emitChanges({
        added: added
      });
    },
    onDragRemove: function onDragRemove(evt) {
      insertNodeAt(this.$el, evt.item, evt.oldIndex);

      if (evt.pullMode === "clone") {
        removeNode(evt.clone);
        return;
      }

      var _this$context = this.context,
          oldIndex = _this$context.index,
          element = _this$context.element;
      this.spliceList(oldIndex, 1);
      var removed = {
        element: element,
        oldIndex: oldIndex
      };
      this.emitChanges({
        removed: removed
      });
    },
    onDragUpdate: function onDragUpdate(evt) {
      removeNode(evt.item);
      insertNodeAt(evt.from, evt.item, evt.oldIndex);
      var oldIndex = this.context.index;
      var newIndex = this.getVmIndexFromDomIndex(evt.newIndex);
      this.updatePosition(oldIndex, newIndex);
      var moved = {
        element: this.context.element,
        oldIndex: oldIndex,
        newIndex: newIndex
      };
      this.emitChanges({
        moved: moved
      });
    },
    computeFutureIndex: function computeFutureIndex(relatedContext, evt) {
      if (!relatedContext.element) {
        return 0;
      }

      var domChildren = _toConsumableArray(evt.to.children).filter(function (el) {
        return el.style["display"] !== "none";
      });

      var currentDomIndex = domChildren.indexOf(evt.related);
      var currentIndex = relatedContext.component.getVmIndexFromDomIndex(currentDomIndex);
      var draggedInList = domChildren.indexOf(draggingElement) !== -1;
      return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
    },
    onDragMove: function onDragMove(evt, originalEvent) {
      var move = this.move,
          realList = this.realList;

      if (!move || !realList) {
        return true;
      }

      var relatedContext = this.getRelatedContextFromMoveEvent(evt);
      var futureIndex = this.computeFutureIndex(relatedContext, evt);

      var draggedContext = _objectSpread2(_objectSpread2({}, this.context), {}, {
        futureIndex: futureIndex
      });

      var sendEvent = _objectSpread2(_objectSpread2({}, evt), {}, {
        relatedContext: relatedContext,
        draggedContext: draggedContext
      });

      return move(sendEvent, originalEvent);
    },
    onDragEnd: function onDragEnd() {
      draggingElement = null;
    }
  }
});
/* harmony default export */ var vuedraggable = (draggableComponent);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __nested_webpack_exports__["default"] = (vuedraggable);



/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __nested_webpack_require_154160__) {

"use strict";

var $ = __nested_webpack_require_154160__("23e7");
var isObject = __nested_webpack_require_154160__("861d");
var isArray = __nested_webpack_require_154160__("e8b5");
var toAbsoluteIndex = __nested_webpack_require_154160__("23cb");
var toLength = __nested_webpack_require_154160__("50c4");
var toIndexedObject = __nested_webpack_require_154160__("fc6a");
var createProperty = __nested_webpack_require_154160__("8418");
var wellKnownSymbol = __nested_webpack_require_154160__("b622");
var arrayMethodHasSpeciesSupport = __nested_webpack_require_154160__("1dde");
var arrayMethodUsesToLength = __nested_webpack_require_154160__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __nested_webpack_require_156302__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __nested_webpack_require_156302__("44ad");
var requireObjectCoercible = __nested_webpack_require_156302__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __nested_webpack_require_157455__) {

var NATIVE_SYMBOL = __nested_webpack_require_157455__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vuedraggable.umd.js.map

/***/ }),

/***/ "./src/vue/trash/ux/elements/Layers.vue":
/*!**********************************************!*\
  !*** ./src/vue/trash/ux/elements/Layers.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layers_vue_vue_type_template_id_88074bf2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layers.vue?vue&type=template&id=88074bf2 */ "./src/vue/trash/ux/elements/Layers.vue?vue&type=template&id=88074bf2");
/* harmony import */ var _Layers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layers.vue?vue&type=script&lang=js */ "./src/vue/trash/ux/elements/Layers.vue?vue&type=script&lang=js");
/* harmony import */ var _Layers_vue_vue_type_style_index_0_id_88074bf2_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layers.vue?vue&type=style&index=0&id=88074bf2&lang=scss */ "./src/vue/trash/ux/elements/Layers.vue?vue&type=style&index=0&id=88074bf2&lang=scss");
/* harmony import */ var _app_plugins_zen_threes_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_app_plugins_zen_threes_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Layers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Layers_vue_vue_type_template_id_88074bf2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/vue/trash/ux/elements/Layers.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/vue/trash/ux/elements/Layers.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./src/vue/trash/ux/elements/Layers.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layers.vue?vue&type=script&lang=js */ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Layers.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/vue/trash/ux/elements/Layers.vue?vue&type=style&index=0&id=88074bf2&lang=scss":
/*!*******************************************************************************************!*\
  !*** ./src/vue/trash/ux/elements/Layers.vue?vue&type=style&index=0&id=88074bf2&lang=scss ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_cjs_js_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layers_vue_vue_type_style_index_0_id_88074bf2_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!../../../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layers.vue?vue&type=style&index=0&id=88074bf2&lang=scss */ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Layers.vue?vue&type=style&index=0&id=88074bf2&lang=scss");


/***/ }),

/***/ "./src/vue/trash/ux/elements/Layers.vue?vue&type=template&id=88074bf2":
/*!****************************************************************************!*\
  !*** ./src/vue/trash/ux/elements/Layers.vue?vue&type=template&id=88074bf2 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layers_vue_vue_type_template_id_88074bf2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Layers_vue_vue_type_template_id_88074bf2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Layers.vue?vue&type=template&id=88074bf2 */ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Layers.vue?vue&type=template&id=88074bf2");


/***/ }),

/***/ "./src/vue/trash/ux/elements/Search.vue":
/*!**********************************************!*\
  !*** ./src/vue/trash/ux/elements/Search.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Search_vue_vue_type_template_id_d91d7126__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search.vue?vue&type=template&id=d91d7126 */ "./src/vue/trash/ux/elements/Search.vue?vue&type=template&id=d91d7126");
/* harmony import */ var _Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.vue?vue&type=script&lang=js */ "./src/vue/trash/ux/elements/Search.vue?vue&type=script&lang=js");
/* harmony import */ var _Search_vue_vue_type_style_index_0_id_d91d7126_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Search.vue?vue&type=style&index=0&id=d91d7126&lang=scss */ "./src/vue/trash/ux/elements/Search.vue?vue&type=style&index=0&id=d91d7126&lang=scss");
/* harmony import */ var _app_plugins_zen_threes_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_app_plugins_zen_threes_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Search_vue_vue_type_template_id_d91d7126__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/vue/trash/ux/elements/Search.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/vue/trash/ux/elements/Search.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./src/vue/trash/ux/elements/Search.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Search.vue?vue&type=script&lang=js */ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Search.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/vue/trash/ux/elements/Search.vue?vue&type=style&index=0&id=d91d7126&lang=scss":
/*!*******************************************************************************************!*\
  !*** ./src/vue/trash/ux/elements/Search.vue?vue&type=style&index=0&id=d91d7126&lang=scss ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_cjs_js_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_style_index_0_id_d91d7126_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!../../../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Search.vue?vue&type=style&index=0&id=d91d7126&lang=scss */ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Search.vue?vue&type=style&index=0&id=d91d7126&lang=scss");


/***/ }),

/***/ "./src/vue/trash/ux/elements/Search.vue?vue&type=template&id=d91d7126":
/*!****************************************************************************!*\
  !*** ./src/vue/trash/ux/elements/Search.vue?vue&type=template&id=d91d7126 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_template_id_d91d7126__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Search_vue_vue_type_template_id_d91d7126__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Search.vue?vue&type=template&id=d91d7126 */ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Search.vue?vue&type=template&id=d91d7126");


/***/ }),

/***/ "./src/vue/trash/ux/elements/Store.vue":
/*!*********************************************!*\
  !*** ./src/vue/trash/ux/elements/Store.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Store_vue_vue_type_template_id_1011762c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store.vue?vue&type=template&id=1011762c */ "./src/vue/trash/ux/elements/Store.vue?vue&type=template&id=1011762c");
/* harmony import */ var _Store_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store.vue?vue&type=script&lang=js */ "./src/vue/trash/ux/elements/Store.vue?vue&type=script&lang=js");
/* harmony import */ var _Store_vue_vue_type_style_index_0_id_1011762c_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Store.vue?vue&type=style&index=0&id=1011762c&lang=scss */ "./src/vue/trash/ux/elements/Store.vue?vue&type=style&index=0&id=1011762c&lang=scss");
/* harmony import */ var _app_plugins_zen_threes_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_app_plugins_zen_threes_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Store_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Store_vue_vue_type_template_id_1011762c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/vue/trash/ux/elements/Store.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/vue/trash/ux/elements/Store.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./src/vue/trash/ux/elements/Store.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Store_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Store_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Store.vue?vue&type=script&lang=js */ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Store.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/vue/trash/ux/elements/Store.vue?vue&type=style&index=0&id=1011762c&lang=scss":
/*!******************************************************************************************!*\
  !*** ./src/vue/trash/ux/elements/Store.vue?vue&type=style&index=0&id=1011762c&lang=scss ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_cjs_js_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Store_vue_vue_type_style_index_0_id_1011762c_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!../../../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Store.vue?vue&type=style&index=0&id=1011762c&lang=scss */ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Store.vue?vue&type=style&index=0&id=1011762c&lang=scss");


/***/ }),

/***/ "./src/vue/trash/ux/elements/Store.vue?vue&type=template&id=1011762c":
/*!***************************************************************************!*\
  !*** ./src/vue/trash/ux/elements/Store.vue?vue&type=template&id=1011762c ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Store_vue_vue_type_template_id_1011762c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Store_vue_vue_type_template_id_1011762c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Store.vue?vue&type=template&id=1011762c */ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/ux/elements/Store.vue?vue&type=template&id=1011762c");


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc3JjX3Z1ZV90cmFzaF91eF9lbGVtZW50c19MYXllcnNfdnVlLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Q3FDO0FBQ1A7QUFDRTtBQUNBO0FBRWhDLGlFQUFlO0VBQ1hJLElBQUksRUFBRSxRQUFRO0VBQ2RDLEtBQUssRUFBRTtJQUNIQyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxPQUFPLEVBQUU7RUFDYixDQUFDO0VBQ0RDLEtBQUssRUFBRSxDQUNILFFBQU8sQ0FDVjtFQUNEQyxVQUFVLEVBQUU7SUFDUlQsU0FBUyxFQUFUQSxxREFBUztJQUNUQyxJQUFJLEVBQUpBLHlJQUFJO0lBQ0pDLEtBQUssRUFBTEEsMElBQUs7SUFDTEMsS0FBSSxFQUFKQSxrREFBS0E7RUFDVCxDQUFDO0VBQ0RPLElBQUksV0FBSkEsSUFBSUEsQ0FBQSxFQUFHO0lBQ0gsT0FBTztNQUNIQyxZQUFZLEVBQUUsRUFBRTtNQUNoQkMsa0JBQWtCLEVBQUU7SUFDeEIsQ0FBQztFQUNMLENBQUM7RUFDREMsUUFBUSxFQUFFO0lBQ05DLE1BQU0sV0FBTkEsTUFBTUEsQ0FBQSxFQUFHO01BQUEsSUFBQUMsaUJBQUEsRUFBQUMsVUFBQTtNQUNMLFFBQUFELGlCQUFBLElBQUFDLFVBQUEsR0FBTyxJQUFJLENBQUNWLElBQUksY0FBQVUsVUFBQSx1QkFBVEEsVUFBQSxDQUFXRixNQUFLLGNBQUFDLGlCQUFBLGNBQUFBLGlCQUFBLEdBQUssRUFBRTtJQUNsQztFQUNKLENBQUM7RUFDREUsS0FBSyxFQUFFO0lBQ0hILE1BQU0sV0FBTkEsTUFBTUEsQ0FBQ0ksVUFBVSxFQUFFO01BQ2YsSUFBSSxDQUFDUCxZQUFXLEdBQUFRLGtCQUFBLENBQVFELFVBQVUsQ0FBQztJQUN2QztFQUNKLENBQUM7RUFDREUsT0FBTyxXQUFQQSxPQUFPQSxDQUFBLEVBQUc7SUFDTixJQUFJLENBQUNULFlBQVcsR0FBQVEsa0JBQUEsQ0FBUSxJQUFJLENBQUNMLE1BQU0s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QUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyx1QkFBdUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCLDZCQUE2QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUNBQXlDLFNBQVM7O0FBRWxEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULHdDQUF3QyxxREFBcUQ7OztBQUc3RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7O0FBR1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUU7O0FBRXJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkRBQTJEOztBQUUzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsbUZBQW1GO0FBQ25GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCLFlBQVksZUFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyxHQUFHOztBQUVWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTixHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaU1BQWlNOztBQUVqTTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCwrREFBK0Q7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQLE1BQU07OztBQUdOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7OztBQUdWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0EsaUVBQWlFOzs7QUFHakU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjs7QUFFM0I7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOzs7QUFHVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Es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O0FBQzdCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCLFlBQVksMEJBQTBCO0FBQ3RDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsYUFBYTtBQUMxQixhQUFhO0FBQ2I7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekIsWUFBWSw0QkFBNEI7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0NBQW9DO0FBQ2hEOzs7QUFHQTtBQUNBLHlFQUF5RSxhQUFhO0FBQ3RGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBLHVFQUF1RTtBQUN2RTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsV0FBVyxhQUFhO0FBQ3hCOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RDs7QUFFdkQ7O0FBRUE7QUFDQSwyRUFBMkU7O0FBRTNFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsSUFBSTs7QUFFSixrQ0FBa0M7QUFDbEMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLDhCQUE4QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyxHQUFHOztBQUVWO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QU87QUFDUDtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJEQUEyRCxtQkFBbUI7QUFDOUU7QUFDQSxPQUFPOztBQUVQLHNEQUFzRCxVQUFVO0FBQ2hFO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7OztBQUdBLDZDQUE2QywwQkFBbUI7Ozs7QUFJaEUsT0FBTzs7QUFFUDtBQUNBLGlDQUFpQyxpQ0FBbUI7O0FBRXBEOztBQUVBLFFBQVEsaUNBQW1CO0FBQzNCLGVBQWUsaUNBQW1CO0FBQ2xDLGNBQWMsaUNBQW1CO0FBQ2pDLHNCQUFzQixpQ0FBbUI7QUFDekMsZUFBZSxpQ0FBbUI7QUFDbEMsc0JBQXNCLGlDQUFtQjtBQUN6QyxxQkFBcUIsaUNBQW1CO0FBQ3hDLHNCQUFzQixpQ0FBbUI7QUFDekMsbUNBQW1DLGlDQUFtQjtBQUN0RCw4QkFBOEIsaUNBQW1COztBQUVqRDtBQUNBLHdEQUF3RCw2QkFBNkI7O0FBRXJGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtFQUErRTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdELE9BQU87O0FBRVA7QUFDQSxpQ0FBaUMsaUNBQW1COztBQUVwRDtBQUNBLG9CQUFvQixpQ0FBbUI7QUFDdkMsNkJBQTZCLGlDQUFtQjs7QUFFaEQ7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBLGlDQUFpQyxpQ0FBbUI7O0FBRXBELG9CQUFvQixpQ0FBbUI7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVAsVUFBVTtBQUNWLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JqS21FO0FBQ1Y7QUFDTDs7QUFFcEQsQ0FBa0U7O0FBRTBJO0FBQzVNLGlDQUFpQyx1TkFBZSxDQUFDLDJFQUFNLGFBQWEsNkVBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRTtBQUFBLEVBY2Y7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUIwWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FHQXRVO0FBQ1Y7QUFDTDs7QUFFcEQsQ0FBa0U7O0FBRTBJO0FBQzVNLGlDQUFpQyx1TkFBZSxDQUFDLDJFQUFNLGFBQWEsNkVBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRTtBQUFBLEVBY2Y7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUIwWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FHQXZVO0FBQ1Y7QUFDTDs7QUFFbkQsQ0FBaUU7O0FBRTJJO0FBQzVNLGlDQUFpQyx1TkFBZSxDQUFDLDBFQUFNLGFBQWEsNEVBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRTtBQUFBLEVBY2Y7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJ5WCIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvdHJhc2gvdXgvZWxlbWVudHMvTGF5ZXJzLnZ1ZSIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3RyYXNoL3V4L2VsZW1lbnRzL1NlYXJjaC52dWUiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS90cmFzaC91eC9lbGVtZW50cy9TdG9yZS52dWUiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS90cmFzaC91eC9lbGVtZW50cy9MYXllcnMudnVlP2UyOWIiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS90cmFzaC91eC9lbGVtZW50cy9TZWFyY2gudnVlPzhiNDYiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS90cmFzaC91eC9lbGVtZW50cy9TdG9yZS52dWU/ZTM5YiIsIndlYnBhY2s6Ly90aHJlZXMvLi9ub2RlX21vZHVsZXMvLnBucG0vc29ydGFibGVqc0AxLjE0LjAvbm9kZV9tb2R1bGVzL3NvcnRhYmxlanMvbW9kdWxhci9zb3J0YWJsZS5lc20uanMiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS90cmFzaC91eC9lbGVtZW50cy9MYXllcnMudnVlP2IxYzkiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS90cmFzaC91eC9lbGVtZW50cy9TZWFyY2gudnVlPzI0YTgiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS90cmFzaC91eC9lbGVtZW50cy9TdG9yZS52dWU/MmM5YyIsIndlYnBhY2s6Ly90aHJlZXMvLi9ub2RlX21vZHVsZXMvLnBucG0vdnVlZHJhZ2dhYmxlQDQuMS4wX3Z1ZUAzLjUuMTZfdHlwZXNjcmlwdEA1LjguM18vbm9kZV9tb2R1bGVzL3Z1ZWRyYWdnYWJsZS9kaXN0L3Z1ZWRyYWdnYWJsZS51bWQuanMiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS90cmFzaC91eC9lbGVtZW50cy9MYXllcnMudnVlPzRkNWEiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS90cmFzaC91eC9lbGVtZW50cy9MYXllcnMudnVlPzFlNmQiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS90cmFzaC91eC9lbGVtZW50cy9MYXllcnMudnVlPzI1YmMiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS90cmFzaC91eC9lbGVtZW50cy9MYXllcnMudnVlP2U3ZGIiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS90cmFzaC91eC9lbGVtZW50cy9TZWFyY2gudnVlPzM4YTIiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS90cmFzaC91eC9lbGVtZW50cy9TZWFyY2gudnVlPzhmYmYiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS90cmFzaC91eC9lbGVtZW50cy9TZWFyY2gudnVlPzNhOGIiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS90cmFzaC91eC9lbGVtZW50cy9TZWFyY2gudnVlP2I3NzkiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS90cmFzaC91eC9lbGVtZW50cy9TdG9yZS52dWU/YmJiYiIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3RyYXNoL3V4L2VsZW1lbnRzL1N0b3JlLnZ1ZT8wNzg1Iiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvdHJhc2gvdXgvZWxlbWVudHMvU3RvcmUudnVlPzAwNjciLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS90cmFzaC91eC9lbGVtZW50cy9TdG9yZS52dWU/NzY0NyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInRocmVlcy1sYXllcnNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRocmVlcy1sYXllcnNfX3BhbmVsXCI+XG4gICAgICAgICAgICA8ZHJhZ2dhYmxlXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImxvY2FsX2xheWVyc1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0aHJlZXMtbGF5ZXJzX19kcmFnZ2FibGVcIlxuICAgICAgICAgICAgICAgIGl0ZW0ta2V5PVwiaWRcIlxuICAgICAgICAgICAgICAgIHRhZz1cImRpdlwiXG4gICAgICAgICAgICAgICAgQGVuZD1cIm9uRHJhZ0VuZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlICNpdGVtPVwieyBlbGVtZW50OiBsYXllciB9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZXMtbGF5ZXJzX19sYXllclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRocmVlcy1sYXllcnNfX2ljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWNvbiA6c3JjPVwibGF5ZXIuaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZXMtbGF5ZXJzX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZXMtbGF5ZXJzX19uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGhyZWVzLWxheWVyc19fYXNwZWN0XCI+e3sgbGF5ZXIuYXNwZWN0IH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBsYXllci5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZXMtbGF5ZXJzX19kZXNjcmlwdGlvblwiIHYtaHRtbD1cImxheWVyLmRlc2NyaXB0aW9uXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZXMtbGF5ZXJzX19jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBAY2xpY2s9XCJvcGVuU2V0dGluZ3MobGF5ZXIpXCIgY2xhc3M9XCJ0aHJlZXMtbGF5ZXJzX19jb250cm9sX19idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0J3QsNGB0YLRgNC+0LnQutC4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZXMtbGF5ZXJzX19yZW1vdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBAY2xpY2s9XCJyZW1vdmVMYXllcihsYXllcilcIiBjbGFzcz1cImljb24tdHJhc2gtMVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9kcmFnZ2FibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGhyZWVzLWxheWVyc19fcGFuZWxcIj5cbiAgICAgICAgICAgIDxTdG9yZSBAYWRkOmxheWVyPVwiYWRkTGF5ZXJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgZHJhZ2dhYmxlIGZyb20gJ3Z1ZWRyYWdnYWJsZSc7XG5pbXBvcnQgaWNvbiBmcm9tICcuL2ljb24udnVlJztcbmltcG9ydCBtb2RhbCBmcm9tICcuL21vZGFsLnZ1ZSc7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9TdG9yZS52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJMYXllcnNcIixcbiAgICBwcm9wczoge1xuICAgICAgICBub2RlOiBudWxsLFxuICAgICAgICBiYWNrZW5kOiBudWxsXG4gICAgfSxcbiAgICBlbWl0czogW1xuICAgICAgICAndXBkYXRlJ1xuICAgIF0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBkcmFnZ2FibGUsXG4gICAgICAgIGljb24sXG4gICAgICAgIG1vZGFsLFxuICAgICAgICBTdG9yZVxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxvY2FsX2xheWVyczogW10sXG4gICAgICAgICAgICBvcGVuX25vZGVfc2V0dGluZ3M6IG51bGwsXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBsYXllcnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlPy5sYXllcnMgPz8gW107XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIGxheWVycyhuZXdfbGF5ZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsX2xheWVycyA9IFsuLi5uZXdfbGF5ZXJzXTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMubG9jYWxfbGF5ZXJzID0gWy4uLnRoaXMubGF5ZXJzXTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25EcmFnRW5kKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlJywge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMubm9kZSxcbiAgICAgICAgICAgICAgICBsYXllcnM6IFsuLi50aGlzLmxvY2FsX2xheWVyc11cbiAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICB9LFxuICAgICAgICBvcGVuU2V0dGluZ3MobGF5ZXIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLm9yaWdpbiArIGAvJHt0aGlzLmJhY2tlbmR9L3plbi90aHJlZXMvbGF5ZXJjb250cm9sbGVyL3VwZGF0ZS9gICsgbGF5ZXIubGlkLFxuICAgICAgICAgICAgICAgICdfYmxhbmsnXG4gICAgICAgICAgICApXG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUxheWVyKGxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsX2xheWVycyA9IHRoaXMubG9jYWxfbGF5ZXJzLmZpbHRlcihsID0+IGwubGlkICE9PSBsYXllci5saWQpXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGUnLCB7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5ub2RlLFxuICAgICAgICAgICAgICAgIGxheWVyczogWy4uLnRoaXMubG9jYWxfbGF5ZXJzXVxuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZExheWVyKGxheWVyKSB7XG4gICAgICAgICAgICBpZiAobGF5ZXIubGlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbF9sYXllcnMucHVzaChsYXllci5hc3BlY3QgKyAnOjonICsgbGF5ZXIubGlkKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsX2xheWVycy5wdXNoKGxheWVyLmFzcGVjdClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZScsIHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLm5vZGUsXG4gICAgICAgICAgICAgICAgbGF5ZXJzOiBbLi4udGhpcy5sb2NhbF9sYXllcnNdXG4gICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4udGhyZWVzLWxheWVycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgJl9fZHJhZ2dhYmxlIHtcbiAgICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICB9XG5cbiAgICAmX19wYW5lbCB7XG4gICAgICAgIGZsZXg6IDEgMSA1MCU7XG4gICAgfVxuXG4gICAgJl9fbGF5ZXIge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICAgIGN1cnNvcjogbW92ZTtcbiAgICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9faWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgfVxuXG4gICAgJl9fbmFtZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgY29sb3I6ICMzNzM3NWQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmX19hc3BlY3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZGNkY2RjO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIHBhZGRpbmc6IDJweCA2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgY29sb3I6ICMzZjNmM2Y7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cblxuICAgICZfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19jb250cm9sIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAmX19idXR0b24ge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgbWFyZ2luOiAzcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDhkODtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWNmZmRjO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjE3MDU0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19yZW1vdmUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuPGRpdiBjbGFzcz1cInRocmVlcy1zZWFyY2hcIj5cbiAgICA8SW5wdXRUZXh0XG4gICAgICAgIDptb2RlbFZhbHVlPVwidGV4dFwiXG4gICAgICAgIEBpbnB1dD1cIm9uSW5wdXQoJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgIC8+XG48L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IElucHV0VGV4dCBmcm9tICdwcmltZXZ1ZS9pbnB1dHRleHQnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiU2VhcmNoXCIsXG4gICAgZW1pdHM6IFtcInVwZGF0ZTp0ZXh0XCJdLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHRleHQ6ICcnXG4gICAgfSxcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIElucHV0VGV4dFxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOnRleHQnLCAnJylcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aW1lcjogbnVsbCxcbiAgICAgICAgICAgIHRpbW91dDogMTAwMCwgLy8g0JfQsNC00LXRgNC20LrQsCDQv9C10YDQtdC0INC30LDQv9GA0L7RgdC+0LwgMiDRgdC10LrRg9C90LTRi1xuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICB0ZXh0KHRleHQpIHtcbiAgICAgICAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbklucHV0KHRleHQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25JbnB1dCh0ZXh0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGV4dCkge1xuICAgICAgICAgICAgICAgIHRleHQgPSAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTp0ZXh0JywgdGV4dClcbiAgICAgICAgICAgIH0sIHRoaXMudGltb3V0KVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi50aHJlZXMtc2VhcmNoIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmYmZiZmI7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAucC1pbnB1dHRleHQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJ0aHJlZXNfc3RvcmVcIj5cbiAgICAgICAgPFNlYXJjaCA6dGV4dD1cImZpbHRlcl90ZXh0XCIgQHVwZGF0ZTp0ZXh0PVwiZ2V0U3RvcmVcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGhyZWVzX3N0b3JlX19pdGVtc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRocmVlc19zdG9yZV9faXRlbV9fc2VwYXJhdG9yXCI+XG4gICAgICAgICAgICAgICAg0KHQu9C+0Lgg0Y7QvdC40YLQvtCyIDxzcGFuPnt7IHVuaXRfbGF5ZXJzPy5sZW5ndGggPz8gMCB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cImxheWVyIGluIHVuaXRfbGF5ZXJzXCIgY2xhc3M9XCJ0aHJlZXNfc3RvcmVfX2l0ZW0gdW5pdF9pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRocmVlc19zdG9yZV9faXRlbV9faWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aWNvbiB3aWR0aD1cIjIwcHhcIiBoZWlnaHQ9XCIyMHB4XCIgOnNyYz1cImxheWVyLmljb25cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZXNfc3RvcmVfX2l0ZW1fX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZXNfc3RvcmVfX2l0ZW1fX25hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxheWVyLm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZXNfc3RvcmVfX2l0ZW1fX2FzcGVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbGF5ZXIuYXNwZWN0IH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZXNfc3RvcmVfX2l0ZW1fX2Rlc2NyaXB0aW9uXCIgdi1odG1sPVwibGF5ZXIuZGVzY3JpcHRpb25cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGhyZWVzX3N0b3JlX19pdGVtX19idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrPVwiYWRkTGF5ZXIobGF5ZXIpXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgdGhyZWVzX3N0b3JlX19pdGVtX19idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi1hbmdsZS1kb3VibGUtbGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICDQlNC+0LHQsNCy0LjRgtGMXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZXNfc3RvcmVfX2l0ZW1fX3NlcGFyYXRvclwiIHN0eWxlPVwibWFyZ2luLXRvcDogMTBweFwiPlxuICAgICAgICAgICAgICAgINCh0LvQvtC4INGE0YDQtdC50LzQvtCyIDxzcGFuPnt7IGxheWVyc19jb3VudCB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cImxheWVyIGluIGxheWVyc1wiIGNsYXNzPVwidGhyZWVzX3N0b3JlX19pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRocmVlc19zdG9yZV9faXRlbV9faWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aWNvbiB3aWR0aD1cIjIwcHhcIiBoZWlnaHQ9XCIyMHB4XCIgOnNyYz1cImxheWVyLmljb25cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZXNfc3RvcmVfX2l0ZW1fX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZXNfc3RvcmVfX2l0ZW1fX25hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGxheWVyLm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZXNfc3RvcmVfX2l0ZW1fX2FzcGVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbGF5ZXIuYXNwZWN0IH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZXNfc3RvcmVfX2l0ZW1fX2Rlc2NyaXB0aW9uXCIgdi1odG1sPVwibGF5ZXIuZGVzY3JpcHRpb25cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGhyZWVzX3N0b3JlX19pdGVtX19idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrPVwiYWRkTGF5ZXIobGF5ZXIpXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgdGhyZWVzX3N0b3JlX19pdGVtX19idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbi1hbmdsZS1kb3VibGUtbGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICDQlNC+0LHQsNCy0LjRgtGMXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IHRocmVlc19zdG9yZV9faXRlbV9fYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24tY29weVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICDQmtC+0L/QuNGA0L7QstCw0YLRjFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IGljb24gZnJvbSAnLi9pY29uLnZ1ZSc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoLnZ1ZSc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJTdG9yZVwiLFxuICAgIGVtaXRzOiBbJ2FkZDpsYXllciddLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgaWNvbixcbiAgICAgICAgU2VhcmNoXG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmdldFN0b3JlKClcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYXllcnM6IFtdLFxuICAgICAgICAgICAgdW5pdF9sYXllcnM6IFtdLFxuICAgICAgICAgICAgbm9kZXM6IFtdLFxuICAgICAgICAgICAgZmlsdGVyX3RleHQ6ICcnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGxheWVyc19jb3VudCgpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmxheWVycyB8fCB7fSkubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldFN0b3JlKGZpbHRlcl90ZXh0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGZpbHRlcl90ZXh0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhzLmFwaSh7XG4gICAgICAgICAgICAgICAgYXBpOiAnbGF5ZXJzLkxheWVyOmdldFN0b3JlJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcl90ZXh0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF5ZXJzID0gcmVzcG9uc2UubGF5ZXJzXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5pdF9sYXllcnMgPSByZXNwb25zZS51bml0X2xheWVyc1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVzID0gcmVzcG9uc2Uubm9kZXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBhZGRMYXllcihsYXllcikge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnYWRkOmxheWVyJywgbGF5ZXIpXG4gICAgICAgIH0sXG4gICAgICAgIGNvcHlMYXllcihsYXllcikge1xuXG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLnRocmVlc19zdG9yZSB7XG4gICAgJl9faXRlbXMge1xuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG4gICAgJl9faXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgcGFkZGluZzogNHB4IDE1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllOTtcblxuICAgICAgICAudW5pdF9pdGVtIHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9faWNvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmX19uYW1lIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6ICM2NTY1NjU7XG4gICAgICAgIH1cblxuICAgICAgICAmX19hc3BlY3Qge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2UxZTFlMTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmX19kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCA3cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG5cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZfX2J1dHRvbnMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmX19idXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmX19zZXBhcmF0b3Ige1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Q5ZGJlMjtcbiAgICAgICAgICAgIGNvbG9yOiAjNTY1YTY1O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHggMTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOWZhN2NhO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANS4yLjdfd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDUuMi43X3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50aHJlZXMtbGF5ZXJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4udGhyZWVzLWxheWVyc19fZHJhZ2dhYmxlIHtcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxufVxcbi50aHJlZXMtbGF5ZXJzX19wYW5lbCB7XFxuICBmbGV4OiAxIDEgNTAlO1xcbn1cXG4udGhyZWVzLWxheWVyc19fbGF5ZXIge1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW46IDRweDtcXG4gIGN1cnNvcjogbW92ZTtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbn1cXG4udGhyZWVzLWxheWVyc19fbGF5ZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcXG59XFxuLnRocmVlcy1sYXllcnNfX2ljb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxufVxcbi50aHJlZXMtbGF5ZXJzX190aXRsZSB7XFxuICBmbGV4OiAxO1xcbn1cXG4udGhyZWVzLWxheWVyc19fbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgY29sb3I6ICMzNzM3NWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG4udGhyZWVzLWxheWVyc19fYXNwZWN0IHtcXG4gIGJhY2tncm91bmQ6ICNkY2RjZGM7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBwYWRkaW5nOiAycHggNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY29sb3I6ICMzZjNmM2Y7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG59XFxuLnRocmVlcy1sYXllcnNfX2Rlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLnRocmVlcy1sYXllcnNfX2Rlc2NyaXB0aW9uIHAge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLnRocmVlcy1sYXllcnNfX2NvbnRyb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50aHJlZXMtbGF5ZXJzX19jb250cm9sX19idXR0b24ge1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgbWFyZ2luOiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjNjY2O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDhkODtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDIwMG1zO1xcbn1cXG4udGhyZWVzLWxheWVyc19fY29udHJvbF9fYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNlY2ZmZGM7XFxuICBjb2xvcjogIzYxNzA1NDtcXG59XFxuLnRocmVlcy1sYXllcnNfX2NvbnRyb2xfX2J1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuLnRocmVlcy1sYXllcnNfX3JlbW92ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxufVxcbi50aHJlZXMtbGF5ZXJzX19yZW1vdmU6aG92ZXIge1xcbiAgY29sb3I6IHJlZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Z1ZS90cmFzaC91eC9lbGVtZW50cy9MYXllcnMudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFSTtFQUNJLGdCQUFBO0FBQVI7QUFHSTtFQUNJLGFBQUE7QUFEUjtBQUlJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFGUjtBQUlRO0VBQ0ksbUJBQUE7QUFGWjtBQU1JO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFKUjtBQU9JO0VBQ0ksT0FBQTtBQUxSO0FBUUk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBTlI7QUFTSTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFQUjtBQVVJO0VBQ0ksa0JBQUE7QUFSUjtBQVNRO0VBQ0ksbUJBQUE7QUFQWjtBQVdJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBVFI7QUFXUTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFUWjtBQVdZO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBVGhCO0FBV1k7RUFDSSxzQkFBQTtBQVRoQjtBQWNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFaUjtBQWNRO0VBQ0ksVUFBQTtBQVpaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi50aHJlZXMtbGF5ZXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gICAgJl9fZHJhZ2dhYmxlIHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICAgIH1cXG5cXG4gICAgJl9fcGFuZWwge1xcbiAgICAgICAgZmxleDogMSAxIDUwJTtcXG4gICAgfVxcblxcbiAgICAmX19sYXllciB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICAgIG1hcmdpbjogNHB4O1xcbiAgICAgICAgY3Vyc29yOiBtb3ZlO1xcbiAgICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XFxuXFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2ljb24ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgJl9fdGl0bGUge1xcbiAgICAgICAgZmxleDogMTtcXG4gICAgfVxcblxcbiAgICAmX19uYW1lIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmb250LXNpemU6IDE3cHg7XFxuICAgICAgICBjb2xvcjogIzM3Mzc1ZDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgJl9fYXNwZWN0IHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNkY2RjZGM7XFxuICAgICAgICBmb250LXNpemU6IDEzcHg7XFxuICAgICAgICBwYWRkaW5nOiAycHggNnB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgICAgY29sb3I6ICMzZjNmM2Y7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gICAgfVxcblxcbiAgICAmX19kZXNjcmlwdGlvbiB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgICAgICBwIHtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2NvbnRyb2wge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICAmX19idXR0b24ge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgICAgICAgICAgbWFyZ2luOiAzcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcXG5cXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VjZmZkYztcXG4gICAgICAgICAgICAgICAgY29sb3I6ICM2MTcwNTQ7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fcmVtb3ZlIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA1LjIuN193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANS4yLjdfd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRocmVlcy1zZWFyY2gge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4udGhyZWVzLXNlYXJjaCAucC1pbnB1dHRleHQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92dWUvdHJhc2gvdXgvZWxlbWVudHMvU2VhcmNoLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBQ0ksV0FBQTtBQUFSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi50aHJlZXMtc2VhcmNoIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZDogI2ZiZmJmYjtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcblxcbiAgICAucC1pbnB1dHRleHQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA1LjIuN193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANS4yLjdfd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRocmVlc19zdG9yZV9faXRlbXMge1xcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4udGhyZWVzX3N0b3JlX19pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgcGFkZGluZzogNHB4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xcbn1cXG4udGhyZWVzX3N0b3JlX19pdGVtIC51bml0X2l0ZW0ge1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XFxufVxcbi50aHJlZXNfc3RvcmVfX2l0ZW1fX2ljb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxufVxcbi50aHJlZXNfc3RvcmVfX2l0ZW1fX3RpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDI0MHB4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi50aHJlZXNfc3RvcmVfX2l0ZW1fX25hbWUge1xcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzY1NjU2NTtcXG59XFxuLnRocmVlc19zdG9yZV9faXRlbV9fYXNwZWN0IHtcXG4gIGJhY2tncm91bmQ6ICNlMWUxZTE7XFxuICBwYWRkaW5nOiAycHggNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4udGhyZWVzX3N0b3JlX19pdGVtX19kZXNjcmlwdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IDRweCA3cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMSAxIDA7XFxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxufVxcbi50aHJlZXNfc3RvcmVfX2l0ZW1fX2Rlc2NyaXB0aW9uIHAge1xcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbn1cXG4udGhyZWVzX3N0b3JlX19pdGVtX19idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGhyZWVzX3N0b3JlX19pdGVtX19idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnRocmVlc19zdG9yZV9faXRlbV9fYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XFxufVxcbi50aHJlZXNfc3RvcmVfX2l0ZW1fX2J1dHRvbiBpIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4udGhyZWVzX3N0b3JlX19pdGVtX19zZXBhcmF0b3Ige1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDVweCAxMXB4O1xcbiAgYmFja2dyb3VuZDogI2Q5ZGJlMjtcXG4gIGNvbG9yOiAjNTY1YTY1O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiA3cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4udGhyZWVzX3N0b3JlX19pdGVtX19zZXBhcmF0b3Igc3BhbiB7XFxuICBwYWRkaW5nOiAxcHggMTBweDtcXG4gIGJhY2tncm91bmQ6ICM5ZmE3Y2E7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Z1ZS90cmFzaC91eC9lbGVtZW50cy9TdG9yZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUk7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBRFI7QUFHSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBRFI7QUFHUTtFQUNJLHVCQUFBO0FBRFo7QUFJUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRlo7QUFLUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUhaO0FBTVE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUpaO0FBT1E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTFo7QUFRUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQU5aO0FBUVk7RUFDSSxrQkFBQTtBQU5oQjtBQVVRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBUlo7QUFXUTtFQUNJLGFBQUE7QUFUWjtBQVVZO0VBQ0ksaUJBQUE7QUFSaEI7QUFVWTtFQUNJLGlCQUFBO0FBUmhCO0FBV1E7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQVRaO0FBV1k7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBVGhCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi50aHJlZXNfc3RvcmUge1xcbiAgICAmX19pdGVtcyB7XFxuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIH1cXG4gICAgJl9faXRlbSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgICAgIHBhZGRpbmc6IDRweCAxNXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllOTtcXG5cXG4gICAgICAgIC51bml0X2l0ZW0ge1xcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJl9faWNvbiB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICZfX3RpdGxlIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJl9fbmFtZSB7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIGNvbG9yOiAjNjU2NTY1O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJl9fYXNwZWN0IHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTFlMWUxO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICZfX2Rlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDdweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBmbGV4OiAxIDEgMDtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxuXFxuICAgICAgICAgICAgcCB7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmX19idXR0b25zIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmX19idXR0b24ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGkge1xcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAmX19zZXBhcmF0b3Ige1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDExcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Q5ZGJlMjtcXG4gICAgICAgICAgICBjb2xvcjogIzU2NWE2NTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXB4IDEwcHg7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM5ZmE3Y2E7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvKiohXG4gKiBTb3J0YWJsZSAxLjE0LjBcbiAqIEBhdXRob3JcdFJ1YmFYYSAgIDx0cmFzaEBydWJheGEub3JnPlxuICogQGF1dGhvclx0b3dlbm0gICAgPG93ZW4yMzM1NUBnbWFpbC5jb20+XG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuXG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSB7XG4gICAgICBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgfVxuXG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcblxuICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG5cbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuXG4gIHJldHVybiBhcnIyO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG52YXIgdmVyc2lvbiA9IFwiMS4xNC4wXCI7XG5cbmZ1bmN0aW9uIHVzZXJBZ2VudChwYXR0ZXJuKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubmF2aWdhdG9yKSB7XG4gICAgcmV0dXJuICEhIC8qQF9fUFVSRV9fKi9uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKHBhdHRlcm4pO1xuICB9XG59XG5cbnZhciBJRTExT3JMZXNzID0gdXNlckFnZW50KC8oPzpUcmlkZW50LipydlsgOl0/MTFcXC58bXNpZXxpZW1vYmlsZXxXaW5kb3dzIFBob25lKS9pKTtcbnZhciBFZGdlID0gdXNlckFnZW50KC9FZGdlL2kpO1xudmFyIEZpcmVGb3ggPSB1c2VyQWdlbnQoL2ZpcmVmb3gvaSk7XG52YXIgU2FmYXJpID0gdXNlckFnZW50KC9zYWZhcmkvaSkgJiYgIXVzZXJBZ2VudCgvY2hyb21lL2kpICYmICF1c2VyQWdlbnQoL2FuZHJvaWQvaSk7XG52YXIgSU9TID0gdXNlckFnZW50KC9pUChhZHxvZHxob25lKS9pKTtcbnZhciBDaHJvbWVGb3JBbmRyb2lkID0gdXNlckFnZW50KC9jaHJvbWUvaSkgJiYgdXNlckFnZW50KC9hbmRyb2lkL2kpO1xuXG52YXIgY2FwdHVyZU1vZGUgPSB7XG4gIGNhcHR1cmU6IGZhbHNlLFxuICBwYXNzaXZlOiBmYWxzZVxufTtcblxuZnVuY3Rpb24gb24oZWwsIGV2ZW50LCBmbikge1xuICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgIUlFMTFPckxlc3MgJiYgY2FwdHVyZU1vZGUpO1xufVxuXG5mdW5jdGlvbiBvZmYoZWwsIGV2ZW50LCBmbikge1xuICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgIUlFMTFPckxlc3MgJiYgY2FwdHVyZU1vZGUpO1xufVxuXG5mdW5jdGlvbiBtYXRjaGVzKFxuLyoqSFRNTEVsZW1lbnQqL1xuZWwsXG4vKipTdHJpbmcqL1xuc2VsZWN0b3IpIHtcbiAgaWYgKCFzZWxlY3RvcikgcmV0dXJuO1xuICBzZWxlY3RvclswXSA9PT0gJz4nICYmIChzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cmluZygxKSk7XG5cbiAgaWYgKGVsKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChlbC5tYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiBlbC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICAgIH0gZWxzZSBpZiAoZWwubXNNYXRjaGVzU2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGVsLm1zTWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH0gZWxzZSBpZiAoZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFBhcmVudE9ySG9zdChlbCkge1xuICByZXR1cm4gZWwuaG9zdCAmJiBlbCAhPT0gZG9jdW1lbnQgJiYgZWwuaG9zdC5ub2RlVHlwZSA/IGVsLmhvc3QgOiBlbC5wYXJlbnROb2RlO1xufVxuXG5mdW5jdGlvbiBjbG9zZXN0KFxuLyoqSFRNTEVsZW1lbnQqL1xuZWwsXG4vKipTdHJpbmcqL1xuc2VsZWN0b3IsXG4vKipIVE1MRWxlbWVudCovXG5jdHgsIGluY2x1ZGVDVFgpIHtcbiAgaWYgKGVsKSB7XG4gICAgY3R4ID0gY3R4IHx8IGRvY3VtZW50O1xuXG4gICAgZG8ge1xuICAgICAgaWYgKHNlbGVjdG9yICE9IG51bGwgJiYgKHNlbGVjdG9yWzBdID09PSAnPicgPyBlbC5wYXJlbnROb2RlID09PSBjdHggJiYgbWF0Y2hlcyhlbCwgc2VsZWN0b3IpIDogbWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSB8fCBpbmNsdWRlQ1RYICYmIGVsID09PSBjdHgpIHtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWwgPT09IGN0eCkgYnJlYWs7XG4gICAgICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG4gICAgfSB3aGlsZSAoZWwgPSBnZXRQYXJlbnRPckhvc3QoZWwpKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUl9TUEFDRSA9IC9cXHMrL2c7XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsLCBuYW1lLCBzdGF0ZSkge1xuICBpZiAoZWwgJiYgbmFtZSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIGVsLmNsYXNzTGlzdFtzdGF0ZSA/ICdhZGQnIDogJ3JlbW92ZSddKG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gKCcgJyArIGVsLmNsYXNzTmFtZSArICcgJykucmVwbGFjZShSX1NQQUNFLCAnICcpLnJlcGxhY2UoJyAnICsgbmFtZSArICcgJywgJyAnKTtcbiAgICAgIGVsLmNsYXNzTmFtZSA9IChjbGFzc05hbWUgKyAoc3RhdGUgPyAnICcgKyBuYW1lIDogJycpKS5yZXBsYWNlKFJfU1BBQ0UsICcgJyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNzcyhlbCwgcHJvcCwgdmFsKSB7XG4gIHZhciBzdHlsZSA9IGVsICYmIGVsLnN0eWxlO1xuXG4gIGlmIChzdHlsZSkge1xuICAgIGlmICh2YWwgPT09IHZvaWQgMCkge1xuICAgICAgaWYgKGRvY3VtZW50LmRlZmF1bHRWaWV3ICYmIGRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUpIHtcbiAgICAgICAgdmFsID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgJycpO1xuICAgICAgfSBlbHNlIGlmIChlbC5jdXJyZW50U3R5bGUpIHtcbiAgICAgICAgdmFsID0gZWwuY3VycmVudFN0eWxlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvcCA9PT0gdm9pZCAwID8gdmFsIDogdmFsW3Byb3BdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIShwcm9wIGluIHN0eWxlKSAmJiBwcm9wLmluZGV4T2YoJ3dlYmtpdCcpID09PSAtMSkge1xuICAgICAgICBwcm9wID0gJy13ZWJraXQtJyArIHByb3A7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlW3Byb3BdID0gdmFsICsgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gJycgOiAncHgnKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0cml4KGVsLCBzZWxmT25seSkge1xuICB2YXIgYXBwbGllZFRyYW5zZm9ybXMgPSAnJztcblxuICBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuICAgIGFwcGxpZWRUcmFuc2Zvcm1zID0gZWw7XG4gIH0gZWxzZSB7XG4gICAgZG8ge1xuICAgICAgdmFyIHRyYW5zZm9ybSA9IGNzcyhlbCwgJ3RyYW5zZm9ybScpO1xuXG4gICAgICBpZiAodHJhbnNmb3JtICYmIHRyYW5zZm9ybSAhPT0gJ25vbmUnKSB7XG4gICAgICAgIGFwcGxpZWRUcmFuc2Zvcm1zID0gdHJhbnNmb3JtICsgJyAnICsgYXBwbGllZFRyYW5zZm9ybXM7XG4gICAgICB9XG4gICAgICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG5cbiAgICB9IHdoaWxlICghc2VsZk9ubHkgJiYgKGVsID0gZWwucGFyZW50Tm9kZSkpO1xuICB9XG5cbiAgdmFyIG1hdHJpeEZuID0gd2luZG93LkRPTU1hdHJpeCB8fCB3aW5kb3cuV2ViS2l0Q1NTTWF0cml4IHx8IHdpbmRvdy5DU1NNYXRyaXggfHwgd2luZG93Lk1TQ1NTTWF0cml4O1xuICAvKmpzaGludCAtVzA1NiAqL1xuXG4gIHJldHVybiBtYXRyaXhGbiAmJiBuZXcgbWF0cml4Rm4oYXBwbGllZFRyYW5zZm9ybXMpO1xufVxuXG5mdW5jdGlvbiBmaW5kKGN0eCwgdGFnTmFtZSwgaXRlcmF0b3IpIHtcbiAgaWYgKGN0eCkge1xuICAgIHZhciBsaXN0ID0gY3R4LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZ05hbWUpLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbiA9IGxpc3QubGVuZ3RoO1xuXG4gICAgaWYgKGl0ZXJhdG9yKSB7XG4gICAgICBmb3IgKDsgaSA8IG47IGkrKykge1xuICAgICAgICBpdGVyYXRvcihsaXN0W2ldLCBpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcbiAgfVxuXG4gIHJldHVybiBbXTtcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpIHtcbiAgdmFyIHNjcm9sbGluZ0VsZW1lbnQgPSBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50O1xuXG4gIGlmIChzY3JvbGxpbmdFbGVtZW50KSB7XG4gICAgcmV0dXJuIHNjcm9sbGluZ0VsZW1lbnQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBcImJvdW5kaW5nIGNsaWVudCByZWN0XCIgb2YgZ2l2ZW4gZWxlbWVudFxuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsICAgICAgICAgICAgICAgICAgICAgICBUaGUgZWxlbWVudCB3aG9zZSBib3VuZGluZ0NsaWVudFJlY3QgaXMgd2FudGVkXG4gKiBAcGFyYW0gIHtbQm9vbGVhbl19IHJlbGF0aXZlVG9Db250YWluaW5nQmxvY2sgIFdoZXRoZXIgdGhlIHJlY3Qgc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBjb250YWluaW5nIGJsb2NrIG9mIChpbmNsdWRpbmcpIHRoZSBjb250YWluZXJcbiAqIEBwYXJhbSAge1tCb29sZWFuXX0gcmVsYXRpdmVUb05vblN0YXRpY1BhcmVudCAgV2hldGhlciB0aGUgcmVjdCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIHJlbGF0aXZlIHBhcmVudCBvZiAoaW5jbHVkaW5nKSB0aGUgY29udGFpZW5yXG4gKiBAcGFyYW0gIHtbQm9vbGVhbl19IHVuZG9TY2FsZSAgICAgICAgICAgICAgICAgIFdoZXRoZXIgdGhlIGNvbnRhaW5lcidzIHNjYWxlKCkgc2hvdWxkIGJlIHVuZG9uZVxuICogQHBhcmFtICB7W0hUTUxFbGVtZW50XX0gY29udGFpbmVyICAgICAgICAgICAgICBUaGUgcGFyZW50IHRoZSBlbGVtZW50IHdpbGwgYmUgcGxhY2VkIGluXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBib3VuZGluZ0NsaWVudFJlY3Qgb2YgZWwsIHdpdGggc3BlY2lmaWVkIGFkanVzdG1lbnRzXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRSZWN0KGVsLCByZWxhdGl2ZVRvQ29udGFpbmluZ0Jsb2NrLCByZWxhdGl2ZVRvTm9uU3RhdGljUGFyZW50LCB1bmRvU2NhbGUsIGNvbnRhaW5lcikge1xuICBpZiAoIWVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAmJiBlbCAhPT0gd2luZG93KSByZXR1cm47XG4gIHZhciBlbFJlY3QsIHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCwgaGVpZ2h0LCB3aWR0aDtcblxuICBpZiAoZWwgIT09IHdpbmRvdyAmJiBlbC5wYXJlbnROb2RlICYmIGVsICE9PSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCkpIHtcbiAgICBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0b3AgPSBlbFJlY3QudG9wO1xuICAgIGxlZnQgPSBlbFJlY3QubGVmdDtcbiAgICBib3R0b20gPSBlbFJlY3QuYm90dG9tO1xuICAgIHJpZ2h0ID0gZWxSZWN0LnJpZ2h0O1xuICAgIGhlaWdodCA9IGVsUmVjdC5oZWlnaHQ7XG4gICAgd2lkdGggPSBlbFJlY3Qud2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgdG9wID0gMDtcbiAgICBsZWZ0ID0gMDtcbiAgICBib3R0b20gPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgcmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgfVxuXG4gIGlmICgocmVsYXRpdmVUb0NvbnRhaW5pbmdCbG9jayB8fCByZWxhdGl2ZVRvTm9uU3RhdGljUGFyZW50KSAmJiBlbCAhPT0gd2luZG93KSB7XG4gICAgLy8gQWRqdXN0IGZvciB0cmFuc2xhdGUoKVxuICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lciB8fCBlbC5wYXJlbnROb2RlOyAvLyBzb2x2ZXMgIzExMjMgKHNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM3OTUzODA2LzYwODgzMTIpXG4gICAgLy8gTm90IG5lZWRlZCBvbiA8PSBJRTExXG5cbiAgICBpZiAoIUlFMTFPckxlc3MpIHtcbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICYmIChjc3MoY29udGFpbmVyLCAndHJhbnNmb3JtJykgIT09ICdub25lJyB8fCByZWxhdGl2ZVRvTm9uU3RhdGljUGFyZW50ICYmIGNzcyhjb250YWluZXIsICdwb3NpdGlvbicpICE9PSAnc3RhdGljJykpIHtcbiAgICAgICAgICB2YXIgY29udGFpbmVyUmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsgLy8gU2V0IHJlbGF0aXZlIHRvIGVkZ2VzIG9mIHBhZGRpbmcgYm94IG9mIGNvbnRhaW5lclxuXG4gICAgICAgICAgdG9wIC09IGNvbnRhaW5lclJlY3QudG9wICsgcGFyc2VJbnQoY3NzKGNvbnRhaW5lciwgJ2JvcmRlci10b3Atd2lkdGgnKSk7XG4gICAgICAgICAgbGVmdCAtPSBjb250YWluZXJSZWN0LmxlZnQgKyBwYXJzZUludChjc3MoY29udGFpbmVyLCAnYm9yZGVyLWxlZnQtd2lkdGgnKSk7XG4gICAgICAgICAgYm90dG9tID0gdG9wICsgZWxSZWN0LmhlaWdodDtcbiAgICAgICAgICByaWdodCA9IGxlZnQgKyBlbFJlY3Qud2lkdGg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLyoganNoaW50IGJvc3M6dHJ1ZSAqL1xuXG4gICAgICB9IHdoaWxlIChjb250YWluZXIgPSBjb250YWluZXIucGFyZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHVuZG9TY2FsZSAmJiBlbCAhPT0gd2luZG93KSB7XG4gICAgLy8gQWRqdXN0IGZvciBzY2FsZSgpXG4gICAgdmFyIGVsTWF0cml4ID0gbWF0cml4KGNvbnRhaW5lciB8fCBlbCksXG4gICAgICAgIHNjYWxlWCA9IGVsTWF0cml4ICYmIGVsTWF0cml4LmEsXG4gICAgICAgIHNjYWxlWSA9IGVsTWF0cml4ICYmIGVsTWF0cml4LmQ7XG5cbiAgICBpZiAoZWxNYXRyaXgpIHtcbiAgICAgIHRvcCAvPSBzY2FsZVk7XG4gICAgICBsZWZ0IC89IHNjYWxlWDtcbiAgICAgIHdpZHRoIC89IHNjYWxlWDtcbiAgICAgIGhlaWdodCAvPSBzY2FsZVk7XG4gICAgICBib3R0b20gPSB0b3AgKyBoZWlnaHQ7XG4gICAgICByaWdodCA9IGxlZnQgKyB3aWR0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvcDogdG9wLFxuICAgIGxlZnQ6IGxlZnQsXG4gICAgYm90dG9tOiBib3R0b20sXG4gICAgcmlnaHQ6IHJpZ2h0LFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufVxuLyoqXG4gKiBDaGVja3MgaWYgYSBzaWRlIG9mIGFuIGVsZW1lbnQgaXMgc2Nyb2xsZWQgcGFzdCBhIHNpZGUgb2YgaXRzIHBhcmVudHNcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSAgZWwgICAgICAgICAgIFRoZSBlbGVtZW50IHdobydzIHNpZGUgYmVpbmcgc2Nyb2xsZWQgb3V0IG9mIHZpZXcgaXMgaW4gcXVlc3Rpb25cbiAqIEBwYXJhbSAge1N0cmluZ30gICAgICAgZWxTaWRlICAgICAgIFNpZGUgb2YgdGhlIGVsZW1lbnQgaW4gcXVlc3Rpb24gKCd0b3AnLCAnbGVmdCcsICdyaWdodCcsICdib3R0b20nKVxuICogQHBhcmFtICB7U3RyaW5nfSAgICAgICBwYXJlbnRTaWRlICAgU2lkZSBvZiB0aGUgcGFyZW50IGluIHF1ZXN0aW9uICgndG9wJywgJ2xlZnQnLCAncmlnaHQnLCAnYm90dG9tJylcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSAgICAgICAgICAgICAgIFRoZSBwYXJlbnQgc2Nyb2xsIGVsZW1lbnQgdGhhdCB0aGUgZWwncyBzaWRlIGlzIHNjcm9sbGVkIHBhc3QsIG9yIG51bGwgaWYgdGhlcmUgaXMgbm8gc3VjaCBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiBpc1Njcm9sbGVkUGFzdChlbCwgZWxTaWRlLCBwYXJlbnRTaWRlKSB7XG4gIHZhciBwYXJlbnQgPSBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbCwgdHJ1ZSksXG4gICAgICBlbFNpZGVWYWwgPSBnZXRSZWN0KGVsKVtlbFNpZGVdO1xuICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG5cbiAgd2hpbGUgKHBhcmVudCkge1xuICAgIHZhciBwYXJlbnRTaWRlVmFsID0gZ2V0UmVjdChwYXJlbnQpW3BhcmVudFNpZGVdLFxuICAgICAgICB2aXNpYmxlID0gdm9pZCAwO1xuXG4gICAgaWYgKHBhcmVudFNpZGUgPT09ICd0b3AnIHx8IHBhcmVudFNpZGUgPT09ICdsZWZ0Jykge1xuICAgICAgdmlzaWJsZSA9IGVsU2lkZVZhbCA+PSBwYXJlbnRTaWRlVmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aXNpYmxlID0gZWxTaWRlVmFsIDw9IHBhcmVudFNpZGVWYWw7XG4gICAgfVxuXG4gICAgaWYgKCF2aXNpYmxlKSByZXR1cm4gcGFyZW50O1xuICAgIGlmIChwYXJlbnQgPT09IGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKSkgYnJlYWs7XG4gICAgcGFyZW50ID0gZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQocGFyZW50LCBmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4vKipcbiAqIEdldHMgbnRoIGNoaWxkIG9mIGVsLCBpZ25vcmluZyBoaWRkZW4gY2hpbGRyZW4sIHNvcnRhYmxlJ3MgZWxlbWVudHMgKGRvZXMgbm90IGlnbm9yZSBjbG9uZSBpZiBpdCdzIHZpc2libGUpXG4gKiBhbmQgbm9uLWRyYWdnYWJsZSBlbGVtZW50c1xuICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IGVsICAgICAgIFRoZSBwYXJlbnQgZWxlbWVudFxuICogQHBhcmFtICB7TnVtYmVyfSBjaGlsZE51bSAgICAgIFRoZSBpbmRleCBvZiB0aGUgY2hpbGRcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9ucyAgICAgICBQYXJlbnQgU29ydGFibGUncyBvcHRpb25zXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gICAgICAgICAgVGhlIGNoaWxkIGF0IGluZGV4IGNoaWxkTnVtLCBvciBudWxsIGlmIG5vdCBmb3VuZFxuICovXG5cblxuZnVuY3Rpb24gZ2V0Q2hpbGQoZWwsIGNoaWxkTnVtLCBvcHRpb25zLCBpbmNsdWRlRHJhZ0VsKSB7XG4gIHZhciBjdXJyZW50Q2hpbGQgPSAwLFxuICAgICAgaSA9IDAsXG4gICAgICBjaGlsZHJlbiA9IGVsLmNoaWxkcmVuO1xuXG4gIHdoaWxlIChpIDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgaWYgKGNoaWxkcmVuW2ldLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJyAmJiBjaGlsZHJlbltpXSAhPT0gU29ydGFibGUuZ2hvc3QgJiYgKGluY2x1ZGVEcmFnRWwgfHwgY2hpbGRyZW5baV0gIT09IFNvcnRhYmxlLmRyYWdnZWQpICYmIGNsb3Nlc3QoY2hpbGRyZW5baV0sIG9wdGlvbnMuZHJhZ2dhYmxlLCBlbCwgZmFsc2UpKSB7XG4gICAgICBpZiAoY3VycmVudENoaWxkID09PSBjaGlsZE51bSkge1xuICAgICAgICByZXR1cm4gY2hpbGRyZW5baV07XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRDaGlsZCsrO1xuICAgIH1cblxuICAgIGkrKztcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuLyoqXG4gKiBHZXRzIHRoZSBsYXN0IGNoaWxkIGluIHRoZSBlbCwgaWdub3JpbmcgZ2hvc3RFbCBvciBpbnZpc2libGUgZWxlbWVudHMgKGNsb25lcylcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbCAgICAgICBQYXJlbnQgZWxlbWVudFxuICogQHBhcmFtICB7c2VsZWN0b3J9IHNlbGVjdG9yICAgIEFueSBvdGhlciBlbGVtZW50cyB0aGF0IHNob3VsZCBiZSBpZ25vcmVkXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gICAgICAgICAgVGhlIGxhc3QgY2hpbGQsIGlnbm9yaW5nIGdob3N0RWxcbiAqL1xuXG5cbmZ1bmN0aW9uIGxhc3RDaGlsZChlbCwgc2VsZWN0b3IpIHtcbiAgdmFyIGxhc3QgPSBlbC5sYXN0RWxlbWVudENoaWxkO1xuXG4gIHdoaWxlIChsYXN0ICYmIChsYXN0ID09PSBTb3J0YWJsZS5naG9zdCB8fCBjc3MobGFzdCwgJ2Rpc3BsYXknKSA9PT0gJ25vbmUnIHx8IHNlbGVjdG9yICYmICFtYXRjaGVzKGxhc3QsIHNlbGVjdG9yKSkpIHtcbiAgICBsYXN0ID0gbGFzdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICB9XG5cbiAgcmV0dXJuIGxhc3QgfHwgbnVsbDtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgaW5kZXggb2YgYW4gZWxlbWVudCB3aXRoaW4gaXRzIHBhcmVudCBmb3IgYSBzZWxlY3RlZCBzZXQgb2ZcbiAqIGVsZW1lbnRzXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSAge3NlbGVjdG9yfSBzZWxlY3RvclxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5cblxuZnVuY3Rpb24gaW5kZXgoZWwsIHNlbGVjdG9yKSB7XG4gIHZhciBpbmRleCA9IDA7XG5cbiAgaWYgKCFlbCB8fCAhZWwucGFyZW50Tm9kZSkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG5cblxuICB3aGlsZSAoZWwgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgaWYgKGVsLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgIT09ICdURU1QTEFURScgJiYgZWwgIT09IFNvcnRhYmxlLmNsb25lICYmICghc2VsZWN0b3IgfHwgbWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSkge1xuICAgICAgaW5kZXgrKztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5kZXg7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIHNjcm9sbCBvZmZzZXQgb2YgdGhlIGdpdmVuIGVsZW1lbnQsIGFkZGVkIHdpdGggYWxsIHRoZSBzY3JvbGwgb2Zmc2V0cyBvZiBwYXJlbnQgZWxlbWVudHMuXG4gKiBUaGUgdmFsdWUgaXMgcmV0dXJuZWQgaW4gcmVhbCBwaXhlbHMuXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gZWxcbiAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICAgICBPZmZzZXRzIGluIHRoZSBmb3JtYXQgb2YgW2xlZnQsIHRvcF1cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFJlbGF0aXZlU2Nyb2xsT2Zmc2V0KGVsKSB7XG4gIHZhciBvZmZzZXRMZWZ0ID0gMCxcbiAgICAgIG9mZnNldFRvcCA9IDAsXG4gICAgICB3aW5TY3JvbGxlciA9IGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcblxuICBpZiAoZWwpIHtcbiAgICBkbyB7XG4gICAgICB2YXIgZWxNYXRyaXggPSBtYXRyaXgoZWwpLFxuICAgICAgICAgIHNjYWxlWCA9IGVsTWF0cml4LmEsXG4gICAgICAgICAgc2NhbGVZID0gZWxNYXRyaXguZDtcbiAgICAgIG9mZnNldExlZnQgKz0gZWwuc2Nyb2xsTGVmdCAqIHNjYWxlWDtcbiAgICAgIG9mZnNldFRvcCArPSBlbC5zY3JvbGxUb3AgKiBzY2FsZVk7XG4gICAgfSB3aGlsZSAoZWwgIT09IHdpblNjcm9sbGVyICYmIChlbCA9IGVsLnBhcmVudE5vZGUpKTtcbiAgfVxuXG4gIHJldHVybiBbb2Zmc2V0TGVmdCwgb2Zmc2V0VG9wXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG9iamVjdCB3aXRoaW4gdGhlIGdpdmVuIGFycmF5XG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyICAgQXJyYXkgdGhhdCBtYXkgb3IgbWF5IG5vdCBob2xkIHRoZSBvYmplY3RcbiAqIEBwYXJhbSAge09iamVjdH0gb2JqICBBbiBvYmplY3QgdGhhdCBoYXMgYSBrZXktdmFsdWUgcGFpciB1bmlxdWUgdG8gYW5kIGlkZW50aWNhbCB0byBhIGtleS12YWx1ZSBwYWlyIGluIHRoZSBvYmplY3QgeW91IHdhbnQgdG8gZmluZFxuICogQHJldHVybiB7TnVtYmVyfSAgICAgIFRoZSBpbmRleCBvZiB0aGUgb2JqZWN0IGluIHRoZSBhcnJheSwgb3IgLTFcbiAqL1xuXG5cbmZ1bmN0aW9uIGluZGV4T2ZPYmplY3QoYXJyLCBvYmopIHtcbiAgZm9yICh2YXIgaSBpbiBhcnIpIHtcbiAgICBpZiAoIWFyci5oYXNPd25Qcm9wZXJ0eShpKSkgY29udGludWU7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkgJiYgb2JqW2tleV0gPT09IGFycltpXVtrZXldKSByZXR1cm4gTnVtYmVyKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQoZWwsIGluY2x1ZGVTZWxmKSB7XG4gIC8vIHNraXAgdG8gd2luZG93XG4gIGlmICghZWwgfHwgIWVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkgcmV0dXJuIGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcbiAgdmFyIGVsZW0gPSBlbDtcbiAgdmFyIGdvdFNlbGYgPSBmYWxzZTtcblxuICBkbyB7XG4gICAgLy8gd2UgZG9uJ3QgbmVlZCB0byBnZXQgZWxlbSBjc3MgaWYgaXQgaXNuJ3QgZXZlbiBvdmVyZmxvd2luZyBpbiB0aGUgZmlyc3QgcGxhY2UgKHBlcmZvcm1hbmNlKVxuICAgIGlmIChlbGVtLmNsaWVudFdpZHRoIDwgZWxlbS5zY3JvbGxXaWR0aCB8fCBlbGVtLmNsaWVudEhlaWdodCA8IGVsZW0uc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICB2YXIgZWxlbUNTUyA9IGNzcyhlbGVtKTtcblxuICAgICAgaWYgKGVsZW0uY2xpZW50V2lkdGggPCBlbGVtLnNjcm9sbFdpZHRoICYmIChlbGVtQ1NTLm92ZXJmbG93WCA9PSAnYXV0bycgfHwgZWxlbUNTUy5vdmVyZmxvd1ggPT0gJ3Njcm9sbCcpIHx8IGVsZW0uY2xpZW50SGVpZ2h0IDwgZWxlbS5zY3JvbGxIZWlnaHQgJiYgKGVsZW1DU1Mub3ZlcmZsb3dZID09ICdhdXRvJyB8fCBlbGVtQ1NTLm92ZXJmbG93WSA9PSAnc2Nyb2xsJykpIHtcbiAgICAgICAgaWYgKCFlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCB8fCBlbGVtID09PSBkb2N1bWVudC5ib2R5KSByZXR1cm4gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICAgICAgICBpZiAoZ290U2VsZiB8fCBpbmNsdWRlU2VsZikgcmV0dXJuIGVsZW07XG4gICAgICAgIGdvdFNlbGYgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiBqc2hpbnQgYm9zczp0cnVlICovXG5cbiAgfSB3aGlsZSAoZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSk7XG5cbiAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKGRzdCwgc3JjKSB7XG4gIGlmIChkc3QgJiYgc3JjKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgICAgaWYgKHNyYy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGRzdFtrZXldID0gc3JjW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRzdDtcbn1cblxuZnVuY3Rpb24gaXNSZWN0RXF1YWwocmVjdDEsIHJlY3QyKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKHJlY3QxLnRvcCkgPT09IE1hdGgucm91bmQocmVjdDIudG9wKSAmJiBNYXRoLnJvdW5kKHJlY3QxLmxlZnQpID09PSBNYXRoLnJvdW5kKHJlY3QyLmxlZnQpICYmIE1hdGgucm91bmQocmVjdDEuaGVpZ2h0KSA9PT0gTWF0aC5yb3VuZChyZWN0Mi5oZWlnaHQpICYmIE1hdGgucm91bmQocmVjdDEud2lkdGgpID09PSBNYXRoLnJvdW5kKHJlY3QyLndpZHRoKTtcbn1cblxudmFyIF90aHJvdHRsZVRpbWVvdXQ7XG5cbmZ1bmN0aW9uIHRocm90dGxlKGNhbGxiYWNrLCBtcykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghX3Rocm90dGxlVGltZW91dCkge1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgICAgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbChfdGhpcywgYXJnc1swXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjay5hcHBseShfdGhpcywgYXJncyk7XG4gICAgICB9XG5cbiAgICAgIF90aHJvdHRsZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3Rocm90dGxlVGltZW91dCA9IHZvaWQgMDtcbiAgICAgIH0sIG1zKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNhbmNlbFRocm90dGxlKCkge1xuICBjbGVhclRpbWVvdXQoX3Rocm90dGxlVGltZW91dCk7XG4gIF90aHJvdHRsZVRpbWVvdXQgPSB2b2lkIDA7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbEJ5KGVsLCB4LCB5KSB7XG4gIGVsLnNjcm9sbExlZnQgKz0geDtcbiAgZWwuc2Nyb2xsVG9wICs9IHk7XG59XG5cbmZ1bmN0aW9uIGNsb25lKGVsKSB7XG4gIHZhciBQb2x5bWVyID0gd2luZG93LlBvbHltZXI7XG4gIHZhciAkID0gd2luZG93LmpRdWVyeSB8fCB3aW5kb3cuWmVwdG87XG5cbiAgaWYgKFBvbHltZXIgJiYgUG9seW1lci5kb20pIHtcbiAgICByZXR1cm4gUG9seW1lci5kb20oZWwpLmNsb25lTm9kZSh0cnVlKTtcbiAgfSBlbHNlIGlmICgkKSB7XG4gICAgcmV0dXJuICQoZWwpLmNsb25lKHRydWUpWzBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlbC5jbG9uZU5vZGUodHJ1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0UmVjdChlbCwgcmVjdCkge1xuICBjc3MoZWwsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICBjc3MoZWwsICd0b3AnLCByZWN0LnRvcCk7XG4gIGNzcyhlbCwgJ2xlZnQnLCByZWN0LmxlZnQpO1xuICBjc3MoZWwsICd3aWR0aCcsIHJlY3Qud2lkdGgpO1xuICBjc3MoZWwsICdoZWlnaHQnLCByZWN0LmhlaWdodCk7XG59XG5cbmZ1bmN0aW9uIHVuc2V0UmVjdChlbCkge1xuICBjc3MoZWwsICdwb3NpdGlvbicsICcnKTtcbiAgY3NzKGVsLCAndG9wJywgJycpO1xuICBjc3MoZWwsICdsZWZ0JywgJycpO1xuICBjc3MoZWwsICd3aWR0aCcsICcnKTtcbiAgY3NzKGVsLCAnaGVpZ2h0JywgJycpO1xufVxuXG52YXIgZXhwYW5kbyA9ICdTb3J0YWJsZScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuZnVuY3Rpb24gQW5pbWF0aW9uU3RhdGVNYW5hZ2VyKCkge1xuICB2YXIgYW5pbWF0aW9uU3RhdGVzID0gW10sXG4gICAgICBhbmltYXRpb25DYWxsYmFja0lkO1xuICByZXR1cm4ge1xuICAgIGNhcHR1cmVBbmltYXRpb25TdGF0ZTogZnVuY3Rpb24gY2FwdHVyZUFuaW1hdGlvblN0YXRlKCkge1xuICAgICAgYW5pbWF0aW9uU3RhdGVzID0gW107XG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5hbmltYXRpb24pIHJldHVybjtcbiAgICAgIHZhciBjaGlsZHJlbiA9IFtdLnNsaWNlLmNhbGwodGhpcy5lbC5jaGlsZHJlbik7XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY3NzKGNoaWxkLCAnZGlzcGxheScpID09PSAnbm9uZScgfHwgY2hpbGQgPT09IFNvcnRhYmxlLmdob3N0KSByZXR1cm47XG4gICAgICAgIGFuaW1hdGlvblN0YXRlcy5wdXNoKHtcbiAgICAgICAgICB0YXJnZXQ6IGNoaWxkLFxuICAgICAgICAgIHJlY3Q6IGdldFJlY3QoY2hpbGQpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBmcm9tUmVjdCA9IF9vYmplY3RTcHJlYWQyKHt9LCBhbmltYXRpb25TdGF0ZXNbYW5pbWF0aW9uU3RhdGVzLmxlbmd0aCAtIDFdLnJlY3QpOyAvLyBJZiBhbmltYXRpbmc6IGNvbXBlbnNhdGUgZm9yIGN1cnJlbnQgYW5pbWF0aW9uXG5cblxuICAgICAgICBpZiAoY2hpbGQudGhpc0FuaW1hdGlvbkR1cmF0aW9uKSB7XG4gICAgICAgICAgdmFyIGNoaWxkTWF0cml4ID0gbWF0cml4KGNoaWxkLCB0cnVlKTtcblxuICAgICAgICAgIGlmIChjaGlsZE1hdHJpeCkge1xuICAgICAgICAgICAgZnJvbVJlY3QudG9wIC09IGNoaWxkTWF0cml4LmY7XG4gICAgICAgICAgICBmcm9tUmVjdC5sZWZ0IC09IGNoaWxkTWF0cml4LmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQuZnJvbVJlY3QgPSBmcm9tUmVjdDtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYWRkQW5pbWF0aW9uU3RhdGU6IGZ1bmN0aW9uIGFkZEFuaW1hdGlvblN0YXRlKHN0YXRlKSB7XG4gICAgICBhbmltYXRpb25TdGF0ZXMucHVzaChzdGF0ZSk7XG4gICAgfSxcbiAgICByZW1vdmVBbmltYXRpb25TdGF0ZTogZnVuY3Rpb24gcmVtb3ZlQW5pbWF0aW9uU3RhdGUodGFyZ2V0KSB7XG4gICAgICBhbmltYXRpb25TdGF0ZXMuc3BsaWNlKGluZGV4T2ZPYmplY3QoYW5pbWF0aW9uU3RhdGVzLCB7XG4gICAgICAgIHRhcmdldDogdGFyZ2V0XG4gICAgICB9KSwgMSk7XG4gICAgfSxcbiAgICBhbmltYXRlQWxsOiBmdW5jdGlvbiBhbmltYXRlQWxsKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMub3B0aW9ucy5hbmltYXRpb24pIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGFuaW1hdGlvbkNhbGxiYWNrSWQpO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBhbmltYXRpbmcgPSBmYWxzZSxcbiAgICAgICAgICBhbmltYXRpb25UaW1lID0gMDtcbiAgICAgIGFuaW1hdGlvblN0YXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgdGltZSA9IDAsXG4gICAgICAgICAgICB0YXJnZXQgPSBzdGF0ZS50YXJnZXQsXG4gICAgICAgICAgICBmcm9tUmVjdCA9IHRhcmdldC5mcm9tUmVjdCxcbiAgICAgICAgICAgIHRvUmVjdCA9IGdldFJlY3QodGFyZ2V0KSxcbiAgICAgICAgICAgIHByZXZGcm9tUmVjdCA9IHRhcmdldC5wcmV2RnJvbVJlY3QsXG4gICAgICAgICAgICBwcmV2VG9SZWN0ID0gdGFyZ2V0LnByZXZUb1JlY3QsXG4gICAgICAgICAgICBhbmltYXRpbmdSZWN0ID0gc3RhdGUucmVjdCxcbiAgICAgICAgICAgIHRhcmdldE1hdHJpeCA9IG1hdHJpeCh0YXJnZXQsIHRydWUpO1xuXG4gICAgICAgIGlmICh0YXJnZXRNYXRyaXgpIHtcbiAgICAgICAgICAvLyBDb21wZW5zYXRlIGZvciBjdXJyZW50IGFuaW1hdGlvblxuICAgICAgICAgIHRvUmVjdC50b3AgLT0gdGFyZ2V0TWF0cml4LmY7XG4gICAgICAgICAgdG9SZWN0LmxlZnQgLT0gdGFyZ2V0TWF0cml4LmU7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXQudG9SZWN0ID0gdG9SZWN0O1xuXG4gICAgICAgIGlmICh0YXJnZXQudGhpc0FuaW1hdGlvbkR1cmF0aW9uKSB7XG4gICAgICAgICAgLy8gQ291bGQgYWxzbyBjaGVjayBpZiBhbmltYXRpbmdSZWN0IGlzIGJldHdlZW4gZnJvbVJlY3QgYW5kIHRvUmVjdFxuICAgICAgICAgIGlmIChpc1JlY3RFcXVhbChwcmV2RnJvbVJlY3QsIHRvUmVjdCkgJiYgIWlzUmVjdEVxdWFsKGZyb21SZWN0LCB0b1JlY3QpICYmIC8vIE1ha2Ugc3VyZSBhbmltYXRpbmdSZWN0IGlzIG9uIGxpbmUgYmV0d2VlbiB0b1JlY3QgJiBmcm9tUmVjdFxuICAgICAgICAgIChhbmltYXRpbmdSZWN0LnRvcCAtIHRvUmVjdC50b3ApIC8gKGFuaW1hdGluZ1JlY3QubGVmdCAtIHRvUmVjdC5sZWZ0KSA9PT0gKGZyb21SZWN0LnRvcCAtIHRvUmVjdC50b3ApIC8gKGZyb21SZWN0LmxlZnQgLSB0b1JlY3QubGVmdCkpIHtcbiAgICAgICAgICAgIC8vIElmIHJldHVybmluZyB0byBzYW1lIHBsYWNlIGFzIHN0YXJ0ZWQgZnJvbSBhbmltYXRpb24gYW5kIG9uIHNhbWUgYXhpc1xuICAgICAgICAgICAgdGltZSA9IGNhbGN1bGF0ZVJlYWxUaW1lKGFuaW1hdGluZ1JlY3QsIHByZXZGcm9tUmVjdCwgcHJldlRvUmVjdCwgX3RoaXMub3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIGlmIGZyb21SZWN0ICE9IHRvUmVjdDogYW5pbWF0ZVxuXG5cbiAgICAgICAgaWYgKCFpc1JlY3RFcXVhbCh0b1JlY3QsIGZyb21SZWN0KSkge1xuICAgICAgICAgIHRhcmdldC5wcmV2RnJvbVJlY3QgPSBmcm9tUmVjdDtcbiAgICAgICAgICB0YXJnZXQucHJldlRvUmVjdCA9IHRvUmVjdDtcblxuICAgICAgICAgIGlmICghdGltZSkge1xuICAgICAgICAgICAgdGltZSA9IF90aGlzLm9wdGlvbnMuYW5pbWF0aW9uO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzLmFuaW1hdGUodGFyZ2V0LCBhbmltYXRpbmdSZWN0LCB0b1JlY3QsIHRpbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRpbWUpIHtcbiAgICAgICAgICBhbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgIGFuaW1hdGlvblRpbWUgPSBNYXRoLm1heChhbmltYXRpb25UaW1lLCB0aW1lKTtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGFyZ2V0LmFuaW1hdGlvblJlc2V0VGltZXIpO1xuICAgICAgICAgIHRhcmdldC5hbmltYXRpb25SZXNldFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0YXJnZXQuYW5pbWF0aW9uVGltZSA9IDA7XG4gICAgICAgICAgICB0YXJnZXQucHJldkZyb21SZWN0ID0gbnVsbDtcbiAgICAgICAgICAgIHRhcmdldC5mcm9tUmVjdCA9IG51bGw7XG4gICAgICAgICAgICB0YXJnZXQucHJldlRvUmVjdCA9IG51bGw7XG4gICAgICAgICAgICB0YXJnZXQudGhpc0FuaW1hdGlvbkR1cmF0aW9uID0gbnVsbDtcbiAgICAgICAgICB9LCB0aW1lKTtcbiAgICAgICAgICB0YXJnZXQudGhpc0FuaW1hdGlvbkR1cmF0aW9uID0gdGltZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjbGVhclRpbWVvdXQoYW5pbWF0aW9uQ2FsbGJhY2tJZCk7XG5cbiAgICAgIGlmICghYW5pbWF0aW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmltYXRpb25DYWxsYmFja0lkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcbiAgICAgICAgfSwgYW5pbWF0aW9uVGltZSk7XG4gICAgICB9XG5cbiAgICAgIGFuaW1hdGlvblN0YXRlcyA9IFtdO1xuICAgIH0sXG4gICAgYW5pbWF0ZTogZnVuY3Rpb24gYW5pbWF0ZSh0YXJnZXQsIGN1cnJlbnRSZWN0LCB0b1JlY3QsIGR1cmF0aW9uKSB7XG4gICAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgICAgY3NzKHRhcmdldCwgJ3RyYW5zaXRpb24nLCAnJyk7XG4gICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2Zvcm0nLCAnJyk7XG4gICAgICAgIHZhciBlbE1hdHJpeCA9IG1hdHJpeCh0aGlzLmVsKSxcbiAgICAgICAgICAgIHNjYWxlWCA9IGVsTWF0cml4ICYmIGVsTWF0cml4LmEsXG4gICAgICAgICAgICBzY2FsZVkgPSBlbE1hdHJpeCAmJiBlbE1hdHJpeC5kLFxuICAgICAgICAgICAgdHJhbnNsYXRlWCA9IChjdXJyZW50UmVjdC5sZWZ0IC0gdG9SZWN0LmxlZnQpIC8gKHNjYWxlWCB8fCAxKSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVkgPSAoY3VycmVudFJlY3QudG9wIC0gdG9SZWN0LnRvcCkgLyAoc2NhbGVZIHx8IDEpO1xuICAgICAgICB0YXJnZXQuYW5pbWF0aW5nWCA9ICEhdHJhbnNsYXRlWDtcbiAgICAgICAgdGFyZ2V0LmFuaW1hdGluZ1kgPSAhIXRyYW5zbGF0ZVk7XG4gICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoJyArIHRyYW5zbGF0ZVggKyAncHgsJyArIHRyYW5zbGF0ZVkgKyAncHgsMCknKTtcbiAgICAgICAgdGhpcy5mb3JSZXBhaW50RHVtbXkgPSByZXBhaW50KHRhcmdldCk7IC8vIHJlcGFpbnRcblxuICAgICAgICBjc3ModGFyZ2V0LCAndHJhbnNpdGlvbicsICd0cmFuc2Zvcm0gJyArIGR1cmF0aW9uICsgJ21zJyArICh0aGlzLm9wdGlvbnMuZWFzaW5nID8gJyAnICsgdGhpcy5vcHRpb25zLmVhc2luZyA6ICcnKSk7XG4gICAgICAgIGNzcyh0YXJnZXQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoMCwwLDApJyk7XG4gICAgICAgIHR5cGVvZiB0YXJnZXQuYW5pbWF0ZWQgPT09ICdudW1iZXInICYmIGNsZWFyVGltZW91dCh0YXJnZXQuYW5pbWF0ZWQpO1xuICAgICAgICB0YXJnZXQuYW5pbWF0ZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjc3ModGFyZ2V0LCAndHJhbnNpdGlvbicsICcnKTtcbiAgICAgICAgICBjc3ModGFyZ2V0LCAndHJhbnNmb3JtJywgJycpO1xuICAgICAgICAgIHRhcmdldC5hbmltYXRlZCA9IGZhbHNlO1xuICAgICAgICAgIHRhcmdldC5hbmltYXRpbmdYID0gZmFsc2U7XG4gICAgICAgICAgdGFyZ2V0LmFuaW1hdGluZ1kgPSBmYWxzZTtcbiAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVwYWludCh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldC5vZmZzZXRXaWR0aDtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlUmVhbFRpbWUoYW5pbWF0aW5nUmVjdCwgZnJvbVJlY3QsIHRvUmVjdCwgb3B0aW9ucykge1xuICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGZyb21SZWN0LnRvcCAtIGFuaW1hdGluZ1JlY3QudG9wLCAyKSArIE1hdGgucG93KGZyb21SZWN0LmxlZnQgLSBhbmltYXRpbmdSZWN0LmxlZnQsIDIpKSAvIE1hdGguc3FydChNYXRoLnBvdyhmcm9tUmVjdC50b3AgLSB0b1JlY3QudG9wLCAyKSArIE1hdGgucG93KGZyb21SZWN0LmxlZnQgLSB0b1JlY3QubGVmdCwgMikpICogb3B0aW9ucy5hbmltYXRpb247XG59XG5cbnZhciBwbHVnaW5zID0gW107XG52YXIgZGVmYXVsdHMgPSB7XG4gIGluaXRpYWxpemVCeURlZmF1bHQ6IHRydWVcbn07XG52YXIgUGx1Z2luTWFuYWdlciA9IHtcbiAgbW91bnQ6IGZ1bmN0aW9uIG1vdW50KHBsdWdpbikge1xuICAgIC8vIFNldCBkZWZhdWx0IHN0YXRpYyBwcm9wZXJ0aWVzXG4gICAgZm9yICh2YXIgb3B0aW9uIGluIGRlZmF1bHRzKSB7XG4gICAgICBpZiAoZGVmYXVsdHMuaGFzT3duUHJvcGVydHkob3B0aW9uKSAmJiAhKG9wdGlvbiBpbiBwbHVnaW4pKSB7XG4gICAgICAgIHBsdWdpbltvcHRpb25dID0gZGVmYXVsdHNbb3B0aW9uXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHApIHtcbiAgICAgIGlmIChwLnBsdWdpbk5hbWUgPT09IHBsdWdpbi5wbHVnaW5OYW1lKSB7XG4gICAgICAgIHRocm93IFwiU29ydGFibGU6IENhbm5vdCBtb3VudCBwbHVnaW4gXCIuY29uY2F0KHBsdWdpbi5wbHVnaW5OYW1lLCBcIiBtb3JlIHRoYW4gb25jZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBwbHVnaW5zLnB1c2gocGx1Z2luKTtcbiAgfSxcbiAgcGx1Z2luRXZlbnQ6IGZ1bmN0aW9uIHBsdWdpbkV2ZW50KGV2ZW50TmFtZSwgc29ydGFibGUsIGV2dCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB0aGlzLmV2ZW50Q2FuY2VsZWQgPSBmYWxzZTtcblxuICAgIGV2dC5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5ldmVudENhbmNlbGVkID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgdmFyIGV2ZW50TmFtZUdsb2JhbCA9IGV2ZW50TmFtZSArICdHbG9iYWwnO1xuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICBpZiAoIXNvcnRhYmxlW3BsdWdpbi5wbHVnaW5OYW1lXSkgcmV0dXJuOyAvLyBGaXJlIGdsb2JhbCBldmVudHMgaWYgaXQgZXhpc3RzIGluIHRoaXMgc29ydGFibGVcblxuICAgICAgaWYgKHNvcnRhYmxlW3BsdWdpbi5wbHVnaW5OYW1lXVtldmVudE5hbWVHbG9iYWxdKSB7XG4gICAgICAgIHNvcnRhYmxlW3BsdWdpbi5wbHVnaW5OYW1lXVtldmVudE5hbWVHbG9iYWxdKF9vYmplY3RTcHJlYWQyKHtcbiAgICAgICAgICBzb3J0YWJsZTogc29ydGFibGVcbiAgICAgICAgfSwgZXZ0KSk7XG4gICAgICB9IC8vIE9ubHkgZmlyZSBwbHVnaW4gZXZlbnQgaWYgcGx1Z2luIGlzIGVuYWJsZWQgaW4gdGhpcyBzb3J0YWJsZSxcbiAgICAgIC8vIGFuZCBwbHVnaW4gaGFzIGV2ZW50IGRlZmluZWRcblxuXG4gICAgICBpZiAoc29ydGFibGUub3B0aW9uc1twbHVnaW4ucGx1Z2luTmFtZV0gJiYgc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdW2V2ZW50TmFtZV0oX29iamVjdFNwcmVhZDIoe1xuICAgICAgICAgIHNvcnRhYmxlOiBzb3J0YWJsZVxuICAgICAgICB9LCBldnQpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgaW5pdGlhbGl6ZVBsdWdpbnM6IGZ1bmN0aW9uIGluaXRpYWxpemVQbHVnaW5zKHNvcnRhYmxlLCBlbCwgZGVmYXVsdHMsIG9wdGlvbnMpIHtcbiAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgdmFyIHBsdWdpbk5hbWUgPSBwbHVnaW4ucGx1Z2luTmFtZTtcbiAgICAgIGlmICghc29ydGFibGUub3B0aW9uc1twbHVnaW5OYW1lXSAmJiAhcGx1Z2luLmluaXRpYWxpemVCeURlZmF1bHQpIHJldHVybjtcbiAgICAgIHZhciBpbml0aWFsaXplZCA9IG5ldyBwbHVnaW4oc29ydGFibGUsIGVsLCBzb3J0YWJsZS5vcHRpb25zKTtcbiAgICAgIGluaXRpYWxpemVkLnNvcnRhYmxlID0gc29ydGFibGU7XG4gICAgICBpbml0aWFsaXplZC5vcHRpb25zID0gc29ydGFibGUub3B0aW9ucztcbiAgICAgIHNvcnRhYmxlW3BsdWdpbk5hbWVdID0gaW5pdGlhbGl6ZWQ7IC8vIEFkZCBkZWZhdWx0IG9wdGlvbnMgZnJvbSBwbHVnaW5cblxuICAgICAgX2V4dGVuZHMoZGVmYXVsdHMsIGluaXRpYWxpemVkLmRlZmF1bHRzKTtcbiAgICB9KTtcblxuICAgIGZvciAodmFyIG9wdGlvbiBpbiBzb3J0YWJsZS5vcHRpb25zKSB7XG4gICAgICBpZiAoIXNvcnRhYmxlLm9wdGlvbnMuaGFzT3duUHJvcGVydHkob3B0aW9uKSkgY29udGludWU7XG4gICAgICB2YXIgbW9kaWZpZWQgPSB0aGlzLm1vZGlmeU9wdGlvbihzb3J0YWJsZSwgb3B0aW9uLCBzb3J0YWJsZS5vcHRpb25zW29wdGlvbl0pO1xuXG4gICAgICBpZiAodHlwZW9mIG1vZGlmaWVkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzb3J0YWJsZS5vcHRpb25zW29wdGlvbl0gPSBtb2RpZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGdldEV2ZW50UHJvcGVydGllczogZnVuY3Rpb24gZ2V0RXZlbnRQcm9wZXJ0aWVzKG5hbWUsIHNvcnRhYmxlKSB7XG4gICAgdmFyIGV2ZW50UHJvcGVydGllcyA9IHt9O1xuICAgIHBsdWdpbnMuZm9yRWFjaChmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgICBpZiAodHlwZW9mIHBsdWdpbi5ldmVudFByb3BlcnRpZXMgIT09ICdmdW5jdGlvbicpIHJldHVybjtcblxuICAgICAgX2V4dGVuZHMoZXZlbnRQcm9wZXJ0aWVzLCBwbHVnaW4uZXZlbnRQcm9wZXJ0aWVzLmNhbGwoc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdLCBuYW1lKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGV2ZW50UHJvcGVydGllcztcbiAgfSxcbiAgbW9kaWZ5T3B0aW9uOiBmdW5jdGlvbiBtb2RpZnlPcHRpb24oc29ydGFibGUsIG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIG1vZGlmaWVkVmFsdWU7XG4gICAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIC8vIFBsdWdpbiBtdXN0IGV4aXN0IG9uIHRoZSBTb3J0YWJsZVxuICAgICAgaWYgKCFzb3J0YWJsZVtwbHVnaW4ucGx1Z2luTmFtZV0pIHJldHVybjsgLy8gSWYgc3RhdGljIG9wdGlvbiBsaXN0ZW5lciBleGlzdHMgZm9yIHRoaXMgb3B0aW9uLCBjYWxsIGluIHRoZSBjb250ZXh0IG9mIHRoZSBTb3J0YWJsZSdzIGluc3RhbmNlIG9mIHRoaXMgcGx1Z2luXG5cbiAgICAgIGlmIChwbHVnaW4ub3B0aW9uTGlzdGVuZXJzICYmIHR5cGVvZiBwbHVnaW4ub3B0aW9uTGlzdGVuZXJzW25hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG1vZGlmaWVkVmFsdWUgPSBwbHVnaW4ub3B0aW9uTGlzdGVuZXJzW25hbWVdLmNhbGwoc29ydGFibGVbcGx1Z2luLnBsdWdpbk5hbWVdLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1vZGlmaWVkVmFsdWU7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGRpc3BhdGNoRXZlbnQoX3JlZikge1xuICB2YXIgc29ydGFibGUgPSBfcmVmLnNvcnRhYmxlLFxuICAgICAgcm9vdEVsID0gX3JlZi5yb290RWwsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgdGFyZ2V0RWwgPSBfcmVmLnRhcmdldEVsLFxuICAgICAgY2xvbmVFbCA9IF9yZWYuY2xvbmVFbCxcbiAgICAgIHRvRWwgPSBfcmVmLnRvRWwsXG4gICAgICBmcm9tRWwgPSBfcmVmLmZyb21FbCxcbiAgICAgIG9sZEluZGV4ID0gX3JlZi5vbGRJbmRleCxcbiAgICAgIG5ld0luZGV4ID0gX3JlZi5uZXdJbmRleCxcbiAgICAgIG9sZERyYWdnYWJsZUluZGV4ID0gX3JlZi5vbGREcmFnZ2FibGVJbmRleCxcbiAgICAgIG5ld0RyYWdnYWJsZUluZGV4ID0gX3JlZi5uZXdEcmFnZ2FibGVJbmRleCxcbiAgICAgIG9yaWdpbmFsRXZlbnQgPSBfcmVmLm9yaWdpbmFsRXZlbnQsXG4gICAgICBwdXRTb3J0YWJsZSA9IF9yZWYucHV0U29ydGFibGUsXG4gICAgICBleHRyYUV2ZW50UHJvcGVydGllcyA9IF9yZWYuZXh0cmFFdmVudFByb3BlcnRpZXM7XG4gIHNvcnRhYmxlID0gc29ydGFibGUgfHwgcm9vdEVsICYmIHJvb3RFbFtleHBhbmRvXTtcbiAgaWYgKCFzb3J0YWJsZSkgcmV0dXJuO1xuICB2YXIgZXZ0LFxuICAgICAgb3B0aW9ucyA9IHNvcnRhYmxlLm9wdGlvbnMsXG4gICAgICBvbk5hbWUgPSAnb24nICsgbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyKDEpOyAvLyBTdXBwb3J0IGZvciBuZXcgQ3VzdG9tRXZlbnQgZmVhdHVyZVxuXG4gIGlmICh3aW5kb3cuQ3VzdG9tRXZlbnQgJiYgIUlFMTFPckxlc3MgJiYgIUVkZ2UpIHtcbiAgICBldnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldnQuaW5pdEV2ZW50KG5hbWUsIHRydWUsIHRydWUpO1xuICB9XG5cbiAgZXZ0LnRvID0gdG9FbCB8fCByb290RWw7XG4gIGV2dC5mcm9tID0gZnJvbUVsIHx8IHJvb3RFbDtcbiAgZXZ0Lml0ZW0gPSB0YXJnZXRFbCB8fCByb290RWw7XG4gIGV2dC5jbG9uZSA9IGNsb25lRWw7XG4gIGV2dC5vbGRJbmRleCA9IG9sZEluZGV4O1xuICBldnQubmV3SW5kZXggPSBuZXdJbmRleDtcbiAgZXZ0Lm9sZERyYWdnYWJsZUluZGV4ID0gb2xkRHJhZ2dhYmxlSW5kZXg7XG4gIGV2dC5uZXdEcmFnZ2FibGVJbmRleCA9IG5ld0RyYWdnYWJsZUluZGV4O1xuICBldnQub3JpZ2luYWxFdmVudCA9IG9yaWdpbmFsRXZlbnQ7XG4gIGV2dC5wdWxsTW9kZSA9IHB1dFNvcnRhYmxlID8gcHV0U29ydGFibGUubGFzdFB1dE1vZGUgOiB1bmRlZmluZWQ7XG5cbiAgdmFyIGFsbEV2ZW50UHJvcGVydGllcyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBleHRyYUV2ZW50UHJvcGVydGllcyksIFBsdWdpbk1hbmFnZXIuZ2V0RXZlbnRQcm9wZXJ0aWVzKG5hbWUsIHNvcnRhYmxlKSk7XG5cbiAgZm9yICh2YXIgb3B0aW9uIGluIGFsbEV2ZW50UHJvcGVydGllcykge1xuICAgIGV2dFtvcHRpb25dID0gYWxsRXZlbnRQcm9wZXJ0aWVzW29wdGlvbl07XG4gIH1cblxuICBpZiAocm9vdEVsKSB7XG4gICAgcm9vdEVsLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgfVxuXG4gIGlmIChvcHRpb25zW29uTmFtZV0pIHtcbiAgICBvcHRpb25zW29uTmFtZV0uY2FsbChzb3J0YWJsZSwgZXZ0KTtcbiAgfVxufVxuXG52YXIgX2V4Y2x1ZGVkID0gW1wiZXZ0XCJdO1xuXG52YXIgcGx1Z2luRXZlbnQgPSBmdW5jdGlvbiBwbHVnaW5FdmVudChldmVudE5hbWUsIHNvcnRhYmxlKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fSxcbiAgICAgIG9yaWdpbmFsRXZlbnQgPSBfcmVmLmV2dCxcbiAgICAgIGRhdGEgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgX2V4Y2x1ZGVkKTtcblxuICBQbHVnaW5NYW5hZ2VyLnBsdWdpbkV2ZW50LmJpbmQoU29ydGFibGUpKGV2ZW50TmFtZSwgc29ydGFibGUsIF9vYmplY3RTcHJlYWQyKHtcbiAgICBkcmFnRWw6IGRyYWdFbCxcbiAgICBwYXJlbnRFbDogcGFyZW50RWwsXG4gICAgZ2hvc3RFbDogZ2hvc3RFbCxcbiAgICByb290RWw6IHJvb3RFbCxcbiAgICBuZXh0RWw6IG5leHRFbCxcbiAgICBsYXN0RG93bkVsOiBsYXN0RG93bkVsLFxuICAgIGNsb25lRWw6IGNsb25lRWwsXG4gICAgY2xvbmVIaWRkZW46IGNsb25lSGlkZGVuLFxuICAgIGRyYWdTdGFydGVkOiBtb3ZlZCxcbiAgICBwdXRTb3J0YWJsZTogcHV0U29ydGFibGUsXG4gICAgYWN0aXZlU29ydGFibGU6IFNvcnRhYmxlLmFjdGl2ZSxcbiAgICBvcmlnaW5hbEV2ZW50OiBvcmlnaW5hbEV2ZW50LFxuICAgIG9sZEluZGV4OiBvbGRJbmRleCxcbiAgICBvbGREcmFnZ2FibGVJbmRleDogb2xkRHJhZ2dhYmxlSW5kZXgsXG4gICAgbmV3SW5kZXg6IG5ld0luZGV4LFxuICAgIG5ld0RyYWdnYWJsZUluZGV4OiBuZXdEcmFnZ2FibGVJbmRleCxcbiAgICBoaWRlR2hvc3RGb3JUYXJnZXQ6IF9oaWRlR2hvc3RGb3JUYXJnZXQsXG4gICAgdW5oaWRlR2hvc3RGb3JUYXJnZXQ6IF91bmhpZGVHaG9zdEZvclRhcmdldCxcbiAgICBjbG9uZU5vd0hpZGRlbjogZnVuY3Rpb24gY2xvbmVOb3dIaWRkZW4oKSB7XG4gICAgICBjbG9uZUhpZGRlbiA9IHRydWU7XG4gICAgfSxcbiAgICBjbG9uZU5vd1Nob3duOiBmdW5jdGlvbiBjbG9uZU5vd1Nob3duKCkge1xuICAgICAgY2xvbmVIaWRkZW4gPSBmYWxzZTtcbiAgICB9LFxuICAgIGRpc3BhdGNoU29ydGFibGVFdmVudDogZnVuY3Rpb24gZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KG5hbWUpIHtcbiAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgc29ydGFibGU6IHNvcnRhYmxlLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBvcmlnaW5hbEV2ZW50OiBvcmlnaW5hbEV2ZW50XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIGRhdGEpKTtcbn07XG5cbmZ1bmN0aW9uIF9kaXNwYXRjaEV2ZW50KGluZm8pIHtcbiAgZGlzcGF0Y2hFdmVudChfb2JqZWN0U3ByZWFkMih7XG4gICAgcHV0U29ydGFibGU6IHB1dFNvcnRhYmxlLFxuICAgIGNsb25lRWw6IGNsb25lRWwsXG4gICAgdGFyZ2V0RWw6IGRyYWdFbCxcbiAgICByb290RWw6IHJvb3RFbCxcbiAgICBvbGRJbmRleDogb2xkSW5kZXgsXG4gICAgb2xkRHJhZ2dhYmxlSW5kZXg6IG9sZERyYWdnYWJsZUluZGV4LFxuICAgIG5ld0luZGV4OiBuZXdJbmRleCxcbiAgICBuZXdEcmFnZ2FibGVJbmRleDogbmV3RHJhZ2dhYmxlSW5kZXhcbiAgfSwgaW5mbykpO1xufVxuXG52YXIgZHJhZ0VsLFxuICAgIHBhcmVudEVsLFxuICAgIGdob3N0RWwsXG4gICAgcm9vdEVsLFxuICAgIG5leHRFbCxcbiAgICBsYXN0RG93bkVsLFxuICAgIGNsb25lRWwsXG4gICAgY2xvbmVIaWRkZW4sXG4gICAgb2xkSW5kZXgsXG4gICAgbmV3SW5kZXgsXG4gICAgb2xkRHJhZ2dhYmxlSW5kZXgsXG4gICAgbmV3RHJhZ2dhYmxlSW5kZXgsXG4gICAgYWN0aXZlR3JvdXAsXG4gICAgcHV0U29ydGFibGUsXG4gICAgYXdhaXRpbmdEcmFnU3RhcnRlZCA9IGZhbHNlLFxuICAgIGlnbm9yZU5leHRDbGljayA9IGZhbHNlLFxuICAgIHNvcnRhYmxlcyA9IFtdLFxuICAgIHRhcEV2dCxcbiAgICB0b3VjaEV2dCxcbiAgICBsYXN0RHgsXG4gICAgbGFzdER5LFxuICAgIHRhcERpc3RhbmNlTGVmdCxcbiAgICB0YXBEaXN0YW5jZVRvcCxcbiAgICBtb3ZlZCxcbiAgICBsYXN0VGFyZ2V0LFxuICAgIGxhc3REaXJlY3Rpb24sXG4gICAgcGFzdEZpcnN0SW52ZXJ0VGhyZXNoID0gZmFsc2UsXG4gICAgaXNDaXJjdW1zdGFudGlhbEludmVydCA9IGZhbHNlLFxuICAgIHRhcmdldE1vdmVEaXN0YW5jZSxcbiAgICAvLyBGb3IgcG9zaXRpb25pbmcgZ2hvc3QgYWJzb2x1dGVseVxuZ2hvc3RSZWxhdGl2ZVBhcmVudCxcbiAgICBnaG9zdFJlbGF0aXZlUGFyZW50SW5pdGlhbFNjcm9sbCA9IFtdLFxuICAgIC8vIChsZWZ0LCB0b3ApXG5fc2lsZW50ID0gZmFsc2UsXG4gICAgc2F2ZWRJbnB1dENoZWNrZWQgPSBbXTtcbi8qKiBAY29uc3QgKi9cblxudmFyIGRvY3VtZW50RXhpc3RzID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyxcbiAgICBQb3NpdGlvbkdob3N0QWJzb2x1dGVseSA9IElPUyxcbiAgICBDU1NGbG9hdFByb3BlcnR5ID0gRWRnZSB8fCBJRTExT3JMZXNzID8gJ2Nzc0Zsb2F0JyA6ICdmbG9hdCcsXG4gICAgLy8gVGhpcyB3aWxsIG5vdCBwYXNzIGZvciBJRTksIGJlY2F1c2UgSUU5IERuRCBvbmx5IHdvcmtzIG9uIGFuY2hvcnNcbnN1cHBvcnREcmFnZ2FibGUgPSBkb2N1bWVudEV4aXN0cyAmJiAhQ2hyb21lRm9yQW5kcm9pZCAmJiAhSU9TICYmICdkcmFnZ2FibGUnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgIHN1cHBvcnRDc3NQb2ludGVyRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIWRvY3VtZW50RXhpc3RzKSByZXR1cm47IC8vIGZhbHNlIHdoZW4gPD0gSUUxMVxuXG4gIGlmIChJRTExT3JMZXNzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgneCcpO1xuICBlbC5zdHlsZS5jc3NUZXh0ID0gJ3BvaW50ZXItZXZlbnRzOmF1dG8nO1xuICByZXR1cm4gZWwuc3R5bGUucG9pbnRlckV2ZW50cyA9PT0gJ2F1dG8nO1xufSgpLFxuICAgIF9kZXRlY3REaXJlY3Rpb24gPSBmdW5jdGlvbiBfZGV0ZWN0RGlyZWN0aW9uKGVsLCBvcHRpb25zKSB7XG4gIHZhciBlbENTUyA9IGNzcyhlbCksXG4gICAgICBlbFdpZHRoID0gcGFyc2VJbnQoZWxDU1Mud2lkdGgpIC0gcGFyc2VJbnQoZWxDU1MucGFkZGluZ0xlZnQpIC0gcGFyc2VJbnQoZWxDU1MucGFkZGluZ1JpZ2h0KSAtIHBhcnNlSW50KGVsQ1NTLmJvcmRlckxlZnRXaWR0aCkgLSBwYXJzZUludChlbENTUy5ib3JkZXJSaWdodFdpZHRoKSxcbiAgICAgIGNoaWxkMSA9IGdldENoaWxkKGVsLCAwLCBvcHRpb25zKSxcbiAgICAgIGNoaWxkMiA9IGdldENoaWxkKGVsLCAxLCBvcHRpb25zKSxcbiAgICAgIGZpcnN0Q2hpbGRDU1MgPSBjaGlsZDEgJiYgY3NzKGNoaWxkMSksXG4gICAgICBzZWNvbmRDaGlsZENTUyA9IGNoaWxkMiAmJiBjc3MoY2hpbGQyKSxcbiAgICAgIGZpcnN0Q2hpbGRXaWR0aCA9IGZpcnN0Q2hpbGRDU1MgJiYgcGFyc2VJbnQoZmlyc3RDaGlsZENTUy5tYXJnaW5MZWZ0KSArIHBhcnNlSW50KGZpcnN0Q2hpbGRDU1MubWFyZ2luUmlnaHQpICsgZ2V0UmVjdChjaGlsZDEpLndpZHRoLFxuICAgICAgc2Vjb25kQ2hpbGRXaWR0aCA9IHNlY29uZENoaWxkQ1NTICYmIHBhcnNlSW50KHNlY29uZENoaWxkQ1NTLm1hcmdpbkxlZnQpICsgcGFyc2VJbnQoc2Vjb25kQ2hpbGRDU1MubWFyZ2luUmlnaHQpICsgZ2V0UmVjdChjaGlsZDIpLndpZHRoO1xuXG4gIGlmIChlbENTUy5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICByZXR1cm4gZWxDU1MuZmxleERpcmVjdGlvbiA9PT0gJ2NvbHVtbicgfHwgZWxDU1MuZmxleERpcmVjdGlvbiA9PT0gJ2NvbHVtbi1yZXZlcnNlJyA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gIH1cblxuICBpZiAoZWxDU1MuZGlzcGxheSA9PT0gJ2dyaWQnKSB7XG4gICAgcmV0dXJuIGVsQ1NTLmdyaWRUZW1wbGF0ZUNvbHVtbnMuc3BsaXQoJyAnKS5sZW5ndGggPD0gMSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gIH1cblxuICBpZiAoY2hpbGQxICYmIGZpcnN0Q2hpbGRDU1NbXCJmbG9hdFwiXSAmJiBmaXJzdENoaWxkQ1NTW1wiZmxvYXRcIl0gIT09ICdub25lJykge1xuICAgIHZhciB0b3VjaGluZ1NpZGVDaGlsZDIgPSBmaXJzdENoaWxkQ1NTW1wiZmxvYXRcIl0gPT09ICdsZWZ0JyA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgcmV0dXJuIGNoaWxkMiAmJiAoc2Vjb25kQ2hpbGRDU1MuY2xlYXIgPT09ICdib3RoJyB8fCBzZWNvbmRDaGlsZENTUy5jbGVhciA9PT0gdG91Y2hpbmdTaWRlQ2hpbGQyKSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gIH1cblxuICByZXR1cm4gY2hpbGQxICYmIChmaXJzdENoaWxkQ1NTLmRpc3BsYXkgPT09ICdibG9jaycgfHwgZmlyc3RDaGlsZENTUy5kaXNwbGF5ID09PSAnZmxleCcgfHwgZmlyc3RDaGlsZENTUy5kaXNwbGF5ID09PSAndGFibGUnIHx8IGZpcnN0Q2hpbGRDU1MuZGlzcGxheSA9PT0gJ2dyaWQnIHx8IGZpcnN0Q2hpbGRXaWR0aCA+PSBlbFdpZHRoICYmIGVsQ1NTW0NTU0Zsb2F0UHJvcGVydHldID09PSAnbm9uZScgfHwgY2hpbGQyICYmIGVsQ1NTW0NTU0Zsb2F0UHJvcGVydHldID09PSAnbm9uZScgJiYgZmlyc3RDaGlsZFdpZHRoICsgc2Vjb25kQ2hpbGRXaWR0aCA+IGVsV2lkdGgpID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbn0sXG4gICAgX2RyYWdFbEluUm93Q29sdW1uID0gZnVuY3Rpb24gX2RyYWdFbEluUm93Q29sdW1uKGRyYWdSZWN0LCB0YXJnZXRSZWN0LCB2ZXJ0aWNhbCkge1xuICB2YXIgZHJhZ0VsUzFPcHAgPSB2ZXJ0aWNhbCA/IGRyYWdSZWN0LmxlZnQgOiBkcmFnUmVjdC50b3AsXG4gICAgICBkcmFnRWxTMk9wcCA9IHZlcnRpY2FsID8gZHJhZ1JlY3QucmlnaHQgOiBkcmFnUmVjdC5ib3R0b20sXG4gICAgICBkcmFnRWxPcHBMZW5ndGggPSB2ZXJ0aWNhbCA/IGRyYWdSZWN0LndpZHRoIDogZHJhZ1JlY3QuaGVpZ2h0LFxuICAgICAgdGFyZ2V0UzFPcHAgPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3QubGVmdCA6IHRhcmdldFJlY3QudG9wLFxuICAgICAgdGFyZ2V0UzJPcHAgPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3QucmlnaHQgOiB0YXJnZXRSZWN0LmJvdHRvbSxcbiAgICAgIHRhcmdldE9wcExlbmd0aCA9IHZlcnRpY2FsID8gdGFyZ2V0UmVjdC53aWR0aCA6IHRhcmdldFJlY3QuaGVpZ2h0O1xuICByZXR1cm4gZHJhZ0VsUzFPcHAgPT09IHRhcmdldFMxT3BwIHx8IGRyYWdFbFMyT3BwID09PSB0YXJnZXRTMk9wcCB8fCBkcmFnRWxTMU9wcCArIGRyYWdFbE9wcExlbmd0aCAvIDIgPT09IHRhcmdldFMxT3BwICsgdGFyZ2V0T3BwTGVuZ3RoIC8gMjtcbn0sXG5cbi8qKlxuICogRGV0ZWN0cyBmaXJzdCBuZWFyZXN0IGVtcHR5IHNvcnRhYmxlIHRvIFggYW5kIFkgcG9zaXRpb24gdXNpbmcgZW1wdHlJbnNlcnRUaHJlc2hvbGQuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHggICAgICBYIHBvc2l0aW9uXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHkgICAgICBZIHBvc2l0aW9uXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gICBFbGVtZW50IG9mIHRoZSBmaXJzdCBmb3VuZCBuZWFyZXN0IFNvcnRhYmxlXG4gKi9cbl9kZXRlY3ROZWFyZXN0RW1wdHlTb3J0YWJsZSA9IGZ1bmN0aW9uIF9kZXRlY3ROZWFyZXN0RW1wdHlTb3J0YWJsZSh4LCB5KSB7XG4gIHZhciByZXQ7XG4gIHNvcnRhYmxlcy5zb21lKGZ1bmN0aW9uIChzb3J0YWJsZSkge1xuICAgIHZhciB0aHJlc2hvbGQgPSBzb3J0YWJsZVtleHBhbmRvXS5vcHRpb25zLmVtcHR5SW5zZXJ0VGhyZXNob2xkO1xuICAgIGlmICghdGhyZXNob2xkIHx8IGxhc3RDaGlsZChzb3J0YWJsZSkpIHJldHVybjtcbiAgICB2YXIgcmVjdCA9IGdldFJlY3Qoc29ydGFibGUpLFxuICAgICAgICBpbnNpZGVIb3Jpem9udGFsbHkgPSB4ID49IHJlY3QubGVmdCAtIHRocmVzaG9sZCAmJiB4IDw9IHJlY3QucmlnaHQgKyB0aHJlc2hvbGQsXG4gICAgICAgIGluc2lkZVZlcnRpY2FsbHkgPSB5ID49IHJlY3QudG9wIC0gdGhyZXNob2xkICYmIHkgPD0gcmVjdC5ib3R0b20gKyB0aHJlc2hvbGQ7XG5cbiAgICBpZiAoaW5zaWRlSG9yaXpvbnRhbGx5ICYmIGluc2lkZVZlcnRpY2FsbHkpIHtcbiAgICAgIHJldHVybiByZXQgPSBzb3J0YWJsZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufSxcbiAgICBfcHJlcGFyZUdyb3VwID0gZnVuY3Rpb24gX3ByZXBhcmVHcm91cChvcHRpb25zKSB7XG4gIGZ1bmN0aW9uIHRvRm4odmFsdWUsIHB1bGwpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRvLCBmcm9tLCBkcmFnRWwsIGV2dCkge1xuICAgICAgdmFyIHNhbWVHcm91cCA9IHRvLm9wdGlvbnMuZ3JvdXAubmFtZSAmJiBmcm9tLm9wdGlvbnMuZ3JvdXAubmFtZSAmJiB0by5vcHRpb25zLmdyb3VwLm5hbWUgPT09IGZyb20ub3B0aW9ucy5ncm91cC5uYW1lO1xuXG4gICAgICBpZiAodmFsdWUgPT0gbnVsbCAmJiAocHVsbCB8fCBzYW1lR3JvdXApKSB7XG4gICAgICAgIC8vIERlZmF1bHQgcHVsbCB2YWx1ZVxuICAgICAgICAvLyBEZWZhdWx0IHB1bGwgYW5kIHB1dCB2YWx1ZSBpZiBzYW1lIGdyb3VwXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKHB1bGwgJiYgdmFsdWUgPT09ICdjbG9uZScpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHRvRm4odmFsdWUodG8sIGZyb20sIGRyYWdFbCwgZXZ0KSwgcHVsbCkodG8sIGZyb20sIGRyYWdFbCwgZXZ0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBvdGhlckdyb3VwID0gKHB1bGwgPyB0byA6IGZyb20pLm9wdGlvbnMuZ3JvdXAubmFtZTtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSB0cnVlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUgPT09IG90aGVyR3JvdXAgfHwgdmFsdWUuam9pbiAmJiB2YWx1ZS5pbmRleE9mKG90aGVyR3JvdXApID4gLTE7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHZhciBncm91cCA9IHt9O1xuICB2YXIgb3JpZ2luYWxHcm91cCA9IG9wdGlvbnMuZ3JvdXA7XG5cbiAgaWYgKCFvcmlnaW5hbEdyb3VwIHx8IF90eXBlb2Yob3JpZ2luYWxHcm91cCkgIT0gJ29iamVjdCcpIHtcbiAgICBvcmlnaW5hbEdyb3VwID0ge1xuICAgICAgbmFtZTogb3JpZ2luYWxHcm91cFxuICAgIH07XG4gIH1cblxuICBncm91cC5uYW1lID0gb3JpZ2luYWxHcm91cC5uYW1lO1xuICBncm91cC5jaGVja1B1bGwgPSB0b0ZuKG9yaWdpbmFsR3JvdXAucHVsbCwgdHJ1ZSk7XG4gIGdyb3VwLmNoZWNrUHV0ID0gdG9GbihvcmlnaW5hbEdyb3VwLnB1dCk7XG4gIGdyb3VwLnJldmVydENsb25lID0gb3JpZ2luYWxHcm91cC5yZXZlcnRDbG9uZTtcbiAgb3B0aW9ucy5ncm91cCA9IGdyb3VwO1xufSxcbiAgICBfaGlkZUdob3N0Rm9yVGFyZ2V0ID0gZnVuY3Rpb24gX2hpZGVHaG9zdEZvclRhcmdldCgpIHtcbiAgaWYgKCFzdXBwb3J0Q3NzUG9pbnRlckV2ZW50cyAmJiBnaG9zdEVsKSB7XG4gICAgY3NzKGdob3N0RWwsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgfVxufSxcbiAgICBfdW5oaWRlR2hvc3RGb3JUYXJnZXQgPSBmdW5jdGlvbiBfdW5oaWRlR2hvc3RGb3JUYXJnZXQoKSB7XG4gIGlmICghc3VwcG9ydENzc1BvaW50ZXJFdmVudHMgJiYgZ2hvc3RFbCkge1xuICAgIGNzcyhnaG9zdEVsLCAnZGlzcGxheScsICcnKTtcbiAgfVxufTsgLy8gIzExODQgZml4IC0gUHJldmVudCBjbGljayBldmVudCBvbiBmYWxsYmFjayBpZiBkcmFnZ2VkIGJ1dCBpdGVtIG5vdCBjaGFuZ2VkIHBvc2l0aW9uXG5cblxuaWYgKGRvY3VtZW50RXhpc3RzKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xuICAgIGlmIChpZ25vcmVOZXh0Q2xpY2spIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbiAmJiBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uICYmIGV2dC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIGlnbm9yZU5leHRDbGljayA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwgdHJ1ZSk7XG59XG5cbnZhciBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCA9IGZ1bmN0aW9uIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KGV2dCkge1xuICBpZiAoZHJhZ0VsKSB7XG4gICAgZXZ0ID0gZXZ0LnRvdWNoZXMgPyBldnQudG91Y2hlc1swXSA6IGV2dDtcblxuICAgIHZhciBuZWFyZXN0ID0gX2RldGVjdE5lYXJlc3RFbXB0eVNvcnRhYmxlKGV2dC5jbGllbnRYLCBldnQuY2xpZW50WSk7XG5cbiAgICBpZiAobmVhcmVzdCkge1xuICAgICAgLy8gQ3JlYXRlIGltaXRhdGlvbiBldmVudFxuICAgICAgdmFyIGV2ZW50ID0ge307XG5cbiAgICAgIGZvciAodmFyIGkgaW4gZXZ0KSB7XG4gICAgICAgIGlmIChldnQuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICBldmVudFtpXSA9IGV2dFtpXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBldmVudC50YXJnZXQgPSBldmVudC5yb290RWwgPSBuZWFyZXN0O1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQgPSB2b2lkIDA7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24gPSB2b2lkIDA7XG5cbiAgICAgIG5lYXJlc3RbZXhwYW5kb10uX29uRHJhZ092ZXIoZXZlbnQpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIF9jaGVja091dHNpZGVUYXJnZXRFbCA9IGZ1bmN0aW9uIF9jaGVja091dHNpZGVUYXJnZXRFbChldnQpIHtcbiAgaWYgKGRyYWdFbCkge1xuICAgIGRyYWdFbC5wYXJlbnROb2RlW2V4cGFuZG9dLl9pc091dHNpZGVUaGlzRWwoZXZ0LnRhcmdldCk7XG4gIH1cbn07XG4vKipcbiAqIEBjbGFzcyAgU29ydGFibGVcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSAgZWxcbiAqIEBwYXJhbSAge09iamVjdH0gICAgICAgW29wdGlvbnNdXG4gKi9cblxuXG5mdW5jdGlvbiBTb3J0YWJsZShlbCwgb3B0aW9ucykge1xuICBpZiAoIShlbCAmJiBlbC5ub2RlVHlwZSAmJiBlbC5ub2RlVHlwZSA9PT0gMSkpIHtcbiAgICB0aHJvdyBcIlNvcnRhYmxlOiBgZWxgIG11c3QgYmUgYW4gSFRNTEVsZW1lbnQsIG5vdCBcIi5jb25jYXQoe30udG9TdHJpbmcuY2FsbChlbCkpO1xuICB9XG5cbiAgdGhpcy5lbCA9IGVsOyAvLyByb290IGVsZW1lbnRcblxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zID0gX2V4dGVuZHMoe30sIG9wdGlvbnMpOyAvLyBFeHBvcnQgaW5zdGFuY2VcblxuICBlbFtleHBhbmRvXSA9IHRoaXM7XG4gIHZhciBkZWZhdWx0cyA9IHtcbiAgICBncm91cDogbnVsbCxcbiAgICBzb3J0OiB0cnVlLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBzdG9yZTogbnVsbCxcbiAgICBoYW5kbGU6IG51bGwsXG4gICAgZHJhZ2dhYmxlOiAvXlt1b11sJC9pLnRlc3QoZWwubm9kZU5hbWUpID8gJz5saScgOiAnPionLFxuICAgIHN3YXBUaHJlc2hvbGQ6IDEsXG4gICAgLy8gcGVyY2VudGFnZTsgMCA8PSB4IDw9IDFcbiAgICBpbnZlcnRTd2FwOiBmYWxzZSxcbiAgICAvLyBpbnZlcnQgYWx3YXlzXG4gICAgaW52ZXJ0ZWRTd2FwVGhyZXNob2xkOiBudWxsLFxuICAgIC8vIHdpbGwgYmUgc2V0IHRvIHNhbWUgYXMgc3dhcFRocmVzaG9sZCBpZiBkZWZhdWx0XG4gICAgcmVtb3ZlQ2xvbmVPbkhpZGU6IHRydWUsXG4gICAgZGlyZWN0aW9uOiBmdW5jdGlvbiBkaXJlY3Rpb24oKSB7XG4gICAgICByZXR1cm4gX2RldGVjdERpcmVjdGlvbihlbCwgdGhpcy5vcHRpb25zKTtcbiAgICB9LFxuICAgIGdob3N0Q2xhc3M6ICdzb3J0YWJsZS1naG9zdCcsXG4gICAgY2hvc2VuQ2xhc3M6ICdzb3J0YWJsZS1jaG9zZW4nLFxuICAgIGRyYWdDbGFzczogJ3NvcnRhYmxlLWRyYWcnLFxuICAgIGlnbm9yZTogJ2EsIGltZycsXG4gICAgZmlsdGVyOiBudWxsLFxuICAgIHByZXZlbnRPbkZpbHRlcjogdHJ1ZSxcbiAgICBhbmltYXRpb246IDAsXG4gICAgZWFzaW5nOiBudWxsLFxuICAgIHNldERhdGE6IGZ1bmN0aW9uIHNldERhdGEoZGF0YVRyYW5zZmVyLCBkcmFnRWwpIHtcbiAgICAgIGRhdGFUcmFuc2Zlci5zZXREYXRhKCdUZXh0JywgZHJhZ0VsLnRleHRDb250ZW50KTtcbiAgICB9LFxuICAgIGRyb3BCdWJibGU6IGZhbHNlLFxuICAgIGRyYWdvdmVyQnViYmxlOiBmYWxzZSxcbiAgICBkYXRhSWRBdHRyOiAnZGF0YS1pZCcsXG4gICAgZGVsYXk6IDAsXG4gICAgZGVsYXlPblRvdWNoT25seTogZmFsc2UsXG4gICAgdG91Y2hTdGFydFRocmVzaG9sZDogKE51bWJlci5wYXJzZUludCA/IE51bWJlciA6IHdpbmRvdykucGFyc2VJbnQod2luZG93LmRldmljZVBpeGVsUmF0aW8sIDEwKSB8fCAxLFxuICAgIGZvcmNlRmFsbGJhY2s6IGZhbHNlLFxuICAgIGZhbGxiYWNrQ2xhc3M6ICdzb3J0YWJsZS1mYWxsYmFjaycsXG4gICAgZmFsbGJhY2tPbkJvZHk6IGZhbHNlLFxuICAgIGZhbGxiYWNrVG9sZXJhbmNlOiAwLFxuICAgIGZhbGxiYWNrT2Zmc2V0OiB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH0sXG4gICAgc3VwcG9ydFBvaW50ZXI6IFNvcnRhYmxlLnN1cHBvcnRQb2ludGVyICE9PSBmYWxzZSAmJiAnUG9pbnRlckV2ZW50JyBpbiB3aW5kb3cgJiYgIVNhZmFyaSxcbiAgICBlbXB0eUluc2VydFRocmVzaG9sZDogNVxuICB9O1xuICBQbHVnaW5NYW5hZ2VyLmluaXRpYWxpemVQbHVnaW5zKHRoaXMsIGVsLCBkZWZhdWx0cyk7IC8vIFNldCBkZWZhdWx0IG9wdGlvbnNcblxuICBmb3IgKHZhciBuYW1lIGluIGRlZmF1bHRzKSB7XG4gICAgIShuYW1lIGluIG9wdGlvbnMpICYmIChvcHRpb25zW25hbWVdID0gZGVmYXVsdHNbbmFtZV0pO1xuICB9XG5cbiAgX3ByZXBhcmVHcm91cChvcHRpb25zKTsgLy8gQmluZCBhbGwgcHJpdmF0ZSBtZXRob2RzXG5cblxuICBmb3IgKHZhciBmbiBpbiB0aGlzKSB7XG4gICAgaWYgKGZuLmNoYXJBdCgwKSA9PT0gJ18nICYmIHR5cGVvZiB0aGlzW2ZuXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpc1tmbl0gPSB0aGlzW2ZuXS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgfSAvLyBTZXR1cCBkcmFnIG1vZGVcblxuXG4gIHRoaXMubmF0aXZlRHJhZ2dhYmxlID0gb3B0aW9ucy5mb3JjZUZhbGxiYWNrID8gZmFsc2UgOiBzdXBwb3J0RHJhZ2dhYmxlO1xuXG4gIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgIC8vIFRvdWNoIHN0YXJ0IHRocmVzaG9sZCBjYW5ub3QgYmUgZ3JlYXRlciB0aGFuIHRoZSBuYXRpdmUgZHJhZ3N0YXJ0IHRocmVzaG9sZFxuICAgIHRoaXMub3B0aW9ucy50b3VjaFN0YXJ0VGhyZXNob2xkID0gMTtcbiAgfSAvLyBCaW5kIGV2ZW50c1xuXG5cbiAgaWYgKG9wdGlvbnMuc3VwcG9ydFBvaW50ZXIpIHtcbiAgICBvbihlbCwgJ3BvaW50ZXJkb3duJywgdGhpcy5fb25UYXBTdGFydCk7XG4gIH0gZWxzZSB7XG4gICAgb24oZWwsICdtb3VzZWRvd24nLCB0aGlzLl9vblRhcFN0YXJ0KTtcbiAgICBvbihlbCwgJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRhcFN0YXJ0KTtcbiAgfVxuXG4gIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgIG9uKGVsLCAnZHJhZ292ZXInLCB0aGlzKTtcbiAgICBvbihlbCwgJ2RyYWdlbnRlcicsIHRoaXMpO1xuICB9XG5cbiAgc29ydGFibGVzLnB1c2godGhpcy5lbCk7IC8vIFJlc3RvcmUgc29ydGluZ1xuXG4gIG9wdGlvbnMuc3RvcmUgJiYgb3B0aW9ucy5zdG9yZS5nZXQgJiYgdGhpcy5zb3J0KG9wdGlvbnMuc3RvcmUuZ2V0KHRoaXMpIHx8IFtdKTsgLy8gQWRkIGFuaW1hdGlvbiBzdGF0ZSBtYW5hZ2VyXG5cbiAgX2V4dGVuZHModGhpcywgQW5pbWF0aW9uU3RhdGVNYW5hZ2VyKCkpO1xufVxuXG5Tb3J0YWJsZS5wcm90b3R5cGUgPVxuLyoqIEBsZW5kcyBTb3J0YWJsZS5wcm90b3R5cGUgKi9cbntcbiAgY29uc3RydWN0b3I6IFNvcnRhYmxlLFxuICBfaXNPdXRzaWRlVGhpc0VsOiBmdW5jdGlvbiBfaXNPdXRzaWRlVGhpc0VsKHRhcmdldCkge1xuICAgIGlmICghdGhpcy5lbC5jb250YWlucyh0YXJnZXQpICYmIHRhcmdldCAhPT0gdGhpcy5lbCkge1xuICAgICAgbGFzdFRhcmdldCA9IG51bGw7XG4gICAgfVxuICB9LFxuICBfZ2V0RGlyZWN0aW9uOiBmdW5jdGlvbiBfZ2V0RGlyZWN0aW9uKGV2dCwgdGFyZ2V0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uID09PSAnZnVuY3Rpb24nID8gdGhpcy5vcHRpb25zLmRpcmVjdGlvbi5jYWxsKHRoaXMsIGV2dCwgdGFyZ2V0LCBkcmFnRWwpIDogdGhpcy5vcHRpb25zLmRpcmVjdGlvbjtcbiAgfSxcbiAgX29uVGFwU3RhcnQ6IGZ1bmN0aW9uIF9vblRhcFN0YXJ0KFxuICAvKiogRXZlbnR8VG91Y2hFdmVudCAqL1xuICBldnQpIHtcbiAgICBpZiAoIWV2dC5jYW5jZWxhYmxlKSByZXR1cm47XG5cbiAgICB2YXIgX3RoaXMgPSB0aGlzLFxuICAgICAgICBlbCA9IHRoaXMuZWwsXG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIHByZXZlbnRPbkZpbHRlciA9IG9wdGlvbnMucHJldmVudE9uRmlsdGVyLFxuICAgICAgICB0eXBlID0gZXZ0LnR5cGUsXG4gICAgICAgIHRvdWNoID0gZXZ0LnRvdWNoZXMgJiYgZXZ0LnRvdWNoZXNbMF0gfHwgZXZ0LnBvaW50ZXJUeXBlICYmIGV2dC5wb2ludGVyVHlwZSA9PT0gJ3RvdWNoJyAmJiBldnQsXG4gICAgICAgIHRhcmdldCA9ICh0b3VjaCB8fCBldnQpLnRhcmdldCxcbiAgICAgICAgb3JpZ2luYWxUYXJnZXQgPSBldnQudGFyZ2V0LnNoYWRvd1Jvb3QgJiYgKGV2dC5wYXRoICYmIGV2dC5wYXRoWzBdIHx8IGV2dC5jb21wb3NlZFBhdGggJiYgZXZ0LmNvbXBvc2VkUGF0aCgpWzBdKSB8fCB0YXJnZXQsXG4gICAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuXG4gICAgX3NhdmVJbnB1dENoZWNrZWRTdGF0ZShlbCk7IC8vIERvbid0IHRyaWdnZXIgc3RhcnQgZXZlbnQgd2hlbiBhbiBlbGVtZW50IGlzIGJlZW4gZHJhZ2dlZCwgb3RoZXJ3aXNlIHRoZSBldnQub2xkaW5kZXggYWx3YXlzIHdyb25nIHdoZW4gc2V0IG9wdGlvbi5ncm91cC5cblxuXG4gICAgaWYgKGRyYWdFbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICgvbW91c2Vkb3dufHBvaW50ZXJkb3duLy50ZXN0KHR5cGUpICYmIGV2dC5idXR0b24gIT09IDAgfHwgb3B0aW9ucy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuOyAvLyBvbmx5IGxlZnQgYnV0dG9uIGFuZCBlbmFibGVkXG4gICAgfSAvLyBjYW5jZWwgZG5kIGlmIG9yaWdpbmFsIHRhcmdldCBpcyBjb250ZW50IGVkaXRhYmxlXG5cblxuICAgIGlmIChvcmlnaW5hbFRhcmdldC5pc0NvbnRlbnRFZGl0YWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gU2FmYXJpIGlnbm9yZXMgZnVydGhlciBldmVudCBoYW5kbGluZyBhZnRlciBtb3VzZWRvd25cblxuXG4gICAgaWYgKCF0aGlzLm5hdGl2ZURyYWdnYWJsZSAmJiBTYWZhcmkgJiYgdGFyZ2V0ICYmIHRhcmdldC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTRUxFQ1QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGFyZ2V0ID0gY2xvc2VzdCh0YXJnZXQsIG9wdGlvbnMuZHJhZ2dhYmxlLCBlbCwgZmFsc2UpO1xuXG4gICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuYW5pbWF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobGFzdERvd25FbCA9PT0gdGFyZ2V0KSB7XG4gICAgICAvLyBJZ25vcmluZyBkdXBsaWNhdGUgYGRvd25gXG4gICAgICByZXR1cm47XG4gICAgfSAvLyBHZXQgdGhlIGluZGV4IG9mIHRoZSBkcmFnZ2VkIGVsZW1lbnQgd2l0aGluIGl0cyBwYXJlbnRcblxuXG4gICAgb2xkSW5kZXggPSBpbmRleCh0YXJnZXQpO1xuICAgIG9sZERyYWdnYWJsZUluZGV4ID0gaW5kZXgodGFyZ2V0LCBvcHRpb25zLmRyYWdnYWJsZSk7IC8vIENoZWNrIGZpbHRlclxuXG4gICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChmaWx0ZXIuY2FsbCh0aGlzLCBldnQsIHRhcmdldCwgdGhpcykpIHtcbiAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgIHNvcnRhYmxlOiBfdGhpcyxcbiAgICAgICAgICByb290RWw6IG9yaWdpbmFsVGFyZ2V0LFxuICAgICAgICAgIG5hbWU6ICdmaWx0ZXInLFxuICAgICAgICAgIHRhcmdldEVsOiB0YXJnZXQsXG4gICAgICAgICAgdG9FbDogZWwsXG4gICAgICAgICAgZnJvbUVsOiBlbFxuICAgICAgICB9KTtcblxuICAgICAgICBwbHVnaW5FdmVudCgnZmlsdGVyJywgX3RoaXMsIHtcbiAgICAgICAgICBldnQ6IGV2dFxuICAgICAgICB9KTtcbiAgICAgICAgcHJldmVudE9uRmlsdGVyICYmIGV2dC5jYW5jZWxhYmxlICYmIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm47IC8vIGNhbmNlbCBkbmRcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZpbHRlcikge1xuICAgICAgZmlsdGVyID0gZmlsdGVyLnNwbGl0KCcsJykuc29tZShmdW5jdGlvbiAoY3JpdGVyaWEpIHtcbiAgICAgICAgY3JpdGVyaWEgPSBjbG9zZXN0KG9yaWdpbmFsVGFyZ2V0LCBjcml0ZXJpYS50cmltKCksIGVsLCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKGNyaXRlcmlhKSB7XG4gICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgc29ydGFibGU6IF90aGlzLFxuICAgICAgICAgICAgcm9vdEVsOiBjcml0ZXJpYSxcbiAgICAgICAgICAgIG5hbWU6ICdmaWx0ZXInLFxuICAgICAgICAgICAgdGFyZ2V0RWw6IHRhcmdldCxcbiAgICAgICAgICAgIGZyb21FbDogZWwsXG4gICAgICAgICAgICB0b0VsOiBlbFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcGx1Z2luRXZlbnQoJ2ZpbHRlcicsIF90aGlzLCB7XG4gICAgICAgICAgICBldnQ6IGV2dFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICBwcmV2ZW50T25GaWx0ZXIgJiYgZXZ0LmNhbmNlbGFibGUgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjsgLy8gY2FuY2VsIGRuZFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmhhbmRsZSAmJiAhY2xvc2VzdChvcmlnaW5hbFRhcmdldCwgb3B0aW9ucy5oYW5kbGUsIGVsLCBmYWxzZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFByZXBhcmUgYGRyYWdzdGFydGBcblxuXG4gICAgdGhpcy5fcHJlcGFyZURyYWdTdGFydChldnQsIHRvdWNoLCB0YXJnZXQpO1xuICB9LFxuICBfcHJlcGFyZURyYWdTdGFydDogZnVuY3Rpb24gX3ByZXBhcmVEcmFnU3RhcnQoXG4gIC8qKiBFdmVudCAqL1xuICBldnQsXG4gIC8qKiBUb3VjaCAqL1xuICB0b3VjaCxcbiAgLyoqIEhUTUxFbGVtZW50ICovXG4gIHRhcmdldCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICAgIGVsID0gX3RoaXMuZWwsXG4gICAgICAgIG9wdGlvbnMgPSBfdGhpcy5vcHRpb25zLFxuICAgICAgICBvd25lckRvY3VtZW50ID0gZWwub3duZXJEb2N1bWVudCxcbiAgICAgICAgZHJhZ1N0YXJ0Rm47XG5cbiAgICBpZiAodGFyZ2V0ICYmICFkcmFnRWwgJiYgdGFyZ2V0LnBhcmVudE5vZGUgPT09IGVsKSB7XG4gICAgICB2YXIgZHJhZ1JlY3QgPSBnZXRSZWN0KHRhcmdldCk7XG4gICAgICByb290RWwgPSBlbDtcbiAgICAgIGRyYWdFbCA9IHRhcmdldDtcbiAgICAgIHBhcmVudEVsID0gZHJhZ0VsLnBhcmVudE5vZGU7XG4gICAgICBuZXh0RWwgPSBkcmFnRWwubmV4dFNpYmxpbmc7XG4gICAgICBsYXN0RG93bkVsID0gdGFyZ2V0O1xuICAgICAgYWN0aXZlR3JvdXAgPSBvcHRpb25zLmdyb3VwO1xuICAgICAgU29ydGFibGUuZHJhZ2dlZCA9IGRyYWdFbDtcbiAgICAgIHRhcEV2dCA9IHtcbiAgICAgICAgdGFyZ2V0OiBkcmFnRWwsXG4gICAgICAgIGNsaWVudFg6ICh0b3VjaCB8fCBldnQpLmNsaWVudFgsXG4gICAgICAgIGNsaWVudFk6ICh0b3VjaCB8fCBldnQpLmNsaWVudFlcbiAgICAgIH07XG4gICAgICB0YXBEaXN0YW5jZUxlZnQgPSB0YXBFdnQuY2xpZW50WCAtIGRyYWdSZWN0LmxlZnQ7XG4gICAgICB0YXBEaXN0YW5jZVRvcCA9IHRhcEV2dC5jbGllbnRZIC0gZHJhZ1JlY3QudG9wO1xuICAgICAgdGhpcy5fbGFzdFggPSAodG91Y2ggfHwgZXZ0KS5jbGllbnRYO1xuICAgICAgdGhpcy5fbGFzdFkgPSAodG91Y2ggfHwgZXZ0KS5jbGllbnRZO1xuICAgICAgZHJhZ0VsLnN0eWxlWyd3aWxsLWNoYW5nZSddID0gJ2FsbCc7XG5cbiAgICAgIGRyYWdTdGFydEZuID0gZnVuY3Rpb24gZHJhZ1N0YXJ0Rm4oKSB7XG4gICAgICAgIHBsdWdpbkV2ZW50KCdkZWxheUVuZGVkJywgX3RoaXMsIHtcbiAgICAgICAgICBldnQ6IGV2dFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkge1xuICAgICAgICAgIF90aGlzLl9vbkRyb3AoKTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBEZWxheWVkIGRyYWcgaGFzIGJlZW4gdHJpZ2dlcmVkXG4gICAgICAgIC8vIHdlIGNhbiByZS1lbmFibGUgdGhlIGV2ZW50czogdG91Y2htb3ZlL21vdXNlbW92ZVxuXG5cbiAgICAgICAgX3RoaXMuX2Rpc2FibGVEZWxheWVkRHJhZ0V2ZW50cygpO1xuXG4gICAgICAgIGlmICghRmlyZUZveCAmJiBfdGhpcy5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgICAgICBkcmFnRWwuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgICAgfSAvLyBCaW5kIHRoZSBldmVudHM6IGRyYWdzdGFydC9kcmFnZW5kXG5cblxuICAgICAgICBfdGhpcy5fdHJpZ2dlckRyYWdTdGFydChldnQsIHRvdWNoKTsgLy8gRHJhZyBzdGFydCBldmVudFxuXG5cbiAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgIHNvcnRhYmxlOiBfdGhpcyxcbiAgICAgICAgICBuYW1lOiAnY2hvb3NlJyxcbiAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgfSk7IC8vIENob3NlbiBpdGVtXG5cblxuICAgICAgICB0b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuY2hvc2VuQ2xhc3MsIHRydWUpO1xuICAgICAgfTsgLy8gRGlzYWJsZSBcImRyYWdnYWJsZVwiXG5cblxuICAgICAgb3B0aW9ucy5pZ25vcmUuc3BsaXQoJywnKS5mb3JFYWNoKGZ1bmN0aW9uIChjcml0ZXJpYSkge1xuICAgICAgICBmaW5kKGRyYWdFbCwgY3JpdGVyaWEudHJpbSgpLCBfZGlzYWJsZURyYWdnYWJsZSk7XG4gICAgICB9KTtcbiAgICAgIG9uKG93bmVyRG9jdW1lbnQsICdkcmFnb3ZlcicsIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KTtcbiAgICAgIG9uKG93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCk7XG4gICAgICBvbihvd25lckRvY3VtZW50LCAndG91Y2htb3ZlJywgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQpO1xuICAgICAgb24ob3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCBfdGhpcy5fb25Ecm9wKTtcbiAgICAgIG9uKG93bmVyRG9jdW1lbnQsICd0b3VjaGVuZCcsIF90aGlzLl9vbkRyb3ApO1xuICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3RvdWNoY2FuY2VsJywgX3RoaXMuX29uRHJvcCk7IC8vIE1ha2UgZHJhZ0VsIGRyYWdnYWJsZSAobXVzdCBiZSBiZWZvcmUgZGVsYXkgZm9yIEZpcmVGb3gpXG5cbiAgICAgIGlmIChGaXJlRm94ICYmIHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy50b3VjaFN0YXJ0VGhyZXNob2xkID0gNDtcbiAgICAgICAgZHJhZ0VsLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHBsdWdpbkV2ZW50KCdkZWxheVN0YXJ0JywgdGhpcywge1xuICAgICAgICBldnQ6IGV2dFxuICAgICAgfSk7IC8vIERlbGF5IGlzIGltcG9zc2libGUgZm9yIG5hdGl2ZSBEbkQgaW4gRWRnZSBvciBJRVxuXG4gICAgICBpZiAob3B0aW9ucy5kZWxheSAmJiAoIW9wdGlvbnMuZGVsYXlPblRvdWNoT25seSB8fCB0b3VjaCkgJiYgKCF0aGlzLm5hdGl2ZURyYWdnYWJsZSB8fCAhKEVkZ2UgfHwgSUUxMU9yTGVzcykpKSB7XG4gICAgICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSB7XG4gICAgICAgICAgdGhpcy5fb25Ecm9wKCk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gSWYgdGhlIHVzZXIgbW92ZXMgdGhlIHBvaW50ZXIgb3IgbGV0IGdvIHRoZSBjbGljayBvciB0b3VjaFxuICAgICAgICAvLyBiZWZvcmUgdGhlIGRlbGF5IGhhcyBiZWVuIHJlYWNoZWQ6XG4gICAgICAgIC8vIGRpc2FibGUgdGhlIGRlbGF5ZWQgZHJhZ1xuXG5cbiAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCBfdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKTtcbiAgICAgICAgb24ob3duZXJEb2N1bWVudCwgJ3RvdWNoZW5kJywgX3RoaXMuX2Rpc2FibGVEZWxheWVkRHJhZyk7XG4gICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICd0b3VjaGNhbmNlbCcsIF90aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgICAgICBvbihvd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgX3RoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XG4gICAgICAgIG9uKG93bmVyRG9jdW1lbnQsICd0b3VjaG1vdmUnLCBfdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcbiAgICAgICAgb3B0aW9ucy5zdXBwb3J0UG9pbnRlciAmJiBvbihvd25lckRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCBfdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcbiAgICAgICAgX3RoaXMuX2RyYWdTdGFydFRpbWVyID0gc2V0VGltZW91dChkcmFnU3RhcnRGbiwgb3B0aW9ucy5kZWxheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmFnU3RhcnRGbigpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcjogZnVuY3Rpb24gX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcihcbiAgLyoqIFRvdWNoRXZlbnR8UG9pbnRlckV2ZW50ICoqL1xuICBlKSB7XG4gICAgdmFyIHRvdWNoID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdIDogZTtcblxuICAgIGlmIChNYXRoLm1heChNYXRoLmFicyh0b3VjaC5jbGllbnRYIC0gdGhpcy5fbGFzdFgpLCBNYXRoLmFicyh0b3VjaC5jbGllbnRZIC0gdGhpcy5fbGFzdFkpKSA+PSBNYXRoLmZsb29yKHRoaXMub3B0aW9ucy50b3VjaFN0YXJ0VGhyZXNob2xkIC8gKHRoaXMubmF0aXZlRHJhZ2dhYmxlICYmIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpKSkge1xuICAgICAgdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKCk7XG4gICAgfVxuICB9LFxuICBfZGlzYWJsZURlbGF5ZWREcmFnOiBmdW5jdGlvbiBfZGlzYWJsZURlbGF5ZWREcmFnKCkge1xuICAgIGRyYWdFbCAmJiBfZGlzYWJsZURyYWdnYWJsZShkcmFnRWwpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9kcmFnU3RhcnRUaW1lcik7XG5cbiAgICB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWdFdmVudHMoKTtcbiAgfSxcbiAgX2Rpc2FibGVEZWxheWVkRHJhZ0V2ZW50czogZnVuY3Rpb24gX2Rpc2FibGVEZWxheWVkRHJhZ0V2ZW50cygpIHtcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IHRoaXMuZWwub3duZXJEb2N1bWVudDtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAndG91Y2hlbmQnLCB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAndG91Y2hjYW5jZWwnLCB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3RvdWNobW92ZScsIHRoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XG4gICAgb2ZmKG93bmVyRG9jdW1lbnQsICdwb2ludGVybW92ZScsIHRoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcik7XG4gIH0sXG4gIF90cmlnZ2VyRHJhZ1N0YXJ0OiBmdW5jdGlvbiBfdHJpZ2dlckRyYWdTdGFydChcbiAgLyoqIEV2ZW50ICovXG4gIGV2dCxcbiAgLyoqIFRvdWNoICovXG4gIHRvdWNoKSB7XG4gICAgdG91Y2ggPSB0b3VjaCB8fCBldnQucG9pbnRlclR5cGUgPT0gJ3RvdWNoJyAmJiBldnQ7XG5cbiAgICBpZiAoIXRoaXMubmF0aXZlRHJhZ2dhYmxlIHx8IHRvdWNoKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN1cHBvcnRQb2ludGVyKSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRvdWNoKSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb24oZG9jdW1lbnQsICdtb3VzZW1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uKGRyYWdFbCwgJ2RyYWdlbmQnLCB0aGlzKTtcbiAgICAgIG9uKHJvb3RFbCwgJ2RyYWdzdGFydCcsIHRoaXMuX29uRHJhZ1N0YXJ0KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgaWYgKGRvY3VtZW50LnNlbGVjdGlvbikge1xuICAgICAgICAvLyBUaW1lb3V0IG5lY2Nlc3NhcnkgZm9yIElFOVxuICAgICAgICBfbmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGRvY3VtZW50LnNlbGVjdGlvbi5lbXB0eSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHt9XG4gIH0sXG4gIF9kcmFnU3RhcnRlZDogZnVuY3Rpb24gX2RyYWdTdGFydGVkKGZhbGxiYWNrLCBldnQpIHtcblxuICAgIGF3YWl0aW5nRHJhZ1N0YXJ0ZWQgPSBmYWxzZTtcblxuICAgIGlmIChyb290RWwgJiYgZHJhZ0VsKSB7XG4gICAgICBwbHVnaW5FdmVudCgnZHJhZ1N0YXJ0ZWQnLCB0aGlzLCB7XG4gICAgICAgIGV2dDogZXZ0XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICAgIG9uKGRvY3VtZW50LCAnZHJhZ292ZXInLCBfY2hlY2tPdXRzaWRlVGFyZ2V0RWwpO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9uczsgLy8gQXBwbHkgZWZmZWN0XG5cbiAgICAgICFmYWxsYmFjayAmJiB0b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuZHJhZ0NsYXNzLCBmYWxzZSk7XG4gICAgICB0b2dnbGVDbGFzcyhkcmFnRWwsIG9wdGlvbnMuZ2hvc3RDbGFzcywgdHJ1ZSk7XG4gICAgICBTb3J0YWJsZS5hY3RpdmUgPSB0aGlzO1xuICAgICAgZmFsbGJhY2sgJiYgdGhpcy5fYXBwZW5kR2hvc3QoKTsgLy8gRHJhZyBzdGFydCBldmVudFxuXG4gICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgIHNvcnRhYmxlOiB0aGlzLFxuICAgICAgICBuYW1lOiAnc3RhcnQnLFxuICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9udWxsaW5nKCk7XG4gICAgfVxuICB9LFxuICBfZW11bGF0ZURyYWdPdmVyOiBmdW5jdGlvbiBfZW11bGF0ZURyYWdPdmVyKCkge1xuICAgIGlmICh0b3VjaEV2dCkge1xuICAgICAgdGhpcy5fbGFzdFggPSB0b3VjaEV2dC5jbGllbnRYO1xuICAgICAgdGhpcy5fbGFzdFkgPSB0b3VjaEV2dC5jbGllbnRZO1xuXG4gICAgICBfaGlkZUdob3N0Rm9yVGFyZ2V0KCk7XG5cbiAgICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHRvdWNoRXZ0LmNsaWVudFgsIHRvdWNoRXZ0LmNsaWVudFkpO1xuICAgICAgdmFyIHBhcmVudCA9IHRhcmdldDtcblxuICAgICAgd2hpbGUgKHRhcmdldCAmJiB0YXJnZXQuc2hhZG93Um9vdCkge1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXQuc2hhZG93Um9vdC5lbGVtZW50RnJvbVBvaW50KHRvdWNoRXZ0LmNsaWVudFgsIHRvdWNoRXZ0LmNsaWVudFkpO1xuICAgICAgICBpZiAodGFyZ2V0ID09PSBwYXJlbnQpIGJyZWFrO1xuICAgICAgICBwYXJlbnQgPSB0YXJnZXQ7XG4gICAgICB9XG5cbiAgICAgIGRyYWdFbC5wYXJlbnROb2RlW2V4cGFuZG9dLl9pc091dHNpZGVUaGlzRWwodGFyZ2V0KTtcblxuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBkbyB7XG4gICAgICAgICAgaWYgKHBhcmVudFtleHBhbmRvXSkge1xuICAgICAgICAgICAgdmFyIGluc2VydGVkID0gdm9pZCAwO1xuICAgICAgICAgICAgaW5zZXJ0ZWQgPSBwYXJlbnRbZXhwYW5kb10uX29uRHJhZ092ZXIoe1xuICAgICAgICAgICAgICBjbGllbnRYOiB0b3VjaEV2dC5jbGllbnRYLFxuICAgICAgICAgICAgICBjbGllbnRZOiB0b3VjaEV2dC5jbGllbnRZLFxuICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgcm9vdEVsOiBwYXJlbnRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoaW5zZXJ0ZWQgJiYgIXRoaXMub3B0aW9ucy5kcmFnb3ZlckJ1YmJsZSkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0YXJnZXQgPSBwYXJlbnQ7IC8vIHN0b3JlIGxhc3QgZWxlbWVudFxuICAgICAgICB9XG4gICAgICAgIC8qIGpzaGludCBib3NzOnRydWUgKi9cbiAgICAgICAgd2hpbGUgKHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlKTtcbiAgICAgIH1cblxuICAgICAgX3VuaGlkZUdob3N0Rm9yVGFyZ2V0KCk7XG4gICAgfVxuICB9LFxuICBfb25Ub3VjaE1vdmU6IGZ1bmN0aW9uIF9vblRvdWNoTW92ZShcbiAgLyoqVG91Y2hFdmVudCovXG4gIGV2dCkge1xuICAgIGlmICh0YXBFdnQpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIGZhbGxiYWNrVG9sZXJhbmNlID0gb3B0aW9ucy5mYWxsYmFja1RvbGVyYW5jZSxcbiAgICAgICAgICBmYWxsYmFja09mZnNldCA9IG9wdGlvbnMuZmFsbGJhY2tPZmZzZXQsXG4gICAgICAgICAgdG91Y2ggPSBldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0LFxuICAgICAgICAgIGdob3N0TWF0cml4ID0gZ2hvc3RFbCAmJiBtYXRyaXgoZ2hvc3RFbCwgdHJ1ZSksXG4gICAgICAgICAgc2NhbGVYID0gZ2hvc3RFbCAmJiBnaG9zdE1hdHJpeCAmJiBnaG9zdE1hdHJpeC5hLFxuICAgICAgICAgIHNjYWxlWSA9IGdob3N0RWwgJiYgZ2hvc3RNYXRyaXggJiYgZ2hvc3RNYXRyaXguZCxcbiAgICAgICAgICByZWxhdGl2ZVNjcm9sbE9mZnNldCA9IFBvc2l0aW9uR2hvc3RBYnNvbHV0ZWx5ICYmIGdob3N0UmVsYXRpdmVQYXJlbnQgJiYgZ2V0UmVsYXRpdmVTY3JvbGxPZmZzZXQoZ2hvc3RSZWxhdGl2ZVBhcmVudCksXG4gICAgICAgICAgZHggPSAodG91Y2guY2xpZW50WCAtIHRhcEV2dC5jbGllbnRYICsgZmFsbGJhY2tPZmZzZXQueCkgLyAoc2NhbGVYIHx8IDEpICsgKHJlbGF0aXZlU2Nyb2xsT2Zmc2V0ID8gcmVsYXRpdmVTY3JvbGxPZmZzZXRbMF0gLSBnaG9zdFJlbGF0aXZlUGFyZW50SW5pdGlhbFNjcm9sbFswXSA6IDApIC8gKHNjYWxlWCB8fCAxKSxcbiAgICAgICAgICBkeSA9ICh0b3VjaC5jbGllbnRZIC0gdGFwRXZ0LmNsaWVudFkgKyBmYWxsYmFja09mZnNldC55KSAvIChzY2FsZVkgfHwgMSkgKyAocmVsYXRpdmVTY3JvbGxPZmZzZXQgPyByZWxhdGl2ZVNjcm9sbE9mZnNldFsxXSAtIGdob3N0UmVsYXRpdmVQYXJlbnRJbml0aWFsU2Nyb2xsWzFdIDogMCkgLyAoc2NhbGVZIHx8IDEpOyAvLyBvbmx5IHNldCB0aGUgc3RhdHVzIHRvIGRyYWdnaW5nLCB3aGVuIHdlIGFyZSBhY3R1YWxseSBkcmFnZ2luZ1xuXG4gICAgICBpZiAoIVNvcnRhYmxlLmFjdGl2ZSAmJiAhYXdhaXRpbmdEcmFnU3RhcnRlZCkge1xuICAgICAgICBpZiAoZmFsbGJhY2tUb2xlcmFuY2UgJiYgTWF0aC5tYXgoTWF0aC5hYnModG91Y2guY2xpZW50WCAtIHRoaXMuX2xhc3RYKSwgTWF0aC5hYnModG91Y2guY2xpZW50WSAtIHRoaXMuX2xhc3RZKSkgPCBmYWxsYmFja1RvbGVyYW5jZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX29uRHJhZ1N0YXJ0KGV2dCwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChnaG9zdEVsKSB7XG4gICAgICAgIGlmIChnaG9zdE1hdHJpeCkge1xuICAgICAgICAgIGdob3N0TWF0cml4LmUgKz0gZHggLSAobGFzdER4IHx8IDApO1xuICAgICAgICAgIGdob3N0TWF0cml4LmYgKz0gZHkgLSAobGFzdER5IHx8IDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdob3N0TWF0cml4ID0ge1xuICAgICAgICAgICAgYTogMSxcbiAgICAgICAgICAgIGI6IDAsXG4gICAgICAgICAgICBjOiAwLFxuICAgICAgICAgICAgZDogMSxcbiAgICAgICAgICAgIGU6IGR4LFxuICAgICAgICAgICAgZjogZHlcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNzc01hdHJpeCA9IFwibWF0cml4KFwiLmNvbmNhdChnaG9zdE1hdHJpeC5hLCBcIixcIikuY29uY2F0KGdob3N0TWF0cml4LmIsIFwiLFwiKS5jb25jYXQoZ2hvc3RNYXRyaXguYywgXCIsXCIpLmNvbmNhdChnaG9zdE1hdHJpeC5kLCBcIixcIikuY29uY2F0KGdob3N0TWF0cml4LmUsIFwiLFwiKS5jb25jYXQoZ2hvc3RNYXRyaXguZiwgXCIpXCIpO1xuICAgICAgICBjc3MoZ2hvc3RFbCwgJ3dlYmtpdFRyYW5zZm9ybScsIGNzc01hdHJpeCk7XG4gICAgICAgIGNzcyhnaG9zdEVsLCAnbW96VHJhbnNmb3JtJywgY3NzTWF0cml4KTtcbiAgICAgICAgY3NzKGdob3N0RWwsICdtc1RyYW5zZm9ybScsIGNzc01hdHJpeCk7XG4gICAgICAgIGNzcyhnaG9zdEVsLCAndHJhbnNmb3JtJywgY3NzTWF0cml4KTtcbiAgICAgICAgbGFzdER4ID0gZHg7XG4gICAgICAgIGxhc3REeSA9IGR5O1xuICAgICAgICB0b3VjaEV2dCA9IHRvdWNoO1xuICAgICAgfVxuXG4gICAgICBldnQuY2FuY2VsYWJsZSAmJiBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0sXG4gIF9hcHBlbmRHaG9zdDogZnVuY3Rpb24gX2FwcGVuZEdob3N0KCkge1xuICAgIC8vIEJ1ZyBpZiB1c2luZyBzY2FsZSgpOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNjM3MDU4XG4gICAgLy8gTm90IGJlaW5nIGFkanVzdGVkIGZvclxuICAgIGlmICghZ2hvc3RFbCkge1xuICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5mYWxsYmFja09uQm9keSA/IGRvY3VtZW50LmJvZHkgOiByb290RWwsXG4gICAgICAgICAgcmVjdCA9IGdldFJlY3QoZHJhZ0VsLCB0cnVlLCBQb3NpdGlvbkdob3N0QWJzb2x1dGVseSwgdHJ1ZSwgY29udGFpbmVyKSxcbiAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zOyAvLyBQb3NpdGlvbiBhYnNvbHV0ZWx5XG5cbiAgICAgIGlmIChQb3NpdGlvbkdob3N0QWJzb2x1dGVseSkge1xuICAgICAgICAvLyBHZXQgcmVsYXRpdmVseSBwb3NpdGlvbmVkIHBhcmVudFxuICAgICAgICBnaG9zdFJlbGF0aXZlUGFyZW50ID0gY29udGFpbmVyO1xuXG4gICAgICAgIHdoaWxlIChjc3MoZ2hvc3RSZWxhdGl2ZVBhcmVudCwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnICYmIGNzcyhnaG9zdFJlbGF0aXZlUGFyZW50LCAndHJhbnNmb3JtJykgPT09ICdub25lJyAmJiBnaG9zdFJlbGF0aXZlUGFyZW50ICE9PSBkb2N1bWVudCkge1xuICAgICAgICAgIGdob3N0UmVsYXRpdmVQYXJlbnQgPSBnaG9zdFJlbGF0aXZlUGFyZW50LnBhcmVudE5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ2hvc3RSZWxhdGl2ZVBhcmVudCAhPT0gZG9jdW1lbnQuYm9keSAmJiBnaG9zdFJlbGF0aXZlUGFyZW50ICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICBpZiAoZ2hvc3RSZWxhdGl2ZVBhcmVudCA9PT0gZG9jdW1lbnQpIGdob3N0UmVsYXRpdmVQYXJlbnQgPSBnZXRXaW5kb3dTY3JvbGxpbmdFbGVtZW50KCk7XG4gICAgICAgICAgcmVjdC50b3AgKz0gZ2hvc3RSZWxhdGl2ZVBhcmVudC5zY3JvbGxUb3A7XG4gICAgICAgICAgcmVjdC5sZWZ0ICs9IGdob3N0UmVsYXRpdmVQYXJlbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnaG9zdFJlbGF0aXZlUGFyZW50ID0gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2hvc3RSZWxhdGl2ZVBhcmVudEluaXRpYWxTY3JvbGwgPSBnZXRSZWxhdGl2ZVNjcm9sbE9mZnNldChnaG9zdFJlbGF0aXZlUGFyZW50KTtcbiAgICAgIH1cblxuICAgICAgZ2hvc3RFbCA9IGRyYWdFbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICB0b2dnbGVDbGFzcyhnaG9zdEVsLCBvcHRpb25zLmdob3N0Q2xhc3MsIGZhbHNlKTtcbiAgICAgIHRvZ2dsZUNsYXNzKGdob3N0RWwsIG9wdGlvbnMuZmFsbGJhY2tDbGFzcywgdHJ1ZSk7XG4gICAgICB0b2dnbGVDbGFzcyhnaG9zdEVsLCBvcHRpb25zLmRyYWdDbGFzcywgdHJ1ZSk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ3RyYW5zaXRpb24nLCAnJyk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ3RyYW5zZm9ybScsICcnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAnYm94LXNpemluZycsICdib3JkZXItYm94Jyk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ21hcmdpbicsIDApO1xuICAgICAgY3NzKGdob3N0RWwsICd0b3AnLCByZWN0LnRvcCk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ2xlZnQnLCByZWN0LmxlZnQpO1xuICAgICAgY3NzKGdob3N0RWwsICd3aWR0aCcsIHJlY3Qud2lkdGgpO1xuICAgICAgY3NzKGdob3N0RWwsICdoZWlnaHQnLCByZWN0LmhlaWdodCk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ29wYWNpdHknLCAnMC44Jyk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ3Bvc2l0aW9uJywgUG9zaXRpb25HaG9zdEFic29sdXRlbHkgPyAnYWJzb2x1dGUnIDogJ2ZpeGVkJyk7XG4gICAgICBjc3MoZ2hvc3RFbCwgJ3pJbmRleCcsICcxMDAwMDAnKTtcbiAgICAgIGNzcyhnaG9zdEVsLCAncG9pbnRlckV2ZW50cycsICdub25lJyk7XG4gICAgICBTb3J0YWJsZS5naG9zdCA9IGdob3N0RWw7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2hvc3RFbCk7IC8vIFNldCB0cmFuc2Zvcm0tb3JpZ2luXG5cbiAgICAgIGNzcyhnaG9zdEVsLCAndHJhbnNmb3JtLW9yaWdpbicsIHRhcERpc3RhbmNlTGVmdCAvIHBhcnNlSW50KGdob3N0RWwuc3R5bGUud2lkdGgpICogMTAwICsgJyUgJyArIHRhcERpc3RhbmNlVG9wIC8gcGFyc2VJbnQoZ2hvc3RFbC5zdHlsZS5oZWlnaHQpICogMTAwICsgJyUnKTtcbiAgICB9XG4gIH0sXG4gIF9vbkRyYWdTdGFydDogZnVuY3Rpb24gX29uRHJhZ1N0YXJ0KFxuICAvKipFdmVudCovXG4gIGV2dCxcbiAgLyoqYm9vbGVhbiovXG4gIGZhbGxiYWNrKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBkYXRhVHJhbnNmZXIgPSBldnQuZGF0YVRyYW5zZmVyO1xuICAgIHZhciBvcHRpb25zID0gX3RoaXMub3B0aW9ucztcbiAgICBwbHVnaW5FdmVudCgnZHJhZ1N0YXJ0JywgdGhpcywge1xuICAgICAgZXZ0OiBldnRcbiAgICB9KTtcblxuICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSB7XG4gICAgICB0aGlzLl9vbkRyb3AoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBsdWdpbkV2ZW50KCdzZXR1cENsb25lJywgdGhpcyk7XG5cbiAgICBpZiAoIVNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHtcbiAgICAgIGNsb25lRWwgPSBjbG9uZShkcmFnRWwpO1xuICAgICAgY2xvbmVFbC5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgIGNsb25lRWwuc3R5bGVbJ3dpbGwtY2hhbmdlJ10gPSAnJztcblxuICAgICAgdGhpcy5faGlkZUNsb25lKCk7XG5cbiAgICAgIHRvZ2dsZUNsYXNzKGNsb25lRWwsIHRoaXMub3B0aW9ucy5jaG9zZW5DbGFzcywgZmFsc2UpO1xuICAgICAgU29ydGFibGUuY2xvbmUgPSBjbG9uZUVsO1xuICAgIH0gLy8gIzExNDM6IElGcmFtZSBzdXBwb3J0IHdvcmthcm91bmRcblxuXG4gICAgX3RoaXMuY2xvbmVJZCA9IF9uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBwbHVnaW5FdmVudCgnY2xvbmUnLCBfdGhpcyk7XG4gICAgICBpZiAoU29ydGFibGUuZXZlbnRDYW5jZWxlZCkgcmV0dXJuO1xuXG4gICAgICBpZiAoIV90aGlzLm9wdGlvbnMucmVtb3ZlQ2xvbmVPbkhpZGUpIHtcbiAgICAgICAgcm9vdEVsLmluc2VydEJlZm9yZShjbG9uZUVsLCBkcmFnRWwpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5faGlkZUNsb25lKCk7XG5cbiAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgc29ydGFibGU6IF90aGlzLFxuICAgICAgICBuYW1lOiAnY2xvbmUnXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAhZmFsbGJhY2sgJiYgdG9nZ2xlQ2xhc3MoZHJhZ0VsLCBvcHRpb25zLmRyYWdDbGFzcywgdHJ1ZSk7IC8vIFNldCBwcm9wZXIgZHJvcCBldmVudHNcblxuICAgIGlmIChmYWxsYmFjaykge1xuICAgICAgaWdub3JlTmV4dENsaWNrID0gdHJ1ZTtcbiAgICAgIF90aGlzLl9sb29wSWQgPSBzZXRJbnRlcnZhbChfdGhpcy5fZW11bGF0ZURyYWdPdmVyLCA1MCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFVuZG8gd2hhdCB3YXMgc2V0IGluIF9wcmVwYXJlRHJhZ1N0YXJ0IGJlZm9yZSBkcmFnIHN0YXJ0ZWRcbiAgICAgIG9mZihkb2N1bWVudCwgJ21vdXNldXAnLCBfdGhpcy5fb25Ecm9wKTtcbiAgICAgIG9mZihkb2N1bWVudCwgJ3RvdWNoZW5kJywgX3RoaXMuX29uRHJvcCk7XG4gICAgICBvZmYoZG9jdW1lbnQsICd0b3VjaGNhbmNlbCcsIF90aGlzLl9vbkRyb3ApO1xuXG4gICAgICBpZiAoZGF0YVRyYW5zZmVyKSB7XG4gICAgICAgIGRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xuICAgICAgICBvcHRpb25zLnNldERhdGEgJiYgb3B0aW9ucy5zZXREYXRhLmNhbGwoX3RoaXMsIGRhdGFUcmFuc2ZlciwgZHJhZ0VsKTtcbiAgICAgIH1cblxuICAgICAgb24oZG9jdW1lbnQsICdkcm9wJywgX3RoaXMpOyAvLyAjMTI3NiBmaXg6XG5cbiAgICAgIGNzcyhkcmFnRWwsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWigwKScpO1xuICAgIH1cblxuICAgIGF3YWl0aW5nRHJhZ1N0YXJ0ZWQgPSB0cnVlO1xuICAgIF90aGlzLl9kcmFnU3RhcnRJZCA9IF9uZXh0VGljayhfdGhpcy5fZHJhZ1N0YXJ0ZWQuYmluZChfdGhpcywgZmFsbGJhY2ssIGV2dCkpO1xuICAgIG9uKGRvY3VtZW50LCAnc2VsZWN0c3RhcnQnLCBfdGhpcyk7XG4gICAgbW92ZWQgPSB0cnVlO1xuXG4gICAgaWYgKFNhZmFyaSkge1xuICAgICAgY3NzKGRvY3VtZW50LmJvZHksICd1c2VyLXNlbGVjdCcsICdub25lJyk7XG4gICAgfVxuICB9LFxuICAvLyBSZXR1cm5zIHRydWUgLSBpZiBubyBmdXJ0aGVyIGFjdGlvbiBpcyBuZWVkZWQgKGVpdGhlciBpbnNlcnRlZCBvciBhbm90aGVyIGNvbmRpdGlvbilcbiAgX29uRHJhZ092ZXI6IGZ1bmN0aW9uIF9vbkRyYWdPdmVyKFxuICAvKipFdmVudCovXG4gIGV2dCkge1xuICAgIHZhciBlbCA9IHRoaXMuZWwsXG4gICAgICAgIHRhcmdldCA9IGV2dC50YXJnZXQsXG4gICAgICAgIGRyYWdSZWN0LFxuICAgICAgICB0YXJnZXRSZWN0LFxuICAgICAgICByZXZlcnQsXG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIGdyb3VwID0gb3B0aW9ucy5ncm91cCxcbiAgICAgICAgYWN0aXZlU29ydGFibGUgPSBTb3J0YWJsZS5hY3RpdmUsXG4gICAgICAgIGlzT3duZXIgPSBhY3RpdmVHcm91cCA9PT0gZ3JvdXAsXG4gICAgICAgIGNhblNvcnQgPSBvcHRpb25zLnNvcnQsXG4gICAgICAgIGZyb21Tb3J0YWJsZSA9IHB1dFNvcnRhYmxlIHx8IGFjdGl2ZVNvcnRhYmxlLFxuICAgICAgICB2ZXJ0aWNhbCxcbiAgICAgICAgX3RoaXMgPSB0aGlzLFxuICAgICAgICBjb21wbGV0ZWRGaXJlZCA9IGZhbHNlO1xuXG4gICAgaWYgKF9zaWxlbnQpIHJldHVybjtcblxuICAgIGZ1bmN0aW9uIGRyYWdPdmVyRXZlbnQobmFtZSwgZXh0cmEpIHtcbiAgICAgIHBsdWdpbkV2ZW50KG5hbWUsIF90aGlzLCBfb2JqZWN0U3ByZWFkMih7XG4gICAgICAgIGV2dDogZXZ0LFxuICAgICAgICBpc093bmVyOiBpc093bmVyLFxuICAgICAgICBheGlzOiB2ZXJ0aWNhbCA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgIHJldmVydDogcmV2ZXJ0LFxuICAgICAgICBkcmFnUmVjdDogZHJhZ1JlY3QsXG4gICAgICAgIHRhcmdldFJlY3Q6IHRhcmdldFJlY3QsXG4gICAgICAgIGNhblNvcnQ6IGNhblNvcnQsXG4gICAgICAgIGZyb21Tb3J0YWJsZTogZnJvbVNvcnRhYmxlLFxuICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgY29tcGxldGVkOiBjb21wbGV0ZWQsXG4gICAgICAgIG9uTW92ZTogZnVuY3Rpb24gb25Nb3ZlKHRhcmdldCwgYWZ0ZXIpIHtcbiAgICAgICAgICByZXR1cm4gX29uTW92ZShyb290RWwsIGVsLCBkcmFnRWwsIGRyYWdSZWN0LCB0YXJnZXQsIGdldFJlY3QodGFyZ2V0KSwgZXZ0LCBhZnRlcik7XG4gICAgICAgIH0sXG4gICAgICAgIGNoYW5nZWQ6IGNoYW5nZWRcbiAgICAgIH0sIGV4dHJhKSk7XG4gICAgfSAvLyBDYXB0dXJlIGFuaW1hdGlvbiBzdGF0ZVxuXG5cbiAgICBmdW5jdGlvbiBjYXB0dXJlKCkge1xuICAgICAgZHJhZ092ZXJFdmVudCgnZHJhZ092ZXJBbmltYXRpb25DYXB0dXJlJyk7XG5cbiAgICAgIF90aGlzLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuXG4gICAgICBpZiAoX3RoaXMgIT09IGZyb21Tb3J0YWJsZSkge1xuICAgICAgICBmcm9tU29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgICB9XG4gICAgfSAvLyBSZXR1cm4gaW52b2NhdGlvbiB3aGVuIGRyYWdFbCBpcyBpbnNlcnRlZCAob3IgY29tcGxldGVkKVxuXG5cbiAgICBmdW5jdGlvbiBjb21wbGV0ZWQoaW5zZXJ0aW9uKSB7XG4gICAgICBkcmFnT3ZlckV2ZW50KCdkcmFnT3ZlckNvbXBsZXRlZCcsIHtcbiAgICAgICAgaW5zZXJ0aW9uOiBpbnNlcnRpb25cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaW5zZXJ0aW9uKSB7XG4gICAgICAgIC8vIENsb25lcyBtdXN0IGJlIGhpZGRlbiBiZWZvcmUgZm9sZGluZyBhbmltYXRpb24gdG8gY2FwdHVyZSBkcmFnUmVjdEFic29sdXRlIHByb3Blcmx5XG4gICAgICAgIGlmIChpc093bmVyKSB7XG4gICAgICAgICAgYWN0aXZlU29ydGFibGUuX2hpZGVDbG9uZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFjdGl2ZVNvcnRhYmxlLl9zaG93Q2xvbmUoX3RoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90aGlzICE9PSBmcm9tU29ydGFibGUpIHtcbiAgICAgICAgICAvLyBTZXQgZ2hvc3QgY2xhc3MgdG8gbmV3IHNvcnRhYmxlJ3MgZ2hvc3QgY2xhc3NcbiAgICAgICAgICB0b2dnbGVDbGFzcyhkcmFnRWwsIHB1dFNvcnRhYmxlID8gcHV0U29ydGFibGUub3B0aW9ucy5naG9zdENsYXNzIDogYWN0aXZlU29ydGFibGUub3B0aW9ucy5naG9zdENsYXNzLCBmYWxzZSk7XG4gICAgICAgICAgdG9nZ2xlQ2xhc3MoZHJhZ0VsLCBvcHRpb25zLmdob3N0Q2xhc3MsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHB1dFNvcnRhYmxlICE9PSBfdGhpcyAmJiBfdGhpcyAhPT0gU29ydGFibGUuYWN0aXZlKSB7XG4gICAgICAgICAgcHV0U29ydGFibGUgPSBfdGhpcztcbiAgICAgICAgfSBlbHNlIGlmIChfdGhpcyA9PT0gU29ydGFibGUuYWN0aXZlICYmIHB1dFNvcnRhYmxlKSB7XG4gICAgICAgICAgcHV0U29ydGFibGUgPSBudWxsO1xuICAgICAgICB9IC8vIEFuaW1hdGlvblxuXG5cbiAgICAgICAgaWYgKGZyb21Tb3J0YWJsZSA9PT0gX3RoaXMpIHtcbiAgICAgICAgICBfdGhpcy5faWdub3JlV2hpbGVBbmltYXRpbmcgPSB0YXJnZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5hbmltYXRlQWxsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBkcmFnT3ZlckV2ZW50KCdkcmFnT3ZlckFuaW1hdGlvbkNvbXBsZXRlJyk7XG4gICAgICAgICAgX3RoaXMuX2lnbm9yZVdoaWxlQW5pbWF0aW5nID0gbnVsbDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKF90aGlzICE9PSBmcm9tU29ydGFibGUpIHtcbiAgICAgICAgICBmcm9tU29ydGFibGUuYW5pbWF0ZUFsbCgpO1xuICAgICAgICAgIGZyb21Tb3J0YWJsZS5faWdub3JlV2hpbGVBbmltYXRpbmcgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9IC8vIE51bGwgbGFzdFRhcmdldCBpZiBpdCBpcyBub3QgaW5zaWRlIGEgcHJldmlvdXNseSBzd2FwcGVkIGVsZW1lbnRcblxuXG4gICAgICBpZiAodGFyZ2V0ID09PSBkcmFnRWwgJiYgIWRyYWdFbC5hbmltYXRlZCB8fCB0YXJnZXQgPT09IGVsICYmICF0YXJnZXQuYW5pbWF0ZWQpIHtcbiAgICAgICAgbGFzdFRhcmdldCA9IG51bGw7XG4gICAgICB9IC8vIG5vIGJ1YmJsaW5nIGFuZCBub3QgZmFsbGJhY2tcblxuXG4gICAgICBpZiAoIW9wdGlvbnMuZHJhZ292ZXJCdWJibGUgJiYgIWV2dC5yb290RWwgJiYgdGFyZ2V0ICE9PSBkb2N1bWVudCkge1xuICAgICAgICBkcmFnRWwucGFyZW50Tm9kZVtleHBhbmRvXS5faXNPdXRzaWRlVGhpc0VsKGV2dC50YXJnZXQpOyAvLyBEbyBub3QgZGV0ZWN0IGZvciBlbXB0eSBpbnNlcnQgaWYgYWxyZWFkeSBpbnNlcnRlZFxuXG5cbiAgICAgICAgIWluc2VydGlvbiAmJiBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudChldnQpO1xuICAgICAgfVxuXG4gICAgICAhb3B0aW9ucy5kcmFnb3ZlckJ1YmJsZSAmJiBldnQuc3RvcFByb3BhZ2F0aW9uICYmIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJldHVybiBjb21wbGV0ZWRGaXJlZCA9IHRydWU7XG4gICAgfSAvLyBDYWxsIHdoZW4gZHJhZ0VsIGhhcyBiZWVuIGluc2VydGVkXG5cblxuICAgIGZ1bmN0aW9uIGNoYW5nZWQoKSB7XG4gICAgICBuZXdJbmRleCA9IGluZGV4KGRyYWdFbCk7XG4gICAgICBuZXdEcmFnZ2FibGVJbmRleCA9IGluZGV4KGRyYWdFbCwgb3B0aW9ucy5kcmFnZ2FibGUpO1xuXG4gICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgIHNvcnRhYmxlOiBfdGhpcyxcbiAgICAgICAgbmFtZTogJ2NoYW5nZScsXG4gICAgICAgIHRvRWw6IGVsLFxuICAgICAgICBuZXdJbmRleDogbmV3SW5kZXgsXG4gICAgICAgIG5ld0RyYWdnYWJsZUluZGV4OiBuZXdEcmFnZ2FibGVJbmRleCxcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoZXZ0LnByZXZlbnREZWZhdWx0ICE9PSB2b2lkIDApIHtcbiAgICAgIGV2dC5jYW5jZWxhYmxlICYmIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHRhcmdldCA9IGNsb3Nlc3QodGFyZ2V0LCBvcHRpb25zLmRyYWdnYWJsZSwgZWwsIHRydWUpO1xuICAgIGRyYWdPdmVyRXZlbnQoJ2RyYWdPdmVyJyk7XG4gICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHJldHVybiBjb21wbGV0ZWRGaXJlZDtcblxuICAgIGlmIChkcmFnRWwuY29udGFpbnMoZXZ0LnRhcmdldCkgfHwgdGFyZ2V0LmFuaW1hdGVkICYmIHRhcmdldC5hbmltYXRpbmdYICYmIHRhcmdldC5hbmltYXRpbmdZIHx8IF90aGlzLl9pZ25vcmVXaGlsZUFuaW1hdGluZyA9PT0gdGFyZ2V0KSB7XG4gICAgICByZXR1cm4gY29tcGxldGVkKGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZ25vcmVOZXh0Q2xpY2sgPSBmYWxzZTtcblxuICAgIGlmIChhY3RpdmVTb3J0YWJsZSAmJiAhb3B0aW9ucy5kaXNhYmxlZCAmJiAoaXNPd25lciA/IGNhblNvcnQgfHwgKHJldmVydCA9IHBhcmVudEVsICE9PSByb290RWwpIC8vIFJldmVydGluZyBpdGVtIGludG8gdGhlIG9yaWdpbmFsIGxpc3RcbiAgICA6IHB1dFNvcnRhYmxlID09PSB0aGlzIHx8ICh0aGlzLmxhc3RQdXRNb2RlID0gYWN0aXZlR3JvdXAuY2hlY2tQdWxsKHRoaXMsIGFjdGl2ZVNvcnRhYmxlLCBkcmFnRWwsIGV2dCkpICYmIGdyb3VwLmNoZWNrUHV0KHRoaXMsIGFjdGl2ZVNvcnRhYmxlLCBkcmFnRWwsIGV2dCkpKSB7XG4gICAgICB2ZXJ0aWNhbCA9IHRoaXMuX2dldERpcmVjdGlvbihldnQsIHRhcmdldCkgPT09ICd2ZXJ0aWNhbCc7XG4gICAgICBkcmFnUmVjdCA9IGdldFJlY3QoZHJhZ0VsKTtcbiAgICAgIGRyYWdPdmVyRXZlbnQoJ2RyYWdPdmVyVmFsaWQnKTtcbiAgICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSByZXR1cm4gY29tcGxldGVkRmlyZWQ7XG5cbiAgICAgIGlmIChyZXZlcnQpIHtcbiAgICAgICAgcGFyZW50RWwgPSByb290RWw7IC8vIGFjdHVhbGl6YXRpb25cblxuICAgICAgICBjYXB0dXJlKCk7XG5cbiAgICAgICAgdGhpcy5faGlkZUNsb25lKCk7XG5cbiAgICAgICAgZHJhZ092ZXJFdmVudCgncmV2ZXJ0Jyk7XG5cbiAgICAgICAgaWYgKCFTb3J0YWJsZS5ldmVudENhbmNlbGVkKSB7XG4gICAgICAgICAgaWYgKG5leHRFbCkge1xuICAgICAgICAgICAgcm9vdEVsLmluc2VydEJlZm9yZShkcmFnRWwsIG5leHRFbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJvb3RFbC5hcHBlbmRDaGlsZChkcmFnRWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wbGV0ZWQodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBlbExhc3RDaGlsZCA9IGxhc3RDaGlsZChlbCwgb3B0aW9ucy5kcmFnZ2FibGUpO1xuXG4gICAgICBpZiAoIWVsTGFzdENoaWxkIHx8IF9naG9zdElzTGFzdChldnQsIHZlcnRpY2FsLCB0aGlzKSAmJiAhZWxMYXN0Q2hpbGQuYW5pbWF0ZWQpIHtcbiAgICAgICAgLy8gSW5zZXJ0IHRvIGVuZCBvZiBsaXN0XG4gICAgICAgIC8vIElmIGFscmVhZHkgYXQgZW5kIG9mIGxpc3Q6IERvIG5vdCBpbnNlcnRcbiAgICAgICAgaWYgKGVsTGFzdENoaWxkID09PSBkcmFnRWwpIHtcbiAgICAgICAgICByZXR1cm4gY29tcGxldGVkKGZhbHNlKTtcbiAgICAgICAgfSAvLyBpZiB0aGVyZSBpcyBhIGxhc3QgZWxlbWVudCwgaXQgaXMgdGhlIHRhcmdldFxuXG5cbiAgICAgICAgaWYgKGVsTGFzdENoaWxkICYmIGVsID09PSBldnQudGFyZ2V0KSB7XG4gICAgICAgICAgdGFyZ2V0ID0gZWxMYXN0Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgdGFyZ2V0UmVjdCA9IGdldFJlY3QodGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfb25Nb3ZlKHJvb3RFbCwgZWwsIGRyYWdFbCwgZHJhZ1JlY3QsIHRhcmdldCwgdGFyZ2V0UmVjdCwgZXZ0LCAhIXRhcmdldCkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgY2FwdHVyZSgpO1xuICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGRyYWdFbCk7XG4gICAgICAgICAgcGFyZW50RWwgPSBlbDsgLy8gYWN0dWFsaXphdGlvblxuXG4gICAgICAgICAgY2hhbmdlZCgpO1xuICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZWxMYXN0Q2hpbGQgJiYgX2dob3N0SXNGaXJzdChldnQsIHZlcnRpY2FsLCB0aGlzKSkge1xuICAgICAgICAvLyBJbnNlcnQgdG8gc3RhcnQgb2YgbGlzdFxuICAgICAgICB2YXIgZmlyc3RDaGlsZCA9IGdldENoaWxkKGVsLCAwLCBvcHRpb25zLCB0cnVlKTtcblxuICAgICAgICBpZiAoZmlyc3RDaGlsZCA9PT0gZHJhZ0VsKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbXBsZXRlZChmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXQgPSBmaXJzdENoaWxkO1xuICAgICAgICB0YXJnZXRSZWN0ID0gZ2V0UmVjdCh0YXJnZXQpO1xuXG4gICAgICAgIGlmIChfb25Nb3ZlKHJvb3RFbCwgZWwsIGRyYWdFbCwgZHJhZ1JlY3QsIHRhcmdldCwgdGFyZ2V0UmVjdCwgZXZ0LCBmYWxzZSkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgY2FwdHVyZSgpO1xuICAgICAgICAgIGVsLmluc2VydEJlZm9yZShkcmFnRWwsIGZpcnN0Q2hpbGQpO1xuICAgICAgICAgIHBhcmVudEVsID0gZWw7IC8vIGFjdHVhbGl6YXRpb25cblxuICAgICAgICAgIGNoYW5nZWQoKTtcbiAgICAgICAgICByZXR1cm4gY29tcGxldGVkKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldC5wYXJlbnROb2RlID09PSBlbCkge1xuICAgICAgICB0YXJnZXRSZWN0ID0gZ2V0UmVjdCh0YXJnZXQpO1xuICAgICAgICB2YXIgZGlyZWN0aW9uID0gMCxcbiAgICAgICAgICAgIHRhcmdldEJlZm9yZUZpcnN0U3dhcCxcbiAgICAgICAgICAgIGRpZmZlcmVudExldmVsID0gZHJhZ0VsLnBhcmVudE5vZGUgIT09IGVsLFxuICAgICAgICAgICAgZGlmZmVyZW50Um93Q29sID0gIV9kcmFnRWxJblJvd0NvbHVtbihkcmFnRWwuYW5pbWF0ZWQgJiYgZHJhZ0VsLnRvUmVjdCB8fCBkcmFnUmVjdCwgdGFyZ2V0LmFuaW1hdGVkICYmIHRhcmdldC50b1JlY3QgfHwgdGFyZ2V0UmVjdCwgdmVydGljYWwpLFxuICAgICAgICAgICAgc2lkZTEgPSB2ZXJ0aWNhbCA/ICd0b3AnIDogJ2xlZnQnLFxuICAgICAgICAgICAgc2Nyb2xsZWRQYXN0VG9wID0gaXNTY3JvbGxlZFBhc3QodGFyZ2V0LCAndG9wJywgJ3RvcCcpIHx8IGlzU2Nyb2xsZWRQYXN0KGRyYWdFbCwgJ3RvcCcsICd0b3AnKSxcbiAgICAgICAgICAgIHNjcm9sbEJlZm9yZSA9IHNjcm9sbGVkUGFzdFRvcCA/IHNjcm9sbGVkUGFzdFRvcC5zY3JvbGxUb3AgOiB2b2lkIDA7XG5cbiAgICAgICAgaWYgKGxhc3RUYXJnZXQgIT09IHRhcmdldCkge1xuICAgICAgICAgIHRhcmdldEJlZm9yZUZpcnN0U3dhcCA9IHRhcmdldFJlY3Rbc2lkZTFdO1xuICAgICAgICAgIHBhc3RGaXJzdEludmVydFRocmVzaCA9IGZhbHNlO1xuICAgICAgICAgIGlzQ2lyY3Vtc3RhbnRpYWxJbnZlcnQgPSAhZGlmZmVyZW50Um93Q29sICYmIG9wdGlvbnMuaW52ZXJ0U3dhcCB8fCBkaWZmZXJlbnRMZXZlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpcmVjdGlvbiA9IF9nZXRTd2FwRGlyZWN0aW9uKGV2dCwgdGFyZ2V0LCB0YXJnZXRSZWN0LCB2ZXJ0aWNhbCwgZGlmZmVyZW50Um93Q29sID8gMSA6IG9wdGlvbnMuc3dhcFRocmVzaG9sZCwgb3B0aW9ucy5pbnZlcnRlZFN3YXBUaHJlc2hvbGQgPT0gbnVsbCA/IG9wdGlvbnMuc3dhcFRocmVzaG9sZCA6IG9wdGlvbnMuaW52ZXJ0ZWRTd2FwVGhyZXNob2xkLCBpc0NpcmN1bXN0YW50aWFsSW52ZXJ0LCBsYXN0VGFyZ2V0ID09PSB0YXJnZXQpO1xuICAgICAgICB2YXIgc2libGluZztcblxuICAgICAgICBpZiAoZGlyZWN0aW9uICE9PSAwKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgdGFyZ2V0IGlzIGJlc2lkZSBkcmFnRWwgaW4gcmVzcGVjdGl2ZSBkaXJlY3Rpb24gKGlnbm9yaW5nIGhpZGRlbiBlbGVtZW50cylcbiAgICAgICAgICB2YXIgZHJhZ0luZGV4ID0gaW5kZXgoZHJhZ0VsKTtcblxuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgIGRyYWdJbmRleCAtPSBkaXJlY3Rpb247XG4gICAgICAgICAgICBzaWJsaW5nID0gcGFyZW50RWwuY2hpbGRyZW5bZHJhZ0luZGV4XTtcbiAgICAgICAgICB9IHdoaWxlIChzaWJsaW5nICYmIChjc3Moc2libGluZywgJ2Rpc3BsYXknKSA9PT0gJ25vbmUnIHx8IHNpYmxpbmcgPT09IGdob3N0RWwpKTtcbiAgICAgICAgfSAvLyBJZiBkcmFnRWwgaXMgYWxyZWFkeSBiZXNpZGUgdGFyZ2V0OiBEbyBub3QgaW5zZXJ0XG5cblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAwIHx8IHNpYmxpbmcgPT09IHRhcmdldCkge1xuICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFzdFRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgbGFzdERpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgdmFyIG5leHRTaWJsaW5nID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZyxcbiAgICAgICAgICAgIGFmdGVyID0gZmFsc2U7XG4gICAgICAgIGFmdGVyID0gZGlyZWN0aW9uID09PSAxO1xuXG4gICAgICAgIHZhciBtb3ZlVmVjdG9yID0gX29uTW92ZShyb290RWwsIGVsLCBkcmFnRWwsIGRyYWdSZWN0LCB0YXJnZXQsIHRhcmdldFJlY3QsIGV2dCwgYWZ0ZXIpO1xuXG4gICAgICAgIGlmIChtb3ZlVmVjdG9yICE9PSBmYWxzZSkge1xuICAgICAgICAgIGlmIChtb3ZlVmVjdG9yID09PSAxIHx8IG1vdmVWZWN0b3IgPT09IC0xKSB7XG4gICAgICAgICAgICBhZnRlciA9IG1vdmVWZWN0b3IgPT09IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3NpbGVudCA9IHRydWU7XG4gICAgICAgICAgc2V0VGltZW91dChfdW5zaWxlbnQsIDMwKTtcbiAgICAgICAgICBjYXB0dXJlKCk7XG5cbiAgICAgICAgICBpZiAoYWZ0ZXIgJiYgIW5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChkcmFnRWwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZHJhZ0VsLCBhZnRlciA/IG5leHRTaWJsaW5nIDogdGFyZ2V0KTtcbiAgICAgICAgICB9IC8vIFVuZG8gY2hyb21lJ3Mgc2Nyb2xsIGFkanVzdG1lbnQgKGhhcyBubyBlZmZlY3Qgb24gb3RoZXIgYnJvd3NlcnMpXG5cblxuICAgICAgICAgIGlmIChzY3JvbGxlZFBhc3RUb3ApIHtcbiAgICAgICAgICAgIHNjcm9sbEJ5KHNjcm9sbGVkUGFzdFRvcCwgMCwgc2Nyb2xsQmVmb3JlIC0gc2Nyb2xsZWRQYXN0VG9wLnNjcm9sbFRvcCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGFyZW50RWwgPSBkcmFnRWwucGFyZW50Tm9kZTsgLy8gYWN0dWFsaXphdGlvblxuICAgICAgICAgIC8vIG11c3QgYmUgZG9uZSBiZWZvcmUgYW5pbWF0aW9uXG5cbiAgICAgICAgICBpZiAodGFyZ2V0QmVmb3JlRmlyc3RTd2FwICE9PSB1bmRlZmluZWQgJiYgIWlzQ2lyY3Vtc3RhbnRpYWxJbnZlcnQpIHtcbiAgICAgICAgICAgIHRhcmdldE1vdmVEaXN0YW5jZSA9IE1hdGguYWJzKHRhcmdldEJlZm9yZUZpcnN0U3dhcCAtIGdldFJlY3QodGFyZ2V0KVtzaWRlMV0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoYW5nZWQoKTtcbiAgICAgICAgICByZXR1cm4gY29tcGxldGVkKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlbC5jb250YWlucyhkcmFnRWwpKSB7XG4gICAgICAgIHJldHVybiBjb21wbGV0ZWQoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbiAgX2lnbm9yZVdoaWxlQW5pbWF0aW5nOiBudWxsLFxuICBfb2ZmTW92ZUV2ZW50czogZnVuY3Rpb24gX29mZk1vdmVFdmVudHMoKSB7XG4gICAgb2ZmKGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgIG9mZihkb2N1bWVudCwgJ3RvdWNobW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcbiAgICBvZmYoZG9jdW1lbnQsICdwb2ludGVybW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlKTtcbiAgICBvZmYoZG9jdW1lbnQsICdkcmFnb3ZlcicsIG5lYXJlc3RFbXB0eUluc2VydERldGVjdEV2ZW50KTtcbiAgICBvZmYoZG9jdW1lbnQsICdtb3VzZW1vdmUnLCBuZWFyZXN0RW1wdHlJbnNlcnREZXRlY3RFdmVudCk7XG4gICAgb2ZmKGRvY3VtZW50LCAndG91Y2htb3ZlJywgbmVhcmVzdEVtcHR5SW5zZXJ0RGV0ZWN0RXZlbnQpO1xuICB9LFxuICBfb2ZmVXBFdmVudHM6IGZ1bmN0aW9uIF9vZmZVcEV2ZW50cygpIHtcbiAgICB2YXIgb3duZXJEb2N1bWVudCA9IHRoaXMuZWwub3duZXJEb2N1bWVudDtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCB0aGlzLl9vbkRyb3ApO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAndG91Y2hlbmQnLCB0aGlzLl9vbkRyb3ApO1xuICAgIG9mZihvd25lckRvY3VtZW50LCAncG9pbnRlcnVwJywgdGhpcy5fb25Ecm9wKTtcbiAgICBvZmYob3duZXJEb2N1bWVudCwgJ3RvdWNoY2FuY2VsJywgdGhpcy5fb25Ecm9wKTtcbiAgICBvZmYoZG9jdW1lbnQsICdzZWxlY3RzdGFydCcsIHRoaXMpO1xuICB9LFxuICBfb25Ecm9wOiBmdW5jdGlvbiBfb25Ecm9wKFxuICAvKipFdmVudCovXG4gIGV2dCkge1xuICAgIHZhciBlbCA9IHRoaXMuZWwsXG4gICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7IC8vIEdldCB0aGUgaW5kZXggb2YgdGhlIGRyYWdnZWQgZWxlbWVudCB3aXRoaW4gaXRzIHBhcmVudFxuXG4gICAgbmV3SW5kZXggPSBpbmRleChkcmFnRWwpO1xuICAgIG5ld0RyYWdnYWJsZUluZGV4ID0gaW5kZXgoZHJhZ0VsLCBvcHRpb25zLmRyYWdnYWJsZSk7XG4gICAgcGx1Z2luRXZlbnQoJ2Ryb3AnLCB0aGlzLCB7XG4gICAgICBldnQ6IGV2dFxuICAgIH0pO1xuICAgIHBhcmVudEVsID0gZHJhZ0VsICYmIGRyYWdFbC5wYXJlbnROb2RlOyAvLyBHZXQgYWdhaW4gYWZ0ZXIgcGx1Z2luIGV2ZW50XG5cbiAgICBuZXdJbmRleCA9IGluZGV4KGRyYWdFbCk7XG4gICAgbmV3RHJhZ2dhYmxlSW5kZXggPSBpbmRleChkcmFnRWwsIG9wdGlvbnMuZHJhZ2dhYmxlKTtcblxuICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSB7XG4gICAgICB0aGlzLl9udWxsaW5nKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhd2FpdGluZ0RyYWdTdGFydGVkID0gZmFsc2U7XG4gICAgaXNDaXJjdW1zdGFudGlhbEludmVydCA9IGZhbHNlO1xuICAgIHBhc3RGaXJzdEludmVydFRocmVzaCA9IGZhbHNlO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fbG9vcElkKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fZHJhZ1N0YXJ0VGltZXIpO1xuXG4gICAgX2NhbmNlbE5leHRUaWNrKHRoaXMuY2xvbmVJZCk7XG5cbiAgICBfY2FuY2VsTmV4dFRpY2sodGhpcy5fZHJhZ1N0YXJ0SWQpOyAvLyBVbmJpbmQgZXZlbnRzXG5cblxuICAgIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgb2ZmKGRvY3VtZW50LCAnZHJvcCcsIHRoaXMpO1xuICAgICAgb2ZmKGVsLCAnZHJhZ3N0YXJ0JywgdGhpcy5fb25EcmFnU3RhcnQpO1xuICAgIH1cblxuICAgIHRoaXMuX29mZk1vdmVFdmVudHMoKTtcblxuICAgIHRoaXMuX29mZlVwRXZlbnRzKCk7XG5cbiAgICBpZiAoU2FmYXJpKSB7XG4gICAgICBjc3MoZG9jdW1lbnQuYm9keSwgJ3VzZXItc2VsZWN0JywgJycpO1xuICAgIH1cblxuICAgIGNzcyhkcmFnRWwsICd0cmFuc2Zvcm0nLCAnJyk7XG5cbiAgICBpZiAoZXZ0KSB7XG4gICAgICBpZiAobW92ZWQpIHtcbiAgICAgICAgZXZ0LmNhbmNlbGFibGUgJiYgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICFvcHRpb25zLmRyb3BCdWJibGUgJiYgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuXG4gICAgICBnaG9zdEVsICYmIGdob3N0RWwucGFyZW50Tm9kZSAmJiBnaG9zdEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZ2hvc3RFbCk7XG5cbiAgICAgIGlmIChyb290RWwgPT09IHBhcmVudEVsIHx8IHB1dFNvcnRhYmxlICYmIHB1dFNvcnRhYmxlLmxhc3RQdXRNb2RlICE9PSAnY2xvbmUnKSB7XG4gICAgICAgIC8vIFJlbW92ZSBjbG9uZShzKVxuICAgICAgICBjbG9uZUVsICYmIGNsb25lRWwucGFyZW50Tm9kZSAmJiBjbG9uZUVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2xvbmVFbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkcmFnRWwpIHtcbiAgICAgICAgaWYgKHRoaXMubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICAgICAgb2ZmKGRyYWdFbCwgJ2RyYWdlbmQnLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9kaXNhYmxlRHJhZ2dhYmxlKGRyYWdFbCk7XG5cbiAgICAgICAgZHJhZ0VsLnN0eWxlWyd3aWxsLWNoYW5nZSddID0gJyc7IC8vIFJlbW92ZSBjbGFzc2VzXG4gICAgICAgIC8vIGdob3N0Q2xhc3MgaXMgYWRkZWQgaW4gZHJhZ1N0YXJ0ZWRcblxuICAgICAgICBpZiAobW92ZWQgJiYgIWF3YWl0aW5nRHJhZ1N0YXJ0ZWQpIHtcbiAgICAgICAgICB0b2dnbGVDbGFzcyhkcmFnRWwsIHB1dFNvcnRhYmxlID8gcHV0U29ydGFibGUub3B0aW9ucy5naG9zdENsYXNzIDogdGhpcy5vcHRpb25zLmdob3N0Q2xhc3MsIGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCwgdGhpcy5vcHRpb25zLmNob3NlbkNsYXNzLCBmYWxzZSk7IC8vIERyYWcgc3RvcCBldmVudFxuXG4gICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICBuYW1lOiAndW5jaG9vc2UnLFxuICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgIG5ld0luZGV4OiBudWxsLFxuICAgICAgICAgIG5ld0RyYWdnYWJsZUluZGV4OiBudWxsLFxuICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocm9vdEVsICE9PSBwYXJlbnRFbCkge1xuICAgICAgICAgIGlmIChuZXdJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAvLyBBZGQgZXZlbnRcbiAgICAgICAgICAgIF9kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgcm9vdEVsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgbmFtZTogJ2FkZCcsXG4gICAgICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgICBmcm9tRWw6IHJvb3RFbCxcbiAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgICB9KTsgLy8gUmVtb3ZlIGV2ZW50XG5cblxuICAgICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgICAgbmFtZTogJ3JlbW92ZScsXG4gICAgICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICAgIH0pOyAvLyBkcmFnIGZyb20gb25lIGxpc3QgYW5kIGRyb3AgaW50byBhbm90aGVyXG5cblxuICAgICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICByb290RWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgICBuYW1lOiAnc29ydCcsXG4gICAgICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgICBmcm9tRWw6IHJvb3RFbCxcbiAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgICAgbmFtZTogJ3NvcnQnLFxuICAgICAgICAgICAgICB0b0VsOiBwYXJlbnRFbCxcbiAgICAgICAgICAgICAgb3JpZ2luYWxFdmVudDogZXZ0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwdXRTb3J0YWJsZSAmJiBwdXRTb3J0YWJsZS5zYXZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG5ld0luZGV4ICE9PSBvbGRJbmRleCkge1xuICAgICAgICAgICAgaWYgKG5ld0luZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgLy8gZHJhZyAmIGRyb3Agd2l0aGluIHRoZSBzYW1lIGxpc3RcbiAgICAgICAgICAgICAgX2Rpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiB0aGlzLFxuICAgICAgICAgICAgICAgIG5hbWU6ICd1cGRhdGUnLFxuICAgICAgICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgICAgc29ydGFibGU6IHRoaXMsXG4gICAgICAgICAgICAgICAgbmFtZTogJ3NvcnQnLFxuICAgICAgICAgICAgICAgIHRvRWw6IHBhcmVudEVsLFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2dFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoU29ydGFibGUuYWN0aXZlKSB7XG4gICAgICAgICAgLyoganNoaW50IGVxbnVsbDp0cnVlICovXG4gICAgICAgICAgaWYgKG5ld0luZGV4ID09IG51bGwgfHwgbmV3SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBuZXdJbmRleCA9IG9sZEluZGV4O1xuICAgICAgICAgICAgbmV3RHJhZ2dhYmxlSW5kZXggPSBvbGREcmFnZ2FibGVJbmRleDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICBzb3J0YWJsZTogdGhpcyxcbiAgICAgICAgICAgIG5hbWU6ICdlbmQnLFxuICAgICAgICAgICAgdG9FbDogcGFyZW50RWwsXG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldnRcbiAgICAgICAgICB9KTsgLy8gU2F2ZSBzb3J0aW5nXG5cblxuICAgICAgICAgIHRoaXMuc2F2ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fbnVsbGluZygpO1xuICB9LFxuICBfbnVsbGluZzogZnVuY3Rpb24gX251bGxpbmcoKSB7XG4gICAgcGx1Z2luRXZlbnQoJ251bGxpbmcnLCB0aGlzKTtcbiAgICByb290RWwgPSBkcmFnRWwgPSBwYXJlbnRFbCA9IGdob3N0RWwgPSBuZXh0RWwgPSBjbG9uZUVsID0gbGFzdERvd25FbCA9IGNsb25lSGlkZGVuID0gdGFwRXZ0ID0gdG91Y2hFdnQgPSBtb3ZlZCA9IG5ld0luZGV4ID0gbmV3RHJhZ2dhYmxlSW5kZXggPSBvbGRJbmRleCA9IG9sZERyYWdnYWJsZUluZGV4ID0gbGFzdFRhcmdldCA9IGxhc3REaXJlY3Rpb24gPSBwdXRTb3J0YWJsZSA9IGFjdGl2ZUdyb3VwID0gU29ydGFibGUuZHJhZ2dlZCA9IFNvcnRhYmxlLmdob3N0ID0gU29ydGFibGUuY2xvbmUgPSBTb3J0YWJsZS5hY3RpdmUgPSBudWxsO1xuICAgIHNhdmVkSW5wdXRDaGVja2VkLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICBlbC5jaGVja2VkID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBzYXZlZElucHV0Q2hlY2tlZC5sZW5ndGggPSBsYXN0RHggPSBsYXN0RHkgPSAwO1xuICB9LFxuICBoYW5kbGVFdmVudDogZnVuY3Rpb24gaGFuZGxlRXZlbnQoXG4gIC8qKkV2ZW50Ki9cbiAgZXZ0KSB7XG4gICAgc3dpdGNoIChldnQudHlwZSkge1xuICAgICAgY2FzZSAnZHJvcCc6XG4gICAgICBjYXNlICdkcmFnZW5kJzpcbiAgICAgICAgdGhpcy5fb25Ecm9wKGV2dCk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2RyYWdlbnRlcic6XG4gICAgICBjYXNlICdkcmFnb3Zlcic6XG4gICAgICAgIGlmIChkcmFnRWwpIHtcbiAgICAgICAgICB0aGlzLl9vbkRyYWdPdmVyKGV2dCk7XG5cbiAgICAgICAgICBfZ2xvYmFsRHJhZ092ZXIoZXZ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdzZWxlY3RzdGFydCc6XG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlcmlhbGl6ZXMgdGhlIGl0ZW0gaW50byBhbiBhcnJheSBvZiBzdHJpbmcuXG4gICAqIEByZXR1cm5zIHtTdHJpbmdbXX1cbiAgICovXG4gIHRvQXJyYXk6IGZ1bmN0aW9uIHRvQXJyYXkoKSB7XG4gICAgdmFyIG9yZGVyID0gW10sXG4gICAgICAgIGVsLFxuICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZWwuY2hpbGRyZW4sXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBuID0gY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgZm9yICg7IGkgPCBuOyBpKyspIHtcbiAgICAgIGVsID0gY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChjbG9zZXN0KGVsLCBvcHRpb25zLmRyYWdnYWJsZSwgdGhpcy5lbCwgZmFsc2UpKSB7XG4gICAgICAgIG9yZGVyLnB1c2goZWwuZ2V0QXR0cmlidXRlKG9wdGlvbnMuZGF0YUlkQXR0cikgfHwgX2dlbmVyYXRlSWQoZWwpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3JkZXI7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNvcnRzIHRoZSBlbGVtZW50cyBhY2NvcmRpbmcgdG8gdGhlIGFycmF5LlxuICAgKiBAcGFyYW0gIHtTdHJpbmdbXX0gIG9yZGVyICBvcmRlciBvZiB0aGUgaXRlbXNcbiAgICovXG4gIHNvcnQ6IGZ1bmN0aW9uIHNvcnQob3JkZXIsIHVzZUFuaW1hdGlvbikge1xuICAgIHZhciBpdGVtcyA9IHt9LFxuICAgICAgICByb290RWwgPSB0aGlzLmVsO1xuICAgIHRoaXMudG9BcnJheSgpLmZvckVhY2goZnVuY3Rpb24gKGlkLCBpKSB7XG4gICAgICB2YXIgZWwgPSByb290RWwuY2hpbGRyZW5baV07XG5cbiAgICAgIGlmIChjbG9zZXN0KGVsLCB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlLCByb290RWwsIGZhbHNlKSkge1xuICAgICAgICBpdGVtc1tpZF0gPSBlbDtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgICB1c2VBbmltYXRpb24gJiYgdGhpcy5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICBvcmRlci5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuICAgICAgaWYgKGl0ZW1zW2lkXSkge1xuICAgICAgICByb290RWwucmVtb3ZlQ2hpbGQoaXRlbXNbaWRdKTtcbiAgICAgICAgcm9vdEVsLmFwcGVuZENoaWxkKGl0ZW1zW2lkXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdXNlQW5pbWF0aW9uICYmIHRoaXMuYW5pbWF0ZUFsbCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSBjdXJyZW50IHNvcnRpbmdcbiAgICovXG4gIHNhdmU6IGZ1bmN0aW9uIHNhdmUoKSB7XG4gICAgdmFyIHN0b3JlID0gdGhpcy5vcHRpb25zLnN0b3JlO1xuICAgIHN0b3JlICYmIHN0b3JlLnNldCAmJiBzdG9yZS5zZXQodGhpcyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvciBlYWNoIGVsZW1lbnQgaW4gdGhlIHNldCwgZ2V0IHRoZSBmaXJzdCBlbGVtZW50IHRoYXQgbWF0Y2hlcyB0aGUgc2VsZWN0b3IgYnkgdGVzdGluZyB0aGUgZWxlbWVudCBpdHNlbGYgYW5kIHRyYXZlcnNpbmcgdXAgdGhyb3VnaCBpdHMgYW5jZXN0b3JzIGluIHRoZSBET00gdHJlZS5cbiAgICogQHBhcmFtICAge0hUTUxFbGVtZW50fSAgZWxcbiAgICogQHBhcmFtICAge1N0cmluZ30gICAgICAgW3NlbGVjdG9yXSAgZGVmYXVsdDogYG9wdGlvbnMuZHJhZ2dhYmxlYFxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR8bnVsbH1cbiAgICovXG4gIGNsb3Nlc3Q6IGZ1bmN0aW9uIGNsb3Nlc3QkMShlbCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gY2xvc2VzdChlbCwgc2VsZWN0b3IgfHwgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSwgdGhpcy5lbCwgZmFsc2UpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXQvZ2V0IG9wdGlvblxuICAgKiBAcGFyYW0gICB7c3RyaW5nfSBuYW1lXG4gICAqIEBwYXJhbSAgIHsqfSAgICAgIFt2YWx1ZV1cbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBvcHRpb246IGZ1bmN0aW9uIG9wdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgaWYgKHZhbHVlID09PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiBvcHRpb25zW25hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbW9kaWZpZWRWYWx1ZSA9IFBsdWdpbk1hbmFnZXIubW9kaWZ5T3B0aW9uKHRoaXMsIG5hbWUsIHZhbHVlKTtcblxuICAgICAgaWYgKHR5cGVvZiBtb2RpZmllZFZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zW25hbWVdID0gbW9kaWZpZWRWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5hbWUgPT09ICdncm91cCcpIHtcbiAgICAgICAgX3ByZXBhcmVHcm91cChvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlc3Ryb3lcbiAgICovXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgcGx1Z2luRXZlbnQoJ2Rlc3Ryb3knLCB0aGlzKTtcbiAgICB2YXIgZWwgPSB0aGlzLmVsO1xuICAgIGVsW2V4cGFuZG9dID0gbnVsbDtcbiAgICBvZmYoZWwsICdtb3VzZWRvd24nLCB0aGlzLl9vblRhcFN0YXJ0KTtcbiAgICBvZmYoZWwsICd0b3VjaHN0YXJ0JywgdGhpcy5fb25UYXBTdGFydCk7XG4gICAgb2ZmKGVsLCAncG9pbnRlcmRvd24nLCB0aGlzLl9vblRhcFN0YXJ0KTtcblxuICAgIGlmICh0aGlzLm5hdGl2ZURyYWdnYWJsZSkge1xuICAgICAgb2ZmKGVsLCAnZHJhZ292ZXInLCB0aGlzKTtcbiAgICAgIG9mZihlbCwgJ2RyYWdlbnRlcicsIHRoaXMpO1xuICAgIH0gLy8gUmVtb3ZlIGRyYWdnYWJsZSBhdHRyaWJ1dGVzXG5cblxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWwucXVlcnlTZWxlY3RvckFsbCgnW2RyYWdnYWJsZV0nKSwgZnVuY3Rpb24gKGVsKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RyYWdnYWJsZScpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fb25Ecm9wKCk7XG5cbiAgICB0aGlzLl9kaXNhYmxlRGVsYXllZERyYWdFdmVudHMoKTtcblxuICAgIHNvcnRhYmxlcy5zcGxpY2Uoc29ydGFibGVzLmluZGV4T2YodGhpcy5lbCksIDEpO1xuICAgIHRoaXMuZWwgPSBlbCA9IG51bGw7XG4gIH0sXG4gIF9oaWRlQ2xvbmU6IGZ1bmN0aW9uIF9oaWRlQ2xvbmUoKSB7XG4gICAgaWYgKCFjbG9uZUhpZGRlbikge1xuICAgICAgcGx1Z2luRXZlbnQoJ2hpZGVDbG9uZScsIHRoaXMpO1xuICAgICAgaWYgKFNvcnRhYmxlLmV2ZW50Q2FuY2VsZWQpIHJldHVybjtcbiAgICAgIGNzcyhjbG9uZUVsLCAnZGlzcGxheScsICdub25lJyk7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZlQ2xvbmVPbkhpZGUgJiYgY2xvbmVFbC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGNsb25lRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjbG9uZUVsKTtcbiAgICAgIH1cblxuICAgICAgY2xvbmVIaWRkZW4gPSB0cnVlO1xuICAgIH1cbiAgfSxcbiAgX3Nob3dDbG9uZTogZnVuY3Rpb24gX3Nob3dDbG9uZShwdXRTb3J0YWJsZSkge1xuICAgIGlmIChwdXRTb3J0YWJsZS5sYXN0UHV0TW9kZSAhPT0gJ2Nsb25lJykge1xuICAgICAgdGhpcy5faGlkZUNsb25lKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2xvbmVIaWRkZW4pIHtcbiAgICAgIHBsdWdpbkV2ZW50KCdzaG93Q2xvbmUnLCB0aGlzKTtcbiAgICAgIGlmIChTb3J0YWJsZS5ldmVudENhbmNlbGVkKSByZXR1cm47IC8vIHNob3cgY2xvbmUgYXQgZHJhZ0VsIG9yIG9yaWdpbmFsIHBvc2l0aW9uXG5cbiAgICAgIGlmIChkcmFnRWwucGFyZW50Tm9kZSA9PSByb290RWwgJiYgIXRoaXMub3B0aW9ucy5ncm91cC5yZXZlcnRDbG9uZSkge1xuICAgICAgICByb290RWwuaW5zZXJ0QmVmb3JlKGNsb25lRWwsIGRyYWdFbCk7XG4gICAgICB9IGVsc2UgaWYgKG5leHRFbCkge1xuICAgICAgICByb290RWwuaW5zZXJ0QmVmb3JlKGNsb25lRWwsIG5leHRFbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb290RWwuYXBwZW5kQ2hpbGQoY2xvbmVFbCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZ3JvdXAucmV2ZXJ0Q2xvbmUpIHtcbiAgICAgICAgdGhpcy5hbmltYXRlKGRyYWdFbCwgY2xvbmVFbCk7XG4gICAgICB9XG5cbiAgICAgIGNzcyhjbG9uZUVsLCAnZGlzcGxheScsICcnKTtcbiAgICAgIGNsb25lSGlkZGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiBfZ2xvYmFsRHJhZ092ZXIoXG4vKipFdmVudCovXG5ldnQpIHtcbiAgaWYgKGV2dC5kYXRhVHJhbnNmZXIpIHtcbiAgICBldnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG4gIH1cblxuICBldnQuY2FuY2VsYWJsZSAmJiBldnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gX29uTW92ZShmcm9tRWwsIHRvRWwsIGRyYWdFbCwgZHJhZ1JlY3QsIHRhcmdldEVsLCB0YXJnZXRSZWN0LCBvcmlnaW5hbEV2ZW50LCB3aWxsSW5zZXJ0QWZ0ZXIpIHtcbiAgdmFyIGV2dCxcbiAgICAgIHNvcnRhYmxlID0gZnJvbUVsW2V4cGFuZG9dLFxuICAgICAgb25Nb3ZlRm4gPSBzb3J0YWJsZS5vcHRpb25zLm9uTW92ZSxcbiAgICAgIHJldFZhbDsgLy8gU3VwcG9ydCBmb3IgbmV3IEN1c3RvbUV2ZW50IGZlYXR1cmVcblxuICBpZiAod2luZG93LkN1c3RvbUV2ZW50ICYmICFJRTExT3JMZXNzICYmICFFZGdlKSB7XG4gICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KCdtb3ZlJywge1xuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldnQuaW5pdEV2ZW50KCdtb3ZlJywgdHJ1ZSwgdHJ1ZSk7XG4gIH1cblxuICBldnQudG8gPSB0b0VsO1xuICBldnQuZnJvbSA9IGZyb21FbDtcbiAgZXZ0LmRyYWdnZWQgPSBkcmFnRWw7XG4gIGV2dC5kcmFnZ2VkUmVjdCA9IGRyYWdSZWN0O1xuICBldnQucmVsYXRlZCA9IHRhcmdldEVsIHx8IHRvRWw7XG4gIGV2dC5yZWxhdGVkUmVjdCA9IHRhcmdldFJlY3QgfHwgZ2V0UmVjdCh0b0VsKTtcbiAgZXZ0LndpbGxJbnNlcnRBZnRlciA9IHdpbGxJbnNlcnRBZnRlcjtcbiAgZXZ0Lm9yaWdpbmFsRXZlbnQgPSBvcmlnaW5hbEV2ZW50O1xuICBmcm9tRWwuZGlzcGF0Y2hFdmVudChldnQpO1xuXG4gIGlmIChvbk1vdmVGbikge1xuICAgIHJldFZhbCA9IG9uTW92ZUZuLmNhbGwoc29ydGFibGUsIGV2dCwgb3JpZ2luYWxFdmVudCk7XG4gIH1cblxuICByZXR1cm4gcmV0VmFsO1xufVxuXG5mdW5jdGlvbiBfZGlzYWJsZURyYWdnYWJsZShlbCkge1xuICBlbC5kcmFnZ2FibGUgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gX3Vuc2lsZW50KCkge1xuICBfc2lsZW50ID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIF9naG9zdElzRmlyc3QoZXZ0LCB2ZXJ0aWNhbCwgc29ydGFibGUpIHtcbiAgdmFyIHJlY3QgPSBnZXRSZWN0KGdldENoaWxkKHNvcnRhYmxlLmVsLCAwLCBzb3J0YWJsZS5vcHRpb25zLCB0cnVlKSk7XG4gIHZhciBzcGFjZXIgPSAxMDtcbiAgcmV0dXJuIHZlcnRpY2FsID8gZXZ0LmNsaWVudFggPCByZWN0LmxlZnQgLSBzcGFjZXIgfHwgZXZ0LmNsaWVudFkgPCByZWN0LnRvcCAmJiBldnQuY2xpZW50WCA8IHJlY3QucmlnaHQgOiBldnQuY2xpZW50WSA8IHJlY3QudG9wIC0gc3BhY2VyIHx8IGV2dC5jbGllbnRZIDwgcmVjdC5ib3R0b20gJiYgZXZ0LmNsaWVudFggPCByZWN0LmxlZnQ7XG59XG5cbmZ1bmN0aW9uIF9naG9zdElzTGFzdChldnQsIHZlcnRpY2FsLCBzb3J0YWJsZSkge1xuICB2YXIgcmVjdCA9IGdldFJlY3QobGFzdENoaWxkKHNvcnRhYmxlLmVsLCBzb3J0YWJsZS5vcHRpb25zLmRyYWdnYWJsZSkpO1xuICB2YXIgc3BhY2VyID0gMTA7XG4gIHJldHVybiB2ZXJ0aWNhbCA/IGV2dC5jbGllbnRYID4gcmVjdC5yaWdodCArIHNwYWNlciB8fCBldnQuY2xpZW50WCA8PSByZWN0LnJpZ2h0ICYmIGV2dC5jbGllbnRZID4gcmVjdC5ib3R0b20gJiYgZXZ0LmNsaWVudFggPj0gcmVjdC5sZWZ0IDogZXZ0LmNsaWVudFggPiByZWN0LnJpZ2h0ICYmIGV2dC5jbGllbnRZID4gcmVjdC50b3AgfHwgZXZ0LmNsaWVudFggPD0gcmVjdC5yaWdodCAmJiBldnQuY2xpZW50WSA+IHJlY3QuYm90dG9tICsgc3BhY2VyO1xufVxuXG5mdW5jdGlvbiBfZ2V0U3dhcERpcmVjdGlvbihldnQsIHRhcmdldCwgdGFyZ2V0UmVjdCwgdmVydGljYWwsIHN3YXBUaHJlc2hvbGQsIGludmVydGVkU3dhcFRocmVzaG9sZCwgaW52ZXJ0U3dhcCwgaXNMYXN0VGFyZ2V0KSB7XG4gIHZhciBtb3VzZU9uQXhpcyA9IHZlcnRpY2FsID8gZXZ0LmNsaWVudFkgOiBldnQuY2xpZW50WCxcbiAgICAgIHRhcmdldExlbmd0aCA9IHZlcnRpY2FsID8gdGFyZ2V0UmVjdC5oZWlnaHQgOiB0YXJnZXRSZWN0LndpZHRoLFxuICAgICAgdGFyZ2V0UzEgPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3QudG9wIDogdGFyZ2V0UmVjdC5sZWZ0LFxuICAgICAgdGFyZ2V0UzIgPSB2ZXJ0aWNhbCA/IHRhcmdldFJlY3QuYm90dG9tIDogdGFyZ2V0UmVjdC5yaWdodCxcbiAgICAgIGludmVydCA9IGZhbHNlO1xuXG4gIGlmICghaW52ZXJ0U3dhcCkge1xuICAgIC8vIE5ldmVyIGludmVydCBvciBjcmVhdGUgZHJhZ0VsIHNoYWRvdyB3aGVuIHRhcmdldCBtb3ZlbWVuZXQgY2F1c2VzIG1vdXNlIHRvIG1vdmUgcGFzdCB0aGUgZW5kIG9mIHJlZ3VsYXIgc3dhcFRocmVzaG9sZFxuICAgIGlmIChpc0xhc3RUYXJnZXQgJiYgdGFyZ2V0TW92ZURpc3RhbmNlIDwgdGFyZ2V0TGVuZ3RoICogc3dhcFRocmVzaG9sZCkge1xuICAgICAgLy8gbXVsdGlwbGllZCBvbmx5IGJ5IHN3YXBUaHJlc2hvbGQgYmVjYXVzZSBtb3VzZSB3aWxsIGFscmVhZHkgYmUgaW5zaWRlIHRhcmdldCBieSAoMSAtIHRocmVzaG9sZCkgKiB0YXJnZXRMZW5ndGggLyAyXG4gICAgICAvLyBjaGVjayBpZiBwYXN0IGZpcnN0IGludmVydCB0aHJlc2hvbGQgb24gc2lkZSBvcHBvc2l0ZSBvZiBsYXN0RGlyZWN0aW9uXG4gICAgICBpZiAoIXBhc3RGaXJzdEludmVydFRocmVzaCAmJiAobGFzdERpcmVjdGlvbiA9PT0gMSA/IG1vdXNlT25BeGlzID4gdGFyZ2V0UzEgKyB0YXJnZXRMZW5ndGggKiBpbnZlcnRlZFN3YXBUaHJlc2hvbGQgLyAyIDogbW91c2VPbkF4aXMgPCB0YXJnZXRTMiAtIHRhcmdldExlbmd0aCAqIGludmVydGVkU3dhcFRocmVzaG9sZCAvIDIpKSB7XG4gICAgICAgIC8vIHBhc3QgZmlyc3QgaW52ZXJ0IHRocmVzaG9sZCwgZG8gbm90IHJlc3RyaWN0IGludmVydGVkIHRocmVzaG9sZCB0byBkcmFnRWwgc2hhZG93XG4gICAgICAgIHBhc3RGaXJzdEludmVydFRocmVzaCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghcGFzdEZpcnN0SW52ZXJ0VGhyZXNoKSB7XG4gICAgICAgIC8vIGRyYWdFbCBzaGFkb3cgKHRhcmdldCBtb3ZlIGRpc3RhbmNlIHNoYWRvdylcbiAgICAgICAgaWYgKGxhc3REaXJlY3Rpb24gPT09IDEgPyBtb3VzZU9uQXhpcyA8IHRhcmdldFMxICsgdGFyZ2V0TW92ZURpc3RhbmNlIC8vIG92ZXIgZHJhZ0VsIHNoYWRvd1xuICAgICAgICA6IG1vdXNlT25BeGlzID4gdGFyZ2V0UzIgLSB0YXJnZXRNb3ZlRGlzdGFuY2UpIHtcbiAgICAgICAgICByZXR1cm4gLWxhc3REaXJlY3Rpb247XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludmVydCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlZ3VsYXJcbiAgICAgIGlmIChtb3VzZU9uQXhpcyA+IHRhcmdldFMxICsgdGFyZ2V0TGVuZ3RoICogKDEgLSBzd2FwVGhyZXNob2xkKSAvIDIgJiYgbW91c2VPbkF4aXMgPCB0YXJnZXRTMiAtIHRhcmdldExlbmd0aCAqICgxIC0gc3dhcFRocmVzaG9sZCkgLyAyKSB7XG4gICAgICAgIHJldHVybiBfZ2V0SW5zZXJ0RGlyZWN0aW9uKHRhcmdldCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW52ZXJ0ID0gaW52ZXJ0IHx8IGludmVydFN3YXA7XG5cbiAgaWYgKGludmVydCkge1xuICAgIC8vIEludmVydCBvZiByZWd1bGFyXG4gICAgaWYgKG1vdXNlT25BeGlzIDwgdGFyZ2V0UzEgKyB0YXJnZXRMZW5ndGggKiBpbnZlcnRlZFN3YXBUaHJlc2hvbGQgLyAyIHx8IG1vdXNlT25BeGlzID4gdGFyZ2V0UzIgLSB0YXJnZXRMZW5ndGggKiBpbnZlcnRlZFN3YXBUaHJlc2hvbGQgLyAyKSB7XG4gICAgICByZXR1cm4gbW91c2VPbkF4aXMgPiB0YXJnZXRTMSArIHRhcmdldExlbmd0aCAvIDIgPyAxIDogLTE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG4vKipcbiAqIEdldHMgdGhlIGRpcmVjdGlvbiBkcmFnRWwgbXVzdCBiZSBzd2FwcGVkIHJlbGF0aXZlIHRvIHRhcmdldCBpbiBvcmRlciB0byBtYWtlIGl0XG4gKiBzZWVtIHRoYXQgZHJhZ0VsIGhhcyBiZWVuIFwiaW5zZXJ0ZWRcIiBpbnRvIHRoYXQgZWxlbWVudCdzIHBvc2l0aW9uXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gdGFyZ2V0ICAgICAgIFRoZSB0YXJnZXQgd2hvc2UgcG9zaXRpb24gZHJhZ0VsIGlzIGJlaW5nIGluc2VydGVkIGF0XG4gKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgIERpcmVjdGlvbiBkcmFnRWwgbXVzdCBiZSBzd2FwcGVkXG4gKi9cblxuXG5mdW5jdGlvbiBfZ2V0SW5zZXJ0RGlyZWN0aW9uKHRhcmdldCkge1xuICBpZiAoaW5kZXgoZHJhZ0VsKSA8IGluZGV4KHRhcmdldCkpIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbn1cbi8qKlxuICogR2VuZXJhdGUgaWRcbiAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gZWxcbiAqIEByZXR1cm5zIHtTdHJpbmd9XG4gKiBAcHJpdmF0ZVxuICovXG5cblxuZnVuY3Rpb24gX2dlbmVyYXRlSWQoZWwpIHtcbiAgdmFyIHN0ciA9IGVsLnRhZ05hbWUgKyBlbC5jbGFzc05hbWUgKyBlbC5zcmMgKyBlbC5ocmVmICsgZWwudGV4dENvbnRlbnQsXG4gICAgICBpID0gc3RyLmxlbmd0aCxcbiAgICAgIHN1bSA9IDA7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIHN1bSArPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgfVxuXG4gIHJldHVybiBzdW0udG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBfc2F2ZUlucHV0Q2hlY2tlZFN0YXRlKHJvb3QpIHtcbiAgc2F2ZWRJbnB1dENoZWNrZWQubGVuZ3RoID0gMDtcbiAgdmFyIGlucHV0cyA9IHJvb3QuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lucHV0Jyk7XG4gIHZhciBpZHggPSBpbnB1dHMubGVuZ3RoO1xuXG4gIHdoaWxlIChpZHgtLSkge1xuICAgIHZhciBlbCA9IGlucHV0c1tpZHhdO1xuICAgIGVsLmNoZWNrZWQgJiYgc2F2ZWRJbnB1dENoZWNrZWQucHVzaChlbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX25leHRUaWNrKGZuKSB7XG4gIHJldHVybiBzZXRUaW1lb3V0KGZuLCAwKTtcbn1cblxuZnVuY3Rpb24gX2NhbmNlbE5leHRUaWNrKGlkKSB7XG4gIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufSAvLyBGaXhlZCAjOTczOlxuXG5cbmlmIChkb2N1bWVudEV4aXN0cykge1xuICBvbihkb2N1bWVudCwgJ3RvdWNobW92ZScsIGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoKFNvcnRhYmxlLmFjdGl2ZSB8fCBhd2FpdGluZ0RyYWdTdGFydGVkKSAmJiBldnQuY2FuY2VsYWJsZSkge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcbn0gLy8gRXhwb3J0IHV0aWxzXG5cblxuU29ydGFibGUudXRpbHMgPSB7XG4gIG9uOiBvbixcbiAgb2ZmOiBvZmYsXG4gIGNzczogY3NzLFxuICBmaW5kOiBmaW5kLFxuICBpczogZnVuY3Rpb24gaXMoZWwsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuICEhY2xvc2VzdChlbCwgc2VsZWN0b3IsIGVsLCBmYWxzZSk7XG4gIH0sXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0aHJvdHRsZTogdGhyb3R0bGUsXG4gIGNsb3Nlc3Q6IGNsb3Nlc3QsXG4gIHRvZ2dsZUNsYXNzOiB0b2dnbGVDbGFzcyxcbiAgY2xvbmU6IGNsb25lLFxuICBpbmRleDogaW5kZXgsXG4gIG5leHRUaWNrOiBfbmV4dFRpY2ssXG4gIGNhbmNlbE5leHRUaWNrOiBfY2FuY2VsTmV4dFRpY2ssXG4gIGRldGVjdERpcmVjdGlvbjogX2RldGVjdERpcmVjdGlvbixcbiAgZ2V0Q2hpbGQ6IGdldENoaWxkXG59O1xuLyoqXG4gKiBHZXQgdGhlIFNvcnRhYmxlIGluc3RhbmNlIG9mIGFuIGVsZW1lbnRcbiAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50XG4gKiBAcmV0dXJuIHtTb3J0YWJsZXx1bmRlZmluZWR9ICAgICAgICAgVGhlIGluc3RhbmNlIG9mIFNvcnRhYmxlXG4gKi9cblxuU29ydGFibGUuZ2V0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnRbZXhwYW5kb107XG59O1xuLyoqXG4gKiBNb3VudCBhIHBsdWdpbiB0byBTb3J0YWJsZVxuICogQHBhcmFtICB7Li4uU29ydGFibGVQbHVnaW58U29ydGFibGVQbHVnaW5bXX0gcGx1Z2lucyAgICAgICBQbHVnaW5zIGJlaW5nIG1vdW50ZWRcbiAqL1xuXG5cblNvcnRhYmxlLm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGx1Z2lucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwbHVnaW5zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKHBsdWdpbnNbMF0uY29uc3RydWN0b3IgPT09IEFycmF5KSBwbHVnaW5zID0gcGx1Z2luc1swXTtcbiAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICBpZiAoIXBsdWdpbi5wcm90b3R5cGUgfHwgIXBsdWdpbi5wcm90b3R5cGUuY29uc3RydWN0b3IpIHtcbiAgICAgIHRocm93IFwiU29ydGFibGU6IE1vdW50ZWQgcGx1Z2luIG11c3QgYmUgYSBjb25zdHJ1Y3RvciBmdW5jdGlvbiwgbm90IFwiLmNvbmNhdCh7fS50b1N0cmluZy5jYWxsKHBsdWdpbikpO1xuICAgIH1cblxuICAgIGlmIChwbHVnaW4udXRpbHMpIFNvcnRhYmxlLnV0aWxzID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIFNvcnRhYmxlLnV0aWxzKSwgcGx1Z2luLnV0aWxzKTtcbiAgICBQbHVnaW5NYW5hZ2VyLm1vdW50KHBsdWdpbik7XG4gIH0pO1xufTtcbi8qKlxuICogQ3JlYXRlIHNvcnRhYmxlIGluc3RhbmNlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSAgZWxcbiAqIEBwYXJhbSB7T2JqZWN0fSAgICAgIFtvcHRpb25zXVxuICovXG5cblxuU29ydGFibGUuY3JlYXRlID0gZnVuY3Rpb24gKGVsLCBvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgU29ydGFibGUoZWwsIG9wdGlvbnMpO1xufTsgLy8gRXhwb3J0XG5cblxuU29ydGFibGUudmVyc2lvbiA9IHZlcnNpb247XG5cbnZhciBhdXRvU2Nyb2xscyA9IFtdLFxuICAgIHNjcm9sbEVsLFxuICAgIHNjcm9sbFJvb3RFbCxcbiAgICBzY3JvbGxpbmcgPSBmYWxzZSxcbiAgICBsYXN0QXV0b1Njcm9sbFgsXG4gICAgbGFzdEF1dG9TY3JvbGxZLFxuICAgIHRvdWNoRXZ0JDEsXG4gICAgcG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWw7XG5cbmZ1bmN0aW9uIEF1dG9TY3JvbGxQbHVnaW4oKSB7XG4gIGZ1bmN0aW9uIEF1dG9TY3JvbGwoKSB7XG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIGZvcmNlQXV0b1Njcm9sbEZhbGxiYWNrOiBmYWxzZSxcbiAgICAgIHNjcm9sbFNlbnNpdGl2aXR5OiAzMCxcbiAgICAgIHNjcm9sbFNwZWVkOiAxMCxcbiAgICAgIGJ1YmJsZVNjcm9sbDogdHJ1ZVxuICAgIH07IC8vIEJpbmQgYWxsIHByaXZhdGUgbWV0aG9kc1xuXG4gICAgZm9yICh2YXIgZm4gaW4gdGhpcykge1xuICAgICAgaWYgKGZuLmNoYXJBdCgwKSA9PT0gJ18nICYmIHR5cGVvZiB0aGlzW2ZuXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzW2ZuXSA9IHRoaXNbZm5dLmJpbmQodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQXV0b1Njcm9sbC5wcm90b3R5cGUgPSB7XG4gICAgZHJhZ1N0YXJ0ZWQ6IGZ1bmN0aW9uIGRyYWdTdGFydGVkKF9yZWYpIHtcbiAgICAgIHZhciBvcmlnaW5hbEV2ZW50ID0gX3JlZi5vcmlnaW5hbEV2ZW50O1xuXG4gICAgICBpZiAodGhpcy5zb3J0YWJsZS5uYXRpdmVEcmFnZ2FibGUpIHtcbiAgICAgICAgb24oZG9jdW1lbnQsICdkcmFnb3ZlcicsIHRoaXMuX2hhbmRsZUF1dG9TY3JvbGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdXBwb3J0UG9pbnRlcikge1xuICAgICAgICAgIG9uKGRvY3VtZW50LCAncG9pbnRlcm1vdmUnLCB0aGlzLl9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwpO1xuICAgICAgICB9IGVsc2UgaWYgKG9yaWdpbmFsRXZlbnQudG91Y2hlcykge1xuICAgICAgICAgIG9uKGRvY3VtZW50LCAndG91Y2htb3ZlJywgdGhpcy5faGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbihkb2N1bWVudCwgJ21vdXNlbW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGRyYWdPdmVyQ29tcGxldGVkOiBmdW5jdGlvbiBkcmFnT3ZlckNvbXBsZXRlZChfcmVmMikge1xuICAgICAgdmFyIG9yaWdpbmFsRXZlbnQgPSBfcmVmMi5vcmlnaW5hbEV2ZW50O1xuXG4gICAgICAvLyBGb3Igd2hlbiBidWJibGluZyBpcyBjYW5jZWxlZCBhbmQgdXNpbmcgZmFsbGJhY2sgKGZhbGxiYWNrICd0b3VjaG1vdmUnIGFsd2F5cyByZWFjaGVkKVxuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuZHJhZ092ZXJCdWJibGUgJiYgIW9yaWdpbmFsRXZlbnQucm9vdEVsKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUF1dG9TY3JvbGwob3JpZ2luYWxFdmVudCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkcm9wOiBmdW5jdGlvbiBkcm9wKCkge1xuICAgICAgaWYgKHRoaXMuc29ydGFibGUubmF0aXZlRHJhZ2dhYmxlKSB7XG4gICAgICAgIG9mZihkb2N1bWVudCwgJ2RyYWdvdmVyJywgdGhpcy5faGFuZGxlQXV0b1Njcm9sbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvZmYoZG9jdW1lbnQsICdwb2ludGVybW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICAgIG9mZihkb2N1bWVudCwgJ3RvdWNobW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICAgIG9mZihkb2N1bWVudCwgJ21vdXNlbW92ZScsIHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCk7XG4gICAgICB9XG5cbiAgICAgIGNsZWFyUG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwoKTtcbiAgICAgIGNsZWFyQXV0b1Njcm9sbHMoKTtcbiAgICAgIGNhbmNlbFRocm90dGxlKCk7XG4gICAgfSxcbiAgICBudWxsaW5nOiBmdW5jdGlvbiBudWxsaW5nKCkge1xuICAgICAgdG91Y2hFdnQkMSA9IHNjcm9sbFJvb3RFbCA9IHNjcm9sbEVsID0gc2Nyb2xsaW5nID0gcG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwgPSBsYXN0QXV0b1Njcm9sbFggPSBsYXN0QXV0b1Njcm9sbFkgPSBudWxsO1xuICAgICAgYXV0b1Njcm9sbHMubGVuZ3RoID0gMDtcbiAgICB9LFxuICAgIF9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGw6IGZ1bmN0aW9uIF9oYW5kbGVGYWxsYmFja0F1dG9TY3JvbGwoZXZ0KSB7XG4gICAgICB0aGlzLl9oYW5kbGVBdXRvU2Nyb2xsKGV2dCwgdHJ1ZSk7XG4gICAgfSxcbiAgICBfaGFuZGxlQXV0b1Njcm9sbDogZnVuY3Rpb24gX2hhbmRsZUF1dG9TY3JvbGwoZXZ0LCBmYWxsYmFjaykge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIHggPSAoZXZ0LnRvdWNoZXMgPyBldnQudG91Y2hlc1swXSA6IGV2dCkuY2xpZW50WCxcbiAgICAgICAgICB5ID0gKGV2dC50b3VjaGVzID8gZXZ0LnRvdWNoZXNbMF0gOiBldnQpLmNsaWVudFksXG4gICAgICAgICAgZWxlbSA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XG4gICAgICB0b3VjaEV2dCQxID0gZXZ0OyAvLyBJRSBkb2VzIG5vdCBzZWVtIHRvIGhhdmUgbmF0aXZlIGF1dG9zY3JvbGwsXG4gICAgICAvLyBFZGdlJ3MgYXV0b3Njcm9sbCBzZWVtcyB0b28gY29uZGl0aW9uYWwsXG4gICAgICAvLyBNQUNPUyBTYWZhcmkgZG9lcyBub3QgaGF2ZSBhdXRvc2Nyb2xsLFxuICAgICAgLy8gRmlyZWZveCBhbmQgQ2hyb21lIGFyZSBnb29kXG5cbiAgICAgIGlmIChmYWxsYmFjayB8fCB0aGlzLm9wdGlvbnMuZm9yY2VBdXRvU2Nyb2xsRmFsbGJhY2sgfHwgRWRnZSB8fCBJRTExT3JMZXNzIHx8IFNhZmFyaSkge1xuICAgICAgICBhdXRvU2Nyb2xsKGV2dCwgdGhpcy5vcHRpb25zLCBlbGVtLCBmYWxsYmFjayk7IC8vIExpc3RlbmVyIGZvciBwb2ludGVyIGVsZW1lbnQgY2hhbmdlXG5cbiAgICAgICAgdmFyIG9nRWxlbVNjcm9sbGVyID0gZ2V0UGFyZW50QXV0b1Njcm9sbEVsZW1lbnQoZWxlbSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHNjcm9sbGluZyAmJiAoIXBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsIHx8IHggIT09IGxhc3RBdXRvU2Nyb2xsWCB8fCB5ICE9PSBsYXN0QXV0b1Njcm9sbFkpKSB7XG4gICAgICAgICAgcG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwgJiYgY2xlYXJQb2ludGVyRWxlbUNoYW5nZWRJbnRlcnZhbCgpOyAvLyBEZXRlY3QgZm9yIHBvaW50ZXIgZWxlbSBjaGFuZ2UsIGVtdWxhdGluZyBuYXRpdmUgRG5EIGJlaGF2aW91clxuXG4gICAgICAgICAgcG9pbnRlckVsZW1DaGFuZ2VkSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbmV3RWxlbSA9IGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSksIHRydWUpO1xuXG4gICAgICAgICAgICBpZiAobmV3RWxlbSAhPT0gb2dFbGVtU2Nyb2xsZXIpIHtcbiAgICAgICAgICAgICAgb2dFbGVtU2Nyb2xsZXIgPSBuZXdFbGVtO1xuICAgICAgICAgICAgICBjbGVhckF1dG9TY3JvbGxzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF1dG9TY3JvbGwoZXZ0LCBfdGhpcy5vcHRpb25zLCBuZXdFbGVtLCBmYWxsYmFjayk7XG4gICAgICAgICAgfSwgMTApO1xuICAgICAgICAgIGxhc3RBdXRvU2Nyb2xsWCA9IHg7XG4gICAgICAgICAgbGFzdEF1dG9TY3JvbGxZID0geTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaWYgRG5EIGlzIGVuYWJsZWQgKGFuZCBicm93c2VyIGhhcyBnb29kIGF1dG9zY3JvbGxpbmcpLCBmaXJzdCBhdXRvc2Nyb2xsIHdpbGwgYWxyZWFkeSBzY3JvbGwsIHNvIGdldCBwYXJlbnQgYXV0b3Njcm9sbCBvZiBmaXJzdCBhdXRvc2Nyb2xsXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmJ1YmJsZVNjcm9sbCB8fCBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChlbGVtLCB0cnVlKSA9PT0gZ2V0V2luZG93U2Nyb2xsaW5nRWxlbWVudCgpKSB7XG4gICAgICAgICAgY2xlYXJBdXRvU2Nyb2xscygpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGF1dG9TY3JvbGwoZXZ0LCB0aGlzLm9wdGlvbnMsIGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGVsZW0sIGZhbHNlKSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzKEF1dG9TY3JvbGwsIHtcbiAgICBwbHVnaW5OYW1lOiAnc2Nyb2xsJyxcbiAgICBpbml0aWFsaXplQnlEZWZhdWx0OiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbGVhckF1dG9TY3JvbGxzKCkge1xuICBhdXRvU2Nyb2xscy5mb3JFYWNoKGZ1bmN0aW9uIChhdXRvU2Nyb2xsKSB7XG4gICAgY2xlYXJJbnRlcnZhbChhdXRvU2Nyb2xsLnBpZCk7XG4gIH0pO1xuICBhdXRvU2Nyb2xscyA9IFtdO1xufVxuXG5mdW5jdGlvbiBjbGVhclBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsKCkge1xuICBjbGVhckludGVydmFsKHBvaW50ZXJFbGVtQ2hhbmdlZEludGVydmFsKTtcbn1cblxudmFyIGF1dG9TY3JvbGwgPSB0aHJvdHRsZShmdW5jdGlvbiAoZXZ0LCBvcHRpb25zLCByb290RWwsIGlzRmFsbGJhY2spIHtcbiAgLy8gQnVnOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01MDU1MjFcbiAgaWYgKCFvcHRpb25zLnNjcm9sbCkgcmV0dXJuO1xuICB2YXIgeCA9IChldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0KS5jbGllbnRYLFxuICAgICAgeSA9IChldnQudG91Y2hlcyA/IGV2dC50b3VjaGVzWzBdIDogZXZ0KS5jbGllbnRZLFxuICAgICAgc2VucyA9IG9wdGlvbnMuc2Nyb2xsU2Vuc2l0aXZpdHksXG4gICAgICBzcGVlZCA9IG9wdGlvbnMuc2Nyb2xsU3BlZWQsXG4gICAgICB3aW5TY3JvbGxlciA9IGdldFdpbmRvd1Njcm9sbGluZ0VsZW1lbnQoKTtcbiAgdmFyIHNjcm9sbFRoaXNJbnN0YW5jZSA9IGZhbHNlLFxuICAgICAgc2Nyb2xsQ3VzdG9tRm47IC8vIE5ldyBzY3JvbGwgcm9vdCwgc2V0IHNjcm9sbEVsXG5cbiAgaWYgKHNjcm9sbFJvb3RFbCAhPT0gcm9vdEVsKSB7XG4gICAgc2Nyb2xsUm9vdEVsID0gcm9vdEVsO1xuICAgIGNsZWFyQXV0b1Njcm9sbHMoKTtcbiAgICBzY3JvbGxFbCA9IG9wdGlvbnMuc2Nyb2xsO1xuICAgIHNjcm9sbEN1c3RvbUZuID0gb3B0aW9ucy5zY3JvbGxGbjtcblxuICAgIGlmIChzY3JvbGxFbCA9PT0gdHJ1ZSkge1xuICAgICAgc2Nyb2xsRWwgPSBnZXRQYXJlbnRBdXRvU2Nyb2xsRWxlbWVudChyb290RWwsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBsYXllcnNPdXQgPSAwO1xuICB2YXIgY3VycmVudFBhcmVudCA9IHNjcm9sbEVsO1xuXG4gIGRvIHtcbiAgICB2YXIgZWwgPSBjdXJyZW50UGFyZW50LFxuICAgICAgICByZWN0ID0gZ2V0UmVjdChlbCksXG4gICAgICAgIHRvcCA9IHJlY3QudG9wLFxuICAgICAgICBib3R0b20gPSByZWN0LmJvdHRvbSxcbiAgICAgICAgbGVmdCA9IHJlY3QubGVmdCxcbiAgICAgICAgcmlnaHQgPSByZWN0LnJpZ2h0LFxuICAgICAgICB3aWR0aCA9IHJlY3Qud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IHJlY3QuaGVpZ2h0LFxuICAgICAgICBjYW5TY3JvbGxYID0gdm9pZCAwLFxuICAgICAgICBjYW5TY3JvbGxZID0gdm9pZCAwLFxuICAgICAgICBzY3JvbGxXaWR0aCA9IGVsLnNjcm9sbFdpZHRoLFxuICAgICAgICBzY3JvbGxIZWlnaHQgPSBlbC5zY3JvbGxIZWlnaHQsXG4gICAgICAgIGVsQ1NTID0gY3NzKGVsKSxcbiAgICAgICAgc2Nyb2xsUG9zWCA9IGVsLnNjcm9sbExlZnQsXG4gICAgICAgIHNjcm9sbFBvc1kgPSBlbC5zY3JvbGxUb3A7XG5cbiAgICBpZiAoZWwgPT09IHdpblNjcm9sbGVyKSB7XG4gICAgICBjYW5TY3JvbGxYID0gd2lkdGggPCBzY3JvbGxXaWR0aCAmJiAoZWxDU1Mub3ZlcmZsb3dYID09PSAnYXV0bycgfHwgZWxDU1Mub3ZlcmZsb3dYID09PSAnc2Nyb2xsJyB8fCBlbENTUy5vdmVyZmxvd1ggPT09ICd2aXNpYmxlJyk7XG4gICAgICBjYW5TY3JvbGxZID0gaGVpZ2h0IDwgc2Nyb2xsSGVpZ2h0ICYmIChlbENTUy5vdmVyZmxvd1kgPT09ICdhdXRvJyB8fCBlbENTUy5vdmVyZmxvd1kgPT09ICdzY3JvbGwnIHx8IGVsQ1NTLm92ZXJmbG93WSA9PT0gJ3Zpc2libGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FuU2Nyb2xsWCA9IHdpZHRoIDwgc2Nyb2xsV2lkdGggJiYgKGVsQ1NTLm92ZXJmbG93WCA9PT0gJ2F1dG8nIHx8IGVsQ1NTLm92ZXJmbG93WCA9PT0gJ3Njcm9sbCcpO1xuICAgICAgY2FuU2Nyb2xsWSA9IGhlaWdodCA8IHNjcm9sbEhlaWdodCAmJiAoZWxDU1Mub3ZlcmZsb3dZID09PSAnYXV0bycgfHwgZWxDU1Mub3ZlcmZsb3dZID09PSAnc2Nyb2xsJyk7XG4gICAgfVxuXG4gICAgdmFyIHZ4ID0gY2FuU2Nyb2xsWCAmJiAoTWF0aC5hYnMocmlnaHQgLSB4KSA8PSBzZW5zICYmIHNjcm9sbFBvc1ggKyB3aWR0aCA8IHNjcm9sbFdpZHRoKSAtIChNYXRoLmFicyhsZWZ0IC0geCkgPD0gc2VucyAmJiAhIXNjcm9sbFBvc1gpO1xuICAgIHZhciB2eSA9IGNhblNjcm9sbFkgJiYgKE1hdGguYWJzKGJvdHRvbSAtIHkpIDw9IHNlbnMgJiYgc2Nyb2xsUG9zWSArIGhlaWdodCA8IHNjcm9sbEhlaWdodCkgLSAoTWF0aC5hYnModG9wIC0geSkgPD0gc2VucyAmJiAhIXNjcm9sbFBvc1kpO1xuXG4gICAgaWYgKCFhdXRvU2Nyb2xsc1tsYXllcnNPdXRdKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBsYXllcnNPdXQ7IGkrKykge1xuICAgICAgICBpZiAoIWF1dG9TY3JvbGxzW2ldKSB7XG4gICAgICAgICAgYXV0b1Njcm9sbHNbaV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhdXRvU2Nyb2xsc1tsYXllcnNPdXRdLnZ4ICE9IHZ4IHx8IGF1dG9TY3JvbGxzW2xheWVyc091dF0udnkgIT0gdnkgfHwgYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS5lbCAhPT0gZWwpIHtcbiAgICAgIGF1dG9TY3JvbGxzW2xheWVyc091dF0uZWwgPSBlbDtcbiAgICAgIGF1dG9TY3JvbGxzW2xheWVyc091dF0udnggPSB2eDtcbiAgICAgIGF1dG9TY3JvbGxzW2xheWVyc091dF0udnkgPSB2eTtcbiAgICAgIGNsZWFySW50ZXJ2YWwoYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS5waWQpO1xuXG4gICAgICBpZiAodnggIT0gMCB8fCB2eSAhPSAwKSB7XG4gICAgICAgIHNjcm9sbFRoaXNJbnN0YW5jZSA9IHRydWU7XG4gICAgICAgIC8qIGpzaGludCBsb29wZnVuYzp0cnVlICovXG5cbiAgICAgICAgYXV0b1Njcm9sbHNbbGF5ZXJzT3V0XS5waWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gZW11bGF0ZSBkcmFnIG92ZXIgZHVyaW5nIGF1dG9zY3JvbGwgKGZhbGxiYWNrKSwgZW11bGF0aW5nIG5hdGl2ZSBEbkQgYmVoYXZpb3VyXG4gICAgICAgICAgaWYgKGlzRmFsbGJhY2sgJiYgdGhpcy5sYXllciA9PT0gMCkge1xuICAgICAgICAgICAgU29ydGFibGUuYWN0aXZlLl9vblRvdWNoTW92ZSh0b3VjaEV2dCQxKTsgLy8gVG8gbW92ZSBnaG9zdCBpZiBpdCBpcyBwb3NpdGlvbmVkIGFic29sdXRlbHlcblxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzY3JvbGxPZmZzZXRZID0gYXV0b1Njcm9sbHNbdGhpcy5sYXllcl0udnkgPyBhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS52eSAqIHNwZWVkIDogMDtcbiAgICAgICAgICB2YXIgc2Nyb2xsT2Zmc2V0WCA9IGF1dG9TY3JvbGxzW3RoaXMubGF5ZXJdLnZ4ID8gYXV0b1Njcm9sbHNbdGhpcy5sYXllcl0udnggKiBzcGVlZCA6IDA7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHNjcm9sbEN1c3RvbUZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsQ3VzdG9tRm4uY2FsbChTb3J0YWJsZS5kcmFnZ2VkLnBhcmVudE5vZGVbZXhwYW5kb10sIHNjcm9sbE9mZnNldFgsIHNjcm9sbE9mZnNldFksIGV2dCwgdG91Y2hFdnQkMSwgYXV0b1Njcm9sbHNbdGhpcy5sYXllcl0uZWwpICE9PSAnY29udGludWUnKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzY3JvbGxCeShhdXRvU2Nyb2xsc1t0aGlzLmxheWVyXS5lbCwgc2Nyb2xsT2Zmc2V0WCwgc2Nyb2xsT2Zmc2V0WSk7XG4gICAgICAgIH0uYmluZCh7XG4gICAgICAgICAgbGF5ZXI6IGxheWVyc091dFxuICAgICAgICB9KSwgMjQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxheWVyc091dCsrO1xuICB9IHdoaWxlIChvcHRpb25zLmJ1YmJsZVNjcm9sbCAmJiBjdXJyZW50UGFyZW50ICE9PSB3aW5TY3JvbGxlciAmJiAoY3VycmVudFBhcmVudCA9IGdldFBhcmVudEF1dG9TY3JvbGxFbGVtZW50KGN1cnJlbnRQYXJlbnQsIGZhbHNlKSkpO1xuXG4gIHNjcm9sbGluZyA9IHNjcm9sbFRoaXNJbnN0YW5jZTsgLy8gaW4gY2FzZSBhbm90aGVyIGZ1bmN0aW9uIGNhdGNoZXMgc2Nyb2xsaW5nIGFzIGZhbHNlIGluIGJldHdlZW4gd2hlbiBpdCBpcyBub3Rcbn0sIDMwKTtcblxudmFyIGRyb3AgPSBmdW5jdGlvbiBkcm9wKF9yZWYpIHtcbiAgdmFyIG9yaWdpbmFsRXZlbnQgPSBfcmVmLm9yaWdpbmFsRXZlbnQsXG4gICAgICBwdXRTb3J0YWJsZSA9IF9yZWYucHV0U29ydGFibGUsXG4gICAgICBkcmFnRWwgPSBfcmVmLmRyYWdFbCxcbiAgICAgIGFjdGl2ZVNvcnRhYmxlID0gX3JlZi5hY3RpdmVTb3J0YWJsZSxcbiAgICAgIGRpc3BhdGNoU29ydGFibGVFdmVudCA9IF9yZWYuZGlzcGF0Y2hTb3J0YWJsZUV2ZW50LFxuICAgICAgaGlkZUdob3N0Rm9yVGFyZ2V0ID0gX3JlZi5oaWRlR2hvc3RGb3JUYXJnZXQsXG4gICAgICB1bmhpZGVHaG9zdEZvclRhcmdldCA9IF9yZWYudW5oaWRlR2hvc3RGb3JUYXJnZXQ7XG4gIGlmICghb3JpZ2luYWxFdmVudCkgcmV0dXJuO1xuICB2YXIgdG9Tb3J0YWJsZSA9IHB1dFNvcnRhYmxlIHx8IGFjdGl2ZVNvcnRhYmxlO1xuICBoaWRlR2hvc3RGb3JUYXJnZXQoKTtcbiAgdmFyIHRvdWNoID0gb3JpZ2luYWxFdmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBvcmlnaW5hbEV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA/IG9yaWdpbmFsRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBvcmlnaW5hbEV2ZW50O1xuICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh0b3VjaC5jbGllbnRYLCB0b3VjaC5jbGllbnRZKTtcbiAgdW5oaWRlR2hvc3RGb3JUYXJnZXQoKTtcblxuICBpZiAodG9Tb3J0YWJsZSAmJiAhdG9Tb3J0YWJsZS5lbC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KCdzcGlsbCcpO1xuICAgIHRoaXMub25TcGlsbCh7XG4gICAgICBkcmFnRWw6IGRyYWdFbCxcbiAgICAgIHB1dFNvcnRhYmxlOiBwdXRTb3J0YWJsZVxuICAgIH0pO1xuICB9XG59O1xuXG5mdW5jdGlvbiBSZXZlcnQoKSB7fVxuXG5SZXZlcnQucHJvdG90eXBlID0ge1xuICBzdGFydEluZGV4OiBudWxsLFxuICBkcmFnU3RhcnQ6IGZ1bmN0aW9uIGRyYWdTdGFydChfcmVmMikge1xuICAgIHZhciBvbGREcmFnZ2FibGVJbmRleCA9IF9yZWYyLm9sZERyYWdnYWJsZUluZGV4O1xuICAgIHRoaXMuc3RhcnRJbmRleCA9IG9sZERyYWdnYWJsZUluZGV4O1xuICB9LFxuICBvblNwaWxsOiBmdW5jdGlvbiBvblNwaWxsKF9yZWYzKSB7XG4gICAgdmFyIGRyYWdFbCA9IF9yZWYzLmRyYWdFbCxcbiAgICAgICAgcHV0U29ydGFibGUgPSBfcmVmMy5wdXRTb3J0YWJsZTtcbiAgICB0aGlzLnNvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuXG4gICAgaWYgKHB1dFNvcnRhYmxlKSB7XG4gICAgICBwdXRTb3J0YWJsZS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcbiAgICB9XG5cbiAgICB2YXIgbmV4dFNpYmxpbmcgPSBnZXRDaGlsZCh0aGlzLnNvcnRhYmxlLmVsLCB0aGlzLnN0YXJ0SW5kZXgsIHRoaXMub3B0aW9ucyk7XG5cbiAgICBpZiAobmV4dFNpYmxpbmcpIHtcbiAgICAgIHRoaXMuc29ydGFibGUuZWwuaW5zZXJ0QmVmb3JlKGRyYWdFbCwgbmV4dFNpYmxpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNvcnRhYmxlLmVsLmFwcGVuZENoaWxkKGRyYWdFbCk7XG4gICAgfVxuXG4gICAgdGhpcy5zb3J0YWJsZS5hbmltYXRlQWxsKCk7XG5cbiAgICBpZiAocHV0U29ydGFibGUpIHtcbiAgICAgIHB1dFNvcnRhYmxlLmFuaW1hdGVBbGwoKTtcbiAgICB9XG4gIH0sXG4gIGRyb3A6IGRyb3Bcbn07XG5cbl9leHRlbmRzKFJldmVydCwge1xuICBwbHVnaW5OYW1lOiAncmV2ZXJ0T25TcGlsbCdcbn0pO1xuXG5mdW5jdGlvbiBSZW1vdmUoKSB7fVxuXG5SZW1vdmUucHJvdG90eXBlID0ge1xuICBvblNwaWxsOiBmdW5jdGlvbiBvblNwaWxsKF9yZWY0KSB7XG4gICAgdmFyIGRyYWdFbCA9IF9yZWY0LmRyYWdFbCxcbiAgICAgICAgcHV0U29ydGFibGUgPSBfcmVmNC5wdXRTb3J0YWJsZTtcbiAgICB2YXIgcGFyZW50U29ydGFibGUgPSBwdXRTb3J0YWJsZSB8fCB0aGlzLnNvcnRhYmxlO1xuICAgIHBhcmVudFNvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgIGRyYWdFbC5wYXJlbnROb2RlICYmIGRyYWdFbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdFbCk7XG4gICAgcGFyZW50U29ydGFibGUuYW5pbWF0ZUFsbCgpO1xuICB9LFxuICBkcm9wOiBkcm9wXG59O1xuXG5fZXh0ZW5kcyhSZW1vdmUsIHtcbiAgcGx1Z2luTmFtZTogJ3JlbW92ZU9uU3BpbGwnXG59KTtcblxudmFyIGxhc3RTd2FwRWw7XG5cbmZ1bmN0aW9uIFN3YXBQbHVnaW4oKSB7XG4gIGZ1bmN0aW9uIFN3YXAoKSB7XG4gICAgdGhpcy5kZWZhdWx0cyA9IHtcbiAgICAgIHN3YXBDbGFzczogJ3NvcnRhYmxlLXN3YXAtaGlnaGxpZ2h0J1xuICAgIH07XG4gIH1cblxuICBTd2FwLnByb3RvdHlwZSA9IHtcbiAgICBkcmFnU3RhcnQ6IGZ1bmN0aW9uIGRyYWdTdGFydChfcmVmKSB7XG4gICAgICB2YXIgZHJhZ0VsID0gX3JlZi5kcmFnRWw7XG4gICAgICBsYXN0U3dhcEVsID0gZHJhZ0VsO1xuICAgIH0sXG4gICAgZHJhZ092ZXJWYWxpZDogZnVuY3Rpb24gZHJhZ092ZXJWYWxpZChfcmVmMikge1xuICAgICAgdmFyIGNvbXBsZXRlZCA9IF9yZWYyLmNvbXBsZXRlZCxcbiAgICAgICAgICB0YXJnZXQgPSBfcmVmMi50YXJnZXQsXG4gICAgICAgICAgb25Nb3ZlID0gX3JlZjIub25Nb3ZlLFxuICAgICAgICAgIGFjdGl2ZVNvcnRhYmxlID0gX3JlZjIuYWN0aXZlU29ydGFibGUsXG4gICAgICAgICAgY2hhbmdlZCA9IF9yZWYyLmNoYW5nZWQsXG4gICAgICAgICAgY2FuY2VsID0gX3JlZjIuY2FuY2VsO1xuICAgICAgaWYgKCFhY3RpdmVTb3J0YWJsZS5vcHRpb25zLnN3YXApIHJldHVybjtcbiAgICAgIHZhciBlbCA9IHRoaXMuc29ydGFibGUuZWwsXG4gICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQgIT09IGVsKSB7XG4gICAgICAgIHZhciBwcmV2U3dhcEVsID0gbGFzdFN3YXBFbDtcblxuICAgICAgICBpZiAob25Nb3ZlKHRhcmdldCkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgdG9nZ2xlQ2xhc3ModGFyZ2V0LCBvcHRpb25zLnN3YXBDbGFzcywgdHJ1ZSk7XG4gICAgICAgICAgbGFzdFN3YXBFbCA9IHRhcmdldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYXN0U3dhcEVsID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmV2U3dhcEVsICYmIHByZXZTd2FwRWwgIT09IGxhc3RTd2FwRWwpIHtcbiAgICAgICAgICB0b2dnbGVDbGFzcyhwcmV2U3dhcEVsLCBvcHRpb25zLnN3YXBDbGFzcywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNoYW5nZWQoKTtcbiAgICAgIGNvbXBsZXRlZCh0cnVlKTtcbiAgICAgIGNhbmNlbCgpO1xuICAgIH0sXG4gICAgZHJvcDogZnVuY3Rpb24gZHJvcChfcmVmMykge1xuICAgICAgdmFyIGFjdGl2ZVNvcnRhYmxlID0gX3JlZjMuYWN0aXZlU29ydGFibGUsXG4gICAgICAgICAgcHV0U29ydGFibGUgPSBfcmVmMy5wdXRTb3J0YWJsZSxcbiAgICAgICAgICBkcmFnRWwgPSBfcmVmMy5kcmFnRWw7XG4gICAgICB2YXIgdG9Tb3J0YWJsZSA9IHB1dFNvcnRhYmxlIHx8IHRoaXMuc29ydGFibGU7XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIGxhc3RTd2FwRWwgJiYgdG9nZ2xlQ2xhc3MobGFzdFN3YXBFbCwgb3B0aW9ucy5zd2FwQ2xhc3MsIGZhbHNlKTtcblxuICAgICAgaWYgKGxhc3RTd2FwRWwgJiYgKG9wdGlvbnMuc3dhcCB8fCBwdXRTb3J0YWJsZSAmJiBwdXRTb3J0YWJsZS5vcHRpb25zLnN3YXApKSB7XG4gICAgICAgIGlmIChkcmFnRWwgIT09IGxhc3RTd2FwRWwpIHtcbiAgICAgICAgICB0b1NvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpO1xuICAgICAgICAgIGlmICh0b1NvcnRhYmxlICE9PSBhY3RpdmVTb3J0YWJsZSkgYWN0aXZlU29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG4gICAgICAgICAgc3dhcE5vZGVzKGRyYWdFbCwgbGFzdFN3YXBFbCk7XG4gICAgICAgICAgdG9Tb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gICAgICAgICAgaWYgKHRvU29ydGFibGUgIT09IGFjdGl2ZVNvcnRhYmxlKSBhY3RpdmVTb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG51bGxpbmc6IGZ1bmN0aW9uIG51bGxpbmcoKSB7XG4gICAgICBsYXN0U3dhcEVsID0gbnVsbDtcbiAgICB9XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcyhTd2FwLCB7XG4gICAgcGx1Z2luTmFtZTogJ3N3YXAnLFxuICAgIGV2ZW50UHJvcGVydGllczogZnVuY3Rpb24gZXZlbnRQcm9wZXJ0aWVzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3dhcEl0ZW06IGxhc3RTd2FwRWxcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc3dhcE5vZGVzKG4xLCBuMikge1xuICB2YXIgcDEgPSBuMS5wYXJlbnROb2RlLFxuICAgICAgcDIgPSBuMi5wYXJlbnROb2RlLFxuICAgICAgaTEsXG4gICAgICBpMjtcbiAgaWYgKCFwMSB8fCAhcDIgfHwgcDEuaXNFcXVhbE5vZGUobjIpIHx8IHAyLmlzRXF1YWxOb2RlKG4xKSkgcmV0dXJuO1xuICBpMSA9IGluZGV4KG4xKTtcbiAgaTIgPSBpbmRleChuMik7XG5cbiAgaWYgKHAxLmlzRXF1YWxOb2RlKHAyKSAmJiBpMSA8IGkyKSB7XG4gICAgaTIrKztcbiAgfVxuXG4gIHAxLmluc2VydEJlZm9yZShuMiwgcDEuY2hpbGRyZW5baTFdKTtcbiAgcDIuaW5zZXJ0QmVmb3JlKG4xLCBwMi5jaGlsZHJlbltpMl0pO1xufVxuXG52YXIgbXVsdGlEcmFnRWxlbWVudHMgPSBbXSxcbiAgICBtdWx0aURyYWdDbG9uZXMgPSBbXSxcbiAgICBsYXN0TXVsdGlEcmFnU2VsZWN0LFxuICAgIC8vIGZvciBzZWxlY3Rpb24gd2l0aCBtb2RpZmllciBrZXkgZG93biAoU0hJRlQpXG5tdWx0aURyYWdTb3J0YWJsZSxcbiAgICBpbml0aWFsRm9sZGluZyA9IGZhbHNlLFxuICAgIC8vIEluaXRpYWwgbXVsdGktZHJhZyBmb2xkIHdoZW4gZHJhZyBzdGFydGVkXG5mb2xkaW5nID0gZmFsc2UsXG4gICAgLy8gRm9sZGluZyBhbnkgb3RoZXIgdGltZVxuZHJhZ1N0YXJ0ZWQgPSBmYWxzZSxcbiAgICBkcmFnRWwkMSxcbiAgICBjbG9uZXNGcm9tUmVjdCxcbiAgICBjbG9uZXNIaWRkZW47XG5cbmZ1bmN0aW9uIE11bHRpRHJhZ1BsdWdpbigpIHtcbiAgZnVuY3Rpb24gTXVsdGlEcmFnKHNvcnRhYmxlKSB7XG4gICAgLy8gQmluZCBhbGwgcHJpdmF0ZSBtZXRob2RzXG4gICAgZm9yICh2YXIgZm4gaW4gdGhpcykge1xuICAgICAgaWYgKGZuLmNoYXJBdCgwKSA9PT0gJ18nICYmIHR5cGVvZiB0aGlzW2ZuXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzW2ZuXSA9IHRoaXNbZm5dLmJpbmQodGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNvcnRhYmxlLm9wdGlvbnMuc3VwcG9ydFBvaW50ZXIpIHtcbiAgICAgIG9uKGRvY3VtZW50LCAncG9pbnRlcnVwJywgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbihkb2N1bWVudCwgJ21vdXNldXAnLCB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyk7XG4gICAgICBvbihkb2N1bWVudCwgJ3RvdWNoZW5kJywgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcpO1xuICAgIH1cblxuICAgIG9uKGRvY3VtZW50LCAna2V5ZG93bicsIHRoaXMuX2NoZWNrS2V5RG93bik7XG4gICAgb24oZG9jdW1lbnQsICdrZXl1cCcsIHRoaXMuX2NoZWNrS2V5VXApO1xuICAgIHRoaXMuZGVmYXVsdHMgPSB7XG4gICAgICBzZWxlY3RlZENsYXNzOiAnc29ydGFibGUtc2VsZWN0ZWQnLFxuICAgICAgbXVsdGlEcmFnS2V5OiBudWxsLFxuICAgICAgc2V0RGF0YTogZnVuY3Rpb24gc2V0RGF0YShkYXRhVHJhbnNmZXIsIGRyYWdFbCkge1xuICAgICAgICB2YXIgZGF0YSA9ICcnO1xuXG4gICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggJiYgbXVsdGlEcmFnU29ydGFibGUgPT09IHNvcnRhYmxlKSB7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCwgaSkge1xuICAgICAgICAgICAgZGF0YSArPSAoIWkgPyAnJyA6ICcsICcpICsgbXVsdGlEcmFnRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXRhID0gZHJhZ0VsLnRleHRDb250ZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVRyYW5zZmVyLnNldERhdGEoJ1RleHQnLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgTXVsdGlEcmFnLnByb3RvdHlwZSA9IHtcbiAgICBtdWx0aURyYWdLZXlEb3duOiBmYWxzZSxcbiAgICBpc011bHRpRHJhZzogZmFsc2UsXG4gICAgZGVsYXlTdGFydEdsb2JhbDogZnVuY3Rpb24gZGVsYXlTdGFydEdsb2JhbChfcmVmKSB7XG4gICAgICB2YXIgZHJhZ2dlZCA9IF9yZWYuZHJhZ0VsO1xuICAgICAgZHJhZ0VsJDEgPSBkcmFnZ2VkO1xuICAgIH0sXG4gICAgZGVsYXlFbmRlZDogZnVuY3Rpb24gZGVsYXlFbmRlZCgpIHtcbiAgICAgIHRoaXMuaXNNdWx0aURyYWcgPSB+bXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZihkcmFnRWwkMSk7XG4gICAgfSxcbiAgICBzZXR1cENsb25lOiBmdW5jdGlvbiBzZXR1cENsb25lKF9yZWYyKSB7XG4gICAgICB2YXIgc29ydGFibGUgPSBfcmVmMi5zb3J0YWJsZSxcbiAgICAgICAgICBjYW5jZWwgPSBfcmVmMi5jYW5jZWw7XG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aURyYWcpIHJldHVybjtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtdWx0aURyYWdFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBtdWx0aURyYWdDbG9uZXMucHVzaChjbG9uZShtdWx0aURyYWdFbGVtZW50c1tpXSkpO1xuICAgICAgICBtdWx0aURyYWdDbG9uZXNbaV0uc29ydGFibGVJbmRleCA9IG11bHRpRHJhZ0VsZW1lbnRzW2ldLnNvcnRhYmxlSW5kZXg7XG4gICAgICAgIG11bHRpRHJhZ0Nsb25lc1tpXS5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgICAgbXVsdGlEcmFnQ2xvbmVzW2ldLnN0eWxlWyd3aWxsLWNoYW5nZSddID0gJyc7XG4gICAgICAgIHRvZ2dsZUNsYXNzKG11bHRpRHJhZ0Nsb25lc1tpXSwgdGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MsIGZhbHNlKTtcbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudHNbaV0gPT09IGRyYWdFbCQxICYmIHRvZ2dsZUNsYXNzKG11bHRpRHJhZ0Nsb25lc1tpXSwgdGhpcy5vcHRpb25zLmNob3NlbkNsYXNzLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIHNvcnRhYmxlLl9oaWRlQ2xvbmUoKTtcblxuICAgICAgY2FuY2VsKCk7XG4gICAgfSxcbiAgICBjbG9uZTogZnVuY3Rpb24gY2xvbmUoX3JlZjMpIHtcbiAgICAgIHZhciBzb3J0YWJsZSA9IF9yZWYzLnNvcnRhYmxlLFxuICAgICAgICAgIHJvb3RFbCA9IF9yZWYzLnJvb3RFbCxcbiAgICAgICAgICBkaXNwYXRjaFNvcnRhYmxlRXZlbnQgPSBfcmVmMy5kaXNwYXRjaFNvcnRhYmxlRXZlbnQsXG4gICAgICAgICAgY2FuY2VsID0gX3JlZjMuY2FuY2VsO1xuICAgICAgaWYgKCF0aGlzLmlzTXVsdGlEcmFnKSByZXR1cm47XG5cbiAgICAgIGlmICghdGhpcy5vcHRpb25zLnJlbW92ZUNsb25lT25IaWRlKSB7XG4gICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggJiYgbXVsdGlEcmFnU29ydGFibGUgPT09IHNvcnRhYmxlKSB7XG4gICAgICAgICAgaW5zZXJ0TXVsdGlEcmFnQ2xvbmVzKHRydWUsIHJvb3RFbCk7XG4gICAgICAgICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KCdjbG9uZScpO1xuICAgICAgICAgIGNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBzaG93Q2xvbmU6IGZ1bmN0aW9uIHNob3dDbG9uZShfcmVmNCkge1xuICAgICAgdmFyIGNsb25lTm93U2hvd24gPSBfcmVmNC5jbG9uZU5vd1Nob3duLFxuICAgICAgICAgIHJvb3RFbCA9IF9yZWY0LnJvb3RFbCxcbiAgICAgICAgICBjYW5jZWwgPSBfcmVmNC5jYW5jZWw7XG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aURyYWcpIHJldHVybjtcbiAgICAgIGluc2VydE11bHRpRHJhZ0Nsb25lcyhmYWxzZSwgcm9vdEVsKTtcbiAgICAgIG11bHRpRHJhZ0Nsb25lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbG9uZSkge1xuICAgICAgICBjc3MoY2xvbmUsICdkaXNwbGF5JywgJycpO1xuICAgICAgfSk7XG4gICAgICBjbG9uZU5vd1Nob3duKCk7XG4gICAgICBjbG9uZXNIaWRkZW4gPSBmYWxzZTtcbiAgICAgIGNhbmNlbCgpO1xuICAgIH0sXG4gICAgaGlkZUNsb25lOiBmdW5jdGlvbiBoaWRlQ2xvbmUoX3JlZjUpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBzb3J0YWJsZSA9IF9yZWY1LnNvcnRhYmxlLFxuICAgICAgICAgIGNsb25lTm93SGlkZGVuID0gX3JlZjUuY2xvbmVOb3dIaWRkZW4sXG4gICAgICAgICAgY2FuY2VsID0gX3JlZjUuY2FuY2VsO1xuICAgICAgaWYgKCF0aGlzLmlzTXVsdGlEcmFnKSByZXR1cm47XG4gICAgICBtdWx0aURyYWdDbG9uZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xvbmUpIHtcbiAgICAgICAgY3NzKGNsb25lLCAnZGlzcGxheScsICdub25lJyk7XG5cbiAgICAgICAgaWYgKF90aGlzLm9wdGlvbnMucmVtb3ZlQ2xvbmVPbkhpZGUgJiYgY2xvbmUucGFyZW50Tm9kZSkge1xuICAgICAgICAgIGNsb25lLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2xvbmUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNsb25lTm93SGlkZGVuKCk7XG4gICAgICBjbG9uZXNIaWRkZW4gPSB0cnVlO1xuICAgICAgY2FuY2VsKCk7XG4gICAgfSxcbiAgICBkcmFnU3RhcnRHbG9iYWw6IGZ1bmN0aW9uIGRyYWdTdGFydEdsb2JhbChfcmVmNikge1xuICAgICAgdmFyIHNvcnRhYmxlID0gX3JlZjYuc29ydGFibGU7XG5cbiAgICAgIGlmICghdGhpcy5pc011bHRpRHJhZyAmJiBtdWx0aURyYWdTb3J0YWJsZSkge1xuICAgICAgICBtdWx0aURyYWdTb3J0YWJsZS5tdWx0aURyYWcuX2Rlc2VsZWN0TXVsdGlEcmFnKCk7XG4gICAgICB9XG5cbiAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudC5zb3J0YWJsZUluZGV4ID0gaW5kZXgobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICB9KTsgLy8gU29ydCBtdWx0aS1kcmFnIGVsZW1lbnRzXG5cbiAgICAgIG11bHRpRHJhZ0VsZW1lbnRzID0gbXVsdGlEcmFnRWxlbWVudHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYS5zb3J0YWJsZUluZGV4IC0gYi5zb3J0YWJsZUluZGV4O1xuICAgICAgfSk7XG4gICAgICBkcmFnU3RhcnRlZCA9IHRydWU7XG4gICAgfSxcbiAgICBkcmFnU3RhcnRlZDogZnVuY3Rpb24gZHJhZ1N0YXJ0ZWQoX3JlZjcpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgc29ydGFibGUgPSBfcmVmNy5zb3J0YWJsZTtcbiAgICAgIGlmICghdGhpcy5pc011bHRpRHJhZykgcmV0dXJuO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnNvcnQpIHtcbiAgICAgICAgLy8gQ2FwdHVyZSByZWN0cyxcbiAgICAgICAgLy8gaGlkZSBtdWx0aSBkcmFnIGVsZW1lbnRzIChieSBwb3NpdGlvbmluZyB0aGVtIGFic29sdXRlKSxcbiAgICAgICAgLy8gc2V0IG11bHRpIGRyYWcgZWxlbWVudHMgcmVjdHMgdG8gZHJhZ1JlY3QsXG4gICAgICAgIC8vIHNob3cgbXVsdGkgZHJhZyBlbGVtZW50cyxcbiAgICAgICAgLy8gYW5pbWF0ZSB0byByZWN0cyxcbiAgICAgICAgLy8gdW5zZXQgcmVjdHMgJiByZW1vdmUgZnJvbSBET01cbiAgICAgICAgc29ydGFibGUuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbmltYXRpb24pIHtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAobXVsdGlEcmFnRWxlbWVudCA9PT0gZHJhZ0VsJDEpIHJldHVybjtcbiAgICAgICAgICAgIGNzcyhtdWx0aURyYWdFbGVtZW50LCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YXIgZHJhZ1JlY3QgPSBnZXRSZWN0KGRyYWdFbCQxLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnQgPT09IGRyYWdFbCQxKSByZXR1cm47XG4gICAgICAgICAgICBzZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQsIGRyYWdSZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBmb2xkaW5nID0gdHJ1ZTtcbiAgICAgICAgICBpbml0aWFsRm9sZGluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc29ydGFibGUuYW5pbWF0ZUFsbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvbGRpbmcgPSBmYWxzZTtcbiAgICAgICAgaW5pdGlhbEZvbGRpbmcgPSBmYWxzZTtcblxuICAgICAgICBpZiAoX3RoaXMyLm9wdGlvbnMuYW5pbWF0aW9uKSB7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgICAgdW5zZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IC8vIFJlbW92ZSBhbGwgYXV4aWxpYXJ5IG11bHRpZHJhZyBpdGVtcyBmcm9tIGVsLCBpZiBzb3J0aW5nIGVuYWJsZWRcblxuXG4gICAgICAgIGlmIChfdGhpczIub3B0aW9ucy5zb3J0KSB7XG4gICAgICAgICAgcmVtb3ZlTXVsdGlEcmFnRWxlbWVudHMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBkcmFnT3ZlcjogZnVuY3Rpb24gZHJhZ092ZXIoX3JlZjgpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBfcmVmOC50YXJnZXQsXG4gICAgICAgICAgY29tcGxldGVkID0gX3JlZjguY29tcGxldGVkLFxuICAgICAgICAgIGNhbmNlbCA9IF9yZWY4LmNhbmNlbDtcblxuICAgICAgaWYgKGZvbGRpbmcgJiYgfm11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YodGFyZ2V0KSkge1xuICAgICAgICBjb21wbGV0ZWQoZmFsc2UpO1xuICAgICAgICBjYW5jZWwoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJldmVydDogZnVuY3Rpb24gcmV2ZXJ0KF9yZWY5KSB7XG4gICAgICB2YXIgZnJvbVNvcnRhYmxlID0gX3JlZjkuZnJvbVNvcnRhYmxlLFxuICAgICAgICAgIHJvb3RFbCA9IF9yZWY5LnJvb3RFbCxcbiAgICAgICAgICBzb3J0YWJsZSA9IF9yZWY5LnNvcnRhYmxlLFxuICAgICAgICAgIGRyYWdSZWN0ID0gX3JlZjkuZHJhZ1JlY3Q7XG5cbiAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIFNldHVwIHVuZm9sZCBhbmltYXRpb25cbiAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICAgIHNvcnRhYmxlLmFkZEFuaW1hdGlvblN0YXRlKHtcbiAgICAgICAgICAgIHRhcmdldDogbXVsdGlEcmFnRWxlbWVudCxcbiAgICAgICAgICAgIHJlY3Q6IGZvbGRpbmcgPyBnZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQpIDogZHJhZ1JlY3RcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB1bnNldFJlY3QobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudC5mcm9tUmVjdCA9IGRyYWdSZWN0O1xuICAgICAgICAgIGZyb21Tb3J0YWJsZS5yZW1vdmVBbmltYXRpb25TdGF0ZShtdWx0aURyYWdFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvbGRpbmcgPSBmYWxzZTtcbiAgICAgICAgaW5zZXJ0TXVsdGlEcmFnRWxlbWVudHMoIXRoaXMub3B0aW9ucy5yZW1vdmVDbG9uZU9uSGlkZSwgcm9vdEVsKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRyYWdPdmVyQ29tcGxldGVkOiBmdW5jdGlvbiBkcmFnT3ZlckNvbXBsZXRlZChfcmVmMTApIHtcbiAgICAgIHZhciBzb3J0YWJsZSA9IF9yZWYxMC5zb3J0YWJsZSxcbiAgICAgICAgICBpc093bmVyID0gX3JlZjEwLmlzT3duZXIsXG4gICAgICAgICAgaW5zZXJ0aW9uID0gX3JlZjEwLmluc2VydGlvbixcbiAgICAgICAgICBhY3RpdmVTb3J0YWJsZSA9IF9yZWYxMC5hY3RpdmVTb3J0YWJsZSxcbiAgICAgICAgICBwYXJlbnRFbCA9IF9yZWYxMC5wYXJlbnRFbCxcbiAgICAgICAgICBwdXRTb3J0YWJsZSA9IF9yZWYxMC5wdXRTb3J0YWJsZTtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICBpZiAoaW5zZXJ0aW9uKSB7XG4gICAgICAgIC8vIENsb25lcyBtdXN0IGJlIGhpZGRlbiBiZWZvcmUgZm9sZGluZyBhbmltYXRpb24gdG8gY2FwdHVyZSBkcmFnUmVjdEFic29sdXRlIHByb3Blcmx5XG4gICAgICAgIGlmIChpc093bmVyKSB7XG4gICAgICAgICAgYWN0aXZlU29ydGFibGUuX2hpZGVDbG9uZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5pdGlhbEZvbGRpbmcgPSBmYWxzZTsgLy8gSWYgbGVhdmluZyBzb3J0OmZhbHNlIHJvb3QsIG9yIGFscmVhZHkgZm9sZGluZyAtIEZvbGQgdG8gbmV3IGxvY2F0aW9uXG5cbiAgICAgICAgaWYgKG9wdGlvbnMuYW5pbWF0aW9uICYmIG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aCA+IDEgJiYgKGZvbGRpbmcgfHwgIWlzT3duZXIgJiYgIWFjdGl2ZVNvcnRhYmxlLm9wdGlvbnMuc29ydCAmJiAhcHV0U29ydGFibGUpKSB7XG4gICAgICAgICAgLy8gRm9sZDogU2V0IGFsbCBtdWx0aSBkcmFnIGVsZW1lbnRzJ3MgcmVjdHMgdG8gZHJhZ0VsJ3MgcmVjdCB3aGVuIG11bHRpLWRyYWcgZWxlbWVudHMgYXJlIGludmlzaWJsZVxuICAgICAgICAgIHZhciBkcmFnUmVjdEFic29sdXRlID0gZ2V0UmVjdChkcmFnRWwkMSwgZmFsc2UsIHRydWUsIHRydWUpO1xuICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50ID09PSBkcmFnRWwkMSkgcmV0dXJuO1xuICAgICAgICAgICAgc2V0UmVjdChtdWx0aURyYWdFbGVtZW50LCBkcmFnUmVjdEFic29sdXRlKTsgLy8gTW92ZSBlbGVtZW50KHMpIHRvIGVuZCBvZiBwYXJlbnRFbCBzbyB0aGF0IGl0IGRvZXMgbm90IGludGVyZmVyZSB3aXRoIG11bHRpLWRyYWcgY2xvbmVzIGluc2VydGlvbiBpZiB0aGV5IGFyZSBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gd2hpbGUgZm9sZGluZywgYW5kIHNvIHRoYXQgd2UgY2FuIGNhcHR1cmUgdGhlbSBhZ2FpbiBiZWNhdXNlIG9sZCBzb3J0YWJsZSB3aWxsIG5vIGxvbmdlciBiZSBmcm9tU29ydGFibGVcblxuICAgICAgICAgICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZm9sZGluZyA9IHRydWU7XG4gICAgICAgIH0gLy8gQ2xvbmVzIG11c3QgYmUgc2hvd24gKGFuZCBjaGVjayB0byByZW1vdmUgbXVsdGkgZHJhZ3MpIGFmdGVyIGZvbGRpbmcgd2hlbiBpbnRlcmZlcmluZyBtdWx0aURyYWdFbGVtZW50cyBhcmUgbW92ZWQgb3V0XG5cblxuICAgICAgICBpZiAoIWlzT3duZXIpIHtcbiAgICAgICAgICAvLyBPbmx5IHJlbW92ZSBpZiBub3QgZm9sZGluZyAoZm9sZGluZyB3aWxsIHJlbW92ZSB0aGVtIGFueXdheXMpXG4gICAgICAgICAgaWYgKCFmb2xkaW5nKSB7XG4gICAgICAgICAgICByZW1vdmVNdWx0aURyYWdFbGVtZW50cygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2YXIgY2xvbmVzSGlkZGVuQmVmb3JlID0gY2xvbmVzSGlkZGVuO1xuXG4gICAgICAgICAgICBhY3RpdmVTb3J0YWJsZS5fc2hvd0Nsb25lKHNvcnRhYmxlKTsgLy8gVW5mb2xkIGFuaW1hdGlvbiBmb3IgY2xvbmVzIGlmIHNob3dpbmcgZnJvbSBoaWRkZW5cblxuXG4gICAgICAgICAgICBpZiAoYWN0aXZlU29ydGFibGUub3B0aW9ucy5hbmltYXRpb24gJiYgIWNsb25lc0hpZGRlbiAmJiBjbG9uZXNIaWRkZW5CZWZvcmUpIHtcbiAgICAgICAgICAgICAgbXVsdGlEcmFnQ2xvbmVzLmZvckVhY2goZnVuY3Rpb24gKGNsb25lKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlU29ydGFibGUuYWRkQW5pbWF0aW9uU3RhdGUoe1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBjbG9uZSxcbiAgICAgICAgICAgICAgICAgIHJlY3Q6IGNsb25lc0Zyb21SZWN0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2xvbmUuZnJvbVJlY3QgPSBjbG9uZXNGcm9tUmVjdDtcbiAgICAgICAgICAgICAgICBjbG9uZS50aGlzQW5pbWF0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZlU29ydGFibGUuX3Nob3dDbG9uZShzb3J0YWJsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBkcmFnT3ZlckFuaW1hdGlvbkNhcHR1cmU6IGZ1bmN0aW9uIGRyYWdPdmVyQW5pbWF0aW9uQ2FwdHVyZShfcmVmMTEpIHtcbiAgICAgIHZhciBkcmFnUmVjdCA9IF9yZWYxMS5kcmFnUmVjdCxcbiAgICAgICAgICBpc093bmVyID0gX3JlZjExLmlzT3duZXIsXG4gICAgICAgICAgYWN0aXZlU29ydGFibGUgPSBfcmVmMTEuYWN0aXZlU29ydGFibGU7XG4gICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnQudGhpc0FuaW1hdGlvbkR1cmF0aW9uID0gbnVsbDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYWN0aXZlU29ydGFibGUub3B0aW9ucy5hbmltYXRpb24gJiYgIWlzT3duZXIgJiYgYWN0aXZlU29ydGFibGUubXVsdGlEcmFnLmlzTXVsdGlEcmFnKSB7XG4gICAgICAgIGNsb25lc0Zyb21SZWN0ID0gX2V4dGVuZHMoe30sIGRyYWdSZWN0KTtcbiAgICAgICAgdmFyIGRyYWdNYXRyaXggPSBtYXRyaXgoZHJhZ0VsJDEsIHRydWUpO1xuICAgICAgICBjbG9uZXNGcm9tUmVjdC50b3AgLT0gZHJhZ01hdHJpeC5mO1xuICAgICAgICBjbG9uZXNGcm9tUmVjdC5sZWZ0IC09IGRyYWdNYXRyaXguZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRyYWdPdmVyQW5pbWF0aW9uQ29tcGxldGU6IGZ1bmN0aW9uIGRyYWdPdmVyQW5pbWF0aW9uQ29tcGxldGUoKSB7XG4gICAgICBpZiAoZm9sZGluZykge1xuICAgICAgICBmb2xkaW5nID0gZmFsc2U7XG4gICAgICAgIHJlbW92ZU11bHRpRHJhZ0VsZW1lbnRzKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkcm9wOiBmdW5jdGlvbiBkcm9wKF9yZWYxMikge1xuICAgICAgdmFyIGV2dCA9IF9yZWYxMi5vcmlnaW5hbEV2ZW50LFxuICAgICAgICAgIHJvb3RFbCA9IF9yZWYxMi5yb290RWwsXG4gICAgICAgICAgcGFyZW50RWwgPSBfcmVmMTIucGFyZW50RWwsXG4gICAgICAgICAgc29ydGFibGUgPSBfcmVmMTIuc29ydGFibGUsXG4gICAgICAgICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50ID0gX3JlZjEyLmRpc3BhdGNoU29ydGFibGVFdmVudCxcbiAgICAgICAgICBvbGRJbmRleCA9IF9yZWYxMi5vbGRJbmRleCxcbiAgICAgICAgICBwdXRTb3J0YWJsZSA9IF9yZWYxMi5wdXRTb3J0YWJsZTtcbiAgICAgIHZhciB0b1NvcnRhYmxlID0gcHV0U29ydGFibGUgfHwgdGhpcy5zb3J0YWJsZTtcbiAgICAgIGlmICghZXZ0KSByZXR1cm47XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBjaGlsZHJlbiA9IHBhcmVudEVsLmNoaWxkcmVuOyAvLyBNdWx0aS1kcmFnIHNlbGVjdGlvblxuXG4gICAgICBpZiAoIWRyYWdTdGFydGVkKSB7XG4gICAgICAgIGlmIChvcHRpb25zLm11bHRpRHJhZ0tleSAmJiAhdGhpcy5tdWx0aURyYWdLZXlEb3duKSB7XG4gICAgICAgICAgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZ2dsZUNsYXNzKGRyYWdFbCQxLCBvcHRpb25zLnNlbGVjdGVkQ2xhc3MsICF+bXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZihkcmFnRWwkMSkpO1xuXG4gICAgICAgIGlmICghfm11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YoZHJhZ0VsJDEpKSB7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMucHVzaChkcmFnRWwkMSk7XG4gICAgICAgICAgZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICBzb3J0YWJsZTogc29ydGFibGUsXG4gICAgICAgICAgICByb290RWw6IHJvb3RFbCxcbiAgICAgICAgICAgIG5hbWU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgdGFyZ2V0RWw6IGRyYWdFbCQxLFxuICAgICAgICAgICAgb3JpZ2luYWxFdnQ6IGV2dFxuICAgICAgICAgIH0pOyAvLyBNb2RpZmllciBhY3RpdmF0ZWQsIHNlbGVjdCBmcm9tIGxhc3QgdG8gZHJhZ0VsXG5cbiAgICAgICAgICBpZiAoZXZ0LnNoaWZ0S2V5ICYmIGxhc3RNdWx0aURyYWdTZWxlY3QgJiYgc29ydGFibGUuZWwuY29udGFpbnMobGFzdE11bHRpRHJhZ1NlbGVjdCkpIHtcbiAgICAgICAgICAgIHZhciBsYXN0SW5kZXggPSBpbmRleChsYXN0TXVsdGlEcmFnU2VsZWN0KSxcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggPSBpbmRleChkcmFnRWwkMSk7XG5cbiAgICAgICAgICAgIGlmICh+bGFzdEluZGV4ICYmIH5jdXJyZW50SW5kZXggJiYgbGFzdEluZGV4ICE9PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgICAgLy8gTXVzdCBpbmNsdWRlIGxhc3RNdWx0aURyYWdTZWxlY3QgKHNlbGVjdCBpdCksIGluIGNhc2UgbW9kaWZpZWQgc2VsZWN0aW9uIGZyb20gbm8gc2VsZWN0aW9uXG4gICAgICAgICAgICAgIC8vIChidXQgcHJldmlvdXMgc2VsZWN0aW9uIGV4aXN0ZWQpXG4gICAgICAgICAgICAgIHZhciBuLCBpO1xuXG4gICAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPiBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpID0gbGFzdEluZGV4O1xuICAgICAgICAgICAgICAgIG4gPSBjdXJyZW50SW5kZXg7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaSA9IGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgICAgICBuID0gbGFzdEluZGV4ICsgMTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKH5tdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKGNoaWxkcmVuW2ldKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3MoY2hpbGRyZW5baV0sIG9wdGlvbnMuc2VsZWN0ZWRDbGFzcywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMucHVzaChjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2hFdmVudCh7XG4gICAgICAgICAgICAgICAgICBzb3J0YWJsZTogc29ydGFibGUsXG4gICAgICAgICAgICAgICAgICByb290RWw6IHJvb3RFbCxcbiAgICAgICAgICAgICAgICAgIG5hbWU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgdGFyZ2V0RWw6IGNoaWxkcmVuW2ldLFxuICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFdnQ6IGV2dFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhc3RNdWx0aURyYWdTZWxlY3QgPSBkcmFnRWwkMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBtdWx0aURyYWdTb3J0YWJsZSA9IHRvU29ydGFibGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudHMuc3BsaWNlKG11bHRpRHJhZ0VsZW1lbnRzLmluZGV4T2YoZHJhZ0VsJDEpLCAxKTtcbiAgICAgICAgICBsYXN0TXVsdGlEcmFnU2VsZWN0ID0gbnVsbDtcbiAgICAgICAgICBkaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgIHNvcnRhYmxlOiBzb3J0YWJsZSxcbiAgICAgICAgICAgIHJvb3RFbDogcm9vdEVsLFxuICAgICAgICAgICAgbmFtZTogJ2Rlc2VsZWN0JyxcbiAgICAgICAgICAgIHRhcmdldEVsOiBkcmFnRWwkMSxcbiAgICAgICAgICAgIG9yaWdpbmFsRXZ0OiBldnRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBNdWx0aS1kcmFnIGRyb3BcblxuXG4gICAgICBpZiAoZHJhZ1N0YXJ0ZWQgJiYgdGhpcy5pc011bHRpRHJhZykge1xuICAgICAgICBmb2xkaW5nID0gZmFsc2U7IC8vIERvIG5vdCBcInVuZm9sZFwiIGFmdGVyIGFyb3VuZCBkcmFnRWwgaWYgcmV2ZXJ0ZWRcblxuICAgICAgICBpZiAoKHBhcmVudEVsW2V4cGFuZG9dLm9wdGlvbnMuc29ydCB8fCBwYXJlbnRFbCAhPT0gcm9vdEVsKSAmJiBtdWx0aURyYWdFbGVtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgdmFyIGRyYWdSZWN0ID0gZ2V0UmVjdChkcmFnRWwkMSksXG4gICAgICAgICAgICAgIG11bHRpRHJhZ0luZGV4ID0gaW5kZXgoZHJhZ0VsJDEsICc6bm90KC4nICsgdGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MgKyAnKScpO1xuICAgICAgICAgIGlmICghaW5pdGlhbEZvbGRpbmcgJiYgb3B0aW9ucy5hbmltYXRpb24pIGRyYWdFbCQxLnRoaXNBbmltYXRpb25EdXJhdGlvbiA9IG51bGw7XG4gICAgICAgICAgdG9Tb3J0YWJsZS5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKTtcblxuICAgICAgICAgIGlmICghaW5pdGlhbEZvbGRpbmcpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgICBkcmFnRWwkMS5mcm9tUmVjdCA9IGRyYWdSZWN0O1xuICAgICAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgbXVsdGlEcmFnRWxlbWVudC50aGlzQW5pbWF0aW9uRHVyYXRpb24gPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnQgIT09IGRyYWdFbCQxKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgcmVjdCA9IGZvbGRpbmcgPyBnZXRSZWN0KG11bHRpRHJhZ0VsZW1lbnQpIDogZHJhZ1JlY3Q7XG4gICAgICAgICAgICAgICAgICBtdWx0aURyYWdFbGVtZW50LmZyb21SZWN0ID0gcmVjdDsgLy8gUHJlcGFyZSB1bmZvbGQgYW5pbWF0aW9uXG5cbiAgICAgICAgICAgICAgICAgIHRvU29ydGFibGUuYWRkQW5pbWF0aW9uU3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IG11bHRpRHJhZ0VsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIHJlY3Q6IHJlY3RcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IC8vIE11bHRpIGRyYWcgZWxlbWVudHMgYXJlIG5vdCBuZWNlc3NhcmlseSByZW1vdmVkIGZyb20gdGhlIERPTSBvbiBkcm9wLCBzbyB0byByZWluc2VydFxuICAgICAgICAgICAgLy8gcHJvcGVybHkgdGhleSBtdXN0IGFsbCBiZSByZW1vdmVkXG5cblxuICAgICAgICAgICAgcmVtb3ZlTXVsdGlEcmFnRWxlbWVudHMoKTtcbiAgICAgICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKG11bHRpRHJhZ0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuW211bHRpRHJhZ0luZGV4XSkge1xuICAgICAgICAgICAgICAgIHBhcmVudEVsLmluc2VydEJlZm9yZShtdWx0aURyYWdFbGVtZW50LCBjaGlsZHJlblttdWx0aURyYWdJbmRleF0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudEVsLmFwcGVuZENoaWxkKG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbXVsdGlEcmFnSW5kZXgrKztcbiAgICAgICAgICAgIH0pOyAvLyBJZiBpbml0aWFsIGZvbGRpbmcgaXMgZG9uZSwgdGhlIGVsZW1lbnRzIG1heSBoYXZlIGNoYW5nZWQgcG9zaXRpb24gYmVjYXVzZSB0aGV5IGFyZSBub3dcbiAgICAgICAgICAgIC8vIHVuZm9sZGluZyBhcm91bmQgZHJhZ0VsLCBldmVuIHRob3VnaCBkcmFnRWwgbWF5IG5vdCBoYXZlIGhpcyBpbmRleCBjaGFuZ2VkLCBzbyB1cGRhdGUgZXZlbnRcbiAgICAgICAgICAgIC8vIG11c3QgYmUgZmlyZWQgaGVyZSBhcyBTb3J0YWJsZSB3aWxsIG5vdC5cblxuICAgICAgICAgICAgaWYgKG9sZEluZGV4ID09PSBpbmRleChkcmFnRWwkMSkpIHtcbiAgICAgICAgICAgICAgdmFyIHVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKG11bHRpRHJhZ0VsZW1lbnQuc29ydGFibGVJbmRleCAhPT0gaW5kZXgobXVsdGlEcmFnRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBpZiAodXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2hTb3J0YWJsZUV2ZW50KCd1cGRhdGUnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gTXVzdCBiZSBkb25lIGFmdGVyIGNhcHR1cmluZyBpbmRpdmlkdWFsIHJlY3RzIChzY3JvbGwgYmFyKVxuXG5cbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChtdWx0aURyYWdFbGVtZW50KSB7XG4gICAgICAgICAgICB1bnNldFJlY3QobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdG9Tb3J0YWJsZS5hbmltYXRlQWxsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBtdWx0aURyYWdTb3J0YWJsZSA9IHRvU29ydGFibGU7XG4gICAgICB9IC8vIFJlbW92ZSBjbG9uZXMgaWYgbmVjZXNzYXJ5XG5cblxuICAgICAgaWYgKHJvb3RFbCA9PT0gcGFyZW50RWwgfHwgcHV0U29ydGFibGUgJiYgcHV0U29ydGFibGUubGFzdFB1dE1vZGUgIT09ICdjbG9uZScpIHtcbiAgICAgICAgbXVsdGlEcmFnQ2xvbmVzLmZvckVhY2goZnVuY3Rpb24gKGNsb25lKSB7XG4gICAgICAgICAgY2xvbmUucGFyZW50Tm9kZSAmJiBjbG9uZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNsb25lKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBudWxsaW5nR2xvYmFsOiBmdW5jdGlvbiBudWxsaW5nR2xvYmFsKCkge1xuICAgICAgdGhpcy5pc011bHRpRHJhZyA9IGRyYWdTdGFydGVkID0gZmFsc2U7XG4gICAgICBtdWx0aURyYWdDbG9uZXMubGVuZ3RoID0gMDtcbiAgICB9LFxuICAgIGRlc3Ryb3lHbG9iYWw6IGZ1bmN0aW9uIGRlc3Ryb3lHbG9iYWwoKSB7XG4gICAgICB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZygpO1xuXG4gICAgICBvZmYoZG9jdW1lbnQsICdwb2ludGVydXAnLCB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyk7XG4gICAgICBvZmYoZG9jdW1lbnQsICdtb3VzZXVwJywgdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcpO1xuICAgICAgb2ZmKGRvY3VtZW50LCAndG91Y2hlbmQnLCB0aGlzLl9kZXNlbGVjdE11bHRpRHJhZyk7XG4gICAgICBvZmYoZG9jdW1lbnQsICdrZXlkb3duJywgdGhpcy5fY2hlY2tLZXlEb3duKTtcbiAgICAgIG9mZihkb2N1bWVudCwgJ2tleXVwJywgdGhpcy5fY2hlY2tLZXlVcCk7XG4gICAgfSxcbiAgICBfZGVzZWxlY3RNdWx0aURyYWc6IGZ1bmN0aW9uIF9kZXNlbGVjdE11bHRpRHJhZyhldnQpIHtcbiAgICAgIGlmICh0eXBlb2YgZHJhZ1N0YXJ0ZWQgIT09IFwidW5kZWZpbmVkXCIgJiYgZHJhZ1N0YXJ0ZWQpIHJldHVybjsgLy8gT25seSBkZXNlbGVjdCBpZiBzZWxlY3Rpb24gaXMgaW4gdGhpcyBzb3J0YWJsZVxuXG4gICAgICBpZiAobXVsdGlEcmFnU29ydGFibGUgIT09IHRoaXMuc29ydGFibGUpIHJldHVybjsgLy8gT25seSBkZXNlbGVjdCBpZiB0YXJnZXQgaXMgbm90IGl0ZW0gaW4gdGhpcyBzb3J0YWJsZVxuXG4gICAgICBpZiAoZXZ0ICYmIGNsb3Nlc3QoZXZ0LnRhcmdldCwgdGhpcy5vcHRpb25zLmRyYWdnYWJsZSwgdGhpcy5zb3J0YWJsZS5lbCwgZmFsc2UpKSByZXR1cm47IC8vIE9ubHkgZGVzZWxlY3QgaWYgbGVmdCBjbGlja1xuXG4gICAgICBpZiAoZXZ0ICYmIGV2dC5idXR0b24gIT09IDApIHJldHVybjtcblxuICAgICAgd2hpbGUgKG11bHRpRHJhZ0VsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB2YXIgZWwgPSBtdWx0aURyYWdFbGVtZW50c1swXTtcbiAgICAgICAgdG9nZ2xlQ2xhc3MoZWwsIHRoaXMub3B0aW9ucy5zZWxlY3RlZENsYXNzLCBmYWxzZSk7XG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLnNoaWZ0KCk7XG4gICAgICAgIGRpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgIHNvcnRhYmxlOiB0aGlzLnNvcnRhYmxlLFxuICAgICAgICAgIHJvb3RFbDogdGhpcy5zb3J0YWJsZS5lbCxcbiAgICAgICAgICBuYW1lOiAnZGVzZWxlY3QnLFxuICAgICAgICAgIHRhcmdldEVsOiBlbCxcbiAgICAgICAgICBvcmlnaW5hbEV2dDogZXZ0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgX2NoZWNrS2V5RG93bjogZnVuY3Rpb24gX2NoZWNrS2V5RG93bihldnQpIHtcbiAgICAgIGlmIChldnQua2V5ID09PSB0aGlzLm9wdGlvbnMubXVsdGlEcmFnS2V5KSB7XG4gICAgICAgIHRoaXMubXVsdGlEcmFnS2V5RG93biA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBfY2hlY2tLZXlVcDogZnVuY3Rpb24gX2NoZWNrS2V5VXAoZXZ0KSB7XG4gICAgICBpZiAoZXZ0LmtleSA9PT0gdGhpcy5vcHRpb25zLm11bHRpRHJhZ0tleSkge1xuICAgICAgICB0aGlzLm11bHRpRHJhZ0tleURvd24gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcyhNdWx0aURyYWcsIHtcbiAgICAvLyBTdGF0aWMgbWV0aG9kcyAmIHByb3BlcnRpZXNcbiAgICBwbHVnaW5OYW1lOiAnbXVsdGlEcmFnJyxcbiAgICB1dGlsczoge1xuICAgICAgLyoqXG4gICAgICAgKiBTZWxlY3RzIHRoZSBwcm92aWRlZCBtdWx0aS1kcmFnIGl0ZW1cbiAgICAgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbCAgICBUaGUgZWxlbWVudCB0byBiZSBzZWxlY3RlZFxuICAgICAgICovXG4gICAgICBzZWxlY3Q6IGZ1bmN0aW9uIHNlbGVjdChlbCkge1xuICAgICAgICB2YXIgc29ydGFibGUgPSBlbC5wYXJlbnROb2RlW2V4cGFuZG9dO1xuICAgICAgICBpZiAoIXNvcnRhYmxlIHx8ICFzb3J0YWJsZS5vcHRpb25zLm11bHRpRHJhZyB8fCB+bXVsdGlEcmFnRWxlbWVudHMuaW5kZXhPZihlbCkpIHJldHVybjtcblxuICAgICAgICBpZiAobXVsdGlEcmFnU29ydGFibGUgJiYgbXVsdGlEcmFnU29ydGFibGUgIT09IHNvcnRhYmxlKSB7XG4gICAgICAgICAgbXVsdGlEcmFnU29ydGFibGUubXVsdGlEcmFnLl9kZXNlbGVjdE11bHRpRHJhZygpO1xuXG4gICAgICAgICAgbXVsdGlEcmFnU29ydGFibGUgPSBzb3J0YWJsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZ2dsZUNsYXNzKGVsLCBzb3J0YWJsZS5vcHRpb25zLnNlbGVjdGVkQ2xhc3MsIHRydWUpO1xuICAgICAgICBtdWx0aURyYWdFbGVtZW50cy5wdXNoKGVsKTtcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRGVzZWxlY3RzIHRoZSBwcm92aWRlZCBtdWx0aS1kcmFnIGl0ZW1cbiAgICAgICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSBlbCAgICBUaGUgZWxlbWVudCB0byBiZSBkZXNlbGVjdGVkXG4gICAgICAgKi9cbiAgICAgIGRlc2VsZWN0OiBmdW5jdGlvbiBkZXNlbGVjdChlbCkge1xuICAgICAgICB2YXIgc29ydGFibGUgPSBlbC5wYXJlbnROb2RlW2V4cGFuZG9dLFxuICAgICAgICAgICAgaW5kZXggPSBtdWx0aURyYWdFbGVtZW50cy5pbmRleE9mKGVsKTtcbiAgICAgICAgaWYgKCFzb3J0YWJsZSB8fCAhc29ydGFibGUub3B0aW9ucy5tdWx0aURyYWcgfHwgIX5pbmRleCkgcmV0dXJuO1xuICAgICAgICB0b2dnbGVDbGFzcyhlbCwgc29ydGFibGUub3B0aW9ucy5zZWxlY3RlZENsYXNzLCBmYWxzZSk7XG4gICAgICAgIG11bHRpRHJhZ0VsZW1lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBldmVudFByb3BlcnRpZXM6IGZ1bmN0aW9uIGV2ZW50UHJvcGVydGllcygpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgb2xkSW5kaWNpZXMgPSBbXSxcbiAgICAgICAgICBuZXdJbmRpY2llcyA9IFtdO1xuICAgICAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgICAgICBvbGRJbmRpY2llcy5wdXNoKHtcbiAgICAgICAgICBtdWx0aURyYWdFbGVtZW50OiBtdWx0aURyYWdFbGVtZW50LFxuICAgICAgICAgIGluZGV4OiBtdWx0aURyYWdFbGVtZW50LnNvcnRhYmxlSW5kZXhcbiAgICAgICAgfSk7IC8vIG11bHRpRHJhZ0VsZW1lbnRzIHdpbGwgYWxyZWFkeSBiZSBzb3J0ZWQgaWYgZm9sZGluZ1xuXG4gICAgICAgIHZhciBuZXdJbmRleDtcblxuICAgICAgICBpZiAoZm9sZGluZyAmJiBtdWx0aURyYWdFbGVtZW50ICE9PSBkcmFnRWwkMSkge1xuICAgICAgICAgIG5ld0luZGV4ID0gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAoZm9sZGluZykge1xuICAgICAgICAgIG5ld0luZGV4ID0gaW5kZXgobXVsdGlEcmFnRWxlbWVudCwgJzpub3QoLicgKyBfdGhpczMub3B0aW9ucy5zZWxlY3RlZENsYXNzICsgJyknKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdJbmRleCA9IGluZGV4KG11bHRpRHJhZ0VsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3SW5kaWNpZXMucHVzaCh7XG4gICAgICAgICAgbXVsdGlEcmFnRWxlbWVudDogbXVsdGlEcmFnRWxlbWVudCxcbiAgICAgICAgICBpbmRleDogbmV3SW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGl0ZW1zOiBfdG9Db25zdW1hYmxlQXJyYXkobXVsdGlEcmFnRWxlbWVudHMpLFxuICAgICAgICBjbG9uZXM6IFtdLmNvbmNhdChtdWx0aURyYWdDbG9uZXMpLFxuICAgICAgICBvbGRJbmRpY2llczogb2xkSW5kaWNpZXMsXG4gICAgICAgIG5ld0luZGljaWVzOiBuZXdJbmRpY2llc1xuICAgICAgfTtcbiAgICB9LFxuICAgIG9wdGlvbkxpc3RlbmVyczoge1xuICAgICAgbXVsdGlEcmFnS2V5OiBmdW5jdGlvbiBtdWx0aURyYWdLZXkoa2V5KSB7XG4gICAgICAgIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmIChrZXkgPT09ICdjdHJsJykge1xuICAgICAgICAgIGtleSA9ICdDb250cm9sJztcbiAgICAgICAgfSBlbHNlIGlmIChrZXkubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGtleSA9IGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHIoMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGluc2VydE11bHRpRHJhZ0VsZW1lbnRzKGNsb25lc0luc2VydGVkLCByb290RWwpIHtcbiAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCwgaSkge1xuICAgIHZhciB0YXJnZXQgPSByb290RWwuY2hpbGRyZW5bbXVsdGlEcmFnRWxlbWVudC5zb3J0YWJsZUluZGV4ICsgKGNsb25lc0luc2VydGVkID8gTnVtYmVyKGkpIDogMCldO1xuXG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgcm9vdEVsLmluc2VydEJlZm9yZShtdWx0aURyYWdFbGVtZW50LCB0YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByb290RWwuYXBwZW5kQ2hpbGQobXVsdGlEcmFnRWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICogSW5zZXJ0IG11bHRpLWRyYWcgY2xvbmVzXG4gKiBAcGFyYW0gIHtbQm9vbGVhbl19IGVsZW1lbnRzSW5zZXJ0ZWQgIFdoZXRoZXIgdGhlIG11bHRpLWRyYWcgZWxlbWVudHMgYXJlIGluc2VydGVkXG4gKiBAcGFyYW0gIHtIVE1MRWxlbWVudH0gcm9vdEVsXG4gKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRNdWx0aURyYWdDbG9uZXMoZWxlbWVudHNJbnNlcnRlZCwgcm9vdEVsKSB7XG4gIG11bHRpRHJhZ0Nsb25lcy5mb3JFYWNoKGZ1bmN0aW9uIChjbG9uZSwgaSkge1xuICAgIHZhciB0YXJnZXQgPSByb290RWwuY2hpbGRyZW5bY2xvbmUuc29ydGFibGVJbmRleCArIChlbGVtZW50c0luc2VydGVkID8gTnVtYmVyKGkpIDogMCldO1xuXG4gICAgaWYgKHRhcmdldCkge1xuICAgICAgcm9vdEVsLmluc2VydEJlZm9yZShjbG9uZSwgdGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm9vdEVsLmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVNdWx0aURyYWdFbGVtZW50cygpIHtcbiAgbXVsdGlEcmFnRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAobXVsdGlEcmFnRWxlbWVudCkge1xuICAgIGlmIChtdWx0aURyYWdFbGVtZW50ID09PSBkcmFnRWwkMSkgcmV0dXJuO1xuICAgIG11bHRpRHJhZ0VsZW1lbnQucGFyZW50Tm9kZSAmJiBtdWx0aURyYWdFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobXVsdGlEcmFnRWxlbWVudCk7XG4gIH0pO1xufVxuXG5Tb3J0YWJsZS5tb3VudChuZXcgQXV0b1Njcm9sbFBsdWdpbigpKTtcblNvcnRhYmxlLm1vdW50KFJlbW92ZSwgUmV2ZXJ0KTtcblxuZXhwb3J0IGRlZmF1bHQgU29ydGFibGU7XG5leHBvcnQgeyBNdWx0aURyYWdQbHVnaW4gYXMgTXVsdGlEcmFnLCBTb3J0YWJsZSwgU3dhcFBsdWdpbiBhcyBTd2FwIH07XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckAyLjAuMF93ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDUuMi43X3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vdnVlLWxvYWRlckAxNi44LjNfQHZ1ZStjb21waWxlci1zZmNAMy41LjE2X3Z1ZUAzLjUuMTZfdHlwZXNjcmlwdEA1LjguM19fd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Bvc3Rjc3MtbG9hZGVyQDYuMi4xX3Bvc3Rjc3NAOC41LjRfd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2Fzcy1sb2FkZXJAMTYuMC41X3Nhc3NAMS44OS4yX3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Z1ZS1sb2FkZXJAMTYuOC4zX0B2dWUrY29tcGlsZXItc2ZjQDMuNS4xNl92dWVAMy41LjE2X3R5cGVzY3JpcHRANS44LjNfX3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTGF5ZXJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg4MDc0YmYyJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDIuMC4wX3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANS4yLjdfd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcG9zdGNzcy1sb2FkZXJANi4yLjFfcG9zdGNzc0A4LjUuNF93ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zYXNzLWxvYWRlckAxNi4wLjVfc2Fzc0AxLjg5LjJfd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vdnVlLWxvYWRlckAxNi44LjNfQHZ1ZStjb21waWxlci1zZmNAMy41LjE2X3Z1ZUAzLjUuMTZfdHlwZXNjcmlwdEA1LjguM19fd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9TZWFyY2gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDkxZDcxMjYmbGFuZz1zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJAMi4wLjBfd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA1LjIuN193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Z1ZS1sb2FkZXJAMTYuOC4zX0B2dWUrY29tcGlsZXItc2ZjQDMuNS4xNl92dWVAMy41LjE2X3R5cGVzY3JpcHRANS44LjNfX3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9wb3N0Y3NzLWxvYWRlckA2LjIuMV9wb3N0Y3NzQDguNS40X3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Nhc3MtbG9hZGVyQDE2LjAuNV9zYXNzQDEuODkuMl93ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1N0b3JlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEwMTE3NjJjJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInZ1ZVwiKSwgcmVxdWlyZShcInNvcnRhYmxlanNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoWywgXCJzb3J0YWJsZWpzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInZ1ZWRyYWdnYWJsZVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInZ1ZVwiKSwgcmVxdWlyZShcInNvcnRhYmxlanNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInZ1ZWRyYWdnYWJsZVwiXSA9IGZhY3Rvcnkocm9vdFtcIlZ1ZVwiXSwgcm9vdFtcIlNvcnRhYmxlXCJdKTtcbn0pKCh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcyksIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzhiYmZfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9hMzUyX18pIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiZmIxNVwiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIwMGVlXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciB3ZWxsS25vd25TeW1ib2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYjYyMlwiKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgdGVzdCA9IHt9O1xuXG50ZXN0W1RPX1NUUklOR19UQUddID0gJ3onO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZyh0ZXN0KSA9PT0gJ1tvYmplY3Qgel0nO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjAzNjZcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGFGdW5jdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oXCIxYzBiXCIpO1xuXG4vLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQpO1xuICAgIH07XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjA1N2ZcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIHRvSW5kZXhlZE9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oXCJmYzZhXCIpO1xudmFyIG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMjQxY1wiKS5mO1xuXG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nXG4gICAgPyBnZXRXaW5kb3dOYW1lcyhpdClcbiAgICA6IG5hdGl2ZUdldE93blByb3BlcnR5TmFtZXModG9JbmRleGVkT2JqZWN0KGl0KSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjA2Y2ZcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIERFU0NSSVBUT1JTID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjgzYWJcIik7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZDFlN1wiKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNWM2Y1wiKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZmM2YVwiKTtcbnZhciB0b1ByaW1pdGl2ZSA9IF9fd2VicGFja19yZXF1aXJlX18oXCJjMDRlXCIpO1xudmFyIGhhcyA9IF9fd2VicGFja19yZXF1aXJlX18oXCI1MTM1XCIpO1xudmFyIElFOF9ET01fREVGSU5FID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjBjZmJcIik7XG5cbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiMGNmYlwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgREVTQ1JJUFRPUlMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiODNhYlwiKTtcbnZhciBmYWlscyA9IF9fd2VicGFja19yZXF1aXJlX18oXCJkMDM5XCIpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiY2MxMlwiKTtcblxuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT0gNztcbn0pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjEzZDVcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciAkID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjIzZTdcIik7XG52YXIgJHJlZHVjZSA9IF9fd2VicGFja19yZXF1aXJlX18oXCJkNThmXCIpLmxlZnQ7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IF9fd2VicGFja19yZXF1aXJlX18oXCJhNjQwXCIpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImFlNDBcIik7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgncmVkdWNlJyk7XG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgncmVkdWNlJywgeyAxOiAwIH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUucmVkdWNlXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhU1RSSUNUX01FVEhPRCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICByZWR1Y2U6IGZ1bmN0aW9uIHJlZHVjZShjYWxsYmFja2ZuIC8qICwgaW5pdGlhbFZhbHVlICovKSB7XG4gICAgcmV0dXJuICRyZWR1Y2UodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIxNGMzXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBjbGFzc29mID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImM2YjZcIik7XG52YXIgcmVnZXhwRXhlYyA9IF9fd2VicGFja19yZXF1aXJlX18oXCI5MjYzXCIpO1xuXG4vLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHBleGVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChSLCBTKSB7XG4gIHZhciBleGVjID0gUi5leGVjO1xuICBpZiAodHlwZW9mIGV4ZWMgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgcmVzdWx0ID0gZXhlYy5jYWxsKFIsIFMpO1xuICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAnb2JqZWN0Jykge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdSZWdFeHAgZXhlYyBtZXRob2QgcmV0dXJuZWQgc29tZXRoaW5nIG90aGVyIHRoYW4gYW4gT2JqZWN0IG9yIG51bGwnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGlmIChjbGFzc29mKFIpICE9PSAnUmVnRXhwJykge1xuICAgIHRocm93IFR5cGVFcnJvcignUmVnRXhwI2V4ZWMgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlcicpO1xuICB9XG5cbiAgcmV0dXJuIHJlZ2V4cEV4ZWMuY2FsbChSLCBTKTtcbn07XG5cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIxNTliXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZGE4NFwiKTtcbnZhciBET01JdGVyYWJsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZmRiY1wiKTtcbnZhciBmb3JFYWNoID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjE3YzJcIik7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjkxMTJcIik7XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbQ09MTEVDVElPTl9OQU1FXTtcbiAgdmFyIENvbGxlY3Rpb25Qcm90b3R5cGUgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XG4gIH1cbn1cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIxN2MyXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgJGZvckVhY2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYjcyN1wiKS5mb3JFYWNoO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYTY0MFwiKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IF9fd2VicGFja19yZXF1aXJlX18oXCJhZTQwXCIpO1xuXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2ZvckVhY2gnKTtcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdmb3JFYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxubW9kdWxlLmV4cG9ydHMgPSAoIVNUUklDVF9NRVRIT0QgfHwgIVVTRVNfVE9fTEVOR1RIKSA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbn0gOiBbXS5mb3JFYWNoO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjFiZTRcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGdldEJ1aWx0SW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZDA2NlwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdkb2N1bWVudCcsICdkb2N1bWVudEVsZW1lbnQnKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIxYzBiXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IFR5cGVFcnJvcihTdHJpbmcoaXQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiMWM3ZVwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgd2VsbEtub3duU3ltYm9sID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImI2MjJcIik7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIGNhbGxlZCA9IDA7XG4gIHZhciBpdGVyYXRvcldpdGhSZXR1cm4gPSB7XG4gICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHsgZG9uZTogISFjYWxsZWQrKyB9O1xuICAgIH0sXG4gICAgJ3JldHVybic6IGZ1bmN0aW9uICgpIHtcbiAgICAgIFNBRkVfQ0xPU0lORyA9IHRydWU7XG4gICAgfVxuICB9O1xuICBpdGVyYXRvcldpdGhSZXR1cm5bSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKGl0ZXJhdG9yV2l0aFJldHVybiwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgU0tJUF9DTE9TSU5HKSB7XG4gIGlmICghU0tJUF9DTE9TSU5HICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIElURVJBVElPTl9TVVBQT1JUID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIG9iamVjdCA9IHt9O1xuICAgIG9iamVjdFtJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogSVRFUkFUSU9OX1NVUFBPUlQgPSB0cnVlIH07XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgICBleGVjKG9iamVjdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIElURVJBVElPTl9TVVBQT1JUO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIxZDgwXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjFkZGVcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGZhaWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImQwMzlcIik7XG52YXIgd2VsbEtub3duU3ltYm9sID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImI2MjJcIik7XG52YXIgVjhfVkVSU0lPTiA9IF9fd2VicGFja19yZXF1aXJlX18oXCIyZDAwXCIpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICAvLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3N1xuICByZXR1cm4gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFycmF5LmNvbnN0cnVjdG9yID0ge307XG4gICAgY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBmb286IDEgfTtcbiAgICB9O1xuICAgIHJldHVybiBhcnJheVtNRVRIT0RfTkFNRV0oQm9vbGVhbikuZm9vICE9PSAxO1xuICB9KTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiMjNjYlwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgdG9JbnRlZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImE2OTFcIik7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIyM2U3XCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZGE4NFwiKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMDZjZlwiKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IF9fd2VicGFja19yZXF1aXJlX18oXCI5MTEyXCIpO1xudmFyIHJlZGVmaW5lID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjZlZWJcIik7XG52YXIgc2V0R2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImNlNGVcIik7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IF9fd2VicGFja19yZXF1aXJlX18oXCJlODkzXCIpO1xudmFyIGlzRm9yY2VkID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjk0Y2FcIik7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMubm9UYXJnZXRHZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdIHx8IHNldEdsb2JhbChUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSAoZ2xvYmFsW1RBUkdFVF0gfHwge30pLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLm5vVGFyZ2V0R2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIyNDFjXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiY2E4NFwiKTtcbnZhciBlbnVtQnVnS2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oXCI3ODM5XCIpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIyNWYwXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgcmVkZWZpbmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNmVlYlwiKTtcbnZhciBhbk9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI4MjVhXCIpO1xudmFyIGZhaWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImQwMzlcIik7XG52YXIgZmxhZ3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYWQ2ZFwiKTtcblxudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgUmVnRXhwUHJvdG90eXBlID0gUmVnRXhwLnByb3RvdHlwZTtcbnZhciBuYXRpdmVUb1N0cmluZyA9IFJlZ0V4cFByb3RvdHlwZVtUT19TVFJJTkddO1xuXG52YXIgTk9UX0dFTkVSSUMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IHJldHVybiBuYXRpdmVUb1N0cmluZy5jYWxsKHsgc291cmNlOiAnYScsIGZsYWdzOiAnYicgfSkgIT0gJy9hL2InOyB9KTtcbi8vIEZGNDQtIFJlZ0V4cCN0b1N0cmluZyBoYXMgYSB3cm9uZyBuYW1lXG52YXIgSU5DT1JSRUNUX05BTUUgPSBuYXRpdmVUb1N0cmluZy5uYW1lICE9IFRPX1NUUklORztcblxuLy8gYFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuaWYgKE5PVF9HRU5FUklDIHx8IElOQ09SUkVDVF9OQU1FKSB7XG4gIHJlZGVmaW5lKFJlZ0V4cC5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgdmFyIFIgPSBhbk9iamVjdCh0aGlzKTtcbiAgICB2YXIgcCA9IFN0cmluZyhSLnNvdXJjZSk7XG4gICAgdmFyIHJmID0gUi5mbGFncztcbiAgICB2YXIgZiA9IFN0cmluZyhyZiA9PT0gdW5kZWZpbmVkICYmIFIgaW5zdGFuY2VvZiBSZWdFeHAgJiYgISgnZmxhZ3MnIGluIFJlZ0V4cFByb3RvdHlwZSkgPyBmbGFncy5jYWxsKFIpIDogcmYpO1xuICAgIHJldHVybiAnLycgKyBwICsgJy8nICsgZjtcbiAgfSwgeyB1bnNhZmU6IHRydWUgfSk7XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiMmNhMFwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyICQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMjNlN1wiKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMDZjZlwiKS5mO1xudmFyIHRvTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjUwYzRcIik7XG52YXIgbm90QVJlZ0V4cCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI1YTM0XCIpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMWQ4MFwiKTtcbnZhciBjb3JyZWN0SXNSZWdFeHBMb2dpYyA9IF9fd2VicGFja19yZXF1aXJlX18oXCJhYjEzXCIpO1xudmFyIElTX1BVUkUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYzQzMFwiKTtcblxudmFyIG5hdGl2ZVN0YXJ0c1dpdGggPSAnJy5zdGFydHNXaXRoO1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG52YXIgQ09SUkVDVF9JU19SRUdFWFBfTE9HSUMgPSBjb3JyZWN0SXNSZWdFeHBMb2dpYygnc3RhcnRzV2l0aCcpO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvcHVsbC83MDJcbnZhciBNRE5fUE9MWUZJTExfQlVHID0gIUlTX1BVUkUgJiYgIUNPUlJFQ1RfSVNfUkVHRVhQX0xPR0lDICYmICEhZnVuY3Rpb24gKCkge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihTdHJpbmcucHJvdG90eXBlLCAnc3RhcnRzV2l0aCcpO1xuICByZXR1cm4gZGVzY3JpcHRvciAmJiAhZGVzY3JpcHRvci53cml0YWJsZTtcbn0oKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnN0YXJ0c3dpdGhcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhTUROX1BPTFlGSUxMX0JVRyAmJiAhQ09SUkVDVF9JU19SRUdFWFBfTE9HSUMgfSwge1xuICBzdGFydHNXaXRoOiBmdW5jdGlvbiBzdGFydHNXaXRoKHNlYXJjaFN0cmluZyAvKiAsIHBvc2l0aW9uID0gMCAqLykge1xuICAgIHZhciB0aGF0ID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpO1xuICAgIG5vdEFSZWdFeHAoc2VhcmNoU3RyaW5nKTtcbiAgICB2YXIgaW5kZXggPSB0b0xlbmd0aChtaW4oYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIHRoYXQubGVuZ3RoKSk7XG4gICAgdmFyIHNlYXJjaCA9IFN0cmluZyhzZWFyY2hTdHJpbmcpO1xuICAgIHJldHVybiBuYXRpdmVTdGFydHNXaXRoXG4gICAgICA/IG5hdGl2ZVN0YXJ0c1dpdGguY2FsbCh0aGF0LCBzZWFyY2gsIGluZGV4KVxuICAgICAgOiB0aGF0LnNsaWNlKGluZGV4LCBpbmRleCArIHNlYXJjaC5sZW5ndGgpID09PSBzZWFyY2g7XG4gIH1cbn0pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjJkMDBcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oXCJkYTg0XCIpO1xudmFyIHVzZXJBZ2VudCA9IF9fd2VicGFja19yZXF1aXJlX18oXCIzNDJmXCIpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIHZlcnNpb24gPSBtYXRjaFswXSArIG1hdGNoWzFdO1xufSBlbHNlIGlmICh1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSBtYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb24gJiYgK3ZlcnNpb247XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiMzQyZlwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZ2V0QnVpbHRJbiA9IF9fd2VicGFja19yZXF1aXJlX18oXCJkMDY2XCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ25hdmlnYXRvcicsICd1c2VyQWdlbnQnKSB8fCAnJztcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIzNWExXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBjbGFzc29mID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImY1ZGZcIik7XG52YXIgSXRlcmF0b3JzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjNmOGNcIik7XG52YXIgd2VsbEtub3duU3ltYm9sID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImI2MjJcIik7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIzN2U4XCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBERVNDUklQVE9SUyA9IF9fd2VicGFja19yZXF1aXJlX18oXCI4M2FiXCIpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjliZjJcIik7XG52YXIgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiODI1YVwiKTtcbnZhciBvYmplY3RLZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImRmNzVcIik7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSA9IGtleXNbaW5kZXgrK10sIFByb3BlcnRpZXNba2V5XSk7XG4gIHJldHVybiBPO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIzYmJlXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI4NjFkXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSAmJiBpdCAhPT0gbnVsbCkge1xuICAgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IHNldCBcIiArIFN0cmluZyhpdCkgKyAnIGFzIGEgcHJvdG90eXBlJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIzY2EzXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY2hhckF0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjY1NDdcIikuY2hhckF0O1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNjlmM1wiKTtcbnZhciBkZWZpbmVJdGVyYXRvciA9IF9fd2VicGFja19yZXF1aXJlX18oXCI3ZGQwXCIpO1xuXG52YXIgU1RSSU5HX0lURVJBVE9SID0gJ1N0cmluZyBJdGVyYXRvcic7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihTVFJJTkdfSVRFUkFUT1IpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLUBAaXRlcmF0b3JcbmRlZmluZUl0ZXJhdG9yKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICB0eXBlOiBTVFJJTkdfSVRFUkFUT1IsXG4gICAgc3RyaW5nOiBTdHJpbmcoaXRlcmF0ZWQpLFxuICAgIGluZGV4OiAwXG4gIH0pO1xuLy8gYCVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy0lc3RyaW5naXRlcmF0b3Jwcm90b3R5cGUlLm5leHRcbn0sIGZ1bmN0aW9uIG5leHQoKSB7XG4gIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gIHZhciBzdHJpbmcgPSBzdGF0ZS5zdHJpbmc7XG4gIHZhciBpbmRleCA9IHN0YXRlLmluZGV4O1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBzdHJpbmcubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gY2hhckF0KHN0cmluZywgaW5kZXgpO1xuICBzdGF0ZS5pbmRleCArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjNmOGNcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCI0MTYwXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgJCA9IF9fd2VicGFja19yZXF1aXJlX18oXCIyM2U3XCIpO1xudmFyIGZvckVhY2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMTdjMlwiKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBbXS5mb3JFYWNoICE9IGZvckVhY2ggfSwge1xuICBmb3JFYWNoOiBmb3JFYWNoXG59KTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCI0MjhmXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZGE4NFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnbG9iYWw7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiNDRhZFwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZmFpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZDAzOVwiKTtcbnZhciBjbGFzc29mID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImM2YjZcIik7XG5cbnZhciBzcGxpdCA9ICcnLnNwbGl0O1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICByZXR1cm4gIU9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xufSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoaXQpID09ICdTdHJpbmcnID8gc3BsaXQuY2FsbChpdCwgJycpIDogT2JqZWN0KGl0KTtcbn0gOiBPYmplY3Q7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiNDRkMlwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgd2VsbEtub3duU3ltYm9sID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImI2MjJcIik7XG52YXIgY3JlYXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjdjNzNcIik7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiOWJmMlwiKTtcblxudmFyIFVOU0NPUEFCTEVTID0gd2VsbEtub3duU3ltYm9sKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG90eXBlID0gQXJyYXkucHJvdG90eXBlO1xuXG4vLyBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5pZiAoQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkge1xuICBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKEFycmF5UHJvdG90eXBlLCBVTlNDT1BBQkxFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogY3JlYXRlKG51bGwpXG4gIH0pO1xufVxuXG4vLyBhZGQgYSBrZXkgdG8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCI0NGU3XCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI4NjFkXCIpO1xudmFyIGNsYXNzb2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYzZiNlwiKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYjYyMlwiKTtcblxudmFyIE1BVENIID0gd2VsbEtub3duU3ltYm9sKCdtYXRjaCcpO1xuXG4vLyBgSXNSZWdFeHBgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNyZWdleHBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpc1JlZ0V4cDtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IGNsYXNzb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiNDkzMFwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZmFpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZDAzOVwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHJldHVybiAhU3RyaW5nKFN5bWJvbCgpKTtcbn0pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjRkNjRcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIHRvSW5kZXhlZE9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oXCJmYzZhXCIpO1xudmFyIHRvTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjUwYzRcIik7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjIzY2JcIik7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjRkZTRcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciAkID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjIzZTdcIik7XG52YXIgJGZpbHRlciA9IF9fd2VicGFja19yZXF1aXJlX18oXCJiNzI3XCIpLmZpbHRlcjtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjFkZGVcIik7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYWU0MFwiKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdmaWx0ZXInKTtcbi8vIEVkZ2UgMTQtIGlzc3VlXG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnZmlsdGVyJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkZmlsdGVyKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiNGRmNFwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGJpbmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMDM2NlwiKTtcbnZhciB0b09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI3YjBiXCIpO1xudmFyIGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiOWJkZFwiKTtcbnZhciBpc0FycmF5SXRlcmF0b3JNZXRob2QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZTk1YVwiKTtcbnZhciB0b0xlbmd0aCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI1MGM0XCIpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjg0MThcIik7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMzVhMVwiKTtcblxuLy8gYEFycmF5LmZyb21gIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkuZnJvbVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIG1hcGZuID0gYXJndW1lbnRzTGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICB2YXIgaXRlcmF0b3JNZXRob2QgPSBnZXRJdGVyYXRvck1ldGhvZChPKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvciwgbmV4dCwgdmFsdWU7XG4gIGlmIChtYXBwaW5nKSBtYXBmbiA9IGJpbmQobWFwZm4sIGFyZ3VtZW50c0xlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAvLyBpZiB0aGUgdGFyZ2V0IGlzIG5vdCBpdGVyYWJsZSBvciBpdCdzIGFuIGFycmF5IHdpdGggdGhlIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2UgYSBzaW1wbGUgY2FzZVxuICBpZiAoaXRlcmF0b3JNZXRob2QgIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlcmF0b3JNZXRob2QpKSkge1xuICAgIGl0ZXJhdG9yID0gaXRlcmF0b3JNZXRob2QuY2FsbChPKTtcbiAgICBuZXh0ID0gaXRlcmF0b3IubmV4dDtcbiAgICByZXN1bHQgPSBuZXcgQygpO1xuICAgIGZvciAoOyEoc3RlcCA9IG5leHQuY2FsbChpdGVyYXRvcikpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgIHZhbHVlID0gbWFwcGluZyA/IGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWU7XG4gICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICByZXN1bHQgPSBuZXcgQyhsZW5ndGgpO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICB2YWx1ZSA9IG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF07XG4gICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiNGZhZFwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgJCA9IF9fd2VicGFja19yZXF1aXJlX18oXCIyM2U3XCIpO1xudmFyICRlbnRyaWVzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjZmNTNcIikuZW50cmllcztcblxuLy8gYE9iamVjdC5lbnRyaWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5lbnRyaWVzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSB9LCB7XG4gIGVudHJpZXM6IGZ1bmN0aW9uIGVudHJpZXMoTykge1xuICAgIHJldHVybiAkZW50cmllcyhPKTtcbiAgfVxufSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiNTBjNFwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgdG9JbnRlZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImE2OTFcIik7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gYXJndW1lbnQgPiAwID8gbWluKHRvSW50ZWdlcihhcmd1bWVudCksIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCI1MTM1XCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCI1MzE5XCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZDc4NFwiKTtcbnZhciBhbk9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI4MjVhXCIpO1xudmFyIHRvT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjdiMGJcIik7XG52YXIgdG9MZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNTBjNFwiKTtcbnZhciB0b0ludGVnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYTY5MVwiKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjFkODBcIik7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjhhYTVcIik7XG52YXIgcmVnRXhwRXhlYyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIxNGMzXCIpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTID0gL1xcJChbJCYnYF18XFxkXFxkP3w8W14+XSo+KS9nO1xudmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEID0gL1xcJChbJCYnYF18XFxkXFxkPykvZztcblxudmFyIG1heWJlVG9TdHJpbmcgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyBpdCA6IFN0cmluZyhpdCk7XG59O1xuXG4vLyBAQHJlcGxhY2UgbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdyZXBsYWNlJywgMiwgZnVuY3Rpb24gKFJFUExBQ0UsIG5hdGl2ZVJlcGxhY2UsIG1heWJlQ2FsbE5hdGl2ZSwgcmVhc29uKSB7XG4gIHZhciBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSA9IHJlYXNvbi5SRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRTtcbiAgdmFyIFJFUExBQ0VfS0VFUFNfJDAgPSByZWFzb24uUkVQTEFDRV9LRUVQU18kMDtcbiAgdmFyIFVOU0FGRV9TVUJTVElUVVRFID0gUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkUgPyAnJCcgOiAnJDAnO1xuXG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUucmVwbGFjZWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlXG4gICAgZnVuY3Rpb24gcmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgcmVwbGFjZXIgPSBzZWFyY2hWYWx1ZSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWFyY2hWYWx1ZVtSRVBMQUNFXTtcbiAgICAgIHJldHVybiByZXBsYWNlciAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gcmVwbGFjZXIuY2FsbChzZWFyY2hWYWx1ZSwgTywgcmVwbGFjZVZhbHVlKVxuICAgICAgICA6IG5hdGl2ZVJlcGxhY2UuY2FsbChTdHJpbmcoTyksIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXWAgbWV0aG9kXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHJlcGxhY2VcbiAgICBmdW5jdGlvbiAocmVnZXhwLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgKCFSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSAmJiBSRVBMQUNFX0tFRVBTXyQwKSB8fFxuICAgICAgICAodHlwZW9mIHJlcGxhY2VWYWx1ZSA9PT0gJ3N0cmluZycgJiYgcmVwbGFjZVZhbHVlLmluZGV4T2YoVU5TQUZFX1NVQlNUSVRVVEUpID09PSAtMSlcbiAgICAgICkge1xuICAgICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVJlcGxhY2UsIHJlZ2V4cCwgdGhpcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG5cbiAgICAgIHZhciBmdW5jdGlvbmFsUmVwbGFjZSA9IHR5cGVvZiByZXBsYWNlVmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgICBpZiAoIWZ1bmN0aW9uYWxSZXBsYWNlKSByZXBsYWNlVmFsdWUgPSBTdHJpbmcocmVwbGFjZVZhbHVlKTtcblxuICAgICAgdmFyIGdsb2JhbCA9IHJ4Lmdsb2JhbDtcbiAgICAgIGlmIChnbG9iYWwpIHtcbiAgICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIH1cbiAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIGJyZWFrO1xuXG4gICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICBpZiAoIWdsb2JhbCkgYnJlYWs7XG5cbiAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhY2N1bXVsYXRlZFJlc3VsdCA9ICcnO1xuICAgICAgdmFyIG5leHRTb3VyY2VQb3NpdGlvbiA9IDA7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0c1tpXTtcblxuICAgICAgICB2YXIgbWF0Y2hlZCA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBtYXgobWluKHRvSW50ZWdlcihyZXN1bHQuaW5kZXgpLCBTLmxlbmd0aCksIDApO1xuICAgICAgICB2YXIgY2FwdHVyZXMgPSBbXTtcbiAgICAgICAgLy8gTk9URTogVGhpcyBpcyBlcXVpdmFsZW50IHRvXG4gICAgICAgIC8vICAgY2FwdHVyZXMgPSByZXN1bHQuc2xpY2UoMSkubWFwKG1heWJlVG9TdHJpbmcpXG4gICAgICAgIC8vIGJ1dCBmb3Igc29tZSByZWFzb24gYG5hdGl2ZVNsaWNlLmNhbGwocmVzdWx0LCAxLCByZXN1bHQubGVuZ3RoKWAgKGNhbGxlZCBpblxuICAgICAgICAvLyB0aGUgc2xpY2UgcG9seWZpbGwgd2hlbiBzbGljaW5nIG5hdGl2ZSBhcnJheXMpIFwiZG9lc24ndCB3b3JrXCIgaW4gc2FmYXJpIDkgYW5kXG4gICAgICAgIC8vIGNhdXNlcyBhIGNyYXNoIChodHRwczovL3Bhc3RlYmluLmNvbS9OMjFRemVRQSkgd2hlbiB0cnlpbmcgdG8gZGVidWcgaXQuXG4gICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgcmVzdWx0Lmxlbmd0aDsgaisrKSBjYXB0dXJlcy5wdXNoKG1heWJlVG9TdHJpbmcocmVzdWx0W2pdKSk7XG4gICAgICAgIHZhciBuYW1lZENhcHR1cmVzID0gcmVzdWx0Lmdyb3VwcztcbiAgICAgICAgaWYgKGZ1bmN0aW9uYWxSZXBsYWNlKSB7XG4gICAgICAgICAgdmFyIHJlcGxhY2VyQXJncyA9IFttYXRjaGVkXS5jb25jYXQoY2FwdHVyZXMsIHBvc2l0aW9uLCBTKTtcbiAgICAgICAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSByZXBsYWNlckFyZ3MucHVzaChuYW1lZENhcHR1cmVzKTtcbiAgICAgICAgICB2YXIgcmVwbGFjZW1lbnQgPSBTdHJpbmcocmVwbGFjZVZhbHVlLmFwcGx5KHVuZGVmaW5lZCwgcmVwbGFjZXJBcmdzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBnZXRTdWJzdGl0dXRpb24obWF0Y2hlZCwgUywgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbiA+PSBuZXh0U291cmNlUG9zaXRpb24pIHtcbiAgICAgICAgICBhY2N1bXVsYXRlZFJlc3VsdCArPSBTLnNsaWNlKG5leHRTb3VyY2VQb3NpdGlvbiwgcG9zaXRpb24pICsgcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgbmV4dFNvdXJjZVBvc2l0aW9uID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY3VtdWxhdGVkUmVzdWx0ICsgUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24pO1xuICAgIH1cbiAgXTtcblxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1nZXRzdWJzdGl0dXRpb25cbiAgZnVuY3Rpb24gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIHN0ciwgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlbWVudCkge1xuICAgIHZhciB0YWlsUG9zID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICB2YXIgbSA9IGNhcHR1cmVzLmxlbmd0aDtcbiAgICB2YXIgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEO1xuICAgIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5hbWVkQ2FwdHVyZXMgPSB0b09iamVjdChuYW1lZENhcHR1cmVzKTtcbiAgICAgIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MUztcbiAgICB9XG4gICAgcmV0dXJuIG5hdGl2ZVJlcGxhY2UuY2FsbChyZXBsYWNlbWVudCwgc3ltYm9scywgZnVuY3Rpb24gKG1hdGNoLCBjaCkge1xuICAgICAgdmFyIGNhcHR1cmU7XG4gICAgICBzd2l0Y2ggKGNoLmNoYXJBdCgwKSkge1xuICAgICAgICBjYXNlICckJzogcmV0dXJuICckJztcbiAgICAgICAgY2FzZSAnJic6IHJldHVybiBtYXRjaGVkO1xuICAgICAgICBjYXNlICdgJzogcmV0dXJuIHN0ci5zbGljZSgwLCBwb3NpdGlvbik7XG4gICAgICAgIGNhc2UgXCInXCI6IHJldHVybiBzdHIuc2xpY2UodGFpbFBvcyk7XG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgIGNhcHR1cmUgPSBuYW1lZENhcHR1cmVzW2NoLnNsaWNlKDEsIC0xKV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IC8vIFxcZFxcZD9cbiAgICAgICAgICB2YXIgbiA9ICtjaDtcbiAgICAgICAgICBpZiAobiA9PT0gMCkgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgIGlmIChuID4gbSkge1xuICAgICAgICAgICAgdmFyIGYgPSBmbG9vcihuIC8gMTApO1xuICAgICAgICAgICAgaWYgKGYgPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgIGlmIChmIDw9IG0pIHJldHVybiBjYXB0dXJlc1tmIC0gMV0gPT09IHVuZGVmaW5lZCA/IGNoLmNoYXJBdCgxKSA6IGNhcHR1cmVzW2YgLSAxXSArIGNoLmNoYXJBdCgxKTtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FwdHVyZSA9IGNhcHR1cmVzW24gLSAxXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYXB0dXJlID09PSB1bmRlZmluZWQgPyAnJyA6IGNhcHR1cmU7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjU2OTJcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIElTX1BVUkUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYzQzMFwiKTtcbnZhciBzdG9yZSA9IF9fd2VicGFja19yZXF1aXJlX18oXCJjNmNkXCIpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuNi41JyxcbiAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDIwIERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiNTZlZlwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZ2V0QnVpbHRJbiA9IF9fd2VicGFja19yZXF1aXJlX18oXCJkMDY2XCIpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMjQxY1wiKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNzQxOFwiKTtcbnZhciBhbk9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI4MjVhXCIpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCI1YTM0XCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBpc1JlZ0V4cCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI0NGU3XCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNSZWdFeHAoaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFwiVGhlIG1ldGhvZCBkb2Vzbid0IGFjY2VwdCByZWd1bGFyIGV4cHJlc3Npb25zXCIpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiNWM2Y1wiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjVkYjdcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciAkID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjIzZTdcIik7XG52YXIgZmxhdHRlbkludG9BcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oXCJhMmJmXCIpO1xudmFyIHRvT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjdiMGJcIik7XG52YXIgdG9MZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNTBjNFwiKTtcbnZhciBhRnVuY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMWMwYlwiKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNjVmMFwiKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mbGF0TWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWZsYXRNYXBcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlIH0sIHtcbiAgZmxhdE1hcDogZnVuY3Rpb24gZmxhdE1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIHNvdXJjZUxlbiA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgQTtcbiAgICBhRnVuY3Rpb24oY2FsbGJhY2tmbik7XG4gICAgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICBBLmxlbmd0aCA9IGZsYXR0ZW5JbnRvQXJyYXkoQSwgTywgTywgc291cmNlTGVuLCAwLCAxLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjY1NDdcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIHRvSW50ZWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oXCJhNjkxXCIpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMWQ4MFwiKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUueyBjb2RlUG9pbnRBdCwgYXQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChDT05WRVJUX1RPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBwb3MpIHtcbiAgICB2YXIgUyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgdmFyIHBvc2l0aW9uID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIHNpemUgPSBTLmxlbmd0aDtcbiAgICB2YXIgZmlyc3QsIHNlY29uZDtcbiAgICBpZiAocG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHNpemUpIHJldHVybiBDT05WRVJUX1RPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGZpcnN0ID0gUy5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgICByZXR1cm4gZmlyc3QgPCAweEQ4MDAgfHwgZmlyc3QgPiAweERCRkYgfHwgcG9zaXRpb24gKyAxID09PSBzaXplXG4gICAgICB8fCAoc2Vjb25kID0gUy5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMSkpIDwgMHhEQzAwIHx8IHNlY29uZCA+IDB4REZGRlxuICAgICAgICA/IENPTlZFUlRfVE9fU1RSSU5HID8gUy5jaGFyQXQocG9zaXRpb24pIDogZmlyc3RcbiAgICAgICAgOiBDT05WRVJUX1RPX1NUUklORyA/IFMuc2xpY2UocG9zaXRpb24sIHBvc2l0aW9uICsgMikgOiAoZmlyc3QgLSAweEQ4MDAgPDwgMTApICsgKHNlY29uZCAtIDB4REMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5jb2RlcG9pbnRhdFxuICBjb2RlQXQ6IGNyZWF0ZU1ldGhvZChmYWxzZSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLmF0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvU3RyaW5nLnByb3RvdHlwZS5hdFxuICBjaGFyQXQ6IGNyZWF0ZU1ldGhvZCh0cnVlKVxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCI2NWYwXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI4NjFkXCIpO1xudmFyIGlzQXJyYXkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZThiNVwiKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYjYyMlwiKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxuLy8gYEFycmF5U3BlY2llc0NyZWF0ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheXNwZWNpZXNjcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsQXJyYXksIGxlbmd0aCkge1xuICB2YXIgQztcbiAgaWYgKGlzQXJyYXkob3JpZ2luYWxBcnJheSkpIHtcbiAgICBDID0gb3JpZ2luYWxBcnJheS5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgZWxzZSBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBuZXcgKEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQykobGVuZ3RoID09PSAwID8gMCA6IGxlbmd0aCk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjY5ZjNcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIE5BVElWRV9XRUFLX01BUCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI3ZjlhXCIpO1xudmFyIGdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oXCJkYTg0XCIpO1xudmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjg2MWRcIik7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjkxMTJcIik7XG52YXIgb2JqZWN0SGFzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjUxMzVcIik7XG52YXIgc2hhcmVkS2V5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImY3NzJcIik7XG52YXIgaGlkZGVuS2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oXCJkMDEyXCIpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCkge1xuICB2YXIgc3RvcmUgPSBuZXcgV2Vha01hcCgpO1xuICB2YXIgd21nZXQgPSBzdG9yZS5nZXQ7XG4gIHZhciB3bWhhcyA9IHN0b3JlLmhhcztcbiAgdmFyIHdtc2V0ID0gc3RvcmUuc2V0O1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgd21zZXQuY2FsbChzdG9yZSwgaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWdldC5jYWxsKHN0b3JlLCBpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWhhcy5jYWxsKHN0b3JlLCBpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gb2JqZWN0SGFzKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCI2ZWViXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZGE4NFwiKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiOTExMlwiKTtcbnZhciBoYXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNTEzNVwiKTtcbnZhciBzZXRHbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiY2U0ZVwiKTtcbnZhciBpbnNwZWN0U291cmNlID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjg5MjVcIik7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oXCI2OWYzXCIpO1xuXG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICB2YXIgdW5zYWZlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy51bnNhZmUgOiBmYWxzZTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMuZW51bWVyYWJsZSA6IGZhbHNlO1xuICB2YXIgbm9UYXJnZXRHZXQgPSBvcHRpb25zID8gISFvcHRpb25zLm5vVGFyZ2V0R2V0IDogZmFsc2U7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICh0eXBlb2Yga2V5ID09ICdzdHJpbmcnICYmICFoYXModmFsdWUsICduYW1lJykpIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCBrZXkpO1xuICAgIGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKS5zb3VyY2UgPSBURU1QTEFURS5qb2luKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyBrZXkgOiAnJyk7XG4gIH1cbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2Ugc2V0R2xvYmFsKGtleSwgdmFsdWUpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmICghdW5zYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgfSBlbHNlIGlmICghbm9UYXJnZXRHZXQgJiYgT1trZXldKSB7XG4gICAgc2ltcGxlID0gdHJ1ZTtcbiAgfVxuICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgZWxzZSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoTywga2V5LCB2YWx1ZSk7XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59KTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCI2ZjUzXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBERVNDUklQVE9SUyA9IF9fd2VicGFja19yZXF1aXJlX18oXCI4M2FiXCIpO1xudmFyIG9iamVjdEtleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZGY3NVwiKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZmM2YVwiKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IF9fd2VicGFja19yZXF1aXJlX18oXCJkMWU3XCIpLmY7XG5cbi8vIGBPYmplY3QueyBlbnRyaWVzLCB2YWx1ZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUT19FTlRSSUVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChpdCk7XG4gICAgdmFyIGtleXMgPSBvYmplY3RLZXlzKE8pO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGkpIHtcbiAgICAgIGtleSA9IGtleXNbaSsrXTtcbiAgICAgIGlmICghREVTQ1JJUFRPUlMgfHwgcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChPLCBrZXkpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFRPX0VOVFJJRVMgPyBba2V5LCBPW2tleV1dIDogT1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgT2JqZWN0LmVudHJpZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZW50cmllc1xuICBlbnRyaWVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBPYmplY3QudmFsdWVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnZhbHVlc1xuICB2YWx1ZXM6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiNzNkOVwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyB0aGlzIG1ldGhvZCB3YXMgYWRkZWQgdG8gdW5zY29wYWJsZXMgYWZ0ZXIgaW1wbGVtZW50YXRpb25cbi8vIGluIHBvcHVsYXIgZW5naW5lcywgc28gaXQncyBtb3ZlZCB0byBhIHNlcGFyYXRlIG1vZHVsZVxudmFyIGFkZFRvVW5zY29wYWJsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNDRkMlwiKTtcblxuYWRkVG9VbnNjb3BhYmxlcygnZmxhdE1hcCcpO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjc0MThcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCI3NDZmXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBwYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjQyOGZcIik7XG52YXIgaGFzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjUxMzVcIik7XG52YXIgd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oXCJlNTM4XCIpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjliZjJcIikuZjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTkFNRSkge1xuICB2YXIgU3ltYm9sID0gcGF0aC5TeW1ib2wgfHwgKHBhdGguU3ltYm9sID0ge30pO1xuICBpZiAoIWhhcyhTeW1ib2wsIE5BTUUpKSBkZWZpbmVQcm9wZXJ0eShTeW1ib2wsIE5BTUUsIHtcbiAgICB2YWx1ZTogd3JhcHBlZFdlbGxLbm93blN5bWJvbE1vZHVsZS5mKE5BTUUpXG4gIH0pO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCI3ODM5XCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjdiMGJcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMWQ4MFwiKTtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiN2M3M1wiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiODI1YVwiKTtcbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjM3ZThcIik7XG52YXIgZW51bUJ1Z0tleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNzgzOVwiKTtcbnZhciBoaWRkZW5LZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImQwMTJcIik7XG52YXIgaHRtbCA9IF9fd2VicGFja19yZXF1aXJlX18oXCIxYmU0XCIpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IF9fd2VicGFja19yZXF1aXJlX18oXCJjYzEyXCIpO1xudmFyIHNoYXJlZEtleSA9IF9fd2VicGFja19yZXF1aXJlX18oXCJmNzcyXCIpO1xuXG52YXIgR1QgPSAnPic7XG52YXIgTFQgPSAnPCc7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgU0NSSVBUID0gJ3NjcmlwdCc7XG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG5cbnZhciBFbXB0eUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG52YXIgc2NyaXB0VGFnID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgcmV0dXJuIExUICsgU0NSSVBUICsgR1QgKyBjb250ZW50ICsgTFQgKyAnLycgKyBTQ1JJUFQgKyBHVDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBBY3RpdmVYIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWCA9IGZ1bmN0aW9uIChhY3RpdmVYRG9jdW1lbnQpIHtcbiAgYWN0aXZlWERvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnJykpO1xuICBhY3RpdmVYRG9jdW1lbnQuY2xvc2UoKTtcbiAgdmFyIHRlbXAgPSBhY3RpdmVYRG9jdW1lbnQucGFyZW50V2luZG93Lk9iamVjdDtcbiAgYWN0aXZlWERvY3VtZW50ID0gbnVsbDsgLy8gYXZvaWQgbWVtb3J5IGxlYWtcbiAgcmV0dXJuIHRlbXA7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgdmFyIEpTID0gJ2phdmEnICsgU0NSSVBUICsgJzonO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy80NzVcbiAgaWZyYW1lLnNyYyA9IFN0cmluZyhKUyk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCdkb2N1bWVudC5GPU9iamVjdCcpKTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgcmV0dXJuIGlmcmFtZURvY3VtZW50LkY7XG59O1xuXG4vLyBDaGVjayBmb3IgZG9jdW1lbnQuZG9tYWluIGFuZCBhY3RpdmUgeCBzdXBwb3J0XG4vLyBObyBuZWVkIHRvIHVzZSBhY3RpdmUgeCBhcHByb2FjaCB3aGVuIGRvY3VtZW50LmRvbWFpbiBpcyBub3Qgc2V0XG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2lzc3Vlcy8xNTBcbi8vIHZhcmlhdGlvbiBvZiBodHRwczovL2dpdGh1Yi5jb20va2l0Y2FtYnJpZGdlL2VzNS1zaGltL2NvbW1pdC80ZjczOGFjMDY2MzQ2XG4vLyBhdm9pZCBJRSBHQyBidWdcbnZhciBhY3RpdmVYRG9jdW1lbnQ7XG52YXIgTnVsbFByb3RvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0ICovXG4gICAgYWN0aXZlWERvY3VtZW50ID0gZG9jdW1lbnQuZG9tYWluICYmIG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBpZ25vcmUgKi8gfVxuICBOdWxsUHJvdG9PYmplY3QgPSBhY3RpdmVYRG9jdW1lbnQgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgOiBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUoKTtcbiAgdmFyIGxlbmd0aCA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSBkZWxldGUgTnVsbFByb3RvT2JqZWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbbGVuZ3RoXV07XG4gIHJldHVybiBOdWxsUHJvdG9PYmplY3QoKTtcbn07XG5cbmhpZGRlbktleXNbSUVfUFJPVE9dID0gdHJ1ZTtcblxuLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmNyZWF0ZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5Q29uc3RydWN0b3IoKTtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IE51bGxQcm90b09iamVjdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCI3ZGQwXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgJCA9IF9fd2VicGFja19yZXF1aXJlX18oXCIyM2U3XCIpO1xudmFyIGNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiOWVkM1wiKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IF9fd2VicGFja19yZXF1aXJlX18oXCJlMTYzXCIpO1xudmFyIHNldFByb3RvdHlwZU9mID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImQyYmJcIik7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZDQ0ZVwiKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiOTExMlwiKTtcbnZhciByZWRlZmluZSA9IF9fd2VicGFja19yZXF1aXJlX18oXCI2ZWViXCIpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IF9fd2VicGFja19yZXF1aXJlX18oXCJiNjIyXCIpO1xudmFyIElTX1BVUkUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYzQzMFwiKTtcbnZhciBJdGVyYXRvcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiM2Y4Y1wiKTtcbnZhciBJdGVyYXRvcnNDb3JlID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImFlOTNcIik7XG5cbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IEl0ZXJhdG9yc0NvcmUuSXRlcmF0b3JQcm90b3R5cGU7XG52YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IEl0ZXJhdG9yc0NvcmUuQlVHR1lfU0FGQVJJX0lURVJBVE9SUztcbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xudmFyIEVOVFJJRVMgPSAnZW50cmllcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSXRlcmFibGUsIE5BTUUsIEl0ZXJhdG9yQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gIGNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IoSXRlcmF0b3JDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG5cbiAgdmFyIGdldEl0ZXJhdGlvbk1ldGhvZCA9IGZ1bmN0aW9uIChLSU5EKSB7XG4gICAgaWYgKEtJTkQgPT09IERFRkFVTFQgJiYgZGVmYXVsdEl0ZXJhdG9yKSByZXR1cm4gZGVmYXVsdEl0ZXJhdG9yO1xuICAgIGlmICghQlVHR1lfU0FGQVJJX0lURVJBVE9SUyAmJiBLSU5EIGluIEl0ZXJhYmxlUHJvdG90eXBlKSByZXR1cm4gSXRlcmFibGVQcm90b3R5cGVbS0lORF07XG4gICAgc3dpdGNoIChLSU5EKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgICAgY2FzZSBFTlRSSUVTOiByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMpOyB9O1xuICB9O1xuXG4gIHZhciBUT19TVFJJTkdfVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gZmFsc2U7XG4gIHZhciBJdGVyYWJsZVByb3RvdHlwZSA9IEl0ZXJhYmxlLnByb3RvdHlwZTtcbiAgdmFyIG5hdGl2ZUl0ZXJhdG9yID0gSXRlcmFibGVQcm90b3R5cGVbSVRFUkFUT1JdXG4gICAgfHwgSXRlcmFibGVQcm90b3R5cGVbJ0BAaXRlcmF0b3InXVxuICAgIHx8IERFRkFVTFQgJiYgSXRlcmFibGVQcm90b3R5cGVbREVGQVVMVF07XG4gIHZhciBkZWZhdWx0SXRlcmF0b3IgPSAhQlVHR1lfU0FGQVJJX0lURVJBVE9SUyAmJiBuYXRpdmVJdGVyYXRvciB8fCBnZXRJdGVyYXRpb25NZXRob2QoREVGQVVMVCk7XG4gIHZhciBhbnlOYXRpdmVJdGVyYXRvciA9IE5BTUUgPT0gJ0FycmF5JyA/IEl0ZXJhYmxlUHJvdG90eXBlLmVudHJpZXMgfHwgbmF0aXZlSXRlcmF0b3IgOiBuYXRpdmVJdGVyYXRvcjtcbiAgdmFyIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgbWV0aG9kcywgS0VZO1xuXG4gIC8vIGZpeCBuYXRpdmVcbiAgaWYgKGFueU5hdGl2ZUl0ZXJhdG9yKSB7XG4gICAgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoYW55TmF0aXZlSXRlcmF0b3IuY2FsbChuZXcgSXRlcmFibGUoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgaWYgKCFJU19QVVJFICYmIGdldFByb3RvdHlwZU9mKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSkgIT09IEl0ZXJhdG9yUHJvdG90eXBlKSB7XG4gICAgICAgIGlmIChzZXRQcm90b3R5cGVPZikge1xuICAgICAgICAgIHNldFByb3RvdHlwZU9mKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSXRlcmF0b3JQcm90b3R5cGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICBpZiAoSVNfUFVSRSkgSXRlcmF0b3JzW1RPX1NUUklOR19UQUddID0gcmV0dXJuVGhpcztcbiAgICB9XG4gIH1cblxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZBVUxUID09IFZBTFVFUyAmJiBuYXRpdmVJdGVyYXRvciAmJiBuYXRpdmVJdGVyYXRvci5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgPSB0cnVlO1xuICAgIGRlZmF1bHRJdGVyYXRvciA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5hdGl2ZUl0ZXJhdG9yLmNhbGwodGhpcyk7IH07XG4gIH1cblxuICAvLyBkZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghSVNfUFVSRSB8fCBGT1JDRUQpICYmIEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SXSAhPT0gZGVmYXVsdEl0ZXJhdG9yKSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEl0ZXJhYmxlUHJvdG90eXBlLCBJVEVSQVRPUiwgZGVmYXVsdEl0ZXJhdG9yKTtcbiAgfVxuICBJdGVyYXRvcnNbTkFNRV0gPSBkZWZhdWx0SXRlcmF0b3I7XG5cbiAgLy8gZXhwb3J0IGFkZGl0aW9uYWwgbWV0aG9kc1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IGdldEl0ZXJhdGlvbk1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gZGVmYXVsdEl0ZXJhdG9yIDogZ2V0SXRlcmF0aW9uTWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogZ2V0SXRlcmF0aW9uTWV0aG9kKEVOVFJJRVMpXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKEtFWSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoQlVHR1lfU0FGQVJJX0lURVJBVE9SUyB8fCBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgfHwgIShLRVkgaW4gSXRlcmFibGVQcm90b3R5cGUpKSB7XG4gICAgICAgIHJlZGVmaW5lKEl0ZXJhYmxlUHJvdG90eXBlLCBLRVksIG1ldGhvZHNbS0VZXSk7XG4gICAgICB9XG4gICAgfSBlbHNlICQoeyB0YXJnZXQ6IE5BTUUsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgfHwgSU5DT1JSRUNUX1ZBTFVFU19OQU1FIH0sIG1ldGhvZHMpO1xuICB9XG5cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjdmOWFcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oXCJkYTg0XCIpO1xudmFyIGluc3BlY3RTb3VyY2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiODkyNVwiKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoaW5zcGVjdFNvdXJjZShXZWFrTWFwKSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiODI1YVwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiODYxZFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xuICB9IHJldHVybiBpdDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiODNhYlwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZmFpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZDAzOVwiKTtcblxuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPSA3O1xufSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiODQxOFwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIHRvUHJpbWl0aXZlID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImMwNGVcIik7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiOWJmMlwiKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNWM2Y1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBwcm9wZXJ0eUtleSA9IHRvUHJpbWl0aXZlKGtleSk7XG4gIGlmIChwcm9wZXJ0eUtleSBpbiBvYmplY3QpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBwcm9wZXJ0eUtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W3Byb3BlcnR5S2V5XSA9IHZhbHVlO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCI4NjFkXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjg4NzVcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXywgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX187Ly8gYWRkYXB0ZWQgZnJvbSB0aGUgZG9jdW1lbnQuY3VycmVudFNjcmlwdCBwb2x5ZmlsbCBieSBBZGFtIE1pbGxlclxuLy8gTUlUIGxpY2Vuc2Vcbi8vIHNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2FtaWxsZXItZ2gvY3VycmVudFNjcmlwdC1wb2x5ZmlsbFxuXG4vLyBhZGRlZCBzdXBwb3J0IGZvciBGaXJlZm94IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE2MjA1MDVcblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0cnVlKSB7XG4gICAgIShfX1dFQlBBQ0tfQU1EX0RFRklORV9BUlJBWV9fID0gW10sIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9IChmYWN0b3J5KSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAodHlwZW9mIF9fV0VCUEFDS19BTURfREVGSU5FX0ZBQ1RPUllfXyA9PT0gJ2Z1bmN0aW9uJyA/XG5cdFx0XHRcdChfX1dFQlBBQ0tfQU1EX0RFRklORV9GQUNUT1JZX18uYXBwbHkoZXhwb3J0cywgX19XRUJQQUNLX0FNRF9ERUZJTkVfQVJSQVlfXykpIDogX19XRUJQQUNLX0FNRF9ERUZJTkVfRkFDVE9SWV9fKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuICB9IGVsc2Uge31cbn0odHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZ2V0Q3VycmVudFNjcmlwdCAoKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRvY3VtZW50LCAnY3VycmVudFNjcmlwdCcpXG4gICAgLy8gZm9yIGNocm9tZVxuICAgIGlmICghZGVzY3JpcHRvciAmJiAnY3VycmVudFNjcmlwdCcgaW4gZG9jdW1lbnQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdCkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmN1cnJlbnRTY3JpcHRcbiAgICB9XG5cbiAgICAvLyBmb3Igb3RoZXIgYnJvd3NlcnMgd2l0aCBuYXRpdmUgc3VwcG9ydCBmb3IgY3VycmVudFNjcmlwdFxuICAgIGlmIChkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZ2V0ICE9PSBnZXRDdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5jdXJyZW50U2NyaXB0XG4gICAgfVxuICBcbiAgICAvLyBJRSA4LTEwIHN1cHBvcnQgc2NyaXB0IHJlYWR5U3RhdGVcbiAgICAvLyBJRSAxMSsgJiBGaXJlZm94IHN1cHBvcnQgc3RhY2sgdHJhY2VcbiAgICB0cnkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIEZpbmQgdGhlIHNlY29uZCBtYXRjaCBmb3IgdGhlIFwiYXRcIiBzdHJpbmcgdG8gZ2V0IGZpbGUgc3JjIHVybCBmcm9tIHN0YWNrLlxuICAgICAgdmFyIGllU3RhY2tSZWdFeHAgPSAvLiphdCBbXihdKlxcKCguKik6KC4rKTooLispXFwpJC9pZyxcbiAgICAgICAgZmZTdGFja1JlZ0V4cCA9IC9AKFteQF0qKTooXFxkKyk6KFxcZCspXFxzKiQvaWcsXG4gICAgICAgIHN0YWNrRGV0YWlscyA9IGllU3RhY2tSZWdFeHAuZXhlYyhlcnIuc3RhY2spIHx8IGZmU3RhY2tSZWdFeHAuZXhlYyhlcnIuc3RhY2spLFxuICAgICAgICBzY3JpcHRMb2NhdGlvbiA9IChzdGFja0RldGFpbHMgJiYgc3RhY2tEZXRhaWxzWzFdKSB8fCBmYWxzZSxcbiAgICAgICAgbGluZSA9IChzdGFja0RldGFpbHMgJiYgc3RhY2tEZXRhaWxzWzJdKSB8fCBmYWxzZSxcbiAgICAgICAgY3VycmVudExvY2F0aW9uID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZi5yZXBsYWNlKGRvY3VtZW50LmxvY2F0aW9uLmhhc2gsICcnKSxcbiAgICAgICAgcGFnZVNvdXJjZSxcbiAgICAgICAgaW5saW5lU2NyaXB0U291cmNlUmVnRXhwLFxuICAgICAgICBpbmxpbmVTY3JpcHRTb3VyY2UsXG4gICAgICAgIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7IC8vIExpdmUgTm9kZUxpc3QgY29sbGVjdGlvblxuICBcbiAgICAgIGlmIChzY3JpcHRMb2NhdGlvbiA9PT0gY3VycmVudExvY2F0aW9uKSB7XG4gICAgICAgIHBhZ2VTb3VyY2UgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub3V0ZXJIVE1MO1xuICAgICAgICBpbmxpbmVTY3JpcHRTb3VyY2VSZWdFeHAgPSBuZXcgUmVnRXhwKCcoPzpbXlxcXFxuXSs/XFxcXG4pezAsJyArIChsaW5lIC0gMikgKyAnfVtePF0qPHNjcmlwdD4oW1xcXFxkXFxcXERdKj8pPFxcXFwvc2NyaXB0PltcXFxcZFxcXFxEXSonLCAnaScpO1xuICAgICAgICBpbmxpbmVTY3JpcHRTb3VyY2UgPSBwYWdlU291cmNlLnJlcGxhY2UoaW5saW5lU2NyaXB0U291cmNlUmVnRXhwLCAnJDEnKS50cmltKCk7XG4gICAgICB9XG4gIFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIElmIHJlYWR5IHN0YXRlIGlzIGludGVyYWN0aXZlLCByZXR1cm4gdGhlIHNjcmlwdCB0YWdcbiAgICAgICAgaWYgKHNjcmlwdHNbaV0ucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJykge1xuICAgICAgICAgIHJldHVybiBzY3JpcHRzW2ldO1xuICAgICAgICB9XG4gIFxuICAgICAgICAvLyBJZiBzcmMgbWF0Y2hlcywgcmV0dXJuIHRoZSBzY3JpcHQgdGFnXG4gICAgICAgIGlmIChzY3JpcHRzW2ldLnNyYyA9PT0gc2NyaXB0TG9jYXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gc2NyaXB0c1tpXTtcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8gSWYgaW5saW5lIHNvdXJjZSBtYXRjaGVzLCByZXR1cm4gdGhlIHNjcmlwdCB0YWdcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHNjcmlwdExvY2F0aW9uID09PSBjdXJyZW50TG9jYXRpb24gJiZcbiAgICAgICAgICBzY3JpcHRzW2ldLmlubmVySFRNTCAmJlxuICAgICAgICAgIHNjcmlwdHNbaV0uaW5uZXJIVE1MLnRyaW0oKSA9PT0gaW5saW5lU2NyaXB0U291cmNlXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiBzY3JpcHRzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgLy8gSWYgbm8gbWF0Y2gsIHJldHVybiBudWxsXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGdldEN1cnJlbnRTY3JpcHRcbn0pKTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCI4OTI1XCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBzdG9yZSA9IF9fd2VicGFja19yZXF1aXJlX18oXCJjNmNkXCIpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IEZ1bmN0aW9uLnRvU3RyaW5nO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKHR5cGVvZiBzdG9yZS5pbnNwZWN0U291cmNlICE9ICdmdW5jdGlvbicpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nLmNhbGwoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiOGFhNVwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNoYXJBdCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI2NTQ3XCIpLmNoYXJBdDtcblxuLy8gYEFkdmFuY2VTdHJpbmdJbmRleGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hZHZhbmNlc3RyaW5naW5kZXhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFMsIGluZGV4LCB1bmljb2RlKSB7XG4gIHJldHVybiBpbmRleCArICh1bmljb2RlID8gY2hhckF0KFMsIGluZGV4KS5sZW5ndGggOiAxKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiOGJiZlwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzhiYmZfXztcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiOTBlM1wiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIFN0cmluZyhrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyAoKytpZCArIHBvc3RmaXgpLnRvU3RyaW5nKDM2KTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiOTExMlwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgREVTQ1JJUFRPUlMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiODNhYlwiKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oXCI5YmYyXCIpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IF9fd2VicGFja19yZXF1aXJlX18oXCI1YzZjXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCI5MjYzXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgcmVnZXhwRmxhZ3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYWQ2ZFwiKTtcbnZhciBzdGlja3lIZWxwZXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjlmN2ZcIik7XG5cbnZhciBuYXRpdmVFeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xuLy8gVGhpcyBhbHdheXMgcmVmZXJzIHRvIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24sIGJlY2F1c2UgdGhlXG4vLyBTdHJpbmcjcmVwbGFjZSBwb2x5ZmlsbCB1c2VzIC4vZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYy5qcyxcbi8vIHdoaWNoIGxvYWRzIHRoaXMgZmlsZSBiZWZvcmUgcGF0Y2hpbmcgdGhlIG1ldGhvZC5cbnZhciBuYXRpdmVSZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xuXG52YXIgcGF0Y2hlZEV4ZWMgPSBuYXRpdmVFeGVjO1xuXG52YXIgVVBEQVRFU19MQVNUX0lOREVYX1dST05HID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlMSA9IC9hLztcbiAgdmFyIHJlMiA9IC9iKi9nO1xuICBuYXRpdmVFeGVjLmNhbGwocmUxLCAnYScpO1xuICBuYXRpdmVFeGVjLmNhbGwocmUyLCAnYScpO1xuICByZXR1cm4gcmUxLmxhc3RJbmRleCAhPT0gMCB8fCByZTIubGFzdEluZGV4ICE9PSAwO1xufSkoKTtcblxudmFyIFVOU1VQUE9SVEVEX1kgPSBzdGlja3lIZWxwZXJzLlVOU1VQUE9SVEVEX1kgfHwgc3RpY2t5SGVscGVycy5CUk9LRU5fQ0FSRVQ7XG5cbi8vIG5vbnBhcnRpY2lwYXRpbmcgY2FwdHVyaW5nIGdyb3VwLCBjb3BpZWQgZnJvbSBlczUtc2hpbSdzIFN0cmluZyNzcGxpdCBwYXRjaC5cbnZhciBOUENHX0lOQ0xVREVEID0gLygpPz8vLmV4ZWMoJycpWzFdICE9PSB1bmRlZmluZWQ7XG5cbnZhciBQQVRDSCA9IFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyB8fCBOUENHX0lOQ0xVREVEIHx8IFVOU1VQUE9SVEVEX1k7XG5cbmlmIChQQVRDSCkge1xuICBwYXRjaGVkRXhlYyA9IGZ1bmN0aW9uIGV4ZWMoc3RyKSB7XG4gICAgdmFyIHJlID0gdGhpcztcbiAgICB2YXIgbGFzdEluZGV4LCByZUNvcHksIG1hdGNoLCBpO1xuICAgIHZhciBzdGlja3kgPSBVTlNVUFBPUlRFRF9ZICYmIHJlLnN0aWNreTtcbiAgICB2YXIgZmxhZ3MgPSByZWdleHBGbGFncy5jYWxsKHJlKTtcbiAgICB2YXIgc291cmNlID0gcmUuc291cmNlO1xuICAgIHZhciBjaGFyc0FkZGVkID0gMDtcbiAgICB2YXIgc3RyQ29weSA9IHN0cjtcblxuICAgIGlmIChzdGlja3kpIHtcbiAgICAgIGZsYWdzID0gZmxhZ3MucmVwbGFjZSgneScsICcnKTtcbiAgICAgIGlmIChmbGFncy5pbmRleE9mKCdnJykgPT09IC0xKSB7XG4gICAgICAgIGZsYWdzICs9ICdnJztcbiAgICAgIH1cblxuICAgICAgc3RyQ29weSA9IFN0cmluZyhzdHIpLnNsaWNlKHJlLmxhc3RJbmRleCk7XG4gICAgICAvLyBTdXBwb3J0IGFuY2hvcmVkIHN0aWNreSBiZWhhdmlvci5cbiAgICAgIGlmIChyZS5sYXN0SW5kZXggPiAwICYmICghcmUubXVsdGlsaW5lIHx8IHJlLm11bHRpbGluZSAmJiBzdHJbcmUubGFzdEluZGV4IC0gMV0gIT09ICdcXG4nKSkge1xuICAgICAgICBzb3VyY2UgPSAnKD86ICcgKyBzb3VyY2UgKyAnKSc7XG4gICAgICAgIHN0ckNvcHkgPSAnICcgKyBzdHJDb3B5O1xuICAgICAgICBjaGFyc0FkZGVkKys7XG4gICAgICB9XG4gICAgICAvLyBeKD8gKyByeCArICkgaXMgbmVlZGVkLCBpbiBjb21iaW5hdGlvbiB3aXRoIHNvbWUgc3RyIHNsaWNpbmcsIHRvXG4gICAgICAvLyBzaW11bGF0ZSB0aGUgJ3knIGZsYWcuXG4gICAgICByZUNvcHkgPSBuZXcgUmVnRXhwKCdeKD86JyArIHNvdXJjZSArICcpJywgZmxhZ3MpO1xuICAgIH1cblxuICAgIGlmIChOUENHX0lOQ0xVREVEKSB7XG4gICAgICByZUNvcHkgPSBuZXcgUmVnRXhwKCdeJyArIHNvdXJjZSArICckKD8hXFxcXHMpJywgZmxhZ3MpO1xuICAgIH1cbiAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HKSBsYXN0SW5kZXggPSByZS5sYXN0SW5kZXg7XG5cbiAgICBtYXRjaCA9IG5hdGl2ZUV4ZWMuY2FsbChzdGlja3kgPyByZUNvcHkgOiByZSwgc3RyQ29weSk7XG5cbiAgICBpZiAoc3RpY2t5KSB7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgbWF0Y2guaW5wdXQgPSBtYXRjaC5pbnB1dC5zbGljZShjaGFyc0FkZGVkKTtcbiAgICAgICAgbWF0Y2hbMF0gPSBtYXRjaFswXS5zbGljZShjaGFyc0FkZGVkKTtcbiAgICAgICAgbWF0Y2guaW5kZXggPSByZS5sYXN0SW5kZXg7XG4gICAgICAgIHJlLmxhc3RJbmRleCArPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICB9IGVsc2UgcmUubGFzdEluZGV4ID0gMDtcbiAgICB9IGVsc2UgaWYgKFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyAmJiBtYXRjaCkge1xuICAgICAgcmUubGFzdEluZGV4ID0gcmUuZ2xvYmFsID8gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggOiBsYXN0SW5kZXg7XG4gICAgfVxuICAgIGlmIChOUENHX0lOQ0xVREVEICYmIG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDEpIHtcbiAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgXG4gICAgICAvLyBmb3IgTlBDRywgbGlrZSBJRTguIE5PVEU6IFRoaXMgZG9lc24nIHdvcmsgZm9yIC8oLj8pPy9cbiAgICAgIG5hdGl2ZVJlcGxhY2UuY2FsbChtYXRjaFswXSwgcmVDb3B5LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMjsgaSsrKSB7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWZpbmVkKSBtYXRjaFtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGNoZWRFeGVjO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjk0Y2FcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGZhaWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImQwMzlcIik7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogdHlwZW9mIGRldGVjdGlvbiA9PSAnZnVuY3Rpb24nID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiOTlhZlwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyICQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMjNlN1wiKTtcbnZhciBmYWlscyA9IF9fd2VicGFja19yZXF1aXJlX18oXCJkMDM5XCIpO1xudmFyIGlzQXJyYXkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZThiNVwiKTtcbnZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI4NjFkXCIpO1xudmFyIHRvT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjdiMGJcIik7XG52YXIgdG9MZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNTBjNFwiKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IF9fd2VicGFja19yZXF1aXJlX18oXCI4NDE4XCIpO1xudmFyIGFycmF5U3BlY2llc0NyZWF0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oXCI2NWYwXCIpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMWRkZVwiKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYjYyMlwiKTtcbnZhciBWOF9WRVJTSU9OID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjJkMDBcIik7XG5cbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnaXNDb25jYXRTcHJlYWRhYmxlJyk7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7XG52YXIgTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEID0gJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCc7XG5cbi8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgYXJyYXlbSVNfQ09OQ0FUX1NQUkVBREFCTEVdID0gZmFsc2U7XG4gIHJldHVybiBhcnJheS5jb25jYXQoKVswXSAhPT0gYXJyYXk7XG59KTtcblxudmFyIFNQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2NvbmNhdCcpO1xuXG52YXIgaXNDb25jYXRTcHJlYWRhYmxlID0gZnVuY3Rpb24gKE8pIHtcbiAgaWYgKCFpc09iamVjdChPKSkgcmV0dXJuIGZhbHNlO1xuICB2YXIgc3ByZWFkYWJsZSA9IE9bSVNfQ09OQ0FUX1NQUkVBREFCTEVdO1xuICByZXR1cm4gc3ByZWFkYWJsZSAhPT0gdW5kZWZpbmVkID8gISFzcHJlYWRhYmxlIDogaXNBcnJheShPKTtcbn07XG5cbnZhciBGT1JDRUQgPSAhSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCB8fCAhU1BFQ0lFU19TVVBQT1JUO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuY29uY2F0XG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAaXNDb25jYXRTcHJlYWRhYmxlIGFuZCBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KGFyZykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCAwKTtcbiAgICB2YXIgbiA9IDA7XG4gICAgdmFyIGksIGssIGxlbmd0aCwgbGVuLCBFO1xuICAgIGZvciAoaSA9IC0xLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIEUgPSBpID09PSAtMSA/IE8gOiBhcmd1bWVudHNbaV07XG4gICAgICBpZiAoaXNDb25jYXRTcHJlYWRhYmxlKEUpKSB7XG4gICAgICAgIGxlbiA9IHRvTGVuZ3RoKEUubGVuZ3RoKTtcbiAgICAgICAgaWYgKG4gKyBsZW4gPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyBUeXBlRXJyb3IoTUFYSU1VTV9BTExPV0VEX0lOREVYX0VYQ0VFREVEKTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IGxlbjsgaysrLCBuKyspIGlmIChrIGluIEUpIGNyZWF0ZVByb3BlcnR5KEEsIG4sIEVba10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG4gPj0gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KEEsIG4rKywgRSk7XG4gICAgICB9XG4gICAgfVxuICAgIEEubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiOWJkZFwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiODI1YVwiKTtcblxuLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgRU5UUklFUykge1xuICB0cnkge1xuICAgIHJldHVybiBFTlRSSUVTID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdmFyIHJldHVybk1ldGhvZCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0dXJuTWV0aG9kICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldHVybk1ldGhvZC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiOWJmMlwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgREVTQ1JJUFRPUlMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiODNhYlwiKTtcbnZhciBJRThfRE9NX0RFRklORSA9IF9fd2VicGFja19yZXF1aXJlX18oXCIwY2ZiXCIpO1xudmFyIGFuT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjgyNWFcIik7XG52YXIgdG9QcmltaXRpdmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYzA0ZVwiKTtcblxudmFyIG5hdGl2ZURlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBuYXRpdmVEZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gbmF0aXZlRGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIjllZDNcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IF9fd2VicGFja19yZXF1aXJlX18oXCJhZTkzXCIpLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIGNyZWF0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oXCI3YzczXCIpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IF9fd2VicGFja19yZXF1aXJlX18oXCI1YzZjXCIpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImQ0NGVcIik7XG52YXIgSXRlcmF0b3JzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjNmOGNcIik7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSXRlcmF0b3JDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgSXRlcmF0b3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvckNvbnN0cnVjdG9yLCBUT19TVFJJTkdfVEFHLCBmYWxzZSwgdHJ1ZSk7XG4gIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG4gIHJldHVybiBJdGVyYXRvckNvbnN0cnVjdG9yO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCI5ZjdmXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBmYWlscyA9IF9fd2VicGFja19yZXF1aXJlX18oXCJkMDM5XCIpO1xuXG4vLyBiYWJlbC1taW5pZnkgdHJhbnNwaWxlcyBSZWdFeHAoJ2EnLCAneScpIC0+IC9hL3kgYW5kIGl0IGNhdXNlcyBTeW50YXhFcnJvcixcbi8vIHNvIHdlIHVzZSBhbiBpbnRlcm1lZGlhdGUgZnVuY3Rpb24uXG5mdW5jdGlvbiBSRShzLCBmKSB7XG4gIHJldHVybiBSZWdFeHAocywgZik7XG59XG5cbmV4cG9ydHMuVU5TVVBQT1JURURfWSA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gYmFiZWwtbWluaWZ5IHRyYW5zcGlsZXMgUmVnRXhwKCdhJywgJ3knKSAtPiAvYS95IGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3JcbiAgdmFyIHJlID0gUkUoJ2EnLCAneScpO1xuICByZS5sYXN0SW5kZXggPSAyO1xuICByZXR1cm4gcmUuZXhlYygnYWJjZCcpICE9IG51bGw7XG59KTtcblxuZXhwb3J0cy5CUk9LRU5fQ0FSRVQgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTc3MzY4N1xuICB2YXIgcmUgPSBSRSgnXnInLCAnZ3knKTtcbiAgcmUubGFzdEluZGV4ID0gMjtcbiAgcmV0dXJuIHJlLmV4ZWMoJ3N0cicpICE9IG51bGw7XG59KTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJhMmJmXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNBcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oXCJlOGI1XCIpO1xudmFyIHRvTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjUwYzRcIik7XG52YXIgYmluZCA9IF9fd2VicGFja19yZXF1aXJlX18oXCIwMzY2XCIpO1xuXG4vLyBgRmxhdHRlbkludG9BcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLWZsYXRNYXAvI3NlYy1GbGF0dGVuSW50b0FycmF5XG52YXIgZmxhdHRlbkludG9BcnJheSA9IGZ1bmN0aW9uICh0YXJnZXQsIG9yaWdpbmFsLCBzb3VyY2UsIHNvdXJjZUxlbiwgc3RhcnQsIGRlcHRoLCBtYXBwZXIsIHRoaXNBcmcpIHtcbiAgdmFyIHRhcmdldEluZGV4ID0gc3RhcnQ7XG4gIHZhciBzb3VyY2VJbmRleCA9IDA7XG4gIHZhciBtYXBGbiA9IG1hcHBlciA/IGJpbmQobWFwcGVyLCB0aGlzQXJnLCAzKSA6IGZhbHNlO1xuICB2YXIgZWxlbWVudDtcblxuICB3aGlsZSAoc291cmNlSW5kZXggPCBzb3VyY2VMZW4pIHtcbiAgICBpZiAoc291cmNlSW5kZXggaW4gc291cmNlKSB7XG4gICAgICBlbGVtZW50ID0gbWFwRm4gPyBtYXBGbihzb3VyY2Vbc291cmNlSW5kZXhdLCBzb3VyY2VJbmRleCwgb3JpZ2luYWwpIDogc291cmNlW3NvdXJjZUluZGV4XTtcblxuICAgICAgaWYgKGRlcHRoID4gMCAmJiBpc0FycmF5KGVsZW1lbnQpKSB7XG4gICAgICAgIHRhcmdldEluZGV4ID0gZmxhdHRlbkludG9BcnJheSh0YXJnZXQsIG9yaWdpbmFsLCBlbGVtZW50LCB0b0xlbmd0aChlbGVtZW50Lmxlbmd0aCksIHRhcmdldEluZGV4LCBkZXB0aCAtIDEpIC0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0YXJnZXRJbmRleCA+PSAweDFGRkZGRkZGRkZGRkZGKSB0aHJvdyBUeXBlRXJyb3IoJ0V4Y2VlZCB0aGUgYWNjZXB0YWJsZSBhcnJheSBsZW5ndGgnKTtcbiAgICAgICAgdGFyZ2V0W3RhcmdldEluZGV4XSA9IGVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIHRhcmdldEluZGV4Kys7XG4gICAgfVxuICAgIHNvdXJjZUluZGV4Kys7XG4gIH1cbiAgcmV0dXJuIHRhcmdldEluZGV4O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmbGF0dGVuSW50b0FycmF5O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImEzNTJcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2EzNTJfXztcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiYTQzNFwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyICQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMjNlN1wiKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMjNjYlwiKTtcbnZhciB0b0ludGVnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYTY5MVwiKTtcbnZhciB0b0xlbmd0aCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI1MGM0XCIpO1xudmFyIHRvT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjdiMGJcIik7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjY1ZjBcIik7XG52YXIgY3JlYXRlUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiODQxOFwiKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjFkZGVcIik7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYWU0MFwiKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdzcGxpY2UnKTtcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdzcGxpY2UnLCB7IEFDQ0VTU09SUzogdHJ1ZSwgMDogMCwgMTogMiB9KTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGO1xudmFyIE1BWElNVU1fQUxMT1dFRF9MRU5HVEhfRVhDRUVERUQgPSAnTWF4aW11bSBhbGxvd2VkIGxlbmd0aCBleGNlZWRlZCc7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuc3BsaWNlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zcGxpY2Vcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBzcGxpY2U6IGZ1bmN0aW9uIHNwbGljZShzdGFydCwgZGVsZXRlQ291bnQgLyogLCAuLi5pdGVtcyAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbiA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgYWN0dWFsU3RhcnQgPSB0b0Fic29sdXRlSW5kZXgoc3RhcnQsIGxlbik7XG4gICAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIGluc2VydENvdW50LCBhY3R1YWxEZWxldGVDb3VudCwgQSwgaywgZnJvbSwgdG87XG4gICAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMCkge1xuICAgICAgaW5zZXJ0Q291bnQgPSBhY3R1YWxEZWxldGVDb3VudCA9IDA7XG4gICAgfSBlbHNlIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDEpIHtcbiAgICAgIGluc2VydENvdW50ID0gMDtcbiAgICAgIGFjdHVhbERlbGV0ZUNvdW50ID0gbGVuIC0gYWN0dWFsU3RhcnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc2VydENvdW50ID0gYXJndW1lbnRzTGVuZ3RoIC0gMjtcbiAgICAgIGFjdHVhbERlbGV0ZUNvdW50ID0gbWluKG1heCh0b0ludGVnZXIoZGVsZXRlQ291bnQpLCAwKSwgbGVuIC0gYWN0dWFsU3RhcnQpO1xuICAgIH1cbiAgICBpZiAobGVuICsgaW5zZXJ0Q291bnQgLSBhY3R1YWxEZWxldGVDb3VudCA+IE1BWF9TQUZFX0lOVEVHRVIpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfTEVOR1RIX0VYQ0VFREVEKTtcbiAgICB9XG4gICAgQSA9IGFycmF5U3BlY2llc0NyZWF0ZShPLCBhY3R1YWxEZWxldGVDb3VudCk7XG4gICAgZm9yIChrID0gMDsgayA8IGFjdHVhbERlbGV0ZUNvdW50OyBrKyspIHtcbiAgICAgIGZyb20gPSBhY3R1YWxTdGFydCArIGs7XG4gICAgICBpZiAoZnJvbSBpbiBPKSBjcmVhdGVQcm9wZXJ0eShBLCBrLCBPW2Zyb21dKTtcbiAgICB9XG4gICAgQS5sZW5ndGggPSBhY3R1YWxEZWxldGVDb3VudDtcbiAgICBpZiAoaW5zZXJ0Q291bnQgPCBhY3R1YWxEZWxldGVDb3VudCkge1xuICAgICAgZm9yIChrID0gYWN0dWFsU3RhcnQ7IGsgPCBsZW4gLSBhY3R1YWxEZWxldGVDb3VudDsgaysrKSB7XG4gICAgICAgIGZyb20gPSBrICsgYWN0dWFsRGVsZXRlQ291bnQ7XG4gICAgICAgIHRvID0gayArIGluc2VydENvdW50O1xuICAgICAgICBpZiAoZnJvbSBpbiBPKSBPW3RvXSA9IE9bZnJvbV07XG4gICAgICAgIGVsc2UgZGVsZXRlIE9bdG9dO1xuICAgICAgfVxuICAgICAgZm9yIChrID0gbGVuOyBrID4gbGVuIC0gYWN0dWFsRGVsZXRlQ291bnQgKyBpbnNlcnRDb3VudDsgay0tKSBkZWxldGUgT1trIC0gMV07XG4gICAgfSBlbHNlIGlmIChpbnNlcnRDb3VudCA+IGFjdHVhbERlbGV0ZUNvdW50KSB7XG4gICAgICBmb3IgKGsgPSBsZW4gLSBhY3R1YWxEZWxldGVDb3VudDsgayA+IGFjdHVhbFN0YXJ0OyBrLS0pIHtcbiAgICAgICAgZnJvbSA9IGsgKyBhY3R1YWxEZWxldGVDb3VudCAtIDE7XG4gICAgICAgIHRvID0gayArIGluc2VydENvdW50IC0gMTtcbiAgICAgICAgaWYgKGZyb20gaW4gTykgT1t0b10gPSBPW2Zyb21dO1xuICAgICAgICBlbHNlIGRlbGV0ZSBPW3RvXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChrID0gMDsgayA8IGluc2VydENvdW50OyBrKyspIHtcbiAgICAgIE9bayArIGFjdHVhbFN0YXJ0XSA9IGFyZ3VtZW50c1trICsgMl07XG4gICAgfVxuICAgIE8ubGVuZ3RoID0gbGVuIC0gYWN0dWFsRGVsZXRlQ291bnQgKyBpbnNlcnRDb3VudDtcbiAgICByZXR1cm4gQTtcbiAgfVxufSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiYTRkM1wiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyICQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMjNlN1wiKTtcbnZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZGE4NFwiKTtcbnZhciBnZXRCdWlsdEluID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImQwNjZcIik7XG52YXIgSVNfUFVSRSA9IF9fd2VicGFja19yZXF1aXJlX18oXCJjNDMwXCIpO1xudmFyIERFU0NSSVBUT1JTID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjgzYWJcIik7XG52YXIgTkFUSVZFX1NZTUJPTCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI0OTMwXCIpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImZkYmZcIik7XG52YXIgZmFpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZDAzOVwiKTtcbnZhciBoYXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNTEzNVwiKTtcbnZhciBpc0FycmF5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImU4YjVcIik7XG52YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiODYxZFwiKTtcbnZhciBhbk9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI4MjVhXCIpO1xudmFyIHRvT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjdiMGJcIik7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImZjNmFcIik7XG52YXIgdG9QcmltaXRpdmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYzA0ZVwiKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNWM2Y1wiKTtcbnZhciBuYXRpdmVPYmplY3RDcmVhdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiN2M3M1wiKTtcbnZhciBvYmplY3RLZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImRmNzVcIik7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oXCIyNDFjXCIpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbCA9IF9fd2VicGFja19yZXF1aXJlX18oXCIwNTdmXCIpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oXCI3NDE4XCIpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oXCIwNmNmXCIpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjliZjJcIik7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZDFlN1wiKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiOTExMlwiKTtcbnZhciByZWRlZmluZSA9IF9fd2VicGFja19yZXF1aXJlX18oXCI2ZWViXCIpO1xudmFyIHNoYXJlZCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI1NjkyXCIpO1xudmFyIHNoYXJlZEtleSA9IF9fd2VicGFja19yZXF1aXJlX18oXCJmNzcyXCIpO1xudmFyIGhpZGRlbktleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZDAxMlwiKTtcbnZhciB1aWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiOTBlM1wiKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYjYyMlwiKTtcbnZhciB3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImU1MzhcIik7XG52YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjc0NmZcIik7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZDQ0ZVwiKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjY5ZjNcIik7XG52YXIgJGZvckVhY2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYjcyN1wiKS5mb3JFYWNoO1xuXG52YXIgSElEREVOID0gc2hhcmVkS2V5KCdoaWRkZW4nKTtcbnZhciBTWU1CT0wgPSAnU3ltYm9sJztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihTWU1CT0wpO1xudmFyIE9iamVjdFByb3RvdHlwZSA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRzdHJpbmdpZnkgPSBnZXRCdWlsdEluKCdKU09OJywgJ3N0cmluZ2lmeScpO1xudmFyIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xudmFyIG5hdGl2ZURlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eU5hbWVzID0gZ2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsLmY7XG52YXIgbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGUgPSBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90b3R5cGVTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgU3RyaW5nVG9TeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3RyaW5nLXRvLXN5bWJvbC1yZWdpc3RyeScpO1xudmFyIFN5bWJvbFRvU3RyaW5nUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC10by1zdHJpbmctcmVnaXN0cnknKTtcbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIFVTRV9TRVRURVIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjcmlwdG9yID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0Q3JlYXRlKG5hdGl2ZURlZmluZVByb3BlcnR5KHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5hdGl2ZURlZmluZVByb3BlcnR5KHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIHZhciBPYmplY3RQcm90b3R5cGVEZXNjcmlwdG9yID0gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdFByb3RvdHlwZSwgUCk7XG4gIGlmIChPYmplY3RQcm90b3R5cGVEZXNjcmlwdG9yKSBkZWxldGUgT2JqZWN0UHJvdG90eXBlW1BdO1xuICBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgaWYgKE9iamVjdFByb3RvdHlwZURlc2NyaXB0b3IgJiYgTyAhPT0gT2JqZWN0UHJvdG90eXBlKSB7XG4gICAgbmF0aXZlRGVmaW5lUHJvcGVydHkoT2JqZWN0UHJvdG90eXBlLCBQLCBPYmplY3RQcm90b3R5cGVEZXNjcmlwdG9yKTtcbiAgfVxufSA6IG5hdGl2ZURlZmluZVByb3BlcnR5O1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcsIGRlc2NyaXB0aW9uKSB7XG4gIHZhciBzeW1ib2wgPSBBbGxTeW1ib2xzW3RhZ10gPSBuYXRpdmVPYmplY3RDcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc2V0SW50ZXJuYWxTdGF0ZShzeW1ib2wsIHtcbiAgICB0eXBlOiBTWU1CT0wsXG4gICAgdGFnOiB0YWcsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXG4gIH0pO1xuICBpZiAoIURFU0NSSVBUT1JTKSBzeW1ib2wuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgcmV0dXJuIHN5bWJvbDtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoaXQpIGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGlmIChPID09PSBPYmplY3RQcm90b3R5cGUpICRkZWZpbmVQcm9wZXJ0eShPYmplY3RQcm90b3R5cGVTeW1ib2xzLCBQLCBBdHRyaWJ1dGVzKTtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghQXR0cmlidXRlcy5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhPLCBISURERU4pKSBuYXRpdmVEZWZpbmVQcm9wZXJ0eShPLCBISURERU4sIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB7fSkpO1xuICAgICAgT1tISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKE8sIEhJRERFTikgJiYgT1tISURERU5dW2tleV0pIE9bSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBBdHRyaWJ1dGVzID0gbmF0aXZlT2JqZWN0Q3JlYXRlKEF0dHJpYnV0ZXMsIHsgZW51bWVyYWJsZTogY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjcmlwdG9yKE8sIGtleSwgQXR0cmlidXRlcyk7XG4gIH0gcmV0dXJuIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIGtleSwgQXR0cmlidXRlcyk7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBwcm9wZXJ0aWVzID0gdG9JbmRleGVkT2JqZWN0KFByb3BlcnRpZXMpO1xuICB2YXIga2V5cyA9IG9iamVjdEtleXMocHJvcGVydGllcykuY29uY2F0KCRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMocHJvcGVydGllcykpO1xuICAkZm9yRWFjaChrZXlzLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCFERVNDUklQVE9SUyB8fCAkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChwcm9wZXJ0aWVzLCBrZXkpKSAkZGVmaW5lUHJvcGVydHkoTywga2V5LCBwcm9wZXJ0aWVzW2tleV0pO1xuICB9KTtcbiAgcmV0dXJuIE87XG59O1xuXG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyBuYXRpdmVPYmplY3RDcmVhdGUoTykgOiAkZGVmaW5lUHJvcGVydGllcyhuYXRpdmVPYmplY3RDcmVhdGUoTyksIFByb3BlcnRpZXMpO1xufTtcblxudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIFAgPSB0b1ByaW1pdGl2ZShWLCB0cnVlKTtcbiAgdmFyIGVudW1lcmFibGUgPSBuYXRpdmVQcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHRoaXMsIFApO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG90eXBlICYmIGhhcyhBbGxTeW1ib2xzLCBQKSAmJiAhaGFzKE9iamVjdFByb3RvdHlwZVN5bWJvbHMsIFApKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBlbnVtZXJhYmxlIHx8ICFoYXModGhpcywgUCkgfHwgIWhhcyhBbGxTeW1ib2xzLCBQKSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1bUF0gPyBlbnVtZXJhYmxlIDogdHJ1ZTtcbn07XG5cbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgdmFyIGl0ID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG90eXBlICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT2JqZWN0UHJvdG90eXBlU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgZGVzY3JpcHRvciA9IG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KTtcbiAgaWYgKGRlc2NyaXB0b3IgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkge1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGRlc2NyaXB0b3I7XG59O1xuXG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgdmFyIG5hbWVzID0gbmF0aXZlR2V0T3duUHJvcGVydHlOYW1lcyh0b0luZGV4ZWRPYmplY3QoTykpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gICRmb3JFYWNoKG5hbWVzLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKGhpZGRlbktleXMsIGtleSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTykge1xuICB2YXIgSVNfT0JKRUNUX1BST1RPVFlQRSA9IE8gPT09IE9iamVjdFByb3RvdHlwZTtcbiAgdmFyIG5hbWVzID0gbmF0aXZlR2V0T3duUHJvcGVydHlOYW1lcyhJU19PQkpFQ1RfUFJPVE9UWVBFID8gT2JqZWN0UHJvdG90eXBlU3ltYm9scyA6IHRvSW5kZXhlZE9iamVjdChPKSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgJGZvckVhY2gobmFtZXMsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgKCFJU19PQkpFQ1RfUFJPVE9UWVBFIHx8IGhhcyhPYmplY3RQcm90b3R5cGUsIGtleSkpKSB7XG4gICAgICByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyBgU3ltYm9sYCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLWNvbnN0cnVjdG9yXG5pZiAoIU5BVElWRV9TWU1CT0wpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yJyk7XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gIWFyZ3VtZW50cy5sZW5ndGggfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBTdHJpbmcoYXJndW1lbnRzWzBdKTtcbiAgICB2YXIgdGFnID0gdWlkKGRlc2NyaXB0aW9uKTtcbiAgICB2YXIgc2V0dGVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG90eXBlKSBzZXR0ZXIuY2FsbChPYmplY3RQcm90b3R5cGVTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2NyaXB0b3IodGhpcywgdGFnLCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBVU0VfU0VUVEVSKSBzZXRTeW1ib2xEZXNjcmlwdG9yKE9iamVjdFByb3RvdHlwZSwgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiBzZXR0ZXIgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnLCBkZXNjcmlwdGlvbik7XG4gIH07XG5cbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS50YWc7XG4gIH0pO1xuXG4gIHJlZGVmaW5lKCRTeW1ib2wsICd3aXRob3V0U2V0dGVyJywgZnVuY3Rpb24gKGRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIHdyYXAodWlkKGRlc2NyaXB0aW9uKSwgZGVzY3JpcHRpb24pO1xuICB9KTtcblxuICBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mID0gJGRlZmluZVByb3BlcnR5O1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZiA9IGdldE93blByb3BlcnR5TmFtZXNFeHRlcm5hbC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICB3cmFwcGVkV2VsbEtub3duU3ltYm9sTW9kdWxlLmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdlbGxLbm93blN5bWJvbChuYW1lKSwgbmFtZSk7XG4gIH07XG5cbiAgaWYgKERFU0NSSVBUT1JTKSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtU3ltYm9sLWRlc2NyaXB0aW9uXG4gICAgbmF0aXZlRGVmaW5lUHJvcGVydHkoJFN5bWJvbFtQUk9UT1RZUEVdLCAnZGVzY3JpcHRpb24nLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGRlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5kZXNjcmlwdGlvbjtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIUlTX1BVUkUpIHtcbiAgICAgIHJlZGVmaW5lKE9iamVjdFByb3RvdHlwZSwgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB7IHVuc2FmZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH1cbn1cblxuJCh7IGdsb2JhbDogdHJ1ZSwgd3JhcDogdHJ1ZSwgZm9yY2VkOiAhTkFUSVZFX1NZTUJPTCwgc2hhbTogIU5BVElWRV9TWU1CT0wgfSwge1xuICBTeW1ib2w6ICRTeW1ib2xcbn0pO1xuXG4kZm9yRWFjaChvYmplY3RLZXlzKFdlbGxLbm93blN5bWJvbHNTdG9yZSksIGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlZmluZVdlbGxLbm93blN5bWJvbChuYW1lKTtcbn0pO1xuXG4kKHsgdGFyZ2V0OiBTWU1CT0wsIHN0YXQ6IHRydWUsIGZvcmNlZDogIU5BVElWRV9TWU1CT0wgfSwge1xuICAvLyBgU3ltYm9sLmZvcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5mb3JcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKGtleSk7XG4gICAgaWYgKGhhcyhTdHJpbmdUb1N5bWJvbFJlZ2lzdHJ5LCBzdHJpbmcpKSByZXR1cm4gU3RyaW5nVG9TeW1ib2xSZWdpc3RyeVtzdHJpbmddO1xuICAgIHZhciBzeW1ib2wgPSAkU3ltYm9sKHN0cmluZyk7XG4gICAgU3RyaW5nVG9TeW1ib2xSZWdpc3RyeVtzdHJpbmddID0gc3ltYm9sO1xuICAgIFN5bWJvbFRvU3RyaW5nUmVnaXN0cnlbc3ltYm9sXSA9IHN0cmluZztcbiAgICByZXR1cm4gc3ltYm9sO1xuICB9LFxuICAvLyBgU3ltYm9sLmtleUZvcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5rZXlmb3JcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2wnKTtcbiAgICBpZiAoaGFzKFN5bWJvbFRvU3RyaW5nUmVnaXN0cnksIHN5bSkpIHJldHVybiBTeW1ib2xUb1N0cmluZ1JlZ2lzdHJ5W3N5bV07XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBVU0VfU0VUVEVSID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IFVTRV9TRVRURVIgPSBmYWxzZTsgfVxufSk7XG5cbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFOQVRJVkVfU1lNQk9MLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICAvLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIGBPYmplY3QuZGVmaW5lUHJvcGVydGllc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0aWVzXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JzXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvclxufSk7XG5cbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFOQVRJVkVfU1lNQk9MIH0sIHtcbiAgLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5c3ltYm9sc1xuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyBDaHJvbWUgMzggYW5kIDM5IGBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzYCBmYWlscyBvbiBwcmltaXRpdmVzXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zNDQzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBmYWlscyhmdW5jdGlvbiAoKSB7IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mKDEpOyB9KSB9LCB7XG4gIGdldE93blByb3BlcnR5U3ltYm9sczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gICAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuXG4vLyBgSlNPTi5zdHJpbmdpZnlgIG1ldGhvZCBiZWhhdmlvciB3aXRoIHN5bWJvbHNcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWpzb24uc3RyaW5naWZ5XG5pZiAoJHN0cmluZ2lmeSkge1xuICB2YXIgRk9SQ0VEX0pTT05fU1RSSU5HSUZZID0gIU5BVElWRV9TWU1CT0wgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBzeW1ib2wgPSAkU3ltYm9sKCk7XG4gICAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgICByZXR1cm4gJHN0cmluZ2lmeShbc3ltYm9sXSkgIT0gJ1tudWxsXSdcbiAgICAgIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAgICAgfHwgJHN0cmluZ2lmeSh7IGE6IHN5bWJvbCB9KSAhPSAne30nXG4gICAgICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICAgICAgfHwgJHN0cmluZ2lmeShPYmplY3Qoc3ltYm9sKSkgIT0gJ3t9JztcbiAgfSk7XG5cbiAgJCh7IHRhcmdldDogJ0pTT04nLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZPUkNFRF9KU09OX1NUUklOR0lGWSB9LCB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQsIHJlcGxhY2VyLCBzcGFjZSkge1xuICAgICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgICAgdmFyIGluZGV4ID0gMTtcbiAgICAgIHZhciAkcmVwbGFjZXI7XG4gICAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGluZGV4KSBhcmdzLnB1c2goYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICAgICRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgICAgfTtcbiAgICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICAgIHJldHVybiAkc3RyaW5naWZ5LmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIGBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5wcm90b3R5cGUtQEB0b3ByaW1pdGl2ZVxuaWYgKCEkU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSkge1xuICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbn1cbi8vIGBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddYCBwcm9wZXJ0eVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLnByb3RvdHlwZS1AQHRvc3RyaW5ndGFnXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCBTWU1CT0wpO1xuXG5oaWRkZW5LZXlzW0hJRERFTl0gPSB0cnVlO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImE2MzBcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyICQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMjNlN1wiKTtcbnZhciBmcm9tID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjRkZjRcIik7XG52YXIgY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjFjN2VcIik7XG5cbnZhciBJTkNPUlJFQ1RfSVRFUkFUSU9OID0gIWNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbihmdW5jdGlvbiAoaXRlcmFibGUpIHtcbiAgQXJyYXkuZnJvbShpdGVyYWJsZSk7XG59KTtcblxuLy8gYEFycmF5LmZyb21gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkuZnJvbVxuJCh7IHRhcmdldDogJ0FycmF5Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBJTkNPUlJFQ1RfSVRFUkFUSU9OIH0sIHtcbiAgZnJvbTogZnJvbVxufSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiYTY0MFwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGZhaWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImQwMzlcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBhcmd1bWVudCkge1xuICB2YXIgbWV0aG9kID0gW11bTUVUSE9EX05BTUVdO1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGwsbm8tdGhyb3ctbGl0ZXJhbFxuICAgIG1ldGhvZC5jYWxsKG51bGwsIGFyZ3VtZW50IHx8IGZ1bmN0aW9uICgpIHsgdGhyb3cgMTsgfSwgMSk7XG4gIH0pO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJhNjkxXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYFRvSW50ZWdlcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b2ludGVnZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc05hTihhcmd1bWVudCA9ICthcmd1bWVudCkgPyAwIDogKGFyZ3VtZW50ID4gMCA/IGZsb29yIDogY2VpbCkoYXJndW1lbnQpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJhYjEzXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciB3ZWxsS25vd25TeW1ib2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYjYyMlwiKTtcblxudmFyIE1BVENIID0gd2VsbEtub3duU3ltYm9sKCdtYXRjaCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICB2YXIgcmVnZXhwID0gLy4vO1xuICB0cnkge1xuICAgICcvLi8nW01FVEhPRF9OQU1FXShyZWdleHApO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlZ2V4cFtNQVRDSF0gPSBmYWxzZTtcbiAgICAgIHJldHVybiAnLy4vJ1tNRVRIT0RfTkFNRV0ocmVnZXhwKTtcbiAgICB9IGNhdGNoIChmKSB7IC8qIGVtcHR5ICovIH1cbiAgfSByZXR1cm4gZmFsc2U7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImFjMWZcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciAkID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjIzZTdcIik7XG52YXIgZXhlYyA9IF9fd2VicGFja19yZXF1aXJlX18oXCI5MjYzXCIpO1xuXG4kKHsgdGFyZ2V0OiAnUmVnRXhwJywgcHJvdG86IHRydWUsIGZvcmNlZDogLy4vLmV4ZWMgIT09IGV4ZWMgfSwge1xuICBleGVjOiBleGVjXG59KTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJhZDZkXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiODI1YVwiKTtcblxuLy8gYFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NgIGdldHRlciBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZ2V0LXJlZ2V4cC5wcm90b3R5cGUuZmxhZ3Ncbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdGhhdCA9IGFuT2JqZWN0KHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGlmICh0aGF0Lmdsb2JhbCkgcmVzdWx0ICs9ICdnJztcbiAgaWYgKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcbiAgaWYgKHRoYXQubXVsdGlsaW5lKSByZXN1bHQgKz0gJ20nO1xuICBpZiAodGhhdC5kb3RBbGwpIHJlc3VsdCArPSAncyc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiYWU0MFwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgREVTQ1JJUFRPUlMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiODNhYlwiKTtcbnZhciBmYWlscyA9IF9fd2VicGFja19yZXF1aXJlX18oXCJkMDM5XCIpO1xudmFyIGhhcyA9IF9fd2VicGFja19yZXF1aXJlX18oXCI1MTM1XCIpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgY2FjaGUgPSB7fTtcblxudmFyIHRocm93ZXIgPSBmdW5jdGlvbiAoaXQpIHsgdGhyb3cgaXQ7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FLCBvcHRpb25zKSB7XG4gIGlmIChoYXMoY2FjaGUsIE1FVEhPRF9OQU1FKSkgcmV0dXJuIGNhY2hlW01FVEhPRF9OQU1FXTtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHZhciBBQ0NFU1NPUlMgPSBoYXMob3B0aW9ucywgJ0FDQ0VTU09SUycpID8gb3B0aW9ucy5BQ0NFU1NPUlMgOiBmYWxzZTtcbiAgdmFyIGFyZ3VtZW50MCA9IGhhcyhvcHRpb25zLCAwKSA/IG9wdGlvbnNbMF0gOiB0aHJvd2VyO1xuICB2YXIgYXJndW1lbnQxID0gaGFzKG9wdGlvbnMsIDEpID8gb3B0aW9uc1sxXSA6IHVuZGVmaW5lZDtcblxuICByZXR1cm4gY2FjaGVbTUVUSE9EX05BTUVdID0gISFtZXRob2QgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoQUNDRVNTT1JTICYmICFERVNDUklQVE9SUykgcmV0dXJuIHRydWU7XG4gICAgdmFyIE8gPSB7IGxlbmd0aDogLTEgfTtcblxuICAgIGlmIChBQ0NFU1NPUlMpIGRlZmluZVByb3BlcnR5KE8sIDEsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiB0aHJvd2VyIH0pO1xuICAgIGVsc2UgT1sxXSA9IDE7XG5cbiAgICBtZXRob2QuY2FsbChPLCBhcmd1bWVudDAsIGFyZ3VtZW50MSk7XG4gIH0pO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJhZTkzXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgZ2V0UHJvdG90eXBlT2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZTE2M1wiKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiOTExMlwiKTtcbnZhciBoYXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNTEzNVwiKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYjYyMlwiKTtcbnZhciBJU19QVVJFID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImM0MzBcIik7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gZmFsc2U7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVgIG9iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1vYmplY3RcbnZhciBJdGVyYXRvclByb3RvdHlwZSwgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlLCBhcnJheUl0ZXJhdG9yO1xuXG5pZiAoW10ua2V5cykge1xuICBhcnJheUl0ZXJhdG9yID0gW10ua2V5cygpO1xuICAvLyBTYWZhcmkgOCBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgaWYgKCEoJ25leHQnIGluIGFycmF5SXRlcmF0b3IpKSBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gdHJ1ZTtcbiAgZWxzZSB7XG4gICAgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoZ2V0UHJvdG90eXBlT2YoYXJyYXlJdGVyYXRvcikpO1xuICAgIGlmIChQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpIEl0ZXJhdG9yUHJvdG90eXBlID0gUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG59XG5cbmlmIChJdGVyYXRvclByb3RvdHlwZSA9PSB1bmRlZmluZWQpIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5pZiAoIUlTX1BVUkUgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSB7XG4gIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgSXRlcmF0b3JQcm90b3R5cGU6IEl0ZXJhdG9yUHJvdG90eXBlLFxuICBCVUdHWV9TQUZBUklfSVRFUkFUT1JTOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTXG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImIwNDFcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMDBlZVwiKTtcbnZhciBjbGFzc29mID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImY1ZGZcIik7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8ge30udG9TdHJpbmcgOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJiMGMwXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBERVNDUklQVE9SUyA9IF9fd2VicGFja19yZXF1aXJlX18oXCI4M2FiXCIpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjliZjJcIikuZjtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIEZ1bmN0aW9uUHJvdG90eXBlVG9TdHJpbmcgPSBGdW5jdGlvblByb3RvdHlwZS50b1N0cmluZztcbnZhciBuYW1lUkUgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS87XG52YXIgTkFNRSA9ICduYW1lJztcblxuLy8gRnVuY3Rpb24gaW5zdGFuY2VzIGAubmFtZWAgcHJvcGVydHlcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXG5pZiAoREVTQ1JJUFRPUlMgJiYgIShOQU1FIGluIEZ1bmN0aW9uUHJvdG90eXBlKSkge1xuICBkZWZpbmVQcm9wZXJ0eShGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nLmNhbGwodGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImI2MjJcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oXCJkYTg0XCIpO1xudmFyIHNoYXJlZCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI1NjkyXCIpO1xudmFyIGhhcyA9IF9fd2VicGFja19yZXF1aXJlX18oXCI1MTM1XCIpO1xudmFyIHVpZCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI5MGUzXCIpO1xudmFyIE5BVElWRV9TWU1CT0wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNDkzMFwiKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IF9fd2VicGFja19yZXF1aXJlX18oXCJmZGJmXCIpO1xuXG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIGNyZWF0ZVdlbGxLbm93blN5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhcyhXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgaWYgKE5BVElWRV9TWU1CT0wgJiYgaGFzKFN5bWJvbCwgbmFtZSkpIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IFN5bWJvbFtuYW1lXTtcbiAgICBlbHNlIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJiNjRiXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciAkID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjIzZTdcIik7XG52YXIgdG9PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiN2IwYlwiKTtcbnZhciBuYXRpdmVLZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImRmNzVcIik7XG52YXIgZmFpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZDAzOVwiKTtcblxudmFyIEZBSUxTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IG5hdGl2ZUtleXMoMSk7IH0pO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmtleXNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IEZBSUxTX09OX1BSSU1JVElWRVMgfSwge1xuICBrZXlzOiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXModG9PYmplY3QoaXQpKTtcbiAgfVxufSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiYjcyN1wiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgYmluZCA9IF9fd2VicGFja19yZXF1aXJlX18oXCIwMzY2XCIpO1xudmFyIEluZGV4ZWRPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNDRhZFwiKTtcbnZhciB0b09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI3YjBiXCIpO1xudmFyIHRvTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjUwYzRcIik7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjY1ZjBcIik7XG5cbnZhciBwdXNoID0gW10ucHVzaDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGZvckVhY2gsIG1hcCwgZmlsdGVyLCBzb21lLCBldmVyeSwgZmluZCwgZmluZEluZGV4IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQsIHNwZWNpZmljQ3JlYXRlKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJbmRleGVkT2JqZWN0KE8pO1xuICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGNyZWF0ZSA9IHNwZWNpZmljQ3JlYXRlIHx8IGFycmF5U3BlY2llc0NyZWF0ZTtcbiAgICB2YXIgdGFyZ2V0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsdWUsIHJlc3VsdDtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbHVlID0gc2VsZltpbmRleF07XG4gICAgICByZXN1bHQgPSBib3VuZEZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSB0YXJnZXRbaW5kZXhdID0gcmVzdWx0OyAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzdWx0KSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbHVlOyAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcHVzaC5jYWxsKHRhcmdldCwgdmFsdWUpOyAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmIChJU19FVkVSWSkgcmV0dXJuIGZhbHNlOyAgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHRhcmdldDtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuICBmb3JFYWNoOiBjcmVhdGVNZXRob2QoMCksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuICBtYXA6IGNyZWF0ZU1ldGhvZCgxKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maWx0ZXJgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gIGZpbHRlcjogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLnNvbWVgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc29tZVxuICBzb21lOiBjcmVhdGVNZXRob2QoMyksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZXZlcnlgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZXZlcnlcbiAgZXZlcnk6IGNyZWF0ZU1ldGhvZCg0KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbmRcbiAgZmluZDogY3JlYXRlTWV0aG9kKDUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kSW5kZXhcbiAgZmluZEluZGV4OiBjcmVhdGVNZXRob2QoNilcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiYzA0ZVwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiODYxZFwiKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBQUkVGRVJSRURfU1RSSU5HKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpbnB1dC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJjNDMwXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiYzZiNlwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiYzZjZFwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImRhODRcIik7XG52YXIgc2V0R2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImNlNGVcIik7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IHNldEdsb2JhbChTSEFSRUQsIHt9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJjNzQwXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgJCA9IF9fd2VicGFja19yZXF1aXJlX18oXCIyM2U3XCIpO1xudmFyICRmaW5kSW5kZXggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYjcyN1wiKS5maW5kSW5kZXg7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IF9fd2VicGFja19yZXF1aXJlX18oXCI0NGQyXCIpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImFlNDBcIik7XG5cbnZhciBGSU5EX0lOREVYID0gJ2ZpbmRJbmRleCc7XG52YXIgU0tJUFNfSE9MRVMgPSB0cnVlO1xuXG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aChGSU5EX0lOREVYKTtcblxuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbmlmIChGSU5EX0lOREVYIGluIFtdKSBBcnJheSgxKVtGSU5EX0lOREVYXShmdW5jdGlvbiAoKSB7IFNLSVBTX0hPTEVTID0gZmFsc2U7IH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmluZGluZGV4XG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBTS0lQU19IT0xFUyB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBmaW5kSW5kZXg6IGZ1bmN0aW9uIGZpbmRJbmRleChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgIHJldHVybiAkZmluZEluZGV4KHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKEZJTkRfSU5ERVgpO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImM4YmFcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxudmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImM5NzVcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciAkID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjIzZTdcIik7XG52YXIgJGluZGV4T2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNGQ2NFwiKS5pbmRleE9mO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYTY0MFwiKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IF9fd2VicGFja19yZXF1aXJlX18oXCJhZTQwXCIpO1xuXG52YXIgbmF0aXZlSW5kZXhPZiA9IFtdLmluZGV4T2Y7XG5cbnZhciBORUdBVElWRV9aRVJPID0gISFuYXRpdmVJbmRleE9mICYmIDEgLyBbMV0uaW5kZXhPZigxLCAtMCkgPCAwO1xudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdpbmRleE9mJyk7XG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnaW5kZXhPZicsIHsgQUNDRVNTT1JTOiB0cnVlLCAxOiAwIH0pO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IE5FR0FUSVZFX1pFUk8gfHwgIVNUUklDVF9NRVRIT0QgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgaW5kZXhPZjogZnVuY3Rpb24gaW5kZXhPZihzZWFyY2hFbGVtZW50IC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHJldHVybiBORUdBVElWRV9aRVJPXG4gICAgICAvLyBjb252ZXJ0IC0wIHRvICswXG4gICAgICA/IG5hdGl2ZUluZGV4T2YuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCAwXG4gICAgICA6ICRpbmRleE9mKHRoaXMsIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiY2E4NFwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgaGFzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjUxMzVcIik7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImZjNmFcIik7XG52YXIgaW5kZXhPZiA9IF9fd2VicGFja19yZXF1aXJlX18oXCI0ZDY0XCIpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oXCJkMDEyXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzKGhpZGRlbktleXMsIGtleSkgJiYgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImNhYWRcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciAkID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjIzZTdcIik7XG52YXIgJGluY2x1ZGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjRkNjRcIikuaW5jbHVkZXM7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IF9fd2VicGFja19yZXF1aXJlX18oXCI0NGQyXCIpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImFlNDBcIik7XG5cbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdpbmRleE9mJywgeyBBQ0NFU1NPUlM6IHRydWUsIDE6IDAgfSk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhVVNFU19UT19MRU5HVEggfSwge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoZWwgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuICRpbmNsdWRlcyh0aGlzLCBlbCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoJ2luY2x1ZGVzJyk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiY2MxMlwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImRhODRcIik7XG52YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiODYxZFwiKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiY2U0ZVwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImRhODRcIik7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjkxMTJcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoZ2xvYmFsLCBrZXksIHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiZDAxMlwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImQwMzlcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJkMDY2XCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBwYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjQyOGZcIik7XG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImRhODRcIik7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YXJpYWJsZSA9PSAnZnVuY3Rpb24nID8gdmFyaWFibGUgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24ocGF0aFtuYW1lc3BhY2VdKSB8fCBhRnVuY3Rpb24oZ2xvYmFsW25hbWVzcGFjZV0pXG4gICAgOiBwYXRoW25hbWVzcGFjZV0gJiYgcGF0aFtuYW1lc3BhY2VdW21ldGhvZF0gfHwgZ2xvYmFsW25hbWVzcGFjZV0gJiYgZ2xvYmFsW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiZDFlN1wiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgIW5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6IG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImQyOGJcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI3NDZmXCIpO1xuXG4vLyBgU3ltYm9sLml0ZXJhdG9yYCB3ZWxsLWtub3duIHN5bWJvbFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3ltYm9sLml0ZXJhdG9yXG5kZWZpbmVXZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiZDJiYlwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiODI1YVwiKTtcbnZhciBhUG9zc2libGVQcm90b3R5cGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiM2JiZVwiKTtcblxuLy8gYE9iamVjdC5zZXRQcm90b3R5cGVPZmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3Quc2V0cHJvdG90eXBlb2Zcbi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IGZ1bmN0aW9uICgpIHtcbiAgdmFyIENPUlJFQ1RfU0VUVEVSID0gZmFsc2U7XG4gIHZhciB0ZXN0ID0ge307XG4gIHZhciBzZXR0ZXI7XG4gIHRyeSB7XG4gICAgc2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0O1xuICAgIHNldHRlci5jYWxsKHRlc3QsIFtdKTtcbiAgICBDT1JSRUNUX1NFVFRFUiA9IHRlc3QgaW5zdGFuY2VvZiBBcnJheTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICBhbk9iamVjdChPKTtcbiAgICBhUG9zc2libGVQcm90b3R5cGUocHJvdG8pO1xuICAgIGlmIChDT1JSRUNUX1NFVFRFUikgc2V0dGVyLmNhbGwoTywgcHJvdG8pO1xuICAgIGVsc2UgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICByZXR1cm4gTztcbiAgfTtcbn0oKSA6IHVuZGVmaW5lZCk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiZDNiN1wiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjAwZWVcIik7XG52YXIgcmVkZWZpbmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNmVlYlwiKTtcbnZhciB0b1N0cmluZyA9IF9fd2VicGFja19yZXF1aXJlX18oXCJiMDQxXCIpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nXG5pZiAoIVRPX1NUUklOR19UQUdfU1VQUE9SVCkge1xuICByZWRlZmluZShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCB0b1N0cmluZywgeyB1bnNhZmU6IHRydWUgfSk7XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiZDQ0ZVwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiOWJmMlwiKS5mO1xudmFyIGhhcyA9IF9fd2VicGFja19yZXF1aXJlX18oXCI1MTM1XCIpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IF9fd2VicGFja19yZXF1aXJlX18oXCJiNjIyXCIpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRBRywgU1RBVElDKSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gU1RBVElDID8gaXQgOiBpdC5wcm90b3R5cGUsIFRPX1NUUklOR19UQUcpKSB7XG4gICAgZGVmaW5lUHJvcGVydHkoaXQsIFRPX1NUUklOR19UQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogVEFHIH0pO1xuICB9XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImQ1OGZcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGFGdW5jdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oXCIxYzBiXCIpO1xudmFyIHRvT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjdiMGJcIik7XG52YXIgSW5kZXhlZE9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI0NGFkXCIpO1xudmFyIHRvTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjUwYzRcIik7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyByZWR1Y2UsIHJlZHVjZVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfUklHSFQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBjYWxsYmFja2ZuLCBhcmd1bWVudHNMZW5ndGgsIG1lbW8pIHtcbiAgICBhRnVuY3Rpb24oY2FsbGJhY2tmbik7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGF0KTtcbiAgICB2YXIgc2VsZiA9IEluZGV4ZWRPYmplY3QoTyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSBJU19SSUdIVCA/IGxlbmd0aCAtIDEgOiAwO1xuICAgIHZhciBpID0gSVNfUklHSFQgPyAtMSA6IDE7XG4gICAgaWYgKGFyZ3VtZW50c0xlbmd0aCA8IDIpIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAoaW5kZXggaW4gc2VsZikge1xuICAgICAgICBtZW1vID0gc2VsZltpbmRleF07XG4gICAgICAgIGluZGV4ICs9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaW5kZXggKz0gaTtcbiAgICAgIGlmIChJU19SSUdIVCA/IGluZGV4IDwgMCA6IGxlbmd0aCA8PSBpbmRleCkge1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ1JlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICg7SVNfUklHSFQgPyBpbmRleCA+PSAwIDogbGVuZ3RoID4gaW5kZXg7IGluZGV4ICs9IGkpIGlmIChpbmRleCBpbiBzZWxmKSB7XG4gICAgICBtZW1vID0gY2FsbGJhY2tmbihtZW1vLCBzZWxmW2luZGV4XSwgaW5kZXgsIE8pO1xuICAgIH1cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5yZWR1Y2VcbiAgbGVmdDogY3JlYXRlTWV0aG9kKGZhbHNlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VSaWdodGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5yZWR1Y2VyaWdodFxuICByaWdodDogY3JlYXRlTWV0aG9kKHRydWUpXG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImQ3ODRcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3MgbW92ZWQgdG8gZW50cnkgcG9pbnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiYWMxZlwiKTtcbnZhciByZWRlZmluZSA9IF9fd2VicGFja19yZXF1aXJlX18oXCI2ZWViXCIpO1xudmFyIGZhaWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImQwMzlcIik7XG52YXIgd2VsbEtub3duU3ltYm9sID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImI2MjJcIik7XG52YXIgcmVnZXhwRXhlYyA9IF9fd2VicGFja19yZXF1aXJlX18oXCI5MjYzXCIpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IF9fd2VicGFja19yZXF1aXJlX18oXCI5MTEyXCIpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG52YXIgUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyAjcmVwbGFjZSBuZWVkcyBidWlsdC1pbiBzdXBwb3J0IGZvciBuYW1lZCBncm91cHMuXG4gIC8vICNtYXRjaCB3b3JrcyBmaW5lIGJlY2F1c2UgaXQganVzdCByZXR1cm4gdGhlIGV4ZWMgcmVzdWx0cywgZXZlbiBpZiBpdCBoYXNcbiAgLy8gYSBcImdyb3BzXCIgcHJvcGVydHkuXG4gIHZhciByZSA9IC8uLztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgcmVzdWx0Lmdyb3VwcyA9IHsgYTogJzcnIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgcmV0dXJuICcnLnJlcGxhY2UocmUsICckPGE+JykgIT09ICc3Jztcbn0pO1xuXG4vLyBJRSA8PSAxMSByZXBsYWNlcyAkMCB3aXRoIHRoZSB3aG9sZSBtYXRjaCwgYXMgaWYgaXQgd2FzICQmXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MDI0NjY2L2dldHRpbmctaWUtdG8tcmVwbGFjZS1hLXJlZ2V4LXdpdGgtdGhlLWxpdGVyYWwtc3RyaW5nLTBcbnZhciBSRVBMQUNFX0tFRVBTXyQwID0gKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuICdhJy5yZXBsYWNlKC8uLywgJyQwJykgPT09ICckMCc7XG59KSgpO1xuXG52YXIgUkVQTEFDRSA9IHdlbGxLbm93blN5bWJvbCgncmVwbGFjZScpO1xuLy8gU2FmYXJpIDw9IDEzLjAuMyg/KSBzdWJzdGl0dXRlcyBudGggY2FwdHVyZSB3aGVyZSBuPm0gd2l0aCBhbiBlbXB0eSBzdHJpbmdcbnZhciBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSA9IChmdW5jdGlvbiAoKSB7XG4gIGlmICgvLi9bUkVQTEFDRV0pIHtcbiAgICByZXR1cm4gLy4vW1JFUExBQ0VdKCdhJywgJyQwJykgPT09ICcnO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn0pKCk7XG5cbi8vIENocm9tZSA1MSBoYXMgYSBidWdneSBcInNwbGl0XCIgaW1wbGVtZW50YXRpb24gd2hlbiBSZWdFeHAjZXhlYyAhPT0gbmF0aXZlRXhlY1xuLy8gV2VleCBKUyBoYXMgZnJvemVuIGJ1aWx0LWluIHByb3RvdHlwZXMsIHNvIHVzZSB0cnkgLyBjYXRjaCB3cmFwcGVyXG52YXIgU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJlID0gLyg/OikvO1xuICB2YXIgb3JpZ2luYWxFeGVjID0gcmUuZXhlYztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9yaWdpbmFsRXhlYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICB2YXIgcmVzdWx0ID0gJ2FiJy5zcGxpdChyZSk7XG4gIHJldHVybiByZXN1bHQubGVuZ3RoICE9PSAyIHx8IHJlc3VsdFswXSAhPT0gJ2EnIHx8IHJlc3VsdFsxXSAhPT0gJ2InO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgbGVuZ3RoLCBleGVjLCBzaGFtKSB7XG4gIHZhciBTWU1CT0wgPSB3ZWxsS25vd25TeW1ib2woS0VZKTtcblxuICB2YXIgREVMRUdBVEVTX1RPX1NZTUJPTCA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3RyaW5nIG1ldGhvZHMgY2FsbCBzeW1ib2wtbmFtZWQgUmVnRXAgbWV0aG9kc1xuICAgIHZhciBPID0ge307XG4gICAgT1tTWU1CT0xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KTtcblxuICB2YXIgREVMRUdBVEVTX1RPX0VYRUMgPSBERUxFR0FURVNfVE9fU1lNQk9MICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gU3ltYm9sLW5hbWVkIFJlZ0V4cCBtZXRob2RzIGNhbGwgLmV4ZWNcbiAgICB2YXIgZXhlY0NhbGxlZCA9IGZhbHNlO1xuICAgIHZhciByZSA9IC9hLztcblxuICAgIGlmIChLRVkgPT09ICdzcGxpdCcpIHtcbiAgICAgIC8vIFdlIGNhbid0IHVzZSByZWFsIHJlZ2V4IGhlcmUgc2luY2UgaXQgY2F1c2VzIGRlb3B0aW1pemF0aW9uXG4gICAgICAvLyBhbmQgc2VyaW91cyBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvbiBpbiBWOFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMwNlxuICAgICAgcmUgPSB7fTtcbiAgICAgIC8vIFJlZ0V4cFtAQHNwbGl0XSBkb2Vzbid0IGNhbGwgdGhlIHJlZ2V4J3MgZXhlYyBtZXRob2QsIGJ1dCBmaXJzdCBjcmVhdGVzXG4gICAgICAvLyBhIG5ldyBvbmUuIFdlIG5lZWQgdG8gcmV0dXJuIHRoZSBwYXRjaGVkIHJlZ2V4IHdoZW4gY3JlYXRpbmcgdGhlIG5ldyBvbmUuXG4gICAgICByZS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgICAgcmUuY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7IHJldHVybiByZTsgfTtcbiAgICAgIHJlLmZsYWdzID0gJyc7XG4gICAgICByZVtTWU1CT0xdID0gLy4vW1NZTUJPTF07XG4gICAgfVxuXG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgZXhlY0NhbGxlZCA9IHRydWU7IHJldHVybiBudWxsOyB9O1xuXG4gICAgcmVbU1lNQk9MXSgnJyk7XG4gICAgcmV0dXJuICFleGVjQ2FsbGVkO1xuICB9KTtcblxuICBpZiAoXG4gICAgIURFTEVHQVRFU19UT19TWU1CT0wgfHxcbiAgICAhREVMRUdBVEVTX1RPX0VYRUMgfHxcbiAgICAoS0VZID09PSAncmVwbGFjZScgJiYgIShcbiAgICAgIFJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTICYmXG4gICAgICBSRVBMQUNFX0tFRVBTXyQwICYmXG4gICAgICAhUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkVcbiAgICApKSB8fFxuICAgIChLRVkgPT09ICdzcGxpdCcgJiYgIVNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQylcbiAgKSB7XG4gICAgdmFyIG5hdGl2ZVJlZ0V4cE1ldGhvZCA9IC8uL1tTWU1CT0xdO1xuICAgIHZhciBtZXRob2RzID0gZXhlYyhTWU1CT0wsICcnW0tFWV0sIGZ1bmN0aW9uIChuYXRpdmVNZXRob2QsIHJlZ2V4cCwgc3RyLCBhcmcyLCBmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgaWYgKHJlZ2V4cC5leGVjID09PSByZWdleHBFeGVjKSB7XG4gICAgICAgIGlmIChERUxFR0FURVNfVE9fU1lNQk9MICYmICFmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgICAgIC8vIFRoZSBuYXRpdmUgU3RyaW5nIG1ldGhvZCBhbHJlYWR5IGRlbGVnYXRlcyB0byBAQG1ldGhvZCAodGhpc1xuICAgICAgICAgIC8vIHBvbHlmaWxsZWQgZnVuY3Rpb24pLCBsZWFzaW5nIHRvIGluZmluaXRlIHJlY3Vyc2lvbi5cbiAgICAgICAgICAvLyBXZSBhdm9pZCBpdCBieSBkaXJlY3RseSBjYWxsaW5nIHRoZSBuYXRpdmUgQEBtZXRob2QgbWV0aG9kLlxuICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVSZWdFeHBNZXRob2QuY2FsbChyZWdleHAsIHN0ciwgYXJnMikgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlTWV0aG9kLmNhbGwoc3RyLCByZWdleHAsIGFyZzIpIH07XG4gICAgICB9XG4gICAgICByZXR1cm4geyBkb25lOiBmYWxzZSB9O1xuICAgIH0sIHtcbiAgICAgIFJFUExBQ0VfS0VFUFNfJDA6IFJFUExBQ0VfS0VFUFNfJDAsXG4gICAgICBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRTogUkVHRVhQX1JFUExBQ0VfU1VCU1RJVFVURVNfVU5ERUZJTkVEX0NBUFRVUkVcbiAgICB9KTtcbiAgICB2YXIgc3RyaW5nTWV0aG9kID0gbWV0aG9kc1swXTtcbiAgICB2YXIgcmVnZXhNZXRob2QgPSBtZXRob2RzWzFdO1xuXG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJpbmdNZXRob2QpO1xuICAgIHJlZGVmaW5lKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcbiAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG4gICAgICA/IGZ1bmN0aW9uIChzdHJpbmcsIGFyZykgeyByZXR1cm4gcmVnZXhNZXRob2QuY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiByZWdleE1ldGhvZC5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICApO1xuICB9XG5cbiAgaWYgKHNoYW0pIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShSZWdFeHAucHJvdG90eXBlW1NZTUJPTF0sICdzaGFtJywgdHJ1ZSk7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImQ4MWRcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciAkID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjIzZTdcIik7XG52YXIgJG1hcCA9IF9fd2VicGFja19yZXF1aXJlX18oXCJiNzI3XCIpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjFkZGVcIik7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYWU0MFwiKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdtYXAnKTtcbi8vIEZGNDktIGlzc3VlXG52YXIgVVNFU19UT19MRU5HVEggPSBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCgnbWFwJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiZGE4NFwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24oZ2xvYmFsKSB7dmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKHRoaXMsIF9fd2VicGFja19yZXF1aXJlX18oXCJjOGJhXCIpKSlcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiZGJiNFwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgJCA9IF9fd2VicGFja19yZXF1aXJlX18oXCIyM2U3XCIpO1xudmFyIERFU0NSSVBUT1JTID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjgzYWJcIik7XG52YXIgb3duS2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oXCI1NmVmXCIpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oXCJmYzZhXCIpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oXCIwNmNmXCIpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjg0MThcIik7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yc1xuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqZWN0KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gICAgdmFyIGtleXMgPSBvd25LZXlzKE8pO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBrZXksIGRlc2NyaXB0b3I7XG4gICAgd2hpbGUgKGtleXMubGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywga2V5ID0ga2V5c1tpbmRleCsrXSk7XG4gICAgICBpZiAoZGVzY3JpcHRvciAhPT0gdW5kZWZpbmVkKSBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImRiZjFcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24oZ2xvYmFsKSB7LyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImFcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBjb25zb2xlOyB9KTtcbmZ1bmN0aW9uIGdldENvbnNvbGUoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5jb25zb2xlO1xuICB9XG5cbiAgcmV0dXJuIGdsb2JhbC5jb25zb2xlO1xufVxuXG52YXIgY29uc29sZSA9IGdldENvbnNvbGUoKTtcblxuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKHRoaXMsIF9fd2VicGFja19yZXF1aXJlX18oXCJjOGJhXCIpKSlcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiZGRiMFwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImRhODRcIik7XG52YXIgRE9NSXRlcmFibGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImZkYmNcIik7XG52YXIgQXJyYXlJdGVyYXRvck1ldGhvZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZTI2MFwiKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiOTExMlwiKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYjYyMlwiKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgQXJyYXlWYWx1ZXMgPSBBcnJheUl0ZXJhdG9yTWV0aG9kcy52YWx1ZXM7XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbQ09MTEVDVElPTl9OQU1FXTtcbiAgdmFyIENvbGxlY3Rpb25Qcm90b3R5cGUgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSkge1xuICAgIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICAgIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlW0lURVJBVE9SXSAhPT0gQXJyYXlWYWx1ZXMpIHRyeSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgQ29sbGVjdGlvblByb3RvdHlwZVtJVEVSQVRPUl0gPSBBcnJheVZhbHVlcztcbiAgICB9XG4gICAgaWYgKCFDb2xsZWN0aW9uUHJvdG90eXBlW1RPX1NUUklOR19UQUddKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRywgQ09MTEVDVElPTl9OQU1FKTtcbiAgICB9XG4gICAgaWYgKERPTUl0ZXJhYmxlc1tDT0xMRUNUSU9OX05BTUVdKSBmb3IgKHZhciBNRVRIT0RfTkFNRSBpbiBBcnJheUl0ZXJhdG9yTWV0aG9kcykge1xuICAgICAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gICAgICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZVtNRVRIT0RfTkFNRV0gIT09IEFycmF5SXRlcmF0b3JNZXRob2RzW01FVEhPRF9OQU1FXSkgdHJ5IHtcbiAgICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsIE1FVEhPRF9OQU1FLCBBcnJheUl0ZXJhdG9yTWV0aG9kc1tNRVRIT0RfTkFNRV0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgQ29sbGVjdGlvblByb3RvdHlwZVtNRVRIT0RfTkFNRV0gPSBBcnJheUl0ZXJhdG9yTWV0aG9kc1tNRVRIT0RfTkFNRV07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiZGY3NVwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImNhODRcIik7XG52YXIgZW51bUJ1Z0tleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNzgzOVwiKTtcblxuLy8gYE9iamVjdC5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiZTAxYVwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8vIGBTeW1ib2wucHJvdG90eXBlLmRlc2NyaXB0aW9uYCBnZXR0ZXJcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN5bWJvbC5wcm90b3R5cGUuZGVzY3JpcHRpb25cblxudmFyICQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMjNlN1wiKTtcbnZhciBERVNDUklQVE9SUyA9IF9fd2VicGFja19yZXF1aXJlX18oXCI4M2FiXCIpO1xudmFyIGdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oXCJkYTg0XCIpO1xudmFyIGhhcyA9IF9fd2VicGFja19yZXF1aXJlX18oXCI1MTM1XCIpO1xudmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjg2MWRcIik7XG52YXIgZGVmaW5lUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiOWJmMlwiKS5mO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZTg5M1wiKTtcblxudmFyIE5hdGl2ZVN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG5cbmlmIChERVNDUklQVE9SUyAmJiB0eXBlb2YgTmF0aXZlU3ltYm9sID09ICdmdW5jdGlvbicgJiYgKCEoJ2Rlc2NyaXB0aW9uJyBpbiBOYXRpdmVTeW1ib2wucHJvdG90eXBlKSB8fFxuICAvLyBTYWZhcmkgMTIgYnVnXG4gIE5hdGl2ZVN5bWJvbCgpLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWRcbikpIHtcbiAgdmFyIEVtcHR5U3RyaW5nRGVzY3JpcHRpb25TdG9yZSA9IHt9O1xuICAvLyB3cmFwIFN5bWJvbCBjb25zdHJ1Y3RvciBmb3IgY29ycmVjdCB3b3JrIHdpdGggdW5kZWZpbmVkIGRlc2NyaXB0aW9uXG4gIHZhciBTeW1ib2xXcmFwcGVyID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIHZhciBkZXNjcmlwdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPCAxIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogU3RyaW5nKGFyZ3VtZW50c1swXSk7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMgaW5zdGFuY2VvZiBTeW1ib2xXcmFwcGVyXG4gICAgICA/IG5ldyBOYXRpdmVTeW1ib2woZGVzY3JpcHRpb24pXG4gICAgICAvLyBpbiBFZGdlIDEzLCBTdHJpbmcoU3ltYm9sKHVuZGVmaW5lZCkpID09PSAnU3ltYm9sKHVuZGVmaW5lZCknXG4gICAgICA6IGRlc2NyaXB0aW9uID09PSB1bmRlZmluZWQgPyBOYXRpdmVTeW1ib2woKSA6IE5hdGl2ZVN5bWJvbChkZXNjcmlwdGlvbik7XG4gICAgaWYgKGRlc2NyaXB0aW9uID09PSAnJykgRW1wdHlTdHJpbmdEZXNjcmlwdGlvblN0b3JlW3Jlc3VsdF0gPSB0cnVlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoU3ltYm9sV3JhcHBlciwgTmF0aXZlU3ltYm9sKTtcbiAgdmFyIHN5bWJvbFByb3RvdHlwZSA9IFN5bWJvbFdyYXBwZXIucHJvdG90eXBlID0gTmF0aXZlU3ltYm9sLnByb3RvdHlwZTtcbiAgc3ltYm9sUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gU3ltYm9sV3JhcHBlcjtcblxuICB2YXIgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90b3R5cGUudG9TdHJpbmc7XG4gIHZhciBuYXRpdmUgPSBTdHJpbmcoTmF0aXZlU3ltYm9sKCd0ZXN0JykpID09ICdTeW1ib2wodGVzdCknO1xuICB2YXIgcmVnZXhwID0gL15TeW1ib2xcXCgoLiopXFwpW14pXSskLztcbiAgZGVmaW5lUHJvcGVydHkoc3ltYm9sUHJvdG90eXBlLCAnZGVzY3JpcHRpb24nLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gZGVzY3JpcHRpb24oKSB7XG4gICAgICB2YXIgc3ltYm9sID0gaXNPYmplY3QodGhpcykgPyB0aGlzLnZhbHVlT2YoKSA6IHRoaXM7XG4gICAgICB2YXIgc3RyaW5nID0gc3ltYm9sVG9TdHJpbmcuY2FsbChzeW1ib2wpO1xuICAgICAgaWYgKGhhcyhFbXB0eVN0cmluZ0Rlc2NyaXB0aW9uU3RvcmUsIHN5bWJvbCkpIHJldHVybiAnJztcbiAgICAgIHZhciBkZXNjID0gbmF0aXZlID8gc3RyaW5nLnNsaWNlKDcsIC0xKSA6IHN0cmluZy5yZXBsYWNlKHJlZ2V4cCwgJyQxJyk7XG4gICAgICByZXR1cm4gZGVzYyA9PT0gJycgPyB1bmRlZmluZWQgOiBkZXNjO1xuICAgIH1cbiAgfSk7XG5cbiAgJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiB0cnVlIH0sIHtcbiAgICBTeW1ib2w6IFN5bWJvbFdyYXBwZXJcbiAgfSk7XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiZTE2M1wiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgaGFzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjUxMzVcIik7XG52YXIgdG9PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiN2IwYlwiKTtcbnZhciBzaGFyZWRLZXkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZjc3MlwiKTtcbnZhciBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZTE3N1wiKTtcblxudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8vIGBPYmplY3QuZ2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldHByb3RvdHlwZW9mXG5tb2R1bGUuZXhwb3J0cyA9IENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90b3R5cGUgOiBudWxsO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJlMTc3XCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBmYWlscyA9IF9fd2VicGFja19yZXF1aXJlX18oXCJkMDM5XCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgRi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBudWxsO1xuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG5ldyBGKCkpICE9PSBGLnByb3RvdHlwZTtcbn0pO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImUyNjBcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB0b0luZGV4ZWRPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZmM2YVwiKTtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjQ0ZDJcIik7XG52YXIgSXRlcmF0b3JzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjNmOGNcIik7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oXCI2OWYzXCIpO1xudmFyIGRlZmluZUl0ZXJhdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjdkZDBcIik7XG5cbnZhciBBUlJBWV9JVEVSQVRPUiA9ICdBcnJheSBJdGVyYXRvcic7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihBUlJBWV9JVEVSQVRPUik7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZW50cmllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZW50cmllc1xuLy8gYEFycmF5LnByb3RvdHlwZS5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5rZXlzXG4vLyBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUudmFsdWVzXG4vLyBgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQGl0ZXJhdG9yXG4vLyBgQ3JlYXRlQXJyYXlJdGVyYXRvcmAgaW50ZXJuYWwgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1jcmVhdGVhcnJheWl0ZXJhdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZUl0ZXJhdG9yKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG4gICAgdHlwZTogQVJSQVlfSVRFUkFUT1IsXG4gICAgdGFyZ2V0OiB0b0luZGV4ZWRPYmplY3QoaXRlcmF0ZWQpLCAvLyB0YXJnZXRcbiAgICBpbmRleDogMCwgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgICBraW5kOiBraW5kICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtpbmRcbiAgfSk7XG4vLyBgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtJWFycmF5aXRlcmF0b3Jwcm90b3R5cGUlLm5leHRcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgdmFyIHRhcmdldCA9IHN0YXRlLnRhcmdldDtcbiAgdmFyIGtpbmQgPSBzdGF0ZS5raW5kO1xuICB2YXIgaW5kZXggPSBzdGF0ZS5pbmRleCsrO1xuICBpZiAoIXRhcmdldCB8fCBpbmRleCA+PSB0YXJnZXQubGVuZ3RoKSB7XG4gICAgc3RhdGUudGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiB7IHZhbHVlOiBpbmRleCwgZG9uZTogZmFsc2UgfTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiB7IHZhbHVlOiB0YXJnZXRbaW5kZXhdLCBkb25lOiBmYWxzZSB9O1xuICByZXR1cm4geyB2YWx1ZTogW2luZGV4LCB0YXJnZXRbaW5kZXhdXSwgZG9uZTogZmFsc2UgfTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1jcmVhdGV1bm1hcHBlZGFyZ3VtZW50c29iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtY3JlYXRlbWFwcGVkYXJndW1lbnRzb2JqZWN0XG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiZTQzOVwiOlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgJCA9IF9fd2VicGFja19yZXF1aXJlX18oXCIyM2U3XCIpO1xudmFyIGZhaWxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImQwMzlcIik7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImZjNmFcIik7XG52YXIgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjA2Y2ZcIikuZjtcbnZhciBERVNDUklQVE9SUyA9IF9fd2VicGFja19yZXF1aXJlX18oXCI4M2FiXCIpO1xuXG52YXIgRkFJTFNfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKDEpOyB9KTtcbnZhciBGT1JDRUQgPSAhREVTQ1JJUFRPUlMgfHwgRkFJTFNfT05fUFJJTUlUSVZFUztcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogRk9SQ0VELCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gICAgcmV0dXJuIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0luZGV4ZWRPYmplY3QoaXQpLCBrZXkpO1xuICB9XG59KTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJlNTM4XCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciB3ZWxsS25vd25TeW1ib2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYjYyMlwiKTtcblxuZXhwb3J0cy5mID0gd2VsbEtub3duU3ltYm9sO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImU4OTNcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGhhcyA9IF9fd2VicGFja19yZXF1aXJlX18oXCI1MTM1XCIpO1xudmFyIG93bktleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNTZlZlwiKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMDZjZlwiKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oXCI5YmYyXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhcyh0YXJnZXQsIGtleSkpIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgfVxufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJlOGI1XCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBjbGFzc29mID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImM2YjZcIik7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzYXJyYXlcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY2xhc3NvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImU5NWFcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIHdlbGxLbm93blN5bWJvbCA9IF9fd2VicGFja19yZXF1aXJlX18oXCJiNjIyXCIpO1xudmFyIEl0ZXJhdG9ycyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIzZjhjXCIpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG90eXBlW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJmNWRmXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMDBlZVwiKTtcbnZhciBjbGFzc29mUmF3ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImM2YjZcIik7XG52YXIgd2VsbEtub3duU3ltYm9sID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImI2MjJcIik7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBDT1JSRUNUX0FSR1VNRU5UUyA9IGNsYXNzb2ZSYXcoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRPX1NUUklOR19UQUcpKSA9PSAnc3RyaW5nJyA/IHRhZ1xuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQ09SUkVDVF9BUkdVTUVOVFMgPyBjbGFzc29mUmF3KE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKHJlc3VsdCA9IGNsYXNzb2ZSYXcoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiByZXN1bHQ7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImY3NzJcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIHNoYXJlZCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI1NjkyXCIpO1xudmFyIHVpZCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI5MGUzXCIpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJmYjE1XCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLy8gRVNNIENPTVBBVCBGTEFHXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2UvbGliL2NvbW1hbmRzL2J1aWxkL3NldFB1YmxpY1BhdGguanNcbi8vIFRoaXMgZmlsZSBpcyBpbXBvcnRlZCBpbnRvIGxpYi93YyBjbGllbnQgYnVuZGxlcy5cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBjdXJyZW50U2NyaXB0ID0gd2luZG93LmRvY3VtZW50LmN1cnJlbnRTY3JpcHRcbiAgaWYgKHRydWUpIHtcbiAgICB2YXIgZ2V0Q3VycmVudFNjcmlwdCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI4ODc1XCIpXG4gICAgY3VycmVudFNjcmlwdCA9IGdldEN1cnJlbnRTY3JpcHQoKVxuXG4gICAgLy8gZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIGJlY2F1c2UgcHJldmlvdXNseSB3ZSBkaXJlY3RseSBpbmNsdWRlZCB0aGUgcG9seWZpbGxcbiAgICBpZiAoISgnY3VycmVudFNjcmlwdCcgaW4gZG9jdW1lbnQpKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZG9jdW1lbnQsICdjdXJyZW50U2NyaXB0JywgeyBnZXQ6IGdldEN1cnJlbnRTY3JpcHQgfSlcbiAgICB9XG4gIH1cblxuICB2YXIgc3JjID0gY3VycmVudFNjcmlwdCAmJiBjdXJyZW50U2NyaXB0LnNyYy5tYXRjaCgvKC4rXFwvKVteL10rXFwuanMoXFw/LiopPyQvKVxuICBpZiAoc3JjKSB7XG4gICAgX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc3JjWzFdIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgfVxufVxuXG4vLyBJbmRpY2F0ZSB0byB3ZWJwYWNrIHRoYXQgdGhpcyBmaWxlIGNhbiBiZSBjb25jYXRlbmF0ZWRcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHNldFB1YmxpY1BhdGggPSAobnVsbCk7XG5cbi8vIEVYVEVSTkFMIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qc1xudmFyIGVzX2FycmF5X2NvbmNhdCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI5OWFmXCIpO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanNcbnZhciBlc19hcnJheV9maWx0ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNGRlNFwiKTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZm9yLWVhY2guanNcbnZhciBlc19hcnJheV9mb3JfZWFjaCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI0MTYwXCIpO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5pbmRleC1vZi5qc1xudmFyIGVzX2FycmF5X2luZGV4X29mID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImM5NzVcIik7XG5cbi8vIEVYVEVSTkFMIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qc1xudmFyIGVzX2FycmF5X21hcCA9IF9fd2VicGFja19yZXF1aXJlX18oXCJkODFkXCIpO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zcGxpY2UuanNcbnZhciBlc19hcnJheV9zcGxpY2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYTQzNFwiKTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qc1xudmFyIHdlYl9kb21fY29sbGVjdGlvbnNfZm9yX2VhY2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMTU5YlwiKTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3ltYm9sLmpzXG52YXIgZXNfc3ltYm9sID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImE0ZDNcIik7XG5cbi8vIEVYVEVSTkFMIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbnZhciBlc19vYmplY3RfZ2V0X293bl9wcm9wZXJ0eV9kZXNjcmlwdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImU0MzlcIik7XG5cbi8vIEVYVEVSTkFMIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzXG52YXIgZXNfb2JqZWN0X2dldF9vd25fcHJvcGVydHlfZGVzY3JpcHRvcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZGJiNFwiKTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmtleXMuanNcbnZhciBlc19vYmplY3Rfa2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oXCJiNjRiXCIpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qc1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyLmpzXG5cblxuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanNcbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cbi8vIEVYVEVSTkFMIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC5kZXNjcmlwdGlvbi5qc1xudmFyIGVzX3N5bWJvbF9kZXNjcmlwdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oXCJlMDFhXCIpO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wuaXRlcmF0b3IuanNcbnZhciBlc19zeW1ib2xfaXRlcmF0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZDI4YlwiKTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuaXRlcmF0b3IuanNcbnZhciBlc19hcnJheV9pdGVyYXRvciA9IF9fd2VicGFja19yZXF1aXJlX18oXCJlMjYwXCIpO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudG8tc3RyaW5nLmpzXG52YXIgZXNfb2JqZWN0X3RvX3N0cmluZyA9IF9fd2VicGFja19yZXF1aXJlX18oXCJkM2I3XCIpO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuaXRlcmF0b3IuanNcbnZhciBlc19zdHJpbmdfaXRlcmF0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiM2NhM1wiKTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvci5qc1xudmFyIHdlYl9kb21fY29sbGVjdGlvbnNfaXRlcmF0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiZGRiMFwiKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXQuanNcblxuXG5cblxuXG5cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZnJvbS5qc1xudmFyIGVzX2FycmF5X2Zyb20gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYTYzMFwiKTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuc2xpY2UuanNcbnZhciBlc19hcnJheV9zbGljZSA9IF9fd2VicGFja19yZXF1aXJlX18oXCJmYjZhXCIpO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzXG52YXIgZXNfZnVuY3Rpb25fbmFtZSA9IF9fd2VicGFja19yZXF1aXJlX18oXCJiMGMwXCIpO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAudG8tc3RyaW5nLmpzXG52YXIgZXNfcmVnZXhwX3RvX3N0cmluZyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIyNWYwXCIpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1xuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanNcbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzXG5cblxuXG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xufVxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanNcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qc1xuXG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanNcblxuXG5cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuLy8gRVhURVJOQUwgTU9EVUxFOiBleHRlcm5hbCB7XCJjb21tb25qc1wiOlwic29ydGFibGVqc1wiLFwiY29tbW9uanMyXCI6XCJzb3J0YWJsZWpzXCIsXCJhbWRcIjpcInNvcnRhYmxlanNcIixcInJvb3RcIjpcIlNvcnRhYmxlXCJ9XG52YXIgZXh0ZXJuYWxfY29tbW9uanNfc29ydGFibGVqc19jb21tb25qczJfc29ydGFibGVqc19hbWRfc29ydGFibGVqc19yb290X1NvcnRhYmxlXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCJhMzUyXCIpO1xudmFyIGV4dGVybmFsX2NvbW1vbmpzX3NvcnRhYmxlanNfY29tbW9uanMyX3NvcnRhYmxlanNfYW1kX3NvcnRhYmxlanNfcm9vdF9Tb3J0YWJsZV9kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihleHRlcm5hbF9jb21tb25qc19zb3J0YWJsZWpzX2NvbW1vbmpzMl9zb3J0YWJsZWpzX2FtZF9zb3J0YWJsZWpzX3Jvb3RfU29ydGFibGVfKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvdXRpbC9odG1sSGVscGVyLmpzXG5mdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcbiAgaWYgKG5vZGUucGFyZW50RWxlbWVudCAhPT0gbnVsbCkge1xuICAgIG5vZGUucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChub2RlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnROb2RlQXQoZmF0aGVyTm9kZSwgbm9kZSwgcG9zaXRpb24pIHtcbiAgdmFyIHJlZk5vZGUgPSBwb3NpdGlvbiA9PT0gMCA/IGZhdGhlck5vZGUuY2hpbGRyZW5bMF0gOiBmYXRoZXJOb2RlLmNoaWxkcmVuW3Bvc2l0aW9uIC0gMV0ubmV4dFNpYmxpbmc7XG4gIGZhdGhlck5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHJlZk5vZGUpO1xufVxuXG5cbi8vIEVYVEVSTkFMIE1PRFVMRTogLi9zcmMvdXRpbC9jb25zb2xlLmpzXG52YXIgY29uc29sZSA9IF9fd2VicGFja19yZXF1aXJlX18oXCJkYmYxXCIpO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5yZWR1Y2UuanNcbnZhciBlc19hcnJheV9yZWR1Y2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMTNkNVwiKTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmVudHJpZXMuanNcbnZhciBlc19vYmplY3RfZW50cmllcyA9IF9fd2VicGFja19yZXF1aXJlX18oXCI0ZmFkXCIpO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAuZXhlYy5qc1xudmFyIGVzX3JlZ2V4cF9leGVjID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImFjMWZcIik7XG5cbi8vIEVYVEVSTkFMIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5yZXBsYWNlLmpzXG52YXIgZXNfc3RyaW5nX3JlcGxhY2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNTMxOVwiKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvdXRpbC9zdHJpbmcuanNcblxuXG5cbmZ1bmN0aW9uIGNhY2hlZChmbikge1xuICB2YXIgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICByZXR1cm4gZnVuY3Rpb24gY2FjaGVkRm4oc3RyKSB7XG4gICAgdmFyIGhpdCA9IGNhY2hlW3N0cl07XG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpO1xuICB9O1xufVxuXG52YXIgcmVnZXggPSAvLShcXHcpL2c7XG52YXIgY2FtZWxpemUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UocmVnZXgsIGZ1bmN0aW9uIChfLCBjKSB7XG4gICAgcmV0dXJuIGMudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59KTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmxhdC1tYXAuanNcbnZhciBlc19hcnJheV9mbGF0X21hcCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI1ZGI3XCIpO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS51bnNjb3BhYmxlcy5mbGF0LW1hcC5qc1xudmFyIGVzX2FycmF5X3Vuc2NvcGFibGVzX2ZsYXRfbWFwID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjczZDlcIik7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvc29ydGFibGVFdmVudHMuanNcblxuXG5cblxudmFyIG1hbmFnZUFuZEVtaXQgPSBbXCJTdGFydFwiLCBcIkFkZFwiLCBcIlJlbW92ZVwiLCBcIlVwZGF0ZVwiLCBcIkVuZFwiXTtcbnZhciBlbWl0ID0gW1wiQ2hvb3NlXCIsIFwiVW5jaG9vc2VcIiwgXCJTb3J0XCIsIFwiRmlsdGVyXCIsIFwiQ2xvbmVcIl07XG52YXIgbWFuYWdlID0gW1wiTW92ZVwiXTtcbnZhciBldmVudEhhbmRsZXJOYW1lcyA9IFttYW5hZ2UsIG1hbmFnZUFuZEVtaXQsIGVtaXRdLmZsYXRNYXAoZnVuY3Rpb24gKGV2ZW50cykge1xuICByZXR1cm4gZXZlbnRzO1xufSkubWFwKGZ1bmN0aW9uIChldnQpIHtcbiAgcmV0dXJuIFwib25cIi5jb25jYXQoZXZ0KTtcbn0pO1xudmFyIGV2ZW50cyA9IHtcbiAgbWFuYWdlOiBtYW5hZ2UsXG4gIG1hbmFnZUFuZEVtaXQ6IG1hbmFnZUFuZEVtaXQsXG4gIGVtaXQ6IGVtaXRcbn07XG5cbmZ1bmN0aW9uIGlzUmVhZE9ubHkoZXZlbnROYW1lKSB7XG4gIHJldHVybiBldmVudEhhbmRsZXJOYW1lcy5pbmRleE9mKGV2ZW50TmFtZSkgIT09IC0xO1xufVxuXG5cbi8vIEVYVEVSTkFMIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmluY2x1ZGVzLmpzXG52YXIgZXNfYXJyYXlfaW5jbHVkZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiY2FhZFwiKTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnN0YXJ0cy13aXRoLmpzXG52YXIgZXNfc3RyaW5nX3N0YXJ0c193aXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjJjYTBcIik7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3V0aWwvdGFncy5qc1xuXG5cbnZhciB0YWdzID0gW1wiYVwiLCBcImFiYnJcIiwgXCJhZGRyZXNzXCIsIFwiYXJlYVwiLCBcImFydGljbGVcIiwgXCJhc2lkZVwiLCBcImF1ZGlvXCIsIFwiYlwiLCBcImJhc2VcIiwgXCJiZGlcIiwgXCJiZG9cIiwgXCJibG9ja3F1b3RlXCIsIFwiYm9keVwiLCBcImJyXCIsIFwiYnV0dG9uXCIsIFwiY2FudmFzXCIsIFwiY2FwdGlvblwiLCBcImNpdGVcIiwgXCJjb2RlXCIsIFwiY29sXCIsIFwiY29sZ3JvdXBcIiwgXCJkYXRhXCIsIFwiZGF0YWxpc3RcIiwgXCJkZFwiLCBcImRlbFwiLCBcImRldGFpbHNcIiwgXCJkZm5cIiwgXCJkaWFsb2dcIiwgXCJkaXZcIiwgXCJkbFwiLCBcImR0XCIsIFwiZW1cIiwgXCJlbWJlZFwiLCBcImZpZWxkc2V0XCIsIFwiZmlnY2FwdGlvblwiLCBcImZpZ3VyZVwiLCBcImZvb3RlclwiLCBcImZvcm1cIiwgXCJoMVwiLCBcImgyXCIsIFwiaDNcIiwgXCJoNFwiLCBcImg1XCIsIFwiaDZcIiwgXCJoZWFkXCIsIFwiaGVhZGVyXCIsIFwiaGdyb3VwXCIsIFwiaHJcIiwgXCJodG1sXCIsIFwiaVwiLCBcImlmcmFtZVwiLCBcImltZ1wiLCBcImlucHV0XCIsIFwiaW5zXCIsIFwia2JkXCIsIFwibGFiZWxcIiwgXCJsZWdlbmRcIiwgXCJsaVwiLCBcImxpbmtcIiwgXCJtYWluXCIsIFwibWFwXCIsIFwibWFya1wiLCBcIm1hdGhcIiwgXCJtZW51XCIsIFwibWVudWl0ZW1cIiwgXCJtZXRhXCIsIFwibWV0ZXJcIiwgXCJuYXZcIiwgXCJub3NjcmlwdFwiLCBcIm9iamVjdFwiLCBcIm9sXCIsIFwib3B0Z3JvdXBcIiwgXCJvcHRpb25cIiwgXCJvdXRwdXRcIiwgXCJwXCIsIFwicGFyYW1cIiwgXCJwaWN0dXJlXCIsIFwicHJlXCIsIFwicHJvZ3Jlc3NcIiwgXCJxXCIsIFwicmJcIiwgXCJycFwiLCBcInJ0XCIsIFwicnRjXCIsIFwicnVieVwiLCBcInNcIiwgXCJzYW1wXCIsIFwic2NyaXB0XCIsIFwic2VjdGlvblwiLCBcInNlbGVjdFwiLCBcInNsb3RcIiwgXCJzbWFsbFwiLCBcInNvdXJjZVwiLCBcInNwYW5cIiwgXCJzdHJvbmdcIiwgXCJzdHlsZVwiLCBcInN1YlwiLCBcInN1bW1hcnlcIiwgXCJzdXBcIiwgXCJzdmdcIiwgXCJ0YWJsZVwiLCBcInRib2R5XCIsIFwidGRcIiwgXCJ0ZW1wbGF0ZVwiLCBcInRleHRhcmVhXCIsIFwidGZvb3RcIiwgXCJ0aFwiLCBcInRoZWFkXCIsIFwidGltZVwiLCBcInRpdGxlXCIsIFwidHJcIiwgXCJ0cmFja1wiLCBcInVcIiwgXCJ1bFwiLCBcInZhclwiLCBcInZpZGVvXCIsIFwid2JyXCJdO1xuXG5mdW5jdGlvbiBpc0h0bWxUYWcobmFtZSkge1xuICByZXR1cm4gdGFncy5pbmNsdWRlcyhuYW1lKTtcbn1cblxuZnVuY3Rpb24gaXNUcmFuc2l0aW9uKG5hbWUpIHtcbiAgcmV0dXJuIFtcInRyYW5zaXRpb24tZ3JvdXBcIiwgXCJUcmFuc2l0aW9uR3JvdXBcIl0uaW5jbHVkZXMobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGlzSHRtbEF0dHJpYnV0ZSh2YWx1ZSkge1xuICByZXR1cm4gW1wiaWRcIiwgXCJjbGFzc1wiLCBcInJvbGVcIiwgXCJzdHlsZVwiXS5pbmNsdWRlcyh2YWx1ZSkgfHwgdmFsdWUuc3RhcnRzV2l0aChcImRhdGEtXCIpIHx8IHZhbHVlLnN0YXJ0c1dpdGgoXCJhcmlhLVwiKSB8fCB2YWx1ZS5zdGFydHNXaXRoKFwib25cIik7XG59XG5cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jb21wb25lbnRCdWlsZGVySGVscGVyLmpzXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBwcm9qZWN0KGVudHJpZXMpIHtcbiAgcmV0dXJuIGVudHJpZXMucmVkdWNlKGZ1bmN0aW9uIChyZXMsIF9yZWYpIHtcbiAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAga2V5ID0gX3JlZjJbMF0sXG4gICAgICAgIHZhbHVlID0gX3JlZjJbMV07XG5cbiAgICByZXNba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiByZXM7XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50QXR0cmlidXRlcyhfcmVmMykge1xuICB2YXIgJGF0dHJzID0gX3JlZjMuJGF0dHJzLFxuICAgICAgX3JlZjMkY29tcG9uZW50RGF0YSA9IF9yZWYzLmNvbXBvbmVudERhdGEsXG4gICAgICBjb21wb25lbnREYXRhID0gX3JlZjMkY29tcG9uZW50RGF0YSA9PT0gdm9pZCAwID8ge30gOiBfcmVmMyRjb21wb25lbnREYXRhO1xuICB2YXIgYXR0cmlidXRlcyA9IHByb2plY3QoT2JqZWN0LmVudHJpZXMoJGF0dHJzKS5maWx0ZXIoZnVuY3Rpb24gKF9yZWY0KSB7XG4gICAgdmFyIF9yZWY1ID0gX3NsaWNlZFRvQXJyYXkoX3JlZjQsIDIpLFxuICAgICAgICBrZXkgPSBfcmVmNVswXSxcbiAgICAgICAgXyA9IF9yZWY1WzFdO1xuXG4gICAgcmV0dXJuIGlzSHRtbEF0dHJpYnV0ZShrZXkpO1xuICB9KSk7XG4gIHJldHVybiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgYXR0cmlidXRlcyksIGNvbXBvbmVudERhdGEpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTb3J0YWJsZU9wdGlvbihfcmVmNikge1xuICB2YXIgJGF0dHJzID0gX3JlZjYuJGF0dHJzLFxuICAgICAgY2FsbEJhY2tCdWlsZGVyID0gX3JlZjYuY2FsbEJhY2tCdWlsZGVyO1xuICB2YXIgb3B0aW9ucyA9IHByb2plY3QoZ2V0VmFsaWRTb3J0YWJsZUVudHJpZXMoJGF0dHJzKSk7XG4gIE9iamVjdC5lbnRyaWVzKGNhbGxCYWNrQnVpbGRlcikuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjcpIHtcbiAgICB2YXIgX3JlZjggPSBfc2xpY2VkVG9BcnJheShfcmVmNywgMiksXG4gICAgICAgIGV2ZW50VHlwZSA9IF9yZWY4WzBdLFxuICAgICAgICBldmVudEJ1aWxkZXIgPSBfcmVmOFsxXTtcblxuICAgIGV2ZW50c1tldmVudFR5cGVdLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBvcHRpb25zW1wib25cIi5jb25jYXQoZXZlbnQpXSA9IGV2ZW50QnVpbGRlcihldmVudCk7XG4gICAgfSk7XG4gIH0pO1xuICB2YXIgZHJhZ2dhYmxlID0gXCJbZGF0YS1kcmFnZ2FibGVdXCIuY29uY2F0KG9wdGlvbnMuZHJhZ2dhYmxlIHx8IFwiXCIpO1xuICByZXR1cm4gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIG9wdGlvbnMpLCB7fSwge1xuICAgIGRyYWdnYWJsZTogZHJhZ2dhYmxlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRWYWxpZFNvcnRhYmxlRW50cmllcyh2YWx1ZSkge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXModmFsdWUpLmZpbHRlcihmdW5jdGlvbiAoX3JlZjkpIHtcbiAgICB2YXIgX3JlZjEwID0gX3NsaWNlZFRvQXJyYXkoX3JlZjksIDIpLFxuICAgICAgICBrZXkgPSBfcmVmMTBbMF0sXG4gICAgICAgIF8gPSBfcmVmMTBbMV07XG5cbiAgICByZXR1cm4gIWlzSHRtbEF0dHJpYnV0ZShrZXkpO1xuICB9KS5tYXAoZnVuY3Rpb24gKF9yZWYxMSkge1xuICAgIHZhciBfcmVmMTIgPSBfc2xpY2VkVG9BcnJheShfcmVmMTEsIDIpLFxuICAgICAgICBrZXkgPSBfcmVmMTJbMF0sXG4gICAgICAgIHZhbHVlID0gX3JlZjEyWzFdO1xuXG4gICAgcmV0dXJuIFtjYW1lbGl6ZShrZXkpLCB2YWx1ZV07XG4gIH0pLmZpbHRlcihmdW5jdGlvbiAoX3JlZjEzKSB7XG4gICAgdmFyIF9yZWYxNCA9IF9zbGljZWRUb0FycmF5KF9yZWYxMywgMiksXG4gICAgICAgIGtleSA9IF9yZWYxNFswXSxcbiAgICAgICAgXyA9IF9yZWYxNFsxXTtcblxuICAgIHJldHVybiAhaXNSZWFkT25seShrZXkpO1xuICB9KTtcbn1cblxuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maW5kLWluZGV4LmpzXG52YXIgZXNfYXJyYXlfZmluZF9pbmRleCA9IF9fd2VicGFja19yZXF1aXJlX18oXCJjNzQwXCIpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qc1xuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2NvbXBvbmVudFN0cnVjdHVyZS5qc1xuXG5cblxuXG5cblxuXG5cbnZhciBnZXRIdG1sRWxlbWVudEZyb21Ob2RlID0gZnVuY3Rpb24gZ2V0SHRtbEVsZW1lbnRGcm9tTm9kZShfcmVmKSB7XG4gIHZhciBlbCA9IF9yZWYuZWw7XG4gIHJldHVybiBlbDtcbn07XG5cbnZhciBhZGRDb250ZXh0ID0gZnVuY3Rpb24gYWRkQ29udGV4dChkb21FbGVtZW50LCBjb250ZXh0KSB7XG4gIHJldHVybiBkb21FbGVtZW50Ll9fZHJhZ2dhYmxlX2NvbnRleHQgPSBjb250ZXh0O1xufTtcblxudmFyIGdldENvbnRleHQgPSBmdW5jdGlvbiBnZXRDb250ZXh0KGRvbUVsZW1lbnQpIHtcbiAgcmV0dXJuIGRvbUVsZW1lbnQuX19kcmFnZ2FibGVfY29udGV4dDtcbn07XG5cbnZhciBjb21wb25lbnRTdHJ1Y3R1cmVfQ29tcG9uZW50U3RydWN0dXJlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29tcG9uZW50U3RydWN0dXJlKF9yZWYyKSB7XG4gICAgdmFyIF9yZWYyJG5vZGVzID0gX3JlZjIubm9kZXMsXG4gICAgICAgIGhlYWRlciA9IF9yZWYyJG5vZGVzLmhlYWRlcixcbiAgICAgICAgZGVmYXVsdE5vZGVzID0gX3JlZjIkbm9kZXMuZGVmYXVsdCxcbiAgICAgICAgZm9vdGVyID0gX3JlZjIkbm9kZXMuZm9vdGVyLFxuICAgICAgICByb290ID0gX3JlZjIucm9vdCxcbiAgICAgICAgcmVhbExpc3QgPSBfcmVmMi5yZWFsTGlzdDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wb25lbnRTdHJ1Y3R1cmUpO1xuXG4gICAgdGhpcy5kZWZhdWx0Tm9kZXMgPSBkZWZhdWx0Tm9kZXM7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoaGVhZGVyKSwgX3RvQ29uc3VtYWJsZUFycmF5KGRlZmF1bHROb2RlcyksIF90b0NvbnN1bWFibGVBcnJheShmb290ZXIpKTtcbiAgICB0aGlzLmV4dGVybmFsQ29tcG9uZW50ID0gcm9vdC5leHRlcm5hbENvbXBvbmVudDtcbiAgICB0aGlzLnJvb3RUcmFuc2l0aW9uID0gcm9vdC50cmFuc2l0aW9uO1xuICAgIHRoaXMudGFnID0gcm9vdC50YWc7XG4gICAgdGhpcy5yZWFsTGlzdCA9IHJlYWxMaXN0O1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENvbXBvbmVudFN0cnVjdHVyZSwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcihoLCBhdHRyaWJ1dGVzKSB7XG4gICAgICB2YXIgdGFnID0gdGhpcy50YWcsXG4gICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLFxuICAgICAgICAgIF9pc1Jvb3RDb21wb25lbnQgPSB0aGlzLl9pc1Jvb3RDb21wb25lbnQ7XG4gICAgICB2YXIgb3B0aW9uID0gIV9pc1Jvb3RDb21wb25lbnQgPyBjaGlsZHJlbiA6IHtcbiAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGgodGFnLCBhdHRyaWJ1dGVzLCBvcHRpb24pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1cGRhdGVkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZWQoKSB7XG4gICAgICB2YXIgZGVmYXVsdE5vZGVzID0gdGhpcy5kZWZhdWx0Tm9kZXMsXG4gICAgICAgICAgcmVhbExpc3QgPSB0aGlzLnJlYWxMaXN0O1xuICAgICAgZGVmYXVsdE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUsIGluZGV4KSB7XG4gICAgICAgIGFkZENvbnRleHQoZ2V0SHRtbEVsZW1lbnRGcm9tTm9kZShub2RlKSwge1xuICAgICAgICAgIGVsZW1lbnQ6IHJlYWxMaXN0W2luZGV4XSxcbiAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0VW5kZXJseWluZ1ZtXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFVuZGVybHlpbmdWbShkb21FbGVtZW50KSB7XG4gICAgICByZXR1cm4gZ2V0Q29udGV4dChkb21FbGVtZW50KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Vm1JbmRleEZyb21Eb21JbmRleFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWbUluZGV4RnJvbURvbUluZGV4KGRvbUluZGV4LCBlbGVtZW50KSB7XG4gICAgICB2YXIgZGVmYXVsdE5vZGVzID0gdGhpcy5kZWZhdWx0Tm9kZXM7XG4gICAgICB2YXIgbGVuZ3RoID0gZGVmYXVsdE5vZGVzLmxlbmd0aDtcbiAgICAgIHZhciBkb21DaGlsZHJlbiA9IGVsZW1lbnQuY2hpbGRyZW47XG4gICAgICB2YXIgZG9tRWxlbWVudCA9IGRvbUNoaWxkcmVuLml0ZW0oZG9tSW5kZXgpO1xuXG4gICAgICBpZiAoZG9tRWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IGdldENvbnRleHQoZG9tRWxlbWVudCk7XG5cbiAgICAgIGlmIChjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiBjb250ZXh0LmluZGV4O1xuICAgICAgfVxuXG4gICAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgZmlyc3REb21MaXN0RWxlbWVudCA9IGdldEh0bWxFbGVtZW50RnJvbU5vZGUoZGVmYXVsdE5vZGVzWzBdKTtcblxuICAgICAgdmFyIGluZGV4Rmlyc3REb21MaXN0RWxlbWVudCA9IF90b0NvbnN1bWFibGVBcnJheShkb21DaGlsZHJlbikuZmluZEluZGV4KGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50ID09PSBmaXJzdERvbUxpc3RFbGVtZW50O1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBkb21JbmRleCA8IGluZGV4Rmlyc3REb21MaXN0RWxlbWVudCA/IDAgOiBsZW5ndGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIl9pc1Jvb3RDb21wb25lbnRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmV4dGVybmFsQ29tcG9uZW50IHx8IHRoaXMucm9vdFRyYW5zaXRpb247XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbXBvbmVudFN0cnVjdHVyZTtcbn0oKTtcblxuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJ2dWVcIixcImNvbW1vbmpzMlwiOlwidnVlXCIsXCJyb290XCI6XCJWdWVcIn1cbnZhciBleHRlcm5hbF9jb21tb25qc192dWVfY29tbW9uanMyX3Z1ZV9yb290X1Z1ZV8gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiOGJiZlwiKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9yZW5kZXJIZWxwZXIuanNcblxuXG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIGdldFNsb3Qoc2xvdHMsIGtleSkge1xuICB2YXIgc2xvdFZhbHVlID0gc2xvdHNba2V5XTtcbiAgcmV0dXJuIHNsb3RWYWx1ZSA/IHNsb3RWYWx1ZSgpIDogW107XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVOb2RlcyhfcmVmKSB7XG4gIHZhciAkc2xvdHMgPSBfcmVmLiRzbG90cyxcbiAgICAgIHJlYWxMaXN0ID0gX3JlZi5yZWFsTGlzdCxcbiAgICAgIGdldEtleSA9IF9yZWYuZ2V0S2V5O1xuICB2YXIgbm9ybWFsaXplZExpc3QgPSByZWFsTGlzdCB8fCBbXTtcblxuICB2YXIgX21hcCA9IFtcImhlYWRlclwiLCBcImZvb3RlclwiXS5tYXAoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gZ2V0U2xvdCgkc2xvdHMsIG5hbWUpO1xuICB9KSxcbiAgICAgIF9tYXAyID0gX3NsaWNlZFRvQXJyYXkoX21hcCwgMiksXG4gICAgICBoZWFkZXIgPSBfbWFwMlswXSxcbiAgICAgIGZvb3RlciA9IF9tYXAyWzFdO1xuXG4gIHZhciBpdGVtID0gJHNsb3RzLml0ZW07XG5cbiAgaWYgKCFpdGVtKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZHJhZ2dhYmxlIGVsZW1lbnQgbXVzdCBoYXZlIGFuIGl0ZW0gc2xvdFwiKTtcbiAgfVxuXG4gIHZhciBkZWZhdWx0Tm9kZXMgPSBub3JtYWxpemVkTGlzdC5mbGF0TWFwKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xuICAgIHJldHVybiBpdGVtKHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICBpbmRleDogaW5kZXhcbiAgICB9KS5tYXAoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIG5vZGUua2V5ID0gZ2V0S2V5KGVsZW1lbnQpO1xuICAgICAgbm9kZS5wcm9wcyA9IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBub2RlLnByb3BzIHx8IHt9KSwge30sIHtcbiAgICAgICAgXCJkYXRhLWRyYWdnYWJsZVwiOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH0pO1xuICB9KTtcblxuICBpZiAoZGVmYXVsdE5vZGVzLmxlbmd0aCAhPT0gbm9ybWFsaXplZExpc3QubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSXRlbSBzbG90IG11c3QgaGF2ZSBvbmx5IG9uZSBjaGlsZFwiKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGVhZGVyOiBoZWFkZXIsXG4gICAgZm9vdGVyOiBmb290ZXIsXG4gICAgZGVmYXVsdDogZGVmYXVsdE5vZGVzXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFJvb3RJbmZvcm1hdGlvbih0YWcpIHtcbiAgdmFyIHRyYW5zaXRpb24gPSBpc1RyYW5zaXRpb24odGFnKTtcbiAgdmFyIGV4dGVybmFsQ29tcG9uZW50ID0gIWlzSHRtbFRhZyh0YWcpICYmICF0cmFuc2l0aW9uO1xuICByZXR1cm4ge1xuICAgIHRyYW5zaXRpb246IHRyYW5zaXRpb24sXG4gICAgZXh0ZXJuYWxDb21wb25lbnQ6IGV4dGVybmFsQ29tcG9uZW50LFxuICAgIHRhZzogZXh0ZXJuYWxDb21wb25lbnQgPyBPYmplY3QoZXh0ZXJuYWxfY29tbW9uanNfdnVlX2NvbW1vbmpzMl92dWVfcm9vdF9WdWVfW1wicmVzb2x2ZUNvbXBvbmVudFwiXSkodGFnKSA6IHRyYW5zaXRpb24gPyBleHRlcm5hbF9jb21tb25qc192dWVfY29tbW9uanMyX3Z1ZV9yb290X1Z1ZV9bXCJUcmFuc2l0aW9uR3JvdXBcIl0gOiB0YWdcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZUNvbXBvbmVudFN0cnVjdHVyZShfcmVmMikge1xuICB2YXIgJHNsb3RzID0gX3JlZjIuJHNsb3RzLFxuICAgICAgdGFnID0gX3JlZjIudGFnLFxuICAgICAgcmVhbExpc3QgPSBfcmVmMi5yZWFsTGlzdCxcbiAgICAgIGdldEtleSA9IF9yZWYyLmdldEtleTtcbiAgdmFyIG5vZGVzID0gY29tcHV0ZU5vZGVzKHtcbiAgICAkc2xvdHM6ICRzbG90cyxcbiAgICByZWFsTGlzdDogcmVhbExpc3QsXG4gICAgZ2V0S2V5OiBnZXRLZXlcbiAgfSk7XG4gIHZhciByb290ID0gZ2V0Um9vdEluZm9ybWF0aW9uKHRhZyk7XG4gIHJldHVybiBuZXcgY29tcG9uZW50U3RydWN0dXJlX0NvbXBvbmVudFN0cnVjdHVyZSh7XG4gICAgbm9kZXM6IG5vZGVzLFxuICAgIHJvb3Q6IHJvb3QsXG4gICAgcmVhbExpc3Q6IHJlYWxMaXN0XG4gIH0pO1xufVxuXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3Z1ZWRyYWdnYWJsZS5qc1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuZnVuY3Rpb24gX2VtaXQoZXZ0TmFtZSwgZXZ0RGF0YSkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIE9iamVjdChleHRlcm5hbF9jb21tb25qc192dWVfY29tbW9uanMyX3Z1ZV9yb290X1Z1ZV9bXCJuZXh0VGlja1wiXSkoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdGhpcy4kZW1pdChldnROYW1lLnRvTG93ZXJDYXNlKCksIGV2dERhdGEpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gX21hbmFnZShldnROYW1lKSB7XG4gIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoZXZ0RGF0YSwgb3JpZ2luYWxFbGVtZW50KSB7XG4gICAgaWYgKF90aGlzMi5yZWFsTGlzdCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIF90aGlzMltcIm9uRHJhZ1wiLmNvbmNhdChldnROYW1lKV0oZXZ0RGF0YSwgb3JpZ2luYWxFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIF9tYW5hZ2VBbmRFbWl0KGV2dE5hbWUpIHtcbiAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgdmFyIGRlbGVnYXRlQ2FsbEJhY2sgPSBfbWFuYWdlLmNhbGwodGhpcywgZXZ0TmFtZSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChldnREYXRhLCBvcmlnaW5hbEVsZW1lbnQpIHtcbiAgICBkZWxlZ2F0ZUNhbGxCYWNrLmNhbGwoX3RoaXMzLCBldnREYXRhLCBvcmlnaW5hbEVsZW1lbnQpO1xuXG4gICAgX2VtaXQuY2FsbChfdGhpczMsIGV2dE5hbWUsIGV2dERhdGEpO1xuICB9O1xufVxuXG52YXIgZHJhZ2dpbmdFbGVtZW50ID0gbnVsbDtcbnZhciBwcm9wcyA9IHtcbiAgbGlzdDoge1xuICAgIHR5cGU6IEFycmF5LFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZWZhdWx0OiBudWxsXG4gIH0sXG4gIG1vZGVsVmFsdWU6IHtcbiAgICB0eXBlOiBBcnJheSxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZGVmYXVsdDogbnVsbFxuICB9LFxuICBpdGVtS2V5OiB7XG4gICAgdHlwZTogW1N0cmluZywgRnVuY3Rpb25dLFxuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG4gIGNsb25lOiB7XG4gICAgdHlwZTogRnVuY3Rpb24sXG4gICAgZGVmYXVsdDogZnVuY3Rpb24gX2RlZmF1bHQob3JpZ2luYWwpIHtcbiAgICAgIHJldHVybiBvcmlnaW5hbDtcbiAgICB9XG4gIH0sXG4gIHRhZzoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiBcImRpdlwiXG4gIH0sXG4gIG1vdmU6IHtcbiAgICB0eXBlOiBGdW5jdGlvbixcbiAgICBkZWZhdWx0OiBudWxsXG4gIH0sXG4gIGNvbXBvbmVudERhdGE6IHtcbiAgICB0eXBlOiBPYmplY3QsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGRlZmF1bHQ6IG51bGxcbiAgfVxufTtcbnZhciBlbWl0cyA9IFtcInVwZGF0ZTptb2RlbFZhbHVlXCIsIFwiY2hhbmdlXCJdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShldmVudHMubWFuYWdlQW5kRW1pdCksIF90b0NvbnN1bWFibGVBcnJheShldmVudHMuZW1pdCkpLm1hcChmdW5jdGlvbiAoZXZ0KSB7XG4gIHJldHVybiBldnQudG9Mb3dlckNhc2UoKTtcbn0pKSk7XG52YXIgZHJhZ2dhYmxlQ29tcG9uZW50ID0gT2JqZWN0KGV4dGVybmFsX2NvbW1vbmpzX3Z1ZV9jb21tb25qczJfdnVlX3Jvb3RfVnVlX1tcImRlZmluZUNvbXBvbmVudFwiXSkoe1xuICBuYW1lOiBcImRyYWdnYWJsZVwiLFxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuICBwcm9wczogcHJvcHMsXG4gIGVtaXRzOiBlbWl0cyxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZXJyb3IgPSBmYWxzZTtcbiAgICAgIHZhciAkc2xvdHMgPSB0aGlzLiRzbG90cyxcbiAgICAgICAgICAkYXR0cnMgPSB0aGlzLiRhdHRycyxcbiAgICAgICAgICB0YWcgPSB0aGlzLnRhZyxcbiAgICAgICAgICBjb21wb25lbnREYXRhID0gdGhpcy5jb21wb25lbnREYXRhLFxuICAgICAgICAgIHJlYWxMaXN0ID0gdGhpcy5yZWFsTGlzdCxcbiAgICAgICAgICBnZXRLZXkgPSB0aGlzLmdldEtleTtcbiAgICAgIHZhciBjb21wb25lbnRTdHJ1Y3R1cmUgPSBjb21wdXRlQ29tcG9uZW50U3RydWN0dXJlKHtcbiAgICAgICAgJHNsb3RzOiAkc2xvdHMsXG4gICAgICAgIHRhZzogdGFnLFxuICAgICAgICByZWFsTGlzdDogcmVhbExpc3QsXG4gICAgICAgIGdldEtleTogZ2V0S2V5XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY29tcG9uZW50U3RydWN0dXJlID0gY29tcG9uZW50U3RydWN0dXJlO1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBnZXRDb21wb25lbnRBdHRyaWJ1dGVzKHtcbiAgICAgICAgJGF0dHJzOiAkYXR0cnMsXG4gICAgICAgIGNvbXBvbmVudERhdGE6IGNvbXBvbmVudERhdGFcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudFN0cnVjdHVyZS5yZW5kZXIoZXh0ZXJuYWxfY29tbW9uanNfdnVlX2NvbW1vbmpzMl92dWVfcm9vdF9WdWVfW1wiaFwiXSwgYXR0cmlidXRlcyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aGlzLmVycm9yID0gdHJ1ZTtcbiAgICAgIHJldHVybiBPYmplY3QoZXh0ZXJuYWxfY29tbW9uanNfdnVlX2NvbW1vbmpzMl92dWVfcm9vdF9WdWVfW1wiaFwiXSkoXCJwcmVcIiwge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGNvbG9yOiBcInJlZFwiXG4gICAgICAgIH1cbiAgICAgIH0sIGVyci5zdGFjayk7XG4gICAgfVxuICB9LFxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xuICAgIGlmICh0aGlzLmxpc3QgIT09IG51bGwgJiYgdGhpcy5tb2RlbFZhbHVlICE9PSBudWxsKSB7XG4gICAgICBjb25zb2xlW1wiYVwiIC8qIGNvbnNvbGUgKi9dLmVycm9yKFwibW9kZWxWYWx1ZSBhbmQgbGlzdCBwcm9wcyBhcmUgbXV0dWFsbHkgZXhjbHVzaXZlISBQbGVhc2Ugc2V0IG9uZSBvciBhbm90aGVyLlwiKTtcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5lcnJvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciAkYXR0cnMgPSB0aGlzLiRhdHRycyxcbiAgICAgICAgJGVsID0gdGhpcy4kZWwsXG4gICAgICAgIGNvbXBvbmVudFN0cnVjdHVyZSA9IHRoaXMuY29tcG9uZW50U3RydWN0dXJlO1xuICAgIGNvbXBvbmVudFN0cnVjdHVyZS51cGRhdGVkKCk7XG4gICAgdmFyIHNvcnRhYmxlT3B0aW9ucyA9IGNyZWF0ZVNvcnRhYmxlT3B0aW9uKHtcbiAgICAgICRhdHRyczogJGF0dHJzLFxuICAgICAgY2FsbEJhY2tCdWlsZGVyOiB7XG4gICAgICAgIG1hbmFnZUFuZEVtaXQ6IGZ1bmN0aW9uIG1hbmFnZUFuZEVtaXQoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX21hbmFnZUFuZEVtaXQuY2FsbChfdGhpczQsIGV2ZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW1pdDogZnVuY3Rpb24gZW1pdChldmVudCkge1xuICAgICAgICAgIHJldHVybiBfZW1pdC5iaW5kKF90aGlzNCwgZXZlbnQpO1xuICAgICAgICB9LFxuICAgICAgICBtYW5hZ2U6IGZ1bmN0aW9uIG1hbmFnZShldmVudCkge1xuICAgICAgICAgIHJldHVybiBfbWFuYWdlLmNhbGwoX3RoaXM0LCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgdGFyZ2V0RG9tRWxlbWVudCA9ICRlbC5ub2RlVHlwZSA9PT0gMSA/ICRlbCA6ICRlbC5wYXJlbnRFbGVtZW50O1xuICAgIHRoaXMuX3NvcnRhYmxlID0gbmV3IGV4dGVybmFsX2NvbW1vbmpzX3NvcnRhYmxlanNfY29tbW9uanMyX3NvcnRhYmxlanNfYW1kX3NvcnRhYmxlanNfcm9vdF9Tb3J0YWJsZV9kZWZhdWx0LmEodGFyZ2V0RG9tRWxlbWVudCwgc29ydGFibGVPcHRpb25zKTtcbiAgICB0aGlzLnRhcmdldERvbUVsZW1lbnQgPSB0YXJnZXREb21FbGVtZW50O1xuICAgIHRhcmdldERvbUVsZW1lbnQuX19kcmFnZ2FibGVfY29tcG9uZW50X18gPSB0aGlzO1xuICB9LFxuICB1cGRhdGVkOiBmdW5jdGlvbiB1cGRhdGVkKCkge1xuICAgIHRoaXMuY29tcG9uZW50U3RydWN0dXJlLnVwZGF0ZWQoKTtcbiAgfSxcbiAgYmVmb3JlVW5tb3VudDogZnVuY3Rpb24gYmVmb3JlVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5fc29ydGFibGUgIT09IHVuZGVmaW5lZCkgdGhpcy5fc29ydGFibGUuZGVzdHJveSgpO1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHJlYWxMaXN0OiBmdW5jdGlvbiByZWFsTGlzdCgpIHtcbiAgICAgIHZhciBsaXN0ID0gdGhpcy5saXN0O1xuICAgICAgcmV0dXJuIGxpc3QgPyBsaXN0IDogdGhpcy5tb2RlbFZhbHVlO1xuICAgIH0sXG4gICAgZ2V0S2V5OiBmdW5jdGlvbiBnZXRLZXkoKSB7XG4gICAgICB2YXIgaXRlbUtleSA9IHRoaXMuaXRlbUtleTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVtS2V5ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1LZXk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudFtpdGVtS2V5XTtcbiAgICAgIH07XG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgICRhdHRyczoge1xuICAgICAgaGFuZGxlcjogZnVuY3Rpb24gaGFuZGxlcihuZXdPcHRpb25WYWx1ZSkge1xuICAgICAgICB2YXIgX3NvcnRhYmxlID0gdGhpcy5fc29ydGFibGU7XG4gICAgICAgIGlmICghX3NvcnRhYmxlKSByZXR1cm47XG4gICAgICAgIGdldFZhbGlkU29ydGFibGVFbnRyaWVzKG5ld09wdGlvblZhbHVlKS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgICAgICAgIGtleSA9IF9yZWYyWzBdLFxuICAgICAgICAgICAgICB2YWx1ZSA9IF9yZWYyWzFdO1xuXG4gICAgICAgICAgX3NvcnRhYmxlLm9wdGlvbihrZXksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZGVlcDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldFVuZGVybHlpbmdWbTogZnVuY3Rpb24gZ2V0VW5kZXJseWluZ1ZtKGRvbUVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudFN0cnVjdHVyZS5nZXRVbmRlcmx5aW5nVm0oZG9tRWxlbWVudCkgfHwgbnVsbDtcbiAgICB9LFxuICAgIGdldFVuZGVybHlpbmdQb3RlbmNpYWxEcmFnZ2FibGVDb21wb25lbnQ6IGZ1bmN0aW9uIGdldFVuZGVybHlpbmdQb3RlbmNpYWxEcmFnZ2FibGVDb21wb25lbnQoaHRtRWxlbWVudCkge1xuICAgICAgLy9UT0RPIGNoZWNrIGNhc2Ugd2hlcmUgeW91IG5lZWQgdG8gc2VlIGNvbXBvbmVudCBjaGlsZHJlblxuICAgICAgcmV0dXJuIGh0bUVsZW1lbnQuX19kcmFnZ2FibGVfY29tcG9uZW50X187XG4gICAgfSxcbiAgICBlbWl0Q2hhbmdlczogZnVuY3Rpb24gZW1pdENoYW5nZXMoZXZ0KSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgT2JqZWN0KGV4dGVybmFsX2NvbW1vbmpzX3Z1ZV9jb21tb25qczJfdnVlX3Jvb3RfVnVlX1tcIm5leHRUaWNrXCJdKShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczUuJGVtaXQoXCJjaGFuZ2VcIiwgZXZ0KTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYWx0ZXJMaXN0OiBmdW5jdGlvbiBhbHRlckxpc3Qob25MaXN0KSB7XG4gICAgICBpZiAodGhpcy5saXN0KSB7XG4gICAgICAgIG9uTGlzdCh0aGlzLmxpc3QpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXdMaXN0ID0gX3RvQ29uc3VtYWJsZUFycmF5KHRoaXMubW9kZWxWYWx1ZSk7XG5cbiAgICAgIG9uTGlzdChuZXdMaXN0KTtcbiAgICAgIHRoaXMuJGVtaXQoXCJ1cGRhdGU6bW9kZWxWYWx1ZVwiLCBuZXdMaXN0KTtcbiAgICB9LFxuICAgIHNwbGljZUxpc3Q6IGZ1bmN0aW9uIHNwbGljZUxpc3QoKSB7XG4gICAgICB2YXIgX2FyZ3VtZW50cyA9IGFyZ3VtZW50cztcblxuICAgICAgdmFyIHNwbGljZUxpc3QgPSBmdW5jdGlvbiBzcGxpY2VMaXN0KGxpc3QpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Quc3BsaWNlLmFwcGx5KGxpc3QsIF90b0NvbnN1bWFibGVBcnJheShfYXJndW1lbnRzKSk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLmFsdGVyTGlzdChzcGxpY2VMaXN0KTtcbiAgICB9LFxuICAgIHVwZGF0ZVBvc2l0aW9uOiBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbihvbGRJbmRleCwgbmV3SW5kZXgpIHtcbiAgICAgIHZhciB1cGRhdGVQb3NpdGlvbiA9IGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKGxpc3QpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Quc3BsaWNlKG5ld0luZGV4LCAwLCBsaXN0LnNwbGljZShvbGRJbmRleCwgMSlbMF0pO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5hbHRlckxpc3QodXBkYXRlUG9zaXRpb24pO1xuICAgIH0sXG4gICAgZ2V0UmVsYXRlZENvbnRleHRGcm9tTW92ZUV2ZW50OiBmdW5jdGlvbiBnZXRSZWxhdGVkQ29udGV4dEZyb21Nb3ZlRXZlbnQoX3JlZjMpIHtcbiAgICAgIHZhciB0byA9IF9yZWYzLnRvLFxuICAgICAgICAgIHJlbGF0ZWQgPSBfcmVmMy5yZWxhdGVkO1xuICAgICAgdmFyIGNvbXBvbmVudCA9IHRoaXMuZ2V0VW5kZXJseWluZ1BvdGVuY2lhbERyYWdnYWJsZUNvbXBvbmVudCh0byk7XG5cbiAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxpc3QgPSBjb21wb25lbnQucmVhbExpc3Q7XG4gICAgICB2YXIgY29udGV4dCA9IHtcbiAgICAgICAgbGlzdDogbGlzdCxcbiAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnRcbiAgICAgIH07XG5cbiAgICAgIGlmICh0byAhPT0gcmVsYXRlZCAmJiBsaXN0KSB7XG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IGNvbXBvbmVudC5nZXRVbmRlcmx5aW5nVm0ocmVsYXRlZCkgfHwge307XG4gICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgZGVzdGluYXRpb24pLCBjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfSxcbiAgICBnZXRWbUluZGV4RnJvbURvbUluZGV4OiBmdW5jdGlvbiBnZXRWbUluZGV4RnJvbURvbUluZGV4KGRvbUluZGV4KSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRTdHJ1Y3R1cmUuZ2V0Vm1JbmRleEZyb21Eb21JbmRleChkb21JbmRleCwgdGhpcy50YXJnZXREb21FbGVtZW50KTtcbiAgICB9LFxuICAgIG9uRHJhZ1N0YXJ0OiBmdW5jdGlvbiBvbkRyYWdTdGFydChldnQpIHtcbiAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuZ2V0VW5kZXJseWluZ1ZtKGV2dC5pdGVtKTtcbiAgICAgIGV2dC5pdGVtLl91bmRlcmx5aW5nX3ZtXyA9IHRoaXMuY2xvbmUodGhpcy5jb250ZXh0LmVsZW1lbnQpO1xuICAgICAgZHJhZ2dpbmdFbGVtZW50ID0gZXZ0Lml0ZW07XG4gICAgfSxcbiAgICBvbkRyYWdBZGQ6IGZ1bmN0aW9uIG9uRHJhZ0FkZChldnQpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZXZ0Lml0ZW0uX3VuZGVybHlpbmdfdm1fO1xuXG4gICAgICBpZiAoZWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVtb3ZlTm9kZShldnQuaXRlbSk7XG4gICAgICB2YXIgbmV3SW5kZXggPSB0aGlzLmdldFZtSW5kZXhGcm9tRG9tSW5kZXgoZXZ0Lm5ld0luZGV4KTtcbiAgICAgIHRoaXMuc3BsaWNlTGlzdChuZXdJbmRleCwgMCwgZWxlbWVudCk7XG4gICAgICB2YXIgYWRkZWQgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgIG5ld0luZGV4OiBuZXdJbmRleFxuICAgICAgfTtcbiAgICAgIHRoaXMuZW1pdENoYW5nZXMoe1xuICAgICAgICBhZGRlZDogYWRkZWRcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgb25EcmFnUmVtb3ZlOiBmdW5jdGlvbiBvbkRyYWdSZW1vdmUoZXZ0KSB7XG4gICAgICBpbnNlcnROb2RlQXQodGhpcy4kZWwsIGV2dC5pdGVtLCBldnQub2xkSW5kZXgpO1xuXG4gICAgICBpZiAoZXZ0LnB1bGxNb2RlID09PSBcImNsb25lXCIpIHtcbiAgICAgICAgcmVtb3ZlTm9kZShldnQuY2xvbmUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBfdGhpcyRjb250ZXh0ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIG9sZEluZGV4ID0gX3RoaXMkY29udGV4dC5pbmRleCxcbiAgICAgICAgICBlbGVtZW50ID0gX3RoaXMkY29udGV4dC5lbGVtZW50O1xuICAgICAgdGhpcy5zcGxpY2VMaXN0KG9sZEluZGV4LCAxKTtcbiAgICAgIHZhciByZW1vdmVkID0ge1xuICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICBvbGRJbmRleDogb2xkSW5kZXhcbiAgICAgIH07XG4gICAgICB0aGlzLmVtaXRDaGFuZ2VzKHtcbiAgICAgICAgcmVtb3ZlZDogcmVtb3ZlZFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbkRyYWdVcGRhdGU6IGZ1bmN0aW9uIG9uRHJhZ1VwZGF0ZShldnQpIHtcbiAgICAgIHJlbW92ZU5vZGUoZXZ0Lml0ZW0pO1xuICAgICAgaW5zZXJ0Tm9kZUF0KGV2dC5mcm9tLCBldnQuaXRlbSwgZXZ0Lm9sZEluZGV4KTtcbiAgICAgIHZhciBvbGRJbmRleCA9IHRoaXMuY29udGV4dC5pbmRleDtcbiAgICAgIHZhciBuZXdJbmRleCA9IHRoaXMuZ2V0Vm1JbmRleEZyb21Eb21JbmRleChldnQubmV3SW5kZXgpO1xuICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbihvbGRJbmRleCwgbmV3SW5kZXgpO1xuICAgICAgdmFyIG1vdmVkID0ge1xuICAgICAgICBlbGVtZW50OiB0aGlzLmNvbnRleHQuZWxlbWVudCxcbiAgICAgICAgb2xkSW5kZXg6IG9sZEluZGV4LFxuICAgICAgICBuZXdJbmRleDogbmV3SW5kZXhcbiAgICAgIH07XG4gICAgICB0aGlzLmVtaXRDaGFuZ2VzKHtcbiAgICAgICAgbW92ZWQ6IG1vdmVkXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNvbXB1dGVGdXR1cmVJbmRleDogZnVuY3Rpb24gY29tcHV0ZUZ1dHVyZUluZGV4KHJlbGF0ZWRDb250ZXh0LCBldnQpIHtcbiAgICAgIGlmICghcmVsYXRlZENvbnRleHQuZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgdmFyIGRvbUNoaWxkcmVuID0gX3RvQ29uc3VtYWJsZUFycmF5KGV2dC50by5jaGlsZHJlbikuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICByZXR1cm4gZWwuc3R5bGVbXCJkaXNwbGF5XCJdICE9PSBcIm5vbmVcIjtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgY3VycmVudERvbUluZGV4ID0gZG9tQ2hpbGRyZW4uaW5kZXhPZihldnQucmVsYXRlZCk7XG4gICAgICB2YXIgY3VycmVudEluZGV4ID0gcmVsYXRlZENvbnRleHQuY29tcG9uZW50LmdldFZtSW5kZXhGcm9tRG9tSW5kZXgoY3VycmVudERvbUluZGV4KTtcbiAgICAgIHZhciBkcmFnZ2VkSW5MaXN0ID0gZG9tQ2hpbGRyZW4uaW5kZXhPZihkcmFnZ2luZ0VsZW1lbnQpICE9PSAtMTtcbiAgICAgIHJldHVybiBkcmFnZ2VkSW5MaXN0IHx8ICFldnQud2lsbEluc2VydEFmdGVyID8gY3VycmVudEluZGV4IDogY3VycmVudEluZGV4ICsgMTtcbiAgICB9LFxuICAgIG9uRHJhZ01vdmU6IGZ1bmN0aW9uIG9uRHJhZ01vdmUoZXZ0LCBvcmlnaW5hbEV2ZW50KSB7XG4gICAgICB2YXIgbW92ZSA9IHRoaXMubW92ZSxcbiAgICAgICAgICByZWFsTGlzdCA9IHRoaXMucmVhbExpc3Q7XG5cbiAgICAgIGlmICghbW92ZSB8fCAhcmVhbExpc3QpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWxhdGVkQ29udGV4dCA9IHRoaXMuZ2V0UmVsYXRlZENvbnRleHRGcm9tTW92ZUV2ZW50KGV2dCk7XG4gICAgICB2YXIgZnV0dXJlSW5kZXggPSB0aGlzLmNvbXB1dGVGdXR1cmVJbmRleChyZWxhdGVkQ29udGV4dCwgZXZ0KTtcblxuICAgICAgdmFyIGRyYWdnZWRDb250ZXh0ID0gX29iamVjdFNwcmVhZDIoX29iamVjdFNwcmVhZDIoe30sIHRoaXMuY29udGV4dCksIHt9LCB7XG4gICAgICAgIGZ1dHVyZUluZGV4OiBmdXR1cmVJbmRleFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBzZW5kRXZlbnQgPSBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7fSwgZXZ0KSwge30sIHtcbiAgICAgICAgcmVsYXRlZENvbnRleHQ6IHJlbGF0ZWRDb250ZXh0LFxuICAgICAgICBkcmFnZ2VkQ29udGV4dDogZHJhZ2dlZENvbnRleHRcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbW92ZShzZW5kRXZlbnQsIG9yaWdpbmFsRXZlbnQpO1xuICAgIH0sXG4gICAgb25EcmFnRW5kOiBmdW5jdGlvbiBvbkRyYWdFbmQoKSB7XG4gICAgICBkcmFnZ2luZ0VsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfVxufSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB2dWVkcmFnZ2FibGUgPSAoZHJhZ2dhYmxlQ29tcG9uZW50KTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL0B2dWUvY2xpLXNlcnZpY2UvbGliL2NvbW1hbmRzL2J1aWxkL2VudHJ5LWxpYi5qc1xuXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGVudHJ5X2xpYiA9IF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKHZ1ZWRyYWdnYWJsZSk7XG5cblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJmYjZhXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgJCA9IF9fd2VicGFja19yZXF1aXJlX18oXCIyM2U3XCIpO1xudmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjg2MWRcIik7XG52YXIgaXNBcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oXCJlOGI1XCIpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IF9fd2VicGFja19yZXF1aXJlX18oXCIyM2NiXCIpO1xudmFyIHRvTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjUwYzRcIik7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcImZjNmFcIik7XG52YXIgY3JlYXRlUHJvcGVydHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiODQxOFwiKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYjYyMlwiKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIjFkZGVcIik7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiYWU0MFwiKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdzbGljZScpO1xudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ3NsaWNlJywgeyBBQ0NFU1NPUlM6IHRydWUsIDA6IDAsIDE6IDIgfSk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG52YXIgbmF0aXZlU2xpY2UgPSBbXS5zbGljZTtcbnZhciBtYXggPSBNYXRoLm1heDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5zbGljZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc2xpY2Vcbi8vIGZhbGxiYWNrIGZvciBub3QgYXJyYXktbGlrZSBFUzMgc3RyaW5ncyBhbmQgRE9NIG9iamVjdHNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIHNsaWNlOiBmdW5jdGlvbiBzbGljZShzdGFydCwgZW5kKSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QodGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgayA9IHRvQWJzb2x1dGVJbmRleChzdGFydCwgbGVuZ3RoKTtcbiAgICB2YXIgZmluID0gdG9BYnNvbHV0ZUluZGV4KGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogZW5kLCBsZW5ndGgpO1xuICAgIC8vIGlubGluZSBgQXJyYXlTcGVjaWVzQ3JlYXRlYCBmb3IgdXNhZ2UgbmF0aXZlIGBBcnJheSNzbGljZWAgd2hlcmUgaXQncyBwb3NzaWJsZVxuICAgIHZhciBDb25zdHJ1Y3RvciwgcmVzdWx0LCBuO1xuICAgIGlmIChpc0FycmF5KE8pKSB7XG4gICAgICBDb25zdHJ1Y3RvciA9IE8uY29uc3RydWN0b3I7XG4gICAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgICAgaWYgKHR5cGVvZiBDb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIChDb25zdHJ1Y3RvciA9PT0gQXJyYXkgfHwgaXNBcnJheShDb25zdHJ1Y3Rvci5wcm90b3R5cGUpKSkge1xuICAgICAgICBDb25zdHJ1Y3RvciA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QoQ29uc3RydWN0b3IpKSB7XG4gICAgICAgIENvbnN0cnVjdG9yID0gQ29uc3RydWN0b3JbU1BFQ0lFU107XG4gICAgICAgIGlmIChDb25zdHJ1Y3RvciA9PT0gbnVsbCkgQ29uc3RydWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBpZiAoQ29uc3RydWN0b3IgPT09IEFycmF5IHx8IENvbnN0cnVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZVNsaWNlLmNhbGwoTywgaywgZmluKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0ID0gbmV3IChDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDb25zdHJ1Y3RvcikobWF4KGZpbiAtIGssIDApKTtcbiAgICBmb3IgKG4gPSAwOyBrIDwgZmluOyBrKyssIG4rKykgaWYgKGsgaW4gTykgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBuLCBPW2tdKTtcbiAgICByZXN1bHQubGVuZ3RoID0gbjtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJmYzZhXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oXCI0NGFkXCIpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiMWQ4MFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xufTtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCJmZGJjXCI6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIGl0ZXJhYmxlIERPTSBjb2xsZWN0aW9uc1xuLy8gZmxhZyAtIGBpdGVyYWJsZWAgaW50ZXJmYWNlIC0gJ2VudHJpZXMnLCAna2V5cycsICd2YWx1ZXMnLCAnZm9yRWFjaCcgbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENTU1J1bGVMaXN0OiAwLFxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiAwLFxuICBDU1NWYWx1ZUxpc3Q6IDAsXG4gIENsaWVudFJlY3RMaXN0OiAwLFxuICBET01SZWN0TGlzdDogMCxcbiAgRE9NU3RyaW5nTGlzdDogMCxcbiAgRE9NVG9rZW5MaXN0OiAxLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogMCxcbiAgRmlsZUxpc3Q6IDAsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiAwLFxuICBIVE1MQ29sbGVjdGlvbjogMCxcbiAgSFRNTEZvcm1FbGVtZW50OiAwLFxuICBIVE1MU2VsZWN0RWxlbWVudDogMCxcbiAgTWVkaWFMaXN0OiAwLFxuICBNaW1lVHlwZUFycmF5OiAwLFxuICBOYW1lZE5vZGVNYXA6IDAsXG4gIE5vZGVMaXN0OiAxLFxuICBQYWludFJlcXVlc3RMaXN0OiAwLFxuICBQbHVnaW46IDAsXG4gIFBsdWdpbkFycmF5OiAwLFxuICBTVkdMZW5ndGhMaXN0OiAwLFxuICBTVkdOdW1iZXJMaXN0OiAwLFxuICBTVkdQYXRoU2VnTGlzdDogMCxcbiAgU1ZHUG9pbnRMaXN0OiAwLFxuICBTVkdTdHJpbmdMaXN0OiAwLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiAwLFxuICBTb3VyY2VCdWZmZXJMaXN0OiAwLFxuICBTdHlsZVNoZWV0TGlzdDogMCxcbiAgVGV4dFRyYWNrQ3VlTGlzdDogMCxcbiAgVGV4dFRyYWNrTGlzdDogMCxcbiAgVG91Y2hMaXN0OiAwXG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcImZkYmZcIjpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIE5BVElWRV9TWU1CT0wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiNDkzMFwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAmJiAhU3ltYm9sLnNoYW1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG5cblxuLyoqKi8gfSlcblxuLyoqKioqKi8gfSlbXCJkZWZhdWx0XCJdO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD12dWVkcmFnZ2FibGUudW1kLmpzLm1hcCIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0xheWVycy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODgwNzRiZjJcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9MYXllcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xheWVycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL0xheWVycy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04ODA3NGJmMiZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvYXBwL3BsdWdpbnMvemVuL3RocmVlcy9ub2RlX21vZHVsZXMvLnBucG0vdnVlLWxvYWRlckAxNi44LjNfQHZ1ZStjb21waWxlci1zZmNAMy41LjE2X3Z1ZUAzLjUuMTZfdHlwZXNjcmlwdEA1LjguM19fd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy92dWUvdHJhc2gvdXgvZWxlbWVudHMvTGF5ZXJzLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI4ODA3NGJmMlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzg4MDc0YmYyJywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnODgwNzRiZjInLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xheWVycy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODgwNzRiZjJcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignODgwNzRiZjInLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYmFiZWwtbG9hZGVyQDguNC4xX0BiYWJlbCtjb3JlQDcuMjcuNF93ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vdnVlLWxvYWRlckAxNi44LjNfQHZ1ZStjb21waWxlci1zZmNAMy41LjE2X3Z1ZUAzLjUuMTZfdHlwZXNjcmlwdEA1LjguM19fd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9MYXllcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9iYWJlbC1sb2FkZXJAOC40LjFfQGJhYmVsK2NvcmVANy4yNy40X3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0xheWVycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJAMi4wLjBfd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA1LjIuN193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Z1ZS1sb2FkZXJAMTYuOC4zX0B2dWUrY29tcGlsZXItc2ZjQDMuNS4xNl92dWVAMy41LjE2X3R5cGVzY3JpcHRANS44LjNfX3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9wb3N0Y3NzLWxvYWRlckA2LjIuMV9wb3N0Y3NzQDguNS40X3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Nhc3MtbG9hZGVyQDE2LjAuNV9zYXNzQDEuODkuMl93ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0xheWVycy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04ODA3NGJmMiZsYW5nPXNjc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9iYWJlbC1sb2FkZXJAOC40LjFfQGJhYmVsK2NvcmVANy4yNy40X3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0xheWVycy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODgwNzRiZjJcIiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDkxZDcxMjZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL1NlYXJjaC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kOTFkNzEyNiZsYW5nPXNjc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvYXBwL3BsdWdpbnMvemVuL3RocmVlcy9ub2RlX21vZHVsZXMvLnBucG0vdnVlLWxvYWRlckAxNi44LjNfQHZ1ZStjb21waWxlci1zZmNAMy41LjE2X3Z1ZUAzLjUuMTZfdHlwZXNjcmlwdEA1LjguM19fd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy92dWUvdHJhc2gvdXgvZWxlbWVudHMvU2VhcmNoLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCJkOTFkNzEyNlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJ2Q5MWQ3MTI2JywgX19leHBvcnRzX18pKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbG9hZCcpXG4gICAgYXBpLnJlbG9hZCgnZDkxZDcxMjYnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDkxZDcxMjZcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignZDkxZDcxMjYnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYmFiZWwtbG9hZGVyQDguNC4xX0BiYWJlbCtjb3JlQDcuMjcuNF93ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vdnVlLWxvYWRlckAxNi44LjNfQHZ1ZStjb21waWxlci1zZmNAMy41LjE2X3Z1ZUAzLjUuMTZfdHlwZXNjcmlwdEA1LjguM19fd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9TZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9iYWJlbC1sb2FkZXJAOC40LjFfQGJhYmVsK2NvcmVANy4yNy40X3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJAMi4wLjBfd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA1LjIuN193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Z1ZS1sb2FkZXJAMTYuOC4zX0B2dWUrY29tcGlsZXItc2ZjQDMuNS4xNl92dWVAMy41LjE2X3R5cGVzY3JpcHRANS44LjNfX3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9wb3N0Y3NzLWxvYWRlckA2LjIuMV9wb3N0Y3NzQDguNS40X3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Nhc3MtbG9hZGVyQDE2LjAuNV9zYXNzQDEuODkuMl93ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1NlYXJjaC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kOTFkNzEyNiZsYW5nPXNjc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9iYWJlbC1sb2FkZXJAOC40LjFfQGJhYmVsK2NvcmVANy4yNy40X3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDkxZDcxMjZcIiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1N0b3JlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMDExNzYyY1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N0b3JlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9TdG9yZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL1N0b3JlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEwMTE3NjJjJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9hcHAvcGx1Z2lucy96ZW4vdGhyZWVzL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL3Z1ZS90cmFzaC91eC9lbGVtZW50cy9TdG9yZS52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMTAxMTc2MmNcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcxMDExNzYyYycsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzEwMTE3NjJjJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TdG9yZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTAxMTc2MmNcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignMTAxMTc2MmMnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYmFiZWwtbG9hZGVyQDguNC4xX0BiYWJlbCtjb3JlQDcuMjcuNF93ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vdnVlLWxvYWRlckAxNi44LjNfQHZ1ZStjb21waWxlci1zZmNAMy41LjE2X3Z1ZUAzLjUuMTZfdHlwZXNjcmlwdEA1LjguM19fd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9TdG9yZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JhYmVsLWxvYWRlckA4LjQuMV9AYmFiZWwrY29yZUA3LjI3LjRfd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Z1ZS1sb2FkZXJAMTYuOC4zX0B2dWUrY29tcGlsZXItc2ZjQDMuNS4xNl92dWVAMy41LjE2X3R5cGVzY3JpcHRANS44LjNfX3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vU3RvcmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDIuMC4wX3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANS4yLjdfd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcG9zdGNzcy1sb2FkZXJANi4yLjFfcG9zdGNzc0A4LjUuNF93ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zYXNzLWxvYWRlckAxNi4wLjVfc2Fzc0AxLjg5LjJfd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vdnVlLWxvYWRlckAxNi44LjNfQHZ1ZStjb21waWxlci1zZmNAMy41LjE2X3Z1ZUAzLjUuMTZfdHlwZXNjcmlwdEA1LjguM19fd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9TdG9yZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMDExNzYyYyZsYW5nPXNjc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9iYWJlbC1sb2FkZXJAOC40LjFfQGJhYmVsK2NvcmVANy4yNy40X3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1N0b3JlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMDExNzYyY1wiIl0sIm5hbWVzIjpbImRyYWdnYWJsZSIsImljb24iLCJtb2RhbCIsIlN0b3JlIiwibmFtZSIsInByb3BzIiwibm9kZSIsImJhY2tlbmQiLCJlbWl0cyIsImNvbXBvbmVudHMiLCJkYXRhIiwibG9jYWxfbGF5ZXJzIiwib3Blbl9ub2RlX3NldHRpbmdzIiwiY29tcHV0ZWQiLCJsYXllcnMiLCJfdGhpcyRub2RlJGxheWVycyIsIl90aGlzJG5vZGUiLCJ3YXRjaCIsIm5ld19sYXllcnMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJjcmVhdGVkIiwibWV0aG9kcyIsIm9uRHJhZ0VuZCIsIiRlbWl0IiwiX29iamVjdFNwcmVhZCIsIm9wZW5TZXR0aW5ncyIsImxheWVyIiwid2luZG93Iiwib3BlbiIsImxvY2F0aW9uIiwib3JpZ2luIiwiY29uY2F0IiwibGlkIiwicmVtb3ZlTGF5ZXIiLCJmaWx0ZXIiLCJsIiwiYWRkTGF5ZXIiLCJwdXNoIiwiYXNwZWN0IiwiSW5wdXRUZXh0IiwidGV4dCIsIm1vdW50ZWQiLCJ0aW1lciIsInRpbW91dCIsIm9uSW5wdXQiLCJfdGhpcyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJTZWFyY2giLCJnZXRTdG9yZSIsInVuaXRfbGF5ZXJzIiwibm9kZXMiLCJmaWx0ZXJfdGV4dCIsImxheWVyc19jb3VudCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ0aHMiLCJhcGkiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb3B5TGF5ZXIiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2hvaXN0ZWRfMSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfaG9pc3RlZF8yIiwiX2NyZWF0ZVZOb2RlIiwiX2NvbXBvbmVudF9kcmFnZ2FibGUiLCIkZGF0YSIsIiRldmVudCIsInRhZyIsIm9uRW5kIiwiJG9wdGlvbnMiLCJpdGVtIiwiX3dpdGhDdHgiLCJfcmVmIiwiZWxlbWVudCIsIl9ob2lzdGVkXzMiLCJfaG9pc3RlZF80IiwiX2NvbXBvbmVudF9pY29uIiwic3JjIiwiX2hvaXN0ZWRfNSIsIl9ob2lzdGVkXzYiLCJfaG9pc3RlZF83IiwiX3RvRGlzcGxheVN0cmluZyIsImlubmVySFRNTCIsImRlc2NyaXB0aW9uIiwiX2hvaXN0ZWRfOSIsIm9uQ2xpY2siLCJfaG9pc3RlZF8xMCIsIl9ob2lzdGVkXzExIiwiX2hvaXN0ZWRfMTMiLCJfY29tcG9uZW50X1N0b3JlIiwiX2NvbXBvbmVudF9JbnB1dFRleHQiLCJtb2RlbFZhbHVlIiwiJHByb3BzIiwiX2NhY2hlIiwidGFyZ2V0IiwidmFsdWUiLCJzdHlsZSIsIl9jb21wb25lbnRfU2VhcmNoIiwiXyRkYXRhJHVuaXRfbGF5ZXJzJGxlIiwiXyRkYXRhJHVuaXRfbGF5ZXJzIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJ3aWR0aCIsImhlaWdodCIsIl9ob2lzdGVkXzgiLCJfaG9pc3RlZF8xMiIsIl9ob2lzdGVkXzE0IiwiX2hvaXN0ZWRfMTUiLCJfaG9pc3RlZF8xNiIsIl9ob2lzdGVkXzE3IiwiX2hvaXN0ZWRfMTkiXSwic291cmNlUm9vdCI6IiJ9