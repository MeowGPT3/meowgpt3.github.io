import {
    _ as k
} from "./fzrn137102spawew.js";
import {
    g1 as A
} from "./bq4rrqi54riy5k2e.js";
import {
    r as d
} from "./mna1wiucqak6lqzp.js";
import {
    i as I
} from "./eqjyr70wex3y5gfz.js";
var B = function(e) {
        var t = d.useRef(e);
        return I(function() {
            t.current = e
        }), t
    },
    L = function(e, t) {
        if (typeof e == "function") {
            e(t);
            return
        }
        e.current = t
    },
    M = function(e, t) {
        var r = d.useRef();
        return d.useCallback(function(i) {
            e.current = i, r.current && L(r.current, null), r.current = t, t && L(t, i)
        }, [t])
    },
    R = {
        "min-height": "0",
        "max-height": "none",
        height: "0",
        visibility: "hidden",
        overflow: "hidden",
        position: "absolute",
        "z-index": "-1000",
        top: "0",
        right: "0"
    },
    N = function(e) {
        Object.keys(R).forEach(function(t) {
            e.style.setProperty(t, R[t], "important")
        })
    },
    H = N,
    o = null,
    C = function(e, t) {
        var r = e.scrollHeight;
        return t.sizingStyle.boxSizing === "border-box" ? r + t.borderSize : r - t.paddingSize
    };

function _(n, e, t, r) {
    t === void 0 && (t = 1), r === void 0 && (r = 1 / 0), o || (o = document.createElement("textarea"), o.setAttribute("tabindex", "-1"), o.setAttribute("aria-hidden", "true"), H(o)), o.parentNode === null && document.body.appendChild(o);
    var i = n.paddingSize,
        s = n.borderSize,
        a = n.sizingStyle,
        g = a.boxSizing;
    Object.keys(a).forEach(function(v) {
        var p = v;
        o.style[p] = a[p]
    }), H(o), o.value = e;
    var u = C(o, n);
    o.value = e, u = C(o, n), o.value = "x";
    var c = o.scrollHeight - i,
        h = c * t;
    g === "border-box" && (h = h + i + s), u = Math.max(h, u);
    var l = c * r;
    return g === "border-box" && (l = l + i + s), u = Math.min(l, u), [u, c]
}
var w = function() {},
    $ = function(e, t) {
        return e.reduce(function(r, i) {
            return r[i] = t[i], r
        }, {})
    },
    j = ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "boxSizing", "fontFamily", "fontSize", "fontStyle", "fontWeight", "letterSpacing", "lineHeight", "paddingBottom", "paddingLeft", "paddingRight", "paddingTop", "tabSize", "textIndent", "textRendering", "textTransform", "width", "wordBreak"],
    P = !!document.documentElement.currentStyle,
    O = function(e) {
        var t = window.getComputedStyle(e);
        if (t === null) return null;
        var r = $(j, t),
            i = r.boxSizing;
        if (i === "") return null;
        P && i === "border-box" && (r.width = parseFloat(r.width) + parseFloat(r.borderRightWidth) + parseFloat(r.borderLeftWidth) + parseFloat(r.paddingRight) + parseFloat(r.paddingLeft) + "px");
        var s = parseFloat(r.paddingBottom) + parseFloat(r.paddingTop),
            a = parseFloat(r.borderBottomWidth) + parseFloat(r.borderTopWidth);
        return {
            sizingStyle: r,
            paddingSize: s,
            borderSize: a
        }
    },
    Y = O;

function E(n, e, t) {
    var r = B(t);
    d.useLayoutEffect(function() {
        var i = function(a) {
            return r.current(a)
        };
        if (n) return n.addEventListener(e, i),
            function() {
                return n.removeEventListener(e, i)
            }
    }, [])
}
var G = function(e) {
        E(window, "resize", e)
    },
    U = function(e) {
        E(document.fonts, "loadingdone", e)
    },
    X = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"],
    Z = function(e, t) {
        var r = e.cacheMeasurements,
            i = e.maxRows,
            s = e.minRows,
            a = e.onChange,
            g = a === void 0 ? w : a,
            u = e.onHeightChange,
            c = u === void 0 ? w : u,
            h = A(e, X),
            l = h.value !== void 0,
            v = d.useRef(null),
            p = M(v, t),
            z = d.useRef(0),
            S = d.useRef(),
            m = function() {
                var f = v.current,
                    x = r && S.current ? S.current : Y(f);
                if (x) {
                    S.current = x;
                    var y = _(x, f.value || f.placeholder || "x", s, i),
                        b = y[0],
                        W = y[1];
                    z.current !== b && (z.current = b, f.style.setProperty("height", b + "px", "important"), c(b, {
                        rowHeight: W
                    }))
                }
            },
            T = function(f) {
                l || m(), g(f)
            };
        return d.useLayoutEffect(m), G(m), U(m), d.createElement("textarea", k({}, h, {
            onChange: T,
            ref: p
        }))
    },
    Q = d.forwardRef(Z);
export {
    Q as i
};
//# sourceMappingURL=fr83hp2kuh3q1zfr.js.map