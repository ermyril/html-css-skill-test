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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("function toggleChat(e) {\n\tvar chat = document.getElementById('chat');\n\tchat.classList.toggle('chat--opened');\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n\tvar chat = document.getElementById('chat');\n\tvar toggler = document.getElementsByClassName('js-toggle-chat');\n\n\tfor (var i = toggler.length - 1; i >= 0; i--) {\n\t\ttoggler[i].addEventListener('click', toggleChat);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzdhYzkiXSwibmFtZXMiOlsidG9nZ2xlQ2hhdCIsImUiLCJjaGF0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImkiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFVBQVQsQ0FBb0JDLENBQXBCLEVBQXNCO0FBQ3JCLEtBQU1DLE9BQU9DLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYjtBQUNBRixNQUFLRyxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsY0FBdEI7QUFDQTs7QUFFREgsU0FBU0ksZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVU7QUFDdkQsS0FBTUwsT0FBT0MsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUFiO0FBQ0EsS0FBTUksVUFBVUwsU0FBU00sc0JBQVQsQ0FBZ0MsZ0JBQWhDLENBQWhCOztBQUVBLE1BQUssSUFBSUMsSUFBSUYsUUFBUUcsTUFBUixHQUFpQixDQUE5QixFQUFpQ0QsS0FBSyxDQUF0QyxFQUF5Q0EsR0FBekMsRUFBOEM7QUFDN0NGLFVBQVFFLENBQVIsRUFBV0gsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUNQLFVBQXJDO0FBQ0E7QUFDRCxDQVBEIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB0b2dnbGVDaGF0KGUpe1xuXHRjb25zdCBjaGF0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXQnKTtcblx0Y2hhdC5jbGFzc0xpc3QudG9nZ2xlKCdjaGF0LS1vcGVuZWQnKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcblx0Y29uc3QgY2hhdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGF0Jyk7XG5cdGNvbnN0IHRvZ2dsZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdqcy10b2dnbGUtY2hhdCcpO1xuXG5cdGZvciAodmFyIGkgPSB0b2dnbGVyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0dG9nZ2xlcltpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUNoYXQpO1xuXHR9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnNjc3M/ZTE3NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);