var nm = Object.defineProperty;
var rm = (e, t, n) => t in e ? nm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var A = (e, t, n) => rm(e, typeof t != "symbol" ? t + "" : t, n);
function Nd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Td = { exports: {} }, b = {};
var ao = Symbol.for("react.element"), om = Symbol.for("react.portal"), im = Symbol.for("react.fragment"), lm = Symbol.for("react.strict_mode"), sm = Symbol.for("react.profiler"), um = Symbol.for("react.provider"), am = Symbol.for("react.context"), cm = Symbol.for("react.forward_ref"), dm = Symbol.for("react.suspense"), fm = Symbol.for("react.memo"), pm = Symbol.for("react.lazy"), ga = Symbol.iterator;
function hm(e) {
  return e === null || typeof e != "object" ? null : (e = ga && e[ga] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Md = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Rd = Object.assign, jd = {};
function ir(e, t, n) {
  this.props = e, this.context = t, this.refs = jd, this.updater = n || Md;
}
ir.prototype.isReactComponent = {};
ir.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
ir.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function zd() {
}
zd.prototype = ir.prototype;
function nu(e, t, n) {
  this.props = e, this.context = t, this.refs = jd, this.updater = n || Md;
}
var ru = nu.prototype = new zd();
ru.constructor = nu;
Rd(ru, ir.prototype);
ru.isPureReactComponent = !0;
var va = Array.isArray, Fd = Object.prototype.hasOwnProperty, ou = { current: null }, Ld = { key: !0, ref: !0, __self: !0, __source: !0 };
function Dd(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) Fd.call(t, r) && !Ld.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps, s) o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: ao, type: e, key: i, ref: l, props: o, _owner: ou.current };
}
function mm(e, t) {
  return { $$typeof: ao, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function iu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ao;
}
function ym(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var wa = /\/+/g;
function ml(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? ym("" + e.key) : t.toString(36);
}
function Vo(e, t, n, r, o) {
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
        case ao:
        case om:
          l = !0;
      }
  }
  if (l) return l = e, o = o(l), e = r === "" ? "." + ml(l, 0) : r, va(o) ? (n = "", e != null && (n = e.replace(wa, "$&/") + "/"), Vo(o, t, n, "", function(a) {
    return a;
  })) : o != null && (iu(o) && (o = mm(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(wa, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", va(e)) for (var s = 0; s < e.length; s++) {
    i = e[s];
    var u = r + ml(i, s);
    l += Vo(i, t, n, u, o);
  }
  else if (u = hm(e), typeof u == "function") for (e = u.call(e), s = 0; !(i = e.next()).done; ) i = i.value, u = r + ml(i, s++), l += Vo(i, t, n, u, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function go(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Vo(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function gm(e) {
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
var Pe = { current: null }, Bo = { transition: null }, vm = { ReactCurrentDispatcher: Pe, ReactCurrentBatchConfig: Bo, ReactCurrentOwner: ou };
function Id() {
  throw Error("act(...) is not supported in production builds of React.");
}
b.Children = { map: go, forEach: function(e, t, n) {
  go(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return go(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return go(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!iu(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
b.Component = ir;
b.Fragment = im;
b.Profiler = sm;
b.PureComponent = nu;
b.StrictMode = lm;
b.Suspense = dm;
b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vm;
b.act = Id;
b.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Rd({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = ou.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (u in t) Fd.call(t, u) && !Ld.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: ao, type: e.type, key: o, ref: i, props: r, _owner: l };
};
b.createContext = function(e) {
  return e = { $$typeof: am, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: um, _context: e }, e.Consumer = e;
};
b.createElement = Dd;
b.createFactory = function(e) {
  var t = Dd.bind(null, e);
  return t.type = e, t;
};
b.createRef = function() {
  return { current: null };
};
b.forwardRef = function(e) {
  return { $$typeof: cm, render: e };
};
b.isValidElement = iu;
b.lazy = function(e) {
  return { $$typeof: pm, _payload: { _status: -1, _result: e }, _init: gm };
};
b.memo = function(e, t) {
  return { $$typeof: fm, type: e, compare: t === void 0 ? null : t };
};
b.startTransition = function(e) {
  var t = Bo.transition;
  Bo.transition = {};
  try {
    e();
  } finally {
    Bo.transition = t;
  }
};
b.unstable_act = Id;
b.useCallback = function(e, t) {
  return Pe.current.useCallback(e, t);
};
b.useContext = function(e) {
  return Pe.current.useContext(e);
};
b.useDebugValue = function() {
};
b.useDeferredValue = function(e) {
  return Pe.current.useDeferredValue(e);
};
b.useEffect = function(e, t) {
  return Pe.current.useEffect(e, t);
};
b.useId = function() {
  return Pe.current.useId();
};
b.useImperativeHandle = function(e, t, n) {
  return Pe.current.useImperativeHandle(e, t, n);
};
b.useInsertionEffect = function(e, t) {
  return Pe.current.useInsertionEffect(e, t);
};
b.useLayoutEffect = function(e, t) {
  return Pe.current.useLayoutEffect(e, t);
};
b.useMemo = function(e, t) {
  return Pe.current.useMemo(e, t);
};
b.useReducer = function(e, t, n) {
  return Pe.current.useReducer(e, t, n);
};
b.useRef = function(e) {
  return Pe.current.useRef(e);
};
b.useState = function(e) {
  return Pe.current.useState(e);
};
b.useSyncExternalStore = function(e, t, n) {
  return Pe.current.useSyncExternalStore(e, t, n);
};
b.useTransition = function() {
  return Pe.current.useTransition();
};
b.version = "18.3.1";
Td.exports = b;
var T = Td.exports;
const Ct = /* @__PURE__ */ Nd(T);
var Od = { exports: {} }, Ge = {}, bd = { exports: {} }, Ad = {};
(function(e) {
  function t(S, j) {
    var z = S.length;
    S.push(j);
    e: for (; 0 < z; ) {
      var Q = z - 1 >>> 1, de = S[Q];
      if (0 < o(de, j)) S[Q] = j, S[z] = de, z = Q;
      else break e;
    }
  }
  function n(S) {
    return S.length === 0 ? null : S[0];
  }
  function r(S) {
    if (S.length === 0) return null;
    var j = S[0], z = S.pop();
    if (z !== j) {
      S[0] = z;
      e: for (var Q = 0, de = S.length, mo = de >>> 1; Q < mo; ) {
        var sn = 2 * (Q + 1) - 1, hl = S[sn], un = sn + 1, yo = S[un];
        if (0 > o(hl, z)) un < de && 0 > o(yo, hl) ? (S[Q] = yo, S[un] = z, Q = un) : (S[Q] = hl, S[sn] = z, Q = sn);
        else if (un < de && 0 > o(yo, z)) S[Q] = yo, S[un] = z, Q = un;
        else break e;
      }
    }
    return j;
  }
  function o(S, j) {
    var z = S.sortIndex - j.sortIndex;
    return z !== 0 ? z : S.id - j.id;
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
  var u = [], a = [], d = 1, f = null, m = 3, v = !1, y = !1, x = !1, k = typeof setTimeout == "function" ? setTimeout : null, p = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(S) {
    for (var j = n(a); j !== null; ) {
      if (j.callback === null) r(a);
      else if (j.startTime <= S) r(a), j.sortIndex = j.expirationTime, t(u, j);
      else break;
      j = n(a);
    }
  }
  function w(S) {
    if (x = !1, h(S), !y) if (n(u) !== null) y = !0, V(C);
    else {
      var j = n(a);
      j !== null && I(w, j.startTime - S);
    }
  }
  function C(S, j) {
    y = !1, x && (x = !1, p(M), M = -1), v = !0;
    var z = m;
    try {
      for (h(j), f = n(u); f !== null && (!(f.expirationTime > j) || S && !oe()); ) {
        var Q = f.callback;
        if (typeof Q == "function") {
          f.callback = null, m = f.priorityLevel;
          var de = Q(f.expirationTime <= j);
          j = e.unstable_now(), typeof de == "function" ? f.callback = de : f === n(u) && r(u), h(j);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var mo = !0;
      else {
        var sn = n(a);
        sn !== null && I(w, sn.startTime - j), mo = !1;
      }
      return mo;
    } finally {
      f = null, m = z, v = !1;
    }
  }
  var $ = !1, E = null, M = -1, W = 5, F = -1;
  function oe() {
    return !(e.unstable_now() - F < W);
  }
  function B() {
    if (E !== null) {
      var S = e.unstable_now();
      F = S;
      var j = !0;
      try {
        j = E(!0, S);
      } finally {
        j ? ie() : ($ = !1, E = null);
      }
    } else $ = !1;
  }
  var ie;
  if (typeof c == "function") ie = function() {
    c(B);
  };
  else if (typeof MessageChannel < "u") {
    var Oe = new MessageChannel(), Rn = Oe.port2;
    Oe.port1.onmessage = B, ie = function() {
      Rn.postMessage(null);
    };
  } else ie = function() {
    k(B, 0);
  };
  function V(S) {
    E = S, $ || ($ = !0, ie());
  }
  function I(S, j) {
    M = k(function() {
      S(e.unstable_now());
    }, j);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(S) {
    S.callback = null;
  }, e.unstable_continueExecution = function() {
    y || v || (y = !0, V(C));
  }, e.unstable_forceFrameRate = function(S) {
    0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < S ? Math.floor(1e3 / S) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(u);
  }, e.unstable_next = function(S) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var j = 3;
        break;
      default:
        j = m;
    }
    var z = m;
    m = j;
    try {
      return S();
    } finally {
      m = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(S, j) {
    switch (S) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        S = 3;
    }
    var z = m;
    m = S;
    try {
      return j();
    } finally {
      m = z;
    }
  }, e.unstable_scheduleCallback = function(S, j, z) {
    var Q = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? Q + z : Q) : z = Q, S) {
      case 1:
        var de = -1;
        break;
      case 2:
        de = 250;
        break;
      case 5:
        de = 1073741823;
        break;
      case 4:
        de = 1e4;
        break;
      default:
        de = 5e3;
    }
    return de = z + de, S = { id: d++, callback: j, priorityLevel: S, startTime: z, expirationTime: de, sortIndex: -1 }, z > Q ? (S.sortIndex = z, t(a, S), n(u) === null && S === n(a) && (x ? (p(M), M = -1) : x = !0, I(w, z - Q))) : (S.sortIndex = de, t(u, S), y || v || (y = !0, V(C))), S;
  }, e.unstable_shouldYield = oe, e.unstable_wrapCallback = function(S) {
    var j = m;
    return function() {
      var z = m;
      m = j;
      try {
        return S.apply(this, arguments);
      } finally {
        m = z;
      }
    };
  };
})(Ad);
bd.exports = Ad;
var wm = bd.exports;
var xm = T, Ke = wm;
function _(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ud = /* @__PURE__ */ new Set(), Wr = {};
function Tn(e, t) {
  Zn(e, t), Zn(e + "Capture", t);
}
function Zn(e, t) {
  for (Wr[e] = t, e = 0; e < t.length; e++) Ud.add(t[e]);
}
var Nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), es = Object.prototype.hasOwnProperty, km = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, xa = {}, ka = {};
function Sm(e) {
  return es.call(ka, e) ? !0 : es.call(xa, e) ? !1 : km.test(e) ? ka[e] = !0 : (xa[e] = !0, !1);
}
function Cm(e, t, n, r) {
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
function _m(e, t, n, r) {
  if (t === null || typeof t > "u" || Cm(e, t, n, r)) return !0;
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
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ge[e] = new Ne(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ge[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ge[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ge[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ge[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ge[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ge[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ge[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ge[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  ge[t] = new Ne(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(lu, su);
  ge[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(lu, su);
  ge[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ge[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ge.xlinkHref = new Ne("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ge[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function uu(e, t, n, r) {
  var o = ge.hasOwnProperty(t) ? ge[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_m(t, n, o, r) && (n = null), r || o === null ? Sm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ft = xm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, vo = Symbol.for("react.element"), Fn = Symbol.for("react.portal"), Ln = Symbol.for("react.fragment"), au = Symbol.for("react.strict_mode"), ts = Symbol.for("react.profiler"), Wd = Symbol.for("react.provider"), Vd = Symbol.for("react.context"), cu = Symbol.for("react.forward_ref"), ns = Symbol.for("react.suspense"), rs = Symbol.for("react.suspense_list"), du = Symbol.for("react.memo"), Ot = Symbol.for("react.lazy"), Bd = Symbol.for("react.offscreen"), Sa = Symbol.iterator;
function cr(e) {
  return e === null || typeof e != "object" ? null : (e = Sa && e[Sa] || e["@@iterator"], typeof e == "function" ? e : null);
}
var re = Object.assign, yl;
function Cr(e) {
  if (yl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    yl = t && t[1] || "";
  }
  return `
` + yl + e;
}
var gl = !1;
function vl(e, t) {
  if (!e || gl) return "";
  gl = !0;
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
    gl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Cr(e) : "";
}
function Em(e) {
  switch (e.tag) {
    case 5:
      return Cr(e.type);
    case 16:
      return Cr("Lazy");
    case 13:
      return Cr("Suspense");
    case 19:
      return Cr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = vl(e.type, !1), e;
    case 11:
      return e = vl(e.type.render, !1), e;
    case 1:
      return e = vl(e.type, !0), e;
    default:
      return "";
  }
}
function os(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ln:
      return "Fragment";
    case Fn:
      return "Portal";
    case ts:
      return "Profiler";
    case au:
      return "StrictMode";
    case ns:
      return "Suspense";
    case rs:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Vd:
      return (e.displayName || "Context") + ".Consumer";
    case Wd:
      return (e._context.displayName || "Context") + ".Provider";
    case cu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case du:
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
function $m(e) {
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
function Hd(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Pm(e) {
  var t = Hd(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function wo(e) {
  e._valueTracker || (e._valueTracker = Pm(e));
}
function Qd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Hd(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function fi(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function is(e, t) {
  var n = t.checked;
  return re({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Ca(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = en(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Yd(e, t) {
  t = t.checked, t != null && uu(e, "checked", t, !1);
}
function ls(e, t) {
  Yd(e, t);
  var n = en(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ss(e, t.type, n) : t.hasOwnProperty("defaultValue") && ss(e, t.type, en(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function _a(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ss(e, t, n) {
  (t !== "number" || fi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _r = Array.isArray;
function Qn(e, t, n, r) {
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
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return re({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ea(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(_(92));
      if (_r(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: en(n) };
}
function Xd(e, t) {
  var n = en(t.value), r = en(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function $a(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Kd(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Kd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var xo, Gd = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (xo = xo || document.createElement("div"), xo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = xo.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Vr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Rr = {
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
}, Nm = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rr).forEach(function(e) {
  Nm.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Rr[t] = Rr[e];
  });
});
function Jd(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Rr.hasOwnProperty(e) && Rr[e] ? ("" + t).trim() : t + "px";
}
function Zd(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Jd(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Tm = re({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function cs(e, t) {
  if (t) {
    if (Tm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
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
function fu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ps = null, Yn = null, Xn = null;
function Pa(e) {
  if (e = po(e)) {
    if (typeof ps != "function") throw Error(_(280));
    var t = e.stateNode;
    t && (t = Gi(t), ps(e.stateNode, e.type, t));
  }
}
function qd(e) {
  Yn ? Xn ? Xn.push(e) : Xn = [e] : Yn = e;
}
function ef() {
  if (Yn) {
    var e = Yn, t = Xn;
    if (Xn = Yn = null, Pa(e), t) for (e = 0; e < t.length; e++) Pa(t[e]);
  }
}
function tf(e, t) {
  return e(t);
}
function nf() {
}
var wl = !1;
function rf(e, t, n) {
  if (wl) return e(t, n);
  wl = !0;
  try {
    return tf(e, t, n);
  } finally {
    wl = !1, (Yn !== null || Xn !== null) && (nf(), ef());
  }
}
function Br(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Gi(n);
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
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
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
function Mm(e, t, n, r, o, i, l, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (d) {
    this.onError(d);
  }
}
var jr = !1, pi = null, hi = !1, ms = null, Rm = { onError: function(e) {
  jr = !0, pi = e;
} };
function jm(e, t, n, r, o, i, l, s, u) {
  jr = !1, pi = null, Mm.apply(Rm, arguments);
}
function zm(e, t, n, r, o, i, l, s, u) {
  if (jm.apply(this, arguments), jr) {
    if (jr) {
      var a = pi;
      jr = !1, pi = null;
    } else throw Error(_(198));
    hi || (hi = !0, ms = a);
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
function of(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Na(e) {
  if (Mn(e) !== e) throw Error(_(188));
}
function Fm(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Mn(e), t === null) throw Error(_(188));
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
      throw Error(_(188));
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
        if (!l) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function lf(e) {
  return e = Fm(e), e !== null ? sf(e) : null;
}
function sf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = sf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var uf = Ke.unstable_scheduleCallback, Ta = Ke.unstable_cancelCallback, Lm = Ke.unstable_shouldYield, Dm = Ke.unstable_requestPaint, se = Ke.unstable_now, Im = Ke.unstable_getCurrentPriorityLevel, pu = Ke.unstable_ImmediatePriority, af = Ke.unstable_UserBlockingPriority, mi = Ke.unstable_NormalPriority, Om = Ke.unstable_LowPriority, cf = Ke.unstable_IdlePriority, Qi = null, vt = null;
function bm(e) {
  if (vt && typeof vt.onCommitFiberRoot == "function") try {
    vt.onCommitFiberRoot(Qi, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var at = Math.clz32 ? Math.clz32 : Wm, Am = Math.log, Um = Math.LN2;
function Wm(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Am(e) / Um | 0) | 0;
}
var ko = 64, So = 4194304;
function Er(e) {
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
function yi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? r = Er(s) : (i &= l, i !== 0 && (r = Er(i)));
  } else l = n & ~o, l !== 0 ? r = Er(l) : i !== 0 && (r = Er(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - at(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function Vm(e, t) {
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
function Bm(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - at(i), s = 1 << l, u = o[l];
    u === -1 ? (!(s & n) || s & r) && (o[l] = Vm(s, t)) : u <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function ys(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function df() {
  var e = ko;
  return ko <<= 1, !(ko & 4194240) && (ko = 64), e;
}
function xl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function co(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - at(t), e[t] = n;
}
function Hm(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - at(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function hu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - at(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var H = 0;
function ff(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var pf, mu, hf, mf, yf, gs = !1, Co = [], Qt = null, Yt = null, Xt = null, Hr = /* @__PURE__ */ new Map(), Qr = /* @__PURE__ */ new Map(), At = [], Qm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
      Hr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Qr.delete(t.pointerId);
  }
}
function fr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = po(t), t !== null && mu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Ym(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Qt = fr(Qt, e, t, n, r, o), !0;
    case "dragenter":
      return Yt = fr(Yt, e, t, n, r, o), !0;
    case "mouseover":
      return Xt = fr(Xt, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Hr.set(i, fr(Hr.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Qr.set(i, fr(Qr.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function gf(e) {
  var t = gn(e.target);
  if (t !== null) {
    var n = Mn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = of(n), t !== null) {
          e.blockedOn = t, yf(e.priority, function() {
            hf(n);
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
function Ho(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = vs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      fs = r, n.target.dispatchEvent(r), fs = null;
    } else return t = po(n), t !== null && mu(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ra(e, t, n) {
  Ho(e) && n.delete(t);
}
function Xm() {
  gs = !1, Qt !== null && Ho(Qt) && (Qt = null), Yt !== null && Ho(Yt) && (Yt = null), Xt !== null && Ho(Xt) && (Xt = null), Hr.forEach(Ra), Qr.forEach(Ra);
}
function pr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, gs || (gs = !0, Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, Xm)));
}
function Yr(e) {
  function t(o) {
    return pr(o, e);
  }
  if (0 < Co.length) {
    pr(Co[0], e);
    for (var n = 1; n < Co.length; n++) {
      var r = Co[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Qt !== null && pr(Qt, e), Yt !== null && pr(Yt, e), Xt !== null && pr(Xt, e), Hr.forEach(t), Qr.forEach(t), n = 0; n < At.length; n++) r = At[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < At.length && (n = At[0], n.blockedOn === null); ) gf(n), n.blockedOn === null && At.shift();
}
var Kn = Ft.ReactCurrentBatchConfig, gi = !0;
function Km(e, t, n, r) {
  var o = H, i = Kn.transition;
  Kn.transition = null;
  try {
    H = 1, yu(e, t, n, r);
  } finally {
    H = o, Kn.transition = i;
  }
}
function Gm(e, t, n, r) {
  var o = H, i = Kn.transition;
  Kn.transition = null;
  try {
    H = 4, yu(e, t, n, r);
  } finally {
    H = o, Kn.transition = i;
  }
}
function yu(e, t, n, r) {
  if (gi) {
    var o = vs(e, t, n, r);
    if (o === null) Ml(e, t, r, vi, n), Ma(e, r);
    else if (Ym(o, e, t, n, r)) r.stopPropagation();
    else if (Ma(e, r), t & 4 && -1 < Qm.indexOf(e)) {
      for (; o !== null; ) {
        var i = po(o);
        if (i !== null && pf(i), i = vs(e, t, n, r), i === null && Ml(e, t, r, vi, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ml(e, t, r, null, n);
  }
}
var vi = null;
function vs(e, t, n, r) {
  if (vi = null, e = fu(r), e = gn(e), e !== null) if (t = Mn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = of(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return vi = e, null;
}
function vf(e) {
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
      switch (Im()) {
        case pu:
          return 1;
        case af:
          return 4;
        case mi:
        case Om:
          return 16;
        case cf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Wt = null, gu = null, Qo = null;
function wf() {
  if (Qo) return Qo;
  var e, t = gu, n = t.length, r, o = "value" in Wt ? Wt.value : Wt.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++) ;
  return Qo = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Yo(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function _o() {
  return !0;
}
function ja() {
  return !1;
}
function Je(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? _o : ja, this.isPropagationStopped = ja, this;
  }
  return re(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = _o);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = _o);
  }, persist: function() {
  }, isPersistent: _o }), t;
}
var lr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, vu = Je(lr), fo = re({}, lr, { view: 0, detail: 0 }), Jm = Je(fo), kl, Sl, hr, Yi = re({}, fo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: wu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== hr && (hr && e.type === "mousemove" ? (kl = e.screenX - hr.screenX, Sl = e.screenY - hr.screenY) : Sl = kl = 0, hr = e), kl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Sl;
} }), za = Je(Yi), Zm = re({}, Yi, { dataTransfer: 0 }), qm = Je(Zm), e0 = re({}, fo, { relatedTarget: 0 }), Cl = Je(e0), t0 = re({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), n0 = Je(t0), r0 = re({}, lr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), o0 = Je(r0), i0 = re({}, lr, { data: 0 }), Fa = Je(i0), l0 = {
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
}, s0 = {
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
}, u0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function a0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = u0[e]) ? !!t[e] : !1;
}
function wu() {
  return a0;
}
var c0 = re({}, fo, { key: function(e) {
  if (e.key) {
    var t = l0[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Yo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? s0[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: wu, charCode: function(e) {
  return e.type === "keypress" ? Yo(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Yo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), d0 = Je(c0), f0 = re({}, Yi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), La = Je(f0), p0 = re({}, fo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: wu }), h0 = Je(p0), m0 = re({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), y0 = Je(m0), g0 = re({}, Yi, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), v0 = Je(g0), w0 = [9, 13, 27, 32], xu = Nt && "CompositionEvent" in window, zr = null;
Nt && "documentMode" in document && (zr = document.documentMode);
var x0 = Nt && "TextEvent" in window && !zr, xf = Nt && (!xu || zr && 8 < zr && 11 >= zr), Da = " ", Ia = !1;
function kf(e, t) {
  switch (e) {
    case "keyup":
      return w0.indexOf(t.keyCode) !== -1;
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
function Sf(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Dn = !1;
function k0(e, t) {
  switch (e) {
    case "compositionend":
      return Sf(t);
    case "keypress":
      return t.which !== 32 ? null : (Ia = !0, Da);
    case "textInput":
      return e = t.data, e === Da && Ia ? null : e;
    default:
      return null;
  }
}
function S0(e, t) {
  if (Dn) return e === "compositionend" || !xu && kf(e, t) ? (e = wf(), Qo = gu = Wt = null, Dn = !1, e) : null;
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
      return xf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var C0 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Oa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!C0[e.type] : t === "textarea";
}
function Cf(e, t, n, r) {
  qd(r), t = wi(t, "onChange"), 0 < t.length && (n = new vu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Fr = null, Xr = null;
function _0(e) {
  Ff(e, 0);
}
function Xi(e) {
  var t = bn(e);
  if (Qd(t)) return e;
}
function E0(e, t) {
  if (e === "change") return t;
}
var _f = !1;
if (Nt) {
  var _l;
  if (Nt) {
    var El = "oninput" in document;
    if (!El) {
      var ba = document.createElement("div");
      ba.setAttribute("oninput", "return;"), El = typeof ba.oninput == "function";
    }
    _l = El;
  } else _l = !1;
  _f = _l && (!document.documentMode || 9 < document.documentMode);
}
function Aa() {
  Fr && (Fr.detachEvent("onpropertychange", Ef), Xr = Fr = null);
}
function Ef(e) {
  if (e.propertyName === "value" && Xi(Xr)) {
    var t = [];
    Cf(t, Xr, e, fu(e)), rf(_0, t);
  }
}
function $0(e, t, n) {
  e === "focusin" ? (Aa(), Fr = t, Xr = n, Fr.attachEvent("onpropertychange", Ef)) : e === "focusout" && Aa();
}
function P0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Xi(Xr);
}
function N0(e, t) {
  if (e === "click") return Xi(t);
}
function T0(e, t) {
  if (e === "input" || e === "change") return Xi(t);
}
function M0(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var dt = typeof Object.is == "function" ? Object.is : M0;
function Kr(e, t) {
  if (dt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!es.call(t, o) || !dt(e[o], t[o])) return !1;
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
function $f(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $f(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Pf() {
  for (var e = window, t = fi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = fi(e.document);
  }
  return t;
}
function ku(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function R0(e) {
  var t = Pf(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && $f(n.ownerDocument.documentElement, n)) {
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
var j0 = Nt && "documentMode" in document && 11 >= document.documentMode, In = null, ws = null, Lr = null, xs = !1;
function Va(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  xs || In == null || In !== fi(r) || (r = In, "selectionStart" in r && ku(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Lr && Kr(Lr, r) || (Lr = r, r = wi(ws, "onSelect"), 0 < r.length && (t = new vu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = In)));
}
function Eo(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var On = { animationend: Eo("Animation", "AnimationEnd"), animationiteration: Eo("Animation", "AnimationIteration"), animationstart: Eo("Animation", "AnimationStart"), transitionend: Eo("Transition", "TransitionEnd") }, $l = {}, Nf = {};
Nt && (Nf = document.createElement("div").style, "AnimationEvent" in window || (delete On.animationend.animation, delete On.animationiteration.animation, delete On.animationstart.animation), "TransitionEvent" in window || delete On.transitionend.transition);
function Ki(e) {
  if ($l[e]) return $l[e];
  if (!On[e]) return e;
  var t = On[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Nf) return $l[e] = t[n];
  return e;
}
var Tf = Ki("animationend"), Mf = Ki("animationiteration"), Rf = Ki("animationstart"), jf = Ki("transitionend"), zf = /* @__PURE__ */ new Map(), Ba = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function rn(e, t) {
  zf.set(e, t), Tn(t, [e]);
}
for (var Pl = 0; Pl < Ba.length; Pl++) {
  var Nl = Ba[Pl], z0 = Nl.toLowerCase(), F0 = Nl[0].toUpperCase() + Nl.slice(1);
  rn(z0, "on" + F0);
}
rn(Tf, "onAnimationEnd");
rn(Mf, "onAnimationIteration");
rn(Rf, "onAnimationStart");
rn("dblclick", "onDoubleClick");
rn("focusin", "onFocus");
rn("focusout", "onBlur");
rn(jf, "onTransitionEnd");
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
var $r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), L0 = new Set("cancel close invalid load scroll toggle".split(" ").concat($r));
function Ha(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, zm(r, t, void 0, e), e.currentTarget = null;
}
function Ff(e, t) {
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
  if (hi) throw e = ms, hi = !1, ms = null, e;
}
function G(e, t) {
  var n = t[Es];
  n === void 0 && (n = t[Es] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Lf(t, e, 2, !1), n.add(r));
}
function Tl(e, t, n) {
  var r = 0;
  t && (r |= 4), Lf(n, e, r, t);
}
var $o = "_reactListening" + Math.random().toString(36).slice(2);
function Gr(e) {
  if (!e[$o]) {
    e[$o] = !0, Ud.forEach(function(n) {
      n !== "selectionchange" && (L0.has(n) || Tl(n, !1, e), Tl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[$o] || (t[$o] = !0, Tl("selectionchange", !1, t));
  }
}
function Lf(e, t, n, r) {
  switch (vf(t)) {
    case 1:
      var o = Km;
      break;
    case 4:
      o = Gm;
      break;
    default:
      o = yu;
  }
  n = o.bind(null, t, n, e), o = void 0, !hs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Ml(e, t, n, r, o) {
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
  rf(function() {
    var a = i, d = fu(n), f = [];
    e: {
      var m = zf.get(e);
      if (m !== void 0) {
        var v = vu, y = e;
        switch (e) {
          case "keypress":
            if (Yo(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = d0;
            break;
          case "focusin":
            y = "focus", v = Cl;
            break;
          case "focusout":
            y = "blur", v = Cl;
            break;
          case "beforeblur":
          case "afterblur":
            v = Cl;
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
            v = za;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = qm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = h0;
            break;
          case Tf:
          case Mf:
          case Rf:
            v = n0;
            break;
          case jf:
            v = y0;
            break;
          case "scroll":
            v = Jm;
            break;
          case "wheel":
            v = v0;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = o0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = La;
        }
        var x = (t & 4) !== 0, k = !x && e === "scroll", p = x ? m !== null ? m + "Capture" : null : m;
        x = [];
        for (var c = a, h; c !== null; ) {
          h = c;
          var w = h.stateNode;
          if (h.tag === 5 && w !== null && (h = w, p !== null && (w = Br(c, p), w != null && x.push(Jr(c, w, h)))), k) break;
          c = c.return;
        }
        0 < x.length && (m = new v(m, y, null, n, d), f.push({ event: m, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", m && n !== fs && (y = n.relatedTarget || n.fromElement) && (gn(y) || y[Tt])) break e;
        if ((v || m) && (m = d.window === d ? d : (m = d.ownerDocument) ? m.defaultView || m.parentWindow : window, v ? (y = n.relatedTarget || n.toElement, v = a, y = y ? gn(y) : null, y !== null && (k = Mn(y), y !== k || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null, y = a), v !== y)) {
          if (x = za, w = "onMouseLeave", p = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (x = La, w = "onPointerLeave", p = "onPointerEnter", c = "pointer"), k = v == null ? m : bn(v), h = y == null ? m : bn(y), m = new x(w, c + "leave", v, n, d), m.target = k, m.relatedTarget = h, w = null, gn(d) === a && (x = new x(p, c + "enter", y, n, d), x.target = h, x.relatedTarget = k, w = x), k = w, v && y) t: {
            for (x = v, p = y, c = 0, h = x; h; h = jn(h)) c++;
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
          v !== null && Qa(f, m, v, x, !1), y !== null && k !== null && Qa(f, k, y, x, !0);
        }
      }
      e: {
        if (m = a ? bn(a) : window, v = m.nodeName && m.nodeName.toLowerCase(), v === "select" || v === "input" && m.type === "file") var C = E0;
        else if (Oa(m)) if (_f) C = T0;
        else {
          C = P0;
          var $ = $0;
        }
        else (v = m.nodeName) && v.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (C = N0);
        if (C && (C = C(e, a))) {
          Cf(f, C, n, d);
          break e;
        }
        $ && $(e, m, a), e === "focusout" && ($ = m._wrapperState) && $.controlled && m.type === "number" && ss(m, "number", m.value);
      }
      switch ($ = a ? bn(a) : window, e) {
        case "focusin":
          (Oa($) || $.contentEditable === "true") && (In = $, ws = a, Lr = null);
          break;
        case "focusout":
          Lr = ws = In = null;
          break;
        case "mousedown":
          xs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          xs = !1, Va(f, n, d);
          break;
        case "selectionchange":
          if (j0) break;
        case "keydown":
        case "keyup":
          Va(f, n, d);
      }
      var E;
      if (xu) e: {
        switch (e) {
          case "compositionstart":
            var M = "onCompositionStart";
            break e;
          case "compositionend":
            M = "onCompositionEnd";
            break e;
          case "compositionupdate":
            M = "onCompositionUpdate";
            break e;
        }
        M = void 0;
      }
      else Dn ? kf(e, n) && (M = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      M && (xf && n.locale !== "ko" && (Dn || M !== "onCompositionStart" ? M === "onCompositionEnd" && Dn && (E = wf()) : (Wt = d, gu = "value" in Wt ? Wt.value : Wt.textContent, Dn = !0)), $ = wi(a, M), 0 < $.length && (M = new Fa(M, e, null, n, d), f.push({ event: M, listeners: $ }), E ? M.data = E : (E = Sf(n), E !== null && (M.data = E)))), (E = x0 ? k0(e, n) : S0(e, n)) && (a = wi(a, "onBeforeInput"), 0 < a.length && (d = new Fa("onBeforeInput", "beforeinput", null, n, d), f.push({ event: d, listeners: a }), d.data = E));
    }
    Ff(f, t);
  });
}
function Jr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function wi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Br(e, n), i != null && r.unshift(Jr(e, i, o)), i = Br(e, t), i != null && r.push(Jr(e, i, o))), e = e.return;
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
    s.tag === 5 && a !== null && (s = a, o ? (u = Br(n, i), u != null && l.unshift(Jr(n, u, s))) : o || (u = Br(n, i), u != null && l.push(Jr(n, u, s)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var D0 = /\r\n?/g, I0 = /\u0000|\uFFFD/g;
function Ya(e) {
  return (typeof e == "string" ? e : "" + e).replace(D0, `
`).replace(I0, "");
}
function Po(e, t, n) {
  if (t = Ya(t), Ya(e) !== t && n) throw Error(_(425));
}
function xi() {
}
var ks = null, Ss = null;
function Cs(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var _s = typeof setTimeout == "function" ? setTimeout : void 0, O0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Xa = typeof Promise == "function" ? Promise : void 0, b0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xa < "u" ? function(e) {
  return Xa.resolve(null).then(e).catch(A0);
} : _s;
function A0(e) {
  setTimeout(function() {
    throw e;
  });
}
function Rl(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Yr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Yr(t);
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
var sr = Math.random().toString(36).slice(2), gt = "__reactFiber$" + sr, Zr = "__reactProps$" + sr, Tt = "__reactContainer$" + sr, Es = "__reactEvents$" + sr, U0 = "__reactListeners$" + sr, W0 = "__reactHandles$" + sr;
function gn(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Tt] || n[gt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ka(e); e !== null; ) {
        if (n = e[gt]) return n;
        e = Ka(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function po(e) {
  return e = e[gt] || e[Tt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function Gi(e) {
  return e[Zr] || null;
}
var $s = [], An = -1;
function on(e) {
  return { current: e };
}
function Z(e) {
  0 > An || (e.current = $s[An], $s[An] = null, An--);
}
function K(e, t) {
  An++, $s[An] = e.current, e.current = t;
}
var tn = {}, Ce = on(tn), Le = on(!1), _n = tn;
function qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return tn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function De(e) {
  return e = e.childContextTypes, e != null;
}
function ki() {
  Z(Le), Z(Ce);
}
function Ga(e, t, n) {
  if (Ce.current !== tn) throw Error(_(168));
  K(Ce, t), K(Le, n);
}
function Df(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(_(108, $m(e) || "Unknown", o));
  return re({}, n, r);
}
function Si(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || tn, _n = Ce.current, K(Ce, e), K(Le, Le.current), !0;
}
function Ja(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n ? (e = Df(e, t, _n), r.__reactInternalMemoizedMergedChildContext = e, Z(Le), Z(Ce), K(Ce, e)) : Z(Le), K(Le, n);
}
var _t = null, Ji = !1, jl = !1;
function If(e) {
  _t === null ? _t = [e] : _t.push(e);
}
function V0(e) {
  Ji = !0, If(e);
}
function ln() {
  if (!jl && _t !== null) {
    jl = !0;
    var e = 0, t = H;
    try {
      var n = _t;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      _t = null, Ji = !1;
    } catch (o) {
      throw _t !== null && (_t = _t.slice(e + 1)), uf(pu, ln), o;
    } finally {
      H = t, jl = !1;
    }
  }
  return null;
}
var Un = [], Wn = 0, Ci = null, _i = 0, Ze = [], qe = 0, En = null, Et = 1, $t = "";
function dn(e, t) {
  Un[Wn++] = _i, Un[Wn++] = Ci, Ci = e, _i = t;
}
function Of(e, t, n) {
  Ze[qe++] = Et, Ze[qe++] = $t, Ze[qe++] = En, En = e;
  var r = Et;
  e = $t;
  var o = 32 - at(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - at(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, Et = 1 << 32 - at(t) + o | n << o | r, $t = i + e;
  } else Et = 1 << i | n << o | r, $t = e;
}
function Su(e) {
  e.return !== null && (dn(e, 1), Of(e, 1, 0));
}
function Cu(e) {
  for (; e === Ci; ) Ci = Un[--Wn], Un[Wn] = null, _i = Un[--Wn], Un[Wn] = null;
  for (; e === En; ) En = Ze[--qe], Ze[qe] = null, $t = Ze[--qe], Ze[qe] = null, Et = Ze[--qe], Ze[qe] = null;
}
var Xe = null, Ye = null, ee = !1, st = null;
function bf(e, t) {
  var n = et(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Za(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Xe = e, Ye = Kt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Xe = e, Ye = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = En !== null ? { id: Et, overflow: $t } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = et(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Xe = e, Ye = null, !0) : !1;
    default:
      return !1;
  }
}
function Ps(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ns(e) {
  if (ee) {
    var t = Ye;
    if (t) {
      var n = t;
      if (!Za(e, t)) {
        if (Ps(e)) throw Error(_(418));
        t = Kt(n.nextSibling);
        var r = Xe;
        t && Za(e, t) ? bf(r, n) : (e.flags = e.flags & -4097 | 2, ee = !1, Xe = e);
      }
    } else {
      if (Ps(e)) throw Error(_(418));
      e.flags = e.flags & -4097 | 2, ee = !1, Xe = e;
    }
  }
}
function qa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Xe = e;
}
function No(e) {
  if (e !== Xe) return !1;
  if (!ee) return qa(e), ee = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Cs(e.type, e.memoizedProps)), t && (t = Ye)) {
    if (Ps(e)) throw Af(), Error(_(418));
    for (; t; ) bf(e, t), t = Kt(t.nextSibling);
  }
  if (qa(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ye = Kt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ye = null;
    }
  } else Ye = Xe ? Kt(e.stateNode.nextSibling) : null;
  return !0;
}
function Af() {
  for (var e = Ye; e; ) e = Kt(e.nextSibling);
}
function er() {
  Ye = Xe = null, ee = !1;
}
function _u(e) {
  st === null ? st = [e] : st.push(e);
}
var B0 = Ft.ReactCurrentBatchConfig;
function mr(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var s = o.refs;
        l === null ? delete s[i] : s[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function To(e, t) {
  throw e = Object.prototype.toString.call(t), Error(_(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function ec(e) {
  var t = e._init;
  return t(e._payload);
}
function Uf(e) {
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
    return c === null || c.tag !== 6 ? (c = bl(h, p.mode, w), c.return = p, c) : (c = o(c, h), c.return = p, c);
  }
  function u(p, c, h, w) {
    var C = h.type;
    return C === Ln ? d(p, c, h.props.children, w, h.key) : c !== null && (c.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Ot && ec(C) === c.type) ? (w = o(c, h.props), w.ref = mr(p, c, h), w.return = p, w) : (w = ei(h.type, h.key, h.props, null, p.mode, w), w.ref = mr(p, c, h), w.return = p, w);
  }
  function a(p, c, h, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== h.containerInfo || c.stateNode.implementation !== h.implementation ? (c = Al(h, p.mode, w), c.return = p, c) : (c = o(c, h.children || []), c.return = p, c);
  }
  function d(p, c, h, w, C) {
    return c === null || c.tag !== 7 ? (c = Cn(h, p.mode, w, C), c.return = p, c) : (c = o(c, h), c.return = p, c);
  }
  function f(p, c, h) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = bl("" + c, p.mode, h), c.return = p, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case vo:
          return h = ei(c.type, c.key, c.props, null, p.mode, h), h.ref = mr(p, null, c), h.return = p, h;
        case Fn:
          return c = Al(c, p.mode, h), c.return = p, c;
        case Ot:
          var w = c._init;
          return f(p, w(c._payload), h);
      }
      if (_r(c) || cr(c)) return c = Cn(c, p.mode, h, null), c.return = p, c;
      To(p, c);
    }
    return null;
  }
  function m(p, c, h, w) {
    var C = c !== null ? c.key : null;
    if (typeof h == "string" && h !== "" || typeof h == "number") return C !== null ? null : s(p, c, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case vo:
          return h.key === C ? u(p, c, h, w) : null;
        case Fn:
          return h.key === C ? a(p, c, h, w) : null;
        case Ot:
          return C = h._init, m(
            p,
            c,
            C(h._payload),
            w
          );
      }
      if (_r(h) || cr(h)) return C !== null ? null : d(p, c, h, w, null);
      To(p, h);
    }
    return null;
  }
  function v(p, c, h, w, C) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return p = p.get(h) || null, s(c, p, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case vo:
          return p = p.get(w.key === null ? h : w.key) || null, u(c, p, w, C);
        case Fn:
          return p = p.get(w.key === null ? h : w.key) || null, a(c, p, w, C);
        case Ot:
          var $ = w._init;
          return v(p, c, h, $(w._payload), C);
      }
      if (_r(w) || cr(w)) return p = p.get(h) || null, d(c, p, w, C, null);
      To(c, w);
    }
    return null;
  }
  function y(p, c, h, w) {
    for (var C = null, $ = null, E = c, M = c = 0, W = null; E !== null && M < h.length; M++) {
      E.index > M ? (W = E, E = null) : W = E.sibling;
      var F = m(p, E, h[M], w);
      if (F === null) {
        E === null && (E = W);
        break;
      }
      e && E && F.alternate === null && t(p, E), c = i(F, c, M), $ === null ? C = F : $.sibling = F, $ = F, E = W;
    }
    if (M === h.length) return n(p, E), ee && dn(p, M), C;
    if (E === null) {
      for (; M < h.length; M++) E = f(p, h[M], w), E !== null && (c = i(E, c, M), $ === null ? C = E : $.sibling = E, $ = E);
      return ee && dn(p, M), C;
    }
    for (E = r(p, E); M < h.length; M++) W = v(E, p, M, h[M], w), W !== null && (e && W.alternate !== null && E.delete(W.key === null ? M : W.key), c = i(W, c, M), $ === null ? C = W : $.sibling = W, $ = W);
    return e && E.forEach(function(oe) {
      return t(p, oe);
    }), ee && dn(p, M), C;
  }
  function x(p, c, h, w) {
    var C = cr(h);
    if (typeof C != "function") throw Error(_(150));
    if (h = C.call(h), h == null) throw Error(_(151));
    for (var $ = C = null, E = c, M = c = 0, W = null, F = h.next(); E !== null && !F.done; M++, F = h.next()) {
      E.index > M ? (W = E, E = null) : W = E.sibling;
      var oe = m(p, E, F.value, w);
      if (oe === null) {
        E === null && (E = W);
        break;
      }
      e && E && oe.alternate === null && t(p, E), c = i(oe, c, M), $ === null ? C = oe : $.sibling = oe, $ = oe, E = W;
    }
    if (F.done) return n(
      p,
      E
    ), ee && dn(p, M), C;
    if (E === null) {
      for (; !F.done; M++, F = h.next()) F = f(p, F.value, w), F !== null && (c = i(F, c, M), $ === null ? C = F : $.sibling = F, $ = F);
      return ee && dn(p, M), C;
    }
    for (E = r(p, E); !F.done; M++, F = h.next()) F = v(E, p, M, F.value, w), F !== null && (e && F.alternate !== null && E.delete(F.key === null ? M : F.key), c = i(F, c, M), $ === null ? C = F : $.sibling = F, $ = F);
    return e && E.forEach(function(B) {
      return t(p, B);
    }), ee && dn(p, M), C;
  }
  function k(p, c, h, w) {
    if (typeof h == "object" && h !== null && h.type === Ln && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case vo:
          e: {
            for (var C = h.key, $ = c; $ !== null; ) {
              if ($.key === C) {
                if (C = h.type, C === Ln) {
                  if ($.tag === 7) {
                    n(p, $.sibling), c = o($, h.props.children), c.return = p, p = c;
                    break e;
                  }
                } else if ($.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Ot && ec(C) === $.type) {
                  n(p, $.sibling), c = o($, h.props), c.ref = mr(p, $, h), c.return = p, p = c;
                  break e;
                }
                n(p, $);
                break;
              } else t(p, $);
              $ = $.sibling;
            }
            h.type === Ln ? (c = Cn(h.props.children, p.mode, w, h.key), c.return = p, p = c) : (w = ei(h.type, h.key, h.props, null, p.mode, w), w.ref = mr(p, c, h), w.return = p, p = w);
          }
          return l(p);
        case Fn:
          e: {
            for ($ = h.key; c !== null; ) {
              if (c.key === $) if (c.tag === 4 && c.stateNode.containerInfo === h.containerInfo && c.stateNode.implementation === h.implementation) {
                n(p, c.sibling), c = o(c, h.children || []), c.return = p, p = c;
                break e;
              } else {
                n(p, c);
                break;
              }
              else t(p, c);
              c = c.sibling;
            }
            c = Al(h, p.mode, w), c.return = p, p = c;
          }
          return l(p);
        case Ot:
          return $ = h._init, k(p, c, $(h._payload), w);
      }
      if (_r(h)) return y(p, c, h, w);
      if (cr(h)) return x(p, c, h, w);
      To(p, h);
    }
    return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, c !== null && c.tag === 6 ? (n(p, c.sibling), c = o(c, h), c.return = p, p = c) : (n(p, c), c = bl(h, p.mode, w), c.return = p, p = c), l(p)) : n(p, c);
  }
  return k;
}
var tr = Uf(!0), Wf = Uf(!1), Ei = on(null), $i = null, Vn = null, Eu = null;
function $u() {
  Eu = Vn = $i = null;
}
function Pu(e) {
  var t = Ei.current;
  Z(Ei), e._currentValue = t;
}
function Ts(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Gn(e, t) {
  $i = e, Eu = Vn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Fe = !0), e.firstContext = null);
}
function nt(e) {
  var t = e._currentValue;
  if (Eu !== e) if (e = { context: e, memoizedValue: t, next: null }, Vn === null) {
    if ($i === null) throw Error(_(308));
    Vn = e, $i.dependencies = { lanes: 0, firstContext: e };
  } else Vn = Vn.next = e;
  return t;
}
var vn = null;
function Nu(e) {
  vn === null ? vn = [e] : vn.push(e);
}
function Vf(e, t, n, r) {
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
function Tu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Bf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Pt(e, t) {
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
function Xo(e, t, n) {
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
function Pi(e, t, n, r) {
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
      var m = s.lane, v = s.eventTime;
      if ((r & m) === m) {
        d !== null && (d = d.next = {
          eventTime: v,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var y = e, x = s;
          switch (m = t, v = n, x.tag) {
            case 1:
              if (y = x.payload, typeof y == "function") {
                f = y.call(v, f, m);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = x.payload, m = typeof y == "function" ? y.call(v, f, m) : y, m == null) break e;
              f = re({}, f, m);
              break e;
            case 2:
              bt = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && (e.flags |= 64, m = o.effects, m === null ? o.effects = [s] : m.push(s));
      } else v = { eventTime: v, lane: m, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, d === null ? (a = d = v, u = f) : d = d.next = v, l |= m;
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
    Pn |= l, e.lanes = l, e.memoizedState = f;
  }
}
function nc(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(_(191, o));
      o.call(r);
    }
  }
}
var ho = {}, wt = on(ho), qr = on(ho), eo = on(ho);
function wn(e) {
  if (e === ho) throw Error(_(174));
  return e;
}
function Mu(e, t) {
  switch (K(eo, t), K(qr, e), K(wt, ho), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : as(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = as(t, e);
  }
  Z(wt), K(wt, t);
}
function nr() {
  Z(wt), Z(qr), Z(eo);
}
function Hf(e) {
  wn(eo.current);
  var t = wn(wt.current), n = as(t, e.type);
  t !== n && (K(qr, e), K(wt, n));
}
function Ru(e) {
  qr.current === e && (Z(wt), Z(qr));
}
var te = on(0);
function Ni(e) {
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
var zl = [];
function ju() {
  for (var e = 0; e < zl.length; e++) zl[e]._workInProgressVersionPrimary = null;
  zl.length = 0;
}
var Ko = Ft.ReactCurrentDispatcher, Fl = Ft.ReactCurrentBatchConfig, $n = 0, ne = null, ae = null, fe = null, Ti = !1, Dr = !1, to = 0, H0 = 0;
function xe() {
  throw Error(_(321));
}
function zu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!dt(e[n], t[n])) return !1;
  return !0;
}
function Fu(e, t, n, r, o, i) {
  if ($n = i, ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ko.current = e === null || e.memoizedState === null ? K0 : G0, e = n(r, o), Dr) {
    i = 0;
    do {
      if (Dr = !1, to = 0, 25 <= i) throw Error(_(301));
      i += 1, fe = ae = null, t.updateQueue = null, Ko.current = J0, e = n(r, o);
    } while (Dr);
  }
  if (Ko.current = Mi, t = ae !== null && ae.next !== null, $n = 0, fe = ae = ne = null, Ti = !1, t) throw Error(_(300));
  return e;
}
function Lu() {
  var e = to !== 0;
  return to = 0, e;
}
function yt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return fe === null ? ne.memoizedState = fe = e : fe = fe.next = e, fe;
}
function rt() {
  if (ae === null) {
    var e = ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = fe === null ? ne.memoizedState : fe.next;
  if (t !== null) fe = t, ae = e;
  else {
    if (e === null) throw Error(_(310));
    ae = e, e = { memoizedState: ae.memoizedState, baseState: ae.baseState, baseQueue: ae.baseQueue, queue: ae.queue, next: null }, fe === null ? ne.memoizedState = fe = e : fe = fe.next = e;
  }
  return fe;
}
function no(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ll(e) {
  var t = rt(), n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = ae, o = r.baseQueue, i = n.pending;
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
        u === null ? (s = u = f, l = r) : u = u.next = f, ne.lanes |= d, Pn |= d;
      }
      a = a.next;
    } while (a !== null && a !== i);
    u === null ? l = r : u.next = s, dt(r, t.memoizedState) || (Fe = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = u, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, ne.lanes |= i, Pn |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Dl(e) {
  var t = rt(), n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      i = e(i, l.action), l = l.next;
    while (l !== o);
    dt(i, t.memoizedState) || (Fe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Qf() {
}
function Yf(e, t) {
  var n = ne, r = rt(), o = t(), i = !dt(r.memoizedState, o);
  if (i && (r.memoizedState = o, Fe = !0), r = r.queue, Du(Gf.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || fe !== null && fe.memoizedState.tag & 1) {
    if (n.flags |= 2048, ro(9, Kf.bind(null, n, r, o, t), void 0, null), pe === null) throw Error(_(349));
    $n & 30 || Xf(n, t, o);
  }
  return o;
}
function Xf(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ne.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Kf(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Jf(t) && Zf(e);
}
function Gf(e, t, n) {
  return n(function() {
    Jf(t) && Zf(e);
  });
}
function Jf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !dt(e, n);
  } catch {
    return !0;
  }
}
function Zf(e) {
  var t = Mt(e, 1);
  t !== null && ct(t, e, 1, -1);
}
function rc(e) {
  var t = yt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: no, lastRenderedState: e }, t.queue = e, e = e.dispatch = X0.bind(null, ne, e), [t.memoizedState, e];
}
function ro(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ne.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function qf() {
  return rt().memoizedState;
}
function Go(e, t, n, r) {
  var o = yt();
  ne.flags |= e, o.memoizedState = ro(1 | t, n, void 0, r === void 0 ? null : r);
}
function Zi(e, t, n, r) {
  var o = rt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ae !== null) {
    var l = ae.memoizedState;
    if (i = l.destroy, r !== null && zu(r, l.deps)) {
      o.memoizedState = ro(t, n, i, r);
      return;
    }
  }
  ne.flags |= e, o.memoizedState = ro(1 | t, n, i, r);
}
function oc(e, t) {
  return Go(8390656, 8, e, t);
}
function Du(e, t) {
  return Zi(2048, 8, e, t);
}
function ep(e, t) {
  return Zi(4, 2, e, t);
}
function tp(e, t) {
  return Zi(4, 4, e, t);
}
function np(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function rp(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Zi(4, 4, np.bind(null, t, e), n);
}
function Iu() {
}
function op(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function ip(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function lp(e, t, n) {
  return $n & 21 ? (dt(n, t) || (n = df(), ne.lanes |= n, Pn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Fe = !0), e.memoizedState = n);
}
function Q0(e, t) {
  var n = H;
  H = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Fl.transition;
  Fl.transition = {};
  try {
    e(!1), t();
  } finally {
    H = n, Fl.transition = r;
  }
}
function sp() {
  return rt().memoizedState;
}
function Y0(e, t, n) {
  var r = Zt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, up(e)) ap(t, n);
  else if (n = Vf(e, t, n, r), n !== null) {
    var o = $e();
    ct(n, e, r, o), cp(n, t, r);
  }
}
function X0(e, t, n) {
  var r = Zt(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (up(e)) ap(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var l = t.lastRenderedState, s = i(l, n);
      if (o.hasEagerState = !0, o.eagerState = s, dt(s, l)) {
        var u = t.interleaved;
        u === null ? (o.next = o, Nu(t)) : (o.next = u.next, u.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = Vf(e, t, o, r), n !== null && (o = $e(), ct(n, e, r, o), cp(n, t, r));
  }
}
function up(e) {
  var t = e.alternate;
  return e === ne || t !== null && t === ne;
}
function ap(e, t) {
  Dr = Ti = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function cp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, hu(e, n);
  }
}
var Mi = { readContext: nt, useCallback: xe, useContext: xe, useEffect: xe, useImperativeHandle: xe, useInsertionEffect: xe, useLayoutEffect: xe, useMemo: xe, useReducer: xe, useRef: xe, useState: xe, useDebugValue: xe, useDeferredValue: xe, useTransition: xe, useMutableSource: xe, useSyncExternalStore: xe, useId: xe, unstable_isNewReconciler: !1 }, K0 = { readContext: nt, useCallback: function(e, t) {
  return yt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: nt, useEffect: oc, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Go(
    4194308,
    4,
    np.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Go(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Go(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = yt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = yt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Y0.bind(null, ne, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = yt();
  return e = { current: e }, t.memoizedState = e;
}, useState: rc, useDebugValue: Iu, useDeferredValue: function(e) {
  return yt().memoizedState = e;
}, useTransition: function() {
  var e = rc(!1), t = e[0];
  return e = Q0.bind(null, e[1]), yt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ne, o = yt();
  if (ee) {
    if (n === void 0) throw Error(_(407));
    n = n();
  } else {
    if (n = t(), pe === null) throw Error(_(349));
    $n & 30 || Xf(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, oc(Gf.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, ro(9, Kf.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = yt(), t = pe.identifierPrefix;
  if (ee) {
    var n = $t, r = Et;
    n = (r & ~(1 << 32 - at(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = to++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = H0++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, G0 = {
  readContext: nt,
  useCallback: op,
  useContext: nt,
  useEffect: Du,
  useImperativeHandle: rp,
  useInsertionEffect: ep,
  useLayoutEffect: tp,
  useMemo: ip,
  useReducer: Ll,
  useRef: qf,
  useState: function() {
    return Ll(no);
  },
  useDebugValue: Iu,
  useDeferredValue: function(e) {
    var t = rt();
    return lp(t, ae.memoizedState, e);
  },
  useTransition: function() {
    var e = Ll(no)[0], t = rt().memoizedState;
    return [e, t];
  },
  useMutableSource: Qf,
  useSyncExternalStore: Yf,
  useId: sp,
  unstable_isNewReconciler: !1
}, J0 = { readContext: nt, useCallback: op, useContext: nt, useEffect: Du, useImperativeHandle: rp, useInsertionEffect: ep, useLayoutEffect: tp, useMemo: ip, useReducer: Dl, useRef: qf, useState: function() {
  return Dl(no);
}, useDebugValue: Iu, useDeferredValue: function(e) {
  var t = rt();
  return ae === null ? t.memoizedState = e : lp(t, ae.memoizedState, e);
}, useTransition: function() {
  var e = Dl(no)[0], t = rt().memoizedState;
  return [e, t];
}, useMutableSource: Qf, useSyncExternalStore: Yf, useId: sp, unstable_isNewReconciler: !1 };
function it(e, t) {
  if (e && e.defaultProps) {
    t = re({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ms(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : re({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var qi = { isMounted: function(e) {
  return (e = e._reactInternals) ? Mn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), o = Zt(e), i = Pt(r, o);
  i.payload = t, n != null && (i.callback = n), t = Gt(e, i, o), t !== null && (ct(t, e, o, r), Xo(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = $e(), o = Zt(e), i = Pt(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Gt(e, i, o), t !== null && (ct(t, e, o, r), Xo(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = $e(), r = Zt(e), o = Pt(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Gt(e, o, r), t !== null && (ct(t, e, r, n), Xo(t, e, r));
} };
function ic(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !Kr(n, r) || !Kr(o, i) : !0;
}
function dp(e, t, n) {
  var r = !1, o = tn, i = t.contextType;
  return typeof i == "object" && i !== null ? i = nt(i) : (o = De(t) ? _n : Ce.current, r = t.contextTypes, i = (r = r != null) ? qn(e, o) : tn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = qi, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function lc(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && qi.enqueueReplaceState(t, t.state, null);
}
function Rs(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Tu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = nt(i) : (i = De(t) ? _n : Ce.current, o.context = qn(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ms(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && qi.enqueueReplaceState(o, o.state, null), Pi(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function rr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Em(r), r = r.return;
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
function js(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Z0 = typeof WeakMap == "function" ? WeakMap : Map;
function fp(e, t, n) {
  n = Pt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ji || (ji = !0, Ws = r), js(e, t);
  }, n;
}
function pp(e, t, n) {
  n = Pt(-1, n), n.tag = 3;
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
    js(e, t), typeof r != "function" && (Jt === null ? Jt = /* @__PURE__ */ new Set([this]) : Jt.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function sc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Z0();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = fy.bind(null, e, t, n), t.then(e, e));
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
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Pt(-1, 1), t.tag = 2, Gt(n, t, 1))), n.lanes |= 1), e);
}
var q0 = Ft.ReactCurrentOwner, Fe = !1;
function _e(e, t, n, r) {
  t.child = e === null ? Wf(t, null, n, r) : tr(t, e.child, n, r);
}
function cc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Gn(t, o), r = Fu(e, t, n, r, i, o), n = Lu(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Rt(e, t, o)) : (ee && n && Su(t), t.flags |= 1, _e(e, t, r, o), t.child);
}
function dc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Hu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, hp(e, t, i, r, o)) : (e = ei(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Kr, n(l, r) && e.ref === t.ref) return Rt(e, t, o);
  }
  return t.flags |= 1, e = qt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function hp(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Kr(i, r) && e.ref === t.ref) if (Fe = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Fe = !0);
    else return t.lanes = e.lanes, Rt(e, t, o);
  }
  return zs(e, t, n, r, o);
}
function mp(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, K(Hn, We), We |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, K(Hn, We), We |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, K(Hn, We), We |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, K(Hn, We), We |= r;
  return _e(e, t, o, n), t.child;
}
function yp(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function zs(e, t, n, r, o) {
  var i = De(n) ? _n : Ce.current;
  return i = qn(t, i), Gn(t, o), n = Fu(e, t, n, r, i, o), r = Lu(), e !== null && !Fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Rt(e, t, o)) : (ee && r && Su(t), t.flags |= 1, _e(e, t, n, o), t.child);
}
function fc(e, t, n, r, o) {
  if (De(n)) {
    var i = !0;
    Si(t);
  } else i = !1;
  if (Gn(t, o), t.stateNode === null) Jo(e, t), dp(t, n, r), Rs(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, s = t.memoizedProps;
    l.props = s;
    var u = l.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = nt(a) : (a = De(n) ? _n : Ce.current, a = qn(t, a));
    var d = n.getDerivedStateFromProps, f = typeof d == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    f || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || u !== a) && lc(t, l, r, a), bt = !1;
    var m = t.memoizedState;
    l.state = m, Pi(t, r, l, o), u = t.memoizedState, s !== r || m !== u || Le.current || bt ? (typeof d == "function" && (Ms(t, n, d, r), u = t.memoizedState), (s = bt || ic(t, n, s, r, m, u, a)) ? (f || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), l.props = r, l.state = u, l.context = a, r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, Bf(e, t), s = t.memoizedProps, a = t.type === t.elementType ? s : it(t.type, s), l.props = a, f = t.pendingProps, m = l.context, u = n.contextType, typeof u == "object" && u !== null ? u = nt(u) : (u = De(n) ? _n : Ce.current, u = qn(t, u));
    var v = n.getDerivedStateFromProps;
    (d = typeof v == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== f || m !== u) && lc(t, l, r, u), bt = !1, m = t.memoizedState, l.state = m, Pi(t, r, l, o);
    var y = t.memoizedState;
    s !== f || m !== y || Le.current || bt ? (typeof v == "function" && (Ms(t, n, v, r), y = t.memoizedState), (a = bt || ic(t, n, a, r, m, y, u) || !1) ? (d || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, y, u), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, y, u)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), l.props = r, l.state = y, l.context = u, r = a) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Fs(e, t, n, r, i, o);
}
function Fs(e, t, n, r, o, i) {
  yp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Ja(t, n, !1), Rt(e, t, i);
  r = t.stateNode, q0.current = t;
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = tr(t, e.child, null, i), t.child = tr(t, null, s, i)) : _e(e, t, s, i), t.memoizedState = r.state, o && Ja(t, n, !0), t.child;
}
function gp(e) {
  var t = e.stateNode;
  t.pendingContext ? Ga(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ga(e, t.context, !1), Mu(e, t.containerInfo);
}
function pc(e, t, n, r, o) {
  return er(), _u(o), t.flags |= 256, _e(e, t, n, r), t.child;
}
var Ls = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ds(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function vp(e, t, n) {
  var r = t.pendingProps, o = te.current, i = !1, l = (t.flags & 128) !== 0, s;
  if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), K(te, o & 1), e === null)
    return Ns(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = nl(l, r, 0, null), e = Cn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Ds(n), t.memoizedState = Ls, e) : Ou(t, l));
  if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null)) return ey(e, t, l, r, s, o, n);
  if (i) {
    i = r.fallback, l = t.mode, o = e.child, s = o.sibling;
    var u = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = qt(o, u), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = qt(s, i) : (i = Cn(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? Ds(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = Ls, r;
  }
  return i = e.child, e = i.sibling, r = qt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ou(e, t) {
  return t = nl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Mo(e, t, n, r) {
  return r !== null && _u(r), tr(t, e.child, null, n), e = Ou(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function ey(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Il(Error(_(422))), Mo(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = nl({ mode: "visible", children: r.children }, o, 0, null), i = Cn(i, o, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && tr(t, e.child, null, l), t.child.memoizedState = Ds(l), t.memoizedState = Ls, i);
  if (!(t.mode & 1)) return Mo(e, t, l, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var s = r.dgst;
    return r = s, i = Error(_(419)), r = Il(i, r, void 0), Mo(e, t, l, r);
  }
  if (s = (l & e.childLanes) !== 0, Fe || s) {
    if (r = pe, r !== null) {
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
      o = o & (r.suspendedLanes | l) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Mt(e, o), ct(r, e, o, -1));
    }
    return Bu(), r = Il(Error(_(421))), Mo(e, t, l, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = py.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Ye = Kt(o.nextSibling), Xe = t, ee = !0, st = null, e !== null && (Ze[qe++] = Et, Ze[qe++] = $t, Ze[qe++] = En, Et = e.id, $t = e.overflow, En = t), t = Ou(t, r.children), t.flags |= 4096, t);
}
function hc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ts(e.return, t, n);
}
function Ol(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function wp(e, t, n) {
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
  if (K(te, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Ni(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ol(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Ni(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Ol(t, !0, n, null, i);
      break;
    case "together":
      Ol(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Jo(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Rt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Pn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (e = t.child, n = qt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = qt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function ty(e, t, n) {
  switch (t.tag) {
    case 3:
      gp(t), er();
      break;
    case 5:
      Hf(t);
      break;
    case 1:
      De(t.type) && Si(t);
      break;
    case 4:
      Mu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      K(Ei, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (K(te, te.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? vp(e, t, n) : (K(te, te.current & 1), e = Rt(e, t, n), e !== null ? e.sibling : null);
      K(te, te.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return wp(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), K(te, te.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, mp(e, t, n);
  }
  return Rt(e, t, n);
}
var xp, Is, kp, Sp;
xp = function(e, t) {
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
kp = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, wn(wt.current);
    var i = null;
    switch (n) {
      case "input":
        o = is(e, o), r = is(e, r), i = [];
        break;
      case "select":
        o = re({}, o, { value: void 0 }), r = re({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = us(e, o), r = us(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = xi);
    }
    cs(n, r);
    var l;
    n = null;
    for (a in o) if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null) if (a === "style") {
      var s = o[a];
      for (l in s) s.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Wr.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (s = o != null ? o[a] : void 0, r.hasOwnProperty(a) && u !== s && (u != null || s != null)) if (a === "style") if (s) {
        for (l in s) !s.hasOwnProperty(l) || u && u.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in u) u.hasOwnProperty(l) && s[l] !== u[l] && (n || (n = {}), n[l] = u[l]);
      } else n || (i || (i = []), i.push(
        a,
        n
      )), n = u;
      else a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (i = i || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Wr.hasOwnProperty(a) ? (u != null && a === "onScroll" && G("scroll", e), i || s === u || (i = [])) : (i = i || []).push(a, u));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Sp = function(e, t, n, r) {
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
function ny(e, t, n) {
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
      return De(t.type) && ki(), ke(t), null;
    case 3:
      return r = t.stateNode, nr(), Z(Le), Z(Ce), ju(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (No(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, st !== null && (Hs(st), st = null))), Is(e, t), ke(t), null;
    case 5:
      Ru(t);
      var o = wn(eo.current);
      if (n = t.type, e !== null && t.stateNode != null) kp(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return ke(t), null;
        }
        if (e = wn(wt.current), No(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[gt] = t, r[Zr] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              G("cancel", r), G("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < $r.length; o++) G($r[o], r);
              break;
            case "source":
              G("error", r);
              break;
            case "img":
            case "image":
            case "link":
              G(
                "error",
                r
              ), G("load", r);
              break;
            case "details":
              G("toggle", r);
              break;
            case "input":
              Ca(r, i), G("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, G("invalid", r);
              break;
            case "textarea":
              Ea(r, i), G("invalid", r);
          }
          cs(n, i), o = null;
          for (var l in i) if (i.hasOwnProperty(l)) {
            var s = i[l];
            l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && Po(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Po(
              r.textContent,
              s,
              e
            ), o = ["children", "" + s]) : Wr.hasOwnProperty(l) && s != null && l === "onScroll" && G("scroll", r);
          }
          switch (n) {
            case "input":
              wo(r), _a(r, i, !0);
              break;
            case "textarea":
              wo(r), $a(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = xi);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Kd(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[gt] = t, e[Zr] = r, xp(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = ds(n, r), n) {
              case "dialog":
                G("cancel", e), G("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < $r.length; o++) G($r[o], e);
                o = r;
                break;
              case "source":
                G("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                G(
                  "error",
                  e
                ), G("load", e), o = r;
                break;
              case "details":
                G("toggle", e), o = r;
                break;
              case "input":
                Ca(e, r), o = is(e, r), G("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = re({}, r, { value: void 0 }), G("invalid", e);
                break;
              case "textarea":
                Ea(e, r), o = us(e, r), G("invalid", e);
                break;
              default:
                o = r;
            }
            cs(n, o), s = o;
            for (i in s) if (s.hasOwnProperty(i)) {
              var u = s[i];
              i === "style" ? Zd(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Gd(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Vr(e, u) : typeof u == "number" && Vr(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Wr.hasOwnProperty(i) ? u != null && i === "onScroll" && G("scroll", e) : u != null && uu(e, i, u, l));
            }
            switch (n) {
              case "input":
                wo(e), _a(e, r, !1);
                break;
              case "textarea":
                wo(e), $a(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + en(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Qn(e, !!r.multiple, i, !1) : r.defaultValue != null && Qn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = xi);
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
      if (e && t.stateNode != null) Sp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (n = wn(eo.current), wn(wt.current), No(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[gt] = t, (i = r.nodeValue !== n) && (e = Xe, e !== null)) switch (e.tag) {
            case 3:
              Po(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Po(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[gt] = t, t.stateNode = r;
      }
      return ke(t), null;
    case 13:
      if (Z(te), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ee && Ye !== null && t.mode & 1 && !(t.flags & 128)) Af(), er(), t.flags |= 98560, i = !1;
        else if (i = No(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(_(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(_(317));
            i[gt] = t;
          } else er(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ke(t), i = !1;
        } else st !== null && (Hs(st), st = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || te.current & 1 ? ce === 0 && (ce = 3) : Bu())), t.updateQueue !== null && (t.flags |= 4), ke(t), null);
    case 4:
      return nr(), Is(e, t), e === null && Gr(t.stateNode.containerInfo), ke(t), null;
    case 10:
      return Pu(t.type._context), ke(t), null;
    case 17:
      return De(t.type) && ki(), ke(t), null;
    case 19:
      if (Z(te), i = t.memoizedState, i === null) return ke(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) yr(i, !1);
      else {
        if (ce !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = Ni(e), l !== null) {
            for (t.flags |= 128, yr(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return K(te, te.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && se() > or && (t.flags |= 128, r = !0, yr(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Ni(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), yr(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !ee) return ke(t), null;
        } else 2 * se() - i.renderingStartTime > or && n !== 1073741824 && (t.flags |= 128, r = !0, yr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = se(), t.sibling = null, n = te.current, K(te, r ? n & 1 | 2 : n & 1), t) : (ke(t), null);
    case 22:
    case 23:
      return Vu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? We & 1073741824 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ke(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function ry(e, t) {
  switch (Cu(t), t.tag) {
    case 1:
      return De(t.type) && ki(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return nr(), Z(Le), Z(Ce), ju(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ru(t), null;
    case 13:
      if (Z(te), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(_(340));
        er();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Z(te), null;
    case 4:
      return nr(), null;
    case 10:
      return Pu(t.type._context), null;
    case 22:
    case 23:
      return Vu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ro = !1, Se = !1, oy = typeof WeakSet == "function" ? WeakSet : Set, N = null;
function Bn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    le(e, t, r);
  }
  else n.current = null;
}
function Os(e, t, n) {
  try {
    n();
  } catch (r) {
    le(e, t, r);
  }
}
var mc = !1;
function iy(e, t) {
  if (ks = gi, e = Pf(), ku(e)) {
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
          for (var v; f !== n || o !== 0 && f.nodeType !== 3 || (s = l + o), f !== i || r !== 0 && f.nodeType !== 3 || (u = l + r), f.nodeType === 3 && (l += f.nodeValue.length), (v = f.firstChild) !== null; )
            m = f, f = v;
          for (; ; ) {
            if (f === e) break t;
            if (m === n && ++a === o && (s = l), m === i && ++d === r && (u = l), (v = f.nextSibling) !== null) break;
            f = m, m = f.parentNode;
          }
          f = v;
        }
        n = s === -1 || u === -1 ? null : { start: s, end: u };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ss = { focusedElem: e, selectionRange: n }, gi = !1, N = t; N !== null; ) if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, N = e;
  else for (; N !== null; ) {
    t = N;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var x = y.memoizedProps, k = y.memoizedState, p = t.stateNode, c = p.getSnapshotBeforeUpdate(t.elementType === t.type ? x : it(t.type, x), k);
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
          throw Error(_(163));
      }
    } catch (w) {
      le(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, N = e;
      break;
    }
    N = t.return;
  }
  return y = mc, mc = !1, y;
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
function el(e, t) {
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
function Cp(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Cp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[gt], delete t[Zr], delete t[Es], delete t[U0], delete t[W0])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function _p(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function yc(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || _p(e.return)) return null;
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
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = xi));
  else if (r !== 4 && (e = e.child, e !== null)) for (As(e, t, n), e = e.sibling; e !== null; ) As(e, t, n), e = e.sibling;
}
function Us(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Us(e, t, n), e = e.sibling; e !== null; ) Us(e, t, n), e = e.sibling;
}
var he = null, lt = !1;
function Lt(e, t, n) {
  for (n = n.child; n !== null; ) Ep(e, t, n), n = n.sibling;
}
function Ep(e, t, n) {
  if (vt && typeof vt.onCommitFiberUnmount == "function") try {
    vt.onCommitFiberUnmount(Qi, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Se || Bn(n, t);
    case 6:
      var r = he, o = lt;
      he = null, Lt(e, t, n), he = r, lt = o, he !== null && (lt ? (e = he, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : he.removeChild(n.stateNode));
      break;
    case 18:
      he !== null && (lt ? (e = he, n = n.stateNode, e.nodeType === 8 ? Rl(e.parentNode, n) : e.nodeType === 1 && Rl(e, n), Yr(e)) : Rl(he, n.stateNode));
      break;
    case 4:
      r = he, o = lt, he = n.stateNode.containerInfo, lt = !0, Lt(e, t, n), he = r, lt = o;
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
      if (!Se && (Bn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        le(n, t, s);
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
    n === null && (n = e.stateNode = new oy()), t.forEach(function(r) {
      var o = hy.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function ot(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, l = t, s = l;
      e: for (; s !== null; ) {
        switch (s.tag) {
          case 5:
            he = s.stateNode, lt = !1;
            break e;
          case 3:
            he = s.stateNode.containerInfo, lt = !0;
            break e;
          case 4:
            he = s.stateNode.containerInfo, lt = !0;
            break e;
        }
        s = s.return;
      }
      if (he === null) throw Error(_(160));
      Ep(i, l, o), he = null, lt = !1;
      var u = o.alternate;
      u !== null && (u.return = null), o.return = null;
    } catch (a) {
      le(o, t, a);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) $p(t, e), t = t.sibling;
}
function $p(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ot(t, e), ft(e), r & 4) {
        try {
          Ir(3, e, e.return), el(3, e);
        } catch (x) {
          le(e, e.return, x);
        }
        try {
          Ir(5, e, e.return);
        } catch (x) {
          le(e, e.return, x);
        }
      }
      break;
    case 1:
      ot(t, e), ft(e), r & 512 && n !== null && Bn(n, n.return);
      break;
    case 5:
      if (ot(t, e), ft(e), r & 512 && n !== null && Bn(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Vr(o, "");
        } catch (x) {
          le(e, e.return, x);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, s = e.type, u = e.updateQueue;
        if (e.updateQueue = null, u !== null) try {
          s === "input" && i.type === "radio" && i.name != null && Yd(o, i), ds(s, l);
          var a = ds(s, i);
          for (l = 0; l < u.length; l += 2) {
            var d = u[l], f = u[l + 1];
            d === "style" ? Zd(o, f) : d === "dangerouslySetInnerHTML" ? Gd(o, f) : d === "children" ? Vr(o, f) : uu(o, d, f, a);
          }
          switch (s) {
            case "input":
              ls(o, i);
              break;
            case "textarea":
              Xd(o, i);
              break;
            case "select":
              var m = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var v = i.value;
              v != null ? Qn(o, !!i.multiple, v, !1) : m !== !!i.multiple && (i.defaultValue != null ? Qn(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Qn(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[Zr] = i;
        } catch (x) {
          le(e, e.return, x);
        }
      }
      break;
    case 6:
      if (ot(t, e), ft(e), r & 4) {
        if (e.stateNode === null) throw Error(_(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (x) {
          le(e, e.return, x);
        }
      }
      break;
    case 3:
      if (ot(t, e), ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Yr(t.containerInfo);
      } catch (x) {
        le(e, e.return, x);
      }
      break;
    case 4:
      ot(t, e), ft(e);
      break;
    case 13:
      ot(t, e), ft(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Uu = se())), r & 4 && gc(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Se = (a = Se) || d, ot(t, e), Se = a) : ot(t, e), ft(e), r & 8192) {
        if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !d && e.mode & 1) for (N = e, d = e.child; d !== null; ) {
          for (f = N = d; N !== null; ) {
            switch (m = N, v = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Ir(4, m, m.return);
                break;
              case 1:
                Bn(m, m.return);
                var y = m.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (x) {
                    le(r, n, x);
                  }
                }
                break;
              case 5:
                Bn(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  wc(f);
                  continue;
                }
            }
            v !== null ? (v.return = m, N = v) : wc(f);
          }
          d = d.sibling;
        }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                o = f.stateNode, a ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = f.stateNode, u = f.memoizedProps.style, l = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = Jd("display", l));
              } catch (x) {
                le(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (d === null) try {
              f.stateNode.nodeValue = a ? "" : f.memoizedProps;
            } catch (x) {
              le(e, e.return, x);
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
      ot(t, e), ft(e), r & 4 && gc(e);
      break;
    case 21:
      break;
    default:
      ot(
        t,
        e
      ), ft(e);
  }
}
function ft(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (_p(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Vr(o, ""), r.flags &= -33);
          var i = yc(e);
          Us(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, s = yc(e);
          As(e, s, l);
          break;
        default:
          throw Error(_(161));
      }
    } catch (u) {
      le(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ly(e, t, n) {
  N = e, Pp(e);
}
function Pp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var o = N, i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Ro;
      if (!l) {
        var s = o.alternate, u = s !== null && s.memoizedState !== null || Se;
        s = Ro;
        var a = Se;
        if (Ro = l, (Se = u) && !a) for (N = o; N !== null; ) l = N, u = l.child, l.tag === 22 && l.memoizedState !== null ? xc(o) : u !== null ? (u.return = l, N = u) : xc(o);
        for (; i !== null; ) N = i, Pp(i), i = i.sibling;
        N = o, Ro = s, Se = a;
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
            Se || el(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Se) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : it(t.type, n.memoizedProps);
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
                  f !== null && Yr(f);
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
            throw Error(_(163));
        }
        Se || t.flags & 512 && bs(t);
      } catch (m) {
        le(t, t.return, m);
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
            el(4, t);
          } catch (u) {
            le(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              le(t, o, u);
            }
          }
          var i = t.return;
          try {
            bs(t);
          } catch (u) {
            le(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            bs(t);
          } catch (u) {
            le(t, l, u);
          }
      }
    } catch (u) {
      le(t, t.return, u);
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
var sy = Math.ceil, Ri = Ft.ReactCurrentDispatcher, bu = Ft.ReactCurrentOwner, tt = Ft.ReactCurrentBatchConfig, U = 0, pe = null, ue = null, ye = 0, We = 0, Hn = on(0), ce = 0, oo = null, Pn = 0, tl = 0, Au = 0, Or = null, ze = null, Uu = 0, or = 1 / 0, St = null, ji = !1, Ws = null, Jt = null, jo = !1, Vt = null, zi = 0, br = 0, Vs = null, Zo = -1, qo = 0;
function $e() {
  return U & 6 ? se() : Zo !== -1 ? Zo : Zo = se();
}
function Zt(e) {
  return e.mode & 1 ? U & 2 && ye !== 0 ? ye & -ye : B0.transition !== null ? (qo === 0 && (qo = df()), qo) : (e = H, e !== 0 || (e = window.event, e = e === void 0 ? 16 : vf(e.type)), e) : 1;
}
function ct(e, t, n, r) {
  if (50 < br) throw br = 0, Vs = null, Error(_(185));
  co(e, n, r), (!(U & 2) || e !== pe) && (e === pe && (!(U & 2) && (tl |= n), ce === 4 && Ut(e, ye)), Ie(e, r), n === 1 && U === 0 && !(t.mode & 1) && (or = se() + 500, Ji && ln()));
}
function Ie(e, t) {
  var n = e.callbackNode;
  Bm(e, t);
  var r = yi(e, e === pe ? ye : 0);
  if (r === 0) n !== null && Ta(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ta(n), t === 1) e.tag === 0 ? V0(kc.bind(null, e)) : If(kc.bind(null, e)), b0(function() {
      !(U & 6) && ln();
    }), n = null;
    else {
      switch (ff(r)) {
        case 1:
          n = pu;
          break;
        case 4:
          n = af;
          break;
        case 16:
          n = mi;
          break;
        case 536870912:
          n = cf;
          break;
        default:
          n = mi;
      }
      n = Lp(n, Np.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Np(e, t) {
  if (Zo = -1, qo = 0, U & 6) throw Error(_(327));
  var n = e.callbackNode;
  if (Jn() && e.callbackNode !== n) return null;
  var r = yi(e, e === pe ? ye : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Fi(e, r);
  else {
    t = r;
    var o = U;
    U |= 2;
    var i = Mp();
    (pe !== e || ye !== t) && (St = null, or = se() + 500, Sn(e, t));
    do
      try {
        cy();
        break;
      } catch (s) {
        Tp(e, s);
      }
    while (!0);
    $u(), Ri.current = i, U = o, ue !== null ? t = 0 : (pe = null, ye = 0, t = ce);
  }
  if (t !== 0) {
    if (t === 2 && (o = ys(e), o !== 0 && (r = o, t = Bs(e, o))), t === 1) throw n = oo, Sn(e, 0), Ut(e, r), Ie(e, se()), n;
    if (t === 6) Ut(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !uy(o) && (t = Fi(e, r), t === 2 && (i = ys(e), i !== 0 && (r = i, t = Bs(e, i))), t === 1)) throw n = oo, Sn(e, 0), Ut(e, r), Ie(e, se()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          fn(e, ze, St);
          break;
        case 3:
          if (Ut(e, r), (r & 130023424) === r && (t = Uu + 500 - se(), 10 < t)) {
            if (yi(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              $e(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = _s(fn.bind(null, e, ze, St), t);
            break;
          }
          fn(e, ze, St);
          break;
        case 4:
          if (Ut(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - at(r);
            i = 1 << l, l = t[l], l > o && (o = l), r &= ~i;
          }
          if (r = o, r = se() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * sy(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = _s(fn.bind(null, e, ze, St), r);
            break;
          }
          fn(e, ze, St);
          break;
        case 5:
          fn(e, ze, St);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return Ie(e, se()), e.callbackNode === n ? Np.bind(null, e) : null;
}
function Bs(e, t) {
  var n = Or;
  return e.current.memoizedState.isDehydrated && (Sn(e, t).flags |= 256), e = Fi(e, t), e !== 2 && (t = ze, ze = n, t !== null && Hs(t)), e;
}
function Hs(e) {
  ze === null ? ze = e : ze.push.apply(ze, e);
}
function uy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!dt(i(), o)) return !1;
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
  for (t &= ~Au, t &= ~tl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - at(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function kc(e) {
  if (U & 6) throw Error(_(327));
  Jn();
  var t = yi(e, 0);
  if (!(t & 1)) return Ie(e, se()), null;
  var n = Fi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ys(e);
    r !== 0 && (t = r, n = Bs(e, r));
  }
  if (n === 1) throw n = oo, Sn(e, 0), Ut(e, t), Ie(e, se()), n;
  if (n === 6) throw Error(_(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, fn(e, ze, St), Ie(e, se()), null;
}
function Wu(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    U = n, U === 0 && (or = se() + 500, Ji && ln());
  }
}
function Nn(e) {
  Vt !== null && Vt.tag === 0 && !(U & 6) && Jn();
  var t = U;
  U |= 1;
  var n = tt.transition, r = H;
  try {
    if (tt.transition = null, H = 1, e) return e();
  } finally {
    H = r, tt.transition = n, U = t, !(U & 6) && ln();
  }
}
function Vu() {
  We = Hn.current, Z(Hn);
}
function Sn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, O0(n)), ue !== null) for (n = ue.return; n !== null; ) {
    var r = n;
    switch (Cu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ki();
        break;
      case 3:
        nr(), Z(Le), Z(Ce), ju();
        break;
      case 5:
        Ru(r);
        break;
      case 4:
        nr();
        break;
      case 13:
        Z(te);
        break;
      case 19:
        Z(te);
        break;
      case 10:
        Pu(r.type._context);
        break;
      case 22:
      case 23:
        Vu();
    }
    n = n.return;
  }
  if (pe = e, ue = e = qt(e.current, null), ye = We = t, ce = 0, oo = null, Au = tl = Pn = 0, ze = Or = null, vn !== null) {
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
function Tp(e, t) {
  do {
    var n = ue;
    try {
      if ($u(), Ko.current = Mi, Ti) {
        for (var r = ne.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Ti = !1;
      }
      if ($n = 0, fe = ae = ne = null, Dr = !1, to = 0, bu.current = null, n === null || n.return === null) {
        ce = 1, oo = t, ue = null;
        break;
      }
      e: {
        var i = e, l = n.return, s = n, u = t;
        if (t = ye, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
          var a = u, d = s, f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = d.alternate;
            m ? (d.updateQueue = m.updateQueue, d.memoizedState = m.memoizedState, d.lanes = m.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var v = uc(l);
          if (v !== null) {
            v.flags &= -257, ac(v, l, s, i, t), v.mode & 1 && sc(i, a, t), t = v, u = a;
            var y = t.updateQueue;
            if (y === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(u), t.updateQueue = x;
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              sc(i, a, t), Bu();
              break e;
            }
            u = Error(_(426));
          }
        } else if (ee && s.mode & 1) {
          var k = uc(l);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256), ac(k, l, s, i, t), _u(rr(u, s));
            break e;
          }
        }
        i = u = rr(u, s), ce !== 4 && (ce = 2), Or === null ? Or = [i] : Or.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var p = fp(i, u, t);
              tc(i, p);
              break e;
            case 1:
              s = u;
              var c = i.type, h = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Jt === null || !Jt.has(h)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = pp(i, s, t);
                tc(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      jp(n);
    } catch (C) {
      t = C, ue === n && n !== null && (ue = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Mp() {
  var e = Ri.current;
  return Ri.current = Mi, e === null ? Mi : e;
}
function Bu() {
  (ce === 0 || ce === 3 || ce === 2) && (ce = 4), pe === null || !(Pn & 268435455) && !(tl & 268435455) || Ut(pe, ye);
}
function Fi(e, t) {
  var n = U;
  U |= 2;
  var r = Mp();
  (pe !== e || ye !== t) && (St = null, Sn(e, t));
  do
    try {
      ay();
      break;
    } catch (o) {
      Tp(e, o);
    }
  while (!0);
  if ($u(), U = n, Ri.current = r, ue !== null) throw Error(_(261));
  return pe = null, ye = 0, ce;
}
function ay() {
  for (; ue !== null; ) Rp(ue);
}
function cy() {
  for (; ue !== null && !Lm(); ) Rp(ue);
}
function Rp(e) {
  var t = Fp(e.alternate, e, We);
  e.memoizedProps = e.pendingProps, t === null ? jp(e) : ue = t, bu.current = null;
}
function jp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = ry(n, t), n !== null) {
        n.flags &= 32767, ue = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ce = 6, ue = null;
        return;
      }
    } else if (n = ny(n, t, We), n !== null) {
      ue = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ue = t;
      return;
    }
    ue = t = e;
  } while (t !== null);
  ce === 0 && (ce = 5);
}
function fn(e, t, n) {
  var r = H, o = tt.transition;
  try {
    tt.transition = null, H = 1, dy(e, t, n, r);
  } finally {
    tt.transition = o, H = r;
  }
  return null;
}
function dy(e, t, n, r) {
  do
    Jn();
  while (Vt !== null);
  if (U & 6) throw Error(_(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(_(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Hm(e, i), e === pe && (ue = pe = null, ye = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || jo || (jo = !0, Lp(mi, function() {
    return Jn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = tt.transition, tt.transition = null;
    var l = H;
    H = 1;
    var s = U;
    U |= 4, bu.current = null, iy(e, n), $p(n, e), R0(Ss), gi = !!ks, Ss = ks = null, e.current = n, ly(n), Dm(), U = s, H = l, tt.transition = i;
  } else e.current = n;
  if (jo && (jo = !1, Vt = e, zi = o), i = e.pendingLanes, i === 0 && (Jt = null), bm(n.stateNode), Ie(e, se()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ji) throw ji = !1, e = Ws, Ws = null, e;
  return zi & 1 && e.tag !== 0 && Jn(), i = e.pendingLanes, i & 1 ? e === Vs ? br++ : (br = 0, Vs = e) : br = 0, ln(), null;
}
function Jn() {
  if (Vt !== null) {
    var e = ff(zi), t = tt.transition, n = H;
    try {
      if (tt.transition = null, H = 16 > e ? 16 : e, Vt === null) var r = !1;
      else {
        if (e = Vt, Vt = null, zi = 0, U & 6) throw Error(_(331));
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
                    var m = d.sibling, v = d.return;
                    if (Cp(d), d === a) {
                      N = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = v, N = m;
                      break;
                    }
                    N = v;
                  }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var x = y.child;
                if (x !== null) {
                  y.child = null;
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
                  el(9, s);
              }
            } catch (C) {
              le(s, s.return, C);
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
        if (U = o, ln(), vt && typeof vt.onPostCommitFiberRoot == "function") try {
          vt.onPostCommitFiberRoot(Qi, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      H = n, tt.transition = t;
    }
  }
  return !1;
}
function Sc(e, t, n) {
  t = rr(n, t), t = fp(e, t, 1), e = Gt(e, t, 1), t = $e(), e !== null && (co(e, 1, t), Ie(e, t));
}
function le(e, t, n) {
  if (e.tag === 3) Sc(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Sc(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Jt === null || !Jt.has(r))) {
        e = rr(n, e), e = pp(t, e, 1), t = Gt(t, e, 1), e = $e(), t !== null && (co(t, 1, e), Ie(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function fy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = $e(), e.pingedLanes |= e.suspendedLanes & n, pe === e && (ye & n) === n && (ce === 4 || ce === 3 && (ye & 130023424) === ye && 500 > se() - Uu ? Sn(e, 0) : Au |= n), Ie(e, t);
}
function zp(e, t) {
  t === 0 && (e.mode & 1 ? (t = So, So <<= 1, !(So & 130023424) && (So = 4194304)) : t = 1);
  var n = $e();
  e = Mt(e, t), e !== null && (co(e, t, n), Ie(e, n));
}
function py(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), zp(e, n);
}
function hy(e, t) {
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
      throw Error(_(314));
  }
  r !== null && r.delete(t), zp(e, n);
}
var Fp;
Fp = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Le.current) Fe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Fe = !1, ty(e, t, n);
    Fe = !!(e.flags & 131072);
  }
  else Fe = !1, ee && t.flags & 1048576 && Of(t, _i, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Jo(e, t), e = t.pendingProps;
      var o = qn(t, Ce.current);
      Gn(t, n), o = Fu(null, t, r, e, o, n);
      var i = Lu();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, De(r) ? (i = !0, Si(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Tu(t), o.updater = qi, t.stateNode = o, o._reactInternals = t, Rs(t, r, e, n), t = Fs(null, t, r, !0, i, n)) : (t.tag = 0, ee && i && Su(t), _e(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Jo(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = yy(r), e = it(r, e), o) {
          case 0:
            t = zs(null, t, r, e, n);
            break e;
          case 1:
            t = fc(null, t, r, e, n);
            break e;
          case 11:
            t = cc(null, t, r, e, n);
            break e;
          case 14:
            t = dc(null, t, r, it(r.type, e), n);
            break e;
        }
        throw Error(_(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : it(r, o), zs(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : it(r, o), fc(e, t, r, o, n);
    case 3:
      e: {
        if (gp(t), e === null) throw Error(_(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Bf(e, t), Pi(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = rr(Error(_(423)), t), t = pc(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = rr(Error(_(424)), t), t = pc(e, t, r, n, o);
          break e;
        } else for (Ye = Kt(t.stateNode.containerInfo.firstChild), Xe = t, ee = !0, st = null, n = Wf(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (er(), r === o) {
            t = Rt(e, t, n);
            break e;
          }
          _e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Hf(t), e === null && Ns(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, Cs(r, o) ? l = null : i !== null && Cs(r, i) && (t.flags |= 32), yp(e, t), _e(e, t, l, n), t.child;
    case 6:
      return e === null && Ns(t), null;
    case 13:
      return vp(e, t, n);
    case 4:
      return Mu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = tr(t, null, r, n) : _e(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : it(r, o), cc(e, t, r, o, n);
    case 7:
      return _e(e, t, t.pendingProps, n), t.child;
    case 8:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, K(Ei, r._currentValue), r._currentValue = l, i !== null) if (dt(i.value, l)) {
          if (i.children === o.children && !Le.current) {
            t = Rt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var s = i.dependencies;
          if (s !== null) {
            l = i.child;
            for (var u = s.firstContext; u !== null; ) {
              if (u.context === r) {
                if (i.tag === 1) {
                  u = Pt(-1, n & -n), u.tag = 2;
                  var a = i.updateQueue;
                  if (a !== null) {
                    a = a.shared;
                    var d = a.pending;
                    d === null ? u.next = u : (u.next = d.next, d.next = u), a.pending = u;
                  }
                }
                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Ts(
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
            if (l = i.return, l === null) throw Error(_(341));
            l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), Ts(l, n, t), l = i.sibling;
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
      return o = t.type, r = t.pendingProps.children, Gn(t, n), o = nt(o), r = r(o), t.flags |= 1, _e(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = it(r, t.pendingProps), o = it(r.type, o), dc(e, t, r, o, n);
    case 15:
      return hp(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : it(r, o), Jo(e, t), t.tag = 1, De(r) ? (e = !0, Si(t)) : e = !1, Gn(t, n), dp(t, r, o), Rs(t, r, o, n), Fs(null, t, r, !0, e, n);
    case 19:
      return wp(e, t, n);
    case 22:
      return mp(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function Lp(e, t) {
  return uf(e, t);
}
function my(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function et(e, t, n, r) {
  return new my(e, t, n, r);
}
function Hu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function yy(e) {
  if (typeof e == "function") return Hu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === cu) return 11;
    if (e === du) return 14;
  }
  return 2;
}
function qt(e, t) {
  var n = e.alternate;
  return n === null ? (n = et(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ei(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function") Hu(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case Ln:
      return Cn(n.children, o, i, t);
    case au:
      l = 8, o |= 8;
      break;
    case ts:
      return e = et(12, n, t, o | 2), e.elementType = ts, e.lanes = i, e;
    case ns:
      return e = et(13, n, t, o), e.elementType = ns, e.lanes = i, e;
    case rs:
      return e = et(19, n, t, o), e.elementType = rs, e.lanes = i, e;
    case Bd:
      return nl(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Wd:
          l = 10;
          break e;
        case Vd:
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
      throw Error(_(130, e == null ? e : typeof e, ""));
  }
  return t = et(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Cn(e, t, n, r) {
  return e = et(7, e, r, t), e.lanes = n, e;
}
function nl(e, t, n, r) {
  return e = et(22, e, r, t), e.elementType = Bd, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function bl(e, t, n) {
  return e = et(6, e, null, t), e.lanes = n, e;
}
function Al(e, t, n) {
  return t = et(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function gy(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = xl(0), this.expirationTimes = xl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Qu(e, t, n, r, o, i, l, s, u) {
  return e = new gy(e, t, n, s, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = et(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Tu(i), e;
}
function vy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Fn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Dp(e) {
  if (!e) return tn;
  e = e._reactInternals;
  e: {
    if (Mn(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (De(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (De(n)) return Df(e, n, t);
  }
  return t;
}
function Ip(e, t, n, r, o, i, l, s, u) {
  return e = Qu(n, r, !0, e, o, i, l, s, u), e.context = Dp(null), n = e.current, r = $e(), o = Zt(n), i = Pt(r, o), i.callback = t ?? null, Gt(n, i, o), e.current.lanes = o, co(e, o, r), Ie(e, r), e;
}
function rl(e, t, n, r) {
  var o = t.current, i = $e(), l = Zt(o);
  return n = Dp(n), t.context === null ? t.context = n : t.pendingContext = n, t = Pt(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Gt(o, t, l), e !== null && (ct(e, o, l, i), Xo(e, o, l)), l;
}
function Li(e) {
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
function wy() {
  return null;
}
var Op = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Xu(e) {
  this._internalRoot = e;
}
ol.prototype.render = Xu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  rl(e, t, null, null);
};
ol.prototype.unmount = Xu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Nn(function() {
      rl(null, e, null, null);
    }), t[Tt] = null;
  }
};
function ol(e) {
  this._internalRoot = e;
}
ol.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = mf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < At.length && t !== 0 && t < At[n].priority; n++) ;
    At.splice(n, 0, e), n === 0 && gf(e);
  }
};
function Ku(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function il(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function _c() {
}
function xy(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var a = Li(l);
        i.call(a);
      };
    }
    var l = Ip(t, r, e, 0, null, !1, !1, "", _c);
    return e._reactRootContainer = l, e[Tt] = l.current, Gr(e.nodeType === 8 ? e.parentNode : e), Nn(), l;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function() {
      var a = Li(u);
      s.call(a);
    };
  }
  var u = Qu(e, 0, !1, null, null, !1, !1, "", _c);
  return e._reactRootContainer = u, e[Tt] = u.current, Gr(e.nodeType === 8 ? e.parentNode : e), Nn(function() {
    rl(t, u, n, r);
  }), u;
}
function ll(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function() {
        var u = Li(l);
        s.call(u);
      };
    }
    rl(t, l, e, o);
  } else l = xy(n, t, e, o, r);
  return Li(l);
}
pf = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Er(t.pendingLanes);
        n !== 0 && (hu(t, n | 1), Ie(t, se()), !(U & 6) && (or = se() + 500, ln()));
      }
      break;
    case 13:
      Nn(function() {
        var r = Mt(e, 1);
        if (r !== null) {
          var o = $e();
          ct(r, e, 1, o);
        }
      }), Yu(e, 1);
  }
};
mu = function(e) {
  if (e.tag === 13) {
    var t = Mt(e, 134217728);
    if (t !== null) {
      var n = $e();
      ct(t, e, 134217728, n);
    }
    Yu(e, 134217728);
  }
};
hf = function(e) {
  if (e.tag === 13) {
    var t = Zt(e), n = Mt(e, t);
    if (n !== null) {
      var r = $e();
      ct(n, e, t, r);
    }
    Yu(e, t);
  }
};
mf = function() {
  return H;
};
yf = function(e, t) {
  var n = H;
  try {
    return H = e, t();
  } finally {
    H = n;
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
            var o = Gi(r);
            if (!o) throw Error(_(90));
            Qd(r), ls(r, o);
          }
        }
      }
      break;
    case "textarea":
      Xd(e, n);
      break;
    case "select":
      t = n.value, t != null && Qn(e, !!n.multiple, t, !1);
  }
};
tf = Wu;
nf = Nn;
var ky = { usingClientEntryPoint: !1, Events: [po, bn, Gi, qd, ef, Wu] }, gr = { findFiberByHostInstance: gn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Sy = { bundleType: gr.bundleType, version: gr.version, rendererPackageName: gr.rendererPackageName, rendererConfig: gr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ft.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = lf(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: gr.findFiberByHostInstance || wy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zo.isDisabled && zo.supportsFiber) try {
    Qi = zo.inject(Sy), vt = zo;
  } catch {
  }
}
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ky;
Ge.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ku(t)) throw Error(_(200));
  return vy(e, t, null, n);
};
Ge.createRoot = function(e, t) {
  if (!Ku(e)) throw Error(_(299));
  var n = !1, r = "", o = Op;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Qu(e, 1, !1, null, null, n, !1, r, o), e[Tt] = t.current, Gr(e.nodeType === 8 ? e.parentNode : e), new Xu(t);
};
Ge.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(_(188)) : (e = Object.keys(e).join(","), Error(_(268, e)));
  return e = lf(t), e = e === null ? null : e.stateNode, e;
};
Ge.flushSync = function(e) {
  return Nn(e);
};
Ge.hydrate = function(e, t, n) {
  if (!il(t)) throw Error(_(200));
  return ll(null, e, t, !0, n);
};
Ge.hydrateRoot = function(e, t, n) {
  if (!Ku(e)) throw Error(_(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", l = Op;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Ip(t, null, e, 1, n ?? null, o, !1, i, l), e[Tt] = t.current, Gr(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new ol(t);
};
Ge.render = function(e, t, n) {
  if (!il(t)) throw Error(_(200));
  return ll(null, e, t, !1, n);
};
Ge.unmountComponentAtNode = function(e) {
  if (!il(e)) throw Error(_(40));
  return e._reactRootContainer ? (Nn(function() {
    ll(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Tt] = null;
    });
  }), !0) : !1;
};
Ge.unstable_batchedUpdates = Wu;
Ge.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!il(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return ll(e, t, n, !1, r);
};
Ge.version = "18.3.1-next-f1338f8080-20240426";
function bp() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bp);
    } catch (e) {
      console.error(e);
    }
}
bp(), Od.exports = Ge;
var Ap = Od.exports, Gu, Ec = Ap;
Gu = Ec.createRoot, Ec.hydrateRoot;
var Cy = Object.defineProperty, _y = (e, t, n) => t in e ? Cy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Fo = (e, t, n) => _y(e, typeof t != "symbol" ? t + "" : t, n);
const Ey = {
  stringify: (e) => e ? "true" : "false",
  parse: (e) => /^[ty1-9]/i.test(e)
}, $y = {
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
function Ny(e) {
  return e.replace(
    /([a-z0-9])([A-Z])/g,
    (t, n, r) => `${n}-${r.toLowerCase()}`
  );
}
function Up(e) {
  return e.replace(/[-:]([a-z])/g, (t, n) => `${n.toUpperCase()}`);
}
const Ty = {
  stringify: (e) => e.name,
  parse: (e, t, n) => {
    const r = (() => {
      const o = Up(t);
      if (typeof n < "u" && o in n.container)
        return n.container[o];
    })();
    return typeof r == "function" ? r.bind(n) : void 0;
  }
}, My = {
  stringify: (e) => `${e}`,
  parse: (e) => parseFloat(e)
}, Ry = {
  stringify: (e) => e,
  parse: (e) => e
}, Ul = {
  string: Ry,
  number: My,
  boolean: Ey,
  function: $y,
  method: Ty,
  json: Py
}, vr = Symbol.for("r2wc.render"), Lo = Symbol.for("r2wc.connected"), an = Symbol.for("r2wc.context"), be = Symbol.for("r2wc.props");
function jy(e, t, n) {
  var r, o, i;
  t.props || (t.props = e.propTypes ? Object.keys(e.propTypes) : []), t.events || (t.events = []);
  const l = Array.isArray(t.props) ? t.props.slice() : Object.keys(t.props), s = Array.isArray(t.events) ? t.events.slice() : Object.keys(t.events), u = {}, a = {}, d = {}, f = {};
  for (const v of l) {
    u[v] = Array.isArray(t.props) ? "string" : t.props[v];
    const y = Ny(v);
    d[v] = y, f[y] = v;
  }
  for (const v of s)
    a[v] = Array.isArray(t.events) ? {} : t.events[v];
  class m extends HTMLElement {
    constructor() {
      super(), Fo(this, i, !0), Fo(this, o), Fo(this, r, {}), Fo(this, "container"), t.shadow ? this.container = this.attachShadow({
        mode: t.shadow
      }) : this.container = this, this[be].container = this.container;
      for (const y of l) {
        const x = d[y], k = this.getAttribute(x), p = u[y], c = p ? Ul[p] : null;
        if (p === "method") {
          const h = Up(x);
          Object.defineProperty(this[be].container, h, {
            enumerable: !0,
            configurable: !0,
            get() {
              return this[be][h];
            },
            set(w) {
              this[be][h] = w, this[vr]();
            }
          }), this[be][y] = c.parse(k, x, this);
        }
        c != null && c.parse && k && (this[be][y] = c.parse(k, x, this));
      }
      for (const y of s)
        this[be][y] = (x) => {
          const k = y.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(k, { detail: x, ...a[y] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(f);
    }
    connectedCallback() {
      this[Lo] = !0, this[vr]();
    }
    disconnectedCallback() {
      this[Lo] = !1, this[an] && n.unmount(this[an]), delete this[an];
    }
    attributeChangedCallback(y, x, k) {
      const p = f[y], c = u[p], h = c ? Ul[c] : null;
      p in u && h != null && h.parse && k && (this[be][p] = h.parse(k, y, this), this[vr]());
    }
    [(i = Lo, o = an, r = be, vr)]() {
      this[Lo] && (this[an] ? n.update(this[an], this[be]) : this[an] = n.mount(
        this.container,
        e,
        this[be]
      ));
    }
  }
  for (const v of l) {
    const y = d[v], x = u[v];
    Object.defineProperty(m.prototype, v, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[be][v];
      },
      set(k) {
        this[be][v] = k;
        const p = x ? Ul[x] : null;
        if (p != null && p.stringify) {
          const c = p.stringify(k, y, this);
          this.getAttribute(y) !== c && this.setAttribute(y, c);
        } else
          this[vr]();
      }
    });
  }
  return m;
}
function zy(e, t, n) {
  const r = Gu(e), o = Ct.createElement(t, n);
  return r.render(o), {
    root: r,
    ReactComponent: t
  };
}
function Fy({ root: e, ReactComponent: t }, n) {
  const r = Ct.createElement(t, n);
  e.render(r);
}
function Ly({ root: e }) {
  e.unmount();
}
function Dy(e, t = {}) {
  return jy(e, t, { mount: zy, update: Fy, unmount: Ly });
}
var Wp = { exports: {} }, sl = {};
var Iy = T, Oy = Symbol.for("react.element"), by = Symbol.for("react.fragment"), Ay = Object.prototype.hasOwnProperty, Uy = Iy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Wy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vp(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Ay.call(t, r) && !Wy.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Oy, type: e, key: i, ref: l, props: o, _owner: Uy.current };
}
sl.Fragment = by;
sl.jsx = Vp;
sl.jsxs = Vp;
Wp.exports = sl;
var g = Wp.exports;
var Vy = {
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
const By = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), q = (e, t) => {
  const n = T.forwardRef(
    ({
      color: r = "currentColor",
      size: o = 24,
      strokeWidth: i = 2,
      absoluteStrokeWidth: l,
      className: s = "",
      children: u,
      ...a
    }, d) => T.createElement(
      "svg",
      {
        ref: d,
        ...Vy,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: l ? Number(i) * 24 / Number(o) : i,
        className: ["lucide", `lucide-${By(e)}`, s].join(" "),
        ...a
      },
      [
        ...t.map(([f, m]) => T.createElement(f, m)),
        ...Array.isArray(u) ? u : [u]
      ]
    )
  );
  return n.displayName = `${e}`, n;
};
const Bp = q("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
const Hy = q("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const Qy = q("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const Yy = q("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
]);
const Xy = q("CheckCheck", [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
]);
const Ky = q("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Gy = q("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
const Jy = q("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
const Hp = q("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
const Zy = q("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
const qy = q("MicOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2", key: "80xlxr" }],
  ["path", { d: "M5 10v2a7 7 0 0 0 12 5", key: "p2k8kg" }],
  ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
  ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
]);
const eg = q("Mic", [
  ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
]);
const tg = q("Minimize2", [
  ["polyline", { points: "4 14 10 14 10 20", key: "11kfnr" }],
  ["polyline", { points: "20 10 14 10 14 4", key: "rlmsce" }],
  ["line", { x1: "14", x2: "21", y1: "10", y2: "3", key: "o5lafz" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
const ng = q("MoreVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);
const rg = q("Paperclip", [
  [
    "path",
    {
      d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
      key: "1u3ebp"
    }
  ]
]);
const $c = q("Pause", [
  ["rect", { width: "4", height: "16", x: "6", y: "4", key: "iffhe4" }],
  ["rect", { width: "4", height: "16", x: "14", y: "4", key: "sjin7j" }]
]);
const Pc = q("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
const og = q("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const ig = q("Power", [
  ["path", { d: "M12 2v10", key: "mnfbl" }],
  ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
]);
const lg = q("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
const sg = q("Smile", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);
const ug = q("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
const ag = q("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
const cg = q("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
const Qp = q("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function dg({ isOpen: e, onClick: t, config: n }) {
  const r = `
    fixed bottom-6 right-6 p-4 text-white shadow-lg transition-all duration-300
    ${n.shape === "round" ? "rounded-full" : "rounded-lg"}
  `;
  return /* @__PURE__ */ g.jsx(
    "button",
    {
      onClick: t,
      style: { backgroundColor: n.color },
      className: r,
      children: e ? /* @__PURE__ */ g.jsx(Qp, { className: "h-6 w-6" }) : /* @__PURE__ */ g.jsx(Hp, { className: "h-6 w-6" })
    }
  );
}
const Do = 43200, Nc = 1440, Tc = Symbol.for("constructDateFrom");
function Ju(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Tc in e ? e[Tc](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function nn(e, t) {
  return Ju(e, e);
}
let fg = {};
function pg() {
  return fg;
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
function Zu(e, ...t) {
  const n = Ju.bind(
    null,
    e || t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function ti(e, t) {
  const n = +nn(e) - +nn(t);
  return n < 0 ? -1 : n > 0 ? 1 : n;
}
function hg(e) {
  return Ju(e, Date.now());
}
function mg(e, t, n) {
  const [r, o] = Zu(
    n == null ? void 0 : n.in,
    e,
    t
  ), i = r.getFullYear() - o.getFullYear(), l = r.getMonth() - o.getMonth();
  return i * 12 + l;
}
function yg(e) {
  return (t) => {
    const r = (e ? Math[e] : Math.trunc)(t);
    return r === 0 ? 0 : r;
  };
}
function gg(e, t) {
  return +nn(e) - +nn(t);
}
function vg(e, t) {
  const n = nn(e);
  return n.setHours(23, 59, 59, 999), n;
}
function wg(e, t) {
  const n = nn(e), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function xg(e, t) {
  const n = nn(e);
  return +vg(n) == +wg(n);
}
function kg(e, t, n) {
  const [r, o, i] = Zu(
    n == null ? void 0 : n.in,
    e,
    e,
    t
  ), l = ti(o, i), s = Math.abs(
    mg(o, i)
  );
  if (s < 1) return 0;
  o.getMonth() === 1 && o.getDate() > 27 && o.setDate(30), o.setMonth(o.getMonth() - l * s);
  let u = ti(o, i) === -l;
  xg(r) && s === 1 && ti(r, i) === 1 && (u = !1);
  const a = l * (s - +u);
  return a === 0 ? 0 : a;
}
function Sg(e, t, n) {
  const r = gg(e, t) / 1e3;
  return yg(n == null ? void 0 : n.roundingMethod)(r);
}
const Cg = {
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
}, _g = (e, t, n) => {
  let r;
  const o = Cg[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Wl(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Eg = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, $g = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Pg = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ng = {
  date: Wl({
    formats: Eg,
    defaultWidth: "full"
  }),
  time: Wl({
    formats: $g,
    defaultWidth: "full"
  }),
  dateTime: Wl({
    formats: Pg,
    defaultWidth: "full"
  })
}, Tg = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Mg = (e, t, n, r) => Tg[e];
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
}, jg = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, zg = {
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
}, Fg = {
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
}, Lg = {
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
}, Ig = (e, t) => {
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
}, Og = {
  ordinalNumber: Ig,
  era: wr({
    values: Rg,
    defaultWidth: "wide"
  }),
  quarter: wr({
    values: jg,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: wr({
    values: zg,
    defaultWidth: "wide"
  }),
  day: wr({
    values: Fg,
    defaultWidth: "wide"
  }),
  dayPeriod: wr({
    values: Lg,
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
    const l = i[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(s) ? Ag(s, (f) => f.test(l)) : (
      // [TODO] -- I challenge you to fix the type
      bg(s, (f) => f.test(l))
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
function bg(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Ag(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Ug(e) {
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
const Wg = /^(\d+)(th|st|nd|rd)?/i, Vg = /\d+/i, Bg = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Hg = {
  any: [/^b/i, /^(a|c)/i]
}, Qg = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Yg = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Xg = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Kg = {
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
}, Gg = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Jg = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Zg = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, qg = {
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
}, e1 = {
  ordinalNumber: Ug({
    matchPattern: Wg,
    parsePattern: Vg,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: xr({
    matchPatterns: Bg,
    defaultMatchWidth: "wide",
    parsePatterns: Hg,
    defaultParseWidth: "any"
  }),
  quarter: xr({
    matchPatterns: Qg,
    defaultMatchWidth: "wide",
    parsePatterns: Yg,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: xr({
    matchPatterns: Xg,
    defaultMatchWidth: "wide",
    parsePatterns: Kg,
    defaultParseWidth: "any"
  }),
  day: xr({
    matchPatterns: Gg,
    defaultMatchWidth: "wide",
    parsePatterns: Jg,
    defaultParseWidth: "any"
  }),
  dayPeriod: xr({
    matchPatterns: Zg,
    defaultMatchWidth: "any",
    parsePatterns: qg,
    defaultParseWidth: "any"
  })
}, t1 = {
  code: "en-US",
  formatDistance: _g,
  formatLong: Ng,
  formatRelative: Mg,
  localize: Og,
  match: e1,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function n1(e, t, n) {
  const r = pg(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? t1, i = 2520, l = ti(e, t);
  if (isNaN(l)) throw new RangeError("Invalid time value");
  const s = Object.assign({}, n, {
    addSuffix: n == null ? void 0 : n.addSuffix,
    comparison: l
  }), [u, a] = Zu(
    n == null ? void 0 : n.in,
    ...l > 0 ? [t, e] : [e, t]
  ), d = Sg(a, u), f = (Mc(a) - Mc(u)) / 1e3, m = Math.round((d - f) / 60);
  let v;
  if (m < 2)
    return n != null && n.includeSeconds ? d < 5 ? o.formatDistance("lessThanXSeconds", 5, s) : d < 10 ? o.formatDistance("lessThanXSeconds", 10, s) : d < 20 ? o.formatDistance("lessThanXSeconds", 20, s) : d < 40 ? o.formatDistance("halfAMinute", 0, s) : d < 60 ? o.formatDistance("lessThanXMinutes", 1, s) : o.formatDistance("xMinutes", 1, s) : m === 0 ? o.formatDistance("lessThanXMinutes", 1, s) : o.formatDistance("xMinutes", m, s);
  if (m < 45)
    return o.formatDistance("xMinutes", m, s);
  if (m < 90)
    return o.formatDistance("aboutXHours", 1, s);
  if (m < Nc) {
    const y = Math.round(m / 60);
    return o.formatDistance("aboutXHours", y, s);
  } else {
    if (m < i)
      return o.formatDistance("xDays", 1, s);
    if (m < Do) {
      const y = Math.round(m / Nc);
      return o.formatDistance("xDays", y, s);
    } else if (m < Do * 2)
      return v = Math.round(m / Do), o.formatDistance("aboutXMonths", v, s);
  }
  if (v = kg(a, u), v < 12) {
    const y = Math.round(m / Do);
    return o.formatDistance("xMonths", y, s);
  } else {
    const y = v % 12, x = Math.trunc(v / 12);
    return y < 3 ? o.formatDistance("aboutXYears", x, s) : y < 9 ? o.formatDistance("overXYears", x, s) : o.formatDistance("almostXYears", x + 1, s);
  }
}
function r1(e, t) {
  return n1(e, hg(e), t);
}
function o1({
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
  config: f
}) {
  const [m, v] = T.useState(!1), y = () => {
    switch (l) {
      case "recent-chats":
        return "Recent chats";
      default:
        return f.name;
    }
  }, x = () => o.length > 0 ? "Online" : i ? `Last active ${r1(i, {
    addSuffix: !0
  })}` : "Offline", k = l !== "chat", p = l === "chat";
  return /* @__PURE__ */ g.jsx(
    "div",
    {
      style: { backgroundColor: f.color },
      className: "p-6 rounded-t-lg text-white",
      children: /* @__PURE__ */ g.jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ g.jsx("div", { children: /* @__PURE__ */ g.jsxs("div", { className: "flex items-center gap-3", children: [
          k && /* @__PURE__ */ g.jsx(
            "button",
            {
              onClick: s,
              className: "p-1 hover:bg-white/10 rounded-full transition-colors",
              children: /* @__PURE__ */ g.jsx(Hy, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ g.jsxs("div", { children: [
            /* @__PURE__ */ g.jsx("h3", { className: "font-semibold text-lg", children: y() }),
            p && /* @__PURE__ */ g.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
              /* @__PURE__ */ g.jsx(
                "div",
                {
                  className: `w-2 h-2 rounded-full ${o.length > 0 ? "bg-green-400" : "bg-red-400"}`
                }
              ),
              /* @__PURE__ */ g.jsx("p", { className: "text-sm opacity-90", children: x() })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ g.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ g.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ g.jsx(
            "button",
            {
              onClick: () => v(!m),
              className: "p-2 hover:bg-white/10 rounded-full transition-colors",
              children: /* @__PURE__ */ g.jsx(ng, { className: "h-4 w-4" })
            }
          ),
          m && /* @__PURE__ */ g.jsxs("div", { className: "absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg py-2 min-w-48 z-50", children: [
            /* @__PURE__ */ g.jsxs(
              "button",
              {
                onClick: () => {
                  u(), v(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ g.jsx(og, { className: "h-4 w-4" }),
                  "Start New Chat"
                ]
              }
            ),
            /* @__PURE__ */ g.jsxs(
              "button",
              {
                onClick: () => {
                  a(), v(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ g.jsx(ig, { className: "h-4 w-4" }),
                  "End Chat"
                ]
              }
            ),
            /* @__PURE__ */ g.jsxs(
              "button",
              {
                onClick: () => {
                  d(), v(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ g.jsx(Zy, { className: "h-4 w-4" }),
                  "View Recent Chats"
                ]
              }
            ),
            /* @__PURE__ */ g.jsx("hr", {}),
            /* @__PURE__ */ g.jsx(
              "button",
              {
                onClick: () => {
                  t(), v(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: n ? /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
                  /* @__PURE__ */ g.jsx(tg, { className: "h-4 w-4" }),
                  " Minimize"
                ] }) : /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
                  /* @__PURE__ */ g.jsx(Jy, { className: "h-4 w-4" }),
                  " Maximize"
                ] })
              }
            ),
            /* @__PURE__ */ g.jsxs(
              "button",
              {
                onClick: () => {
                  e(), v(!1);
                },
                className: "w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ g.jsx(Qp, { className: "h-4 w-4" }),
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
function i1({
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
        return /* @__PURE__ */ g.jsx(Ky, { className: "w-3 h-3 text-gray-500" });
      case "read":
        return /* @__PURE__ */ g.jsx(Xy, { className: "w-3 h-3 text-blue-500" });
      case "failed":
        return /* @__PURE__ */ g.jsx(Bp, { className: "w-3 h-3 text-red-500" });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ g.jsxs("div", { className: "flex items-center justify-end gap-1 text-xs text-gray-500", children: [
    /* @__PURE__ */ g.jsx("span", { children: r(t) }),
    e && o(),
    e === "failed" && n && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
      /* @__PURE__ */ g.jsx("span", { className: "text-red-500", children: "Not sent" }),
      /* @__PURE__ */ g.jsx(
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
function Yp({ onSubmit: e, config: t }) {
  var a;
  const n = (t.fields || []).reduce((d, f) => (d[f] = "", d), {}), [r, o] = T.useState(n), [i, l] = T.useState(!1), s = (d, f) => {
    o((m) => ({ ...m, [d]: f }));
  }, u = async (d) => {
    d.preventDefault(), l(!0);
    try {
      e(r);
    } finally {
      l(!1);
    }
  };
  return /* @__PURE__ */ g.jsx("div", { className: "py-2", children: /* @__PURE__ */ g.jsx("form", { onSubmit: u, className: "flex items-center gap-3", children: /* @__PURE__ */ g.jsxs("div", { className: "flex-1 flex items-center gap-2", children: [
    (a = t.fields) == null ? void 0 : a.map((d) => /* @__PURE__ */ g.jsx(
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
    /* @__PURE__ */ g.jsx(
      "button",
      {
        type: "submit",
        style: {
          backgroundColor: t.color
        },
        className: "px-3 py-2 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-1",
        children: /* @__PURE__ */ g.jsx(Qy, { className: "h-4 w-4" })
      }
    )
  ] }) }) });
}
function l1({
  messages: e,
  onRetryMessage: t,
  onFormSubmit: n,
  config: r
}) {
  const o = T.useRef(null);
  T.useEffect(() => {
    var l;
    (l = o.current) == null || l.scrollIntoView({ behavior: "smooth" });
  }, [e]);
  const i = (l) => {
    var s, u, a;
    if ((s = l.file) != null && s.url) {
      const d = (u = l.file.type) == null ? void 0 : u.startsWith("image/"), f = (a = l.file.type) == null ? void 0 : a.startsWith("audio/");
      return d ? /* @__PURE__ */ g.jsx("div", { children: /* @__PURE__ */ g.jsx(
        "img",
        {
          src: l.file.url,
          alt: l.file.name,
          className: "max-w-xs rounded-lg mb-2"
        }
      ) }) : f ? /* @__PURE__ */ g.jsx("div", { children: /* @__PURE__ */ g.jsxs("audio", { controls: !0, className: "max-w-xs mb-2 p-2 max-w-[200px]", children: [
        /* @__PURE__ */ g.jsx("source", { src: l.file.url, type: l.file.type }),
        "Your browser does not support the audio element."
      ] }) }) : /* @__PURE__ */ g.jsx("div", { children: /* @__PURE__ */ g.jsx(
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
      return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
        /* @__PURE__ */ g.jsx("span", { children: l.content }),
        /* @__PURE__ */ g.jsx(Yp, { onSubmit: n, config: r })
      ] });
    return l.content;
  };
  return /* @__PURE__ */ g.jsxs("div", { className: "flex-1 overflow-y-auto p-6 space-y-4", children: [
    e.map((l, s) => /* @__PURE__ */ g.jsx(
      "div",
      {
        className: `flex ${l.from === "user" ? "justify-end" : "justify-start"}`,
        children: /* @__PURE__ */ g.jsxs("div", { className: "flex flex-col gap-1 overflow-hidden", children: [
          /* @__PURE__ */ g.jsx(
            "div",
            {
              className: `rounded-2xl ${l.type === "text" || l.type === "form" ? l.from === "user" ? "p-4 bg-blue-500 text-white rounded-br-sm" : "p-4 bg-gray-100 text-gray-800 rounded-bl-sm" : ""}`,
              children: i(l)
            }
          ),
          /* @__PURE__ */ g.jsx("div", { className: "px-2", children: /* @__PURE__ */ g.jsx(
            i1,
            {
              status: l.from === "user" ? l.status : void 0,
              timestamp: l.timestamp,
              onRetry: l.status === "failed" ? () => t(l.id) : void 0
            }
          ) })
        ] })
      },
      l.id || s
    )),
    /* @__PURE__ */ g.jsx("div", { ref: o })
  ] });
}
const s1 = [
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
function u1({ onEmojiSelect: e, onClose: t }) {
  return /* @__PURE__ */ g.jsx("div", { className: "absolute bottom-full left-0 mb-2 bg-white border rounded-lg shadow-lg p-3 w-64 max-h-48 overflow-y-auto z-50", children: /* @__PURE__ */ g.jsx("div", { className: "grid grid-cols-8 gap-1", children: s1.map((n, r) => /* @__PURE__ */ g.jsx(
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
function a1({ onAudioRecorded: e, config: t }) {
  const [n, r] = T.useState(!1), [o, i] = T.useState(!1), [l, s] = T.useState(0), [u, a] = T.useState(null), [d, f] = T.useState(!1), [m, v] = T.useState(null), y = T.useRef(null), x = T.useRef([]), k = T.useRef(null), p = T.useRef(null), c = T.useRef(null);
  T.useEffect(() => () => {
    k.current && clearInterval(k.current), c.current && c.current.getTracks().forEach((B) => B.stop());
  }, []);
  const h = async () => {
    try {
      const B = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      return c.current = B, v(!0), !0;
    } catch (B) {
      return console.error("Microphone permission denied:", B), v(!1), !1;
    }
  }, w = async () => {
    if (!(!await h() || !c.current))
      try {
        x.current = [];
        const ie = new MediaRecorder(c.current, {
          mimeType: "audio/webm;codecs=opus"
        });
        y.current = ie, ie.ondataavailable = (Oe) => {
          Oe.data.size > 0 && x.current.push(Oe.data);
        }, ie.onstop = () => {
          const Oe = new Blob(x.current, {
            type: "audio/webm;codecs=opus"
          });
          a(Oe), c.current && (c.current.getTracks().forEach((Rn) => Rn.stop()), c.current = null);
        }, ie.start(100), r(!0), s(0), k.current = setInterval(() => {
          s((Oe) => Oe + 1);
        }, 1e3);
      } catch (ie) {
        console.error("Error starting recording:", ie);
      }
  }, C = () => {
    y.current && y.current.state === "recording" && (y.current.pause(), i(!0), k.current && clearInterval(k.current));
  }, $ = () => {
    y.current && y.current.state === "paused" && (y.current.resume(), i(!1), k.current = setInterval(() => {
      s((B) => B + 1);
    }, 1e3));
  }, E = () => {
    y.current && y.current.state !== "inactive" && (y.current.stop(), r(!1), i(!1), k.current && clearInterval(k.current));
  }, M = () => {
    if (u && !d) {
      const B = URL.createObjectURL(u);
      p.current = new Audio(B), p.current.onended = () => {
        f(!1), URL.revokeObjectURL(B);
      }, p.current.play(), f(!0);
    } else p.current && d && (p.current.pause(), f(!1));
  }, W = () => {
    if (u) {
      const B = new File([u], "recording.wav", {
        type: "audio/wav"
      });
      e(B), a(null), s(0), f(!1);
    }
  }, F = () => {
    n && E(), a(null), s(0), f(!1), c.current && (c.current.getTracks().forEach((B) => B.stop()), c.current = null);
  }, oe = (B) => {
    const ie = Math.floor(B / 60), Oe = B % 60;
    return `${ie}:${Oe.toString().padStart(2, "0")}`;
  };
  return m === !1 ? /* @__PURE__ */ g.jsx(
    "button",
    {
      type: "button",
      onClick: h,
      className: "p-2 text-gray-400 hover:text-gray-600 transition-colors",
      title: "Microphone access denied. Click to retry.",
      children: /* @__PURE__ */ g.jsx(qy, { className: "h-5 w-5" })
    }
  ) : n || u ? /* @__PURE__ */ g.jsxs("div", { className: "flex items-center gap-2", children: [
    n && /* @__PURE__ */ g.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ g.jsx("div", { className: "w-2 h-2 bg-red-500 rounded-full animate-pulse" }),
      /* @__PURE__ */ g.jsx("span", { className: "text-xs text-gray-600 min-w-[32px]", children: oe(l) })
    ] }),
    u && /* @__PURE__ */ g.jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ g.jsx(
        "button",
        {
          onClick: M,
          className: "p-1 text-gray-600 hover:text-gray-800 transition-colors",
          title: d ? "Pause" : "Play",
          children: d ? /* @__PURE__ */ g.jsx($c, { className: "h-4 w-4" }) : /* @__PURE__ */ g.jsx(Pc, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ g.jsx("span", { className: "text-xs text-gray-600 min-w-[32px]", children: oe(l) })
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "flex items-center gap-1", children: [
      n && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
        /* @__PURE__ */ g.jsx(
          "button",
          {
            onClick: o ? $ : C,
            className: "p-1 text-gray-600 hover:text-gray-800 transition-colors",
            title: o ? "Resume" : "Pause",
            children: o ? /* @__PURE__ */ g.jsx(Pc, { className: "h-4 w-4" }) : /* @__PURE__ */ g.jsx($c, { className: "h-4 w-4" })
          }
        ),
        /* @__PURE__ */ g.jsx(
          "button",
          {
            onClick: E,
            className: "p-1 text-red-600 hover:text-red-800 transition-colors",
            title: "Stop recording",
            children: /* @__PURE__ */ g.jsx(ug, { className: "h-4 w-4" })
          }
        )
      ] }),
      u && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
        /* @__PURE__ */ g.jsx(
          "button",
          {
            onClick: W,
            style: { backgroundColor: t.color },
            className: "px-2 py-1 text-white text-xs rounded hover:opacity-90 transition-opacity",
            title: "Send audio",
            children: "Send"
          }
        ),
        /* @__PURE__ */ g.jsx(
          "button",
          {
            onClick: F,
            className: "p-1 text-gray-600 hover:text-red-600 transition-colors",
            title: "Delete recording",
            children: /* @__PURE__ */ g.jsx(ag, { className: "h-4 w-4" })
          }
        )
      ] })
    ] })
  ] }) : /* @__PURE__ */ g.jsx(
    "button",
    {
      type: "button",
      onClick: w,
      className: "p-2 text-gray-500 hover:text-gray-700 transition-colors",
      title: "Record audio message",
      children: /* @__PURE__ */ g.jsx(eg, { className: "h-5 w-5" })
    }
  );
}
function c1({
  ticketdeskId: e,
  selectedSession: t,
  config: n,
  onSendMessage: r,
  onError: o
}) {
  const [, i] = e.split("_"), [l, s] = T.useState(""), [u, a] = T.useState(!1), d = T.useRef(null), [f, m] = T.useState(!1), v = (h) => {
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
  }, y = (h) => {
    s((w) => w + h);
  }, x = async (h) => {
    const w = new FormData();
    w.append("file", h);
    const C = await fetch(
      `https://api.ticketdesk.ai/v1/uploader?session_id=${t == null ? void 0 : t.session_id}&site_id=${i}`,
      {
        method: "POST",
        body: w
      }
    ), $ = await C.json();
    if (!C.ok)
      throw new Error($.message);
    return $;
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
      const $ = C.getAsFile();
      $ && k($);
    }
  };
  return /* @__PURE__ */ g.jsxs("div", { className: "border-t bg-white", children: [
    /* @__PURE__ */ g.jsx("form", { onSubmit: v, className: "p-4 pb-2 relative", children: /* @__PURE__ */ g.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ g.jsx(
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
      /* @__PURE__ */ g.jsx(
        "button",
        {
          type: "submit",
          style: { backgroundColor: n.color },
          className: "p-3 text-white rounded-full hover:opacity-90 transition-opacity",
          disabled: !l.trim(),
          children: /* @__PURE__ */ g.jsx(lg, { className: "h-5 w-5" })
        }
      )
    ] }) }),
    /* @__PURE__ */ g.jsxs("div", { className: "px-4 pb-1 flex items-center justify-between gap-2 relative", children: [
      /* @__PURE__ */ g.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ g.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              var h;
              return (h = d.current) == null ? void 0 : h.click();
            },
            className: "p-2 text-gray-500 hover:text-gray-700 transition-colors",
            title: "Upload file",
            children: /* @__PURE__ */ g.jsx(rg, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ g.jsx(a1, { onAudioRecorded: k, config: n }),
        /* @__PURE__ */ g.jsx(
          "button",
          {
            type: "button",
            onClick: () => a(!u),
            className: "p-2 text-gray-500 hover:text-gray-700 transition-colors rounded-full",
            children: /* @__PURE__ */ g.jsx(sg, { className: "h-4 w-4" })
          }
        ),
        u && /* @__PURE__ */ g.jsx(
          u1,
          {
            onEmojiSelect: y,
            onClose: () => a(!1)
          }
        ),
        f && /* @__PURE__ */ g.jsx("span", { className: "text-sm text-gray-700", children: "Uploading..." })
      ] }),
      /* @__PURE__ */ g.jsx("div", { className: "flex-1 flex justify-end", children: /* @__PURE__ */ g.jsxs(
        "a",
        {
          href: "https://ticketdesk.ai/?utm_source=chat-widget&utm_medium=referral&utm_campaign=powered-by",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-xs text-gray-500",
          children: [
            "Powered by",
            " ",
            /* @__PURE__ */ g.jsx("span", { className: "font-semibold text-gray-700 hover:text-gray-800 transition-colors", children: "Ticketdesk AI" })
          ]
        }
      ) }),
      /* @__PURE__ */ g.jsx(
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
function d1({
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
  return /* @__PURE__ */ g.jsx("div", { className: "flex-1 overflow-y-auto", children: e.length === 0 ? /* @__PURE__ */ g.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-gray-500", children: [
    /* @__PURE__ */ g.jsx(Hp, { className: "h-12 w-12 mb-4 opacity-50" }),
    /* @__PURE__ */ g.jsx("p", { children: "No recent chats found" })
  ] }) : /* @__PURE__ */ g.jsx("div", { className: "divide-y", children: e.map((o) => /* @__PURE__ */ g.jsxs(
    "button",
    {
      onClick: () => t(o.session_id),
      className: "w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors text-left",
      children: [
        /* @__PURE__ */ g.jsx("div", { className: "flex-shrink-0", children: o.last_message_from === "user" ? /* @__PURE__ */ g.jsx(cg, { className: "h-8 w-8 text-gray-400" }) : /* @__PURE__ */ g.jsx(Yy, { className: "h-8 w-8 text-indigo-500" }) }),
        /* @__PURE__ */ g.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ g.jsxs("div", { className: "flex justify-start items-center gap-3 mb-1", children: [
            /* @__PURE__ */ g.jsx("span", { className: "font-medium truncate", children: o.last_message_from === "user" ? "You" : o.last_message_from }),
            /* @__PURE__ */ g.jsx("span", { className: "text-xs text-gray-500", children: n(o.updated_at) })
          ] }),
          /* @__PURE__ */ g.jsx("p", { className: "text-sm text-gray-600 truncate", children: o.last_message })
        ] }),
        /* @__PURE__ */ g.jsx(
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
function f1({ onFormSubmit: e, config: t }) {
  const [n, r] = T.useState(!1);
  return /* @__PURE__ */ g.jsx("div", { className: "px-6 py-3 bg-yellow-50 border-t border-yellow-200", children: n ? /* @__PURE__ */ g.jsx(
    Yp,
    {
      config: t,
      onSubmit: (o) => {
        e(o), r(!1);
      }
    }
  ) : /* @__PURE__ */ g.jsxs(
    "button",
    {
      className: "w-full flex items-center gap-2 text-left text-yellow-800 hover:text-yellow-900 transition-colors group",
      onClick: () => r(!0),
      children: [
        /* @__PURE__ */ g.jsx(Gy, { className: "h-4 w-4 text-yellow-600" }),
        /* @__PURE__ */ g.jsxs("span", { className: "text-sm flex-1", children: [
          /* @__PURE__ */ g.jsx("span", { className: "text-blue-600", children: "Click here" }),
          " to set your email to get notifications"
        ] })
      ]
    }
  ) });
}
function p1({
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
  onEndChat: f,
  onLoadSession: m,
  onGetRecentChats: v,
  onUpdateProfile: y,
  errorMessage: x,
  setErrorMessage: k,
  onClose: p,
  onToggleMaximize: c,
  onSendMessage: h,
  onRetryMessage: w
}) {
  const [C, $] = T.useState(
    "chat"
  );
  if (!t) return null;
  const E = n ? "fixed inset-4 w-auto h-auto max-w-none max-h-none min-h-0" : "fixed bottom-24 right-6 w-[400px] max-w-[calc(100vw-3rem)] h-[75vh] max-h-[800px] min-h-[400px]", M = () => {
    $("recent-chats"), v();
  }, W = () => {
    $("chat");
  }, F = (ie) => {
    m(ie), $("chat");
  }, oe = (ie) => {
    y(ie), $("chat");
  }, B = a && !a.email && i.filter((ie) => ie.from === "user").length > 1;
  return /* @__PURE__ */ g.jsxs(
    "div",
    {
      className: `${E} bg-white rounded-lg shadow-2xl flex flex-col animate-slide-up z-50`,
      children: [
        /* @__PURE__ */ g.jsx(
          o1,
          {
            onClose: p,
            onToggleMaximize: c,
            isMaximized: n,
            isConnected: r,
            operators: s,
            lastActive: u,
            currentView: C,
            onBackToChat: W,
            onStartNewChat: d,
            onEndChat: f,
            onViewRecentChats: M,
            config: o
          }
        ),
        C === "chat" && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
          /* @__PURE__ */ g.jsx(
            l1,
            {
              messages: i,
              onRetryMessage: w,
              onFormSubmit: oe,
              config: o
            }
          ),
          B && /* @__PURE__ */ g.jsx(f1, { config: o, onFormSubmit: oe }),
          x && /* @__PURE__ */ g.jsxs("div", { className: "px-6 py-3 bg-red-100 text-sm border-t border-red-200 text-red-800 hover:text-red-900 flex items-center gap-2 text-left", children: [
            /* @__PURE__ */ g.jsx(Bp, { className: "h-4 w-4 text-red-600" }),
            x
          ] }),
          /* @__PURE__ */ g.jsx(
            c1,
            {
              ticketdeskId: e,
              config: o,
              selectedSession: a,
              onSendMessage: h,
              onError: k
            }
          )
        ] }),
        C === "recent-chats" && /* @__PURE__ */ g.jsx(
          d1,
          {
            sessions: l,
            onLoadSession: F,
            config: o
          }
        )
      ]
    }
  );
}
(!globalThis.EventTarget || !globalThis.Event) && console.error(`
  PartySocket requires a global 'EventTarget' class to be available!
  You can polyfill this global by adding this to your code before any partysocket imports: 
  
  \`\`\`
  import 'partysocket/event-target-polyfill';
  \`\`\`
  Please file an issue at https://github.com/partykit/partykit if you're still having trouble.
`);
var Xp = class extends Event {
  // biome-ignore lint/suspicious/noExplicitAny: vibes
  constructor(t, n) {
    super("error", n);
    A(this, "message");
    A(this, "error");
    this.message = t.message, this.error = t;
  }
}, Kp = class extends Event {
  // biome-ignore lint/style/useDefaultParameterLast: legacy
  // biome-ignore lint/suspicious/noExplicitAny: legacy
  constructor(t = 1e3, n = "", r) {
    super("close", r);
    A(this, "code");
    A(this, "reason");
    A(this, "wasClean", !0);
    this.code = t, this.reason = n;
  }
}, Vl = {
  Event,
  ErrorEvent: Xp,
  CloseEvent: Kp
};
function h1(e, t) {
  if (!e)
    throw new Error(t);
}
function m1(e) {
  return new e.constructor(e.type, e);
}
function y1(e) {
  return "data" in e ? new MessageEvent(e.type, e) : "code" in e || "reason" in e ? new Kp(
    // @ts-expect-error we need to fix event/listener types
    e.code || 1999,
    // @ts-expect-error we need to fix event/listener types
    e.reason || "unknown reason",
    e
  ) : "error" in e ? new Xp(e.error, e) : new Event(e.type, e);
}
var Rc, g1 = typeof process < "u" && typeof ((Rc = process.versions) == null ? void 0 : Rc.node) < "u" && typeof document > "u", Io = g1 ? y1 : m1, cn = {
  maxReconnectionDelay: 1e4,
  minReconnectionDelay: 1e3 + Math.random() * 4e3,
  minUptime: 5e3,
  reconnectionDelayGrowFactor: 1.3,
  connectionTimeout: 4e3,
  maxRetries: Number.POSITIVE_INFINITY,
  maxEnqueuedMessages: Number.POSITIVE_INFINITY,
  startClosed: !1,
  debug: !1
}, jc = !1, v1 = class pn extends EventTarget {
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
      clearTimeout(this._connectTimeout), this._uptimeTimeout = setTimeout(() => this._acceptOpen(), r), h1(this._ws, "WebSocket is not defined"), this._ws.binaryType = this._binaryType, this._messageQueue.forEach((o) => {
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
      !this._options.WebSocket && typeof WebSocket > "u" && !jc && (console.error(`‼️ No WebSocket implementation available. You should define options.WebSocket. 

For example, if you're using node.js, run \`npm install ws\`, and then in your code:

import PartySocket from 'partysocket';
import WS from 'ws';

const partysocket = new PartySocket({
  host: "127.0.0.1:1999",
  room: "test-room",
  WebSocket: WS
});

`), jc = !0);
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
var w1 = (e) => e[1] !== null && e[1] !== void 0;
function x1() {
  if (typeof crypto < "u" && crypto.randomUUID)
    return crypto.randomUUID();
  let e = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime(), t = typeof performance < "u" && performance.now && performance.now() * 1e3 || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
    let r = Math.random() * 16;
    return e > 0 ? (r = (e + r) % 16 | 0, e = Math.floor(e / 16)) : (r = (t + r) % 16 | 0, t = Math.floor(t / 16)), (n === "x" ? r : r & 3 | 8).toString(16);
  });
}
function Gp(e, t, n = {}) {
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
  const m = s ?? "main", v = o ? `/${o}` : "", y = i || (f.startsWith("localhost:") || f.startsWith("127.0.0.1:") || f.startsWith("192.168.") || f.startsWith("10.") || f.startsWith("172.") && f.split(".")[1] >= "16" && f.split(".")[1] <= "31" || f.startsWith("[::ffff:7f00:1]:") ? (
    // http / ws
    t
  ) : (
    // https / wss
    `${t}s`
  )), x = `${y}://${f}/${u || `${a || "parties"}/${m}/${l}`}${v}`, k = (c = {}) => `${x}?${new URLSearchParams([
    ...Object.entries(n),
    ...Object.entries(c).filter(w1)
  ])}`, p = typeof d == "function" ? async () => k(await d()) : k(d);
  return {
    host: f,
    path: v,
    room: l,
    name: m,
    protocol: y,
    partyUrl: x,
    urlProvider: p
  };
}
var k1 = class extends v1 {
  constructor(t) {
    var n, r;
    const o = zc(t);
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
    const n = zc({
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
    const r = Gp(t, "http"), o = typeof r.urlProvider == "string" ? r.urlProvider : await r.urlProvider();
    return (t.fetch ?? fetch)(o, n);
  }
};
function zc(e) {
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
  } = e, d = t || x1(), f = Gp(e, "ws", { _pk: d });
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
var S1 = (e, t) => {
  const n = T.useRef(t);
  n.current = t, T.useEffect(() => {
    const r = (s) => {
      var u, a;
      return (a = (u = n.current) == null ? void 0 : u.onOpen) == null ? void 0 : a.call(u, s);
    }, o = (s) => {
      var u, a;
      return (a = (u = n.current) == null ? void 0 : u.onMessage) == null ? void 0 : a.call(u, s);
    }, i = (s) => {
      var u, a;
      return (a = (u = n.current) == null ? void 0 : u.onClose) == null ? void 0 : a.call(u, s);
    }, l = (s) => {
      var u, a;
      return (a = (u = n.current) == null ? void 0 : u.onError) == null ? void 0 : a.call(u, s);
    };
    return e.addEventListener("open", r), e.addEventListener("close", i), e.addEventListener("error", l), e.addEventListener("message", o), () => {
      e.removeEventListener("open", r), e.removeEventListener("close", i), e.removeEventListener("error", l), e.removeEventListener("message", o);
    };
  }, [e]);
}, C1 = (e) => [
  e.startClosed,
  e.minUptime,
  e.maxRetries,
  e.connectionTimeout,
  e.maxEnqueuedMessages,
  e.maxReconnectionDelay,
  e.minReconnectionDelay,
  e.reconnectionDelayGrowFactor,
  e.debug
];
function _1({
  options: e,
  createSocket: t,
  createSocketMemoKey: n
}) {
  const r = n(e), o = T.useMemo(() => e, [r]), [i, l] = T.useState(
    () => (
      // only connect on first mount
      t({ ...o, startClosed: !0 })
    )
  ), s = T.useRef(null), u = T.useRef(t);
  return u.current = t, T.useEffect(() => {
    if (s.current === i) {
      const a = u.current({
        ...o,
        // when reconnecting because of options change, we always reconnect
        // (startClosed only applies to initial mount)
        startClosed: !1
      });
      l(a);
    } else
      return !s.current && o.startClosed !== !0 && i.reconnect(), s.current = i, () => {
        i.close();
      };
  }, [i, o]), i;
}
function E1(e) {
  const { host: t, ...n } = e, r = _1({
    options: {
      host: t || (typeof window < "u" ? window.location.host : "dummy-domain.com"),
      ...n
    },
    createSocket: (o) => new k1(o),
    createSocketMemoKey: (o) => JSON.stringify([
      // NOTE: if query is defined as a function, the socket
      // won't reconnect when you change the function identity
      o.query,
      o.id,
      o.host,
      o.room,
      o.party,
      o.path,
      o.protocol,
      o.protocols,
      o.basePath,
      o.prefix,
      ...C1(o)
    ])
  });
  return S1(r, e), r;
}
const Fc = (e, t) => {
  try {
    localStorage.setItem(e, t);
  } catch (n) {
    console.warn("Failed to save to localStorage:", n);
  }
}, kr = (e) => {
  try {
    return localStorage.getItem(e);
  } catch (t) {
    return console.warn("Failed to read from localStorage:", t), null;
  }
}, Oo = () => "m_" + crypto.randomUUID();
function $1({ ticketdeskId: e }) {
  var Rn;
  const [t, n] = e.split("_"), [r, o] = T.useState({
    name: "Chat with us",
    color: "#3b82f6",
    shape: "round",
    welcome_message: "Hi there!"
  }), [i, l] = T.useState(!0), [s, u] = T.useState([]), [a, d] = T.useState(null), [f, m] = T.useState(null), [v, y] = T.useState([]), [x, k] = T.useState([]), [p, c] = T.useState(), [h, w] = T.useState(null), [C, $] = T.useState(
    null
  ), E = E1({
    host: "https://api.ticketdesk.ai",
    party: "chatroom",
    room: t,
    query: {
      site_id: n,
      session_id: kr(`ti_${n}_session_id`)
    },
    onOpen() {
    },
    onMessage(V) {
      const { type: I, data: S, error: j } = JSON.parse(V.data);
      I === "error" && j ? w(j) : I === "session:connected" ? (o({
        color: "#3b82f6",
        shape: "round",
        welcome_message: "Hi! How can I help you today?",
        ...S.config
      }), l(!1)) : I === "session:joined" ? (S.session_id && (d(S.session_id), Fc(`ti_${n}_session_id`, S.session_id)), S.client_id && (m(S.client_id), Fc(`ti_${n}_client_id`, S.client_id)), u(S.messages || []), $(S.session), S.operators && k(S.operators), S.last_active && c(S.last_active)) : I === "session:list" ? y(S.sessions) : I === "message:recieved" ? u((z) => [...z, S.message]) : I === "operator:list" ? S.operators && k(S.operators) : I === "message:read" ? u(
        (z) => z.map(
          (Q) => Q.id === S.message_id ? { ...Q, status: S.status } : Q
        )
      ) : console.log("Unhandled message type:", I, S);
    },
    onClose() {
    },
    onError(V) {
      console.error(V);
    }
  });
  T.useEffect(() => {
    const V = kr(`ti_${n}_session_id`), I = kr(`ti_${n}_client_id`);
    if (V && d(V), I && m(I), r != null && r.welcome_message) {
      const S = {
        id: Oo(),
        from: "agent",
        content: r == null ? void 0 : r.welcome_message,
        type: "text",
        timestamp: Date.now()
      };
      u([S]);
    }
  }, [n, r == null ? void 0 : r.welcome_message]);
  const M = T.useCallback(
    (V) => {
      if (!a || !f) {
        console.log("No session details yet, cannot send message");
        return;
      }
      if (V.id = Oo(), u((I) => {
        var j;
        const S = [...I, V];
        return C && ((j = r.fields) != null && j.length) && !C.email && !I.find((z) => z.type === "form") && setTimeout(() => {
          const z = {
            id: Oo(),
            from: "agent",
            content: "What is your email address?",
            type: "form",
            fields: ["email"],
            timestamp: Date.now()
          };
          u((Q) => [...Q, z]);
        }, 1e3), S;
      }), E) {
        const I = {
          type: "message:new",
          session_id: a,
          client_id: f,
          site_id: n,
          message: V
        };
        E.send(JSON.stringify(I));
      }
    },
    [
      a,
      f,
      E,
      C,
      (Rn = r.fields) == null ? void 0 : Rn.length,
      n
    ]
  ), W = T.useCallback(() => {
    if (E) {
      u([]), d(null);
      const V = {
        type: "session:new",
        client_id: f,
        site_id: n
      };
      E.send(JSON.stringify(V)), r != null && r.welcome_message && setTimeout(() => {
        const I = {
          id: Oo(),
          from: "agent",
          content: r.welcome_message,
          type: "text",
          timestamp: Date.now()
        };
        u([I]);
      }, 100);
    }
  }, [E, f, n, r.welcome_message]), F = T.useCallback(() => {
    if (E && a) {
      const V = {
        type: "session:state",
        session_id: a,
        client_id: f,
        site_id: n,
        state: "resolved"
      };
      E.send(JSON.stringify(V));
    }
  }, [E, a, n, f]), oe = T.useCallback(
    (V = null) => {
      if (E) {
        const I = kr(`ti_${n}_session_id`), S = kr(`ti_${n}_client_id`), j = {
          type: "session:join",
          session_id: V || I,
          client_id: f || S,
          site_id: n
        };
        E.send(JSON.stringify(j)), V && d(V);
      }
    },
    [E, f, n]
  ), B = T.useCallback(() => {
    if (E && f) {
      const V = {
        type: "session:list",
        client_id: f,
        site_id: n
      };
      E.send(JSON.stringify(V));
    }
  }, [E, f, n]), ie = T.useCallback(
    (V) => {
      if (E && f) {
        const I = {
          type: "session:update",
          client_id: f,
          session_id: a,
          site_id: n,
          data: V
        };
        E.send(JSON.stringify(I));
      }
      $(
        (I) => I && {
          ...I,
          ...V
        }
      );
    },
    [E, f, n, a]
  ), Oe = T.useCallback(
    (V) => {
      if (!a || !f) {
        console.log("No session details yet, cannot retry message");
        return;
      }
      const I = s.find((S) => S.id === V);
      if (I && I.from === "user")
        if (u(
          (S) => S.map(
            (j) => j.id === V ? { ...j, status: "sent" } : j
          )
        ), E)
          if (I.file) {
            const S = {
              type: "message:file",
              session_id: a,
              client_id: f,
              site_id: n,
              message: {
                id: I.id,
                from: "user",
                type: "file",
                timestamp: Date.now(),
                file: I.file
              }
            };
            E.send(JSON.stringify(S));
          } else {
            const S = {
              type: "message:new",
              session_id: a,
              client_id: f,
              site_id: n,
              message: {
                id: I.id,
                from: "user",
                content: I.content,
                type: "text",
                timestamp: Date.now()
              }
            };
            E.send(JSON.stringify(S));
          }
        else
          u(
            (S) => S.map(
              (j) => j.id === V ? { ...j, status: "failed" } : j
            )
          );
    },
    [s, a, f, n, E]
  );
  return {
    messages: s,
    sendMessage: M,
    retryMessage: Oe,
    startNewChat: W,
    endCurrentChat: F,
    loadSession: oe,
    getRecentChats: B,
    updateProfile: ie,
    errorMessage: h,
    setErrorMessage: w,
    sessions: v,
    selectedSession: C,
    isConnected: !!E,
    operators: x,
    lastActive: p,
    isLoading: i,
    config: r,
    sessionId: a,
    clientId: f
  };
}
var ur = {};
var Jp = T;
function L(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Re = Object.prototype.hasOwnProperty, P1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Lc = {}, Dc = {};
function Zp(e) {
  return Re.call(Dc, e) ? !0 : Re.call(Lc, e) ? !1 : P1.test(e) ? Dc[e] = !0 : (Lc[e] = !0, !1);
}
function Te(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ve[e] = new Te(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ve[t] = new Te(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ve[e] = new Te(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ve[e] = new Te(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ve[e] = new Te(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ve[e] = new Te(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ve[e] = new Te(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ve[e] = new Te(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ve[e] = new Te(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  ve[t] = new Te(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(qu, ea);
  ve[t] = new Te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(qu, ea);
  ve[t] = new Te(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ve[e] = new Te(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ve.xlinkHref = new Te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ve[e] = new Te(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
var ni = {
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
}, N1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ni).forEach(function(e) {
  N1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ni[t] = ni[e];
  });
});
var T1 = /["'&<>]/;
function Ee(e) {
  if (typeof e == "boolean" || typeof e == "number") return "" + e;
  e = "" + e;
  var t = T1.exec(e);
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
var M1 = /([A-Z])/g, R1 = /^ms-/, Qs = Array.isArray;
function xt(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function j1(e, t, n) {
  switch (t) {
    case "select":
      return xt(1, n.value != null ? n.value : n.defaultValue);
    case "svg":
      return xt(2, null);
    case "math":
      return xt(3, null);
    case "foreignObject":
      return xt(1, null);
    case "table":
      return xt(4, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return xt(5, null);
    case "colgroup":
      return xt(7, null);
    case "tr":
      return xt(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? xt(1, null) : e;
}
var Ic = /* @__PURE__ */ new Map();
function qp(e, t, n) {
  if (typeof n != "object") throw Error(L(62));
  t = !0;
  for (var r in n) if (Re.call(n, r)) {
    var o = n[r];
    if (o != null && typeof o != "boolean" && o !== "") {
      if (r.indexOf("--") === 0) {
        var i = Ee(r);
        o = Ee(("" + o).trim());
      } else {
        i = r;
        var l = Ic.get(i);
        l !== void 0 || (l = Ee(i.replace(M1, "-$1").toLowerCase().replace(R1, "-ms-")), Ic.set(i, l)), i = l, o = typeof o == "number" ? o === 0 || Re.call(ni, r) ? "" + o : o + "px" : Ee(("" + o).trim());
      }
      t ? (t = !1, e.push(' style="', i, ":", o)) : e.push(";", i, ":", o);
    }
  }
  t || e.push('"');
}
function Ae(e, t, n, r) {
  switch (n) {
    case "style":
      qp(e, t, r);
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
    } else if (Zp(n)) {
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
function ri(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(L(60));
    if (typeof t != "object" || !("__html" in t)) throw Error(L(61));
    t = t.__html, t != null && e.push("" + t);
  }
}
function z1(e) {
  var t = "";
  return Jp.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
function Bl(e, t, n, r) {
  e.push(pt(n));
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
        Ae(e, r, i, l);
    }
  }
  return e.push(">"), ri(e, o, n), typeof n == "string" ? (e.push(Ee(n)), null) : n;
}
var F1 = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Oc = /* @__PURE__ */ new Map();
function pt(e) {
  var t = Oc.get(e);
  if (t === void 0) {
    if (!F1.test(e)) throw Error(L(65, e));
    t = "<" + e, Oc.set(e, t);
  }
  return t;
}
function L1(e, t, n, r, o) {
  switch (t) {
    case "select":
      e.push(pt("select"));
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
            Ae(e, r, d, s);
        }
      }
      return e.push(">"), ri(e, l, i), i;
    case "option":
      l = o.selectedValue, e.push(pt("option"));
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
            Ae(e, r, i, f);
        }
      }
      if (l != null) if (n = u !== null ? "" + u : z1(s), Qs(l)) {
        for (r = 0; r < l.length; r++)
          if ("" + l[r] === n) {
            e.push(' selected=""');
            break;
          }
      } else "" + l === n && e.push(' selected=""');
      else a && e.push(' selected=""');
      return e.push(">"), ri(e, d, s), s;
    case "textarea":
      e.push(pt("textarea")), d = l = i = null;
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
      e.push(pt("input")), u = d = s = i = null;
      for (l in n) if (Re.call(n, l) && (a = n[l], a != null)) switch (l) {
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
      e.push(pt("menuitem"));
      for (var m in n) if (Re.call(n, m) && (i = n[m], i != null)) switch (m) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(L(400));
        default:
          Ae(e, r, m, i);
      }
      return e.push(">"), null;
    case "title":
      e.push(pt("title")), i = null;
      for (f in n) if (Re.call(n, f) && (l = n[f], l != null)) switch (f) {
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
      e.push(pt(t)), l = i = null;
      for (u in n) if (Re.call(n, u) && (s = n[u], s != null)) switch (u) {
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
      e.push(pt(t));
      for (var v in n) if (Re.call(n, v) && (i = n[v], i != null)) switch (v) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(L(399, t));
        default:
          Ae(e, r, v, i);
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
      e.push(pt(t)), l = i = null;
      for (a in n) if (Re.call(n, a) && (s = n[a], s != null)) switch (a) {
        case "children":
          i = s;
          break;
        case "dangerouslySetInnerHTML":
          l = s;
          break;
        case "style":
          qp(e, r, s);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          break;
        default:
          Zp(a) && typeof s != "function" && typeof s != "symbol" && e.push(" ", a, '="', Ee(s), '"');
      }
      return e.push(">"), ri(e, l, i), i;
  }
}
function bc(e, t, n) {
  if (e.push('<!--$?--><template id="'), n === null) throw Error(L(395));
  return e.push(n), e.push('"></template>');
}
function D1(e, t, n, r) {
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
function I1(e, t) {
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
var O1 = /[<\u2028\u2029]/g;
function Hl(e) {
  return JSON.stringify(e).replace(O1, function(t) {
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
function b1(e, t) {
  return t = t === void 0 ? "" : t, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: t + "P:", segmentPrefix: t + "S:", boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
}
function Ac(e, t, n, r) {
  return n.generateStaticMarkup ? (e.push(Ee(t)), !1) : (t === "" ? e = r : (r && e.push("<!-- -->"), e.push(Ee(t)), e = !0), e);
}
var Ar = Object.assign, A1 = Symbol.for("react.element"), eh = Symbol.for("react.portal"), th = Symbol.for("react.fragment"), nh = Symbol.for("react.strict_mode"), rh = Symbol.for("react.profiler"), oh = Symbol.for("react.provider"), ih = Symbol.for("react.context"), lh = Symbol.for("react.forward_ref"), sh = Symbol.for("react.suspense"), uh = Symbol.for("react.suspense_list"), ah = Symbol.for("react.memo"), ta = Symbol.for("react.lazy"), U1 = Symbol.for("react.scope"), W1 = Symbol.for("react.debug_trace_mode"), V1 = Symbol.for("react.legacy_hidden"), B1 = Symbol.for("react.default_value"), Uc = Symbol.iterator;
function Ys(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case th:
      return "Fragment";
    case eh:
      return "Portal";
    case rh:
      return "Profiler";
    case nh:
      return "StrictMode";
    case sh:
      return "Suspense";
    case uh:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ih:
      return (e.displayName || "Context") + ".Consumer";
    case oh:
      return (e._context.displayName || "Context") + ".Provider";
    case lh:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ah:
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
var ch = {};
function Wc(e, t) {
  if (e = e.contextTypes, !e) return ch;
  var n = {}, r;
  for (r in e) n[r] = t[r];
  return n;
}
var xn = null;
function ul(e, t) {
  if (e !== t) {
    e.context._currentValue2 = e.parentValue, e = e.parent;
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(L(401));
    } else {
      if (n === null) throw Error(L(401));
      ul(e, n);
    }
    t.context._currentValue2 = t.value;
  }
}
function dh(e) {
  e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && dh(e);
}
function fh(e) {
  var t = e.parent;
  t !== null && fh(t), e.context._currentValue2 = e.value;
}
function ph(e, t) {
  if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null) throw Error(L(402));
  e.depth === t.depth ? ul(e, t) : ph(e, t);
}
function hh(e, t) {
  var n = t.parent;
  if (n === null) throw Error(L(402));
  e.depth === n.depth ? ul(e, n) : hh(e, n), t.context._currentValue2 = t.value;
}
function Di(e) {
  var t = xn;
  t !== e && (t === null ? fh(e) : e === null ? dh(t) : t.depth === e.depth ? ul(t, e) : t.depth > e.depth ? ph(t, e) : hh(t, e), xn = e);
}
var Vc = { isMounted: function() {
  return !1;
}, enqueueSetState: function(e, t) {
  e = e._reactInternals, e.queue !== null && e.queue.push(t);
}, enqueueReplaceState: function(e, t) {
  e = e._reactInternals, e.replace = !0, e.queue = [t];
}, enqueueForceUpdate: function() {
} };
function Bc(e, t, n, r) {
  var o = e.state !== void 0 ? e.state : null;
  e.updater = Vc, e.props = n, e.state = o;
  var i = { queue: [], replace: !1 };
  e._reactInternals = i;
  var l = t.contextType;
  if (e.context = typeof l == "object" && l !== null ? l._currentValue2 : r, l = t.getDerivedStateFromProps, typeof l == "function" && (l = l(n, o), o = l == null ? o : Ar({}, o, l), e.state = o), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (t = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && Vc.enqueueReplaceState(e, e.state, null), i.queue !== null && 0 < i.queue.length) if (t = i.queue, l = i.replace, i.queue = null, i.replace = !1, l && t.length === 1) e.state = t[0];
  else {
    for (i = l ? t[0] : e.state, o = !0, l = l ? 1 : 0; l < t.length; l++) {
      var s = t[l];
      s = typeof s == "function" ? s.call(e, i, n, r) : s, s != null && (o ? (o = !1, i = Ar({}, i, s)) : Ar(i, s));
    }
    e.state = i;
  }
  else i.queue = null;
}
var H1 = { id: 1, overflow: "" };
function Xs(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var o = 32 - oi(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - oi(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    return i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, { id: 1 << 32 - oi(t) + o | n << o | r, overflow: i + e };
  }
  return { id: 1 << i | n << o | r, overflow: e };
}
var oi = Math.clz32 ? Math.clz32 : X1, Q1 = Math.log, Y1 = Math.LN2;
function X1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Q1(e) / Y1 | 0) | 0;
}
function K1(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var G1 = typeof Object.is == "function" ? Object.is : K1, jt = null, na = null, ii = null, Y = null, Pr = !1, Ii = !1, io = 0, Bt = null, al = 0;
function hn() {
  if (jt === null) throw Error(L(321));
  return jt;
}
function Hc() {
  if (0 < al) throw Error(L(312));
  return { memoizedState: null, queue: null, next: null };
}
function ra() {
  return Y === null ? ii === null ? (Pr = !1, ii = Y = Hc()) : (Pr = !0, Y = ii) : Y.next === null ? (Pr = !1, Y = Y.next = Hc()) : (Pr = !0, Y = Y.next), Y;
}
function oa() {
  na = jt = null, Ii = !1, ii = null, al = 0, Y = Bt = null;
}
function mh(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Qc(e, t, n) {
  if (jt = hn(), Y = ra(), Pr) {
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
  return e = e === mh ? typeof t == "function" ? t() : t : n !== void 0 ? n(t) : t, Y.memoizedState = e, e = Y.queue = { last: null, dispatch: null }, e = e.dispatch = J1.bind(null, jt, e), [Y.memoizedState, e];
}
function Yc(e, t) {
  if (jt = hn(), Y = ra(), t = t === void 0 ? null : t, Y !== null) {
    var n = Y.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var o = 0; o < r.length && o < t.length; o++) if (!G1(t[o], r[o])) {
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
function J1(e, t, n) {
  if (25 <= al) throw Error(L(301));
  if (e === jt) if (Ii = !0, e = { action: n, next: null }, Bt === null && (Bt = /* @__PURE__ */ new Map()), n = Bt.get(t), n === void 0) Bt.set(t, e);
  else {
    for (t = n; t.next !== null; ) t = t.next;
    t.next = e;
  }
}
function Z1() {
  throw Error(L(394));
}
function bo() {
}
var Xc = { readContext: function(e) {
  return e._currentValue2;
}, useContext: function(e) {
  return hn(), e._currentValue2;
}, useMemo: Yc, useReducer: Qc, useRef: function(e) {
  jt = hn(), Y = ra();
  var t = Y.memoizedState;
  return t === null ? (e = { current: e }, Y.memoizedState = e) : t;
}, useState: function(e) {
  return Qc(mh, e);
}, useInsertionEffect: bo, useLayoutEffect: function() {
}, useCallback: function(e, t) {
  return Yc(function() {
    return e;
  }, t);
}, useImperativeHandle: bo, useEffect: bo, useDebugValue: bo, useDeferredValue: function(e) {
  return hn(), e;
}, useTransition: function() {
  return hn(), [
    !1,
    Z1
  ];
}, useId: function() {
  var e = na.treeContext, t = e.overflow;
  e = e.id, e = (e & ~(1 << 32 - oi(e) - 1)).toString(32) + t;
  var n = li;
  if (n === null) throw Error(L(404));
  return t = io++, e = ":" + n.idPrefix + "R" + e, 0 < t && (e += "H" + t.toString(32)), e + ":";
}, useMutableSource: function(e, t) {
  return hn(), t(e._source);
}, useSyncExternalStore: function(e, t, n) {
  if (n === void 0) throw Error(L(407));
  return n();
} }, li = null, Ql = Jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
function q1(e) {
  return console.error(e), null;
}
function Nr() {
}
function ev(e, t, n, r, o, i, l, s, u) {
  var a = [], d = /* @__PURE__ */ new Set();
  return t = { destination: null, responseState: t, progressiveChunkSize: r === void 0 ? 12800 : r, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: d, pingedTasks: a, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: o === void 0 ? q1 : o, onAllReady: Nr, onShellReady: l === void 0 ? Nr : l, onShellError: Nr, onFatalError: Nr }, n = Oi(t, 0, null, n, !1, !1), n.parentFlushed = !0, e = ia(t, e, null, n, d, ch, null, H1), a.push(e), t;
}
function ia(e, t, n, r, o, i, l, s) {
  e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
  var u = { node: t, ping: function() {
    var a = e.pingedTasks;
    a.push(u), a.length === 1 && vh(e);
  }, blockedBoundary: n, blockedSegment: r, abortSet: o, legacyContext: i, context: l, treeContext: s };
  return o.add(u), u;
}
function Oi(e, t, n, r, o, i) {
  return { status: 0, id: -1, index: t, parentFlushed: !1, chunks: [], children: [], formatContext: r, boundary: n, lastPushedText: o, textEmbedded: i };
}
function lo(e, t) {
  if (e = e.onError(t), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
  return e;
}
function bi(e, t) {
  var n = e.onShellError;
  n(t), n = e.onFatalError, n(t), e.destination !== null ? (e.status = 2, e.destination.destroy(t)) : (e.status = 1, e.fatalError = t);
}
function Kc(e, t, n, r, o) {
  for (jt = {}, na = t, io = 0, e = n(r, o); Ii; ) Ii = !1, io = 0, al += 1, Y = null, e = n(r, o);
  return oa(), e;
}
function Gc(e, t, n, r) {
  var o = n.render(), i = r.childContextTypes;
  if (i != null) {
    var l = t.legacyContext;
    if (typeof n.getChildContext != "function") r = l;
    else {
      n = n.getChildContext();
      for (var s in n) if (!(s in i)) throw Error(L(108, Ys(r) || "Unknown", s));
      r = Ar({}, l, n);
    }
    t.legacyContext = r, Ve(e, t, o), t.legacyContext = l;
  } else Ve(e, t, o);
}
function Jc(e, t) {
  if (e && e.defaultProps) {
    t = Ar({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ks(e, t, n, r, o) {
  if (typeof n == "function") if (n.prototype && n.prototype.isReactComponent) {
    o = Wc(n, t.legacyContext);
    var i = n.contextType;
    i = new n(r, typeof i == "object" && i !== null ? i._currentValue2 : o), Bc(i, n, r, o), Gc(e, t, i, n);
  } else {
    i = Wc(n, t.legacyContext), o = Kc(e, t, n, r, i);
    var l = io !== 0;
    if (typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0) Bc(o, n, r, i), Gc(e, t, o, n);
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
    switch (o = t.blockedSegment, i = L1(o.chunks, n, r, e.responseState, o.formatContext), o.lastPushedText = !1, l = o.formatContext, o.formatContext = j1(l, n, r), Gs(e, t, i), o.formatContext = l, n) {
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
      case V1:
      case W1:
      case nh:
      case rh:
      case th:
        Ve(e, t, r.children);
        return;
      case uh:
        Ve(e, t, r.children);
        return;
      case U1:
        throw Error(L(343));
      case sh:
        e: {
          n = t.blockedBoundary, o = t.blockedSegment, i = r.fallback, r = r.children, l = /* @__PURE__ */ new Set();
          var s = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: l, errorDigest: null }, u = Oi(e, o.chunks.length, s, o.formatContext, !1, !1);
          o.children.push(u), o.lastPushedText = !1;
          var a = Oi(e, 0, null, o.formatContext, !1, !1);
          a.parentFlushed = !0, t.blockedBoundary = s, t.blockedSegment = a;
          try {
            if (Gs(
              e,
              t,
              r
            ), e.responseState.generateStaticMarkup || a.lastPushedText && a.textEmbedded && a.chunks.push("<!-- -->"), a.status = 1, Ai(s, a), s.pendingTasks === 0) break e;
          } catch (d) {
            a.status = 4, s.forceClientRender = !0, s.errorDigest = lo(e, d);
          } finally {
            t.blockedBoundary = n, t.blockedSegment = o;
          }
          t = ia(e, i, n, u, l, t.legacyContext, t.context, t.treeContext), e.pingedTasks.push(t);
        }
        return;
    }
    if (typeof n == "object" && n !== null) switch (n.$$typeof) {
      case lh:
        if (r = Kc(e, t, n.render, r, o), io !== 0) {
          n = t.treeContext, t.treeContext = Xs(n, 1, 0);
          try {
            Ve(e, t, r);
          } finally {
            t.treeContext = n;
          }
        } else Ve(e, t, r);
        return;
      case ah:
        n = n.type, r = Jc(n, r), Ks(e, t, n, r, o);
        return;
      case oh:
        if (o = r.children, n = n._context, r = r.value, i = n._currentValue2, n._currentValue2 = r, l = xn, xn = r = { parent: l, depth: l === null ? 0 : l.depth + 1, context: n, parentValue: i, value: r }, t.context = r, Ve(e, t, o), e = xn, e === null) throw Error(L(403));
        r = e.parentValue, e.context._currentValue2 = r === B1 ? e.context._defaultValue : r, e = xn = e.parent, t.context = e;
        return;
      case ih:
        r = r.children, r = r(n._currentValue2), Ve(e, t, r);
        return;
      case ta:
        o = n._init, n = o(n._payload), r = Jc(n, r), Ks(
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
      case A1:
        Ks(e, t, n.type, n.props, n.ref);
        return;
      case eh:
        throw Error(L(257));
      case ta:
        var r = n._init;
        n = r(n._payload), Ve(e, t, n);
        return;
    }
    if (Qs(n)) {
      Zc(e, t, n);
      return;
    }
    if (n === null || typeof n != "object" ? r = null : (r = Uc && n[Uc] || n["@@iterator"], r = typeof r == "function" ? r : null), r && (r = r.call(n))) {
      if (n = r.next(), !n.done) {
        var o = [];
        do
          o.push(n.value), n = r.next();
        while (!n.done);
        Zc(e, t, o);
      }
      return;
    }
    throw e = Object.prototype.toString.call(n), Error(L(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  typeof n == "string" ? (r = t.blockedSegment, r.lastPushedText = Ac(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)) : typeof n == "number" && (r = t.blockedSegment, r.lastPushedText = Ac(t.blockedSegment.chunks, "" + n, e.responseState, r.lastPushedText));
}
function Zc(e, t, n) {
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
      var l = t.blockedSegment, s = Oi(e, l.chunks.length, null, l.formatContext, l.lastPushedText, !0);
      l.children.push(s), l.lastPushedText = !1, e = ia(e, t.node, t.blockedBoundary, s, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, n.then(e, e), t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = i, Di(i);
    } else throw t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = i, Di(i), u;
  }
}
function tv(e) {
  var t = e.blockedBoundary;
  e = e.blockedSegment, e.status = 3, gh(this, t, e);
}
function yh(e, t, n) {
  var r = e.blockedBoundary;
  e.blockedSegment.status = 3, r === null ? (t.allPendingTasks--, t.status !== 2 && (t.status = 2, t.destination !== null && t.destination.push(null))) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, e = n === void 0 ? Error(L(432)) : n, r.errorDigest = t.onError(e), r.parentFlushed && t.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach(function(o) {
    return yh(o, t, n);
  }), r.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0 && (r = t.onAllReady, r()));
}
function Ai(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    n.id = t.id, n.parentFlushed = !0, n.status === 1 && Ai(e, n);
  } else e.completedSegments.push(t);
}
function gh(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(L(389));
      e.completedRootSegment = n;
    }
    e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Nr, t = e.onShellReady, t());
  } else t.pendingTasks--, t.forceClientRender || (t.pendingTasks === 0 ? (n.parentFlushed && n.status === 1 && Ai(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(tv, e), t.fallbackAbortableTasks.clear()) : n.parentFlushed && n.status === 1 && (Ai(t, n), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
}
function vh(e) {
  if (e.status !== 2) {
    var t = xn, n = Ql.current;
    Ql.current = Xc;
    var r = li;
    li = e.responseState;
    try {
      var o = e.pingedTasks, i;
      for (i = 0; i < o.length; i++) {
        var l = o[i], s = e, u = l.blockedSegment;
        if (u.status === 0) {
          Di(l.context);
          try {
            Ve(s, l, l.node), s.responseState.generateStaticMarkup || u.lastPushedText && u.textEmbedded && u.chunks.push("<!-- -->"), l.abortSet.delete(l), u.status = 1, gh(s, l.blockedBoundary, u);
          } catch (y) {
            if (oa(), typeof y == "object" && y !== null && typeof y.then == "function") {
              var a = l.ping;
              y.then(a, a);
            } else {
              l.abortSet.delete(l), u.status = 4;
              var d = l.blockedBoundary, f = y, m = lo(s, f);
              if (d === null ? bi(s, f) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = !0, d.errorDigest = m, d.parentFlushed && s.clientRenderedBoundaries.push(d))), s.allPendingTasks--, s.allPendingTasks === 0) {
                var v = s.onAllReady;
                v();
              }
            }
          } finally {
          }
        }
      }
      o.splice(0, i), e.destination !== null && la(e, e.destination);
    } catch (y) {
      lo(e, y), bi(e, y);
    } finally {
      li = r, Ql.current = n, n === Xc && Di(t);
    }
  }
}
function Ao(e, t, n) {
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
        o = cl(e, t, o);
      }
      for (; i < r.length - 1; i++) t.push(r[i]);
      return i < r.length && (o = t.push(r[i])), o;
    default:
      throw Error(L(390));
  }
}
function cl(e, t, n) {
  var r = n.boundary;
  if (r === null) return Ao(e, t, n);
  if (r.parentFlushed = !0, r.forceClientRender) return e.responseState.generateStaticMarkup || (r = r.errorDigest, t.push("<!--$!-->"), t.push("<template"), r && (t.push(' data-dgst="'), r = Ee(r), t.push(r), t.push('"')), t.push("></template>")), Ao(e, t, n), e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
  if (0 < r.pendingTasks) {
    r.rootSegmentID = e.nextSegmentId++, 0 < r.completedSegments.length && e.partialBoundaries.push(r);
    var o = e.responseState, i = o.nextSuspenseID++;
    return o = o.boundaryPrefix + i.toString(16), r = r.id = o, bc(t, e.responseState, r), Ao(e, t, n), t.push("<!--/$-->");
  }
  if (r.byteSize > e.progressiveChunkSize) return r.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(r), bc(t, e.responseState, r.id), Ao(e, t, n), t.push("<!--/$-->");
  if (e.responseState.generateStaticMarkup || t.push("<!--$-->"), n = r.completedSegments, n.length !== 1) throw Error(L(391));
  return cl(e, t, n[0]), e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
}
function qc(e, t, n) {
  return D1(t, e.responseState, n.formatContext, n.id), cl(e, t, n), I1(t, n.formatContext);
}
function ed(e, t, n) {
  for (var r = n.completedSegments, o = 0; o < r.length; o++) wh(e, t, n, r[o]);
  if (r.length = 0, e = e.responseState, r = n.id, n = n.rootSegmentID, t.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? t.push('$RC("') : (e.sentCompleteBoundaryFunction = !0, t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), r === null) throw Error(L(395));
  return n = n.toString(16), t.push(r), t.push('","'), t.push(e.segmentPrefix), t.push(n), t.push('")<\/script>');
}
function wh(e, t, n, r) {
  if (r.status === 2) return !0;
  var o = r.id;
  if (o === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(L(392));
    return qc(e, t, r);
  }
  return qc(e, t, r), e = e.responseState, t.push(e.startInlineScript), e.sentCompleteSegmentFunction ? t.push('$RS("') : (e.sentCompleteSegmentFunction = !0, t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), t.push(e.segmentPrefix), o = o.toString(16), t.push(o), t.push('","'), t.push(e.placeholderPrefix), t.push(o), t.push('")<\/script>');
}
function la(e, t) {
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      cl(e, t, n), e.completedRootSegment = null;
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
        var m = Hl(a || "");
        r.push(m);
      }
      if (d || f) {
        r.push(",");
        var v = Hl(d || "");
        r.push(v);
      }
      if (f) {
        r.push(",");
        var y = Hl(f);
        r.push(y);
      }
      if (!r.push(")<\/script>")) {
        e.destination = null, i++, o.splice(0, i);
        return;
      }
    }
    o.splice(0, i);
    var x = e.completedBoundaries;
    for (i = 0; i < x.length; i++) if (!ed(e, t, x[i])) {
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
        for (s = 0; s < c.length; s++) if (!wh(o, l, p, c[s])) {
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
    for (i = 0; i < w.length; i++) if (!ed(e, t, w[i])) {
      e.destination = null, i++, w.splice(0, i);
      return;
    }
    w.splice(0, i);
  } finally {
    e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && t.push(null);
  }
}
function nv(e, t) {
  try {
    var n = e.abortableTasks;
    n.forEach(function(r) {
      return yh(r, e, t);
    }), n.clear(), e.destination !== null && la(e, e.destination);
  } catch (r) {
    lo(e, r), bi(e, r);
  }
}
function rv() {
}
function xh(e, t, n, r) {
  var o = !1, i = null, l = "", s = { push: function(a) {
    return a !== null && (l += a), !0;
  }, destroy: function(a) {
    o = !0, i = a;
  } }, u = !1;
  if (e = ev(e, b1(n, t ? t.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, rv, void 0, function() {
    u = !0;
  }), vh(e), nv(e, r), e.status === 1) e.status = 2, s.destroy(e.fatalError);
  else if (e.status !== 2 && e.destination === null) {
    e.destination = s;
    try {
      la(e, s);
    } catch (a) {
      lo(e, a), bi(e, a);
    }
  }
  if (o) throw i;
  if (!u) throw Error(L(426));
  return l;
}
ur.renderToNodeStream = function() {
  throw Error(L(207));
};
ur.renderToStaticMarkup = function(e, t) {
  return xh(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
};
ur.renderToStaticNodeStream = function() {
  throw Error(L(208));
};
ur.renderToString = function(e, t) {
  return xh(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
};
ur.version = "18.3.1";
var sa = {};
var kh = T;
function D(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Be = null, He = 0;
function R(e, t) {
  if (t.length !== 0) if (512 < t.length) 0 < He && (e.enqueue(new Uint8Array(Be.buffer, 0, He)), Be = new Uint8Array(512), He = 0), e.enqueue(t);
  else {
    var n = Be.length - He;
    n < t.length && (n === 0 ? e.enqueue(Be) : (Be.set(t.subarray(0, n), He), e.enqueue(Be), t = t.subarray(n)), Be = new Uint8Array(512), He = 0), Be.set(t, He), He += t.length;
  }
}
function J(e, t) {
  return R(e, t), !0;
}
function td(e) {
  Be && 0 < He && (e.enqueue(new Uint8Array(Be.buffer, 0, He)), Be = null, He = 0);
}
var Sh = new TextEncoder();
function O(e) {
  return Sh.encode(e);
}
function P(e) {
  return Sh.encode(e);
}
function Ch(e, t) {
  typeof e.error == "function" ? e.error(t) : e.close();
}
var je = Object.prototype.hasOwnProperty, ov = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, nd = {}, rd = {};
function _h(e) {
  return je.call(rd, e) ? !0 : je.call(nd, e) ? !1 : ov.test(e) ? rd[e] = !0 : (nd[e] = !0, !1);
}
function Me(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var we = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  we[e] = new Me(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  we[t] = new Me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  we[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  we[e] = new Me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  we[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  we[e] = new Me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  we[e] = new Me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  we[e] = new Me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  we[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  we[t] = new Me(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ua, aa);
  we[t] = new Me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ua, aa);
  we[t] = new Me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  we[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
we.xlinkHref = new Me("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  we[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
var si = {
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
}, iv = ["Webkit", "ms", "Moz", "O"];
Object.keys(si).forEach(function(e) {
  iv.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), si[t] = si[e];
  });
});
var lv = /["'&<>]/;
function me(e) {
  if (typeof e == "boolean" || typeof e == "number") return "" + e;
  e = "" + e;
  var t = lv.exec(e);
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
var sv = /([A-Z])/g, uv = /^ms-/, Js = Array.isArray, av = P("<script>"), cv = P("<\/script>"), dv = P('<script src="'), fv = P('<script type="module" src="'), od = P('" async=""><\/script>'), pv = /(<\/|<)(s)(cript)/gi;
function hv(e, t, n, r) {
  return "" + t + (n === "s" ? "\\u0073" : "\\u0053") + r;
}
function mv(e, t, n, r, o) {
  e = e === void 0 ? "" : e, t = t === void 0 ? av : P('<script nonce="' + me(t) + '">');
  var i = [];
  if (n !== void 0 && i.push(t, O(("" + n).replace(pv, hv)), cv), r !== void 0) for (n = 0; n < r.length; n++) i.push(dv, O(me(r[n])), od);
  if (o !== void 0) for (r = 0; r < o.length; r++) i.push(fv, O(me(o[r])), od);
  return { bootstrapChunks: i, startInlineScript: t, placeholderPrefix: P(e + "P:"), segmentPrefix: P(e + "S:"), boundaryPrefix: e + "B:", idPrefix: e, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
}
function ht(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function yv(e) {
  return ht(e === "http://www.w3.org/2000/svg" ? 2 : e === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
}
function gv(e, t, n) {
  switch (t) {
    case "select":
      return ht(1, n.value != null ? n.value : n.defaultValue);
    case "svg":
      return ht(2, null);
    case "math":
      return ht(3, null);
    case "foreignObject":
      return ht(1, null);
    case "table":
      return ht(4, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return ht(5, null);
    case "colgroup":
      return ht(7, null);
    case "tr":
      return ht(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? ht(1, null) : e;
}
var ca = P("<!-- -->");
function id(e, t, n, r) {
  return t === "" ? r : (r && e.push(ca), e.push(O(me(t))), !0);
}
var ld = /* @__PURE__ */ new Map(), vv = P(' style="'), sd = P(":"), wv = P(";");
function Eh(e, t, n) {
  if (typeof n != "object") throw Error(D(62));
  t = !0;
  for (var r in n) if (je.call(n, r)) {
    var o = n[r];
    if (o != null && typeof o != "boolean" && o !== "") {
      if (r.indexOf("--") === 0) {
        var i = O(me(r));
        o = O(me(("" + o).trim()));
      } else {
        i = r;
        var l = ld.get(i);
        l !== void 0 || (l = P(me(i.replace(sv, "-$1").toLowerCase().replace(uv, "-ms-"))), ld.set(i, l)), i = l, o = typeof o == "number" ? o === 0 || je.call(si, r) ? O("" + o) : O(o + "px") : O(me(("" + o).trim()));
      }
      t ? (t = !1, e.push(vv, i, sd, o)) : e.push(wv, i, sd, o);
    }
  }
  t || e.push(mn);
}
var Dt = P(" "), zn = P('="'), mn = P('"'), ud = P('=""');
function Ue(e, t, n, r) {
  switch (n) {
    case "style":
      Eh(e, t, r);
      return;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
      return;
  }
  if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") {
    if (t = we.hasOwnProperty(n) ? we[n] : null, t !== null) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (!t.acceptsBooleans) return;
      }
      switch (n = O(t.attributeName), t.type) {
        case 3:
          r && e.push(Dt, n, ud);
          break;
        case 4:
          r === !0 ? e.push(Dt, n, ud) : r !== !1 && e.push(Dt, n, zn, O(me(r)), mn);
          break;
        case 5:
          isNaN(r) || e.push(Dt, n, zn, O(me(r)), mn);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(Dt, n, zn, O(me(r)), mn);
          break;
        default:
          t.sanitizeURL && (r = "" + r), e.push(Dt, n, zn, O(me(r)), mn);
      }
    } else if (_h(n)) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (t = n.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-") return;
      }
      e.push(Dt, O(n), zn, O(me(r)), mn);
    }
  }
}
var It = P(">"), ad = P("/>");
function ui(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(D(60));
    if (typeof t != "object" || !("__html" in t)) throw Error(D(61));
    t = t.__html, t != null && e.push(O("" + t));
  }
}
function xv(e) {
  var t = "";
  return kh.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
var Yl = P(' selected=""');
function Xl(e, t, n, r) {
  e.push(mt(n));
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
        Ue(e, r, i, l);
    }
  }
  return e.push(It), ui(e, o, n), typeof n == "string" ? (e.push(O(me(n))), null) : n;
}
var Kl = P(`
`), kv = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, cd = /* @__PURE__ */ new Map();
function mt(e) {
  var t = cd.get(e);
  if (t === void 0) {
    if (!kv.test(e)) throw Error(D(65, e));
    t = P("<" + e), cd.set(e, t);
  }
  return t;
}
var Sv = P("<!DOCTYPE html>");
function Cv(e, t, n, r, o) {
  switch (t) {
    case "select":
      e.push(mt("select"));
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
            Ue(e, r, d, s);
        }
      }
      return e.push(It), ui(e, l, i), i;
    case "option":
      l = o.selectedValue, e.push(mt("option"));
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
            Ue(e, r, i, f);
        }
      }
      if (l != null) if (n = u !== null ? "" + u : xv(s), Js(l)) {
        for (r = 0; r < l.length; r++)
          if ("" + l[r] === n) {
            e.push(Yl);
            break;
          }
      } else "" + l === n && e.push(Yl);
      else a && e.push(Yl);
      return e.push(It), ui(e, d, s), s;
    case "textarea":
      e.push(mt("textarea")), d = l = i = null;
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
          throw Error(D(91));
        default:
          Ue(e, r, s, u);
      }
      if (i === null && l !== null && (i = l), e.push(It), d != null) {
        if (i != null) throw Error(D(92));
        if (Js(d) && 1 < d.length) throw Error(D(93));
        i = "" + d;
      }
      return typeof i == "string" && i[0] === `
` && e.push(Kl), i !== null && e.push(O(me("" + i))), null;
    case "input":
      e.push(mt("input")), u = d = s = i = null;
      for (l in n) if (je.call(n, l) && (a = n[l], a != null)) switch (l) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(D(399, "input"));
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
      ) : u !== null && Ue(e, r, "checked", u), i !== null ? Ue(e, r, "value", i) : s !== null && Ue(e, r, "value", s), e.push(ad), null;
    case "menuitem":
      e.push(mt("menuitem"));
      for (var m in n) if (je.call(n, m) && (i = n[m], i != null)) switch (m) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(D(400));
        default:
          Ue(e, r, m, i);
      }
      return e.push(It), null;
    case "title":
      e.push(mt("title")), i = null;
      for (f in n) if (je.call(n, f) && (l = n[f], l != null)) switch (f) {
        case "children":
          i = l;
          break;
        case "dangerouslySetInnerHTML":
          throw Error(D(434));
        default:
          Ue(e, r, f, l);
      }
      return e.push(It), i;
    case "listing":
    case "pre":
      e.push(mt(t)), l = i = null;
      for (u in n) if (je.call(n, u) && (s = n[u], s != null)) switch (u) {
        case "children":
          i = s;
          break;
        case "dangerouslySetInnerHTML":
          l = s;
          break;
        default:
          Ue(e, r, u, s);
      }
      if (e.push(It), l != null) {
        if (i != null) throw Error(D(60));
        if (typeof l != "object" || !("__html" in l)) throw Error(D(61));
        n = l.__html, n != null && (typeof n == "string" && 0 < n.length && n[0] === `
` ? e.push(Kl, O(n)) : e.push(O("" + n)));
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
      e.push(mt(t));
      for (var v in n) if (je.call(n, v) && (i = n[v], i != null)) switch (v) {
        case "children":
        case "dangerouslySetInnerHTML":
          throw Error(D(399, t));
        default:
          Ue(e, r, v, i);
      }
      return e.push(ad), null;
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
      return o.insertionMode === 0 && e.push(Sv), Xl(e, n, t, r);
    default:
      if (t.indexOf("-") === -1 && typeof n.is != "string") return Xl(e, n, t, r);
      e.push(mt(t)), l = i = null;
      for (a in n) if (je.call(n, a) && (s = n[a], s != null)) switch (a) {
        case "children":
          i = s;
          break;
        case "dangerouslySetInnerHTML":
          l = s;
          break;
        case "style":
          Eh(e, r, s);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          break;
        default:
          _h(a) && typeof s != "function" && typeof s != "symbol" && e.push(Dt, O(a), zn, O(me(s)), mn);
      }
      return e.push(It), ui(e, l, i), i;
  }
}
var _v = P("</"), Ev = P(">"), $v = P('<template id="'), Pv = P('"></template>'), Nv = P("<!--$-->"), Tv = P('<!--$?--><template id="'), Mv = P('"></template>'), Rv = P("<!--$!-->"), jv = P("<!--/$-->"), zv = P("<template"), Fv = P('"'), Lv = P(' data-dgst="');
P(' data-msg="');
P(' data-stck="');
var Dv = P("></template>");
function dd(e, t, n) {
  if (R(e, Tv), n === null) throw Error(D(395));
  return R(e, n), J(e, Mv);
}
var Iv = P('<div hidden id="'), Ov = P('">'), bv = P("</div>"), Av = P('<svg aria-hidden="true" style="display:none" id="'), Uv = P('">'), Wv = P("</svg>"), Vv = P('<math aria-hidden="true" style="display:none" id="'), Bv = P('">'), Hv = P("</math>"), Qv = P('<table hidden id="'), Yv = P('">'), Xv = P("</table>"), Kv = P('<table hidden><tbody id="'), Gv = P('">'), Jv = P("</tbody></table>"), Zv = P('<table hidden><tr id="'), qv = P('">'), ew = P("</tr></table>"), tw = P('<table hidden><colgroup id="'), nw = P('">'), rw = P("</colgroup></table>");
function ow(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return R(e, Iv), R(e, t.segmentPrefix), R(e, O(r.toString(16))), J(e, Ov);
    case 2:
      return R(e, Av), R(e, t.segmentPrefix), R(e, O(r.toString(16))), J(e, Uv);
    case 3:
      return R(e, Vv), R(e, t.segmentPrefix), R(e, O(r.toString(16))), J(e, Bv);
    case 4:
      return R(e, Qv), R(e, t.segmentPrefix), R(e, O(r.toString(16))), J(e, Yv);
    case 5:
      return R(e, Kv), R(e, t.segmentPrefix), R(e, O(r.toString(16))), J(e, Gv);
    case 6:
      return R(e, Zv), R(e, t.segmentPrefix), R(e, O(r.toString(16))), J(e, qv);
    case 7:
      return R(
        e,
        tw
      ), R(e, t.segmentPrefix), R(e, O(r.toString(16))), J(e, nw);
    default:
      throw Error(D(397));
  }
}
function iw(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return J(e, bv);
    case 2:
      return J(e, Wv);
    case 3:
      return J(e, Hv);
    case 4:
      return J(e, Xv);
    case 5:
      return J(e, Jv);
    case 6:
      return J(e, ew);
    case 7:
      return J(e, rw);
    default:
      throw Error(D(397));
  }
}
var lw = P('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), sw = P('$RS("'), uw = P('","'), aw = P('")<\/script>'), cw = P('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), dw = P('$RC("'), fw = P('","'), pw = P('")<\/script>'), hw = P('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), mw = P('$RX("'), yw = P('"'), gw = P(")<\/script>"), Gl = P(","), vw = /[<\u2028\u2029]/g;
function Jl(e) {
  return JSON.stringify(e).replace(vw, function(t) {
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
var Ur = Object.assign, ww = Symbol.for("react.element"), $h = Symbol.for("react.portal"), Ph = Symbol.for("react.fragment"), Nh = Symbol.for("react.strict_mode"), Th = Symbol.for("react.profiler"), Mh = Symbol.for("react.provider"), Rh = Symbol.for("react.context"), jh = Symbol.for("react.forward_ref"), zh = Symbol.for("react.suspense"), Fh = Symbol.for("react.suspense_list"), Lh = Symbol.for("react.memo"), da = Symbol.for("react.lazy"), xw = Symbol.for("react.scope"), kw = Symbol.for("react.debug_trace_mode"), Sw = Symbol.for("react.legacy_hidden"), Cw = Symbol.for("react.default_value"), fd = Symbol.iterator;
function Zs(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ph:
      return "Fragment";
    case $h:
      return "Portal";
    case Th:
      return "Profiler";
    case Nh:
      return "StrictMode";
    case zh:
      return "Suspense";
    case Fh:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Rh:
      return (e.displayName || "Context") + ".Consumer";
    case Mh:
      return (e._context.displayName || "Context") + ".Provider";
    case jh:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Lh:
      return t = e.displayName || null, t !== null ? t : Zs(e.type) || "Memo";
    case da:
      t = e._payload, e = e._init;
      try {
        return Zs(e(t));
      } catch {
      }
  }
  return null;
}
var Dh = {};
function pd(e, t) {
  if (e = e.contextTypes, !e) return Dh;
  var n = {}, r;
  for (r in e) n[r] = t[r];
  return n;
}
var kn = null;
function dl(e, t) {
  if (e !== t) {
    e.context._currentValue = e.parentValue, e = e.parent;
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(D(401));
    } else {
      if (n === null) throw Error(D(401));
      dl(e, n);
    }
    t.context._currentValue = t.value;
  }
}
function Ih(e) {
  e.context._currentValue = e.parentValue, e = e.parent, e !== null && Ih(e);
}
function Oh(e) {
  var t = e.parent;
  t !== null && Oh(t), e.context._currentValue = e.value;
}
function bh(e, t) {
  if (e.context._currentValue = e.parentValue, e = e.parent, e === null) throw Error(D(402));
  e.depth === t.depth ? dl(e, t) : bh(e, t);
}
function Ah(e, t) {
  var n = t.parent;
  if (n === null) throw Error(D(402));
  e.depth === n.depth ? dl(e, n) : Ah(e, n), t.context._currentValue = t.value;
}
function Ui(e) {
  var t = kn;
  t !== e && (t === null ? Oh(e) : e === null ? Ih(t) : t.depth === e.depth ? dl(t, e) : t.depth > e.depth ? bh(t, e) : Ah(t, e), kn = e);
}
var hd = { isMounted: function() {
  return !1;
}, enqueueSetState: function(e, t) {
  e = e._reactInternals, e.queue !== null && e.queue.push(t);
}, enqueueReplaceState: function(e, t) {
  e = e._reactInternals, e.replace = !0, e.queue = [t];
}, enqueueForceUpdate: function() {
} };
function md(e, t, n, r) {
  var o = e.state !== void 0 ? e.state : null;
  e.updater = hd, e.props = n, e.state = o;
  var i = { queue: [], replace: !1 };
  e._reactInternals = i;
  var l = t.contextType;
  if (e.context = typeof l == "object" && l !== null ? l._currentValue : r, l = t.getDerivedStateFromProps, typeof l == "function" && (l = l(n, o), o = l == null ? o : Ur({}, o, l), e.state = o), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function")) if (t = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && hd.enqueueReplaceState(e, e.state, null), i.queue !== null && 0 < i.queue.length) if (t = i.queue, l = i.replace, i.queue = null, i.replace = !1, l && t.length === 1) e.state = t[0];
  else {
    for (i = l ? t[0] : e.state, o = !0, l = l ? 1 : 0; l < t.length; l++) {
      var s = t[l];
      s = typeof s == "function" ? s.call(e, i, n, r) : s, s != null && (o ? (o = !1, i = Ur({}, i, s)) : Ur(i, s));
    }
    e.state = i;
  }
  else i.queue = null;
}
var _w = { id: 1, overflow: "" };
function qs(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var o = 32 - ai(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - ai(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    return i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, { id: 1 << 32 - ai(t) + o | n << o | r, overflow: i + e };
  }
  return { id: 1 << i | n << o | r, overflow: e };
}
var ai = Math.clz32 ? Math.clz32 : Pw, Ew = Math.log, $w = Math.LN2;
function Pw(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Ew(e) / $w | 0) | 0;
}
function Nw(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Tw = typeof Object.is == "function" ? Object.is : Nw, zt = null, fa = null, ci = null, X = null, Tr = !1, Wi = !1, so = 0, Ht = null, fl = 0;
function yn() {
  if (zt === null) throw Error(D(321));
  return zt;
}
function yd() {
  if (0 < fl) throw Error(D(312));
  return { memoizedState: null, queue: null, next: null };
}
function pa() {
  return X === null ? ci === null ? (Tr = !1, ci = X = yd()) : (Tr = !0, X = ci) : X.next === null ? (Tr = !1, X = X.next = yd()) : (Tr = !0, X = X.next), X;
}
function ha() {
  fa = zt = null, Wi = !1, ci = null, fl = 0, X = Ht = null;
}
function Uh(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function gd(e, t, n) {
  if (zt = yn(), X = pa(), Tr) {
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
  return e = e === Uh ? typeof t == "function" ? t() : t : n !== void 0 ? n(t) : t, X.memoizedState = e, e = X.queue = { last: null, dispatch: null }, e = e.dispatch = Mw.bind(null, zt, e), [X.memoizedState, e];
}
function vd(e, t) {
  if (zt = yn(), X = pa(), t = t === void 0 ? null : t, X !== null) {
    var n = X.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var o = 0; o < r.length && o < t.length; o++) if (!Tw(t[o], r[o])) {
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
function Mw(e, t, n) {
  if (25 <= fl) throw Error(D(301));
  if (e === zt) if (Wi = !0, e = { action: n, next: null }, Ht === null && (Ht = /* @__PURE__ */ new Map()), n = Ht.get(t), n === void 0) Ht.set(t, e);
  else {
    for (t = n; t.next !== null; ) t = t.next;
    t.next = e;
  }
}
function Rw() {
  throw Error(D(394));
}
function Uo() {
}
var wd = { readContext: function(e) {
  return e._currentValue;
}, useContext: function(e) {
  return yn(), e._currentValue;
}, useMemo: vd, useReducer: gd, useRef: function(e) {
  zt = yn(), X = pa();
  var t = X.memoizedState;
  return t === null ? (e = { current: e }, X.memoizedState = e) : t;
}, useState: function(e) {
  return gd(Uh, e);
}, useInsertionEffect: Uo, useLayoutEffect: function() {
}, useCallback: function(e, t) {
  return vd(function() {
    return e;
  }, t);
}, useImperativeHandle: Uo, useEffect: Uo, useDebugValue: Uo, useDeferredValue: function(e) {
  return yn(), e;
}, useTransition: function() {
  return yn(), [!1, Rw];
}, useId: function() {
  var e = fa.treeContext, t = e.overflow;
  e = e.id, e = (e & ~(1 << 32 - ai(e) - 1)).toString(32) + t;
  var n = di;
  if (n === null) throw Error(D(404));
  return t = so++, e = ":" + n.idPrefix + "R" + e, 0 < t && (e += "H" + t.toString(32)), e + ":";
}, useMutableSource: function(e, t) {
  return yn(), t(e._source);
}, useSyncExternalStore: function(e, t, n) {
  if (n === void 0) throw Error(D(407));
  return n();
} }, di = null, Zl = kh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
function jw(e) {
  return console.error(e), null;
}
function Mr() {
}
function zw(e, t, n, r, o, i, l, s, u) {
  var a = [], d = /* @__PURE__ */ new Set();
  return t = { destination: null, responseState: t, progressiveChunkSize: r === void 0 ? 12800 : r, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: d, pingedTasks: a, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: o === void 0 ? jw : o, onAllReady: i === void 0 ? Mr : i, onShellReady: l === void 0 ? Mr : l, onShellError: s === void 0 ? Mr : s, onFatalError: u === void 0 ? Mr : u }, n = Vi(t, 0, null, n, !1, !1), n.parentFlushed = !0, e = ma(t, e, null, n, d, Dh, null, _w), a.push(e), t;
}
function ma(e, t, n, r, o, i, l, s) {
  e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
  var u = { node: t, ping: function() {
    var a = e.pingedTasks;
    a.push(u), a.length === 1 && Bh(e);
  }, blockedBoundary: n, blockedSegment: r, abortSet: o, legacyContext: i, context: l, treeContext: s };
  return o.add(u), u;
}
function Vi(e, t, n, r, o, i) {
  return { status: 0, id: -1, index: t, parentFlushed: !1, chunks: [], children: [], formatContext: r, boundary: n, lastPushedText: o, textEmbedded: i };
}
function uo(e, t) {
  if (e = e.onError(t), e != null && typeof e != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
  return e;
}
function Bi(e, t) {
  var n = e.onShellError;
  n(t), n = e.onFatalError, n(t), e.destination !== null ? (e.status = 2, Ch(e.destination, t)) : (e.status = 1, e.fatalError = t);
}
function xd(e, t, n, r, o) {
  for (zt = {}, fa = t, so = 0, e = n(r, o); Wi; ) Wi = !1, so = 0, fl += 1, X = null, e = n(r, o);
  return ha(), e;
}
function kd(e, t, n, r) {
  var o = n.render(), i = r.childContextTypes;
  if (i != null) {
    var l = t.legacyContext;
    if (typeof n.getChildContext != "function") r = l;
    else {
      n = n.getChildContext();
      for (var s in n) if (!(s in i)) throw Error(D(108, Zs(r) || "Unknown", s));
      r = Ur({}, l, n);
    }
    t.legacyContext = r, Qe(e, t, o), t.legacyContext = l;
  } else Qe(e, t, o);
}
function Sd(e, t) {
  if (e && e.defaultProps) {
    t = Ur({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function eu(e, t, n, r, o) {
  if (typeof n == "function") if (n.prototype && n.prototype.isReactComponent) {
    o = pd(n, t.legacyContext);
    var i = n.contextType;
    i = new n(r, typeof i == "object" && i !== null ? i._currentValue : o), md(i, n, r, o), kd(e, t, i, n);
  } else {
    i = pd(n, t.legacyContext), o = xd(e, t, n, r, i);
    var l = so !== 0;
    if (typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0) md(o, n, r, i), kd(e, t, o, n);
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
    switch (o = t.blockedSegment, i = Cv(o.chunks, n, r, e.responseState, o.formatContext), o.lastPushedText = !1, l = o.formatContext, o.formatContext = gv(l, n, r), tu(e, t, i), o.formatContext = l, n) {
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
        o.chunks.push(_v, O(n), Ev);
    }
    o.lastPushedText = !1;
  } else {
    switch (n) {
      case Sw:
      case kw:
      case Nh:
      case Th:
      case Ph:
        Qe(e, t, r.children);
        return;
      case Fh:
        Qe(e, t, r.children);
        return;
      case xw:
        throw Error(D(343));
      case zh:
        e: {
          n = t.blockedBoundary, o = t.blockedSegment, i = r.fallback, r = r.children, l = /* @__PURE__ */ new Set();
          var s = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: l, errorDigest: null }, u = Vi(e, o.chunks.length, s, o.formatContext, !1, !1);
          o.children.push(u), o.lastPushedText = !1;
          var a = Vi(e, 0, null, o.formatContext, !1, !1);
          a.parentFlushed = !0, t.blockedBoundary = s, t.blockedSegment = a;
          try {
            if (tu(
              e,
              t,
              r
            ), a.lastPushedText && a.textEmbedded && a.chunks.push(ca), a.status = 1, Hi(s, a), s.pendingTasks === 0) break e;
          } catch (d) {
            a.status = 4, s.forceClientRender = !0, s.errorDigest = uo(e, d);
          } finally {
            t.blockedBoundary = n, t.blockedSegment = o;
          }
          t = ma(e, i, n, u, l, t.legacyContext, t.context, t.treeContext), e.pingedTasks.push(t);
        }
        return;
    }
    if (typeof n == "object" && n !== null) switch (n.$$typeof) {
      case jh:
        if (r = xd(e, t, n.render, r, o), so !== 0) {
          n = t.treeContext, t.treeContext = qs(n, 1, 0);
          try {
            Qe(e, t, r);
          } finally {
            t.treeContext = n;
          }
        } else Qe(e, t, r);
        return;
      case Lh:
        n = n.type, r = Sd(n, r), eu(e, t, n, r, o);
        return;
      case Mh:
        if (o = r.children, n = n._context, r = r.value, i = n._currentValue, n._currentValue = r, l = kn, kn = r = { parent: l, depth: l === null ? 0 : l.depth + 1, context: n, parentValue: i, value: r }, t.context = r, Qe(e, t, o), e = kn, e === null) throw Error(D(403));
        r = e.parentValue, e.context._currentValue = r === Cw ? e.context._defaultValue : r, e = kn = e.parent, t.context = e;
        return;
      case Rh:
        r = r.children, r = r(n._currentValue), Qe(e, t, r);
        return;
      case da:
        o = n._init, n = o(n._payload), r = Sd(n, r), eu(e, t, n, r, void 0);
        return;
    }
    throw Error(D(
      130,
      n == null ? n : typeof n,
      ""
    ));
  }
}
function Qe(e, t, n) {
  if (t.node = n, typeof n == "object" && n !== null) {
    switch (n.$$typeof) {
      case ww:
        eu(e, t, n.type, n.props, n.ref);
        return;
      case $h:
        throw Error(D(257));
      case da:
        var r = n._init;
        n = r(n._payload), Qe(e, t, n);
        return;
    }
    if (Js(n)) {
      Cd(e, t, n);
      return;
    }
    if (n === null || typeof n != "object" ? r = null : (r = fd && n[fd] || n["@@iterator"], r = typeof r == "function" ? r : null), r && (r = r.call(n))) {
      if (n = r.next(), !n.done) {
        var o = [];
        do
          o.push(n.value), n = r.next();
        while (!n.done);
        Cd(e, t, o);
      }
      return;
    }
    throw e = Object.prototype.toString.call(n), Error(D(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  typeof n == "string" ? (r = t.blockedSegment, r.lastPushedText = id(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)) : typeof n == "number" && (r = t.blockedSegment, r.lastPushedText = id(t.blockedSegment.chunks, "" + n, e.responseState, r.lastPushedText));
}
function Cd(e, t, n) {
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
      var l = t.blockedSegment, s = Vi(e, l.chunks.length, null, l.formatContext, l.lastPushedText, !0);
      l.children.push(s), l.lastPushedText = !1, e = ma(e, t.node, t.blockedBoundary, s, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, n.then(e, e), t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = i, Ui(i);
    } else throw t.blockedSegment.formatContext = r, t.legacyContext = o, t.context = i, Ui(i), u;
  }
}
function Fw(e) {
  var t = e.blockedBoundary;
  e = e.blockedSegment, e.status = 3, Vh(this, t, e);
}
function Wh(e, t, n) {
  var r = e.blockedBoundary;
  e.blockedSegment.status = 3, r === null ? (t.allPendingTasks--, t.status !== 2 && (t.status = 2, t.destination !== null && t.destination.close())) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, e = n === void 0 ? Error(D(432)) : n, r.errorDigest = t.onError(e), r.parentFlushed && t.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach(function(o) {
    return Wh(o, t, n);
  }), r.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0 && (r = t.onAllReady, r()));
}
function Hi(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    n.id = t.id, n.parentFlushed = !0, n.status === 1 && Hi(e, n);
  } else e.completedSegments.push(t);
}
function Vh(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(D(389));
      e.completedRootSegment = n;
    }
    e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = Mr, t = e.onShellReady, t());
  } else t.pendingTasks--, t.forceClientRender || (t.pendingTasks === 0 ? (n.parentFlushed && n.status === 1 && Hi(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(Fw, e), t.fallbackAbortableTasks.clear()) : n.parentFlushed && n.status === 1 && (Hi(t, n), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
}
function Bh(e) {
  if (e.status !== 2) {
    var t = kn, n = Zl.current;
    Zl.current = wd;
    var r = di;
    di = e.responseState;
    try {
      var o = e.pingedTasks, i;
      for (i = 0; i < o.length; i++) {
        var l = o[i], s = e, u = l.blockedSegment;
        if (u.status === 0) {
          Ui(l.context);
          try {
            Qe(s, l, l.node), u.lastPushedText && u.textEmbedded && u.chunks.push(ca), l.abortSet.delete(l), u.status = 1, Vh(s, l.blockedBoundary, u);
          } catch (y) {
            if (ha(), typeof y == "object" && y !== null && typeof y.then == "function") {
              var a = l.ping;
              y.then(a, a);
            } else {
              l.abortSet.delete(l), u.status = 4;
              var d = l.blockedBoundary, f = y, m = uo(s, f);
              if (d === null ? Bi(s, f) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = !0, d.errorDigest = m, d.parentFlushed && s.clientRenderedBoundaries.push(d))), s.allPendingTasks--, s.allPendingTasks === 0) {
                var v = s.onAllReady;
                v();
              }
            }
          } finally {
          }
        }
      }
      o.splice(0, i), e.destination !== null && ya(e, e.destination);
    } catch (y) {
      uo(e, y), Bi(e, y);
    } finally {
      di = r, Zl.current = n, n === wd && Ui(t);
    }
  }
}
function Wo(e, t, n) {
  switch (n.parentFlushed = !0, n.status) {
    case 0:
      var r = n.id = e.nextSegmentId++;
      return n.lastPushedText = !1, n.textEmbedded = !1, e = e.responseState, R(t, $v), R(t, e.placeholderPrefix), e = O(r.toString(16)), R(t, e), J(t, Pv);
    case 1:
      n.status = 2;
      var o = !0;
      r = n.chunks;
      var i = 0;
      n = n.children;
      for (var l = 0; l < n.length; l++) {
        for (o = n[l]; i < o.index; i++) R(t, r[i]);
        o = pl(e, t, o);
      }
      for (; i < r.length - 1; i++) R(t, r[i]);
      return i < r.length && (o = J(t, r[i])), o;
    default:
      throw Error(D(390));
  }
}
function pl(e, t, n) {
  var r = n.boundary;
  if (r === null) return Wo(e, t, n);
  if (r.parentFlushed = !0, r.forceClientRender) r = r.errorDigest, J(t, Rv), R(t, zv), r && (R(t, Lv), R(t, O(me(r))), R(t, Fv)), J(t, Dv), Wo(e, t, n);
  else if (0 < r.pendingTasks) {
    r.rootSegmentID = e.nextSegmentId++, 0 < r.completedSegments.length && e.partialBoundaries.push(r);
    var o = e.responseState, i = o.nextSuspenseID++;
    o = P(o.boundaryPrefix + i.toString(16)), r = r.id = o, dd(t, e.responseState, r), Wo(e, t, n);
  } else if (r.byteSize > e.progressiveChunkSize) r.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(r), dd(t, e.responseState, r.id), Wo(e, t, n);
  else {
    if (J(t, Nv), n = r.completedSegments, n.length !== 1) throw Error(D(391));
    pl(e, t, n[0]);
  }
  return J(t, jv);
}
function _d(e, t, n) {
  return ow(t, e.responseState, n.formatContext, n.id), pl(e, t, n), iw(t, n.formatContext);
}
function Ed(e, t, n) {
  for (var r = n.completedSegments, o = 0; o < r.length; o++) Hh(e, t, n, r[o]);
  if (r.length = 0, e = e.responseState, r = n.id, n = n.rootSegmentID, R(t, e.startInlineScript), e.sentCompleteBoundaryFunction ? R(t, dw) : (e.sentCompleteBoundaryFunction = !0, R(t, cw)), r === null) throw Error(D(395));
  return n = O(n.toString(16)), R(t, r), R(t, fw), R(t, e.segmentPrefix), R(t, n), J(t, pw);
}
function Hh(e, t, n, r) {
  if (r.status === 2) return !0;
  var o = r.id;
  if (o === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(D(392));
    return _d(e, t, r);
  }
  return _d(e, t, r), e = e.responseState, R(t, e.startInlineScript), e.sentCompleteSegmentFunction ? R(t, sw) : (e.sentCompleteSegmentFunction = !0, R(t, lw)), R(t, e.segmentPrefix), o = O(o.toString(16)), R(t, o), R(t, uw), R(t, e.placeholderPrefix), R(t, o), J(t, aw);
}
function ya(e, t) {
  Be = new Uint8Array(512), He = 0;
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      pl(e, t, n), e.completedRootSegment = null;
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) R(t, r[n]);
      n < r.length && J(t, r[n]);
    }
    var o = e.clientRenderedBoundaries, i;
    for (i = 0; i < o.length; i++) {
      var l = o[i];
      r = t;
      var s = e.responseState, u = l.id, a = l.errorDigest, d = l.errorMessage, f = l.errorComponentStack;
      if (R(r, s.startInlineScript), s.sentClientRenderFunction ? R(r, mw) : (s.sentClientRenderFunction = !0, R(
        r,
        hw
      )), u === null) throw Error(D(395));
      R(r, u), R(r, yw), (a || d || f) && (R(r, Gl), R(r, O(Jl(a || "")))), (d || f) && (R(r, Gl), R(r, O(Jl(d || "")))), f && (R(r, Gl), R(r, O(Jl(f)))), J(r, gw);
    }
    o.splice(0, i);
    var m = e.completedBoundaries;
    for (i = 0; i < m.length; i++) Ed(e, t, m[i]);
    m.splice(0, i), td(t), Be = new Uint8Array(512), He = 0;
    var v = e.partialBoundaries;
    for (i = 0; i < v.length; i++) {
      var y = v[i];
      e: {
        o = e, l = t;
        var x = y.completedSegments;
        for (s = 0; s < x.length; s++) if (!Hh(
          o,
          l,
          y,
          x[s]
        )) {
          s++, x.splice(0, s);
          var k = !1;
          break e;
        }
        x.splice(0, s), k = !0;
      }
      if (!k) {
        e.destination = null, i++, v.splice(0, i);
        return;
      }
    }
    v.splice(0, i);
    var p = e.completedBoundaries;
    for (i = 0; i < p.length; i++) Ed(e, t, p[i]);
    p.splice(0, i);
  } finally {
    td(t), e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && t.close();
  }
}
function $d(e, t) {
  try {
    var n = e.abortableTasks;
    n.forEach(function(r) {
      return Wh(r, e, t);
    }), n.clear(), e.destination !== null && ya(e, e.destination);
  } catch (r) {
    uo(e, r), Bi(e, r);
  }
}
sa.renderToReadableStream = function(e, t) {
  return new Promise(function(n, r) {
    var o, i, l = new Promise(function(d, f) {
      i = d, o = f;
    }), s = zw(e, mv(t ? t.identifierPrefix : void 0, t ? t.nonce : void 0, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0), yv(t ? t.namespaceURI : void 0), t ? t.progressiveChunkSize : void 0, t ? t.onError : void 0, i, function() {
      var d = new ReadableStream({ type: "bytes", pull: function(f) {
        if (s.status === 1) s.status = 2, Ch(f, s.fatalError);
        else if (s.status !== 2 && s.destination === null) {
          s.destination = f;
          try {
            ya(s, f);
          } catch (m) {
            uo(s, m), Bi(s, m);
          }
        }
      }, cancel: function() {
        $d(s);
      } }, { highWaterMark: 0 });
      d.allReady = l, n(d);
    }, function(d) {
      l.catch(function() {
      }), r(d);
    }, o);
    if (t && t.signal) {
      var u = t.signal, a = function() {
        $d(s, u.reason), u.removeEventListener("abort", a);
      };
      u.addEventListener("abort", a);
    }
    Bh(s);
  });
};
sa.version = "18.3.1";
var ar, Qh;
ar = ur, Qh = sa;
ar.version;
var Lw = ar.renderToString;
ar.renderToStaticMarkup;
ar.renderToNodeStream;
ar.renderToStaticNodeStream;
Qh.renderToReadableStream;
var Yh = { exports: {} }, Dw = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Iw = Dw, Ow = Iw;
function Xh() {
}
function Kh() {
}
Kh.resetWarningCache = Xh;
var bw = function() {
  function e(r, o, i, l, s, u) {
    if (u !== Ow) {
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
    checkPropTypes: Kh,
    resetWarningCache: Xh
  };
  return n.PropTypes = n, n;
};
Yh.exports = bw();
var Aw = Yh.exports;
const ut = /* @__PURE__ */ Nd(Aw);
var Uw = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Gh(e, t) {
  return e(t = { exports: {} }, t.exports), t.exports;
}
var Ww = Gh(function(e) {
  (function(t) {
    var n = function(k, p, c) {
      if (!u(p) || d(p) || f(p) || m(p) || s(p)) return p;
      var h, w = 0, C = 0;
      if (a(p)) for (h = [], C = p.length; w < C; w++) h.push(n(k, p[w], c));
      else for (var $ in h = {}, p) Object.prototype.hasOwnProperty.call(p, $) && (h[k($, c)] = n(k, p[$], c));
      return h;
    }, r = function(k) {
      return v(k) ? k : (k = k.replace(/[\-_\s]+(.)?/g, function(p, c) {
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
    }, v = function(k) {
      return (k -= 0) == k;
    }, y = function(k, p) {
      var c = p && "process" in p ? p.process : p;
      return typeof c != "function" ? k : function(h, w) {
        return c(h, k, w);
      };
    }, x = { camelize: r, decamelize: i, pascalize: o, depascalize: i, camelizeKeys: function(k, p) {
      return n(y(r, p), k);
    }, decamelizeKeys: function(k, p) {
      return n(y(i, p), k, p);
    }, pascalizeKeys: function(k, p) {
      return n(y(o, p), k);
    }, depascalizeKeys: function() {
      return this.decamelizeKeys.apply(this, arguments);
    } };
    e.exports ? e.exports = x : t.humps = x;
  })(Uw);
}).decamelize, Vw = function(e) {
  if (Array.isArray(e)) return e;
}, Bw = function(e, t) {
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
}, Hw = function(e, t) {
  if (e) {
    if (typeof e == "string") return Pd(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Pd(e, t) : void 0;
  }
}, Qw = function() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}, Yw = function(e, t) {
  return Vw(e) || Bw(e, t) || Hw(e, t) || Qw();
}, Jh = Gh(function(e) {
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
}), Xw = function(e, t) {
  if (e == null) return {};
  var n, r, o = {}, i = Object.keys(e);
  for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
  return o;
}, Zh = function(e, t) {
  if (e == null) return {};
  var n, r, o = Xw(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}, Kw = T.createContext(null);
function qh(e) {
  var t = e.children, n = t === void 0 ? "" : t, r = Zh(e, ["children"]);
  return typeof n != "string" && (n = Lw(n)), Ct.createElement("template", Jh({}, r, { dangerouslySetInnerHTML: { __html: n } }));
}
function em(e) {
  var t = e.root, n = e.children;
  return Ap.createPortal(n === void 0 ? null : n, t);
}
function Gw(e) {
  var t = T.forwardRef(function(n, r) {
    var o, i, l = n.mode, s = l === void 0 ? "open" : l, u = n.delegatesFocus, a = u !== void 0 && u, d = n.styleSheets, f = d === void 0 ? [] : d, m = n.ssr, v = m !== void 0 && m, y = n.children, x = Zh(n, ["mode", "delegatesFocus", "styleSheets", "ssr", "children"]), k = (i = T.useRef((o = r) && o.current), T.useEffect(function() {
      o && (o.current = i.current);
    }, [o]), i), p = T.useState(null), c = Yw(p, 2), h = c[0], w = c[1], C = "node_".concat(s).concat(a);
    return T.useLayoutEffect(function() {
      if (k.current) try {
        if (typeof r == "function" && r(k.current), v) {
          var $ = k.current.shadowRoot;
          return void w($);
        }
        var E = k.current.attachShadow({ mode: s, delegatesFocus: a });
        f.length > 0 && (E.adoptedStyleSheets = f), w(E);
      } catch (M) {
        (function(W) {
          var F = W.error, oe = W.styleSheets, B = W.root;
          switch (F.name) {
            case "NotSupportedError":
              oe.length > 0 && (B.adoptedStyleSheets = oe);
              break;
            default:
              throw F;
          }
        })({ error: M, styleSheets: f, root: h });
      }
    }, [r, k, f]), Ct.createElement(Ct.Fragment, null, Ct.createElement(e.tag, Jh({ key: C, ref: k }, x), (h || v) && Ct.createElement(Kw.Provider, { value: h }, v ? Ct.createElement(qh, { shadowroot: s, shadowrootmode: s }, e.render({ root: h, ssr: v, children: y })) : Ct.createElement(em, { root: h }, e.render({ root: h, ssr: v, children: y })))));
  });
  return t.propTypes = { mode: ut.oneOf(["open", "closed"]), delegatesFocus: ut.bool, styleSheets: ut.arrayOf(ut.instanceOf(globalThis.CSSStyleSheet)), ssr: ut.bool, children: ut.node }, t;
}
qh.propTypes = { children: ut.oneOfType([ut.string, ut.node]) }, em.propTypes = { root: ut.object.isRequired, children: ut.node };
var ql = /* @__PURE__ */ new Map();
function Jw() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "core", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(r) {
    return r.children;
  };
  return new Proxy(e, { get: function(r, o) {
    var i = Ww(o, { separator: "-" }), l = "".concat(t, "-").concat(i);
    return ql.has(l) || ql.set(l, Gw({ tag: i, render: n })), ql.get(l);
  } });
}
var Zw = Jw();
const qw = '@keyframes slide-up{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}input{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}input::-moz-placeholder{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}input::placeholder{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}input:disabled{cursor:not-allowed;--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.\\!container{width:100%!important}.container{width:100%}@media (min-width: 640px){.\\!container{max-width:640px!important}.container{max-width:640px}}@media (min-width: 768px){.\\!container{max-width:768px!important}.container{max-width:768px}}@media (min-width: 1024px){.\\!container{max-width:1024px!important}.container{max-width:1024px}}@media (min-width: 1280px){.\\!container{max-width:1280px!important}.container{max-width:1280px}}@media (min-width: 1536px){.\\!container{max-width:1536px!important}.container{max-width:1536px}}.visible{visibility:visible}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-4{top:1rem;right:1rem;bottom:1rem;left:1rem}.bottom-24{bottom:6rem}.bottom-6{bottom:1.5rem}.bottom-full{bottom:100%}.left-0{left:0}.right-0{right:0}.right-6{right:1.5rem}.top-full{top:100%}.z-50{z-index:50}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.ml-1{margin-left:.25rem}.mt-1{margin-top:.25rem}.mt-2{margin-top:.5rem}.inline{display:inline}.flex{display:flex}.grid{display:grid}.hidden{display:none}.h-12{height:3rem}.h-2{height:.5rem}.h-3{height:.75rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-\\[75vh\\]{height:75vh}.h-auto{height:auto}.h-full{height:100%}.max-h-48{max-height:12rem}.max-h-\\[800px\\]{max-height:800px}.max-h-none{max-height:none}.min-h-0{min-height:0px}.min-h-\\[400px\\]{min-height:400px}.min-h-screen{min-height:100vh}.w-12{width:3rem}.w-2{width:.5rem}.w-3{width:.75rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-64{width:16rem}.w-8{width:2rem}.w-\\[400px\\]{width:400px}.w-auto{width:auto}.w-full{width:100%}.min-w-0{min-width:0px}.min-w-48{min-width:12rem}.min-w-\\[32px\\]{min-width:32px}.max-w-3xl{max-width:48rem}.max-w-\\[200px\\]{max-width:200px}.max-w-\\[calc\\(100vw-3rem\\)\\]{max-width:calc(100vw - 3rem)}.max-w-none{max-width:none}.max-w-xs{max-width:20rem}.flex-1{flex:1 1 0%}.flex-shrink-0{flex-shrink:0}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.animate-slide-up{animation:slide-up .3s ease-out}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse: 0;border-top-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(1px * var(--tw-divide-y-reverse))}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.whitespace-pre{white-space:pre}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-xl{border-radius:.75rem}.rounded-t-lg{border-top-left-radius:.5rem;border-top-right-radius:.5rem}.rounded-bl-sm{border-bottom-left-radius:.125rem}.rounded-br-sm{border-bottom-right-radius:.125rem}.border{border-width:1px}.border-t{border-top-width:1px}.border-gray-200{--tw-border-opacity: 1;border-color:rgb(229 231 235 / var(--tw-border-opacity, 1))}.border-gray-300{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1))}.border-red-200{--tw-border-opacity: 1;border-color:rgb(254 202 202 / var(--tw-border-opacity, 1))}.border-yellow-200{--tw-border-opacity: 1;border-color:rgb(254 240 138 / var(--tw-border-opacity, 1))}.bg-blue-500{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity, 1))}.bg-gray-100{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity, 1))}.bg-gray-900{--tw-bg-opacity: 1;background-color:rgb(17 24 39 / var(--tw-bg-opacity, 1))}.bg-green-100{--tw-bg-opacity: 1;background-color:rgb(220 252 231 / var(--tw-bg-opacity, 1))}.bg-green-400{--tw-bg-opacity: 1;background-color:rgb(74 222 128 / var(--tw-bg-opacity, 1))}.bg-red-100{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity, 1))}.bg-red-400{--tw-bg-opacity: 1;background-color:rgb(248 113 113 / var(--tw-bg-opacity, 1))}.bg-red-500{--tw-bg-opacity: 1;background-color:rgb(239 68 68 / var(--tw-bg-opacity, 1))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity, 1))}.bg-yellow-100{--tw-bg-opacity: 1;background-color:rgb(254 249 195 / var(--tw-bg-opacity, 1))}.bg-yellow-50{--tw-bg-opacity: 1;background-color:rgb(254 252 232 / var(--tw-bg-opacity, 1))}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.pb-1{padding-bottom:.25rem}.pb-2{padding-bottom:.5rem}.text-left{text-align:left}.text-center{text-align:center}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.text-blue-500{--tw-text-opacity: 1;color:rgb(59 130 246 / var(--tw-text-opacity, 1))}.text-blue-600{--tw-text-opacity: 1;color:rgb(37 99 235 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.text-gray-700{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.text-green-300{--tw-text-opacity: 1;color:rgb(134 239 172 / var(--tw-text-opacity, 1))}.text-green-600{--tw-text-opacity: 1;color:rgb(22 163 74 / var(--tw-text-opacity, 1))}.text-indigo-500{--tw-text-opacity: 1;color:rgb(99 102 241 / var(--tw-text-opacity, 1))}.text-red-500{--tw-text-opacity: 1;color:rgb(239 68 68 / var(--tw-text-opacity, 1))}.text-red-600{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.text-red-800{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-yellow-600{--tw-text-opacity: 1;color:rgb(202 138 4 / var(--tw-text-opacity, 1))}.text-yellow-800{--tw-text-opacity: 1;color:rgb(133 77 14 / var(--tw-text-opacity, 1))}.underline{text-decoration-line:underline}.opacity-50{opacity:.5}.opacity-90{opacity:.9}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-2xl{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity, 1))}.hover\\:bg-gray-50:hover{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity, 1))}.hover\\:bg-white\\/10:hover{background-color:#ffffff1a}.hover\\:text-blue-700:hover{--tw-text-opacity: 1;color:rgb(29 78 216 / var(--tw-text-opacity, 1))}.hover\\:text-gray-600:hover{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity, 1))}.hover\\:text-gray-700:hover{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity, 1))}.hover\\:text-gray-800:hover{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity, 1))}.hover\\:text-red-600:hover{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity, 1))}.hover\\:text-red-800:hover{--tw-text-opacity: 1;color:rgb(153 27 27 / var(--tw-text-opacity, 1))}.hover\\:text-red-900:hover{--tw-text-opacity: 1;color:rgb(127 29 29 / var(--tw-text-opacity, 1))}.hover\\:text-yellow-900:hover{--tw-text-opacity: 1;color:rgb(113 63 18 / var(--tw-text-opacity, 1))}.hover\\:opacity-90:hover{opacity:.9}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-opacity-50:focus{--tw-ring-opacity: .5}.disabled\\:opacity-50:disabled{opacity:.5}';
function ex(e) {
  return e.replace(/:root\b/g, ":host").replaceAll("((-webkit-hyphens:none)) and ", "").replaceAll("(-webkit-hyphens: none) and ", "");
}
function tm({ ticketdeskId: e }) {
  const [t, n] = T.useState(!1), [r, o] = T.useState(!1), {
    messages: i,
    sendMessage: l,
    retryMessage: s,
    startNewChat: u,
    endCurrentChat: a,
    loadSession: d,
    getRecentChats: f,
    updateProfile: m,
    errorMessage: v,
    setErrorMessage: y,
    sessions: x,
    selectedSession: k,
    isConnected: p,
    isLoading: c,
    config: h,
    operators: w,
    lastActive: C
  } = $1({
    ticketdeskId: e
  }), $ = (E) => {
    E && d(), n(E);
  };
  return c === !0 || !h ? null : /* @__PURE__ */ g.jsxs(Zw.div, { children: [
    /* @__PURE__ */ g.jsx("style", { children: ex(qw) }),
    /* @__PURE__ */ g.jsx(
      dg,
      {
        isOpen: t,
        onClick: () => $(!t),
        config: h
      }
    ),
    /* @__PURE__ */ g.jsx(
      p1,
      {
        ticketdeskId: e,
        isOpen: t,
        isMaximized: r,
        isConnected: p,
        config: h,
        operators: w,
        lastActive: C,
        messages: i,
        sessions: x,
        selectedSession: k,
        onStartNewChat: u,
        onEndChat: a,
        onLoadSession: d,
        onGetRecentChats: f,
        onUpdateProfile: m,
        errorMessage: v,
        setErrorMessage: y,
        onClose: () => n(!1),
        onToggleMaximize: () => o(!r),
        onSendMessage: l,
        onRetryMessage: s
      }
    )
  ] });
}
let Sr = null, kt = null;
function tx(e) {
  kt || (kt = document.createElement("div"), kt.id = "ticketdesk-ai", kt.setAttribute("style", "color-scheme: light;"), document.body.appendChild(kt));
  const t = () => {
    Sr && (Sr.unmount(), Sr = null), kt && (kt.remove(), kt = null);
  };
  return Sr = Gu(kt), Sr.render(/* @__PURE__ */ g.jsx(tm, { ticketdeskId: e })), { close: t };
}
const nx = Dy(tm, {
  props: {
    ticketdeskId: "string"
  }
});
customElements.define("ticketdesk-chatbot", nx);
window.ticketdesk = {
  initChatbot: tx
};
window.TICKETDESK_ID && window.ticketdesk.initChatbot(window.TICKETDESK_ID);
