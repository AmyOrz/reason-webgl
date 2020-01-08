/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/es6_global/src/Main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/es6_global/src/Main.js":
/*!************************************!*\
  !*** ./lib/es6_global/src/Main.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _demo_HelloPoint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo/HelloPoint.js */ \"./lib/es6_global/src/demo/HelloPoint.js\");\n\n\n\n\n_demo_HelloPoint_js__WEBPACK_IMPORTED_MODULE_0__[\"start\"](/* () */0);\n\n\n/*  Not a pure module */\n\n\n//# sourceURL=webpack:///./lib/es6_global/src/Main.js?");

/***/ }),

/***/ "./lib/es6_global/src/demo/HelloPoint.js":
/*!***********************************************!*\
  !*** ./lib/es6_global/src/demo/HelloPoint.js ***!
  \***********************************************/
/*! exports provided: vs, fs, start */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"vs\", function() { return vs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fs\", function() { return fs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"start\", function() { return start; });\n/* harmony import */ var _utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Utils.js */ \"./lib/es6_global/src/utils/Utils.js\");\n\n\n\n\nvar vs = \"\\n    attribute vec4 aPosition;\\n    void main(){\\n        gl_Position = aPosition;\\n        gl_PointSize = 10.0;\\n    }\\n    \";\n\nvar fs = \"\\n    void main(){\\n        gl_FragColor = vec4(1.0,0.0,0.0,1.0);\\n    }\\n    \";\n\nfunction start(param) {\n  var canvas = document.querySelector(\"#webgl\");\n  var gl = canvas.getContext(\"webgl\", {\n        alpha: true,\n        depth: true,\n        stencil: false,\n        antialias: true,\n        premultipliedAlpha: true,\n        preserveDrawingBuffer: false\n      });\n  var program = _utils_Utils_js__WEBPACK_IMPORTED_MODULE_0__[\"initShader\"](vs, fs, gl, gl.createProgram());\n  gl.useProgram(program);\n  gl.clearColor(0, 0, 0, 1);\n  gl.enable(gl.DEPTH_TEST);\n  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);\n  var aPosition = gl.getAttribLocation(program, \"aPosition\");\n  var match = aPosition < 0;\n  if (match) {\n    console.log(\"get aPosition error\");\n  }\n  gl.vertexAttrib3f(aPosition, 0, 0, 0);\n  gl.drawArrays(gl.POINTS, 0, 1);\n  return /* () */0;\n}\n\n\n/* No side effect */\n\n\n//# sourceURL=webpack:///./lib/es6_global/src/demo/HelloPoint.js?");

/***/ }),

/***/ "./lib/es6_global/src/utils/Utils.js":
/*!*******************************************!*\
  !*** ./lib/es6_global/src/utils/Utils.js ***!
  \*******************************************/
/*! exports provided: error, errorAndReturn, createTriangleGeometryData, _compileShader, _linkProgram, initShader, initVertexBuffers, sendAttributeData, _unsafeGetUniformLocation, sendCameraUniformData, _sendColorData, sendModelUniformData1, sendModelUniformData2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"error\", function() { return error; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"errorAndReturn\", function() { return errorAndReturn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTriangleGeometryData\", function() { return createTriangleGeometryData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_compileShader\", function() { return _compileShader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_linkProgram\", function() { return _linkProgram; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initShader\", function() { return initShader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initVertexBuffers\", function() { return initVertexBuffers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendAttributeData\", function() { return sendAttributeData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_unsafeGetUniformLocation\", function() { return _unsafeGetUniformLocation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendCameraUniformData\", function() { return sendCameraUniformData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_sendColorData\", function() { return _sendColorData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendModelUniformData1\", function() { return sendModelUniformData1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendModelUniformData2\", function() { return sendModelUniformData2; });\n/* harmony import */ var _node_modules_bs_platform_lib_es6_js_exn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/bs-platform/lib/es6/js_exn.js */ \"./node_modules/_bs-platform@5.2.1@bs-platform/lib/es6/js_exn.js\");\n/* harmony import */ var _node_modules_bs_platform_lib_es6_js_null_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/bs-platform/lib/es6/js_null.js */ \"./node_modules/_bs-platform@5.2.1@bs-platform/lib/es6/js_null.js\");\n\n\n\n\n\nfunction error(msg) {\n  _node_modules_bs_platform_lib_es6_js_exn_js__WEBPACK_IMPORTED_MODULE_0__[\"raiseError\"](msg);\n  return /* () */0;\n}\n\nvar errorAndReturn = _node_modules_bs_platform_lib_es6_js_exn_js__WEBPACK_IMPORTED_MODULE_0__[\"raiseError\"];\n\nfunction createTriangleGeometryData(param) {\n  var vertices = new Float32Array(/* array */[\n        0,\n        0.5,\n        0.0,\n        -0.5,\n        -0.5,\n        0.0,\n        0.5,\n        -0.5,\n        0.0\n      ]);\n  var indices = new Uint16Array(/* array */[\n        0,\n        1,\n        2\n      ]);\n  return /* tuple */[\n          vertices,\n          indices\n        ];\n}\n\nfunction _compileShader(gl, glslSource, shader) {\n  gl.shaderSource(shader, glslSource);\n  gl.compileShader(shader);\n  var match = gl.getShaderParameter(shader, gl.COMPILE_STATUS) === false;\n  if (match) {\n    var message = gl.getShaderInfoLog(shader);\n    var msg = \"shader info log: \" + (String(message) + (\"\\n        glsl source: \" + (String(glslSource) + \"\\n        \")));\n    _node_modules_bs_platform_lib_es6_js_exn_js__WEBPACK_IMPORTED_MODULE_0__[\"raiseError\"](msg);\n  }\n  return shader;\n}\n\nfunction _linkProgram(program, gl) {\n  gl.linkProgram(program);\n  var match = gl.getProgramParameter(program, gl.LINK_STATUS) === false;\n  if (match) {\n    var message = gl.getProgramInfoLog(program);\n    var msg = \"link program error: \" + (String(message) + \"\");\n    _node_modules_bs_platform_lib_es6_js_exn_js__WEBPACK_IMPORTED_MODULE_0__[\"raiseError\"](msg);\n    return /* () */0;\n  } else {\n    return /* () */0;\n  }\n}\n\nfunction initShader(vsSource, fsSource, gl, program) {\n  var vs = _compileShader(gl, vsSource, gl.createShader(gl.VERTEX_SHADER));\n  var fs = _compileShader(gl, fsSource, gl.createShader(gl.FRAGMENT_SHADER));\n  gl.attachShader(program, vs);\n  gl.attachShader(program, fs);\n  gl.bindAttribLocation(program, 0, \"a_position\");\n  _linkProgram(program, gl);\n  gl.deleteShader(vs);\n  gl.deleteShader(fs);\n  return program;\n}\n\nfunction initVertexBuffers(param, gl) {\n  var vertexBuffer = gl.createBuffer();\n  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);\n  gl.bufferData(gl.ARRAY_BUFFER, param[0], gl.STATIC_DRAW);\n  var indexBuffer = gl.createBuffer();\n  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);\n  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, param[1], gl.STATIC_DRAW);\n  return /* tuple */[\n          vertexBuffer,\n          indexBuffer\n        ];\n}\n\nfunction sendAttributeData(vertexBuffer, program, gl) {\n  var positionLocation = gl.getAttribLocation(program, \"a_position\");\n  var match = positionLocation === -1;\n  if (match) {\n    _node_modules_bs_platform_lib_es6_js_exn_js__WEBPACK_IMPORTED_MODULE_0__[\"raiseError\"](\"Failed to get the storage location of a_position\");\n  }\n  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);\n  gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);\n  gl.enableVertexAttribArray(positionLocation);\n  return /* () */0;\n}\n\nfunction _unsafeGetUniformLocation(program, name, gl) {\n  var pos = gl.getUniformLocation(program, name);\n  if (_node_modules_bs_platform_lib_es6_js_null_js__WEBPACK_IMPORTED_MODULE_1__[\"test\"](pos)) {\n    return _node_modules_bs_platform_lib_es6_js_exn_js__WEBPACK_IMPORTED_MODULE_0__[\"raiseError\"](\"\" + (String(name) + \" uniform not exist\"));\n  } else {\n    return pos;\n  }\n}\n\nfunction sendCameraUniformData(param, program, gl) {\n  var vMatrixLocation = _unsafeGetUniformLocation(program, \"u_vMatrix\", gl);\n  var pMatrixLocation = _unsafeGetUniformLocation(program, \"u_pMatrix\", gl);\n  gl.uniformMatrix4fv(vMatrixLocation, false, param[0]);\n  gl.uniformMatrix4fv(pMatrixLocation, false, param[1]);\n  return /* () */0;\n}\n\nfunction _sendColorData(param, gl, colorLocation) {\n  gl.uniform3f(colorLocation, param[0], param[1], param[2]);\n  return /* () */0;\n}\n\nfunction sendModelUniformData1(param, program, gl) {\n  var mMatrixLocation = _unsafeGetUniformLocation(program, \"u_mMatrix\", gl);\n  var colorLocation = _unsafeGetUniformLocation(program, \"u_color0\", gl);\n  gl.uniformMatrix4fv(mMatrixLocation, false, param[0]);\n  return _sendColorData(param[1], gl, colorLocation);\n}\n\nfunction sendModelUniformData2(param, program, gl) {\n  var mMatrixLocation = _unsafeGetUniformLocation(program, \"u_mMatrix\", gl);\n  var color1Location = _unsafeGetUniformLocation(program, \"u_color0\", gl);\n  var color2Location = _unsafeGetUniformLocation(program, \"u_color1\", gl);\n  gl.uniformMatrix4fv(mMatrixLocation, false, param[0]);\n  _sendColorData(param[1], gl, color1Location);\n  return _sendColorData(param[2], gl, color2Location);\n}\n\n\n/* No side effect */\n\n\n//# sourceURL=webpack:///./lib/es6_global/src/utils/Utils.js?");

/***/ }),

/***/ "./node_modules/_bs-platform@5.2.1@bs-platform/lib/es6/caml_exceptions.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_bs-platform@5.2.1@bs-platform/lib/es6/caml_exceptions.js ***!
  \********************************************************************************/
/*! exports provided: caml_set_oo_id, caml_fresh_oo_id, create, caml_is_extension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"caml_set_oo_id\", function() { return caml_set_oo_id; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"caml_fresh_oo_id\", function() { return caml_fresh_oo_id; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"caml_is_extension\", function() { return caml_is_extension; });\n\n\n\nvar id = /* record */[/* contents */0];\n\nfunction caml_set_oo_id(b) {\n  b[1] = id[0];\n  id[0] += 1;\n  return b;\n}\n\nfunction caml_fresh_oo_id(param) {\n  id[0] += 1;\n  return id[0];\n}\n\nfunction create(str) {\n  var v_001 = caml_fresh_oo_id(/* () */0);\n  var v = /* tuple */[\n    str,\n    v_001\n  ];\n  v.tag = 248;\n  return v;\n}\n\nfunction caml_is_extension(e) {\n  if (e === undefined) {\n    return false;\n  } else if (e.tag === 248) {\n    return true;\n  } else {\n    var slot = e[0];\n    if (slot !== undefined) {\n      return slot.tag === 248;\n    } else {\n      return false;\n    }\n  }\n}\n\n\n/* No side effect */\n\n\n//# sourceURL=webpack:///./node_modules/_bs-platform@5.2.1@bs-platform/lib/es6/caml_exceptions.js?");

/***/ }),

/***/ "./node_modules/_bs-platform@5.2.1@bs-platform/lib/es6/caml_js_exceptions.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_bs-platform@5.2.1@bs-platform/lib/es6/caml_js_exceptions.js ***!
  \***********************************************************************************/
/*! exports provided: $$Error, internalToOCamlException, caml_as_js_exn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$$Error\", function() { return $$Error; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"internalToOCamlException\", function() { return internalToOCamlException; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"caml_as_js_exn\", function() { return caml_as_js_exn; });\n/* harmony import */ var _caml_option_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caml_option.js */ \"./node_modules/_bs-platform@5.2.1@bs-platform/lib/es6/caml_option.js\");\n/* harmony import */ var _caml_exceptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caml_exceptions.js */ \"./node_modules/_bs-platform@5.2.1@bs-platform/lib/es6/caml_exceptions.js\");\n\n\n\n\n\nvar $$Error = _caml_exceptions_js__WEBPACK_IMPORTED_MODULE_1__[\"create\"](\"Caml_js_exceptions.Error\");\n\nfunction internalToOCamlException(e) {\n  if (_caml_exceptions_js__WEBPACK_IMPORTED_MODULE_1__[\"caml_is_extension\"](e)) {\n    return e;\n  } else {\n    return [\n            $$Error,\n            e\n          ];\n  }\n}\n\nfunction caml_as_js_exn(exn) {\n  if (exn[0] === $$Error) {\n    return _caml_option_js__WEBPACK_IMPORTED_MODULE_0__[\"some\"](exn[1]);\n  }\n  \n}\n\n\n/* No side effect */\n\n\n//# sourceURL=webpack:///./node_modules/_bs-platform@5.2.1@bs-platform/lib/es6/caml_js_exceptions.js?");

/***/ }),

/***/ "./node_modules/_bs-platform@5.2.1@bs-platform/lib/es6/caml_option.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_bs-platform@5.2.1@bs-platform/lib/es6/caml_option.js ***!
  \****************************************************************************/
/*! exports provided: nullable_to_opt, undefined_to_opt, null_to_opt, valFromOption, some, option_get, option_get_unwrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nullable_to_opt\", function() { return nullable_to_opt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"undefined_to_opt\", function() { return undefined_to_opt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"null_to_opt\", function() { return null_to_opt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"valFromOption\", function() { return valFromOption; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"some\", function() { return some; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"option_get\", function() { return option_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"option_get_unwrap\", function() { return option_get_unwrap; });\n\n\n\nvar undefinedHeader = /* array */[];\n\nfunction some(x) {\n  if (x === undefined) {\n    var block = /* tuple */[\n      undefinedHeader,\n      0\n    ];\n    block.tag = 256;\n    return block;\n  } else if (x !== null && x[0] === undefinedHeader) {\n    var nid = x[1] + 1 | 0;\n    var block$1 = /* tuple */[\n      undefinedHeader,\n      nid\n    ];\n    block$1.tag = 256;\n    return block$1;\n  } else {\n    return x;\n  }\n}\n\nfunction nullable_to_opt(x) {\n  if (x === null || x === undefined) {\n    return ;\n  } else {\n    return some(x);\n  }\n}\n\nfunction undefined_to_opt(x) {\n  if (x === undefined) {\n    return ;\n  } else {\n    return some(x);\n  }\n}\n\nfunction null_to_opt(x) {\n  if (x === null) {\n    return ;\n  } else {\n    return some(x);\n  }\n}\n\nfunction valFromOption(x) {\n  if (x !== null && x[0] === undefinedHeader) {\n    var depth = x[1];\n    if (depth === 0) {\n      return ;\n    } else {\n      return /* tuple */[\n              undefinedHeader,\n              depth - 1 | 0\n            ];\n    }\n  } else {\n    return x;\n  }\n}\n\nfunction option_get(x) {\n  if (x === undefined) {\n    return ;\n  } else {\n    return valFromOption(x);\n  }\n}\n\nfunction option_get_unwrap(x) {\n  if (x === undefined) {\n    return ;\n  } else {\n    return valFromOption(x)[1];\n  }\n}\n\n\n/* No side effect */\n\n\n//# sourceURL=webpack:///./node_modules/_bs-platform@5.2.1@bs-platform/lib/es6/caml_option.js?");

/***/ }),

/***/ "./node_modules/_bs-platform@5.2.1@bs-platform/lib/es6/js_exn.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_bs-platform@5.2.1@bs-platform/lib/es6/js_exn.js ***!
  \***********************************************************************/
/*! exports provided: $$Error, raiseError, raiseEvalError, raiseRangeError, raiseReferenceError, raiseSyntaxError, raiseTypeError, raiseUriError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$$Error\", function() { return $$Error$1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raiseError\", function() { return raiseError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raiseEvalError\", function() { return raiseEvalError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raiseRangeError\", function() { return raiseRangeError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raiseReferenceError\", function() { return raiseReferenceError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raiseSyntaxError\", function() { return raiseSyntaxError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raiseTypeError\", function() { return raiseTypeError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raiseUriError\", function() { return raiseUriError; });\n/* harmony import */ var _caml_js_exceptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caml_js_exceptions.js */ \"./node_modules/_bs-platform@5.2.1@bs-platform/lib/es6/caml_js_exceptions.js\");\n\n\n\n\nfunction raiseError(str) {\n  throw new Error(str);\n}\n\nfunction raiseEvalError(str) {\n  throw new EvalError(str);\n}\n\nfunction raiseRangeError(str) {\n  throw new RangeError(str);\n}\n\nfunction raiseReferenceError(str) {\n  throw new ReferenceError(str);\n}\n\nfunction raiseSyntaxError(str) {\n  throw new SyntaxError(str);\n}\n\nfunction raiseTypeError(str) {\n  throw new TypeError(str);\n}\n\nfunction raiseUriError(str) {\n  throw new URIError(str);\n}\n\nvar $$Error$1 = _caml_js_exceptions_js__WEBPACK_IMPORTED_MODULE_0__[\"$$Error\"];\n\n\n/* No side effect */\n\n\n//# sourceURL=webpack:///./node_modules/_bs-platform@5.2.1@bs-platform/lib/es6/js_exn.js?");

/***/ }),

/***/ "./node_modules/_bs-platform@5.2.1@bs-platform/lib/es6/js_null.js":
/*!************************************************************************!*\
  !*** ./node_modules/_bs-platform@5.2.1@bs-platform/lib/es6/js_null.js ***!
  \************************************************************************/
/*! exports provided: test, getExn, bind, iter, fromOption, from_opt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"test\", function() { return test; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getExn\", function() { return getExn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bind\", function() { return bind; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iter\", function() { return iter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromOption\", function() { return fromOption; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"from_opt\", function() { return from_opt; });\n/* harmony import */ var _caml_option_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caml_option.js */ \"./node_modules/_bs-platform@5.2.1@bs-platform/lib/es6/caml_option.js\");\n\n\n\n\nfunction test(x) {\n  return x === null;\n}\n\nfunction getExn(f) {\n  if (f !== null) {\n    return f;\n  } else {\n    throw new Error(\"Js.Null.getExn\");\n  }\n}\n\nfunction bind(x, f) {\n  if (x !== null) {\n    return f(x);\n  } else {\n    return null;\n  }\n}\n\nfunction iter(x, f) {\n  if (x !== null) {\n    return f(x);\n  } else {\n    return /* () */0;\n  }\n}\n\nfunction fromOption(x) {\n  if (x !== undefined) {\n    return _caml_option_js__WEBPACK_IMPORTED_MODULE_0__[\"valFromOption\"](x);\n  } else {\n    return null;\n  }\n}\n\nvar from_opt = fromOption;\n\n\n/* No side effect */\n\n\n//# sourceURL=webpack:///./node_modules/_bs-platform@5.2.1@bs-platform/lib/es6/js_null.js?");

/***/ })

/******/ });