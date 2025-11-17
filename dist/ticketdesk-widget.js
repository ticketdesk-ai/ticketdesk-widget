var rm = Object.defineProperty;
var om = (e, t, n) => t in e ? rm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var A = (e, t, n) => om(e, typeof t != "symbol" ? t + "" : t, n);
function Td(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Md = { exports: {} }, O = {};
var uo = Symbol.for("react.element"), im = Symbol.for("react.portal"), lm = Symbol.for("react.fragment"), sm = Symbol.for("react.strict_mode"), um = Symbol.for("react.profiler"), am = Symbol.for("react.provider"), cm = Symbol.for("react.context"), dm = Symbol.for("react.forward_ref"), fm = Symbol.for("react.suspense"), pm = Symbol.for("react.memo"), hm = Symbol.for("react.lazy"), ya = Symbol.iterator;
function mm(e) {
  return e === null || typeof e != "object" ? null : (e = ya && e[ya] || e["@@iterator"], typeof e == "function" ? e : null);
}
var jd = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Rd = Object.assign, zd = {};
function or(e, t, n) {
  this.props = e, this.context = t, this.refs = zd, this.updater = n || jd;
}
or.prototype.isReactComponent = {};
or.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
or.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Fd() {
}
Fd.prototype = or.prototype;
function tu(e, t, n) {
  this.props = e, this.context = t, this.refs = zd, this.updater = n || jd;
}
var nu = tu.prototype = new Fd();
nu.constructor = tu;
Rd(nu, or.prototype);
nu.isPureReactComponent = !0;
var ga = Array.isArray, Ld = Object.prototype.hasOwnProperty, ru = { current: null }, Id = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dd(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) Ld.call(t, r) && !Id.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: uo, type: e, key: i, ref: l, props: o, _owner: ru.current };
}
function ym(e, t) {
  return { $$typeof: uo, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ou(e) {
  return typeof e == "object" && e !== null && e.$$typeof === uo;
}
function gm(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var va = /\/+/g;
function pl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? gm("" + e.key) : t.toString(36);
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
        case im:
          l = !0;
      }
  }
  if (l) return l = e, o = o(l), e = r === "" ? "." + pl(l, 0) : r, ga(o) ? (n = "", e != null && (n = e.replace(va, "$&/") + "/"), Uo(o, t, n, "", function(a) {
    return a;
  })) : o != null && (ou(o) && (o = ym(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(va, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", ga(e)) for (var s = 0; s < e.length; s++) {
    i = e[s];
    var u = r + pl(i, s);
    l += Uo(i, t, n, u, o);
  }
  else if (u = mm(e), typeof u == "function") for (e = u.call(e), s = 0; !(i = e.next()).done; ) i = i.value, u = r + pl(i, s++), l += Uo(i, t, n, u, o);
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
function vm(e) {
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
var Ne = { current: null }, Wo = { transition: null }, wm = { ReactCurrentDispatcher: Ne, ReactCurrentBatchConfig: Wo, ReactCurrentOwner: ru };
function Od() {
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
  if (!ou(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
O.Component = or;
O.Fragment = lm;
O.Profiler = um;
O.PureComponent = tu;
O.StrictMode = sm;
O.Suspense = fm;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wm;
O.act = Od;
O.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Rd({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = ru.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (u in t) Ld.call(t, u) && !Id.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
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
  return e = { $$typeof: cm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: am, _context: e }, e.Consumer = e;
};
O.createElement = Dd;
O.createFactory = function(e) {
  var t = Dd.bind(null, e);
  return t.type = e, t;
};
O.createRef = function() {
  return { current: null };
};
O.forwardRef = function(e) {
  return { $$typeof: dm, render: e };
};
O.isValidElement = ou;
O.lazy = function(e) {
  return { $$typeof: hm, _payload: { _status: -1, _result: e }, _init: vm };
};
O.memo = function(e, t) {
  return { $$typeof: pm, type: e, compare: t === void 0 ? null : t };
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
O.unstable_act = Od;
O.useCallback = function(e, t) {
  return Ne.current.useCallback(e, t);
};
O.useContext = function(e) {
  return Ne.current.useContext(e);
};
O.useDebugValue = function() {
};
O.useDeferredValue = function(e) {
  return Ne.current.useDeferredValue(e);
};
O.useEffect = function(e, t) {
  return Ne.current.useEffect(e, t);
};
O.useId = function() {
  return Ne.current.useId();
};
O.useImperativeHandle = function(e, t, n) {
  return Ne.current.useImperativeHandle(e, t, n);
};
O.useInsertionEffect = function(e, t) {
  return Ne.current.useInsertionEffect(e, t);
};
O.useLayoutEffect = function(e, t) {
  return Ne.current.useLayoutEffect(e, t);
};
O.useMemo = function(e, t) {
  return Ne.current.useMemo(e, t);
};
O.useReducer = function(e, t, n) {
  return Ne.current.useReducer(e, t, n);
};
O.useRef = function(e) {
  return Ne.current.useRef(e);
};
O.useState = function(e) {
  return Ne.current.useState(e);
};
O.useSyncExternalStore = function(e, t, n) {
  return Ne.current.useSyncExternalStore(e, t, n);
};
O.useTransition = function() {
  return Ne.current.useTransition();
};
O.version = "18.3.1";
Md.exports = O;
var j = Md.exports;
const Ye = /* @__PURE__ */ Td(j);
var bd = { exports: {} }, Ze = {}, Ad = { exports: {} }, Ud = {};
(function(e) {
  function t(_, z) {
    var F = _.length;
    _.push(z);
    e: for (; 0 < F; ) {
      var X = F - 1 >>> 1, ce = _[X];
      if (0 < o(ce, z)) _[X] = z, _[F] = ce, F = X;
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var z = _[0], F = _.pop();
    if (F !== z) {
      _[0] = F;
      e: for (var X = 0, ce = _.length, ho = ce >>> 1; X < ho; ) {
        var sn = 2 * (X + 1) - 1, fl = _[sn], un = sn + 1, mo = _[un];
        if (0 > o(fl, F)) un < ce && 0 > o(mo, fl) ? (_[X] = mo, _[un] = F, X = un) : (_[X] = fl, _[sn] = F, X = sn);
        else if (un < ce && 0 > o(mo, F)) _[X] = mo, _[un] = F, X = un;
        else break e;
      }
    }
    return z;
  }
  function o(_, z) {
    var F = _.sortIndex - z.sortIndex;
    return F !== 0 ? F : _.id - z.id;
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
  var u = [], a = [], d = 1, p = null, m = 3, y = !1, g = !1, x = !1, k = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(_) {
    for (var z = n(a); z !== null; ) {
      if (z.callback === null) r(a);
      else if (z.startTime <= _) r(a), z.sortIndex = z.expirationTime, t(u, z);
      else break;
      z = n(a);
    }
  }
  function w(_) {
    if (x = !1, h(_), !g) if (n(u) !== null) g = !0, V(S);
    else {
      var z = n(a);
      z !== null && ie(w, z.startTime - _);
    }
  }
  function S(_, z) {
    g = !1, x && (x = !1, f(T), T = -1), y = !0;
    var F = m;
    try {
      for (h(z), p = n(u); p !== null && (!(p.expirationTime > z) || _ && !oe()); ) {
        var X = p.callback;
        if (typeof X == "function") {
          p.callback = null, m = p.priorityLevel;
          var ce = X(p.expirationTime <= z);
          z = e.unstable_now(), typeof ce == "function" ? p.callback = ce : p === n(u) && r(u), h(z);
        } else r(u);
        p = n(u);
      }
      if (p !== null) var ho = !0;
      else {
        var sn = n(a);
        sn !== null && ie(w, sn.startTime - z), ho = !1;
      }
      return ho;
    } finally {
      p = null, m = F, y = !1;
    }
  }
  var E = !1, N = null, T = -1, W = 5, R = -1;
  function oe() {
    return !(e.unstable_now() - R < W);
  }
  function b() {
    if (N !== null) {
      var _ = e.unstable_now();
      R = _;
      var z = !0;
      try {
        z = N(!0, _);
      } finally {
        z ? we() : (E = !1, N = null);
      }
    } else E = !1;
  }
  var we;
  if (typeof c == "function") we = function() {
    c(b);
  };
  else if (typeof MessageChannel < "u") {
    var Oe = new MessageChannel(), ar = Oe.port2;
    Oe.port1.onmessage = b, we = function() {
      ar.postMessage(null);
    };
  } else we = function() {
    k(b, 0);
  };
  function V(_) {
    N = _, E || (E = !0, we());
  }
  function ie(_, z) {
    T = k(function() {
      _(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    g || y || (g = !0, V(S));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(_) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = m;
    }
    var F = m;
    m = z;
    try {
      return _();
    } finally {
      m = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, z) {
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
    var F = m;
    m = _;
    try {
      return z();
    } finally {
      m = F;
    }
  }, e.unstable_scheduleCallback = function(_, z, F) {
    var X = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? X + F : X) : F = X, _) {
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
    return ce = F + ce, _ = { id: d++, callback: z, priorityLevel: _, startTime: F, expirationTime: ce, sortIndex: -1 }, F > X ? (_.sortIndex = F, t(a, _), n(u) === null && _ === n(a) && (x ? (f(T), T = -1) : x = !0, ie(w, F - X))) : (_.sortIndex = ce, t(u, _), g || y || (g = !0, V(S))), _;
  }, e.unstable_shouldYield = oe, e.unstable_wrapCallback = function(_) {
    var z = m;
    return function() {
      var F = m;
      m = z;
      try {
        return _.apply(this, arguments);
      } finally {
        m = F;
      }
    };
  };
})(Ud);
Ad.exports = Ud;
var xm = Ad.exports;
var km = j, Ge = xm;
function C(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Wd = /* @__PURE__ */ new Set(), Ur = {};
function Tn(e, t) {
  Zn(e, t), Zn(e + "Capture", t);
}
function Zn(e, t) {
  for (Ur[e] = t, e = 0; e < t.length; e++) Wd.add(t[e]);
}
var Pt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Jl = Object.prototype.hasOwnProperty, Sm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, wa = {}, xa = {};
function Cm(e) {
  return Jl.call(xa, e) ? !0 : Jl.call(wa, e) ? !1 : Sm.test(e) ? xa[e] = !0 : (wa[e] = !0, !1);
}
function _m(e, t, n, r) {
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
function Em(e, t, n, r) {
  if (t === null || typeof t > "u" || _m(e, t, n, r)) return !0;
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
function Pe(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var ye = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ye[e] = new Pe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ye[t] = new Pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ye[e] = new Pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ye[e] = new Pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ye[e] = new Pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ye[e] = new Pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ye[e] = new Pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ye[e] = new Pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ye[e] = new Pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var iu = /[\-:]([a-z])/g;
function lu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    iu,
    lu
  );
  ye[t] = new Pe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(iu, lu);
  ye[t] = new Pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(iu, lu);
  ye[t] = new Pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ye[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ye.xlinkHref = new Pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ye[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function su(e, t, n, r) {
  var o = ye.hasOwnProperty(t) ? ye[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Em(t, n, o, r) && (n = null), r || o === null ? Cm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ft = km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, go = Symbol.for("react.element"), zn = Symbol.for("react.portal"), Fn = Symbol.for("react.fragment"), uu = Symbol.for("react.strict_mode"), ql = Symbol.for("react.profiler"), Vd = Symbol.for("react.provider"), Bd = Symbol.for("react.context"), au = Symbol.for("react.forward_ref"), es = Symbol.for("react.suspense"), ts = Symbol.for("react.suspense_list"), cu = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), Hd = Symbol.for("react.offscreen"), ka = Symbol.iterator;
function cr(e) {
  return e === null || typeof e != "object" ? null : (e = ka && e[ka] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ne = Object.assign, hl;
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
function $m(e) {
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
function ns(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Fn:
      return "Fragment";
    case zn:
      return "Portal";
    case ql:
      return "Profiler";
    case uu:
      return "StrictMode";
    case es:
      return "Suspense";
    case ts:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Bd:
      return (e.displayName || "Context") + ".Consumer";
    case Vd:
      return (e._context.displayName || "Context") + ".Provider";
    case au:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case cu:
      return t = e.displayName || null, t !== null ? t : ns(e.type) || "Memo";
    case Ot:
      t = e._payload, e = e._init;
      try {
        return ns(e(t));
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
      return ns(t);
    case 8:
      return t === uu ? "StrictMode" : "Mode";
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
function Qd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Pm(e) {
  var t = Qd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Yd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Qd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ci(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function rs(e, t) {
  var n = t.checked;
  return ne({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Sa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = en(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Xd(e, t) {
  t = t.checked, t != null && su(e, "checked", t, !1);
}
function os(e, t) {
  Xd(e, t);
  var n = en(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? is(e, t.type, n) : t.hasOwnProperty("defaultValue") && is(e, t.type, en(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ca(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function is(e, t, n) {
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
function ls(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return ne({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function _a(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(C(92));
      if (Cr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: en(n) };
}
function Kd(e, t) {
  var n = en(t.value), r = en(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ea(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Gd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ss(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Gd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var wo, Zd = function(e) {
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
}, Tm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mr).forEach(function(e) {
  Tm.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Mr[t] = Mr[e];
  });
});
function Jd(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Mr.hasOwnProperty(e) && Mr[e] ? ("" + t).trim() : t + "px";
}
function qd(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Jd(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Mm = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function us(e, t) {
  if (t) {
    if (Mm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function as(e, t) {
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
var cs = null;
function du(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ds = null, Qn = null, Yn = null;
function $a(e) {
  if (e = fo(e)) {
    if (typeof ds != "function") throw Error(C(280));
    var t = e.stateNode;
    t && (t = Xi(t), ds(e.stateNode, e.type, t));
  }
}
function ef(e) {
  Qn ? Yn ? Yn.push(e) : Yn = [e] : Qn = e;
}
function tf() {
  if (Qn) {
    var e = Qn, t = Yn;
    if (Yn = Qn = null, $a(e), t) for (e = 0; e < t.length; e++) $a(t[e]);
  }
}
function nf(e, t) {
  return e(t);
}
function rf() {
}
var gl = !1;
function of(e, t, n) {
  if (gl) return e(t, n);
  gl = !0;
  try {
    return nf(e, t, n);
  } finally {
    gl = !1, (Qn !== null || Yn !== null) && (rf(), tf());
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
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var fs = !1;
if (Pt) try {
  var dr = {};
  Object.defineProperty(dr, "passive", { get: function() {
    fs = !0;
  } }), window.addEventListener("test", dr, dr), window.removeEventListener("test", dr, dr);
} catch {
  fs = !1;
}
function jm(e, t, n, r, o, i, l, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var jr = !1, di = null, fi = !1, ps = null, Rm = { onError: function(e) {
  jr = !0, di = e;
} };
function zm(e, t, n, r, o, i, l, s, u) {
  jr = !1, di = null, jm.apply(Rm, arguments);
}
function Fm(e, t, n, r, o, i, l, s, u) {
  if (zm.apply(this, arguments), jr) {
    if (jr) {
      var a = di;
      jr = !1, di = null;
    } else throw Error(C(198));
    fi || (fi = !0, ps = a);
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
function lf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Na(e) {
  if (Mn(e) !== e) throw Error(C(188));
}
function Lm(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Mn(e), t === null) throw Error(C(188));
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
      throw Error(C(188));
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
        if (!l) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function sf(e) {
  return e = Lm(e), e !== null ? uf(e) : null;
}
function uf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = uf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var af = Ge.unstable_scheduleCallback, Pa = Ge.unstable_cancelCallback, Im = Ge.unstable_shouldYield, Dm = Ge.unstable_requestPaint, le = Ge.unstable_now, Om = Ge.unstable_getCurrentPriorityLevel, fu = Ge.unstable_ImmediatePriority, cf = Ge.unstable_UserBlockingPriority, pi = Ge.unstable_NormalPriority, bm = Ge.unstable_LowPriority, df = Ge.unstable_IdlePriority, Bi = null, wt = null;
function Am(e) {
  if (wt && typeof wt.onCommitFiberRoot == "function") try {
    wt.onCommitFiberRoot(Bi, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var ct = Math.clz32 ? Math.clz32 : Vm, Um = Math.log, Wm = Math.LN2;
function Vm(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Um(e) / Wm | 0) | 0;
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
function Bm(e, t) {
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
function Hm(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - ct(i), s = 1 << l, u = o[l];
    u === -1 ? (!(s & n) || s & r) && (o[l] = Bm(s, t)) : u <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function hs(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ff() {
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
function Qm(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - ct(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function pu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - ct(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var B = 0;
function pf(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var hf, hu, mf, yf, gf, ms = !1, So = [], Qt = null, Yt = null, Xt = null, Br = /* @__PURE__ */ new Map(), Hr = /* @__PURE__ */ new Map(), At = [], Ym = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ta(e, t) {
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
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = fo(t), t !== null && hu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Xm(e, t, n, r, o) {
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
function vf(e) {
  var t = gn(e.target);
  if (t !== null) {
    var n = Mn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = lf(n), t !== null) {
          e.blockedOn = t, gf(e.priority, function() {
            mf(n);
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
    var n = ys(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      cs = r, n.target.dispatchEvent(r), cs = null;
    } else return t = fo(n), t !== null && hu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ma(e, t, n) {
  Vo(e) && n.delete(t);
}
function Km() {
  ms = !1, Qt !== null && Vo(Qt) && (Qt = null), Yt !== null && Vo(Yt) && (Yt = null), Xt !== null && Vo(Xt) && (Xt = null), Br.forEach(Ma), Hr.forEach(Ma);
}
function pr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, ms || (ms = !0, Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority, Km)));
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
  for (; 0 < At.length && (n = At[0], n.blockedOn === null); ) vf(n), n.blockedOn === null && At.shift();
}
var Xn = Ft.ReactCurrentBatchConfig, mi = !0;
function Gm(e, t, n, r) {
  var o = B, i = Xn.transition;
  Xn.transition = null;
  try {
    B = 1, mu(e, t, n, r);
  } finally {
    B = o, Xn.transition = i;
  }
}
function Zm(e, t, n, r) {
  var o = B, i = Xn.transition;
  Xn.transition = null;
  try {
    B = 4, mu(e, t, n, r);
  } finally {
    B = o, Xn.transition = i;
  }
}
function mu(e, t, n, r) {
  if (mi) {
    var o = ys(e, t, n, r);
    if (o === null) Pl(e, t, r, yi, n), Ta(e, r);
    else if (Xm(o, e, t, n, r)) r.stopPropagation();
    else if (Ta(e, r), t & 4 && -1 < Ym.indexOf(e)) {
      for (; o !== null; ) {
        var i = fo(o);
        if (i !== null && hf(i), i = ys(e, t, n, r), i === null && Pl(e, t, r, yi, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Pl(e, t, r, null, n);
  }
}
var yi = null;
function ys(e, t, n, r) {
  if (yi = null, e = du(r), e = gn(e), e !== null) if (t = Mn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = lf(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return yi = e, null;
}
function wf(e) {
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
      switch (Om()) {
        case fu:
          return 1;
        case cf:
          return 4;
        case pi:
        case bm:
          return 16;
        case df:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Wt = null, yu = null, Bo = null;
function xf() {
  if (Bo) return Bo;
  var e, t = yu, n = t.length, r, o = "value" in Wt ? Wt.value : Wt.textContent, i = o.length;
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
function ja() {
  return !1;
}
function Je(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Co : ja, this.isPropagationStopped = ja, this;
  }
  return ne(t.prototype, { preventDefault: function() {
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
}, defaultPrevented: 0, isTrusted: 0 }, gu = Je(ir), co = ne({}, ir, { view: 0, detail: 0 }), Jm = Je(co), wl, xl, hr, Hi = ne({}, co, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: vu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== hr && (hr && e.type === "mousemove" ? (wl = e.screenX - hr.screenX, xl = e.screenY - hr.screenY) : xl = wl = 0, hr = e), wl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : xl;
} }), Ra = Je(Hi), qm = ne({}, Hi, { dataTransfer: 0 }), e0 = Je(qm), t0 = ne({}, co, { relatedTarget: 0 }), kl = Je(t0), n0 = ne({}, ir, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), r0 = Je(n0), o0 = ne({}, ir, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), i0 = Je(o0), l0 = ne({}, ir, { data: 0 }), za = Je(l0), s0 = {
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
}, u0 = {
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
}, a0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function c0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = a0[e]) ? !!t[e] : !1;
}
function vu() {
  return c0;
}
var d0 = ne({}, co, { key: function(e) {
  if (e.key) {
    var t = s0[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ho(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? u0[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: vu, charCode: function(e) {
  return e.type === "keypress" ? Ho(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ho(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), f0 = Je(d0), p0 = ne({}, Hi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Fa = Je(p0), h0 = ne({}, co, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: vu }), m0 = Je(h0), y0 = ne({}, ir, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), g0 = Je(y0), v0 = ne({}, Hi, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), w0 = Je(v0), x0 = [9, 13, 27, 32], wu = Pt && "CompositionEvent" in window, Rr = null;
Pt && "documentMode" in document && (Rr = document.documentMode);
var k0 = Pt && "TextEvent" in window && !Rr, kf = Pt && (!wu || Rr && 8 < Rr && 11 >= Rr), La = " ", Ia = !1;
function Sf(e, t) {
  switch (e) {
    case "keyup":
      return x0.indexOf(t.keyCode) !== -1;
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
function Cf(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ln = !1;
function S0(e, t) {
  switch (e) {
    case "compositionend":
      return Cf(t);
    case "keypress":
      return t.which !== 32 ? null : (Ia = !0, La);
    case "textInput":
      return e = t.data, e === La && Ia ? null : e;
    default:
      return null;
  }
}
function C0(e, t) {
  if (Ln) return e === "compositionend" || !wu && Sf(e, t) ? (e = xf(), Bo = yu = Wt = null, Ln = !1, e) : null;
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
      return kf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var _0 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Da(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!_0[e.type] : t === "textarea";
}
function _f(e, t, n, r) {
  ef(r), t = gi(t, "onChange"), 0 < t.length && (n = new gu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var zr = null, Yr = null;
function E0(e) {
  Lf(e, 0);
}
function Qi(e) {
  var t = On(e);
  if (Yd(t)) return e;
}
function $0(e, t) {
  if (e === "change") return t;
}
var Ef = !1;
if (Pt) {
  var Sl;
  if (Pt) {
    var Cl = "oninput" in document;
    if (!Cl) {
      var Oa = document.createElement("div");
      Oa.setAttribute("oninput", "return;"), Cl = typeof Oa.oninput == "function";
    }
    Sl = Cl;
  } else Sl = !1;
  Ef = Sl && (!document.documentMode || 9 < document.documentMode);
}
function ba() {
  zr && (zr.detachEvent("onpropertychange", $f), Yr = zr = null);
}
function $f(e) {
  if (e.propertyName === "value" && Qi(Yr)) {
    var t = [];
    _f(t, Yr, e, du(e)), of(E0, t);
  }
}
function N0(e, t, n) {
  e === "focusin" ? (ba(), zr = t, Yr = n, zr.attachEvent("onpropertychange", $f)) : e === "focusout" && ba();
}
function P0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Qi(Yr);
}
function T0(e, t) {
  if (e === "click") return Qi(t);
}
function M0(e, t) {
  if (e === "input" || e === "change") return Qi(t);
}
function j0(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ft = typeof Object.is == "function" ? Object.is : j0;
function Xr(e, t) {
  if (ft(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Jl.call(t, o) || !ft(e[o], t[o])) return !1;
  }
  return !0;
}
function Aa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ua(e, t) {
  var n = Aa(e);
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
    n = Aa(n);
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
function xu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function R0(e) {
  var t = Pf(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Nf(n.ownerDocument.documentElement, n)) {
    if (r !== null && xu(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Ua(n, i);
        var l = Ua(
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
var z0 = Pt && "documentMode" in document && 11 >= document.documentMode, In = null, gs = null, Fr = null, vs = !1;
function Wa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  vs || In == null || In !== ci(r) || (r = In, "selectionStart" in r && xu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Fr && Xr(Fr, r) || (Fr = r, r = gi(gs, "onSelect"), 0 < r.length && (t = new gu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = In)));
}
function _o(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Dn = { animationend: _o("Animation", "AnimationEnd"), animationiteration: _o("Animation", "AnimationIteration"), animationstart: _o("Animation", "AnimationStart"), transitionend: _o("Transition", "TransitionEnd") }, _l = {}, Tf = {};
Pt && (Tf = document.createElement("div").style, "AnimationEvent" in window || (delete Dn.animationend.animation, delete Dn.animationiteration.animation, delete Dn.animationstart.animation), "TransitionEvent" in window || delete Dn.transitionend.transition);
function Yi(e) {
  if (_l[e]) return _l[e];
  if (!Dn[e]) return e;
  var t = Dn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Tf) return _l[e] = t[n];
  return e;
}
var Mf = Yi("animationend"), jf = Yi("animationiteration"), Rf = Yi("animationstart"), zf = Yi("transitionend"), Ff = /* @__PURE__ */ new Map(), Va = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function rn(e, t) {
  Ff.set(e, t), Tn(t, [e]);
}
for (var El = 0; El < Va.length; El++) {
  var $l = Va[El], F0 = $l.toLowerCase(), L0 = $l[0].toUpperCase() + $l.slice(1);
  rn(F0, "on" + L0);
}
rn(Mf, "onAnimationEnd");
rn(jf, "onAnimationIteration");
rn(Rf, "onAnimationStart");
rn("dblclick", "onDoubleClick");
rn("focusin", "onFocus");
rn("focusout", "onBlur");
rn(zf, "onTransitionEnd");
Zn("onMouseEnter", ["mouseout", "mouseover"]);
Zn("onMouseLeave", ["mouseout", "mouseover"]);
Zn("onPointerEnter", ["pointerout", "pointerover"]);
Zn("onPointerLeave", ["pointerout", "pointerover"]);
Tn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Tn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Tn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Tn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Er = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), I0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));
function Ba(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Fm(r, t, void 0, e), e.currentTarget = null;
}
function Lf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var s = r[l], u = s.instance, a = s.currentTarget;
        if (s = s.listener, u !== i && o.isPropagationStopped()) break e;
        Ba(o, s, a), i = u;
      }
      else for (l = 0; l < r.length; l++) {
        if (s = r[l], u = s.instance, a = s.currentTarget, s = s.listener, u !== i && o.isPropagationStopped()) break e;
        Ba(o, s, a), i = u;
      }
    }
  }
  if (fi) throw e = ps, fi = !1, ps = null, e;
}
function K(e, t) {
  var n = t[Cs];
  n === void 0 && (n = t[Cs] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (If(t, e, 2, !1), n.add(r));
}
function Nl(e, t, n) {
  var r = 0;
  t && (r |= 4), If(n, e, r, t);
}
var Eo = "_reactListening" + Math.random().toString(36).slice(2);
function Kr(e) {
  if (!e[Eo]) {
    e[Eo] = !0, Wd.forEach(function(n) {
      n !== "selectionchange" && (I0.has(n) || Nl(n, !1, e), Nl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Eo] || (t[Eo] = !0, Nl("selectionchange", !1, t));
  }
}
function If(e, t, n, r) {
  switch (wf(t)) {
    case 1:
      var o = Gm;
      break;
    case 4:
      o = Zm;
      break;
    default:
      o = mu;
  }
  n = o.bind(null, t, n, e), o = void 0, !fs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Pl(e, t, n, r, o) {
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
  of(function() {
    var a = i, d = du(n), p = [];
    e: {
      var m = Ff.get(e);
      if (m !== void 0) {
        var y = gu, g = e;
        switch (e) {
          case "keypress":
            if (Ho(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = f0;
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
            y = Ra;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = e0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = m0;
            break;
          case Mf:
          case jf:
          case Rf:
            y = r0;
            break;
          case zf:
            y = g0;
            break;
          case "scroll":
            y = Jm;
            break;
          case "wheel":
            y = w0;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = i0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Fa;
        }
        var x = (t & 4) !== 0, k = !x && e === "scroll", f = x ? m !== null ? m + "Capture" : null : m;
        x = [];
        for (var c = a, h; c !== null; ) {
          h = c;
          var w = h.stateNode;
          if (h.tag === 5 && w !== null && (h = w, f !== null && (w = Vr(c, f), w != null && x.push(Gr(c, w, h)))), k) break;
          c = c.return;
        }
        0 < x.length && (m = new y(m, g, null, n, d), p.push({ event: m, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", m && n !== cs && (g = n.relatedTarget || n.fromElement) && (gn(g) || g[Tt])) break e;
        if ((y || m) && (m = d.window === d ? d : (m = d.ownerDocument) ? m.defaultView || m.parentWindow : window, y ? (g = n.relatedTarget || n.toElement, y = a, g = g ? gn(g) : null, g !== null && (k = Mn(g), g !== k || g.tag !== 5 && g.tag !== 6) && (g = null)) : (y = null, g = a), y !== g)) {
          if (x = Ra, w = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (x = Fa, w = "onPointerLeave", f = "onPointerEnter", c = "pointer"), k = y == null ? m : On(y), h = g == null ? m : On(g), m = new x(w, c + "leave", y, n, d), m.target = k, m.relatedTarget = h, w = null, gn(d) === a && (x = new x(f, c + "enter", g, n, d), x.target = h, x.relatedTarget = k, w = x), k = w, y && g) t: {
            for (x = y, f = g, c = 0, h = x; h; h = jn(h)) c++;
            for (h = 0, w = f; w; w = jn(w)) h++;
            for (; 0 < c - h; ) x = jn(x), c--;
            for (; 0 < h - c; ) f = jn(f), h--;
            for (; c--; ) {
              if (x === f || f !== null && x === f.alternate) break t;
              x = jn(x), f = jn(f);
            }
            x = null;
          }
          else x = null;
          y !== null && Ha(p, m, y, x, !1), g !== null && k !== null && Ha(p, k, g, x, !0);
        }
      }
      e: {
        if (m = a ? On(a) : window, y = m.nodeName && m.nodeName.toLowerCase(), y === "select" || y === "input" && m.type === "file") var S = $0;
        else if (Da(m)) if (Ef) S = M0;
        else {
          S = P0;
          var E = N0;
        }
        else (y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (S = T0);
        if (S && (S = S(e, a))) {
          _f(p, S, n, d);
          break e;
        }
        E && E(e, m, a), e === "focusout" && (E = m._wrapperState) && E.controlled && m.type === "number" && is(m, "number", m.value);
      }
      switch (E = a ? On(a) : window, e) {
        case "focusin":
          (Da(E) || E.contentEditable === "true") && (In = E, gs = a, Fr = null);
          break;
        case "focusout":
          Fr = gs = In = null;
          break;
        case "mousedown":
          vs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          vs = !1, Wa(p, n, d);
          break;
        case "selectionchange":
          if (z0) break;
        case "keydown":
        case "keyup":
          Wa(p, n, d);
      }
      var N;
      if (wu) e: {
        switch (e) {
          case "compositionstart":
            var T = "onCompositionStart";
            break e;
          case "compositionend":
            T = "onCompositionEnd";
            break e;
          case "compositionupdate":
            T = "onCompositionUpdate";
            break e;
        }
        T = void 0;
      }
      else Ln ? Sf(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (kf && n.locale !== "ko" && (Ln || T !== "onCompositionStart" ? T === "onCompositionEnd" && Ln && (N = xf()) : (Wt = d, yu = "value" in Wt ? Wt.value : Wt.textContent, Ln = !0)), E = gi(a, T), 0 < E.length && (T = new za(T, e, null, n, d), p.push({ event: T, listeners: E }), N ? T.data = N : (N = Cf(n), N !== null && (T.data = N)))), (N = k0 ? S0(e, n) : C0(e, n)) && (a = gi(a, "onBeforeInput"), 0 < a.length && (d = new za("onBeforeInput", "beforeinput", null, n, d), p.push({ event: d, listeners: a }), d.data = N));
    }
    Lf(p, t);
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
function Ha(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n, u = s.alternate, a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 && a !== null && (s = a, o ? (u = Vr(n, i), u != null && l.unshift(Gr(n, u, s))) : o || (u = Vr(n, i), u != null && l.push(Gr(n, u, s)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var D0 = /\r\n?/g, O0 = /\u0000|\uFFFD/g;
function Qa(e) {
  return (typeof e == "string" ? e : "" + e).replace(D0, `
`).replace(O0, "");
}
function $o(e, t, n) {
  if (t = Qa(t), Qa(e) !== t && n) throw Error(C(425));
}
function vi() {
}
var ws = null, xs = null;
function ks(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ss = typeof setTimeout == "function" ? setTimeout : void 0, b0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Ya = typeof Promise == "function" ? Promise : void 0, A0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ya < "u" ? function(e) {
  return Ya.resolve(null).then(e).catch(U0);
} : Ss;
function U0(e) {
  setTimeout(function() {
    throw e;
  });
}
function Tl(e, t) {
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
function Xa(e) {
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
var lr = Math.random().toString(36).slice(2), vt = "__reactFiber$" + lr, Zr = "__reactProps$" + lr, Tt = "__reactContainer$" + lr, Cs = "__reactEvents$" + lr, W0 = "__reactListeners$" + lr, V0 = "__reactHandles$" + lr;
function gn(e) {
  var t = e[vt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Tt] || n[vt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Xa(e); e !== null; ) {
        if (n = e[vt]) return n;
        e = Xa(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function fo(e) {
  return e = e[vt] || e[Tt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function On(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Xi(e) {
  return e[Zr] || null;
}
var _s = [], bn = -1;
function on(e) {
  return { current: e };
}
function Z(e) {
  0 > bn || (e.current = _s[bn], _s[bn] = null, bn--);
}
function Y(e, t) {
  bn++, _s[bn] = e.current, e.current = t;
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
  Z(Le), Z(Ce);
}
function Ka(e, t, n) {
  if (Ce.current !== tn) throw Error(C(168));
  Y(Ce, t), Y(Le, n);
}
function Df(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(C(108, Nm(e) || "Unknown", o));
  return ne({}, n, r);
}
function xi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || tn, _n = Ce.current, Y(Ce, e), Y(Le, Le.current), !0;
}
function Ga(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n ? (e = Df(e, t, _n), r.__reactInternalMemoizedMergedChildContext = e, Z(Le), Z(Ce), Y(Ce, e)) : Z(Le), Y(Le, n);
}
var _t = null, Ki = !1, Ml = !1;
function Of(e) {
  _t === null ? _t = [e] : _t.push(e);
}
function B0(e) {
  Ki = !0, Of(e);
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
      throw _t !== null && (_t = _t.slice(e + 1)), af(fu, ln), o;
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
function bf(e, t, n) {
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
function ku(e) {
  e.return !== null && (dn(e, 1), bf(e, 1, 0));
}
function Su(e) {
  for (; e === ki; ) ki = An[--Un], An[Un] = null, Si = An[--Un], An[Un] = null;
  for (; e === En; ) En = qe[--et], qe[et] = null, $t = qe[--et], qe[et] = null, Et = qe[--et], qe[et] = null;
}
var Ke = null, Xe = null, q = !1, ut = null;
function Af(e, t) {
  var n = tt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Za(e, t) {
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
function Es(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $s(e) {
  if (q) {
    var t = Xe;
    if (t) {
      var n = t;
      if (!Za(e, t)) {
        if (Es(e)) throw Error(C(418));
        t = Kt(n.nextSibling);
        var r = Ke;
        t && Za(e, t) ? Af(r, n) : (e.flags = e.flags & -4097 | 2, q = !1, Ke = e);
      }
    } else {
      if (Es(e)) throw Error(C(418));
      e.flags = e.flags & -4097 | 2, q = !1, Ke = e;
    }
  }
}
function Ja(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ke = e;
}
function No(e) {
  if (e !== Ke) return !1;
  if (!q) return Ja(e), q = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ks(e.type, e.memoizedProps)), t && (t = Xe)) {
    if (Es(e)) throw Uf(), Error(C(418));
    for (; t; ) Af(e, t), t = Kt(t.nextSibling);
  }
  if (Ja(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(C(317));
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
function Uf() {
  for (var e = Xe; e; ) e = Kt(e.nextSibling);
}
function qn() {
  Xe = Ke = null, q = !1;
}
function Cu(e) {
  ut === null ? ut = [e] : ut.push(e);
}
var H0 = Ft.ReactCurrentBatchConfig;
function mr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var s = o.refs;
        l === null ? delete s[i] : s[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Po(e, t) {
  throw e = Object.prototype.toString.call(t), Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function qa(e) {
  var t = e._init;
  return t(e._payload);
}
function Wf(e) {
  function t(f, c) {
    if (e) {
      var h = f.deletions;
      h === null ? (f.deletions = [c], f.flags |= 16) : h.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), c = c.sibling;
    return null;
  }
  function r(f, c) {
    for (f = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
    return f;
  }
  function o(f, c) {
    return f = qt(f, c), f.index = 0, f.sibling = null, f;
  }
  function i(f, c, h) {
    return f.index = h, e ? (h = f.alternate, h !== null ? (h = h.index, h < c ? (f.flags |= 2, c) : h) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
  }
  function l(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, c, h, w) {
    return c === null || c.tag !== 6 ? (c = Dl(h, f.mode, w), c.return = f, c) : (c = o(c, h), c.return = f, c);
  }
  function u(f, c, h, w) {
    var S = h.type;
    return S === Fn ? d(f, c, h.props.children, w, h.key) : c !== null && (c.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Ot && qa(S) === c.type) ? (w = o(c, h.props), w.ref = mr(f, c, h), w.return = f, w) : (w = Jo(h.type, h.key, h.props, null, f.mode, w), w.ref = mr(f, c, h), w.return = f, w);
  }
  function a(f, c, h, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== h.containerInfo || c.stateNode.implementation !== h.implementation ? (c = Ol(h, f.mode, w), c.return = f, c) : (c = o(c, h.children || []), c.return = f, c);
  }
  function d(f, c, h, w, S) {
    return c === null || c.tag !== 7 ? (c = Cn(h, f.mode, w, S), c.return = f, c) : (c = o(c, h), c.return = f, c);
  }
  function p(f, c, h) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = Dl("" + c, f.mode, h), c.return = f, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case go:
          return h = Jo(c.type, c.key, c.props, null, f.mode, h), h.ref = mr(f, null, c), h.return = f, h;
        case zn:
          return c = Ol(c, f.mode, h), c.return = f, c;
        case Ot:
          var w = c._init;
          return p(f, w(c._payload), h);
      }
      if (Cr(c) || cr(c)) return c = Cn(c, f.mode, h, null), c.return = f, c;
      Po(f, c);
    }
    return null;
  }
  function m(f, c, h, w) {
    var S = c !== null ? c.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return S !== null ? null : s(f, c, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case go:
          return h.key === S ? u(f, c, h, w) : null;
        case zn:
          return h.key === S ? a(f, c, h, w) : null;
        case Ot:
          return S = h._init, m(
            f,
            c,
            S(h._payload),
            w
          );
      }
      if (Cr(h) || cr(h)) return S !== null ? null : d(f, c, h, w, null);
      Po(f, h);
    }
    return null;
  }
  function y(f, c, h, w, S) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(h) || null, s(c, f, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case go:
          return f = f.get(w.key === null ? h : w.key) || null, u(c, f, w, S);
        case zn:
          return f = f.get(w.key === null ? h : w.key) || null, a(c, f, w, S);
        case Ot:
          var E = w._init;
          return y(f, c, h, E(w._payload), S);
      }
      if (Cr(w) || cr(w)) return f = f.get(h) || null, d(c, f, w, S, null);
      Po(c, w);
    }
    return null;
  }
  function g(f, c, h, w) {
    for (var S = null, E = null, N = c, T = c = 0, W = null; N !== null && T < h.length; T++) {
      N.index > T ? (W = N, N = null) : W = N.sibling;
      var R = m(f, N, h[T], w);
      if (R === null) {
        N === null && (N = W);
        break;
      }
      e && N && R.alternate === null && t(f, N), c = i(R, c, T), E === null ? S = R : E.sibling = R, E = R, N = W;
    }
    if (T === h.length) return n(f, N), q && dn(f, T), S;
    if (N === null) {
      for (; T < h.length; T++) N = p(f, h[T], w), N !== null && (c = i(N, c, T), E === null ? S = N : E.sibling = N, E = N);
      return q && dn(f, T), S;
    }
    for (N = r(f, N); T < h.length; T++) W = y(N, f, T, h[T], w), W !== null && (e && W.alternate !== null && N.delete(W.key === null ? T : W.key), c = i(W, c, T), E === null ? S = W : E.sibling = W, E = W);
    return e && N.forEach(function(oe) {
      return t(f, oe);
    }), q && dn(f, T), S;
  }
  function x(f, c, h, w) {
    var S = cr(h);
    if (typeof S != "function") throw Error(C(150));
    if (h = S.call(h), h == null) throw Error(C(151));
    for (var E = S = null, N = c, T = c = 0, W = null, R = h.next(); N !== null && !R.done; T++, R = h.next()) {
      N.index > T ? (W = N, N = null) : W = N.sibling;
      var oe = m(f, N, R.value, w);
      if (oe === null) {
        N === null && (N = W);
        break;
      }
      e && N && oe.alternate === null && t(f, N), c = i(oe, c, T), E === null ? S = oe : E.sibling = oe, E = oe, N = W;
    }
    if (R.done) return n(
      f,
      N
    ), q && dn(f, T), S;
    if (N === null) {
      for (; !R.done; T++, R = h.next()) R = p(f, R.value, w), R !== null && (c = i(R, c, T), E === null ? S = R : E.sibling = R, E = R);
      return q && dn(f, T), S;
    }
    for (N = r(f, N); !R.done; T++, R = h.next()) R = y(N, f, T, R.value, w), R !== null && (e && R.alternate !== null && N.delete(R.key === null ? T : R.key), c = i(R, c, T), E === null ? S = R : E.sibling = R, E = R);
    return e && N.forEach(function(b) {
      return t(f, b);
    }), q && dn(f, T), S;
  }
  function k(f, c, h, w) {
    if (typeof h == "object" && h !== null && h.type === Fn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case go:
          e: {
            for (var S = h.key, E = c; E !== null; ) {
              if (E.key === S) {
                if (S = h.type, S === Fn) {
                  if (E.tag === 7) {
                    n(f, E.sibling), c = o(E, h.props.children), c.return = f, f = c;
                    break e;
                  }
                } else if (E.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Ot && qa(S) === E.type) {
                  n(f, E.sibling), c = o(E, h.props), c.ref = mr(f, E, h), c.return = f, f = c;
                  break e;
                }
                n(f, E);
                break;
              } else t(f, E);
              E = E.sibling;
            }
            h.type === Fn ? (c = Cn(h.props.children, f.mode, w, h.key), c.return = f, f = c) : (w = Jo(h.type, h.key, h.props, null, f.mode, w), w.ref = mr(f, c, h), w.return = f, f = w);
          }
          return l(f);
        case zn:
          e: {
            for (E = h.key; c !== null; ) {
              if (c.key === E) if (c.tag === 4 && c.stateNode.containerInfo === h.containerInfo && c.stateNode.implementation === h.implementation) {
                n(f, c.sibling), c = o(c, h.children || []), c.return = f, f = c;
                break e;
              } else {
                n(f, c);
                break;
              }
              else t(f, c);
              c = c.sibling;
            }
            c = Ol(h, f.mode, w), c.return = f, f = c;
          }
          return l(f);
        case Ot:
          return E = h._init, k(f, c, E(h._payload), w);
      }
      if (Cr(h)) return g(f, c, h, w);
      if (cr(h)) return x(f, c, h, w);
      Po(f, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, c !== null && c.tag === 6 ? (n(f, c.sibling), c = o(c, h), c.return = f, f = c) : (n(f, c), c = Dl(h, f.mode, w), c.return = f, f = c), l(f)) : n(f, c);
  }
  return k;
}
var er = Wf(!0), Vf = Wf(!1), Ci = on(null), _i = null, Wn = null, _u = null;
function Eu() {
  _u = Wn = _i = null;
}
function $u(e) {
  var t = Ci.current;
  Z(Ci), e._currentValue = t;
}
function Ns(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Kn(e, t) {
  _i = e, _u = Wn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Fe = !0), e.firstContext = null);
}
function rt(e) {
  var t = e._currentValue;
  if (_u !== e) if (e = { context: e, memoizedValue: t, next: null }, Wn === null) {
    if (_i === null) throw Error(C(308));
    Wn = e, _i.dependencies = { lanes: 0, firstContext: e };
  } else Wn = Wn.next = e;
  return t;
}
var vn = null;
function Nu(e) {
  vn === null ? vn = [e] : vn.push(e);
}
function Bf(e, t, n, r) {
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
function Hf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Nt(e, t) {
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
    r &= e.pendingLanes, n |= r, t.lanes = n, pu(e, n);
  }
}
function ec(e, t) {
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
    var p = o.baseState;
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
                p = g.call(y, p, m);
                break e;
              }
              p = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = x.payload, m = typeof g == "function" ? g.call(y, p, m) : g, m == null) break e;
              p = ne({}, p, m);
              break e;
            case 2:
              bt = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, m = o.effects, m === null ? o.effects = [s] : m.push(s));
      } else y = { eventTime: y, lane: m, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, d === null ? (a = d = y, u = p) : d = d.next = y, l |= m;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null) break;
        m = s, s = m.next, m.next = null, o.lastBaseUpdate = m, o.shared.pending = null;
      }
    } while (!0);
    if (d === null && (u = p), o.baseState = u, o.firstBaseUpdate = a, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Nn |= l, e.lanes = l, e.memoizedState = p;
  }
}
function tc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(C(191, o));
      o.call(r);
    }
  }
}
var po = {}, xt = on(po), Jr = on(po), qr = on(po);
function wn(e) {
  if (e === po) throw Error(C(174));
  return e;
}
function Tu(e, t) {
  switch (Y(qr, t), Y(Jr, e), Y(xt, po), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ss(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ss(t, e);
  }
  Z(xt), Y(xt, t);
}
function tr() {
  Z(xt), Z(Jr), Z(qr);
}
function Qf(e) {
  wn(qr.current);
  var t = wn(xt.current), n = ss(t, e.type);
  t !== n && (Y(Jr, e), Y(xt, n));
}
function Mu(e) {
  Jr.current === e && (Z(xt), Z(Jr));
}
var ee = on(0);
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
function ju() {
  for (var e = 0; e < jl.length; e++) jl[e]._workInProgressVersionPrimary = null;
  jl.length = 0;
}
var Yo = Ft.ReactCurrentDispatcher, Rl = Ft.ReactCurrentBatchConfig, $n = 0, te = null, ue = null, de = null, Ni = !1, Lr = !1, eo = 0, Q0 = 0;
function xe() {
  throw Error(C(321));
}
function Ru(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ft(e[n], t[n])) return !1;
  return !0;
}
function zu(e, t, n, r, o, i) {
  if ($n = i, te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Yo.current = e === null || e.memoizedState === null ? G0 : Z0, e = n(r, o), Lr) {
    i = 0;
    do {
      if (Lr = !1, eo = 0, 25 <= i) throw Error(C(301));
      i += 1, de = ue = null, t.updateQueue = null, Yo.current = J0, e = n(r, o);
    } while (Lr);
  }
  if (Yo.current = Pi, t = ue !== null && ue.next !== null, $n = 0, de = ue = te = null, Ni = !1, t) throw Error(C(300));
  return e;
}
function Fu() {
  var e = eo !== 0;
  return eo = 0, e;
}
function gt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return de === null ? te.memoizedState = de = e : de = de.next = e, de;
}
function ot() {
  if (ue === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ue.next;
  var t = de === null ? te.memoizedState : de.next;
  if (t !== null) de = t, ue = e;
  else {
    if (e === null) throw Error(C(310));
    ue = e, e = { memoizedState: ue.memoizedState, baseState: ue.baseState, baseQueue: ue.baseQueue, queue: ue.queue, next: null }, de === null ? te.memoizedState = de = e : de = de.next = e;
  }
  return de;
}
function to(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function zl(e) {
  var t = ot(), n = t.queue;
  if (n === null) throw Error(C(311));
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
        var p = {
          lane: d,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        u === null ? (s = u = p, l = r) : u = u.next = p, te.lanes |= d, Nn |= d;
      }
      a = a.next;
    } while (a !== null && a !== i);
    u === null ? l = r : u.next = s, ft(r, t.memoizedState) || (Fe = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, te.lanes |= i, Nn |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Fl(e) {
  var t = ot(), n = t.queue;
  if (n === null) throw Error(C(311));
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
function Yf() {
}
function Xf(e, t) {
  var n = te, r = ot(), o = t(), i = !ft(r.memoizedState, o);
  if (i && (r.memoizedState = o, Fe = !0), r = r.queue, Lu(Zf.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || de !== null && de.memoizedState.tag & 1) {
    if (n.flags |= 2048, no(9, Gf.bind(null, n, r, o, t), void 0, null), fe === null) throw Error(C(349));
    $n & 30 || Kf(n, t, o);
  }
  return o;
}
function Kf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Gf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Jf(t) && qf(e);
}
function Zf(e, t, n) {
  return n(function() {
    Jf(t) && qf(e);
  });
}
function Jf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ft(e, n);
  } catch {
    return !0;
  }
}
function qf(e) {
  var t = Mt(e, 1);
  t !== null && dt(t, e, 1, -1);
}
function nc(e) {
  var t = gt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: to, lastRenderedState: e }, t.queue = e, e = e.dispatch = K0.bind(null, te, e), [t.memoizedState, e];
}
function no(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function ep() {
  return ot().memoizedState;
}
function Xo(e, t, n, r) {
  var o = gt();
  te.flags |= e, o.memoizedState = no(1 | t, n, void 0, r === void 0 ? null : r);
}
function Gi(e, t, n, r) {
  var o = ot();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ue !== null) {
    var l = ue.memoizedState;
    if (i = l.destroy, r !== null && Ru(r, l.deps)) {
      o.memoizedState = no(t, n, i, r);
      return;
    }
  }
  te.flags |= e, o.memoizedState = no(1 | t, n, i, r);
}
function rc(e, t) {
  return Xo(8390656, 8, e, t);
}
function Lu(e, t) {
  return Gi(2048, 8, e, t);
}
function tp(e, t) {
  return Gi(4, 2, e, t);
}
function np(e, t) {
  return Gi(4, 4, e, t);
}
function rp(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function op(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Gi(4, 4, rp.bind(null, t, e), n);
}
function Iu() {
}
function ip(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ru(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function lp(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ru(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function sp(e, t, n) {
  return $n & 21 ? (ft(n, t) || (n = ff(), te.lanes |= n, Nn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Fe = !0), e.memoizedState = n);
}
function Y0(e, t) {
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
function up() {
  return ot().memoizedState;
}
function X0(e, t, n) {
  var r = Jt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ap(e)) cp(t, n);
  else if (n = Bf(e, t, n, r), n !== null) {
    var o = $e();
    dt(n, e, r, o), dp(n, t, r);
  }
}
function K0(e, t, n) {
  var r = Jt(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ap(e)) cp(t, o);
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
    n = Bf(e, t, o, r), n !== null && (o = $e(), dt(n, e, r, o), dp(n, t, r));
  }
}
function ap(e) {
  var t = e.alternate;
  return e === te || t !== null && t === te;
}
function cp(e, t) {
  Lr = Ni = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function dp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, pu(e, n);
  }
}
var Pi = { readContext: rt, useCallback: xe, useContext: xe, useEffect: xe, useImperativeHandle: xe, useInsertionEffect: xe, useLayoutEffect: xe, useMemo: xe, useReducer: xe, useRef: xe, useState: xe, useDebugValue: xe, useDeferredValue: xe, useTransition: xe, useMutableSource: xe, useSyncExternalStore: xe, useId: xe, unstable_isNewReconciler: !1 }, G0 = { readContext: rt, useCallback: function(e, t) {
  return gt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: rt, useEffect: rc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Xo(
    4194308,
    4,
    rp.bind(null, t, e),
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
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = X0.bind(null, te, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = gt();
  return e = { current: e }, t.memoizedState = e;
}, useState: nc, useDebugValue: Iu, useDeferredValue: function(e) {
  return gt().memoizedState = e;
}, useTransition: function() {
  var e = nc(!1), t = e[0];
  return e = Y0.bind(null, e[1]), gt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = te, o = gt();
  if (q) {
    if (n === void 0) throw Error(C(407));
    n = n();
  } else {
    if (n = t(), fe === null) throw Error(C(349));
    $n & 30 || Kf(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, rc(Zf.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, no(9, Gf.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = gt(), t = fe.identifierPrefix;
  if (q) {
    var n = $t, r = Et;
    n = (r & ~(1 << 32 - ct(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = eo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Q0++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Z0 = {
  readContext: rt,
  useCallback: ip,
  useContext: rt,
  useEffect: Lu,
  useImperativeHandle: op,
  useInsertionEffect: tp,
  useLayoutEffect: np,
  useMemo: lp,
  useReducer: zl,
  useRef: ep,
  useState: function() {
    return zl(to);
  },
  useDebugValue: Iu,
  useDeferredValue: function(e) {
    var t = ot();
    return sp(t, ue.memoizedState, e);
  },
  useTransition: function() {
    var e = zl(to)[0], t = ot().memoizedState;
    return [e, t];
  },
  useMutableSource: Yf,
  useSyncExternalStore: Xf,
  useId: up,
  unstable_isNewReconciler: !1
}, J0 = { readContext: rt, useCallback: ip, useContext: rt, useEffect: Lu, useImperativeHandle: op, useInsertionEffect: tp, useLayoutEffect: np, useMemo: lp, useReducer: Fl, useRef: ep, useState: function() {
  return Fl(to);
}, useDebugValue: Iu, useDeferredValue: function(e) {
  var t = ot();
  return ue === null ? t.memoizedState = e : sp(t, ue.memoizedState, e);
}, useTransition: function() {
  var e = Fl(to)[0], t = ot().memoizedState;
  return [e, t];
}, useMutableSource: Yf, useSyncExternalStore: Xf, useId: up, unstable_isNewReconciler: !1 };
function lt(e, t) {
  if (e && e.defaultProps) {
    t = ne({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ps(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ne({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Zi = { isMounted: function(e) {
  return (e = e._reactInternals) ? Mn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), o = Jt(e), i = Nt(r, o);
  i.payload = t, n != null && (i.callback = n), t = Gt(e, i, o), t !== null && (dt(t, e, o, r), Qo(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), o = Jt(e), i = Nt(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Gt(e, i, o), t !== null && (dt(t, e, o, r), Qo(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = $e(), r = Jt(e), o = Nt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Gt(e, o, r), t !== null && (dt(t, e, r, n), Qo(t, e, r));
} };
function oc(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Xr(n, r) || !Xr(o, i) : !0;
}
function fp(e, t, n) {
  var r = !1, o = tn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = rt(i) : (o = Ie(t) ? _n : Ce.current, r = t.contextTypes, i = (r = r != null) ? Jn(e, o) : tn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Zi, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function ic(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Zi.enqueueReplaceState(t, t.state, null);
}
function Ts(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Pu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = rt(i) : (i = Ie(t) ? _n : Ce.current, o.context = Jn(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ps(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Zi.enqueueReplaceState(o, o.state, null), Ei(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function nr(e, t) {
  try {
    var n = "", r = t;
    do
      n += $m(r), r = r.return;
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
function Ms(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var q0 = typeof WeakMap == "function" ? WeakMap : Map;
function pp(e, t, n) {
  n = Nt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Mi || (Mi = !0, As = r), Ms(e, t);
  }, n;
}
function hp(e, t, n) {
  n = Nt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Ms(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Ms(e, t), typeof r != "function" && (Zt === null ? Zt = /* @__PURE__ */ new Set([this]) : Zt.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function lc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new q0();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = py.bind(null, e, t, n), t.then(e, e));
}
function sc(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function uc(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Nt(-1, 1), t.tag = 2, Gt(n, t, 1))), n.lanes |= 1), e);
}
var ey = Ft.ReactCurrentOwner, Fe = !1;
function _e(e, t, n, r) {
  t.child = e === null ? Vf(t, null, n, r) : er(t, e.child, n, r);
}
function ac(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Kn(t, o), r = zu(e, t, n, r, i, o), n = Fu(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, jt(e, t, o)) : (q && n && ku(t), t.flags |= 1, _e(e, t, r, o), t.child);
}
function cc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Bu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, mp(e, t, i, r, o)) : (e = Jo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Xr, n(l, r) && e.ref === t.ref) return jt(e, t, o);
  }
  return t.flags |= 1, e = qt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function mp(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Xr(i, r) && e.ref === t.ref) if (Fe = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Fe = !0);
    else return t.lanes = e.lanes, jt(e, t, o);
  }
  return js(e, t, n, r, o);
}
function yp(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Y(Bn, We), We |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Y(Bn, We), We |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Y(Bn, We), We |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Y(Bn, We), We |= r;
  return _e(e, t, o, n), t.child;
}
function gp(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function js(e, t, n, r, o) {
  var i = Ie(n) ? _n : Ce.current;
  return i = Jn(t, i), Kn(t, o), n = zu(e, t, n, r, i, o), r = Fu(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, jt(e, t, o)) : (q && r && ku(t), t.flags |= 1, _e(e, t, n, o), t.child);
}
function dc(e, t, n, r, o) {
  if (Ie(n)) {
    var i = !0;
    xi(t);
  } else i = !1;
  if (Kn(t, o), t.stateNode === null) Ko(e, t), fp(t, n, r), Ts(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, s = t.memoizedProps;
    l.props = s;
    var u = l.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = rt(a) : (a = Ie(n) ? _n : Ce.current, a = Jn(t, a));
    var d = n.getDerivedStateFromProps, p = typeof d == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    p || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || u !== a) && ic(t, l, r, a), bt = !1;
    var m = t.memoizedState;
    l.state = m, Ei(t, r, l, o), u = t.memoizedState, s !== r || m !== u || Le.current || bt ? (typeof d == "function" && (Ps(t, n, d, r), u = t.memoizedState), (s = bt || oc(t, n, s, r, m, u, a)) ? (p || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), l.props = r, l.state = u, l.context = a, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, Hf(e, t), s = t.memoizedProps, a = t.type === t.elementType ? s : lt(t.type, s), l.props = a, p = t.pendingProps, m = l.context, u = n.contextType, typeof u == "object" && u !== null ? u = rt(u) : (u = Ie(n) ? _n : Ce.current, u = Jn(t, u));
    var y = n.getDerivedStateFromProps;
    (d = typeof y == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== p || m !== u) && ic(t, l, r, u), bt = !1, m = t.memoizedState, l.state = m, Ei(t, r, l, o);
    var g = t.memoizedState;
    s !== p || m !== g || Le.current || bt ? (typeof y == "function" && (Ps(t, n, y, r), g = t.memoizedState), (a = bt || oc(t, n, a, r, m, g, u) || !1) ? (d || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, g, u), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, g, u)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), l.props = r, l.state = g, l.context = u, r = a) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Rs(e, t, n, r, i, o);
}
function Rs(e, t, n, r, o, i) {
  gp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Ga(t, n, !1), jt(e, t, i);
  r = t.stateNode, ey.current = t;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = er(t, e.child, null, i), t.child = er(t, null, s, i)) : _e(e, t, s, i), t.memoizedState = r.state, o && Ga(t, n, !0), t.child;
}
function vp(e) {
  var t = e.stateNode;
  t.pendingContext ? Ka(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ka(e, t.context, !1), Tu(e, t.containerInfo);
}
function fc(e, t, n, r, o) {
  return qn(), Cu(o), t.flags |= 256, _e(e, t, n, r), t.child;
}
var zs = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function wp(e, t, n) {
  var r = t.pendingProps, o = ee.current, i = !1, l = (t.flags & 128) !== 0, s;
  if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Y(ee, o & 1), e === null)
    return $s(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = el(l, r, 0, null), e = Cn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Fs(n), t.memoizedState = zs, e) : Du(t, l));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return ty(e, t, l, r, s, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, s = o.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = qt(o, u), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = qt(s, i) : (i = Cn(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? Fs(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = zs, r;
  }
  return i = e.child, e = i.sibling, r = qt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Du(e, t) {
  return t = el({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function To(e, t, n, r) {
  return r !== null && Cu(r), er(t, e.child, null, n), e = Du(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function ty(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ll(Error(C(422))), To(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = el({ mode: "visible", children: r.children }, o, 0, null), i = Cn(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && er(t, e.child, null, l), t.child.memoizedState = Fs(l), t.memoizedState = zs, i);
  if (!(t.mode & 1)) return To(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
    return r = s, i = Error(C(419)), r = Ll(i, r, void 0), To(e, t, l, r);
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
    return Vu(), r = Ll(Error(C(421))), To(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = hy.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Xe = Kt(o.nextSibling), Ke = t, q = !0, ut = null, e !== null && (qe[et++] = Et, qe[et++] = $t, qe[et++] = En, Et = e.id, $t = e.overflow, En = t), t = Du(t, r.children), t.flags |= 4096, t);
}
function pc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ns(e.return, t, n);
}
function Il(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function xp(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (_e(e, t, r.children, n), r = ee.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && pc(e, n, t);
      else if (e.tag === 19) pc(e, n, t);
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
  if (Y(ee, r), !(t.mode & 1)) t.memoizedState = null;
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
  if (e !== null && (t.dependencies = e.dependencies), Nn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (e = t.child, n = qt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = qt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function ny(e, t, n) {
  switch (t.tag) {
    case 3:
      vp(t), qn();
      break;
    case 5:
      Qf(t);
      break;
    case 1:
      Ie(t.type) && xi(t);
      break;
    case 4:
      Tu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Y(Ci, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Y(ee, ee.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? wp(e, t, n) : (Y(ee, ee.current & 1), e = jt(e, t, n), e !== null ? e.sibling : null);
      Y(ee, ee.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return xp(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Y(ee, ee.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, yp(e, t, n);
  }
  return jt(e, t, n);
}
var kp, Ls, Sp, Cp;
kp = function(e, t) {
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
Ls = function() {
};
Sp = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, wn(xt.current);
    var i = null;
    switch (n) {
      case "input":
        o = rs(e, o), r = rs(e, r), i = [];
        break;
      case "select":
        o = ne({}, o, { value: void 0 }), r = ne({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = ls(e, o), r = ls(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = vi);
    }
    us(n, r);
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
      else a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (i = i || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Ur.hasOwnProperty(a) ? (u != null && a === "onScroll" && K("scroll", e), i || s === u || (i = [])) : (i = i || []).push(a, u));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Cp = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yr(e, t) {
  if (!q) switch (e.tailMode) {
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
function ry(e, t, n) {
  var r = t.pendingProps;
  switch (Su(t), t.tag) {
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
      return r = t.stateNode, tr(), Z(Le), Z(Ce), ju(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (No(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ut !== null && (Vs(ut), ut = null))), Ls(e, t), ke(t), null;
    case 5:
      Mu(t);
      var o = wn(qr.current);
      if (n = t.type, e !== null && t.stateNode != null) Sp(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return ke(t), null;
        }
        if (e = wn(xt.current), No(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[vt] = t, r[Zr] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              K("cancel", r), K("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              K("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Er.length; o++) K(Er[o], r);
              break;
            case "source":
              K("error", r);
              break;
            case "img":
            case "image":
            case "link":
              K(
                "error",
                r
              ), K("load", r);
              break;
            case "details":
              K("toggle", r);
              break;
            case "input":
              Sa(r, i), K("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, K("invalid", r);
              break;
            case "textarea":
              _a(r, i), K("invalid", r);
          }
          us(n, i), o = null;
          for (var l in i) if (i.hasOwnProperty(l)) {
            var s = i[l];
            l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && $o(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && $o(
              r.textContent,
              s,
              e
            ), o = ["children", "" + s]) : Ur.hasOwnProperty(l) && s != null && l === "onScroll" && K("scroll", r);
          }
          switch (n) {
            case "input":
              vo(r), Ca(r, i, !0);
              break;
            case "textarea":
              vo(r), Ea(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = vi);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Gd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[vt] = t, e[Zr] = r, kp(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = as(n, r), n) {
              case "dialog":
                K("cancel", e), K("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Er.length; o++) K(Er[o], e);
                o = r;
                break;
              case "source":
                K("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                K(
                  "error",
                  e
                ), K("load", e), o = r;
                break;
              case "details":
                K("toggle", e), o = r;
                break;
              case "input":
                Sa(e, r), o = rs(e, r), K("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ne({}, r, { value: void 0 }), K("invalid", e);
                break;
              case "textarea":
                _a(e, r), o = ls(e, r), K("invalid", e);
                break;
              default:
                o = r;
            }
            us(n, o), s = o;
            for (i in s) if (s.hasOwnProperty(i)) {
              var u = s[i];
              i === "style" ? qd(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Zd(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Wr(e, u) : typeof u == "number" && Wr(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ur.hasOwnProperty(i) ? u != null && i === "onScroll" && K("scroll", e) : u != null && su(e, i, u, l));
            }
            switch (n) {
              case "input":
                vo(e), Ca(e, r, !1);
                break;
              case "textarea":
                vo(e), Ea(e);
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
      if (e && t.stateNode != null) Cp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (n = wn(qr.current), wn(xt.current), No(t)) {
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
      if (Z(ee), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (q && Xe !== null && t.mode & 1 && !(t.flags & 128)) Uf(), qn(), t.flags |= 98560, i = !1;
        else if (i = No(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(C(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(C(317));
            i[vt] = t;
          } else qn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ke(t), i = !1;
        } else ut !== null && (Vs(ut), ut = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ee.current & 1 ? ae === 0 && (ae = 3) : Vu())), t.updateQueue !== null && (t.flags |= 4), ke(t), null);
    case 4:
      return tr(), Ls(e, t), e === null && Kr(t.stateNode.containerInfo), ke(t), null;
    case 10:
      return $u(t.type._context), ke(t), null;
    case 17:
      return Ie(t.type) && wi(), ke(t), null;
    case 19:
      if (Z(ee), i = t.memoizedState, i === null) return ke(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) yr(i, !1);
      else {
        if (ae !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = $i(e), l !== null) {
            for (t.flags |= 128, yr(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Y(ee, ee.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && le() > rr && (t.flags |= 128, r = !0, yr(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = $i(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), yr(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !q) return ke(t), null;
        } else 2 * le() - i.renderingStartTime > rr && n !== 1073741824 && (t.flags |= 128, r = !0, yr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = le(), t.sibling = null, n = ee.current, Y(ee, r ? n & 1 | 2 : n & 1), t) : (ke(t), null);
    case 22:
    case 23:
      return Wu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? We & 1073741824 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ke(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function oy(e, t) {
  switch (Su(t), t.tag) {
    case 1:
      return Ie(t.type) && wi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return tr(), Z(Le), Z(Ce), ju(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Mu(t), null;
    case 13:
      if (Z(ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(C(340));
        qn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Z(ee), null;
    case 4:
      return tr(), null;
    case 10:
      return $u(t.type._context), null;
    case 22:
    case 23:
      return Wu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Mo = !1, Se = !1, iy = typeof WeakSet == "function" ? WeakSet : Set, P = null;
function Vn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    re(e, t, r);
  }
  else n.current = null;
}
function Is(e, t, n) {
  try {
    n();
  } catch (r) {
    re(e, t, r);
  }
}
var hc = !1;
function ly(e, t) {
  if (ws = mi, e = Pf(), xu(e)) {
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
        var l = 0, s = -1, u = -1, a = 0, d = 0, p = e, m = null;
        t: for (; ; ) {
          for (var y; p !== n || o !== 0 && p.nodeType !== 3 || (s = l + o), p !== i || r !== 0 && p.nodeType !== 3 || (u = l + r), p.nodeType === 3 && (l += p.nodeValue.length), (y = p.firstChild) !== null; )
            m = p, p = y;
          for (; ; ) {
            if (p === e) break t;
            if (m === n && ++a === o && (s = l), m === i && ++d === r && (u = l), (y = p.nextSibling) !== null) break;
            p = m, m = p.parentNode;
          }
          p = y;
        }
        n = s === -1 || u === -1 ? null : { start: s, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (xs = { focusedElem: e, selectionRange: n }, mi = !1, P = t; P !== null; ) if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, P = e;
  else for (; P !== null; ) {
    t = P;
    try {
      var g = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (g !== null) {
            var x = g.memoizedProps, k = g.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : lt(t.type, x), k);
            f.__reactInternalSnapshotBeforeUpdate = c;
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
          throw Error(C(163));
      }
    } catch (w) {
      re(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, P = e;
      break;
    }
    P = t.return;
  }
  return g = hc, hc = !1, g;
}
function Ir(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Is(t, n, i);
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
function Ds(e) {
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
function _p(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, _p(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[vt], delete t[Zr], delete t[Cs], delete t[W0], delete t[V0])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ep(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function mc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ep(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Os(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = vi));
  else if (r !== 4 && (e = e.child, e !== null)) for (Os(e, t, n), e = e.sibling; e !== null; ) Os(e, t, n), e = e.sibling;
}
function bs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (bs(e, t, n), e = e.sibling; e !== null; ) bs(e, t, n), e = e.sibling;
}
var pe = null, st = !1;
function Lt(e, t, n) {
  for (n = n.child; n !== null; ) $p(e, t, n), n = n.sibling;
}
function $p(e, t, n) {
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
      pe !== null && (st ? (e = pe, n = n.stateNode, e.nodeType === 8 ? Tl(e.parentNode, n) : e.nodeType === 1 && Tl(e, n), Qr(e)) : Tl(pe, n.stateNode));
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
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && Is(n, t, l), o = o.next;
        } while (o !== r);
      }
      Lt(e, t, n);
      break;
    case 1:
      if (!Se && (Vn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        re(n, t, s);
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
function yc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new iy()), t.forEach(function(r) {
      var o = my.bind(null, e, r);
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
      if (pe === null) throw Error(C(160));
      $p(i, l, o), pe = null, st = !1;
      var u = o.alternate;
      u !== null && (u.return = null), o.return = null;
    } catch (a) {
      re(o, t, a);
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
          re(e, e.return, x);
        }
        try {
          Ir(5, e, e.return);
        } catch (x) {
          re(e, e.return, x);
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
          re(e, e.return, x);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, s = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          s === "input" && i.type === "radio" && i.name != null && Xd(o, i), as(s, l);
          var a = as(s, i);
          for (l = 0; l < u.length; l += 2) {
            var d = u[l], p = u[l + 1];
            d === "style" ? qd(o, p) : d === "dangerouslySetInnerHTML" ? Zd(o, p) : d === "children" ? Wr(o, p) : su(o, d, p, a);
          }
          switch (s) {
            case "input":
              os(o, i);
              break;
            case "textarea":
              Kd(o, i);
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
          re(e, e.return, x);
        }
      }
      break;
    case 6:
      if (it(t, e), pt(e), r & 4) {
        if (e.stateNode === null) throw Error(C(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (x) {
          re(e, e.return, x);
        }
      }
      break;
    case 3:
      if (it(t, e), pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Qr(t.containerInfo);
      } catch (x) {
        re(e, e.return, x);
      }
      break;
    case 4:
      it(t, e), pt(e);
      break;
    case 13:
      it(t, e), pt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Au = le())), r & 4 && yc(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Se = (a = Se) || d, it(t, e), Se = a) : it(t, e), pt(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !d && e.mode & 1) for (P = e, d = e.child; d !== null; ) {
          for (p = P = d; P !== null; ) {
            switch (m = P, y = m.child, m.tag) {
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
                    re(r, n, x);
                  }
                }
                break;
              case 5:
                Vn(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  vc(p);
                  continue;
                }
            }
            y !== null ? (y.return = m, P = y) : vc(p);
          }
          d = d.sibling;
        }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                o = p.stateNode, a ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = p.stateNode, u = p.memoizedProps.style, l = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = Jd("display", l));
              } catch (x) {
                re(e, e.return, x);
              }
            }
          } else if (p.tag === 6) {
            if (d === null) try {
              p.stateNode.nodeValue = a ? "" : p.memoizedProps;
            } catch (x) {
              re(e, e.return, x);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), p = p.return;
          }
          d === p && (d = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      it(t, e), pt(e), r & 4 && yc(e);
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
          if (Ep(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Wr(o, ""), r.flags &= -33);
          var i = mc(e);
          bs(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, s = mc(e);
          Os(e, s, l);
          break;
        default:
          throw Error(C(161));
      }
    } catch (u) {
      re(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function sy(e, t, n) {
  P = e, Pp(e);
}
function Pp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var o = P, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Mo;
      if (!l) {
        var s = o.alternate, u = s !== null && s.memoizedState !== null || Se;
        s = Mo;
        var a = Se;
        if (Mo = l, (Se = u) && !a) for (P = o; P !== null; ) l = P, u = l.child, l.tag === 22 && l.memoizedState !== null ? wc(o) : u !== null ? (u.return = l, P = u) : wc(o);
        for (; i !== null; ) P = i, Pp(i), i = i.sibling;
        P = o, Mo = s, Se = a;
      }
      gc(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, P = i) : gc(e);
  }
}
function gc(e) {
  for (; P !== null; ) {
    var t = P;
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
            i !== null && tc(t, i, r);
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
              tc(t, l, n);
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
                  var p = d.dehydrated;
                  p !== null && Qr(p);
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
            throw Error(C(163));
        }
        Se || t.flags & 512 && Ds(t);
      } catch (m) {
        re(t, t.return, m);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, P = n;
      break;
    }
    P = t.return;
  }
}
function vc(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, P = n;
      break;
    }
    P = t.return;
  }
}
function wc(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ji(4, t);
          } catch (u) {
            re(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              re(t, o, u);
            }
          }
          var i = t.return;
          try {
            Ds(t);
          } catch (u) {
            re(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Ds(t);
          } catch (u) {
            re(t, l, u);
          }
      }
    } catch (u) {
      re(t, t.return, u);
    }
    if (t === e) {
      P = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      s.return = t.return, P = s;
      break;
    }
    P = t.return;
  }
}
var uy = Math.ceil, Ti = Ft.ReactCurrentDispatcher, Ou = Ft.ReactCurrentOwner, nt = Ft.ReactCurrentBatchConfig, U = 0, fe = null, se = null, me = 0, We = 0, Bn = on(0), ae = 0, ro = null, Nn = 0, qi = 0, bu = 0, Dr = null, ze = null, Au = 0, rr = 1 / 0, Ct = null, Mi = !1, As = null, Zt = null, jo = !1, Vt = null, ji = 0, Or = 0, Us = null, Go = -1, Zo = 0;
function $e() {
  return U & 6 ? le() : Go !== -1 ? Go : Go = le();
}
function Jt(e) {
  return e.mode & 1 ? U & 2 && me !== 0 ? me & -me : H0.transition !== null ? (Zo === 0 && (Zo = ff()), Zo) : (e = B, e !== 0 || (e = window.event, e = e === void 0 ? 16 : wf(e.type)), e) : 1;
}
function dt(e, t, n, r) {
  if (50 < Or) throw Or = 0, Us = null, Error(C(185));
  ao(e, n, r), (!(U & 2) || e !== fe) && (e === fe && (!(U & 2) && (qi |= n), ae === 4 && Ut(e, me)), De(e, r), n === 1 && U === 0 && !(t.mode & 1) && (rr = le() + 500, Ki && ln()));
}
function De(e, t) {
  var n = e.callbackNode;
  Hm(e, t);
  var r = hi(e, e === fe ? me : 0);
  if (r === 0) n !== null && Pa(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Pa(n), t === 1) e.tag === 0 ? B0(xc.bind(null, e)) : Of(xc.bind(null, e)), A0(function() {
      !(U & 6) && ln();
    }), n = null;
    else {
      switch (pf(r)) {
        case 1:
          n = fu;
          break;
        case 4:
          n = cf;
          break;
        case 16:
          n = pi;
          break;
        case 536870912:
          n = df;
          break;
        default:
          n = pi;
      }
      n = Ip(n, Tp.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Tp(e, t) {
  if (Go = -1, Zo = 0, U & 6) throw Error(C(327));
  var n = e.callbackNode;
  if (Gn() && e.callbackNode !== n) return null;
  var r = hi(e, e === fe ? me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ri(e, r);
  else {
    t = r;
    var o = U;
    U |= 2;
    var i = jp();
    (fe !== e || me !== t) && (Ct = null, rr = le() + 500, Sn(e, t));
    do
      try {
        dy();
        break;
      } catch (s) {
        Mp(e, s);
      }
    while (!0);
    Eu(), Ti.current = i, U = o, se !== null ? t = 0 : (fe = null, me = 0, t = ae);
  }
  if (t !== 0) {
    if (t === 2 && (o = hs(e), o !== 0 && (r = o, t = Ws(e, o))), t === 1) throw n = ro, Sn(e, 0), Ut(e, r), De(e, le()), n;
    if (t === 6) Ut(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !ay(o) && (t = Ri(e, r), t === 2 && (i = hs(e), i !== 0 && (r = i, t = Ws(e, i))), t === 1)) throw n = ro, Sn(e, 0), Ut(e, r), De(e, le()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          fn(e, ze, Ct);
          break;
        case 3:
          if (Ut(e, r), (r & 130023424) === r && (t = Au + 500 - le(), 10 < t)) {
            if (hi(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              $e(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Ss(fn.bind(null, e, ze, Ct), t);
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
          if (r = o, r = le() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * uy(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ss(fn.bind(null, e, ze, Ct), r);
            break;
          }
          fn(e, ze, Ct);
          break;
        case 5:
          fn(e, ze, Ct);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return De(e, le()), e.callbackNode === n ? Tp.bind(null, e) : null;
}
function Ws(e, t) {
  var n = Dr;
  return e.current.memoizedState.isDehydrated && (Sn(e, t).flags |= 256), e = Ri(e, t), e !== 2 && (t = ze, ze = n, t !== null && Vs(t)), e;
}
function Vs(e) {
  ze === null ? ze = e : ze.push.apply(ze, e);
}
function ay(e) {
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
  for (t &= ~bu, t &= ~qi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ct(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function xc(e) {
  if (U & 6) throw Error(C(327));
  Gn();
  var t = hi(e, 0);
  if (!(t & 1)) return De(e, le()), null;
  var n = Ri(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = hs(e);
    r !== 0 && (t = r, n = Ws(e, r));
  }
  if (n === 1) throw n = ro, Sn(e, 0), Ut(e, t), De(e, le()), n;
  if (n === 6) throw Error(C(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, fn(e, ze, Ct), De(e, le()), null;
}
function Uu(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    U = n, U === 0 && (rr = le() + 500, Ki && ln());
  }
}
function Pn(e) {
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
function Wu() {
  We = Bn.current, Z(Bn);
}
function Sn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, b0(n)), se !== null) for (n = se.return; n !== null; ) {
    var r = n;
    switch (Su(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && wi();
        break;
      case 3:
        tr(), Z(Le), Z(Ce), ju();
        break;
      case 5:
        Mu(r);
        break;
      case 4:
        tr();
        break;
      case 13:
        Z(ee);
        break;
      case 19:
        Z(ee);
        break;
      case 10:
        $u(r.type._context);
        break;
      case 22:
      case 23:
        Wu();
    }
    n = n.return;
  }
  if (fe = e, se = e = qt(e.current, null), me = We = t, ae = 0, ro = null, bu = qi = Nn = 0, ze = Dr = null, vn !== null) {
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
function Mp(e, t) {
  do {
    var n = se;
    try {
      if (Eu(), Yo.current = Pi, Ni) {
        for (var r = te.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Ni = !1;
      }
      if ($n = 0, de = ue = te = null, Lr = !1, eo = 0, Ou.current = null, n === null || n.return === null) {
        ae = 1, ro = t, se = null;
        break;
      }
      e: {
        var i = e, l = n.return, s = n, u = t;
        if (t = me, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var a = u, d = s, p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = d.alternate;
            m ? (d.updateQueue = m.updateQueue, d.memoizedState = m.memoizedState, d.lanes = m.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var y = sc(l);
          if (y !== null) {
            y.flags &= -257, uc(y, l, s, i, t), y.mode & 1 && lc(i, a, t), t = y, u = a;
            var g = t.updateQueue;
            if (g === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(u), t.updateQueue = x;
            } else g.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              lc(i, a, t), Vu();
              break e;
            }
            u = Error(C(426));
          }
        } else if (q && s.mode & 1) {
          var k = sc(l);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), uc(k, l, s, i, t), Cu(nr(u, s));
            break e;
          }
        }
        i = u = nr(u, s), ae !== 4 && (ae = 2), Dr === null ? Dr = [i] : Dr.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var f = pp(i, u, t);
              ec(i, f);
              break e;
            case 1:
              s = u;
              var c = i.type, h = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Zt === null || !Zt.has(h)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = hp(i, s, t);
                ec(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      zp(n);
    } catch (S) {
      t = S, se === n && n !== null && (se = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function jp() {
  var e = Ti.current;
  return Ti.current = Pi, e === null ? Pi : e;
}
function Vu() {
  (ae === 0 || ae === 3 || ae === 2) && (ae = 4), fe === null || !(Nn & 268435455) && !(qi & 268435455) || Ut(fe, me);
}
function Ri(e, t) {
  var n = U;
  U |= 2;
  var r = jp();
  (fe !== e || me !== t) && (Ct = null, Sn(e, t));
  do
    try {
      cy();
      break;
    } catch (o) {
      Mp(e, o);
    }
  while (!0);
  if (Eu(), U = n, Ti.current = r, se !== null) throw Error(C(261));
  return fe = null, me = 0, ae;
}
function cy() {
  for (; se !== null; ) Rp(se);
}
function dy() {
  for (; se !== null && !Im(); ) Rp(se);
}
function Rp(e) {
  var t = Lp(e.alternate, e, We);
  e.memoizedProps = e.pendingProps, t === null ? zp(e) : se = t, Ou.current = null;
}
function zp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = oy(n, t), n !== null) {
        n.flags &= 32767, se = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ae = 6, se = null;
        return;
      }
    } else if (n = ry(n, t, We), n !== null) {
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
    nt.transition = null, B = 1, fy(e, t, n, r);
  } finally {
    nt.transition = o, B = r;
  }
  return null;
}
function fy(e, t, n, r) {
  do
    Gn();
  while (Vt !== null);
  if (U & 6) throw Error(C(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(C(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Qm(e, i), e === fe && (se = fe = null, me = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || jo || (jo = !0, Ip(pi, function() {
    return Gn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = nt.transition, nt.transition = null;
    var l = B;
    B = 1;
    var s = U;
    U |= 4, Ou.current = null, ly(e, n), Np(n, e), R0(xs), mi = !!ws, xs = ws = null, e.current = n, sy(n), Dm(), U = s, B = l, nt.transition = i;
  } else e.current = n;
  if (jo && (jo = !1, Vt = e, ji = o), i = e.pendingLanes, i === 0 && (Zt = null), Am(n.stateNode), De(e, le()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Mi) throw Mi = !1, e = As, As = null, e;
  return ji & 1 && e.tag !== 0 && Gn(), i = e.pendingLanes, i & 1 ? e === Us ? Or++ : (Or = 0, Us = e) : Or = 0, ln(), null;
}
function Gn() {
  if (Vt !== null) {
    var e = pf(ji), t = nt.transition, n = B;
    try {
      if (nt.transition = null, B = 16 > e ? 16 : e, Vt === null) var r = !1;
      else {
        if (e = Vt, Vt = null, ji = 0, U & 6) throw Error(C(331));
        var o = U;
        for (U |= 4, P = e.current; P !== null; ) {
          var i = P, l = i.child;
          if (P.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (P = a; P !== null; ) {
                  var d = P;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ir(8, d, i);
                  }
                  var p = d.child;
                  if (p !== null) p.return = d, P = p;
                  else for (; P !== null; ) {
                    d = P;
                    var m = d.sibling, y = d.return;
                    if (_p(d), d === a) {
                      P = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = y, P = m;
                      break;
                    }
                    P = y;
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
              P = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) l.return = i, P = l;
          else e: for (; P !== null; ) {
            if (i = P, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Ir(9, i, i.return);
            }
            var f = i.sibling;
            if (f !== null) {
              f.return = i.return, P = f;
              break e;
            }
            P = i.return;
          }
        }
        var c = e.current;
        for (P = c; P !== null; ) {
          l = P;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) h.return = l, P = h;
          else e: for (l = c; P !== null; ) {
            if (s = P, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Ji(9, s);
              }
            } catch (S) {
              re(s, s.return, S);
            }
            if (s === l) {
              P = null;
              break e;
            }
            var w = s.sibling;
            if (w !== null) {
              w.return = s.return, P = w;
              break e;
            }
            P = s.return;
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
function kc(e, t, n) {
  t = nr(n, t), t = pp(e, t, 1), e = Gt(e, t, 1), t = $e(), e !== null && (ao(e, 1, t), De(e, t));
}
function re(e, t, n) {
  if (e.tag === 3) kc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      kc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Zt === null || !Zt.has(r))) {
        e = nr(n, e), e = hp(t, e, 1), t = Gt(t, e, 1), e = $e(), t !== null && (ao(t, 1, e), De(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function py(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = $e(), e.pingedLanes |= e.suspendedLanes & n, fe === e && (me & n) === n && (ae === 4 || ae === 3 && (me & 130023424) === me && 500 > le() - Au ? Sn(e, 0) : bu |= n), De(e, t);
}
function Fp(e, t) {
  t === 0 && (e.mode & 1 ? (t = ko, ko <<= 1, !(ko & 130023424) && (ko = 4194304)) : t = 1);
  var n = $e();
  e = Mt(e, t), e !== null && (ao(e, t, n), De(e, n));
}
function hy(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Fp(e, n);
}
function my(e, t) {
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
      throw Error(C(314));
  }
  r !== null && r.delete(t), Fp(e, n);
}
var Lp;
Lp = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Le.current) Fe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Fe = !1, ny(e, t, n);
    Fe = !!(e.flags & 131072);
  }
  else Fe = !1, q && t.flags & 1048576 && bf(t, Si, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ko(e, t), e = t.pendingProps;
      var o = Jn(t, Ce.current);
      Kn(t, n), o = zu(null, t, r, e, o, n);
      var i = Fu();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ie(r) ? (i = !0, xi(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Pu(t), o.updater = Zi, t.stateNode = o, o._reactInternals = t, Ts(t, r, e, n), t = Rs(null, t, r, !0, i, n)) : (t.tag = 0, q && i && ku(t), _e(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ko(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = gy(r), e = lt(r, e), o) {
          case 0:
            t = js(null, t, r, e, n);
            break e;
          case 1:
            t = dc(null, t, r, e, n);
            break e;
          case 11:
            t = ac(null, t, r, e, n);
            break e;
          case 14:
            t = cc(null, t, r, lt(r.type, e), n);
            break e;
        }
        throw Error(C(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), js(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), dc(e, t, r, o, n);
    case 3:
      e: {
        if (vp(t), e === null) throw Error(C(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Hf(e, t), Ei(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = nr(Error(C(423)), t), t = fc(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = nr(Error(C(424)), t), t = fc(e, t, r, n, o);
          break e;
        } else for (Xe = Kt(t.stateNode.containerInfo.firstChild), Ke = t, q = !0, ut = null, n = Vf(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
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
      return Qf(t), e === null && $s(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, ks(r, o) ? l = null : i !== null && ks(r, i) && (t.flags |= 32), gp(e, t), _e(e, t, l, n), t.child;
    case 6:
      return e === null && $s(t), null;
    case 13:
      return wp(e, t, n);
    case 4:
      return Tu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = er(t, null, r, n) : _e(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), ac(e, t, r, o, n);
    case 7:
      return _e(e, t, t.pendingProps, n), t.child;
    case 8:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, Y(Ci, r._currentValue), r._currentValue = l, i !== null) if (ft(i.value, l)) {
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
                  u = Nt(-1, n & -n), u.tag = 2;
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
            if (l = i.return, l === null) throw Error(C(341));
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
      return r = t.type, o = lt(r, t.pendingProps), o = lt(r.type, o), cc(e, t, r, o, n);
    case 15:
      return mp(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), Ko(e, t), t.tag = 1, Ie(r) ? (e = !0, xi(t)) : e = !1, Kn(t, n), fp(t, r, o), Ts(t, r, o, n), Rs(null, t, r, !0, e, n);
    case 19:
      return xp(e, t, n);
    case 22:
      return yp(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Ip(e, t) {
  return af(e, t);
}
function yy(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function tt(e, t, n, r) {
  return new yy(e, t, n, r);
}
function Bu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function gy(e) {
  if (typeof e == "function") return Bu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === au) return 11;
    if (e === cu) return 14;
  }
  return 2;
}
function qt(e, t) {
  var n = e.alternate;
  return n === null ? (n = tt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Jo(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function") Bu(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case Fn:
      return Cn(n.children, o, i, t);
    case uu:
      l = 8, o |= 8;
      break;
    case ql:
      return e = tt(12, n, t, o | 2), e.elementType = ql, e.lanes = i, e;
    case es:
      return e = tt(13, n, t, o), e.elementType = es, e.lanes = i, e;
    case ts:
      return e = tt(19, n, t, o), e.elementType = ts, e.lanes = i, e;
    case Hd:
      return el(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Vd:
          l = 10;
          break e;
        case Bd:
          l = 9;
          break e;
        case au:
          l = 11;
          break e;
        case cu:
          l = 14;
          break e;
        case Ot:
          l = 16, r = null;
          break e;
      }
      throw Error(C(130, e == null ? e : typeof e, ""));
  }
  return t = tt(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Cn(e, t, n, r) {
  return e = tt(7, e, r, t), e.lanes = n, e;
}
function el(e, t, n, r) {
  return e = tt(22, e, r, t), e.elementType = Hd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Dl(e, t, n) {
  return e = tt(6, e, null, t), e.lanes = n, e;
}
function Ol(e, t, n) {
  return t = tt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function vy(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vl(0), this.expirationTimes = vl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Hu(e, t, n, r, o, i, l, s, u) {
  return e = new vy(e, t, n, s, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = tt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Pu(i), e;
}
function wy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: zn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Dp(e) {
  if (!e) return tn;
  e = e._reactInternals;
  e: {
    if (Mn(e) !== e || e.tag !== 1) throw Error(C(170));
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
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ie(n)) return Df(e, n, t);
  }
  return t;
}
function Op(e, t, n, r, o, i, l, s, u) {
  return e = Hu(n, r, !0, e, o, i, l, s, u), e.context = Dp(null), n = e.current, r = $e(), o = Jt(n), i = Nt(r, o), i.callback = t ?? null, Gt(n, i, o), e.current.lanes = o, ao(e, o, r), De(e, r), e;
}
function tl(e, t, n, r) {
  var o = t.current, i = $e(), l = Jt(o);
  return n = Dp(n), t.context === null ? t.context = n : t.pendingContext = n, t = Nt(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Gt(o, t, l), e !== null && (dt(e, o, l, i), Qo(e, o, l)), l;
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
function Sc(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Qu(e, t) {
  Sc(e, t), (e = e.alternate) && Sc(e, t);
}
function xy() {
  return null;
}
var bp = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Yu(e) {
  this._internalRoot = e;
}
nl.prototype.render = Yu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  tl(e, t, null, null);
};
nl.prototype.unmount = Yu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Pn(function() {
      tl(null, e, null, null);
    }), t[Tt] = null;
  }
};
function nl(e) {
  this._internalRoot = e;
}
nl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = yf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < At.length && t !== 0 && t < At[n].priority; n++) ;
    At.splice(n, 0, e), n === 0 && vf(e);
  }
};
function Xu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function rl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Cc() {
}
function ky(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var a = zi(l);
        i.call(a);
      };
    }
    var l = Op(t, r, e, 0, null, !1, !1, "", Cc);
    return e._reactRootContainer = l, e[Tt] = l.current, Kr(e.nodeType === 8 ? e.parentNode : e), Pn(), l;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var a = zi(u);
      s.call(a);
    };
  }
  var u = Hu(e, 0, !1, null, null, !1, !1, "", Cc);
  return e._reactRootContainer = u, e[Tt] = u.current, Kr(e.nodeType === 8 ? e.parentNode : e), Pn(function() {
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
  } else l = ky(n, t, e, o, r);
  return zi(l);
}
hf = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _r(t.pendingLanes);
        n !== 0 && (pu(t, n | 1), De(t, le()), !(U & 6) && (rr = le() + 500, ln()));
      }
      break;
    case 13:
      Pn(function() {
        var r = Mt(e, 1);
        if (r !== null) {
          var o = $e();
          dt(r, e, 1, o);
        }
      }), Qu(e, 1);
  }
};
hu = function(e) {
  if (e.tag === 13) {
    var t = Mt(e, 134217728);
    if (t !== null) {
      var n = $e();
      dt(t, e, 134217728, n);
    }
    Qu(e, 134217728);
  }
};
mf = function(e) {
  if (e.tag === 13) {
    var t = Jt(e), n = Mt(e, t);
    if (n !== null) {
      var r = $e();
      dt(n, e, t, r);
    }
    Qu(e, t);
  }
};
yf = function() {
  return B;
};
gf = function(e, t) {
  var n = B;
  try {
    return B = e, t();
  } finally {
    B = n;
  }
};
ds = function(e, t, n) {
  switch (t) {
    case "input":
      if (os(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Xi(r);
            if (!o) throw Error(C(90));
            Yd(r), os(r, o);
          }
        }
      }
      break;
    case "textarea":
      Kd(e, n);
      break;
    case "select":
      t = n.value, t != null && Hn(e, !!n.multiple, t, !1);
  }
};
nf = Uu;
rf = Pn;
var Sy = { usingClientEntryPoint: !1, Events: [fo, On, Xi, ef, tf, Uu] }, gr = { findFiberByHostInstance: gn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Cy = { bundleType: gr.bundleType, version: gr.version, rendererPackageName: gr.rendererPackageName, rendererConfig: gr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ft.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = sf(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: gr.findFiberByHostInstance || xy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ro = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ro.isDisabled && Ro.supportsFiber) try {
    Bi = Ro.inject(Cy), wt = Ro;
  } catch {
  }
}
Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sy;
Ze.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xu(t)) throw Error(C(200));
  return wy(e, t, null, n);
};
Ze.createRoot = function(e, t) {
  if (!Xu(e)) throw Error(C(299));
  var n = !1, r = "", o = bp;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Hu(e, 1, !1, null, null, n, !1, r, o), e[Tt] = t.current, Kr(e.nodeType === 8 ? e.parentNode : e), new Yu(t);
};
Ze.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","), Error(C(268, e)));
  return e = sf(t), e = e === null ? null : e.stateNode, e;
};
Ze.flushSync = function(e) {
  return Pn(e);
};
Ze.hydrate = function(e, t, n) {
  if (!rl(t)) throw Error(C(200));
  return ol(null, e, t, !0, n);
};
Ze.hydrateRoot = function(e, t, n) {
  if (!Xu(e)) throw Error(C(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = bp;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Op(t, null, e, 1, n ?? null, o, !1, i, l), e[Tt] = t.current, Kr(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new nl(t);
};
Ze.render = function(e, t, n) {
  if (!rl(t)) throw Error(C(200));
  return ol(null, e, t, !1, n);
};
Ze.unmountComponentAtNode = function(e) {
  if (!rl(e)) throw Error(C(40));
  return e._reactRootContainer ? (Pn(function() {
    ol(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Tt] = null;
    });
  }), !0) : !1;
};
Ze.unstable_batchedUpdates = Uu;
Ze.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!rl(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return ol(e, t, n, !1, r);
};
Ze.version = "18.3.1-next-f1338f8080-20240426";
function Ap() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ap);
    } catch (e) {
      console.error(e);
    }
}
Ap(), bd.exports = Ze;
var Up = bd.exports, Ku, _c = Up;
Ku = _c.createRoot, _c.hydrateRoot;
var _y = Object.defineProperty, Ey = (e, t, n) => t in e ? _y(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, zo = (e, t, n) => Ey(e, typeof t != "symbol" ? t + "" : t, n);
const $y = {
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
function Ty(e) {
  return e.replace(
    /([a-z0-9])([A-Z])/g,
    (t, n, r) => `${n}-${r.toLowerCase()}`
  );
}
function Wp(e) {
  return e.replace(/[-:]([a-z])/g, (t, n) => `${n.toUpperCase()}`);
}
const My = {
  stringify: (e) => e.name,
  parse: (e, t, n) => {
    const r = (() => {
      const o = Wp(t);
      if (typeof n < "u" && o in n.container)
        return n.container[o];
    })();
    return typeof r == "function" ? r.bind(n) : void 0;
  }
}, jy = {
  stringify: (e) => `${e}`,
  parse: (e) => parseFloat(e)
}, Ry = {
  stringify: (e) => e,
  parse: (e) => e
}, bl = {
  string: Ry,
  number: jy,
  boolean: $y,
  function: Ny,
  method: My,
  json: Py
}, vr = Symbol.for("r2wc.render"), Fo = Symbol.for("r2wc.connected"), an = Symbol.for("r2wc.context"), be = Symbol.for("r2wc.props");
function zy(e, t, n) {
  var r, o, i;
  t.props || (t.props = e.propTypes ? Object.keys(e.propTypes) : []), t.events || (t.events = []);
  const l = Array.isArray(t.props) ? t.props.slice() : Object.keys(t.props), s = Array.isArray(t.events) ? t.events.slice() : Object.keys(t.events), u = {}, a = {}, d = {}, p = {};
  for (const y of l) {
    u[y] = Array.isArray(t.props) ? "string" : t.props[y];
    const g = Ty(y);
    d[y] = g, p[g] = y;
  }
  for (const y of s)
    a[y] = Array.isArray(t.events) ? {} : t.events[y];
  class m extends HTMLElement {
    constructor() {
      super(), zo(this, i, !0), zo(this, o), zo(this, r, {}), zo(this, "container"), t.shadow ? this.container = this.attachShadow({
        mode: t.shadow
      }) : this.container = this, this[be].container = this.container;
      for (const g of l) {
        const x = d[g], k = this.getAttribute(x), f = u[g], c = f ? bl[f] : null;
        if (f === "method") {
          const h = Wp(x);
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
      return Object.keys(p);
    }
    connectedCallback() {
      this[Fo] = !0, this[vr]();
    }
    disconnectedCallback() {
      this[Fo] = !1, this[an] && n.unmount(this[an]), delete this[an];
    }
    attributeChangedCallback(g, x, k) {
      const f = p[g], c = u[f], h = c ? bl[c] : null;
      f in u && h != null && h.parse && k && (this[be][f] = h.parse(k, g, this), this[vr]());
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
        const f = x ? bl[x] : null;
        if (f != null && f.stringify) {
          const c = f.stringify(k, g, this);
          this.getAttribute(g) !== c && this.setAttribute(g, c);
        } else
          this[vr]();
      }
    });
  }
  return m;
}
function Fy(e, t, n) {
  const r = Ku(e), o = Ye.createElement(t, n);
  return r.render(o), {
    root: r,
    ReactComponent: t
  };
}
function Ly({ root: e, ReactComponent: t }, n) {
  const r = Ye.createElement(t, n);
  e.render(r);
}
function Iy({ root: e }) {
  e.unmount();
}
function Dy(e, t = {}) {
  return zy(e, t, { mount: Fy, update: Ly, unmount: Iy });
}
var Vp = { exports: {} }, il = {};
var Oy = j, by = Symbol.for("react.element"), Ay = Symbol.for("react.fragment"), Uy = Object.prototype.hasOwnProperty, Wy = Oy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Vy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bp(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Uy.call(t, r) && !Vy.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: by, type: e, key: i, ref: l, props: o, _owner: Wy.current };
}
il.Fragment = Ay;
il.jsx = Bp;
il.jsxs = Bp;
Vp.exports = il;
var v = Vp.exports;
var By = {
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
const Hy = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), J = (e, t) => {
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
        ...By,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: l ? Number(i) * 24 / Number(o) : i,
        className: ["lucide", `lucide-${Hy(e)}`, s].join(" "),
        ...a
      },
      [
        ...t.map(([p, m]) => j.createElement(p, m)),
        ...Array.isArray(u) ? u : [u]
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
const Hp = J("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
const Qy = J("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const Yy = J("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const Xy = J("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
]);
const Ky = J("CheckCheck", [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
]);
const Gy = J("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Zy = J("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
const Jy = J("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
const Qp = J("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
const qy = J("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
const eg = J("MicOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2", key: "80xlxr" }],
  ["path", { d: "M5 10v2a7 7 0 0 0 12 5", key: "p2k8kg" }],
  ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
  ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
]);
const tg = J("Mic", [
  ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
]);
const ng = J("Minimize2", [
  ["polyline", { points: "4 14 10 14 10 20", key: "11kfnr" }],
  ["polyline", { points: "20 10 14 10 14 4", key: "rlmsce" }],
  ["line", { x1: "14", x2: "21", y1: "10", y2: "3", key: "o5lafz" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
const rg = J("MoreVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);
const og = J("Paperclip", [
  [
    "path",
    {
      d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
      key: "1u3ebp"
    }
  ]
]);
const Ec = J("Pause", [
  ["rect", { width: "4", height: "16", x: "6", y: "4", key: "iffhe4" }],
  ["rect", { width: "4", height: "16", x: "14", y: "4", key: "sjin7j" }]
]);
const $c = J("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
const ig = J("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const lg = J("Power", [
  ["path", { d: "M12 2v10", key: "mnfbl" }],
  ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
]);
const sg = J("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
const ug = J("Smile", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);
const ag = J("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
const cg = J("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
const dg = J("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
const Yp = J("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function fg({ isOpen: e, onClick: t, config: n }) {
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
      children: e ? /* @__PURE__ */ v.jsx(Yp, { className: "h-6 w-6" }) : /* @__PURE__ */ v.jsx(Qp, { className: "h-6 w-6" })
    }
  );
}
const Lo = 43200, Nc = 1440, Pc = Symbol.for("constructDateFrom");
function Gu(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Pc in e ? e[Pc](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function nn(e, t) {
  return Gu(e, e);
}
let pg = {};
function hg() {
  return pg;
}
function Tc(e) {
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
function Zu(e, ...t) {
  const n = Gu.bind(
    null,
    e || t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function qo(e, t) {
  const n = +nn(e) - +nn(t);
  return n < 0 ? -1 : n > 0 ? 1 : n;
}
function mg(e) {
  return Gu(e, Date.now());
}
function yg(e, t, n) {
  const [r, o] = Zu(
    n == null ? void 0 : n.in,
    e,
    t
  ), i = r.getFullYear() - o.getFullYear(), l = r.getMonth() - o.getMonth();
  return i * 12 + l;
}
function gg(e) {
  return (t) => {
    const r = (e ? Math[e] : Math.trunc)(t);
    return r === 0 ? 0 : r;
  };
}
function vg(e, t) {
  return +nn(e) - +nn(t);
}
function wg(e, t) {
  const n = nn(e);
  return n.setHours(23, 59, 59, 999), n;
}
function xg(e, t) {
  const n = nn(e), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function kg(e, t) {
  const n = nn(e);
  return +wg(n) == +xg(n);
}
function Sg(e, t, n) {
  const [r, o, i] = Zu(
    n == null ? void 0 : n.in,
    e,
    e,
    t
  ), l = qo(o, i), s = Math.abs(
    yg(o, i)
  );
  if (s < 1) return 0;
  o.getMonth() === 1 && o.getDate() > 27 && o.setDate(30), o.setMonth(o.getMonth() - l * s);
  let u = qo(o, i) === -l;
  kg(r) && s === 1 && qo(r, i) === 1 && (u = !1);
  const a = l * (s - +u);
  return a === 0 ? 0 : a;
}
function Cg(e, t, n) {
  const r = vg(e, t) / 1e3;
  return gg(n == null ? void 0 : n.roundingMethod)(r);
}
const _g = {
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
}, Eg = (e, t, n) => {
  let r;
  const o = _g[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Al(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const $g = {
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
}, Tg = {
  date: Al({
    formats: $g,
    defaultWidth: "full"
  }),
  time: Al({
    formats: Ng,
    defaultWidth: "full"
  }),
  dateTime: Al({
    formats: Pg,
    defaultWidth: "full"
  })
}, Mg = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, jg = (e, t, n, r) => Mg[e];
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
const Rg = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, zg = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Fg = {
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
}, Lg = {
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
}, Ig = {
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
}, Dg = {
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
}, Og = (e, t) => {
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
}, bg = {
  ordinalNumber: Og,
  era: wr({
    values: Rg,
    defaultWidth: "wide"
  }),
  quarter: wr({
    values: zg,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: wr({
    values: Fg,
    defaultWidth: "wide"
  }),
  day: wr({
    values: Lg,
    defaultWidth: "wide"
  }),
  dayPeriod: wr({
    values: Ig,
    defaultWidth: "wide",
    formattingValues: Dg,
    defaultFormattingWidth: "wide"
  })
};
function xr(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const l = i[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(s) ? Ug(s, (p) => p.test(l)) : (
      // [TODO] -- I challenge you to fix the type
      Ag(s, (p) => p.test(l))
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
function Ag(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Ug(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Wg(e) {
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
const Vg = /^(\d+)(th|st|nd|rd)?/i, Bg = /\d+/i, Hg = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Qg = {
  any: [/^b/i, /^(a|c)/i]
}, Yg = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Xg = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Kg = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Gg = {
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
}, Zg = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Jg = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, qg = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, e1 = {
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
}, t1 = {
  ordinalNumber: Wg({
    matchPattern: Vg,
    parsePattern: Bg,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: xr({
    matchPatterns: Hg,
    defaultMatchWidth: "wide",
    parsePatterns: Qg,
    defaultParseWidth: "any"
  }),
  quarter: xr({
    matchPatterns: Yg,
    defaultMatchWidth: "wide",
    parsePatterns: Xg,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: xr({
    matchPatterns: Kg,
    defaultMatchWidth: "wide",
    parsePatterns: Gg,
    defaultParseWidth: "any"
  }),
  day: xr({
    matchPatterns: Zg,
    defaultMatchWidth: "wide",
    parsePatterns: Jg,
    defaultParseWidth: "any"
  }),
  dayPeriod: xr({
    matchPatterns: qg,
    defaultMatchWidth: "any",
    parsePatterns: e1,
    defaultParseWidth: "any"
  })
}, n1 = {
  code: "en-US",
  formatDistance: Eg,
  formatLong: Tg,
  formatRelative: jg,
  localize: bg,
  match: t1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function r1(e, t, n) {
  const r = hg(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? n1, i = 2520, l = qo(e, t);
  if (isNaN(l)) throw new RangeError("Invalid time value");
  const s = Object.assign({}, n, {
    addSuffix: n == null ? void 0 : n.addSuffix,
    comparison: l
  }), [u, a] = Zu(
    n == null ? void 0 : n.in,
    ...l > 0 ? [t, e] : [e, t]
  ), d = Cg(a, u), p = (Tc(a) - Tc(u)) / 1e3, m = Math.round((d - p) / 60);
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
  if (y = Sg(a, u), y < 12) {
    const g = Math.round(m / Lo);
    return o.formatDistance("xMonths", g, s);
  } else {
    const g = y % 12, x = Math.trunc(y / 12);
    return g < 3 ? o.formatDistance("aboutXYears", x, s) : g < 9 ? o.formatDistance("overXYears", x, s) : o.formatDistance("almostXYears", x + 1, s);
  }
}
function o1(e, t) {
  return r1(e, mg(e), t);
}
function i1({
  onClose: e,
  onToggleMaximize: t,
  isMaximized: n,
  isConnected: r,
  operators: o,
  lastActive: i,
  currentView: l,
  onBackToChat: s,
  onStartNewChat: u,
  onEndChat: a,
  onViewRecentChats: d,
  config: p
}) {
  const [m, y] = j.useState(!1), g = () => {
    switch (l) {
      case "recent-chats":
        return "Recent chats";
      default:
        return p.name;
    }
  }, x = () => o.length > 0 ? "Online" : i ? `Last active ${o1(i, {
    addSuffix: !0
  })}` : "Offline", k = l !== "chat", f = l === "chat";
  return /* @__PURE__ */ v.jsx(
    "div",
    {
      style: { backgroundColor: p.color },
      className: "p-6 rounded-t-lg text-white",
      children: /* @__PURE__ */ v.jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-3", children: [
          k && /* @__PURE__ */ v.jsx(
            "button",
            {
              onClick: s,
              className: "p-1 hover:bg-white/10 rounded-full transition-colors",
              children: /* @__PURE__ */ v.jsx(Qy, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ v.jsxs("div", { children: [
            /* @__PURE__ */ v.jsx("h3", { className: "font-semibold text-lg", children: g() }),
            f && /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
              /* @__PURE__ */ v.jsx(
                "div",
                {
                  className: `w-2 h-2 rounded-full ${o.length > 0 ? "bg-green-400" : "bg-red-400"}`
                }
              ),
              /* @__PURE__ */ v.jsx("p", { className: "text-sm opacity-90", children: x() })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ v.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ v.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ v.jsx(
            "button",
            {
              onClick: () => y(!m),
              className: "p-2 hover:bg-white/10 rounded-full transition-colors",
              children: /* @__PURE__ */ v.jsx(rg, { className: "h-4 w-4" })
            }
          ),
          m && /* @__PURE__ */ v.jsxs("div", { className: "absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg py-2 min-w-48 z-50", children: [
            /* @__PURE__ */ v.jsxs(
              "button",
              {
                onClick: () => {
                  u(), y(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ v.jsx(ig, { className: "h-4 w-4" }),
                  "Start New Chat"
                ]
              }
            ),
            /* @__PURE__ */ v.jsxs(
              "button",
              {
                onClick: () => {
                  a(), y(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ v.jsx(lg, { className: "h-4 w-4" }),
                  "End Chat"
                ]
              }
            ),
            /* @__PURE__ */ v.jsxs(
              "button",
              {
                onClick: () => {
                  d(), y(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ v.jsx(qy, { className: "h-4 w-4" }),
                  "View Recent Chats"
                ]
              }
            ),
            /* @__PURE__ */ v.jsx("hr", {}),
            /* @__PURE__ */ v.jsx(
              "button",
              {
                onClick: () => {
                  t(), y(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: n ? /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                  /* @__PURE__ */ v.jsx(ng, { className: "h-4 w-4" }),
                  " Minimize"
                ] }) : /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                  /* @__PURE__ */ v.jsx(Jy, { className: "h-4 w-4" }),
                  " Maximize"
                ] })
              }
            ),
            /* @__PURE__ */ v.jsxs(
              "button",
              {
                onClick: () => {
                  e(), y(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ v.jsx(Yp, { className: "h-4 w-4" }),
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
function l1({
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
        return /* @__PURE__ */ v.jsx(Gy, { className: "w-3 h-3 text-gray-500" });
      case "read":
        return /* @__PURE__ */ v.jsx(Ky, { className: "w-3 h-3 text-blue-500" });
      case "failed":
        return /* @__PURE__ */ v.jsx(Hp, { className: "w-3 h-3 text-red-500" });
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
function Xp({ onSubmit: e, config: t }) {
  var a;
  const n = (t.fields || []).reduce((d, p) => (d[p] = "", d), {}), [r, o] = j.useState(n), [i, l] = j.useState(!1), s = (d, p) => {
    o((m) => ({ ...m, [d]: p }));
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
        onChange: (p) => s(d, p.target.value),
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
        children: /* @__PURE__ */ v.jsx(Yy, { className: "h-4 w-4" })
      }
    )
  ] }) }) });
}
function s1({
  messages: e,
  onFormSubmit: t,
  config: n,
  onSendMessage: r
}) {
  const o = j.useRef(null);
  j.useEffect(() => {
    var l;
    (l = o.current) == null || l.scrollIntoView({ behavior: "smooth" });
  }, [e]);
  const i = (l) => {
    var s, u, a;
    if ((s = l.file) != null && s.url) {
      const d = (u = l.file.type) == null ? void 0 : u.startsWith("image/"), p = (a = l.file.type) == null ? void 0 : a.startsWith("audio/");
      return d ? /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsx(
        "img",
        {
          src: l.file.url,
          alt: l.file.name,
          className: "max-w-xs rounded-lg mb-2"
        }
      ) }) : p ? /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsxs("audio", { controls: !0, className: "max-w-xs mb-2 p-2 max-w-[200px]", children: [
        /* @__PURE__ */ v.jsx("source", { src: l.file.url, type: l.file.type }),
        "Your browser does not support the audio element."
      ] }) }) : /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsx(
        "a",
        {
          href: l.file.url,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-blue-500 hover:text-blue-700 underline",
          download: !0,
          children: l.file.name
        }
      ) });
    } else if (l.type === "form")
      return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ v.jsx("span", { children: l.content }),
        /* @__PURE__ */ v.jsx(Xp, { onSubmit: t, config: n })
      ] });
    return l.content;
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "flex-1 overflow-y-auto p-6 space-y-4", children: [
    e.map((l, s) => /* @__PURE__ */ v.jsx(
      "div",
      {
        className: `flex ${l.from === "user" ? "justify-end" : "justify-start"}`,
        children: /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col gap-1 overflow-hidden", children: [
          /* @__PURE__ */ v.jsx(
            "div",
            {
              className: `rounded-2xl ${l.type === "text" || l.type === "form" ? l.from === "user" ? "p-4 bg-blue-500 text-white rounded-br-sm" : "p-4 bg-gray-100 text-gray-800 rounded-bl-sm" : ""}`,
              children: i(l)
            }
          ),
          /* @__PURE__ */ v.jsx("div", { className: "px-2", children: /* @__PURE__ */ v.jsx(
            l1,
            {
              status: l.from === "user" ? l.status : void 0,
              timestamp: l.timestamp,
              onRetry: l.status === "failed" ? () => r(l) : void 0
            }
          ) })
        ] })
      },
      l.id || s
    )),
    /* @__PURE__ */ v.jsx("div", { ref: o })
  ] });
}
const u1 = [
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
function a1({ onEmojiSelect: e, onClose: t }) {
  return /* @__PURE__ */ v.jsx("div", { className: "absolute bottom-full left-0 mb-2 bg-white border rounded-lg shadow-lg p-3 w-64 max-h-48 overflow-y-auto z-50", children: /* @__PURE__ */ v.jsx("div", { className: "grid grid-cols-8 gap-1", children: u1.map((n, r) => /* @__PURE__ */ v.jsx(
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
function c1({ onAudioRecorded: e, config: t }) {
  const [n, r] = j.useState(!1), [o, i] = j.useState(!1), [l, s] = j.useState(0), [u, a] = j.useState(null), [d, p] = j.useState(!1), [m, y] = j.useState(null), g = j.useRef(null), x = j.useRef([]), k = j.useRef(null), f = j.useRef(null), c = j.useRef(null);
  j.useEffect(() => () => {
    k.current && clearInterval(k.current), c.current && c.current.getTracks().forEach((b) => b.stop());
  }, []);
  const h = async () => {
    try {
      const b = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      return c.current = b, y(!0), !0;
    } catch (b) {
      return console.error("Microphone permission denied:", b), y(!1), !1;
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
  }, S = () => {
    g.current && g.current.state === "recording" && (g.current.pause(), i(!0), k.current && clearInterval(k.current));
  }, E = () => {
    g.current && g.current.state === "paused" && (g.current.resume(), i(!1), k.current = setInterval(() => {
      s((b) => b + 1);
    }, 1e3));
  }, N = () => {
    g.current && g.current.state !== "inactive" && (g.current.stop(), r(!1), i(!1), k.current && clearInterval(k.current));
  }, T = () => {
    if (u && !d) {
      const b = URL.createObjectURL(u);
      f.current = new Audio(b), f.current.onended = () => {
        p(!1), URL.revokeObjectURL(b);
      }, f.current.play(), p(!0);
    } else f.current && d && (f.current.pause(), p(!1));
  }, W = () => {
    if (u) {
      const b = new File([u], "recording.wav", {
        type: "audio/wav"
      });
      e(b), a(null), s(0), p(!1);
    }
  }, R = () => {
    n && N(), a(null), s(0), p(!1), c.current && (c.current.getTracks().forEach((b) => b.stop()), c.current = null);
  }, oe = (b) => {
    const we = Math.floor(b / 60), Oe = b % 60;
    return `${we}:${Oe.toString().padStart(2, "0")}`;
  };
  return m === !1 ? /* @__PURE__ */ v.jsx(
    "button",
    {
      type: "button",
      onClick: h,
      className: "p-2 text-gray-400 hover:text-gray-600 transition-colors",
      title: "Microphone access denied. Click to retry.",
      children: /* @__PURE__ */ v.jsx(eg, { className: "h-5 w-5" })
    }
  ) : n || u ? /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2", children: [
    n && /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ v.jsx("div", { className: "w-2 h-2 bg-red-500 rounded-full animate-pulse" }),
      /* @__PURE__ */ v.jsx("span", { className: "text-xs text-gray-600 min-w-[32px]", children: oe(l) })
    ] }),
    u && /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ v.jsx(
        "button",
        {
          onClick: T,
          className: "p-1 text-gray-600 hover:text-gray-800 transition-colors",
          title: d ? "Pause" : "Play",
          children: d ? /* @__PURE__ */ v.jsx(Ec, { className: "h-4 w-4" }) : /* @__PURE__ */ v.jsx($c, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ v.jsx("span", { className: "text-xs text-gray-600 min-w-[32px]", children: oe(l) })
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-1", children: [
      n && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: o ? E : S,
            className: "p-1 text-gray-600 hover:text-gray-800 transition-colors",
            title: o ? "Resume" : "Pause",
            children: o ? /* @__PURE__ */ v.jsx($c, { className: "h-4 w-4" }) : /* @__PURE__ */ v.jsx(Ec, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: N,
            className: "p-1 text-red-600 hover:text-red-800 transition-colors",
            title: "Stop recording",
            children: /* @__PURE__ */ v.jsx(ag, { className: "h-4 w-4" })
          }
        )
      ] }),
      u && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: W,
            style: { backgroundColor: t.color },
            className: "px-2 py-1 text-white text-xs rounded hover:opacity-90 transition-opacity",
            title: "Send audio",
            children: "Send"
          }
        ),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: R,
            className: "p-1 text-gray-600 hover:text-red-600 transition-colors",
            title: "Delete recording",
            children: /* @__PURE__ */ v.jsx(cg, { className: "h-4 w-4" })
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
      children: /* @__PURE__ */ v.jsx(tg, { className: "h-5 w-5" })
    }
  );
}
function d1({
  ticketdeskId: e,
  selectedSession: t,
  config: n,
  onSendMessage: r,
  onError: o
}) {
  const [, i] = e.split("_"), [l, s] = j.useState(""), [u, a] = j.useState(!1), d = j.useRef(null), [p, m] = j.useState(!1), y = (h) => {
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
    const S = await fetch(
      `https://api.ticketdesk.ai/v1/uploader?session_id=${t == null ? void 0 : t.session_id}&site_id=${i}`,
      {
        method: "POST",
        body: w
      }
    ), E = await S.json();
    if (!S.ok)
      throw new Error(E.message);
    return E;
  }, k = async (h) => {
    m(!0);
    try {
      const w = await x(h);
      if (w && typeof w != "object") return;
      const S = {
        from: "user",
        content: h.name,
        type: h.type === "audio/wav" ? "audio" : h.type.startsWith("image/") ? "image" : "file",
        timestamp: Date.now(),
        status: "sent",
        file: w
      };
      r(S);
    } catch (w) {
      o(`File upload failed: ${w}`);
    } finally {
      m(!1), d.current && (d.current.value = "");
    }
  }, f = (h) => {
    var S;
    const w = (S = h.target.files) == null ? void 0 : S[0];
    w && k(w);
  }, c = async (h) => {
    const S = Array.from(h.clipboardData.items)[0];
    if (S.type.indexOf("image") !== -1 || S.kind === "file") {
      h.preventDefault();
      const E = S.getAsFile();
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
          disabled: p
        }
      ),
      /* @__PURE__ */ v.jsx(
        "button",
        {
          type: "submit",
          style: { backgroundColor: n.color },
          className: "p-3 text-white rounded-full hover:opacity-90 transition-opacity",
          disabled: !l.trim(),
          children: /* @__PURE__ */ v.jsx(sg, { className: "h-5 w-5" })
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
            children: /* @__PURE__ */ v.jsx(og, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ v.jsx(c1, { onAudioRecorded: k, config: n }),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            type: "button",
            onClick: () => a(!u),
            className: "p-2 text-gray-500 hover:text-gray-700 transition-colors rounded-full",
            children: /* @__PURE__ */ v.jsx(ug, { className: "h-4 w-4" })
          }
        ),
        u && /* @__PURE__ */ v.jsx(
          a1,
          {
            onEmojiSelect: g,
            onClose: () => a(!1)
          }
        ),
        p && /* @__PURE__ */ v.jsx("span", { className: "text-sm text-gray-700", children: "Uploading..." })
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
          onChange: f,
          className: "hidden",
          accept: "image/*,audio/*,.pdf,.doc,.docx,.txt,.xls,.xlsx,.csv,.tsv,.xlsm"
        }
      )
    ] })
  ] });
}
function f1({
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
    /* @__PURE__ */ v.jsx(Qp, { className: "h-12 w-12 mb-4 opacity-50" }),
    /* @__PURE__ */ v.jsx("p", { children: "No recent chats found" })
  ] }) : /* @__PURE__ */ v.jsx("div", { className: "divide-y", children: e.map((o) => /* @__PURE__ */ v.jsxs(
    "button",
    {
      onClick: () => t(o.session_id),
      className: "w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors text-left",
      children: [
        /* @__PURE__ */ v.jsx("div", { className: "flex-shrink-0", children: o.last_message_from === "user" ? /* @__PURE__ */ v.jsx(dg, { className: "h-8 w-8 text-gray-400" }) : /* @__PURE__ */ v.jsx(Xy, { className: "h-8 w-8 text-indigo-500" }) }),
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
function p1({ onFormSubmit: e, config: t }) {
  const [n, r] = j.useState(!1);
  return /* @__PURE__ */ v.jsx("div", { className: "px-6 py-3 bg-yellow-50 border-t border-yellow-200", children: n ? /* @__PURE__ */ v.jsx(
    Xp,
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
        /* @__PURE__ */ v.jsx(Zy, { className: "h-4 w-4 text-yellow-600" }),
        /* @__PURE__ */ v.jsxs("span", { className: "text-sm flex-1", children: [
          /* @__PURE__ */ v.jsx("span", { className: "text-blue-600", children: "Click here" }),
          " to set your email to get notifications"
        ] })
      ]
    }
  ) });
}
function h1({
  ticketdeskId: e,
  isOpen: t,
  isMaximized: n,
  isConnected: r,
  config: o,
  messages: i,
  sessions: l,
  operators: s,
  lastActive: u,
  selectedSession: a,
  onStartNewChat: d,
  onEndChat: p,
  onLoadSession: m,
  onGetRecentChats: y,
  onUpdateProfile: g,
  errorMessage: x,
  setErrorMessage: k,
  onClose: f,
  onToggleMaximize: c,
  onSendMessage: h
}) {
  const [w, S] = j.useState(
    "chat"
  );
  if (!t) return null;
  const E = n ? "fixed inset-4 w-auto h-auto max-w-none max-h-none min-h-0" : "fixed bottom-24 right-6 w-[400px] max-w-[calc(100vw-3rem)] h-[75vh] max-h-[800px] min-h-[400px]", N = () => {
    S("recent-chats"), y();
  }, T = () => {
    S("chat");
  }, W = (b) => {
    m(b), S("chat");
  }, R = (b) => {
    g(b), S("chat");
  }, oe = a && !a.email && i.filter((b) => b.from === "user").length > 1;
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      className: `${E} bg-white rounded-lg shadow-2xl flex flex-col animate-slide-up z-50`,
      children: [
        /* @__PURE__ */ v.jsx(
          i1,
          {
            onClose: f,
            onToggleMaximize: c,
            isMaximized: n,
            isConnected: r,
            operators: s,
            lastActive: u,
            currentView: w,
            onBackToChat: T,
            onStartNewChat: d,
            onEndChat: p,
            onViewRecentChats: N,
            config: o
          }
        ),
        w === "chat" && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
          /* @__PURE__ */ v.jsx(
            s1,
            {
              messages: i,
              onFormSubmit: R,
              config: o,
              onSendMessage: h
            }
          ),
          oe && /* @__PURE__ */ v.jsx(p1, { config: o, onFormSubmit: R }),
          x && /* @__PURE__ */ v.jsxs("div", { className: "px-6 py-3 bg-red-100 text-sm border-t border-red-200 text-red-800 hover:text-red-900 flex items-center gap-2 text-left", children: [
            /* @__PURE__ */ v.jsx(Hp, { className: "h-4 w-4 text-red-600" }),
            x
          ] }),
          /* @__PURE__ */ v.jsx(
            d1,
            {
              ticketdeskId: e,
              config: o,
              selectedSession: a,
              onSendMessage: h,
              onError: k
            }
          )
        ] }),
        w === "recent-chats" && /* @__PURE__ */ v.jsx(
          f1,
          {
            sessions: l,
            onLoadSession: W,
            config: o
          }
        )
      ]
    }
  );
}
const Mc = (e, t) => {
  try {
    localStorage.setItem(e, t);
  } catch (n) {
    console.warn("Failed to save to localStorage:", n);
  }
}, Bs = (e) => {
  try {
    return localStorage.getItem(e);
  } catch (t) {
    return console.warn("Failed to read from localStorage:", t), null;
  }
}, m1 = () => "m_" + crypto.randomUUID(), jc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (a, d) => {
    const p = typeof a == "function" ? a(t) : a;
    if (!Object.is(p, t)) {
      const m = t;
      t = d ?? (typeof p != "object" || p === null) ? p : Object.assign({}, t, p), n.forEach((y) => y(t, m));
    }
  }, o = () => t, s = { setState: r, getState: o, getInitialState: () => u, subscribe: (a) => (n.add(a), () => n.delete(a)) }, u = t = e(r, o, s);
  return s;
}, y1 = (e) => e ? jc(e) : jc, g1 = (e) => e;
function v1(e, t = g1) {
  const n = Ye.useSyncExternalStore(
    e.subscribe,
    Ye.useCallback(() => t(e.getState()), [e, t]),
    Ye.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return Ye.useDebugValue(n), n;
}
const Rc = (e) => {
  const t = y1(e), n = (r) => v1(t, r);
  return Object.assign(n, t), n;
}, w1 = (e) => e ? Rc(e) : Rc;
(!globalThis.EventTarget || !globalThis.Event) && console.error(`
  PartySocket requires a global 'EventTarget' class to be available!
  You can polyfill this global by adding this to your code before any partysocket imports: 
  
  \`\`\`
  import 'partysocket/event-target-polyfill';
  \`\`\`
  Please file an issue at https://github.com/partykit/partykit if you're still having trouble.
`);
var Kp = class extends Event {
  // biome-ignore lint/suspicious/noExplicitAny: vibes
  constructor(t, n) {
    super("error", n);
    A(this, "message");
    A(this, "error");
    this.message = t.message, this.error = t;
  }
}, Gp = class extends Event {
  // biome-ignore lint/style/useDefaultParameterLast: legacy
  // biome-ignore lint/suspicious/noExplicitAny: legacy
  constructor(t = 1e3, n = "", r) {
    super("close", r);
    A(this, "code");
    A(this, "reason");
    A(this, "wasClean", !0);
    this.code = t, this.reason = n;
  }
}, Ul = {
  Event,
  ErrorEvent: Kp,
  CloseEvent: Gp
};
function x1(e, t) {
  if (!e)
    throw new Error(t);
}
function k1(e) {
  return new e.constructor(e.type, e);
}
function S1(e) {
  return "data" in e ? new MessageEvent(e.type, e) : "code" in e || "reason" in e ? new Gp(
    // @ts-expect-error we need to fix event/listener types
    e.code || 1999,
    // @ts-expect-error we need to fix event/listener types
    e.reason || "unknown reason",
    e
  ) : "error" in e ? new Kp(e.error, e) : new Event(e.type, e);
}
var zc, C1 = typeof process < "u" && typeof ((zc = process.versions) == null ? void 0 : zc.node) < "u" && typeof document > "u", Io = C1 ? S1 : k1, cn = {
  maxReconnectionDelay: 1e4,
  minReconnectionDelay: 1e3 + Math.random() * 4e3,
  minUptime: 5e3,
  reconnectionDelayGrowFactor: 1.3,
  connectionTimeout: 4e3,
  maxRetries: Number.POSITIVE_INFINITY,
  maxEnqueuedMessages: Number.POSITIVE_INFINITY,
  startClosed: !1,
  debug: !1
}, Fc = !1, _1 = class pn extends EventTarget {
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
      clearTimeout(this._connectTimeout), this._uptimeTimeout = setTimeout(() => this._acceptOpen(), r), x1(this._ws, "WebSocket is not defined"), this._ws.binaryType = this._binaryType, this._messageQueue.forEach((o) => {
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
      !this._options.WebSocket && typeof WebSocket > "u" && !Fc && (console.error(`‼️ No WebSocket implementation available. You should define options.WebSocket. 

For example, if you're using node.js, run \`npm install ws\`, and then in your code:

import PartySocket from 'partysocket';
import WS from 'ws';

const partysocket = new PartySocket({
  host: "127.0.0.1:1999",
  room: "test-room",
  WebSocket: WS
});

`), Fc = !0);
      const l = this._options.WebSocket || WebSocket;
      this._debug("connect", { url: o, protocols: i }), this._ws = i ? new l(o, i) : new l(o), this._ws.binaryType = this._binaryType, this._connectLock = !1, this._addListeners(), this._connectTimeout = setTimeout(
        () => this._handleTimeout(),
        r
      );
    }).catch((o) => {
      this._connectLock = !1, this._handleError(new Ul.ErrorEvent(Error(o.message), this));
    });
  }
  _handleTimeout() {
    this._debug("timeout event"), this._handleError(new Ul.ErrorEvent(Error("TIMEOUT"), this));
  }
  _disconnect(n = 1e3, r) {
    if (this._clearTimeouts(), !!this._ws) {
      this._removeListeners();
      try {
        (this._ws.readyState === this.OPEN || this._ws.readyState === this.CONNECTING) && this._ws.close(n, r), this._handleClose(new Ul.CloseEvent(n, r, this));
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
var E1 = (e) => e[1] !== null && e[1] !== void 0;
function $1() {
  if (typeof crypto < "u" && crypto.randomUUID)
    return crypto.randomUUID();
  let e = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime(), t = typeof performance < "u" && performance.now && performance.now() * 1e3 || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
    let r = Math.random() * 16;
    return e > 0 ? (r = (e + r) % 16 | 0, e = Math.floor(e / 16)) : (r = (t + r) % 16 | 0, t = Math.floor(t / 16)), (n === "x" ? r : r & 3 | 8).toString(16);
  });
}
function Zp(e, t, n = {}) {
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
  let p = r.replace(/^(http|https|ws|wss):\/\//, "");
  if (p.endsWith("/") && (p = p.slice(0, -1)), o != null && o.startsWith("/"))
    throw new Error("path must not start with a slash");
  const m = s ?? "main", y = o ? `/${o}` : "", g = i || (p.startsWith("localhost:") || p.startsWith("127.0.0.1:") || p.startsWith("192.168.") || p.startsWith("10.") || p.startsWith("172.") && p.split(".")[1] >= "16" && p.split(".")[1] <= "31" || p.startsWith("[::ffff:7f00:1]:") ? (
    // http / ws
    t
  ) : (
    // https / wss
    `${t}s`
  )), x = `${g}://${p}/${u || `${a || "parties"}/${m}/${l}`}${y}`, k = (c = {}) => `${x}?${new URLSearchParams([
    ...Object.entries(n),
    ...Object.entries(c).filter(E1)
  ])}`, f = typeof d == "function" ? async () => k(await d()) : k(d);
  return {
    host: p,
    path: y,
    room: l,
    name: m,
    protocol: g,
    partyUrl: x,
    urlProvider: f
  };
}
var N1 = class extends _1 {
  constructor(t) {
    var n, r;
    const o = Lc(t);
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
    const n = Lc({
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
    const r = Zp(t, "http"), o = typeof r.urlProvider == "string" ? r.urlProvider : await r.urlProvider();
    return (t.fetch ?? fetch)(o, n);
  }
};
function Lc(e) {
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
  } = e, d = t || $1(), p = Zp(e, "ws", { _pk: d });
  return {
    _pk: d,
    _pkurl: p.partyUrl,
    name: p.name,
    room: p.room,
    host: p.host,
    path: p.path,
    protocols: u,
    socketOptions: a,
    urlProvider: p.urlProvider
  };
}
const P1 = w1((e, t) => ({
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
function T1({ ticketdeskId: e }) {
  const [t, n] = e.split("_"), o = P1((V) => V.getSocket)(t, n), [i, l] = j.useState({
    name: "Chat with us",
    color: "#3b82f6",
    shape: "round",
    welcome_message: "Hi there!"
  }), [s, u] = j.useState(!0), [a, d] = j.useState([]), [p, m] = j.useState(null), [y, g] = j.useState(null), [x, k] = j.useState([]), [f, c] = j.useState([]), [h, w] = j.useState(
    null
  ), [S, E] = j.useState(null), [N, T] = j.useState(), W = j.useCallback(
    (V) => {
      const { type: ie, data: _, error: z } = V;
      if (z) {
        E(z);
        return;
      }
      switch (ie) {
        case "session:connected":
          l((F) => ({ ...F, ..._.config })), u(!1);
          break;
        case "session:joined":
          _.session_id && (m(_.session_id), Mc(`ti_${n}_session_id`, _.session_id)), _.client_id && (g(_.client_id), Mc(`ti_${n}_client_id`, _.client_id)), d(_.messages || []), w(_.session), _.operators && c(_.operators), _.last_active && T(_.last_active);
          break;
        case "session:list":
          k(_.sessions);
          break;
        case "message:recieved":
          d((F) => [...F, _.message]);
          break;
        case "operator:list":
          _.operators && c(_.operators);
          break;
        case "message:read":
          d(
            (F) => F.map(
              (X) => X.id === _.message_id ? { ...X, status: _.status } : X
            )
          );
          break;
        default:
          console.log("Unhandled message type:", ie, _);
      }
    },
    [n]
  );
  j.useEffect(() => {
    const V = (ie) => W(JSON.parse(ie.data));
    return o.addEventListener("message", V), () => o.removeEventListener("message", V);
  }, [o, W]), j.useEffect(() => {
    const V = Bs(`ti_${n}_session_id`), ie = Bs(`ti_${n}_client_id`);
    V && m(V), ie && g(ie);
  }, [n]);
  const R = j.useCallback(
    (V) => {
      !p || !y || (V.id = m1(), d((ie) => [...ie, V]), o.send(
        JSON.stringify({
          type: "message:new",
          session_id: p,
          client_id: y,
          site_id: n,
          message: V
        })
      ));
    },
    [o, p, y, n]
  ), oe = j.useCallback(() => {
    if (!o) return;
    const V = {
      type: "session:new",
      client_id: y,
      site_id: n
    };
    o.send(JSON.stringify(V)), d([]);
  }, [o, y, n]), b = j.useCallback(
    (V) => {
      if (!o) return;
      const ie = {
        type: V ? "session:join" : "session:new",
        session_id: V,
        client_id: y,
        site_id: n
      };
      o.send(JSON.stringify(ie)), V && m(V);
    },
    [o, y, n]
  ), we = j.useCallback(() => {
    if (!o || !p) return;
    const V = {
      type: "session:state",
      session_id: p,
      client_id: y,
      site_id: n,
      state: "resolved"
    };
    o.send(JSON.stringify(V));
  }, [o, p, y, n]), Oe = j.useCallback(() => {
    if (o && y) {
      const V = {
        type: "session:list",
        client_id: y,
        site_id: n
      };
      o.send(JSON.stringify(V));
    }
  }, [o, y, n]), ar = j.useCallback(
    (V) => {
      if (o && y) {
        const ie = {
          type: "session:update",
          client_id: y,
          session_id: p,
          site_id: n,
          data: V
        };
        o.send(JSON.stringify(ie));
      }
      w((ie) => ie && { ...ie, ...V });
    },
    [o, y, n, p]
  );
  return {
    messages: a,
    sendMessage: R,
    startNewChat: oe,
    endCurrentChat: we,
    getRecentChats: Oe,
    updateProfile: ar,
    loadSession: b,
    sessions: x,
    selectedSession: h,
    operators: f,
    isConnected: o.readyState === WebSocket.OPEN,
    errorMessage: S,
    setErrorMessage: E,
    lastActive: N,
    isLoading: s,
    config: i,
    sessionId: p,
    clientId: y
  };
}
var sr = {};
var Jp = j;
function L(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var je = Object.prototype.hasOwnProperty, M1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ic = {}, Dc = {};
function qp(e) {
  return je.call(Dc, e) ? !0 : je.call(Ic, e) ? !1 : M1.test(e) ? Dc[e] = !0 : (Ic[e] = !0, !1);
}
function Te(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ge[e] = new Te(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ge[t] = new Te(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ge[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ge[e] = new Te(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ge[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ge[e] = new Te(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ge[e] = new Te(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ge[e] = new Te(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ge[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ju = /[\-:]([a-z])/g;
function qu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ju,
    qu
  );
  ge[t] = new Te(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ju, qu);
  ge[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ju, qu);
  ge[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ge[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new Te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ge[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
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
}, j1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ei).forEach(function(e) {
  j1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ei[t] = ei[e];
  });
});
var R1 = /["'&<>]/;
function Ee(e) {
  if (typeof e == "boolean" || typeof e == "number") return "" + e;
  e = "" + e;
  var t = R1.exec(e);
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
var z1 = /([A-Z])/g, F1 = /^ms-/, Hs = Array.isArray;
function kt(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function L1(e, t, n) {
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
var Oc = /* @__PURE__ */ new Map();
function eh(e, t, n) {
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
        var l = Oc.get(i);
        l !== void 0 || (l = Ee(i.replace(z1, "-$1").toLowerCase().replace(F1, "-ms-")), Oc.set(i, l)), i = l, o = typeof o == "number" ? o === 0 || je.call(ei, r) ? "" + o : o + "px" : Ee(("" + o).trim());
      }
      t ? (t = !1, e.push(' style="', i, ":", o)) : e.push(";", i, ":", o);
    }
  }
  t || e.push('"');
}
function Ae(e, t, n, r) {
  switch (n) {
    case "style":
      eh(e, t, r);
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
    } else if (qp(n)) {
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
function I1(e) {
  var t = "";
  return Jp.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
function Wl(e, t, n, r) {
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
var D1 = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, bc = /* @__PURE__ */ new Map();
function ht(e) {
  var t = bc.get(e);
  if (t === void 0) {
    if (!D1.test(e)) throw Error(L(65, e));
    t = "<" + e, bc.set(e, t);
  }
  return t;
}
function O1(e, t, n, r, o) {
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
        var p = n[i];
        if (p != null) switch (i) {
          case "children":
            s = p;
            break;
          case "selected":
            a = p;
            break;
          case "dangerouslySetInnerHTML":
            d = p;
            break;
          case "value":
            u = p;
          default:
            Ae(e, r, i, p);
        }
      }
      if (l != null) if (n = u !== null ? "" + u : I1(s), Hs(l)) {
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
        if (Hs(d) && 1 < d.length) throw Error(L(93));
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
      for (p in n) if (je.call(n, p) && (l = n[p], l != null)) switch (p) {
        case "children":
          i = l;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(L(434));
        default:
          Ae(e, r, p, l);
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
      return Wl(
        e,
        n,
        t,
        r
      );
    case "html":
      return o.insertionMode === 0 && e.push("<!DOCTYPE html>"), Wl(e, n, t, r);
    default:
      if (t.indexOf("-") === -1 && typeof n.is != "string") return Wl(e, n, t, r);
      e.push(ht(t)), l = i = null;
      for (a in n) if (je.call(n, a) && (s = n[a], s != null)) switch (a) {
        case "children":
          i = s;
          break;
        case "dangerouslySetInnerHTML":
          l = s;
          break;
        case "style":
          eh(e, r, s);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          break;
        default:
          qp(a) && typeof s != "function" && typeof s != "symbol" && e.push(" ", a, '="', Ee(s), '"');
      }
      return e.push(">"), ti(e, l, i), i;
  }
}
function Ac(e, t, n) {
  if (e.push('<!--$?--><template id="'), n === null) throw Error(L(395));
  return e.push(n), e.push('"></template>');
}
function b1(e, t, n, r) {
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
function A1(e, t) {
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
var U1 = /[<\u2028\u2029]/g;
function Vl(e) {
  return JSON.stringify(e).replace(U1, function(t) {
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
function W1(e, t) {
  return t = t === void 0 ? "" : t, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: t + "P:", segmentPrefix: t + "S:", boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
}
function Uc(e, t, n, r) {
  return n.generateStaticMarkup ? (e.push(Ee(t)), !1) : (t === "" ? e = r : (r && e.push("<!-- -->"), e.push(Ee(t)), e = !0), e);
}
var br = Object.assign, V1 = Symbol.for("react.element"), th = Symbol.for("react.portal"), nh = Symbol.for("react.fragment"), rh = Symbol.for("react.strict_mode"), oh = Symbol.for("react.profiler"), ih = Symbol.for("react.provider"), lh = Symbol.for("react.context"), sh = Symbol.for("react.forward_ref"), uh = Symbol.for("react.suspense"), ah = Symbol.for("react.suspense_list"), ch = Symbol.for("react.memo"), ea = Symbol.for("react.lazy"), B1 = Symbol.for("react.scope"), H1 = Symbol.for("react.debug_trace_mode"), Q1 = Symbol.for("react.legacy_hidden"), Y1 = Symbol.for("react.default_value"), Wc = Symbol.iterator;
function Qs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case nh:
      return "Fragment";
    case th:
      return "Portal";
    case oh:
      return "Profiler";
    case rh:
      return "StrictMode";
    case uh:
      return "Suspense";
    case ah:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case lh:
      return (e.displayName || "Context") + ".Consumer";
    case ih:
      return (e._context.displayName || "Context") + ".Provider";
    case sh:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ch:
      return t = e.displayName || null, t !== null ? t : Qs(e.type) || "Memo";
    case ea:
      t = e._payload, e = e._init;
      try {
        return Qs(e(t));
      } catch {
      }
  }
  return null;
}
var dh = {};
function Vc(e, t) {
  if (e = e.contextTypes, !e) return dh;
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
function fh(e) {
  e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && fh(e);
}
function ph(e) {
  var t = e.parent;
  t !== null && ph(t), e.context._currentValue2 = e.value;
}
function hh(e, t) {
  if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(L(402));
  e.depth === t.depth ? ll(e, t) : hh(e, t);
}
function mh(e, t) {
  var n = t.parent;
  if (n === null) throw Error(L(402));
  e.depth === n.depth ? ll(e, n) : mh(e, n), t.context._currentValue2 = t.value;
}
function Fi(e) {
  var t = xn;
  t !== e && (t === null ? ph(e) : e === null ? fh(t) : t.depth === e.depth ? ll(t, e) : t.depth > e.depth ? hh(t, e) : mh(t, e), xn = e);
}
var Bc = { isMounted: function() {
  return !1;
}, enqueueSetState: function(e, t) {
  e = e._reactInternals, e.queue !== null && e.queue.push(t);
}, enqueueReplaceState: function(e, t) {
  e = e._reactInternals, e.replace = !0, e.queue = [t];
}, enqueueForceUpdate: function() {
} };
function Hc(e, t, n, r) {
  var o = e.state !== void 0 ? e.state : null;
  e.updater = Bc, e.props = n, e.state = o;
  var i = { queue: [], replace: !1 };
  e._reactInternals = i;
  var l = t.contextType;
  if (e.context = typeof l == "object" && l !== null ? l._currentValue2 : r, l = t.getDerivedStateFromProps, typeof l == "function" && (l = l(n, o), o = l == null ? o : br({}, o, l), e.state = o), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (t = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && Bc.enqueueReplaceState(e, e.state, null), i.queue !== null && 0 < i.queue.length) if (t = i.queue, l = i.replace, i.queue = null, i.replace = !1, l && t.length === 1) e.state = t[0];
  else {
    for (i = l ? t[0] : e.state, o = !0, l = l ? 1 : 0; l < t.length; l++) {
      var s = t[l];
      s = typeof s == "function" ? s.call(e, i, n, r) : s, s != null && (o ? (o = !1, i = br({}, i, s)) : br(i, s));
    }
    e.state = i;
  }
  else i.queue = null;
}
var X1 = { id: 1, overflow: "" };
function Ys(e, t, n) {
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
var ni = Math.clz32 ? Math.clz32 : Z1, K1 = Math.log, G1 = Math.LN2;
function Z1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (K1(e) / G1 | 0) | 0;
}
function J1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var q1 = typeof Object.is == "function" ? Object.is : J1, Rt = null, ta = null, ri = null, H = null, $r = !1, Li = !1, oo = 0, Bt = null, sl = 0;
function hn() {
  if (Rt === null) throw Error(L(321));
  return Rt;
}
function Qc() {
  if (0 < sl) throw Error(L(312));
  return { memoizedState: null, queue: null, next: null };
}
function na() {
  return H === null ? ri === null ? ($r = !1, ri = H = Qc()) : ($r = !0, H = ri) : H.next === null ? ($r = !1, H = H.next = Qc()) : ($r = !0, H = H.next), H;
}
function ra() {
  ta = Rt = null, Li = !1, ri = null, sl = 0, H = Bt = null;
}
function yh(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Yc(e, t, n) {
  if (Rt = hn(), H = na(), $r) {
    var r = H.queue;
    if (t = r.dispatch, Bt !== null && (n = Bt.get(r), n !== void 0)) {
      Bt.delete(r), r = H.memoizedState;
      do
        r = e(r, n.action), n = n.next;
      while (n !== null);
      return H.memoizedState = r, [r, t];
    }
    return [H.memoizedState, t];
  }
  return e = e === yh ? typeof t == "function" ? t() : t : n !== void 0 ? n(t) : t, H.memoizedState = e, e = H.queue = { last: null, dispatch: null }, e = e.dispatch = ev.bind(null, Rt, e), [H.memoizedState, e];
}
function Xc(e, t) {
  if (Rt = hn(), H = na(), t = t === void 0 ? null : t, H !== null) {
    var n = H.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var o = 0; o < r.length && o < t.length; o++) if (!q1(t[o], r[o])) {
          r = !1;
          break e;
        }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return e = e(), H.memoizedState = [e, t], e;
}
function ev(e, t, n) {
  if (25 <= sl) throw Error(L(301));
  if (e === Rt) if (Li = !0, e = { action: n, next: null }, Bt === null && (Bt = /* @__PURE__ */ new Map()), n = Bt.get(t), n === void 0) Bt.set(t, e);
  else {
    for (t = n; t.next !== null; ) t = t.next;
    t.next = e;
  }
}
function tv() {
  throw Error(L(394));
}
function Do() {
}
var Kc = { readContext: function(e) {
  return e._currentValue2;
}, useContext: function(e) {
  return hn(), e._currentValue2;
}, useMemo: Xc, useReducer: Yc, useRef: function(e) {
  Rt = hn(), H = na();
  var t = H.memoizedState;
  return t === null ? (e = { current: e }, H.memoizedState = e) : t;
}, useState: function(e) {
  return Yc(yh, e);
}, useInsertionEffect: Do, useLayoutEffect: function() {
}, useCallback: function(e, t) {
  return Xc(function() {
    return e;
  }, t);
}, useImperativeHandle: Do, useEffect: Do, useDebugValue: Do, useDeferredValue: function(e) {
  return hn(), e;
}, useTransition: function() {
  return hn(), [
    !1,
    tv
  ];
}, useId: function() {
  var e = ta.treeContext, t = e.overflow;
  e = e.id, e = (e & ~(1 << 32 - ni(e) - 1)).toString(32) + t;
  var n = oi;
  if (n === null) throw Error(L(404));
  return t = oo++, e = ":" + n.idPrefix + "R" + e, 0 < t && (e += "H" + t.toString(32)), e + ":";
}, useMutableSource: function(e, t) {
  return hn(), t(e._source);
}, useSyncExternalStore: function(e, t, n) {
  if (n === void 0) throw Error(L(407));
  return n();
} }, oi = null, Bl = Jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
function nv(e) {
  return console.error(e), null;
}
function Nr() {
}
function rv(e, t, n, r, o, i, l, s, u) {
  var a = [], d = /* @__PURE__ */ new Set();
  return t = { destination: null, responseState: t, progressiveChunkSize: r === void 0 ? 12800 : r, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: d, pingedTasks: a, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: o === void 0 ? nv : o, onAllReady: Nr, onShellReady: l === void 0 ? Nr : l, onShellError: Nr, onFatalError: Nr }, n = Ii(t, 0, null, n, !1, !1), n.parentFlushed = !0, e = oa(t, e, null, n, d, dh, null, X1), a.push(e), t;
}
function oa(e, t, n, r, o, i, l, s) {
  e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
  var u = { node: t, ping: function() {
    var a = e.pingedTasks;
    a.push(u), a.length === 1 && wh(e);
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
function Gc(e, t, n, r, o) {
  for (Rt = {}, ta = t, oo = 0, e = n(r, o); Li; ) Li = !1, oo = 0, sl += 1, H = null, e = n(r, o);
  return ra(), e;
}
function Zc(e, t, n, r) {
  var o = n.render(), i = r.childContextTypes;
  if (i != null) {
    var l = t.legacyContext;
    if (typeof n.getChildContext != "function") r = l;
    else {
      n = n.getChildContext();
      for (var s in n) if (!(s in i)) throw Error(L(108, Qs(r) || "Unknown", s));
      r = br({}, l, n);
    }
    t.legacyContext = r, Ve(e, t, o), t.legacyContext = l;
  } else Ve(e, t, o);
}
function Jc(e, t) {
  if (e && e.defaultProps) {
    t = br({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Xs(e, t, n, r, o) {
  if (typeof n == "function") if (n.prototype && n.prototype.isReactComponent) {
    o = Vc(n, t.legacyContext);
    var i = n.contextType;
    i = new n(r, typeof i == "object" && i !== null ? i._currentValue2 : o), Hc(i, n, r, o), Zc(e, t, i, n);
  } else {
    i = Vc(n, t.legacyContext), o = Gc(e, t, n, r, i);
    var l = oo !== 0;
    if (typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0) Hc(o, n, r, i), Zc(e, t, o, n);
    else if (l) {
      r = t.treeContext, t.treeContext = Ys(r, 1, 0);
      try {
        Ve(e, t, o);
      } finally {
        t.treeContext = r;
      }
    } else Ve(e, t, o);
  }
  else if (typeof n == "string") {
    switch (o = t.blockedSegment, i = O1(o.chunks, n, r, e.responseState, o.formatContext), o.lastPushedText = !1, l = o.formatContext, o.formatContext = L1(l, n, r), Ks(e, t, i), o.formatContext = l, n) {
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
      case Q1:
      case H1:
      case rh:
      case oh:
      case nh:
        Ve(e, t, r.children);
        return;
      case ah:
        Ve(e, t, r.children);
        return;
      case B1:
        throw Error(L(343));
      case uh:
        e: {
          n = t.blockedBoundary, o = t.blockedSegment, i = r.fallback, r = r.children, l = /* @__PURE__ */ new Set();
          var s = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: l, errorDigest: null }, u = Ii(e, o.chunks.length, s, o.formatContext, !1, !1);
          o.children.push(u), o.lastPushedText = !1;
          var a = Ii(e, 0, null, o.formatContext, !1, !1);
          a.parentFlushed = !0, t.blockedBoundary = s, t.blockedSegment = a;
          try {
            if (Ks(
              e,
              t,
              r
            ), e.responseState.generateStaticMarkup || a.lastPushedText && a.textEmbedded && a.chunks.push("<!-- -->"), a.status = 1, Oi(s, a), s.pendingTasks === 0) break e;
          } catch (d) {
            a.status = 4, s.forceClientRender = !0, s.errorDigest = io(e, d);
          } finally {
            t.blockedBoundary = n, t.blockedSegment = o;
          }
          t = oa(e, i, n, u, l, t.legacyContext, t.context, t.treeContext), e.pingedTasks.push(t);
        }
        return;
    }
    if (typeof n == "object" && n !== null) switch (n.$$typeof) {
      case sh:
        if (r = Gc(e, t, n.render, r, o), oo !== 0) {
          n = t.treeContext, t.treeContext = Ys(n, 1, 0);
          try {
            Ve(e, t, r);
          } finally {
            t.treeContext = n;
          }
        } else Ve(e, t, r);
        return;
      case ch:
        n = n.type, r = Jc(n, r), Xs(e, t, n, r, o);
        return;
      case ih:
        if (o = r.children, n = n._context, r = r.value, i = n._currentValue2, n._currentValue2 = r, l = xn, xn = r = { parent: l, depth: l === null ? 0 : l.depth + 1, context: n, parentValue: i, value: r }, t.context = r, Ve(e, t, o), e = xn, e === null) throw Error(L(403));
        r = e.parentValue, e.context._currentValue2 = r === Y1 ? e.context._defaultValue : r, e = xn = e.parent, t.context = e;
        return;
      case lh:
        r = r.children, r = r(n._currentValue2), Ve(e, t, r);
        return;
      case ea:
        o = n._init, n = o(n._payload), r = Jc(n, r), Xs(
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
      case V1:
        Xs(e, t, n.type, n.props, n.ref);
        return;
      case th:
        throw Error(L(257));
      case ea:
        var r = n._init;
        n = r(n._payload), Ve(e, t, n);
        return;
    }
    if (Hs(n)) {
      qc(e, t, n);
      return;
    }
    if (n === null || typeof n != "object" ? r = null : (r = Wc && n[Wc] || n["@@iterator"], r = typeof r == "function" ? r : null), r && (r = r.call(n))) {
      if (n = r.next(), !n.done) {
        var o = [];
        do
          o.push(n.value), n = r.next();
        while (!n.done);
        qc(e, t, o);
      }
      return;
    }
    throw e = Object.prototype.toString.call(n), Error(L(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  typeof n == "string" ? (r = t.blockedSegment, r.lastPushedText = Uc(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)) : typeof n == "number" && (r = t.blockedSegment, r.lastPushedText = Uc(t.blockedSegment.chunks, "" + n, e.responseState, r.lastPushedText));
}
function qc(e, t, n) {
  for (var r = n.length, o = 0; o < r; o++) {
    var i = t.treeContext;
    t.treeContext = Ys(i, r, o);
    try {
      Ks(e, t, n[o]);
    } finally {
      t.treeContext = i;
    }
  }
}
function Ks(e, t, n) {
  var r = t.blockedSegment.formatContext, o = t.legacyContext, i = t.context;
  try {
    return Ve(e, t, n);
  } catch (u) {
    if (ra(), typeof u == "object" && u !== null && typeof u.then == "function") {
      n = u;
      var l = t.blockedSegment, s = Ii(e, l.chunks.length, null, l.formatContext, l.lastPushedText, !0);
      l.children.push(s), l.lastPushedText = !1, e = oa(e, t.node, t.blockedBoundary, s, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, n.then(e, e), t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = i, Fi(i);
    } else throw t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = i, Fi(i), u;
  }
}
function ov(e) {
  var t = e.blockedBoundary;
  e = e.blockedSegment, e.status = 3, vh(this, t, e);
}
function gh(e, t, n) {
  var r = e.blockedBoundary;
  e.blockedSegment.status = 3, r === null ? (t.allPendingTasks--, t.status !== 2 && (t.status = 2, t.destination !== null && t.destination.push(null))) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, e = n === void 0 ? Error(L(432)) : n, r.errorDigest = t.onError(e), r.parentFlushed && t.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach(function(o) {
    return gh(o, t, n);
  }), r.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0 && (r = t.onAllReady, r()));
}
function Oi(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    n.id = t.id, n.parentFlushed = !0, n.status === 1 && Oi(e, n);
  } else e.completedSegments.push(t);
}
function vh(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(L(389));
      e.completedRootSegment = n;
    }
    e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Nr, t = e.onShellReady, t());
  } else t.pendingTasks--, t.forceClientRender || (t.pendingTasks === 0 ? (n.parentFlushed && n.status === 1 && Oi(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(ov, e), t.fallbackAbortableTasks.clear()) : n.parentFlushed && n.status === 1 && (Oi(t, n), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
}
function wh(e) {
  if (e.status !== 2) {
    var t = xn, n = Bl.current;
    Bl.current = Kc;
    var r = oi;
    oi = e.responseState;
    try {
      var o = e.pingedTasks, i;
      for (i = 0; i < o.length; i++) {
        var l = o[i], s = e, u = l.blockedSegment;
        if (u.status === 0) {
          Fi(l.context);
          try {
            Ve(s, l, l.node), s.responseState.generateStaticMarkup || u.lastPushedText && u.textEmbedded && u.chunks.push("<!-- -->"), l.abortSet.delete(l), u.status = 1, vh(s, l.blockedBoundary, u);
          } catch (g) {
            if (ra(), typeof g == "object" && g !== null && typeof g.then == "function") {
              var a = l.ping;
              g.then(a, a);
            } else {
              l.abortSet.delete(l), u.status = 4;
              var d = l.blockedBoundary, p = g, m = io(s, p);
              if (d === null ? Di(s, p) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = !0, d.errorDigest = m, d.parentFlushed && s.clientRenderedBoundaries.push(d))), s.allPendingTasks--, s.allPendingTasks === 0) {
                var y = s.onAllReady;
                y();
              }
            }
          } finally {
          }
        }
      }
      o.splice(0, i), e.destination !== null && ia(e, e.destination);
    } catch (g) {
      io(e, g), Di(e, g);
    } finally {
      oi = r, Bl.current = n, n === Kc && Fi(t);
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
    return o = o.boundaryPrefix + i.toString(16), r = r.id = o, Ac(t, e.responseState, r), Oo(e, t, n), t.push("<!--/$-->");
  }
  if (r.byteSize > e.progressiveChunkSize) return r.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(r), Ac(t, e.responseState, r.id), Oo(e, t, n), t.push("<!--/$-->");
  if (e.responseState.generateStaticMarkup || t.push("<!--$-->"), n = r.completedSegments, n.length !== 1) throw Error(L(391));
  return ul(e, t, n[0]), e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
}
function ed(e, t, n) {
  return b1(t, e.responseState, n.formatContext, n.id), ul(e, t, n), A1(t, n.formatContext);
}
function td(e, t, n) {
  for (var r = n.completedSegments, o = 0; o < r.length; o++) xh(e, t, n, r[o]);
  if (r.length = 0, e = e.responseState, r = n.id, n = n.rootSegmentID, t.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? t.push('$RC("') : (e.sentCompleteBoundaryFunction = !0, t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), r === null) throw Error(L(395));
  return n = n.toString(16), t.push(r), t.push('","'), t.push(e.segmentPrefix), t.push(n), t.push('")<\/script>');
}
function xh(e, t, n, r) {
  if (r.status === 2) return !0;
  var o = r.id;
  if (o === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(L(392));
    return ed(e, t, r);
  }
  return ed(e, t, r), e = e.responseState, t.push(e.startInlineScript), e.sentCompleteSegmentFunction ? t.push('$RS("') : (e.sentCompleteSegmentFunction = !0, t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), t.push(e.segmentPrefix), o = o.toString(16), t.push(o), t.push('","'), t.push(e.placeholderPrefix), t.push(o), t.push('")<\/script>');
}
function ia(e, t) {
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
      var s = e.responseState, u = l.id, a = l.errorDigest, d = l.errorMessage, p = l.errorComponentStack;
      if (r.push(s.startInlineScript), s.sentClientRenderFunction ? r.push('$RX("') : (s.sentClientRenderFunction = !0, r.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), u === null) throw Error(L(395));
      if (r.push(u), r.push('"'), a || d || p) {
        r.push(",");
        var m = Vl(a || "");
        r.push(m);
      }
      if (d || p) {
        r.push(",");
        var y = Vl(d || "");
        r.push(y);
      }
      if (p) {
        r.push(",");
        var g = Vl(p);
        r.push(g);
      }
      if (!r.push(")<\/script>")) {
        e.destination = null, i++, o.splice(0, i);
        return;
      }
    }
    o.splice(0, i);
    var x = e.completedBoundaries;
    for (i = 0; i < x.length; i++) if (!td(e, t, x[i])) {
      e.destination = null, i++, x.splice(0, i);
      return;
    }
    x.splice(0, i);
    var k = e.partialBoundaries;
    for (i = 0; i < k.length; i++) {
      var f = k[i];
      e: {
        o = e, l = t;
        var c = f.completedSegments;
        for (s = 0; s < c.length; s++) if (!xh(o, l, f, c[s])) {
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
    for (i = 0; i < w.length; i++) if (!td(e, t, w[i])) {
      e.destination = null, i++, w.splice(0, i);
      return;
    }
    w.splice(0, i);
  } finally {
    e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && t.push(null);
  }
}
function iv(e, t) {
  try {
    var n = e.abortableTasks;
    n.forEach(function(r) {
      return gh(r, e, t);
    }), n.clear(), e.destination !== null && ia(e, e.destination);
  } catch (r) {
    io(e, r), Di(e, r);
  }
}
function lv() {
}
function kh(e, t, n, r) {
  var o = !1, i = null, l = "", s = { push: function(a) {
    return a !== null && (l += a), !0;
  }, destroy: function(a) {
    o = !0, i = a;
  } }, u = !1;
  if (e = rv(e, W1(n, t ? t.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, lv, void 0, function() {
    u = !0;
  }), wh(e), iv(e, r), e.status === 1) e.status = 2, s.destroy(e.fatalError);
  else if (e.status !== 2 && e.destination === null) {
    e.destination = s;
    try {
      ia(e, s);
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
  return kh(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
};
sr.renderToStaticNodeStream = function() {
  throw Error(L(208));
};
sr.renderToString = function(e, t) {
  return kh(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
};
sr.version = "18.3.1";
var la = {};
var Sh = j;
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
function G(e, t) {
  return M(e, t), !0;
}
function nd(e) {
  Be && 0 < He && (e.enqueue(new Uint8Array(Be.buffer, 0, He)), Be = null, He = 0);
}
var Ch = new TextEncoder();
function D(e) {
  return Ch.encode(e);
}
function $(e) {
  return Ch.encode(e);
}
function _h(e, t) {
  typeof e.error == "function" ? e.error(t) : e.close();
}
var Re = Object.prototype.hasOwnProperty, sv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, rd = {}, od = {};
function Eh(e) {
  return Re.call(od, e) ? !0 : Re.call(rd, e) ? !1 : sv.test(e) ? od[e] = !0 : (rd[e] = !0, !1);
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
var sa = /[\-:]([a-z])/g;
function ua(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    sa,
    ua
  );
  ve[t] = new Me(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(sa, ua);
  ve[t] = new Me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(sa, ua);
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
}, uv = ["Webkit", "ms", "Moz", "O"];
Object.keys(ii).forEach(function(e) {
  uv.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ii[t] = ii[e];
  });
});
var av = /["'&<>]/;
function he(e) {
  if (typeof e == "boolean" || typeof e == "number") return "" + e;
  e = "" + e;
  var t = av.exec(e);
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
var cv = /([A-Z])/g, dv = /^ms-/, Gs = Array.isArray, fv = $("<script>"), pv = $("<\/script>"), hv = $('<script src="'), mv = $('<script type="module" src="'), id = $('" async=""><\/script>'), yv = /(<\/|<)(s)(cript)/gi;
function gv(e, t, n, r) {
  return "" + t + (n === "s" ? "\\u0073" : "\\u0053") + r;
}
function vv(e, t, n, r, o) {
  e = e === void 0 ? "" : e, t = t === void 0 ? fv : $('<script nonce="' + he(t) + '">');
  var i = [];
  if (n !== void 0 && i.push(t, D(("" + n).replace(yv, gv)), pv), r !== void 0) for (n = 0; n < r.length; n++) i.push(hv, D(he(r[n])), id);
  if (o !== void 0) for (r = 0; r < o.length; r++) i.push(mv, D(he(o[r])), id);
  return { bootstrapChunks: i, startInlineScript: t, placeholderPrefix: $(e + "P:"), segmentPrefix: $(e + "S:"), boundaryPrefix: e + "B:", idPrefix: e, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
}
function mt(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function wv(e) {
  return mt(e === "http://www.w3.org/2000/svg" ? 2 : e === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
}
function xv(e, t, n) {
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
var aa = $("<!-- -->");
function ld(e, t, n, r) {
  return t === "" ? r : (r && e.push(aa), e.push(D(he(t))), !0);
}
var sd = /* @__PURE__ */ new Map(), kv = $(' style="'), ud = $(":"), Sv = $(";");
function $h(e, t, n) {
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
        var l = sd.get(i);
        l !== void 0 || (l = $(he(i.replace(cv, "-$1").toLowerCase().replace(dv, "-ms-"))), sd.set(i, l)), i = l, o = typeof o == "number" ? o === 0 || Re.call(ii, r) ? D("" + o) : D(o + "px") : D(he(("" + o).trim()));
      }
      t ? (t = !1, e.push(kv, i, ud, o)) : e.push(Sv, i, ud, o);
    }
  }
  t || e.push(mn);
}
var It = $(" "), Rn = $('="'), mn = $('"'), ad = $('=""');
function Ue(e, t, n, r) {
  switch (n) {
    case "style":
      $h(e, t, r);
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
          r && e.push(It, n, ad);
          break;
        case 4:
          r === !0 ? e.push(It, n, ad) : r !== !1 && e.push(It, n, Rn, D(he(r)), mn);
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
    } else if (Eh(n)) {
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
var Dt = $(">"), cd = $("/>");
function li(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(I(60));
    if (typeof t != "object" || !("__html" in t)) throw Error(I(61));
    t = t.__html, t != null && e.push(D("" + t));
  }
}
function Cv(e) {
  var t = "";
  return Sh.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
var Hl = $(' selected=""');
function Ql(e, t, n, r) {
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
var Yl = $(`
`), _v = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, dd = /* @__PURE__ */ new Map();
function yt(e) {
  var t = dd.get(e);
  if (t === void 0) {
    if (!_v.test(e)) throw Error(I(65, e));
    t = $("<" + e), dd.set(e, t);
  }
  return t;
}
var Ev = $("<!DOCTYPE html>");
function $v(e, t, n, r, o) {
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
        var p = n[i];
        if (p != null) switch (i) {
          case "children":
            s = p;
            break;
          case "selected":
            a = p;
            break;
          case "dangerouslySetInnerHTML":
            d = p;
            break;
          case "value":
            u = p;
          default:
            Ue(e, r, i, p);
        }
      }
      if (l != null) if (n = u !== null ? "" + u : Cv(s), Gs(l)) {
        for (r = 0; r < l.length; r++)
          if ("" + l[r] === n) {
            e.push(Hl);
            break;
          }
      } else "" + l === n && e.push(Hl);
      else a && e.push(Hl);
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
        if (Gs(d) && 1 < d.length) throw Error(I(93));
        i = "" + d;
      }
      return typeof i == "string" && i[0] === `
` && e.push(Yl), i !== null && e.push(D(he("" + i))), null;
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
      ) : u !== null && Ue(e, r, "checked", u), i !== null ? Ue(e, r, "value", i) : s !== null && Ue(e, r, "value", s), e.push(cd), null;
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
      for (p in n) if (Re.call(n, p) && (l = n[p], l != null)) switch (p) {
        case "children":
          i = l;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(I(434));
        default:
          Ue(e, r, p, l);
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
` ? e.push(Yl, D(n)) : e.push(D("" + n)));
      }
      return typeof i == "string" && i[0] === `
` && e.push(Yl), i;
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
      return e.push(cd), null;
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return Ql(e, n, t, r);
    case "html":
      return o.insertionMode === 0 && e.push(Ev), Ql(e, n, t, r);
    default:
      if (t.indexOf("-") === -1 && typeof n.is != "string") return Ql(e, n, t, r);
      e.push(yt(t)), l = i = null;
      for (a in n) if (Re.call(n, a) && (s = n[a], s != null)) switch (a) {
        case "children":
          i = s;
          break;
        case "dangerouslySetInnerHTML":
          l = s;
          break;
        case "style":
          $h(e, r, s);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          break;
        default:
          Eh(a) && typeof s != "function" && typeof s != "symbol" && e.push(It, D(a), Rn, D(he(s)), mn);
      }
      return e.push(Dt), li(e, l, i), i;
  }
}
var Nv = $("</"), Pv = $(">"), Tv = $('<template id="'), Mv = $('"></template>'), jv = $("<!--$-->"), Rv = $('<!--$?--><template id="'), zv = $('"></template>'), Fv = $("<!--$!-->"), Lv = $("<!--/$-->"), Iv = $("<template"), Dv = $('"'), Ov = $(' data-dgst="');
$(' data-msg="');
$(' data-stck="');
var bv = $("></template>");
function fd(e, t, n) {
  if (M(e, Rv), n === null) throw Error(I(395));
  return M(e, n), G(e, zv);
}
var Av = $('<div hidden id="'), Uv = $('">'), Wv = $("</div>"), Vv = $('<svg aria-hidden="true" style="display:none" id="'), Bv = $('">'), Hv = $("</svg>"), Qv = $('<math aria-hidden="true" style="display:none" id="'), Yv = $('">'), Xv = $("</math>"), Kv = $('<table hidden id="'), Gv = $('">'), Zv = $("</table>"), Jv = $('<table hidden><tbody id="'), qv = $('">'), ew = $("</tbody></table>"), tw = $('<table hidden><tr id="'), nw = $('">'), rw = $("</tr></table>"), ow = $('<table hidden><colgroup id="'), iw = $('">'), lw = $("</colgroup></table>");
function sw(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return M(e, Av), M(e, t.segmentPrefix), M(e, D(r.toString(16))), G(e, Uv);
    case 2:
      return M(e, Vv), M(e, t.segmentPrefix), M(e, D(r.toString(16))), G(e, Bv);
    case 3:
      return M(e, Qv), M(e, t.segmentPrefix), M(e, D(r.toString(16))), G(e, Yv);
    case 4:
      return M(e, Kv), M(e, t.segmentPrefix), M(e, D(r.toString(16))), G(e, Gv);
    case 5:
      return M(e, Jv), M(e, t.segmentPrefix), M(e, D(r.toString(16))), G(e, qv);
    case 6:
      return M(e, tw), M(e, t.segmentPrefix), M(e, D(r.toString(16))), G(e, nw);
    case 7:
      return M(
        e,
        ow
      ), M(e, t.segmentPrefix), M(e, D(r.toString(16))), G(e, iw);
    default:
      throw Error(I(397));
  }
}
function uw(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return G(e, Wv);
    case 2:
      return G(e, Hv);
    case 3:
      return G(e, Xv);
    case 4:
      return G(e, Zv);
    case 5:
      return G(e, ew);
    case 6:
      return G(e, rw);
    case 7:
      return G(e, lw);
    default:
      throw Error(I(397));
  }
}
var aw = $('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), cw = $('$RS("'), dw = $('","'), fw = $('")<\/script>'), pw = $('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), hw = $('$RC("'), mw = $('","'), yw = $('")<\/script>'), gw = $('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), vw = $('$RX("'), ww = $('"'), xw = $(")<\/script>"), Xl = $(","), kw = /[<\u2028\u2029]/g;
function Kl(e) {
  return JSON.stringify(e).replace(kw, function(t) {
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
var Ar = Object.assign, Sw = Symbol.for("react.element"), Nh = Symbol.for("react.portal"), Ph = Symbol.for("react.fragment"), Th = Symbol.for("react.strict_mode"), Mh = Symbol.for("react.profiler"), jh = Symbol.for("react.provider"), Rh = Symbol.for("react.context"), zh = Symbol.for("react.forward_ref"), Fh = Symbol.for("react.suspense"), Lh = Symbol.for("react.suspense_list"), Ih = Symbol.for("react.memo"), ca = Symbol.for("react.lazy"), Cw = Symbol.for("react.scope"), _w = Symbol.for("react.debug_trace_mode"), Ew = Symbol.for("react.legacy_hidden"), $w = Symbol.for("react.default_value"), pd = Symbol.iterator;
function Zs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ph:
      return "Fragment";
    case Nh:
      return "Portal";
    case Mh:
      return "Profiler";
    case Th:
      return "StrictMode";
    case Fh:
      return "Suspense";
    case Lh:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Rh:
      return (e.displayName || "Context") + ".Consumer";
    case jh:
      return (e._context.displayName || "Context") + ".Provider";
    case zh:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ih:
      return t = e.displayName || null, t !== null ? t : Zs(e.type) || "Memo";
    case ca:
      t = e._payload, e = e._init;
      try {
        return Zs(e(t));
      } catch {
      }
  }
  return null;
}
var Dh = {};
function hd(e, t) {
  if (e = e.contextTypes, !e) return Dh;
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
function Oh(e) {
  e.context._currentValue = e.parentValue, e = e.parent, e !== null && Oh(e);
}
function bh(e) {
  var t = e.parent;
  t !== null && bh(t), e.context._currentValue = e.value;
}
function Ah(e, t) {
  if (e.context._currentValue = e.parentValue, e = e.parent, e === null) throw Error(I(402));
  e.depth === t.depth ? al(e, t) : Ah(e, t);
}
function Uh(e, t) {
  var n = t.parent;
  if (n === null) throw Error(I(402));
  e.depth === n.depth ? al(e, n) : Uh(e, n), t.context._currentValue = t.value;
}
function bi(e) {
  var t = kn;
  t !== e && (t === null ? bh(e) : e === null ? Oh(t) : t.depth === e.depth ? al(t, e) : t.depth > e.depth ? Ah(t, e) : Uh(t, e), kn = e);
}
var md = { isMounted: function() {
  return !1;
}, enqueueSetState: function(e, t) {
  e = e._reactInternals, e.queue !== null && e.queue.push(t);
}, enqueueReplaceState: function(e, t) {
  e = e._reactInternals, e.replace = !0, e.queue = [t];
}, enqueueForceUpdate: function() {
} };
function yd(e, t, n, r) {
  var o = e.state !== void 0 ? e.state : null;
  e.updater = md, e.props = n, e.state = o;
  var i = { queue: [], replace: !1 };
  e._reactInternals = i;
  var l = t.contextType;
  if (e.context = typeof l == "object" && l !== null ? l._currentValue : r, l = t.getDerivedStateFromProps, typeof l == "function" && (l = l(n, o), o = l == null ? o : Ar({}, o, l), e.state = o), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (t = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && md.enqueueReplaceState(e, e.state, null), i.queue !== null && 0 < i.queue.length) if (t = i.queue, l = i.replace, i.queue = null, i.replace = !1, l && t.length === 1) e.state = t[0];
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
function Js(e, t, n) {
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
var si = Math.clz32 ? Math.clz32 : Mw, Pw = Math.log, Tw = Math.LN2;
function Mw(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Pw(e) / Tw | 0) | 0;
}
function jw(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Rw = typeof Object.is == "function" ? Object.is : jw, zt = null, da = null, ui = null, Q = null, Pr = !1, Ai = !1, lo = 0, Ht = null, cl = 0;
function yn() {
  if (zt === null) throw Error(I(321));
  return zt;
}
function gd() {
  if (0 < cl) throw Error(I(312));
  return { memoizedState: null, queue: null, next: null };
}
function fa() {
  return Q === null ? ui === null ? (Pr = !1, ui = Q = gd()) : (Pr = !0, Q = ui) : Q.next === null ? (Pr = !1, Q = Q.next = gd()) : (Pr = !0, Q = Q.next), Q;
}
function pa() {
  da = zt = null, Ai = !1, ui = null, cl = 0, Q = Ht = null;
}
function Wh(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function vd(e, t, n) {
  if (zt = yn(), Q = fa(), Pr) {
    var r = Q.queue;
    if (t = r.dispatch, Ht !== null && (n = Ht.get(r), n !== void 0)) {
      Ht.delete(r), r = Q.memoizedState;
      do
        r = e(r, n.action), n = n.next;
      while (n !== null);
      return Q.memoizedState = r, [r, t];
    }
    return [Q.memoizedState, t];
  }
  return e = e === Wh ? typeof t == "function" ? t() : t : n !== void 0 ? n(t) : t, Q.memoizedState = e, e = Q.queue = { last: null, dispatch: null }, e = e.dispatch = zw.bind(null, zt, e), [Q.memoizedState, e];
}
function wd(e, t) {
  if (zt = yn(), Q = fa(), t = t === void 0 ? null : t, Q !== null) {
    var n = Q.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var o = 0; o < r.length && o < t.length; o++) if (!Rw(t[o], r[o])) {
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
function zw(e, t, n) {
  if (25 <= cl) throw Error(I(301));
  if (e === zt) if (Ai = !0, e = { action: n, next: null }, Ht === null && (Ht = /* @__PURE__ */ new Map()), n = Ht.get(t), n === void 0) Ht.set(t, e);
  else {
    for (t = n; t.next !== null; ) t = t.next;
    t.next = e;
  }
}
function Fw() {
  throw Error(I(394));
}
function bo() {
}
var xd = { readContext: function(e) {
  return e._currentValue;
}, useContext: function(e) {
  return yn(), e._currentValue;
}, useMemo: wd, useReducer: vd, useRef: function(e) {
  zt = yn(), Q = fa();
  var t = Q.memoizedState;
  return t === null ? (e = { current: e }, Q.memoizedState = e) : t;
}, useState: function(e) {
  return vd(Wh, e);
}, useInsertionEffect: bo, useLayoutEffect: function() {
}, useCallback: function(e, t) {
  return wd(function() {
    return e;
  }, t);
}, useImperativeHandle: bo, useEffect: bo, useDebugValue: bo, useDeferredValue: function(e) {
  return yn(), e;
}, useTransition: function() {
  return yn(), [!1, Fw];
}, useId: function() {
  var e = da.treeContext, t = e.overflow;
  e = e.id, e = (e & ~(1 << 32 - si(e) - 1)).toString(32) + t;
  var n = ai;
  if (n === null) throw Error(I(404));
  return t = lo++, e = ":" + n.idPrefix + "R" + e, 0 < t && (e += "H" + t.toString(32)), e + ":";
}, useMutableSource: function(e, t) {
  return yn(), t(e._source);
}, useSyncExternalStore: function(e, t, n) {
  if (n === void 0) throw Error(I(407));
  return n();
} }, ai = null, Gl = Sh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
function Lw(e) {
  return console.error(e), null;
}
function Tr() {
}
function Iw(e, t, n, r, o, i, l, s, u) {
  var a = [], d = /* @__PURE__ */ new Set();
  return t = { destination: null, responseState: t, progressiveChunkSize: r === void 0 ? 12800 : r, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: d, pingedTasks: a, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: o === void 0 ? Lw : o, onAllReady: i === void 0 ? Tr : i, onShellReady: l === void 0 ? Tr : l, onShellError: s === void 0 ? Tr : s, onFatalError: u === void 0 ? Tr : u }, n = Ui(t, 0, null, n, !1, !1), n.parentFlushed = !0, e = ha(t, e, null, n, d, Dh, null, Nw), a.push(e), t;
}
function ha(e, t, n, r, o, i, l, s) {
  e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
  var u = { node: t, ping: function() {
    var a = e.pingedTasks;
    a.push(u), a.length === 1 && Hh(e);
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
  n(t), n = e.onFatalError, n(t), e.destination !== null ? (e.status = 2, _h(e.destination, t)) : (e.status = 1, e.fatalError = t);
}
function kd(e, t, n, r, o) {
  for (zt = {}, da = t, lo = 0, e = n(r, o); Ai; ) Ai = !1, lo = 0, cl += 1, Q = null, e = n(r, o);
  return pa(), e;
}
function Sd(e, t, n, r) {
  var o = n.render(), i = r.childContextTypes;
  if (i != null) {
    var l = t.legacyContext;
    if (typeof n.getChildContext != "function") r = l;
    else {
      n = n.getChildContext();
      for (var s in n) if (!(s in i)) throw Error(I(108, Zs(r) || "Unknown", s));
      r = Ar({}, l, n);
    }
    t.legacyContext = r, Qe(e, t, o), t.legacyContext = l;
  } else Qe(e, t, o);
}
function Cd(e, t) {
  if (e && e.defaultProps) {
    t = Ar({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function qs(e, t, n, r, o) {
  if (typeof n == "function") if (n.prototype && n.prototype.isReactComponent) {
    o = hd(n, t.legacyContext);
    var i = n.contextType;
    i = new n(r, typeof i == "object" && i !== null ? i._currentValue : o), yd(i, n, r, o), Sd(e, t, i, n);
  } else {
    i = hd(n, t.legacyContext), o = kd(e, t, n, r, i);
    var l = lo !== 0;
    if (typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0) yd(o, n, r, i), Sd(e, t, o, n);
    else if (l) {
      r = t.treeContext, t.treeContext = Js(r, 1, 0);
      try {
        Qe(e, t, o);
      } finally {
        t.treeContext = r;
      }
    } else Qe(e, t, o);
  }
  else if (typeof n == "string") {
    switch (o = t.blockedSegment, i = $v(o.chunks, n, r, e.responseState, o.formatContext), o.lastPushedText = !1, l = o.formatContext, o.formatContext = xv(l, n, r), eu(e, t, i), o.formatContext = l, n) {
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
      case Ew:
      case _w:
      case Th:
      case Mh:
      case Ph:
        Qe(e, t, r.children);
        return;
      case Lh:
        Qe(e, t, r.children);
        return;
      case Cw:
        throw Error(I(343));
      case Fh:
        e: {
          n = t.blockedBoundary, o = t.blockedSegment, i = r.fallback, r = r.children, l = /* @__PURE__ */ new Set();
          var s = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: l, errorDigest: null }, u = Ui(e, o.chunks.length, s, o.formatContext, !1, !1);
          o.children.push(u), o.lastPushedText = !1;
          var a = Ui(e, 0, null, o.formatContext, !1, !1);
          a.parentFlushed = !0, t.blockedBoundary = s, t.blockedSegment = a;
          try {
            if (eu(
              e,
              t,
              r
            ), a.lastPushedText && a.textEmbedded && a.chunks.push(aa), a.status = 1, Vi(s, a), s.pendingTasks === 0) break e;
          } catch (d) {
            a.status = 4, s.forceClientRender = !0, s.errorDigest = so(e, d);
          } finally {
            t.blockedBoundary = n, t.blockedSegment = o;
          }
          t = ha(e, i, n, u, l, t.legacyContext, t.context, t.treeContext), e.pingedTasks.push(t);
        }
        return;
    }
    if (typeof n == "object" && n !== null) switch (n.$$typeof) {
      case zh:
        if (r = kd(e, t, n.render, r, o), lo !== 0) {
          n = t.treeContext, t.treeContext = Js(n, 1, 0);
          try {
            Qe(e, t, r);
          } finally {
            t.treeContext = n;
          }
        } else Qe(e, t, r);
        return;
      case Ih:
        n = n.type, r = Cd(n, r), qs(e, t, n, r, o);
        return;
      case jh:
        if (o = r.children, n = n._context, r = r.value, i = n._currentValue, n._currentValue = r, l = kn, kn = r = { parent: l, depth: l === null ? 0 : l.depth + 1, context: n, parentValue: i, value: r }, t.context = r, Qe(e, t, o), e = kn, e === null) throw Error(I(403));
        r = e.parentValue, e.context._currentValue = r === $w ? e.context._defaultValue : r, e = kn = e.parent, t.context = e;
        return;
      case Rh:
        r = r.children, r = r(n._currentValue), Qe(e, t, r);
        return;
      case ca:
        o = n._init, n = o(n._payload), r = Cd(n, r), qs(e, t, n, r, void 0);
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
      case Sw:
        qs(e, t, n.type, n.props, n.ref);
        return;
      case Nh:
        throw Error(I(257));
      case ca:
        var r = n._init;
        n = r(n._payload), Qe(e, t, n);
        return;
    }
    if (Gs(n)) {
      _d(e, t, n);
      return;
    }
    if (n === null || typeof n != "object" ? r = null : (r = pd && n[pd] || n["@@iterator"], r = typeof r == "function" ? r : null), r && (r = r.call(n))) {
      if (n = r.next(), !n.done) {
        var o = [];
        do
          o.push(n.value), n = r.next();
        while (!n.done);
        _d(e, t, o);
      }
      return;
    }
    throw e = Object.prototype.toString.call(n), Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  typeof n == "string" ? (r = t.blockedSegment, r.lastPushedText = ld(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)) : typeof n == "number" && (r = t.blockedSegment, r.lastPushedText = ld(t.blockedSegment.chunks, "" + n, e.responseState, r.lastPushedText));
}
function _d(e, t, n) {
  for (var r = n.length, o = 0; o < r; o++) {
    var i = t.treeContext;
    t.treeContext = Js(i, r, o);
    try {
      eu(e, t, n[o]);
    } finally {
      t.treeContext = i;
    }
  }
}
function eu(e, t, n) {
  var r = t.blockedSegment.formatContext, o = t.legacyContext, i = t.context;
  try {
    return Qe(e, t, n);
  } catch (u) {
    if (pa(), typeof u == "object" && u !== null && typeof u.then == "function") {
      n = u;
      var l = t.blockedSegment, s = Ui(e, l.chunks.length, null, l.formatContext, l.lastPushedText, !0);
      l.children.push(s), l.lastPushedText = !1, e = ha(e, t.node, t.blockedBoundary, s, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, n.then(e, e), t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = i, bi(i);
    } else throw t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = i, bi(i), u;
  }
}
function Dw(e) {
  var t = e.blockedBoundary;
  e = e.blockedSegment, e.status = 3, Bh(this, t, e);
}
function Vh(e, t, n) {
  var r = e.blockedBoundary;
  e.blockedSegment.status = 3, r === null ? (t.allPendingTasks--, t.status !== 2 && (t.status = 2, t.destination !== null && t.destination.close())) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, e = n === void 0 ? Error(I(432)) : n, r.errorDigest = t.onError(e), r.parentFlushed && t.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach(function(o) {
    return Vh(o, t, n);
  }), r.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0 && (r = t.onAllReady, r()));
}
function Vi(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    n.id = t.id, n.parentFlushed = !0, n.status === 1 && Vi(e, n);
  } else e.completedSegments.push(t);
}
function Bh(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(I(389));
      e.completedRootSegment = n;
    }
    e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Tr, t = e.onShellReady, t());
  } else t.pendingTasks--, t.forceClientRender || (t.pendingTasks === 0 ? (n.parentFlushed && n.status === 1 && Vi(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(Dw, e), t.fallbackAbortableTasks.clear()) : n.parentFlushed && n.status === 1 && (Vi(t, n), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
}
function Hh(e) {
  if (e.status !== 2) {
    var t = kn, n = Gl.current;
    Gl.current = xd;
    var r = ai;
    ai = e.responseState;
    try {
      var o = e.pingedTasks, i;
      for (i = 0; i < o.length; i++) {
        var l = o[i], s = e, u = l.blockedSegment;
        if (u.status === 0) {
          bi(l.context);
          try {
            Qe(s, l, l.node), u.lastPushedText && u.textEmbedded && u.chunks.push(aa), l.abortSet.delete(l), u.status = 1, Bh(s, l.blockedBoundary, u);
          } catch (g) {
            if (pa(), typeof g == "object" && g !== null && typeof g.then == "function") {
              var a = l.ping;
              g.then(a, a);
            } else {
              l.abortSet.delete(l), u.status = 4;
              var d = l.blockedBoundary, p = g, m = so(s, p);
              if (d === null ? Wi(s, p) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = !0, d.errorDigest = m, d.parentFlushed && s.clientRenderedBoundaries.push(d))), s.allPendingTasks--, s.allPendingTasks === 0) {
                var y = s.onAllReady;
                y();
              }
            }
          } finally {
          }
        }
      }
      o.splice(0, i), e.destination !== null && ma(e, e.destination);
    } catch (g) {
      so(e, g), Wi(e, g);
    } finally {
      ai = r, Gl.current = n, n === xd && bi(t);
    }
  }
}
function Ao(e, t, n) {
  switch (n.parentFlushed = !0, n.status) {
    case 0:
      var r = n.id = e.nextSegmentId++;
      return n.lastPushedText = !1, n.textEmbedded = !1, e = e.responseState, M(t, Tv), M(t, e.placeholderPrefix), e = D(r.toString(16)), M(t, e), G(t, Mv);
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
      return i < r.length && (o = G(t, r[i])), o;
    default:
      throw Error(I(390));
  }
}
function dl(e, t, n) {
  var r = n.boundary;
  if (r === null) return Ao(e, t, n);
  if (r.parentFlushed = !0, r.forceClientRender) r = r.errorDigest, G(t, Fv), M(t, Iv), r && (M(t, Ov), M(t, D(he(r))), M(t, Dv)), G(t, bv), Ao(e, t, n);
  else if (0 < r.pendingTasks) {
    r.rootSegmentID = e.nextSegmentId++, 0 < r.completedSegments.length && e.partialBoundaries.push(r);
    var o = e.responseState, i = o.nextSuspenseID++;
    o = $(o.boundaryPrefix + i.toString(16)), r = r.id = o, fd(t, e.responseState, r), Ao(e, t, n);
  } else if (r.byteSize > e.progressiveChunkSize) r.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(r), fd(t, e.responseState, r.id), Ao(e, t, n);
  else {
    if (G(t, jv), n = r.completedSegments, n.length !== 1) throw Error(I(391));
    dl(e, t, n[0]);
  }
  return G(t, Lv);
}
function Ed(e, t, n) {
  return sw(t, e.responseState, n.formatContext, n.id), dl(e, t, n), uw(t, n.formatContext);
}
function $d(e, t, n) {
  for (var r = n.completedSegments, o = 0; o < r.length; o++) Qh(e, t, n, r[o]);
  if (r.length = 0, e = e.responseState, r = n.id, n = n.rootSegmentID, M(t, e.startInlineScript), e.sentCompleteBoundaryFunction ? M(t, hw) : (e.sentCompleteBoundaryFunction = !0, M(t, pw)), r === null) throw Error(I(395));
  return n = D(n.toString(16)), M(t, r), M(t, mw), M(t, e.segmentPrefix), M(t, n), G(t, yw);
}
function Qh(e, t, n, r) {
  if (r.status === 2) return !0;
  var o = r.id;
  if (o === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(I(392));
    return Ed(e, t, r);
  }
  return Ed(e, t, r), e = e.responseState, M(t, e.startInlineScript), e.sentCompleteSegmentFunction ? M(t, cw) : (e.sentCompleteSegmentFunction = !0, M(t, aw)), M(t, e.segmentPrefix), o = D(o.toString(16)), M(t, o), M(t, dw), M(t, e.placeholderPrefix), M(t, o), G(t, fw);
}
function ma(e, t) {
  Be = new Uint8Array(512), He = 0;
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      dl(e, t, n), e.completedRootSegment = null;
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) M(t, r[n]);
      n < r.length && G(t, r[n]);
    }
    var o = e.clientRenderedBoundaries, i;
    for (i = 0; i < o.length; i++) {
      var l = o[i];
      r = t;
      var s = e.responseState, u = l.id, a = l.errorDigest, d = l.errorMessage, p = l.errorComponentStack;
      if (M(r, s.startInlineScript), s.sentClientRenderFunction ? M(r, vw) : (s.sentClientRenderFunction = !0, M(
        r,
        gw
      )), u === null) throw Error(I(395));
      M(r, u), M(r, ww), (a || d || p) && (M(r, Xl), M(r, D(Kl(a || "")))), (d || p) && (M(r, Xl), M(r, D(Kl(d || "")))), p && (M(r, Xl), M(r, D(Kl(p)))), G(r, xw);
    }
    o.splice(0, i);
    var m = e.completedBoundaries;
    for (i = 0; i < m.length; i++) $d(e, t, m[i]);
    m.splice(0, i), nd(t), Be = new Uint8Array(512), He = 0;
    var y = e.partialBoundaries;
    for (i = 0; i < y.length; i++) {
      var g = y[i];
      e: {
        o = e, l = t;
        var x = g.completedSegments;
        for (s = 0; s < x.length; s++) if (!Qh(
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
    var f = e.completedBoundaries;
    for (i = 0; i < f.length; i++) $d(e, t, f[i]);
    f.splice(0, i);
  } finally {
    nd(t), e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && t.close();
  }
}
function Nd(e, t) {
  try {
    var n = e.abortableTasks;
    n.forEach(function(r) {
      return Vh(r, e, t);
    }), n.clear(), e.destination !== null && ma(e, e.destination);
  } catch (r) {
    so(e, r), Wi(e, r);
  }
}
la.renderToReadableStream = function(e, t) {
  return new Promise(function(n, r) {
    var o, i, l = new Promise(function(d, p) {
      i = d, o = p;
    }), s = Iw(e, vv(t ? t.identifierPrefix : void 0, t ? t.nonce : void 0, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0), wv(t ? t.namespaceURI : void 0), t ? t.progressiveChunkSize : void 0, t ? t.onError : void 0, i, function() {
      var d = new ReadableStream({ type: "bytes", pull: function(p) {
        if (s.status === 1) s.status = 2, _h(p, s.fatalError);
        else if (s.status !== 2 && s.destination === null) {
          s.destination = p;
          try {
            ma(s, p);
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
    Hh(s);
  });
};
la.version = "18.3.1";
var ur, Yh;
ur = sr, Yh = la;
ur.version;
var Ow = ur.renderToString;
ur.renderToStaticMarkup;
ur.renderToNodeStream;
ur.renderToStaticNodeStream;
Yh.renderToReadableStream;
var Xh = { exports: {} }, bw = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Aw = bw, Uw = Aw;
function Kh() {
}
function Gh() {
}
Gh.resetWarningCache = Kh;
var Ww = function() {
  function e(r, o, i, l, s, u) {
    if (u !== Uw) {
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
    checkPropTypes: Gh,
    resetWarningCache: Kh
  };
  return n.PropTypes = n, n;
};
Xh.exports = Ww();
var Vw = Xh.exports;
const at = /* @__PURE__ */ Td(Vw);
var Bw = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Zh(e, t) {
  return e(t = { exports: {} }, t.exports), t.exports;
}
var Hw = Zh(function(e) {
  (function(t) {
    var n = function(k, f, c) {
      if (!u(f) || d(f) || p(f) || m(f) || s(f)) return f;
      var h, w = 0, S = 0;
      if (a(f)) for (h = [], S = f.length; w < S; w++) h.push(n(k, f[w], c));
      else for (var E in h = {}, f) Object.prototype.hasOwnProperty.call(f, E) && (h[k(E, c)] = n(k, f[E], c));
      return h;
    }, r = function(k) {
      return y(k) ? k : (k = k.replace(/[\-_\s]+(.)?/g, function(f, c) {
        return c ? c.toUpperCase() : "";
      })).substr(0, 1).toLowerCase() + k.substr(1);
    }, o = function(k) {
      var f = r(k);
      return f.substr(0, 1).toUpperCase() + f.substr(1);
    }, i = function(k, f) {
      return function(c, h) {
        var w = (h = h || {}).separator || "_", S = h.split || /(?=[A-Z])/;
        return c.split(S).join(w);
      }(k, f).toLowerCase();
    }, l = Object.prototype.toString, s = function(k) {
      return typeof k == "function";
    }, u = function(k) {
      return k === Object(k);
    }, a = function(k) {
      return l.call(k) == "[object Array]";
    }, d = function(k) {
      return l.call(k) == "[object Date]";
    }, p = function(k) {
      return l.call(k) == "[object RegExp]";
    }, m = function(k) {
      return l.call(k) == "[object Boolean]";
    }, y = function(k) {
      return (k -= 0) == k;
    }, g = function(k, f) {
      var c = f && "process" in f ? f.process : f;
      return typeof c != "function" ? k : function(h, w) {
        return c(h, k, w);
      };
    }, x = { camelize: r, decamelize: i, pascalize: o, depascalize: i, camelizeKeys: function(k, f) {
      return n(g(r, f), k);
    }, decamelizeKeys: function(k, f) {
      return n(g(i, f), k, f);
    }, pascalizeKeys: function(k, f) {
      return n(g(o, f), k);
    }, depascalizeKeys: function() {
      return this.decamelizeKeys.apply(this, arguments);
    } };
    e.exports ? e.exports = x : t.humps = x;
  })(Bw);
}).decamelize, Qw = function(e) {
  if (Array.isArray(e)) return e;
}, Yw = function(e, t) {
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
}, Xw = function(e, t) {
  if (e) {
    if (typeof e == "string") return Pd(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Pd(e, t) : void 0;
  }
}, Kw = function() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}, Gw = function(e, t) {
  return Qw(e) || Yw(e, t) || Xw(e, t) || Kw();
}, Jh = Zh(function(e) {
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
}), Zw = function(e, t) {
  if (e == null) return {};
  var n, r, o = {}, i = Object.keys(e);
  for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
  return o;
}, qh = function(e, t) {
  if (e == null) return {};
  var n, r, o = Zw(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}, Jw = j.createContext(null);
function em(e) {
  var t = e.children, n = t === void 0 ? "" : t, r = qh(e, ["children"]);
  return typeof n != "string" && (n = Ow(n)), Ye.createElement("template", Jh({}, r, { dangerouslySetInnerHTML: { __html: n } }));
}
function tm(e) {
  var t = e.root, n = e.children;
  return Up.createPortal(n === void 0 ? null : n, t);
}
function qw(e) {
  var t = j.forwardRef(function(n, r) {
    var o, i, l = n.mode, s = l === void 0 ? "open" : l, u = n.delegatesFocus, a = u !== void 0 && u, d = n.styleSheets, p = d === void 0 ? [] : d, m = n.ssr, y = m !== void 0 && m, g = n.children, x = qh(n, ["mode", "delegatesFocus", "styleSheets", "ssr", "children"]), k = (i = j.useRef((o = r) && o.current), j.useEffect(function() {
      o && (o.current = i.current);
    }, [o]), i), f = j.useState(null), c = Gw(f, 2), h = c[0], w = c[1], S = "node_".concat(s).concat(a);
    return j.useLayoutEffect(function() {
      if (k.current) try {
        if (typeof r == "function" && r(k.current), y) {
          var E = k.current.shadowRoot;
          return void w(E);
        }
        var N = k.current.attachShadow({ mode: s, delegatesFocus: a });
        p.length > 0 && (N.adoptedStyleSheets = p), w(N);
      } catch (T) {
        (function(W) {
          var R = W.error, oe = W.styleSheets, b = W.root;
          switch (R.name) {
            case "NotSupportedError":
              oe.length > 0 && (b.adoptedStyleSheets = oe);
              break;
            default:
              throw R;
          }
        })({ error: T, styleSheets: p, root: h });
      }
    }, [r, k, p]), Ye.createElement(Ye.Fragment, null, Ye.createElement(e.tag, Jh({ key: S, ref: k }, x), (h || y) && Ye.createElement(Jw.Provider, { value: h }, y ? Ye.createElement(em, { shadowroot: s, shadowrootmode: s }, e.render({ root: h, ssr: y, children: g })) : Ye.createElement(tm, { root: h }, e.render({ root: h, ssr: y, children: g })))));
  });
  return t.propTypes = { mode: at.oneOf(["open", "closed"]), delegatesFocus: at.bool, styleSheets: at.arrayOf(at.instanceOf(globalThis.CSSStyleSheet)), ssr: at.bool, children: at.node }, t;
}
em.propTypes = { children: at.oneOfType([at.string, at.node]) }, tm.propTypes = { root: at.object.isRequired, children: at.node };
var Zl = /* @__PURE__ */ new Map();
function ex() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "core", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(r) {
    return r.children;
  };
  return new Proxy(e, { get: function(r, o) {
    var i = Hw(o, { separator: "-" }), l = "".concat(t, "-").concat(i);
    return Zl.has(l) || Zl.set(l, qw({ tag: i, render: n })), Zl.get(l);
  } });
}
var tx = ex();
const nx = '@keyframes slide-up{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}input{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}input::-moz-placeholder{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}input::placeholder{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}input:disabled{cursor:not-allowed;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.\\!container{width:100%!important}.container{width:100%}@media (min-width: 640px){.\\!container{max-width:640px!important}.container{max-width:640px}}@media (min-width: 768px){.\\!container{max-width:768px!important}.container{max-width:768px}}@media (min-width: 1024px){.\\!container{max-width:1024px!important}.container{max-width:1024px}}@media (min-width: 1280px){.\\!container{max-width:1280px!important}.container{max-width:1280px}}@media (min-width: 1536px){.\\!container{max-width:1536px!important}.container{max-width:1536px}}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-4{top:1rem;right:1rem;bottom:1rem;left:1rem}.bottom-24{bottom:6rem}.bottom-6{bottom:1.5rem}.bottom-full{bottom:100%}.left-0{left:0}.right-0{right:0}.right-6{right:1.5rem}.top-full{top:100%}.z-50{z-index:50}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.ml-1{margin-left:.25rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.inline{display:inline}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-12{height:3rem}.h-2{height:.5rem}.h-3{height:.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-\\[75vh\\]{height:75vh}.h-auto{height:auto}.h-full{height:100%}.max-h-48{max-height:12rem}.max-h-\\[800px\\]{max-height:800px}.max-h-none{max-height:none}.min-h-0{min-height:0px}.min-h-\\[400px\\]{min-height:400px}.min-h-screen{min-height:100vh}.w-12{width:3rem}.w-2{width:.5rem}.w-3{width:.75rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-64{width:16rem}.w-8{width:2rem}.w-\\[400px\\]{width:400px}.w-auto{width:auto}.w-full{width:100%}.min-w-0{min-width:0px}.min-w-48{min-width:12rem}.min-w-\\[32px\\]{min-width:32px}.max-w-3xl{max-width:48rem}.max-w-\\[200px\\]{max-width:200px}.max-w-\\[calc\\(100vw-3rem\\)\\]{max-width:calc(100vw - 3rem)}.max-w-none{max-width:none}.max-w-xs{max-width:20rem}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.animate-slide-up{animation:slide-up .3s ease-out}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-pre{white-space:pre}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-xl{border-radius:.75rem}.rounded-t-lg{border-top-left-radius:.5rem;border-top-right-radius:.5rem}.rounded-bl-sm{border-bottom-left-radius:.125rem}.rounded-br-sm{border-bottom-right-radius:.125rem}.border{border-width:1px}.border-t{border-top-width:1px}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.border-red-200{--tw-border-opacity: 1;border-color:rgb(254 202 202 / var(--tw-border-opacity, 1))}.border-yellow-200{--tw-border-opacity: 1;border-color:rgb(254 240 138 / var(--tw-border-opacity, 1))}.bg-blue-500{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity, 1))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-900{--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity, 1))}.bg-green-100{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity, 1))}.bg-green-400{--tw-bg-opacity: 1;background-color:rgb(74 222 128 / var(--tw-bg-opacity, 1))}.bg-red-100{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity, 1))}.bg-red-400{--tw-bg-opacity: 1;background-color:rgb(248 113 113 / var(--tw-bg-opacity, 1))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-yellow-100{--tw-bg-opacity: 1;background-color:rgb(254 249 195 / var(--tw-bg-opacity, 1))}.bg-yellow-50{--tw-bg-opacity: 1;background-color:rgb(254 252 232 / var(--tw-bg-opacity, 1))}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.pb-1{padding-bottom:.25rem}.pb-2{padding-bottom:.5rem}.text-left{text-align:left}.text-center{text-align:center}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.text-blue-500{--tw-text-opacity: 1;color:rgb(59 130 246 / var(--tw-text-opacity, 1))}.text-blue-600{--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-green-300{--tw-text-opacity: 1;color:rgb(134 239 172 / var(--tw-text-opacity, 1))}.text-green-600{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity, 1))}.text-indigo-500{--tw-text-opacity: 1;color:rgb(99 102 241 / var(--tw-text-opacity, 1))}.text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity, 1))}.text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.text-red-800{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-yellow-600{--tw-text-opacity: 1;color:rgb(202 138 4 / var(--tw-text-opacity, 1))}.text-yellow-800{--tw-text-opacity: 1;color:rgb(133 77 14 / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.opacity-50{opacity:.5}.opacity-90{opacity:.9}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-2xl{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-50:hover{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.hover\\:bg-white\\/10:hover{background-color:#ffffff1a}.hover\\:text-blue-700:hover{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity, 1))}.hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.hover\\:text-gray-700:hover{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.hover\\:text-gray-800:hover{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.hover\\:text-red-600:hover{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.hover\\:text-red-800:hover{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity, 1))}.hover\\:text-red-900:hover{--tw-text-opacity: 1;color:rgb(127 29 29 / var(--tw-text-opacity, 1))}.hover\\:text-yellow-900:hover{--tw-text-opacity: 1;color:rgb(113 63 18 / var(--tw-text-opacity, 1))}.hover\\:opacity-90:hover{opacity:.9}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-opacity-50:focus{--tw-ring-opacity: .5}.disabled\\:opacity-50:disabled{opacity:.5}';
function rx(e) {
  return e.replace(/:root\b/g, ":host").replaceAll("((-webkit-hyphens:none)) and ", "").replaceAll("(-webkit-hyphens: none) and ", "");
}
function nm({ ticketdeskId: e }) {
  const [, t] = e.split("_"), [n, r] = j.useState(!1), [o, i] = j.useState(!1), {
    messages: l,
    sendMessage: s,
    startNewChat: u,
    endCurrentChat: a,
    loadSession: d,
    getRecentChats: p,
    updateProfile: m,
    errorMessage: y,
    setErrorMessage: g,
    sessions: x,
    selectedSession: k,
    isConnected: f,
    isLoading: c,
    config: h,
    operators: w,
    lastActive: S
  } = T1({
    ticketdeskId: e
  }), E = (N) => {
    if (N) {
      const T = Bs(`ti_${t}_session_id`);
      d(T);
    }
    r(N);
  };
  return c === !0 || !h ? null : /* @__PURE__ */ v.jsxs(tx.div, { children: [
    /* @__PURE__ */ v.jsx("style", { children: rx(nx) }),
    /* @__PURE__ */ v.jsx(
      fg,
      {
        isOpen: n,
        onClick: () => E(!n),
        config: h
      }
    ),
    /* @__PURE__ */ v.jsx(
      h1,
      {
        ticketdeskId: e,
        isOpen: n,
        isMaximized: o,
        isConnected: f,
        config: h,
        operators: w,
        lastActive: S,
        messages: l,
        sessions: x,
        selectedSession: k,
        onStartNewChat: u,
        onEndChat: a,
        onLoadSession: d,
        onGetRecentChats: p,
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
function ox(e) {
  St || (St = document.createElement("div"), St.id = "ticketdesk-ai", St.setAttribute("style", "color-scheme: light;"), document.body.appendChild(St));
  const t = () => {
    kr && (kr.unmount(), kr = null), St && (St.remove(), St = null);
  };
  return kr = Ku(St), kr.render(/* @__PURE__ */ v.jsx(nm, { ticketdeskId: e })), { close: t };
}
const ix = Dy(nm, {
  props: {
    ticketdeskId: "string"
  }
});
customElements.define("ticketdesk-chatbot", ix);
window.ticketdesk = {
  initChatbot: ox
};
window.TICKETDESK_ID && window.ticketdesk.initChatbot(window.TICKETDESK_ID);
