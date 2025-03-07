const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/i2qe9noj7l12ytkt.js", "assets/mna1wiucqak6lqzp.js", "assets/mj4756esfnkkh4nm.js", "assets/fmcl2rn5zexg8ncx.js", "assets/mvwi8m8k06yj05fu.js", "assets/gbb37zztm10o4oo8.js", "assets/lwme42j7zzyr3q7j.js", "assets/conversation-small-fu0y35oi.css", "assets/kwedh7njyzfektql.js", "assets/ixqmo96wk3bini88.js", "assets/bkoo24lt18b0xvbg.js", "assets/hof9jjp8fzjywfd9.js", "assets/eo35ety32p3uqfmp.js", "assets/dvik6hl2h3xpsl43.js", "assets/iej0cupg2dqkmejt.js", "assets/m3b3wk7x0ejaq5a6.js", "assets/gitqh1f0vlrsxlc2.js", "assets/kvu0iifjmg07jk11.js", "assets/g01zogj1vrh90isg.js", "assets/h2mbwvf3xs6tkgoi.js", "assets/bcieds2s0jraaq45.js", "assets/fl41y0is7h6g0gxe.js", "assets/cxz91putlw7pmfk2.js", "assets/nmr5d79kmws977p2.js", "assets/jngfq2i6qblmembb.js", "assets/bk8slwxjkdlmxjxm.js", "assets/bnmzmikiaefr3trh.js", "assets/i754vzey6dub5533.js"]))) => i.map(i => d[i]);
import {
    w as Zl,
    x as Ql,
    y as Jl,
    z as Pa,
    r as u,
    A as Jh,
    R as ne,
    j as f,
    L as Xh,
    B as eg,
    C as tg,
    D as ng,
    E as rg,
    F as og,
    G as sg,
    H as ag,
    k as we,
    I as ig,
    J as Xe,
    S as cg,
    K as lg,
    N as ug,
    O as dg,
    P as fg,
    Q as pg,
    T as hg,
    U as gg,
    V as mg,
    W as _g,
    X as vg,
    Y as Cg,
    Z as yg,
    $ as bg,
    e as xo,
    a0 as mr,
    a1 as Xl,
    c as en,
    v as nt,
    g as Te,
    u as tn,
    q as Ro,
    d as eu,
    M as Sg,
    a2 as wg,
    a as tu,
    b as nu,
    a3 as Tg,
    a4 as Ag,
    a5 as Ig,
    a6 as kg,
    a7 as Eg,
    a8 as xg,
    a9 as Rg,
    aa as Og,
    ab as Mg,
    i as ru,
    ac as Lg,
    ad as Pg,
    ae as Dg,
    m as $g,
    l as ou,
    af as Xn,
    ag as su,
    ah as Ug,
    ai as Bg,
    aj as hn,
    o as Ng,
    h as au,
    ak as Fg,
    al as jg
} from "./mna1wiucqak6lqzp.js";

function Y9(e) {
    return function() {
        const n = {
            params: Zl(),
            loaderData: Ql(),
            actionData: Jl(),
            matches: Pa()
        };
        return u.createElement(e, n)
    }
}

function Z9(e) {
    return function() {
        const n = {
            params: Zl(),
            loaderData: Ql(),
            actionData: Jl(),
            error: Jh()
        };
        return u.createElement(e, n)
    }
}

function iu(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++) e[t] && (n = iu(e[t])) && (r && (r += " "), r += n);
        else
            for (t in e) e[t] && (r && (r += " "), r += t);
    return r
}

function Z() {
    for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = iu(e)) && (r && (r += " "), r += t);
    return r
}
const Q9 = Object.freeze(Object.defineProperty({
    __proto__: null,
    clsx: Z,
    default: Z
}, Symbol.toStringTag, {
    value: "Module"
}));
var cu = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    Hi = ne.createContext && ne.createContext(cu),
    Et = function() {
        return Et = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
                t = arguments[n];
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            return e
        }, Et.apply(this, arguments)
    },
    Gg = function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
        return n
    };

function lu(e) {
    return e && e.map(function(t, n) {
        return ne.createElement(t.tag, Et({
            key: n
        }, t.attr), lu(t.child))
    })
}

function uu(e) {
    return function(t) {
        return ne.createElement(Vg, Et({
            attr: Et({}, e.attr)
        }, t), lu(e.child))
    }
}

function Vg(e) {
    var t = function(n) {
        var r = e.attr,
            o = e.size,
            s = e.title,
            a = Gg(e, ["attr", "size", "title"]),
            i = o || n.size || "1em",
            c;
        return n.className && (c = n.className), e.className && (c = (c ? c + " " : "") + e.className), ne.createElement("svg", Et({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, a, {
            className: c,
            style: Et(Et({
                color: e.color || n.color
            }, n.style), e.style),
            height: i,
            width: i,
            xmlns: "http://www.w3.org/2000/svg"
        }), s && ne.createElement("title", null, s), e.children)
    };
    return Hi !== void 0 ? ne.createElement(Hi.Consumer, null, function(n) {
        return t(n)
    }) : t(cu)
}

function J9(e) {
    return uu({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "polyline",
            attr: {
                points: "20 12 20 22 4 22 4 12"
            }
        }, {
            tag: "rect",
            attr: {
                x: "2",
                y: "7",
                width: "20",
                height: "5"
            }
        }, {
            tag: "line",
            attr: {
                x1: "12",
                y1: "22",
                x2: "12",
                y2: "7"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"
            }
        }, {
            tag: "path",
            attr: {
                d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"
            }
        }]
    })(e)
}

function Hg(e) {
    return uu({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "line",
            attr: {
                x1: "12",
                y1: "2",
                x2: "12",
                y2: "6"
            }
        }, {
            tag: "line",
            attr: {
                x1: "12",
                y1: "18",
                x2: "12",
                y2: "22"
            }
        }, {
            tag: "line",
            attr: {
                x1: "4.93",
                y1: "4.93",
                x2: "7.76",
                y2: "7.76"
            }
        }, {
            tag: "line",
            attr: {
                x1: "16.24",
                y1: "16.24",
                x2: "19.07",
                y2: "19.07"
            }
        }, {
            tag: "line",
            attr: {
                x1: "2",
                y1: "12",
                x2: "6",
                y2: "12"
            }
        }, {
            tag: "line",
            attr: {
                x1: "18",
                y1: "12",
                x2: "22",
                y2: "12"
            }
        }, {
            tag: "line",
            attr: {
                x1: "4.93",
                y1: "19.07",
                x2: "7.76",
                y2: "16.24"
            }
        }, {
            tag: "line",
            attr: {
                x1: "16.24",
                y1: "7.76",
                x2: "19.07",
                y2: "4.93"
            }
        }]
    })(e)
}

function Wg() {
    for (var e = 0, t, n, r = ""; e < arguments.length;)(t = arguments[e++]) && (n = du(t)) && (r && (r += " "), r += n);
    return r
}

function du(e) {
    if (typeof e == "string") return e;
    for (var t, n = "", r = 0; r < e.length; r++) e[r] && (t = du(e[r])) && (n && (n += " "), n += t);
    return n
}

function Ys() {
    return Ys = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Ys.apply(this, arguments)
}

function zg(e) {
    if (e < 1) return {
        get: function() {},
        set: function() {}
    };
    var t = 0,
        n = new Map,
        r = new Map;

    function o(s, a) {
        n.set(s, a), t++, t > e && (t = 0, r = n, n = new Map)
    }
    return {
        get: function(a) {
            var i = n.get(a);
            if (i !== void 0) return i;
            if ((i = r.get(a)) !== void 0) return o(a, i), i
        },
        set: function(a, i) {
            n.has(a) ? n.set(a, i) : o(a, i)
        }
    }
}
var Da = "-";

function qg(e) {
    var t = Yg(e);

    function n(o) {
        var s = o.split(Da);
        return s[0] === "" && s.length !== 1 && s.shift(), fu(s, t) || Kg(o)
    }

    function r(o) {
        return e.conflictingClassGroups[o] || []
    }
    return {
        getClassGroupId: n,
        getConflictingClassGroupIds: r
    }
}

function fu(e, t) {
    var n;
    if (e.length === 0) return t.classGroupId;
    var r = e[0],
        o = t.nextPart.get(r),
        s = o ? fu(e.slice(1), o) : void 0;
    if (s) return s;
    if (t.validators.length !== 0) {
        var a = e.join(Da);
        return (n = t.validators.find(function(i) {
            var c = i.validator;
            return c(a)
        })) == null ? void 0 : n.classGroupId
    }
}
var Wi = /^\[(.+)\]$/;

function Kg(e) {
    if (Wi.test(e)) {
        var t = Wi.exec(e)[1],
            n = t ? .substring(0, t.indexOf(":"));
        if (n) return "arbitrary.." + n
    }
}

function Yg(e) {
    var t = e.theme,
        n = e.prefix,
        r = {
            nextPart: new Map,
            validators: []
        },
        o = Qg(Object.entries(e.classGroups), n);
    return o.forEach(function(s) {
        var a = s[0],
            i = s[1];
        Zs(i, r, a, t)
    }), r
}

function Zs(e, t, n, r) {
    e.forEach(function(o) {
        if (typeof o == "string") {
            var s = o === "" ? t : zi(t, o);
            s.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (Zg(o)) {
                Zs(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach(function(a) {
            var i = a[0],
                c = a[1];
            Zs(c, zi(t, i), n, r)
        })
    })
}

function zi(e, t) {
    var n = e;
    return t.split(Da).forEach(function(r) {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }), n = n.nextPart.get(r)
    }), n
}

function Zg(e) {
    return e.isThemeGetter
}

function Qg(e, t) {
    return t ? e.map(function(n) {
        var r = n[0],
            o = n[1],
            s = o.map(function(a) {
                return typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(function(i) {
                    var c = i[0],
                        l = i[1];
                    return [t + c, l]
                })) : a
            });
        return [r, s]
    }) : e
}
var pu = "!";

function Jg(e) {
    var t = e.separator || ":";
    return function(r) {
        for (var o = 0, s = [], a = 0, i = 0; i < r.length; i++) {
            var c = r[i];
            o === 0 && c === t[0] && (t.length === 1 || r.slice(i, i + t.length) === t) && (s.push(r.slice(a, i)), a = i + t.length), c === "[" ? o++ : c === "]" && o--
        }
        var l = s.length === 0 ? r : r.substring(a),
            d = l.startsWith(pu),
            p = d ? l.substring(1) : l;
        return {
            modifiers: s,
            hasImportantModifier: d,
            baseClassName: p
        }
    }
}

function Xg(e) {
    if (e.length <= 1) return e;
    var t = [],
        n = [];
    return e.forEach(function(r) {
        var o = r[0] === "[";
        o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r)
    }), t.push.apply(t, n.sort()), t
}

function em(e) {
    return Ys({
        cache: zg(e.cacheSize),
        splitModifiers: Jg(e)
    }, qg(e))
}
var tm = /\s+/;

function nm(e, t) {
    var n = t.splitModifiers,
        r = t.getClassGroupId,
        o = t.getConflictingClassGroupIds,
        s = new Set;
    return e.trim().split(tm).map(function(a) {
        var i = n(a),
            c = i.modifiers,
            l = i.hasImportantModifier,
            d = i.baseClassName,
            p = r(d);
        if (!p) return {
            isTailwindClass: !1,
            originalClassName: a
        };
        var h = Xg(c).join(":"),
            g = l ? h + pu : h;
        return {
            isTailwindClass: !0,
            modifierId: g,
            classGroupId: p,
            originalClassName: a
        }
    }).reverse().filter(function(a) {
        if (!a.isTailwindClass) return !0;
        var i = a.modifierId,
            c = a.classGroupId,
            l = i + c;
        return s.has(l) ? !1 : (s.add(l), o(c).forEach(function(d) {
            return s.add(i + d)
        }), !0)
    }).reverse().map(function(a) {
        return a.originalClassName
    }).join(" ")
}

function rm() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    var r, o, s, a = i;

    function i(l) {
        var d = t[0],
            p = t.slice(1),
            h = p.reduce(function(g, _) {
                return _(g)
            }, d());
        return r = em(h), o = r.cache.get, s = r.cache.set, a = c, c(l)
    }

    function c(l) {
        var d = o(l);
        if (d) return d;
        var p = nm(l, r);
        return s(l, p), p
    }
    return function() {
        return a(Wg.apply(null, arguments))
    }
}

function de(e) {
    var t = function(r) {
        return r[e] || []
    };
    return t.isThemeGetter = !0, t
}
var Dt = /^\[(.+)\]$/,
    om = /^\d+\/\d+$/,
    sm = new Set(["px", "full", "screen"]),
    am = /^(\d+)?(xs|sm|md|lg|xl)$/,
    im = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh)/,
    cm = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;

function Ye(e) {
    return !Number.isNaN(Number(e)) || sm.has(e) || om.test(e) || Gt(e)
}

function Gt(e) {
    var t, n = (t = Dt.exec(e)) == null ? void 0 : t[1];
    return n ? n.startsWith("length:") || im.test(n) : !1
}

function lm(e) {
    var t, n = (t = Dt.exec(e)) == null ? void 0 : t[1];
    return n ? n.startsWith("size:") : !1
}

function um(e) {
    var t, n = (t = Dt.exec(e)) == null ? void 0 : t[1];
    return n ? n.startsWith("position:") : !1
}

function dm(e) {
    var t, n = (t = Dt.exec(e)) == null ? void 0 : t[1];
    return n ? n.startsWith("url(") || n.startsWith("url:") : !1
}

function qi(e) {
    var t, n = (t = Dt.exec(e)) == null ? void 0 : t[1];
    return n ? !Number.isNaN(Number(n)) || n.startsWith("number:") : !1
}

function ke(e) {
    var t, n = (t = Dt.exec(e)) == null ? void 0 : t[1];
    return n ? Number.isInteger(Number(n)) : Number.isInteger(Number(e))
}

function Se(e) {
    return Dt.test(e)
}

function Zn() {
    return !0
}

function Tt(e) {
    return am.test(e)
}

function fm(e) {
    var t, n = (t = Dt.exec(e)) == null ? void 0 : t[1];
    return n ? cm.test(n) : !1
}

function pm() {
    var e = de("colors"),
        t = de("spacing"),
        n = de("blur"),
        r = de("brightness"),
        o = de("borderColor"),
        s = de("borderRadius"),
        a = de("borderSpacing"),
        i = de("borderWidth"),
        c = de("contrast"),
        l = de("grayscale"),
        d = de("hueRotate"),
        p = de("invert"),
        h = de("gap"),
        g = de("gradientColorStops"),
        _ = de("inset"),
        m = de("margin"),
        v = de("opacity"),
        C = de("padding"),
        y = de("saturate"),
        S = de("scale"),
        w = de("sepia"),
        T = de("skew"),
        O = de("space"),
        E = de("translate"),
        I = function() {
            return ["auto", "contain", "none"]
        },
        j = function() {
            return ["auto", "hidden", "clip", "visible", "scroll"]
        },
        F = function() {
            return ["auto", t]
        },
        z = function() {
            return ["", Ye]
        },
        q = function() {
            return ["auto", ke]
        },
        Q = function() {
            return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
        },
        B = function() {
            return ["solid", "dashed", "dotted", "double", "none"]
        },
        ie = function() {
            return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"]
        },
        G = function() {
            return ["start", "end", "center", "between", "around", "evenly"]
        },
        re = function() {
            return ["", "0", Se]
        },
        W = function() {
            return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
        };
    return {
        cacheSize: 500,
        theme: {
            colors: [Zn],
            spacing: [Ye],
            blur: ["none", "", Tt, Gt],
            brightness: [ke],
            borderColor: [e],
            borderRadius: ["none", "", "full", Tt, Gt],
            borderSpacing: [t],
            borderWidth: z(),
            contrast: [ke],
            grayscale: re(),
            hueRotate: [ke],
            invert: re(),
            gap: [t],
            gradientColorStops: [e],
            inset: F(),
            margin: F(),
            opacity: [ke],
            padding: [t],
            saturate: [ke],
            scale: [ke],
            sepia: re(),
            skew: [ke, Se],
            space: [t],
            translate: [t]
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", Se]
            }],
            container: ["container"],
            columns: [{
                columns: [Tt]
            }],
            "break-after": [{
                "break-after": W()
            }],
            "break-before": [{
                "break-before": W()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [].concat(Q(), [Se])
            }],
            overflow: [{
                overflow: j()
            }],
            "overflow-x": [{
                "overflow-x": j()
            }],
            "overflow-y": [{
                "overflow-y": j()
            }],
            overscroll: [{
                overscroll: I()
            }],
            "overscroll-x": [{
                "overscroll-x": I()
            }],
            "overscroll-y": [{
                "overscroll-y": I()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [_]
            }],
            "inset-x": [{
                "inset-x": [_]
            }],
            "inset-y": [{
                "inset-y": [_]
            }],
            top: [{
                top: [_]
            }],
            right: [{
                right: [_]
            }],
            bottom: [{
                bottom: [_]
            }],
            left: [{
                left: [_]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: [ke]
            }],
            basis: [{
                basis: [t]
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", Se]
            }],
            grow: [{
                grow: re()
            }],
            shrink: [{
                shrink: re()
            }],
            order: [{
                order: ["first", "last", "none", ke]
            }],
            "grid-cols": [{
                "grid-cols": [Zn]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: [ke]
                }]
            }],
            "col-start": [{
                "col-start": q()
            }],
            "col-end": [{
                "col-end": q()
            }],
            "grid-rows": [{
                "grid-rows": [Zn]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [ke]
                }]
            }],
            "row-start": [{
                "row-start": q()
            }],
            "row-end": [{
                "row-end": q()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", Se]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", Se]
            }],
            gap: [{
                gap: [h]
            }],
            "gap-x": [{
                "gap-x": [h]
            }],
            "gap-y": [{
                "gap-y": [h]
            }],
            "justify-content": [{
                justify: G()
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: [].concat(G(), ["baseline"])
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [].concat(G(), ["baseline", "stretch"])
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [C]
            }],
            px: [{
                px: [C]
            }],
            py: [{
                py: [C]
            }],
            pt: [{
                pt: [C]
            }],
            pr: [{
                pr: [C]
            }],
            pb: [{
                pb: [C]
            }],
            pl: [{
                pl: [C]
            }],
            m: [{
                m: [m]
            }],
            mx: [{
                mx: [m]
            }],
            my: [{
                my: [m]
            }],
            mt: [{
                mt: [m]
            }],
            mr: [{
                mr: [m]
            }],
            mb: [{
                mb: [m]
            }],
            ml: [{
                ml: [m]
            }],
            "space-x": [{
                "space-x": [O]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [O]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", t]
            }],
            "min-w": [{
                "min-w": ["min", "max", "fit", Ye]
            }],
            "max-w": [{
                "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
                    screen: [Tt]
                }, Tt, Gt]
            }],
            h: [{
                h: [t, "auto", "min", "max", "fit"]
            }],
            "min-h": [{
                "min-h": ["min", "max", "fit", Ye]
            }],
            "max-h": [{
                "max-h": [t, "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", Tt, Gt]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", qi]
            }],
            "font-family": [{
                font: [Zn]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Gt]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ye]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", Se]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [v]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [v]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [].concat(B(), ["wavy"])
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Ye]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Ye]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            indent: [{
                indent: [t]
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Gt]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            content: [{
                content: ["none", Se]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [v]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [].concat(Q(), [um])
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", lm]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, dm]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from": [{
                from: [g]
            }],
            "gradient-via": [{
                via: [g]
            }],
            "gradient-to": [{
                to: [g]
            }],
            rounded: [{
                rounded: [s]
            }],
            "rounded-t": [{
                "rounded-t": [s]
            }],
            "rounded-r": [{
                "rounded-r": [s]
            }],
            "rounded-b": [{
                "rounded-b": [s]
            }],
            "rounded-l": [{
                "rounded-l": [s]
            }],
            "rounded-tl": [{
                "rounded-tl": [s]
            }],
            "rounded-tr": [{
                "rounded-tr": [s]
            }],
            "rounded-br": [{
                "rounded-br": [s]
            }],
            "rounded-bl": [{
                "rounded-bl": [s]
            }],
            "border-w": [{
                border: [i]
            }],
            "border-w-x": [{
                "border-x": [i]
            }],
            "border-w-y": [{
                "border-y": [i]
            }],
            "border-w-t": [{
                "border-t": [i]
            }],
            "border-w-r": [{
                "border-r": [i]
            }],
            "border-w-b": [{
                "border-b": [i]
            }],
            "border-w-l": [{
                "border-l": [i]
            }],
            "border-opacity": [{
                "border-opacity": [v]
            }],
            "border-style": [{
                border: [].concat(B(), ["hidden"])
            }],
            "divide-x": [{
                "divide-x": [i]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [i]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [v]
            }],
            "divide-style": [{
                divide: B()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: [""].concat(B())
            }],
            "outline-offset": [{
                "outline-offset": [Ye]
            }],
            "outline-w": [{
                outline: [Ye]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: z()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [v]
            }],
            "ring-offset-w": [{
                "ring-offset": [Ye]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", Tt, fm]
            }],
            "shadow-color": [{
                shadow: [Zn]
            }],
            opacity: [{
                opacity: [v]
            }],
            "mix-blend": [{
                "mix-blend": ie()
            }],
            "bg-blend": [{
                "bg-blend": ie()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [c]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", Tt, Se]
            }],
            grayscale: [{
                grayscale: [l]
            }],
            "hue-rotate": [{
                "hue-rotate": [d]
            }],
            invert: [{
                invert: [p]
            }],
            saturate: [{
                saturate: [y]
            }],
            sepia: [{
                sepia: [w]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [c]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [l]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [d]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [p]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [v]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [y]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [w]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [a]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [a]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [a]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Se]
            }],
            duration: [{
                duration: [ke]
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", Se]
            }],
            delay: [{
                delay: [ke]
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", Se]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [S]
            }],
            "scale-x": [{
                "scale-x": [S]
            }],
            "scale-y": [{
                "scale-y": [S]
            }],
            rotate: [{
                rotate: [ke, Se]
            }],
            "translate-x": [{
                "translate-x": [E]
            }],
            "translate-y": [{
                "translate-y": [E]
            }],
            "skew-x": [{
                "skew-x": [T]
            }],
            "skew-y": [{
                "skew-y": [T]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Se]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: ["appearance-none"],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Se]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": [t]
            }],
            "scroll-mx": [{
                "scroll-mx": [t]
            }],
            "scroll-my": [{
                "scroll-my": [t]
            }],
            "scroll-mt": [{
                "scroll-mt": [t]
            }],
            "scroll-mr": [{
                "scroll-mr": [t]
            }],
            "scroll-mb": [{
                "scroll-mb": [t]
            }],
            "scroll-ml": [{
                "scroll-ml": [t]
            }],
            "scroll-p": [{
                "scroll-p": [t]
            }],
            "scroll-px": [{
                "scroll-px": [t]
            }],
            "scroll-py": [{
                "scroll-py": [t]
            }],
            "scroll-pt": [{
                "scroll-pt": [t]
            }],
            "scroll-pr": [{
                "scroll-pr": [t]
            }],
            "scroll-pb": [{
                "scroll-pb": [t]
            }],
            "scroll-pl": [{
                "scroll-pl": [t]
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "pinch-zoom", "manipulation", {
                    pan: ["x", "left", "right", "y", "up", "down"]
                }]
            }],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", Se]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [Ye, qi]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            "col-start-end": ["col-start", "col-end"],
            "row-start-end": ["row-start", "row-end"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            rounded: ["rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"]
        }
    }
}
var hm = rm(pm),
    gm = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"],
    mm = gm,
    hu = Symbol("isTwElement?"),
    _m = (e, t) => e.reduce((n, r, o) => n.concat(r || [], t[o] || []), []),
    vm = (e, t = "") => {
        let n = e.join(" ").trim().replace(/\n/g, " ").replace(/\s{2,}/g, " ").split(" ").filter(o => o !== ","),
            r = t ? t.split(" ") : [];
        return hm(...n.concat(r).filter(o => o !== " "))
    },
    Cm = ([e]) => e.charAt(0) !== "$",
    ps = e => e[hu] === !0,
    gu = e => (t, ...n) => {
        let r = (o = []) => {
            let s = ne.forwardRef((a, i) => {
                let {
                    $as: c = e,
                    style: l = {},
                    ...d
                } = a, p = ps(e) ? e : c, h = o ? o.reduce((_, m) => Object.assign(_, typeof m == "function" ? m(a) : m), {}) : {}, g = ps(p) ? d : Object.fromEntries(Object.entries(d).filter(Cm));
                return ne.createElement(p, { ...g,
                    style: { ...h,
                        ...l
                    },
                    ref: i,
                    className: vm(_m(t, n.map(_ => _({ ...d,
                        $as: c
                    }))), d.className),
                    ...ps(e) ? {
                        $as: c
                    } : {}
                })
            });
            return s[hu] = !0, typeof e != "string" ? s.displayName = e.displayName || e.name || "tw.Component" : s.displayName = "tw." + e, s.withStyle = a => r(o.concat(a)), s
        };
        return r()
    },
    ym = mm.reduce((e, t) => ({ ...e,
        [t]: gu(t)
    }), {}),
    bm = Object.assign(gu, ym),
    lt = bm;
const Sm = lt(Hg)
`animate-spin text-center`;

function Ki({
    className: e
}) {
    return f.jsx(Sm, {
        className: e
    })
}

function Oo({
    children: e,
    onClick: t,
    className: n,
    color: r = "primary",
    label: o,
    disabled: s = !1,
    visuallyDisabled: a = !1,
    loading: i = !1,
    size: c = "medium",
    fullWidth: l = !1,
    contentsFullWidth: d = !1,
    icon: p,
    style: h,
    ...g
}) {
    const _ = a || s || i,
        m = i || s,
        v = Z(_ && "opacity-50 hover:bg-inherit", m && "cursor-not-allowed", "btn relative", r === "primary" && "btn-primary", r === "primary-inverse" && "btn-primary-inverse", r === "green" && "btn-green", r === "secondary" && "btn-secondary", r === "danger" && "btn-danger", r === "danger-outline" && "btn-danger-outline", r === "blue" && "btn-blue", r === "shop-app" && "btn-shop-app", r === "ghost" && "btn-ghost", c === "xs" && "btn-xs", c === "small" && "btn-small", c === "large" && "btn-large", c === "giant" && "btn-giant", l && "w-full", n),
        C = p ? f.jsxs("div", {
            className: Z("flex w-full", "items-center justify-center", {
                "gap-2": c === "giant",
                "gap-1.5": c === "medium" || c === "large",
                "gap-1": c === "small" || c === "xs"
            }),
            children: [f.jsx(p, {
                "aria-label": "",
                className: Z(i && "hidden", c === "xs" && "icon-xs", c === "small" && "icon-sm", c === "medium" && "icon-sm", c === "large" && "icon-md", c === "giant" && "icon-md", c === "xl" && "icon-lg")
            }), e, i && f.jsx(Ki, {})]
        }) : f.jsxs("div", {
            className: Z("flex items-center justify-center", d && "w-full"),
            children: [e, i && f.jsx(Ki, {
                className: "ml-2"
            })]
        });
    switch (g.as) {
        case "link":
        case "a":
            {
                const {
                    openNewTab: y,
                    ...S
                } = g;
                return f.jsx(Xh, { ...S,
                    "aria-label": o,
                    to: g.to ? ? "/",
                    target: y === !0 ? "_blank" : "_self",
                    onClick: t,
                    className: v,
                    style: h,
                    children: C
                })
            }
        default:
            return f.jsx("button", {
                className: v,
                ref: g.ref,
                "aria-label": o,
                onClick: t,
                disabled: m,
                ...g,
                style: h,
                children: C
            })
    }
}
Oo.displayName = "Button";
var Mo = {},
    fe = (e => (e[e.Required = 0] = "Required", e[e.SendIfAvailable = 1] = "SendIfAvailable", e[e.Anonymous = 2] = "Anonymous", e))(fe || {});
const A = Mo.VITE_SHARED_API_URL ? ? "https://chatgpt.com/backend-api",
    Qs = Mo.VITE_SHARED_ANON_API_URL ? ? "https://chatgpt.com/backend-anon",
    hs = Mo.VITE_PUBLIC_API_URL ? ? "https://chatgpt.com/public-api",
    wm = Mo.VITE_INVITE_URL_PREFIX ? ? "https://chatgpt.com/public-api/referral",
    Tm = "v4-2023-04-27",
    X9 = {
        IT: "Italy",
        KR: "South Korea"
    },
    Am = {
        AD: "Andorra",
        AI: "Anguilla",
        AT: "Austria",
        AW: "Aruba",
        AX: "Åland Islands",
        BG: "Bulgaria",
        BL: "Saint Barthélemy",
        BM: "Bermuda",
        BQ: "Caribbean Netherlands",
        BV: "Bouvet Island",
        CH: "Switzerland",
        CW: "Curaçao",
        CY: "Cyprus",
        CZ: "Czech Republic",
        DE: "Germany",
        DK: "Denmark",
        EE: "Estonia",
        ES: "Spain",
        FI: "Finland",
        FK: "Falkland Islands",
        FO: "Faroe Islands",
        FR: "France",
        GB: "United Kingdom",
        GF: "French Guiana",
        GG: "Guernsey",
        GI: "Gibraltar",
        GL: "Greenland",
        GP: "Guadeloupe",
        GR: "Greece",
        GS: "South Georgia and the South Sandwich Islands",
        HR: "Croatia",
        HU: "Hungary",
        IC: "Canary Islands",
        IE: "Ireland",
        IM: "Isle of Man",
        IO: "British Indian Ocean Territory",
        IS: "Iceland",
        IT: "Italy",
        JE: "Jersey",
        KY: "Cayman Islands",
        LI: "Liechtenstein",
        LT: "Lithuania",
        LU: "Luxembourg",
        LV: "Latvia",
        MC: "Monaco",
        ME: "Montenegro",
        MF: "Saint Martin",
        MQ: "Martinique",
        MS: "Montserrat",
        MT: "Malta",
        NC: "New Caledonia",
        NL: "Netherlands",
        NO: "Norway",
        PF: "French Polynesia",
        PL: "Poland",
        PM: "Saint Pierre and Miquelon",
        PN: "Pitcairn",
        PT: "Portugal",
        RE: "Reunion",
        SE: "Sweden",
        SH: "Saint Helena, Ascension and Tristan da Cunha",
        SI: "Slovenia",
        SJ: "Svalbard and Jan Mayen",
        SK: "Slovakia",
        SM: "San Marino",
        SX: "Sint Maarten",
        TC: "Turks and Caicos Islands",
        TF: "French Southern Territories",
        VG: "British Virgin Islands",
        WF: "Wallis and Futuna",
        YT: "Mayotte",
        ZA: "South Africa",
        ID: "Indonesia",
        BE: "Belgium",
        IN: "India",
        RO: "Romania",
        CA: "Canada",
        SG: "Singapore"
    };
class Ve extends Error {
    constructor(t, n, r) {
        const o = typeof r.error == "string" && r.error || typeof r.detail == "string" && r.detail || r.detail ? .message || r.detail ? .description || r.detail ? .error ? .message || Em;
        super(o), this.url = t, this.status = n, this.json = r, this.detail = r.detail, this.jsonError = r.error
    }
    name = "RequestError";
    detail;
    jsonError;
    static createWithErrorMessage(t, n, r) {
        return new Ve(t, n === "client" ? 400 : 500, {
            error: r
        })
    }
    get code() {
        return this.detail ? .code ? ? this.jsonError ? .code ? ? this.jsonError ? .error ? .code ? ? this.detail ? .error ? .code
    }
    isClientError() {
        return this.status >= 400 && this.status < 500
    }
    isServerError() {
        return this.status >= 500
    }
}
class ht extends Error {
    name = "UserFileError";
    code;
    constructor(t, n) {
        super(t), this.code = n
    }
}
const Im = "If this issue persists please contact us through our help center at help.openai.com.",
    km = "If this issue persists please contact us through our help center at [help.openai.com](https://help.openai.com/).",
    Em = `Something went wrong. ${Im}`,
    e6 = `Something went wrong while generating the response. ${km}`;

function t6(e) {
    if (e instanceof Ve && typeof e.message == "string" && e.message) return e.message
}
var xm = (e => (e.HistoryDisabledConversationNotFound = "history_disabled_conversation_not_found", e.ModelCapExceeded = "model_cap_exceeded", e.MissingLastCompletion = "missing_last_completion", e))(xm || {});

function Rm(...e) {
    try {
        return new URL(...e)
    } catch {
        return null
    }
}
var Fe = eg(og, rg());
tg(ng(), "DD_RUM", Fe);
const $a = "chatgpt.com/ces",
    Ua = "https",
    Om = {},
    Mm = Om,
    mu = `${Ua}://${$a}`,
    Lm = {
        disableClientPersistence: !0,
        integrations: {
            "Segment.io": {
                apiHost: `${$a}/v1`,
                host: mu,
                protocol: Ua,
                deliveryStrategy: { ...Mm
                }
            }
        }
    },
    Pm = {
        writeKey: "oai",
        cdnURL: `${Ua}://${$a}`
    },
    Dm = ["Fetch is aborted", "Load failed", "Script error.", "Failed to execute 'insertBefore' on 'Node'", "ResizeObserver loop completed with undelivered notifications.", "Object Not Found Matching Id", "Object.hasOwn is not a function"],
    $m = 100,
    Yi = 1e3,
    Rr = [];

function Zi(e, t) {
    const n = e.findIndex(r => r <= t);
    return n === -1 ? e.length : n
}
const Um = e => {
        if (e.stack ? .includes("-extension://") || e.source === "console" || Dm.some(o => e ? .message ? .includes(o)) || e.type === "RequestError") return !0;
        const t = Date.now(),
            n = t - 1e3 * 60;
        if (Zi(Rr, n) >= $m) return !0;
        const r = t - 1e3 * 60 * 60 * 24;
        return Zi(Rr, r) >= Yi ? !0 : (Rr.unshift(t), Rr.splice(Yi), !1)
    },
    Qi = typeof window > "u" ? void 0 : window.DesktopHostGateway,
    ye = Qi ? .getVersion() === 1 ? Qi : void 0,
    Lo = ye !== void 0,
    _u = Lo || !1;

function Bm(e) {
    if (e === void 0) return;
    const t = /^ChatGPT\/([\d.]+) \(([^)]+)\) Electron\/([\d.]+) Chrome\/([\d.]+)$/,
        n = e.match(t);
    if (n) return n[1]
}

function or(e) {
    return /[?&]q=[^&#]+/.test(e) ? e.replace(/([?&]q=)[^&#]*/, "$1<redacted>") : e
}
class Nm {#
    e = !1;#
    t = new Set;#
    n = new Set;#
    r = new Map;
    initialize(t) {
        if (!this.#e) {
            {
                const n = Lo ? ye ? .getTelemetryConfig ? .() : void 0,
                    r = n !== void 0 ? n.datadogService : "chatgpt-web",
                    o = 1;
                Fe.init({
                    applicationId: "fd6e06b8-4825-4fbb-8db4-2a243f92c4bc",
                    clientToken: "pub1f79f8ac903a5872ae5f53026d20a77c",
                    site: "datadoghq.com",
                    service: r,
                    env: "prod",
                    version: "9f2258c640519bcc2ac5d4dfb5685ee6aaf9dfd7",
                    sessionSampleRate: o,
                    sessionReplaySampleRate: 0,
                    trackUserInteractions: !1,
                    trackResources: !0,
                    trackLongTasks: !0,
                    defaultPrivacyLevel: sg.MASK_USER_INPUT,
                    beforeSend: s => s.type === "error" && Um(s.error) ? !1 : (s.view.url = or(s.view.url), s.type === "resource" && (s.resource.url = or(s.resource.url)), s.type === "error" && s.error.resource && (s.error.resource.url = or(s.error.resource.url)), !0),
                    allowedTracingUrls: [{
                        match: s => {
                            const a = Rm(s);
                            if (a == null) return !1;
                            const {
                                hostname: i,
                                pathname: c
                            } = a;
                            return !(!["openai.com", "chatgpt.com"].some(d => i.endsWith(d)) || i === "ab.chatgpt.com" || c.startsWith("/ces/") || c.startsWith("/healthcheck"))
                        },
                        propagatorTypes: ["datadog"]
                    }],
                    traceSampleRate: o,
                    traceContextInjection: "sampled",
                    excludedActivityUrls: [/^https:\/\/ab\.chatgpt\.com\//, s => s.startsWith(mu), s => {
                        const a = [A, Qs],
                            i = [/^\/sentinel\//];
                        for (const c of a)
                            if (s.startsWith(c)) {
                                const l = s.slice(c.length);
                                return i.some(d => d.test(l))
                            }
                        return !1
                    }],
                    ...t
                }), Fe.setGlobalContextProperty("track", "stable"), n !== void 0 && Fe.setGlobalContextProperty("is_electron_desktop_app", !0)
            }
            this.#e = !0
        }
    }
    addAction(t, n) {
        this.#e || (console.error("Should not call addAction before initialize"), this.initialize()), Fe.addAction(t, n)
    }
    addError(t, n) {
        if (console.error(t, n), this.#e || (console.error("Should not call addError before initialize"), this.initialize()), t instanceof Ve) {
            this.addError("Unexpected addError call with RequestError", {
                error: t
            });
            return
        }
        const r = typeof t == "string" ? new Error(t) : t;
        r instanceof Error && Error.captureStackTrace ? .(r, this.addError), Fe.addError(r, n)
    }
    addTiming(t, n) {
        this.#r.set(t, n ? ? Date.now()), this.#e || (console.error("Should not call addTiming before initialize"), this.initialize()), Fe.addTiming(t, n)
    }
    addFirstTiming(t, n) {
        this.#t.has(t) || (this.#t.add(t), this.addTiming(t, n))
    }
    addDurationVital(t, n, r) {
        Fe.addDurationVital(t, {
            startTime: n,
            duration: r
        })
    }
    addFirstDurationVital(t, n, r) {
        this.#n.has(t) || (this.#n.add(t), this.addDurationVital(t, n, r))
    }
    getTimings() {
        return this.#r
    }
    setUser(t, n, r, o) {
        const s = {
            id: t.id,
            has_paid_plan: r ? .hasPaidSubscription,
            account_plan_user_role: r ? .accountUserRole,
            account_plan_name: r ? .subscriptionPlan,
            account_plan_type: r ? .planType,
            workspace_id: o
        };
        this.#e || (console.error("Should not call setUser before initialize"), this.initialize()), n.forEach(a => {
            Fe.addFeatureFlagEvaluation(a, !0)
        }), Fe.setUser(s)
    }
    addFeatureFlagEvaluation(t, n) {
        Fe.addFeatureFlagEvaluation(t, n)
    }
}
const M = new Nm;
var Ba = (e => (e.WINDOW_VISIBILITY_STATE_CHANGED = "WINDOW_VISIBILITY_STATE_CHANGED", e.WINDOW_FOCUS_CHANGED = "WINDOW_FOCUS_CHANGED", e))(Ba || {}),
    Rt = (e => (e.LOGIN_CHANGED = "LOGIN_CHANGED", e.LOGOUT = "LOGOUT", e.QUIT = "QUIT", e.SET_COMPANION_WINDOW_VISIBILITY = "SET_COMPANION_WINDOW_VISIBILITY", e.SET_WEB_RELEASE_PROPERTIES = "WEB_RELEASE_PROPERTIES", e.ERROR_THROWN = "ERROR_THROWN", e.ZOOM = "ZOOM", e.DESKTOP_SETTING_CHANGED = "DESKTOP_SETTING_CHANGED", e.HOTKEY_RECORDING_STATE = "HOTKEY_RECORDING_STATE", e.ADD_BREADCRUMB = "ADD_BREADCRUMB", e))(Rt || {}),
    Po = (e => (e.ZOOM_IN = "ZOOM_IN", e.ZOOM_OUT = "ZOOM_OUT", e.ZOOM_RESET = "ZOOM_RESET", e))(Po || {}),
    vu = (e => (e.MICROPHONE = "MICROPHONE", e))(vu || {});
const Fm = ({
        resetError: e,
        componentStack: t,
        error: n
    }) => (u.useEffect(() => {
        M.addError(n), ye ? .publish(Rt.ERROR_THROWN, {
            error: n
        })
    }, [n]), f.jsxs("div", {
        className: "flex h-full w-full flex-col items-center justify-center gap-4",
        children: [f.jsx("h2", {
            children: "Content failed to load"
        }), !1, f.jsx(Oo, {
            color: "secondary",
            onClick: e,
            children: "Try again"
        }), !1]
    })),
    jm = "webp",
    Gm = 1600,
    Vm = 900,
    Hm = "srgb",
    Wm = 4,
    zm = "uchar",
    qm = 72,
    Km = !1,
    Ym = !1,
    Zm = !0,
    Qm = "https://cdn.oaistatic.com/assets/chatgpt-share-og-u7j5uyao.webp",
    Jm = {
        format: jm,
        width: Gm,
        height: Vm,
        space: Hm,
        channels: Wm,
        depth: zm,
        density: qm,
        isProgressive: Km,
        hasProfile: Ym,
        hasAlpha: Zm,
        src: Qm
    },
    Xm = "webp",
    e_ = 180,
    t_ = 180,
    n_ = "srgb",
    r_ = 4,
    o_ = "uchar",
    s_ = 72,
    a_ = !1,
    i_ = !1,
    c_ = !0,
    l_ = "https://cdn.oaistatic.com/assets/favicon-180x180-od45eci6.webp",
    u_ = {
        format: Xm,
        width: e_,
        height: t_,
        space: n_,
        channels: r_,
        depth: o_,
        density: s_,
        isProgressive: a_,
        hasProfile: i_,
        hasAlpha: c_,
        src: l_
    },
    d_ = "https://cdn.oaistatic.com/assets/favicon-miwirzcw.ico",
    f_ = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='180'%20height='180'%20fill='none'%3e%3cstyle%3e%20:root%20{%20--primary-fill:%20%23000;%20--secondary-fill:%20%23fff;%20}%20@media%20(prefers-color-scheme:%20dark)%20{%20:root%20{%20--primary-fill:%20%23fff;%20--secondary-fill:%20%23000;%20}%20}%20%3c/style%3e%3cg%20clip-path='url(%23a)'%3e%3crect%20width='180'%20height='180'%20fill='var(--primary-fill)'%20rx='90'%20/%3e%3cg%20clip-path='url(%23b)'%3e%3cpath%20fill='var(--secondary-fill)'%20d='M75.91%2073.628V62.232c0-.96.36-1.68%201.199-2.16l22.912-13.194c3.119-1.8%206.838-2.639%2010.676-2.639%2014.394%200%2023.511%2011.157%2023.511%2023.032%200%20.839%200%201.799-.12%202.758l-23.752-13.914c-1.439-.84-2.879-.84-4.318%200L75.91%2073.627Zm53.499%2044.383v-27.23c0-1.68-.72-2.88-2.159-3.719L97.142%2069.55l9.836-5.638c.839-.48%201.559-.48%202.399%200l22.912%2013.195c6.598%203.839%2011.035%2011.995%2011.035%2019.912%200%209.116-5.397%2017.513-13.915%2020.992v.001Zm-60.577-23.99-9.836-5.758c-.84-.48-1.2-1.2-1.2-2.16v-26.39c0-12.834%209.837-22.55%2023.152-22.55%205.039%200%209.716%201.679%2013.676%204.678L70.993%2055.516c-1.44.84-2.16%202.039-2.16%203.719v34.787-.002Zm21.173%2012.234L75.91%2098.339V81.546l14.095-7.917%2014.094%207.917v16.793l-14.094%207.916Zm9.056%2036.467c-5.038%200-9.716-1.68-13.675-4.678l23.631-13.676c1.439-.839%202.159-2.038%202.159-3.718V85.863l9.956%205.757c.84.48%201.2%201.2%201.2%202.16v26.389c0%2012.835-9.957%2022.552-23.27%2022.552v.001Zm-28.43-26.75L47.72%20102.778c-6.599-3.84-11.036-11.996-11.036-19.913%200-9.236%205.518-17.513%2014.034-20.992v27.35c0%201.68.72%202.879%202.16%203.718l29.989%2017.393-9.837%205.638c-.84.48-1.56.48-2.399%200Zm-1.318%2019.673c-13.555%200-23.512-10.196-23.512-22.792%200-.959.12-1.919.24-2.879l23.63%2013.675c1.44.84%202.88.84%204.32%200l30.108-17.392v11.395c0%20.96-.361%201.68-1.2%202.16l-22.912%2013.194c-3.119%201.8-6.837%202.639-10.675%202.639Zm29.748%2014.274c14.515%200%2026.63-10.316%2029.39-23.991%2013.434-3.479%2022.071-16.074%2022.071-28.91%200-8.396-3.598-16.553-10.076-22.43.6-2.52.96-5.039.96-7.557%200-17.153-13.915-29.99-29.989-29.99-3.239%200-6.358.48-9.477%201.56-5.398-5.278-12.835-8.637-20.992-8.637-14.515%200-26.63%2010.316-29.39%2023.991-13.434%203.48-22.07%2016.074-22.07%2028.91%200%208.396%203.598%2016.553%2010.075%2022.431-.6%202.519-.96%205.038-.96%207.556%200%2017.154%2013.915%2029.989%2029.99%2029.989%203.238%200%206.357-.479%209.476-1.559%205.397%205.278%2012.835%208.637%2020.992%208.637Z'%20/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='var(--primary-fill)'%20d='M0%200h180v180H0z'%20/%3e%3c/clipPath%3e%3cclipPath%20id='b'%3e%3cpath%20fill='var(--primary-fill)'%20d='M29.487%2029.964h121.035v119.954H29.487z'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
var Na = {},
    Do = {};
Object.defineProperty(Do, "__esModule", {
    value: !0
});
Do.LocalOverrideAdapter = void 0;
const Me = ag,
    gs = "LocalOverride:Recognized";

function Ji() {
    return {
        gate: {},
        dynamicConfig: {},
        experiment: {},
        layer: {}
    }
}
class p_ {
    constructor() {
        this._overrides = Ji()
    }
    overrideGate(t, n) {
        this._overrides.gate[t] = n, this._overrides.gate[(0, Me._DJB2)(t)] = n
    }
    removeGateOverride(t) {
        delete this._overrides.gate[t], delete this._overrides.gate[(0, Me._DJB2)(t)]
    }
    getGateOverride(t, n) {
        var r;
        const o = (r = this._overrides.gate[t.name]) !== null && r !== void 0 ? r : this._overrides.gate[(0, Me._DJB2)(t.name)];
        return o == null ? null : Object.assign(Object.assign({}, t), {
            value: o,
            details: Object.assign(Object.assign({}, t.details), {
                reason: gs
            })
        })
    }
    overrideDynamicConfig(t, n) {
        this._overrides.dynamicConfig[t] = n, this._overrides.dynamicConfig[(0, Me._DJB2)(t)] = n
    }
    removeDynamicConfigOverride(t) {
        delete this._overrides.dynamicConfig[t], delete this._overrides.dynamicConfig[(0, Me._DJB2)(t)]
    }
    getDynamicConfigOverride(t, n) {
        return this._getConfigOverride(t, this._overrides.dynamicConfig)
    }
    overrideExperiment(t, n) {
        this._overrides.experiment[t] = n, this._overrides.experiment[(0, Me._DJB2)(t)] = n
    }
    removeExperimentOverride(t) {
        delete this._overrides.experiment[t], delete this._overrides.experiment[(0, Me._DJB2)(t)]
    }
    getExperimentOverride(t, n) {
        return this._getConfigOverride(t, this._overrides.experiment)
    }
    overrideLayer(t, n) {
        this._overrides.layer[t] = n, this._overrides.layer[(0, Me._DJB2)(t)] = n
    }
    removeLayerOverride(t) {
        delete this._overrides.layer[t], delete this._overrides.layer[(0, Me._DJB2)(t)]
    }
    getAllOverrides() {
        return JSON.parse(JSON.stringify(this._overrides))
    }
    removeAllOverrides() {
        this._overrides = Ji()
    }
    getLayerOverride(t, n) {
        var r;
        const o = (r = this._overrides.layer[t.name]) !== null && r !== void 0 ? r : this._overrides.layer[(0, Me._DJB2)(t.name)];
        return o == null ? null : Object.assign(Object.assign({}, t), {
            __value: o,
            get: (0, Me._makeTypedGet)(t.name, o),
            details: Object.assign(Object.assign({}, t.details), {
                reason: gs
            })
        })
    }
    _getConfigOverride(t, n) {
        var r;
        const o = (r = n[t.name]) !== null && r !== void 0 ? r : n[(0, Me._DJB2)(t.name)];
        return o == null ? null : Object.assign(Object.assign({}, t), {
            value: o,
            get: (0, Me._makeTypedGet)(t.name, o),
            details: Object.assign(Object.assign({}, t.details), {
                reason: gs
            })
        })
    }
}
Do.LocalOverrideAdapter = p_;
(function(e) {
    var t = we && we.__createBinding || (Object.create ? function(r, o, s, a) {
            a === void 0 && (a = s);
            var i = Object.getOwnPropertyDescriptor(o, s);
            (!i || ("get" in i ? !o.__esModule : i.writable || i.configurable)) && (i = {
                enumerable: !0,
                get: function() {
                    return o[s]
                }
            }), Object.defineProperty(r, a, i)
        } : function(r, o, s, a) {
            a === void 0 && (a = s), r[a] = o[s]
        }),
        n = we && we.__exportStar || function(r, o) {
            for (var s in r) s !== "default" && !Object.prototype.hasOwnProperty.call(o, s) && t(o, r, s)
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n(Do, e)
})(Na);
(function(e) {
    var t = we && we.__createBinding || (Object.create ? function(C, y, S, w) {
            w === void 0 && (w = S);
            var T = Object.getOwnPropertyDescriptor(y, S);
            (!T || ("get" in T ? !y.__esModule : T.writable || T.configurable)) && (T = {
                enumerable: !0,
                get: function() {
                    return y[S]
                }
            }), Object.defineProperty(C, w, T)
        } : function(C, y, S, w) {
            w === void 0 && (w = S), C[w] = y[S]
        }),
        n = we && we.__exportStar || function(C, y) {
            for (var S in C) S !== "default" && !Object.prototype.hasOwnProperty.call(y, S) && t(y, C, S)
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.useStatsigUser = e.useStatsigInternalClientFactoryBootstrap = e.useStatsigInternalClientFactoryAsync = e.useStatsigClient = e.useParameterStore = e.useLayer = e.useGateValue = e.useFeatureGate = e.useExperiment = e.useDynamicConfig = e.useClientBootstrapInit = e.useClientAsyncInit = e.StatsigProvider = e.StatsigContext = void 0;
    const r = cg;
    e.StatsigContext = r.default;
    const o = lg;
    Object.defineProperty(e, "StatsigProvider", {
        enumerable: !0,
        get: function() {
            return o.StatsigProvider
        }
    });
    const s = ug;
    Object.defineProperty(e, "useClientAsyncInit", {
        enumerable: !0,
        get: function() {
            return s.useClientAsyncInit
        }
    });
    const a = dg;
    Object.defineProperty(e, "useClientBootstrapInit", {
        enumerable: !0,
        get: function() {
            return a.useClientBootstrapInit
        }
    });
    const i = fg;
    e.useDynamicConfig = i.default;
    const c = pg;
    e.useExperiment = c.default;
    const l = hg;
    e.useFeatureGate = l.default;
    const d = gg;
    e.useGateValue = d.default;
    const p = mg;
    e.useLayer = p.default;
    const h = _g;
    e.useParameterStore = h.default;
    const g = vg;
    Object.defineProperty(e, "useStatsigClient", {
        enumerable: !0,
        get: function() {
            return g.useStatsigClient
        }
    });
    const _ = Cg;
    Object.defineProperty(e, "useStatsigInternalClientFactoryAsync", {
        enumerable: !0,
        get: function() {
            return _.useStatsigInternalClientFactoryAsync
        }
    });
    const m = yg;
    Object.defineProperty(e, "useStatsigInternalClientFactoryBootstrap", {
        enumerable: !0,
        get: function() {
            return m.useStatsigInternalClientFactoryBootstrap
        }
    });
    const v = bg;
    Object.defineProperty(e, "useStatsigUser", {
        enumerable: !0,
        get: function() {
            return v.useStatsigUser
        }
    }), n(ig, e), __STATSIG__ = Object.assign(Object.assign({}, __STATSIG__ != null ? __STATSIG__ : {}), {
        StatsigContext: r.default,
        StatsigProvider: o.StatsigProvider,
        useClientAsyncInit: s.useClientAsyncInit,
        useClientBootstrapInit: a.useClientBootstrapInit,
        useDynamicConfig: i.default,
        useExperiment: c.default,
        useFeatureGate: l.default,
        useGateValue: d.default,
        useLayer: p.default,
        useParameterStore: h.default,
        useStatsigClient: g.useStatsigClient,
        useStatsigInternalClientFactoryAsync: _.useStatsigInternalClientFactoryAsync,
        useStatsigInternalClientFactoryBootstrap: m.useStatsigInternalClientFactoryBootstrap,
        useStatsigUser: v.useStatsigUser
    })
})(Xe);
const h_ = "WebAnonymousCookieID",
    g_ = "DeviceId",
    Cu = "client-tnE5GCU2F2cTxRiMbvTczMDT1jpwIigZHsZSdqiy4u";
var Js = (e => (e.LoggedOut = "logged_out", e.LoggedIn = "logged_in", e))(Js || {});
let yu = "development";
yu = "production";
const bu = yu,
    Su = "client-e603C1J5XKDc1uGaxqjKesU5bmT1Pge1gCndOG5OdhH",
    m_ = u.createContext(void 0),
    __ = new Na.LocalOverrideAdapter;

function wu() {
    return Xe.StatsigClient.instance(Su)
}

function v_({
    children: e,
    statsigPayload: t,
    localMode_TEST_ONLY: n
}) {
    const r = Xe.useClientBootstrapInit(Su, t.user, JSON.stringify(t), {
        environment: {
            tier: bu
        },
        networkConfig: {
            api: "https://ab.chatgpt.com/v1",
            preventAllNetworkTraffic: n
        },
        loggingBufferMaxSize: 100,
        disableLogging: n,
        disableStorage: n,
        overrideAdapter: __
    });
    return f.jsx(Xe.StatsigProvider, {
        client: r,
        children: f.jsx(m_.Provider, {
            value: !0,
            children: e
        })
    })
}

function n6(e) {
    const {
        children: t,
        statsig: n,
        localMode_TEST_ONLY: r
    } = e;
    return n == null || n.payload == null ? f.jsx(f.Fragment, {
        children: t
    }) : f.jsx(v_, {
        statsigPayload: n.payload,
        localMode_TEST_ONLY: r,
        children: t
    })
}

function C_(e) {
    return {
        value: Xe.useStatsigClient().checkGate(e)
    }
}

function r6(e) {
    return {
        config: Xe.useStatsigClient().getDynamicConfig(e)
    }
}

function o6(e) {
    return {
        config: Xe.useStatsigClient().getExperiment(e)
    }
}

function y_(e) {
    return {
        layer: Xe.useStatsigClient().getLayer(e)
    }
}

function s6(e) {
    return {
        layer: Xe.useStatsigClient().getLayer(e, {
            disableExposureLog: !0
        })
    }
}

function b_(e) {
    return wu().checkGate(e)
}

function a6(e) {
    return wu().getLayer(e)
}
const i6 = [{
    name: "description",
    content: "ChatGPT helps you get answers, find inspiration and be more productive. It is free to use and easy to try. Just ask and ChatGPT can help with writing, learning, brainstorming and more."
}, {
    name: "keyword",
    content: "ai chat,ai,chap gpt,chat gbt,chat gpt 3,chat gpt login,chat gpt website,chat gpt,chat gtp,chat openai,chat,chatai,chatbot gpt,chatg,chatgpt login,chatgpt,gpt chat,open ai,openai chat,openai chatgpt,openai"
}, {
    property: "og:description",
    content: "A conversational AI system that listens, learns, and challenges"
}, {
    property: "og:title",
    content: "ChatGPT"
}, {
    property: "og:image",
    content: Jm.src
}, {
    property: "og:url",
    content: "https://chatgpt.com"
}];

function c6() {
    const {
        pathname: e
    } = xo(), t = !e.startsWith("/share");
    return f.jsxs(f.Fragment, {
        children: [f.jsx("link", {
            rel: "preconnect",
            href: "https://cdn.oaistatic.com"
        }), null, f.jsx("link", {
            rel: "preconnect",
            href: "https://ab.chatgpt.com"
        }), t && f.jsx("meta", {
            name: "robots",
            content: "index, follow"
        }), f.jsx("meta", {
            httpEquiv: "Content-Type",
            content: "text/html; charset=utf-8"
        }), f.jsx("meta", {
            name: "apple-itunes-app",
            content: "app-id=6448311069"
        })]
    })
}

function l6() {
    return f.jsxs(f.Fragment, {
        children: [f.jsx("link", {
            rel: "icon",
            href: d_,
            sizes: "32x32"
        }), f.jsx("link", {
            rel: "icon",
            href: f_,
            type: "image/svg+xml"
        }), f.jsx("link", {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: u_.src
        })]
    })
}
const Tu = () => {},
    S_ = () => Tu;

function Au(e) {
    return u.useSyncExternalStore(S_, e, Tu)
}

function Iu({
    children: e
}) {
    return Au(() => !0) ? f.jsx(f.Fragment, {
        children: e
    }) : null
}
const w_ = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='107'%20height='106'%20fill='none'%3e%3cg%20clip-path='url(%23a)'%3e%3cg%20filter='url(%23b)'%3e%3cpath%20fill='%23fff'%20d='M81.81%2053c0-15.464-12.535-28-28-28-15.463%200-28%2012.536-28%2028s12.537%2028%2028%2028c15.465%200%2028-12.536%2028-28Z'%20/%3e%3cpath%20stroke='%23000'%20stroke-linejoin='bevel'%20stroke-opacity='.1'%20d='M81.81%2053c0-15.464-12.535-28-28-28-15.463%200-28%2012.536-28%2028s12.537%2028%2028%2028c15.465%200%2028-12.536%2028-28Z'%20/%3e%3c/g%3e%3cpath%20fill='%23000'%20d='M49.287%2048.12v-3.905c0-.263.075-.45.337-.601l7.246-4.205c.977-.563%202.216-.826%203.417-.826%204.58%200%207.471%203.53%207.471%207.321%200%20.3%200%20.714-.075%201.051l-7.584-4.43c-.375-.225-.788-.263-1.239%200l-9.573%205.594ZM66.03%2061.972V53.3c0-.488-.187-.825-.638-1.088l-9.611-5.594%203.379-1.953a.717.717%200%200%201%20.675%200l7.284%204.205c2.065%201.202%203.492%203.83%203.492%206.345%200%202.966-1.802%205.707-4.58%206.758Zm-18.734-7.471-3.342-1.99c-.262-.15-.338-.338-.338-.6v-8.373c0-4.092%203.117-7.171%207.36-7.171a7.23%207.23%200%200%201%204.504%201.577l-7.546%204.392c-.45.263-.638.601-.638%201.09v11.075Zm6.533%203.754-4.543-2.553v-5.406l4.543-2.553%204.505%202.553v5.406l-4.505%202.553Zm2.815%2011.376a7.23%207.23%200%200%201-4.505-1.577l7.546-4.392c.45-.263.639-.601.639-1.09V51.499l3.379%201.99c.262.15.337.338.337.6v8.373c0%204.093-3.153%207.171-7.396%207.171Zm-8.86-8.297L40.5%2057.13c-2.065-1.202-3.491-3.83-3.491-6.345%200-3.004%201.84-5.707%204.618-6.758v8.71c0%20.488.187.826.638%201.09l9.574%205.556-3.38%201.952a.718.718%200%200%201-.675%200Zm-.45%206.082c-4.318%200-7.472-3.229-7.472-7.246%200-.375.038-.75.075-1.089l7.546%204.355c.451.263.826.263%201.277%200l9.574-5.556v3.904c0%20.263-.075.451-.338.601l-7.246%204.205c-.976.563-2.215.826-3.417.826Zm9.31%204.243c4.506%200%208.26-3.23%209.086-7.51%204.205-1.05%206.908-4.955%206.908-8.935%200-2.628-1.126-5.143-3.191-6.983.188-.788.338-1.614.338-2.403%200-5.294-4.318-9.273-9.274-9.273a9.197%209.197%200%200%200-3.003.525c-1.69-1.69-3.98-2.74-6.533-2.74-4.505%200-8.26%203.228-9.086%207.508-4.205%201.052-6.908%204.956-6.908%208.936%200%202.628%201.127%205.144%203.191%206.983-.187.789-.337%201.615-.337%202.403%200%205.294%204.317%209.274%209.273%209.274a9.2%209.2%200%200%200%203.004-.526c1.69%201.69%203.98%202.74%206.532%202.74Z'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M.81%200h106v106H.81z'%20/%3e%3c/clipPath%3e%3cfilter%20id='b'%20width='105'%20height='105'%20x='1.311'%20y='4.5'%20color-interpolation-filters='sRGB'%20filterUnits='userSpaceOnUse'%20%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'%20/%3e%3cfeColorMatrix%20in='SourceAlpha'%20result='hardAlpha'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20/%3e%3cfeOffset%20dy='4'%20/%3e%3cfeGaussianBlur%20stdDeviation='12'%20/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'%20/%3e%3cfeColorMatrix%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.06%200'%20/%3e%3cfeBlend%20in2='BackgroundImageFix'%20result='effect1_dropShadow_1235_2762'%20/%3e%3cfeBlend%20in='SourceGraphic'%20in2='effect1_dropShadow_1235_2762'%20result='shape'%20/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e";

function u6(e) {
    return e
}

function d6(e) {
    return e
}
var f6 = mr("formatDate");
mr("formatTime");
mr("formatNumber");
var p6 = mr("formatList");
mr("formatDisplayName");
Xl("formatDate");
Xl("formatTime");

function T_({
    children: e,
    className: t,
    style: n,
    ...r
}) {
    return f.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: t,
        ...r,
        style: n,
        children: e
    })
}
const h6 = ({
        className: e
    }) => f.jsx("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        className: e,
        xmlns: "http://www.w3.org/2000/svg",
        children: f.jsx("path", {
            d: "M15.75 12V5.99999C15.7497 5.73694 15.6803 5.4786 15.5487 5.25086C15.417 5.02312 15.2278 4.83401 15 4.70249L9.75 1.70249C9.52197 1.57084 9.26331 1.50153 9 1.50153C8.73669 1.50153 8.47803 1.57084 8.25 1.70249L3 4.70249C2.7722 4.83401 2.58299 5.02312 2.45135 5.25086C2.31971 5.4786 2.25027 5.73694 2.25 5.99999V12C2.25027 12.263 2.31971 12.5214 2.45135 12.7491C2.58299 12.9769 2.7722 13.166 3 13.2975L8.25 16.2975C8.47803 16.4291 8.73669 16.4985 9 16.4985C9.26331 16.4985 9.52197 16.4291 9.75 16.2975L15 13.2975C15.2278 13.166 15.417 12.9769 15.5487 12.7491C15.6803 12.5214 15.7497 12.263 15.75 12Z",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    }),
    A_ = "ChatGPT",
    I_ = ({
        className: e
    }) => f.jsxs("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: e,
        children: [f.jsx("text", {
            x: "-9999",
            y: "-9999",
            children: A_
        }), f.jsx("path", {
            d: "M9.20509 8.76511V6.50545C9.20509 6.31513 9.27649 6.17234 9.44293 6.0773L13.9861 3.46088C14.6046 3.10413 15.342 2.93769 16.103 2.93769C18.9573 2.93769 20.7651 5.14983 20.7651 7.50454C20.7651 7.67098 20.7651 7.86129 20.7412 8.05161L16.0316 5.2924C15.7462 5.12596 15.4607 5.12596 15.1753 5.2924L9.20509 8.76511ZM19.8135 17.5659V12.1664C19.8135 11.8333 19.6708 11.5955 19.3854 11.429L13.4152 7.95633L15.3656 6.83833C15.5321 6.74328 15.6749 6.74328 15.8413 6.83833L20.3845 9.45474C21.6928 10.216 22.5728 11.8333 22.5728 13.4031C22.5728 15.2108 21.5025 16.8758 19.8135 17.5657V17.5659ZM7.80173 12.8088L5.8513 11.6671C5.68486 11.5721 5.61346 11.4293 5.61346 11.239V6.00613C5.61346 3.46111 7.56389 1.53433 10.2042 1.53433C11.2033 1.53433 12.1307 1.86743 12.9159 2.46202L8.2301 5.17371C7.94475 5.34015 7.80195 5.57798 7.80195 5.91109V12.809L7.80173 12.8088ZM12 15.2349L9.20509 13.6651V10.3351L12 8.76534L14.7947 10.3351V13.6651L12 15.2349ZM13.7958 22.4659C12.7967 22.4659 11.8693 22.1328 11.0841 21.5382L15.7699 18.8265C16.0553 18.6601 16.198 18.4222 16.198 18.0891V11.1912L18.1723 12.3329C18.3388 12.4279 18.4102 12.5707 18.4102 12.761V17.9939C18.4102 20.5389 16.4359 22.4657 13.7958 22.4657V22.4659ZM8.15848 17.1617L3.61528 14.5452C2.30696 13.784 1.42701 12.1667 1.42701 10.5969C1.42701 8.76534 2.52115 7.12414 4.20987 6.43428V11.8574C4.20987 12.1905 4.35266 12.4284 4.63802 12.5948L10.5846 16.0436L8.63415 17.1617C8.46771 17.2567 8.32492 17.2567 8.15848 17.1617ZM7.897 21.0625C5.20919 21.0625 3.23488 19.0407 3.23488 16.5432C3.23488 16.3529 3.25875 16.1626 3.2824 15.9723L7.96817 18.6839C8.25352 18.8504 8.53911 18.8504 8.82446 18.6839L14.7947 15.2351V17.4948C14.7947 17.6851 14.7233 17.8279 14.5568 17.9229L10.0136 20.5393C9.39518 20.8961 8.6578 21.0625 7.89677 21.0625H7.897ZM13.7958 23.8929C16.6739 23.8929 19.0762 21.8474 19.6235 19.1357C22.2874 18.4459 24 15.9484 24 13.4034C24 11.7383 23.2865 10.121 22.002 8.95542C22.121 8.45588 22.1924 7.95633 22.1924 7.45702C22.1924 4.0557 19.4331 1.51045 16.2458 1.51045C15.6037 1.51045 14.9852 1.60549 14.3668 1.81968C13.2963 0.773071 11.8215 0.107086 10.2042 0.107086C7.32606 0.107086 4.92383 2.15256 4.37653 4.86425C1.7126 5.55411 0 8.05161 0 10.5966C0 12.2617 0.713506 13.879 1.99795 15.0446C1.87904 15.5441 1.80764 16.0436 1.80764 16.543C1.80764 19.9443 4.56685 22.4895 7.75421 22.4895C8.39632 22.4895 9.01478 22.3945 9.63324 22.1803C10.7035 23.2269 12.1783 23.8929 13.7958 23.8929Z",
            fill: "currentColor"
        })]
    });

function g6({
    className: e
}) {
    const t = en();
    return f.jsx("img", {
        src: w_,
        alt: t.formatMessage({
            id: "VJmCc9",
            defaultMessage: "ChatGPT logo"
        }),
        className: e
    })
}
const m6 = ({
        className: e
    }) => f.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1180 320",
        width: "118",
        height: "32",
        fill: "currentColor",
        className: e,
        children: f.jsx("path", {
            d: "M367.44 153.84c0 52.32 33.6 88.8 80.16 88.8s80.16-36.48 80.16-88.8-33.6-88.8-80.16-88.8-80.16 36.48-80.16 88.8zm129.6 0c0 37.44-20.4 61.68-49.44 61.68s-49.44-24.24-49.44-61.68 20.4-61.68 49.44-61.68 49.44 24.24 49.44 61.68zM614.27 242.64c35.28 0 55.44-29.76 55.44-65.52s-20.16-65.52-55.44-65.52c-16.32 0-28.32 6.48-36.24 15.84V114h-28.8v169.2h28.8v-56.4c7.92 9.36 19.92 15.84 36.24 15.84zm-36.96-69.12c0-23.76 13.44-36.72 31.2-36.72 20.88 0 32.16 16.32 32.16 40.32s-11.28 40.32-32.16 40.32c-17.76 0-31.2-13.2-31.2-36.48zM747.65 242.64c25.2 0 45.12-13.2 54-35.28L776.93 198c-3.84 12.96-15.12 20.16-29.28 20.16-18.48 0-31.44-13.2-33.6-34.8h88.32v-9.6c0-34.56-19.44-62.16-55.92-62.16s-60 28.56-60 65.52c0 38.88 25.2 65.52 61.2 65.52zm-1.44-106.8c18.24 0 26.88 12 27.12 25.92h-57.84c4.32-17.04 15.84-25.92 30.72-25.92zM823.98 240h28.8v-73.92c0-18 13.2-27.6 26.16-27.6 15.84 0 22.08 11.28 22.08 26.88V240h28.8v-83.04c0-27.12-15.84-45.36-42.24-45.36-16.32 0-27.6 7.44-34.8 15.84V114h-28.8zM1014.17 67.68 948.89 240h30.48l14.64-39.36h74.4l14.88 39.36h30.96l-65.28-172.32zm16.8 34.08 27.36 72h-54.24zM1163.69 68.18h-30.72V240.5h30.72zM297.06 130.97a79.712 79.712 0 0 0-6.85-65.48c-17.46-30.4-52.56-46.04-86.84-38.68A79.747 79.747 0 0 0 143.24 0C108.2-.08 77.11 22.48 66.33 55.82a79.754 79.754 0 0 0-53.31 38.67c-17.59 30.32-13.58 68.54 9.92 94.54a79.712 79.712 0 0 0 6.85 65.48c17.46 30.4 52.56 46.04 86.84 38.68a79.687 79.687 0 0 0 60.13 26.8c35.06.09 66.16-22.49 76.94-55.86a79.754 79.754 0 0 0 53.31-38.67c17.57-30.32 13.55-68.51-9.94-94.51zM176.78 299.08a59.77 59.77 0 0 1-38.39-13.88c.49-.26 1.34-.73 1.89-1.07l63.72-36.8a10.36 10.36 0 0 0 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zM47.94 244.05a59.71 59.71 0 0 1-7.15-40.18c.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83L129.87 266c-28.69 16.52-65.33 6.7-81.92-21.95zM31.17 104.96c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91L118.44 224c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94a59.94 59.94 0 0 1-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8a10.375 10.375 0 0 0-10.47 0l-77.79 44.92V92c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22a59.95 59.95 0 0 1 7.15 40.1zm-168.51 55.43-26.94-15.55a.943.943 0 0 1-.52-.74V80.86c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07L116 72.67a10.344 10.344 0 0 0-5.24 9.06l-.04 89.79zM125.35 140 160 119.99l34.65 20V180L160 200l-34.65-20z"
        })
    }),
    _6 = e => f.jsxs(T_, {
        viewBox: "0 0 36 36",
        fill: "none",
        ...e,
        children: [f.jsx("circle", {
            cx: "18",
            cy: "18",
            r: "18",
            fill: "#3c46ff"
        }), f.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "m7.358 14.641 5.056-5.055A2 2 0 0 1 13.828 9h8.343a2 2 0 0 1 1.414.586l5.056 5.055a2 2 0 0 1 .055 2.771l-9.226 9.996a2 2 0 0 1-2.94 0l-9.227-9.996a2 2 0 0 1 .055-2.77Zm6.86-1.939-.426 1.281a2.07 2.07 0 0 1-1.31 1.31l-1.28.426a.296.296 0 0 0 0 .561l1.28.428a2.07 2.07 0 0 1 1.31 1.309l.427 1.28c.09.27.471.27.56 0l.428-1.28a2.07 2.07 0 0 1 1.309-1.31l1.281-.427a.296.296 0 0 0 0-.56l-1.281-.428a2.07 2.07 0 0 1-1.309-1.309l-.427-1.28a.296.296 0 0 0-.561 0z",
            fill: "#fff"
        })]
    }),
    v6 = ({
        className: e
    }) => f.jsxs("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: e,
        children: [f.jsx("rect", {
            x: "2",
            y: "6",
            width: "5",
            height: "12",
            rx: "2",
            stroke: "currentColor",
            strokeWidth: "2"
        }), f.jsx("path", {
            d: "M2 12H1",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), f.jsx("path", {
            d: "M22 12H23",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), f.jsx("rect", {
            x: "17",
            y: "6",
            width: "5",
            height: "12",
            rx: "2",
            stroke: "currentColor",
            strokeWidth: "2"
        }), f.jsx("path", {
            d: "M7 12L12 12",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), f.jsx("path", {
            d: "M16 12H17",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }), f.jsx("path", {
            d: "M9 3L15 21",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })]
    }),
    C6 = ({
        className: e
    }) => f.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "14",
        fill: "none",
        className: e,
        children: f.jsx("path", {
            fill: "currentColor",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6.9 1.6 1.2 11a1.3 1.3 0 0 0 1.2 2h11.2a1.3 1.3 0 0 0 1.2-2L9 1.6a1.3 1.3 0 0 0-2.2 0Z"
        })
    }),
    no = ["light", "dark"],
    Fa = "(prefers-color-scheme: dark)",
    k_ = typeof window > "u",
    ja = u.createContext(void 0),
    E_ = {
        setTheme: e => {},
        themes: []
    },
    ku = () => {
        var e;
        return (e = u.useContext(ja)) !== null && e !== void 0 ? e : E_
    },
    y6 = e => u.useContext(ja) ? ne.createElement(u.Fragment, null, e.children) : ne.createElement(R_, e),
    x_ = ["light", "dark"],
    R_ = ({
        forcedTheme: e,
        disableTransitionOnChange: t = !1,
        enableSystem: n = !0,
        enableColorScheme: r = !0,
        storageKey: o = "theme",
        themes: s = x_,
        defaultTheme: a = n ? "system" : "light",
        attribute: i = "data-theme",
        value: c,
        children: l,
        nonce: d
    }) => {
        const [p, h] = u.useState(() => Xi(o, a)), [g, _] = u.useState(() => Xi(o)), m = c ? Object.values(c) : s, v = u.useCallback(w => {
            let T = w;
            if (!T) return;
            w === "system" && n && (T = ec());
            const O = c ? c[T] : T,
                E = t ? M_() : null,
                I = document.documentElement;
            if (i === "class" ? (I.classList.remove(...m), O && I.classList.add(O)) : O ? I.setAttribute(i, O) : I.removeAttribute(i), r) {
                const j = no.includes(a) ? a : null,
                    F = no.includes(T) ? T : j;
                I.style.colorScheme = F
            }
            E ? .()
        }, []), C = u.useCallback(w => {
            h(w);
            try {
                localStorage.setItem(o, w)
            } catch {}
        }, [e]), y = u.useCallback(w => {
            const T = ec(w);
            _(T), p === "system" && n && !e && v("system")
        }, [p, e]);
        u.useEffect(() => {
            const w = window.matchMedia(Fa);
            return w.addListener(y), y(w), () => w.removeListener(y)
        }, [y]), u.useEffect(() => {
            const w = T => {
                T.key === o && C(T.newValue || a)
            };
            return window.addEventListener("storage", w), () => window.removeEventListener("storage", w)
        }, [C]), u.useEffect(() => {
            v(e ? ? p)
        }, [e, p]);
        const S = u.useMemo(() => ({
            theme: p,
            setTheme: C,
            forcedTheme: e,
            resolvedTheme: p === "system" ? g : p,
            themes: n ? [...s, "system"] : s,
            systemTheme: n ? g : void 0
        }), [p, C, e, g, n, s]);
        return ne.createElement(ja.Provider, {
            value: S
        }, ne.createElement(O_, {
            forcedTheme: e,
            disableTransitionOnChange: t,
            enableSystem: n,
            enableColorScheme: r,
            storageKey: o,
            themes: s,
            defaultTheme: a,
            attribute: i,
            value: c,
            children: l,
            attrs: m,
            nonce: d
        }), l)
    },
    O_ = u.memo(({
        forcedTheme: e,
        storageKey: t,
        attribute: n,
        enableSystem: r,
        enableColorScheme: o,
        defaultTheme: s,
        value: a,
        attrs: i,
        nonce: c
    }) => {
        const l = s === "system",
            d = n === "class" ? `var d=document.documentElement,c=d.classList;c.remove(${i.map(_=>`'${_}'`).join(",")});` : `var d=document.documentElement,n='${n}',s='setAttribute';`,
            p = o ? no.includes(s) && s ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "",
            h = (_, m = !1, v = !0) => {
                const C = a ? a[_] : _,
                    y = m ? _ + "|| ''" : `'${C}'`;
                let S = "";
                return o && v && !m && no.includes(_) && (S += `d.style.colorScheme = '${_}';`), n === "class" ? S += m || C ? `c.add(${y})` : "null" : C && (S += `d[s](n,${y})`), S
            },
            g = e ? `!function(){${d}${h(e)}}()` : r ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${l})){var t='${Fa}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${a?`var x=${JSON.stringify(a)};`:""}${h(a?"x[e]":"e",!0)}}${l?"":"else{"+h(s,!1,!1)+"}"}${p}}catch(e){}}()` : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${a?`var x=${JSON.stringify(a)};`:""}${h(a?"x[e]":"e",!0)}}else{${h(s,!1,!1)};}${p}}catch(t){}}();`;
        return ne.createElement("script", {
            nonce: c,
            dangerouslySetInnerHTML: {
                __html: g
            }
        })
    }, () => !0),
    Xi = (e, t) => {
        if (k_) return;
        let n;
        try {
            n = localStorage.getItem(e) || void 0
        } catch {}
        return n || t
    },
    M_ = () => {
        const e = document.createElement("style");
        return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(e), () => {
            window.getComputedStyle(document.body), setTimeout(() => {
                document.head.removeChild(e)
            }, 1)
        }
    },
    ec = e => (e || (e = window.matchMedia(Fa)), e.matches ? "dark" : "light");

function Eu(e) {
    return e === "system" || xu(e)
}

function xu(e) {
    return e === "dark" || e === "light"
}

function L_(e) {
    if (!Eu(e)) throw new Error(`Unexpected theme ${e}`)
}

function b6() {
    const {
        theme: e,
        setTheme: t
    } = ku();

    function n(r) {
        L_(r), r !== e && t(r)
    }
    return [Eu(e) ? e : "system", n]
}

function P_() {
    const e = ku().resolvedTheme;
    if (xu(e)) return e
}

function D_() {
    return P_() === "dark"
}

function $_() {
    const e = u.useRef([]),
        t = u.useRef((n, r) => {
            const o = setTimeout(n, r);
            return e.current.push(o), o
        });
    return u.useEffect(() => {
        const n = e.current;
        return () => {
            n.forEach(r => {
                clearTimeout(r)
            })
        }
    }, []), t.current
}

function U_(e) {
    const {
        speed: t = 100,
        value: n = "",
        typing: r,
        onTyped: o,
        initTyped: s,
        chunk: a
    } = e, [i, c] = u.useState(0), l = u.useRef(void 0), d = $_(), p = D_();

    function h(g, _, m) {
        l.current = d(function() {
            g >= _.length || (c(g + m), o ? .(), h(g + m, _, m))
        }, t)
    }
    return u.useEffect(() => (c(s ? n.length : 0), r && h(0, n, a ? 4 : 1), () => {
        clearTimeout(l.current)
    }), [r, n]), f.jsxs(f.Fragment, {
        children: [f.jsx("span", {
            className: Z("whitespace-pre-wrap", i < n.length && "result-streaming no-flow", p ? "dark" : "light"),
            children: f.jsx("span", {
                children: n.slice(0, i)
            })
        }), f.jsx("span", {
            className: "whitespace-pre-wrap text-transparent",
            children: n.slice(i)
        })]
    })
}
class B_ extends TypeError {
    constructor(t, n) {
        let r;
        const {
            message: o,
            explanation: s,
            ...a
        } = t, {
            path: i
        } = t, c = i.length === 0 ? o : `At path: ${i.join(".")} -- ${o}`;
        super(s ? ? c), s != null && (this.cause = c), Object.assign(this, a), this.name = this.constructor.name, this.failures = () => r ? ? (r = [t, ...n()])
    }
}

function N_(e) {
    return $o(e) && typeof e[Symbol.iterator] == "function"
}

function $o(e) {
    return typeof e == "object" && e != null
}

function tc(e) {
    return $o(e) && !Array.isArray(e)
}

function Ga(e) {
    return typeof e == "symbol" ? e.toString() : typeof e == "string" ? JSON.stringify(e) : `${e}`
}

function F_(e) {
    const {
        done: t,
        value: n
    } = e.next();
    return t ? void 0 : n
}

function j_(e, t, n, r) {
    if (e === !0) return;
    e === !1 ? e = {} : typeof e == "string" && (e = {
        message: e
    });
    const {
        path: o,
        branch: s
    } = t, {
        type: a
    } = n, {
        refinement: i,
        message: c = `Expected a value of type \`${a}\`${i?` with refinement \`${i}\``:""}, but received: \`${Ga(r)}\``
    } = e;
    return {
        value: r,
        type: a,
        refinement: i,
        key: o[o.length - 1],
        path: o,
        branch: s,
        ...e,
        message: c
    }
}

function* nc(e, t, n, r) {
    N_(e) || (e = [e]);
    for (const o of e) {
        const s = j_(o, t, n, r);
        s && (yield s)
    }
}

function* Ru(e, t, n = {}) {
    const {
        path: r = [],
        branch: o = [e],
        coerce: s = !1,
        mask: a = !1
    } = n, i = {
        path: r,
        branch: o,
        mask: a
    };
    s && (e = t.coercer(e, i));
    let c = "valid";
    for (const l of t.validator(e, i)) l.explanation = n.message, c = "not_valid", yield [l, void 0];
    for (let [l, d, p] of t.entries(e, i)) {
        const h = Ru(d, p, {
            path: l === void 0 ? r : [...r, l],
            branch: l === void 0 ? o : [...o, d],
            coerce: s,
            mask: a,
            message: n.message
        });
        for (const g of h) g[0] ? (c = g[0].refinement != null ? "not_refined" : "not_valid", yield [g[0], void 0]) : s && (d = g[1], l === void 0 ? e = d : e instanceof Map ? e.set(l, d) : e instanceof Set ? e.add(d) : $o(e) && (d !== void 0 || l in e) && (e[l] = d))
    }
    if (c !== "not_valid")
        for (const l of t.refiner(e, i)) l.explanation = n.message, c = "not_refined", yield [l, void 0];
    c === "valid" && (yield [void 0, e])
}
class Ou {
    constructor(t) {
        const {
            type: n,
            schema: r,
            validator: o,
            refiner: s,
            coercer: a = c => c,
            entries: i = function*() {}
        } = t;
        this.type = n, this.schema = r, this.entries = i, this.coercer = a, o ? this.validator = (c, l) => {
            const d = o(c, l);
            return nc(d, l, this, c)
        } : this.validator = () => [], s ? this.refiner = (c, l) => {
            const d = s(c, l);
            return nc(d, l, this, c)
        } : this.refiner = () => []
    }
    assert(t, n) {
        return G_(t, this, n)
    }
    create(t, n) {
        return V_(t, this, n)
    }
    is(t) {
        return W_(t, this)
    }
    mask(t, n) {
        return H_(t, this, n)
    }
    validate(t, n = {}) {
        return _r(t, this, n)
    }
}

function G_(e, t, n) {
    const r = _r(e, t, {
        message: n
    });
    if (r[0]) throw r[0]
}

function V_(e, t, n) {
    const r = _r(e, t, {
        coerce: !0,
        message: n
    });
    if (r[0]) throw r[0];
    return r[1]
}

function H_(e, t, n) {
    const r = _r(e, t, {
        coerce: !0,
        mask: !0,
        message: n
    });
    if (r[0]) throw r[0];
    return r[1]
}

function W_(e, t) {
    return !_r(e, t)[0]
}

function _r(e, t, n = {}) {
    const r = Ru(e, t, n),
        o = F_(r);
    return o[0] ? [new B_(o[0], function*() {
        for (const a of r) a[0] && (yield a[0])
    }), void 0] : [void 0, o[1]]
}

function Mu(e, t) {
    return new Ou({
        type: e,
        schema: null,
        validator: t
    })
}

function z_() {
    return Mu("never", () => !1)
}

function q_(e) {
    const t = e ? Object.keys(e) : [],
        n = z_();
    return new Ou({
        type: "object",
        schema: e || null,
        * entries(r) {
            if (e && $o(r)) {
                const o = new Set(Object.keys(r));
                for (const s of t) o.delete(s), yield [s, r[s], e[s]];
                for (const s of o) yield [s, r[s], n]
            }
        },
        validator(r) {
            return tc(r) || `Expected an object, but received: ${Ga(r)}`
        },
        coercer(r, o) {
            if (!tc(r)) return r;
            const s = { ...r
            };
            if (o.mask && e)
                for (const a in s) e[a] === void 0 && delete s[a];
            return s
        }
    })
}

function rc() {
    return Mu("string", e => typeof e == "string" || `Expected a string, but received: ${Ga(e)}`)
}
var Lu = (e => (e.Sunshine = "sunshine", e.TrainingAllowed = "training_allowed", e.ShowExpandedCodeView = "show_expanded_code_view", e.VoiceName = "voice_name", e.VoiceMainLanguage = "voice_main_language", e.MemoryInSearch = "memory_in_search", e.VoiceTrainingAllowed = "voice_training_allowed", e.VideoTrainingAllowed = "video_training_allowed", e.Moonshine = "moonshine", e))(Lu || {}),
    K_ = (e => (e.DEEP_RESEARCH = "deep_research", e.WORKSPACE_GPT_CUSTOM_ACTIONS = "workspace_gpt_custom_actions", e.APP_PAIRING = "app_pairing", e.BROWSING = "browsing", e.CANVAS = "canvas", e.CANVAS_CODE_EXECUTION = "canvas_code_execution", e.CANVAS_CODE_NETWORK_ACCESS = "canvas_code_network_access", e.DALLE = "dalle", e.MEMORY = "sunshine", e.CONTEXT_CONNECTOR_CONFLUENCE = "context_connector_confluence", e.CONTEXT_CONNECTOR_GDRIVE = "context_connector_gdrive", e.CONTEXT_CONNECTOR_JIRA = "context_connector_java", e.CONTEXT_CONNECTOR_NOTION = "context_connector_notion", e.CONTEXT_CONNECTOR_O365_PERSONAL = "context_connector_o365_personal", e.CONTEXT_CONNECTOR_O365_BUSINESS = "context_connector_o365_business", e.CONTEXT_CONNECTOR_SLACK = "context_connector_slack", e.CLIENT_APPLICATION_APPLE = "client_application_apple", e.CLIENT_APPLICATION_APPLE_MDM_REQUIRED = "client_application_apple_mdm_required", e.MEMORY_IN_SEARCH = "memory_in_search_2", e.VIDEO_SCREEN_SHARING = "video_screen_sharing", e))(K_ || {}),
    Y_ = (e => (e.FREE = "chatgptfreeplan", e.PLUS = "chatgptplusplan", e.PRO_FREE = "chatgptprofreeplan", e.PLUS_FREE = "chatgptplusfreeplan", e.ENTERPRISE = "chatgptenterpriseplan", e.TEAM = "chatgptteamplan", e.EDU = "chatgpteduplan", e.QUORUM = "chatgptquorumplan", e))(Y_ || {}),
    Je = (e => (e.FREE = "free", e.PLUS = "plus", e.PRO = "pro", e.TEAM = "team", e.ENTERPRISE = "enterprise", e.BUSINESS = "business", e.EDU = "edu", e.QUORUM = "quorum", e))(Je || {}),
    Z_ = (e => (e.ANYONE = "anyone", e.NO_ONE = "no_one", e.WORKSPACE_ONLY = "workspace_only", e))(Z_ || {});
const S6 = {
    ALLOW_ALL: "allow_all",
    ALLOW_SPECIFIC: "allow_specific",
    ALLOW_NONE: "allow_none"
};
var Q_ = (e => (e.GPT_SHARE_SETTINGS = "gpt_share_setting", e.CHAT_SHARE_SETTINGS = "chat_share_setting", e))(Q_ || {}),
    Xs = (e => (e.WORKSPACE = "workspace", e.THIRD_PARTY = "third_party", e.UNASSIGNED = "unassigned", e))(Xs || {}),
    J_ = (e => (e.CodeInterpreter = "code_interpreter", e.Multimodal = "multimodal", e.Retrieval = "retrieval", e.ContextConnector = "context_connector", e))(J_ || {}),
    X_ = (e => (e.FREE = "free", e.PLUS = "plus", e))(X_ || {}),
    e1 = (e => (e.TOOL_USE = "tool_use", e.IMAGE = "image", e.ATTACHMENT = "attachment", e.AUDIO = "audio", e.TARGETED_REPLY = "targeted_reply", e.CANVAS_SUPPORTED = "canvas_supported", e.TOOL_SEARCH = "tool_search", e.CUSTOM_INSTRUCTIONS = "custom_instructions", e.GIZMO_PROJECT = "gizmo_project", e))(e1 || {}),
    Pu = (e => (e[e.DEPRECATED_PENDING = 1] = "DEPRECATED_PENDING", e[e.DEPRECATED_FINISHED = 2] = "DEPRECATED_FINISHED", e[e.STREAMING = 3] = "STREAMING", e[e.UNREAD = 4] = "UNREAD", e))(Pu || {}),
    t1 = (e => (e[e.CLIENT = 1] = "CLIENT", e[e.SERVER = 2] = "SERVER", e))(t1 || {}),
    We = (e => (e.PERSONAL = "personal", e.WORKSPACE = "workspace", e))(We || {}),
    sr = (e => (e.OWNER = "account-owner", e.ADMIN = "account-admin", e.STANDARD = "standard-user", e))(sr || {}),
    n1 = (e => (e.VERIFIED = "verified", e.PENDING = "pending", e.EXPIRED = "expired", e))(n1 || {}),
    r1 = (e => (e.PERCENTAGE = "percentage", e.FIXED = "fixed", e))(r1 || {}),
    Du = (e => (e.AceUpload = "ace_upload", e.MyFiles = "my_files", e.Multimodal = "multimodal", e.ProfilePicture = "profile_picture", e.Gizmo = "agent", e.DalleAgent = "dalle_agent", e))(Du || {}),
    o1 = (e => (e.Initial = "initial", e.FileCreated = "file_created", e.FileUploaded = "file_uploaded", e.FileProcessed = "file_processed", e.RetrievalIndexCreated = "retrieval_index_created", e))(o1 || {}),
    er = (e => (e.Success = "success", e.Retry = "retry", e.Error = "error", e))(er || {}),
    $u = (e => (e.Success = "success", e.Failed = "failed", e.Processing = "processing", e.Skipped = "skipped", e))($u || {}),
    s1 = (e => (e.GDRIVE = "gdrive", e.O365 = "o365", e.O365_PERSONAL = "o365_personal", e.O365_BUSINESS = "o365_business", e.CONFLUENCE = "confluence", e.JIRA = "java", e.NOTION_OPEN_CONNECTOR = "notion_open_connector", e.SLACK_OPEN_CONNECTOR = "slack_open_connector", e))(s1 || {}),
    a1 = (e => (e.GDRIVE_SYNC_CONNECTOR = "gdrive_sync_connector", e.SLACK_SYNC_CONNECTOR = "slack_sync_connector", e))(a1 || {}),
    i1 = (e => (e.GCAL_CONNECTOR = "gcal_action_connector", e.GMAIL_CONNECTOR = "gmail_action_connector", e))(i1 || {}),
    c1 = (e => (e.PAGE = "page", e))(c1 || {}),
    l1 = (e => (e.PAGE = "page", e.DATABASE = "database", e))(l1 || {}),
    u1 = (e => (e.MESSAGE = "message", e))(u1 || {}),
    d1 = (e => (e.PYTHON = "python", e.RETRIEVAL = "retrieval", e.BROWSER = "browser", e.CANVAS = "canvas", e.FUNCTION = "function", e.DALLE = "dalle", e.API = "api", e.PARALLEL_BROWSE = "parallel_browse", e.MEMORY = "memory", e.CONTEXT_CONNECTOR = "context_connector", e.JIT_PLUGIN = "plugins_prototype", e))(d1 || {}),
    f1 = (e => (e.Gizmo = "gizmo", e.ShareableConversation = "share_link", e.Conversation = "conversation", e))(f1 || {}),
    p1 = (e => (e.UserName = "user_name", e.UserEmail = "user_email", e.SampleLongerInput = "sample_longer_input", e.SampleUrl = "sample_url_input", e.SampleIntInput = "sample_int_input", e))(p1 || {}),
    h1 = (e => (e.AUDIO_ISSUES = "audio_issues", e.RESPONSE_QUALITY = "response_quality", e.INTERRUPTIONS = "interruptions", e.TRANSCRIPTION_ISSUES = "transcription_issues", e.INAUDIBLE_ISSUES = "inaudible_issues", e.OTHER = "other", e))(h1 || {});
const w6 = {
    audio_issues: {
        id: "VoiceFeedback.AudioIssues",
        defaultMessage: "Audio issues"
    },
    response_quality: {
        id: "VoiceFeedback.ResponseQuality",
        defaultMessage: "I didn't like the responses"
    },
    interruptions: {
        id: "VoiceFeedback.Interruptions",
        defaultMessage: "It interrupted me"
    },
    transcription_issues: {
        id: "VoiceFeedback.TranscriptionIssues",
        defaultMessage: "It misheard me"
    },
    inaudible_issues: {
        id: "VoiceFeedback.InaudibleIssues",
        defaultMessage: "It couldn't hear me"
    },
    other: {
        id: "VoiceFeedback.Other",
        defaultMessage: "Other"
    }
};
var g1 = (e => (e.THUMBS_UP = "thumbs_up", e.THUMBS_DOWN = "thumbs_down", e))(g1 || {}),
    m1 = (e => (e.Auto = "auto", e.Arabic = "ar", e.Bosnian = "bs", e.Bulgarian = "bg", e.Catalan = "ca", e.Chinese = "zh", e.Croatian = "hr", e.Czech = "cs", e.Danish = "da", e.Dutch = "nl", e.English = "en", e.Finnish = "fi", e.French = "fr", e.Galician = "gl", e.German = "de", e.Greek = "el", e.Hindi = "hi", e.Hungarian = "hu", e.Indonesian = "id", e.Italian = "it", e.Japanese = "ja", e.Korean = "ko", e.Macedonian = "mk", e.Malay = "ms", e.Norwegian = "no", e.Polish = "pl", e.Portuguese = "pt", e.Romanian = "ro", e.Russian = "ru", e.Slovak = "sk", e.Spanish = "es", e.Tagalog = "tl", e.Tamil = "ta", e.Thai = "th", e.Turkish = "tr", e.Swedish = "sv", e.Ukrainian = "uk", e.Vietnamese = "vi", e))(m1 || {});
const T6 = ["new_chat", "switch_to_standard", "ok", "upgrade_to_plus", "upgrade_to_pro"],
    ms = "account_switch",
    _s = "error",
    A6 = q_({
        email: rc(),
        token: rc()
    });
var _1 = (e => (e.InvalidProof = "invalid_proof", e.ExternalAccountAlreadyLinked = "external_account_already_linked", e.InternalAccountAlreadyLinked = "account_already_linked", e.UnsupportedPlatform = "unsupported_platform", e.UnsupportedPlanType = "unsupported_plan_type", e.SessionExpired = "user_session_expired", e))(_1 || {}),
    tr = {},
    Va = {};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
Va.parse = y1;
Va.serialize = b1;
var v1 = decodeURIComponent,
    C1 = encodeURIComponent,
    Or = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

function y1(e, t) {
    if (typeof e != "string") throw new TypeError("argument str must be a string");
    for (var n = {}, r = t || {}, o = e.split(";"), s = r.decode || v1, a = 0; a < o.length; a++) {
        var i = o[a],
            c = i.indexOf("=");
        if (!(c < 0)) {
            var l = i.substring(0, c).trim();
            if (n[l] == null) {
                var d = i.substring(c + 1, i.length).trim();
                d[0] === '"' && (d = d.slice(1, -1)), n[l] = S1(d, s)
            }
        }
    }
    return n
}

function b1(e, t, n) {
    var r = n || {},
        o = r.encode || C1;
    if (typeof o != "function") throw new TypeError("option encode is invalid");
    if (!Or.test(e)) throw new TypeError("argument name is invalid");
    var s = o(t);
    if (s && !Or.test(s)) throw new TypeError("argument val is invalid");
    var a = e + "=" + s;
    if (r.maxAge != null) {
        var i = r.maxAge - 0;
        if (isNaN(i) || !isFinite(i)) throw new TypeError("option maxAge is invalid");
        a += "; Max-Age=" + Math.floor(i)
    }
    if (r.domain) {
        if (!Or.test(r.domain)) throw new TypeError("option domain is invalid");
        a += "; Domain=" + r.domain
    }
    if (r.path) {
        if (!Or.test(r.path)) throw new TypeError("option path is invalid");
        a += "; Path=" + r.path
    }
    if (r.expires) {
        if (typeof r.expires.toUTCString != "function") throw new TypeError("option expires is invalid");
        a += "; Expires=" + r.expires.toUTCString()
    }
    if (r.httpOnly && (a += "; HttpOnly"), r.secure && (a += "; Secure"), r.sameSite) {
        var c = typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite;
        switch (c) {
            case !0:
                a += "; SameSite=Strict";
                break;
            case "lax":
                a += "; SameSite=Lax";
                break;
            case "strict":
                a += "; SameSite=Strict";
                break;
            case "none":
                a += "; SameSite=None";
                break;
            default:
                throw new TypeError("option sameSite is invalid")
        }
    }
    return a
}

function S1(e, t) {
    try {
        return t(e)
    } catch {
        return e
    }
}(function(e) {
    var t = we && we.__assign || function() {
            return t = Object.assign || function(v) {
                for (var C, y = 1, S = arguments.length; y < S; y++) {
                    C = arguments[y];
                    for (var w in C) Object.prototype.hasOwnProperty.call(C, w) && (v[w] = C[w])
                }
                return v
            }, t.apply(this, arguments)
        },
        n = we && we.__rest || function(v, C) {
            var y = {};
            for (var S in v) Object.prototype.hasOwnProperty.call(v, S) && C.indexOf(S) < 0 && (y[S] = v[S]);
            if (v != null && typeof Object.getOwnPropertySymbols == "function")
                for (var w = 0, S = Object.getOwnPropertySymbols(v); w < S.length; w++) C.indexOf(S[w]) < 0 && Object.prototype.propertyIsEnumerable.call(v, S[w]) && (y[S[w]] = v[S[w]]);
            return y
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.checkCookies = e.hasCookie = e.removeCookies = e.deleteCookie = e.setCookies = e.setCookie = e.getCookie = e.getCookies = void 0;
    var r = Va,
        o = function() {
            return typeof window < "u"
        },
        s = function(v) {
            if (v === "true") return !0;
            if (v === "false") return !1;
            if (v !== "undefined") return v === "null" ? null : v
        },
        a = function(v) {
            v === void 0 && (v = "");
            try {
                var C = JSON.stringify(v);
                return /^[\{\[]/.test(C) ? C : v
            } catch {
                return v
            }
        },
        i = function(v) {
            return v && v.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
        },
        c = function(v) {
            var C;
            if (v && (C = v.req), !o()) return C && C.cookies ? C.cookies : C && C.headers && C.headers.cookie ? (0, r.parse)(C.headers.cookie) : {};
            for (var y = {}, S = document.cookie ? document.cookie.split("; ") : [], w = 0, T = S.length; w < T; w++) {
                var O = S[w].split("="),
                    E = O.slice(1).join("="),
                    I = O[0];
                y[I] = E
            }
            return y
        };
    e.getCookies = c;
    var l = function(v, C) {
        var y = (0, e.getCookies)(C),
            S = y[v];
        if (S !== void 0) return s(i(S))
    };
    e.getCookie = l;
    var d = function(v, C, y) {
        var S, w, T;
        if (y) {
            var O = y.req,
                E = y.res,
                I = n(y, ["req", "res"]);
            w = O, T = E, S = I
        }
        var j = (0, r.serialize)(v, a(C), t({
            path: "/"
        }, S));
        if (o()) document.cookie = j;
        else if (T && w) {
            var F = T.getHeader("Set-Cookie");
            if (Array.isArray(F) || (F = F ? [String(F)] : []), T.setHeader("Set-Cookie", F.concat(j)), w && w.cookies) {
                var z = w.cookies;
                C === "" ? delete z[v] : z[v] = a(C)
            }
            if (w && w.headers && w.headers.cookie) {
                var z = (0, r.parse)(w.headers.cookie);
                C === "" ? delete z[v] : z[v] = a(C), w.headers.cookie = Object.entries(z).reduce(function(Q, B) {
                    return Q.concat("".concat(B[0], "=").concat(B[1], ";"))
                }, "")
            }
        }
    };
    e.setCookie = d;
    var p = function(v, C, y) {
        return console.warn("[WARN]: setCookies was deprecated. It will be deleted in the new version. Use setCookie instead."), (0, e.setCookie)(v, C, y)
    };
    e.setCookies = p;
    var h = function(v, C) {
        return (0, e.setCookie)(v, "", t(t({}, C), {
            maxAge: -1
        }))
    };
    e.deleteCookie = h;
    var g = function(v, C) {
        return console.warn("[WARN]: removeCookies was deprecated. It will be deleted in the new version. Use deleteCookie instead."), (0, e.deleteCookie)(v, C)
    };
    e.removeCookies = g;
    var _ = function(v, C) {
        if (!v) return !1;
        var y = (0, e.getCookies)(C);
        return y.hasOwnProperty(v)
    };
    e.hasCookie = _;
    var m = function(v, C) {
        return console.warn("[WARN]: checkCookies was deprecated. It will be deleted in the new version. Use hasCookie instead."), (0, e.hasCookie)(v, C)
    };
    e.checkCookies = m
})(tr);
var K = (e => (e.AgeVerification = "oai-av-seen", e.AllowNonessential = "oai-allow-ne", e.CookieBannerShownPath = "oai-cbs", e.CookieBannerIgnored = "oai-cbi", e.DeviceId = "oai-did", e.IpOverride = "oai-ip-country", e.IsPaidUser = "_puid", e.ShowPaymentModal = "ui-show-payment-modal", e.TempEnableUnauthedCompliance = "temp-oai-compliance", e.Workspace = "_account", e.WorkspaceResidencyRegion = "_account_residency_region", e.LastLocation = "oai-ll", e.HideLoggedOutBanner = "hide-logged-out-banner", e.HasLoggedInBefore = "oai-hlib", e.PunchOutInfoToken = "oai-poit", e.PunchOutRequireLoginInfo = "oai-porli", e.SharedConversationId = "oai-sh-c-i", e.PunchOutRequireAnonToAuthedToken = "oai-po-ra2a", e.PunchOutAnonToAuthedEnabled = "oai-po-a2a", e.DowngradeAccountEnabled = "oai-downgrade-account-enabled", e.SegmentUserId = "ajs_user_id", e.SegmentUserTraits = "ajs_user_traits", e.HasClickedOnTryItFirstLink = "oai-tif-20240402", e.IntercomDeviceIdProd = "intercom-device-id-dgkjq2bp", e.IntercomDeviceIdDev = "intercom-device-id-izw1u7l7", e.DomainMigrationSourceCompleted = "oai-dm-src-c-240329", e.DomainMigrationTargetCompleted = "oai-dm-tgt-c-240329", e.SignupRedirectUrl = "signup_redirect_url", e.DesktopResultsTab = "sonic_desktop_results_tab", e.NavigationState = "oai-nav-state", e.PreferredLocale = "oai-locale", e.ThreadSidebarState = "oai-thread-sidebar", e.InternalSearchSettings = "oai-internal-search-settings", e.LastUsedModel = "oai-last-model", e.Gclid = "gclid", e.Fbclid = "fbclid", e))(K || {});
const w1 = ["gclid", "fbclid"],
    T1 = {
        sameSite: "lax"
    },
    A1 = ".chatgpt.com",
    Uu = window !== window.top,
    I1 = e => e && e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
class Bu {
    allowAnalyticsCookies = !1;
    constructor() {
        Uu || (this.synchronizeWithLocalStorage(), setInterval(() => this.synchronizeWithLocalStorage(), 6e4))
    }
    setAllowAnalyticsCookies_CLIENT_ONLY(t) {
        this.allowAnalyticsCookies = t, t === !1 && this.clearAnalyticsCookies()
    }
    clearAnalyticsCookies() {
        for (const t of w1) this.deleteCookie(t)
    }
    synchronizeWithLocalStorage() {
        [K.Workspace, K.WorkspaceResidencyRegion, K.DeviceId].forEach(n => {
            const r = tr.getCookie(n);
            r != null ? localStorage.setItem(n, JSON.stringify(r)) : localStorage.removeItem(n)
        })
    }
    _getCookie(t) {
        const n = tr.getCookies()[t];
        return n === void 0 ? void 0 : I1(n)
    }
    getCookie(t) {
        return this._getCookie(t)
    }
    getBooleanCookie(t) {
        const n = this._getCookie(t);
        return n == null ? void 0 : n === "true"
    }
    getAnalyticsCookie(t) {
        if (this.allowAnalyticsCookies) return this._getCookie(t);
        this.deleteCookie(t)
    }
    _setCookie(t, n, r) {
        tr.setCookie(t, n, { ...T1,
            ...r
        })
    }
    setCookie(t, n, r) {
        this._setCookie(t, n, r)
    }
    setBooleanCookie(t, n, r) {
        this._setCookie(t, n != null ? n ? "true" : "false" : void 0, r)
    }
    setAnalyticsCookie(t, n, r) {
        this.allowAnalyticsCookies ? this._setCookie(t, n, r) : this.deleteCookie(t)
    }
    deleteCookie(t) {
        const n = {};
        tr.deleteCookie(t, n)
    }
}
class k1 extends Bu {
    getCookie(t) {
        const n = localStorage.getItem(t);
        return typeof n == "string" ? JSON.parse(n) : n
    }
    setCookie() {}
    setAnalyticsCookie() {}
    deleteCookie() {}
    setAllowAnalyticsCookies_CLIENT_ONLY() {}
}
const X = Uu ? new k1 : new Bu,
    vs = "OAI-Device-Id",
    E1 = 60 * 60 * 24 * 30 * 12,
    x1 = () => nt(),
    R1 = e => typeof e == "string" && e.length > 0,
    O1 = e => {
        const t = {
            maxAge: E1
        };
        return e.endsWith("openai.com") ? t.domain = ".openai.com" : e.endsWith("chatgpt.com") && (t.domain = ".chatgpt.com"), t
    };

function M1() {
    return window.location.hostname ? ? void 0
}

function kt(e = M1()) {
    const t = X.getCookie(K.DeviceId);
    if (R1(t)) return t;
    const n = x1(),
        r = O1(e);
    return X.setCookie(K.DeviceId, n, r), n
}

function L1(e, t) {
    return e instanceof Error && Error.captureStackTrace ? .(e, t), e
}

function vr(e, t = "<unknown>") {
    if (e == null) throw L1(new Error(`${t}: unexpected nullish value: ${JSON.stringify(e)}`), vr);
    return e
}
let Cn;

function I6(e) {
    Cn || (Cn = e)
}

function Pn() {
    return Cn
}

function k6() {
    Cn != null && "redirect" in Cn && (window.location.href = Cn.redirect.destination)
}

function P1() {
    const t = Pa().find(n => n.id === "root");
    return vr(t, "No root route found").data.clientBootstrap
}

function D1(e) {
    let t = !1;
    window.addEventListener("pagehide", () => {
        t || (t = !0, e())
    }), window.addEventListener("beforeunload", () => {
        t || (t = !0, e())
    }), document.addEventListener("visibilitychange", () => {
        if (document.visibilityState == "hidden") {
            if (t) return;
            t = !0
        } else t = !1;
        t && e()
    })
}
const $1 = {
        BASE_URL: "https://cdn.oaistatic.com/",
        DEV: !1,
        MODE: "production",
        PROD: !0,
        SSR: !1,
        VITE_APP_URL: "https://chatgpt.com",
        VITE_CHAT_URL_PREFIX: "https://chatgpt.com/share/",
        VITE_CLIENT_EVENTS_SERVICE_URL: "chatgpt.com/ces",
        VITE_CONTINUE_SHARED_CHAT_URL_PREFIX: "https://chatgpt.com/share/",
        VITE_CONTINUE_SHARED_CHAT_URL_SUFFIX: "/continue",
        VITE_GIZMO_OAUTH_CALLBACK_URL: "https://chat.openai.com",
        VITE_INVITE_URL_PREFIX: "https://chatgpt.com/public-api/referral",
        VITE_LOGIN_WEB_URL: "https://auth.openai.com",
        VITE_OIW216Z_SERVICE_URL: "https://sora.com",
        VITE_PUBLIC_API_URL: "https://chatgpt.com/public-api",
        VITE_SHARED_ALT_API_URL: "https://chatgpt.com/backend-alt",
        VITE_SHARED_ANON_API_URL: "https://chatgpt.com/backend-anon",
        VITE_SHARED_API_URL: "https://chatgpt.com/backend-api",
        VITE_SNC_API_URL: "https://chatgpt.com/backend/se",
        VITE_STRIPE_PUBLISHABLE_KEY: "pk_live_51HOrSwC6h1nxGoI3lTAgRjYVrz4dU3fVOabyCcKR3pbEJguCVAlqCxdxCUvoRh1XWwRacViovU3kLKvpkjh7IqkW00iXQsjo3n",
        VITE_VOICE_FRONTDOOR_API_URL: "https://chatgpt.com/voice",
        VITE_VZA493Q_SERVICE_URL: "https://operator.chatgpt.com",
        VITE_WEB_PUSH_PUBLIC_KEY: "BElP4rBIs6aV_3Ic7Fl2rBw_a27isvPyMl_W4WwtlqsiehOYFYnwE21byf9bvFGEwWL8-k-zjZfGCG8HHKGW7OQ"
    },
    oc = e => {
        let t;
        const n = new Set,
            r = (d, p) => {
                const h = typeof d == "function" ? d(t) : d;
                if (!Object.is(h, t)) {
                    const g = t;
                    t = p ? ? (typeof h != "object" || h === null) ? h : Object.assign({}, t, h), n.forEach(_ => _(t, g))
                }
            },
            o = () => t,
            c = {
                setState: r,
                getState: o,
                getInitialState: () => l,
                subscribe: d => (n.add(d), () => n.delete(d)),
                destroy: () => {
                    ($1 ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), n.clear()
                }
            },
            l = t = e(r, o, c);
        return c
    },
    nn = e => e ? oc(e) : oc;
var Nu = {
        exports: {}
    },
    Fu = {},
    ju = {
        exports: {}
    },
    Gu = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wn = u;

function U1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var B1 = typeof Object.is == "function" ? Object.is : U1,
    N1 = wn.useState,
    F1 = wn.useEffect,
    j1 = wn.useLayoutEffect,
    G1 = wn.useDebugValue;

function V1(e, t) {
    var n = t(),
        r = N1({
            inst: {
                value: n,
                getSnapshot: t
            }
        }),
        o = r[0].inst,
        s = r[1];
    return j1(function() {
        o.value = n, o.getSnapshot = t, Cs(o) && s({
            inst: o
        })
    }, [e, n, t]), F1(function() {
        return Cs(o) && s({
            inst: o
        }), e(function() {
            Cs(o) && s({
                inst: o
            })
        })
    }, [e]), G1(n), n
}

function Cs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !B1(e, n)
    } catch {
        return !0
    }
}

function H1(e, t) {
    return t()
}
var W1 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? H1 : V1;
Gu.useSyncExternalStore = wn.useSyncExternalStore !== void 0 ? wn.useSyncExternalStore : W1;
ju.exports = Gu;
var z1 = ju.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uo = u,
    q1 = z1;

function K1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Y1 = typeof Object.is == "function" ? Object.is : K1,
    Z1 = q1.useSyncExternalStore,
    Q1 = Uo.useRef,
    J1 = Uo.useEffect,
    X1 = Uo.useMemo,
    ev = Uo.useDebugValue;
Fu.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
    var s = Q1(null);
    if (s.current === null) {
        var a = {
            hasValue: !1,
            value: null
        };
        s.current = a
    } else a = s.current;
    s = X1(function() {
        function c(g) {
            if (!l) {
                if (l = !0, d = g, g = r(g), o !== void 0 && a.hasValue) {
                    var _ = a.value;
                    if (o(_, g)) return p = _
                }
                return p = g
            }
            if (_ = p, Y1(d, g)) return _;
            var m = r(g);
            return o !== void 0 && o(_, m) ? _ : (d = g, p = m)
        }
        var l = !1,
            d, p, h = n === void 0 ? null : n;
        return [function() {
            return c(t())
        }, h === null ? void 0 : function() {
            return c(h())
        }]
    }, [t, n, r, o]);
    var i = Z1(e, s[0], s[1]);
    return J1(function() {
        a.hasValue = !0, a.value = i
    }, [i]), ev(i), i
};
Nu.exports = Fu;
var tv = Nu.exports;
const Vu = Te(tv),
    Hu = {
        BASE_URL: "https://cdn.oaistatic.com/",
        DEV: !1,
        MODE: "production",
        PROD: !0,
        SSR: !1,
        VITE_APP_URL: "https://chatgpt.com",
        VITE_CHAT_URL_PREFIX: "https://chatgpt.com/share/",
        VITE_CLIENT_EVENTS_SERVICE_URL: "chatgpt.com/ces",
        VITE_CONTINUE_SHARED_CHAT_URL_PREFIX: "https://chatgpt.com/share/",
        VITE_CONTINUE_SHARED_CHAT_URL_SUFFIX: "/continue",
        VITE_GIZMO_OAUTH_CALLBACK_URL: "https://chat.openai.com",
        VITE_INVITE_URL_PREFIX: "https://chatgpt.com/public-api/referral",
        VITE_LOGIN_WEB_URL: "https://auth.openai.com",
        VITE_OIW216Z_SERVICE_URL: "https://sora.com",
        VITE_PUBLIC_API_URL: "https://chatgpt.com/public-api",
        VITE_SHARED_ALT_API_URL: "https://chatgpt.com/backend-alt",
        VITE_SHARED_ANON_API_URL: "https://chatgpt.com/backend-anon",
        VITE_SHARED_API_URL: "https://chatgpt.com/backend-api",
        VITE_SNC_API_URL: "https://chatgpt.com/backend/se",
        VITE_STRIPE_PUBLISHABLE_KEY: "pk_live_51HOrSwC6h1nxGoI3lTAgRjYVrz4dU3fVOabyCcKR3pbEJguCVAlqCxdxCUvoRh1XWwRacViovU3kLKvpkjh7IqkW00iXQsjo3n",
        VITE_VOICE_FRONTDOOR_API_URL: "https://chatgpt.com/voice",
        VITE_VZA493Q_SERVICE_URL: "https://operator.chatgpt.com",
        VITE_WEB_PUSH_PUBLIC_KEY: "BElP4rBIs6aV_3Ic7Fl2rBw_a27isvPyMl_W4WwtlqsiehOYFYnwE21byf9bvFGEwWL8-k-zjZfGCG8HHKGW7OQ"
    },
    {
        useDebugValue: nv
    } = ne,
    {
        useSyncExternalStoreWithSelector: rv
    } = Vu;
let sc = !1;
const ov = e => e;

function Dn(e, t = ov, n) {
    (Hu ? "production" : void 0) !== "production" && n && !sc && (console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"), sc = !0);
    const r = rv(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
    return nv(r), r
}
const ac = e => {
        (Hu ? "production" : void 0) !== "production" && typeof e != "function" && console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
        const t = typeof e == "function" ? nn(e) : e,
            n = (r, o) => Dn(t, r, o);
        return Object.assign(n, t), n
    },
    $t = e => e ? ac(e) : ac,
    Le = nn(() => ({
        initialized: !1,
        initStarted: !1
    })),
    Bo = () => Dn(Le);

function sv() {
    return Xe.StatsigClient.instance(Cu)
}
const Mr = new Na.LocalOverrideAdapter;
class av {
    _eventQueue = [];
    _user = null;
    _didLogEarlyRead = !1;
    client;
    async initialize(t, n) {
        if (Le.getState().initStarted) throw new Error("Statsig.initialize called more than once");
        Le.setState({
            initStarted: !0
        });
        const {
            statsigUser: r
        } = Wu(t, n);
        this._user = r;
        const o = setTimeout(() => {
            Le.getState().initialized || Le.setState({
                initialized: !0
            })
        }, 3e3);
        this.client = new Xe.StatsigClient(Cu, this._user, {
            environment: {
                tier: bu
            },
            networkConfig: {
                api: "https://ab.chatgpt.com/v1",
                preventAllNetworkTraffic: !1
            },
            loggingBufferMaxSize: 100,
            disableLogging: !1,
            disableStorage: !1,
            overrideAdapter: Mr
        }), await this.client.initializeAsync(), M.addFirstTiming("load.statsig-classic"), clearTimeout(o), Le.setState({
            initialized: !0
        }), this.flushEventQueue(), D1(() => {
            this.flushEventQueue()
        })
    }
    get initialized() {
        return Le.getState().initialized
    }
    getUser() {
        return this._user
    }
    logEvent(t, n, r) {
        const o = {};
        typeof this._user ? .custom ? .auth_status == "string" && (o.auth_status = this._user.custom.auth_status), typeof this._user ? .locale == "string" && (o.browser_locale = this._user.locale);
        const s = { ...o,
            ...r
        };
        Le.getState().initialized ? this.client.logEvent(t, n ? ? void 0, s) : this._eventQueue.push({
            eventName: t,
            value: n,
            metadata: s
        })
    }
    flushEventQueue() {
        this._eventQueue.length > 0 && (this._eventQueue.forEach(t => {
            this.logEvent(t.eventName, t.value, t.metadata)
        }), this._eventQueue = [])
    }
    getExperiment({
        experimentName: t,
        shouldLogExposure: n = !0
    }) {
        return Le.getState().initialized ? this.client.getExperiment(t, {
            disableExposureLog: !n
        }) : (this.logEarlyRead(t), null)
    }
    getLayer({
        layerName: t,
        shouldLogExposure: n = !0
    }) {
        return Le.getState().initialized ? this.client.getLayer(t, {
            disableExposureLog: !n
        }) : (this.logEarlyRead(t), null)
    }
    getLayerValue({
        layerName: t,
        key: n,
        defaultValue: r,
        shouldLogExposure: o = !0
    }) {
        return this.getLayer({
            layerName: t,
            shouldLogExposure: o
        }) ? .get(n, r) ? ? r
    }
    checkGate(t) {
        return Le.getState().initialized ? this.client.checkGate(t) : (this.logEarlyRead(t), !1)
    }
    checkGateWithExposureLoggingDisabled(t) {
        return Le.getState().initialized ? this.client.checkGate(t, {
            disableExposureLog: !0
        }) : !1
    }
    overrideGate_DEV_ONLY(t, n) {
        Le.getState().initialized && (n == null ? Mr.removeGateOverride(t) : Mr.overrideGate(t, n))
    }
    getAllOverrides() {
        return Mr.getAllOverrides()
    }
    logEarlyRead(t) {
        this._didLogEarlyRead || (this._didLogEarlyRead = !0)
    }
}
const J = new av;

function Wu(e, t) {
    const {
        userCountry: n
    } = Pn(), r = kt(), o = X.getCookie(K.SharedConversationId), s = Bm(navigator.userAgent), a = {
        userID: e ? .id,
        country: n ? ? void 0,
        privateAttributes: {
            email: e ? .email
        },
        custom: {
            plan_type: t ? .planType,
            workspace_id: t ? .id,
            account_id: t ? .id,
            auth_status: e ? .id == null ? Js.LoggedOut : Js.LoggedIn,
            ...Lo && s !== void 0 ? {
                sidetron_version: s
            } : {}
        },
        locale: navigator.language,
        customIDs: {
            [h_]: r,
            [g_]: r,
            stableID: r,
            ...t ? .id && {
                workspace_id: `${t.id}`,
                account_id: `${t.id}`
            },
            ...o && {
                shared_conversation_id: o
            }
        }
    };
    return {
        deviceId: r,
        statsigUser: a
    }
}

function E6(e) {
    const {
        initialized: t,
        initStarted: n
    } = Bo(), r = u.useMemo(() => J.initialized ? J.checkGate(e) : !1, [t, n, e]);
    return {
        isLoading: !t,
        value: r
    }
}

function x6(e, t = !0) {
    const {
        initialized: n,
        initStarted: r
    } = Bo(), o = u.useMemo(() => (J.initialized ? J.getExperiment({
        experimentName: e,
        shouldLogExposure: t
    }) : null) ? ? {
        get: (a, i) => i
    }, [n, r, e]);
    return {
        isLoading: !n,
        config: o
    }
}

function iv(e, t = !0) {
    const {
        initialized: n,
        initStarted: r
    } = Bo(), o = u.useMemo(() => (J.initialized ? J.getLayer({
        layerName: e,
        shouldLogExposure: t
    }) : null) ? ? {
        get: (a, i) => i
    }, [n, r, e]);
    return {
        isLoading: !n,
        layer: o
    }
}

function R6(e, t, n) {
    const {
        isLoading: r,
        layer: o
    } = iv(e);
    return r ? n : o.get(t, n)
}

function O6(e) {
    const {
        initialized: t,
        initStarted: n
    } = Bo(), r = u.useMemo(() => (J.initialized ? sv().getDynamicConfig(e) : null) ? ? {
        get: (s, a) => a,
        value: {}
    }, [t, n, e]);
    return {
        isLoading: !t,
        config: r
    }
}
var cv = typeof we == "object" && we && we.Object === Object && we,
    zu = cv,
    lv = zu,
    uv = typeof self == "object" && self && self.Object === Object && self,
    dv = lv || uv || Function("return this")(),
    bt = dv,
    fv = bt,
    pv = fv.Symbol,
    No = pv,
    ic = No,
    qu = Object.prototype,
    hv = qu.hasOwnProperty,
    gv = qu.toString,
    Qn = ic ? ic.toStringTag : void 0;

function mv(e) {
    var t = hv.call(e, Qn),
        n = e[Qn];
    try {
        e[Qn] = void 0;
        var r = !0
    } catch {}
    var o = gv.call(e);
    return r && (t ? e[Qn] = n : delete e[Qn]), o
}
var _v = mv,
    vv = Object.prototype,
    Cv = vv.toString;

function yv(e) {
    return Cv.call(e)
}
var bv = yv,
    cc = No,
    Sv = _v,
    wv = bv,
    Tv = "[object Null]",
    Av = "[object Undefined]",
    lc = cc ? cc.toStringTag : void 0;

function Iv(e) {
    return e == null ? e === void 0 ? Av : Tv : lc && lc in Object(e) ? Sv(e) : wv(e)
}
var $n = Iv,
    kv = Array.isArray,
    St = kv;

function Ev(e) {
    return e != null && typeof e == "object"
}
var Un = Ev,
    xv = $n,
    Rv = St,
    Ov = Un,
    Mv = "[object String]";

function Lv(e) {
    return typeof e == "string" || !Rv(e) && Ov(e) && xv(e) == Mv
}
var Pv = Lv;
const Ku = Te(Pv);

function Dv(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r;) o[n] = t(e[n], n, e);
    return o
}
var Yu = Dv;

function $v() {
    this.__data__ = [], this.size = 0
}
var Uv = $v;

function Bv(e, t) {
    return e === t || e !== e && t !== t
}
var Ha = Bv,
    Nv = Ha;

function Fv(e, t) {
    for (var n = e.length; n--;)
        if (Nv(e[n][0], t)) return n;
    return -1
}
var Fo = Fv,
    jv = Fo,
    Gv = Array.prototype,
    Vv = Gv.splice;

function Hv(e) {
    var t = this.__data__,
        n = jv(t, e);
    if (n < 0) return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : Vv.call(t, n, 1), --this.size, !0
}
var Wv = Hv,
    zv = Fo;

function qv(e) {
    var t = this.__data__,
        n = zv(t, e);
    return n < 0 ? void 0 : t[n][1]
}
var Kv = qv,
    Yv = Fo;

function Zv(e) {
    return Yv(this.__data__, e) > -1
}
var Qv = Zv,
    Jv = Fo;

function Xv(e, t) {
    var n = this.__data__,
        r = Jv(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
}
var eC = Xv,
    tC = Uv,
    nC = Wv,
    rC = Kv,
    oC = Qv,
    sC = eC;

function Bn(e) {
    var t = -1,
        n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
Bn.prototype.clear = tC;
Bn.prototype.delete = nC;
Bn.prototype.get = rC;
Bn.prototype.has = oC;
Bn.prototype.set = sC;
var jo = Bn,
    aC = jo;

function iC() {
    this.__data__ = new aC, this.size = 0
}
var cC = iC;

function lC(e) {
    var t = this.__data__,
        n = t.delete(e);
    return this.size = t.size, n
}
var uC = lC;

function dC(e) {
    return this.__data__.get(e)
}
var fC = dC;

function pC(e) {
    return this.__data__.has(e)
}
var hC = pC;

function gC(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function")
}
var Nn = gC;
const M6 = Te(Nn);
var mC = $n,
    _C = Nn,
    vC = "[object AsyncFunction]",
    CC = "[object Function]",
    yC = "[object GeneratorFunction]",
    bC = "[object Proxy]";

function SC(e) {
    if (!_C(e)) return !1;
    var t = mC(e);
    return t == CC || t == yC || t == vC || t == bC
}
var Wa = SC;
const L6 = Te(Wa);
var wC = bt,
    TC = wC["__core-js_shared__"],
    AC = TC,
    ys = AC,
    uc = function() {
        var e = /[^.]+$/.exec(ys && ys.keys && ys.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
    }();

function IC(e) {
    return !!uc && uc in e
}
var kC = IC,
    EC = Function.prototype,
    xC = EC.toString;

function RC(e) {
    if (e != null) {
        try {
            return xC.call(e)
        } catch {}
        try {
            return e + ""
        } catch {}
    }
    return ""
}
var Zu = RC,
    OC = Wa,
    MC = kC,
    LC = Nn,
    PC = Zu,
    DC = /[\\^$.*+?()[\]{}|]/g,
    $C = /^\[object .+?Constructor\]$/,
    UC = Function.prototype,
    BC = Object.prototype,
    NC = UC.toString,
    FC = BC.hasOwnProperty,
    jC = RegExp("^" + NC.call(FC).replace(DC, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function GC(e) {
    if (!LC(e) || MC(e)) return !1;
    var t = OC(e) ? jC : $C;
    return t.test(PC(e))
}
var VC = GC;

function HC(e, t) {
    return e ? .[t]
}
var WC = HC,
    zC = VC,
    qC = WC;

function KC(e, t) {
    var n = qC(e, t);
    return zC(n) ? n : void 0
}
var rn = KC,
    YC = rn,
    ZC = bt,
    QC = YC(ZC, "Map"),
    za = QC,
    JC = rn,
    XC = JC(Object, "create"),
    Go = XC,
    dc = Go;

function ey() {
    this.__data__ = dc ? dc(null) : {}, this.size = 0
}
var ty = ey;

function ny(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t
}
var ry = ny,
    oy = Go,
    sy = "__lodash_hash_undefined__",
    ay = Object.prototype,
    iy = ay.hasOwnProperty;

function cy(e) {
    var t = this.__data__;
    if (oy) {
        var n = t[e];
        return n === sy ? void 0 : n
    }
    return iy.call(t, e) ? t[e] : void 0
}
var ly = cy,
    uy = Go,
    dy = Object.prototype,
    fy = dy.hasOwnProperty;

function py(e) {
    var t = this.__data__;
    return uy ? t[e] !== void 0 : fy.call(t, e)
}
var hy = py,
    gy = Go,
    my = "__lodash_hash_undefined__";

function _y(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = gy && t === void 0 ? my : t, this
}
var vy = _y,
    Cy = ty,
    yy = ry,
    by = ly,
    Sy = hy,
    wy = vy;

function Fn(e) {
    var t = -1,
        n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
Fn.prototype.clear = Cy;
Fn.prototype.delete = yy;
Fn.prototype.get = by;
Fn.prototype.has = Sy;
Fn.prototype.set = wy;
var Ty = Fn,
    fc = Ty,
    Ay = jo,
    Iy = za;

function ky() {
    this.size = 0, this.__data__ = {
        hash: new fc,
        map: new(Iy || Ay),
        string: new fc
    }
}
var Ey = ky;

function xy(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
}
var Ry = xy,
    Oy = Ry;

function My(e, t) {
    var n = e.__data__;
    return Oy(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map
}
var Vo = My,
    Ly = Vo;

function Py(e) {
    var t = Ly(this, e).delete(e);
    return this.size -= t ? 1 : 0, t
}
var Dy = Py,
    $y = Vo;

function Uy(e) {
    return $y(this, e).get(e)
}
var By = Uy,
    Ny = Vo;

function Fy(e) {
    return Ny(this, e).has(e)
}
var jy = Fy,
    Gy = Vo;

function Vy(e, t) {
    var n = Gy(this, e),
        r = n.size;
    return n.set(e, t), this.size += n.size == r ? 0 : 1, this
}
var Hy = Vy,
    Wy = Ey,
    zy = Dy,
    qy = By,
    Ky = jy,
    Yy = Hy;

function jn(e) {
    var t = -1,
        n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
jn.prototype.clear = Wy;
jn.prototype.delete = zy;
jn.prototype.get = qy;
jn.prototype.has = Ky;
jn.prototype.set = Yy;
var qa = jn,
    Zy = jo,
    Qy = za,
    Jy = qa,
    Xy = 200;

function e0(e, t) {
    var n = this.__data__;
    if (n instanceof Zy) {
        var r = n.__data__;
        if (!Qy || r.length < Xy - 1) return r.push([e, t]), this.size = ++n.size, this;
        n = this.__data__ = new Jy(r)
    }
    return n.set(e, t), this.size = n.size, this
}
var t0 = e0,
    n0 = jo,
    r0 = cC,
    o0 = uC,
    s0 = fC,
    a0 = hC,
    i0 = t0;

function Gn(e) {
    var t = this.__data__ = new n0(e);
    this.size = t.size
}
Gn.prototype.clear = r0;
Gn.prototype.delete = o0;
Gn.prototype.get = s0;
Gn.prototype.has = a0;
Gn.prototype.set = i0;
var Qu = Gn,
    c0 = "__lodash_hash_undefined__";

function l0(e) {
    return this.__data__.set(e, c0), this
}
var u0 = l0;

function d0(e) {
    return this.__data__.has(e)
}
var f0 = d0,
    p0 = qa,
    h0 = u0,
    g0 = f0;

function ro(e) {
    var t = -1,
        n = e == null ? 0 : e.length;
    for (this.__data__ = new p0; ++t < n;) this.add(e[t])
}
ro.prototype.add = ro.prototype.push = h0;
ro.prototype.has = g0;
var m0 = ro;

function _0(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r;)
        if (t(e[n], n, e)) return !0;
    return !1
}
var v0 = _0;

function C0(e, t) {
    return e.has(t)
}
var y0 = C0,
    b0 = m0,
    S0 = v0,
    w0 = y0,
    T0 = 1,
    A0 = 2;

function I0(e, t, n, r, o, s) {
    var a = n & T0,
        i = e.length,
        c = t.length;
    if (i != c && !(a && c > i)) return !1;
    var l = s.get(e),
        d = s.get(t);
    if (l && d) return l == t && d == e;
    var p = -1,
        h = !0,
        g = n & A0 ? new b0 : void 0;
    for (s.set(e, t), s.set(t, e); ++p < i;) {
        var _ = e[p],
            m = t[p];
        if (r) var v = a ? r(m, _, p, t, e, s) : r(_, m, p, e, t, s);
        if (v !== void 0) {
            if (v) continue;
            h = !1;
            break
        }
        if (g) {
            if (!S0(t, function(C, y) {
                    if (!w0(g, y) && (_ === C || o(_, C, n, r, s))) return g.push(y)
                })) {
                h = !1;
                break
            }
        } else if (!(_ === m || o(_, m, n, r, s))) {
            h = !1;
            break
        }
    }
    return s.delete(e), s.delete(t), h
}
var Ju = I0,
    k0 = bt,
    E0 = k0.Uint8Array,
    x0 = E0;

function R0(e) {
    var t = -1,
        n = Array(e.size);
    return e.forEach(function(r, o) {
        n[++t] = [o, r]
    }), n
}
var O0 = R0;

function M0(e) {
    var t = -1,
        n = Array(e.size);
    return e.forEach(function(r) {
        n[++t] = r
    }), n
}
var L0 = M0,
    pc = No,
    hc = x0,
    P0 = Ha,
    D0 = Ju,
    $0 = O0,
    U0 = L0,
    B0 = 1,
    N0 = 2,
    F0 = "[object Boolean]",
    j0 = "[object Date]",
    G0 = "[object Error]",
    V0 = "[object Map]",
    H0 = "[object Number]",
    W0 = "[object RegExp]",
    z0 = "[object Set]",
    q0 = "[object String]",
    K0 = "[object Symbol]",
    Y0 = "[object ArrayBuffer]",
    Z0 = "[object DataView]",
    gc = pc ? pc.prototype : void 0,
    bs = gc ? gc.valueOf : void 0;

function Q0(e, t, n, r, o, s, a) {
    switch (n) {
        case Z0:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
            e = e.buffer, t = t.buffer;
        case Y0:
            return !(e.byteLength != t.byteLength || !s(new hc(e), new hc(t)));
        case F0:
        case j0:
        case H0:
            return P0(+e, +t);
        case G0:
            return e.name == t.name && e.message == t.message;
        case W0:
        case q0:
            return e == t + "";
        case V0:
            var i = $0;
        case z0:
            var c = r & B0;
            if (i || (i = U0), e.size != t.size && !c) return !1;
            var l = a.get(e);
            if (l) return l == t;
            r |= N0, a.set(e, t);
            var d = D0(i(e), i(t), r, o, s, a);
            return a.delete(e), d;
        case K0:
            if (bs) return bs.call(e) == bs.call(t)
    }
    return !1
}
var J0 = Q0;

function X0(e, t) {
    for (var n = -1, r = t.length, o = e.length; ++n < r;) e[o + n] = t[n];
    return e
}
var Xu = X0,
    eb = Xu,
    tb = St;

function nb(e, t, n) {
    var r = t(e);
    return tb(e) ? r : eb(r, n(e))
}
var ed = nb;

function rb(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, o = 0, s = []; ++n < r;) {
        var a = e[n];
        t(a, n, e) && (s[o++] = a)
    }
    return s
}
var ob = rb;

function sb() {
    return []
}
var td = sb,
    ab = ob,
    ib = td,
    cb = Object.prototype,
    lb = cb.propertyIsEnumerable,
    mc = Object.getOwnPropertySymbols,
    ub = mc ? function(e) {
        return e == null ? [] : (e = Object(e), ab(mc(e), function(t) {
            return lb.call(e, t)
        }))
    } : ib,
    nd = ub;

function db(e, t) {
    for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
    return r
}
var fb = db,
    pb = $n,
    hb = Un,
    gb = "[object Arguments]";

function mb(e) {
    return hb(e) && pb(e) == gb
}
var _b = mb,
    _c = _b,
    vb = Un,
    rd = Object.prototype,
    Cb = rd.hasOwnProperty,
    yb = rd.propertyIsEnumerable,
    bb = _c(function() {
        return arguments
    }()) ? _c : function(e) {
        return vb(e) && Cb.call(e, "callee") && !yb.call(e, "callee")
    },
    od = bb,
    oo = {
        exports: {}
    };

function Sb() {
    return !1
}
var wb = Sb;
oo.exports;
(function(e, t) {
    var n = bt,
        r = wb,
        o = t && !t.nodeType && t,
        s = o && !0 && e && !e.nodeType && e,
        a = s && s.exports === o,
        i = a ? n.Buffer : void 0,
        c = i ? i.isBuffer : void 0,
        l = c || r;
    e.exports = l
})(oo, oo.exports);
var sd = oo.exports,
    Tb = 9007199254740991,
    Ab = /^(?:0|[1-9]\d*)$/;

function Ib(e, t) {
    var n = typeof e;
    return t = t ? ? Tb, !!t && (n == "number" || n != "symbol" && Ab.test(e)) && e > -1 && e % 1 == 0 && e < t
}
var Ka = Ib,
    kb = 9007199254740991;

function Eb(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= kb
}
var Ya = Eb,
    xb = $n,
    Rb = Ya,
    Ob = Un,
    Mb = "[object Arguments]",
    Lb = "[object Array]",
    Pb = "[object Boolean]",
    Db = "[object Date]",
    $b = "[object Error]",
    Ub = "[object Function]",
    Bb = "[object Map]",
    Nb = "[object Number]",
    Fb = "[object Object]",
    jb = "[object RegExp]",
    Gb = "[object Set]",
    Vb = "[object String]",
    Hb = "[object WeakMap]",
    Wb = "[object ArrayBuffer]",
    zb = "[object DataView]",
    qb = "[object Float32Array]",
    Kb = "[object Float64Array]",
    Yb = "[object Int8Array]",
    Zb = "[object Int16Array]",
    Qb = "[object Int32Array]",
    Jb = "[object Uint8Array]",
    Xb = "[object Uint8ClampedArray]",
    eS = "[object Uint16Array]",
    tS = "[object Uint32Array]",
    ue = {};
ue[qb] = ue[Kb] = ue[Yb] = ue[Zb] = ue[Qb] = ue[Jb] = ue[Xb] = ue[eS] = ue[tS] = !0;
ue[Mb] = ue[Lb] = ue[Wb] = ue[Pb] = ue[zb] = ue[Db] = ue[$b] = ue[Ub] = ue[Bb] = ue[Nb] = ue[Fb] = ue[jb] = ue[Gb] = ue[Vb] = ue[Hb] = !1;

function nS(e) {
    return Ob(e) && Rb(e.length) && !!ue[xb(e)]
}
var rS = nS;

function oS(e) {
    return function(t) {
        return e(t)
    }
}
var sS = oS,
    so = {
        exports: {}
    };
so.exports;
(function(e, t) {
    var n = zu,
        r = t && !t.nodeType && t,
        o = r && !0 && e && !e.nodeType && e,
        s = o && o.exports === r,
        a = s && n.process,
        i = function() {
            try {
                var c = o && o.require && o.require("util").types;
                return c || a && a.binding && a.binding("util")
            } catch {}
        }();
    e.exports = i
})(so, so.exports);
var aS = so.exports,
    iS = rS,
    cS = sS,
    vc = aS,
    Cc = vc && vc.isTypedArray,
    lS = Cc ? cS(Cc) : iS,
    ad = lS,
    uS = fb,
    dS = od,
    fS = St,
    pS = sd,
    hS = Ka,
    gS = ad,
    mS = Object.prototype,
    _S = mS.hasOwnProperty;

function vS(e, t) {
    var n = fS(e),
        r = !n && dS(e),
        o = !n && !r && pS(e),
        s = !n && !r && !o && gS(e),
        a = n || r || o || s,
        i = a ? uS(e.length, String) : [],
        c = i.length;
    for (var l in e)(t || _S.call(e, l)) && !(a && (l == "length" || o && (l == "offset" || l == "parent") || s && (l == "buffer" || l == "byteLength" || l == "byteOffset") || hS(l, c))) && i.push(l);
    return i
}
var id = vS,
    CS = Object.prototype;

function yS(e) {
    var t = e && e.constructor,
        n = typeof t == "function" && t.prototype || CS;
    return e === n
}
var cd = yS;

function bS(e, t) {
    return function(n) {
        return e(t(n))
    }
}
var ld = bS,
    SS = ld,
    wS = SS(Object.keys, Object),
    TS = wS,
    AS = cd,
    IS = TS,
    kS = Object.prototype,
    ES = kS.hasOwnProperty;

function xS(e) {
    if (!AS(e)) return IS(e);
    var t = [];
    for (var n in Object(e)) ES.call(e, n) && n != "constructor" && t.push(n);
    return t
}
var RS = xS,
    OS = Wa,
    MS = Ya;

function LS(e) {
    return e != null && MS(e.length) && !OS(e)
}
var ud = LS,
    PS = id,
    DS = RS,
    $S = ud;

function US(e) {
    return $S(e) ? PS(e) : DS(e)
}
var dd = US,
    BS = ed,
    NS = nd,
    FS = dd;

function jS(e) {
    return BS(e, FS, NS)
}
var GS = jS,
    yc = GS,
    VS = 1,
    HS = Object.prototype,
    WS = HS.hasOwnProperty;

function zS(e, t, n, r, o, s) {
    var a = n & VS,
        i = yc(e),
        c = i.length,
        l = yc(t),
        d = l.length;
    if (c != d && !a) return !1;
    for (var p = c; p--;) {
        var h = i[p];
        if (!(a ? h in t : WS.call(t, h))) return !1
    }
    var g = s.get(e),
        _ = s.get(t);
    if (g && _) return g == t && _ == e;
    var m = !0;
    s.set(e, t), s.set(t, e);
    for (var v = a; ++p < c;) {
        h = i[p];
        var C = e[h],
            y = t[h];
        if (r) var S = a ? r(y, C, h, t, e, s) : r(C, y, h, e, t, s);
        if (!(S === void 0 ? C === y || o(C, y, n, r, s) : S)) {
            m = !1;
            break
        }
        v || (v = h == "constructor")
    }
    if (m && !v) {
        var w = e.constructor,
            T = t.constructor;
        w != T && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof T == "function" && T instanceof T) && (m = !1)
    }
    return s.delete(e), s.delete(t), m
}
var qS = zS,
    KS = rn,
    YS = bt,
    ZS = KS(YS, "DataView"),
    QS = ZS,
    JS = rn,
    XS = bt,
    ew = JS(XS, "Promise"),
    tw = ew,
    nw = rn,
    rw = bt,
    ow = nw(rw, "Set"),
    sw = ow,
    aw = rn,
    iw = bt,
    cw = aw(iw, "WeakMap"),
    lw = cw,
    ea = QS,
    ta = za,
    na = tw,
    ra = sw,
    oa = lw,
    fd = $n,
    Vn = Zu,
    bc = "[object Map]",
    uw = "[object Object]",
    Sc = "[object Promise]",
    wc = "[object Set]",
    Tc = "[object WeakMap]",
    Ac = "[object DataView]",
    dw = Vn(ea),
    fw = Vn(ta),
    pw = Vn(na),
    hw = Vn(ra),
    gw = Vn(oa),
    Vt = fd;
(ea && Vt(new ea(new ArrayBuffer(1))) != Ac || ta && Vt(new ta) != bc || na && Vt(na.resolve()) != Sc || ra && Vt(new ra) != wc || oa && Vt(new oa) != Tc) && (Vt = function(e) {
    var t = fd(e),
        n = t == uw ? e.constructor : void 0,
        r = n ? Vn(n) : "";
    if (r) switch (r) {
        case dw:
            return Ac;
        case fw:
            return bc;
        case pw:
            return Sc;
        case hw:
            return wc;
        case gw:
            return Tc
    }
    return t
});
var mw = Vt,
    Ss = Qu,
    _w = Ju,
    vw = J0,
    Cw = qS,
    Ic = mw,
    kc = St,
    Ec = sd,
    yw = ad,
    bw = 1,
    xc = "[object Arguments]",
    Rc = "[object Array]",
    Lr = "[object Object]",
    Sw = Object.prototype,
    Oc = Sw.hasOwnProperty;

function ww(e, t, n, r, o, s) {
    var a = kc(e),
        i = kc(t),
        c = a ? Rc : Ic(e),
        l = i ? Rc : Ic(t);
    c = c == xc ? Lr : c, l = l == xc ? Lr : l;
    var d = c == Lr,
        p = l == Lr,
        h = c == l;
    if (h && Ec(e)) {
        if (!Ec(t)) return !1;
        a = !0, d = !1
    }
    if (h && !d) return s || (s = new Ss), a || yw(e) ? _w(e, t, n, r, o, s) : vw(e, t, c, n, r, o, s);
    if (!(n & bw)) {
        var g = d && Oc.call(e, "__wrapped__"),
            _ = p && Oc.call(t, "__wrapped__");
        if (g || _) {
            var m = g ? e.value() : e,
                v = _ ? t.value() : t;
            return s || (s = new Ss), o(m, v, n, r, s)
        }
    }
    return h ? (s || (s = new Ss), Cw(e, t, n, r, o, s)) : !1
}
var Tw = ww,
    Aw = Tw,
    Mc = Un;

function pd(e, t, n, r, o) {
    return e === t ? !0 : e == null || t == null || !Mc(e) && !Mc(t) ? e !== e && t !== t : Aw(e, t, n, r, pd, o)
}
var Za = pd,
    Iw = Qu,
    kw = Za,
    Ew = 1,
    xw = 2;

function Rw(e, t, n, r) {
    var o = n.length,
        s = o,
        a = !r;
    if (e == null) return !s;
    for (e = Object(e); o--;) {
        var i = n[o];
        if (a && i[2] ? i[1] !== e[i[0]] : !(i[0] in e)) return !1
    }
    for (; ++o < s;) {
        i = n[o];
        var c = i[0],
            l = e[c],
            d = i[1];
        if (a && i[2]) {
            if (l === void 0 && !(c in e)) return !1
        } else {
            var p = new Iw;
            if (r) var h = r(l, d, c, e, t, p);
            if (!(h === void 0 ? kw(d, l, Ew | xw, r, p) : h)) return !1
        }
    }
    return !0
}
var Ow = Rw,
    Mw = Nn;

function Lw(e) {
    return e === e && !Mw(e)
}
var hd = Lw,
    Pw = hd,
    Dw = dd;

function $w(e) {
    for (var t = Dw(e), n = t.length; n--;) {
        var r = t[n],
            o = e[r];
        t[n] = [r, o, Pw(o)]
    }
    return t
}
var Uw = $w;

function Bw(e, t) {
    return function(n) {
        return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n))
    }
}
var gd = Bw,
    Nw = Ow,
    Fw = Uw,
    jw = gd;

function Gw(e) {
    var t = Fw(e);
    return t.length == 1 && t[0][2] ? jw(t[0][0], t[0][1]) : function(n) {
        return n === e || Nw(n, e, t)
    }
}
var Vw = Gw,
    Hw = $n,
    Ww = Un,
    zw = "[object Symbol]";

function qw(e) {
    return typeof e == "symbol" || Ww(e) && Hw(e) == zw
}
var Qa = qw,
    Kw = St,
    Yw = Qa,
    Zw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    Qw = /^\w*$/;

function Jw(e, t) {
    if (Kw(e)) return !1;
    var n = typeof e;
    return n == "number" || n == "symbol" || n == "boolean" || e == null || Yw(e) ? !0 : Qw.test(e) || !Zw.test(e) || t != null && e in Object(t)
}
var Ja = Jw,
    md = qa,
    Xw = "Expected a function";

function Xa(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(Xw);
    var n = function() {
        var r = arguments,
            o = t ? t.apply(this, r) : r[0],
            s = n.cache;
        if (s.has(o)) return s.get(o);
        var a = e.apply(this, r);
        return n.cache = s.set(o, a) || s, a
    };
    return n.cache = new(Xa.Cache || md), n
}
Xa.Cache = md;
var _d = Xa;
const P6 = Te(_d);
var eT = _d,
    tT = 500;

function nT(e) {
    var t = eT(e, function(r) {
            return n.size === tT && n.clear(), r
        }),
        n = t.cache;
    return t
}
var rT = nT,
    oT = rT,
    sT = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    aT = /\\(\\)?/g,
    iT = oT(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(sT, function(n, r, o, s) {
            t.push(o ? s.replace(aT, "$1") : r || n)
        }), t
    }),
    cT = iT,
    Lc = No,
    lT = Yu,
    uT = St,
    dT = Qa,
    fT = 1 / 0,
    Pc = Lc ? Lc.prototype : void 0,
    Dc = Pc ? Pc.toString : void 0;

function vd(e) {
    if (typeof e == "string") return e;
    if (uT(e)) return lT(e, vd) + "";
    if (dT(e)) return Dc ? Dc.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -fT ? "-0" : t
}
var pT = vd,
    hT = pT;

function gT(e) {
    return e == null ? "" : hT(e)
}
var mT = gT,
    _T = St,
    vT = Ja,
    CT = cT,
    yT = mT;

function bT(e, t) {
    return _T(e) ? e : vT(e, t) ? [e] : CT(yT(e))
}
var Ho = bT,
    ST = Qa,
    wT = 1 / 0;

function TT(e) {
    if (typeof e == "string" || ST(e)) return e;
    var t = e + "";
    return t == "0" && 1 / e == -wT ? "-0" : t
}
var Cr = TT,
    AT = Ho,
    IT = Cr;

function kT(e, t) {
    t = AT(t, e);
    for (var n = 0, r = t.length; e != null && n < r;) e = e[IT(t[n++])];
    return n && n == r ? e : void 0
}
var ei = kT,
    ET = ei;

function xT(e, t, n) {
    var r = e == null ? void 0 : ET(e, t);
    return r === void 0 ? n : r
}
var Cd = xT;
const D6 = Te(Cd);

function RT(e, t) {
    return e != null && t in Object(e)
}
var OT = RT,
    MT = Ho,
    LT = od,
    PT = St,
    DT = Ka,
    $T = Ya,
    UT = Cr;

function BT(e, t, n) {
    t = MT(t, e);
    for (var r = -1, o = t.length, s = !1; ++r < o;) {
        var a = UT(t[r]);
        if (!(s = e != null && n(e, a))) break;
        e = e[a]
    }
    return s || ++r != o ? s : (o = e == null ? 0 : e.length, !!o && $T(o) && DT(a, o) && (PT(e) || LT(e)))
}
var NT = BT,
    FT = OT,
    jT = NT;

function GT(e, t) {
    return e != null && jT(e, t, FT)
}
var VT = GT,
    HT = Za,
    WT = Cd,
    zT = VT,
    qT = Ja,
    KT = hd,
    YT = gd,
    ZT = Cr,
    QT = 1,
    JT = 2;

function XT(e, t) {
    return qT(e) && KT(t) ? YT(ZT(e), t) : function(n) {
        var r = WT(n, e);
        return r === void 0 && r === t ? zT(n, e) : HT(t, r, QT | JT)
    }
}
var eA = XT;

function tA(e) {
    return e
}
var yd = tA;
const $6 = Te(yd);

function nA(e) {
    return function(t) {
        return t ? .[e]
    }
}
var rA = nA,
    oA = ei;

function sA(e) {
    return function(t) {
        return oA(t, e)
    }
}
var aA = sA,
    iA = rA,
    cA = aA,
    lA = Ja,
    uA = Cr;

function dA(e) {
    return lA(e) ? iA(uA(e)) : cA(e)
}
var fA = dA,
    pA = Vw,
    hA = eA,
    gA = yd,
    mA = St,
    _A = fA;

function vA(e) {
    return typeof e == "function" ? e : e == null ? gA : typeof e == "object" ? mA(e) ? hA(e[0], e[1]) : pA(e) : _A(e)
}
var bd = vA,
    CA = rn,
    yA = function() {
        try {
            var e = CA(Object, "defineProperty");
            return e({}, "", {}), e
        } catch {}
    }(),
    bA = yA,
    $c = bA;

function SA(e, t, n) {
    t == "__proto__" && $c ? $c(e, t, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : e[t] = n
}
var wA = SA,
    TA = wA,
    AA = Ha,
    IA = Object.prototype,
    kA = IA.hasOwnProperty;

function EA(e, t, n) {
    var r = e[t];
    (!(kA.call(e, t) && AA(r, n)) || n === void 0 && !(t in e)) && TA(e, t, n)
}
var xA = EA,
    RA = xA,
    OA = Ho,
    MA = Ka,
    Uc = Nn,
    LA = Cr;

function PA(e, t, n, r) {
    if (!Uc(e)) return e;
    t = OA(t, e);
    for (var o = -1, s = t.length, a = s - 1, i = e; i != null && ++o < s;) {
        var c = LA(t[o]),
            l = n;
        if (c === "__proto__" || c === "constructor" || c === "prototype") return e;
        if (o != a) {
            var d = i[c];
            l = r ? r(d, c, i) : void 0, l === void 0 && (l = Uc(d) ? d : MA(t[o + 1]) ? [] : {})
        }
        RA(i, c, l), i = i[c]
    }
    return e
}
var DA = PA,
    $A = ei,
    UA = DA,
    BA = Ho;

function NA(e, t, n) {
    for (var r = -1, o = t.length, s = {}; ++r < o;) {
        var a = t[r],
            i = $A(e, a);
        n(i, a) && UA(s, BA(a, e), i)
    }
    return s
}
var FA = NA,
    jA = ld,
    GA = jA(Object.getPrototypeOf, Object),
    VA = GA,
    HA = Xu,
    WA = VA,
    zA = nd,
    qA = td,
    KA = Object.getOwnPropertySymbols,
    YA = KA ? function(e) {
        for (var t = []; e;) HA(t, zA(e)), e = WA(e);
        return t
    } : qA,
    ZA = YA;

function QA(e) {
    var t = [];
    if (e != null)
        for (var n in Object(e)) t.push(n);
    return t
}
var JA = QA,
    XA = Nn,
    eI = cd,
    tI = JA,
    nI = Object.prototype,
    rI = nI.hasOwnProperty;

function oI(e) {
    if (!XA(e)) return tI(e);
    var t = eI(e),
        n = [];
    for (var r in e) r == "constructor" && (t || !rI.call(e, r)) || n.push(r);
    return n
}
var sI = oI,
    aI = id,
    iI = sI,
    cI = ud;

function lI(e) {
    return cI(e) ? aI(e, !0) : iI(e)
}
var uI = lI,
    dI = ed,
    fI = ZA,
    pI = uI;

function hI(e) {
    return dI(e, pI, fI)
}
var gI = hI,
    mI = Yu,
    _I = bd,
    vI = FA,
    CI = gI;

function yI(e, t) {
    if (e == null) return {};
    var n = mI(CI(e), function(r) {
        return [r]
    });
    return t = _I(t), vI(e, n, function(r, o) {
        return t(r, o[0])
    })
}
var Sd = yI;
const wd = Te(Sd),
    bI = "modulepreload",
    SI = function(e) {
        return "https://cdn.oaistatic.com/" + e
    },
    Bc = {},
    R = function(t, n, r) {
        let o = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const s = document.querySelector("meta[property=csp-nonce]"),
                a = s ? .nonce || s ? .getAttribute("nonce");
            o = Promise.all(n.map(i => {
                if (i = SI(i), i in Bc) return;
                Bc[i] = !0;
                const c = i.endsWith(".css"),
                    l = c ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${i}"]${l}`)) return;
                const d = document.createElement("link");
                if (d.rel = c ? "stylesheet" : bI, c || (d.as = "script", d.crossOrigin = ""), d.href = i, a && d.setAttribute("nonce", a), document.head.appendChild(d), c) return new Promise((p, h) => {
                    d.addEventListener("load", p), d.addEventListener("error", () => h(new Error(`Unable to preload CSS for ${i}`)))
                })
            }))
        }
        return o.then(() => t()).catch(s => {
            const a = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (a.payload = s, window.dispatchEvent(a), !a.defaultPrevented) throw s
        })
    };

function U6() {
    window.location.href = window.location.origin + "/auth/logout"
}
var wI = (e => (e.OpenAI = "openai", e.OpenAIDev = "openai-dev", e.Auth0 = "auth0", e.Auth0dev = "auth0dev", e.Mocked = "mocked", e.LoginWebAuth0 = "login-web", e.LoginWebAuth0Dev = "login-web-dev", e.Auth0Sidetron = "auth0-sidetron", e.Auth0SidetronDev = "auth0-sidetron-dev", e.OpenAISidetron = "openai-sidetron", e.OpenAISidetronDev = "openai-sidetron-dev", e))(wI || {}),
    TI = (e => (e[e.Auth0 = 1] = "Auth0", e[e.WorkOS = 2] = "WorkOS", e))(TI || {});
async function AI() {
    try {
        const e = Date.now(),
            t = await fetch("/api/auth/session"),
            n = await t.json(),
            o = (Date.now() - e) / 1e3;
        if (t.status !== 200 && M.addAction("fetchSession.statusNon200", {
                status: t.status,
                reqDuration: o
            }), Object.keys(n).length) return n.accessToken == null && n.error == null && M.addAction("missing_access_token_error", {
            error: `Missing access token for User: ${n.user?.id} (${n.accessToken})`
        }), n.error === "RefreshAccessTokenError" && window._oaiHandleSessionExpired ? .("page load", n.error), n.error && M.addAction("fetchSession.error", {
            error: n.error
        }), n
    } catch {}
    return null
}
const ti = Ro({
    queryKey: ["session"],
    queryFn: AI,
    staleTime: 1 / 0
});

function ni() {
    const {
        data: e,
        isLoading: t
    } = tn(ti);
    return {
        session: e ? ? null,
        isLoading: t
    }
}
async function zr(e) {
    return await e.fetchQuery(ti)
}

function II(e) {
    return e.getQueryData(ti.queryKey) ? ? null
}

function B6(e) {
    return !e || !e.email ? !1 : e.email.endsWith("@openai.com")
}

function ao(e) {
    return e ? .user != null
}
var Tn = (e => (e.LoggedOut = "logged_out", e.LoggedIn = "logged_in", e))(Tn || {}),
    kI = (e => (e.AuthApi = "authapi", e.Auth0 = "auth0", e))(kI || {});
const N6 = "https://api.openai.com/mfa";
async function EI(e) {
    await fetch("/api/auth/session?refresh=true"), await e.invalidateQueries({
        queryKey: ["session"]
    })
}
const at = window.localStorage;
var Kt = (e => (e.Theme = "theme", e.NextAuth = "nextauth.message", e.HistoryDisabled = "oai/apps/historyDisabled", e.IsNoAuthChatTrainingEnabled = "oai/apps/isNoAuthChatTrainingEnabled", e.IsNavigationCollapsed = "UiState.isNavigationCollapsed.1", e.IsHistoryCollapsed = "UiState.isOnlyShowingRecents.1", e.ChatThreadFlyoutState = "UiState.chatThreadFlyoutState", e.IsGptListCollapsed = "UiState.isGptListCollapsed", e.LastUsedModel = "oai/apps/lastModelUsed", e.EnabledPlugins = "oai/enabledPluginIds", e.HasSeenNewChatModal = "oai/apps/hasSeenNewChatModal", e.HasSeenMeetChatGptModal = "oai/apps/hasSeenMeetChatGptModal", e.HasSignedUpForPlusUpgradeWaitlistV1 = "oai/apps/HasSignedUpForPlusUpgradeWaitlist", e.HasSignedUpForPlusUpgradeWaitlistV2 = "oai/apps/HasSignedUpForPlusUpgradeWaitlistV2", e.HasSignedUpForTeamUpgradeWaitlistV1 = "oai/apps/HasSignedUpForTeamUpgradeWaitlist", e.HasSignedUpForTeamUpgradeWaitlistV2 = "oai/apps/HasSignedUpForTeamUpgradeWaitlistV2", e.HasDismissedUpgradeInviteModal = "oai/apps/hasDismissedUpgradeInviteModal", e.GizmoEditorTab = "oai/apps/gizmoEditorTab", e.GizmoDiscoveryLocale = "oai/apps/gizmoDiscoveryLocale", e.NoAuthRateLimitState = "oai/apps/noAuthRateLimitState", e.RestoreMessageAfterOauthRedirect = "oai/apps/restoreMessageAfterOauthRedirect", e.HasSeenAdaInteractiveChart = "oai/apps/hasSeenAdaInteractiveChart", e.HasSeenAdaInteractiveTable = "oai/apps/hasSeenAdaInteractiveTable", e.SearchSettings = "oai/apps/searchSettings", e.NoAuthBannerDisclaimerClientThreadId = "oai/apps/noAuthBannerDisclaimerClientThreadId", e.NoAuthHasAcceptedFooterDisclaimer = "oai/apps/noAuthHasAcceptedFooterDisclaimer", e.NoAuthUserMessageCount = "oai/apps/noAuthUserMessageCount", e.LoggedInUserMessageCount = "oai/apps/loggedInUserMessageCount", e.NoAuthHasDismissedSoftRateLimitModal = "oai/apps/noAuthHasDismissedSoftRateLimitModal", e.NoAuthHasSeenGpt4oModal = "oai/apps/noAuthHasSeenGpt4oModal", e.MemoryFullBannerDismissed = "oai/apps/memoryFullBannerDismissed", e.IndepthFeedbackDismissedAt = "oai/apps/indepthFeedbackDismissedAt", e.AdvancedVoiceOnMobileAnnouncementCount = "oai/apps/oai/apps/hasSeenAdvancedVoiceOnMobile/2024-09-26", e.CheckoutFrom = "oai/apps/checkout_from", e.HasDismissedMobileAppUpsellBanner = "oai/apps/hasDismissedMobileAppUpsellBanner", e.HasConfirmedCanvasCodeExecution = "oai/apps/hasConfirmedCanvasCodeExecution", e.CODE_EXECUTION_DOMAIN_ALLOW_LIST = "oai/apps/codeExecutionDomainAllowlistWithTTL", e.TasksHasSeenProjectDisclaimerBanner = "oai/apps/tasksHasSeenProjectDisclaimerBanner", e.ExpandSummarizedCoT = "oai/apps/ExpandSummarizedCoT", e.PromoCode = "oai/apps/promoCode", e.LastPageLoadDate = "oai/apps/lastPageLoadDate", e.NoAuthMadlibsModalState = "oai/apps/noAuthMadlibsModalState", e.LastSeenPlusUpsellBannerAt = "oai/apps/lastSeenPlusUpsellBannerAt", e.d2dee219 = "oai/apps/d2dee219", e.ReferralCode = "oai/apps/referralCode", e.LastFeedLoad = "oai/apps/2dc5214a", e.SegmentUserId = "ajs_user_id", e.SegmentUserTraits = "ajs_user_traits", e.MessageFollowupsStoreState = "oai/apps/messageFollowupsStoreState", e))(Kt || {});
class Ot {
    static setItem(t, n, r) {
        if (!at) return;
        const o = ws(t, r);
        at.setItem(o, JSON.stringify(n))
    }
    static getItem(t, n) {
        if (!at) return null;
        const r = ws(t, n),
            o = at.getItem(r);
        return typeof o == "string" ? JSON.parse(o) : o
    }
    static removeItem(t, n) {
        if (at) {
            const r = ws(t, n);
            return at.removeItem(r)
        }
    }
    static DANGER_SECRET_FOLDERS_ONLY_setItem(t, n) {
        if (!at) {
            console.warn(`You cannot set localStorage server-side (${t})`);
            return
        }
        at.setItem(t, JSON.stringify(n))
    }
    static DANGER_SECRET_FOLDERS_ONLY_getItem(t) {
        if (!at) return console.warn(`You cannot get localStorage server-side (${t})`), null;
        const n = at.getItem(t);
        return typeof n == "string" ? JSON.parse(n) : n
    }
}

function ws(e, t) {
    const n = [e];
    return t !== void 0 && (t.userId != null && n.push(t.userId), t.workspaceId != null && n.push(t.workspaceId)), n.join("/")
}

function xI() {
    X.deleteCookie(K.SegmentUserId), X.deleteCookie(K.SegmentUserTraits), Ot.removeItem(Kt.SegmentUserId), Ot.removeItem(Kt.SegmentUserTraits)
}
const sa = () => ({
    hash: window.location.hash,
    path: window.location.pathname,
    search: window.location.search,
    url: window.location.href
});

function F6() {
    ye ? .publish(Rt.ZOOM, {
        command: Po.ZOOM_IN
    })
}

function j6() {
    ye ? .publish(Rt.ZOOM, {
        command: Po.ZOOM_OUT
    })
}

function G6() {
    ye ? .publish(Rt.ZOOM, {
        command: Po.ZOOM_RESET
    })
}

function Nc(e) {
    if (J.checkGate("507664831")) {
        const n = Date.now();
        ye ? .publish(Rt.ADD_BREADCRUMB, {
            message: e,
            epochTimestamp: n
        })
    }
}

function Td() {
    return X.getCookie(K.PunchOutInfoToken)
}

function V6() {
    return Td() != null
}
class RI {
    analytics;
    appName;
    appVersion;
    deviceId;
    browserLocale;
    options;
    settings;
    user;
    constructor({
        appName: t,
        appVersion: n,
        deviceId: r,
        browserLocale: o,
        options: s,
        settings: a
    }) {
        this.analytics = new Promise(i => {
            R(() =>
                import ("./i2qe9noj7l12ytkt.js").then(c => c.q), __vite__mapDeps([0, 1])).then(c => {
                if (!c) {
                    M.addAction("ClientEventsServiceLogger.segmentImport.failed", {
                        appName: t,
                        appVersion: n
                    });
                    return
                }
                const l = new c.AnalyticsBrowser;
                l.addSourceMiddleware(OI(this)), i([l])
            })
        }), this.appName = t, this.appVersion = n, this.deviceId = r, this.browserLocale = o, this.options = s, this.settings = a
    }
    async initialize({
        user: t
    }) {
        const n = {
            appName: this.appName,
            appVersion: this.appVersion
        };
        M.addAction("ClientEventsServiceLogger.initialize.start", n), t && this.identify(t);
        const [r] = await this.analytics;
        r.load(this.settings, this.options).catch(() => {
            M.addAction("ClientEventsServiceLogger.initialize.failed", n)
        }), r.ready(() => {
            M.addAction("ClientEventsServiceLogger.initialize.success", n)
        })
    }
    async track(t, n) {
        const [r] = await this.analytics;
        r.track(t, n, {
            page: sa()
        }), Nc(`Web Client Event: ${t} with data: ${JSON.stringify(n)}`)
    }
    async trackPageView() {
        const t = sa(),
            [n] = await this.analytics;
        n.page(void 0, t, {
            page: t
        }), Nc(`Web Client Page View: ${t.path}`)
    }
    async identify(t) {
        this.user = t;
        const [n] = await this.analytics;
        n.identify(t.userId, t.traits)
    }
    getExtraContext() {
        return {
            app_name: this.appName,
            app_version: this.appVersion,
            browser_locale: this.browserLocale,
            device_id: this.deviceId,
            auth_status: this.user ? Tn.LoggedIn : Tn.LoggedOut,
            user_traits: this.user ? .traits,
            punch_out_info_token: Td()
        }
    }
}

function OI(e) {
    return ({
        payload: t,
        next: n
    }) => {
        t.obj.context = { ...t.obj.context,
            ...e.getExtraContext()
        }, n(t)
    }
}
var MI = (e => (e.ANNUAL = "Annual", e.MONTHLY = "Monthly", e))(MI || {}),
    te = (e => (e.pageLoad = "Page Load", e.pageView = "View Page", e.noAuthAttachButtonClicked = "No Auth Attach Button Clicked", e.noAuthVoiceButtonClicked = "No Auth Voice Button Clicked", e.editPrompt = "Edit Prompt", e.cancelEditPrompt = "Cancel Edit Prompt", e.keyboardShortcut = "Keyboard Shortcut", e.newChatButtonClicked = "New Chat Button Clicked", e.newChatOpenedInNewTab = "New Chat Opened In New Tab", e.popoverHover = "Popover Hover", e.toggleShowRecents = "Toggle Show Recents", e.toggleShowGptList = "Toggle Show GPT List", e.attributeClientThreadToServerThread = "Attribution: Client Thread to Server Thread", e.generateCompletion = "Generate Completion", e.pauseCompletion = "Pause Completion", e.continueCompletion = "Continue Completion", e.newThread = "Create New Thread", e.loadThread = "Load Thread", e.renameThread = "Rename Thread", e.toggleModel = "Toggle Model", e.uploadFile = "Upload File", e.removeFile = "Remove File", e.blobStoreUploadStarted = "Blob Store Upload Started", e.blobStoreUploadError = "Blob Store Upload Error", e.blobStoreUploadCompleted = "Blob Store Upload Completed", e.uploadFileCompleted = "Upload File Completed", e.uploadFileError = "Upload File Error", e.uploadFileInitiated = "Upload File Initiated", e.createFileEntryError = "Create File Entry Error", e.uploadedMaxFilesError = "Uploaded Max Files Error", e.uploadedDuplicateFileError = "Uploaded Duplicate File Error", e.openFileViewer = "Open File Viewer", e.blurDuringCompletion = "Blur During Completion", e.focusAfterBlurDuringCompletion = "Focus After Blur During Completion", e.pastedToComposer = "Pasted to Composer", e.changeNode = "Change Active Node", e.moderationError = "Moderation: Error", e.promptFlaggedByModeration = "Moderation: Prompt Content Flagged", e.promptBlockedByModeration = "Moderation: Prompt Content Blocked", e.completionFlaggedByModeration = "Moderation: Completion Content Flagged", e.completionBlockedByModeration = "Moderation: Completion Content Blocked", e.clickFaqLink = "Click FAQ", e.clickPrivacyPolicy = "Click Privacy Policy", e.toggleDesktopNavCollapsed = "Toggle Desktop Nav Collapsed", e.notificationShown = "Notifications: Notification Shown to User", e.notificationClicked = "Notifications: User Clicked Notification", e.composerOpenContextConnectorPicker = "Composer: Open Context Connector Picker", e.classmatesShowPromo = "Classmates: Show Promo", e.classmatesClickUpgradeButton = "Classmates: Click Upgrade Button", e.classmatesClose = "Classmates: Close", e.classmatesClickSendVerificationCode = "Classmates: Click Send Verification Code", e.classmatesClickResendVerificationCodeButton = "Classmates: Click Resend Verification Code Button", e.classmatesClickChangeEmailButton = "Classmates: Click Change Email Button", e.classmatesClickValidateVerificationCode = "Classmates: Click Validate Verification Code", e.classmatesApplyDiscount = "Classmates: Apply Discount", e.classmatesShowMobileSubscriptionTooltip = "Classmates: Show Mobile Subscription Tooltip", e.classmatesShowUpsellBanner = "Classmates: Show Upsell Banner", e.classmatesClickUpsellButton = "Classmates: Click Upsell Button", e.classmatesCloseUpsellBanner = "Classmates: Close Upsell Banner", e.accountPayAccountPaymentModalShow = "Account Pay: Account Payment Modal Show", e.accountPayAccountPaymentModalToggleClicked = "Account Pay: Account Payment Modal Toggle Clicked", e.accountPayAddCollaboratorsModalClicked = "Account Pay: Add Collaborators Modal Clicked", e.accountPayAddCollaboratorsUploadClicked = "Account Pay: Add Collaborators Upload Clicked", e.accountPayClickAccountPaymentSuccessContinue = "Account Pay: Click Account Payment Success Continue", e.accountPayClickEnterpriseContactSalesButton = "Account Pay: Click Enterprise Contact Sales Button", e.accountPayClickSeeEnterpriseLinkFromModal = "Account Pay: Click see enterprise link from Modal", e.accountPayClickSidebarAccountPay = "Account Pay: Click Sidebar Account Pay", e.accountPayCloseAccountPaymentModal = "Account Pay: Close Account Payment Modal", e.accountPayCollaboratorEmailsAdded = "Account Pay: Collaborator Emails Added", e.accountPayCollaboratorEmailRemoved = "Account Pay: Collaborator Email Removed", e.accountPayCreateWorkspaceModalClicked = "Account Pay: Create Workspace Modal Clicked", e.accountPayCreateWorkspaceModalDismiss = "Account Pay: Create Workspace Modal Dismiss", e.accountPayCreateWorkspaceModalShow = "Account Pay: Create Workspace Modal Show", e.accountPayFullPageAccountUpgradeModal = "Account Pay: Full Page Account Upgrade Modal", e.accountPayInviteCollaboratorsModalShow = "Account Pay: Invite Collaborators Modal Show", e.accountPayNavigatingToPaymentCheckout = "Account Pay: Navigating to Payment Checkout", e.accountPayOpenPaymentFromMessageModelPicker = "Account Pay: Open Payment from Message Model Picker", e.accountPayOpenPaymentFromModelPicker = "Account Pay: Open Payment from Model Picker", e.accountPayPaymentCheckoutClicked = "Account Pay: Payment Checkout Clicked", e.accountPayPaymentConfirmationModalClicked = "Account Pay: Payment Confirmation Modal Clicked", e.accountPayPaymentConfirmationModalShow = "Account Pay: Payment Confirmation Modal Show", e.accountPayPurchasePlanRedirect = "Account Pay: Purchase Plan Redirect", e.accountPaySelectTeamPlanModalClicked = "Account Pay: Select Team Plan Modal Clicked", e.accountPaySelectTeamPlanModalDismiss = "Account Pay: Select Team Plan Modal Dismiss", e.accountPaySelectTeamPlanModalShow = "Account Pay: Select Team Plan Modal Show", e.accountPayTeamPlanSeatCountClicked = "Account Pay: Team Plan Seat Count Clicked", e.accountPayTeamPlanSelectionClicked = "Account Pay: Team Plan Selection Clicked", e.accountPayWorkspaceSetupCompleteModalClicked = "Account Pay: Workspace Setup Complete Modal Clicked", e.accountPayWorkspaceSetupCompleteModalShow = "Account Pay: Workspace Setup Complete Modal Show", e.clickSidebarAccountPortalMenuItem = "Account Portal: Click Sidebar Account Portal", e.clickAccountCustomerPortal = "Account Portal: Click Manage My Subscription", e.clickAccountPaymentGetHelp = "Account Portal: Click Get Help", e.clickAccountManageIos = "Account Portal: Click iOS Manage Subscription", e.clickAccountManageAndroid = "Account Portal: Click Android Manage Subscription", e.navigatingToAccountCustomerPortal = "Account Portal: Navigating to Account Portal", e.forceLogInModal = "Account: Force Login Modal Shown", e.clickLogOut = "Account: Click Log Out", e.ageConfirmationModal = "Account: Age Confirmation Modal Shown", e.accountOpenProfileMenu = "Account: Open Profile Menu", e.accountMenuClickMyGPTs = "Account: Click My GPTs", e.accountMenuClickCustomizeChatGPT = "Account: Click Customize ChatGPT", e.accountMenuClickDownloadApp = "Account: Click Download App", e.accountMemberInviteButton = "Account: Invite Member Button Clicked", e.enableChatHistory = "Enable Chat History", e.disableChatHistory = "Disable Chat History", e.localeLoaded = "Locale Loaded", e.localeUpdatedByUser = "Locale Updated by User", e.carouselCardClick = "Carousel Card Click", e.thumbRating = "Rated Result", e.messageFeedbackThumbsUpClicked = "Message Feedback Thumbs Up Clicked", e.messageFeedbackThumbsDownClicked = "Message Feedback Thumbs Down Clicked", e.messageFeedbackMoreOptionsClicked = "Message Feedback More Options Clicked", e.messageFeedbackInlineSubmitted = "Message Feedback Inline Submitted", e.messageFeedbackDialogSubmitted = "Message Feedback Dialog Submitted", e.messageIndepthFeedbackAccepted = "Message Feedback Indepth Accepted", e.messageIndepthFeedbackDeclined = "Message Feedback Indepth Declined", e.messageIndepthFeedbackDisabled = "Message Feedback Indepth Disabled", e.chatgptTurnActionCopyClicked = "ChatGPT Turn Action Copy Clicked", e.chatgptTurnActionVoiceReplayClicked = "ChatGPT Turn Action Voice Replay Clicked", e.chatgptTurnActionVoiceReadAloudClicked = "ChatGPT Turn Action Voice Read Aloud Clicked", e.useStarterPrompt = "Use Starter Prompt", e.showStarterPrompts = "Show Starter Prompts", e.showExpandMoreStarterPromptsButton = "Show Expand More Starter Prompts Button", e.expandMoreStarterPrompts = "Expand More Starter Prompts", e.moreStarterPromptsShown = "More Starter Prompts Shown", e.useSuggestedReply = "Use Suggested Reply", e.showSuggestedReplies = "Show Suggested Replies", e.promptIgnoreSuggestions = "View Template Prompt Ignore Suggestions", e.useAutocomplete = "Use Autocomplete", e.showAutocompletePrompts = "Show Autocomplete Prompts", e.useTrendingPrompt = "Use Trending Prompt", e.showTrendingPrompts = "Show Trending Prompts", e.messageFollowupAction = "chatgpt_message_followup_action", e.messageFollowupSetting = "chatgpt_message_followup_setting", e.chatgptReferralTrialPaymentSuccess = "Referral: Trial Payment Success", e.chatgptSubscriptionPaymentSuccessPage = "Subscription: Payment Success Page", e.chatgptReferralInviteModalOpened = "Referral: Invite Modal Opened", e.chatgptReferralInviteLinkActivated = "Referral: Invite Link Activated", e.chatgptReferralInviteLinkCopied = "Referral: Invite Link Copied", e.chatgptReferralInviteClaim = "Referral: Invite Claim", e.chatgptReferralInviteExplainSignup = "Referral: Invite Explain Signup", e.chatgptReferralInviteLogin = "Referral: Invite Login", e.chatgptReferralInviteSignup = "Referral: Invite Signup", e.chatgptReferralInviteSidebarClicked = "Referral: Invite Sidebar Clicked", e.chatgptReferralShowSidebarMenuItem = "Referral: Show Sidebar Menu Item", e.chatgptReferralShowClaimedSidebartMenuPromo = "Referral: Show Claimed Sidebar Menu Promo", e.sharedConversationGPTAvailableClicked = "Share Public Chat: GPT Available CTA Clicked", e.sharedConversationGPTEditorClicked = "Share Public Chat: GPT Editor CTA Clicked", e.sharedConversationGPTUpgradeNoGizmoClicked = "Share Public Chat: GPT Upgrade No Gizmo CTA Clicked", e.sharedConversationGPTUpgradeGizmoClicked = "Share Public Chat: GPT Upgrade Gizmo CTA Clicked", e.sharedConversationDefaultGPTClicked = "Share Public Chat: Continue Conversation CTA Clicked", e.sharedConversationPageLoaded = "Share Public Chat: Shared Conversation Loaded", e.sharedConversationLoggedOutClicked = "Share Public Chat: Logged Out CTA Clicked", e.sharedConversationFreeClicked = "Share Public Chat: Free CTA Clicked", e.sharedConversationFreeGizmoClicked = "Share Public Chat: Free Gizmo CTA Clicked", e.sharedConversationPaidClicked = "Share Public Chat: Paid CTA Clicked", e.sharedConversationPaidGizmoClicked = "Share Public Chat: Paid Gizmo CTA Clicked", e.sharedConversationLinkedinSocialClicked = "Share Public Chat: LinkedIn Social Clicked", e.sharedConversationFacebookSocialClicked = "Share Public Chat: Facebook Social Clicked", e.sharedConversationRedditSocialClicked = "Share Public Chat: Reddit Social Clicked", e.sharedConversationXSocialClicked = "Share Public Chat: X Social Clicked", e.sharedConversationDiscoverabilityEnabled = "Share Public Chat: Discoverability Enabled", e.sharedConversationDiscoverabilityDisabled = "Share Public Chat: Discoverability Disabled", e.shareConversationOpenModal = "Share Conversation: Open Modal", e.sharedConversationReportContentClicked = "Share Public Chat: Report Content Clicked", e.sharedConversationContinueConversationClicked = "Continue Conversation: Continue Conversation Clicked", e.continueConversationPageLoaded = "Continue Conversation: Page Loaded", e.continueConversationFirstMessageSent = "Continue Conversation: First Message Sent", e.loggedOutOpenedAuthLogin = "Logged Out: Opened Auth Login Page", e.pluginDisabled = "Plugin Disabled", e.pluginEnabled = "Plugin Enabled", e.pluginChooserOpened = "Plugin Chooser Opened", e.bizOnboardingCompleted = "Business Onboarding Completed", e.bizOnboardingSkipped = "Business Onboarding Skipped", e.browsingShowBingLink = "Browsing Show Bing Link", e.browsingClickBingLink = "Browsing Click Bing Link", e.browsingTimeToFirstTextToken = "Browsing Time To First Text Token", e.linkAction = "link_action", e.dalleImageViewFull = "chatgpt_dalle_image_view_full", e.dalleImageDownload = "chatgpt_dalle_image_download", e.dalleImageCaptioningDownload = "chatgpt_dalle_image_captioning_download", e.dalleImageRating = "chatgpt_dalle_image_rating", e.dalleImageCaptioningRating = "chatgpt_dalle_image_captioning_rating", e.dalleImageClickInpaint = "chatgpt_dalle_inpaint_click", e.dalleClickStyle = "chatgpt_dalle_click_style", e.dalleShuffleStyles = "chatgpt_dalle_shuffle_styles", e.dalleOpenAspectRatioDropdown = "chatgpt_dalle_open_aspect_ratio_dropdown", e.dalleClickAspectRatio = "chatgpt_dalle_click_aspect_ratio", e.complianceAgeVerificationClicked = "Compliance Age Verification Clicked", e.complianceAgeVerificationSeen = "Compliance Age Verification Seen", e.showTemplatesOnNewChat = "Show Templates on New Chat", e.clickTemplateOnNewChat = "Click Template on New Chat", e.viewTemplate = "View Template", e.storeDisplayNux = "Store Display Nux", e.storeDisplayNewNux = "Store Display Nux - V2", e.storeLoadMore = "Store Load More", e.storeClickGizmo = "Store Click Gizmo", e.storeCreateGizmo = "Store Create Gizmo", e.storeClickCategory = "Store Click Category", e.storeMyGizmos = "Store My Gizmos", e.searchOpened = "Search Opened", e.searchStart = "Search Start", e.searchDisplayResult = "Search Display Result", e.searchNoResults = "Search No Results", e.sidebarClickGizmo = "Sidebar Click Gizmo", e.sidebarGizmoMenuKeep = "Sidebar Gizmo Keep", e.sidebarGizmoMenuHide = "Sidebar Gizmo Hide", e.mentionsOpened = "Mentions Opened", e.mentionsClickGizmo = "Mentions Click Gizmo", e.mentionsDisplayNux = "Mentions Display Nux", e.promoteGizmo = "Promote Gizmo", e.detailClickStarter = "Detail Click Starter", e.detailClickChat = "Detail Click Chat", e.detailClickGizmo = "Detail Click Gizmo", e.showDetailModal = "Detail Show Modal", e.showInlineRating = "Show Inline Rating", e.dismissInlineRating = "Dismiss Inline Rating", e.submitInlineRating = "Submit Inline Rating", e.showRatingModal = "Show Rating Modal", e.submitRatingModal = "Submit Rating Modal", e.searchGPTGizmoBannerLinkClicked = "SearchGPT Gizmo Banner Link Clicked", e.searchLinkSidebarShown = "Search Links Sidebar Shown", e.searchImagesSidebarShown = "Search Images Sidebar Shown", e.searchSidebarImageShown = "Search Sidebar Image Shown", e.searchSidebarImageClicked = "Search Sidebar Image Clicked", e.searchLinkSidebarClosed = "Search Links Sidebar Closed", e.searchImagesSidebarClosed = "Search Images Sidebar Closed", e.fileCitationShown = "File Citation Shown", e.fileCitationHovered = "File Citation Hovered", e.fileCitationUnhovered = "File Citation Unhovered", e.fileCitationClicked = "File Citation Clicked", e.fileSourcesFooterShown = "File Sources Footer Shown", e.fileSourcesFooterClicked = "File Sources Footer Clicked", e.fileSourcesSidebarShown = "File Sources Sidebar Shown", e.fileSourcesSidebarClosed = "File Sources Sidebar Closed", e.fileSourcesSidebarItemClicked = "File Sources Sidebar Item Clicked", e.searchContentReferenceShown = "Search Content Reference Shown", e.searchContentReferenceFailed = "Search Content Reference Failed", e.searchContentReferenceClicked = "Search Content Reference Clicked", e.composerOpenInCanvasButtonHovered = "Composer Open In Canvas Button Hovered", e.composerOpenInCanvasButtonClicked = "Composer Open In Canvas Button Clicked", e.composerSystemHintButtonHovered = "Composer System Hint Button Hovered", e.composerSystemHintButtonClicked = "Composer System Hint Button Clicked", e.composerSearchButtonClicked = "Composer Search Button Clicked", e.composerSearchButtonHovered = "Composer Search Button Hovered", e.composerSpeechButtonClicked = "Composer Speech Button Clicked", e.composerSpeechButtonHovered = "Composer Speech Button Hovered", e.composerThinkButtonEnabled = "Composer Think Button Enabled", e.composerThinkButtonDisabled = "Composer Think Button Disabled", e.composerThinkButtonHovered = "Composer Think Button Hovered", e.composerResearchButtonEnabled = "Composer Research Button Enabled", e.composerResearchButtonDisabled = "Composer Research Button Disabled", e.composerResearchButtonHovered = "Composer Research Button Hovered", e.searchModeEngaged = "Search Mode Engaged", e.searchModeDisabled = "Search Mode Disabled", e.searchToolRequestTimeToFirstTextToken = "Search Tool Request Time To First Text Token", e.searchToolRequestTimeToFastNav = "Search Tool Request Time To Fast Nav", e.searchToolPageLoadTimeToFirstTextToken = "Search Tool Page Load Time To First Text Token", e.searchToolPageLoadTimeToFastNav = "Search Tool Page Load Time To Fast Nav", e.contextualAnswersContentReferenceShown = "Contextual Answers Content Reference Shown", e.contextualAnswersContentReferenceClicked = "Contextual Answers Content Reference Clicked", e.userContextModelMessagePastLimit = "User Context Model Message Past Limit", e.userContextGpt4CapabilitiesShown = "User Context GPT-4 Capabilities Shown", e.userContextSaveCustomizeChatGPT = "User Context Save Customize ChatGPT", e.userContextCancelClicked = "User Context Cancel Clicked", e.userContextConfirmCloseClicked = "User Context Confirm Close Clicked", e.userContextInlineFeedbackMessageClicked = "User Context Inline Feedback Message Clicked", e.userContextCustomInstructionsModalOpened = "User Context Custom Instructions Modal Opened", e.authLogin = "Auth: Login", e.authLogout = "Auth: Logout", e.authSignup = "Auth: Signup", e.authAuthError = "Auth: Error", e.authTryItFirstLinkClicked = "Auth: Try It First Link Clicked", e.trackTimeSpentInterval = "Time Spent", e.targetedReplyButtonClicked = "Targeted Reply Button Clicked", e.targetedReplySubmitted = "Targeted Reply Submitted", e.targetedReplyCleared = "Targeted Reply Cleared", e.upgradePlanWaitlistSignup = "Upgrade Plan Waitlist Signup", e.getPlusUpsellClicked = "Upsell: Get Plus Clicked", e.upgradeInSettingsMenuClicked = "Upgrade In Settings Menu Clicked", e.togglePlanManagementModal = "Toggle Plan Management Modal", e.upgradePlanSuccess = "Upgrade Plan Success", e.downgradePlanSuccess = "Downgrade Plan Success", e.renewPlanSuccess = "Renew Plan Success", e.unauthenticatedSessionWithoutCookie = "Unauthenticated Session Loaded Without Cookie", e.unauthenticatedSessionWithCookie = "Unauthenticated Session Loaded With Cookie", e.upgradeInviteModalShown = "Upgrade Invite Modal Shown", e.upgradeInviteModalClosed = "Upgrade Invite Modal Closed", e.enableTemporaryChat = "Enable Temporary Chat", e.migrateToTrainingAllowed = "Migrate to Training Allowed", e.noAuthChatTrainingToggled = "No Auth Chat Training Toggled", e.statsigReadBeforeInitialized = "Statsig Read Before Initialized", e.asyncResponseWaitTooLong = "Async Response Took Too Long to Come Back", e.sseResponseWaitTooLong = "SSE Response Took Too Long to Come Back", e.asyncHandlerOverwritten = "Async Handler Overwritten", e.toggleModelSwitcher = "Toggle Model Switcher", e.modelSwitcherPlusUpgradeButtonClicked = "Model Switcher Plus Upgrade Button Clicked", e.modelSwitcherModelChanged = "Model Switcher Model Changed", e.unauthLegalBanner = "Unauthenticated Legal Banner", e.unauthSignupBanner = "Unauthenticated Signup Banner", e.unauthLoginBanner = "Unauthenticated Login Banner", e.unauthDisclaimerBannerLearnMoreClicked = "Unauthenticated Signup Banner Learn More Clicked", e.unauthSettingsModal = "Unauthenticated Settings Modal Shown", e.loggedOutBannerClosed = "Logged Out Banner Closed", e.footerDisclaimerPrivacyLinkClicked = "Footer Disclaimer Privacy Link Clicked", e.footerDisclaimerTermsLinkClicked = "Footer Disclaimer Terms Link Clicked", e.footerDisclaimerKoreaAddendumLinkClicked = "Footer Disclaimer Korea Addendum Link Clicked", e.adaInteractiveChartShown = "ADA: Interactive Chart Shown", e.adaFocusModeToggled = "ADA: Focus Mode Toggled", e.adaSheetDownloaded = "ADA: Spreadsheet Downloaded", e.adaColumnTargeted = "ADA: Column Targeted", e.adaRangeTargeted = "ADA: Range Targeted", e.adaRowTargeted = "ADA: Row Targeted", e.adaColumnAnnotationViewed = "ADA: Column Metadata Viewed", e.adaRowAnnotationViewed = "ADA: Row Metadata Viewed", e.adaToggledInteractiveChart = "ADA: Toggled Interactive Chart", e.adaDownloadedInteractiveChart = "ADA: Downloaded Interactive Chart", e.adaDownloadedStaticChart = "ADA: Downloaded Static Chart", e.newChatModalShown = "New Chat Modal Shown", e.newChatModalCancelButtonClicked = "New Chat Modal Cancel Button Clicked", e.newChatModalNewChatButtonClicked = "New Chat Modal New Chat Button Clicked", e.memoryUpdatePopoverShown = "Memory Update Popover Shown", e.memoryUpdatePopoverManageButtonClicked = "Memory Update Popover Manage Button Clicked", e.memorySettingsManageClicked = "Memory Settings Manage Clicked", e.memorySettingsResetButtonConfirmed = "Memory Manage Reset Button Confirmed", e.memorySettingsResetButtonClicked = "Memory Manage Reset Button Clicked", e.memoryModalMemoryDeleteClicked = "Memory Manage Modal Memory Delete Clicked", e.memoryModalMemoryDeleteConfirmed = "Memory Manage Modal Memory Delete Confirmed", e.memoryModalShown = "Memory Modal Shown", e.memoryFullWarningUpsellShown = "Memory Full Warning Upsell Shown", e.memoryFullWarningUpsellClicked = "Memory Full Warning Upsell Clicked", e.noAuthWelcomeModalShown = "No Auth Welcome Modal Shown", e.noAuthWelcomeModalTryItFirstLinkClicked = "No Auth Welcome Modal Try It First Link Clicked", e.noAuthHardRateLimitModalShown = "No Auth Hard Rate Limit Modal Shown", e.noAuthSoftRateLimitModalShown = "No Auth Soft Rate Limit Modal Shown", e.noAuthSoftRateLimitModalStayLoggedOutLinkClicked = "No Auth Soft Rate Limit Modal Stay Logged out Link Clicked", e.noAuthWelcomeBackModalShown = "No Auth Welcome Back Modal Shown", e.noAuthWelcomeBackModalStayLoggedOutLinkClicked = "No Auth Welcome Modal Stay Logged Out Link Clicked", e.noauthPromoRedemptionModalShown = "No Auth Promo Redemption Modal Shown", e.noauthPromoRedemptionModalDismissed = "No Auth Promo Redemption Modal Dismissed", e.conversationArchived = "Conversation Archived", e.conversationDeleted = "Conversation Deleted", e.conversationOpenMessageModelSelector = "Conversation Open Message Model Selector", e.conversationHistoryItemOpenMenu = "Conversation History Item Open Menu", e.conversationPollingStarted = "Conversation Polling Started", e.conversationRatingShown = "Conversation Rating Shown", e.conversationRatingSubmitted = "Conversation Rating Submitted", e.rateLimitBannerShown = "Rate Limit: Show Info", e.rateLimitGetPlusButtonClicked = "Rate Limit: Click Upsell", e.sidekickAnnouncementShown = "Sidekick: Announcement Shown", e.sidekickAnnouncementLinkClicked = "Sidekick: Clicked Announcement Link", e.sidekickAnnouncementDismissed = "Sidekcik: Dismissed Announcement", e.sidekickDownloadModalClosed = "Sidekick: Download Modal Closed", e.sidekickDownloadModalShown = "Sidekick: Download Modal Shown", e.sidekickDownloadModalDownloaded = "Sidekick: Download Modal Downloaded", e.chatgptMoonshineAnnouncementShown = "ChatGPT Moonshine: Announcement Shown", e.chatgptMoonshineAnnouncementCTAClicked = "ChatGPT Moonshine: CTA Clicked", e.chatgptMoonshineAnnouncementClosed = "ChatGPT Moonshine: Announcement Closed", e.chatgptMemoryInSearchAnnouncementShown = "ChatGPT Memory in Search: Announcement Shown", e.chatgptMemoryInSearchAnnouncementCTAClicked = "ChatGPT Memory in Search: CTA Clicked", e.chatgptMemoryInSearchAnnouncementClosed = "ChatGPT Memory in Search: Announcement Closed", e.chatgptBrowserExtensionAnnouncementShown = "ChatGPT Browser Extension: Announcement Shown", e.chatgptBrowserExtensionAnnouncementCTAClicked = "ChatGPT Browser Extension: CTA Clicked", e.chatgptBrowserExtensionAnnouncementClosed = "ChatGPT Browser Extension: Announcement Closed", e.chatgptBrowserExtensionUserMenuClicked = "ChatGPT Browser Extension: User Menu Clicked", e.sidetronAnnouncementShown = "Sidetron: Announcement Shown", e.sidetronAnnouncementLinkClicked = "Sidetron: Clicked Announcement Link", e.sidetronAnnouncementDismissed = "Sidetron: Dismissed Announcement", e.sidetronBlockingModalShown = "Sidetron: Blocking Modal Shown", e.sidetronDownloadModalClosed = "Sidetron: Download Modal Closed", e.sidetronDownloadModalShown = "Sidetron: Download Modal Shown", e.sidetronDownloadModalDownloaded = "Sidetron: Download Modal Downloaded", e.sidetronModalActionClicked = "Sidetron: Modal Action Clicked", e.sidetronModalLogoutClicked = "Sidetron: Modal Logout Clicked", e.sidetronPhotoAttached = "Sidetron: Photo Attached", e.sidetronScreenshotAttached = "Sidetron: Screenshot Attached", e.advancedVoiceOnMobileAnnouncementShown = "Advanced Voice on Mobile: Announcement Shown", e.advancedVoiceOnMobileAnnouncementDismissed = "Advanced Voice on Mobile: Dismissed Announcement", e.advancedVoiceOnMobileLinkClicked = "Advanced Voice on Mobile: Link Clicked", e.composerWhisperButtonError = "Whisper on Web/Windows: Error", e.composerWhisperButtonClickedStart = "Whisper on Web/Windows: Clicked to start dictation", e.composerWhisperButtonClickedEnd = "Whisper on Web/Windows: Clicked to end dictation", e.composerWhisperButtonHovered = "Whisper on Web/Windows: Button hover to see tooltip", e.contextConnectorsPickerStarted = "Context Connectors: Picker Started", e.contextConnectorsPickerLoaded = "Context Connectors: Picker Loaded", e.contextConnectorsPickerPicked = "Context Connectors: Picker Picked", e.contextConnectorsPickerCancelled = "Context Connectors: Picker Cancelled", e.contextConnectorsLinkPasted = "Context Connectors: Link Pasted", e.contextConnectorsLinkMetadataFetchStarted = "Context Connectors: Link Metadata Fetch Started", e.contextConnectorsLinkMetadataFetchSucceeded = "Context Connectors: Link Metadata Fetch Succeeded", e.contextConnectorsLinkMetadataFetchFailed = "Context Connectors: Link Metadata Fetch Failed", e.contextConnectorsOAuthUpsellButtonClick = "Context Connectors: OAuth Upsell Button Click", e.contextConnectorsExpiredAccessTokenUsed = "Context Connectors: Expired Access Token Used", e.connectorSettingsClientApplicationDisconnectButtonClicked = "Connector Settings: Client Application Disconnect Button Clicked", e.systemHintListOpened = "System Hint List Opened", e.systemHintSelected = "System Hint Selected", e.cancelPlusStart = "Cancel Plus: Opened cancel modal", e.cancelPlusAbort = "Cancel Plus: Closed cancel modal without cancellation", e.cancelPlusConfirm = "Cancel Plus: Clicked button to cancel plan", e.cancelPlusError = "Cancel Plus: Something errored while cancelling", e.cancelPlusSuccess = "Cancel Plus: Request to cancel was successful", e.receivedA8KM123Message = "Tool: Received a8km123 message", e.openedA8KM123Message = "Tool: Opened a8km123 message", e.noAuthPunchOutSignInAsModalShown = "No Auth Punch Out Sign In As Modal Shown", e.noAuthPunchOutSignInAsModalContinueButtonClicked = "No Auth Punch Out Sign In As Modal Continue Button Clicked", e.noAuthPunchOutSignInAsModalCancelButtonClicked = "No Auth Punch Out Sign In As Modal Cancel Button Clicked", e.punchOutAnonToAuthedModalShown = "Punch Out Anon To Authed Modal Shown", e.punchOutAnonToAuthedModalContinueButtonClicked = "Punch Out Anon To Authed Modal Continue Button Clicked", e.PunchOutAnonToAuthedModalCancelButtonClicked = "Punch Out Anon To Authed Modal Cancel Button Clicked", e.meetChatGptModalShown = "Meet ChatGPT Modal Shown", e.meetChatGptModalConfirmationButtonClicked = "Meet ChatGPT Modal Confirmation Button Clicked", e.o3MiniNuxModalShown = "o3-mini Nux Modal Shown", e.o3MiniNuxModalConfirmationButtonClicked = "o3-mini Nux Modal Confirmation Button Clicked", e.fannyPackClose = "FannyPack: Close", e.fannyPackOpen = "FannyPack: Open", e.fannyPackQueryError = "FannyPack: Query Error", e.fannyPackQueryFetchMore = "FannyPack: Query Fetch More", e.fannyPackQuery = "FannyPack: Query", e.fannyPackClickResult = "FannyPack: Click result", e.fannyPackNoResults = "FannyPack: No results", e.fannyPackImpression = "FannyPack: Impression", e.projectsCreateOpen = "Projects: Create Open", e.projectsCreateSubmit = "Projects: Create Submit", e.projectsThemeChange = "Projects: Theme Change", e.projectsBreadcrumbPickerOpen = "Projects: Breadcrumb Picker Open", e.projectsBreadcrumbPickerPickConversation = "Projects: Breadcrumb Picker Pick Conversation", e.projectsBreadcrumbPickerPickNewChat = "Projects: Breadcrumb Picker Pick New Chat", e.projectsBreadcrumbPickerModelPickerOpen = "Projects: Breadcrumb Picker Model Picker Open", e.projectsBreadcrumbPickerModelPickerSelect = "Projects: Breadcrumb Picker Model Picker Select", e.projectsHistoryEmptyLoadMore = "Projects: History is displayed as empty but we can load more", e.conversationHeaderMenuItemsOpen = "Composer Redesign: Conversation Header Menu Items Open", e.composerTemporaryChatButtonHovered = "Composer Redesign: Temporary Chat Button Hovered", e.temporaryChatMovedButtonClicked = "Temporary Chat Move: Temporary Chat Button Clicked", e.canvasButtonClicked = "Canvas Button Clicked", e.canvasOptOutClicked = "Canvas Opt Out Clicked", e.canvasCodemirrorPaste = "Canvas Codemirror Paste", e.canvasCodemirrorMaxLength = "Canvas Codemirror Max Length", e.canvasProsemirrorMaxLength = "Canvas Prosemirror Max Length", e.canvasProsemirrorPaste = "Canvas Prosemirror Paste", e.canvasError = "Canvas Client Error", e.canvasDiffEditFail = "Canvas Diff Edit Fail", e.canvasDiffEditSuccess = "Canvas Diff Edit Success", e.canvasDiffEditFailCount = "Canvas Diff Edit Fail Count", e.canvasDiffEditSuccessCount = "Canvas Diff Edit Success Count", e.canvasDiffEditCount = "Canvas Diff Edit Count", e.canvasDiffEditSuccessRatio = "Canvas Diff Edit Success Ratio", e.canvasRunCodeButtonClicked = "Canvas Run Code Button Clicked", e.canvasRunCodeConfirmationCancelButtonClicked = "Canvas Run Code Confirmation Cancel Button Clicked", e.canvasRunCodeConfirmationAlwaysRunClicked = "Canvas Run Code Confirmation Always Run Button Clicked", e.canvasOpenConsoleClicked = "Canvas Open Console Clicked", e.canvasSharedEditButtonClicked = "Canvas Shared Edit Button Clicked", e.canvasSharedRunButtonClicked = "Canvas Shared Run Button Clicked", e.canvasSharedAuthedReportButtonClicked = "Canvas Shared Authed Report Button Clicked", e.canvasSharedUnauthedReportButtonClicked = "Canvas Shared Unauthed Report Button Clicked", e.onboardingShown = "Onboarding Shown", e.onboardingNextClicked = "Onboarding Next", e.onboardingFinished = "Onboarding Finished", e.onboardingError = "Onboarding Error", e.onboardingDismissed = "Onboarding Dismissed", e.onboardingUsageQuestionSkipped = "Onboarding Usage Question Skipped", e.onboardingUsageQuestionSelected = "Onboarding Usage Question Selected", e.onboardingSelfDescriptionEntered = "Onboarding Self Description Entered", e.onboardingGoBack = "Onboarding Go Back", e.onboardingStepShown = "Onboarding Step Shown", e.mobileAppUpsellBannerShown = "Mobile App Upsell Banner Shown", e.mobileAppUpsellBannerClicked = "Mobile App Upsell Banner Clicked", e.mobileAppUpsellBannerDismissed = "Mobile App Upsell Banner Dismissed", e.selectedCountryChangedInPricingModal = "Selected country changed in pricing modal", e.announcementTooltipShown = "Announcement Tooltip Shown", e.announcementTooltipDismissed = "Announcement Tooltip Dismissed", e.chatgpt_email_verify_enter_email_step_shown = "Email Verify Enter Email Step - Shown", e.chatgpt_email_verify_enter_email_step_continue = "Email Verify Enter Email Step - Attempted Continue", e.chatgpt_email_verify_enter_email_step_type = "Email Verify Enter Email Step - Typed", e.chatgpt_email_verify_enter_email_step_error = "Email Verify Enter Email Step - Error Sending Verification Email", e.chatgpt_email_verify_verify_otp_step_shown = "Email Verify Verify OTP Step - Shown", e.chatgpt_email_verify_verify_otp_step_continue = "Email Verify Verify OTP Step - Attempted Continue", e.chatgpt_email_verify_verify_otp_step_type = "Email Verify Verify OTP Step - Typed", e.chatgpt_email_verify_verify_otp_step_resend = "Email Verify Verify OTP Step - Resend", e.chatgpt_email_verify_verify_otp_step_change_email = "Email Verify Verify OTP Step - Back to Enter Email Step", e.chatgpt_email_verify_verify_otp_step_error = "Email Verify Verify OTP Step - Error Verifying OTP", e.chatgpt_email_verify_verify_otp_step_resend_error = "Email Verify Verify OTP Step - Error Resending OTP", e.chatgpt_email_verify_popup_shown = "Email Verify Popup Shown", e.chatgpt_email_verify_popup_hidden = "Email Verify Popup Hidden", e.operatorAnnouncementBannerShown = "Operator Announcement Banner Shown", e.operatorAnnouncementBannerDismissed = "Operator Announcement Banner Dismissed", e.operatorAnnouncementBannerTryOperatorButtonClicked = "Operator Announcement Banner Try Operator Button Clicked", e.subscriptionRenewalFailedBannerOwnerShown = "Subscription Renewal Failed Banner Shown to User", e.subscriptionRenewalFailedBannerUserShown = "Subscription Renewal Failed Banner Shown to Owner", e.subscriptionRenewalFailedBannerHiddenOnMobile = "Subscription Renewal Failed Banner Hidden On Mobile", e.subscriptionRenewalFailedBannerOwnerClicked = "Subscription Renewal Failed Banner Owner Clicked", e.cancelSubscriptionModalShown = "Cancel Subscription Modal Shown", e.cancelSubscriptionModalDismissed = "Cancel Subscription Modal Dismissed", e.cancelSubscriptionModalConfirmationButtonClicked = "Cancel Subscription Modal Confirmation Button Clicked", e.cancelSubscriptionModalCancelSuccess = "Cancel Subscription Modal Cancel Success", e.cancelSubscriptionModalCancelFailed = "Cancel Subscription Modal Cancel Failed", e.subscriptionSettingsShown = "Subscription Settings Shown", e.subscriptionSettingsChangePlanButtonClicked = "Subscription Settings Change Plan Button Clicked", e.subscriptionSettingsCancelSubscriptionButtonClicked = "Subscription Settings Cancel Subscription Button Clicked", e.subscriptionSettingsRenewPlanButtonClicked = "Subscription Settings Renew Plan Button Clicked", e.promoIneligibleModalShown = "Promo Ineligible Modal Shown", e.promoEligibleModalShown = "Promo Eligible Modal Shown", e.promoRedemptionBannerShown = "Promo Redemption Banner Shown", e.promoRedemptionBannerRedeemButtonClicked = "Promo Redemption Banner Redeem Button Clicked", e.chatgptAccountLinkRedirectAuthenticate = "Account Link: Redirect to Authenticate", e.chatgptAccountLinkError = "Account Link: Error", e.chatgptAccountLinkSuccess = "Account Link: Success", e.chatgptAccountLinkAllowClicked = 'Account Link: "Allow WhatsApp Linking" Button Clicked', e.chatgptAccountLinkCancelClicked = 'Account Link: "Cancel WhatsApp Linking" Button Clicked', e.chatgptCoTExpanded = "CoT Expanded", e.chatgptCoTCollapsed = "CoT Collapsed", e.chatgptStreamedCoTChunkViewed = "Streamed CoT Chunk Viewed", e.chatgptStreamedCoTChunkIgnored = "Streamed CoT Chunk Ignored", e.plusUpsellBannerShown = "Plus Upsell Banner Shown", e.plusUpsellBannerDismissed = "Plus Upsell Banner Dismissed", e.plusUpsellBannerGetPlusButtonClicked = "Plus Upsell Banner Get Plus Button Clicked", e.chatgptInstantFollowUpAnchorClicked = "Instant Follow Up Anchor Clicked", e.customizeChatgptAnnouncementShown = "Customize ChatGPT Announcement Shown", e.customizeChatgptAnnouncementClosed = "Customize ChatGPT Announcement Closed", e.customizeChatgptAnnouncementClicked = "Customize ChatGPT Announcement Clicked", e.urlClickedAllowed = "URL Clicked Allowed", e.urlClickedBlocked = "URL Clicked Blocked", e.conversationStreamInterrupted = "Conversation Stream Interrupted", e.page404Shown = "404 Page Shown", e.page404ReturnHomeButtonClicked = "404 Page Return Home Button Clicked", e.mobileSubscriptionWarningModalShown = "Mobile Subscription Warning Modal Shown", e.mobileSubscriptionWarningModalContinueClicked = "Mobile Subscription Warning Modal Continue Clicked", e.mobileSubscriptionWarningModalCloseClicked = "Mobile Subscription Warning Modal Close Clicked", e.cookieConsentBannerShown = "Cookie Consent Banner Shown", e.cookieConsentBannerRejected = "Cookie Consent Banner Rejected", e.cookieConsentBannerAccepted = "Cookie Consent Banner Accepted", e.cookieConsentBannerIgnored = "Cookie Consent Banner Ignored", e))(te || {}),
    LI = (e => (e.CONVERSATION_COMPOSER_WEB_ICON = "conversation_composer_web_icon", e.CONVERSATION_COMPOSER_TOOL_MENU = "conversation_composer_tool_menu", e.CONVERSATION_COMPOSER_SLASH_SEARCH = "conversation_composer_slash_search", e.CONVERSATION_REGENERATE_WITH_SEARCH = "conversation_regenerate_with_search", e.CONVERSATION_REGENERATE_WITHOUT_SEARCH = "conversation_regenerate_without_search", e.URL_SEARCH_HINT = "url_search_hint", e.URL_NO_SEARCH_HINT = "url_no_search_hint", e))(LI || {});
const PI = kt(),
    DI = navigator.language,
    aa = "9f2258c640519bcc2ac5d4dfb5685ee6aaf9dfd7",
    Pr = new RI({
        appName: "chatgpt",
        appVersion: aa,
        deviceId: PI,
        browserLocale: DI,
        options: Lm,
        settings: Pm
    }),
    me = {
        initialize({
            userInfo: e
        } = {}) {
            const t = e ? .currentAccount ? .structure === We.WORKSPACE ? e.currentAccount.id : null,
                n = e ? {
                    userId: e.sessionUser.id,
                    traits: {
                        plan_type: e.currentAccount ? .planType ? ? null,
                        workspace_id: t
                    }
                } : null;
            Pr.initialize({
                user: n
            })
        },
        logEvent(e, t) {
            Pr.track(e, { ...t,
                origin: "chat",
                app_version: aa
            })
        },
        logEventWithStatsig(e, t, n) {
            const r = { ...n,
                origin: "chat",
                app_version: aa
            };
            Pr.track(e, r), J.logEvent(t, null, wd(r, o => Ku(o)))
        },
        logPageView() {
            Pr.trackPageView()
        },
        logNewChatButtonClicked({
            location: e,
            gizmo_id: t
        }) {
            this.logEvent(te.newChatButtonClicked, {
                location: e,
                gizmo_id: t
            }), J.logEvent("chatgpt_new_chat_button_clicked", null, {
                location: e
            })
        },
        logAuthErrorResponse(e, t) {
            this.logEvent(te.authAuthError, {
                error_code: e
            }), J.logEvent("chatgpt_auth_error", e, {
                auth_provider: t
            })
        },
        logNoAuthAttachButtonClicked(e) {
            this.logEvent(te.noAuthAttachButtonClicked, e), J.logEvent("chatgpt_web_no_auth_attach_button_clicked", null, e)
        },
        logNoAuthVoiceButtonClicked(e) {
            this.logEvent(te.noAuthVoiceButtonClicked, e), J.logEvent("chatgpt_web_no_auth_voice_button_clicked", null, e)
        },
        logLogInButtonClicked(e) {
            this.logEvent(te.authLogin, e), J.logEvent("chatgpt_auth_log_in", null, e)
        },
        logSignUpButtonClicked(e) {
            this.logEvent(te.authSignup, e), J.logEvent("chatgpt_auth_sign_up", null, e)
        },
        logLogOutButtonClicked(e) {
            this.logEvent(te.authLogout, e), J.logEvent("chatgpt_auth_log_out", null, e)
        },
        logRateLimitBannerShown(e) {
            this.logEvent(te.rateLimitBannerShown, e);
            const {
                call_to_action: t,
                ...n
            } = e, r = n;
            t ? .forEach((o, s) => {
                r[`call_to_action.${s}`] = o
            }), J.logEvent("chatgpt_rate_limit_banner_shown", null, { ...r,
                is_new_conversation: e.is_new_conversation.toString(),
                is_hard_block: e.is_hard_block.toString()
            })
        },
        logRateLimitGetPlusButtonClicked(e) {
            this.logEvent(te.rateLimitGetPlusButtonClicked, e), J.logEvent("chatgpt_rate_limit_get_plus_button_clicked", null, { ...e,
                is_new_conversation: e.is_new_conversation.toString(),
                is_hard_block: e.is_hard_block.toString()
            })
        },
        logRateLimitUpgradePlanButtonClicked(e) {
            this.logEvent(te.rateLimitGetPlusButtonClicked, e), J.logEvent("chatgpt_rate_limit_upgrade_plan_button_clicked", null, { ...e,
                is_new_conversation: e.is_new_conversation.toString(),
                is_hard_block: e.is_hard_block.toString()
            })
        },
        logPopoverHover(e) {
            this.logEvent(te.popoverHover, e), J.logEvent("chatgpt_popover_hover", null, e)
        },
        logUpsellGetPlusButtonClicked(e) {
            this.logEventWithStatsig(te.getPlusUpsellClicked, "chatgpt_upsell_get_plus_button_clicked", e)
        },
        logToggleShowRecents({
            isOnlyShowingRecents: e
        }) {
            this.logEvent(te.toggleShowRecents, {
                isOnlyShowingRecents: e
            }), J.logEvent("chatgpt_toggle_show_recents", null, {
                isOnlyShowingRecents: String(e)
            })
        },
        logToggleShowGptList({
            isCollapsed: e
        }) {
            this.logEvent(te.toggleShowGptList, {
                isCollapsed: e
            })
        },
        logToggleDesktopNavCollapsed({
            isDesktopNavCollapsed: e
        }) {
            this.logEvent(te.toggleDesktopNavCollapsed, {
                isDesktopNavCollapsed: e
            }), J.logEvent("chatgpt_toggle_desktop_nav_collapsed", null, {
                isDesktopNavCollapsed: String(e)
            })
        },
        logTogglePlanManagementModal({
            isOpen: e
        }) {
            const t = te.togglePlanManagementModal,
                n = "chatgpt_toggle_plan_management_modal";
            this.logEvent(t, {
                isOpen: e
            }), J.logEvent(n, null, {
                isOpen: String(e)
            })
        },
        logPaymentSuccess(e) {
            this.logEvent(te.chatgptSubscriptionPaymentSuccessPage, e), J.logEvent("chatgpt_plan_payment_success_page", null, e)
        }
    },
    $I = e => u.createElement("svg", {
        width: 357,
        height: 62,
        viewBox: "0 0 357 62",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, u.createElement("path", {
        d: "M30.8694 50.7428C19.9894 50.7428 12.4244 42.4978 12.4244 31.1078C12.4244 19.7178 19.9894 11.4728 30.6994 11.4728C38.5194 11.4728 44.5544 16.0628 46.3394 21.6728H58.4944C56.3694 9.43281 44.8944 0.507812 30.5294 0.507812C13.2744 0.507812 0.609375 14.1928 0.609375 31.1078C0.609375 48.0228 12.9344 61.7078 30.6144 61.7078C45.2344 61.7078 56.4544 52.9528 58.7494 40.5428H46.6794C44.6394 46.2378 38.6894 50.7428 30.8694 50.7428Z",
        fill: "currentColor"
    }), u.createElement("path", {
        d: "M88.586 17.5094C82.976 17.5094 78.556 19.9744 76.091 23.3744V1.35938H65.041V60.8594H76.091V37.9944C76.091 31.3644 79.661 27.0294 85.441 27.0294C90.711 27.0294 93.686 31.1094 93.686 36.8044V60.8594H104.736V35.0194C104.736 24.4794 98.276 17.5094 88.586 17.5094Z",
        fill: "currentColor"
    }), u.createElement("path", {
        d: "M150.04 33.1478C150.04 23.4578 143.41 17.5078 131.17 17.5078C121.14 17.5078 113.15 23.1178 111.79 31.2778H122.925C123.775 28.4728 126.835 26.2628 131.085 26.2628C136.61 26.2628 139.245 29.1528 139.245 34.1678V34.4228L128.45 35.3578C117.145 36.2928 110.855 40.8828 110.855 49.5528C110.855 56.8628 117.145 61.7078 125.9 61.7078C131.765 61.7078 137.46 59.4128 139.84 55.5878C139.84 57.4578 140.01 59.1578 140.35 60.8578H150.635C150.21 58.1378 150.04 54.9928 150.04 51.3378V33.1478ZM139.245 43.2628C139.245 48.2778 135.505 53.3778 127.94 53.3778C123.86 53.3778 121.65 51.4228 121.65 48.5328C121.65 45.3878 123.775 43.4328 128.535 43.0078L139.245 42.0728V43.2628Z",
        fill: "currentColor"
    }), u.createElement("path", {
        d: "M173.245 4.58984H162.195V18.3598H153.355V27.2848H162.195V48.1948C162.195 56.2698 166.36 60.8598 175.285 60.8598H184.125V51.6798H178.515C174.775 51.6798 173.245 50.4048 173.245 46.9198V27.2848H184.125V18.3598H173.245V4.58984Z",
        fill: "currentColor"
    }), u.createElement("path", {
        d: "M239.033 29.0678H219.993V38.5878H236.228C235.123 46.4928 227.728 51.2528 219.483 51.2528C207.583 51.2528 200.613 42.4978 200.613 31.1078C200.613 19.7178 208.433 11.3878 219.143 11.3878C226.453 11.3878 232.403 15.6378 233.933 20.3978H246.088C243.793 8.58281 232.913 0.507812 218.973 0.507812C201.803 0.507812 189.053 14.3628 189.053 31.1928C189.053 48.0228 200.783 61.7078 218.293 61.7078C226.283 61.7078 233.508 58.1378 236.738 53.2928V60.8578H246.598V36.6328C246.598 31.7878 243.878 29.0678 239.033 29.0678Z",
        fill: "currentColor"
    }), u.createElement("path", {
        d: "M281.703 1.35938H255.354V60.8594H266.573V38.5044H281.789C293.519 38.5044 301.849 31.6194 301.849 20.0594C301.849 8.49937 293.518 1.35938 281.703 1.35938ZM280.939 28.6444H266.573V11.5594H280.939C286.719 11.5594 290.458 14.8744 290.458 20.0594C290.458 25.2444 286.719 28.6444 280.939 28.6444Z",
        fill: "currentColor"
    }), u.createElement("path", {
        d: "M304.652 1.35938V11.5594H324.967V60.8594H336.187V11.5594H356.587V1.35938H304.652Z",
        fill: "currentColor"
    }));

function H6({
    className: e
}) {
    const t = en();
    return f.jsx($I, {
        className: Z("h-6 w-24", e),
        "aria-label": t.formatMessage({
            id: "VJmCc9",
            defaultMessage: "ChatGPT logo"
        }),
        role: "img"
    })
}

function W6() {
    const e = u.useId(),
        t = eu(),
        [n] = u.useState(() => {
            {
                const s = document.getElementById(e) ? .dataset.index;
                if (s != null) return parseInt(s)
            }
            return Math.floor(Math.random() * Fc.length)
        }),
        {
            layer: r
        } = y_("590557768"),
        o = r.get("should_show_return_home_btn", !1);
    return u.useEffect(() => {
        me.logEventWithStatsig(te.page404Shown, "chatgpt_404_page_shown")
    }, []), f.jsxs("section", {
        className: "flex h-screen flex-col items-center justify-center",
        "data-index": n,
        id: e,
        children: [null, f.jsxs("div", {
            children: [f.jsxs("h3", {
                children: [f.jsx(I_, {
                    className: "mb-2 h-6 w-6 align-baseline brand:hidden"
                }), "404 Not Found"]
            }), f.jsx("p", {
                className: "mt-2 max-w-lg pb-6",
                children: f.jsx(U_, {
                    value: Fc[n].message,
                    typing: !0,
                    speed: 150,
                    chunk: !0
                })
            }), o && f.jsx(Oo, {
                color: "primary",
                onClick: () => {
                    me.logEventWithStatsig(te.page404ReturnHomeButtonClicked, "chatgpt_404_page_return_home_button_clicked"), t("/")
                },
                children: f.jsx(Sg, {
                    id: "Cc1py2",
                    defaultMessage: "Go to ChatGPT"
                })
            })]
        })]
    })
}
const Fc = [{
    message: `Lost in the vast web,
Where you sought, there's only void—
Nothingness awaits.`
}, {
    message: `Paths cross empty void
Seeking what once existed
Silence answers all.`
}, {
    message: `Where we are, there's only air,
A page misplaced, it isn't there.
In the void where data fades,
Questions linger, answers evade.
Not all paths lead where we care.`
}, {
    message: `Where the page should be,
Empty space and missing words—
A void in the code.`
}, {
    message: `The link was a dream,
A shadow of what once was—
Now, nothing remains.`
}, {
    message: `In the heat of day,
The path dissolves to nothing—
An empty mirage.`
}];

function Ad(e) {
    const t = Symbol(void 0),
        n = r => {
            if (!r) throw new Error("[FATAL] Attempted to access session value without a context.");
            const o = r;
            if (t in o) {
                const a = o[t];
                if (a === jc) throw new Error("[FATAL] Attempted to access session value during initialization. Check for dependency cycles.");
                return a
            }
            o[t] = jc;
            const s = e(r);
            return o[t] = s, s
        };
    return n.__setValue = (r, o) => {
        r[t] = o
    }, n
}
const jc = Symbol();

function Id() {
    const e = u.useContext(kd);
    if (!e) throw new Error("[FATAL] Attempted to access sessionContext outside of <SessionContextProvider>");
    return e
}
const kd = u.createContext(void 0);

function z6() {
    return {}
}
const q6 = ({
    sessionContext: e,
    children: t
}) => f.jsx(kd, {
    value: e,
    children: t
});
let Ed;

function UI() {
    const e = Ed;
    if (!e) throw new Error("[FATAL] Attempted to access global client-only SessionContext instance before it was set");
    return e
}

function K6(e) {
    Ed = e
}
const xd = u.createContext({
        country: null
    }),
    BI = () => u.useContext(xd);

function Rd() {
    const {
        session: e,
        isLoading: t
    } = ni();
    return {
        isUnauthenticated: !ao(e),
        isLoading: t
    }
}
var NI = {};
const Y6 = "https://chatgpt.com/backend/se",
    Z6 = NI.VITE_VZA493Q_SERVICE_URL ? ? "https://operator.chatgpt.com" ? ? "https://operator.chatgpt.com",
    qt = "personal",
    Od = 60 * 60 * 24 * 90,
    Q6 = {
        signUpButtonText: {
            id: "Kiuf8K",
            defaultMessage: "Sign up"
        },
        logInButtonText: {
            id: "Yx8BXg",
            defaultMessage: "Log in"
        },
        cancelButtonText: {
            id: "DR1Cxg",
            defaultMessage: "Cancel"
        },
        continueButtonText: {
            id: "bT1n8o",
            defaultMessage: "Continue"
        },
        gotItButtonText: {
            id: "Eomb3Y",
            defaultMessage: "Got it"
        }
    };
var FI = (e => (e.APPLE = "apple", e))(FI || {});
const jI = "gpt-4o",
    J6 = jI;
var GI = (e => (e.GPT_3_5 = "gpt3.5", e.GPT_4 = "gpt4", e.GPT_4o = "gpt4o", e.HIDDEN = "hidden", e))(GI || {});
const Wo = "WEB:",
    X6 = `${Wo}:DUMMY`;
var VI = (e => (e.Next = "next", e.Variant = "variant", e.Continue = "continue", e))(VI || {}),
    H = (e => (e.Root = "root", e.User = "user", e.Assistant = "assistant", e.System = "system", e.Critic = "critic", e.Tool = "tool", e.Developer = "developer", e))(H || {}),
    ir = (e => (e.PrimaryAssistant = "primary_assistant", e.GizmoInteraction = "gizmo_interaction", e.GizmoMagicCreate = "gizmo_magic_create", e.GizmoTest = "gizmo_test", e))(ir || {}),
    HI = (e => (e.None = "none", e.OAuth = "oauth", e.ServiceHTTP = "service_http", e))(HI || {}),
    WI = (e => (e.CONVERSATION = "conversation", e.REGENERATE = "regenerate", e))(WI || {}),
    zI = (e => (e.UNSUPPORTED_ATTACHMENT = "unsupported_attachment", e.UNSUPPORTED_AUDIO = "unsupported_audio", e.UNSUPPORTED_IMAGE = "unsupported_image", e.UNSUPPORTED_TOOL_USE = "unsupported_tool_use", e.UNSUPPORTED_GIZMO = "unsupported_gizmo", e.UNSUPPORTED_CUSTOM_INSTRUCTIONS = "unsupported_custom_instructions", e.UNSUPPORTED_TEMPORARY_CHAT = "unsupported_temporary_chat", e))(zI || {}),
    qI = (e => (e.RATE_LIMIT = "rate_limit", e))(qI || {}),
    le = (e => (e.Text = "text", e.MultimodalText = "multimodal_text", e.TetherBrowsingCode = "tether_browsing_code", e.Code = "code", e.ExecutionOutput = "execution_output", e.SystemError = "system_error", e.SystemMessage = "system_message", e.SystemContent = "system_content", e.DeveloperContent = "developer_content", e.TetherBrowsingDisplay = "tether_browsing_display", e.TetherQuote = "tether_quote", e.UserEditableContext = "user_editable_context", e.ModelEditableContext = "model_editable_context", e.Error = "error", e))(le || {}),
    Ze = (e => (e.Audio = "audio", e.AudioAssetPointer = "audio_asset_pointer", e.ImageAssetPointer = "image_asset_pointer", e.AudioTranscription = "audio_transcription", e.RealTimeUserAudioVideoAssetPointer = "real_time_user_audio_video_asset_pointer", e))(Ze || {}),
    KI = (e => (e.Picker = "Picker", e.Link = "Link", e))(KI || {}),
    Hn = (e => (e.SEND = "send", e.GIZMO_TAG = "gizmo_tag", e.FILE_UPLOAD = "file_upload", e.REASON = "reason", e.DEEP_RESEARCH = "deep_research", e))(Hn || {}),
    YI = (e => (e.AUTHENTICATE = "authenticate", e.AUTHENTICATE_SECONDARY = "authenticate_secondary", e.GET_PLUS = "get_plus", e.NEW_CHAT = "new_chat", e))(YI || {}),
    ZI = (e => (e.DEEP_RESEARCH = "deep_research", e))(ZI || {}),
    QI = (e => (e.SystemHint = "systemHint", e))(QI || {});

function e7(e) {
    return "start_index" in e ? {
        startIndex: e.start_index,
        endIndex: e.end_index,
        symbol: e.symbol
    } : e
}
var JI = (e => (e.InstantQuery = "instant_query", e.ComposerSearch = "composer_search", e.UrlSearch = "url_search", e))(JI || {}),
    XI = (e => (e.ToolWeb = "tool:web", e.Onboarding = "onboarding", e))(XI || {}),
    ek = (e => (e.Search = "search", e.Canvas = "canvas", e))(ek || {}),
    tk = (e => (e.Search = "search", e.Click = "click", e.MultiClick = "mclick", e.Lookup = "lookup", e.OpenUrl = "open_url", e.Open = "open", e.Quote = "quote", e.QuoteFull = "quote_full", e.QuoteLines = "quote_lines", e.Back = "back", e.Scroll = "scroll", e))(tk || {}),
    nk = (e => (e.Bing = "bing", e.Fortis = "fortis", e))(nk || {}),
    rk = (e => (e.Starting = "starting", e.Running = "running", e.Done = "done", e.Timeout = "timeout", e.Error = "error", e.Cancelled = "cancelled", e))(rk || {}),
    ok = (e => (e.AUTO = "auto", e))(ok || {}),
    Md = Symbol.for("immer-nothing"),
    Gc = Symbol.for("immer-draftable"),
    ae = Symbol.for("immer-state");

function Ge(e, ...t) {
    throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)
}
var An = Object.getPrototypeOf;

function In(e) {
    return !!e && !!e[ae]
}

function _t(e) {
    return e ? Ld(e) || Array.isArray(e) || !!e[Gc] || !!e.constructor ? .[Gc] || qo(e) || Ko(e) : !1
}
var sk = Object.prototype.constructor.toString();

function Ld(e) {
    if (!e || typeof e != "object") return !1;
    const t = An(e);
    if (t === null) return !0;
    const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === sk
}

function kn(e, t) {
    zo(e) === 0 ? Object.entries(e).forEach(([n, r]) => {
        t(n, r, e)
    }) : e.forEach((n, r) => t(r, n, e))
}

function zo(e) {
    const t = e[ae];
    return t ? t.type_ : Array.isArray(e) ? 1 : qo(e) ? 2 : Ko(e) ? 3 : 0
}

function ia(e, t) {
    return zo(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}

function Pd(e, t, n) {
    const r = zo(e);
    r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n
}

function ak(e, t) {
    return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t
}

function qo(e) {
    return e instanceof Map
}

function Ko(e) {
    return e instanceof Set
}

function ve(e) {
    return e.copy_ || e.base_
}

function ca(e, t) {
    if (qo(e)) return new Map(e);
    if (Ko(e)) return new Set(e);
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    if (!t && Ld(e)) return An(e) ? { ...e
    } : Object.assign(Object.create(null), e);
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[ae];
    let r = Reflect.ownKeys(n);
    for (let o = 0; o < r.length; o++) {
        const s = r[o],
            a = n[s];
        a.writable === !1 && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (n[s] = {
            configurable: !0,
            writable: !0,
            enumerable: a.enumerable,
            value: e[s]
        })
    }
    return Object.create(An(e), n)
}

function ri(e, t = !1) {
    return Yo(e) || In(e) || !_t(e) || (zo(e) > 1 && (e.set = e.add = e.clear = e.delete = ik), Object.freeze(e), t && kn(e, (n, r) => ri(r, !0))), e
}

function ik() {
    Ge(2)
}

function Yo(e) {
    return Object.isFrozen(e)
}
var la = {};

function Yt(e) {
    const t = la[e];
    return t || Ge(0, e), t
}

function ck(e, t) {
    la[e] || (la[e] = t)
}
var cr;

function io() {
    return cr
}

function lk(e, t) {
    return {
        drafts_: [],
        parent_: e,
        immer_: t,
        canAutoFreeze_: !0,
        unfinalizedDrafts_: 0
    }
}

function Vc(e, t) {
    t && (Yt("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t)
}

function ua(e) {
    da(e), e.drafts_.forEach(uk), e.drafts_ = null
}

function da(e) {
    e === cr && (cr = e.parent_)
}

function Hc(e) {
    return cr = lk(cr, e)
}

function uk(e) {
    const t = e[ae];
    t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0
}

function Wc(e, t) {
    t.unfinalizedDrafts_ = t.drafts_.length;
    const n = t.drafts_[0];
    return e !== void 0 && e !== n ? (n[ae].modified_ && (ua(t), Ge(4)), _t(e) && (e = co(t, e), t.parent_ || lo(t, e)), t.patches_ && Yt("Patches").generateReplacementPatches_(n[ae].base_, e, t.patches_, t.inversePatches_)) : e = co(t, n, []), ua(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Md ? e : void 0
}

function co(e, t, n) {
    if (Yo(t)) return t;
    const r = t[ae];
    if (!r) return kn(t, (o, s) => zc(e, r, t, o, s, n)), t;
    if (r.scope_ !== e) return t;
    if (!r.modified_) return lo(e, r.base_, !0), r.base_;
    if (!r.finalized_) {
        r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
        const o = r.copy_;
        let s = o,
            a = !1;
        r.type_ === 3 && (s = new Set(o), o.clear(), a = !0), kn(s, (i, c) => zc(e, r, o, i, c, n, a)), lo(e, o, !1), n && e.patches_ && Yt("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_)
    }
    return r.copy_
}

function zc(e, t, n, r, o, s, a) {
    if (In(o)) {
        const i = s && t && t.type_ !== 3 && !ia(t.assigned_, r) ? s.concat(r) : void 0,
            c = co(e, o, i);
        if (Pd(n, r, c), In(c)) e.canAutoFreeze_ = !1;
        else return
    } else a && n.add(o);
    if (_t(o) && !Yo(o)) {
        if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
        co(e, o), (!t || !t.scope_.parent_) && lo(e, o)
    }
}

function lo(e, t, n = !1) {
    !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && ri(t, n)
}

function dk(e, t) {
    const n = Array.isArray(e),
        r = {
            type_: n ? 1 : 0,
            scope_: t ? t.scope_ : io(),
            modified_: !1,
            finalized_: !1,
            assigned_: {},
            parent_: t,
            base_: e,
            draft_: null,
            copy_: null,
            revoke_: null,
            isManual_: !1
        };
    let o = r,
        s = oi;
    n && (o = [r], s = lr);
    const {
        revoke: a,
        proxy: i
    } = Proxy.revocable(o, s);
    return r.draft_ = i, r.revoke_ = a, i
}
var oi = {
        get(e, t) {
            if (t === ae) return e;
            const n = ve(e);
            if (!ia(n, t)) return fk(e, n, t);
            const r = n[t];
            return e.finalized_ || !_t(r) ? r : r === Ts(e.base_, t) ? (As(e), e.copy_[t] = ur(r, e)) : r
        },
        has(e, t) {
            return t in ve(e)
        },
        ownKeys(e) {
            return Reflect.ownKeys(ve(e))
        },
        set(e, t, n) {
            const r = Dd(ve(e), t);
            if (r ? .set) return r.set.call(e.draft_, n), !0;
            if (!e.modified_) {
                const o = Ts(ve(e), t),
                    s = o ? .[ae];
                if (s && s.base_ === n) return e.copy_[t] = n, e.assigned_[t] = !1, !0;
                if (ak(n, o) && (n !== void 0 || ia(e.base_, t))) return !0;
                As(e), gt(e)
            }
            return e.copy_[t] === n && (n !== void 0 || t in e.copy_) || Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0
        },
        deleteProperty(e, t) {
            return Ts(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, As(e), gt(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0
        },
        getOwnPropertyDescriptor(e, t) {
            const n = ve(e),
                r = Reflect.getOwnPropertyDescriptor(n, t);
            return r && {
                writable: !0,
                configurable: e.type_ !== 1 || t !== "length",
                enumerable: r.enumerable,
                value: n[t]
            }
        },
        defineProperty() {
            Ge(11)
        },
        getPrototypeOf(e) {
            return An(e.base_)
        },
        setPrototypeOf() {
            Ge(12)
        }
    },
    lr = {};
kn(oi, (e, t) => {
    lr[e] = function() {
        return arguments[0] = arguments[0][0], t.apply(this, arguments)
    }
});
lr.deleteProperty = function(e, t) {
    return lr.set.call(this, e, t, void 0)
};
lr.set = function(e, t, n) {
    return oi.set.call(this, e[0], t, n, e[0])
};

function Ts(e, t) {
    const n = e[ae];
    return (n ? ve(n) : e)[t]
}

function fk(e, t, n) {
    const r = Dd(t, n);
    return r ? "value" in r ? r.value : r.get ? .call(e.draft_) : void 0
}

function Dd(e, t) {
    if (!(t in e)) return;
    let n = An(e);
    for (; n;) {
        const r = Object.getOwnPropertyDescriptor(n, t);
        if (r) return r;
        n = An(n)
    }
}

function gt(e) {
    e.modified_ || (e.modified_ = !0, e.parent_ && gt(e.parent_))
}

function As(e) {
    e.copy_ || (e.copy_ = ca(e.base_, e.scope_.immer_.useStrictShallowCopy_))
}
var pk = class {
    constructor(e) {
        this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
            if (typeof t == "function" && typeof n != "function") {
                const s = n;
                n = t;
                const a = this;
                return function(c = s, ...l) {
                    return a.produce(c, d => n.call(this, d, ...l))
                }
            }
            typeof n != "function" && Ge(6), r !== void 0 && typeof r != "function" && Ge(7);
            let o;
            if (_t(t)) {
                const s = Hc(this),
                    a = ur(t, void 0);
                let i = !0;
                try {
                    o = n(a), i = !1
                } finally {
                    i ? ua(s) : da(s)
                }
                return Vc(s, r), Wc(o, s)
            } else if (!t || typeof t != "object") {
                if (o = n(t), o === void 0 && (o = t), o === Md && (o = void 0), this.autoFreeze_ && ri(o, !0), r) {
                    const s = [],
                        a = [];
                    Yt("Patches").generateReplacementPatches_(t, o, s, a), r(s, a)
                }
                return o
            } else Ge(1, t)
        }, this.produceWithPatches = (t, n) => {
            if (typeof t == "function") return (a, ...i) => this.produceWithPatches(a, c => t(c, ...i));
            let r, o;
            return [this.produce(t, n, (a, i) => {
                r = a, o = i
            }), r, o]
        }, typeof e ? .autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e ? .useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy)
    }
    createDraft(e) {
        _t(e) || Ge(8), In(e) && (e = hk(e));
        const t = Hc(this),
            n = ur(e, void 0);
        return n[ae].isManual_ = !0, da(t), n
    }
    finishDraft(e, t) {
        const n = e && e[ae];
        (!n || !n.isManual_) && Ge(9);
        const {
            scope_: r
        } = n;
        return Vc(r, t), Wc(void 0, r)
    }
    setAutoFreeze(e) {
        this.autoFreeze_ = e
    }
    setUseStrictShallowCopy(e) {
        this.useStrictShallowCopy_ = e
    }
    applyPatches(e, t) {
        let n;
        for (n = t.length - 1; n >= 0; n--) {
            const o = t[n];
            if (o.path.length === 0 && o.op === "replace") {
                e = o.value;
                break
            }
        }
        n > -1 && (t = t.slice(n + 1));
        const r = Yt("Patches").applyPatches_;
        return In(e) ? r(e, t) : this.produce(e, o => r(o, t))
    }
};

function ur(e, t) {
    const n = qo(e) ? Yt("MapSet").proxyMap_(e, t) : Ko(e) ? Yt("MapSet").proxySet_(e, t) : dk(e, t);
    return (t ? t.scope_ : io()).drafts_.push(n), n
}

function hk(e) {
    return In(e) || Ge(10, e), $d(e)
}

function $d(e) {
    if (!_t(e) || Yo(e)) return e;
    const t = e[ae];
    let n;
    if (t) {
        if (!t.modified_) return t.base_;
        t.finalized_ = !0, n = ca(e, t.scope_.immer_.useStrictShallowCopy_)
    } else n = ca(e, !0);
    return kn(n, (r, o) => {
        Pd(n, r, $d(o))
    }), t && (t.finalized_ = !1), n
}

function gk() {
    class e extends Map {
        constructor(c, l) {
            super(), this[ae] = {
                type_: 2,
                parent_: l,
                scope_: l ? l.scope_ : io(),
                modified_: !1,
                finalized_: !1,
                copy_: void 0,
                assigned_: void 0,
                base_: c,
                draft_: this,
                isManual_: !1,
                revoked_: !1
            }
        }
        get size() {
            return ve(this[ae]).size
        }
        has(c) {
            return ve(this[ae]).has(c)
        }
        set(c, l) {
            const d = this[ae];
            return a(d), (!ve(d).has(c) || ve(d).get(c) !== l) && (n(d), gt(d), d.assigned_.set(c, !0), d.copy_.set(c, l), d.assigned_.set(c, !0)), this
        }
        delete(c) {
            if (!this.has(c)) return !1;
            const l = this[ae];
            return a(l), n(l), gt(l), l.base_.has(c) ? l.assigned_.set(c, !1) : l.assigned_.delete(c), l.copy_.delete(c), !0
        }
        clear() {
            const c = this[ae];
            a(c), ve(c).size && (n(c), gt(c), c.assigned_ = new Map, kn(c.base_, l => {
                c.assigned_.set(l, !1)
            }), c.copy_.clear())
        }
        forEach(c, l) {
            const d = this[ae];
            ve(d).forEach((p, h, g) => {
                c.call(l, this.get(h), h, this)
            })
        }
        get(c) {
            const l = this[ae];
            a(l);
            const d = ve(l).get(c);
            if (l.finalized_ || !_t(d) || d !== l.base_.get(c)) return d;
            const p = ur(d, l);
            return n(l), l.copy_.set(c, p), p
        }
        keys() {
            return ve(this[ae]).keys()
        }
        values() {
            const c = this.keys();
            return {
                [Symbol.iterator]: () => this.values(),
                next: () => {
                    const l = c.next();
                    return l.done ? l : {
                        done: !1,
                        value: this.get(l.value)
                    }
                }
            }
        }
        entries() {
            const c = this.keys();
            return {
                [Symbol.iterator]: () => this.entries(),
                next: () => {
                    const l = c.next();
                    if (l.done) return l;
                    const d = this.get(l.value);
                    return {
                        done: !1,
                        value: [l.value, d]
                    }
                }
            }
        }[Symbol.iterator]() {
            return this.entries()
        }
    }

    function t(i, c) {
        return new e(i, c)
    }

    function n(i) {
        i.copy_ || (i.assigned_ = new Map, i.copy_ = new Map(i.base_))
    }
    class r extends Set {
        constructor(c, l) {
            super(), this[ae] = {
                type_: 3,
                parent_: l,
                scope_: l ? l.scope_ : io(),
                modified_: !1,
                finalized_: !1,
                copy_: void 0,
                base_: c,
                draft_: this,
                drafts_: new Map,
                revoked_: !1,
                isManual_: !1
            }
        }
        get size() {
            return ve(this[ae]).size
        }
        has(c) {
            const l = this[ae];
            return a(l), l.copy_ ? !!(l.copy_.has(c) || l.drafts_.has(c) && l.copy_.has(l.drafts_.get(c))) : l.base_.has(c)
        }
        add(c) {
            const l = this[ae];
            return a(l), this.has(c) || (s(l), gt(l), l.copy_.add(c)), this
        }
        delete(c) {
            if (!this.has(c)) return !1;
            const l = this[ae];
            return a(l), s(l), gt(l), l.copy_.delete(c) || (l.drafts_.has(c) ? l.copy_.delete(l.drafts_.get(c)) : !1)
        }
        clear() {
            const c = this[ae];
            a(c), ve(c).size && (s(c), gt(c), c.copy_.clear())
        }
        values() {
            const c = this[ae];
            return a(c), s(c), c.copy_.values()
        }
        entries() {
            const c = this[ae];
            return a(c), s(c), c.copy_.entries()
        }
        keys() {
            return this.values()
        }[Symbol.iterator]() {
            return this.values()
        }
        forEach(c, l) {
            const d = this.values();
            let p = d.next();
            for (; !p.done;) c.call(l, p.value, p.value, this), p = d.next()
        }
    }

    function o(i, c) {
        return new r(i, c)
    }

    function s(i) {
        i.copy_ || (i.copy_ = new Set, i.base_.forEach(c => {
            if (_t(c)) {
                const l = ur(c, i);
                i.drafts_.set(c, l), i.copy_.add(l)
            } else i.copy_.add(c)
        }))
    }

    function a(i) {
        i.revoked_ && Ge(3, JSON.stringify(ve(i)))
    }
    ck("MapSet", {
        proxyMap_: t,
        proxySet_: o
    })
}
var Ue = new pk,
    At = Ue.produce;
Ue.produceWithPatches.bind(Ue);
Ue.setAutoFreeze.bind(Ue);
Ue.setUseStrictShallowCopy.bind(Ue);
Ue.applyPatches.bind(Ue);
Ue.createDraft.bind(Ue);
Ue.finishDraft.bind(Ue);
const mk = e => (t, n, r) => (r.setState = (o, s, ...a) => {
        const i = typeof o == "function" ? At(o) : o;
        return t(i, s, ...a)
    }, e(r.setState, n, r)),
    si = mk,
    _k = {
        bannerInfo: null,
        modelLimits: [],
        blockedFeatures: [],
        isInitialLoad: !0,
        limitsProgress: []
    },
    xt = $t(si(() => ({ ..._k
    })));

function dr(e) {
    return new Date(e.resets_after) > new Date
}

function t7() {
    return xt(({
        isInitialLoad: t
    }) => t)
}
const vk = {
    updateDetails: ({
        banner_info: e,
        model_limits: t,
        blocked_features: n,
        limits_progress: r
    }) => {
        xt.setState(o => {
            o.bannerInfo ? ? = e, o.isInitialLoad = !1, o.blockedFeatures = o.blockedFeatures.concat(n).filter(dr), o.modelLimits = o.modelLimits.concat(t ? ? []).filter(dr), o.limitsProgress = r ? ? []
        })
    },
    dismissBanner: () => {
        xt.setState(e => {
            e.bannerInfo = null
        })
    },
    reset: () => {
        xt.setState(e => {
            e.blockedFeatures = [], e.bannerInfo = null
        })
    }
};

function n7() {
    return xt(({
        bannerInfo: e
    }) => {
        const {
            resets_after: t
        } = e ? ? {};
        return !e || t != null && !dr({
            resets_after: t
        }) ? null : e
    })
}

function yr(e) {
    return xt(({
        blockedFeatures: t
    }) => {
        const n = t.find(({
            name: r
        }) => r === e);
        return n && dr(n) ? n : null
    })
}

function Ck() {
    return yr(Hn.SEND)
}

function r7() {
    return !!Ck()
}

function o7() {
    return yr(Hn.FILE_UPLOAD)
}

function s7() {
    return yr(Hn.GIZMO_TAG)
}

function a7() {
    return yr(Hn.REASON)
}

function i7() {
    return yr(Hn.DEEP_RESEARCH)
}

function c7() {
    return xt(({
        modelLimits: t
    }) => t).filter(dr)
}

function l7() {
    return xt(({
        limitsProgress: t
    }) => t)
}
const yk = $t(() => null),
    bk = $t(() => null),
    Sk = $t(() => null);
var Ud = (e => (e.UnexpectedSSOLogin = "unexpected_sso_login", e.SSOMismatch = "sso_mismatch", e.RequireSSOLogin = "require_sso_login", e))(Ud || {});
const wk = Object.freeze(new Set(Object.values(Ud)));

function Tk(e) {
    return e ? wk.has(e) : !1
}
const Ak = $t(() => null),
    Bd = 58 * 60 * 1e3,
    Ik = Bd,
    fa = {};

function kk(e, t) {
    fa[e] = t
}

function Ek(e) {
    return e != null && "__type" in e && e.__type in fa ? fa[e.__type](e) : e
}
const xk = JSON.stringify,
    Rk = Ad(Ok);

function Ok() {
    return new wg({
        defaultOptions: {
            queries: {
                gcTime: Ik,
                staleTime: Bd,
                retry: !1,
                retryOnMount: !1,
                refetchOnMount: !1,
                refetchOnWindowFocus: !1,
                refetchOnReconnect: !1,
                networkMode: "always",
                queryKeyHashFn: xk,
                experimental_prefetchInRender: !0,
                throwOnError: (e, t) => {
                    if (!(e instanceof Ve || e instanceof ht)) try {
                        M.addError(e, {
                            queryKey: t.queryKey.map(String).join(","),
                            queryHash: t.queryHash
                        })
                    } catch (n) {
                        console.error(n)
                    }
                    return !1
                }
            },
            hydrate: {
                deserializeData: Ek
            }
        }
    })
}

function mn() {
    return Rk(UI())
}
const Mk = (e, t, n) => {
        const r = e[t];
        return r ? typeof r == "function" ? r() : Promise.resolve(r) : new Promise((o, s) => {
            (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(s.bind(null, new Error("Unknown variable dynamic import: " + t + (t.split("/").length !== n ? ". Note that variables only represent file names one level deep." : ""))))
        })
    },
    ai = "en-US",
    u7 = ["am", "ar", "bg-BG", "bn-BD", "bs-BA", "ca-ES", "cs-CZ", "da-DK", "de-DE", "el-GR", "en-US", "es-419", "es-ES", "et-EE", "fi-FI", "fr-CA", "fr-FR", "gu-IN", "hi-IN", "hr-HR", "hu-HU", "hy-AM", "id-ID", "is-IS", "it-IT", "ja-JP", "ka-GE", "kk", "kn-IN", "ko-KR", "lt", "lv-LV", "mk-MK", "ml", "mn", "mr-IN", "ms-MY", "my-MM", "nb-NO", "nl-NL", "pa", "pl-PL", "pt-BR", "pt-PT", "ro-RO", "ru-RU", "sk-SK", "sl-SI", "so-SO", "sq-AL", "sr-RS", "sv-SE", "sw-TZ", "ta-IN", "te-IN", "th-TH", "tl", "tr-TR", "uk-UA", "ur", "vi-VN", "zh-CN", "zh-HK", "zh-TW"],
    d7 = {
        am: "አማርኛ",
        ar: "العربية",
        "bg-BG": "български",
        "bn-BD": "বাংলা",
        "bs-BA": "bosanski",
        "ca-ES": "català",
        "cs-CZ": "čeština",
        "da-DK": "dansk",
        "de-DE": "Deutsch",
        "el-GR": "Ελληνικά",
        "en-US": "English (US)",
        "es-419": "español (Latinoamérica)",
        "es-ES": "español (España)",
        "et-EE": "eesti",
        "fi-FI": "suomi",
        "fr-CA": "français (Canada)",
        "fr-FR": "français (France)",
        "gu-IN": "ગુજરાતી",
        "hi-IN": "हिन्दी",
        "hr-HR": "hrvatski",
        "hu-HU": "magyar",
        "hy-AM": "հայերեն",
        "id-ID": "Indonesia",
        "is-IS": "íslenska",
        "it-IT": "italiano",
        "ja-JP": "日本語",
        "ka-GE": "ქართული",
        kk: "қазақ тілі",
        "kn-IN": "ಕನ್ನಡ",
        "ko-KR": "한국어",
        lt: "lietuvių",
        "lv-LV": "latviešu",
        "mk-MK": "македонски",
        ml: "മലയാളം",
        mn: "монгол",
        "mr-IN": "मराठी",
        "ms-MY": "Bahasa Melayu",
        "my-MM": "မြန်မာ",
        "nb-NO": "norsk bokmål",
        "nl-NL": "Nederlands",
        pa: "ਪੰਜਾਬੀ",
        "pl-PL": "polski",
        "pt-BR": "português (Brasil)",
        "pt-PT": "português (Portugal)",
        "ro-RO": "română",
        "ru-RU": "русский",
        "sk-SK": "slovenčina",
        "sl-SI": "slovenščina",
        "so-SO": "Soomaali",
        "sq-AL": "shqip",
        "sr-RS": "српски",
        "sv-SE": "svenska",
        "sw-TZ": "Kiswahili",
        "ta-IN": "தமிழ்",
        "te-IN": "తెలుగు",
        "th-TH": "ไทย",
        tl: "Tagalog",
        "tr-TR": "Türkçe",
        "uk-UA": "українська",
        ur: "اردو",
        "vi-VN": "Tiếng Việt",
        "zh-CN": "简体中文",
        "zh-HK": "繁體中文（香港）",
        "zh-TW": "繁體中文（台灣）"
    },
    Dr = {
        am: "am",
        ar: "ar",
        bg: "bg-BG",
        "bg-bg": "bg-BG",
        bn: "bn-BD",
        "bn-bd": "bn-BD",
        bs: "bs-BA",
        "bs-ba": "bs-BA",
        ca: "ca-ES",
        "ca-es": "ca-ES",
        cs: "cs-CZ",
        "cs-cz": "cs-CZ",
        da: "da-DK",
        "da-dk": "da-DK",
        de: "de-DE",
        "de-de": "de-DE",
        el: "el-GR",
        "el-gr": "el-GR",
        en: "en-US",
        "en-us": "en-US",
        es: "es-ES",
        "es-es": "es-ES",
        "es-419": "es-419",
        "es-ar": "es-419",
        "es-bo": "es-419",
        "es-br": "es-419",
        "es-bz": "es-419",
        "es-cl": "es-419",
        "es-co": "es-419",
        "es-cr": "es-419",
        "es-cu": "es-419",
        "es-do": "es-419",
        "es-ec": "es-419",
        "es-gt": "es-419",
        "es-hn": "es-419",
        "es-jp": "es-419",
        "es-mx": "es-419",
        "es-ni": "es-419",
        "es-pa": "es-419",
        "es-pe": "es-419",
        "es-pr": "es-419",
        "es-py": "es-419",
        "es-sv": "es-419",
        "es-us": "es-419",
        "es-uy": "es-419",
        "es-ve": "es-419",
        et: "et-EE",
        "et-ee": "et-EE",
        fi: "fi-FI",
        "fi-fi": "fi-FI",
        fr: "fr-FR",
        "fr-ca": "fr-CA",
        "fr-fr": "fr-FR",
        gu: "gu-IN",
        "gu-in": "gu-IN",
        hi: "hi-IN",
        "hi-in": "hi-IN",
        hr: "hr-HR",
        "hr-hr": "hr-HR",
        hu: "hu-HU",
        "hu-hu": "hu-HU",
        hy: "hy-AM",
        "hy-am": "hy-AM",
        id: "id-ID",
        "id-id": "id-ID",
        is: "is-IS",
        "is-is": "is-IS",
        it: "it-IT",
        "it-it": "it-IT",
        ja: "ja-JP",
        "ja-jp": "ja-JP",
        ka: "ka-GE",
        "ka-ge": "ka-GE",
        kk: "kk",
        kn: "kn-IN",
        "kn-in": "kn-IN",
        ko: "ko-KR",
        "ko-kr": "ko-KR",
        lt: "lt",
        lv: "lv-LV",
        "lv-lv": "lv-LV",
        mk: "mk-MK",
        "mk-mk": "mk-MK",
        ml: "ml",
        mn: "mn",
        mr: "mr-IN",
        "mr-in": "mr-IN",
        ms: "ms-MY",
        "ms-my": "ms-MY",
        my: "my-MM",
        "my-mm": "my-MM",
        nb: "nb-NO",
        "nb-no": "nb-NO",
        nl: "nl-NL",
        "nl-nl": "nl-NL",
        pa: "pa",
        pl: "pl-PL",
        "pl-pl": "pl-PL",
        pt: "pt-BR",
        "pt-br": "pt-BR",
        "pt-pt": "pt-PT",
        "pt-ao": "pt-PT",
        "pt-ch": "pt-PT",
        "pt-cv": "pt-PT",
        "pt-fr": "pt-PT",
        "pt-gq": "pt-PT",
        "pt-gw": "pt-PT",
        "pt-lu": "pt-PT",
        "pt-mo": "pt-PT",
        "pt-mz": "pt-PT",
        "pt-st": "pt-PT",
        "pt-tl": "pt-PT",
        ro: "ro-RO",
        "ro-ro": "ro-RO",
        ru: "ru-RU",
        "ru-ru": "ru-RU",
        sk: "sk-SK",
        "sk-sk": "sk-SK",
        sl: "sl-SI",
        "sl-si": "sl-SI",
        so: "so-SO",
        "so-so": "so-SO",
        sq: "sq-AL",
        "sq-al": "sq-AL",
        sr: "sr-RS",
        "sr-rs": "sr-RS",
        sv: "sv-SE",
        "sv-se": "sv-SE",
        sw: "sw-TZ",
        "sw-tz": "sw-TZ",
        ta: "ta-IN",
        "ta-in": "ta-IN",
        te: "te-IN",
        "te-in": "te-IN",
        th: "th-TH",
        "th-th": "th-TH",
        tl: "tl",
        tr: "tr-TR",
        "tr-tr": "tr-TR",
        uk: "uk-UA",
        "uk-ua": "uk-UA",
        ur: "ur",
        vi: "vi-VN",
        "vi-vn": "vi-VN",
        zh: "zh-CN",
        "zh-cn": "zh-CN",
        "zh-hans": "zh-CN",
        "zh-hans-cn": "zh-CN",
        "zh-tw": "zh-TW",
        "zh-hant": "zh-TW",
        "zh-hant-tw": "zh-TW",
        "zh-hk": "zh-HK",
        "zh-hant-hk": "zh-HK"
    },
    Nd = new Set(["ar"]);

function Lk(e) {
    const t = e.replace("_", "-").toLowerCase();
    if (t in Dr) return Dr[t];
    const n = t.split("-");
    for (let r = n.length - 1; r >= 1; r--) {
        const o = n.slice(0, r).join("-");
        if (o in Dr) return Dr[o]
    }
    return null
}
const Fd = {},
    Pk = async e => e === ai ? Fd : (await Mk(Object.assign({
        "./locales/am.json": () => R(() =>
            import ("./i1ll41sqs17abmv0.js"), []),
        "./locales/ar.json": () => R(() =>
            import ("./k0dqihxnjoqmso12.js"), []),
        "./locales/bg-BG.json": () => R(() =>
            import ("./nofireucpusz66tr.js"), []),
        "./locales/bn-BD.json": () => R(() =>
            import ("./hgloo3zanxd611v5.js"), []),
        "./locales/bs-BA.json": () => R(() =>
            import ("./el5esuis658lp05r.js"), []),
        "./locales/ca-ES.json": () => R(() =>
            import ("./h4c7k4eghg1jm5pd.js"), []),
        "./locales/cs-CZ.json": () => R(() =>
            import ("./b088crklhglub246.js"), []),
        "./locales/da-DK.json": () => R(() =>
            import ("./gllcfhgc1knb9rjg.js"), []),
        "./locales/de-DE.json": () => R(() =>
            import ("./jzcuomxhfvnwmnc6.js"), []),
        "./locales/el-GR.json": () => R(() =>
            import ("./iju5ip7oel80yzfz.js"), []),
        "./locales/es-419.json": () => R(() =>
            import ("./cag76fk2vvt82645.js"), []),
        "./locales/es-ES.json": () => R(() =>
            import ("./mx29gki7vgvfppdh.js"), []),
        "./locales/et-EE.json": () => R(() =>
            import ("./jh8veumvo0u7xjat.js"), []),
        "./locales/fi-FI.json": () => R(() =>
            import ("./d86uh74mbzoeekqg.js"), []),
        "./locales/fr-CA.json": () => R(() =>
            import ("./fqgnh3h4oockcz9b.js"), []),
        "./locales/fr-FR.json": () => R(() =>
            import ("./f6guefyerhrv067j.js"), []),
        "./locales/gu-IN.json": () => R(() =>
            import ("./hn3vzou92thcxsym.js"), []),
        "./locales/he-IL.json": () => R(() =>
            import ("./iw6ytgq595cykpij.js"), []),
        "./locales/hi-IN.json": () => R(() =>
            import ("./e8xec4apih051a20.js"), []),
        "./locales/hr-HR.json": () => R(() =>
            import ("./n5taawtnr3hnyain.js"), []),
        "./locales/hu-HU.json": () => R(() =>
            import ("./oukxvtrf720vlplo.js"), []),
        "./locales/hy-AM.json": () => R(() =>
            import ("./lltosl3gwuixo5r7.js"), []),
        "./locales/id-ID.json": () => R(() =>
            import ("./kimkefhgqyrykfew.js"), []),
        "./locales/is-IS.json": () => R(() =>
            import ("./fdljv0xyie2rxz72.js"), []),
        "./locales/it-IT.json": () => R(() =>
            import ("./dh8o7umxlaxw0dry.js"), []),
        "./locales/ja-JP.json": () => R(() =>
            import ("./m72pp8xcivveffjt.js"), []),
        "./locales/ka-GE.json": () => R(() =>
            import ("./myiv3bywrfjylhzs.js"), []),
        "./locales/kk.json": () => R(() =>
            import ("./bn46i67f4re2r8uk.js"), []),
        "./locales/kn-IN.json": () => R(() =>
            import ("./nthsg8fj7dey1k9t.js"), []),
        "./locales/ko-KR.json": () => R(() =>
            import ("./kfuyp98x8t5cbuih.js"), []),
        "./locales/lt.json": () => R(() =>
            import ("./dqzjvcdfx27oiq9m.js"), []),
        "./locales/lv-LV.json": () => R(() =>
            import ("./eh0yehyrevxts6cx.js"), []),
        "./locales/mk-MK.json": () => R(() =>
            import ("./nazt0kk17tyctby7.js"), []),
        "./locales/ml.json": () => R(() =>
            import ("./cwovnwd7gox37t74.js"), []),
        "./locales/mn.json": () => R(() =>
            import ("./j58h2qxbqrf3b0ax.js"), []),
        "./locales/mr-IN.json": () => R(() =>
            import ("./bgox2bj459scw2c4.js"), []),
        "./locales/ms-MY.json": () => R(() =>
            import ("./l2n57vs5f3uqfykb.js"), []),
        "./locales/my-MM.json": () => R(() =>
            import ("./ik7h4eqtnd7k3r97.js"), []),
        "./locales/nb-NO.json": () => R(() =>
            import ("./nwl0m5e9791mgp2c.js"), []),
        "./locales/nl-NL.json": () => R(() =>
            import ("./o7hj1yugn0awyi94.js"), []),
        "./locales/pa.json": () => R(() =>
            import ("./kgov4e2dysluy2hb.js"), []),
        "./locales/pl-PL.json": () => R(() =>
            import ("./hh233w6v49l1ofk3.js"), []),
        "./locales/pt-BR.json": () => R(() =>
            import ("./dqkx98wrp0rpp2et.js"), []),
        "./locales/pt-PT.json": () => R(() =>
            import ("./nfvqlkp04vqpf53f.js"), []),
        "./locales/ro-RO.json": () => R(() =>
            import ("./l0l63qfebxjm4svd.js"), []),
        "./locales/ru-RU.json": () => R(() =>
            import ("./kslsteb27wz9oil6.js"), []),
        "./locales/sk-SK.json": () => R(() =>
            import ("./cx3lpl799pltnm58.js"), []),
        "./locales/sl-SI.json": () => R(() =>
            import ("./cn3ptgctqw5f1nuc.js"), []),
        "./locales/so-SO.json": () => R(() =>
            import ("./fuwbzy8h5r5kfa4p.js"), []),
        "./locales/sq-AL.json": () => R(() =>
            import ("./d5vv2oty3h8n2tjk.js"), []),
        "./locales/sr-RS.json": () => R(() =>
            import ("./cejcjort5qdryut5.js"), []),
        "./locales/sv-SE.json": () => R(() =>
            import ("./g31j92vt7katq5h6.js"), []),
        "./locales/sw-TZ.json": () => R(() =>
            import ("./dbpphaynszbv0cwb.js"), []),
        "./locales/ta-IN.json": () => R(() =>
            import ("./ej368rmdsujnjv1q.js"), []),
        "./locales/te-IN.json": () => R(() =>
            import ("./ia4fkzdig1csatb7.js"), []),
        "./locales/th-TH.json": () => R(() =>
            import ("./oxfhj18ptet3vbz0.js"), []),
        "./locales/tl.json": () => R(() =>
            import ("./opogiguaoiac12dr.js"), []),
        "./locales/tr-TR.json": () => R(() =>
            import ("./fv0uufm9vmz6gs3s.js"), []),
        "./locales/uk-UA.json": () => R(() =>
            import ("./kauvst1hrx629grm.js"), []),
        "./locales/ur.json": () => R(() =>
            import ("./mqw8656r5h54amod.js"), []),
        "./locales/vi-VN.json": () => R(() =>
            import ("./gxsoih82wwmvjlpi.js"), []),
        "./locales/zh-CN.json": () => R(() =>
            import ("./nqehszqik6czssla.js"), []),
        "./locales/zh-HK.json": () => R(() =>
            import ("./nf28lovn93pm2ud3.js"), []),
        "./locales/zh-TW.json": () => R(() =>
            import ("./bsmbpdig74x63nin.js"), [])
    }), `./locales/${e}.json`, 3)).default,
    Dk = async (e, t, n) => {
        try {
            const r = await Pk(e);
            t(r)
        } catch (r) {
            n(r)
        }
    },
    _n = "@@";
let ii = [],
    uo = new Map;

function cn(e, t, n, r) {
    if (uo.has(e) || e === "Ref") throw new Error(`Already registered pickler ${e}`);
    const o = {
        key: e,
        test: t,
        pickle: n,
        unpickle: r
    };
    uo.set(e, o), ii.push(o)
}

function jd() {
    const e = [],
        t = new Map;
    return function(n, r) {
        for (; e.length && e[e.length - 1][0] !== this;) {
            const s = e.pop()[1];
            typeof s == "object" && s != null && t.set(s, t.size)
        }
        const o = this[n];
        if (typeof o == "object" && o != null) {
            const s = t.get(o);
            if (s != null) return {
                [_n]: "Ref",
                "": s
            }
        }
        for (const s of ii)
            if (s.test(o)) {
                const a = {
                    [_n]: s.key,
                    "": s.pickle(o)
                };
                return e.push([a, o]), a
            }
        if (typeof r == "object" && r != null) {
            if (_n in r) throw new Error(`Unexpected ${_n} property`);
            e.push([r, o])
        }
        return r
    }
}

function $k() {
    const e = [];
    return function(t, n) {
        if (typeof n != "object" || n == null) return n;
        if (_n in n) {
            const {
                [_n]: r, "": o
            } = n;
            if (r === "Ref") return e[o];
            const s = uo.get(r);
            if (!s) throw Error(`Unknown pickle key ${r}`);
            if (n = s.unpickle(o), typeof n != "object" || n == null) return n
        }
        return e.push(n), n
    }
}

function Uk() {
    ii.length = 0, uo.clear(), cn("Map", e => e instanceof Map, e => [...e.entries()], e => new Map(e)), cn("Set", e => e instanceof Set, e => [...e.keys()], e => new Set(e)), cn("Date", e => e instanceof Date, e => e.toISOString(), e => new Date(e)), cn("RegExp", e => e instanceof RegExp, e => [e.source, e.flags], ([e, t]) => new RegExp(e, t)), cn("Number", e => typeof e == "number" && (Object.is(e, -0) || !isFinite(e) || isNaN(e)), e => Object.is(e, -0) ? "-0" : String(e), e => Number(e)), cn("BigInt", e => typeof e == "bigint", e => String(e), e => BigInt(e))
}
Uk();

function Bk(e) {
    if (e == null) return null;
    const t = Pn();
    return t.authStatus !== Tn.LoggedIn ? null : {
        workspaceId: e.id,
        userId: t.user.id
    }
}

function Gd(e, t) {
    const n = Bk(e);
    return n == null ? null : `cache/${n.userId}/${n.workspaceId}/${t}`
}
const Nk = 1e3 * 60 * 60 * 24;

function Fk(e, t, n) {
    const r = Gd(e, t);
    if (r == null) return;
    const o = localStorage.getItem(r);
    if (o != null) try {
        const {
            value: s,
            timestamp: a,
            version: i,
            used: c
        } = JSON.parse(o, $k());
        if (i !== n || Date.now() - a > Nk) {
            localStorage.removeItem(r);
            return
        }
        return {
            localStorageKey: r,
            value: s,
            version: i,
            used: typeof c == "number" ? c : 0
        }
    } catch {
        return
    }
}
const Is = {};

function f7(e, t, n) {
    if (e == null) return;
    if (t in Is) return Is[t];
    const r = Fk(e, t, n);
    if (Is[t] = r ? .value, r != null) return r.used + 1 >= 4 ? localStorage.removeItem(r.localStorageKey) : localStorage.setItem(r.localStorageKey, JSON.stringify({
        timestamp: Date.now(),
        value: r.value,
        version: r.version,
        used: r.used + 1
    }, jd())), r.value
}

function p7(e, t, n, r) {
    const o = Gd(e, t);
    o != null && localStorage.setItem(o, JSON.stringify({
        value: n,
        timestamp: Date.now(),
        version: r
    }, jd()))
}

function Vd() {
    for (const e of Object.keys(localStorage)) e.startsWith("cache/") && localStorage.removeItem(e)
}
const jk = "session",
    Hd = "refresh";
let pa;
typeof window < "u" && window.BroadcastChannel !== void 0 && (pa = new window.BroadcastChannel(jk), pa.onmessage = e => {
    e.data === Hd && (document.hidden ? window.addEventListener("visibilitychange", () => {
        document.hidden || (window.location.href = "/")
    }) : setTimeout(() => {
        window.location.href = "/"
    }, 300))
});

function Gk() {
    pa ? .postMessage(Hd)
}

function Vk() {
    Gk(), Vd()
}

function fo() {
    Vk(), window.location.href = "/?refresh_account=true"
}
const Hk = "dgkjq2bp",
    Wk = Hk;

function Wd() {
    return R(() =>
        import ("./mj4756esfnkkh4nm.js").then(e => e.i), __vite__mapDeps([2, 1]))
}

function qc(e, t) {
    if (e.id) {
        const n = {
            app_id: Wk,
            user_id: e.id,
            name: e.name,
            email: e.email,
            user_hash: e.intercom_hash,
            hide_default_launcher: !0,
            is_chatgpt_user: !0,
            paid_chatgpt_subscriber: t ? .hasPaidSubscription,
            paid_chatgpt_active_until: t ? .subscriptionExpiresAt,
            chatgpt_plan_type: t ? .planType
        };
        Wd().then(r => r ? .boot(n))
    }
}

function zk(e, t) {
    Wd().then(n => n ? .trackEvent(e, t))
}
const Kc = "OAI-Language",
    Yc = "OAI-Location";
class zd extends Error {
    name = "ClientRequestMismatchedAuthError"
}

function qk(e, t = "fetch") {
    e.url.includes("/aip");
    const n = e.detail,
        r = n ? .conversation_detail_metadata;
    if (r && vk.updateDetails(r), e.url.includes("/accounts/check/") && e.code === "request_account_access" && Sk.setState({
            accountName: n ? .account_name,
            ownerEmail: n ? .owner_email,
            userEmail: n ? .user_email,
            accountId: n ? .account_id,
            hasActiveRequest: n ? .has_active_request,
            workspacePlanType: n ? .workspace_plan_type
        }), e.code === "all_accounts_blocked" && bk.setState({
            userEmail: n ? .user_email
        }), Tk(e.code) && Ak.setState({
            accountName: n ? .account_name,
            errorCode: e.code
        }), e.code === "trigger_account_transfer") {
        yk.setState({
            destinationWorkspaceId: n ? .workspace_id,
            destinationWorkspaceName: n ? .workspace_name,
            destinationWorkspaceProfilePictureUrl: n ? .workspace_profile_picture_url,
            destinationWorkspacePlanType: n ? .workspace_plan_type
        });
        return
    }
    if (e.code === "deactivated_workspace") {
        window.location.href.includes("/workspace/deactivated") || (window.location.href = "/workspace/deactivated");
        return
    }
    if ((e.code === "expired_session_key" || e.code === "token_expired" || e.code === "token_invalidated" || e.jsonError ? .error ? .code === "token_invalidated") && (M.addAction("Token expired", {
            url: e.url,
            error: n
        }), typeof window < "u" && window._oaiHandleSessionExpired ? .(t, JSON.stringify(n))), e.code === "invalid_account_id_header" && typeof X.getCookie(K.Workspace) == "string") {
        X.deleteCookie(K.Workspace), X.deleteCookie(K.WorkspaceResidencyRegion), fo();
        return
    }
}

function Kk(e) {
    M.addAction("RequestError", {
        url: e.url,
        message: e.message,
        status: e.status,
        json: e.json,
        deviceId: kt()
    })
}
class b {
    static clientLocale = ai;
    static auth0Client = null;
    static userLocation = null;
    static refreshAccessTokenLayer = null;
    static setClientLocale(t) {
        this.clientLocale = t
    }
    static getLocale() {
        return this.clientLocale
    }
    static setRefreshAccessTokenLayer(t) {
        this.refreshAccessTokenLayer = t
    }
    static setUserLocation(t) {
        t ? this.userLocation = `${t.latitude},${t.longitude},${t.accuracy}` : this.userLocation = null
    }
    static getUnauthHeaders() {
        const t = {
            [Kc]: this.getLocale(),
            [vs]: kt()
        };
        return this.userLocation && (t[Yc] = this.userLocation), {
            authOption: fe.Anonymous,
            additionalHeaders: t
        }
    }
    static async getAuthedHeaders(t = {}) {
        const n = t.accessToken ? ? (await zr(mn())) ? .accessToken;
        return this.getAuthedHeadersWithAccessToken(n, t)
    }
    static getAuthedHeadersWithAccessToken(t, n = {}) {
        const r = {
            [Kc]: this.getLocale(),
            [vs]: kt()
        };
        if (this.userLocation && (r[Yc] = this.userLocation), t == null) {
            if (n.isAuthOptional === !0) return r;
            throw new zd("No access token when trying to use AuthHeader")
        }
        r.Authorization = `Bearer ${t}`;
        const o = X.getCookie(K.Workspace),
            s = X.getCookie(K.WorkspaceResidencyRegion);
        return typeof o == "string" && o !== qt && (r["ChatGPT-Account-ID"] = o, r["ChatGPT-Residency-Region"] = s ? ? ""), r
    }
    static async fetch(t, n, r = {}) {
        const o = {
            credentials: "include",
            ...n
        };
        let s;
        try {
            s = await fetch(t, o)
        } catch (a) {
            throw a instanceof Error ? Ve.createWithErrorMessage(t, "server", a.message) : a
        }
        if (s.status === 401) {
            let i = await s.clone().json(),
                c = new Ve(t, s.status, i);
            if (c.code === "token_expired" && this.refreshAccessTokenLayer ? .get("shouldRefreshAccessToken", !1)) {
                const d = kt();
                M.addAction("Refreshing access token due to token_expired error.", {
                    url: c.url,
                    error: c.detail,
                    deviceId: d
                }), await EI(mn());
                const p = await b.getAuthedHeaders(),
                    h = { ...o,
                        headers: { ...o.headers,
                            ...p
                        }
                    };
                s = await fetch(t, h), s.status === 200 ? M.addAction("Request succeeded after refresh.", {
                    url: t,
                    deviceId: d
                }) : M.addAction("Request failed after refresh.", {
                    url: t,
                    deviceId: d
                })
            }
        }
        if (s.status >= 400) {
            const a = await s.text();
            let i;
            try {
                i = JSON.parse(a)
            } catch {
                i = {
                    detail: {
                        code: "not_json_response",
                        text: a ? .substring(0, 1e3)
                    }
                }
            }
            const c = new Ve(t, s.status, i);
            throw qk(c), Kk(c), r.intercomEventOnError && zk(r.intercomEventOnError, {
                url: t,
                status: s.status.toString()
            }), c
        }
        return s.status === 204 ? {} : r.skipJsonTransform ? s : s.json()
    }
    static async fetch2(t, {
        method: n = "GET",
        params: r,
        body: o,
        intercomEventOnError: s,
        authOption: a,
        accessToken: i,
        additionalHeaders: c,
        skipJsonTransform: l
    } = {}) {
        return r && (t += "?" + new URLSearchParams(r).toString()), this.fetch(t, {
            method: n,
            body: o,
            headers: { ...a === fe.Anonymous ? this.getUnauthHeaders().additionalHeaders : await this.getAuthedHeaders({
                    isAuthOptional: a === fe.SendIfAvailable,
                    accessToken: i
                }),
                ...o != null && !(o instanceof FormData) ? {
                    "Content-Type": "application/json"
                } : null,
                ...c,
                [vs]: kt()
            }
        }, {
            intercomEventOnError: s,
            skipJsonTransform: l
        })
    }
    static async get(t, n = {}) {
        return this.fetch2(t, n)
    }
    static serializePath(t, n) {
        let r = t;
        for (const [o, s] of Object.entries(n)) r = r.replace(`{${o}}`, s.toString());
        if (r.includes("{") || r.includes("}")) throw new Error(`Failed to replace all path placeholders in ${t} with ${n}`);
        return r
    }
    static serializeQueryParams(t) {
        if (!t) return "";
        const n = new URLSearchParams;
        for (const [o, s] of Object.entries(t))
            if (Array.isArray(s))
                for (const a of s) n.append(o, a.toString());
            else s != null && n.append(o, s.toString());
        const r = n.toString();
        return r.length === 0 ? "" : `?${r}`
    }
    static async getFetchOpts(t, n) {
        const r = n ? .parameters && "query" in n.parameters ? n.parameters.query : void 0,
            o = n ? .parameters && "path" in n.parameters ? n.parameters.path : {},
            s = b.serializePath(t, o),
            a = b.serializeQueryParams(r);
        let i = A,
            c = { ...n
            };
        return n ? .anonAware && (ao(await zr(mn())) || (i = Qs, c = { ...c,
            ...b.getUnauthHeaders()
        })), {
            url: `${i}${s}${a}`,
            fetchOpts: c
        }
    }
    static async safeGet(t, ...n) {
        const {
            url: r,
            fetchOpts: o
        } = await b.getFetchOpts(t, n[0]);
        return this.fetch2(r, o)
    }
    static async safePost(t, ...n) {
        const r = n[0],
            {
                url: o,
                fetchOpts: s
            } = await b.getFetchOpts(t, r);
        return this.fetch2(o, { ...s,
            method: "POST",
            body: r && "requestBody" in r ? JSON.stringify(r.requestBody) : void 0
        })
    }
    static async safeDelete(t, ...n) {
        const r = n[0],
            {
                url: o,
                fetchOpts: s
            } = await b.getFetchOpts(t, r);
        return this.fetch2(o, { ...s,
            method: "DELETE",
            body: r && "requestBody" in r ? JSON.stringify(r.requestBody) : void 0
        })
    }
    static async safePatch(t, ...n) {
        const r = n[0],
            {
                url: o,
                fetchOpts: s
            } = await b.getFetchOpts(t, r);
        return this.fetch2(o, { ...s,
            method: "PATCH",
            body: r && "requestBody" in r ? JSON.stringify(r.requestBody) : void 0
        })
    }
    static async delete(t, n = {}) {
        return this.fetch2(t, { ...n,
            method: "DELETE"
        })
    }
    static async post(t, n, r = {}) {
        return this.fetch2(t, { ...r,
            method: "POST",
            body: n instanceof FormData ? n : JSON.stringify(n)
        })
    }
    static async relative(t, n) {
        if (t.startsWith("/") || (t = `/${t}`, console.warn("Using relative path without leading slash, this will be deprecated in the future")), t.startsWith("http")) throw new Error("Relative path cannot start with http");
        const r = ao(await zr(mn()));
        let o = A,
            s = {};
        return r || (o = Qs, s = b.getUnauthHeaders()), n && (typeof n == "function" ? s = { ...s,
            ...n(!r)
        } : s = { ...s,
            ...n
        }), {
            url: `${o}${t}`,
            options: s
        }
    }
    static async getAnonAware(t, n) {
        const {
            url: r,
            options: o
        } = await this.relative(t, n);
        return b.get(r, o)
    }
    static async putAnonAware(t, n) {
        const {
            url: r,
            options: o
        } = await this.relative(t, n);
        return b.put(r, o)
    }
    static async postAnonAware(t, n, r) {
        const {
            url: o,
            options: s
        } = await this.relative(t, r);
        return b.post(o, n, s)
    }
    static async deleteWithPayload(t, n, r = {}) {
        return this.fetch2(t, { ...r,
            method: "DELETE",
            body: JSON.stringify(n)
        })
    }
    static async patch(t, n, r = {}) {
        return this.fetch2(t, { ...r,
            method: "PATCH",
            body: JSON.stringify(n)
        })
    }
    static async put(t, n, r = {}) {
        return this.fetch2(t, { ...r,
            method: "PUT",
            body: JSON.stringify(n)
        })
    }
    static async * streamedJsonPost(t, n, r = {}) {
        const s = (await this.fetch2(t, { ...r,
            method: "POST",
            body: JSON.stringify(n),
            skipJsonTransform: !0
        })).body;
        if (!s) return;
        const a = s.getReader(),
            i = new TextDecoder;
        let c = !1,
            l = "";
        for (; !c;) {
            const d = await a.read();
            if (c = d.done, c && d.value == null) break;
            const p = l + i.decode(d.value, {
                stream: !0
            });
            l = "";
            const h = p.split(`
`).filter(g => !!g.trim());
            for (let g = 0; g < h.length; g++) try {
                yield JSON.parse(h[g])
            } catch {
                l = h[g];
                break
            }
        }
        l.length > 0 && (yield JSON.parse(l))
    }
}
const {
    useDebugValue: Yk
} = ne, {
    useSyncExternalStoreWithSelector: Zk
} = Vu, Qk = e => e;

function qd(e, t = Qk, n) {
    const r = Zk(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
    return Yk(r), r
}
let Jk = 0;
const Kd = u.createContext(null);

function Xk({
    children: e
}) {
    const [t] = u.useState(() => ({}));
    return u.createElement(Kd.Provider, {
        value: t
    }, e)
}

function Zo(e) {
    if (e === void 0) return Zo;
    const t = typeof e == "function" ? e : () => e;
    let n;
    const r = u.createContext(null);
    return class {
        static useState(s = eE, a) {
            return qd(this.useStore(), s, a)
        }
        static useStore() {
            return this.useStoreWithInit()
        }
        static useStoreWithInit(...s) {
            const a = u.useContext(r),
                i = u.useContext(Kd);
            if (a) return a;
            const c = this.name ? ? "Store";
            if (!i) throw new Error(`No StoreScope found. Must use ${c} within a <StoreScopeProvider> or <${c}.Provider>.`);
            if (n || (n = `${c}:${Jk++}`), n in i) return i[n];
            if (typeof t == "function" && t.length > 0 && s.length === 0) throw new Error(`Not initialized. First call ${c}.useStoreWithInit(value) or <${c}.Provider store={() => new ${c}(value)}>`);
            return i[n] = new this(...s)
        }
        static Provider({
            store: s,
            children: a
        }) {
            const [i] = u.useState(s);
            return u.createElement(r.Provider, {
                value: i
            }, a)
        }
        constructor(s) {
            const a = t(s);
            Object.assign(this, nn(typeof a == "function" ? a : () => a))
        }
    }
}

function eE(e) {
    return e
}

function Zc(e) {
    return e != null && e in Am
}
const tE = 60 * 60 * 24 * 30 * 12,
    Yd = e => {
        X.setBooleanCookie(K.AllowNonessential, e === "all_cookies", {
            maxAge: tE,
            domain: A1
        }), M.addAction("update-cookie-consent.cookie.success")
    };
async function Zd(e) {
    if (Yd(e), Pn().authStatus === Tn.LoggedIn) try {
        await b.safePost("/user_consent", {
            authOption: fe.Required,
            requestBody: {
                cookie_consent_status: e
            }
        }), M.addAction("update-cookie-consent.backend.success")
    } catch (n) {
        M.addError(n)
    }
}
const ci = Ro({
        queryKey: ["cookie-consent"],
        queryFn: async () => {
            const {
                isUserInNewCookieConsentFlow: e,
                isUserInPioneerHR: t,
                userCountry: n
            } = Pn();
            if (!e) return M.addAction("get-cookie-consent.use-anonymous-default.consent-not-required", {
                country: n
            }), {
                cookie_consent_status: null,
                is_consent_required: !1
            };
            if (n != null && !Zc(n)) return M.addAction("get-cookie-consent.use-anonymous-default.consent-not-required", {
                country: n
            }), {
                cookie_consent_status: null,
                is_consent_required: !1
            };
            if (Zc(n) && !t) return M.addAction("get-cookie-consent.use-anonymous-default.consent-required-essential-only", {
                country: n
            }), {
                cookie_consent_status: "essential_only",
                is_consent_required: !0
            };
            let r;
            try {
                r = await b.safeGet("/user_consent", {
                    authOption: fe.Required
                }), M.addAction("get-cookie-consent.use-authenticated", {
                    country: n
                })
            } catch (s) {
                s instanceof zd || M.addError(s, {
                    country: n
                }), r = {
                    cookie_consent_status: null,
                    is_consent_required: !0
                }
            }
            const o = X.getBooleanCookie(K.AllowNonessential);
            return r.cookie_consent_status != null && o !== (r.cookie_consent_status === "all_cookies") ? (Yd(r.cookie_consent_status), M.addAction("get-cookie-consent.update-cookie-consent-cookie", {
                country: n
            })) : o !== void 0 && r.is_consent_required && r.cookie_consent_status == null && (Zd(o ? "all_cookies" : "essential_only"), M.addAction("get-cookie-consent.update-cookie-consent-backend", {
                country: n
            }), r = { ...r,
                cookie_consent_status: o ? "all_cookies" : "essential_only"
            }), r
        }
    }),
    g7 = () => {
        const {
            country: e
        } = BI(), t = tu();
        return nu({
            mutationFn: async n => Zd(n),
            onSuccess: (n, r) => {
                t.setQueryData(ci.queryKey, o => {
                    if (!o) {
                        M.addError(new Error("Cookie consent query data is undefined during mutation"));
                        return
                    }
                    return { ...o,
                        cookie_consent_status: r
                    }
                })
            },
            onError: n => {
                M.addError(n, {
                    country: e
                })
            }
        })
    };
class ks extends Zo()(() => ({
    cookieConsentBannerClosed: !1,
    cookieConsentBannerIgnored: X.getBooleanCookie(K.CookieBannerIgnored) ? ? !1,
    onCloseSideEffect: () => {}
})) {
    closeCookieConsentBanner = t => {
        const n = {
            cookieConsentBannerClosed: !0,
            ...t ? {
                cookieConsentBannerIgnored: !0
            } : {}
        };
        this.setState(n), t && X.setBooleanCookie(K.CookieBannerIgnored, !0)
    };
    setOnCloseSideEffect = t => {
        this.setState(n => ({ ...n,
            onCloseSideEffect: t
        }))
    };
    static useWasClosed = () => this.useState(t => t.cookieConsentBannerClosed);
    static useWasIgnored = () => this.useState(t => t.cookieConsentBannerIgnored);
    static useOnCloseSideEffect = () => this.useState(t => t.onCloseSideEffect)
}
const m7 = () => {
    const e = ks.useStore(),
        {
            isUnauthenticated: t,
            isLoading: n
        } = Rd(),
        {
            data: r,
            isLoading: o
        } = tn(ci),
        s = ks.useWasClosed(),
        a = ks.useWasIgnored(),
        i = X.getCookie(K.CookieBannerShownPath),
        c = i === window.location.pathname,
        l = n || o;
    return {
        shouldShowCookieBanner: (!l && t && !(s || a) && (!i || c) && r ? .is_consent_required && r ? .cookie_consent_status == null) ? ? !1,
        isCookieConsentBannerLoading: l,
        closeCookieConsentBanner: e.closeCookieConsentBanner,
        ignoreCookieConsentBanner: () => e.closeCookieConsentBanner(!0)
    }
};
var ha = (e => (e.Gclid = "gclid", e.Fbclid = "fbclid", e))(ha || {});

function _7(e) {
    switch (e) {
        case "gclid":
            return X.getAnalyticsCookie(K.Gclid);
        case "fbclid":
            return X.getAnalyticsCookie(K.Fbclid)
    }
}

function v7(e) {
    switch (e) {
        case "gclid":
            X.deleteCookie(K.Gclid);
            break;
        case "fbclid":
            X.deleteCookie(K.Fbclid);
            break
    }
}

function nE(e) {
    switch (e) {
        case "gclid":
            return K.Gclid;
        case "fbclid":
            return K.Fbclid
    }
}

function rE({
    searchParams: e,
    clidLifetimeSeconds: t = 24 * 60 * 60,
    eligibleExplorers: n
}) {
    for (const r of n) {
        if (e.get(r) == null) continue;
        const o = nE(r);
        X.setAnalyticsCookie(o, e.get(r), {
            path: "/",
            maxAge: t
        })
    }
}
let Qd = !1;
const oE = () => {
        const e = Pn();
        [() => {
            const n = new URLSearchParams(window.location.search);
            rE({
                searchParams: n,
                eligibleExplorers: [e.isUserEligibleForPioneer ? ha.Gclid : null, e.isUserEligibleForMaverick ? ha.Fbclid : null].filter(r => r != null)
            })
        }].forEach(n => n()), Qd = !0
    },
    C7 = async e => {
        const t = Pn().userCountry;
        new Tg(e, ci).subscribe(r => {
            if (r.isPending) return;
            const o = r.data;
            if (!o) return;
            (o.is_consent_required ? o.cookie_consent_status === "all_cookies" : !0) ? (X.setAllowAnalyticsCookies_CLIENT_ONLY(!0), M.addAction("analytics-tracking.non-essential-cookies.allowed", {
                country: t
            }), Qd || (oE(), M.addAction("analytics-tracking.non-essential-cookies.analytics-tracking-functions-run", {
                country: t
            }))) : (X.setAllowAnalyticsCookies_CLIENT_ONLY(!1), M.addAction("analytics-tracking.non-essential-cookies.disallowed", {
                country: t
            }))
        })
    };
async function sE({
    queryKey: [e, {
        workspaceId: t
    }]
}) {
    return b.safeGet("/accounts/{account_id}/settings", {
        parameters: {
            path: {
                account_id: t
            }
        }
    })
}

function aE(e, t) {
    return tn({
        queryKey: ["workspace-settings", {
            workspaceId: e
        }],
        queryFn: sE,
        select: t,
        enabled: !!e
    })
}
const y7 = "disable_history",
    b7 = "user_latency_tools",
    iE = "sentinel_enabled_for_subscription",
    S7 = "mfa",
    w7 = "use_stream_processor",
    cE = "time_spent",
    lE = "use_o11y";
var uE = (e => (e.BrowsingAvailable = "browsing_available", e.Sunshine = "sunshine_available", e.WorkspaceGPTCustomActions = "workspace_gpt_custom_actions", e.WorkspaceShareLinks = "workspace_share_links", e.GizmoSupportEmails = "gizmo_support_emails", e.D3Editor = "d3_editor", e.D3EditorAllGpts = "d3_editor_gpts", e.DataAnalysisV2 = "graphite", e.ChartSerialization = "chart_serialization", e.SearchTool = "search_tool", e.SearchToolHoldout = "search_tool_holdout", e.MemoryInSearch = "memory_in_search", e.Canvas = "canvas", e.CanvasCodeExecution = "canvas_code_execution", e.CanvasCodeNetworkAccess = "canvas_code_network_access", e.GizmoCanvasToggle = "gizmo_canvas_toggle", e.Moonshine = "moonshine", e.VideoScreenSharing = "video_screen_sharing", e.DeepResearch = "caterpillar", e))(uE || {}),
    Qc = Number.isNaN || function(t) {
        return typeof t == "number" && t !== t
    };

function dE(e, t) {
    return !!(e === t || Qc(e) && Qc(t))
}

function fE(e, t) {
    if (e.length !== t.length) return !1;
    for (var n = 0; n < e.length; n++)
        if (!dE(e[n], t[n])) return !1;
    return !0
}

function pE(e, t) {
    t === void 0 && (t = fE);
    var n = null;

    function r() {
        for (var o = [], s = 0; s < arguments.length; s++) o[s] = arguments[s];
        if (n && n.lastThis === this && t(o, n.lastArgs)) return n.lastResult;
        var a = e.apply(this, o);
        return n = {
            lastResult: a,
            lastArgs: o,
            lastThis: this
        }, a
    }
    return r.clear = function() {
        n = null
    }, r
}
const hE = pE(() => R(() =>
    import ("./fmcl2rn5zexg8ncx.js").then(e => e.s), __vite__mapDeps([3, 1])));
class gE {
    answers = new Map;
    maxAttempts = 5e5;
    requirementsSeed = mE();
    sid = nt();
    sha3 = null;
    loadSha3() {
        return hE().then(t => (this.sha3 = t, t))
    }
    async initializeAndGatherData(t) {
        this._getAnswer(t)
    }
    async startEnforcement(t) {
        this.loadSha3(), this._getAnswer(t)
    }
    getEnforcementTokenSync(t) {
        const n = this._getAnswer(t);
        return typeof n == "string" ? n : null
    }
    async getEnforcementToken(t) {
        return this._getAnswer(t)
    }
    async getRequirementsToken() {
        return this.answers.has(this.requirementsSeed) || this.answers.set(this.requirementsSeed, this._generateAnswer(this.requirementsSeed, "0")), "gAAAAAC" + await this.answers.get(this.requirementsSeed)
    }
    getRequirementsTokenBlocking() {
        return "gAAAAAC" + this._generateRequirementsTokenAnswerBlocking()
    }
    _getAnswer(t) {
        if (!t ? .proofofwork ? .required) return null;
        const {
            seed: n,
            difficulty: r
        } = t.proofofwork;
        if (!(typeof n == "string" && typeof r == "string")) return null;
        const o = this.answers.get(n);
        return typeof o == "string" ? o : (this.answers.has(n) || this.answers.set(n, this._generateAnswer(n, r)), Promise.resolve().then(async () => "gAAAAAB" + await this.answers.get(n)).then(s => (this.answers.set(n, s), s)))
    }
    async _generateAnswer(t, n) {
        let r = "e";
        const o = performance.now(),
            s = this.sha3 ? ? await this.loadSha3();
        try {
            let a = null;
            const i = this.getConfig();
            for (let c = 0; c < this.maxAttempts; c++) {
                (!a || a.timeRemaining() <= 0) && (a = await vE()), i[3] = c, i[9] = Math.round(performance.now() - o);
                const l = $r(i);
                if (s.sha3_512(t + l).substring(0, n.length) <= n) return l
            }
        } catch (a) {
            r = $r("" + a)
        }
        return "wQ8Lk5FbGpA2NcR9dShT6gYjU7VxZ4D" + r
    }
    _generateRequirementsTokenAnswerBlocking() {
        let t = "e";
        const n = performance.now();
        try {
            const r = this.getConfig();
            return r[3] = 1, r[9] = Math.round(performance.now() - n), $r(r)
        } catch (r) {
            t = $r("" + r)
        }
        return "wQ8Lk5FbGpA2NcR9dShT6gYjU7VxZ4D" + t
    }
    getConfig() {
        return [screen ? .width + screen ? .height, "" + new Date, performance ? .memory ? .jsHeapSizeLimit, Math ? .random(), navigator ? .userAgent, qr(Array.from(document.scripts).map(t => t ? .src).filter(t => t)), (Array.from(document.scripts || []).map(t => t ? .src ? .match("c/[^/]*/_")).filter(t => t ? .length)[0] ? ? [])[0] ? ? document.documentElement.getAttribute("data-build"), navigator.language, navigator.languages ? .join(","), Math ? .random(), _E(), qr(Object.keys(document)), qr(Object.keys(window)), performance.now(), this.sid, [...new URLSearchParams(window.location.search).keys()].join(","), navigator ? .hardwareConcurrency, performance.timeOrigin]
    }
}

function qr(e) {
    return e[Math.floor(Math.random() * e.length)]
}

function mE() {
    return "" + Math.random()
}

function _E() {
    const e = qr(Object.keys(Object.getPrototypeOf(navigator)));
    try {
        return `${e}−${navigator[e].toString()}`
    } catch {
        return `${e}`
    }
}

function $r(e) {
    return e = JSON.stringify(e), window.TextEncoder ? btoa(String.fromCharCode(...new TextEncoder().encode(e))) : btoa(unescape(encodeURIComponent(e)))
}

function vE() {
    return new Promise(e => {
        (window.requestIdleCallback || CE)(n => {
            e(n)
        }, {
            timeout: 10
        })
    })
}

function CE(e) {
    return setTimeout(() => {
        e({
            timeRemaining: () => 1,
            didTimeout: !1
        })
    }, 0), 0
}
const yE = new gE,
    bE = 0,
    SE = 1,
    wE = 2,
    TE = 3,
    AE = 4,
    IE = 5,
    kE = 6,
    EE = 24,
    xE = 7,
    RE = 8,
    Es = 9,
    OE = 10,
    ME = 11,
    LE = 12,
    PE = 13,
    DE = 14,
    $E = 15,
    Jd = 16,
    UE = 17,
    BE = 18,
    NE = 19,
    FE = 23,
    jE = 20,
    GE = 21,
    VE = 22,
    HE = 25,
    k = new Map;

function WE(e) {
    return new Promise((t, n) => {
        let r = 0;
        setTimeout(() => t("" + r), 100), k.set(TE, o => t(btoa("" + o))), k.set(AE, o => n(btoa("" + o)));
        try {
            for (k.set(Es, JSON.parse(Xd(atob(e), "" + k.get(Jd)))); k.get(Es).length > 0;) {
                const [o, ...s] = k.get(Es).shift();
                k.get(o)(...s), r++
            }
            t(btoa("" + r))
        } catch (o) {
            t(btoa(r + ": " + o))
        }
    })
}

function zE(e) {
    qE(), k.set(Jd, e)
}

function Xd(e, t) {
    let n = "";
    for (let r = 0; r < e.length; r++) n += String.fromCharCode(e.charCodeAt(r) ^ t.charCodeAt(r % t.length));
    return n
}

function qE() {
    k.clear(), k.set(bE, WE), k.set(SE, (e, t) => k.set(e, Xd("" + k.get(e), "" + k.get(t)))), k.set(wE, (e, t) => k.set(e, t)), k.set(IE, (e, t) => {
        const n = k.get(e);
        Array.isArray(n) ? n.push(k.get(t)) : k.set(e, n + k.get(t))
    }), k.set(kE, (e, t, n) => k.set(e, k.get(t)[k.get(n)])), k.set(xE, (e, ...t) => k.get(e)(...t.map(n => k.get(n)))), k.set(UE, (e, t, ...n) => k.set(e, k.get(t)(...n.map(r => k.get(r))))), k.set(PE, (e, t, ...n) => {
        try {
            k.get(t)(...n)
        } catch (r) {
            k.set(e, "" + r)
        }
    }), k.set(RE, (e, t) => k.set(e, k.get(t))), k.set(OE, window), k.set(ME, (e, t) => k.set(e, (Array.from(document.scripts || []).map(n => n ? .src ? .match(k.get(t))).filter(n => n ? .length)[0] ? ? [])[0] ? ? null)), k.set(LE, e => k.set(e, k)), k.set(DE, (e, t) => k.set(e, JSON.parse("" + k.get(t)))), k.set($E, (e, t) => k.set(e, JSON.stringify(k.get(t)))), k.set(BE, e => k.set(e, atob("" + k.get(e)))), k.set(NE, e => k.set(e, btoa("" + k.get(e)))), k.set(jE, (e, t, n, ...r) => k.get(e) === k.get(t) ? k.get(n)(...r) : null), k.set(GE, (e, t, n, r, ...o) => Math.abs(k.get(e) - k.get(t)) > k.get(n) ? k.get(r)(...o) : null), k.set(FE, (e, t, ...n) => k.get(e) !== void 0 ? k.get(t)(...n) : null), k.set(EE, (e, t, n) => k.set(e, k.get(t)[k.get(n)].bind(k.get(t)))), k.set(VE, () => {}), k.set(HE, () => {})
}
const KE = 1e3 * 60 * 9;
var YE = (e => (e.NOAUTH = "chatgpt-noauth", e.FREEACCOUNT = "chatgpt-freeaccount", e.PAID = "chatgpt-paid", e))(YE || {}),
    ZE = (e => (e.ChatRequirementsToken = "OpenAI-Sentinel-Chat-Requirements-Token", e.TurnstileToken = "OpenAI-Sentinel-Turnstile-Token", e.ProofToken = "OpenAI-Sentinel-Proof-Token", e.Token = "OpenAI-Sentinel-Token", e))(ZE || {});
let Qe = null;

function T7() {
    if (Qe) {
        const {
            chatRequirements: e
        } = Qe;
        if (e) return Qe = null, e
    }
    return null
}
async function A7(e = !1) {
    if (Qe) {
        const {
            expiration: r,
            chatRequirementsPromise: o
        } = Qe;
        if (Date.now() < r) try {
            return e || (Qe = null), o
        } catch {} else o.then(s => M.addAction("chat_requirements_cache_expired", {
            app: s.persona.toString()
        }));
        Qe = null
    }
    const t = yE.getRequirementsTokenBlocking();
    zE(t);
    const n = b.postAnonAware("/sentinel/chat-requirements", {
        p: t
    }, {
        authOption: fe.SendIfAvailable
    });
    return e && (Qe = {
        chatRequirements: null,
        chatRequirementsPromise: n.then(r => (Qe && (Qe.chatRequirements = r), r)),
        expiration: Date.now() + KE
    }), n
}

function QE() {
    b_("2232580636") || (Qe = null)
}

function JE() {
    return new Promise((e, t) => {
        const n = document.createElement("script");
        n.type = "text/javascript", n.src = "https://chatgpt.com/backend-api/sentinel/sdk.js", n.async = !0, n.defer = !0, n.onload = e, n.onerror = t, document.getElementsByTagName("head")[0].appendChild(n)
    })
}

function XE(e) {
    return ex().then(() => window.SentinelSDK.token(e))
}
const ex = (() => {
    let e;
    return () => (e || (e = JE()), e)
})();

function tx(e, t, n, r) {
    e && QE();
    const o = {};
    return e ? .token && (o["OpenAI-Sentinel-Chat-Requirements-Token"] = e.token), t && (o["OpenAI-Sentinel-Turnstile-Token"] = t), n && (o["OpenAI-Sentinel-Proof-Token"] = n), r && (o["OpenAI-Sentinel-Token"] = r), o
}

function nx(e) {
    return e == null
}
var rx = nx;
const ox = Te(rx);
var sx = "Expected a function";

function ax(e) {
    if (typeof e != "function") throw new TypeError(sx);
    return function() {
        var t = arguments;
        switch (t.length) {
            case 0:
                return !e.call(this);
            case 1:
                return !e.call(this, t[0]);
            case 2:
                return !e.call(this, t[0], t[1]);
            case 3:
                return !e.call(this, t[0], t[1], t[2])
        }
        return !e.apply(this, t)
    }
}
var ix = ax,
    cx = bd,
    lx = ix,
    ux = Sd;

function dx(e, t) {
    return ux(e, lx(cx(t)))
}
var fx = dx;
const px = Te(fx),
    hx = ["http:", "https:", "mailto:", "tel:"];

function Jc(e) {
    const t = new URL(window.location.origin ? ? "https://chatgpt.com"),
        n = new URL(e, t);
    if (n.href === "chatgpt://oauth_complete") return n;
    if (n.origin !== t.origin) throw new Error("Invalid redirect URL: would redirect off site.");
    if (!hx.some(r => r === n.protocol)) throw new Error("Invalid redirect URL: unsafe protocol.");
    return n
}
var gx = {};
let xs = null;
async function mx() {
    return xs || (xs = (await R(async () => {
        const {
            default: e
        } = await
        import ("./h7xc91wgjb0umjcl.js");
        return {
            default: e
        }
    }, [])).default), xs
}
const Xc = new Set;
class li {
    static async getSystemHints() {
        return b.get(`${A}/system_hints`, {
            authOption: fe.SendIfAvailable
        })
    }
    static async getWorkspaceGPTs(t, n, r) {
        const o = n === Xs.THIRD_PARTY ? "true" : "false",
            s = n === Xs.UNASSIGNED ? "true" : "false";
        return b.get(`${A}/accounts/${t}/gpts?is_approved=${o}&cursor=${r}&is_unassigned=${s}`)
    }
    static async getInvoices(t, n = {}) {
        if (n.endingBefore !== void 0 && n.startingAfter !== void 0) throw new Error("Both an endingBefore and startingAfter parameter were provided. Please only provide one or the other.");
        const r = px(t, ox),
            o = new URLSearchParams(r);
        return n.limit !== void 0 && o.append("limit", n.limit.toString()), n.endingBefore !== void 0 ? o.append("ending_before", n.endingBefore) : n.startingAfter !== void 0 && o.append("starting_after", n.startingAfter), b.get(`${A}/invoices?${o}`)
    }
    static async createSAMLConnection(t, n, r) {
        return b.post(`${A}/accounts/${t}/sso/connections/saml`, {
            sign_in_endpoint: n,
            cert: r
        })
    }
    static async updateSAMLConnection(t, n, r) {
        return b.patch(`${A}/accounts/${t}/sso/connections`, {
            id: n,
            sign_in_endpoint: r.signInEndpoint,
            cert: r.cert,
            active: r.active,
            enforced_clients: r.enforcedClients
        })
    }
    static async deleteSAMLConnection(t, n) {
        return b.delete(`${A}/accounts/${t}/sso/connections/${n}`)
    }
    static async addDomainToWorkspace(t, n) {
        return b.post(`${A}/accounts/${t}/domains`, {
            hostname: n
        })
    }
    static async removeDomainFromWorkspace(t, n) {
        return b.delete(`${A}/accounts/${t}/domains/${n}`)
    }
    static async checkDomainForWorkspace(t, n) {
        return b.post(`${A}/accounts/${t}/domains/${n}/check`, {})
    }
    static async adminPostConversation(t) {
        return b.post(`${A}/../admin/conversation`, t)
    }
    static async getComplianceSpecification(t) {
        return b.get(`${A}/accounts/${t}/enterprise-api-reference/latest`)
    }
    static async uploadFileToAzureStorage(t, n, r, o) {
        const s = await mx();
        return await s.request({
            method: "put",
            url: n,
            data: t,
            headers: {
                "x-ms-blob-type": "BlockBlob",
                "x-ms-version": "2020-04-08",
                "Content-Type": t.type
            },
            onUploadProgress: a => {
                a.progress !== void 0 && r && r(a.progress)
            }
        }).catch(function(a) {
            let i = { ...o
            };
            throw s && a instanceof s.AxiosError && a.response ? .status ? i = { ...i,
                error_type_name: `AxiosHTTPError${a.response.status}`,
                error_msg: a.message,
                error_stack: a.stack
            } : a instanceof Error && (i = { ...i,
                error_type_name: a.name,
                error_msg: a.message,
                error_stack: a.stack
            }), me.logEvent(te.blobStoreUploadError, i), new ht("File upload to blobstore failed", "failed_upload_to_blobstore")
        })
    }
    static async downloadFromInterpreter(t, n, r) {
        const o = await b.safeGet("/conversation/{conversation_id}/interpreter/download", {
            parameters: {
                path: {
                    conversation_id: n
                },
                query: {
                    message_id: t,
                    sandbox_path: r
                }
            }
        });
        if (o.status === er.Success) return o;
        throw new ht("Could not download file from advanced data analysis", "error_code" in o ? o.error_code : "unknown_error")
    }
    static getInterpreterState(t) {
        return b.safeGet("/conversation/{conversation_id}/interpreter", {
            parameters: {
                path: {
                    conversation_id: t
                }
            }
        })
    }
    static sendDocument() {
        return b.get(`${A}/private`)
    }
    static createOrUpdateUserSystemMessage({
        aboutUserMessage: t,
        aboutModelMessage: n,
        nameUserMessage: r = "",
        roleUserMessage: o = "",
        traitsModelMessage: s = "",
        otherUserMessage: a = "",
        disabledTools: i,
        enabled: c
    }) {
        return b.post(`${A}/user_system_messages`, {
            about_user_message: t,
            about_model_message: n,
            name_user_message: r,
            role_user_message: o,
            traits_model_message: s,
            other_user_message: a,
            disabled_tools: i,
            enabled: c
        })
    }
    static updateUserSystemMessageEnabled(t) {
        return b.post(`${A}/user_system_message_enabled`, {
            enabled: t
        })
    }
    static getUserSystemMessage() {
        return b.get(`${A}/user_system_messages`)
    }
    static getUserIsInSearchHoldoutWithWebDisabled() {
        return b.get(`${A}/user_is_in_search_holdout_with_web_disabled`, {
            authOption: fe.SendIfAvailable
        })
    }
    static async getUserSettings() {
        return b.getAnonAware("/settings/user")
    }
    static updateUserSetting(t, n) {
        return b.patch(`${A}/settings/account_user_setting`, {}, {
            params: {
                feature: t,
                value: n.toString()
            }
        })
    }
    static updateConversationGizmo(t, n) {
        return b.patch(`${A}/conversation/${t}`, {
            gizmo_id: n ? ? ""
        })
    }
    static getAdaExcelFileContents(t) {
        return b.get(`${A}/ada/parse_xls/${t}`)
    }
    static clearUserMemory(t) {
        return b.deleteWithPayload(`${A}/settings/clear_account_user_memory`, t ? {
            gizmo_id: t
        } : {})
    }
    static announcementViewed(t) {
        const n = new URLSearchParams({
                announcement_id: t
            }),
            r = `${A}/settings/announcement_viewed?${n.toString()}`;
        return b.post(r, {})
    }
    static internalAnnouncementReset(t) {
        const n = new URLSearchParams({
                announcement_id: t
            }),
            r = `${A}/settings/announcement_reset?${n.toString()}`;
        return b.post(r, {})
    }
    static async getModels(t) {
        return b.getAnonAware("/models", n => n ? {} : {
            params: {
                history_and_training_disabled: t.toString()
            }
        })
    }
    static async getConversations({
        offset: t,
        limit: n,
        isArchived: r
    }) {
        const o = {
            offset: t.toString(),
            limit: n.toString(),
            order: "updated",
            ...r !== void 0 && {
                is_archived: r ? "true" : "false"
            }
        };
        return b.getAnonAware("/conversations", {
            params: o,
            intercomEventOnError: "fetch-error:conversations:get"
        })
    }
    static async getConversation(t) {
        return b.getAnonAware(`/conversation/${t}`, {
            intercomEventOnError: "fetch-error:conversations:get"
        })
    }
    static async setConversationStatus(t, n) {
        return b.post(`${A}/conversation/${t}/async-status`, {
            status: n
        })
    }
    static async getConversationDetails({
        gizmoId: t,
        requestedDefaultModel: n,
        conversationId: r
    }) {
        return b.postAnonAware("/conversation/init", {
            gizmo_id: t,
            requested_default_model: n,
            conversation_id: r,
            timezone_offset_min: new Date().getTimezoneOffset()
        })
    }
    static async generateTitle(t, n, r) {
        const o = {
            message_id: n
        };
        return b.postAnonAware(`/conversation/gen_title/${t}`, o, {
            intercomEventOnError: "fetch-error:conversation:generate-title"
        })
    }
    static generateSuggestions(t, n, r) {
        return b.post(`${A}/conversation/${t}/experimental/generate_suggestions`, {
            message_id: n,
            model: r,
            num_suggestions: 4
        }, {
            intercomEventOnError: "fetch-error:conversation:generate-suggestions"
        })
    }
    static patchConversation(t, n) {
        return b.patch(`${A}/conversation/${t}`, n, {
            intercomEventOnError: "fetch-error:conversation:edit"
        })
    }
    static getConversationSafeUrls(t, n, r) {
        const o = {
            url: n
        };
        return r && (o.history_and_training_disabled = "true"), b.get(`${A}/conversation/${t}/url_safe`, {
            params: o
        })
    }
    static deleteConversations() {
        return b.patch(`${A}/conversations`, {
            is_visible: !1
        }, {
            intercomEventOnError: "fetch-error:conversations:delete"
        })
    }
    static archiveConversations() {
        return b.patch(`${A}/conversations`, {
            is_archived: !0
        })
    }
    static getLoginLink(t) {
        return b.post(`${A}/bypass/link`, {
            email: t
        })
    }
    static getSharedConversations() {
        return b.get(`${A}/shared_conversations`, {
            params: {
                order: "created"
            }
        })
    }
    static async submitMessageFeedback(t) {
        return b.postAnonAware("/conversation/message_feedback", t)
    }
    static async submitImplicitMessageFeedback({
        type: t = "copy",
        source: n,
        messageId: r,
        serverThreadId: o,
        selectedText: s,
        location: a
    }) {
        return b.safePost("/conversation/implicit_message_feedback", {
            parameters: void 0,
            requestBody: {
                message_id: r,
                conversation_id: o,
                source: n,
                feedback: {
                    feedback_type: t,
                    selected_text: s
                },
                location: a
            },
            authOption: fe.SendIfAvailable
        })
    }
    static async submitConversationRating(t) {
        const {
            conversation_id: n,
            ...r
        } = t;
        return b.postAnonAware(`/conversation/${n}/rating`, r)
    }
    static submitSharedConversationReportFeedback(t) {
        const {
            shared_conversation_id: n,
            ...r
        } = t;
        return b.post(`${A}/share/${n}/report`, r, {
            authOption: fe.SendIfAvailable
        })
    }
    static async submitMessageComparisonFeedback(t) {
        return b.safePost("/conversation/message_comparison_feedback", {
            parameters: {},
            requestBody: t,
            anonAware: !0
        })
    }
    static async submitParagenSelectionV2(t) {
        return b.safePost("/paragen_submission", {
            parameters: {},
            requestBody: t,
            anonAware: !0
        })
    }
    static async confirmOrRejectMemory(t, n, r) {
        return b.safePost("/memories/confirm_or_reject", {
            requestBody: {
                message_id: t,
                conversation_id: n,
                is_confirm: r
            },
            parameters: {},
            anonAware: !0
        })
    }
    static async getCheckoutLink(t, n, r) {
        (r == null || r.billing_details == null) && (M.addError(new Error("chatgpt_payload_undefined_in_checkout_link"), {
            callLocation: n
        }), J.logEvent("chatgpt_payload_undefined_in_checkout_link", null, {
            callLocation: n
        }));
        let o = Promise.resolve(void 0);
        t ? .includes(iE) && (o = XE("chatgpt_checkout").catch(i => {
            M.addError(i)
        }));
        const [s] = await Promise.all([o]), a = tx(null, null, null, s);
        return await b.post(`${A}/payments/checkout`, r, {
            additionalHeaders: a
        })
    }
    static fetchCustomerPortalUrl(t) {
        const n = t ? `${A}/payments/customer_portal?account_id=${t}` : `${A}/payments/customer_portal`;
        return b.get(n, {
            intercomEventOnError: "fetch-error:customer_portal:get"
        })
    }
    static getEligibleReferralInvites() {
        return b.get(`${A}/referral/invites`)
    }
    static postActivateReferralInvite(t) {
        return b.post(`${A}/referral/invites/activate`, {
            invite_id: t
        })
    }
    static deletePluginUserSettings({
        pluginId: t
    }) {
        return b.delete(`${A}/aip/p/${t}/user-settings`)
    }
    static createWorkspaceAccount({
        name: t,
        organizationId: n
    }) {
        return b.post(`${A}/accounts`, {
            name: t,
            organization_id: n
        })
    }
    static async getAccountStatusV4() {
        const t = Tm;
        return b.getAnonAware(`/accounts/check/${t}`, {
            intercomEventOnError: "fetch-error:accounts:get",
            params: {
                timezone_offset_min: new Date().getTimezoneOffset().toString()
            }
        })
    }
    static async getDataUsageForTraining() {
        return b.safeGet("/accounts/data_usage_for_training", {})
    }
    static deactivateAccount() {
        return b.post(`${A}/accounts/deactivate`, {})
    }
    static submitDataExport() {
        return b.post(`${A}/accounts/data_export`, {})
    }
    static submitExportAndDeactivate() {
        return b.post(`${A}/accounts/export_and_deactivate`, {})
    }
    static async resetAnnouncement(t) {
        return b.post(`${A}/settings/announcement_reset?announcement_id=${t}`)
    }
    static pluginOauthRedirect(t, n, r) {
        const o = {
            redirect_uri: n
        };
        return r && (o.redirect_to = r), b.get(`${A}/aip/p/${t}/user-settings/oauth/redirect`, {
            params: o
        })
    }
    static async pluginOauthCallback(t, n, r, o) {
        const s = await b.get(`${A}/aip/p/${t}/user-settings/oauth/callback`, {
            params: {
                code: n,
                redirect_uri: r,
                ...o != null ? {
                    state: o
                } : {}
            }
        });
        return { ...s,
            redirect_path: Jc(s.redirect_path).toString()
        }
    }
    static connectorOauthRedirect(t, n, r, o) {
        const s = {
            redirect_uri: n
        };
        return r && (s.entry_point = r), o && (s.redirect_to = o), b.get(`${A}/connectors/${t}/oauth/redirect`, {
            params: s
        })
    }
    static async connectorOauthCallback(t, n, r, o) {
        const s = await b.get(`${A}/connectors/${t}/oauth/callback`, {
            params: {
                code: n,
                redirect_uri: r,
                state: o
            }
        });
        return { ...s,
            redirect_path: Jc(s.redirect_path).toString()
        }
    }
    static async submitCaMessageFeedback(t) {
        return b.safePost("/ca/feedback", {
            requestBody: t
        })
    }
    static async adminListCaMessageFeedback(t) {
        return b.safeGet("/ca/admin/feedback", {
            parameters: {
                query: {
                    account_id: t.accountId
                }
            }
        })
    }
    static async adminGetCaMessageFeedback(t) {
        return b.safeGet("/ca/admin/feedback/{feedback_id}", {
            parameters: {
                query: {
                    account_id: t.accountId
                },
                path: {
                    feedback_id: t.feedbackId
                }
            }
        })
    }
    static async adminDeleteCaMessageFeedback(t) {
        return b.safeDelete("/ca/admin/feedback/{feedback_id}", {
            parameters: {
                query: {
                    account_id: t.accountId
                },
                path: {
                    feedback_id: t.feedbackId
                }
            }
        })
    }
    static async adminApproveCaMessageFeedback(t) {
        return b.safePost("/ca/admin/feedback/{feedback_id}/approve", {
            parameters: {
                query: {
                    account_id: t.accountId,
                    with_sources: t.withSources
                },
                path: {
                    feedback_id: t.feedbackId
                }
            }
        })
    }
    static getModelMessageCap(t) {
        return b.get(`${hs}/conversation_limit`, t ? b.getUnauthHeaders() : {})
    }
    static getPublicReferralInvite(t) {
        return b.get(`${wm}/invites/${t}`, {
            authOption: fe.Anonymous
        })
    }
    static getBingLink(t) {
        const n = new URLSearchParams({
            query: t.query
        });
        return `${A}/bing/redirect?${n.toString()}`
    }
    static createShareLink(t) {
        return b.post(`${A}/share/create`, t)
    }
    static updateShareLink(t) {
        return b.patch(`${A}/share/${t.share_id}`, t)
    }
    static deleteShareLink(t) {
        return b.delete(`${A}/share/${t.share_id}`)
    }
    static deleteAllSharedConversations() {
        return b.deleteWithPayload(`${A}/share/all`, {
            confirm: !0
        })
    }
    static fetchShareModerationCategories() {
        return b.get(`${A}/share/moderation/categories`)
    }
    static async createFile(t, n, r, o) {
        try {
            const s = await b.safePost("/files", {
                requestBody: {
                    file_name: t,
                    file_size: n,
                    use_case: r.kind,
                    gizmo_id: r.kind === Du.Gizmo ? r.gizmoId : void 0,
                    timezone_offset_min: new Date().getTimezoneOffset(),
                    reset_rate_limits: !!o
                }
            });
            if (s.status === er.Error) throw me.logEvent(te.createFileEntryError, {
                error_code: s.error_code,
                error_type_name: "FileServiceErrorResponse",
                error_msg: s.error_code,
                error_stack: ""
            }), new ht("Could not create file", s.error_code);
            return s
        } catch (s) {
            throw s instanceof ht || (s instanceof Error ? me.logEvent(te.createFileEntryError, {
                error_type_name: s.name,
                error_msg: s.message,
                error_stack: s.stack
            }) : me.logEvent(te.createFileEntryError, {
                error_type_name: "UnknownError",
                error_msg: String(s),
                error_stack: ""
            })), s
        }
    }
    static async processFileUpload(t, n) {
        return b.safePost("/files/{file_id}/uploaded", {
            parameters: {
                path: {
                    file_id: t
                }
            },
            requestBody: {
                gizmo_id: n.gizmoId ? ? null
            }
        })
    }
    static isErrorEvent(t) {
        const n = t.split("."),
            r = n[n.length - 1];
        return r === "error" || r === "cancelled" || r === "failed" || r === "unknown"
    }
    static async processFileUploadStream(t, n) {
        try {
            const r = b.streamedJsonPost(`${A}/files/process_upload_stream`, t);
            let o;
            for await (const s of r) {
                if (this.isErrorEvent(s.event)) {
                    const a = `Error stream processing upload: indexing failed: ${s.event}`;
                    throw new ht(a, s.event)
                }
                s.progress != null && n ? .(s.progress), s ? .extra ? .total_tokens != null && (o = s.extra.total_tokens)
            }
            return o ? {
                fileTokenSize: o
            } : void 0
        } catch (r) {
            throw r instanceof ht || r instanceof Ve && r.isClientError() ? r : new ht(`Error stream processing upload: ${r}`, "stream_process_error")
        }
    }
    static async markFileUploadFailed(t, n) {
        return b.safePost("/files/{file_id}/upload-failed", {
            parameters: {
                path: {
                    file_id: t
                }
            },
            requestBody: {
                error: n.error
            }
        })
    }
    static async getSampledPromptStarter(t, n, r) {
        return b.getAnonAware(`/prompt_library/?limit=${t}&offset=0${n?"&use_v2=true":""}${r?`&model_slug=${r}`:""}`)
    }
    static async getRetrievalStatus(t, n) {
        const r = await b.safeGet("/files/{file_id}", {
            parameters: {
                path: {
                    file_id: t
                },
                query: n != null ? {
                    gizmo_id: n
                } : void 0
            }
        });
        return {
            name: r.name,
            status: r.metadata ? .retrieval ? .status ? ? $u.Processing,
            error_code: r.metadata ? .retrieval ? .error_code,
            file_size_tokens: r.file_size_tokens
        }
    }
    static async upsertPersonalWorkspace() {
        return await b.post(`${A}/accounts/personal`, {})
    }
    static async getFileDownloadLink(t, n, r = !1, o) {
        let s;
        if (o) {
            const i = n != null ? `?gizmo_id=${n}` : "";
            s = `${A}/conversation/${o}/attachment/${t}/download${i}`
        } else n != null && (t.includes("?") ? t += `&gizmo_id=${n}` : t += `?gizmo_id=${n}`), s = `${A}/files/download/${t}`;
        const a = await b.get(s, r ? b.getUnauthHeaders() : {});
        if (a.status === er.Success || a.status === er.Retry) return a;
        throw new ht("Could not get file download link", "error_code" in a ? a.error_code : "unknown_error")
    }
    static async getCompliance() {
        return b.get(`${A}/compliance`)
    }
    static async updateCookieConsentCompliance(t) {
        return b.post(`${A}/compliance/cookie_consent`, t)
    }
    static async updateAgeVerification() {
        return b.post(`${A}/compliance/age_verification`)
    }
    static async postLatencyTimingEvent(t) {
        return ao(await zr(mn())) ? b.post(`${A}/lat/r`, {
            server_request_id: t.serverRequestId,
            model: t.model,
            preflight_time_ms: t.preflightTime,
            search_source: t.searchSource,
            count_tokens: t.countTokens,
            ts_first_token_ms: t.tsFirstToken,
            ts_max_token_time_ms: t.tsMaxTokenTime,
            ts_mean_token_without_first_ms: t.tsMeanTokenWithoutFirst,
            ts_median_token_without_first_ms: t.tsMedianTokenWithoutFirst,
            ts_min_token_time_ms: t.tsMinTokenTime,
            ts_p95_token_without_first_ms: t.tsP95TokenWithoutFirst,
            ts_p99_token_without_first_ms: t.tsP99TokenWithoutFirst,
            ts_std_dev_token_ms: t.tsStdDevTokenTime,
            ts_total_request_ms: t.tsTotalRequestTime
        }) : Promise.resolve(null)
    }
    static async postRetrievalTiming(t) {
        if (II(mn()) != null) return b.post(`${A}/lat/retrieval`, {
            e2e_latency_ms: t.e2eLatencyMs,
            type: t.type
        })
    }
    static postClaimReferralInvite(t, n) {
        return b.post(`${A}/referral/invites/claim/${t}`, {
            parameters: {
                path: {
                    invite_code: t
                }
            },
            requestBody: {
                workspace_id: n
            }
        })
    }
    static getClaimedReferralInvite() {
        return b.get(`${A}/referral/`)
    }
    static getAuthedSharedConversation(t) {
        return b.get(`${A}/share/${t}`)
    }
    static searchConnectorAPI(t, n) {
        return b.post(`${A}/connectors/search/${n}`, {
            query: t,
            top_k: 20,
            title_only: !0,
            include_folder: !0
        })
    }
    static searchConnectorsAPI(t, n) {
        return b.post(`${A}/connectors/search`, {
            query: t,
            connectors: n,
            top_k_per_connector: 5,
            title_only: !0,
            include_folder: !1
        })
    }
    static uploadConnectorAPI(t, n, r, o, s, a, i) {
        const c = {
            id: t,
            upload_use_case: r.kind,
            mime_type: o.type,
            name: o.name,
            gizmo_id: s,
            drive_id: a,
            manifest: i
        };
        return b.post(`${A}/connectors/upload/${n}`, c)
    }
    static checkConnectorAPI(t) {
        const n = new URLSearchParams;
        return t.forEach(r => n.append("connector_names", r.toString())), b.safeGet("/connectors/check", {
            parameters: {
                query: {
                    connector_names: t
                }
            }
        })
    }
    static async deleteUserConnectedApp(t) {
        await b.safeDelete("/connectors/user_setting/{connector_name}", {
            parameters: {
                path: {
                    connector_name: t
                }
            }
        })
    }
    static getConnectorAccessToken(t, n) {
        const r = {};
        return n && (r.onedrive_business_scope = n), b.get(`${A}/connectors/access_token/${t}`, {
            params: r
        })
    }
    static getConnectorAccessTokenWithScope(t, n) {
        return b.get(`${A}/connectors/${t}/oauth/scoped_token`, {
            params: {
                oauth_scope: n
            }
        })
    }
    static async getMe() {
        return b.getAnonAware("/me")
    }
    static getUpgradeInvites() {
        return b.get(`${A}/upgrade_invites/`)
    }
    static postRegisterWebsocket() {
        return b.post(`${A}/register-websocket`)
    }
    static async getMemories(t, n = !0) {
        return b.safeGet("/memories", {
            parameters: {
                query: {
                    gizmo_id: t ? encodeURIComponent(t) : void 0,
                    include_memory_entries: n ? void 0 : !1
                }
            }
        })
    }
    static async deleteMemory(t, n) {
        const {
            success: r
        } = await b.deleteWithPayload(`${A}/memories/${t}`, n ? {
            gizmo_id: n
        } : {});
        if (!r) throw new Error("An error occurred while deleting the memory")
    }
    static async getGizmosWithMemory() {
        return b.get(`${A}/memories/gizmos`)
    }
    static async getActiveUserSurvey() {
        return b.get(`${A}/user_surveys/active`)
    }
    static async completeUserSurvey(t, n) {
        return b.post(`${A}/user_surveys/${t}/complete`, {
            reason: n
        })
    }
    static async getMfaInfo() {
        return b.get(`${A}/accounts/mfa_info`)
    }
    static async getReportReasons(t) {
        return b.get(`${hs}/report_flow/reasons/${t}`, {
            authOption: fe.SendIfAvailable
        })
    }
    static async postReport(t) {
        return b.post(`${hs}/report_flow/report`, t, {
            authOption: fe.SendIfAvailable
        })
    }
    static async disableMfa() {
        return b.post(`${A}/accounts/disable_mfa`)
    }
    static async requestMfaToken() {
        return b.safePost("/accounts/mfa/user/request_mfa_token_in_house", {})
    }
    static async disableNativeMFA(t) {
        return b.safePost("/accounts/mfa/user/disable_in_house", {
            requestBody: {
                factor_id: t
            }
        })
    }
    static async logoutAll() {
        return b.post(`${A}/accounts/logout_all`)
    }
    static async synthesize({
        message_id: t,
        conversation_id: n,
        voice: r,
        format: o
    }) {
        const s = {
            message_id: t,
            conversation_id: n,
            voice: r
        };
        o && (s.format = o);
        const a = new URLSearchParams(s);
        return b.get(`${A}/synthesize?${a.toString()}`, {
            skipJsonTransform: !0
        })
    }
    static async getUserSettingVoices(t = !1) {
        return b.get(`${A}/settings/voices`, t ? b.getUnauthHeaders() : {})
    }
    static async getVoiceFeedbackOptions() {
        return b.get(`${A}/conversation/voice/feedback-options`)
    }
    static async submitVoiceFeedback(t) {
        return b.post(`${A}/conversation/voice/feedback`, t)
    }
    static async getWorkspaceGroups(t, {
        query: n = "",
        offset: r = 0,
        orderby: o = "created_time desc",
        limit: s = 20
    }) {
        return b.safeGet("/accounts/{account_id}/groups", {
            parameters: {
                path: {
                    account_id: t
                },
                query: {
                    query: n,
                    offset: r,
                    orderby: o,
                    limit: s
                }
            }
        })
    }
    static async createWorkspaceGroup(t, n) {
        return b.post(`${A}/accounts/${t}/group`, {
            name: n
        })
    }
    static async addWorkspaceGroupUser(t, n, r) {
        return b.patch(`${A}/accounts/${t}/group/${n}`, {
            user_id: r
        })
    }
    static async updateWorkspaceGroup(t, n, r) {
        return b.patch(`${A}/accounts/${t}/group/${n}`, {
            name: r
        })
    }
    static async bulkAddWorkspaceGroupUsers(t, n, r) {
        return b.post(`${A}/accounts/${t}/group/${n}/users`, {
            email_addresses: r
        })
    }
    static async listWorkspaceGroupMembers(t, n, r, o) {
        return b.get(`${A}/accounts/${t}/group/${n}/users`, {
            params: {
                query: r,
                offset: o.toString()
            }
        })
    }
    static async deleteWorkspaceGroup(t, n) {
        return b.delete(`${A}/accounts/${t}/group/${n}`)
    }
    static async removeWorkspaceGroupMember(t, n, r) {
        return b.delete(`${A}/accounts/${t}/group/${n}/users/${r}`)
    }
    static async stopConversationProcess(t) {
        return b.post(`${A}/stop_conversation`, {
            conversation_id: t
        }, {
            authOption: fe.SendIfAvailable
        })
    }
    static async stopWebsocketConversation(t) {
        if (Xc.has(t)) return;
        const n = b.post(`${A}/stop_conversation`, {
            websocket_request_id: t
        }, {
            authOption: fe.SendIfAvailable
        });
        return Xc.add(t), n
    }
    static async generateAutocompletions(t, n, r) {
        return b.post(`${A}/conversation/experimental/generate_autocompletions`, {
            input_text: t,
            num_completions: n,
            in_search_mode: r
        })
    }
    static async generateAutocompletionsAnon(t, n, r) {
        return b.safePost("/conversation/experimental/generate_autocompletions_anon", {
            requestBody: {
                input_text: t,
                num_completions: n,
                in_search_mode: r
            },
            authOption: fe.Anonymous
        })
    }
    static generateTrendingSuggestions(t) {
        return b.post(`${A}/conversation/experimental/generate_trending_suggestions`, {
            num_items: t
        }, {
            authOption: fe.SendIfAvailable
        })
    }
    static async getClientApplications() {
        return b.safeGet("/client_applications", {})
    }
    static async revokeClientApplication(t) {
        return b.safeDelete("/client_applications/{client_id}", {
            parameters: {
                path: {
                    client_id: t
                }
            }
        })
    }
    static async createOnboardingSteps(t, n, r) {
        return b.safePost("/onboarding/steps", {
            requestBody: {
                main_usage: t,
                main_usages: n,
                user_description: r
            },
            authOption: fe.SendIfAvailable
        })
    }
    static async addEmailBegin(t) {
        return b.safePost("/accounts/add_email/begin", {
            requestBody: {
                email: t,
                auth0_client_id: gx.AUTH0_CLIENT_ID
            },
            authOption: fe.Required
        })
    }
    static async addEmailVerify(t, n) {
        return b.safePost("/accounts/add_email/verify", {
            requestBody: {
                email: t,
                code: n
            },
            authOption: fe.Required
        })
    }
    static async getClientStrings() {
        return b.safeGet("/client/strings", {})
    }
    static async getPromotionEligibility(t) {
        return await b.safeGet("/promotions/eligibility/{promo_code}", {
            parameters: {
                path: {
                    promo_code: t
                }
            }
        })
    }
    static async getPromotionMetadata(t) {
        return b.safeGet("/promotions/metadata/{promo_code}", {
            parameters: {
                path: {
                    promo_code: t
                }
            }
        })
    }
    static async getTraitPills() {
        return b.safeGet("/user_system_message_trait_pills", {})
    }
    static async applyClassmatesPromotion(t, n) {
        return b.safePost("/classmates/apply_promotion", {
            requestBody: {
                classmates_promotion_id: t,
                account_id: n,
                updated_plan: "chatgptplusplan"
            }
        })
    }
    static async listWorkOSConnections(t) {
        return b.safeGet("/accounts/{account_id}/sso/workos/connections/list", {
            authOption: fe.SendIfAvailable,
            parameters: {
                path: {
                    account_id: t
                }
            }
        })
    }
    static async getOrCreateWorkOSConnection(t) {
        return b.safePost("/accounts/{account_id}/sso/connections/workos", {
            requestBody: {
                enabled_client_names: ["chat"]
            },
            authOption: fe.SendIfAvailable,
            parameters: {
                path: {
                    account_id: t
                }
            }
        })
    }
}
const _x = ["AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "CV", "KH", "CM", "CA", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CD", "CG", "CK", "CR", "HR", "CU", "CW", "CY", "CZ", "CI", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "SZ", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "MK", "RO", "RU", "RW", "RE", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "SS", "ES", "LK", "SD", "SR", "SJ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "UM", "US", "UY", "UZ", "VU", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW", "AX"],
    vx = new Set(["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IS", "IE", "IT", "LV", "LI", "LT", "LU", "MT", "NL", "NO", "PL", "PT", "RO", "SK", "SI", "ES", "SE"]),
    Ur = "US",
    Cx = "GB",
    yx = "CH",
    bx = {
        AF: "Afghanistan",
        AL: "Albania",
        DZ: "Algeria",
        AS: "American Samoa",
        AD: "Andorra",
        AO: "Angola",
        AI: "Anguilla",
        AQ: "Antarctica",
        AG: "Antigua & Barbuda",
        AR: "Argentina",
        AM: "Armenia",
        AW: "Aruba",
        AU: "Australia",
        AT: "Austria",
        AZ: "Azerbaijan",
        BS: "Bahamas",
        BH: "Bahrain",
        BD: "Bangladesh",
        BB: "Barbados",
        BY: "Belarus",
        BE: "Belgium",
        BZ: "Belize",
        BJ: "Benin",
        BM: "Bermuda",
        BT: "Bhutan",
        BO: "Bolivia",
        BQ: "Caribbean Netherlands",
        BA: "Bosnia & Herzegovina",
        BW: "Botswana",
        BV: "Bouvet Island",
        BR: "Brazil",
        IO: "British Indian Ocean Territory",
        BN: "Brunei",
        BG: "Bulgaria",
        BF: "Burkina Faso",
        BI: "Burundi",
        CV: "Cape Verde",
        KH: "Cambodia",
        CM: "Cameroon",
        CA: "Canada",
        KY: "Cayman Islands",
        CF: "Central African Republic",
        TD: "Chad",
        CL: "Chile",
        CN: "China",
        CX: "Christmas Island",
        CC: "Cocos (Keeling) Islands",
        CO: "Colombia",
        KM: "Comoros",
        CD: "Congo - Kinshasa",
        CG: "Congo - Brazzaville",
        CK: "Cook Islands",
        CR: "Costa Rica",
        HR: "Croatia",
        CU: "Cuba",
        CW: "Curaçao",
        CY: "Cyprus",
        CZ: "Czechia",
        CI: "Côte d’Ivoire",
        DK: "Denmark",
        DJ: "Djibouti",
        DM: "Dominica",
        DO: "Dominican Republic",
        EC: "Ecuador",
        EG: "Egypt",
        SV: "El Salvador",
        GQ: "Equatorial Guinea",
        ER: "Eritrea",
        EE: "Estonia",
        SZ: "Eswatini",
        ET: "Ethiopia",
        FK: "Falkland Islands (Islas Malvinas)",
        FO: "Faroe Islands",
        FJ: "Fiji",
        FI: "Finland",
        FR: "France",
        GF: "French Guiana",
        PF: "French Polynesia",
        TF: "French Southern Territories",
        GA: "Gabon",
        GM: "Gambia",
        GE: "Georgia",
        DE: "Germany",
        GH: "Ghana",
        GI: "Gibraltar",
        GR: "Greece",
        GL: "Greenland",
        GD: "Grenada",
        GP: "Guadeloupe",
        GU: "Guam",
        GT: "Guatemala",
        GG: "Guernsey",
        GN: "Guinea",
        GW: "Guinea-Bissau",
        GY: "Guyana",
        HT: "Haiti",
        HM: "Heard & McDonald Islands",
        VA: "Vatican City",
        HN: "Honduras",
        HK: "Hong Kong",
        HU: "Hungary",
        IS: "Iceland",
        IN: "India",
        ID: "Indonesia",
        IR: "Iran",
        IQ: "Iraq",
        IE: "Ireland",
        IM: "Isle of Man",
        IL: "Israel",
        IT: "Italy",
        JM: "Jamaica",
        JP: "Japan",
        JE: "Jersey",
        JO: "Jordan",
        KZ: "Kazakhstan",
        KE: "Kenya",
        KI: "Kiribati",
        KP: "North Korea",
        KR: "South Korea",
        KW: "Kuwait",
        KG: "Kyrgyzstan",
        LA: "Laos",
        LV: "Latvia",
        LB: "Lebanon",
        LS: "Lesotho",
        LR: "Liberia",
        LY: "Libya",
        LI: "Liechtenstein",
        LT: "Lithuania",
        LU: "Luxembourg",
        MO: "Macao",
        MG: "Madagascar",
        MW: "Malawi",
        MY: "Malaysia",
        MV: "Maldives",
        ML: "Mali",
        MT: "Malta",
        MH: "Marshall Islands",
        MQ: "Martinique",
        MR: "Mauritania",
        MU: "Mauritius",
        YT: "Mayotte",
        MX: "Mexico",
        FM: "Micronesia",
        MD: "Moldova",
        MC: "Monaco",
        MN: "Mongolia",
        ME: "Montenegro",
        MS: "Montserrat",
        MA: "Morocco",
        MZ: "Mozambique",
        MM: "Myanmar (Burma)",
        NA: "Namibia",
        NR: "Nauru",
        NP: "Nepal",
        NL: "Netherlands",
        NC: "New Caledonia",
        NZ: "New Zealand",
        NI: "Nicaragua",
        NE: "Niger",
        NG: "Nigeria",
        NU: "Niue",
        NF: "Norfolk Island",
        MP: "Northern Mariana Islands",
        NO: "Norway",
        OM: "Oman",
        PK: "Pakistan",
        PW: "Palau",
        PS: "Palestine",
        PA: "Panama",
        PG: "Papua New Guinea",
        PY: "Paraguay",
        PE: "Peru",
        PH: "Philippines",
        PN: "Pitcairn Islands",
        PL: "Poland",
        PT: "Portugal",
        PR: "Puerto Rico",
        QA: "Qatar",
        MK: "North Macedonia",
        RO: "Romania",
        RU: "Russia",
        RW: "Rwanda",
        RE: "Réunion",
        BL: "St. Barthélemy",
        SH: "St. Helena",
        KN: "St. Kitts & Nevis",
        LC: "St. Lucia",
        MF: "St. Martin",
        PM: "St. Pierre & Miquelon",
        VC: "St. Vincent & Grenadines",
        WS: "Samoa",
        SM: "San Marino",
        ST: "São Tomé & Príncipe",
        SA: "Saudi Arabia",
        SN: "Senegal",
        RS: "Serbia",
        SC: "Seychelles",
        SL: "Sierra Leone",
        SG: "Singapore",
        SX: "Sint Maarten",
        SK: "Slovakia",
        SI: "Slovenia",
        SB: "Solomon Islands",
        SO: "Somalia",
        ZA: "South Africa",
        GS: "South Georgia & South Sandwich Islands",
        SS: "South Sudan",
        ES: "Spain",
        LK: "Sri Lanka",
        SD: "Sudan",
        SR: "Suriname",
        SJ: "Svalbard & Jan Mayen",
        SE: "Sweden",
        CH: "Switzerland",
        SY: "Syria",
        TW: "Taiwan",
        TJ: "Tajikistan",
        TZ: "Tanzania",
        TH: "Thailand",
        TL: "Timor-Leste",
        TG: "Togo",
        TK: "Tokelau",
        TO: "Tonga",
        TT: "Trinidad & Tobago",
        TN: "Tunisia",
        TR: "Türkiye",
        TM: "Turkmenistan",
        TC: "Turks & Caicos Islands",
        TV: "Tuvalu",
        UG: "Uganda",
        UA: "Ukraine",
        AE: "United Arab Emirates",
        GB: "United Kingdom",
        UM: "U.S. Outlying Islands",
        US: "United States",
        UY: "Uruguay",
        UZ: "Uzbekistan",
        VU: "Vanuatu",
        VE: "Venezuela",
        VN: "Vietnam",
        VG: "British Virgin Islands",
        VI: "U.S. Virgin Islands",
        WF: "Wallis & Futuna",
        EH: "Western Sahara",
        YE: "Yemen",
        ZM: "Zambia",
        ZW: "Zimbabwe",
        AX: "Åland Islands"
    };

function Sx(e) {
    return _x.includes(e)
}

function I7(e, t) {
    return t ? (M.addAction(`Force using ${Ur}`, {
        user_country: e
    }), Ur) : e == null || !Sx(e) ? (M.addError(`User country is null or unrecognized - will use ${Ur}`, {
        user_country: e
    }), Ur) : e
}

function k7(e) {
    try {
        const t = new Intl.DisplayNames([e], {
            type: "region"
        });
        return n => t.of(n) ? ? ""
    } catch (t) {
        return M.addError("Failed to create country display name formatter, will fallback to en_US locale display name", {
            cause: t
        }), n => bx[n] ? ? ""
    }
}

function wx(e) {
    return vx.has(e)
}
const ef = "USD",
    Tx = "GBP",
    el = "EUR";

function E7(e) {
    return wx(e) || e == yx ? el : e == Cx ? Tx : ef
}
const En = {
        dollarSign: {
            id: "currencyCodes.dollarSign",
            defaultMessage: "$"
        },
        dollarCode: {
            id: "currencyCodes.dollarCode",
            defaultMessage: "USD"
        },
        poundSign: {
            id: "currencyCodes.poundSign",
            defaultMessage: "£"
        },
        poundCode: {
            id: "currencyCodes.poundCode",
            defaultMessage: "GBP"
        },
        euroSign: {
            id: "currencyCodes.euroSign",
            defaultMessage: "€"
        },
        euroCode: {
            id: "currencyCodes.euroCode",
            defaultMessage: "EUR"
        }
    },
    x7 = {
        sign: En.dollarSign,
        code: En.dollarCode
    },
    R7 = {
        sign: En.poundSign,
        code: En.poundCode
    },
    O7 = {
        sign: En.euroSign,
        code: En.euroCode
    };

function Ax(e) {
    return [Je.ENTERPRISE, Je.BUSINESS, Je.EDU, Je.QUORUM].includes(e)
}
var Ix = Za;

function kx(e, t) {
    return Ix(e, t)
}
var Ex = kx;
const Qo = Te(Ex),
    xx = Je.FREE,
    Rx = sr.OWNER,
    Ox = "AccountState";
kk(Ox, e => ({ ...e,
    accountItems: e.accountItems.map(t => new po(t.data))
}));

function tf(e) {
    return Date.parse(e) / 1e3
}

function Mx(e) {
    if (e == null) return;
    const t = tf(e);
    if (!isNaN(t)) return t
}
class po {
    constructor(t) {
        this.data = t
    }
    get id() {
        return this.data.id
    }
    get residencyRegion() {
        return this.data.residencyRegion
    }
    get structure() {
        return this.data.structure
    }
    get name() {
        return this.data.name
    }
    get features() {
        return this.data.features
    }
    isEqual(t) {
        return Qo(this.data, t.data)
    }
    get planType() {
        return this.data.subscriptionStatus.planType
    }
    get canAccessWithCurrentSession() {
        return this.data.canAccessWithCurrentSession
    }
    get ssoConnectionName() {
        return this.data.ssoConnectionName
    }
    get accountUserId() {
        return this.data.accountUserId
    }
    get normalizedAccountUserId() {
        return this.isPersonalAccount() ? this.authUserId : this.data.accountUserId
    }
    get authUserId() {
        return this.data.accountUserId ? .split("__")[0]
    }
    get subscriptionAnalyticsParams() {
        const {
            subscriptionStatus: t
        } = this.data;
        return {
            currentPlanType: t.planType,
            subscriptionStatus: {
                billingPeriod: t.billingPeriod,
                hasPaidSubscription: t.hasPaidSubscription,
                subscriptionPlan: t.subscriptionPlan,
                subscriptionExpiresAt: t.subscriptionExpiresAt,
                wasPaidCustomer: t.wasPaidCustomer
            }
        }
    }
    isResellerHosted() {
        return this.data.subscriptionStatus.isResellerHosted
    }
    isEnterprisey() {
        return Ax(this.data.subscriptionStatus.planType)
    }
    isWorkspacePlan() {
        return this.isEnterprisey() || this.isTeam()
    }
    isPro() {
        return this.data.subscriptionStatus.planType === Je.PRO
    }
    isEdu() {
        return this.data.subscriptionStatus.planType === Je.EDU
    }
    isTeam() {
        return this.data.subscriptionStatus.planType === Je.TEAM
    }
    isPlus() {
        return this.data.subscriptionStatus.planType === Je.PLUS
    }
    isFree() {
        return this.data.subscriptionStatus.planType === Je.FREE
    }
    isWorkspaceAccount() {
        return this.data.structure === We.WORKSPACE
    }
    isPlusOrPro() {
        return this.isPlus() || this.isPro()
    }
    getWorkspaceId() {
        if (this.isWorkspaceAccount()) return this.id
    }
    getDaysUntilPlanExpires() {
        const t = this.data.subscriptionStatus.subscriptionExpiresAt;
        if (t == null) return null;
        const n = Math.floor(Date.now() / 1e3);
        return Math.ceil((t - n) / (60 * 60 * 24))
    }
    isPersonalAccount() {
        return this.data.structure === We.PERSONAL
    }
    hasPaidSubscription() {
        return this.data.subscriptionStatus.hasPaidSubscription
    }
    isActiveSubscriptionGratis() {
        return this.data.subscriptionStatus.isActiveSubscriptionGratis
    }
    getSubscriptionBillingCurrency() {
        return this.data.subscriptionStatus.billingCurrency
    }
    mustGetSubscriptionBillingCurrency(t) {
        const n = this.getSubscriptionBillingCurrency();
        return n !== void 0 ? (M.addAction("chatgpt_present_subscription_billing_currency", {
            subscriptionBillingCurrency: n,
            callLocation: t
        }), J.logEvent("chatgpt_present_subscription_billing_currency", null, {
            subscriptionBillingCurrency: n,
            callLocation: t
        }), n) : (M.addError(new Error("chatgpt_missing_subscription_billing_currency"), {
            callLocation: t
        }), J.logEvent("chatgpt_missing_subscription_billing_currency", null, {
            callLocation: t
        }), ef)
    }
    willRenewSubscription() {
        return this.data.subscriptionStatus.lastActiveSubscription.will_renew
    }
    willPlanChange() {
        return !!this.data.subscriptionStatus.scheduledPlanChange
    }
    getDaysUntilPlanChanges() {
        const t = this.data.subscriptionStatus.scheduledPlanChange ? .changesAt;
        if (t == null) return null;
        const n = Math.floor(Date.now() / 1e3);
        return Math.ceil((t - n) / (60 * 60 * 24))
    }
    getNextPlanType() {
        return this.data.subscriptionStatus.scheduledPlanChange ? .planType ? ? null
    }
    getLastActiveSubscription() {
        return this.data.subscriptionStatus.lastActiveSubscription
    }
    isDeactivated() {
        return this.data.deactivated
    }
    canInviteMembers() {
        return this.isTeam() || this.isEnterprisey() && (this.isOwnerOfAccount() || this.isAdminOfAccount())
    }
    isOwnerOfAccount() {
        return this.data.role === sr.OWNER
    }
    isAdminOfAccount() {
        return this.data.role === sr.ADMIN
    }
    isStandardUserOfAccount() {
        return this.data.role === sr.STANDARD
    }
    hasPlusFeatures() {
        return this.hasPaidSubscription() || this.isEnterprisey()
    }
    hasCustomerObject() {
        return this.data.subscriptionStatus.hasCustomerObject
    }
    getProcessorEntity() {
        return this.data.subscriptionStatus.processorEntity
    }
    wasPaidCustomer() {
        return !this.data.subscriptionStatus.hasPaidSubscription && this.data.subscriptionStatus.wasPaidCustomer
    }
    isOrWasPaidCustomer() {
        return this.data.subscriptionStatus.hasPaidSubscription || this.data.subscriptionStatus.wasPaidCustomer
    }
    hasClaimedFreeTrial() {
        return this.data.promoData ? .has_claimed_free_trial ? ? !1
    }
    canCreateGPTs() {
        return this.hasPlusFeatures()
    }
    isEligibleForCancellationPromotion() {
        return this.data.subscriptionStatus.isEligibleForCancellationPromotion
    }
}

function Lx(e) {
    return e.account_ordering.map(t => {
        const n = e.accounts[t];
        return new po({
            id: n.account.account_id,
            residencyRegion: n.account.account_residency_region,
            accountUserId: n.account.account_user_id,
            name: n.account.name ? ? null,
            profilePictureId: n.account.profile_picture_id,
            profilePictureUrl: n.account.profile_picture_url,
            structure: n.account.structure,
            role: n.account.account_user_role ? ? Rx,
            organizationId: n.account.organization_id,
            promoData: n.account.promo_data,
            deactivated: n.account.is_deactivated,
            subscriptionStatus: {
                billingPeriod: n.entitlement.billing_period,
                hasPaidSubscription: n.entitlement.has_active_subscription || !1,
                isActiveSubscriptionGratis: n.entitlement.is_active_subscription_gratis || !1,
                billingCurrency: n.entitlement.billing_currency,
                subscriptionPlan: n.entitlement.subscription_plan,
                planType: n.account.plan_type ? ? xx,
                subscriptionExpiresAt: Mx(n.entitlement.expires_at),
                scheduledPlanChange: n.entitlement.scheduled_plan_change ? {
                    changesAt: tf(n.entitlement.scheduled_plan_change.changes_at),
                    planType: n.entitlement.scheduled_plan_change.plan_type
                } : void 0,
                wasPaidCustomer: n.account.has_previously_paid_subscription ? ? !1,
                hasCustomerObject: n.account.processor ? .a001.has_customer_object ? ? !1,
                processorEntity: n.account.processor ? .a001.processor_entity,
                lastActiveSubscription: n.last_active_subscription,
                isResellerHosted: n.account.reseller_hosted_account ? ? !1,
                discount: n.entitlement.discount,
                isEligibleForCancellationPromotion: n.entitlement.is_eligible_for_cp ? ? !1
            },
            features: [...n.features].sort(),
            canAccessWithCurrentSession: n.can_access_with_session !== !1,
            ssoConnectionName: n.sso_connection_name ? ? null
        })
    })
}

function Px(e, t) {
    const n = e.filter(o => o.canAccessWithCurrentSession);
    if (typeof t == "string") {
        const o = n.find(s => s.id === t);
        if (o !== void 0) return o;
        if (t === qt) {
            const s = n.find(a => a.structure === We.PERSONAL);
            if (s !== void 0) return s
        }
    }
    if (n.length === 1 || !n.some(o => o.structure === We.WORKSPACE)) return n[0]
}

function tl(e, t) {
    if (e) {
        if (e.structure === We.WORKSPACE) return e.id;
        if (t.some(r => r.structure === We.WORKSPACE)) return qt
    }
}
async function Dx() {
    const e = await li.getAccountStatusV4(),
        t = X.getCookie(K.Workspace) ? ? void 0,
        n = Lx(e),
        r = Px(n, t);
    return {
        accountItems: n,
        currentAccountId: r ? .id
    }
}

function $x(e, t) {
    return e instanceof po && t instanceof po && e.isEqual(t) ? e : Ag(e, t)
}

function vt() {
    return Ro({
        queryKey: ["account-status"],
        queryFn: Dx,
        structuralSharing: $x,
        staleTime: 1 / 0
    })
}

function ho(e) {
    return e ? .accountItems.find(t => t.id === e.currentAccountId) ? ? null
}

function M7(e) {
    const t = e.getQueryData(vt().queryKey);
    return ho(t)
}

function go(e) {
    e != null ? X.setCookie(K.Workspace, e, {
        maxAge: Od
    }) : X.deleteCookie(K.Workspace)
}

function Ux(e) {
    X.setCookie(K.WorkspaceResidencyRegion, e, {
        maxAge: Od
    })
}

function nf(e, t) {
    const n = X.getCookie(K.Workspace);
    return e.structure === We.WORKSPACE ? (go(e.id), Ux(e.residencyRegion)) : e.structure === We.PERSONAL && t && go(qt), X.deleteCookie(K.DowngradeAccountEnabled), {
        accountCookieChanged: (n ? ? qt) !== (X.getCookie(K.Workspace) ? ? qt)
    }
}

function L7(e, t, n = !0) {
    const r = e.getQueryData(vt().queryKey);
    if (r == null) return {
        updatedAccount: !1
    };
    const o = r.accountItems.find(s => s.id === t);
    return o == null ? {
        updatedAccount: !1
    } : (nf(o, n), e.setQueryData(vt().queryKey, { ...r,
        currentAccountId: t
    }), {
        updatedAccount: !0
    })
}

function P7(e, t, n, r, o, s = !0) {
    const a = e.getQueryData(vt().queryKey);
    if (a == null) return {
        willRedirect: !1,
        updatedAccount: !1
    };
    const i = a.accountItems.find(l => l.id === t);
    if (i == null) return {
        willRedirect: !1,
        updatedAccount: !1
    };
    const {
        accountCookieChanged: c
    } = nf(i, s);
    if (!i.canAccessWithCurrentSession) {
        const l = i.ssoConnectionName ? {
                connection: i.ssoConnectionName
            } : void 0,
            d = r.formatMessage(nl.workspacePlaceholder),
            p = i.data.name || d;
        return o.info(r.formatMessage(nl.authenticateNotice, {
            workspaceName: p
        })), n({
            authType: "login",
            additionalAuthParams: l
        }), {
            willRedirect: !0,
            updatedAccount: !0
        }
    }
    return c ? fo() : e.setQueryData(vt().queryKey, { ...a,
        currentAccountId: t
    }), {
        willRedirect: !1,
        updatedAccount: !0
    }
}

function D7() {
    return tn(vt())
}

function Jo() {
    return tn({ ...vt(),
        select: ho
    }).data ? ? null
}

function Bx() {
    return Jo() ? .features
}

function $7(e) {
    return Bx() ? .includes(e) ? ? !1
}

function U7() {
    const e = Jo(),
        t = aE(e ? .getWorkspaceId()),
        n = t.isLoading ? null : t.data ? .allow_third_party_gpts === "allow_specific";
    return e ? .isOwnerOfAccount() && n
}

function B7(e) {
    return e.accountItems.some(t => t.hasPlusFeatures())
}
const nl = {
        authenticateNotice: {
            id: "zALe8U",
            defaultMessage: "You need to authenticate to access {workspaceName}. Redirecting..."
        },
        workspacePlaceholder: {
            id: "IIY4N4",
            defaultMessage: "this workspace"
        }
    },
    Nx = 1,
    Fx = 1e4,
    rl = 50;

function jx() {
    return !document.hidden
}
class Gx {
    id = `timespent-${nt()}`;
    sessionStartedUtcTimestamp = void 0;
    timeElapsedOnActiveTabMs = 0;
    elapsedTimeNextToReportMs = 0;
    countReports = 0;
    intervalTimer;
    enable() {
        const t = Date.now();
        this.sessionStartedUtcTimestamp = t, this.handleReportTime(), this._beginIntervalTimer()
    }
    disable() {
        clearInterval(this.intervalTimer), this.intervalTimer = void 0
    }
    handleReportTime() {
        const t = {
            id: this.id,
            sessionStartedUtcTimestamp: this.sessionStartedUtcTimestamp,
            elapsedTotalTimeMs: this.timeElapsedOnActiveTabMs,
            reportIndex: this.countReports,
            version: Nx
        };
        me.logEvent(te.trackTimeSpentInterval, t), this.onAfterReport()
    }
    _beginIntervalTimer() {
        this.intervalTimer || (this.intervalTimer = setInterval(() => {
            this._handleOnInterval()
        }, rl))
    }
    _handleOnInterval() {
        jx() && (this.timeElapsedOnActiveTabMs += rl, this.timeElapsedOnActiveTabMs >= this.elapsedTimeNextToReportMs && this.handleReportTime())
    }
    onAfterReport() {
        this.elapsedTimeNextToReportMs += Fx, this.countReports += 1
    }
}
const Vx = new Gx;
class Hx {#
    e;#
    t = t => (this.#e || (this.#e = R(() =>
        import ("./mvwi8m8k06yj05fu.js"), __vite__mapDeps([4, 1])).then(n => n ? .datadogLogs)), this.#e.then(n => n && t(n)));
    init(t) {
        this.#t(n => n.init(t))
    }
    setGlobalContextProperty(t, n) {
        this.#t(r => r.setGlobalContextProperty(t, n))
    }
    setUser(t) {
        this.#t(n => n.setUser(t))
    }
    get logger() {
        return {
            setHandler: t => {
                this.#t(n => n.logger.setHandler(t))
            }
        }
    }
    createLogger(t, n) {
        return new Wx(this.#t, t, n)
    }
}
class Wx {#
    e;
    constructor(t, n, r) {
        this.#e = t(o => o.createLogger(n, r))
    }#
    t = t => this.#e.then(n => n && t(n));
    ok(t, n, r) {
        this.#t(o => o.ok(t, n, r))
    }
    debug(t, n, r) {
        this.#t(o => o.debug(t, n, r))
    }
    info(t, n, r) {
        this.#t(o => o.info(t, n, r))
    }
    notice(t, n, r) {
        this.#t(o => o.notice(t, n, r))
    }
    warn(t, n, r) {
        this.#t(o => o.warn(t, n, r))
    }
    error(t, n, r) {
        this.#t(o => o.error(t, n, r))
    }
    critical(t, n, r) {
        this.#t(o => o.critical(t, n, r))
    }
    alert(t, n, r) {
        this.#t(o => o.alert(t, n, r))
    }
    emerg(t, n, r) {
        this.#t(o => o.emerg(t, n, r))
    }
}
const ln = new Hx,
    zx = "datadoghq.com",
    qx = "chatgpt-web",
    Kx = "pub1f79f8ac903a5872ae5f53026d20a77c";
class Yx {
    initialize() {
        const t = Lo ? ye ? .getTelemetryConfig ? .() : void 0,
            n = t !== void 0 ? t.datadogService : qx;
        ln.init({
            clientToken: Kx,
            site: zx,
            service: n,
            env: "prod",
            version: "9f2258c640519bcc2ac5d4dfb5685ee6aaf9dfd7",
            sessionSampleRate: 100,
            forwardErrorsToLogs: !1,
            beforeSend: r => (r.view.url = or(r.view.url), r.http && r.http.url && (r.http.url = or(r.http.url)), !0)
        }), ln.setGlobalContextProperty("track", "stable"), ln.setGlobalContextProperty("is_electron_desktop_app", t !== void 0), ln.logger.setHandler(["http"])
    }
    setUser(t, n, r) {
        const o = {
            user_id: t.id,
            has_paid_plan: n ? .hasPaidSubscription,
            account_plan_user_role: n ? .accountUserRole,
            account_plan_name: n ? .subscriptionPlan,
            account_plan_type: n ? .planType,
            workspace_id: r
        };
        ln.setUser(o)
    }
    createLogger(t, n = "info", r = "http", o) {
        return ln.createLogger(t, {
            level: n,
            handler: r,
            context: o
        })
    }
}
const Rs = new Yx,
    rf = nn(() => ({
        isComplete: !1
    })),
    Zx = e => Dn(rf, e),
    N7 = () => Zx(e => e.isComplete);
let ol = !1; {
    const e = function() {
        return window.location.pathname !== "/search" ? void 0 : {
            sessionSampleRate: 100,
            traceSampleRate: 100
        }
    }();
    M.initialize(e)
}
async function F7(e, t, n) {
    if (ol) return;
    ol = !0;
    const r = new URL(location.href);
    if (r.searchParams.get("refresh_account") === "true" && (r.searchParams.delete("refresh_account"), history.replaceState(null, "", r)), window.addEventListener("vite:preloadError", o => {
            o.preventDefault(), M.addAction("vite:preloadError", {
                payload: o.payload
            })
        }), kt(), xI(), M.addTiming("chatgpt.web.bootstrapClient"), M.addAction("bootstrap_client.start"), window.__oai_SSR_HTML ? M.addFirstTiming("composer.html", window.__oai_SSR_HTML) : window.__oai_logHTML = () => {
            M.addFirstTiming("composer.html")
        }, window.__oai_SSR_TTI ? M.addFirstTiming("composer.visible", window.__oai_SSR_TTI) : window.__oai_logTTI = () => {
            M.addFirstTiming("composer.visible")
        }, Rs.initialize(), e.authStatus === Tn.LoggedIn) {
        const o = e.user,
            s = e.session ? .account;
        if (M.addAction("bootstrap_client.has_session_user"), M.addFeatureFlagEvaluation("has_light_account", !!s), s) {
            const a = X.getCookie(K.Workspace),
                i = a === qt ? void 0 : a,
                c = s.structure === We.WORKSPACE ? s.id : void 0;
            i !== c && M.addAction("bootstrap_client.account_cookie_mismatch", {
                accountCookieValue: a,
                lightAccount: s
            }), t.fetchQuery(vt()).then(l => {
                const d = ho(l);
                d && (d.id !== s.id || d.planType !== s.planType) && (go(tl(d, l.accountItems)), fo())
            }).catch(l => {
                if (!(l instanceof Ve && l.isClientError())) return M.addAction("bootstrap_client.fetchAccounts.error", {
                    error: l
                }), null
            }), qc(o, {
                planType: s.planType
            }), M.setUser(o, [], {
                planType: s.planType
            }, s.id), Rs.setUser(o, {
                planType: s.planType
            }, s.id), me.initialize({
                userInfo: {
                    currentAccount: s,
                    sessionUser: o
                }
            }), n(() => {
                J.initialize(o, s)
            }), M.addAction("bootstrap_client.success.is_authenticated", {
                hasCurrentAccount: !0
            })
        } else {
            let a = null;
            const i = await t.fetchQuery(vt()).catch(l => {
                if (!(l instanceof Ve && l.isClientError())) return M.addAction("bootstrap_client.fetchAccounts.error", {
                    error: l
                }), null
            });
            if (M.addTiming("chatgpt.web.fetchAccounts"), i) {
                a = ho(i);
                const l = X.getCookie(K.Workspace) ? ? void 0,
                    d = tl(a, i.accountItems);
                l !== d && go(d), a ? .structure === We.WORKSPACE && l !== a.id && fo()
            }
            const c = a ? { ...a.data.subscriptionStatus,
                accountUserRole: a.data.role
            } : null;
            qc(o, c), M.setUser(o, a ? .data.features ? ? [], c, a ? .id ? ? null), Rs.setUser(o, c, a ? .id ? ? null), me.initialize({
                userInfo: {
                    currentAccount: a ? ? null,
                    sessionUser: o
                }
            }), J.initialize(o, a ? ? null), a ? .features.includes(lE) && R(() =>
                import ("./gbb37zztm10o4oo8.js"), __vite__mapDeps([5, 6, 1, 7])).then(l => l ? .initOpenTelemetry()), a ? .features.includes(cE) && Vx.enable(), M.addAction("bootstrap_client.success.is_authenticated", {
                hasCurrentAccount: a != null
            })
        }
    } else M.addAction("bootstrap_client.does_not_have_session_user"), J.initialize(null, null), me.initialize(), M.addAction("bootstrap_client.success.is_not_authenticated");
    rf.setState({
        isComplete: !0
    }), fetch(`${A}/edge`).catch(() => {})
}
async function Qx() {
    if (!("container" in document.documentElement.style)) {
        performance.mark("polyfill.containerQuery.start");
        try {
            await R(() =>
                import ("./k8oe2xdgq3kfdi35.js"), [])
        } catch (e) {
            return M.addError(new Error("Error loading polyfill: containerQuery", {
                cause: e
            })), Promise.reject(e)
        }
        performance.mark("polyfill.containerQuery.end"), performance.measure("polyfill.containerQuery", "polyfill.containerQuery.start", "polyfill.containerQuery.end")
    }
}
async function Jx() {
    if (!CSS.supports("animation-timeline: --works") || window.ViewTimeline === void 0) {
        performance.mark("polyfill.scrollTimeline.start");
        try {
            await R(() =>
                import ("./o59jak2zuq3iyhrc.js"), [])
        } catch (e) {
            return M.addAction("Error loading polyfill: scrollTimeline", {
                cause: e
            }), Promise.reject(e)
        }
        performance.mark("polyfill.scrollTimeline.end"), performance.measure("polyfill.scrollTimeline", "polyfill.scrollTimeline.start", "polyfill.scrollTimeline.end")
    }
}
async function j7() {
    performance.mark("polyfill.all.start"), await Promise.allSettled([Qx(), Jx()]), performance.mark("polyfill.all.end"), performance.measure("polyfill.all", "polyfill.all.start", "polyfill.all.end")
}
const Xx = "9f2258c640519bcc2ac5d4dfb5685ee6aaf9dfd7",
    eR = "prod",
    tR = "",
    nR = "",
    G7 = `${eR}-${Xx}${tR}${nR}`,
    rR = u.createContext({
        cspScriptNonce: void 0,
        isElectron: !1,
        isIos: !1,
        isAndroidChrome: !1,
        windowStyle: void 0
    });

function V7(e) {
    return e.windowStyle === "chatbar_view"
}(function(e) {
    var t = {},
        n = Lg,
        r = Pg;
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = {
        SessionContext: !0,
        useSession: !0,
        getSession: !0,
        getCsrfToken: !0,
        getProviders: !0,
        signIn: !0,
        signOut: !0,
        SessionProvider: !0
    };
    e.SessionContext = void 0, e.SessionProvider = Bt, e.getCsrfToken = G, e.getProviders = W, e.getSession = B, e.signIn = be, e.signOut = ft, e.useSession = Q;
    var s = n(Ig()),
        a = n(kg()),
        i = n(Eg()),
        c = n(xg()),
        l = T(u),
        d = T(Rg()),
        p = n(Og()),
        h = Mg(),
        g = f,
        _ = Dg();
    Object.keys(_).forEach(function(L) {
        L === "default" || L === "__esModule" || Object.prototype.hasOwnProperty.call(o, L) || L in e && e[L] === _[L] || Object.defineProperty(e, L, {
            enumerable: !0,
            get: function() {
                return _[L]
            }
        })
    });
    var m, v, C, y, S;

    function w(L) {
        if (typeof WeakMap != "function") return null;
        var $ = new WeakMap,
            P = new WeakMap;
        return (w = function(oe) {
            return oe ? P : $
        })(L)
    }

    function T(L, $) {
        if (L && L.__esModule) return L;
        if (L === null || r(L) !== "object" && typeof L != "function") return {
            default: L
        };
        var P = w($);
        if (P && P.has(L)) return P.get(L);
        var V = {},
            oe = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var ee in L)
            if (ee !== "default" && Object.prototype.hasOwnProperty.call(L, ee)) {
                var he = oe ? Object.getOwnPropertyDescriptor(L, ee) : null;
                he && (he.get || he.set) ? Object.defineProperty(V, ee, he) : V[ee] = L[ee]
            }
        return V.default = L, P && P.set(L, V), V
    }

    function O(L, $) {
        var P = Object.keys(L);
        if (Object.getOwnPropertySymbols) {
            var V = Object.getOwnPropertySymbols(L);
            $ && (V = V.filter(function(oe) {
                return Object.getOwnPropertyDescriptor(L, oe).enumerable
            })), P.push.apply(P, V)
        }
        return P
    }

    function E(L) {
        for (var $ = 1; $ < arguments.length; $++) {
            var P = arguments[$] != null ? arguments[$] : {};
            $ % 2 ? O(Object(P), !0).forEach(function(V) {
                (0, a.default)(L, V, P[V])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(L, Object.getOwnPropertyDescriptors(P)) : O(Object(P)).forEach(function(V) {
                Object.defineProperty(L, V, Object.getOwnPropertyDescriptor(P, V))
            })
        }
        return L
    }
    var I = {
            baseUrl: (0, p.default)((m = t.NEXTAUTH_URL) !== null && m !== void 0 ? m : t.VERCEL_URL).origin,
            basePath: (0, p.default)(t.NEXTAUTH_URL).path,
            baseUrlServer: (0, p.default)((v = (C = t.NEXTAUTH_URL_INTERNAL) !== null && C !== void 0 ? C : t.NEXTAUTH_URL) !== null && v !== void 0 ? v : t.VERCEL_URL).origin,
            basePathServer: (0, p.default)((y = t.NEXTAUTH_URL_INTERNAL) !== null && y !== void 0 ? y : t.NEXTAUTH_URL).path,
            _lastSync: 0,
            _session: void 0,
            _getSession: function() {}
        },
        j = (0, h.BroadcastChannel)(),
        F = (0, d.proxyLogger)(d.default, I.basePath);

    function z() {
        var L = l.useState(typeof navigator < "u" ? navigator.onLine : !1),
            $ = (0, c.default)(L, 2),
            P = $[0],
            V = $[1],
            oe = function() {
                return V(!0)
            },
            ee = function() {
                return V(!1)
            };
        return l.useEffect(function() {
            return window.addEventListener("online", oe), window.addEventListener("offline", ee),
                function() {
                    window.removeEventListener("online", oe), window.removeEventListener("offline", ee)
                }
        }, []), P
    }
    var q = (S = l.createContext) === null || S === void 0 ? void 0 : S.call(l, void 0);
    e.SessionContext = q;

    function Q(L) {
        if (!q) throw new Error("React Context is unavailable in Server Components");
        var $ = l.useContext(q),
            P = L ? ? {},
            V = P.required,
            oe = P.onUnauthenticated,
            ee = V && $.status === "unauthenticated";
        return l.useEffect(function() {
            if (ee) {
                var he = "/api/auth/signin?".concat(new URLSearchParams({
                    error: "SessionRequired",
                    callbackUrl: window.location.href
                }));
                oe ? oe() : window.location.href = he
            }
        }, [ee, oe]), ee ? {
            data: $.data,
            update: $.update,
            status: "loading"
        } : $
    }

    function B(L) {
        return ie.apply(this, arguments)
    }

    function ie() {
        return ie = (0, i.default)(s.default.mark(function L($) {
            var P, V;
            return s.default.wrap(function(ee) {
                for (;;) switch (ee.prev = ee.next) {
                    case 0:
                        return ee.next = 2, (0, h.fetchData)("session", I, F, $);
                    case 2:
                        return V = ee.sent, (!((P = $ ? .broadcast) !== null && P !== void 0) || P) && j.post({
                            event: "session",
                            data: {
                                trigger: "getSession"
                            }
                        }), ee.abrupt("return", V);
                    case 5:
                    case "end":
                        return ee.stop()
                }
            }, L)
        })), ie.apply(this, arguments)
    }

    function G(L) {
        return re.apply(this, arguments)
    }

    function re() {
        return re = (0, i.default)(s.default.mark(function L($) {
            var P;
            return s.default.wrap(function(oe) {
                for (;;) switch (oe.prev = oe.next) {
                    case 0:
                        return oe.next = 2, (0, h.fetchData)("csrf", I, F, $);
                    case 2:
                        return P = oe.sent, oe.abrupt("return", P ? .csrfToken);
                    case 4:
                    case "end":
                        return oe.stop()
                }
            }, L)
        })), re.apply(this, arguments)
    }

    function W() {
        return D.apply(this, arguments)
    }

    function D() {
        return D = (0, i.default)(s.default.mark(function L() {
            return s.default.wrap(function(P) {
                for (;;) switch (P.prev = P.next) {
                    case 0:
                        return P.next = 2, (0, h.fetchData)("providers", I, F);
                    case 2:
                        return P.abrupt("return", P.sent);
                    case 3:
                    case "end":
                        return P.stop()
                }
            }, L)
        })), D.apply(this, arguments)
    }

    function be(L, $, P) {
        return Ee.apply(this, arguments)
    }

    function Ee() {
        return Ee = (0, i.default)(s.default.mark(function L($, P, V) {
            var oe, ee, he, qe, Ie, Be, Ke, ot, Nt, se, xr, Kn, Ft, xe, st, Ne, Oe;
            return s.default.wrap(function(x) {
                for (;;) switch (x.prev = x.next) {
                    case 0:
                        return oe = P ? ? {}, ee = oe.callbackUrl, he = ee === void 0 ? window.location.href : ee, qe = oe.redirect, Ie = qe === void 0 ? !0 : qe, Be = (0, h.apiBaseUrl)(I), x.next = 4, W();
                    case 4:
                        if (Ke = x.sent, Ke) {
                            x.next = 8;
                            break
                        }
                        return window.location.href = "".concat(Be, "/error"), x.abrupt("return");
                    case 8:
                        if (!(!$ || !($ in Ke))) {
                            x.next = 11;
                            break
                        }
                        return window.location.href = "".concat(Be, "/signin?").concat(new URLSearchParams({
                            callbackUrl: he
                        })), x.abrupt("return");
                    case 11:
                        return ot = Ke[$].type === "credentials", Nt = Ke[$].type === "email", se = ot || Nt, xr = "".concat(Be, "/").concat(ot ? "callback" : "signin", "/").concat($), Kn = "".concat(xr).concat(V ? "?".concat(new URLSearchParams(V)) : ""), x.t0 = fetch, x.t1 = Kn, x.t2 = {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }, x.t3 = URLSearchParams, x.t4 = E, x.t5 = E({}, P), x.t6 = {}, x.next = 25, G();
                    case 25:
                        return x.t7 = x.sent, x.t8 = he, x.t9 = {
                            csrfToken: x.t7,
                            callbackUrl: x.t8,
                            json: !0
                        }, x.t10 = (0, x.t4)(x.t5, x.t6, x.t9), x.t11 = new x.t3(x.t10), x.t12 = {
                            method: "post",
                            headers: x.t2,
                            body: x.t11
                        }, x.next = 33, (0, x.t0)(x.t1, x.t12);
                    case 33:
                        return Ft = x.sent, x.next = 36, Ft.json();
                    case 36:
                        if (xe = x.sent, !(Ie || !se)) {
                            x.next = 42;
                            break
                        }
                        return Ne = (st = xe.url) !== null && st !== void 0 ? st : he, window.location.href = Ne, Ne.includes("#") && window.location.reload(), x.abrupt("return");
                    case 42:
                        if (Oe = new URL(xe.url).searchParams.get("error"), !Ft.ok) {
                            x.next = 46;
                            break
                        }
                        return x.next = 46, I._getSession({
                            event: "storage"
                        });
                    case 46:
                        return x.abrupt("return", {
                            error: Oe,
                            status: Ft.status,
                            ok: Ft.ok,
                            url: Oe ? null : xe.url
                        });
                    case 47:
                    case "end":
                        return x.stop()
                }
            }, L)
        })), Ee.apply(this, arguments)
    }

    function ft(L) {
        return pt.apply(this, arguments)
    }

    function pt() {
        return pt = (0, i.default)(s.default.mark(function L($) {
            var P, V, oe, ee, he, qe, Ie, Be, Ke, ot;
            return s.default.wrap(function(se) {
                for (;;) switch (se.prev = se.next) {
                    case 0:
                        return V = $ ? ? {}, oe = V.callbackUrl, ee = oe === void 0 ? window.location.href : oe, he = (0, h.apiBaseUrl)(I), se.t0 = {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }, se.t1 = URLSearchParams, se.next = 6, G();
                    case 6:
                        return se.t2 = se.sent, se.t3 = ee, se.t4 = {
                            csrfToken: se.t2,
                            callbackUrl: se.t3,
                            json: !0
                        }, se.t5 = new se.t1(se.t4), qe = {
                            method: "post",
                            headers: se.t0,
                            body: se.t5
                        }, se.next = 13, fetch("".concat(he, "/signout"), qe);
                    case 13:
                        return Ie = se.sent, se.next = 16, Ie.json();
                    case 16:
                        if (Be = se.sent, j.post({
                                event: "session",
                                data: {
                                    trigger: "signout"
                                }
                            }), !(!((P = $ ? .redirect) !== null && P !== void 0) || P)) {
                            se.next = 23;
                            break
                        }
                        return ot = (Ke = Be.url) !== null && Ke !== void 0 ? Ke : ee, window.location.href = ot, ot.includes("#") && window.location.reload(), se.abrupt("return");
                    case 23:
                        return se.next = 25, I._getSession({
                            event: "storage"
                        });
                    case 25:
                        return se.abrupt("return", Be);
                    case 26:
                    case "end":
                        return se.stop()
                }
            }, L)
        })), pt.apply(this, arguments)
    }

    function Bt(L) {
        if (!q) throw new Error("React Context is unavailable in Server Components");
        var $ = L.children,
            P = L.basePath,
            V = L.refetchInterval,
            oe = L.refetchWhenOffline;
        P && (I.basePath = P);
        var ee = L.session !== void 0;
        I._lastSync = ee ? (0, h.now)() : 0;
        var he = l.useState(function() {
                return ee && (I._session = L.session), L.session
            }),
            qe = (0, c.default)(he, 2),
            Ie = qe[0],
            Be = qe[1],
            Ke = l.useState(!ee),
            ot = (0, c.default)(Ke, 2),
            Nt = ot[0],
            se = ot[1];
        l.useEffect(function() {
            return I._getSession = (0, i.default)(s.default.mark(function xe() {
                    var st, Ne, Oe, Yn = arguments;
                    return s.default.wrap(function(ge) {
                        for (;;) switch (ge.prev = ge.next) {
                            case 0:
                                if (st = Yn.length > 0 && Yn[0] !== void 0 ? Yn[0] : {}, Ne = st.event, ge.prev = 1, Oe = Ne === "storage", !(Oe || I._session === void 0)) {
                                    ge.next = 10;
                                    break
                                }
                                return I._lastSync = (0, h.now)(), ge.next = 7, B({
                                    broadcast: !Oe
                                });
                            case 7:
                                return I._session = ge.sent, Be(I._session), ge.abrupt("return");
                            case 10:
                                if (!(!Ne || I._session === null || (0, h.now)() < I._lastSync)) {
                                    ge.next = 12;
                                    break
                                }
                                return ge.abrupt("return");
                            case 12:
                                return I._lastSync = (0, h.now)(), ge.next = 15, B();
                            case 15:
                                I._session = ge.sent, Be(I._session), ge.next = 22;
                                break;
                            case 19:
                                ge.prev = 19, ge.t0 = ge.catch(1), F.error("CLIENT_SESSION_ERROR", ge.t0);
                            case 22:
                                return ge.prev = 22, se(!1), ge.finish(22);
                            case 25:
                            case "end":
                                return ge.stop()
                        }
                    }, xe, null, [
                        [1, 19, 22, 25]
                    ])
                })), I._getSession(),
                function() {
                    I._lastSync = 0, I._session = void 0, I._getSession = function() {}
                }
        }, []), l.useEffect(function() {
            var xe = j.receive(function() {
                return I._getSession({
                    event: "storage"
                })
            });
            return function() {
                return xe()
            }
        }, []), l.useEffect(function() {
            var xe = L.refetchOnWindowFocus,
                st = xe === void 0 ? !0 : xe,
                Ne = function() {
                    st && document.visibilityState === "visible" && I._getSession({
                        event: "visibilitychange"
                    })
                };
            return document.addEventListener("visibilitychange", Ne, !1),
                function() {
                    return document.removeEventListener("visibilitychange", Ne, !1)
                }
        }, [L.refetchOnWindowFocus]);
        var xr = z(),
            Kn = oe !== !1 || xr;
        l.useEffect(function() {
            if (V && Kn) {
                var xe = setInterval(function() {
                    I._session && I._getSession({
                        event: "poll"
                    })
                }, V * 1e3);
                return function() {
                    return clearInterval(xe)
                }
            }
        }, [V, Kn]);
        var Ft = l.useMemo(function() {
            return {
                data: Ie,
                status: Nt ? "loading" : Ie ? "authenticated" : "unauthenticated",
                update: function(st) {
                    return (0, i.default)(s.default.mark(function Ne() {
                        var Oe;
                        return s.default.wrap(function(x) {
                            for (;;) switch (x.prev = x.next) {
                                case 0:
                                    if (!(Nt || !Ie)) {
                                        x.next = 2;
                                        break
                                    }
                                    return x.abrupt("return");
                                case 2:
                                    return se(!0), x.t0 = h.fetchData, x.t1 = I, x.t2 = F, x.next = 8, G();
                                case 8:
                                    return x.t3 = x.sent, x.t4 = st, x.t5 = {
                                        csrfToken: x.t3,
                                        data: x.t4
                                    }, x.t6 = {
                                        body: x.t5
                                    }, x.t7 = {
                                        req: x.t6
                                    }, x.next = 15, (0, x.t0)("session", x.t1, x.t2, x.t7);
                                case 15:
                                    return Oe = x.sent, se(!1), Oe && (Be(Oe), j.post({
                                        event: "session",
                                        data: {
                                            trigger: "getSession"
                                        }
                                    })), x.abrupt("return", Oe);
                                case 19:
                                case "end":
                                    return x.stop()
                            }
                        }, Ne)
                    }))()
                }
            }
        }, [Ie, Nt]);
        return (0, g.jsx)(q.Provider, {
            value: Ft,
            children: $
        })
    }
})(ru);

function oR() {
    return Au(() => !0) ? ? !1
}
const sR = u.createContext(null);

function aR() {
    const e = oR(),
        t = u.useContext(sR);
    return e ? t ? ? window : null
}

function N(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(o) {
        if (e ? .(o), n === !1 || !o.defaultPrevented) return t ? .(o)
    }
}

function iR(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}

function Xo(...e) {
    return t => e.forEach(n => iR(n, t))
}

function _e(...e) {
    return u.useCallback(Xo(...e), e)
}

function cR(e, t) {
    const n = u.createContext(t),
        r = s => {
            const {
                children: a,
                ...i
            } = s, c = u.useMemo(() => i, Object.values(i));
            return f.jsx(n.Provider, {
                value: c,
                children: a
            })
        };
    r.displayName = e + "Provider";

    function o(s) {
        const a = u.useContext(n);
        if (a) return a;
        if (t !== void 0) return t;
        throw new Error(`\`${s}\` must be used within \`${e}\``)
    }
    return [r, o]
}

function es(e, t = []) {
    let n = [];

    function r(s, a) {
        const i = u.createContext(a),
            c = n.length;
        n = [...n, a];
        const l = p => {
            const {
                scope: h,
                children: g,
                ..._
            } = p, m = h ? .[e] ? .[c] || i, v = u.useMemo(() => _, Object.values(_));
            return f.jsx(m.Provider, {
                value: v,
                children: g
            })
        };
        l.displayName = s + "Provider";

        function d(p, h) {
            const g = h ? .[e] ? .[c] || i,
                _ = u.useContext(g);
            if (_) return _;
            if (a !== void 0) return a;
            throw new Error(`\`${p}\` must be used within \`${s}\``)
        }
        return [l, d]
    }
    const o = () => {
        const s = n.map(a => u.createContext(a));
        return function(i) {
            const c = i ? .[e] || s;
            return u.useMemo(() => ({
                [`__scope${e}`]: { ...i,
                    [e]: c
                }
            }), [i, c])
        }
    };
    return o.scopeName = e, [r, lR(o, ...t)]
}

function lR(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const a = r.reduce((i, {
                useScope: c,
                scopeName: l
            }) => {
                const p = c(s)[`__scope${l}`];
                return { ...i,
                    ...p
                }
            }, {});
            return u.useMemo(() => ({
                [`__scope${t.scopeName}`]: a
            }), [a])
        }
    };
    return n.scopeName = t.scopeName, n
}
var Zt = globalThis ? .document ? u.useLayoutEffect : () => {},
    uR = $g.useId || (() => {}),
    dR = 0;

function mt(e) {
    const [t, n] = u.useState(uR());
    return Zt(() => {
        n(r => r ? ? String(dR++))
    }, [e]), t ? `radix-${t}` : ""
}

function ze(e) {
    const t = u.useRef(e);
    return u.useEffect(() => {
        t.current = e
    }), u.useMemo(() => (...n) => t.current ? .(...n), [])
}

function br({
    prop: e,
    defaultProp: t,
    onChange: n = () => {}
}) {
    const [r, o] = fR({
        defaultProp: t,
        onChange: n
    }), s = e !== void 0, a = s ? e : r, i = ze(n), c = u.useCallback(l => {
        if (s) {
            const p = typeof l == "function" ? l(e) : l;
            p !== e && i(p)
        } else o(l)
    }, [s, e, o, i]);
    return [a, c]
}

function fR({
    defaultProp: e,
    onChange: t
}) {
    const n = u.useState(e),
        [r] = n,
        o = u.useRef(r),
        s = ze(t);
    return u.useEffect(() => {
        o.current !== r && (s(r), o.current = r)
    }, [r, o, s]), n
}
var xn = u.forwardRef((e, t) => {
    const {
        children: n,
        ...r
    } = e, o = u.Children.toArray(n), s = o.find(pR);
    if (s) {
        const a = s.props.children,
            i = o.map(c => c === s ? u.Children.count(a) > 1 ? u.Children.only(null) : u.isValidElement(a) ? a.props.children : null : c);
        return f.jsx(ga, { ...r,
            ref: t,
            children: u.isValidElement(a) ? u.cloneElement(a, void 0, i) : null
        })
    }
    return f.jsx(ga, { ...r,
        ref: t,
        children: n
    })
});
xn.displayName = "Slot";
var ga = u.forwardRef((e, t) => {
    const {
        children: n,
        ...r
    } = e;
    if (u.isValidElement(n)) {
        const o = gR(n);
        return u.cloneElement(n, { ...hR(r, n.props),
            ref: t ? Xo(t, o) : o
        })
    }
    return u.Children.count(n) > 1 ? u.Children.only(null) : null
});
ga.displayName = "SlotClone";
var of = ({
    children: e
}) => f.jsx(f.Fragment, {
    children: e
});

function pR(e) {
    return u.isValidElement(e) && e.type === of
}

function hR(e, t) {
    const n = { ...t
    };
    for (const r in t) {
        const o = e[r],
            s = t[r];
        /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
            s(...i), o(...i)
        } : o && (n[r] = o) : r === "style" ? n[r] = { ...o,
            ...s
        } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function gR(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var mR = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    pe = mR.reduce((e, t) => {
        const n = u.forwardRef((r, o) => {
            const {
                asChild: s,
                ...a
            } = r, i = s ? xn : t;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), f.jsx(i, { ...a,
                ref: o
            })
        });
        return n.displayName = `Primitive.${t}`, { ...e,
            [t]: n
        }
    }, {});

function sf(e, t) {
    e && ou.flushSync(() => e.dispatchEvent(t))
}

function _R(e, t = globalThis ? .document) {
    const n = ze(e);
    u.useEffect(() => {
        const r = o => {
            o.key === "Escape" && n(o)
        };
        return t.addEventListener("keydown", r, {
            capture: !0
        }), () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }, [n, t])
}
var vR = "DismissableLayer",
    ma = "dismissableLayer.update",
    CR = "dismissableLayer.pointerDownOutside",
    yR = "dismissableLayer.focusOutside",
    sl, af = u.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    Sr = u.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: s,
            onInteractOutside: a,
            onDismiss: i,
            ...c
        } = e, l = u.useContext(af), [d, p] = u.useState(null), h = d ? .ownerDocument ? ? globalThis ? .document, [, g] = u.useState({}), _ = _e(t, E => p(E)), m = Array.from(l.layers), [v] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), C = m.indexOf(v), y = d ? m.indexOf(d) : -1, S = l.layersWithOutsidePointerEventsDisabled.size > 0, w = y >= C, T = SR(E => {
            const I = E.target,
                j = [...l.branches].some(F => F.contains(I));
            !w || j || (o ? .(E), a ? .(E), E.defaultPrevented || i ? .())
        }, h), O = wR(E => {
            const I = E.target;
            [...l.branches].some(F => F.contains(I)) || (s ? .(E), a ? .(E), E.defaultPrevented || i ? .())
        }, h);
        return _R(E => {
            y === l.layers.size - 1 && (r ? .(E), !E.defaultPrevented && i && (E.preventDefault(), i()))
        }, h), u.useEffect(() => {
            if (d) return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (sl = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(d)), l.layers.add(d), al(), () => {
                n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = sl)
            }
        }, [d, h, n, l]), u.useEffect(() => () => {
            d && (l.layers.delete(d), l.layersWithOutsidePointerEventsDisabled.delete(d), al())
        }, [d, l]), u.useEffect(() => {
            const E = () => g({});
            return document.addEventListener(ma, E), () => document.removeEventListener(ma, E)
        }, []), f.jsx(pe.div, { ...c,
            ref: _,
            style: {
                pointerEvents: S ? w ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: N(e.onFocusCapture, O.onFocusCapture),
            onBlurCapture: N(e.onBlurCapture, O.onBlurCapture),
            onPointerDownCapture: N(e.onPointerDownCapture, T.onPointerDownCapture)
        })
    });
Sr.displayName = vR;
var bR = "DismissableLayerBranch",
    cf = u.forwardRef((e, t) => {
        const n = u.useContext(af),
            r = u.useRef(null),
            o = _e(t, r);
        return u.useEffect(() => {
            const s = r.current;
            if (s) return n.branches.add(s), () => {
                n.branches.delete(s)
            }
        }, [n.branches]), f.jsx(pe.div, { ...e,
            ref: o
        })
    });
cf.displayName = bR;

function SR(e, t = globalThis ? .document) {
    const n = ze(e),
        r = u.useRef(!1),
        o = u.useRef(() => {});
    return u.useEffect(() => {
        const s = i => {
                if (i.target && !r.current) {
                    let c = function() {
                        lf(CR, n, l, {
                            discrete: !0
                        })
                    };
                    const l = {
                        originalEvent: i
                    };
                    i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, {
                        once: !0
                    })) : c()
                } else t.removeEventListener("click", o.current);
                r.current = !1
            },
            a = window.setTimeout(() => {
                t.addEventListener("pointerdown", s)
            }, 0);
        return () => {
            window.clearTimeout(a), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function wR(e, t = globalThis ? .document) {
    const n = ze(e),
        r = u.useRef(!1);
    return u.useEffect(() => {
        const o = s => {
            s.target && !r.current && lf(yR, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o)
    }, [t, n]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function al() {
    const e = new CustomEvent(ma);
    document.dispatchEvent(e)
}

function lf(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.target,
        s = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? sf(o, s) : o.dispatchEvent(s)
}
var H7 = Sr,
    W7 = cf,
    Os = "focusScope.autoFocusOnMount",
    Ms = "focusScope.autoFocusOnUnmount",
    il = {
        bubbles: !1,
        cancelable: !0
    },
    TR = "FocusScope",
    ui = u.forwardRef((e, t) => {
        const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            ...a
        } = e, [i, c] = u.useState(null), l = ze(o), d = ze(s), p = u.useRef(null), h = _e(t, m => c(m)), g = u.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        u.useEffect(() => {
            if (r) {
                let m = function(S) {
                        if (g.paused || !i) return;
                        const w = S.target;
                        i.contains(w) ? p.current = w : It(p.current, {
                            select: !0
                        })
                    },
                    v = function(S) {
                        if (g.paused || !i) return;
                        const w = S.relatedTarget;
                        w !== null && (i.contains(w) || It(p.current, {
                            select: !0
                        }))
                    },
                    C = function(S) {
                        if (document.activeElement === document.body)
                            for (const T of S) T.removedNodes.length > 0 && It(i)
                    };
                document.addEventListener("focusin", m), document.addEventListener("focusout", v);
                const y = new MutationObserver(C);
                return i && y.observe(i, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener("focusin", m), document.removeEventListener("focusout", v), y.disconnect()
                }
            }
        }, [r, i, g.paused]), u.useEffect(() => {
            if (i) {
                ll.add(g);
                const m = document.activeElement;
                if (!i.contains(m)) {
                    const C = new CustomEvent(Os, il);
                    i.addEventListener(Os, l), i.dispatchEvent(C), C.defaultPrevented || (AR(RR(uf(i)), {
                        select: !0
                    }), document.activeElement === m && It(i))
                }
                return () => {
                    i.removeEventListener(Os, l), setTimeout(() => {
                        const C = new CustomEvent(Ms, il);
                        i.addEventListener(Ms, d), i.dispatchEvent(C), C.defaultPrevented || It(m ? ? document.body, {
                            select: !0
                        }), i.removeEventListener(Ms, d), ll.remove(g)
                    }, 0)
                }
            }
        }, [i, l, d, g]);
        const _ = u.useCallback(m => {
            if (!n && !r || g.paused) return;
            const v = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey,
                C = document.activeElement;
            if (v && C) {
                const y = m.currentTarget,
                    [S, w] = IR(y);
                S && w ? !m.shiftKey && C === w ? (m.preventDefault(), n && It(S, {
                    select: !0
                })) : m.shiftKey && C === S && (m.preventDefault(), n && It(w, {
                    select: !0
                })) : C === y && m.preventDefault()
            }
        }, [n, r, g.paused]);
        return f.jsx(pe.div, {
            tabIndex: -1,
            ...a,
            ref: h,
            onKeyDown: _
        })
    });
ui.displayName = TR;

function AR(e, {
    select: t = !1
} = {}) {
    const n = document.activeElement;
    for (const r of e)
        if (It(r, {
                select: t
            }), document.activeElement !== n) return
}

function IR(e) {
    const t = uf(e),
        n = cl(t, e),
        r = cl(t.reverse(), e);
    return [n, r]
}

function uf(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function cl(e, t) {
    for (const n of e)
        if (!kR(n, {
                upTo: t
            })) return n
}

function kR(e, {
    upTo: t
}) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e;) {
        if (t !== void 0 && e === t) return !1;
        if (getComputedStyle(e).display === "none") return !0;
        e = e.parentElement
    }
    return !1
}

function ER(e) {
    return e instanceof HTMLInputElement && "select" in e
}

function It(e, {
    select: t = !1
} = {}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }), e !== n && ER(e) && t && e.select()
    }
}
var ll = xR();

function xR() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && n ? .pause(), e = ul(e, t), e.unshift(t)
        },
        remove(t) {
            e = ul(e, t), e[0] ? .resume()
        }
    }
}

function ul(e, t) {
    const n = [...e],
        r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1), n
}

function RR(e) {
    return e.filter(t => t.tagName !== "A")
}
var OR = "Portal",
    wr = u.forwardRef((e, t) => {
        const {
            container: n,
            ...r
        } = e, [o, s] = u.useState(!1);
        Zt(() => s(!0), []);
        const a = n || o && globalThis ? .document ? .body;
        return a ? Xn.createPortal(f.jsx(pe.div, { ...r,
            ref: t
        }), a) : null
    });
wr.displayName = OR;
var z7 = wr;

function MR(e, t) {
    return u.useReducer((n, r) => t[n][r] ? ? n, e)
}
var ut = e => {
    const {
        present: t,
        children: n
    } = e, r = LR(t), o = typeof n == "function" ? n({
        present: r.isPresent
    }) : u.Children.only(n), s = _e(r.ref, PR(o));
    return typeof n == "function" || r.isPresent ? u.cloneElement(o, {
        ref: s
    }) : null
};
ut.displayName = "Presence";

function LR(e) {
    const [t, n] = u.useState(), r = u.useRef({}), o = u.useRef(e), s = u.useRef("none"), a = e ? "mounted" : "unmounted", [i, c] = MR(a, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return u.useEffect(() => {
        const l = Br(r.current);
        s.current = i === "mounted" ? l : "none"
    }, [i]), Zt(() => {
        const l = r.current,
            d = o.current;
        if (d !== e) {
            const h = s.current,
                g = Br(l);
            e ? c("MOUNT") : g === "none" || l ? .display === "none" ? c("UNMOUNT") : c(d && h !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
        }
    }, [e, c]), Zt(() => {
        if (t) {
            let l;
            const d = t.ownerDocument.defaultView ? ? window,
                p = g => {
                    const m = Br(r.current).includes(g.animationName);
                    if (g.target === t && m && (c("ANIMATION_END"), !o.current)) {
                        const v = t.style.animationFillMode;
                        t.style.animationFillMode = "forwards", l = d.setTimeout(() => {
                            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v)
                        })
                    }
                },
                h = g => {
                    g.target === t && (s.current = Br(r.current))
                };
            return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
                d.clearTimeout(l), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p)
            }
        } else c("ANIMATION_END")
    }, [t, c]), {
        isPresent: ["mounted", "unmountSuspended"].includes(i),
        ref: u.useCallback(l => {
            l && (r.current = getComputedStyle(l)), n(l)
        }, [])
    }
}

function Br(e) {
    return e ? .animationName || "none"
}

function PR(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, "ref") ? .get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref") ? .get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var Ls = 0;

function df() {
    u.useEffect(() => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ? ? dl()), document.body.insertAdjacentElement("beforeend", e[1] ? ? dl()), Ls++, () => {
            Ls === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), Ls--
        }
    }, [])
}

function dl() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
}
var Kr = "right-scroll-bar-position",
    Yr = "width-before-scroll-bar",
    DR = "with-scroll-bars-hidden",
    $R = "--removed-body-scroll-bar-size";

function Ps(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t), e
}

function UR(e, t) {
    var n = u.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r, n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t, n.facade
}
var fl = new WeakMap;

function BR(e, t) {
    var n = UR(null, function(r) {
        return e.forEach(function(o) {
            return Ps(o, r)
        })
    });
    return u.useLayoutEffect(function() {
        var r = fl.get(n);
        if (r) {
            var o = new Set(r),
                s = new Set(e),
                a = n.current;
            o.forEach(function(i) {
                s.has(i) || Ps(i, null)
            }), s.forEach(function(i) {
                o.has(i) || Ps(i, a)
            })
        }
        fl.set(n, e)
    }, [e]), n
}

function NR(e) {
    return e
}

function FR(e, t) {
    t === void 0 && (t = NR);
    var n = [],
        r = !1,
        o = {
            read: function() {
                if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return n.length ? n[n.length - 1] : e
            },
            useMedium: function(s) {
                var a = t(s, r);
                return n.push(a),
                    function() {
                        n = n.filter(function(i) {
                            return i !== a
                        })
                    }
            },
            assignSyncMedium: function(s) {
                for (r = !0; n.length;) {
                    var a = n;
                    n = [], a.forEach(s)
                }
                n = {
                    push: function(i) {
                        return s(i)
                    },
                    filter: function() {
                        return n
                    }
                }
            },
            assignMedium: function(s) {
                r = !0;
                var a = [];
                if (n.length) {
                    var i = n;
                    n = [], i.forEach(s), a = n
                }
                var c = function() {
                        var d = a;
                        a = [], d.forEach(s)
                    },
                    l = function() {
                        return Promise.resolve().then(c)
                    };
                l(), n = {
                    push: function(d) {
                        a.push(d), l()
                    },
                    filter: function(d) {
                        return a = a.filter(d), n
                    }
                }
            }
        };
    return o
}

function jR(e) {
    e === void 0 && (e = {});
    var t = FR(null);
    return t.options = su({
        async: !0,
        ssr: !1
    }, e), t
}
var ff = function(e) {
    var t = e.sideCar,
        n = Ug(e, ["sideCar"]);
    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r) throw new Error("Sidecar medium not found");
    return u.createElement(r, su({}, n))
};
ff.isSideCarExport = !0;

function GR(e, t) {
    return e.useMedium(t), ff
}
var pf = jR(),
    Ds = function() {},
    ts = u.forwardRef(function(e, t) {
        var n = u.useRef(null),
            r = u.useState({
                onScrollCapture: Ds,
                onWheelCapture: Ds,
                onTouchMoveCapture: Ds
            }),
            o = r[0],
            s = r[1],
            a = e.forwardProps,
            i = e.children,
            c = e.className,
            l = e.removeScrollBar,
            d = e.enabled,
            p = e.shards,
            h = e.sideCar,
            g = e.noIsolation,
            _ = e.inert,
            m = e.allowPinchZoom,
            v = e.as,
            C = v === void 0 ? "div" : v,
            y = e.gapMode,
            S = Bg(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            w = h,
            T = BR([n, t]),
            O = hn(hn({}, S), o);
        return u.createElement(u.Fragment, null, d && u.createElement(w, {
            sideCar: pf,
            removeScrollBar: l,
            shards: p,
            noIsolation: g,
            inert: _,
            setCallbacks: s,
            allowPinchZoom: !!m,
            lockRef: n,
            gapMode: y
        }), a ? u.cloneElement(u.Children.only(i), hn(hn({}, O), {
            ref: T
        })) : u.createElement(C, hn({}, O, {
            className: c,
            ref: T
        }), i))
    });
ts.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
ts.classNames = {
    fullWidth: Yr,
    zeroRight: Kr
};
var VR = function() {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__
};

function HR() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = VR();
    return t && e.setAttribute("nonce", t), e
}

function WR(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}

function zR(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var qR = function() {
        var e = 0,
            t = null;
        return {
            add: function(n) {
                e == 0 && (t = HR()) && (WR(t, n), zR(t)), e++
            },
            remove: function() {
                e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
        }
    },
    KR = function() {
        var e = qR();
        return function(t, n) {
            u.useEffect(function() {
                return e.add(t),
                    function() {
                        e.remove()
                    }
            }, [t && n])
        }
    },
    hf = function() {
        var e = KR(),
            t = function(n) {
                var r = n.styles,
                    o = n.dynamic;
                return e(r, o), null
            };
        return t
    },
    YR = {
        left: 0,
        top: 0,
        right: 0,
        gap: 0
    },
    $s = function(e) {
        return parseInt(e || "", 10) || 0
    },
    ZR = function(e) {
        var t = window.getComputedStyle(document.body),
            n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
            r = t[e === "padding" ? "paddingTop" : "marginTop"],
            o = t[e === "padding" ? "paddingRight" : "marginRight"];
        return [$s(n), $s(r), $s(o)]
    },
    QR = function(e) {
        if (e === void 0 && (e = "margin"), typeof window > "u") return YR;
        var t = ZR(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
        return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0])
        }
    },
    JR = hf(),
    yn = "data-scroll-locked",
    XR = function(e, t, n, r) {
        var o = e.left,
            s = e.top,
            a = e.right,
            i = e.gap;
        return n === void 0 && (n = "margin"), `
  .`.concat(DR, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(yn, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Kr, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Yr, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Kr, " .").concat(Kr, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Yr, " .").concat(Yr, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(yn, `] {
    `).concat($R, ": ").concat(i, `px;
  }
`)
    },
    pl = function() {
        var e = parseInt(document.body.getAttribute(yn) || "0", 10);
        return isFinite(e) ? e : 0
    },
    e3 = function() {
        u.useEffect(function() {
            return document.body.setAttribute(yn, (pl() + 1).toString()),
                function() {
                    var e = pl() - 1;
                    e <= 0 ? document.body.removeAttribute(yn) : document.body.setAttribute(yn, e.toString())
                }
        }, [])
    },
    t3 = function(e) {
        var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = r === void 0 ? "margin" : r;
        e3();
        var s = u.useMemo(function() {
            return QR(o)
        }, [o]);
        return u.createElement(JR, {
            styles: XR(s, !t, o, n ? "" : "!important")
        })
    },
    _a = !1;
if (typeof window < "u") try {
    var Nr = Object.defineProperty({}, "passive", {
        get: function() {
            return _a = !0, !0
        }
    });
    window.addEventListener("test", Nr, Nr), window.removeEventListener("test", Nr, Nr)
} catch {
    _a = !1
}
var un = _a ? {
        passive: !1
    } : !1,
    n3 = function(e) {
        return e.tagName === "TEXTAREA"
    },
    gf = function(e, t) {
        if (!(e instanceof Element)) return !1;
        var n = window.getComputedStyle(e);
        return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !n3(e) && n[t] === "visible")
    },
    r3 = function(e) {
        return gf(e, "overflowY")
    },
    o3 = function(e) {
        return gf(e, "overflowX")
    },
    hl = function(e, t) {
        var n = t.ownerDocument,
            r = t;
        do {
            typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
            var o = mf(e, r);
            if (o) {
                var s = _f(e, r),
                    a = s[1],
                    i = s[2];
                if (a > i) return !0
            }
            r = r.parentNode
        } while (r && r !== n.body);
        return !1
    },
    s3 = function(e) {
        var t = e.scrollTop,
            n = e.scrollHeight,
            r = e.clientHeight;
        return [t, n, r]
    },
    a3 = function(e) {
        var t = e.scrollLeft,
            n = e.scrollWidth,
            r = e.clientWidth;
        return [t, n, r]
    },
    mf = function(e, t) {
        return e === "v" ? r3(t) : o3(t)
    },
    _f = function(e, t) {
        return e === "v" ? s3(t) : a3(t)
    },
    i3 = function(e, t) {
        return e === "h" && t === "rtl" ? -1 : 1
    },
    c3 = function(e, t, n, r, o) {
        var s = i3(e, window.getComputedStyle(t).direction),
            a = s * r,
            i = n.target,
            c = t.contains(i),
            l = !1,
            d = a > 0,
            p = 0,
            h = 0;
        do {
            var g = _f(e, i),
                _ = g[0],
                m = g[1],
                v = g[2],
                C = m - v - s * _;
            (_ || C) && mf(e, i) && (p += C, h += _), i instanceof ShadowRoot ? i = i.host : i = i.parentNode
        } while (!c && i !== document.body || c && (t.contains(i) || t === i));
        return (d && (Math.abs(p) < 1 || !o) || !d && (Math.abs(h) < 1 || !o)) && (l = !0), l
    },
    Fr = function(e) {
        return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
    },
    gl = function(e) {
        return [e.deltaX, e.deltaY]
    },
    ml = function(e) {
        return e && "current" in e ? e.current : e
    },
    l3 = function(e, t) {
        return e[0] === t[0] && e[1] === t[1]
    },
    u3 = function(e) {
        return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
    },
    d3 = 0,
    dn = [];

function f3(e) {
    var t = u.useRef([]),
        n = u.useRef([0, 0]),
        r = u.useRef(),
        o = u.useState(d3++)[0],
        s = u.useState(hf)[0],
        a = u.useRef(e);
    u.useEffect(function() {
        a.current = e
    }, [e]), u.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var m = Ng([e.lockRef.current], (e.shards || []).map(ml), !0).filter(Boolean);
            return m.forEach(function(v) {
                    return v.classList.add("allow-interactivity-".concat(o))
                }),
                function() {
                    document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(v) {
                        return v.classList.remove("allow-interactivity-".concat(o))
                    })
                }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var i = u.useCallback(function(m, v) {
            if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey) return !a.current.allowPinchZoom;
            var C = Fr(m),
                y = n.current,
                S = "deltaX" in m ? m.deltaX : y[0] - C[0],
                w = "deltaY" in m ? m.deltaY : y[1] - C[1],
                T, O = m.target,
                E = Math.abs(S) > Math.abs(w) ? "h" : "v";
            if ("touches" in m && E === "h" && O.type === "range") return !1;
            var I = hl(E, O);
            if (!I) return !0;
            if (I ? T = E : (T = E === "v" ? "h" : "v", I = hl(E, O)), !I) return !1;
            if (!r.current && "changedTouches" in m && (S || w) && (r.current = T), !T) return !0;
            var j = r.current || T;
            return c3(j, v, m, j === "h" ? S : w, !0)
        }, []),
        c = u.useCallback(function(m) {
            var v = m;
            if (!(!dn.length || dn[dn.length - 1] !== s)) {
                var C = "deltaY" in v ? gl(v) : Fr(v),
                    y = t.current.filter(function(T) {
                        return T.name === v.type && (T.target === v.target || v.target === T.shadowParent) && l3(T.delta, C)
                    })[0];
                if (y && y.should) {
                    v.cancelable && v.preventDefault();
                    return
                }
                if (!y) {
                    var S = (a.current.shards || []).map(ml).filter(Boolean).filter(function(T) {
                            return T.contains(v.target)
                        }),
                        w = S.length > 0 ? i(v, S[0]) : !a.current.noIsolation;
                    w && v.cancelable && v.preventDefault()
                }
            }
        }, []),
        l = u.useCallback(function(m, v, C, y) {
            var S = {
                name: m,
                delta: v,
                target: C,
                should: y,
                shadowParent: p3(C)
            };
            t.current.push(S), setTimeout(function() {
                t.current = t.current.filter(function(w) {
                    return w !== S
                })
            }, 1)
        }, []),
        d = u.useCallback(function(m) {
            n.current = Fr(m), r.current = void 0
        }, []),
        p = u.useCallback(function(m) {
            l(m.type, gl(m), m.target, i(m, e.lockRef.current))
        }, []),
        h = u.useCallback(function(m) {
            l(m.type, Fr(m), m.target, i(m, e.lockRef.current))
        }, []);
    u.useEffect(function() {
        return dn.push(s), e.setCallbacks({
                onScrollCapture: p,
                onWheelCapture: p,
                onTouchMoveCapture: h
            }), document.addEventListener("wheel", c, un), document.addEventListener("touchmove", c, un), document.addEventListener("touchstart", d, un),
            function() {
                dn = dn.filter(function(m) {
                    return m !== s
                }), document.removeEventListener("wheel", c, un), document.removeEventListener("touchmove", c, un), document.removeEventListener("touchstart", d, un)
            }
    }, []);
    var g = e.removeScrollBar,
        _ = e.inert;
    return u.createElement(u.Fragment, null, _ ? u.createElement(s, {
        styles: u3(o)
    }) : null, g ? u.createElement(t3, {
        gapMode: e.gapMode
    }) : null)
}

function p3(e) {
    for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
    return t
}
const h3 = GR(pf, f3);
var di = u.forwardRef(function(e, t) {
    return u.createElement(ts, hn({}, e, {
        ref: t,
        sideCar: h3
    }))
});
di.classNames = ts.classNames;
var g3 = function(e) {
        if (typeof document > "u") return null;
        var t = Array.isArray(e) ? e[0] : e;
        return t.ownerDocument.body
    },
    fn = new WeakMap,
    jr = new WeakMap,
    Gr = {},
    Us = 0,
    vf = function(e) {
        return e && (e.host || vf(e.parentNode))
    },
    m3 = function(e, t) {
        return t.map(function(n) {
            if (e.contains(n)) return n;
            var r = vf(n);
            return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
        }).filter(function(n) {
            return !!n
        })
    },
    _3 = function(e, t, n, r) {
        var o = m3(t, Array.isArray(e) ? e : [e]);
        Gr[n] || (Gr[n] = new WeakMap);
        var s = Gr[n],
            a = [],
            i = new Set,
            c = new Set(o),
            l = function(p) {
                !p || i.has(p) || (i.add(p), l(p.parentNode))
            };
        o.forEach(l);
        var d = function(p) {
            !p || c.has(p) || Array.prototype.forEach.call(p.children, function(h) {
                if (i.has(h)) d(h);
                else {
                    var g = h.getAttribute(r),
                        _ = g !== null && g !== "false",
                        m = (fn.get(h) || 0) + 1,
                        v = (s.get(h) || 0) + 1;
                    fn.set(h, m), s.set(h, v), a.push(h), m === 1 && _ && jr.set(h, !0), v === 1 && h.setAttribute(n, "true"), _ || h.setAttribute(r, "true")
                }
            })
        };
        return d(t), i.clear(), Us++,
            function() {
                a.forEach(function(p) {
                    var h = fn.get(p) - 1,
                        g = s.get(p) - 1;
                    fn.set(p, h), s.set(p, g), h || (jr.has(p) || p.removeAttribute(r), jr.delete(p)), g || p.removeAttribute(n)
                }), Us--, Us || (fn = new WeakMap, fn = new WeakMap, jr = new WeakMap, Gr = {})
            }
    },
    Cf = function(e, t, n) {
        n === void 0 && (n = "data-aria-hidden");
        var r = Array.from(Array.isArray(e) ? e : [e]),
            o = g3(e);
        return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), _3(r, o, n, "aria-hidden")) : function() {
            return null
        }
    },
    fi = "Dialog",
    [yf, q7] = es(fi),
    [v3, rt] = yf(fi),
    bf = e => {
        const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: s,
            modal: a = !0
        } = e, i = u.useRef(null), c = u.useRef(null), [l = !1, d] = br({
            prop: r,
            defaultProp: o,
            onChange: s
        });
        return f.jsx(v3, {
            scope: t,
            triggerRef: i,
            contentRef: c,
            contentId: mt(),
            titleId: mt(),
            descriptionId: mt(),
            open: l,
            onOpenChange: d,
            onOpenToggle: u.useCallback(() => d(p => !p), [d]),
            modal: a,
            children: n
        })
    };
bf.displayName = fi;
var Sf = "DialogTrigger",
    wf = u.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = rt(Sf, n), s = _e(t, o.triggerRef);
        return f.jsx(pe.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": gi(o.open),
            ...r,
            ref: s,
            onClick: N(e.onClick, o.onOpenToggle)
        })
    });
wf.displayName = Sf;
var pi = "DialogPortal",
    [C3, Tf] = yf(pi, {
        forceMount: void 0
    }),
    Af = e => {
        const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: o
        } = e, s = rt(pi, t);
        return f.jsx(C3, {
            scope: t,
            forceMount: n,
            children: u.Children.map(r, a => f.jsx(ut, {
                present: n || s.open,
                children: f.jsx(wr, {
                    asChild: !0,
                    container: o,
                    children: a
                })
            }))
        })
    };
Af.displayName = pi;
var mo = "DialogOverlay",
    If = u.forwardRef((e, t) => {
        const n = Tf(mo, e.__scopeDialog),
            {
                forceMount: r = n.forceMount,
                ...o
            } = e,
            s = rt(mo, e.__scopeDialog);
        return s.modal ? f.jsx(ut, {
            present: r || s.open,
            children: f.jsx(y3, { ...o,
                ref: t
            })
        }) : null
    });
If.displayName = mo;
var y3 = u.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = rt(mo, n);
        return f.jsx(di, {
            as: xn,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: f.jsx(pe.div, {
                "data-state": gi(o.open),
                ...r,
                ref: t,
                style: {
                    pointerEvents: "auto",
                    ...r.style
                }
            })
        })
    }),
    Qt = "DialogContent",
    kf = u.forwardRef((e, t) => {
        const n = Tf(Qt, e.__scopeDialog),
            {
                forceMount: r = n.forceMount,
                ...o
            } = e,
            s = rt(Qt, e.__scopeDialog);
        return f.jsx(ut, {
            present: r || s.open,
            children: s.modal ? f.jsx(b3, { ...o,
                ref: t
            }) : f.jsx(S3, { ...o,
                ref: t
            })
        })
    });
kf.displayName = Qt;
var b3 = u.forwardRef((e, t) => {
        const n = rt(Qt, e.__scopeDialog),
            r = u.useRef(null),
            o = _e(t, n.contentRef, r);
        return u.useEffect(() => {
            const s = r.current;
            if (s) return Cf(s)
        }, []), f.jsx(Ef, { ...e,
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: N(e.onCloseAutoFocus, s => {
                s.preventDefault(), n.triggerRef.current ? .focus()
            }),
            onPointerDownOutside: N(e.onPointerDownOutside, s => {
                const a = s.detail.originalEvent,
                    i = a.button === 0 && a.ctrlKey === !0;
                (a.button === 2 || i) && s.preventDefault()
            }),
            onFocusOutside: N(e.onFocusOutside, s => s.preventDefault())
        })
    }),
    S3 = u.forwardRef((e, t) => {
        const n = rt(Qt, e.__scopeDialog),
            r = u.useRef(!1),
            o = u.useRef(!1);
        return f.jsx(Ef, { ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: s => {
                e.onCloseAutoFocus ? .(s), s.defaultPrevented || (r.current || n.triggerRef.current ? .focus(), s.preventDefault()), r.current = !1, o.current = !1
            },
            onInteractOutside: s => {
                e.onInteractOutside ? .(s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
                const a = s.target;
                n.triggerRef.current ? .contains(a) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault()
            }
        })
    }),
    Ef = u.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: s,
            ...a
        } = e, i = rt(Qt, n), c = u.useRef(null), l = _e(t, c);
        return df(), f.jsxs(f.Fragment, {
            children: [f.jsx(ui, {
                asChild: !0,
                loop: !0,
                trapped: r,
                onMountAutoFocus: o,
                onUnmountAutoFocus: s,
                children: f.jsx(Sr, {
                    role: "dialog",
                    id: i.contentId,
                    "aria-describedby": i.descriptionId,
                    "aria-labelledby": i.titleId,
                    "data-state": gi(i.open),
                    ...a,
                    ref: l,
                    onDismiss: () => i.onOpenChange(!1)
                })
            }), f.jsxs(f.Fragment, {
                children: [f.jsx(w3, {
                    titleId: i.titleId
                }), f.jsx(A3, {
                    contentRef: c,
                    descriptionId: i.descriptionId
                })]
            })]
        })
    }),
    hi = "DialogTitle",
    xf = u.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = rt(hi, n);
        return f.jsx(pe.h2, {
            id: o.titleId,
            ...r,
            ref: t
        })
    });
xf.displayName = hi;
var Rf = "DialogDescription",
    Of = u.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = rt(Rf, n);
        return f.jsx(pe.p, {
            id: o.descriptionId,
            ...r,
            ref: t
        })
    });
Of.displayName = Rf;
var Mf = "DialogClose",
    Lf = u.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = rt(Mf, n);
        return f.jsx(pe.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: N(e.onClick, () => o.onOpenChange(!1))
        })
    });
Lf.displayName = Mf;

function gi(e) {
    return e ? "open" : "closed"
}
var Pf = "DialogTitleWarning",
    [K7, Df] = cR(Pf, {
        contentName: Qt,
        titleName: hi,
        docsSlug: "dialog"
    }),
    w3 = ({
        titleId: e
    }) => {
        const t = Df(Pf),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
        return u.useEffect(() => {
            e && (document.getElementById(e) || console.error(n))
        }, [n, e]), null
    },
    T3 = "DialogDescriptionWarning",
    A3 = ({
        contentRef: e,
        descriptionId: t
    }) => {
        const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Df(T3).contentName}}.`;
        return u.useEffect(() => {
            const o = e.current ? .getAttribute("aria-describedby");
            t && o && (document.getElementById(t) || console.warn(r))
        }, [r, e, t]), null
    },
    I3 = bf,
    Y7 = wf,
    k3 = Af,
    E3 = If,
    x3 = kf,
    R3 = xf,
    O3 = Of,
    M3 = Lf;
const L3 = e => {
    const {
        color: t = "secondary",
        title: n,
        children: r,
        ...o
    } = e;
    return f.jsx(Oo, {
        as: "button",
        color: t,
        ...o,
        children: n ? ? r
    })
};

function P3({
    isOpen: e,
    onClose: t,
    children: n,
    shouldIgnoreClickOutside: r = !1,
    className: o
}) {
    return f.jsx(I3, {
        open: e,
        onOpenChange: s => {
            r || s === !1 && t(!1)
        },
        children: f.jsx(k3, {
            container: aR() ? .document.body,
            children: f.jsx("div", {
                className: Z("absolute inset-0", o),
                children: n
            })
        })
    })
}

function D3({
    className: e,
    children: t,
    showBackground: n = !0
}) {
    return f.jsx(E3, {
        className: Z("fixed inset-0 z-50", n && "bg-black/50 dark:bg-black/80", e),
        children: t
    })
}

function $3({
    className: e,
    children: t,
    position: n = "center",
    size: r,
    removePopoverStyling: o = !1,
    shadow: s = "normal"
}) {
    return f.jsx("div", {
        className: Z("z-50 h-full w-full overflow-y-auto", r !== "fullscreen" && "grid grid-cols-[10px_1fr_10px]", r !== "fullscreen" && n === "center" && "grid-rows-[minmax(10px,_1fr)_auto_minmax(10px,_1fr)] md:grid-rows-[minmax(20px,_1fr)_auto_minmax(20px,_1fr)]", r !== "fullscreen" && n === "bottom" && "grid-rows-[minmax(10px,_1fr)_auto_10px] md:grid-rows-[minmax(20px,_1fr)_auto_20px]"),
        children: f.jsx(x3, {
            className: Z(!o && "popover", "relative start-1/2 col-auto col-start-2 row-auto row-start-2 h-full w-full bg-token-main-surface-primary text-start ltr:-translate-x-1/2 rtl:translate-x-1/2", r !== "fullscreen" && "rounded-2xl", s === "normal" && "shadow-xl", e),
            children: t
        })
    })
}

function $f({
    title: e,
    description: t,
    icon: n,
    type: r
}) {
    return f.jsxs("div", {
        className: "flex min-w-0 max-w-full items-center",
        children: [f.jsx(N3, {
            icon: n,
            type: r
        }), f.jsxs("div", {
            className: "flex min-w-0 max-w-full grow flex-col gap-1",
            children: [e != null && f.jsx(R3, {
                className: "text-lg font-semibold leading-6 text-token-text-primary",
                children: e
            }), t != null && f.jsx(O3, {
                className: "text-sm text-token-text-tertiary",
                children: t
            })]
        })]
    })
}

function U3({
    title: e,
    accessory: t,
    description: n,
    withSeparator: r = !0,
    icon: o,
    type: s,
    closeButton: a,
    textCenter: i
}) {
    return !e && !n ? null : f.jsxs(Uf, {
        $hasSeparator: r,
        children: [f.jsx("div", {
            className: Z("flex max-w-full", i && "flex-1 justify-center text-center"),
            children: f.jsx($f, {
                title: e,
                description: n,
                icon: o,
                type: s
            })
        }), f.jsxs("div", {
            className: "flex items-center gap-5",
            children: [t, a != null && f.jsx(M3, {
                asChild: !0,
                className: "sm:mt-0",
                children: a
            })]
        })]
    })
}

function B3({
    primaryButton: e,
    secondaryButton: t,
    isSpacedBetween: n = !1,
    modalHasContent: r = !0,
    textCenter: o = !1
}) {
    return e == null && t == null ? null : f.jsxs("div", {
        className: Z("flex flex-col gap-3 sm:flex-row-reverse", o && "justify-center", n && "justify-between", r ? "mt-5 sm:mt-4" : "mt-1"),
        children: [e, t]
    })
}
const N3 = ({
        type: e,
        icon: t
    }) => t == null ? null : f.jsx("div", {
        className: Z("mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10", e === "danger" && "bg-red-100", e === "warning" && "bg-yellow-100", e === "success" && "bg-green-100"),
        children: f.jsx(t, {
            className: Z("icon-lg", e === "danger" && "text-red-600", e === "warning" && "text-yellow-700", e === "success" && "text-green-700"),
            "aria-hidden": "true"
        })
    }),
    Uf = lt.div `px-4 pb-4 pt-5 sm:p-6 flex items-center justify-between ${({$hasSeparator:e})=>e&&"border-b border-black/10 dark:border-white/10"}`,
    vn = {
        Root: P3,
        Overlay: D3,
        Content: $3,
        Title: $f,
        TitleBar: Uf,
        Header: U3,
        Actions: B3,
        Button: L3
    },
    Bf = e => u.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, u.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.63603 5.63604C6.02656 5.24552 6.65972 5.24552 7.05025 5.63604L12 10.5858L16.9497 5.63604C17.3403 5.24552 17.9734 5.24552 18.364 5.63604C18.7545 6.02657 18.7545 6.65973 18.364 7.05025L13.4142 12L18.364 16.9497C18.7545 17.3403 18.7545 17.9734 18.364 18.364C17.9734 18.7545 17.3403 18.7545 16.9497 18.364L12 13.4142L7.05025 18.364C6.65972 18.7545 6.02656 18.7545 5.63603 18.364C5.24551 17.9734 5.24551 17.3403 5.63603 16.9497L10.5858 12L5.63603 7.05025C5.24551 6.65973 5.24551 6.02657 5.63603 5.63604Z",
        fill: "currentColor"
    })),
    F3 = u.forwardRef(function({
        onClick: t,
        className: n
    }, r) {
        const o = en();
        return f.jsx("button", {
            "data-testid": "close-button",
            ref: r,
            className: Z("flex h-8 w-8 items-center justify-center rounded-full bg-transparent hover:bg-token-main-surface-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-token-text-quaternary focus-visible:ring-offset-1 focus-visible:ring-offset-transparent dark:hover:bg-token-main-surface-tertiary", n),
            "aria-label": o.formatMessage({
                id: "Px7S/2",
                defaultMessage: "Close"
            }),
            onClick: t,
            children: f.jsx(Bf, {
                className: "icon-md"
            })
        })
    });

function j3({
    children: e,
    rootClassName: t,
    textCenter: n,
    className: r,
    description: o,
    icon: s,
    isOpen: a = !1,
    onClose: i,
    primaryButton: c,
    secondaryButton: l,
    footerContent: d,
    size: p = "normal",
    title: h,
    headerAccessory: g,
    type: _,
    noPadding: m = !1,
    hideSeparator: v = !1,
    showCloseButton: C = !1,
    shouldIgnoreClickOutside: y = !1,
    closeButton: S,
    isScrollable: w = !0,
    allowVerticalContentToOverflow: T = !1,
    position: O = "center",
    removePopoverStyling: E = !1,
    showOverlayBackground: I = !0,
    shadow: j = "normal"
}) {
    const F = !!h,
        z = !!e,
        q = F && z && !v;
    return f.jsx(vn.Root, {
        isOpen: a,
        onClose: i,
        shouldIgnoreClickOutside: y,
        className: t,
        children: f.jsx(vn.Overlay, {
            showBackground: I,
            children: f.jsxs(vn.Content, {
                size: p,
                position: O,
                className: Z("flex flex-col focus:outline-none", n && "text-center", {
                    "max-w-md": p === "normal",
                    "h-full w-full": p === "fullscreen",
                    "overflow-hidden": !T
                }, r),
                removePopoverStyling: E,
                shadow: j,
                children: [f.jsx(vn.Header, {
                    icon: s,
                    title: h,
                    accessory: g,
                    type: _,
                    textCenter: n,
                    closeButton: C && (S ? ? f.jsx(F3, {
                        onClick: () => i(!0)
                    })),
                    description: o,
                    withSeparator: q
                }), f.jsxs("div", {
                    className: Z("flex-grow", T ? "overflow-y-visible" : w ? "overflow-y-auto" : "overflow-y-hidden", {
                        "p-4 sm:p-6": p !== "fullscreen" && !m,
                        "md:!pt-0": !z
                    }),
                    children: [e, f.jsx(G3, {
                        primaryButton: c,
                        secondaryButton: l,
                        footerContent: d,
                        modalHasContent: z
                    })]
                })]
            })
        })
    })
}

function G3({
    primaryButton: e,
    secondaryButton: t,
    footerContent: n,
    textCenter: r,
    modalHasContent: o
}) {
    const s = e != null || t != null;
    return s || n ? f.jsxs("div", {
        className: "flex w-full flex-row items-center justify-end",
        children: [n, s ? f.jsx("div", {
            className: "flex-0",
            children: f.jsx(vn.Actions, {
                textCenter: r,
                primaryButton: e,
                secondaryButton: t,
                modalHasContent: o
            })
        }) : null]
    }) : null
}
const _l = e => u.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, u.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM16.0755 7.93219C16.5272 8.25003 16.6356 8.87383 16.3178 9.32549L11.5678 16.0755C11.3931 16.3237 11.1152 16.4792 10.8123 16.4981C10.5093 16.517 10.2142 16.3973 10.0101 16.1727L7.51006 13.4227C7.13855 13.014 7.16867 12.3816 7.57733 12.0101C7.98598 11.6386 8.61843 11.6687 8.98994 12.0773L10.6504 13.9039L14.6822 8.17451C15 7.72284 15.6238 7.61436 16.0755 7.93219Z",
        fill: "currentColor"
    })),
    va = e => u.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, u.createElement("path", {
        d: "M12.8533 5.314C12.4634 4.67593 11.5366 4.67593 11.1467 5.314L3.71283 17.4785C3.30561 18.1449 3.78518 19 4.56611 19H19.4339C20.2148 19 20.6944 18.1449 20.2872 17.4785L12.8533 5.314ZM9.44015 4.2711C10.6099 2.3569 13.3901 2.3569 14.5598 4.2711L21.9937 16.4356C23.2154 18.4347 21.7767 21 19.4339 21H4.56611C2.22332 21 0.78462 18.4347 2.00627 16.4356L9.44015 4.2711ZM12 8.99999C12.5523 8.99999 13 9.44771 13 9.99999V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V9.99999C11 9.44771 11.4477 8.99999 12 8.99999ZM10.8516 16.5001C10.8516 15.865 11.3664 15.3501 12.0016 15.3501C12.6367 15.3501 13.1516 15.8649 13.1516 16.5001C13.1516 17.1352 12.6367 17.6501 12.0016 17.6501C11.3664 17.6501 10.8516 17.1352 10.8516 16.5001Z",
        fill: "currentColor"
    }));

function V3(e, t) {
    if (e == null) return {};
    var n = {};
    for (var r in e)
        if ({}.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) >= 0) continue;
            n[r] = e[r]
        }
    return n
}

function Ca(e, t) {
    return Ca = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
        return n.__proto__ = r, n
    }, Ca(e, t)
}

function H3(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ca(e, t)
}
var Bs = {
        exports: {}
    },
    Ns, vl;

function W3() {
    if (vl) return Ns;
    vl = 1;
    var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    return Ns = e, Ns
}
var Fs, Cl;

function z3() {
    if (Cl) return Fs;
    Cl = 1;
    var e = W3();

    function t() {}

    function n() {}
    return n.resetWarningCache = t, Fs = function() {
        function r(a, i, c, l, d, p) {
            if (p !== e) {
                var h = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw h.name = "Invariant Violation", h
            }
        }
        r.isRequired = r;

        function o() {
            return r
        }
        var s = {
            array: r,
            bigint: r,
            bool: r,
            func: r,
            number: r,
            object: r,
            string: r,
            symbol: r,
            any: r,
            arrayOf: o,
            element: r,
            elementType: r,
            instanceOf: o,
            node: r,
            objectOf: o,
            oneOf: o,
            oneOfType: o,
            shape: o,
            exact: o,
            checkPropTypes: n,
            resetWarningCache: t
        };
        return s.PropTypes = s, s
    }, Fs
}
var yl;

function q3() {
    return yl || (yl = 1, Bs.exports = z3()()), Bs.exports
}
var K3 = q3();
const Z7 = Te(K3),
    bl = {
        disabled: !1
    },
    Nf = ne.createContext(null);
var Y3 = function(t) {
        return t.scrollTop
    },
    nr = "unmounted",
    Ht = "exited",
    Wt = "entering",
    gn = "entered",
    ya = "exiting",
    wt = function(e) {
        H3(t, e);

        function t(r, o) {
            var s;
            s = e.call(this, r, o) || this;
            var a = o,
                i = a && !a.isMounting ? r.enter : r.appear,
                c;
            return s.appearStatus = null, r.in ? i ? (c = Ht, s.appearStatus = Wt) : c = gn : r.unmountOnExit || r.mountOnEnter ? c = nr : c = Ht, s.state = {
                status: c
            }, s.nextCallback = null, s
        }
        t.getDerivedStateFromProps = function(o, s) {
            var a = o.in;
            return a && s.status === nr ? {
                status: Ht
            } : null
        };
        var n = t.prototype;
        return n.componentDidMount = function() {
            this.updateStatus(!0, this.appearStatus)
        }, n.componentDidUpdate = function(o) {
            var s = null;
            if (o !== this.props) {
                var a = this.state.status;
                this.props.in ? a !== Wt && a !== gn && (s = Wt) : (a === Wt || a === gn) && (s = ya)
            }
            this.updateStatus(!1, s)
        }, n.componentWillUnmount = function() {
            this.cancelNextCallback()
        }, n.getTimeouts = function() {
            var o = this.props.timeout,
                s, a, i;
            return s = a = i = o, o != null && typeof o != "number" && (s = o.exit, a = o.enter, i = o.appear !== void 0 ? o.appear : a), {
                exit: s,
                enter: a,
                appear: i
            }
        }, n.updateStatus = function(o, s) {
            if (o === void 0 && (o = !1), s !== null)
                if (this.cancelNextCallback(), s === Wt) {
                    if (this.props.unmountOnExit || this.props.mountOnEnter) {
                        var a = this.props.nodeRef ? this.props.nodeRef.current : Xn.findDOMNode(this);
                        a && Y3(a)
                    }
                    this.performEnter(o)
                } else this.performExit();
            else this.props.unmountOnExit && this.state.status === Ht && this.setState({
                status: nr
            })
        }, n.performEnter = function(o) {
            var s = this,
                a = this.props.enter,
                i = this.context ? this.context.isMounting : o,
                c = this.props.nodeRef ? [i] : [Xn.findDOMNode(this), i],
                l = c[0],
                d = c[1],
                p = this.getTimeouts(),
                h = i ? p.appear : p.enter;
            if (!o && !a || bl.disabled) {
                this.safeSetState({
                    status: gn
                }, function() {
                    s.props.onEntered(l)
                });
                return
            }
            this.props.onEnter(l, d), this.safeSetState({
                status: Wt
            }, function() {
                s.props.onEntering(l, d), s.onTransitionEnd(h, function() {
                    s.safeSetState({
                        status: gn
                    }, function() {
                        s.props.onEntered(l, d)
                    })
                })
            })
        }, n.performExit = function() {
            var o = this,
                s = this.props.exit,
                a = this.getTimeouts(),
                i = this.props.nodeRef ? void 0 : Xn.findDOMNode(this);
            if (!s || bl.disabled) {
                this.safeSetState({
                    status: Ht
                }, function() {
                    o.props.onExited(i)
                });
                return
            }
            this.props.onExit(i), this.safeSetState({
                status: ya
            }, function() {
                o.props.onExiting(i), o.onTransitionEnd(a.exit, function() {
                    o.safeSetState({
                        status: Ht
                    }, function() {
                        o.props.onExited(i)
                    })
                })
            })
        }, n.cancelNextCallback = function() {
            this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null)
        }, n.safeSetState = function(o, s) {
            s = this.setNextCallback(s), this.setState(o, s)
        }, n.setNextCallback = function(o) {
            var s = this,
                a = !0;
            return this.nextCallback = function(i) {
                a && (a = !1, s.nextCallback = null, o(i))
            }, this.nextCallback.cancel = function() {
                a = !1
            }, this.nextCallback
        }, n.onTransitionEnd = function(o, s) {
            this.setNextCallback(s);
            var a = this.props.nodeRef ? this.props.nodeRef.current : Xn.findDOMNode(this),
                i = o == null && !this.props.addEndListener;
            if (!a || i) {
                setTimeout(this.nextCallback, 0);
                return
            }
            if (this.props.addEndListener) {
                var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback],
                    l = c[0],
                    d = c[1];
                this.props.addEndListener(l, d)
            }
            o != null && setTimeout(this.nextCallback, o)
        }, n.render = function() {
            var o = this.state.status;
            if (o === nr) return null;
            var s = this.props,
                a = s.children;
            s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
            var i = V3(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
            return ne.createElement(Nf.Provider, {
                value: null
            }, typeof a == "function" ? a(o, i) : ne.cloneElement(ne.Children.only(a), i))
        }, t
    }(ne.Component);
wt.contextType = Nf;
wt.propTypes = {};

function pn() {}
wt.defaultProps = { in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: pn,
    onEntering: pn,
    onEntered: pn,
    onExit: pn,
    onExiting: pn,
    onExited: pn
};
wt.UNMOUNTED = nr;
wt.EXITED = Ht;
wt.ENTERING = Wt;
wt.ENTERED = gn;
wt.EXITING = ya;
var Ce = (e => (e.info = "info", e.neutral = "neutral", e.success = "success", e.successNeutral = "successNeutral", e.warning = "warning", e.danger = "danger", e))(Ce || {});
const Z3 = {
        closeButtonLabel: {
            id: "Alert.closeButtonLabel",
            defaultMessage: "Close"
        }
    },
    Q3 = ne.memo(function(t) {
        const n = en(),
            {
                className: r,
                intent: o = "info",
                fullWidth: s,
                children: a,
                icon: i,
                onRemove: c,
                testId: l
            } = t,
            d = Z({
                "px-3 py-2 rounded-lg inline-flex flex-row border pointer-events-auto gap-2": !0,
                flex: s,
                "popover shadow-lg bg-token-main-surface-primary text-token-text-secondary dark:border-black/20": o === Ce.neutral || o === Ce.info,
                "border-green-600 bg-green-600 text-white": o === Ce.success,
                "border-orange-500 text-white bg-orange-500": o === Ce.warning,
                "border-red-500 text-white bg-red-500": o === Ce.danger,
                "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white": o === Ce.successNeutral
            }, r);
        return f.jsxs("div", {
            className: d,
            role: "alert",
            "data-testid": l,
            children: [i != null && f.jsx("div", {
                className: "mt-1 flex-shrink-0 flex-grow-0",
                children: f.jsx(i, {
                    className: "icon-sm"
                })
            }), f.jsx("div", {
                className: "flex-1 justify-center gap-2",
                children: typeof a == "string" ? f.jsx("div", {
                    className: "font-semibold",
                    children: a
                }) : a
            }), c ? f.jsx("div", {
                className: "flex flex-shrink-0 flex-grow-0",
                children: f.jsx("button", {
                    onClick: c,
                    "aria-label": n.formatMessage(Z3.closeButtonLabel),
                    className: "hover:opacity-80",
                    children: f.jsx(Bf, {
                        className: "icon-sm"
                    })
                })
            }) : null]
        })
    }),
    J3 = {
        [Ce.success]: _l,
        [Ce.successNeutral]: _l,
        [Ce.warning]: va,
        [Ce.danger]: va
    },
    X3 = ({
        zIndex: e,
        duration: t,
        onRemove: n,
        intent: r = Ce.info,
        title: o,
        description: s,
        hasCloseButton: a,
        isShown: i = !0,
        testId: c
    }) => {
        const [l, d] = u.useState(0), [p, h] = u.useState(i), g = u.useRef(null), _ = u.useRef(null), m = u.useCallback(() => {
            n ? .(), C(), h(!1)
        }, [n]), v = u.useCallback(() => {
            t && (_.current = setTimeout(() => {
                m()
            }, t * 1e3))
        }, [m, t]);
        u.useEffect(() => (v(), () => {
            C()
        }), [p, v]);
        const C = () => {
                _.current && (clearTimeout(_.current), _.current = null)
            },
            y = () => {
                C()
            },
            S = () => {
                v()
            },
            w = T => {
                if (T === null) return;
                const {
                    height: O
                } = T.getBoundingClientRect();
                d(O)
            };
        return f.jsx(wt, {
            appear: !0,
            unmountOnExit: !0,
            timeout: 240,
            in: p,
            onExited: n,
            nodeRef: g,
            children: T => f.jsx("div", {
                ref: g,
                "data-state": T,
                className: "toast-root",
                onMouseEnter: y,
                onMouseLeave: S,
                style: {
                    height: l,
                    zIndex: e,
                    marginBottom: p ? 0 : -l
                },
                children: f.jsx("div", {
                    ref: w,
                    className: "w-full p-1 text-center md:w-auto md:text-justify",
                    children: f.jsxs(Q3, {
                        icon: J3[r] ? ? void 0,
                        intent: r,
                        onRemove: a ? () => m() : void 0,
                        testId: c,
                        children: [f.jsx("div", {
                            className: Z("whitespace-pre-wrap text-start", {
                                "font-semibold": s != null && s !== ""
                            }),
                            children: o
                        }), s && f.jsx("div", {
                            children: s
                        })]
                    })
                })
            })
        })
    },
    Sl = e => Object.hasOwnProperty.call(e, "id");
let e2 = 0;
class t2 {
    toasts = [];
    listeners = new Set;
    subscribe = t => (this.listeners.add(t), () => this.listeners.delete(t));
    toastsChanged() {
        this.listeners.forEach(t => t())
    }
    notify(t, n) {
        if (Sl(n))
            for (const o of this.toasts) String(o.id).startsWith(n.id) && this.closeToast(o.id);
        const r = this.createToastInstance(t, n);
        return this.toasts = [r, ...this.toasts], this.toastsChanged(), r
    }
    createToastInstance(t, n) {
        const r = ++e2,
            o = Sl(n) ? `${n.id}-${r}` : r;
        return {
            id: o,
            title: t,
            description: n.description,
            hasCloseButton: !!n.hasCloseButton,
            duration: typeof n.duration == "number" ? n.duration : 5,
            close: () => this.closeToast(o),
            onRemove: n.onRemove,
            intent: n.intent ? ? Ce.info,
            isShown: !0,
            testId: n.testId
        }
    }
    getToasts() {
        return this.toasts
    }
    closeToast(t) {
        this.toasts = this.toasts.map(n => n.id === t ? { ...n,
            isShown: !1
        } : n), this.toastsChanged()
    }
    removeToast(t) {
        this.toasts.find(n => n.id === t) ? .onRemove ? .(), this.toasts = this.toasts.filter(n => n.id !== t), this.toastsChanged()
    }
    closeAll() {
        this.toasts.forEach(t => t.close())
    }
    info(t, n) {
        return this.notify(t, { ...n,
            intent: Ce.info
        })
    }
    success(t, n) {
        return this.notify(t, { ...n,
            intent: Ce.success
        })
    }
    successNeutral(t, n) {
        return this.notify(t, { ...n,
            intent: Ce.successNeutral
        })
    }
    warning(t, n) {
        return this.notify(t, { ...n,
            intent: Ce.warning
        })
    }
    danger(t, n) {
        return this.notify(t, { ...n,
            intent: Ce.danger
        })
    }
}
const Ff = u.createContext(null),
    {
        Provider: n2
    } = Ff;

function ns() {
    return u.useContext(Ff)
}

function r2() {
    const e = ns();
    return u.useSyncExternalStore(t => e.subscribe(t), () => e.toasts, () => [])
}

function o2() {
    const e = r2(),
        t = ns();
    return f.jsx("span", {
        className: "pointer-events-none fixed inset-0 z-[60] mx-auto my-2 flex max-w-[560px] flex-col items-stretch justify-start md:pb-5",
        children: e.filter(n => n.isShown !== !1).map(({
            id: n,
            ...r
        }) => f.jsx(X3, { ...r,
            onRemove: () => t.removeToast(n)
        }, n))
    })
}

function s2({
    children: e
}) {
    const [t] = u.useState(() => new t2);
    return f.jsxs(n2, {
        value: t,
        children: [e, f.jsx(Iu, {
            children: f.jsx(o2, {})
        })]
    })
}
const ba = "_tm",
    ar = "_m";
var a2 = (e => (e.SHARE_NOT_FOUND = "share_not_found", e.GIZMO_NOT_FOUND = "gizmo_not_found", e.NO_ACCESS = "no_access", e.OAUTH_SUCCESS = "oauth_success", e.CUSTOM_ERROR = "c_err", e.CUSTOM_MSG = "c_msg", e.ACCOUNT_TRANSFER_ERROR = "account_transfer_error", e.MFA_ENABLED = "mfa_enabled", e.ENABLE_MFA_ERROR = "enable_mfa_error", e.DISABLE_MFA_SUCCESS = "disable_mfa_success", e.DISABLE_MFA_TIMEOUT = "disable_mfa_timeout", e.CANVAS_NOT_FOUND = "canvas_not_found", e))(a2 || {});

function Q7(e, t = "/", n) {
    const r = typeof window < "u",
        o = new URL(t, r ? window.location.origin : "https://chatgpt.com");
    return o.searchParams.set(ba, e), (e === "c_err" || e === "c_msg") && (n ? o.searchParams.set(ar, n) : o.searchParams.set(ar, "An error has occurred")), o.pathname + o.search + o.hash
}

function i2() {
    const [e] = au(), {
        pathname: t,
        hash: n
    } = xo(), r = eu(), o = en(), s = ns();
    u.useEffect(() => {
        const a = e.get(ba);
        if (a !== void 0) {
            const i = (c, l, d, p, h) => {
                const g = typeof c == "string" ? c : o.formatMessage(c);
                s[p](g, {
                    id: l,
                    duration: d,
                    hasCloseButton: h
                });
                const _ = new URLSearchParams(e);
                _.delete(ba), _.delete(ar), r({
                    search: `?${_.toString()}`,
                    hash: n
                }, {
                    replace: !0
                })
            };
            switch (a) {
                case "share_not_found":
                    i(jt.conversationInaccessible, "share_not_found", 10, "warning", !0);
                    break;
                case "gizmo_not_found":
                    i(jt.gizmoNotFound, "gizmo_not_found", 10, "warning", !0);
                    break;
                case "no_access":
                    i(jt.noAccess, "no_access", 5, "warning", !0);
                    break;
                case "oauth_success":
                    i(jt.oauthSuccess, "oauth_success", 5, "success", !0);
                    break;
                case "c_msg":
                    i(e.get(ar), "c_msg", 10, "success", !0);
                    break;
                case "c_err":
                    i(e.get(ar), "c_err", 5, "warning", !0);
                    break;
                case "account_transfer_error":
                    i({
                        id: "globalToasts.accountTransferError",
                        defaultMessage: "Error transferring account. To retry, go to Settings → Merge.",
                        description: "Error when unable to transfer their personal account to the workspace"
                    }, "account_transfer_error", 5, "warning", !0);
                    break;
                case "mfa_enabled":
                    i({
                        id: "enableMfa.success",
                        defaultMessage: "Multi-factor authentication enabled",
                        description: "Confirmation toast after an MFA enable action is successfully executed"
                    }, "mfa_enabled", 5, "success", !0);
                    break;
                case "enable_mfa_error":
                    i({
                        id: "enrollMfa.failure",
                        defaultMessage: "Error occurred. Please try again.",
                        description: "Error toast after MFA token request failed"
                    }, "enable_mfa_error", 5, "warning", !0);
                    break;
                case "disable_mfa_success":
                    i(jt.disableMfaSuccess, "disable_mfa_success", 5, "success", !0);
                    break;
                case "disable_mfa_timeout":
                    i(jt.disableMfaTimeout, "disable_mfa_timeout", 5, "warning", !0);
                    break;
                case "canvas_not_found":
                    i(jt.canvasNotFound, "canvas_not_found", 5, "warning", !1);
                    break
            }
        }
    }, [o, s, t, e, r, n])
}
const jt = {
        conversationInaccessible: {
            id: "globalToasts.conversationInaccessible",
            defaultMessage: "Conversation inaccessible or not found. You may need to switch accounts or request access if this conversation exists."
        },
        gizmoNotFound: {
            id: "globalToasts.gizmoNotFound",
            defaultMessage: "This GPT is inaccessible or not found. Ensure you are logged in, verify you’re in the correct ChatGPT.com workspace, or request access if you believe you should have it, if it exists."
        },
        noAccess: {
            id: "globalToasts.noAccess",
            defaultMessage: "You do not currently have access to this feature"
        },
        oauthSuccess: {
            id: "globalToasts.oauthSuccess",
            defaultMessage: "Your account is now connected"
        },
        disableMfaSuccess: {
            id: "disableMfa.success",
            defaultMessage: "Multi-factor authentication disabled"
        },
        disableMfaTimeout: {
            id: "disableMfa.timeout",
            defaultMessage: "Your last log in was too long ago, please try again"
        },
        canvasNotFound: {
            id: "canvasNotFound",
            defaultMessage: "This canvas is inaccessible or not found. Ensure you are logged in, verify you’re in the correct ChatGPT.com workspace, or request access if you believe you should have it, if it exists."
        }
    },
    c2 = Object.prototype.toString;

function l2(e, t) {
    try {
        return e instanceof t
    } catch {
        return !1
    }
}

function u2(e) {
    switch (c2.call(e)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
            return !0;
        default:
            return l2(e, Error)
    }
}
const wl = {
    componentStack: null,
    error: null
};

function d2(e, t) {
    const n = new WeakMap;

    function r(o, s) {
        if (!n.has(o)) {
            if (o.cause) return n.set(o, !0), r(o.cause, s);
            o.cause = s
        }
    }
    r(e, t)
}
const f2 = ["The node to be removed is not a child of this node", "The object can not be found here."];

function p2(e) {
    return f2.some(t => e.message ? .includes(t))
}
class h2 extends u.Component {
    state;
    constructor(t) {
        super(t), this.state = wl
    }
    componentDidCatch(t, {
        componentStack: n
    }) {
        if (u2(t)) {
            const r = new Error(t.message);
            r.name = `React ErrorBoundary ${r.name}`, r.stack = n ? ? "", d2(t, r)
        }
        if (!p2(t)) {
            const r = new Error(t.message);
            r.name = "ReactRenderingError", r.stack = n ? ? "", r.cause = t, M.addError(r, {
                error_boundary: this.props.name
            })
        }
        Vd(), this.props.onError && this.props.onError(t, n ? ? ""), this.setState({
            error: t,
            componentStack: n
        })
    }
    resetErrorBoundary = () => {
        const {
            onReset: t
        } = this.props, {
            error: n,
            componentStack: r
        } = this.state;
        t && t(n, r ? ? ""), this.setState(wl)
    };
    render() {
        const {
            fallback: t,
            children: n
        } = this.props, r = this.state;
        if (r.error) {
            let o;
            return typeof t == "function" ? o = t({
                error: r.error,
                componentStack: r.componentStack ? ? "",
                resetError: this.resetErrorBoundary
            }) : o = t, u.isValidElement(o) ? o : null
        }
        return typeof n == "function" ? n() : n
    }
}

function g2() {}
var m2 = g2;
const _2 = Te(m2),
    Zr = e => e,
    Pe = nn(() => ({
        activeRequests: {},
        activeRequestsBlockingThread: {}
    })),
    J7 = e => {
        const {
            activeRequests: t
        } = Pe.getState();
        return t[e] ? ? null
    },
    mi = e => Dn(Pe, e);

function v2(e) {
    return mi(t => t.activeRequests[e] != null)
}

function X7() {
    return mi(e => Object.keys(e.activeRequests).length > 0)
}

function e8() {
    return mi(e => Object.keys(e.activeRequestsBlockingThread).length > 0)
}
const js = {
    addRequest(e, t, n) {
        Pe.setState(r => ({
            activeRequests: { ...r.activeRequests,
                [e]: {
                    id: e,
                    abortController: t,
                    turnTracker: n
                }
            }
        }))
    },
    addBlockingRequest(e, t, n) {
        Pe.setState(r => ({
            activeRequestsBlockingThread: { ...r.activeRequestsBlockingThread,
                [e]: {
                    id: e,
                    abortController: n,
                    threadId: t
                }
            }
        }))
    },
    removeRequest(e) {
        Pe.setState(t => {
            const n = { ...t.activeRequests
            };
            return delete n[e], {
                activeRequests: n
            }
        })
    },
    removeBlockingRequest(e) {
        Pe.setState(t => {
            const n = { ...t.activeRequestsBlockingThread
            };
            return delete n[e], {
                activeRequestsBlockingThread: n
            }
        })
    },
    getBlockingRequestsByThread(e) {
        const {
            activeRequestsBlockingThread: t
        } = Pe.getState();
        return Object.values(t).filter(n => n.threadId === e)
    },
    clear() {
        Pe.setState({
            activeRequests: {}
        }), Pe.setState({
            activeRequestsBlockingThread: {}
        })
    },
    abortRequest(e) {
        const {
            activeRequests: t,
            activeRequestsBlockingThread: n
        } = Pe.getState();
        return t[e] != null ? (t[e].abortController.abort(), js.removeRequest(e), !0) : n[e] != null ? (n[e].abortController ? .abort(), js.removeBlockingRequest(e), !0) : !1
    },
    abortRequests(e) {
        const {
            activeRequests: t,
            activeRequestsBlockingThread: n
        } = Pe.getState(), r = { ...t
        }, o = { ...n
        };
        for (const s of e) r[s] != null && (r[s].abortController.abort(), delete r[s]), o[s] != null && (o[s].abortController ? .abort(), delete o[s]);
        Pe.setState({
            activeRequests: r,
            activeRequestsBlockingThread: o
        })
    },
    abortAllRequests() {
        const {
            activeRequests: e,
            activeRequestsBlockingThread: t
        } = Pe.getState();
        Object.values(e).forEach(n => {
            n.abortController.abort()
        }), Object.values(t).forEach(n => {
            n.abortController ? .abort()
        }), js.clear()
    }
};

function C2() {
    const e = xo();
    return S2(e.pathname)
}

function y2(e) {
    const n = new URL(`http://example.com${e}`).pathname.match(/(?:\/gizmo)?\/g\/([^/]+)/);
    if (n) return n[1]
}

function b2(e) {
    const t = e.split("-");
    return t.length > 1 && t[0] === "g" ? t ? .[1] === "p" ? `g-p-${t[2]}` : `g-${t[1]}` : t[0]
}

function S2(e) {
    const t = y2(e);
    if (t) return b2(t)
}
const jf = Kt.HistoryDisabled,
    Gf = Kt.IsNoAuthChatTrainingEnabled,
    Qr = nn(() => {
        let e = null,
            t = !1;
        if (typeof window < "u") {
            const n = Hf();
            n && (t = n), e = k2() ? ? null
        }
        return {
            isNoAuthChatTrainingEnabled: e,
            isTemporaryChatEnabled: t
        }
    }),
    Vf = e => Dn(Qr, e);

function w2() {
    const e = T2(),
        t = I2(),
        {
            isUnauthenticated: n
        } = Rd();
    return !!(e || n && !t)
}

function T2() {
    return Vf(e => e.isTemporaryChatEnabled)
}

function A2() {
    const {
        value: e
    } = C_("1656345175");
    return e ? ? !0
}

function I2() {
    const e = Vf(n => n.isNoAuthChatTrainingEnabled),
        t = A2();
    return e ? ? t
}
const Tl = {
    setIsTemporaryChatEnabled(e) {
        Qr.setState({
            isTemporaryChatEnabled: e
        }), e && me.logEvent(te.enableTemporaryChat)
    },
    toggleIsTemporaryChatEnabled() {
        Tl.setIsTemporaryChatEnabled(!Qr.getState().isTemporaryChatEnabled)
    },
    disableTemporaryChat() {
        Tl.setIsTemporaryChatEnabled(!1)
    },
    setIsNoAuthChatTrainingEnabled(e) {
        Qr.setState({
            isNoAuthChatTrainingEnabled: e
        }), Ot.setItem(Gf, e)
    }
};

function k2() {
    const e = Ot.getItem(Gf);
    return e === "true" || e === !0 ? !0 : e === "false" || e === !1 ? !1 : void 0
}

function Hf() {
    const e = Ot.getItem(jf);
    return e === "true" || e === !0 ? !0 : e === "false" || e === !1 ? !1 : void 0
}

function E2() {
    Ot.removeItem(jf)
}

function t8() {
    const e = w2();
    return tn(Wf(e))
}

function n8(e, t) {
    return e.getQueryData(Wf(t).queryKey)
}

function x2(e) {
    return {
        categories: e.categories.concat().reverse().map(R2),
        groups: e.internal_groups ? .map(O2) ? ? [],
        defaultModelSlug: e.default_model_slug ? ? null,
        models: new Map(e.models.map(t => [t.slug, zf(t)]))
    }
}

function Wf(e) {
    return Ro({
        retry: 5,
        queryKey: ["models", JSON.stringify({
            isHistoryDisabled: e
        })],
        queryFn: async () => {
            const t = vr(await b.safeGet("/models", {
                parameters: {
                    query: {
                        history_and_training_disabled: e
                    }
                },
                authOption: fe.SendIfAvailable
            }));
            return x2(t)
        }
    })
}

function zf(e) {
    return {
        id: e.slug,
        maxTokens: e.max_tokens,
        title: e.title,
        description: e.description,
        tags: e.tags,
        enabledTools: e.enabled_tools,
        product_features: e.product_features
    }
}

function R2({
    default_model: e,
    tagline: t,
    color: n,
    human_category_name: r,
    category: o,
    human_category_short_name: s,
    human_category_shorter_name: a,
    subscription_level: i,
    short_explainer: c,
    subcategory: l,
    title: d,
    is_beta: p,
    is_alpha: h,
    model_badge: g,
    supported_features: _,
    ...m
}) {
    return {
        color: n,
        tagline: t,
        defaultModel: e,
        label: r,
        shortLabel: s,
        description: c,
        shorterLabel: a ? ? s,
        subscriptionLevel: i,
        categoryId: o,
        subcategory: l,
        isBeta: p,
        isAlpha: h,
        modelBadge: g,
        title: d,
        supportedFeatures: _,
        ...m
    }
}

function O2({
    group: e,
    human_group_name: t,
    human_group_short_name: n,
    model_ids: r
}) {
    return {
        group: e,
        label: t,
        shortLabel: n,
        modelIds: r
    }
}
const r8 = u.createContext(() => Promise.resolve()),
    M2 = u.createContext(null),
    L2 = u.createContext(null);
u.createContext({
    onDismount: () => {}
});
var _i = {
        exports: {}
    },
    bn = typeof Reflect == "object" ? Reflect : null,
    Al = bn && typeof bn.apply == "function" ? bn.apply : function(t, n, r) {
        return Function.prototype.apply.call(t, n, r)
    },
    Jr;
bn && typeof bn.ownKeys == "function" ? Jr = bn.ownKeys : Object.getOwnPropertySymbols ? Jr = function(t) {
    return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
} : Jr = function(t) {
    return Object.getOwnPropertyNames(t)
};

function P2(e) {
    console && console.warn && console.warn(e)
}
var qf = Number.isNaN || function(t) {
    return t !== t
};

function ce() {
    ce.init.call(this)
}
_i.exports = ce;
_i.exports.once = B2;
ce.EventEmitter = ce;
ce.prototype._events = void 0;
ce.prototype._eventsCount = 0;
ce.prototype._maxListeners = void 0;
var Il = 10;

function rs(e) {
    if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
}
Object.defineProperty(ce, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return Il
    },
    set: function(e) {
        if (typeof e != "number" || e < 0 || qf(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
        Il = e
    }
});
ce.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
ce.prototype.setMaxListeners = function(t) {
    if (typeof t != "number" || t < 0 || qf(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
    return this._maxListeners = t, this
};

function Kf(e) {
    return e._maxListeners === void 0 ? ce.defaultMaxListeners : e._maxListeners
}
ce.prototype.getMaxListeners = function() {
    return Kf(this)
};
ce.prototype.emit = function(t) {
    for (var n = [], r = 1; r < arguments.length; r++) n.push(arguments[r]);
    var o = t === "error",
        s = this._events;
    if (s !== void 0) o = o && s.error === void 0;
    else if (!o) return !1;
    if (o) {
        var a;
        if (n.length > 0 && (a = n[0]), a instanceof Error) throw a;
        var i = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
        throw i.context = a, i
    }
    var c = s[t];
    if (c === void 0) return !1;
    if (typeof c == "function") Al(c, this, n);
    else
        for (var l = c.length, d = Xf(c, l), r = 0; r < l; ++r) Al(d[r], this, n);
    return !0
};

function Yf(e, t, n, r) {
    var o, s, a;
    if (rs(n), s = e._events, s === void 0 ? (s = e._events = Object.create(null), e._eventsCount = 0) : (s.newListener !== void 0 && (e.emit("newListener", t, n.listener ? n.listener : n), s = e._events), a = s[t]), a === void 0) a = s[t] = n, ++e._eventsCount;
    else if (typeof a == "function" ? a = s[t] = r ? [n, a] : [a, n] : r ? a.unshift(n) : a.push(n), o = Kf(e), o > 0 && a.length > o && !a.warned) {
        a.warned = !0;
        var i = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        i.name = "MaxListenersExceededWarning", i.emitter = e, i.type = t, i.count = a.length, P2(i)
    }
    return e
}
ce.prototype.addListener = function(t, n) {
    return Yf(this, t, n, !1)
};
ce.prototype.on = ce.prototype.addListener;
ce.prototype.prependListener = function(t, n) {
    return Yf(this, t, n, !0)
};

function D2() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function Zf(e, t, n) {
    var r = {
            fired: !1,
            wrapFn: void 0,
            target: e,
            type: t,
            listener: n
        },
        o = D2.bind(r);
    return o.listener = n, r.wrapFn = o, o
}
ce.prototype.once = function(t, n) {
    return rs(n), this.on(t, Zf(this, t, n)), this
};
ce.prototype.prependOnceListener = function(t, n) {
    return rs(n), this.prependListener(t, Zf(this, t, n)), this
};
ce.prototype.removeListener = function(t, n) {
    var r, o, s, a, i;
    if (rs(n), o = this._events, o === void 0) return this;
    if (r = o[t], r === void 0) return this;
    if (r === n || r.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete o[t], o.removeListener && this.emit("removeListener", t, r.listener || n));
    else if (typeof r != "function") {
        for (s = -1, a = r.length - 1; a >= 0; a--)
            if (r[a] === n || r[a].listener === n) {
                i = r[a].listener, s = a;
                break
            }
        if (s < 0) return this;
        s === 0 ? r.shift() : $2(r, s), r.length === 1 && (o[t] = r[0]), o.removeListener !== void 0 && this.emit("removeListener", t, i || n)
    }
    return this
};
ce.prototype.off = ce.prototype.removeListener;
ce.prototype.removeAllListeners = function(t) {
    var n, r, o;
    if (r = this._events, r === void 0) return this;
    if (r.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : r[t] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete r[t]), this;
    if (arguments.length === 0) {
        var s = Object.keys(r),
            a;
        for (o = 0; o < s.length; ++o) a = s[o], a !== "removeListener" && this.removeAllListeners(a);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
    }
    if (n = r[t], typeof n == "function") this.removeListener(t, n);
    else if (n !== void 0)
        for (o = n.length - 1; o >= 0; o--) this.removeListener(t, n[o]);
    return this
};

function Qf(e, t, n) {
    var r = e._events;
    if (r === void 0) return [];
    var o = r[t];
    return o === void 0 ? [] : typeof o == "function" ? n ? [o.listener || o] : [o] : n ? U2(o) : Xf(o, o.length)
}
ce.prototype.listeners = function(t) {
    return Qf(this, t, !0)
};
ce.prototype.rawListeners = function(t) {
    return Qf(this, t, !1)
};
ce.listenerCount = function(e, t) {
    return typeof e.listenerCount == "function" ? e.listenerCount(t) : Jf.call(e, t)
};
ce.prototype.listenerCount = Jf;

function Jf(e) {
    var t = this._events;
    if (t !== void 0) {
        var n = t[e];
        if (typeof n == "function") return 1;
        if (n !== void 0) return n.length
    }
    return 0
}
ce.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Jr(this._events) : []
};

function Xf(e, t) {
    for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
    return n
}

function $2(e, t) {
    for (; t + 1 < e.length; t++) e[t] = e[t + 1];
    e.pop()
}

function U2(e) {
    for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
    return t
}

function B2(e, t) {
    return new Promise(function(n, r) {
        function o(a) {
            e.removeListener(t, s), r(a)
        }

        function s() {
            typeof e.removeListener == "function" && e.removeListener("error", o), n([].slice.call(arguments))
        }
        ep(e, t, s, {
            once: !0
        }), t !== "error" && N2(e, o, {
            once: !0
        })
    })
}

function N2(e, t, n) {
    typeof e.on == "function" && ep(e, "error", t, n)
}

function ep(e, t, n, r) {
    if (typeof e.on == "function") r.once ? e.once(t, n) : e.on(t, n);
    else if (typeof e.addEventListener == "function") e.addEventListener(t, function o(s) {
        r.once && e.removeEventListener(t, o), n(s)
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
}
var F2 = _i.exports;
const j2 = Te(F2);
class G2 {
    emitter = new j2;
    constructor() {
        this.emitter.setMaxListeners(1e3)
    }
    on(t, n) {
        this.emitter.on(t, n)
    }
    off(t, n) {
        this.emitter.off(t, n)
    }
    publish(t) {
        this.emitter.emit(t.kind, t), this.emitter.emit("anyEvent", t)
    }
}
const kl = new G2;
class V2 {
    isMultimodalTextMessage(t) {
        return t.content.content_type === le.MultimodalText
    }
    isPartAssetPointer(t) {
        return typeof t != "string" && (t.content_type === Ze.ImageAssetPointer || t.content_type === Ze.AudioAssetPointer)
    }
    isPartRealTimeUserAudioVideoAssetPointer(t) {
        return typeof t != "string" && t.content_type === Ze.RealTimeUserAudioVideoAssetPointer
    }
    isPartAudioTranscription(t) {
        return typeof t != "string" && t.content_type === Ze.AudioTranscription
    }
    getAudio(t) {
        return this.isMultimodalTextMessage(t) ? t.content.parts.filter(n => typeof n != "string" && n.content_type === Ze.Audio) : []
    }
    getAssetPointers(t) {
        return this.isMultimodalTextMessage(t) ? t.content.parts.filter(n => this.isPartAssetPointer(n)) : []
    }
    getImageAssetPointers(t) {
        return this.isMultimodalTextMessage(t) ? this.getImageAssetPointersFromParts(t.content.parts) : []
    }
    getImageAssetPointersFromParts(t) {
        return t.filter(n => this.isPartAssetPointer(n) && n.content_type === Ze.ImageAssetPointer)
    }
    getFrameAssetPointers(t) {
        return this.isMultimodalTextMessage(t) ? t.content.parts.flatMap(n => {
            if (typeof n != "string" && n.content_type === Ze.RealTimeUserAudioVideoAssetPointer) return n.frames_asset_pointers
        }).filter(n => !!n) : []
    }
    getAudioAssetPointers(t) {
        return this.isMultimodalTextMessage(t) ? t.content.parts.map(n => {
            if (typeof n != "string") switch (n.content_type) {
                case Ze.AudioAssetPointer:
                    return n;
                case Ze.RealTimeUserAudioVideoAssetPointer:
                    return n.audio_asset_pointer;
                default:
                    return
            }
        }).filter(n => !!n) : []
    }
    getVideoContainerAssetPointers(t) {
        return this.isMultimodalTextMessage(t) ? t.content.parts.flatMap(n => typeof n != "string" && n.content_type === Ze.RealTimeUserAudioVideoAssetPointer ? n.video_container_asset_pointer : null).filter(n => !!n) : []
    }
    getPartsAsString(t, n = !0) {
        return this.isMultimodalTextMessage(t) ? t.content.parts.map(r => {
            if (typeof r == "string") return r;
            if (this.isPartAudioTranscription(r)) return r.text;
            if (n) {
                if (this.isPartAssetPointer(r)) return `[media pointer="${r.asset_pointer}"]`;
                if (this.isPartRealTimeUserAudioVideoAssetPointer(r)) {
                    const o = r.audio_asset_pointer ? .asset_pointer;
                    return o && `[media pointer="${o}"]`
                }
            } else return !1
        }).filter(Boolean).join(`
`) : ""
    }
}
const tp = new V2;
var _o = (e => (e[e.no_render = 0] = "no_render", e[e.BrowseTool = 1] = "BrowseTool", e[e.Browsing = 2] = "Browsing", e[e.CanmoreTool = 3] = "CanmoreTool", e[e.CodeInterpreter = 4] = "CodeInterpreter", e[e.CodeInterpreterTool = 5] = "CodeInterpreterTool", e[e.Dalle = 6] = "Dalle", e[e.DalleTool = 7] = "DalleTool", e[e.GizmoEditor = 8] = "GizmoEditor", e[e.JITPlugin = 9] = "JITPlugin", e[e.JITPluginTool = 10] = "JITPluginTool", e[e.ImagePreloadTool = 11] = "ImagePreloadTool", e[e.ModelEditableContext = 12] = "ModelEditableContext", e[e.MultimodalText = 13] = "MultimodalText", e[e.ParallelBrowsing = 14] = "ParallelBrowsing", e[e.ParallelBrowsingTool = 15] = "ParallelBrowsingTool", e[e.RetrievalBrowsing = 16] = "RetrievalBrowsing", e[e.RetrievalBrowsingTool = 17] = "RetrievalBrowsingTool", e[e.SearchResultTool = 18] = "SearchResultTool", e[e.SearchGPTQuery = 19] = "SearchGPTQuery", e[e.System = 20] = "System", e[e.Text = 21] = "Text", e[e.UserEditableContext = 22] = "UserEditableContext", e[e.UserModelBio = 23] = "UserModelBio", e[e.UserModelBioTool = 24] = "UserModelBioTool", e[e.Unknown = 25] = "Unknown", e[e.de1d73e = 26] = "de1d73e", e[e.a8km123 = 27] = "a8km123", e[e.f959b8c = 28] = "f959b8c", e[e.caterpillar_quick_kickoff = 29] = "caterpillar_quick_kickoff", e[e.b1de6e2_c = 30] = "b1de6e2_c", e[e.b1de6e2_s = 31] = "b1de6e2_s", e[e.b1de6e2_d = 32] = "b1de6e2_d", e[e.l1p9k3u = 33] = "l1p9k3u", e[e.is_loading_message = 34] = "is_loading_message", e[e.oiw209h = 35] = "oiw209h", e[e.oiw209h_c = 36] = "oiw209h_c", e[e.t2uay3k = 37] = "t2uay3k", e[e.t2uay3k_c = 38] = "t2uay3k_c", e[e.c12k321 = 39] = "c12k321", e))(_o || {}),
    H2 = (e => (e.BROWSER = "browser", e.CANMORE = "canmore", e.MTBROWSER = "mtbrowser", e.WIKI_BROWSER = "wiki_browser", e.MYFILES_BROWSER = "myfiles_browser", e.FILE_SEARCH = "file_search", e.GDRIVE_BROWSER = "gdrive_browser", e.BROWSING_TEAM = "browsing_team", e.BIO = "bio", e.PYTHON = "python", e.DALLE = "dalle", e.GIZMO_EDITOR = "gizmo_editor", e.JIT_PLUGIN = "jit_plugin", e.SEARCH_RESULT = "search_result", e.SEARCH_RESULTS = "search_results", e.A8KM123 = "a8km123", e.SEARCHGPT = "web", e.DE1D73E = "de1d73e", e.L1P9K3U = "l1p9k3u", e.OIW209H = "oiw209h", e.T2UAY3K = "t2uay3k", e.START_RESEARCH_TASK = "research_kickoff_tool.start_research_task", e.CLARIFY_WITH_TEXT = "research_kickoff_tool.clarify_with_text", e.ADVANCED_VOICE = "advanced_voice", e))(H2 || {});

function Rn(e) {
    if (e.metadata ? .b1de6e2_c) return 30;
    if (e.recipient === "l1p9k3u" || e.author.name === "l1p9k3u") return 33;
    if (e.metadata ? .b1de6e2_s || e.recipient === "research_kickoff_tool.start_research_task") return 31;
    if (e.metadata ? .b1de6e2_d) return 32;
    if (e.metadata ? .is_loading_message) return 34;
    if (e.metadata ? .f959b8c) return 28;
    if (e.author.role === H.Assistant) {
        const t = El(e.recipient);
        if (e.recipient === "browser" || e.recipient === "wiki_browser" || t ? .namespace === "mtbrowser") return 2;
        if (e.recipient === "web") return 19;
        if (e.recipient === "myfiles_browser" || e.recipient === "gdrive_browser" || t ? .namespace === "file_search" || t ? .namespace === "myfiles_browser") return 16;
        if (e.recipient === "browsing_team") return 14;
        if (e.recipient === "bio") return 23;
        if (e.recipient === "python") return 4;
        if (t ? .namespace === "dalle" || e.recipient === "dalle") return 6;
        if (t ? .namespace === "t2uay3k" || e.recipient === "t2uay3k") return 37;
        if (t ? .namespace === "oiw209h" || e.recipient === "oiw209h") return 35;
        if (t ? .namespace === "gizmo_editor") return 8;
        if (t ? .namespace === "canmore") return 3;
        if (t ? .namespace === "de1d73e") return 26;
        if (xl(t ? .namespace)) return 9;
        if (t != null) return 25;
        if (e.content.content_type === le.ModelEditableContext) return 12
    } else if (e.author.role === H.Tool) {
        const t = El(e.author.name);
        if (e.author.name === "browser" || e.author.name === "wiki_browser" || t ? .namespace === "mtbrowser") return 1;
        if (e.author.name === "myfiles_browser" || e.author.name === "gdrive_browser" || e.author.name === "file_search" || t ? .namespace === "file_search" || t ? .namespace === "myfiles_browser") return 17;
        if (e.author.name === "browsing_team") return 15;
        if (e.author.name === "search_result" && e.content.content_type === le.TetherQuote) return 18;
        if (e.author.name === "search_results" && e.content.content_type === le.TetherBrowsingDisplay) return 11;
        if (e.author.name === "bio") return 24;
        if (e.author.name === "a8km123") return 27;
        if (e.author.name === "python") return 5;
        if (t ? .namespace === "dalle" || e.author.name === "dalle") return 7;
        if (t ? .namespace === "t2uay3k") return 38;
        if (t ? .namespace === "gizmo_editor") return 8;
        if (t ? .namespace === "canmore") return 3;
        if (xl(t ? .namespace)) return 10;
        if (t ? .namespace === "de1d73e") return 26;
        if (t ? .namespace === "oiw209h") return 36;
        if (e.author.name ? .startsWith("web.")) return 20;
        if (e.author.name === "research_kickoff_tool.start_research_task") return 31;
        if (e.author.name === "research_kickoff_tool.clarify_with_text") return 0;
        if (t != null || e.author.name === "plugin_service") return W2(e)
    } else {
        if (e.author.role === H.System || e.author.role === H.Developer) return 20;
        if (e.author.role === H.User && e.content.content_type === le.UserEditableContext) return 22
    }
    return e.content.content_type === le.Text || e.content.content_type === le.MultimodalText ? 21 : 25
}

function W2(e) {
    return e.create_time && e.create_time > 17172e5 ? M.addError("[Unknown tool] Encountered a message with an unknown tool. Rendering as Unknown message type, which is not visible.", {
        message: e
    }) : M.addError("[Unknown tool] Encountered a message with an unknown tool, which is most likely an old plugin. Rendering as Unknown message type, which may not appear as expected.", {
        message: e
    }), 25
}

function o8(e) {
    return e.metadata ? .finish_details != null
}

function vi(e) {
    return e.content.content_type === le.Text ? e.content.parts.some(t => t.length > 0) : e.content.content_type === le.MultimodalText ? tp.getPartsAsString(e).length > 0 : !1
}

function z2(e) {
    return vi(e) ? !0 : "text" in e.content ? e.content.text.length > 0 : "result" in e.content ? e.content.result.length > 0 : !1
}

function s8(e) {
    return e.metadata ? .finish_details ? .type === "stop"
}

function q2(e) {
    return e ? .metadata ? .finish_details ? .type === "max_tokens"
}

function a8(e) {
    return e.metadata ? .finish_details ? .type === "interrupted"
}

function i8(e) {
    return e.metadata ? .message_type === "continue"
}

function c8(e) {
    return e.recipient ? ? ""
}

function El(e) {
    if (e == null || !e.includes(".")) return null;
    const [t, n] = e.split(".");
    return {
        namespace: t,
        functionName: n
    }
}

function K2(e, t) {
    return {
        id: nt(),
        author: {
            role: H.System
        },
        content: {
            content_type: le.Text,
            parts: Array.isArray(e) ? e : [e]
        },
        metadata: t
    }
}

function l8(e, t) {
    return {
        id: nt(),
        author: {
            role: H.Developer
        },
        content: {
            content_type: le.Text,
            parts: Array.isArray(e) ? e : [e]
        },
        metadata: t
    }
}

function u8(e, t, n = nt()) {
    return {
        id: n,
        author: {
            role: H.Assistant
        },
        content: {
            content_type: le.Text,
            parts: Array.isArray(e) ? e : [e]
        },
        metadata: t
    }
}

function d8(e, t, n) {
    const r = {
        role: H.User
    };
    return n && (r.metadata = n), {
        id: nt(),
        author: r,
        create_time: Date.now() / 1e3,
        content: typeof e == "string" ? {
            content_type: le.Text,
            parts: [e]
        } : e,
        metadata: t
    }
}

function f8(e) {
    return K2([`The user is referring to this in particular:
${e}`], {
        exclude_after_next_user_message: !0
    })
}

function p8(e) {
    return {
        id: nt(),
        author: {
            role: H.System
        },
        content: e,
        metadata: {
            rebase_system_message: !0
        },
        recipient: "all"
    }
}

function xl(e) {
    if (!e) return !1;
    const t = e.split("__");
    return t.findIndex(n => n === "jit_plugin") === t.length - 1
}

function Rl(e) {
    return e.author.role === H.Assistant ? e.metadata ? .gizmo_id : void 0
}

function vo(e) {
    return e.author.role === H.User && !e.metadata ? .is_user_system_message
}

function Co(e) {
    const t = Rn(e);
    return t === 20 || t === 23 || t === 24 || t === 12 || t === 22 || t === 25 || e.metadata ? .is_visually_hidden_from_conversation === !0
}

function h8(e) {
    if (Co(e)) return !1;
    if ((e.metadata ? .attachments ? .length ? ? 0) > 0) return !0;
    switch (Rn(e)) {
        case 21:
            return vi(e);
        case 3:
            return z2(e);
        default:
            return !1
    }
}

function Y2(e) {
    return Co(e) ? !1 : Rn(e) === 21 && vi(e)
}
const Z2 = "contentReference";

function g8(e) {
    try {
        const n = new Intl.Segmenter("en-US", {
                granularity: "grapheme"
            }).segment(e),
            r = [];
        for (const o of n) r.push(o.segment);
        return r
    } catch {
        return e.split("")
    }
}

function Q2(e) {
    const t = [];
    for (let n = 0; n < e.length; n++) {
        const r = e.codePointAt(n);
        r !== void 0 && (t.push(r), r > 65535 && n++)
    }
    return t
}

function Ol(e) {
    return String.fromCodePoint(...e)
}

function J2(e) {
    for (var t = -1, n = e == null ? 0 : e.length, r = 0, o = []; ++t < n;) {
        var s = e[t];
        s && (o[r++] = s)
    }
    return o
}
var X2 = J2;
const np = Te(X2);

function eO(e, t = []) {
    const n = rp(t);
    return op(n, e, {
        includeDirectives: !1
    })
}

function m8(e, t = [], n, r, o = !0) {
    const s = rp(t, r);
    let a = 0,
        i = np(s.filter(({
            index: l,
            displayType: d
        }) => l != null && d).map(({
            newContentReference: l
        }) => ((l.type === "grouped_webpages" || l.type === "grouped_webpages_v2" || l.type === "grouped_webpages_model_predicted_fallback") && (l.items = l.items.map(d => ({ ...d,
            section_index: a++
        }))), l))),
        c = op(s, e);
    return o && (c = tO(c)), n && ({
        updatedText: c,
        updatedReferences: i
    } = nO(n, i, c)), {
        processedText: c,
        displayedContentReferences: i
    }
}

function rp(e = [], t) {
    let n = 0;
    return [...e].sort((o, s) => o.start_idx - s.start_idx || o.end_idx - s.end_idx).reduce((o, s) => {
        let a, i;
        switch (s.type) {
            case "invalid":
            case "hidden":
                a = { ...s,
                    type: "hidden",
                    invalid: s.type === "invalid"
                };
                break;
            case "image_v2":
            case "nav_list":
            case "tldr":
            case "optimistic_image_citation":
            case "sources_footnote":
            case "sports_standings":
            case "sports_schedule":
            case "navigation":
            case "video":
            case "file_navlist":
                s.type === "tldr" && s.used_as_navigation || s.type === "navigation" && n === 0 ? a = { ...s,
                    type: "hidden",
                    invalid: !0
                } : (i = "block", a = { ...s
                });
                break;
            case "file":
            case "title_citation":
            case "location_search":
            case "time":
            case "product":
            case "grouped_webpages":
            case "grouped_webpages_v2":
            case "grouped_webpages_model_predicted_fallback":
            case "attribution":
                i = "inline", a = { ...s
                };
                break;
            case "image_inline":
                i = "inline", a = { ...s
                };
                break;
            case "webpage":
            case "webpage_extended":
                i = "inline", a = {
                    type: "grouped_webpages",
                    matched_text: s.matched_text,
                    start_idx: s.start_idx,
                    end_idx: s.end_idx,
                    alt: s.alt,
                    refs: s.refs,
                    prompt_text: s.prompt_text,
                    items: [{ ...s
                    }],
                    safe_urls: s.safe_urls
                };
                break;
            case "calculator":
            case "stock":
            case "forecast":
            case "businesses_map":
            case "products":
            case "product_reviews":
                i = "block", a = { ...s
                };
                break;
            default:
                a = { ...s,
                    type: "hidden",
                    invalid: !0
                }, i = "alt";
                break
        }
        return o.push({
            originalContentReference: s,
            newContentReference: a,
            index: n++,
            displayType: i
        }), t && o.push({
            originalContentReference: s,
            newContentReference: {
                type: "debug",
                matched_text: s.matched_text.replace(/(^【|】$)/g, ""),
                ...s.type === "webpage_extended" && s.pub_date && {
                    pub_date: new Date(s.pub_date * 1e3).toLocaleString()
                }
            },
            index: n++
        }), o
    }, [])
}
const _8 = "";

function op(e, t, n = {
    includeDirectives: !0
}) {
    let r = "",
        o = 0;
    const s = Q2(t);
    let a = 0;
    for (const i of e) {
        const {
            originalContentReference: c,
            displayType: l
        } = i, {
            start_idx: d,
            end_idx: p
        } = c, h = s.slice(o, d);
        if (r += Ol(h), o = p, l) {
            if (n.includeDirectives) switch (l) {
                case "block":
                    r += Sa(a, "leaf", "newline", "newline");
                    break;
                case "inline":
                    {
                        const g = r.length !== 0 && r[r.length - 1].match(/\s/),
                            _ = r.endsWith("```");r += Sa(a, "inline", g ? void 0 : _ ? "newline" : "zero-width-space");
                        break
                    }
                case "alt":
                    r += c.alt ? ? "";
                    break
            } else r += c.alt ? ? "";
            a++
        }
    }
    return r += Ol(s.slice(o)), r
}
const Ml = "&#8203;";

function Sa(e, t, n, r) {
    const o = `${Z2}[oaicite:${e}]{index=${e}}`;
    return `${n==="zero-width-space"?Ml:n==="newline"?`
`:""}${t==="leaf"?"::":":"}${o}${r==="zero-width-space"?Ml:n==="newline"?`
`:""}`
}

function tO(e) {
    let t = e;
    t = t.replace(/【[^】]*$/g, "");
    const n = t.match(/(\n|^):::/g);
    return n && n.length % 2 === 1 && (t += `
:::`), t = t.replace(/^\d+$/, ""), t
}

function nO(e, t, n) {
    const r = e.find(s => Rn(s) === _o.CodeInterpreter),
        o = e.find(s => Rn(s) === _o.CodeInterpreterTool);
    if (r != null && o != null) {
        const s = t.length;
        n.endsWith("```") && (n += `
`), n += " " + Sa(s, "inline", "zero-width-space", "zero-width-space"), t.push({
            type: "code_execution",
            codeMessage: r,
            codeExecutionOutputMessage: o
        })
    }
    return {
        updatedText: n,
        updatedReferences: t
    }
}

function Ll(e, t = {
    shouldGetTextFromContentReferences: !1,
    shouldGetVisibleText: !1
}) {
    if (t.shouldGetVisibleText && !Y2(e)) return "";
    switch (e.content.content_type) {
        case le.Text:
            {
                const n = e.content.parts.join("");
                return t.shouldGetTextFromContentReferences && e.metadata ? .content_references ? eO(n, e.metadata.content_references) : n
            }
        case le.MultimodalText:
            return tp.getPartsAsString(e, !t.shouldGetVisibleText);
        case le.TetherBrowsingDisplay:
            return e.content.result;
        case le.TetherQuote:
        case le.TetherBrowsingCode:
        case le.Code:
        case le.ExecutionOutput:
        case le.SystemError:
            return e.content.text;
        case le.SystemMessage:
        case le.SystemContent:
            return e ? .metadata ? .__internal ? .rendered_harmony_string ? ? JSON.stringify(e.content, null, 2);
        case le.UserEditableContext:
            return `${e.content.user_profile}
${e.content.user_instructions}`;
        default:
            return ""
    }
}

function rO(e) {
    var t = e == null ? 0 : e.length;
    return t ? e[t - 1] : void 0
}
var oO = rO;
const sp = Te(oO),
    yo = "request-";

function sO(e) {
    const t = nt();
    return `${e}${t.substring(e.length)}`
}

function aO(e, t, n) {
    const r = [];
    for (const o of e) {
        const {
            id: s,
            parentId: a,
            message: i,
            metadata: c
        } = o, l = sp(r);
        if (iO(l, i)) {
            l.messages.push({
                nodeId: s,
                parentId: a,
                message: i,
                ...c
            });
            const d = l.role === H.System || l.role === H.Developer,
                p = i.author.role === H.System || i.author.role === H.Developer || i.metadata ? .is_user_system_message === !0;
            d && !p && (l.role = i.author.role);
            const h = Rl(i);
            h && (l.gizmoId = h)
        } else r.push({
            role: i.author.role,
            recipient: i.recipient,
            messages: [{
                nodeId: s,
                parentId: a,
                message: i,
                ...c
            }],
            isModelEditableContextMessage: Rn(i) === _o.ModelEditableContext,
            gizmoId: Rl(i),
            ...n(o)
        })
    }
    return r
}
class it {#
    e;#
    t;
    constructor(t) {
        this.#e = t ? ? it.createTree();
        const n = Object.values(this.#e).find(r => r.message.author.role === H.Root);
        this.#t = n ? .id ? ? "root"
    }
    static createTree() {
        return {
            root: {
                id: "root",
                children: [],
                parentId: "",
                message: it.createRootMessage()
            }
        }
    }
    static createRootMessage() {
        return {
            id: sO("aaa1"),
            author: {
                role: H.Root
            },
            content: {
                content_type: le.Text,
                parts: []
            }
        }
    }
    static getRequestIdFromConversationTurn(t) {
        for (let n = t.messages.length - 1; n >= 0; n--) {
            const r = t.messages[n];
            if (r.nodeId.startsWith(yo)) return r.nodeId
        }
        for (const n of t.variantIds)
            if (n.startsWith(yo)) return n;
        return t.messages[0].nodeId
    }
    get hasReceivedServerCompletion() {
        const t = this.findFirst(o => vo(o.message) || o.message.author.role === H.System && o.message.metadata ? .upload_filename != null);
        if (!t) return !1;
        const n = t.children[0];
        return n == null ? !0 : this.getNodeByIdOrMessageId(n) ? .children.length !== 0
    }
    messageIdToNodeId(t) {
        return this.messageIdToExistingNodeId(t) ? ? t
    }
    messageIdToExistingNodeId(t) {
        if (this.#e[t] != null) return t;
        for (const n of Object.values(this.#e))
            if (n.message ? .id === t) return n.id;
        if (t === "root") return this.#t
    }
    containsNodeOrMessageId(t) {
        return this.messageIdToExistingNodeId(t) != null
    }
    getNodeByIdOrMessageId(t) {
        const n = this.getNodeIfExists(t);
        if (n) return n;
        throw new Error(`getNodeByIdOrMessageId - no node found by id: ${t}`)
    }
    getNodeIfExists(t) {
        const n = this.messageIdToExistingNodeId(t);
        if (n) return this.#e[n]
    }
    countMessagesByAuthor(t) {
        return Object.values(this.#e).filter(n => n.message.author.role === t).length
    }
    findNode(t, n, r = this.#t) {
        const o = this.getNodeIfExists(r);
        let s = this.getNodeIfExists(n);
        for (; o && s && s !== o;) {
            if (t(s)) return s;
            s = this.getNodeIfExists(s.parentId)
        }
    }
    findFirst(t) {
        let n = this.getNodeByIdOrMessageId(this.#t);
        for (; n && n.children.length === 1;)
            if (n = this.getNodeByIdOrMessageId(n.children[0]), t(n)) return n
    }
    getMessage(t) {
        return this.getNodeByIdOrMessageId(t).message
    }
    getMessageId(t) {
        return this.getNodeByIdOrMessageId(t).message.id
    }
    getMetadata(t) {
        return this.getNodeByIdOrMessageId(t).metadata
    }
    getLeafFromNode(t) {
        let n = this.getNodeByIdOrMessageId(t);
        for (; n.children.length > 0;) n = this.getNodeByIdOrMessageId(n.children[0]);
        return n
    }
    getParent(t) {
        const n = this.getNodeByIdOrMessageId(t).parentId;
        return this.getNodeByIdOrMessageId(n)
    }
    getParentId(t) {
        return this.getParent(t) ? .id || "root"
    }
    getBranchFromLeaf(t) {
        let n = [],
            r = this.getNodeByIdOrMessageId(t);
        for (; r != null;) {
            if (n.includes(r)) {
                M.addError(`Infinite loop detected in getBranchFromLeaf. Branch already contains node ${r?.id}. Parent id: ${r?.parentId}.`, {
                    branch: n
                });
                break
            }
            if (n.push(r), r.message.author.role === H.Root) break;
            r = this.getNodeByIdOrMessageId(r.parentId)
        }
        return n = n.reverse(), n
    }
    getChildrenFromNode(t) {
        const n = this.getNodeByIdOrMessageId(t);
        return n == null ? [] : Array.from(n.children).map(r => this.getNodeByIdOrMessageId(r))
    }
    isMessageIncomplete(t) {
        const n = this.getMessage(t);
        return q2(n)
    }
    createNode(t, n, r, o) {
        const s = this.messageIdToNodeId(o ? ? n.id),
            a = this.getNodeByIdOrMessageId(t);
        if (s === a.id) throw new Error(`createNode: parent.id and node.id cannot be the same: ${s}`);
        const i = {
            id: s,
            children: [],
            parentId: a.id,
            message: n
        };
        return r != null && (i.metadata = r), i
    }
    addMessageNode(t, n, r, o) {
        const s = this.createNode(t, n, r, o);
        return this.#e = At(this.#e, a => {
            a[s.id] = s;
            const i = a[s.parentId];
            i.children.includes(s.id) || i.children.push(s.id)
        }), s.id
    }
    prependNode(t, n, r) {
        const o = this.getNodeByIdOrMessageId(t),
            s = this.createNode(o.parentId, n, r);
        s.children = [o.id], this.#e = At(this.#e, a => {
            a[s.id] = s;
            const i = a[s.parentId];
            i.children = i.children.filter(c => c !== o.id), i.children.includes(s.id) || i.children.push(s.id), a[o.id].parentId = s.id
        })
    }
    deleteNode(t) {
        const n = this.getNodeByIdOrMessageId(t);
        this.#e = At(this.#e, r => {
            const o = n.parentId,
                s = n.children;
            for (const i of s) {
                const c = r[this.messageIdToNodeId(i)];
                c.parentId = o
            }
            const a = r[this.messageIdToNodeId(o)];
            if (a == null) {
                console.warn(`Cannot deleteNode with nodeId: ${t} - parent not found. Either this is root or in an orphaned branch`);
                return
            }
            a.children = a.children.flatMap(i => this.messageIdToNodeId(i) === this.messageIdToNodeId(n.id) ? s : [i]), delete r[n.id]
        })
    }
    clearNodeMessageParts(t) {
        this.#e = At(this.#e, n => {
            const r = n[this.messageIdToNodeId(t)];
            r ? .message && "parts" in r.message.content && (r.message.content.parts = [])
        })
    }
    updateNodeMetadata(t, n) {
        this.#e = At(this.#e, r => {
            const o = r[this.messageIdToNodeId(t)];
            o && (o.metadata = { ...o ? .metadata ? ? {},
                ...n
            })
        })
    }
    updateNodeMessage(t, n) {
        this.#e = At(this.#e, r => {
            const o = this.messageIdToNodeId(t),
                s = r[o].message;
            if (s.metadata ? .finish_details != null) try {
                r[o].message = { ...n,
                    metadata: { ...n.metadata,
                        finish_details: s.metadata.finish_details
                    }
                }, M.addAction("Race condition updating message, prevented finish_details from being overwritten");
                return
            } catch (a) {
                M.addError(`Error updating finish details: ${a}`)
            }
            r[o].message = n
        })
    }
    updateNodeMessageMetadata(t, n) {
        this.#e = At(this.#e, r => {
            const o = r[this.messageIdToNodeId(t)];
            o.message.metadata = { ...o.message.metadata,
                ...n
            }
        })
    }
    getTextFromNode(t) {
        return Ll(this.getMessage(t))
    }
    getHasErrorFromNode(t) {
        const n = this.getNodeByIdOrMessageId(t);
        return n ? .metadata ? .errType === "danger" || n ? .metadata ? .errType === "warning"
    }
    getTextFromThread(t) {
        return this.getBranchFromLeaf(t).filter(r => ![H.Root, H.System, H.Developer].includes(r.message.author.role)).map(r => Ll(r.message)).join(`

`)
    }
    getConversationTurns(t, n) {
        return aO(this.getBranchFromLeaf(t), n, r => this.getTurnVariants(r))
    }
    getTurnVariants(t) {
        let n = t.parentId ? this.getNodeByIdOrMessageId(t.parentId) : void 0;
        for (; n && Co(n.message) && n.children.length === 1 && n.parentId;) n = this.getNodeByIdOrMessageId(n.parentId);
        const r = l => {
                let d = l;
                for (; Co(d.message) && d.children.length === 1;) d = this.getNodeByIdOrMessageId(d.children[0]);
                return d
            },
            o = (n ? .children ? ? [t.id]).map(l => r(this.getNodeByIdOrMessageId(l))).filter(l => l.message.author.role !== H.System).map(l => l.id),
            s = n ? .message.metadata,
            a = s ? .paragen_variants_info,
            i = s ? .paragen_variant_choice,
            c = n ? .metadata ? .variantsInStreamInfo ? ? (i ? void 0 : a);
        return {
            variantIds: o,
            variantsInStreamInfo: c
        }
    }
    getLastValidNode(t) {
        let n = this.getNodeByIdOrMessageId(t);
        for (; n != null && !(n == null || n.metadata ? .err == null);) n = this.getNodeByIdOrMessageId(n.parentId);
        return n
    }
    getParentPromptNode(t) {
        let n = this.getNodeByIdOrMessageId(t);
        for (; n != null && !(n == null || [H.User, H.Root].includes(n.message.author.role) || n.message.author.metadata ? .is_system_initiated_conversation);) n = this.getNodeByIdOrMessageId(n.parentId);
        return n
    }
    prettyPrint(t, n = 0) {
        t ? ? = this.#t;
        let r = `${"	".repeat(n)}->${t} - ${this.getTextFromNode(t).replaceAll(`
`,"\\n")}
`;
        const o = this.getChildrenFromNode(t);
        for (const s of o) r += this.prettyPrint(s.id, n + 1);
        return r
    }
}

function iO(e, t, n) {
    return !e || t.metadata ? .is_indepth_feedback ? !1 : e.role === t.author.role || e.isModelEditableContextMessage && (t.author.role === H.Assistant || t.author.role === H.System) || e.role !== H.User && t.author.role === H.Tool || e.role === H.Tool && t.author.role === H.Assistant ? !0 : sp(e.messages) ? .message ? .author.metadata ? .is_system_initiated_conversation ? !1 : (e.role === H.System || e.role === H.Developer) && !vo(t) || e.role === H.Tool && (t.author.role === H.System || t.author.role === H.Developer)
}
var cO = (e => (e.ContentOrTos = "content_or_tos", e.ContentPolicy = "content_policy", e.ModelIncompatibility = "model_incompatibility", e.ContentRegurgitation = "content_regurgitation", e))(cO || {});
const lO = {
        errType: "warning",
        errCode: "content_policy"
    },
    uO = {
        errType: "danger",
        errCode: "model_incompatibility"
    },
    dO = {
        err: "Contents may violate our content policy",
        errType: "danger",
        errCode: "content_policy"
    },
    fO = (e, t) => !e.length || t ? null : {
        disclaimers: e
    },
    pO = () => ({
        lastModelUsed: null,
        createTime: new Date,
        isArchived: !1
    });

function hO(e) {
    const t = Object.values(e.mapping).find(i => i.parent === null) ? .id,
        n = new Set,
        r = new Set,
        o = new Set,
        s = new Map;
    (e.moderation_results ? ? []).forEach(i => {
        s.set(i.message_id, i), i.blocked ? r.add(i.message_id) : i.flagged && n.add(i.message_id), i.disclaimers ? .length && !i.blocked && o.add(i.message_id)
    });
    const a = Object.keys(e.mapping).reduce((i, c) => {
        const {
            parent: l,
            children: d,
            ...p
        } = e.mapping[c], h = e.mapping[c].message ? ? it.createRootMessage(), g = {}, _ = s.get(h.id);
        let m = !1;
        if (r.has(h.id)) {
            const v = _ ? .metadata ? .model_incompatibility;
            Object.assign(g, v ? uO : dO), m = !0
        } else n.has(h.id) && Object.assign(g, lO);
        if (o.has(h.id) && h.author.role !== H.User) {
            const v = s.get(h.id);
            v ? .disclaimers ? .length && Object.assign(g, fO(v.disclaimers, m))
        }
        return i[c] = { ...p,
            message: h,
            children: d ? ? [],
            parentId: l || "",
            ...g && {
                metadata: g
            }
        }, i
    }, {});
    return {
        rootId: t,
        mapping: a,
        initialCurrentLeafId: e.current_node
    }
}
const gO = {
        BASE_URL: "https://cdn.oaistatic.com/",
        DEV: !1,
        MODE: "production",
        PROD: !0,
        SSR: !1,
        VITE_APP_URL: "https://chatgpt.com",
        VITE_CHAT_URL_PREFIX: "https://chatgpt.com/share/",
        VITE_CLIENT_EVENTS_SERVICE_URL: "chatgpt.com/ces",
        VITE_CONTINUE_SHARED_CHAT_URL_PREFIX: "https://chatgpt.com/share/",
        VITE_CONTINUE_SHARED_CHAT_URL_SUFFIX: "/continue",
        VITE_GIZMO_OAUTH_CALLBACK_URL: "https://chat.openai.com",
        VITE_INVITE_URL_PREFIX: "https://chatgpt.com/public-api/referral",
        VITE_LOGIN_WEB_URL: "https://auth.openai.com",
        VITE_OIW216Z_SERVICE_URL: "https://sora.com",
        VITE_PUBLIC_API_URL: "https://chatgpt.com/public-api",
        VITE_SHARED_ALT_API_URL: "https://chatgpt.com/backend-alt",
        VITE_SHARED_ANON_API_URL: "https://chatgpt.com/backend-anon",
        VITE_SHARED_API_URL: "https://chatgpt.com/backend-api",
        VITE_SNC_API_URL: "https://chatgpt.com/backend/se",
        VITE_STRIPE_PUBLISHABLE_KEY: "pk_live_51HOrSwC6h1nxGoI3lTAgRjYVrz4dU3fVOabyCcKR3pbEJguCVAlqCxdxCUvoRh1XWwRacViovU3kLKvpkjh7IqkW00iXQsjo3n",
        VITE_VOICE_FRONTDOOR_API_URL: "https://chatgpt.com/voice",
        VITE_VZA493Q_SERVICE_URL: "https://operator.chatgpt.com",
        VITE_WEB_PUSH_PUBLIC_KEY: "BElP4rBIs6aV_3Ic7Fl2rBw_a27isvPyMl_W4WwtlqsiehOYFYnwE21byf9bvFGEwWL8-k-zjZfGCG8HHKGW7OQ"
    },
    mO = e => (t, n, r) => {
        const o = r.subscribe;
        return r.subscribe = (a, i, c) => {
            let l = a;
            if (i) {
                const d = c ? .equalityFn || Object.is;
                let p = a(r.getState());
                l = h => {
                    const g = a(h);
                    if (!d(p, g)) {
                        const _ = p;
                        i(p = g, _)
                    }
                }, c ? .fireImmediately && i(p, p)
            }
            return o(l)
        }, e(t, n, r)
    },
    _O = mO;

function vO(e, t) {
    let n;
    try {
        n = e()
    } catch {
        return
    }
    return {
        getItem: o => {
            var s;
            const a = c => c === null ? null : JSON.parse(c, void 0),
                i = (s = n.getItem(o)) != null ? s : null;
            return i instanceof Promise ? i.then(a) : a(i)
        },
        setItem: (o, s) => n.setItem(o, JSON.stringify(s, void 0)),
        removeItem: o => n.removeItem(o)
    }
}
const fr = e => t => {
        try {
            const n = e(t);
            return n instanceof Promise ? n : {
                then(r) {
                    return fr(r)(n)
                },
                catch (r) {
                    return this
                }
            }
        } catch (n) {
            return {
                then(r) {
                    return this
                },
                catch (r) {
                    return fr(r)(n)
                }
            }
        }
    },
    CO = (e, t) => (n, r, o) => {
        let s = {
                getStorage: () => localStorage,
                serialize: JSON.stringify,
                deserialize: JSON.parse,
                partialize: v => v,
                version: 0,
                merge: (v, C) => ({ ...C,
                    ...v
                }),
                ...t
            },
            a = !1;
        const i = new Set,
            c = new Set;
        let l;
        try {
            l = s.getStorage()
        } catch {}
        if (!l) return e((...v) => {
            console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`), n(...v)
        }, r, o);
        const d = fr(s.serialize),
            p = () => {
                const v = s.partialize({ ...r()
                });
                let C;
                const y = d({
                    state: v,
                    version: s.version
                }).then(S => l.setItem(s.name, S)).catch(S => {
                    C = S
                });
                if (C) throw C;
                return y
            },
            h = o.setState;
        o.setState = (v, C) => {
            h(v, C), p()
        };
        const g = e((...v) => {
            n(...v), p()
        }, r, o);
        let _;
        const m = () => {
            var v;
            if (!l) return;
            a = !1, i.forEach(y => y(r()));
            const C = ((v = s.onRehydrateStorage) == null ? void 0 : v.call(s, r())) || void 0;
            return fr(l.getItem.bind(l))(s.name).then(y => {
                if (y) return s.deserialize(y)
            }).then(y => {
                if (y)
                    if (typeof y.version == "number" && y.version !== s.version) {
                        if (s.migrate) return s.migrate(y.state, y.version);
                        console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                    } else return y.state
            }).then(y => {
                var S;
                return _ = s.merge(y, (S = r()) != null ? S : g), n(_, !0), p()
            }).then(() => {
                C ? .(_, void 0), a = !0, c.forEach(y => y(_))
            }).catch(y => {
                C ? .(void 0, y)
            })
        };
        return o.persist = {
            setOptions: v => {
                s = { ...s,
                    ...v
                }, v.getStorage && (l = v.getStorage())
            },
            clearStorage: () => {
                l ? .removeItem(s.name)
            },
            getOptions: () => s,
            rehydrate: () => m(),
            hasHydrated: () => a,
            onHydrate: v => (i.add(v), () => {
                i.delete(v)
            }),
            onFinishHydration: v => (c.add(v), () => {
                c.delete(v)
            })
        }, m(), _ || g
    },
    yO = (e, t) => (n, r, o) => {
        let s = {
                storage: vO(() => localStorage),
                partialize: m => m,
                version: 0,
                merge: (m, v) => ({ ...v,
                    ...m
                }),
                ...t
            },
            a = !1;
        const i = new Set,
            c = new Set;
        let l = s.storage;
        if (!l) return e((...m) => {
            console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`), n(...m)
        }, r, o);
        const d = () => {
                const m = s.partialize({ ...r()
                });
                return l.setItem(s.name, {
                    state: m,
                    version: s.version
                })
            },
            p = o.setState;
        o.setState = (m, v) => {
            p(m, v), d()
        };
        const h = e((...m) => {
            n(...m), d()
        }, r, o);
        o.getInitialState = () => h;
        let g;
        const _ = () => {
            var m, v;
            if (!l) return;
            a = !1, i.forEach(y => {
                var S;
                return y((S = r()) != null ? S : h)
            });
            const C = ((v = s.onRehydrateStorage) == null ? void 0 : v.call(s, (m = r()) != null ? m : h)) || void 0;
            return fr(l.getItem.bind(l))(s.name).then(y => {
                if (y)
                    if (typeof y.version == "number" && y.version !== s.version) {
                        if (s.migrate) return s.migrate(y.state, y.version);
                        console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                    } else return y.state
            }).then(y => {
                var S;
                return g = s.merge(y, (S = r()) != null ? S : h), n(g, !0), d()
            }).then(() => {
                C ? .(g, void 0), g = r(), a = !0, c.forEach(y => y(g))
            }).catch(y => {
                C ? .(void 0, y)
            })
        };
        return o.persist = {
            setOptions: m => {
                s = { ...s,
                    ...m
                }, m.storage && (l = m.storage)
            },
            clearStorage: () => {
                l ? .removeItem(s.name)
            },
            getOptions: () => s,
            rehydrate: () => _(),
            hasHydrated: () => a,
            onHydrate: m => (i.add(m), () => {
                i.delete(m)
            }),
            onFinishHydration: m => (c.add(m), () => {
                c.delete(m)
            })
        }, s.skipHydration || _(), g || h
    },
    bO = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? ((gO ? "production" : void 0) !== "production" && console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."), CO(e, t)) : yO(e, t),
    v8 = bO;

function SO(e, t) {
    if (Object.is(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    if (e instanceof Map && t instanceof Map) {
        if (e.size !== t.size) return !1;
        for (const [r, o] of e)
            if (!Object.is(o, t.get(r))) return !1;
        return !0
    }
    if (e instanceof Set && t instanceof Set) {
        if (e.size !== t.size) return !1;
        for (const r of e)
            if (!t.has(r)) return !1;
        return !0
    }
    const n = Object.keys(e);
    if (n.length !== Object.keys(t).length) return !1;
    for (const r of n)
        if (!Object.prototype.hasOwnProperty.call(t, r) || !Object.is(e[r], t[r])) return !1;
    return !0
}
const {
    useRef: wO
} = ne;

function TO(e) {
    const t = wO();
    return n => {
        const r = e(n);
        return SO(t.current, r) ? t.current : t.current = r
    }
}

function C8() {
    return `${Wo}${nt()}`
}
let AO = 0;

function y8() {
    return AO++
}

function ap(e) {
    return e.startsWith(Wo)
}
const IO = () => new it,
    kO = () => Object.freeze({
        lastModelUsed: null,
        createTime: new Date
    });
var EO = (e => (e.NewChat = "NewChat", e.Server = "Server", e.User = "User", e.Generated = "Generated", e.Unknown = "Unknown", e))(EO || {});
const Gs = {};

function xO(e) {
    return e
}
const RO = xO,
    on = $t(RO(si(() => ({
        threads: {},
        clientNewThreadIdToServerIdMapping: {},
        threadRetainCounts: {}
    })))),
    je = on.getState,
    zt = on.setState;

function Ci(e, t = je()) {
    return ap(e) ? t.clientNewThreadIdToServerIdMapping[e] : e
}
const b8 = e => on(t => e ? Ci(e, t) : void 0);

function S8(e, t = je()) {
    for (const [n, r] of Object.entries(t.clientNewThreadIdToServerIdMapping))
        if (r === e) return n
}

function Xr(e, t = je()) {
    return t.clientNewThreadIdToServerIdMapping[e] ? ? e
}

function sn(e, t = je()) {
    const n = Xr(e, t);
    return t.threads[n]
}

function yi(e, t) {
    return on(TO(n => t(e && sn(e, n))))
}

function ip(e, t) {
    zt(n => {
        const r = sn(e, n);
        r && t(r)
    })
}
const Y = {
        getGizmoId: e => e ? .mode.kind === ir.GizmoInteraction || e ? .mode.kind === ir.GizmoTest ? e.mode.gizmo_id : void 0,
        getTree: e => e ? .tree ? ? IO(),
        getBranch: (e, t = Y.getCurrentLeafId(e)) => e ? .tree.getBranchFromLeaf(t) ? ? [],
        getThreadData: e => e ? .initialThreadData ? ? kO(),
        getThreadTitleSource: e => e ? .titleSource ? ? "Unknown",
        getThreadCreateTime: e => e ? .initialThreadData ? .createTime,
        getIsNewConversation: e => Y.getCurrentLeafId(e) === "root",
        getCurrentLeafId: e => e ? .currentLeafId ? ? "root",
        getCurrentNode: e => Y.getNode(e, Y.getCurrentLeafId(e)),
        getNode: (e, t) => Y.getTree(e).getNodeByIdOrMessageId(t),
        getParentNode: (e, t) => Y.getTree(e).getParent(t),
        getParentPromptNode: (e, t = Y.getCurrentLeafId(e)) => Y.getTree(e).getParentPromptNode(t),
        getLastValidNode: (e, t = Y.getCurrentLeafId(e)) => Y.getTree(e).getLastValidNode(t),
        isThreadUrlSafe: (e, t) => e ? .safeUrls.includes(t) ? ? !1,
        getTurnContentReferences: (e, t) => np(e ? .conversationTurns[t] ? .messages.flatMap(n => LO(Zr(n.message))) ? ? []),
        getMessage: (e, t = Y.getCurrentLeafId(e)) => e ? .tree.getMessage(t),
        getMessageId: (e, t = Y.getCurrentLeafId(e)) => Y.getTree(e).getMessageId(t),
        isArchived: e => e ? .initialThreadData ? .isArchived ? ? !1,
        getUpdateTime: e => e ? .update_time ? ? (e ? .initialThreadData.createTime ? e.initialThreadData.createTime.getTime() / 1e3 : null),
        hasUserMessage: e => Y.findNode(e, t => vo(t.message)) != null,
        isLastActorMessage: (e, t) => Y.getTree(e).findNode(n => n.message.author.role === H.Assistant || n.message.author.role === H.User, Y.getCurrentLeafId(e), t) == null,
        findNode: (e, t, n = Y.getCurrentLeafId(e)) => Y.getTree(e).findNode(t, n),
        isMessageTurnEnded: (e, t = Y.getCurrentLeafId(e)) => e ? .tree.getNodeByIdOrMessageId(t).message.end_turn,
        getConversationTurns: (e, t = Y.getCurrentLeafId(e)) => e == null ? [] : e.tree.messageIdToNodeId(e.currentLeafId) === e.tree.messageIdToNodeId(t) ? Zr(e.conversationTurns) : Zr(e.tree.getConversationTurns(t, !1)),
        hasUserContextPrompt: e => Y.getTree(e).findFirst(t => t.message.metadata ? .is_user_system_message != null) != null || e ? .sharedConversationMetadata ? .hasUserEditableContextFlag != null,
        hasModelEditableContext: e => Y.findNode(e, t => t.message.content.content_type === "model_editable_context") != null,
        getRequestId: (e, t = Y.getCurrentLeafId(e)) => {
            const n = Y.getConversationTurns(e, t),
                r = n ? .length ? ? 0,
                o = n ? .[r - 1] ? ? null;
            if (r === 0) return t;
            const s = it.getRequestIdFromConversationTurn(o);
            if (s.startsWith(yo)) return s;
            if (o.variantIds ? .length > 1) {
                const a = o.messages.map(c => c.nodeId).find(c => o.variantIds.indexOf(c) !== -1);
                if (a == null) return s;
                const i = (o ? .variantIds ? .indexOf(a) ? ? 0) - 1;
                if (i >= 0) return Y.getRequestId(e, o ? .variantIds[i])
            }
            return s
        },
        getLastMessageSystemHints: e => Y.findNode(e, n => vo(n.message)) ? .message.metadata ? .system_hints ? ? []
    },
    Pl = {
        updateTree(e, t) {
            const n = t(e.tree, Y.getCurrentLeafId(e));
            n && (e.currentLeafId = n), cp(e)
        },
        setCurrentBranch(e, t) {
            Pl.updateTree(e, n => n.getLeafFromNode(t).id)
        },
        appendMessage(e, t, n, r) {
            Pl.updateTree(e, (o, s) => o.addMessageNode(r ? ? s, t, n))
        }
    };

function cp(e) {
    const t = e.conversationTurns;
    e.conversationTurns = lp(e.tree.getConversationTurns(Y.getCurrentLeafId(e), !1), t)
}

function OO(e, t) {
    const n = sn(e);
    n != null && (t(n.tree), ip(e, cp))
}
const MO = {
        initThread: (e, t, n = null) => {
            const r = Xr(e);
            if (je().threads[r] == null) {
                const o = pO();
                zt(s => {
                    s.threads[r] = {
                        initialThreadData: o,
                        mode: t,
                        modelId: n,
                        tree: new it(it.createTree()),
                        title: null,
                        titleSource: "NewChat",
                        currentLeafId: "root",
                        conversationTurns: [],
                        safeUrls: [],
                        isLoading: !ap(r),
                        docsReferencedByURL: {},
                        conversationOrigin: null,
                        disabledToolIds: null
                    }
                })
            }
        },
        setServerIdForNewThread: (e, t) => {
            je().clientNewThreadIdToServerIdMapping[e] === void 0 && zt(n => {
                n.threads[t] = n.threads[e], delete n.threads[e], n.clientNewThreadIdToServerIdMapping[e] = t
            })
        },
        initThreadFromServerData: (e, t, n = !1, r = void 0, o = !1) => {
            const s = Xr(e);
            if (!o && (je().threads[s] == null && !n || je().threads[s] ? .isLoading === !1)) return;
            const a = hO(t),
                i = a.mapping ? ? it.createTree(),
                c = new it(i),
                l = a.initialCurrentLeafId ? ? a.rootId ? ? "root",
                d = {
                    lastModelUsed: t.default_model_slug ? ? c.findNode(h => h.message.metadata ? .model_slug != null, l) ? .message.metadata ? .model_slug ? ? null,
                    createTime: "create_time" in t ? new Date(t.create_time * 1e3) : void 0,
                    isArchived: t.is_archived ? ? !1
                },
                p = "has_user_editable_context" in t ? {
                    hasUserEditableContextFlag: t.has_user_editable_context,
                    authorName: t.author_name,
                    model: "model" in t && t.model != null ? zf(t.model) : void 0
                } : void 0;
            zt(h => {
                const g = h.threads[s];
                h.threads[s] = {
                    modelId: g ? .modelId ? ? null,
                    initialThreadData: d,
                    mode: t.gizmo_id != null ? {
                        kind: ir.GizmoInteraction,
                        gizmo_id: t.gizmo_id
                    } : {
                        kind: ir.PrimaryAssistant
                    },
                    sharedConversationMetadata: p,
                    title: t.title ? ? null,
                    titleSource: "Server",
                    tree: c,
                    currentLeafId: l,
                    isLoading: !1,
                    continuingFromSharedConversationId: r,
                    safeUrls: t.safe_urls ? ? [],
                    conversationTurns: c.getConversationTurns(l, !1),
                    docsReferencedByURL: {},
                    conversationOrigin: t.conversation_origin ? ? null,
                    async_status: t.async_status ? ? null,
                    disabledToolIds: t.disabled_tool_ids ? ? [],
                    update_time: t.update_time ? ? null,
                    scrollToMessageId: g ? .scrollToMessageId
                }
            }), kl.publish({
                kind: "createConversation",
                clientThreadId: e
            })
        },
        getThreadCurrentLeafId: e => Y.getCurrentLeafId(sn(e)),
        setTitle: (e, t, n) => {
            ip(e, r => {
                r.title = t, r.titleSource = n
            }), kl.publish({
                kind: "updateThreadTitle",
                conversationId: Xr(e)
            })
        },
        updateTree: OO,
        deleteThread: e => {
            zt(t => {
                delete t.threads[e], delete t.clientNewThreadIdToServerIdMapping[e]
            })
        },
        retainThread: e => {
            zt(t => {
                t.threadRetainCounts[e] = (t.threadRetainCounts[e] ? ? 0) + 1
            }), clearTimeout(Gs[e])
        },
        releaseThread: e => {
            je().threads[e] != null && (zt(n => {
                n.threadRetainCounts[e] = Math.max((n.threadRetainCounts[e] ? ? 0) - 1, 0)
            }), !(je().threadRetainCounts[e] > 0) && (clearTimeout(Gs[e]), Gs[e] = setTimeout(() => {
                je().threads[e] != null && (je().threadRetainCounts[e] > 0 || MO.deleteThread(e))
            }, 3e4)))
        }
    },
    w8 = e => {
        const t = C2();
        return yi(e, n => n ? Y.getGizmoId(n) : t)
    },
    T8 = e => yi(e, Y.getCurrentLeafId);

function lp(e, t) {
    let n;
    t.length !== e.length && (n = t.slice(0, e.length));
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        Qo(o, t[r]) || (n || (n = t.slice()), n[r] = o)
    }
    return n ? ? Zr(t)
}

function up(e, t) {
    return qd(on, e, t)
}
const A8 = (e, t) => {
        const n = u.useRef([]);
        return on(r => {
            const o = lp(Y.getConversationTurns(sn(e, r), t), n.current);
            return n.current = o, o
        })
    },
    I8 = (e, t, n) => up(r => Y.getConversationTurns(sn(e, r), n)[t] ? ? null, Qo),
    k8 = e => up(t => {
        const n = Y.getConversationTurns(sn(e, t));
        return n.length > 0 ? n[n.length - 1] : null
    }, Qo),
    E8 = () => u.useContext(M2) != null,
    x8 = () => u.useContext(L2) != null;

function R8({
    clientThreadId: e
}) {
    const [t, n, r] = yi(e, a => [Y.getRequestId(a), a ? .async_status === Pu.STREAMING, Y.isMessageTurnEnded(a)]);
    return (v2(t) || n) && !r
}
const O8 = e => e ? .metadata ? .search_result_groups ? ? [],
    LO = e => e ? .metadata ? .content_references ? ? [],
    M8 = e => !e.startsWith(Wo) && !e.startsWith(yo),
    bo = e => {
        const t = {
            turn_index: e.turnIndex ? .toString(),
            thread_id: e.threadId,
            conversation_id: e.clientThreadId ? Ci(e.clientThreadId) : void 0,
            message_id: e ? .messageId
        };
        return Object.fromEntries(Object.entries(t).filter(([n, r]) => r !== void 0))
    },
    PO = "sourcesSidebar",
    DO = "initialPageLoad";

function Dl(e) {
    return e.type === "summarizer"
}

function eo(e) {
    return e.type === "searchSources"
}

function $l(e) {
    return e.type === "caterpillar"
}

function Vr(e) {
    return e.type === "retrievalResults"
}
class Jt extends Zo()(t => t) {
    static getIsOpen = ({
        isOpen: t
    }) => t;
    static getActiveSidebar = ({
        activeSidebar: t
    }) => t;
    openThreadSidebar = t => {
        const n = () => {
            this.setState({
                isOpen: !0,
                activeSidebar: t
            })
        };
        if (Vr(t)) {
            const {
                clientThreadId: r,
                turnIndex: o
            } = t;
            me.logEventWithStatsig(te.fileSourcesSidebarShown, "file_sources_sidebar_shown", { ...bo({
                    turnIndex: o,
                    clientThreadId: r
                })
            })
        }
        n()
    };
    updateThreadSidebar = t => {
        this.setState({
            activeSidebar: t
        })
    };
    toggleThreadSidebar = (t, n) => {
        const r = this.getState(),
            o = r.activeSidebar;
        let s;
        eo(t) ? (s = r.isOpen && o && eo(o) && o.messageId === t.messageId, s && o && eo(o) && o.scrollToHeader !== t.scrollToHeader && (n ? .(), this.updateThreadSidebar({ ...t,
            shouldAnimateScroll: !0
        }))) : $l(t) ? s = r.isOpen && o && $l(o) && o.caterpillarId === t.caterpillarId && o.initialTab === t.initialTab : Dl(t) ? s = r.isOpen && o && Dl(o) && o.clientThreadId === t.clientThreadId && o.turnIndex === t.turnIndex : Vr(t) && (s = r.isOpen && o && Vr(o) && o.clientThreadId === t.clientThreadId && o.turnIndex === t.turnIndex && o.messageId === t.messageId), s ? this.closeThreadSidebar() : (n ? .(), this.openThreadSidebar(t))
    };
    closeThreadSidebar = () => {
        const t = () => {
                this.setState({
                    isOpen: !1,
                    activeSidebar: void 0
                })
            },
            n = this.getState().activeSidebar;
        if (n && Vr(n)) {
            const {
                clientThreadId: r,
                turnIndex: o
            } = n;
            me.logEvent(te.fileSourcesSidebarClosed, { ...bo({
                    clientThreadId: r,
                    turnIndex: o
                })
            })
        }
        t()
    }
}

function $O(e) {
    const {
        isOpen: t
    } = e;
    return JSON.stringify({
        isOpen: t
    })
}

function UO({
    children: e
}) {
    const [t] = u.useState(() => {
        let n;
        return n = {
            isOpen: new URLSearchParams(window.location.search).get(PO) === "open",
            activeSidebar: {
                type: "searchSources",
                turnIndex: 0,
                messageId: "",
                clientThreadId: DO
            }
        }, new Jt(n)
    });
    return u.useEffect(() => t.subscribe((n, r) => {
        if (!(n.isOpen !== r.isOpen)) return;
        const s = $O(n);
        X.setCookie(K.ThreadSidebarState, s, {
            maxAge: 2 ** 30
        })
    }), [t]), f.jsx(Jt.Provider, {
        store: t,
        children: e
    })
}
const L8 = () => {
    const e = Jt.useStore(),
        t = u.useCallback(o => {
            if (eo(o)) {
                const {
                    clientThreadId: s,
                    turnIndex: a,
                    messageId: i
                } = o;
                me.logEventWithStatsig(te.searchLinkSidebarShown, "search_links_sidebar_shown", bo({
                    turnIndex: a,
                    clientThreadId: s,
                    messageId: i
                }))
            }
            e.openThreadSidebar(o)
        }, [e]),
        n = u.useCallback((o, s) => e.toggleThreadSidebar(o, s), [e]),
        r = u.useCallback(o => {
            const {
                clientThreadId: s,
                messageId: a
            } = o;
            s && me.logEventWithStatsig(te.searchLinkSidebarClosed, "search_links_sidebar_closed", bo({
                clientThreadId: s,
                messageId: a
            })), e.closeThreadSidebar()
        }, [e]);
    return {
        openThreadSidebar: t,
        toggleThreadSidebar: n,
        closeThreadSidebar: r
    }
};

function BO(e, t) {
    return e.type === t
}

function P8() {
    return Jt.useState(Jt.getIsOpen)
}

function NO() {
    return Jt.useState(Jt.getActiveSidebar)
}

function D8(e) {
    const t = NO();
    if (e && t && BO(t, e)) return t
}
const dp = {
        shift: !1,
        ctrl: !1,
        meta: !1
    },
    wa = $t(() => dp);
wa.getState;
const FO = () => (u.useEffect(() => {
    const e = ({
            shiftKey: r,
            metaKey: o,
            ctrlKey: s
        }) => {
            wa.setState({
                shift: r,
                meta: o,
                ctrl: s
            })
        },
        t = () => {
            wa.setState(dp)
        },
        n = {
            passive: !0,
            capture: !0
        };
    return document.addEventListener("keydown", e, n), document.addEventListener("keyup", e, n), document.addEventListener("visibilitychange", t, n), () => {
        document.removeEventListener("keydown", e, n), document.removeEventListener("keyup", e, n), document.removeEventListener("visibilitychange", t, n)
    }
}, []), null);

function jO(e, t) {
    for (const [n, r] of Object.entries(t)) e.addEventListener(n, r);
    return () => {
        for (const [n, r] of Object.entries(t)) e.removeEventListener(n, r)
    }
}

function $8(e, t) {
    for (const [n, r] of Object.entries(t)) e.on(n, r);
    return () => {
        for (const [n, r] of Object.entries(t)) e.off(n, r)
    }
}
class Ta extends Zo()(() => ({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight
})) {
    static selectWindowWidth = ({
        windowWidth: t
    }) => t;
    static selectWindowHeight = ({
        windowHeight: t
    }) => t
}

function U8(e, t) {
    const n = Ta.useStore();
    return u.useSyncExternalStore(r => n.subscribe((o, s) => {
        e(o) !== e(s) && r()
    }), () => e(n.getState()), () => t)
}

function GO({
    children: e
}) {
    const [t] = u.useState(() => new Ta);
    return u.useEffect(() => jO(window, {
        resize: () => {
            t.setState({
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight
            })
        }
    }), [t]), f.jsx(Ta.Provider, {
        store: t,
        children: e
    })
}
const VO = ["top", "right", "bottom", "left"],
    Mt = Math.min,
    De = Math.max,
    So = Math.round,
    Hr = Math.floor,
    Lt = e => ({
        x: e,
        y: e
    }),
    HO = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    WO = {
        start: "end",
        end: "start"
    };

function Aa(e, t, n) {
    return De(e, Mt(t, n))
}

function Ct(e, t) {
    return typeof e == "function" ? e(t) : e
}

function yt(e) {
    return e.split("-")[0]
}

function Wn(e) {
    return e.split("-")[1]
}

function bi(e) {
    return e === "x" ? "y" : "x"
}

function Si(e) {
    return e === "y" ? "height" : "width"
}

function zn(e) {
    return ["top", "bottom"].includes(yt(e)) ? "y" : "x"
}

function wi(e) {
    return bi(zn(e))
}

function zO(e, t, n) {
    n === void 0 && (n = !1);
    const r = Wn(e),
        o = wi(e),
        s = Si(o);
    let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (a = wo(a)), [a, wo(a)]
}

function qO(e) {
    const t = wo(e);
    return [Ia(e), t, Ia(t)]
}

function Ia(e) {
    return e.replace(/start|end/g, t => WO[t])
}

function KO(e, t, n) {
    const r = ["left", "right"],
        o = ["right", "left"],
        s = ["top", "bottom"],
        a = ["bottom", "top"];
    switch (e) {
        case "top":
        case "bottom":
            return n ? t ? o : r : t ? r : o;
        case "left":
        case "right":
            return t ? s : a;
        default:
            return []
    }
}

function YO(e, t, n, r) {
    const o = Wn(e);
    let s = KO(yt(e), n === "start", r);
    return o && (s = s.map(a => a + "-" + o), t && (s = s.concat(s.map(Ia)))), s
}

function wo(e) {
    return e.replace(/left|right|bottom|top/g, t => HO[t])
}

function ZO(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function fp(e) {
    return typeof e != "number" ? ZO(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function To(e) {
    const {
        x: t,
        y: n,
        width: r,
        height: o
    } = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}

function Ul(e, t, n) {
    let {
        reference: r,
        floating: o
    } = e;
    const s = zn(t),
        a = wi(t),
        i = Si(a),
        c = yt(t),
        l = s === "y",
        d = r.x + r.width / 2 - o.width / 2,
        p = r.y + r.height / 2 - o.height / 2,
        h = r[i] / 2 - o[i] / 2;
    let g;
    switch (c) {
        case "top":
            g = {
                x: d,
                y: r.y - o.height
            };
            break;
        case "bottom":
            g = {
                x: d,
                y: r.y + r.height
            };
            break;
        case "right":
            g = {
                x: r.x + r.width,
                y: p
            };
            break;
        case "left":
            g = {
                x: r.x - o.width,
                y: p
            };
            break;
        default:
            g = {
                x: r.x,
                y: r.y
            }
    }
    switch (Wn(t)) {
        case "start":
            g[a] -= h * (n && l ? -1 : 1);
            break;
        case "end":
            g[a] += h * (n && l ? -1 : 1);
            break
    }
    return g
}
const QO = async (e, t, n) => {
    const {
        placement: r = "bottom",
        strategy: o = "absolute",
        middleware: s = [],
        platform: a
    } = n, i = s.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(t));
    let l = await a.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }),
        {
            x: d,
            y: p
        } = Ul(l, r, c),
        h = r,
        g = {},
        _ = 0;
    for (let m = 0; m < i.length; m++) {
        const {
            name: v,
            fn: C
        } = i[m], {
            x: y,
            y: S,
            data: w,
            reset: T
        } = await C({
            x: d,
            y: p,
            initialPlacement: r,
            placement: h,
            strategy: o,
            middlewareData: g,
            rects: l,
            platform: a,
            elements: {
                reference: e,
                floating: t
            }
        });
        d = y ? ? d, p = S ? ? p, g = { ...g,
            [v]: { ...g[v],
                ...w
            }
        }, T && _ <= 50 && (_++, typeof T == "object" && (T.placement && (h = T.placement), T.rects && (l = T.rects === !0 ? await a.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : T.rects), {
            x: d,
            y: p
        } = Ul(l, h, c)), m = -1)
    }
    return {
        x: d,
        y: p,
        placement: h,
        strategy: o,
        middlewareData: g
    }
};
async function On(e, t) {
    var n;
    t === void 0 && (t = {});
    const {
        x: r,
        y: o,
        platform: s,
        rects: a,
        elements: i,
        strategy: c
    } = e, {
        boundary: l = "clippingAncestors",
        rootBoundary: d = "viewport",
        elementContext: p = "floating",
        altBoundary: h = !1,
        padding: g = 0
    } = Ct(t, e), _ = fp(g), v = i[h ? p === "floating" ? "reference" : "floating" : p], C = To(await s.getClippingRect({
        element: (n = await (s.isElement == null ? void 0 : s.isElement(v))) == null || n ? v : v.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
        boundary: l,
        rootBoundary: d,
        strategy: c
    })), y = p === "floating" ? { ...a.floating,
        x: r,
        y: o
    } : a.reference, S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), w = await (s.isElement == null ? void 0 : s.isElement(S)) ? await (s.getScale == null ? void 0 : s.getScale(S)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, T = To(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: i,
        rect: y,
        offsetParent: S,
        strategy: c
    }) : y);
    return {
        top: (C.top - T.top + _.top) / w.y,
        bottom: (T.bottom - C.bottom + _.bottom) / w.y,
        left: (C.left - T.left + _.left) / w.x,
        right: (T.right - C.right + _.right) / w.x
    }
}
const JO = e => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const {
                x: n,
                y: r,
                placement: o,
                rects: s,
                platform: a,
                elements: i,
                middlewareData: c
            } = t, {
                element: l,
                padding: d = 0
            } = Ct(e, t) || {};
            if (l == null) return {};
            const p = fp(d),
                h = {
                    x: n,
                    y: r
                },
                g = wi(o),
                _ = Si(g),
                m = await a.getDimensions(l),
                v = g === "y",
                C = v ? "top" : "left",
                y = v ? "bottom" : "right",
                S = v ? "clientHeight" : "clientWidth",
                w = s.reference[_] + s.reference[g] - h[g] - s.floating[_],
                T = h[g] - s.reference[g],
                O = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l));
            let E = O ? O[S] : 0;
            (!E || !await (a.isElement == null ? void 0 : a.isElement(O))) && (E = i.floating[S] || s.floating[_]);
            const I = w / 2 - T / 2,
                j = E / 2 - m[_] / 2 - 1,
                F = Mt(p[C], j),
                z = Mt(p[y], j),
                q = F,
                Q = E - m[_] - z,
                B = E / 2 - m[_] / 2 + I,
                ie = Aa(q, B, Q),
                G = !c.arrow && Wn(o) != null && B !== ie && s.reference[_] / 2 - (B < q ? F : z) - m[_] / 2 < 0,
                re = G ? B < q ? B - q : B - Q : 0;
            return {
                [g]: h[g] + re,
                data: {
                    [g]: ie,
                    centerOffset: B - ie - re,
                    ...G && {
                        alignmentOffset: re
                    }
                },
                reset: G
            }
        }
    }),
    XO = function(e) {
        return e === void 0 && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: o,
                    middlewareData: s,
                    rects: a,
                    initialPlacement: i,
                    platform: c,
                    elements: l
                } = t, {
                    mainAxis: d = !0,
                    crossAxis: p = !0,
                    fallbackPlacements: h,
                    fallbackStrategy: g = "bestFit",
                    fallbackAxisSideDirection: _ = "none",
                    flipAlignment: m = !0,
                    ...v
                } = Ct(e, t);
                if ((n = s.arrow) != null && n.alignmentOffset) return {};
                const C = yt(o),
                    y = yt(i) === i,
                    S = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)),
                    w = h || (y || !m ? [wo(i)] : qO(i));
                !h && _ !== "none" && w.push(...YO(i, m, _, S));
                const T = [i, ...w],
                    O = await On(t, v),
                    E = [];
                let I = ((r = s.flip) == null ? void 0 : r.overflows) || [];
                if (d && E.push(O[C]), p) {
                    const q = zO(o, a, S);
                    E.push(O[q[0]], O[q[1]])
                }
                if (I = [...I, {
                        placement: o,
                        overflows: E
                    }], !E.every(q => q <= 0)) {
                    var j, F;
                    const q = (((j = s.flip) == null ? void 0 : j.index) || 0) + 1,
                        Q = T[q];
                    if (Q) return {
                        data: {
                            index: q,
                            overflows: I
                        },
                        reset: {
                            placement: Q
                        }
                    };
                    let B = (F = I.filter(ie => ie.overflows[0] <= 0).sort((ie, G) => ie.overflows[1] - G.overflows[1])[0]) == null ? void 0 : F.placement;
                    if (!B) switch (g) {
                        case "bestFit":
                            {
                                var z;
                                const ie = (z = I.map(G => [G.placement, G.overflows.filter(re => re > 0).reduce((re, W) => re + W, 0)]).sort((G, re) => G[1] - re[1])[0]) == null ? void 0 : z[0];ie && (B = ie);
                                break
                            }
                        case "initialPlacement":
                            B = i;
                            break
                    }
                    if (o !== B) return {
                        reset: {
                            placement: B
                        }
                    }
                }
                return {}
            }
        }
    };

function Bl(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}

function Nl(e) {
    return VO.some(t => e[t] >= 0)
}
const e5 = function(e) {
    return e === void 0 && (e = {}), {
        name: "hide",
        options: e,
        async fn(t) {
            const {
                rects: n
            } = t, {
                strategy: r = "referenceHidden",
                ...o
            } = Ct(e, t);
            switch (r) {
                case "referenceHidden":
                    {
                        const s = await On(t, { ...o,
                                elementContext: "reference"
                            }),
                            a = Bl(s, n.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: a,
                                referenceHidden: Nl(a)
                            }
                        }
                    }
                case "escaped":
                    {
                        const s = await On(t, { ...o,
                                altBoundary: !0
                            }),
                            a = Bl(s, n.floating);
                        return {
                            data: {
                                escapedOffsets: a,
                                escaped: Nl(a)
                            }
                        }
                    }
                default:
                    return {}
            }
        }
    }
};
async function t5(e, t) {
    const {
        placement: n,
        platform: r,
        elements: o
    } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = yt(n), i = Wn(n), c = zn(n) === "y", l = ["left", "top"].includes(a) ? -1 : 1, d = s && c ? -1 : 1, p = Ct(t, e);
    let {
        mainAxis: h,
        crossAxis: g,
        alignmentAxis: _
    } = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null,
        ...p
    };
    return i && typeof _ == "number" && (g = i === "end" ? _ * -1 : _), c ? {
        x: g * d,
        y: h * l
    } : {
        x: h * l,
        y: g * d
    }
}
const n5 = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    x: o,
                    y: s,
                    placement: a,
                    middlewareData: i
                } = t, c = await t5(t, e);
                return a === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
                    x: o + c.x,
                    y: s + c.y,
                    data: { ...c,
                        placement: a
                    }
                }
            }
        }
    },
    r5 = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o
                } = t, {
                    mainAxis: s = !0,
                    crossAxis: a = !1,
                    limiter: i = {
                        fn: v => {
                            let {
                                x: C,
                                y
                            } = v;
                            return {
                                x: C,
                                y
                            }
                        }
                    },
                    ...c
                } = Ct(e, t), l = {
                    x: n,
                    y: r
                }, d = await On(t, c), p = zn(yt(o)), h = bi(p);
                let g = l[h],
                    _ = l[p];
                if (s) {
                    const v = h === "y" ? "top" : "left",
                        C = h === "y" ? "bottom" : "right",
                        y = g + d[v],
                        S = g - d[C];
                    g = Aa(y, g, S)
                }
                if (a) {
                    const v = p === "y" ? "top" : "left",
                        C = p === "y" ? "bottom" : "right",
                        y = _ + d[v],
                        S = _ - d[C];
                    _ = Aa(y, _, S)
                }
                const m = i.fn({ ...t,
                    [h]: g,
                    [p]: _
                });
                return { ...m,
                    data: {
                        x: m.x - n,
                        y: m.y - r
                    }
                }
            }
        }
    },
    o5 = function(e) {
        return e === void 0 && (e = {}), {
            options: e,
            fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o,
                    rects: s,
                    middlewareData: a
                } = t, {
                    offset: i = 0,
                    mainAxis: c = !0,
                    crossAxis: l = !0
                } = Ct(e, t), d = {
                    x: n,
                    y: r
                }, p = zn(o), h = bi(p);
                let g = d[h],
                    _ = d[p];
                const m = Ct(i, t),
                    v = typeof m == "number" ? {
                        mainAxis: m,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...m
                    };
                if (c) {
                    const S = h === "y" ? "height" : "width",
                        w = s.reference[h] - s.floating[S] + v.mainAxis,
                        T = s.reference[h] + s.reference[S] - v.mainAxis;
                    g < w ? g = w : g > T && (g = T)
                }
                if (l) {
                    var C, y;
                    const S = h === "y" ? "width" : "height",
                        w = ["top", "left"].includes(yt(o)),
                        T = s.reference[p] - s.floating[S] + (w && ((C = a.offset) == null ? void 0 : C[p]) || 0) + (w ? 0 : v.crossAxis),
                        O = s.reference[p] + s.reference[S] + (w ? 0 : ((y = a.offset) == null ? void 0 : y[p]) || 0) - (w ? v.crossAxis : 0);
                    _ < T ? _ = T : _ > O && (_ = O)
                }
                return {
                    [h]: g,
                    [p]: _
                }
            }
        }
    },
    s5 = function(e) {
        return e === void 0 && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
                const {
                    placement: n,
                    rects: r,
                    platform: o,
                    elements: s
                } = t, {
                    apply: a = () => {},
                    ...i
                } = Ct(e, t), c = await On(t, i), l = yt(n), d = Wn(n), p = zn(n) === "y", {
                    width: h,
                    height: g
                } = r.floating;
                let _, m;
                l === "top" || l === "bottom" ? (_ = l, m = d === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (m = l, _ = d === "end" ? "top" : "bottom");
                const v = g - c[_],
                    C = h - c[m],
                    y = !t.middlewareData.shift;
                let S = v,
                    w = C;
                if (p) {
                    const O = h - c.left - c.right;
                    w = d || y ? Mt(C, O) : O
                } else {
                    const O = g - c.top - c.bottom;
                    S = d || y ? Mt(v, O) : O
                }
                if (y && !d) {
                    const O = De(c.left, 0),
                        E = De(c.right, 0),
                        I = De(c.top, 0),
                        j = De(c.bottom, 0);
                    p ? w = h - 2 * (O !== 0 || E !== 0 ? O + E : De(c.left, c.right)) : S = g - 2 * (I !== 0 || j !== 0 ? I + j : De(c.top, c.bottom))
                }
                await a({ ...t,
                    availableWidth: w,
                    availableHeight: S
                });
                const T = await o.getDimensions(s.floating);
                return h !== T.width || g !== T.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function os() {
    return typeof window < "u"
}

function qn(e) {
    return pp(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function $e(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function dt(e) {
    var t;
    return (t = (pp(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function pp(e) {
    return os() ? e instanceof Node || e instanceof $e(e).Node : !1
}

function et(e) {
    return os() ? e instanceof Element || e instanceof $e(e).Element : !1
}

function ct(e) {
    return os() ? e instanceof HTMLElement || e instanceof $e(e).HTMLElement : !1
}

function Fl(e) {
    return !os() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof $e(e).ShadowRoot
}

function Tr(e) {
    const {
        overflow: t,
        overflowX: n,
        overflowY: r,
        display: o
    } = tt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}

function a5(e) {
    return ["table", "td", "th"].includes(qn(e))
}

function ss(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    })
}

function Ti(e) {
    const t = Ai(),
        n = et(e) ? tt(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}

function i5(e) {
    let t = Pt(e);
    for (; ct(t) && !Mn(t);) {
        if (Ti(t)) return t;
        if (ss(t)) return null;
        t = Pt(t)
    }
    return null
}

function Ai() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function Mn(e) {
    return ["html", "body", "#document"].includes(qn(e))
}

function tt(e) {
    return $e(e).getComputedStyle(e)
}

function as(e) {
    return et(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}

function Pt(e) {
    if (qn(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || Fl(e) && e.host || dt(e);
    return Fl(t) ? t.host : t
}

function hp(e) {
    const t = Pt(e);
    return Mn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ct(t) && Tr(t) ? t : hp(t)
}

function pr(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const o = hp(e),
        s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
        a = $e(o);
    if (s) {
        const i = ka(a);
        return t.concat(a, a.visualViewport || [], Tr(o) ? o : [], i && n ? pr(i) : [])
    }
    return t.concat(o, pr(o, [], n))
}

function ka(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function gp(e) {
    const t = tt(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const o = ct(e),
        s = o ? e.offsetWidth : n,
        a = o ? e.offsetHeight : r,
        i = So(n) !== s || So(r) !== a;
    return i && (n = s, r = a), {
        width: n,
        height: r,
        $: i
    }
}

function Ii(e) {
    return et(e) ? e : e.contextElement
}

function Sn(e) {
    const t = Ii(e);
    if (!ct(t)) return Lt(1);
    const n = t.getBoundingClientRect(),
        {
            width: r,
            height: o,
            $: s
        } = gp(t);
    let a = (s ? So(n.width) : n.width) / r,
        i = (s ? So(n.height) : n.height) / o;
    return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
        x: a,
        y: i
    }
}
const c5 = Lt(0);

function mp(e) {
    const t = $e(e);
    return !Ai() || !t.visualViewport ? c5 : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function l5(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== $e(e) ? !1 : t
}

function Xt(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
        s = Ii(e);
    let a = Lt(1);
    t && (r ? et(r) && (a = Sn(r)) : a = Sn(e));
    const i = l5(s, n, r) ? mp(s) : Lt(0);
    let c = (o.left + i.x) / a.x,
        l = (o.top + i.y) / a.y,
        d = o.width / a.x,
        p = o.height / a.y;
    if (s) {
        const h = $e(s),
            g = r && et(r) ? $e(r) : r;
        let _ = h,
            m = ka(_);
        for (; m && r && g !== _;) {
            const v = Sn(m),
                C = m.getBoundingClientRect(),
                y = tt(m),
                S = C.left + (m.clientLeft + parseFloat(y.paddingLeft)) * v.x,
                w = C.top + (m.clientTop + parseFloat(y.paddingTop)) * v.y;
            c *= v.x, l *= v.y, d *= v.x, p *= v.y, c += S, l += w, _ = $e(m), m = ka(_)
        }
    }
    return To({
        width: d,
        height: p,
        x: c,
        y: l
    })
}

function u5(e) {
    let {
        elements: t,
        rect: n,
        offsetParent: r,
        strategy: o
    } = e;
    const s = o === "fixed",
        a = dt(r),
        i = t ? ss(t.floating) : !1;
    if (r === a || i && s) return n;
    let c = {
            scrollLeft: 0,
            scrollTop: 0
        },
        l = Lt(1);
    const d = Lt(0),
        p = ct(r);
    if ((p || !p && !s) && ((qn(r) !== "body" || Tr(a)) && (c = as(r)), ct(r))) {
        const h = Xt(r);
        l = Sn(r), d.x = h.x + r.clientLeft, d.y = h.y + r.clientTop
    }
    return {
        width: n.width * l.x,
        height: n.height * l.y,
        x: n.x * l.x - c.scrollLeft * l.x + d.x,
        y: n.y * l.y - c.scrollTop * l.y + d.y
    }
}

function d5(e) {
    return Array.from(e.getClientRects())
}

function Ea(e, t) {
    const n = as(e).scrollLeft;
    return t ? t.left + n : Xt(dt(e)).left + n
}

function f5(e) {
    const t = dt(e),
        n = as(e),
        r = e.ownerDocument.body,
        o = De(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        s = De(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let a = -n.scrollLeft + Ea(e);
    const i = -n.scrollTop;
    return tt(r).direction === "rtl" && (a += De(t.clientWidth, r.clientWidth) - o), {
        width: o,
        height: s,
        x: a,
        y: i
    }
}

function p5(e, t) {
    const n = $e(e),
        r = dt(e),
        o = n.visualViewport;
    let s = r.clientWidth,
        a = r.clientHeight,
        i = 0,
        c = 0;
    if (o) {
        s = o.width, a = o.height;
        const l = Ai();
        (!l || l && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop)
    }
    return {
        width: s,
        height: a,
        x: i,
        y: c
    }
}

function h5(e, t) {
    const n = Xt(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        s = ct(e) ? Sn(e) : Lt(1),
        a = e.clientWidth * s.x,
        i = e.clientHeight * s.y,
        c = o * s.x,
        l = r * s.y;
    return {
        width: a,
        height: i,
        x: c,
        y: l
    }
}

function jl(e, t, n) {
    let r;
    if (t === "viewport") r = p5(e, n);
    else if (t === "document") r = f5(dt(e));
    else if (et(t)) r = h5(t, n);
    else {
        const o = mp(e);
        r = { ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return To(r)
}

function _p(e, t) {
    const n = Pt(e);
    return n === t || !et(n) || Mn(n) ? !1 : tt(n).position === "fixed" || _p(n, t)
}

function g5(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = pr(e, [], !1).filter(i => et(i) && qn(i) !== "body"),
        o = null;
    const s = tt(e).position === "fixed";
    let a = s ? Pt(e) : e;
    for (; et(a) && !Mn(a);) {
        const i = tt(a),
            c = Ti(a);
        !c && i.position === "fixed" && (o = null), (s ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Tr(a) && !c && _p(e, a)) ? r = r.filter(d => d !== a) : o = i, a = Pt(a)
    }
    return t.set(e, r), r
}

function m5(e) {
    let {
        element: t,
        boundary: n,
        rootBoundary: r,
        strategy: o
    } = e;
    const a = [...n === "clippingAncestors" ? ss(t) ? [] : g5(t, this._c) : [].concat(n), r],
        i = a[0],
        c = a.reduce((l, d) => {
            const p = jl(t, d, o);
            return l.top = De(p.top, l.top), l.right = Mt(p.right, l.right), l.bottom = Mt(p.bottom, l.bottom), l.left = De(p.left, l.left), l
        }, jl(t, i, o));
    return {
        width: c.right - c.left,
        height: c.bottom - c.top,
        x: c.left,
        y: c.top
    }
}

function _5(e) {
    const {
        width: t,
        height: n
    } = gp(e);
    return {
        width: t,
        height: n
    }
}

function v5(e, t, n) {
    const r = ct(t),
        o = dt(t),
        s = n === "fixed",
        a = Xt(e, !0, s, t);
    let i = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const c = Lt(0);
    if (r || !r && !s)
        if ((qn(t) !== "body" || Tr(o)) && (i = as(t)), r) {
            const g = Xt(t, !0, s, t);
            c.x = g.x + t.clientLeft, c.y = g.y + t.clientTop
        } else o && (c.x = Ea(o));
    let l = 0,
        d = 0;
    if (o && !r && !s) {
        const g = o.getBoundingClientRect();
        d = g.top + i.scrollTop, l = g.left + i.scrollLeft - Ea(o, g)
    }
    const p = a.left + i.scrollLeft - c.x - l,
        h = a.top + i.scrollTop - c.y - d;
    return {
        x: p,
        y: h,
        width: a.width,
        height: a.height
    }
}

function Vs(e) {
    return tt(e).position === "static"
}

function Gl(e, t) {
    if (!ct(e) || tt(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return dt(e) === n && (n = n.ownerDocument.body), n
}

function vp(e, t) {
    const n = $e(e);
    if (ss(e)) return n;
    if (!ct(e)) {
        let o = Pt(e);
        for (; o && !Mn(o);) {
            if (et(o) && !Vs(o)) return o;
            o = Pt(o)
        }
        return n
    }
    let r = Gl(e, t);
    for (; r && a5(r) && Vs(r);) r = Gl(r, t);
    return r && Mn(r) && Vs(r) && !Ti(r) ? n : r || i5(e) || n
}
const C5 = async function(e) {
    const t = this.getOffsetParent || vp,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: v5(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};

function y5(e) {
    return tt(e).direction === "rtl"
}
const b5 = {
    convertOffsetParentRelativeRectToViewportRelativeRect: u5,
    getDocumentElement: dt,
    getClippingRect: m5,
    getOffsetParent: vp,
    getElementRects: C5,
    getClientRects: d5,
    getDimensions: _5,
    getScale: Sn,
    isElement: et,
    isRTL: y5
};

function S5(e, t) {
    let n = null,
        r;
    const o = dt(e);

    function s() {
        var i;
        clearTimeout(r), (i = n) == null || i.disconnect(), n = null
    }

    function a(i, c) {
        i === void 0 && (i = !1), c === void 0 && (c = 1), s();
        const {
            left: l,
            top: d,
            width: p,
            height: h
        } = e.getBoundingClientRect();
        if (i || t(), !p || !h) return;
        const g = Hr(d),
            _ = Hr(o.clientWidth - (l + p)),
            m = Hr(o.clientHeight - (d + h)),
            v = Hr(l),
            y = {
                rootMargin: -g + "px " + -_ + "px " + -m + "px " + -v + "px",
                threshold: De(0, Mt(1, c)) || 1
            };
        let S = !0;

        function w(T) {
            const O = T[0].intersectionRatio;
            if (O !== c) {
                if (!S) return a();
                O ? a(!1, O) : r = setTimeout(() => {
                    a(!1, 1e-7)
                }, 1e3)
            }
            S = !1
        }
        try {
            n = new IntersectionObserver(w, { ...y,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(w, y)
        }
        n.observe(e)
    }
    return a(!0), s
}

function w5(e, t, n, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: o = !0,
        ancestorResize: s = !0,
        elementResize: a = typeof ResizeObserver == "function",
        layoutShift: i = typeof IntersectionObserver == "function",
        animationFrame: c = !1
    } = r, l = Ii(e), d = o || s ? [...l ? pr(l) : [], ...pr(t)] : [];
    d.forEach(C => {
        o && C.addEventListener("scroll", n, {
            passive: !0
        }), s && C.addEventListener("resize", n)
    });
    const p = l && i ? S5(l, n) : null;
    let h = -1,
        g = null;
    a && (g = new ResizeObserver(C => {
        let [y] = C;
        y && y.target === l && g && (g.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
            var S;
            (S = g) == null || S.observe(t)
        })), n()
    }), l && !c && g.observe(l), g.observe(t));
    let _, m = c ? Xt(e) : null;
    c && v();

    function v() {
        const C = Xt(e);
        m && (C.x !== m.x || C.y !== m.y || C.width !== m.width || C.height !== m.height) && n(), m = C, _ = requestAnimationFrame(v)
    }
    return n(), () => {
        var C;
        d.forEach(y => {
            o && y.removeEventListener("scroll", n), s && y.removeEventListener("resize", n)
        }), p ? .(), (C = g) == null || C.disconnect(), g = null, c && cancelAnimationFrame(_)
    }
}
const B8 = On,
    T5 = n5,
    A5 = r5,
    I5 = XO,
    k5 = s5,
    E5 = e5,
    Vl = JO,
    x5 = o5,
    R5 = (e, t, n) => {
        const r = new Map,
            o = {
                platform: b5,
                ...n
            },
            s = { ...o.platform,
                _c: r
            };
        return QO(e, t, { ...o,
            platform: s
        })
    };
var to = typeof document < "u" ? u.useLayoutEffect : u.useEffect;

function Ao(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!Ao(e[r], t[r])) return !1;
            return !0
        }
        if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0;) {
            const s = o[r];
            if (!(s === "_owner" && e.$$typeof) && !Ao(e[s], t[s])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function Cp(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function Hl(e, t) {
    const n = Cp(e);
    return Math.round(t * n) / n
}

function Hs(e) {
    const t = u.useRef(e);
    return to(() => {
        t.current = e
    }), t
}

function O5(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: r = [],
        platform: o,
        elements: {
            reference: s,
            floating: a
        } = {},
        transform: i = !0,
        whileElementsMounted: c,
        open: l
    } = e, [d, p] = u.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [h, g] = u.useState(r);
    Ao(h, r) || g(r);
    const [_, m] = u.useState(null), [v, C] = u.useState(null), y = u.useCallback(W => {
        W !== O.current && (O.current = W, m(W))
    }, []), S = u.useCallback(W => {
        W !== E.current && (E.current = W, C(W))
    }, []), w = s || _, T = a || v, O = u.useRef(null), E = u.useRef(null), I = u.useRef(d), j = c != null, F = Hs(c), z = Hs(o), q = Hs(l), Q = u.useCallback(() => {
        if (!O.current || !E.current) return;
        const W = {
            placement: t,
            strategy: n,
            middleware: h
        };
        z.current && (W.platform = z.current), R5(O.current, E.current, W).then(D => {
            const be = { ...D,
                isPositioned: q.current !== !1
            };
            B.current && !Ao(I.current, be) && (I.current = be, ou.flushSync(() => {
                p(be)
            }))
        })
    }, [h, t, n, z, q]);
    to(() => {
        l === !1 && I.current.isPositioned && (I.current.isPositioned = !1, p(W => ({ ...W,
            isPositioned: !1
        })))
    }, [l]);
    const B = u.useRef(!1);
    to(() => (B.current = !0, () => {
        B.current = !1
    }), []), to(() => {
        if (w && (O.current = w), T && (E.current = T), w && T) {
            if (F.current) return F.current(w, T, Q);
            Q()
        }
    }, [w, T, Q, F, j]);
    const ie = u.useMemo(() => ({
            reference: O,
            floating: E,
            setReference: y,
            setFloating: S
        }), [y, S]),
        G = u.useMemo(() => ({
            reference: w,
            floating: T
        }), [w, T]),
        re = u.useMemo(() => {
            const W = {
                position: n,
                left: 0,
                top: 0
            };
            if (!G.floating) return W;
            const D = Hl(G.floating, d.x),
                be = Hl(G.floating, d.y);
            return i ? { ...W,
                transform: "translate(" + D + "px, " + be + "px)",
                ...Cp(G.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: D,
                top: be
            }
        }, [n, i, G.floating, d.x, d.y]);
    return u.useMemo(() => ({ ...d,
        update: Q,
        refs: ie,
        elements: G,
        floatingStyles: re
    }), [d, Q, ie, G, re])
}
const M5 = e => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current")
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const {
                    element: r,
                    padding: o
                } = typeof e == "function" ? e(n) : e;
                return r && t(r) ? r.current != null ? Vl({
                    element: r.current,
                    padding: o
                }).fn(n) : {} : r ? Vl({
                    element: r,
                    padding: o
                }).fn(n) : {}
            }
        }
    },
    L5 = (e, t) => ({ ...T5(e),
        options: [e, t]
    }),
    P5 = (e, t) => ({ ...A5(e),
        options: [e, t]
    }),
    D5 = (e, t) => ({ ...x5(e),
        options: [e, t]
    }),
    $5 = (e, t) => ({ ...I5(e),
        options: [e, t]
    }),
    U5 = (e, t) => ({ ...k5(e),
        options: [e, t]
    }),
    B5 = (e, t) => ({ ...E5(e),
        options: [e, t]
    }),
    N5 = (e, t) => ({ ...M5(e),
        options: [e, t]
    });
var F5 = "Arrow",
    yp = u.forwardRef((e, t) => {
        const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...s
        } = e;
        return f.jsx(pe.svg, { ...s,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : f.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
yp.displayName = F5;
var j5 = yp;

function ki(e, t = []) {
    let n = [];

    function r(s, a) {
        const i = u.createContext(a),
            c = n.length;
        n = [...n, a];

        function l(p) {
            const {
                scope: h,
                children: g,
                ..._
            } = p, m = h ? .[e][c] || i, v = u.useMemo(() => _, Object.values(_));
            return f.jsx(m.Provider, {
                value: v,
                children: g
            })
        }

        function d(p, h) {
            const g = h ? .[e][c] || i,
                _ = u.useContext(g);
            if (_) return _;
            if (a !== void 0) return a;
            throw new Error(`\`${p}\` must be used within \`${s}\``)
        }
        return l.displayName = s + "Provider", [l, d]
    }
    const o = () => {
        const s = n.map(a => u.createContext(a));
        return function(i) {
            const c = i ? .[e] || s;
            return u.useMemo(() => ({
                [`__scope${e}`]: { ...i,
                    [e]: c
                }
            }), [i, c])
        }
    };
    return o.scopeName = e, [r, G5(o, ...t)]
}

function G5(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(s) {
            const a = r.reduce((i, {
                useScope: c,
                scopeName: l
            }) => {
                const p = c(s)[`__scope${l}`];
                return { ...i,
                    ...p
                }
            }, {});
            return u.useMemo(() => ({
                [`__scope${t.scopeName}`]: a
            }), [a])
        }
    };
    return n.scopeName = t.scopeName, n
}

function V5(e) {
    const [t, n] = u.useState(void 0);
    return Zt(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length) return;
                const s = o[0];
                let a, i;
                if ("borderBoxSize" in s) {
                    const c = s.borderBoxSize,
                        l = Array.isArray(c) ? c[0] : c;
                    a = l.inlineSize, i = l.blockSize
                } else a = e.offsetWidth, i = e.offsetHeight;
                n({
                    width: a,
                    height: i
                })
            });
            return r.observe(e, {
                box: "border-box"
            }), () => r.unobserve(e)
        } else n(void 0)
    }, [e]), t
}
var Ei = "Popper",
    [bp, is] = ki(Ei),
    [H5, Sp] = bp(Ei),
    wp = e => {
        const {
            __scopePopper: t,
            children: n
        } = e, [r, o] = u.useState(null);
        return f.jsx(H5, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n
        })
    };
wp.displayName = Ei;
var Tp = "PopperAnchor",
    Ap = u.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            virtualRef: r,
            ...o
        } = e, s = Sp(Tp, n), a = u.useRef(null), i = _e(t, a);
        return u.useEffect(() => {
            s.onAnchorChange(r ? .current || a.current)
        }), r ? null : f.jsx(pe.div, { ...o,
            ref: i
        })
    });
Ap.displayName = Tp;
var xi = "PopperContent",
    [W5, z5] = bp(xi),
    Ip = u.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: o = 0,
            align: s = "center",
            alignOffset: a = 0,
            arrowPadding: i = 0,
            avoidCollisions: c = !0,
            collisionBoundary: l = [],
            collisionPadding: d = 0,
            sticky: p = "partial",
            hideWhenDetached: h = !1,
            updatePositionStrategy: g = "optimized",
            onPlaced: _,
            ...m
        } = e, v = Sp(xi, n), [C, y] = u.useState(null), S = _e(t, P => y(P)), [w, T] = u.useState(null), O = V5(w), E = O ? .width ? ? 0, I = O ? .height ? ? 0, j = r + (s !== "center" ? "-" + s : ""), F = typeof d == "number" ? d : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...d
        }, z = Array.isArray(l) ? l : [l], q = z.length > 0, Q = {
            padding: F,
            boundary: z.filter(K5),
            altBoundary: q
        }, {
            refs: B,
            floatingStyles: ie,
            placement: G,
            isPositioned: re,
            middlewareData: W
        } = O5({
            strategy: "fixed",
            placement: j,
            whileElementsMounted: (...P) => w5(...P, {
                animationFrame: g === "always"
            }),
            elements: {
                reference: v.anchor
            },
            middleware: [L5({
                mainAxis: o + I,
                alignmentAxis: a
            }), c && P5({
                mainAxis: !0,
                crossAxis: !1,
                limiter: p === "partial" ? D5() : void 0,
                ...Q
            }), c && $5({ ...Q
            }), U5({ ...Q,
                apply: ({
                    elements: P,
                    rects: V,
                    availableWidth: oe,
                    availableHeight: ee
                }) => {
                    const {
                        width: he,
                        height: qe
                    } = V.reference, Ie = P.floating.style;
                    Ie.setProperty("--radix-popper-available-width", `${oe}px`), Ie.setProperty("--radix-popper-available-height", `${ee}px`), Ie.setProperty("--radix-popper-anchor-width", `${he}px`), Ie.setProperty("--radix-popper-anchor-height", `${qe}px`)
                }
            }), w && N5({
                element: w,
                padding: i
            }), Y5({
                arrowWidth: E,
                arrowHeight: I
            }), h && B5({
                strategy: "referenceHidden",
                ...Q
            })]
        }), [D, be] = xp(G), Ee = ze(_);
        Zt(() => {
            re && Ee ? .()
        }, [re, Ee]);
        const ft = W.arrow ? .x,
            pt = W.arrow ? .y,
            Bt = W.arrow ? .centerOffset !== 0,
            [L, $] = u.useState();
        return Zt(() => {
            C && $(window.getComputedStyle(C).zIndex)
        }, [C]), f.jsx("div", {
            ref: B.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...ie,
                transform: re ? ie.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: L,
                "--radix-popper-transform-origin": [W.transformOrigin ? .x, W.transformOrigin ? .y].join(" "),
                ...W.hide ? .referenceHidden && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: f.jsx(W5, {
                scope: n,
                placedSide: D,
                onArrowChange: T,
                arrowX: ft,
                arrowY: pt,
                shouldHideArrow: Bt,
                children: f.jsx(pe.div, {
                    "data-side": D,
                    "data-align": be,
                    ...m,
                    ref: S,
                    style: { ...m.style,
                        animation: re ? void 0 : "none"
                    }
                })
            })
        })
    });
Ip.displayName = xi;
var kp = "PopperArrow",
    q5 = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    Ep = u.forwardRef(function(t, n) {
        const {
            __scopePopper: r,
            ...o
        } = t, s = z5(kp, r), a = q5[s.placedSide];
        return f.jsx("span", {
            ref: s.onArrowChange,
            style: {
                position: "absolute",
                left: s.arrowX,
                top: s.arrowY,
                [a]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[s.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[s.placedSide],
                visibility: s.shouldHideArrow ? "hidden" : void 0
            },
            children: f.jsx(j5, { ...o,
                ref: n,
                style: { ...o.style,
                    display: "block"
                }
            })
        })
    });
Ep.displayName = kp;

function K5(e) {
    return e !== null
}
var Y5 = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        const {
            placement: n,
            rects: r,
            middlewareData: o
        } = t, a = o.arrow ? .centerOffset !== 0, i = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [l, d] = xp(n), p = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[d], h = (o.arrow ? .x ? ? 0) + i / 2, g = (o.arrow ? .y ? ? 0) + c / 2;
        let _ = "",
            m = "";
        return l === "bottom" ? (_ = a ? p : `${h}px`, m = `${-c}px`) : l === "top" ? (_ = a ? p : `${h}px`, m = `${r.floating.height+c}px`) : l === "right" ? (_ = `${-c}px`, m = a ? p : `${g}px`) : l === "left" && (_ = `${r.floating.width+c}px`, m = a ? p : `${g}px`), {
            data: {
                x: _,
                y: m
            }
        }
    }
});

function xp(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
var Ri = wp,
    Rp = Ap,
    Op = Ip,
    Mp = Ep,
    Z5 = "VisuallyHidden",
    Lp = u.forwardRef((e, t) => f.jsx(pe.span, { ...e,
        ref: t,
        style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style
        }
    }));
Lp.displayName = Z5;
var Q5 = Lp,
    [cs, N8] = es("Tooltip", [is]),
    ls = is(),
    Pp = "TooltipProvider",
    J5 = 700,
    xa = "tooltip.open",
    [X5, Oi] = cs(Pp),
    Dp = e => {
        const {
            __scopeTooltip: t,
            delayDuration: n = J5,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: s
        } = e, [a, i] = u.useState(!0), c = u.useRef(!1), l = u.useRef(0);
        return u.useEffect(() => {
            const d = l.current;
            return () => window.clearTimeout(d)
        }, []), f.jsx(X5, {
            scope: t,
            isOpenDelayed: a,
            delayDuration: n,
            onOpen: u.useCallback(() => {
                window.clearTimeout(l.current), i(!1)
            }, []),
            onClose: u.useCallback(() => {
                window.clearTimeout(l.current), l.current = window.setTimeout(() => i(!0), r)
            }, [r]),
            isPointerInTransitRef: c,
            onPointerInTransitChange: u.useCallback(d => {
                c.current = d
            }, []),
            disableHoverableContent: o,
            children: s
        })
    };
Dp.displayName = Pp;
var us = "Tooltip",
    [e4, Ar] = cs(us),
    $p = e => {
        const {
            __scopeTooltip: t,
            children: n,
            open: r,
            defaultOpen: o = !1,
            onOpenChange: s,
            disableHoverableContent: a,
            delayDuration: i
        } = e, c = Oi(us, e.__scopeTooltip), l = ls(t), [d, p] = u.useState(null), h = mt(), g = u.useRef(0), _ = a ? ? c.disableHoverableContent, m = i ? ? c.delayDuration, v = u.useRef(!1), [C = !1, y] = br({
            prop: r,
            defaultProp: o,
            onChange: E => {
                E ? (c.onOpen(), document.dispatchEvent(new CustomEvent(xa))) : c.onClose(), s ? .(E)
            }
        }), S = u.useMemo(() => C ? v.current ? "delayed-open" : "instant-open" : "closed", [C]), w = u.useCallback(() => {
            window.clearTimeout(g.current), g.current = 0, v.current = !1, y(!0)
        }, [y]), T = u.useCallback(() => {
            window.clearTimeout(g.current), g.current = 0, y(!1)
        }, [y]), O = u.useCallback(() => {
            window.clearTimeout(g.current), g.current = window.setTimeout(() => {
                v.current = !0, y(!0), g.current = 0
            }, m)
        }, [m, y]);
        return u.useEffect(() => () => {
            g.current && (window.clearTimeout(g.current), g.current = 0)
        }, []), f.jsx(Ri, { ...l,
            children: f.jsx(e4, {
                scope: t,
                contentId: h,
                open: C,
                stateAttribute: S,
                trigger: d,
                onTriggerChange: p,
                onTriggerEnter: u.useCallback(() => {
                    c.isOpenDelayed ? O() : w()
                }, [c.isOpenDelayed, O, w]),
                onTriggerLeave: u.useCallback(() => {
                    _ ? T() : (window.clearTimeout(g.current), g.current = 0)
                }, [T, _]),
                onOpen: w,
                onClose: T,
                disableHoverableContent: _,
                children: n
            })
        })
    };
$p.displayName = us;
var Ra = "TooltipTrigger",
    Up = u.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, o = Ar(Ra, n), s = Oi(Ra, n), a = ls(n), i = u.useRef(null), c = _e(t, i, o.onTriggerChange), l = u.useRef(!1), d = u.useRef(!1), p = u.useCallback(() => l.current = !1, []);
        return u.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), f.jsx(Rp, {
            asChild: !0,
            ...a,
            children: f.jsx(pe.button, {
                "aria-describedby": o.open ? o.contentId : void 0,
                "data-state": o.stateAttribute,
                ...r,
                ref: c,
                onPointerMove: N(e.onPointerMove, h => {
                    h.pointerType !== "touch" && !d.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0)
                }),
                onPointerLeave: N(e.onPointerLeave, () => {
                    o.onTriggerLeave(), d.current = !1
                }),
                onPointerDown: N(e.onPointerDown, () => {
                    l.current = !0, document.addEventListener("pointerup", p, {
                        once: !0
                    })
                }),
                onFocus: N(e.onFocus, () => {
                    l.current || o.onOpen()
                }),
                onBlur: N(e.onBlur, o.onClose),
                onClick: N(e.onClick, o.onClose)
            })
        })
    });
Up.displayName = Ra;
var Mi = "TooltipPortal",
    [t4, n4] = cs(Mi, {
        forceMount: void 0
    }),
    Bp = e => {
        const {
            __scopeTooltip: t,
            forceMount: n,
            children: r,
            container: o
        } = e, s = Ar(Mi, t);
        return f.jsx(t4, {
            scope: t,
            forceMount: n,
            children: f.jsx(ut, {
                present: n || s.open,
                children: f.jsx(wr, {
                    asChild: !0,
                    container: o,
                    children: r
                })
            })
        })
    };
Bp.displayName = Mi;
var Ln = "TooltipContent",
    Np = u.forwardRef((e, t) => {
        const n = n4(Ln, e.__scopeTooltip),
            {
                forceMount: r = n.forceMount,
                side: o = "top",
                ...s
            } = e,
            a = Ar(Ln, e.__scopeTooltip);
        return f.jsx(ut, {
            present: r || a.open,
            children: a.disableHoverableContent ? f.jsx(Fp, {
                side: o,
                ...s,
                ref: t
            }) : f.jsx(r4, {
                side: o,
                ...s,
                ref: t
            })
        })
    }),
    r4 = u.forwardRef((e, t) => {
        const n = Ar(Ln, e.__scopeTooltip),
            r = Oi(Ln, e.__scopeTooltip),
            o = u.useRef(null),
            s = _e(t, o),
            [a, i] = u.useState(null),
            {
                trigger: c,
                onClose: l
            } = n,
            d = o.current,
            {
                onPointerInTransitChange: p
            } = r,
            h = u.useCallback(() => {
                i(null), p(!1)
            }, [p]),
            g = u.useCallback((_, m) => {
                const v = _.currentTarget,
                    C = {
                        x: _.clientX,
                        y: _.clientY
                    },
                    y = a4(C, v.getBoundingClientRect()),
                    S = i4(C, y),
                    w = c4(m.getBoundingClientRect()),
                    T = u4([...S, ...w]);
                i(T), p(!0)
            }, [p]);
        return u.useEffect(() => () => h(), [h]), u.useEffect(() => {
            if (c && d) {
                const _ = v => g(v, d),
                    m = v => g(v, c);
                return c.addEventListener("pointerleave", _), d.addEventListener("pointerleave", m), () => {
                    c.removeEventListener("pointerleave", _), d.removeEventListener("pointerleave", m)
                }
            }
        }, [c, d, g, h]), u.useEffect(() => {
            if (a) {
                const _ = m => {
                    const v = m.target,
                        C = {
                            x: m.clientX,
                            y: m.clientY
                        },
                        y = c ? .contains(v) || d ? .contains(v),
                        S = !l4(C, a);
                    y ? h() : S && (h(), l())
                };
                return document.addEventListener("pointermove", _), () => document.removeEventListener("pointermove", _)
            }
        }, [c, d, a, l, h]), f.jsx(Fp, { ...e,
            ref: s
        })
    }),
    [o4, s4] = cs(us, {
        isInside: !1
    }),
    Fp = u.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: s,
            onPointerDownOutside: a,
            ...i
        } = e, c = Ar(Ln, n), l = ls(n), {
            onClose: d
        } = c;
        return u.useEffect(() => (document.addEventListener(xa, d), () => document.removeEventListener(xa, d)), [d]), u.useEffect(() => {
            if (c.trigger) {
                const p = h => {
                    h.target ? .contains(c.trigger) && d()
                };
                return window.addEventListener("scroll", p, {
                    capture: !0
                }), () => window.removeEventListener("scroll", p, {
                    capture: !0
                })
            }
        }, [c.trigger, d]), f.jsx(Sr, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: s,
            onPointerDownOutside: a,
            onFocusOutside: p => p.preventDefault(),
            onDismiss: d,
            children: f.jsxs(Op, {
                "data-state": c.stateAttribute,
                ...l,
                ...i,
                ref: t,
                style: { ...i.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [f.jsx( of , {
                    children: r
                }), f.jsx(o4, {
                    scope: n,
                    isInside: !0,
                    children: f.jsx(Q5, {
                        id: c.contentId,
                        role: "tooltip",
                        children: o || r
                    })
                })]
            })
        })
    });
Np.displayName = Ln;
var jp = "TooltipArrow",
    Gp = u.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, o = ls(n);
        return s4(jp, n).isInside ? null : f.jsx(Mp, { ...o,
            ...r,
            ref: t
        })
    });
Gp.displayName = jp;

function a4(e, t) {
    const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        o = Math.abs(t.right - e.x),
        s = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, s)) {
        case s:
            return "left";
        case o:
            return "right";
        case n:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function i4(e, t, n = 5) {
    const r = [];
    switch (t) {
        case "top":
            r.push({
                x: e.x - n,
                y: e.y + n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "bottom":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y - n
            });
            break;
        case "left":
            r.push({
                x: e.x + n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "right":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x - n,
                y: e.y + n
            });
            break
    }
    return r
}

function c4(e) {
    const {
        top: t,
        right: n,
        bottom: r,
        left: o
    } = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}

function l4(e, t) {
    const {
        x: n,
        y: r
    } = e;
    let o = !1;
    for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
        const i = t[s].x,
            c = t[s].y,
            l = t[a].x,
            d = t[a].y;
        c > r != d > r && n < (l - i) * (r - c) / (d - c) + i && (o = !o)
    }
    return o
}

function u4(e) {
    const t = e.slice();
    return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), d4(t)
}

function d4(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2;) {
            const s = t[t.length - 1],
                a = t[t.length - 2];
            if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x)) t.pop();
            else break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2;) {
            const s = n[n.length - 1],
                a = n[n.length - 2];
            if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x)) n.pop();
            else break
        }
        n.push(o)
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var f4 = Dp,
    p4 = $p,
    h4 = Up,
    g4 = Bp,
    m4 = Np,
    _4 = Gp;

function Vp(e, t) {
    const n = u.useLayoutEffect;
    n(e, t)
}
var Hp = u.createContext(void 0),
    v4 = e => {
        const {
            dir: t,
            children: n
        } = e;
        return f.jsx(Hp.Provider, {
            value: t,
            children: n
        })
    };

function Wp(e) {
    const t = u.useContext(Hp);
    return e || t || "ltr"
}

function C4({
    children: e,
    locale: t
}) {
    const [n, r] = u.useState(Fd);
    return u.useEffect(() => {
        Dk(t, o => {
            r(o)
        }, o => {
            M.addAction("importing locale failed", {
                error_string: o.toString(),
                locale: t
            })
        })
    }, [t]), f.jsx(Fg, {
        defaultLocale: ai,
        locale: t,
        messages: n,
        children: f.jsx(v4, {
            dir: Nd.has(t) ? "rtl" : "ltr",
            children: e
        })
    })
}
const y4 = ({
        children: e
    }) => {
        const t = P1().locale;
        return b.setClientLocale(t), Vp(() => {
            Nd.has(t), document.documentElement.dir = "ltr"
        }, [t]), u.useEffect(() => {
            const n = navigator.language ? ? "",
                r = Lk(n);
            me.logEvent(te.localeLoaded, {
                loaded_locale: t,
                raw_browser_locale: navigator.language,
                suggested_locale: r
            }), J.logEvent("chatgpt_locale_loaded", t, {
                loaded_locale: t,
                raw_browser_locale: navigator.language,
                suggested_locale: r ? ? ""
            })
        }, [t]), f.jsx(C4, {
            locale: t,
            children: e
        })
    },
    zp = u.createContext(void 0);

function b4() {
    const e = u.use(zp);
    if (!e) throw new Error("useActiveThreads must be used within an ActiveThreadsProvider");
    return e
}

function F8(e) {
    const {
        registerThread: t,
        unregisterThread: n
    } = b4();
    u.useEffect(() => (t(e), () => {
        n(e)
    }), [t, n, e])
}

function S4({
    children: e
}) {
    const [t, n] = u.useState(() => new Map), r = u.useCallback(d => {
        n(p => {
            const h = new Map(p),
                g = h.get(d) || 0;
            return h.set(d, g + 1), h
        })
    }, []), o = u.useCallback(d => {
        n(p => {
            const h = new Map(p),
                g = h.get(d);
            return g !== void 0 && (g > 1 ? h.set(d, g - 1) : h.delete(d)), h
        })
    }, []), s = u.useMemo(() => {
        const d = new Set;
        return t.forEach((p, h) => {
            p > 0 && d.add(h)
        }), d
    }, [t]), a = on.getState(), i = u.useCallback(d => Ci(d), [a]), c = u.useMemo(() => new Set([...Array.from(s)].map(d => d === void 0 ? void 0 : i(d)).filter(d => d !== void 0)), [s, i]), l = {
        activeThreadIds: s,
        activeServerThreadIds: c,
        registerThread: r,
        unregisterThread: o
    };
    return f.jsx(zp.Provider, {
        value: l,
        children: e
    })
}

function U(e, t, n) {
    return r => {
        const o = { ...r,
            message: t
        };
        M.addAction(e, o), n && J.logEvent(n, null, wd(o, s => Ku(s)))
    }
}

function Jn(e) {
    return (t, n) => {
        t instanceof Ve || M.addError(t, { ...n,
            status: "error",
            name: e
        })
    }
}
const Wl = {
        audioPlayer: {
            error: Jn("audio-player")
        },
        readAloud: {
            click: U("read-aloud", "click"),
            error: Jn("read-aloud")
        },
        messagePlayback: {
            click: U("message-playback", "click")
        },
        toggleVideoButton: {
            click: U("toggle-video-button", "click")
        },
        toggleMuteButton: {
            click: U("toggle-mute-button", "click")
        },
        toggleScreenShareButton: {
            click: U("toggle-screenshare-button", "click")
        },
        composerSpeechButton: {
            hover: U("composer-speech-button", "hover")
        },
        voiceSessionEndedByUser: {
            click: U("voice-session-ended-by-user", "click")
        },
        voiceSessionStarted: {
            click: U("voice-session-started", "click")
        },
        voiceSessionDuration: {
            duration: U("voice-session-duration", "duration")
        },
        voiceSessionListening: {
            stateChange: U("voice-session-listening", "stateChange")
        },
        voiceSessionListeningIntently: {
            stateChange: U("voice-session-listening-intently", "stateChange")
        },
        voiceSessionThinking: {
            stateChange: U("voice-session-thinking", "stateChange")
        },
        voiceSessionSpeaking: {
            stateChange: U("voice-session-speaking", "stateChange")
        },
        voiceSessionHalted: {
            stateChange: U("voice-session-halted", "stateChange")
        },
        voiceSessionDisconnected: {
            stateChange: U("voice-session-disconnected", "stateChange")
        },
        voiceMode: {
            connect: U("voice-mode", "connect"),
            error: U("voice-mode", "error")
        },
        previews: {
            click: U("previews", "click"),
            error: Jn("previews")
        },
        getToken: {
            request: U("get-token", "request"),
            success: U("get-token", "success"),
            failure: U("get-token", "failure")
        },
        getVoiceStatus: {
            request: U("get-voice-status", "request"),
            success: U("get-voice-status", "success"),
            failure: U("get-voice-status", "failure")
        },
        livekit: {
            connectCalled: U("livekit", "connectCalled"),
            success: U("livekit", "success"),
            failure: Jn("livekit")
        },
        bloop: {
            performance: U("bloop", "performance")
        },
        voiceSelectionShown: {
            click: U("voice-selection-shown", "click", "voice_selection_shown")
        },
        voiceSelected: {
            click: U("voice-selected", "click")
        },
        voiceAdvancedDisclosureShown: {
            success: U("voice-advanced-disclosure-shown", "success")
        },
        voiceAdvancedDisclosureAccepted: {
            click: U("voice-advanced-disclosure-accepted", "click")
        },
        rateLimitReached: {
            success: U("rate-limit-reached", "success"),
            modalShown: U("rate-limit-reached", "modalShown")
        },
        upsell: {
            upgradeToPlus: U("upsell", "upgradeToPlus"),
            upgradeToPro: U("upsell", "upgradeToPro"),
            upgradeToApp: U("upsell", "upgradeToApp"),
            appUpsellShown: U("upsell", "appUpsellShown"),
            appUpsellDismissed: U("upsell", "appUpsellDismissed")
        },
        feedbackShown: {
            success: U("feedback-shown", "success")
        },
        feedbackThumbsUp: {
            success: U("feedback-thumbs-up", "success")
        },
        feedbackThumbsDown: {
            success: U("feedback-thumbs-down", "success")
        },
        feedbackDetails: {
            audio_issues: U("feedback-details", "audio_issues"),
            response_quality: U("feedback-details", "response_quality"),
            interruptions: U("feedback-details", "interruptions"),
            transcription_issues: U("feedback-details", "transcription_issues"),
            inaudible_issues: U("feedback-details", "inaudible_issues"),
            other: U("feedback-details", "other"),
            inputText: U("feedback-details", "inputText")
        },
        connectionLatency: {
            success: U("connection-latency", "success"),
            failure: Jn("connection-latency")
        },
        firstListeningLatency: {
            success: U("first-listening-latency", "success")
        },
        permissions: {
            denied: U("permissions-denied")
        },
        voiceSessionFirstListening: {
            stateChange: U("voice-session-first-listening", "stateChange")
        },
        voiceSessionFirstSpeaking: {
            stateChange: U("voice-session-first-speaking", "stateChange")
        }
    },
    Re = $t(_O(si(() => ({
        playerNode: null,
        playerApi: null,
        playerState: {
            sourceUrl: null,
            isPlaying: !1
        }
    }))));

function j8() {
    return Re(e => e.playerApi)
}

function G8(e) {
    return Re(t => e(t.playerState))
}

function V8() {
    return Re.getState().playerApi
}

function H8() {
    return Re.getState().playerState
}
const w4 = u.memo(function() {
    const t = u.useRef(null),
        n = Re(r => r.playerNode);
    return u.useEffect(() => {
        const r = t.current;
        r && !n && (r.onplay = () => {
            Re.setState(o => {
                o.playerState.isPlaying = !0
            })
        }, r.onpause = () => {
            Re.setState(o => {
                o.playerState.isPlaying = !1
            })
        }, r.ontimeupdate = () => {
            Re.setState(o => {
                o.playerState.currentTime = r.currentTime
            })
        }, r.ondurationchange = () => {
            Re.setState(o => {
                o.playerState.duration = r.duration
            })
        }, r.onerror = o => {
            typeof o == "string" ? Wl.audioPlayer.error(new Error(o)) : o.target && "error" in o.target && Wl.audioPlayer.error(o.target.error)
        }, Re.setState({
            playerNode: r,
            playerApi: new T4(r)
        }))
    }, [n]), f.jsx("audio", {
        className: "fixed bottom-0 left-0 hidden h-0 w-0",
        autoPlay: !0,
        crossOrigin: "anonymous",
        ref: t
    })
});
class T4 {
    constructor(t) {
        this.player = t
    }
    get state() {
        return Re.getState().playerState
    }
    changeSource(t) {
        this.player.src && this.player.src !== t && this.stop(), this.player.src = t, Re.setState(n => {
            n.playerState.sourceUrl = t
        })
    }
    async play() {
        this.state.isPlaying || await this.player.play()
    }
    pause() {
        this.state.isPlaying && this.player.pause()
    }
    stop() {
        this.pause(), this.player.removeAttribute("src"), Re.setState(t => {
            t.playerState.sourceUrl = null, t.playerState.currentTime = void 0, t.playerState.duration = void 0
        })
    }
}

function W8(e) {
    const t = Re.getState().playerNode;
    if (!t) return !1;
    const n = t.canPlayType(e);
    return n === "probably" || n === "maybe"
}
const A4 = ({
    children: e,
    userCountry: t = null
}) => f.jsx(xd.Provider, {
    value: {
        country: t
    },
    children: f.jsx(f4, {
        children: f.jsx(y4, {
            children: f.jsx(s2, {
                children: f.jsxs(UO, {
                    children: [f.jsx(Xk, {
                        children: f.jsx(S4, {
                            children: f.jsx(GO, {
                                children: e
                            })
                        })
                    }), f.jsx(w4, {}), f.jsx(FO, {})]
                })
            })
        })
    })
});

function I4() {
    const [e, t] = au(), n = en(), r = ns(), o = e.get(ms), s = e.get(_s), a = Jo();
    u.useEffect(() => {
        let i = !1;
        if (a && o === "true") {
            let l;
            a.isWorkspacePlan() ? l = a.name ? ? "Workspace" : l = "Personal", r.info(n.formatMessage({
                id: "S4JoJY",
                defaultMessage: "Switched to {name}"
            }, {
                name: l
            })), i = !0
        }
        let c = !1;
        if (typeof s == "string" && k4(s)) {
            const l = qp[s];
            r.danger(n.formatMessage(l)), c = !0
        }(e.has(ms) || e.has(_s)) && t(l => (i && l.delete(ms), c && l.delete(_s), l), {
            replace: !0
        })
    }, [o, a, s, n, e, t, r])
}

function k4(e) {
    return e in qp
}
const qp = {
    invalidToken: {
        id: "UAhT32",
        defaultMessage: "The token is invalid"
    },
    continueFromApiGeneric: {
        id: "FHUH8C",
        defaultMessage: "Unable to continue your conversation"
    }
};
class Li {
    subscribers;
    constructor(t) {
        this.subscribers = Li.createTypedEmitterAllEventSubscribers(t) || {}
    }
    publish(t, n) {
        const r = this.subscribers[t] || {};
        for (const o of Object.values(r)) o(n)
    }
    subscribe(t, n) {
        const r = nt();
        this.subscribers[t] || (this.subscribers[t] = {});
        let o = this.subscribers[t];
        return o[r] = n, () => {
            delete o[r]
        }
    }
    static createTypedEmitterAllEventSubscribers(t) {
        return t.reduce((n, r) => (n[r] = {}, n), {})
    }
}
class E4 extends Li {
    constructor() {
        super(Object.values(Ba))
    }
    getVersion() {
        return 1
    }
}
const x4 = new E4;

function R4() {
    const {
        session: e
    } = ni(), t = Jo();
    u.useEffect(() => {
        if (!ye) return;
        const {
            statsigUser: n
        } = Wu(e ? .user ? ? null, t);
        e ? .accessToken && e ? .user ? .id ? ye.publish(Rt.LOGIN_CHANGED, {
            userId: e.user.id,
            accountId: t ? .id,
            authToken: e.accessToken,
            statsigUser: n,
            email: e.user.email
        }) : ye.publish(Rt.LOGOUT, {
            statsigUser: n
        })
    }, [t ? .id, e ? .accessToken, e ? .user, t])
}

function z8(e) {
    const t = u.useContext(rR).windowStyle;
    u.useEffect(() => {
        if (ye) return x4.subscribe(Ba.WINDOW_VISIBILITY_STATE_CHANGED, n => {
            n.windowType === t && n.state === "hidden" && e()
        })
    }, [e, t])
}

function q8() {
    return ye ? ye.takePhoto() : Promise.resolve(void 0)
}

function K8() {
    return ye ? ye.requestSystemPermission(vu.MICROPHONE) : Promise.resolve(!0)
}

function Y8() {
    return ye ? ye.takeScreenshot() : Promise.resolve(void 0)
}

function O4({
    children: e
}) {
    return I4(), _u && R4(), f.jsx(f.Fragment, {
        children: e
    })
}

function M4(e) {
    const {
        session: t
    } = ni(), n = t != null;
    return tn({
        queryKey: ["userSettings"],
        queryFn: () => li.getUserSettings(),
        enabled: n,
        select: e
    })
}

function Z8(e) {
    return M4(t => t.settings[e])
}

function L4(e = !1) {
    const t = tu();
    return nu({
        mutationFn: ({
            setting: n,
            value: r
        }) => li.updateUserSetting(n, r),
        onMutate: async ({
            setting: n,
            value: r
        }) => {
            if (e) {
                await t.cancelQueries({
                    queryKey: ["userSettings"]
                });
                const o = t.getQueryData(["userSettings"]);
                return t.setQueryData(["userSettings"], s => ({ ...s,
                    settings: { ...s.settings,
                        [n]: r
                    }
                })), {
                    previousValue: o
                }
            }
        },
        onError: (n, r, o) => {
            e && o !== void 0 && t.setQueryData(["userSettings"], o.previousValue)
        },
        onSuccess: () => {
            t.invalidateQueries({
                queryKey: ["userSettings"]
            })
        }
    })
}

function P4() {
    const e = L4();
    return u.useEffect(() => {
        const t = Hf();
        t !== void 0 && (t && e.mutate({
            setting: Lu.TrainingAllowed,
            value: !1
        }), me.logEvent(te.migrateToTrainingAllowed, {
            trainingAllowed: !t
        }), E2())
    }, [e]), null
}
const Pi = Ad(() => nn(() => ({
    modals: [],
    nextId: 1
})));

function Q8(e, t) {
    Pi(e).setState(r => ({
        modals: [...r.modals, {
            id: `${r.nextId}`,
            render: t
        }],
        nextId: r.nextId + 1
    }))
}

function D4(e, t) {
    Pi(e).setState(r => ({
        modals: r.modals.filter(o => o.id !== t)
    }))
}
const $4 = u.memo(function({
    id: t,
    render: n
}) {
    const r = Id();
    return n({
        closeModal: () => D4(r, t)
    })
});

function U4() {
    const e = Id(),
        t = Pi(e),
        n = Dn(t, r => r.modals);
    return f.jsx(f.Fragment, {
        children: n.map(({
            id: r,
            render: o
        }) => f.jsx($4, {
            id: r,
            render: o
        }, r))
    })
}
const Kp = e => u.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, u.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM16.0755 7.93219C16.5272 8.25003 16.6356 8.87383 16.3178 9.32549L11.5678 16.0755C11.3931 16.3237 11.1152 16.4792 10.8123 16.4981C10.5093 16.517 10.2142 16.3973 10.0101 16.1727L7.51006 13.4227C7.13855 13.014 7.16867 12.3816 7.57733 12.0101C7.98598 11.6386 8.61843 11.6687 8.98994 12.0773L10.6504 13.9039L14.6822 8.17451C15 7.72284 15.6238 7.61436 16.0755 7.93219Z",
        fill: "currentColor"
    })),
    B4 = e => u.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, u.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18.0633 5.67387C18.5196 5.98499 18.6374 6.60712 18.3262 7.06343L10.8262 18.0634C10.6585 18.3095 10.3898 18.4679 10.0934 18.4957C9.79688 18.5235 9.50345 18.4178 9.29289 18.2072L4.79289 13.7072C4.40237 13.3167 4.40237 12.6835 4.79289 12.293C5.18342 11.9025 5.81658 11.9025 6.20711 12.293L9.85368 15.9396L16.6738 5.93676C16.9849 5.48045 17.607 5.36275 18.0633 5.67387Z",
        fill: "currentColor"
    })),
    N4 = e => u.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, u.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z",
        fill: "currentColor"
    })),
    F4 = {
        threshold: 1,
        rootMargin: "0%"
    };

function j4({
    target: e,
    onChange: t,
    options: n = F4
}) {
    if (!e) return;
    const r = new IntersectionObserver(s => {
        const a = Array.isArray(r.thresholds) ? r.thresholds : [r.thresholds];
        s.forEach(i => {
            const c = i.isIntersecting && a.some(l => i.intersectionRatio >= l);
            t(c, i)
        })
    }, n);

    function o() {
        r.disconnect()
    }
    return r.observe(e), o
}

function G4({
    setIsScrolledToEdge: e,
    className: t,
    options: n
}) {
    return f.jsx("div", {
        "aria-hidden": !0,
        "data-edge": !0,
        className: Z("pointer-events-none h-px w-px", t),
        ref: r => j4({
            target: r,
            onChange: o => e(!o),
            options: n
        })
    })
}
const V4 = ({
    isOpen: e,
    onClose: t
}) => {
    const n = u.useRef(null),
        r = n.current ? .ownerDocument.body ? ? null;
    return u.useEffect(() => {
        if (!r || !e) return;
        const o = s => {
            (!s.relatedTarget || s.relatedTarget instanceof HTMLElement && !r.contains(s.relatedTarget)) && t()
        };
        return r.addEventListener("blur", o, {
            capture: !0
        }), () => r.removeEventListener("blur", o, {
            capture: !0
        })
    }, [e, r]), {
        triggerRef: n,
        container: r
    }
};

function Yp(e) {
    const t = e + "CollectionProvider",
        [n, r] = ki(t),
        [o, s] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        a = g => {
            const {
                scope: _,
                children: m
            } = g, v = ne.useRef(null), C = ne.useRef(new Map).current;
            return f.jsx(o, {
                scope: _,
                itemMap: C,
                collectionRef: v,
                children: m
            })
        };
    a.displayName = t;
    const i = e + "CollectionSlot",
        c = ne.forwardRef((g, _) => {
            const {
                scope: m,
                children: v
            } = g, C = s(i, m), y = _e(_, C.collectionRef);
            return f.jsx(xn, {
                ref: y,
                children: v
            })
        });
    c.displayName = i;
    const l = e + "CollectionItemSlot",
        d = "data-radix-collection-item",
        p = ne.forwardRef((g, _) => {
            const {
                scope: m,
                children: v,
                ...C
            } = g, y = ne.useRef(null), S = _e(_, y), w = s(l, m);
            return ne.useEffect(() => (w.itemMap.set(y, {
                ref: y,
                ...C
            }), () => void w.itemMap.delete(y))), f.jsx(xn, {
                [d]: "",
                ref: S,
                children: v
            })
        });
    p.displayName = l;

    function h(g) {
        const _ = s(e + "CollectionConsumer", g);
        return ne.useCallback(() => {
            const v = _.collectionRef.current;
            if (!v) return [];
            const C = Array.from(v.querySelectorAll(`[${d}]`));
            return Array.from(_.itemMap.values()).sort((w, T) => C.indexOf(w.ref.current) - C.indexOf(T.ref.current))
        }, [_.collectionRef, _.itemMap])
    }
    return [{
        Provider: a,
        Slot: c,
        ItemSlot: p
    }, h, r]
}
var Ws = "rovingFocusGroup.onEntryFocus",
    H4 = {
        bubbles: !1,
        cancelable: !0
    },
    ds = "RovingFocusGroup",
    [Oa, Zp, W4] = Yp(ds),
    [z4, Qp] = ki(ds, [W4]),
    [q4, K4] = z4(ds),
    Jp = u.forwardRef((e, t) => f.jsx(Oa.Provider, {
        scope: e.__scopeRovingFocusGroup,
        children: f.jsx(Oa.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: f.jsx(Y4, { ...e,
                ref: t
            })
        })
    }));
Jp.displayName = ds;
var Y4 = u.forwardRef((e, t) => {
        const {
            __scopeRovingFocusGroup: n,
            orientation: r,
            loop: o = !1,
            dir: s,
            currentTabStopId: a,
            defaultCurrentTabStopId: i,
            onCurrentTabStopIdChange: c,
            onEntryFocus: l,
            preventScrollOnEntryFocus: d = !1,
            ...p
        } = e, h = u.useRef(null), g = _e(t, h), _ = Wp(s), [m = null, v] = br({
            prop: a,
            defaultProp: i,
            onChange: c
        }), [C, y] = u.useState(!1), S = ze(l), w = Zp(n), T = u.useRef(!1), [O, E] = u.useState(0);
        return u.useEffect(() => {
            const I = h.current;
            if (I) return I.addEventListener(Ws, S), () => I.removeEventListener(Ws, S)
        }, [S]), f.jsx(q4, {
            scope: n,
            orientation: r,
            dir: _,
            loop: o,
            currentTabStopId: m,
            onItemFocus: u.useCallback(I => v(I), [v]),
            onItemShiftTab: u.useCallback(() => y(!0), []),
            onFocusableItemAdd: u.useCallback(() => E(I => I + 1), []),
            onFocusableItemRemove: u.useCallback(() => E(I => I - 1), []),
            children: f.jsx(pe.div, {
                tabIndex: C || O === 0 ? -1 : 0,
                "data-orientation": r,
                ...p,
                ref: g,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: N(e.onMouseDown, () => {
                    T.current = !0
                }),
                onFocus: N(e.onFocus, I => {
                    const j = !T.current;
                    if (I.target === I.currentTarget && j && !C) {
                        const F = new CustomEvent(Ws, H4);
                        if (I.currentTarget.dispatchEvent(F), !F.defaultPrevented) {
                            const z = w().filter(G => G.focusable),
                                q = z.find(G => G.active),
                                Q = z.find(G => G.id === m),
                                ie = [q, Q, ...z].filter(Boolean).map(G => G.ref.current);
                            th(ie, d)
                        }
                    }
                    T.current = !1
                }),
                onBlur: N(e.onBlur, () => y(!1))
            })
        })
    }),
    Xp = "RovingFocusGroupItem",
    eh = u.forwardRef((e, t) => {
        const {
            __scopeRovingFocusGroup: n,
            focusable: r = !0,
            active: o = !1,
            tabStopId: s,
            ...a
        } = e, i = mt(), c = s || i, l = K4(Xp, n), d = l.currentTabStopId === c, p = Zp(n), {
            onFocusableItemAdd: h,
            onFocusableItemRemove: g
        } = l;
        return u.useEffect(() => {
            if (r) return h(), () => g()
        }, [r, h, g]), f.jsx(Oa.ItemSlot, {
            scope: n,
            id: c,
            focusable: r,
            active: o,
            children: f.jsx(pe.span, {
                tabIndex: d ? 0 : -1,
                "data-orientation": l.orientation,
                ...a,
                ref: t,
                onMouseDown: N(e.onMouseDown, _ => {
                    r ? l.onItemFocus(c) : _.preventDefault()
                }),
                onFocus: N(e.onFocus, () => l.onItemFocus(c)),
                onKeyDown: N(e.onKeyDown, _ => {
                    if (_.key === "Tab" && _.shiftKey) {
                        l.onItemShiftTab();
                        return
                    }
                    if (_.target !== _.currentTarget) return;
                    const m = J4(_, l.orientation, l.dir);
                    if (m !== void 0) {
                        if (_.metaKey || _.ctrlKey || _.altKey || _.shiftKey) return;
                        _.preventDefault();
                        let C = p().filter(y => y.focusable).map(y => y.ref.current);
                        if (m === "last") C.reverse();
                        else if (m === "prev" || m === "next") {
                            m === "prev" && C.reverse();
                            const y = C.indexOf(_.currentTarget);
                            C = l.loop ? X4(C, y + 1) : C.slice(y + 1)
                        }
                        setTimeout(() => th(C))
                    }
                })
            })
        })
    });
eh.displayName = Xp;
var Z4 = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};

function Q4(e, t) {
    return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e
}

function J4(e, t, n) {
    const r = Q4(e.key, n);
    if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return Z4[r]
}

function th(e, t = !1) {
    const n = document.activeElement;
    for (const r of e)
        if (r === n || (r.focus({
                preventScroll: t
            }), document.activeElement !== n)) return
}

function X4(e, t) {
    return e.map((n, r) => e[(t + r) % e.length])
}
var eM = Jp,
    tM = eh,
    Ma = ["Enter", " "],
    nM = ["ArrowDown", "PageUp", "Home"],
    nh = ["ArrowUp", "PageDown", "End"],
    rM = [...nM, ...nh],
    oM = {
        ltr: [...Ma, "ArrowRight"],
        rtl: [...Ma, "ArrowLeft"]
    },
    sM = {
        ltr: ["ArrowLeft"],
        rtl: ["ArrowRight"]
    },
    Ir = "Menu",
    [hr, aM, iM] = Yp(Ir),
    [an, rh] = es(Ir, [iM, is, Qp]),
    kr = is(),
    oh = Qp(),
    [sh, Ut] = an(Ir),
    [cM, Er] = an(Ir),
    ah = e => {
        const {
            __scopeMenu: t,
            open: n = !1,
            children: r,
            dir: o,
            onOpenChange: s,
            modal: a = !0
        } = e, i = kr(t), [c, l] = u.useState(null), d = u.useRef(!1), p = ze(s), h = Wp(o);
        return u.useEffect(() => {
            const g = () => {
                    d.current = !0, document.addEventListener("pointerdown", _, {
                        capture: !0,
                        once: !0
                    }), document.addEventListener("pointermove", _, {
                        capture: !0,
                        once: !0
                    })
                },
                _ = () => d.current = !1;
            return document.addEventListener("keydown", g, {
                capture: !0
            }), () => {
                document.removeEventListener("keydown", g, {
                    capture: !0
                }), document.removeEventListener("pointerdown", _, {
                    capture: !0
                }), document.removeEventListener("pointermove", _, {
                    capture: !0
                })
            }
        }, []), f.jsx(Ri, { ...i,
            children: f.jsx(sh, {
                scope: t,
                open: n,
                onOpenChange: p,
                content: c,
                onContentChange: l,
                children: f.jsx(cM, {
                    scope: t,
                    onClose: u.useCallback(() => p(!1), [p]),
                    isUsingKeyboardRef: d,
                    dir: h,
                    modal: a,
                    children: r
                })
            })
        })
    };
ah.displayName = Ir;
var lM = "MenuAnchor",
    Di = u.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            ...r
        } = e, o = kr(n);
        return f.jsx(Rp, { ...o,
            ...r,
            ref: t
        })
    });
Di.displayName = lM;
var $i = "MenuPortal",
    [uM, ih] = an($i, {
        forceMount: void 0
    }),
    ch = e => {
        const {
            __scopeMenu: t,
            forceMount: n,
            children: r,
            container: o
        } = e, s = Ut($i, t);
        return f.jsx(uM, {
            scope: t,
            forceMount: n,
            children: f.jsx(ut, {
                present: n || s.open,
                children: f.jsx(wr, {
                    asChild: !0,
                    container: o,
                    children: r
                })
            })
        })
    };
ch.displayName = $i;
var He = "MenuContent",
    [dM, Ui] = an(He),
    lh = u.forwardRef((e, t) => {
        const n = ih(He, e.__scopeMenu),
            {
                forceMount: r = n.forceMount,
                ...o
            } = e,
            s = Ut(He, e.__scopeMenu),
            a = Er(He, e.__scopeMenu);
        return f.jsx(hr.Provider, {
            scope: e.__scopeMenu,
            children: f.jsx(ut, {
                present: r || s.open,
                children: f.jsx(hr.Slot, {
                    scope: e.__scopeMenu,
                    children: a.modal ? f.jsx(fM, { ...o,
                        ref: t
                    }) : f.jsx(pM, { ...o,
                        ref: t
                    })
                })
            })
        })
    }),
    fM = u.forwardRef((e, t) => {
        const n = Ut(He, e.__scopeMenu),
            r = u.useRef(null),
            o = _e(t, r);
        return u.useEffect(() => {
            const s = r.current;
            if (s) return Cf(s)
        }, []), f.jsx(Bi, { ...e,
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: n.open,
            disableOutsideScroll: !0,
            onFocusOutside: N(e.onFocusOutside, s => s.preventDefault(), {
                checkForDefaultPrevented: !1
            }),
            onDismiss: () => n.onOpenChange(!1)
        })
    }),
    pM = u.forwardRef((e, t) => {
        const n = Ut(He, e.__scopeMenu);
        return f.jsx(Bi, { ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            onDismiss: () => n.onOpenChange(!1)
        })
    }),
    Bi = u.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            loop: r = !1,
            trapFocus: o,
            onOpenAutoFocus: s,
            onCloseAutoFocus: a,
            disableOutsidePointerEvents: i,
            onEntryFocus: c,
            onEscapeKeyDown: l,
            onPointerDownOutside: d,
            onFocusOutside: p,
            onInteractOutside: h,
            onDismiss: g,
            disableOutsideScroll: _,
            ...m
        } = e, v = Ut(He, n), C = Er(He, n), y = kr(n), S = oh(n), w = aM(n), [T, O] = u.useState(null), E = u.useRef(null), I = _e(t, E, v.onContentChange), j = u.useRef(0), F = u.useRef(""), z = u.useRef(0), q = u.useRef(null), Q = u.useRef("right"), B = u.useRef(0), ie = _ ? di : u.Fragment, G = _ ? {
            as: xn,
            allowPinchZoom: !0
        } : void 0, re = D => {
            const be = F.current + D,
                Ee = w().filter(P => !P.disabled),
                ft = document.activeElement,
                pt = Ee.find(P => P.ref.current === ft) ? .textValue,
                Bt = Ee.map(P => P.textValue),
                L = AM(Bt, be, pt),
                $ = Ee.find(P => P.textValue === L) ? .ref.current;
            (function P(V) {
                F.current = V, window.clearTimeout(j.current), V !== "" && (j.current = window.setTimeout(() => P(""), 1e3))
            })(be), $ && setTimeout(() => $.focus())
        };
        u.useEffect(() => () => window.clearTimeout(j.current), []), df();
        const W = u.useCallback(D => Q.current === q.current ? .side && kM(D, q.current ? .area), []);
        return f.jsx(dM, {
            scope: n,
            searchRef: F,
            onItemEnter: u.useCallback(D => {
                W(D) && D.preventDefault()
            }, [W]),
            onItemLeave: u.useCallback(D => {
                W(D) || (E.current ? .focus(), O(null))
            }, [W]),
            onTriggerLeave: u.useCallback(D => {
                W(D) && D.preventDefault()
            }, [W]),
            pointerGraceTimerRef: z,
            onPointerGraceIntentChange: u.useCallback(D => {
                q.current = D
            }, []),
            children: f.jsx(ie, { ...G,
                children: f.jsx(ui, {
                    asChild: !0,
                    trapped: o,
                    onMountAutoFocus: N(s, D => {
                        D.preventDefault(), E.current ? .focus({
                            preventScroll: !0
                        })
                    }),
                    onUnmountAutoFocus: a,
                    children: f.jsx(Sr, {
                        asChild: !0,
                        disableOutsidePointerEvents: i,
                        onEscapeKeyDown: l,
                        onPointerDownOutside: d,
                        onFocusOutside: p,
                        onInteractOutside: h,
                        onDismiss: g,
                        children: f.jsx(eM, {
                            asChild: !0,
                            ...S,
                            dir: C.dir,
                            orientation: "vertical",
                            loop: r,
                            currentTabStopId: T,
                            onCurrentTabStopIdChange: O,
                            onEntryFocus: N(c, D => {
                                C.isUsingKeyboardRef.current || D.preventDefault()
                            }),
                            preventScrollOnEntryFocus: !0,
                            children: f.jsx(Op, {
                                role: "menu",
                                "aria-orientation": "vertical",
                                "data-state": Ih(v.open),
                                "data-radix-menu-content": "",
                                dir: C.dir,
                                ...y,
                                ...m,
                                ref: I,
                                style: {
                                    outline: "none",
                                    ...m.style
                                },
                                onKeyDown: N(m.onKeyDown, D => {
                                    const Ee = D.target.closest("[data-radix-menu-content]") === D.currentTarget,
                                        ft = D.ctrlKey || D.altKey || D.metaKey,
                                        pt = D.key.length === 1;
                                    Ee && (D.key === "Tab" && D.preventDefault(), !ft && pt && re(D.key));
                                    const Bt = E.current;
                                    if (D.target !== Bt || !rM.includes(D.key)) return;
                                    D.preventDefault();
                                    const $ = w().filter(P => !P.disabled).map(P => P.ref.current);
                                    nh.includes(D.key) && $.reverse(), wM($)
                                }),
                                onBlur: N(e.onBlur, D => {
                                    D.currentTarget.contains(D.target) || (window.clearTimeout(j.current), F.current = "")
                                }),
                                onPointerMove: N(e.onPointerMove, gr(D => {
                                    const be = D.target,
                                        Ee = B.current !== D.clientX;
                                    if (D.currentTarget.contains(be) && Ee) {
                                        const ft = D.clientX > B.current ? "right" : "left";
                                        Q.current = ft, B.current = D.clientX
                                    }
                                }))
                            })
                        })
                    })
                })
            })
        })
    });
lh.displayName = He;
var hM = "MenuGroup",
    Ni = u.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            ...r
        } = e;
        return f.jsx(pe.div, {
            role: "group",
            ...r,
            ref: t
        })
    });
Ni.displayName = hM;
var gM = "MenuLabel",
    uh = u.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            ...r
        } = e;
        return f.jsx(pe.div, { ...r,
            ref: t
        })
    });
uh.displayName = gM;
var Io = "MenuItem",
    zl = "menu.itemSelect",
    fs = u.forwardRef((e, t) => {
        const {
            disabled: n = !1,
            onSelect: r,
            ...o
        } = e, s = u.useRef(null), a = Er(Io, e.__scopeMenu), i = Ui(Io, e.__scopeMenu), c = _e(t, s), l = u.useRef(!1), d = () => {
            const p = s.current;
            if (!n && p) {
                const h = new CustomEvent(zl, {
                    bubbles: !0,
                    cancelable: !0
                });
                p.addEventListener(zl, g => r ? .(g), {
                    once: !0
                }), sf(p, h), h.defaultPrevented ? l.current = !1 : a.onClose()
            }
        };
        return f.jsx(dh, { ...o,
            ref: c,
            disabled: n,
            onClick: N(e.onClick, d),
            onPointerDown: p => {
                e.onPointerDown ? .(p), l.current = !0
            },
            onPointerUp: N(e.onPointerUp, p => {
                l.current || p.currentTarget ? .click()
            }),
            onKeyDown: N(e.onKeyDown, p => {
                const h = i.searchRef.current !== "";
                n || h && p.key === " " || Ma.includes(p.key) && (p.currentTarget.click(), p.preventDefault())
            })
        })
    });
fs.displayName = Io;
var dh = u.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            disabled: r = !1,
            textValue: o,
            ...s
        } = e, a = Ui(Io, n), i = oh(n), c = u.useRef(null), l = _e(t, c), [d, p] = u.useState(!1), [h, g] = u.useState("");
        return u.useEffect(() => {
            const _ = c.current;
            _ && g((_.textContent ? ? "").trim())
        }, [s.children]), f.jsx(hr.ItemSlot, {
            scope: n,
            disabled: r,
            textValue: o ? ? h,
            children: f.jsx(tM, {
                asChild: !0,
                ...i,
                focusable: !r,
                children: f.jsx(pe.div, {
                    role: "menuitem",
                    "data-highlighted": d ? "" : void 0,
                    "aria-disabled": r || void 0,
                    "data-disabled": r ? "" : void 0,
                    ...s,
                    ref: l,
                    onPointerMove: N(e.onPointerMove, gr(_ => {
                        r ? a.onItemLeave(_) : (a.onItemEnter(_), _.defaultPrevented || _.currentTarget.focus({
                            preventScroll: !0
                        }))
                    })),
                    onPointerLeave: N(e.onPointerLeave, gr(_ => a.onItemLeave(_))),
                    onFocus: N(e.onFocus, () => p(!0)),
                    onBlur: N(e.onBlur, () => p(!1))
                })
            })
        })
    }),
    mM = "MenuCheckboxItem",
    fh = u.forwardRef((e, t) => {
        const {
            checked: n = !1,
            onCheckedChange: r,
            ...o
        } = e;
        return f.jsx(_h, {
            scope: e.__scopeMenu,
            checked: n,
            children: f.jsx(fs, {
                role: "menuitemcheckbox",
                "aria-checked": ko(n) ? "mixed" : n,
                ...o,
                ref: t,
                "data-state": Gi(n),
                onSelect: N(o.onSelect, () => r ? .(ko(n) ? !0 : !n), {
                    checkForDefaultPrevented: !1
                })
            })
        })
    });
fh.displayName = mM;
var ph = "MenuRadioGroup",
    [_M, vM] = an(ph, {
        value: void 0,
        onValueChange: () => {}
    }),
    hh = u.forwardRef((e, t) => {
        const {
            value: n,
            onValueChange: r,
            ...o
        } = e, s = ze(r);
        return f.jsx(_M, {
            scope: e.__scopeMenu,
            value: n,
            onValueChange: s,
            children: f.jsx(Ni, { ...o,
                ref: t
            })
        })
    });
hh.displayName = ph;
var gh = "MenuRadioItem",
    mh = u.forwardRef((e, t) => {
        const {
            value: n,
            ...r
        } = e, o = vM(gh, e.__scopeMenu), s = n === o.value;
        return f.jsx(_h, {
            scope: e.__scopeMenu,
            checked: s,
            children: f.jsx(fs, {
                role: "menuitemradio",
                "aria-checked": s,
                ...r,
                ref: t,
                "data-state": Gi(s),
                onSelect: N(r.onSelect, () => o.onValueChange ? .(n), {
                    checkForDefaultPrevented: !1
                })
            })
        })
    });
mh.displayName = gh;
var Fi = "MenuItemIndicator",
    [_h, CM] = an(Fi, {
        checked: !1
    }),
    vh = u.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            forceMount: r,
            ...o
        } = e, s = CM(Fi, n);
        return f.jsx(ut, {
            present: r || ko(s.checked) || s.checked === !0,
            children: f.jsx(pe.span, { ...o,
                ref: t,
                "data-state": Gi(s.checked)
            })
        })
    });
vh.displayName = Fi;
var yM = "MenuSeparator",
    Ch = u.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            ...r
        } = e;
        return f.jsx(pe.div, {
            role: "separator",
            "aria-orientation": "horizontal",
            ...r,
            ref: t
        })
    });
Ch.displayName = yM;
var bM = "MenuArrow",
    yh = u.forwardRef((e, t) => {
        const {
            __scopeMenu: n,
            ...r
        } = e, o = kr(n);
        return f.jsx(Mp, { ...o,
            ...r,
            ref: t
        })
    });
yh.displayName = bM;
var ji = "MenuSub",
    [SM, bh] = an(ji),
    Sh = e => {
        const {
            __scopeMenu: t,
            children: n,
            open: r = !1,
            onOpenChange: o
        } = e, s = Ut(ji, t), a = kr(t), [i, c] = u.useState(null), [l, d] = u.useState(null), p = ze(o);
        return u.useEffect(() => (s.open === !1 && p(!1), () => p(!1)), [s.open, p]), f.jsx(Ri, { ...a,
            children: f.jsx(sh, {
                scope: t,
                open: r,
                onOpenChange: p,
                content: l,
                onContentChange: d,
                children: f.jsx(SM, {
                    scope: t,
                    contentId: mt(),
                    triggerId: mt(),
                    trigger: i,
                    onTriggerChange: c,
                    children: n
                })
            })
        })
    };
Sh.displayName = ji;
var rr = "MenuSubTrigger",
    wh = u.forwardRef((e, t) => {
        const n = Ut(rr, e.__scopeMenu),
            r = Er(rr, e.__scopeMenu),
            o = bh(rr, e.__scopeMenu),
            s = Ui(rr, e.__scopeMenu),
            a = u.useRef(null),
            {
                pointerGraceTimerRef: i,
                onPointerGraceIntentChange: c
            } = s,
            l = {
                __scopeMenu: e.__scopeMenu
            },
            d = u.useCallback(() => {
                a.current && window.clearTimeout(a.current), a.current = null
            }, []);
        return u.useEffect(() => d, [d]), u.useEffect(() => {
            const p = i.current;
            return () => {
                window.clearTimeout(p), c(null)
            }
        }, [i, c]), f.jsx(Di, {
            asChild: !0,
            ...l,
            children: f.jsx(dh, {
                id: o.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": n.open,
                "aria-controls": o.contentId,
                "data-state": Ih(n.open),
                ...e,
                ref: Xo(t, o.onTriggerChange),
                onClick: p => {
                    e.onClick ? .(p), !(e.disabled || p.defaultPrevented) && (p.currentTarget.focus(), n.open || n.onOpenChange(!0))
                },
                onPointerMove: N(e.onPointerMove, gr(p => {
                    s.onItemEnter(p), !p.defaultPrevented && !e.disabled && !n.open && !a.current && (s.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
                        n.onOpenChange(!0), d()
                    }, 100))
                })),
                onPointerLeave: N(e.onPointerLeave, gr(p => {
                    d();
                    const h = n.content ? .getBoundingClientRect();
                    if (h) {
                        const g = n.content ? .dataset.side,
                            _ = g === "right",
                            m = _ ? -5 : 5,
                            v = h[_ ? "left" : "right"],
                            C = h[_ ? "right" : "left"];
                        s.onPointerGraceIntentChange({
                            area: [{
                                x: p.clientX + m,
                                y: p.clientY
                            }, {
                                x: v,
                                y: h.top
                            }, {
                                x: C,
                                y: h.top
                            }, {
                                x: C,
                                y: h.bottom
                            }, {
                                x: v,
                                y: h.bottom
                            }],
                            side: g
                        }), window.clearTimeout(i.current), i.current = window.setTimeout(() => s.onPointerGraceIntentChange(null), 300)
                    } else {
                        if (s.onTriggerLeave(p), p.defaultPrevented) return;
                        s.onPointerGraceIntentChange(null)
                    }
                })),
                onKeyDown: N(e.onKeyDown, p => {
                    const h = s.searchRef.current !== "";
                    e.disabled || h && p.key === " " || oM[r.dir].includes(p.key) && (n.onOpenChange(!0), n.content ? .focus(), p.preventDefault())
                })
            })
        })
    });
wh.displayName = rr;
var Th = "MenuSubContent",
    Ah = u.forwardRef((e, t) => {
        const n = ih(He, e.__scopeMenu),
            {
                forceMount: r = n.forceMount,
                ...o
            } = e,
            s = Ut(He, e.__scopeMenu),
            a = Er(He, e.__scopeMenu),
            i = bh(Th, e.__scopeMenu),
            c = u.useRef(null),
            l = _e(t, c);
        return f.jsx(hr.Provider, {
            scope: e.__scopeMenu,
            children: f.jsx(ut, {
                present: r || s.open,
                children: f.jsx(hr.Slot, {
                    scope: e.__scopeMenu,
                    children: f.jsx(Bi, {
                        id: i.contentId,
                        "aria-labelledby": i.triggerId,
                        ...o,
                        ref: l,
                        align: "start",
                        side: a.dir === "rtl" ? "left" : "right",
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        trapFocus: !1,
                        onOpenAutoFocus: d => {
                            a.isUsingKeyboardRef.current && c.current ? .focus(), d.preventDefault()
                        },
                        onCloseAutoFocus: d => d.preventDefault(),
                        onFocusOutside: N(e.onFocusOutside, d => {
                            d.target !== i.trigger && s.onOpenChange(!1)
                        }),
                        onEscapeKeyDown: N(e.onEscapeKeyDown, d => {
                            a.onClose(), d.preventDefault()
                        }),
                        onKeyDown: N(e.onKeyDown, d => {
                            const p = d.currentTarget.contains(d.target),
                                h = sM[a.dir].includes(d.key);
                            p && h && (s.onOpenChange(!1), i.trigger ? .focus(), d.preventDefault())
                        })
                    })
                })
            })
        })
    });
Ah.displayName = Th;

function Ih(e) {
    return e ? "open" : "closed"
}

function ko(e) {
    return e === "indeterminate"
}

function Gi(e) {
    return ko(e) ? "indeterminate" : e ? "checked" : "unchecked"
}

function wM(e) {
    const t = document.activeElement;
    for (const n of e)
        if (n === t || (n.focus(), document.activeElement !== t)) return
}

function TM(e, t) {
    return e.map((n, r) => e[(t + r) % e.length])
}

function AM(e, t, n) {
    const o = t.length > 1 && Array.from(t).every(l => l === t[0]) ? t[0] : t,
        s = n ? e.indexOf(n) : -1;
    let a = TM(e, Math.max(s, 0));
    o.length === 1 && (a = a.filter(l => l !== n));
    const c = a.find(l => l.toLowerCase().startsWith(o.toLowerCase()));
    return c !== n ? c : void 0
}

function IM(e, t) {
    const {
        x: n,
        y: r
    } = e;
    let o = !1;
    for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
        const i = t[s].x,
            c = t[s].y,
            l = t[a].x,
            d = t[a].y;
        c > r != d > r && n < (l - i) * (r - c) / (d - c) + i && (o = !o)
    }
    return o
}

function kM(e, t) {
    if (!t) return !1;
    const n = {
        x: e.clientX,
        y: e.clientY
    };
    return IM(n, t)
}

function gr(e) {
    return t => t.pointerType === "mouse" ? e(t) : void 0
}
var EM = ah,
    xM = Di,
    RM = ch,
    OM = lh,
    MM = Ni,
    LM = uh,
    PM = fs,
    DM = fh,
    $M = hh,
    UM = mh,
    BM = vh,
    NM = Ch,
    FM = yh,
    jM = Sh,
    GM = wh,
    VM = Ah,
    Vi = "DropdownMenu",
    [HM, J8] = es(Vi, [rh]),
    Ae = rh(),
    [WM, kh] = HM(Vi),
    Eh = e => {
        const {
            __scopeDropdownMenu: t,
            children: n,
            dir: r,
            open: o,
            defaultOpen: s,
            onOpenChange: a,
            modal: i = !0
        } = e, c = Ae(t), l = u.useRef(null), [d = !1, p] = br({
            prop: o,
            defaultProp: s,
            onChange: a
        });
        return f.jsx(WM, {
            scope: t,
            triggerId: mt(),
            triggerRef: l,
            contentId: mt(),
            open: d,
            onOpenChange: p,
            onOpenToggle: u.useCallback(() => p(h => !h), [p]),
            modal: i,
            children: f.jsx(EM, { ...c,
                open: d,
                onOpenChange: p,
                dir: r,
                modal: i,
                children: n
            })
        })
    };
Eh.displayName = Vi;
var xh = "DropdownMenuTrigger",
    Rh = u.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            disabled: r = !1,
            ...o
        } = e, s = kh(xh, n), a = Ae(n);
        return f.jsx(xM, {
            asChild: !0,
            ...a,
            children: f.jsx(pe.button, {
                type: "button",
                id: s.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": s.open,
                "aria-controls": s.open ? s.contentId : void 0,
                "data-state": s.open ? "open" : "closed",
                "data-disabled": r ? "" : void 0,
                disabled: r,
                ...o,
                ref: Xo(t, s.triggerRef),
                onPointerDown: N(e.onPointerDown, i => {
                    !r && i.button === 0 && i.ctrlKey === !1 && (s.onOpenToggle(), s.open || i.preventDefault())
                }),
                onKeyDown: N(e.onKeyDown, i => {
                    r || (["Enter", " "].includes(i.key) && s.onOpenToggle(), i.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault())
                })
            })
        })
    });
Rh.displayName = xh;
var zM = "DropdownMenuPortal",
    Oh = e => {
        const {
            __scopeDropdownMenu: t,
            ...n
        } = e, r = Ae(t);
        return f.jsx(RM, { ...r,
            ...n
        })
    };
Oh.displayName = zM;
var Mh = "DropdownMenuContent",
    Lh = u.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...r
        } = e, o = kh(Mh, n), s = Ae(n), a = u.useRef(!1);
        return f.jsx(OM, {
            id: o.contentId,
            "aria-labelledby": o.triggerId,
            ...s,
            ...r,
            ref: t,
            onCloseAutoFocus: N(e.onCloseAutoFocus, i => {
                a.current || o.triggerRef.current ? .focus(), a.current = !1, i.preventDefault()
            }),
            onInteractOutside: N(e.onInteractOutside, i => {
                const c = i.detail.originalEvent,
                    l = c.button === 0 && c.ctrlKey === !0,
                    d = c.button === 2 || l;
                (!o.modal || d) && (a.current = !0)
            }),
            style: { ...e.style,
                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
Lh.displayName = Mh;
var qM = "DropdownMenuGroup",
    KM = u.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...r
        } = e, o = Ae(n);
        return f.jsx(MM, { ...o,
            ...r,
            ref: t
        })
    });
KM.displayName = qM;
var YM = "DropdownMenuLabel",
    Ph = u.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...r
        } = e, o = Ae(n);
        return f.jsx(LM, { ...o,
            ...r,
            ref: t
        })
    });
Ph.displayName = YM;
var ZM = "DropdownMenuItem",
    Dh = u.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...r
        } = e, o = Ae(n);
        return f.jsx(PM, { ...o,
            ...r,
            ref: t
        })
    });
Dh.displayName = ZM;
var QM = "DropdownMenuCheckboxItem",
    $h = u.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...r
        } = e, o = Ae(n);
        return f.jsx(DM, { ...o,
            ...r,
            ref: t
        })
    });
$h.displayName = QM;
var JM = "DropdownMenuRadioGroup",
    Uh = u.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...r
        } = e, o = Ae(n);
        return f.jsx($M, { ...o,
            ...r,
            ref: t
        })
    });
Uh.displayName = JM;
var XM = "DropdownMenuRadioItem",
    Bh = u.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...r
        } = e, o = Ae(n);
        return f.jsx(UM, { ...o,
            ...r,
            ref: t
        })
    });
Bh.displayName = XM;
var e9 = "DropdownMenuItemIndicator",
    Nh = u.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...r
        } = e, o = Ae(n);
        return f.jsx(BM, { ...o,
            ...r,
            ref: t
        })
    });
Nh.displayName = e9;
var t9 = "DropdownMenuSeparator",
    Fh = u.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...r
        } = e, o = Ae(n);
        return f.jsx(NM, { ...o,
            ...r,
            ref: t
        })
    });
Fh.displayName = t9;
var n9 = "DropdownMenuArrow",
    r9 = u.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...r
        } = e, o = Ae(n);
        return f.jsx(FM, { ...o,
            ...r,
            ref: t
        })
    });
r9.displayName = n9;
var o9 = e => {
        const {
            __scopeDropdownMenu: t,
            children: n,
            open: r,
            onOpenChange: o,
            defaultOpen: s
        } = e, a = Ae(t), [i = !1, c] = br({
            prop: r,
            defaultProp: s,
            onChange: o
        });
        return f.jsx(jM, { ...a,
            open: i,
            onOpenChange: c,
            children: n
        })
    },
    s9 = "DropdownMenuSubTrigger",
    jh = u.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...r
        } = e, o = Ae(n);
        return f.jsx(GM, { ...o,
            ...r,
            ref: t
        })
    });
jh.displayName = s9;
var a9 = "DropdownMenuSubContent",
    Gh = u.forwardRef((e, t) => {
        const {
            __scopeDropdownMenu: n,
            ...r
        } = e, o = Ae(n);
        return f.jsx(VM, { ...o,
            ...r,
            ref: t,
            style: { ...e.style,
                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
Gh.displayName = a9;
var Vh = Eh,
    Hh = Rh,
    Wh = Oh,
    i9 = Lh,
    c9 = Ph,
    ql = Dh,
    zh = $h,
    l9 = Uh,
    u9 = Bh,
    qh = Nh,
    d9 = Fh,
    f9 = o9,
    p9 = jh,
    h9 = Gh;
const g9 = e => u.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, u.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41422 13L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12Z",
        fill: "currentColor"
    })),
    m9 = e => u.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, u.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z",
        fill: "currentColor"
    })),
    _9 = e => u.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, u.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12C17 12.2652 16.8946 12.5196 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z",
        fill: "currentColor"
    }));

function v9({
    className: e
}) {
    return f.jsx(_9, {
        className: Z(e, "rtl:-scale-x-100")
    })
}

function X8({
    className: e
}) {
    return f.jsx(m9, {
        className: Z(e, "rtl:-scale-x-100")
    })
}

function eL({
    className: e
}) {
    return f.jsx(g9, {
        className: Z(e, "rtl:-scale-x-100")
    })
}
const C9 = lt.button `
text-token-text-primary border border-transparent inline-flex h-9 items-center justify-center gap-1 rounded-lg bg-white px-3 text-sm dark:transparent dark:bg-transparent
leading-none outline-none cursor-pointer
hover:bg-token-main-surface-secondary dark:hover:bg-token-main-surface-secondary
focus-visible:bg-token-main-surface-secondary
radix-state-active:text-token-text-secondary
radix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:text-token-text-tertiary dark:radix-disabled:bg-transparent
`,
    Kh = lt.div `flex gap-2 items-center m-1.5 rounded p-2.5 text-sm cursor-pointer focus-visible:outline-0 hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary radix-disabled:pointer-events-none radix-disabled:opacity-50 group relative`,
    Eo = lt(Kh)
`${e=>e.$spoofHovered?"bg-token-main-surface-secondary":""}
hover:bg-[#f5f5f5] focus-visible:bg-[#f5f5f5]
radix-state-open:bg-[#f5f5f5]
dark:hover:bg-token-main-surface-secondary
dark:focus-visible:bg-token-main-surface-secondary
rounded-md my-0 px-3 mx-2
dark:radix-state-open:bg-token-main-surface-secondary gap-2.5 py-3`, Yh = lt.div `z-50 max-w-xs rounded-2xl popover bg-token-main-surface-primary shadow-lg will-change-[opacity,transform] radix-side-bottom:animate-slideUpAndFade radix-side-left:animate-slideRightAndFade radix-side-right:animate-slideLeftAndFade radix-side-top:animate-slideDownAndFade border border-token-border-light py-2`, tL = lt.div `popover overflow-auto rounded-xl border border-token-border-light bg-token-main-surface-primary p-2 shadow-xl`, Zh = ne.forwardRef(function({
    children: t,
    className: n,
    size: r = "default",
    align: o,
    fitToContentWidth: s = !0,
    removeVerticalPadding: a = !1,
    addBottomGradient: i = !1,
    ...c
}, l) {
    const [d, p] = u.useState(!1);
    return f.jsx(Yh, {
        ref: l,
        $as: i9,
        sideOffset: 4,
        align: o ? ? "start",
        collisionPadding: 10,
        className: Z({
            "min-w-[min(280px,95vw)]": r === "default",
            "min-w-[min(340px,95vw)]": r === "large",
            "min-w-[min(125px,95vw)]": r === "small",
            "min-w-[min(200px,95vw)]": r === "medium"
        }, "overflow-hidden py-0", n),
        ...c,
        children: f.jsxs("div", {
            className: Z("max-h-[var(--radix-dropdown-menu-content-available-height)] overflow-y-auto", s && "min-w-fit", !a && "py-2"),
            children: [t, i && f.jsxs(f.Fragment, {
                children: [f.jsx(G4, {
                    setIsScrolledToEdge: p
                }, "dropdownBottomEdgeScrollObserver"), f.jsx("div", {
                    className: "pointer-events-none absolute bottom-0 left-0 right-0 h-20 transition-opacity duration-100",
                    style: {
                        background: "linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--main-surface-primary))",
                        opacity: d ? 1 : 0
                    }
                })]
            })]
        })
    })
});

function y9(e, t) {
    return f.jsx(C9, {
        $as: Hh,
        ref: t,
        ...e,
        onFocusCapture: n => {
            n.stopPropagation(), e.onFocusCapture ? .(n)
        }
    })
}

function b9({
    onSelect: e,
    icon: t,
    className: n,
    color: r,
    size: o = "default",
    testId: s,
    ...a
}, i) {
    const c = t;
    return t ? f.jsxs(Eo, {
        $as: ql,
        ref: i,
        onSelect: e,
        className: Z(r === "danger" && "text-token-text-error", o === "large" && "gap-3", n),
        "data-testid": s,
        ...a,
        children: [f.jsx("div", {
            className: Z("flex items-center justify-center", r === "danger" && "text-token-text-error", r !== "danger" && "text-token-text-secondary", o === "default" && "h-5 w-5", o === "large" && "h-5 w-7"),
            children: u.isValidElement(t) ? t : f.jsx(c, {
                className: "h-5 w-5 shrink-0"
            })
        }), a.children]
    }) : f.jsx(Eo, {
        $as: ql,
        ref: i,
        onSelect: e,
        className: Z(r === "danger" && "text-token-text-error", n),
        ...a
    })
}

function S9({
    className: e,
    noMargin: t,
    ...n
}) {
    return f.jsx(d9, {
        className: Z("my-1 h-px bg-token-border-light", !t && "mx-5 my-1", e),
        ...n
    })
}

function w9({
    onSelect: e,
    children: t,
    ...n
}) {
    return f.jsxs(Kh, {
        $as: u9,
        onSelect: e,
        ...n,
        children: [f.jsx(qh, {
            className: "absolute",
            children: f.jsx(B4, {
                className: "icon-sm"
            })
        }), f.jsx("span", {
            className: "ml-6",
            children: t
        })]
    })
}

function T9(e) {
    const {
        className: t,
        ...n
    } = e;
    return f.jsx(Yh, {
        $as: h9,
        className: Z("mt-2 max-h-[calc(100vh-300px)] min-w-[100px] overflow-auto", t),
        sideOffset: 8,
        alignOffset: -16,
        collisionPadding: 20,
        ...n
    })
}

function A9(e) {
    const {
        icon: t,
        children: n,
        trailingContent: r,
        ...o
    } = e;
    return f.jsxs(Eo, {
        $as: p9,
        ...o,
        children: [t && f.jsx("div", {
            className: "flex h-5 w-5 items-center justify-center text-token-text-secondary",
            children: f.jsx(t, {
                className: "h-5 w-5 flex-shrink-0"
            })
        }), n, f.jsxs("div", {
            className: "ml-auto flex items-center text-token-text-tertiary group-data-[disabled]:opacity-50",
            children: [r, f.jsx(v9, {
                className: "icon-md"
            })]
        })]
    })
}

function nL({
    triggerButton: e,
    children: t,
    size: n = "default",
    open: r,
    onOpenChange: o,
    contentAlign: s,
    side: a,
    sideOffset: i = 0,
    alignOffset: c = 0,
    contentClassName: l,
    testId: d
}) {
    const [p, h] = u.useState(r), g = u.useRef(null), _ = r !== void 0, m = y => {
        _ || h(y), o ? .(y)
    }, {
        triggerRef: v,
        container: C
    } = V4({
        isOpen: !!p || !!r,
        onClose: () => m(!1)
    });
    return f.jsxs(Vh, {
        modal: !1,
        open: r ? ? p,
        onOpenChange: m,
        children: [f.jsx(Hh, {
            asChild: !0,
            ref: v,
            "data-testid": `${d}-button`,
            children: e
        }), f.jsx(Wh, {
            container: C,
            children: f.jsx(Zh, {
                ref: g,
                size: n,
                align: s,
                alignOffset: c,
                side: a,
                sideOffset: i,
                className: l,
                children: t
            })
        })]
    })
}

function I9({
    children: e
}) {
    return f.jsx(c9, {
        className: "mx-2 my-0 px-2 text-xs font-semibold text-token-text-secondary",
        children: e
    })
}
const Qh = u.createContext(null);

function k9(e) {
    const {
        children: t,
        ...n
    } = e, r = u.useRef(null);
    return f.jsxs(Vh, { ...n,
        children: [f.jsx("span", {
            className: "hidden",
            ref: r
        }), f.jsx(Qh.Provider, {
            value: r.current ? .ownerDocument ? ? null,
            children: t
        })]
    })
}

function E9(e) {
    const {
        children: t,
        ...n
    } = e, r = u.useContext(Qh);
    return f.jsx(Wh, {
        container: r ? .body,
        ...n,
        children: t
    })
}

function x9({
    checked: e,
    onCheckedChange: t,
    children: n,
    onClick: r,
    ...o
}) {
    return f.jsx(Eo, {
        $as: zh,
        checked: e,
        onCheckedChange: t,
        onClick: r,
        ...o,
        children: f.jsxs("div", {
            className: "flex w-full flex-row items-center justify-between",
            children: [n, f.jsx(qh, {
                children: f.jsx(Kp, {
                    className: "icon-sm"
                })
            })]
        })
    })
}

function R9({
    checked: e,
    onCheckedChange: t,
    children: n,
    onClick: r,
    className: o,
    ...s
}) {
    const a = i => {
        i.preventDefault()
    };
    return f.jsx(zh, {
        checked: e,
        onCheckedChange: t,
        onSelect: a,
        onClick: r,
        className: Z(o, "mx-2 flex cursor-pointer items-center rounded-md p-3 text-sm", "hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary", "focus-visible:outline-0 radix-disabled:pointer-events-none radix-disabled:opacity-50", "radix-state-open:bg-token-main-surface-secondary"),
        ...s,
        children: f.jsxs("div", {
            className: "flex w-full flex-row items-center justify-between",
            children: [n, e ? f.jsx(Kp, {
                className: "icon-sm text-token-text-primary"
            }) : f.jsx(N4, {
                className: "icon-sm text-token-text-tertiary"
            })]
        })
    })
}
const rL = {
        Root: k9,
        Trigger: u.forwardRef(y9),
        Portal: E9,
        Content: Zh,
        Item: ne.forwardRef(b9),
        Separator: S9,
        RadioGroup: l9,
        RadioItem: w9,
        Sub: f9,
        SubContent: T9,
        SubMenuTrigger: A9,
        Label: I9,
        CheckboxItem: x9,
        MultiSelectCheckboxItem: R9
    },
    oL = e => u.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, u.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z",
        fill: "currentColor"
    })),
    sL = e => u.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, u.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6.00633 5.5C6.02321 5.53319 6.07042 5.60366 6.19525 5.70906C6.42458 5.9027 6.81573 6.12215 7.38659 6.32603C8.5196 6.73067 10.1506 7 12 7C13.8494 7 15.4804 6.73067 16.6134 6.32603C17.1843 6.12215 17.5754 5.9027 17.8048 5.70906C17.9296 5.60366 17.9768 5.53319 17.9937 5.5C17.9768 5.46681 17.9296 5.39634 17.8048 5.29094C17.5754 5.0973 17.1843 4.87785 16.6134 4.67397C15.4804 4.26933 13.8494 4 12 4C10.1506 4 8.5196 4.26933 7.38659 4.67397C6.81573 4.87785 6.42458 5.0973 6.19525 5.29094C6.07042 5.39634 6.02321 5.46681 6.00633 5.5ZM18 7.91726C17.7726 8.02403 17.5333 8.12123 17.2861 8.20951C15.8856 8.70968 14.0166 9 12 9C9.98341 9 8.1144 8.70968 6.71392 8.20951C6.46674 8.12123 6.22738 8.02403 6 7.91726V11.9866C6.00813 12.0073 6.03931 12.0661 6.14259 12.1624C6.31976 12.3277 6.63181 12.5252 7.10609 12.7189C8.04837 13.1039 9.43027 13.3932 11.051 13.476C11.6026 13.5042 12.0269 13.9741 11.9987 14.5257C11.9705 15.0773 11.5005 15.5016 10.949 15.4734C9.17744 15.3829 7.55934 15.0646 6.34969 14.5704C6.23097 14.5219 6.11419 14.4709 6 14.4173V18.4866C6.00813 18.5073 6.03931 18.5661 6.14259 18.6624C6.31976 18.8277 6.63181 19.0252 7.10609 19.2189C8.04837 19.6039 9.43027 19.8932 11.051 19.976C11.6026 20.0042 12.0269 20.4741 11.9987 21.0257C11.9705 21.5773 11.5005 22.0016 10.949 21.9734C9.17744 21.8829 7.55934 21.5646 6.34969 21.0704C5.74801 20.8246 5.19611 20.5146 4.77833 20.1249C4.35948 19.7341 4 19.1866 4 18.5V5.5C4 4.74631 4.43048 4.16346 4.90494 3.76283C5.38405 3.35829 6.01803 3.03902 6.71392 2.79049C8.1144 2.29032 9.98341 2 12 2C14.0166 2 15.8856 2.29032 17.2861 2.79049C17.982 3.03902 18.616 3.35829 19.0951 3.76283C19.5695 4.16346 20 4.74631 20 5.5V10C20 10.5523 19.5523 11 19 11C18.4477 11 18 10.5523 18 10V7.91726ZM17.5 13C18.0523 13 18.5 13.4477 18.5 14V14.6707C18.851 14.7948 19.172 14.9823 19.4492 15.2195L20.0308 14.8837C20.5091 14.6075 21.1207 14.7714 21.3968 15.2497C21.673 15.728 21.5091 16.3396 21.0308 16.6157L20.4499 16.9511C20.4828 17.1291 20.5 17.3125 20.5 17.5C20.5 17.6873 20.4828 17.8707 20.45 18.0485L21.0308 18.3838C21.5091 18.6599 21.6729 19.2715 21.3968 19.7498C21.1206 20.2281 20.5091 20.392 20.0308 20.1158L19.4495 19.7803C19.1722 20.0176 18.8511 20.2052 18.5 20.3293V21C18.5 21.5523 18.0523 22 17.5 22C16.9477 22 16.5 21.5523 16.5 21V20.3293C16.1489 20.2052 15.8277 20.0176 15.5504 19.7802L14.969 20.1159C14.4907 20.392 13.8791 20.2282 13.603 19.7499C13.3269 19.2716 13.4907 18.66 13.969 18.3839L14.55 18.0484C14.5172 17.8706 14.5 17.6873 14.5 17.5C14.5 17.3127 14.5172 17.1294 14.55 16.9515L13.9691 16.6161C13.4908 16.34 13.3269 15.7284 13.6031 15.2501C13.8792 14.7718 14.4908 14.608 14.9691 14.8841L15.5504 15.2197C15.8278 14.9824 16.1489 14.7948 16.5 14.6707V14C16.5 13.4477 16.9477 13 17.5 13ZM16.624 17.0174C16.6274 17.0117 16.6308 17.0059 16.6342 17.0001C16.6374 16.9946 16.6405 16.989 16.6436 16.9834C16.8187 16.6937 17.1367 16.5 17.5 16.5C17.8645 16.5 18.1835 16.6951 18.3583 16.9865C18.3607 16.9909 18.3632 16.9953 18.3658 16.9997C18.3685 17.0044 18.3713 17.0091 18.3741 17.0138C18.4543 17.1577 18.5 17.3235 18.5 17.5C18.5 17.6737 18.4557 17.8371 18.3778 17.9794C18.3737 17.9861 18.3697 17.9929 18.3657 17.9998C18.3619 18.0064 18.3581 18.0131 18.3545 18.0198C18.1789 18.3077 17.8619 18.5 17.5 18.5C17.1362 18.5 16.8178 18.3058 16.6428 18.0154C16.64 18.0102 16.6371 18.005 16.6341 17.9999C16.631 17.9945 16.6278 17.9891 16.6246 17.9838C16.5452 17.8404 16.5 17.6755 16.5 17.5C16.5 17.325 16.545 17.1605 16.624 17.0174Z",
        fill: "currentColor"
    })),
    aL = e => u.createElement("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e
    }, u.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.29291 2.29289C2.68343 1.90237 3.3166 1.90237 3.70712 2.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L17.7785 19.1927C16.2039 20.2404 14.274 21 12 21C8.84584 21 6.36062 19.541 4.5586 17.8792C2.76162 16.222 1.58481 14.312 1.01235 13.2562C0.585075 12.4681 0.585779 11.5305 1.01269 10.7432C1.5904 9.67778 2.79205 7.72646 4.63588 6.05008L2.29291 3.70711C1.90238 3.31658 1.90238 2.68342 2.29291 2.29289ZM6.05192 7.46612C4.40725 8.93862 3.30718 10.7074 2.77085 11.6965C2.66598 11.8899 2.66608 12.1102 2.77055 12.3029C3.28868 13.2585 4.34193 14.9588 5.91447 16.4089C7.48198 17.8545 9.50575 19 12 19C13.6494 19 15.09 18.5001 16.3303 17.7445L14.396 15.8102C12.6575 16.9057 10.3324 16.6963 8.81803 15.182C7.3037 13.6676 7.09428 11.3425 8.18977 9.60397L6.05192 7.46612ZM9.67223 11.0864L12.9136 14.3278C12.0164 14.6793 10.9571 14.4927 10.2322 13.7678C9.50734 13.0429 9.32067 11.9836 9.67223 11.0864Z",
        fill: "currentColor"
    }), u.createElement("path", {
        d: "M10.2234 5.19987C10.7835 5.07151 11.3753 5 12 5C14.4943 5 16.5181 6.1455 18.0856 7.59105C19.6581 9.04124 20.7114 10.7415 21.2295 11.6971C21.3335 11.8889 21.3338 12.1105 21.2285 12.3047C20.9449 12.8276 20.496 13.5829 19.8836 14.4005C19.5526 14.8426 19.6425 15.4693 20.0846 15.8004C20.5266 16.1315 21.1534 16.0415 21.4844 15.5995C22.1677 14.6872 22.6678 13.8459 22.9866 13.2582C23.4131 12.4717 23.4154 11.5327 22.9877 10.7438C22.4152 9.68799 21.2384 7.77798 19.4414 6.1208C17.6394 4.45899 15.1542 3 12 3C11.2211 3 10.4795 3.08934 9.77664 3.25041C9.23831 3.37379 8.90192 3.9102 9.02529 4.44853C9.14866 4.98686 9.68508 5.32325 10.2234 5.19987Z",
        fill: "currentColor"
    })),
    iL = ({
        disabled: e,
        ...t
    }) => e ? f.jsx(f.Fragment, {
        children: t.children
    }) : f.jsx(O9, { ...t
    }),
    O9 = ({
        label: e,
        secondaryLabel: t,
        contentClassName: n,
        customPaddingClassName: r,
        customBorderClassName: o,
        customBackgroundColorClassName: s,
        theme: a = "default",
        cornerRadius: i = "lg",
        side: c = "bottom",
        sideOffset: l = 10,
        align: d = "center",
        alignOffset: p = 0,
        withArrow: h = !0,
        wide: g = !1,
        size: _ = "small",
        interactive: m = !1,
        usePortal: v = !0,
        className: C,
        children: y,
        delayDuration: S = 300,
        closeOnOutsideClick: w = !0,
        open: T,
        onOpenChange: O,
        isLeftArrow: E = !1,
        labelTextAlign: I = "center",
        customPrimaryLabelColorStyle: j,
        customSecondaryLabelColorStyle: F
    }) => {
        const [z, q] = ne.useState(null);
        if (!e) return f.jsx("span", {
            className: C,
            children: y
        });
        let Q, B;
        switch (a) {
            case "blue":
                Q = "", B = "bg-blue-selection";
                break;
            case "white":
                Q = "", B = "bg-white";
                break;
            case "primary":
                Q = "", B = "bg-token-main-surface-primary";
                break;
            case "default":
                Q = "border-white/10 dark:border", B = "bg-gray-950"
        }
        o != null && (Q = o), s != null && (B = s);
        let ie = j === "primary" ? "text-default-text-primary" : "text-gray-100",
            G = F === "secondary" ? "text-gray-700 dark:text-gray-400" : "text-gray-400",
            re = I === "left" ? "text-left" : "text-center";
        const W = f.jsxs(m4, {
            collisionPadding: 8,
            onPointerDownOutside: w ? void 0 : D => D.preventDefault(),
            side: c,
            sideOffset: l,
            alignOffset: p,
            align: d,
            className: Z("relative z-50 select-none shadow-xs transition-opacity", r ? ? "px-3 py-2", `rounded-${i}`, !h && "overflow-hidden", Q, B, g ? "max-w-sm" : "max-w-xs", n),
            children: [f.jsx("span", {
                className: Z(`flex items-center whitespace-pre-wrap font-semibold normal-case ${re} ${ie}`, {
                    "text-xs": _ === "xsmall",
                    "text-sm": _ === "small"
                }),
                children: e
            }), t && f.jsx("span", {
                className: Z(`flex items-center whitespace-pre-wrap ${re} ${G}`, {
                    "text-xs": _ === "xsmall",
                    "text-sm": _ === "small"
                }),
                children: t
            }), h && f.jsx(_4, {
                asChild: !0,
                children: E ? f.jsx(L9, {
                    className: B
                }) : f.jsx(M9, {
                    className: B
                })
            })]
        });
        return f.jsxs(p4, {
            delayDuration: S,
            disableHoverableContent: !m,
            open: T,
            onOpenChange: O,
            children: [!z && f.jsx("span", {
                className: "hidden",
                ref: D => {
                    D && q(D.ownerDocument)
                }
            }), f.jsx(h4, {
                asChild: !0,
                children: f.jsx("span", {
                    className: C,
                    children: y
                })
            }), v && z ? f.jsx(g4, {
                container: z.body,
                children: W
            }) : W]
        })
    },
    M9 = lt.div `relative top-[-4px] h-2 w-2 rotate-45 transform shadow-xs dark:border-r dark:border-b border-white/10`,
    L9 = lt.div `relative top-[-4px] right-[-135px] h-2 w-2 rotate-45 transform shadow-xs dark:border-r dark:border-b border-white/10`;
lt.button `flex items-center opacity-80 hover:opacity-100 transition h-full`;
const P9 = ["alfa", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india", "juliett", "kilo", "lima", "mike", "november", "oscar", "papa", "quebec", "romeo", "sierra", "tango", "uniform", "victor", "whiskey", "xray", "yankee", "zulu", "latest"];
new Set(P9);

function D9() {
    return null
}

function $9(e, t) {
    const n = u.lazy(async () => {
            try {
                const o = await e();
                return "default" in o ? o : {
                    default: o
                }
            } catch (o) {
                return M.addAction("Failed importing dynamic component", {
                    error: o
                }), {
                    default: t ? .fallback ? ? D9
                }
            }
        }),
        r = t ? .loading;
    return function(s) {
        const a = f.jsx(u.Suspense, {
            fallback: r == null ? null : f.jsx(r, { ...s
            }),
            children: f.jsx(n, { ...s
            })
        });
        return f.jsx(Iu, {
            children: a
        })
    }
}
const Wr = (e, t, n = {}) => {
    const r = {
        level: e,
        message: String(t),
        ...n
    };
    t instanceof Error && (r.error = t), r.error instanceof Error && (r.error = r.error.stack ? ? String(r.error));
    try {
        console[e](r)
    } catch {
        La.error({
            level: "error",
            message: "Error stringifying log object." + (typeof r.message == "string" ? ` Message: ${r.message}` : ""),
            request_id: r.request_id
        })
    }
};
const La = {
        info: (...e) => Wr("info", ...e),
        error: (...e) => Wr("error", ...e),
        warn: (...e) => Wr("warn", ...e),
        debug: (...e) => Wr("debug", ...e)
    },
    U9 = 60 * 60 * 24 * 30 * 3,
    B9 = $9(() => R(() =>
        import ("./kwedh7njyzfektql.js"), __vite__mapDeps([8, 1, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26])).then(e => e.GlobalModalsComponent));
gk();

function N9() {
    return i2(), null
}
_u && R(() =>
    import ("./i754vzey6dub5533.js"), __vite__mapDeps([27, 1])).then(e => e.initDesktop());
vr("https://chatgpt.com", "import.meta.env.VITE_APP_URL");

function cL({
    Component: e,
    pageProps: t
}) {
    const {
        userCountry: n,
        cluster: r
    } = t;
    Fe.setGlobalContextProperty("cluster", r);
    const [o, s] = u.useState(!1), a = xo();
    u.useEffect(() => {
        window._oaiHandleSessionExpired = function(c, l) {
            window.location.href.includes("/auth/login") || (s(!0), me.logEvent(te.forceLogInModal, {
                content: `${c}: ${l}`
            }))
        }
    }, []);

    function i(c) {
        try {
            const l = c.match(/^\/share\/(.+)$/);
            let d = X.getCookie(K.SharedConversationId);
            if (!d && l && (d = l[1], X.setCookie(K.SharedConversationId, d, {
                    maxAge: U9
                })), typeof d == "string" && d && J.getUser() ? .customIDs) {
                const p = J.getUser();
                p ? .customIDs && (p.customIDs.shared_conversation_id = d)
            }
        } catch (l) {
            l instanceof Error ? La.error("Error in shared conversation cookie code:", {
                message: l.message,
                stack: l.stack
            }) : La.error("Unknown error in shared conversation cookie code:", {
                error: l
            })
        }
    }
    return u.useEffect(() => {
        i(a.pathname), me.logPageView(), J.logEvent("chatgpt_page_view", null, sa())
    }, [a.pathname, a.search, a.hash]), f.jsx(f.Fragment, {
        children: f.jsx(h2, {
            name: "ui_boundary_error",
            fallback: ({
                resetError: c,
                componentStack: l,
                error: d
            }) => f.jsx(Fm, {
                resetError: c,
                componentStack: l,
                error: d
            }),
            children: f.jsx(A4, {
                userCountry: n,
                children: f.jsxs(O4, {
                    children: [f.jsx(e, { ...t
                    }), f.jsx(N9, {}), f.jsx(F9, {
                        isOpen: o,
                        onLogInClick: () => {
                            s(!1)
                        }
                    }), f.jsx(B9, {}), f.jsx(P4, {}), null, f.jsx(U4, {})]
                })
            })
        })
    })
}
const F9 = ({
        isOpen: e,
        onLogInClick: t
    }) => {
        const n = en();
        return f.jsx(j3, {
            isOpen: e,
            icon: va,
            title: n.formatMessage(zs.forceLogInModalTitle),
            description: n.formatMessage(zs.forceLogInModalDescription),
            type: "warning",
            onClose: _2,
            primaryButton: f.jsx(vn.Button, {
                onClick: async () => {
                    const r = await ru.signOut({
                        redirect: !1,
                        callbackUrl: `/auth/login?next=${encodeURIComponent(location.pathname+location.search+location.hash)}`
                    });
                    location.href = r.url, t()
                },
                title: n.formatMessage(zs.forceLogInModalButton)
            })
        })
    },
    zs = {
        forceLogInModalTitle: {
            id: "App.forceLogInModalTitle",
            defaultMessage: "Your session has expired"
        },
        forceLogInModalDescription: {
            id: "App.forceLogInModalDescription",
            defaultMessage: "Please log in again to continue using the app."
        },
        forceLogInModalButton: {
            id: "App.forceLogInModalButton",
            defaultMessage: "Log in"
        }
    },
    lL = u.createContext({
        cspNonce: ""
    }),
    j9 = 30;

function uL() {
    const e = Ot.getItem(Kt.LastPageLoadDate),
        t = new Date,
        n = typeof e == "string" ? new Date(e) : null,
        r = Math.min(n != null ? Math.floor((t.getTime() - n.getTime()) / (1e3 * 60 * 60)) : 1 / 0, j9 * 24),
        o = Math.floor(r / 24);
    Ot.setItem(Kt.LastPageLoadDate, t.toISOString()), M.addAction("time_since_last_page_load", {
        hoursSinceLastPageLoad: r,
        daysSinceLastPageLoad: o
    })
}
const Kl = "rq:";

function G9(e) {
    return e != null && typeof e == "object" && "then" in e && typeof e.then == "function"
}

function V9(e) {
    const t = [],
        n = [];
    for (const r of e)
        if (r.data) {
            for (const [o, s] of Object.entries(r.data))
                if (o.startsWith(Kl)) {
                    const a = o.substring(Kl.length);
                    G9(s) ? n.push({
                        queryHash: a,
                        queryKey: JSON.parse(a),
                        state: {
                            fetchStatus: "fetching",
                            status: "pending"
                        },
                        promise: s
                    }) : t.push({
                        queryHash: a,
                        queryKey: JSON.parse(a),
                        state: { ...s,
                            data: s.data
                        }
                    })
                }
        }
    return {
        staticQueries: t,
        promiseQueries: n
    }
}

function dL() {
    const e = Pa();
    return u.useMemo(() => V9(e), [e])
}

function Yl(e) {
    return new Promise(t => {
        setTimeout(() => t(e()), 0)
    })
}

function H9() {
    const e = "scheduler" in globalThis;
    if (!e) return {
        supportsScheduler: e,
        supportsYield: !1
    };
    const n = "yield" in globalThis.scheduler;
    return {
        supportsScheduler: e,
        supportsYield: n
    }
}
let qs;

function W9() {
    const e = globalThis.scheduler,
        {
            supportsScheduler: t,
            supportsYield: n
        } = H9();
    return e && n ? e : t && !n ? (Object.defineProperty(e, "yield", {
        value: () => e.postTask(() => {})
    }), e) : (qs || (qs = {
        postTask: Yl,
        yield: () => Yl(() => {})
    }), qs)
}
class z9 {
    scheduler;
    setScheduler() {
        this.scheduler || (this.scheduler = W9())
    }
    postTask(t, n) {
        return this.setScheduler(), this.scheduler.postTask(t, n)
    }
    yield() {
        return this.setScheduler(), this.scheduler.yield()
    }
}
const q9 = new z9,
    Ks = [];

function fL(e, t) {
    for (const n of t)
        if (e.getQueryState(n.queryKey) == null) {
            let r;
            const o = new Promise(s => {
                r = s
            });
            Ks.push(r), jg(e, {
                queries: t.map(s => ({ ...s,
                    promise: o.then(() => vr(s.promise, "missing react-query hydration promise")).catch(a => {
                        throw q9.yield().then(() => {
                            e.refetchQueries({
                                queryKey: s.queryKey,
                                exact: !0
                            })
                        }), M.addAction("react-query.prefetch-hydration.error", {
                            queryKey: JSON.stringify(s.queryKey),
                            error: a
                        }), a
                    })
                }))
            })
        }
    Vp(() => {
        for (const n of Ks) n();
        Ks.length = 0
    }, [t])
}
export {
    MO as $, fe as A, Y as B, X as C, M as D, b8 as E, bd as F, a2 as G, Ze as H, ud as I, St as J, wA as K, Kt as L, le as M, ns as N, t1 as O, me as P, Pu as Q, b as R, J as S, H2 as T, T2 as U, E8 as V, rR as W, y2 as X, ap as Y, li as Z, bt as _, te as a, Rp as a$, yi as a0, A8 as a1, v2 as a2, Rs as a3, h8 as a4, px as a5, C_ as a6, Tn as a7, o8 as a8, s8 as a9, WE as aA, Bx as aB, y7 as aC, EO as aD, v8 as aE, zr as aF, ao as aG, ip as aH, VI as aI, Pl as aJ, xm as aK, cO as aL, kl as aM, vk as aN, fO as aO, lO as aP, uO as aQ, dO as aR, Co as aS, js as aT, qk as aU, Kk as aV, zk as aW, e6 as aX, km as aY, es as aZ, is as a_, E6 as aa, ir as ab, xk as ac, p7 as ad, M7 as ae, f7 as af, A as ag, hs as ah, vt as ai, ho as aj, Jo as ak, We as al, Je as am, Ax as an, sr as ao, GI as ap, Zr as aq, zf as ar, t8 as as, o6 as at, wI as au, y_ as av, BI as aw, kI as ax, kt as ay, YE as az, Ve as b, iv as b$, _e as b0, pe as b1, N as b2, ut as b3, Cf as b4, di as b5, xn as b6, df as b7, ui as b8, Sr as b9, R as bA, J_ as bB, ni as bC, er as bD, o1 as bE, Du as bF, ht as bG, $u as bH, nn as bI, Dn as bJ, Zo as bK, L8 as bL, T8 as bM, No as bN, od as bO, Xu as bP, Yu as bQ, ei as bR, sS as bS, bA as bT, Ha as bU, Ka as bV, np as bW, ox as bX, rL as bY, Kp as bZ, Oo as b_, Op as ba, Mp as bb, br as bc, Ri as bd, mt as be, wr as bf, V5 as bg, M4 as bh, j3 as bi, _2 as bj, vn as bk, Vp as bl, C2 as bm, c7 as bn, WI as bo, qI as bp, zI as bq, e1 as br, lt as bs, _6 as bt, I_ as bu, Iu as bv, h2 as bw, e7 as bx, QI as by, $9 as bz, jO as c, R7 as c$, tp as c0, Bf as c1, a6 as c2, sw as c3, m2 as c4, L0 as c5, m0 as c6, y0 as c7, O6 as c8, g8 as c9, _o as cA, Rn as cB, q2 as cC, i8 as cD, ek as cE, Z8 as cF, Lu as cG, m1 as cH, P1 as cI, Yp as cJ, Zt as cK, Lp as cL, ze as cM, Wp as cN, Eo as cO, C9 as cP, Yh as cQ, b_ as cR, q7 as cS, K7 as cT, of as cU, R3 as cV, O3 as cW, Qp as cX, eM as cY, tM as cZ, x7 as c_, $7 as ca, uE as cb, I3 as cc, Y7 as cd, k3 as ce, E3 as cf, M3 as cg, x3 as ch, O9 as ci, s1 as cj, d6 as ck, aE as cl, K_ as cm, KI as cn, T_ as co, Ki as cp, _9 as cq, D7 as cr, B7 as cs, XI as ct, iL as cu, bo as cv, M8 as cw, F3 as cx, g6 as cy, D_ as cz, Z as d, Z6 as d$, O7 as d0, B4 as d1, el as d2, Tx as d3, Lo as d4, Au as d5, xA as d6, uI as d7, nd as d8, ZA as d9, La as dA, yk as dB, L3 as dC, bk as dD, Sk as dE, h6 as dF, C6 as dG, fo as dH, p6 as dI, P7 as dJ, Tl as dK, _l as dL, W7 as dM, H7 as dN, sf as dO, X9 as dP, A1 as dQ, Zc as dR, V6 as dS, A2 as dT, m7 as dU, FI as dV, ks as dW, Ak as dX, Ud as dY, b4 as dZ, x6 as d_, x0 as da, VA as db, cd as dc, mw as dd, Un as de, aS as df, Qu as dg, sd as dh, GS as di, gI as dj, d1 as dk, Q6 as dl, II as dm, C8 as dn, q9 as dp, s6 as dq, v9 as dr, Qo as ds, nL as dt, G_ as du, A6 as dv, B_ as dw, L4 as dx, sL as dy, U6 as dz, Qa as e, n6 as e$, g7 as e0, P8 as e1, D8 as e2, I8 as e3, it as e4, _O as e5, w8 as e6, wd as e7, d8 as e8, LI as e9, G4 as eA, Hh as eB, Y8 as eC, q8 as eD, Wl as eE, mT as eF, oL as eG, n1 as eH, v6 as eI, L1 as eJ, Jt as eK, _7 as eL, ha as eM, v7 as eN, j7 as eO, Y9 as eP, i6 as eQ, Z9 as eR, z6 as eS, K6 as eT, Rk as eU, uL as eV, dL as eW, fL as eX, C7 as eY, F7 as eZ, q6 as e_, Z7 as ea, p1 as eb, L2 as ec, f1 as ed, NO as ee, DO as ef, k8 as eg, O8 as eh, LO as ei, $n as ej, Wa as ek, ad as el, Ck as em, YI as en, c1 as eo, u1 as ep, l1 as eq, tL as er, r6 as es, ef as et, _x as eu, I7 as ev, E7 as ew, B6 as ex, f8 as ey, ok as ez, oR as f, yo as f$, y6 as f0, cL as f1, G7 as f2, c6 as f3, l6 as f4, lL as f5, W6 as f6, Fm as f7, I6 as f8, k6 as f9, U7 as fA, x8 as fB, g9 as fC, go as fD, qt as fE, m6 as fF, U8 as fG, W8 as fH, j8 as fI, G8 as fJ, V8 as fK, H8 as fL, ki as fM, H6 as fN, TI as fO, El as fP, va as fQ, t6 as fR, aL as fS, uu as fT, Y2 as fU, tx as fV, n8 as fW, u8 as fX, T7 as fY, yE as fZ, A7 as f_, N7 as fa, L7 as fb, _1 as fc, w2 as fd, ai as fe, Fd as ff, M2 as fg, G2 as fh, Id as fi, Q8 as fj, F6 as fk, j6 as fl, G6 as fm, $8 as fn, RS as fo, Wf as fp, Vk as fq, ye as fr, Rt as fs, x4 as ft, Ba as fu, rk as fv, tk as fw, nk as fx, m9 as fy, R8 as fz, $t as g, z8 as g$, y8 as g0, V3 as g1, $_ as g2, Q_ as g3, Z_ as g4, r7 as g5, z7 as g6, S8 as g7, K8 as g8, f6 as g9, K2 as gA, vi as gB, J9 as gC, Q5 as gD, vo as gE, b6 as gF, tr as gG, f4 as gH, p4 as gI, h4 as gJ, a8 as gK, GO as gL, tO as gM, N4 as gN, O5 as gO, et as gP, Ct as gQ, L5 as gR, B8 as gS, De as gT, So as gU, P5 as gV, $5 as gW, U5 as gX, w5 as gY, Q9 as gZ, T6 as g_, HI as ga, b2 as gb, X7 as gc, fb as gd, Ta as ge, Y6 as gf, D6 as gg, c8 as gh, J6 as gi, q3 as gj, r8 as gk, X_ as gl, JI as gm, m8 as gn, _8 as go, Lk as gp, C4 as gq, w7 as gr, R6 as gs, eL as gt, Xs as gu, S6 as gv, rp as gw, rA as gx, pT as gy, X8 as gz, Ot as h, EI as h0, r1 as h1, Y_ as h2, k7 as h3, Ca as h4, To as h5, ZE as h6, ob as h7, MI as h8, a1 as h9, F8 as hA, b7 as hB, w6 as hC, g1 as hD, h1 as hE, or as hF, Z2 as hG, P_ as hH, NT as hI, Ku as hJ, M6 as hK, v0 as hL, P6 as hM, H3 as hN, i1 as ha, Bm as hb, S7 as hc, N6 as hd, d7 as he, I2 as hf, u7 as hg, j2 as hh, V4 as hi, l8 as hj, L6 as hk, g4 as hl, m4 as hm, o7 as hn, s7 as ho, X6 as hp, ZI as hq, n7 as hr, a7 as hs, i7 as ht, l7 as hu, e8 as hv, J7 as hw, p8 as hx, V7 as hy, t7 as hz, Nn as i, K as j, Rd as k, Ci as l, dd as m, vr as n, yd as o, At as p, $6 as q, u6 as r, si as s, Q7 as t, aR as u, pE as v, H as w, Ll as x, sp as y, sn as z
};
//# sourceMappingURL=bq4rrqi54riy5k2e.js.map