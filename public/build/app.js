/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
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
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./assets/js/app.js","vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/api/account.js":
/*!**********************************!*\
  !*** ./assets/js/api/account.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  changePassword: function changePassword(password, repeatPassword) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/account/change-password', qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify({
      password: password,
      repeatPassword: repeatPassword
    }));
  },
  modifyAccount: function modifyAccount(email, firstname, lastname) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/account/modify-account', qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify({
      username: email,
      firstname: firstname,
      lastname: lastname
    }));
  }
});

/***/ }),

/***/ "./assets/js/api/comments.js":
/*!***********************************!*\
  !*** ./assets/js/api/comments.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  addComment: function addComment(text, eventId) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/comments/add', qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify({
      text: text,
      eventId: eventId
    }));
  },
  addCommentScore: function addCommentScore(idComment) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/comments/score', qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify({
      idComment: idComment,
      sign: '+'
    }));
  },
  removeCommentScore: function removeCommentScore(idComment) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/comments/score', qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify({
      idComment: idComment,
      sign: '-'
    }));
  }
});

/***/ }),

/***/ "./assets/js/api/events.js":
/*!*********************************!*\
  !*** ./assets/js/api/events.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  addEvent: function addEvent(type, description, images, position, level) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/events/add', qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify({
      type: type,
      description: description,
      images: images,
      position: position,
      level: level
    }));
  },
  getMarkers: function getMarkers() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/markers/getAll');
  },
  getEvents: function getEvents(longitude, latitude) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/events/getByCoordinates', qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify({
      longitude: longitude,
      latitude: latitude
    }));
  },
  toggleEventResult: function toggleEventResult(eventId) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/events/toggleResult', qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify({
      eventId: eventId
    }));
  }
});

/***/ }),

/***/ "./assets/js/api/security.js":
/*!***********************************!*\
  !*** ./assets/js/api/security.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  login: function login(email, password) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/security/login', {
      username: email,
      password: password
    });
  },
  register: function register(email, password, firstname, lastname) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/security/register', qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify({
      username: email,
      password: password,
      firstname: firstname,
      lastname: lastname
    }));
  }
});

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you require will output into a single css file (app.css in this case)
__webpack_require__(/*! ../scss/main.scss */ "./assets/scss/main.scss");

__webpack_require__(/*! ./main.js */ "./assets/js/main.js");

/***/ }),

/***/ "./assets/js/components/App.vue":
/*!**************************************!*\
  !*** ./assets/js/components/App.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_0dd47e10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0dd47e10& */ "./assets/js/components/App.vue?vue&type=template&id=0dd47e10&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./assets/js/components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_0dd47e10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_0dd47e10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/App.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./assets/js/components/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/App.vue?vue&type=template&id=0dd47e10&":
/*!*********************************************************************!*\
  !*** ./assets/js/components/App.vue?vue&type=template&id=0dd47e10& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0dd47e10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=0dd47e10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/App.vue?vue&type=template&id=0dd47e10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0dd47e10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0dd47e10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/ErrorMessage.vue":
/*!***********************************************!*\
  !*** ./assets/js/components/ErrorMessage.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ErrorMessage_vue_vue_type_template_id_4a122000___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorMessage.vue?vue&type=template&id=4a122000& */ "./assets/js/components/ErrorMessage.vue?vue&type=template&id=4a122000&");
/* harmony import */ var _ErrorMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorMessage.vue?vue&type=script&lang=js& */ "./assets/js/components/ErrorMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ErrorMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ErrorMessage_vue_vue_type_template_id_4a122000___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ErrorMessage_vue_vue_type_template_id_4a122000___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/ErrorMessage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/ErrorMessage.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./assets/js/components/ErrorMessage.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ErrorMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/ErrorMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/ErrorMessage.vue?vue&type=template&id=4a122000&":
/*!******************************************************************************!*\
  !*** ./assets/js/components/ErrorMessage.vue?vue&type=template&id=4a122000& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorMessage_vue_vue_type_template_id_4a122000___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ErrorMessage.vue?vue&type=template&id=4a122000& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/ErrorMessage.vue?vue&type=template&id=4a122000&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorMessage_vue_vue_type_template_id_4a122000___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorMessage_vue_vue_type_template_id_4a122000___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/about/About.vue":
/*!**********************************************!*\
  !*** ./assets/js/components/about/About.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About_vue_vue_type_template_id_9716630c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=9716630c&scoped=true& */ "./assets/js/components/about/About.vue?vue&type=template&id=9716630c&scoped=true&");
/* harmony import */ var _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=js& */ "./assets/js/components/about/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _About_vue_vue_type_template_id_9716630c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _About_vue_vue_type_template_id_9716630c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9716630c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/about/About.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/about/About.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./assets/js/components/about/About.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/about/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/about/About.vue?vue&type=template&id=9716630c&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./assets/js/components/about/About.vue?vue&type=template&id=9716630c&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_9716630c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=template&id=9716630c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/about/About.vue?vue&type=template&id=9716630c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_9716630c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_9716630c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/account/Account.vue":
/*!**************************************************!*\
  !*** ./assets/js/components/account/Account.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Account_vue_vue_type_template_id_a046ee8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Account.vue?vue&type=template&id=a046ee8c&scoped=true& */ "./assets/js/components/account/Account.vue?vue&type=template&id=a046ee8c&scoped=true&");
/* harmony import */ var _Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Account.vue?vue&type=script&lang=js& */ "./assets/js/components/account/Account.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Account_vue_vue_type_style_index_0_id_a046ee8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Account.vue?vue&type=style&index=0&id=a046ee8c&scoped=true&lang=css& */ "./assets/js/components/account/Account.vue?vue&type=style&index=0&id=a046ee8c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Account_vue_vue_type_template_id_a046ee8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Account_vue_vue_type_template_id_a046ee8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a046ee8c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/account/Account.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/account/Account.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./assets/js/components/account/Account.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Account.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/account/Account.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/account/Account.vue?vue&type=style&index=0&id=a046ee8c&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./assets/js/components/account/Account.vue?vue&type=style&index=0&id=a046ee8c&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_a046ee8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader/dist/cjs.js??ref--1-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/vue-loader/lib??vue-loader-options!./Account.vue?vue&type=style&index=0&id=a046ee8c&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./assets/js/components/account/Account.vue?vue&type=style&index=0&id=a046ee8c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_a046ee8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_a046ee8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_a046ee8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_a046ee8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_a046ee8c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/js/components/account/Account.vue?vue&type=template&id=a046ee8c&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./assets/js/components/account/Account.vue?vue&type=template&id=a046ee8c&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_template_id_a046ee8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Account.vue?vue&type=template&id=a046ee8c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/account/Account.vue?vue&type=template&id=a046ee8c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_template_id_a046ee8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_template_id_a046ee8c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/home/Home.vue":
/*!********************************************!*\
  !*** ./assets/js/components/home/Home.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_78d417fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=78d417fe&scoped=true& */ "./assets/js/components/home/Home.vue?vue&type=template&id=78d417fe&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./assets/js/components/home/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_78d417fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_78d417fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "78d417fe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/home/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/home/Home.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./assets/js/components/home/Home.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/home/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/home/Home.vue?vue&type=template&id=78d417fe&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./assets/js/components/home/Home.vue?vue&type=template&id=78d417fe&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_78d417fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=78d417fe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/home/Home.vue?vue&type=template&id=78d417fe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_78d417fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_78d417fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/login/Login.vue":
/*!**********************************************!*\
  !*** ./assets/js/components/login/Login.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_b686159c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=b686159c& */ "./assets/js/components/login/Login.vue?vue&type=template&id=b686159c&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./assets/js/components/login/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_b686159c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_b686159c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/login/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/login/Login.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./assets/js/components/login/Login.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/login/Login.vue?vue&type=template&id=b686159c&":
/*!*****************************************************************************!*\
  !*** ./assets/js/components/login/Login.vue?vue&type=template&id=b686159c& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_b686159c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=b686159c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/Login.vue?vue&type=template&id=b686159c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_b686159c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_b686159c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/login/Register.vue":
/*!*************************************************!*\
  !*** ./assets/js/components/login/Register.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_7f8abe6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=7f8abe6a&scoped=true& */ "./assets/js/components/login/Register.vue?vue&type=template&id=7f8abe6a&scoped=true&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./assets/js/components/login/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_7f8abe6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_7f8abe6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7f8abe6a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/login/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/login/Register.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./assets/js/components/login/Register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/login/Register.vue?vue&type=template&id=7f8abe6a&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./assets/js/components/login/Register.vue?vue&type=template&id=7f8abe6a&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_7f8abe6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=7f8abe6a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/Register.vue?vue&type=template&id=7f8abe6a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_7f8abe6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_7f8abe6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/map/EventAdd.vue":
/*!***********************************************!*\
  !*** ./assets/js/components/map/EventAdd.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventAdd_vue_vue_type_template_id_1cafe09b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventAdd.vue?vue&type=template&id=1cafe09b&scoped=true& */ "./assets/js/components/map/EventAdd.vue?vue&type=template&id=1cafe09b&scoped=true&");
/* harmony import */ var _EventAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventAdd.vue?vue&type=script&lang=js& */ "./assets/js/components/map/EventAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EventAdd_vue_vue_type_style_index_0_id_1cafe09b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventAdd.vue?vue&type=style&index=0&id=1cafe09b&scoped=true&lang=scss& */ "./assets/js/components/map/EventAdd.vue?vue&type=style&index=0&id=1cafe09b&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EventAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EventAdd_vue_vue_type_template_id_1cafe09b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EventAdd_vue_vue_type_template_id_1cafe09b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1cafe09b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/map/EventAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/map/EventAdd.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./assets/js/components/map/EventAdd.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EventAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EventAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/EventAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EventAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/map/EventAdd.vue?vue&type=style&index=0&id=1cafe09b&scoped=true&lang=scss&":
/*!*********************************************************************************************************!*\
  !*** ./assets/js/components/map/EventAdd.vue?vue&type=style&index=0&id=1cafe09b&scoped=true&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EventAdd_vue_vue_type_style_index_0_id_1cafe09b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader??ref--4-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--4-oneOf-1-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./EventAdd.vue?vue&type=style&index=0&id=1cafe09b&scoped=true&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/EventAdd.vue?vue&type=style&index=0&id=1cafe09b&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EventAdd_vue_vue_type_style_index_0_id_1cafe09b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EventAdd_vue_vue_type_style_index_0_id_1cafe09b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EventAdd_vue_vue_type_style_index_0_id_1cafe09b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EventAdd_vue_vue_type_style_index_0_id_1cafe09b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EventAdd_vue_vue_type_style_index_0_id_1cafe09b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/js/components/map/EventAdd.vue?vue&type=template&id=1cafe09b&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./assets/js/components/map/EventAdd.vue?vue&type=template&id=1cafe09b&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventAdd_vue_vue_type_template_id_1cafe09b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EventAdd.vue?vue&type=template&id=1cafe09b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/EventAdd.vue?vue&type=template&id=1cafe09b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventAdd_vue_vue_type_template_id_1cafe09b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventAdd_vue_vue_type_template_id_1cafe09b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/map/EventInfo.vue":
/*!************************************************!*\
  !*** ./assets/js/components/map/EventInfo.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventInfo_vue_vue_type_template_id_5f9e42b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventInfo.vue?vue&type=template&id=5f9e42b8&scoped=true& */ "./assets/js/components/map/EventInfo.vue?vue&type=template&id=5f9e42b8&scoped=true&");
/* harmony import */ var _EventInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventInfo.vue?vue&type=script&lang=js& */ "./assets/js/components/map/EventInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EventInfo_vue_vue_type_style_index_0_id_5f9e42b8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventInfo.vue?vue&type=style&index=0&id=5f9e42b8&scoped=true&lang=scss& */ "./assets/js/components/map/EventInfo.vue?vue&type=style&index=0&id=5f9e42b8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EventInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EventInfo_vue_vue_type_template_id_5f9e42b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EventInfo_vue_vue_type_template_id_5f9e42b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5f9e42b8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/map/EventInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/map/EventInfo.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./assets/js/components/map/EventInfo.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EventInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EventInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/EventInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EventInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/map/EventInfo.vue?vue&type=style&index=0&id=5f9e42b8&scoped=true&lang=scss&":
/*!**********************************************************************************************************!*\
  !*** ./assets/js/components/map/EventInfo.vue?vue&type=style&index=0&id=5f9e42b8&scoped=true&lang=scss& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EventInfo_vue_vue_type_style_index_0_id_5f9e42b8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader??ref--4-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--4-oneOf-1-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./EventInfo.vue?vue&type=style&index=0&id=5f9e42b8&scoped=true&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/EventInfo.vue?vue&type=style&index=0&id=5f9e42b8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EventInfo_vue_vue_type_style_index_0_id_5f9e42b8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EventInfo_vue_vue_type_style_index_0_id_5f9e42b8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EventInfo_vue_vue_type_style_index_0_id_5f9e42b8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EventInfo_vue_vue_type_style_index_0_id_5f9e42b8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EventInfo_vue_vue_type_style_index_0_id_5f9e42b8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/js/components/map/EventInfo.vue?vue&type=template&id=5f9e42b8&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./assets/js/components/map/EventInfo.vue?vue&type=template&id=5f9e42b8&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventInfo_vue_vue_type_template_id_5f9e42b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EventInfo.vue?vue&type=template&id=5f9e42b8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/EventInfo.vue?vue&type=template&id=5f9e42b8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventInfo_vue_vue_type_template_id_5f9e42b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventInfo_vue_vue_type_template_id_5f9e42b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/map/EventList.vue":
/*!************************************************!*\
  !*** ./assets/js/components/map/EventList.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventList_vue_vue_type_template_id_15cab294_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventList.vue?vue&type=template&id=15cab294&scoped=true& */ "./assets/js/components/map/EventList.vue?vue&type=template&id=15cab294&scoped=true&");
/* harmony import */ var _EventList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventList.vue?vue&type=script&lang=js& */ "./assets/js/components/map/EventList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EventList_vue_vue_type_style_index_0_id_15cab294_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventList.vue?vue&type=style&index=0&id=15cab294&scoped=true&lang=scss& */ "./assets/js/components/map/EventList.vue?vue&type=style&index=0&id=15cab294&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EventList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EventList_vue_vue_type_template_id_15cab294_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EventList_vue_vue_type_template_id_15cab294_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "15cab294",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/map/EventList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/map/EventList.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./assets/js/components/map/EventList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EventList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EventList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/EventList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EventList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/map/EventList.vue?vue&type=style&index=0&id=15cab294&scoped=true&lang=scss&":
/*!**********************************************************************************************************!*\
  !*** ./assets/js/components/map/EventList.vue?vue&type=style&index=0&id=15cab294&scoped=true&lang=scss& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EventList_vue_vue_type_style_index_0_id_15cab294_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader??ref--4-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--4-oneOf-1-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./EventList.vue?vue&type=style&index=0&id=15cab294&scoped=true&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/EventList.vue?vue&type=style&index=0&id=15cab294&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EventList_vue_vue_type_style_index_0_id_15cab294_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EventList_vue_vue_type_style_index_0_id_15cab294_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EventList_vue_vue_type_style_index_0_id_15cab294_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EventList_vue_vue_type_style_index_0_id_15cab294_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EventList_vue_vue_type_style_index_0_id_15cab294_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/js/components/map/EventList.vue?vue&type=template&id=15cab294&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./assets/js/components/map/EventList.vue?vue&type=template&id=15cab294&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventList_vue_vue_type_template_id_15cab294_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EventList.vue?vue&type=template&id=15cab294&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/EventList.vue?vue&type=template&id=15cab294&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventList_vue_vue_type_template_id_15cab294_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventList_vue_vue_type_template_id_15cab294_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/map/EventMap.vue":
/*!***********************************************!*\
  !*** ./assets/js/components/map/EventMap.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventMap_vue_vue_type_template_id_d9f59054___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventMap.vue?vue&type=template&id=d9f59054& */ "./assets/js/components/map/EventMap.vue?vue&type=template&id=d9f59054&");
/* harmony import */ var _EventMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventMap.vue?vue&type=script&lang=js& */ "./assets/js/components/map/EventMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EventMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EventMap_vue_vue_type_template_id_d9f59054___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EventMap_vue_vue_type_template_id_d9f59054___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/map/EventMap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/map/EventMap.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./assets/js/components/map/EventMap.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EventMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EventMap.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/EventMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EventMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/map/EventMap.vue?vue&type=template&id=d9f59054&":
/*!******************************************************************************!*\
  !*** ./assets/js/components/map/EventMap.vue?vue&type=template&id=d9f59054& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventMap_vue_vue_type_template_id_d9f59054___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EventMap.vue?vue&type=template&id=d9f59054& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/EventMap.vue?vue&type=template&id=d9f59054&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventMap_vue_vue_type_template_id_d9f59054___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventMap_vue_vue_type_template_id_d9f59054___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/map/comments/AddComment.vue":
/*!**********************************************************!*\
  !*** ./assets/js/components/map/comments/AddComment.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddComment_vue_vue_type_template_id_66997075_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddComment.vue?vue&type=template&id=66997075&scoped=true& */ "./assets/js/components/map/comments/AddComment.vue?vue&type=template&id=66997075&scoped=true&");
/* harmony import */ var _AddComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddComment.vue?vue&type=script&lang=js& */ "./assets/js/components/map/comments/AddComment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddComment_vue_vue_type_template_id_66997075_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddComment_vue_vue_type_template_id_66997075_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "66997075",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/map/comments/AddComment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/map/comments/AddComment.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./assets/js/components/map/comments/AddComment.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddComment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/comments/AddComment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddComment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/map/comments/AddComment.vue?vue&type=template&id=66997075&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./assets/js/components/map/comments/AddComment.vue?vue&type=template&id=66997075&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddComment_vue_vue_type_template_id_66997075_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddComment.vue?vue&type=template&id=66997075&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/comments/AddComment.vue?vue&type=template&id=66997075&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddComment_vue_vue_type_template_id_66997075_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddComment_vue_vue_type_template_id_66997075_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/components/map/comments/EventComments.vue":
/*!*************************************************************!*\
  !*** ./assets/js/components/map/comments/EventComments.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventComments_vue_vue_type_template_id_8034a0f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventComments.vue?vue&type=template&id=8034a0f2&scoped=true& */ "./assets/js/components/map/comments/EventComments.vue?vue&type=template&id=8034a0f2&scoped=true&");
/* harmony import */ var _EventComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventComments.vue?vue&type=script&lang=js& */ "./assets/js/components/map/comments/EventComments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EventComments_vue_vue_type_style_index_0_id_8034a0f2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventComments.vue?vue&type=style&index=0&id=8034a0f2&scoped=true&lang=scss& */ "./assets/js/components/map/comments/EventComments.vue?vue&type=style&index=0&id=8034a0f2&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EventComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EventComments_vue_vue_type_template_id_8034a0f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EventComments_vue_vue_type_template_id_8034a0f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8034a0f2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/js/components/map/comments/EventComments.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./assets/js/components/map/comments/EventComments.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./assets/js/components/map/comments/EventComments.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EventComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--0-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EventComments.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/comments/EventComments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EventComments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./assets/js/components/map/comments/EventComments.vue?vue&type=style&index=0&id=8034a0f2&scoped=true&lang=scss&":
/*!***********************************************************************************************************************!*\
  !*** ./assets/js/components/map/comments/EventComments.vue?vue&type=style&index=0&id=8034a0f2&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EventComments_vue_vue_type_style_index_0_id_8034a0f2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/resolve-url-loader??ref--4-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--4-oneOf-1-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EventComments.vue?vue&type=style&index=0&id=8034a0f2&scoped=true&lang=scss& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/comments/EventComments.vue?vue&type=style&index=0&id=8034a0f2&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EventComments_vue_vue_type_style_index_0_id_8034a0f2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EventComments_vue_vue_type_style_index_0_id_8034a0f2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EventComments_vue_vue_type_style_index_0_id_8034a0f2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EventComments_vue_vue_type_style_index_0_id_8034a0f2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_ref_4_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_4_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EventComments_vue_vue_type_style_index_0_id_8034a0f2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./assets/js/components/map/comments/EventComments.vue?vue&type=template&id=8034a0f2&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./assets/js/components/map/comments/EventComments.vue?vue&type=template&id=8034a0f2&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventComments_vue_vue_type_template_id_8034a0f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EventComments.vue?vue&type=template&id=8034a0f2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/comments/EventComments.vue?vue&type=template&id=8034a0f2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventComments_vue_vue_type_template_id_8034a0f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EventComments_vue_vue_type_template_id_8034a0f2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./assets/js/events/emitters.js":
/*!**************************************!*\
  !*** ./assets/js/events/emitters.js ***!
  \**************************************/
/*! exports provided: eventsEmmiter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventsEmmiter", function() { return eventsEmmiter; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");



var eventsEmmiter = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/App */ "./assets/js/components/App.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./assets/js/router/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./assets/js/store/index.js");
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-slider-component */ "./node_modules/vue-slider-component/dist/vue-slider-component.umd.min.js");
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_slider_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_slider_component_theme_default_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-slider-component/theme/default.css */ "./node_modules/vue-slider-component/theme/default.css");
/* harmony import */ var vue_slider_component_theme_default_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_slider_component_theme_default_css__WEBPACK_IMPORTED_MODULE_5__);






vue__WEBPACK_IMPORTED_MODULE_0__["default"].component('VueSlider', vue_slider_component__WEBPACK_IMPORTED_MODULE_4___default.a);
new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  components: {
    App: _components_App__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  template: '<App/>',
  router: _router__WEBPACK_IMPORTED_MODULE_2__["default"],
  store: _store__WEBPACK_IMPORTED_MODULE_3__["default"]
}).$mount('#app');

/***/ }),

/***/ "./assets/js/mixins/polutionTypes.js":
/*!*******************************************!*\
  !*** ./assets/js/mixins/polutionTypes.js ***!
  \*******************************************/
/*! exports provided: WATER, DEFORESTATION, GARBAGE, OTHER, getPollutionName, getPollutionImageSrc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WATER", function() { return WATER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFORESTATION", function() { return DEFORESTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GARBAGE", function() { return GARBAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTHER", function() { return OTHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPollutionName", function() { return getPollutionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPollutionImageSrc", function() { return getPollutionImageSrc; });


var WATER = 'WATER_POLLUTION';
var DEFORESTATION = 'DEFORESTATION';
var GARBAGE = 'GARBAGE';
var OTHER = 'OTHER_POLLUTION';
function getPollutionName(type) {
  if (type === WATER) {
    return 'Water pollution';
  }

  if (type === DEFORESTATION) {
    return 'Deforestation';
  }

  if (type === GARBAGE) {
    return 'Garbage';
  }

  if (type === OTHER) {
    return 'Other pollution';
  }
}
function getPollutionImageSrc(type) {
  if (type === WATER) {
    return '/img/watter_pollution.svg';
  }

  if (type === DEFORESTATION) {
    return '/img/deforestation.png';
  }

  if (type === GARBAGE) {
    return '/img/garbage.png';
  }

  if (type === OTHER) {
    return '/img/other_pollution.png';
  }
}

/***/ }),

/***/ "./assets/js/mixins/user.js":
/*!**********************************!*\
  !*** ./assets/js/mixins/user.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    isAuthenticated: function isAuthenticated() {
      return this.$store.getters['security/isAuthenticated'];
    },
    user: function user() {
      return this.$store.getters['security/user'];
    }
  }
});

/***/ }),

/***/ "./assets/js/router/index.js":
/*!***********************************!*\
  !*** ./assets/js/router/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./assets/js/store/index.js");
/* harmony import */ var _components_home_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home/Home */ "./assets/js/components/home/Home.vue");
/* harmony import */ var _components_login_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/login/Login */ "./assets/js/components/login/Login.vue");
/* harmony import */ var _components_login_Register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/login/Register */ "./assets/js/components/login/Register.vue");
/* harmony import */ var _components_account_Account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/account/Account */ "./assets/js/components/account/Account.vue");
/* harmony import */ var _components_about_About__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/about/About */ "./assets/js/components/about/About.vue");








vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  mode: 'history',
  routes: [{
    path: '/home',
    component: _components_home_Home__WEBPACK_IMPORTED_MODULE_3__["default"],
    meta: {
      title: 'Eco walk'
    }
  }, {
    path: '/login',
    component: _components_login_Login__WEBPACK_IMPORTED_MODULE_4__["default"],
    meta: {
      title: 'Eco walk - Login'
    }
  }, {
    path: '/register',
    component: _components_login_Register__WEBPACK_IMPORTED_MODULE_5__["default"],
    meta: {
      title: 'Eco walk - Register'
    }
  }, {
    path: '/account',
    component: _components_account_Account__WEBPACK_IMPORTED_MODULE_6__["default"],
    meta: {
      requiresAuth: true,
      title: 'Eco walk - My account'
    }
  }, {
    path: '/about',
    component: _components_about_About__WEBPACK_IMPORTED_MODULE_7__["default"],
    meta: {
      title: 'Eco walk - About'
    }
  }, {
    path: '*',
    redirect: '/home'
  }]
});
router.beforeEach(function (to, from, next) {
  document.title = to.meta.title;

  if (to.matched.some(function (record) {
    return record.meta.requiresAuth;
  })) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (_store__WEBPACK_IMPORTED_MODULE_2__["default"].getters['security/isAuthenticated']) {
      next();
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    next(); // make sure to always call next()!
  }
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./assets/js/store/account.js":
/*!************************************!*\
  !*** ./assets/js/store/account.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/account */ "./assets/js/api/account.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    isLoading: false,
    error: null
  },
  mutations: {
    startLoading: function startLoading(state) {
      state.isLoading = true;
      state.error = null;
    },
    successLoading: function successLoading(state) {
      state.isLoading = false;
      state.error = null;
    },
    errorLoading: function errorLoading(state, error) {
      state.isLoading = false;
      state.error = error;
    }
  },
  actions: {
    modifyAccount: function () {
      var _modifyAccount = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref, payload) {
        var commit, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                commit('startLoading');
                _context.prev = 2;
                _context.next = 5;
                return _api_account__WEBPACK_IMPORTED_MODULE_3__["default"].modifyAccount(payload.email, payload.firstname, payload.lastname);

              case 5:
                response = _context.sent;
                commit('successLoading');
                return _context.abrupt("return", response.data);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                commit('errorLoading', _context.t0);
                return _context.abrupt("return", null);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10]]);
      }));

      function modifyAccount(_x, _x2) {
        return _modifyAccount.apply(this, arguments);
      }

      return modifyAccount;
    }(),
    changePassword: function () {
      var _changePassword = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref2, payload) {
        var commit, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref2.commit;
                commit('startLoading');
                _context2.prev = 2;
                _context2.next = 5;
                return _api_account__WEBPACK_IMPORTED_MODULE_3__["default"].changePassword(payload.password, payload.repeatPassword);

              case 5:
                response = _context2.sent;
                commit('successLoading');
                return _context2.abrupt("return", response.data);

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](2);
                commit('errorLoading', _context2.t0);
                return _context2.abrupt("return", null);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 10]]);
      }));

      function changePassword(_x3, _x4) {
        return _changePassword.apply(this, arguments);
      }

      return changePassword;
    }()
  },
  getters: {
    isLoading: function isLoading(state) {
      return state.isLoading;
    },
    hasError: function hasError(state) {
      return state.error !== null;
    },
    error: function error(state) {
      return state.error;
    }
  }
});

/***/ }),

/***/ "./assets/js/store/comments.js":
/*!*************************************!*\
  !*** ./assets/js/store/comments.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_comments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/comments */ "./assets/js/api/comments.js");
/* harmony import */ var _events_emitters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../events/emitters */ "./assets/js/events/emitters.js");






/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {},
  mutations: {
    addComment: function addComment(state, payload) {
      if (this.state.events.openedEvent['id']) {
        this.state.events.openedEvent.comments.push(payload);
        _events_emitters__WEBPACK_IMPORTED_MODULE_5__["eventsEmmiter"].$emit('addComment');
      }
    },
    addScore: function addScore(state, payload) {
      if (this.state.events.openedEvent['id']) {
        this.state.events.openedEvent.comments.forEach(function (comment) {
          if (comment.id === payload) {
            comment.score++;
          }
        });
      }
    },
    removeScore: function removeScore(state, payload) {
      if (this.state.events.openedEvent['id']) {
        this.state.events.openedEvent.comments.forEach(function (comment) {
          if (comment.id === payload) {
            comment.score--;
          }
        });
      }
    }
  },
  actions: {
    addComment: function () {
      var _addComment = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref, payload) {
        var commit, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.next = 3;
                return _api_comments__WEBPACK_IMPORTED_MODULE_4__["default"].addComment(payload.text, payload.eventId);

              case 3:
                response = _context.sent;

                if (response.data) {
                  commit('addComment', response.data);
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function addComment(_x, _x2) {
        return _addComment.apply(this, arguments);
      }

      return addComment;
    }(),
    addCommentScore: function () {
      var _addCommentScore = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref2, payload) {
        var commit, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref2.commit;
                _context2.next = 3;
                return _api_comments__WEBPACK_IMPORTED_MODULE_4__["default"].addCommentScore(payload);

              case 3:
                response = _context2.sent;
                commit('addScore', payload);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function addCommentScore(_x3, _x4) {
        return _addCommentScore.apply(this, arguments);
      }

      return addCommentScore;
    }(),
    removeCommentScore: function () {
      var _removeCommentScore = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(_ref3, payload) {
        var commit, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref3.commit;
                _context3.next = 3;
                return _api_comments__WEBPACK_IMPORTED_MODULE_4__["default"].removeCommentScore(payload);

              case 3:
                response = _context3.sent;
                commit('removeScore', payload);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function removeCommentScore(_x5, _x6) {
        return _removeCommentScore.apply(this, arguments);
      }

      return removeCommentScore;
    }()
  },
  getters: {}
});

/***/ }),

/***/ "./assets/js/store/events.js":
/*!***********************************!*\
  !*** ./assets/js/store/events.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/events */ "./assets/js/api/events.js");
/* harmony import */ var _events_emitters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../events/emitters */ "./assets/js/events/emitters.js");







/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    markers: [],
    selectedEvents: [],
    openedEvent: false
  },
  mutations: {
    setMarkers: function setMarkers(state, payload) {
      state.markers = payload;
      _events_emitters__WEBPACK_IMPORTED_MODULE_6__["eventsEmmiter"].$emit('setMarkers');
    },
    setSelectedEvents: function setSelectedEvents(state, payload) {
      state.selectedEvents = payload;
      _events_emitters__WEBPACK_IMPORTED_MODULE_6__["eventsEmmiter"].$emit('setSelectedEvents');
    },
    setOpenedEvent: function setOpenedEvent(state, payload) {
      state.openedEvent = payload;
      _events_emitters__WEBPACK_IMPORTED_MODULE_6__["eventsEmmiter"].$emit('setOpenedEvent', payload);
    }
  },
  actions: {
    addEvent: function () {
      var _addEvent = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(_ref, payload) {
        var commit, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.prev = 1;
                _context.next = 4;
                return _api_events__WEBPACK_IMPORTED_MODULE_5__["default"].addEvent(payload.type, payload.description, payload.images, payload.position, payload.level);

              case 4:
                response = _context.sent;
                return _context.abrupt("return", response.data);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", null);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8]]);
      }));

      function addEvent(_x, _x2) {
        return _addEvent.apply(this, arguments);
      }

      return addEvent;
    }(),
    fetchMarkers: function () {
      var _fetchMarkers = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(_ref2, payload) {
        var commit, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref2.commit;
                _context2.prev = 1;
                _context2.next = 4;
                return _api_events__WEBPACK_IMPORTED_MODULE_5__["default"].getMarkers();

              case 4:
                response = _context2.sent;
                commit('setMarkers', response.data);
                return _context2.abrupt("return", response.data);

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);
                return _context2.abrupt("return", null);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 9]]);
      }));

      function fetchMarkers(_x3, _x4) {
        return _fetchMarkers.apply(this, arguments);
      }

      return fetchMarkers;
    }(),
    selectMarker: function () {
      var _selectMarker = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(_ref3, payload) {
        var commit, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref3.commit;
                _context3.next = 3;
                return _api_events__WEBPACK_IMPORTED_MODULE_5__["default"].getEvents(payload.longitude, payload.latitude);

              case 3:
                response = _context3.sent;
                commit('setSelectedEvents', response.data);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function selectMarker(_x5, _x6) {
        return _selectMarker.apply(this, arguments);
      }

      return selectMarker;
    }(),
    clearSelectedEvents: function () {
      var _clearSelectedEvents = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(_ref4) {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                commit = _ref4.commit;
                commit('setSelectedEvents', []);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function clearSelectedEvents(_x7) {
        return _clearSelectedEvents.apply(this, arguments);
      }

      return clearSelectedEvents;
    }(),
    setOpenedEvent: function () {
      var _setOpenedEvent = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5(_ref5, payload) {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                commit = _ref5.commit;
                commit('setOpenedEvent', payload);

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function setOpenedEvent(_x8, _x9) {
        return _setOpenedEvent.apply(this, arguments);
      }

      return setOpenedEvent;
    }(),
    toggleEventUserResult: function () {
      var _toggleEventUserResult = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee6(_ref6, payload) {
        var commit, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                commit = _ref6.commit;
                _context6.next = 3;
                return _api_events__WEBPACK_IMPORTED_MODULE_5__["default"].toggleEventResult(payload);

              case 3:
                response = _context6.sent;
                commit('setOpenedEvent', response.data);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function toggleEventUserResult(_x10, _x11) {
        return _toggleEventUserResult.apply(this, arguments);
      }

      return toggleEventUserResult;
    }(),
    cleanMarkers: function () {
      var _cleanMarkers = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee7(_ref7, payload) {
        var commit;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                commit = _ref7.commit;
                commit('setMarkers', []);

              case 2:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function cleanMarkers(_x12, _x13) {
        return _cleanMarkers.apply(this, arguments);
      }

      return cleanMarkers;
    }()
  },
  getters: {
    markers: function markers(state) {
      return state.markers;
    },
    selectedEvents: function selectedEvents(state) {
      return state.selectedEvents;
    },
    openedEvent: function openedEvent(state) {
      return state.openedEvent;
    }
  }
});

/***/ }),

/***/ "./assets/js/store/index.js":
/*!**********************************!*\
  !*** ./assets/js/store/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _security__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security */ "./assets/js/store/security.js");
/* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account */ "./assets/js/store/account.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events */ "./assets/js/store/events.js");
/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comments */ "./assets/js/store/comments.js");






vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  modules: {
    security: _security__WEBPACK_IMPORTED_MODULE_2__["default"],
    account: _account__WEBPACK_IMPORTED_MODULE_3__["default"],
    events: _events__WEBPACK_IMPORTED_MODULE_4__["default"],
    comments: _comments__WEBPACK_IMPORTED_MODULE_5__["default"]
  }
}));

/***/ }),

/***/ "./assets/js/store/security.js":
/*!*************************************!*\
  !*** ./assets/js/store/security.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_security__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/security */ "./assets/js/api/security.js");






var _mutations;


var AUTHENTICATING = 'AUTHENTICATING',
    AUTHENTICATING_SUCCESS = 'AUTHENTICATING_SUCCESS',
    AUTHENTICATING_ERROR = 'AUTHENTICATING_ERROR',
    PROVIDING_DATA_ON_REFRESH_SUCCESS = 'PROVIDING_DATA_ON_REFRESH_SUCCESS',
    REGISTRATION = 'REGISTRATION',
    REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS',
    REGISTRATION_ERROR = 'REGISTRATION_ERROR';
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    isLoading: false,
    error: null,
    isAuthenticated: false,
    user: null
  },
  mutations: (_mutations = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_mutations, AUTHENTICATING, function (state) {
    state.isLoading = true;
    state.error = null;
    state.isAuthenticated = false;
    state.user = null;
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_mutations, AUTHENTICATING_SUCCESS, function (state, user) {
    state.isLoading = false;
    state.error = null;
    state.isAuthenticated = true;
    state.user = user;
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_mutations, AUTHENTICATING_ERROR, function (state, error) {
    state.isLoading = false;
    state.error = error;
    state.isAuthenticated = false;
    state.user = null;
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_mutations, PROVIDING_DATA_ON_REFRESH_SUCCESS, function (state, payload) {
    state.isLoading = false;
    state.error = null;
    state.isAuthenticated = payload.isAuthenticated;
    state.user = payload.user;
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_mutations, REGISTRATION, function (state) {
    state.isLoading = true;
    state.error = null;
    state.isAuthenticated = false;
    state.user = null;
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_mutations, REGISTRATION_SUCCESS, function (state, user) {
    state.isLoading = false;
    state.error = null;
    state.isAuthenticated = true;
    state.user = user;
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_mutations, REGISTRATION_ERROR, function (state, error) {
    state.isLoading = false;
    state.error = error;
    state.isAuthenticated = false;
    state.user = null;
  }), _mutations),
  actions: {
    login: function () {
      var _login = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref, payload) {
        var commit, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                commit(AUTHENTICATING);
                _context.prev = 2;
                _context.next = 5;
                return _api_security__WEBPACK_IMPORTED_MODULE_5__["default"].login(payload.email, payload.password);

              case 5:
                response = _context.sent;
                commit(AUTHENTICATING_SUCCESS, response.data);
                return _context.abrupt("return", response.data);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                commit(AUTHENTICATING_ERROR, _context.t0);
                return _context.abrupt("return", null);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10]]);
      }));

      function login(_x, _x2) {
        return _login.apply(this, arguments);
      }

      return login;
    }(),
    onRefresh: function onRefresh(_ref2, payload) {
      var commit = _ref2.commit;
      commit(PROVIDING_DATA_ON_REFRESH_SUCCESS, payload);
    },
    register: function () {
      var _register = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref3, payload) {
        var commit, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref3.commit;
                _context2.prev = 1;
                _context2.next = 4;
                return _api_security__WEBPACK_IMPORTED_MODULE_5__["default"].register(payload.email, payload.password, payload.firstname, payload.lastname);

              case 4:
                response = _context2.sent;
                commit(REGISTRATION_SUCCESS, response.data);
                return _context2.abrupt("return", response.data);

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);
                commit(REGISTRATION_ERROR, _context2.t0);
                return _context2.abrupt("return", null);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 9]]);
      }));

      function register(_x3, _x4) {
        return _register.apply(this, arguments);
      }

      return register;
    }()
  },
  getters: {
    isLoading: function isLoading(state) {
      return state.isLoading;
    },
    hasError: function hasError(state) {
      return state.error !== null;
    },
    error: function error(state) {
      return state.error;
    },
    isAuthenticated: function isAuthenticated(state) {
      return state.isAuthenticated;
    },
    hasRole: function hasRole(state) {
      return function (role) {
        return state.user.roles.indexOf(role) !== -1;
      };
    },
    user: function user(state) {
      return state.user;
    }
  }
});

/***/ }),

/***/ "./assets/scss/main.scss":
/*!*******************************!*\
  !*** ./assets/scss/main.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "App",
  computed: {
    isAuthenticated: function isAuthenticated() {
      return this.$store.getters["security/isAuthenticated"];
    }
  },
  created: function created() {
    var _this = this;

    var isAuthenticated = JSON.parse(this.$parent.$el.attributes["data-is-authenticated"].value),
        user = JSON.parse(this.$parent.$el.attributes["data-user"].value);
    var payload = {
      isAuthenticated: isAuthenticated,
      user: user
    };
    this.$store.dispatch("security/onRefresh", payload);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.interceptors.response.use(undefined, function (err) {
      return new Promise(function () {
        if (err.response.status === 401) {
          _this.$router.push({
            path: "/login"
          });
        } else if (err.response.status === 500) {
          document.open();
          document.write(err.response.data);
          document.close();
        }

        throw err;
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/ErrorMessage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/ErrorMessage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ErrorMessage",
  props: {
    error: {
      type: Error,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/about/About.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/about/About.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/account/Account.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/account/Account.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mixins_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/user */ "./assets/js/mixins/user.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ErrorMessage */ "./assets/js/components/ErrorMessage.vue");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ErrorMessage: _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      password: '',
      repeatPassword: ''
    };
  },
  methods: {
    saveAccountSettings: function () {
      var _saveAccountSettings = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var payload, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                payload = {
                  email: this.user.email,
                  firstname: this.user.firstname,
                  lastname: this.user.lastname
                };
                _context.next = 3;
                return this.$store.dispatch('account/modifyAccount', payload);

              case 3:
                response = _context.sent;

                if (response !== null) {
                  this.$store.dispatch('security/onRefresh', {
                    isAuthenticated: true,
                    user: response
                  });
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function saveAccountSettings() {
        return _saveAccountSettings.apply(this, arguments);
      }

      return saveAccountSettings;
    }(),
    savePasswordSettings: function () {
      var _savePasswordSettings = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var payload;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                payload = {
                  password: this.password,
                  repeatPassword: this.repeatPassword
                };
                _context2.next = 3;
                return this.$store.dispatch('account/changePassword', payload);

              case 3:
                if (!this.hasError) {
                  this.password = '';
                  this.repeatPassword = '';
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function savePasswordSettings() {
        return _savePasswordSettings.apply(this, arguments);
      }

      return savePasswordSettings;
    }()
  },
  computed: {
    isLoading: function isLoading() {
      return this.$store.getters['account/isLoading'];
    },
    hasError: function hasError() {
      return this.$store.getters['account/hasError'];
    },
    error: function error() {
      return this.$store.getters['account/error'];
    }
  },
  mixins: [_mixins_user__WEBPACK_IMPORTED_MODULE_3__["default"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/home/Home.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/home/Home.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/user */ "./assets/js/mixins/user.js");
/* harmony import */ var _components_map_EventMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/map/EventMap */ "./assets/js/components/map/EventMap.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_user__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    EventMap: _components_map_EventMap__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/Login.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/login/Login.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ErrorMessage */ "./assets/js/components/ErrorMessage.vue");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Login",
  components: {
    ErrorMessage: _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    isLoading: function isLoading() {
      return this.$store.getters["security/isLoading"];
    },
    hasError: function hasError() {
      return this.$store.getters["security/hasError"];
    },
    error: function error() {
      return this.$store.getters["security/error"];
    }
  },
  created: function created() {
    var redirect = this.$route.query.redirect;

    if (this.$store.getters["security/isAuthenticated"]) {
      if (typeof redirect !== "undefined") {
        this.$router.push({
          path: redirect
        });
      } else {
        this.$router.push({
          path: "/home"
        });
      }
    }
  },
  methods: {
    performLogin: function () {
      var _performLogin = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var payload, redirect;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                payload = {
                  email: this.$data.email,
                  password: this.$data.password
                }, redirect = this.$route.query.redirect;
                _context.next = 3;
                return this.$store.dispatch("security/login", payload);

              case 3:
                if (!this.$store.getters["security/hasError"]) {
                  if (typeof redirect !== "undefined") {
                    this.$router.push({
                      path: redirect
                    });
                  } else {
                    this.$router.push({
                      path: "/home"
                    });
                  }
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function performLogin() {
        return _performLogin.apply(this, arguments);
      }

      return performLogin;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/Register.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/login/Register.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ErrorMessage */ "./assets/js/components/ErrorMessage.vue");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Register",
  components: {
    ErrorMessage: _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    };
  },
  computed: {
    isLoading: function isLoading() {
      return this.$store.getters["security/isLoading"];
    },
    hasError: function hasError() {
      return this.$store.getters["security/hasError"];
    },
    error: function error() {
      return this.$store.getters["security/error"];
    }
  },
  created: function created() {
    var redirect = this.$route.query.redirect;

    if (this.$store.getters["security/isAuthenticated"]) {
      if (typeof redirect !== "undefined") {
        this.$router.push({
          path: redirect
        });
      } else {
        this.$router.push({
          path: "/home"
        });
      }
    }
  },
  methods: {
    performRegister: function () {
      var _performRegister = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var payload, redirect;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                payload = {
                  email: this.email,
                  password: this.password,
                  firstname: this.firstname,
                  lastname: this.lastname
                }, redirect = this.$route.query.redirect;
                _context.next = 3;
                return this.$store.dispatch("security/register", payload);

              case 3:
                if (!this.$store.getters["security/hasError"]) {
                  if (typeof redirect !== "undefined") {
                    this.$router.push({
                      path: redirect
                    });
                  } else {
                    this.$router.push({
                      path: "/home"
                    });
                  }
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function performRegister() {
        return _performRegister.apply(this, arguments);
      }

      return performRegister;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/EventAdd.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/map/EventAdd.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _mixins_polutionTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../mixins/polutionTypes */ "./assets/js/mixins/polutionTypes.js");
/* harmony import */ var _events_emitters__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../events/emitters */ "./assets/js/events/emitters.js");











//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['currentPosition'],
  data: function data() {
    return {
      pollutionTypes: [_mixins_polutionTypes__WEBPACK_IMPORTED_MODULE_11__["WATER"], _mixins_polutionTypes__WEBPACK_IMPORTED_MODULE_11__["DEFORESTATION"], _mixins_polutionTypes__WEBPACK_IMPORTED_MODULE_11__["GARBAGE"], _mixins_polutionTypes__WEBPACK_IMPORTED_MODULE_11__["OTHER"]],
      type: _mixins_polutionTypes__WEBPACK_IMPORTED_MODULE_11__["WATER"],
      description: '',
      images: [],
      sliderOptions: {
        min: 1,
        max: 4,
        tooltip: 'none',
        dotSize: 20,
        railStyle: {
          backgroundColor: '#E3E8F3'
        }
      },
      level: 1
    };
  },
  methods: {
    getPollutionName: function getPollutionName(type) {
      return Object(_mixins_polutionTypes__WEBPACK_IMPORTED_MODULE_11__["getPollutionName"])(type);
    },
    saveEvent: function () {
      var _saveEvent = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_10___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.mark(function _callee() {
        var self, files, toBase64, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;
                files = [];

                toBase64 = function toBase64(file) {
                  return new Promise(function (resolve, reject) {
                    var reader = new FileReader();
                    reader.readAsDataURL(file);

                    reader.onload = function () {
                      return resolve(reader.result);
                    };

                    reader.onerror = function (error) {
                      return reject(error);
                    };
                  });
                };

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 6;
                _iterator = this.$refs.imagesInput.files[Symbol.iterator]();

              case 8:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 18;
                  break;
                }

                file = _step.value;
                _context.t0 = files;
                _context.next = 13;
                return toBase64(file);

              case 13:
                _context.t1 = _context.sent;

                _context.t0.push.call(_context.t0, _context.t1);

              case 15:
                _iteratorNormalCompletion = true;
                _context.next = 8;
                break;

              case 18:
                _context.next = 24;
                break;

              case 20:
                _context.prev = 20;
                _context.t2 = _context["catch"](6);
                _didIteratorError = true;
                _iteratorError = _context.t2;

              case 24:
                _context.prev = 24;
                _context.prev = 25;

                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }

              case 27:
                _context.prev = 27;

                if (!_didIteratorError) {
                  _context.next = 30;
                  break;
                }

                throw _iteratorError;

              case 30:
                return _context.finish(27);

              case 31:
                return _context.finish(24);

              case 32:
                this.$store.dispatch('events/addEvent', {
                  type: this.type,
                  description: this.description,
                  images: files,
                  position: this.currentPosition,
                  level: this.level
                }).then(function (response) {
                  console.log(response);
                  _events_emitters__WEBPACK_IMPORTED_MODULE_12__["eventsEmmiter"].$emit('cleanMarkers');
                  self.closeAddEvent();
                });

              case 33:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[6, 20, 24, 32], [25,, 27, 31]]);
      }));

      function saveEvent() {
        return _saveEvent.apply(this, arguments);
      }

      return saveEvent;
    }(),
    closeAddEvent: function closeAddEvent() {
      this.$store.dispatch('events/setOpenedEvent', false);
    }
  },
  computed: {
    openedEvent: function openedEvent() {
      return this.$store.getters['events/openedEvent'];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/EventInfo.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/map/EventInfo.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_polutionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/polutionTypes */ "./assets/js/mixins/polutionTypes.js");
/* harmony import */ var _comments_EventComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments/EventComments */ "./assets/js/components/map/comments/EventComments.vue");
/* harmony import */ var _comments_AddComment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments/AddComment */ "./assets/js/components/map/comments/AddComment.vue");
/* harmony import */ var _events_emitters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../events/emitters */ "./assets/js/events/emitters.js");
/* harmony import */ var _mixins_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/user */ "./assets/js/mixins/user.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      showAddComment: false
    };
  },
  methods: {
    closeAddEvent: function closeAddEvent() {
      this.$store.dispatch('events/setOpenedEvent', false);
    },
    getPollutionName: function getPollutionName(type) {
      return Object(_mixins_polutionTypes__WEBPACK_IMPORTED_MODULE_1__["getPollutionName"])(type);
    },
    toggleRateEvent: function toggleRateEvent() {
      this.$store.dispatch('events/toggleEventUserResult', this.openedEvent.id);
    }
  },
  computed: {
    openedEvent: function openedEvent() {
      return this.$store.getters['events/openedEvent'];
    },
    hasUserMark: function hasUserMark() {
      var self = this;
      return this.openedEvent.eventResult.userEventResults.find(function (userEventResult) {
        return userEventResult.userId === self.user.id;
      });
    }
  },
  mixins: [_mixins_user__WEBPACK_IMPORTED_MODULE_5__["default"]],
  components: {
    EventComments: _comments_EventComments__WEBPACK_IMPORTED_MODULE_2__["default"],
    AddComment: _comments_AddComment__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  created: function created() {
    var self = this;
    _events_emitters__WEBPACK_IMPORTED_MODULE_4__["eventsEmmiter"].$on('addComment', function () {
      self.showAddComment = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/EventList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/map/EventList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events_emitters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../events/emitters */ "./assets/js/events/emitters.js");
/* harmony import */ var _mixins_polutionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/polutionTypes */ "./assets/js/mixins/polutionTypes.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    selectedEvents: function selectedEvents() {
      return this.$store.getters["events/selectedEvents"];
    }
  },
  methods: {
    getPollutionName: function getPollutionName(type) {
      return Object(_mixins_polutionTypes__WEBPACK_IMPORTED_MODULE_1__["getPollutionName"])(type);
    },
    getPollutionImageSrc: function getPollutionImageSrc(type) {
      return Object(_mixins_polutionTypes__WEBPACK_IMPORTED_MODULE_1__["getPollutionImageSrc"])(type);
    },
    getStatusName: function getStatusName(status) {
      if (!status) {
        return "Opened";
      }

      return "Finished";
    },
    selectEvent: function selectEvent(selectedEvent) {
      this.$store.dispatch("events/setOpenedEvent", selectedEvent);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/EventMap.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/map/EventMap.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EventList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventList */ "./assets/js/components/map/EventList.vue");
/* harmony import */ var _EventInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EventInfo */ "./assets/js/components/map/EventInfo.vue");
/* harmony import */ var _EventAdd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EventAdd */ "./assets/js/components/map/EventAdd.vue");
/* harmony import */ var _events_emitters__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../events/emitters */ "./assets/js/events/emitters.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var defaultZoom = 15;
var defaultLongitude = 36.22;
var defaultLatitude = 50.01;
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      map: null,
      infoWindow: null,
      currentPosition: null,
      markersConfigured: false,
      markerObjects: [],
      currentPositionIcon: 'https://www.robotwoods.com/dev/misc/bluecircle.png'
    };
  },
  computed: {
    markers: function markers() {
      return this.$store.getters['events/markers'];
    }
  },
  methods: {
    addEvent: function addEvent() {
      this.$store.dispatch('events/setOpenedEvent', {
        type: 'add'
      });
    },
    handleLocationError: function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(map);
    },
    setPositionToCurrent: function setPositionToCurrent() {
      var self = this;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          if (self.currentPosition === null) {
            self.addCurrentPositionMarker(pos);
          }

          self.currentPosition = pos;
          self.map.setCenter(pos);
        }, function () {
          self.handleLocationError(true, self.infoWindow, self.map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        self.handleLocationError(false, self.infoWindow, self.map.getCenter());
      }
    },
    setUpMarkers: function setUpMarkers() {
      var self = this;

      if (!this.markersConfigured) {
        this.markersConfigured = true;
        console.log(this.markers);
      } else {
        return;
      }

      var marker, i;

      for (i = 0; i < self.markers.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(parseFloat(self.markers[i]['latitude']), parseFloat(self.markers[i]['longitude'])),
          map: self.map,
          animation: google.maps.Animation.DROP
        });
        google.maps.event.addListener(marker, 'click', function (marker, i) {
          return function () {
            if (self.toggleMarkerAnimation(marker, i)) {
              self.$store.dispatch('events/selectMarker', {
                longitude: marker.position.lng(),
                latitude: marker.position.lat()
              });
            } else {
              self.$store.dispatch('events/clearSelectedEvents');
              self.$store.dispatch('events/setOpenedEvent', false);
            }
          };
        }(marker, i));
        self.markerObjects.push(marker);
      }
    },
    toggleMarkerAnimation: function toggleMarkerAnimation(marker, i) {
      this.markerObjects.forEach(function (item, index) {
        if (index !== i) {
          item.setAnimation(null);
        }
      });

      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
        return false;
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
        return true;
      }
    },
    removeMarkerAnimation: function removeMarkerAnimation() {
      this.markerObjects.forEach(function (marker) {
        marker.setAnimation(null);
      });
    },
    addCurrentPositionMarker: function addCurrentPositionMarker(pos) {
      var self = this;
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(parseFloat(pos.lat), parseFloat(pos.lng)),
        map: self.map,
        animation: google.maps.Animation.DROP,
        icon: self.currentPositionIcon
      });
    }
  },
  mounted: function mounted() {
    var self = this;
    var interval = setInterval(function () {
      if (window.mapInit) {
        clearInterval(interval);
        self.map = new google.maps.Map(self.$refs.map, {
          center: {
            lat: defaultLatitude,
            lng: defaultLongitude
          },
          zoom: defaultZoom,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        self.infoWindow = new google.maps.InfoWindow(); // Try HTML5 geolocation.

        self.setPositionToCurrent();

        if (typeof self.markers !== 'undefined' && self.markers !== null && self.markers.length > 0) {
          self.setUpMarkers();
        }
      }
    }, 100);
  },
  created: function created() {
    var self = this;
    this.$store.dispatch('events/fetchMarkers');
    _events_emitters__WEBPACK_IMPORTED_MODULE_6__["eventsEmmiter"].$on('setMarkers', function () {
      self.setUpMarkers();
    });
    _events_emitters__WEBPACK_IMPORTED_MODULE_6__["eventsEmmiter"].$on('cleanMarkers', function () {
      self.markerObjects.forEach(function (marker) {
        marker.setMap(null);
      });
      self.$store.dispatch('events/cleanMarkers').then(function () {
        self.$store.dispatch('events/fetchMarkers');
        self.markersConfigured = false;
        self.markerObjects = [];
        self.removeMarkerAnimation();
        self.$store.dispatch('events/clearSelectedEvents');
      });
    });
  },
  components: {
    EventList: _EventList__WEBPACK_IMPORTED_MODULE_3__["default"],
    EventInfo: _EventInfo__WEBPACK_IMPORTED_MODULE_4__["default"],
    EventAdd: _EventAdd__WEBPACK_IMPORTED_MODULE_5__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/comments/AddComment.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/map/comments/AddComment.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _events_emitters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../events/emitters */ "./assets/js/events/emitters.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      newComment: ''
    };
  },
  methods: {
    addComment: function addComment() {
      if (this.newComment !== '') {
        this.$store.dispatch('comments/addComment', {
          text: this.newComment,
          eventId: this.openedEvent.id
        });
      }
    }
  },
  computed: {
    openedEvent: function openedEvent() {
      return this.$store.getters['events/openedEvent'];
    }
  },
  created: function created() {
    var self = this;
    _events_emitters__WEBPACK_IMPORTED_MODULE_0__["eventsEmmiter"].$on('addComment', function () {
      self.newComment = '';
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/comments/EventComments.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/map/comments/EventComments.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['comments'],
  methods: {
    addCommentScore: function addCommentScore(comment) {
      this.$store.dispatch('comments/addCommentScore', comment.id);
    },
    removeCommentScore: function removeCommentScore(comment) {
      if (comment.score > 0) {
        this.$store.dispatch('comments/removeCommentScore', comment.id);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/EventAdd.vue?vue&type=style&index=0&id=1cafe09b&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--4-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/map/EventAdd.vue?vue&type=style&index=0&id=1cafe09b&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/EventInfo.vue?vue&type=style&index=0&id=5f9e42b8&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--4-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/map/EventInfo.vue?vue&type=style&index=0&id=5f9e42b8&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/EventList.vue?vue&type=style&index=0&id=15cab294&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--4-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/map/EventList.vue?vue&type=style&index=0&id=15cab294&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/comments/EventComments.vue?vue&type=style&index=0&id=8034a0f2&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--4-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--4-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/map/comments/EventComments.vue?vue&type=style&index=0&id=8034a0f2&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./assets/js/components/account/Account.vue?vue&type=style&index=0&id=a046ee8c&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--1-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/account/Account.vue?vue&type=style&index=0&id=a046ee8c&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/App.vue?vue&type=template&id=0dd47e10&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/App.vue?vue&type=template&id=0dd47e10& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "nav",
        { staticClass: "navbar navbar-expand-lg navbar-light" },
        [
          _c(
            "router-link",
            { staticClass: "navbar-brand", attrs: { to: "/home" } },
            [
              _c("img", {
                staticClass: "logo",
                attrs: { alt: "logo", src: "/img/logo.png" }
              })
            ]
          ),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse navbar-collapse",
              attrs: { id: "navbarNav" }
            },
            [
              _c(
                "ul",
                { staticClass: "navbar-nav" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-item",
                      attrs: {
                        tag: "li",
                        to: "/home",
                        "active-class": "active"
                      }
                    },
                    [_c("a", { staticClass: "nav-link" }, [_vm._v("Home")])]
                  ),
                  _vm._v(" "),
                  _vm.isAuthenticated
                    ? _c(
                        "router-link",
                        {
                          staticClass: "nav-item",
                          attrs: {
                            tag: "li",
                            to: "/account",
                            "active-class": "active"
                          }
                        },
                        [
                          _c("a", { staticClass: "nav-link" }, [
                            _vm._v("My account")
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.isAuthenticated
                    ? _c(
                        "router-link",
                        {
                          staticClass: "nav-item",
                          attrs: {
                            tag: "li",
                            to: "/login",
                            "active-class": "active"
                          }
                        },
                        [
                          _c("a", { staticClass: "nav-link" }, [
                            _vm._v("Login")
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.isAuthenticated
                    ? _c(
                        "router-link",
                        {
                          staticClass: "nav-item",
                          attrs: {
                            tag: "li",
                            to: "/register",
                            "active-class": "active"
                          }
                        },
                        [
                          _c("a", { staticClass: "nav-link" }, [
                            _vm._v("Registration")
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-item",
                      attrs: {
                        tag: "li",
                        to: "/about",
                        "active-class": "active"
                      }
                    },
                    [_c("a", { staticClass: "nav-link" }, [_vm._v("About")])]
                  ),
                  _vm._v(" "),
                  _vm.isAuthenticated
                    ? _c("li", { staticClass: "nav-item" }, [
                        _c(
                          "a",
                          {
                            staticClass: "nav-link",
                            attrs: { href: "/api/security/logout" }
                          },
                          [_vm._v("Logout")]
                        )
                      ])
                    : _vm._e()
                ],
                1
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("router-view")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarNav",
          "aria-controls": "navbarNav",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/ErrorMessage.vue?vue&type=template&id=4a122000&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/ErrorMessage.vue?vue&type=template&id=4a122000& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "alert", attrs: { role: "alert" } }, [
    _vm._v("\n  " + _vm._s(_vm.error.response.data.error) + "\n")
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/about/About.vue?vue&type=template&id=9716630c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/about/About.vue?vue&type=template&id=9716630c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm._v("\n  About\n")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/account/Account.vue?vue&type=template&id=a046ee8c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/account/Account.vue?vue&type=template&id=a046ee8c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container login-page account-page" }, [
    _vm._m(0),
    _vm._v(" "),
    _vm.isAuthenticated && _vm.user !== null
      ? _c("div", { staticClass: "card" }, [
          _c("form", { staticClass: "card-body" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "email" } }, [
                _vm._v("Email address")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.email,
                    expression: "user.email"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "email" },
                domProps: { value: _vm.user.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.user, "email", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "firstname" } }, [
                _vm._v("Firstname")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.firstname,
                    expression: "user.firstname"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.user.firstname },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.user, "firstname", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "lastname" } }, [_vm._v("Lastname")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.user.lastname,
                    expression: "user.lastname"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text" },
                domProps: { value: _vm.user.lastname },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.user, "lastname", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn",
                attrs: {
                  disabled:
                    _vm.user.email.length === 0 ||
                    _vm.user.firstname.length === 0 ||
                    _vm.user.lastname.length === 0 ||
                    _vm.isLoading,
                  type: "button"
                },
                on: {
                  click: function($event) {
                    return _vm.saveAccountSettings()
                  }
                }
              },
              [_vm._v("\n        Save\n      ")]
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c("div", { staticClass: "card mt-3 password-card" }, [
      _c("form", { staticClass: "card-body" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "password" } }, [_vm._v("Password")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.password,
                expression: "password"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "password" },
            domProps: { value: _vm.password },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.password = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "repeatPassword" } }, [
            _vm._v("Repeat Password")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.repeatPassword,
                expression: "repeatPassword"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "password" },
            domProps: { value: _vm.repeatPassword },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.repeatPassword = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn",
            attrs: {
              disabled:
                _vm.password !== _vm.repeatPassword || _vm.password.length < 6,
              type: "button"
            },
            on: {
              click: function($event) {
                return _vm.savePasswordSettings()
              }
            }
          },
          [_vm._v("\n        Save\n      ")]
        )
      ])
    ]),
    _vm._v(" "),
    _vm.isLoading
      ? _c("div", { staticClass: "row col" }, [_c("p", [_vm._v("Loading...")])])
      : _vm.hasError
      ? _c(
          "div",
          { staticClass: "row col" },
          [_c("error-message", { attrs: { error: _vm.error } })],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row col" }, [
      _c("p", [_vm._v("My account")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row col" }, [
      _c("p", { staticClass: "m-0 pt-3" }, [_vm._v("Change password")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/home/Home.vue?vue&type=template&id=78d417fe&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/home/Home.vue?vue&type=template&id=78d417fe&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container home-page" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row col" }, [
        _vm.isAuthenticated && _vm.user !== null
          ? _c("p", [
              _vm._v(
                "\n      " +
                  _vm._s(
                    "Hello, " + _vm.user.firstname + " " + _vm.user.lastname
                  ) +
                  "\n    "
              )
            ])
          : _c("p", [
              _vm._v(
                "\n      Try to register or log in to be able to participate in EcoWalk game.\n    "
              )
            ])
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _vm.isAuthenticated ? _c("event-map") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row col" }, [
      _c("h1", [_vm._v("Welcome to EcoWalk")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "intro-img-holder" }, [
      _c("img", {
        staticClass: "intro",
        attrs: { alt: "intro-photo", src: "/img/eco.png" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/Login.vue?vue&type=template&id=b686159c&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/login/Login.vue?vue&type=template&id=b686159c& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container login-page" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card" }, [
      _c("form", { staticClass: "card-body" }, [
        _c("div", { staticClass: "form-row" }, [
          _c("div", { staticClass: "col-4" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.email,
                  expression: "email"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "email", placeholder: "Email address" },
              domProps: { value: _vm.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.email = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-4" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.password,
                  expression: "password"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "password", placeholder: "Password" },
              domProps: { value: _vm.password },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.password = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-4" }, [
            _c(
              "button",
              {
                staticClass: "btn log-btn",
                attrs: {
                  disabled:
                    _vm.email.length === 0 ||
                    _vm.password.length === 0 ||
                    _vm.isLoading,
                  type: "button"
                },
                on: {
                  click: function($event) {
                    return _vm.performLogin()
                  }
                }
              },
              [_vm._v("\n            Login\n          ")]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm.isLoading
      ? _c("div", { staticClass: "row col" }, [_c("p", [_vm._v("Loading...")])])
      : _vm.hasError
      ? _c(
          "div",
          { staticClass: "row col" },
          [_c("error-message", { attrs: { error: _vm.error } })],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row col" }, [
      _c("p", [_vm._v("Please, log in")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/login/Register.vue?vue&type=template&id=7f8abe6a&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/login/Register.vue?vue&type=template&id=7f8abe6a&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container register-page" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card" }, [
      _c("form", { staticClass: "card-body" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.email,
                expression: "email"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "email", placeholder: "Email address" },
            domProps: { value: _vm.email },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.email = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.firstname,
                expression: "firstname"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "Firstname" },
            domProps: { value: _vm.firstname },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.firstname = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.lastname,
                expression: "lastname"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "Lastname" },
            domProps: { value: _vm.lastname },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.lastname = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.password,
                expression: "password"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "password", placeholder: "Password" },
            domProps: { value: _vm.password },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.password = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn reg-btn",
            attrs: {
              disabled:
                _vm.email.length === 0 ||
                _vm.password.length === 0 ||
                _vm.isLoading,
              type: "button"
            },
            on: {
              click: function($event) {
                return _vm.performRegister()
              }
            }
          },
          [_vm._v("\n        Register\n      ")]
        )
      ])
    ]),
    _vm._v(" "),
    _vm.isLoading
      ? _c("div", { staticClass: "row col" }, [_c("p", [_vm._v("Loading...")])])
      : _vm.hasError
      ? _c(
          "div",
          { staticClass: "row col" },
          [_c("error-message", { attrs: { error: _vm.error } })],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row col" }, [
      _c("p", [_vm._v("Please, register your profile")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/EventAdd.vue?vue&type=template&id=1cafe09b&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/map/EventAdd.vue?vue&type=template&id=1cafe09b&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.openedEvent !== false && _vm.openedEvent.type === "add"
    ? _c("div", { staticClass: "event-add" }, [
        _c(
          "button",
          {
            staticClass: "close",
            attrs: { type: "button" },
            on: { click: _vm.closeAddEvent }
          },
          [_c("span", [_vm._v("×")])]
        ),
        _vm._v(" "),
        _c(
          "form",
          { ref: "eventAddForm", attrs: { enctype: "multipart/form-data" } },
          [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "type" } }, [_vm._v("Event type")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.type,
                      expression: "type"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { name: "type" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.type = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    }
                  }
                },
                [
                  _c("option", { attrs: { disabled: "", value: "" } }, [
                    _vm._v("Choose type")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.pollutionTypes, function(pollutionType, index) {
                    return _c(
                      "option",
                      {
                        key: index,
                        domProps: {
                          value: pollutionType,
                          selected: pollutionType === _vm.type
                        }
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.getPollutionName(pollutionType)) +
                            "\n        "
                        )
                      ]
                    )
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "description" } }, [
                _vm._v("Description")
              ]),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.description,
                    expression: "description"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  name: "description",
                  placeholder: "Put description here",
                  rows: "5"
                },
                domProps: { value: _vm.description },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.description = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "images" } }, [_vm._v("Photos")]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group mb-3" }, [
                _c("div", { staticClass: "custom-file" }, [
                  _c("input", {
                    ref: "imagesInput",
                    staticClass: "custom-file-input",
                    attrs: {
                      type: "file",
                      multiple: "multiple",
                      name: "images",
                      accept: "image/*",
                      id: "eventImagePicker"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "custom-file-label",
                      attrs: { for: "eventImagePicker" }
                    },
                    [_vm._v("Choose file")]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "levelSliderValue" } }, [
                _vm._v("Level")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "slider-container pb-3" },
                [
                  _c(
                    "vue-slider",
                    _vm._b(
                      {
                        attrs: {
                          contained: true,
                          silent: true,
                          adsorb: true,
                          interval: 1,
                          marks: true,
                          tooltip: "always",
                          "tooltip-placement": ["top", "bottom"]
                        },
                        model: {
                          value: _vm.level,
                          callback: function($$v) {
                            _vm.level = $$v
                          },
                          expression: "level"
                        }
                      },
                      "vue-slider",
                      _vm.sliderOptions,
                      false
                    )
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn",
                attrs: { type: "button" },
                on: { click: _vm.saveEvent }
              },
              [_vm._v("Save\n    ")]
            )
          ]
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/EventInfo.vue?vue&type=template&id=5f9e42b8&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/map/EventInfo.vue?vue&type=template&id=5f9e42b8&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.openedEvent && _vm.openedEvent.id
    ? _c("div", { staticClass: "event-info-wrapper" }, [
        _c(
          "button",
          {
            staticClass: "close",
            attrs: { type: "button" },
            on: { click: _vm.closeAddEvent }
          },
          [_c("span", [_vm._v("×")])]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "event-info-wrapper-content" },
          [
            _c("div", { staticClass: "card" }, [
              _c(
                "div",
                {
                  staticClass: "carousel slide",
                  attrs: { id: "eventInfoCarousel", "data-ride": "carousel" }
                },
                [
                  _c(
                    "div",
                    { staticClass: "carousel-inner" },
                    _vm._l(_vm.openedEvent.images, function(image, index) {
                      return _c(
                        "div",
                        {
                          key: image.id,
                          staticClass: "carousel-item",
                          class: { active: index === 0 }
                        },
                        [
                          _c("img", {
                            staticClass: "d-block w-100",
                            attrs: { src: image.content }
                          })
                        ]
                      )
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _vm._m(0),
                  _vm._v(" "),
                  _vm._m(1)
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title" }, [
                  _vm._v(_vm._s(_vm.getPollutionName(_vm.openedEvent.type)))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-text" }, [
                  _vm._v(_vm._s(_vm.openedEvent.description))
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex justify-content-between align-items-center"
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { href: "#" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            $event.preventDefault()
                            _vm.showAddComment = !_vm.showAddComment
                          }
                        }
                      },
                      [_vm._v("Add comment")]
                    ),
                    _vm._v(" "),
                    _vm.user.id !== _vm.openedEvent.creator_id &&
                    _vm.openedEvent.status === 0
                      ? _c("a", {
                          staticClass: "btn btn-success",
                          class: {
                            "btn-success": !_vm.hasUserMark,
                            "btn-warning": _vm.hasUserMark
                          },
                          attrs: { href: "#" },
                          domProps: {
                            textContent: _vm._s(
                              _vm.hasUserMark
                                ? "Unmark as done"
                                : "Mark as done"
                            )
                          },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              $event.preventDefault()
                              return _vm.toggleRateEvent($event)
                            }
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c("span", { staticClass: "badge badge-warning" }, [
                      _vm._v(_vm._s(_vm.openedEvent.level))
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _vm.showAddComment ? _c("add-comment") : _vm._e(),
            _vm._v(" "),
            _c("event-comments", {
              attrs: { comments: _vm.openedEvent.comments }
            })
          ],
          1
        )
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "carousel-control-prev",
        attrs: {
          href: "#eventInfoCarousel",
          role: "button",
          "data-slide": "prev"
        }
      },
      [
        _c("span", {
          staticClass: "carousel-control-prev-icon",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "sr-only" }, [_vm._v("Previous")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "carousel-control-next",
        attrs: {
          href: "#eventInfoCarousel",
          role: "button",
          "data-slide": "next"
        }
      },
      [
        _c("span", {
          staticClass: "carousel-control-next-icon",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "sr-only" }, [_vm._v("Next")])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/EventList.vue?vue&type=template&id=15cab294&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/map/EventList.vue?vue&type=template&id=15cab294&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.selectedEvents && _vm.selectedEvents.length > 0
    ? _c("div", { staticClass: "events-list row col-12" }, [
        _c("p", [_vm._v("Marker's events")]),
        _vm._v(" "),
        _c("table", { staticClass: "table table-hover" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.selectedEvents, function(selectedEvent, index) {
              return _c(
                "tr",
                {
                  key: selectedEvent.id,
                  on: {
                    click: function($event) {
                      return _vm.selectEvent(selectedEvent)
                    }
                  }
                },
                [
                  _c("td", { staticClass: "event-list-item-img-wrapper" }, [
                    _c("img", {
                      staticClass: "img-fluid",
                      attrs: {
                        src: _vm.getPollutionImageSrc(selectedEvent.type),
                        alt: _vm.getPollutionName(selectedEvent.type)
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(selectedEvent.description))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(selectedEvent.level))]),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      class: {
                        "bg-danger": selectedEvent.status === 1,
                        "bg-success": selectedEvent.status === 0
                      }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.getStatusName(selectedEvent.status)) +
                          "\n        "
                      )
                    ]
                  )
                ]
              )
            }),
            0
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Description")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Level")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Status")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/EventMap.vue?vue&type=template&id=d9f59054&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/map/EventMap.vue?vue&type=template&id=d9f59054& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "map-wrapper w-100 h-100" }, [
    _c("div", { ref: "map", staticClass: "map-inner w-100" }),
    _vm._v(" "),
    _c("div", { staticClass: "events-wrapper w-100" }, [
      _c("div", { staticClass: "event-actions row col-12 py-3" }, [
        _c(
          "button",
          {
            staticClass: "btn map-btn",
            attrs: { type: "button" },
            on: { click: _vm.addEvent }
          },
          [_vm._v("Add event\n      ")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn map-btn ml-3",
            attrs: { type: "button" },
            on: { click: _vm.setPositionToCurrent }
          },
          [_vm._v("To current position\n      ")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row w-100" }, [
        _c("div", { staticClass: "col-6" }, [_c("event-list")], 1),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-6" },
          [
            _c("event-info"),
            _vm._v(" "),
            _c("event-add", {
              attrs: { "current-position": _vm.currentPosition }
            })
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/comments/AddComment.vue?vue&type=template&id=66997075&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/map/comments/AddComment.vue?vue&type=template&id=66997075&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "event-add-comment mt-2" }, [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header" }, [
        _vm._v("\n      Add comment\n    ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.newComment,
              expression: "newComment"
            }
          ],
          staticClass: "form-control w-100",
          attrs: {
            name: "newComment",
            id: "newComment",
            cols: "30",
            rows: "5"
          },
          domProps: { value: _vm.newComment },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.newComment = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "text-right mt-2" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-secondary",
              attrs: { type: "button" },
              on: { click: _vm.addComment }
            },
            [_vm._v("Add comment\n        ")]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./assets/js/components/map/comments/EventComments.vue?vue&type=template&id=8034a0f2&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./assets/js/components/map/comments/EventComments.vue?vue&type=template&id=8034a0f2&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.comments.length > 0
    ? _c(
        "div",
        { staticClass: "event-comments" },
        [
          _c("h4", { staticClass: "h4" }, [
            _c("span", [_vm._v("Comments")]),
            _vm._v(" "),
            _c("span", { staticClass: "badge badge-info" }, [
              _vm._v(_vm._s(_vm.comments.length))
            ])
          ]),
          _vm._v(" "),
          _vm._l(_vm.comments, function(comment) {
            return _c("div", { key: comment.id, staticClass: "card mt-2" }, [
              _c("div", { staticClass: "card-header" }, [
                _vm._v(
                  "\n      " +
                    _vm._s(
                      comment.user.firstname + " " + comment.user.lastname
                    ) +
                    "\n    "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("p", { staticClass: "card-text" }, [
                  _vm._v(_vm._s(comment.comment))
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-score align-items-center d-flex" },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.addCommentScore(comment)
                          }
                        }
                      },
                      [_vm._v("+\n        ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "font-weight-bold h4 m-0 px-3" }, [
                      _vm._v(_vm._s(comment.score))
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.removeCommentScore(comment)
                          }
                        }
                      },
                      [_vm._v("-\n        ")]
                    )
                  ]
                )
              ])
            ])
          })
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwaS9hY2NvdW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcGkvY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwaS9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwaS9zZWN1cml0eS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZT9iZWRhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FwcC52dWU/MDk2OCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9FcnJvck1lc3NhZ2UudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Vycm9yTWVzc2FnZS52dWU/MDU1MiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9FcnJvck1lc3NhZ2UudnVlPzIxYzIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvYWJvdXQvQWJvdXQudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Fib3V0L0Fib3V0LnZ1ZT81ZmUzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Fib3V0L0Fib3V0LnZ1ZT9kNzc2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FjY291bnQvQWNjb3VudC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9BY2NvdW50LnZ1ZT9jNGMzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FjY291bnQvQWNjb3VudC52dWU/N2RhMSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9hY2NvdW50L0FjY291bnQudnVlPzgyYzgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvaG9tZS9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9ob21lL0hvbWUudnVlP2RiZjgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvaG9tZS9Ib21lLnZ1ZT9lOTU0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL0xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Mb2dpbi52dWU/YWRkMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Mb2dpbi52dWU/MmMxZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9SZWdpc3Rlci52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vUmVnaXN0ZXIudnVlPzFiYTkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vUmVnaXN0ZXIudnVlP2U0NjciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbWFwL0V2ZW50QWRkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tYXAvRXZlbnRBZGQudnVlPzY2MDQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbWFwL0V2ZW50QWRkLnZ1ZT83ZmMxIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL21hcC9FdmVudEFkZC52dWU/ODJhZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tYXAvRXZlbnRJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tYXAvRXZlbnRJbmZvLnZ1ZT8zYmIxIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL21hcC9FdmVudEluZm8udnVlP2VmMGMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbWFwL0V2ZW50SW5mby52dWU/N2UwZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tYXAvRXZlbnRMaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tYXAvRXZlbnRMaXN0LnZ1ZT9iZjVmIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL21hcC9FdmVudExpc3QudnVlPzA1OTQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbWFwL0V2ZW50TGlzdC52dWU/MDRmOCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tYXAvRXZlbnRNYXAudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL21hcC9FdmVudE1hcC52dWU/NjY0YyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tYXAvRXZlbnRNYXAudnVlPzIwOWQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbWFwL2NvbW1lbnRzL0FkZENvbW1lbnQudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL21hcC9jb21tZW50cy9BZGRDb21tZW50LnZ1ZT9jMzNiIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL21hcC9jb21tZW50cy9BZGRDb21tZW50LnZ1ZT8xOTYwIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL21hcC9jb21tZW50cy9FdmVudENvbW1lbnRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tYXAvY29tbWVudHMvRXZlbnRDb21tZW50cy52dWU/YWRiYiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tYXAvY29tbWVudHMvRXZlbnRDb21tZW50cy52dWU/ZWRiMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tYXAvY29tbWVudHMvRXZlbnRDb21tZW50cy52dWU/NTdmNyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZXZlbnRzL2VtaXR0ZXJzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9taXhpbnMvcG9sdXRpb25UeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWl4aW5zL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JvdXRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3RvcmUvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3RvcmUvY29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N0b3JlL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3N0b3JlL3NlY3VyaXR5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvYWJvdXQvQWJvdXQudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9hY2NvdW50L0FjY291bnQudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9ob21lL0hvbWUudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL2xvZ2luL1JlZ2lzdGVyLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbWFwL0V2ZW50QWRkLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL2NvbXBvbmVudHMvbWFwL0V2ZW50SW5mby52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL21hcC9FdmVudExpc3QudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9tYXAvRXZlbnRNYXAudnVlIiwid2VicGFjazovLy9hc3NldHMvanMvY29tcG9uZW50cy9tYXAvY29tbWVudHMvQWRkQ29tbWVudC52dWUiLCJ3ZWJwYWNrOi8vL2Fzc2V0cy9qcy9jb21wb25lbnRzL21hcC9jb21tZW50cy9FdmVudENvbW1lbnRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tYXAvRXZlbnRBZGQudnVlP2QzM2YiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbWFwL0V2ZW50SW5mby52dWU/MWFlNiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tYXAvRXZlbnRMaXN0LnZ1ZT84ODRlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL21hcC9jb21tZW50cy9FdmVudENvbW1lbnRzLnZ1ZT81MmRhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FjY291bnQvQWNjb3VudC52dWU/MzdhNiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9BcHAudnVlP2E3YmUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlLnZ1ZT8zNGRhIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Fib3V0L0Fib3V0LnZ1ZT8wMTQ1Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FjY291bnQvQWNjb3VudC52dWU/ZTc2MiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9ob21lL0hvbWUudnVlPzY3NWMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vTG9naW4udnVlPzQzZjYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vUmVnaXN0ZXIudnVlPzk2MGEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbWFwL0V2ZW50QWRkLnZ1ZT9kMWU2Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL21hcC9FdmVudEluZm8udnVlPzZmODMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbWFwL0V2ZW50TGlzdC52dWU/ODU3ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9tYXAvRXZlbnRNYXAudnVlPzJiYzEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbWFwL2NvbW1lbnRzL0FkZENvbW1lbnQudnVlP2UwYmMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvbWFwL2NvbW1lbnRzL0V2ZW50Q29tbWVudHMudnVlP2IyOWQiXSwibmFtZXMiOlsiY2hhbmdlUGFzc3dvcmQiLCJwYXNzd29yZCIsInJlcGVhdFBhc3N3b3JkIiwiYXhpb3MiLCJwb3N0IiwicXMiLCJzdHJpbmdpZnkiLCJtb2RpZnlBY2NvdW50IiwiZW1haWwiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsInVzZXJuYW1lIiwiYWRkQ29tbWVudCIsInRleHQiLCJldmVudElkIiwiYWRkQ29tbWVudFNjb3JlIiwiaWRDb21tZW50Iiwic2lnbiIsInJlbW92ZUNvbW1lbnRTY29yZSIsImFkZEV2ZW50IiwidHlwZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2VzIiwicG9zaXRpb24iLCJsZXZlbCIsImdldE1hcmtlcnMiLCJnZXRFdmVudHMiLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsInRvZ2dsZUV2ZW50UmVzdWx0IiwibG9naW4iLCJyZWdpc3RlciIsInJlcXVpcmUiLCJldmVudHNFbW1pdGVyIiwiVnVlIiwiY29tcG9uZW50IiwiVnVlU2xpZGVyIiwiY29tcG9uZW50cyIsIkFwcCIsInRlbXBsYXRlIiwicm91dGVyIiwic3RvcmUiLCIkbW91bnQiLCJXQVRFUiIsIkRFRk9SRVNUQVRJT04iLCJHQVJCQUdFIiwiT1RIRVIiLCJnZXRQb2xsdXRpb25OYW1lIiwiZ2V0UG9sbHV0aW9uSW1hZ2VTcmMiLCJjb21wdXRlZCIsImlzQXV0aGVudGljYXRlZCIsIiRzdG9yZSIsImdldHRlcnMiLCJ1c2VyIiwidXNlIiwiVnVlUm91dGVyIiwibW9kZSIsInJvdXRlcyIsInBhdGgiLCJIb21lIiwibWV0YSIsInRpdGxlIiwiTG9naW4iLCJSZWdpc3RlciIsIkFjY291bnQiLCJyZXF1aXJlc0F1dGgiLCJBYm91dCIsInJlZGlyZWN0IiwiYmVmb3JlRWFjaCIsInRvIiwiZnJvbSIsIm5leHQiLCJkb2N1bWVudCIsIm1hdGNoZWQiLCJzb21lIiwicmVjb3JkIiwicXVlcnkiLCJmdWxsUGF0aCIsIm5hbWVzcGFjZWQiLCJzdGF0ZSIsImlzTG9hZGluZyIsImVycm9yIiwibXV0YXRpb25zIiwic3RhcnRMb2FkaW5nIiwic3VjY2Vzc0xvYWRpbmciLCJlcnJvckxvYWRpbmciLCJhY3Rpb25zIiwicGF5bG9hZCIsImNvbW1pdCIsIkFjY291bnRBUEkiLCJyZXNwb25zZSIsImRhdGEiLCJoYXNFcnJvciIsImV2ZW50cyIsIm9wZW5lZEV2ZW50IiwiY29tbWVudHMiLCJwdXNoIiwiJGVtaXQiLCJhZGRTY29yZSIsImZvckVhY2giLCJjb21tZW50IiwiaWQiLCJzY29yZSIsInJlbW92ZVNjb3JlIiwiQ29tbWVudHNBUEkiLCJtYXJrZXJzIiwic2VsZWN0ZWRFdmVudHMiLCJzZXRNYXJrZXJzIiwic2V0U2VsZWN0ZWRFdmVudHMiLCJzZXRPcGVuZWRFdmVudCIsIkV2ZW50c0FQSSIsImZldGNoTWFya2VycyIsInNlbGVjdE1hcmtlciIsImNsZWFyU2VsZWN0ZWRFdmVudHMiLCJ0b2dnbGVFdmVudFVzZXJSZXN1bHQiLCJjbGVhbk1hcmtlcnMiLCJWdWV4IiwiU3RvcmUiLCJtb2R1bGVzIiwic2VjdXJpdHkiLCJTZWN1cml0eU1vZHVsZSIsImFjY291bnQiLCJBY2NvdW50TW9kdWxlIiwiRXZlbnRzTW9kdWxlIiwiQ29tbWVudHNNb2R1bGUiLCJBVVRIRU5USUNBVElORyIsIkFVVEhFTlRJQ0FUSU5HX1NVQ0NFU1MiLCJBVVRIRU5USUNBVElOR19FUlJPUiIsIlBST1ZJRElOR19EQVRBX09OX1JFRlJFU0hfU1VDQ0VTUyIsIlJFR0lTVFJBVElPTiIsIlJFR0lTVFJBVElPTl9TVUNDRVNTIiwiUkVHSVNUUkFUSU9OX0VSUk9SIiwiU2VjdXJpdHlBUEkiLCJvblJlZnJlc2giLCJoYXNSb2xlIiwicm9sZSIsInJvbGVzIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RB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QUN2QjtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsOENBQThDO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlCQUFpQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vYXNzZXRzL2pzL2FwcC5qc1wiLFwidmVuZG9yc35hcHBcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHFzIGZyb20gJ3FzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjaGFuZ2VQYXNzd29yZChwYXNzd29yZCwgcmVwZWF0UGFzc3dvcmQpIHtcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9hY2NvdW50L2NoYW5nZS1wYXNzd29yZCcsIHFzLnN0cmluZ2lmeSh7XG4gICAgICBwYXNzd29yZCxcbiAgICAgIHJlcGVhdFBhc3N3b3JkXG4gICAgfSkpO1xuICB9LFxuICBtb2RpZnlBY2NvdW50KGVtYWlsLCBmaXJzdG5hbWUsIGxhc3RuYW1lKSB7XG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvYWNjb3VudC9tb2RpZnktYWNjb3VudCcsIHFzLnN0cmluZ2lmeSh7XG4gICAgICB1c2VybmFtZTogZW1haWwsXG4gICAgICBmaXJzdG5hbWUsXG4gICAgICBsYXN0bmFtZVxuICAgIH0pKTtcbiAgfVxufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgcXMgZnJvbSAncXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZENvbW1lbnQodGV4dCwgZXZlbnRJZCkge1xuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2NvbW1lbnRzL2FkZCcsIHFzLnN0cmluZ2lmeSh7XG4gICAgICB0ZXh0LFxuICAgICAgZXZlbnRJZFxuICAgIH0pKTtcbiAgfSxcbiAgYWRkQ29tbWVudFNjb3JlKGlkQ29tbWVudCkge1xuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2NvbW1lbnRzL3Njb3JlJywgcXMuc3RyaW5naWZ5KHtcbiAgICAgIGlkQ29tbWVudCxcbiAgICAgIHNpZ246ICcrJ1xuICAgIH0pKTtcbiAgfSxcbiAgcmVtb3ZlQ29tbWVudFNjb3JlKGlkQ29tbWVudCkge1xuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2NvbW1lbnRzL3Njb3JlJywgcXMuc3RyaW5naWZ5KHtcbiAgICAgIGlkQ29tbWVudCxcbiAgICAgIHNpZ246ICctJ1xuICAgIH0pKTtcbiAgfVxufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBxcyBmcm9tICdxcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWRkRXZlbnQodHlwZSwgZGVzY3JpcHRpb24sIGltYWdlcywgcG9zaXRpb24sIGxldmVsKSB7XG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvZXZlbnRzL2FkZCcsIHFzLnN0cmluZ2lmeSh7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBpbWFnZXMsXG4gICAgICAgIHBvc2l0aW9uLFxuICAgICAgICBsZXZlbFxuICAgICAgfSlcbiAgICApO1xuICB9LFxuICBnZXRNYXJrZXJzKCkge1xuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL21hcmtlcnMvZ2V0QWxsJyk7XG4gIH0sXG4gIGdldEV2ZW50cyhsb25naXR1ZGUsIGxhdGl0dWRlKSB7XG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvZXZlbnRzL2dldEJ5Q29vcmRpbmF0ZXMnLCBxcy5zdHJpbmdpZnkoe1xuICAgICAgbG9uZ2l0dWRlLFxuICAgICAgbGF0aXR1ZGVcbiAgICB9KSk7XG4gIH0sXG4gIHRvZ2dsZUV2ZW50UmVzdWx0KGV2ZW50SWQpIHtcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9ldmVudHMvdG9nZ2xlUmVzdWx0JywgcXMuc3RyaW5naWZ5KHtcbiAgICAgIGV2ZW50SWRcbiAgICB9KSk7XG4gIH1cbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHFzIGZyb20gJ3FzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsb2dpbihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9zZWN1cml0eS9sb2dpbicsIHtcbiAgICAgIHVzZXJuYW1lOiBlbWFpbCxcbiAgICAgIHBhc3N3b3JkXG4gICAgfSk7XG4gIH0sXG4gIHJlZ2lzdGVyKGVtYWlsLCBwYXNzd29yZCwgZmlyc3RuYW1lLCBsYXN0bmFtZSkge1xuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3NlY3VyaXR5L3JlZ2lzdGVyJywgcXMuc3RyaW5naWZ5KHtcbiAgICAgIHVzZXJuYW1lOiBlbWFpbCxcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgZmlyc3RuYW1lLFxuICAgICAgbGFzdG5hbWVcbiAgICB9KSk7XG4gIH1cbn0iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgcmVxdWlyZSB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbnJlcXVpcmUoJy4uL3Njc3MvbWFpbi5zY3NzJyk7XG5yZXF1aXJlKCcuL21haW4uanMnKTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGRkNDdlMTAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2RlbnlzL1BocHN0b3JtUHJvamVjdHMvYXp1cmUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGRkNDdlMTAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGRkNDdlMTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGRkNDdlMTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGRkNDdlMTAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGRkNDdlMTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL0FwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkZDQ3ZTEwJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FcnJvck1lc3NhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhMTIyMDAwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Vycm9yTWVzc2FnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Vycm9yTWVzc2FnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9kZW55cy9QaHBzdG9ybVByb2plY3RzL2F6dXJlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRhMTIyMDAwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRhMTIyMDAwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRhMTIyMDAwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FcnJvck1lc3NhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhMTIyMDAwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRhMTIyMDAwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9FcnJvck1lc3NhZ2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FcnJvck1lc3NhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Vycm9yTWVzc2FnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXJyb3JNZXNzYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YTEyMjAwMCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWJvdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk3MTY2MzBjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Fib3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWJvdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI5NzE2NjMwY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9kZW55cy9QaHBzdG9ybVByb2plY3RzL2F6dXJlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzk3MTY2MzBjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzk3MTY2MzBjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzk3MTY2MzBjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BYm91dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTcxNjYzMGMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOTcxNjYzMGMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL2Fib3V0L0Fib3V0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWJvdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fib3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BYm91dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTcxNjYzMGMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FjY291bnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWEwNDZlZThjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FjY291bnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BY2NvdW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BY2NvdW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWEwNDZlZThjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJhMDQ2ZWU4Y1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9kZW55cy9QaHBzdG9ybVByb2plY3RzL2F6dXJlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2EwNDZlZThjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2EwNDZlZThjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2EwNDZlZThjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BY2NvdW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hMDQ2ZWU4YyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdhMDQ2ZWU4YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvYWNjb3VudC9BY2NvdW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWNjb3VudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWNjb3VudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BY2NvdW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWEwNDZlZThjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BY2NvdW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWEwNDZlZThjJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FjY291bnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWEwNDZlZThjJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OGQ0MTdmZSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjc4ZDQxN2ZlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2RlbnlzL1BocHN0b3JtUHJvamVjdHMvYXp1cmUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzhkNDE3ZmUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzhkNDE3ZmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzhkNDE3ZmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc4ZDQxN2ZlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc4ZDQxN2ZlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9ob21lL0hvbWUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OGQ0MTdmZSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI2ODYxNTljJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGVueXMvUGhwc3Rvcm1Qcm9qZWN0cy9henVyZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdiNjg2MTU5YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdiNjg2MTU5YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdiNjg2MTU5YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI2ODYxNTljJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2I2ODYxNTljJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9sb2dpbi9Mb2dpbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI2ODYxNTljJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9SZWdpc3Rlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2Y4YWJlNmEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmVnaXN0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SZWdpc3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdmOGFiZTZhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2RlbnlzL1BocHN0b3JtUHJvamVjdHMvYXp1cmUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2Y4YWJlNmEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2Y4YWJlNmEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2Y4YWJlNmEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZjhhYmU2YSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3ZjhhYmU2YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbG9naW4vUmVnaXN0ZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZWdpc3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVnaXN0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZjhhYmU2YSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRXZlbnRBZGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjYWZlMDliJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0V2ZW50QWRkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRXZlbnRBZGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0V2ZW50QWRkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFjYWZlMDliJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMWNhZmUwOWJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGVueXMvUGhwc3Rvcm1Qcm9qZWN0cy9henVyZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxY2FmZTA5YicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxY2FmZTA5YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxY2FmZTA5YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRXZlbnRBZGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjYWZlMDliJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFjYWZlMDliJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvanMvY29tcG9uZW50cy9tYXAvRXZlbnRBZGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FdmVudEFkZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXZlbnRBZGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXZlbnRBZGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWNhZmUwOWImc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FdmVudEFkZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xY2FmZTA5YiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXZlbnRBZGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjYWZlMDliJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FdmVudEluZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVmOWU0MmI4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0V2ZW50SW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0V2ZW50SW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vRXZlbnRJbmZvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVmOWU0MmI4JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNWY5ZTQyYjhcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGVueXMvUGhwc3Rvcm1Qcm9qZWN0cy9henVyZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1ZjllNDJiOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1ZjllNDJiOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1ZjllNDJiOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRXZlbnRJbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjllNDJiOCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1ZjllNDJiOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbWFwL0V2ZW50SW5mby52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0V2ZW50SW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXZlbnRJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0V2ZW50SW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZjllNDJiOCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0V2ZW50SW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZjllNDJiOCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXZlbnRJbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjllNDJiOCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRXZlbnRMaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNWNhYjI5NCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FdmVudExpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9FdmVudExpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0V2ZW50TGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xNWNhYjI5NCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjE1Y2FiMjk0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2RlbnlzL1BocHN0b3JtUHJvamVjdHMvYXp1cmUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTVjYWIyOTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTVjYWIyOTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTVjYWIyOTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0V2ZW50TGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTVjYWIyOTQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTVjYWIyOTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL21hcC9FdmVudExpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FdmVudExpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0V2ZW50TGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FdmVudExpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTVjYWIyOTQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FdmVudExpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTVjYWIyOTQmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0V2ZW50TGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTVjYWIyOTQmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0V2ZW50TWFwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kOWY1OTA1NCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FdmVudE1hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0V2ZW50TWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2RlbnlzL1BocHN0b3JtUHJvamVjdHMvYXp1cmUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZDlmNTkwNTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZDlmNTkwNTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZDlmNTkwNTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0V2ZW50TWFwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kOWY1OTA1NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkOWY1OTA1NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL2pzL2NvbXBvbmVudHMvbWFwL0V2ZW50TWFwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXZlbnRNYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTAtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0V2ZW50TWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FdmVudE1hcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDlmNTkwNTQmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FkZENvbW1lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY2OTk3MDc1JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FkZENvbW1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BZGRDb21tZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjY5OTcwNzVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGVueXMvUGhwc3Rvcm1Qcm9qZWN0cy9henVyZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2Njk5NzA3NScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2Njk5NzA3NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2Njk5NzA3NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWRkQ29tbWVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjY5OTcwNzUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjY5OTcwNzUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL21hcC9jb21tZW50cy9BZGRDb21tZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkQ29tbWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkQ29tbWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWRkQ29tbWVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjY5OTcwNzUmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0V2ZW50Q29tbWVudHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgwMzRhMGYyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0V2ZW50Q29tbWVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9FdmVudENvbW1lbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9FdmVudENvbW1lbnRzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgwMzRhMGYyJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiODAzNGEwZjJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGVueXMvUGhwc3Rvcm1Qcm9qZWN0cy9henVyZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc4MDM0YTBmMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc4MDM0YTBmMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc4MDM0YTBmMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRXZlbnRDb21tZW50cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODAzNGEwZjImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignODAzNGEwZjInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy9qcy9jb21wb25lbnRzL21hcC9jb21tZW50cy9FdmVudENvbW1lbnRzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXZlbnRDb21tZW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXZlbnRDb21tZW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FdmVudENvbW1lbnRzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgwMzRhMGYyJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTQtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXZlbnRDb21tZW50cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04MDM0YTBmMiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXZlbnRDb21tZW50cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODAzNGEwZjImc2NvcGVkPXRydWUmXCIiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBWdWUgZnJvbSAndnVlJztcblxuZXhwb3J0IGNvbnN0IGV2ZW50c0VtbWl0ZXIgPSBuZXcgVnVlKCk7IiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXInO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IFZ1ZVNsaWRlciBmcm9tICd2dWUtc2xpZGVyLWNvbXBvbmVudCc7XG5pbXBvcnQgJ3Z1ZS1zbGlkZXItY29tcG9uZW50L3RoZW1lL2RlZmF1bHQuY3NzJztcblxuVnVlLmNvbXBvbmVudCgnVnVlU2xpZGVyJywgVnVlU2xpZGVyKTtcblxubmV3IFZ1ZSh7XG4gIGNvbXBvbmVudHM6IHsgQXBwIH0sXG4gIHRlbXBsYXRlOiAnPEFwcC8+JyxcbiAgcm91dGVyLFxuICBzdG9yZVxufSkuJG1vdW50KCcjYXBwJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgY29uc3QgV0FURVIgPSAnV0FURVJfUE9MTFVUSU9OJztcbmV4cG9ydCBjb25zdCBERUZPUkVTVEFUSU9OID0gJ0RFRk9SRVNUQVRJT04nO1xuZXhwb3J0IGNvbnN0IEdBUkJBR0UgPSAnR0FSQkFHRSc7XG5leHBvcnQgY29uc3QgT1RIRVIgPSAnT1RIRVJfUE9MTFVUSU9OJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvbGx1dGlvbk5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PT0gV0FURVIpIHtcbiAgICByZXR1cm4gJ1dhdGVyIHBvbGx1dGlvbic7XG4gIH1cbiAgaWYgKHR5cGUgPT09IERFRk9SRVNUQVRJT04pIHtcbiAgICByZXR1cm4gJ0RlZm9yZXN0YXRpb24nO1xuICB9XG4gIGlmICh0eXBlID09PSBHQVJCQUdFKSB7XG4gICAgcmV0dXJuICdHYXJiYWdlJztcbiAgfVxuICBpZiAodHlwZSA9PT0gT1RIRVIpIHtcbiAgICByZXR1cm4gJ090aGVyIHBvbGx1dGlvbic7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvbGx1dGlvbkltYWdlU3JjKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT09IFdBVEVSKSB7XG4gICAgcmV0dXJuICcvaW1nL3dhdHRlcl9wb2xsdXRpb24uc3ZnJztcbiAgfVxuICBpZiAodHlwZSA9PT0gREVGT1JFU1RBVElPTikge1xuICAgIHJldHVybiAnL2ltZy9kZWZvcmVzdGF0aW9uLnBuZyc7XG4gIH1cbiAgaWYgKHR5cGUgPT09IEdBUkJBR0UpIHtcbiAgICByZXR1cm4gJy9pbWcvZ2FyYmFnZS5wbmcnO1xuICB9XG4gIGlmICh0eXBlID09PSBPVEhFUikge1xuICAgIHJldHVybiAnL2ltZy9vdGhlcl9wb2xsdXRpb24ucG5nJztcbiAgfVxufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wdXRlZDoge1xuICAgIGlzQXV0aGVudGljYXRlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydzZWN1cml0eS9pc0F1dGhlbnRpY2F0ZWQnXTtcbiAgICB9LFxuICAgIHVzZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snc2VjdXJpdHkvdXNlciddO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lL0hvbWUnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvbG9naW4vTG9naW4nO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbG9naW4vUmVnaXN0ZXInO1xuaW1wb3J0IEFjY291bnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWNjb3VudC9BY2NvdW50XCI7XG5pbXBvcnQgQWJvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvYWJvdXQvQWJvdXRcIjtcblxuVnVlLnVzZShWdWVSb3V0ZXIpO1xuXG5sZXQgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XG4gIG1vZGU6ICdoaXN0b3J5JyxcbiAgcm91dGVzOiBbXG4gICAge1xuICAgICAgcGF0aDogJy9ob21lJyxcbiAgICAgIGNvbXBvbmVudDogSG9tZSxcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgdGl0bGU6ICdFY28gd2FsaydcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvbG9naW4nLFxuICAgICAgY29tcG9uZW50OiBMb2dpbixcbiAgICAgIG1ldGE6IHtcbiAgICAgICAgdGl0bGU6ICdFY28gd2FsayAtIExvZ2luJ1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy9yZWdpc3RlcicsXG4gICAgICBjb21wb25lbnQ6IFJlZ2lzdGVyLFxuICAgICAgbWV0YToge1xuICAgICAgICB0aXRsZTogJ0VjbyB3YWxrIC0gUmVnaXN0ZXInXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2FjY291bnQnLFxuICAgICAgY29tcG9uZW50OiBBY2NvdW50LFxuICAgICAgbWV0YToge1xuICAgICAgICByZXF1aXJlc0F1dGg6IHRydWUsXG4gICAgICAgIHRpdGxlOiAnRWNvIHdhbGsgLSBNeSBhY2NvdW50J1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy9hYm91dCcsXG4gICAgICBjb21wb25lbnQ6IEFib3V0LFxuICAgICAgbWV0YToge1xuICAgICAgICB0aXRsZTogJ0VjbyB3YWxrIC0gQWJvdXQnXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnKicsXG4gICAgICByZWRpcmVjdDogJy9ob21lJ1xuICAgIH1cbiAgXSxcbn0pO1xuXG5yb3V0ZXIuYmVmb3JlRWFjaCgodG8sIGZyb20sIG5leHQpID0+IHtcbiAgZG9jdW1lbnQudGl0bGUgPSB0by5tZXRhLnRpdGxlO1xuICBpZiAodG8ubWF0Y2hlZC5zb21lKHJlY29yZCA9PiByZWNvcmQubWV0YS5yZXF1aXJlc0F1dGgpKSB7XG4gICAgLy8gdGhpcyByb3V0ZSByZXF1aXJlcyBhdXRoLCBjaGVjayBpZiBsb2dnZWQgaW5cbiAgICAvLyBpZiBub3QsIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2UuXG4gICAgaWYgKHN0b3JlLmdldHRlcnNbJ3NlY3VyaXR5L2lzQXV0aGVudGljYXRlZCddKSB7XG4gICAgICBuZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHQoe1xuICAgICAgICBwYXRoOiAnL2xvZ2luJyxcbiAgICAgICAgcXVlcnk6IHtyZWRpcmVjdDogdG8uZnVsbFBhdGh9XG4gICAgICB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbmV4dCgpOyAvLyBtYWtlIHN1cmUgdG8gYWx3YXlzIGNhbGwgbmV4dCgpIVxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyOyIsImltcG9ydCBBY2NvdW50QVBJIGZyb20gJy4uL2FwaS9hY2NvdW50JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lc3BhY2VkOiB0cnVlLFxuICBzdGF0ZToge1xuICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgZXJyb3I6IG51bGxcbiAgfSxcbiAgbXV0YXRpb25zOiB7XG4gICAgc3RhcnRMb2FkaW5nKHN0YXRlKSB7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgIH0sXG4gICAgc3VjY2Vzc0xvYWRpbmcoc3RhdGUpIHtcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgIH0sXG4gICAgZXJyb3JMb2FkaW5nKHN0YXRlLCBlcnJvcikge1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5lcnJvciA9IGVycm9yO1xuICAgIH0sXG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICBhc3luYyBtb2RpZnlBY2NvdW50KHtjb21taXR9LCBwYXlsb2FkKSB7XG4gICAgICBjb21taXQoJ3N0YXJ0TG9hZGluZycpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgQWNjb3VudEFQSS5tb2RpZnlBY2NvdW50KHBheWxvYWQuZW1haWwsIHBheWxvYWQuZmlyc3RuYW1lLCBwYXlsb2FkLmxhc3RuYW1lKTtcbiAgICAgICAgY29tbWl0KCdzdWNjZXNzTG9hZGluZycpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbW1pdCgnZXJyb3JMb2FkaW5nJywgZXJyb3IpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIGNoYW5nZVBhc3N3b3JkKHtjb21taXR9LCBwYXlsb2FkKSB7XG4gICAgICBjb21taXQoJ3N0YXJ0TG9hZGluZycpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgQWNjb3VudEFQSS5jaGFuZ2VQYXNzd29yZChwYXlsb2FkLnBhc3N3b3JkLCBwYXlsb2FkLnJlcGVhdFBhc3N3b3JkKTtcbiAgICAgICAgY29tbWl0KCdzdWNjZXNzTG9hZGluZycpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbW1pdCgnZXJyb3JMb2FkaW5nJywgZXJyb3IpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGdldHRlcnM6IHtcbiAgICBpc0xvYWRpbmcoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5pc0xvYWRpbmc7XG4gICAgfSxcbiAgICBoYXNFcnJvcihzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmVycm9yICE9PSBudWxsO1xuICAgIH0sXG4gICAgZXJyb3Ioc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5lcnJvcjtcbiAgICB9XG4gIH0sXG59IiwiaW1wb3J0IENvbW1lbnRzQVBJIGZyb20gJy4uL2FwaS9jb21tZW50cyc7XG5pbXBvcnQge2V2ZW50c0VtbWl0ZXJ9IGZyb20gXCIuLi9ldmVudHMvZW1pdHRlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lc3BhY2VkOiB0cnVlLFxuICBzdGF0ZToge30sXG4gIG11dGF0aW9uczoge1xuICAgIGFkZENvbW1lbnQoc3RhdGUsIHBheWxvYWQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmV2ZW50cy5vcGVuZWRFdmVudFsnaWQnXSkge1xuICAgICAgICB0aGlzLnN0YXRlLmV2ZW50cy5vcGVuZWRFdmVudC5jb21tZW50cy5wdXNoKHBheWxvYWQpO1xuICAgICAgICBldmVudHNFbW1pdGVyLiRlbWl0KCdhZGRDb21tZW50Jyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhZGRTY29yZShzdGF0ZSwgcGF5bG9hZCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuZXZlbnRzLm9wZW5lZEV2ZW50WydpZCddKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuZXZlbnRzLm9wZW5lZEV2ZW50LmNvbW1lbnRzLmZvckVhY2goY29tbWVudCA9PiB7XG4gICAgICAgICAgaWYgKGNvbW1lbnQuaWQgPT09IHBheWxvYWQpIHtcbiAgICAgICAgICAgIGNvbW1lbnQuc2NvcmUrKztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlU2NvcmUoc3RhdGUsIHBheWxvYWQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmV2ZW50cy5vcGVuZWRFdmVudFsnaWQnXSkge1xuICAgICAgICB0aGlzLnN0YXRlLmV2ZW50cy5vcGVuZWRFdmVudC5jb21tZW50cy5mb3JFYWNoKGNvbW1lbnQgPT4ge1xuICAgICAgICAgIGlmIChjb21tZW50LmlkID09PSBwYXlsb2FkKSB7XG4gICAgICAgICAgICBjb21tZW50LnNjb3JlLS07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICBhc3luYyBhZGRDb21tZW50KHtjb21taXR9LCBwYXlsb2FkKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IENvbW1lbnRzQVBJLmFkZENvbW1lbnQocGF5bG9hZC50ZXh0LCBwYXlsb2FkLmV2ZW50SWQpO1xuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgY29tbWl0KCdhZGRDb21tZW50JywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBhZGRDb21tZW50U2NvcmUoe2NvbW1pdH0sIHBheWxvYWQpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQ29tbWVudHNBUEkuYWRkQ29tbWVudFNjb3JlKHBheWxvYWQpO1xuICAgICAgY29tbWl0KCdhZGRTY29yZScsIHBheWxvYWQpO1xuICAgIH0sXG4gICAgYXN5bmMgcmVtb3ZlQ29tbWVudFNjb3JlKHtjb21taXR9LCBwYXlsb2FkKSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IENvbW1lbnRzQVBJLnJlbW92ZUNvbW1lbnRTY29yZShwYXlsb2FkKTtcbiAgICAgIGNvbW1pdCgncmVtb3ZlU2NvcmUnLCBwYXlsb2FkKTtcbiAgICB9XG4gIH0sXG4gIGdldHRlcnM6IHt9LFxufSIsImltcG9ydCBFdmVudHNBUEkgZnJvbSAnLi4vYXBpL2V2ZW50cyc7XG5pbXBvcnQge2V2ZW50c0VtbWl0ZXJ9IGZyb20gJy4uL2V2ZW50cy9lbWl0dGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZXNwYWNlZDogdHJ1ZSxcbiAgc3RhdGU6IHtcbiAgICBtYXJrZXJzOiBbXSxcbiAgICBzZWxlY3RlZEV2ZW50czogW10sXG4gICAgb3BlbmVkRXZlbnQ6IGZhbHNlXG4gIH0sXG4gIG11dGF0aW9uczoge1xuICAgIHNldE1hcmtlcnMoc3RhdGUsIHBheWxvYWQpIHtcbiAgICAgIHN0YXRlLm1hcmtlcnMgPSBwYXlsb2FkO1xuICAgICAgZXZlbnRzRW1taXRlci4kZW1pdCgnc2V0TWFya2VycycpO1xuICAgIH0sXG4gICAgc2V0U2VsZWN0ZWRFdmVudHMoc3RhdGUsIHBheWxvYWQpIHtcbiAgICAgIHN0YXRlLnNlbGVjdGVkRXZlbnRzID0gcGF5bG9hZDtcbiAgICAgIGV2ZW50c0VtbWl0ZXIuJGVtaXQoJ3NldFNlbGVjdGVkRXZlbnRzJyk7XG4gICAgfSxcbiAgICBzZXRPcGVuZWRFdmVudChzdGF0ZSwgcGF5bG9hZCkge1xuICAgICAgc3RhdGUub3BlbmVkRXZlbnQgPSBwYXlsb2FkO1xuICAgICAgZXZlbnRzRW1taXRlci4kZW1pdCgnc2V0T3BlbmVkRXZlbnQnLCBwYXlsb2FkKTtcbiAgICB9XG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICBhc3luYyBhZGRFdmVudCh7Y29tbWl0fSwgcGF5bG9hZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgRXZlbnRzQVBJLmFkZEV2ZW50KFxuICAgICAgICAgIHBheWxvYWQudHlwZSxcbiAgICAgICAgICBwYXlsb2FkLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIHBheWxvYWQuaW1hZ2VzLFxuICAgICAgICAgIHBheWxvYWQucG9zaXRpb24sXG4gICAgICAgICAgcGF5bG9hZC5sZXZlbFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgZmV0Y2hNYXJrZXJzKHtjb21taXR9LCBwYXlsb2FkKSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBFdmVudHNBUEkuZ2V0TWFya2VycygpO1xuICAgICAgICBjb21taXQoJ3NldE1hcmtlcnMnLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIHNlbGVjdE1hcmtlcih7Y29tbWl0fSwgcGF5bG9hZCkge1xuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgRXZlbnRzQVBJLmdldEV2ZW50cyhwYXlsb2FkLmxvbmdpdHVkZSwgcGF5bG9hZC5sYXRpdHVkZSk7XG4gICAgICBjb21taXQoJ3NldFNlbGVjdGVkRXZlbnRzJywgcmVzcG9uc2UuZGF0YSk7XG4gICAgfSxcbiAgICBhc3luYyBjbGVhclNlbGVjdGVkRXZlbnRzKHtjb21taXR9KSB7XG4gICAgICBjb21taXQoJ3NldFNlbGVjdGVkRXZlbnRzJywgW10pO1xuICAgIH0sXG4gICAgYXN5bmMgc2V0T3BlbmVkRXZlbnQoe2NvbW1pdH0sIHBheWxvYWQpIHtcbiAgICAgIGNvbW1pdCgnc2V0T3BlbmVkRXZlbnQnLCBwYXlsb2FkKTtcbiAgICB9LFxuICAgIGFzeW5jIHRvZ2dsZUV2ZW50VXNlclJlc3VsdCh7Y29tbWl0fSwgcGF5bG9hZCkge1xuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgRXZlbnRzQVBJLnRvZ2dsZUV2ZW50UmVzdWx0KHBheWxvYWQpO1xuICAgICAgY29tbWl0KCdzZXRPcGVuZWRFdmVudCcsIHJlc3BvbnNlLmRhdGEpO1xuICAgIH0sXG4gICAgYXN5bmMgY2xlYW5NYXJrZXJzKHtjb21taXR9LCBwYXlsb2FkKSB7XG4gICAgICBjb21taXQoJ3NldE1hcmtlcnMnLCBbXSk7XG4gICAgfVxuICB9LFxuICBnZXR0ZXJzOiB7XG4gICAgbWFya2VycyhzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLm1hcmtlcnM7XG4gICAgfSxcbiAgICBzZWxlY3RlZEV2ZW50cyhzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLnNlbGVjdGVkRXZlbnRzO1xuICAgIH0sXG4gICAgb3BlbmVkRXZlbnQoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5vcGVuZWRFdmVudDtcbiAgICB9XG4gIH0sXG59IiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCc7XG5pbXBvcnQgU2VjdXJpdHlNb2R1bGUgZnJvbSAnLi9zZWN1cml0eSc7XG5pbXBvcnQgQWNjb3VudE1vZHVsZSBmcm9tICcuL2FjY291bnQnO1xuaW1wb3J0IEV2ZW50c01vZHVsZSBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgQ29tbWVudHNNb2R1bGUgZnJvbSAnLi9jb21tZW50cyc7XG5cblZ1ZS51c2UoVnVleCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcbiAgbW9kdWxlczoge1xuICAgIHNlY3VyaXR5OiBTZWN1cml0eU1vZHVsZSxcbiAgICBhY2NvdW50OiBBY2NvdW50TW9kdWxlLFxuICAgIGV2ZW50czogRXZlbnRzTW9kdWxlLFxuICAgIGNvbW1lbnRzOiBDb21tZW50c01vZHVsZVxuICB9XG59KTsiLCJpbXBvcnQgU2VjdXJpdHlBUEkgZnJvbSAnLi4vYXBpL3NlY3VyaXR5JztcblxuY29uc3QgQVVUSEVOVElDQVRJTkcgPSAnQVVUSEVOVElDQVRJTkcnLFxuICBBVVRIRU5USUNBVElOR19TVUNDRVNTID0gJ0FVVEhFTlRJQ0FUSU5HX1NVQ0NFU1MnLFxuICBBVVRIRU5USUNBVElOR19FUlJPUiA9ICdBVVRIRU5USUNBVElOR19FUlJPUicsXG4gIFBST1ZJRElOR19EQVRBX09OX1JFRlJFU0hfU1VDQ0VTUyA9ICdQUk9WSURJTkdfREFUQV9PTl9SRUZSRVNIX1NVQ0NFU1MnLFxuICBSRUdJU1RSQVRJT04gPSAnUkVHSVNUUkFUSU9OJyxcbiAgUkVHSVNUUkFUSU9OX1NVQ0NFU1MgPSAnUkVHSVNUUkFUSU9OX1NVQ0NFU1MnLFxuICBSRUdJU1RSQVRJT05fRVJST1IgPSAnUkVHSVNUUkFUSU9OX0VSUk9SJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lc3BhY2VkOiB0cnVlLFxuICBzdGF0ZToge1xuICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgZXJyb3I6IG51bGwsXG4gICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgICB1c2VyOiBudWxsXG4gIH0sXG4gIG11dGF0aW9uczoge1xuICAgIFtBVVRIRU5USUNBVElOR10oc3RhdGUpIHtcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICBzdGF0ZS5pc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgIHN0YXRlLnVzZXIgPSBudWxsO1xuICAgIH0sXG4gICAgW0FVVEhFTlRJQ0FUSU5HX1NVQ0NFU1NdKHN0YXRlLCB1c2VyKSB7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmVycm9yID0gbnVsbDtcbiAgICAgIHN0YXRlLmlzQXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgICBzdGF0ZS51c2VyID0gdXNlcjtcbiAgICB9LFxuICAgIFtBVVRIRU5USUNBVElOR19FUlJPUl0oc3RhdGUsIGVycm9yKSB7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmVycm9yID0gZXJyb3I7XG4gICAgICBzdGF0ZS5pc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgIHN0YXRlLnVzZXIgPSBudWxsO1xuICAgIH0sXG4gICAgW1BST1ZJRElOR19EQVRBX09OX1JFRlJFU0hfU1VDQ0VTU10oc3RhdGUsIHBheWxvYWQpIHtcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgICAgc3RhdGUuaXNBdXRoZW50aWNhdGVkID0gcGF5bG9hZC5pc0F1dGhlbnRpY2F0ZWQ7XG4gICAgICBzdGF0ZS51c2VyID0gcGF5bG9hZC51c2VyO1xuICAgIH0sXG4gICAgW1JFR0lTVFJBVElPTl0oc3RhdGUpIHtcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICBzdGF0ZS5pc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgIHN0YXRlLnVzZXIgPSBudWxsO1xuICAgIH0sXG4gICAgW1JFR0lTVFJBVElPTl9TVUNDRVNTXShzdGF0ZSwgdXNlcikge1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICBzdGF0ZS5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICAgICAgc3RhdGUudXNlciA9IHVzZXI7XG4gICAgfSxcbiAgICBbUkVHSVNUUkFUSU9OX0VSUk9SXShzdGF0ZSwgZXJyb3IpIHtcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgc3RhdGUuZXJyb3IgPSBlcnJvcjtcbiAgICAgIHN0YXRlLmlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgc3RhdGUudXNlciA9IG51bGw7XG4gICAgfSxcbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIGFzeW5jIGxvZ2luKHtjb21taXR9LCBwYXlsb2FkKSB7XG4gICAgICBjb21taXQoQVVUSEVOVElDQVRJTkcpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgU2VjdXJpdHlBUEkubG9naW4ocGF5bG9hZC5lbWFpbCwgcGF5bG9hZC5wYXNzd29yZCk7XG4gICAgICAgIGNvbW1pdChBVVRIRU5USUNBVElOR19TVUNDRVNTLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb21taXQoQVVUSEVOVElDQVRJTkdfRVJST1IsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICBvblJlZnJlc2goe2NvbW1pdH0sIHBheWxvYWQpIHtcbiAgICAgIGNvbW1pdChQUk9WSURJTkdfREFUQV9PTl9SRUZSRVNIX1NVQ0NFU1MsIHBheWxvYWQpO1xuICAgIH0sXG4gICAgYXN5bmMgcmVnaXN0ZXIoe2NvbW1pdH0sIHBheWxvYWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IFNlY3VyaXR5QVBJLnJlZ2lzdGVyKHBheWxvYWQuZW1haWwsIHBheWxvYWQucGFzc3dvcmQsIHBheWxvYWQuZmlyc3RuYW1lLCBwYXlsb2FkLmxhc3RuYW1lKTtcbiAgICAgICAgY29tbWl0KFJFR0lTVFJBVElPTl9TVUNDRVNTLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb21taXQoUkVHSVNUUkFUSU9OX0VSUk9SLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZ2V0dGVyczoge1xuICAgIGlzTG9hZGluZyhzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmlzTG9hZGluZztcbiAgICB9LFxuICAgIGhhc0Vycm9yKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuZXJyb3IgIT09IG51bGw7XG4gICAgfSxcbiAgICBlcnJvcihzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmVycm9yO1xuICAgIH0sXG4gICAgaXNBdXRoZW50aWNhdGVkKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuaXNBdXRoZW50aWNhdGVkO1xuICAgIH0sXG4gICAgaGFzUm9sZShzdGF0ZSkge1xuICAgICAgcmV0dXJuIHJvbGUgPT4ge1xuICAgICAgICByZXR1cm4gc3RhdGUudXNlci5yb2xlcy5pbmRleE9mKHJvbGUpICE9PSAtMTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHVzZXIoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS51c2VyO1xuICAgIH1cbiAgfSxcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodFwiPlxuICAgICAgPHJvdXRlci1saW5rXG4gICAgICAgICAgY2xhc3M9XCJuYXZiYXItYnJhbmRcIlxuICAgICAgICAgIHRvPVwiL2hvbWVcIlxuICAgICAgPlxuICAgICAgICA8aW1nIGNsYXNzPVwibG9nb1wiIGFsdD1cImxvZ29cIiBzcmM9XCIvaW1nL2xvZ28ucG5nXCI+XG4gICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhck5hdlwiXG4gICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdlwiXG4gICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXZcbiAgICAgICAgICBpZD1cIm5hdmJhck5hdlwiXG4gICAgICAgICAgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIlxuICAgICAgPlxuICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2XCI+XG4gICAgICAgICAgPHJvdXRlci1saW5rXG4gICAgICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW1cIlxuICAgICAgICAgICAgICB0YWc9XCJsaVwiXG4gICAgICAgICAgICAgIHRvPVwiL2hvbWVcIlxuICAgICAgICAgICAgICBhY3RpdmUtY2xhc3M9XCJhY3RpdmVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIj5Ib21lPC9hPlxuICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgPHJvdXRlci1saW5rXG4gICAgICAgICAgICAgIHYtaWY9XCJpc0F1dGhlbnRpY2F0ZWRcIlxuICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtXCJcbiAgICAgICAgICAgICAgdGFnPVwibGlcIlxuICAgICAgICAgICAgICB0bz1cIi9hY2NvdW50XCJcbiAgICAgICAgICAgICAgYWN0aXZlLWNsYXNzPVwiYWN0aXZlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCI+TXkgYWNjb3VudDwvYT5cbiAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgIDxyb3V0ZXItbGlua1xuICAgICAgICAgICAgICB2LWlmPVwiIWlzQXV0aGVudGljYXRlZFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW1cIlxuICAgICAgICAgICAgICB0YWc9XCJsaVwiXG4gICAgICAgICAgICAgIHRvPVwiL2xvZ2luXCJcbiAgICAgICAgICAgICAgYWN0aXZlLWNsYXNzPVwiYWN0aXZlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCI+TG9naW48L2E+XG4gICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICA8cm91dGVyLWxpbmtcbiAgICAgICAgICAgICAgdi1pZj1cIiFpc0F1dGhlbnRpY2F0ZWRcIlxuICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtXCJcbiAgICAgICAgICAgICAgdGFnPVwibGlcIlxuICAgICAgICAgICAgICB0bz1cIi9yZWdpc3RlclwiXG4gICAgICAgICAgICAgIGFjdGl2ZS1jbGFzcz1cImFjdGl2ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiPlJlZ2lzdHJhdGlvbjwvYT5cbiAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgIDxyb3V0ZXItbGlua1xuICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtXCJcbiAgICAgICAgICAgICAgdGFnPVwibGlcIlxuICAgICAgICAgICAgICB0bz1cIi9hYm91dFwiXG4gICAgICAgICAgICAgIGFjdGl2ZS1jbGFzcz1cImFjdGl2ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiPkFib3V0PC9hPlxuICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICAgIHYtaWY9XCJpc0F1dGhlbnRpY2F0ZWRcIlxuICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzPVwibmF2LWxpbmtcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIvYXBpL3NlY3VyaXR5L2xvZ291dFwiXG4gICAgICAgICAgICA+TG9nb3V0PC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cblxuICAgIDxyb3V0ZXItdmlldy8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIkFwcFwiLFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzW1wic2VjdXJpdHkvaXNBdXRoZW50aWNhdGVkXCJdXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgIGxldCBpc0F1dGhlbnRpY2F0ZWQgPSBKU09OLnBhcnNlKHRoaXMuJHBhcmVudC4kZWwuYXR0cmlidXRlc1tcImRhdGEtaXMtYXV0aGVudGljYXRlZFwiXS52YWx1ZSksXG4gICAgICAgIHVzZXIgPSBKU09OLnBhcnNlKHRoaXMuJHBhcmVudC4kZWwuYXR0cmlidXRlc1tcImRhdGEtdXNlclwiXS52YWx1ZSk7XG5cbiAgICAgIGxldCBwYXlsb2FkID0ge2lzQXV0aGVudGljYXRlZDogaXNBdXRoZW50aWNhdGVkLCB1c2VyOiB1c2VyfTtcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwic2VjdXJpdHkvb25SZWZyZXNoXCIsIHBheWxvYWQpO1xuXG4gICAgICBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHVuZGVmaW5lZCwgKGVycikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge1xuICAgICAgICAgIGlmIChlcnIucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtwYXRoOiBcIi9sb2dpblwifSlcbiAgICAgICAgICB9IGVsc2UgaWYgKGVyci5yZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xuICAgICAgICAgICAgZG9jdW1lbnQub3BlbigpO1xuICAgICAgICAgICAgZG9jdW1lbnQud3JpdGUoZXJyLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgZG9jdW1lbnQuY2xvc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG4gIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgICAgY2xhc3M9XCJhbGVydFwiXG4gICAgICByb2xlPVwiYWxlcnRcIlxuICA+XG4gICAge3sgZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvciB9fVxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIkVycm9yTWVzc2FnZVwiLFxuICAgIHByb3BzOiB7XG4gICAgICBlcnJvcjoge1xuICAgICAgICB0eXBlOiBFcnJvcixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgIH1cbiAgICB9LFxuICB9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgQWJvdXRcbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG5cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGxvZ2luLXBhZ2UgYWNjb3VudC1wYWdlXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBjb2xcIj5cbiAgICAgIDxwPk15IGFjY291bnQ8L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIHYtaWY9XCJpc0F1dGhlbnRpY2F0ZWQgJiYgdXNlciAhPT0gbnVsbFwiPlxuICAgICAgPGZvcm0gY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbCBhZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuZW1haWxcIlxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZmlyc3RuYW1lXCI+Rmlyc3RuYW1lPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuZmlyc3RuYW1lXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwibGFzdG5hbWVcIj5MYXN0bmFtZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmxhc3RuYW1lXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgOmRpc2FibGVkPVwidXNlci5lbWFpbC5sZW5ndGggPT09IDAgfHwgdXNlci5maXJzdG5hbWUubGVuZ3RoID09PSAwIHx8IHVzZXIubGFzdG5hbWUubGVuZ3RoID09PSAwIHx8IGlzTG9hZGluZ1wiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuXCJcbiAgICAgICAgICAgIEBjbGljaz1cInNhdmVBY2NvdW50U2V0dGluZ3MoKVwiPlxuICAgICAgICAgIFNhdmVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGNvbFwiPlxuICAgICAgPHAgY2xhc3M9XCJtLTAgcHQtM1wiPkNoYW5nZSBwYXNzd29yZDwvcD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjYXJkIG10LTMgcGFzc3dvcmQtY2FyZFwiPlxuICAgICAgPGZvcm0gY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJyZXBlYXRQYXNzd29yZFwiPlJlcGVhdCBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJyZXBlYXRQYXNzd29yZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICA6ZGlzYWJsZWQ9XCJwYXNzd29yZCAhPT0gcmVwZWF0UGFzc3dvcmQgfHwgcGFzc3dvcmQubGVuZ3RoIDwgNlwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuXCJcbiAgICAgICAgICAgIEBjbGljaz1cInNhdmVQYXNzd29yZFNldHRpbmdzKClcIlxuICAgICAgICA+XG4gICAgICAgICAgU2F2ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXZcbiAgICAgICAgdi1pZj1cImlzTG9hZGluZ1wiXG4gICAgICAgIGNsYXNzPVwicm93IGNvbFwiXG4gICAgPlxuICAgICAgPHA+TG9hZGluZy4uLjwvcD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXZcbiAgICAgICAgdi1lbHNlLWlmPVwiaGFzRXJyb3JcIlxuICAgICAgICBjbGFzcz1cInJvdyBjb2xcIlxuICAgID5cbiAgICAgIDxlcnJvci1tZXNzYWdlIDplcnJvcj1cImVycm9yXCIvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB1c2VyIGZyb20gJy4uLy4uL21peGlucy91c2VyJztcbiAgaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi9FcnJvck1lc3NhZ2UnO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBFcnJvck1lc3NhZ2VcbiAgICB9LFxuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIHJlcGVhdFBhc3N3b3JkOiAnJyxcbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGFzeW5jIHNhdmVBY2NvdW50U2V0dGluZ3MoKSB7XG4gICAgICAgIGxldCBwYXlsb2FkID0ge1xuICAgICAgICAgIGVtYWlsOiB0aGlzLnVzZXIuZW1haWwsXG4gICAgICAgICAgZmlyc3RuYW1lOiB0aGlzLnVzZXIuZmlyc3RuYW1lLFxuICAgICAgICAgIGxhc3RuYW1lOiB0aGlzLnVzZXIubGFzdG5hbWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYWNjb3VudC9tb2RpZnlBY2NvdW50JywgcGF5bG9hZCk7XG4gICAgICAgIGlmIChyZXNwb25zZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdzZWN1cml0eS9vblJlZnJlc2gnLCB7XG4gICAgICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6IHRydWUsXG4gICAgICAgICAgICB1c2VyOiByZXNwb25zZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYXN5bmMgc2F2ZVBhc3N3b3JkU2V0dGluZ3MoKSB7XG4gICAgICAgIGxldCBwYXlsb2FkID0ge1xuICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgICAgIHJlcGVhdFBhc3N3b3JkOiB0aGlzLnJlcGVhdFBhc3N3b3JkXG4gICAgICAgIH07XG4gICAgICAgIGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhY2NvdW50L2NoYW5nZVBhc3N3b3JkJywgcGF5bG9hZCk7XG4gICAgICAgIGlmICghdGhpcy5oYXNFcnJvcikge1xuICAgICAgICAgIHRoaXMucGFzc3dvcmQgPSAnJztcbiAgICAgICAgICB0aGlzLnJlcGVhdFBhc3N3b3JkID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICBpc0xvYWRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydhY2NvdW50L2lzTG9hZGluZyddO1xuICAgICAgfSxcbiAgICAgIGhhc0Vycm9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snYWNjb3VudC9oYXNFcnJvciddO1xuICAgICAgfSxcbiAgICAgIGVycm9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snYWNjb3VudC9lcnJvciddO1xuICAgICAgfVxuICAgIH0sXG4gICAgbWl4aW5zOiBbdXNlcl0sXG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuIC5hY2NvdW50LXBhZ2Uge1xuICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiB9XG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBob21lLXBhZ2VcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGNvbFwiPlxuICAgICAgPGgxPldlbGNvbWUgdG8gRWNvV2FsazwvaDE+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBjb2xcIj5cbiAgICAgIDxwIHYtaWY9XCJpc0F1dGhlbnRpY2F0ZWQgJiYgdXNlciAhPT0gbnVsbFwiPlxuICAgICAgICB7eyAnSGVsbG8sICcgKyB1c2VyLmZpcnN0bmFtZSArICcgJyArIHVzZXIubGFzdG5hbWUgfX1cbiAgICAgIDwvcD5cbiAgICAgIDxwIHYtZWxzZT5cbiAgICAgICAgVHJ5IHRvIHJlZ2lzdGVyIG9yIGxvZyBpbiB0byBiZSBhYmxlIHRvIHBhcnRpY2lwYXRlIGluIEVjb1dhbGsgZ2FtZS5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaW50cm8taW1nLWhvbGRlclwiPlxuICAgICAgPGltZyBhbHQ9XCJpbnRyby1waG90b1wiIGNsYXNzPVwiaW50cm9cIiBzcmM9XCIvaW1nL2Vjby5wbmdcIj5cbiAgICA8L2Rpdj5cbiAgICA8ZXZlbnQtbWFwIHYtaWY9XCJpc0F1dGhlbnRpY2F0ZWRcIj48L2V2ZW50LW1hcD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgdXNlciBmcm9tICcuLi8uLi9taXhpbnMvdXNlcic7XG4gIGltcG9ydCBFdmVudE1hcCBmcm9tICcuLi8uLi9jb21wb25lbnRzL21hcC9FdmVudE1hcCc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG1peGluczogW3VzZXJdLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIEV2ZW50TWFwXG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbG9naW4tcGFnZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgY29sXCI+XG4gICAgICA8cD5QbGVhc2UsIGxvZyBpbjwvcD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICA8Zm9ybSBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIGFkZHJlc3NcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTRcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC00XCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZW1haWwubGVuZ3RoID09PSAwIHx8IHBhc3N3b3JkLmxlbmd0aCA9PT0gMCB8fCBpc0xvYWRpbmdcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGxvZy1idG5cIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cInBlcmZvcm1Mb2dpbigpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXZcbiAgICAgICAgdi1pZj1cImlzTG9hZGluZ1wiXG4gICAgICAgIGNsYXNzPVwicm93IGNvbFwiXG4gICAgPlxuICAgICAgPHA+TG9hZGluZy4uLjwvcD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXZcbiAgICAgICAgdi1lbHNlLWlmPVwiaGFzRXJyb3JcIlxuICAgICAgICBjbGFzcz1cInJvdyBjb2xcIlxuICAgID5cbiAgICAgIDxlcnJvci1tZXNzYWdlIDplcnJvcj1cImVycm9yXCIvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlXCI7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiTG9naW5cIixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBFcnJvck1lc3NhZ2UsXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiXG4gICAgICB9O1xuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIGlzTG9hZGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnNbXCJzZWN1cml0eS9pc0xvYWRpbmdcIl07XG4gICAgICB9LFxuICAgICAgaGFzRXJyb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzW1wic2VjdXJpdHkvaGFzRXJyb3JcIl07XG4gICAgICB9LFxuICAgICAgZXJyb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzW1wic2VjdXJpdHkvZXJyb3JcIl07XG4gICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgbGV0IHJlZGlyZWN0ID0gdGhpcy4kcm91dGUucXVlcnkucmVkaXJlY3Q7XG5cbiAgICAgIGlmICh0aGlzLiRzdG9yZS5nZXR0ZXJzW1wic2VjdXJpdHkvaXNBdXRoZW50aWNhdGVkXCJdKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVkaXJlY3QgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7cGF0aDogcmVkaXJlY3R9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7cGF0aDogXCIvaG9tZVwifSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGFzeW5jIHBlcmZvcm1Mb2dpbigpIHtcbiAgICAgICAgbGV0IHBheWxvYWQgPSB7ZW1haWw6IHRoaXMuJGRhdGEuZW1haWwsIHBhc3N3b3JkOiB0aGlzLiRkYXRhLnBhc3N3b3JkfSxcbiAgICAgICAgICByZWRpcmVjdCA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnJlZGlyZWN0O1xuXG4gICAgICAgIGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwic2VjdXJpdHkvbG9naW5cIiwgcGF5bG9hZCk7XG4gICAgICAgIGlmICghdGhpcy4kc3RvcmUuZ2V0dGVyc1tcInNlY3VyaXR5L2hhc0Vycm9yXCJdKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiByZWRpcmVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe3BhdGg6IHJlZGlyZWN0fSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtwYXRoOiBcIi9ob21lXCJ9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciByZWdpc3Rlci1wYWdlXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBjb2xcIj5cbiAgICAgIDxwPlBsZWFzZSwgcmVnaXN0ZXIgeW91ciBwcm9maWxlPC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgIDxmb3JtIGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+IFxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB2LW1vZGVsPVwiZW1haWxcIlxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIGFkZHJlc3NcIlxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4gXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJmaXJzdG5hbWVcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3RuYW1lXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJsYXN0bmFtZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0bmFtZVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB2LW1vZGVsPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIDpkaXNhYmxlZD1cImVtYWlsLmxlbmd0aCA9PT0gMCB8fCBwYXNzd29yZC5sZW5ndGggPT09IDAgfHwgaXNMb2FkaW5nXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3M9XCJidG4gcmVnLWJ0blwiXG4gICAgICAgICAgICBAY2xpY2s9XCJwZXJmb3JtUmVnaXN0ZXIoKVwiXG4gICAgICAgID5cbiAgICAgICAgICBSZWdpc3RlclxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXZcbiAgICAgICAgdi1pZj1cImlzTG9hZGluZ1wiXG4gICAgICAgIGNsYXNzPVwicm93IGNvbFwiXG4gICAgPlxuICAgICAgPHA+TG9hZGluZy4uLjwvcD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXZcbiAgICAgICAgdi1lbHNlLWlmPVwiaGFzRXJyb3JcIlxuICAgICAgICBjbGFzcz1cInJvdyBjb2xcIlxuICAgID5cbiAgICAgIDxlcnJvci1tZXNzYWdlIDplcnJvcj1cImVycm9yXCIvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlXCI7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiUmVnaXN0ZXJcIixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBFcnJvck1lc3NhZ2UsXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmlyc3RuYW1lOiBcIlwiLFxuICAgICAgICBsYXN0bmFtZTogXCJcIixcbiAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiXG4gICAgICB9O1xuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIGlzTG9hZGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnNbXCJzZWN1cml0eS9pc0xvYWRpbmdcIl07XG4gICAgICB9LFxuICAgICAgaGFzRXJyb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzW1wic2VjdXJpdHkvaGFzRXJyb3JcIl07XG4gICAgICB9LFxuICAgICAgZXJyb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzW1wic2VjdXJpdHkvZXJyb3JcIl07XG4gICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgbGV0IHJlZGlyZWN0ID0gdGhpcy4kcm91dGUucXVlcnkucmVkaXJlY3Q7XG5cbiAgICAgIGlmICh0aGlzLiRzdG9yZS5nZXR0ZXJzW1wic2VjdXJpdHkvaXNBdXRoZW50aWNhdGVkXCJdKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVkaXJlY3QgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7cGF0aDogcmVkaXJlY3R9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7cGF0aDogXCIvaG9tZVwifSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGFzeW5jIHBlcmZvcm1SZWdpc3RlcigpIHtcbiAgICAgICAgbGV0IHBheWxvYWQgPSB7XG4gICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgICAgICAgZmlyc3RuYW1lOiB0aGlzLmZpcnN0bmFtZSxcbiAgICAgICAgICAgIGxhc3RuYW1lOiB0aGlzLmxhc3RuYW1lXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZWRpcmVjdCA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnJlZGlyZWN0O1xuXG4gICAgICAgIGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwic2VjdXJpdHkvcmVnaXN0ZXJcIiwgcGF5bG9hZCk7XG4gICAgICAgIGlmICghdGhpcy4kc3RvcmUuZ2V0dGVyc1tcInNlY3VyaXR5L2hhc0Vycm9yXCJdKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiByZWRpcmVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe3BhdGg6IHJlZGlyZWN0fSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtwYXRoOiBcIi9ob21lXCJ9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImV2ZW50LWFkZFwiIHYtaWY9XCJvcGVuZWRFdmVudCAhPT0gZmFsc2UgJiYgb3BlbmVkRXZlbnQudHlwZSA9PT0gJ2FkZCdcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgQGNsaWNrPVwiY2xvc2VBZGRFdmVudFwiXG4gICAgICAgICAgICBjbGFzcz1cImNsb3NlXCI+XG4gICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICAgIDxmb3JtIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgcmVmPVwiZXZlbnRBZGRGb3JtXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwidHlwZVwiPkV2ZW50IHR5cGU8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJ0eXBlXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidHlwZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkIHZhbHVlPVwiXCI+Q2hvb3NlIHR5cGU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiKHBvbGx1dGlvblR5cGUsIGluZGV4KSBpbiBwb2xsdXRpb25UeXBlc1wiXG4gICAgICAgICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgOnZhbHVlPVwicG9sbHV0aW9uVHlwZVwiXG4gICAgICAgICAgICAgICAgICA6c2VsZWN0ZWQ9XCJwb2xsdXRpb25UeXBlID09PSB0eXBlXCI+e3sgZ2V0UG9sbHV0aW9uTmFtZShwb2xsdXRpb25UeXBlKSB9fVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICA8dGV4dGFyZWEgdi1tb2RlbD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlB1dCBkZXNjcmlwdGlvbiBoZXJlXCJcbiAgICAgICAgICAgICAgICAgIHJvd3M9XCI1XCI+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImltYWdlc1wiPlBob3RvczwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1maWxlXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgIG11bHRpcGxlPVwibXVsdGlwbGVcIlxuICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWZpbGUtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZXNcIlxuICAgICAgICAgICAgICAgICAgIHJlZj1cImltYWdlc0lucHV0XCJcbiAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICAgICAgICAgICBpZD1cImV2ZW50SW1hZ2VQaWNrZXJcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1maWxlLWxhYmVsXCIgZm9yPVwiZXZlbnRJbWFnZVBpY2tlclwiPkNob29zZSBmaWxlPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJsZXZlbFNsaWRlclZhbHVlXCI+TGV2ZWw8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyLWNvbnRhaW5lciBwYi0zXCI+XG4gICAgICAgICAgPHZ1ZS1zbGlkZXIgdi1tb2RlbD1cImxldmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJzbGlkZXJPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICA6Y29udGFpbmVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgOnNpbGVudD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgIDphZHNvcmI9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICA6aW50ZXJ2YWw9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICA6bWFya3M9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICA6dG9vbHRpcD1cIidhbHdheXMnXCJcbiAgICAgICAgICAgICAgICAgICAgICA6dG9vbHRpcC1wbGFjZW1lbnQ9XCJbJ3RvcCcsICdib3R0b20nXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvdnVlLXNsaWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIEBjbGljaz1cInNhdmVFdmVudFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnRuXCI+U2F2ZVxuICAgICAgPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHtXQVRFUiwgREVGT1JFU1RBVElPTiwgT1RIRVIsIEdBUkJBR0UsIGdldFBvbGx1dGlvbk5hbWV9IGZyb20gJy4uLy4uL21peGlucy9wb2x1dGlvblR5cGVzJztcbiAgaW1wb3J0IHtldmVudHNFbW1pdGVyfSBmcm9tIFwiLi4vLi4vZXZlbnRzL2VtaXR0ZXJzXCI7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiBbJ2N1cnJlbnRQb3NpdGlvbiddLFxuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwb2xsdXRpb25UeXBlczogW1dBVEVSLCBERUZPUkVTVEFUSU9OLCBHQVJCQUdFLCBPVEhFUl0sXG4gICAgICAgIHR5cGU6IFdBVEVSLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGltYWdlczogW10sXG4gICAgICAgIHNsaWRlck9wdGlvbnM6IHtcbiAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgbWF4OiA0LFxuICAgICAgICAgIHRvb2x0aXA6ICdub25lJyxcbiAgICAgICAgICBkb3RTaXplOiAyMCxcbiAgICAgICAgICByYWlsU3R5bGU6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNFM0U4RjMnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsZXZlbDogMSxcbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGdldFBvbGx1dGlvbk5hbWUodHlwZSkge1xuICAgICAgICByZXR1cm4gZ2V0UG9sbHV0aW9uTmFtZSh0eXBlKTtcbiAgICAgIH0sXG4gICAgICBhc3luYyBzYXZlRXZlbnQoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgZmlsZXMgPSBbXTtcbiAgICAgICAgY29uc3QgdG9CYXNlNjQgPSBmaWxlID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gZXJyb3IgPT4gcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiB0aGlzLiRyZWZzLmltYWdlc0lucHV0LmZpbGVzKSB7XG4gICAgICAgICAgZmlsZXMucHVzaChhd2FpdCB0b0Jhc2U2NChmaWxlKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZXZlbnRzL2FkZEV2ZW50Jywge1xuICAgICAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICBpbWFnZXM6IGZpbGVzLFxuICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLmN1cnJlbnRQb3NpdGlvbixcbiAgICAgICAgICBsZXZlbDogdGhpcy5sZXZlbFxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgZXZlbnRzRW1taXRlci4kZW1pdCgnY2xlYW5NYXJrZXJzJyk7XG4gICAgICAgICAgc2VsZi5jbG9zZUFkZEV2ZW50KCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGNsb3NlQWRkRXZlbnQoKSB7XG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdldmVudHMvc2V0T3BlbmVkRXZlbnQnLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgb3BlbmVkRXZlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydldmVudHMvb3BlbmVkRXZlbnQnXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XG4gIC5jbG9zZSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJldmVudC1pbmZvLXdyYXBwZXJcIiB2LWlmPVwib3BlbmVkRXZlbnQgJiYgb3BlbmVkRXZlbnQuaWRcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgQGNsaWNrPVwiY2xvc2VBZGRFdmVudFwiXG4gICAgICAgICAgICBjbGFzcz1cImNsb3NlXCI+XG4gICAgICA8c3Bhbj4mdGltZXM7PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICAgIDxkaXYgY2xhc3M9XCJldmVudC1pbmZvLXdyYXBwZXItY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgPGRpdiBpZD1cImV2ZW50SW5mb0Nhcm91c2VsXCIgY2xhc3M9XCJjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiXG4gICAgICAgICAgICAgICAgIHYtZm9yPVwiKGltYWdlLCBpbmRleCkgaW4gb3BlbmVkRXZlbnQuaW1hZ2VzXCJcbiAgICAgICAgICAgICAgICAgOmtleT1cImltYWdlLmlkXCJcbiAgICAgICAgICAgICAgICAgOmNsYXNzPVwieydhY3RpdmUnOiBpbmRleCA9PT0gMH1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJpbWFnZS5jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cImQtYmxvY2sgdy0xMDBcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxhIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCIgaHJlZj1cIiNldmVudEluZm9DYXJvdXNlbFwiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwicHJldlwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiIGhyZWY9XCIjZXZlbnRJbmZvQ2Fyb3VzZWxcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgZ2V0UG9sbHV0aW9uTmFtZShvcGVuZWRFdmVudC50eXBlKSB9fTwvaDU+XG4gICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHRcIj57eyBvcGVuZWRFdmVudC5kZXNjcmlwdGlvbiB9fTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgQGNsaWNrLnN0b3AucHJldmVudD1cInNob3dBZGRDb21tZW50ID0gIXNob3dBZGRDb21tZW50XCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+QWRkIGNvbW1lbnQ8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICB2LWlmPVwidXNlci5pZCAhPT0gb3BlbmVkRXZlbnQuY3JlYXRvcl9pZCAmJiBvcGVuZWRFdmVudC5zdGF0dXMgPT09IDBcIlxuICAgICAgICAgICAgICAgOmNsYXNzPVwieydidG4tc3VjY2Vzcyc6ICFoYXNVc2VyTWFyaywgJ2J0bi13YXJuaW5nJzogaGFzVXNlck1hcmt9XCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgIEBjbGljay5zdG9wLnByZXZlbnQ9XCJ0b2dnbGVSYXRlRXZlbnRcIlxuICAgICAgICAgICAgICB2LXRleHQ9XCJoYXNVc2VyTWFyayA/ICdVbm1hcmsgYXMgZG9uZScgOiAnTWFyayBhcyBkb25lJ1wiPjwvYT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2Utd2FybmluZ1wiPnt7IG9wZW5lZEV2ZW50LmxldmVsIH19PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGFkZC1jb21tZW50IHYtaWY9XCJzaG93QWRkQ29tbWVudFwiPjwvYWRkLWNvbW1lbnQ+XG4gICAgICA8ZXZlbnQtY29tbWVudHMgOmNvbW1lbnRzPVwib3BlbmVkRXZlbnQuY29tbWVudHNcIj48L2V2ZW50LWNvbW1lbnRzPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7Z2V0UG9sbHV0aW9uTmFtZX0gZnJvbSAnLi4vLi4vbWl4aW5zL3BvbHV0aW9uVHlwZXMnO1xuICBpbXBvcnQgRXZlbnRDb21tZW50cyBmcm9tICcuL2NvbW1lbnRzL0V2ZW50Q29tbWVudHMnO1xuICBpbXBvcnQgQWRkQ29tbWVudCBmcm9tICcuL2NvbW1lbnRzL0FkZENvbW1lbnQnO1xuICBpbXBvcnQge2V2ZW50c0VtbWl0ZXJ9IGZyb20gJy4uLy4uL2V2ZW50cy9lbWl0dGVycyc7XG4gIGltcG9ydCB1c2VyIGZyb20gJy4uLy4uL21peGlucy91c2VyJztcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNob3dBZGRDb21tZW50OiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgY2xvc2VBZGRFdmVudCgpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2V2ZW50cy9zZXRPcGVuZWRFdmVudCcsIGZhbHNlKTtcbiAgICAgIH0sXG4gICAgICBnZXRQb2xsdXRpb25OYW1lKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGdldFBvbGx1dGlvbk5hbWUodHlwZSk7XG4gICAgICB9LFxuICAgICAgdG9nZ2xlUmF0ZUV2ZW50KCkge1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnZXZlbnRzL3RvZ2dsZUV2ZW50VXNlclJlc3VsdCcsIHRoaXMub3BlbmVkRXZlbnQuaWQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIG9wZW5lZEV2ZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snZXZlbnRzL29wZW5lZEV2ZW50J107XG4gICAgICB9LFxuICAgICAgaGFzVXNlck1hcmsoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVuZWRFdmVudC5ldmVudFJlc3VsdC51c2VyRXZlbnRSZXN1bHRzLmZpbmQodXNlckV2ZW50UmVzdWx0ID0+IHtcbiAgICAgICAgICByZXR1cm4gdXNlckV2ZW50UmVzdWx0LnVzZXJJZCA9PT0gc2VsZi51c2VyLmlkO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG1peGluczogW3VzZXJdLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIEV2ZW50Q29tbWVudHMsXG4gICAgICBBZGRDb21tZW50XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICBldmVudHNFbW1pdGVyLiRvbignYWRkQ29tbWVudCcsICgpID0+IHtcbiAgICAgICAgc2VsZi5zaG93QWRkQ29tbWVudCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuICAuZXZlbnQtaW5mby13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuY2xvc2Uge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDVweDtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuICB9XG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwiZXZlbnRzLWxpc3Qgcm93IGNvbC0xMlwiXG4gICAgdi1pZj1cInNlbGVjdGVkRXZlbnRzICYmIHNlbGVjdGVkRXZlbnRzLmxlbmd0aCA+IDBcIlxuICA+XG4gICAgPHA+TWFya2VyJ3MgZXZlbnRzPC9wPlxuXG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIj5cbiAgICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPjwvdGg+XG4gICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+RGVzY3JpcHRpb248L3RoPlxuICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkxldmVsPC90aD5cbiAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5TdGF0dXM8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAgPHRyXG4gICAgICAgICAgdi1mb3I9XCIoc2VsZWN0ZWRFdmVudCwgaW5kZXgpIGluIHNlbGVjdGVkRXZlbnRzXCJcbiAgICAgICAgICA6a2V5PVwic2VsZWN0ZWRFdmVudC5pZFwiXG4gICAgICAgICAgQGNsaWNrPVwic2VsZWN0RXZlbnQoc2VsZWN0ZWRFdmVudClcIlxuICAgICAgICA+XG4gICAgICAgICAgPHRkIGNsYXNzPVwiZXZlbnQtbGlzdC1pdGVtLWltZy13cmFwcGVyXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzPVwiaW1nLWZsdWlkXCJcbiAgICAgICAgICAgICAgOnNyYz1cImdldFBvbGx1dGlvbkltYWdlU3JjKHNlbGVjdGVkRXZlbnQudHlwZSlcIlxuICAgICAgICAgICAgICA6YWx0PVwiZ2V0UG9sbHV0aW9uTmFtZShzZWxlY3RlZEV2ZW50LnR5cGUpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8dGQ+e3sgc2VsZWN0ZWRFdmVudC5kZXNjcmlwdGlvbiB9fTwvdGQ+XG4gICAgICAgICAgPHRkPnt7IHNlbGVjdGVkRXZlbnQubGV2ZWwgfX08L3RkPlxuICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgICAnYmctZGFuZ2VyJzogc2VsZWN0ZWRFdmVudC5zdGF0dXMgPT09IDEsXG4gICAgICAgICAgICAgICdiZy1zdWNjZXNzJzogc2VsZWN0ZWRFdmVudC5zdGF0dXMgPT09IDBcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IGdldFN0YXR1c05hbWUoc2VsZWN0ZWRFdmVudC5zdGF0dXMpIH19XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZXZlbnRzRW1taXRlciB9IGZyb20gXCIuLi8uLi9ldmVudHMvZW1pdHRlcnNcIjtcbmltcG9ydCB7XG4gIGdldFBvbGx1dGlvbk5hbWUsXG4gIGdldFBvbGx1dGlvbkltYWdlU3JjXG59IGZyb20gXCIuLi8uLi9taXhpbnMvcG9sdXRpb25UeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXB1dGVkOiB7XG4gICAgc2VsZWN0ZWRFdmVudHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1tcImV2ZW50cy9zZWxlY3RlZEV2ZW50c1wiXTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRQb2xsdXRpb25OYW1lKHR5cGUpIHtcbiAgICAgIHJldHVybiBnZXRQb2xsdXRpb25OYW1lKHR5cGUpO1xuICAgIH0sXG4gICAgZ2V0UG9sbHV0aW9uSW1hZ2VTcmModHlwZSkge1xuICAgICAgcmV0dXJuIGdldFBvbGx1dGlvbkltYWdlU3JjKHR5cGUpO1xuICAgIH0sXG4gICAgZ2V0U3RhdHVzTmFtZShzdGF0dXMpIHtcbiAgICAgIGlmICghc3RhdHVzKSB7XG4gICAgICAgIHJldHVybiBcIk9wZW5lZFwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gXCJGaW5pc2hlZFwiO1xuICAgIH0sXG4gICAgc2VsZWN0RXZlbnQoc2VsZWN0ZWRFdmVudCkge1xuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJldmVudHMvc2V0T3BlbmVkRXZlbnRcIiwgc2VsZWN0ZWRFdmVudCk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbnRib2R5ID4gdHIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5wIHtcbiAgY29sb3I6IHJnYigzMiwgMTMzLCA1Nyk7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogYmxpbmsgN3MgZm9yd2FyZHM7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibWFwLXdyYXBwZXIgdy0xMDAgaC0xMDBcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWFwLWlubmVyIHctMTAwXCIgcmVmPVwibWFwXCI+PC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZXZlbnRzLXdyYXBwZXIgdy0xMDBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJldmVudC1hY3Rpb25zIHJvdyBjb2wtMTIgcHktM1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIG1hcC1idG5cIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cImFkZEV2ZW50XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCI+QWRkIGV2ZW50XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIG1hcC1idG4gbWwtM1wiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwic2V0UG9zaXRpb25Ub0N1cnJlbnRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIj5UbyBjdXJyZW50IHBvc2l0aW9uXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93IHctMTAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgIDxldmVudC1saXN0PjwvZXZlbnQtbGlzdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgIDxldmVudC1pbmZvPjwvZXZlbnQtaW5mbz5cbiAgICAgICAgICA8ZXZlbnQtYWRkIDpjdXJyZW50LXBvc2l0aW9uPVwiY3VycmVudFBvc2l0aW9uXCI+PC9ldmVudC1hZGQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgRXZlbnRMaXN0IGZyb20gXCIuL0V2ZW50TGlzdFwiO1xuICBpbXBvcnQgRXZlbnRJbmZvIGZyb20gXCIuL0V2ZW50SW5mb1wiO1xuICBpbXBvcnQgRXZlbnRBZGQgZnJvbSBcIi4vRXZlbnRBZGRcIjtcbiAgaW1wb3J0IHtldmVudHNFbW1pdGVyfSBmcm9tIFwiLi4vLi4vZXZlbnRzL2VtaXR0ZXJzXCI7XG5cbiAgY29uc3QgZGVmYXVsdFpvb20gPSAxNTtcbiAgY29uc3QgZGVmYXVsdExvbmdpdHVkZSA9IDM2LjIyO1xuICBjb25zdCBkZWZhdWx0TGF0aXR1ZGUgPSA1MC4wMTtcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1hcDogbnVsbCxcbiAgICAgICAgaW5mb1dpbmRvdzogbnVsbCxcbiAgICAgICAgY3VycmVudFBvc2l0aW9uOiBudWxsLFxuICAgICAgICBtYXJrZXJzQ29uZmlndXJlZDogZmFsc2UsXG4gICAgICAgIG1hcmtlck9iamVjdHM6IFtdLFxuICAgICAgICBjdXJyZW50UG9zaXRpb25JY29uOiAnaHR0cHM6Ly93d3cucm9ib3R3b29kcy5jb20vZGV2L21pc2MvYmx1ZWNpcmNsZS5wbmcnXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgbWFya2VycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnNbJ2V2ZW50cy9tYXJrZXJzJ107XG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBhZGRFdmVudCgpIHtcbiAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2V2ZW50cy9zZXRPcGVuZWRFdmVudCcsIHtcbiAgICAgICAgICB0eXBlOiAnYWRkJ1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBoYW5kbGVMb2NhdGlvbkVycm9yKGJyb3dzZXJIYXNHZW9sb2NhdGlvbiwgaW5mb1dpbmRvdywgcG9zKSB7XG4gICAgICAgIGluZm9XaW5kb3cuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAgICAgaW5mb1dpbmRvdy5zZXRDb250ZW50KGJyb3dzZXJIYXNHZW9sb2NhdGlvbiA/XG4gICAgICAgICAgJ0Vycm9yOiBUaGUgR2VvbG9jYXRpb24gc2VydmljZSBmYWlsZWQuJyA6XG4gICAgICAgICAgJ0Vycm9yOiBZb3VyIGJyb3dzZXIgZG9lc25cXCd0IHN1cHBvcnQgZ2VvbG9jYXRpb24uJyk7XG4gICAgICAgIGluZm9XaW5kb3cub3BlbihtYXApO1xuICAgICAgfSxcbiAgICAgIHNldFBvc2l0aW9uVG9DdXJyZW50KCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHtcbiAgICAgICAgICAgICAgbGF0OiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgICAgICAgIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChzZWxmLmN1cnJlbnRQb3NpdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBzZWxmLmFkZEN1cnJlbnRQb3NpdGlvbk1hcmtlcihwb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5jdXJyZW50UG9zaXRpb24gPSBwb3M7XG4gICAgICAgICAgICBzZWxmLm1hcC5zZXRDZW50ZXIocG9zKTtcbiAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLmhhbmRsZUxvY2F0aW9uRXJyb3IodHJ1ZSwgc2VsZi5pbmZvV2luZG93LCBzZWxmLm1hcC5nZXRDZW50ZXIoKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgR2VvbG9jYXRpb25cbiAgICAgICAgICBzZWxmLmhhbmRsZUxvY2F0aW9uRXJyb3IoZmFsc2UsIHNlbGYuaW5mb1dpbmRvdywgc2VsZi5tYXAuZ2V0Q2VudGVyKCkpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2V0VXBNYXJrZXJzKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLm1hcmtlcnNDb25maWd1cmVkKSB7XG4gICAgICAgICAgdGhpcy5tYXJrZXJzQ29uZmlndXJlZCA9IHRydWU7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5tYXJrZXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWFya2VyLCBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzZWxmLm1hcmtlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHBhcnNlRmxvYXQoc2VsZi5tYXJrZXJzW2ldWydsYXRpdHVkZSddKSwgcGFyc2VGbG9hdChzZWxmLm1hcmtlcnNbaV1bJ2xvbmdpdHVkZSddKSksXG4gICAgICAgICAgICBtYXA6IHNlbGYubWFwLFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCAnY2xpY2snLCAoKG1hcmtlciwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHNlbGYudG9nZ2xlTWFya2VyQW5pbWF0aW9uKG1hcmtlciwgaSkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLiRzdG9yZS5kaXNwYXRjaCgnZXZlbnRzL3NlbGVjdE1hcmtlcicsIHtcbiAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogbWFya2VyLnBvc2l0aW9uLmxuZygpLFxuICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IG1hcmtlci5wb3NpdGlvbi5sYXQoKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLiRzdG9yZS5kaXNwYXRjaCgnZXZlbnRzL2NsZWFyU2VsZWN0ZWRFdmVudHMnKTtcbiAgICAgICAgICAgICAgICBzZWxmLiRzdG9yZS5kaXNwYXRjaCgnZXZlbnRzL3NldE9wZW5lZEV2ZW50JywgZmFsc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkobWFya2VyLCBpKSk7XG4gICAgICAgICAgc2VsZi5tYXJrZXJPYmplY3RzLnB1c2gobWFya2VyKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRvZ2dsZU1hcmtlckFuaW1hdGlvbihtYXJrZXIsIGkpIHtcbiAgICAgICAgdGhpcy5tYXJrZXJPYmplY3RzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGluZGV4ICE9PSBpKSB7XG4gICAgICAgICAgICBpdGVtLnNldEFuaW1hdGlvbihudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobWFya2VyLmdldEFuaW1hdGlvbigpICE9PSBudWxsKSB7XG4gICAgICAgICAgbWFya2VyLnNldEFuaW1hdGlvbihudWxsKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWFya2VyLnNldEFuaW1hdGlvbihnb29nbGUubWFwcy5BbmltYXRpb24uQk9VTkNFKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHJlbW92ZU1hcmtlckFuaW1hdGlvbigpIHtcbiAgICAgICAgdGhpcy5tYXJrZXJPYmplY3RzLmZvckVhY2gobWFya2VyID0+IHtcbiAgICAgICAgICBtYXJrZXIuc2V0QW5pbWF0aW9uKG51bGwpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBhZGRDdXJyZW50UG9zaXRpb25NYXJrZXIocG9zKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhwYXJzZUZsb2F0KHBvcy5sYXQpLCBwYXJzZUZsb2F0KHBvcy5sbmcpKSxcbiAgICAgICAgICBtYXA6IHNlbGYubWFwLFxuICAgICAgICAgIGFuaW1hdGlvbjogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1AsXG4gICAgICAgICAgaWNvbjogc2VsZi5jdXJyZW50UG9zaXRpb25JY29uXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvdy5tYXBJbml0KSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgc2VsZi5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKHNlbGYuJHJlZnMubWFwLCB7XG4gICAgICAgICAgICBjZW50ZXI6IHtsYXQ6IGRlZmF1bHRMYXRpdHVkZSwgbG5nOiBkZWZhdWx0TG9uZ2l0dWRlfSxcbiAgICAgICAgICAgIHpvb206IGRlZmF1bHRab29tLFxuICAgICAgICAgICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNlbGYuaW5mb1dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93O1xuXG4gICAgICAgICAgLy8gVHJ5IEhUTUw1IGdlb2xvY2F0aW9uLlxuICAgICAgICAgIHNlbGYuc2V0UG9zaXRpb25Ub0N1cnJlbnQoKTtcbiAgICAgICAgICBpZiAodHlwZW9mIHNlbGYubWFya2VycyAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5tYXJrZXJzICE9PSBudWxsICYmIHNlbGYubWFya2Vycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZWxmLnNldFVwTWFya2VycygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgMTAwKTtcblxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2V2ZW50cy9mZXRjaE1hcmtlcnMnKTtcblxuICAgICAgZXZlbnRzRW1taXRlci4kb24oJ3NldE1hcmtlcnMnLCAoKSA9PiB7XG4gICAgICAgIHNlbGYuc2V0VXBNYXJrZXJzKCk7XG4gICAgICB9KTtcblxuICAgICAgZXZlbnRzRW1taXRlci4kb24oJ2NsZWFuTWFya2VycycsICgpID0+IHtcbiAgICAgICAgc2VsZi5tYXJrZXJPYmplY3RzLmZvckVhY2gobWFya2VyID0+IHtcbiAgICAgICAgICBtYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi4kc3RvcmUuZGlzcGF0Y2goJ2V2ZW50cy9jbGVhbk1hcmtlcnMnKS50aGVuKCgpID0+IHtcbiAgICAgICAgICBzZWxmLiRzdG9yZS5kaXNwYXRjaCgnZXZlbnRzL2ZldGNoTWFya2VycycpO1xuICAgICAgICAgIHNlbGYubWFya2Vyc0NvbmZpZ3VyZWQgPSBmYWxzZTtcbiAgICAgICAgICBzZWxmLm1hcmtlck9iamVjdHMgPSBbXTtcbiAgICAgICAgICBzZWxmLnJlbW92ZU1hcmtlckFuaW1hdGlvbigpO1xuICAgICAgICAgIHNlbGYuJHN0b3JlLmRpc3BhdGNoKCdldmVudHMvY2xlYXJTZWxlY3RlZEV2ZW50cycpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgRXZlbnRMaXN0LFxuICAgICAgRXZlbnRJbmZvLFxuICAgICAgRXZlbnRBZGRcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG4gIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZXZlbnQtYWRkLWNvbW1lbnQgbXQtMlwiPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgQWRkIGNvbW1lbnRcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8dGV4dGFyZWEgdi1tb2RlbD1cIm5ld0NvbW1lbnRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgdy0xMDBcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm5ld0NvbW1lbnRcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJuZXdDb21tZW50XCJcbiAgICAgICAgICAgICAgICAgIGNvbHM9XCIzMFwiXG4gICAgICAgICAgICAgICAgICByb3dzPVwiNVwiPjwvdGV4dGFyZWE+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0IG10LTJcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiYWRkQ29tbWVudFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCI+QWRkIGNvbW1lbnRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQge2V2ZW50c0VtbWl0ZXJ9IGZyb20gJy4uLy4uLy4uL2V2ZW50cy9lbWl0dGVycyc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXdDb21tZW50OiAnJ1xuICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgYWRkQ29tbWVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMubmV3Q29tbWVudCAhPT0gJycpIHtcbiAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnY29tbWVudHMvYWRkQ29tbWVudCcsIHtcbiAgICAgICAgICAgIHRleHQ6IHRoaXMubmV3Q29tbWVudCxcbiAgICAgICAgICAgIGV2ZW50SWQ6IHRoaXMub3BlbmVkRXZlbnQuaWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIG9wZW5lZEV2ZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snZXZlbnRzL29wZW5lZEV2ZW50J107XG4gICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICBldmVudHNFbW1pdGVyLiRvbignYWRkQ29tbWVudCcsICgpID0+IHtcbiAgICAgICAgc2VsZi5uZXdDb21tZW50ID0gJyc7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImV2ZW50LWNvbW1lbnRzXCIgdi1pZj1cImNvbW1lbnRzLmxlbmd0aCA+IDBcIj5cbiAgICA8aDQgY2xhc3M9XCJoNFwiPlxuICAgICAgPHNwYW4+Q29tbWVudHM8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLWluZm9cIj57eyBjb21tZW50cy5sZW5ndGggfX08L3NwYW4+XG4gICAgPC9oND5cbiAgICA8ZGl2IHYtZm9yPVwiY29tbWVudCBpbiBjb21tZW50c1wiXG4gICAgICAgICA6a2V5PVwiY29tbWVudC5pZFwiXG4gICAgICAgICBjbGFzcz1cImNhcmQgbXQtMlwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgIHt7IGNvbW1lbnQudXNlci5maXJzdG5hbWUgKyAnICcgKyBjb21tZW50LnVzZXIubGFzdG5hbWUgfX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPnt7IGNvbW1lbnQuY29tbWVudCB9fTwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtc2NvcmUgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleFwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiYWRkQ29tbWVudFNjb3JlKGNvbW1lbnQpXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIj4rXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGQgaDQgbS0wIHB4LTNcIj57eyBjb21tZW50LnNjb3JlIH19PC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZW1vdmVDb21tZW50U2NvcmUoY29tbWVudClcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiPi1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IFsnY29tbWVudHMnXSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBhZGRDb21tZW50U2NvcmUoY29tbWVudCkge1xuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnY29tbWVudHMvYWRkQ29tbWVudFNjb3JlJywgY29tbWVudC5pZCk7XG4gICAgICB9LFxuICAgICAgcmVtb3ZlQ29tbWVudFNjb3JlKGNvbW1lbnQpIHtcbiAgICAgICAgaWYgKGNvbW1lbnQuc2NvcmUgPiAwKSB7XG4gICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2NvbW1lbnRzL3JlbW92ZUNvbW1lbnRTY29yZScsIGNvbW1lbnQuaWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuICAuc2NvcmUtaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiAyNXB4O1xuICAgIG1heC13aWR0aDogMjVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbjwvc3R5bGU+IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIm5hdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2YmFyLWJyYW5kXCIsIGF0dHJzOiB7IHRvOiBcIi9ob21lXCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibG9nb1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGFsdDogXCJsb2dvXCIsIHNyYzogXCIvaW1nL2xvZ28ucG5nXCIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJuYXZiYXJOYXZcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuYXZiYXItbmF2XCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogXCIvaG9tZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY2xhc3NcIjogXCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIgfSwgW192bS5fdihcIkhvbWVcIildKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmlzQXV0aGVudGljYXRlZFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBcIi9hY2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY2xhc3NcIjogXCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJNeSBhY2NvdW50XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICFfdm0uaXNBdXRoZW50aWNhdGVkXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IFwiL2xvZ2luXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY2xhc3NcIjogXCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJMb2dpblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAhX3ZtLmlzQXV0aGVudGljYXRlZFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBcIi9yZWdpc3RlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLWNsYXNzXCI6IFwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUmVnaXN0cmF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBcIi9hYm91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY2xhc3NcIjogXCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIgfSwgW192bS5fdihcIkFib3V0XCIpXSldXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5pc0F1dGhlbnRpY2F0ZWRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL2FwaS9zZWN1cml0eS9sb2dvdXRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJMb2dvdXRcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicm91dGVyLXZpZXdcIilcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJuYXZiYXItdG9nZ2xlclwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcImNvbGxhcHNlXCIsXG4gICAgICAgICAgXCJkYXRhLXRhcmdldFwiOiBcIiNuYXZiYXJOYXZcIixcbiAgICAgICAgICBcImFyaWEtY29udHJvbHNcIjogXCJuYXZiYXJOYXZcIixcbiAgICAgICAgICBcImFyaWEtZXhwYW5kZWRcIjogXCJmYWxzZVwiLFxuICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJuYXZiYXItdG9nZ2xlci1pY29uXCIgfSldXG4gICAgKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhbGVydFwiLCBhdHRyczogeyByb2xlOiBcImFsZXJ0XCIgfSB9LCBbXG4gICAgX3ZtLl92KFwiXFxuICBcIiArIF92bS5fcyhfdm0uZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcikgKyBcIlxcblwiKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW192bS5fdihcIlxcbiAgQWJvdXRcXG5cIildKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbG9naW4tcGFnZSBhY2NvdW50LXBhZ2VcIiB9LCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLmlzQXV0aGVudGljYXRlZCAmJiBfdm0udXNlciAhPT0gbnVsbFxuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJmb3JtXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcImVtYWlsXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiRW1haWwgYWRkcmVzc1wiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci5lbWFpbFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImVtYWlsXCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnVzZXIuZW1haWwgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXNlciwgXCJlbWFpbFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJmaXJzdG5hbWVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJGaXJzdG5hbWVcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLmZpcnN0bmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmZpcnN0bmFtZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udXNlci5maXJzdG5hbWUgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXNlciwgXCJmaXJzdG5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibGFzdG5hbWVcIiB9IH0sIFtfdm0uX3YoXCJMYXN0bmFtZVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXNlci5sYXN0bmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmxhc3RuYW1lXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS51c2VyLmxhc3RuYW1lIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnVzZXIsIFwibGFzdG5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0blwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIuZW1haWwubGVuZ3RoID09PSAwIHx8XG4gICAgICAgICAgICAgICAgICAgIF92bS51c2VyLmZpcnN0bmFtZS5sZW5ndGggPT09IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIubGFzdG5hbWUubGVuZ3RoID09PSAwIHx8XG4gICAgICAgICAgICAgICAgICAgIF92bS5pc0xvYWRpbmcsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNhdmVBY2NvdW50U2V0dGluZ3MoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgU2F2ZVxcbiAgICAgIFwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSgxKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBtdC0zIHBhc3N3b3JkLWNhcmRcIiB9LCBbXG4gICAgICBfYyhcImZvcm1cIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcInBhc3N3b3JkXCIgfSB9LCBbX3ZtLl92KFwiUGFzc3dvcmRcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYXNzd29yZCB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS5wYXNzd29yZCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJyZXBlYXRQYXNzd29yZFwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiUmVwZWF0IFBhc3N3b3JkXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnJlcGVhdFBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmVwZWF0UGFzc3dvcmRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInBhc3N3b3JkXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucmVwZWF0UGFzc3dvcmQgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0ucmVwZWF0UGFzc3dvcmQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG5cIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgIF92bS5wYXNzd29yZCAhPT0gX3ZtLnJlcGVhdFBhc3N3b3JkIHx8IF92bS5wYXNzd29yZC5sZW5ndGggPCA2LFxuICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2F2ZVBhc3N3b3JkU2V0dGluZ3MoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBTYXZlXFxuICAgICAgXCIpXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLmlzTG9hZGluZ1xuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBjb2xcIiB9LCBbX2MoXCJwXCIsIFtfdm0uX3YoXCJMb2FkaW5nLi4uXCIpXSldKVxuICAgICAgOiBfdm0uaGFzRXJyb3JcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyBjb2xcIiB9LFxuICAgICAgICAgIFtfYyhcImVycm9yLW1lc3NhZ2VcIiwgeyBhdHRyczogeyBlcnJvcjogX3ZtLmVycm9yIH0gfSldLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgY29sXCIgfSwgW1xuICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJNeSBhY2NvdW50XCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBjb2xcIiB9LCBbXG4gICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtLTAgcHQtM1wiIH0sIFtfdm0uX3YoXCJDaGFuZ2UgcGFzc3dvcmRcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIGhvbWUtcGFnZVwiIH0sXG4gICAgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IGNvbFwiIH0sIFtcbiAgICAgICAgX3ZtLmlzQXV0aGVudGljYXRlZCAmJiBfdm0udXNlciAhPT0gbnVsbFxuICAgICAgICAgID8gX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICBcIkhlbGxvLCBcIiArIF92bS51c2VyLmZpcnN0bmFtZSArIFwiIFwiICsgX3ZtLnVzZXIubGFzdG5hbWVcbiAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgIFRyeSB0byByZWdpc3RlciBvciBsb2cgaW4gdG8gYmUgYWJsZSB0byBwYXJ0aWNpcGF0ZSBpbiBFY29XYWxrIGdhbWUuXFxuICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmlzQXV0aGVudGljYXRlZCA/IF9jKFwiZXZlbnQtbWFwXCIpIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgY29sXCIgfSwgW1xuICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiV2VsY29tZSB0byBFY29XYWxrXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImludHJvLWltZy1ob2xkZXJcIiB9LCBbXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImludHJvXCIsXG4gICAgICAgIGF0dHJzOiB7IGFsdDogXCJpbnRyby1waG90b1wiLCBzcmM6IFwiL2ltZy9lY28ucG5nXCIgfVxuICAgICAgfSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbG9naW4tcGFnZVwiIH0sIFtcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICBfYyhcImZvcm1cIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1yb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtNFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJlbWFpbFwiLCBwbGFjZWhvbGRlcjogXCJFbWFpbCBhZGRyZXNzXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5lbWFpbCB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS5lbWFpbCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInBhc3N3b3JkXCIsIHBsYWNlaG9sZGVyOiBcIlBhc3N3b3JkXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYXNzd29yZCB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS5wYXNzd29yZCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gbG9nLWJ0blwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmVtYWlsLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmQubGVuZ3RoID09PSAwIHx8XG4gICAgICAgICAgICAgICAgICAgIF92bS5pc0xvYWRpbmcsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnBlcmZvcm1Mb2dpbigpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgTG9naW5cXG4gICAgICAgICAgXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLmlzTG9hZGluZ1xuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBjb2xcIiB9LCBbX2MoXCJwXCIsIFtfdm0uX3YoXCJMb2FkaW5nLi4uXCIpXSldKVxuICAgICAgOiBfdm0uaGFzRXJyb3JcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyBjb2xcIiB9LFxuICAgICAgICAgIFtfYyhcImVycm9yLW1lc3NhZ2VcIiwgeyBhdHRyczogeyBlcnJvcjogX3ZtLmVycm9yIH0gfSldLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgY29sXCIgfSwgW1xuICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJQbGVhc2UsIGxvZyBpblwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIHJlZ2lzdGVyLXBhZ2VcIiB9LCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgX2MoXCJmb3JtXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5lbWFpbCxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImVtYWlsXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJlbWFpbFwiLCBwbGFjZWhvbGRlcjogXCJFbWFpbCBhZGRyZXNzXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZW1haWwgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0uZW1haWwgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlyc3RuYW1lLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlyc3RuYW1lXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkZpcnN0bmFtZVwiIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZpcnN0bmFtZSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS5maXJzdG5hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubGFzdG5hbWUsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJsYXN0bmFtZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJMYXN0bmFtZVwiIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmxhc3RuYW1lIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLmxhc3RuYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInBhc3N3b3JkXCIsIHBsYWNlaG9sZGVyOiBcIlBhc3N3b3JkXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucGFzc3dvcmQgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0ucGFzc3dvcmQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gcmVnLWJ0blwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgX3ZtLmVtYWlsLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICAgICAgICAgIF92bS5wYXNzd29yZC5sZW5ndGggPT09IDAgfHxcbiAgICAgICAgICAgICAgICBfdm0uaXNMb2FkaW5nLFxuICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucGVyZm9ybVJlZ2lzdGVyKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgUmVnaXN0ZXJcXG4gICAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uaXNMb2FkaW5nXG4gICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IGNvbFwiIH0sIFtfYyhcInBcIiwgW192bS5fdihcIkxvYWRpbmcuLi5cIildKV0pXG4gICAgICA6IF92bS5oYXNFcnJvclxuICAgICAgPyBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93IGNvbFwiIH0sXG4gICAgICAgICAgW19jKFwiZXJyb3ItbWVzc2FnZVwiLCB7IGF0dHJzOiB7IGVycm9yOiBfdm0uZXJyb3IgfSB9KV0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBjb2xcIiB9LCBbXG4gICAgICBfYyhcInBcIiwgW192bS5fdihcIlBsZWFzZSwgcmVnaXN0ZXIgeW91ciBwcm9maWxlXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLm9wZW5lZEV2ZW50ICE9PSBmYWxzZSAmJiBfdm0ub3BlbmVkRXZlbnQudHlwZSA9PT0gXCJhZGRcIlxuICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJldmVudC1hZGRcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2VBZGRFdmVudCB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLDl1wiKV0pXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICB7IHJlZjogXCJldmVudEFkZEZvcm1cIiwgYXR0cnM6IHsgZW5jdHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJ0eXBlXCIgfSB9LCBbX3ZtLl92KFwiRXZlbnQgdHlwZVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJ0eXBlXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF92bS50eXBlID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyBkaXNhYmxlZDogXCJcIiwgdmFsdWU6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNob29zZSB0eXBlXCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnBvbGx1dGlvblR5cGVzLCBmdW5jdGlvbihwb2xsdXRpb25UeXBlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBvbGx1dGlvblR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBwb2xsdXRpb25UeXBlID09PSBfdm0udHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdldFBvbGx1dGlvbk5hbWUocG9sbHV0aW9uVHlwZSkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJkZXNjcmlwdGlvblwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkRlc2NyaXB0aW9uXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlB1dCBkZXNjcmlwdGlvbiBoZXJlXCIsXG4gICAgICAgICAgICAgICAgICByb3dzOiBcIjVcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5kZXNjcmlwdGlvbiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS5kZXNjcmlwdGlvbiA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiaW1hZ2VzXCIgfSB9LCBbX3ZtLl92KFwiUGhvdG9zXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAgbWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImN1c3RvbS1maWxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlZjogXCJpbWFnZXNJbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tZmlsZS1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlOiBcIm11bHRpcGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJpbWFnZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ6IFwiaW1hZ2UvKlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImV2ZW50SW1hZ2VQaWNrZXJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWZpbGUtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiZXZlbnRJbWFnZVBpY2tlclwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNob29zZSBmaWxlXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibGV2ZWxTbGlkZXJWYWx1ZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkxldmVsXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2xpZGVyLWNvbnRhaW5lciBwYi0zXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2dWUtc2xpZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIF92bS5fYihcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpbGVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWRzb3JiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya3M6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IFwiYWx3YXlzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9vbHRpcC1wbGFjZW1lbnRcIjogW1widG9wXCIsIFwiYm90dG9tXCJdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5sZXZlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sZXZlbCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImxldmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwidnVlLXNsaWRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5zbGlkZXJPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG5cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zYXZlRXZlbnQgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVxcbiAgICBcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5vcGVuZWRFdmVudCAmJiBfdm0ub3BlbmVkRXZlbnQuaWRcbiAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXZlbnQtaW5mby13cmFwcGVyXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsb3NlQWRkRXZlbnQgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW19jKFwic3BhblwiLCBbX3ZtLl92KFwiw5dcIildKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImV2ZW50LWluZm8td3JhcHBlci1jb250ZW50XCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2Fyb3VzZWwgc2xpZGVcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImV2ZW50SW5mb0Nhcm91c2VsXCIsIFwiZGF0YS1yaWRlXCI6IFwiY2Fyb3VzZWxcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJvdXNlbC1pbm5lclwiIH0sXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ub3BlbmVkRXZlbnQuaW1hZ2VzLCBmdW5jdGlvbihpbWFnZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGltYWdlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJvdXNlbC1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IGFjdGl2ZTogaW5kZXggPT09IDAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtYmxvY2sgdy0xMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IGltYWdlLmNvbnRlbnQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgxKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5nZXRQb2xsdXRpb25OYW1lKF92bS5vcGVuZWRFdmVudC50eXBlKSkpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5vcGVuZWRFdmVudC5kZXNjcmlwdGlvbikpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd0FkZENvbW1lbnQgPSAhX3ZtLnNob3dBZGRDb21tZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJBZGQgY29tbWVudFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIuaWQgIT09IF92bS5vcGVuZWRFdmVudC5jcmVhdG9yX2lkICYmXG4gICAgICAgICAgICAgICAgICAgIF92bS5vcGVuZWRFdmVudC5zdGF0dXMgPT09IDBcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuLXN1Y2Nlc3NcIjogIV92bS5oYXNVc2VyTWFyayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0bi13YXJuaW5nXCI6IF92bS5oYXNVc2VyTWFya1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaGFzVXNlck1hcmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlVubWFyayBhcyBkb25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIk1hcmsgYXMgZG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9nZ2xlUmF0ZUV2ZW50KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmFkZ2Utd2FybmluZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5vcGVuZWRFdmVudC5sZXZlbCkpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLnNob3dBZGRDb21tZW50ID8gX2MoXCJhZGQtY29tbWVudFwiKSA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZXZlbnQtY29tbWVudHNcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBjb21tZW50czogX3ZtLm9wZW5lZEV2ZW50LmNvbW1lbnRzIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImFcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgaHJlZjogXCIjZXZlbnRJbmZvQ2Fyb3VzZWxcIixcbiAgICAgICAgICByb2xlOiBcImJ1dHRvblwiLFxuICAgICAgICAgIFwiZGF0YS1zbGlkZVwiOiBcInByZXZcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uXCIsXG4gICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzci1vbmx5XCIgfSwgW192bS5fdihcIlByZXZpb3VzXCIpXSlcbiAgICAgIF1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJhXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGhyZWY6IFwiI2V2ZW50SW5mb0Nhcm91c2VsXCIsXG4gICAgICAgICAgcm9sZTogXCJidXR0b25cIixcbiAgICAgICAgICBcImRhdGEtc2xpZGVcIjogXCJuZXh0XCJcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiLFxuICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic3Itb25seVwiIH0sIFtfdm0uX3YoXCJOZXh0XCIpXSlcbiAgICAgIF1cbiAgICApXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uc2VsZWN0ZWRFdmVudHMgJiYgX3ZtLnNlbGVjdGVkRXZlbnRzLmxlbmd0aCA+IDBcbiAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXZlbnRzLWxpc3Qgcm93IGNvbC0xMlwiIH0sIFtcbiAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJNYXJrZXIncyBldmVudHNcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLWhvdmVyXCIgfSwgW1xuICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5zZWxlY3RlZEV2ZW50cywgZnVuY3Rpb24oc2VsZWN0ZWRFdmVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IHNlbGVjdGVkRXZlbnQuaWQsXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3RFdmVudChzZWxlY3RlZEV2ZW50KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiZXZlbnQtbGlzdC1pdGVtLWltZy13cmFwcGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmdldFBvbGx1dGlvbkltYWdlU3JjKHNlbGVjdGVkRXZlbnQudHlwZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IF92bS5nZXRQb2xsdXRpb25OYW1lKHNlbGVjdGVkRXZlbnQudHlwZSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHNlbGVjdGVkRXZlbnQuZGVzY3JpcHRpb24pKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3Moc2VsZWN0ZWRFdmVudC5sZXZlbCkpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJnLWRhbmdlclwiOiBzZWxlY3RlZEV2ZW50LnN0YXR1cyA9PT0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmctc3VjY2Vzc1wiOiBzZWxlY3RlZEV2ZW50LnN0YXR1cyA9PT0gMFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5nZXRTdGF0dXNOYW1lKHNlbGVjdGVkRXZlbnQuc3RhdHVzKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtfdm0uX3YoXCJEZXNjcmlwdGlvblwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwiY29sXCIgfSB9LCBbX3ZtLl92KFwiTGV2ZWxcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIlN0YXR1c1wiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1hcC13cmFwcGVyIHctMTAwIGgtMTAwXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgcmVmOiBcIm1hcFwiLCBzdGF0aWNDbGFzczogXCJtYXAtaW5uZXIgdy0xMDBcIiB9KSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZXZlbnRzLXdyYXBwZXIgdy0xMDBcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImV2ZW50LWFjdGlvbnMgcm93IGNvbC0xMiBweS0zXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBtYXAtYnRuXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmFkZEV2ZW50IH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJBZGQgZXZlbnRcXG4gICAgICBcIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIG1hcC1idG4gbWwtM1wiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zZXRQb3NpdGlvblRvQ3VycmVudCB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiVG8gY3VycmVudCBwb3NpdGlvblxcbiAgICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgdy0xMDBcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTZcIiB9LCBbX2MoXCJldmVudC1saXN0XCIpXSwgMSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtNlwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJldmVudC1pbmZvXCIpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZXZlbnQtYWRkXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgXCJjdXJyZW50LXBvc2l0aW9uXCI6IF92bS5jdXJyZW50UG9zaXRpb24gfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJldmVudC1hZGQtY29tbWVudCBtdC0yXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXJcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgIEFkZCBjb21tZW50XFxuICAgIFwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5uZXdDb21tZW50LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm5ld0NvbW1lbnRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIHctMTAwXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIG5hbWU6IFwibmV3Q29tbWVudFwiLFxuICAgICAgICAgICAgaWQ6IFwibmV3Q29tbWVudFwiLFxuICAgICAgICAgICAgY29sczogXCIzMFwiLFxuICAgICAgICAgICAgcm93czogXCI1XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmV3Q29tbWVudCB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF92bS5uZXdDb21tZW50ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBtdC0yXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zZWNvbmRhcnlcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmFkZENvbW1lbnQgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJBZGQgY29tbWVudFxcbiAgICAgICAgXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5jb21tZW50cy5sZW5ndGggPiAwXG4gICAgPyBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJldmVudC1jb21tZW50c1wiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaDRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIkNvbW1lbnRzXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmFkZ2UtaW5mb1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uY29tbWVudHMubGVuZ3RoKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmNvbW1lbnRzLCBmdW5jdGlvbihjb21tZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IGNvbW1lbnQuaWQsIHN0YXRpY0NsYXNzOiBcImNhcmQgbXQtMlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQudXNlci5maXJzdG5hbWUgKyBcIiBcIiArIGNvbW1lbnQudXNlci5sYXN0bmFtZVxuICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGNvbW1lbnQuY29tbWVudCkpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtc2NvcmUgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hZGRDb21tZW50U2NvcmUoY29tbWVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIitcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkIGg0IG0tMCBweC0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoY29tbWVudC5zY29yZSkpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlQ29tbWVudFNjb3JlKGNvbW1lbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCItXFxuICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==