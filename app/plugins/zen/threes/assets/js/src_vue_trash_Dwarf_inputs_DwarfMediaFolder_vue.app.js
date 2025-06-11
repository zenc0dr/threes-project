"use strict";
(self["webpackChunkthrees"] = self["webpackChunkthrees"] || []).push([["src_vue_trash_Dwarf_inputs_DwarfMediaFolder_vue"],{

/***/ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/forms/Modal.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/forms/Modal.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      "default": null
    },
    loaded: {
      type: Boolean,
      "default": null
    },
    maxWidth: {
      type: [Number, String],
      "default": 800
    },
    blockClose: {
      type: Boolean,
      "default": false
    },
    style: {
      type: String,
      "default": null
    }
  },
  data: function data() {
    return {
      reallyShow: false
    };
  },
  computed: {
    inner_style: function inner_style() {
      if (this.style) {
        return this.style;
      }
      var style = [];
      if (typeof this.maxWidth === "number") {
        style.push("max-width:".concat(this.maxWidth, "px"));
      }
      if (typeof this.maxWidth === "string") {
        style.push("max-width:".concat(this.maxWidth));
      }
      return style.join(';');
    }
  },
  watch: {
    show: function show(value) {
      var _this = this;
      if (!value) {
        this.reallyShow = false;
        return;
      }
      if (this.loaded === null) {
        this.reallyShow = true;
        return;
      }
      setTimeout(function () {
        _this.reallyShow = true;
      }, 300);
    },
    loaded: function loaded(value) {
      if (value) this.reallyShow = true;
    },
    reallyShow: function reallyShow(value) {
      if (value) {
        $('body').css('overflow-y', 'hidden');
      } else {
        $('body').css('overflow-y', 'auto');
      }
    }
  },
  methods: {
    closeModal: function closeModal() {
      if (!this.blockClose) {
        this.reallyShow = false;
        this.$emit('close');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _forms_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../forms/Modal */ "./src/vue/trash/Dwarf/forms/Modal.vue");
/* harmony import */ var primevue_inputtext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primevue/inputtext */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/inputtext/inputtext.esm.js");
/* harmony import */ var primevue_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primevue/button */ "./node_modules/.pnpm/primevue@3.53.1_vue@3.5.16_typescript@5.8.3_/node_modules/primevue/button/button.esm.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "DwarfMediaFolder",
  components: {
    Modal: _forms_Modal__WEBPACK_IMPORTED_MODULE_0__["default"],
    InputText: primevue_inputtext__WEBPACK_IMPORTED_MODULE_1__["default"],
    Button: primevue_button__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  emits: ['select', 'close'],
  props: {
    show_modal: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      images: [],
      editable_image: null,
      // Редактирование изображения

      images_upload_process: false,
      // Процесс загрузки изображений
      images_upload_progress: 0,
      // Сколько загружено
      uploading_images_count: 0,
      // Сколько будет загружено всего
      uploading_images: [],
      // Загружаемые изображения
      image_max_width: 2000,
      // Максимальная ширина изображения
      image_max_height: 2000,
      // Максимальная высота изображения

      folders: null,
      // Список каталогов
      selected_folder: null,
      // Выбранный каталог
      new_folder_name: null,
      // Имя нового каталога

      selected_images: [] // Выбранные изображения
    };
  },
  watch: {
    show_modal: function show_modal(state) {
      if (state) {
        this.loadImages();
      }
    },
    selected_folder: function selected_folder() {
      this.loadImages();
    }
  },
  computed: {
    image_count: function image_count() {
      var count = this.images ? this.images.length : 0;
      return count + ' ' + APP.inc(count, ['изображение', 'изображения', 'изображений']);
    },
    preloader_progress: function preloader_progress() {
      var of = this.uploading_images_count; // всего
      var to = this.images_upload_progress; // счётчик
      if (!of) {
        return 0;
      }
      return to * 100 / of;
    },
    folder_id: function folder_id() {
      return this.selected_folder ? this.selected_folder.id : null;
    }
  },
  methods: {
    loadImages: function loadImages() {
      var _this = this;
      APP.api({
        url: '/api/images:media',
        data: {
          folder_id: this.folder_id
        },
        then: function then(response) {
          if (response.success) {
            _this.images = response.images;
            _this.folders = response.folders;
          }
        }
      });
    },
    loadFolders: function loadFolders() {
      var _this2 = this;
      APP.api({
        url: '/api/images:folders',
        then: function then(response) {
          if (response.success) {
            _this2.folders = response.folders;
          }
        }
      });
    },
    // Добавление новых изображений
    isDropFiles: function isDropFiles(event) {
      var _this3 = this;
      var files = Array.from(event.target.files);
      this.uploading_images_count = files.length;
      files.map(function (file) {
        if (!['jpg', 'jpeg', 'png'].includes(file.type.split('/')[1])) {
          return;
        }
        var file_reader = new FileReader();
        file_reader.readAsDataURL(file);
        file_reader.onload = function (e) {
          var base64_data = e.target.result;
          _this3.resizeImage(base64_data, file.type, _this3.image_max_width, _this3.image_max_height, function (resized_base64_data) {
            //this.image = resized_base64_data
            _this3.addImage(file.name, resized_base64_data);
          });
        };
      });
    },
    // Функция ресайза изображений
    resizeImage: function resizeImage(base64_data, file_type, max_width, max_height, onResize) {
      var image = new Image();
      image.src = base64_data;
      image.onload = function () {
        var canvas = document.createElement("canvas");
        var workflow = canvas.getContext("2d");
        workflow.drawImage(image, 0, 0);
        var width = image.width;
        var height = image.height;
        if (width > height) {
          if (width > max_width) {
            height *= max_width / width;
            width = max_width;
          }
        } else {
          if (height > max_height) {
            width *= max_height / height;
            height = max_height;
          }
        }
        canvas.width = width;
        canvas.height = height;
        workflow = canvas.getContext("2d");
        workflow.drawImage(image, 0, 0, width, height);
        var base64_data = canvas.toDataURL(file_type);
        onResize(base64_data);
      };
    },
    // Добавить изображение
    addImage: function addImage(file_name, base64) {
      this.uploading_images.push({
        file_name: file_name,
        base64: base64
      });
      this.uploadImages();
    },
    uploadImages: function uploadImages() {
      if (this.images_upload_process) {
        return;
      }
      this.images_upload_process = true;
      this.uploadImage();
    },
    uploadImage: function uploadImage() {
      var _this4 = this;
      if (!this.uploading_images.length) {
        this.images_upload_process = false;
        this.images_upload_progress = 0;
        return;
      }
      this.images_upload_progress++;
      var image = this.uploading_images.shift();
      image.model_name = 'media_folder';
      APP.api({
        url: '/api/images:put',
        data: {
          image: image,
          folder_id: this.folder_id
        },
        no_preloader: true,
        then: function then(response) {
          if (response.success) {
            _this4.images.push(response.image);
            _this4.uploadImage();
          }
        }
      });
    },
    removeImage: function removeImage(image) {
      var _this5 = this;
      APP.api({
        url: '/api/images:remove',
        data: {
          image_id: image.id
        },
        then: function then(response) {
          if (response.success) {
            var index = _this5.images.indexOf(image);
            _this5.images.splice(index, 1);
          }
        }
      });
    },
    addFolder: function addFolder() {
      var _this6 = this;
      APP.api({
        url: '/api/images:add-folder',
        data: {
          folder: this.new_folder_name
        },
        then: function then(response) {
          if (response.success) {
            _this6.new_folder_name = null;
            _this6.folders = response.folders;
          }
        }
      });
    },
    selectFolder: function selectFolder(folder) {
      this.selected_folder = folder;
    },
    removeFolder: function removeFolder(folder) {
      var _this7 = this;
      APP.api({
        url: '/api/images:remove-folder',
        data: {
          folder_id: folder.id
        },
        then: function then(response) {
          if (response.success) {
            _this7.folders = response.folders;
          }
        }
      });
    },
    isSelected: function isSelected(image) {
      return this.selected_images.includes(image.id);
    },
    selectImage: function selectImage(image) {
      if (this.isSelected(image)) {
        return;
      }
      this.selected_images.push(image.id);
      this.$emit('select', image);
    }
  }
});

/***/ }),

/***/ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/forms/Modal.vue?vue&type=template&id=6b6dfcf7":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/forms/Modal.vue?vue&type=template&id=6b6dfcf7 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/.pnpm/vue@3.5.16_typescript@5.8.3/node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "modal dwarf-modal",
  style: {
    "display": "block"
  }
};
var _hoisted_2 = {
  "class": "modal-content"
};
var _hoisted_3 = {
  "class": "modal-header d-flex"
};
var _hoisted_4 = {
  key: 0,
  "class": "fs-3 fw-boldest"
};
var _hoisted_5 = {
  "class": "modal-body"
};
var _hoisted_6 = {
  key: 0,
  "class": "modal-footer"
};
var _hoisted_7 = {
  key: 1,
  "class": "modal-body"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $data.reallyShow ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "modal-dialog",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.inner_style)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [$props.loaded || $props.loaded === null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [$props.title ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "header"), !$props.blockClose ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 1,
    "class": "dwarf-modal__close",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.closeModal && $options.closeModal.apply($options, arguments);
    })
  }, _cache[1] || (_cache[1] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dwarf-modal__close__btn"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "bi bi-x"
  })], -1 /* HOISTED */)]))) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]), _ctx.$slots.footer ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "footer")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, _cache[2] || (_cache[2] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "dwarf-modal__preloader"
  }, " Загрузка... ", -1 /* HOISTED */)])))])], 4 /* STYLE */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue?vue&type=template&id=51dfe100":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue?vue&type=template&id=51dfe100 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  "class": "media-folder"
};
var _hoisted_2 = {
  "class": "media-folder__left-side"
};
var _hoisted_3 = ["onClick"];
var _hoisted_4 = {
  "class": "media-folder__tag__name"
};
var _hoisted_5 = ["onClick"];
var _hoisted_6 = {
  "class": "media-folder__add"
};
var _hoisted_7 = {
  "class": "p-inputgroup"
};
var _hoisted_8 = {
  "class": "media-folder__right-side"
};
var _hoisted_9 = {
  "class": "image-box__add-wrap"
};
var _hoisted_10 = {
  "class": "media-folder__previews"
};
var _hoisted_11 = {
  "class": "image-box__preview"
};
var _hoisted_12 = ["onClick"];
var _hoisted_13 = {
  "class": "image-box__preview__info"
};
var _hoisted_14 = {
  "class": "image-box__preview__info__row"
};
var _hoisted_15 = {
  "class": "image-box__preview__info__value"
};
var _hoisted_16 = ["href"];
var _hoisted_17 = {
  "class": "image-box__preview__info__row"
};
var _hoisted_18 = {
  "class": "image-box__preview__info__value"
};
var _hoisted_19 = {
  "class": "image-box__preview__info__row"
};
var _hoisted_20 = {
  "class": "image-box__preview__info__value"
};
var _hoisted_21 = {
  "class": "image-box__preview__info__row"
};
var _hoisted_22 = {
  "class": "media-folder__add-image"
};
var _hoisted_23 = ["onClick"];
var _hoisted_24 = {
  "class": "image-box__preview__control"
};
var _hoisted_25 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Button");
  var _component_InputText = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InputText");
  var _component_Modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Modal");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Modal, {
    "max-width": 1000,
    title: "Библиотека изображений",
    show: $props.show_modal,
    onClose: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.$emit('close');
    })
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["media-folder__tag", {
          active: $data.selected_folder === null
        }]),
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return $data.selected_folder = null;
        })
      }, _cache[4] || (_cache[4] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "media-folder__tag__name"
      }, "/", -1 /* HOISTED */)]), 2 /* CLASS */), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.folders, function (folder) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          onClick: function onClick($event) {
            return $options.selectFolder(folder);
          },
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
            active: $data.selected_folder && folder.id === $data.selected_folder.id
          }, "media-folder__tag"])
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(folder.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
            return $options.removeFolder(folder);
          }, ["stop"]),
          "class": "media-folder__tag__close"
        }, _toConsumableArray(_cache[5] || (_cache[5] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
          "class": "bi bi-x-circle"
        }, null, -1 /* HOISTED */)])), 8 /* PROPS */, _hoisted_5)], 10 /* CLASS, PROPS */, _hoisted_3);
      }), 256 /* UNKEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Button, {
        onClick: $options.addFolder,
        "class": "p-button-sm",
        label: "Добавить"
      }, null, 8 /* PROPS */, ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_InputText, {
        onKeyup: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)($options.addFolder, ["enter"]),
        modelValue: $data.new_folder_name,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.new_folder_name = $event;
        }),
        "class": "p-inputtext-sm",
        placeholder: "Имя каталога"
      }, null, 8 /* PROPS */, ["onKeyup", "modelValue"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [!$data.images_upload_process ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 0
      }, [_cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
        "class": "bi bi-plus-circle-dotted"
      }, null, -1 /* HOISTED */)), _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Добавить изображения ")), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        accept: ".jpg,.jpeg,.png",
        type: "file",
        multiple: "",
        onInput: _cache[2] || (_cache[2] = function () {
          return $options.isDropFiles && $options.isDropFiles.apply($options, arguments);
        })
      }, null, 32 /* NEED_HYDRATION */)], 64 /* STABLE_FRAGMENT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 1
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Загрузка изображений (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.images_upload_progress) + " из " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.uploading_images_count) + ") ... ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "image-box__preloader",
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("width:".concat($options.preloader_progress, "%"))
      }, null, 4 /* STYLE */)], 64 /* STABLE_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.images, function (image) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          "class": "image-box__preview__image",
          onClick: function onClick($event) {
            return $data.editable_image = image;
          },
          style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)("background-image:url(".concat(image.disk_name, ")"))
        }, null, 12 /* STYLE, PROPS */, _hoisted_12), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          "class": "image-box__preview__info__name"
        }, " URL: ", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
          target: "_blank",
          href: "".concat(image.disk_name)
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(image.disk_name), 9 /* TEXT, PROPS */, _hoisted_16)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          "class": "image-box__preview__info__name"
        }, " Заголовок: ", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(image.title), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          "class": "image-box__preview__info__name"
        }, " Описание: ", -1 /* HOISTED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(image.description), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
            return $options.selectImage(image);
          }, ["stop"]),
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["btn btn-primary", $options.isSelected(image) ? 'btn-success' : 'btn-primary'])
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.isSelected(image) ? 'Добавлено' : 'Добавить'), 11 /* TEXT, CLASS, PROPS */, _hoisted_23)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
          onClick: function onClick($event) {
            return $options.removeImage(image);
          },
          "class": "bi bi-trash-fill remove"
        }, null, 8 /* PROPS */, _hoisted_25)])]);
      }), 256 /* UNKEYED_FRAGMENT */))])])])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["show"]);
}

/***/ }),

/***/ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/forms/Modal.vue?vue&type=style&index=0&id=6b6dfcf7&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/forms/Modal.vue?vue&type=style&index=0&id=6b6dfcf7&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".dwarf-modal {\n  background: rgba(0, 0, 0, 0.6117647059);\n  overflow-y: auto;\n  animation: modal_flopped 200ms;\n}\n.dwarf-modal__close {\n  margin-left: auto;\n  cursor: pointer;\n}\n.dwarf-modal__close__btn {\n  display: flex;\n  background: #dcedff;\n  color: #62707f;\n  width: 39px;\n  height: 30px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n}\n.dwarf-modal__close__btn i {\n  font-size: 21px;\n}\n.dwarf-modal__preloader {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 300px;\n}\n.dwarf-modal .modal-dialog {\n  transition: all 300ms ease 0s;\n}\n\n/* Animations */\n@keyframes modal_flopped {\nfrom {\n    transform: scale(1.3);\n}\nto {\n    transform: scale(1);\n}\n}", "",{"version":3,"sources":["webpack://./src/vue/trash/Dwarf/forms/Modal.vue"],"names":[],"mappings":"AACA;EACI,uCAAA;EACA,gBAAA;EACA,8BAAA;AAAJ;AAEI;EACI,iBAAA;EACA,eAAA;AAAR;AACQ;EACI,aAAA;EACA,mBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AACZ;AAAY;EACI,eAAA;AAEhB;AAGI;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,iBAAA;AADR;AAII;EACI,6BAAA;AAFR;;AAMA,eAAA;AACA;AACI;IACI,qBAAA;AAHN;AAKE;IACI,mBAAA;AAHN;AACF","sourcesContent":["\n.dwarf-modal {\n    background: #0000009c;\n    overflow-y: auto;\n    animation: modal_flopped 200ms;\n\n    &__close {\n        margin-left: auto;\n        cursor: pointer;\n        &__btn {\n            display: flex;\n            background: #dcedff;\n            color: #62707f;\n            width: 39px;\n            height: 30px;\n            justify-content: center;\n            align-items: center;\n            border-radius: 5px;\n            i {\n                font-size: 21px;\n            }\n        }\n    }\n\n    &__preloader {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        min-height: 300px;\n    }\n\n    .modal-dialog {\n        transition: all 300ms ease 0s;\n    }\n}\n\n/* Animations */\n@keyframes modal_flopped {\n    from {\n        transform: scale(1.3);\n    }\n    to {\n        transform: scale(1);\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue?vue&type=style&index=0&id=51dfe100&lang=scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue?vue&type=style&index=0&id=51dfe100&lang=scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".media-folder {\n  display: flex;\n  flex-direction: row;\n}\n.media-folder__left-side {\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  padding-right: 5px;\n}\n.media-folder__tag {\n  display: flex;\n  flex-direction: row;\n  padding: 6px 10px;\n  margin: 3px 0;\n  background: #fdff89;\n  color: #63777d;\n  font-weight: bold;\n  font-size: 12px;\n  border-radius: 5px;\n  justify-content: space-between;\n  transition: 300ms;\n  cursor: pointer;\n}\n.media-folder__tag__name {\n  flex: 1 0 0;\n}\n.media-folder__tag__close {\n  cursor: pointer;\n  display: flex;\n  width: 20px;\n}\n.media-folder__tag__close i {\n  font-size: 20px;\n  transition: 200ms;\n}\n.media-folder__tag__close:hover i {\n  color: red;\n}\n.media-folder__tag.active {\n  background: #fcff46;\n  color: #5c5c5c;\n}\n.media-folder__add {\n  width: 100%;\n  margin-top: 10px;\n}\n.media-folder__add-image {\n  display: flex;\n  justify-content: flex-end;\n}\n.media-folder__previews {\n  margin-top: 10px;\n  padding: 0 5px;\n}\n.media-folder__right-side {\n  flex: 1 0 0;\n}", "",{"version":3,"sources":["webpack://./src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue"],"names":[],"mappings":"AACA;EACI,aAAA;EACA,mBAAA;AAAJ;AAEI;EACI,YAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;AAAR;AAGI;EACI,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,cAAA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,8BAAA;EACA,iBAAA;EACA,eAAA;AADR;AAGQ;EACI,WAAA;AADZ;AAIQ;EACI,eAAA;EACA,aAAA;EACA,WAAA;AAFZ;AAGY;EACI,eAAA;EACA,iBAAA;AADhB;AAGY;EACI,UAAA;AADhB;AAKQ;EACI,mBAAA;EACA,cAAA;AAHZ;AAOI;EACI,WAAA;EACA,gBAAA;AALR;AAQI;EACI,aAAA;EACA,yBAAA;AANR;AASI;EACI,gBAAA;EACA,cAAA;AAPR;AAWI;EACI,WAAA;AATR","sourcesContent":["\n.media-folder {\n    display: flex;\n    flex-direction: row;\n\n    &__left-side {\n        width: 300px;\n        display: flex;\n        flex-direction: column;\n        padding-right: 5px;\n    }\n\n    &__tag {\n        display: flex;\n        flex-direction: row;\n        padding: 6px 10px;\n        margin: 3px 0;\n        background: #fdff89;\n        color: #63777d;\n        font-weight: bold;\n        font-size: 12px;\n        border-radius: 5px;\n        justify-content: space-between;\n        transition: 300ms;\n        cursor: pointer;\n\n        &__name {\n            flex: 1 0 0;\n        }\n\n        &__close {\n            cursor: pointer;\n            display: flex;\n            width: 20px;\n            i {\n                font-size: 20px;\n                transition: 200ms;\n            }\n            &:hover i {\n                color: red;\n            }\n        }\n\n        &.active {\n            background: #fcff46;\n            color: #5c5c5c;\n        }\n    }\n\n    &__add {\n        width: 100%;\n        margin-top: 10px;\n    }\n\n    &__add-image {\n        display:flex;\n        justify-content:flex-end;\n    }\n\n    &__previews {\n        margin-top: 10px;\n        padding: 0 5px;\n    }\n\n\n    &__right-side {\n        flex: 1 0 0;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/forms/Modal.vue?vue&type=style&index=0&id=6b6dfcf7&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/forms/Modal.vue?vue&type=style&index=0&id=6b6dfcf7&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_style_index_0_id_6b6dfcf7_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal.vue?vue&type=style&index=0&id=6b6dfcf7&lang=scss */ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/forms/Modal.vue?vue&type=style&index=0&id=6b6dfcf7&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_style_index_0_id_6b6dfcf7_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_style_index_0_id_6b6dfcf7_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue?vue&type=style&index=0&id=51dfe100&lang=scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue?vue&type=style&index=0&id=51dfe100&lang=scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DwarfMediaFolder_vue_vue_type_style_index_0_id_51dfe100_lang_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DwarfMediaFolder.vue?vue&type=style&index=0&id=51dfe100&lang=scss */ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue?vue&type=style&index=0&id=51dfe100&lang=scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DwarfMediaFolder_vue_vue_type_style_index_0_id_51dfe100_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DwarfMediaFolder_vue_vue_type_style_index_0_id_51dfe100_lang_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/vue/trash/Dwarf/forms/Modal.vue":
/*!*********************************************!*\
  !*** ./src/vue/trash/Dwarf/forms/Modal.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modal_vue_vue_type_template_id_6b6dfcf7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=6b6dfcf7 */ "./src/vue/trash/Dwarf/forms/Modal.vue?vue&type=template&id=6b6dfcf7");
/* harmony import */ var _Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&lang=js */ "./src/vue/trash/Dwarf/forms/Modal.vue?vue&type=script&lang=js");
/* harmony import */ var _Modal_vue_vue_type_style_index_0_id_6b6dfcf7_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.vue?vue&type=style&index=0&id=6b6dfcf7&lang=scss */ "./src/vue/trash/Dwarf/forms/Modal.vue?vue&type=style&index=0&id=6b6dfcf7&lang=scss");
/* harmony import */ var _app_plugins_zen_threes_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_app_plugins_zen_threes_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Modal_vue_vue_type_template_id_6b6dfcf7__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/vue/trash/Dwarf/forms/Modal.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/vue/trash/Dwarf/forms/Modal.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./src/vue/trash/Dwarf/forms/Modal.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal.vue?vue&type=script&lang=js */ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/forms/Modal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/vue/trash/Dwarf/forms/Modal.vue?vue&type=style&index=0&id=6b6dfcf7&lang=scss":
/*!******************************************************************************************!*\
  !*** ./src/vue/trash/Dwarf/forms/Modal.vue?vue&type=style&index=0&id=6b6dfcf7&lang=scss ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_cjs_js_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_style_index_0_id_6b6dfcf7_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!../../../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal.vue?vue&type=style&index=0&id=6b6dfcf7&lang=scss */ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/forms/Modal.vue?vue&type=style&index=0&id=6b6dfcf7&lang=scss");


/***/ }),

/***/ "./src/vue/trash/Dwarf/forms/Modal.vue?vue&type=template&id=6b6dfcf7":
/*!***************************************************************************!*\
  !*** ./src/vue/trash/Dwarf/forms/Modal.vue?vue&type=template&id=6b6dfcf7 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_template_id_6b6dfcf7__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Modal_vue_vue_type_template_id_6b6dfcf7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Modal.vue?vue&type=template&id=6b6dfcf7 */ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/forms/Modal.vue?vue&type=template&id=6b6dfcf7");


/***/ }),

/***/ "./src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue":
/*!*********************************************************!*\
  !*** ./src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DwarfMediaFolder_vue_vue_type_template_id_51dfe100__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DwarfMediaFolder.vue?vue&type=template&id=51dfe100 */ "./src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue?vue&type=template&id=51dfe100");
/* harmony import */ var _DwarfMediaFolder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DwarfMediaFolder.vue?vue&type=script&lang=js */ "./src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue?vue&type=script&lang=js");
/* harmony import */ var _DwarfMediaFolder_vue_vue_type_style_index_0_id_51dfe100_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DwarfMediaFolder.vue?vue&type=style&index=0&id=51dfe100&lang=scss */ "./src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue?vue&type=style&index=0&id=51dfe100&lang=scss");
/* harmony import */ var _app_plugins_zen_threes_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_app_plugins_zen_threes_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_DwarfMediaFolder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DwarfMediaFolder_vue_vue_type_template_id_51dfe100__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue"]])
/* hot reload */
if (false) // removed by dead control flow
{}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DwarfMediaFolder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DwarfMediaFolder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DwarfMediaFolder.vue?vue&type=script&lang=js */ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue?vue&type=style&index=0&id=51dfe100&lang=scss":
/*!******************************************************************************************************!*\
  !*** ./src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue?vue&type=style&index=0&id=51dfe100&lang=scss ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_style_loader_2_0_0_webpack_5_99_9_node_modules_style_loader_dist_cjs_js_node_modules_pnpm_css_loader_5_2_7_webpack_5_99_9_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_6_2_1_postcss_8_5_4_webpack_5_99_9_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_pnpm_sass_loader_16_0_5_sass_1_89_2_webpack_5_99_9_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DwarfMediaFolder_vue_vue_type_style_index_0_id_51dfe100_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!../../../../../node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DwarfMediaFolder.vue?vue&type=style&index=0&id=51dfe100&lang=scss */ "./node_modules/.pnpm/style-loader@2.0.0_webpack@5.99.9/node_modules/style-loader/dist/cjs.js!./node_modules/.pnpm/css-loader@5.2.7_webpack@5.99.9/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_postcss@8.5.4_webpack@5.99.9/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/.pnpm/sass-loader@16.0.5_sass@1.89.2_webpack@5.99.9/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue?vue&type=style&index=0&id=51dfe100&lang=scss");


/***/ }),

/***/ "./src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue?vue&type=template&id=51dfe100":
/*!***************************************************************************************!*\
  !*** ./src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue?vue&type=template&id=51dfe100 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DwarfMediaFolder_vue_vue_type_template_id_51dfe100__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_babel_loader_8_4_1_babel_core_7_27_4_webpack_5_99_9_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_16_vue_3_5_16_typescript_5_8_3_webpack_5_99_9_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DwarfMediaFolder_vue_vue_type_template_id_51dfe100__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DwarfMediaFolder.vue?vue&type=template&id=51dfe100 */ "./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.27.4_webpack@5.99.9/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.16_vue@3.5.16_typescript@5.8.3__webpack@5.99.9/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/vue/trash/Dwarf/inputs/DwarfMediaFolder.vue?vue&type=template&id=51dfe100");


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc3JjX3Z1ZV90cmFzaF9Ed2FyZl9pbnB1dHNfRHdhcmZNZWRpYUZvbGRlcl92dWUuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFpQ0EsaUVBQWU7RUFDWEEsSUFBSSxFQUFFLE9BQU87RUFDYkMsS0FBSyxFQUFFO0lBQ0hDLElBQUksRUFBRTtNQUNGQyxJQUFJLEVBQUVDLE9BQU87TUFDYkMsUUFBUSxFQUFFO0lBQ2QsQ0FBQztJQUNEQyxLQUFLLEVBQUU7TUFDSEgsSUFBSSxFQUFFSSxNQUFNO01BQ1osV0FBUztJQUNiLENBQUM7SUFDREMsTUFBTSxFQUFFO01BQ0pMLElBQUksRUFBRUMsT0FBTztNQUNiLFdBQVM7SUFDYixDQUFDO0lBQ0RLLFFBQVEsRUFBRTtNQUNOTixJQUFJLEVBQUUsQ0FBQ08sTUFBTSxFQUFFSCxNQUFNLENBQUM7TUFDdEIsV0FBUztJQUNiLENBQUM7SUFDREksVUFBVSxFQUFFO01BQ1JSLElBQUksRUFBRUMsT0FBTztNQUNiLFdBQVM7SUFDYixDQUFDO0lBQ0RRLEtBQUssRUFBRTtNQUNIVCxJQUFJLEVBQUVJLE1BQU07TUFDWixXQUFTO0lBQ2I7RUFDSixDQUFDO0VBQ0RNLElBQUksV0FBSkEsSUFBSUEsQ0FBQSxFQUFHO0lBQ0gsT0FBTztNQUNIQyxVQUFVLEVBQUU7SUFDaEI7RUFDSixDQUFDO0VBQ0RDLFFBQVEsRUFBRTtJQUNOQyxXQUFXLFdBQVhBLFdBQVdBLENBQUEsRUFBRztNQUNWLElBQUksSUFBSSxDQUFDSixLQUFLLEVBQUU7UUFDWixPQUFPLElBQUksQ0FBQ0EsS0FBSTtNQUNwQjtNQUVBLElBQUlBLEtBQUksR0FBSSxFQUFDO01BQ2IsSUFBSSxPQUFPLElBQUksQ0FBQ0gsUUFBTyxLQUFNLFFBQVEsRUFBRTtRQUNuQ0csS0FBSyxDQUFDSyxJQUFJLGNBQUFDLE1BQUEsQ0FBYyxJQUFJLENBQUNULFFBQVEsT0FBSTtNQUM3QztNQUNBLElBQUksT0FBTyxJQUFJLENBQUNBLFFBQU8sS0FBTSxRQUFR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O0FDQTNUO0FBQ1Y7QUFDTDs7QUFFOUQsQ0FBNEU7O0FBRWdJO0FBQzVNLGlDQUFpQyx1TkFBZSxDQUFDLHFGQUFNLGFBQWEsdUZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRTtBQUFBLEVBY2Y7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUMxQm9ZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS90cmFzaC9Ed2FyZi9mb3Jtcy9Nb2RhbC52dWUiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS90cmFzaC9Ed2FyZi9pbnB1dHMvRHdhcmZNZWRpYUZvbGRlci52dWUiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS90cmFzaC9Ed2FyZi9mb3Jtcy9Nb2RhbC52dWU/ZDFkYiIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3RyYXNoL0R3YXJmL2lucHV0cy9Ed2FyZk1lZGlhRm9sZGVyLnZ1ZT9hMWE1Iiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvdHJhc2gvRHdhcmYvZm9ybXMvTW9kYWwudnVlPzNhYjQiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS90cmFzaC9Ed2FyZi9pbnB1dHMvRHdhcmZNZWRpYUZvbGRlci52dWU/MzljMyIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3RyYXNoL0R3YXJmL2Zvcm1zL01vZGFsLnZ1ZT80M2MwIiwid2VicGFjazovL3RocmVlcy8uL3NyYy92dWUvdHJhc2gvRHdhcmYvZm9ybXMvTW9kYWwudnVlPzFiYWMiLCJ3ZWJwYWNrOi8vdGhyZWVzLy4vc3JjL3Z1ZS90cmFzaC9Ed2FyZi9pbnB1dHMvRHdhcmZNZWRpYUZvbGRlci52dWU/MjYwZCIsIndlYnBhY2s6Ly90aHJlZXMvLi9zcmMvdnVlL3RyYXNoL0R3YXJmL2lucHV0cy9Ed2FyZk1lZGlhRm9sZGVyLnZ1ZT80YWNiIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IHYtaWY9XCJyZWFsbHlTaG93XCIgY2xhc3M9XCJtb2RhbCBkd2FyZi1tb2RhbFwiIHN0eWxlPVwiZGlzcGxheTpibG9ja1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCIgOnN0eWxlPVwiaW5uZXJfc3R5bGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJsb2FkZWQgfHwgbG9hZGVkID09PSBudWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXIgZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ0aXRsZVwiIGNsYXNzPVwiZnMtMyBmdy1ib2xkZXN0XCI+e3sgdGl0bGUgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIhYmxvY2tDbG9zZVwiIGNsYXNzPVwiZHdhcmYtbW9kYWxfX2Nsb3NlXCIgQGNsaWNrPVwiY2xvc2VNb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkd2FyZi1tb2RhbF9fY2xvc2VfX2J0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLXhcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIkc2xvdHMuZm9vdGVyXCIgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJmb290ZXJcIj48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkd2FyZi1tb2RhbF9fcHJlbG9hZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0JfQsNCz0YDRg9C30LrQsC4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnTW9kYWwnLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHNob3c6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZGVkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9LFxuICAgICAgICBtYXhXaWR0aDoge1xuICAgICAgICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IDgwMFxuICAgICAgICB9LFxuICAgICAgICBibG9ja0Nsb3NlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZWFsbHlTaG93OiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBpbm5lcl9zdHlsZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHN0eWxlID0gW11cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5tYXhXaWR0aCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHN0eWxlLnB1c2goYG1heC13aWR0aDoke3RoaXMubWF4V2lkdGh9cHhgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm1heFdpZHRoID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUucHVzaChgbWF4LXdpZHRoOiR7dGhpcy5tYXhXaWR0aH1gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0eWxlLmpvaW4oJzsnKVxuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBzaG93KHZhbHVlKSB7XG5cbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWxseVNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5sb2FkZWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWxseVNob3cgPSB0cnVlXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhbGx5U2hvdyA9IHRydWVcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRlZCh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB0aGlzLnJlYWxseVNob3cgPSB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHJlYWxseVNob3codmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5jc3MoJ292ZXJmbG93LXknLCAnaGlkZGVuJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmNzcygnb3ZlcmZsb3cteScsICdhdXRvJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBjbG9zZU1vZGFsKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmJsb2NrQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWxseVNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uZHdhcmYtbW9kYWwge1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA5YztcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGFuaW1hdGlvbjogbW9kYWxfZmxvcHBlZCAyMDBtcztcblxuICAgICZfX2Nsb3NlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgJl9fYnRuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGNlZGZmO1xuICAgICAgICAgICAgY29sb3I6ICM2MjcwN2Y7XG4gICAgICAgICAgICB3aWR0aDogMzlweDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX3ByZWxvYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICB9XG5cbiAgICAubW9kYWwtZGlhbG9nIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UgMHM7XG4gICAgfVxufVxuXG4vKiBBbmltYXRpb25zICovXG5Aa2V5ZnJhbWVzIG1vZGFsX2Zsb3BwZWQge1xuICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxNb2RhbCA6bWF4LXdpZHRoPVwiMTAwMFwiIHRpdGxlPVwi0JHQuNCx0LvQuNC+0YLQtdC60LAg0LjQt9C+0LHRgNCw0LbQtdC90LjQuVwiIDpzaG93PVwic2hvd19tb2RhbFwiIEBjbG9zZT1cIiRlbWl0KCdjbG9zZScpXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1mb2xkZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1mb2xkZXJfX2xlZnQtc2lkZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1mb2xkZXJfX3RhZ1wiXG4gICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJzZWxlY3RlZF9mb2xkZXIgPSBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInthY3RpdmU6IHNlbGVjdGVkX2ZvbGRlciA9PT0gbnVsbH1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWZvbGRlcl9fdGFnX19uYW1lXCI+LzwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrPVwic2VsZWN0Rm9sZGVyKGZvbGRlcilcIlxuICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCJmb2xkZXIgaW4gZm9sZGVyc1wiXG4gICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7YWN0aXZlOiBzZWxlY3RlZF9mb2xkZXIgJiYgKGZvbGRlci5pZCA9PT0gc2VsZWN0ZWRfZm9sZGVyLmlkKX1cIlxuICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtZWRpYS1mb2xkZXJfX3RhZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaWEtZm9sZGVyX190YWdfX25hbWVcIj57eyBmb2xkZXIubmFtZSB9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IEBjbGljay5zdG9wPVwicmVtb3ZlRm9sZGVyKGZvbGRlcilcIiBjbGFzcz1cIm1lZGlhLWZvbGRlcl9fdGFnX19jbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS14LWNpcmNsZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWZvbGRlcl9fYWRkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLWlucHV0Z3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gQGNsaWNrPVwiYWRkRm9sZGVyXCIgY2xhc3M9XCJwLWJ1dHRvbi1zbVwiIGxhYmVsPVwi0JTQvtCx0LDQstC40YLRjFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRleHQgQGtleXVwLmVudGVyPVwiYWRkRm9sZGVyXCIgdi1tb2RlbD1cIm5ld19mb2xkZXJfbmFtZVwiIGNsYXNzPVwicC1pbnB1dHRleHQtc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCY0LzRjyDQutCw0YLQsNC70L7Qs9CwXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWZvbGRlcl9fcmlnaHQtc2lkZVwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLWJveF9fYWRkLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCIhaW1hZ2VzX3VwbG9hZF9wcm9jZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLXBsdXMtY2lyY2xlLWRvdHRlZFwiPjwvaT4g0JTQvtCx0LDQstC40YLRjCDQuNC30L7QsdGA0LDQttC10L3QuNGPXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYWNjZXB0PVwiLmpwZywuanBlZywucG5nXCIgdHlwZT1cImZpbGVcIiBtdWx0aXBsZSBAaW5wdXQ9XCJpc0Ryb3BGaWxlc1wiPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAg0JfQsNCz0YDRg9C30LrQsCDQuNC30L7QsdGA0LDQttC10L3QuNC5ICh7eyBpbWFnZXNfdXBsb2FkX3Byb2dyZXNzIH19INC40Lcge3sgdXBsb2FkaW5nX2ltYWdlc19jb3VudCB9fSkgLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtYm94X19wcmVsb2FkZXJcIiA6c3R5bGU9XCJgd2lkdGg6JHsgcHJlbG9hZGVyX3Byb2dyZXNzIH0lYFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1mb2xkZXJfX3ByZXZpZXdzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJpbWFnZSBpbiBpbWFnZXNcIiBjbGFzcz1cImltYWdlLWJveF9fcHJldmlld1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLWJveF9fcHJldmlld19faW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJlZGl0YWJsZV9pbWFnZSA9IGltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwiYGJhY2tncm91bmQtaW1hZ2U6dXJsKCR7IGltYWdlLmRpc2tfbmFtZSB9KWBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLWJveF9fcHJldmlld19faW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1ib3hfX3ByZXZpZXdfX2luZm9fX3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtYm94X19wcmV2aWV3X19pbmZvX19uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVUkw6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtYm94X19wcmV2aWV3X19pbmZvX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgOmhyZWY9XCJgJHtpbWFnZS5kaXNrX25hbWV9YFwiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UuZGlza19uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1ib3hfX3ByZXZpZXdfX2luZm9fX3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtYm94X19wcmV2aWV3X19pbmZvX19uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQl9Cw0LPQvtC70L7QstC+0Lo6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtYm94X19wcmV2aWV3X19pbmZvX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaW1hZ2UudGl0bGUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLWJveF9fcHJldmlld19faW5mb19fcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1ib3hfX3ByZXZpZXdfX2luZm9fX25hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCe0L/QuNGB0LDQvdC40LU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtYm94X19wcmV2aWV3X19pbmZvX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaW1hZ2UuZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLWJveF9fcHJldmlld19faW5mb19fcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1mb2xkZXJfX2FkZC1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBAY2xpY2suc3RvcD1cInNlbGVjdEltYWdlKGltYWdlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiaXNTZWxlY3RlZChpbWFnZSkgPyAnYnRuLXN1Y2Nlc3MnIDogJ2J0bi1wcmltYXJ5J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgIGlzU2VsZWN0ZWQoaW1hZ2UpID8gJ9CU0L7QsdCw0LLQu9C10L3QvicgOiAn0JTQvtCx0LDQstC40YLRjCcgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLWJveF9fcHJldmlld19fY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIEBjbGljaz1cInJlbW92ZUltYWdlKGltYWdlKVwiIGNsYXNzPVwiYmkgYmktdHJhc2gtZmlsbCByZW1vdmVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9Nb2RhbD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uL2Zvcm1zL01vZGFsXCI7XG5pbXBvcnQgSW5wdXRUZXh0IGZyb20gXCJwcmltZXZ1ZS9pbnB1dHRleHRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInByaW1ldnVlL2J1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJEd2FyZk1lZGlhRm9sZGVyXCIsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBNb2RhbCwgSW5wdXRUZXh0LCBCdXR0b25cbiAgICB9LFxuICAgIGVtaXRzOiBbJ3NlbGVjdCcsICdjbG9zZSddLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHNob3dfbW9kYWw6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbWFnZXM6IFtdLFxuXG4gICAgICAgICAgICBlZGl0YWJsZV9pbWFnZTogbnVsbCwgLy8g0KDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQuNC30L7QsdGA0LDQttC10L3QuNGPXG5cbiAgICAgICAgICAgIGltYWdlc191cGxvYWRfcHJvY2VzczogZmFsc2UsIC8vINCf0YDQvtGG0LXRgdGBINC30LDQs9GA0YPQt9C60Lgg0LjQt9C+0LHRgNCw0LbQtdC90LjQuVxuICAgICAgICAgICAgaW1hZ2VzX3VwbG9hZF9wcm9ncmVzczogMCwgLy8g0KHQutC+0LvRjNC60L4g0LfQsNCz0YDRg9C20LXQvdC+XG4gICAgICAgICAgICB1cGxvYWRpbmdfaW1hZ2VzX2NvdW50OiAwLCAvLyDQodC60L7Qu9GM0LrQviDQsdGD0LTQtdGCINC30LDQs9GA0YPQttC10L3QviDQstGB0LXQs9C+XG4gICAgICAgICAgICB1cGxvYWRpbmdfaW1hZ2VzOiBbXSwgLy8g0JfQsNCz0YDRg9C20LDQtdC80YvQtSDQuNC30L7QsdGA0LDQttC10L3QuNGPXG4gICAgICAgICAgICBpbWFnZV9tYXhfd2lkdGg6IDIwMDAsIC8vINCc0LDQutGB0LjQvNCw0LvRjNC90LDRjyDRiNC40YDQuNC90LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRj1xuICAgICAgICAgICAgaW1hZ2VfbWF4X2hlaWdodDogMjAwMCwgLy8g0JzQsNC60YHQuNC80LDQu9GM0L3QsNGPINCy0YvRgdC+0YLQsCDQuNC30L7QsdGA0LDQttC10L3QuNGPXG5cbiAgICAgICAgICAgIGZvbGRlcnM6IG51bGwsIC8vINCh0L/QuNGB0L7QuiDQutCw0YLQsNC70L7Qs9C+0LJcbiAgICAgICAgICAgIHNlbGVjdGVkX2ZvbGRlcjogbnVsbCwgLy8g0JLRi9Cx0YDQsNC90L3Ri9C5INC60LDRgtCw0LvQvtCzXG4gICAgICAgICAgICBuZXdfZm9sZGVyX25hbWU6IG51bGwsIC8vINCY0LzRjyDQvdC+0LLQvtCz0L4g0LrQsNGC0LDQu9C+0LPQsFxuXG4gICAgICAgICAgICBzZWxlY3RlZF9pbWFnZXM6IFtdLCAvLyDQktGL0LHRgNCw0L3QvdGL0LUg0LjQt9C+0LHRgNCw0LbQtdC90LjRj1xuICAgICAgICB9XG4gICAgfSxcbiAgICB3YXRjaDoge1xuICAgICAgICBzaG93X21vZGFsKHN0YXRlKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRJbWFnZXMoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RlZF9mb2xkZXIoKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRJbWFnZXMoKVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBpbWFnZV9jb3VudCgpIHtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IHRoaXMuaW1hZ2VzID8gdGhpcy5pbWFnZXMubGVuZ3RoIDogMFxuICAgICAgICAgICAgcmV0dXJuIGNvdW50ICsgJyAnICsgQVBQLmluYyhjb3VudCwgWyfQuNC30L7QsdGA0LDQttC10L3QuNC1JywgJ9C40LfQvtCx0YDQsNC20LXQvdC40Y8nLCAn0LjQt9C+0LHRgNCw0LbQtdC90LjQuSddKVxuICAgICAgICB9LFxuICAgICAgICBwcmVsb2FkZXJfcHJvZ3Jlc3MoKSB7XG4gICAgICAgICAgICBsZXQgb2YgPSB0aGlzLnVwbG9hZGluZ19pbWFnZXNfY291bnQgLy8g0LLRgdC10LPQvlxuICAgICAgICAgICAgbGV0IHRvID0gdGhpcy5pbWFnZXNfdXBsb2FkX3Byb2dyZXNzIC8vINGB0YfRkdGC0YfQuNC6XG4gICAgICAgICAgICBpZiAoIW9mKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRvICogMTAwIC8gb2ZcbiAgICAgICAgfSxcbiAgICAgICAgZm9sZGVyX2lkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRfZm9sZGVyID8gdGhpcy5zZWxlY3RlZF9mb2xkZXIuaWQgOiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbG9hZEltYWdlcygpIHtcbiAgICAgICAgICAgIEFQUC5hcGkoe1xuICAgICAgICAgICAgICAgIHVybDogJy9hcGkvaW1hZ2VzOm1lZGlhJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbGRlcl9pZDogdGhpcy5mb2xkZXJfaWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzID0gcmVzcG9uc2UuaW1hZ2VzXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvbGRlcnMgPSByZXNwb25zZS5mb2xkZXJzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIGxvYWRGb2xkZXJzKCkge1xuICAgICAgICAgICAgQVBQLmFwaSh7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9pbWFnZXM6Zm9sZGVycycsXG4gICAgICAgICAgICAgICAgdGhlbjogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb2xkZXJzID0gcmVzcG9uc2UuZm9sZGVyc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQlNC+0LHQsNCy0LvQtdC90LjQtSDQvdC+0LLRi9GFINC40LfQvtCx0YDQsNC20LXQvdC40LlcbiAgICAgICAgaXNEcm9wRmlsZXMoZXZlbnQpIHtcbiAgICAgICAgICAgIGxldCBmaWxlcyA9IEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmZpbGVzKVxuICAgICAgICAgICAgdGhpcy51cGxvYWRpbmdfaW1hZ2VzX2NvdW50ID0gZmlsZXMubGVuZ3RoXG4gICAgICAgICAgICBmaWxlcy5tYXAoZmlsZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFbJ2pwZycsICdqcGVnJywgJ3BuZyddLmluY2x1ZGVzKGZpbGUudHlwZS5zcGxpdCgnLycpWzFdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgZmlsZV9yZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICAgICAgICAgICAgZmlsZV9yZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgICAgICAgICAgICBmaWxlX3JlYWRlci5vbmxvYWQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmFzZTY0X2RhdGEgPSBlLnRhcmdldC5yZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNpemVJbWFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U2NF9kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZV9tYXhfd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlX21heF9oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVzaXplZF9iYXNlNjRfZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5pbWFnZSA9IHJlc2l6ZWRfYmFzZTY0X2RhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEltYWdlKGZpbGUubmFtZSwgcmVzaXplZF9iYXNlNjRfZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICAvLyDQpNGD0L3QutGG0LjRjyDRgNC10YHQsNC50LfQsCDQuNC30L7QsdGA0LDQttC10L3QuNC5XG4gICAgICAgIHJlc2l6ZUltYWdlKGJhc2U2NF9kYXRhLCBmaWxlX3R5cGUsIG1heF93aWR0aCwgbWF4X2hlaWdodCwgb25SZXNpemUpIHtcbiAgICAgICAgICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gYmFzZTY0X2RhdGE7XG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIilcbiAgICAgICAgICAgICAgICBsZXQgd29ya2Zsb3cgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG4gICAgICAgICAgICAgICAgd29ya2Zsb3cuZHJhd0ltYWdlKGltYWdlLCAwLCAwKVxuICAgICAgICAgICAgICAgIGxldCB3aWR0aCA9IGltYWdlLndpZHRoXG4gICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IGltYWdlLmhlaWdodFxuICAgICAgICAgICAgICAgIGlmICh3aWR0aCA+IGhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2lkdGggPiBtYXhfd2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCAqPSBtYXhfd2lkdGggLyB3aWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBtYXhfd2lkdGhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoZWlnaHQgPiBtYXhfaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCAqPSBtYXhfaGVpZ2h0IC8gaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSBtYXhfaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGhcbiAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgICAgICAgICAgICAgd29ya2Zsb3cgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG4gICAgICAgICAgICAgICAgd29ya2Zsb3cuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KVxuICAgICAgICAgICAgICAgIGxldCBiYXNlNjRfZGF0YSA9IGNhbnZhcy50b0RhdGFVUkwoZmlsZV90eXBlKVxuICAgICAgICAgICAgICAgIG9uUmVzaXplKGJhc2U2NF9kYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vINCU0L7QsdCw0LLQuNGC0Ywg0LjQt9C+0LHRgNCw0LbQtdC90LjQtVxuICAgICAgICBhZGRJbWFnZShmaWxlX25hbWUsIGJhc2U2NCkge1xuICAgICAgICAgICAgdGhpcy51cGxvYWRpbmdfaW1hZ2VzLnB1c2goe2ZpbGVfbmFtZSwgYmFzZTY0fSlcbiAgICAgICAgICAgIHRoaXMudXBsb2FkSW1hZ2VzKClcbiAgICAgICAgfSxcbiAgICAgICAgdXBsb2FkSW1hZ2VzKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2VzX3VwbG9hZF9wcm9jZXNzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmltYWdlc191cGxvYWRfcHJvY2VzcyA9IHRydWVcbiAgICAgICAgICAgIHRoaXMudXBsb2FkSW1hZ2UoKVxuICAgICAgICB9LFxuICAgICAgICB1cGxvYWRJbWFnZSgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy51cGxvYWRpbmdfaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzX3VwbG9hZF9wcm9jZXNzID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLmltYWdlc191cGxvYWRfcHJvZ3Jlc3MgPSAwXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzX3VwbG9hZF9wcm9ncmVzcysrXG4gICAgICAgICAgICBsZXQgaW1hZ2UgPSB0aGlzLnVwbG9hZGluZ19pbWFnZXMuc2hpZnQoKVxuICAgICAgICAgICAgaW1hZ2UubW9kZWxfbmFtZSA9ICdtZWRpYV9mb2xkZXInXG5cbiAgICAgICAgICAgIEFQUC5hcGkoe1xuICAgICAgICAgICAgICAgIHVybDogJy9hcGkvaW1hZ2VzOnB1dCcsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgZm9sZGVyX2lkOiB0aGlzLmZvbGRlcl9pZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbm9fcHJlbG9hZGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRoZW46IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2gocmVzcG9uc2UuaW1hZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZEltYWdlKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUltYWdlKGltYWdlKSB7XG4gICAgICAgICAgICBBUFAuYXBpKHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL2ltYWdlczpyZW1vdmUnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VfaWQ6IGltYWdlLmlkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmltYWdlcy5pbmRleE9mKGltYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgYWRkRm9sZGVyKCkge1xuICAgICAgICAgICAgQVBQLmFwaSh7XG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9pbWFnZXM6YWRkLWZvbGRlcicsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBmb2xkZXI6IHRoaXMubmV3X2ZvbGRlcl9uYW1lXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVuOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld19mb2xkZXJfbmFtZSA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9sZGVycyA9IHJlc3BvbnNlLmZvbGRlcnNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdEZvbGRlcihmb2xkZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfZm9sZGVyID0gZm9sZGVyXG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUZvbGRlcihmb2xkZXIpIHtcbiAgICAgICAgICAgIEFQUC5hcGkoe1xuICAgICAgICAgICAgICAgIHVybDogJy9hcGkvaW1hZ2VzOnJlbW92ZS1mb2xkZXInLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9sZGVyX2lkOiBmb2xkZXIuaWRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW46IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9sZGVycyA9IHJlc3BvbnNlLmZvbGRlcnNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGlzU2VsZWN0ZWQoaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkX2ltYWdlcy5pbmNsdWRlcyhpbWFnZS5pZClcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0SW1hZ2UoaW1hZ2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQoaW1hZ2UpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRfaW1hZ2VzLnB1c2goaW1hZ2UuaWQpXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzZWxlY3QnLCBpbWFnZSlcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5tZWRpYS1mb2xkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICZfX2xlZnQtc2lkZSB7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIH1cblxuICAgICZfX3RhZyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgICAgICBtYXJnaW46IDNweCAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmRmZjg5O1xuICAgICAgICBjb2xvcjogIzYzNzc3ZDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHRyYW5zaXRpb246IDMwMG1zO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJl9fbmFtZSB7XG4gICAgICAgICAgICBmbGV4OiAxIDAgMDtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX2Nsb3NlIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAyMDBtcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6aG92ZXIgaSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmY2ZmNDY7XG4gICAgICAgICAgICBjb2xvcjogIzVjNWM1YztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2FkZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cblxuICAgICZfX2FkZC1pbWFnZSB7XG4gICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xuICAgIH1cblxuICAgICZfX3ByZXZpZXdzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgfVxuXG5cbiAgICAmX19yaWdodC1zaWRlIHtcbiAgICAgICAgZmxleDogMSAwIDA7XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA1LjIuN193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANS4yLjdfd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmR3YXJmLW1vZGFsIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42MTE3NjQ3MDU5KTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBhbmltYXRpb246IG1vZGFsX2Zsb3BwZWQgMjAwbXM7XFxufVxcbi5kd2FyZi1tb2RhbF9fY2xvc2Uge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5kd2FyZi1tb2RhbF9fY2xvc2VfX2J0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZDogI2RjZWRmZjtcXG4gIGNvbG9yOiAjNjI3MDdmO1xcbiAgd2lkdGg6IDM5cHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5kd2FyZi1tb2RhbF9fY2xvc2VfX2J0biBpIHtcXG4gIGZvbnQtc2l6ZTogMjFweDtcXG59XFxuLmR3YXJmLW1vZGFsX19wcmVsb2FkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbn1cXG4uZHdhcmYtbW9kYWwgLm1vZGFsLWRpYWxvZyB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZSAwcztcXG59XFxuXFxuLyogQW5pbWF0aW9ucyAqL1xcbkBrZXlmcmFtZXMgbW9kYWxfZmxvcHBlZCB7XFxuZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG59XFxudG8ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Z1ZS90cmFzaC9Ed2FyZi9mb3Jtcy9Nb2RhbC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7QUFBSjtBQUVJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBQVI7QUFDUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNaO0FBQVk7RUFDSSxlQUFBO0FBRWhCO0FBR0k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBRFI7QUFJSTtFQUNJLDZCQUFBO0FBRlI7O0FBTUEsZUFBQTtBQUNBO0FBQ0k7SUFDSSxxQkFBQTtBQUhOO0FBS0U7SUFDSSxtQkFBQTtBQUhOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLmR3YXJmLW1vZGFsIHtcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDljO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBhbmltYXRpb246IG1vZGFsX2Zsb3BwZWQgMjAwbXM7XFxuXFxuICAgICZfX2Nsb3NlIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgJl9fYnRuIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkY2VkZmY7XFxuICAgICAgICAgICAgY29sb3I6ICM2MjcwN2Y7XFxuICAgICAgICAgICAgd2lkdGg6IDM5cHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgIGkge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX3ByZWxvYWRlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgIH1cXG5cXG4gICAgLm1vZGFsLWRpYWxvZyB7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZSAwcztcXG4gICAgfVxcbn1cXG5cXG4vKiBBbmltYXRpb25zICovXFxuQGtleWZyYW1lcyBtb2RhbF9mbG9wcGVkIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDUuMi43X3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA1LjIuN193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWVkaWEtZm9sZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG4ubWVkaWEtZm9sZGVyX19sZWZ0LXNpZGUge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcbi5tZWRpYS1mb2xkZXJfX3RhZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgbWFyZ2luOiAzcHggMDtcXG4gIGJhY2tncm91bmQ6ICNmZGZmODk7XFxuICBjb2xvcjogIzYzNzc3ZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tZWRpYS1mb2xkZXJfX3RhZ19fbmFtZSB7XFxuICBmbGV4OiAxIDAgMDtcXG59XFxuLm1lZGlhLWZvbGRlcl9fdGFnX19jbG9zZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcbi5tZWRpYS1mb2xkZXJfX3RhZ19fY2xvc2UgaSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiAyMDBtcztcXG59XFxuLm1lZGlhLWZvbGRlcl9fdGFnX19jbG9zZTpob3ZlciBpIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcbi5tZWRpYS1mb2xkZXJfX3RhZy5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI2ZjZmY0NjtcXG4gIGNvbG9yOiAjNWM1YzVjO1xcbn1cXG4ubWVkaWEtZm9sZGVyX19hZGQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4ubWVkaWEtZm9sZGVyX19hZGQtaW1hZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5tZWRpYS1mb2xkZXJfX3ByZXZpZXdzIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwYWRkaW5nOiAwIDVweDtcXG59XFxuLm1lZGlhLWZvbGRlcl9fcmlnaHQtc2lkZSB7XFxuICBmbGV4OiAxIDAgMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Z1ZS90cmFzaC9Ed2FyZi9pbnB1dHMvRHdhcmZNZWRpYUZvbGRlci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQVI7QUFHSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFEUjtBQUdRO0VBQ0ksV0FBQTtBQURaO0FBSVE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFGWjtBQUdZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBRGhCO0FBR1k7RUFDSSxVQUFBO0FBRGhCO0FBS1E7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFIWjtBQU9JO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBTFI7QUFRSTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtBQU5SO0FBU0k7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFQUjtBQVdJO0VBQ0ksV0FBQTtBQVRSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5tZWRpYS1mb2xkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcbiAgICAmX19sZWZ0LXNpZGUge1xcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICAgIH1cXG5cXG4gICAgJl9fdGFnIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgcGFkZGluZzogNnB4IDEwcHg7XFxuICAgICAgICBtYXJnaW46IDNweCAwO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZkZmY4OTtcXG4gICAgICAgIGNvbG9yOiAjNjM3NzdkO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgICZfX25hbWUge1xcbiAgICAgICAgICAgIGZsZXg6IDEgMCAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJl9fY2xvc2Uge1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICAgICAgICAgIGkge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAmOmhvdmVyIGkge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYuYWN0aXZlIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmNmZjQ2O1xcbiAgICAgICAgICAgIGNvbG9yOiAjNWM1YzVjO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICZfX2FkZCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgJl9fYWRkLWltYWdlIHtcXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcXG4gICAgfVxcblxcbiAgICAmX19wcmV2aWV3cyB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICAgICAgcGFkZGluZzogMCA1cHg7XFxuICAgIH1cXG5cXG5cXG4gICAgJl9fcmlnaHQtc2lkZSB7XFxuICAgICAgICBmbGV4OiAxIDAgMDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJAMi4wLjBfd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA1LjIuN193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Z1ZS1sb2FkZXJAMTYuOC4zX0B2dWUrY29tcGlsZXItc2ZjQDMuNS4xNl92dWVAMy41LjE2X3R5cGVzY3JpcHRANS44LjNfX3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9wb3N0Y3NzLWxvYWRlckA2LjIuMV9wb3N0Y3NzQDguNS40X3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Nhc3MtbG9hZGVyQDE2LjAuNV9zYXNzQDEuODkuMl93ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzNdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL01vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZiNmRmY2Y3Jmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDIuMC4wX3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANS4yLjdfd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcG9zdGNzcy1sb2FkZXJANi4yLjFfcG9zdGNzc0A4LjUuNF93ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMTIudXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zYXNzLWxvYWRlckAxNi4wLjVfc2Fzc0AxLjg5LjJfd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTEyLnVzZVszXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vdnVlLWxvYWRlckAxNi44LjNfQHZ1ZStjb21waWxlci1zZmNAMy41LjE2X3Z1ZUAzLjUuMTZfdHlwZXNjcmlwdEA1LjguM19fd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Ed2FyZk1lZGlhRm9sZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUxZGZlMTAwJmxhbmc9c2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YjZkZmNmN1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Nb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL01vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTZiNmRmY2Y3Jmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9hcHAvcGx1Z2lucy96ZW4vdGhyZWVzL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL3Z1ZS90cmFzaC9Ed2FyZi9mb3Jtcy9Nb2RhbC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNmI2ZGZjZjdcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc2YjZkZmNmNycsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzZiNmRmY2Y3JywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Nb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmI2ZGZjZjdcIiwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyZS1yZW5kZXInKVxuICAgIGFwaS5yZXJlbmRlcignNmI2ZGZjZjcnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vYmFiZWwtbG9hZGVyQDguNC4xX0BiYWJlbCtjb3JlQDcuMjcuNF93ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vdnVlLWxvYWRlckAxNi44LjNfQHZ1ZStjb21waWxlci1zZmNAMy41LjE2X3Z1ZUAzLjUuMTZfdHlwZXNjcmlwdEA1LjguM19fd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9Nb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2JhYmVsLWxvYWRlckA4LjQuMV9AYmFiZWwrY29yZUA3LjI3LjRfd2VicGFja0A1Ljk5Ljkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Z1ZS1sb2FkZXJAMTYuOC4zX0B2dWUrY29tcGlsZXItc2ZjQDMuNS4xNl92dWVAMy41LjE2X3R5cGVzY3JpcHRANS44LjNfX3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9Ed2FyZk1lZGlhRm9sZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MWRmZTEwMFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0R3YXJmTWVkaWFGb2xkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0R3YXJmTWVkaWFGb2xkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9Ed2FyZk1lZGlhRm9sZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUxZGZlMTAwJmxhbmc9c2Nzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi9hcHAvcGx1Z2lucy96ZW4vdGhyZWVzL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwic3JjL3Z1ZS90cmFzaC9Ed2FyZi9pbnB1dHMvRHdhcmZNZWRpYUZvbGRlci52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiNTFkZmUxMDBcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCc1MWRmZTEwMCcsIF9fZXhwb3J0c19fKSkge1xuICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKVxuICAgIGFwaS5yZWxvYWQoJzUxZGZlMTAwJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ed2FyZk1lZGlhRm9sZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MWRmZTEwMFwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlLXJlbmRlcicpXG4gICAgYXBpLnJlcmVuZGVyKCc1MWRmZTEwMCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9iYWJlbC1sb2FkZXJAOC40LjFfQGJhYmVsK2NvcmVANy4yNy40X3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0R3YXJmTWVkaWFGb2xkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9iYWJlbC1sb2FkZXJAOC40LjFfQGJhYmVsK2NvcmVANy4yNy40X3dlYnBhY2tANS45OS45L25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS92dWUtbG9hZGVyQDE2LjguM19AdnVlK2NvbXBpbGVyLXNmY0AzLjUuMTZfdnVlQDMuNS4xNl90eXBlc2NyaXB0QDUuOC4zX193ZWJwYWNrQDUuOTkuOS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0R3YXJmTWVkaWFGb2xkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiXSwibmFtZXMiOlsibmFtZSIsInByb3BzIiwic2hvdyIsInR5cGUiLCJCb29sZWFuIiwicmVxdWlyZWQiLCJ0aXRsZSIsIlN0cmluZyIsImxvYWRlZCIsIm1heFdpZHRoIiwiTnVtYmVyIiwiYmxvY2tDbG9zZSIsInN0eWxlIiwiZGF0YSIsInJlYWxseVNob3ciLCJjb21wdXRlZCIsImlubmVyX3N0eWxlIiwicHVzaCIsImNvbmNhdCIsImpvaW4iLCJ3YXRjaCIsInZhbHVlIiwiX3RoaXMiLCJzZXRUaW1lb3V0IiwiJCIsImNzcyIsIm1ldGhvZHMiLCJjbG9zZU1vZGFsIiwiJGVtaXQiLCJNb2RhbCIsIklucHV0VGV4dCIsIkJ1dHRvbiIsImNvbXBvbmVudHMiLCJlbWl0cyIsInNob3dfbW9kYWwiLCJpbWFnZXMiLCJlZGl0YWJsZV9pbWFnZSIsImltYWdlc191cGxvYWRfcHJvY2VzcyIsImltYWdlc191cGxvYWRfcHJvZ3Jlc3MiLCJ1cGxvYWRpbmdfaW1hZ2VzX2NvdW50IiwidXBsb2FkaW5nX2ltYWdlcyIsImltYWdlX21heF93aWR0aCIsImltYWdlX21heF9oZWlnaHQiLCJmb2xkZXJzIiwic2VsZWN0ZWRfZm9sZGVyIiwibmV3X2ZvbGRlcl9uYW1lIiwic2VsZWN0ZWRfaW1hZ2VzIiwic3RhdGUiLCJsb2FkSW1hZ2VzIiwiaW1hZ2VfY291bnQiLCJjb3VudCIsImxlbmd0aCIsIkFQUCIsImluYyIsInByZWxvYWRlcl9wcm9ncmVzcyIsIm9mIiwidG8iLCJmb2xkZXJfaWQiLCJpZCIsImFwaSIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJsb2FkRm9sZGVycyIsIl90aGlzMiIsImlzRHJvcEZpbGVzIiwiZXZlbnQiLCJfdGhpczMiLCJmaWxlcyIsIkFycmF5IiwiZnJvbSIsInRhcmdldCIsIm1hcCIsImZpbGUiLCJpbmNsdWRlcyIsInNwbGl0IiwiZmlsZV9yZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9ubG9hZCIsImUiLCJiYXNlNjRfZGF0YSIsInJlc3VsdCIsInJlc2l6ZUltYWdlIiwicmVzaXplZF9iYXNlNjRfZGF0YSIsImFkZEltYWdlIiwiZmlsZV90eXBlIiwibWF4X3dpZHRoIiwibWF4X2hlaWdodCIsIm9uUmVzaXplIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIndvcmtmbG93IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwidG9EYXRhVVJMIiwiZmlsZV9uYW1lIiwiYmFzZTY0IiwidXBsb2FkSW1hZ2VzIiwidXBsb2FkSW1hZ2UiLCJfdGhpczQiLCJzaGlmdCIsIm1vZGVsX25hbWUiLCJub19wcmVsb2FkZXIiLCJyZW1vdmVJbWFnZSIsIl90aGlzNSIsImltYWdlX2lkIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiYWRkRm9sZGVyIiwiX3RoaXM2IiwiZm9sZGVyIiwic2VsZWN0Rm9sZGVyIiwicmVtb3ZlRm9sZGVyIiwiX3RoaXM3IiwiaXNTZWxlY3RlZCIsInNlbGVjdEltYWdlIiwiJGRhdGEiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2hvaXN0ZWRfMSIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfbm9ybWFsaXplU3R5bGUiLCIkb3B0aW9ucyIsIl9ob2lzdGVkXzIiLCIkcHJvcHMiLCJfRnJhZ21lbnQiLCJrZXkiLCJfaG9pc3RlZF8zIiwiX2hvaXN0ZWRfNCIsIl90b0Rpc3BsYXlTdHJpbmciLCJfcmVuZGVyU2xvdCIsIl9jdHgiLCIkc2xvdHMiLCJvbkNsaWNrIiwiX2NhY2hlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfaG9pc3RlZF81IiwiZm9vdGVyIiwiX2hvaXN0ZWRfNiIsIl9ob2lzdGVkXzciLCJfY3JlYXRlQmxvY2siLCJfY29tcG9uZW50X01vZGFsIiwib25DbG9zZSIsIiRldmVudCIsIl9ub3JtYWxpemVDbGFzcyIsImFjdGl2ZSIsIl9yZW5kZXJMaXN0IiwiX3dpdGhNb2RpZmllcnMiLCJfY3JlYXRlVk5vZGUiLCJfY29tcG9uZW50X0J1dHRvbiIsImxhYmVsIiwiX2NvbXBvbmVudF9JbnB1dFRleHQiLCJvbktleXVwIiwiX3dpdGhLZXlzIiwicGxhY2Vob2xkZXIiLCJfaG9pc3RlZF84IiwiX2hvaXN0ZWRfOSIsImFjY2VwdCIsIm11bHRpcGxlIiwib25JbnB1dCIsIl9ob2lzdGVkXzEwIiwiX2hvaXN0ZWRfMTEiLCJkaXNrX25hbWUiLCJfaG9pc3RlZF8xMyIsIl9ob2lzdGVkXzE0IiwiX2hvaXN0ZWRfMTUiLCJocmVmIiwiX2hvaXN0ZWRfMTYiLCJfaG9pc3RlZF8xNyIsIl9ob2lzdGVkXzE4IiwiX2hvaXN0ZWRfMTkiLCJfaG9pc3RlZF8yMCIsImRlc2NyaXB0aW9uIiwiX2hvaXN0ZWRfMjEiLCJfaG9pc3RlZF8yMiIsIl9ob2lzdGVkXzIzIiwiX2hvaXN0ZWRfMjQiXSwic291cmNlUm9vdCI6IiJ9