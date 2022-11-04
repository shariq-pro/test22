"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Modal = _interopRequireDefault(require("react-bootstrap/Modal"));
var _reactBootstrap = require("react-bootstrap");
var _Col = _interopRequireDefault(require("react-bootstrap/Col"));
var _Nav = _interopRequireDefault(require("react-bootstrap/Nav"));
var _Row = _interopRequireDefault(require("react-bootstrap/Row"));
var _Tab = _interopRequireDefault(require("react-bootstrap/Tab"));
var _walletlinkConnector = require("@web3-react/walletlink-connector");
var _walletconnectConnector = require("@web3-react/walletconnect-connector");
var _injectedConnector = require("@web3-react/injected-connector");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _metamask = _interopRequireDefault(require("../Assests/wallet_logo/metamask.svg"));
var _coinbase = _interopRequireDefault(require("../Assests/wallet_logo/coinbase.svg"));
var _walletconnect = _interopRequireDefault(require("../Assests/wallet_logo/walletconnect.svg"));
var _img_ = _interopRequireDefault(require("../Assests/img_1.svg"));
var _img_2 = _interopRequireDefault(require("../Assests/img_2.svg"));
var _wallet_qr = _interopRequireDefault(require("../Assests/wallet_qr.png"));
var _coinbase_qr = _interopRequireDefault(require("../Assests/coinbase_qr.png"));
require("./Wallet.scss");
var _core = require("@web3-react/core");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Walletmodal(props) {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useWeb3React = (0, _core.useWeb3React)(),
    active = _useWeb3React.active,
    chainId = _useWeb3React.chainId,
    account = _useWeb3React.account,
    library = _useWeb3React.library,
    connector = _useWeb3React.connector,
    provider = _useWeb3React.provider,
    activate = _useWeb3React.activate,
    deactivate = _useWeb3React.deactivate,
    error = _useWeb3React.error;
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    balance = _useState4[0],
    setBalance = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    wallet_account = _useState6[0],
    set_wallet_account = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    wallet_install = _useState8[0],
    set_wallet_install = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    wallet_msg = _useState10[0],
    set_wallet_msg = _useState10[1];
  // const contractAbi = require("../Json/ContractAbi.json");
  var contractAddress = "0xBBdBd5576BaBE447E5363BfdC5e2E21C875E8a63";
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    load = _useState12[0],
    setLoad = _useState12[1];
  (0, _react.useEffect)(function () {
    setLoad(true);
    console.log('active', active, chainId, account, library, connector, provider, localStorage.getItem('eth_bal'));
    get_current_account_details(props);
    setLoad(false);
  }, [active]);
  (0, _react.useEffect)(function () {
    set_wallet_msg(null);
    if (error) {
      set_wallet_msg(null);
      var err = error;
      set_wallet_msg(err.message);
    }
  }, [error]);
  var get_current_account_details = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(props) {
      var acc, _balance;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('props props ', props);
              if (!window.ethereum) {
                _context.next = 19;
                break;
              }
              if (!active) {
                _context.next = 17;
                break;
              }
              setLoad(true);
              _context.next = 6;
              return connector.getAccount();
            case 6:
              acc = _context.sent;
              _context.next = 9;
              return library.getBalance(acc);
            case 9:
              _balance = _context.sent;
              setBalance(_balance / 1e18);
              set_wallet_account(acc);
              props.func(acc);
              localStorage.setItem('eth_bal', _balance / 1e18);
              setLoad(false);
              console.log('acc', acc);
              console.log('balance', _balance / 1e18);
            case 17:
              _context.next = 21;
              break;
            case 19:
              console.log('false');
              set_wallet_install(false);
            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return function get_current_account_details(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var injected = new _injectedConnector.InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42, 61, 137, 1337, 80001]
  });
  var CoinbaseWallet = new _walletlinkConnector.WalletLinkConnector({
    url: "https://polygon-mumbai.g.alchemy.com/v2/7r5JXbmB3DQ8Xj0fKXX58DBna9EJNX4p",
    appName: "Web3-react Demo",
    qrcode: true,
    supportedChainIds: [1, 3, 4, 5, 42]
  });
  var WalletConnect1 = new _walletconnectConnector.WalletConnectConnector({
    rpcUrl: "https://polygon-mumbai.g.alchemy.com/v2/7r5JXbmB3DQ8Xj0fKXX58DBna9EJNX4p",
    bridge: "https://bridge.walletconnect.org",
    appName: "Web3-react Demo",
    qrcode: true,
    supportedChainIds: [1, 3, 4, 5, 42, 61, 137, 1337, 80001]
  });
  var connectMetamask = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              set_wallet_msg(null);
              _context2.prev = 1;
              if (!window.ethereum) {
                _context2.next = 22;
                break;
              }
              set_wallet_install(true);
              if (!window.ethereum.isMetaMask) {
                _context2.next = 19;
                break;
              }
              localStorage.setItem('check_disconnect', false);
              setLoad(true);
              console.log('connecting to metamask', window.ethereum);
              _context2.prev = 8;
              _context2.next = 11;
              return activate(injected);
            case 11:
              set_wallet_install(true);
              _context2.next = 18;
              break;
            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](8);
              set_wallet_install(false);
              console.log('😥', _context2.t0.message);
            case 18:
              setLoad(false);
            case 19:
              if (!window.ethereum.isMetaMask) {
                set_wallet_install(false);
                console.log('😥 Metamask Not install');
              }
              _context2.next = 23;
              break;
            case 22:
              set_wallet_install(false);
            case 23:
              _context2.next = 28;
              break;
            case 25:
              _context2.prev = 25;
              _context2.t1 = _context2["catch"](1);
              console.log('😥', _context2.t1.message);
            case 28:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 25], [8, 14]]);
    }));
    return function connectMetamask() {
      return _ref2.apply(this, arguments);
    };
  }();
  var connectCoinbase = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              set_wallet_msg(null);
              setLoad(true);
              _context3.prev = 2;
              localStorage.setItem('check_disconnect', false);
              _context3.next = 6;
              return activate(CoinbaseWallet);
            case 6:
              _context3.next = 11;
              break;
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](2);
              console.log('not connected to coinbase ', _context3.t0);
            case 11:
              console.log('wallet_install', wallet_install);
            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 8]]);
    }));
    return function connectCoinbase() {
      return _ref3.apply(this, arguments);
    };
  }();
  var connectWalletconnect = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              set_wallet_msg(null);
              setLoad(true);
              console.log('connecting to Walletconnect');
              _context4.prev = 3;
              localStorage.setItem('check_disconnect', false);
              _context4.next = 7;
              return activate(WalletConnect1);
            case 7:
              _context4.next = 12;
              break;
            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](3);
              console.log('not connected to WalletConnect ', _context4.t0);
            case 12:
              console.log('wallet_install', wallet_install);
              setLoad(false);
            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[3, 9]]);
    }));
    return function connectWalletconnect() {
      return _ref4.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react.default.createElement(_Modal.default, _extends({}, props, {
    size: "lg",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }), /*#__PURE__*/_react.default.createElement(_Modal.default.Body, {
    className: "p-1"
  }, /*#__PURE__*/_react.default.createElement(_Tab.default.Container, {
    id: "left-tabs-example ",
    defaultActiveKey: "profile"
  }, /*#__PURE__*/_react.default.createElement(_Row.default, {
    className: "p-1 h-100"
  }, /*#__PURE__*/_react.default.createElement(_Col.default, {
    sm: 4,
    className: "border_grey"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "wallet_heading_container"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "wallet_heading"
  }, "Connect a Wallet  ")), /*#__PURE__*/_react.default.createElement(_Nav.default, {
    variant: "pills",
    className: "flex-column"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "wallet_popular"
  }, "Popular"), /*#__PURE__*/_react.default.createElement(_Nav.default.Item, null, /*#__PURE__*/_react.default.createElement(_Nav.default.Link, {
    eventKey: "MetaMask",
    onClick: function onClick() {
      connectMetamask();
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _metamask.default,
    className: "margin_right"
  }), " MetaMask")), /*#__PURE__*/_react.default.createElement(_Nav.default.Item, null, /*#__PURE__*/_react.default.createElement(_Nav.default.Link, {
    eventKey: "Coinbase",
    onClick: function onClick() {
      connectCoinbase();
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _coinbase.default,
    className: "margin_right"
  }), " Coinbase Wallet")), /*#__PURE__*/_react.default.createElement(_Nav.default.Item, null, /*#__PURE__*/_react.default.createElement(_Nav.default.Link, {
    eventKey: "WalletConnect",
    onClick: function onClick() {
      connectWalletconnect();
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _walletconnect.default,
    className: "margin_right"
  }), " WalletConnect")))), /*#__PURE__*/_react.default.createElement(_Col.default, {
    sm: 8
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "wallet_heading_container"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "wallet_heading"
  }, " ", /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faClose,
    onClick: props.onHide,
    className: "wallet_close_icon"
  }))), /*#__PURE__*/_react.default.createElement(_Tab.default.Content, null, /*#__PURE__*/_react.default.createElement(_Tab.default.Pane, {
    eventKey: "profile"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
    className: "modal_inner_container"
  }, /*#__PURE__*/_react.default.createElement(_Row.default, null, /*#__PURE__*/_react.default.createElement(_Col.default, {
    className: "modal_inner_main_heading"
  }, /*#__PURE__*/_react.default.createElement("span", null, "What is a Wallet?"))), /*#__PURE__*/_react.default.createElement(_Row.default, null, /*#__PURE__*/_react.default.createElement(_Col.default, {
    md: 2
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "modal_inner_img",
    src: _img_.default
  })), /*#__PURE__*/_react.default.createElement(_Col.default, {
    md: 10
  }, /*#__PURE__*/_react.default.createElement(_Row.default, null, /*#__PURE__*/_react.default.createElement(_Col.default, {
    md: 12,
    className: "modal_inner_sub_heading"
  }, /*#__PURE__*/_react.default.createElement("span", null, "A Home for your Digital Assets")), /*#__PURE__*/_react.default.createElement(_Col.default, {
    md: 12,
    className: "modal_inner_sub_text"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."))))), /*#__PURE__*/_react.default.createElement(_Row.default, {
    className: "pt-4"
  }, /*#__PURE__*/_react.default.createElement(_Col.default, {
    md: 2
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "modal_inner_img",
    src: _img_2.default
  })), /*#__PURE__*/_react.default.createElement(_Col.default, {
    md: 10
  }, /*#__PURE__*/_react.default.createElement(_Row.default, null, /*#__PURE__*/_react.default.createElement(_Col.default, {
    md: 12,
    className: "modal_inner_sub_heading"
  }, /*#__PURE__*/_react.default.createElement("span", null, "A New Way to Log In")), /*#__PURE__*/_react.default.createElement(_Col.default, {
    md: 12,
    className: "modal_inner_sub_text"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Instead of creating new accounts and passwords on every website, just connect your wallet."))))))), /*#__PURE__*/_react.default.createElement(_Tab.default.Pane, {
    eventKey: "MetaMask"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
    className: "modal_inner_container"
  }, wallet_install ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Row.default, {
    className: "pt-4 text-center"
  }, /*#__PURE__*/_react.default.createElement(_Col.default, {
    md: 12,
    className: "metamask_modal_text"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "metamask_modal_img",
    src: _metamask.default
  })), /*#__PURE__*/_react.default.createElement(_Col.default, {
    md: 12
  }, /*#__PURE__*/_react.default.createElement(_Row.default, {
    className: "pt-4"
  }, /*#__PURE__*/_react.default.createElement(_Col.default, {
    md: 12
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "metamask_modal_inner_text"
  }, "Opening MetaMask")), /*#__PURE__*/_react.default.createElement(_Col.default, {
    md: 12,
    className: "pt-2"
  }, wallet_msg !== null ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "metamask_modal_subtext"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faClose,
    style: {
      color: 'red',
      fontSize: '25px'
    }
  }), " ", wallet_msg)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, " ", /*#__PURE__*/_react.default.createElement("span", {
    className: "metamask_modal_subtext"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faSpinner,
    onClick: props.onHide,
    className: "fa-spin"
  }), " Waiting for connection"))))))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Row.default, {
    className: "pt-4 text-center"
  }, /*#__PURE__*/_react.default.createElement(_Col.default, {
    md: 12,
    className: "metamask_modal_text"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "metamask_modal_img",
    src: _metamask.default
  })), /*#__PURE__*/_react.default.createElement(_Col.default, {
    md: 12
  }, /*#__PURE__*/_react.default.createElement(_Row.default, {
    className: "pt-4"
  }, /*#__PURE__*/_react.default.createElement(_Col.default, {
    md: 12
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "metamask_modal_inner_text"
  }, "MetaMask is not installed")), /*#__PURE__*/_react.default.createElement(_Col.default, {
    md: 12,
    className: "pt-2"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "metamask_modal_subtext"
  }, "The MetaMask extension is not installed in your browser")), /*#__PURE__*/_react.default.createElement(_Col.default, {
    md: 12,
    className: "pt-2"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "metamask_modal_inner_button",
    onClick: function onClick() {
      return window.open("https://metamask.io/download/");
    }
  }, "INSTALL")))))))), /*#__PURE__*/_react.default.createElement(_Tab.default.Pane, {
    eventKey: "Coinbase"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
    className: "modal_inner_container pt-0"
  }, /*#__PURE__*/_react.default.createElement(_Row.default, {
    className: "pt-1 text-center"
  }, /*#__PURE__*/_react.default.createElement(_Col.default, {
    md: 12
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "metamask_modal_inner_text pb-1"
  }, "Scan with Coinbase Wallet")), /*#__PURE__*/_react.default.createElement(_Col.default, {
    md: 12,
    style: {
      marginTop: '25%'
    }
  }, wallet_msg !== null ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "metamask_modal_subtext",
    style: {
      fontSize: '20px'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faClose,
    style: {
      color: 'red',
      fontSize: '20px'
    }
  }), " ", wallet_msg))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, " ", /*#__PURE__*/_react.default.createElement("img", {
    style: {
      width: '100%'
    },
    src: _coinbase_qr.default,
    alt: "qr code"
  })))))), /*#__PURE__*/_react.default.createElement(_Tab.default.Pane, {
    eventKey: "WalletConnect"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
    className: "modal_inner_container pt-0"
  }, /*#__PURE__*/_react.default.createElement(_Row.default, {
    className: "pt-1 text-center"
  }, /*#__PURE__*/_react.default.createElement(_Col.default, {
    md: 12
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "metamask_modal_inner_text pb-1"
  }, "Scan with your phone")), /*#__PURE__*/_react.default.createElement(_Col.default, {
    md: 12
  }, /*#__PURE__*/_react.default.createElement("img", {
    style: {
      width: '100%'
    },
    src: _wallet_qr.default,
    alt: "qr code"
  })))))))))));
}
var _default = Walletmodal;
exports.default = _default;