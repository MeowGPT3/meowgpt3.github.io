import {
    r as Bt,
    j as Ne
} from "./mna1wiucqak6lqzp.js";
import {
    f as Yt,
    bw as jt,
    d as Xt
} from "./bq4rrqi54riy5k2e.js"; /*! @license DOMPurify 3.2.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.4/LICENSE */
const {
    entries: Tt,
    setPrototypeOf: at,
    isFrozen: Vt,
    getPrototypeOf: $t,
    getOwnPropertyDescriptor: qt
} = Object;
let {
    freeze: S,
    seal: O,
    create: _t
} = Object, {
    apply: we,
    construct: xe
} = typeof Reflect < "u" && Reflect;
S || (S = function(o) {
    return o
});
O || (O = function(o) {
    return o
});
we || (we = function(o, l, a) {
    return o.apply(l, a)
});
xe || (xe = function(o, l) {
    return new o(...l)
});
const se = R(Array.prototype.forEach),
    Kt = R(Array.prototype.lastIndexOf),
    st = R(Array.prototype.pop),
    V = R(Array.prototype.push),
    Zt = R(Array.prototype.splice),
    ce = R(String.prototype.toLowerCase),
    be = R(String.prototype.toString),
    lt = R(String.prototype.match),
    $ = R(String.prototype.replace),
    Jt = R(String.prototype.indexOf),
    Qt = R(String.prototype.trim),
    N = R(Object.prototype.hasOwnProperty),
    A = R(RegExp.prototype.test),
    q = en(TypeError);

function R(r) {
    return function(o) {
        for (var l = arguments.length, a = new Array(l > 1 ? l - 1 : 0), u = 1; u < l; u++) a[u - 1] = arguments[u];
        return we(r, o, a)
    }
}

function en(r) {
    return function() {
        for (var o = arguments.length, l = new Array(o), a = 0; a < o; a++) l[a] = arguments[a];
        return xe(r, l)
    }
}

function s(r, o) {
    let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ce;
    at && at(r, null);
    let a = o.length;
    for (; a--;) {
        let u = o[a];
        if (typeof u == "string") {
            const L = l(u);
            L !== u && (Vt(o) || (o[a] = L), u = L)
        }
        r[u] = !0
    }
    return r
}

function tn(r) {
    for (let o = 0; o < r.length; o++) N(r, o) || (r[o] = null);
    return r
}

function w(r) {
    const o = _t(null);
    for (const [l, a] of Tt(r)) N(r, l) && (Array.isArray(a) ? o[l] = tn(a) : a && typeof a == "object" && a.constructor === Object ? o[l] = w(a) : o[l] = a);
    return o
}

function K(r, o) {
    for (; r !== null;) {
        const a = qt(r, o);
        if (a) {
            if (a.get) return R(a.get);
            if (typeof a.value == "function") return R(a.value)
        }
        r = $t(r)
    }

    function l() {
        return null
    }
    return l
}
const ct = S(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
    De = S(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
    Ie = S(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
    nn = S(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
    Me = S(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
    on = S(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
    ft = S(["#text"]),
    ut = S(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]),
    Ce = S(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
    mt = S(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
    le = S(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
    rn = O(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
    an = O(/<%[\w\W]*|[\w\W]*%>/gm),
    sn = O(/\$\{[\w\W]*/gm),
    ln = O(/^data-[\-\w.\u00B7-\uFFFF]+$/),
    cn = O(/^aria-[\-\w]+$/),
    Et = O(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
    fn = O(/^(?:\w+script|data):/i),
    un = O(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    gt = O(/^html$/i),
    mn = O(/^[a-z][.\w]*(-[.\w]+)+$/i);
var pt = Object.freeze({
    __proto__: null,
    ARIA_ATTR: cn,
    ATTR_WHITESPACE: un,
    CUSTOM_ELEMENT: mn,
    DATA_ATTR: ln,
    DOCTYPE_NAME: gt,
    ERB_EXPR: an,
    IS_ALLOWED_URI: Et,
    IS_SCRIPT_OR_DATA: fn,
    MUSTACHE_EXPR: rn,
    TMPLIT_EXPR: sn
});
const Z = {
        element: 1,
        attribute: 2,
        text: 3,
        cdataSection: 4,
        entityReference: 5,
        entityNode: 6,
        progressingInstruction: 7,
        comment: 8,
        document: 9,
        documentType: 10,
        documentFragment: 11,
        notation: 12
    },
    pn = function() {
        return typeof window > "u" ? null : window
    },
    dn = function(o, l) {
        if (typeof o != "object" || typeof o.createPolicy != "function") return null;
        let a = null;
        const u = "data-tt-policy-suffix";
        l && l.hasAttribute(u) && (a = l.getAttribute(u));
        const L = "dompurify" + (a ? "#" + a : "");
        try {
            return o.createPolicy(L, {
                createHTML(x) {
                    return x
                },
                createScriptURL(x) {
                    return x
                }
            })
        } catch {
            return console.warn("TrustedTypes policy " + L + " could not be created."), null
        }
    },
    dt = function() {
        return {
            afterSanitizeAttributes: [],
            afterSanitizeElements: [],
            afterSanitizeShadowDOM: [],
            beforeSanitizeAttributes: [],
            beforeSanitizeElements: [],
            beforeSanitizeShadowDOM: [],
            uponSanitizeAttribute: [],
            uponSanitizeElement: [],
            uponSanitizeShadowNode: []
        }
    };

function ht() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : pn();
    const o = i => ht(i);
    if (o.version = "3.2.4", o.removed = [], !r || !r.document || r.document.nodeType !== Z.document || !r.Element) return o.isSupported = !1, o;
    let {
        document: l
    } = r;
    const a = l,
        u = a.currentScript,
        {
            DocumentFragment: L,
            HTMLTemplateElement: x,
            Node: fe,
            Element: Pe,
            NodeFilter: z,
            NamedNodeMap: At = r.NamedNodeMap || r.MozNamedAttrMap,
            HTMLFormElement: St,
            DOMParser: Rt,
            trustedTypes: J
        } = r,
        G = Pe.prototype,
        yt = K(G, "cloneNode"),
        Ot = K(G, "remove"),
        Lt = K(G, "nextSibling"),
        Nt = K(G, "childNodes"),
        Q = K(G, "parentNode");
    if (typeof x == "function") {
        const i = l.createElement("template");
        i.content && i.content.ownerDocument && (l = i.content.ownerDocument)
    }
    let E, W = "";
    const {
        implementation: ue,
        createNodeIterator: bt,
        createDocumentFragment: Dt,
        getElementsByTagName: It
    } = l, {
        importNode: Mt
    } = a;
    let g = dt();
    o.isSupported = typeof Tt == "function" && typeof Q == "function" && ue && ue.createHTMLDocument !== void 0;
    const {
        MUSTACHE_EXPR: me,
        ERB_EXPR: pe,
        TMPLIT_EXPR: de,
        DATA_ATTR: Ct,
        ARIA_ATTR: wt,
        IS_SCRIPT_OR_DATA: xt,
        ATTR_WHITESPACE: ve,
        CUSTOM_ELEMENT: Pt
    } = pt;
    let {
        IS_ALLOWED_URI: ke
    } = pt, m = null;
    const Ue = s({}, [...ct, ...De, ...Ie, ...Me, ...ft]);
    let d = null;
    const Fe = s({}, [...ut, ...Ce, ...mt, ...le]);
    let f = Object.seal(_t(null, {
            tagNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
            },
            attributeNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
            },
            allowCustomizedBuiltInElements: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: !1
            }
        })),
        B = null,
        Te = null,
        He = !0,
        _e = !0,
        ze = !1,
        Ge = !0,
        P = !1,
        Ee = !0,
        C = !1,
        ge = !1,
        he = !1,
        v = !1,
        ee = !1,
        te = !1,
        We = !0,
        Be = !1;
    const vt = "user-content-";
    let Ae = !0,
        Y = !1,
        k = {},
        U = null;
    const Ye = s({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
    let je = null;
    const Xe = s({}, ["audio", "video", "img", "source", "image", "track"]);
    let Se = null;
    const Ve = s({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
        ne = "http://www.w3.org/1998/Math/MathML",
        oe = "http://www.w3.org/2000/svg",
        I = "http://www.w3.org/1999/xhtml";
    let F = I,
        Re = !1,
        ye = null;
    const kt = s({}, [ne, oe, I], be);
    let ie = s({}, ["mi", "mo", "mn", "ms", "mtext"]),
        re = s({}, ["annotation-xml"]);
    const Ut = s({}, ["title", "style", "font", "a", "script"]);
    let j = null;
    const Ft = ["application/xhtml+xml", "text/html"],
        Ht = "text/html";
    let p = null,
        H = null;
    const zt = l.createElement("form"),
        $e = function(e) {
            return e instanceof RegExp || e instanceof Function
        },
        Oe = function() {
            let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            if (!(H && H === e)) {
                if ((!e || typeof e != "object") && (e = {}), e = w(e), j = Ft.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? Ht : e.PARSER_MEDIA_TYPE, p = j === "application/xhtml+xml" ? be : ce, m = N(e, "ALLOWED_TAGS") ? s({}, e.ALLOWED_TAGS, p) : Ue, d = N(e, "ALLOWED_ATTR") ? s({}, e.ALLOWED_ATTR, p) : Fe, ye = N(e, "ALLOWED_NAMESPACES") ? s({}, e.ALLOWED_NAMESPACES, be) : kt, Se = N(e, "ADD_URI_SAFE_ATTR") ? s(w(Ve), e.ADD_URI_SAFE_ATTR, p) : Ve, je = N(e, "ADD_DATA_URI_TAGS") ? s(w(Xe), e.ADD_DATA_URI_TAGS, p) : Xe, U = N(e, "FORBID_CONTENTS") ? s({}, e.FORBID_CONTENTS, p) : Ye, B = N(e, "FORBID_TAGS") ? s({}, e.FORBID_TAGS, p) : {}, Te = N(e, "FORBID_ATTR") ? s({}, e.FORBID_ATTR, p) : {}, k = N(e, "USE_PROFILES") ? e.USE_PROFILES : !1, He = e.ALLOW_ARIA_ATTR !== !1, _e = e.ALLOW_DATA_ATTR !== !1, ze = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Ge = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, P = e.SAFE_FOR_TEMPLATES || !1, Ee = e.SAFE_FOR_XML !== !1, C = e.WHOLE_DOCUMENT || !1, v = e.RETURN_DOM || !1, ee = e.RETURN_DOM_FRAGMENT || !1, te = e.RETURN_TRUSTED_TYPE || !1, he = e.FORCE_BODY || !1, We = e.SANITIZE_DOM !== !1, Be = e.SANITIZE_NAMED_PROPS || !1, Ae = e.KEEP_CONTENT !== !1, Y = e.IN_PLACE || !1, ke = e.ALLOWED_URI_REGEXP || Et, F = e.NAMESPACE || I, ie = e.MATHML_TEXT_INTEGRATION_POINTS || ie, re = e.HTML_INTEGRATION_POINTS || re, f = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && $e(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (f.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && $e(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (f.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (f.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), P && (_e = !1), ee && (v = !0), k && (m = s({}, ft), d = [], k.html === !0 && (s(m, ct), s(d, ut)), k.svg === !0 && (s(m, De), s(d, Ce), s(d, le)), k.svgFilters === !0 && (s(m, Ie), s(d, Ce), s(d, le)), k.mathMl === !0 && (s(m, Me), s(d, mt), s(d, le))), e.ADD_TAGS && (m === Ue && (m = w(m)), s(m, e.ADD_TAGS, p)), e.ADD_ATTR && (d === Fe && (d = w(d)), s(d, e.ADD_ATTR, p)), e.ADD_URI_SAFE_ATTR && s(Se, e.ADD_URI_SAFE_ATTR, p), e.FORBID_CONTENTS && (U === Ye && (U = w(U)), s(U, e.FORBID_CONTENTS, p)), Ae && (m["#text"] = !0), C && s(m, ["html", "head", "body"]), m.table && (s(m, ["tbody"]), delete B.tbody), e.TRUSTED_TYPES_POLICY) {
                    if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function") throw q('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                    if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw q('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                    E = e.TRUSTED_TYPES_POLICY, W = E.createHTML("")
                } else E === void 0 && (E = dn(J, u)), E !== null && typeof W == "string" && (W = E.createHTML(""));
                S && S(e), H = e
            }
        },
        qe = s({}, [...De, ...Ie, ...nn]),
        Ke = s({}, [...Me, ...on]),
        Gt = function(e) {
            let t = Q(e);
            (!t || !t.tagName) && (t = {
                namespaceURI: F,
                tagName: "template"
            });
            const n = ce(e.tagName),
                c = ce(t.tagName);
            return ye[e.namespaceURI] ? e.namespaceURI === oe ? t.namespaceURI === I ? n === "svg" : t.namespaceURI === ne ? n === "svg" && (c === "annotation-xml" || ie[c]) : !!qe[n] : e.namespaceURI === ne ? t.namespaceURI === I ? n === "math" : t.namespaceURI === oe ? n === "math" && re[c] : !!Ke[n] : e.namespaceURI === I ? t.namespaceURI === oe && !re[c] || t.namespaceURI === ne && !ie[c] ? !1 : !Ke[n] && (Ut[n] || !qe[n]) : !!(j === "application/xhtml+xml" && ye[e.namespaceURI]) : !1
        },
        b = function(e) {
            V(o.removed, {
                element: e
            });
            try {
                Q(e).removeChild(e)
            } catch {
                Ot(e)
            }
        },
        ae = function(e, t) {
            try {
                V(o.removed, {
                    attribute: t.getAttributeNode(e),
                    from: t
                })
            } catch {
                V(o.removed, {
                    attribute: null,
                    from: t
                })
            }
            if (t.removeAttribute(e), e === "is")
                if (v || ee) try {
                    b(t)
                } catch {} else try {
                    t.setAttribute(e, "")
                } catch {}
        },
        Ze = function(e) {
            let t = null,
                n = null;
            if (he) e = "<remove></remove>" + e;
            else {
                const T = lt(e, /^[\r\n\t ]+/);
                n = T && T[0]
            }
            j === "application/xhtml+xml" && F === I && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
            const c = E ? E.createHTML(e) : e;
            if (F === I) try {
                t = new Rt().parseFromString(c, j)
            } catch {}
            if (!t || !t.documentElement) {
                t = ue.createDocument(F, "template", null);
                try {
                    t.documentElement.innerHTML = Re ? W : c
                } catch {}
            }
            const _ = t.body || t.documentElement;
            return e && n && _.insertBefore(l.createTextNode(n), _.childNodes[0] || null), F === I ? It.call(t, C ? "html" : "body")[0] : C ? t.documentElement : _
        },
        Je = function(e) {
            return bt.call(e.ownerDocument || e, e, z.SHOW_ELEMENT | z.SHOW_COMMENT | z.SHOW_TEXT | z.SHOW_PROCESSING_INSTRUCTION | z.SHOW_CDATA_SECTION, null)
        },
        Le = function(e) {
            return e instanceof St && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof At) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function")
        },
        Qe = function(e) {
            return typeof fe == "function" && e instanceof fe
        };

    function M(i, e, t) {
        se(i, n => {
            n.call(o, e, t, H)
        })
    }
    const et = function(e) {
            let t = null;
            if (M(g.beforeSanitizeElements, e, null), Le(e)) return b(e), !0;
            const n = p(e.nodeName);
            if (M(g.uponSanitizeElement, e, {
                    tagName: n,
                    allowedTags: m
                }), e.hasChildNodes() && !Qe(e.firstElementChild) && A(/<[/\w]/g, e.innerHTML) && A(/<[/\w]/g, e.textContent) || e.nodeType === Z.progressingInstruction || Ee && e.nodeType === Z.comment && A(/<[/\w]/g, e.data)) return b(e), !0;
            if (!m[n] || B[n]) {
                if (!B[n] && nt(n) && (f.tagNameCheck instanceof RegExp && A(f.tagNameCheck, n) || f.tagNameCheck instanceof Function && f.tagNameCheck(n))) return !1;
                if (Ae && !U[n]) {
                    const c = Q(e) || e.parentNode,
                        _ = Nt(e) || e.childNodes;
                    if (_ && c) {
                        const T = _.length;
                        for (let y = T - 1; y >= 0; --y) {
                            const D = yt(_[y], !0);
                            D.__removalCount = (e.__removalCount || 0) + 1, c.insertBefore(D, Lt(e))
                        }
                    }
                }
                return b(e), !0
            }
            return e instanceof Pe && !Gt(e) || (n === "noscript" || n === "noembed" || n === "noframes") && A(/<\/no(script|embed|frames)/i, e.innerHTML) ? (b(e), !0) : (P && e.nodeType === Z.text && (t = e.textContent, se([me, pe, de], c => {
                t = $(t, c, " ")
            }), e.textContent !== t && (V(o.removed, {
                element: e.cloneNode()
            }), e.textContent = t)), M(g.afterSanitizeElements, e, null), !1)
        },
        tt = function(e, t, n) {
            if (We && (t === "id" || t === "name") && (n in l || n in zt)) return !1;
            if (!(_e && !Te[t] && A(Ct, t))) {
                if (!(He && A(wt, t))) {
                    if (!d[t] || Te[t]) {
                        if (!(nt(e) && (f.tagNameCheck instanceof RegExp && A(f.tagNameCheck, e) || f.tagNameCheck instanceof Function && f.tagNameCheck(e)) && (f.attributeNameCheck instanceof RegExp && A(f.attributeNameCheck, t) || f.attributeNameCheck instanceof Function && f.attributeNameCheck(t)) || t === "is" && f.allowCustomizedBuiltInElements && (f.tagNameCheck instanceof RegExp && A(f.tagNameCheck, n) || f.tagNameCheck instanceof Function && f.tagNameCheck(n)))) return !1
                    } else if (!Se[t]) {
                        if (!A(ke, $(n, ve, ""))) {
                            if (!((t === "src" || t === "xlink:href" || t === "href") && e !== "script" && Jt(n, "data:") === 0 && je[e])) {
                                if (!(ze && !A(xt, $(n, ve, "")))) {
                                    if (n) return !1
                                }
                            }
                        }
                    }
                }
            }
            return !0
        },
        nt = function(e) {
            return e !== "annotation-xml" && lt(e, Pt)
        },
        ot = function(e) {
            M(g.beforeSanitizeAttributes, e, null);
            const {
                attributes: t
            } = e;
            if (!t || Le(e)) return;
            const n = {
                attrName: "",
                attrValue: "",
                keepAttr: !0,
                allowedAttributes: d,
                forceKeepAttr: void 0
            };
            let c = t.length;
            for (; c--;) {
                const _ = t[c],
                    {
                        name: T,
                        namespaceURI: y,
                        value: D
                    } = _,
                    X = p(T);
                let h = T === "value" ? D : Qt(D);
                if (n.attrName = X, n.attrValue = h, n.keepAttr = !0, n.forceKeepAttr = void 0, M(g.uponSanitizeAttribute, e, n), h = n.attrValue, Be && (X === "id" || X === "name") && (ae(T, e), h = vt + h), Ee && A(/((--!?|])>)|<\/(style|title)/i, h)) {
                    ae(T, e);
                    continue
                }
                if (n.forceKeepAttr || (ae(T, e), !n.keepAttr)) continue;
                if (!Ge && A(/\/>/i, h)) {
                    ae(T, e);
                    continue
                }
                P && se([me, pe, de], rt => {
                    h = $(h, rt, " ")
                });
                const it = p(e.nodeName);
                if (tt(it, X, h)) {
                    if (E && typeof J == "object" && typeof J.getAttributeType == "function" && !y) switch (J.getAttributeType(it, X)) {
                        case "TrustedHTML":
                            {
                                h = E.createHTML(h);
                                break
                            }
                        case "TrustedScriptURL":
                            {
                                h = E.createScriptURL(h);
                                break
                            }
                    }
                    try {
                        y ? e.setAttributeNS(y, T, h) : e.setAttribute(T, h), Le(e) ? b(e) : st(o.removed)
                    } catch {}
                }
            }
            M(g.afterSanitizeAttributes, e, null)
        },
        Wt = function i(e) {
            let t = null;
            const n = Je(e);
            for (M(g.beforeSanitizeShadowDOM, e, null); t = n.nextNode();) M(g.uponSanitizeShadowNode, t, null), et(t), ot(t), t.content instanceof L && i(t.content);
            M(g.afterSanitizeShadowDOM, e, null)
        };
    return o.sanitize = function(i) {
        let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            t = null,
            n = null,
            c = null,
            _ = null;
        if (Re = !i, Re && (i = "<!-->"), typeof i != "string" && !Qe(i))
            if (typeof i.toString == "function") {
                if (i = i.toString(), typeof i != "string") throw q("dirty is not a string, aborting")
            } else throw q("toString is not a function");
        if (!o.isSupported) return i;
        if (ge || Oe(e), o.removed = [], typeof i == "string" && (Y = !1), Y) {
            if (i.nodeName) {
                const D = p(i.nodeName);
                if (!m[D] || B[D]) throw q("root node is forbidden and cannot be sanitized in-place")
            }
        } else if (i instanceof fe) t = Ze("<!---->"), n = t.ownerDocument.importNode(i, !0), n.nodeType === Z.element && n.nodeName === "BODY" || n.nodeName === "HTML" ? t = n : t.appendChild(n);
        else {
            if (!v && !P && !C && i.indexOf("<") === -1) return E && te ? E.createHTML(i) : i;
            if (t = Ze(i), !t) return v ? null : te ? W : ""
        }
        t && he && b(t.firstChild);
        const T = Je(Y ? i : t);
        for (; c = T.nextNode();) et(c), ot(c), c.content instanceof L && Wt(c.content);
        if (Y) return i;
        if (v) {
            if (ee)
                for (_ = Dt.call(t.ownerDocument); t.firstChild;) _.appendChild(t.firstChild);
            else _ = t;
            return (d.shadowroot || d.shadowrootmode) && (_ = Mt.call(a, _, !0)), _
        }
        let y = C ? t.outerHTML : t.innerHTML;
        return C && m["!doctype"] && t.ownerDocument && t.ownerDocument.doctype && t.ownerDocument.doctype.name && A(gt, t.ownerDocument.doctype.name) && (y = "<!DOCTYPE " + t.ownerDocument.doctype.name + `>
` + y), P && se([me, pe, de], D => {
            y = $(y, D, " ")
        }), E && te ? E.createHTML(y) : y
    }, o.setConfig = function() {
        let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        Oe(i), ge = !0
    }, o.clearConfig = function() {
        H = null, ge = !1
    }, o.isValidAttribute = function(i, e, t) {
        H || Oe({});
        const n = p(i),
            c = p(e);
        return tt(n, c, t)
    }, o.addHook = function(i, e) {
        typeof e == "function" && V(g[i], e)
    }, o.removeHook = function(i, e) {
        if (e !== void 0) {
            const t = Kt(g[i], e);
            return t === -1 ? void 0 : Zt(g[i], t, 1)[0]
        }
        return st(g[i])
    }, o.removeHooks = function(i) {
        g[i] = []
    }, o.removeAllHooks = function() {
        g = dt()
    }, o
}
var Tn = ht();
const gn = ({
    svgString: r,
    className: o,
    color: l
}) => {
    const a = Yt(),
        u = Bt.useMemo(() => a ? Tn.sanitize(r, {
            USE_PROFILES: {
                svg: !0
            }
        }) : "", [a, r]),
        L = Ne.jsx("div", {
            className: o
        });
    return Ne.jsx(jt, {
        name: "StringToSVG",
        fallback: L,
        children: Ne.jsx("div", {
            className: Xt("[&_svg]:h-full [&_svg]:w-full", o),
            dangerouslySetInnerHTML: {
                __html: u
            },
            style: {
                color: l
            }
        })
    })
};
export {
    gn as S
};
//# sourceMappingURL=m44xlxtgozicne9l.js.map