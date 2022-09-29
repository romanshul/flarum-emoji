module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport *//*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/simple-emoji-map/generated/emojis.json":
/*!*************************************************************!*\
  !*** ./node_modules/simple-emoji-map/generated/emojis.json ***!
  \*************************************************************/
/*! exports provided: 😀, 😃, 😄, 😁, 😆, 😅, 🤣, 😂, 🙂, 🙃, 😉, 😊, 😇, 🥰, 😍, 🤩, 😘, 😗, ☺️, 😚, 😙, 🥲, 😋, 😛, 😜, 🤪, 😝, 🤑, 🤗, 🤭, 🤫, 🤔, 🤐, 🤨, 😐️, 😑, 😶, 😏, 😒, 🙄, 😬, 🤥, 😌, 😔, 😪, 🤤, 😴, 😷, 🤒, 🤕, 🤢, 🤮, 🤧, 🥵, 🥶, 🥴, 😵, 🤯, 🤠, 🥳, 🥸, 😎, 🤓, 🧐, 😕, 😟, 🙁, ☹️, 😮, 😯, 😲, 😳, 🥺, 😦, 😧, 😨, 😰, 😥, 😢, 😭, 😱, 😖, 😣, 😞, 😓, 😩, 😫, 🥱, 😤, 😡, 😠, 🤬, 😈, 👿, 💀, ☠️, 💩, 🤡, 👹, 👺, 👻, 👽️, 👾, 🤖, 😺, 😸, 😹, 😻, 😼, 😽, 🙀, 😿, 😾, 🙈, 🙉, 🙊, 💋, 💌, 💘, 💝, 💖, 💗, 💓, 💞, 💕, 💟, ❣️, 💔, ❤️, 🧡, 💛, 💚, 💙, 💜, 🤎, 🖤, 🤍, 💯, 💢, 💥, 💫, 💦, 💨, 🕳️, 💣️, 💬, 👁‍🗨, 🗨️, 🗯️, 💭, 💤, 👋, 🤚, 🖐️, ✋, 🖖, 👌, 🤌, 🤏, ✌️, 🤞, 🤟, 🤘, 🤙, 👈️, 👉️, 👆️, 🖕, 👇️, ☝️, 👍️, 👎️, ✊, 👊, 🤛, 🤜, 👏, 🙌, 👐, 🤲, 🤝, 🙏, ✍️, 💅, 🤳, 💪, 🦾, 🦿, 🦵, 🦶, 👂️, 🦻, 👃, 🧠, 🫀, 🫁, 🦷, 🦴, 👀, 👁️, 👅, 👄, 👶, 🧒, 👦, 👧, 🧑, 👱, 👨, 🧔, 👨‍🦰, 👨‍🦱, 👨‍🦳, 👨‍🦲, 👩, 👩‍🦰, 🧑‍🦰, 👩‍🦱, 🧑‍🦱, 👩‍🦳, 🧑‍🦳, 👩‍🦲, 🧑‍🦲, 👱‍♀️, 👱‍♂️, 🧓, 👴, 👵, 🙍, 🙍‍♂️, 🙍‍♀️, 🙎, 🙎‍♂️, 🙎‍♀️, 🙅, 🙅‍♂️, 🙅‍♀️, 🙆, 🙆‍♂️, 🙆‍♀️, 💁, 💁‍♂️, 💁‍♀️, 🙋, 🙋‍♂️, 🙋‍♀️, 🧏, 🧏‍♂️, 🧏‍♀️, 🙇, 🙇‍♂️, 🙇‍♀️, 🤦, 🤦‍♂️, 🤦‍♀️, 🤷, 🤷‍♂️, 🤷‍♀️, 🧑‍⚕️, 👨‍⚕️, 👩‍⚕️, 🧑‍🎓, 👨‍🎓, 👩‍🎓, 🧑‍🏫, 👨‍🏫, 👩‍🏫, 🧑‍⚖️, 👨‍⚖️, 👩‍⚖️, 🧑‍🌾, 👨‍🌾, 👩‍🌾, 🧑‍🍳, 👨‍🍳, 👩‍🍳, 🧑‍🔧, 👨‍🔧, 👩‍🔧, 🧑‍🏭, 👨‍🏭, 👩‍🏭, 🧑‍💼, 👨‍💼, 👩‍💼, 🧑‍🔬, 👨‍🔬, 👩‍🔬, 🧑‍💻, 👨‍💻, 👩‍💻, 🧑‍🎤, 👨‍🎤, 👩‍🎤, 🧑‍🎨, 👨‍🎨, 👩‍🎨, 🧑‍✈️, 👨‍✈️, 👩‍✈️, 🧑‍🚀, 👨‍🚀, 👩‍🚀, 🧑‍🚒, 👨‍🚒, 👩‍🚒, 👮, 👮‍♂️, 👮‍♀️, 🕵️, 🕵️‍♂️, 🕵️‍♀️, 💂, 💂‍♂️, 💂‍♀️, 🥷, 👷, 👷‍♂️, 👷‍♀️, 🤴, 👸, 👳, 👳‍♂️, 👳‍♀️, 👲, 🧕, 🤵, 🤵‍♂️, 🤵‍♀️, 👰, 👰‍♂️, 👰‍♀️, 🤰, 🤱, 👩‍🍼, 👨‍🍼, 🧑‍🍼, 👼, 🎅, 🤶, 🧑‍🎄, 🦸, 🦸‍♂️, 🦸‍♀️, 🦹, 🦹‍♂️, 🦹‍♀️, 🧙, 🧙‍♂️, 🧙‍♀️, 🧚, 🧚‍♂️, 🧚‍♀️, 🧛, 🧛‍♂️, 🧛‍♀️, 🧜, 🧜‍♂️, 🧜‍♀️, 🧝, 🧝‍♂️, 🧝‍♀️, 🧞, 🧞‍♂️, 🧞‍♀️, 🧟, 🧟‍♂️, 🧟‍♀️, 💆, 💆‍♂️, 💆‍♀️, 💇, 💇‍♂️, 💇‍♀️, 🚶, 🚶‍♂️, 🚶‍♀️, 🧍, 🧍‍♂️, 🧍‍♀️, 🧎, 🧎‍♂️, 🧎‍♀️, 🧑‍🦯, 👨‍🦯, 👩‍🦯, 🧑‍🦼, 👨‍🦼, 👩‍🦼, 🧑‍🦽, 👨‍🦽, 👩‍🦽, 🏃, 🏃‍♂️, 🏃‍♀️, 💃, 🕺, 🕴️, 👯, 👯‍♂️, 👯‍♀️, 🧖, 🧖‍♂️, 🧖‍♀️, 🧗, 🧗‍♂️, 🧗‍♀️, 🤺, 🏇, ⛷️, 🏂️, 🏌️, 🏌️‍♂️, 🏌️‍♀️, 🏄️, 🏄‍♂️, 🏄‍♀️, 🚣, 🚣‍♂️, 🚣‍♀️, 🏊️, 🏊‍♂️, 🏊‍♀️, ⛹️, ⛹️‍♂️, ⛹️‍♀️, 🏋️, 🏋️‍♂️, 🏋️‍♀️, 🚴, 🚴‍♂️, 🚴‍♀️, 🚵, 🚵‍♂️, 🚵‍♀️, 🤸, 🤸‍♂️, 🤸‍♀️, 🤼, 🤼‍♂️, 🤼‍♀️, 🤽, 🤽‍♂️, 🤽‍♀️, 🤾, 🤾‍♂️, 🤾‍♀️, 🤹, 🤹‍♂️, 🤹‍♀️, 🧘, 🧘‍♂️, 🧘‍♀️, 🛀, 🛌, 🧑‍🤝‍🧑, 👭, 👫, 👬, 💏, 👩‍❤️‍💋‍👨, 👨‍❤️‍💋‍👨, 👩‍❤️‍💋‍👩, 💑, 👩‍❤️‍👨, 👨‍❤️‍👨, 👩‍❤️‍👩, 👪️, 👨‍👩‍👦, 👨‍👩‍👧, 👨‍👩‍👧‍👦, 👨‍👩‍👦‍👦, 👨‍👩‍👧‍👧, 👨‍👨‍👦, 👨‍👨‍👧, 👨‍👨‍👧‍👦, 👨‍👨‍👦‍👦, 👨‍👨‍👧‍👧, 👩‍👩‍👦, 👩‍👩‍👧, 👩‍👩‍👧‍👦, 👩‍👩‍👦‍👦, 👩‍👩‍👧‍👧, 👨‍👦, 👨‍👦‍👦, 👨‍👧, 👨‍👧‍👦, 👨‍👧‍👧, 👩‍👦, 👩‍👦‍👦, 👩‍👧, 👩‍👧‍👦, 👩‍👧‍👧, 🗣️, 👤, 👥, 🫂, 👣, 🏻, 🏼, 🏽, 🏾, 🏿, 🦰, 🦱, 🦳, 🦲, 🐵, 🐒, 🦍, 🦧, 🐶, 🐕️, 🦮, 🐕‍🦺, 🐩, 🐺, 🦊, 🦝, 🐱, 🐈️, 🐈‍⬛, 🦁, 🐯, 🐅, 🐆, 🐴, 🐎, 🦄, 🦓, 🦌, 🦬, 🐮, 🐂, 🐃, 🐄, 🐷, 🐖, 🐗, 🐽, 🐏, 🐑, 🐐, 🐪, 🐫, 🦙, 🦒, 🐘, 🦣, 🦏, 🦛, 🐭, 🐁, 🐀, 🐹, 🐰, 🐇, 🐿️, 🦫, 🦔, 🦇, 🐻, 🐻‍❄️, 🐨, 🐼, 🦥, 🦦, 🦨, 🦘, 🦡, 🐾, 🦃, 🐔, 🐓, 🐣, 🐤, 🐥, 🐦️, 🐧, 🕊️, 🦅, 🦆, 🦢, 🦉, 🦤, 🪶, 🦩, 🦚, 🦜, 🐸, 🐊, 🐢, 🦎, 🐍, 🐲, 🐉, 🦕, 🦖, 🐳, 🐋, 🐬, 🦭, 🐟️, 🐠, 🐡, 🦈, 🐙, 🐚, 🐌, 🦋, 🐛, 🐜, 🐝, 🪲, 🐞, 🦗, 🪳, 🕷️, 🕸️, 🦂, 🦟, 🪰, 🪱, 🦠, 💐, 🌸, 💮, 🏵️, 🌹, 🥀, 🌺, 🌻, 🌼, 🌷, 🌱, 🪴, 🌲, 🌳, 🌴, 🌵, 🌾, 🌿, ☘️, 🍀, 🍁, 🍂, 🍃, 🍇, 🍈, 🍉, 🍊, 🍋, 🍌, 🍍, 🥭, 🍎, 🍏, 🍐, 🍑, 🍒, 🍓, 🫐, 🥝, 🍅, 🫒, 🥥, 🥑, 🍆, 🥔, 🥕, 🌽, 🌶️, 🫑, 🥒, 🥬, 🥦, 🧄, 🧅, 🍄, 🥜, 🌰, 🍞, 🥐, 🥖, 🫓, 🥨, 🥯, 🥞, 🧇, 🧀, 🍖, 🍗, 🥩, 🥓, 🍔, 🍟, 🍕, 🌭, 🥪, 🌮, 🌯, 🫔, 🥙, 🧆, 🥚, 🍳, 🥘, 🍲, 🫕, 🥣, 🥗, 🍿, 🧈, 🧂, 🥫, 🍱, 🍘, 🍙, 🍚, 🍛, 🍜, 🍝, 🍠, 🍢, 🍣, 🍤, 🍥, 🥮, 🍡, 🥟, 🥠, 🥡, 🦀, 🦞, 🦐, 🦑, 🦪, 🍦, 🍧, 🍨, 🍩, 🍪, 🎂, 🍰, 🧁, 🥧, 🍫, 🍬, 🍭, 🍮, 🍯, 🍼, 🥛, ☕️, 🫖, 🍵, 🍶, 🍾, 🍷, 🍸️, 🍹, 🍺, 🍻, 🥂, 🥃, 🥤, 🧋, 🧃, 🧉, 🧊, 🥢, 🍽️, 🍴, 🥄, 🔪, 🏺, 🌍️, 🌎️, 🌏️, 🌐, 🗺️, 🗾, 🧭, 🏔️, ⛰️, 🌋, 🗻, 🏕️, 🏖️, 🏜️, 🏝️, 🏞️, 🏟️, 🏛️, 🏗️, 🧱, 🪨, 🪵, 🛖, 🏘️, 🏚️, 🏠️, 🏡, 🏢, 🏣, 🏤, 🏥, 🏦, 🏨, 🏩, 🏪, 🏫, 🏬, 🏭️, 🏯, 🏰, 💒, 🗼, 🗽, ⛪️, 🕌, 🛕, 🕍, ⛩️, 🕋, ⛲️, ⛺️, 🌁, 🌃, 🏙️, 🌄, 🌅, 🌆, 🌇, 🌉, ♨️, 🎠, 🎡, 🎢, 💈, 🎪, 🚂, 🚃, 🚄, 🚅, 🚆, 🚇️, 🚈, 🚉, 🚊, 🚝, 🚞, 🚋, 🚌, 🚍️, 🚎, 🚐, 🚑️, 🚒, 🚓, 🚔️, 🚕, 🚖, 🚗, 🚘️, 🚙, 🛻, 🚚, 🚛, 🚜, 🏎️, 🏍️, 🛵, 🦽, 🦼, 🛺, 🚲️, 🛴, 🛹, 🛼, 🚏, 🛣️, 🛤️, 🛢️, ⛽️, 🚨, 🚥, 🚦, 🛑, 🚧, ⚓️, ⛵️, 🛶, 🚤, 🛳️, ⛴️, 🛥️, 🚢, ✈️, 🛩️, 🛫, 🛬, 🪂, 💺, 🚁, 🚟, 🚠, 🚡, 🛰️, 🚀, 🛸, 🛎️, 🧳, ⌛️, ⏳️, ⌚️, ⏰, ⏱️, ⏲️, 🕰️, 🕛️, 🕧️, 🕐️, 🕜️, 🕑️, 🕝️, 🕒️, 🕞️, 🕓️, 🕟️, 🕔️, 🕠️, 🕕️, 🕡️, 🕖️, 🕢️, 🕗️, 🕣️, 🕘️, 🕤️, 🕙️, 🕥️, 🕚️, 🕦️, 🌑, 🌒, 🌓, 🌔, 🌕️, 🌖, 🌗, 🌘, 🌙, 🌚, 🌛, 🌜️, 🌡️, ☀️, 🌝, 🌞, 🪐, ⭐️, 🌟, 🌠, 🌌, ☁️, ⛅️, ⛈️, 🌤️, 🌥️, 🌦️, 🌧️, 🌨️, 🌩️, 🌪️, 🌫️, 🌬️, 🌀, 🌈, 🌂, ☂️, ☔️, ⛱️, ⚡️, ❄️, ☃️, ⛄️, ☄️, 🔥, 💧, 🌊, 🎃, 🎄, 🎆, 🎇, 🧨, ✨, 🎈, 🎉, 🎊, 🎋, 🎍, 🎎, 🎏, 🎐, 🎑, 🧧, 🎀, 🎁, 🎗️, 🎟️, 🎫, 🎖️, 🏆️, 🏅, 🥇, 🥈, 🥉, ⚽️, ⚾️, 🥎, 🏀, 🏐, 🏈, 🏉, 🎾, 🥏, 🎳, 🏏, 🏑, 🏒, 🥍, 🏓, 🏸, 🥊, 🥋, 🥅, ⛳️, ⛸️, 🎣, 🤿, 🎽, 🎿, 🛷, 🥌, 🎯, 🪀, 🪁, 🎱, 🔮, 🪄, 🧿, 🎮️, 🕹️, 🎰, 🎲, 🧩, 🧸, 🪅, 🪆, ♠️, ♥️, ♦️, ♣️, ♟️, 🃏, 🀄️, 🎴, 🎭️, 🖼️, 🎨, 🧵, 🪡, 🧶, 🪢, 👓️, 🕶️, 🥽, 🥼, 🦺, 👔, 👕, 👖, 🧣, 🧤, 🧥, 🧦, 👗, 👘, 🥻, 🩱, 🩲, 🩳, 👙, 👚, 👛, 👜, 👝, 🛍️, 🎒, 🩴, 👞, 👟, 🥾, 🥿, 👠, 👡, 🩰, 👢, 👑, 👒, 🎩, 🎓️, 🧢, 🪖, ⛑️, 📿, 💄, 💍, 💎, 🔇, 🔈️, 🔉, 🔊, 📢, 📣, 📯, 🔔, 🔕, 🎼, 🎵, 🎶, 🎙️, 🎚️, 🎛️, 🎤, 🎧️, 📻️, 🎷, 🪗, 🎸, 🎹, 🎺, 🎻, 🪕, 🥁, 🪘, 📱, 📲, ☎️, 📞, 📟️, 📠, 🔋, 🔌, 💻️, 🖥️, 🖨️, ⌨️, 🖱️, 🖲️, 💽, 💾, 💿️, 📀, 🧮, 🎥, 🎞️, 📽️, 🎬️, 📺️, 📷️, 📸, 📹️, 📼, 🔍️, 🔎, 🕯️, 💡, 🔦, 🏮, 🪔, 📔, 📕, 📖, 📗, 📘, 📙, 📚️, 📓, 📒, 📃, 📜, 📄, 📰, 🗞️, 📑, 🔖, 🏷️, 💰️, 🪙, 💴, 💵, 💶, 💷, 💸, 💳️, 🧾, 💹, ✉️, 📧, 📨, 📩, 📤️, 📥️, 📦️, 📫️, 📪️, 📬️, 📭️, 📮, 🗳️, ✏️, ✒️, 🖋️, 🖊️, 🖌️, 🖍️, 📝, 💼, 📁, 📂, 🗂️, 📅, 📆, 🗒️, 🗓️, 📇, 📈, 📉, 📊, 📋️, 📌, 📍, 📎, 🖇️, 📏, 📐, ✂️, 🗃️, 🗄️, 🗑️, 🔒️, 🔓️, 🔏, 🔐, 🔑, 🗝️, 🔨, 🪓, ⛏️, ⚒️, 🛠️, 🗡️, ⚔️, 🔫, 🪃, 🏹, 🛡️, 🪚, 🔧, 🪛, 🔩, ⚙️, 🗜️, ⚖️, 🦯, 🔗, ⛓️, 🪝, 🧰, 🧲, 🪜, ⚗️, 🧪, 🧫, 🧬, 🔬, 🔭, 📡, 💉, 🩸, 💊, 🩹, 🩺, 🚪, 🛗, 🪞, 🪟, 🛏️, 🛋️, 🪑, 🚽, 🪠, 🚿, 🛁, 🪤, 🪒, 🧴, 🧷, 🧹, 🧺, 🧻, 🪣, 🧼, 🪥, 🧽, 🧯, 🛒, 🚬, ⚰️, 🪦, ⚱️, 🗿, 🪧, 🏧, 🚮, 🚰, ♿️, 🚹️, 🚺️, 🚻, 🚼️, 🚾, 🛂, 🛃, 🛄, 🛅, ⚠️, 🚸, ⛔️, 🚫, 🚳, 🚭️, 🚯, 🚱, 🚷, 📵, 🔞, ☢️, ☣️, ⬆️, ↗️, ➡️, ↘️, ⬇️, ↙️, ⬅️, ↖️, ↕️, ↔️, ↩️, ↪️, ⤴️, ⤵️, 🔃, 🔄, 🔙, 🔚, 🔛, 🔜, 🔝, 🛐, ⚛️, 🕉️, ✡️, ☸️, ☯️, ✝️, ☦️, ☪️, ☮️, 🕎, 🔯, ♈️, ♉️, ♊️, ♋️, ♌️, ♍️, ♎️, ♏️, ♐️, ♑️, ♒️, ♓️, ⛎, 🔀, 🔁, 🔂, ▶️, ⏩️, ⏭️, ⏯️, ◀️, ⏪️, ⏮️, 🔼, ⏫, 🔽, ⏬, ⏸️, ⏹️, ⏺️, ⏏️, 🎦, 🔅, 🔆, 📶, 📳, 📴, ♀️, ♂️, ⚧️, ✖️, ➕, ➖, ➗, ♾️, ‼️, ⁉️, ❓️, ❔, ❕, ❗️, 〰️, 💱, 💲, ⚕️, ♻️, ⚜️, 🔱, 📛, 🔰, ⭕️, ✅, ☑️, ✔️, ❌, ❎, ➰, ➿, 〽️, ✳️, ✴️, ❇️, ©️, ®️, ™️, #️⃣, *️⃣, 0️⃣, 1️⃣, 2️⃣, 3️⃣, 4️⃣, 5️⃣, 6️⃣, 7️⃣, 8️⃣, 9️⃣, 🔟, 🔠, 🔡, 🔢, 🔣, 🔤, 🅰️, 🆎, 🅱️, 🆑, 🆒, 🆓, ℹ️, 🆔, Ⓜ️, 🆕, 🆖, 🅾️, 🆗, 🅿️, 🆘, 🆙, 🆚, 🈁, 🈂️, 🈷️, 🈶, 🈯️, 🉐, 🈹, 🈚️, 🈲, 🉑, 🈸, 🈴, 🈳, ㊗️, ㊙️, 🈺, 🈵, 🔴, 🟠, 🟡, 🟢, 🔵, 🟣, 🟤, ⚫️, ⚪️, 🟥, 🟧, 🟨, 🟩, 🟦, 🟪, 🟫, ⬛️, ⬜️, ◼️, ◻️, ◾️, ◽️, ▪️, ▫️, 🔶, 🔷, 🔸, 🔹, 🔺, 🔻, 💠, 🔘, 🔳, 🔲, 🏁, 🚩, 🎌, 🏴, 🏳️, 🏳️‍🌈, 🏳️‍⚧️, 🏴‍☠️, 🇦🇨, 🇦🇩, 🇦🇪, 🇦🇫, 🇦🇬, 🇦🇮, 🇦🇱, 🇦🇲, 🇦🇴, 🇦🇶, 🇦🇷, 🇦🇸, 🇦🇹, 🇦🇺, 🇦🇼, 🇦🇽, 🇦🇿, 🇧🇦, 🇧🇧, 🇧🇩, 🇧🇪, 🇧🇫, 🇧🇬, 🇧🇭, 🇧🇮, 🇧🇯, 🇧🇱, 🇧🇲, 🇧🇳, 🇧🇴, 🇧🇶, 🇧🇷, 🇧🇸, 🇧🇹, 🇧🇻, 🇧🇼, 🇧🇾, 🇧🇿, 🇨🇦, 🇨🇨, 🇨🇩, 🇨🇫, 🇨🇬, 🇨🇭, 🇨🇮, 🇨🇰, 🇨🇱, 🇨🇲, 🇨🇳, 🇨🇴, 🇨🇵, 🇨🇷, 🇨🇺, 🇨🇻, 🇨🇼, 🇨🇽, 🇨🇾, 🇨🇿, 🇩🇪, 🇩🇬, 🇩🇯, 🇩🇰, 🇩🇲, 🇩🇴, 🇩🇿, 🇪🇦, 🇪🇨, 🇪🇪, 🇪🇬, 🇪🇭, 🇪🇷, 🇪🇸, 🇪🇹, 🇪🇺, 🇫🇮, 🇫🇯, 🇫🇰, 🇫🇲, 🇫🇴, 🇫🇷, 🇬🇦, 🇬🇧, 🇬🇩, 🇬🇪, 🇬🇫, 🇬🇬, 🇬🇭, 🇬🇮, 🇬🇱, 🇬🇲, 🇬🇳, 🇬🇵, 🇬🇶, 🇬🇷, 🇬🇸, 🇬🇹, 🇬🇺, 🇬🇼, 🇬🇾, 🇭🇰, 🇭🇲, 🇭🇳, 🇭🇷, 🇭🇹, 🇭🇺, 🇮🇨, 🇮🇩, 🇮🇪, 🇮🇱, 🇮🇲, 🇮🇳, 🇮🇴, 🇮🇶, 🇮🇷, 🇮🇸, 🇮🇹, 🇯🇪, 🇯🇲, 🇯🇴, 🇯🇵, 🇰🇪, 🇰🇬, 🇰🇭, 🇰🇮, 🇰🇲, 🇰🇳, 🇰🇵, 🇰🇷, 🇰🇼, 🇰🇾, 🇰🇿, 🇱🇦, 🇱🇧, 🇱🇨, 🇱🇮, 🇱🇰, 🇱🇷, 🇱🇸, 🇱🇹, 🇱🇺, 🇱🇻, 🇱🇾, 🇲🇦, 🇲🇨, 🇲🇩, 🇲🇪, 🇲🇫, 🇲🇬, 🇲🇭, 🇲🇰, 🇲🇱, 🇲🇲, 🇲🇳, 🇲🇴, 🇲🇵, 🇲🇶, 🇲🇷, 🇲🇸, 🇲🇹, 🇲🇺, 🇲🇻, 🇲🇼, 🇲🇽, 🇲🇾, 🇲🇿, 🇳🇦, 🇳🇨, 🇳🇪, 🇳🇫, 🇳🇬, 🇳🇮, 🇳🇱, 🇳🇴, 🇳🇵, 🇳🇷, 🇳🇺, 🇳🇿, 🇴🇲, 🇵🇦, 🇵🇪, 🇵🇫, 🇵🇬, 🇵🇭, 🇵🇰, 🇵🇱, 🇵🇲, 🇵🇳, 🇵🇷, 🇵🇸, 🇵🇹, 🇵🇼, 🇵🇾, 🇶🇦, 🇷🇪, 🇷🇴, 🇷🇸, 🇷🇺, 🇷🇼, 🇸🇦, 🇸🇧, 🇸🇨, 🇸🇩, 🇸🇪, 🇸🇬, 🇸🇭, 🇸🇮, 🇸🇯, 🇸🇰, 🇸🇱, 🇸🇲, 🇸🇳, 🇸🇴, 🇸🇷, 🇸🇸, 🇸🇹, 🇸🇻, 🇸🇽, 🇸🇾, 🇸🇿, 🇹🇦, 🇹🇨, 🇹🇩, 🇹🇫, 🇹🇬, 🇹🇭, 🇹🇯, 🇹🇰, 🇹🇱, 🇹🇲, 🇹🇳, 🇹🇴, 🇹🇷, 🇹🇹, 🇹🇻, 🇹🇼, 🇹🇿, 🇺🇦, 🇺🇬, 🇺🇲, 🇺🇳, 🇺🇸, 🇺🇾, 🇺🇿, 🇻🇦, 🇻🇨, 🇻🇪, 🇻🇬, 🇻🇮, 🇻🇳, 🇻🇺, 🇼🇫, 🇼🇸, 🇽🇰, 🇾🇪, 🇾🇹, 🇿🇦, 🇿🇲, 🇿🇼, 🏴󠁧󠁢󠁥󠁮󠁧󠁿, 🏴󠁧󠁢󠁳󠁣󠁴󠁿, 🏴󠁧󠁢󠁷󠁬󠁳󠁿, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"😀\":[\"gleeful\"],\"😃\":[\"glad\",\"smile\"],\"😄\":[\"happy\"],\"😁\":[\"blissful\",\"grin\"],\"😆\":[\"amused\",\"laugh\",\"lol\"],\"😅\":[\"embarassed\",\"sweat_smile\"],\"🤣\":[\"entertained\",\"rofl\"],\"😂\":[\"joyful\",\"haha\"],\"🙂\":[\"pleased\",\"slight_smile\"],\"🙃\":[\"ecstatic\",\"upside_down\"],\"😉\":[\"coy\",\"wink\"],\"😊\":[\"blush\"],\"😇\":[\"innocent\",\"halo\"],\"🥰\":[\"love\"],\"😍\":[\"lovestruck\"],\"🤩\":[\"starstruck\"],\"😘\":[\"flirty\"],\"😗\":[\"kiss\"],\"☺️\":[\"relaxed\"],\"😚\":[\"loving_kiss\"],\"😙\":[\"happy_kiss\"],\"🥲\":[\"tear_smile\"],\"😋\":[\"yum\",\"savour\"],\"😛\":[\"playful\",\"tongue_out\"],\"😜\":[\"mischievous\"],\"🤪\":[\"crazy\"],\"😝\":[\"facetious\",\"lmao\"],\"🤑\":[\"pretentious\",\"money_mouth\"],\"🤗\":[\"hugging\"],\"🤭\":[\"gasp\"],\"🤫\":[\"shushing\"],\"🤔\":[\"curious\",\"thinking\"],\"🤐\":[\"silenced\",\"zipper_mouth\"],\"🤨\":[\"contempt\"],\"😐️\":[\"indifferent\",\"neutral\"],\"😑\":[\"apathetic\",\"expressionless\"],\"😶\":[\"vacant\",\"no_mouth\"],\"😏\":[\"cocky\",\"smirk\"],\"😒\":[\"unamused\"],\"🙄\":[\"disbelief\"],\"😬\":[\"grimaced\"],\"🤥\":[\"lying\"],\"😌\":[\"relieved\"],\"😔\":[\"pensive\"],\"😪\":[\"sleepy\"],\"🤤\":[\"drooling\"],\"😴\":[\"exhausted\",\"sleeping\"],\"😷\":[\"ill\",\"mask\"],\"🤒\":[\"sick\"],\"🤕\":[\"injured\"],\"🤢\":[\"nauseated\"],\"🤮\":[\"vomiting\"],\"🤧\":[\"sneezing\"],\"🥵\":[\"overheating\"],\"🥶\":[\"freezing\"],\"🥴\":[\"woozy\"],\"😵\":[\"dizzy\"],\"🤯\":[\"shocked\",\"exploding_head\"],\"🤠\":[\"cowboy\"],\"🥳\":[\"partying\",\"celebrating\"],\"🥸\":[\"disguised_face\"],\"😎\":[\"confident\"],\"🤓\":[\"nerd\"],\"🧐\":[\"monocle\"],\"😕\":[\"confused\"],\"😟\":[\"worried\"],\"🙁\":[\"cheerless\",\"slight_frown\"],\"☹️\":[\"sad\",\"frowning\"],\"😮\":[\"surprised\"],\"😯\":[\"hushed\"],\"😲\":[\"astonished\"],\"😳\":[\"flushed\"],\"🥺\":[\"pleading\"],\"😦\":[\"bored\"],\"😧\":[\"anguished\",\"wtf\"],\"😨\":[\"fearful\"],\"😰\":[\"cold_sweat\",\"anxious\",\"frustrated\"],\"😥\":[\"hopeful\"],\"😢\":[\"upset\",\"cry\"],\"😭\":[\"distressed\",\"sob\"],\"😱\":[\"frightened\",\"scream\"],\"😖\":[\"confounded\"],\"😣\":[\"persevered\"],\"😞\":[\"disappointed\"],\"😓\":[\"shamed\"],\"😩\":[\"weary\"],\"😫\":[\"tired\"],\"🥱\":[\"yawn\"],\"😤\":[\"annoyed\",\"hrmph\"],\"😡\":[\"enraged\",\"pout\"],\"😠\":[\"angry\"],\"🤬\":[\"censored\"],\"😈\":[\"imp\"],\"👿\":[\"angry_imp\"],\"💀\":[\"skull\"],\"☠️\":[\"crossbones\"],\"💩\":[\"poop\"],\"🤡\":[\"clown\"],\"👹\":[\"ogre\"],\"👺\":[\"goblin\"],\"👻\":[\"ghost\"],\"👽️\":[\"alien\"],\"👾\":[\"alien_monster\",\"space_invader\"],\"🤖\":[\"robot\"],\"😺\":[\"smiling_cat\"],\"😸\":[\"grinning_cat\"],\"😹\":[\"joyful_cat\"],\"😻\":[\"lovestruck_cat\"],\"😼\":[\"smirking_cat\"],\"😽\":[\"kissing_cat\"],\"🙀\":[\"weary_cat\"],\"😿\":[\"crying_cat\"],\"😾\":[\"pouting_cat\"],\"🙈\":[\"see_no_evil\"],\"🙉\":[\"hear_no_evil\"],\"🙊\":[\"speak_no_evil\"],\"💋\":[\"kiss_lips\"],\"💌\":[\"love_letter\"],\"💘\":[\"cupid\"],\"💝\":[\"heart_ribbon\"],\"💖\":[\"sparkling_heart\"],\"💗\":[\"heartpulse\"],\"💓\":[\"heartbeat\"],\"💞\":[\"revolving_hearts\"],\"💕\":[\"two_hearts\"],\"💟\":[\"heart_decoration\"],\"❣️\":[\"heart_exclamation\"],\"💔\":[\"broken_heart\"],\"❤️\":[\"heart\"],\"🧡\":[\"orange_heart\"],\"💛\":[\"yellow_heart\"],\"💚\":[\"green_heart\"],\"💙\":[\"blue_heart\"],\"💜\":[\"purple_heart\"],\"🤎\":[\"brown_heart\"],\"🖤\":[\"black_heart\"],\"🤍\":[\"white_heart\"],\"💯\":[\"100\"],\"💢\":[\"anger\"],\"💥\":[\"boom\",\"collision\"],\"💫\":[\"dizzy_star\"],\"💦\":[\"sweat_drops\"],\"💨\":[\"dash\"],\"🕳️\":[\"hole\"],\"💣️\":[\"bomb\"],\"💬\":[\"speech\"],\"👁‍🗨\":[\"eye_bubble\"],\"🗨️\":[\"left_speech\"],\"🗯️\":[\"right_anger_speech\"],\"💭\":[\"thought\"],\"💤\":[\"zzz\"],\"👋\":[\"wave\"],\"🤚\":[\"raised_backhand\"],\"🖐️\":[\"splayed_hand\"],\"✋\":[\"raised_hand\"],\"🖖\":[\"vulcan\"],\"👌\":[\"ok_hand\"],\"🤌\":[\"pinched_fingers\"],\"🤏\":[\"pinch\"],\"✌️\":[\"victory\"],\"🤞\":[\"fingers_crossed\"],\"🤟\":[\"love_you_gesture\"],\"🤘\":[\"metal\"],\"🤙\":[\"call_me\"],\"👈️\":[\"point_left\"],\"👉️\":[\"point_right\"],\"👆️\":[\"backhand_point_up\"],\"🖕\":[\"middle_finger\"],\"👇️\":[\"point_down\"],\"☝️\":[\"point_up\"],\"👍️\":[\"thumbsup\",\"+1\",\"yes\"],\"👎️\":[\"thumbsdown\",\"-1\",\"no\"],\"✊\":[\"fist\"],\"👊\":[\"punch\"],\"🤛\":[\"left_facing_fist\"],\"🤜\":[\"right_facing_fist\"],\"👏\":[\"clap\"],\"🙌\":[\"raised_hands\"],\"👐\":[\"open_hands\"],\"🤲\":[\"palms_up\"],\"🤝\":[\"handshake\"],\"🙏\":[\"pray\"],\"✍️\":[\"writing_hand\"],\"💅\":[\"nail_care\"],\"🤳\":[\"selfie\"],\"💪\":[\"muscle\",\"right_bicep\"],\"🦾\":[\"mech_arm\"],\"🦿\":[\"mech_leg\"],\"🦵\":[\"leg\"],\"🦶\":[\"foot\"],\"👂️\":[\"ear\"],\"🦻\":[\"hearing_aid\"],\"👃\":[\"nose\"],\"🧠\":[\"brain\"],\"🫀\":[\"anatomical_heart\"],\"🫁\":[\"lungs\"],\"🦷\":[\"tooth\"],\"🦴\":[\"bone\"],\"👀\":[\"eyes\"],\"👁️\":[\"eye\"],\"👅\":[\"tongue\"],\"👄\":[\"lips\"],\"👶\":[\"baby\"],\"🧒\":[\"child\"],\"👦\":[\"boy\"],\"👧\":[\"girl\"],\"🧑\":[\"adult\"],\"👱\":[\"blond_person\"],\"👨\":[\"man\"],\"🧔\":[\"bearded_person\"],\"👨‍🦰\":[\"red_haired_man\"],\"👨‍🦱\":[\"curly_haired_man\"],\"👨‍🦳\":[\"white_haired_man\"],\"👨‍🦲\":[\"bald_man\"],\"👩\":[\"woman\"],\"👩‍🦰\":[\"red_haired_woman\"],\"🧑‍🦰\":[\"red_haired_person\"],\"👩‍🦱\":[\"curly_haired_woman\"],\"🧑‍🦱\":[\"curly_haired_person\"],\"👩‍🦳\":[\"white_haired_woman\"],\"🧑‍🦳\":[\"white_haired_person\"],\"👩‍🦲\":[\"bald_woman\"],\"🧑‍🦲\":[\"bald_person\"],\"👱‍♀️\":[\"blond_woman\"],\"👱‍♂️\":[\"blond_man\"],\"🧓\":[\"older_adult\"],\"👴\":[\"older_man\"],\"👵\":[\"older_woman\"],\"🙍\":[\"person_frowning\"],\"🙍‍♂️\":[\"man_frowning\"],\"🙍‍♀️\":[\"woman_frowning\"],\"🙎\":[\"person_pouting\"],\"🙎‍♂️\":[\"man_pouting\"],\"🙎‍♀️\":[\"woman_pouting\"],\"🙅\":[\"person_gesturing_no\"],\"🙅‍♂️\":[\"man_gesturing_no\"],\"🙅‍♀️\":[\"woman_gesturing_no\"],\"🙆\":[\"person_gesturing_ok\"],\"🙆‍♂️\":[\"man_gesturing_ok\"],\"🙆‍♀️\":[\"woman_gesturing_ok\"],\"💁\":[\"person_tipping_hand\"],\"💁‍♂️\":[\"man_tipping_hand\"],\"💁‍♀️\":[\"woman_tipping_hand\"],\"🙋\":[\"person_raising_hand\"],\"🙋‍♂️\":[\"man_raising_hand\"],\"🙋‍♀️\":[\"woman_raising_hand\"],\"🧏\":[\"person_deaf\"],\"🧏‍♂️\":[\"man_deaf\"],\"🧏‍♀️\":[\"woman_deaf\"],\"🙇\":[\"person_bowing\"],\"🙇‍♂️\":[\"man_bowing\"],\"🙇‍♀️\":[\"woman_bowing\"],\"🤦\":[\"person_facepalming\"],\"🤦‍♂️\":[\"man_facepalming\"],\"🤦‍♀️\":[\"woman_facepalming\"],\"🤷\":[\"person_shrugging\"],\"🤷‍♂️\":[\"man_shrugging\"],\"🤷‍♀️\":[\"woman_shrugging\"],\"🧑‍⚕️\":[\"person_health_worker\"],\"👨‍⚕️\":[\"man_health_worker\"],\"👩‍⚕️\":[\"woman_health_worker\"],\"🧑‍🎓\":[\"person_student\"],\"👨‍🎓\":[\"man_student\"],\"👩‍🎓\":[\"woman_student\"],\"🧑‍🏫\":[\"person_teacher\"],\"👨‍🏫\":[\"man_teacher\"],\"👩‍🏫\":[\"woman_teacher\"],\"🧑‍⚖️\":[\"person_judge\"],\"👨‍⚖️\":[\"man_judge\"],\"👩‍⚖️\":[\"woman_judge\"],\"🧑‍🌾\":[\"person_farmer\"],\"👨‍🌾\":[\"man_farmer\"],\"👩‍🌾\":[\"woman_farmer\"],\"🧑‍🍳\":[\"person_cook\"],\"👨‍🍳\":[\"man_cook\"],\"👩‍🍳\":[\"woman_cook\"],\"🧑‍🔧\":[\"person_mechanic\"],\"👨‍🔧\":[\"man_mechanic\"],\"👩‍🔧\":[\"woman_mechanic\"],\"🧑‍🏭\":[\"person_factory_worker\"],\"👨‍🏭\":[\"man_factory_worker\"],\"👩‍🏭\":[\"woman_factory_worker\"],\"🧑‍💼\":[\"person_office_worker\"],\"👨‍💼\":[\"man_office_worker\"],\"👩‍💼\":[\"woman_office_worker\"],\"🧑‍🔬\":[\"person_scientist\"],\"👨‍🔬\":[\"man_scientist\"],\"👩‍🔬\":[\"woman_scientist\"],\"🧑‍💻\":[\"person_technologist\"],\"👨‍💻\":[\"man_technologist\"],\"👩‍💻\":[\"woman_technologist\"],\"🧑‍🎤\":[\"person_singer\"],\"👨‍🎤\":[\"man_singer\"],\"👩‍🎤\":[\"woman_singer\"],\"🧑‍🎨\":[\"person_artist\"],\"👨‍🎨\":[\"man_artist\"],\"👩‍🎨\":[\"woman_artist\"],\"🧑‍✈️\":[\"person_pilot\"],\"👨‍✈️\":[\"man_pilot\"],\"👩‍✈️\":[\"woman_pilot\"],\"🧑‍🚀\":[\"person_astronaut\"],\"👨‍🚀\":[\"man_astronaut\"],\"👩‍🚀\":[\"woman_astronaut\"],\"🧑‍🚒\":[\"person_firefighter\"],\"👨‍🚒\":[\"man_firefighter\"],\"👩‍🚒\":[\"woman_firefighter\"],\"👮\":[\"police_officer\"],\"👮‍♂️\":[\"man_police_officer\"],\"👮‍♀️\":[\"woman_police_officer\"],\"🕵️\":[\"detective\"],\"🕵️‍♂️\":[\"man_detective\"],\"🕵️‍♀️\":[\"woman_detective\"],\"💂\":[\"guard\"],\"💂‍♂️\":[\"man_guard\"],\"💂‍♀️\":[\"woman_guard\"],\"🥷\":[\"ninja\"],\"👷\":[\"construction_worker\"],\"👷‍♂️\":[\"man_construction_worker\"],\"👷‍♀️\":[\"woman_construction_worker\"],\"🤴\":[\"prince\"],\"👸\":[\"princess\"],\"👳\":[\"person_turban\"],\"👳‍♂️\":[\"man_turban\"],\"👳‍♀️\":[\"woman_turban\"],\"👲\":[\"man_chinese_cap\"],\"🧕\":[\"woman_headscarf\"],\"🤵\":[\"man_tuxedo\"],\"🤵‍♂️\":[\"man_in_tuxedo\"],\"🤵‍♀️\":[\"woman_in_tuxedo\"],\"👰\":[\"person_veiled_bride\",\"bride_veil\"],\"👰‍♂️\":[\"man_veiled_bride\"],\"👰‍♀️\":[\"woman_veiled_bride\"],\"🤰\":[\"pregnant_woman\"],\"🤱\":[\"breast_feeding\"],\"👩‍🍼\":[\"woman_feeding_baby\"],\"👨‍🍼\":[\"man_feeding_baby\"],\"🧑‍🍼\":[\"person_feeding_baby\"],\"👼\":[\"baby_angel\"],\"🎅\":[\"santa\"],\"🤶\":[\"mrs_claus\"],\"🧑‍🎄\":[\"mx_claus\"],\"🦸\":[\"hero\",\"superhero\"],\"🦸‍♂️\":[\"man_hero\"],\"🦸‍♀️\":[\"woman_hero\"],\"🦹\":[\"villain\",\"supervillain\"],\"🦹‍♂️\":[\"man_villain\"],\"🦹‍♀️\":[\"woman_villain\"],\"🧙\":[\"mage\"],\"🧙‍♂️\":[\"man_mage\"],\"🧙‍♀️\":[\"woman_mage\"],\"🧚\":[\"fairy\"],\"🧚‍♂️\":[\"man_fairy\"],\"🧚‍♀️\":[\"woman_fairy\"],\"🧛\":[\"vampire\"],\"🧛‍♂️\":[\"man_vampire\"],\"🧛‍♀️\":[\"woman_vampire\"],\"🧜\":[\"merperson\"],\"🧜‍♂️\":[\"merman\"],\"🧜‍♀️\":[\"mermaid\"],\"🧝\":[\"elf\"],\"🧝‍♂️\":[\"man_elf\"],\"🧝‍♀️\":[\"woman_elf\"],\"🧞\":[\"genie\"],\"🧞‍♂️\":[\"man_genie\"],\"🧞‍♀️\":[\"woman_genie\"],\"🧟\":[\"zombie\"],\"🧟‍♂️\":[\"man_zombie\"],\"🧟‍♀️\":[\"woman_zombie\"],\"💆\":[\"person_getting_massage\"],\"💆‍♂️\":[\"man_getting_face_massage\"],\"💆‍♀️\":[\"woman_getting_face_massage\"],\"💇\":[\"person_getting_haircut\"],\"💇‍♂️\":[\"man_getting_haircut\"],\"💇‍♀️\":[\"woman_getting_haircut\"],\"🚶\":[\"person_walking\"],\"🚶‍♂️\":[\"man_walking\"],\"🚶‍♀️\":[\"woman_walking\"],\"🧍\":[\"person_standing\"],\"🧍‍♂️\":[\"man_standing\"],\"🧍‍♀️\":[\"woman_standing\"],\"🧎\":[\"person_kneeling\"],\"🧎‍♂️\":[\"man_kneeling\"],\"🧎‍♀️\":[\"woman_kneeling\"],\"🧑‍🦯\":[\"person_probing_cane\"],\"👨‍🦯\":[\"man_probing_cane\"],\"👩‍🦯\":[\"woman_probing_cane\"],\"🧑‍🦼\":[\"person_motor_wheelchair\"],\"👨‍🦼\":[\"man_motor_wheelchair\"],\"👩‍🦼\":[\"woman_motor_wheelchair\"],\"🧑‍🦽\":[\"person_wheelchair\"],\"👨‍🦽\":[\"man_wheelchair\"],\"👩‍🦽\":[\"woman_wheelchair\"],\"🏃\":[\"person_running\"],\"🏃‍♂️\":[\"man_running\"],\"🏃‍♀️\":[\"woman_running\"],\"💃\":[\"dancer\",\"woman_dancing\"],\"🕺\":[\"man_dancing\"],\"🕴️\":[\"levitate\"],\"👯\":[\"people_bunny_ears_partying\"],\"👯‍♂️\":[\"men_bunny_ears_partying\"],\"👯‍♀️\":[\"women_bunny_ears_partying\"],\"🧖\":[\"person_steamy_room\"],\"🧖‍♂️\":[\"man_steamy_room\"],\"🧖‍♀️\":[\"woman_steamy_room\"],\"🧗\":[\"person_climbing\"],\"🧗‍♂️\":[\"man_climbing\"],\"🧗‍♀️\":[\"woman_climbing\"],\"🤺\":[\"person_fencing\"],\"🏇\":[\"horse_racing\"],\"⛷️\":[\"skier\"],\"🏂️\":[\"snowboarder\"],\"🏌️\":[\"person_golfing\"],\"🏌️‍♂️\":[\"man_golfing\"],\"🏌️‍♀️\":[\"woman_golfing\"],\"🏄️\":[\"person_surfing\"],\"🏄‍♂️\":[\"man_surfing\"],\"🏄‍♀️\":[\"woman_surfing\"],\"🚣\":[\"person_rowing_boat\"],\"🚣‍♂️\":[\"man_rowing_boat\"],\"🚣‍♀️\":[\"woman_rowing_boat\"],\"🏊️\":[\"person_swimming\"],\"🏊‍♂️\":[\"man_swimming\"],\"🏊‍♀️\":[\"woman_swimming\"],\"⛹️\":[\"person_bouncing_ball\"],\"⛹️‍♂️\":[\"man_bouncing_ball\"],\"⛹️‍♀️\":[\"woman_bouncing_ball\"],\"🏋️\":[\"person_lifting_weights\"],\"🏋️‍♂️\":[\"man_lifting_weights\"],\"🏋️‍♀️\":[\"woman_lifting_weights\"],\"🚴\":[\"person_biking\"],\"🚴‍♂️\":[\"man_biking\"],\"🚴‍♀️\":[\"woman_biking\"],\"🚵\":[\"person_mountain_biking\"],\"🚵‍♂️\":[\"man_mountain_biking\"],\"🚵‍♀️\":[\"woman_mountain_biking\"],\"🤸\":[\"person_cartwheel\"],\"🤸‍♂️\":[\"man_cartwheeling\"],\"🤸‍♀️\":[\"woman_cartwheeling\"],\"🤼\":[\"people_wrestling\"],\"🤼‍♂️\":[\"men_wrestling\"],\"🤼‍♀️\":[\"women_wrestling\"],\"🤽\":[\"person_water_polo\"],\"🤽‍♂️\":[\"man_water_polo\"],\"🤽‍♀️\":[\"woman_water_polo\"],\"🤾\":[\"person_handball\"],\"🤾‍♂️\":[\"man_handball\"],\"🤾‍♀️\":[\"woman_handball\"],\"🤹\":[\"person_juggling\"],\"🤹‍♂️\":[\"man_juggling\"],\"🤹‍♀️\":[\"woman_juggling\"],\"🧘\":[\"person_lotus_position\"],\"🧘‍♂️\":[\"man_lotus_position\"],\"🧘‍♀️\":[\"woman_lotus_position\"],\"🛀\":[\"bath\"],\"🛌\":[\"in_bed\"],\"🧑‍🤝‍🧑\":[\"holding_hands_people\"],\"👭\":[\"holding_hands_ww\"],\"👫\":[\"holding_hands_mw\",\"holding_hands_wm\"],\"👬\":[\"holding_hands_mm\"],\"💏\":[\"couple\"],\"👩‍❤️‍💋‍👨\":[\"kiss_mw\",\"kiss_wm\"],\"👨‍❤️‍💋‍👨\":[\"kiss_mm\"],\"👩‍❤️‍💋‍👩\":[\"kiss_ww\"],\"💑\":[\"couple_heart\"],\"👩‍❤️‍👨\":[\"couple_mw\",\"couple_wm\"],\"👨‍❤️‍👨\":[\"couple_mm\"],\"👩‍❤️‍👩\":[\"couple_ww\"],\"👪️\":[\"family\"],\"👨‍👩‍👦\":[\"family_mwb\"],\"👨‍👩‍👧\":[\"family_mwg\"],\"👨‍👩‍👧‍👦\":[\"family_mwgb\"],\"👨‍👩‍👦‍👦\":[\"family_mwbb\"],\"👨‍👩‍👧‍👧\":[\"family_mwgg\"],\"👨‍👨‍👦\":[\"family_mmb\"],\"👨‍👨‍👧\":[\"family_mmg\"],\"👨‍👨‍👧‍👦\":[\"family_mmgb\"],\"👨‍👨‍👦‍👦\":[\"family_mmbb\"],\"👨‍👨‍👧‍👧\":[\"family_mmgg\"],\"👩‍👩‍👦\":[\"family_wwb\"],\"👩‍👩‍👧\":[\"family_wwg\"],\"👩‍👩‍👧‍👦\":[\"family_wwgb\"],\"👩‍👩‍👦‍👦\":[\"family_wwbb\"],\"👩‍👩‍👧‍👧\":[\"family_wwgg\"],\"👨‍👦\":[\"family_mb\"],\"👨‍👦‍👦\":[\"family_mbb\"],\"👨‍👧\":[\"family_mg\"],\"👨‍👧‍👦\":[\"family_mgb\"],\"👨‍👧‍👧\":[\"family_mgg\"],\"👩‍👦\":[\"family_wb\"],\"👩‍👦‍👦\":[\"family_wbb\"],\"👩‍👧\":[\"family_wg\"],\"👩‍👧‍👦\":[\"family_wgb\"],\"👩‍👧‍👧\":[\"family_wgg\"],\"🗣️\":[\"speaking_head\"],\"👤\":[\"bust_silhouette\"],\"👥\":[\"busts_silhouette\"],\"🫂\":[\"people_hugging\"],\"👣\":[\"footprints\"],\"🏻\":[\"tone_light\",\"tone1\"],\"🏼\":[\"tone_medium_light\",\"tone2\"],\"🏽\":[\"tone_medium\",\"tone3\"],\"🏾\":[\"tone_medium_dark\",\"tone4\"],\"🏿\":[\"tone_dark\",\"tone5\"],\"🦰\":[\"red_hair\"],\"🦱\":[\"curly_hair\"],\"🦳\":[\"white_hair\"],\"🦲\":[\"bald\"],\"🐵\":[\"monkey_face\"],\"🐒\":[\"monkey\"],\"🦍\":[\"gorilla\"],\"🦧\":[\"orangutan\"],\"🐶\":[\"dog_face\"],\"🐕️\":[\"dog\"],\"🦮\":[\"guide_dog\"],\"🐕‍🦺\":[\"service_dog\"],\"🐩\":[\"poodle\"],\"🐺\":[\"wolf_face\"],\"🦊\":[\"fox_face\"],\"🦝\":[\"raccoon\"],\"🐱\":[\"cat_face\"],\"🐈️\":[\"cat\"],\"🐈‍⬛\":[\"black_cat\"],\"🦁\":[\"lion_face\"],\"🐯\":[\"tiger_face\"],\"🐅\":[\"tiger\"],\"🐆\":[\"leopard\"],\"🐴\":[\"horse_face\"],\"🐎\":[\"horse\"],\"🦄\":[\"unicorn_face\"],\"🦓\":[\"zebra\"],\"🦌\":[\"deer\"],\"🦬\":[\"bison\"],\"🐮\":[\"cow_face\"],\"🐂\":[\"ox\"],\"🐃\":[\"water_buffalo\"],\"🐄\":[\"cow\"],\"🐷\":[\"pig_face\"],\"🐖\":[\"pig\"],\"🐗\":[\"boar\"],\"🐽\":[\"pig_nose\"],\"🐏\":[\"ram\"],\"🐑\":[\"sheep\"],\"🐐\":[\"goat\"],\"🐪\":[\"camel\"],\"🐫\":[\"two_hump_camel\"],\"🦙\":[\"llama\"],\"🦒\":[\"giraffe\"],\"🐘\":[\"elephant\"],\"🦣\":[\"mammoth\"],\"🦏\":[\"rhino\"],\"🦛\":[\"hippo\"],\"🐭\":[\"mouse_face\"],\"🐁\":[\"mouse\"],\"🐀\":[\"rat\"],\"🐹\":[\"hamster_face\"],\"🐰\":[\"rabbit_face\"],\"🐇\":[\"rabbit\"],\"🐿️\":[\"chipmunk\"],\"🦫\":[\"beaver\"],\"🦔\":[\"hedgehog\"],\"🦇\":[\"bat\"],\"🐻\":[\"bear_face\"],\"🐻‍❄️\":[\"polar_bear_face\"],\"🐨\":[\"koala_face\"],\"🐼\":[\"panda_face\"],\"🦥\":[\"sloth\"],\"🦦\":[\"otter\"],\"🦨\":[\"skunk\"],\"🦘\":[\"kangaroo\"],\"🦡\":[\"badger\"],\"🐾\":[\"feet\"],\"🦃\":[\"turkey\"],\"🐔\":[\"chicken\"],\"🐓\":[\"rooster\"],\"🐣\":[\"hatching_chick\"],\"🐤\":[\"baby_chick\"],\"🐥\":[\"hatched_chick\"],\"🐦️\":[\"bird\"],\"🐧\":[\"penguin\"],\"🕊️\":[\"dove\"],\"🦅\":[\"eagle\"],\"🦆\":[\"duck\"],\"🦢\":[\"swan\"],\"🦉\":[\"owl\"],\"🦤\":[\"dodo\"],\"🪶\":[\"feather\"],\"🦩\":[\"flamingo\"],\"🦚\":[\"peacock\"],\"🦜\":[\"parrot\"],\"🐸\":[\"frog_face\"],\"🐊\":[\"crocodile\"],\"🐢\":[\"turtle\"],\"🦎\":[\"lizard\"],\"🐍\":[\"snake\"],\"🐲\":[\"dragon_face\"],\"🐉\":[\"dragon\"],\"🦕\":[\"sauropod\"],\"🦖\":[\"trex\"],\"🐳\":[\"spouting_whale\"],\"🐋\":[\"whale\"],\"🐬\":[\"dolphin\"],\"🦭\":[\"seal\"],\"🐟️\":[\"fish\"],\"🐠\":[\"tropical_fish\"],\"🐡\":[\"blowfish\"],\"🦈\":[\"shark\"],\"🐙\":[\"octopus\"],\"🐚\":[\"shell\"],\"🐌\":[\"snail\"],\"🦋\":[\"butterfly\"],\"🐛\":[\"bug\"],\"🐜\":[\"ant\"],\"🐝\":[\"bee\"],\"🪲\":[\"beetle\"],\"🐞\":[\"lady_bug\"],\"🦗\":[\"cricket\"],\"🪳\":[\"cockroach\"],\"🕷️\":[\"spider\"],\"🕸️\":[\"spider_web\"],\"🦂\":[\"scorpion\"],\"🦟\":[\"mosquito\"],\"🪰\":[\"fly\"],\"🪱\":[\"worm\"],\"🦠\":[\"microbe\",\"germ\"],\"💐\":[\"bouquet\"],\"🌸\":[\"cherry_blossom\"],\"💮\":[\"white_flower\"],\"🏵️\":[\"rosette\"],\"🌹\":[\"rose\"],\"🥀\":[\"wilted_rose\"],\"🌺\":[\"hibiscus\"],\"🌻\":[\"sunflower\"],\"🌼\":[\"blossom\"],\"🌷\":[\"tulip\"],\"🌱\":[\"seedling\"],\"🪴\":[\"potted_plant\"],\"🌲\":[\"evergreen_tree\"],\"🌳\":[\"deciduous_tree\"],\"🌴\":[\"palm_tree\"],\"🌵\":[\"cactus\"],\"🌾\":[\"ear_of_rice\"],\"🌿\":[\"herb\"],\"☘️\":[\"shamrock\"],\"🍀\":[\"four_leaf_clover\"],\"🍁\":[\"maple_leaf\"],\"🍂\":[\"fallen_leaf\"],\"🍃\":[\"leaves\"],\"🍇\":[\"grapes\"],\"🍈\":[\"melon\"],\"🍉\":[\"watermelon\"],\"🍊\":[\"tangerine\"],\"🍋\":[\"lemon\"],\"🍌\":[\"banana\"],\"🍍\":[\"pineapple\"],\"🥭\":[\"mango\"],\"🍎\":[\"apple\"],\"🍏\":[\"green_apple\"],\"🍐\":[\"pear\"],\"🍑\":[\"peach\"],\"🍒\":[\"cherries\"],\"🍓\":[\"strawberry\"],\"🫐\":[\"blueberry\"],\"🥝\":[\"kiwi\"],\"🍅\":[\"tomato\"],\"🫒\":[\"olive\"],\"🥥\":[\"coconut\"],\"🥑\":[\"avocado\"],\"🍆\":[\"eggplant\"],\"🥔\":[\"potato\"],\"🥕\":[\"carrot\"],\"🌽\":[\"corn\"],\"🌶️\":[\"hot_pepper\"],\"🫑\":[\"bell_pepper\"],\"🥒\":[\"cucumber\"],\"🥬\":[\"leafy_green\"],\"🥦\":[\"broccoli\"],\"🧄\":[\"garlic\"],\"🧅\":[\"onion\"],\"🍄\":[\"mushroom\"],\"🥜\":[\"peanuts\"],\"🌰\":[\"chestnut\"],\"🍞\":[\"bread\"],\"🥐\":[\"croissant\"],\"🥖\":[\"french_bread\"],\"🫓\":[\"flatbread\"],\"🥨\":[\"pretzel\"],\"🥯\":[\"bagel\"],\"🥞\":[\"pancakes\"],\"🧇\":[\"waffle\"],\"🧀\":[\"cheese\"],\"🍖\":[\"meat_on_bone\"],\"🍗\":[\"poultry_leg\"],\"🥩\":[\"cut_of_meat\"],\"🥓\":[\"bacon\"],\"🍔\":[\"hamburger\"],\"🍟\":[\"fries\"],\"🍕\":[\"pizza\"],\"🌭\":[\"hotdog\"],\"🥪\":[\"sandwich\"],\"🌮\":[\"taco\"],\"🌯\":[\"burrito\"],\"🫔\":[\"tamale\"],\"🥙\":[\"stuffed_flatbread\"],\"🧆\":[\"falafel\"],\"🥚\":[\"egg\"],\"🍳\":[\"cooking\"],\"🥘\":[\"shallow_pan_of_food\"],\"🍲\":[\"stew\"],\"🫕\":[\"fondue\"],\"🥣\":[\"bowl_spoon\"],\"🥗\":[\"salad\"],\"🍿\":[\"popcorn\"],\"🧈\":[\"butter\"],\"🧂\":[\"salt\"],\"🥫\":[\"canned_food\"],\"🍱\":[\"bento\"],\"🍘\":[\"rice_cracker\"],\"🍙\":[\"rice_ball\"],\"🍚\":[\"rice\"],\"🍛\":[\"curry\"],\"🍜\":[\"ramen\"],\"🍝\":[\"spaghetti\"],\"🍠\":[\"sweet_potato\"],\"🍢\":[\"oden\"],\"🍣\":[\"sushi\"],\"🍤\":[\"fried_shrimp\"],\"🍥\":[\"fish_cake\"],\"🥮\":[\"moon_cake\"],\"🍡\":[\"dango\"],\"🥟\":[\"dumpling\"],\"🥠\":[\"fortune_cookie\"],\"🥡\":[\"takeout_box\"],\"🦀\":[\"crab\"],\"🦞\":[\"lobster\"],\"🦐\":[\"shrimp\"],\"🦑\":[\"squid\"],\"🦪\":[\"oyster\"],\"🍦\":[\"icecream\"],\"🍧\":[\"shaved_ice\"],\"🍨\":[\"ice_cream\"],\"🍩\":[\"doughnut\"],\"🍪\":[\"cookie\"],\"🎂\":[\"birthday\"],\"🍰\":[\"cake\"],\"🧁\":[\"cupcake\"],\"🥧\":[\"pie\"],\"🍫\":[\"chocolate_bar\"],\"🍬\":[\"candy\"],\"🍭\":[\"lollipop\"],\"🍮\":[\"custard\"],\"🍯\":[\"honey_pot\"],\"🍼\":[\"baby_bottle\"],\"🥛\":[\"milk\"],\"☕️\":[\"coffee\"],\"🫖\":[\"teapot\"],\"🍵\":[\"tea\"],\"🍶\":[\"sake\"],\"🍾\":[\"champagne\"],\"🍷\":[\"wine_glass\"],\"🍸️\":[\"cocktail\"],\"🍹\":[\"tropical_drink\"],\"🍺\":[\"beer\"],\"🍻\":[\"beers\"],\"🥂\":[\"champagne_glass\"],\"🥃\":[\"tumbler_glass\"],\"🥤\":[\"cup_straw\"],\"🧋\":[\"bubble_tea\",\"boba_drink\"],\"🧃\":[\"beverage_box\",\"juice_box\"],\"🧉\":[\"mate\",\"yerba_mate\"],\"🧊\":[\"ice\"],\"🥢\":[\"chopsticks\"],\"🍽️\":[\"fork_knife_plate\"],\"🍴\":[\"utensils\"],\"🥄\":[\"spoon\"],\"🔪\":[\"knife\"],\"🏺\":[\"amphora\"],\"🌍️\":[\"earth_africa\"],\"🌎️\":[\"earth_americas\"],\"🌏️\":[\"earth_asia\"],\"🌐\":[\"globe\"],\"🗺️\":[\"map\"],\"🗾\":[\"japan\"],\"🧭\":[\"compass\"],\"🏔️\":[\"snowy_mountain\"],\"⛰️\":[\"mountain\"],\"🌋\":[\"volcano\"],\"🗻\":[\"mount_fuji\"],\"🏕️\":[\"camping\"],\"🏖️\":[\"beach\"],\"🏜️\":[\"desert\"],\"🏝️\":[\"island\"],\"🏞️\":[\"park\"],\"🏟️\":[\"stadium\"],\"🏛️\":[\"classical_building\"],\"🏗️\":[\"construction_site\"],\"🧱\":[\"brick\"],\"🪨\":[\"rock\"],\"🪵\":[\"wood\"],\"🛖\":[\"hut\"],\"🏘️\":[\"homes\"],\"🏚️\":[\"house_abandoned\"],\"🏠️\":[\"house\"],\"🏡\":[\"house_garden\"],\"🏢\":[\"office\"],\"🏣\":[\"ja_post_office\"],\"🏤\":[\"post_office\"],\"🏥\":[\"hospital\"],\"🏦\":[\"bank\"],\"🏨\":[\"hotel\"],\"🏩\":[\"love_hotel\"],\"🏪\":[\"convenience_store\"],\"🏫\":[\"school\"],\"🏬\":[\"department_store\"],\"🏭️\":[\"factory\"],\"🏯\":[\"japanese_castle\"],\"🏰\":[\"castle\",\"european_castle\"],\"💒\":[\"wedding\"],\"🗼\":[\"tokyo_tower\"],\"🗽\":[\"statue_of_liberty\"],\"⛪️\":[\"church\"],\"🕌\":[\"mosque\"],\"🛕\":[\"hindu_temple\"],\"🕍\":[\"synagogue\"],\"⛩️\":[\"shinto_shrine\"],\"🕋\":[\"kaaba\"],\"⛲️\":[\"fountain\"],\"⛺️\":[\"tent\"],\"🌁\":[\"foggy\"],\"🌃\":[\"night_stars\"],\"🏙️\":[\"cityscape\"],\"🌄\":[\"sunrise_over_mountains\"],\"🌅\":[\"sunrise\"],\"🌆\":[\"dusk\"],\"🌇\":[\"sunset\"],\"🌉\":[\"bridge_at_night\"],\"♨️\":[\"hotsprings\"],\"🎠\":[\"carousel_horse\"],\"🎡\":[\"ferris_wheel\"],\"🎢\":[\"roller_coaster\"],\"💈\":[\"barber\"],\"🎪\":[\"circus_tent\"],\"🚂\":[\"steam_locomotive\"],\"🚃\":[\"railway_car\"],\"🚄\":[\"bullettrain_side\"],\"🚅\":[\"bullettrain\"],\"🚆\":[\"train\"],\"🚇️\":[\"metro\"],\"🚈\":[\"light_rail\"],\"🚉\":[\"station\"],\"🚊\":[\"tram\"],\"🚝\":[\"monorail\"],\"🚞\":[\"mountain_railway\"],\"🚋\":[\"tram_car\"],\"🚌\":[\"bus\"],\"🚍️\":[\"oncoming_bus\"],\"🚎\":[\"trolleybus\"],\"🚐\":[\"minibus\"],\"🚑️\":[\"ambulance\"],\"🚒\":[\"fire_engine\"],\"🚓\":[\"police_car\"],\"🚔️\":[\"oncoming_police_car\"],\"🚕\":[\"taxi\"],\"🚖\":[\"oncoming_taxi\"],\"🚗\":[\"red_car\"],\"🚘️\":[\"oncoming_automobile\"],\"🚙\":[\"blue_car\"],\"🛻\":[\"pickup_truck\"],\"🚚\":[\"truck\"],\"🚛\":[\"lorry\"],\"🚜\":[\"tractor\"],\"🏎️\":[\"race_car\"],\"🏍️\":[\"motorcycle\"],\"🛵\":[\"motor_scooter\"],\"🦽\":[\"wheelchair\"],\"🦼\":[\"motor_wheelchair\"],\"🛺\":[\"auto_rickshaw\"],\"🚲️\":[\"bike\"],\"🛴\":[\"scooter\"],\"🛹\":[\"skateboard\"],\"🛼\":[\"roller_skate\"],\"🚏\":[\"bus_stop\"],\"🛣️\":[\"motorway\"],\"🛤️\":[\"railway_track\"],\"🛢️\":[\"oil_drum\"],\"⛽️\":[\"fuel_pump\"],\"🚨\":[\"rotating_light\",\"police_light\"],\"🚥\":[\"traffic_light\"],\"🚦\":[\"vertical_traffic_light\"],\"🛑\":[\"stop_sign\",\"octagonal_sign\"],\"🚧\":[\"construction\"],\"⚓️\":[\"anchor\"],\"⛵️\":[\"sailboat\"],\"🛶\":[\"canoe\"],\"🚤\":[\"speedboat\"],\"🛳️\":[\"cruise_ship\"],\"⛴️\":[\"ferry\"],\"🛥️\":[\"motorboat\"],\"🚢\":[\"ship\"],\"✈️\":[\"airplane\"],\"🛩️\":[\"small_airplane\"],\"🛫\":[\"airplane_departure\"],\"🛬\":[\"airplane_arriving\"],\"🪂\":[\"parachute\"],\"💺\":[\"seat\"],\"🚁\":[\"helicopter\"],\"🚟\":[\"suspension_railway\"],\"🚠\":[\"mountain_cableway\"],\"🚡\":[\"aerial_tramway\"],\"🛰️\":[\"satellite\"],\"🚀\":[\"rocket\"],\"🛸\":[\"flying_saucer\"],\"🛎️\":[\"bellhop\"],\"🧳\":[\"luggage\"],\"⌛️\":[\"hourglass\"],\"⏳️\":[\"hourglass_flowing\"],\"⌚️\":[\"watch\"],\"⏰\":[\"alarm_clock\"],\"⏱️\":[\"stopwatch\"],\"⏲️\":[\"timer\"],\"🕰️\":[\"clock\"],\"🕛️\":[\"clock12\"],\"🕧️\":[\"clock1230\"],\"🕐️\":[\"clock1\"],\"🕜️\":[\"clock130\"],\"🕑️\":[\"clock2\"],\"🕝️\":[\"clock230\"],\"🕒️\":[\"clock3\"],\"🕞️\":[\"clock330\"],\"🕓️\":[\"clock4\"],\"🕟️\":[\"clock430\"],\"🕔️\":[\"clock5\"],\"🕠️\":[\"clock530\"],\"🕕️\":[\"clock6\"],\"🕡️\":[\"clock630\"],\"🕖️\":[\"clock7\"],\"🕢️\":[\"clock730\"],\"🕗️\":[\"clock8\"],\"🕣️\":[\"clock830\"],\"🕘️\":[\"clock9\"],\"🕤️\":[\"clock930\"],\"🕙️\":[\"clock10\"],\"🕥️\":[\"clock1030\"],\"🕚️\":[\"clock11\"],\"🕦️\":[\"clock1130\"],\"🌑\":[\"new_moon\"],\"🌒\":[\"waxing_crescent_moon\"],\"🌓\":[\"first_quarter_moon\"],\"🌔\":[\"waxing_gibbous_moon\"],\"🌕️\":[\"full_moon\"],\"🌖\":[\"waning_gibbous_moon\"],\"🌗\":[\"last_quarter_moon\"],\"🌘\":[\"waning_crescent_moon\"],\"🌙\":[\"crescent_moon\"],\"🌚\":[\"new_moon_face\"],\"🌛\":[\"first_quarter_moon_face\"],\"🌜️\":[\"last_quarter_moon_face\"],\"🌡️\":[\"thermometer\"],\"☀️\":[\"sun\"],\"🌝\":[\"full_moon_face\"],\"🌞\":[\"sun_face\"],\"🪐\":[\"ringed_planet\",\"saturn\"],\"⭐️\":[\"star\"],\"🌟\":[\"star2\",\"glowing_star\"],\"🌠\":[\"star3\",\"shooting_star\"],\"🌌\":[\"milky_way\"],\"☁️\":[\"cloud\"],\"⛅️\":[\"partly_sunny\"],\"⛈️\":[\"storm\"],\"🌤️\":[\"overcast\"],\"🌥️\":[\"cloudy\"],\"🌦️\":[\"sunshower\"],\"🌧️\":[\"rain\"],\"🌨️\":[\"snow\"],\"🌩️\":[\"lightning\"],\"🌪️\":[\"tornado\"],\"🌫️\":[\"fog\"],\"🌬️\":[\"wind_face\"],\"🌀\":[\"cyclone\"],\"🌈\":[\"rainbow\"],\"🌂\":[\"closed_umbrella\"],\"☂️\":[\"umbrella\"],\"☔️\":[\"umbrella_rain\"],\"⛱️\":[\"beach_umbrella\"],\"⚡️\":[\"zap\",\"high_voltage\"],\"❄️\":[\"snowflake\"],\"☃️\":[\"snowy_snowman\"],\"⛄️\":[\"snowman\"],\"☄️\":[\"comet\"],\"🔥\":[\"fire\"],\"💧\":[\"droplet\"],\"🌊\":[\"ocean\"],\"🎃\":[\"jack_o_lantern\"],\"🎄\":[\"christmas_tree\",\"xmas_tree\"],\"🎆\":[\"fireworks\"],\"🎇\":[\"sparkler\"],\"🧨\":[\"firecracker\"],\"✨\":[\"sparkles\"],\"🎈\":[\"balloon\"],\"🎉\":[\"tada\",\"party\"],\"🎊\":[\"confetti_ball\"],\"🎋\":[\"tanabata_tree\"],\"🎍\":[\"bamboo\",\"pine_decor\"],\"🎎\":[\"dolls\"],\"🎏\":[\"carp_streamer\"],\"🎐\":[\"wind_chime\"],\"🎑\":[\"moon_ceremony\",\"rice_scene\"],\"🧧\":[\"red_envelope\"],\"🎀\":[\"ribbon\"],\"🎁\":[\"gift\"],\"🎗️\":[\"reminder_ribbon\"],\"🎟️\":[\"tickets\",\"admission\"],\"🎫\":[\"ticket\"],\"🎖️\":[\"military_medal\"],\"🏆️\":[\"trophy\"],\"🏅\":[\"medal\"],\"🥇\":[\"first_place\"],\"🥈\":[\"second_place\"],\"🥉\":[\"third_place\"],\"⚽️\":[\"soccer\"],\"⚾️\":[\"baseball\"],\"🥎\":[\"softball\"],\"🏀\":[\"basketball\"],\"🏐\":[\"volleyball\"],\"🏈\":[\"football\"],\"🏉\":[\"rugby\"],\"🎾\":[\"tennis\"],\"🥏\":[\"flying_disc\"],\"🎳\":[\"bowling\"],\"🏏\":[\"cricket_game\"],\"🏑\":[\"field_hockey\"],\"🏒\":[\"hockey\"],\"🥍\":[\"lacrosse\"],\"🏓\":[\"ping_pong\"],\"🏸\":[\"badminton\"],\"🥊\":[\"boxing_glove\"],\"🥋\":[\"gi\",\"martial_arts_uniform\"],\"🥅\":[\"goal\"],\"⛳️\":[\"golf\"],\"⛸️\":[\"ice_skate\"],\"🎣\":[\"fishing_pole\"],\"🤿\":[\"diving_mask\",\"scuba_mask\"],\"🎽\":[\"running_shirt\"],\"🎿\":[\"ski\"],\"🛷\":[\"sled\"],\"🥌\":[\"curling_stone\"],\"🎯\":[\"dart\"],\"🪀\":[\"yoyo\"],\"🪁\":[\"kite\"],\"🎱\":[\"8ball\"],\"🔮\":[\"crystal_ball\"],\"🪄\":[\"wand\"],\"🧿\":[\"nazar_amulet\"],\"🎮️\":[\"video_game\"],\"🕹️\":[\"joystick\"],\"🎰\":[\"slot_machine\"],\"🎲\":[\"game_die\"],\"🧩\":[\"jigsaw\",\"puzzle_piece\"],\"🧸\":[\"teddy_bear\"],\"🪅\":[\"pinata\"],\"🪆\":[\"nesting_dolls\"],\"♠️\":[\"spades\"],\"♥️\":[\"hearts\"],\"♦️\":[\"diamonds\"],\"♣️\":[\"clubs\"],\"♟️\":[\"chess_pawn\"],\"🃏\":[\"black_joker\"],\"🀄️\":[\"mahjong\"],\"🎴\":[\"flower_cards\"],\"🎭️\":[\"performing_arts\"],\"🖼️\":[\"frame_photo\"],\"🎨\":[\"art\",\"palette\"],\"🧵\":[\"spool\"],\"🪡\":[\"sewing_needle\"],\"🧶\":[\"yarn\"],\"🪢\":[\"knot\"],\"👓️\":[\"glasses\"],\"🕶️\":[\"sunglasses\"],\"🥽\":[\"goggles\"],\"🥼\":[\"lab_coat\"],\"🦺\":[\"safety_vest\"],\"👔\":[\"necktie\",\"tie\"],\"👕\":[\"shirt\"],\"👖\":[\"jeans\"],\"🧣\":[\"scarf\"],\"🧤\":[\"gloves\"],\"🧥\":[\"coat\"],\"🧦\":[\"socks\"],\"👗\":[\"dress\"],\"👘\":[\"kimono\"],\"🥻\":[\"sari\"],\"🩱\":[\"one_piece_swimsuit\"],\"🩲\":[\"briefs\"],\"🩳\":[\"shorts\"],\"👙\":[\"bikini\"],\"👚\":[\"blouse\",\"womans_clothes\"],\"👛\":[\"purse\"],\"👜\":[\"handbag\"],\"👝\":[\"pouch\",\"clutch_bag\"],\"🛍️\":[\"shopping_bags\"],\"🎒\":[\"backpack\"],\"🩴\":[\"sandal\"],\"👞\":[\"dress_shoe\",\"mans_shoe\"],\"👟\":[\"sneaker\",\"athletic_shoe\"],\"🥾\":[\"hiking_boot\"],\"🥿\":[\"flat_shoe\"],\"👠\":[\"high_heel\"],\"👡\":[\"womans_sandal\"],\"🩰\":[\"ballet_shoes\"],\"👢\":[\"womans_boot\"],\"👑\":[\"crown\"],\"👒\":[\"womans_hat\"],\"🎩\":[\"top_hat\"],\"🎓️\":[\"graduation_cap\"],\"🧢\":[\"billed_cap\"],\"🪖\":[\"military_helmet\"],\"⛑️\":[\"helmet_cross\"],\"📿\":[\"prayer_beads\"],\"💄\":[\"lipstick\"],\"💍\":[\"ring\"],\"💎\":[\"gem\"],\"🔇\":[\"mute\",\"no_sound\"],\"🔈️\":[\"speaker\",\"low_sound\"],\"🔉\":[\"sound\"],\"🔊\":[\"loud_sound\"],\"📢\":[\"loudspeaker\"],\"📣\":[\"megaphone\"],\"📯\":[\"postal_horn\"],\"🔔\":[\"bell\"],\"🔕\":[\"no_bell\"],\"🎼\":[\"musical_score\"],\"🎵\":[\"musical_note\"],\"🎶\":[\"musical_notes\"],\"🎙️\":[\"studio_microphone\"],\"🎚️\":[\"level_slider\"],\"🎛️\":[\"control_knobs\"],\"🎤\":[\"microphone\"],\"🎧️\":[\"headphones\"],\"📻️\":[\"radio\"],\"🎷\":[\"saxophone\"],\"🪗\":[\"accordion\"],\"🎸\":[\"guitar\"],\"🎹\":[\"musical_keyboard\"],\"🎺\":[\"trumpet\"],\"🎻\":[\"violin\"],\"🪕\":[\"banjo\"],\"🥁\":[\"drum\"],\"🪘\":[\"long_drum\"],\"📱\":[\"mobile\",\"iphone\",\"android\"],\"📲\":[\"mobile_calling\"],\"☎️\":[\"telephone\"],\"📞\":[\"telephone_receiver\"],\"📟️\":[\"pager\"],\"📠\":[\"fax\"],\"🔋\":[\"battery\"],\"🔌\":[\"electric_plug\"],\"💻️\":[\"laptop\"],\"🖥️\":[\"desktop\",\"computer\"],\"🖨️\":[\"printer\"],\"⌨️\":[\"keyboard\"],\"🖱️\":[\"computer_mouse\"],\"🖲️\":[\"trackball\"],\"💽\":[\"minidisc\"],\"💾\":[\"floppy_disk\"],\"💿️\":[\"cd\",\"disk\"],\"📀\":[\"dvd\"],\"🧮\":[\"abacus\"],\"🎥\":[\"movie_camera\"],\"🎞️\":[\"film_frames\"],\"📽️\":[\"projector\"],\"🎬️\":[\"clapper\"],\"📺️\":[\"tv\"],\"📷️\":[\"camera\"],\"📸\":[\"camera_flash\"],\"📹️\":[\"video_camera\"],\"📼\":[\"vhs\"],\"🔍️\":[\"mag\"],\"🔎\":[\"mag_right\"],\"🕯️\":[\"candle\"],\"💡\":[\"bulb\",\"light_bulb\"],\"🔦\":[\"flashlight\"],\"🏮\":[\"red_lantern\"],\"🪔\":[\"diya_lamp\"],\"📔\":[\"decorative_notebook\"],\"📕\":[\"closed_book\"],\"📖\":[\"book\"],\"📗\":[\"green_book\"],\"📘\":[\"blue_book\"],\"📙\":[\"orange_book\"],\"📚️\":[\"books\"],\"📓\":[\"notebook\"],\"📒\":[\"ledger\"],\"📃\":[\"page_curl\"],\"📜\":[\"scroll\"],\"📄\":[\"page_facing_up\"],\"📰\":[\"newspaper\"],\"🗞️\":[\"rolled_newspaper\"],\"📑\":[\"bookmark_tabs\"],\"🔖\":[\"bookmark\"],\"🏷️\":[\"label\"],\"💰️\":[\"moneybag\"],\"🪙\":[\"coin\"],\"💴\":[\"yen\"],\"💵\":[\"dollar\"],\"💶\":[\"euro\"],\"💷\":[\"pound\"],\"💸\":[\"money_wings\"],\"💳️\":[\"credit_card\"],\"🧾\":[\"receipt\"],\"💹\":[\"ja_chart\"],\"✉️\":[\"envelope\"],\"📧\":[\"email\"],\"📨\":[\"incoming_envelope\"],\"📩\":[\"envelope_arrow\"],\"📤️\":[\"outbox_tray\"],\"📥️\":[\"inbox_tray\"],\"📦️\":[\"package\"],\"📫️\":[\"mailbox\"],\"📪️\":[\"mailbox_closed\"],\"📬️\":[\"mailbox_mail\"],\"📭️\":[\"mailbox_no_mail\"],\"📮\":[\"postbox\"],\"🗳️\":[\"ballot_box\"],\"✏️\":[\"pencil\"],\"✒️\":[\"black_nib\"],\"🖋️\":[\"fountain_pen\"],\"🖊️\":[\"pen\"],\"🖌️\":[\"paintbrush\"],\"🖍️\":[\"crayon\"],\"📝\":[\"memo\"],\"💼\":[\"briefcase\"],\"📁\":[\"file_folder\"],\"📂\":[\"open_file_folder\"],\"🗂️\":[\"dividers\"],\"📅\":[\"date\",\"calendar\"],\"📆\":[\"torn_calendar\"],\"🗒️\":[\"notepad_spiral\"],\"🗓️\":[\"calendar_spiral\"],\"📇\":[\"card_index\"],\"📈\":[\"chart_up\"],\"📉\":[\"chart_down\"],\"📊\":[\"bar_chart\"],\"📋️\":[\"clipboard\"],\"📌\":[\"pushpin\"],\"📍\":[\"round_pushpin\"],\"📎\":[\"paperclip\"],\"🖇️\":[\"paperclips\"],\"📏\":[\"straight_ruler\"],\"📐\":[\"triangular_ruler\"],\"✂️\":[\"scissors\"],\"🗃️\":[\"card_box\"],\"🗄️\":[\"file_cabinet\"],\"🗑️\":[\"trashcan\",\"wastebasket\"],\"🔒️\":[\"lock\"],\"🔓️\":[\"unlock\"],\"🔏\":[\"locked_pen\"],\"🔐\":[\"locked_key\"],\"🔑\":[\"key\"],\"🗝️\":[\"old_key\"],\"🔨\":[\"hammer\"],\"🪓\":[\"axe\"],\"⛏️\":[\"pick\"],\"⚒️\":[\"hammer_pick\"],\"🛠️\":[\"tools\",\"hammer_wrench\"],\"🗡️\":[\"dagger\"],\"⚔️\":[\"crossed_swords\"],\"🔫\":[\"gun\",\"pistol\"],\"🪃\":[\"boomerang\"],\"🏹\":[\"bow\"],\"🛡️\":[\"shield\"],\"🪚\":[\"saw\"],\"🔧\":[\"wrench\"],\"🪛\":[\"screwdriver\"],\"🔩\":[\"nut_and_bolt\"],\"⚙️\":[\"gear\"],\"🗜️\":[\"clamp\",\"compression\"],\"⚖️\":[\"scales\"],\"🦯\":[\"probing_cane\"],\"🔗\":[\"link\"],\"⛓️\":[\"chains\"],\"🪝\":[\"hook\"],\"🧰\":[\"toolbox\"],\"🧲\":[\"magnet\"],\"🪜\":[\"ladder\"],\"⚗️\":[\"alembic\"],\"🧪\":[\"test_tube\"],\"🧫\":[\"petri_dish\"],\"🧬\":[\"dna\",\"double_helix\"],\"🔬\":[\"microscope\"],\"🔭\":[\"telescope\"],\"📡\":[\"satellite_antenna\"],\"💉\":[\"syringe\"],\"🩸\":[\"blood_drop\"],\"💊\":[\"pill\"],\"🩹\":[\"bandaid\",\"adhesive_bandage\"],\"🩺\":[\"stethoscope\"],\"🚪\":[\"door\"],\"🛗\":[\"elevator\"],\"🪞\":[\"mirror\"],\"🪟\":[\"window\"],\"🛏️\":[\"bed\"],\"🛋️\":[\"couch\"],\"🪑\":[\"chair\"],\"🚽\":[\"toilet\"],\"🪠\":[\"plunger\"],\"🚿\":[\"shower\"],\"🛁\":[\"bathtub\"],\"🪤\":[\"mouse_trap\"],\"🪒\":[\"razor\"],\"🧴\":[\"lotion\"],\"🧷\":[\"safety_pin\"],\"🧹\":[\"broom\"],\"🧺\":[\"basket\"],\"🧻\":[\"toilet_paper\"],\"🪣\":[\"bucket\"],\"🧼\":[\"soap\"],\"🪥\":[\"toothbrush\"],\"🧽\":[\"sponge\"],\"🧯\":[\"fire_extinguisher\"],\"🛒\":[\"shopping_cart\"],\"🚬\":[\"cigarette\",\"smoking\"],\"⚰️\":[\"coffin\"],\"🪦\":[\"headstone\"],\"⚱️\":[\"urn\"],\"🗿\":[\"moai\"],\"🪧\":[\"placard\"],\"🏧\":[\"atm\"],\"🚮\":[\"litter_bin\"],\"🚰\":[\"potable_water\"],\"♿️\":[\"handicapped\"],\"🚹️\":[\"mens\"],\"🚺️\":[\"womens\"],\"🚻\":[\"restroom\",\"bathroom\"],\"🚼️\":[\"baby_symbol\"],\"🚾\":[\"wc\"],\"🛂\":[\"passport_control\"],\"🛃\":[\"customs\"],\"🛄\":[\"baggage_claim\"],\"🛅\":[\"left_luggage\"],\"⚠️\":[\"warning\"],\"🚸\":[\"children_crossing\"],\"⛔️\":[\"no_entry\"],\"🚫\":[\"no_entry_sign\"],\"🚳\":[\"no_bicycles\"],\"🚭️\":[\"no_smoking\"],\"🚯\":[\"do_not_litter\"],\"🚱\":[\"non_potable_water\"],\"🚷\":[\"no_pedestrians\"],\"📵\":[\"no_mobile_phones\"],\"🔞\":[\"underage\"],\"☢️\":[\"radioactive\"],\"☣️\":[\"biohazard\"],\"⬆️\":[\"arrow_up\"],\"↗️\":[\"arrow_upper_right\"],\"➡️\":[\"arrow_right\"],\"↘️\":[\"arrow_lower_right\"],\"⬇️\":[\"arrow_down\"],\"↙️\":[\"arrow_lower_left\"],\"⬅️\":[\"arrow_left\"],\"↖️\":[\"arrow_upper_left\"],\"↕️\":[\"arrow_up_down\"],\"↔️\":[\"arrow_left_right\"],\"↩️\":[\"arrow_left_hook\"],\"↪️\":[\"arrow_right_hook\"],\"⤴️\":[\"arrow_heading_up\"],\"⤵️\":[\"arrow_heading_down\"],\"🔃\":[\"clockwise\"],\"🔄\":[\"counter_clockwise\"],\"🔙\":[\"back\"],\"🔚\":[\"end\"],\"🔛\":[\"on\"],\"🔜\":[\"soon\"],\"🔝\":[\"top\"],\"🛐\":[\"place_of_worship\"],\"⚛️\":[\"atom\"],\"🕉️\":[\"om_symbol\"],\"✡️\":[\"star_of_david\"],\"☸️\":[\"wheel_of_dharma\"],\"☯️\":[\"yin_yang\"],\"✝️\":[\"cross\"],\"☦️\":[\"orthodox_cross\"],\"☪️\":[\"star_and_crescent\"],\"☮️\":[\"peace\"],\"🕎\":[\"menorah\"],\"🔯\":[\"six_pointed_star\"],\"♈️\":[\"aries\"],\"♉️\":[\"taurus\"],\"♊️\":[\"gemini\"],\"♋️\":[\"cancer\"],\"♌️\":[\"leo\"],\"♍️\":[\"virgo\"],\"♎️\":[\"libra\"],\"♏️\":[\"scorpius\"],\"♐️\":[\"sagittarius\"],\"♑️\":[\"capricorn\"],\"♒️\":[\"aquarius\"],\"♓️\":[\"pisces\"],\"⛎\":[\"ophiuchus\"],\"🔀\":[\"shuffle\"],\"🔁\":[\"repeat\"],\"🔂\":[\"repeat_single\"],\"▶️\":[\"play\"],\"⏩️\":[\"fast_forward\"],\"⏭️\":[\"next_track\"],\"⏯️\":[\"play_pause\"],\"◀️\":[\"reverse\"],\"⏪️\":[\"rewind\"],\"⏮️\":[\"previous_track\"],\"🔼\":[\"up_button\"],\"⏫\":[\"fast_up_button\"],\"🔽\":[\"down_button\"],\"⏬\":[\"fast_down_button\"],\"⏸️\":[\"pause\"],\"⏹️\":[\"stop\"],\"⏺️\":[\"record\"],\"⏏️\":[\"eject\"],\"🎦\":[\"cinema\"],\"🔅\":[\"dim\",\"low_brightness\"],\"🔆\":[\"bright\",\"high_brightness\"],\"📶\":[\"signal_strength\",\"antenna_bars\"],\"📳\":[\"vibration_mode\"],\"📴\":[\"mobile_phone_off\"],\"♀️\":[\"female\",\"female_sign\"],\"♂️\":[\"male\",\"male_sign\"],\"⚧️\":[\"trans\"],\"✖️\":[\"multiplication\"],\"➕\":[\"plus\"],\"➖\":[\"minus\"],\"➗\":[\"division\"],\"♾️\":[\"infinity\"],\"‼️\":[\"bangbang\",\"double_exclamation\"],\"⁉️\":[\"interrobang\",\"exclamation_question\"],\"❓️\":[\"question\"],\"❔\":[\"white_question\"],\"❕\":[\"white_exclamation\"],\"❗️\":[\"exclamation\"],\"〰️\":[\"wavy_dash\"],\"💱\":[\"currency_exchange\"],\"💲\":[\"dollar_sign\"],\"⚕️\":[\"medical\"],\"♻️\":[\"recycle\"],\"⚜️\":[\"fleur-de-lis\"],\"🔱\":[\"trident\"],\"📛\":[\"name_badge\"],\"🔰\":[\"ja_beginner\"],\"⭕️\":[\"o\"],\"✅\":[\"white_check_mark\"],\"☑️\":[\"checked_ballot\"],\"✔️\":[\"check_mark\"],\"❌\":[\"x\",\"cross_mark\"],\"❎\":[\"cross_mark_button\"],\"➰\":[\"curly_loop\"],\"➿\":[\"double_curly_loop\"],\"〽️\":[\"part_alternation_mark\"],\"✳️\":[\"eight_spoked_asterisk\"],\"✴️\":[\"eight_pointed_star\"],\"❇️\":[\"sparkle\"],\"©️\":[\"copyright\"],\"®️\":[\"registered\"],\"™️\":[\"tm\"],\"#️⃣\":[\"hash\"],\"*️⃣\":[\"asterisk\"],\"0️⃣\":[\"zero\"],\"1️⃣\":[\"one\"],\"2️⃣\":[\"two\"],\"3️⃣\":[\"three\"],\"4️⃣\":[\"four\"],\"5️⃣\":[\"five\"],\"6️⃣\":[\"six\"],\"7️⃣\":[\"seven\"],\"8️⃣\":[\"eight\"],\"9️⃣\":[\"nine\"],\"🔟\":[\"ten\"],\"🔠\":[\"upper_abcd\"],\"🔡\":[\"abcd\"],\"🔢\":[\"1234\"],\"🔣\":[\"symbols\"],\"🔤\":[\"abc\"],\"🅰️\":[\"a_blood\"],\"🆎\":[\"ab_blood\"],\"🅱️\":[\"b_blood\"],\"🆑\":[\"cl\"],\"🆒\":[\"cool\"],\"🆓\":[\"free\"],\"ℹ️\":[\"info\"],\"🆔\":[\"id\"],\"Ⓜ️\":[\"m\"],\"🆕\":[\"new\"],\"🆖\":[\"ng\"],\"🅾️\":[\"o_blood\"],\"🆗\":[\"ok\"],\"🅿️\":[\"p\"],\"🆘\":[\"sos\"],\"🆙\":[\"up\"],\"🆚\":[\"vs\"],\"🈁\":[\"ja_here\",\"koko\"],\"🈂️\":[\"ja_service_charge\"],\"🈷️\":[\"ja_monthly_amount\"],\"🈶\":[\"ja_not_free_of_carge\"],\"🈯️\":[\"ja_reserved\"],\"🉐\":[\"ja_bargain\"],\"🈹\":[\"ja_discount\"],\"🈚️\":[\"ja_free_of_charge\"],\"🈲\":[\"ja_prohibited\"],\"🉑\":[\"ja_acceptable\"],\"🈸\":[\"ja_application\"],\"🈴\":[\"ja_passing_grade\"],\"🈳\":[\"ja_vacancy\"],\"㊗️\":[\"ja_congratulations\"],\"㊙️\":[\"ja_secret\"],\"🈺\":[\"ja_open_for_business\"],\"🈵\":[\"ja_no_vacancy\"],\"🔴\":[\"red_circle\"],\"🟠\":[\"orange_circle\"],\"🟡\":[\"yellow_circle\"],\"🟢\":[\"green_circle\"],\"🔵\":[\"blue_circle\"],\"🟣\":[\"purple_circle\"],\"🟤\":[\"brown_circle\"],\"⚫️\":[\"black_circle\"],\"⚪️\":[\"white_circle\"],\"🟥\":[\"red_square\"],\"🟧\":[\"orange_square\"],\"🟨\":[\"yellow_square\"],\"🟩\":[\"green_square\"],\"🟦\":[\"blue_square\"],\"🟪\":[\"purple_square\"],\"🟫\":[\"brown_square\"],\"⬛️\":[\"large_black_square\"],\"⬜️\":[\"large_white_square\"],\"◼️\":[\"medium_black_square\"],\"◻️\":[\"medium_white_square\"],\"◾️\":[\"medium_small_black_square\"],\"◽️\":[\"medium_small_white_square\"],\"▪️\":[\"small_black_square\"],\"▫️\":[\"small_white_square\"],\"🔶\":[\"large_orange_diamond\"],\"🔷\":[\"large_blue_diamond\"],\"🔸\":[\"small_orange_diamond\"],\"🔹\":[\"small_blue_diamond\"],\"🔺\":[\"up_red_triangle\"],\"🔻\":[\"down_red_triangle\"],\"💠\":[\"diamond_dot\"],\"🔘\":[\"radio_button\"],\"🔳\":[\"white_square_button\"],\"🔲\":[\"black_square_button\"],\"🏁\":[\"checkered_flag\"],\"🚩\":[\"triangle_flag\"],\"🎌\":[\"crossed_flags\"],\"🏴\":[\"black_flag\"],\"🏳️\":[\"white_flag\"],\"🏳️‍🌈\":[\"rainbow_flag\"],\"🏳️‍⚧️\":[\"trans_flag\"],\"🏴‍☠️\":[\"pirate_flag\",\"jolly_roger\"],\"🇦🇨\":[\"flag_ac\"],\"🇦🇩\":[\"flag_ad\"],\"🇦🇪\":[\"flag_ae\"],\"🇦🇫\":[\"flag_af\"],\"🇦🇬\":[\"flag_ag\"],\"🇦🇮\":[\"flag_ai\"],\"🇦🇱\":[\"flag_al\"],\"🇦🇲\":[\"flag_am\"],\"🇦🇴\":[\"flag_ao\"],\"🇦🇶\":[\"flag_aq\"],\"🇦🇷\":[\"flag_ar\"],\"🇦🇸\":[\"flag_as\"],\"🇦🇹\":[\"flag_at\"],\"🇦🇺\":[\"flag_au\"],\"🇦🇼\":[\"flag_aw\"],\"🇦🇽\":[\"flag_ax\"],\"🇦🇿\":[\"flag_az\"],\"🇧🇦\":[\"flag_ba\"],\"🇧🇧\":[\"flag_bb\"],\"🇧🇩\":[\"flag_bd\"],\"🇧🇪\":[\"flag_be\"],\"🇧🇫\":[\"flag_bf\"],\"🇧🇬\":[\"flag_bg\"],\"🇧🇭\":[\"flag_bh\"],\"🇧🇮\":[\"flag_bi\"],\"🇧🇯\":[\"flag_bj\"],\"🇧🇱\":[\"flag_bl\"],\"🇧🇲\":[\"flag_bm\"],\"🇧🇳\":[\"flag_bn\"],\"🇧🇴\":[\"flag_bo\"],\"🇧🇶\":[\"flag_bq\"],\"🇧🇷\":[\"flag_br\"],\"🇧🇸\":[\"flag_bs\"],\"🇧🇹\":[\"flag_bt\"],\"🇧🇻\":[\"flag_bv\"],\"🇧🇼\":[\"flag_bw\"],\"🇧🇾\":[\"flag_by\"],\"🇧🇿\":[\"flag_bz\"],\"🇨🇦\":[\"flag_ca\"],\"🇨🇨\":[\"flag_cc\"],\"🇨🇩\":[\"flag_cd\"],\"🇨🇫\":[\"flag_cf\"],\"🇨🇬\":[\"flag_cg\"],\"🇨🇭\":[\"flag_ch\"],\"🇨🇮\":[\"flag_ci\"],\"🇨🇰\":[\"flag_ck\"],\"🇨🇱\":[\"flag_cl\"],\"🇨🇲\":[\"flag_cm\"],\"🇨🇳\":[\"flag_cn\"],\"🇨🇴\":[\"flag_co\"],\"🇨🇵\":[\"flag_cp\"],\"🇨🇷\":[\"flag_cr\"],\"🇨🇺\":[\"flag_cu\"],\"🇨🇻\":[\"flag_cv\"],\"🇨🇼\":[\"flag_cw\"],\"🇨🇽\":[\"flag_cx\"],\"🇨🇾\":[\"flag_cy\"],\"🇨🇿\":[\"flag_cz\"],\"🇩🇪\":[\"flag_de\"],\"🇩🇬\":[\"flag_dg\"],\"🇩🇯\":[\"flag_dj\"],\"🇩🇰\":[\"flag_dk\"],\"🇩🇲\":[\"flag_dm\"],\"🇩🇴\":[\"flag_do\"],\"🇩🇿\":[\"flag_dz\"],\"🇪🇦\":[\"flag_ea\"],\"🇪🇨\":[\"flag_ec\"],\"🇪🇪\":[\"flag_ee\"],\"🇪🇬\":[\"flag_eg\"],\"🇪🇭\":[\"flag_eh\"],\"🇪🇷\":[\"flag_er\"],\"🇪🇸\":[\"flag_es\"],\"🇪🇹\":[\"flag_et\"],\"🇪🇺\":[\"flag_eu\"],\"🇫🇮\":[\"flag_fi\"],\"🇫🇯\":[\"flag_fj\"],\"🇫🇰\":[\"flag_fk\"],\"🇫🇲\":[\"flag_fm\"],\"🇫🇴\":[\"flag_fo\"],\"🇫🇷\":[\"flag_fr\"],\"🇬🇦\":[\"flag_ga\"],\"🇬🇧\":[\"flag_gb\"],\"🇬🇩\":[\"flag_gd\"],\"🇬🇪\":[\"flag_ge\"],\"🇬🇫\":[\"flag_gf\"],\"🇬🇬\":[\"flag_gg\"],\"🇬🇭\":[\"flag_gh\"],\"🇬🇮\":[\"flag_gi\"],\"🇬🇱\":[\"flag_gl\"],\"🇬🇲\":[\"flag_gm\"],\"🇬🇳\":[\"flag_gn\"],\"🇬🇵\":[\"flag_gp\"],\"🇬🇶\":[\"flag_gq\"],\"🇬🇷\":[\"flag_gr\"],\"🇬🇸\":[\"flag_gs\"],\"🇬🇹\":[\"flag_gt\"],\"🇬🇺\":[\"flag_gu\"],\"🇬🇼\":[\"flag_gw\"],\"🇬🇾\":[\"flag_gy\"],\"🇭🇰\":[\"flag_hk\"],\"🇭🇲\":[\"flag_hm\"],\"🇭🇳\":[\"flag_hn\"],\"🇭🇷\":[\"flag_hr\"],\"🇭🇹\":[\"flag_ht\"],\"🇭🇺\":[\"flag_hu\"],\"🇮🇨\":[\"flag_ic\"],\"🇮🇩\":[\"flag_id\"],\"🇮🇪\":[\"flag_ie\"],\"🇮🇱\":[\"flag_il\"],\"🇮🇲\":[\"flag_im\"],\"🇮🇳\":[\"flag_in\"],\"🇮🇴\":[\"flag_io\"],\"🇮🇶\":[\"flag_iq\"],\"🇮🇷\":[\"flag_ir\"],\"🇮🇸\":[\"flag_is\"],\"🇮🇹\":[\"flag_it\"],\"🇯🇪\":[\"flag_je\"],\"🇯🇲\":[\"flag_jm\"],\"🇯🇴\":[\"flag_jo\"],\"🇯🇵\":[\"flag_jp\"],\"🇰🇪\":[\"flag_ke\"],\"🇰🇬\":[\"flag_kg\"],\"🇰🇭\":[\"flag_kh\"],\"🇰🇮\":[\"flag_ki\"],\"🇰🇲\":[\"flag_km\"],\"🇰🇳\":[\"flag_kn\"],\"🇰🇵\":[\"flag_kp\"],\"🇰🇷\":[\"flag_kr\"],\"🇰🇼\":[\"flag_kw\"],\"🇰🇾\":[\"flag_ky\"],\"🇰🇿\":[\"flag_kz\"],\"🇱🇦\":[\"flag_la\"],\"🇱🇧\":[\"flag_lb\"],\"🇱🇨\":[\"flag_lc\"],\"🇱🇮\":[\"flag_li\"],\"🇱🇰\":[\"flag_lk\"],\"🇱🇷\":[\"flag_lr\"],\"🇱🇸\":[\"flag_ls\"],\"🇱🇹\":[\"flag_lt\"],\"🇱🇺\":[\"flag_lu\"],\"🇱🇻\":[\"flag_lv\"],\"🇱🇾\":[\"flag_ly\"],\"🇲🇦\":[\"flag_ma\"],\"🇲🇨\":[\"flag_mc\"],\"🇲🇩\":[\"flag_md\"],\"🇲🇪\":[\"flag_me\"],\"🇲🇫\":[\"flag_mf\"],\"🇲🇬\":[\"flag_mg\"],\"🇲🇭\":[\"flag_mh\"],\"🇲🇰\":[\"flag_mk\"],\"🇲🇱\":[\"flag_ml\"],\"🇲🇲\":[\"flag_mm\"],\"🇲🇳\":[\"flag_mn\"],\"🇲🇴\":[\"flag_mo\"],\"🇲🇵\":[\"flag_mp\"],\"🇲🇶\":[\"flag_mq\"],\"🇲🇷\":[\"flag_mr\"],\"🇲🇸\":[\"flag_ms\"],\"🇲🇹\":[\"flag_mt\"],\"🇲🇺\":[\"flag_mu\"],\"🇲🇻\":[\"flag_mv\"],\"🇲🇼\":[\"flag_mw\"],\"🇲🇽\":[\"flag_mx\"],\"🇲🇾\":[\"flag_my\"],\"🇲🇿\":[\"flag_mz\"],\"🇳🇦\":[\"flag_na\"],\"🇳🇨\":[\"flag_nc\"],\"🇳🇪\":[\"flag_ne\"],\"🇳🇫\":[\"flag_nf\"],\"🇳🇬\":[\"flag_ng\"],\"🇳🇮\":[\"flag_ni\"],\"🇳🇱\":[\"flag_nl\"],\"🇳🇴\":[\"flag_no\"],\"🇳🇵\":[\"flag_np\"],\"🇳🇷\":[\"flag_nr\"],\"🇳🇺\":[\"flag_nu\"],\"🇳🇿\":[\"flag_nz\"],\"🇴🇲\":[\"flag_om\"],\"🇵🇦\":[\"flag_pa\"],\"🇵🇪\":[\"flag_pe\"],\"🇵🇫\":[\"flag_pf\"],\"🇵🇬\":[\"flag_pg\"],\"🇵🇭\":[\"flag_ph\"],\"🇵🇰\":[\"flag_pk\"],\"🇵🇱\":[\"flag_pl\"],\"🇵🇲\":[\"flag_pm\"],\"🇵🇳\":[\"flag_pn\"],\"🇵🇷\":[\"flag_pr\"],\"🇵🇸\":[\"flag_ps\"],\"🇵🇹\":[\"flag_pt\"],\"🇵🇼\":[\"flag_pw\"],\"🇵🇾\":[\"flag_py\"],\"🇶🇦\":[\"flag_qa\"],\"🇷🇪\":[\"flag_re\"],\"🇷🇴\":[\"flag_ro\"],\"🇷🇸\":[\"flag_rs\"],\"🇷🇺\":[\"flag_ru\"],\"🇷🇼\":[\"flag_rw\"],\"🇸🇦\":[\"flag_sa\"],\"🇸🇧\":[\"flag_sb\"],\"🇸🇨\":[\"flag_sc\"],\"🇸🇩\":[\"flag_sd\"],\"🇸🇪\":[\"flag_se\"],\"🇸🇬\":[\"flag_sg\"],\"🇸🇭\":[\"flag_sh\"],\"🇸🇮\":[\"flag_si\"],\"🇸🇯\":[\"flag_sj\"],\"🇸🇰\":[\"flag_sk\"],\"🇸🇱\":[\"flag_sl\"],\"🇸🇲\":[\"flag_sm\"],\"🇸🇳\":[\"flag_sn\"],\"🇸🇴\":[\"flag_so\"],\"🇸🇷\":[\"flag_sr\"],\"🇸🇸\":[\"flag_ss\"],\"🇸🇹\":[\"flag_st\"],\"🇸🇻\":[\"flag_sv\"],\"🇸🇽\":[\"flag_sx\"],\"🇸🇾\":[\"flag_sy\"],\"🇸🇿\":[\"flag_sz\"],\"🇹🇦\":[\"flag_ta\"],\"🇹🇨\":[\"flag_tc\"],\"🇹🇩\":[\"flag_td\"],\"🇹🇫\":[\"flag_tf\"],\"🇹🇬\":[\"flag_tg\"],\"🇹🇭\":[\"flag_th\"],\"🇹🇯\":[\"flag_tj\"],\"🇹🇰\":[\"flag_tk\"],\"🇹🇱\":[\"flag_tl\"],\"🇹🇲\":[\"flag_tm\"],\"🇹🇳\":[\"flag_tn\"],\"🇹🇴\":[\"flag_to\"],\"🇹🇷\":[\"flag_tr\"],\"🇹🇹\":[\"flag_tt\"],\"🇹🇻\":[\"flag_tv\"],\"🇹🇼\":[\"flag_tw\"],\"🇹🇿\":[\"flag_tz\"],\"🇺🇦\":[\"flag_ua\"],\"🇺🇬\":[\"flag_ug\"],\"🇺🇲\":[\"flag_um\"],\"🇺🇳\":[\"flag_un\"],\"🇺🇸\":[\"flag_us\",\"usa\"],\"🇺🇾\":[\"flag_uy\"],\"🇺🇿\":[\"flag_uz\"],\"🇻🇦\":[\"flag_va\"],\"🇻🇨\":[\"flag_vc\"],\"🇻🇪\":[\"flag_ve\"],\"🇻🇬\":[\"flag_vg\"],\"🇻🇮\":[\"flag_vi\"],\"🇻🇳\":[\"flag_vn\"],\"🇻🇺\":[\"flag_vu\"],\"🇼🇫\":[\"flag_wf\"],\"🇼🇸\":[\"flag_ws\"],\"🇽🇰\":[\"flag_xk\"],\"🇾🇪\":[\"flag_ye\"],\"🇾🇹\":[\"flag_yt\"],\"🇿🇦\":[\"flag_za\"],\"🇿🇲\":[\"flag_zm\"],\"🇿🇼\":[\"flag_zw\"],\"🏴󠁧󠁢󠁥󠁮󠁧󠁿\":[\"flag_gbeng\",\"england\"],\"🏴󠁧󠁢󠁳󠁣󠁴󠁿\":[\"flag_gbsct\",\"scotland\"],\"🏴󠁧󠁢󠁷󠁬󠁳󠁿\":[\"flag_gbwls\",\"wales\"]}");

/***/ }),

/***/ "./node_modules/simple-emoji-map/generated/variants.json":
/*!***************************************************************!*\
  !*** ./node_modules/simple-emoji-map/generated/variants.json ***!
  \***************************************************************/
/*! exports provided: 👋🏻, 👋🏼, 👋🏽, 👋🏾, 👋🏿, 🤚🏻, 🤚🏼, 🤚🏽, 🤚🏾, 🤚🏿, 🖐🏻, 🖐🏼, 🖐🏽, 🖐🏾, 🖐🏿, ✋🏻, ✋🏼, ✋🏽, ✋🏾, ✋🏿, 🖖🏻, 🖖🏼, 🖖🏽, 🖖🏾, 🖖🏿, 👌🏻, 👌🏼, 👌🏽, 👌🏾, 👌🏿, 🤌🏻, 🤌🏼, 🤌🏽, 🤌🏾, 🤌🏿, 🤏🏻, 🤏🏼, 🤏🏽, 🤏🏾, 🤏🏿, ✌🏻, ✌🏼, ✌🏽, ✌🏾, ✌🏿, 🤞🏻, 🤞🏼, 🤞🏽, 🤞🏾, 🤞🏿, 🤟🏻, 🤟🏼, 🤟🏽, 🤟🏾, 🤟🏿, 🤘🏻, 🤘🏼, 🤘🏽, 🤘🏾, 🤘🏿, 🤙🏻, 🤙🏼, 🤙🏽, 🤙🏾, 🤙🏿, 👈🏻, 👈🏼, 👈🏽, 👈🏾, 👈🏿, 👉🏻, 👉🏼, 👉🏽, 👉🏾, 👉🏿, 👆🏻, 👆🏼, 👆🏽, 👆🏾, 👆🏿, 🖕🏻, 🖕🏼, 🖕🏽, 🖕🏾, 🖕🏿, 👇🏻, 👇🏼, 👇🏽, 👇🏾, 👇🏿, ☝🏻, ☝🏼, ☝🏽, ☝🏾, ☝🏿, 👍🏻, 👍🏼, 👍🏽, 👍🏾, 👍🏿, 👎🏻, 👎🏼, 👎🏽, 👎🏾, 👎🏿, ✊🏻, ✊🏼, ✊🏽, ✊🏾, ✊🏿, 👊🏻, 👊🏼, 👊🏽, 👊🏾, 👊🏿, 🤛🏻, 🤛🏼, 🤛🏽, 🤛🏾, 🤛🏿, 🤜🏻, 🤜🏼, 🤜🏽, 🤜🏾, 🤜🏿, 👏🏻, 👏🏼, 👏🏽, 👏🏾, 👏🏿, 🙌🏻, 🙌🏼, 🙌🏽, 🙌🏾, 🙌🏿, 👐🏻, 👐🏼, 👐🏽, 👐🏾, 👐🏿, 🤲🏻, 🤲🏼, 🤲🏽, 🤲🏾, 🤲🏿, 🙏🏻, 🙏🏼, 🙏🏽, 🙏🏾, 🙏🏿, ✍🏻, ✍🏼, ✍🏽, ✍🏾, ✍🏿, 💅🏻, 💅🏼, 💅🏽, 💅🏾, 💅🏿, 🤳🏻, 🤳🏼, 🤳🏽, 🤳🏾, 🤳🏿, 💪🏻, 💪🏼, 💪🏽, 💪🏾, 💪🏿, 🦵🏻, 🦵🏼, 🦵🏽, 🦵🏾, 🦵🏿, 🦶🏻, 🦶🏼, 🦶🏽, 🦶🏾, 🦶🏿, 👂🏻, 👂🏼, 👂🏽, 👂🏾, 👂🏿, 🦻🏻, 🦻🏼, 🦻🏽, 🦻🏾, 🦻🏿, 👃🏻, 👃🏼, 👃🏽, 👃🏾, 👃🏿, 👶🏻, 👶🏼, 👶🏽, 👶🏾, 👶🏿, 🧒🏻, 🧒🏼, 🧒🏽, 🧒🏾, 🧒🏿, 👦🏻, 👦🏼, 👦🏽, 👦🏾, 👦🏿, 👧🏻, 👧🏼, 👧🏽, 👧🏾, 👧🏿, 🧑🏻, 🧑🏼, 🧑🏽, 🧑🏾, 🧑🏿, 👱🏻, 👱🏼, 👱🏽, 👱🏾, 👱🏿, 👨🏻, 👨🏼, 👨🏽, 👨🏾, 👨🏿, 🧔🏻, 🧔🏼, 🧔🏽, 🧔🏾, 🧔🏿, 👨🏻‍🦰, 👨🏼‍🦰, 👨🏽‍🦰, 👨🏾‍🦰, 👨🏿‍🦰, 👨🏻‍🦱, 👨🏼‍🦱, 👨🏽‍🦱, 👨🏾‍🦱, 👨🏿‍🦱, 👨🏻‍🦳, 👨🏼‍🦳, 👨🏽‍🦳, 👨🏾‍🦳, 👨🏿‍🦳, 👨🏻‍🦲, 👨🏼‍🦲, 👨🏽‍🦲, 👨🏾‍🦲, 👨🏿‍🦲, 👩🏻, 👩🏼, 👩🏽, 👩🏾, 👩🏿, 👩🏻‍🦰, 👩🏼‍🦰, 👩🏽‍🦰, 👩🏾‍🦰, 👩🏿‍🦰, 🧑🏻‍🦰, 🧑🏼‍🦰, 🧑🏽‍🦰, 🧑🏾‍🦰, 🧑🏿‍🦰, 👩🏻‍🦱, 👩🏼‍🦱, 👩🏽‍🦱, 👩🏾‍🦱, 👩🏿‍🦱, 🧑🏻‍🦱, 🧑🏼‍🦱, 🧑🏽‍🦱, 🧑🏾‍🦱, 🧑🏿‍🦱, 👩🏻‍🦳, 👩🏼‍🦳, 👩🏽‍🦳, 👩🏾‍🦳, 👩🏿‍🦳, 🧑🏻‍🦳, 🧑🏼‍🦳, 🧑🏽‍🦳, 🧑🏾‍🦳, 🧑🏿‍🦳, 👩🏻‍🦲, 👩🏼‍🦲, 👩🏽‍🦲, 👩🏾‍🦲, 👩🏿‍🦲, 🧑🏻‍🦲, 🧑🏼‍🦲, 🧑🏽‍🦲, 🧑🏾‍🦲, 🧑🏿‍🦲, 👱🏻‍♀️, 👱🏼‍♀️, 👱🏽‍♀️, 👱🏾‍♀️, 👱🏿‍♀️, 👱🏻‍♂️, 👱🏼‍♂️, 👱🏽‍♂️, 👱🏾‍♂️, 👱🏿‍♂️, 🧓🏻, 🧓🏼, 🧓🏽, 🧓🏾, 🧓🏿, 👴🏻, 👴🏼, 👴🏽, 👴🏾, 👴🏿, 👵🏻, 👵🏼, 👵🏽, 👵🏾, 👵🏿, 🙍🏻, 🙍🏼, 🙍🏽, 🙍🏾, 🙍🏿, 🙍🏻‍♂️, 🙍🏼‍♂️, 🙍🏽‍♂️, 🙍🏾‍♂️, 🙍🏿‍♂️, 🙍🏻‍♀️, 🙍🏼‍♀️, 🙍🏽‍♀️, 🙍🏾‍♀️, 🙍🏿‍♀️, 🙎🏻, 🙎🏼, 🙎🏽, 🙎🏾, 🙎🏿, 🙎🏻‍♂️, 🙎🏼‍♂️, 🙎🏽‍♂️, 🙎🏾‍♂️, 🙎🏿‍♂️, 🙎🏻‍♀️, 🙎🏼‍♀️, 🙎🏽‍♀️, 🙎🏾‍♀️, 🙎🏿‍♀️, 🙅🏻, 🙅🏼, 🙅🏽, 🙅🏾, 🙅🏿, 🙅🏻‍♂️, 🙅🏼‍♂️, 🙅🏽‍♂️, 🙅🏾‍♂️, 🙅🏿‍♂️, 🙅🏻‍♀️, 🙅🏼‍♀️, 🙅🏽‍♀️, 🙅🏾‍♀️, 🙅🏿‍♀️, 🙆🏻, 🙆🏼, 🙆🏽, 🙆🏾, 🙆🏿, 🙆🏻‍♂️, 🙆🏼‍♂️, 🙆🏽‍♂️, 🙆🏾‍♂️, 🙆🏿‍♂️, 🙆🏻‍♀️, 🙆🏼‍♀️, 🙆🏽‍♀️, 🙆🏾‍♀️, 🙆🏿‍♀️, 💁🏻, 💁🏼, 💁🏽, 💁🏾, 💁🏿, 💁🏻‍♂️, 💁🏼‍♂️, 💁🏽‍♂️, 💁🏾‍♂️, 💁🏿‍♂️, 💁🏻‍♀️, 💁🏼‍♀️, 💁🏽‍♀️, 💁🏾‍♀️, 💁🏿‍♀️, 🙋🏻, 🙋🏼, 🙋🏽, 🙋🏾, 🙋🏿, 🙋🏻‍♂️, 🙋🏼‍♂️, 🙋🏽‍♂️, 🙋🏾‍♂️, 🙋🏿‍♂️, 🙋🏻‍♀️, 🙋🏼‍♀️, 🙋🏽‍♀️, 🙋🏾‍♀️, 🙋🏿‍♀️, 🧏🏻, 🧏🏼, 🧏🏽, 🧏🏾, 🧏🏿, 🧏🏻‍♂️, 🧏🏼‍♂️, 🧏🏽‍♂️, 🧏🏾‍♂️, 🧏🏿‍♂️, 🧏🏻‍♀️, 🧏🏼‍♀️, 🧏🏽‍♀️, 🧏🏾‍♀️, 🧏🏿‍♀️, 🙇🏻, 🙇🏼, 🙇🏽, 🙇🏾, 🙇🏿, 🙇🏻‍♂️, 🙇🏼‍♂️, 🙇🏽‍♂️, 🙇🏾‍♂️, 🙇🏿‍♂️, 🙇🏻‍♀️, 🙇🏼‍♀️, 🙇🏽‍♀️, 🙇🏾‍♀️, 🙇🏿‍♀️, 🤦🏻, 🤦🏼, 🤦🏽, 🤦🏾, 🤦🏿, 🤦🏻‍♂️, 🤦🏼‍♂️, 🤦🏽‍♂️, 🤦🏾‍♂️, 🤦🏿‍♂️, 🤦🏻‍♀️, 🤦🏼‍♀️, 🤦🏽‍♀️, 🤦🏾‍♀️, 🤦🏿‍♀️, 🤷🏻, 🤷🏼, 🤷🏽, 🤷🏾, 🤷🏿, 🤷🏻‍♂️, 🤷🏼‍♂️, 🤷🏽‍♂️, 🤷🏾‍♂️, 🤷🏿‍♂️, 🤷🏻‍♀️, 🤷🏼‍♀️, 🤷🏽‍♀️, 🤷🏾‍♀️, 🤷🏿‍♀️, 🧑🏻‍⚕️, 🧑🏼‍⚕️, 🧑🏽‍⚕️, 🧑🏾‍⚕️, 🧑🏿‍⚕️, 👨🏻‍⚕️, 👨🏼‍⚕️, 👨🏽‍⚕️, 👨🏾‍⚕️, 👨🏿‍⚕️, 👩🏻‍⚕️, 👩🏼‍⚕️, 👩🏽‍⚕️, 👩🏾‍⚕️, 👩🏿‍⚕️, 🧑🏻‍🎓, 🧑🏼‍🎓, 🧑🏽‍🎓, 🧑🏾‍🎓, 🧑🏿‍🎓, 👨🏻‍🎓, 👨🏼‍🎓, 👨🏽‍🎓, 👨🏾‍🎓, 👨🏿‍🎓, 👩🏻‍🎓, 👩🏼‍🎓, 👩🏽‍🎓, 👩🏾‍🎓, 👩🏿‍🎓, 🧑🏻‍🏫, 🧑🏼‍🏫, 🧑🏽‍🏫, 🧑🏾‍🏫, 🧑🏿‍🏫, 👨🏻‍🏫, 👨🏼‍🏫, 👨🏽‍🏫, 👨🏾‍🏫, 👨🏿‍🏫, 👩🏻‍🏫, 👩🏼‍🏫, 👩🏽‍🏫, 👩🏾‍🏫, 👩🏿‍🏫, 🧑🏻‍⚖️, 🧑🏼‍⚖️, 🧑🏽‍⚖️, 🧑🏾‍⚖️, 🧑🏿‍⚖️, 👨🏻‍⚖️, 👨🏼‍⚖️, 👨🏽‍⚖️, 👨🏾‍⚖️, 👨🏿‍⚖️, 👩🏻‍⚖️, 👩🏼‍⚖️, 👩🏽‍⚖️, 👩🏾‍⚖️, 👩🏿‍⚖️, 🧑🏻‍🌾, 🧑🏼‍🌾, 🧑🏽‍🌾, 🧑🏾‍🌾, 🧑🏿‍🌾, 👨🏻‍🌾, 👨🏼‍🌾, 👨🏽‍🌾, 👨🏾‍🌾, 👨🏿‍🌾, 👩🏻‍🌾, 👩🏼‍🌾, 👩🏽‍🌾, 👩🏾‍🌾, 👩🏿‍🌾, 🧑🏻‍🍳, 🧑🏼‍🍳, 🧑🏽‍🍳, 🧑🏾‍🍳, 🧑🏿‍🍳, 👨🏻‍🍳, 👨🏼‍🍳, 👨🏽‍🍳, 👨🏾‍🍳, 👨🏿‍🍳, 👩🏻‍🍳, 👩🏼‍🍳, 👩🏽‍🍳, 👩🏾‍🍳, 👩🏿‍🍳, 🧑🏻‍🔧, 🧑🏼‍🔧, 🧑🏽‍🔧, 🧑🏾‍🔧, 🧑🏿‍🔧, 👨🏻‍🔧, 👨🏼‍🔧, 👨🏽‍🔧, 👨🏾‍🔧, 👨🏿‍🔧, 👩🏻‍🔧, 👩🏼‍🔧, 👩🏽‍🔧, 👩🏾‍🔧, 👩🏿‍🔧, 🧑🏻‍🏭, 🧑🏼‍🏭, 🧑🏽‍🏭, 🧑🏾‍🏭, 🧑🏿‍🏭, 👨🏻‍🏭, 👨🏼‍🏭, 👨🏽‍🏭, 👨🏾‍🏭, 👨🏿‍🏭, 👩🏻‍🏭, 👩🏼‍🏭, 👩🏽‍🏭, 👩🏾‍🏭, 👩🏿‍🏭, 🧑🏻‍💼, 🧑🏼‍💼, 🧑🏽‍💼, 🧑🏾‍💼, 🧑🏿‍💼, 👨🏻‍💼, 👨🏼‍💼, 👨🏽‍💼, 👨🏾‍💼, 👨🏿‍💼, 👩🏻‍💼, 👩🏼‍💼, 👩🏽‍💼, 👩🏾‍💼, 👩🏿‍💼, 🧑🏻‍🔬, 🧑🏼‍🔬, 🧑🏽‍🔬, 🧑🏾‍🔬, 🧑🏿‍🔬, 👨🏻‍🔬, 👨🏼‍🔬, 👨🏽‍🔬, 👨🏾‍🔬, 👨🏿‍🔬, 👩🏻‍🔬, 👩🏼‍🔬, 👩🏽‍🔬, 👩🏾‍🔬, 👩🏿‍🔬, 🧑🏻‍💻, 🧑🏼‍💻, 🧑🏽‍💻, 🧑🏾‍💻, 🧑🏿‍💻, 👨🏻‍💻, 👨🏼‍💻, 👨🏽‍💻, 👨🏾‍💻, 👨🏿‍💻, 👩🏻‍💻, 👩🏼‍💻, 👩🏽‍💻, 👩🏾‍💻, 👩🏿‍💻, 🧑🏻‍🎤, 🧑🏼‍🎤, 🧑🏽‍🎤, 🧑🏾‍🎤, 🧑🏿‍🎤, 👨🏻‍🎤, 👨🏼‍🎤, 👨🏽‍🎤, 👨🏾‍🎤, 👨🏿‍🎤, 👩🏻‍🎤, 👩🏼‍🎤, 👩🏽‍🎤, 👩🏾‍🎤, 👩🏿‍🎤, 🧑🏻‍🎨, 🧑🏼‍🎨, 🧑🏽‍🎨, 🧑🏾‍🎨, 🧑🏿‍🎨, 👨🏻‍🎨, 👨🏼‍🎨, 👨🏽‍🎨, 👨🏾‍🎨, 👨🏿‍🎨, 👩🏻‍🎨, 👩🏼‍🎨, 👩🏽‍🎨, 👩🏾‍🎨, 👩🏿‍🎨, 🧑🏻‍✈️, 🧑🏼‍✈️, 🧑🏽‍✈️, 🧑🏾‍✈️, 🧑🏿‍✈️, 👨🏻‍✈️, 👨🏼‍✈️, 👨🏽‍✈️, 👨🏾‍✈️, 👨🏿‍✈️, 👩🏻‍✈️, 👩🏼‍✈️, 👩🏽‍✈️, 👩🏾‍✈️, 👩🏿‍✈️, 🧑🏻‍🚀, 🧑🏼‍🚀, 🧑🏽‍🚀, 🧑🏾‍🚀, 🧑🏿‍🚀, 👨🏻‍🚀, 👨🏼‍🚀, 👨🏽‍🚀, 👨🏾‍🚀, 👨🏿‍🚀, 👩🏻‍🚀, 👩🏼‍🚀, 👩🏽‍🚀, 👩🏾‍🚀, 👩🏿‍🚀, 🧑🏻‍🚒, 🧑🏼‍🚒, 🧑🏽‍🚒, 🧑🏾‍🚒, 🧑🏿‍🚒, 👨🏻‍🚒, 👨🏼‍🚒, 👨🏽‍🚒, 👨🏾‍🚒, 👨🏿‍🚒, 👩🏻‍🚒, 👩🏼‍🚒, 👩🏽‍🚒, 👩🏾‍🚒, 👩🏿‍🚒, 👮🏻, 👮🏼, 👮🏽, 👮🏾, 👮🏿, 👮🏻‍♂️, 👮🏼‍♂️, 👮🏽‍♂️, 👮🏾‍♂️, 👮🏿‍♂️, 👮🏻‍♀️, 👮🏼‍♀️, 👮🏽‍♀️, 👮🏾‍♀️, 👮🏿‍♀️, 🕵🏻, 🕵🏼, 🕵🏽, 🕵🏾, 🕵🏿, 🕵🏻‍♂️, 🕵🏼‍♂️, 🕵🏽‍♂️, 🕵🏾‍♂️, 🕵🏿‍♂️, 🕵🏻‍♀️, 🕵🏼‍♀️, 🕵🏽‍♀️, 🕵🏾‍♀️, 🕵🏿‍♀️, 💂🏻, 💂🏼, 💂🏽, 💂🏾, 💂🏿, 💂🏻‍♂️, 💂🏼‍♂️, 💂🏽‍♂️, 💂🏾‍♂️, 💂🏿‍♂️, 💂🏻‍♀️, 💂🏼‍♀️, 💂🏽‍♀️, 💂🏾‍♀️, 💂🏿‍♀️, 🥷🏻, 🥷🏼, 🥷🏽, 🥷🏾, 🥷🏿, 👷🏻, 👷🏼, 👷🏽, 👷🏾, 👷🏿, 👷🏻‍♂️, 👷🏼‍♂️, 👷🏽‍♂️, 👷🏾‍♂️, 👷🏿‍♂️, 👷🏻‍♀️, 👷🏼‍♀️, 👷🏽‍♀️, 👷🏾‍♀️, 👷🏿‍♀️, 🤴🏻, 🤴🏼, 🤴🏽, 🤴🏾, 🤴🏿, 👸🏻, 👸🏼, 👸🏽, 👸🏾, 👸🏿, 👳🏻, 👳🏼, 👳🏽, 👳🏾, 👳🏿, 👳🏻‍♂️, 👳🏼‍♂️, 👳🏽‍♂️, 👳🏾‍♂️, 👳🏿‍♂️, 👳🏻‍♀️, 👳🏼‍♀️, 👳🏽‍♀️, 👳🏾‍♀️, 👳🏿‍♀️, 👲🏻, 👲🏼, 👲🏽, 👲🏾, 👲🏿, 🧕🏻, 🧕🏼, 🧕🏽, 🧕🏾, 🧕🏿, 🤵🏻, 🤵🏼, 🤵🏽, 🤵🏾, 🤵🏿, 🤵🏻‍♂️, 🤵🏼‍♂️, 🤵🏽‍♂️, 🤵🏾‍♂️, 🤵🏿‍♂️, 🤵🏻‍♀️, 🤵🏼‍♀️, 🤵🏽‍♀️, 🤵🏾‍♀️, 🤵🏿‍♀️, 👰🏻, 👰🏼, 👰🏽, 👰🏾, 👰🏿, 👰🏻‍♂️, 👰🏼‍♂️, 👰🏽‍♂️, 👰🏾‍♂️, 👰🏿‍♂️, 👰🏻‍♀️, 👰🏼‍♀️, 👰🏽‍♀️, 👰🏾‍♀️, 👰🏿‍♀️, 🤰🏻, 🤰🏼, 🤰🏽, 🤰🏾, 🤰🏿, 🤱🏻, 🤱🏼, 🤱🏽, 🤱🏾, 🤱🏿, 👩🏻‍🍼, 👩🏼‍🍼, 👩🏽‍🍼, 👩🏾‍🍼, 👩🏿‍🍼, 👨🏻‍🍼, 👨🏼‍🍼, 👨🏽‍🍼, 👨🏾‍🍼, 👨🏿‍🍼, 🧑🏻‍🍼, 🧑🏼‍🍼, 🧑🏽‍🍼, 🧑🏾‍🍼, 🧑🏿‍🍼, 👼🏻, 👼🏼, 👼🏽, 👼🏾, 👼🏿, 🎅🏻, 🎅🏼, 🎅🏽, 🎅🏾, 🎅🏿, 🤶🏻, 🤶🏼, 🤶🏽, 🤶🏾, 🤶🏿, 🧑🏻‍🎄, 🧑🏼‍🎄, 🧑🏽‍🎄, 🧑🏾‍🎄, 🧑🏿‍🎄, 🦸🏻, 🦸🏼, 🦸🏽, 🦸🏾, 🦸🏿, 🦸🏻‍♂️, 🦸🏼‍♂️, 🦸🏽‍♂️, 🦸🏾‍♂️, 🦸🏿‍♂️, 🦸🏻‍♀️, 🦸🏼‍♀️, 🦸🏽‍♀️, 🦸🏾‍♀️, 🦸🏿‍♀️, 🦹🏻, 🦹🏼, 🦹🏽, 🦹🏾, 🦹🏿, 🦹🏻‍♂️, 🦹🏼‍♂️, 🦹🏽‍♂️, 🦹🏾‍♂️, 🦹🏿‍♂️, 🦹🏻‍♀️, 🦹🏼‍♀️, 🦹🏽‍♀️, 🦹🏾‍♀️, 🦹🏿‍♀️, 🧙🏻, 🧙🏼, 🧙🏽, 🧙🏾, 🧙🏿, 🧙🏻‍♂️, 🧙🏼‍♂️, 🧙🏽‍♂️, 🧙🏾‍♂️, 🧙🏿‍♂️, 🧙🏻‍♀️, 🧙🏼‍♀️, 🧙🏽‍♀️, 🧙🏾‍♀️, 🧙🏿‍♀️, 🧚🏻, 🧚🏼, 🧚🏽, 🧚🏾, 🧚🏿, 🧚🏻‍♂️, 🧚🏼‍♂️, 🧚🏽‍♂️, 🧚🏾‍♂️, 🧚🏿‍♂️, 🧚🏻‍♀️, 🧚🏼‍♀️, 🧚🏽‍♀️, 🧚🏾‍♀️, 🧚🏿‍♀️, 🧛🏻, 🧛🏼, 🧛🏽, 🧛🏾, 🧛🏿, 🧛🏻‍♂️, 🧛🏼‍♂️, 🧛🏽‍♂️, 🧛🏾‍♂️, 🧛🏿‍♂️, 🧛🏻‍♀️, 🧛🏼‍♀️, 🧛🏽‍♀️, 🧛🏾‍♀️, 🧛🏿‍♀️, 🧜🏻, 🧜🏼, 🧜🏽, 🧜🏾, 🧜🏿, 🧜🏻‍♂️, 🧜🏼‍♂️, 🧜🏽‍♂️, 🧜🏾‍♂️, 🧜🏿‍♂️, 🧜🏻‍♀️, 🧜🏼‍♀️, 🧜🏽‍♀️, 🧜🏾‍♀️, 🧜🏿‍♀️, 🧝🏻, 🧝🏼, 🧝🏽, 🧝🏾, 🧝🏿, 🧝🏻‍♂️, 🧝🏼‍♂️, 🧝🏽‍♂️, 🧝🏾‍♂️, 🧝🏿‍♂️, 🧝🏻‍♀️, 🧝🏼‍♀️, 🧝🏽‍♀️, 🧝🏾‍♀️, 🧝🏿‍♀️, 💆🏻, 💆🏼, 💆🏽, 💆🏾, 💆🏿, 💆🏻‍♂️, 💆🏼‍♂️, 💆🏽‍♂️, 💆🏾‍♂️, 💆🏿‍♂️, 💆🏻‍♀️, 💆🏼‍♀️, 💆🏽‍♀️, 💆🏾‍♀️, 💆🏿‍♀️, 💇🏻, 💇🏼, 💇🏽, 💇🏾, 💇🏿, 💇🏻‍♂️, 💇🏼‍♂️, 💇🏽‍♂️, 💇🏾‍♂️, 💇🏿‍♂️, 💇🏻‍♀️, 💇🏼‍♀️, 💇🏽‍♀️, 💇🏾‍♀️, 💇🏿‍♀️, 🚶🏻, 🚶🏼, 🚶🏽, 🚶🏾, 🚶🏿, 🚶🏻‍♂️, 🚶🏼‍♂️, 🚶🏽‍♂️, 🚶🏾‍♂️, 🚶🏿‍♂️, 🚶🏻‍♀️, 🚶🏼‍♀️, 🚶🏽‍♀️, 🚶🏾‍♀️, 🚶🏿‍♀️, 🧍🏻, 🧍🏼, 🧍🏽, 🧍🏾, 🧍🏿, 🧍🏻‍♂️, 🧍🏼‍♂️, 🧍🏽‍♂️, 🧍🏾‍♂️, 🧍🏿‍♂️, 🧍🏻‍♀️, 🧍🏼‍♀️, 🧍🏽‍♀️, 🧍🏾‍♀️, 🧍🏿‍♀️, 🧎🏻, 🧎🏼, 🧎🏽, 🧎🏾, 🧎🏿, 🧎🏻‍♂️, 🧎🏼‍♂️, 🧎🏽‍♂️, 🧎🏾‍♂️, 🧎🏿‍♂️, 🧎🏻‍♀️, 🧎🏼‍♀️, 🧎🏽‍♀️, 🧎🏾‍♀️, 🧎🏿‍♀️, 🧑🏻‍🦯, 🧑🏼‍🦯, 🧑🏽‍🦯, 🧑🏾‍🦯, 🧑🏿‍🦯, 👨🏻‍🦯, 👨🏼‍🦯, 👨🏽‍🦯, 👨🏾‍🦯, 👨🏿‍🦯, 👩🏻‍🦯, 👩🏼‍🦯, 👩🏽‍🦯, 👩🏾‍🦯, 👩🏿‍🦯, 🧑🏻‍🦼, 🧑🏼‍🦼, 🧑🏽‍🦼, 🧑🏾‍🦼, 🧑🏿‍🦼, 👨🏻‍🦼, 👨🏼‍🦼, 👨🏽‍🦼, 👨🏾‍🦼, 👨🏿‍🦼, 👩🏻‍🦼, 👩🏼‍🦼, 👩🏽‍🦼, 👩🏾‍🦼, 👩🏿‍🦼, 🧑🏻‍🦽, 🧑🏼‍🦽, 🧑🏽‍🦽, 🧑🏾‍🦽, 🧑🏿‍🦽, 👨🏻‍🦽, 👨🏼‍🦽, 👨🏽‍🦽, 👨🏾‍🦽, 👨🏿‍🦽, 👩🏻‍🦽, 👩🏼‍🦽, 👩🏽‍🦽, 👩🏾‍🦽, 👩🏿‍🦽, 🏃🏻, 🏃🏼, 🏃🏽, 🏃🏾, 🏃🏿, 🏃🏻‍♂️, 🏃🏼‍♂️, 🏃🏽‍♂️, 🏃🏾‍♂️, 🏃🏿‍♂️, 🏃🏻‍♀️, 🏃🏼‍♀️, 🏃🏽‍♀️, 🏃🏾‍♀️, 🏃🏿‍♀️, 💃🏻, 💃🏼, 💃🏽, 💃🏾, 💃🏿, 🕺🏻, 🕺🏼, 🕺🏽, 🕺🏾, 🕺🏿, 🕴🏻, 🕴🏼, 🕴🏽, 🕴🏾, 🕴🏿, 🧖🏻, 🧖🏼, 🧖🏽, 🧖🏾, 🧖🏿, 🧖🏻‍♂️, 🧖🏼‍♂️, 🧖🏽‍♂️, 🧖🏾‍♂️, 🧖🏿‍♂️, 🧖🏻‍♀️, 🧖🏼‍♀️, 🧖🏽‍♀️, 🧖🏾‍♀️, 🧖🏿‍♀️, 🧗🏻, 🧗🏼, 🧗🏽, 🧗🏾, 🧗🏿, 🧗🏻‍♂️, 🧗🏼‍♂️, 🧗🏽‍♂️, 🧗🏾‍♂️, 🧗🏿‍♂️, 🧗🏻‍♀️, 🧗🏼‍♀️, 🧗🏽‍♀️, 🧗🏾‍♀️, 🧗🏿‍♀️, 🏇🏻, 🏇🏼, 🏇🏽, 🏇🏾, 🏇🏿, 🏂🏻, 🏂🏼, 🏂🏽, 🏂🏾, 🏂🏿, 🏌🏻, 🏌🏼, 🏌🏽, 🏌🏾, 🏌🏿, 🏌🏻‍♂️, 🏌🏼‍♂️, 🏌🏽‍♂️, 🏌🏾‍♂️, 🏌🏿‍♂️, 🏌🏻‍♀️, 🏌🏼‍♀️, 🏌🏽‍♀️, 🏌🏾‍♀️, 🏌🏿‍♀️, 🏄🏻, 🏄🏼, 🏄🏽, 🏄🏾, 🏄🏿, 🏄🏻‍♂️, 🏄🏼‍♂️, 🏄🏽‍♂️, 🏄🏾‍♂️, 🏄🏿‍♂️, 🏄🏻‍♀️, 🏄🏼‍♀️, 🏄🏽‍♀️, 🏄🏾‍♀️, 🏄🏿‍♀️, 🚣🏻, 🚣🏼, 🚣🏽, 🚣🏾, 🚣🏿, 🚣🏻‍♂️, 🚣🏼‍♂️, 🚣🏽‍♂️, 🚣🏾‍♂️, 🚣🏿‍♂️, 🚣🏻‍♀️, 🚣🏼‍♀️, 🚣🏽‍♀️, 🚣🏾‍♀️, 🚣🏿‍♀️, 🏊🏻, 🏊🏼, 🏊🏽, 🏊🏾, 🏊🏿, 🏊🏻‍♂️, 🏊🏼‍♂️, 🏊🏽‍♂️, 🏊🏾‍♂️, 🏊🏿‍♂️, 🏊🏻‍♀️, 🏊🏼‍♀️, 🏊🏽‍♀️, 🏊🏾‍♀️, 🏊🏿‍♀️, ⛹🏻, ⛹🏼, ⛹🏽, ⛹🏾, ⛹🏿, ⛹🏻‍♂️, ⛹🏼‍♂️, ⛹🏽‍♂️, ⛹🏾‍♂️, ⛹🏿‍♂️, ⛹🏻‍♀️, ⛹🏼‍♀️, ⛹🏽‍♀️, ⛹🏾‍♀️, ⛹🏿‍♀️, 🏋🏻, 🏋🏼, 🏋🏽, 🏋🏾, 🏋🏿, 🏋🏻‍♂️, 🏋🏼‍♂️, 🏋🏽‍♂️, 🏋🏾‍♂️, 🏋🏿‍♂️, 🏋🏻‍♀️, 🏋🏼‍♀️, 🏋🏽‍♀️, 🏋🏾‍♀️, 🏋🏿‍♀️, 🚴🏻, 🚴🏼, 🚴🏽, 🚴🏾, 🚴🏿, 🚴🏻‍♂️, 🚴🏼‍♂️, 🚴🏽‍♂️, 🚴🏾‍♂️, 🚴🏿‍♂️, 🚴🏻‍♀️, 🚴🏼‍♀️, 🚴🏽‍♀️, 🚴🏾‍♀️, 🚴🏿‍♀️, 🚵🏻, 🚵🏼, 🚵🏽, 🚵🏾, 🚵🏿, 🚵🏻‍♂️, 🚵🏼‍♂️, 🚵🏽‍♂️, 🚵🏾‍♂️, 🚵🏿‍♂️, 🚵🏻‍♀️, 🚵🏼‍♀️, 🚵🏽‍♀️, 🚵🏾‍♀️, 🚵🏿‍♀️, 🤸🏻, 🤸🏼, 🤸🏽, 🤸🏾, 🤸🏿, 🤸🏻‍♂️, 🤸🏼‍♂️, 🤸🏽‍♂️, 🤸🏾‍♂️, 🤸🏿‍♂️, 🤸🏻‍♀️, 🤸🏼‍♀️, 🤸🏽‍♀️, 🤸🏾‍♀️, 🤸🏿‍♀️, 🤽🏻, 🤽🏼, 🤽🏽, 🤽🏾, 🤽🏿, 🤽🏻‍♂️, 🤽🏼‍♂️, 🤽🏽‍♂️, 🤽🏾‍♂️, 🤽🏿‍♂️, 🤽🏻‍♀️, 🤽🏼‍♀️, 🤽🏽‍♀️, 🤽🏾‍♀️, 🤽🏿‍♀️, 🤾🏻, 🤾🏼, 🤾🏽, 🤾🏾, 🤾🏿, 🤾🏻‍♂️, 🤾🏼‍♂️, 🤾🏽‍♂️, 🤾🏾‍♂️, 🤾🏿‍♂️, 🤾🏻‍♀️, 🤾🏼‍♀️, 🤾🏽‍♀️, 🤾🏾‍♀️, 🤾🏿‍♀️, 🤹🏻, 🤹🏼, 🤹🏽, 🤹🏾, 🤹🏿, 🤹🏻‍♂️, 🤹🏼‍♂️, 🤹🏽‍♂️, 🤹🏾‍♂️, 🤹🏿‍♂️, 🤹🏻‍♀️, 🤹🏼‍♀️, 🤹🏽‍♀️, 🤹🏾‍♀️, 🤹🏿‍♀️, 🧘🏻, 🧘🏼, 🧘🏽, 🧘🏾, 🧘🏿, 🧘🏻‍♂️, 🧘🏼‍♂️, 🧘🏽‍♂️, 🧘🏾‍♂️, 🧘🏿‍♂️, 🧘🏻‍♀️, 🧘🏼‍♀️, 🧘🏽‍♀️, 🧘🏾‍♀️, 🧘🏿‍♀️, 🛀🏻, 🛀🏼, 🛀🏽, 🛀🏾, 🛀🏿, 🛌🏻, 🛌🏼, 🛌🏽, 🛌🏾, 🛌🏿, 🧑🏻‍🤝‍🧑🏻, 🧑🏻‍🤝‍🧑🏼, 🧑🏻‍🤝‍🧑🏽, 🧑🏻‍🤝‍🧑🏾, 🧑🏻‍🤝‍🧑🏿, 🧑🏼‍🤝‍🧑🏻, 🧑🏼‍🤝‍🧑🏼, 🧑🏼‍🤝‍🧑🏽, 🧑🏼‍🤝‍🧑🏾, 🧑🏼‍🤝‍🧑🏿, 🧑🏽‍🤝‍🧑🏻, 🧑🏽‍🤝‍🧑🏼, 🧑🏽‍🤝‍🧑🏽, 🧑🏽‍🤝‍🧑🏾, 🧑🏽‍🤝‍🧑🏿, 🧑🏾‍🤝‍🧑🏻, 🧑🏾‍🤝‍🧑🏼, 🧑🏾‍🤝‍🧑🏽, 🧑🏾‍🤝‍🧑🏾, 🧑🏾‍🤝‍🧑🏿, 🧑🏿‍🤝‍🧑🏻, 🧑🏿‍🤝‍🧑🏼, 🧑🏿‍🤝‍🧑🏽, 🧑🏿‍🤝‍🧑🏾, 🧑🏿‍🤝‍🧑🏿, 👭🏻, 👭🏼, 👭🏽, 👭🏾, 👭🏿, 👩🏻‍🤝‍👩🏼, 👩🏻‍🤝‍👩🏽, 👩🏻‍🤝‍👩🏾, 👩🏻‍🤝‍👩🏿, 👩🏼‍🤝‍👩🏻, 👩🏼‍🤝‍👩🏽, 👩🏼‍🤝‍👩🏾, 👩🏼‍🤝‍👩🏿, 👩🏽‍🤝‍👩🏻, 👩🏽‍🤝‍👩🏼, 👩🏽‍🤝‍👩🏾, 👩🏽‍🤝‍👩🏿, 👩🏾‍🤝‍👩🏻, 👩🏾‍🤝‍👩🏼, 👩🏾‍🤝‍👩🏽, 👩🏾‍🤝‍👩🏿, 👩🏿‍🤝‍👩🏻, 👩🏿‍🤝‍👩🏼, 👩🏿‍🤝‍👩🏽, 👩🏿‍🤝‍👩🏾, 👫🏻, 👫🏼, 👫🏽, 👫🏾, 👫🏿, 👩🏻‍🤝‍👨🏼, 👩🏻‍🤝‍👨🏽, 👩🏻‍🤝‍👨🏾, 👩🏻‍🤝‍👨🏿, 👩🏼‍🤝‍👨🏻, 👩🏼‍🤝‍👨🏽, 👩🏼‍🤝‍👨🏾, 👩🏼‍🤝‍👨🏿, 👩🏽‍🤝‍👨🏻, 👩🏽‍🤝‍👨🏼, 👩🏽‍🤝‍👨🏾, 👩🏽‍🤝‍👨🏿, 👩🏾‍🤝‍👨🏻, 👩🏾‍🤝‍👨🏼, 👩🏾‍🤝‍👨🏽, 👩🏾‍🤝‍👨🏿, 👩🏿‍🤝‍👨🏻, 👩🏿‍🤝‍👨🏼, 👩🏿‍🤝‍👨🏽, 👩🏿‍🤝‍👨🏾, 👬🏻, 👬🏼, 👬🏽, 👬🏾, 👬🏿, 👨🏻‍🤝‍👨🏼, 👨🏻‍🤝‍👨🏽, 👨🏻‍🤝‍👨🏾, 👨🏻‍🤝‍👨🏿, 👨🏼‍🤝‍👨🏻, 👨🏼‍🤝‍👨🏽, 👨🏼‍🤝‍👨🏾, 👨🏼‍🤝‍👨🏿, 👨🏽‍🤝‍👨🏻, 👨🏽‍🤝‍👨🏼, 👨🏽‍🤝‍👨🏾, 👨🏽‍🤝‍👨🏿, 👨🏾‍🤝‍👨🏻, 👨🏾‍🤝‍👨🏼, 👨🏾‍🤝‍👨🏽, 👨🏾‍🤝‍👨🏿, 👨🏿‍🤝‍👨🏻, 👨🏿‍🤝‍👨🏼, 👨🏿‍🤝‍👨🏽, 👨🏿‍🤝‍👨🏾, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"👋🏻\":[\"wave_tone1\"],\"👋🏼\":[\"wave_tone2\"],\"👋🏽\":[\"wave_tone3\"],\"👋🏾\":[\"wave_tone4\"],\"👋🏿\":[\"wave_tone5\"],\"🤚🏻\":[\"raised_backhand_tone1\"],\"🤚🏼\":[\"raised_backhand_tone2\"],\"🤚🏽\":[\"raised_backhand_tone3\"],\"🤚🏾\":[\"raised_backhand_tone4\"],\"🤚🏿\":[\"raised_backhand_tone5\"],\"🖐🏻\":[\"splayed_hand_tone1\"],\"🖐🏼\":[\"splayed_hand_tone2\"],\"🖐🏽\":[\"splayed_hand_tone3\"],\"🖐🏾\":[\"splayed_hand_tone4\"],\"🖐🏿\":[\"splayed_hand_tone5\"],\"✋🏻\":[\"raised_hand_tone1\"],\"✋🏼\":[\"raised_hand_tone2\"],\"✋🏽\":[\"raised_hand_tone3\"],\"✋🏾\":[\"raised_hand_tone4\"],\"✋🏿\":[\"raised_hand_tone5\"],\"🖖🏻\":[\"vulcan_tone1\"],\"🖖🏼\":[\"vulcan_tone2\"],\"🖖🏽\":[\"vulcan_tone3\"],\"🖖🏾\":[\"vulcan_tone4\"],\"🖖🏿\":[\"vulcan_tone5\"],\"👌🏻\":[\"ok_hand_tone1\"],\"👌🏼\":[\"ok_hand_tone2\"],\"👌🏽\":[\"ok_hand_tone3\"],\"👌🏾\":[\"ok_hand_tone4\"],\"👌🏿\":[\"ok_hand_tone5\"],\"🤌🏻\":[\"pinched_fingers_tone1\"],\"🤌🏼\":[\"pinched_fingers_tone2\"],\"🤌🏽\":[\"pinched_fingers_tone3\"],\"🤌🏾\":[\"pinched_fingers_tone4\"],\"🤌🏿\":[\"pinched_fingers_tone5\"],\"🤏🏻\":[\"pinch_tone1\"],\"🤏🏼\":[\"pinch_tone2\"],\"🤏🏽\":[\"pinch_tone3\"],\"🤏🏾\":[\"pinch_tone4\"],\"🤏🏿\":[\"pinch_tone5\"],\"✌🏻\":[\"victory_tone1\"],\"✌🏼\":[\"victory_tone2\"],\"✌🏽\":[\"victory_tone3\"],\"✌🏾\":[\"victory_tone4\"],\"✌🏿\":[\"victory_tone5\"],\"🤞🏻\":[\"fingers_crossed_tone1\"],\"🤞🏼\":[\"fingers_crossed_tone2\"],\"🤞🏽\":[\"fingers_crossed_tone3\"],\"🤞🏾\":[\"fingers_crossed_tone4\"],\"🤞🏿\":[\"fingers_crossed_tone5\"],\"🤟🏻\":[\"love_you_gesture_tone1\"],\"🤟🏼\":[\"love_you_gesture_tone2\"],\"🤟🏽\":[\"love_you_gesture_tone3\"],\"🤟🏾\":[\"love_you_gesture_tone4\"],\"🤟🏿\":[\"love_you_gesture_tone5\"],\"🤘🏻\":[\"metal_tone1\"],\"🤘🏼\":[\"metal_tone2\"],\"🤘🏽\":[\"metal_tone3\"],\"🤘🏾\":[\"metal_tone4\"],\"🤘🏿\":[\"metal_tone5\"],\"🤙🏻\":[\"call_me_tone1\"],\"🤙🏼\":[\"call_me_tone2\"],\"🤙🏽\":[\"call_me_tone3\"],\"🤙🏾\":[\"call_me_tone4\"],\"🤙🏿\":[\"call_me_tone5\"],\"👈🏻\":[\"point_left_tone1\"],\"👈🏼\":[\"point_left_tone2\"],\"👈🏽\":[\"point_left_tone3\"],\"👈🏾\":[\"point_left_tone4\"],\"👈🏿\":[\"point_left_tone5\"],\"👉🏻\":[\"point_right_tone1\"],\"👉🏼\":[\"point_right_tone2\"],\"👉🏽\":[\"point_right_tone3\"],\"👉🏾\":[\"point_right_tone4\"],\"👉🏿\":[\"point_right_tone5\"],\"👆🏻\":[\"backhand_point_up_tone1\"],\"👆🏼\":[\"backhand_point_up_tone2\"],\"👆🏽\":[\"backhand_point_up_tone3\"],\"👆🏾\":[\"backhand_point_up_tone4\"],\"👆🏿\":[\"backhand_point_up_tone5\"],\"🖕🏻\":[\"middle_finger_tone1\"],\"🖕🏼\":[\"middle_finger_tone2\"],\"🖕🏽\":[\"middle_finger_tone3\"],\"🖕🏾\":[\"middle_finger_tone4\"],\"🖕🏿\":[\"middle_finger_tone5\"],\"👇🏻\":[\"point_down_tone1\"],\"👇🏼\":[\"point_down_tone2\"],\"👇🏽\":[\"point_down_tone3\"],\"👇🏾\":[\"point_down_tone4\"],\"👇🏿\":[\"point_down_tone5\"],\"☝🏻\":[\"point_up_tone1\"],\"☝🏼\":[\"point_up_tone2\"],\"☝🏽\":[\"point_up_tone3\"],\"☝🏾\":[\"point_up_tone4\"],\"☝🏿\":[\"point_up_tone5\"],\"👍🏻\":[\"thumbsup_tone1\",\"+1_tone1\",\"yes_tone1\"],\"👍🏼\":[\"thumbsup_tone2\",\"+1_tone2\",\"yes_tone2\"],\"👍🏽\":[\"thumbsup_tone3\",\"+1_tone3\",\"yes_tone3\"],\"👍🏾\":[\"thumbsup_tone4\",\"+1_tone4\",\"yes_tone4\"],\"👍🏿\":[\"thumbsup_tone5\",\"+1_tone5\",\"yes_tone5\"],\"👎🏻\":[\"thumbsdown_tone1\",\"-1_tone1\",\"no_tone1\"],\"👎🏼\":[\"thumbsdown_tone2\",\"-1_tone2\",\"no_tone2\"],\"👎🏽\":[\"thumbsdown_tone3\",\"-1_tone3\",\"no_tone3\"],\"👎🏾\":[\"thumbsdown_tone4\",\"-1_tone4\",\"no_tone4\"],\"👎🏿\":[\"thumbsdown_tone5\",\"-1_tone5\",\"no_tone5\"],\"✊🏻\":[\"fist_tone1\"],\"✊🏼\":[\"fist_tone2\"],\"✊🏽\":[\"fist_tone3\"],\"✊🏾\":[\"fist_tone4\"],\"✊🏿\":[\"fist_tone5\"],\"👊🏻\":[\"punch_tone1\"],\"👊🏼\":[\"punch_tone2\"],\"👊🏽\":[\"punch_tone3\"],\"👊🏾\":[\"punch_tone4\"],\"👊🏿\":[\"punch_tone5\"],\"🤛🏻\":[\"left_facing_fist_tone1\"],\"🤛🏼\":[\"left_facing_fist_tone2\"],\"🤛🏽\":[\"left_facing_fist_tone3\"],\"🤛🏾\":[\"left_facing_fist_tone4\"],\"🤛🏿\":[\"left_facing_fist_tone5\"],\"🤜🏻\":[\"right_facing_fist_tone1\"],\"🤜🏼\":[\"right_facing_fist_tone2\"],\"🤜🏽\":[\"right_facing_fist_tone3\"],\"🤜🏾\":[\"right_facing_fist_tone4\"],\"🤜🏿\":[\"right_facing_fist_tone5\"],\"👏🏻\":[\"clap_tone1\"],\"👏🏼\":[\"clap_tone2\"],\"👏🏽\":[\"clap_tone3\"],\"👏🏾\":[\"clap_tone4\"],\"👏🏿\":[\"clap_tone5\"],\"🙌🏻\":[\"raised_hands_tone1\"],\"🙌🏼\":[\"raised_hands_tone2\"],\"🙌🏽\":[\"raised_hands_tone3\"],\"🙌🏾\":[\"raised_hands_tone4\"],\"🙌🏿\":[\"raised_hands_tone5\"],\"👐🏻\":[\"open_hands_tone1\"],\"👐🏼\":[\"open_hands_tone2\"],\"👐🏽\":[\"open_hands_tone3\"],\"👐🏾\":[\"open_hands_tone4\"],\"👐🏿\":[\"open_hands_tone5\"],\"🤲🏻\":[\"palms_up_tone1\"],\"🤲🏼\":[\"palms_up_tone2\"],\"🤲🏽\":[\"palms_up_tone3\"],\"🤲🏾\":[\"palms_up_tone4\"],\"🤲🏿\":[\"palms_up_tone5\"],\"🙏🏻\":[\"pray_tone1\"],\"🙏🏼\":[\"pray_tone2\"],\"🙏🏽\":[\"pray_tone3\"],\"🙏🏾\":[\"pray_tone4\"],\"🙏🏿\":[\"pray_tone5\"],\"✍🏻\":[\"writing_hand_tone1\"],\"✍🏼\":[\"writing_hand_tone2\"],\"✍🏽\":[\"writing_hand_tone3\"],\"✍🏾\":[\"writing_hand_tone4\"],\"✍🏿\":[\"writing_hand_tone5\"],\"💅🏻\":[\"nail_care_tone1\"],\"💅🏼\":[\"nail_care_tone2\"],\"💅🏽\":[\"nail_care_tone3\"],\"💅🏾\":[\"nail_care_tone4\"],\"💅🏿\":[\"nail_care_tone5\"],\"🤳🏻\":[\"selfie_tone1\"],\"🤳🏼\":[\"selfie_tone2\"],\"🤳🏽\":[\"selfie_tone3\"],\"🤳🏾\":[\"selfie_tone4\"],\"🤳🏿\":[\"selfie_tone5\"],\"💪🏻\":[\"muscle_tone1\",\"right_bicep_tone1\"],\"💪🏼\":[\"muscle_tone2\",\"right_bicep_tone2\"],\"💪🏽\":[\"muscle_tone3\",\"right_bicep_tone3\"],\"💪🏾\":[\"muscle_tone4\",\"right_bicep_tone4\"],\"💪🏿\":[\"muscle_tone5\",\"right_bicep_tone5\"],\"🦵🏻\":[\"leg_tone1\"],\"🦵🏼\":[\"leg_tone2\"],\"🦵🏽\":[\"leg_tone3\"],\"🦵🏾\":[\"leg_tone4\"],\"🦵🏿\":[\"leg_tone5\"],\"🦶🏻\":[\"foot_tone1\"],\"🦶🏼\":[\"foot_tone2\"],\"🦶🏽\":[\"foot_tone3\"],\"🦶🏾\":[\"foot_tone4\"],\"🦶🏿\":[\"foot_tone5\"],\"👂🏻\":[\"ear_tone1\"],\"👂🏼\":[\"ear_tone2\"],\"👂🏽\":[\"ear_tone3\"],\"👂🏾\":[\"ear_tone4\"],\"👂🏿\":[\"ear_tone5\"],\"🦻🏻\":[\"hearing_aid_tone1\"],\"🦻🏼\":[\"hearing_aid_tone2\"],\"🦻🏽\":[\"hearing_aid_tone3\"],\"🦻🏾\":[\"hearing_aid_tone4\"],\"🦻🏿\":[\"hearing_aid_tone5\"],\"👃🏻\":[\"nose_tone1\"],\"👃🏼\":[\"nose_tone2\"],\"👃🏽\":[\"nose_tone3\"],\"👃🏾\":[\"nose_tone4\"],\"👃🏿\":[\"nose_tone5\"],\"👶🏻\":[\"baby_tone1\"],\"👶🏼\":[\"baby_tone2\"],\"👶🏽\":[\"baby_tone3\"],\"👶🏾\":[\"baby_tone4\"],\"👶🏿\":[\"baby_tone5\"],\"🧒🏻\":[\"child_tone1\"],\"🧒🏼\":[\"child_tone2\"],\"🧒🏽\":[\"child_tone3\"],\"🧒🏾\":[\"child_tone4\"],\"🧒🏿\":[\"child_tone5\"],\"👦🏻\":[\"boy_tone1\"],\"👦🏼\":[\"boy_tone2\"],\"👦🏽\":[\"boy_tone3\"],\"👦🏾\":[\"boy_tone4\"],\"👦🏿\":[\"boy_tone5\"],\"👧🏻\":[\"girl_tone1\"],\"👧🏼\":[\"girl_tone2\"],\"👧🏽\":[\"girl_tone3\"],\"👧🏾\":[\"girl_tone4\"],\"👧🏿\":[\"girl_tone5\"],\"🧑🏻\":[\"adult_tone1\"],\"🧑🏼\":[\"adult_tone2\"],\"🧑🏽\":[\"adult_tone3\"],\"🧑🏾\":[\"adult_tone4\"],\"🧑🏿\":[\"adult_tone5\"],\"👱🏻\":[\"blond_person_tone1\"],\"👱🏼\":[\"blond_person_tone2\"],\"👱🏽\":[\"blond_person_tone3\"],\"👱🏾\":[\"blond_person_tone4\"],\"👱🏿\":[\"blond_person_tone5\"],\"👨🏻\":[\"man_tone1\"],\"👨🏼\":[\"man_tone2\"],\"👨🏽\":[\"man_tone3\"],\"👨🏾\":[\"man_tone4\"],\"👨🏿\":[\"man_tone5\"],\"🧔🏻\":[\"bearded_person_tone1\"],\"🧔🏼\":[\"bearded_person_tone2\"],\"🧔🏽\":[\"bearded_person_tone3\"],\"🧔🏾\":[\"bearded_person_tone4\"],\"🧔🏿\":[\"bearded_person_tone5\"],\"👨🏻‍🦰\":[\"red_haired_man_tone1\"],\"👨🏼‍🦰\":[\"red_haired_man_tone2\"],\"👨🏽‍🦰\":[\"red_haired_man_tone3\"],\"👨🏾‍🦰\":[\"red_haired_man_tone4\"],\"👨🏿‍🦰\":[\"red_haired_man_tone5\"],\"👨🏻‍🦱\":[\"curly_haired_man_tone1\"],\"👨🏼‍🦱\":[\"curly_haired_man_tone2\"],\"👨🏽‍🦱\":[\"curly_haired_man_tone3\"],\"👨🏾‍🦱\":[\"curly_haired_man_tone4\"],\"👨🏿‍🦱\":[\"curly_haired_man_tone5\"],\"👨🏻‍🦳\":[\"white_haired_man_tone1\"],\"👨🏼‍🦳\":[\"white_haired_man_tone2\"],\"👨🏽‍🦳\":[\"white_haired_man_tone3\"],\"👨🏾‍🦳\":[\"white_haired_man_tone4\"],\"👨🏿‍🦳\":[\"white_haired_man_tone5\"],\"👨🏻‍🦲\":[\"bald_man_tone1\"],\"👨🏼‍🦲\":[\"bald_man_tone2\"],\"👨🏽‍🦲\":[\"bald_man_tone3\"],\"👨🏾‍🦲\":[\"bald_man_tone4\"],\"👨🏿‍🦲\":[\"bald_man_tone5\"],\"👩🏻\":[\"woman_tone1\"],\"👩🏼\":[\"woman_tone2\"],\"👩🏽\":[\"woman_tone3\"],\"👩🏾\":[\"woman_tone4\"],\"👩🏿\":[\"woman_tone5\"],\"👩🏻‍🦰\":[\"red_haired_woman_tone1\"],\"👩🏼‍🦰\":[\"red_haired_woman_tone2\"],\"👩🏽‍🦰\":[\"red_haired_woman_tone3\"],\"👩🏾‍🦰\":[\"red_haired_woman_tone4\"],\"👩🏿‍🦰\":[\"red_haired_woman_tone5\"],\"🧑🏻‍🦰\":[\"red_haired_person_tone1\"],\"🧑🏼‍🦰\":[\"red_haired_person_tone2\"],\"🧑🏽‍🦰\":[\"red_haired_person_tone3\"],\"🧑🏾‍🦰\":[\"red_haired_person_tone4\"],\"🧑🏿‍🦰\":[\"red_haired_person_tone5\"],\"👩🏻‍🦱\":[\"curly_haired_woman_tone1\"],\"👩🏼‍🦱\":[\"curly_haired_woman_tone2\"],\"👩🏽‍🦱\":[\"curly_haired_woman_tone3\"],\"👩🏾‍🦱\":[\"curly_haired_woman_tone4\"],\"👩🏿‍🦱\":[\"curly_haired_woman_tone5\"],\"🧑🏻‍🦱\":[\"curly_haired_person_tone1\"],\"🧑🏼‍🦱\":[\"curly_haired_person_tone2\"],\"🧑🏽‍🦱\":[\"curly_haired_person_tone3\"],\"🧑🏾‍🦱\":[\"curly_haired_person_tone4\"],\"🧑🏿‍🦱\":[\"curly_haired_person_tone5\"],\"👩🏻‍🦳\":[\"white_haired_woman_tone1\"],\"👩🏼‍🦳\":[\"white_haired_woman_tone2\"],\"👩🏽‍🦳\":[\"white_haired_woman_tone3\"],\"👩🏾‍🦳\":[\"white_haired_woman_tone4\"],\"👩🏿‍🦳\":[\"white_haired_woman_tone5\"],\"🧑🏻‍🦳\":[\"white_haired_person_tone1\"],\"🧑🏼‍🦳\":[\"white_haired_person_tone2\"],\"🧑🏽‍🦳\":[\"white_haired_person_tone3\"],\"🧑🏾‍🦳\":[\"white_haired_person_tone4\"],\"🧑🏿‍🦳\":[\"white_haired_person_tone5\"],\"👩🏻‍🦲\":[\"bald_woman_tone1\"],\"👩🏼‍🦲\":[\"bald_woman_tone2\"],\"👩🏽‍🦲\":[\"bald_woman_tone3\"],\"👩🏾‍🦲\":[\"bald_woman_tone4\"],\"👩🏿‍🦲\":[\"bald_woman_tone5\"],\"🧑🏻‍🦲\":[\"bald_person_tone1\"],\"🧑🏼‍🦲\":[\"bald_person_tone2\"],\"🧑🏽‍🦲\":[\"bald_person_tone3\"],\"🧑🏾‍🦲\":[\"bald_person_tone4\"],\"🧑🏿‍🦲\":[\"bald_person_tone5\"],\"👱🏻‍♀️\":[\"blond_woman_tone1\"],\"👱🏼‍♀️\":[\"blond_woman_tone2\"],\"👱🏽‍♀️\":[\"blond_woman_tone3\"],\"👱🏾‍♀️\":[\"blond_woman_tone4\"],\"👱🏿‍♀️\":[\"blond_woman_tone5\"],\"👱🏻‍♂️\":[\"blond_man_tone1\"],\"👱🏼‍♂️\":[\"blond_man_tone2\"],\"👱🏽‍♂️\":[\"blond_man_tone3\"],\"👱🏾‍♂️\":[\"blond_man_tone4\"],\"👱🏿‍♂️\":[\"blond_man_tone5\"],\"🧓🏻\":[\"older_adult_tone1\"],\"🧓🏼\":[\"older_adult_tone2\"],\"🧓🏽\":[\"older_adult_tone3\"],\"🧓🏾\":[\"older_adult_tone4\"],\"🧓🏿\":[\"older_adult_tone5\"],\"👴🏻\":[\"older_man_tone1\"],\"👴🏼\":[\"older_man_tone2\"],\"👴🏽\":[\"older_man_tone3\"],\"👴🏾\":[\"older_man_tone4\"],\"👴🏿\":[\"older_man_tone5\"],\"👵🏻\":[\"older_woman_tone1\"],\"👵🏼\":[\"older_woman_tone2\"],\"👵🏽\":[\"older_woman_tone3\"],\"👵🏾\":[\"older_woman_tone4\"],\"👵🏿\":[\"older_woman_tone5\"],\"🙍🏻\":[\"person_frowning_tone1\"],\"🙍🏼\":[\"person_frowning_tone2\"],\"🙍🏽\":[\"person_frowning_tone3\"],\"🙍🏾\":[\"person_frowning_tone4\"],\"🙍🏿\":[\"person_frowning_tone5\"],\"🙍🏻‍♂️\":[\"man_frowning_tone1\"],\"🙍🏼‍♂️\":[\"man_frowning_tone2\"],\"🙍🏽‍♂️\":[\"man_frowning_tone3\"],\"🙍🏾‍♂️\":[\"man_frowning_tone4\"],\"🙍🏿‍♂️\":[\"man_frowning_tone5\"],\"🙍🏻‍♀️\":[\"woman_frowning_tone1\"],\"🙍🏼‍♀️\":[\"woman_frowning_tone2\"],\"🙍🏽‍♀️\":[\"woman_frowning_tone3\"],\"🙍🏾‍♀️\":[\"woman_frowning_tone4\"],\"🙍🏿‍♀️\":[\"woman_frowning_tone5\"],\"🙎🏻\":[\"person_pouting_tone1\"],\"🙎🏼\":[\"person_pouting_tone2\"],\"🙎🏽\":[\"person_pouting_tone3\"],\"🙎🏾\":[\"person_pouting_tone4\"],\"🙎🏿\":[\"person_pouting_tone5\"],\"🙎🏻‍♂️\":[\"man_pouting_tone1\"],\"🙎🏼‍♂️\":[\"man_pouting_tone2\"],\"🙎🏽‍♂️\":[\"man_pouting_tone3\"],\"🙎🏾‍♂️\":[\"man_pouting_tone4\"],\"🙎🏿‍♂️\":[\"man_pouting_tone5\"],\"🙎🏻‍♀️\":[\"woman_pouting_tone1\"],\"🙎🏼‍♀️\":[\"woman_pouting_tone2\"],\"🙎🏽‍♀️\":[\"woman_pouting_tone3\"],\"🙎🏾‍♀️\":[\"woman_pouting_tone4\"],\"🙎🏿‍♀️\":[\"woman_pouting_tone5\"],\"🙅🏻\":[\"person_gesturing_no_tone1\"],\"🙅🏼\":[\"person_gesturing_no_tone2\"],\"🙅🏽\":[\"person_gesturing_no_tone3\"],\"🙅🏾\":[\"person_gesturing_no_tone4\"],\"🙅🏿\":[\"person_gesturing_no_tone5\"],\"🙅🏻‍♂️\":[\"man_gesturing_no_tone1\"],\"🙅🏼‍♂️\":[\"man_gesturing_no_tone2\"],\"🙅🏽‍♂️\":[\"man_gesturing_no_tone3\"],\"🙅🏾‍♂️\":[\"man_gesturing_no_tone4\"],\"🙅🏿‍♂️\":[\"man_gesturing_no_tone5\"],\"🙅🏻‍♀️\":[\"woman_gesturing_no_tone1\"],\"🙅🏼‍♀️\":[\"woman_gesturing_no_tone2\"],\"🙅🏽‍♀️\":[\"woman_gesturing_no_tone3\"],\"🙅🏾‍♀️\":[\"woman_gesturing_no_tone4\"],\"🙅🏿‍♀️\":[\"woman_gesturing_no_tone5\"],\"🙆🏻\":[\"person_gesturing_ok_tone1\"],\"🙆🏼\":[\"person_gesturing_ok_tone2\"],\"🙆🏽\":[\"person_gesturing_ok_tone3\"],\"🙆🏾\":[\"person_gesturing_ok_tone4\"],\"🙆🏿\":[\"person_gesturing_ok_tone5\"],\"🙆🏻‍♂️\":[\"man_gesturing_ok_tone1\"],\"🙆🏼‍♂️\":[\"man_gesturing_ok_tone2\"],\"🙆🏽‍♂️\":[\"man_gesturing_ok_tone3\"],\"🙆🏾‍♂️\":[\"man_gesturing_ok_tone4\"],\"🙆🏿‍♂️\":[\"man_gesturing_ok_tone5\"],\"🙆🏻‍♀️\":[\"woman_gesturing_ok_tone1\"],\"🙆🏼‍♀️\":[\"woman_gesturing_ok_tone2\"],\"🙆🏽‍♀️\":[\"woman_gesturing_ok_tone3\"],\"🙆🏾‍♀️\":[\"woman_gesturing_ok_tone4\"],\"🙆🏿‍♀️\":[\"woman_gesturing_ok_tone5\"],\"💁🏻\":[\"person_tipping_hand_tone1\"],\"💁🏼\":[\"person_tipping_hand_tone2\"],\"💁🏽\":[\"person_tipping_hand_tone3\"],\"💁🏾\":[\"person_tipping_hand_tone4\"],\"💁🏿\":[\"person_tipping_hand_tone5\"],\"💁🏻‍♂️\":[\"man_tipping_hand_tone1\"],\"💁🏼‍♂️\":[\"man_tipping_hand_tone2\"],\"💁🏽‍♂️\":[\"man_tipping_hand_tone3\"],\"💁🏾‍♂️\":[\"man_tipping_hand_tone4\"],\"💁🏿‍♂️\":[\"man_tipping_hand_tone5\"],\"💁🏻‍♀️\":[\"woman_tipping_hand_tone1\"],\"💁🏼‍♀️\":[\"woman_tipping_hand_tone2\"],\"💁🏽‍♀️\":[\"woman_tipping_hand_tone3\"],\"💁🏾‍♀️\":[\"woman_tipping_hand_tone4\"],\"💁🏿‍♀️\":[\"woman_tipping_hand_tone5\"],\"🙋🏻\":[\"person_raising_hand_tone1\"],\"🙋🏼\":[\"person_raising_hand_tone2\"],\"🙋🏽\":[\"person_raising_hand_tone3\"],\"🙋🏾\":[\"person_raising_hand_tone4\"],\"🙋🏿\":[\"person_raising_hand_tone5\"],\"🙋🏻‍♂️\":[\"man_raising_hand_tone1\"],\"🙋🏼‍♂️\":[\"man_raising_hand_tone2\"],\"🙋🏽‍♂️\":[\"man_raising_hand_tone3\"],\"🙋🏾‍♂️\":[\"man_raising_hand_tone4\"],\"🙋🏿‍♂️\":[\"man_raising_hand_tone5\"],\"🙋🏻‍♀️\":[\"woman_raising_hand_tone1\"],\"🙋🏼‍♀️\":[\"woman_raising_hand_tone2\"],\"🙋🏽‍♀️\":[\"woman_raising_hand_tone3\"],\"🙋🏾‍♀️\":[\"woman_raising_hand_tone4\"],\"🙋🏿‍♀️\":[\"woman_raising_hand_tone5\"],\"🧏🏻\":[\"person_deaf_tone1\"],\"🧏🏼\":[\"person_deaf_tone2\"],\"🧏🏽\":[\"person_deaf_tone3\"],\"🧏🏾\":[\"person_deaf_tone4\"],\"🧏🏿\":[\"person_deaf_tone5\"],\"🧏🏻‍♂️\":[\"man_deaf_tone1\"],\"🧏🏼‍♂️\":[\"man_deaf_tone2\"],\"🧏🏽‍♂️\":[\"man_deaf_tone3\"],\"🧏🏾‍♂️\":[\"man_deaf_tone4\"],\"🧏🏿‍♂️\":[\"man_deaf_tone5\"],\"🧏🏻‍♀️\":[\"woman_deaf_tone1\"],\"🧏🏼‍♀️\":[\"woman_deaf_tone2\"],\"🧏🏽‍♀️\":[\"woman_deaf_tone3\"],\"🧏🏾‍♀️\":[\"woman_deaf_tone4\"],\"🧏🏿‍♀️\":[\"woman_deaf_tone5\"],\"🙇🏻\":[\"person_bowing_tone1\"],\"🙇🏼\":[\"person_bowing_tone2\"],\"🙇🏽\":[\"person_bowing_tone3\"],\"🙇🏾\":[\"person_bowing_tone4\"],\"🙇🏿\":[\"person_bowing_tone5\"],\"🙇🏻‍♂️\":[\"man_bowing_tone1\"],\"🙇🏼‍♂️\":[\"man_bowing_tone2\"],\"🙇🏽‍♂️\":[\"man_bowing_tone3\"],\"🙇🏾‍♂️\":[\"man_bowing_tone4\"],\"🙇🏿‍♂️\":[\"man_bowing_tone5\"],\"🙇🏻‍♀️\":[\"woman_bowing_tone1\"],\"🙇🏼‍♀️\":[\"woman_bowing_tone2\"],\"🙇🏽‍♀️\":[\"woman_bowing_tone3\"],\"🙇🏾‍♀️\":[\"woman_bowing_tone4\"],\"🙇🏿‍♀️\":[\"woman_bowing_tone5\"],\"🤦🏻\":[\"person_facepalming_tone1\"],\"🤦🏼\":[\"person_facepalming_tone2\"],\"🤦🏽\":[\"person_facepalming_tone3\"],\"🤦🏾\":[\"person_facepalming_tone4\"],\"🤦🏿\":[\"person_facepalming_tone5\"],\"🤦🏻‍♂️\":[\"man_facepalming_tone1\"],\"🤦🏼‍♂️\":[\"man_facepalming_tone2\"],\"🤦🏽‍♂️\":[\"man_facepalming_tone3\"],\"🤦🏾‍♂️\":[\"man_facepalming_tone4\"],\"🤦🏿‍♂️\":[\"man_facepalming_tone5\"],\"🤦🏻‍♀️\":[\"woman_facepalming_tone1\"],\"🤦🏼‍♀️\":[\"woman_facepalming_tone2\"],\"🤦🏽‍♀️\":[\"woman_facepalming_tone3\"],\"🤦🏾‍♀️\":[\"woman_facepalming_tone4\"],\"🤦🏿‍♀️\":[\"woman_facepalming_tone5\"],\"🤷🏻\":[\"person_shrugging_tone1\"],\"🤷🏼\":[\"person_shrugging_tone2\"],\"🤷🏽\":[\"person_shrugging_tone3\"],\"🤷🏾\":[\"person_shrugging_tone4\"],\"🤷🏿\":[\"person_shrugging_tone5\"],\"🤷🏻‍♂️\":[\"man_shrugging_tone1\"],\"🤷🏼‍♂️\":[\"man_shrugging_tone2\"],\"🤷🏽‍♂️\":[\"man_shrugging_tone3\"],\"🤷🏾‍♂️\":[\"man_shrugging_tone4\"],\"🤷🏿‍♂️\":[\"man_shrugging_tone5\"],\"🤷🏻‍♀️\":[\"woman_shrugging_tone1\"],\"🤷🏼‍♀️\":[\"woman_shrugging_tone2\"],\"🤷🏽‍♀️\":[\"woman_shrugging_tone3\"],\"🤷🏾‍♀️\":[\"woman_shrugging_tone4\"],\"🤷🏿‍♀️\":[\"woman_shrugging_tone5\"],\"🧑🏻‍⚕️\":[\"person_health_worker_tone1\"],\"🧑🏼‍⚕️\":[\"person_health_worker_tone2\"],\"🧑🏽‍⚕️\":[\"person_health_worker_tone3\"],\"🧑🏾‍⚕️\":[\"person_health_worker_tone4\"],\"🧑🏿‍⚕️\":[\"person_health_worker_tone5\"],\"👨🏻‍⚕️\":[\"man_health_worker_tone1\"],\"👨🏼‍⚕️\":[\"man_health_worker_tone2\"],\"👨🏽‍⚕️\":[\"man_health_worker_tone3\"],\"👨🏾‍⚕️\":[\"man_health_worker_tone4\"],\"👨🏿‍⚕️\":[\"man_health_worker_tone5\"],\"👩🏻‍⚕️\":[\"woman_health_worker_tone1\"],\"👩🏼‍⚕️\":[\"woman_health_worker_tone2\"],\"👩🏽‍⚕️\":[\"woman_health_worker_tone3\"],\"👩🏾‍⚕️\":[\"woman_health_worker_tone4\"],\"👩🏿‍⚕️\":[\"woman_health_worker_tone5\"],\"🧑🏻‍🎓\":[\"person_student_tone1\"],\"🧑🏼‍🎓\":[\"person_student_tone2\"],\"🧑🏽‍🎓\":[\"person_student_tone3\"],\"🧑🏾‍🎓\":[\"person_student_tone4\"],\"🧑🏿‍🎓\":[\"person_student_tone5\"],\"👨🏻‍🎓\":[\"man_student_tone1\"],\"👨🏼‍🎓\":[\"man_student_tone2\"],\"👨🏽‍🎓\":[\"man_student_tone3\"],\"👨🏾‍🎓\":[\"man_student_tone4\"],\"👨🏿‍🎓\":[\"man_student_tone5\"],\"👩🏻‍🎓\":[\"woman_student_tone1\"],\"👩🏼‍🎓\":[\"woman_student_tone2\"],\"👩🏽‍🎓\":[\"woman_student_tone3\"],\"👩🏾‍🎓\":[\"woman_student_tone4\"],\"👩🏿‍🎓\":[\"woman_student_tone5\"],\"🧑🏻‍🏫\":[\"person_teacher_tone1\"],\"🧑🏼‍🏫\":[\"person_teacher_tone2\"],\"🧑🏽‍🏫\":[\"person_teacher_tone3\"],\"🧑🏾‍🏫\":[\"person_teacher_tone4\"],\"🧑🏿‍🏫\":[\"person_teacher_tone5\"],\"👨🏻‍🏫\":[\"man_teacher_tone1\"],\"👨🏼‍🏫\":[\"man_teacher_tone2\"],\"👨🏽‍🏫\":[\"man_teacher_tone3\"],\"👨🏾‍🏫\":[\"man_teacher_tone4\"],\"👨🏿‍🏫\":[\"man_teacher_tone5\"],\"👩🏻‍🏫\":[\"woman_teacher_tone1\"],\"👩🏼‍🏫\":[\"woman_teacher_tone2\"],\"👩🏽‍🏫\":[\"woman_teacher_tone3\"],\"👩🏾‍🏫\":[\"woman_teacher_tone4\"],\"👩🏿‍🏫\":[\"woman_teacher_tone5\"],\"🧑🏻‍⚖️\":[\"person_judge_tone1\"],\"🧑🏼‍⚖️\":[\"person_judge_tone2\"],\"🧑🏽‍⚖️\":[\"person_judge_tone3\"],\"🧑🏾‍⚖️\":[\"person_judge_tone4\"],\"🧑🏿‍⚖️\":[\"person_judge_tone5\"],\"👨🏻‍⚖️\":[\"man_judge_tone1\"],\"👨🏼‍⚖️\":[\"man_judge_tone2\"],\"👨🏽‍⚖️\":[\"man_judge_tone3\"],\"👨🏾‍⚖️\":[\"man_judge_tone4\"],\"👨🏿‍⚖️\":[\"man_judge_tone5\"],\"👩🏻‍⚖️\":[\"woman_judge_tone1\"],\"👩🏼‍⚖️\":[\"woman_judge_tone2\"],\"👩🏽‍⚖️\":[\"woman_judge_tone3\"],\"👩🏾‍⚖️\":[\"woman_judge_tone4\"],\"👩🏿‍⚖️\":[\"woman_judge_tone5\"],\"🧑🏻‍🌾\":[\"person_farmer_tone1\"],\"🧑🏼‍🌾\":[\"person_farmer_tone2\"],\"🧑🏽‍🌾\":[\"person_farmer_tone3\"],\"🧑🏾‍🌾\":[\"person_farmer_tone4\"],\"🧑🏿‍🌾\":[\"person_farmer_tone5\"],\"👨🏻‍🌾\":[\"man_farmer_tone1\"],\"👨🏼‍🌾\":[\"man_farmer_tone2\"],\"👨🏽‍🌾\":[\"man_farmer_tone3\"],\"👨🏾‍🌾\":[\"man_farmer_tone4\"],\"👨🏿‍🌾\":[\"man_farmer_tone5\"],\"👩🏻‍🌾\":[\"woman_farmer_tone1\"],\"👩🏼‍🌾\":[\"woman_farmer_tone2\"],\"👩🏽‍🌾\":[\"woman_farmer_tone3\"],\"👩🏾‍🌾\":[\"woman_farmer_tone4\"],\"👩🏿‍🌾\":[\"woman_farmer_tone5\"],\"🧑🏻‍🍳\":[\"person_cook_tone1\"],\"🧑🏼‍🍳\":[\"person_cook_tone2\"],\"🧑🏽‍🍳\":[\"person_cook_tone3\"],\"🧑🏾‍🍳\":[\"person_cook_tone4\"],\"🧑🏿‍🍳\":[\"person_cook_tone5\"],\"👨🏻‍🍳\":[\"man_cook_tone1\"],\"👨🏼‍🍳\":[\"man_cook_tone2\"],\"👨🏽‍🍳\":[\"man_cook_tone3\"],\"👨🏾‍🍳\":[\"man_cook_tone4\"],\"👨🏿‍🍳\":[\"man_cook_tone5\"],\"👩🏻‍🍳\":[\"woman_cook_tone1\"],\"👩🏼‍🍳\":[\"woman_cook_tone2\"],\"👩🏽‍🍳\":[\"woman_cook_tone3\"],\"👩🏾‍🍳\":[\"woman_cook_tone4\"],\"👩🏿‍🍳\":[\"woman_cook_tone5\"],\"🧑🏻‍🔧\":[\"person_mechanic_tone1\"],\"🧑🏼‍🔧\":[\"person_mechanic_tone2\"],\"🧑🏽‍🔧\":[\"person_mechanic_tone3\"],\"🧑🏾‍🔧\":[\"person_mechanic_tone4\"],\"🧑🏿‍🔧\":[\"person_mechanic_tone5\"],\"👨🏻‍🔧\":[\"man_mechanic_tone1\"],\"👨🏼‍🔧\":[\"man_mechanic_tone2\"],\"👨🏽‍🔧\":[\"man_mechanic_tone3\"],\"👨🏾‍🔧\":[\"man_mechanic_tone4\"],\"👨🏿‍🔧\":[\"man_mechanic_tone5\"],\"👩🏻‍🔧\":[\"woman_mechanic_tone1\"],\"👩🏼‍🔧\":[\"woman_mechanic_tone2\"],\"👩🏽‍🔧\":[\"woman_mechanic_tone3\"],\"👩🏾‍🔧\":[\"woman_mechanic_tone4\"],\"👩🏿‍🔧\":[\"woman_mechanic_tone5\"],\"🧑🏻‍🏭\":[\"person_factory_worker_tone1\"],\"🧑🏼‍🏭\":[\"person_factory_worker_tone2\"],\"🧑🏽‍🏭\":[\"person_factory_worker_tone3\"],\"🧑🏾‍🏭\":[\"person_factory_worker_tone4\"],\"🧑🏿‍🏭\":[\"person_factory_worker_tone5\"],\"👨🏻‍🏭\":[\"man_factory_worker_tone1\"],\"👨🏼‍🏭\":[\"man_factory_worker_tone2\"],\"👨🏽‍🏭\":[\"man_factory_worker_tone3\"],\"👨🏾‍🏭\":[\"man_factory_worker_tone4\"],\"👨🏿‍🏭\":[\"man_factory_worker_tone5\"],\"👩🏻‍🏭\":[\"woman_factory_worker_tone1\"],\"👩🏼‍🏭\":[\"woman_factory_worker_tone2\"],\"👩🏽‍🏭\":[\"woman_factory_worker_tone3\"],\"👩🏾‍🏭\":[\"woman_factory_worker_tone4\"],\"👩🏿‍🏭\":[\"woman_factory_worker_tone5\"],\"🧑🏻‍💼\":[\"person_office_worker_tone1\"],\"🧑🏼‍💼\":[\"person_office_worker_tone2\"],\"🧑🏽‍💼\":[\"person_office_worker_tone3\"],\"🧑🏾‍💼\":[\"person_office_worker_tone4\"],\"🧑🏿‍💼\":[\"person_office_worker_tone5\"],\"👨🏻‍💼\":[\"man_office_worker_tone1\"],\"👨🏼‍💼\":[\"man_office_worker_tone2\"],\"👨🏽‍💼\":[\"man_office_worker_tone3\"],\"👨🏾‍💼\":[\"man_office_worker_tone4\"],\"👨🏿‍💼\":[\"man_office_worker_tone5\"],\"👩🏻‍💼\":[\"woman_office_worker_tone1\"],\"👩🏼‍💼\":[\"woman_office_worker_tone2\"],\"👩🏽‍💼\":[\"woman_office_worker_tone3\"],\"👩🏾‍💼\":[\"woman_office_worker_tone4\"],\"👩🏿‍💼\":[\"woman_office_worker_tone5\"],\"🧑🏻‍🔬\":[\"person_scientist_tone1\"],\"🧑🏼‍🔬\":[\"person_scientist_tone2\"],\"🧑🏽‍🔬\":[\"person_scientist_tone3\"],\"🧑🏾‍🔬\":[\"person_scientist_tone4\"],\"🧑🏿‍🔬\":[\"person_scientist_tone5\"],\"👨🏻‍🔬\":[\"man_scientist_tone1\"],\"👨🏼‍🔬\":[\"man_scientist_tone2\"],\"👨🏽‍🔬\":[\"man_scientist_tone3\"],\"👨🏾‍🔬\":[\"man_scientist_tone4\"],\"👨🏿‍🔬\":[\"man_scientist_tone5\"],\"👩🏻‍🔬\":[\"woman_scientist_tone1\"],\"👩🏼‍🔬\":[\"woman_scientist_tone2\"],\"👩🏽‍🔬\":[\"woman_scientist_tone3\"],\"👩🏾‍🔬\":[\"woman_scientist_tone4\"],\"👩🏿‍🔬\":[\"woman_scientist_tone5\"],\"🧑🏻‍💻\":[\"person_technologist_tone1\"],\"🧑🏼‍💻\":[\"person_technologist_tone2\"],\"🧑🏽‍💻\":[\"person_technologist_tone3\"],\"🧑🏾‍💻\":[\"person_technologist_tone4\"],\"🧑🏿‍💻\":[\"person_technologist_tone5\"],\"👨🏻‍💻\":[\"man_technologist_tone1\"],\"👨🏼‍💻\":[\"man_technologist_tone2\"],\"👨🏽‍💻\":[\"man_technologist_tone3\"],\"👨🏾‍💻\":[\"man_technologist_tone4\"],\"👨🏿‍💻\":[\"man_technologist_tone5\"],\"👩🏻‍💻\":[\"woman_technologist_tone1\"],\"👩🏼‍💻\":[\"woman_technologist_tone2\"],\"👩🏽‍💻\":[\"woman_technologist_tone3\"],\"👩🏾‍💻\":[\"woman_technologist_tone4\"],\"👩🏿‍💻\":[\"woman_technologist_tone5\"],\"🧑🏻‍🎤\":[\"person_singer_tone1\"],\"🧑🏼‍🎤\":[\"person_singer_tone2\"],\"🧑🏽‍🎤\":[\"person_singer_tone3\"],\"🧑🏾‍🎤\":[\"person_singer_tone4\"],\"🧑🏿‍🎤\":[\"person_singer_tone5\"],\"👨🏻‍🎤\":[\"man_singer_tone1\"],\"👨🏼‍🎤\":[\"man_singer_tone2\"],\"👨🏽‍🎤\":[\"man_singer_tone3\"],\"👨🏾‍🎤\":[\"man_singer_tone4\"],\"👨🏿‍🎤\":[\"man_singer_tone5\"],\"👩🏻‍🎤\":[\"woman_singer_tone1\"],\"👩🏼‍🎤\":[\"woman_singer_tone2\"],\"👩🏽‍🎤\":[\"woman_singer_tone3\"],\"👩🏾‍🎤\":[\"woman_singer_tone4\"],\"👩🏿‍🎤\":[\"woman_singer_tone5\"],\"🧑🏻‍🎨\":[\"person_artist_tone1\"],\"🧑🏼‍🎨\":[\"person_artist_tone2\"],\"🧑🏽‍🎨\":[\"person_artist_tone3\"],\"🧑🏾‍🎨\":[\"person_artist_tone4\"],\"🧑🏿‍🎨\":[\"person_artist_tone5\"],\"👨🏻‍🎨\":[\"man_artist_tone1\"],\"👨🏼‍🎨\":[\"man_artist_tone2\"],\"👨🏽‍🎨\":[\"man_artist_tone3\"],\"👨🏾‍🎨\":[\"man_artist_tone4\"],\"👨🏿‍🎨\":[\"man_artist_tone5\"],\"👩🏻‍🎨\":[\"woman_artist_tone1\"],\"👩🏼‍🎨\":[\"woman_artist_tone2\"],\"👩🏽‍🎨\":[\"woman_artist_tone3\"],\"👩🏾‍🎨\":[\"woman_artist_tone4\"],\"👩🏿‍🎨\":[\"woman_artist_tone5\"],\"🧑🏻‍✈️\":[\"person_pilot_tone1\"],\"🧑🏼‍✈️\":[\"person_pilot_tone2\"],\"🧑🏽‍✈️\":[\"person_pilot_tone3\"],\"🧑🏾‍✈️\":[\"person_pilot_tone4\"],\"🧑🏿‍✈️\":[\"person_pilot_tone5\"],\"👨🏻‍✈️\":[\"man_pilot_tone1\"],\"👨🏼‍✈️\":[\"man_pilot_tone2\"],\"👨🏽‍✈️\":[\"man_pilot_tone3\"],\"👨🏾‍✈️\":[\"man_pilot_tone4\"],\"👨🏿‍✈️\":[\"man_pilot_tone5\"],\"👩🏻‍✈️\":[\"woman_pilot_tone1\"],\"👩🏼‍✈️\":[\"woman_pilot_tone2\"],\"👩🏽‍✈️\":[\"woman_pilot_tone3\"],\"👩🏾‍✈️\":[\"woman_pilot_tone4\"],\"👩🏿‍✈️\":[\"woman_pilot_tone5\"],\"🧑🏻‍🚀\":[\"person_astronaut_tone1\"],\"🧑🏼‍🚀\":[\"person_astronaut_tone2\"],\"🧑🏽‍🚀\":[\"person_astronaut_tone3\"],\"🧑🏾‍🚀\":[\"person_astronaut_tone4\"],\"🧑🏿‍🚀\":[\"person_astronaut_tone5\"],\"👨🏻‍🚀\":[\"man_astronaut_tone1\"],\"👨🏼‍🚀\":[\"man_astronaut_tone2\"],\"👨🏽‍🚀\":[\"man_astronaut_tone3\"],\"👨🏾‍🚀\":[\"man_astronaut_tone4\"],\"👨🏿‍🚀\":[\"man_astronaut_tone5\"],\"👩🏻‍🚀\":[\"woman_astronaut_tone1\"],\"👩🏼‍🚀\":[\"woman_astronaut_tone2\"],\"👩🏽‍🚀\":[\"woman_astronaut_tone3\"],\"👩🏾‍🚀\":[\"woman_astronaut_tone4\"],\"👩🏿‍🚀\":[\"woman_astronaut_tone5\"],\"🧑🏻‍🚒\":[\"person_firefighter_tone1\"],\"🧑🏼‍🚒\":[\"person_firefighter_tone2\"],\"🧑🏽‍🚒\":[\"person_firefighter_tone3\"],\"🧑🏾‍🚒\":[\"person_firefighter_tone4\"],\"🧑🏿‍🚒\":[\"person_firefighter_tone5\"],\"👨🏻‍🚒\":[\"man_firefighter_tone1\"],\"👨🏼‍🚒\":[\"man_firefighter_tone2\"],\"👨🏽‍🚒\":[\"man_firefighter_tone3\"],\"👨🏾‍🚒\":[\"man_firefighter_tone4\"],\"👨🏿‍🚒\":[\"man_firefighter_tone5\"],\"👩🏻‍🚒\":[\"woman_firefighter_tone1\"],\"👩🏼‍🚒\":[\"woman_firefighter_tone2\"],\"👩🏽‍🚒\":[\"woman_firefighter_tone3\"],\"👩🏾‍🚒\":[\"woman_firefighter_tone4\"],\"👩🏿‍🚒\":[\"woman_firefighter_tone5\"],\"👮🏻\":[\"police_officer_tone1\"],\"👮🏼\":[\"police_officer_tone2\"],\"👮🏽\":[\"police_officer_tone3\"],\"👮🏾\":[\"police_officer_tone4\"],\"👮🏿\":[\"police_officer_tone5\"],\"👮🏻‍♂️\":[\"man_police_officer_tone1\"],\"👮🏼‍♂️\":[\"man_police_officer_tone2\"],\"👮🏽‍♂️\":[\"man_police_officer_tone3\"],\"👮🏾‍♂️\":[\"man_police_officer_tone4\"],\"👮🏿‍♂️\":[\"man_police_officer_tone5\"],\"👮🏻‍♀️\":[\"woman_police_officer_tone1\"],\"👮🏼‍♀️\":[\"woman_police_officer_tone2\"],\"👮🏽‍♀️\":[\"woman_police_officer_tone3\"],\"👮🏾‍♀️\":[\"woman_police_officer_tone4\"],\"👮🏿‍♀️\":[\"woman_police_officer_tone5\"],\"🕵🏻\":[\"detective_tone1\"],\"🕵🏼\":[\"detective_tone2\"],\"🕵🏽\":[\"detective_tone3\"],\"🕵🏾\":[\"detective_tone4\"],\"🕵🏿\":[\"detective_tone5\"],\"🕵🏻‍♂️\":[\"man_detective_tone1\"],\"🕵🏼‍♂️\":[\"man_detective_tone2\"],\"🕵🏽‍♂️\":[\"man_detective_tone3\"],\"🕵🏾‍♂️\":[\"man_detective_tone4\"],\"🕵🏿‍♂️\":[\"man_detective_tone5\"],\"🕵🏻‍♀️\":[\"woman_detective_tone1\"],\"🕵🏼‍♀️\":[\"woman_detective_tone2\"],\"🕵🏽‍♀️\":[\"woman_detective_tone3\"],\"🕵🏾‍♀️\":[\"woman_detective_tone4\"],\"🕵🏿‍♀️\":[\"woman_detective_tone5\"],\"💂🏻\":[\"guard_tone1\"],\"💂🏼\":[\"guard_tone2\"],\"💂🏽\":[\"guard_tone3\"],\"💂🏾\":[\"guard_tone4\"],\"💂🏿\":[\"guard_tone5\"],\"💂🏻‍♂️\":[\"man_guard_tone1\"],\"💂🏼‍♂️\":[\"man_guard_tone2\"],\"💂🏽‍♂️\":[\"man_guard_tone3\"],\"💂🏾‍♂️\":[\"man_guard_tone4\"],\"💂🏿‍♂️\":[\"man_guard_tone5\"],\"💂🏻‍♀️\":[\"woman_guard_tone1\"],\"💂🏼‍♀️\":[\"woman_guard_tone2\"],\"💂🏽‍♀️\":[\"woman_guard_tone3\"],\"💂🏾‍♀️\":[\"woman_guard_tone4\"],\"💂🏿‍♀️\":[\"woman_guard_tone5\"],\"🥷🏻\":[\"ninja_tone1\"],\"🥷🏼\":[\"ninja_tone2\"],\"🥷🏽\":[\"ninja_tone3\"],\"🥷🏾\":[\"ninja_tone4\"],\"🥷🏿\":[\"ninja_tone5\"],\"👷🏻\":[\"construction_worker_tone1\"],\"👷🏼\":[\"construction_worker_tone2\"],\"👷🏽\":[\"construction_worker_tone3\"],\"👷🏾\":[\"construction_worker_tone4\"],\"👷🏿\":[\"construction_worker_tone5\"],\"👷🏻‍♂️\":[\"man_construction_worker_tone1\"],\"👷🏼‍♂️\":[\"man_construction_worker_tone2\"],\"👷🏽‍♂️\":[\"man_construction_worker_tone3\"],\"👷🏾‍♂️\":[\"man_construction_worker_tone4\"],\"👷🏿‍♂️\":[\"man_construction_worker_tone5\"],\"👷🏻‍♀️\":[\"woman_construction_worker_tone1\"],\"👷🏼‍♀️\":[\"woman_construction_worker_tone2\"],\"👷🏽‍♀️\":[\"woman_construction_worker_tone3\"],\"👷🏾‍♀️\":[\"woman_construction_worker_tone4\"],\"👷🏿‍♀️\":[\"woman_construction_worker_tone5\"],\"🤴🏻\":[\"prince_tone1\"],\"🤴🏼\":[\"prince_tone2\"],\"🤴🏽\":[\"prince_tone3\"],\"🤴🏾\":[\"prince_tone4\"],\"🤴🏿\":[\"prince_tone5\"],\"👸🏻\":[\"princess_tone1\"],\"👸🏼\":[\"princess_tone2\"],\"👸🏽\":[\"princess_tone3\"],\"👸🏾\":[\"princess_tone4\"],\"👸🏿\":[\"princess_tone5\"],\"👳🏻\":[\"person_turban_tone1\"],\"👳🏼\":[\"person_turban_tone2\"],\"👳🏽\":[\"person_turban_tone3\"],\"👳🏾\":[\"person_turban_tone4\"],\"👳🏿\":[\"person_turban_tone5\"],\"👳🏻‍♂️\":[\"man_turban_tone1\"],\"👳🏼‍♂️\":[\"man_turban_tone2\"],\"👳🏽‍♂️\":[\"man_turban_tone3\"],\"👳🏾‍♂️\":[\"man_turban_tone4\"],\"👳🏿‍♂️\":[\"man_turban_tone5\"],\"👳🏻‍♀️\":[\"woman_turban_tone1\"],\"👳🏼‍♀️\":[\"woman_turban_tone2\"],\"👳🏽‍♀️\":[\"woman_turban_tone3\"],\"👳🏾‍♀️\":[\"woman_turban_tone4\"],\"👳🏿‍♀️\":[\"woman_turban_tone5\"],\"👲🏻\":[\"man_chinese_cap_tone1\"],\"👲🏼\":[\"man_chinese_cap_tone2\"],\"👲🏽\":[\"man_chinese_cap_tone3\"],\"👲🏾\":[\"man_chinese_cap_tone4\"],\"👲🏿\":[\"man_chinese_cap_tone5\"],\"🧕🏻\":[\"woman_headscarf_tone1\"],\"🧕🏼\":[\"woman_headscarf_tone2\"],\"🧕🏽\":[\"woman_headscarf_tone3\"],\"🧕🏾\":[\"woman_headscarf_tone4\"],\"🧕🏿\":[\"woman_headscarf_tone5\"],\"🤵🏻\":[\"man_tuxedo_tone1\"],\"🤵🏼\":[\"man_tuxedo_tone2\"],\"🤵🏽\":[\"man_tuxedo_tone3\"],\"🤵🏾\":[\"man_tuxedo_tone4\"],\"🤵🏿\":[\"man_tuxedo_tone5\"],\"🤵🏻‍♂️\":[\"man_in_tuxedo_tone1\"],\"🤵🏼‍♂️\":[\"man_in_tuxedo_tone2\"],\"🤵🏽‍♂️\":[\"man_in_tuxedo_tone3\"],\"🤵🏾‍♂️\":[\"man_in_tuxedo_tone4\"],\"🤵🏿‍♂️\":[\"man_in_tuxedo_tone5\"],\"🤵🏻‍♀️\":[\"woman_in_tuxedo_tone1\"],\"🤵🏼‍♀️\":[\"woman_in_tuxedo_tone2\"],\"🤵🏽‍♀️\":[\"woman_in_tuxedo_tone3\"],\"🤵🏾‍♀️\":[\"woman_in_tuxedo_tone4\"],\"🤵🏿‍♀️\":[\"woman_in_tuxedo_tone5\"],\"👰🏻\":[\"person_veiled_bride_tone1\",\"bride_veil_tone1\"],\"👰🏼\":[\"person_veiled_bride_tone2\",\"bride_veil_tone2\"],\"👰🏽\":[\"person_veiled_bride_tone3\",\"bride_veil_tone3\"],\"👰🏾\":[\"person_veiled_bride_tone4\",\"bride_veil_tone4\"],\"👰🏿\":[\"person_veiled_bride_tone5\",\"bride_veil_tone5\"],\"👰🏻‍♂️\":[\"man_veiled_bride_tone1\"],\"👰🏼‍♂️\":[\"man_veiled_bride_tone2\"],\"👰🏽‍♂️\":[\"man_veiled_bride_tone3\"],\"👰🏾‍♂️\":[\"man_veiled_bride_tone4\"],\"👰🏿‍♂️\":[\"man_veiled_bride_tone5\"],\"👰🏻‍♀️\":[\"woman_veiled_bride_tone1\"],\"👰🏼‍♀️\":[\"woman_veiled_bride_tone2\"],\"👰🏽‍♀️\":[\"woman_veiled_bride_tone3\"],\"👰🏾‍♀️\":[\"woman_veiled_bride_tone4\"],\"👰🏿‍♀️\":[\"woman_veiled_bride_tone5\"],\"🤰🏻\":[\"pregnant_woman_tone1\"],\"🤰🏼\":[\"pregnant_woman_tone2\"],\"🤰🏽\":[\"pregnant_woman_tone3\"],\"🤰🏾\":[\"pregnant_woman_tone4\"],\"🤰🏿\":[\"pregnant_woman_tone5\"],\"🤱🏻\":[\"breast_feeding_tone1\"],\"🤱🏼\":[\"breast_feeding_tone2\"],\"🤱🏽\":[\"breast_feeding_tone3\"],\"🤱🏾\":[\"breast_feeding_tone4\"],\"🤱🏿\":[\"breast_feeding_tone5\"],\"👩🏻‍🍼\":[\"woman_feeding_baby_tone1\"],\"👩🏼‍🍼\":[\"woman_feeding_baby_tone2\"],\"👩🏽‍🍼\":[\"woman_feeding_baby_tone3\"],\"👩🏾‍🍼\":[\"woman_feeding_baby_tone4\"],\"👩🏿‍🍼\":[\"woman_feeding_baby_tone5\"],\"👨🏻‍🍼\":[\"man_feeding_baby_tone1\"],\"👨🏼‍🍼\":[\"man_feeding_baby_tone2\"],\"👨🏽‍🍼\":[\"man_feeding_baby_tone3\"],\"👨🏾‍🍼\":[\"man_feeding_baby_tone4\"],\"👨🏿‍🍼\":[\"man_feeding_baby_tone5\"],\"🧑🏻‍🍼\":[\"person_feeding_baby_tone1\"],\"🧑🏼‍🍼\":[\"person_feeding_baby_tone2\"],\"🧑🏽‍🍼\":[\"person_feeding_baby_tone3\"],\"🧑🏾‍🍼\":[\"person_feeding_baby_tone4\"],\"🧑🏿‍🍼\":[\"person_feeding_baby_tone5\"],\"👼🏻\":[\"baby_angel_tone1\"],\"👼🏼\":[\"baby_angel_tone2\"],\"👼🏽\":[\"baby_angel_tone3\"],\"👼🏾\":[\"baby_angel_tone4\"],\"👼🏿\":[\"baby_angel_tone5\"],\"🎅🏻\":[\"santa_tone1\"],\"🎅🏼\":[\"santa_tone2\"],\"🎅🏽\":[\"santa_tone3\"],\"🎅🏾\":[\"santa_tone4\"],\"🎅🏿\":[\"santa_tone5\"],\"🤶🏻\":[\"mrs_claus_tone1\"],\"🤶🏼\":[\"mrs_claus_tone2\"],\"🤶🏽\":[\"mrs_claus_tone3\"],\"🤶🏾\":[\"mrs_claus_tone4\"],\"🤶🏿\":[\"mrs_claus_tone5\"],\"🧑🏻‍🎄\":[\"mx_claus_tone1\"],\"🧑🏼‍🎄\":[\"mx_claus_tone2\"],\"🧑🏽‍🎄\":[\"mx_claus_tone3\"],\"🧑🏾‍🎄\":[\"mx_claus_tone4\"],\"🧑🏿‍🎄\":[\"mx_claus_tone5\"],\"🦸🏻\":[\"hero_tone1\",\"superhero_tone1\"],\"🦸🏼\":[\"hero_tone2\",\"superhero_tone2\"],\"🦸🏽\":[\"hero_tone3\",\"superhero_tone3\"],\"🦸🏾\":[\"hero_tone4\",\"superhero_tone4\"],\"🦸🏿\":[\"hero_tone5\",\"superhero_tone5\"],\"🦸🏻‍♂️\":[\"man_hero_tone1\"],\"🦸🏼‍♂️\":[\"man_hero_tone2\"],\"🦸🏽‍♂️\":[\"man_hero_tone3\"],\"🦸🏾‍♂️\":[\"man_hero_tone4\"],\"🦸🏿‍♂️\":[\"man_hero_tone5\"],\"🦸🏻‍♀️\":[\"woman_hero_tone1\"],\"🦸🏼‍♀️\":[\"woman_hero_tone2\"],\"🦸🏽‍♀️\":[\"woman_hero_tone3\"],\"🦸🏾‍♀️\":[\"woman_hero_tone4\"],\"🦸🏿‍♀️\":[\"woman_hero_tone5\"],\"🦹🏻\":[\"villain_tone1\",\"supervillain_tone1\"],\"🦹🏼\":[\"villain_tone2\",\"supervillain_tone2\"],\"🦹🏽\":[\"villain_tone3\",\"supervillain_tone3\"],\"🦹🏾\":[\"villain_tone4\",\"supervillain_tone4\"],\"🦹🏿\":[\"villain_tone5\",\"supervillain_tone5\"],\"🦹🏻‍♂️\":[\"man_villain_tone1\"],\"🦹🏼‍♂️\":[\"man_villain_tone2\"],\"🦹🏽‍♂️\":[\"man_villain_tone3\"],\"🦹🏾‍♂️\":[\"man_villain_tone4\"],\"🦹🏿‍♂️\":[\"man_villain_tone5\"],\"🦹🏻‍♀️\":[\"woman_villain_tone1\"],\"🦹🏼‍♀️\":[\"woman_villain_tone2\"],\"🦹🏽‍♀️\":[\"woman_villain_tone3\"],\"🦹🏾‍♀️\":[\"woman_villain_tone4\"],\"🦹🏿‍♀️\":[\"woman_villain_tone5\"],\"🧙🏻\":[\"mage_tone1\"],\"🧙🏼\":[\"mage_tone2\"],\"🧙🏽\":[\"mage_tone3\"],\"🧙🏾\":[\"mage_tone4\"],\"🧙🏿\":[\"mage_tone5\"],\"🧙🏻‍♂️\":[\"man_mage_tone1\"],\"🧙🏼‍♂️\":[\"man_mage_tone2\"],\"🧙🏽‍♂️\":[\"man_mage_tone3\"],\"🧙🏾‍♂️\":[\"man_mage_tone4\"],\"🧙🏿‍♂️\":[\"man_mage_tone5\"],\"🧙🏻‍♀️\":[\"woman_mage_tone1\"],\"🧙🏼‍♀️\":[\"woman_mage_tone2\"],\"🧙🏽‍♀️\":[\"woman_mage_tone3\"],\"🧙🏾‍♀️\":[\"woman_mage_tone4\"],\"🧙🏿‍♀️\":[\"woman_mage_tone5\"],\"🧚🏻\":[\"fairy_tone1\"],\"🧚🏼\":[\"fairy_tone2\"],\"🧚🏽\":[\"fairy_tone3\"],\"🧚🏾\":[\"fairy_tone4\"],\"🧚🏿\":[\"fairy_tone5\"],\"🧚🏻‍♂️\":[\"man_fairy_tone1\"],\"🧚🏼‍♂️\":[\"man_fairy_tone2\"],\"🧚🏽‍♂️\":[\"man_fairy_tone3\"],\"🧚🏾‍♂️\":[\"man_fairy_tone4\"],\"🧚🏿‍♂️\":[\"man_fairy_tone5\"],\"🧚🏻‍♀️\":[\"woman_fairy_tone1\"],\"🧚🏼‍♀️\":[\"woman_fairy_tone2\"],\"🧚🏽‍♀️\":[\"woman_fairy_tone3\"],\"🧚🏾‍♀️\":[\"woman_fairy_tone4\"],\"🧚🏿‍♀️\":[\"woman_fairy_tone5\"],\"🧛🏻\":[\"vampire_tone1\"],\"🧛🏼\":[\"vampire_tone2\"],\"🧛🏽\":[\"vampire_tone3\"],\"🧛🏾\":[\"vampire_tone4\"],\"🧛🏿\":[\"vampire_tone5\"],\"🧛🏻‍♂️\":[\"man_vampire_tone1\"],\"🧛🏼‍♂️\":[\"man_vampire_tone2\"],\"🧛🏽‍♂️\":[\"man_vampire_tone3\"],\"🧛🏾‍♂️\":[\"man_vampire_tone4\"],\"🧛🏿‍♂️\":[\"man_vampire_tone5\"],\"🧛🏻‍♀️\":[\"woman_vampire_tone1\"],\"🧛🏼‍♀️\":[\"woman_vampire_tone2\"],\"🧛🏽‍♀️\":[\"woman_vampire_tone3\"],\"🧛🏾‍♀️\":[\"woman_vampire_tone4\"],\"🧛🏿‍♀️\":[\"woman_vampire_tone5\"],\"🧜🏻\":[\"merperson_tone1\"],\"🧜🏼\":[\"merperson_tone2\"],\"🧜🏽\":[\"merperson_tone3\"],\"🧜🏾\":[\"merperson_tone4\"],\"🧜🏿\":[\"merperson_tone5\"],\"🧜🏻‍♂️\":[\"merman_tone1\"],\"🧜🏼‍♂️\":[\"merman_tone2\"],\"🧜🏽‍♂️\":[\"merman_tone3\"],\"🧜🏾‍♂️\":[\"merman_tone4\"],\"🧜🏿‍♂️\":[\"merman_tone5\"],\"🧜🏻‍♀️\":[\"mermaid_tone1\"],\"🧜🏼‍♀️\":[\"mermaid_tone2\"],\"🧜🏽‍♀️\":[\"mermaid_tone3\"],\"🧜🏾‍♀️\":[\"mermaid_tone4\"],\"🧜🏿‍♀️\":[\"mermaid_tone5\"],\"🧝🏻\":[\"elf_tone1\"],\"🧝🏼\":[\"elf_tone2\"],\"🧝🏽\":[\"elf_tone3\"],\"🧝🏾\":[\"elf_tone4\"],\"🧝🏿\":[\"elf_tone5\"],\"🧝🏻‍♂️\":[\"man_elf_tone1\"],\"🧝🏼‍♂️\":[\"man_elf_tone2\"],\"🧝🏽‍♂️\":[\"man_elf_tone3\"],\"🧝🏾‍♂️\":[\"man_elf_tone4\"],\"🧝🏿‍♂️\":[\"man_elf_tone5\"],\"🧝🏻‍♀️\":[\"woman_elf_tone1\"],\"🧝🏼‍♀️\":[\"woman_elf_tone2\"],\"🧝🏽‍♀️\":[\"woman_elf_tone3\"],\"🧝🏾‍♀️\":[\"woman_elf_tone4\"],\"🧝🏿‍♀️\":[\"woman_elf_tone5\"],\"💆🏻\":[\"person_getting_massage_tone1\"],\"💆🏼\":[\"person_getting_massage_tone2\"],\"💆🏽\":[\"person_getting_massage_tone3\"],\"💆🏾\":[\"person_getting_massage_tone4\"],\"💆🏿\":[\"person_getting_massage_tone5\"],\"💆🏻‍♂️\":[\"man_getting_face_massage_tone1\"],\"💆🏼‍♂️\":[\"man_getting_face_massage_tone2\"],\"💆🏽‍♂️\":[\"man_getting_face_massage_tone3\"],\"💆🏾‍♂️\":[\"man_getting_face_massage_tone4\"],\"💆🏿‍♂️\":[\"man_getting_face_massage_tone5\"],\"💆🏻‍♀️\":[\"woman_getting_face_massage_tone1\"],\"💆🏼‍♀️\":[\"woman_getting_face_massage_tone2\"],\"💆🏽‍♀️\":[\"woman_getting_face_massage_tone3\"],\"💆🏾‍♀️\":[\"woman_getting_face_massage_tone4\"],\"💆🏿‍♀️\":[\"woman_getting_face_massage_tone5\"],\"💇🏻\":[\"person_getting_haircut_tone1\"],\"💇🏼\":[\"person_getting_haircut_tone2\"],\"💇🏽\":[\"person_getting_haircut_tone3\"],\"💇🏾\":[\"person_getting_haircut_tone4\"],\"💇🏿\":[\"person_getting_haircut_tone5\"],\"💇🏻‍♂️\":[\"man_getting_haircut_tone1\"],\"💇🏼‍♂️\":[\"man_getting_haircut_tone2\"],\"💇🏽‍♂️\":[\"man_getting_haircut_tone3\"],\"💇🏾‍♂️\":[\"man_getting_haircut_tone4\"],\"💇🏿‍♂️\":[\"man_getting_haircut_tone5\"],\"💇🏻‍♀️\":[\"woman_getting_haircut_tone1\"],\"💇🏼‍♀️\":[\"woman_getting_haircut_tone2\"],\"💇🏽‍♀️\":[\"woman_getting_haircut_tone3\"],\"💇🏾‍♀️\":[\"woman_getting_haircut_tone4\"],\"💇🏿‍♀️\":[\"woman_getting_haircut_tone5\"],\"🚶🏻\":[\"person_walking_tone1\"],\"🚶🏼\":[\"person_walking_tone2\"],\"🚶🏽\":[\"person_walking_tone3\"],\"🚶🏾\":[\"person_walking_tone4\"],\"🚶🏿\":[\"person_walking_tone5\"],\"🚶🏻‍♂️\":[\"man_walking_tone1\"],\"🚶🏼‍♂️\":[\"man_walking_tone2\"],\"🚶🏽‍♂️\":[\"man_walking_tone3\"],\"🚶🏾‍♂️\":[\"man_walking_tone4\"],\"🚶🏿‍♂️\":[\"man_walking_tone5\"],\"🚶🏻‍♀️\":[\"woman_walking_tone1\"],\"🚶🏼‍♀️\":[\"woman_walking_tone2\"],\"🚶🏽‍♀️\":[\"woman_walking_tone3\"],\"🚶🏾‍♀️\":[\"woman_walking_tone4\"],\"🚶🏿‍♀️\":[\"woman_walking_tone5\"],\"🧍🏻\":[\"person_standing_tone1\"],\"🧍🏼\":[\"person_standing_tone2\"],\"🧍🏽\":[\"person_standing_tone3\"],\"🧍🏾\":[\"person_standing_tone4\"],\"🧍🏿\":[\"person_standing_tone5\"],\"🧍🏻‍♂️\":[\"man_standing_tone1\"],\"🧍🏼‍♂️\":[\"man_standing_tone2\"],\"🧍🏽‍♂️\":[\"man_standing_tone3\"],\"🧍🏾‍♂️\":[\"man_standing_tone4\"],\"🧍🏿‍♂️\":[\"man_standing_tone5\"],\"🧍🏻‍♀️\":[\"woman_standing_tone1\"],\"🧍🏼‍♀️\":[\"woman_standing_tone2\"],\"🧍🏽‍♀️\":[\"woman_standing_tone3\"],\"🧍🏾‍♀️\":[\"woman_standing_tone4\"],\"🧍🏿‍♀️\":[\"woman_standing_tone5\"],\"🧎🏻\":[\"person_kneeling_tone1\"],\"🧎🏼\":[\"person_kneeling_tone2\"],\"🧎🏽\":[\"person_kneeling_tone3\"],\"🧎🏾\":[\"person_kneeling_tone4\"],\"🧎🏿\":[\"person_kneeling_tone5\"],\"🧎🏻‍♂️\":[\"man_kneeling_tone1\"],\"🧎🏼‍♂️\":[\"man_kneeling_tone2\"],\"🧎🏽‍♂️\":[\"man_kneeling_tone3\"],\"🧎🏾‍♂️\":[\"man_kneeling_tone4\"],\"🧎🏿‍♂️\":[\"man_kneeling_tone5\"],\"🧎🏻‍♀️\":[\"woman_kneeling_tone1\"],\"🧎🏼‍♀️\":[\"woman_kneeling_tone2\"],\"🧎🏽‍♀️\":[\"woman_kneeling_tone3\"],\"🧎🏾‍♀️\":[\"woman_kneeling_tone4\"],\"🧎🏿‍♀️\":[\"woman_kneeling_tone5\"],\"🧑🏻‍🦯\":[\"person_probing_cane_tone1\"],\"🧑🏼‍🦯\":[\"person_probing_cane_tone2\"],\"🧑🏽‍🦯\":[\"person_probing_cane_tone3\"],\"🧑🏾‍🦯\":[\"person_probing_cane_tone4\"],\"🧑🏿‍🦯\":[\"person_probing_cane_tone5\"],\"👨🏻‍🦯\":[\"man_probing_cane_tone1\"],\"👨🏼‍🦯\":[\"man_probing_cane_tone2\"],\"👨🏽‍🦯\":[\"man_probing_cane_tone3\"],\"👨🏾‍🦯\":[\"man_probing_cane_tone4\"],\"👨🏿‍🦯\":[\"man_probing_cane_tone5\"],\"👩🏻‍🦯\":[\"woman_probing_cane_tone1\"],\"👩🏼‍🦯\":[\"woman_probing_cane_tone2\"],\"👩🏽‍🦯\":[\"woman_probing_cane_tone3\"],\"👩🏾‍🦯\":[\"woman_probing_cane_tone4\"],\"👩🏿‍🦯\":[\"woman_probing_cane_tone5\"],\"🧑🏻‍🦼\":[\"person_motor_wheelchair_tone1\"],\"🧑🏼‍🦼\":[\"person_motor_wheelchair_tone2\"],\"🧑🏽‍🦼\":[\"person_motor_wheelchair_tone3\"],\"🧑🏾‍🦼\":[\"person_motor_wheelchair_tone4\"],\"🧑🏿‍🦼\":[\"person_motor_wheelchair_tone5\"],\"👨🏻‍🦼\":[\"man_motor_wheelchair_tone1\"],\"👨🏼‍🦼\":[\"man_motor_wheelchair_tone2\"],\"👨🏽‍🦼\":[\"man_motor_wheelchair_tone3\"],\"👨🏾‍🦼\":[\"man_motor_wheelchair_tone4\"],\"👨🏿‍🦼\":[\"man_motor_wheelchair_tone5\"],\"👩🏻‍🦼\":[\"woman_motor_wheelchair_tone1\"],\"👩🏼‍🦼\":[\"woman_motor_wheelchair_tone2\"],\"👩🏽‍🦼\":[\"woman_motor_wheelchair_tone3\"],\"👩🏾‍🦼\":[\"woman_motor_wheelchair_tone4\"],\"👩🏿‍🦼\":[\"woman_motor_wheelchair_tone5\"],\"🧑🏻‍🦽\":[\"person_wheelchair_tone1\"],\"🧑🏼‍🦽\":[\"person_wheelchair_tone2\"],\"🧑🏽‍🦽\":[\"person_wheelchair_tone3\"],\"🧑🏾‍🦽\":[\"person_wheelchair_tone4\"],\"🧑🏿‍🦽\":[\"person_wheelchair_tone5\"],\"👨🏻‍🦽\":[\"man_wheelchair_tone1\"],\"👨🏼‍🦽\":[\"man_wheelchair_tone2\"],\"👨🏽‍🦽\":[\"man_wheelchair_tone3\"],\"👨🏾‍🦽\":[\"man_wheelchair_tone4\"],\"👨🏿‍🦽\":[\"man_wheelchair_tone5\"],\"👩🏻‍🦽\":[\"woman_wheelchair_tone1\"],\"👩🏼‍🦽\":[\"woman_wheelchair_tone2\"],\"👩🏽‍🦽\":[\"woman_wheelchair_tone3\"],\"👩🏾‍🦽\":[\"woman_wheelchair_tone4\"],\"👩🏿‍🦽\":[\"woman_wheelchair_tone5\"],\"🏃🏻\":[\"person_running_tone1\"],\"🏃🏼\":[\"person_running_tone2\"],\"🏃🏽\":[\"person_running_tone3\"],\"🏃🏾\":[\"person_running_tone4\"],\"🏃🏿\":[\"person_running_tone5\"],\"🏃🏻‍♂️\":[\"man_running_tone1\"],\"🏃🏼‍♂️\":[\"man_running_tone2\"],\"🏃🏽‍♂️\":[\"man_running_tone3\"],\"🏃🏾‍♂️\":[\"man_running_tone4\"],\"🏃🏿‍♂️\":[\"man_running_tone5\"],\"🏃🏻‍♀️\":[\"woman_running_tone1\"],\"🏃🏼‍♀️\":[\"woman_running_tone2\"],\"🏃🏽‍♀️\":[\"woman_running_tone3\"],\"🏃🏾‍♀️\":[\"woman_running_tone4\"],\"🏃🏿‍♀️\":[\"woman_running_tone5\"],\"💃🏻\":[\"dancer_tone1\",\"woman_dancing_tone1\"],\"💃🏼\":[\"dancer_tone2\",\"woman_dancing_tone2\"],\"💃🏽\":[\"dancer_tone3\",\"woman_dancing_tone3\"],\"💃🏾\":[\"dancer_tone4\",\"woman_dancing_tone4\"],\"💃🏿\":[\"dancer_tone5\",\"woman_dancing_tone5\"],\"🕺🏻\":[\"man_dancing_tone1\"],\"🕺🏼\":[\"man_dancing_tone2\"],\"🕺🏽\":[\"man_dancing_tone3\"],\"🕺🏾\":[\"man_dancing_tone4\"],\"🕺🏿\":[\"man_dancing_tone5\"],\"🕴🏻\":[\"levitate_tone1\"],\"🕴🏼\":[\"levitate_tone2\"],\"🕴🏽\":[\"levitate_tone3\"],\"🕴🏾\":[\"levitate_tone4\"],\"🕴🏿\":[\"levitate_tone5\"],\"🧖🏻\":[\"person_steamy_room_tone1\"],\"🧖🏼\":[\"person_steamy_room_tone2\"],\"🧖🏽\":[\"person_steamy_room_tone3\"],\"🧖🏾\":[\"person_steamy_room_tone4\"],\"🧖🏿\":[\"person_steamy_room_tone5\"],\"🧖🏻‍♂️\":[\"man_steamy_room_tone1\"],\"🧖🏼‍♂️\":[\"man_steamy_room_tone2\"],\"🧖🏽‍♂️\":[\"man_steamy_room_tone3\"],\"🧖🏾‍♂️\":[\"man_steamy_room_tone4\"],\"🧖🏿‍♂️\":[\"man_steamy_room_tone5\"],\"🧖🏻‍♀️\":[\"woman_steamy_room_tone1\"],\"🧖🏼‍♀️\":[\"woman_steamy_room_tone2\"],\"🧖🏽‍♀️\":[\"woman_steamy_room_tone3\"],\"🧖🏾‍♀️\":[\"woman_steamy_room_tone4\"],\"🧖🏿‍♀️\":[\"woman_steamy_room_tone5\"],\"🧗🏻\":[\"person_climbing_tone1\"],\"🧗🏼\":[\"person_climbing_tone2\"],\"🧗🏽\":[\"person_climbing_tone3\"],\"🧗🏾\":[\"person_climbing_tone4\"],\"🧗🏿\":[\"person_climbing_tone5\"],\"🧗🏻‍♂️\":[\"man_climbing_tone1\"],\"🧗🏼‍♂️\":[\"man_climbing_tone2\"],\"🧗🏽‍♂️\":[\"man_climbing_tone3\"],\"🧗🏾‍♂️\":[\"man_climbing_tone4\"],\"🧗🏿‍♂️\":[\"man_climbing_tone5\"],\"🧗🏻‍♀️\":[\"woman_climbing_tone1\"],\"🧗🏼‍♀️\":[\"woman_climbing_tone2\"],\"🧗🏽‍♀️\":[\"woman_climbing_tone3\"],\"🧗🏾‍♀️\":[\"woman_climbing_tone4\"],\"🧗🏿‍♀️\":[\"woman_climbing_tone5\"],\"🏇🏻\":[\"horse_racing_tone1\"],\"🏇🏼\":[\"horse_racing_tone2\"],\"🏇🏽\":[\"horse_racing_tone3\"],\"🏇🏾\":[\"horse_racing_tone4\"],\"🏇🏿\":[\"horse_racing_tone5\"],\"🏂🏻\":[\"snowboarder_tone1\"],\"🏂🏼\":[\"snowboarder_tone2\"],\"🏂🏽\":[\"snowboarder_tone3\"],\"🏂🏾\":[\"snowboarder_tone4\"],\"🏂🏿\":[\"snowboarder_tone5\"],\"🏌🏻\":[\"person_golfing_tone1\"],\"🏌🏼\":[\"person_golfing_tone2\"],\"🏌🏽\":[\"person_golfing_tone3\"],\"🏌🏾\":[\"person_golfing_tone4\"],\"🏌🏿\":[\"person_golfing_tone5\"],\"🏌🏻‍♂️\":[\"man_golfing_tone1\"],\"🏌🏼‍♂️\":[\"man_golfing_tone2\"],\"🏌🏽‍♂️\":[\"man_golfing_tone3\"],\"🏌🏾‍♂️\":[\"man_golfing_tone4\"],\"🏌🏿‍♂️\":[\"man_golfing_tone5\"],\"🏌🏻‍♀️\":[\"woman_golfing_tone1\"],\"🏌🏼‍♀️\":[\"woman_golfing_tone2\"],\"🏌🏽‍♀️\":[\"woman_golfing_tone3\"],\"🏌🏾‍♀️\":[\"woman_golfing_tone4\"],\"🏌🏿‍♀️\":[\"woman_golfing_tone5\"],\"🏄🏻\":[\"person_surfing_tone1\"],\"🏄🏼\":[\"person_surfing_tone2\"],\"🏄🏽\":[\"person_surfing_tone3\"],\"🏄🏾\":[\"person_surfing_tone4\"],\"🏄🏿\":[\"person_surfing_tone5\"],\"🏄🏻‍♂️\":[\"man_surfing_tone1\"],\"🏄🏼‍♂️\":[\"man_surfing_tone2\"],\"🏄🏽‍♂️\":[\"man_surfing_tone3\"],\"🏄🏾‍♂️\":[\"man_surfing_tone4\"],\"🏄🏿‍♂️\":[\"man_surfing_tone5\"],\"🏄🏻‍♀️\":[\"woman_surfing_tone1\"],\"🏄🏼‍♀️\":[\"woman_surfing_tone2\"],\"🏄🏽‍♀️\":[\"woman_surfing_tone3\"],\"🏄🏾‍♀️\":[\"woman_surfing_tone4\"],\"🏄🏿‍♀️\":[\"woman_surfing_tone5\"],\"🚣🏻\":[\"person_rowing_boat_tone1\"],\"🚣🏼\":[\"person_rowing_boat_tone2\"],\"🚣🏽\":[\"person_rowing_boat_tone3\"],\"🚣🏾\":[\"person_rowing_boat_tone4\"],\"🚣🏿\":[\"person_rowing_boat_tone5\"],\"🚣🏻‍♂️\":[\"man_rowing_boat_tone1\"],\"🚣🏼‍♂️\":[\"man_rowing_boat_tone2\"],\"🚣🏽‍♂️\":[\"man_rowing_boat_tone3\"],\"🚣🏾‍♂️\":[\"man_rowing_boat_tone4\"],\"🚣🏿‍♂️\":[\"man_rowing_boat_tone5\"],\"🚣🏻‍♀️\":[\"woman_rowing_boat_tone1\"],\"🚣🏼‍♀️\":[\"woman_rowing_boat_tone2\"],\"🚣🏽‍♀️\":[\"woman_rowing_boat_tone3\"],\"🚣🏾‍♀️\":[\"woman_rowing_boat_tone4\"],\"🚣🏿‍♀️\":[\"woman_rowing_boat_tone5\"],\"🏊🏻\":[\"person_swimming_tone1\"],\"🏊🏼\":[\"person_swimming_tone2\"],\"🏊🏽\":[\"person_swimming_tone3\"],\"🏊🏾\":[\"person_swimming_tone4\"],\"🏊🏿\":[\"person_swimming_tone5\"],\"🏊🏻‍♂️\":[\"man_swimming_tone1\"],\"🏊🏼‍♂️\":[\"man_swimming_tone2\"],\"🏊🏽‍♂️\":[\"man_swimming_tone3\"],\"🏊🏾‍♂️\":[\"man_swimming_tone4\"],\"🏊🏿‍♂️\":[\"man_swimming_tone5\"],\"🏊🏻‍♀️\":[\"woman_swimming_tone1\"],\"🏊🏼‍♀️\":[\"woman_swimming_tone2\"],\"🏊🏽‍♀️\":[\"woman_swimming_tone3\"],\"🏊🏾‍♀️\":[\"woman_swimming_tone4\"],\"🏊🏿‍♀️\":[\"woman_swimming_tone5\"],\"⛹🏻\":[\"person_bouncing_ball_tone1\"],\"⛹🏼\":[\"person_bouncing_ball_tone2\"],\"⛹🏽\":[\"person_bouncing_ball_tone3\"],\"⛹🏾\":[\"person_bouncing_ball_tone4\"],\"⛹🏿\":[\"person_bouncing_ball_tone5\"],\"⛹🏻‍♂️\":[\"man_bouncing_ball_tone1\"],\"⛹🏼‍♂️\":[\"man_bouncing_ball_tone2\"],\"⛹🏽‍♂️\":[\"man_bouncing_ball_tone3\"],\"⛹🏾‍♂️\":[\"man_bouncing_ball_tone4\"],\"⛹🏿‍♂️\":[\"man_bouncing_ball_tone5\"],\"⛹🏻‍♀️\":[\"woman_bouncing_ball_tone1\"],\"⛹🏼‍♀️\":[\"woman_bouncing_ball_tone2\"],\"⛹🏽‍♀️\":[\"woman_bouncing_ball_tone3\"],\"⛹🏾‍♀️\":[\"woman_bouncing_ball_tone4\"],\"⛹🏿‍♀️\":[\"woman_bouncing_ball_tone5\"],\"🏋🏻\":[\"person_lifting_weights_tone1\"],\"🏋🏼\":[\"person_lifting_weights_tone2\"],\"🏋🏽\":[\"person_lifting_weights_tone3\"],\"🏋🏾\":[\"person_lifting_weights_tone4\"],\"🏋🏿\":[\"person_lifting_weights_tone5\"],\"🏋🏻‍♂️\":[\"man_lifting_weights_tone1\"],\"🏋🏼‍♂️\":[\"man_lifting_weights_tone2\"],\"🏋🏽‍♂️\":[\"man_lifting_weights_tone3\"],\"🏋🏾‍♂️\":[\"man_lifting_weights_tone4\"],\"🏋🏿‍♂️\":[\"man_lifting_weights_tone5\"],\"🏋🏻‍♀️\":[\"woman_lifting_weights_tone1\"],\"🏋🏼‍♀️\":[\"woman_lifting_weights_tone2\"],\"🏋🏽‍♀️\":[\"woman_lifting_weights_tone3\"],\"🏋🏾‍♀️\":[\"woman_lifting_weights_tone4\"],\"🏋🏿‍♀️\":[\"woman_lifting_weights_tone5\"],\"🚴🏻\":[\"person_biking_tone1\"],\"🚴🏼\":[\"person_biking_tone2\"],\"🚴🏽\":[\"person_biking_tone3\"],\"🚴🏾\":[\"person_biking_tone4\"],\"🚴🏿\":[\"person_biking_tone5\"],\"🚴🏻‍♂️\":[\"man_biking_tone1\"],\"🚴🏼‍♂️\":[\"man_biking_tone2\"],\"🚴🏽‍♂️\":[\"man_biking_tone3\"],\"🚴🏾‍♂️\":[\"man_biking_tone4\"],\"🚴🏿‍♂️\":[\"man_biking_tone5\"],\"🚴🏻‍♀️\":[\"woman_biking_tone1\"],\"🚴🏼‍♀️\":[\"woman_biking_tone2\"],\"🚴🏽‍♀️\":[\"woman_biking_tone3\"],\"🚴🏾‍♀️\":[\"woman_biking_tone4\"],\"🚴🏿‍♀️\":[\"woman_biking_tone5\"],\"🚵🏻\":[\"person_mountain_biking_tone1\"],\"🚵🏼\":[\"person_mountain_biking_tone2\"],\"🚵🏽\":[\"person_mountain_biking_tone3\"],\"🚵🏾\":[\"person_mountain_biking_tone4\"],\"🚵🏿\":[\"person_mountain_biking_tone5\"],\"🚵🏻‍♂️\":[\"man_mountain_biking_tone1\"],\"🚵🏼‍♂️\":[\"man_mountain_biking_tone2\"],\"🚵🏽‍♂️\":[\"man_mountain_biking_tone3\"],\"🚵🏾‍♂️\":[\"man_mountain_biking_tone4\"],\"🚵🏿‍♂️\":[\"man_mountain_biking_tone5\"],\"🚵🏻‍♀️\":[\"woman_mountain_biking_tone1\"],\"🚵🏼‍♀️\":[\"woman_mountain_biking_tone2\"],\"🚵🏽‍♀️\":[\"woman_mountain_biking_tone3\"],\"🚵🏾‍♀️\":[\"woman_mountain_biking_tone4\"],\"🚵🏿‍♀️\":[\"woman_mountain_biking_tone5\"],\"🤸🏻\":[\"person_cartwheel_tone1\"],\"🤸🏼\":[\"person_cartwheel_tone2\"],\"🤸🏽\":[\"person_cartwheel_tone3\"],\"🤸🏾\":[\"person_cartwheel_tone4\"],\"🤸🏿\":[\"person_cartwheel_tone5\"],\"🤸🏻‍♂️\":[\"man_cartwheeling_tone1\"],\"🤸🏼‍♂️\":[\"man_cartwheeling_tone2\"],\"🤸🏽‍♂️\":[\"man_cartwheeling_tone3\"],\"🤸🏾‍♂️\":[\"man_cartwheeling_tone4\"],\"🤸🏿‍♂️\":[\"man_cartwheeling_tone5\"],\"🤸🏻‍♀️\":[\"woman_cartwheeling_tone1\"],\"🤸🏼‍♀️\":[\"woman_cartwheeling_tone2\"],\"🤸🏽‍♀️\":[\"woman_cartwheeling_tone3\"],\"🤸🏾‍♀️\":[\"woman_cartwheeling_tone4\"],\"🤸🏿‍♀️\":[\"woman_cartwheeling_tone5\"],\"🤽🏻\":[\"person_water_polo_tone1\"],\"🤽🏼\":[\"person_water_polo_tone2\"],\"🤽🏽\":[\"person_water_polo_tone3\"],\"🤽🏾\":[\"person_water_polo_tone4\"],\"🤽🏿\":[\"person_water_polo_tone5\"],\"🤽🏻‍♂️\":[\"man_water_polo_tone1\"],\"🤽🏼‍♂️\":[\"man_water_polo_tone2\"],\"🤽🏽‍♂️\":[\"man_water_polo_tone3\"],\"🤽🏾‍♂️\":[\"man_water_polo_tone4\"],\"🤽🏿‍♂️\":[\"man_water_polo_tone5\"],\"🤽🏻‍♀️\":[\"woman_water_polo_tone1\"],\"🤽🏼‍♀️\":[\"woman_water_polo_tone2\"],\"🤽🏽‍♀️\":[\"woman_water_polo_tone3\"],\"🤽🏾‍♀️\":[\"woman_water_polo_tone4\"],\"🤽🏿‍♀️\":[\"woman_water_polo_tone5\"],\"🤾🏻\":[\"person_handball_tone1\"],\"🤾🏼\":[\"person_handball_tone2\"],\"🤾🏽\":[\"person_handball_tone3\"],\"🤾🏾\":[\"person_handball_tone4\"],\"🤾🏿\":[\"person_handball_tone5\"],\"🤾🏻‍♂️\":[\"man_handball_tone1\"],\"🤾🏼‍♂️\":[\"man_handball_tone2\"],\"🤾🏽‍♂️\":[\"man_handball_tone3\"],\"🤾🏾‍♂️\":[\"man_handball_tone4\"],\"🤾🏿‍♂️\":[\"man_handball_tone5\"],\"🤾🏻‍♀️\":[\"woman_handball_tone1\"],\"🤾🏼‍♀️\":[\"woman_handball_tone2\"],\"🤾🏽‍♀️\":[\"woman_handball_tone3\"],\"🤾🏾‍♀️\":[\"woman_handball_tone4\"],\"🤾🏿‍♀️\":[\"woman_handball_tone5\"],\"🤹🏻\":[\"person_juggling_tone1\"],\"🤹🏼\":[\"person_juggling_tone2\"],\"🤹🏽\":[\"person_juggling_tone3\"],\"🤹🏾\":[\"person_juggling_tone4\"],\"🤹🏿\":[\"person_juggling_tone5\"],\"🤹🏻‍♂️\":[\"man_juggling_tone1\"],\"🤹🏼‍♂️\":[\"man_juggling_tone2\"],\"🤹🏽‍♂️\":[\"man_juggling_tone3\"],\"🤹🏾‍♂️\":[\"man_juggling_tone4\"],\"🤹🏿‍♂️\":[\"man_juggling_tone5\"],\"🤹🏻‍♀️\":[\"woman_juggling_tone1\"],\"🤹🏼‍♀️\":[\"woman_juggling_tone2\"],\"🤹🏽‍♀️\":[\"woman_juggling_tone3\"],\"🤹🏾‍♀️\":[\"woman_juggling_tone4\"],\"🤹🏿‍♀️\":[\"woman_juggling_tone5\"],\"🧘🏻\":[\"person_lotus_position_tone1\"],\"🧘🏼\":[\"person_lotus_position_tone2\"],\"🧘🏽\":[\"person_lotus_position_tone3\"],\"🧘🏾\":[\"person_lotus_position_tone4\"],\"🧘🏿\":[\"person_lotus_position_tone5\"],\"🧘🏻‍♂️\":[\"man_lotus_position_tone1\"],\"🧘🏼‍♂️\":[\"man_lotus_position_tone2\"],\"🧘🏽‍♂️\":[\"man_lotus_position_tone3\"],\"🧘🏾‍♂️\":[\"man_lotus_position_tone4\"],\"🧘🏿‍♂️\":[\"man_lotus_position_tone5\"],\"🧘🏻‍♀️\":[\"woman_lotus_position_tone1\"],\"🧘🏼‍♀️\":[\"woman_lotus_position_tone2\"],\"🧘🏽‍♀️\":[\"woman_lotus_position_tone3\"],\"🧘🏾‍♀️\":[\"woman_lotus_position_tone4\"],\"🧘🏿‍♀️\":[\"woman_lotus_position_tone5\"],\"🛀🏻\":[\"bath_tone1\"],\"🛀🏼\":[\"bath_tone2\"],\"🛀🏽\":[\"bath_tone3\"],\"🛀🏾\":[\"bath_tone4\"],\"🛀🏿\":[\"bath_tone5\"],\"🛌🏻\":[\"in_bed_tone1\"],\"🛌🏼\":[\"in_bed_tone2\"],\"🛌🏽\":[\"in_bed_tone3\"],\"🛌🏾\":[\"in_bed_tone4\"],\"🛌🏿\":[\"in_bed_tone5\"],\"🧑🏻‍🤝‍🧑🏻\":[\"holding_hands_people_tone1\"],\"🧑🏻‍🤝‍🧑🏼\":[\"holding_hands_people_tone1-2\"],\"🧑🏻‍🤝‍🧑🏽\":[\"holding_hands_people_tone1-3\"],\"🧑🏻‍🤝‍🧑🏾\":[\"holding_hands_people_tone1-4\"],\"🧑🏻‍🤝‍🧑🏿\":[\"holding_hands_people_tone1-5\"],\"🧑🏼‍🤝‍🧑🏻\":[\"holding_hands_people_tone2-1\"],\"🧑🏼‍🤝‍🧑🏼\":[\"holding_hands_people_tone2\"],\"🧑🏼‍🤝‍🧑🏽\":[\"holding_hands_people_tone2-3\"],\"🧑🏼‍🤝‍🧑🏾\":[\"holding_hands_people_tone2-4\"],\"🧑🏼‍🤝‍🧑🏿\":[\"holding_hands_people_tone2-5\"],\"🧑🏽‍🤝‍🧑🏻\":[\"holding_hands_people_tone3-1\"],\"🧑🏽‍🤝‍🧑🏼\":[\"holding_hands_people_tone3-2\"],\"🧑🏽‍🤝‍🧑🏽\":[\"holding_hands_people_tone3\"],\"🧑🏽‍🤝‍🧑🏾\":[\"holding_hands_people_tone3-4\"],\"🧑🏽‍🤝‍🧑🏿\":[\"holding_hands_people_tone3-5\"],\"🧑🏾‍🤝‍🧑🏻\":[\"holding_hands_people_tone4-1\"],\"🧑🏾‍🤝‍🧑🏼\":[\"holding_hands_people_tone4-2\"],\"🧑🏾‍🤝‍🧑🏽\":[\"holding_hands_people_tone4-3\"],\"🧑🏾‍🤝‍🧑🏾\":[\"holding_hands_people_tone4\"],\"🧑🏾‍🤝‍🧑🏿\":[\"holding_hands_people_tone4-5\"],\"🧑🏿‍🤝‍🧑🏻\":[\"holding_hands_people_tone5-1\"],\"🧑🏿‍🤝‍🧑🏼\":[\"holding_hands_people_tone5-2\"],\"🧑🏿‍🤝‍🧑🏽\":[\"holding_hands_people_tone5-3\"],\"🧑🏿‍🤝‍🧑🏾\":[\"holding_hands_people_tone5-4\"],\"🧑🏿‍🤝‍🧑🏿\":[\"holding_hands_people_tone5\"],\"👭🏻\":[\"holding_hands_ww_tone1\"],\"👭🏼\":[\"holding_hands_ww_tone2\"],\"👭🏽\":[\"holding_hands_ww_tone3\"],\"👭🏾\":[\"holding_hands_ww_tone4\"],\"👭🏿\":[\"holding_hands_ww_tone5\"],\"👩🏻‍🤝‍👩🏼\":[\"holding_hands_ww_tone1-2\"],\"👩🏻‍🤝‍👩🏽\":[\"holding_hands_ww_tone1-3\"],\"👩🏻‍🤝‍👩🏾\":[\"holding_hands_ww_tone1-4\"],\"👩🏻‍🤝‍👩🏿\":[\"holding_hands_ww_tone1-5\"],\"👩🏼‍🤝‍👩🏻\":[\"holding_hands_ww_tone2-1\"],\"👩🏼‍🤝‍👩🏽\":[\"holding_hands_ww_tone2-3\"],\"👩🏼‍🤝‍👩🏾\":[\"holding_hands_ww_tone2-4\"],\"👩🏼‍🤝‍👩🏿\":[\"holding_hands_ww_tone2-5\"],\"👩🏽‍🤝‍👩🏻\":[\"holding_hands_ww_tone3-1\"],\"👩🏽‍🤝‍👩🏼\":[\"holding_hands_ww_tone3-2\"],\"👩🏽‍🤝‍👩🏾\":[\"holding_hands_ww_tone3-4\"],\"👩🏽‍🤝‍👩🏿\":[\"holding_hands_ww_tone3-5\"],\"👩🏾‍🤝‍👩🏻\":[\"holding_hands_ww_tone4-1\"],\"👩🏾‍🤝‍👩🏼\":[\"holding_hands_ww_tone4-2\"],\"👩🏾‍🤝‍👩🏽\":[\"holding_hands_ww_tone4-3\"],\"👩🏾‍🤝‍👩🏿\":[\"holding_hands_ww_tone4-5\"],\"👩🏿‍🤝‍👩🏻\":[\"holding_hands_ww_tone5-1\"],\"👩🏿‍🤝‍👩🏼\":[\"holding_hands_ww_tone5-2\"],\"👩🏿‍🤝‍👩🏽\":[\"holding_hands_ww_tone5-3\"],\"👩🏿‍🤝‍👩🏾\":[\"holding_hands_ww_tone5-4\"],\"👫🏻\":[\"holding_hands_mw_tone1\",\"holding_hands_wm_tone1\"],\"👫🏼\":[\"holding_hands_mw_tone2\",\"holding_hands_wm_tone2\"],\"👫🏽\":[\"holding_hands_mw_tone3\",\"holding_hands_wm_tone3\"],\"👫🏾\":[\"holding_hands_mw_tone4\",\"holding_hands_wm_tone4\"],\"👫🏿\":[\"holding_hands_mw_tone5\",\"holding_hands_wm_tone5\"],\"👩🏻‍🤝‍👨🏼\":[\"holding_hands_mw_tone1-2\",\"holding_hands_wm_tone1-2\"],\"👩🏻‍🤝‍👨🏽\":[\"holding_hands_mw_tone1-3\",\"holding_hands_wm_tone1-3\"],\"👩🏻‍🤝‍👨🏾\":[\"holding_hands_mw_tone1-4\",\"holding_hands_wm_tone1-4\"],\"👩🏻‍🤝‍👨🏿\":[\"holding_hands_mw_tone1-5\",\"holding_hands_wm_tone1-5\"],\"👩🏼‍🤝‍👨🏻\":[\"holding_hands_mw_tone2-1\",\"holding_hands_wm_tone2-1\"],\"👩🏼‍🤝‍👨🏽\":[\"holding_hands_mw_tone2-3\",\"holding_hands_wm_tone2-3\"],\"👩🏼‍🤝‍👨🏾\":[\"holding_hands_mw_tone2-4\",\"holding_hands_wm_tone2-4\"],\"👩🏼‍🤝‍👨🏿\":[\"holding_hands_mw_tone2-5\",\"holding_hands_wm_tone2-5\"],\"👩🏽‍🤝‍👨🏻\":[\"holding_hands_mw_tone3-1\",\"holding_hands_wm_tone3-1\"],\"👩🏽‍🤝‍👨🏼\":[\"holding_hands_mw_tone3-2\",\"holding_hands_wm_tone3-2\"],\"👩🏽‍🤝‍👨🏾\":[\"holding_hands_mw_tone3-4\",\"holding_hands_wm_tone3-4\"],\"👩🏽‍🤝‍👨🏿\":[\"holding_hands_mw_tone3-5\",\"holding_hands_wm_tone3-5\"],\"👩🏾‍🤝‍👨🏻\":[\"holding_hands_mw_tone4-1\",\"holding_hands_wm_tone4-1\"],\"👩🏾‍🤝‍👨🏼\":[\"holding_hands_mw_tone4-2\",\"holding_hands_wm_tone4-2\"],\"👩🏾‍🤝‍👨🏽\":[\"holding_hands_mw_tone4-3\",\"holding_hands_wm_tone4-3\"],\"👩🏾‍🤝‍👨🏿\":[\"holding_hands_mw_tone4-5\",\"holding_hands_wm_tone4-5\"],\"👩🏿‍🤝‍👨🏻\":[\"holding_hands_mw_tone5-1\",\"holding_hands_wm_tone5-1\"],\"👩🏿‍🤝‍👨🏼\":[\"holding_hands_mw_tone5-2\",\"holding_hands_wm_tone5-2\"],\"👩🏿‍🤝‍👨🏽\":[\"holding_hands_mw_tone5-3\",\"holding_hands_wm_tone5-3\"],\"👩🏿‍🤝‍👨🏾\":[\"holding_hands_mw_tone5-4\",\"holding_hands_wm_tone5-4\"],\"👬🏻\":[\"holding_hands_mm_tone1\"],\"👬🏼\":[\"holding_hands_mm_tone2\"],\"👬🏽\":[\"holding_hands_mm_tone3\"],\"👬🏾\":[\"holding_hands_mm_tone4\"],\"👬🏿\":[\"holding_hands_mm_tone5\"],\"👨🏻‍🤝‍👨🏼\":[\"holding_hands_mm_tone1-2\"],\"👨🏻‍🤝‍👨🏽\":[\"holding_hands_mm_tone1-3\"],\"👨🏻‍🤝‍👨🏾\":[\"holding_hands_mm_tone1-4\"],\"👨🏻‍🤝‍👨🏿\":[\"holding_hands_mm_tone1-5\"],\"👨🏼‍🤝‍👨🏻\":[\"holding_hands_mm_tone2-1\"],\"👨🏼‍🤝‍👨🏽\":[\"holding_hands_mm_tone2-3\"],\"👨🏼‍🤝‍👨🏾\":[\"holding_hands_mm_tone2-4\"],\"👨🏼‍🤝‍👨🏿\":[\"holding_hands_mm_tone2-5\"],\"👨🏽‍🤝‍👨🏻\":[\"holding_hands_mm_tone3-1\"],\"👨🏽‍🤝‍👨🏼\":[\"holding_hands_mm_tone3-2\"],\"👨🏽‍🤝‍👨🏾\":[\"holding_hands_mm_tone3-4\"],\"👨🏽‍🤝‍👨🏿\":[\"holding_hands_mm_tone3-5\"],\"👨🏾‍🤝‍👨🏻\":[\"holding_hands_mm_tone4-1\"],\"👨🏾‍🤝‍👨🏼\":[\"holding_hands_mm_tone4-2\"],\"👨🏾‍🤝‍👨🏽\":[\"holding_hands_mm_tone4-3\"],\"👨🏾‍🤝‍👨🏿\":[\"holding_hands_mm_tone4-5\"],\"👨🏿‍🤝‍👨🏻\":[\"holding_hands_mm_tone5-1\"],\"👨🏿‍🤝‍👨🏼\":[\"holding_hands_mm_tone5-2\"],\"👨🏿‍🤝‍👨🏽\":[\"holding_hands_mm_tone5-3\"],\"👨🏿‍🤝‍👨🏾\":[\"holding_hands_mm_tone5-4\"]}");

/***/ }),

/***/ "./node_modules/simple-emoji-map/index.mjs":
/*!*************************************************!*\
  !*** ./node_modules/simple-emoji-map/index.mjs ***!
  \*************************************************/
/*! exports provided: default, variants */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generated_emojis_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generated/emojis.json */ "./node_modules/simple-emoji-map/generated/emojis.json");
var _generated_emojis_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./generated/emojis.json */ "./node_modules/simple-emoji-map/generated/emojis.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _generated_emojis_json__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _generated_variants_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generated/variants.json */ "./node_modules/simple-emoji-map/generated/variants.json");
var _generated_variants_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./generated/variants.json */ "./node_modules/simple-emoji-map/generated/variants.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "variants", function() { return _generated_variants_json__WEBPACK_IMPORTED_MODULE_1__; });





/***/ }),

/***/ "./node_modules/twemoji/dist/twemoji.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/twemoji/dist/twemoji.esm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*! Copyright Twitter Inc. and other contributors. Licensed under MIT */
var twemoji = function () {
  "use strict";

  var twemoji = {
    base: "https://twemoji.maxcdn.com/v/13.1.0/",
    ext: ".png",
    size: "72x72",
    className: "emoji",
    convert: {
      fromCodePoint: fromCodePoint,
      toCodePoint: toCodePoint
    },
    onerror: function onerror() {
      if (this.parentNode) {
        this.parentNode.replaceChild(createText(this.alt, false), this);
      }
    },
    parse: parse,
    replace: replace,
    test: test
  },
      escaper = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  },
      re = /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udeeb\udeec\udef4-\udefc\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78\udd7a-\uddb4\uddb7\uddba\uddbc-\uddcb\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,
      UFE0Fg = /\uFE0F/g,
      U200D = String.fromCharCode(8205),
      rescaper = /[&<>'"]/g,
      shouldntBeParsed = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/,
      fromCharCode = String.fromCharCode;
  return twemoji;

  function createText(text, clean) {
    return document.createTextNode(clean ? text.replace(UFE0Fg, "") : text);
  }

  function escapeHTML(s) {
    return s.replace(rescaper, replacer);
  }

  function defaultImageSrcGenerator(icon, options) {
    return "".concat(options.base, options.size, "/", icon, options.ext);
  }

  function grabAllTextNodes(node, allText) {
    var childNodes = node.childNodes,
        length = childNodes.length,
        subnode,
        nodeType;

    while (length--) {
      subnode = childNodes[length];
      nodeType = subnode.nodeType;

      if (nodeType === 3) {
        allText.push(subnode);
      } else if (nodeType === 1 && !("ownerSVGElement" in subnode) && !shouldntBeParsed.test(subnode.nodeName.toLowerCase())) {
        grabAllTextNodes(subnode, allText);
      }
    }

    return allText;
  }

  function grabTheRightIcon(rawText) {
    return toCodePoint(rawText.indexOf(U200D) < 0 ? rawText.replace(UFE0Fg, "") : rawText);
  }

  function parseNode(node, options) {
    var allText = grabAllTextNodes(node, []),
        length = allText.length,
        attrib,
        attrname,
        modified,
        fragment,
        subnode,
        text,
        match,
        i,
        index,
        img,
        rawText,
        iconId,
        src;

    while (length--) {
      modified = false;
      fragment = document.createDocumentFragment();
      subnode = allText[length];
      text = subnode.nodeValue;
      i = 0;

      while (match = re.exec(text)) {
        index = match.index;

        if (index !== i) {
          fragment.appendChild(createText(text.slice(i, index), true));
        }

        rawText = match[0];
        iconId = grabTheRightIcon(rawText);
        i = index + rawText.length;
        src = options.callback(iconId, options);

        if (iconId && src) {
          img = new Image();
          img.onerror = options.onerror;
          img.setAttribute("draggable", "false");
          attrib = options.attributes(rawText, iconId);

          for (attrname in attrib) {
            if (attrib.hasOwnProperty(attrname) && attrname.indexOf("on") !== 0 && !img.hasAttribute(attrname)) {
              img.setAttribute(attrname, attrib[attrname]);
            }
          }

          img.className = options.className;
          img.alt = rawText;
          img.src = src;
          modified = true;
          fragment.appendChild(img);
        }

        if (!img) fragment.appendChild(createText(rawText, false));
        img = null;
      }

      if (modified) {
        if (i < text.length) {
          fragment.appendChild(createText(text.slice(i), true));
        }

        subnode.parentNode.replaceChild(fragment, subnode);
      }
    }

    return node;
  }

  function parseString(str, options) {
    return replace(str, function (rawText) {
      var ret = rawText,
          iconId = grabTheRightIcon(rawText),
          src = options.callback(iconId, options),
          attrib,
          attrname;

      if (iconId && src) {
        ret = "<img ".concat('class="', options.className, '" ', 'draggable="false" ', 'alt="', rawText, '"', ' src="', src, '"');
        attrib = options.attributes(rawText, iconId);

        for (attrname in attrib) {
          if (attrib.hasOwnProperty(attrname) && attrname.indexOf("on") !== 0 && ret.indexOf(" " + attrname + "=") === -1) {
            ret = ret.concat(" ", attrname, '="', escapeHTML(attrib[attrname]), '"');
          }
        }

        ret = ret.concat("/>");
      }

      return ret;
    });
  }

  function replacer(m) {
    return escaper[m];
  }

  function returnNull() {
    return null;
  }

  function toSizeSquaredAsset(value) {
    return typeof value === "number" ? value + "x" + value : value;
  }

  function fromCodePoint(codepoint) {
    var code = typeof codepoint === "string" ? parseInt(codepoint, 16) : codepoint;

    if (code < 65536) {
      return fromCharCode(code);
    }

    code -= 65536;
    return fromCharCode(55296 + (code >> 10), 56320 + (code & 1023));
  }

  function parse(what, how) {
    if (!how || typeof how === "function") {
      how = {
        callback: how
      };
    }

    return (typeof what === "string" ? parseString : parseNode)(what, {
      callback: how.callback || defaultImageSrcGenerator,
      attributes: typeof how.attributes === "function" ? how.attributes : returnNull,
      base: typeof how.base === "string" ? how.base : twemoji.base,
      ext: how.ext || twemoji.ext,
      size: how.folder || toSizeSquaredAsset(how.size || twemoji.size),
      className: how.className || twemoji.className,
      onerror: how.onerror || twemoji.onerror
    });
  }

  function replace(text, callback) {
    return String(text).replace(re, callback);
  }

  function test(text) {
    re.lastIndex = 0;
    var result = re.test(text);
    re.lastIndex = 0;
    return result;
  }

  function toCodePoint(unicodeSurrogates, sep) {
    var r = [],
        c = 0,
        p = 0,
        i = 0;

    while (i < unicodeSurrogates.length) {
      c = unicodeSurrogates.charCodeAt(i++);

      if (p) {
        r.push((65536 + (p - 55296 << 10) + (c - 56320)).toString(16));
        p = 0;
      } else if (55296 <= c && c <= 56319) {
        p = c;
      } else {
        r.push(c.toString(16));
      }
    }

    return r.join(sep || "-");
  }
}();

/* harmony default export */ __webpack_exports__["default"] = (twemoji);

/***/ }),

/***/ "./src/forum/addComposerAutocomplete.js":
/*!**********************************************!*\
  !*** ./src/forum/addComposerAutocomplete.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addComposerAutocomplete; });
/* harmony import */ var simple_emoji_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-emoji-map */ "./node_modules/simple-emoji-map/index.mjs");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/TextEditor */ "flarum/common/components/TextEditor");
/* harmony import */ var flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/TextEditorButton */ "flarum/common/components/TextEditorButton");
/* harmony import */ var flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_forum_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/forum/utils/KeyboardNavigatable */ "flarum/forum/utils/KeyboardNavigatable");
/* harmony import */ var flarum_forum_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fragments_AutocompleteDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fragments/AutocompleteDropdown */ "./src/forum/fragments/AutocompleteDropdown.js");
/* harmony import */ var _helpers_getEmojiIconCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/getEmojiIconCode */ "./src/forum/helpers/getEmojiIconCode.js");
/* harmony import */ var _cdn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cdn */ "./src/forum/cdn.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }









function addComposerAutocomplete() {
  var emojiKeys = Object.keys(simple_emoji_map__WEBPACK_IMPORTED_MODULE_0__["default"]);
  var $container = $('<div class="ComposerBody-emojiDropdownContainer"></div>');
  var dropdown = new _fragments_AutocompleteDropdown__WEBPACK_IMPORTED_MODULE_5__["default"]();
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'oncreate', function () {
    var $editor = this.$('.TextEditor-editor').wrap('<div class="ComposerBody-emojiWrapper"></div>');
    this.navigator = new flarum_forum_utils_KeyboardNavigatable__WEBPACK_IMPORTED_MODULE_4___default.a();
    this.navigator.when(function () {
      return dropdown.active;
    }).onUp(function () {
      return dropdown.navigate(-1);
    }).onDown(function () {
      return dropdown.navigate(1);
    }).onSelect(dropdown.complete.bind(dropdown)).onCancel(dropdown.hide.bind(dropdown)).bindTo($editor);
    $editor.after($container);
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'buildEditorParams', function (params) {
    var _this = this;

    var relEmojiStart;
    var absEmojiStart;
    var typed;

    var applySuggestion = function applySuggestion(replacement) {
      _this.attrs.composer.editor.replaceBeforeCursor(absEmojiStart - 1, replacement + ' ');

      dropdown.hide();
    };

    params.inputListeners.push(function (e) {
      var selection = app.composer.editor.getSelectionRange();
      var cursor = selection[0];
      if (selection[1] - cursor > 0) return; // Search backwards from the cursor for an ':' symbol. If we find
      // one and followed by a whitespace, we will want to show the
      // autocomplete dropdown!

      var lastChunk = app.composer.editor.getLastNChars(15);
      absEmojiStart = 0;

      for (var i = lastChunk.length - 1; i >= 0; i--) {
        var character = lastChunk.substr(i, 1); // check what user typed, emoji names only contains alphanumeric,
        // underline, '+' and '-'

        if (!/[a-z0-9]|\+|\-|_|\:/.test(character)) break; // make sure ':' preceded by a whitespace or newline

        if (character === ':' && (i == 0 || /\s/.test(lastChunk.substr(i - 1, 1)))) {
          relEmojiStart = i + 1;
          absEmojiStart = cursor - lastChunk.length + i + 1;
          break;
        }
      }

      dropdown.hide();
      dropdown.active = false;

      if (absEmojiStart) {
        typed = lastChunk.substring(relEmojiStart).toLowerCase();

        var makeSuggestion = function makeSuggestion(_ref) {
          var emoji = _ref.emoji,
              name = _ref.name,
              code = _ref.code;
          return m("button", {
            key: emoji,
            onclick: function onclick() {
              return applySuggestion(emoji);
            },
            onmouseenter: function onmouseenter() {
              dropdown.setIndex($(this).parent().index() - 1);
            }
          }, m("img", {
            alt: emoji,
            "class": "emoji",
            draggable: "false",
            loading: "lazy",
            src: _cdn__WEBPACK_IMPORTED_MODULE_7__["default"] + "72x72/" + code + ".png"
          }), name);
        };

        var buildSuggestions = function buildSuggestions() {
          var similarEmoji = []; // Build a regular expression to do a fuzzy match of the given input string

          var fuzzyRegexp = function fuzzyRegexp(str) {
            var reEscape = new RegExp('\\(([' + '+.*?[]{}()^$|\\'.replace(/(.)/g, '\\$1') + '])\\)', 'g');
            return new RegExp('(.*)' + str.toLowerCase().replace(/(.)/g, '($1)(.*?)').replace(reEscape, '(\\$1)') + '$', 'i');
          };

          var regTyped = fuzzyRegexp(typed);
          var maxSuggestions = 7;

          var findMatchingEmojis = function findMatchingEmojis(matcher) {
            for (var _i = 0; _i < emojiKeys.length && maxSuggestions > 0; _i++) {
              var curEmoji = emojiKeys[_i];

              if (similarEmoji.indexOf(curEmoji) === -1) {
                var names = simple_emoji_map__WEBPACK_IMPORTED_MODULE_0__["default"][curEmoji];

                for (var _iterator = _createForOfIteratorHelperLoose(names), _step; !(_step = _iterator()).done;) {
                  var name = _step.value;

                  if (matcher(name)) {
                    --maxSuggestions;
                    similarEmoji.push(curEmoji);
                    break;
                  }
                }
              }
            }
          }; // First, try to find all emojis starting with the given string


          findMatchingEmojis(function (emoji) {
            return emoji.indexOf(typed) === 0;
          }); // If there are still suggestions left, try for some fuzzy matches

          findMatchingEmojis(function (emoji) {
            return regTyped.test(emoji);
          });
          var suggestions = similarEmoji.map(function (emoji) {
            return {
              emoji: emoji,
              name: simple_emoji_map__WEBPACK_IMPORTED_MODULE_0__["default"][emoji][0],
              code: Object(_helpers_getEmojiIconCode__WEBPACK_IMPORTED_MODULE_6__["default"])(emoji)
            };
          }).map(makeSuggestion);

          if (suggestions.length) {
            dropdown.items = suggestions;
            m.render($container[0], dropdown.render());
            dropdown.show();
            var coordinates = app.composer.editor.getCaretCoordinates(absEmojiStart);
            var width = dropdown.$().outerWidth();
            var height = dropdown.$().outerHeight();
            var parent = dropdown.$().offsetParent();
            var left = coordinates.left;
            var top = coordinates.top + 15; // Keep the dropdown inside the editor.

            if (top + height > parent.height()) {
              top = coordinates.top - height - 15;
            }

            if (left + width > parent.width()) {
              left = parent.width() - width;
            } // Prevent the dropdown from going off screen on mobile


            top = Math.max(-(parent.offset().top - $(document).scrollTop()), top);
            left = Math.max(-parent.offset().left, left);
            dropdown.show(left, top);
          }
        };

        buildSuggestions();
        dropdown.setIndex(0);
        dropdown.$().scrollTop(0);
        dropdown.active = true;
      }
    });
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_common_components_TextEditor__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'toolbarItems', function (items) {
    var _this2 = this;

    items.add('emoji', m(flarum_common_components_TextEditorButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
      onclick: function onclick() {
        return _this2.attrs.composer.editor.insertAtCursor(' :');
      },
      icon: "far fa-smile"
    }, app.translator.trans('flarum-emoji.forum.composer.emoji_tooltip')));
  });
}

/***/ }),

/***/ "./src/forum/cdn.js":
/*!**************************!*\
  !*** ./src/forum/cdn.js ***!
  \**************************/
/*! exports provided: version, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var twemoji__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twemoji */ "./node_modules/twemoji/dist/twemoji.esm.js");

var version = /([0-9]+).[0-9]+.[0-9]+/g.exec(twemoji__WEBPACK_IMPORTED_MODULE_0__["default"].base)[1];
var baseUrl = window.location.origin;
/* harmony default export */ __webpack_exports__["default"] = (baseUrl + "/assets/extensions/romanshul-emoji/");

/***/ }),

/***/ "./src/forum/fragments/AutocompleteDropdown.js":
/*!*****************************************************!*\
  !*** ./src/forum/fragments/AutocompleteDropdown.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AutocompleteDropdown; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_common_Fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/Fragment */ "flarum/common/Fragment");
/* harmony import */ var flarum_common_Fragment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Fragment__WEBPACK_IMPORTED_MODULE_1__);



var AutocompleteDropdown = /*#__PURE__*/function (_Fragment) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AutocompleteDropdown, _Fragment);

  function AutocompleteDropdown() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Fragment.call.apply(_Fragment, [this].concat(args)) || this;
    _this.items = [];
    _this.active = false;
    _this.index = 0;
    _this.keyWasJustPressed = false;
    return _this;
  }

  var _proto = AutocompleteDropdown.prototype;

  _proto.view = function view() {
    return m("ul", {
      className: "Dropdown-menu EmojiDropdown"
    }, m("li", {
      className: "Dropdown-header"
    }, app.translator.trans('flarum-emoji.forum.composer.type_to_search_text')), this.items.map(function (item) {
      return m("li", {
        key: item.attrs.key
      }, item);
    }));
  };

  _proto.show = function show(left, top) {
    this.$().show().css({
      left: left + 'px',
      top: top + 'px'
    });
    this.active = true;
  };

  _proto.hide = function hide() {
    this.$().hide();
    this.active = false;
  };

  _proto.navigate = function navigate(delta) {
    var _this2 = this;

    this.keyWasJustPressed = true;
    this.setIndex(this.index + delta, true);
    clearTimeout(this.keyWasJustPressedTimeout);
    this.keyWasJustPressedTimeout = setTimeout(function () {
      return _this2.keyWasJustPressed = false;
    }, 500);
  };

  _proto.complete = function complete() {
    this.$('li:not(.Dropdown-header)').eq(this.index).find('button').click();
  };

  _proto.setIndex = function setIndex(index, scrollToItem) {
    if (this.keyWasJustPressed && !scrollToItem) return;
    var $dropdown = this.$();
    var $items = $dropdown.find('li:not(.Dropdown-header)');
    var rangedIndex = index;

    if (rangedIndex < 0) {
      rangedIndex = $items.length - 1;
    } else if (rangedIndex >= $items.length) {
      rangedIndex = 0;
    }

    this.index = rangedIndex;
    var $item = $items.removeClass('active').eq(rangedIndex).addClass('active');

    if (scrollToItem) {
      var dropdownScroll = $dropdown.scrollTop();
      var dropdownTop = $dropdown.offset().top;
      var dropdownBottom = dropdownTop + $dropdown.outerHeight();
      var itemTop = $item.offset().top;
      var itemBottom = itemTop + $item.outerHeight();
      var scrollTop;

      if (itemTop < dropdownTop) {
        scrollTop = dropdownScroll - dropdownTop + itemTop - parseInt($dropdown.css('padding-top'), 10);
      } else if (itemBottom > dropdownBottom) {
        scrollTop = dropdownScroll - dropdownBottom + itemBottom + parseInt($dropdown.css('padding-bottom'), 10);
      }

      if (typeof scrollTop !== 'undefined') {
        $dropdown.stop(true).animate({
          scrollTop: scrollTop
        }, 100);
      }
    }
  };

  return AutocompleteDropdown;
}(flarum_common_Fragment__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/helpers/getEmojiIconCode.js":
/*!***********************************************!*\
  !*** ./src/forum/helpers/getEmojiIconCode.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getEmojiIconCode; });
/* harmony import */ var twemoji__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twemoji */ "./node_modules/twemoji/dist/twemoji.esm.js");
/*! Copyright Twitter Inc. and other contributors. Licensed under MIT */

/*
https://github.com/twitter/twemoji/blob/gh-pages/LICENSE
*/
 // avoid using a string literal like '\u200D' here because minifiers expand it inline

var U200D = String.fromCharCode(0x200d); // avoid runtime RegExp creation for not so smart,
// not JIT based, and old browsers / engines

var UFE0Fg = /\uFE0F/g;
/**
 * Used to both remove the possible variant
 *  and to convert utf16 into code points.
 *  If there is a zero-width-joiner (U+200D), leave the variants in.
 * @param   string    the raw text of the emoji match
 * @return  string    the code point
 */

function getEmojiIconCode(emoji) {
  return twemoji__WEBPACK_IMPORTED_MODULE_0__["default"].convert.toCodePoint(emoji.indexOf(U200D) < 0 ? emoji.replace(UFE0Fg, '') : emoji);
}

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _addComposerAutocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addComposerAutocomplete */ "./src/forum/addComposerAutocomplete.js");
/* harmony import */ var _renderEmoji__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderEmoji */ "./src/forum/renderEmoji.js");



flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('flarum-emoji', function () {
  // After typing ':' in the composer, show a dropdown suggesting a bunch of
  // emoji that the user could use.
  Object(_addComposerAutocomplete__WEBPACK_IMPORTED_MODULE_1__["default"])(); // render emoji as image in Posts content and title.

  Object(_renderEmoji__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/forum/renderEmoji.js":
/*!**********************************!*\
  !*** ./src/forum/renderEmoji.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderEmoji; });
/* harmony import */ var twemoji__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! twemoji */ "./node_modules/twemoji/dist/twemoji.esm.js");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/models/Post */ "flarum/common/models/Post");
/* harmony import */ var flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cdn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cdn */ "./src/forum/cdn.js");




var options = {
  base: _cdn__WEBPACK_IMPORTED_MODULE_3__["default"],
  attributes: function attributes() {
    return {
      loading: 'lazy'
    };
  }
};
/**
 * Parses an HTML string into a `<body>` node containing the HTML content.
 *
 * Vanilla JS implementation of jQuery's `$.parseHTML()`,
 * sourced from http://youmightnotneedjquery.com/
 */

function parseHTML(str) {
  var tmp = document.implementation.createHTMLDocument();
  tmp.body.innerHTML = str;
  return tmp.body;
}

function renderEmoji() {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["override"])(flarum_common_models_Post__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'contentHtml', function (original) {
    var contentHtml = original();

    if (this.oldContentHtml !== contentHtml) {
      // We need to parse the HTML string into a DOM node, then give it to Twemoji.
      //
      // This prevents some issues with the default find-replace that would be performed
      // on a string passed to `Twemoji.parse()`.
      //
      // The parse function can only handle a single DOM node provided, so we need to
      // wrap it in a node. In our `parseHTML` implementation, we wrap it in a `<body>`
      // element. This gets stripped below.
      //
      // See https://github.com/flarum/core/issues/2958
      var emojifiedDom = twemoji__WEBPACK_IMPORTED_MODULE_0__["default"].parse(parseHTML(contentHtml), options); // Steal the HTML string inside the emojified DOM `<body>` tag.

      this.emojifiedContentHtml = emojifiedDom.innerHTML;
      this.oldContentHtml = contentHtml;
    }

    return this.emojifiedContentHtml;
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["override"])(s9e.TextFormatter, 'preview', function (original, text, element) {
    original(text, element);
    twemoji__WEBPACK_IMPORTED_MODULE_0__["default"].parse(element, options);
  });
}

/***/ }),

/***/ "flarum/common/Fragment":
/*!********************************************************!*\
  !*** external "flarum.core.compat['common/Fragment']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/Fragment'];

/***/ }),

/***/ "flarum/common/components/TextEditor":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['common/components/TextEditor']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/TextEditor'];

/***/ }),

/***/ "flarum/common/components/TextEditorButton":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/TextEditorButton']" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/TextEditorButton'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/models/Post":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['common/models/Post']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/models/Post'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/utils/KeyboardNavigatable":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['forum/utils/KeyboardNavigatable']" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/utils/KeyboardNavigatable'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map