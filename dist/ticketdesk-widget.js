var im = Object.defineProperty;
var lm = (e, t, n) => t in e ? im(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var U = (e, t, n) => lm(e, typeof t != "symbol" ? t + "" : t, n);
function jd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Rd = { exports: {} }, O = {};
var uo = Symbol.for("react.element"), sm = Symbol.for("react.portal"), um = Symbol.for("react.fragment"), am = Symbol.for("react.strict_mode"), cm = Symbol.for("react.profiler"), dm = Symbol.for("react.provider"), fm = Symbol.for("react.context"), pm = Symbol.for("react.forward_ref"), hm = Symbol.for("react.suspense"), mm = Symbol.for("react.memo"), ym = Symbol.for("react.lazy"), va = Symbol.iterator;
function gm(e) {
  return e === null || typeof e != "object" ? null : (e = va && e[va] || e["@@iterator"], typeof e == "function" ? e : null);
}
var zd = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Fd = Object.assign, Ld = {};
function or(e, t, n) {
  this.props = e, this.context = t, this.refs = Ld, this.updater = n || zd;
}
or.prototype.isReactComponent = {};
or.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
or.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Id() {
}
Id.prototype = or.prototype;
function ru(e, t, n) {
  this.props = e, this.context = t, this.refs = Ld, this.updater = n || zd;
}
var ou = ru.prototype = new Id();
ou.constructor = ru;
Fd(ou, or.prototype);
ou.isPureReactComponent = !0;
var wa = Array.isArray, Dd = Object.prototype.hasOwnProperty, iu = { current: null }, Od = { key: !0, ref: !0, __self: !0, __source: !0 };
function bd(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) Dd.call(t, r) && !Od.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: uo, type: e, key: i, ref: l, props: o, _owner: iu.current };
}
function vm(e, t) {
  return { $$typeof: uo, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function lu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === uo;
}
function wm(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var xa = /\/+/g;
function hl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? wm("" + e.key) : t.toString(36);
}
function Wo(e, t, n, r, o) {
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
        case sm:
          l = !0;
      }
  }
  if (l) return l = e, o = o(l), e = r === "" ? "." + hl(l, 0) : r, wa(o) ? (n = "", e != null && (n = e.replace(xa, "$&/") + "/"), Wo(o, t, n, "", function(a) {
    return a;
  })) : o != null && (lu(o) && (o = vm(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(xa, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", wa(e)) for (var s = 0; s < e.length; s++) {
    i = e[s];
    var u = r + hl(i, s);
    l += Wo(i, t, n, u, o);
  }
  else if (u = gm(e), typeof u == "function") for (e = u.call(e), s = 0; !(i = e.next()).done; ) i = i.value, u = r + hl(i, s++), l += Wo(i, t, n, u, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function yo(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Wo(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function xm(e) {
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
var Te = { current: null }, Vo = { transition: null }, km = { ReactCurrentDispatcher: Te, ReactCurrentBatchConfig: Vo, ReactCurrentOwner: iu };
function Ad() {
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
  if (!lu(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
O.Component = or;
O.Fragment = um;
O.Profiler = cm;
O.PureComponent = ru;
O.StrictMode = am;
O.Suspense = hm;
O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = km;
O.act = Ad;
O.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Fd({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = iu.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (u in t) Dd.call(t, u) && !Od.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
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
  return e = { $$typeof: fm, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: dm, _context: e }, e.Consumer = e;
};
O.createElement = bd;
O.createFactory = function(e) {
  var t = bd.bind(null, e);
  return t.type = e, t;
};
O.createRef = function() {
  return { current: null };
};
O.forwardRef = function(e) {
  return { $$typeof: pm, render: e };
};
O.isValidElement = lu;
O.lazy = function(e) {
  return { $$typeof: ym, _payload: { _status: -1, _result: e }, _init: xm };
};
O.memo = function(e, t) {
  return { $$typeof: mm, type: e, compare: t === void 0 ? null : t };
};
O.startTransition = function(e) {
  var t = Vo.transition;
  Vo.transition = {};
  try {
    e();
  } finally {
    Vo.transition = t;
  }
};
O.unstable_act = Ad;
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
Rd.exports = O;
var j = Rd.exports;
const Ye = /* @__PURE__ */ jd(j);
var Ud = { exports: {} }, Ze = {}, Wd = { exports: {} }, Vd = {};
(function(e) {
  function t(E, z) {
    var R = E.length;
    E.push(z);
    e: for (; 0 < R; ) {
      var A = R - 1 >>> 1, ce = E[A];
      if (0 < o(ce, z)) E[A] = z, E[R] = ce, R = A;
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var z = E[0], R = E.pop();
    if (R !== z) {
      E[0] = R;
      e: for (var A = 0, ce = E.length, ho = ce >>> 1; A < ho; ) {
        var sn = 2 * (A + 1) - 1, pl = E[sn], un = sn + 1, mo = E[un];
        if (0 > o(pl, R)) un < ce && 0 > o(mo, pl) ? (E[A] = mo, E[un] = R, A = un) : (E[A] = pl, E[sn] = R, A = sn);
        else if (un < ce && 0 > o(mo, R)) E[A] = mo, E[un] = R, A = un;
        else break e;
      }
    }
    return z;
  }
  function o(E, z) {
    var R = E.sortIndex - z.sortIndex;
    return R !== 0 ? R : E.id - z.id;
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
  var u = [], a = [], c = 1, p = null, m = 3, y = !1, g = !1, x = !1, k = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(E) {
    for (var z = n(a); z !== null; ) {
      if (z.callback === null) r(a);
      else if (z.startTime <= E) r(a), z.sortIndex = z.expirationTime, t(u, z);
      else break;
      z = n(a);
    }
  }
  function w(E) {
    if (x = !1, h(E), !g) if (n(u) !== null) g = !0, V(S);
    else {
      var z = n(a);
      z !== null && Q(w, z.startTime - E);
    }
  }
  function S(E, z) {
    g = !1, x && (x = !1, f(P), P = -1), y = !0;
    var R = m;
    try {
      for (h(z), p = n(u); p !== null && (!(p.expirationTime > z) || E && !Z()); ) {
        var A = p.callback;
        if (typeof A == "function") {
          p.callback = null, m = p.priorityLevel;
          var ce = A(p.expirationTime <= z);
          z = e.unstable_now(), typeof ce == "function" ? p.callback = ce : p === n(u) && r(u), h(z);
        } else r(u);
        p = n(u);
      }
      if (p !== null) var ho = !0;
      else {
        var sn = n(a);
        sn !== null && Q(w, sn.startTime - z), ho = !1;
      }
      return ho;
    } finally {
      p = null, m = R, y = !1;
    }
  }
  var _ = !1, $ = null, P = -1, b = 5, F = -1;
  function Z() {
    return !(e.unstable_now() - F < b);
  }
  function H() {
    if ($ !== null) {
      var E = e.unstable_now();
      F = E;
      var z = !0;
      try {
        z = $(!0, E);
      } finally {
        z ? we() : (_ = !1, $ = null);
      }
    } else _ = !1;
  }
  var we;
  if (typeof d == "function") we = function() {
    d(H);
  };
  else if (typeof MessageChannel < "u") {
    var Oe = new MessageChannel(), ar = Oe.port2;
    Oe.port1.onmessage = H, we = function() {
      ar.postMessage(null);
    };
  } else we = function() {
    k(H, 0);
  };
  function V(E) {
    $ = E, _ || (_ = !0, we());
  }
  function Q(E, z) {
    P = k(function() {
      E(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(E) {
    E.callback = null;
  }, e.unstable_continueExecution = function() {
    g || y || (g = !0, V(S));
  }, e.unstable_forceFrameRate = function(E) {
    0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < E ? Math.floor(1e3 / E) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(E) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var z = 3;
        break;
      default:
        z = m;
    }
    var R = m;
    m = z;
    try {
      return E();
    } finally {
      m = R;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(E, z) {
    switch (E) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        E = 3;
    }
    var R = m;
    m = E;
    try {
      return z();
    } finally {
      m = R;
    }
  }, e.unstable_scheduleCallback = function(E, z, R) {
    var A = e.unstable_now();
    switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? A + R : A) : R = A, E) {
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
    return ce = R + ce, E = { id: c++, callback: z, priorityLevel: E, startTime: R, expirationTime: ce, sortIndex: -1 }, R > A ? (E.sortIndex = R, t(a, E), n(u) === null && E === n(a) && (x ? (f(P), P = -1) : x = !0, Q(w, R - A))) : (E.sortIndex = ce, t(u, E), g || y || (g = !0, V(S))), E;
  }, e.unstable_shouldYield = Z, e.unstable_wrapCallback = function(E) {
    var z = m;
    return function() {
      var R = m;
      m = z;
      try {
        return E.apply(this, arguments);
      } finally {
        m = R;
      }
    };
  };
})(Vd);
Wd.exports = Vd;
var Sm = Wd.exports;
var Cm = j, Ge = Sm;
function C(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Bd = /* @__PURE__ */ new Set(), Ur = {};
function Pn(e, t) {
  Zn(e, t), Zn(e + "Capture", t);
}
function Zn(e, t) {
  for (Ur[e] = t, e = 0; e < t.length; e++) Bd.add(t[e]);
}
var Nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), es = Object.prototype.hasOwnProperty, _m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ka = {}, Sa = {};
function Em(e) {
  return es.call(Sa, e) ? !0 : es.call(ka, e) ? !1 : _m.test(e) ? Sa[e] = !0 : (ka[e] = !0, !1);
}
function $m(e, t, n, r) {
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
function Tm(e, t, n, r) {
  if (t === null || typeof t > "u" || $m(e, t, n, r)) return !0;
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
var su = /[\-:]([a-z])/g;
function uu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    su,
    uu
  );
  ye[t] = new Ne(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(su, uu);
  ye[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(su, uu);
  ye[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ye[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ye.xlinkHref = new Ne("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ye[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function au(e, t, n, r) {
  var o = ye.hasOwnProperty(t) ? ye[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Tm(t, n, o, r) && (n = null), r || o === null ? Em(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ft = Cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, go = Symbol.for("react.element"), zn = Symbol.for("react.portal"), Fn = Symbol.for("react.fragment"), cu = Symbol.for("react.strict_mode"), ts = Symbol.for("react.profiler"), Hd = Symbol.for("react.provider"), Qd = Symbol.for("react.context"), du = Symbol.for("react.forward_ref"), ns = Symbol.for("react.suspense"), rs = Symbol.for("react.suspense_list"), fu = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), Yd = Symbol.for("react.offscreen"), Ca = Symbol.iterator;
function cr(e) {
  return e === null || typeof e != "object" ? null : (e = Ca && e[Ca] || e["@@iterator"], typeof e == "function" ? e : null);
}
var oe = Object.assign, ml;
function Sr(e) {
  if (ml === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ml = t && t[1] || "";
  }
  return `
` + ml + e;
}
var yl = !1;
function gl(e, t) {
  if (!e || yl) return "";
  yl = !0;
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
    yl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Sr(e) : "";
}
function Nm(e) {
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
      return e = gl(e.type, !1), e;
    case 11:
      return e = gl(e.type.render, !1), e;
    case 1:
      return e = gl(e.type, !0), e;
    default:
      return "";
  }
}
function os(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Fn:
      return "Fragment";
    case zn:
      return "Portal";
    case ts:
      return "Profiler";
    case cu:
      return "StrictMode";
    case ns:
      return "Suspense";
    case rs:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Qd:
      return (e.displayName || "Context") + ".Consumer";
    case Hd:
      return (e._context.displayName || "Context") + ".Provider";
    case du:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case fu:
      return t = e.displayName || null, t !== null ? t : os(e.type) || "Memo";
    case Ot:
      t = e._payload, e = e._init;
      try {
        return os(e(t));
      } catch {
      }
  }
  return null;
}
function Pm(e) {
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
      return os(t);
    case 8:
      return t === cu ? "StrictMode" : "Mode";
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
function Xd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Mm(e) {
  var t = Xd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = Mm(e));
}
function Kd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Xd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function di(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function is(e, t) {
  var n = t.checked;
  return oe({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function _a(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = en(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Gd(e, t) {
  t = t.checked, t != null && au(e, "checked", t, !1);
}
function ls(e, t) {
  Gd(e, t);
  var n = en(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ss(e, t.type, n) : t.hasOwnProperty("defaultValue") && ss(e, t.type, en(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ea(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ss(e, t, n) {
  (t !== "number" || di(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
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
function us(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return oe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function $a(e, t) {
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
function Zd(e, t) {
  var n = en(t.value), r = en(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ta(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Jd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function as(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Jd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var wo, qd = function(e) {
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
}, jm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mr).forEach(function(e) {
  jm.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Mr[t] = Mr[e];
  });
});
function ef(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Mr.hasOwnProperty(e) && Mr[e] ? ("" + t).trim() : t + "px";
}
function tf(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = ef(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Rm = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function cs(e, t) {
  if (t) {
    if (Rm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function ds(e, t) {
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
var fs = null;
function pu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ps = null, Qn = null, Yn = null;
function Na(e) {
  if (e = fo(e)) {
    if (typeof ps != "function") throw Error(C(280));
    var t = e.stateNode;
    t && (t = Ki(t), ps(e.stateNode, e.type, t));
  }
}
function nf(e) {
  Qn ? Yn ? Yn.push(e) : Yn = [e] : Qn = e;
}
function rf() {
  if (Qn) {
    var e = Qn, t = Yn;
    if (Yn = Qn = null, Na(e), t) for (e = 0; e < t.length; e++) Na(t[e]);
  }
}
function of(e, t) {
  return e(t);
}
function lf() {
}
var vl = !1;
function sf(e, t, n) {
  if (vl) return e(t, n);
  vl = !0;
  try {
    return of(e, t, n);
  } finally {
    vl = !1, (Qn !== null || Yn !== null) && (lf(), rf());
  }
}
function Vr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ki(n);
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
var hs = !1;
if (Nt) try {
  var dr = {};
  Object.defineProperty(dr, "passive", { get: function() {
    hs = !0;
  } }), window.addEventListener("test", dr, dr), window.removeEventListener("test", dr, dr);
} catch {
  hs = !1;
}
function zm(e, t, n, r, o, i, l, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (c) {
    this.onError(c);
  }
}
var jr = !1, fi = null, pi = !1, ms = null, Fm = { onError: function(e) {
  jr = !0, fi = e;
} };
function Lm(e, t, n, r, o, i, l, s, u) {
  jr = !1, fi = null, zm.apply(Fm, arguments);
}
function Im(e, t, n, r, o, i, l, s, u) {
  if (Lm.apply(this, arguments), jr) {
    if (jr) {
      var a = fi;
      jr = !1, fi = null;
    } else throw Error(C(198));
    pi || (pi = !0, ms = a);
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
function uf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Pa(e) {
  if (Mn(e) !== e) throw Error(C(188));
}
function Dm(e) {
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
        if (i === n) return Pa(o), e;
        if (i === r) return Pa(o), t;
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
function af(e) {
  return e = Dm(e), e !== null ? cf(e) : null;
}
function cf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = cf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var df = Ge.unstable_scheduleCallback, Ma = Ge.unstable_cancelCallback, Om = Ge.unstable_shouldYield, bm = Ge.unstable_requestPaint, le = Ge.unstable_now, Am = Ge.unstable_getCurrentPriorityLevel, hu = Ge.unstable_ImmediatePriority, ff = Ge.unstable_UserBlockingPriority, hi = Ge.unstable_NormalPriority, Um = Ge.unstable_LowPriority, pf = Ge.unstable_IdlePriority, Hi = null, wt = null;
function Wm(e) {
  if (wt && typeof wt.onCommitFiberRoot == "function") try {
    wt.onCommitFiberRoot(Hi, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var ct = Math.clz32 ? Math.clz32 : Hm, Vm = Math.log, Bm = Math.LN2;
function Hm(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Vm(e) / Bm | 0) | 0;
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
function mi(e, t) {
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
function Qm(e, t) {
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
function Ym(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - ct(i), s = 1 << l, u = o[l];
    u === -1 ? (!(s & n) || s & r) && (o[l] = Qm(s, t)) : u <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function ys(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function hf() {
  var e = xo;
  return xo <<= 1, !(xo & 4194240) && (xo = 64), e;
}
function wl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ao(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ct(t), e[t] = n;
}
function Xm(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - ct(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function mu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - ct(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var B = 0;
function mf(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var yf, yu, gf, vf, wf, gs = !1, So = [], Qt = null, Yt = null, Xt = null, Br = /* @__PURE__ */ new Map(), Hr = /* @__PURE__ */ new Map(), At = [], Km = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ja(e, t) {
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
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = fo(t), t !== null && yu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Gm(e, t, n, r, o) {
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
function xf(e) {
  var t = gn(e.target);
  if (t !== null) {
    var n = Mn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = uf(n), t !== null) {
          e.blockedOn = t, wf(e.priority, function() {
            gf(n);
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
function Bo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = vs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      fs = r, n.target.dispatchEvent(r), fs = null;
    } else return t = fo(n), t !== null && yu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ra(e, t, n) {
  Bo(e) && n.delete(t);
}
function Zm() {
  gs = !1, Qt !== null && Bo(Qt) && (Qt = null), Yt !== null && Bo(Yt) && (Yt = null), Xt !== null && Bo(Xt) && (Xt = null), Br.forEach(Ra), Hr.forEach(Ra);
}
function pr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, gs || (gs = !0, Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority, Zm)));
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
  for (; 0 < At.length && (n = At[0], n.blockedOn === null); ) xf(n), n.blockedOn === null && At.shift();
}
var Xn = Ft.ReactCurrentBatchConfig, yi = !0;
function Jm(e, t, n, r) {
  var o = B, i = Xn.transition;
  Xn.transition = null;
  try {
    B = 1, gu(e, t, n, r);
  } finally {
    B = o, Xn.transition = i;
  }
}
function qm(e, t, n, r) {
  var o = B, i = Xn.transition;
  Xn.transition = null;
  try {
    B = 4, gu(e, t, n, r);
  } finally {
    B = o, Xn.transition = i;
  }
}
function gu(e, t, n, r) {
  if (yi) {
    var o = vs(e, t, n, r);
    if (o === null) Pl(e, t, r, gi, n), ja(e, r);
    else if (Gm(o, e, t, n, r)) r.stopPropagation();
    else if (ja(e, r), t & 4 && -1 < Km.indexOf(e)) {
      for (; o !== null; ) {
        var i = fo(o);
        if (i !== null && yf(i), i = vs(e, t, n, r), i === null && Pl(e, t, r, gi, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Pl(e, t, r, null, n);
  }
}
var gi = null;
function vs(e, t, n, r) {
  if (gi = null, e = pu(r), e = gn(e), e !== null) if (t = Mn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = uf(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return gi = e, null;
}
function kf(e) {
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
      switch (Am()) {
        case hu:
          return 1;
        case ff:
          return 4;
        case hi:
        case Um:
          return 16;
        case pf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Wt = null, vu = null, Ho = null;
function Sf() {
  if (Ho) return Ho;
  var e, t = vu, n = t.length, r, o = "value" in Wt ? Wt.value : Wt.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++) ;
  return Ho = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Qo(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Co() {
  return !0;
}
function za() {
  return !1;
}
function Je(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Co : za, this.isPropagationStopped = za, this;
  }
  return oe(t.prototype, { preventDefault: function() {
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
}, defaultPrevented: 0, isTrusted: 0 }, wu = Je(ir), co = oe({}, ir, { view: 0, detail: 0 }), e0 = Je(co), xl, kl, hr, Qi = oe({}, co, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: xu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== hr && (hr && e.type === "mousemove" ? (xl = e.screenX - hr.screenX, kl = e.screenY - hr.screenY) : kl = xl = 0, hr = e), xl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : kl;
} }), Fa = Je(Qi), t0 = oe({}, Qi, { dataTransfer: 0 }), n0 = Je(t0), r0 = oe({}, co, { relatedTarget: 0 }), Sl = Je(r0), o0 = oe({}, ir, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), i0 = Je(o0), l0 = oe({}, ir, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), s0 = Je(l0), u0 = oe({}, ir, { data: 0 }), La = Je(u0), a0 = {
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
}, c0 = {
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
}, d0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function f0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = d0[e]) ? !!t[e] : !1;
}
function xu() {
  return f0;
}
var p0 = oe({}, co, { key: function(e) {
  if (e.key) {
    var t = a0[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Qo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? c0[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: xu, charCode: function(e) {
  return e.type === "keypress" ? Qo(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Qo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), h0 = Je(p0), m0 = oe({}, Qi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ia = Je(m0), y0 = oe({}, co, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: xu }), g0 = Je(y0), v0 = oe({}, ir, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), w0 = Je(v0), x0 = oe({}, Qi, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), k0 = Je(x0), S0 = [9, 13, 27, 32], ku = Nt && "CompositionEvent" in window, Rr = null;
Nt && "documentMode" in document && (Rr = document.documentMode);
var C0 = Nt && "TextEvent" in window && !Rr, Cf = Nt && (!ku || Rr && 8 < Rr && 11 >= Rr), Da = " ", Oa = !1;
function _f(e, t) {
  switch (e) {
    case "keyup":
      return S0.indexOf(t.keyCode) !== -1;
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
function Ef(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Ln = !1;
function _0(e, t) {
  switch (e) {
    case "compositionend":
      return Ef(t);
    case "keypress":
      return t.which !== 32 ? null : (Oa = !0, Da);
    case "textInput":
      return e = t.data, e === Da && Oa ? null : e;
    default:
      return null;
  }
}
function E0(e, t) {
  if (Ln) return e === "compositionend" || !ku && _f(e, t) ? (e = Sf(), Ho = vu = Wt = null, Ln = !1, e) : null;
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
      return Cf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var $0 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ba(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!$0[e.type] : t === "textarea";
}
function $f(e, t, n, r) {
  nf(r), t = vi(t, "onChange"), 0 < t.length && (n = new wu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var zr = null, Yr = null;
function T0(e) {
  Df(e, 0);
}
function Yi(e) {
  var t = On(e);
  if (Kd(t)) return e;
}
function N0(e, t) {
  if (e === "change") return t;
}
var Tf = !1;
if (Nt) {
  var Cl;
  if (Nt) {
    var _l = "oninput" in document;
    if (!_l) {
      var Aa = document.createElement("div");
      Aa.setAttribute("oninput", "return;"), _l = typeof Aa.oninput == "function";
    }
    Cl = _l;
  } else Cl = !1;
  Tf = Cl && (!document.documentMode || 9 < document.documentMode);
}
function Ua() {
  zr && (zr.detachEvent("onpropertychange", Nf), Yr = zr = null);
}
function Nf(e) {
  if (e.propertyName === "value" && Yi(Yr)) {
    var t = [];
    $f(t, Yr, e, pu(e)), sf(T0, t);
  }
}
function P0(e, t, n) {
  e === "focusin" ? (Ua(), zr = t, Yr = n, zr.attachEvent("onpropertychange", Nf)) : e === "focusout" && Ua();
}
function M0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Yi(Yr);
}
function j0(e, t) {
  if (e === "click") return Yi(t);
}
function R0(e, t) {
  if (e === "input" || e === "change") return Yi(t);
}
function z0(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ft = typeof Object.is == "function" ? Object.is : z0;
function Xr(e, t) {
  if (ft(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!es.call(t, o) || !ft(e[o], t[o])) return !1;
  }
  return !0;
}
function Wa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Va(e, t) {
  var n = Wa(e);
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
    n = Wa(n);
  }
}
function Pf(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Pf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Mf() {
  for (var e = window, t = di(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = di(e.document);
  }
  return t;
}
function Su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function F0(e) {
  var t = Mf(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Pf(n.ownerDocument.documentElement, n)) {
    if (r !== null && Su(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Va(n, i);
        var l = Va(
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
var L0 = Nt && "documentMode" in document && 11 >= document.documentMode, In = null, ws = null, Fr = null, xs = !1;
function Ba(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  xs || In == null || In !== di(r) || (r = In, "selectionStart" in r && Su(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Fr && Xr(Fr, r) || (Fr = r, r = vi(ws, "onSelect"), 0 < r.length && (t = new wu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = In)));
}
function _o(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Dn = { animationend: _o("Animation", "AnimationEnd"), animationiteration: _o("Animation", "AnimationIteration"), animationstart: _o("Animation", "AnimationStart"), transitionend: _o("Transition", "TransitionEnd") }, El = {}, jf = {};
Nt && (jf = document.createElement("div").style, "AnimationEvent" in window || (delete Dn.animationend.animation, delete Dn.animationiteration.animation, delete Dn.animationstart.animation), "TransitionEvent" in window || delete Dn.transitionend.transition);
function Xi(e) {
  if (El[e]) return El[e];
  if (!Dn[e]) return e;
  var t = Dn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in jf) return El[e] = t[n];
  return e;
}
var Rf = Xi("animationend"), zf = Xi("animationiteration"), Ff = Xi("animationstart"), Lf = Xi("transitionend"), If = /* @__PURE__ */ new Map(), Ha = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function rn(e, t) {
  If.set(e, t), Pn(t, [e]);
}
for (var $l = 0; $l < Ha.length; $l++) {
  var Tl = Ha[$l], I0 = Tl.toLowerCase(), D0 = Tl[0].toUpperCase() + Tl.slice(1);
  rn(I0, "on" + D0);
}
rn(Rf, "onAnimationEnd");
rn(zf, "onAnimationIteration");
rn(Ff, "onAnimationStart");
rn("dblclick", "onDoubleClick");
rn("focusin", "onFocus");
rn("focusout", "onBlur");
rn(Lf, "onTransitionEnd");
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
var Er = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), O0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));
function Qa(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Im(r, t, void 0, e), e.currentTarget = null;
}
function Df(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var s = r[l], u = s.instance, a = s.currentTarget;
        if (s = s.listener, u !== i && o.isPropagationStopped()) break e;
        Qa(o, s, a), i = u;
      }
      else for (l = 0; l < r.length; l++) {
        if (s = r[l], u = s.instance, a = s.currentTarget, s = s.listener, u !== i && o.isPropagationStopped()) break e;
        Qa(o, s, a), i = u;
      }
    }
  }
  if (pi) throw e = ms, pi = !1, ms = null, e;
}
function J(e, t) {
  var n = t[Es];
  n === void 0 && (n = t[Es] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Of(t, e, 2, !1), n.add(r));
}
function Nl(e, t, n) {
  var r = 0;
  t && (r |= 4), Of(n, e, r, t);
}
var Eo = "_reactListening" + Math.random().toString(36).slice(2);
function Kr(e) {
  if (!e[Eo]) {
    e[Eo] = !0, Bd.forEach(function(n) {
      n !== "selectionchange" && (O0.has(n) || Nl(n, !1, e), Nl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Eo] || (t[Eo] = !0, Nl("selectionchange", !1, t));
  }
}
function Of(e, t, n, r) {
  switch (kf(t)) {
    case 1:
      var o = Jm;
      break;
    case 4:
      o = qm;
      break;
    default:
      o = gu;
  }
  n = o.bind(null, t, n, e), o = void 0, !hs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
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
  sf(function() {
    var a = i, c = pu(n), p = [];
    e: {
      var m = If.get(e);
      if (m !== void 0) {
        var y = wu, g = e;
        switch (e) {
          case "keypress":
            if (Qo(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = h0;
            break;
          case "focusin":
            g = "focus", y = Sl;
            break;
          case "focusout":
            g = "blur", y = Sl;
            break;
          case "beforeblur":
          case "afterblur":
            y = Sl;
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
            y = Fa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = n0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = g0;
            break;
          case Rf:
          case zf:
          case Ff:
            y = i0;
            break;
          case Lf:
            y = w0;
            break;
          case "scroll":
            y = e0;
            break;
          case "wheel":
            y = k0;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = s0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Ia;
        }
        var x = (t & 4) !== 0, k = !x && e === "scroll", f = x ? m !== null ? m + "Capture" : null : m;
        x = [];
        for (var d = a, h; d !== null; ) {
          h = d;
          var w = h.stateNode;
          if (h.tag === 5 && w !== null && (h = w, f !== null && (w = Vr(d, f), w != null && x.push(Gr(d, w, h)))), k) break;
          d = d.return;
        }
        0 < x.length && (m = new y(m, g, null, n, c), p.push({ event: m, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", m && n !== fs && (g = n.relatedTarget || n.fromElement) && (gn(g) || g[Pt])) break e;
        if ((y || m) && (m = c.window === c ? c : (m = c.ownerDocument) ? m.defaultView || m.parentWindow : window, y ? (g = n.relatedTarget || n.toElement, y = a, g = g ? gn(g) : null, g !== null && (k = Mn(g), g !== k || g.tag !== 5 && g.tag !== 6) && (g = null)) : (y = null, g = a), y !== g)) {
          if (x = Fa, w = "onMouseLeave", f = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (x = Ia, w = "onPointerLeave", f = "onPointerEnter", d = "pointer"), k = y == null ? m : On(y), h = g == null ? m : On(g), m = new x(w, d + "leave", y, n, c), m.target = k, m.relatedTarget = h, w = null, gn(c) === a && (x = new x(f, d + "enter", g, n, c), x.target = h, x.relatedTarget = k, w = x), k = w, y && g) t: {
            for (x = y, f = g, d = 0, h = x; h; h = jn(h)) d++;
            for (h = 0, w = f; w; w = jn(w)) h++;
            for (; 0 < d - h; ) x = jn(x), d--;
            for (; 0 < h - d; ) f = jn(f), h--;
            for (; d--; ) {
              if (x === f || f !== null && x === f.alternate) break t;
              x = jn(x), f = jn(f);
            }
            x = null;
          }
          else x = null;
          y !== null && Ya(p, m, y, x, !1), g !== null && k !== null && Ya(p, k, g, x, !0);
        }
      }
      e: {
        if (m = a ? On(a) : window, y = m.nodeName && m.nodeName.toLowerCase(), y === "select" || y === "input" && m.type === "file") var S = N0;
        else if (ba(m)) if (Tf) S = R0;
        else {
          S = M0;
          var _ = P0;
        }
        else (y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (S = j0);
        if (S && (S = S(e, a))) {
          $f(p, S, n, c);
          break e;
        }
        _ && _(e, m, a), e === "focusout" && (_ = m._wrapperState) && _.controlled && m.type === "number" && ss(m, "number", m.value);
      }
      switch (_ = a ? On(a) : window, e) {
        case "focusin":
          (ba(_) || _.contentEditable === "true") && (In = _, ws = a, Fr = null);
          break;
        case "focusout":
          Fr = ws = In = null;
          break;
        case "mousedown":
          xs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          xs = !1, Ba(p, n, c);
          break;
        case "selectionchange":
          if (L0) break;
        case "keydown":
        case "keyup":
          Ba(p, n, c);
      }
      var $;
      if (ku) e: {
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
      else Ln ? _f(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (Cf && n.locale !== "ko" && (Ln || P !== "onCompositionStart" ? P === "onCompositionEnd" && Ln && ($ = Sf()) : (Wt = c, vu = "value" in Wt ? Wt.value : Wt.textContent, Ln = !0)), _ = vi(a, P), 0 < _.length && (P = new La(P, e, null, n, c), p.push({ event: P, listeners: _ }), $ ? P.data = $ : ($ = Ef(n), $ !== null && (P.data = $)))), ($ = C0 ? _0(e, n) : E0(e, n)) && (a = vi(a, "onBeforeInput"), 0 < a.length && (c = new La("onBeforeInput", "beforeinput", null, n, c), p.push({ event: c, listeners: a }), c.data = $));
    }
    Df(p, t);
  });
}
function Gr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function vi(e, t) {
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
function Ya(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n, u = s.alternate, a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 && a !== null && (s = a, o ? (u = Vr(n, i), u != null && l.unshift(Gr(n, u, s))) : o || (u = Vr(n, i), u != null && l.push(Gr(n, u, s)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var b0 = /\r\n?/g, A0 = /\u0000|\uFFFD/g;
function Xa(e) {
  return (typeof e == "string" ? e : "" + e).replace(b0, `
`).replace(A0, "");
}
function $o(e, t, n) {
  if (t = Xa(t), Xa(e) !== t && n) throw Error(C(425));
}
function wi() {
}
var ks = null, Ss = null;
function Cs(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var _s = typeof setTimeout == "function" ? setTimeout : void 0, U0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Ka = typeof Promise == "function" ? Promise : void 0, W0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ka < "u" ? function(e) {
  return Ka.resolve(null).then(e).catch(V0);
} : _s;
function V0(e) {
  setTimeout(function() {
    throw e;
  });
}
function Ml(e, t) {
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
function Ga(e) {
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
var lr = Math.random().toString(36).slice(2), vt = "__reactFiber$" + lr, Zr = "__reactProps$" + lr, Pt = "__reactContainer$" + lr, Es = "__reactEvents$" + lr, B0 = "__reactListeners$" + lr, H0 = "__reactHandles$" + lr;
function gn(e) {
  var t = e[vt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Pt] || n[vt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ga(e); e !== null; ) {
        if (n = e[vt]) return n;
        e = Ga(e);
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
  throw Error(C(33));
}
function Ki(e) {
  return e[Zr] || null;
}
var $s = [], bn = -1;
function on(e) {
  return { current: e };
}
function ee(e) {
  0 > bn || (e.current = $s[bn], $s[bn] = null, bn--);
}
function K(e, t) {
  bn++, $s[bn] = e.current, e.current = t;
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
function xi() {
  ee(Le), ee(Ce);
}
function Za(e, t, n) {
  if (Ce.current !== tn) throw Error(C(168));
  K(Ce, t), K(Le, n);
}
function bf(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(C(108, Pm(e) || "Unknown", o));
  return oe({}, n, r);
}
function ki(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || tn, _n = Ce.current, K(Ce, e), K(Le, Le.current), !0;
}
function Ja(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n ? (e = bf(e, t, _n), r.__reactInternalMemoizedMergedChildContext = e, ee(Le), ee(Ce), K(Ce, e)) : ee(Le), K(Le, n);
}
var _t = null, Gi = !1, jl = !1;
function Af(e) {
  _t === null ? _t = [e] : _t.push(e);
}
function Q0(e) {
  Gi = !0, Af(e);
}
function ln() {
  if (!jl && _t !== null) {
    jl = !0;
    var e = 0, t = B;
    try {
      var n = _t;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      _t = null, Gi = !1;
    } catch (o) {
      throw _t !== null && (_t = _t.slice(e + 1)), df(hu, ln), o;
    } finally {
      B = t, jl = !1;
    }
  }
  return null;
}
var An = [], Un = 0, Si = null, Ci = 0, qe = [], et = 0, En = null, Et = 1, $t = "";
function dn(e, t) {
  An[Un++] = Ci, An[Un++] = Si, Si = e, Ci = t;
}
function Uf(e, t, n) {
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
function Cu(e) {
  e.return !== null && (dn(e, 1), Uf(e, 1, 0));
}
function _u(e) {
  for (; e === Si; ) Si = An[--Un], An[Un] = null, Ci = An[--Un], An[Un] = null;
  for (; e === En; ) En = qe[--et], qe[et] = null, $t = qe[--et], qe[et] = null, Et = qe[--et], qe[et] = null;
}
var Ke = null, Xe = null, te = !1, ut = null;
function Wf(e, t) {
  var n = tt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function qa(e, t) {
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
function Ts(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ns(e) {
  if (te) {
    var t = Xe;
    if (t) {
      var n = t;
      if (!qa(e, t)) {
        if (Ts(e)) throw Error(C(418));
        t = Kt(n.nextSibling);
        var r = Ke;
        t && qa(e, t) ? Wf(r, n) : (e.flags = e.flags & -4097 | 2, te = !1, Ke = e);
      }
    } else {
      if (Ts(e)) throw Error(C(418));
      e.flags = e.flags & -4097 | 2, te = !1, Ke = e;
    }
  }
}
function ec(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ke = e;
}
function To(e) {
  if (e !== Ke) return !1;
  if (!te) return ec(e), te = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Cs(e.type, e.memoizedProps)), t && (t = Xe)) {
    if (Ts(e)) throw Vf(), Error(C(418));
    for (; t; ) Wf(e, t), t = Kt(t.nextSibling);
  }
  if (ec(e), e.tag === 13) {
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
function Vf() {
  for (var e = Xe; e; ) e = Kt(e.nextSibling);
}
function qn() {
  Xe = Ke = null, te = !1;
}
function Eu(e) {
  ut === null ? ut = [e] : ut.push(e);
}
var Y0 = Ft.ReactCurrentBatchConfig;
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
function No(e, t) {
  throw e = Object.prototype.toString.call(t), Error(C(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function tc(e) {
  var t = e._init;
  return t(e._payload);
}
function Bf(e) {
  function t(f, d) {
    if (e) {
      var h = f.deletions;
      h === null ? (f.deletions = [d], f.flags |= 16) : h.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), d = d.sibling;
    return null;
  }
  function r(f, d) {
    for (f = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? f.set(d.key, d) : f.set(d.index, d), d = d.sibling;
    return f;
  }
  function o(f, d) {
    return f = qt(f, d), f.index = 0, f.sibling = null, f;
  }
  function i(f, d, h) {
    return f.index = h, e ? (h = f.alternate, h !== null ? (h = h.index, h < d ? (f.flags |= 2, d) : h) : (f.flags |= 2, d)) : (f.flags |= 1048576, d);
  }
  function l(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, d, h, w) {
    return d === null || d.tag !== 6 ? (d = Ol(h, f.mode, w), d.return = f, d) : (d = o(d, h), d.return = f, d);
  }
  function u(f, d, h, w) {
    var S = h.type;
    return S === Fn ? c(f, d, h.props.children, w, h.key) : d !== null && (d.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Ot && tc(S) === d.type) ? (w = o(d, h.props), w.ref = mr(f, d, h), w.return = f, w) : (w = qo(h.type, h.key, h.props, null, f.mode, w), w.ref = mr(f, d, h), w.return = f, w);
  }
  function a(f, d, h, w) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = bl(h, f.mode, w), d.return = f, d) : (d = o(d, h.children || []), d.return = f, d);
  }
  function c(f, d, h, w, S) {
    return d === null || d.tag !== 7 ? (d = Cn(h, f.mode, w, S), d.return = f, d) : (d = o(d, h), d.return = f, d);
  }
  function p(f, d, h) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = Ol("" + d, f.mode, h), d.return = f, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case go:
          return h = qo(d.type, d.key, d.props, null, f.mode, h), h.ref = mr(f, null, d), h.return = f, h;
        case zn:
          return d = bl(d, f.mode, h), d.return = f, d;
        case Ot:
          var w = d._init;
          return p(f, w(d._payload), h);
      }
      if (Cr(d) || cr(d)) return d = Cn(d, f.mode, h, null), d.return = f, d;
      No(f, d);
    }
    return null;
  }
  function m(f, d, h, w) {
    var S = d !== null ? d.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return S !== null ? null : s(f, d, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case go:
          return h.key === S ? u(f, d, h, w) : null;
        case zn:
          return h.key === S ? a(f, d, h, w) : null;
        case Ot:
          return S = h._init, m(
            f,
            d,
            S(h._payload),
            w
          );
      }
      if (Cr(h) || cr(h)) return S !== null ? null : c(f, d, h, w, null);
      No(f, h);
    }
    return null;
  }
  function y(f, d, h, w, S) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(h) || null, s(d, f, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case go:
          return f = f.get(w.key === null ? h : w.key) || null, u(d, f, w, S);
        case zn:
          return f = f.get(w.key === null ? h : w.key) || null, a(d, f, w, S);
        case Ot:
          var _ = w._init;
          return y(f, d, h, _(w._payload), S);
      }
      if (Cr(w) || cr(w)) return f = f.get(h) || null, c(d, f, w, S, null);
      No(d, w);
    }
    return null;
  }
  function g(f, d, h, w) {
    for (var S = null, _ = null, $ = d, P = d = 0, b = null; $ !== null && P < h.length; P++) {
      $.index > P ? (b = $, $ = null) : b = $.sibling;
      var F = m(f, $, h[P], w);
      if (F === null) {
        $ === null && ($ = b);
        break;
      }
      e && $ && F.alternate === null && t(f, $), d = i(F, d, P), _ === null ? S = F : _.sibling = F, _ = F, $ = b;
    }
    if (P === h.length) return n(f, $), te && dn(f, P), S;
    if ($ === null) {
      for (; P < h.length; P++) $ = p(f, h[P], w), $ !== null && (d = i($, d, P), _ === null ? S = $ : _.sibling = $, _ = $);
      return te && dn(f, P), S;
    }
    for ($ = r(f, $); P < h.length; P++) b = y($, f, P, h[P], w), b !== null && (e && b.alternate !== null && $.delete(b.key === null ? P : b.key), d = i(b, d, P), _ === null ? S = b : _.sibling = b, _ = b);
    return e && $.forEach(function(Z) {
      return t(f, Z);
    }), te && dn(f, P), S;
  }
  function x(f, d, h, w) {
    var S = cr(h);
    if (typeof S != "function") throw Error(C(150));
    if (h = S.call(h), h == null) throw Error(C(151));
    for (var _ = S = null, $ = d, P = d = 0, b = null, F = h.next(); $ !== null && !F.done; P++, F = h.next()) {
      $.index > P ? (b = $, $ = null) : b = $.sibling;
      var Z = m(f, $, F.value, w);
      if (Z === null) {
        $ === null && ($ = b);
        break;
      }
      e && $ && Z.alternate === null && t(f, $), d = i(Z, d, P), _ === null ? S = Z : _.sibling = Z, _ = Z, $ = b;
    }
    if (F.done) return n(
      f,
      $
    ), te && dn(f, P), S;
    if ($ === null) {
      for (; !F.done; P++, F = h.next()) F = p(f, F.value, w), F !== null && (d = i(F, d, P), _ === null ? S = F : _.sibling = F, _ = F);
      return te && dn(f, P), S;
    }
    for ($ = r(f, $); !F.done; P++, F = h.next()) F = y($, f, P, F.value, w), F !== null && (e && F.alternate !== null && $.delete(F.key === null ? P : F.key), d = i(F, d, P), _ === null ? S = F : _.sibling = F, _ = F);
    return e && $.forEach(function(H) {
      return t(f, H);
    }), te && dn(f, P), S;
  }
  function k(f, d, h, w) {
    if (typeof h == "object" && h !== null && h.type === Fn && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case go:
          e: {
            for (var S = h.key, _ = d; _ !== null; ) {
              if (_.key === S) {
                if (S = h.type, S === Fn) {
                  if (_.tag === 7) {
                    n(f, _.sibling), d = o(_, h.props.children), d.return = f, f = d;
                    break e;
                  }
                } else if (_.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Ot && tc(S) === _.type) {
                  n(f, _.sibling), d = o(_, h.props), d.ref = mr(f, _, h), d.return = f, f = d;
                  break e;
                }
                n(f, _);
                break;
              } else t(f, _);
              _ = _.sibling;
            }
            h.type === Fn ? (d = Cn(h.props.children, f.mode, w, h.key), d.return = f, f = d) : (w = qo(h.type, h.key, h.props, null, f.mode, w), w.ref = mr(f, d, h), w.return = f, f = w);
          }
          return l(f);
        case zn:
          e: {
            for (_ = h.key; d !== null; ) {
              if (d.key === _) if (d.tag === 4 && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                n(f, d.sibling), d = o(d, h.children || []), d.return = f, f = d;
                break e;
              } else {
                n(f, d);
                break;
              }
              else t(f, d);
              d = d.sibling;
            }
            d = bl(h, f.mode, w), d.return = f, f = d;
          }
          return l(f);
        case Ot:
          return _ = h._init, k(f, d, _(h._payload), w);
      }
      if (Cr(h)) return g(f, d, h, w);
      if (cr(h)) return x(f, d, h, w);
      No(f, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, d !== null && d.tag === 6 ? (n(f, d.sibling), d = o(d, h), d.return = f, f = d) : (n(f, d), d = Ol(h, f.mode, w), d.return = f, f = d), l(f)) : n(f, d);
  }
  return k;
}
var er = Bf(!0), Hf = Bf(!1), _i = on(null), Ei = null, Wn = null, $u = null;
function Tu() {
  $u = Wn = Ei = null;
}
function Nu(e) {
  var t = _i.current;
  ee(_i), e._currentValue = t;
}
function Ps(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Kn(e, t) {
  Ei = e, $u = Wn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Fe = !0), e.firstContext = null);
}
function rt(e) {
  var t = e._currentValue;
  if ($u !== e) if (e = { context: e, memoizedValue: t, next: null }, Wn === null) {
    if (Ei === null) throw Error(C(308));
    Wn = e, Ei.dependencies = { lanes: 0, firstContext: e };
  } else Wn = Wn.next = e;
  return t;
}
var vn = null;
function Pu(e) {
  vn === null ? vn = [e] : vn.push(e);
}
function Qf(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Pu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Mt(e, r);
}
function Mt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var bt = !1;
function Mu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Yf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Tt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Gt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, W & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Mt(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Pu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Mt(e, n);
}
function Yo(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, mu(e, n);
  }
}
function nc(e, t) {
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
function $i(e, t, n, r) {
  var o = e.updateQueue;
  bt = !1;
  var i = o.firstBaseUpdate, l = o.lastBaseUpdate, s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var u = s, a = u.next;
    u.next = null, l === null ? i = a : l.next = a, l = u;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== l && (s === null ? c.firstBaseUpdate = a : s.next = a, c.lastBaseUpdate = u));
  }
  if (i !== null) {
    var p = o.baseState;
    l = 0, c = a = u = null, s = i;
    do {
      var m = s.lane, y = s.eventTime;
      if ((r & m) === m) {
        c !== null && (c = c.next = {
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
              p = oe({}, p, m);
              break e;
            case 2:
              bt = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, m = o.effects, m === null ? o.effects = [s] : m.push(s));
      } else y = { eventTime: y, lane: m, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, c === null ? (a = c = y, u = p) : c = c.next = y, l |= m;
      if (s = s.next, s === null) {
        if (s = o.shared.pending, s === null) break;
        m = s, s = m.next, m.next = null, o.lastBaseUpdate = m, o.shared.pending = null;
      }
    } while (!0);
    if (c === null && (u = p), o.baseState = u, o.firstBaseUpdate = a, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        l |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Tn |= l, e.lanes = l, e.memoizedState = p;
  }
}
function rc(e, t, n) {
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
function ju(e, t) {
  switch (K(qr, t), K(Jr, e), K(xt, po), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : as(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = as(t, e);
  }
  ee(xt), K(xt, t);
}
function tr() {
  ee(xt), ee(Jr), ee(qr);
}
function Xf(e) {
  wn(qr.current);
  var t = wn(xt.current), n = as(t, e.type);
  t !== n && (K(Jr, e), K(xt, n));
}
function Ru(e) {
  Jr.current === e && (ee(xt), ee(Jr));
}
var ne = on(0);
function Ti(e) {
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
var Rl = [];
function zu() {
  for (var e = 0; e < Rl.length; e++) Rl[e]._workInProgressVersionPrimary = null;
  Rl.length = 0;
}
var Xo = Ft.ReactCurrentDispatcher, zl = Ft.ReactCurrentBatchConfig, $n = 0, re = null, ue = null, de = null, Ni = !1, Lr = !1, eo = 0, X0 = 0;
function xe() {
  throw Error(C(321));
}
function Fu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ft(e[n], t[n])) return !1;
  return !0;
}
function Lu(e, t, n, r, o, i) {
  if ($n = i, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Xo.current = e === null || e.memoizedState === null ? J0 : q0, e = n(r, o), Lr) {
    i = 0;
    do {
      if (Lr = !1, eo = 0, 25 <= i) throw Error(C(301));
      i += 1, de = ue = null, t.updateQueue = null, Xo.current = ey, e = n(r, o);
    } while (Lr);
  }
  if (Xo.current = Pi, t = ue !== null && ue.next !== null, $n = 0, de = ue = re = null, Ni = !1, t) throw Error(C(300));
  return e;
}
function Iu() {
  var e = eo !== 0;
  return eo = 0, e;
}
function gt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return de === null ? re.memoizedState = de = e : de = de.next = e, de;
}
function ot() {
  if (ue === null) {
    var e = re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ue.next;
  var t = de === null ? re.memoizedState : de.next;
  if (t !== null) de = t, ue = e;
  else {
    if (e === null) throw Error(C(310));
    ue = e, e = { memoizedState: ue.memoizedState, baseState: ue.baseState, baseQueue: ue.baseQueue, queue: ue.queue, next: null }, de === null ? re.memoizedState = de = e : de = de.next = e;
  }
  return de;
}
function to(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Fl(e) {
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
      var c = a.lane;
      if (($n & c) === c) u !== null && (u = u.next = { lane: 0, action: a.action, hasEagerState: a.hasEagerState, eagerState: a.eagerState, next: null }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
      else {
        var p = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null
        };
        u === null ? (s = u = p, l = r) : u = u.next = p, re.lanes |= c, Tn |= c;
      }
      a = a.next;
    } while (a !== null && a !== i);
    u === null ? l = r : u.next = s, ft(r, t.memoizedState) || (Fe = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, re.lanes |= i, Tn |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ll(e) {
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
function Kf() {
}
function Gf(e, t) {
  var n = re, r = ot(), o = t(), i = !ft(r.memoizedState, o);
  if (i && (r.memoizedState = o, Fe = !0), r = r.queue, Du(qf.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || de !== null && de.memoizedState.tag & 1) {
    if (n.flags |= 2048, no(9, Jf.bind(null, n, r, o, t), void 0, null), fe === null) throw Error(C(349));
    $n & 30 || Zf(n, t, o);
  }
  return o;
}
function Zf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Jf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, ep(t) && tp(e);
}
function qf(e, t, n) {
  return n(function() {
    ep(t) && tp(e);
  });
}
function ep(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ft(e, n);
  } catch {
    return !0;
  }
}
function tp(e) {
  var t = Mt(e, 1);
  t !== null && dt(t, e, 1, -1);
}
function oc(e) {
  var t = gt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: to, lastRenderedState: e }, t.queue = e, e = e.dispatch = Z0.bind(null, re, e), [t.memoizedState, e];
}
function no(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = re.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, re.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function np() {
  return ot().memoizedState;
}
function Ko(e, t, n, r) {
  var o = gt();
  re.flags |= e, o.memoizedState = no(1 | t, n, void 0, r === void 0 ? null : r);
}
function Zi(e, t, n, r) {
  var o = ot();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ue !== null) {
    var l = ue.memoizedState;
    if (i = l.destroy, r !== null && Fu(r, l.deps)) {
      o.memoizedState = no(t, n, i, r);
      return;
    }
  }
  re.flags |= e, o.memoizedState = no(1 | t, n, i, r);
}
function ic(e, t) {
  return Ko(8390656, 8, e, t);
}
function Du(e, t) {
  return Zi(2048, 8, e, t);
}
function rp(e, t) {
  return Zi(4, 2, e, t);
}
function op(e, t) {
  return Zi(4, 4, e, t);
}
function ip(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function lp(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Zi(4, 4, ip.bind(null, t, e), n);
}
function Ou() {
}
function sp(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function up(e, t) {
  var n = ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function ap(e, t, n) {
  return $n & 21 ? (ft(n, t) || (n = hf(), re.lanes |= n, Tn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Fe = !0), e.memoizedState = n);
}
function K0(e, t) {
  var n = B;
  B = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = zl.transition;
  zl.transition = {};
  try {
    e(!1), t();
  } finally {
    B = n, zl.transition = r;
  }
}
function cp() {
  return ot().memoizedState;
}
function G0(e, t, n) {
  var r = Jt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, dp(e)) fp(t, n);
  else if (n = Qf(e, t, n, r), n !== null) {
    var o = $e();
    dt(n, e, r, o), pp(n, t, r);
  }
}
function Z0(e, t, n) {
  var r = Jt(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (dp(e)) fp(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var l = t.lastRenderedState, s = i(l, n);
      if (o.hasEagerState = !0, o.eagerState = s, ft(s, l)) {
        var u = t.interleaved;
        u === null ? (o.next = o, Pu(t)) : (o.next = u.next, u.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Qf(e, t, o, r), n !== null && (o = $e(), dt(n, e, r, o), pp(n, t, r));
  }
}
function dp(e) {
  var t = e.alternate;
  return e === re || t !== null && t === re;
}
function fp(e, t) {
  Lr = Ni = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function pp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, mu(e, n);
  }
}
var Pi = { readContext: rt, useCallback: xe, useContext: xe, useEffect: xe, useImperativeHandle: xe, useInsertionEffect: xe, useLayoutEffect: xe, useMemo: xe, useReducer: xe, useRef: xe, useState: xe, useDebugValue: xe, useDeferredValue: xe, useTransition: xe, useMutableSource: xe, useSyncExternalStore: xe, useId: xe, unstable_isNewReconciler: !1 }, J0 = { readContext: rt, useCallback: function(e, t) {
  return gt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: rt, useEffect: ic, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ko(
    4194308,
    4,
    ip.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ko(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ko(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = gt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = gt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = G0.bind(null, re, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = gt();
  return e = { current: e }, t.memoizedState = e;
}, useState: oc, useDebugValue: Ou, useDeferredValue: function(e) {
  return gt().memoizedState = e;
}, useTransition: function() {
  var e = oc(!1), t = e[0];
  return e = K0.bind(null, e[1]), gt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = re, o = gt();
  if (te) {
    if (n === void 0) throw Error(C(407));
    n = n();
  } else {
    if (n = t(), fe === null) throw Error(C(349));
    $n & 30 || Zf(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, ic(qf.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, no(9, Jf.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = gt(), t = fe.identifierPrefix;
  if (te) {
    var n = $t, r = Et;
    n = (r & ~(1 << 32 - ct(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = eo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = X0++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, q0 = {
  readContext: rt,
  useCallback: sp,
  useContext: rt,
  useEffect: Du,
  useImperativeHandle: lp,
  useInsertionEffect: rp,
  useLayoutEffect: op,
  useMemo: up,
  useReducer: Fl,
  useRef: np,
  useState: function() {
    return Fl(to);
  },
  useDebugValue: Ou,
  useDeferredValue: function(e) {
    var t = ot();
    return ap(t, ue.memoizedState, e);
  },
  useTransition: function() {
    var e = Fl(to)[0], t = ot().memoizedState;
    return [e, t];
  },
  useMutableSource: Kf,
  useSyncExternalStore: Gf,
  useId: cp,
  unstable_isNewReconciler: !1
}, ey = { readContext: rt, useCallback: sp, useContext: rt, useEffect: Du, useImperativeHandle: lp, useInsertionEffect: rp, useLayoutEffect: op, useMemo: up, useReducer: Ll, useRef: np, useState: function() {
  return Ll(to);
}, useDebugValue: Ou, useDeferredValue: function(e) {
  var t = ot();
  return ue === null ? t.memoizedState = e : ap(t, ue.memoizedState, e);
}, useTransition: function() {
  var e = Ll(to)[0], t = ot().memoizedState;
  return [e, t];
}, useMutableSource: Kf, useSyncExternalStore: Gf, useId: cp, unstable_isNewReconciler: !1 };
function lt(e, t) {
  if (e && e.defaultProps) {
    t = oe({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ms(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : oe({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ji = { isMounted: function(e) {
  return (e = e._reactInternals) ? Mn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), o = Jt(e), i = Tt(r, o);
  i.payload = t, n != null && (i.callback = n), t = Gt(e, i, o), t !== null && (dt(t, e, o, r), Yo(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), o = Jt(e), i = Tt(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Gt(e, i, o), t !== null && (dt(t, e, o, r), Yo(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = $e(), r = Jt(e), o = Tt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Gt(e, o, r), t !== null && (dt(t, e, r, n), Yo(t, e, r));
} };
function lc(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Xr(n, r) || !Xr(o, i) : !0;
}
function hp(e, t, n) {
  var r = !1, o = tn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = rt(i) : (o = Ie(t) ? _n : Ce.current, r = t.contextTypes, i = (r = r != null) ? Jn(e, o) : tn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ji, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function sc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ji.enqueueReplaceState(t, t.state, null);
}
function js(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Mu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = rt(i) : (i = Ie(t) ? _n : Ce.current, o.context = Jn(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ms(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ji.enqueueReplaceState(o, o.state, null), $i(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function nr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Nm(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Il(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Rs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var ty = typeof WeakMap == "function" ? WeakMap : Map;
function mp(e, t, n) {
  n = Tt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ji || (ji = !0, Ws = r), Rs(e, t);
  }, n;
}
function yp(e, t, n) {
  n = Tt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Rs(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Rs(e, t), typeof r != "function" && (Zt === null ? Zt = /* @__PURE__ */ new Set([this]) : Zt.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function uc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ty();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = my.bind(null, e, t, n), t.then(e, e));
}
function ac(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function cc(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Tt(-1, 1), t.tag = 2, Gt(n, t, 1))), n.lanes |= 1), e);
}
var ny = Ft.ReactCurrentOwner, Fe = !1;
function _e(e, t, n, r) {
  t.child = e === null ? Hf(t, null, n, r) : er(t, e.child, n, r);
}
function dc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Kn(t, o), r = Lu(e, t, n, r, i, o), n = Iu(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, jt(e, t, o)) : (te && n && Cu(t), t.flags |= 1, _e(e, t, r, o), t.child);
}
function fc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Qu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, gp(e, t, i, r, o)) : (e = qo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Xr, n(l, r) && e.ref === t.ref) return jt(e, t, o);
  }
  return t.flags |= 1, e = qt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function gp(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Xr(i, r) && e.ref === t.ref) if (Fe = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Fe = !0);
    else return t.lanes = e.lanes, jt(e, t, o);
  }
  return zs(e, t, n, r, o);
}
function vp(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, K(Bn, We), We |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, K(Bn, We), We |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, K(Bn, We), We |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, K(Bn, We), We |= r;
  return _e(e, t, o, n), t.child;
}
function wp(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function zs(e, t, n, r, o) {
  var i = Ie(n) ? _n : Ce.current;
  return i = Jn(t, i), Kn(t, o), n = Lu(e, t, n, r, i, o), r = Iu(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, jt(e, t, o)) : (te && r && Cu(t), t.flags |= 1, _e(e, t, n, o), t.child);
}
function pc(e, t, n, r, o) {
  if (Ie(n)) {
    var i = !0;
    ki(t);
  } else i = !1;
  if (Kn(t, o), t.stateNode === null) Go(e, t), hp(t, n, r), js(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, s = t.memoizedProps;
    l.props = s;
    var u = l.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = rt(a) : (a = Ie(n) ? _n : Ce.current, a = Jn(t, a));
    var c = n.getDerivedStateFromProps, p = typeof c == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    p || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || u !== a) && sc(t, l, r, a), bt = !1;
    var m = t.memoizedState;
    l.state = m, $i(t, r, l, o), u = t.memoizedState, s !== r || m !== u || Le.current || bt ? (typeof c == "function" && (Ms(t, n, c, r), u = t.memoizedState), (s = bt || lc(t, n, s, r, m, u, a)) ? (p || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), l.props = r, l.state = u, l.context = a, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, Yf(e, t), s = t.memoizedProps, a = t.type === t.elementType ? s : lt(t.type, s), l.props = a, p = t.pendingProps, m = l.context, u = n.contextType, typeof u == "object" && u !== null ? u = rt(u) : (u = Ie(n) ? _n : Ce.current, u = Jn(t, u));
    var y = n.getDerivedStateFromProps;
    (c = typeof y == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== p || m !== u) && sc(t, l, r, u), bt = !1, m = t.memoizedState, l.state = m, $i(t, r, l, o);
    var g = t.memoizedState;
    s !== p || m !== g || Le.current || bt ? (typeof y == "function" && (Ms(t, n, y, r), g = t.memoizedState), (a = bt || lc(t, n, a, r, m, g, u) || !1) ? (c || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, g, u), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, g, u)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), l.props = r, l.state = g, l.context = u, r = a) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Fs(e, t, n, r, i, o);
}
function Fs(e, t, n, r, o, i) {
  wp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Ja(t, n, !1), jt(e, t, i);
  r = t.stateNode, ny.current = t;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = er(t, e.child, null, i), t.child = er(t, null, s, i)) : _e(e, t, s, i), t.memoizedState = r.state, o && Ja(t, n, !0), t.child;
}
function xp(e) {
  var t = e.stateNode;
  t.pendingContext ? Za(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Za(e, t.context, !1), ju(e, t.containerInfo);
}
function hc(e, t, n, r, o) {
  return qn(), Eu(o), t.flags |= 256, _e(e, t, n, r), t.child;
}
var Ls = { dehydrated: null, treeContext: null, retryLane: 0 };
function Is(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function kp(e, t, n) {
  var r = t.pendingProps, o = ne.current, i = !1, l = (t.flags & 128) !== 0, s;
  if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), K(ne, o & 1), e === null)
    return Ns(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = tl(l, r, 0, null), e = Cn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Is(n), t.memoizedState = Ls, e) : bu(t, l));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return ry(e, t, l, r, s, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, s = o.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = qt(o, u), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = qt(s, i) : (i = Cn(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? Is(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = Ls, r;
  }
  return i = e.child, e = i.sibling, r = qt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function bu(e, t) {
  return t = tl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Po(e, t, n, r) {
  return r !== null && Eu(r), er(t, e.child, null, n), e = bu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function ry(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Il(Error(C(422))), Po(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = tl({ mode: "visible", children: r.children }, o, 0, null), i = Cn(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && er(t, e.child, null, l), t.child.memoizedState = Is(l), t.memoizedState = Ls, i);
  if (!(t.mode & 1)) return Po(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
    return r = s, i = Error(C(419)), r = Il(i, r, void 0), Po(e, t, l, r);
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
    return Hu(), r = Il(Error(C(421))), Po(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = yy.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Xe = Kt(o.nextSibling), Ke = t, te = !0, ut = null, e !== null && (qe[et++] = Et, qe[et++] = $t, qe[et++] = En, Et = e.id, $t = e.overflow, En = t), t = bu(t, r.children), t.flags |= 4096, t);
}
function mc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ps(e.return, t, n);
}
function Dl(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Sp(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (_e(e, t, r.children, n), r = ne.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && mc(e, n, t);
      else if (e.tag === 19) mc(e, n, t);
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
  if (K(ne, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Ti(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Dl(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Ti(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Dl(t, !0, n, null, i);
      break;
    case "together":
      Dl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Go(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function jt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Tn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (e = t.child, n = qt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = qt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function oy(e, t, n) {
  switch (t.tag) {
    case 3:
      xp(t), qn();
      break;
    case 5:
      Xf(t);
      break;
    case 1:
      Ie(t.type) && ki(t);
      break;
    case 4:
      ju(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      K(_i, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (K(ne, ne.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? kp(e, t, n) : (K(ne, ne.current & 1), e = jt(e, t, n), e !== null ? e.sibling : null);
      K(ne, ne.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Sp(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), K(ne, ne.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, vp(e, t, n);
  }
  return jt(e, t, n);
}
var Cp, Ds, _p, Ep;
Cp = function(e, t) {
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
Ds = function() {
};
_p = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, wn(xt.current);
    var i = null;
    switch (n) {
      case "input":
        o = is(e, o), r = is(e, r), i = [];
        break;
      case "select":
        o = oe({}, o, { value: void 0 }), r = oe({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = us(e, o), r = us(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = wi);
    }
    cs(n, r);
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
      else a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (i = i || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Ur.hasOwnProperty(a) ? (u != null && a === "onScroll" && J("scroll", e), i || s === u || (i = [])) : (i = i || []).push(a, u));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Ep = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yr(e, t) {
  if (!te) switch (e.tailMode) {
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
function iy(e, t, n) {
  var r = t.pendingProps;
  switch (_u(t), t.tag) {
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
      return Ie(t.type) && xi(), ke(t), null;
    case 3:
      return r = t.stateNode, tr(), ee(Le), ee(Ce), zu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (To(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ut !== null && (Hs(ut), ut = null))), Ds(e, t), ke(t), null;
    case 5:
      Ru(t);
      var o = wn(qr.current);
      if (n = t.type, e !== null && t.stateNode != null) _p(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return ke(t), null;
        }
        if (e = wn(xt.current), To(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[vt] = t, r[Zr] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              J("cancel", r), J("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              J("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Er.length; o++) J(Er[o], r);
              break;
            case "source":
              J("error", r);
              break;
            case "img":
            case "image":
            case "link":
              J(
                "error",
                r
              ), J("load", r);
              break;
            case "details":
              J("toggle", r);
              break;
            case "input":
              _a(r, i), J("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, J("invalid", r);
              break;
            case "textarea":
              $a(r, i), J("invalid", r);
          }
          cs(n, i), o = null;
          for (var l in i) if (i.hasOwnProperty(l)) {
            var s = i[l];
            l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && $o(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && $o(
              r.textContent,
              s,
              e
            ), o = ["children", "" + s]) : Ur.hasOwnProperty(l) && s != null && l === "onScroll" && J("scroll", r);
          }
          switch (n) {
            case "input":
              vo(r), Ea(r, i, !0);
              break;
            case "textarea":
              vo(r), Ta(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = wi);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Jd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[vt] = t, e[Zr] = r, Cp(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = ds(n, r), n) {
              case "dialog":
                J("cancel", e), J("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < Er.length; o++) J(Er[o], e);
                o = r;
                break;
              case "source":
                J("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                J(
                  "error",
                  e
                ), J("load", e), o = r;
                break;
              case "details":
                J("toggle", e), o = r;
                break;
              case "input":
                _a(e, r), o = is(e, r), J("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = oe({}, r, { value: void 0 }), J("invalid", e);
                break;
              case "textarea":
                $a(e, r), o = us(e, r), J("invalid", e);
                break;
              default:
                o = r;
            }
            cs(n, o), s = o;
            for (i in s) if (s.hasOwnProperty(i)) {
              var u = s[i];
              i === "style" ? tf(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && qd(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Wr(e, u) : typeof u == "number" && Wr(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ur.hasOwnProperty(i) ? u != null && i === "onScroll" && J("scroll", e) : u != null && au(e, i, u, l));
            }
            switch (n) {
              case "input":
                vo(e), Ea(e, r, !1);
                break;
              case "textarea":
                vo(e), Ta(e);
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
                typeof o.onClick == "function" && (e.onclick = wi);
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
      if (e && t.stateNode != null) Ep(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
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
      if (ee(ne), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (te && Xe !== null && t.mode & 1 && !(t.flags & 128)) Vf(), qn(), t.flags |= 98560, i = !1;
        else if (i = To(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(C(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(C(317));
            i[vt] = t;
          } else qn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ke(t), i = !1;
        } else ut !== null && (Hs(ut), ut = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ne.current & 1 ? ae === 0 && (ae = 3) : Hu())), t.updateQueue !== null && (t.flags |= 4), ke(t), null);
    case 4:
      return tr(), Ds(e, t), e === null && Kr(t.stateNode.containerInfo), ke(t), null;
    case 10:
      return Nu(t.type._context), ke(t), null;
    case 17:
      return Ie(t.type) && xi(), ke(t), null;
    case 19:
      if (ee(ne), i = t.memoizedState, i === null) return ke(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) yr(i, !1);
      else {
        if (ae !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = Ti(e), l !== null) {
            for (t.flags |= 128, yr(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return K(ne, ne.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && le() > rr && (t.flags |= 128, r = !0, yr(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ti(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), yr(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !te) return ke(t), null;
        } else 2 * le() - i.renderingStartTime > rr && n !== 1073741824 && (t.flags |= 128, r = !0, yr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = le(), t.sibling = null, n = ne.current, K(ne, r ? n & 1 | 2 : n & 1), t) : (ke(t), null);
    case 22:
    case 23:
      return Bu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? We & 1073741824 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ke(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function ly(e, t) {
  switch (_u(t), t.tag) {
    case 1:
      return Ie(t.type) && xi(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return tr(), ee(Le), ee(Ce), zu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ru(t), null;
    case 13:
      if (ee(ne), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(C(340));
        qn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ee(ne), null;
    case 4:
      return tr(), null;
    case 10:
      return Nu(t.type._context), null;
    case 22:
    case 23:
      return Bu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Mo = !1, Se = !1, sy = typeof WeakSet == "function" ? WeakSet : Set, N = null;
function Vn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ie(e, t, r);
  }
  else n.current = null;
}
function Os(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var yc = !1;
function uy(e, t) {
  if (ks = yi, e = Mf(), Su(e)) {
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
        var l = 0, s = -1, u = -1, a = 0, c = 0, p = e, m = null;
        t: for (; ; ) {
          for (var y; p !== n || o !== 0 && p.nodeType !== 3 || (s = l + o), p !== i || r !== 0 && p.nodeType !== 3 || (u = l + r), p.nodeType === 3 && (l += p.nodeValue.length), (y = p.firstChild) !== null; )
            m = p, p = y;
          for (; ; ) {
            if (p === e) break t;
            if (m === n && ++a === o && (s = l), m === i && ++c === r && (u = l), (y = p.nextSibling) !== null) break;
            p = m, m = p.parentNode;
          }
          p = y;
        }
        n = s === -1 || u === -1 ? null : { start: s, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ss = { focusedElem: e, selectionRange: n }, yi = !1, N = t; N !== null; ) if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, N = e;
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
            var x = g.memoizedProps, k = g.memoizedState, f = t.stateNode, d = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : lt(t.type, x), k);
            f.__reactInternalSnapshotBeforeUpdate = d;
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
      ie(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, N = e;
      break;
    }
    N = t.return;
  }
  return g = yc, yc = !1, g;
}
function Ir(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Os(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function qi(e, t) {
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
function bs(e) {
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
function $p(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, $p(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[vt], delete t[Zr], delete t[Es], delete t[B0], delete t[H0])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Tp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function gc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Tp(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function As(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = wi));
  else if (r !== 4 && (e = e.child, e !== null)) for (As(e, t, n), e = e.sibling; e !== null; ) As(e, t, n), e = e.sibling;
}
function Us(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Us(e, t, n), e = e.sibling; e !== null; ) Us(e, t, n), e = e.sibling;
}
var pe = null, st = !1;
function Lt(e, t, n) {
  for (n = n.child; n !== null; ) Np(e, t, n), n = n.sibling;
}
function Np(e, t, n) {
  if (wt && typeof wt.onCommitFiberUnmount == "function") try {
    wt.onCommitFiberUnmount(Hi, n);
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
      pe !== null && (st ? (e = pe, n = n.stateNode, e.nodeType === 8 ? Ml(e.parentNode, n) : e.nodeType === 1 && Ml(e, n), Qr(e)) : Ml(pe, n.stateNode));
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
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && Os(n, t, l), o = o.next;
        } while (o !== r);
      }
      Lt(e, t, n);
      break;
    case 1:
      if (!Se && (Vn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        ie(n, t, s);
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
function vc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new sy()), t.forEach(function(r) {
      var o = gy.bind(null, e, r);
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
      Np(i, l, o), pe = null, st = !1;
      var u = o.alternate;
      u !== null && (u.return = null), o.return = null;
    } catch (a) {
      ie(o, t, a);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Pp(t, e), t = t.sibling;
}
function Pp(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (it(t, e), pt(e), r & 4) {
        try {
          Ir(3, e, e.return), qi(3, e);
        } catch (x) {
          ie(e, e.return, x);
        }
        try {
          Ir(5, e, e.return);
        } catch (x) {
          ie(e, e.return, x);
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
          ie(e, e.return, x);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, s = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          s === "input" && i.type === "radio" && i.name != null && Gd(o, i), ds(s, l);
          var a = ds(s, i);
          for (l = 0; l < u.length; l += 2) {
            var c = u[l], p = u[l + 1];
            c === "style" ? tf(o, p) : c === "dangerouslySetInnerHTML" ? qd(o, p) : c === "children" ? Wr(o, p) : au(o, c, p, a);
          }
          switch (s) {
            case "input":
              ls(o, i);
              break;
            case "textarea":
              Zd(o, i);
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
          ie(e, e.return, x);
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
          ie(e, e.return, x);
        }
      }
      break;
    case 3:
      if (it(t, e), pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Qr(t.containerInfo);
      } catch (x) {
        ie(e, e.return, x);
      }
      break;
    case 4:
      it(t, e), pt(e);
      break;
    case 13:
      it(t, e), pt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Wu = le())), r & 4 && vc(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Se = (a = Se) || c, it(t, e), Se = a) : it(t, e), pt(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !c && e.mode & 1) for (N = e, c = e.child; c !== null; ) {
          for (p = N = c; N !== null; ) {
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
                    ie(r, n, x);
                  }
                }
                break;
              case 5:
                Vn(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  xc(p);
                  continue;
                }
            }
            y !== null ? (y.return = m, N = y) : xc(p);
          }
          c = c.sibling;
        }
        e: for (c = null, p = e; ; ) {
          if (p.tag === 5) {
            if (c === null) {
              c = p;
              try {
                o = p.stateNode, a ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = p.stateNode, u = p.memoizedProps.style, l = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = ef("display", l));
              } catch (x) {
                ie(e, e.return, x);
              }
            }
          } else if (p.tag === 6) {
            if (c === null) try {
              p.stateNode.nodeValue = a ? "" : p.memoizedProps;
            } catch (x) {
              ie(e, e.return, x);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            c === p && (c = null), p = p.return;
          }
          c === p && (c = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      it(t, e), pt(e), r & 4 && vc(e);
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
          if (Tp(n)) {
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
          var i = gc(e);
          Us(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, s = gc(e);
          As(e, s, l);
          break;
        default:
          throw Error(C(161));
      }
    } catch (u) {
      ie(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ay(e, t, n) {
  N = e, Mp(e);
}
function Mp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var o = N, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Mo;
      if (!l) {
        var s = o.alternate, u = s !== null && s.memoizedState !== null || Se;
        s = Mo;
        var a = Se;
        if (Mo = l, (Se = u) && !a) for (N = o; N !== null; ) l = N, u = l.child, l.tag === 22 && l.memoizedState !== null ? kc(o) : u !== null ? (u.return = l, N = u) : kc(o);
        for (; i !== null; ) N = i, Mp(i), i = i.sibling;
        N = o, Mo = s, Se = a;
      }
      wc(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, N = i) : wc(e);
  }
}
function wc(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Se || qi(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Se) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : lt(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && rc(t, i, r);
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
              rc(t, l, n);
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
                var c = a.memoizedState;
                if (c !== null) {
                  var p = c.dehydrated;
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
        Se || t.flags & 512 && bs(t);
      } catch (m) {
        ie(t, t.return, m);
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
function xc(e) {
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
function kc(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            qi(4, t);
          } catch (u) {
            ie(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ie(t, o, u);
            }
          }
          var i = t.return;
          try {
            bs(t);
          } catch (u) {
            ie(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            bs(t);
          } catch (u) {
            ie(t, l, u);
          }
      }
    } catch (u) {
      ie(t, t.return, u);
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
var cy = Math.ceil, Mi = Ft.ReactCurrentDispatcher, Au = Ft.ReactCurrentOwner, nt = Ft.ReactCurrentBatchConfig, W = 0, fe = null, se = null, me = 0, We = 0, Bn = on(0), ae = 0, ro = null, Tn = 0, el = 0, Uu = 0, Dr = null, ze = null, Wu = 0, rr = 1 / 0, Ct = null, ji = !1, Ws = null, Zt = null, jo = !1, Vt = null, Ri = 0, Or = 0, Vs = null, Zo = -1, Jo = 0;
function $e() {
  return W & 6 ? le() : Zo !== -1 ? Zo : Zo = le();
}
function Jt(e) {
  return e.mode & 1 ? W & 2 && me !== 0 ? me & -me : Y0.transition !== null ? (Jo === 0 && (Jo = hf()), Jo) : (e = B, e !== 0 || (e = window.event, e = e === void 0 ? 16 : kf(e.type)), e) : 1;
}
function dt(e, t, n, r) {
  if (50 < Or) throw Or = 0, Vs = null, Error(C(185));
  ao(e, n, r), (!(W & 2) || e !== fe) && (e === fe && (!(W & 2) && (el |= n), ae === 4 && Ut(e, me)), De(e, r), n === 1 && W === 0 && !(t.mode & 1) && (rr = le() + 500, Gi && ln()));
}
function De(e, t) {
  var n = e.callbackNode;
  Ym(e, t);
  var r = mi(e, e === fe ? me : 0);
  if (r === 0) n !== null && Ma(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ma(n), t === 1) e.tag === 0 ? Q0(Sc.bind(null, e)) : Af(Sc.bind(null, e)), W0(function() {
      !(W & 6) && ln();
    }), n = null;
    else {
      switch (mf(r)) {
        case 1:
          n = hu;
          break;
        case 4:
          n = ff;
          break;
        case 16:
          n = hi;
          break;
        case 536870912:
          n = pf;
          break;
        default:
          n = hi;
      }
      n = Op(n, jp.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function jp(e, t) {
  if (Zo = -1, Jo = 0, W & 6) throw Error(C(327));
  var n = e.callbackNode;
  if (Gn() && e.callbackNode !== n) return null;
  var r = mi(e, e === fe ? me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = zi(e, r);
  else {
    t = r;
    var o = W;
    W |= 2;
    var i = zp();
    (fe !== e || me !== t) && (Ct = null, rr = le() + 500, Sn(e, t));
    do
      try {
        py();
        break;
      } catch (s) {
        Rp(e, s);
      }
    while (!0);
    Tu(), Mi.current = i, W = o, se !== null ? t = 0 : (fe = null, me = 0, t = ae);
  }
  if (t !== 0) {
    if (t === 2 && (o = ys(e), o !== 0 && (r = o, t = Bs(e, o))), t === 1) throw n = ro, Sn(e, 0), Ut(e, r), De(e, le()), n;
    if (t === 6) Ut(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !dy(o) && (t = zi(e, r), t === 2 && (i = ys(e), i !== 0 && (r = i, t = Bs(e, i))), t === 1)) throw n = ro, Sn(e, 0), Ut(e, r), De(e, le()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          fn(e, ze, Ct);
          break;
        case 3:
          if (Ut(e, r), (r & 130023424) === r && (t = Wu + 500 - le(), 10 < t)) {
            if (mi(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              $e(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = _s(fn.bind(null, e, ze, Ct), t);
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
          if (r = o, r = le() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * cy(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = _s(fn.bind(null, e, ze, Ct), r);
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
  return De(e, le()), e.callbackNode === n ? jp.bind(null, e) : null;
}
function Bs(e, t) {
  var n = Dr;
  return e.current.memoizedState.isDehydrated && (Sn(e, t).flags |= 256), e = zi(e, t), e !== 2 && (t = ze, ze = n, t !== null && Hs(t)), e;
}
function Hs(e) {
  ze === null ? ze = e : ze.push.apply(ze, e);
}
function dy(e) {
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
  for (t &= ~Uu, t &= ~el, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ct(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Sc(e) {
  if (W & 6) throw Error(C(327));
  Gn();
  var t = mi(e, 0);
  if (!(t & 1)) return De(e, le()), null;
  var n = zi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ys(e);
    r !== 0 && (t = r, n = Bs(e, r));
  }
  if (n === 1) throw n = ro, Sn(e, 0), Ut(e, t), De(e, le()), n;
  if (n === 6) throw Error(C(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, fn(e, ze, Ct), De(e, le()), null;
}
function Vu(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    W = n, W === 0 && (rr = le() + 500, Gi && ln());
  }
}
function Nn(e) {
  Vt !== null && Vt.tag === 0 && !(W & 6) && Gn();
  var t = W;
  W |= 1;
  var n = nt.transition, r = B;
  try {
    if (nt.transition = null, B = 1, e) return e();
  } finally {
    B = r, nt.transition = n, W = t, !(W & 6) && ln();
  }
}
function Bu() {
  We = Bn.current, ee(Bn);
}
function Sn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, U0(n)), se !== null) for (n = se.return; n !== null; ) {
    var r = n;
    switch (_u(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && xi();
        break;
      case 3:
        tr(), ee(Le), ee(Ce), zu();
        break;
      case 5:
        Ru(r);
        break;
      case 4:
        tr();
        break;
      case 13:
        ee(ne);
        break;
      case 19:
        ee(ne);
        break;
      case 10:
        Nu(r.type._context);
        break;
      case 22:
      case 23:
        Bu();
    }
    n = n.return;
  }
  if (fe = e, se = e = qt(e.current, null), me = We = t, ae = 0, ro = null, Uu = el = Tn = 0, ze = Dr = null, vn !== null) {
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
function Rp(e, t) {
  do {
    var n = se;
    try {
      if (Tu(), Xo.current = Pi, Ni) {
        for (var r = re.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Ni = !1;
      }
      if ($n = 0, de = ue = re = null, Lr = !1, eo = 0, Au.current = null, n === null || n.return === null) {
        ae = 1, ro = t, se = null;
        break;
      }
      e: {
        var i = e, l = n.return, s = n, u = t;
        if (t = me, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var a = u, c = s, p = c.tag;
          if (!(c.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = c.alternate;
            m ? (c.updateQueue = m.updateQueue, c.memoizedState = m.memoizedState, c.lanes = m.lanes) : (c.updateQueue = null, c.memoizedState = null);
          }
          var y = ac(l);
          if (y !== null) {
            y.flags &= -257, cc(y, l, s, i, t), y.mode & 1 && uc(i, a, t), t = y, u = a;
            var g = t.updateQueue;
            if (g === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(u), t.updateQueue = x;
            } else g.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              uc(i, a, t), Hu();
              break e;
            }
            u = Error(C(426));
          }
        } else if (te && s.mode & 1) {
          var k = ac(l);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), cc(k, l, s, i, t), Eu(nr(u, s));
            break e;
          }
        }
        i = u = nr(u, s), ae !== 4 && (ae = 2), Dr === null ? Dr = [i] : Dr.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var f = mp(i, u, t);
              nc(i, f);
              break e;
            case 1:
              s = u;
              var d = i.type, h = i.stateNode;
              if (!(i.flags & 128) && (typeof d.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Zt === null || !Zt.has(h)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = yp(i, s, t);
                nc(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Lp(n);
    } catch (S) {
      t = S, se === n && n !== null && (se = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function zp() {
  var e = Mi.current;
  return Mi.current = Pi, e === null ? Pi : e;
}
function Hu() {
  (ae === 0 || ae === 3 || ae === 2) && (ae = 4), fe === null || !(Tn & 268435455) && !(el & 268435455) || Ut(fe, me);
}
function zi(e, t) {
  var n = W;
  W |= 2;
  var r = zp();
  (fe !== e || me !== t) && (Ct = null, Sn(e, t));
  do
    try {
      fy();
      break;
    } catch (o) {
      Rp(e, o);
    }
  while (!0);
  if (Tu(), W = n, Mi.current = r, se !== null) throw Error(C(261));
  return fe = null, me = 0, ae;
}
function fy() {
  for (; se !== null; ) Fp(se);
}
function py() {
  for (; se !== null && !Om(); ) Fp(se);
}
function Fp(e) {
  var t = Dp(e.alternate, e, We);
  e.memoizedProps = e.pendingProps, t === null ? Lp(e) : se = t, Au.current = null;
}
function Lp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = ly(n, t), n !== null) {
        n.flags &= 32767, se = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ae = 6, se = null;
        return;
      }
    } else if (n = iy(n, t, We), n !== null) {
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
    nt.transition = null, B = 1, hy(e, t, n, r);
  } finally {
    nt.transition = o, B = r;
  }
  return null;
}
function hy(e, t, n, r) {
  do
    Gn();
  while (Vt !== null);
  if (W & 6) throw Error(C(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(C(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Xm(e, i), e === fe && (se = fe = null, me = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || jo || (jo = !0, Op(hi, function() {
    return Gn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = nt.transition, nt.transition = null;
    var l = B;
    B = 1;
    var s = W;
    W |= 4, Au.current = null, uy(e, n), Pp(n, e), F0(Ss), yi = !!ks, Ss = ks = null, e.current = n, ay(n), bm(), W = s, B = l, nt.transition = i;
  } else e.current = n;
  if (jo && (jo = !1, Vt = e, Ri = o), i = e.pendingLanes, i === 0 && (Zt = null), Wm(n.stateNode), De(e, le()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ji) throw ji = !1, e = Ws, Ws = null, e;
  return Ri & 1 && e.tag !== 0 && Gn(), i = e.pendingLanes, i & 1 ? e === Vs ? Or++ : (Or = 0, Vs = e) : Or = 0, ln(), null;
}
function Gn() {
  if (Vt !== null) {
    var e = mf(Ri), t = nt.transition, n = B;
    try {
      if (nt.transition = null, B = 16 > e ? 16 : e, Vt === null) var r = !1;
      else {
        if (e = Vt, Vt = null, Ri = 0, W & 6) throw Error(C(331));
        var o = W;
        for (W |= 4, N = e.current; N !== null; ) {
          var i = N, l = i.child;
          if (N.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (N = a; N !== null; ) {
                  var c = N;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ir(8, c, i);
                  }
                  var p = c.child;
                  if (p !== null) p.return = c, N = p;
                  else for (; N !== null; ) {
                    c = N;
                    var m = c.sibling, y = c.return;
                    if ($p(c), c === a) {
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
            var f = i.sibling;
            if (f !== null) {
              f.return = i.return, N = f;
              break e;
            }
            N = i.return;
          }
        }
        var d = e.current;
        for (N = d; N !== null; ) {
          l = N;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) h.return = l, N = h;
          else e: for (l = d; N !== null; ) {
            if (s = N, s.flags & 2048) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  qi(9, s);
              }
            } catch (S) {
              ie(s, s.return, S);
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
        if (W = o, ln(), wt && typeof wt.onPostCommitFiberRoot == "function") try {
          wt.onPostCommitFiberRoot(Hi, e);
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
function Cc(e, t, n) {
  t = nr(n, t), t = mp(e, t, 1), e = Gt(e, t, 1), t = $e(), e !== null && (ao(e, 1, t), De(e, t));
}
function ie(e, t, n) {
  if (e.tag === 3) Cc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Cc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Zt === null || !Zt.has(r))) {
        e = nr(n, e), e = yp(t, e, 1), t = Gt(t, e, 1), e = $e(), t !== null && (ao(t, 1, e), De(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function my(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = $e(), e.pingedLanes |= e.suspendedLanes & n, fe === e && (me & n) === n && (ae === 4 || ae === 3 && (me & 130023424) === me && 500 > le() - Wu ? Sn(e, 0) : Uu |= n), De(e, t);
}
function Ip(e, t) {
  t === 0 && (e.mode & 1 ? (t = ko, ko <<= 1, !(ko & 130023424) && (ko = 4194304)) : t = 1);
  var n = $e();
  e = Mt(e, t), e !== null && (ao(e, t, n), De(e, n));
}
function yy(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Ip(e, n);
}
function gy(e, t) {
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
  r !== null && r.delete(t), Ip(e, n);
}
var Dp;
Dp = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Le.current) Fe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Fe = !1, oy(e, t, n);
    Fe = !!(e.flags & 131072);
  }
  else Fe = !1, te && t.flags & 1048576 && Uf(t, Ci, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Go(e, t), e = t.pendingProps;
      var o = Jn(t, Ce.current);
      Kn(t, n), o = Lu(null, t, r, e, o, n);
      var i = Iu();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ie(r) ? (i = !0, ki(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Mu(t), o.updater = Ji, t.stateNode = o, o._reactInternals = t, js(t, r, e, n), t = Fs(null, t, r, !0, i, n)) : (t.tag = 0, te && i && Cu(t), _e(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Go(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = wy(r), e = lt(r, e), o) {
          case 0:
            t = zs(null, t, r, e, n);
            break e;
          case 1:
            t = pc(null, t, r, e, n);
            break e;
          case 11:
            t = dc(null, t, r, e, n);
            break e;
          case 14:
            t = fc(null, t, r, lt(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), zs(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), pc(e, t, r, o, n);
    case 3:
      e: {
        if (xp(t), e === null) throw Error(C(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Yf(e, t), $i(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = nr(Error(C(423)), t), t = hc(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = nr(Error(C(424)), t), t = hc(e, t, r, n, o);
          break e;
        } else for (Xe = Kt(t.stateNode.containerInfo.firstChild), Ke = t, te = !0, ut = null, n = Hf(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
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
      return Xf(t), e === null && Ns(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, Cs(r, o) ? l = null : i !== null && Cs(r, i) && (t.flags |= 32), wp(e, t), _e(e, t, l, n), t.child;
    case 6:
      return e === null && Ns(t), null;
    case 13:
      return kp(e, t, n);
    case 4:
      return ju(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = er(t, null, r, n) : _e(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), dc(e, t, r, o, n);
    case 7:
      return _e(e, t, t.pendingProps, n), t.child;
    case 8:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, K(_i, r._currentValue), r._currentValue = l, i !== null) if (ft(i.value, l)) {
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
                    var c = a.pending;
                    c === null ? u.next = u : (u.next = c.next, c.next = u), a.pending = u;
                  }
                }
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Ps(
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
            l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), Ps(l, n, t), l = i.sibling;
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
      return r = t.type, o = lt(r, t.pendingProps), o = lt(r.type, o), fc(e, t, r, o, n);
    case 15:
      return gp(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : lt(r, o), Go(e, t), t.tag = 1, Ie(r) ? (e = !0, ki(t)) : e = !1, Kn(t, n), hp(t, r, o), js(t, r, o, n), Fs(null, t, r, !0, e, n);
    case 19:
      return Sp(e, t, n);
    case 22:
      return vp(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Op(e, t) {
  return df(e, t);
}
function vy(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function tt(e, t, n, r) {
  return new vy(e, t, n, r);
}
function Qu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function wy(e) {
  if (typeof e == "function") return Qu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === du) return 11;
    if (e === fu) return 14;
  }
  return 2;
}
function qt(e, t) {
  var n = e.alternate;
  return n === null ? (n = tt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function qo(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function") Qu(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case Fn:
      return Cn(n.children, o, i, t);
    case cu:
      l = 8, o |= 8;
      break;
    case ts:
      return e = tt(12, n, t, o | 2), e.elementType = ts, e.lanes = i, e;
    case ns:
      return e = tt(13, n, t, o), e.elementType = ns, e.lanes = i, e;
    case rs:
      return e = tt(19, n, t, o), e.elementType = rs, e.lanes = i, e;
    case Yd:
      return tl(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Hd:
          l = 10;
          break e;
        case Qd:
          l = 9;
          break e;
        case du:
          l = 11;
          break e;
        case fu:
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
function tl(e, t, n, r) {
  return e = tt(22, e, r, t), e.elementType = Yd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Ol(e, t, n) {
  return e = tt(6, e, null, t), e.lanes = n, e;
}
function bl(e, t, n) {
  return t = tt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function xy(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = wl(0), this.expirationTimes = wl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Yu(e, t, n, r, o, i, l, s, u) {
  return e = new xy(e, t, n, s, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = tt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Mu(i), e;
}
function ky(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: zn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function bp(e) {
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
    if (Ie(n)) return bf(e, n, t);
  }
  return t;
}
function Ap(e, t, n, r, o, i, l, s, u) {
  return e = Yu(n, r, !0, e, o, i, l, s, u), e.context = bp(null), n = e.current, r = $e(), o = Jt(n), i = Tt(r, o), i.callback = t ?? null, Gt(n, i, o), e.current.lanes = o, ao(e, o, r), De(e, r), e;
}
function nl(e, t, n, r) {
  var o = t.current, i = $e(), l = Jt(o);
  return n = bp(n), t.context === null ? t.context = n : t.pendingContext = n, t = Tt(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Gt(o, t, l), e !== null && (dt(e, o, l, i), Yo(e, o, l)), l;
}
function Fi(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function _c(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Xu(e, t) {
  _c(e, t), (e = e.alternate) && _c(e, t);
}
function Sy() {
  return null;
}
var Up = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ku(e) {
  this._internalRoot = e;
}
rl.prototype.render = Ku.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  nl(e, t, null, null);
};
rl.prototype.unmount = Ku.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Nn(function() {
      nl(null, e, null, null);
    }), t[Pt] = null;
  }
};
function rl(e) {
  this._internalRoot = e;
}
rl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = vf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < At.length && t !== 0 && t < At[n].priority; n++) ;
    At.splice(n, 0, e), n === 0 && xf(e);
  }
};
function Gu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ol(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ec() {
}
function Cy(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var a = Fi(l);
        i.call(a);
      };
    }
    var l = Ap(t, r, e, 0, null, !1, !1, "", Ec);
    return e._reactRootContainer = l, e[Pt] = l.current, Kr(e.nodeType === 8 ? e.parentNode : e), Nn(), l;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var a = Fi(u);
      s.call(a);
    };
  }
  var u = Yu(e, 0, !1, null, null, !1, !1, "", Ec);
  return e._reactRootContainer = u, e[Pt] = u.current, Kr(e.nodeType === 8 ? e.parentNode : e), Nn(function() {
    nl(t, u, n, r);
  }), u;
}
function il(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var u = Fi(l);
        s.call(u);
      };
    }
    nl(t, l, e, o);
  } else l = Cy(n, t, e, o, r);
  return Fi(l);
}
yf = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _r(t.pendingLanes);
        n !== 0 && (mu(t, n | 1), De(t, le()), !(W & 6) && (rr = le() + 500, ln()));
      }
      break;
    case 13:
      Nn(function() {
        var r = Mt(e, 1);
        if (r !== null) {
          var o = $e();
          dt(r, e, 1, o);
        }
      }), Xu(e, 1);
  }
};
yu = function(e) {
  if (e.tag === 13) {
    var t = Mt(e, 134217728);
    if (t !== null) {
      var n = $e();
      dt(t, e, 134217728, n);
    }
    Xu(e, 134217728);
  }
};
gf = function(e) {
  if (e.tag === 13) {
    var t = Jt(e), n = Mt(e, t);
    if (n !== null) {
      var r = $e();
      dt(n, e, t, r);
    }
    Xu(e, t);
  }
};
vf = function() {
  return B;
};
wf = function(e, t) {
  var n = B;
  try {
    return B = e, t();
  } finally {
    B = n;
  }
};
ps = function(e, t, n) {
  switch (t) {
    case "input":
      if (ls(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ki(r);
            if (!o) throw Error(C(90));
            Kd(r), ls(r, o);
          }
        }
      }
      break;
    case "textarea":
      Zd(e, n);
      break;
    case "select":
      t = n.value, t != null && Hn(e, !!n.multiple, t, !1);
  }
};
of = Vu;
lf = Nn;
var _y = { usingClientEntryPoint: !1, Events: [fo, On, Ki, nf, rf, Vu] }, gr = { findFiberByHostInstance: gn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ey = { bundleType: gr.bundleType, version: gr.version, rendererPackageName: gr.rendererPackageName, rendererConfig: gr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ft.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = af(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: gr.findFiberByHostInstance || Sy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ro = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ro.isDisabled && Ro.supportsFiber) try {
    Hi = Ro.inject(Ey), wt = Ro;
  } catch {
  }
}
Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _y;
Ze.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Gu(t)) throw Error(C(200));
  return ky(e, t, null, n);
};
Ze.createRoot = function(e, t) {
  if (!Gu(e)) throw Error(C(299));
  var n = !1, r = "", o = Up;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Yu(e, 1, !1, null, null, n, !1, r, o), e[Pt] = t.current, Kr(e.nodeType === 8 ? e.parentNode : e), new Ku(t);
};
Ze.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(C(188)) : (e = Object.keys(e).join(","), Error(C(268, e)));
  return e = af(t), e = e === null ? null : e.stateNode, e;
};
Ze.flushSync = function(e) {
  return Nn(e);
};
Ze.hydrate = function(e, t, n) {
  if (!ol(t)) throw Error(C(200));
  return il(null, e, t, !0, n);
};
Ze.hydrateRoot = function(e, t, n) {
  if (!Gu(e)) throw Error(C(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = Up;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Ap(t, null, e, 1, n ?? null, o, !1, i, l), e[Pt] = t.current, Kr(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new rl(t);
};
Ze.render = function(e, t, n) {
  if (!ol(t)) throw Error(C(200));
  return il(null, e, t, !1, n);
};
Ze.unmountComponentAtNode = function(e) {
  if (!ol(e)) throw Error(C(40));
  return e._reactRootContainer ? (Nn(function() {
    il(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Pt] = null;
    });
  }), !0) : !1;
};
Ze.unstable_batchedUpdates = Vu;
Ze.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!ol(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return il(e, t, n, !1, r);
};
Ze.version = "18.3.1-next-f1338f8080-20240426";
function Wp() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wp);
    } catch (e) {
      console.error(e);
    }
}
Wp(), Ud.exports = Ze;
var Vp = Ud.exports, Zu, $c = Vp;
Zu = $c.createRoot, $c.hydrateRoot;
var $y = Object.defineProperty, Ty = (e, t, n) => t in e ? $y(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, zo = (e, t, n) => Ty(e, typeof t != "symbol" ? t + "" : t, n);
const Ny = {
  stringify: (e) => e ? "true" : "false",
  parse: (e) => /^[ty1-9]/i.test(e)
}, Py = {
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
}, My = {
  stringify: (e) => JSON.stringify(e),
  parse: (e) => JSON.parse(e)
};
function jy(e) {
  return e.replace(
    /([a-z0-9])([A-Z])/g,
    (t, n, r) => `${n}-${r.toLowerCase()}`
  );
}
function Bp(e) {
  return e.replace(/[-:]([a-z])/g, (t, n) => `${n.toUpperCase()}`);
}
const Ry = {
  stringify: (e) => e.name,
  parse: (e, t, n) => {
    const r = (() => {
      const o = Bp(t);
      if (typeof n < "u" && o in n.container)
        return n.container[o];
    })();
    return typeof r == "function" ? r.bind(n) : void 0;
  }
}, zy = {
  stringify: (e) => `${e}`,
  parse: (e) => parseFloat(e)
}, Fy = {
  stringify: (e) => e,
  parse: (e) => e
}, Al = {
  string: Fy,
  number: zy,
  boolean: Ny,
  function: Py,
  method: Ry,
  json: My
}, vr = Symbol.for("r2wc.render"), Fo = Symbol.for("r2wc.connected"), an = Symbol.for("r2wc.context"), be = Symbol.for("r2wc.props");
function Ly(e, t, n) {
  var r, o, i;
  t.props || (t.props = e.propTypes ? Object.keys(e.propTypes) : []), t.events || (t.events = []);
  const l = Array.isArray(t.props) ? t.props.slice() : Object.keys(t.props), s = Array.isArray(t.events) ? t.events.slice() : Object.keys(t.events), u = {}, a = {}, c = {}, p = {};
  for (const y of l) {
    u[y] = Array.isArray(t.props) ? "string" : t.props[y];
    const g = jy(y);
    c[y] = g, p[g] = y;
  }
  for (const y of s)
    a[y] = Array.isArray(t.events) ? {} : t.events[y];
  class m extends HTMLElement {
    constructor() {
      super(), zo(this, i, !0), zo(this, o), zo(this, r, {}), zo(this, "container"), t.shadow ? this.container = this.attachShadow({
        mode: t.shadow
      }) : this.container = this, this[be].container = this.container;
      for (const g of l) {
        const x = c[g], k = this.getAttribute(x), f = u[g], d = f ? Al[f] : null;
        if (f === "method") {
          const h = Bp(x);
          Object.defineProperty(this[be].container, h, {
            enumerable: !0,
            configurable: !0,
            get() {
              return this[be][h];
            },
            set(w) {
              this[be][h] = w, this[vr]();
            }
          }), this[be][g] = d.parse(k, x, this);
        }
        d != null && d.parse && k && (this[be][g] = d.parse(k, x, this));
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
      const f = p[g], d = u[f], h = d ? Al[d] : null;
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
    const g = c[y], x = u[y];
    Object.defineProperty(m.prototype, y, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[be][y];
      },
      set(k) {
        this[be][y] = k;
        const f = x ? Al[x] : null;
        if (f != null && f.stringify) {
          const d = f.stringify(k, g, this);
          this.getAttribute(g) !== d && this.setAttribute(g, d);
        } else
          this[vr]();
      }
    });
  }
  return m;
}
function Iy(e, t, n) {
  const r = Zu(e), o = Ye.createElement(t, n);
  return r.render(o), {
    root: r,
    ReactComponent: t
  };
}
function Dy({ root: e, ReactComponent: t }, n) {
  const r = Ye.createElement(t, n);
  e.render(r);
}
function Oy({ root: e }) {
  e.unmount();
}
function by(e, t = {}) {
  return Ly(e, t, { mount: Iy, update: Dy, unmount: Oy });
}
var Hp = { exports: {} }, ll = {};
var Ay = j, Uy = Symbol.for("react.element"), Wy = Symbol.for("react.fragment"), Vy = Object.prototype.hasOwnProperty, By = Ay.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Hy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qp(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Vy.call(t, r) && !Hy.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Uy, type: e, key: i, ref: l, props: o, _owner: By.current };
}
ll.Fragment = Wy;
ll.jsx = Qp;
ll.jsxs = Qp;
Hp.exports = ll;
var v = Hp.exports;
var Qy = {
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
const Yy = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), G = (e, t) => {
  const n = j.forwardRef(
    ({
      color: r = "currentColor",
      size: o = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: l,
      className: s = "",
      children: u,
      ...a
    }, c) => j.createElement(
      "svg",
      {
        ref: c,
        ...Qy,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: l ? Number(i) * 24 / Number(o) : i,
        className: ["lucide", `lucide-${Yy(e)}`, s].join(" "),
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
const Yp = G("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
const Xy = G("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const Ky = G("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const Gy = G("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
]);
const Zy = G("CheckCheck", [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
]);
const Jy = G("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Ul = G("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
const qy = G("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
const eg = G("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
const Xp = G("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
const tg = G("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
const ng = G("MicOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2", key: "80xlxr" }],
  ["path", { d: "M5 10v2a7 7 0 0 0 12 5", key: "p2k8kg" }],
  ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
  ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
]);
const rg = G("Mic", [
  ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
]);
const og = G("Minimize2", [
  ["polyline", { points: "4 14 10 14 10 20", key: "11kfnr" }],
  ["polyline", { points: "20 10 14 10 14 4", key: "rlmsce" }],
  ["line", { x1: "14", x2: "21", y1: "10", y2: "3", key: "o5lafz" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
const ig = G("MoreVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);
const lg = G("Paperclip", [
  [
    "path",
    {
      d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
      key: "1u3ebp"
    }
  ]
]);
const Tc = G("Pause", [
  ["rect", { width: "4", height: "16", x: "6", y: "4", key: "iffhe4" }],
  ["rect", { width: "4", height: "16", x: "14", y: "4", key: "sjin7j" }]
]);
const Nc = G("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
const sg = G("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const ug = G("Power", [
  ["path", { d: "M12 2v10", key: "mnfbl" }],
  ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
]);
const ag = G("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
const cg = G("Smile", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);
const dg = G("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
const fg = G("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
const pg = G("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
const Kp = G("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function hg({ isOpen: e, onClick: t, config: n }) {
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
      children: e ? /* @__PURE__ */ v.jsx(Kp, { className: "h-6 w-6" }) : /* @__PURE__ */ v.jsx(Xp, { className: "h-6 w-6" })
    }
  );
}
const Lo = 43200, Pc = 1440, Mc = Symbol.for("constructDateFrom");
function Ju(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Mc in e ? e[Mc](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function nn(e, t) {
  return Ju(e, e);
}
let mg = {};
function yg() {
  return mg;
}
function jc(e) {
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
function qu(e, ...t) {
  const n = Ju.bind(
    null,
    e || t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function ei(e, t) {
  const n = +nn(e) - +nn(t);
  return n < 0 ? -1 : n > 0 ? 1 : n;
}
function gg(e) {
  return Ju(e, Date.now());
}
function vg(e, t, n) {
  const [r, o] = qu(
    n == null ? void 0 : n.in,
    e,
    t
  ), i = r.getFullYear() - o.getFullYear(), l = r.getMonth() - o.getMonth();
  return i * 12 + l;
}
function wg(e) {
  return (t) => {
    const r = (e ? Math[e] : Math.trunc)(t);
    return r === 0 ? 0 : r;
  };
}
function xg(e, t) {
  return +nn(e) - +nn(t);
}
function kg(e, t) {
  const n = nn(e);
  return n.setHours(23, 59, 59, 999), n;
}
function Sg(e, t) {
  const n = nn(e), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Cg(e, t) {
  const n = nn(e);
  return +kg(n) == +Sg(n);
}
function _g(e, t, n) {
  const [r, o, i] = qu(
    n == null ? void 0 : n.in,
    e,
    e,
    t
  ), l = ei(o, i), s = Math.abs(
    vg(o, i)
  );
  if (s < 1) return 0;
  o.getMonth() === 1 && o.getDate() > 27 && o.setDate(30), o.setMonth(o.getMonth() - l * s);
  let u = ei(o, i) === -l;
  Cg(r) && s === 1 && ei(r, i) === 1 && (u = !1);
  const a = l * (s - +u);
  return a === 0 ? 0 : a;
}
function Eg(e, t, n) {
  const r = xg(e, t) / 1e3;
  return wg(n == null ? void 0 : n.roundingMethod)(r);
}
const $g = {
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
}, Tg = (e, t, n) => {
  let r;
  const o = $g[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Wl(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Ng = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Pg = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Mg = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, jg = {
  date: Wl({
    formats: Ng,
    defaultWidth: "full"
  }),
  time: Wl({
    formats: Pg,
    defaultWidth: "full"
  }),
  dateTime: Wl({
    formats: Mg,
    defaultWidth: "full"
  })
}, Rg = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, zg = (e, t, n, r) => Rg[e];
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
const Fg = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Lg = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ig = {
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
}, Dg = {
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
}, Og = {
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
}, bg = {
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
}, Ag = (e, t) => {
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
}, Ug = {
  ordinalNumber: Ag,
  era: wr({
    values: Fg,
    defaultWidth: "wide"
  }),
  quarter: wr({
    values: Lg,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: wr({
    values: Ig,
    defaultWidth: "wide"
  }),
  day: wr({
    values: Dg,
    defaultWidth: "wide"
  }),
  dayPeriod: wr({
    values: Og,
    defaultWidth: "wide",
    formattingValues: bg,
    defaultFormattingWidth: "wide"
  })
};
function xr(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const l = i[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(s) ? Vg(s, (p) => p.test(l)) : (
      // [TODO] -- I challenge you to fix the type
      Wg(s, (p) => p.test(l))
    );
    let a;
    a = e.valueCallback ? e.valueCallback(u) : u, a = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(a)
    ) : a;
    const c = t.slice(l.length);
    return { value: a, rest: c };
  };
}
function Wg(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Vg(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Bg(e) {
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
const Hg = /^(\d+)(th|st|nd|rd)?/i, Qg = /\d+/i, Yg = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Xg = {
  any: [/^b/i, /^(a|c)/i]
}, Kg = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Gg = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Zg = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Jg = {
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
}, qg = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, e1 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, t1 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, n1 = {
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
}, r1 = {
  ordinalNumber: Bg({
    matchPattern: Hg,
    parsePattern: Qg,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: xr({
    matchPatterns: Yg,
    defaultMatchWidth: "wide",
    parsePatterns: Xg,
    defaultParseWidth: "any"
  }),
  quarter: xr({
    matchPatterns: Kg,
    defaultMatchWidth: "wide",
    parsePatterns: Gg,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: xr({
    matchPatterns: Zg,
    defaultMatchWidth: "wide",
    parsePatterns: Jg,
    defaultParseWidth: "any"
  }),
  day: xr({
    matchPatterns: qg,
    defaultMatchWidth: "wide",
    parsePatterns: e1,
    defaultParseWidth: "any"
  }),
  dayPeriod: xr({
    matchPatterns: t1,
    defaultMatchWidth: "any",
    parsePatterns: n1,
    defaultParseWidth: "any"
  })
}, o1 = {
  code: "en-US",
  formatDistance: Tg,
  formatLong: jg,
  formatRelative: zg,
  localize: Ug,
  match: r1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function i1(e, t, n) {
  const r = yg(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? o1, i = 2520, l = ei(e, t);
  if (isNaN(l)) throw new RangeError("Invalid time value");
  const s = Object.assign({}, n, {
    addSuffix: n == null ? void 0 : n.addSuffix,
    comparison: l
  }), [u, a] = qu(
    n == null ? void 0 : n.in,
    ...l > 0 ? [t, e] : [e, t]
  ), c = Eg(a, u), p = (jc(a) - jc(u)) / 1e3, m = Math.round((c - p) / 60);
  let y;
  if (m < 2)
    return n != null && n.includeSeconds ? c < 5 ? o.formatDistance("lessThanXSeconds", 5, s) : c < 10 ? o.formatDistance("lessThanXSeconds", 10, s) : c < 20 ? o.formatDistance("lessThanXSeconds", 20, s) : c < 40 ? o.formatDistance("halfAMinute", 0, s) : c < 60 ? o.formatDistance("lessThanXMinutes", 1, s) : o.formatDistance("xMinutes", 1, s) : m === 0 ? o.formatDistance("lessThanXMinutes", 1, s) : o.formatDistance("xMinutes", m, s);
  if (m < 45)
    return o.formatDistance("xMinutes", m, s);
  if (m < 90)
    return o.formatDistance("aboutXHours", 1, s);
  if (m < Pc) {
    const g = Math.round(m / 60);
    return o.formatDistance("aboutXHours", g, s);
  } else {
    if (m < i)
      return o.formatDistance("xDays", 1, s);
    if (m < Lo) {
      const g = Math.round(m / Pc);
      return o.formatDistance("xDays", g, s);
    } else if (m < Lo * 2)
      return y = Math.round(m / Lo), o.formatDistance("aboutXMonths", y, s);
  }
  if (y = _g(a, u), y < 12) {
    const g = Math.round(m / Lo);
    return o.formatDistance("xMonths", g, s);
  } else {
    const g = y % 12, x = Math.trunc(y / 12);
    return g < 3 ? o.formatDistance("aboutXYears", x, s) : g < 9 ? o.formatDistance("overXYears", x, s) : o.formatDistance("almostXYears", x + 1, s);
  }
}
function l1(e, t) {
  return i1(e, gg(e), t);
}
function s1({
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
  const [c, p] = j.useState(!1), m = () => {
    switch (o) {
      case "recent-chats":
        return "Recent chats";
      default:
        return a.name;
    }
  }, y = () => {
    var f;
    return ((f = r.operators) == null ? void 0 : f.length) > 0 ? "Online" : r.lastActive ? `Last seen ${l1(r.lastActive, {
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
              children: /* @__PURE__ */ v.jsx(Xy, { className: "h-5 w-5" })
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
              onClick: () => p(!c),
              className: "p-2 hover:bg-white/10 rounded-full transition-colors",
              children: /* @__PURE__ */ v.jsx(ig, { className: "h-4 w-4" })
            }
          ),
          c && /* @__PURE__ */ v.jsxs("div", { className: "absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg py-2 min-w-48 z-50", children: [
            /* @__PURE__ */ v.jsxs(
              "button",
              {
                onClick: () => {
                  l(), p(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ v.jsx(sg, { className: "h-4 w-4" }),
                  "Start New Chat"
                ]
              }
            ),
            /* @__PURE__ */ v.jsxs(
              "button",
              {
                onClick: () => {
                  s(), p(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ v.jsx(ug, { className: "h-4 w-4" }),
                  "End Chat"
                ]
              }
            ),
            /* @__PURE__ */ v.jsxs(
              "button",
              {
                onClick: () => {
                  u(), p(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ v.jsx(tg, { className: "h-4 w-4" }),
                  "View Recent Chats"
                ]
              }
            ),
            /* @__PURE__ */ v.jsx("hr", {}),
            /* @__PURE__ */ v.jsx(
              "button",
              {
                onClick: () => {
                  t(), p(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: n ? /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                  /* @__PURE__ */ v.jsx(og, { className: "h-4 w-4" }),
                  " Minimize"
                ] }) : /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                  /* @__PURE__ */ v.jsx(eg, { className: "h-4 w-4" }),
                  " Maximize"
                ] })
              }
            ),
            /* @__PURE__ */ v.jsxs(
              "button",
              {
                onClick: () => {
                  e(), p(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ v.jsx(Kp, { className: "h-4 w-4" }),
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
function u1({
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
        return /* @__PURE__ */ v.jsx(Jy, { className: "w-3 h-3 text-gray-500" });
      case "read":
        return /* @__PURE__ */ v.jsx(Zy, { className: "w-3 h-3 text-blue-500" });
      case "failed":
        return /* @__PURE__ */ v.jsx(Yp, { className: "w-3 h-3 text-red-500" });
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
function Gp({ onSubmit: e, config: t }) {
  var a;
  const n = (t.fields || []).reduce((c, p) => (c[p] = "", c), {}), [r, o] = j.useState(n), [i, l] = j.useState(!1), s = (c, p) => {
    o((m) => ({ ...m, [c]: p }));
  }, u = async (c) => {
    c.preventDefault(), l(!0);
    try {
      e(r);
    } finally {
      l(!1);
    }
  };
  return /* @__PURE__ */ v.jsx("div", { className: "py-2", children: /* @__PURE__ */ v.jsx("form", { onSubmit: u, className: "flex items-center gap-3", children: /* @__PURE__ */ v.jsxs("div", { className: "flex-1 flex items-center gap-2", children: [
    (a = t.fields) == null ? void 0 : a.map((c) => /* @__PURE__ */ v.jsx(
      "input",
      {
        type: c === "email" ? "email" : "text",
        value: r[c],
        onChange: (p) => s(c, p.target.value),
        placeholder: `Your ${c}`,
        className: "flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-opacity-50",
        style: { "--tw-ring-color": t.color },
        disabled: i,
        required: !0
      },
      c
    )),
    /* @__PURE__ */ v.jsx(
      "button",
      {
        type: "submit",
        className: "px-3 py-2 bg-white text-black rounded-lg border border-gray-300 hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-1",
        children: /* @__PURE__ */ v.jsx(Ky, { className: "h-4 w-4" })
      }
    )
  ] }) }) });
}
function a1({
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
    var u, a, c;
    if ((u = s.file) != null && u.url) {
      const p = (a = s.file.type) == null ? void 0 : a.startsWith("image/"), m = (c = s.file.type) == null ? void 0 : c.startsWith("audio/");
      return p ? /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsx(
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
        /* @__PURE__ */ v.jsx(Gp, { onSubmit: t, config: n })
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
            u1,
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
      /* @__PURE__ */ v.jsx(Ul, { className: "size-2 animate-bounce [animation-delay:-0.2s] stroke-none fill-current" }),
      /* @__PURE__ */ v.jsx(Ul, { className: "size-2 animate-bounce [animation-delay:-0.1s] stroke-none fill-current" }),
      /* @__PURE__ */ v.jsx(Ul, { className: "size-2 animate-bounce stroke-none fill-current" })
    ] }),
    /* @__PURE__ */ v.jsx("div", { ref: i })
  ] });
}
const c1 = [
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
function d1({ onEmojiSelect: e, onClose: t }) {
  return /* @__PURE__ */ v.jsx("div", { className: "absolute bottom-full left-0 mb-2 bg-white border rounded-lg shadow-lg p-3 w-64 max-h-48 overflow-y-auto z-50", children: /* @__PURE__ */ v.jsx("div", { className: "grid grid-cols-8 gap-1", children: c1.map((n, r) => /* @__PURE__ */ v.jsx(
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
function f1({ onAudioRecorded: e, config: t }) {
  const [n, r] = j.useState(!1), [o, i] = j.useState(!1), [l, s] = j.useState(0), [u, a] = j.useState(null), [c, p] = j.useState(!1), [m, y] = j.useState(null), g = j.useRef(null), x = j.useRef([]), k = j.useRef(null), f = j.useRef(null), d = j.useRef(null);
  j.useEffect(() => () => {
    k.current && clearInterval(k.current), d.current && d.current.getTracks().forEach((H) => H.stop());
  }, []);
  const h = async () => {
    try {
      const H = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      return d.current = H, y(!0), !0;
    } catch (H) {
      return console.error("Microphone permission denied:", H), y(!1), !1;
    }
  }, w = async () => {
    if (!(!await h() || !d.current))
      try {
        x.current = [];
        const we = new MediaRecorder(d.current, {
          mimeType: "audio/webm;codecs=opus"
        });
        g.current = we, we.ondataavailable = (Oe) => {
          Oe.data.size > 0 && x.current.push(Oe.data);
        }, we.onstop = () => {
          const Oe = new Blob(x.current, {
            type: "audio/webm;codecs=opus"
          });
          a(Oe), d.current && (d.current.getTracks().forEach((ar) => ar.stop()), d.current = null);
        }, we.start(100), r(!0), s(0), k.current = setInterval(() => {
          s((Oe) => Oe + 1);
        }, 1e3);
      } catch (we) {
        console.error("Error starting recording:", we);
      }
  }, S = () => {
    g.current && g.current.state === "recording" && (g.current.pause(), i(!0), k.current && clearInterval(k.current));
  }, _ = () => {
    g.current && g.current.state === "paused" && (g.current.resume(), i(!1), k.current = setInterval(() => {
      s((H) => H + 1);
    }, 1e3));
  }, $ = () => {
    g.current && g.current.state !== "inactive" && (g.current.stop(), r(!1), i(!1), k.current && clearInterval(k.current));
  }, P = () => {
    if (u && !c) {
      const H = URL.createObjectURL(u);
      f.current = new Audio(H), f.current.onended = () => {
        p(!1), URL.revokeObjectURL(H);
      }, f.current.play(), p(!0);
    } else f.current && c && (f.current.pause(), p(!1));
  }, b = () => {
    if (u) {
      const H = new File([u], "recording.wav", {
        type: "audio/wav"
      });
      e(H), a(null), s(0), p(!1);
    }
  }, F = () => {
    n && $(), a(null), s(0), p(!1), d.current && (d.current.getTracks().forEach((H) => H.stop()), d.current = null);
  }, Z = (H) => {
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
      children: /* @__PURE__ */ v.jsx(ng, { className: "h-5 w-5" })
    }
  ) : n || u ? /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2", children: [
    n && /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ v.jsx("div", { className: "w-2 h-2 bg-red-500 rounded-full animate-pulse" }),
      /* @__PURE__ */ v.jsx("span", { className: "text-xs text-gray-600 min-w-[32px]", children: Z(l) })
    ] }),
    u && /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ v.jsx(
        "button",
        {
          onClick: P,
          className: "p-1 text-gray-600 hover:text-gray-800 transition-colors",
          title: c ? "Pause" : "Play",
          children: c ? /* @__PURE__ */ v.jsx(Tc, { className: "h-4 w-4" }) : /* @__PURE__ */ v.jsx(Nc, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ v.jsx("span", { className: "text-xs text-gray-600 min-w-[32px]", children: Z(l) })
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-1", children: [
      n && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: o ? _ : S,
            className: "p-1 text-gray-600 hover:text-gray-800 transition-colors",
            title: o ? "Resume" : "Pause",
            children: o ? /* @__PURE__ */ v.jsx(Nc, { className: "h-4 w-4" }) : /* @__PURE__ */ v.jsx(Tc, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            onClick: $,
            className: "p-1 text-red-600 hover:text-red-800 transition-colors",
            title: "Stop recording",
            children: /* @__PURE__ */ v.jsx(dg, { className: "h-4 w-4" })
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
            onClick: F,
            className: "p-1 text-gray-600 hover:text-red-600 transition-colors",
            title: "Delete recording",
            children: /* @__PURE__ */ v.jsx(fg, { className: "h-4 w-4" })
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
      children: /* @__PURE__ */ v.jsx(rg, { className: "h-5 w-5" })
    }
  );
}
function p1({
  ticketdeskId: e,
  selectedSession: t,
  config: n,
  onSendMessage: r,
  onError: o
}) {
  const [, i] = e.split("_"), [l, s] = j.useState(""), [u, a] = j.useState(!1), c = j.useRef(null), [p, m] = j.useState(!1), y = typeof window < "u" ? window.location.hostname : "", g = (w) => {
    if (w.preventDefault(), l.trim()) {
      const S = {
        from: "user",
        content: l.trim(),
        type: "text",
        timestamp: Date.now(),
        status: "sent"
      };
      r(S), s("");
    }
  }, x = (w) => {
    s((S) => S + w);
  }, k = async (w) => {
    const S = new FormData();
    S.append("file", w);
    const _ = await fetch(
      `https://api.ticketdesk.ai/v1/public/upload?session_id=${t == null ? void 0 : t.session_id}&site_id=${i}`,
      {
        method: "POST",
        body: S
      }
    ), $ = await _.json();
    if (!_.ok)
      throw new Error($.message);
    return $;
  }, f = async (w) => {
    m(!0);
    try {
      const S = await k(w);
      if (S && typeof S != "object") return;
      const _ = {
        from: "user",
        content: w.name,
        type: w.type === "audio/wav" ? "audio" : w.type.startsWith("image/") ? "image" : "file",
        timestamp: Date.now(),
        status: "sent",
        file: S
      };
      r(_);
    } catch (S) {
      o(`File upload failed: ${S}`);
    } finally {
      m(!1), c.current && (c.current.value = "");
    }
  }, d = (w) => {
    var _;
    const S = (_ = w.target.files) == null ? void 0 : _[0];
    S && f(S);
  }, h = async (w) => {
    const _ = Array.from(w.clipboardData.items)[0];
    if (_.type.indexOf("image") !== -1 || _.kind === "file") {
      w.preventDefault();
      const $ = _.getAsFile();
      $ && f($);
    }
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "border-t bg-white", children: [
    /* @__PURE__ */ v.jsx("form", { onSubmit: g, className: "p-4 pb-2 relative", children: /* @__PURE__ */ v.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ v.jsx(
        "input",
        {
          type: "text",
          value: l,
          onChange: (w) => s(w.target.value),
          placeholder: "Send a message...",
          className: "flex-1 p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-opacity-50",
          style: { "--tw-ring-color": n.color },
          onPaste: h,
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
          children: /* @__PURE__ */ v.jsx(ag, { className: "h-5 w-5" })
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
              var w;
              return (w = c.current) == null ? void 0 : w.click();
            },
            className: "p-2 text-gray-500 hover:text-gray-700 transition-colors",
            title: "Upload file",
            children: /* @__PURE__ */ v.jsx(lg, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ v.jsx(f1, { onAudioRecorded: f, config: n }),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            type: "button",
            onClick: () => a(!u),
            className: "p-2 text-gray-500 hover:text-gray-700 transition-colors rounded-full",
            children: /* @__PURE__ */ v.jsx(cg, { className: "h-4 w-4" })
          }
        ),
        u && /* @__PURE__ */ v.jsx(
          d1,
          {
            onEmojiSelect: x,
            onClose: () => a(!1)
          }
        ),
        p && /* @__PURE__ */ v.jsx("span", { className: "text-sm text-gray-700", children: "Uploading..." })
      ] }),
      /* @__PURE__ */ v.jsx("div", { className: "flex-1 flex justify-end", children: /* @__PURE__ */ v.jsxs(
        "a",
        {
          href: `https://ticketdesk.ai/?utm_source=chat-widget&utm_medium=${y}&utm_campaign=powered-by`,
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
          ref: c,
          onChange: d,
          className: "hidden",
          accept: "image/*,audio/*,.pdf,.doc,.docx,.txt,.xls,.xlsx,.csv,.tsv,.xlsm"
        }
      )
    ] })
  ] });
}
function h1({
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
    /* @__PURE__ */ v.jsx(Xp, { className: "h-12 w-12 mb-4 opacity-50" }),
    /* @__PURE__ */ v.jsx("p", { children: "No recent chats found" })
  ] }) : /* @__PURE__ */ v.jsx("div", { className: "divide-y", children: e.map((o) => /* @__PURE__ */ v.jsxs(
    "button",
    {
      onClick: () => t(o.session_id),
      className: "w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors text-left",
      children: [
        /* @__PURE__ */ v.jsx("div", { className: "flex-shrink-0", children: o.last_message_from === "user" ? /* @__PURE__ */ v.jsx(pg, { className: "h-8 w-8 text-gray-400" }) : /* @__PURE__ */ v.jsx(Gy, { className: "h-8 w-8 text-indigo-500" }) }),
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
function m1({ onFormSubmit: e, config: t }) {
  const [n, r] = j.useState(!1);
  return /* @__PURE__ */ v.jsx("div", { className: "px-6 py-3 bg-yellow-50 border-t border-yellow-200", children: n ? /* @__PURE__ */ v.jsx(
    Gp,
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
        /* @__PURE__ */ v.jsx(qy, { className: "h-4 w-4 text-yellow-600" }),
        /* @__PURE__ */ v.jsxs("span", { className: "text-sm flex-1", children: [
          /* @__PURE__ */ v.jsx("span", { className: "text-blue-600", children: "Click here" }),
          " to set your email to get notifications"
        ] })
      ]
    }
  ) });
}
function y1({
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
  onEndChat: c,
  onLoadSession: p,
  onGetRecentChats: m,
  onUpdateProfile: y,
  errorMessage: g,
  setErrorMessage: x,
  onClose: k,
  onToggleMaximize: f,
  onSendMessage: d
}) {
  const [h, w] = j.useState(
    "chat"
  );
  if (!t) return null;
  const S = n ? "fixed inset-4 w-auto h-auto max-w-none max-h-none min-h-0" : "fixed bottom-24 right-6 w-[400px] max-w-[calc(100vw-3rem)] h-[75vh] max-h-[800px] min-h-[400px]", _ = () => {
    w("recent-chats"), m();
  }, $ = () => {
    w("chat");
  }, P = (Z) => {
    p(Z), w("chat");
  }, b = (Z) => {
    y(Z), w("chat");
  }, F = u && !u.email && i.filter((Z) => Z.from === "user").length > 1;
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      className: `${S} bg-white rounded-lg shadow-2xl flex flex-col animate-slide-up z-50`,
      children: [
        /* @__PURE__ */ v.jsx(
          s1,
          {
            onClose: k,
            onToggleMaximize: f,
            isMaximized: n,
            isConnected: r,
            chatState: s,
            currentView: h,
            onBackToChat: $,
            onStartNewChat: a,
            onEndChat: c,
            onViewRecentChats: _,
            config: o
          }
        ),
        h === "chat" && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
          /* @__PURE__ */ v.jsx(
            a1,
            {
              messages: i,
              onFormSubmit: b,
              config: o,
              chatState: s,
              onSendMessage: d
            }
          ),
          F && /* @__PURE__ */ v.jsx(m1, { config: o, onFormSubmit: b }),
          g && /* @__PURE__ */ v.jsxs("div", { className: "px-6 py-3 bg-red-100 text-sm border-t border-red-200 text-red-800 hover:text-red-900 flex items-center gap-2 text-left", children: [
            /* @__PURE__ */ v.jsx(Yp, { className: "h-4 w-4 text-red-600" }),
            g
          ] }),
          /* @__PURE__ */ v.jsx(
            p1,
            {
              ticketdeskId: e,
              config: o,
              selectedSession: u,
              onSendMessage: d,
              onError: x
            }
          )
        ] }),
        h === "recent-chats" && /* @__PURE__ */ v.jsx(
          h1,
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
const Rc = (e, t) => {
  try {
    localStorage.setItem(e, t);
  } catch (n) {
    console.warn("Failed to save to localStorage:", n);
  }
}, Qs = (e) => {
  try {
    return localStorage.getItem(e);
  } catch (t) {
    return console.warn("Failed to read from localStorage:", t), null;
  }
}, Io = () => "m_" + crypto.randomUUID(), zc = (e) => {
  let t;
  const n = /* @__PURE__ */ new Set(), r = (a, c) => {
    const p = typeof a == "function" ? a(t) : a;
    if (!Object.is(p, t)) {
      const m = t;
      t = c ?? (typeof p != "object" || p === null) ? p : Object.assign({}, t, p), n.forEach((y) => y(t, m));
    }
  }, o = () => t, s = { setState: r, getState: o, getInitialState: () => u, subscribe: (a) => (n.add(a), () => n.delete(a)) }, u = t = e(r, o, s);
  return s;
}, g1 = (e) => e ? zc(e) : zc, v1 = (e) => e;
function w1(e, t = v1) {
  const n = Ye.useSyncExternalStore(
    e.subscribe,
    Ye.useCallback(() => t(e.getState()), [e, t]),
    Ye.useCallback(() => t(e.getInitialState()), [e, t])
  );
  return Ye.useDebugValue(n), n;
}
const Fc = (e) => {
  const t = g1(e), n = (r) => w1(t, r);
  return Object.assign(n, t), n;
}, x1 = (e) => e ? Fc(e) : Fc;
(!globalThis.EventTarget || !globalThis.Event) && console.error(`
  PartySocket requires a global 'EventTarget' class to be available!
  You can polyfill this global by adding this to your code before any partysocket imports: 
  
  \`\`\`
  import 'partysocket/event-target-polyfill';
  \`\`\`
  Please file an issue at https://github.com/partykit/partykit if you're still having trouble.
`);
var Zp = class extends Event {
  // biome-ignore lint/suspicious/noExplicitAny: vibes
  constructor(t, n) {
    super("error", n);
    U(this, "message");
    U(this, "error");
    this.message = t.message, this.error = t;
  }
}, Jp = class extends Event {
  // biome-ignore lint/style/useDefaultParameterLast: legacy
  // biome-ignore lint/suspicious/noExplicitAny: legacy
  constructor(t = 1e3, n = "", r) {
    super("close", r);
    U(this, "code");
    U(this, "reason");
    U(this, "wasClean", !0);
    this.code = t, this.reason = n;
  }
}, Vl = {
  Event,
  ErrorEvent: Zp,
  CloseEvent: Jp
};
function k1(e, t) {
  if (!e)
    throw new Error(t);
}
function S1(e) {
  return new e.constructor(e.type, e);
}
function C1(e) {
  return "data" in e ? new MessageEvent(e.type, e) : "code" in e || "reason" in e ? new Jp(
    // @ts-expect-error we need to fix event/listener types
    e.code || 1999,
    // @ts-expect-error we need to fix event/listener types
    e.reason || "unknown reason",
    e
  ) : "error" in e ? new Zp(e.error, e) : new Event(e.type, e);
}
var Lc, _1 = typeof process < "u" && typeof ((Lc = process.versions) == null ? void 0 : Lc.node) < "u" && typeof document > "u", Do = _1 ? C1 : S1, cn = {
  maxReconnectionDelay: 1e4,
  minReconnectionDelay: 1e3 + Math.random() * 4e3,
  minUptime: 5e3,
  reconnectionDelayGrowFactor: 1.3,
  connectionTimeout: 4e3,
  maxRetries: Number.POSITIVE_INFINITY,
  maxEnqueuedMessages: Number.POSITIVE_INFINITY,
  startClosed: !1,
  debug: !1
}, Ic = !1, E1 = class pn extends EventTarget {
  constructor(n, r, o = {}) {
    super();
    U(this, "_ws");
    U(this, "_retryCount", -1);
    U(this, "_uptimeTimeout");
    U(this, "_connectTimeout");
    U(this, "_shouldReconnect", !0);
    U(this, "_connectLock", !1);
    U(this, "_binaryType", "blob");
    U(this, "_closeCalled", !1);
    U(this, "_messageQueue", []);
    U(this, "_debugLogger", console.log.bind(console));
    U(this, "_url");
    U(this, "_protocols");
    U(this, "_options");
    /**
     * An event listener to be called when the WebSocket connection's readyState changes to CLOSED
     */
    U(this, "onclose", null);
    /**
     * An event listener to be called when an error occurs
     */
    U(this, "onerror", null);
    /**
     * An event listener to be called when a message is received from the server
     */
    U(this, "onmessage", null);
    /**
     * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
     * this indicates that the connection is ready to send and receive data
     */
    U(this, "onopen", null);
    U(this, "_handleOpen", (n) => {
      this._debug("open event");
      const { minUptime: r = cn.minUptime } = this._options;
      clearTimeout(this._connectTimeout), this._uptimeTimeout = setTimeout(() => this._acceptOpen(), r), k1(this._ws, "WebSocket is not defined"), this._ws.binaryType = this._binaryType, this._messageQueue.forEach((o) => {
        var i;
        return (i = this._ws) == null ? void 0 : i.send(o);
      }), this._messageQueue = [], this.onopen && this.onopen(n), this.dispatchEvent(Do(n));
    });
    U(this, "_handleMessage", (n) => {
      this._debug("message event"), this.onmessage && this.onmessage(n), this.dispatchEvent(Do(n));
    });
    U(this, "_handleError", (n) => {
      this._debug("error event", n.message), this._disconnect(void 0, n.message === "TIMEOUT" ? "timeout" : void 0), this.onerror && this.onerror(n), this._debug("exec error listeners"), this.dispatchEvent(Do(n)), this._connect();
    });
    U(this, "_handleClose", (n) => {
      this._debug("close event"), this._clearTimeouts(), this._shouldReconnect && this._connect(), this.onclose && this.onclose(n), this.dispatchEvent(Do(n));
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
      !this._options.WebSocket && typeof WebSocket > "u" && !Ic && (console.error(`‼️ No WebSocket implementation available. You should define options.WebSocket. 

For example, if you're using node.js, run \`npm install ws\`, and then in your code:

import PartySocket from 'partysocket';
import WS from 'ws';

const partysocket = new PartySocket({
  host: "127.0.0.1:1999",
  room: "test-room",
  WebSocket: WS
});

`), Ic = !0);
      const l = this._options.WebSocket || WebSocket;
      this._debug("connect", { url: o, protocols: i }), this._ws = i ? new l(o, i) : new l(o), this._ws.binaryType = this._binaryType, this._connectLock = !1, this._addListeners(), this._connectTimeout = setTimeout(
        () => this._handleTimeout(),
        r
      );
    }).catch((o) => {
      this._connectLock = !1, this._handleError(new Vl.ErrorEvent(Error(o.message), this));
    });
  }
  _handleTimeout() {
    this._debug("timeout event"), this._handleError(new Vl.ErrorEvent(Error("TIMEOUT"), this));
  }
  _disconnect(n = 1e3, r) {
    if (this._clearTimeouts(), !!this._ws) {
      this._removeListeners();
      try {
        (this._ws.readyState === this.OPEN || this._ws.readyState === this.CONNECTING) && this._ws.close(n, r), this._handleClose(new Vl.CloseEvent(n, r, this));
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
function qp(e, t, n = {}) {
  const {
    host: r,
    path: o,
    protocol: i,
    room: l,
    party: s,
    basePath: u,
    prefix: a,
    query: c
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
  )), x = `${g}://${p}/${u || `${a || "parties"}/${m}/${l}`}${y}`, k = (d = {}) => `${x}?${new URLSearchParams([
    ...Object.entries(n),
    ...Object.entries(d).filter($1)
  ])}`, f = typeof c == "function" ? async () => k(await c()) : k(c);
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
var N1 = class extends E1 {
  constructor(t) {
    var n, r;
    const o = Dc(t);
    super(o.urlProvider, o.protocols, o.socketOptions);
    U(this, "_pk");
    U(this, "_pkurl");
    U(this, "name");
    U(this, "room");
    U(this, "host");
    U(this, "path");
    this.partySocketOptions = t, this.setWSProperties(o), t.disableNameValidation || ((n = t.party) != null && n.includes("/") && console.warn(
      `PartySocket: party name "${t.party}" contains forward slash which may cause routing issues. Consider using a name without forward slashes or set disableNameValidation: true to bypass this warning.`
    ), (r = t.room) != null && r.includes("/") && console.warn(
      `PartySocket: room name "${t.room}" contains forward slash which may cause routing issues. Consider using a name without forward slashes or set disableNameValidation: true to bypass this warning.`
    ));
  }
  updateProperties(t) {
    const n = Dc({
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
    const r = qp(t, "http"), o = typeof r.urlProvider == "string" ? r.urlProvider : await r.urlProvider();
    return (t.fetch ?? fetch)(o, n);
  }
};
function Dc(e) {
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
  } = e, c = t || T1(), p = qp(e, "ws", { _pk: c });
  return {
    _pk: c,
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
  const [t, n] = e.split("_"), o = P1((V) => V.getSocket)(t, n), [i, l] = j.useState({
    name: "Chat with us",
    color: "#3b82f6",
    shape: "round",
    welcome_message: "Hi there!"
  }), [s, u] = j.useState(!0), [a, c] = j.useState([]), [p, m] = j.useState(null), [y, g] = j.useState(null), [x, k] = j.useState([]), [f, d] = j.useState(
    null
  ), [h, w] = j.useState(null), [S, _] = j.useState({
    lastActive: void 0,
    isTyping: !1,
    operators: []
  }), [$, P] = j.useState(null), b = j.useCallback(
    (V) => {
      const { type: Q, data: E, error: z } = V;
      if (z) {
        w(z);
        return;
      }
      switch (Q) {
        case "session:connected":
          l((R) => ({ ...R, ...E.config })), u(!1);
          break;
        case "session:joined": {
          E.session_id && (m(E.session_id), Rc(`ti_${n}_session_id`, E.session_id)), E.client_id && (g(E.client_id), Rc(`ti_${n}_client_id`, E.client_id));
          const R = {
            id: Io(),
            from: "agent",
            content: i.welcome_message,
            type: "text",
            timestamp: Date.now()
          };
          c([R, ...E.messages || []]), d(E.session), E.last_active && _((A) => ({
            ...A,
            lastActive: E.last_active
          })), E.operators && _((A) => ({
            ...A,
            operators: E.operators
          }));
          break;
        }
        case "session:list":
          k(E.sessions);
          break;
        case "message:typing": {
          _((A) => ({ ...A, isTyping: !0 })), $ && clearTimeout($);
          const R = setTimeout(() => {
            _((A) => ({ ...A, isTyping: !1 })), P(null);
          }, 1e4);
          P(R);
          break;
        }
        case "message:recieved": {
          c((R) => [...R, E.message]), _((R) => ({ ...R, isTyping: !1 })), $ && (clearTimeout($), P(null)), document.hidden || document.hasFocus();
          break;
        }
        case "operator:list":
          E.operators && _((R) => ({
            ...R,
            operators: E.operators
          }));
          break;
        case "message:read":
          c(
            (R) => R.map(
              (A) => A.id === E.message_id ? { ...A, status: E.status } : A
            )
          );
          break;
        default:
          console.log("Unhandled message type:", Q, E);
      }
    },
    [i.welcome_message, n, $]
  );
  j.useEffect(() => {
    const V = (Q) => b(JSON.parse(Q.data));
    return o.addEventListener("message", V), () => o.removeEventListener("message", V);
  }, [o, b]), j.useEffect(() => {
    const V = Qs(`ti_${n}_session_id`), Q = Qs(`ti_${n}_client_id`);
    V && m(V), Q && g(Q);
  }, [n]);
  const F = j.useCallback(
    (V) => {
      !p || !y || (V.id = Io(), c((Q) => [...Q, V]), o.send(
        JSON.stringify({
          type: "message:new",
          session_id: p,
          client_id: y,
          site_id: n,
          message: V
        })
      ), setTimeout(() => {
        c((Q) => {
          if (Q.some((R) => R.type === "form")) return Q;
          const z = {
            id: Io(),
            from: "agent",
            content: "What is your email address?",
            type: "form",
            fields: ["email"],
            timestamp: Date.now()
          };
          return [...Q, z];
        });
      }, 1e3));
    },
    [o, p, y, n]
  ), Z = j.useCallback(() => {
    if (!o) return;
    const V = {
      type: "session:new",
      client_id: y,
      site_id: n
    };
    if (o.send(JSON.stringify(V)), i.welcome_message) {
      const Q = {
        id: Io(),
        from: "agent",
        content: i.welcome_message,
        type: "text",
        timestamp: Date.now()
      };
      c([Q]);
    } else
      c([]);
  }, [o, y, n, i]), H = j.useCallback(
    (V) => {
      if (!o) return;
      const Q = {
        type: V ? "session:join" : "session:new",
        session_id: V,
        client_id: y,
        site_id: n
      };
      o.send(JSON.stringify(Q)), V && m(V);
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
        const Q = {
          type: "session:update",
          client_id: y,
          session_id: p,
          site_id: n,
          data: V
        };
        o.send(JSON.stringify(Q));
      }
      d((Q) => Q && { ...Q, ...V });
    },
    [o, y, n, p]
  );
  return {
    messages: a,
    sendMessage: F,
    startNewChat: Z,
    endCurrentChat: we,
    getRecentChats: Oe,
    updateProfile: ar,
    loadSession: H,
    sessions: x,
    selectedSession: f,
    isConnected: o.readyState === WebSocket.OPEN,
    errorMessage: h,
    setErrorMessage: w,
    chatState: S,
    isLoading: s,
    config: i,
    sessionId: p,
    clientId: y
  };
}
var sr = {};
var eh = j;
function L(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var je = Object.prototype.hasOwnProperty, j1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Oc = {}, bc = {};
function th(e) {
  return je.call(bc, e) ? !0 : je.call(Oc, e) ? !1 : j1.test(e) ? bc[e] = !0 : (Oc[e] = !0, !1);
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
var ea = /[\-:]([a-z])/g;
function ta(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ea,
    ta
  );
  ge[t] = new Pe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ea, ta);
  ge[t] = new Pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ea, ta);
  ge[t] = new Pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ge[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new Pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ge[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
var ti = {
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
Object.keys(ti).forEach(function(e) {
  R1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ti[t] = ti[e];
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
var F1 = /([A-Z])/g, L1 = /^ms-/, Ys = Array.isArray;
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
var Ac = /* @__PURE__ */ new Map();
function nh(e, t, n) {
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
        var l = Ac.get(i);
        l !== void 0 || (l = Ee(i.replace(F1, "-$1").toLowerCase().replace(L1, "-ms-")), Ac.set(i, l)), i = l, o = typeof o == "number" ? o === 0 || je.call(ti, r) ? "" + o : o + "px" : Ee(("" + o).trim());
      }
      t ? (t = !1, e.push(' style="', i, ":", o)) : e.push(";", i, ":", o);
    }
  }
  t || e.push('"');
}
function Ae(e, t, n, r) {
  switch (n) {
    case "style":
      nh(e, t, r);
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
    } else if (th(n)) {
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
function ni(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(L(60));
    if (typeof t != "object" || !("__html" in t)) throw Error(L(61));
    t = t.__html, t != null && e.push("" + t);
  }
}
function D1(e) {
  var t = "";
  return eh.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
function Bl(e, t, n, r) {
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
  return e.push(">"), ni(e, o, n), typeof n == "string" ? (e.push(Ee(n)), null) : n;
}
var O1 = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Uc = /* @__PURE__ */ new Map();
function ht(e) {
  var t = Uc.get(e);
  if (t === void 0) {
    if (!O1.test(e)) throw Error(L(65, e));
    t = "<" + e, Uc.set(e, t);
  }
  return t;
}
function b1(e, t, n, r, o) {
  switch (t) {
    case "select":
      e.push(ht("select"));
      var i = null, l = null;
      for (c in n) if (je.call(n, c)) {
        var s = n[c];
        if (s != null) switch (c) {
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
            Ae(e, r, c, s);
        }
      }
      return e.push(">"), ni(e, l, i), i;
    case "option":
      l = o.selectedValue, e.push(ht("option"));
      var u = s = null, a = null, c = null;
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
            c = p;
            break;
          case "value":
            u = p;
          default:
            Ae(e, r, i, p);
        }
      }
      if (l != null) if (n = u !== null ? "" + u : D1(s), Ys(l)) {
        for (r = 0; r < l.length; r++)
          if ("" + l[r] === n) {
            e.push(' selected=""');
            break;
          }
      } else "" + l === n && e.push(' selected=""');
      else a && e.push(' selected=""');
      return e.push(">"), ni(e, c, s), s;
    case "textarea":
      e.push(ht("textarea")), c = l = i = null;
      for (s in n) if (je.call(n, s) && (u = n[s], u != null)) switch (s) {
        case "children":
          c = u;
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
      if (i === null && l !== null && (i = l), e.push(">"), c != null) {
        if (i != null) throw Error(L(92));
        if (Ys(c) && 1 < c.length) throw Error(L(93));
        i = "" + c;
      }
      return typeof i == "string" && i[0] === `
` && e.push(`
`), i !== null && e.push(Ee("" + i)), null;
    case "input":
      e.push(ht("input")), u = c = s = i = null;
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
          c = a;
          break;
        case "value":
          i = a;
          break;
        default:
          Ae(e, r, l, a);
      }
      return c !== null ? Ae(e, r, "checked", c) : u !== null && Ae(e, r, "checked", u), i !== null ? Ae(e, r, "value", i) : s !== null && Ae(e, r, "value", s), e.push("/>"), null;
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
      return Bl(
        e,
        n,
        t,
        r
      );
    case "html":
      return o.insertionMode === 0 && e.push("<!DOCTYPE html>"), Bl(e, n, t, r);
    default:
      if (t.indexOf("-") === -1 && typeof n.is != "string") return Bl(e, n, t, r);
      e.push(ht(t)), l = i = null;
      for (a in n) if (je.call(n, a) && (s = n[a], s != null)) switch (a) {
        case "children":
          i = s;
          break;
        case "dangerouslySetInnerHTML":
          l = s;
          break;
        case "style":
          nh(e, r, s);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          break;
        default:
          th(a) && typeof s != "function" && typeof s != "symbol" && e.push(" ", a, '="', Ee(s), '"');
      }
      return e.push(">"), ni(e, l, i), i;
  }
}
function Wc(e, t, n) {
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
function Hl(e) {
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
function Vc(e, t, n, r) {
  return n.generateStaticMarkup ? (e.push(Ee(t)), !1) : (t === "" ? e = r : (r && e.push("<!-- -->"), e.push(Ee(t)), e = !0), e);
}
var br = Object.assign, B1 = Symbol.for("react.element"), rh = Symbol.for("react.portal"), oh = Symbol.for("react.fragment"), ih = Symbol.for("react.strict_mode"), lh = Symbol.for("react.profiler"), sh = Symbol.for("react.provider"), uh = Symbol.for("react.context"), ah = Symbol.for("react.forward_ref"), ch = Symbol.for("react.suspense"), dh = Symbol.for("react.suspense_list"), fh = Symbol.for("react.memo"), na = Symbol.for("react.lazy"), H1 = Symbol.for("react.scope"), Q1 = Symbol.for("react.debug_trace_mode"), Y1 = Symbol.for("react.legacy_hidden"), X1 = Symbol.for("react.default_value"), Bc = Symbol.iterator;
function Xs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case oh:
      return "Fragment";
    case rh:
      return "Portal";
    case lh:
      return "Profiler";
    case ih:
      return "StrictMode";
    case ch:
      return "Suspense";
    case dh:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case uh:
      return (e.displayName || "Context") + ".Consumer";
    case sh:
      return (e._context.displayName || "Context") + ".Provider";
    case ah:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case fh:
      return t = e.displayName || null, t !== null ? t : Xs(e.type) || "Memo";
    case na:
      t = e._payload, e = e._init;
      try {
        return Xs(e(t));
      } catch {
      }
  }
  return null;
}
var ph = {};
function Hc(e, t) {
  if (e = e.contextTypes, !e) return ph;
  var n = {}, r;
  for (r in e) n[r] = t[r];
  return n;
}
var xn = null;
function sl(e, t) {
  if (e !== t) {
    e.context._currentValue2 = e.parentValue, e = e.parent;
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(L(401));
    } else {
      if (n === null) throw Error(L(401));
      sl(e, n);
    }
    t.context._currentValue2 = t.value;
  }
}
function hh(e) {
  e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && hh(e);
}
function mh(e) {
  var t = e.parent;
  t !== null && mh(t), e.context._currentValue2 = e.value;
}
function yh(e, t) {
  if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(L(402));
  e.depth === t.depth ? sl(e, t) : yh(e, t);
}
function gh(e, t) {
  var n = t.parent;
  if (n === null) throw Error(L(402));
  e.depth === n.depth ? sl(e, n) : gh(e, n), t.context._currentValue2 = t.value;
}
function Li(e) {
  var t = xn;
  t !== e && (t === null ? mh(e) : e === null ? hh(t) : t.depth === e.depth ? sl(t, e) : t.depth > e.depth ? yh(t, e) : gh(t, e), xn = e);
}
var Qc = { isMounted: function() {
  return !1;
}, enqueueSetState: function(e, t) {
  e = e._reactInternals, e.queue !== null && e.queue.push(t);
}, enqueueReplaceState: function(e, t) {
  e = e._reactInternals, e.replace = !0, e.queue = [t];
}, enqueueForceUpdate: function() {
} };
function Yc(e, t, n, r) {
  var o = e.state !== void 0 ? e.state : null;
  e.updater = Qc, e.props = n, e.state = o;
  var i = { queue: [], replace: !1 };
  e._reactInternals = i;
  var l = t.contextType;
  if (e.context = typeof l == "object" && l !== null ? l._currentValue2 : r, l = t.getDerivedStateFromProps, typeof l == "function" && (l = l(n, o), o = l == null ? o : br({}, o, l), e.state = o), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (t = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && Qc.enqueueReplaceState(e, e.state, null), i.queue !== null && 0 < i.queue.length) if (t = i.queue, l = i.replace, i.queue = null, i.replace = !1, l && t.length === 1) e.state = t[0];
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
function Ks(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var o = 32 - ri(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - ri(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    return i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, { id: 1 << 32 - ri(t) + o | n << o | r, overflow: i + e };
  }
  return { id: 1 << i | n << o | r, overflow: e };
}
var ri = Math.clz32 ? Math.clz32 : J1, G1 = Math.log, Z1 = Math.LN2;
function J1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (G1(e) / Z1 | 0) | 0;
}
function q1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ev = typeof Object.is == "function" ? Object.is : q1, Rt = null, ra = null, oi = null, Y = null, $r = !1, Ii = !1, oo = 0, Bt = null, ul = 0;
function hn() {
  if (Rt === null) throw Error(L(321));
  return Rt;
}
function Xc() {
  if (0 < ul) throw Error(L(312));
  return { memoizedState: null, queue: null, next: null };
}
function oa() {
  return Y === null ? oi === null ? ($r = !1, oi = Y = Xc()) : ($r = !0, Y = oi) : Y.next === null ? ($r = !1, Y = Y.next = Xc()) : ($r = !0, Y = Y.next), Y;
}
function ia() {
  ra = Rt = null, Ii = !1, oi = null, ul = 0, Y = Bt = null;
}
function vh(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Kc(e, t, n) {
  if (Rt = hn(), Y = oa(), $r) {
    var r = Y.queue;
    if (t = r.dispatch, Bt !== null && (n = Bt.get(r), n !== void 0)) {
      Bt.delete(r), r = Y.memoizedState;
      do
        r = e(r, n.action), n = n.next;
      while (n !== null);
      return Y.memoizedState = r, [r, t];
    }
    return [Y.memoizedState, t];
  }
  return e = e === vh ? typeof t == "function" ? t() : t : n !== void 0 ? n(t) : t, Y.memoizedState = e, e = Y.queue = { last: null, dispatch: null }, e = e.dispatch = tv.bind(null, Rt, e), [Y.memoizedState, e];
}
function Gc(e, t) {
  if (Rt = hn(), Y = oa(), t = t === void 0 ? null : t, Y !== null) {
    var n = Y.memoizedState;
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
  return e = e(), Y.memoizedState = [e, t], e;
}
function tv(e, t, n) {
  if (25 <= ul) throw Error(L(301));
  if (e === Rt) if (Ii = !0, e = { action: n, next: null }, Bt === null && (Bt = /* @__PURE__ */ new Map()), n = Bt.get(t), n === void 0) Bt.set(t, e);
  else {
    for (t = n; t.next !== null; ) t = t.next;
    t.next = e;
  }
}
function nv() {
  throw Error(L(394));
}
function Oo() {
}
var Zc = { readContext: function(e) {
  return e._currentValue2;
}, useContext: function(e) {
  return hn(), e._currentValue2;
}, useMemo: Gc, useReducer: Kc, useRef: function(e) {
  Rt = hn(), Y = oa();
  var t = Y.memoizedState;
  return t === null ? (e = { current: e }, Y.memoizedState = e) : t;
}, useState: function(e) {
  return Kc(vh, e);
}, useInsertionEffect: Oo, useLayoutEffect: function() {
}, useCallback: function(e, t) {
  return Gc(function() {
    return e;
  }, t);
}, useImperativeHandle: Oo, useEffect: Oo, useDebugValue: Oo, useDeferredValue: function(e) {
  return hn(), e;
}, useTransition: function() {
  return hn(), [
    !1,
    nv
  ];
}, useId: function() {
  var e = ra.treeContext, t = e.overflow;
  e = e.id, e = (e & ~(1 << 32 - ri(e) - 1)).toString(32) + t;
  var n = ii;
  if (n === null) throw Error(L(404));
  return t = oo++, e = ":" + n.idPrefix + "R" + e, 0 < t && (e += "H" + t.toString(32)), e + ":";
}, useMutableSource: function(e, t) {
  return hn(), t(e._source);
}, useSyncExternalStore: function(e, t, n) {
  if (n === void 0) throw Error(L(407));
  return n();
} }, ii = null, Ql = eh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
function rv(e) {
  return console.error(e), null;
}
function Tr() {
}
function ov(e, t, n, r, o, i, l, s, u) {
  var a = [], c = /* @__PURE__ */ new Set();
  return t = { destination: null, responseState: t, progressiveChunkSize: r === void 0 ? 12800 : r, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: c, pingedTasks: a, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: o === void 0 ? rv : o, onAllReady: Tr, onShellReady: l === void 0 ? Tr : l, onShellError: Tr, onFatalError: Tr }, n = Di(t, 0, null, n, !1, !1), n.parentFlushed = !0, e = la(t, e, null, n, c, ph, null, K1), a.push(e), t;
}
function la(e, t, n, r, o, i, l, s) {
  e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
  var u = { node: t, ping: function() {
    var a = e.pingedTasks;
    a.push(u), a.length === 1 && kh(e);
  }, blockedBoundary: n, blockedSegment: r, abortSet: o, legacyContext: i, context: l, treeContext: s };
  return o.add(u), u;
}
function Di(e, t, n, r, o, i) {
  return { status: 0, id: -1, index: t, parentFlushed: !1, chunks: [], children: [], formatContext: r, boundary: n, lastPushedText: o, textEmbedded: i };
}
function io(e, t) {
  if (e = e.onError(t), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
  return e;
}
function Oi(e, t) {
  var n = e.onShellError;
  n(t), n = e.onFatalError, n(t), e.destination !== null ? (e.status = 2, e.destination.destroy(t)) : (e.status = 1, e.fatalError = t);
}
function Jc(e, t, n, r, o) {
  for (Rt = {}, ra = t, oo = 0, e = n(r, o); Ii; ) Ii = !1, oo = 0, ul += 1, Y = null, e = n(r, o);
  return ia(), e;
}
function qc(e, t, n, r) {
  var o = n.render(), i = r.childContextTypes;
  if (i != null) {
    var l = t.legacyContext;
    if (typeof n.getChildContext != "function") r = l;
    else {
      n = n.getChildContext();
      for (var s in n) if (!(s in i)) throw Error(L(108, Xs(r) || "Unknown", s));
      r = br({}, l, n);
    }
    t.legacyContext = r, Ve(e, t, o), t.legacyContext = l;
  } else Ve(e, t, o);
}
function ed(e, t) {
  if (e && e.defaultProps) {
    t = br({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Gs(e, t, n, r, o) {
  if (typeof n == "function") if (n.prototype && n.prototype.isReactComponent) {
    o = Hc(n, t.legacyContext);
    var i = n.contextType;
    i = new n(r, typeof i == "object" && i !== null ? i._currentValue2 : o), Yc(i, n, r, o), qc(e, t, i, n);
  } else {
    i = Hc(n, t.legacyContext), o = Jc(e, t, n, r, i);
    var l = oo !== 0;
    if (typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0) Yc(o, n, r, i), qc(e, t, o, n);
    else if (l) {
      r = t.treeContext, t.treeContext = Ks(r, 1, 0);
      try {
        Ve(e, t, o);
      } finally {
        t.treeContext = r;
      }
    } else Ve(e, t, o);
  }
  else if (typeof n == "string") {
    switch (o = t.blockedSegment, i = b1(o.chunks, n, r, e.responseState, o.formatContext), o.lastPushedText = !1, l = o.formatContext, o.formatContext = I1(l, n, r), Zs(e, t, i), o.formatContext = l, n) {
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
      case ih:
      case lh:
      case oh:
        Ve(e, t, r.children);
        return;
      case dh:
        Ve(e, t, r.children);
        return;
      case H1:
        throw Error(L(343));
      case ch:
        e: {
          n = t.blockedBoundary, o = t.blockedSegment, i = r.fallback, r = r.children, l = /* @__PURE__ */ new Set();
          var s = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: l, errorDigest: null }, u = Di(e, o.chunks.length, s, o.formatContext, !1, !1);
          o.children.push(u), o.lastPushedText = !1;
          var a = Di(e, 0, null, o.formatContext, !1, !1);
          a.parentFlushed = !0, t.blockedBoundary = s, t.blockedSegment = a;
          try {
            if (Zs(
              e,
              t,
              r
            ), e.responseState.generateStaticMarkup || a.lastPushedText && a.textEmbedded && a.chunks.push("<!-- -->"), a.status = 1, bi(s, a), s.pendingTasks === 0) break e;
          } catch (c) {
            a.status = 4, s.forceClientRender = !0, s.errorDigest = io(e, c);
          } finally {
            t.blockedBoundary = n, t.blockedSegment = o;
          }
          t = la(e, i, n, u, l, t.legacyContext, t.context, t.treeContext), e.pingedTasks.push(t);
        }
        return;
    }
    if (typeof n == "object" && n !== null) switch (n.$$typeof) {
      case ah:
        if (r = Jc(e, t, n.render, r, o), oo !== 0) {
          n = t.treeContext, t.treeContext = Ks(n, 1, 0);
          try {
            Ve(e, t, r);
          } finally {
            t.treeContext = n;
          }
        } else Ve(e, t, r);
        return;
      case fh:
        n = n.type, r = ed(n, r), Gs(e, t, n, r, o);
        return;
      case sh:
        if (o = r.children, n = n._context, r = r.value, i = n._currentValue2, n._currentValue2 = r, l = xn, xn = r = { parent: l, depth: l === null ? 0 : l.depth + 1, context: n, parentValue: i, value: r }, t.context = r, Ve(e, t, o), e = xn, e === null) throw Error(L(403));
        r = e.parentValue, e.context._currentValue2 = r === X1 ? e.context._defaultValue : r, e = xn = e.parent, t.context = e;
        return;
      case uh:
        r = r.children, r = r(n._currentValue2), Ve(e, t, r);
        return;
      case na:
        o = n._init, n = o(n._payload), r = ed(n, r), Gs(
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
        Gs(e, t, n.type, n.props, n.ref);
        return;
      case rh:
        throw Error(L(257));
      case na:
        var r = n._init;
        n = r(n._payload), Ve(e, t, n);
        return;
    }
    if (Ys(n)) {
      td(e, t, n);
      return;
    }
    if (n === null || typeof n != "object" ? r = null : (r = Bc && n[Bc] || n["@@iterator"], r = typeof r == "function" ? r : null), r && (r = r.call(n))) {
      if (n = r.next(), !n.done) {
        var o = [];
        do
          o.push(n.value), n = r.next();
        while (!n.done);
        td(e, t, o);
      }
      return;
    }
    throw e = Object.prototype.toString.call(n), Error(L(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  typeof n == "string" ? (r = t.blockedSegment, r.lastPushedText = Vc(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)) : typeof n == "number" && (r = t.blockedSegment, r.lastPushedText = Vc(t.blockedSegment.chunks, "" + n, e.responseState, r.lastPushedText));
}
function td(e, t, n) {
  for (var r = n.length, o = 0; o < r; o++) {
    var i = t.treeContext;
    t.treeContext = Ks(i, r, o);
    try {
      Zs(e, t, n[o]);
    } finally {
      t.treeContext = i;
    }
  }
}
function Zs(e, t, n) {
  var r = t.blockedSegment.formatContext, o = t.legacyContext, i = t.context;
  try {
    return Ve(e, t, n);
  } catch (u) {
    if (ia(), typeof u == "object" && u !== null && typeof u.then == "function") {
      n = u;
      var l = t.blockedSegment, s = Di(e, l.chunks.length, null, l.formatContext, l.lastPushedText, !0);
      l.children.push(s), l.lastPushedText = !1, e = la(e, t.node, t.blockedBoundary, s, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, n.then(e, e), t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = i, Li(i);
    } else throw t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = i, Li(i), u;
  }
}
function iv(e) {
  var t = e.blockedBoundary;
  e = e.blockedSegment, e.status = 3, xh(this, t, e);
}
function wh(e, t, n) {
  var r = e.blockedBoundary;
  e.blockedSegment.status = 3, r === null ? (t.allPendingTasks--, t.status !== 2 && (t.status = 2, t.destination !== null && t.destination.push(null))) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, e = n === void 0 ? Error(L(432)) : n, r.errorDigest = t.onError(e), r.parentFlushed && t.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach(function(o) {
    return wh(o, t, n);
  }), r.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0 && (r = t.onAllReady, r()));
}
function bi(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    n.id = t.id, n.parentFlushed = !0, n.status === 1 && bi(e, n);
  } else e.completedSegments.push(t);
}
function xh(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(L(389));
      e.completedRootSegment = n;
    }
    e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Tr, t = e.onShellReady, t());
  } else t.pendingTasks--, t.forceClientRender || (t.pendingTasks === 0 ? (n.parentFlushed && n.status === 1 && bi(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(iv, e), t.fallbackAbortableTasks.clear()) : n.parentFlushed && n.status === 1 && (bi(t, n), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
}
function kh(e) {
  if (e.status !== 2) {
    var t = xn, n = Ql.current;
    Ql.current = Zc;
    var r = ii;
    ii = e.responseState;
    try {
      var o = e.pingedTasks, i;
      for (i = 0; i < o.length; i++) {
        var l = o[i], s = e, u = l.blockedSegment;
        if (u.status === 0) {
          Li(l.context);
          try {
            Ve(s, l, l.node), s.responseState.generateStaticMarkup || u.lastPushedText && u.textEmbedded && u.chunks.push("<!-- -->"), l.abortSet.delete(l), u.status = 1, xh(s, l.blockedBoundary, u);
          } catch (g) {
            if (ia(), typeof g == "object" && g !== null && typeof g.then == "function") {
              var a = l.ping;
              g.then(a, a);
            } else {
              l.abortSet.delete(l), u.status = 4;
              var c = l.blockedBoundary, p = g, m = io(s, p);
              if (c === null ? Oi(s, p) : (c.pendingTasks--, c.forceClientRender || (c.forceClientRender = !0, c.errorDigest = m, c.parentFlushed && s.clientRenderedBoundaries.push(c))), s.allPendingTasks--, s.allPendingTasks === 0) {
                var y = s.onAllReady;
                y();
              }
            }
          } finally {
          }
        }
      }
      o.splice(0, i), e.destination !== null && sa(e, e.destination);
    } catch (g) {
      io(e, g), Oi(e, g);
    } finally {
      ii = r, Ql.current = n, n === Zc && Li(t);
    }
  }
}
function bo(e, t, n) {
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
        o = al(e, t, o);
      }
      for (; i < r.length - 1; i++) t.push(r[i]);
      return i < r.length && (o = t.push(r[i])), o;
    default:
      throw Error(L(390));
  }
}
function al(e, t, n) {
  var r = n.boundary;
  if (r === null) return bo(e, t, n);
  if (r.parentFlushed = !0, r.forceClientRender) return e.responseState.generateStaticMarkup || (r = r.errorDigest, t.push("<!--$!-->"), t.push("<template"), r && (t.push(' data-dgst="'), r = Ee(r), t.push(r), t.push('"')), t.push("></template>")), bo(e, t, n), e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
  if (0 < r.pendingTasks) {
    r.rootSegmentID = e.nextSegmentId++, 0 < r.completedSegments.length && e.partialBoundaries.push(r);
    var o = e.responseState, i = o.nextSuspenseID++;
    return o = o.boundaryPrefix + i.toString(16), r = r.id = o, Wc(t, e.responseState, r), bo(e, t, n), t.push("<!--/$-->");
  }
  if (r.byteSize > e.progressiveChunkSize) return r.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(r), Wc(t, e.responseState, r.id), bo(e, t, n), t.push("<!--/$-->");
  if (e.responseState.generateStaticMarkup || t.push("<!--$-->"), n = r.completedSegments, n.length !== 1) throw Error(L(391));
  return al(e, t, n[0]), e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
}
function nd(e, t, n) {
  return A1(t, e.responseState, n.formatContext, n.id), al(e, t, n), U1(t, n.formatContext);
}
function rd(e, t, n) {
  for (var r = n.completedSegments, o = 0; o < r.length; o++) Sh(e, t, n, r[o]);
  if (r.length = 0, e = e.responseState, r = n.id, n = n.rootSegmentID, t.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? t.push('$RC("') : (e.sentCompleteBoundaryFunction = !0, t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), r === null) throw Error(L(395));
  return n = n.toString(16), t.push(r), t.push('","'), t.push(e.segmentPrefix), t.push(n), t.push('")<\/script>');
}
function Sh(e, t, n, r) {
  if (r.status === 2) return !0;
  var o = r.id;
  if (o === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(L(392));
    return nd(e, t, r);
  }
  return nd(e, t, r), e = e.responseState, t.push(e.startInlineScript), e.sentCompleteSegmentFunction ? t.push('$RS("') : (e.sentCompleteSegmentFunction = !0, t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), t.push(e.segmentPrefix), o = o.toString(16), t.push(o), t.push('","'), t.push(e.placeholderPrefix), t.push(o), t.push('")<\/script>');
}
function sa(e, t) {
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      al(e, t, n), e.completedRootSegment = null;
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) t.push(r[n]);
      n < r.length && t.push(r[n]);
    }
    var o = e.clientRenderedBoundaries, i;
    for (i = 0; i < o.length; i++) {
      var l = o[i];
      r = t;
      var s = e.responseState, u = l.id, a = l.errorDigest, c = l.errorMessage, p = l.errorComponentStack;
      if (r.push(s.startInlineScript), s.sentClientRenderFunction ? r.push('$RX("') : (s.sentClientRenderFunction = !0, r.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), u === null) throw Error(L(395));
      if (r.push(u), r.push('"'), a || c || p) {
        r.push(",");
        var m = Hl(a || "");
        r.push(m);
      }
      if (c || p) {
        r.push(",");
        var y = Hl(c || "");
        r.push(y);
      }
      if (p) {
        r.push(",");
        var g = Hl(p);
        r.push(g);
      }
      if (!r.push(")<\/script>")) {
        e.destination = null, i++, o.splice(0, i);
        return;
      }
    }
    o.splice(0, i);
    var x = e.completedBoundaries;
    for (i = 0; i < x.length; i++) if (!rd(e, t, x[i])) {
      e.destination = null, i++, x.splice(0, i);
      return;
    }
    x.splice(0, i);
    var k = e.partialBoundaries;
    for (i = 0; i < k.length; i++) {
      var f = k[i];
      e: {
        o = e, l = t;
        var d = f.completedSegments;
        for (s = 0; s < d.length; s++) if (!Sh(o, l, f, d[s])) {
          s++, d.splice(0, s);
          var h = !1;
          break e;
        }
        d.splice(0, s), h = !0;
      }
      if (!h) {
        e.destination = null, i++, k.splice(0, i);
        return;
      }
    }
    k.splice(0, i);
    var w = e.completedBoundaries;
    for (i = 0; i < w.length; i++) if (!rd(e, t, w[i])) {
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
      return wh(r, e, t);
    }), n.clear(), e.destination !== null && sa(e, e.destination);
  } catch (r) {
    io(e, r), Oi(e, r);
  }
}
function sv() {
}
function Ch(e, t, n, r) {
  var o = !1, i = null, l = "", s = { push: function(a) {
    return a !== null && (l += a), !0;
  }, destroy: function(a) {
    o = !0, i = a;
  } }, u = !1;
  if (e = ov(e, V1(n, t ? t.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, sv, void 0, function() {
    u = !0;
  }), kh(e), lv(e, r), e.status === 1) e.status = 2, s.destroy(e.fatalError);
  else if (e.status !== 2 && e.destination === null) {
    e.destination = s;
    try {
      sa(e, s);
    } catch (a) {
      io(e, a), Oi(e, a);
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
  return Ch(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
};
sr.renderToStaticNodeStream = function() {
  throw Error(L(208));
};
sr.renderToString = function(e, t) {
  return Ch(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
};
sr.version = "18.3.1";
var ua = {};
var _h = j;
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
function q(e, t) {
  return M(e, t), !0;
}
function od(e) {
  Be && 0 < He && (e.enqueue(new Uint8Array(Be.buffer, 0, He)), Be = null, He = 0);
}
var Eh = new TextEncoder();
function D(e) {
  return Eh.encode(e);
}
function T(e) {
  return Eh.encode(e);
}
function $h(e, t) {
  typeof e.error == "function" ? e.error(t) : e.close();
}
var Re = Object.prototype.hasOwnProperty, uv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, id = {}, ld = {};
function Th(e) {
  return Re.call(ld, e) ? !0 : Re.call(id, e) ? !1 : uv.test(e) ? ld[e] = !0 : (id[e] = !0, !1);
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
var aa = /[\-:]([a-z])/g;
function ca(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    aa,
    ca
  );
  ve[t] = new Me(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(aa, ca);
  ve[t] = new Me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(aa, ca);
  ve[t] = new Me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ve[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ve.xlinkHref = new Me("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ve[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
var li = {
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
Object.keys(li).forEach(function(e) {
  av.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), li[t] = li[e];
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
var dv = /([A-Z])/g, fv = /^ms-/, Js = Array.isArray, pv = T("<script>"), hv = T("<\/script>"), mv = T('<script src="'), yv = T('<script type="module" src="'), sd = T('" async=""><\/script>'), gv = /(<\/|<)(s)(cript)/gi;
function vv(e, t, n, r) {
  return "" + t + (n === "s" ? "\\u0073" : "\\u0053") + r;
}
function wv(e, t, n, r, o) {
  e = e === void 0 ? "" : e, t = t === void 0 ? pv : T('<script nonce="' + he(t) + '">');
  var i = [];
  if (n !== void 0 && i.push(t, D(("" + n).replace(gv, vv)), hv), r !== void 0) for (n = 0; n < r.length; n++) i.push(mv, D(he(r[n])), sd);
  if (o !== void 0) for (r = 0; r < o.length; r++) i.push(yv, D(he(o[r])), sd);
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
var da = T("<!-- -->");
function ud(e, t, n, r) {
  return t === "" ? r : (r && e.push(da), e.push(D(he(t))), !0);
}
var ad = /* @__PURE__ */ new Map(), Sv = T(' style="'), cd = T(":"), Cv = T(";");
function Nh(e, t, n) {
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
        var l = ad.get(i);
        l !== void 0 || (l = T(he(i.replace(dv, "-$1").toLowerCase().replace(fv, "-ms-"))), ad.set(i, l)), i = l, o = typeof o == "number" ? o === 0 || Re.call(li, r) ? D("" + o) : D(o + "px") : D(he(("" + o).trim()));
      }
      t ? (t = !1, e.push(Sv, i, cd, o)) : e.push(Cv, i, cd, o);
    }
  }
  t || e.push(mn);
}
var It = T(" "), Rn = T('="'), mn = T('"'), dd = T('=""');
function Ue(e, t, n, r) {
  switch (n) {
    case "style":
      Nh(e, t, r);
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
          r && e.push(It, n, dd);
          break;
        case 4:
          r === !0 ? e.push(It, n, dd) : r !== !1 && e.push(It, n, Rn, D(he(r)), mn);
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
    } else if (Th(n)) {
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
var Dt = T(">"), fd = T("/>");
function si(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(I(60));
    if (typeof t != "object" || !("__html" in t)) throw Error(I(61));
    t = t.__html, t != null && e.push(D("" + t));
  }
}
function _v(e) {
  var t = "";
  return _h.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
var Yl = T(' selected=""');
function Xl(e, t, n, r) {
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
  return e.push(Dt), si(e, o, n), typeof n == "string" ? (e.push(D(he(n))), null) : n;
}
var Kl = T(`
`), Ev = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, pd = /* @__PURE__ */ new Map();
function yt(e) {
  var t = pd.get(e);
  if (t === void 0) {
    if (!Ev.test(e)) throw Error(I(65, e));
    t = T("<" + e), pd.set(e, t);
  }
  return t;
}
var $v = T("<!DOCTYPE html>");
function Tv(e, t, n, r, o) {
  switch (t) {
    case "select":
      e.push(yt("select"));
      var i = null, l = null;
      for (c in n) if (Re.call(n, c)) {
        var s = n[c];
        if (s != null) switch (c) {
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
            Ue(e, r, c, s);
        }
      }
      return e.push(Dt), si(e, l, i), i;
    case "option":
      l = o.selectedValue, e.push(yt("option"));
      var u = s = null, a = null, c = null;
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
            c = p;
            break;
          case "value":
            u = p;
          default:
            Ue(e, r, i, p);
        }
      }
      if (l != null) if (n = u !== null ? "" + u : _v(s), Js(l)) {
        for (r = 0; r < l.length; r++)
          if ("" + l[r] === n) {
            e.push(Yl);
            break;
          }
      } else "" + l === n && e.push(Yl);
      else a && e.push(Yl);
      return e.push(Dt), si(e, c, s), s;
    case "textarea":
      e.push(yt("textarea")), c = l = i = null;
      for (s in n) if (Re.call(n, s) && (u = n[s], u != null)) switch (s) {
        case "children":
          c = u;
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
      if (i === null && l !== null && (i = l), e.push(Dt), c != null) {
        if (i != null) throw Error(I(92));
        if (Js(c) && 1 < c.length) throw Error(I(93));
        i = "" + c;
      }
      return typeof i == "string" && i[0] === `
` && e.push(Kl), i !== null && e.push(D(he("" + i))), null;
    case "input":
      e.push(yt("input")), u = c = s = i = null;
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
          c = a;
          break;
        case "value":
          i = a;
          break;
        default:
          Ue(e, r, l, a);
      }
      return c !== null ? Ue(
        e,
        r,
        "checked",
        c
      ) : u !== null && Ue(e, r, "checked", u), i !== null ? Ue(e, r, "value", i) : s !== null && Ue(e, r, "value", s), e.push(fd), null;
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
` ? e.push(Kl, D(n)) : e.push(D("" + n)));
      }
      return typeof i == "string" && i[0] === `
` && e.push(Kl), i;
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
      return e.push(fd), null;
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return Xl(e, n, t, r);
    case "html":
      return o.insertionMode === 0 && e.push($v), Xl(e, n, t, r);
    default:
      if (t.indexOf("-") === -1 && typeof n.is != "string") return Xl(e, n, t, r);
      e.push(yt(t)), l = i = null;
      for (a in n) if (Re.call(n, a) && (s = n[a], s != null)) switch (a) {
        case "children":
          i = s;
          break;
        case "dangerouslySetInnerHTML":
          l = s;
          break;
        case "style":
          Nh(e, r, s);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          break;
        default:
          Th(a) && typeof s != "function" && typeof s != "symbol" && e.push(It, D(a), Rn, D(he(s)), mn);
      }
      return e.push(Dt), si(e, l, i), i;
  }
}
var Nv = T("</"), Pv = T(">"), Mv = T('<template id="'), jv = T('"></template>'), Rv = T("<!--$-->"), zv = T('<!--$?--><template id="'), Fv = T('"></template>'), Lv = T("<!--$!-->"), Iv = T("<!--/$-->"), Dv = T("<template"), Ov = T('"'), bv = T(' data-dgst="');
T(' data-msg="');
T(' data-stck="');
var Av = T("></template>");
function hd(e, t, n) {
  if (M(e, zv), n === null) throw Error(I(395));
  return M(e, n), q(e, Fv);
}
var Uv = T('<div hidden id="'), Wv = T('">'), Vv = T("</div>"), Bv = T('<svg aria-hidden="true" style="display:none" id="'), Hv = T('">'), Qv = T("</svg>"), Yv = T('<math aria-hidden="true" style="display:none" id="'), Xv = T('">'), Kv = T("</math>"), Gv = T('<table hidden id="'), Zv = T('">'), Jv = T("</table>"), qv = T('<table hidden><tbody id="'), ew = T('">'), tw = T("</tbody></table>"), nw = T('<table hidden><tr id="'), rw = T('">'), ow = T("</tr></table>"), iw = T('<table hidden><colgroup id="'), lw = T('">'), sw = T("</colgroup></table>");
function uw(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return M(e, Uv), M(e, t.segmentPrefix), M(e, D(r.toString(16))), q(e, Wv);
    case 2:
      return M(e, Bv), M(e, t.segmentPrefix), M(e, D(r.toString(16))), q(e, Hv);
    case 3:
      return M(e, Yv), M(e, t.segmentPrefix), M(e, D(r.toString(16))), q(e, Xv);
    case 4:
      return M(e, Gv), M(e, t.segmentPrefix), M(e, D(r.toString(16))), q(e, Zv);
    case 5:
      return M(e, qv), M(e, t.segmentPrefix), M(e, D(r.toString(16))), q(e, ew);
    case 6:
      return M(e, nw), M(e, t.segmentPrefix), M(e, D(r.toString(16))), q(e, rw);
    case 7:
      return M(
        e,
        iw
      ), M(e, t.segmentPrefix), M(e, D(r.toString(16))), q(e, lw);
    default:
      throw Error(I(397));
  }
}
function aw(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return q(e, Vv);
    case 2:
      return q(e, Qv);
    case 3:
      return q(e, Kv);
    case 4:
      return q(e, Jv);
    case 5:
      return q(e, tw);
    case 6:
      return q(e, ow);
    case 7:
      return q(e, sw);
    default:
      throw Error(I(397));
  }
}
var cw = T('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), dw = T('$RS("'), fw = T('","'), pw = T('")<\/script>'), hw = T('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), mw = T('$RC("'), yw = T('","'), gw = T('")<\/script>'), vw = T('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), ww = T('$RX("'), xw = T('"'), kw = T(")<\/script>"), Gl = T(","), Sw = /[<\u2028\u2029]/g;
function Zl(e) {
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
var Ar = Object.assign, Cw = Symbol.for("react.element"), Ph = Symbol.for("react.portal"), Mh = Symbol.for("react.fragment"), jh = Symbol.for("react.strict_mode"), Rh = Symbol.for("react.profiler"), zh = Symbol.for("react.provider"), Fh = Symbol.for("react.context"), Lh = Symbol.for("react.forward_ref"), Ih = Symbol.for("react.suspense"), Dh = Symbol.for("react.suspense_list"), Oh = Symbol.for("react.memo"), fa = Symbol.for("react.lazy"), _w = Symbol.for("react.scope"), Ew = Symbol.for("react.debug_trace_mode"), $w = Symbol.for("react.legacy_hidden"), Tw = Symbol.for("react.default_value"), md = Symbol.iterator;
function qs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mh:
      return "Fragment";
    case Ph:
      return "Portal";
    case Rh:
      return "Profiler";
    case jh:
      return "StrictMode";
    case Ih:
      return "Suspense";
    case Dh:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Fh:
      return (e.displayName || "Context") + ".Consumer";
    case zh:
      return (e._context.displayName || "Context") + ".Provider";
    case Lh:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Oh:
      return t = e.displayName || null, t !== null ? t : qs(e.type) || "Memo";
    case fa:
      t = e._payload, e = e._init;
      try {
        return qs(e(t));
      } catch {
      }
  }
  return null;
}
var bh = {};
function yd(e, t) {
  if (e = e.contextTypes, !e) return bh;
  var n = {}, r;
  for (r in e) n[r] = t[r];
  return n;
}
var kn = null;
function cl(e, t) {
  if (e !== t) {
    e.context._currentValue = e.parentValue, e = e.parent;
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(I(401));
    } else {
      if (n === null) throw Error(I(401));
      cl(e, n);
    }
    t.context._currentValue = t.value;
  }
}
function Ah(e) {
  e.context._currentValue = e.parentValue, e = e.parent, e !== null && Ah(e);
}
function Uh(e) {
  var t = e.parent;
  t !== null && Uh(t), e.context._currentValue = e.value;
}
function Wh(e, t) {
  if (e.context._currentValue = e.parentValue, e = e.parent, e === null) throw Error(I(402));
  e.depth === t.depth ? cl(e, t) : Wh(e, t);
}
function Vh(e, t) {
  var n = t.parent;
  if (n === null) throw Error(I(402));
  e.depth === n.depth ? cl(e, n) : Vh(e, n), t.context._currentValue = t.value;
}
function Ai(e) {
  var t = kn;
  t !== e && (t === null ? Uh(e) : e === null ? Ah(t) : t.depth === e.depth ? cl(t, e) : t.depth > e.depth ? Wh(t, e) : Vh(t, e), kn = e);
}
var gd = { isMounted: function() {
  return !1;
}, enqueueSetState: function(e, t) {
  e = e._reactInternals, e.queue !== null && e.queue.push(t);
}, enqueueReplaceState: function(e, t) {
  e = e._reactInternals, e.replace = !0, e.queue = [t];
}, enqueueForceUpdate: function() {
} };
function vd(e, t, n, r) {
  var o = e.state !== void 0 ? e.state : null;
  e.updater = gd, e.props = n, e.state = o;
  var i = { queue: [], replace: !1 };
  e._reactInternals = i;
  var l = t.contextType;
  if (e.context = typeof l == "object" && l !== null ? l._currentValue : r, l = t.getDerivedStateFromProps, typeof l == "function" && (l = l(n, o), o = l == null ? o : Ar({}, o, l), e.state = o), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (t = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && gd.enqueueReplaceState(e, e.state, null), i.queue !== null && 0 < i.queue.length) if (t = i.queue, l = i.replace, i.queue = null, i.replace = !1, l && t.length === 1) e.state = t[0];
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
function eu(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var o = 32 - ui(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - ui(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    return i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, { id: 1 << 32 - ui(t) + o | n << o | r, overflow: i + e };
  }
  return { id: 1 << i | n << o | r, overflow: e };
}
var ui = Math.clz32 ? Math.clz32 : jw, Pw = Math.log, Mw = Math.LN2;
function jw(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Pw(e) / Mw | 0) | 0;
}
function Rw(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var zw = typeof Object.is == "function" ? Object.is : Rw, zt = null, pa = null, ai = null, X = null, Nr = !1, Ui = !1, lo = 0, Ht = null, dl = 0;
function yn() {
  if (zt === null) throw Error(I(321));
  return zt;
}
function wd() {
  if (0 < dl) throw Error(I(312));
  return { memoizedState: null, queue: null, next: null };
}
function ha() {
  return X === null ? ai === null ? (Nr = !1, ai = X = wd()) : (Nr = !0, X = ai) : X.next === null ? (Nr = !1, X = X.next = wd()) : (Nr = !0, X = X.next), X;
}
function ma() {
  pa = zt = null, Ui = !1, ai = null, dl = 0, X = Ht = null;
}
function Bh(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function xd(e, t, n) {
  if (zt = yn(), X = ha(), Nr) {
    var r = X.queue;
    if (t = r.dispatch, Ht !== null && (n = Ht.get(r), n !== void 0)) {
      Ht.delete(r), r = X.memoizedState;
      do
        r = e(r, n.action), n = n.next;
      while (n !== null);
      return X.memoizedState = r, [r, t];
    }
    return [X.memoizedState, t];
  }
  return e = e === Bh ? typeof t == "function" ? t() : t : n !== void 0 ? n(t) : t, X.memoizedState = e, e = X.queue = { last: null, dispatch: null }, e = e.dispatch = Fw.bind(null, zt, e), [X.memoizedState, e];
}
function kd(e, t) {
  if (zt = yn(), X = ha(), t = t === void 0 ? null : t, X !== null) {
    var n = X.memoizedState;
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
  return e = e(), X.memoizedState = [e, t], e;
}
function Fw(e, t, n) {
  if (25 <= dl) throw Error(I(301));
  if (e === zt) if (Ui = !0, e = { action: n, next: null }, Ht === null && (Ht = /* @__PURE__ */ new Map()), n = Ht.get(t), n === void 0) Ht.set(t, e);
  else {
    for (t = n; t.next !== null; ) t = t.next;
    t.next = e;
  }
}
function Lw() {
  throw Error(I(394));
}
function Ao() {
}
var Sd = { readContext: function(e) {
  return e._currentValue;
}, useContext: function(e) {
  return yn(), e._currentValue;
}, useMemo: kd, useReducer: xd, useRef: function(e) {
  zt = yn(), X = ha();
  var t = X.memoizedState;
  return t === null ? (e = { current: e }, X.memoizedState = e) : t;
}, useState: function(e) {
  return xd(Bh, e);
}, useInsertionEffect: Ao, useLayoutEffect: function() {
}, useCallback: function(e, t) {
  return kd(function() {
    return e;
  }, t);
}, useImperativeHandle: Ao, useEffect: Ao, useDebugValue: Ao, useDeferredValue: function(e) {
  return yn(), e;
}, useTransition: function() {
  return yn(), [!1, Lw];
}, useId: function() {
  var e = pa.treeContext, t = e.overflow;
  e = e.id, e = (e & ~(1 << 32 - ui(e) - 1)).toString(32) + t;
  var n = ci;
  if (n === null) throw Error(I(404));
  return t = lo++, e = ":" + n.idPrefix + "R" + e, 0 < t && (e += "H" + t.toString(32)), e + ":";
}, useMutableSource: function(e, t) {
  return yn(), t(e._source);
}, useSyncExternalStore: function(e, t, n) {
  if (n === void 0) throw Error(I(407));
  return n();
} }, ci = null, Jl = _h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
function Iw(e) {
  return console.error(e), null;
}
function Pr() {
}
function Dw(e, t, n, r, o, i, l, s, u) {
  var a = [], c = /* @__PURE__ */ new Set();
  return t = { destination: null, responseState: t, progressiveChunkSize: r === void 0 ? 12800 : r, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: c, pingedTasks: a, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: o === void 0 ? Iw : o, onAllReady: i === void 0 ? Pr : i, onShellReady: l === void 0 ? Pr : l, onShellError: s === void 0 ? Pr : s, onFatalError: u === void 0 ? Pr : u }, n = Wi(t, 0, null, n, !1, !1), n.parentFlushed = !0, e = ya(t, e, null, n, c, bh, null, Nw), a.push(e), t;
}
function ya(e, t, n, r, o, i, l, s) {
  e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
  var u = { node: t, ping: function() {
    var a = e.pingedTasks;
    a.push(u), a.length === 1 && Yh(e);
  }, blockedBoundary: n, blockedSegment: r, abortSet: o, legacyContext: i, context: l, treeContext: s };
  return o.add(u), u;
}
function Wi(e, t, n, r, o, i) {
  return { status: 0, id: -1, index: t, parentFlushed: !1, chunks: [], children: [], formatContext: r, boundary: n, lastPushedText: o, textEmbedded: i };
}
function so(e, t) {
  if (e = e.onError(t), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
  return e;
}
function Vi(e, t) {
  var n = e.onShellError;
  n(t), n = e.onFatalError, n(t), e.destination !== null ? (e.status = 2, $h(e.destination, t)) : (e.status = 1, e.fatalError = t);
}
function Cd(e, t, n, r, o) {
  for (zt = {}, pa = t, lo = 0, e = n(r, o); Ui; ) Ui = !1, lo = 0, dl += 1, X = null, e = n(r, o);
  return ma(), e;
}
function _d(e, t, n, r) {
  var o = n.render(), i = r.childContextTypes;
  if (i != null) {
    var l = t.legacyContext;
    if (typeof n.getChildContext != "function") r = l;
    else {
      n = n.getChildContext();
      for (var s in n) if (!(s in i)) throw Error(I(108, qs(r) || "Unknown", s));
      r = Ar({}, l, n);
    }
    t.legacyContext = r, Qe(e, t, o), t.legacyContext = l;
  } else Qe(e, t, o);
}
function Ed(e, t) {
  if (e && e.defaultProps) {
    t = Ar({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function tu(e, t, n, r, o) {
  if (typeof n == "function") if (n.prototype && n.prototype.isReactComponent) {
    o = yd(n, t.legacyContext);
    var i = n.contextType;
    i = new n(r, typeof i == "object" && i !== null ? i._currentValue : o), vd(i, n, r, o), _d(e, t, i, n);
  } else {
    i = yd(n, t.legacyContext), o = Cd(e, t, n, r, i);
    var l = lo !== 0;
    if (typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0) vd(o, n, r, i), _d(e, t, o, n);
    else if (l) {
      r = t.treeContext, t.treeContext = eu(r, 1, 0);
      try {
        Qe(e, t, o);
      } finally {
        t.treeContext = r;
      }
    } else Qe(e, t, o);
  }
  else if (typeof n == "string") {
    switch (o = t.blockedSegment, i = Tv(o.chunks, n, r, e.responseState, o.formatContext), o.lastPushedText = !1, l = o.formatContext, o.formatContext = kv(l, n, r), nu(e, t, i), o.formatContext = l, n) {
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
      case jh:
      case Rh:
      case Mh:
        Qe(e, t, r.children);
        return;
      case Dh:
        Qe(e, t, r.children);
        return;
      case _w:
        throw Error(I(343));
      case Ih:
        e: {
          n = t.blockedBoundary, o = t.blockedSegment, i = r.fallback, r = r.children, l = /* @__PURE__ */ new Set();
          var s = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: l, errorDigest: null }, u = Wi(e, o.chunks.length, s, o.formatContext, !1, !1);
          o.children.push(u), o.lastPushedText = !1;
          var a = Wi(e, 0, null, o.formatContext, !1, !1);
          a.parentFlushed = !0, t.blockedBoundary = s, t.blockedSegment = a;
          try {
            if (nu(
              e,
              t,
              r
            ), a.lastPushedText && a.textEmbedded && a.chunks.push(da), a.status = 1, Bi(s, a), s.pendingTasks === 0) break e;
          } catch (c) {
            a.status = 4, s.forceClientRender = !0, s.errorDigest = so(e, c);
          } finally {
            t.blockedBoundary = n, t.blockedSegment = o;
          }
          t = ya(e, i, n, u, l, t.legacyContext, t.context, t.treeContext), e.pingedTasks.push(t);
        }
        return;
    }
    if (typeof n == "object" && n !== null) switch (n.$$typeof) {
      case Lh:
        if (r = Cd(e, t, n.render, r, o), lo !== 0) {
          n = t.treeContext, t.treeContext = eu(n, 1, 0);
          try {
            Qe(e, t, r);
          } finally {
            t.treeContext = n;
          }
        } else Qe(e, t, r);
        return;
      case Oh:
        n = n.type, r = Ed(n, r), tu(e, t, n, r, o);
        return;
      case zh:
        if (o = r.children, n = n._context, r = r.value, i = n._currentValue, n._currentValue = r, l = kn, kn = r = { parent: l, depth: l === null ? 0 : l.depth + 1, context: n, parentValue: i, value: r }, t.context = r, Qe(e, t, o), e = kn, e === null) throw Error(I(403));
        r = e.parentValue, e.context._currentValue = r === Tw ? e.context._defaultValue : r, e = kn = e.parent, t.context = e;
        return;
      case Fh:
        r = r.children, r = r(n._currentValue), Qe(e, t, r);
        return;
      case fa:
        o = n._init, n = o(n._payload), r = Ed(n, r), tu(e, t, n, r, void 0);
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
        tu(e, t, n.type, n.props, n.ref);
        return;
      case Ph:
        throw Error(I(257));
      case fa:
        var r = n._init;
        n = r(n._payload), Qe(e, t, n);
        return;
    }
    if (Js(n)) {
      $d(e, t, n);
      return;
    }
    if (n === null || typeof n != "object" ? r = null : (r = md && n[md] || n["@@iterator"], r = typeof r == "function" ? r : null), r && (r = r.call(n))) {
      if (n = r.next(), !n.done) {
        var o = [];
        do
          o.push(n.value), n = r.next();
        while (!n.done);
        $d(e, t, o);
      }
      return;
    }
    throw e = Object.prototype.toString.call(n), Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  typeof n == "string" ? (r = t.blockedSegment, r.lastPushedText = ud(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)) : typeof n == "number" && (r = t.blockedSegment, r.lastPushedText = ud(t.blockedSegment.chunks, "" + n, e.responseState, r.lastPushedText));
}
function $d(e, t, n) {
  for (var r = n.length, o = 0; o < r; o++) {
    var i = t.treeContext;
    t.treeContext = eu(i, r, o);
    try {
      nu(e, t, n[o]);
    } finally {
      t.treeContext = i;
    }
  }
}
function nu(e, t, n) {
  var r = t.blockedSegment.formatContext, o = t.legacyContext, i = t.context;
  try {
    return Qe(e, t, n);
  } catch (u) {
    if (ma(), typeof u == "object" && u !== null && typeof u.then == "function") {
      n = u;
      var l = t.blockedSegment, s = Wi(e, l.chunks.length, null, l.formatContext, l.lastPushedText, !0);
      l.children.push(s), l.lastPushedText = !1, e = ya(e, t.node, t.blockedBoundary, s, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, n.then(e, e), t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = i, Ai(i);
    } else throw t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = i, Ai(i), u;
  }
}
function Ow(e) {
  var t = e.blockedBoundary;
  e = e.blockedSegment, e.status = 3, Qh(this, t, e);
}
function Hh(e, t, n) {
  var r = e.blockedBoundary;
  e.blockedSegment.status = 3, r === null ? (t.allPendingTasks--, t.status !== 2 && (t.status = 2, t.destination !== null && t.destination.close())) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, e = n === void 0 ? Error(I(432)) : n, r.errorDigest = t.onError(e), r.parentFlushed && t.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach(function(o) {
    return Hh(o, t, n);
  }), r.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0 && (r = t.onAllReady, r()));
}
function Bi(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    n.id = t.id, n.parentFlushed = !0, n.status === 1 && Bi(e, n);
  } else e.completedSegments.push(t);
}
function Qh(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(I(389));
      e.completedRootSegment = n;
    }
    e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Pr, t = e.onShellReady, t());
  } else t.pendingTasks--, t.forceClientRender || (t.pendingTasks === 0 ? (n.parentFlushed && n.status === 1 && Bi(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(Ow, e), t.fallbackAbortableTasks.clear()) : n.parentFlushed && n.status === 1 && (Bi(t, n), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
}
function Yh(e) {
  if (e.status !== 2) {
    var t = kn, n = Jl.current;
    Jl.current = Sd;
    var r = ci;
    ci = e.responseState;
    try {
      var o = e.pingedTasks, i;
      for (i = 0; i < o.length; i++) {
        var l = o[i], s = e, u = l.blockedSegment;
        if (u.status === 0) {
          Ai(l.context);
          try {
            Qe(s, l, l.node), u.lastPushedText && u.textEmbedded && u.chunks.push(da), l.abortSet.delete(l), u.status = 1, Qh(s, l.blockedBoundary, u);
          } catch (g) {
            if (ma(), typeof g == "object" && g !== null && typeof g.then == "function") {
              var a = l.ping;
              g.then(a, a);
            } else {
              l.abortSet.delete(l), u.status = 4;
              var c = l.blockedBoundary, p = g, m = so(s, p);
              if (c === null ? Vi(s, p) : (c.pendingTasks--, c.forceClientRender || (c.forceClientRender = !0, c.errorDigest = m, c.parentFlushed && s.clientRenderedBoundaries.push(c))), s.allPendingTasks--, s.allPendingTasks === 0) {
                var y = s.onAllReady;
                y();
              }
            }
          } finally {
          }
        }
      }
      o.splice(0, i), e.destination !== null && ga(e, e.destination);
    } catch (g) {
      so(e, g), Vi(e, g);
    } finally {
      ci = r, Jl.current = n, n === Sd && Ai(t);
    }
  }
}
function Uo(e, t, n) {
  switch (n.parentFlushed = !0, n.status) {
    case 0:
      var r = n.id = e.nextSegmentId++;
      return n.lastPushedText = !1, n.textEmbedded = !1, e = e.responseState, M(t, Mv), M(t, e.placeholderPrefix), e = D(r.toString(16)), M(t, e), q(t, jv);
    case 1:
      n.status = 2;
      var o = !0;
      r = n.chunks;
      var i = 0;
      n = n.children;
      for (var l = 0; l < n.length; l++) {
        for (o = n[l]; i < o.index; i++) M(t, r[i]);
        o = fl(e, t, o);
      }
      for (; i < r.length - 1; i++) M(t, r[i]);
      return i < r.length && (o = q(t, r[i])), o;
    default:
      throw Error(I(390));
  }
}
function fl(e, t, n) {
  var r = n.boundary;
  if (r === null) return Uo(e, t, n);
  if (r.parentFlushed = !0, r.forceClientRender) r = r.errorDigest, q(t, Lv), M(t, Dv), r && (M(t, bv), M(t, D(he(r))), M(t, Ov)), q(t, Av), Uo(e, t, n);
  else if (0 < r.pendingTasks) {
    r.rootSegmentID = e.nextSegmentId++, 0 < r.completedSegments.length && e.partialBoundaries.push(r);
    var o = e.responseState, i = o.nextSuspenseID++;
    o = T(o.boundaryPrefix + i.toString(16)), r = r.id = o, hd(t, e.responseState, r), Uo(e, t, n);
  } else if (r.byteSize > e.progressiveChunkSize) r.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(r), hd(t, e.responseState, r.id), Uo(e, t, n);
  else {
    if (q(t, Rv), n = r.completedSegments, n.length !== 1) throw Error(I(391));
    fl(e, t, n[0]);
  }
  return q(t, Iv);
}
function Td(e, t, n) {
  return uw(t, e.responseState, n.formatContext, n.id), fl(e, t, n), aw(t, n.formatContext);
}
function Nd(e, t, n) {
  for (var r = n.completedSegments, o = 0; o < r.length; o++) Xh(e, t, n, r[o]);
  if (r.length = 0, e = e.responseState, r = n.id, n = n.rootSegmentID, M(t, e.startInlineScript), e.sentCompleteBoundaryFunction ? M(t, mw) : (e.sentCompleteBoundaryFunction = !0, M(t, hw)), r === null) throw Error(I(395));
  return n = D(n.toString(16)), M(t, r), M(t, yw), M(t, e.segmentPrefix), M(t, n), q(t, gw);
}
function Xh(e, t, n, r) {
  if (r.status === 2) return !0;
  var o = r.id;
  if (o === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(I(392));
    return Td(e, t, r);
  }
  return Td(e, t, r), e = e.responseState, M(t, e.startInlineScript), e.sentCompleteSegmentFunction ? M(t, dw) : (e.sentCompleteSegmentFunction = !0, M(t, cw)), M(t, e.segmentPrefix), o = D(o.toString(16)), M(t, o), M(t, fw), M(t, e.placeholderPrefix), M(t, o), q(t, pw);
}
function ga(e, t) {
  Be = new Uint8Array(512), He = 0;
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      fl(e, t, n), e.completedRootSegment = null;
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) M(t, r[n]);
      n < r.length && q(t, r[n]);
    }
    var o = e.clientRenderedBoundaries, i;
    for (i = 0; i < o.length; i++) {
      var l = o[i];
      r = t;
      var s = e.responseState, u = l.id, a = l.errorDigest, c = l.errorMessage, p = l.errorComponentStack;
      if (M(r, s.startInlineScript), s.sentClientRenderFunction ? M(r, ww) : (s.sentClientRenderFunction = !0, M(
        r,
        vw
      )), u === null) throw Error(I(395));
      M(r, u), M(r, xw), (a || c || p) && (M(r, Gl), M(r, D(Zl(a || "")))), (c || p) && (M(r, Gl), M(r, D(Zl(c || "")))), p && (M(r, Gl), M(r, D(Zl(p)))), q(r, kw);
    }
    o.splice(0, i);
    var m = e.completedBoundaries;
    for (i = 0; i < m.length; i++) Nd(e, t, m[i]);
    m.splice(0, i), od(t), Be = new Uint8Array(512), He = 0;
    var y = e.partialBoundaries;
    for (i = 0; i < y.length; i++) {
      var g = y[i];
      e: {
        o = e, l = t;
        var x = g.completedSegments;
        for (s = 0; s < x.length; s++) if (!Xh(
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
    for (i = 0; i < f.length; i++) Nd(e, t, f[i]);
    f.splice(0, i);
  } finally {
    od(t), e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && t.close();
  }
}
function Pd(e, t) {
  try {
    var n = e.abortableTasks;
    n.forEach(function(r) {
      return Hh(r, e, t);
    }), n.clear(), e.destination !== null && ga(e, e.destination);
  } catch (r) {
    so(e, r), Vi(e, r);
  }
}
ua.renderToReadableStream = function(e, t) {
  return new Promise(function(n, r) {
    var o, i, l = new Promise(function(c, p) {
      i = c, o = p;
    }), s = Dw(e, wv(t ? t.identifierPrefix : void 0, t ? t.nonce : void 0, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0), xv(t ? t.namespaceURI : void 0), t ? t.progressiveChunkSize : void 0, t ? t.onError : void 0, i, function() {
      var c = new ReadableStream({ type: "bytes", pull: function(p) {
        if (s.status === 1) s.status = 2, $h(p, s.fatalError);
        else if (s.status !== 2 && s.destination === null) {
          s.destination = p;
          try {
            ga(s, p);
          } catch (m) {
            so(s, m), Vi(s, m);
          }
        }
      }, cancel: function() {
        Pd(s);
      } }, { highWaterMark: 0 });
      c.allReady = l, n(c);
    }, function(c) {
      l.catch(function() {
      }), r(c);
    }, o);
    if (t && t.signal) {
      var u = t.signal, a = function() {
        Pd(s, u.reason), u.removeEventListener("abort", a);
      };
      u.addEventListener("abort", a);
    }
    Yh(s);
  });
};
ua.version = "18.3.1";
var ur, Kh;
ur = sr, Kh = ua;
ur.version;
var bw = ur.renderToString;
ur.renderToStaticMarkup;
ur.renderToNodeStream;
ur.renderToStaticNodeStream;
Kh.renderToReadableStream;
var Gh = { exports: {} }, Aw = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Uw = Aw, Ww = Uw;
function Zh() {
}
function Jh() {
}
Jh.resetWarningCache = Zh;
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
    checkPropTypes: Jh,
    resetWarningCache: Zh
  };
  return n.PropTypes = n, n;
};
Gh.exports = Vw();
var Bw = Gh.exports;
const at = /* @__PURE__ */ jd(Bw);
var Hw = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function qh(e, t) {
  return e(t = { exports: {} }, t.exports), t.exports;
}
var Qw = qh(function(e) {
  (function(t) {
    var n = function(k, f, d) {
      if (!u(f) || c(f) || p(f) || m(f) || s(f)) return f;
      var h, w = 0, S = 0;
      if (a(f)) for (h = [], S = f.length; w < S; w++) h.push(n(k, f[w], d));
      else for (var _ in h = {}, f) Object.prototype.hasOwnProperty.call(f, _) && (h[k(_, d)] = n(k, f[_], d));
      return h;
    }, r = function(k) {
      return y(k) ? k : (k = k.replace(/[\-_\s]+(.)?/g, function(f, d) {
        return d ? d.toUpperCase() : "";
      })).substr(0, 1).toLowerCase() + k.substr(1);
    }, o = function(k) {
      var f = r(k);
      return f.substr(0, 1).toUpperCase() + f.substr(1);
    }, i = function(k, f) {
      return function(d, h) {
        var w = (h = h || {}).separator || "_", S = h.split || /(?=[A-Z])/;
        return d.split(S).join(w);
      }(k, f).toLowerCase();
    }, l = Object.prototype.toString, s = function(k) {
      return typeof k == "function";
    }, u = function(k) {
      return k === Object(k);
    }, a = function(k) {
      return l.call(k) == "[object Array]";
    }, c = function(k) {
      return l.call(k) == "[object Date]";
    }, p = function(k) {
      return l.call(k) == "[object RegExp]";
    }, m = function(k) {
      return l.call(k) == "[object Boolean]";
    }, y = function(k) {
      return (k -= 0) == k;
    }, g = function(k, f) {
      var d = f && "process" in f ? f.process : f;
      return typeof d != "function" ? k : function(h, w) {
        return d(h, k, w);
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
}, Md = function(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}, Kw = function(e, t) {
  if (e) {
    if (typeof e == "string") return Md(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Md(e, t) : void 0;
  }
}, Gw = function() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}, Zw = function(e, t) {
  return Yw(e) || Xw(e, t) || Kw(e, t) || Gw();
}, em = qh(function(e) {
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
}, tm = function(e, t) {
  if (e == null) return {};
  var n, r, o = Jw(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}, qw = j.createContext(null);
function nm(e) {
  var t = e.children, n = t === void 0 ? "" : t, r = tm(e, ["children"]);
  return typeof n != "string" && (n = bw(n)), Ye.createElement("template", em({}, r, { dangerouslySetInnerHTML: { __html: n } }));
}
function rm(e) {
  var t = e.root, n = e.children;
  return Vp.createPortal(n === void 0 ? null : n, t);
}
function ex(e) {
  var t = j.forwardRef(function(n, r) {
    var o, i, l = n.mode, s = l === void 0 ? "open" : l, u = n.delegatesFocus, a = u !== void 0 && u, c = n.styleSheets, p = c === void 0 ? [] : c, m = n.ssr, y = m !== void 0 && m, g = n.children, x = tm(n, ["mode", "delegatesFocus", "styleSheets", "ssr", "children"]), k = (i = j.useRef((o = r) && o.current), j.useEffect(function() {
      o && (o.current = i.current);
    }, [o]), i), f = j.useState(null), d = Zw(f, 2), h = d[0], w = d[1], S = "node_".concat(s).concat(a);
    return j.useLayoutEffect(function() {
      if (k.current) try {
        if (typeof r == "function" && r(k.current), y) {
          var _ = k.current.shadowRoot;
          return void w(_);
        }
        var $ = k.current.attachShadow({ mode: s, delegatesFocus: a });
        p.length > 0 && ($.adoptedStyleSheets = p), w($);
      } catch (P) {
        (function(b) {
          var F = b.error, Z = b.styleSheets, H = b.root;
          switch (F.name) {
            case "NotSupportedError":
              Z.length > 0 && (H.adoptedStyleSheets = Z);
              break;
            default:
              throw F;
          }
        })({ error: P, styleSheets: p, root: h });
      }
    }, [r, k, p]), Ye.createElement(Ye.Fragment, null, Ye.createElement(e.tag, em({ key: S, ref: k }, x), (h || y) && Ye.createElement(qw.Provider, { value: h }, y ? Ye.createElement(nm, { shadowroot: s, shadowrootmode: s }, e.render({ root: h, ssr: y, children: g })) : Ye.createElement(rm, { root: h }, e.render({ root: h, ssr: y, children: g })))));
  });
  return t.propTypes = { mode: at.oneOf(["open", "closed"]), delegatesFocus: at.bool, styleSheets: at.arrayOf(at.instanceOf(globalThis.CSSStyleSheet)), ssr: at.bool, children: at.node }, t;
}
nm.propTypes = { children: at.oneOfType([at.string, at.node]) }, rm.propTypes = { root: at.object.isRequired, children: at.node };
var ql = /* @__PURE__ */ new Map();
function tx() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "core", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(r) {
    return r.children;
  };
  return new Proxy(e, { get: function(r, o) {
    var i = Qw(o, { separator: "-" }), l = "".concat(t, "-").concat(i);
    return ql.has(l) || ql.set(l, ex({ tag: i, render: n })), ql.get(l);
  } });
}
var nx = tx();
const rx = '@keyframes slide-up{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}input{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}input::-moz-placeholder{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}input::placeholder{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}input:disabled{cursor:not-allowed;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.\\!container{width:100%!important}.container{width:100%}@media (min-width: 640px){.\\!container{max-width:640px!important}.container{max-width:640px}}@media (min-width: 768px){.\\!container{max-width:768px!important}.container{max-width:768px}}@media (min-width: 1024px){.\\!container{max-width:1024px!important}.container{max-width:1024px}}@media (min-width: 1280px){.\\!container{max-width:1280px!important}.container{max-width:1280px}}@media (min-width: 1536px){.\\!container{max-width:1536px!important}.container{max-width:1536px}}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-4{top:1rem;right:1rem;bottom:1rem;left:1rem}.bottom-24{bottom:6rem}.bottom-6{bottom:1.5rem}.bottom-full{bottom:100%}.left-0{left:0}.right-0{right:0}.right-6{right:1.5rem}.top-full{top:100%}.z-50{z-index:50}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.ml-1{margin-left:.25rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.hidden{display:none}.size-2{width:.5rem;height:.5rem}.h-12{height:3rem}.h-2{height:.5rem}.h-3{height:.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-\\[75vh\\]{height:75vh}.h-auto{height:auto}.h-full{height:100%}.max-h-48{max-height:12rem}.max-h-\\[800px\\]{max-height:800px}.max-h-none{max-height:none}.min-h-0{min-height:0px}.min-h-\\[400px\\]{min-height:400px}.min-h-screen{min-height:100vh}.w-12{width:3rem}.w-2{width:.5rem}.w-3{width:.75rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-64{width:16rem}.w-8{width:2rem}.w-\\[400px\\]{width:400px}.w-auto{width:auto}.w-full{width:100%}.min-w-0{min-width:0px}.min-w-48{min-width:12rem}.min-w-\\[32px\\]{min-width:32px}.max-w-3xl{max-width:48rem}.max-w-\\[200px\\]{max-width:200px}.max-w-\\[calc\\(100vw-3rem\\)\\]{max-width:calc(100vw - 3rem)}.max-w-none{max-width:none}.max-w-xs{max-width:20rem}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}@keyframes bounce{0%,to{transform:translateY(-25%);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,.2,1)}}.animate-bounce{animation:bounce 1s infinite}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.animate-slide-up{animation:slide-up .3s ease-out}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-pre{white-space:pre}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-xl{border-radius:.75rem}.rounded-t-lg{border-top-left-radius:.5rem;border-top-right-radius:.5rem}.rounded-bl-sm{border-bottom-left-radius:.125rem}.rounded-br-sm{border-bottom-right-radius:.125rem}.border{border-width:1px}.border-t{border-top-width:1px}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.border-red-200{--tw-border-opacity: 1;border-color:rgb(254 202 202 / var(--tw-border-opacity, 1))}.border-yellow-200{--tw-border-opacity: 1;border-color:rgb(254 240 138 / var(--tw-border-opacity, 1))}.bg-blue-500{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity, 1))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-900{--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity, 1))}.bg-green-100{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity, 1))}.bg-green-400{--tw-bg-opacity: 1;background-color:rgb(74 222 128 / var(--tw-bg-opacity, 1))}.bg-red-100{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity, 1))}.bg-red-400{--tw-bg-opacity: 1;background-color:rgb(248 113 113 / var(--tw-bg-opacity, 1))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-yellow-100{--tw-bg-opacity: 1;background-color:rgb(254 249 195 / var(--tw-bg-opacity, 1))}.bg-yellow-50{--tw-bg-opacity: 1;background-color:rgb(254 252 232 / var(--tw-bg-opacity, 1))}.fill-current{fill:currentColor}.stroke-none{stroke:none}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.pb-1{padding-bottom:.25rem}.pb-2{padding-bottom:.5rem}.text-left{text-align:left}.text-center{text-align:center}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}.text-blue-500{--tw-text-opacity: 1;color:rgb(59 130 246 / var(--tw-text-opacity, 1))}.text-blue-600{--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-green-300{--tw-text-opacity: 1;color:rgb(134 239 172 / var(--tw-text-opacity, 1))}.text-green-600{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity, 1))}.text-indigo-500{--tw-text-opacity: 1;color:rgb(99 102 241 / var(--tw-text-opacity, 1))}.text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity, 1))}.text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.text-red-800{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-yellow-600{--tw-text-opacity: 1;color:rgb(202 138 4 / var(--tw-text-opacity, 1))}.text-yellow-800{--tw-text-opacity: 1;color:rgb(133 77 14 / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.opacity-50{opacity:.5}.opacity-90{opacity:.9}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-2xl{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.\\[animation-delay\\:-0\\.1s\\]{animation-delay:-.1s}.\\[animation-delay\\:-0\\.2s\\]{animation-delay:-.2s}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-50:hover{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.hover\\:bg-white\\/10:hover{background-color:#ffffff1a}.hover\\:text-blue-700:hover{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity, 1))}.hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.hover\\:text-gray-700:hover{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.hover\\:text-gray-800:hover{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.hover\\:text-red-600:hover{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.hover\\:text-red-800:hover{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity, 1))}.hover\\:text-red-900:hover{--tw-text-opacity: 1;color:rgb(127 29 29 / var(--tw-text-opacity, 1))}.hover\\:text-yellow-900:hover{--tw-text-opacity: 1;color:rgb(113 63 18 / var(--tw-text-opacity, 1))}.hover\\:opacity-90:hover{opacity:.9}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-opacity-50:focus{--tw-ring-opacity: .5}.disabled\\:opacity-50:disabled{opacity:.5}';
function ox(e) {
  return e.replace(/:root\b/g, ":host").replaceAll("((-webkit-hyphens:none)) and ", "").replaceAll("(-webkit-hyphens: none) and ", "");
}
function om({ ticketdeskId: e }) {
  const [, t] = e.split("_"), [n, r] = j.useState(!1), [o, i] = j.useState(!1), {
    messages: l,
    sendMessage: s,
    startNewChat: u,
    endCurrentChat: a,
    loadSession: c,
    getRecentChats: p,
    updateProfile: m,
    errorMessage: y,
    setErrorMessage: g,
    sessions: x,
    selectedSession: k,
    isConnected: f,
    isLoading: d,
    config: h,
    chatState: w
  } = M1({
    ticketdeskId: e
  }), S = (_) => {
    if (_) {
      const $ = Qs(`ti_${t}_session_id`);
      c($);
    }
    r(_);
  };
  return d === !0 || !h ? null : /* @__PURE__ */ v.jsxs(nx.div, { children: [
    /* @__PURE__ */ v.jsx("style", { children: ox(rx) }),
    /* @__PURE__ */ v.jsx(
      hg,
      {
        isOpen: n,
        onClick: () => S(!n),
        config: h
      }
    ),
    /* @__PURE__ */ v.jsx(
      y1,
      {
        ticketdeskId: e,
        isOpen: n,
        isMaximized: o,
        isConnected: f,
        config: h,
        chatState: w,
        messages: l,
        sessions: x,
        selectedSession: k,
        onStartNewChat: u,
        onEndChat: a,
        onLoadSession: c,
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
function ix(e) {
  St || (St = document.createElement("div"), St.id = "ticketdesk-ai", St.setAttribute("style", "color-scheme: light;"), document.body.appendChild(St));
  const t = () => {
    kr && (kr.unmount(), kr = null), St && (St.remove(), St = null);
  };
  return kr = Zu(St), kr.render(/* @__PURE__ */ v.jsx(om, { ticketdeskId: e })), { close: t };
}
const lx = by(om, {
  props: {
    ticketdeskId: "string"
  }
});
customElements.define("ticketdesk-chatbot", lx);
window.ticketdesk = {
  initChatbot: ix
};
window.TICKETDESK_ID && window.ticketdesk.initChatbot(window.TICKETDESK_ID);
