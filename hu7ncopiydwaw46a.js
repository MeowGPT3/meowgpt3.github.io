import {
    g as h,
    j as l,
    av as m
} from "./mna1wiucqak6lqzp.js";
import {
    o as c,
    gd as e,
    d as o
} from "./bq4rrqi54riy5k2e.js";
import {
    hH as v,
    cL as y,
    hI as E,
    cM as f,
    hJ as _
} from "./lwme42j7zzyr3q7j.js";
var R = c;

function j(s) {
    return typeof s == "function" ? s : R
}
var u = j,
    S = e,
    I = u,
    b = v,
    A = 9007199254740991,
    a = 4294967295,
    N = Math.min;

function O(s, r) {
    if (s = b(s), s < 1 || s > A) return [];
    var t = a,
        i = N(s, a);
    r = I(r), s -= a;
    for (var p = S(i, r); ++t < s;) r(t);
    return p
}
var w = O;
const D = h(w),
    q = ({
        gap: s,
        padding: r = 4,
        size: t = 3
    }) => l.jsx(m.div, {
        className: o("grid h-full max-w-full flex-1 grid-cols-3 items-center"),
        style: {
            gap: s,
            padding: r
        },
        children: D(3, i => l.jsx(m.div, {
            className: "dark:bg-white-400 aspect-square rounded-full bg-gray-400",
            animate: {
                translateY: ["0%", "-50%", "0%", "0%", "0%"]
            },
            style: {
                translateX: .5,
                width: t,
                height: t
            },
            transition: {
                repeat: 1 / 0,
                type: "keyframes",
                delay: i / 10,
                duration: .7
            }
        }, i))
    });
var n = (s => (s.javascript = "javascript", s.typescript = "typescript", s.bash = "bash", s.zsh = "zsh", s.html = "html", s.css = "css", s.python = "python", s.json = "json", s.sql = "sql", s.go = "go", s.yaml = "yaml", s.java = "java", s.rust = "rust", s.cpp = "cpp", s.swift = "swift", s.php = "php", s.xml = "xml", s.ruby = "ruby", s.haskell = "haskell", s.kotlin = "kotlin", s.csharp = "csharp", s.c = "c", s.objectivec = "objectivec", s.r = "r", s.lua = "lua", s.dart = "dart", s.scala = "scala", s.perl = "perl", s.commonlisp = "commonlisp", s.clojure = "clojure", s.ocaml = "ocaml", s.powershell = "powershell", s.verilog = "verilog", s.dockerfile = "dockerfile", s.vue = "vue", s.other = "other", s))(n || {});

function V(s) {
    if (y(s)) switch (s) {
        case f.CODE_REACT:
            return "typescript";
        default:
            return E(s.replace(/^code\//, ""), Object.values(n), "other")
    }
}
const F = 36,
    W = -24,
    M = 280,
    Q = M + F,
    U = 40;
var k = (s => (s.COLLAPSED = "collapsed", s.EXPANDED = "expanded", s))(k || {});
class H {
    constructor(r) {
        this.params = r
    }
    get isReadonly() {
        return Object.values(this.params).some(r => !!r)
    }
    get isHistoricalVersion() {
        return !!this.params.isHistoricalVersion
    }
    get isStreaming() {
        return !!this.params.isTextdocStreaming || !!this.params.isRequestActive
    }
    get isTextdocStreaming() {
        return !!this.params.isTextdocStreaming
    }
    get isStreamingFromNative() {
        return this.isStreaming && this.params.streamingSource === _.NATIVE
    }
    get isRestoring() {
        return !!this.params.isRestoring
    }
    get isShowingChanges() {
        return !!this.params.isShowingChanges
    }
    get isReadonlyFromQueryParam() {
        return !!this.params.isReadonlyFromQueryParam
    }
}
const Y = s => new H(s);
export {
    U as C, M as E, k as G, q as T, Y as a, Q as b, n as c, F as d, W as e, V as g
};
//# sourceMappingURL=hu7ncopiydwaw46a.js.map