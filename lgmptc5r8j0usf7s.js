const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/j8ma7o1jh1q8vr2o.js", "assets/mna1wiucqak6lqzp.js", "assets/i8yfibg1wfe561s8.js", "assets/npk39rv6apmoavn4.js", "assets/lwme42j7zzyr3q7j.js", "assets/bq4rrqi54riy5k2e.js", "assets/root-ey6kd8gf.css", "assets/conversation-small-fu0y35oi.css", "assets/hu7ncopiydwaw46a.js", "assets/l4ce2zdnnawhaijx.js", "assets/gy64pge8qevmvg7e.js", "assets/ff3dg9pqimxn5e3g.js", "assets/bcieds2s0jraaq45.js", "assets/f31xlzmjepjbstv5.js", "assets/fzrn137102spawew.js", "assets/hx3p6g5v1c632c0c.js", "assets/comments-plugin-i34sjb0l.css", "assets/do5id1w5k5vogwvo.js", "assets/codemirror-idex3gld.css", "assets/hmkqz2412ql0ayou.js", "assets/m0wlwtibo8yb2c2h.js", "assets/cxz91putlw7pmfk2.js", "assets/dezjogalgkr4n852.js", "assets/l8hbmbuftwr3v440.js", "assets/fr83hp2kuh3q1zfr.js", "assets/eqjyr70wex3y5gfz.js", "assets/m1vqqb108216sh4q.js", "assets/g77ymanjjcustcw3.js", "assets/ld626s1jynzsi9nc.js", "assets/niyc1j17i1iogjjg.js", "assets/m3b3wk7x0ejaq5a6.js", "assets/incso7gaflms21pb.js", "assets/izpd64p6gs4nsaky.js", "assets/bk8slwxjkdlmxjxm.js", "assets/bnmzmikiaefr3trh.js", "assets/ny6tpsdxtp9tp9uu.js", "assets/n4gvsdnw0wjo4fci.js", "assets/kfddsdc840corcav.js", "assets/hof9jjp8fzjywfd9.js", "assets/oqh7hur52tf42g0a.js", "assets/ce3ohyki3hn4c6gi.js", "assets/nlunkjg68zpqwxoa.js", "assets/b9s7mtd15ebayzjc.js", "assets/ihors7v1ehg5i95p.js", "assets/br9dq8jlta8ssu5o.js", "assets/e5xsqxswwdimah8k.js", "assets/m44xlxtgozicne9l.js", "assets/dryl4ixhgg2bg6zd.js", "assets/prosemirror-ofhzvcxp.css"]))) => i.map(i => d[i]);
import {
    j as a,
    av as re,
    r as S,
    ax as se,
    c as ie
} from "./mna1wiucqak6lqzp.js";
import {
    Z as ue,
    C as Q
} from "./l4ce2zdnnawhaijx.js";
import {
    d as y,
    ci as le,
    r as ae,
    gz as ce,
    c1 as fe,
    bz as K,
    bA as ee
} from "./bq4rrqi54riy5k2e.js";
import {
    k$ as me,
    l0 as ve,
    l1 as de,
    l2 as he,
    ko as pe,
    y as ne,
    f$ as ge,
    gP as xe,
    cM as Ce,
    cJ as ye,
    cL as De,
    cK as Te
} from "./lwme42j7zzyr3q7j.js";
import {
    B as Le
} from "./oqh7hur52tf42g0a.js";
import {
    P as te
} from "./m3b3wk7x0ejaq5a6.js";
import {
    b as Ee
} from "./hu7ncopiydwaw46a.js";

function Ne({
    className: n,
    zIndexKey: e,
    onClick: t
}) {
    return a.jsx(re.div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: y("absolute inset-0", n, ue[e]),
        onClick: t
    })
}

function Oe({
    zIndexKey: n,
    onClick: e
}) {
    return a.jsx(Ne, {
        zIndexKey: n,
        onClick: e,
        className: "bg-gray-50/50 dark:bg-black/50"
    })
}
const we = ({
        onScroll: n
    }) => (me(({
        scrollTop: e
    }) => {
        n ? .(e)
    }), null),
    Ie = ({
        shouldScrollToTop: n
    }) => {
        const e = ve();
        return S.useEffect(() => {
            n === !0 && e({
                behavior: "smooth"
            })
        }, [n, e]), null
    },
    Ae = () => {
        const n = de();
        S.useEffect(() => {
            n({
                behavior: "smooth"
            })
        }, [n]);
        const [e] = he();
        return e ? null : a.jsx("button", {
            onClick: () => n({
                behavior: "smooth"
            }),
            className: "absolute bottom-5 right-1/2 z-10 flex h-8 w-8 translate-x-1/2 cursor-pointer items-center justify-center rounded-full border border-token-border-light bg-token-main-surface-primary bg-clip-padding text-token-text-secondary",
            children: a.jsx(pe, {
                className: "icon-md text-token-text-primary"
            })
        })
    },
    Re = ({
        children: n,
        onScroll: e,
        shouldScrollToTop: t,
        scrollToBottomMode: o = "top",
        isLoading: s = !1,
        header: r,
        height: i,
        overlay: u,
        hideChildren: l = !1,
        disableScroll: c = !1
    }, f) => {
        const m = a.jsx("div", {
            className: y(l ? "hidden" : "block"),
            children: n
        });
        return a.jsxs("main", {
            className: y("relative flex min-h-0 flex-auto flex-grow flex-col", c && "overflow-hidden"),
            ref: f,
            style: {
                height: i
            },
            children: [a.jsx(se, {
                children: s && a.jsx(Oe, {
                    zIndexKey: "textdocDiffLoadingOverlay"
                })
            }), !c && a.jsxs(Le, {
                followButtonClassName: "hidden",
                initialScrollBehavior: "auto",
                scrollViewClassName: "flex flex-col",
                className: "h-full",
                mode: o,
                children: [r, m, u && a.jsx("div", {
                    className: "pointer-events-none w-full flex-1",
                    children: u
                }), o === "bottom" && a.jsx(Ae, {}), a.jsx(we, {
                    onScroll: e
                }), a.jsx(Ie, {
                    shouldScrollToTop: t
                })]
            }), c && a.jsxs(a.Fragment, {
                children: [r, m, u && a.jsx("div", {
                    className: "pointer-events-none h-full w-full",
                    children: u
                })]
            })]
        })
    },
    _e = S.forwardRef(Re);

function Me({
    className: n,
    children: e
}) {
    return a.jsx("header", {
        className: y(n, "flex h-14 flex-none items-center justify-between gap-4 px-3"),
        children: e
    })
}

function be({
    className: n,
    children: e
}) {
    return a.jsx("h2", {
        className: y(n, "truncate text-lg text-token-text-secondary"),
        children: e
    })
}
const je = ({
        onClick: n
    }) => {
        const e = ie(),
            o = ne() ? ce : fe;
        return a.jsx(le, {
            label: e.formatMessage(ze.close),
            children: a.jsx(ge, {
                icon: o,
                onClick: n
            })
        })
    },
    ke = /^rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)(,\s*([\d.]+))?\s*\)$/,
    H = n => {
        const e = n.match(ke);
        if (!e) return null;
        const t = parseFloat(e.at(1) ? ? ""),
            o = parseFloat(e.at(2) ? ? ""),
            s = parseFloat(e.at(3) ? ? "");
        return (t * 299 + o * 587 + s * 114) / 1e3 < 125
    },
    M = ({
        children: n,
        isPreviewingCode: e = !1,
        previewBackgroundColor: t = null
    }) => {
        const o = e && t && H(t),
            s = e && t && !H(t);
        return a.jsx("section", {
            className: y("popover flex h-full w-full flex-col", o && "dark", s && "light", e ? "bg-[rgba(249,249,249,1)] dark:bg-[rgba(33,33,33,1)]" : "bg-token-main-surface-primary"),
            style: {
                backgroundColor: e && t ? t : void 0
            },
            children: n
        })
    };
M.Title = be;
M.CloseButton = je;
M.Header = Me;
M.Content = _e;
const ze = ae({
        close: {
            id: "Bix/Kd",
            defaultMessage: "Close"
        }
    }),
    $e = K(() => ee(() =>
        import ("./j8ma7o1jh1q8vr2o.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39])).then(n => n.CodeComposer), {
        loading: () => a.jsx("div", {
            className: Q.code,
            children: a.jsx("div", {
                className: "h-full w-full px-4",
                children: a.jsx(te, {
                    lines: 20
                })
            })
        })
    }),
    cn = n => a.jsx($e, { ...n
    });
var Be = (n => (n.ALL_HIDDEN = "all_hidden", n.COMMENTS_READONLY = "comments_readonly", n.ENABLED = "enabled", n))(Be || {});
const U = 775,
    Pe = 580,
    Fe = 36,
    Se = 18,
    qe = () => {
        const [{
            width: n
        }, e] = xe(), t = ne(), o = n >= U + Ee ? U : Pe, s = t ? Se : Fe;
        return a.jsx("div", {
            className: y(Q.document, "mt-4"),
            ref: e,
            style: {
                margin: `0 ${s}px`
            },
            children: a.jsx("div", {
                style: {
                    width: o
                },
                children: a.jsx(te, {
                    lines: 20
                })
            })
        })
    },
    Je = K(() => ee(() =>
        import ("./ce3ohyki3hn4c6gi.js"), __vite__mapDeps([40, 1, 41, 5, 6, 13, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 42, 20, 21, 36, 43, 44, 45, 46, 47, 48, 19, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39])).then(n => n.DocumentComposer), {
        loading: qe
    }),
    fn = n => a.jsx(Je, { ...n
    });

function h() {}
h.prototype = {
    diff: function(e, t) {
        var o, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            r = s.callback;
        typeof s == "function" && (r = s, s = {});
        var i = this;

        function u(v) {
            return v = i.postProcess(v, s), r ? (setTimeout(function() {
                r(v)
            }, 0), !0) : v
        }
        e = this.castInput(e, s), t = this.castInput(t, s), e = this.removeEmpty(this.tokenize(e, s)), t = this.removeEmpty(this.tokenize(t, s));
        var l = t.length,
            c = e.length,
            f = 1,
            m = l + c;
        s.maxEditLength != null && (m = Math.min(m, s.maxEditLength));
        var x = (o = s.timeout) !== null && o !== void 0 ? o : 1 / 0,
            g = Date.now() + x,
            d = [{
                oldPos: -1,
                lastComponent: void 0
            }],
            p = this.extractCommon(d[0], t, e, 0, s);
        if (d[0].oldPos + 1 >= c && p + 1 >= l) return u(X(i, d[0].lastComponent, t, e, i.useLongestToken));
        var D = -1 / 0,
            T = 1 / 0;

        function w() {
            for (var v = Math.max(D, -f); v <= Math.min(T, f); v += 2) {
                var C = void 0,
                    L = d[v - 1],
                    E = d[v + 1];
                L && (d[v - 1] = void 0);
                var k = !1;
                if (E) {
                    var J = E.oldPos - v;
                    k = E && 0 <= J && J < l
                }
                var G = L && L.oldPos + 1 < c;
                if (!k && !G) {
                    d[v] = void 0;
                    continue
                }
                if (!G || k && L.oldPos < E.oldPos ? C = i.addToPath(E, !0, !1, 0, s) : C = i.addToPath(L, !1, !0, 1, s), p = i.extractCommon(C, t, e, v, s), C.oldPos + 1 >= c && p + 1 >= l) return u(X(i, C.lastComponent, t, e, i.useLongestToken));
                d[v] = C, C.oldPos + 1 >= c && (T = Math.min(T, v - 1)), p + 1 >= l && (D = Math.max(D, v + 1))
            }
            f++
        }
        if (r)(function v() {
            setTimeout(function() {
                if (f > m || Date.now() > g) return r();
                w() || v()
            }, 0)
        })();
        else
            for (; f <= m && Date.now() <= g;) {
                var I = w();
                if (I) return I
            }
    },
    addToPath: function(e, t, o, s, r) {
        var i = e.lastComponent;
        return i && !r.oneChangePerToken && i.added === t && i.removed === o ? {
            oldPos: e.oldPos + s,
            lastComponent: {
                count: i.count + 1,
                added: t,
                removed: o,
                previousComponent: i.previousComponent
            }
        } : {
            oldPos: e.oldPos + s,
            lastComponent: {
                count: 1,
                added: t,
                removed: o,
                previousComponent: i
            }
        }
    },
    extractCommon: function(e, t, o, s, r) {
        for (var i = t.length, u = o.length, l = e.oldPos, c = l - s, f = 0; c + 1 < i && l + 1 < u && this.equals(o[l + 1], t[c + 1], r);) c++, l++, f++, r.oneChangePerToken && (e.lastComponent = {
            count: 1,
            previousComponent: e.lastComponent,
            added: !1,
            removed: !1
        });
        return f && !r.oneChangePerToken && (e.lastComponent = {
            count: f,
            previousComponent: e.lastComponent,
            added: !1,
            removed: !1
        }), e.oldPos = l, c
    },
    equals: function(e, t, o) {
        return o.comparator ? o.comparator(e, t) : e === t || o.ignoreCase && e.toLowerCase() === t.toLowerCase()
    },
    removeEmpty: function(e) {
        for (var t = [], o = 0; o < e.length; o++) e[o] && t.push(e[o]);
        return t
    },
    castInput: function(e) {
        return e
    },
    tokenize: function(e) {
        return Array.from(e)
    },
    join: function(e) {
        return e.join("")
    },
    postProcess: function(e) {
        return e
    }
};

function X(n, e, t, o, s) {
    for (var r = [], i; e;) r.push(e), i = e.previousComponent, delete e.previousComponent, e = i;
    r.reverse();
    for (var u = 0, l = r.length, c = 0, f = 0; u < l; u++) {
        var m = r[u];
        if (m.removed) m.value = n.join(o.slice(f, f + m.count)), f += m.count;
        else {
            if (!m.added && s) {
                var x = t.slice(c, c + m.count);
                x = x.map(function(g, d) {
                    var p = o[f + d];
                    return p.length > g.length ? p : g
                }), m.value = n.join(x)
            } else m.value = n.join(t.slice(c, c + m.count));
            c += m.count, m.added || (f += m.count)
        }
    }
    return r
}

function V(n, e) {
    var t;
    for (t = 0; t < n.length && t < e.length; t++)
        if (n[t] != e[t]) return n.slice(0, t);
    return n.slice(0, t)
}

function Z(n, e) {
    var t;
    if (!n || !e || n[n.length - 1] != e[e.length - 1]) return "";
    for (t = 0; t < n.length && t < e.length; t++)
        if (n[n.length - (t + 1)] != e[e.length - (t + 1)]) return n.slice(-t);
    return n.slice(-t)
}

function z(n, e, t) {
    if (n.slice(0, e.length) != e) throw Error("string ".concat(JSON.stringify(n), " doesn't start with prefix ").concat(JSON.stringify(e), "; this is a bug"));
    return t + n.slice(e.length)
}

function $(n, e, t) {
    if (!e) return n + t;
    if (n.slice(-e.length) != e) throw Error("string ".concat(JSON.stringify(n), " doesn't end with suffix ").concat(JSON.stringify(e), "; this is a bug"));
    return n.slice(0, -e.length) + t
}

function N(n, e) {
    return z(n, e, "")
}

function A(n, e) {
    return $(n, e, "")
}

function W(n, e) {
    return e.slice(0, Ge(n, e))
}

function Ge(n, e) {
    var t = 0;
    n.length > e.length && (t = n.length - e.length);
    var o = e.length;
    n.length < e.length && (o = n.length);
    var s = Array(o),
        r = 0;
    s[0] = 0;
    for (var i = 1; i < o; i++) {
        for (e[i] == e[r] ? s[i] = s[r] : s[i] = r; r > 0 && e[i] != e[r];) r = s[r];
        e[i] == e[r] && r++
    }
    r = 0;
    for (var u = t; u < n.length; u++) {
        for (; r > 0 && n[u] != e[r];) r = s[r];
        n[u] == e[r] && r++
    }
    return r
}
var _ = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}",
    He = new RegExp("[".concat(_, "]+|\\s+|[^").concat(_, "]"), "ug"),
    b = new h;
b.equals = function(n, e, t) {
    return t.ignoreCase && (n = n.toLowerCase(), e = e.toLowerCase()), n.trim() === e.trim()
};
b.tokenize = function(n) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        t;
    if (e.intlSegmenter) {
        if (e.intlSegmenter.resolvedOptions().granularity != "word") throw new Error('The segmenter passed must have a granularity of "word"');
        t = Array.from(e.intlSegmenter.segment(n), function(r) {
            return r.segment
        })
    } else t = n.match(He) || [];
    var o = [],
        s = null;
    return t.forEach(function(r) {
        /\s/.test(r) ? s == null ? o.push(r) : o.push(o.pop() + r) : /\s/.test(s) ? o[o.length - 1] == s ? o.push(o.pop() + r) : o.push(s + r) : o.push(r), s = r
    }), o
};
b.join = function(n) {
    return n.map(function(e, t) {
        return t == 0 ? e : e.replace(/^\s+/, "")
    }).join("")
};
b.postProcess = function(n, e) {
    if (!n || e.oneChangePerToken) return n;
    var t = null,
        o = null,
        s = null;
    return n.forEach(function(r) {
        r.added ? o = r : r.removed ? s = r : ((o || s) && Y(t, s, o, r), t = r, o = null, s = null)
    }), (o || s) && Y(t, s, o, null), n
};

function Y(n, e, t, o) {
    if (e && t) {
        var s = e.value.match(/^\s*/)[0],
            r = e.value.match(/\s*$/)[0],
            i = t.value.match(/^\s*/)[0],
            u = t.value.match(/\s*$/)[0];
        if (n) {
            var l = V(s, i);
            n.value = $(n.value, i, l), e.value = N(e.value, l), t.value = N(t.value, l)
        }
        if (o) {
            var c = Z(r, u);
            o.value = z(o.value, u, c), e.value = A(e.value, c), t.value = A(t.value, c)
        }
    } else if (t) n && (t.value = t.value.replace(/^\s*/, "")), o && (o.value = o.value.replace(/^\s*/, ""));
    else if (n && o) {
        var f = o.value.match(/^\s*/)[0],
            m = e.value.match(/^\s*/)[0],
            x = e.value.match(/\s*$/)[0],
            g = V(f, m);
        e.value = N(e.value, g);
        var d = Z(N(f, g), x);
        e.value = A(e.value, d), o.value = z(o.value, f, d), n.value = $(n.value, f, f.slice(0, f.length - d.length))
    } else if (o) {
        var p = o.value.match(/^\s*/)[0],
            D = e.value.match(/\s*$/)[0],
            T = W(D, p);
        e.value = A(e.value, T)
    } else if (n) {
        var w = n.value.match(/\s*$/)[0],
            I = e.value.match(/^\s*/)[0],
            v = W(w, I);
        e.value = N(e.value, v)
    }
}
var Ue = new h;
Ue.tokenize = function(n) {
    var e = new RegExp("(\\r?\\n)|[".concat(_, "]+|[^\\S\\n\\r]+|[^").concat(_, "]"), "ug");
    return n.match(e) || []
};
var j = new h;
j.tokenize = function(n, e) {
    e.stripTrailingCr && (n = n.replace(/\r\n/g, `
`));
    var t = [],
        o = n.split(/(\n|\r\n)/);
    o[o.length - 1] || o.pop();
    for (var s = 0; s < o.length; s++) {
        var r = o[s];
        s % 2 && !e.newlineIsToken ? t[t.length - 1] += r : t.push(r)
    }
    return t
};
j.equals = function(n, e, t) {
    return t.ignoreWhitespace ? ((!t.newlineIsToken || !n.includes(`
`)) && (n = n.trim()), (!t.newlineIsToken || !e.includes(`
`)) && (e = e.trim())) : t.ignoreNewlineAtEof && !t.newlineIsToken && (n.endsWith(`
`) && (n = n.slice(0, -1)), e.endsWith(`
`) && (e = e.slice(0, -1))), h.prototype.equals.call(this, n, e, t)
};

function Xe(n, e, t) {
    return j.diff(n, e, t)
}
var Ve = new h;
Ve.tokenize = function(n) {
    return n.split(/(\S.+?[.!?])(?=\s+|$)/)
};
var Ze = new h;
Ze.tokenize = function(n) {
    return n.split(/([{}:;,]|\s+)/)
};

function B(n) {
    "@babel/helpers - typeof";
    return B = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e
    } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, B(n)
}
var O = new h;
O.useLongestToken = !0;
O.tokenize = j.tokenize;
O.castInput = function(n, e) {
    var t = e.undefinedReplacement,
        o = e.stringifyReplacer,
        s = o === void 0 ? function(r, i) {
            return typeof i > "u" ? t : i
        } : o;
    return typeof n == "string" ? n : JSON.stringify(P(n, null, null, s), s, "  ")
};
O.equals = function(n, e, t) {
    return h.prototype.equals.call(O, n.replace(/,([\r\n])/g, "$1"), e.replace(/,([\r\n])/g, "$1"), t)
};

function P(n, e, t, o, s) {
    e = e || [], t = t || [], o && (n = o(s, n));
    var r;
    for (r = 0; r < e.length; r += 1)
        if (e[r] === n) return t[r];
    var i;
    if (Object.prototype.toString.call(n) === "[object Array]") {
        for (e.push(n), i = new Array(n.length), t.push(i), r = 0; r < n.length; r += 1) i[r] = P(n[r], e, t, o, s);
        return e.pop(), t.pop(), i
    }
    if (n && n.toJSON && (n = n.toJSON()), B(n) === "object" && n !== null) {
        e.push(n), i = {}, t.push(i);
        var u = [],
            l;
        for (l in n) Object.prototype.hasOwnProperty.call(n, l) && u.push(l);
        for (u.sort(), r = 0; r < u.length; r += 1) l = u[r], i[l] = P(n[l], e, t, o, l);
        e.pop(), t.pop()
    } else i = n;
    return i
}
var F = new h;
F.tokenize = function(n) {
    return n.slice()
};
F.join = F.removeEmpty = function(n) {
    return n
};
var R = (n => (n.ADDED = "added", n.REMOVED = "removed", n.UNCHANGED = "unchanged", n))(R || {});

function q(n) {
    if (n === "") return 0;
    const e = n.split(`
`).length;
    return n.endsWith(`
`) ? e - 1 : e
}

function We(n, e) {
    return Xe(n, e, {
        newlineIsToken: !0
    }).map(o => ({
        count: o.count ? ? q(o.value),
        value: o.value,
        type: o.added ? "added" : o.removed ? "removed" : "unchanged"
    }))
}

function Ye(n) {
    let e = "";
    for (const {
            type: t,
            value: o
        } of n)(t === "added" || t === "unchanged") && (e += o);
    return e
}

function Qe(n, e) {
    const t = q(e),
        o = nn(n, t);
    return {
        changes: We(o, e),
        numLinesDiffed: t
    }
}

function Ke(n) {
    const e = [...n],
        t = [],
        o = [];
    for (; e.length > 0;) {
        const s = e[e.length - 1];
        if (s.type === R.REMOVED) e.pop(), s.type === R.REMOVED && t.unshift(s);
        else if (s.type === R.ADDED) e.pop(), o.unshift(s);
        else break
    }
    return {
        prunedChanges: [...e, ...o],
        prunedRemovedChanges: t
    }
}

function en(n, e) {
    const {
        changes: t,
        numLinesDiffed: o
    } = Qe(n, e), {
        prunedChanges: s,
        prunedRemovedChanges: r
    } = Ke(t), i = Ye(s), u = r.map(c => c.value).join(`
`), l = oe(n, o, "start");
    return {
        content: i + u + l,
        numLinesDiffed: q(i)
    }
}

function nn(n, e) {
    if (e <= 0) return "";
    let t = 0,
        o = n.length;
    for (let s = 0; s < n.length; s++)
        if (n[s] === `
` && (t++, t === e)) {
            o = s + 1;
            break
        }
    return n.substring(0, o)
}

function oe(n, e, t = "start") {
    if (e <= 0) return n;
    if (t === "start") {
        let i = 0;
        for (let u = 0; u < n.length; u++)
            if (n[u] === `
` && (i++, i === e)) return n.substring(u + 1);
        return ""
    }
    let o = 0,
        s = -1;
    const r = n.endsWith(`
`) ? e + 1 : e;
    for (let i = n.length - 1; i >= 0; i--)
        if (n[i] === `
` && (o++, o === r)) {
            s = i;
            break
        }
    return s === -1 ? "" : n.substring(0, s + 1)
}

function mn(n, e) {
    const t = n ? .type ? ? Ce.LOADING,
        o = n ? .content ? ? "",
        s = ye(n);
    if (!De(t) || e == null || !s || !Te(n)) return {
        content: o,
        currentlyStreamingLineIndex: null
    };
    const r = oe(o, 1, "end");
    if (r === "") return {
        content: e.content,
        currentlyStreamingLineIndex: 0
    };
    const i = en(e.content, r);
    return {
        content: i.content,
        currentlyStreamingLineIndex: i.numLinesDiffed
    }
}
export {
    cn as A, Be as C, qe as D, Oe as L, Se as M, Ne as O, fn as a, M as b, Fe as c, U as d, Pe as e, mn as g
};
//# sourceMappingURL=lgmptc5r8j0usf7s.js.map