"use strict";
(self["webpackChunkthrees"] = self["webpackChunkthrees"] || []).push([["src_vue_trash_Dwarf_inputs_DwarfRepeater_vue"],{

/***/ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/DwarfRepeater.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/DwarfRepeater.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Dwarf Repeater v0.1",
  components: {},
  emits: ['update:modelValue'],
  props: {
    modelValue: null,
    size: {
      type: String,
      "default": 'full'
    },
    label: {
      type: [String, Function],
      "default": null
    },
    add_text: {
      type: String,
      "default": 'Добавить'
    },
    scheme: {
      "default": null
    },
    empty_object: {
      type: Object,
      "default": {}
    }
  },
  data: function data() {
    return {
      cursor_y: null,
      reorder_record: null,
      reorder_raw_height: null,
      repeater_objects: []
    };
  },
  created: function created() {
    if (!this.modelValue) {
      return;
    }
    this.repeater_objects = this.modelValue;
  },
  watch: {
    modelValue: {
      handler: function handler(modelValue) {
        this.repeater_objects = modelValue;
      },
      deep: true
    },
    repeater_objects: {
      handler: function handler(repeater_objects) {
        this.$emit('update:modelValue', repeater_objects);
      },
      deep: true
    },
    cursor_y: function cursor_y(y) {
      if (this.reorder_record) {
        this.reorder_record.y = y - 15;
      }
    }
  },
  computed: {
    inner_label: function inner_label() {
      if (this.label === null) {
        return null;
      }
      if (typeof this.label === 'string') {
        return this.label;
      }
      return this.label();
    }
  },
  methods: {
    addForm: function addForm() {
      //this.repeater_objects.push({})

      // if (this.modelValue) {
      //     let last_object = _.cloneDeep(this.repeater_objects[this.repeater_objects.length - 1])
      //     this.repeater_objects.push(last_object)
      // } else {
      //     this.repeater_objects.push({})
      // }

      //let last_object = _.cloneDeep(this.repeater_objects[this.repeater_objects.length - 1])
      //this.repeater_objects.push(last_object)

      this.repeater_objects.push(_.cloneDeep(this.empty_object));

      //this.$emit('update:modelValue', repeater_objects)
    },
    // Записывается Y-координата курсора
    writeCursor: function writeCursor(event) {
      this.cursor_y = event.layerY;
    },
    // Мышка зажимается на элементе
    holdReorder: function holdReorder(record, event) {
      record.draggable = true;
      this.reorder_record = record;
      this.reorder_raw_height = $(event.target).closest('.input-repeater__form').height();
    },
    // Мышка отпускается
    dropReorder: function dropReorder() {
      if (this.reorder_record === null) {
        return;
      }
      this.makeReorder(this.reorder_record, this.reorder_target_record);
      delete this.reorder_record.draggable;
      this.reorder_record = null;
    },
    // Совершить перестановку
    makeReorder: function makeReorder(source, target) {
      if (!source || !target) {
        return;
      }
      var position = target.reorder_class === 'drop-top' ? 'before' : 'after';
      var new_array = [];
      for (var i = 0; i < this.repeater_objects.length; i++) {
        if (this.repeater_objects[i] === source) {
          continue;
        }
        if (this.repeater_objects[i] === target && position === 'before') {
          new_array.push(source);
        }
        new_array.push(this.repeater_objects[i]);
        if (this.repeater_objects[i] === target && position === 'after') {
          new_array.push(source);
        }
      }
      this.repeater_objects = new_array;
    },
    leaveReorder: function leaveReorder() {
      if (!this.reorder_record) {
        return;
      }
      if (this.reorder_record.draggable) {
        this.reorder_record.draggable = false;
      }
      this.reorder_record = null;
    },
    rowStyle: function rowStyle(record) {
      var style = [];
      if (this.reorder_record) {
        if (this.reorder_record === record) {
          style.push("top:".concat(this.reorder_record.y, "px"));
          style.push('pointer-events:none');
        }
      }
      return style.join(';');
    },
    rowMouseMove: function rowMouseMove(record, event) {
      if (!this.reorder_record) {
        return;
      }
      var y = event.offsetY;
      var h = this.reorder_raw_height;
      if (y < h / 2) {
        record.reorder_class = 'drop-top';
        this.reorder_target_record = record;
      } else {
        record.reorder_class = 'drop-bottom';
        this.reorder_target_record = record;
      }
    },
    rowMouseLeave: function rowMouseLeave(record) {
      delete record.reorder_class;
    },
    deleteElement: function deleteElement(element) {
      this.deleteElementHandler(element);
    },
    deleteElementHandler: function deleteElementHandler(element) {
      var index = this.repeater_objects.indexOf(element);
      this.repeater_objects.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/DwarfRepeater.vue?vue&type=template&id=2baf6d2c":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/DwarfRepeater.vue?vue&type=template&id=2baf6d2c ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/.pnpm/vue@3.5.16_typescript@5.8.3/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "input-repeater__label"
};
var _hoisted_2 = ["onMousemove", "onMouseleave"];
var _hoisted_3 = {
  "class": "input-repeater__reorder"
};
var _hoisted_4 = ["onMousedown"];
var _hoisted_5 = {
  "class": "input-repeater__block"
};
var _hoisted_6 = {
  "class": "input-repeater__control"
};
var _hoisted_7 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_FormFitter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("FormFitter");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["input-repeater", $props.size])
  }, [$options.inner_label ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.inner_label), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.repeater_objects ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["input-repeater__wrapper", {
      dragging: this.reorder_record !== null
    }]),
    onMouseup: _cache[1] || (_cache[1] = function () {
      return $options.dropReorder && $options.dropReorder.apply($options, arguments);
    }),
    onMousemove: _cache[2] || (_cache[2] = function () {
      return $options.writeCursor && $options.writeCursor.apply($options, arguments);
    }),
    onMouseleave: _cache[3] || (_cache[3] = function () {
      return $options.leaveReorder && $options.leaveReorder.apply($options, arguments);
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.repeater_objects, function (repeater_object) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["input-repeater__form", [{
        draggable: repeater_object.draggable
      }, repeater_object.reorder_class]]),
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.rowStyle(repeater_object)),
      onMousemove: function onMousemove($event) {
        return $options.rowMouseMove(repeater_object, $event);
      },
      onMouseleave: function onMouseleave($event) {
        return $options.rowMouseLeave(repeater_object);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      "class": "bi bi-grip-vertical",
      onMousedown: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.holdReorder(repeater_object, $event);
      }, ["stop"])
    }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_4)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_FormFitter, {
      scheme: $props.scheme,
      modelValue: repeater_object
    }, null, 8 /* PROPS */, ["scheme", "modelValue"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      onClick: function onClick($event) {
        return $options.deleteElement(repeater_object);
      },
      "class": "bi bi-trash delete-button"
    }, null, 8 /* PROPS */, _hoisted_7)])], 46 /* CLASS, STYLE, PROPS, NEED_HYDRATION */, _hoisted_2);
  }), 256 /* UNKEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.addForm && $options.addForm.apply($options, arguments);
    }),
    "class": "btn btn-primary add-button"
  }, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "bi bi-plus-square"
  }, null, -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.add_text), 1 /* TEXT */)])], 34 /* CLASS, NEED_HYDRATION */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2 /* CLASS */);
}

/***/ }),

/***/ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/DwarfRepeater.vue?vue&type=style&index=0&id=2baf6d2c&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/DwarfRepeater.vue?vue&type=style&index=0&id=2baf6d2c&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, ".input-repeater {\n  margin-bottom: 20px;\n}\n.input-repeater__label {\n  font-weight: bold;\n  color: #777;\n  font-size: 14px;\n  margin-bottom: 4px;\n}\n.input-repeater.full {\n  width: 100%;\n}\n.input-repeater.half {\n  width: calc(50% - 7px);\n}\n.input-repeater.quarter {\n  width: calc(25% - 7px);\n}\n.input-repeater__form {\n  display: flex;\n  flex-direction: row;\n  border: 1px solid #d3d3d3;\n  padding: 5px;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  background: #f5f8fc;\n}\n.input-repeater__form.draggable {\n  position: absolute;\n  z-index: 100;\n  width: 100%;\n  box-shadow: -1px 2px 14px 0 rgba(0, 0, 0, 0.0784313725);\n  opacity: 0.5;\n}\n.input-repeater__form.drop-top {\n  border-top: 1px solid #00b7ff;\n}\n.input-repeater__form.drop-bottom {\n  border-bottom: 1px solid #00b7ff;\n}\n.input-repeater__wrapper {\n  border: 1px solid #d3d3d3;\n  padding: 10px;\n  padding-top: 11px;\n  border-radius: 5px;\n  background: #fff;\n}\n.input-repeater__wrapper.dragging {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  padding-bottom: 100px;\n}\n.input-repeater__wrapper.dragging > div * {\n  pointer-events: none;\n}\n.input-repeater__reorder {\n  width: 20px;\n  display: flex;\n  justify-content: center;\n  align-content: flex-start;\n}\n.input-repeater__reorder i {\n  cursor: n-resize;\n}\n.input-repeater__block {\n  flex: 1 1 0;\n}\n.input-repeater__control {\n  width: 20px;\n  display: flex;\n  justify-content: center;\n  align-content: flex-start;\n}\n.input-repeater__control i {\n  cursor: pointer;\n  transition: 200ms;\n}\n.input-repeater__control .delete-button:hover {\n  color: red;\n}\n.input-repeater .add-button i {\n  margin-right: 5px;\n}", "",{"version":3,"sources":["webpack://./src/vue/trash/Dwarf/inputs/DwarfRepeater.vue"],"names":[],"mappings":"AACA;EACI,mBAAA;AAAJ;AAEI;EACI,iBAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AAAR;AAGI;EACI,WAAA;AADR;AAII;EACI,sBAAA;AAFR;AAKI;EACI,sBAAA;AAHR;AAMI;EACI,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;AAJR;AAMQ;EACI,kBAAA;EACA,YAAA;EACA,WAAA;EACA,uDAAA;EACA,YAAA;AAJZ;AAOQ;EACI,6BAAA;AALZ;AAQQ;EACI,gCAAA;AANZ;AAUI;EACI,yBAAA;EACA,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;AARR;AAWI;EACI,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,qBAAA;AATR;AAUQ;EACI,oBAAA;AARZ;AAYI;EACI,WAAA;EACA,aAAA;EACA,uBAAA;EACA,yBAAA;AAVR;AAWQ;EACI,gBAAA;AATZ;AAaI;EACI,WAAA;AAXR;AAcI;EACI,WAAA;EACA,aAAA;EACA,uBAAA;EACA,yBAAA;AAZR;AAaQ;EACI,eAAA;EACA,iBAAA;AAXZ;AAaQ;EACI,UAAA;AAXZ;AAgBQ;EACI,iBAAA;AAdZ","sourcesContent":["\n.input-repeater {\n    margin-bottom: 20px;\n\n    &__label {\n        font-weight: bold;\n        color: #777;\n        font-size: 14px;\n        margin-bottom: 4px;\n    }\n\n    &.full {\n        width: 100%\n    }\n\n    &.half {\n        width: calc(50% - 7px);\n    }\n\n    &.quarter {\n        width: calc(25% - 7px);\n    }\n\n    &__form {\n        display: flex;\n        flex-direction: row;\n        border: 1px solid #d3d3d3;\n        padding: 5px;\n        margin-bottom: 10px;\n        border-radius: 5px;\n        background: #f5f8fc;\n\n        &.draggable {\n            position: absolute;\n            z-index: 100;\n            width: 100%;\n            box-shadow: -1px 2px 14px 0 #00000014;\n            opacity: 0.5;\n        }\n\n        &.drop-top {\n            border-top: 1px solid #00b7ff;\n        }\n\n        &.drop-bottom {\n            border-bottom: 1px solid #00b7ff;\n        }\n    }\n\n    &__wrapper {\n        border: 1px solid #d3d3d3;\n        padding: 10px;\n        padding-top: 11px;\n        border-radius: 5px;\n        background: #fff;\n    }\n\n    &__wrapper.dragging {\n        user-select: none;\n        padding-bottom: 100px;\n        > div * {\n            pointer-events: none;\n        }\n    }\n\n    &__reorder {\n        width: 20px;\n        display: flex;\n        justify-content: center;\n        align-content: flex-start;\n        i {\n            cursor: n-resize;\n        }\n    }\n\n    &__block {\n        flex: 1 1 0;\n    }\n\n    &__control {\n        width: 20px;\n        display: flex;\n        justify-content: center;\n        align-content: flex-start;\n        i {\n            cursor: pointer;\n            transition: 200ms;\n        }\n        .delete-button:hover {\n            color:red;\n        }\n    }\n\n    .add-button {\n        i {\n            margin-right: 5px;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/DwarfRepeater.vue?vue&type=style&index=0&id=2baf6d2c&lang=scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/DwarfRepeater.vue?vue&type=style&index=0&id=2baf6d2c&lang=scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DwarfRepeater_vue_vue_type_style_index_0_id_2baf6d2c_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DwarfRepeater.vue?vue&type=style&index=0&id=2baf6d2c&lang=scss */ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/DwarfRepeater.vue?vue&type=style&index=0&id=2baf6d2c&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DwarfRepeater_vue_vue_type_style_index_0_id_2baf6d2c_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DwarfRepeater_vue_vue_type_style_index_0_id_2baf6d2c_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/vue/trash/Dwarf/inputs/DwarfRepeater.vue":
/*!******************************************************!*\
  !*** ./src/vue/trash/Dwarf/inputs/DwarfRepeater.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DwarfRepeater_vue_vue_type_template_id_2baf6d2c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DwarfRepeater.vue?vue&type=template&id=2baf6d2c */ "./src/vue/trash/Dwarf/inputs/DwarfRepeater.vue?vue&type=template&id=2baf6d2c");
/* harmony import */ var _DwarfRepeater_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DwarfRepeater.vue?vue&type=script&lang=js */ "./src/vue/trash/Dwarf/inputs/DwarfRepeater.vue?vue&type=script&lang=js");
/* harmony import */ var _DwarfRepeater_vue_vue_type_style_index_0_id_2baf6d2c_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DwarfRepeater.vue?vue&type=style&index=0&id=2baf6d2c&lang=scss */ "./src/vue/trash/Dwarf/inputs/DwarfRepeater.vue?vue&type=style&index=0&id=2baf6d2c&lang=scss");
/* harmony import */ var _app_plugins_zen_threes_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_app_plugins_zen_threes_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_DwarfRepeater_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DwarfRepeater_vue_vue_type_template_id_2baf6d2c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/vue/trash/Dwarf/inputs/DwarfRepeater.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/vue/trash/Dwarf/inputs/DwarfRepeater.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./src/vue/trash/Dwarf/inputs/DwarfRepeater.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DwarfRepeater_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DwarfRepeater_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DwarfRepeater.vue?vue&type=script&lang=js */ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/DwarfRepeater.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/vue/trash/Dwarf/inputs/DwarfRepeater.vue?vue&type=style&index=0&id=2baf6d2c&lang=scss":
/*!***************************************************************************************************!*\
  !*** ./src/vue/trash/Dwarf/inputs/DwarfRepeater.vue?vue&type=style&index=0&id=2baf6d2c&lang=scss ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_cjs_js_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DwarfRepeater_vue_vue_type_style_index_0_id_2baf6d2c_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!../../../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DwarfRepeater.vue?vue&type=style&index=0&id=2baf6d2c&lang=scss */ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/DwarfRepeater.vue?vue&type=style&index=0&id=2baf6d2c&lang=scss");


/***/ }),

/***/ "./src/vue/trash/Dwarf/inputs/DwarfRepeater.vue?vue&type=template&id=2baf6d2c":
/*!************************************************************************************!*\
  !*** ./src/vue/trash/Dwarf/inputs/DwarfRepeater.vue?vue&type=template&id=2baf6d2c ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DwarfRepeater_vue_vue_type_template_id_2baf6d2c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DwarfRepeater_vue_vue_type_template_id_2baf6d2c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DwarfRepeater.vue?vue&type=template&id=2baf6d2c */ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/DwarfRepeater.vue?vue&type=template&id=2baf6d2c");


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc3JjX3Z1ZV90cmFzaF9Ed2FyZl9pbnB1dHNfRHdhcmZSZXBlYXRlcl92dWUuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQ0EsaUVBQWU7RUFDWEEsSUFBSSxFQUFFLHFCQUFxQjtFQUMzQkMsVUFBVSxFQUFFLENBQ1osQ0FBQztFQUNEQyxLQUFLLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztFQUM1QkMsS0FBSyxFQUFFO0lBQ0hDLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxJQUFJLEVBQUU7TUFDRkMsSUFBSSxFQUFFQyxNQUFNO01BQ1osV0FBUztJQUNiLENBQUM7SUFDREMsS0FBSyxFQUFFO01BQ0hGLElBQUksRUFBRSxDQUFDQyxNQUFNLEVBQUVFLFFBQVEsQ0FBQztNQUN4QixXQUFTO0lBQ2IsQ0FBQztJQUNEQyxRQUFRLEVBQUU7TUFDTkosSUFBSSxFQUFFQyxNQUFNO01BQ1osV0FBUztJQUNiLENBQUM7SUFDREksTUFBTSxFQUFFO01BQ0osV0FBUztJQUNiLENBQUM7SUFDREMsWUFBWSxFQUFFO01BQ1ZOLElBQUksRUFBRU8sTUFBTTtNQUNaLFdBQVMsQ0FBQztJQUNkO0VBQ0osQ0FBQztFQUNEQyxJQUFJLFdBQUpBLElBQUlBLENBQUEsRUFBRztJQUNILE9BQU87TUFDSEMsUUFBUSxFQUFFLElBQUk7TUFDZEMsY0FBYyxFQUFFLElBQUk7TUFDcEJDLGtCQUFrQixFQUFFLElBQUk7TUFDeEJDLGdCQUFnQixFQUFFO0lBQ3RCO0VBQ0osQ0FBQztFQUNEQyxPQUFPLFdBQVBBLE9BQU9BLENBQUEsRUFBRztJQUNOLElBQUksQ0FBQyxJQUFJLENBQUNmLFVBQVUsRUFBRTtNQUNuQjtJQUNIO0lBQ0EsSUFBSSxDQUFDYyxnQkFBZSxHQUFJLElBQUksQ0FBQ2QsVUFBUztFQUMxQyxDQUFDO0VBQ0RnQixLQUFLLEVBQUU7SUFDSGhCLFVBQVUsRUFBRTtNQUNSaUIsT0FBTyxXQUFQQSxPQUFPQSxDQUFDakIsVUFBVSxFQUFFO1FBQ2hCLElBQUks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LDRCQUE0QixnQkFBZ0IsaUNBQWlDLE9BQU8sbUJBQW1CLGlDQUFpQyxPQUFPLGlCQUFpQix3QkFBd0IsOEJBQThCLG9DQUFvQyx1QkFBdUIsOEJBQThCLDZCQUE2Qiw4QkFBOEIseUJBQXlCLGlDQUFpQywyQkFBMkIsMEJBQTBCLG9EQUFvRCwyQkFBMkIsV0FBVyx3QkFBd0IsNENBQTRDLFdBQVcsMkJBQTJCLCtDQUErQyxXQUFXLE9BQU8sb0JBQW9CLG9DQUFvQyx3QkFBd0IsNEJBQTRCLDZCQUE2QiwyQkFBMkIsT0FBTyw2QkFBNkIsNEJBQTRCLGdDQUFnQyxtQkFBbUIsbUNBQW1DLFdBQVcsT0FBTyxvQkFBb0Isc0JBQXNCLHdCQUF3QixrQ0FBa0Msb0NBQW9DLGFBQWEsK0JBQStCLFdBQVcsT0FBTyxrQkFBa0Isc0JBQXNCLE9BQU8sb0JBQW9CLHNCQUFzQix3QkFBd0Isa0NBQWtDLG9DQUFvQyxhQUFhLDhCQUE4QixnQ0FBZ0MsV0FBVyxnQ0FBZ0Msd0JBQXdCLFdBQVcsT0FBTyxxQkFBcUIsYUFBYSxnQ0FBZ0MsV0FBVyxPQUFPLEdBQUcscUJBQXFCO0FBQ2g1STtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQbUg7QUFDMUosWUFBazJCOztBQUVsMkI7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDhKQUFHLENBQUMsdXdCQUFPOzs7O0FBSXhCLGlFQUFlLHV3QkFBTyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNadUM7QUFDVjtBQUNMOztBQUUzRCxDQUF5RTs7QUFFbUk7QUFDNU0saUNBQWlDLHVOQUFlLENBQUMsa0ZBQU0sYUFBYSxvRkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFO0FBQUEsRUFjZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQzFCaVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3RyYXNoL0R3YXJmL2lucHV0cy9Ed2FyZlJlcGVhdGVyLnZ1ZSIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3RyYXNoL0R3YXJmL2lucHV0cy9Ed2FyZlJlcGVhdGVyLnZ1ZT9lYzUzIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvdHJhc2gvRHdhcmYvaW5wdXRzL0R3YXJmUmVwZWF0ZXIudnVlP2I0YjkiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS90cmFzaC9Ed2FyZi9pbnB1dHMvRHdhcmZSZXBlYXRlci52dWU/YWMwMiIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3RyYXNoL0R3YXJmL2lucHV0cy9Ed2FyZlJlcGVhdGVyLnZ1ZT83MTk4Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtcmVwZWF0ZXJcIiA6Y2xhc3M9XCJzaXplXCI+XG4gICAgICAgIDxkaXYgdi1pZj1cImlubmVyX2xhYmVsXCIgY2xhc3M9XCJpbnB1dC1yZXBlYXRlcl9fbGFiZWxcIj5cbiAgICAgICAgICAgIHt7IGlubmVyX2xhYmVsIH19XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHYtaWY9XCJyZXBlYXRlcl9vYmplY3RzXCIgY2xhc3M9XCJpbnB1dC1yZXBlYXRlcl9fd3JhcHBlclwiXG4gICAgICAgICAgICAgOmNsYXNzPVwie2RyYWdnaW5nOiB0aGlzLnJlb3JkZXJfcmVjb3JkICE9PSBudWxsfVwiXG4gICAgICAgICAgICAgQG1vdXNldXA9XCJkcm9wUmVvcmRlclwiXG4gICAgICAgICAgICAgQG1vdXNlbW92ZT1cIndyaXRlQ3Vyc29yXCJcbiAgICAgICAgICAgICBAbW91c2VsZWF2ZT1cImxlYXZlUmVvcmRlclwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJyZXBlYXRlcl9vYmplY3QgaW4gcmVwZWF0ZXJfb2JqZWN0c1wiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtcmVwZWF0ZXJfX2Zvcm1cIlxuICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbe2RyYWdnYWJsZTpyZXBlYXRlcl9vYmplY3QuZHJhZ2dhYmxlfSwgcmVwZWF0ZXJfb2JqZWN0LnJlb3JkZXJfY2xhc3NdXCJcbiAgICAgICAgICAgICAgICAgOnN0eWxlPVwicm93U3R5bGUocmVwZWF0ZXJfb2JqZWN0KVwiXG4gICAgICAgICAgICAgICAgIEBtb3VzZW1vdmU9XCJyb3dNb3VzZU1vdmUocmVwZWF0ZXJfb2JqZWN0LCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgQG1vdXNlbGVhdmU9XCJyb3dNb3VzZUxlYXZlKHJlcGVhdGVyX29iamVjdClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1yZXBlYXRlcl9fcmVvcmRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLWdyaXAtdmVydGljYWxcIiBAbW91c2Vkb3duLnN0b3A9XCJob2xkUmVvcmRlcihyZXBlYXRlcl9vYmplY3QsICRldmVudClcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LXJlcGVhdGVyX19ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpdHRlciA6c2NoZW1lPVwic2NoZW1lXCIgOm1vZGVsVmFsdWU9XCJyZXBlYXRlcl9vYmplY3RcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LXJlcGVhdGVyX19jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIEBjbGljaz1cImRlbGV0ZUVsZW1lbnQocmVwZWF0ZXJfb2JqZWN0KVwiIGNsYXNzPVwiYmkgYmktdHJhc2ggZGVsZXRlLWJ1dHRvblwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJhZGRGb3JtXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYWRkLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktcGx1cy1zcXVhcmVcIj48L2k+IHt7IGFkZF90ZXh0IH19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiRHdhcmYgUmVwZWF0ZXIgdjAuMVwiLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICB9LFxuICAgIGVtaXRzOiBbJ3VwZGF0ZTptb2RlbFZhbHVlJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbW9kZWxWYWx1ZTogbnVsbCxcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2Z1bGwnXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBGdW5jdGlvbl0sXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGFkZF90ZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAn0JTQvtCx0LDQstC40YLRjCdcbiAgICAgICAgfSxcbiAgICAgICAgc2NoZW1lOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGVtcHR5X29iamVjdDoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdDoge31cbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnNvcl95OiBudWxsLFxuICAgICAgICAgICAgcmVvcmRlcl9yZWNvcmQ6IG51bGwsXG4gICAgICAgICAgICByZW9yZGVyX3Jhd19oZWlnaHQ6IG51bGwsXG4gICAgICAgICAgICByZXBlYXRlcl9vYmplY3RzOiBbXVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICBpZiAoIXRoaXMubW9kZWxWYWx1ZSkge1xuICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcGVhdGVyX29iamVjdHMgPSB0aGlzLm1vZGVsVmFsdWVcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgICAgICAgIGhhbmRsZXIobW9kZWxWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVwZWF0ZXJfb2JqZWN0cyA9IG1vZGVsVmFsdWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHJlcGVhdGVyX29iamVjdHM6IHtcbiAgICAgICAgICAgIGhhbmRsZXIocmVwZWF0ZXJfb2JqZWN0cykge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgcmVwZWF0ZXJfb2JqZWN0cylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGN1cnNvcl95KHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlb3JkZXJfcmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW9yZGVyX3JlY29yZC55ID0geSAtIDE1XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGlubmVyX2xhYmVsKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGFiZWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmxhYmVsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxhYmVsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sYWJlbCgpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYWRkRm9ybSgpIHtcbiAgICAgICAgICAgIC8vdGhpcy5yZXBlYXRlcl9vYmplY3RzLnB1c2goe30pXG5cbiAgICAgICAgICAgIC8vIGlmICh0aGlzLm1vZGVsVmFsdWUpIHtcbiAgICAgICAgICAgIC8vICAgICBsZXQgbGFzdF9vYmplY3QgPSBfLmNsb25lRGVlcCh0aGlzLnJlcGVhdGVyX29iamVjdHNbdGhpcy5yZXBlYXRlcl9vYmplY3RzLmxlbmd0aCAtIDFdKVxuICAgICAgICAgICAgLy8gICAgIHRoaXMucmVwZWF0ZXJfb2JqZWN0cy5wdXNoKGxhc3Rfb2JqZWN0KVxuICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnJlcGVhdGVyX29iamVjdHMucHVzaCh7fSlcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgLy9sZXQgbGFzdF9vYmplY3QgPSBfLmNsb25lRGVlcCh0aGlzLnJlcGVhdGVyX29iamVjdHNbdGhpcy5yZXBlYXRlcl9vYmplY3RzLmxlbmd0aCAtIDFdKVxuICAgICAgICAgICAgLy90aGlzLnJlcGVhdGVyX29iamVjdHMucHVzaChsYXN0X29iamVjdClcblxuICAgICAgICAgICAgdGhpcy5yZXBlYXRlcl9vYmplY3RzLnB1c2goXy5jbG9uZURlZXAodGhpcy5lbXB0eV9vYmplY3QpKVxuXG4gICAgICAgICAgICAvL3RoaXMuJGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgcmVwZWF0ZXJfb2JqZWN0cylcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQl9Cw0L/QuNGB0YvQstCw0LXRgtGB0Y8gWS3QutC+0L7RgNC00LjQvdCw0YLQsCDQutGD0YDRgdC+0YDQsFxuICAgICAgICB3cml0ZUN1cnNvcihldmVudCkge1xuICAgICAgICAgICAgdGhpcy5jdXJzb3JfeSA9IGV2ZW50LmxheWVyWVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCc0YvRiNC60LAg0LfQsNC20LjQvNCw0LXRgtGB0Y8g0L3QsCDRjdC70LXQvNC10L3RgtC1XG4gICAgICAgIGhvbGRSZW9yZGVyKHJlY29yZCwgZXZlbnQpIHtcbiAgICAgICAgICAgIHJlY29yZC5kcmFnZ2FibGUgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLnJlb3JkZXJfcmVjb3JkID0gcmVjb3JkXG4gICAgICAgICAgICB0aGlzLnJlb3JkZXJfcmF3X2hlaWdodCA9ICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuaW5wdXQtcmVwZWF0ZXJfX2Zvcm0nKS5oZWlnaHQoKVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCc0YvRiNC60LAg0L7RgtC/0YPRgdC60LDQtdGC0YHRj1xuICAgICAgICBkcm9wUmVvcmRlcigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlb3JkZXJfcmVjb3JkID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1ha2VSZW9yZGVyKHRoaXMucmVvcmRlcl9yZWNvcmQsIHRoaXMucmVvcmRlcl90YXJnZXRfcmVjb3JkKVxuICAgICAgICAgICAgZGVsZXRlIHRoaXMucmVvcmRlcl9yZWNvcmQuZHJhZ2dhYmxlXG4gICAgICAgICAgICB0aGlzLnJlb3JkZXJfcmVjb3JkID0gbnVsbFxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCh0L7QstC10YDRiNC40YLRjCDQv9C10YDQtdGB0YLQsNC90L7QstC60YNcbiAgICAgICAgbWFrZVJlb3JkZXIoc291cmNlLCB0YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICghc291cmNlIHx8ICF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHRhcmdldC5yZW9yZGVyX2NsYXNzID09PSAnZHJvcC10b3AnID8gJ2JlZm9yZScgOiAnYWZ0ZXInXG4gICAgICAgICAgICBsZXQgbmV3X2FycmF5ID0gW11cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZXBlYXRlcl9vYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVwZWF0ZXJfb2JqZWN0c1tpXSA9PT0gc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlcGVhdGVyX29iamVjdHNbaV0gPT09IHRhcmdldCAmJiBwb3NpdGlvbiA9PT0gJ2JlZm9yZScpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3X2FycmF5LnB1c2goc291cmNlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdfYXJyYXkucHVzaCh0aGlzLnJlcGVhdGVyX29iamVjdHNbaV0pXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmVwZWF0ZXJfb2JqZWN0c1tpXSA9PT0gdGFyZ2V0ICYmIHBvc2l0aW9uID09PSAnYWZ0ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld19hcnJheS5wdXNoKHNvdXJjZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcGVhdGVyX29iamVjdHMgPSBuZXdfYXJyYXlcbiAgICAgICAgfSxcbiAgICAgICAgbGVhdmVSZW9yZGVyKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnJlb3JkZXJfcmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5yZW9yZGVyX3JlY29yZC5kcmFnZ2FibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlb3JkZXJfcmVjb3JkLmRyYWdnYWJsZSA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlb3JkZXJfcmVjb3JkID0gbnVsbFxuICAgICAgICB9LFxuICAgICAgICByb3dTdHlsZShyZWNvcmQpIHtcbiAgICAgICAgICAgIGxldCBzdHlsZSA9IFtdXG4gICAgICAgICAgICBpZiAodGhpcy5yZW9yZGVyX3JlY29yZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlb3JkZXJfcmVjb3JkID09PSByZWNvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUucHVzaChgdG9wOiR7dGhpcy5yZW9yZGVyX3JlY29yZC55fXB4YClcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUucHVzaCgncG9pbnRlci1ldmVudHM6bm9uZScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0eWxlLmpvaW4oJzsnKVxuICAgICAgICB9LFxuICAgICAgICByb3dNb3VzZU1vdmUocmVjb3JkLCBldmVudCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnJlb3JkZXJfcmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgeSA9IGV2ZW50Lm9mZnNldFlcbiAgICAgICAgICAgIGxldCBoID0gdGhpcy5yZW9yZGVyX3Jhd19oZWlnaHRcblxuICAgICAgICAgICAgaWYgKHkgPCBoIC8gMikge1xuICAgICAgICAgICAgICAgIHJlY29yZC5yZW9yZGVyX2NsYXNzID0gJ2Ryb3AtdG9wJ1xuICAgICAgICAgICAgICAgIHRoaXMucmVvcmRlcl90YXJnZXRfcmVjb3JkID0gcmVjb3JkXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlY29yZC5yZW9yZGVyX2NsYXNzID0gJ2Ryb3AtYm90dG9tJ1xuICAgICAgICAgICAgICAgIHRoaXMucmVvcmRlcl90YXJnZXRfcmVjb3JkID0gcmVjb3JkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJvd01vdXNlTGVhdmUocmVjb3JkKSB7XG4gICAgICAgICAgICBkZWxldGUgcmVjb3JkLnJlb3JkZXJfY2xhc3NcbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlRWxlbWVudChlbGVtZW50KVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUVsZW1lbnRIYW5kbGVyKGVsZW1lbnQpXG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZUVsZW1lbnRIYW5kbGVyKGVsZW1lbnQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMucmVwZWF0ZXJfb2JqZWN0cy5pbmRleE9mKGVsZW1lbnQpXG4gICAgICAgICAgICB0aGlzLnJlcGVhdGVyX29iamVjdHMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLmlucHV0LXJlcGVhdGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgJl9fbGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cblxuICAgICYuZnVsbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgfVxuXG4gICAgJi5oYWxmIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gN3B4KTtcbiAgICB9XG5cbiAgICAmLnF1YXJ0ZXIge1xuICAgICAgICB3aWR0aDogY2FsYygyNSUgLSA3cHgpO1xuICAgIH1cblxuICAgICZfX2Zvcm0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkM2QzO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjhmYztcblxuICAgICAgICAmLmRyYWdnYWJsZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMnB4IDE0cHggMCAjMDAwMDAwMTQ7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIH1cblxuICAgICAgICAmLmRyb3AtdG9wIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDBiN2ZmO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5kcm9wLWJvdHRvbSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwYjdmZjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX3dyYXBwZXIge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkM2QzO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTFweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIH1cblxuICAgICZfX3dyYXBwZXIuZHJhZ2dpbmcge1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICAgICAgICA+IGRpdiAqIHtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fcmVvcmRlciB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgaSB7XG4gICAgICAgICAgICBjdXJzb3I6IG4tcmVzaXplO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fYmxvY2sge1xuICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICB9XG5cbiAgICAmX19jb250cm9sIHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBpIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xuICAgICAgICB9XG4gICAgICAgIC5kZWxldGUtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOnJlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hZGQtYnV0dG9uIHtcbiAgICAgICAgaSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANS4yLjdfd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDUuMi43X3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pbnB1dC1yZXBlYXRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uaW5wdXQtcmVwZWF0ZXJfX2xhYmVsIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICM3Nzc7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxufVxcbi5pbnB1dC1yZXBlYXRlci5mdWxsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uaW5wdXQtcmVwZWF0ZXIuaGFsZiB7XFxuICB3aWR0aDogY2FsYyg1MCUgLSA3cHgpO1xcbn1cXG4uaW5wdXQtcmVwZWF0ZXIucXVhcnRlciB7XFxuICB3aWR0aDogY2FsYygyNSUgLSA3cHgpO1xcbn1cXG4uaW5wdXQtcmVwZWF0ZXJfX2Zvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkM2QzO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQ6ICNmNWY4ZmM7XFxufVxcbi5pbnB1dC1yZXBlYXRlcl9fZm9ybS5kcmFnZ2FibGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3gtc2hhZG93OiAtMXB4IDJweCAxNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA3ODQzMTM3MjUpO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG4uaW5wdXQtcmVwZWF0ZXJfX2Zvcm0uZHJvcC10b3Age1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMGI3ZmY7XFxufVxcbi5pbnB1dC1yZXBlYXRlcl9fZm9ybS5kcm9wLWJvdHRvbSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwYjdmZjtcXG59XFxuLmlucHV0LXJlcGVhdGVyX193cmFwcGVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZDM7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDExcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG4uaW5wdXQtcmVwZWF0ZXJfX3dyYXBwZXIuZHJhZ2dpbmcge1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcbn1cXG4uaW5wdXQtcmVwZWF0ZXJfX3dyYXBwZXIuZHJhZ2dpbmcgPiBkaXYgKiB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmlucHV0LXJlcGVhdGVyX19yZW9yZGVyIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLmlucHV0LXJlcGVhdGVyX19yZW9yZGVyIGkge1xcbiAgY3Vyc29yOiBuLXJlc2l6ZTtcXG59XFxuLmlucHV0LXJlcGVhdGVyX19ibG9jayB7XFxuICBmbGV4OiAxIDEgMDtcXG59XFxuLmlucHV0LXJlcGVhdGVyX19jb250cm9sIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLmlucHV0LXJlcGVhdGVyX19jb250cm9sIGkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMjAwbXM7XFxufVxcbi5pbnB1dC1yZXBlYXRlcl9fY29udHJvbCAuZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG4uaW5wdXQtcmVwZWF0ZXIgLmFkZC1idXR0b24gaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Z1ZS90cmFzaC9Ed2FyZi9pbnB1dHMvRHdhcmZSZXBlYXRlci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxtQkFBQTtBQUFKO0FBRUk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUdJO0VBQ0ksV0FBQTtBQURSO0FBSUk7RUFDSSxzQkFBQTtBQUZSO0FBS0k7RUFDSSxzQkFBQTtBQUhSO0FBTUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQU1RO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVEQUFBO0VBQ0EsWUFBQTtBQUpaO0FBT1E7RUFDSSw2QkFBQTtBQUxaO0FBUVE7RUFDSSxnQ0FBQTtBQU5aO0FBVUk7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFSUjtBQVdJO0VBQ0kseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0EscUJBQUE7QUFUUjtBQVVRO0VBQ0ksb0JBQUE7QUFSWjtBQVlJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBVlI7QUFXUTtFQUNJLGdCQUFBO0FBVFo7QUFhSTtFQUNJLFdBQUE7QUFYUjtBQWNJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBWlI7QUFhUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQVhaO0FBYVE7RUFDSSxVQUFBO0FBWFo7QUFnQlE7RUFDSSxpQkFBQTtBQWRaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5pbnB1dC1yZXBlYXRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuXFxuICAgICZfX2xhYmVsIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgY29sb3I6ICM3Nzc7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICAgIH1cXG5cXG4gICAgJi5mdWxsIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlXFxuICAgIH1cXG5cXG4gICAgJi5oYWxmIHtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDdweCk7XFxuICAgIH1cXG5cXG4gICAgJi5xdWFydGVyIHtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDI1JSAtIDdweCk7XFxuICAgIH1cXG5cXG4gICAgJl9fZm9ybSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZDM7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjhmYztcXG5cXG4gICAgICAgICYuZHJhZ2dhYmxlIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgei1pbmRleDogMTAwO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMnB4IDE0cHggMCAjMDAwMDAwMTQ7XFxuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJi5kcm9wLXRvcCB7XFxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMGI3ZmY7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmLmRyb3AtYm90dG9tIHtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwYjdmZjtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX193cmFwcGVyIHtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZDM7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDExcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICB9XFxuXFxuICAgICZfX3dyYXBwZXIuZHJhZ2dpbmcge1xcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XFxuICAgICAgICA+IGRpdiAqIHtcXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmX19yZW9yZGVyIHtcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgIGkge1xcbiAgICAgICAgICAgIGN1cnNvcjogbi1yZXNpemU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJl9fYmxvY2sge1xcbiAgICAgICAgZmxleDogMSAxIDA7XFxuICAgIH1cXG5cXG4gICAgJl9fY29udHJvbCB7XFxuICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBpIHtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMjAwbXM7XFxuICAgICAgICB9XFxuICAgICAgICAuZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxuICAgICAgICAgICAgY29sb3I6cmVkO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5hZGQtYnV0dG9uIHtcXG4gICAgICAgIGkge1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckAyLjAuMF93ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDUuMi43X3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vdnVlLWxvYWRlckAxNi44LjNfQHZ1ZStjb21waWxlci1zZmNAMy41LjE2X3Z1ZUAzLjUuMTZfdHlwZXNjcmlwdEA1LjguM19fd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Bvc3Rjc3MtbG9hZGVyQDYuMi4xX3Bvc3Rjc3NAOC41LjRfd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc2Fzcy1sb2FkZXJAMTYuMC41X3Nhc3NAMS44OS4yX3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbM10hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Z1ZS1sb2FkZXJAMTYuOC4zX0B2dWUrY29tcGlsZXItc2ZjQDMuNS4xNl92dWVAMy41LjE2X3R5cGVzY3JpcHRANS44LjNfX3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vRHdhcmZSZXBlYXRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yYmFmNmQyYyZsYW5nPXNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Ed2FyZlJlcGVhdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYmFmNmQyY1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0R3YXJmUmVwZWF0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0R3YXJmUmVwZWF0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Ed2FyZlJlcGVhdGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJiYWY2ZDJjJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9hcHAvcGx1Z2lucy96ZW4vdGhyZWVzL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL3Z1ZS90cmFzaC9Ed2FyZi9pbnB1dHMvRHdhcmZSZXBlYXRlci52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMmJhZjZkMmNcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcyYmFmNmQyYycsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzJiYWY2ZDJjJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ed2FyZlJlcGVhdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYmFmNmQyY1wiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCcyYmFmNmQyYycsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9iYWJlbC1sb2FkZXJAOC40LjFfQGJhYmVsK2NvcmVANy4yNy40X3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0R3YXJmUmVwZWF0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9iYWJlbC1sb2FkZXJAOC40LjFfQGJhYmVsK2NvcmVANy4yNy40X3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0R3YXJmUmVwZWF0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiXSwibmFtZXMiOlsibmFtZSIsImNvbXBvbmVudHMiLCJlbWl0cyIsInByb3BzIiwibW9kZWxWYWx1ZSIsInNpemUiLCJ0eXBlIiwiU3RyaW5nIiwibGFiZWwiLCJGdW5jdGlvbiIsImFkZF90ZXh0Iiwic2NoZW1lIiwiZW1wdHlfb2JqZWN0IiwiT2JqZWN0IiwiZGF0YSIsImN1cnNvcl95IiwicmVvcmRlcl9yZWNvcmQiLCJyZW9yZGVyX3Jhd19oZWlnaHQiLCJyZXBlYXRlcl9vYmplY3RzIiwiY3JlYXRlZCIsIndhdGNoIiwiaGFuZGxlciIsImRlZXAiLCIkZW1pdCIsInkiLCJjb21wdXRlZCIsImlubmVyX2xhYmVsIiwibWV0aG9kcyIsImFkZEZvcm0iLCJwdXNoIiwiXyIsImNsb25lRGVlcCIsIndyaXRlQ3Vyc29yIiwiZXZlbnQiLCJsYXllclkiLCJob2xkUmVvcmRlciIsInJlY29yZCIsImRyYWdnYWJsZSIsIiQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiaGVpZ2h0IiwiZHJvcFJlb3JkZXIiLCJtYWtlUmVvcmRlciIsInJlb3JkZXJfdGFyZ2V0X3JlY29yZCIsInNvdXJjZSIsInBvc2l0aW9uIiwicmVvcmRlcl9jbGFzcyIsIm5ld19hcnJheSIsImkiLCJsZW5ndGgiLCJsZWF2ZVJlb3JkZXIiLCJyb3dTdHlsZSIsInN0eWxlIiwiY29uY2F0Iiwiam9pbiIsInJvd01vdXNlTW92ZSIsIm9mZnNldFkiLCJoIiwicm93TW91c2VMZWF2ZSIsImRlbGV0ZUVsZW1lbnQiLCJlbGVtZW50IiwiZGVsZXRlRWxlbWVudEhhbmRsZXIiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX25vcm1hbGl6ZUNsYXNzIiwiJHByb3BzIiwiJG9wdGlvbnMiLCJfaG9pc3RlZF8xIiwiX3RvRGlzcGxheVN0cmluZyIsIiRkYXRhIiwiZHJhZ2dpbmciLCJvbk1vdXNldXAiLCJfY2FjaGUiLCJhcHBseSIsImFyZ3VtZW50cyIsIm9uTW91c2Vtb3ZlIiwib25Nb3VzZWxlYXZlIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCJyZXBlYXRlcl9vYmplY3QiLCJfbm9ybWFsaXplU3R5bGUiLCIkZXZlbnQiLCJfY3JlYXRlRWxlbWVudFZOb2RlIiwiX2hvaXN0ZWRfMyIsIm9uTW91c2Vkb3duIiwiX3dpdGhNb2RpZmllcnMiLCJfaG9pc3RlZF81IiwiX2NyZWF0ZVZOb2RlIiwiX2NvbXBvbmVudF9Gb3JtRml0dGVyIiwiX2hvaXN0ZWRfNiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9