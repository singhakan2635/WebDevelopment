/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkLoginStatus": () => (/* binding */ checkLoginStatus),
/* harmony export */   "performLogin": () => (/* binding */ performLogin),
/* harmony export */   "deleteItem": () => (/* binding */ deleteItem),
/* harmony export */   "fetchLogout": () => (/* binding */ fetchLogout),
/* harmony export */   "fetchPostToAddItem": () => (/* binding */ fetchPostToAddItem),
/* harmony export */   "fetchPatchRanking": () => (/* binding */ fetchPatchRanking),
/* harmony export */   "fetchGet": () => (/* binding */ fetchGet)
/* harmony export */ });
var checkLoginStatus = function checkLoginStatus() {
  return fetch('/session', {
    method: 'GET'
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      console.log("Response - " + response);
      return response.json();
    }

    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  });
};
var performLogin = function performLogin(username) {
  return fetch('/session', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      username: username
    })
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  });
};
var deleteItem = function deleteItem(itemId) {
  return fetch("/items/".concat(itemId), {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'DELETE'
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  });
};
var fetchLogout = function fetchLogout() {
  return fetch("/session", {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'DELETE'
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  });
};
var fetchPostToAddItem = function fetchPostToAddItem(item) {
  return fetch('/items/', {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      'Content-type': 'application/json'
    }
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  });
};
var fetchPatchRanking = function fetchPatchRanking(item, itemsId) {
  return fetch("/items/".concat(itemsId), {
    body: JSON.stringify(item),
    headers: {
      'Content-type': 'application/json'
    },
    method: 'PATCH'
  })["catch"](function () {
    return Promise.reject({
      error: 'duplicate'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  });
};
var fetchGet = function fetchGet() {
  return fetch("/items/", {
    headers: {
      'Content-type': 'application/json'
    },
    method: 'GET'
  })["catch"](function () {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(function (err) {
      return Promise.reject(err);
    });
  });
};

function convertError(response) {
  if (response.ok) {
    return response.json();
  }

  return response.json().then(function (err) {
    return Promise.reject(err);
  });
}

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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./src/services.js");

var appSate = {
  pollId: null,
  isLoggedIn: false,
  items: {},
  username: '',
  ascending: false,
  descending: false
}; // TODO - should be object, not array
// Check for login

(0,_services__WEBPACK_IMPORTED_MODULE_0__.checkLoginStatus)().then(function (userInfo) {
  showContent();
  appSate.items = userInfo.todos;
  poll(true);
  updateStatus('');
  renderTodos(appSate.items);
})["catch"](function (err) {
  updateStatus(errorMessages[err.error] || err.error);

  if (!appSate.isLoggedIn) {
    showLogin();
  }
});
addLogin(); // TODO: Move these HTML-changing functions to an import from another file

function showContent() {
  document.querySelector('#todo-app .login').classList.add('hidden');
  document.querySelector('#todo-app .logged-in').classList.remove('hidden');
}

function showLogin() {
  document.querySelector('#todo-app .login').classList.remove('hidden');
  document.querySelector('#todo-app .logged-in').classList.add('hidden');
}

function addLogin() {
  document.querySelector('#todo-app .login button').addEventListener('click', function () {
    var usernameEl = document.querySelector('#todo-app .login input');
    var username = usernameEl.value; // call service

    (0,_services__WEBPACK_IMPORTED_MODULE_0__.performLogin)(username).then(function (userInfo) {
      showContent();
      appSate.isLoggedIn = true;
      appSate.items = userInfo.todos;
      appSate.username = userInfo.username;
      usernameEl.value = '';
      updateStatus('');
      poll(true);
      renderTodos(appSate.items);
    })["catch"](function (err) {
      updateStatus(errorMessages[err.error] || err.error);
      console.log(err);
    });
  });
}

var errorMessages = {
  'duplicate': 'Duplicate Item!',
  'missing-username': 'Username field empty',
  'network-error': 'There was a problem connecting to the network, try again',
  'missing-value': 'Value is not generated',
  'not-found': 'Item does not exist',
  'login-required': 'SID is missing or empty',
  'login-invalid': 'Bad login',
  'missing-sid': 'sid is missing',
  'sid-unknown': 'SID is unknown',
  'no-sid-generated': 'SID not generated',
  'missing-id': 'ItemId is missing',
  'username-missing': 'username was empty',
  'invalid-username': 'username contained disallowed characters'
};

function updateStatus(message) {
  status.innerText = message;
}

;
var listEl = document.querySelector('#todo-app .todos');
var inputEl = document.querySelector('.to-add');
var addButtonEl = document.querySelector('.add');
var status = document.querySelector('.status');
var logoutButtonEL = document.querySelector('.logout');
var sortAscButtonEl = document.querySelector('.sort-ascending');
var sortDescButtonEL = document.querySelector('.sort-descending');
addAbilityToDeleteItems();
pageLogout();
buttondisableIfNoInput();
addAbilityToAddItems();
addAbilityToChangeRanking();
addAbilityToSortAscendinf();
abilityToSortItems();
addAbilityToSortDescending();
addAbilityToUpdateItem();

function renderTodos(items) {
  //const listEl = document.querySelector('#todo-app .todos');
  var html = Object.keys(items).map(function (key) {
    var item = items[key];
    return "\n          <li>\n          \n              <div class=\"delete-button\">\n                  <button class=\"delete\" data-id=\"".concat(item.itemId, "\">X</button>\n              </div>\n              <div class=\"description\">\n                  <span class=\"item\" data-id=\"").concat(item.itemId, "\"> \n                      ").concat(item.task, "\n                  </span>\n              </div>\n              \n              <div class=\"list-count\">\n                  <button class=\"minus\" data-id=\"").concat(item.itemId, "\" ").concat(item.ranking == 1 ? "disabled" : "", " > - </button>\n                  <span class=\"item item-count\" data-id=\"").concat(item.itemId, "\" >\n                      ").concat(item.ranking, "\n                  </span>\n                  <button class=\"plus\" data-id=\"").concat(item.itemId, "\" ").concat(item.ranking == 5 ? "disabled" : "", "> + </button>\n              </div>\n          \n          </li>\n      ");
  }).join('');
  listEl.innerHTML = html;
}

function poll(shouldpoll) {
  if (shouldpoll && !appSate.pollId) {
    appSate.pollId = setInterval(function () {
      (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchGet)().then(function (userInfo) {
        showContent();
        appSate.items = userInfo.todos;
        abilityToSortItems();
        renderTodos(appSate.items);
        updateStatus('');
      })["catch"](function (err) {
        updateStatus(errorMessages[err.error] || err.error);
        console.log(err);
      });
    }, 5000);
  }

  if (!shouldpoll && appSate.pollId) {
    clearTimeout(appSate.pollId);
    appSate.pollId = null;
    appSate.ascending = false;
  }
}

function addAbilityToDeleteItems() {
  listEl.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
      var itemId = e.target.dataset.id;
      (0,_services__WEBPACK_IMPORTED_MODULE_0__.deleteItem)(itemId).then(function (userInfo) {
        showContent();
        appSate.items = userInfo.todos;
        abilityToSortItems();
        renderTodos(appSate.items);
        updateStatus('');
      })["catch"](function (err) {
        updateStatus(errorMessages[err.error] || err.error);
        console.log(err);
      });
    }
  });
}

function pageLogout() {
  logoutButtonEL.addEventListener('click', function (e) {
    (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchLogout)().then(function () {
      appSate.isLoggedIn = false;
      poll(false);
      updateStatus('');
      showLogin();
    })["catch"](function (err) {
      appSate.isLoggedIn = false;
      appSate.ascending = false;
      poll(false);
      updateStatus(errorMessages[err.error] || err.error);
      showLogin();
    });
  });
}

function buttondisableIfNoInput() {
  inputEl.addEventListener('input', function () {
    addButtonEl.disabled = !inputEl.value;
  });
}

function addAbilityToAddItems() {
  addButtonEl.addEventListener('click', function (e) {
    var task = inputEl.value;
    var regrex = /^[a-zA-z0-9]+$/;
    var item = {
      task: task,
      username: appSate.username
    };

    if (!task.match(regrex)) {
      updateStatus("Please enter correct name!");
    } else {
      (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchPostToAddItem)(item).then(function (userInfo) {
        showContent();
        appSate.items = userInfo.todos;
        abilityToSortItems();
        renderTodos(appSate.items);
        inputEl.value = '';
        updateStatus('');
      })["catch"](function (err) {
        updateStatus(errorMessages[err.error] || err.error);
        console.log(err);
      });
    }
  });
}

function addAbilityToChangeRanking() {
  listEl.addEventListener('click', function (e) {
    var itemsId = e.target.dataset.id;

    if (e.target.classList.contains('plus')) {
      var item = {
        value: "increment",
        username: appSate.username
      };
      (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchPatchRanking)(item, itemsId).then(function (item) {
        showContent();
        addAbilityToUpdateItem(item);
        abilityToSortItems();
        renderTodos(appSate.items);
        updateStatus('');
      })["catch"](function (err) {
        updateStatus(errorMessages[err.error] || err.error);
        console.log(err);
      });
    }

    if (e.target.classList.contains('minus')) {
      var _item = {
        value: "decrement",
        username: appSate.username
      };
      (0,_services__WEBPACK_IMPORTED_MODULE_0__.fetchPatchRanking)(_item, itemsId).then(function (item) {
        showContent();
        addAbilityToUpdateItem(item);
        abilityToSortItems();
        renderTodos(appSate.items);
        updateStatus('');
      })["catch"](function (err) {
        updateStatus(errorMessages[err.error] || err.error);
        console.log(err);
      });
    }
  });
}

function addAbilityToUpdateItem(item) {
  for (var key in appSate.items) {
    if (key == item.itemId) {
      appSate.items[key].ranking = item.ranking;
    }
  }

  ;
}

function addAbilityToSortAscendinf() {
  sortAscButtonEl.addEventListener('click', function (e) {
    appSate.ascending = true;
    appSate.descending = false;
    abilityToSortItems();
    renderTodos(appSate.items);
  });
}

function addAbilityToSortDescending() {
  sortDescButtonEL.addEventListener('click', function (e) {
    appSate.descending = true;
    appSate.ascending = false;
    abilityToSortItems();
    renderTodos(appSate.items);
  });
}

function abilityToSortItems() {
  if (appSate.ascending) {
    appSate.descending = false;
    var SortedItem = Object.fromEntries(Object.entries(appSate.items).sort(function (a, b) {
      return a[1].ranking - b[1].ranking;
    }));
    appSate.items = SortedItem;
  }

  if (appSate.descending) {
    appSate.ascending = false;

    var _SortedItem = Object.fromEntries(Object.entries(appSate.items).sort(function (a, b) {
      return b[1].ranking - a[1].ranking;
    }));

    appSate.items = _SortedItem;
  }
}
})();

/******/ })()
;
//# sourceMappingURL=todo.js.map