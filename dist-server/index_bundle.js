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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/controllers/users.js":
/*!*************************************!*\
  !*** ./server/controllers/users.js ***!
  \*************************************/
/*! exports provided: getUsers, createUser, deleteUser, getUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUsers\", function() { return getUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUser\", function() { return createUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteUser\", function() { return deleteUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUser\", function() { return getUser; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/User */ \"./server/models/User.js\");\n\n\n\nfunction getUsers(_x, _x2) {\n  return _getUsers.apply(this, arguments);\n}\n\nfunction _getUsers() {\n  _getUsers = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {\n    var users;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findAll();\n\n          case 2:\n            users = _context.sent;\n            res.json(users);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getUsers.apply(this, arguments);\n}\n\nfunction createUser(_x3, _x4) {\n  return _createUser.apply(this, arguments);\n}\n\nfunction _createUser() {\n  _createUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(req, res) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create(req.body);\n\n          case 2:\n            res.sendStatus(200);\n\n          case 3:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _createUser.apply(this, arguments);\n}\n\nfunction deleteUser(_x5, _x6) {\n  return _deleteUser.apply(this, arguments);\n}\n\nfunction _deleteUser() {\n  _deleteUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(req, res) {\n    var user;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByPk(req.params.id);\n\n          case 2:\n            user = _context3.sent;\n            if (!user) res.sendStatus(404);\n            _context3.next = 6;\n            return user.destroy();\n\n          case 6:\n            res.sendStatus(200);\n\n          case 7:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _deleteUser.apply(this, arguments);\n}\n\nfunction getUser(_x7, _x8) {\n  return _getUser.apply(this, arguments);\n}\n\nfunction _getUser() {\n  _getUser = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(req, res) {\n    var user;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.next = 2;\n            return _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByPk(req.params.id);\n\n          case 2:\n            user = _context4.sent;\n            res.json(user);\n\n          case 4:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return _getUser.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./server/controllers/users.js?");

/***/ }),

/***/ "./server/data.json":
/*!**************************!*\
  !*** ./server/data.json ***!
  \**************************/
/*! exports provided: specialities, groups, genders, colors, users, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"specialities\\\":[{\\\"name\\\":\\\"КБ\\\"},{\\\"name\\\":\\\"КН\\\"},{\\\"name\\\":\\\"ФИИТ\\\"}],\\\"groups\\\":[{\\\"name\\\":\\\"КБ-101\\\",\\\"SpecialityId\\\":1},{\\\"name\\\":\\\"ФИИТ-101\\\",\\\"SpecialityId\\\":3},{\\\"name\\\":\\\"ФИИТ-102\\\",\\\"SpecialityId\\\":3},{\\\"name\\\":\\\"ФИИТ-103\\\",\\\"SpecialityId\\\":3},{\\\"name\\\":\\\"КН-101\\\",\\\"SpecialityId\\\":2}],\\\"genders\\\":[{\\\"name\\\":\\\"Мужской\\\"},{\\\"name\\\":\\\"Женский\\\"}],\\\"colors\\\":[{\\\"color\\\":\\\"#49C2E8\\\"},{\\\"color\\\":\\\"#E25B5B\\\"},{\\\"color\\\":\\\"#83C872\\\"},{\\\"color\\\":\\\"#F7FB53\\\"},{\\\"color\\\":\\\"#000000\\\"},{\\\"color\\\":\\\"#EFA638\\\"},{\\\"color\\\":\\\"url(lgbt.jpg)\\\"}],\\\"users\\\":[{\\\"fullName\\\":\\\"Иванов Иван Иванович\\\",\\\"rating\\\":97,\\\"age\\\":20,\\\"ColorId\\\":3,\\\"GenderId\\\":1,\\\"GroupId\\\":3}]}\");\n\n//# sourceURL=webpack:///./server/data.json?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.json */ \"./server/data.json\");\nvar _data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ \"./server/data.json\", 1);\n/* harmony import */ var _sequelizeConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sequelizeConnection */ \"./server/sequelizeConnection.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _models_Speciality__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/Speciality */ \"./server/models/Speciality.js\");\n/* harmony import */ var _models_Group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/Group */ \"./server/models/Group.js\");\n/* harmony import */ var _models_Color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/Color */ \"./server/models/Color.js\");\n/* harmony import */ var _models_Gender__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/Gender */ \"./server/models/Gender.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models/User */ \"./server/models/User.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes */ \"./server/routes.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_4___default()();\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_11___default.a.urlencoded({\n  extended: false\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_11___default.a.json());\nObject(_routes__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(app);\n_sequelizeConnection__WEBPACK_IMPORTED_MODULE_3__[\"default\"].authenticate().then(function () {\n  return _sequelizeConnection__WEBPACK_IMPORTED_MODULE_3__[\"default\"].sync({\n    force: true\n  });\n}).then(function () {\n  _models_Speciality__WEBPACK_IMPORTED_MODULE_5__[\"default\"].bulkCreate(_data_json__WEBPACK_IMPORTED_MODULE_2__.specialities).then(function () {\n    return _models_Group__WEBPACK_IMPORTED_MODULE_6__[\"default\"].bulkCreate(_data_json__WEBPACK_IMPORTED_MODULE_2__.groups);\n  }).then(function () {\n    return _models_Color__WEBPACK_IMPORTED_MODULE_7__[\"default\"].bulkCreate(_data_json__WEBPACK_IMPORTED_MODULE_2__.colors);\n  }).then(function () {\n    return _models_Gender__WEBPACK_IMPORTED_MODULE_8__[\"default\"].bulkCreate(_data_json__WEBPACK_IMPORTED_MODULE_2__.genders);\n  }).then(function () {\n    return _models_User__WEBPACK_IMPORTED_MODULE_9__[\"default\"].bulkCreate(_data_json__WEBPACK_IMPORTED_MODULE_2__.users);\n  });\n}).then(function () {\n  var port = 9090;\n  app.listen(port, /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.info(\"Server started on \".concat(port));\n            console.info(\"Open http://localhost:\".concat(port, \"/\"));\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })));\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/models/Color.js":
/*!********************************!*\
  !*** ./server/models/Color.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Color; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sequelizeConnection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sequelizeConnection */ \"./server/sequelizeConnection.js\");\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Color = /*#__PURE__*/function (_Model) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(Color, _Model);\n\n  var _super = _createSuper(Color);\n\n  function Color() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Color);\n\n    return _super.apply(this, arguments);\n  }\n\n  return Color;\n}(sequelize__WEBPACK_IMPORTED_MODULE_4__[\"Model\"]);\n\n\nColor.init({\n  id: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_4__[\"INTEGER\"],\n    allowNull: false,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  color: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_4__[\"STRING\"],\n    allowNull: false\n  }\n}, {\n  sequelize: _sequelizeConnection__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n});\n\n//# sourceURL=webpack:///./server/models/Color.js?");

/***/ }),

/***/ "./server/models/Gender.js":
/*!*********************************!*\
  !*** ./server/models/Gender.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gender; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sequelizeConnection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sequelizeConnection */ \"./server/sequelizeConnection.js\");\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Gender = /*#__PURE__*/function (_Model) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(Gender, _Model);\n\n  var _super = _createSuper(Gender);\n\n  function Gender() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Gender);\n\n    return _super.apply(this, arguments);\n  }\n\n  return Gender;\n}(sequelize__WEBPACK_IMPORTED_MODULE_4__[\"Model\"]);\n\n\nGender.init({\n  id: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_4__[\"INTEGER\"],\n    allowNull: false,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  name: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_4__[\"STRING\"],\n    allowNull: false\n  }\n}, {\n  sequelize: _sequelizeConnection__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n});\n\n//# sourceURL=webpack:///./server/models/Gender.js?");

/***/ }),

/***/ "./server/models/Group.js":
/*!********************************!*\
  !*** ./server/models/Group.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Group; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Speciality__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Speciality */ \"./server/models/Speciality.js\");\n/* harmony import */ var _sequelizeConnection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sequelizeConnection */ \"./server/sequelizeConnection.js\");\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar Group = /*#__PURE__*/function (_Model) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(Group, _Model);\n\n  var _super = _createSuper(Group);\n\n  function Group() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Group);\n\n    return _super.apply(this, arguments);\n  }\n\n  return Group;\n}(sequelize__WEBPACK_IMPORTED_MODULE_4__[\"Model\"]);\n\n\nGroup.init({\n  id: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_4__[\"INTEGER\"],\n    allowNull: false,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  name: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_4__[\"STRING\"],\n    allowNull: false\n  }\n}, {\n  sequelize: _sequelizeConnection__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n});\nGroup.speciality = Group.belongsTo(_Speciality__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n//# sourceURL=webpack:///./server/models/Group.js?");

/***/ }),

/***/ "./server/models/Speciality.js":
/*!*************************************!*\
  !*** ./server/models/Speciality.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Speciality; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sequelizeConnection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sequelizeConnection */ \"./server/sequelizeConnection.js\");\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Speciality = /*#__PURE__*/function (_Model) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(Speciality, _Model);\n\n  var _super = _createSuper(Speciality);\n\n  function Speciality() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Speciality);\n\n    return _super.apply(this, arguments);\n  }\n\n  return Speciality;\n}(sequelize__WEBPACK_IMPORTED_MODULE_4__[\"Model\"]);\n\n\nSpeciality.init({\n  id: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_4__[\"DataTypes\"].INTEGER,\n    allowNull: false,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  name: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_4__[\"DataTypes\"].STRING,\n    allowNull: false\n  }\n}, {\n  sequelize: _sequelizeConnection__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n});\n\n//# sourceURL=webpack:///./server/models/Speciality.js?");

/***/ }),

/***/ "./server/models/User.js":
/*!*******************************!*\
  !*** ./server/models/User.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return User; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sequelizeConnection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sequelizeConnection */ \"./server/sequelizeConnection.js\");\n/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Group */ \"./server/models/Group.js\");\n/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Color */ \"./server/models/Color.js\");\n/* harmony import */ var _Gender__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Gender */ \"./server/models/Gender.js\");\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar User = /*#__PURE__*/function (_Model) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(User, _Model);\n\n  var _super = _createSuper(User);\n\n  function User() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, User);\n\n    return _super.apply(this, arguments);\n  }\n\n  return User;\n}(sequelize__WEBPACK_IMPORTED_MODULE_4__[\"Model\"]);\n\n\nUser.init({\n  id: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_4__[\"INTEGER\"],\n    allowNull: false,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  fullName: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_4__[\"STRING\"],\n    allowNull: false\n  },\n  rating: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_4__[\"INTEGER\"],\n    allowNull: false\n  },\n  age: {\n    type: sequelize__WEBPACK_IMPORTED_MODULE_4__[\"INTEGER\"],\n    allowNull: false\n  }\n}, {\n  sequelize: _sequelizeConnection__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n});\nUser.group = User.belongsTo(_Group__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nUser.color = User.belongsTo(_Color__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\nUser.gender = User.belongsTo(_Gender__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n\n//# sourceURL=webpack:///./server/models/User.js?");

/***/ }),

/***/ "./server/routes.js":
/*!**************************!*\
  !*** ./server/routes.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/users */ \"./server/controllers/users.js\");\n\n\n\n\nfunction errorWrapper(_x, _x2, _x3) {\n  return _errorWrapper.apply(this, arguments);\n}\n\nfunction _errorWrapper() {\n  _errorWrapper = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res, func) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return func(req, res);\n\n          case 3:\n            _context.next = 9;\n            break;\n\n          case 5:\n            _context.prev = 5;\n            _context.t0 = _context[\"catch\"](0);\n            res.sendStatus(500);\n            console.log(_context.t0);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 5]]);\n  }));\n  return _errorWrapper.apply(this, arguments);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  app.get('/users/', function (req, res) {\n    return errorWrapper(req, res, _controllers_users__WEBPACK_IMPORTED_MODULE_2__[\"getUsers\"]);\n  });\n  app.get('/users/:id', function (req, res) {\n    return errorWrapper(req, res, _controllers_users__WEBPACK_IMPORTED_MODULE_2__[\"getUser\"]);\n  });\n  app[\"delete\"]('/users/:id', _controllers_users__WEBPACK_IMPORTED_MODULE_2__[\"deleteUser\"]);\n  app.post('/users/create', _controllers_users__WEBPACK_IMPORTED_MODULE_2__[\"createUser\"]);\n});\n\n//# sourceURL=webpack:///./server/routes.js?");

/***/ }),

/***/ "./server/sequelizeConnection.js":
/*!***************************************!*\
  !*** ./server/sequelizeConnection.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar connection = new sequelize__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"]('qhlpwazs', 'qhlpwazs', '6EChyrCaOZaXSTqD6INjn1Qh-dafmurf', {\n  host: 'rogue.db.elephantsql.com',\n  dialect: 'postgres',\n  models: [path__WEBPACK_IMPORTED_MODULE_1___default.a.join(__dirname, 'models')]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (connection);\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./server/sequelizeConnection.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/getPrototypeOf\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/getPrototypeOf%22?");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/inherits\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/inherits%22?");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/possibleConstructorReturn\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ })

/******/ });