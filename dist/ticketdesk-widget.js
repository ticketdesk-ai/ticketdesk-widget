var om = Object.defineProperty;
var im = (e, t, n) => t in e ? om(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var A = (e, t, n) => im(e, typeof t != "symbol" ? t + "" : t, n);
function Md(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jd = { exports: {} }, O = {};
var uo = Symbol.for("react.element"), lm = Symbol.for("react.portal"), sm = Symbol.for("react.fragment"), um = Symbol.for("react.strict_mode"), am = Symbol.for("react.profiler"), cm = Symbol.for("react.provider"), dm = Symbol.for("react.context"), fm = Symbol.for("react.forward_ref"), pm = Symbol.for("react.suspense"), hm = Symbol.for("react.memo"), mm = Symbol.for("react.lazy"), ga = Symbol.iterator;
function ym(e) {
  return e === null || typeof e != "object" ? null : (e = ga && e[ga] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Rd = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, zd = Object.assign, Fd = {};
function or(e, t, n) {
  this.props = e, this.context = t, this.refs = Fd, this.updater = n || Rd;
}
or.prototype.isReactComponent = {};
or.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
or.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ld() {
}
Ld.prototype = or.prototype;
function nu(e, t, n) {
  this.props = e, this.context = t, this.refs = Fd, this.updater = n || Rd;
}
var ru = nu.prototype = new Ld();
ru.constructor = nu;
zd(ru, or.prototype);
ru.isPureReactComponent = !0;
var va = Array.isArray, Id = Object.prototype.hasOwnProperty, ou = { current: null }, Dd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Od(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) Id.call(t, r) && !Dd.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: uo, type: e, key: i, ref: l, props: o, _owner: ou.current };
}
function gm(e, t) {
  return { $$typeof: uo, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function iu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === uo;
}
function vm(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var wa = /\/+/g;
function pl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? vm("" + e.key) : t.toString(36);
}
function Uo(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else switch (i) {
    case "string":
    case "number":
      l = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case uo:
        case lm:
          l = !0;
      }
  }
  if (l) return l = e, o = o(l), e = r === "" ? "." + pl(l, 0) : r, va(o) ? (n = "", e != null && (n = e.replace(wa, "$&/") + "/"), Uo(o, t, n, "", function(a) {
    return a;
  })) : o != null && (iu(o) && (o = gm(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(wa, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", va(e)) for (var s = 0; s < e.length; s++) {
    i = e[s];
    var u = r + pl(i, s);
    l += Uo(i, t, n, u, o);
  }
  else if (u = ym(e), typeof u == "function") for (e = u.call(e), s = 0; !(i = e.next()).done; ) i = i.value, u = r + pl(i, s++), l += Uo(i, t, n, u, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function yo(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Uo(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function wm(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Te = { current: null }, Wo = { transition: null }, xm = { ReactCurrentDispatcher: Te, ReactCurrentBatchConfig: Wo, ReactCurrentOwner: ou };
function bd() {
  throw Error("act(...) is not supported in production builds of React.");
}
O.Children = { map: yo, forEach: function(e, t, n) {
  yo(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return yo(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return yo(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!iu(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
O.Component = or;
O.Fragment = sm;
O.Profiler = am;
O.PureComponent = nu;
O.StrictMode = um;
O.Suspense = pm;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xm;
O.act = bd;
O.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = zd({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = ou.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (u in t) Id.call(t, u) && !Dd.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: uo, type: e.type, key: o, ref: i, props: r, _owner: l };
};
O.createContext = function(e) {
  return e = { $$typeof: dm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: cm, _context: e }, e.Consumer = e;
};
O.createElement = Od;
O.createFactory = function(e) {
  var t = Od.bind(null, e);
  return t.type = e, t;
};
O.createRef = function() {
  return { current: null };
};
O.forwardRef = function(e) {
  return { $$typeof: fm, render: e };
};
O.isValidElement = iu;
O.lazy = function(e) {
  return { $$typeof: mm, _payload: { _status: -1, _result: e }, _init: wm };
};
O.memo = function(e, t) {
  return { $$typeof: hm, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function(e) {
  var t = Wo.transition;
  Wo.transition = {};
  try {
    e();
  } finally {
    Wo.transition = t;
  }
};
O.unstable_act = bd;
O.useCallback = function(e, t) {
  return Te.current.useCallback(e, t);
};
O.useContext = function(e) {
  return Te.current.useContext(e);
};
O.useDebugValue = function() {
};
O.useDeferredValue = function(e) {
  return Te.current.useDeferredValue(e);
};
O.useEffect = function(e, t) {
  return Te.current.useEffect(e, t);
};
O.useId = function() {
  return Te.current.useId();
};
O.useImperativeHandle = function(e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function(e, t) {
  return Te.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function(e, t) {
  return Te.current.useLayoutEffect(e, t);
};
O.useMemo = function(e, t) {
  return Te.current.useMemo(e, t);
};
O.useReducer = function(e, t, n) {
  return Te.current.useReducer(e, t, n);
};
O.useRef = function(e) {
  return Te.current.useRef(e);
};
O.useState = function(e) {
  return Te.current.useState(e);
};
O.useSyncExternalStore = function(e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function() {
  return Te.current.useTransition();
};
O.version = "18.3.1";
jd.exports = O;
var j = jd.exports;
const Ye = /* @__PURE__ */ Md(j);
var Ad = { exports: {} }, Ze = {}, Ud = { exports: {} }, Wd = {};
(function(e) {
  function t(_, F) {
    var R = _.length;
    _.push(F);
    e: for (; 0 < R; ) {
      var V = R - 1 >>> 1, ce = _[V];
      if (0 < o(ce, F)) _[V] = F, _[R] = ce, R = V;
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var F = _[0], R = _.pop();
    if (R !== F) {
      _[0] = R;
      e: for (var V = 0, ce = _.length, ho = ce >>> 1; V < ho; ) {
        var sn = 2 * (V + 1) - 1, fl = _[sn], un = sn + 1, mo = _[un];
        if (0 > o(fl, R)) un < ce && 0 > o(mo, fl) ? (_[V] = mo, _[un] = R, V = un) : (_[V] = fl, _[sn] = R, V = sn);
        else if (un < ce && 0 > o(mo, R)) _[V] = mo, _[un] = R, V = un;
        else break e;
      }
    }
    return F;
  }
  function o(_, F) {
    var R = _.sortIndex - F.sortIndex;
    return R !== 0 ? R : _.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var l = Date, s = l.now();
    e.unstable_now = function() {
      return l.now() - s;
    };
  }
  var u = [], a = [], d = 1, f = null, m = 3, y = !1, g = !1, x = !1, k = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(_) {
    for (var F = n(a); F !== null; ) {
      if (F.callback === null) r(a);
      else if (F.startTime <= _) r(a), F.sortIndex = F.expirationTime, t(u, F);
      else break;
      F = n(a);
    }
  }
  function w(_) {
    if (x = !1, h(_), !g) if (n(u) !== null) g = !0, W(C);
    else {
      var F = n(a);
      F !== null && ie(w, F.startTime - _);
    }
  }
  function C(_, F) {
    g = !1, x && (x = !1, p(P), P = -1), y = !0;
    var R = m;
    try {
      for (h(F), f = n(u); f !== null && (!(f.expirationTime > F) || _ && !G()); ) {
        var V = f.callback;
        if (typeof V == "function") {
          f.callback = null, m = f.priorityLevel;
          var ce = V(f.expirationTime <= F);
          F = e.unstable_now(), typeof ce == "function" ? f.callback = ce : f === n(u) && r(u), h(F);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var ho = !0;
      else {
        var sn = n(a);
        sn !== null && ie(w, sn.startTime - F), ho = !1;
      }
      return ho;
    } finally {
      f = null, m = R, y = !1;
    }
  }
  var E = !1, $ = null, P = -1, b = 5, z = -1;
  function G() {
    return !(e.unstable_now() - z < b);
  }
  function H() {
    if ($ !== null) {
      var _ = e.unstable_now();
      z = _;
      var F = !0;
      try {
        F = $(!0, _);
      } finally {
        F ? we() : (E = !1, $ = null);
      }
    } else E = !1;
  }
  var we;
  if (typeof c == "function") we = function() {
    c(H);
  };
  else if (typeof MessageChannel < "u") {
    var Oe = new MessageChannel(), ar = Oe.port2;
    Oe.port1.onmessage = H, we = function() {
      ar.postMessage(null);
    };
  } else we = function() {
    k(H, 0);
  };
  function W(_) {
    $ = _, E || (E = !0, we());
  }
  function ie(_, F) {
    P = k(function() {
      _(e.unstable_now());
    }, F);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    g || y || (g = !0, W(C));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(_) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var F = 3;
        break;
      default:
        F = m;
    }
    var R = m;
    m = F;
    try {
      return _();
    } finally {
      m = R;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, F) {
    switch (_) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        _ = 3;
    }
    var R = m;
    m = _;
    try {
      return F();
    } finally {
      m = R;
    }
  }, e.unstable_scheduleCallback = function(_, F, R) {
    var V = e.unstable_now();
    switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? V + R : V) : R = V, _) {
      case 1:
        var ce = -1;
        break;
      case 2:
        ce = 250;
        break;
      case 5:
        ce = 1073741823;
        break;
      case 4:
        ce = 1e4;
        break;
      default:
        ce = 5e3;
    }
    return ce = R + ce, _ = { id: d++, callback: F, priorityLevel: _, startTime: R, expirationTime: ce, sortIndex: -1 }, R > V ? (_.sortIndex = R, t(a, _), n(u) === null && _ === n(a) && (x ? (p(P), P = -1) : x = !0, ie(w, R - V))) : (_.sortIndex = ce, t(u, _), g || y || (g = !0, W(C))), _;
  }, e.unstable_shouldYield = G, e.unstable_wrapCallback = function(_) {
    var F = m;
    return function() {
      var R = m;
      m = F;
      try {
        return _.apply(this, arguments);
      } finally {
        m = R;
      }
    };
  };
})(Wd);
Ud.exports = Wd;
var km = Ud.exports;
var Sm = j, Ge = km;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Vd = /* @__PURE__ */ new Set(), Ur = {};
function Pn(e, t) {
  Zn(e, t), Zn(e + "Capture", t);
}
function Zn(e, t) {
  for (Ur[e] = t, e = 0; e < t.length; e++) Vd.add(t[e]);
}
var Nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ql = Object.prototype.hasOwnProperty, Cm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, xa = {}, ka = {};
function _m(e) {
  return ql.call(ka, e) ? !0 : ql.call(xa, e) ? !1 : Cm.test(e) ? ka[e] = !0 : (xa[e] = !0, !1);
}
function Em(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function $m(e, t, n, r) {
  if (t === null || typeof t > "u" || Em(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function Ne(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var ye = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ye[e] = new Ne(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ye[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ye[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ye[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ye[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ye[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ye[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ye[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ye[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var lu = /[\-:]([a-z])/g;
function su(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    lu,
    su
  );
  ye[t] = new Ne(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(lu, su);
  ye[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(lu, su);
  ye[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ye[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ye.xlinkHref = new Ne("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ye[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function uu(e, t, n, r) {
  var o = ye.hasOwnProperty(t) ? ye[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && ($m(t, n, o, r) && (n = null), r || o === null ? _m(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ft = Sm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, go = Symbol.for("react.element"), zn = Symbol.for("react.portal"), Fn = Symbol.for("react.fragment"), au = Symbol.for("react.strict_mode"), es = Symbol.for("react.profiler"), Bd = Symbol.for("react.provider"), Hd = Symbol.for("react.context"), cu = Symbol.for("react.forward_ref"), ts = Symbol.for("react.suspense"), ns = Symbol.for("react.suspense_list"), du = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), Qd = Symbol.for("react.offscreen"), Sa = Symbol.iterator;
function cr(e) {
  return e === null || typeof e != "object" ? null : (e = Sa && e[Sa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var re = Object.assign, hl;
function Sr(e) {
  if (hl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    hl = t && t[1] || "";
  }
  return `
` + hl + e;
}
var ml = !1;
function yl(e, t) {
  if (!e || ml) return "";
  ml = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (a) {
        var r = a;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (a) {
        r = a;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (var o = a.stack.split(`
`), i = r.stack.split(`
`), l = o.length - 1, s = i.length - 1; 1 <= l && 0 <= s && o[l] !== i[s]; ) s--;
      for (; 1 <= l && 0 <= s; l--, s--) if (o[l] !== i[s]) {
        if (l !== 1 || s !== 1)
          do
            if (l--, s--, 0 > s || o[l] !== i[s]) {
              var u = `
` + o[l].replace(" at new ", " at ");
              return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
            }
          while (1 <= l && 0 <= s);
        break;
      }
    }
  } finally {
    ml = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Sr(e) : "";
}
function Tm(e) {
  switch (e.tag) {
    case 5:
      return Sr(e.type);
    case 16:
      return Sr("Lazy");
    case 13:
      return Sr("Suspense");
    case 19:
      return Sr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = yl(e.type, !1), e;
    case 11:
      return e = yl(e.type.render, !1), e;
    case 1:
      return e = yl(e.type, !0), e;
    default:
      return "";
  }
}
function rs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Fn:
      return "Fragment";
    case zn:
      return "Portal";
    case es:
      return "Profiler";
    case au:
      return "StrictMode";
    case ts:
      return "Suspense";
    case ns:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Hd:
      return (e.displayName || "Context") + ".Consumer";
    case Bd:
      return (e._context.displayName || "Context") + ".Provider";
    case cu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case du:
      return t = e.displayName || null, t !== null ? t : rs(e.type) || "Memo";
    case Ot:
      t = e._payload, e = e._init;
      try {
        return rs(e(t));
      } catch {
      }
  }
  return null;
}
function Nm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return rs(t);
    case 8:
      return t === au ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function en(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Yd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Pm(e) {
  var t = Yd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(l) {
      r = "" + l, i.call(this, l);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function vo(e) {
  e._valueTracker || (e._valueTracker = Pm(e));
}
function Xd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Yd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ci(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function os(e, t) {
  var n = t.checked;
  return re({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ca(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = en(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Kd(e, t) {
  t = t.checked, t != null && uu(e, "checked", t, !1);
}
function is(e, t) {
  Kd(e, t);
  var n = en(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ls(e, t.type, n) : t.hasOwnProperty("defaultValue") && ls(e, t.type, en(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function _a(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ls(e, t, n) {
  (t !== "number" || ci(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Cr = Array.isArray;
function Hn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + en(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ss(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return re({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ea(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(S(92));
      if (Cr(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: en(n) };
}
function Gd(e, t) {
  var n = en(t.value), r = en(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function $a(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Zd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function us(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Zd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var wo, Jd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (wo = wo || document.createElement("div"), wo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = wo.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Wr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mr = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Mm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mr).forEach(function(e) {
  Mm.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Mr[t] = Mr[e];
  });
});
function qd(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Mr.hasOwnProperty(e) && Mr[e] ? ("" + t).trim() : t + "px";
}
function ef(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = qd(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var jm = re({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function as(e, t) {
  if (t) {
    if (jm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function cs(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ds = null;
function fu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var fs = null, Qn = null, Yn = null;
function Ta(e) {
  if (e = fo(e)) {
    if (typeof fs != "function") throw Error(S(280));
    var t = e.stateNode;
    t && (t = Xi(t), fs(e.stateNode, e.type, t));
  }
}
function tf(e) {
  Qn ? Yn ? Yn.push(e) : Yn = [e] : Qn = e;
}
function nf() {
  if (Qn) {
    var e = Qn, t = Yn;
    if (Yn = Qn = null, Ta(e), t) for (e = 0; e < t.length; e++) Ta(t[e]);
  }
}
function rf(e, t) {
  return e(t);
}
function of() {
}
var gl = !1;
function lf(e, t, n) {
  if (gl) return e(t, n);
  gl = !0;
  try {
    return rf(e, t, n);
  } finally {
    gl = !1, (Qn !== null || Yn !== null) && (of(), nf());
  }
}
function Vr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Xi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var ps = !1;
if (Nt) try {
  var dr = {};
  Object.defineProperty(dr, "passive", { get: function() {
    ps = !0;
  } }), window.addEventListener("test", dr, dr), window.removeEventListener("test", dr, dr);
} catch {
  ps = !1;
}
function Rm(e, t, n, r, o, i, l, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var jr = !1, di = null, fi = !1, hs = null, zm = { onError: function(e) {
  jr = !0, di = e;
} };
function Fm(e, t, n, r, o, i, l, s, u) {
  jr = !1, di = null, Rm.apply(zm, arguments);
}
function Lm(e, t, n, r, o, i, l, s, u) {
  if (Fm.apply(this, arguments), jr) {
    if (jr) {
      var a = di;
      jr = !1, di = null;
    } else throw Error(S(198));
    fi || (fi = !0, hs = a);
  }
}
function Mn(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function sf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Na(e) {
  if (Mn(e) !== e) throw Error(S(188));
}
function Im(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Mn(e), t === null) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Na(o), e;
        if (i === r) return Na(o), t;
        i = i.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) n = o, r = i;
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          l = !0, n = o, r = i;
          break;
        }
        if (s === r) {
          l = !0, r = o, n = i;
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            l = !0, n = i, r = o;
            break;
          }
          if (s === r) {
            l = !0, r = i, n = o;
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function uf(e) {
  return e = Im(e), e !== null ? af(e) : null;
}
function af(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = af(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var cf = Ge.unstable_scheduleCallback, Pa = Ge.unstable_cancelCallback, Dm = Ge.unstable_shouldYield, Om = Ge.unstable_requestPaint, le = Ge.unstable_now, bm = Ge.unstable_getCurrentPriorityLevel, pu = Ge.unstable_ImmediatePriority, df = Ge.unstable_UserBlockingPriority, pi = Ge.unstable_NormalPriority, Am = Ge.unstable_LowPriority, ff = Ge.unstable_IdlePriority, Bi = null, wt = null;
function Um(e) {
  if (wt && typeof wt.onCommitFiberRoot == "function") try {
    wt.onCommitFiberRoot(Bi, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var ct = Math.clz32 ? Math.clz32 : Bm, Wm = Math.log, Vm = Math.LN2;
function Bm(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Wm(e) / Vm | 0) | 0;
}
var xo = 64, ko = 4194304;
function _r(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function hi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? r = _r(s) : (i &= l, i !== 0 && (r = _r(i)));
  } else l = n & ~o, l !== 0 ? r = _r(l) : i !== 0 && (r = _r(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ct(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function Hm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Qm(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - ct(i), s = 1 << l, u = o[l];
    u === -1 ? (!(s & n) || s & r) && (o[l] = Hm(s, t)) : u <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function ms(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function pf() {
  var e = xo;
  return xo <<= 1, !(xo & 4194240) && (xo = 64), e;
}
function vl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ao(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ct(t), e[t] = n;
}
function Ym(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - ct(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function hu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - ct(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var B = 0;
function hf(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var mf, mu, yf, gf, vf, ys = !1, So = [], Qt = null, Yt = null, Xt = null, Br = /* @__PURE__ */ new Map(), Hr = /* @__PURE__ */ new Map(), At = [], Xm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ma(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Qt = null;
      break;
    case "dragenter":
    case "dragleave":
      Yt = null;
      break;
    case "mouseover":
    case "mouseout":
      Xt = null;
      break;
    case "pointerover":
    case "pointerout":
      Br.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Hr.delete(t.pointerId);
  }
}
function fr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = fo(t), t !== null && mu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Km(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Qt = fr(Qt, e, t, n, r, o), !0;
    case "dragenter":
      return Yt = fr(Yt, e, t, n, r, o), !0;
    case "mouseover":
      return Xt = fr(Xt, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Br.set(i, fr(Br.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Hr.set(i, fr(Hr.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function wf(e) {
  var t = gn(e.target);
  if (t !== null) {
    var n = Mn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = sf(n), t !== null) {
          e.blockedOn = t, vf(e.priority, function() {
            yf(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Vo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = gs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ds = r, n.target.dispatchEvent(r), ds = null;
    } else return t = fo(n), t !== null && mu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function ja(e, t, n) {
  Vo(e) && n.delete(t);
}
function Gm() {
  ys = !1, Qt !== null && Vo(Qt) && (Qt = null), Yt !== null && Vo(Yt) && (Yt = null), Xt !== null && Vo(Xt) && (Xt = null), Br.forEach(ja), Hr.forEach(ja);
}
function pr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ys || (ys = !0, Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority, Gm)));
}
function Qr(e) {
  function t(o) {
    return pr(o, e);
  }
  if (0 < So.length) {
    pr(So[0], e);
    for (var n = 1; n < So.length; n++) {
      var r = So[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Qt !== null && pr(Qt, e), Yt !== null && pr(Yt, e), Xt !== null && pr(Xt, e), Br.forEach(t), Hr.forEach(t), n = 0; n < At.length; n++) r = At[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < At.length && (n = At[0], n.blockedOn === null); ) wf(n), n.blockedOn === null && At.shift();
}
var Xn = Ft.ReactCurrentBatchConfig, mi = !0;
function Zm(e, t, n, r) {
  var o = B, i = Xn.transition;
  Xn.transition = null;
  try {
    B = 1, yu(e, t, n, r);
  } finally {
    B = o, Xn.transition = i;
  }
}
function Jm(e, t, n, r) {
  var o = B, i = Xn.transition;
  Xn.transition = null;
  try {
    B = 4, yu(e, t, n, r);
  } finally {
    B = o, Xn.transition = i;
  }
}
function yu(e, t, n, r) {
  if (mi) {
    var o = gs(e, t, n, r);
    if (o === null) Nl(e, t, r, yi, n), Ma(e, r);
    else if (Km(o, e, t, n, r)) r.stopPropagation();
    else if (Ma(e, r), t & 4 && -1 < Xm.indexOf(e)) {
      for (; o !== null; ) {
        var i = fo(o);
        if (i !== null && mf(i), i = gs(e, t, n, r), i === null && Nl(e, t, r, yi, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Nl(e, t, r, null, n);
  }
}
var yi = null;
function gs(e, t, n, r) {
  if (yi = null, e = fu(r), e = gn(e), e !== null) if (t = Mn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = sf(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return yi = e, null;
}
function xf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (bm()) {
        case pu:
          return 1;
        case df:
          return 4;
        case pi:
        case Am:
          return 16;
        case ff:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Wt = null, gu = null, Bo = null;
function kf() {
  if (Bo) return Bo;
  var e, t = gu, n = t.length, r, o = "value" in Wt ? Wt.value : Wt.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++) ;
  return Bo = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Ho(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Co() {
  return !0;
}
function Ra() {
  return !1;
}
function Je(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Co : Ra, this.isPropagationStopped = Ra, this;
  }
  return re(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Co);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Co);
  }, persist: function() {
  }, isPersistent: Co }), t;
}
var ir = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, vu = Je(ir), co = re({}, ir, { view: 0, detail: 0 }), qm = Je(co), wl, xl, hr, Hi = re({}, co, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: wu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== hr && (hr && e.type === "mousemove" ? (wl = e.screenX - hr.screenX, xl = e.screenY - hr.screenY) : xl = wl = 0, hr = e), wl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : xl;
} }), za = Je(Hi), e0 = re({}, Hi, { dataTransfer: 0 }), t0 = Je(e0), n0 = re({}, co, { relatedTarget: 0 }), kl = Je(n0), r0 = re({}, ir, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), o0 = Je(r0), i0 = re({}, ir, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), l0 = Je(i0), s0 = re({}, ir, { data: 0 }), Fa = Je(s0), u0 = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, a0 = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, c0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function d0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = c0[e]) ? !!t[e] : !1;
}
function wu() {
  return d0;
}
var f0 = re({}, co, { key: function(e) {
  if (e.key) {
    var t = u0[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ho(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? a0[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: wu, charCode: function(e) {
  return e.type === "keypress" ? Ho(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ho(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), p0 = Je(f0), h0 = re({}, Hi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), La = Je(h0), m0 = re({}, co, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: wu }), y0 = Je(m0), g0 = re({}, ir, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), v0 = Je(g0), w0 = re({}, Hi, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), x0 = Je(w0), k0 = [9, 13, 27, 32], xu = Nt && "CompositionEvent" in window, Rr = null;
Nt && "documentMode" in document && (Rr = document.documentMode);
var S0 = Nt && "TextEvent" in window && !Rr, Sf = Nt && (!xu || Rr && 8 < Rr && 11 >= Rr), Ia = " ", Da = !1;
function Cf(e, t) {
  switch (e) {
    case "keyup":
      return k0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function _f(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ln = !1;
function C0(e, t) {
  switch (e) {
    case "compositionend":
      return _f(t);
    case "keypress":
      return t.which !== 32 ? null : (Da = !0, Ia);
    case "textInput":
      return e = t.data, e === Ia && Da ? null : e;
    default:
      return null;
  }
}
function _0(e, t) {
  if (Ln) return e === "compositionend" || !xu && Cf(e, t) ? (e = kf(), Bo = gu = Wt = null, Ln = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Sf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var E0 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Oa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!E0[e.type] : t === "textarea";
}
function Ef(e, t, n, r) {
  tf(r), t = gi(t, "onChange"), 0 < t.length && (n = new vu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var zr = null, Yr = null;
function $0(e) {
  If(e, 0);
}
function Qi(e) {
  var t = On(e);
  if (Xd(t)) return e;
}
function T0(e, t) {
  if (e === "change") return t;
}
var $f = !1;
if (Nt) {
  var Sl;
  if (Nt) {
    var Cl = "oninput" in document;
    if (!Cl) {
      var ba = document.createElement("div");
      ba.setAttribute("oninput", "return;"), Cl = typeof ba.oninput == "function";
    }
    Sl = Cl;
  } else Sl = !1;
  $f = Sl && (!document.documentMode || 9 < document.documentMode);
}
function Aa() {
  zr && (zr.detachEvent("onpropertychange", Tf), Yr = zr = null);
}
function Tf(e) {
  if (e.propertyName === "value" && Qi(Yr)) {
    var t = [];
    Ef(t, Yr, e, fu(e)), lf($0, t);
  }
}
function N0(e, t, n) {
  e === "focusin" ? (Aa(), zr = t, Yr = n, zr.attachEvent("onpropertychange", Tf)) : e === "focusout" && Aa();
}
function P0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Qi(Yr);
}
function M0(e, t) {
  if (e === "click") return Qi(t);
}
function j0(e, t) {
  if (e === "input" || e === "change") return Qi(t);
}
function R0(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ft = typeof Object.is == "function" ? Object.is : R0;
function Xr(e, t) {
  if (ft(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ql.call(t, o) || !ft(e[o], t[o])) return !1;
  }
  return !0;
}
function Ua(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Wa(e, t) {
  var n = Ua(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ua(n);
  }
}
function Nf(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Nf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Pf() {
  for (var e = window, t = ci(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ci(e.document);
  }
  return t;
}
function ku(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function z0(e) {
  var t = Pf(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Nf(n.ownerDocument.documentElement, n)) {
    if (r !== null && ku(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Wa(n, i);
        var l = Wa(
          n,
          r
        );
        o && l && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var F0 = Nt && "documentMode" in document && 11 >= document.documentMode, In = null, vs = null, Fr = null, ws = !1;
function Va(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ws || In == null || In !== ci(r) || (r = In, "selectionStart" in r && ku(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Fr && Xr(Fr, r) || (Fr = r, r = gi(vs, "onSelect"), 0 < r.length && (t = new vu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = In)));
}
function _o(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Dn = { animationend: _o("Animation", "AnimationEnd"), animationiteration: _o("Animation", "AnimationIteration"), animationstart: _o("Animation", "AnimationStart"), transitionend: _o("Transition", "TransitionEnd") }, _l = {}, Mf = {};
Nt && (Mf = document.createElement("div").style, "AnimationEvent" in window || (delete Dn.animationend.animation, delete Dn.animationiteration.animation, delete Dn.animationstart.animation), "TransitionEvent" in window || delete Dn.transitionend.transition);
function Yi(e) {
  if (_l[e]) return _l[e];
  if (!Dn[e]) return e;
  var t = Dn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Mf) return _l[e] = t[n];
  return e;
}
var jf = Yi("animationend"), Rf = Yi("animationiteration"), zf = Yi("animationstart"), Ff = Yi("transitionend"), Lf = /* @__PURE__ */ new Map(), Ba = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function rn(e, t) {
  Lf.set(e, t), Pn(t, [e]);
}
for (var El = 0; El < Ba.length; El++) {
  var $l = Ba[El], L0 = $l.toLowerCase(), I0 = $l[0].toUpperCase() + $l.slice(1);
  rn(L0, "on" + I0);
}
rn(jf, "onAnimationEnd");
rn(Rf, "onAnimationIteration");
rn(zf, "onAnimationStart");
rn("dblclick", "onDoubleClick");
rn("focusin", "onFocus");
rn("focusout", "onBlur");
rn(Ff, "onTransitionEnd");
Zn("onMouseEnter", ["mouseout", "mouseover"]);
Zn("onMouseLeave", ["mouseout", "mouseover"]);
Zn("onPointerEnter", ["pointerout", "pointerover"]);
Zn("onPointerLeave", ["pointerout", "pointerover"]);
Pn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Pn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Pn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Pn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Pn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Er = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), D0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));
function Ha(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Lm(r, t, void 0, e), e.currentTarget = null;
}
function If(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var s = r[l], u = s.instance, a = s.currentTarget;
        if (s = s.listener, u !== i && o.isPropagationStopped()) break e;
        Ha(o, s, a), i = u;
      }
      else for (l = 0; l < r.length; l++) {
        if (s = r[l], u = s.instance, a = s.currentTarget, s = s.listener, u !== i && o.isPropagationStopped()) break e;
        Ha(o, s, a), i = u;
      }
    }
  }
  if (fi) throw e = hs, fi = !1, hs = null, e;
}
function Z(e, t) {
  var n = t[_s];
  n === void 0 && (n = t[_s] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Df(t, e, 2, !1), n.add(r));
}
function Tl(e, t, n) {
  var r = 0;
  t && (r |= 4), Df(n, e, r, t);
}
var Eo = "_reactListening" + Math.random().toString(36).slice(2);
function Kr(e) {
  if (!e[Eo]) {
    e[Eo] = !0, Vd.forEach(function(n) {
      n !== "selectionchange" && (D0.has(n) || Tl(n, !1, e), Tl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Eo] || (t[Eo] = !0, Tl("selectionchange", !1, t));
  }
}
function Df(e, t, n, r) {
  switch (xf(t)) {
    case 1:
      var o = Zm;
      break;
    case 4:
      o = Jm;
      break;
    default:
      o = yu;
  }
  n = o.bind(null, t, n, e), o = void 0, !ps || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Nl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var l = r.tag;
    if (l === 3 || l === 4) {
      var s = r.stateNode.containerInfo;
      if (s === o || s.nodeType === 8 && s.parentNode === o) break;
      if (l === 4) for (l = r.return; l !== null; ) {
        var u = l.tag;
        if ((u === 3 || u === 4) && (u = l.stateNode.containerInfo, u === o || u.nodeType === 8 && u.parentNode === o)) return;
        l = l.return;
      }
      for (; s !== null; ) {
        if (l = gn(s), l === null) return;
        if (u = l.tag, u === 5 || u === 6) {
          r = i = l;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  lf(function() {
    var a = i, d = fu(n), f = [];
    e: {
      var m = Lf.get(e);
      if (m !== void 0) {
        var y = vu, g = e;
        switch (e) {
          case "keypress":
            if (Ho(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = p0;
            break;
          case "focusin":
            g = "focus", y = kl;
            break;
          case "focusout":
            g = "blur", y = kl;
            break;
          case "beforeblur":
          case "afterblur":
            y = kl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = za;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = t0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = y0;
            break;
          case jf:
          case Rf:
          case zf:
            y = o0;
            break;
          case Ff:
            y = v0;
            break;
          case "scroll":
            y = qm;
            break;
          case "wheel":
            y = x0;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = l0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = La;
        }
        var x = (t & 4) !== 0, k = !x && e === "scroll", p = x ? m !== null ? m + "Capture" : null : m;
        x = [];
        for (var c = a, h; c !== null; ) {
          h = c;
          var w = h.stateNode;
          if (h.tag === 5 && w !== null && (h = w, p !== null && (w = Vr(c, p), w != null && x.push(Gr(c, w, h)))), k) break;
          c = c.return;
        }
        0 < x.length && (m = new y(m, g, null, n, d), f.push({ event: m, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", m && n !== ds && (g = n.relatedTarget || n.fromElement) && (gn(g) || g[Pt])) break e;
        if ((y || m) && (m = d.window === d ? d : (m = d.ownerDocument) ? m.defaultView || m.parentWindow : window, y ? (g = n.relatedTarget || n.toElement, y = a, g = g ? gn(g) : null, g !== null && (k = Mn(g), g !== k || g.tag !== 5 && g.tag !== 6) && (g = null)) : (y = null, g = a), y !== g)) {
          if (x = za, w = "onMouseLeave", p = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (x = La, w = "onPointerLeave", p = "onPointerEnter", c = "pointer"), k = y == null ? m : On(y), h = g == null ? m : On(g), m = new x(w, c + "leave", y, n, d), m.target = k, m.relatedTarget = h, w = null, gn(d) === a && (x = new x(p, c + "enter", g, n, d), x.target = h, x.relatedTarget = k, w = x), k = w, y && g) t: {
            for (x = y, p = g, c = 0, h = x; h; h = jn(h)) c++;
            for (h = 0, w = p; w; w = jn(w)) h++;
            for (; 0 < c - h; ) x = jn(x), c--;
            for (; 0 < h - c; ) p = jn(p), h--;
            for (; c--; ) {
              if (x === p || p !== null && x === p.alternate) break t;
              x = jn(x), p = jn(p);
            }
            x = null;
          }
          else x = null;
          y !== null && Qa(f, m, y, x, !1), g !== null && k !== null && Qa(f, k, g, x, !0);
        }
      }
      e: {
        if (m = a ? On(a) : window, y = m.nodeName && m.nodeName.toLowerCase(), y === "select" || y === "input" && m.type === "file") var C = T0;
        else if (Oa(m)) if ($f) C = j0;
        else {
          C = P0;
          var E = N0;
        }
        else (y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (C = M0);
        if (C && (C = C(e, a))) {
          Ef(f, C, n, d);
          break e;
        }
        E && E(e, m, a), e === "focusout" && (E = m._wrapperState) && E.controlled && m.type === "number" && ls(m, "number", m.value);
      }
      switch (E = a ? On(a) : window, e) {
        case "focusin":
          (Oa(E) || E.contentEditable === "true") && (In = E, vs = a, Fr = null);
          break;
        case "focusout":
          Fr = vs = In = null;
          break;
        case "mousedown":
          ws = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ws = !1, Va(f, n, d);
          break;
        case "selectionchange":
          if (F0) break;
        case "keydown":
        case "keyup":
          Va(f, n, d);
      }
      var $;
      if (xu) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e;
        }
        P = void 0;
      }
      else Ln ? Cf(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (Sf && n.locale !== "ko" && (Ln || P !== "onCompositionStart" ? P === "onCompositionEnd" && Ln && ($ = kf()) : (Wt = d, gu = "value" in Wt ? Wt.value : Wt.textContent, Ln = !0)), E = gi(a, P), 0 < E.length && (P = new Fa(P, e, null, n, d), f.push({ event: P, listeners: E }), $ ? P.data = $ : ($ = _f(n), $ !== null && (P.data = $)))), ($ = S0 ? C0(e, n) : _0(e, n)) && (a = gi(a, "onBeforeInput"), 0 < a.length && (d = new Fa("onBeforeInput", "beforeinput", null, n, d), f.push({ event: d, listeners: a }), d.data = $));
    }
    If(f, t);
  });
}
function Gr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function gi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Vr(e, n), i != null && r.unshift(Gr(e, i, o)), i = Vr(e, t), i != null && r.push(Gr(e, i, o))), e = e.return;
  }
  return r;
}
function jn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Qa(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n, u = s.alternate, a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 && a !== null && (s = a, o ? (u = Vr(n, i), u != null && l.unshift(Gr(n, u, s))) : o || (u = Vr(n, i), u != null && l.push(Gr(n, u, s)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var O0 = /\r\n?/g, b0 = /\u0000|\uFFFD/g;
function Ya(e) {
  return (typeof e == "string" ? e : "" + e).replace(O0, `
`).replace(b0, "");
}
function $o(e, t, n) {
  if (t = Ya(t), Ya(e) !== t && n) throw Error(S(425));
}
function vi() {
}
var xs = null, ks = null;
function Ss(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Cs = typeof setTimeout == "function" ? setTimeout : void 0, A0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Xa = typeof Promise == "function" ? Promise : void 0, U0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xa < "u" ? function(e) {
  return Xa.resolve(null).then(e).catch(W0);
} : Cs;
function W0(e) {
  setTimeout(function() {
    throw e;
  });
}
function Pl(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Qr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Qr(t);
}
function Kt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ka(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var lr = Math.random().toString(36).slice(2), vt = "__reactFiber$" + lr, Zr = "__reactProps$" + lr, Pt = "__reactContainer$" + lr, _s = "__reactEvents$" + lr, V0 = "__reactListeners$" + lr, B0 = "__reactHandles$" + lr;
function gn(e) {
  var t = e[vt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Pt] || n[vt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ka(e); e !== null; ) {
        if (n = e[vt]) return n;
        e = Ka(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function fo(e) {
  return e = e[vt] || e[Pt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function On(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Xi(e) {
  return e[Zr] || null;
}
var Es = [], bn = -1;
function on(e) {
  return { current: e };
}
function q(e) {
  0 > bn || (e.current = Es[bn], Es[bn] = null, bn--);
}
function X(e, t) {
  bn++, Es[bn] = e.current, e.current = t;
}
var tn = {}, Ce = on(tn), Le = on(!1), _n = tn;
function Jn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return tn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Ie(e) {
  return e = e.childContextTypes, e != null;
}
function wi() {
  q(Le), q(Ce);
}
function Ga(e, t, n) {
  if (Ce.current !== tn) throw Error(S(168));
  X(Ce, t), X(Le, n);
}
function Of(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(S(108, Nm(e) || "Unknown", o));
  return re({}, n, r);
}
function xi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || tn, _n = Ce.current, X(Ce, e), X(Le, Le.current), !0;
}
function Za(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n ? (e = Of(e, t, _n), r.__reactInternalMemoizedMergedChildContext = e, q(Le), q(Ce), X(Ce, e)) : q(Le), X(Le, n);
}
var _t = null, Ki = !1, Ml = !1;
function bf(e) {
  _t === null ? _t = [e] : _t.push(e);
}
function H0(e) {
  Ki = !0, bf(e);
}
function ln() {
  if (!Ml && _t !== null) {
    Ml = !0;
    var e = 0, t = B;
    try {
      var n = _t;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      _t = null, Ki = !1;
    } catch (o) {
      throw _t !== null && (_t = _t.slice(e + 1)), cf(pu, ln), o;
    } finally {
      B = t, Ml = !1;
    }
  }
  return null;
}
var An = [], Un = 0, ki = null, Si = 0, qe = [], et = 0, En = null, Et = 1, $t = "";
function dn(e, t) {
  An[Un++] = Si, An[Un++] = ki, ki = e, Si = t;
}
function Af(e, t, n) {
  qe[et++] = Et, qe[et++] = $t, qe[et++] = En, En = e;
  var r = Et;
  e = $t;
  var o = 32 - ct(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - ct(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, Et = 1 << 32 - ct(t) + o | n << o | r, $t = i + e;
  } else Et = 1 << i | n << o | r, $t = e;
}
function Su(e) {
  e.return !== null && (dn(e, 1), Af(e, 1, 0));
}
function Cu(e) {
  for (; e === ki; ) ki = An[--Un], An[Un] = null, Si = An[--Un], An[Un] = null;
  for (; e === En; ) En = qe[--et], qe[et] = null, $t = qe[--et], qe[et] = null, Et = qe[--et], qe[et] = null;
}
var Ke = null, Xe = null, ee = !1, ut = null;
function Uf(e, t) {
  var n = tt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ja(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ke = e, Xe = Kt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ke = e, Xe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = En !== null ? { id: Et, overflow: $t } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = tt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ke = e, Xe = null, !0) : !1;
    default:
      return !1;
  }
}
function $s(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ts(e) {
  if (ee) {
    var t = Xe;
    if (t) {
      var n = t;
      if (!Ja(e, t)) {
        if ($s(e)) throw Error(S(418));
        t = Kt(n.nextSibling);
        var r = Ke;
        t && Ja(e, t) ? Uf(r, n) : (e.flags = e.flags & -4097 | 2, ee = !1, Ke = e);
      }
    } else {
      if ($s(e)) throw Error(S(418));
      e.flags = e.flags & -4097 | 2, ee = !1, Ke = e;
    }
  }
}
function qa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ke = e;
}
function To(e) {
  if (e !== Ke) return !1;
  if (!ee) return qa(e), ee = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ss(e.type, e.memoizedProps)), t && (t = Xe)) {
    if ($s(e)) throw Wf(), Error(S(418));
    for (; t; ) Uf(e, t), t = Kt(t.nextSibling);
  }
  if (qa(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Xe = Kt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Xe = null;
    }
  } else Xe = Ke ? Kt(e.stateNode.nextSibling) : null;
  return !0;
}
function Wf() {
  for (var e = Xe; e; ) e = Kt(e.nextSibling);
}
function qn() {
  Xe = Ke = null, ee = !1;
}
function _u(e) {
  ut === null ? ut = [e] : ut.push(e);
}
var Q0 = Ft.ReactCurrentBatchConfig;
function mr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var s = o.refs;
        l === null ? delete s[i] : s[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function No(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ec(e) {
  var t = e._init;
  return t(e._payload);
}
function Vf(e) {
  function t(p, c) {
    if (e) {
      var h = p.deletions;
      h === null ? (p.deletions = [c], p.flags |= 16) : h.push(c);
    }
  }
  function n(p, c) {
    if (!e) return null;
    for (; c !== null; ) t(p, c), c = c.sibling;
    return null;
  }
  function r(p, c) {
    for (p = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? p.set(c.key, c) : p.set(c.index, c), c = c.sibling;
    return p;
  }
  function o(p, c) {
    return p = qt(p, c), p.index = 0, p.sibling = null, p;
  }
  function i(p, c, h) {
    return p.index = h, e ? (h = p.alternate, h !== null ? (h = h.index, h < c ? (p.flags |= 2, c) : h) : (p.flags |= 2, c)) : (p.flags |= 1048576, c);
  }
  function l(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function s(p, c, h, w) {
    return c === null || c.tag !== 6 ? (c = Dl(h, p.mode, w), c.return = p, c) : (c = o(c, h), c.return = p, c);
  }
  function u(p, c, h, w) {
    var C = h.type;
    return C === Fn ? d(p, c, h.props.children, w, h.key) : c !== null && (c.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Ot && ec(C) === c.type) ? (w = o(c, h.props), w.ref = mr(p, c, h), w.return = p, w) : (w = Jo(h.type, h.key, h.props, null, p.mode, w), w.ref = mr(p, c, h), w.return = p, w);
  }
  function a(p, c, h, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== h.containerInfo || c.stateNode.implementation !== h.implementation ? (c = Ol(h, p.mode, w), c.return = p, c) : (c = o(c, h.children || []), c.return = p, c);
  }
  function d(p, c, h, w, C) {
    return c === null || c.tag !== 7 ? (c = Cn(h, p.mode, w, C), c.return = p, c) : (c = o(c, h), c.return = p, c);
  }
  function f(p, c, h) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = Dl("" + c, p.mode, h), c.return = p, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case go:
          return h = Jo(c.type, c.key, c.props, null, p.mode, h), h.ref = mr(p, null, c), h.return = p, h;
        case zn:
          return c = Ol(c, p.mode, h), c.return = p, c;
        case Ot:
          var w = c._init;
          return f(p, w(c._payload), h);
      }
      if (Cr(c) || cr(c)) return c = Cn(c, p.mode, h, null), c.return = p, c;
      No(p, c);
    }
    return null;
  }
  function m(p, c, h, w) {
    var C = c !== null ? c.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return C !== null ? null : s(p, c, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case go:
          return h.key === C ? u(p, c, h, w) : null;
        case zn:
          return h.key === C ? a(p, c, h, w) : null;
        case Ot:
          return C = h._init, m(
            p,
            c,
            C(h._payload),
            w
          );
      }
      if (Cr(h) || cr(h)) return C !== null ? null : d(p, c, h, w, null);
      No(p, h);
    }
    return null;
  }
  function y(p, c, h, w, C) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return p = p.get(h) || null, s(c, p, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case go:
          return p = p.get(w.key === null ? h : w.key) || null, u(c, p, w, C);
        case zn:
          return p = p.get(w.key === null ? h : w.key) || null, a(c, p, w, C);
        case Ot:
          var E = w._init;
          return y(p, c, h, E(w._payload), C);
      }
      if (Cr(w) || cr(w)) return p = p.get(h) || null, d(c, p, w, C, null);
      No(c, w);
    }
    return null;
  }
  function g(p, c, h, w) {
    for (var C = null, E = null, $ = c, P = c = 0, b = null; $ !== null && P < h.length; P++) {
      $.index > P ? (b = $, $ = null) : b = $.sibling;
      var z = m(p, $, h[P], w);
      if (z === null) {
        $ === null && ($ = b);
        break;
      }
      e && $ && z.alternate === null && t(p, $), c = i(z, c, P), E === null ? C = z : E.sibling = z, E = z, $ = b;
    }
    if (P === h.length) return n(p, $), ee && dn(p, P), C;
    if ($ === null) {
      for (; P < h.length; P++) $ = f(p, h[P], w), $ !== null && (c = i($, c, P), E === null ? C = $ : E.sibling = $, E = $);
      return ee && dn(p, P), C;
    }
    for ($ = r(p, $); P < h.length; P++) b = y($, p, P, h[P], w), b !== null && (e && b.alternate !== null && $.delete(b.key === null ? P : b.key), c = i(b, c, P), E === null ? C = b : E.sibling = b, E = b);
    return e && $.forEach(function(G) {
      return t(p, G);
    }), ee && dn(p, P), C;
  }
  function x(p, c, h, w) {
    var C = cr(h);
    if (typeof C != "function") throw Error(S(150));
    if (h = C.call(h), h == null) throw Error(S(151));
    for (var E = C = null, $ = c, P = c = 0, b = null, z = h.next(); $ !== null && !z.done; P++, z = h.next()) {
      $.index > P ? (b = $, $ = null) : b = $.sibling;
      var G = m(p, $, z.value, w);
      if (G === null) {
        $ === null && ($ = b);
        break;
      }
      e && $ && G.alternate === null && t(p, $), c = i(G, c, P), E === null ? C = G : E.sibling = G, E = G, $ = b;
    }
    if (z.done) return n(
      p,
      $
    ), ee && dn(p, P), C;
    if ($ === null) {
      for (; !z.done; P++, z = h.next()) z = f(p, z.value, w), z !== null && (c = i(z, c, P), E === null ? C = z : E.sibling = z, E = z);
      return ee && dn(p, P), C;
    }
    for ($ = r(p, $); !z.done; P++, z = h.next()) z = y($, p, P, z.value, w), z !== null && (e && z.alternate !== null && $.delete(z.key === null ? P : z.key), c = i(z, c, P), E === null ? C = z : E.sibling = z, E = z);
    return e && $.forEach(function(H) {
      return t(p, H);
    }), ee && dn(p, P), C;
  }
  function k(p, c, h, w) {
    if (typeof h == "object" && h !== null && h.type === Fn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case go:
          e: {
            for (var C = h.key, E = c; E !== null; ) {
              if (E.key === C) {
                if (C = h.type, C === Fn) {
                  if (E.tag === 7) {
                    n(p, E.sibling), c = o(E, h.props.children), c.return = p, p = c;
                    break e;
                  }
                } else if (E.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Ot && ec(C) === E.type) {
                  n(p, E.sibling), c = o(E, h.props), c.ref = mr(p, E, h), c.return = p, p = c;
                  break e;
                }
                n(p, E);
                break;
              } else t(p, E);
              E = E.sibling;
            }
            h.type === Fn ? (c = Cn(h.props.children, p.mode, w, h.key), c.return = p, p = c) : (w = Jo(h.type, h.key, h.props, null, p.mode, w), w.ref = mr(p, c, h), w.return = p, p = w);
          }
          return l(p);
        case zn:
          e: {
            for (E = h.key; c !== null; ) {
              if (c.key === E) if (c.tag === 4 && c.stateNode.containerInfo === h.containerInfo && c.stateNode.implementation === h.implementation) {
                n(p, c.sibling), c = o(c, h.children || []), c.return = p, p = c;
                break e;
              } else {
                n(p, c);
                break;
              }
              else t(p, c);
              c = c.sibling;
            }
            c = Ol(h, p.mode, w), c.return = p, p = c;
          }
          return l(p);
        case Ot:
          return E = h._init, k(p, c, E(h._payload), w);
      }
      if (Cr(h)) return g(p, c, h, w);
      if (cr(h)) return x(p, c, h, w);
      No(p, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, c !== null && c.tag === 6 ? (n(p, c.sibling), c = o(c, h), c.return = p, p = c) : (n(p, c), c = Dl(h, p.mode, w), c.return = p, p = c), l(p)) : n(p, c);
  }
  return k;
}
var er = Vf(!0), Bf = Vf(!1), Ci = on(null), _i = null, Wn = null, Eu = null;
function $u() {
  Eu = Wn = _i = null;
}
function Tu(e) {
  var t = Ci.current;
  q(Ci), e._currentValue = t;
}
function Ns(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Kn(e, t) {
  _i = e, Eu = Wn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Fe = !0), e.firstContext = null);
}
function rt(e) {
  var t = e._currentValue;
  if (Eu !== e) if (e = { context: e, memoizedValue: t, next: null }, Wn === null) {
    if (_i === null) throw Error(S(308));
    Wn = e, _i.dependencies = { lanes: 0, firstContext: e };
  } else Wn = Wn.next = e;
  return t;
}
var vn = null;
function Nu(e) {
  vn === null ? vn = [e] : vn.push(e);
}
function Hf(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Nu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Mt(e, r);
}
function Mt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var bt = !1;
function Pu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Qf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Tt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Gt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, U & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Mt(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Nu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Mt(e, n);
}
function Qo(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, hu(e, n);
  }
}
function tc(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = l : i = i.next = l, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Ei(e, t, n, r) {
  var o = e.updateQueue;
  bt = !1;
  var i = o.firstBaseUpdate, l = o.lastBaseUpdate, s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var u = s, a = u.next;
    u.next = null, l === null ? i = a : l.next = a, l = u;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, s = d.lastBaseUpdate, s !== l && (s === null ? d.firstBaseUpdate = a : s.next = a, d.lastBaseUpdate = u));
  }
  if (i !== null) {
    var f = o.baseState;
    l = 0, d = a = u = null, s = i;
    do {
      var m = s.lane, y = s.eventTime;
      if ((r & m) === m) {
        d !== null && (d = d.next = {
          eventTime: y,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var g = e, x = s;
          switch (m = t, y = n, x.tag) {
            case 1:
              if (g = x.payload, typeof g == "function") {
                f = g.call(y, f, m);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = x.payload, m = typeof g == "function" ? g.call(y, f, m) : g, m == null) break e;
              f = re({}, f, m);
              break e;
            case 2:
              bt = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, m = o.effects, m === null ? o.effects = [s] : m.push(s));
      } else y = { eventTime: y, lane: m, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, d === null ? (a = d = y, u = f) : d = d.next = y, l |= m;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null) break;
        m = s, s = m.next, m.next = null, o.lastBaseUpdate = m, o.shared.pending = null;
      }
    } while (!0);
    if (d === null && (u = f), o.baseState = u, o.firstBaseUpdate = a, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Tn |= l, e.lanes = l, e.memoizedState = f;
  }
}
function nc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(S(191, o));
      o.call(r);
    }
  }
}
var po = {}, xt = on(po), Jr = on(po), qr = on(po);
function wn(e) {
  if (e === po) throw Error(S(174));
  return e;
}
function Mu(e, t) {
  switch (X(qr, t), X(Jr, e), X(xt, po), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : us(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = us(t, e);
  }
  q(xt), X(xt, t);
}
function tr() {
  q(xt), q(Jr), q(qr);
}
function Yf(e) {
  wn(qr.current);
  var t = wn(xt.current), n = us(t, e.type);
  t !== n && (X(Jr, e), X(xt, n));
}
function ju(e) {
  Jr.current === e && (q(xt), q(Jr));
}
var te = on(0);
function $i(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var jl = [];
function Ru() {
  for (var e = 0; e < jl.length; e++) jl[e]._workInProgressVersionPrimary = null;
  jl.length = 0;
}
var Yo = Ft.ReactCurrentDispatcher, Rl = Ft.ReactCurrentBatchConfig, $n = 0, ne = null, ue = null, de = null, Ti = !1, Lr = !1, eo = 0, Y0 = 0;
function xe() {
  throw Error(S(321));
}
function zu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ft(e[n], t[n])) return !1;
  return !0;
}
function Fu(e, t, n, r, o, i) {
  if ($n = i, ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Yo.current = e === null || e.memoizedState === null ? Z0 : J0, e = n(r, o), Lr) {
    i = 0;
    do {
      if (Lr = !1, eo = 0, 25 <= i) throw Error(S(301));
      i += 1, de = ue = null, t.updateQueue = null, Yo.current = q0, e = n(r, o);
    } while (Lr);
  }
  if (Yo.current = Ni, t = ue !== null && ue.next !== null, $n = 0, de = ue = ne = null, Ti = !1, t) throw Error(S(300));
  return e;
}
function Lu() {
  var e = eo !== 0;
  return eo = 0, e;
}
function gt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return de === null ? ne.memoizedState = de = e : de = de.next = e, de;
}
function ot() {
  if (ue === null) {
    var e = ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ue.next;
  var t = de === null ? ne.memoizedState : de.next;
  if (t !== null) de = t, ue = e;
  else {
    if (e === null) throw Error(S(310));
    ue = e, e = { memoizedState: ue.memoizedState, baseState: ue.baseState, baseQueue: ue.baseQueue, queue: ue.queue, next: null }, de === null ? ne.memoizedState = de = e : de = de.next = e;
  }
  return de;
}
function to(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function zl(e) {
  var t = ot(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = ue, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      o.next = i.next, i.next = l;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var s = l = null, u = null, a = i;
    do {
      var d = a.lane;
      if (($n & d) === d) u !== null && (u = u.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var f = {
          lane: d,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        u === null ? (s = u = f, l = r) : u = u.next = f, ne.lanes |= d, Tn |= d;
      }
      a = a.next;
    } while (a !== null && a !== i);
    u === null ? l = r : u.next = s, ft(r, t.memoizedState) || (Fe = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, ne.lanes |= i, Tn |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Fl(e) {
  var t = ot(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      i = e(i, l.action), l = l.next;
    while (l !== o);
    ft(i, t.memoizedState) || (Fe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Xf() {
}
function Kf(e, t) {
  var n = ne, r = ot(), o = t(), i = !ft(r.memoizedState, o);
  if (i && (r.memoizedState = o, Fe = !0), r = r.queue, Iu(Jf.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || de !== null && de.memoizedState.tag & 1) {
    if (n.flags |= 2048, no(9, Zf.bind(null, n, r, o, t), void 0, null), fe === null) throw Error(S(349));
    $n & 30 || Gf(n, t, o);
  }
  return o;
}
function Gf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ne.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Zf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, qf(t) && ep(e);
}
function Jf(e, t, n) {
  return n(function() {
    qf(t) && ep(e);
  });
}
function qf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ft(e, n);
  } catch {
    return !0;
  }
}
function ep(e) {
  var t = Mt(e, 1);
  t !== null && dt(t, e, 1, -1);
}
function rc(e) {
  var t = gt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: to, lastRenderedState: e }, t.queue = e, e = e.dispatch = G0.bind(null, ne, e), [t.memoizedState, e];
}
function no(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ne.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function tp() {
  return ot().memoizedState;
}
function Xo(e, t, n, r) {
  var o = gt();
  ne.flags |= e, o.memoizedState = no(1 | t, n, void 0, r === void 0 ? null : r);
}
function Gi(e, t, n, r) {
  var o = ot();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ue !== null) {
    var l = ue.memoizedState;
    if (i = l.destroy, r !== null && zu(r, l.deps)) {
      o.memoizedState = no(t, n, i, r);
      return;
    }
  }
  ne.flags |= e, o.memoizedState = no(1 | t, n, i, r);
}
function oc(e, t) {
  return Xo(8390656, 8, e, t);
}
function Iu(e, t) {
  return Gi(2048, 8, e, t);
}
function np(e, t) {
  return Gi(4, 2, e, t);
}
function rp(e, t) {
  return Gi(4, 4, e, t);
}
function op(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function ip(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Gi(4, 4, op.bind(null, t, e), n);
}
function Du() {
}
function lp(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function sp(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function up(e, t, n) {
  return $n & 21 ? (ft(n, t) || (n = pf(), ne.lanes |= n, Tn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Fe = !0), e.memoizedState = n);
}
function X0(e, t) {
  var n = B;
  B = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Rl.transition;
  Rl.transition = {};
  try {
    e(!1), t();
  } finally {
    B = n, Rl.transition = r;
  }
}
function ap() {
  return ot().memoizedState;
}
function K0(e, t, n) {
  var r = Jt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, cp(e)) dp(t, n);
  else if (n = Hf(e, t, n, r), n !== null) {
    var o = $e();
    dt(n, e, r, o), fp(n, t, r);
  }
}
function G0(e, t, n) {
  var r = Jt(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (cp(e)) dp(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var l = t.lastRenderedState, s = i(l, n);
      if (o.hasEagerState = !0, o.eagerState = s, ft(s, l)) {
        var u = t.interleaved;
        u === null ? (o.next = o, Nu(t)) : (o.next = u.next, u.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Hf(e, t, o, r), n !== null && (o = $e(), dt(n, e, r, o), fp(n, t, r));
  }
}
function cp(e) {
  var t = e.alternate;
  return e === ne || t !== null && t === ne;
}
function dp(e, t) {
  Lr = Ti = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function fp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, hu(e, n);
  }
}
var Ni = { readContext: rt, useCallback: xe, useContext: xe, useEffect: xe, useImperativeHandle: xe, useInsertionEffect: xe, useLayoutEffect: xe, useMemo: xe, useReducer: xe, useRef: xe, useState: xe, useDebugValue: xe, useDeferredValue: xe, useTransition: xe, useMutableSource: xe, useSyncExternalStore: xe, useId: xe, unstable_isNewReconciler: !1 }, Z0 = { readContext: rt, useCallback: function(e, t) {
  return gt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: rt, useEffect: oc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Xo(
    4194308,
    4,
    op.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Xo(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Xo(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = gt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = gt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = K0.bind(null, ne, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = gt();
  return e = { current: e }, t.memoizedState = e;
}, useState: rc, useDebugValue: Du, useDeferredValue: function(e) {
  return gt().memoizedState = e;
}, useTransition: function() {
  var e = rc(!1), t = e[0];
  return e = X0.bind(null, e[1]), gt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ne, o = gt();
  if (ee) {
    if (n === void 0) throw Error(S(407));
    n = n();
  } else {
    if (n = t(), fe === null) throw Error(S(349));
    $n & 30 || Gf(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, oc(Jf.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, no(9, Zf.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = gt(), t = fe.identifierPrefix;
  if (ee) {
    var n = $t, r = Et;
    n = (r & ~(1 << 32 - ct(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = eo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Y0++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, J0 = {
  readContext: rt,
  useCallback: lp,
  useContext: rt,
  useEffect: Iu,
  useImperativeHandle: ip,
  useInsertionEffect: np,
  useLayoutEffect: rp,
  useMemo: sp,
  useReducer: zl,
  useRef: tp,
  useState: function() {
    return zl(to);
  },
  useDebugValue: Du,
  useDeferredValue: function(e) {
    var t = ot();
    return up(t, ue.memoizedState, e);
  },
  useTransition: function() {
    var e = zl(to)[0], t = ot().memoizedState;
    return [e, t];
  },
  useMutableSource: Xf,
  useSyncExternalStore: Kf,
  useId: ap,
  unstable_isNewReconciler: !1
}, q0 = { readContext: rt, useCallback: lp, useContext: rt, useEffect: Iu, useImperativeHandle: ip, useInsertionEffect: np, useLayoutEffect: rp, useMemo: sp, useReducer: Fl, useRef: tp, useState: function() {
  return Fl(to);
}, useDebugValue: Du, useDeferredValue: function(e) {
  var t = ot();
  return ue === null ? t.memoizedState = e : up(t, ue.memoizedState, e);
}, useTransition: function() {
  var e = Fl(to)[0], t = ot().memoizedState;
  return [e, t];
}, useMutableSource: Xf, useSyncExternalStore: Kf, useId: ap, unstable_isNewReconciler: !1 };
function lt(e, t) {
  if (e && e.defaultProps) {
    t = re({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ps(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : re({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Zi = { isMounted: function(e) {
  return (e = e._reactInternals) ? Mn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), o = Jt(e), i = Tt(r, o);
  i.payload = t, n != null && (i.callback = n), t = Gt(e, i, o), t !== null && (dt(t, e, o, r), Qo(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), o = Jt(e), i = Tt(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Gt(e, i, o), t !== null && (dt(t, e, o, r), Qo(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = $e(), r = Jt(e), o = Tt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Gt(e, o, r), t !== null && (dt(t, e, r, n), Qo(t, e, r));
} };
function ic(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Xr(n, r) || !Xr(o, i) : !0;
}
function pp(e, t, n) {
  var r = !1, o = tn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = rt(i) : (o = Ie(t) ? _n : Ce.current, r = t.contextTypes, i = (r = r != null) ? Jn(e, o) : tn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Zi, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function lc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Zi.enqueueReplaceState(t, t.state, null);
}
function Ms(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Pu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = rt(i) : (i = Ie(t) ? _n : Ce.current, o.context = Jn(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ps(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Zi.enqueueReplaceState(o, o.state, null), Ei(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function nr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Tm(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ll(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function js(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var ey = typeof WeakMap == "function" ? WeakMap : Map;
function hp(e, t, n) {
  n = Tt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Mi || (Mi = !0, Us = r), js(e, t);
  }, n;
}
function mp(e, t, n) {
  n = Tt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      js(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    js(e, t), typeof r != "function" && (Zt === null ? Zt = /* @__PURE__ */ new Set([this]) : Zt.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function sc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ey();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = hy.bind(null, e, t, n), t.then(e, e));
}
function uc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ac(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Tt(-1, 1), t.tag = 2, Gt(n, t, 1))), n.lanes |= 1), e);
}
var ty = Ft.ReactCurrentOwner, Fe = !1;
function _e(e, t, n, r) {
  t.child = e === null ? Bf(t, null, n, r) : er(t, e.child, n, r);
}
function cc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Kn(t, o), r = Fu(e, t, n, r, i, o), n = Lu(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, jt(e, t, o)) : (ee && n && Su(t), t.flags |= 1, _e(e, t, r, o), t.child);
}
function dc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Hu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, yp(e, t, i, r, o)) : (e = Jo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Xr, n(l, r) && e.ref === t.ref) return jt(e, t, o);
  }
  return t.flags |= 1, e = qt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function yp(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Xr(i, r) && e.ref === t.ref) if (Fe = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Fe = !0);
    else return t.lanes = e.lanes, jt(e, t, o);
  }
  return Rs(e, t, n, r, o);
}
function gp(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, X(Bn, We), We |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, X(Bn, We), We |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, X(Bn, We), We |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, X(Bn, We), We |= r;
  return _e(e, t, o, n), t.child;
}
function vp(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Rs(e, t, n, r, o) {
  var i = Ie(n) ? _n : Ce.current;
  return i = Jn(t, i), Kn(t, o), n = Fu(e, t, n, r, i, o), r = Lu(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, jt(e, t, o)) : (ee && r && Su(t), t.flags |= 1, _e(e, t, n, o), t.child);
}
function fc(e, t, n, r, o) {
  if (Ie(n)) {
    var i = !0;
    xi(t);
  } else i = !1;
  if (Kn(t, o), t.stateNode === null) Ko(e, t), pp(t, n, r), Ms(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, s = t.memoizedProps;
    l.props = s;
    var u = l.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = rt(a) : (a = Ie(n) ? _n : Ce.current, a = Jn(t, a));
    var d = n.getDerivedStateFromProps, f = typeof d == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || u !== a) && lc(t, l, r, a), bt = !1;
    var m = t.memoizedState;
    l.state = m, Ei(t, r, l, o), u = t.memoizedState, s !== r || m !== u || Le.current || bt ? (typeof d == "function" && (Ps(t, n, d, r), u = t.memoizedState), (s = bt || ic(t, n, s, r, m, u, a)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), l.props = r, l.state = u, l.context = a, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, Qf(e, t), s = t.memoizedProps, a = t.type === t.elementType ? s : lt(t.type, s), l.props = a, f = t.pendingProps, m = l.context, u = n.contextType, typeof u == "object" && u !== null ? u = rt(u) : (u = Ie(n) ? _n : Ce.current, u = Jn(t, u));
    var y = n.getDerivedStateFromProps;
    (d = typeof y == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== f || m !== u) && lc(t, l, r, u), bt = !1, m = t.memoizedState, l.state = m, Ei(t, r, l, o);
    var g = t.memoizedState;
    s !== f || m !== g || Le.current || bt ? (typeof y == "function" && (Ps(t, n, y, r), g = t.memoizedState), (a = bt || ic(t, n, a, r, m, g, u) || !1) ? (d || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, g, u), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, g, u)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), l.props = r, l.state = g, l.context = u, r = a) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return zs(e, t, n, r, i, o);
}
function zs(e, t, n, r, o, i) {
  vp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Za(t, n, !1), jt(e, t, i);
  r = t.stateNode, ty.current = t;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = er(t, e.child, null, i), t.child = er(t, null, s, i)) : _e(e, t, s, i), t.memoizedState = r.state, o && Za(t, n, !0), t.child;
}
function wp(e) {
  var t = e.stateNode;
  t.pendingContext ? Ga(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ga(e, t.context, !1), Mu(e, t.containerInfo);
}
function pc(e, t, n, r, o) {
  return qn(), _u(o), t.flags |= 256, _e(e, t, n, r), t.child;
}
var Fs = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ls(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function xp(e, t, n) {
  var r = t.pendingProps, o = te.current, i = !1, l = (t.flags & 128) !== 0, s;
  if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), X(te, o & 1), e === null)
    return Ts(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = el(l, r, 0, null), e = Cn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Ls(n), t.memoizedState = Fs, e) : Ou(t, l));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return ny(e, t, l, r, s, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, s = o.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = qt(o, u), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = qt(s, i) : (i = Cn(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? Ls(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = Fs, r;
  }
  return i = e.child, e = i.sibling, r = qt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ou(e, t) {
  return t = el({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Po(e, t, n, r) {
  return r !== null && _u(r), er(t, e.child, null, n), e = Ou(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function ny(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ll(Error(S(422))), Po(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = el({ mode: "visible", children: r.children }, o, 0, null), i = Cn(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && er(t, e.child, null, l), t.child.memoizedState = Ls(l), t.memoizedState = Fs, i);
  if (!(t.mode & 1)) return Po(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
    return r = s, i = Error(S(419)), r = Ll(i, r, void 0), Po(e, t, l, r);
  }
  if (s = (l & e.childLanes) !== 0, Fe || s) {
    if (r = fe, r !== null) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Mt(e, o), dt(r, e, o, -1));
    }
    return Bu(), r = Ll(Error(S(421))), Po(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = my.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Xe = Kt(o.nextSibling), Ke = t, ee = !0, ut = null, e !== null && (qe[et++] = Et, qe[et++] = $t, qe[et++] = En, Et = e.id, $t = e.overflow, En = t), t = Ou(t, r.children), t.flags |= 4096, t);
}
function hc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ns(e.return, t, n);
}
function Il(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function kp(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (_e(e, t, r.children, n), r = te.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && hc(e, n, t);
      else if (e.tag === 19) hc(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (X(te, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && $i(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Il(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && $i(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Il(t, !0, n, null, i);
      break;
    case "together":
      Il(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ko(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function jt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Tn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = qt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = qt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function ry(e, t, n) {
  switch (t.tag) {
    case 3:
      wp(t), qn();
      break;
    case 5:
      Yf(t);
      break;
    case 1:
      Ie(t.type) && xi(t);
      break;
    case 4:
      Mu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      X(Ci, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (X(te, te.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? xp(e, t, n) : (X(te, te.current & 1), e = jt(e, t, n), e !== null ? e.sibling : null);
      X(te, te.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return kp(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), X(te, te.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, gp(e, t, n);
  }
  return jt(e, t, n);
}
var Sp, Is, Cp, _p;
Sp = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Is = function() {
};
Cp = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, wn(xt.current);
    var i = null;
    switch (n) {
      case "input":
        o = os(e, o), r = os(e, r), i = [];
        break;
      case "select":
        o = re({}, o, { value: void 0 }), r = re({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = ss(e, o), r = ss(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = vi);
    }
    as(n, r);
    var l;
    n = null;
    for (a in o) if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null) if (a === "style") {
      var s = o[a];
      for (l in s) s.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Ur.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (s = o != null ? o[a] : void 0, r.hasOwnProperty(a) && u !== s && (u != null || s != null)) if (a === "style") if (s) {
        for (l in s) !s.hasOwnProperty(l) || u && u.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in u) u.hasOwnProperty(l) && s[l] !== u[l] && (n || (n = {}), n[l] = u[l]);
      } else n || (i || (i = []), i.push(
        a,
        n
      )), n = u;
      else a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (i = i || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Ur.hasOwnProperty(a) ? (u != null && a === "onScroll" && Z("scroll", e), i || s === u || (i = [])) : (i = i || []).push(a, u));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
_p = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yr(e, t) {
  if (!ee) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function ke(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function oy(e, t, n) {
  var r = t.pendingProps;
  switch (Cu(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ke(t), null;
    case 1:
      return Ie(t.type) && wi(), ke(t), null;
    case 3:
      return r = t.stateNode, tr(), q(Le), q(Ce), Ru(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (To(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ut !== null && (Bs(ut), ut = null))), Is(e, t), ke(t), null;
    case 5:
      ju(t);
      var o = wn(qr.current);
      if (n = t.type, e !== null && t.stateNode != null) Cp(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return ke(t), null;
        }
        if (e = wn(xt.current), To(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[vt] = t, r[Zr] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Z("cancel", r), Z("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Z("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Er.length; o++) Z(Er[o], r);
              break;
            case "source":
              Z("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Z(
                "error",
                r
              ), Z("load", r);
              break;
            case "details":
              Z("toggle", r);
              break;
            case "input":
              Ca(r, i), Z("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Z("invalid", r);
              break;
            case "textarea":
              Ea(r, i), Z("invalid", r);
          }
          as(n, i), o = null;
          for (var l in i) if (i.hasOwnProperty(l)) {
            var s = i[l];
            l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && $o(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && $o(
              r.textContent,
              s,
              e
            ), o = ["children", "" + s]) : Ur.hasOwnProperty(l) && s != null && l === "onScroll" && Z("scroll", r);
          }
          switch (n) {
            case "input":
              vo(r), _a(r, i, !0);
              break;
            case "textarea":
              vo(r), $a(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = vi);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Zd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[vt] = t, e[Zr] = r, Sp(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = cs(n, r), n) {
              case "dialog":
                Z("cancel", e), Z("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Z("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Er.length; o++) Z(Er[o], e);
                o = r;
                break;
              case "source":
                Z("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Z(
                  "error",
                  e
                ), Z("load", e), o = r;
                break;
              case "details":
                Z("toggle", e), o = r;
                break;
              case "input":
                Ca(e, r), o = os(e, r), Z("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = re({}, r, { value: void 0 }), Z("invalid", e);
                break;
              case "textarea":
                Ea(e, r), o = ss(e, r), Z("invalid", e);
                break;
              default:
                o = r;
            }
            as(n, o), s = o;
            for (i in s) if (s.hasOwnProperty(i)) {
              var u = s[i];
              i === "style" ? ef(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Jd(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Wr(e, u) : typeof u == "number" && Wr(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ur.hasOwnProperty(i) ? u != null && i === "onScroll" && Z("scroll", e) : u != null && uu(e, i, u, l));
            }
            switch (n) {
              case "input":
                vo(e), _a(e, r, !1);
                break;
              case "textarea":
                vo(e), $a(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + en(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Hn(e, !!r.multiple, i, !1) : r.defaultValue != null && Hn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = vi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return ke(t), null;
    case 6:
      if (e && t.stateNode != null) _p(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (n = wn(qr.current), wn(xt.current), To(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[vt] = t, (i = r.nodeValue !== n) && (e = Ke, e !== null)) switch (e.tag) {
            case 3:
              $o(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && $o(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[vt] = t, t.stateNode = r;
      }
      return ke(t), null;
    case 13:
      if (q(te), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ee && Xe !== null && t.mode & 1 && !(t.flags & 128)) Wf(), qn(), t.flags |= 98560, i = !1;
        else if (i = To(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(S(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(S(317));
            i[vt] = t;
          } else qn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ke(t), i = !1;
        } else ut !== null && (Bs(ut), ut = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || te.current & 1 ? ae === 0 && (ae = 3) : Bu())), t.updateQueue !== null && (t.flags |= 4), ke(t), null);
    case 4:
      return tr(), Is(e, t), e === null && Kr(t.stateNode.containerInfo), ke(t), null;
    case 10:
      return Tu(t.type._context), ke(t), null;
    case 17:
      return Ie(t.type) && wi(), ke(t), null;
    case 19:
      if (q(te), i = t.memoizedState, i === null) return ke(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) yr(i, !1);
      else {
        if (ae !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = $i(e), l !== null) {
            for (t.flags |= 128, yr(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return X(te, te.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && le() > rr && (t.flags |= 128, r = !0, yr(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = $i(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), yr(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !ee) return ke(t), null;
        } else 2 * le() - i.renderingStartTime > rr && n !== 1073741824 && (t.flags |= 128, r = !0, yr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = le(), t.sibling = null, n = te.current, X(te, r ? n & 1 | 2 : n & 1), t) : (ke(t), null);
    case 22:
    case 23:
      return Vu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? We & 1073741824 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ke(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function iy(e, t) {
  switch (Cu(t), t.tag) {
    case 1:
      return Ie(t.type) && wi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return tr(), q(Le), q(Ce), Ru(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return ju(t), null;
    case 13:
      if (q(te), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(S(340));
        qn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return q(te), null;
    case 4:
      return tr(), null;
    case 10:
      return Tu(t.type._context), null;
    case 22:
    case 23:
      return Vu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Mo = !1, Se = !1, ly = typeof WeakSet == "function" ? WeakSet : Set, N = null;
function Vn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    oe(e, t, r);
  }
  else n.current = null;
}
function Ds(e, t, n) {
  try {
    n();
  } catch (r) {
    oe(e, t, r);
  }
}
var mc = !1;
function sy(e, t) {
  if (xs = mi, e = Pf(), ku(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var l = 0, s = -1, u = -1, a = 0, d = 0, f = e, m = null;
        t: for (; ; ) {
          for (var y; f !== n || o !== 0 && f.nodeType !== 3 || (s = l + o), f !== i || r !== 0 && f.nodeType !== 3 || (u = l + r), f.nodeType === 3 && (l += f.nodeValue.length), (y = f.firstChild) !== null; )
            m = f, f = y;
          for (; ; ) {
            if (f === e) break t;
            if (m === n && ++a === o && (s = l), m === i && ++d === r && (u = l), (y = f.nextSibling) !== null) break;
            f = m, m = f.parentNode;
          }
          f = y;
        }
        n = s === -1 || u === -1 ? null : { start: s, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ks = { focusedElem: e, selectionRange: n }, mi = !1, N = t; N !== null; ) if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, N = e;
  else for (; N !== null; ) {
    t = N;
    try {
      var g = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (g !== null) {
            var x = g.memoizedProps, k = g.memoizedState, p = t.stateNode, c = p.getSnapshotBeforeUpdate(t.elementType === t.type ? x : lt(t.type, x), k);
            p.__reactInternalSnapshotBeforeUpdate = c;
          }
          break;
        case 3:
          var h = t.stateNode.containerInfo;
          h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(S(163));
      }
    } catch (w) {
      oe(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, N = e;
      break;
    }
    N = t.return;
  }
  return g = mc, mc = !1, g;
}
function Ir(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Ds(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ji(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Os(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Ep(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Ep(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[vt], delete t[Zr], delete t[_s], delete t[V0], delete t[B0])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function $p(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function yc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || $p(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function bs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = vi));
  else if (r !== 4 && (e = e.child, e !== null)) for (bs(e, t, n), e = e.sibling; e !== null; ) bs(e, t, n), e = e.sibling;
}
function As(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (As(e, t, n), e = e.sibling; e !== null; ) As(e, t, n), e = e.sibling;
}
var pe = null, st = !1;
function Lt(e, t, n) {
  for (n = n.child; n !== null; ) Tp(e, t, n), n = n.sibling;
}
function Tp(e, t, n) {
  if (wt && typeof wt.onCommitFiberUnmount == "function") try {
    wt.onCommitFiberUnmount(Bi, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Se || Vn(n, t);
    case 6:
      var r = pe, o = st;
      pe = null, Lt(e, t, n), pe = r, st = o, pe !== null && (st ? (e = pe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : pe.removeChild(n.stateNode));
      break;
    case 18:
      pe !== null && (st ? (e = pe, n = n.stateNode, e.nodeType === 8 ? Pl(e.parentNode, n) : e.nodeType === 1 && Pl(e, n), Qr(e)) : Pl(pe, n.stateNode));
      break;
    case 4:
      r = pe, o = st, pe = n.stateNode.containerInfo, st = !0, Lt(e, t, n), pe = r, st = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Se && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && Ds(n, t, l), o = o.next;
        } while (o !== r);
      }
      Lt(e, t, n);
      break;
    case 1:
      if (!Se && (Vn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        oe(n, t, s);
      }
      Lt(e, t, n);
      break;
    case 21:
      Lt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Se = (r = Se) || n.memoizedState !== null, Lt(e, t, n), Se = r) : Lt(e, t, n);
      break;
    default:
      Lt(e, t, n);
  }
}
function gc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ly()), t.forEach(function(r) {
      var o = yy.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function it(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, l = t, s = l;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            pe = s.stateNode, st = !1;
            break e;
          case 3:
            pe = s.stateNode.containerInfo, st = !0;
            break e;
          case 4:
            pe = s.stateNode.containerInfo, st = !0;
            break e;
        }
        s = s.return;
      }
      if (pe === null) throw Error(S(160));
      Tp(i, l, o), pe = null, st = !1;
      var u = o.alternate;
      u !== null && (u.return = null), o.return = null;
    } catch (a) {
      oe(o, t, a);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Np(t, e), t = t.sibling;
}
function Np(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (it(t, e), pt(e), r & 4) {
        try {
          Ir(3, e, e.return), Ji(3, e);
        } catch (x) {
          oe(e, e.return, x);
        }
        try {
          Ir(5, e, e.return);
        } catch (x) {
          oe(e, e.return, x);
        }
      }
      break;
    case 1:
      it(t, e), pt(e), r & 512 && n !== null && Vn(n, n.return);
      break;
    case 5:
      if (it(t, e), pt(e), r & 512 && n !== null && Vn(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Wr(o, "");
        } catch (x) {
          oe(e, e.return, x);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, s = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          s === "input" && i.type === "radio" && i.name != null && Kd(o, i), cs(s, l);
          var a = cs(s, i);
          for (l = 0; l < u.length; l += 2) {
            var d = u[l], f = u[l + 1];
            d === "style" ? ef(o, f) : d === "dangerouslySetInnerHTML" ? Jd(o, f) : d === "children" ? Wr(o, f) : uu(o, d, f, a);
          }
          switch (s) {
            case "input":
              is(o, i);
              break;
            case "textarea":
              Gd(o, i);
              break;
            case "select":
              var m = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var y = i.value;
              y != null ? Hn(o, !!i.multiple, y, !1) : m !== !!i.multiple && (i.defaultValue != null ? Hn(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Hn(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[Zr] = i;
        } catch (x) {
          oe(e, e.return, x);
        }
      }
      break;
    case 6:
      if (it(t, e), pt(e), r & 4) {
        if (e.stateNode === null) throw Error(S(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (x) {
          oe(e, e.return, x);
        }
      }
      break;
    case 3:
      if (it(t, e), pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Qr(t.containerInfo);
      } catch (x) {
        oe(e, e.return, x);
      }
      break;
    case 4:
      it(t, e), pt(e);
      break;
    case 13:
      it(t, e), pt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Uu = le())), r & 4 && gc(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Se = (a = Se) || d, it(t, e), Se = a) : it(t, e), pt(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !d && e.mode & 1) for (N = e, d = e.child; d !== null; ) {
          for (f = N = d; N !== null; ) {
            switch (m = N, y = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Ir(4, m, m.return);
                break;
              case 1:
                Vn(m, m.return);
                var g = m.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (x) {
                    oe(r, n, x);
                  }
                }
                break;
              case 5:
                Vn(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  wc(f);
                  continue;
                }
            }
            y !== null ? (y.return = m, N = y) : wc(f);
          }
          d = d.sibling;
        }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                o = f.stateNode, a ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = f.stateNode, u = f.memoizedProps.style, l = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = qd("display", l));
              } catch (x) {
                oe(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (d === null) try {
              f.stateNode.nodeValue = a ? "" : f.memoizedProps;
            } catch (x) {
              oe(e, e.return, x);
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), f = f.return;
          }
          d === f && (d = null), f.sibling.return = f.return, f = f.sibling;
        }
      }
      break;
    case 19:
      it(t, e), pt(e), r & 4 && gc(e);
      break;
    case 21:
      break;
    default:
      it(
        t,
        e
      ), pt(e);
  }
}
function pt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if ($p(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Wr(o, ""), r.flags &= -33);
          var i = yc(e);
          As(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, s = yc(e);
          bs(e, s, l);
          break;
        default:
          throw Error(S(161));
      }
    } catch (u) {
      oe(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function uy(e, t, n) {
  N = e, Pp(e);
}
function Pp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var o = N, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Mo;
      if (!l) {
        var s = o.alternate, u = s !== null && s.memoizedState !== null || Se;
        s = Mo;
        var a = Se;
        if (Mo = l, (Se = u) && !a) for (N = o; N !== null; ) l = N, u = l.child, l.tag === 22 && l.memoizedState !== null ? xc(o) : u !== null ? (u.return = l, N = u) : xc(o);
        for (; i !== null; ) N = i, Pp(i), i = i.sibling;
        N = o, Mo = s, Se = a;
      }
      vc(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, N = i) : vc(e);
  }
}
function vc(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Se || Ji(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Se) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : lt(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && nc(t, i, r);
            break;
          case 3:
            var l = t.updateQueue;
            if (l !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              nc(t, l, n);
            }
            break;
          case 5:
            var s = t.stateNode;
            if (n === null && t.flags & 4) {
              n = s;
              var u = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u.autoFocus && n.focus();
                  break;
                case "img":
                  u.src && (n.src = u.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var a = t.alternate;
              if (a !== null) {
                var d = a.memoizedState;
                if (d !== null) {
                  var f = d.dehydrated;
                  f !== null && Qr(f);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(S(163));
        }
        Se || t.flags & 512 && Os(t);
      } catch (m) {
        oe(t, t.return, m);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, N = n;
      break;
    }
    N = t.return;
  }
}
function wc(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, N = n;
      break;
    }
    N = t.return;
  }
}
function xc(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ji(4, t);
          } catch (u) {
            oe(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              oe(t, o, u);
            }
          }
          var i = t.return;
          try {
            Os(t);
          } catch (u) {
            oe(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Os(t);
          } catch (u) {
            oe(t, l, u);
          }
      }
    } catch (u) {
      oe(t, t.return, u);
    }
    if (t === e) {
      N = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, N = s;
      break;
    }
    N = t.return;
  }
}
var ay = Math.ceil, Pi = Ft.ReactCurrentDispatcher, bu = Ft.ReactCurrentOwner, nt = Ft.ReactCurrentBatchConfig, U = 0, fe = null, se = null, me = 0, We = 0, Bn = on(0), ae = 0, ro = null, Tn = 0, qi = 0, Au = 0, Dr = null, ze = null, Uu = 0, rr = 1 / 0, Ct = null, Mi = !1, Us = null, Zt = null, jo = !1, Vt = null, ji = 0, Or = 0, Ws = null, Go = -1, Zo = 0;
function $e() {
  return U & 6 ? le() : Go !== -1 ? Go : Go = le();
}
function Jt(e) {
  return e.mode & 1 ? U & 2 && me !== 0 ? me & -me : Q0.transition !== null ? (Zo === 0 && (Zo = pf()), Zo) : (e = B, e !== 0 || (e = window.event, e = e === void 0 ? 16 : xf(e.type)), e) : 1;
}
function dt(e, t, n, r) {
  if (50 < Or) throw Or = 0, Ws = null, Error(S(185));
  ao(e, n, r), (!(U & 2) || e !== fe) && (e === fe && (!(U & 2) && (qi |= n), ae === 4 && Ut(e, me)), De(e, r), n === 1 && U === 0 && !(t.mode & 1) && (rr = le() + 500, Ki && ln()));
}
function De(e, t) {
  var n = e.callbackNode;
  Qm(e, t);
  var r = hi(e, e === fe ? me : 0);
  if (r === 0) n !== null && Pa(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Pa(n), t === 1) e.tag === 0 ? H0(kc.bind(null, e)) : bf(kc.bind(null, e)), U0(function() {
      !(U & 6) && ln();
    }), n = null;
    else {
      switch (hf(r)) {
        case 1:
          n = pu;
          break;
        case 4:
          n = df;
          break;
        case 16:
          n = pi;
          break;
        case 536870912:
          n = ff;
          break;
        default:
          n = pi;
      }
      n = Dp(n, Mp.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Mp(e, t) {
  if (Go = -1, Zo = 0, U & 6) throw Error(S(327));
  var n = e.callbackNode;
  if (Gn() && e.callbackNode !== n) return null;
  var r = hi(e, e === fe ? me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ri(e, r);
  else {
    t = r;
    var o = U;
    U |= 2;
    var i = Rp();
    (fe !== e || me !== t) && (Ct = null, rr = le() + 500, Sn(e, t));
    do
      try {
        fy();
        break;
      } catch (s) {
        jp(e, s);
      }
    while (!0);
    $u(), Pi.current = i, U = o, se !== null ? t = 0 : (fe = null, me = 0, t = ae);
  }
  if (t !== 0) {
    if (t === 2 && (o = ms(e), o !== 0 && (r = o, t = Vs(e, o))), t === 1) throw n = ro, Sn(e, 0), Ut(e, r), De(e, le()), n;
    if (t === 6) Ut(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !cy(o) && (t = Ri(e, r), t === 2 && (i = ms(e), i !== 0 && (r = i, t = Vs(e, i))), t === 1)) throw n = ro, Sn(e, 0), Ut(e, r), De(e, le()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          fn(e, ze, Ct);
          break;
        case 3:
          if (Ut(e, r), (r & 130023424) === r && (t = Uu + 500 - le(), 10 < t)) {
            if (hi(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              $e(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Cs(fn.bind(null, e, ze, Ct), t);
            break;
          }
          fn(e, ze, Ct);
          break;
        case 4:
          if (Ut(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - ct(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = le() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ay(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Cs(fn.bind(null, e, ze, Ct), r);
            break;
          }
          fn(e, ze, Ct);
          break;
        case 5:
          fn(e, ze, Ct);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return De(e, le()), e.callbackNode === n ? Mp.bind(null, e) : null;
}
function Vs(e, t) {
  var n = Dr;
  return e.current.memoizedState.isDehydrated && (Sn(e, t).flags |= 256), e = Ri(e, t), e !== 2 && (t = ze, ze = n, t !== null && Bs(t)), e;
}
function Bs(e) {
  ze === null ? ze = e : ze.push.apply(ze, e);
}
function cy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!ft(i(), o)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Ut(e, t) {
  for (t &= ~Au, t &= ~qi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ct(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function kc(e) {
  if (U & 6) throw Error(S(327));
  Gn();
  var t = hi(e, 0);
  if (!(t & 1)) return De(e, le()), null;
  var n = Ri(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ms(e);
    r !== 0 && (t = r, n = Vs(e, r));
  }
  if (n === 1) throw n = ro, Sn(e, 0), Ut(e, t), De(e, le()), n;
  if (n === 6) throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, fn(e, ze, Ct), De(e, le()), null;
}
function Wu(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    U = n, U === 0 && (rr = le() + 500, Ki && ln());
  }
}
function Nn(e) {
  Vt !== null && Vt.tag === 0 && !(U & 6) && Gn();
  var t = U;
  U |= 1;
  var n = nt.transition, r = B;
  try {
    if (nt.transition = null, B = 1, e) return e();
  } finally {
    B = r, nt.transition = n, U = t, !(U & 6) && ln();
  }
}
function Vu() {
  We = Bn.current, q(Bn);
}
function Sn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, A0(n)), se !== null) for (n = se.return; n !== null; ) {
    var r = n;
    switch (Cu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && wi();
        break;
      case 3:
        tr(), q(Le), q(Ce), Ru();
        break;
      case 5:
        ju(r);
        break;
      case 4:
        tr();
        break;
      case 13:
        q(te);
        break;
      case 19:
        q(te);
        break;
      case 10:
        Tu(r.type._context);
        break;
      case 22:
      case 23:
        Vu();
    }
    n = n.return;
  }
  if (fe = e, se = e = qt(e.current, null), me = We = t, ae = 0, ro = null, Au = qi = Tn = 0, ze = Dr = null, vn !== null) {
    for (t = 0; t < vn.length; t++) if (n = vn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var l = i.next;
        i.next = o, r.next = l;
      }
      n.pending = r;
    }
    vn = null;
  }
  return e;
}
function jp(e, t) {
  do {
    var n = se;
    try {
      if ($u(), Yo.current = Ni, Ti) {
        for (var r = ne.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Ti = !1;
      }
      if ($n = 0, de = ue = ne = null, Lr = !1, eo = 0, bu.current = null, n === null || n.return === null) {
        ae = 1, ro = t, se = null;
        break;
      }
      e: {
        var i = e, l = n.return, s = n, u = t;
        if (t = me, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var a = u, d = s, f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = d.alternate;
            m ? (d.updateQueue = m.updateQueue, d.memoizedState = m.memoizedState, d.lanes = m.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var y = uc(l);
          if (y !== null) {
            y.flags &= -257, ac(y, l, s, i, t), y.mode & 1 && sc(i, a, t), t = y, u = a;
            var g = t.updateQueue;
            if (g === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(u), t.updateQueue = x;
            } else g.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              sc(i, a, t), Bu();
              break e;
            }
            u = Error(S(426));
          }
        } else if (ee && s.mode & 1) {
          var k = uc(l);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), ac(k, l, s, i, t), _u(nr(u, s));
            break e;
          }
        }
        i = u = nr(u, s), ae !== 4 && (ae = 2), Dr === null ? Dr = [i] : Dr.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = hp(i, u, t);
              tc(i, p);
              break e;
            case 1:
              s = u;
              var c = i.type, h = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Zt === null || !Zt.has(h)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = mp(i, s, t);
                tc(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Fp(n);
    } catch (C) {
      t = C, se === n && n !== null && (se = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Rp() {
  var e = Pi.current;
  return Pi.current = Ni, e === null ? Ni : e;
}
function Bu() {
  (ae === 0 || ae === 3 || ae === 2) && (ae = 4), fe === null || !(Tn & 268435455) && !(qi & 268435455) || Ut(fe, me);
}
function Ri(e, t) {
  var n = U;
  U |= 2;
  var r = Rp();
  (fe !== e || me !== t) && (Ct = null, Sn(e, t));
  do
    try {
      dy();
      break;
    } catch (o) {
      jp(e, o);
    }
  while (!0);
  if ($u(), U = n, Pi.current = r, se !== null) throw Error(S(261));
  return fe = null, me = 0, ae;
}
function dy() {
  for (; se !== null; ) zp(se);
}
function fy() {
  for (; se !== null && !Dm(); ) zp(se);
}
function zp(e) {
  var t = Ip(e.alternate, e, We);
  e.memoizedProps = e.pendingProps, t === null ? Fp(e) : se = t, bu.current = null;
}
function Fp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = iy(n, t), n !== null) {
        n.flags &= 32767, se = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ae = 6, se = null;
        return;
      }
    } else if (n = oy(n, t, We), n !== null) {
      se = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  ae === 0 && (ae = 5);
}
function fn(e, t, n) {
  var r = B, o = nt.transition;
  try {
    nt.transition = null, B = 1, py(e, t, n, r);
  } finally {
    nt.transition = o, B = r;
  }
  return null;
}
function py(e, t, n, r) {
  do
    Gn();
  while (Vt !== null);
  if (U & 6) throw Error(S(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Ym(e, i), e === fe && (se = fe = null, me = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || jo || (jo = !0, Dp(pi, function() {
    return Gn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = nt.transition, nt.transition = null;
    var l = B;
    B = 1;
    var s = U;
    U |= 4, bu.current = null, sy(e, n), Np(n, e), z0(ks), mi = !!xs, ks = xs = null, e.current = n, uy(n), Om(), U = s, B = l, nt.transition = i;
  } else e.current = n;
  if (jo && (jo = !1, Vt = e, ji = o), i = e.pendingLanes, i === 0 && (Zt = null), Um(n.stateNode), De(e, le()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Mi) throw Mi = !1, e = Us, Us = null, e;
  return ji & 1 && e.tag !== 0 && Gn(), i = e.pendingLanes, i & 1 ? e === Ws ? Or++ : (Or = 0, Ws = e) : Or = 0, ln(), null;
}
function Gn() {
  if (Vt !== null) {
    var e = hf(ji), t = nt.transition, n = B;
    try {
      if (nt.transition = null, B = 16 > e ? 16 : e, Vt === null) var r = !1;
      else {
        if (e = Vt, Vt = null, ji = 0, U & 6) throw Error(S(331));
        var o = U;
        for (U |= 4, N = e.current; N !== null; ) {
          var i = N, l = i.child;
          if (N.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (N = a; N !== null; ) {
                  var d = N;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ir(8, d, i);
                  }
                  var f = d.child;
                  if (f !== null) f.return = d, N = f;
                  else for (; N !== null; ) {
                    d = N;
                    var m = d.sibling, y = d.return;
                    if (Ep(d), d === a) {
                      N = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = y, N = m;
                      break;
                    }
                    N = y;
                  }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var x = g.child;
                if (x !== null) {
                  g.child = null;
                  do {
                    var k = x.sibling;
                    x.sibling = null, x = k;
                  } while (x !== null);
                }
              }
              N = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) l.return = i, N = l;
          else e: for (; N !== null; ) {
            if (i = N, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Ir(9, i, i.return);
            }
            var p = i.sibling;
            if (p !== null) {
              p.return = i.return, N = p;
              break e;
            }
            N = i.return;
          }
        }
        var c = e.current;
        for (N = c; N !== null; ) {
          l = N;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) h.return = l, N = h;
          else e: for (l = c; N !== null; ) {
            if (s = N, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Ji(9, s);
              }
            } catch (C) {
              oe(s, s.return, C);
            }
            if (s === l) {
              N = null;
              break e;
            }
            var w = s.sibling;
            if (w !== null) {
              w.return = s.return, N = w;
              break e;
            }
            N = s.return;
          }
        }
        if (U = o, ln(), wt && typeof wt.onPostCommitFiberRoot == "function") try {
          wt.onPostCommitFiberRoot(Bi, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      B = n, nt.transition = t;
    }
  }
  return !1;
}
function Sc(e, t, n) {
  t = nr(n, t), t = hp(e, t, 1), e = Gt(e, t, 1), t = $e(), e !== null && (ao(e, 1, t), De(e, t));
}
function oe(e, t, n) {
  if (e.tag === 3) Sc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Sc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Zt === null || !Zt.has(r))) {
        e = nr(n, e), e = mp(t, e, 1), t = Gt(t, e, 1), e = $e(), t !== null && (ao(t, 1, e), De(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function hy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = $e(), e.pingedLanes |= e.suspendedLanes & n, fe === e && (me & n) === n && (ae === 4 || ae === 3 && (me & 130023424) === me && 500 > le() - Uu ? Sn(e, 0) : Au |= n), De(e, t);
}
function Lp(e, t) {
  t === 0 && (e.mode & 1 ? (t = ko, ko <<= 1, !(ko & 130023424) && (ko = 4194304)) : t = 1);
  var n = $e();
  e = Mt(e, t), e !== null && (ao(e, t, n), De(e, n));
}
function my(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Lp(e, n);
}
function yy(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), Lp(e, n);
}
var Ip;
Ip = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Le.current) Fe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Fe = !1, ry(e, t, n);
    Fe = !!(e.flags & 131072);
  }
  else Fe = !1, ee && t.flags & 1048576 && Af(t, Si, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ko(e, t), e = t.pendingProps;
      var o = Jn(t, Ce.current);
      Kn(t, n), o = Fu(null, t, r, e, o, n);
      var i = Lu();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ie(r) ? (i = !0, xi(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Pu(t), o.updater = Zi, t.stateNode = o, o._reactInternals = t, Ms(t, r, e, n), t = zs(null, t, r, !0, i, n)) : (t.tag = 0, ee && i && Su(t), _e(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ko(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = vy(r), e = lt(r, e), o) {
          case 0:
            t = Rs(null, t, r, e, n);
            break e;
          case 1:
            t = fc(null, t, r, e, n);
            break e;
          case 11:
            t = cc(null, t, r, e, n);
            break e;
          case 14:
            t = dc(null, t, r, lt(r.type, e), n);
            break e;
        }
        throw Error(S(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), Rs(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), fc(e, t, r, o, n);
    case 3:
      e: {
        if (wp(t), e === null) throw Error(S(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Qf(e, t), Ei(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = nr(Error(S(423)), t), t = pc(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = nr(Error(S(424)), t), t = pc(e, t, r, n, o);
          break e;
        } else for (Xe = Kt(t.stateNode.containerInfo.firstChild), Ke = t, ee = !0, ut = null, n = Bf(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (qn(), r === o) {
            t = jt(e, t, n);
            break e;
          }
          _e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Yf(t), e === null && Ts(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, Ss(r, o) ? l = null : i !== null && Ss(r, i) && (t.flags |= 32), vp(e, t), _e(e, t, l, n), t.child;
    case 6:
      return e === null && Ts(t), null;
    case 13:
      return xp(e, t, n);
    case 4:
      return Mu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = er(t, null, r, n) : _e(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), cc(e, t, r, o, n);
    case 7:
      return _e(e, t, t.pendingProps, n), t.child;
    case 8:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, X(Ci, r._currentValue), r._currentValue = l, i !== null) if (ft(i.value, l)) {
          if (i.children === o.children && !Le.current) {
            t = jt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var s = i.dependencies;
          if (s !== null) {
            l = i.child;
            for (var u = s.firstContext; u !== null; ) {
              if (u.context === r) {
                if (i.tag === 1) {
                  u = Tt(-1, n & -n), u.tag = 2;
                  var a = i.updateQueue;
                  if (a !== null) {
                    a = a.shared;
                    var d = a.pending;
                    d === null ? u.next = u : (u.next = d.next, d.next = u), a.pending = u;
                  }
                }
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Ns(
                  i.return,
                  n,
                  t
                ), s.lanes |= n;
                break;
              }
              u = u.next;
            }
          } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (l = i.return, l === null) throw Error(S(341));
            l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), Ns(l, n, t), l = i.sibling;
          } else l = i.child;
          if (l !== null) l.return = i;
          else for (l = i; l !== null; ) {
            if (l === t) {
              l = null;
              break;
            }
            if (i = l.sibling, i !== null) {
              i.return = l.return, l = i;
              break;
            }
            l = l.return;
          }
          i = l;
        }
        _e(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Kn(t, n), o = rt(o), r = r(o), t.flags |= 1, _e(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = lt(r, t.pendingProps), o = lt(r.type, o), dc(e, t, r, o, n);
    case 15:
      return yp(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), Ko(e, t), t.tag = 1, Ie(r) ? (e = !0, xi(t)) : e = !1, Kn(t, n), pp(t, r, o), Ms(t, r, o, n), zs(null, t, r, !0, e, n);
    case 19:
      return kp(e, t, n);
    case 22:
      return gp(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Dp(e, t) {
  return cf(e, t);
}
function gy(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function tt(e, t, n, r) {
  return new gy(e, t, n, r);
}
function Hu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function vy(e) {
  if (typeof e == "function") return Hu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === cu) return 11;
    if (e === du) return 14;
  }
  return 2;
}
function qt(e, t) {
  var n = e.alternate;
  return n === null ? (n = tt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Jo(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function") Hu(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case Fn:
      return Cn(n.children, o, i, t);
    case au:
      l = 8, o |= 8;
      break;
    case es:
      return e = tt(12, n, t, o | 2), e.elementType = es, e.lanes = i, e;
    case ts:
      return e = tt(13, n, t, o), e.elementType = ts, e.lanes = i, e;
    case ns:
      return e = tt(19, n, t, o), e.elementType = ns, e.lanes = i, e;
    case Qd:
      return el(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Bd:
          l = 10;
          break e;
        case Hd:
          l = 9;
          break e;
        case cu:
          l = 11;
          break e;
        case du:
          l = 14;
          break e;
        case Ot:
          l = 16, r = null;
          break e;
      }
      throw Error(S(130, e == null ? e : typeof e, ""));
  }
  return t = tt(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Cn(e, t, n, r) {
  return e = tt(7, e, r, t), e.lanes = n, e;
}
function el(e, t, n, r) {
  return e = tt(22, e, r, t), e.elementType = Qd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Dl(e, t, n) {
  return e = tt(6, e, null, t), e.lanes = n, e;
}
function Ol(e, t, n) {
  return t = tt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function wy(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vl(0), this.expirationTimes = vl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Qu(e, t, n, r, o, i, l, s, u) {
  return e = new wy(e, t, n, s, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = tt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Pu(i), e;
}
function xy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: zn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Op(e) {
  if (!e) return tn;
  e = e._reactInternals;
  e: {
    if (Mn(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ie(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ie(n)) return Of(e, n, t);
  }
  return t;
}
function bp(e, t, n, r, o, i, l, s, u) {
  return e = Qu(n, r, !0, e, o, i, l, s, u), e.context = Op(null), n = e.current, r = $e(), o = Jt(n), i = Tt(r, o), i.callback = t ?? null, Gt(n, i, o), e.current.lanes = o, ao(e, o, r), De(e, r), e;
}
function tl(e, t, n, r) {
  var o = t.current, i = $e(), l = Jt(o);
  return n = Op(n), t.context === null ? t.context = n : t.pendingContext = n, t = Tt(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Gt(o, t, l), e !== null && (dt(e, o, l, i), Qo(e, o, l)), l;
}
function zi(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Cc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Yu(e, t) {
  Cc(e, t), (e = e.alternate) && Cc(e, t);
}
function ky() {
  return null;
}
var Ap = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Xu(e) {
  this._internalRoot = e;
}
nl.prototype.render = Xu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  tl(e, t, null, null);
};
nl.prototype.unmount = Xu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Nn(function() {
      tl(null, e, null, null);
    }), t[Pt] = null;
  }
};
function nl(e) {
  this._internalRoot = e;
}
nl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = gf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < At.length && t !== 0 && t < At[n].priority; n++) ;
    At.splice(n, 0, e), n === 0 && wf(e);
  }
};
function Ku(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function rl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function _c() {
}
function Sy(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var a = zi(l);
        i.call(a);
      };
    }
    var l = bp(t, r, e, 0, null, !1, !1, "", _c);
    return e._reactRootContainer = l, e[Pt] = l.current, Kr(e.nodeType === 8 ? e.parentNode : e), Nn(), l;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var a = zi(u);
      s.call(a);
    };
  }
  var u = Qu(e, 0, !1, null, null, !1, !1, "", _c);
  return e._reactRootContainer = u, e[Pt] = u.current, Kr(e.nodeType === 8 ? e.parentNode : e), Nn(function() {
    tl(t, u, n, r);
  }), u;
}
function ol(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var u = zi(l);
        s.call(u);
      };
    }
    tl(t, l, e, o);
  } else l = Sy(n, t, e, o, r);
  return zi(l);
}
mf = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _r(t.pendingLanes);
        n !== 0 && (hu(t, n | 1), De(t, le()), !(U & 6) && (rr = le() + 500, ln()));
      }
      break;
    case 13:
      Nn(function() {
        var r = Mt(e, 1);
        if (r !== null) {
          var o = $e();
          dt(r, e, 1, o);
        }
      }), Yu(e, 1);
  }
};
mu = function(e) {
  if (e.tag === 13) {
    var t = Mt(e, 134217728);
    if (t !== null) {
      var n = $e();
      dt(t, e, 134217728, n);
    }
    Yu(e, 134217728);
  }
};
yf = function(e) {
  if (e.tag === 13) {
    var t = Jt(e), n = Mt(e, t);
    if (n !== null) {
      var r = $e();
      dt(n, e, t, r);
    }
    Yu(e, t);
  }
};
gf = function() {
  return B;
};
vf = function(e, t) {
  var n = B;
  try {
    return B = e, t();
  } finally {
    B = n;
  }
};
fs = function(e, t, n) {
  switch (t) {
    case "input":
      if (is(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Xi(r);
            if (!o) throw Error(S(90));
            Xd(r), is(r, o);
          }
        }
      }
      break;
    case "textarea":
      Gd(e, n);
      break;
    case "select":
      t = n.value, t != null && Hn(e, !!n.multiple, t, !1);
  }
};
rf = Wu;
of = Nn;
var Cy = { usingClientEntryPoint: !1, Events: [fo, On, Xi, tf, nf, Wu] }, gr = { findFiberByHostInstance: gn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, _y = { bundleType: gr.bundleType, version: gr.version, rendererPackageName: gr.rendererPackageName, rendererConfig: gr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ft.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = uf(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: gr.findFiberByHostInstance || ky, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ro = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ro.isDisabled && Ro.supportsFiber) try {
    Bi = Ro.inject(_y), wt = Ro;
  } catch {
  }
}
Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cy;
Ze.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ku(t)) throw Error(S(200));
  return xy(e, t, null, n);
};
Ze.createRoot = function(e, t) {
  if (!Ku(e)) throw Error(S(299));
  var n = !1, r = "", o = Ap;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Qu(e, 1, !1, null, null, n, !1, r, o), e[Pt] = t.current, Kr(e.nodeType === 8 ? e.parentNode : e), new Xu(t);
};
Ze.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = uf(t), e = e === null ? null : e.stateNode, e;
};
Ze.flushSync = function(e) {
  return Nn(e);
};
Ze.hydrate = function(e, t, n) {
  if (!rl(t)) throw Error(S(200));
  return ol(null, e, t, !0, n);
};
Ze.hydrateRoot = function(e, t, n) {
  if (!Ku(e)) throw Error(S(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = Ap;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = bp(t, null, e, 1, n ?? null, o, !1, i, l), e[Pt] = t.current, Kr(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new nl(t);
};
Ze.render = function(e, t, n) {
  if (!rl(t)) throw Error(S(200));
  return ol(null, e, t, !1, n);
};
Ze.unmountComponentAtNode = function(e) {
  if (!rl(e)) throw Error(S(40));
  return e._reactRootContainer ? (Nn(function() {
    ol(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Pt] = null;
    });
  }), !0) : !1;
};
Ze.unstable_batchedUpdates = Wu;
Ze.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!rl(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return ol(e, t, n, !1, r);
};
Ze.version = "18.3.1-next-f1338f8080-20240426";
function Up() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Up);
    } catch (e) {
      console.error(e);
    }
}
Up(), Ad.exports = Ze;
var Wp = Ad.exports, Gu, Ec = Wp;
Gu = Ec.createRoot, Ec.hydrateRoot;
var Ey = Object.defineProperty, $y = (e, t, n) => t in e ? Ey(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, zo = (e, t, n) => $y(e, typeof t != "symbol" ? t + "" : t, n);
const Ty = {
  stringify: (e) => e ? "true" : "false",
  parse: (e) => /^[ty1-9]/i.test(e)
}, Ny = {
  stringify: (e) => e.name,
  parse: (e, t, n) => {
    const r = (() => {
      if (typeof window < "u" && e in window)
        return window[e];
      if (typeof global < "u" && e in global)
        return global[e];
    })();
    return typeof r == "function" ? r.bind(n) : void 0;
  }
}, Py = {
  stringify: (e) => JSON.stringify(e),
  parse: (e) => JSON.parse(e)
};
function My(e) {
  return e.replace(
    /([a-z0-9])([A-Z])/g,
    (t, n, r) => `${n}-${r.toLowerCase()}`
  );
}
function Vp(e) {
  return e.replace(/[-:]([a-z])/g, (t, n) => `${n.toUpperCase()}`);
}
const jy = {
  stringify: (e) => e.name,
  parse: (e, t, n) => {
    const r = (() => {
      const o = Vp(t);
      if (typeof n < "u" && o in n.container)
        return n.container[o];
    })();
    return typeof r == "function" ? r.bind(n) : void 0;
  }
}, Ry = {
  stringify: (e) => `${e}`,
  parse: (e) => parseFloat(e)
}, zy = {
  stringify: (e) => e,
  parse: (e) => e
}, bl = {
  string: zy,
  number: Ry,
  boolean: Ty,
  function: Ny,
  method: jy,
  json: Py
}, vr = Symbol.for("r2wc.render"), Fo = Symbol.for("r2wc.connected"), an = Symbol.for("r2wc.context"), be = Symbol.for("r2wc.props");
function Fy(e, t, n) {
  var r, o, i;
  t.props || (t.props = e.propTypes ? Object.keys(e.propTypes) : []), t.events || (t.events = []);
  const l = Array.isArray(t.props) ? t.props.slice() : Object.keys(t.props), s = Array.isArray(t.events) ? t.events.slice() : Object.keys(t.events), u = {}, a = {}, d = {}, f = {};
  for (const y of l) {
    u[y] = Array.isArray(t.props) ? "string" : t.props[y];
    const g = My(y);
    d[y] = g, f[g] = y;
  }
  for (const y of s)
    a[y] = Array.isArray(t.events) ? {} : t.events[y];
  class m extends HTMLElement {
    constructor() {
      super(), zo(this, i, !0), zo(this, o), zo(this, r, {}), zo(this, "container"), t.shadow ? this.container = this.attachShadow({
        mode: t.shadow
      }) : this.container = this, this[be].container = this.container;
      for (const g of l) {
        const x = d[g], k = this.getAttribute(x), p = u[g], c = p ? bl[p] : null;
        if (p === "method") {
          const h = Vp(x);
          Object.defineProperty(this[be].container, h, {
            enumerable: !0,
            configurable: !0,
            get() {
              return this[be][h];
            },
            set(w) {
              this[be][h] = w, this[vr]();
            }
          }), this[be][g] = c.parse(k, x, this);
        }
        c != null && c.parse && k && (this[be][g] = c.parse(k, x, this));
      }
      for (const g of s)
        this[be][g] = (x) => {
          const k = g.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(k, { detail: x, ...a[g] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(f);
    }
    connectedCallback() {
      this[Fo] = !0, this[vr]();
    }
    disconnectedCallback() {
      this[Fo] = !1, this[an] && n.unmount(this[an]), delete this[an];
    }
    attributeChangedCallback(g, x, k) {
      const p = f[g], c = u[p], h = c ? bl[c] : null;
      p in u && h != null && h.parse && k && (this[be][p] = h.parse(k, g, this), this[vr]());
    }
    [(i = Fo, o = an, r = be, vr)]() {
      this[Fo] && (this[an] ? n.update(this[an], this[be]) : this[an] = n.mount(
        this.container,
        e,
        this[be]
      ));
    }
  }
  for (const y of l) {
    const g = d[y], x = u[y];
    Object.defineProperty(m.prototype, y, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[be][y];
      },
      set(k) {
        this[be][y] = k;
        const p = x ? bl[x] : null;
        if (p != null && p.stringify) {
          const c = p.stringify(k, g, this);
          this.getAttribute(g) !== c && this.setAttribute(g, c);
        } else
          this[vr]();
      }
    });
  }
  return m;
}
function Ly(e, t, n) {
  const r = Gu(e), o = Ye.createElement(t, n);
  return r.render(o), {
    root: r,
    ReactComponent: t
  };
}
function Iy({ root: e, ReactComponent: t }, n) {
  const r = Ye.createElement(t, n);
  e.render(r);
}
function Dy({ root: e }) {
  e.unmount();
}
function Oy(e, t = {}) {
  return Fy(e, t, { mount: Ly, update: Iy, unmount: Dy });
}
var Bp = { exports: {} }, il = {};
var by = j, Ay = Symbol.for("react.element"), Uy = Symbol.for("react.fragment"), Wy = Object.prototype.hasOwnProperty, Vy = by.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, By = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hp(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Wy.call(t, r) && !By.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Ay, type: e, key: i, ref: l, props: o, _owner: Vy.current };
}
il.Fragment = Uy;
il.jsx = Hp;
il.jsxs = Hp;
Bp.exports = il;
var v = Bp.exports;
var Hy = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Qy = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), K = (e, t) => {
  const n = j.forwardRef(
    ({
      color: r = "currentColor",
      size: o = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: l,
      className: s = "",
      children: u,
      ...a
    }, d) => j.createElement(
      "svg",
      {
        ref: d,
        ...Hy,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: l ? Number(i) * 24 / Number(o) : i,
        className: ["lucide", `lucide-${Qy(e)}`, s].join(" "),
        ...a
      },
      [
        ...t.map(([f, m]) => j.createElement(f, m)),
        ...Array.isArray(u) ? u : [u]
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
const Qp = K("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
const Yy = K("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const Xy = K("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const Ky = K("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
]);
const Gy = K("CheckCheck", [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
]);
const Zy = K("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Al = K("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
const Jy = K("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
const qy = K("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
const Yp = K("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
const eg = K("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
const tg = K("MicOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2", key: "80xlxr" }],
  ["path", { d: "M5 10v2a7 7 0 0 0 12 5", key: "p2k8kg" }],
  ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
  ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
]);
const ng = K("Mic", [
  ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
]);
const rg = K("Minimize2", [
  ["polyline", { points: "4 14 10 14 10 20", key: "11kfnr" }],
  ["polyline", { points: "20 10 14 10 14 4", key: "rlmsce" }],
  ["line", { x1: "14", x2: "21", y1: "10", y2: "3", key: "o5lafz" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
const og = K("MoreVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);
const ig = K("Paperclip", [
  [
    "path",
    {
      d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
      key: "1u3ebp"
    }
  ]
]);
const $c = K("Pause", [
  ["rect", { width: "4", height: "16", x: "6", y: "4", key: "iffhe4" }],
  ["rect", { width: "4", height: "16", x: "14", y: "4", key: "sjin7j" }]
]);
const Tc = K("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
const lg = K("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const sg = K("Power", [
  ["path", { d: "M12 2v10", key: "mnfbl" }],
  ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
]);
const ug = K("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
const ag = K("Smile", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);
const cg = K("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
const dg = K("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
const fg = K("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
const Xp = K("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function pg({ isOpen: e, onClick: t, config: n }) {
  const r = `
    fixed bottom-6 right-6 p-4 text-white shadow-lg transition-all duration-300
    ${n.shape === "round" ? "rounded-full" : "rounded-lg"}
  `;
  return /* @__PURE__ */ v.jsx(
    "button",
    {
      onClick: t,
      style: { backgroundColor: n.color },
      className: r,
      children: e ? /* @__PURE__ */ v.jsx(Xp, { className: "h-6 w-6" }) : /* @__PURE__ */ v.jsx(Yp, { className: "h-6 w-6" })
    }
  );
}
const Lo = 43200, Nc = 1440, Pc = Symbol.for("constructDateFrom");
function Zu(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Pc in e ? e[Pc](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function nn(e, t) {
  return Zu(e, e);
}
let hg = {};
function mg() {
  return hg;
}
function Mc(e) {
  const t = nn(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Ju(e, ...t) {
  const n = Zu.bind(
    null,
    e || t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function qo(e, t) {
  const n = +nn(e) - +nn(t);
  return n < 0 ? -1 : n > 0 ? 1 : n;
}
function yg(e) {
  return Zu(e, Date.now());
}
function gg(e, t, n) {
  const [r, o] = Ju(
    n == null ? void 0 : n.in,
    e,
    t
  ), i = r.getFullYear() - o.getFullYear(), l = r.getMonth() - o.getMonth();
  return i * 12 + l;
}
function vg(e) {
  return (t) => {
    const r = (e ? Math[e] : Math.trunc)(t);
    return r === 0 ? 0 : r;
  };
}
function wg(e, t) {
  return +nn(e) - +nn(t);
}
function xg(e, t) {
  const n = nn(e);
  return n.setHours(23, 59, 59, 999), n;
}
function kg(e, t) {
  const n = nn(e), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Sg(e, t) {
  const n = nn(e);
  return +xg(n) == +kg(n);
}
function Cg(e, t, n) {
  const [r, o, i] = Ju(
    n == null ? void 0 : n.in,
    e,
    e,
    t
  ), l = qo(o, i), s = Math.abs(
    gg(o, i)
  );
  if (s < 1) return 0;
  o.getMonth() === 1 && o.getDate() > 27 && o.setDate(30), o.setMonth(o.getMonth() - l * s);
  let u = qo(o, i) === -l;
  Sg(r) && s === 1 && qo(r, i) === 1 && (u = !1);
  const a = l * (s - +u);
  return a === 0 ? 0 : a;
}
function _g(e, t, n) {
  const r = wg(e, t) / 1e3;
  return vg(n == null ? void 0 : n.roundingMethod)(r);
}
const Eg = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, $g = (e, t, n) => {
  let r;
  const o = Eg[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Ul(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Tg = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ng = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Pg = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Mg = {
  date: Ul({
    formats: Tg,
    defaultWidth: "full"
  }),
  time: Ul({
    formats: Ng,
    defaultWidth: "full"
  }),
  dateTime: Ul({
    formats: Pg,
    defaultWidth: "full"
  })
}, jg = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Rg = (e, t, n, r) => jg[e];
function wr(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const l = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : l;
      o = e.formattingValues[s] || e.formattingValues[l];
    } else {
      const l = e.defaultWidth, s = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[s] || e.values[l];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[i];
  };
}
const zg = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Fg = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Lg = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Ig = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Dg = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Og = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, bg = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Ag = {
  ordinalNumber: bg,
  era: wr({
    values: zg,
    defaultWidth: "wide"
  }),
  quarter: wr({
    values: Fg,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: wr({
    values: Lg,
    defaultWidth: "wide"
  }),
  day: wr({
    values: Ig,
    defaultWidth: "wide"
  }),
  dayPeriod: wr({
    values: Dg,
    defaultWidth: "wide",
    formattingValues: Og,
    defaultFormattingWidth: "wide"
  })
};
function xr(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const l = i[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(s) ? Wg(s, (f) => f.test(l)) : (
      // [TODO] -- I challenge you to fix the type
      Ug(s, (f) => f.test(l))
    );
    let a;
    a = e.valueCallback ? e.valueCallback(u) : u, a = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(a)
    ) : a;
    const d = t.slice(l.length);
    return { value: a, rest: d };
  };
}
function Ug(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Wg(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Vg(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let l = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    l = n.valueCallback ? n.valueCallback(l) : l;
    const s = t.slice(o.length);
    return { value: l, rest: s };
  };
}
const Bg = /^(\d+)(th|st|nd|rd)?/i, Hg = /\d+/i, Qg = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Yg = {
  any: [/^b/i, /^(a|c)/i]
}, Xg = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Kg = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Gg = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Zg = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Jg = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, qg = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, e1 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, t1 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, n1 = {
  ordinalNumber: Vg({
    matchPattern: Bg,
    parsePattern: Hg,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: xr({
    matchPatterns: Qg,
    defaultMatchWidth: "wide",
    parsePatterns: Yg,
    defaultParseWidth: "any"
  }),
  quarter: xr({
    matchPatterns: Xg,
    defaultMatchWidth: "wide",
    parsePatterns: Kg,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: xr({
    matchPatterns: Gg,
    defaultMatchWidth: "wide",
    parsePatterns: Zg,
    defaultParseWidth: "any"
  }),
  day: xr({
    matchPatterns: Jg,
    defaultMatchWidth: "wide",
    parsePatterns: qg,
    defaultParseWidth: "any"
  }),
  dayPeriod: xr({
    matchPatterns: e1,
    defaultMatchWidth: "any",
    parsePatterns: t1,
    defaultParseWidth: "any"
  })
}, r1 = {
  code: "en-US",
  formatDistance: $g,
  formatLong: Mg,
  formatRelative: Rg,
  localize: Ag,
  match: n1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function o1(e, t, n) {
  const r = mg(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? r1, i = 2520, l = qo(e, t);
  if (isNaN(l)) throw new RangeError("Invalid time value");
  const s = Object.assign({}, n, {
    addSuffix: n == null ? void 0 : n.addSuffix,
    comparison: l
  }), [u, a] = Ju(
    n == null ? void 0 : n.in,
    ...l > 0 ? [t, e] : [e, t]
  ), d = _g(a, u), f = (Mc(a) - Mc(u)) / 1e3, m = Math.round((d - f) / 60);
  let y;
  if (m < 2)
    return n != null && n.includeSeconds ? d < 5 ? o.formatDistance("lessThanXSeconds", 5, s) : d < 10 ? o.formatDistance("lessThanXSeconds", 10, s) : d < 20 ? o.formatDistance("lessThanXSeconds", 20, s) : d < 40 ? o.formatDistance("halfAMinute", 0, s) : d < 60 ? o.formatDistance("lessThanXMinutes", 1, s) : o.formatDistance("xMinutes", 1, s) : m === 0 ? o.formatDistance("lessThanXMinutes", 1, s) : o.formatDistance("xMinutes", m, s);
  if (m < 45)
    return o.formatDistance("xMinutes", m, s);
  if (m < 90)
    return o.formatDistance("aboutXHours", 1, s);
  if (m < Nc) {
    const g = Math.round(m / 60);
    return o.formatDistance("aboutXHours", g, s);
  } else {
    if (m < i)
      return o.formatDistance("xDays", 1, s);
    if (m < Lo) {
      const g = Math.round(m / Nc);
      return o.formatDistance("xDays", g, s);
    } else if (m < Lo * 2)
      return y = Math.round(m / Lo), o.formatDistance("aboutXMonths", y, s);
  }
  if (y = Cg(a, u), y < 12) {
    const g = Math.round(m / Lo);
    return o.formatDistance("xMonths", g, s);
  } else {
    const g = y % 12, x = Math.trunc(y / 12);
    return g < 3 ? o.formatDistance("aboutXYears", x, s) : g < 9 ? o.formatDistance("overXYears", x, s) : o.formatDistance("almostXYears", x + 1, s);
  }
}
function i1(e, t) {
  return o1(e, yg(e), t);
}
function l1({
  onClose: e,
  onToggleMaximize: t,
  isMaximized: n,
  chatState: r,
  currentView: o,
  onBackToChat: i,
  onStartNewChat: l,
  onEndChat: s,
  onViewRecentChats: u,
  config: a
}) {
  var k;
  const [d, f] = j.useState(!1), m = () => {
    switch (o) {
      case "recent-chats":
        return "Recent chats";
      default:
        return a.name;
    }
  }, y = () => {
    var p;
    return ((p = r.operators) == null ? void 0 : p.length) > 0 ? "Online" : r.lastActive ? `Last seen ${i1(r.lastActive, {
      addSuffix: !0
    })}` : "Offline";
  }, g = o !== "chat", x = o === "chat";
  return /* @__PURE__ */ v.jsx(
    "div",
    {
      style: { backgroundColor: a.color },
      className: "p-6 rounded-t-lg text-white",
      children: /* @__PURE__ */ v.jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-3", children: [
          g && /* @__PURE__ */ v.jsx(
            "button",
            {
              onClick: i,
              className: "p-1 hover:bg-white/10 rounded-full transition-colors",
              children: /* @__PURE__ */ v.jsx(Yy, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ v.jsxs("div", { children: [
            /* @__PURE__ */ v.jsx("h3", { className: "font-semibold text-lg", children: m() }),
            x && /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
              /* @__PURE__ */ v.jsx(
                "div",
                {
                  className: `w-2 h-2 rounded-full ${((k = r.operators) == null ? void 0 : k.length) > 0 ? "bg-green-400" : "bg-red-400"}`
                }
              ),
              /* @__PURE__ */ v.jsx("p", { className: "text-sm opacity-90", children: y() })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ v.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ v.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ v.jsx(
            "button",
            {
              onClick: () => f(!d),
              className: "p-2 hover:bg-white/10 rounded-full transition-colors",
              children: /* @__PURE__ */ v.jsx(og, { className: "h-4 w-4" })
            }
          ),
          d && /* @__PURE__ */ v.jsxs("div", { className: "absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg py-2 min-w-48 z-50", children: [
            /* @__PURE__ */ v.jsxs(
              "button",
              {
                onClick: () => {
                  l(), f(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ v.jsx(lg, { className: "h-4 w-4" }),
                  "Start New Chat"
                ]
              }
            ),
            /* @__PURE__ */ v.jsxs(
              "button",
              {
                onClick: () => {
                  s(), f(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ v.jsx(sg, { className: "h-4 w-4" }),
                  "End Chat"
                ]
              }
            ),
            /* @__PURE__ */ v.jsxs(
              "button",
              {
                onClick: () => {
                  u(), f(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ v.jsx(eg, { className: "h-4 w-4" }),
                  "View Recent Chats"
                ]
              }
            ),
            /* @__PURE__ */ v.jsx("hr", {}),
            /* @__PURE__ */ v.jsx(
              "button",
              {
                onClick: () => {
                  t(), f(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: n ? /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                  /* @__PURE__ */ v.jsx(rg, { className: "h-4 w-4" }),
                  " Minimize"
                ] }) : /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                  /* @__PURE__ */ v.jsx(qy, { className: "h-4 w-4" }),
                  " Maximize"
                ] })
              }
            ),
            /* @__PURE__ */ v.jsxs(
              "button",
              {
                onClick: () => {
                  e(), f(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ v.jsx(Xp, { className: "h-4 w-4" }),
                  " Close"
                ]
              }
            )
          ] })
        ] }) })
      ] })
    }
  );
}
function s1({
  status: e,
  timestamp: t,
  onRetry: n
}) {
  const r = (i) => new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: !0
  }).format(new Date(i)), o = () => {
    switch (e) {
      case "sent":
        return /* @__PURE__ */ v.jsx(Zy, { className: "w-3 h-3 text-gray-500" });
      case "read":
        return /* @__PURE__ */ v.jsx(Gy, { className: "w-3 h-3 text-blue-500" });
      case "failed":
        return /* @__PURE__ */ v.jsx(Qp, { className: "w-3 h-3 text-red-500" });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "flex items-center justify-end gap-1 text-xs text-gray-500", children: [
    /* @__PURE__ */ v.jsx("span", { children: r(t) }),
    e && o(),
    e === "failed" && n && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx("span", { className: "text-red-500", children: "Not sent" }),
      /* @__PURE__ */ v.jsx(
        "button",
        {
          onClick: n,
          className: "text-blue-500 hover:text-blue-700 underline ml-1",
          children: "Retry"
        }
      )
    ] })
  ] });
}
function Kp({ onSubmit: e, config: t }) {
  var a;
  const n = (t.fields || []).reduce((d, f) => (d[f] = "", d), {}), [r, o] = j.useState(n), [i, l] = j.useState(!1), s = (d, f) => {
    o((m) => ({ ...m, [d]: f }));
  }, u = async (d) => {
    d.preventDefault(), l(!0);
    try {
      e(r);
    } finally {
      l(!1);
    }
  };
  return /* @__PURE__ */ v.jsx("div", { className: "py-2", children: /* @__PURE__ */ v.jsx("form", { onSubmit: u, className: "flex items-center gap-3", children: /* @__PURE__ */ v.jsxs("div", { className: "flex-1 flex items-center gap-2", children: [
    (a = t.fields) == null ? void 0 : a.map((d) => /* @__PURE__ */ v.jsx(
      "input",
      {
        type: d === "email" ? "email" : "text",
        value: r[d],
        onChange: (f) => s(d, f.target.value),
        placeholder: `Your ${d}`,
        className: "flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-opacity-50",
        style: { "--tw-ring-color": t.color },
        disabled: i,
        required: !0
      },
      d
    )),
    /* @__PURE__ */ v.jsx(
      "button",
      {
        type: "submit",
        style: {
          backgroundColor: t.color
        },
        className: "px-3 py-2 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-1",
        children: /* @__PURE__ */ v.jsx(Xy, { className: "h-4 w-4" })
      }
    )
  ] }) }) });
}
function u1({
  messages: e,
  onFormSubmit: t,
  config: n,
  chatState: r,
  onSendMessage: o
}) {
  const i = j.useRef(null);
  j.useEffect(() => {
    var s;
    (s = i.current) == null || s.scrollIntoView({ behavior: "smooth" });
  }, [e]);
  const l = (s) => {
    var u, a, d;
    if ((u = s.file) != null && u.url) {
      const f = (a = s.file.type) == null ? void 0 : a.startsWith("image/"), m = (d = s.file.type) == null ? void 0 : d.startsWith("audio/");
      return f ? /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsx(
        "img",
        {
          src: s.file.url,
          alt: s.file.name,
          className: "max-w-xs rounded-lg mb-2"
        }
      ) }) : m ? /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsxs("audio", { controls: !0, className: "max-w-xs mb-2 p-2 max-w-[200px]", children: [
        /* @__PURE__ */ v.jsx("source", { src: s.file.url, type: s.file.type }),
        "Your browser does not support the audio element."
      ] }) }) : /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsx(
        "a",
        {
          href: s.file.url,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-blue-500 hover:text-blue-700 underline",
          download: !0,
          children: s.file.name
        }
      ) });
    } else if (s.type === "form")
      return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ v.jsx("span", { children: s.content }),
        /* @__PURE__ */ v.jsx(Kp, { onSubmit: t, config: n })
      ] });
    return s.content;
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "flex-1 overflow-y-auto p-6 space-y-4", children: [
    e.map((s, u) => /* @__PURE__ */ v.jsx(
      "div",
      {
        className: `flex ${s.from === "user" ? "justify-end" : "justify-start"}`,
        children: /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col gap-1 overflow-hidden", children: [
          /* @__PURE__ */ v.jsx(
            "div",
            {
              className: `rounded-2xl ${s.type === "text" || s.type === "form" ? s.from === "user" ? "p-4 bg-gray-100 text-gray-800 rounded-bl-sm" : "p-4 bg-blue-500 text-white rounded-br-sm" : ""}`,
              children: l(s)
            }
          ),
          /* @__PURE__ */ v.jsx("div", { className: "px-2", children: /* @__PURE__ */ v.jsx(
            s1,
            {
              status: s.from === "user" ? s.status : void 0,
              timestamp: s.timestamp,
              onRetry: s.status === "failed" ? () => o(s) : void 0
            }
          ) })
        ] })
      },
      s.id || u
    )),
    r.isTyping && /* @__PURE__ */ v.jsxs("div", { className: "inline-flex items-center gap-1 bg-blue-500 text-white px-3 py-2 rounded-full", children: [
      /* @__PURE__ */ v.jsx(Al, { className: "size-2 animate-bounce [animation-delay:-0.2s] stroke-none fill-current" }),
      /* @__PURE__ */ v.jsx(Al, { className: "size-2 animate-bounce [animation-delay:-0.1s] stroke-none fill-current" }),
      /* @__PURE__ */ v.jsx(Al, { className: "size-2 animate-bounce stroke-none fill-current" })
    ] }),
    /* @__PURE__ */ v.jsx("div", { ref: i })
  ] });
}
const a1 = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "😂",
  "🤣",
  "😊",
  "😇",
  "🙂",
  "🙃",
  "😉",
  "😌",
  "😍",
  "🥰",
  "😘",
  "😗",
  "😙",
  "😚",
  "😋",
  "😛",
  "😝",
  "😜",
  "🤪",
  "🤨",
  "🧐",
  "🤓",
  "😎",
  "🤩",
  "🥳",
  "😏",
  "😒",
  "😞",
  "😔",
  "😟",
  "😕",
  "🙁",
  "☹️",
  "😣",
  "😖",
  "😫",
  "😩",
  "🥺",
  "😢",
  "😭",
  "😤",
  "😠",
  "😡",
  "🤬",
  "👍",
  "👎",
  "👌",
  "✌️",
  "🤞",
  "🤟",
  "🤘",
  "🤙",
  "👈",
  "👉",
  "👆",
  "🖕",
  "👇",
  "☝️",
  "👋",
  "🤚",
  "🖐️",
  "✋",
  "🖖",
  "👏",
  "🙌",
  "🤲",
  "🤝",
  "🙏",
  "✍️",
  "💪",
  "🦾",
  "🦿",
  "🦵",
  "🦶",
  "❤️",
  "🧡",
  "💛",
  "💚",
  "💙",
  "💜",
  "🖤",
  "🤍",
  "🤎",
  "💔",
  "❣️",
  "💕",
  "💞",
  "💓",
  "💗",
  "💖",
  "💘",
  "💝",
  "💟",
  "☮️"
];
function c1({ onEmojiSelect: e, onClose: t }) {
  return /* @__PURE__ */ v.jsx("div", { className: "absolute bottom-full left-0 mb-2 bg-white border rounded-lg shadow-lg p-3 w-64 max-h-48 overflow-y-auto z-50", children: /* @__PURE__ */ v.jsx("div", { className: "grid grid-cols-8 gap-1", children: a1.map((n, r) => /* @__PURE__ */ v.jsx(
    "button",
    {
      onClick: () => {
        e(n), t();
      },
      className: "p-2 hover:bg-gray-100 rounded text-lg transition-colors",
      children: n
    },
    r
  )) }) });
}
function d1({ onAudioRecorded: e, config: t }) {
  const [n, r] = j.useState(!1), [o, i] = j.useState(!1), [l, s] = j.useState(0), [u, a] = j.useState(null), [d, f] = j.useState(!1), [m, y] = j.useState(null), g = j.useRef(null), x = j.useRef([]), k = j.useRef(null), p = j.useRef(null), c = j.useRef(null);
  j.useEffect(() => () => {
    k.current && clearInterval(k.current), c.current && c.current.getTracks().forEach((H) => H.stop());
  }, []);
  const h = async () => {
    try {
      const H = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      return c.current = H, y(!0), !0;
    } catch (H) {
      return console.error("Microphone permission denied:", H), y(!1), !1;
    }
  }, w = async () => {
    if (!(!await h() || !c.current))
      try {
        x.current = [];
        const we = new MediaRecorder(c.current, {
          mimeType: "audio/webm;codecs=opus"
        });
        g.current = we, we.ondataavailable = (Oe) => {
          Oe.data.size > 0 && x.current.push(Oe.data);
        }, we.onstop = () => {
          const Oe = new Blob(x.current, {
            type: "audio/webm;codecs=opus"
          });
          a(Oe), c.current && (c.current.getTracks().forEach((ar) => ar.stop()), c.current = null);
        }, we.start(100), r(!0), s(0), k.current = setInterval(() => {
          s((Oe) => Oe + 1);
        }, 1e3);
      } catch (we) {
        console.error("Error starting recording:", we);
      }
  }, C = () => {
    g.current && g.current.state === "recording" && (g.current.pause(), i(!0), k.current && clearInterval(k.current));
  }, E = () => {
    g.current && g.current.state === "paused" && (g.current.resume(), i(!1), k.current = setInterval(() => {
      s((H) => H + 1);
    }, 1e3));
  }, $ = () => {
    g.current && g.current.state !== "inactive" && (g.current.stop(), r(!1), i(!1), k.current && clearInterval(k.current));
  }, P = () => {
    if (u && !d) {
      const H = URL.createObjectURL(u);
      p.current = new Audio(H), p.current.onended = () => {
        f(!1), URL.revokeObjectURL(H);
      }, p.current.play(), f(!0);
    } else p.current && d && (p.current.pause(), f(!1));
  }, b = () => {
    if (u) {
      const H = new File([u], "recording.wav", {
        type: "audio/wav"
      });
      e(H), a(null), s(0), f(!1);
    }
  }, z = () => {
    n && $(), a(null), s(0), f(!1), c.current && (c.current.getTracks().forEach((H) => H.stop()), c.current = null);
  }, G = (H) => {
    const we = Math.floor(H / 60), Oe = H % 60;
    return `${we}:${Oe.toString().padStart(2, "0")}`;
  };
  return m === !1 ? /* @__PURE__ */ v.jsx(
    "button",
    {
      type: "button",
      onClick: h,
      className: "p-2 text-gray-400 hover:text-gray-600 transition-colors",
      title: "Microphone access denied. Click to retry.",
      children: /* @__PURE__ */ v.jsx(tg, { className: "h-5 w-5" })
    }
  ) : n || u ? /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2", children: [
    n && /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ v.jsx("div", { className: "w-2 h-2 bg-red-500 rounded-full animate-pulse" }),
      /* @__PURE__ */ v.jsx("span", { className: "text-xs text-gray-600 min-w-[32px]", children: G(l) })
    ] }),
    u && /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ v.jsx(
        "button",
        {
          onClick: P,
          className: "p-1 text-gray-600 hover:text-gray-800 transition-colors",
          title: d ? "Pause" : "Play",
          children: d ? /* @__PURE__ */ v.jsx($c, { className: "h-4 w-4" }) : /* @__PURE__ */ v.jsx(Tc, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ v.jsx("span", { className: "text-xs text-gray-600 min-w-[32px]", children: G(l) })
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-1", children: [
      n && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: o ? E : C,
            className: "p-1 text-gray-600 hover:text-gray-800 transition-colors",
            title: o ? "Resume" : "Pause",
            children: o ? /* @__PURE__ */ v.jsx(Tc, { className: "h-4 w-4" }) : /* @__PURE__ */ v.jsx($c, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: $,
            className: "p-1 text-red-600 hover:text-red-800 transition-colors",
            title: "Stop recording",
            children: /* @__PURE__ */ v.jsx(cg, { className: "h-4 w-4" })
          }
        )
      ] }),
      u && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: b,
            style: { backgroundColor: t.color },
            className: "px-2 py-1 text-white text-xs rounded hover:opacity-90 transition-opacity",
            title: "Send audio",
            children: "Send"
          }
        ),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: z,
            className: "p-1 text-gray-600 hover:text-red-600 transition-colors",
            title: "Delete recording",
            children: /* @__PURE__ */ v.jsx(dg, { className: "h-4 w-4" })
          }
        )
      ] })
    ] })
  ] }) : /* @__PURE__ */ v.jsx(
    "button",
    {
      type: "button",
      onClick: w,
      className: "p-2 text-gray-500 hover:text-gray-700 transition-colors",
      title: "Record audio message",
      children: /* @__PURE__ */ v.jsx(ng, { className: "h-5 w-5" })
    }
  );
}
function f1({
  ticketdeskId: e,
  selectedSession: t,
  config: n,
  onSendMessage: r,
  onError: o
}) {
  const [, i] = e.split("_"), [l, s] = j.useState(""), [u, a] = j.useState(!1), d = j.useRef(null), [f, m] = j.useState(!1), y = (h) => {
    if (h.preventDefault(), l.trim()) {
      const w = {
        from: "user",
        content: l.trim(),
        type: "text",
        timestamp: Date.now(),
        status: "sent"
      };
      r(w), s("");
    }
  }, g = (h) => {
    s((w) => w + h);
  }, x = async (h) => {
    const w = new FormData();
    w.append("file", h);
    const C = await fetch(
      `https://api.ticketdesk.ai/v1/public/upload?session_id=${t == null ? void 0 : t.session_id}&site_id=${i}`,
      {
        method: "POST",
        body: w
      }
    ), E = await C.json();
    if (!C.ok)
      throw new Error(E.message);
    return E;
  }, k = async (h) => {
    m(!0);
    try {
      const w = await x(h);
      if (w && typeof w != "object") return;
      const C = {
        from: "user",
        content: h.name,
        type: h.type === "audio/wav" ? "audio" : h.type.startsWith("image/") ? "image" : "file",
        timestamp: Date.now(),
        status: "sent",
        file: w
      };
      r(C);
    } catch (w) {
      o(`File upload failed: ${w}`);
    } finally {
      m(!1), d.current && (d.current.value = "");
    }
  }, p = (h) => {
    var C;
    const w = (C = h.target.files) == null ? void 0 : C[0];
    w && k(w);
  }, c = async (h) => {
    const C = Array.from(h.clipboardData.items)[0];
    if (C.type.indexOf("image") !== -1 || C.kind === "file") {
      h.preventDefault();
      const E = C.getAsFile();
      E && k(E);
    }
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "border-t bg-white", children: [
    /* @__PURE__ */ v.jsx("form", { onSubmit: y, className: "p-4 pb-2 relative", children: /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ v.jsx(
        "input",
        {
          type: "text",
          value: l,
          onChange: (h) => s(h.target.value),
          placeholder: "Send a message...",
          className: "flex-1 p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-opacity-50",
          style: { "--tw-ring-color": n.color },
          onPaste: c,
          disabled: f
        }
      ),
      /* @__PURE__ */ v.jsx(
        "button",
        {
          type: "submit",
          style: { backgroundColor: n.color },
          className: "p-3 text-white rounded-full hover:opacity-90 transition-opacity",
          disabled: !l.trim(),
          children: /* @__PURE__ */ v.jsx(ug, { className: "h-5 w-5" })
        }
      )
    ] }) }),
    /* @__PURE__ */ v.jsxs("div", { className: "px-4 pb-1 flex items-center justify-between gap-2 relative", children: [
      /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ v.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              var h;
              return (h = d.current) == null ? void 0 : h.click();
            },
            className: "p-2 text-gray-500 hover:text-gray-700 transition-colors",
            title: "Upload file",
            children: /* @__PURE__ */ v.jsx(ig, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ v.jsx(d1, { onAudioRecorded: k, config: n }),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            type: "button",
            onClick: () => a(!u),
            className: "p-2 text-gray-500 hover:text-gray-700 transition-colors rounded-full",
            children: /* @__PURE__ */ v.jsx(ag, { className: "h-4 w-4" })
          }
        ),
        u && /* @__PURE__ */ v.jsx(
          c1,
          {
            onEmojiSelect: g,
            onClose: () => a(!1)
          }
        ),
        f && /* @__PURE__ */ v.jsx("span", { className: "text-sm text-gray-700", children: "Uploading..." })
      ] }),
      /* @__PURE__ */ v.jsx("div", { className: "flex-1 flex justify-end", children: /* @__PURE__ */ v.jsxs(
        "a",
        {
          href: "https://ticketdesk.ai/?utm_source=chat-widget&utm_medium=referral&utm_campaign=powered-by",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-xs text-gray-500",
          children: [
            "Powered by",
            " ",
            /* @__PURE__ */ v.jsx("span", { className: "font-semibold text-gray-700 hover:text-gray-800 transition-colors", children: "Ticketdesk AI" })
          ]
        }
      ) }),
      /* @__PURE__ */ v.jsx(
        "input",
        {
          type: "file",
          ref: d,
          onChange: p,
          className: "hidden",
          accept: "image/*,audio/*,.pdf,.doc,.docx,.txt,.xls,.xlsx,.csv,.tsv,.xlsm"
        }
      )
    ] })
  ] });
}
function p1({
  sessions: e,
  onLoadSession: t
}) {
  const n = (o) => {
    const i = new Date(o), s = ((/* @__PURE__ */ new Date()).getTime() - i.getTime()) / (1e3 * 60 * 60);
    return s < 24 ? i.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: !0
    }) : s < 168 ? i.toLocaleDateString("en-US", { weekday: "short" }) : i.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    });
  }, r = (o) => {
    switch (o) {
      case "active":
        return "text-green-600 bg-green-100";
      case "resolved":
        return "text-gray-600 bg-gray-100";
      case "pending":
        return "text-yellow-600 bg-yellow-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };
  return /* @__PURE__ */ v.jsx("div", { className: "flex-1 overflow-y-auto", children: e.length === 0 ? /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-gray-500", children: [
    /* @__PURE__ */ v.jsx(Yp, { className: "h-12 w-12 mb-4 opacity-50" }),
    /* @__PURE__ */ v.jsx("p", { children: "No recent chats found" })
  ] }) : /* @__PURE__ */ v.jsx("div", { className: "divide-y", children: e.map((o) => /* @__PURE__ */ v.jsxs(
    "button",
    {
      onClick: () => t(o.session_id),
      className: "w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors text-left",
      children: [
        /* @__PURE__ */ v.jsx("div", { className: "flex-shrink-0", children: o.last_message_from === "user" ? /* @__PURE__ */ v.jsx(fg, { className: "h-8 w-8 text-gray-400" }) : /* @__PURE__ */ v.jsx(Ky, { className: "h-8 w-8 text-indigo-500" }) }),
        /* @__PURE__ */ v.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ v.jsxs("div", { className: "flex justify-start items-center gap-3 mb-1", children: [
            /* @__PURE__ */ v.jsx("span", { className: "font-medium truncate", children: o.last_message_from === "user" ? "You" : o.last_message_from }),
            /* @__PURE__ */ v.jsx("span", { className: "text-xs text-gray-500", children: n(o.updated_at) })
          ] }),
          /* @__PURE__ */ v.jsx("p", { className: "text-sm text-gray-600 truncate", children: o.last_message })
        ] }),
        /* @__PURE__ */ v.jsx(
          "span",
          {
            className: `px-2 py-1 rounded-full text-xs font-medium ${r(
              o.state
            )}`,
            children: o.state
          }
        )
      ]
    },
    o.session_id
  )) }) });
}
function h1({ onFormSubmit: e, config: t }) {
  const [n, r] = j.useState(!1);
  return /* @__PURE__ */ v.jsx("div", { className: "px-6 py-3 bg-yellow-50 border-t border-yellow-200", children: n ? /* @__PURE__ */ v.jsx(
    Kp,
    {
      config: t,
      onSubmit: (o) => {
        e(o), r(!1);
      }
    }
  ) : /* @__PURE__ */ v.jsxs(
    "button",
    {
      className: "w-full flex items-center gap-2 text-left text-yellow-800 hover:text-yellow-900 transition-colors group",
      onClick: () => r(!0),
      children: [
        /* @__PURE__ */ v.jsx(Jy, { className: "h-4 w-4 text-yellow-600" }),
        /* @__PURE__ */ v.jsxs("span", { className: "text-sm flex-1", children: [
          /* @__PURE__ */ v.jsx("span", { className: "text-blue-600", children: "Click here" }),
          " to set your email to get notifications"
        ] })
      ]
    }
  ) });
}
function m1({
  ticketdeskId: e,
  isOpen: t,
  isMaximized: n,
  isConnected: r,
  config: o,
  messages: i,
  sessions: l,
  chatState: s,
  selectedSession: u,
  onStartNewChat: a,
  onEndChat: d,
  onLoadSession: f,
  onGetRecentChats: m,
  onUpdateProfile: y,
  errorMessage: g,
  setErrorMessage: x,
  onClose: k,
  onToggleMaximize: p,
  onSendMessage: c
}) {
  const [h, w] = j.useState(
    "chat"
  );
  if (!t) return null;
  const C = n ? "fixed inset-4 w-auto h-auto max-w-none max-h-none min-h-0" : "fixed bottom-24 right-6 w-[400px] max-w-[calc(100vw-3rem)] h-[75vh] max-h-[800px] min-h-[400px]", E = () => {
    w("recent-chats"), m();
  }, $ = () => {
    w("chat");
  }, P = (G) => {
    f(G), w("chat");
  }, b = (G) => {
    y(G), w("chat");
  }, z = u && !u.email && i.filter((G) => G.from === "user").length > 1;
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      className: `${C} bg-white rounded-lg shadow-2xl flex flex-col animate-slide-up z-50`,
      children: [
        /* @__PURE__ */ v.jsx(
          l1,
          {
            onClose: k,
            onToggleMaximize: p,
            isMaximized: n,
            isConnected: r,
            chatState: s,
            currentView: h,
            onBackToChat: $,
            onStartNewChat: a,
            onEndChat: d,
            onViewRecentChats: E,
            config: o
          }
        ),
        h === "chat" && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
          /* @__PURE__ */ v.jsx(
            u1,
            {
              messages: i,
              onFormSubmit: b,
              config: o,
              chatState: s,
              onSendMessage: c
            }
          ),
          z && /* @__PURE__ */ v.jsx(h1, { config: o, onFormSubmit: b }),
          g && /* @__PURE__ */ v.jsxs("div", { className: "px-6 py-3 bg-red-100 text-sm border-t border-red-200 text-red-800 hover:text-red-900 flex items-center gap-2 text-left", children: [
            /* @__PURE__ */ v.jsx(Qp, { className: "h-4 w-4 text-red-600" }),
            g
          ] }),
          /* @__PURE__ */ v.jsx(
            f1,
            {
              ticketdeskId: e,
              config: o,
              selectedSession: u,
              onSendMessage: c,
              onError: x
            }
          )
        ] }),
        h === "recent-chats" && /* @__PURE__ */ v.jsx(
          p1,
          {
            sessions: l,
            onLoadSession: P,
            config: o
          }
        )
      ]
    }
  );
}
const jc = (e, t) => {
  try {
    localStorage.setItem(e, t);
  } catch (n) {
    console.warn("Failed to save to localStorage:", n);
  }
}, Hs = (e) => {
  try {
    return localStorage.getItem(e);
  } catch (t) {
    return console.warn("Failed to read from localStorage:", t), null;
  }
}, y1 = () => "m_" + crypto.randomUUID(), Rc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (a, d) => {
    const f = typeof a == "function" ? a(t) : a;
    if (!Object.is(f, t)) {
      const m = t;
      t = d ?? (typeof f != "object" || f === null) ? f : Object.assign({}, t, f), n.forEach((y) => y(t, m));
    }
  }, o = () => t, s = { setState: r, getState: o, getInitialState: () => u, subscribe: (a) => (n.add(a), () => n.delete(a)) }, u = t = e(r, o, s);
  return s;
}, g1 = (e) => e ? Rc(e) : Rc, v1 = (e) => e;
function w1(e, t = v1) {
  const n = Ye.useSyncExternalStore(
    e.subscribe,
    Ye.useCallback(() => t(e.getState()), [e, t]),
    Ye.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return Ye.useDebugValue(n), n;
}
const zc = (e) => {
  const t = g1(e), n = (r) => w1(t, r);
  return Object.assign(n, t), n;
}, x1 = (e) => e ? zc(e) : zc;
(!globalThis.EventTarget || !globalThis.Event) && console.error(`
  PartySocket requires a global 'EventTarget' class to be available!
  You can polyfill this global by adding this to your code before any partysocket imports: 
  
  \`\`\`
  import 'partysocket/event-target-polyfill';
  \`\`\`
  Please file an issue at https://github.com/partykit/partykit if you're still having trouble.
`);
var Gp = class extends Event {
  // biome-ignore lint/suspicious/noExplicitAny: vibes
  constructor(t, n) {
    super("error", n);
    A(this, "message");
    A(this, "error");
    this.message = t.message, this.error = t;
  }
}, Zp = class extends Event {
  // biome-ignore lint/style/useDefaultParameterLast: legacy
  // biome-ignore lint/suspicious/noExplicitAny: legacy
  constructor(t = 1e3, n = "", r) {
    super("close", r);
    A(this, "code");
    A(this, "reason");
    A(this, "wasClean", !0);
    this.code = t, this.reason = n;
  }
}, Wl = {
  Event,
  ErrorEvent: Gp,
  CloseEvent: Zp
};
function k1(e, t) {
  if (!e)
    throw new Error(t);
}
function S1(e) {
  return new e.constructor(e.type, e);
}
function C1(e) {
  return "data" in e ? new MessageEvent(e.type, e) : "code" in e || "reason" in e ? new Zp(
    // @ts-expect-error we need to fix event/listener types
    e.code || 1999,
    // @ts-expect-error we need to fix event/listener types
    e.reason || "unknown reason",
    e
  ) : "error" in e ? new Gp(e.error, e) : new Event(e.type, e);
}
var Fc, _1 = typeof process < "u" && typeof ((Fc = process.versions) == null ? void 0 : Fc.node) < "u" && typeof document > "u", Io = _1 ? C1 : S1, cn = {
  maxReconnectionDelay: 1e4,
  minReconnectionDelay: 1e3 + Math.random() * 4e3,
  minUptime: 5e3,
  reconnectionDelayGrowFactor: 1.3,
  connectionTimeout: 4e3,
  maxRetries: Number.POSITIVE_INFINITY,
  maxEnqueuedMessages: Number.POSITIVE_INFINITY,
  startClosed: !1,
  debug: !1
}, Lc = !1, E1 = class pn extends EventTarget {
  constructor(n, r, o = {}) {
    super();
    A(this, "_ws");
    A(this, "_retryCount", -1);
    A(this, "_uptimeTimeout");
    A(this, "_connectTimeout");
    A(this, "_shouldReconnect", !0);
    A(this, "_connectLock", !1);
    A(this, "_binaryType", "blob");
    A(this, "_closeCalled", !1);
    A(this, "_messageQueue", []);
    A(this, "_debugLogger", console.log.bind(console));
    A(this, "_url");
    A(this, "_protocols");
    A(this, "_options");
    /**
     * An event listener to be called when the WebSocket connection's readyState changes to CLOSED
     */
    A(this, "onclose", null);
    /**
     * An event listener to be called when an error occurs
     */
    A(this, "onerror", null);
    /**
     * An event listener to be called when a message is received from the server
     */
    A(this, "onmessage", null);
    /**
     * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
     * this indicates that the connection is ready to send and receive data
     */
    A(this, "onopen", null);
    A(this, "_handleOpen", (n) => {
      this._debug("open event");
      const { minUptime: r = cn.minUptime } = this._options;
      clearTimeout(this._connectTimeout), this._uptimeTimeout = setTimeout(() => this._acceptOpen(), r), k1(this._ws, "WebSocket is not defined"), this._ws.binaryType = this._binaryType, this._messageQueue.forEach((o) => {
        var i;
        return (i = this._ws) == null ? void 0 : i.send(o);
      }), this._messageQueue = [], this.onopen && this.onopen(n), this.dispatchEvent(Io(n));
    });
    A(this, "_handleMessage", (n) => {
      this._debug("message event"), this.onmessage && this.onmessage(n), this.dispatchEvent(Io(n));
    });
    A(this, "_handleError", (n) => {
      this._debug("error event", n.message), this._disconnect(void 0, n.message === "TIMEOUT" ? "timeout" : void 0), this.onerror && this.onerror(n), this._debug("exec error listeners"), this.dispatchEvent(Io(n)), this._connect();
    });
    A(this, "_handleClose", (n) => {
      this._debug("close event"), this._clearTimeouts(), this._shouldReconnect && this._connect(), this.onclose && this.onclose(n), this.dispatchEvent(Io(n));
    });
    this._url = n, this._protocols = r, this._options = o, this._options.startClosed && (this._shouldReconnect = !1), this._options.debugLogger && (this._debugLogger = this._options.debugLogger), this._connect();
  }
  static get CONNECTING() {
    return 0;
  }
  static get OPEN() {
    return 1;
  }
  static get CLOSING() {
    return 2;
  }
  static get CLOSED() {
    return 3;
  }
  get CONNECTING() {
    return pn.CONNECTING;
  }
  get OPEN() {
    return pn.OPEN;
  }
  get CLOSING() {
    return pn.CLOSING;
  }
  get CLOSED() {
    return pn.CLOSED;
  }
  get binaryType() {
    return this._ws ? this._ws.binaryType : this._binaryType;
  }
  set binaryType(n) {
    this._binaryType = n, this._ws && (this._ws.binaryType = n);
  }
  /**
   * Returns the number or connection retries
   */
  get retryCount() {
    return Math.max(this._retryCount, 0);
  }
  /**
   * The number of bytes of data that have been queued using calls to send() but not yet
   * transmitted to the network. This value resets to zero once all queued data has been sent.
   * This value does not reset to zero when the connection is closed; if you keep calling send(),
   * this will continue to climb. Read only
   */
  get bufferedAmount() {
    return this._messageQueue.reduce((r, o) => (typeof o == "string" ? r += o.length : o instanceof Blob ? r += o.size : r += o.byteLength, r), 0) + (this._ws ? this._ws.bufferedAmount : 0);
  }
  /**
   * The extensions selected by the server. This is currently only the empty string or a list of
   * extensions as negotiated by the connection
   */
  get extensions() {
    return this._ws ? this._ws.extensions : "";
  }
  /**
   * A string indicating the name of the sub-protocol the server selected;
   * this will be one of the strings specified in the protocols parameter when creating the
   * WebSocket object
   */
  get protocol() {
    return this._ws ? this._ws.protocol : "";
  }
  /**
   * The current state of the connection; this is one of the Ready state constants
   */
  get readyState() {
    return this._ws ? this._ws.readyState : this._options.startClosed ? pn.CLOSED : pn.CONNECTING;
  }
  /**
   * The URL as resolved by the constructor
   */
  get url() {
    return this._ws ? this._ws.url : "";
  }
  /**
   * Whether the websocket object is now in reconnectable state
   */
  get shouldReconnect() {
    return this._shouldReconnect;
  }
  /**
   * Closes the WebSocket connection or connection attempt, if any. If the connection is already
   * CLOSED, this method does nothing
   */
  close(n = 1e3, r) {
    if (this._closeCalled = !0, this._shouldReconnect = !1, this._clearTimeouts(), !this._ws) {
      this._debug("close enqueued: no ws instance");
      return;
    }
    if (this._ws.readyState === this.CLOSED) {
      this._debug("close: already closed");
      return;
    }
    this._ws.close(n, r);
  }
  /**
   * Closes the WebSocket connection or connection attempt and connects again.
   * Resets retry counter;
   */
  reconnect(n, r) {
    this._shouldReconnect = !0, this._closeCalled = !1, this._retryCount = -1, !this._ws || this._ws.readyState === this.CLOSED ? this._connect() : (this._disconnect(n, r), this._connect());
  }
  /**
   * Enqueue specified data to be transmitted to the server over the WebSocket connection
   */
  send(n) {
    if (this._ws && this._ws.readyState === this.OPEN)
      this._debug("send", n), this._ws.send(n);
    else {
      const { maxEnqueuedMessages: r = cn.maxEnqueuedMessages } = this._options;
      this._messageQueue.length < r && (this._debug("enqueue", n), this._messageQueue.push(n));
    }
  }
  _debug(...n) {
    this._options.debug && this._debugLogger("RWS>", ...n);
  }
  _getNextDelay() {
    const {
      reconnectionDelayGrowFactor: n = cn.reconnectionDelayGrowFactor,
      minReconnectionDelay: r = cn.minReconnectionDelay,
      maxReconnectionDelay: o = cn.maxReconnectionDelay
    } = this._options;
    let i = 0;
    return this._retryCount > 0 && (i = r * n ** (this._retryCount - 1), i > o && (i = o)), this._debug("next delay", i), i;
  }
  _wait() {
    return new Promise((n) => {
      setTimeout(n, this._getNextDelay());
    });
  }
  _getNextProtocols(n) {
    if (!n) return Promise.resolve(null);
    if (typeof n == "string" || Array.isArray(n))
      return Promise.resolve(n);
    if (typeof n == "function") {
      const r = n();
      if (!r) return Promise.resolve(null);
      if (typeof r == "string" || Array.isArray(r))
        return Promise.resolve(r);
      if (r.then)
        return r;
    }
    throw Error("Invalid protocols");
  }
  _getNextUrl(n) {
    if (typeof n == "string")
      return Promise.resolve(n);
    if (typeof n == "function") {
      const r = n();
      if (typeof r == "string")
        return Promise.resolve(r);
      if (r.then)
        return r;
    }
    throw Error("Invalid URL");
  }
  _connect() {
    if (this._connectLock || !this._shouldReconnect)
      return;
    this._connectLock = !0;
    const {
      maxRetries: n = cn.maxRetries,
      connectionTimeout: r = cn.connectionTimeout
    } = this._options;
    if (this._retryCount >= n) {
      this._debug("max retries reached", this._retryCount, ">=", n);
      return;
    }
    this._retryCount++, this._debug("connect", this._retryCount), this._removeListeners(), this._wait().then(
      () => Promise.all([
        this._getNextUrl(this._url),
        this._getNextProtocols(this._protocols || null)
      ])
    ).then(([o, i]) => {
      if (this._closeCalled) {
        this._connectLock = !1;
        return;
      }
      !this._options.WebSocket && typeof WebSocket > "u" && !Lc && (console.error(`‼️ No WebSocket implementation available. You should define options.WebSocket. 

For example, if you're using node.js, run \`npm install ws\`, and then in your code:

import PartySocket from 'partysocket';
import WS from 'ws';

const partysocket = new PartySocket({
  host: "127.0.0.1:1999",
  room: "test-room",
  WebSocket: WS
});

`), Lc = !0);
      const l = this._options.WebSocket || WebSocket;
      this._debug("connect", { url: o, protocols: i }), this._ws = i ? new l(o, i) : new l(o), this._ws.binaryType = this._binaryType, this._connectLock = !1, this._addListeners(), this._connectTimeout = setTimeout(
        () => this._handleTimeout(),
        r
      );
    }).catch((o) => {
      this._connectLock = !1, this._handleError(new Wl.ErrorEvent(Error(o.message), this));
    });
  }
  _handleTimeout() {
    this._debug("timeout event"), this._handleError(new Wl.ErrorEvent(Error("TIMEOUT"), this));
  }
  _disconnect(n = 1e3, r) {
    if (this._clearTimeouts(), !!this._ws) {
      this._removeListeners();
      try {
        (this._ws.readyState === this.OPEN || this._ws.readyState === this.CONNECTING) && this._ws.close(n, r), this._handleClose(new Wl.CloseEvent(n, r, this));
      } catch {
      }
    }
  }
  _acceptOpen() {
    this._debug("accept open"), this._retryCount = 0;
  }
  _removeListeners() {
    this._ws && (this._debug("removeListeners"), this._ws.removeEventListener("open", this._handleOpen), this._ws.removeEventListener("close", this._handleClose), this._ws.removeEventListener("message", this._handleMessage), this._ws.removeEventListener("error", this._handleError));
  }
  _addListeners() {
    this._ws && (this._debug("addListeners"), this._ws.addEventListener("open", this._handleOpen), this._ws.addEventListener("close", this._handleClose), this._ws.addEventListener("message", this._handleMessage), this._ws.addEventListener("error", this._handleError));
  }
  _clearTimeouts() {
    clearTimeout(this._connectTimeout), clearTimeout(this._uptimeTimeout);
  }
};
var $1 = (e) => e[1] !== null && e[1] !== void 0;
function T1() {
  if (typeof crypto < "u" && crypto.randomUUID)
    return crypto.randomUUID();
  let e = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime(), t = typeof performance < "u" && performance.now && performance.now() * 1e3 || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
    let r = Math.random() * 16;
    return e > 0 ? (r = (e + r) % 16 | 0, e = Math.floor(e / 16)) : (r = (t + r) % 16 | 0, t = Math.floor(t / 16)), (n === "x" ? r : r & 3 | 8).toString(16);
  });
}
function Jp(e, t, n = {}) {
  const {
    host: r,
    path: o,
    protocol: i,
    room: l,
    party: s,
    basePath: u,
    prefix: a,
    query: d
  } = e;
  let f = r.replace(/^(http|https|ws|wss):\/\//, "");
  if (f.endsWith("/") && (f = f.slice(0, -1)), o != null && o.startsWith("/"))
    throw new Error("path must not start with a slash");
  const m = s ?? "main", y = o ? `/${o}` : "", g = i || (f.startsWith("localhost:") || f.startsWith("127.0.0.1:") || f.startsWith("192.168.") || f.startsWith("10.") || f.startsWith("172.") && f.split(".")[1] >= "16" && f.split(".")[1] <= "31" || f.startsWith("[::ffff:7f00:1]:") ? (
    // http / ws
    t
  ) : (
    // https / wss
    `${t}s`
  )), x = `${g}://${f}/${u || `${a || "parties"}/${m}/${l}`}${y}`, k = (c = {}) => `${x}?${new URLSearchParams([
    ...Object.entries(n),
    ...Object.entries(c).filter($1)
  ])}`, p = typeof d == "function" ? async () => k(await d()) : k(d);
  return {
    host: f,
    path: y,
    room: l,
    name: m,
    protocol: g,
    partyUrl: x,
    urlProvider: p
  };
}
var N1 = class extends E1 {
  constructor(t) {
    var n, r;
    const o = Ic(t);
    super(o.urlProvider, o.protocols, o.socketOptions);
    A(this, "_pk");
    A(this, "_pkurl");
    A(this, "name");
    A(this, "room");
    A(this, "host");
    A(this, "path");
    this.partySocketOptions = t, this.setWSProperties(o), t.disableNameValidation || ((n = t.party) != null && n.includes("/") && console.warn(
      `PartySocket: party name "${t.party}" contains forward slash which may cause routing issues. Consider using a name without forward slashes or set disableNameValidation: true to bypass this warning.`
    ), (r = t.room) != null && r.includes("/") && console.warn(
      `PartySocket: room name "${t.room}" contains forward slash which may cause routing issues. Consider using a name without forward slashes or set disableNameValidation: true to bypass this warning.`
    ));
  }
  updateProperties(t) {
    const n = Ic({
      ...this.partySocketOptions,
      ...t,
      host: t.host ?? this.host,
      room: t.room ?? this.room,
      path: t.path ?? this.path
    });
    this._url = n.urlProvider, this._protocols = n.protocols, this._options = n.socketOptions, this.setWSProperties(n);
  }
  setWSProperties(t) {
    const { _pk: n, _pkurl: r, name: o, room: i, host: l, path: s } = t;
    this._pk = n, this._pkurl = r, this.name = o, this.room = i, this.host = l, this.path = s;
  }
  reconnect(t, n) {
    if (!this.room || !this.host)
      throw new Error(
        "The room and host must be set before connecting, use `updateProperties` method to set them or pass them to the constructor."
      );
    super.reconnect(t, n);
  }
  get id() {
    return this._pk;
  }
  /**
   * Exposes the static PartyKit room URL without applying query parameters.
   * To access the currently connected WebSocket url, use PartySocket#url.
   */
  get roomUrl() {
    return this._pkurl;
  }
  // a `fetch` method that uses (almost) the same options as `PartySocket`
  static async fetch(t, n) {
    const r = Jp(t, "http"), o = typeof r.urlProvider == "string" ? r.urlProvider : await r.urlProvider();
    return (t.fetch ?? fetch)(o, n);
  }
};
function Ic(e) {
  const {
    id: t,
    host: n,
    path: r,
    party: o,
    room: i,
    protocol: l,
    query: s,
    protocols: u,
    ...a
  } = e, d = t || T1(), f = Jp(e, "ws", { _pk: d });
  return {
    _pk: d,
    _pkurl: f.partyUrl,
    name: f.name,
    room: f.room,
    host: f.host,
    path: f.path,
    protocols: u,
    socketOptions: a,
    urlProvider: f.urlProvider
  };
}
const P1 = x1((e, t) => ({
  sockets: {},
  getSocket: (n, r) => {
    const o = `${r}_${n}`, i = t().sockets[o];
    if (i) return i;
    const l = new N1({
      host: "https://api.ticketdesk.ai",
      party: "chatroom",
      room: n,
      query: {
        site_id: r,
        session_id: localStorage.getItem(`ti_${r}_session_id`)
      }
    });
    return e((s) => ({
      sockets: { ...s.sockets, [o]: l }
    })), l;
  }
}));
function M1({ ticketdeskId: e }) {
  const [t, n] = e.split("_"), o = P1((W) => W.getSocket)(t, n), [i, l] = j.useState({
    name: "Chat with us",
    color: "#3b82f6",
    shape: "round",
    welcome_message: "Hi there!"
  }), [s, u] = j.useState(!0), [a, d] = j.useState([]), [f, m] = j.useState(null), [y, g] = j.useState(null), [x, k] = j.useState([]), [p, c] = j.useState(
    null
  ), [h, w] = j.useState(null), [C, E] = j.useState({
    lastActive: void 0,
    isTyping: !1,
    operators: []
  }), [$, P] = j.useState(null), b = j.useCallback(
    (W) => {
      const { type: ie, data: _, error: F } = W;
      if (F) {
        w(F);
        return;
      }
      switch (ie) {
        case "session:connected":
          l((R) => ({ ...R, ..._.config })), u(!1);
          break;
        case "session:joined":
          _.session_id && (m(_.session_id), jc(`ti_${n}_session_id`, _.session_id)), _.client_id && (g(_.client_id), jc(`ti_${n}_client_id`, _.client_id)), d(_.messages || []), c(_.session), _.last_active && E((R) => ({
            ...R,
            lastActive: _.last_active
          })), _.operators && E((R) => ({
            ...R,
            operators: _.operators
          }));
          break;
        case "session:list":
          k(_.sessions);
          break;
        case "message:typing": {
          E((V) => ({ ...V, isTyping: !0 })), $ && clearTimeout($);
          const R = setTimeout(() => {
            E((V) => ({ ...V, isTyping: !1 })), P(null);
          }, 1e4);
          P(R);
          break;
        }
        case "message:recieved": {
          d((R) => [...R, _.message]), E((R) => ({ ...R, isTyping: !1 })), $ && (clearTimeout($), P(null));
          break;
        }
        case "operator:list":
          _.operators && E((R) => ({
            ...R,
            operators: _.operators
          }));
          break;
        case "message:read":
          d(
            (R) => R.map(
              (V) => V.id === _.message_id ? { ...V, status: _.status } : V
            )
          );
          break;
        default:
          console.log("Unhandled message type:", ie, _);
      }
    },
    [n, $]
  );
  j.useEffect(() => {
    const W = (ie) => b(JSON.parse(ie.data));
    return o.addEventListener("message", W), () => o.removeEventListener("message", W);
  }, [o, b]), j.useEffect(() => {
    const W = Hs(`ti_${n}_session_id`), ie = Hs(`ti_${n}_client_id`);
    W && m(W), ie && g(ie);
  }, [n]);
  const z = j.useCallback(
    (W) => {
      !f || !y || (W.id = y1(), d((ie) => [...ie, W]), o.send(
        JSON.stringify({
          type: "message:new",
          session_id: f,
          client_id: y,
          site_id: n,
          message: W
        })
      ));
    },
    [o, f, y, n]
  ), G = j.useCallback(() => {
    if (!o) return;
    const W = {
      type: "session:new",
      client_id: y,
      site_id: n
    };
    o.send(JSON.stringify(W)), d([]);
  }, [o, y, n]), H = j.useCallback(
    (W) => {
      if (!o) return;
      const ie = {
        type: W ? "session:join" : "session:new",
        session_id: W,
        client_id: y,
        site_id: n
      };
      o.send(JSON.stringify(ie)), W && m(W);
    },
    [o, y, n]
  ), we = j.useCallback(() => {
    if (!o || !f) return;
    const W = {
      type: "session:state",
      session_id: f,
      client_id: y,
      site_id: n,
      state: "resolved"
    };
    o.send(JSON.stringify(W));
  }, [o, f, y, n]), Oe = j.useCallback(() => {
    if (o && y) {
      const W = {
        type: "session:list",
        client_id: y,
        site_id: n
      };
      o.send(JSON.stringify(W));
    }
  }, [o, y, n]), ar = j.useCallback(
    (W) => {
      if (o && y) {
        const ie = {
          type: "session:update",
          client_id: y,
          session_id: f,
          site_id: n,
          data: W
        };
        o.send(JSON.stringify(ie));
      }
      c((ie) => ie && { ...ie, ...W });
    },
    [o, y, n, f]
  );
  return {
    messages: a,
    sendMessage: z,
    startNewChat: G,
    endCurrentChat: we,
    getRecentChats: Oe,
    updateProfile: ar,
    loadSession: H,
    sessions: x,
    selectedSession: p,
    isConnected: o.readyState === WebSocket.OPEN,
    errorMessage: h,
    setErrorMessage: w,
    chatState: C,
    isLoading: s,
    config: i,
    sessionId: f,
    clientId: y
  };
}
var sr = {};
var qp = j;
function L(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var je = Object.prototype.hasOwnProperty, j1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Dc = {}, Oc = {};
function eh(e) {
  return je.call(Oc, e) ? !0 : je.call(Dc, e) ? !1 : j1.test(e) ? Oc[e] = !0 : (Dc[e] = !0, !1);
}
function Pe(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ge[e] = new Pe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ge[t] = new Pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ge[e] = new Pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ge[e] = new Pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ge[e] = new Pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ge[e] = new Pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ge[e] = new Pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ge[e] = new Pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ge[e] = new Pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var qu = /[\-:]([a-z])/g;
function ea(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    qu,
    ea
  );
  ge[t] = new Pe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(qu, ea);
  ge[t] = new Pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(qu, ea);
  ge[t] = new Pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ge[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new Pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ge[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
var ei = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, R1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ei).forEach(function(e) {
  R1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ei[t] = ei[e];
  });
});
var z1 = /["'&<>]/;
function Ee(e) {
  if (typeof e == "boolean" || typeof e == "number") return "" + e;
  e = "" + e;
  var t = z1.exec(e);
  if (t) {
    var n = "", r, o = 0;
    for (r = t.index; r < e.length; r++) {
      switch (e.charCodeAt(r)) {
        case 34:
          t = "&quot;";
          break;
        case 38:
          t = "&amp;";
          break;
        case 39:
          t = "&#x27;";
          break;
        case 60:
          t = "&lt;";
          break;
        case 62:
          t = "&gt;";
          break;
        default:
          continue;
      }
      o !== r && (n += e.substring(o, r)), o = r + 1, n += t;
    }
    e = o !== r ? n + e.substring(o, r) : n;
  }
  return e;
}
var F1 = /([A-Z])/g, L1 = /^ms-/, Qs = Array.isArray;
function kt(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function I1(e, t, n) {
  switch (t) {
    case "select":
      return kt(1, n.value != null ? n.value : n.defaultValue);
    case "svg":
      return kt(2, null);
    case "math":
      return kt(3, null);
    case "foreignObject":
      return kt(1, null);
    case "table":
      return kt(4, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return kt(5, null);
    case "colgroup":
      return kt(7, null);
    case "tr":
      return kt(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? kt(1, null) : e;
}
var bc = /* @__PURE__ */ new Map();
function th(e, t, n) {
  if (typeof n != "object") throw Error(L(62));
  t = !0;
  for (var r in n) if (je.call(n, r)) {
    var o = n[r];
    if (o != null && typeof o != "boolean" && o !== "") {
      if (r.indexOf("--") === 0) {
        var i = Ee(r);
        o = Ee(("" + o).trim());
      } else {
        i = r;
        var l = bc.get(i);
        l !== void 0 || (l = Ee(i.replace(F1, "-$1").toLowerCase().replace(L1, "-ms-")), bc.set(i, l)), i = l, o = typeof o == "number" ? o === 0 || je.call(ei, r) ? "" + o : o + "px" : Ee(("" + o).trim());
      }
      t ? (t = !1, e.push(' style="', i, ":", o)) : e.push(";", i, ":", o);
    }
  }
  t || e.push('"');
}
function Ae(e, t, n, r) {
  switch (n) {
    case "style":
      th(e, t, r);
      return;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
      return;
  }
  if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") {
    if (t = ge.hasOwnProperty(n) ? ge[n] : null, t !== null) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (!t.acceptsBooleans) return;
      }
      switch (n = t.attributeName, t.type) {
        case 3:
          r && e.push(" ", n, '=""');
          break;
        case 4:
          r === !0 ? e.push(" ", n, '=""') : r !== !1 && e.push(" ", n, '="', Ee(r), '"');
          break;
        case 5:
          isNaN(r) || e.push(" ", n, '="', Ee(r), '"');
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(" ", n, '="', Ee(r), '"');
          break;
        default:
          t.sanitizeURL && (r = "" + r), e.push(" ", n, '="', Ee(r), '"');
      }
    } else if (eh(n)) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (t = n.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-") return;
      }
      e.push(" ", n, '="', Ee(r), '"');
    }
  }
}
function ti(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(L(60));
    if (typeof t != "object" || !("__html" in t)) throw Error(L(61));
    t = t.__html, t != null && e.push("" + t);
  }
}
function D1(e) {
  var t = "";
  return qp.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
function Vl(e, t, n, r) {
  e.push(ht(n));
  var o = n = null, i;
  for (i in t) if (je.call(t, i)) {
    var l = t[i];
    if (l != null) switch (i) {
      case "children":
        n = l;
        break;
      case "dangerouslySetInnerHTML":
        o = l;
        break;
      default:
        Ae(e, r, i, l);
    }
  }
  return e.push(">"), ti(e, o, n), typeof n == "string" ? (e.push(Ee(n)), null) : n;
}
var O1 = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ac = /* @__PURE__ */ new Map();
function ht(e) {
  var t = Ac.get(e);
  if (t === void 0) {
    if (!O1.test(e)) throw Error(L(65, e));
    t = "<" + e, Ac.set(e, t);
  }
  return t;
}
function b1(e, t, n, r, o) {
  switch (t) {
    case "select":
      e.push(ht("select"));
      var i = null, l = null;
      for (d in n) if (je.call(n, d)) {
        var s = n[d];
        if (s != null) switch (d) {
          case "children":
            i = s;
            break;
          case "dangerouslySetInnerHTML":
            l = s;
            break;
          case "defaultValue":
          case "value":
            break;
          default:
            Ae(e, r, d, s);
        }
      }
      return e.push(">"), ti(e, l, i), i;
    case "option":
      l = o.selectedValue, e.push(ht("option"));
      var u = s = null, a = null, d = null;
      for (i in n) if (je.call(n, i)) {
        var f = n[i];
        if (f != null) switch (i) {
          case "children":
            s = f;
            break;
          case "selected":
            a = f;
            break;
          case "dangerouslySetInnerHTML":
            d = f;
            break;
          case "value":
            u = f;
          default:
            Ae(e, r, i, f);
        }
      }
      if (l != null) if (n = u !== null ? "" + u : D1(s), Qs(l)) {
        for (r = 0; r < l.length; r++)
          if ("" + l[r] === n) {
            e.push(' selected=""');
            break;
          }
      } else "" + l === n && e.push(' selected=""');
      else a && e.push(' selected=""');
      return e.push(">"), ti(e, d, s), s;
    case "textarea":
      e.push(ht("textarea")), d = l = i = null;
      for (s in n) if (je.call(n, s) && (u = n[s], u != null)) switch (s) {
        case "children":
          d = u;
          break;
        case "value":
          i = u;
          break;
        case "defaultValue":
          l = u;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(L(91));
        default:
          Ae(
            e,
            r,
            s,
            u
          );
      }
      if (i === null && l !== null && (i = l), e.push(">"), d != null) {
        if (i != null) throw Error(L(92));
        if (Qs(d) && 1 < d.length) throw Error(L(93));
        i = "" + d;
      }
      return typeof i == "string" && i[0] === `
` && e.push(`
`), i !== null && e.push(Ee("" + i)), null;
    case "input":
      e.push(ht("input")), u = d = s = i = null;
      for (l in n) if (je.call(n, l) && (a = n[l], a != null)) switch (l) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(L(399, "input"));
        case "defaultChecked":
          u = a;
          break;
        case "defaultValue":
          s = a;
          break;
        case "checked":
          d = a;
          break;
        case "value":
          i = a;
          break;
        default:
          Ae(e, r, l, a);
      }
      return d !== null ? Ae(e, r, "checked", d) : u !== null && Ae(e, r, "checked", u), i !== null ? Ae(e, r, "value", i) : s !== null && Ae(e, r, "value", s), e.push("/>"), null;
    case "menuitem":
      e.push(ht("menuitem"));
      for (var m in n) if (je.call(n, m) && (i = n[m], i != null)) switch (m) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(L(400));
        default:
          Ae(e, r, m, i);
      }
      return e.push(">"), null;
    case "title":
      e.push(ht("title")), i = null;
      for (f in n) if (je.call(n, f) && (l = n[f], l != null)) switch (f) {
        case "children":
          i = l;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(L(434));
        default:
          Ae(e, r, f, l);
      }
      return e.push(">"), i;
    case "listing":
    case "pre":
      e.push(ht(t)), l = i = null;
      for (u in n) if (je.call(n, u) && (s = n[u], s != null)) switch (u) {
        case "children":
          i = s;
          break;
        case "dangerouslySetInnerHTML":
          l = s;
          break;
        default:
          Ae(e, r, u, s);
      }
      if (e.push(">"), l != null) {
        if (i != null) throw Error(L(60));
        if (typeof l != "object" || !("__html" in l)) throw Error(L(61));
        n = l.__html, n != null && (typeof n == "string" && 0 < n.length && n[0] === `
` ? e.push(`
`, n) : e.push("" + n));
      }
      return typeof i == "string" && i[0] === `
` && e.push(`
`), i;
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "img":
    case "keygen":
    case "link":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
      e.push(ht(t));
      for (var y in n) if (je.call(n, y) && (i = n[y], i != null)) switch (y) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(L(399, t));
        default:
          Ae(e, r, y, i);
      }
      return e.push("/>"), null;
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return Vl(
        e,
        n,
        t,
        r
      );
    case "html":
      return o.insertionMode === 0 && e.push("<!DOCTYPE html>"), Vl(e, n, t, r);
    default:
      if (t.indexOf("-") === -1 && typeof n.is != "string") return Vl(e, n, t, r);
      e.push(ht(t)), l = i = null;
      for (a in n) if (je.call(n, a) && (s = n[a], s != null)) switch (a) {
        case "children":
          i = s;
          break;
        case "dangerouslySetInnerHTML":
          l = s;
          break;
        case "style":
          th(e, r, s);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          break;
        default:
          eh(a) && typeof s != "function" && typeof s != "symbol" && e.push(" ", a, '="', Ee(s), '"');
      }
      return e.push(">"), ti(e, l, i), i;
  }
}
function Uc(e, t, n) {
  if (e.push('<!--$?--><template id="'), n === null) throw Error(L(395));
  return e.push(n), e.push('"></template>');
}
function A1(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return e.push('<div hidden id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 2:
      return e.push('<svg aria-hidden="true" style="display:none" id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 3:
      return e.push('<math aria-hidden="true" style="display:none" id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 4:
      return e.push('<table hidden id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 5:
      return e.push('<table hidden><tbody id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 6:
      return e.push('<table hidden><tr id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 7:
      return e.push('<table hidden><colgroup id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    default:
      throw Error(L(397));
  }
}
function U1(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return e.push("</div>");
    case 2:
      return e.push("</svg>");
    case 3:
      return e.push("</math>");
    case 4:
      return e.push("</table>");
    case 5:
      return e.push("</tbody></table>");
    case 6:
      return e.push("</tr></table>");
    case 7:
      return e.push("</colgroup></table>");
    default:
      throw Error(L(397));
  }
}
var W1 = /[<\u2028\u2029]/g;
function Bl(e) {
  return JSON.stringify(e).replace(W1, function(t) {
    switch (t) {
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
    }
  });
}
function V1(e, t) {
  return t = t === void 0 ? "" : t, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: t + "P:", segmentPrefix: t + "S:", boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
}
function Wc(e, t, n, r) {
  return n.generateStaticMarkup ? (e.push(Ee(t)), !1) : (t === "" ? e = r : (r && e.push("<!-- -->"), e.push(Ee(t)), e = !0), e);
}
var br = Object.assign, B1 = Symbol.for("react.element"), nh = Symbol.for("react.portal"), rh = Symbol.for("react.fragment"), oh = Symbol.for("react.strict_mode"), ih = Symbol.for("react.profiler"), lh = Symbol.for("react.provider"), sh = Symbol.for("react.context"), uh = Symbol.for("react.forward_ref"), ah = Symbol.for("react.suspense"), ch = Symbol.for("react.suspense_list"), dh = Symbol.for("react.memo"), ta = Symbol.for("react.lazy"), H1 = Symbol.for("react.scope"), Q1 = Symbol.for("react.debug_trace_mode"), Y1 = Symbol.for("react.legacy_hidden"), X1 = Symbol.for("react.default_value"), Vc = Symbol.iterator;
function Ys(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case rh:
      return "Fragment";
    case nh:
      return "Portal";
    case ih:
      return "Profiler";
    case oh:
      return "StrictMode";
    case ah:
      return "Suspense";
    case ch:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case sh:
      return (e.displayName || "Context") + ".Consumer";
    case lh:
      return (e._context.displayName || "Context") + ".Provider";
    case uh:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case dh:
      return t = e.displayName || null, t !== null ? t : Ys(e.type) || "Memo";
    case ta:
      t = e._payload, e = e._init;
      try {
        return Ys(e(t));
      } catch {
      }
  }
  return null;
}
var fh = {};
function Bc(e, t) {
  if (e = e.contextTypes, !e) return fh;
  var n = {}, r;
  for (r in e) n[r] = t[r];
  return n;
}
var xn = null;
function ll(e, t) {
  if (e !== t) {
    e.context._currentValue2 = e.parentValue, e = e.parent;
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(L(401));
    } else {
      if (n === null) throw Error(L(401));
      ll(e, n);
    }
    t.context._currentValue2 = t.value;
  }
}
function ph(e) {
  e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && ph(e);
}
function hh(e) {
  var t = e.parent;
  t !== null && hh(t), e.context._currentValue2 = e.value;
}
function mh(e, t) {
  if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(L(402));
  e.depth === t.depth ? ll(e, t) : mh(e, t);
}
function yh(e, t) {
  var n = t.parent;
  if (n === null) throw Error(L(402));
  e.depth === n.depth ? ll(e, n) : yh(e, n), t.context._currentValue2 = t.value;
}
function Fi(e) {
  var t = xn;
  t !== e && (t === null ? hh(e) : e === null ? ph(t) : t.depth === e.depth ? ll(t, e) : t.depth > e.depth ? mh(t, e) : yh(t, e), xn = e);
}
var Hc = { isMounted: function() {
  return !1;
}, enqueueSetState: function(e, t) {
  e = e._reactInternals, e.queue !== null && e.queue.push(t);
}, enqueueReplaceState: function(e, t) {
  e = e._reactInternals, e.replace = !0, e.queue = [t];
}, enqueueForceUpdate: function() {
} };
function Qc(e, t, n, r) {
  var o = e.state !== void 0 ? e.state : null;
  e.updater = Hc, e.props = n, e.state = o;
  var i = { queue: [], replace: !1 };
  e._reactInternals = i;
  var l = t.contextType;
  if (e.context = typeof l == "object" && l !== null ? l._currentValue2 : r, l = t.getDerivedStateFromProps, typeof l == "function" && (l = l(n, o), o = l == null ? o : br({}, o, l), e.state = o), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (t = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && Hc.enqueueReplaceState(e, e.state, null), i.queue !== null && 0 < i.queue.length) if (t = i.queue, l = i.replace, i.queue = null, i.replace = !1, l && t.length === 1) e.state = t[0];
  else {
    for (i = l ? t[0] : e.state, o = !0, l = l ? 1 : 0; l < t.length; l++) {
      var s = t[l];
      s = typeof s == "function" ? s.call(e, i, n, r) : s, s != null && (o ? (o = !1, i = br({}, i, s)) : br(i, s));
    }
    e.state = i;
  }
  else i.queue = null;
}
var K1 = { id: 1, overflow: "" };
function Xs(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var o = 32 - ni(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - ni(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    return i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, { id: 1 << 32 - ni(t) + o | n << o | r, overflow: i + e };
  }
  return { id: 1 << i | n << o | r, overflow: e };
}
var ni = Math.clz32 ? Math.clz32 : J1, G1 = Math.log, Z1 = Math.LN2;
function J1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (G1(e) / Z1 | 0) | 0;
}
function q1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ev = typeof Object.is == "function" ? Object.is : q1, Rt = null, na = null, ri = null, Q = null, $r = !1, Li = !1, oo = 0, Bt = null, sl = 0;
function hn() {
  if (Rt === null) throw Error(L(321));
  return Rt;
}
function Yc() {
  if (0 < sl) throw Error(L(312));
  return { memoizedState: null, queue: null, next: null };
}
function ra() {
  return Q === null ? ri === null ? ($r = !1, ri = Q = Yc()) : ($r = !0, Q = ri) : Q.next === null ? ($r = !1, Q = Q.next = Yc()) : ($r = !0, Q = Q.next), Q;
}
function oa() {
  na = Rt = null, Li = !1, ri = null, sl = 0, Q = Bt = null;
}
function gh(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xc(e, t, n) {
  if (Rt = hn(), Q = ra(), $r) {
    var r = Q.queue;
    if (t = r.dispatch, Bt !== null && (n = Bt.get(r), n !== void 0)) {
      Bt.delete(r), r = Q.memoizedState;
      do
        r = e(r, n.action), n = n.next;
      while (n !== null);
      return Q.memoizedState = r, [r, t];
    }
    return [Q.memoizedState, t];
  }
  return e = e === gh ? typeof t == "function" ? t() : t : n !== void 0 ? n(t) : t, Q.memoizedState = e, e = Q.queue = { last: null, dispatch: null }, e = e.dispatch = tv.bind(null, Rt, e), [Q.memoizedState, e];
}
function Kc(e, t) {
  if (Rt = hn(), Q = ra(), t = t === void 0 ? null : t, Q !== null) {
    var n = Q.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var o = 0; o < r.length && o < t.length; o++) if (!ev(t[o], r[o])) {
          r = !1;
          break e;
        }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return e = e(), Q.memoizedState = [e, t], e;
}
function tv(e, t, n) {
  if (25 <= sl) throw Error(L(301));
  if (e === Rt) if (Li = !0, e = { action: n, next: null }, Bt === null && (Bt = /* @__PURE__ */ new Map()), n = Bt.get(t), n === void 0) Bt.set(t, e);
  else {
    for (t = n; t.next !== null; ) t = t.next;
    t.next = e;
  }
}
function nv() {
  throw Error(L(394));
}
function Do() {
}
var Gc = { readContext: function(e) {
  return e._currentValue2;
}, useContext: function(e) {
  return hn(), e._currentValue2;
}, useMemo: Kc, useReducer: Xc, useRef: function(e) {
  Rt = hn(), Q = ra();
  var t = Q.memoizedState;
  return t === null ? (e = { current: e }, Q.memoizedState = e) : t;
}, useState: function(e) {
  return Xc(gh, e);
}, useInsertionEffect: Do, useLayoutEffect: function() {
}, useCallback: function(e, t) {
  return Kc(function() {
    return e;
  }, t);
}, useImperativeHandle: Do, useEffect: Do, useDebugValue: Do, useDeferredValue: function(e) {
  return hn(), e;
}, useTransition: function() {
  return hn(), [
    !1,
    nv
  ];
}, useId: function() {
  var e = na.treeContext, t = e.overflow;
  e = e.id, e = (e & ~(1 << 32 - ni(e) - 1)).toString(32) + t;
  var n = oi;
  if (n === null) throw Error(L(404));
  return t = oo++, e = ":" + n.idPrefix + "R" + e, 0 < t && (e += "H" + t.toString(32)), e + ":";
}, useMutableSource: function(e, t) {
  return hn(), t(e._source);
}, useSyncExternalStore: function(e, t, n) {
  if (n === void 0) throw Error(L(407));
  return n();
} }, oi = null, Hl = qp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
function rv(e) {
  return console.error(e), null;
}
function Tr() {
}
function ov(e, t, n, r, o, i, l, s, u) {
  var a = [], d = /* @__PURE__ */ new Set();
  return t = { destination: null, responseState: t, progressiveChunkSize: r === void 0 ? 12800 : r, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: d, pingedTasks: a, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: o === void 0 ? rv : o, onAllReady: Tr, onShellReady: l === void 0 ? Tr : l, onShellError: Tr, onFatalError: Tr }, n = Ii(t, 0, null, n, !1, !1), n.parentFlushed = !0, e = ia(t, e, null, n, d, fh, null, K1), a.push(e), t;
}
function ia(e, t, n, r, o, i, l, s) {
  e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
  var u = { node: t, ping: function() {
    var a = e.pingedTasks;
    a.push(u), a.length === 1 && xh(e);
  }, blockedBoundary: n, blockedSegment: r, abortSet: o, legacyContext: i, context: l, treeContext: s };
  return o.add(u), u;
}
function Ii(e, t, n, r, o, i) {
  return { status: 0, id: -1, index: t, parentFlushed: !1, chunks: [], children: [], formatContext: r, boundary: n, lastPushedText: o, textEmbedded: i };
}
function io(e, t) {
  if (e = e.onError(t), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
  return e;
}
function Di(e, t) {
  var n = e.onShellError;
  n(t), n = e.onFatalError, n(t), e.destination !== null ? (e.status = 2, e.destination.destroy(t)) : (e.status = 1, e.fatalError = t);
}
function Zc(e, t, n, r, o) {
  for (Rt = {}, na = t, oo = 0, e = n(r, o); Li; ) Li = !1, oo = 0, sl += 1, Q = null, e = n(r, o);
  return oa(), e;
}
function Jc(e, t, n, r) {
  var o = n.render(), i = r.childContextTypes;
  if (i != null) {
    var l = t.legacyContext;
    if (typeof n.getChildContext != "function") r = l;
    else {
      n = n.getChildContext();
      for (var s in n) if (!(s in i)) throw Error(L(108, Ys(r) || "Unknown", s));
      r = br({}, l, n);
    }
    t.legacyContext = r, Ve(e, t, o), t.legacyContext = l;
  } else Ve(e, t, o);
}
function qc(e, t) {
  if (e && e.defaultProps) {
    t = br({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ks(e, t, n, r, o) {
  if (typeof n == "function") if (n.prototype && n.prototype.isReactComponent) {
    o = Bc(n, t.legacyContext);
    var i = n.contextType;
    i = new n(r, typeof i == "object" && i !== null ? i._currentValue2 : o), Qc(i, n, r, o), Jc(e, t, i, n);
  } else {
    i = Bc(n, t.legacyContext), o = Zc(e, t, n, r, i);
    var l = oo !== 0;
    if (typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0) Qc(o, n, r, i), Jc(e, t, o, n);
    else if (l) {
      r = t.treeContext, t.treeContext = Xs(r, 1, 0);
      try {
        Ve(e, t, o);
      } finally {
        t.treeContext = r;
      }
    } else Ve(e, t, o);
  }
  else if (typeof n == "string") {
    switch (o = t.blockedSegment, i = b1(o.chunks, n, r, e.responseState, o.formatContext), o.lastPushedText = !1, l = o.formatContext, o.formatContext = I1(l, n, r), Gs(e, t, i), o.formatContext = l, n) {
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "input":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        break;
      default:
        o.chunks.push("</", n, ">");
    }
    o.lastPushedText = !1;
  } else {
    switch (n) {
      case Y1:
      case Q1:
      case oh:
      case ih:
      case rh:
        Ve(e, t, r.children);
        return;
      case ch:
        Ve(e, t, r.children);
        return;
      case H1:
        throw Error(L(343));
      case ah:
        e: {
          n = t.blockedBoundary, o = t.blockedSegment, i = r.fallback, r = r.children, l = /* @__PURE__ */ new Set();
          var s = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: l, errorDigest: null }, u = Ii(e, o.chunks.length, s, o.formatContext, !1, !1);
          o.children.push(u), o.lastPushedText = !1;
          var a = Ii(e, 0, null, o.formatContext, !1, !1);
          a.parentFlushed = !0, t.blockedBoundary = s, t.blockedSegment = a;
          try {
            if (Gs(
              e,
              t,
              r
            ), e.responseState.generateStaticMarkup || a.lastPushedText && a.textEmbedded && a.chunks.push("<!-- -->"), a.status = 1, Oi(s, a), s.pendingTasks === 0) break e;
          } catch (d) {
            a.status = 4, s.forceClientRender = !0, s.errorDigest = io(e, d);
          } finally {
            t.blockedBoundary = n, t.blockedSegment = o;
          }
          t = ia(e, i, n, u, l, t.legacyContext, t.context, t.treeContext), e.pingedTasks.push(t);
        }
        return;
    }
    if (typeof n == "object" && n !== null) switch (n.$$typeof) {
      case uh:
        if (r = Zc(e, t, n.render, r, o), oo !== 0) {
          n = t.treeContext, t.treeContext = Xs(n, 1, 0);
          try {
            Ve(e, t, r);
          } finally {
            t.treeContext = n;
          }
        } else Ve(e, t, r);
        return;
      case dh:
        n = n.type, r = qc(n, r), Ks(e, t, n, r, o);
        return;
      case lh:
        if (o = r.children, n = n._context, r = r.value, i = n._currentValue2, n._currentValue2 = r, l = xn, xn = r = { parent: l, depth: l === null ? 0 : l.depth + 1, context: n, parentValue: i, value: r }, t.context = r, Ve(e, t, o), e = xn, e === null) throw Error(L(403));
        r = e.parentValue, e.context._currentValue2 = r === X1 ? e.context._defaultValue : r, e = xn = e.parent, t.context = e;
        return;
      case sh:
        r = r.children, r = r(n._currentValue2), Ve(e, t, r);
        return;
      case ta:
        o = n._init, n = o(n._payload), r = qc(n, r), Ks(
          e,
          t,
          n,
          r,
          void 0
        );
        return;
    }
    throw Error(L(130, n == null ? n : typeof n, ""));
  }
}
function Ve(e, t, n) {
  if (t.node = n, typeof n == "object" && n !== null) {
    switch (n.$$typeof) {
      case B1:
        Ks(e, t, n.type, n.props, n.ref);
        return;
      case nh:
        throw Error(L(257));
      case ta:
        var r = n._init;
        n = r(n._payload), Ve(e, t, n);
        return;
    }
    if (Qs(n)) {
      ed(e, t, n);
      return;
    }
    if (n === null || typeof n != "object" ? r = null : (r = Vc && n[Vc] || n["@@iterator"], r = typeof r == "function" ? r : null), r && (r = r.call(n))) {
      if (n = r.next(), !n.done) {
        var o = [];
        do
          o.push(n.value), n = r.next();
        while (!n.done);
        ed(e, t, o);
      }
      return;
    }
    throw e = Object.prototype.toString.call(n), Error(L(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  typeof n == "string" ? (r = t.blockedSegment, r.lastPushedText = Wc(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)) : typeof n == "number" && (r = t.blockedSegment, r.lastPushedText = Wc(t.blockedSegment.chunks, "" + n, e.responseState, r.lastPushedText));
}
function ed(e, t, n) {
  for (var r = n.length, o = 0; o < r; o++) {
    var i = t.treeContext;
    t.treeContext = Xs(i, r, o);
    try {
      Gs(e, t, n[o]);
    } finally {
      t.treeContext = i;
    }
  }
}
function Gs(e, t, n) {
  var r = t.blockedSegment.formatContext, o = t.legacyContext, i = t.context;
  try {
    return Ve(e, t, n);
  } catch (u) {
    if (oa(), typeof u == "object" && u !== null && typeof u.then == "function") {
      n = u;
      var l = t.blockedSegment, s = Ii(e, l.chunks.length, null, l.formatContext, l.lastPushedText, !0);
      l.children.push(s), l.lastPushedText = !1, e = ia(e, t.node, t.blockedBoundary, s, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, n.then(e, e), t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = i, Fi(i);
    } else throw t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = i, Fi(i), u;
  }
}
function iv(e) {
  var t = e.blockedBoundary;
  e = e.blockedSegment, e.status = 3, wh(this, t, e);
}
function vh(e, t, n) {
  var r = e.blockedBoundary;
  e.blockedSegment.status = 3, r === null ? (t.allPendingTasks--, t.status !== 2 && (t.status = 2, t.destination !== null && t.destination.push(null))) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, e = n === void 0 ? Error(L(432)) : n, r.errorDigest = t.onError(e), r.parentFlushed && t.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach(function(o) {
    return vh(o, t, n);
  }), r.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0 && (r = t.onAllReady, r()));
}
function Oi(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    n.id = t.id, n.parentFlushed = !0, n.status === 1 && Oi(e, n);
  } else e.completedSegments.push(t);
}
function wh(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(L(389));
      e.completedRootSegment = n;
    }
    e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Tr, t = e.onShellReady, t());
  } else t.pendingTasks--, t.forceClientRender || (t.pendingTasks === 0 ? (n.parentFlushed && n.status === 1 && Oi(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(iv, e), t.fallbackAbortableTasks.clear()) : n.parentFlushed && n.status === 1 && (Oi(t, n), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
}
function xh(e) {
  if (e.status !== 2) {
    var t = xn, n = Hl.current;
    Hl.current = Gc;
    var r = oi;
    oi = e.responseState;
    try {
      var o = e.pingedTasks, i;
      for (i = 0; i < o.length; i++) {
        var l = o[i], s = e, u = l.blockedSegment;
        if (u.status === 0) {
          Fi(l.context);
          try {
            Ve(s, l, l.node), s.responseState.generateStaticMarkup || u.lastPushedText && u.textEmbedded && u.chunks.push("<!-- -->"), l.abortSet.delete(l), u.status = 1, wh(s, l.blockedBoundary, u);
          } catch (g) {
            if (oa(), typeof g == "object" && g !== null && typeof g.then == "function") {
              var a = l.ping;
              g.then(a, a);
            } else {
              l.abortSet.delete(l), u.status = 4;
              var d = l.blockedBoundary, f = g, m = io(s, f);
              if (d === null ? Di(s, f) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = !0, d.errorDigest = m, d.parentFlushed && s.clientRenderedBoundaries.push(d))), s.allPendingTasks--, s.allPendingTasks === 0) {
                var y = s.onAllReady;
                y();
              }
            }
          } finally {
          }
        }
      }
      o.splice(0, i), e.destination !== null && la(e, e.destination);
    } catch (g) {
      io(e, g), Di(e, g);
    } finally {
      oi = r, Hl.current = n, n === Gc && Fi(t);
    }
  }
}
function Oo(e, t, n) {
  switch (n.parentFlushed = !0, n.status) {
    case 0:
      var r = n.id = e.nextSegmentId++;
      return n.lastPushedText = !1, n.textEmbedded = !1, e = e.responseState, t.push('<template id="'), t.push(e.placeholderPrefix), e = r.toString(16), t.push(e), t.push('"></template>');
    case 1:
      n.status = 2;
      var o = !0;
      r = n.chunks;
      var i = 0;
      n = n.children;
      for (var l = 0; l < n.length; l++) {
        for (o = n[l]; i < o.index; i++) t.push(r[i]);
        o = ul(e, t, o);
      }
      for (; i < r.length - 1; i++) t.push(r[i]);
      return i < r.length && (o = t.push(r[i])), o;
    default:
      throw Error(L(390));
  }
}
function ul(e, t, n) {
  var r = n.boundary;
  if (r === null) return Oo(e, t, n);
  if (r.parentFlushed = !0, r.forceClientRender) return e.responseState.generateStaticMarkup || (r = r.errorDigest, t.push("<!--$!-->"), t.push("<template"), r && (t.push(' data-dgst="'), r = Ee(r), t.push(r), t.push('"')), t.push("></template>")), Oo(e, t, n), e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
  if (0 < r.pendingTasks) {
    r.rootSegmentID = e.nextSegmentId++, 0 < r.completedSegments.length && e.partialBoundaries.push(r);
    var o = e.responseState, i = o.nextSuspenseID++;
    return o = o.boundaryPrefix + i.toString(16), r = r.id = o, Uc(t, e.responseState, r), Oo(e, t, n), t.push("<!--/$-->");
  }
  if (r.byteSize > e.progressiveChunkSize) return r.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(r), Uc(t, e.responseState, r.id), Oo(e, t, n), t.push("<!--/$-->");
  if (e.responseState.generateStaticMarkup || t.push("<!--$-->"), n = r.completedSegments, n.length !== 1) throw Error(L(391));
  return ul(e, t, n[0]), e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
}
function td(e, t, n) {
  return A1(t, e.responseState, n.formatContext, n.id), ul(e, t, n), U1(t, n.formatContext);
}
function nd(e, t, n) {
  for (var r = n.completedSegments, o = 0; o < r.length; o++) kh(e, t, n, r[o]);
  if (r.length = 0, e = e.responseState, r = n.id, n = n.rootSegmentID, t.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? t.push('$RC("') : (e.sentCompleteBoundaryFunction = !0, t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), r === null) throw Error(L(395));
  return n = n.toString(16), t.push(r), t.push('","'), t.push(e.segmentPrefix), t.push(n), t.push('")<\/script>');
}
function kh(e, t, n, r) {
  if (r.status === 2) return !0;
  var o = r.id;
  if (o === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(L(392));
    return td(e, t, r);
  }
  return td(e, t, r), e = e.responseState, t.push(e.startInlineScript), e.sentCompleteSegmentFunction ? t.push('$RS("') : (e.sentCompleteSegmentFunction = !0, t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), t.push(e.segmentPrefix), o = o.toString(16), t.push(o), t.push('","'), t.push(e.placeholderPrefix), t.push(o), t.push('")<\/script>');
}
function la(e, t) {
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      ul(e, t, n), e.completedRootSegment = null;
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) t.push(r[n]);
      n < r.length && t.push(r[n]);
    }
    var o = e.clientRenderedBoundaries, i;
    for (i = 0; i < o.length; i++) {
      var l = o[i];
      r = t;
      var s = e.responseState, u = l.id, a = l.errorDigest, d = l.errorMessage, f = l.errorComponentStack;
      if (r.push(s.startInlineScript), s.sentClientRenderFunction ? r.push('$RX("') : (s.sentClientRenderFunction = !0, r.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), u === null) throw Error(L(395));
      if (r.push(u), r.push('"'), a || d || f) {
        r.push(",");
        var m = Bl(a || "");
        r.push(m);
      }
      if (d || f) {
        r.push(",");
        var y = Bl(d || "");
        r.push(y);
      }
      if (f) {
        r.push(",");
        var g = Bl(f);
        r.push(g);
      }
      if (!r.push(")<\/script>")) {
        e.destination = null, i++, o.splice(0, i);
        return;
      }
    }
    o.splice(0, i);
    var x = e.completedBoundaries;
    for (i = 0; i < x.length; i++) if (!nd(e, t, x[i])) {
      e.destination = null, i++, x.splice(0, i);
      return;
    }
    x.splice(0, i);
    var k = e.partialBoundaries;
    for (i = 0; i < k.length; i++) {
      var p = k[i];
      e: {
        o = e, l = t;
        var c = p.completedSegments;
        for (s = 0; s < c.length; s++) if (!kh(o, l, p, c[s])) {
          s++, c.splice(0, s);
          var h = !1;
          break e;
        }
        c.splice(0, s), h = !0;
      }
      if (!h) {
        e.destination = null, i++, k.splice(0, i);
        return;
      }
    }
    k.splice(0, i);
    var w = e.completedBoundaries;
    for (i = 0; i < w.length; i++) if (!nd(e, t, w[i])) {
      e.destination = null, i++, w.splice(0, i);
      return;
    }
    w.splice(0, i);
  } finally {
    e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && t.push(null);
  }
}
function lv(e, t) {
  try {
    var n = e.abortableTasks;
    n.forEach(function(r) {
      return vh(r, e, t);
    }), n.clear(), e.destination !== null && la(e, e.destination);
  } catch (r) {
    io(e, r), Di(e, r);
  }
}
function sv() {
}
function Sh(e, t, n, r) {
  var o = !1, i = null, l = "", s = { push: function(a) {
    return a !== null && (l += a), !0;
  }, destroy: function(a) {
    o = !0, i = a;
  } }, u = !1;
  if (e = ov(e, V1(n, t ? t.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, sv, void 0, function() {
    u = !0;
  }), xh(e), lv(e, r), e.status === 1) e.status = 2, s.destroy(e.fatalError);
  else if (e.status !== 2 && e.destination === null) {
    e.destination = s;
    try {
      la(e, s);
    } catch (a) {
      io(e, a), Di(e, a);
    }
  }
  if (o) throw i;
  if (!u) throw Error(L(426));
  return l;
}
sr.renderToNodeStream = function() {
  throw Error(L(207));
};
sr.renderToStaticMarkup = function(e, t) {
  return Sh(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
};
sr.renderToStaticNodeStream = function() {
  throw Error(L(208));
};
sr.renderToString = function(e, t) {
  return Sh(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
};
sr.version = "18.3.1";
var sa = {};
var Ch = j;
function I(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Be = null, He = 0;
function M(e, t) {
  if (t.length !== 0) if (512 < t.length) 0 < He && (e.enqueue(new Uint8Array(Be.buffer, 0, He)), Be = new Uint8Array(512), He = 0), e.enqueue(t);
  else {
    var n = Be.length - He;
    n < t.length && (n === 0 ? e.enqueue(Be) : (Be.set(t.subarray(0, n), He), e.enqueue(Be), t = t.subarray(n)), Be = new Uint8Array(512), He = 0), Be.set(t, He), He += t.length;
  }
}
function J(e, t) {
  return M(e, t), !0;
}
function rd(e) {
  Be && 0 < He && (e.enqueue(new Uint8Array(Be.buffer, 0, He)), Be = null, He = 0);
}
var _h = new TextEncoder();
function D(e) {
  return _h.encode(e);
}
function T(e) {
  return _h.encode(e);
}
function Eh(e, t) {
  typeof e.error == "function" ? e.error(t) : e.close();
}
var Re = Object.prototype.hasOwnProperty, uv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, od = {}, id = {};
function $h(e) {
  return Re.call(id, e) ? !0 : Re.call(od, e) ? !1 : uv.test(e) ? id[e] = !0 : (od[e] = !0, !1);
}
function Me(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ve[e] = new Me(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ve[t] = new Me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ve[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ve[e] = new Me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ve[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ve[e] = new Me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ve[e] = new Me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ve[e] = new Me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ve[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ua = /[\-:]([a-z])/g;
function aa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ua,
    aa
  );
  ve[t] = new Me(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ua, aa);
  ve[t] = new Me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ua, aa);
  ve[t] = new Me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ve[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ve.xlinkHref = new Me("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ve[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
var ii = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, av = ["Webkit", "ms", "Moz", "O"];
Object.keys(ii).forEach(function(e) {
  av.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ii[t] = ii[e];
  });
});
var cv = /["'&<>]/;
function he(e) {
  if (typeof e == "boolean" || typeof e == "number") return "" + e;
  e = "" + e;
  var t = cv.exec(e);
  if (t) {
    var n = "", r, o = 0;
    for (r = t.index; r < e.length; r++) {
      switch (e.charCodeAt(r)) {
        case 34:
          t = "&quot;";
          break;
        case 38:
          t = "&amp;";
          break;
        case 39:
          t = "&#x27;";
          break;
        case 60:
          t = "&lt;";
          break;
        case 62:
          t = "&gt;";
          break;
        default:
          continue;
      }
      o !== r && (n += e.substring(o, r)), o = r + 1, n += t;
    }
    e = o !== r ? n + e.substring(o, r) : n;
  }
  return e;
}
var dv = /([A-Z])/g, fv = /^ms-/, Zs = Array.isArray, pv = T("<script>"), hv = T("<\/script>"), mv = T('<script src="'), yv = T('<script type="module" src="'), ld = T('" async=""><\/script>'), gv = /(<\/|<)(s)(cript)/gi;
function vv(e, t, n, r) {
  return "" + t + (n === "s" ? "\\u0073" : "\\u0053") + r;
}
function wv(e, t, n, r, o) {
  e = e === void 0 ? "" : e, t = t === void 0 ? pv : T('<script nonce="' + he(t) + '">');
  var i = [];
  if (n !== void 0 && i.push(t, D(("" + n).replace(gv, vv)), hv), r !== void 0) for (n = 0; n < r.length; n++) i.push(mv, D(he(r[n])), ld);
  if (o !== void 0) for (r = 0; r < o.length; r++) i.push(yv, D(he(o[r])), ld);
  return { bootstrapChunks: i, startInlineScript: t, placeholderPrefix: T(e + "P:"), segmentPrefix: T(e + "S:"), boundaryPrefix: e + "B:", idPrefix: e, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
}
function mt(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function xv(e) {
  return mt(e === "http://www.w3.org/2000/svg" ? 2 : e === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
}
function kv(e, t, n) {
  switch (t) {
    case "select":
      return mt(1, n.value != null ? n.value : n.defaultValue);
    case "svg":
      return mt(2, null);
    case "math":
      return mt(3, null);
    case "foreignObject":
      return mt(1, null);
    case "table":
      return mt(4, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return mt(5, null);
    case "colgroup":
      return mt(7, null);
    case "tr":
      return mt(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? mt(1, null) : e;
}
var ca = T("<!-- -->");
function sd(e, t, n, r) {
  return t === "" ? r : (r && e.push(ca), e.push(D(he(t))), !0);
}
var ud = /* @__PURE__ */ new Map(), Sv = T(' style="'), ad = T(":"), Cv = T(";");
function Th(e, t, n) {
  if (typeof n != "object") throw Error(I(62));
  t = !0;
  for (var r in n) if (Re.call(n, r)) {
    var o = n[r];
    if (o != null && typeof o != "boolean" && o !== "") {
      if (r.indexOf("--") === 0) {
        var i = D(he(r));
        o = D(he(("" + o).trim()));
      } else {
        i = r;
        var l = ud.get(i);
        l !== void 0 || (l = T(he(i.replace(dv, "-$1").toLowerCase().replace(fv, "-ms-"))), ud.set(i, l)), i = l, o = typeof o == "number" ? o === 0 || Re.call(ii, r) ? D("" + o) : D(o + "px") : D(he(("" + o).trim()));
      }
      t ? (t = !1, e.push(Sv, i, ad, o)) : e.push(Cv, i, ad, o);
    }
  }
  t || e.push(mn);
}
var It = T(" "), Rn = T('="'), mn = T('"'), cd = T('=""');
function Ue(e, t, n, r) {
  switch (n) {
    case "style":
      Th(e, t, r);
      return;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
      return;
  }
  if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") {
    if (t = ve.hasOwnProperty(n) ? ve[n] : null, t !== null) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (!t.acceptsBooleans) return;
      }
      switch (n = D(t.attributeName), t.type) {
        case 3:
          r && e.push(It, n, cd);
          break;
        case 4:
          r === !0 ? e.push(It, n, cd) : r !== !1 && e.push(It, n, Rn, D(he(r)), mn);
          break;
        case 5:
          isNaN(r) || e.push(It, n, Rn, D(he(r)), mn);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(It, n, Rn, D(he(r)), mn);
          break;
        default:
          t.sanitizeURL && (r = "" + r), e.push(It, n, Rn, D(he(r)), mn);
      }
    } else if ($h(n)) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (t = n.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-") return;
      }
      e.push(It, D(n), Rn, D(he(r)), mn);
    }
  }
}
var Dt = T(">"), dd = T("/>");
function li(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(I(60));
    if (typeof t != "object" || !("__html" in t)) throw Error(I(61));
    t = t.__html, t != null && e.push(D("" + t));
  }
}
function _v(e) {
  var t = "";
  return Ch.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
var Ql = T(' selected=""');
function Yl(e, t, n, r) {
  e.push(yt(n));
  var o = n = null, i;
  for (i in t) if (Re.call(t, i)) {
    var l = t[i];
    if (l != null) switch (i) {
      case "children":
        n = l;
        break;
      case "dangerouslySetInnerHTML":
        o = l;
        break;
      default:
        Ue(e, r, i, l);
    }
  }
  return e.push(Dt), li(e, o, n), typeof n == "string" ? (e.push(D(he(n))), null) : n;
}
var Xl = T(`
`), Ev = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, fd = /* @__PURE__ */ new Map();
function yt(e) {
  var t = fd.get(e);
  if (t === void 0) {
    if (!Ev.test(e)) throw Error(I(65, e));
    t = T("<" + e), fd.set(e, t);
  }
  return t;
}
var $v = T("<!DOCTYPE html>");
function Tv(e, t, n, r, o) {
  switch (t) {
    case "select":
      e.push(yt("select"));
      var i = null, l = null;
      for (d in n) if (Re.call(n, d)) {
        var s = n[d];
        if (s != null) switch (d) {
          case "children":
            i = s;
            break;
          case "dangerouslySetInnerHTML":
            l = s;
            break;
          case "defaultValue":
          case "value":
            break;
          default:
            Ue(e, r, d, s);
        }
      }
      return e.push(Dt), li(e, l, i), i;
    case "option":
      l = o.selectedValue, e.push(yt("option"));
      var u = s = null, a = null, d = null;
      for (i in n) if (Re.call(n, i)) {
        var f = n[i];
        if (f != null) switch (i) {
          case "children":
            s = f;
            break;
          case "selected":
            a = f;
            break;
          case "dangerouslySetInnerHTML":
            d = f;
            break;
          case "value":
            u = f;
          default:
            Ue(e, r, i, f);
        }
      }
      if (l != null) if (n = u !== null ? "" + u : _v(s), Zs(l)) {
        for (r = 0; r < l.length; r++)
          if ("" + l[r] === n) {
            e.push(Ql);
            break;
          }
      } else "" + l === n && e.push(Ql);
      else a && e.push(Ql);
      return e.push(Dt), li(e, d, s), s;
    case "textarea":
      e.push(yt("textarea")), d = l = i = null;
      for (s in n) if (Re.call(n, s) && (u = n[s], u != null)) switch (s) {
        case "children":
          d = u;
          break;
        case "value":
          i = u;
          break;
        case "defaultValue":
          l = u;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(I(91));
        default:
          Ue(e, r, s, u);
      }
      if (i === null && l !== null && (i = l), e.push(Dt), d != null) {
        if (i != null) throw Error(I(92));
        if (Zs(d) && 1 < d.length) throw Error(I(93));
        i = "" + d;
      }
      return typeof i == "string" && i[0] === `
` && e.push(Xl), i !== null && e.push(D(he("" + i))), null;
    case "input":
      e.push(yt("input")), u = d = s = i = null;
      for (l in n) if (Re.call(n, l) && (a = n[l], a != null)) switch (l) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(I(399, "input"));
        case "defaultChecked":
          u = a;
          break;
        case "defaultValue":
          s = a;
          break;
        case "checked":
          d = a;
          break;
        case "value":
          i = a;
          break;
        default:
          Ue(e, r, l, a);
      }
      return d !== null ? Ue(
        e,
        r,
        "checked",
        d
      ) : u !== null && Ue(e, r, "checked", u), i !== null ? Ue(e, r, "value", i) : s !== null && Ue(e, r, "value", s), e.push(dd), null;
    case "menuitem":
      e.push(yt("menuitem"));
      for (var m in n) if (Re.call(n, m) && (i = n[m], i != null)) switch (m) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(I(400));
        default:
          Ue(e, r, m, i);
      }
      return e.push(Dt), null;
    case "title":
      e.push(yt("title")), i = null;
      for (f in n) if (Re.call(n, f) && (l = n[f], l != null)) switch (f) {
        case "children":
          i = l;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(I(434));
        default:
          Ue(e, r, f, l);
      }
      return e.push(Dt), i;
    case "listing":
    case "pre":
      e.push(yt(t)), l = i = null;
      for (u in n) if (Re.call(n, u) && (s = n[u], s != null)) switch (u) {
        case "children":
          i = s;
          break;
        case "dangerouslySetInnerHTML":
          l = s;
          break;
        default:
          Ue(e, r, u, s);
      }
      if (e.push(Dt), l != null) {
        if (i != null) throw Error(I(60));
        if (typeof l != "object" || !("__html" in l)) throw Error(I(61));
        n = l.__html, n != null && (typeof n == "string" && 0 < n.length && n[0] === `
` ? e.push(Xl, D(n)) : e.push(D("" + n)));
      }
      return typeof i == "string" && i[0] === `
` && e.push(Xl), i;
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "img":
    case "keygen":
    case "link":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
      e.push(yt(t));
      for (var y in n) if (Re.call(n, y) && (i = n[y], i != null)) switch (y) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(I(399, t));
        default:
          Ue(e, r, y, i);
      }
      return e.push(dd), null;
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return Yl(e, n, t, r);
    case "html":
      return o.insertionMode === 0 && e.push($v), Yl(e, n, t, r);
    default:
      if (t.indexOf("-") === -1 && typeof n.is != "string") return Yl(e, n, t, r);
      e.push(yt(t)), l = i = null;
      for (a in n) if (Re.call(n, a) && (s = n[a], s != null)) switch (a) {
        case "children":
          i = s;
          break;
        case "dangerouslySetInnerHTML":
          l = s;
          break;
        case "style":
          Th(e, r, s);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          break;
        default:
          $h(a) && typeof s != "function" && typeof s != "symbol" && e.push(It, D(a), Rn, D(he(s)), mn);
      }
      return e.push(Dt), li(e, l, i), i;
  }
}
var Nv = T("</"), Pv = T(">"), Mv = T('<template id="'), jv = T('"></template>'), Rv = T("<!--$-->"), zv = T('<!--$?--><template id="'), Fv = T('"></template>'), Lv = T("<!--$!-->"), Iv = T("<!--/$-->"), Dv = T("<template"), Ov = T('"'), bv = T(' data-dgst="');
T(' data-msg="');
T(' data-stck="');
var Av = T("></template>");
function pd(e, t, n) {
  if (M(e, zv), n === null) throw Error(I(395));
  return M(e, n), J(e, Fv);
}
var Uv = T('<div hidden id="'), Wv = T('">'), Vv = T("</div>"), Bv = T('<svg aria-hidden="true" style="display:none" id="'), Hv = T('">'), Qv = T("</svg>"), Yv = T('<math aria-hidden="true" style="display:none" id="'), Xv = T('">'), Kv = T("</math>"), Gv = T('<table hidden id="'), Zv = T('">'), Jv = T("</table>"), qv = T('<table hidden><tbody id="'), ew = T('">'), tw = T("</tbody></table>"), nw = T('<table hidden><tr id="'), rw = T('">'), ow = T("</tr></table>"), iw = T('<table hidden><colgroup id="'), lw = T('">'), sw = T("</colgroup></table>");
function uw(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return M(e, Uv), M(e, t.segmentPrefix), M(e, D(r.toString(16))), J(e, Wv);
    case 2:
      return M(e, Bv), M(e, t.segmentPrefix), M(e, D(r.toString(16))), J(e, Hv);
    case 3:
      return M(e, Yv), M(e, t.segmentPrefix), M(e, D(r.toString(16))), J(e, Xv);
    case 4:
      return M(e, Gv), M(e, t.segmentPrefix), M(e, D(r.toString(16))), J(e, Zv);
    case 5:
      return M(e, qv), M(e, t.segmentPrefix), M(e, D(r.toString(16))), J(e, ew);
    case 6:
      return M(e, nw), M(e, t.segmentPrefix), M(e, D(r.toString(16))), J(e, rw);
    case 7:
      return M(
        e,
        iw
      ), M(e, t.segmentPrefix), M(e, D(r.toString(16))), J(e, lw);
    default:
      throw Error(I(397));
  }
}
function aw(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return J(e, Vv);
    case 2:
      return J(e, Qv);
    case 3:
      return J(e, Kv);
    case 4:
      return J(e, Jv);
    case 5:
      return J(e, tw);
    case 6:
      return J(e, ow);
    case 7:
      return J(e, sw);
    default:
      throw Error(I(397));
  }
}
var cw = T('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), dw = T('$RS("'), fw = T('","'), pw = T('")<\/script>'), hw = T('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), mw = T('$RC("'), yw = T('","'), gw = T('")<\/script>'), vw = T('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), ww = T('$RX("'), xw = T('"'), kw = T(")<\/script>"), Kl = T(","), Sw = /[<\u2028\u2029]/g;
function Gl(e) {
  return JSON.stringify(e).replace(Sw, function(t) {
    switch (t) {
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
    }
  });
}
var Ar = Object.assign, Cw = Symbol.for("react.element"), Nh = Symbol.for("react.portal"), Ph = Symbol.for("react.fragment"), Mh = Symbol.for("react.strict_mode"), jh = Symbol.for("react.profiler"), Rh = Symbol.for("react.provider"), zh = Symbol.for("react.context"), Fh = Symbol.for("react.forward_ref"), Lh = Symbol.for("react.suspense"), Ih = Symbol.for("react.suspense_list"), Dh = Symbol.for("react.memo"), da = Symbol.for("react.lazy"), _w = Symbol.for("react.scope"), Ew = Symbol.for("react.debug_trace_mode"), $w = Symbol.for("react.legacy_hidden"), Tw = Symbol.for("react.default_value"), hd = Symbol.iterator;
function Js(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ph:
      return "Fragment";
    case Nh:
      return "Portal";
    case jh:
      return "Profiler";
    case Mh:
      return "StrictMode";
    case Lh:
      return "Suspense";
    case Ih:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case zh:
      return (e.displayName || "Context") + ".Consumer";
    case Rh:
      return (e._context.displayName || "Context") + ".Provider";
    case Fh:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Dh:
      return t = e.displayName || null, t !== null ? t : Js(e.type) || "Memo";
    case da:
      t = e._payload, e = e._init;
      try {
        return Js(e(t));
      } catch {
      }
  }
  return null;
}
var Oh = {};
function md(e, t) {
  if (e = e.contextTypes, !e) return Oh;
  var n = {}, r;
  for (r in e) n[r] = t[r];
  return n;
}
var kn = null;
function al(e, t) {
  if (e !== t) {
    e.context._currentValue = e.parentValue, e = e.parent;
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(I(401));
    } else {
      if (n === null) throw Error(I(401));
      al(e, n);
    }
    t.context._currentValue = t.value;
  }
}
function bh(e) {
  e.context._currentValue = e.parentValue, e = e.parent, e !== null && bh(e);
}
function Ah(e) {
  var t = e.parent;
  t !== null && Ah(t), e.context._currentValue = e.value;
}
function Uh(e, t) {
  if (e.context._currentValue = e.parentValue, e = e.parent, e === null) throw Error(I(402));
  e.depth === t.depth ? al(e, t) : Uh(e, t);
}
function Wh(e, t) {
  var n = t.parent;
  if (n === null) throw Error(I(402));
  e.depth === n.depth ? al(e, n) : Wh(e, n), t.context._currentValue = t.value;
}
function bi(e) {
  var t = kn;
  t !== e && (t === null ? Ah(e) : e === null ? bh(t) : t.depth === e.depth ? al(t, e) : t.depth > e.depth ? Uh(t, e) : Wh(t, e), kn = e);
}
var yd = { isMounted: function() {
  return !1;
}, enqueueSetState: function(e, t) {
  e = e._reactInternals, e.queue !== null && e.queue.push(t);
}, enqueueReplaceState: function(e, t) {
  e = e._reactInternals, e.replace = !0, e.queue = [t];
}, enqueueForceUpdate: function() {
} };
function gd(e, t, n, r) {
  var o = e.state !== void 0 ? e.state : null;
  e.updater = yd, e.props = n, e.state = o;
  var i = { queue: [], replace: !1 };
  e._reactInternals = i;
  var l = t.contextType;
  if (e.context = typeof l == "object" && l !== null ? l._currentValue : r, l = t.getDerivedStateFromProps, typeof l == "function" && (l = l(n, o), o = l == null ? o : Ar({}, o, l), e.state = o), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (t = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && yd.enqueueReplaceState(e, e.state, null), i.queue !== null && 0 < i.queue.length) if (t = i.queue, l = i.replace, i.queue = null, i.replace = !1, l && t.length === 1) e.state = t[0];
  else {
    for (i = l ? t[0] : e.state, o = !0, l = l ? 1 : 0; l < t.length; l++) {
      var s = t[l];
      s = typeof s == "function" ? s.call(e, i, n, r) : s, s != null && (o ? (o = !1, i = Ar({}, i, s)) : Ar(i, s));
    }
    e.state = i;
  }
  else i.queue = null;
}
var Nw = { id: 1, overflow: "" };
function qs(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var o = 32 - si(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - si(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    return i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, { id: 1 << 32 - si(t) + o | n << o | r, overflow: i + e };
  }
  return { id: 1 << i | n << o | r, overflow: e };
}
var si = Math.clz32 ? Math.clz32 : jw, Pw = Math.log, Mw = Math.LN2;
function jw(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Pw(e) / Mw | 0) | 0;
}
function Rw(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var zw = typeof Object.is == "function" ? Object.is : Rw, zt = null, fa = null, ui = null, Y = null, Nr = !1, Ai = !1, lo = 0, Ht = null, cl = 0;
function yn() {
  if (zt === null) throw Error(I(321));
  return zt;
}
function vd() {
  if (0 < cl) throw Error(I(312));
  return { memoizedState: null, queue: null, next: null };
}
function pa() {
  return Y === null ? ui === null ? (Nr = !1, ui = Y = vd()) : (Nr = !0, Y = ui) : Y.next === null ? (Nr = !1, Y = Y.next = vd()) : (Nr = !0, Y = Y.next), Y;
}
function ha() {
  fa = zt = null, Ai = !1, ui = null, cl = 0, Y = Ht = null;
}
function Vh(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function wd(e, t, n) {
  if (zt = yn(), Y = pa(), Nr) {
    var r = Y.queue;
    if (t = r.dispatch, Ht !== null && (n = Ht.get(r), n !== void 0)) {
      Ht.delete(r), r = Y.memoizedState;
      do
        r = e(r, n.action), n = n.next;
      while (n !== null);
      return Y.memoizedState = r, [r, t];
    }
    return [Y.memoizedState, t];
  }
  return e = e === Vh ? typeof t == "function" ? t() : t : n !== void 0 ? n(t) : t, Y.memoizedState = e, e = Y.queue = { last: null, dispatch: null }, e = e.dispatch = Fw.bind(null, zt, e), [Y.memoizedState, e];
}
function xd(e, t) {
  if (zt = yn(), Y = pa(), t = t === void 0 ? null : t, Y !== null) {
    var n = Y.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var o = 0; o < r.length && o < t.length; o++) if (!zw(t[o], r[o])) {
          r = !1;
          break e;
        }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return e = e(), Y.memoizedState = [e, t], e;
}
function Fw(e, t, n) {
  if (25 <= cl) throw Error(I(301));
  if (e === zt) if (Ai = !0, e = { action: n, next: null }, Ht === null && (Ht = /* @__PURE__ */ new Map()), n = Ht.get(t), n === void 0) Ht.set(t, e);
  else {
    for (t = n; t.next !== null; ) t = t.next;
    t.next = e;
  }
}
function Lw() {
  throw Error(I(394));
}
function bo() {
}
var kd = { readContext: function(e) {
  return e._currentValue;
}, useContext: function(e) {
  return yn(), e._currentValue;
}, useMemo: xd, useReducer: wd, useRef: function(e) {
  zt = yn(), Y = pa();
  var t = Y.memoizedState;
  return t === null ? (e = { current: e }, Y.memoizedState = e) : t;
}, useState: function(e) {
  return wd(Vh, e);
}, useInsertionEffect: bo, useLayoutEffect: function() {
}, useCallback: function(e, t) {
  return xd(function() {
    return e;
  }, t);
}, useImperativeHandle: bo, useEffect: bo, useDebugValue: bo, useDeferredValue: function(e) {
  return yn(), e;
}, useTransition: function() {
  return yn(), [!1, Lw];
}, useId: function() {
  var e = fa.treeContext, t = e.overflow;
  e = e.id, e = (e & ~(1 << 32 - si(e) - 1)).toString(32) + t;
  var n = ai;
  if (n === null) throw Error(I(404));
  return t = lo++, e = ":" + n.idPrefix + "R" + e, 0 < t && (e += "H" + t.toString(32)), e + ":";
}, useMutableSource: function(e, t) {
  return yn(), t(e._source);
}, useSyncExternalStore: function(e, t, n) {
  if (n === void 0) throw Error(I(407));
  return n();
} }, ai = null, Zl = Ch.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
function Iw(e) {
  return console.error(e), null;
}
function Pr() {
}
function Dw(e, t, n, r, o, i, l, s, u) {
  var a = [], d = /* @__PURE__ */ new Set();
  return t = { destination: null, responseState: t, progressiveChunkSize: r === void 0 ? 12800 : r, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: d, pingedTasks: a, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: o === void 0 ? Iw : o, onAllReady: i === void 0 ? Pr : i, onShellReady: l === void 0 ? Pr : l, onShellError: s === void 0 ? Pr : s, onFatalError: u === void 0 ? Pr : u }, n = Ui(t, 0, null, n, !1, !1), n.parentFlushed = !0, e = ma(t, e, null, n, d, Oh, null, Nw), a.push(e), t;
}
function ma(e, t, n, r, o, i, l, s) {
  e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
  var u = { node: t, ping: function() {
    var a = e.pingedTasks;
    a.push(u), a.length === 1 && Qh(e);
  }, blockedBoundary: n, blockedSegment: r, abortSet: o, legacyContext: i, context: l, treeContext: s };
  return o.add(u), u;
}
function Ui(e, t, n, r, o, i) {
  return { status: 0, id: -1, index: t, parentFlushed: !1, chunks: [], children: [], formatContext: r, boundary: n, lastPushedText: o, textEmbedded: i };
}
function so(e, t) {
  if (e = e.onError(t), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
  return e;
}
function Wi(e, t) {
  var n = e.onShellError;
  n(t), n = e.onFatalError, n(t), e.destination !== null ? (e.status = 2, Eh(e.destination, t)) : (e.status = 1, e.fatalError = t);
}
function Sd(e, t, n, r, o) {
  for (zt = {}, fa = t, lo = 0, e = n(r, o); Ai; ) Ai = !1, lo = 0, cl += 1, Y = null, e = n(r, o);
  return ha(), e;
}
function Cd(e, t, n, r) {
  var o = n.render(), i = r.childContextTypes;
  if (i != null) {
    var l = t.legacyContext;
    if (typeof n.getChildContext != "function") r = l;
    else {
      n = n.getChildContext();
      for (var s in n) if (!(s in i)) throw Error(I(108, Js(r) || "Unknown", s));
      r = Ar({}, l, n);
    }
    t.legacyContext = r, Qe(e, t, o), t.legacyContext = l;
  } else Qe(e, t, o);
}
function _d(e, t) {
  if (e && e.defaultProps) {
    t = Ar({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function eu(e, t, n, r, o) {
  if (typeof n == "function") if (n.prototype && n.prototype.isReactComponent) {
    o = md(n, t.legacyContext);
    var i = n.contextType;
    i = new n(r, typeof i == "object" && i !== null ? i._currentValue : o), gd(i, n, r, o), Cd(e, t, i, n);
  } else {
    i = md(n, t.legacyContext), o = Sd(e, t, n, r, i);
    var l = lo !== 0;
    if (typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0) gd(o, n, r, i), Cd(e, t, o, n);
    else if (l) {
      r = t.treeContext, t.treeContext = qs(r, 1, 0);
      try {
        Qe(e, t, o);
      } finally {
        t.treeContext = r;
      }
    } else Qe(e, t, o);
  }
  else if (typeof n == "string") {
    switch (o = t.blockedSegment, i = Tv(o.chunks, n, r, e.responseState, o.formatContext), o.lastPushedText = !1, l = o.formatContext, o.formatContext = kv(l, n, r), tu(e, t, i), o.formatContext = l, n) {
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "input":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        break;
      default:
        o.chunks.push(Nv, D(n), Pv);
    }
    o.lastPushedText = !1;
  } else {
    switch (n) {
      case $w:
      case Ew:
      case Mh:
      case jh:
      case Ph:
        Qe(e, t, r.children);
        return;
      case Ih:
        Qe(e, t, r.children);
        return;
      case _w:
        throw Error(I(343));
      case Lh:
        e: {
          n = t.blockedBoundary, o = t.blockedSegment, i = r.fallback, r = r.children, l = /* @__PURE__ */ new Set();
          var s = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: l, errorDigest: null }, u = Ui(e, o.chunks.length, s, o.formatContext, !1, !1);
          o.children.push(u), o.lastPushedText = !1;
          var a = Ui(e, 0, null, o.formatContext, !1, !1);
          a.parentFlushed = !0, t.blockedBoundary = s, t.blockedSegment = a;
          try {
            if (tu(
              e,
              t,
              r
            ), a.lastPushedText && a.textEmbedded && a.chunks.push(ca), a.status = 1, Vi(s, a), s.pendingTasks === 0) break e;
          } catch (d) {
            a.status = 4, s.forceClientRender = !0, s.errorDigest = so(e, d);
          } finally {
            t.blockedBoundary = n, t.blockedSegment = o;
          }
          t = ma(e, i, n, u, l, t.legacyContext, t.context, t.treeContext), e.pingedTasks.push(t);
        }
        return;
    }
    if (typeof n == "object" && n !== null) switch (n.$$typeof) {
      case Fh:
        if (r = Sd(e, t, n.render, r, o), lo !== 0) {
          n = t.treeContext, t.treeContext = qs(n, 1, 0);
          try {
            Qe(e, t, r);
          } finally {
            t.treeContext = n;
          }
        } else Qe(e, t, r);
        return;
      case Dh:
        n = n.type, r = _d(n, r), eu(e, t, n, r, o);
        return;
      case Rh:
        if (o = r.children, n = n._context, r = r.value, i = n._currentValue, n._currentValue = r, l = kn, kn = r = { parent: l, depth: l === null ? 0 : l.depth + 1, context: n, parentValue: i, value: r }, t.context = r, Qe(e, t, o), e = kn, e === null) throw Error(I(403));
        r = e.parentValue, e.context._currentValue = r === Tw ? e.context._defaultValue : r, e = kn = e.parent, t.context = e;
        return;
      case zh:
        r = r.children, r = r(n._currentValue), Qe(e, t, r);
        return;
      case da:
        o = n._init, n = o(n._payload), r = _d(n, r), eu(e, t, n, r, void 0);
        return;
    }
    throw Error(I(
      130,
      n == null ? n : typeof n,
      ""
    ));
  }
}
function Qe(e, t, n) {
  if (t.node = n, typeof n == "object" && n !== null) {
    switch (n.$$typeof) {
      case Cw:
        eu(e, t, n.type, n.props, n.ref);
        return;
      case Nh:
        throw Error(I(257));
      case da:
        var r = n._init;
        n = r(n._payload), Qe(e, t, n);
        return;
    }
    if (Zs(n)) {
      Ed(e, t, n);
      return;
    }
    if (n === null || typeof n != "object" ? r = null : (r = hd && n[hd] || n["@@iterator"], r = typeof r == "function" ? r : null), r && (r = r.call(n))) {
      if (n = r.next(), !n.done) {
        var o = [];
        do
          o.push(n.value), n = r.next();
        while (!n.done);
        Ed(e, t, o);
      }
      return;
    }
    throw e = Object.prototype.toString.call(n), Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  typeof n == "string" ? (r = t.blockedSegment, r.lastPushedText = sd(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)) : typeof n == "number" && (r = t.blockedSegment, r.lastPushedText = sd(t.blockedSegment.chunks, "" + n, e.responseState, r.lastPushedText));
}
function Ed(e, t, n) {
  for (var r = n.length, o = 0; o < r; o++) {
    var i = t.treeContext;
    t.treeContext = qs(i, r, o);
    try {
      tu(e, t, n[o]);
    } finally {
      t.treeContext = i;
    }
  }
}
function tu(e, t, n) {
  var r = t.blockedSegment.formatContext, o = t.legacyContext, i = t.context;
  try {
    return Qe(e, t, n);
  } catch (u) {
    if (ha(), typeof u == "object" && u !== null && typeof u.then == "function") {
      n = u;
      var l = t.blockedSegment, s = Ui(e, l.chunks.length, null, l.formatContext, l.lastPushedText, !0);
      l.children.push(s), l.lastPushedText = !1, e = ma(e, t.node, t.blockedBoundary, s, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, n.then(e, e), t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = i, bi(i);
    } else throw t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = i, bi(i), u;
  }
}
function Ow(e) {
  var t = e.blockedBoundary;
  e = e.blockedSegment, e.status = 3, Hh(this, t, e);
}
function Bh(e, t, n) {
  var r = e.blockedBoundary;
  e.blockedSegment.status = 3, r === null ? (t.allPendingTasks--, t.status !== 2 && (t.status = 2, t.destination !== null && t.destination.close())) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, e = n === void 0 ? Error(I(432)) : n, r.errorDigest = t.onError(e), r.parentFlushed && t.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach(function(o) {
    return Bh(o, t, n);
  }), r.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0 && (r = t.onAllReady, r()));
}
function Vi(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    n.id = t.id, n.parentFlushed = !0, n.status === 1 && Vi(e, n);
  } else e.completedSegments.push(t);
}
function Hh(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(I(389));
      e.completedRootSegment = n;
    }
    e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Pr, t = e.onShellReady, t());
  } else t.pendingTasks--, t.forceClientRender || (t.pendingTasks === 0 ? (n.parentFlushed && n.status === 1 && Vi(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(Ow, e), t.fallbackAbortableTasks.clear()) : n.parentFlushed && n.status === 1 && (Vi(t, n), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
}
function Qh(e) {
  if (e.status !== 2) {
    var t = kn, n = Zl.current;
    Zl.current = kd;
    var r = ai;
    ai = e.responseState;
    try {
      var o = e.pingedTasks, i;
      for (i = 0; i < o.length; i++) {
        var l = o[i], s = e, u = l.blockedSegment;
        if (u.status === 0) {
          bi(l.context);
          try {
            Qe(s, l, l.node), u.lastPushedText && u.textEmbedded && u.chunks.push(ca), l.abortSet.delete(l), u.status = 1, Hh(s, l.blockedBoundary, u);
          } catch (g) {
            if (ha(), typeof g == "object" && g !== null && typeof g.then == "function") {
              var a = l.ping;
              g.then(a, a);
            } else {
              l.abortSet.delete(l), u.status = 4;
              var d = l.blockedBoundary, f = g, m = so(s, f);
              if (d === null ? Wi(s, f) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = !0, d.errorDigest = m, d.parentFlushed && s.clientRenderedBoundaries.push(d))), s.allPendingTasks--, s.allPendingTasks === 0) {
                var y = s.onAllReady;
                y();
              }
            }
          } finally {
          }
        }
      }
      o.splice(0, i), e.destination !== null && ya(e, e.destination);
    } catch (g) {
      so(e, g), Wi(e, g);
    } finally {
      ai = r, Zl.current = n, n === kd && bi(t);
    }
  }
}
function Ao(e, t, n) {
  switch (n.parentFlushed = !0, n.status) {
    case 0:
      var r = n.id = e.nextSegmentId++;
      return n.lastPushedText = !1, n.textEmbedded = !1, e = e.responseState, M(t, Mv), M(t, e.placeholderPrefix), e = D(r.toString(16)), M(t, e), J(t, jv);
    case 1:
      n.status = 2;
      var o = !0;
      r = n.chunks;
      var i = 0;
      n = n.children;
      for (var l = 0; l < n.length; l++) {
        for (o = n[l]; i < o.index; i++) M(t, r[i]);
        o = dl(e, t, o);
      }
      for (; i < r.length - 1; i++) M(t, r[i]);
      return i < r.length && (o = J(t, r[i])), o;
    default:
      throw Error(I(390));
  }
}
function dl(e, t, n) {
  var r = n.boundary;
  if (r === null) return Ao(e, t, n);
  if (r.parentFlushed = !0, r.forceClientRender) r = r.errorDigest, J(t, Lv), M(t, Dv), r && (M(t, bv), M(t, D(he(r))), M(t, Ov)), J(t, Av), Ao(e, t, n);
  else if (0 < r.pendingTasks) {
    r.rootSegmentID = e.nextSegmentId++, 0 < r.completedSegments.length && e.partialBoundaries.push(r);
    var o = e.responseState, i = o.nextSuspenseID++;
    o = T(o.boundaryPrefix + i.toString(16)), r = r.id = o, pd(t, e.responseState, r), Ao(e, t, n);
  } else if (r.byteSize > e.progressiveChunkSize) r.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(r), pd(t, e.responseState, r.id), Ao(e, t, n);
  else {
    if (J(t, Rv), n = r.completedSegments, n.length !== 1) throw Error(I(391));
    dl(e, t, n[0]);
  }
  return J(t, Iv);
}
function $d(e, t, n) {
  return uw(t, e.responseState, n.formatContext, n.id), dl(e, t, n), aw(t, n.formatContext);
}
function Td(e, t, n) {
  for (var r = n.completedSegments, o = 0; o < r.length; o++) Yh(e, t, n, r[o]);
  if (r.length = 0, e = e.responseState, r = n.id, n = n.rootSegmentID, M(t, e.startInlineScript), e.sentCompleteBoundaryFunction ? M(t, mw) : (e.sentCompleteBoundaryFunction = !0, M(t, hw)), r === null) throw Error(I(395));
  return n = D(n.toString(16)), M(t, r), M(t, yw), M(t, e.segmentPrefix), M(t, n), J(t, gw);
}
function Yh(e, t, n, r) {
  if (r.status === 2) return !0;
  var o = r.id;
  if (o === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(I(392));
    return $d(e, t, r);
  }
  return $d(e, t, r), e = e.responseState, M(t, e.startInlineScript), e.sentCompleteSegmentFunction ? M(t, dw) : (e.sentCompleteSegmentFunction = !0, M(t, cw)), M(t, e.segmentPrefix), o = D(o.toString(16)), M(t, o), M(t, fw), M(t, e.placeholderPrefix), M(t, o), J(t, pw);
}
function ya(e, t) {
  Be = new Uint8Array(512), He = 0;
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      dl(e, t, n), e.completedRootSegment = null;
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) M(t, r[n]);
      n < r.length && J(t, r[n]);
    }
    var o = e.clientRenderedBoundaries, i;
    for (i = 0; i < o.length; i++) {
      var l = o[i];
      r = t;
      var s = e.responseState, u = l.id, a = l.errorDigest, d = l.errorMessage, f = l.errorComponentStack;
      if (M(r, s.startInlineScript), s.sentClientRenderFunction ? M(r, ww) : (s.sentClientRenderFunction = !0, M(
        r,
        vw
      )), u === null) throw Error(I(395));
      M(r, u), M(r, xw), (a || d || f) && (M(r, Kl), M(r, D(Gl(a || "")))), (d || f) && (M(r, Kl), M(r, D(Gl(d || "")))), f && (M(r, Kl), M(r, D(Gl(f)))), J(r, kw);
    }
    o.splice(0, i);
    var m = e.completedBoundaries;
    for (i = 0; i < m.length; i++) Td(e, t, m[i]);
    m.splice(0, i), rd(t), Be = new Uint8Array(512), He = 0;
    var y = e.partialBoundaries;
    for (i = 0; i < y.length; i++) {
      var g = y[i];
      e: {
        o = e, l = t;
        var x = g.completedSegments;
        for (s = 0; s < x.length; s++) if (!Yh(
          o,
          l,
          g,
          x[s]
        )) {
          s++, x.splice(0, s);
          var k = !1;
          break e;
        }
        x.splice(0, s), k = !0;
      }
      if (!k) {
        e.destination = null, i++, y.splice(0, i);
        return;
      }
    }
    y.splice(0, i);
    var p = e.completedBoundaries;
    for (i = 0; i < p.length; i++) Td(e, t, p[i]);
    p.splice(0, i);
  } finally {
    rd(t), e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && t.close();
  }
}
function Nd(e, t) {
  try {
    var n = e.abortableTasks;
    n.forEach(function(r) {
      return Bh(r, e, t);
    }), n.clear(), e.destination !== null && ya(e, e.destination);
  } catch (r) {
    so(e, r), Wi(e, r);
  }
}
sa.renderToReadableStream = function(e, t) {
  return new Promise(function(n, r) {
    var o, i, l = new Promise(function(d, f) {
      i = d, o = f;
    }), s = Dw(e, wv(t ? t.identifierPrefix : void 0, t ? t.nonce : void 0, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0), xv(t ? t.namespaceURI : void 0), t ? t.progressiveChunkSize : void 0, t ? t.onError : void 0, i, function() {
      var d = new ReadableStream({ type: "bytes", pull: function(f) {
        if (s.status === 1) s.status = 2, Eh(f, s.fatalError);
        else if (s.status !== 2 && s.destination === null) {
          s.destination = f;
          try {
            ya(s, f);
          } catch (m) {
            so(s, m), Wi(s, m);
          }
        }
      }, cancel: function() {
        Nd(s);
      } }, { highWaterMark: 0 });
      d.allReady = l, n(d);
    }, function(d) {
      l.catch(function() {
      }), r(d);
    }, o);
    if (t && t.signal) {
      var u = t.signal, a = function() {
        Nd(s, u.reason), u.removeEventListener("abort", a);
      };
      u.addEventListener("abort", a);
    }
    Qh(s);
  });
};
sa.version = "18.3.1";
var ur, Xh;
ur = sr, Xh = sa;
ur.version;
var bw = ur.renderToString;
ur.renderToStaticMarkup;
ur.renderToNodeStream;
ur.renderToStaticNodeStream;
Xh.renderToReadableStream;
var Kh = { exports: {} }, Aw = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Uw = Aw, Ww = Uw;
function Gh() {
}
function Zh() {
}
Zh.resetWarningCache = Gh;
var Vw = function() {
  function e(r, o, i, l, s, u) {
    if (u !== Ww) {
      var a = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw a.name = "Invariant Violation", a;
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Zh,
    resetWarningCache: Gh
  };
  return n.PropTypes = n, n;
};
Kh.exports = Vw();
var Bw = Kh.exports;
const at = /* @__PURE__ */ Md(Bw);
var Hw = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Jh(e, t) {
  return e(t = { exports: {} }, t.exports), t.exports;
}
var Qw = Jh(function(e) {
  (function(t) {
    var n = function(k, p, c) {
      if (!u(p) || d(p) || f(p) || m(p) || s(p)) return p;
      var h, w = 0, C = 0;
      if (a(p)) for (h = [], C = p.length; w < C; w++) h.push(n(k, p[w], c));
      else for (var E in h = {}, p) Object.prototype.hasOwnProperty.call(p, E) && (h[k(E, c)] = n(k, p[E], c));
      return h;
    }, r = function(k) {
      return y(k) ? k : (k = k.replace(/[\-_\s]+(.)?/g, function(p, c) {
        return c ? c.toUpperCase() : "";
      })).substr(0, 1).toLowerCase() + k.substr(1);
    }, o = function(k) {
      var p = r(k);
      return p.substr(0, 1).toUpperCase() + p.substr(1);
    }, i = function(k, p) {
      return function(c, h) {
        var w = (h = h || {}).separator || "_", C = h.split || /(?=[A-Z])/;
        return c.split(C).join(w);
      }(k, p).toLowerCase();
    }, l = Object.prototype.toString, s = function(k) {
      return typeof k == "function";
    }, u = function(k) {
      return k === Object(k);
    }, a = function(k) {
      return l.call(k) == "[object Array]";
    }, d = function(k) {
      return l.call(k) == "[object Date]";
    }, f = function(k) {
      return l.call(k) == "[object RegExp]";
    }, m = function(k) {
      return l.call(k) == "[object Boolean]";
    }, y = function(k) {
      return (k -= 0) == k;
    }, g = function(k, p) {
      var c = p && "process" in p ? p.process : p;
      return typeof c != "function" ? k : function(h, w) {
        return c(h, k, w);
      };
    }, x = { camelize: r, decamelize: i, pascalize: o, depascalize: i, camelizeKeys: function(k, p) {
      return n(g(r, p), k);
    }, decamelizeKeys: function(k, p) {
      return n(g(i, p), k, p);
    }, pascalizeKeys: function(k, p) {
      return n(g(o, p), k);
    }, depascalizeKeys: function() {
      return this.decamelizeKeys.apply(this, arguments);
    } };
    e.exports ? e.exports = x : t.humps = x;
  })(Hw);
}).decamelize, Yw = function(e) {
  if (Array.isArray(e)) return e;
}, Xw = function(e, t) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) {
    var n = [], r = !0, o = !1, i = void 0;
    try {
      for (var l, s = e[Symbol.iterator](); !(r = (l = s.next()).done) && (n.push(l.value), !t || n.length !== t); r = !0) ;
    } catch (u) {
      o = !0, i = u;
    } finally {
      try {
        r || s.return == null || s.return();
      } finally {
        if (o) throw i;
      }
    }
    return n;
  }
}, Pd = function(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}, Kw = function(e, t) {
  if (e) {
    if (typeof e == "string") return Pd(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Pd(e, t) : void 0;
  }
}, Gw = function() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}, Zw = function(e, t) {
  return Yw(e) || Xw(e, t) || Kw(e, t) || Gw();
}, qh = Jh(function(e) {
  function t() {
    return e.exports = t = Object.assign || function(n) {
      for (var r = 1; r < arguments.length; r++) {
        var o = arguments[r];
        for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
      }
      return n;
    }, t.apply(this, arguments);
  }
  e.exports = t;
}), Jw = function(e, t) {
  if (e == null) return {};
  var n, r, o = {}, i = Object.keys(e);
  for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
  return o;
}, em = function(e, t) {
  if (e == null) return {};
  var n, r, o = Jw(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}, qw = j.createContext(null);
function tm(e) {
  var t = e.children, n = t === void 0 ? "" : t, r = em(e, ["children"]);
  return typeof n != "string" && (n = bw(n)), Ye.createElement("template", qh({}, r, { dangerouslySetInnerHTML: { __html: n } }));
}
function nm(e) {
  var t = e.root, n = e.children;
  return Wp.createPortal(n === void 0 ? null : n, t);
}
function ex(e) {
  var t = j.forwardRef(function(n, r) {
    var o, i, l = n.mode, s = l === void 0 ? "open" : l, u = n.delegatesFocus, a = u !== void 0 && u, d = n.styleSheets, f = d === void 0 ? [] : d, m = n.ssr, y = m !== void 0 && m, g = n.children, x = em(n, ["mode", "delegatesFocus", "styleSheets", "ssr", "children"]), k = (i = j.useRef((o = r) && o.current), j.useEffect(function() {
      o && (o.current = i.current);
    }, [o]), i), p = j.useState(null), c = Zw(p, 2), h = c[0], w = c[1], C = "node_".concat(s).concat(a);
    return j.useLayoutEffect(function() {
      if (k.current) try {
        if (typeof r == "function" && r(k.current), y) {
          var E = k.current.shadowRoot;
          return void w(E);
        }
        var $ = k.current.attachShadow({ mode: s, delegatesFocus: a });
        f.length > 0 && ($.adoptedStyleSheets = f), w($);
      } catch (P) {
        (function(b) {
          var z = b.error, G = b.styleSheets, H = b.root;
          switch (z.name) {
            case "NotSupportedError":
              G.length > 0 && (H.adoptedStyleSheets = G);
              break;
            default:
              throw z;
          }
        })({ error: P, styleSheets: f, root: h });
      }
    }, [r, k, f]), Ye.createElement(Ye.Fragment, null, Ye.createElement(e.tag, qh({ key: C, ref: k }, x), (h || y) && Ye.createElement(qw.Provider, { value: h }, y ? Ye.createElement(tm, { shadowroot: s, shadowrootmode: s }, e.render({ root: h, ssr: y, children: g })) : Ye.createElement(nm, { root: h }, e.render({ root: h, ssr: y, children: g })))));
  });
  return t.propTypes = { mode: at.oneOf(["open", "closed"]), delegatesFocus: at.bool, styleSheets: at.arrayOf(at.instanceOf(globalThis.CSSStyleSheet)), ssr: at.bool, children: at.node }, t;
}
tm.propTypes = { children: at.oneOfType([at.string, at.node]) }, nm.propTypes = { root: at.object.isRequired, children: at.node };
var Jl = /* @__PURE__ */ new Map();
function tx() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "core", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(r) {
    return r.children;
  };
  return new Proxy(e, { get: function(r, o) {
    var i = Qw(o, { separator: "-" }), l = "".concat(t, "-").concat(i);
    return Jl.has(l) || Jl.set(l, ex({ tag: i, render: n })), Jl.get(l);
  } });
}
var nx = tx();
const rx = '@keyframes slide-up{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}input{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}input::-moz-placeholder{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}input::placeholder{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}input:disabled{cursor:not-allowed;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.\\!container{width:100%!important}.container{width:100%}@media (min-width: 640px){.\\!container{max-width:640px!important}.container{max-width:640px}}@media (min-width: 768px){.\\!container{max-width:768px!important}.container{max-width:768px}}@media (min-width: 1024px){.\\!container{max-width:1024px!important}.container{max-width:1024px}}@media (min-width: 1280px){.\\!container{max-width:1280px!important}.container{max-width:1280px}}@media (min-width: 1536px){.\\!container{max-width:1536px!important}.container{max-width:1536px}}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-4{top:1rem;right:1rem;bottom:1rem;left:1rem}.bottom-24{bottom:6rem}.bottom-6{bottom:1.5rem}.bottom-full{bottom:100%}.left-0{left:0}.right-0{right:0}.right-6{right:1.5rem}.top-full{top:100%}.z-50{z-index:50}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.ml-1{margin-left:.25rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.hidden{display:none}.size-2{width:.5rem;height:.5rem}.h-12{height:3rem}.h-2{height:.5rem}.h-3{height:.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-\\[75vh\\]{height:75vh}.h-auto{height:auto}.h-full{height:100%}.max-h-48{max-height:12rem}.max-h-\\[800px\\]{max-height:800px}.max-h-none{max-height:none}.min-h-0{min-height:0px}.min-h-\\[400px\\]{min-height:400px}.min-h-screen{min-height:100vh}.w-12{width:3rem}.w-2{width:.5rem}.w-3{width:.75rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-64{width:16rem}.w-8{width:2rem}.w-\\[400px\\]{width:400px}.w-auto{width:auto}.w-full{width:100%}.min-w-0{min-width:0px}.min-w-48{min-width:12rem}.min-w-\\[32px\\]{min-width:32px}.max-w-3xl{max-width:48rem}.max-w-\\[200px\\]{max-width:200px}.max-w-\\[calc\\(100vw-3rem\\)\\]{max-width:calc(100vw - 3rem)}.max-w-none{max-width:none}.max-w-xs{max-width:20rem}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}@keyframes bounce{0%,to{transform:translateY(-25%);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,.2,1)}}.animate-bounce{animation:bounce 1s infinite}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.animate-slide-up{animation:slide-up .3s ease-out}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-pre{white-space:pre}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-xl{border-radius:.75rem}.rounded-t-lg{border-top-left-radius:.5rem;border-top-right-radius:.5rem}.rounded-bl-sm{border-bottom-left-radius:.125rem}.rounded-br-sm{border-bottom-right-radius:.125rem}.border{border-width:1px}.border-t{border-top-width:1px}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.border-red-200{--tw-border-opacity: 1;border-color:rgb(254 202 202 / var(--tw-border-opacity, 1))}.border-yellow-200{--tw-border-opacity: 1;border-color:rgb(254 240 138 / var(--tw-border-opacity, 1))}.bg-blue-500{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity, 1))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-900{--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity, 1))}.bg-green-100{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity, 1))}.bg-green-400{--tw-bg-opacity: 1;background-color:rgb(74 222 128 / var(--tw-bg-opacity, 1))}.bg-red-100{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity, 1))}.bg-red-400{--tw-bg-opacity: 1;background-color:rgb(248 113 113 / var(--tw-bg-opacity, 1))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-yellow-100{--tw-bg-opacity: 1;background-color:rgb(254 249 195 / var(--tw-bg-opacity, 1))}.bg-yellow-50{--tw-bg-opacity: 1;background-color:rgb(254 252 232 / var(--tw-bg-opacity, 1))}.fill-current{fill:currentColor}.stroke-none{stroke:none}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.pb-1{padding-bottom:.25rem}.pb-2{padding-bottom:.5rem}.text-left{text-align:left}.text-center{text-align:center}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.text-blue-500{--tw-text-opacity: 1;color:rgb(59 130 246 / var(--tw-text-opacity, 1))}.text-blue-600{--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-green-300{--tw-text-opacity: 1;color:rgb(134 239 172 / var(--tw-text-opacity, 1))}.text-green-600{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity, 1))}.text-indigo-500{--tw-text-opacity: 1;color:rgb(99 102 241 / var(--tw-text-opacity, 1))}.text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity, 1))}.text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.text-red-800{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-yellow-600{--tw-text-opacity: 1;color:rgb(202 138 4 / var(--tw-text-opacity, 1))}.text-yellow-800{--tw-text-opacity: 1;color:rgb(133 77 14 / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.opacity-50{opacity:.5}.opacity-90{opacity:.9}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-2xl{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.\\[animation-delay\\:-0\\.1s\\]{animation-delay:-.1s}.\\[animation-delay\\:-0\\.2s\\]{animation-delay:-.2s}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-50:hover{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.hover\\:bg-white\\/10:hover{background-color:#ffffff1a}.hover\\:text-blue-700:hover{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity, 1))}.hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.hover\\:text-gray-700:hover{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.hover\\:text-gray-800:hover{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.hover\\:text-red-600:hover{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.hover\\:text-red-800:hover{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity, 1))}.hover\\:text-red-900:hover{--tw-text-opacity: 1;color:rgb(127 29 29 / var(--tw-text-opacity, 1))}.hover\\:text-yellow-900:hover{--tw-text-opacity: 1;color:rgb(113 63 18 / var(--tw-text-opacity, 1))}.hover\\:opacity-90:hover{opacity:.9}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-opacity-50:focus{--tw-ring-opacity: .5}.disabled\\:opacity-50:disabled{opacity:.5}';
function ox(e) {
  return e.replace(/:root\b/g, ":host").replaceAll("((-webkit-hyphens:none)) and ", "").replaceAll("(-webkit-hyphens: none) and ", "");
}
function rm({ ticketdeskId: e }) {
  const [, t] = e.split("_"), [n, r] = j.useState(!1), [o, i] = j.useState(!1), {
    messages: l,
    sendMessage: s,
    startNewChat: u,
    endCurrentChat: a,
    loadSession: d,
    getRecentChats: f,
    updateProfile: m,
    errorMessage: y,
    setErrorMessage: g,
    sessions: x,
    selectedSession: k,
    isConnected: p,
    isLoading: c,
    config: h,
    chatState: w
  } = M1({
    ticketdeskId: e
  }), C = (E) => {
    if (E) {
      const $ = Hs(`ti_${t}_session_id`);
      d($);
    }
    r(E);
  };
  return c === !0 || !h ? null : /* @__PURE__ */ v.jsxs(nx.div, { children: [
    /* @__PURE__ */ v.jsx("style", { children: ox(rx) }),
    /* @__PURE__ */ v.jsx(
      pg,
      {
        isOpen: n,
        onClick: () => C(!n),
        config: h
      }
    ),
    /* @__PURE__ */ v.jsx(
      m1,
      {
        ticketdeskId: e,
        isOpen: n,
        isMaximized: o,
        isConnected: p,
        config: h,
        chatState: w,
        messages: l,
        sessions: x,
        selectedSession: k,
        onStartNewChat: u,
        onEndChat: a,
        onLoadSession: d,
        onGetRecentChats: f,
        onUpdateProfile: m,
        errorMessage: y,
        setErrorMessage: g,
        onClose: () => r(!1),
        onToggleMaximize: () => i(!o),
        onSendMessage: s
      }
    )
  ] });
}
let kr = null, St = null;
function ix(e) {
  St || (St = document.createElement("div"), St.id = "ticketdesk-ai", St.setAttribute("style", "color-scheme: light;"), document.body.appendChild(St));
  const t = () => {
    kr && (kr.unmount(), kr = null), St && (St.remove(), St = null);
  };
  return kr = Gu(St), kr.render(/* @__PURE__ */ v.jsx(rm, { ticketdeskId: e })), { close: t };
}
const lx = Oy(rm, {
  props: {
    ticketdeskId: "string"
  }
});
customElements.define("ticketdesk-chatbot", lx);
window.ticketdesk = {
  initChatbot: ix
};
window.TICKETDESK_ID && window.ticketdesk.initChatbot(window.TICKETDESK_ID);
