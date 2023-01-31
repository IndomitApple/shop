/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/delete.js":
/*!********************************!*\
  !*** ./resources/js/delete.js ***!
  \********************************/
/***/ (() => {

eval("$(function () {\n  $('.delete').click(function () {\n    var _this = this;\n    Swal.fire({\n      title: confirmDelete,\n      icon: 'warning',\n      showCancelButton: true,\n      confirmButtonText: 'Tak',\n      cancelButtonText: 'Nie'\n    }).then(function (result) {\n      if (result.value) {\n        $.ajax({\n          method: \"DELETE\",\n          url: deleteUrl + $(_this).data(\"id\")\n        }).done(function (data) {\n          window.location.reload();\n        }).fail(function (data) {\n          Swal.fire('Oops...', data.responseJSON.message, data.responseJSON.status);\n        });\n      }\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiY2xpY2siLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwiY29uZmlybURlbGV0ZSIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiYWpheCIsIm1ldGhvZCIsInVybCIsImRlbGV0ZVVybCIsImRhdGEiLCJkb25lIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJmYWlsIiwicmVzcG9uc2VKU09OIiwibWVzc2FnZSIsInN0YXR1cyJdLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGVsZXRlLmpzPzZjMTEiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpIHtcbiAgICAkKCcuZGVsZXRlJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogY29uZmlybURlbGV0ZSxcbiAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJ1RhaycsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnTmllJ1xuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogZGVsZXRlVXJsICsgJCh0aGlzKS5kYXRhKFwiaWRcIilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZmFpbChmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKCdPb3BzLi4uJywgZGF0YS5yZXNwb25zZUpTT04ubWVzc2FnZSwgZGF0YS5yZXNwb25zZUpTT04uc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBQyxZQUFXO0VBQ1RBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFlBQVc7SUFBQTtJQUMxQkMsSUFBSSxDQUFDQyxJQUFJLENBQUM7TUFDTkMsS0FBSyxFQUFFQyxhQUFhO01BQ3BCQyxJQUFJLEVBQUUsU0FBUztNQUNmQyxnQkFBZ0IsRUFBRSxJQUFJO01BQ3RCQyxpQkFBaUIsRUFBRSxLQUFLO01BQ3hCQyxnQkFBZ0IsRUFBRTtJQUN0QixDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFVBQUNDLE1BQU0sRUFBSztNQUNoQixJQUFJQSxNQUFNLENBQUNDLEtBQUssRUFBRTtRQUNkWixDQUFDLENBQUNhLElBQUksQ0FBQztVQUNIQyxNQUFNLEVBQUUsUUFBUTtVQUNoQkMsR0FBRyxFQUFFQyxTQUFTLEdBQUdoQixDQUFDLENBQUMsS0FBSSxDQUFDLENBQUNpQixJQUFJLENBQUMsSUFBSTtRQUN0QyxDQUFDLENBQUMsQ0FDR0MsSUFBSSxDQUFDLFVBQVVELElBQUksRUFBRTtVQUNsQkUsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sRUFBRTtRQUM1QixDQUFDLENBQUMsQ0FDREMsSUFBSSxDQUFDLFVBQVVMLElBQUksRUFBRTtVQUNsQmYsSUFBSSxDQUFDQyxJQUFJLENBQUMsU0FBUyxFQUFFYyxJQUFJLENBQUNNLFlBQVksQ0FBQ0MsT0FBTyxFQUFFUCxJQUFJLENBQUNNLFlBQVksQ0FBQ0UsTUFBTSxDQUFDO1FBQzdFLENBQUMsQ0FBQztNQUNWO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2RlbGV0ZS5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/delete.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/delete.js"]();
/******/ 	
/******/ })()
;