(function(e, a) { for(var i in a) e[i] = a[i]; if(a.__esModule) Object.defineProperty(e, "__esModule", { value: true }); }(exports,
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./helpers.js":
/*!********************!*\
  !*** ./helpers.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "response": () => /* binding */ response
/* harmony export */ });
const response = data => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    statusCode: 200,
    body: JSON.stringify(data)
  };
};

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateUser": () => /* binding */ updateUser,
/* harmony export */   "createUser": () => /* binding */ createUser,
/* harmony export */   "deleteUser": () => /* binding */ deleteUser,
/* harmony export */   "getUser": () => /* binding */ getUser
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./helpers.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "./models.js");


const updateUser = async ({
  body
}) => {
  const {
    email,
    firstName,
    lastName,
    age
  } = JSON.parse(body);
  let user = await _models__WEBPACK_IMPORTED_MODULE_1__.UserModel.update({
    email
  }, {
    firstName,
    lastName,
    age
  });
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.response)({
    success: true,
    user
  });
};
const createUser = async ({
  body
}) => {
  const {
    email,
    firstName,
    lastName,
    age
  } = JSON.parse(body);
  console.log("here is the body", JSON.parse(body));
  let user = await _models__WEBPACK_IMPORTED_MODULE_1__.UserModel.create({
    email,
    firstName,
    lastName,
    age: parseInt(age)
  });
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.response)({
    success: true,
    user,
    hello: "ryan"
  });
};
const deleteUser = async ({
  queryStringParameters
}) => {
  const {
    email
  } = queryStringParameters;
  await _models__WEBPACK_IMPORTED_MODULE_1__.UserModel.delete({
    email
  });
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.response)({
    success: true
  });
};
const getUser = async ({
  queryStringParameters
}) => {
  const {
    email
  } = queryStringParameters;
  const user = await _models__WEBPACK_IMPORTED_MODULE_1__.UserModel.get({
    email
  });
  return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.response)({
    user
  });
};

/***/ }),

/***/ "./models.js":
/*!*******************!*\
  !*** ./models.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModel": () => /* binding */ UserModel
/* harmony export */ });
/* harmony import */ var dynamoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dynamoose */ "dynamoose");
/* harmony import */ var dynamoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dynamoose__WEBPACK_IMPORTED_MODULE_0__);

const UserSchema = new (dynamoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  email: {
    hashKey: true,
    required: true,
    type: String
  },
  age: {
    type: Number,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
});
const UserModel = dynamoose__WEBPACK_IMPORTED_MODULE_0___default().model("users-redux", UserSchema);

/***/ }),

/***/ "dynamoose":
/*!****************************!*\
  !*** external "dynamoose" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("dynamoose");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./index.js");
/******/ })()

));
//# sourceMappingURL=index.js.map