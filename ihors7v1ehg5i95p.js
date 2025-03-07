import {
    k as Tn,
    g as tr,
    j as qe
} from "./mna1wiucqak6lqzp.js";
import {
    tj as rr,
    tV as He,
    t4 as mt
} from "./lwme42j7zzyr3q7j.js";

function ba() {}

function wa(e) {
    for (var n = [], t = String(e || ""), r = t.indexOf(","), i = 0, l, o; !l;) r === -1 && (r = t.length, l = !0), o = t.slice(i, r).trim(), (o || !l) && n.push(o), i = r + 1, r = t.indexOf(",", i);
    return n
}

function ir(e, n) {
    var t = n || {};
    return e[e.length - 1] === "" && (e = e.concat("")), e.join((t.padRight ? " " : "") + "," + (t.padLeft === !1 ? "" : " ")).trim()
}
const lr = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
    or = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
    ar = {};

function An(e, n) {
    return (ar.jsx ? or : lr).test(e)
}
const ur = /[ \t\n\f\r]/g;

function sr(e) {
    return typeof e == "object" ? e.type === "text" ? vn(e.value) : !1 : vn(e)
}

function vn(e) {
    return e.replace(ur, "") === ""
}
class Ne {
    constructor(n, t, r) {
        this.property = n, this.normal = t, r && (this.space = r)
    }
}
Ne.prototype.property = {};
Ne.prototype.normal = {};
Ne.prototype.space = null;

function dt(e, n) {
    const t = {},
        r = {};
    let i = -1;
    for (; ++i < e.length;) Object.assign(t, e[i].property), Object.assign(r, e[i].normal);
    return new Ne(t, r, n)
}

function tn(e) {
    return e.toLowerCase()
}
class te {
    constructor(n, t) {
        this.property = n, this.attribute = t
    }
}
te.prototype.space = null;
te.prototype.boolean = !1;
te.prototype.booleanish = !1;
te.prototype.overloadedBoolean = !1;
te.prototype.number = !1;
te.prototype.commaSeparated = !1;
te.prototype.spaceSeparated = !1;
te.prototype.commaOrSpaceSeparated = !1;
te.prototype.mustUseProperty = !1;
te.prototype.defined = !1;
let cr = 0;
const z = we(),
    $ = we(),
    gt = we(),
    k = we(),
    H = we(),
    Ee = we(),
    Z = we();

function we() {
    return 2 ** ++cr
}
const rn = Object.freeze(Object.defineProperty({
        __proto__: null,
        boolean: z,
        booleanish: $,
        commaOrSpaceSeparated: Z,
        commaSeparated: Ee,
        number: k,
        overloadedBoolean: gt,
        spaceSeparated: H
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    $e = Object.keys(rn);
class hn extends te {
    constructor(n, t, r, i) {
        let l = -1;
        if (super(n, t), zn(this, "space", i), typeof r == "number")
            for (; ++l < $e.length;) {
                const o = $e[l];
                zn(this, $e[l], (r & rn[o]) === rn[o])
            }
    }
}
hn.prototype.defined = !0;

function zn(e, n, t) {
    t && (e[n] = t)
}
const pr = {}.hasOwnProperty;

function Pe(e) {
    const n = {},
        t = {};
    let r;
    for (r in e.properties)
        if (pr.call(e.properties, r)) {
            const i = e.properties[r],
                l = new hn(r, e.transform(e.attributes || {}, r), i, e.space);
            e.mustUseProperty && e.mustUseProperty.includes(r) && (l.mustUseProperty = !0), n[r] = l, t[tn(r)] = r, t[tn(l.attribute)] = r
        }
    return new Ne(n, t, e.space)
}
const yt = Pe({
        space: "xlink",
        transform(e, n) {
            return "xlink:" + n.slice(5).toLowerCase()
        },
        properties: {
            xLinkActuate: null,
            xLinkArcRole: null,
            xLinkHref: null,
            xLinkRole: null,
            xLinkShow: null,
            xLinkTitle: null,
            xLinkType: null
        }
    }),
    xt = Pe({
        space: "xml",
        transform(e, n) {
            return "xml:" + n.slice(3).toLowerCase()
        },
        properties: {
            xmlLang: null,
            xmlBase: null,
            xmlSpace: null
        }
    });

function kt(e, n) {
    return n in e ? e[n] : n
}

function bt(e, n) {
    return kt(e, n.toLowerCase())
}
const wt = Pe({
        space: "xmlns",
        attributes: {
            xmlnsxlink: "xmlns:xlink"
        },
        transform: bt,
        properties: {
            xmlns: null,
            xmlnsXLink: null
        }
    }),
    St = Pe({
        transform(e, n) {
            return n === "role" ? n : "aria-" + n.slice(4).toLowerCase()
        },
        properties: {
            ariaActiveDescendant: null,
            ariaAtomic: $,
            ariaAutoComplete: null,
            ariaBusy: $,
            ariaChecked: $,
            ariaColCount: k,
            ariaColIndex: k,
            ariaColSpan: k,
            ariaControls: H,
            ariaCurrent: null,
            ariaDescribedBy: H,
            ariaDetails: null,
            ariaDisabled: $,
            ariaDropEffect: H,
            ariaErrorMessage: null,
            ariaExpanded: $,
            ariaFlowTo: H,
            ariaGrabbed: $,
            ariaHasPopup: null,
            ariaHidden: $,
            ariaInvalid: null,
            ariaKeyShortcuts: null,
            ariaLabel: null,
            ariaLabelledBy: H,
            ariaLevel: k,
            ariaLive: null,
            ariaModal: $,
            ariaMultiLine: $,
            ariaMultiSelectable: $,
            ariaOrientation: null,
            ariaOwns: H,
            ariaPlaceholder: null,
            ariaPosInSet: k,
            ariaPressed: $,
            ariaReadOnly: $,
            ariaRelevant: null,
            ariaRequired: $,
            ariaRoleDescription: H,
            ariaRowCount: k,
            ariaRowIndex: k,
            ariaRowSpan: k,
            ariaSelected: $,
            ariaSetSize: k,
            ariaSort: null,
            ariaValueMax: k,
            ariaValueMin: k,
            ariaValueNow: k,
            ariaValueText: null,
            role: null
        }
    }),
    hr = Pe({
        space: "html",
        attributes: {
            acceptcharset: "accept-charset",
            classname: "class",
            htmlfor: "for",
            httpequiv: "http-equiv"
        },
        transform: bt,
        mustUseProperty: ["checked", "multiple", "muted", "selected"],
        properties: {
            abbr: null,
            accept: Ee,
            acceptCharset: H,
            accessKey: H,
            action: null,
            allow: null,
            allowFullScreen: z,
            allowPaymentRequest: z,
            allowUserMedia: z,
            alt: null,
            as: null,
            async: z,
            autoCapitalize: null,
            autoComplete: H,
            autoFocus: z,
            autoPlay: z,
            capture: z,
            charSet: null,
            checked: z,
            cite: null,
            className: H,
            cols: k,
            colSpan: null,
            content: null,
            contentEditable: $,
            controls: z,
            controlsList: H,
            coords: k | Ee,
            crossOrigin: null,
            data: null,
            dateTime: null,
            decoding: null,
            default: z,
            defer: z,
            dir: null,
            dirName: null,
            disabled: z,
            download: gt,
            draggable: $,
            encType: null,
            enterKeyHint: null,
            form: null,
            formAction: null,
            formEncType: null,
            formMethod: null,
            formNoValidate: z,
            formTarget: null,
            headers: H,
            height: k,
            hidden: z,
            high: k,
            href: null,
            hrefLang: null,
            htmlFor: H,
            httpEquiv: H,
            id: null,
            imageSizes: null,
            imageSrcSet: null,
            inputMode: null,
            integrity: null,
            is: null,
            isMap: z,
            itemId: null,
            itemProp: H,
            itemRef: H,
            itemScope: z,
            itemType: H,
            kind: null,
            label: null,
            lang: null,
            language: null,
            list: null,
            loading: null,
            loop: z,
            low: k,
            manifest: null,
            max: null,
            maxLength: k,
            media: null,
            method: null,
            min: null,
            minLength: k,
            multiple: z,
            muted: z,
            name: null,
            nonce: null,
            noModule: z,
            noValidate: z,
            onAbort: null,
            onAfterPrint: null,
            onAuxClick: null,
            onBeforePrint: null,
            onBeforeUnload: null,
            onBlur: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onContextLost: null,
            onContextMenu: null,
            onContextRestored: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFormData: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLanguageChange: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadEnd: null,
            onLoadStart: null,
            onMessage: null,
            onMessageError: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRejectionHandled: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSecurityPolicyViolation: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onSlotChange: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnhandledRejection: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onWheel: null,
            open: z,
            optimum: k,
            pattern: null,
            ping: H,
            placeholder: null,
            playsInline: z,
            poster: null,
            preload: null,
            readOnly: z,
            referrerPolicy: null,
            rel: H,
            required: z,
            reversed: z,
            rows: k,
            rowSpan: k,
            sandbox: H,
            scope: null,
            scoped: z,
            seamless: z,
            selected: z,
            shape: null,
            size: k,
            sizes: null,
            slot: null,
            span: k,
            spellCheck: $,
            src: null,
            srcDoc: null,
            srcLang: null,
            srcSet: null,
            start: k,
            step: null,
            style: null,
            tabIndex: k,
            target: null,
            title: null,
            translate: null,
            type: null,
            typeMustMatch: z,
            useMap: null,
            value: $,
            width: k,
            wrap: null,
            align: null,
            aLink: null,
            archive: H,
            axis: null,
            background: null,
            bgColor: null,
            border: k,
            borderColor: null,
            bottomMargin: k,
            cellPadding: null,
            cellSpacing: null,
            char: null,
            charOff: null,
            classId: null,
            clear: null,
            code: null,
            codeBase: null,
            codeType: null,
            color: null,
            compact: z,
            declare: z,
            event: null,
            face: null,
            frame: null,
            frameBorder: null,
            hSpace: k,
            leftMargin: k,
            link: null,
            longDesc: null,
            lowSrc: null,
            marginHeight: k,
            marginWidth: k,
            noResize: z,
            noHref: z,
            noShade: z,
            noWrap: z,
            object: null,
            profile: null,
            prompt: null,
            rev: null,
            rightMargin: k,
            rules: null,
            scheme: null,
            scrolling: $,
            standby: null,
            summary: null,
            text: null,
            topMargin: k,
            valueType: null,
            version: null,
            vAlign: null,
            vLink: null,
            vSpace: k,
            allowTransparency: null,
            autoCorrect: null,
            autoSave: null,
            disablePictureInPicture: z,
            disableRemotePlayback: z,
            prefix: null,
            property: null,
            results: k,
            security: null,
            unselectable: null
        }
    }),
    fr = Pe({
        space: "svg",
        attributes: {
            accentHeight: "accent-height",
            alignmentBaseline: "alignment-baseline",
            arabicForm: "arabic-form",
            baselineShift: "baseline-shift",
            capHeight: "cap-height",
            className: "class",
            clipPath: "clip-path",
            clipRule: "clip-rule",
            colorInterpolation: "color-interpolation",
            colorInterpolationFilters: "color-interpolation-filters",
            colorProfile: "color-profile",
            colorRendering: "color-rendering",
            crossOrigin: "crossorigin",
            dataType: "datatype",
            dominantBaseline: "dominant-baseline",
            enableBackground: "enable-background",
            fillOpacity: "fill-opacity",
            fillRule: "fill-rule",
            floodColor: "flood-color",
            floodOpacity: "flood-opacity",
            fontFamily: "font-family",
            fontSize: "font-size",
            fontSizeAdjust: "font-size-adjust",
            fontStretch: "font-stretch",
            fontStyle: "font-style",
            fontVariant: "font-variant",
            fontWeight: "font-weight",
            glyphName: "glyph-name",
            glyphOrientationHorizontal: "glyph-orientation-horizontal",
            glyphOrientationVertical: "glyph-orientation-vertical",
            hrefLang: "hreflang",
            horizAdvX: "horiz-adv-x",
            horizOriginX: "horiz-origin-x",
            horizOriginY: "horiz-origin-y",
            imageRendering: "image-rendering",
            letterSpacing: "letter-spacing",
            lightingColor: "lighting-color",
            markerEnd: "marker-end",
            markerMid: "marker-mid",
            markerStart: "marker-start",
            navDown: "nav-down",
            navDownLeft: "nav-down-left",
            navDownRight: "nav-down-right",
            navLeft: "nav-left",
            navNext: "nav-next",
            navPrev: "nav-prev",
            navRight: "nav-right",
            navUp: "nav-up",
            navUpLeft: "nav-up-left",
            navUpRight: "nav-up-right",
            onAbort: "onabort",
            onActivate: "onactivate",
            onAfterPrint: "onafterprint",
            onBeforePrint: "onbeforeprint",
            onBegin: "onbegin",
            onCancel: "oncancel",
            onCanPlay: "oncanplay",
            onCanPlayThrough: "oncanplaythrough",
            onChange: "onchange",
            onClick: "onclick",
            onClose: "onclose",
            onCopy: "oncopy",
            onCueChange: "oncuechange",
            onCut: "oncut",
            onDblClick: "ondblclick",
            onDrag: "ondrag",
            onDragEnd: "ondragend",
            onDragEnter: "ondragenter",
            onDragExit: "ondragexit",
            onDragLeave: "ondragleave",
            onDragOver: "ondragover",
            onDragStart: "ondragstart",
            onDrop: "ondrop",
            onDurationChange: "ondurationchange",
            onEmptied: "onemptied",
            onEnd: "onend",
            onEnded: "onended",
            onError: "onerror",
            onFocus: "onfocus",
            onFocusIn: "onfocusin",
            onFocusOut: "onfocusout",
            onHashChange: "onhashchange",
            onInput: "oninput",
            onInvalid: "oninvalid",
            onKeyDown: "onkeydown",
            onKeyPress: "onkeypress",
            onKeyUp: "onkeyup",
            onLoad: "onload",
            onLoadedData: "onloadeddata",
            onLoadedMetadata: "onloadedmetadata",
            onLoadStart: "onloadstart",
            onMessage: "onmessage",
            onMouseDown: "onmousedown",
            onMouseEnter: "onmouseenter",
            onMouseLeave: "onmouseleave",
            onMouseMove: "onmousemove",
            onMouseOut: "onmouseout",
            onMouseOver: "onmouseover",
            onMouseUp: "onmouseup",
            onMouseWheel: "onmousewheel",
            onOffline: "onoffline",
            onOnline: "ononline",
            onPageHide: "onpagehide",
            onPageShow: "onpageshow",
            onPaste: "onpaste",
            onPause: "onpause",
            onPlay: "onplay",
            onPlaying: "onplaying",
            onPopState: "onpopstate",
            onProgress: "onprogress",
            onRateChange: "onratechange",
            onRepeat: "onrepeat",
            onReset: "onreset",
            onResize: "onresize",
            onScroll: "onscroll",
            onSeeked: "onseeked",
            onSeeking: "onseeking",
            onSelect: "onselect",
            onShow: "onshow",
            onStalled: "onstalled",
            onStorage: "onstorage",
            onSubmit: "onsubmit",
            onSuspend: "onsuspend",
            onTimeUpdate: "ontimeupdate",
            onToggle: "ontoggle",
            onUnload: "onunload",
            onVolumeChange: "onvolumechange",
            onWaiting: "onwaiting",
            onZoom: "onzoom",
            overlinePosition: "overline-position",
            overlineThickness: "overline-thickness",
            paintOrder: "paint-order",
            panose1: "panose-1",
            pointerEvents: "pointer-events",
            referrerPolicy: "referrerpolicy",
            renderingIntent: "rendering-intent",
            shapeRendering: "shape-rendering",
            stopColor: "stop-color",
            stopOpacity: "stop-opacity",
            strikethroughPosition: "strikethrough-position",
            strikethroughThickness: "strikethrough-thickness",
            strokeDashArray: "stroke-dasharray",
            strokeDashOffset: "stroke-dashoffset",
            strokeLineCap: "stroke-linecap",
            strokeLineJoin: "stroke-linejoin",
            strokeMiterLimit: "stroke-miterlimit",
            strokeOpacity: "stroke-opacity",
            strokeWidth: "stroke-width",
            tabIndex: "tabindex",
            textAnchor: "text-anchor",
            textDecoration: "text-decoration",
            textRendering: "text-rendering",
            typeOf: "typeof",
            underlinePosition: "underline-position",
            underlineThickness: "underline-thickness",
            unicodeBidi: "unicode-bidi",
            unicodeRange: "unicode-range",
            unitsPerEm: "units-per-em",
            vAlphabetic: "v-alphabetic",
            vHanging: "v-hanging",
            vIdeographic: "v-ideographic",
            vMathematical: "v-mathematical",
            vectorEffect: "vector-effect",
            vertAdvY: "vert-adv-y",
            vertOriginX: "vert-origin-x",
            vertOriginY: "vert-origin-y",
            wordSpacing: "word-spacing",
            writingMode: "writing-mode",
            xHeight: "x-height",
            playbackOrder: "playbackorder",
            timelineBegin: "timelinebegin"
        },
        transform: kt,
        properties: {
            about: Z,
            accentHeight: k,
            accumulate: null,
            additive: null,
            alignmentBaseline: null,
            alphabetic: k,
            amplitude: k,
            arabicForm: null,
            ascent: k,
            attributeName: null,
            attributeType: null,
            azimuth: k,
            bandwidth: null,
            baselineShift: null,
            baseFrequency: null,
            baseProfile: null,
            bbox: null,
            begin: null,
            bias: k,
            by: null,
            calcMode: null,
            capHeight: k,
            className: H,
            clip: null,
            clipPath: null,
            clipPathUnits: null,
            clipRule: null,
            color: null,
            colorInterpolation: null,
            colorInterpolationFilters: null,
            colorProfile: null,
            colorRendering: null,
            content: null,
            contentScriptType: null,
            contentStyleType: null,
            crossOrigin: null,
            cursor: null,
            cx: null,
            cy: null,
            d: null,
            dataType: null,
            defaultAction: null,
            descent: k,
            diffuseConstant: k,
            direction: null,
            display: null,
            dur: null,
            divisor: k,
            dominantBaseline: null,
            download: z,
            dx: null,
            dy: null,
            edgeMode: null,
            editable: null,
            elevation: k,
            enableBackground: null,
            end: null,
            event: null,
            exponent: k,
            externalResourcesRequired: null,
            fill: null,
            fillOpacity: k,
            fillRule: null,
            filter: null,
            filterRes: null,
            filterUnits: null,
            floodColor: null,
            floodOpacity: null,
            focusable: null,
            focusHighlight: null,
            fontFamily: null,
            fontSize: null,
            fontSizeAdjust: null,
            fontStretch: null,
            fontStyle: null,
            fontVariant: null,
            fontWeight: null,
            format: null,
            fr: null,
            from: null,
            fx: null,
            fy: null,
            g1: Ee,
            g2: Ee,
            glyphName: Ee,
            glyphOrientationHorizontal: null,
            glyphOrientationVertical: null,
            glyphRef: null,
            gradientTransform: null,
            gradientUnits: null,
            handler: null,
            hanging: k,
            hatchContentUnits: null,
            hatchUnits: null,
            height: null,
            href: null,
            hrefLang: null,
            horizAdvX: k,
            horizOriginX: k,
            horizOriginY: k,
            id: null,
            ideographic: k,
            imageRendering: null,
            initialVisibility: null,
            in: null,
            in2: null,
            intercept: k,
            k,
            k1: k,
            k2: k,
            k3: k,
            k4: k,
            kernelMatrix: Z,
            kernelUnitLength: null,
            keyPoints: null,
            keySplines: null,
            keyTimes: null,
            kerning: null,
            lang: null,
            lengthAdjust: null,
            letterSpacing: null,
            lightingColor: null,
            limitingConeAngle: k,
            local: null,
            markerEnd: null,
            markerMid: null,
            markerStart: null,
            markerHeight: null,
            markerUnits: null,
            markerWidth: null,
            mask: null,
            maskContentUnits: null,
            maskUnits: null,
            mathematical: null,
            max: null,
            media: null,
            mediaCharacterEncoding: null,
            mediaContentEncodings: null,
            mediaSize: k,
            mediaTime: null,
            method: null,
            min: null,
            mode: null,
            name: null,
            navDown: null,
            navDownLeft: null,
            navDownRight: null,
            navLeft: null,
            navNext: null,
            navPrev: null,
            navRight: null,
            navUp: null,
            navUpLeft: null,
            navUpRight: null,
            numOctaves: null,
            observer: null,
            offset: null,
            onAbort: null,
            onActivate: null,
            onAfterPrint: null,
            onBeforePrint: null,
            onBegin: null,
            onCancel: null,
            onCanPlay: null,
            onCanPlayThrough: null,
            onChange: null,
            onClick: null,
            onClose: null,
            onCopy: null,
            onCueChange: null,
            onCut: null,
            onDblClick: null,
            onDrag: null,
            onDragEnd: null,
            onDragEnter: null,
            onDragExit: null,
            onDragLeave: null,
            onDragOver: null,
            onDragStart: null,
            onDrop: null,
            onDurationChange: null,
            onEmptied: null,
            onEnd: null,
            onEnded: null,
            onError: null,
            onFocus: null,
            onFocusIn: null,
            onFocusOut: null,
            onHashChange: null,
            onInput: null,
            onInvalid: null,
            onKeyDown: null,
            onKeyPress: null,
            onKeyUp: null,
            onLoad: null,
            onLoadedData: null,
            onLoadedMetadata: null,
            onLoadStart: null,
            onMessage: null,
            onMouseDown: null,
            onMouseEnter: null,
            onMouseLeave: null,
            onMouseMove: null,
            onMouseOut: null,
            onMouseOver: null,
            onMouseUp: null,
            onMouseWheel: null,
            onOffline: null,
            onOnline: null,
            onPageHide: null,
            onPageShow: null,
            onPaste: null,
            onPause: null,
            onPlay: null,
            onPlaying: null,
            onPopState: null,
            onProgress: null,
            onRateChange: null,
            onRepeat: null,
            onReset: null,
            onResize: null,
            onScroll: null,
            onSeeked: null,
            onSeeking: null,
            onSelect: null,
            onShow: null,
            onStalled: null,
            onStorage: null,
            onSubmit: null,
            onSuspend: null,
            onTimeUpdate: null,
            onToggle: null,
            onUnload: null,
            onVolumeChange: null,
            onWaiting: null,
            onZoom: null,
            opacity: null,
            operator: null,
            order: null,
            orient: null,
            orientation: null,
            origin: null,
            overflow: null,
            overlay: null,
            overlinePosition: k,
            overlineThickness: k,
            paintOrder: null,
            panose1: null,
            path: null,
            pathLength: k,
            patternContentUnits: null,
            patternTransform: null,
            patternUnits: null,
            phase: null,
            ping: H,
            pitch: null,
            playbackOrder: null,
            pointerEvents: null,
            points: null,
            pointsAtX: k,
            pointsAtY: k,
            pointsAtZ: k,
            preserveAlpha: null,
            preserveAspectRatio: null,
            primitiveUnits: null,
            propagate: null,
            property: Z,
            r: null,
            radius: null,
            referrerPolicy: null,
            refX: null,
            refY: null,
            rel: Z,
            rev: Z,
            renderingIntent: null,
            repeatCount: null,
            repeatDur: null,
            requiredExtensions: Z,
            requiredFeatures: Z,
            requiredFonts: Z,
            requiredFormats: Z,
            resource: null,
            restart: null,
            result: null,
            rotate: null,
            rx: null,
            ry: null,
            scale: null,
            seed: null,
            shapeRendering: null,
            side: null,
            slope: null,
            snapshotTime: null,
            specularConstant: k,
            specularExponent: k,
            spreadMethod: null,
            spacing: null,
            startOffset: null,
            stdDeviation: null,
            stemh: null,
            stemv: null,
            stitchTiles: null,
            stopColor: null,
            stopOpacity: null,
            strikethroughPosition: k,
            strikethroughThickness: k,
            string: null,
            stroke: null,
            strokeDashArray: Z,
            strokeDashOffset: null,
            strokeLineCap: null,
            strokeLineJoin: null,
            strokeMiterLimit: k,
            strokeOpacity: k,
            strokeWidth: null,
            style: null,
            surfaceScale: k,
            syncBehavior: null,
            syncBehaviorDefault: null,
            syncMaster: null,
            syncTolerance: null,
            syncToleranceDefault: null,
            systemLanguage: Z,
            tabIndex: k,
            tableValues: null,
            target: null,
            targetX: k,
            targetY: k,
            textAnchor: null,
            textDecoration: null,
            textRendering: null,
            textLength: null,
            timelineBegin: null,
            title: null,
            transformBehavior: null,
            type: null,
            typeOf: Z,
            to: null,
            transform: null,
            u1: null,
            u2: null,
            underlinePosition: k,
            underlineThickness: k,
            unicode: null,
            unicodeBidi: null,
            unicodeRange: null,
            unitsPerEm: k,
            values: null,
            vAlphabetic: k,
            vMathematical: k,
            vectorEffect: null,
            vHanging: k,
            vIdeographic: k,
            version: null,
            vertAdvY: k,
            vertOriginX: k,
            vertOriginY: k,
            viewBox: null,
            viewTarget: null,
            visibility: null,
            width: null,
            widths: null,
            wordSpacing: null,
            writingMode: null,
            x: null,
            x1: null,
            x2: null,
            xChannelSelector: null,
            xHeight: k,
            y: null,
            y1: null,
            y2: null,
            yChannelSelector: null,
            z: null,
            zoomAndPan: null
        }
    }),
    mr = /^data[-\w.:]+$/i,
    Ln = /-[a-z]/g,
    dr = /[A-Z]/g;

function gr(e, n) {
    const t = tn(n);
    let r = n,
        i = te;
    if (t in e.normal) return e.property[e.normal[t]];
    if (t.length > 4 && t.slice(0, 4) === "data" && mr.test(n)) {
        if (n.charAt(4) === "-") {
            const l = n.slice(5).replace(Ln, xr);
            r = "data" + l.charAt(0).toUpperCase() + l.slice(1)
        } else {
            const l = n.slice(4);
            if (!Ln.test(l)) {
                let o = l.replace(dr, yr);
                o.charAt(0) !== "-" && (o = "-" + o), n = "data" + o
            }
        }
        i = hn
    }
    return new i(r, n)
}

function yr(e) {
    return "-" + e.toLowerCase()
}

function xr(e) {
    return e.charAt(1).toUpperCase()
}
const kr = {
        classId: "classID",
        dataType: "datatype",
        itemId: "itemID",
        strokeDashArray: "strokeDasharray",
        strokeDashOffset: "strokeDashoffset",
        strokeLineCap: "strokeLinecap",
        strokeLineJoin: "strokeLinejoin",
        strokeMiterLimit: "strokeMiterlimit",
        typeOf: "typeof",
        xLinkActuate: "xlinkActuate",
        xLinkArcRole: "xlinkArcrole",
        xLinkHref: "xlinkHref",
        xLinkRole: "xlinkRole",
        xLinkShow: "xlinkShow",
        xLinkTitle: "xlinkTitle",
        xLinkType: "xlinkType",
        xmlnsXLink: "xmlnsXlink"
    },
    br = dt([xt, yt, wt, St, hr], "html"),
    fn = dt([xt, yt, wt, St, fr], "svg");
var Ct = {},
    On = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    wr = /\n/g,
    Sr = /^\s*/,
    Cr = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    Er = /^:\s*/,
    Ir = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    Pr = /^[;\s]*/,
    Tr = /^\s+|\s+$/g,
    Ar = `
`,
    Dn = "/",
    Fn = "*",
    be = "",
    vr = "comment",
    zr = "declaration",
    Lr = function(e, n) {
        if (typeof e != "string") throw new TypeError("First argument must be a string");
        if (!e) return [];
        n = n || {};
        var t = 1,
            r = 1;

        function i(x) {
            var w = x.match(wr);
            w && (t += w.length);
            var I = x.lastIndexOf(Ar);
            r = ~I ? x.length - I : r + x.length
        }

        function l() {
            var x = {
                line: t,
                column: r
            };
            return function(w) {
                return w.position = new o(x), u(), w
            }
        }

        function o(x) {
            this.start = x, this.end = {
                line: t,
                column: r
            }, this.source = n.source
        }
        o.prototype.content = e;

        function a(x) {
            var w = new Error(n.source + ":" + t + ":" + r + ": " + x);
            if (w.reason = x, w.filename = n.source, w.line = t, w.column = r, w.source = e, !n.silent) throw w
        }

        function s(x) {
            var w = x.exec(e);
            if (w) {
                var I = w[0];
                return i(I), e = e.slice(I.length), w
            }
        }

        function u() {
            s(Sr)
        }

        function p(x) {
            var w;
            for (x = x || []; w = m();) w !== !1 && x.push(w);
            return x
        }

        function m() {
            var x = l();
            if (!(Dn != e.charAt(0) || Fn != e.charAt(1))) {
                for (var w = 2; be != e.charAt(w) && (Fn != e.charAt(w) || Dn != e.charAt(w + 1));) ++w;
                if (w += 2, be === e.charAt(w - 1)) return a("End of comment missing");
                var I = e.slice(2, w - 2);
                return r += 2, i(I), e = e.slice(w), r += 2, x({
                    type: vr,
                    comment: I
                })
            }
        }

        function d() {
            var x = l(),
                w = s(Cr);
            if (w) {
                if (m(), !s(Er)) return a("property missing ':'");
                var I = s(Ir),
                    b = x({
                        type: zr,
                        property: Nn(w[0].replace(On, be)),
                        value: I ? Nn(I[0].replace(On, be)) : be
                    });
                return s(Pr), b
            }
        }

        function c() {
            var x = [];
            p(x);
            for (var w; w = d();) w !== !1 && (x.push(w), p(x));
            return x
        }
        return u(), c()
    };

function Nn(e) {
    return e ? e.replace(Tr, be) : be
}
var Or = Tn && Tn.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    }
};
Object.defineProperty(Ct, "__esModule", {
    value: !0
});
var Dr = Or(Lr);

function Fr(e, n) {
    var t = null;
    if (!e || typeof e != "string") return t;
    var r = (0, Dr.default)(e),
        i = typeof n == "function";
    return r.forEach(function(l) {
        if (l.type === "declaration") {
            var o = l.property,
                a = l.value;
            i ? n(o, a, l) : a && (t = t || {}, t[o] = a)
        }
    }), t
}
var _n = Ct.default = Fr;
const Nr = _n.default || _n,
    Et = It("end"),
    mn = It("start");

function It(e) {
    return n;

    function n(t) {
        const r = t && t.position && t.position[e] || {};
        if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0) return {
            line: r.line,
            column: r.column,
            offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
        }
    }
}

function _r(e) {
    const n = mn(e),
        t = Et(e);
    if (n && t) return {
        start: n,
        end: t
    }
}

function Oe(e) {
    return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Mn(e.position) : "start" in e || "end" in e ? Mn(e) : "line" in e || "column" in e ? ln(e) : ""
}

function ln(e) {
    return Rn(e && e.line) + ":" + Rn(e && e.column)
}

function Mn(e) {
    return ln(e && e.start) + "-" + ln(e && e.end)
}

function Rn(e) {
    return e && typeof e == "number" ? e : 1
}
class X extends Error {
    constructor(n, t, r) {
        super(), typeof t == "string" && (r = t, t = void 0);
        let i = "",
            l = {},
            o = !1;
        if (t && ("line" in t && "column" in t ? l = {
                place: t
            } : "start" in t && "end" in t ? l = {
                place: t
            } : "type" in t ? l = {
                ancestors: [t],
                place: t.position
            } : l = { ...t
            }), typeof n == "string" ? i = n : !l.cause && n && (o = !0, i = n.message, l.cause = n), !l.ruleId && !l.source && typeof r == "string") {
            const s = r.indexOf(":");
            s === -1 ? l.ruleId = r : (l.source = r.slice(0, s), l.ruleId = r.slice(s + 1))
        }
        if (!l.place && l.ancestors && l.ancestors) {
            const s = l.ancestors[l.ancestors.length - 1];
            s && (l.place = s.position)
        }
        const a = l.place && "start" in l.place ? l.place.start : l.place;
        this.ancestors = l.ancestors || void 0, this.cause = l.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file, this.message = i, this.line = a ? a.line : void 0, this.name = Oe(l.place) || "1:1", this.place = l.place || void 0, this.reason = this.message, this.ruleId = l.ruleId || void 0, this.source = l.source || void 0, this.stack = o && l.cause && typeof l.cause.stack == "string" ? l.cause.stack : "", this.actual, this.expected, this.note, this.url
    }
}
X.prototype.file = "";
X.prototype.name = "";
X.prototype.reason = "";
X.prototype.message = "";
X.prototype.stack = "";
X.prototype.column = void 0;
X.prototype.line = void 0;
X.prototype.ancestors = void 0;
X.prototype.cause = void 0;
X.prototype.fatal = void 0;
X.prototype.place = void 0;
X.prototype.ruleId = void 0;
X.prototype.source = void 0;
const dn = {}.hasOwnProperty,
    Mr = new Map,
    Rr = /[A-Z]/g,
    Br = /-([a-z])/g,
    jr = new Set(["table", "tbody", "thead", "tfoot", "tr"]),
    Hr = new Set(["td", "th"]),
    Pt = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";

function Ur(e, n) {
    if (!n || n.Fragment === void 0) throw new TypeError("Expected `Fragment` in options");
    const t = n.filePath || void 0;
    let r;
    if (n.development) {
        if (typeof n.jsxDEV != "function") throw new TypeError("Expected `jsxDEV` in options when `development: true`");
        r = Kr(t, n.jsxDEV)
    } else {
        if (typeof n.jsx != "function") throw new TypeError("Expected `jsx` in production options");
        if (typeof n.jsxs != "function") throw new TypeError("Expected `jsxs` in production options");
        r = Xr(t, n.jsx, n.jsxs)
    }
    const i = {
            Fragment: n.Fragment,
            ancestors: [],
            components: n.components || {},
            create: r,
            elementAttributeNameCase: n.elementAttributeNameCase || "react",
            evaluater: n.createEvaluater ? n.createEvaluater() : void 0,
            filePath: t,
            ignoreInvalidStyle: n.ignoreInvalidStyle || !1,
            passKeys: n.passKeys !== !1,
            passNode: n.passNode || !1,
            schema: n.space === "svg" ? fn : br,
            stylePropertyNameCase: n.stylePropertyNameCase || "dom",
            tableCellAlignToStyle: n.tableCellAlignToStyle !== !1
        },
        l = Tt(i, e, void 0);
    return l && typeof l != "string" ? l : i.create(e, i.Fragment, {
        children: l || void 0
    }, void 0)
}

function Tt(e, n, t) {
    if (n.type === "element") return Vr(e, n, t);
    if (n.type === "mdxFlowExpression" || n.type === "mdxTextExpression") return qr(e, n);
    if (n.type === "mdxJsxFlowElement" || n.type === "mdxJsxTextElement") return Wr(e, n, t);
    if (n.type === "mdxjsEsm") return $r(e, n);
    if (n.type === "root") return Yr(e, n, t);
    if (n.type === "text") return Qr(e, n)
}

function Vr(e, n, t) {
    const r = e.schema;
    let i = r;
    n.tagName.toLowerCase() === "svg" && r.space === "html" && (i = fn, e.schema = i), e.ancestors.push(n);
    const l = vt(e, n.tagName, !1),
        o = Jr(e, n);
    let a = yn(e, n);
    return jr.has(n.tagName) && (a = a.filter(function(s) {
        return typeof s == "string" ? !sr(s) : !0
    })), At(e, o, l, n), gn(o, a), e.ancestors.pop(), e.schema = r, e.create(n, l, o, t)
}

function qr(e, n) {
    if (n.data && n.data.estree && e.evaluater) {
        const r = n.data.estree.body[0];
        return r.type, e.evaluater.evaluateExpression(r.expression)
    }
    Fe(e, n.position)
}

function $r(e, n) {
    if (n.data && n.data.estree && e.evaluater) return e.evaluater.evaluateProgram(n.data.estree);
    Fe(e, n.position)
}

function Wr(e, n, t) {
    const r = e.schema;
    let i = r;
    n.name === "svg" && r.space === "html" && (i = fn, e.schema = i), e.ancestors.push(n);
    const l = n.name === null ? e.Fragment : vt(e, n.name, !0),
        o = Gr(e, n),
        a = yn(e, n);
    return At(e, o, l, n), gn(o, a), e.ancestors.pop(), e.schema = r, e.create(n, l, o, t)
}

function Yr(e, n, t) {
    const r = {};
    return gn(r, yn(e, n)), e.create(n, e.Fragment, r, t)
}

function Qr(e, n) {
    return n.value
}

function At(e, n, t, r) {
    typeof t != "string" && t !== e.Fragment && e.passNode && (n.node = r)
}

function gn(e, n) {
    if (n.length > 0) {
        const t = n.length > 1 ? n : n[0];
        t && (e.children = t)
    }
}

function Xr(e, n, t) {
    return r;

    function r(i, l, o, a) {
        const u = Array.isArray(o.children) ? t : n;
        return a ? u(l, o, a) : u(l, o)
    }
}

function Kr(e, n) {
    return t;

    function t(r, i, l, o) {
        const a = Array.isArray(l.children),
            s = mn(r);
        return n(i, l, o, a, {
            columnNumber: s ? s.column - 1 : void 0,
            fileName: e,
            lineNumber: s ? s.line : void 0
        }, void 0)
    }
}

function Jr(e, n) {
    const t = {};
    let r, i;
    for (i in n.properties)
        if (i !== "children" && dn.call(n.properties, i)) {
            const l = Zr(e, i, n.properties[i]);
            if (l) {
                const [o, a] = l;
                e.tableCellAlignToStyle && o === "align" && typeof a == "string" && Hr.has(n.tagName) ? r = a : t[o] = a
            }
        }
    if (r) {
        const l = t.style || (t.style = {});
        l[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r
    }
    return t
}

function Gr(e, n) {
    const t = {};
    for (const r of n.attributes)
        if (r.type === "mdxJsxExpressionAttribute")
            if (r.data && r.data.estree && e.evaluater) {
                const l = r.data.estree.body[0];
                l.type;
                const o = l.expression;
                o.type;
                const a = o.properties[0];
                a.type, Object.assign(t, e.evaluater.evaluateExpression(a.argument))
            } else Fe(e, n.position);
    else {
        const i = r.name;
        let l;
        if (r.value && typeof r.value == "object")
            if (r.value.data && r.value.data.estree && e.evaluater) {
                const a = r.value.data.estree.body[0];
                a.type, l = e.evaluater.evaluateExpression(a.expression)
            } else Fe(e, n.position);
        else l = r.value === null ? !0 : r.value;
        t[i] = l
    }
    return t
}

function yn(e, n) {
    const t = [];
    let r = -1;
    const i = e.passKeys ? new Map : Mr;
    for (; ++r < n.children.length;) {
        const l = n.children[r];
        let o;
        if (e.passKeys) {
            const s = l.type === "element" ? l.tagName : l.type === "mdxJsxFlowElement" || l.type === "mdxJsxTextElement" ? l.name : void 0;
            if (s) {
                const u = i.get(s) || 0;
                o = s + "-" + u, i.set(s, u + 1)
            }
        }
        const a = Tt(e, l, o);
        a !== void 0 && t.push(a)
    }
    return t
}

function Zr(e, n, t) {
    const r = gr(e.schema, n);
    if (!(t == null || typeof t == "number" && Number.isNaN(t))) {
        if (Array.isArray(t) && (t = r.commaSeparated ? ir(t) : rr(t)), r.property === "style") {
            let i = typeof t == "object" ? t : ei(e, String(t));
            return e.stylePropertyNameCase === "css" && (i = ni(i)), ["style", i]
        }
        return [e.elementAttributeNameCase === "react" && r.space ? kr[r.property] || r.property : r.attribute, t]
    }
}

function ei(e, n) {
    const t = {};
    try {
        Nr(n, r)
    } catch (i) {
        if (!e.ignoreInvalidStyle) {
            const l = i,
                o = new X("Cannot parse `style` attribute", {
                    ancestors: e.ancestors,
                    cause: l,
                    ruleId: "style",
                    source: "hast-util-to-jsx-runtime"
                });
            throw o.file = e.filePath || void 0, o.url = Pt + "#cannot-parse-style-attribute", o
        }
    }
    return t;

    function r(i, l) {
        let o = i;
        o.slice(0, 2) !== "--" && (o.slice(0, 4) === "-ms-" && (o = "ms-" + o.slice(4)), o = o.replace(Br, ri)), t[o] = l
    }
}

function vt(e, n, t) {
    let r;
    if (!t) r = {
        type: "Literal",
        value: n
    };
    else if (n.includes(".")) {
        const i = n.split(".");
        let l = -1,
            o;
        for (; ++l < i.length;) {
            const a = An(i[l]) ? {
                type: "Identifier",
                name: i[l]
            } : {
                type: "Literal",
                value: i[l]
            };
            o = o ? {
                type: "MemberExpression",
                object: o,
                property: a,
                computed: !!(l && a.type === "Literal"),
                optional: !1
            } : a
        }
        r = o
    } else r = An(n) && !/^[a-z]/.test(n) ? {
        type: "Identifier",
        name: n
    } : {
        type: "Literal",
        value: n
    };
    if (r.type === "Literal") {
        const i = r.value;
        return dn.call(e.components, i) ? e.components[i] : i
    }
    if (e.evaluater) return e.evaluater.evaluateExpression(r);
    Fe(e)
}

function Fe(e, n) {
    const t = new X("Cannot handle MDX estrees without `createEvaluater`", {
        ancestors: e.ancestors,
        place: n,
        ruleId: "mdx-estree",
        source: "hast-util-to-jsx-runtime"
    });
    throw t.file = e.filePath || void 0, t.url = Pt + "#cannot-handle-mdx-estrees-without-createevaluater", t
}

function ni(e) {
    const n = {};
    let t;
    for (t in e) dn.call(e, t) && (n[ti(t)] = e[t]);
    return n
}

function ti(e) {
    let n = e.replace(Rr, ii);
    return n.slice(0, 3) === "ms-" && (n = "-" + n), n
}

function ri(e, n) {
    return n.toUpperCase()
}

function ii(e) {
    return "-" + e.toLowerCase()
}
const We = {
        action: ["form"],
        cite: ["blockquote", "del", "ins", "q"],
        data: ["object"],
        formAction: ["button", "input"],
        href: ["a", "area", "base", "link"],
        icon: ["menuitem"],
        itemId: null,
        manifest: ["html"],
        ping: ["a", "area"],
        poster: ["video"],
        src: ["audio", "embed", "iframe", "img", "input", "script", "source", "track", "video"]
    },
    li = {};

function oi(e, n) {
    const t = li,
        r = typeof t.includeImageAlt == "boolean" ? t.includeImageAlt : !0,
        i = typeof t.includeHtml == "boolean" ? t.includeHtml : !0;
    return zt(e, r, i)
}

function zt(e, n, t) {
    if (ai(e)) {
        if ("value" in e) return e.type === "html" && !t ? "" : e.value;
        if (n && "alt" in e && e.alt) return e.alt;
        if ("children" in e) return Bn(e.children, n, t)
    }
    return Array.isArray(e) ? Bn(e, n, t) : ""
}

function Bn(e, n, t) {
    const r = [];
    let i = -1;
    for (; ++i < e.length;) r[i] = zt(e[i], n, t);
    return r.join("")
}

function ai(e) {
    return !!(e && typeof e == "object")
}
const jn = document.createElement("i");

function xn(e) {
    const n = "&" + e + ";";
    jn.innerHTML = n;
    const t = jn.textContent;
    return t.charCodeAt(t.length - 1) === 59 && e !== "semi" || t === n ? !1 : t
}

function fe(e, n, t, r) {
    const i = e.length;
    let l = 0,
        o;
    if (n < 0 ? n = -n > i ? 0 : i + n : n = n > i ? i : n, t = t > 0 ? t : 0, r.length < 1e4) o = Array.from(r), o.unshift(n, t), e.splice(...o);
    else
        for (t && e.splice(n, t); l < r.length;) o = r.slice(l, l + 1e4), o.unshift(n, 0), e.splice(...o), l += 1e4, n += 1e4
}

function ne(e, n) {
    return e.length > 0 ? (fe(e, e.length, 0, n), e) : n
}
const Hn = {}.hasOwnProperty;

function ui(e) {
    const n = {};
    let t = -1;
    for (; ++t < e.length;) si(n, e[t]);
    return n
}

function si(e, n) {
    let t;
    for (t in n) {
        const i = (Hn.call(e, t) ? e[t] : void 0) || (e[t] = {}),
            l = n[t];
        let o;
        if (l)
            for (o in l) {
                Hn.call(i, o) || (i[o] = []);
                const a = l[o];
                ci(i[o], Array.isArray(a) ? a : a ? [a] : [])
            }
    }
}

function ci(e, n) {
    let t = -1;
    const r = [];
    for (; ++t < n.length;)(n[t].add === "after" ? e : r).push(n[t]);
    fe(e, 0, 0, r)
}

function Lt(e, n) {
    const t = Number.parseInt(e, n);
    return t < 9 || t === 11 || t > 13 && t < 32 || t > 126 && t < 160 || t > 55295 && t < 57344 || t > 64975 && t < 65008 || (t & 65535) === 65535 || (t & 65535) === 65534 || t > 1114111 ? "�" : String.fromCodePoint(t)
}

function Ie(e) {
    return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
}
const ue = ge(/[A-Za-z]/),
    ee = ge(/[\dA-Za-z]/),
    pi = ge(/[#-'*+\--9=?A-Z^-~]/);

function on(e) {
    return e !== null && (e < 32 || e === 127)
}
const an = ge(/\d/),
    hi = ge(/[\dA-Fa-f]/),
    fi = ge(/[!-/:-@[-`{-~]/);

function A(e) {
    return e !== null && e < -2
}

function J(e) {
    return e !== null && (e < 0 || e === 32)
}

function _(e) {
    return e === -2 || e === -1 || e === 32
}
const mi = ge(new RegExp("\\p{P}|\\p{S}", "u")),
    di = ge(/\s/);

function ge(e) {
    return n;

    function n(t) {
        return t !== null && t > -1 && e.test(String.fromCharCode(t))
    }
}

function Te(e) {
    const n = [];
    let t = -1,
        r = 0,
        i = 0;
    for (; ++t < e.length;) {
        const l = e.charCodeAt(t);
        let o = "";
        if (l === 37 && ee(e.charCodeAt(t + 1)) && ee(e.charCodeAt(t + 2))) i = 2;
        else if (l < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(l)) || (o = String.fromCharCode(l));
        else if (l > 55295 && l < 57344) {
            const a = e.charCodeAt(t + 1);
            l < 56320 && a > 56319 && a < 57344 ? (o = String.fromCharCode(l, a), i = 1) : o = "�"
        } else o = String.fromCharCode(l);
        o && (n.push(e.slice(r, t), encodeURIComponent(o)), r = t + i + 1, o = ""), i && (t += i, i = 0)
    }
    return n.join("") + e.slice(r)
}

function B(e, n, t, r) {
    const i = r ? r - 1 : Number.POSITIVE_INFINITY;
    let l = 0;
    return o;

    function o(s) {
        return _(s) ? (e.enter(t), a(s)) : n(s)
    }

    function a(s) {
        return _(s) && l++ < i ? (e.consume(s), a) : (e.exit(t), n(s))
    }
}
const gi = {
    tokenize: yi
};

function yi(e) {
    const n = e.attempt(this.parser.constructs.contentInitial, r, i);
    let t;
    return n;

    function r(a) {
        if (a === null) {
            e.consume(a);
            return
        }
        return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), B(e, n, "linePrefix")
    }

    function i(a) {
        return e.enter("paragraph"), l(a)
    }

    function l(a) {
        const s = e.enter("chunkText", {
            contentType: "text",
            previous: t
        });
        return t && (t.next = s), t = s, o(a)
    }

    function o(a) {
        if (a === null) {
            e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
            return
        }
        return A(a) ? (e.consume(a), e.exit("chunkText"), l) : (e.consume(a), o)
    }
}
const xi = {
        tokenize: ki
    },
    Un = {
        tokenize: bi
    };

function ki(e) {
    const n = this,
        t = [];
    let r = 0,
        i, l, o;
    return a;

    function a(C) {
        if (r < t.length) {
            const F = t[r];
            return n.containerState = F[1], e.attempt(F[0].continuation, s, u)(C)
        }
        return u(C)
    }

    function s(C) {
        if (r++, n.containerState._closeFlow) {
            n.containerState._closeFlow = void 0, i && E();
            const F = n.events.length;
            let L = F,
                y;
            for (; L--;)
                if (n.events[L][0] === "exit" && n.events[L][1].type === "chunkFlow") {
                    y = n.events[L][1].end;
                    break
                }
            b(r);
            let N = F;
            for (; N < n.events.length;) n.events[N][1].end = Object.assign({}, y), N++;
            return fe(n.events, L + 1, 0, n.events.slice(F)), n.events.length = N, u(C)
        }
        return a(C)
    }

    function u(C) {
        if (r === t.length) {
            if (!i) return d(C);
            if (i.currentConstruct && i.currentConstruct.concrete) return x(C);
            n.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack)
        }
        return n.containerState = {}, e.check(Un, p, m)(C)
    }

    function p(C) {
        return i && E(), b(r), d(C)
    }

    function m(C) {
        return n.parser.lazy[n.now().line] = r !== t.length, o = n.now().offset, x(C)
    }

    function d(C) {
        return n.containerState = {}, e.attempt(Un, c, x)(C)
    }

    function c(C) {
        return r++, t.push([n.currentConstruct, n.containerState]), d(C)
    }

    function x(C) {
        if (C === null) {
            i && E(), b(0), e.consume(C);
            return
        }
        return i = i || n.parser.flow(n.now()), e.enter("chunkFlow", {
            contentType: "flow",
            previous: l,
            _tokenizer: i
        }), w(C)
    }

    function w(C) {
        if (C === null) {
            I(e.exit("chunkFlow"), !0), b(0), e.consume(C);
            return
        }
        return A(C) ? (e.consume(C), I(e.exit("chunkFlow")), r = 0, n.interrupt = void 0, a) : (e.consume(C), w)
    }

    function I(C, F) {
        const L = n.sliceStream(C);
        if (F && L.push(null), C.previous = l, l && (l.next = C), l = C, i.defineSkip(C.start), i.write(L), n.parser.lazy[C.start.line]) {
            let y = i.events.length;
            for (; y--;)
                if (i.events[y][1].start.offset < o && (!i.events[y][1].end || i.events[y][1].end.offset > o)) return;
            const N = n.events.length;
            let V = N,
                R, j;
            for (; V--;)
                if (n.events[V][0] === "exit" && n.events[V][1].type === "chunkFlow") {
                    if (R) {
                        j = n.events[V][1].end;
                        break
                    }
                    R = !0
                }
            for (b(r), y = N; y < n.events.length;) n.events[y][1].end = Object.assign({}, j), y++;
            fe(n.events, V + 1, 0, n.events.slice(N)), n.events.length = y
        }
    }

    function b(C) {
        let F = t.length;
        for (; F-- > C;) {
            const L = t[F];
            n.containerState = L[1], L[0].exit.call(n, e)
        }
        t.length = C
    }

    function E() {
        i.write([null]), l = void 0, i = void 0, n.containerState._closeFlow = void 0
    }
}

function bi(e, n, t) {
    return B(e, e.attempt(this.parser.constructs.document, n, t), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
}

function Vn(e) {
    if (e === null || J(e) || di(e)) return 1;
    if (mi(e)) return 2
}

function kn(e, n, t) {
    const r = [];
    let i = -1;
    for (; ++i < e.length;) {
        const l = e[i].resolveAll;
        l && !r.includes(l) && (n = l(n, t), r.push(l))
    }
    return n
}
const un = {
    name: "attention",
    tokenize: Si,
    resolveAll: wi
};

function wi(e, n) {
    let t = -1,
        r, i, l, o, a, s, u, p;
    for (; ++t < e.length;)
        if (e[t][0] === "enter" && e[t][1].type === "attentionSequence" && e[t][1]._close) {
            for (r = t; r--;)
                if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && n.sliceSerialize(e[r][1]).charCodeAt(0) === n.sliceSerialize(e[t][1]).charCodeAt(0)) {
                    if ((e[r][1]._close || e[t][1]._open) && (e[t][1].end.offset - e[t][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[t][1].end.offset - e[t][1].start.offset) % 3)) continue;
                    s = e[r][1].end.offset - e[r][1].start.offset > 1 && e[t][1].end.offset - e[t][1].start.offset > 1 ? 2 : 1;
                    const m = Object.assign({}, e[r][1].end),
                        d = Object.assign({}, e[t][1].start);
                    qn(m, -s), qn(d, s), o = {
                        type: s > 1 ? "strongSequence" : "emphasisSequence",
                        start: m,
                        end: Object.assign({}, e[r][1].end)
                    }, a = {
                        type: s > 1 ? "strongSequence" : "emphasisSequence",
                        start: Object.assign({}, e[t][1].start),
                        end: d
                    }, l = {
                        type: s > 1 ? "strongText" : "emphasisText",
                        start: Object.assign({}, e[r][1].end),
                        end: Object.assign({}, e[t][1].start)
                    }, i = {
                        type: s > 1 ? "strong" : "emphasis",
                        start: Object.assign({}, o.start),
                        end: Object.assign({}, a.end)
                    }, e[r][1].end = Object.assign({}, o.start), e[t][1].start = Object.assign({}, a.end), u = [], e[r][1].end.offset - e[r][1].start.offset && (u = ne(u, [
                        ["enter", e[r][1], n],
                        ["exit", e[r][1], n]
                    ])), u = ne(u, [
                        ["enter", i, n],
                        ["enter", o, n],
                        ["exit", o, n],
                        ["enter", l, n]
                    ]), u = ne(u, kn(n.parser.constructs.insideSpan.null, e.slice(r + 1, t), n)), u = ne(u, [
                        ["exit", l, n],
                        ["enter", a, n],
                        ["exit", a, n],
                        ["exit", i, n]
                    ]), e[t][1].end.offset - e[t][1].start.offset ? (p = 2, u = ne(u, [
                        ["enter", e[t][1], n],
                        ["exit", e[t][1], n]
                    ])) : p = 0, fe(e, r - 1, t - r + 3, u), t = r + u.length - p - 2;
                    break
                }
        }
    for (t = -1; ++t < e.length;) e[t][1].type === "attentionSequence" && (e[t][1].type = "data");
    return e
}

function Si(e, n) {
    const t = this.parser.constructs.attentionMarkers.null,
        r = this.previous,
        i = Vn(r);
    let l;
    return o;

    function o(s) {
        return l = s, e.enter("attentionSequence"), a(s)
    }

    function a(s) {
        if (s === l) return e.consume(s), a;
        const u = e.exit("attentionSequence"),
            p = Vn(s),
            m = !p || p === 2 && i || t.includes(s),
            d = !i || i === 2 && p || t.includes(r);
        return u._open = !!(l === 42 ? m : m && (i || !d)), u._close = !!(l === 42 ? d : d && (p || !m)), n(s)
    }
}

function qn(e, n) {
    e.column += n, e.offset += n, e._bufferIndex += n
}
const Ci = {
    name: "autolink",
    tokenize: Ei
};

function Ei(e, n, t) {
    let r = 0;
    return i;

    function i(c) {
        return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(c), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), l
    }

    function l(c) {
        return ue(c) ? (e.consume(c), o) : c === 64 ? t(c) : u(c)
    }

    function o(c) {
        return c === 43 || c === 45 || c === 46 || ee(c) ? (r = 1, a(c)) : u(c)
    }

    function a(c) {
        return c === 58 ? (e.consume(c), r = 0, s) : (c === 43 || c === 45 || c === 46 || ee(c)) && r++ < 32 ? (e.consume(c), a) : (r = 0, u(c))
    }

    function s(c) {
        return c === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(c), e.exit("autolinkMarker"), e.exit("autolink"), n) : c === null || c === 32 || c === 60 || on(c) ? t(c) : (e.consume(c), s)
    }

    function u(c) {
        return c === 64 ? (e.consume(c), p) : pi(c) ? (e.consume(c), u) : t(c)
    }

    function p(c) {
        return ee(c) ? m(c) : t(c)
    }

    function m(c) {
        return c === 46 ? (e.consume(c), r = 0, p) : c === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(c), e.exit("autolinkMarker"), e.exit("autolink"), n) : d(c)
    }

    function d(c) {
        if ((c === 45 || ee(c)) && r++ < 63) {
            const x = c === 45 ? d : m;
            return e.consume(c), x
        }
        return t(c)
    }
}
const Ue = {
    tokenize: Ii,
    partial: !0
};

function Ii(e, n, t) {
    return r;

    function r(l) {
        return _(l) ? B(e, i, "linePrefix")(l) : i(l)
    }

    function i(l) {
        return l === null || A(l) ? n(l) : t(l)
    }
}
const Ot = {
    name: "blockQuote",
    tokenize: Pi,
    continuation: {
        tokenize: Ti
    },
    exit: Ai
};

function Pi(e, n, t) {
    const r = this;
    return i;

    function i(o) {
        if (o === 62) {
            const a = r.containerState;
            return a.open || (e.enter("blockQuote", {
                _container: !0
            }), a.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(o), e.exit("blockQuoteMarker"), l
        }
        return t(o)
    }

    function l(o) {
        return _(o) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(o), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), n) : (e.exit("blockQuotePrefix"), n(o))
    }
}

function Ti(e, n, t) {
    const r = this;
    return i;

    function i(o) {
        return _(o) ? B(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o) : l(o)
    }

    function l(o) {
        return e.attempt(Ot, n, t)(o)
    }
}

function Ai(e) {
    e.exit("blockQuote")
}
const Dt = {
    name: "characterEscape",
    tokenize: vi
};

function vi(e, n, t) {
    return r;

    function r(l) {
        return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(l), e.exit("escapeMarker"), i
    }

    function i(l) {
        return fi(l) ? (e.enter("characterEscapeValue"), e.consume(l), e.exit("characterEscapeValue"), e.exit("characterEscape"), n) : t(l)
    }
}
const Ft = {
    name: "characterReference",
    tokenize: zi
};

function zi(e, n, t) {
    const r = this;
    let i = 0,
        l, o;
    return a;

    function a(m) {
        return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(m), e.exit("characterReferenceMarker"), s
    }

    function s(m) {
        return m === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(m), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), l = 31, o = ee, p(m))
    }

    function u(m) {
        return m === 88 || m === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(m), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), l = 6, o = hi, p) : (e.enter("characterReferenceValue"), l = 7, o = an, p(m))
    }

    function p(m) {
        if (m === 59 && i) {
            const d = e.exit("characterReferenceValue");
            return o === ee && !xn(r.sliceSerialize(d)) ? t(m) : (e.enter("characterReferenceMarker"), e.consume(m), e.exit("characterReferenceMarker"), e.exit("characterReference"), n)
        }
        return o(m) && i++ < l ? (e.consume(m), p) : t(m)
    }
}
const $n = {
        tokenize: Oi,
        partial: !0
    },
    Wn = {
        name: "codeFenced",
        tokenize: Li,
        concrete: !0
    };

function Li(e, n, t) {
    const r = this,
        i = {
            tokenize: L,
            partial: !0
        };
    let l = 0,
        o = 0,
        a;
    return s;

    function s(y) {
        return u(y)
    }

    function u(y) {
        const N = r.events[r.events.length - 1];
        return l = N && N[1].type === "linePrefix" ? N[2].sliceSerialize(N[1], !0).length : 0, a = y, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), p(y)
    }

    function p(y) {
        return y === a ? (o++, e.consume(y), p) : o < 3 ? t(y) : (e.exit("codeFencedFenceSequence"), _(y) ? B(e, m, "whitespace")(y) : m(y))
    }

    function m(y) {
        return y === null || A(y) ? (e.exit("codeFencedFence"), r.interrupt ? n(y) : e.check($n, w, F)(y)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
            contentType: "string"
        }), d(y))
    }

    function d(y) {
        return y === null || A(y) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), m(y)) : _(y) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), B(e, c, "whitespace")(y)) : y === 96 && y === a ? t(y) : (e.consume(y), d)
    }

    function c(y) {
        return y === null || A(y) ? m(y) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
            contentType: "string"
        }), x(y))
    }

    function x(y) {
        return y === null || A(y) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), m(y)) : y === 96 && y === a ? t(y) : (e.consume(y), x)
    }

    function w(y) {
        return e.attempt(i, F, I)(y)
    }

    function I(y) {
        return e.enter("lineEnding"), e.consume(y), e.exit("lineEnding"), b
    }

    function b(y) {
        return l > 0 && _(y) ? B(e, E, "linePrefix", l + 1)(y) : E(y)
    }

    function E(y) {
        return y === null || A(y) ? e.check($n, w, F)(y) : (e.enter("codeFlowValue"), C(y))
    }

    function C(y) {
        return y === null || A(y) ? (e.exit("codeFlowValue"), E(y)) : (e.consume(y), C)
    }

    function F(y) {
        return e.exit("codeFenced"), n(y)
    }

    function L(y, N, V) {
        let R = 0;
        return j;

        function j(D) {
            return y.enter("lineEnding"), y.consume(D), y.exit("lineEnding"), T
        }

        function T(D) {
            return y.enter("codeFencedFence"), _(D) ? B(y, P, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(D) : P(D)
        }

        function P(D) {
            return D === a ? (y.enter("codeFencedFenceSequence"), U(D)) : V(D)
        }

        function U(D) {
            return D === a ? (R++, y.consume(D), U) : R >= o ? (y.exit("codeFencedFenceSequence"), _(D) ? B(y, q, "whitespace")(D) : q(D)) : V(D)
        }

        function q(D) {
            return D === null || A(D) ? (y.exit("codeFencedFence"), N(D)) : V(D)
        }
    }
}

function Oi(e, n, t) {
    const r = this;
    return i;

    function i(o) {
        return o === null ? t(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l)
    }

    function l(o) {
        return r.parser.lazy[r.now().line] ? t(o) : n(o)
    }
}
const Ye = {
        name: "codeIndented",
        tokenize: Fi
    },
    Di = {
        tokenize: Ni,
        partial: !0
    };

function Fi(e, n, t) {
    const r = this;
    return i;

    function i(u) {
        return e.enter("codeIndented"), B(e, l, "linePrefix", 5)(u)
    }

    function l(u) {
        const p = r.events[r.events.length - 1];
        return p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? o(u) : t(u)
    }

    function o(u) {
        return u === null ? s(u) : A(u) ? e.attempt(Di, o, s)(u) : (e.enter("codeFlowValue"), a(u))
    }

    function a(u) {
        return u === null || A(u) ? (e.exit("codeFlowValue"), o(u)) : (e.consume(u), a)
    }

    function s(u) {
        return e.exit("codeIndented"), n(u)
    }
}

function Ni(e, n, t) {
    const r = this;
    return i;

    function i(o) {
        return r.parser.lazy[r.now().line] ? t(o) : A(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i) : B(e, l, "linePrefix", 5)(o)
    }

    function l(o) {
        const a = r.events[r.events.length - 1];
        return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? n(o) : A(o) ? i(o) : t(o)
    }
}
const _i = {
    name: "codeText",
    tokenize: Bi,
    resolve: Mi,
    previous: Ri
};

function Mi(e) {
    let n = e.length - 4,
        t = 3,
        r, i;
    if ((e[t][1].type === "lineEnding" || e[t][1].type === "space") && (e[n][1].type === "lineEnding" || e[n][1].type === "space")) {
        for (r = t; ++r < n;)
            if (e[r][1].type === "codeTextData") {
                e[t][1].type = "codeTextPadding", e[n][1].type = "codeTextPadding", t += 2, n -= 2;
                break
            }
    }
    for (r = t - 1, n++; ++r <= n;) i === void 0 ? r !== n && e[r][1].type !== "lineEnding" && (i = r) : (r === n || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), n -= r - i - 2, r = i + 2), i = void 0);
    return e
}

function Ri(e) {
    return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape"
}

function Bi(e, n, t) {
    let r = 0,
        i, l;
    return o;

    function o(m) {
        return e.enter("codeText"), e.enter("codeTextSequence"), a(m)
    }

    function a(m) {
        return m === 96 ? (e.consume(m), r++, a) : (e.exit("codeTextSequence"), s(m))
    }

    function s(m) {
        return m === null ? t(m) : m === 32 ? (e.enter("space"), e.consume(m), e.exit("space"), s) : m === 96 ? (l = e.enter("codeTextSequence"), i = 0, p(m)) : A(m) ? (e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), s) : (e.enter("codeTextData"), u(m))
    }

    function u(m) {
        return m === null || m === 32 || m === 96 || A(m) ? (e.exit("codeTextData"), s(m)) : (e.consume(m), u)
    }

    function p(m) {
        return m === 96 ? (e.consume(m), i++, p) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), n(m)) : (l.type = "codeTextData", u(m))
    }
}
class ji {
    constructor(n) {
        this.left = n ? [...n] : [], this.right = []
    }
    get(n) {
        if (n < 0 || n >= this.left.length + this.right.length) throw new RangeError("Cannot access index `" + n + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
        return n < this.left.length ? this.left[n] : this.right[this.right.length - n + this.left.length - 1]
    }
    get length() {
        return this.left.length + this.right.length
    }
    shift() {
        return this.setCursor(0), this.right.pop()
    }
    slice(n, t) {
        const r = t ? ? Number.POSITIVE_INFINITY;
        return r < this.left.length ? this.left.slice(n, r) : n > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - n + this.left.length).reverse() : this.left.slice(n).concat(this.right.slice(this.right.length - r + this.left.length).reverse())
    }
    splice(n, t, r) {
        const i = t || 0;
        this.setCursor(Math.trunc(n));
        const l = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
        return r && Le(this.left, r), l.reverse()
    }
    pop() {
        return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop()
    }
    push(n) {
        this.setCursor(Number.POSITIVE_INFINITY), this.left.push(n)
    }
    pushMany(n) {
        this.setCursor(Number.POSITIVE_INFINITY), Le(this.left, n)
    }
    unshift(n) {
        this.setCursor(0), this.right.push(n)
    }
    unshiftMany(n) {
        this.setCursor(0), Le(this.right, n.reverse())
    }
    setCursor(n) {
        if (!(n === this.left.length || n > this.left.length && this.right.length === 0 || n < 0 && this.left.length === 0))
            if (n < this.left.length) {
                const t = this.left.splice(n, Number.POSITIVE_INFINITY);
                Le(this.right, t.reverse())
            } else {
                const t = this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
                Le(this.left, t.reverse())
            }
    }
}

function Le(e, n) {
    let t = 0;
    if (n.length < 1e4) e.push(...n);
    else
        for (; t < n.length;) e.push(...n.slice(t, t + 1e4)), t += 1e4
}

function Nt(e) {
    const n = {};
    let t = -1,
        r, i, l, o, a, s, u;
    const p = new ji(e);
    for (; ++t < p.length;) {
        for (; t in n;) t = n[t];
        if (r = p.get(t), t && r[1].type === "chunkFlow" && p.get(t - 1)[1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, l = 0, l < s.length && s[l][1].type === "lineEndingBlank" && (l += 2), l < s.length && s[l][1].type === "content"))
            for (; ++l < s.length && s[l][1].type !== "content";) s[l][1].type === "chunkText" && (s[l][1]._isInFirstContentOfListItem = !0, l++);
        if (r[0] === "enter") r[1].contentType && (Object.assign(n, Hi(p, t)), t = n[t], u = !0);
        else if (r[1]._container) {
            for (l = t, i = void 0; l-- && (o = p.get(l), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank");) o[0] === "enter" && (i && (p.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = l);
            i && (r[1].end = Object.assign({}, p.get(i)[1].start), a = p.slice(i, t), a.unshift(r), p.splice(i, t - i + 1, a))
        }
    }
    return fe(e, 0, Number.POSITIVE_INFINITY, p.slice(0)), !u
}

function Hi(e, n) {
    const t = e.get(n)[1],
        r = e.get(n)[2];
    let i = n - 1;
    const l = [],
        o = t._tokenizer || r.parser[t.contentType](t.start),
        a = o.events,
        s = [],
        u = {};
    let p, m, d = -1,
        c = t,
        x = 0,
        w = 0;
    const I = [w];
    for (; c;) {
        for (; e.get(++i)[1] !== c;);
        l.push(i), c._tokenizer || (p = r.sliceStream(c), c.next || p.push(null), m && o.defineSkip(c.start), c._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(p), c._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), m = c, c = c.next
    }
    for (c = t; ++d < a.length;) a[d][0] === "exit" && a[d - 1][0] === "enter" && a[d][1].type === a[d - 1][1].type && a[d][1].start.line !== a[d][1].end.line && (w = d + 1, I.push(w), c._tokenizer = void 0, c.previous = void 0, c = c.next);
    for (o.events = [], c ? (c._tokenizer = void 0, c.previous = void 0) : I.pop(), d = I.length; d--;) {
        const b = a.slice(I[d], I[d + 1]),
            E = l.pop();
        s.push([E, E + b.length - 1]), e.splice(E, 2, b)
    }
    for (s.reverse(), d = -1; ++d < s.length;) u[x + s[d][0]] = x + s[d][1], x += s[d][1] - s[d][0] - 1;
    return u
}
const Ui = {
        tokenize: $i,
        resolve: qi
    },
    Vi = {
        tokenize: Wi,
        partial: !0
    };

function qi(e) {
    return Nt(e), e
}

function $i(e, n) {
    let t;
    return r;

    function r(a) {
        return e.enter("content"), t = e.enter("chunkContent", {
            contentType: "content"
        }), i(a)
    }

    function i(a) {
        return a === null ? l(a) : A(a) ? e.check(Vi, o, l)(a) : (e.consume(a), i)
    }

    function l(a) {
        return e.exit("chunkContent"), e.exit("content"), n(a)
    }

    function o(a) {
        return e.consume(a), e.exit("chunkContent"), t.next = e.enter("chunkContent", {
            contentType: "content",
            previous: t
        }), t = t.next, i
    }
}

function Wi(e, n, t) {
    const r = this;
    return i;

    function i(o) {
        return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), B(e, l, "linePrefix")
    }

    function l(o) {
        if (o === null || A(o)) return t(o);
        const a = r.events[r.events.length - 1];
        return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? n(o) : e.interrupt(r.parser.constructs.flow, t, n)(o)
    }
}

function _t(e, n, t, r, i, l, o, a, s) {
    const u = s || Number.POSITIVE_INFINITY;
    let p = 0;
    return m;

    function m(b) {
        return b === 60 ? (e.enter(r), e.enter(i), e.enter(l), e.consume(b), e.exit(l), d) : b === null || b === 32 || b === 41 || on(b) ? t(b) : (e.enter(r), e.enter(o), e.enter(a), e.enter("chunkString", {
            contentType: "string"
        }), w(b))
    }

    function d(b) {
        return b === 62 ? (e.enter(l), e.consume(b), e.exit(l), e.exit(i), e.exit(r), n) : (e.enter(a), e.enter("chunkString", {
            contentType: "string"
        }), c(b))
    }

    function c(b) {
        return b === 62 ? (e.exit("chunkString"), e.exit(a), d(b)) : b === null || b === 60 || A(b) ? t(b) : (e.consume(b), b === 92 ? x : c)
    }

    function x(b) {
        return b === 60 || b === 62 || b === 92 ? (e.consume(b), c) : c(b)
    }

    function w(b) {
        return !p && (b === null || b === 41 || J(b)) ? (e.exit("chunkString"), e.exit(a), e.exit(o), e.exit(r), n(b)) : p < u && b === 40 ? (e.consume(b), p++, w) : b === 41 ? (e.consume(b), p--, w) : b === null || b === 32 || b === 40 || on(b) ? t(b) : (e.consume(b), b === 92 ? I : w)
    }

    function I(b) {
        return b === 40 || b === 41 || b === 92 ? (e.consume(b), w) : w(b)
    }
}

function Mt(e, n, t, r, i, l) {
    const o = this;
    let a = 0,
        s;
    return u;

    function u(c) {
        return e.enter(r), e.enter(i), e.consume(c), e.exit(i), e.enter(l), p
    }

    function p(c) {
        return a > 999 || c === null || c === 91 || c === 93 && !s || c === 94 && !a && "_hiddenFootnoteSupport" in o.parser.constructs ? t(c) : c === 93 ? (e.exit(l), e.enter(i), e.consume(c), e.exit(i), e.exit(r), n) : A(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), p) : (e.enter("chunkString", {
            contentType: "string"
        }), m(c))
    }

    function m(c) {
        return c === null || c === 91 || c === 93 || A(c) || a++ > 999 ? (e.exit("chunkString"), p(c)) : (e.consume(c), s || (s = !_(c)), c === 92 ? d : m)
    }

    function d(c) {
        return c === 91 || c === 92 || c === 93 ? (e.consume(c), a++, m) : m(c)
    }
}

function Rt(e, n, t, r, i, l) {
    let o;
    return a;

    function a(d) {
        return d === 34 || d === 39 || d === 40 ? (e.enter(r), e.enter(i), e.consume(d), e.exit(i), o = d === 40 ? 41 : d, s) : t(d)
    }

    function s(d) {
        return d === o ? (e.enter(i), e.consume(d), e.exit(i), e.exit(r), n) : (e.enter(l), u(d))
    }

    function u(d) {
        return d === o ? (e.exit(l), s(o)) : d === null ? t(d) : A(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), B(e, u, "linePrefix")) : (e.enter("chunkString", {
            contentType: "string"
        }), p(d))
    }

    function p(d) {
        return d === o || d === null || A(d) ? (e.exit("chunkString"), u(d)) : (e.consume(d), d === 92 ? m : p)
    }

    function m(d) {
        return d === o || d === 92 ? (e.consume(d), p) : p(d)
    }
}

function De(e, n) {
    let t;
    return r;

    function r(i) {
        return A(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), t = !0, r) : _(i) ? B(e, r, t ? "linePrefix" : "lineSuffix")(i) : n(i)
    }
}
const Yi = {
        name: "definition",
        tokenize: Xi
    },
    Qi = {
        tokenize: Ki,
        partial: !0
    };

function Xi(e, n, t) {
    const r = this;
    let i;
    return l;

    function l(c) {
        return e.enter("definition"), o(c)
    }

    function o(c) {
        return Mt.call(r, e, a, t, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(c)
    }

    function a(c) {
        return i = Ie(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), c === 58 ? (e.enter("definitionMarker"), e.consume(c), e.exit("definitionMarker"), s) : t(c)
    }

    function s(c) {
        return J(c) ? De(e, u)(c) : u(c)
    }

    function u(c) {
        return _t(e, p, t, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(c)
    }

    function p(c) {
        return e.attempt(Qi, m, m)(c)
    }

    function m(c) {
        return _(c) ? B(e, d, "whitespace")(c) : d(c)
    }

    function d(c) {
        return c === null || A(c) ? (e.exit("definition"), r.parser.defined.push(i), n(c)) : t(c)
    }
}

function Ki(e, n, t) {
    return r;

    function r(a) {
        return J(a) ? De(e, i)(a) : t(a)
    }

    function i(a) {
        return Rt(e, l, t, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a)
    }

    function l(a) {
        return _(a) ? B(e, o, "whitespace")(a) : o(a)
    }

    function o(a) {
        return a === null || A(a) ? n(a) : t(a)
    }
}
const Ji = {
    name: "hardBreakEscape",
    tokenize: Gi
};

function Gi(e, n, t) {
    return r;

    function r(l) {
        return e.enter("hardBreakEscape"), e.consume(l), i
    }

    function i(l) {
        return A(l) ? (e.exit("hardBreakEscape"), n(l)) : t(l)
    }
}
const Zi = {
    name: "headingAtx",
    tokenize: nl,
    resolve: el
};

function el(e, n) {
    let t = e.length - 2,
        r = 3,
        i, l;
    return e[r][1].type === "whitespace" && (r += 2), t - 2 > r && e[t][1].type === "whitespace" && (t -= 2), e[t][1].type === "atxHeadingSequence" && (r === t - 1 || t - 4 > r && e[t - 2][1].type === "whitespace") && (t -= r + 1 === t ? 2 : 4), t > r && (i = {
        type: "atxHeadingText",
        start: e[r][1].start,
        end: e[t][1].end
    }, l = {
        type: "chunkText",
        start: e[r][1].start,
        end: e[t][1].end,
        contentType: "text"
    }, fe(e, r, t - r + 1, [
        ["enter", i, n],
        ["enter", l, n],
        ["exit", l, n],
        ["exit", i, n]
    ])), e
}

function nl(e, n, t) {
    let r = 0;
    return i;

    function i(p) {
        return e.enter("atxHeading"), l(p)
    }

    function l(p) {
        return e.enter("atxHeadingSequence"), o(p)
    }

    function o(p) {
        return p === 35 && r++ < 6 ? (e.consume(p), o) : p === null || J(p) ? (e.exit("atxHeadingSequence"), a(p)) : t(p)
    }

    function a(p) {
        return p === 35 ? (e.enter("atxHeadingSequence"), s(p)) : p === null || A(p) ? (e.exit("atxHeading"), n(p)) : _(p) ? B(e, a, "whitespace")(p) : (e.enter("atxHeadingText"), u(p))
    }

    function s(p) {
        return p === 35 ? (e.consume(p), s) : (e.exit("atxHeadingSequence"), a(p))
    }

    function u(p) {
        return p === null || p === 35 || J(p) ? (e.exit("atxHeadingText"), a(p)) : (e.consume(p), u)
    }
}
const tl = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
    Yn = ["pre", "script", "style", "textarea"],
    rl = {
        name: "htmlFlow",
        tokenize: al,
        resolveTo: ol,
        concrete: !0
    },
    il = {
        tokenize: sl,
        partial: !0
    },
    ll = {
        tokenize: ul,
        partial: !0
    };

function ol(e) {
    let n = e.length;
    for (; n-- && !(e[n][0] === "enter" && e[n][1].type === "htmlFlow"););
    return n > 1 && e[n - 2][1].type === "linePrefix" && (e[n][1].start = e[n - 2][1].start, e[n + 1][1].start = e[n - 2][1].start, e.splice(n - 2, 2)), e
}

function al(e, n, t) {
    const r = this;
    let i, l, o, a, s;
    return u;

    function u(f) {
        return p(f)
    }

    function p(f) {
        return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(f), m
    }

    function m(f) {
        return f === 33 ? (e.consume(f), d) : f === 47 ? (e.consume(f), l = !0, w) : f === 63 ? (e.consume(f), i = 3, r.interrupt ? n : h) : ue(f) ? (e.consume(f), o = String.fromCharCode(f), I) : t(f)
    }

    function d(f) {
        return f === 45 ? (e.consume(f), i = 2, c) : f === 91 ? (e.consume(f), i = 5, a = 0, x) : ue(f) ? (e.consume(f), i = 4, r.interrupt ? n : h) : t(f)
    }

    function c(f) {
        return f === 45 ? (e.consume(f), r.interrupt ? n : h) : t(f)
    }

    function x(f) {
        const le = "CDATA[";
        return f === le.charCodeAt(a++) ? (e.consume(f), a === le.length ? r.interrupt ? n : P : x) : t(f)
    }

    function w(f) {
        return ue(f) ? (e.consume(f), o = String.fromCharCode(f), I) : t(f)
    }

    function I(f) {
        if (f === null || f === 47 || f === 62 || J(f)) {
            const le = f === 47,
                ye = o.toLowerCase();
            return !le && !l && Yn.includes(ye) ? (i = 1, r.interrupt ? n(f) : P(f)) : tl.includes(o.toLowerCase()) ? (i = 6, le ? (e.consume(f), b) : r.interrupt ? n(f) : P(f)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? t(f) : l ? E(f) : C(f))
        }
        return f === 45 || ee(f) ? (e.consume(f), o += String.fromCharCode(f), I) : t(f)
    }

    function b(f) {
        return f === 62 ? (e.consume(f), r.interrupt ? n : P) : t(f)
    }

    function E(f) {
        return _(f) ? (e.consume(f), E) : j(f)
    }

    function C(f) {
        return f === 47 ? (e.consume(f), j) : f === 58 || f === 95 || ue(f) ? (e.consume(f), F) : _(f) ? (e.consume(f), C) : j(f)
    }

    function F(f) {
        return f === 45 || f === 46 || f === 58 || f === 95 || ee(f) ? (e.consume(f), F) : L(f)
    }

    function L(f) {
        return f === 61 ? (e.consume(f), y) : _(f) ? (e.consume(f), L) : C(f)
    }

    function y(f) {
        return f === null || f === 60 || f === 61 || f === 62 || f === 96 ? t(f) : f === 34 || f === 39 ? (e.consume(f), s = f, N) : _(f) ? (e.consume(f), y) : V(f)
    }

    function N(f) {
        return f === s ? (e.consume(f), s = null, R) : f === null || A(f) ? t(f) : (e.consume(f), N)
    }

    function V(f) {
        return f === null || f === 34 || f === 39 || f === 47 || f === 60 || f === 61 || f === 62 || f === 96 || J(f) ? L(f) : (e.consume(f), V)
    }

    function R(f) {
        return f === 47 || f === 62 || _(f) ? C(f) : t(f)
    }

    function j(f) {
        return f === 62 ? (e.consume(f), T) : t(f)
    }

    function T(f) {
        return f === null || A(f) ? P(f) : _(f) ? (e.consume(f), T) : t(f)
    }

    function P(f) {
        return f === 45 && i === 2 ? (e.consume(f), Q) : f === 60 && i === 1 ? (e.consume(f), W) : f === 62 && i === 4 ? (e.consume(f), ie) : f === 63 && i === 3 ? (e.consume(f), h) : f === 93 && i === 5 ? (e.consume(f), se) : A(f) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(il, ce, U)(f)) : f === null || A(f) ? (e.exit("htmlFlowData"), U(f)) : (e.consume(f), P)
    }

    function U(f) {
        return e.check(ll, q, ce)(f)
    }

    function q(f) {
        return e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), D
    }

    function D(f) {
        return f === null || A(f) ? U(f) : (e.enter("htmlFlowData"), P(f))
    }

    function Q(f) {
        return f === 45 ? (e.consume(f), h) : P(f)
    }

    function W(f) {
        return f === 47 ? (e.consume(f), o = "", re) : P(f)
    }

    function re(f) {
        if (f === 62) {
            const le = o.toLowerCase();
            return Yn.includes(le) ? (e.consume(f), ie) : P(f)
        }
        return ue(f) && o.length < 8 ? (e.consume(f), o += String.fromCharCode(f), re) : P(f)
    }

    function se(f) {
        return f === 93 ? (e.consume(f), h) : P(f)
    }

    function h(f) {
        return f === 62 ? (e.consume(f), ie) : f === 45 && i === 2 ? (e.consume(f), h) : P(f)
    }

    function ie(f) {
        return f === null || A(f) ? (e.exit("htmlFlowData"), ce(f)) : (e.consume(f), ie)
    }

    function ce(f) {
        return e.exit("htmlFlow"), n(f)
    }
}

function ul(e, n, t) {
    const r = this;
    return i;

    function i(o) {
        return A(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), l) : t(o)
    }

    function l(o) {
        return r.parser.lazy[r.now().line] ? t(o) : n(o)
    }
}

function sl(e, n, t) {
    return r;

    function r(i) {
        return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(Ue, n, t)
    }
}
const cl = {
    name: "htmlText",
    tokenize: pl
};

function pl(e, n, t) {
    const r = this;
    let i, l, o;
    return a;

    function a(h) {
        return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(h), s
    }

    function s(h) {
        return h === 33 ? (e.consume(h), u) : h === 47 ? (e.consume(h), L) : h === 63 ? (e.consume(h), C) : ue(h) ? (e.consume(h), V) : t(h)
    }

    function u(h) {
        return h === 45 ? (e.consume(h), p) : h === 91 ? (e.consume(h), l = 0, x) : ue(h) ? (e.consume(h), E) : t(h)
    }

    function p(h) {
        return h === 45 ? (e.consume(h), c) : t(h)
    }

    function m(h) {
        return h === null ? t(h) : h === 45 ? (e.consume(h), d) : A(h) ? (o = m, W(h)) : (e.consume(h), m)
    }

    function d(h) {
        return h === 45 ? (e.consume(h), c) : m(h)
    }

    function c(h) {
        return h === 62 ? Q(h) : h === 45 ? d(h) : m(h)
    }

    function x(h) {
        const ie = "CDATA[";
        return h === ie.charCodeAt(l++) ? (e.consume(h), l === ie.length ? w : x) : t(h)
    }

    function w(h) {
        return h === null ? t(h) : h === 93 ? (e.consume(h), I) : A(h) ? (o = w, W(h)) : (e.consume(h), w)
    }

    function I(h) {
        return h === 93 ? (e.consume(h), b) : w(h)
    }

    function b(h) {
        return h === 62 ? Q(h) : h === 93 ? (e.consume(h), b) : w(h)
    }

    function E(h) {
        return h === null || h === 62 ? Q(h) : A(h) ? (o = E, W(h)) : (e.consume(h), E)
    }

    function C(h) {
        return h === null ? t(h) : h === 63 ? (e.consume(h), F) : A(h) ? (o = C, W(h)) : (e.consume(h), C)
    }

    function F(h) {
        return h === 62 ? Q(h) : C(h)
    }

    function L(h) {
        return ue(h) ? (e.consume(h), y) : t(h)
    }

    function y(h) {
        return h === 45 || ee(h) ? (e.consume(h), y) : N(h)
    }

    function N(h) {
        return A(h) ? (o = N, W(h)) : _(h) ? (e.consume(h), N) : Q(h)
    }

    function V(h) {
        return h === 45 || ee(h) ? (e.consume(h), V) : h === 47 || h === 62 || J(h) ? R(h) : t(h)
    }

    function R(h) {
        return h === 47 ? (e.consume(h), Q) : h === 58 || h === 95 || ue(h) ? (e.consume(h), j) : A(h) ? (o = R, W(h)) : _(h) ? (e.consume(h), R) : Q(h)
    }

    function j(h) {
        return h === 45 || h === 46 || h === 58 || h === 95 || ee(h) ? (e.consume(h), j) : T(h)
    }

    function T(h) {
        return h === 61 ? (e.consume(h), P) : A(h) ? (o = T, W(h)) : _(h) ? (e.consume(h), T) : R(h)
    }

    function P(h) {
        return h === null || h === 60 || h === 61 || h === 62 || h === 96 ? t(h) : h === 34 || h === 39 ? (e.consume(h), i = h, U) : A(h) ? (o = P, W(h)) : _(h) ? (e.consume(h), P) : (e.consume(h), q)
    }

    function U(h) {
        return h === i ? (e.consume(h), i = void 0, D) : h === null ? t(h) : A(h) ? (o = U, W(h)) : (e.consume(h), U)
    }

    function q(h) {
        return h === null || h === 34 || h === 39 || h === 60 || h === 61 || h === 96 ? t(h) : h === 47 || h === 62 || J(h) ? R(h) : (e.consume(h), q)
    }

    function D(h) {
        return h === 47 || h === 62 || J(h) ? R(h) : t(h)
    }

    function Q(h) {
        return h === 62 ? (e.consume(h), e.exit("htmlTextData"), e.exit("htmlText"), n) : t(h)
    }

    function W(h) {
        return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), re
    }

    function re(h) {
        return _(h) ? B(e, se, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(h) : se(h)
    }

    function se(h) {
        return e.enter("htmlTextData"), o(h)
    }
}
const bn = {
        name: "labelEnd",
        tokenize: yl,
        resolveTo: gl,
        resolveAll: dl
    },
    hl = {
        tokenize: xl
    },
    fl = {
        tokenize: kl
    },
    ml = {
        tokenize: bl
    };

function dl(e) {
    let n = -1;
    for (; ++n < e.length;) {
        const t = e[n][1];
        (t.type === "labelImage" || t.type === "labelLink" || t.type === "labelEnd") && (e.splice(n + 1, t.type === "labelImage" ? 4 : 2), t.type = "data", n++)
    }
    return e
}

function gl(e, n) {
    let t = e.length,
        r = 0,
        i, l, o, a;
    for (; t--;)
        if (i = e[t][1], l) {
            if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
            e[t][0] === "enter" && i.type === "labelLink" && (i._inactive = !0)
        } else if (o) {
        if (e[t][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (l = t, i.type !== "labelLink")) {
            r = 2;
            break
        }
    } else i.type === "labelEnd" && (o = t);
    const s = {
            type: e[l][1].type === "labelLink" ? "link" : "image",
            start: Object.assign({}, e[l][1].start),
            end: Object.assign({}, e[e.length - 1][1].end)
        },
        u = {
            type: "label",
            start: Object.assign({}, e[l][1].start),
            end: Object.assign({}, e[o][1].end)
        },
        p = {
            type: "labelText",
            start: Object.assign({}, e[l + r + 2][1].end),
            end: Object.assign({}, e[o - 2][1].start)
        };
    return a = [
        ["enter", s, n],
        ["enter", u, n]
    ], a = ne(a, e.slice(l + 1, l + r + 3)), a = ne(a, [
        ["enter", p, n]
    ]), a = ne(a, kn(n.parser.constructs.insideSpan.null, e.slice(l + r + 4, o - 3), n)), a = ne(a, [
        ["exit", p, n], e[o - 2], e[o - 1],
        ["exit", u, n]
    ]), a = ne(a, e.slice(o + 1)), a = ne(a, [
        ["exit", s, n]
    ]), fe(e, l, e.length, a), e
}

function yl(e, n, t) {
    const r = this;
    let i = r.events.length,
        l, o;
    for (; i--;)
        if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
            l = r.events[i][1];
            break
        }
    return a;

    function a(d) {
        return l ? l._inactive ? m(d) : (o = r.parser.defined.includes(Ie(r.sliceSerialize({
            start: l.end,
            end: r.now()
        }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(d), e.exit("labelMarker"), e.exit("labelEnd"), s) : t(d)
    }

    function s(d) {
        return d === 40 ? e.attempt(hl, p, o ? p : m)(d) : d === 91 ? e.attempt(fl, p, o ? u : m)(d) : o ? p(d) : m(d)
    }

    function u(d) {
        return e.attempt(ml, p, m)(d)
    }

    function p(d) {
        return n(d)
    }

    function m(d) {
        return l._balanced = !0, t(d)
    }
}

function xl(e, n, t) {
    return r;

    function r(m) {
        return e.enter("resource"), e.enter("resourceMarker"), e.consume(m), e.exit("resourceMarker"), i
    }

    function i(m) {
        return J(m) ? De(e, l)(m) : l(m)
    }

    function l(m) {
        return m === 41 ? p(m) : _t(e, o, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(m)
    }

    function o(m) {
        return J(m) ? De(e, s)(m) : p(m)
    }

    function a(m) {
        return t(m)
    }

    function s(m) {
        return m === 34 || m === 39 || m === 40 ? Rt(e, u, t, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(m) : p(m)
    }

    function u(m) {
        return J(m) ? De(e, p)(m) : p(m)
    }

    function p(m) {
        return m === 41 ? (e.enter("resourceMarker"), e.consume(m), e.exit("resourceMarker"), e.exit("resource"), n) : t(m)
    }
}

function kl(e, n, t) {
    const r = this;
    return i;

    function i(a) {
        return Mt.call(r, e, l, o, "reference", "referenceMarker", "referenceString")(a)
    }

    function l(a) {
        return r.parser.defined.includes(Ie(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? n(a) : t(a)
    }

    function o(a) {
        return t(a)
    }
}

function bl(e, n, t) {
    return r;

    function r(l) {
        return e.enter("reference"), e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), i
    }

    function i(l) {
        return l === 93 ? (e.enter("referenceMarker"), e.consume(l), e.exit("referenceMarker"), e.exit("reference"), n) : t(l)
    }
}
const wl = {
    name: "labelStartImage",
    tokenize: Sl,
    resolveAll: bn.resolveAll
};

function Sl(e, n, t) {
    const r = this;
    return i;

    function i(a) {
        return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), l
    }

    function l(a) {
        return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), o) : t(a)
    }

    function o(a) {
        return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(a) : n(a)
    }
}
const Cl = {
    name: "labelStartLink",
    tokenize: El,
    resolveAll: bn.resolveAll
};

function El(e, n, t) {
    const r = this;
    return i;

    function i(o) {
        return e.enter("labelLink"), e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelLink"), l
    }

    function l(o) {
        return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(o) : n(o)
    }
}
const Qe = {
    name: "lineEnding",
    tokenize: Il
};

function Il(e, n) {
    return t;

    function t(r) {
        return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), B(e, n, "linePrefix")
    }
}
const Be = {
    name: "thematicBreak",
    tokenize: Pl
};

function Pl(e, n, t) {
    let r = 0,
        i;
    return l;

    function l(u) {
        return e.enter("thematicBreak"), o(u)
    }

    function o(u) {
        return i = u, a(u)
    }

    function a(u) {
        return u === i ? (e.enter("thematicBreakSequence"), s(u)) : r >= 3 && (u === null || A(u)) ? (e.exit("thematicBreak"), n(u)) : t(u)
    }

    function s(u) {
        return u === i ? (e.consume(u), r++, s) : (e.exit("thematicBreakSequence"), _(u) ? B(e, a, "whitespace")(u) : a(u))
    }
}
const K = {
        name: "list",
        tokenize: vl,
        continuation: {
            tokenize: zl
        },
        exit: Ol
    },
    Tl = {
        tokenize: Dl,
        partial: !0
    },
    Al = {
        tokenize: Ll,
        partial: !0
    };

function vl(e, n, t) {
    const r = this,
        i = r.events[r.events.length - 1];
    let l = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0,
        o = 0;
    return a;

    function a(c) {
        const x = r.containerState.type || (c === 42 || c === 43 || c === 45 ? "listUnordered" : "listOrdered");
        if (x === "listUnordered" ? !r.containerState.marker || c === r.containerState.marker : an(c)) {
            if (r.containerState.type || (r.containerState.type = x, e.enter(x, {
                    _container: !0
                })), x === "listUnordered") return e.enter("listItemPrefix"), c === 42 || c === 45 ? e.check(Be, t, u)(c) : u(c);
            if (!r.interrupt || c === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), s(c)
        }
        return t(c)
    }

    function s(c) {
        return an(c) && ++o < 10 ? (e.consume(c), s) : (!r.interrupt || o < 2) && (r.containerState.marker ? c === r.containerState.marker : c === 41 || c === 46) ? (e.exit("listItemValue"), u(c)) : t(c)
    }

    function u(c) {
        return e.enter("listItemMarker"), e.consume(c), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || c, e.check(Ue, r.interrupt ? t : p, e.attempt(Tl, d, m))
    }

    function p(c) {
        return r.containerState.initialBlankLine = !0, l++, d(c)
    }

    function m(c) {
        return _(c) ? (e.enter("listItemPrefixWhitespace"), e.consume(c), e.exit("listItemPrefixWhitespace"), d) : t(c)
    }

    function d(c) {
        return r.containerState.size = l + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, n(c)
    }
}

function zl(e, n, t) {
    const r = this;
    return r.containerState._closeFlow = void 0, e.check(Ue, i, l);

    function i(a) {
        return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, B(e, n, "listItemIndent", r.containerState.size + 1)(a)
    }

    function l(a) {
        return r.containerState.furtherBlankLines || !_(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Al, n, o)(a))
    }

    function o(a) {
        return r.containerState._closeFlow = !0, r.interrupt = void 0, B(e, e.attempt(K, n, t), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a)
    }
}

function Ll(e, n, t) {
    const r = this;
    return B(e, i, "listItemIndent", r.containerState.size + 1);

    function i(l) {
        const o = r.events[r.events.length - 1];
        return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? n(l) : t(l)
    }
}

function Ol(e) {
    e.exit(this.containerState.type)
}

function Dl(e, n, t) {
    const r = this;
    return B(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);

    function i(l) {
        const o = r.events[r.events.length - 1];
        return !_(l) && o && o[1].type === "listItemPrefixWhitespace" ? n(l) : t(l)
    }
}
const Qn = {
    name: "setextUnderline",
    tokenize: Nl,
    resolveTo: Fl
};

function Fl(e, n) {
    let t = e.length,
        r, i, l;
    for (; t--;)
        if (e[t][0] === "enter") {
            if (e[t][1].type === "content") {
                r = t;
                break
            }
            e[t][1].type === "paragraph" && (i = t)
        } else e[t][1].type === "content" && e.splice(t, 1), !l && e[t][1].type === "definition" && (l = t);
    const o = {
        type: "setextHeading",
        start: Object.assign({}, e[i][1].start),
        end: Object.assign({}, e[e.length - 1][1].end)
    };
    return e[i][1].type = "setextHeadingText", l ? (e.splice(i, 0, ["enter", o, n]), e.splice(l + 1, 0, ["exit", e[r][1], n]), e[r][1].end = Object.assign({}, e[l][1].end)) : e[r][1] = o, e.push(["exit", o, n]), e
}

function Nl(e, n, t) {
    const r = this;
    let i;
    return l;

    function l(u) {
        let p = r.events.length,
            m;
        for (; p--;)
            if (r.events[p][1].type !== "lineEnding" && r.events[p][1].type !== "linePrefix" && r.events[p][1].type !== "content") {
                m = r.events[p][1].type === "paragraph";
                break
            }
        return !r.parser.lazy[r.now().line] && (r.interrupt || m) ? (e.enter("setextHeadingLine"), i = u, o(u)) : t(u)
    }

    function o(u) {
        return e.enter("setextHeadingLineSequence"), a(u)
    }

    function a(u) {
        return u === i ? (e.consume(u), a) : (e.exit("setextHeadingLineSequence"), _(u) ? B(e, s, "lineSuffix")(u) : s(u))
    }

    function s(u) {
        return u === null || A(u) ? (e.exit("setextHeadingLine"), n(u)) : t(u)
    }
}
const _l = {
    tokenize: Ml
};

function Ml(e) {
    const n = this,
        t = e.attempt(Ue, r, e.attempt(this.parser.constructs.flowInitial, i, B(e, e.attempt(this.parser.constructs.flow, i, e.attempt(Ui, i)), "linePrefix")));
    return t;

    function r(l) {
        if (l === null) {
            e.consume(l);
            return
        }
        return e.enter("lineEndingBlank"), e.consume(l), e.exit("lineEndingBlank"), n.currentConstruct = void 0, t
    }

    function i(l) {
        if (l === null) {
            e.consume(l);
            return
        }
        return e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), n.currentConstruct = void 0, t
    }
}
const Rl = {
        resolveAll: jt()
    },
    Bl = Bt("string"),
    jl = Bt("text");

function Bt(e) {
    return {
        tokenize: n,
        resolveAll: jt(e === "text" ? Hl : void 0)
    };

    function n(t) {
        const r = this,
            i = this.parser.constructs[e],
            l = t.attempt(i, o, a);
        return o;

        function o(p) {
            return u(p) ? l(p) : a(p)
        }

        function a(p) {
            if (p === null) {
                t.consume(p);
                return
            }
            return t.enter("data"), t.consume(p), s
        }

        function s(p) {
            return u(p) ? (t.exit("data"), l(p)) : (t.consume(p), s)
        }

        function u(p) {
            if (p === null) return !0;
            const m = i[p];
            let d = -1;
            if (m)
                for (; ++d < m.length;) {
                    const c = m[d];
                    if (!c.previous || c.previous.call(r, r.previous)) return !0
                }
            return !1
        }
    }
}

function jt(e) {
    return n;

    function n(t, r) {
        let i = -1,
            l;
        for (; ++i <= t.length;) l === void 0 ? t[i] && t[i][1].type === "data" && (l = i, i++) : (!t[i] || t[i][1].type !== "data") && (i !== l + 2 && (t[l][1].end = t[i - 1][1].end, t.splice(l + 2, i - l - 2), i = l + 2), l = void 0);
        return e ? e(t, r) : t
    }
}

function Hl(e, n) {
    let t = 0;
    for (; ++t <= e.length;)
        if ((t === e.length || e[t][1].type === "lineEnding") && e[t - 1][1].type === "data") {
            const r = e[t - 1][1],
                i = n.sliceStream(r);
            let l = i.length,
                o = -1,
                a = 0,
                s;
            for (; l--;) {
                const u = i[l];
                if (typeof u == "string") {
                    for (o = u.length; u.charCodeAt(o - 1) === 32;) a++, o--;
                    if (o) break;
                    o = -1
                } else if (u === -2) s = !0, a++;
                else if (u !== -1) {
                    l++;
                    break
                }
            }
            if (a) {
                const u = {
                    type: t === e.length || s || a < 2 ? "lineSuffix" : "hardBreakTrailing",
                    start: {
                        line: r.end.line,
                        column: r.end.column - a,
                        offset: r.end.offset - a,
                        _index: r.start._index + l,
                        _bufferIndex: l ? o : r.start._bufferIndex + o
                    },
                    end: Object.assign({}, r.end)
                };
                r.end = Object.assign({}, u.start), r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(t, 0, ["enter", u, n], ["exit", u, n]), t += 2)
            }
            t++
        }
    return e
}

function Ul(e, n, t) {
    let r = Object.assign(t ? Object.assign({}, t) : {
        line: 1,
        column: 1,
        offset: 0
    }, {
        _index: 0,
        _bufferIndex: -1
    });
    const i = {},
        l = [];
    let o = [],
        a = [];
    const s = {
            consume: E,
            enter: C,
            exit: F,
            attempt: N(L),
            check: N(y),
            interrupt: N(y, {
                interrupt: !0
            })
        },
        u = {
            previous: null,
            code: null,
            containerState: {},
            events: [],
            parser: e,
            sliceStream: c,
            sliceSerialize: d,
            now: x,
            defineSkip: w,
            write: m
        };
    let p = n.tokenize.call(u, s);
    return n.resolveAll && l.push(n), u;

    function m(T) {
        return o = ne(o, T), I(), o[o.length - 1] !== null ? [] : (V(n, 0), u.events = kn(l, u.events, u), u.events)
    }

    function d(T, P) {
        return ql(c(T), P)
    }

    function c(T) {
        return Vl(o, T)
    }

    function x() {
        const {
            line: T,
            column: P,
            offset: U,
            _index: q,
            _bufferIndex: D
        } = r;
        return {
            line: T,
            column: P,
            offset: U,
            _index: q,
            _bufferIndex: D
        }
    }

    function w(T) {
        i[T.line] = T.column, j()
    }

    function I() {
        let T;
        for (; r._index < o.length;) {
            const P = o[r._index];
            if (typeof P == "string")
                for (T = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === T && r._bufferIndex < P.length;) b(P.charCodeAt(r._bufferIndex));
            else b(P)
        }
    }

    function b(T) {
        p = p(T)
    }

    function E(T) {
        A(T) ? (r.line++, r.column = 1, r.offset += T === -3 ? 2 : 1, j()) : T !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = T
    }

    function C(T, P) {
        const U = P || {};
        return U.type = T, U.start = x(), u.events.push(["enter", U, u]), a.push(U), U
    }

    function F(T) {
        const P = a.pop();
        return P.end = x(), u.events.push(["exit", P, u]), P
    }

    function L(T, P) {
        V(T, P.from)
    }

    function y(T, P) {
        P.restore()
    }

    function N(T, P) {
        return U;

        function U(q, D, Q) {
            let W, re, se, h;
            return Array.isArray(q) ? ce(q) : "tokenize" in q ? ce([q]) : ie(q);

            function ie(Y) {
                return Ae;

                function Ae(me) {
                    const Se = me !== null && Y[me],
                        xe = me !== null && Y.null,
                        Ve = [...Array.isArray(Se) ? Se : Se ? [Se] : [], ...Array.isArray(xe) ? xe : xe ? [xe] : []];
                    return ce(Ve)(me)
                }
            }

            function ce(Y) {
                return W = Y, re = 0, Y.length === 0 ? Q : f(Y[re])
            }

            function f(Y) {
                return Ae;

                function Ae(me) {
                    return h = R(), se = Y, Y.partial || (u.currentConstruct = Y), Y.name && u.parser.constructs.disable.null.includes(Y.name) ? ye() : Y.tokenize.call(P ? Object.assign(Object.create(u), P) : u, s, le, ye)(me)
                }
            }

            function le(Y) {
                return T(se, h), D
            }

            function ye(Y) {
                return h.restore(), ++re < W.length ? f(W[re]) : Q
            }
        }
    }

    function V(T, P) {
        T.resolveAll && !l.includes(T) && l.push(T), T.resolve && fe(u.events, P, u.events.length - P, T.resolve(u.events.slice(P), u)), T.resolveTo && (u.events = T.resolveTo(u.events, u))
    }

    function R() {
        const T = x(),
            P = u.previous,
            U = u.currentConstruct,
            q = u.events.length,
            D = Array.from(a);
        return {
            restore: Q,
            from: q
        };

        function Q() {
            r = T, u.previous = P, u.currentConstruct = U, u.events.length = q, a = D, j()
        }
    }

    function j() {
        r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1)
    }
}

function Vl(e, n) {
    const t = n.start._index,
        r = n.start._bufferIndex,
        i = n.end._index,
        l = n.end._bufferIndex;
    let o;
    if (t === i) o = [e[t].slice(r, l)];
    else {
        if (o = e.slice(t, i), r > -1) {
            const a = o[0];
            typeof a == "string" ? o[0] = a.slice(r) : o.shift()
        }
        l > 0 && o.push(e[i].slice(0, l))
    }
    return o
}

function ql(e, n) {
    let t = -1;
    const r = [];
    let i;
    for (; ++t < e.length;) {
        const l = e[t];
        let o;
        if (typeof l == "string") o = l;
        else switch (l) {
            case -5:
                {
                    o = "\r";
                    break
                }
            case -4:
                {
                    o = `
`;
                    break
                }
            case -3:
                {
                    o = `\r
`;
                    break
                }
            case -2:
                {
                    o = n ? " " : "	";
                    break
                }
            case -1:
                {
                    if (!n && i) continue;o = " ";
                    break
                }
            default:
                o = String.fromCharCode(l)
        }
        i = l === -2, r.push(o)
    }
    return r.join("")
}
const $l = {
        42: K,
        43: K,
        45: K,
        48: K,
        49: K,
        50: K,
        51: K,
        52: K,
        53: K,
        54: K,
        55: K,
        56: K,
        57: K,
        62: Ot
    },
    Wl = {
        91: Yi
    },
    Yl = {
        [-2]: Ye,
        [-1]: Ye,
        32: Ye
    },
    Ql = {
        35: Zi,
        42: Be,
        45: [Qn, Be],
        60: rl,
        61: Qn,
        95: Be,
        96: Wn,
        126: Wn
    },
    Xl = {
        38: Ft,
        92: Dt
    },
    Kl = {
        [-5]: Qe,
        [-4]: Qe,
        [-3]: Qe,
        33: wl,
        38: Ft,
        42: un,
        60: [Ci, cl],
        91: Cl,
        92: [Ji, Dt],
        93: bn,
        95: un,
        96: _i
    },
    Jl = {
        null: [un, Rl]
    },
    Gl = {
        null: [42, 95]
    },
    Zl = {
        null: []
    },
    eo = Object.freeze(Object.defineProperty({
        __proto__: null,
        attentionMarkers: Gl,
        contentInitial: Wl,
        disable: Zl,
        document: $l,
        flow: Ql,
        flowInitial: Yl,
        insideSpan: Jl,
        string: Xl,
        text: Kl
    }, Symbol.toStringTag, {
        value: "Module"
    }));

function no(e) {
    const t = ui([eo, ...(e || {}).extensions || []]),
        r = {
            defined: [],
            lazy: {},
            constructs: t,
            content: i(gi),
            document: i(xi),
            flow: i(_l),
            string: i(Bl),
            text: i(jl)
        };
    return r;

    function i(l) {
        return o;

        function o(a) {
            return Ul(r, l, a)
        }
    }
}

function to(e) {
    for (; !Nt(e););
    return e
}
const Xn = /[\0\t\n\r]/g;

function ro() {
    let e = 1,
        n = "",
        t = !0,
        r;
    return i;

    function i(l, o, a) {
        const s = [];
        let u, p, m, d, c;
        for (l = n + (typeof l == "string" ? l.toString() : new TextDecoder(o || void 0).decode(l)), m = 0, n = "", t && (l.charCodeAt(0) === 65279 && m++, t = void 0); m < l.length;) {
            if (Xn.lastIndex = m, u = Xn.exec(l), d = u && u.index !== void 0 ? u.index : l.length, c = l.charCodeAt(d), !u) {
                n = l.slice(m);
                break
            }
            if (c === 10 && m === d && r) s.push(-3), r = void 0;
            else switch (r && (s.push(-5), r = void 0), m < d && (s.push(l.slice(m, d)), e += d - m), c) {
                case 0:
                    {
                        s.push(65533),
                        e++;
                        break
                    }
                case 9:
                    {
                        for (p = Math.ceil(e / 4) * 4, s.push(-2); e++ < p;) s.push(-1);
                        break
                    }
                case 10:
                    {
                        s.push(-4),
                        e = 1;
                        break
                    }
                default:
                    r = !0, e = 1
            }
            m = d + 1
        }
        return a && (r && s.push(-5), n && s.push(n), s.push(null)), s
    }
}
const io = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

function lo(e) {
    return e.replace(io, oo)
}

function oo(e, n, t) {
    if (n) return n;
    if (t.charCodeAt(0) === 35) {
        const i = t.charCodeAt(1),
            l = i === 120 || i === 88;
        return Lt(t.slice(l ? 2 : 1), l ? 16 : 10)
    }
    return xn(t) || e
}
const Ht = {}.hasOwnProperty;

function ao(e, n, t) {
    return typeof n != "string" && (t = n, n = void 0), uo(t)(to(no(t).document().write(ro()(e, n, !0))))
}

function uo(e) {
    const n = {
        transforms: [],
        canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
        enter: {
            autolink: l(In),
            autolinkProtocol: R,
            autolinkEmail: R,
            atxHeading: l(Sn),
            blockQuote: l(Se),
            characterEscape: R,
            characterReference: R,
            codeFenced: l(xe),
            codeFencedFenceInfo: o,
            codeFencedFenceMeta: o,
            codeIndented: l(xe, o),
            codeText: l(Ve, o),
            codeTextData: R,
            data: R,
            codeFlowValue: R,
            definition: l(Qt),
            definitionDestinationString: o,
            definitionLabelString: o,
            definitionTitleString: o,
            emphasis: l(Xt),
            hardBreakEscape: l(Cn),
            hardBreakTrailing: l(Cn),
            htmlFlow: l(En, o),
            htmlFlowData: R,
            htmlText: l(En, o),
            htmlTextData: R,
            image: l(Kt),
            label: o,
            link: l(In),
            listItem: l(Jt),
            listItemValue: d,
            listOrdered: l(Pn, m),
            listUnordered: l(Pn),
            paragraph: l(Gt),
            reference: f,
            referenceString: o,
            resourceDestinationString: o,
            resourceTitleString: o,
            setextHeading: l(Sn),
            strong: l(Zt),
            thematicBreak: l(nr)
        },
        exit: {
            atxHeading: s(),
            atxHeadingSequence: L,
            autolink: s(),
            autolinkEmail: me,
            autolinkProtocol: Ae,
            blockQuote: s(),
            characterEscapeValue: j,
            characterReferenceMarkerHexadecimal: ye,
            characterReferenceMarkerNumeric: ye,
            characterReferenceValue: Y,
            codeFenced: s(I),
            codeFencedFence: w,
            codeFencedFenceInfo: c,
            codeFencedFenceMeta: x,
            codeFlowValue: j,
            codeIndented: s(b),
            codeText: s(D),
            codeTextData: j,
            data: j,
            definition: s(),
            definitionDestinationString: F,
            definitionLabelString: E,
            definitionTitleString: C,
            emphasis: s(),
            hardBreakEscape: s(P),
            hardBreakTrailing: s(P),
            htmlFlow: s(U),
            htmlFlowData: j,
            htmlText: s(q),
            htmlTextData: j,
            image: s(W),
            label: se,
            labelText: re,
            lineEnding: T,
            link: s(Q),
            listItem: s(),
            listOrdered: s(),
            listUnordered: s(),
            paragraph: s(),
            referenceString: le,
            resourceDestinationString: h,
            resourceTitleString: ie,
            resource: ce,
            setextHeading: s(V),
            setextHeadingLineSequence: N,
            setextHeadingText: y,
            strong: s(),
            thematicBreak: s()
        }
    };
    Ut(n, (e || {}).mdastExtensions || []);
    const t = {};
    return r;

    function r(g) {
        let S = {
            type: "root",
            children: []
        };
        const v = {
                stack: [S],
                tokenStack: [],
                config: n,
                enter: a,
                exit: u,
                buffer: o,
                resume: p,
                data: t
            },
            O = [];
        let M = -1;
        for (; ++M < g.length;)
            if (g[M][1].type === "listOrdered" || g[M][1].type === "listUnordered")
                if (g[M][0] === "enter") O.push(M);
                else {
                    const oe = O.pop();
                    M = i(g, oe, M)
                }
        for (M = -1; ++M < g.length;) {
            const oe = n[g[M][0]];
            Ht.call(oe, g[M][1].type) && oe[g[M][1].type].call(Object.assign({
                sliceSerialize: g[M][2].sliceSerialize
            }, v), g[M][1])
        }
        if (v.tokenStack.length > 0) {
            const oe = v.tokenStack[v.tokenStack.length - 1];
            (oe[1] || Kn).call(v, void 0, oe[0])
        }
        for (S.position = {
                start: de(g.length > 0 ? g[0][1].start : {
                    line: 1,
                    column: 1,
                    offset: 0
                }),
                end: de(g.length > 0 ? g[g.length - 2][1].end : {
                    line: 1,
                    column: 1,
                    offset: 0
                })
            }, M = -1; ++M < n.transforms.length;) S = n.transforms[M](S) || S;
        return S
    }

    function i(g, S, v) {
        let O = S - 1,
            M = -1,
            oe = !1,
            ke, pe, ve, ze;
        for (; ++O <= v;) {
            const G = g[O];
            switch (G[1].type) {
                case "listUnordered":
                case "listOrdered":
                case "blockQuote":
                    {
                        G[0] === "enter" ? M++ : M--,
                        ze = void 0;
                        break
                    }
                case "lineEndingBlank":
                    {
                        G[0] === "enter" && (ke && !ze && !M && !ve && (ve = O), ze = void 0);
                        break
                    }
                case "linePrefix":
                case "listItemValue":
                case "listItemMarker":
                case "listItemPrefix":
                case "listItemPrefixWhitespace":
                    break;
                default:
                    ze = void 0
            }
            if (!M && G[0] === "enter" && G[1].type === "listItemPrefix" || M === -1 && G[0] === "exit" && (G[1].type === "listUnordered" || G[1].type === "listOrdered")) {
                if (ke) {
                    let Ce = O;
                    for (pe = void 0; Ce--;) {
                        const he = g[Ce];
                        if (he[1].type === "lineEnding" || he[1].type === "lineEndingBlank") {
                            if (he[0] === "exit") continue;
                            pe && (g[pe][1].type = "lineEndingBlank", oe = !0), he[1].type = "lineEnding", pe = Ce
                        } else if (!(he[1].type === "linePrefix" || he[1].type === "blockQuotePrefix" || he[1].type === "blockQuotePrefixWhitespace" || he[1].type === "blockQuoteMarker" || he[1].type === "listItemIndent")) break
                    }
                    ve && (!pe || ve < pe) && (ke._spread = !0), ke.end = Object.assign({}, pe ? g[pe][1].start : G[1].end), g.splice(pe || O, 0, ["exit", ke, G[2]]), O++, v++
                }
                if (G[1].type === "listItemPrefix") {
                    const Ce = {
                        type: "listItem",
                        _spread: !1,
                        start: Object.assign({}, G[1].start),
                        end: void 0
                    };
                    ke = Ce, g.splice(O, 0, ["enter", Ce, G[2]]), O++, v++, ve = void 0, ze = !0
                }
            }
        }
        return g[S][1]._spread = oe, v
    }

    function l(g, S) {
        return v;

        function v(O) {
            a.call(this, g(O), O), S && S.call(this, O)
        }
    }

    function o() {
        this.stack.push({
            type: "fragment",
            children: []
        })
    }

    function a(g, S, v) {
        this.stack[this.stack.length - 1].children.push(g), this.stack.push(g), this.tokenStack.push([S, v]), g.position = {
            start: de(S.start),
            end: void 0
        }
    }

    function s(g) {
        return S;

        function S(v) {
            g && g.call(this, v), u.call(this, v)
        }
    }

    function u(g, S) {
        const v = this.stack.pop(),
            O = this.tokenStack.pop();
        if (O) O[0].type !== g.type && (S ? S.call(this, g, O[0]) : (O[1] || Kn).call(this, g, O[0]));
        else throw new Error("Cannot close `" + g.type + "` (" + Oe({
            start: g.start,
            end: g.end
        }) + "): it’s not open");
        v.position.end = de(g.end)
    }

    function p() {
        return oi(this.stack.pop())
    }

    function m() {
        this.data.expectingFirstListItemValue = !0
    }

    function d(g) {
        if (this.data.expectingFirstListItemValue) {
            const S = this.stack[this.stack.length - 2];
            S.start = Number.parseInt(this.sliceSerialize(g), 10), this.data.expectingFirstListItemValue = void 0
        }
    }

    function c() {
        const g = this.resume(),
            S = this.stack[this.stack.length - 1];
        S.lang = g
    }

    function x() {
        const g = this.resume(),
            S = this.stack[this.stack.length - 1];
        S.meta = g
    }

    function w() {
        this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0)
    }

    function I() {
        const g = this.resume(),
            S = this.stack[this.stack.length - 1];
        S.value = g.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0
    }

    function b() {
        const g = this.resume(),
            S = this.stack[this.stack.length - 1];
        S.value = g.replace(/(\r?\n|\r)$/g, "")
    }

    function E(g) {
        const S = this.resume(),
            v = this.stack[this.stack.length - 1];
        v.label = S, v.identifier = Ie(this.sliceSerialize(g)).toLowerCase()
    }

    function C() {
        const g = this.resume(),
            S = this.stack[this.stack.length - 1];
        S.title = g
    }

    function F() {
        const g = this.resume(),
            S = this.stack[this.stack.length - 1];
        S.url = g
    }

    function L(g) {
        const S = this.stack[this.stack.length - 1];
        if (!S.depth) {
            const v = this.sliceSerialize(g).length;
            S.depth = v
        }
    }

    function y() {
        this.data.setextHeadingSlurpLineEnding = !0
    }

    function N(g) {
        const S = this.stack[this.stack.length - 1];
        S.depth = this.sliceSerialize(g).codePointAt(0) === 61 ? 1 : 2
    }

    function V() {
        this.data.setextHeadingSlurpLineEnding = void 0
    }

    function R(g) {
        const v = this.stack[this.stack.length - 1].children;
        let O = v[v.length - 1];
        (!O || O.type !== "text") && (O = er(), O.position = {
            start: de(g.start),
            end: void 0
        }, v.push(O)), this.stack.push(O)
    }

    function j(g) {
        const S = this.stack.pop();
        S.value += this.sliceSerialize(g), S.position.end = de(g.end)
    }

    function T(g) {
        const S = this.stack[this.stack.length - 1];
        if (this.data.atHardBreak) {
            const v = S.children[S.children.length - 1];
            v.position.end = de(g.end), this.data.atHardBreak = void 0;
            return
        }!this.data.setextHeadingSlurpLineEnding && n.canContainEols.includes(S.type) && (R.call(this, g), j.call(this, g))
    }

    function P() {
        this.data.atHardBreak = !0
    }

    function U() {
        const g = this.resume(),
            S = this.stack[this.stack.length - 1];
        S.value = g
    }

    function q() {
        const g = this.resume(),
            S = this.stack[this.stack.length - 1];
        S.value = g
    }

    function D() {
        const g = this.resume(),
            S = this.stack[this.stack.length - 1];
        S.value = g
    }

    function Q() {
        const g = this.stack[this.stack.length - 1];
        if (this.data.inReference) {
            const S = this.data.referenceType || "shortcut";
            g.type += "Reference", g.referenceType = S, delete g.url, delete g.title
        } else delete g.identifier, delete g.label;
        this.data.referenceType = void 0
    }

    function W() {
        const g = this.stack[this.stack.length - 1];
        if (this.data.inReference) {
            const S = this.data.referenceType || "shortcut";
            g.type += "Reference", g.referenceType = S, delete g.url, delete g.title
        } else delete g.identifier, delete g.label;
        this.data.referenceType = void 0
    }

    function re(g) {
        const S = this.sliceSerialize(g),
            v = this.stack[this.stack.length - 2];
        v.label = lo(S), v.identifier = Ie(S).toLowerCase()
    }

    function se() {
        const g = this.stack[this.stack.length - 1],
            S = this.resume(),
            v = this.stack[this.stack.length - 1];
        if (this.data.inReference = !0, v.type === "link") {
            const O = g.children;
            v.children = O
        } else v.alt = S
    }

    function h() {
        const g = this.resume(),
            S = this.stack[this.stack.length - 1];
        S.url = g
    }

    function ie() {
        const g = this.resume(),
            S = this.stack[this.stack.length - 1];
        S.title = g
    }

    function ce() {
        this.data.inReference = void 0
    }

    function f() {
        this.data.referenceType = "collapsed"
    }

    function le(g) {
        const S = this.resume(),
            v = this.stack[this.stack.length - 1];
        v.label = S, v.identifier = Ie(this.sliceSerialize(g)).toLowerCase(), this.data.referenceType = "full"
    }

    function ye(g) {
        this.data.characterReferenceType = g.type
    }

    function Y(g) {
        const S = this.sliceSerialize(g),
            v = this.data.characterReferenceType;
        let O;
        v ? (O = Lt(S, v === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : O = xn(S);
        const M = this.stack.pop();
        M.value += O, M.position.end = de(g.end)
    }

    function Ae(g) {
        j.call(this, g);
        const S = this.stack[this.stack.length - 1];
        S.url = this.sliceSerialize(g)
    }

    function me(g) {
        j.call(this, g);
        const S = this.stack[this.stack.length - 1];
        S.url = "mailto:" + this.sliceSerialize(g)
    }

    function Se() {
        return {
            type: "blockquote",
            children: []
        }
    }

    function xe() {
        return {
            type: "code",
            lang: null,
            meta: null,
            value: ""
        }
    }

    function Ve() {
        return {
            type: "inlineCode",
            value: ""
        }
    }

    function Qt() {
        return {
            type: "definition",
            identifier: "",
            label: null,
            title: null,
            url: ""
        }
    }

    function Xt() {
        return {
            type: "emphasis",
            children: []
        }
    }

    function Sn() {
        return {
            type: "heading",
            depth: 0,
            children: []
        }
    }

    function Cn() {
        return {
            type: "break"
        }
    }

    function En() {
        return {
            type: "html",
            value: ""
        }
    }

    function Kt() {
        return {
            type: "image",
            title: null,
            url: "",
            alt: null
        }
    }

    function In() {
        return {
            type: "link",
            title: null,
            url: "",
            children: []
        }
    }

    function Pn(g) {
        return {
            type: "list",
            ordered: g.type === "listOrdered",
            start: null,
            spread: g._spread,
            children: []
        }
    }

    function Jt(g) {
        return {
            type: "listItem",
            spread: g._spread,
            checked: null,
            children: []
        }
    }

    function Gt() {
        return {
            type: "paragraph",
            children: []
        }
    }

    function Zt() {
        return {
            type: "strong",
            children: []
        }
    }

    function er() {
        return {
            type: "text",
            value: ""
        }
    }

    function nr() {
        return {
            type: "thematicBreak"
        }
    }
}

function de(e) {
    return {
        line: e.line,
        column: e.column,
        offset: e.offset
    }
}

function Ut(e, n) {
    let t = -1;
    for (; ++t < n.length;) {
        const r = n[t];
        Array.isArray(r) ? Ut(e, r) : so(e, r)
    }
}

function so(e, n) {
    let t;
    for (t in n)
        if (Ht.call(n, t)) switch (t) {
            case "canContainEols":
                {
                    const r = n[t];r && e[t].push(...r);
                    break
                }
            case "transforms":
                {
                    const r = n[t];r && e[t].push(...r);
                    break
                }
            case "enter":
            case "exit":
                {
                    const r = n[t];r && Object.assign(e[t], r);
                    break
                }
        }
}

function Kn(e, n) {
    throw e ? new Error("Cannot close `" + e.type + "` (" + Oe({
        start: e.start,
        end: e.end
    }) + "): a different token (`" + n.type + "`, " + Oe({
        start: n.start,
        end: n.end
    }) + ") is open") : new Error("Cannot close document, a token (`" + n.type + "`, " + Oe({
        start: n.start,
        end: n.end
    }) + ") is still open")
}

function co(e) {
    const n = this;
    n.parser = t;

    function t(r) {
        return ao(r, { ...n.data("settings"),
            ...e,
            extensions: n.data("micromarkExtensions") || [],
            mdastExtensions: n.data("fromMarkdownExtensions") || []
        })
    }
}

function po(e, n) {
    const t = {
        type: "element",
        tagName: "blockquote",
        properties: {},
        children: e.wrap(e.all(n), !0)
    };
    return e.patch(n, t), e.applyData(n, t)
}

function ho(e, n) {
    const t = {
        type: "element",
        tagName: "br",
        properties: {},
        children: []
    };
    return e.patch(n, t), [e.applyData(n, t), {
        type: "text",
        value: `
`
    }]
}

function fo(e, n) {
    const t = n.value ? n.value + `
` : "",
        r = {};
    n.lang && (r.className = ["language-" + n.lang]);
    let i = {
        type: "element",
        tagName: "code",
        properties: r,
        children: [{
            type: "text",
            value: t
        }]
    };
    return n.meta && (i.data = {
        meta: n.meta
    }), e.patch(n, i), i = e.applyData(n, i), i = {
        type: "element",
        tagName: "pre",
        properties: {},
        children: [i]
    }, e.patch(n, i), i
}

function mo(e, n) {
    const t = {
        type: "element",
        tagName: "del",
        properties: {},
        children: e.all(n)
    };
    return e.patch(n, t), e.applyData(n, t)
}

function go(e, n) {
    const t = {
        type: "element",
        tagName: "em",
        properties: {},
        children: e.all(n)
    };
    return e.patch(n, t), e.applyData(n, t)
}

function yo(e, n) {
    const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-",
        r = String(n.identifier).toUpperCase(),
        i = Te(r.toLowerCase()),
        l = e.footnoteOrder.indexOf(r);
    let o, a = e.footnoteCounts.get(r);
    a === void 0 ? (a = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = l + 1, a += 1, e.footnoteCounts.set(r, a);
    const s = {
        type: "element",
        tagName: "a",
        properties: {
            href: "#" + t + "fn-" + i,
            id: t + "fnref-" + i + (a > 1 ? "-" + a : ""),
            dataFootnoteRef: !0,
            ariaDescribedBy: ["footnote-label"]
        },
        children: [{
            type: "text",
            value: String(o)
        }]
    };
    e.patch(n, s);
    const u = {
        type: "element",
        tagName: "sup",
        properties: {},
        children: [s]
    };
    return e.patch(n, u), e.applyData(n, u)
}

function xo(e, n) {
    const t = {
        type: "element",
        tagName: "h" + n.depth,
        properties: {},
        children: e.all(n)
    };
    return e.patch(n, t), e.applyData(n, t)
}

function ko(e, n) {
    if (e.options.allowDangerousHtml) {
        const t = {
            type: "raw",
            value: n.value
        };
        return e.patch(n, t), e.applyData(n, t)
    }
}

function Vt(e, n) {
    const t = n.referenceType;
    let r = "]";
    if (t === "collapsed" ? r += "[]" : t === "full" && (r += "[" + (n.label || n.identifier) + "]"), n.type === "imageReference") return [{
        type: "text",
        value: "![" + n.alt + r
    }];
    const i = e.all(n),
        l = i[0];
    l && l.type === "text" ? l.value = "[" + l.value : i.unshift({
        type: "text",
        value: "["
    });
    const o = i[i.length - 1];
    return o && o.type === "text" ? o.value += r : i.push({
        type: "text",
        value: r
    }), i
}

function bo(e, n) {
    const t = String(n.identifier).toUpperCase(),
        r = e.definitionById.get(t);
    if (!r) return Vt(e, n);
    const i = {
        src: Te(r.url || ""),
        alt: n.alt
    };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    const l = {
        type: "element",
        tagName: "img",
        properties: i,
        children: []
    };
    return e.patch(n, l), e.applyData(n, l)
}

function wo(e, n) {
    const t = {
        src: Te(n.url)
    };
    n.alt !== null && n.alt !== void 0 && (t.alt = n.alt), n.title !== null && n.title !== void 0 && (t.title = n.title);
    const r = {
        type: "element",
        tagName: "img",
        properties: t,
        children: []
    };
    return e.patch(n, r), e.applyData(n, r)
}

function So(e, n) {
    const t = {
        type: "text",
        value: n.value.replace(/\r?\n|\r/g, " ")
    };
    e.patch(n, t);
    const r = {
        type: "element",
        tagName: "code",
        properties: {},
        children: [t]
    };
    return e.patch(n, r), e.applyData(n, r)
}

function Co(e, n) {
    const t = String(n.identifier).toUpperCase(),
        r = e.definitionById.get(t);
    if (!r) return Vt(e, n);
    const i = {
        href: Te(r.url || "")
    };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    const l = {
        type: "element",
        tagName: "a",
        properties: i,
        children: e.all(n)
    };
    return e.patch(n, l), e.applyData(n, l)
}

function Eo(e, n) {
    const t = {
        href: Te(n.url)
    };
    n.title !== null && n.title !== void 0 && (t.title = n.title);
    const r = {
        type: "element",
        tagName: "a",
        properties: t,
        children: e.all(n)
    };
    return e.patch(n, r), e.applyData(n, r)
}

function Io(e, n, t) {
    const r = e.all(n),
        i = t ? Po(t) : qt(n),
        l = {},
        o = [];
    if (typeof n.checked == "boolean") {
        const p = r[0];
        let m;
        p && p.type === "element" && p.tagName === "p" ? m = p : (m = {
            type: "element",
            tagName: "p",
            properties: {},
            children: []
        }, r.unshift(m)), m.children.length > 0 && m.children.unshift({
            type: "text",
            value: " "
        }), m.children.unshift({
            type: "element",
            tagName: "input",
            properties: {
                type: "checkbox",
                checked: n.checked,
                disabled: !0
            },
            children: []
        }), l.className = ["task-list-item"]
    }
    let a = -1;
    for (; ++a < r.length;) {
        const p = r[a];
        (i || a !== 0 || p.type !== "element" || p.tagName !== "p") && o.push({
            type: "text",
            value: `
`
        }), p.type === "element" && p.tagName === "p" && !i ? o.push(...p.children) : o.push(p)
    }
    const s = r[r.length - 1];
    s && (i || s.type !== "element" || s.tagName !== "p") && o.push({
        type: "text",
        value: `
`
    });
    const u = {
        type: "element",
        tagName: "li",
        properties: l,
        children: o
    };
    return e.patch(n, u), e.applyData(n, u)
}

function Po(e) {
    let n = !1;
    if (e.type === "list") {
        n = e.spread || !1;
        const t = e.children;
        let r = -1;
        for (; !n && ++r < t.length;) n = qt(t[r])
    }
    return n
}

function qt(e) {
    const n = e.spread;
    return n ? ? e.children.length > 1
}

function To(e, n) {
    const t = {},
        r = e.all(n);
    let i = -1;
    for (typeof n.start == "number" && n.start !== 1 && (t.start = n.start); ++i < r.length;) {
        const o = r[i];
        if (o.type === "element" && o.tagName === "li" && o.properties && Array.isArray(o.properties.className) && o.properties.className.includes("task-list-item")) {
            t.className = ["contains-task-list"];
            break
        }
    }
    const l = {
        type: "element",
        tagName: n.ordered ? "ol" : "ul",
        properties: t,
        children: e.wrap(r, !0)
    };
    return e.patch(n, l), e.applyData(n, l)
}

function Ao(e, n) {
    const t = {
        type: "element",
        tagName: "p",
        properties: {},
        children: e.all(n)
    };
    return e.patch(n, t), e.applyData(n, t)
}

function vo(e, n) {
    const t = {
        type: "root",
        children: e.wrap(e.all(n))
    };
    return e.patch(n, t), e.applyData(n, t)
}

function zo(e, n) {
    const t = {
        type: "element",
        tagName: "strong",
        properties: {},
        children: e.all(n)
    };
    return e.patch(n, t), e.applyData(n, t)
}

function Lo(e, n) {
    const t = e.all(n),
        r = t.shift(),
        i = [];
    if (r) {
        const o = {
            type: "element",
            tagName: "thead",
            properties: {},
            children: e.wrap([r], !0)
        };
        e.patch(n.children[0], o), i.push(o)
    }
    if (t.length > 0) {
        const o = {
                type: "element",
                tagName: "tbody",
                properties: {},
                children: e.wrap(t, !0)
            },
            a = mn(n.children[1]),
            s = Et(n.children[n.children.length - 1]);
        a && s && (o.position = {
            start: a,
            end: s
        }), i.push(o)
    }
    const l = {
        type: "element",
        tagName: "table",
        properties: {},
        children: e.wrap(i, !0)
    };
    return e.patch(n, l), e.applyData(n, l)
}

function Oo(e, n, t) {
    const r = t ? t.children : void 0,
        l = (r ? r.indexOf(n) : 1) === 0 ? "th" : "td",
        o = t && t.type === "table" ? t.align : void 0,
        a = o ? o.length : n.children.length;
    let s = -1;
    const u = [];
    for (; ++s < a;) {
        const m = n.children[s],
            d = {},
            c = o ? o[s] : void 0;
        c && (d.align = c);
        let x = {
            type: "element",
            tagName: l,
            properties: d,
            children: []
        };
        m && (x.children = e.all(m), e.patch(m, x), x = e.applyData(m, x)), u.push(x)
    }
    const p = {
        type: "element",
        tagName: "tr",
        properties: {},
        children: e.wrap(u, !0)
    };
    return e.patch(n, p), e.applyData(n, p)
}

function Do(e, n) {
    const t = {
        type: "element",
        tagName: "td",
        properties: {},
        children: e.all(n)
    };
    return e.patch(n, t), e.applyData(n, t)
}
const Jn = 9,
    Gn = 32;

function Fo(e) {
    const n = String(e),
        t = /\r?\n|\r/g;
    let r = t.exec(n),
        i = 0;
    const l = [];
    for (; r;) l.push(Zn(n.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = t.exec(n);
    return l.push(Zn(n.slice(i), i > 0, !1)), l.join("")
}

function Zn(e, n, t) {
    let r = 0,
        i = e.length;
    if (n) {
        let l = e.codePointAt(r);
        for (; l === Jn || l === Gn;) r++, l = e.codePointAt(r)
    }
    if (t) {
        let l = e.codePointAt(i - 1);
        for (; l === Jn || l === Gn;) i--, l = e.codePointAt(i - 1)
    }
    return i > r ? e.slice(r, i) : ""
}

function No(e, n) {
    const t = {
        type: "text",
        value: Fo(String(n.value))
    };
    return e.patch(n, t), e.applyData(n, t)
}

function _o(e, n) {
    const t = {
        type: "element",
        tagName: "hr",
        properties: {},
        children: []
    };
    return e.patch(n, t), e.applyData(n, t)
}
const Mo = {
    blockquote: po,
    break: ho,
    code: fo,
    delete: mo,
    emphasis: go,
    footnoteReference: yo,
    heading: xo,
    html: ko,
    imageReference: bo,
    image: wo,
    inlineCode: So,
    linkReference: Co,
    link: Eo,
    listItem: Io,
    list: To,
    paragraph: Ao,
    root: vo,
    strong: zo,
    table: Lo,
    tableCell: Do,
    tableRow: Oo,
    text: No,
    thematicBreak: _o,
    toml: Me,
    yaml: Me,
    definition: Me,
    footnoteDefinition: Me
};

function Me() {}

function Ro(e, n) {
    const t = [{
        type: "text",
        value: "↩"
    }];
    return n > 1 && t.push({
        type: "element",
        tagName: "sup",
        properties: {},
        children: [{
            type: "text",
            value: String(n)
        }]
    }), t
}

function Bo(e, n) {
    return "Back to reference " + (e + 1) + (n > 1 ? "-" + n : "")
}

function jo(e) {
    const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-",
        t = e.options.footnoteBackContent || Ro,
        r = e.options.footnoteBackLabel || Bo,
        i = e.options.footnoteLabel || "Footnotes",
        l = e.options.footnoteLabelTagName || "h2",
        o = e.options.footnoteLabelProperties || {
            className: ["sr-only"]
        },
        a = [];
    let s = -1;
    for (; ++s < e.footnoteOrder.length;) {
        const u = e.footnoteById.get(e.footnoteOrder[s]);
        if (!u) continue;
        const p = e.all(u),
            m = String(u.identifier).toUpperCase(),
            d = Te(m.toLowerCase());
        let c = 0;
        const x = [],
            w = e.footnoteCounts.get(m);
        for (; w !== void 0 && ++c <= w;) {
            x.length > 0 && x.push({
                type: "text",
                value: " "
            });
            let E = typeof t == "string" ? t : t(s, c);
            typeof E == "string" && (E = {
                type: "text",
                value: E
            }), x.push({
                type: "element",
                tagName: "a",
                properties: {
                    href: "#" + n + "fnref-" + d + (c > 1 ? "-" + c : ""),
                    dataFootnoteBackref: "",
                    ariaLabel: typeof r == "string" ? r : r(s, c),
                    className: ["data-footnote-backref"]
                },
                children: Array.isArray(E) ? E : [E]
            })
        }
        const I = p[p.length - 1];
        if (I && I.type === "element" && I.tagName === "p") {
            const E = I.children[I.children.length - 1];
            E && E.type === "text" ? E.value += " " : I.children.push({
                type: "text",
                value: " "
            }), I.children.push(...x)
        } else p.push(...x);
        const b = {
            type: "element",
            tagName: "li",
            properties: {
                id: n + "fn-" + d
            },
            children: e.wrap(p, !0)
        };
        e.patch(u, b), a.push(b)
    }
    if (a.length !== 0) return {
        type: "element",
        tagName: "section",
        properties: {
            dataFootnotes: !0,
            className: ["footnotes"]
        },
        children: [{
            type: "element",
            tagName: l,
            properties: { ...He(o),
                id: "footnote-label"
            },
            children: [{
                type: "text",
                value: i
            }]
        }, {
            type: "text",
            value: `
`
        }, {
            type: "element",
            tagName: "ol",
            properties: {},
            children: e.wrap(a, !0)
        }, {
            type: "text",
            value: `
`
        }]
    }
}
const sn = {}.hasOwnProperty,
    Ho = {};

function Uo(e, n) {
    const t = n || Ho,
        r = new Map,
        i = new Map,
        l = new Map,
        o = { ...Mo,
            ...t.handlers
        },
        a = {
            all: u,
            applyData: qo,
            definitionById: r,
            footnoteById: i,
            footnoteCounts: l,
            footnoteOrder: [],
            handlers: o,
            one: s,
            options: t,
            patch: Vo,
            wrap: Wo
        };
    return mt(e, function(p) {
        if (p.type === "definition" || p.type === "footnoteDefinition") {
            const m = p.type === "definition" ? r : i,
                d = String(p.identifier).toUpperCase();
            m.has(d) || m.set(d, p)
        }
    }), a;

    function s(p, m) {
        const d = p.type,
            c = a.handlers[d];
        if (sn.call(a.handlers, d) && c) return c(a, p, m);
        if (a.options.passThrough && a.options.passThrough.includes(d)) {
            if ("children" in p) {
                const {
                    children: w,
                    ...I
                } = p, b = He(I);
                return b.children = a.all(p), b
            }
            return He(p)
        }
        return (a.options.unknownHandler || $o)(a, p, m)
    }

    function u(p) {
        const m = [];
        if ("children" in p) {
            const d = p.children;
            let c = -1;
            for (; ++c < d.length;) {
                const x = a.one(d[c], p);
                if (x) {
                    if (c && d[c - 1].type === "break" && (!Array.isArray(x) && x.type === "text" && (x.value = et(x.value)), !Array.isArray(x) && x.type === "element")) {
                        const w = x.children[0];
                        w && w.type === "text" && (w.value = et(w.value))
                    }
                    Array.isArray(x) ? m.push(...x) : m.push(x)
                }
            }
        }
        return m
    }
}

function Vo(e, n) {
    e.position && (n.position = _r(e))
}

function qo(e, n) {
    let t = n;
    if (e && e.data) {
        const r = e.data.hName,
            i = e.data.hChildren,
            l = e.data.hProperties;
        if (typeof r == "string")
            if (t.type === "element") t.tagName = r;
            else {
                const o = "children" in t ? t.children : [t];
                t = {
                    type: "element",
                    tagName: r,
                    properties: {},
                    children: o
                }
            }
        t.type === "element" && l && Object.assign(t.properties, He(l)), "children" in t && t.children && i !== null && i !== void 0 && (t.children = i)
    }
    return t
}

function $o(e, n) {
    const t = n.data || {},
        r = "value" in n && !(sn.call(t, "hProperties") || sn.call(t, "hChildren")) ? {
            type: "text",
            value: n.value
        } : {
            type: "element",
            tagName: "div",
            properties: {},
            children: e.all(n)
        };
    return e.patch(n, r), e.applyData(n, r)
}

function Wo(e, n) {
    const t = [];
    let r = -1;
    for (n && t.push({
            type: "text",
            value: `
`
        }); ++r < e.length;) r && t.push({
        type: "text",
        value: `
`
    }), t.push(e[r]);
    return n && e.length > 0 && t.push({
        type: "text",
        value: `
`
    }), t
}

function et(e) {
    let n = 0,
        t = e.charCodeAt(n);
    for (; t === 9 || t === 32;) n++, t = e.charCodeAt(n);
    return e.slice(n)
}

function nt(e, n) {
    const t = Uo(e, n),
        r = t.one(e, void 0),
        i = jo(t),
        l = Array.isArray(r) ? {
            type: "root",
            children: r
        } : r || {
            type: "root",
            children: []
        };
    return i && l.children.push({
        type: "text",
        value: `
`
    }, i), l
}

function Yo(e, n) {
    return e && "run" in e ? async function(t, r) {
        const i = nt(t, {
            file: r,
            ...n
        });
        await e.run(i, r)
    } : function(t, r) {
        return nt(t, {
            file: r,
            ...e || n
        })
    }
}

function tt(e) {
    if (e) throw e
}
var je = Object.prototype.hasOwnProperty,
    $t = Object.prototype.toString,
    rt = Object.defineProperty,
    it = Object.getOwnPropertyDescriptor,
    lt = function(n) {
        return typeof Array.isArray == "function" ? Array.isArray(n) : $t.call(n) === "[object Array]"
    },
    ot = function(n) {
        if (!n || $t.call(n) !== "[object Object]") return !1;
        var t = je.call(n, "constructor"),
            r = n.constructor && n.constructor.prototype && je.call(n.constructor.prototype, "isPrototypeOf");
        if (n.constructor && !t && !r) return !1;
        var i;
        for (i in n);
        return typeof i > "u" || je.call(n, i)
    },
    at = function(n, t) {
        rt && t.name === "__proto__" ? rt(n, t.name, {
            enumerable: !0,
            configurable: !0,
            value: t.newValue,
            writable: !0
        }) : n[t.name] = t.newValue
    },
    ut = function(n, t) {
        if (t === "__proto__")
            if (je.call(n, t)) {
                if (it) return it(n, t).value
            } else return;
        return n[t]
    },
    Qo = function e() {
        var n, t, r, i, l, o, a = arguments[0],
            s = 1,
            u = arguments.length,
            p = !1;
        for (typeof a == "boolean" && (p = a, a = arguments[1] || {}, s = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); s < u; ++s)
            if (n = arguments[s], n != null)
                for (t in n) r = ut(a, t), i = ut(n, t), a !== i && (p && i && (ot(i) || (l = lt(i))) ? (l ? (l = !1, o = r && lt(r) ? r : []) : o = r && ot(r) ? r : {}, at(a, {
                    name: t,
                    newValue: e(p, o, i)
                })) : typeof i < "u" && at(a, {
                    name: t,
                    newValue: i
                }));
        return a
    };
const Xe = tr(Qo);

function cn(e) {
    if (typeof e != "object" || e === null) return !1;
    const n = Object.getPrototypeOf(e);
    return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}

function Xo() {
    const e = [],
        n = {
            run: t,
            use: r
        };
    return n;

    function t(...i) {
        let l = -1;
        const o = i.pop();
        if (typeof o != "function") throw new TypeError("Expected function as last argument, not " + o);
        a(null, ...i);

        function a(s, ...u) {
            const p = e[++l];
            let m = -1;
            if (s) {
                o(s);
                return
            }
            for (; ++m < i.length;)(u[m] === null || u[m] === void 0) && (u[m] = i[m]);
            i = u, p ? Ko(p, a)(...u) : o(null, ...u)
        }
    }

    function r(i) {
        if (typeof i != "function") throw new TypeError("Expected `middelware` to be a function, not " + i);
        return e.push(i), n
    }
}

function Ko(e, n) {
    let t;
    return r;

    function r(...o) {
        const a = e.length > o.length;
        let s;
        a && o.push(i);
        try {
            s = e.apply(this, o)
        } catch (u) {
            const p = u;
            if (a && t) throw p;
            return i(p)
        }
        a || (s instanceof Promise ? s.then(l, i) : s instanceof Error ? i(s) : l(s))
    }

    function i(o, ...a) {
        t || (t = !0, n(o, ...a))
    }

    function l(o) {
        i(null, o)
    }
}
const ae = {
    basename: Jo,
    dirname: Go,
    extname: Zo,
    join: ea,
    sep: "/"
};

function Jo(e, n) {
    if (n !== void 0 && typeof n != "string") throw new TypeError('"ext" argument must be a string');
    _e(e);
    let t = 0,
        r = -1,
        i = e.length,
        l;
    if (n === void 0 || n.length === 0 || n.length > e.length) {
        for (; i--;)
            if (e.codePointAt(i) === 47) {
                if (l) {
                    t = i + 1;
                    break
                }
            } else r < 0 && (l = !0, r = i + 1);
        return r < 0 ? "" : e.slice(t, r)
    }
    if (n === e) return "";
    let o = -1,
        a = n.length - 1;
    for (; i--;)
        if (e.codePointAt(i) === 47) {
            if (l) {
                t = i + 1;
                break
            }
        } else o < 0 && (l = !0, o = i + 1), a > -1 && (e.codePointAt(i) === n.codePointAt(a--) ? a < 0 && (r = i) : (a = -1, r = o));
    return t === r ? r = o : r < 0 && (r = e.length), e.slice(t, r)
}

function Go(e) {
    if (_e(e), e.length === 0) return ".";
    let n = -1,
        t = e.length,
        r;
    for (; --t;)
        if (e.codePointAt(t) === 47) {
            if (r) {
                n = t;
                break
            }
        } else r || (r = !0);
    return n < 0 ? e.codePointAt(0) === 47 ? "/" : "." : n === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, n)
}

function Zo(e) {
    _e(e);
    let n = e.length,
        t = -1,
        r = 0,
        i = -1,
        l = 0,
        o;
    for (; n--;) {
        const a = e.codePointAt(n);
        if (a === 47) {
            if (o) {
                r = n + 1;
                break
            }
            continue
        }
        t < 0 && (o = !0, t = n + 1), a === 46 ? i < 0 ? i = n : l !== 1 && (l = 1) : i > -1 && (l = -1)
    }
    return i < 0 || t < 0 || l === 0 || l === 1 && i === t - 1 && i === r + 1 ? "" : e.slice(i, t)
}

function ea(...e) {
    let n = -1,
        t;
    for (; ++n < e.length;) _e(e[n]), e[n] && (t = t === void 0 ? e[n] : t + "/" + e[n]);
    return t === void 0 ? "." : na(t)
}

function na(e) {
    _e(e);
    const n = e.codePointAt(0) === 47;
    let t = ta(e, !n);
    return t.length === 0 && !n && (t = "."), t.length > 0 && e.codePointAt(e.length - 1) === 47 && (t += "/"), n ? "/" + t : t
}

function ta(e, n) {
    let t = "",
        r = 0,
        i = -1,
        l = 0,
        o = -1,
        a, s;
    for (; ++o <= e.length;) {
        if (o < e.length) a = e.codePointAt(o);
        else {
            if (a === 47) break;
            a = 47
        }
        if (a === 47) {
            if (!(i === o - 1 || l === 1))
                if (i !== o - 1 && l === 2) {
                    if (t.length < 2 || r !== 2 || t.codePointAt(t.length - 1) !== 46 || t.codePointAt(t.length - 2) !== 46) {
                        if (t.length > 2) {
                            if (s = t.lastIndexOf("/"), s !== t.length - 1) {
                                s < 0 ? (t = "", r = 0) : (t = t.slice(0, s), r = t.length - 1 - t.lastIndexOf("/")), i = o, l = 0;
                                continue
                            }
                        } else if (t.length > 0) {
                            t = "", r = 0, i = o, l = 0;
                            continue
                        }
                    }
                    n && (t = t.length > 0 ? t + "/.." : "..", r = 2)
                } else t.length > 0 ? t += "/" + e.slice(i + 1, o) : t = e.slice(i + 1, o), r = o - i - 1;
            i = o, l = 0
        } else a === 46 && l > -1 ? l++ : l = -1
    }
    return t
}

function _e(e) {
    if (typeof e != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
}
const ra = {
    cwd: ia
};

function ia() {
    return "/"
}

function pn(e) {
    return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0)
}

function la(e) {
    if (typeof e == "string") e = new URL(e);
    else if (!pn(e)) {
        const n = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
        throw n.code = "ERR_INVALID_ARG_TYPE", n
    }
    if (e.protocol !== "file:") {
        const n = new TypeError("The URL must be of scheme file");
        throw n.code = "ERR_INVALID_URL_SCHEME", n
    }
    return oa(e)
}

function oa(e) {
    if (e.hostname !== "") {
        const r = new TypeError('File URL host must be "localhost" or empty on darwin');
        throw r.code = "ERR_INVALID_FILE_URL_HOST", r
    }
    const n = e.pathname;
    let t = -1;
    for (; ++t < n.length;)
        if (n.codePointAt(t) === 37 && n.codePointAt(t + 1) === 50) {
            const r = n.codePointAt(t + 2);
            if (r === 70 || r === 102) {
                const i = new TypeError("File URL path must not include encoded / characters");
                throw i.code = "ERR_INVALID_FILE_URL_PATH", i
            }
        }
    return decodeURIComponent(n)
}
const Ke = ["history", "path", "basename", "stem", "extname", "dirname"];
class Wt {
    constructor(n) {
        let t;
        n ? pn(n) ? t = {
            path: n
        } : typeof n == "string" || aa(n) ? t = {
            value: n
        } : t = n : t = {}, this.cwd = "cwd" in t ? "" : ra.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
        let r = -1;
        for (; ++r < Ke.length;) {
            const l = Ke[r];
            l in t && t[l] !== void 0 && t[l] !== null && (this[l] = l === "history" ? [...t[l]] : t[l])
        }
        let i;
        for (i in t) Ke.includes(i) || (this[i] = t[i])
    }
    get basename() {
        return typeof this.path == "string" ? ae.basename(this.path) : void 0
    }
    set basename(n) {
        Ge(n, "basename"), Je(n, "basename"), this.path = ae.join(this.dirname || "", n)
    }
    get dirname() {
        return typeof this.path == "string" ? ae.dirname(this.path) : void 0
    }
    set dirname(n) {
        st(this.basename, "dirname"), this.path = ae.join(n || "", this.basename)
    }
    get extname() {
        return typeof this.path == "string" ? ae.extname(this.path) : void 0
    }
    set extname(n) {
        if (Je(n, "extname"), st(this.dirname, "extname"), n) {
            if (n.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
            if (n.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots")
        }
        this.path = ae.join(this.dirname, this.stem + (n || ""))
    }
    get path() {
        return this.history[this.history.length - 1]
    }
    set path(n) {
        pn(n) && (n = la(n)), Ge(n, "path"), this.path !== n && this.history.push(n)
    }
    get stem() {
        return typeof this.path == "string" ? ae.basename(this.path, this.extname) : void 0
    }
    set stem(n) {
        Ge(n, "stem"), Je(n, "stem"), this.path = ae.join(this.dirname || "", n + (this.extname || ""))
    }
    fail(n, t, r) {
        const i = this.message(n, t, r);
        throw i.fatal = !0, i
    }
    info(n, t, r) {
        const i = this.message(n, t, r);
        return i.fatal = void 0, i
    }
    message(n, t, r) {
        const i = new X(n, t, r);
        return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i
    }
    toString(n) {
        return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(n || void 0).decode(this.value)
    }
}

function Je(e, n) {
    if (e && e.includes(ae.sep)) throw new Error("`" + n + "` cannot be a path: did not expect `" + ae.sep + "`")
}

function Ge(e, n) {
    if (!e) throw new Error("`" + n + "` cannot be empty")
}

function st(e, n) {
    if (!e) throw new Error("Setting `" + n + "` requires `path` to be set too")
}

function aa(e) {
    return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e)
}
const ua = function(e) {
        const r = this.constructor.prototype,
            i = r[e],
            l = function() {
                return i.apply(l, arguments)
            };
        Object.setPrototypeOf(l, r);
        const o = Object.getOwnPropertyNames(i);
        for (const a of o) {
            const s = Object.getOwnPropertyDescriptor(i, a);
            s && Object.defineProperty(l, a, s)
        }
        return l
    },
    sa = {}.hasOwnProperty;
class wn extends ua {
    constructor() {
        super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Xo()
    }
    copy() {
        const n = new wn;
        let t = -1;
        for (; ++t < this.attachers.length;) {
            const r = this.attachers[t];
            n.use(...r)
        }
        return n.data(Xe(!0, {}, this.namespace)), n
    }
    data(n, t) {
        return typeof n == "string" ? arguments.length === 2 ? (nn("data", this.frozen), this.namespace[n] = t, this) : sa.call(this.namespace, n) && this.namespace[n] || void 0 : n ? (nn("data", this.frozen), this.namespace = n, this) : this.namespace
    }
    freeze() {
        if (this.frozen) return this;
        const n = this;
        for (; ++this.freezeIndex < this.attachers.length;) {
            const [t, ...r] = this.attachers[this.freezeIndex];
            if (r[0] === !1) continue;
            r[0] === !0 && (r[0] = void 0);
            const i = t.call(n, ...r);
            typeof i == "function" && this.transformers.use(i)
        }
        return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this
    }
    parse(n) {
        this.freeze();
        const t = Re(n),
            r = this.parser || this.Parser;
        return Ze("parse", r), r(String(t), t)
    }
    process(n, t) {
        const r = this;
        return this.freeze(), Ze("process", this.parser || this.Parser), en("process", this.compiler || this.Compiler), t ? i(void 0, t) : new Promise(i);

        function i(l, o) {
            const a = Re(n),
                s = r.parse(a);
            r.run(s, a, function(p, m, d) {
                if (p || !m || !d) return u(p);
                const c = m,
                    x = r.stringify(c, d);
                ha(x) ? d.value = x : d.result = x, u(p, d)
            });

            function u(p, m) {
                p || !m ? o(p) : l ? l(m) : t(void 0, m)
            }
        }
    }
    processSync(n) {
        let t = !1,
            r;
        return this.freeze(), Ze("processSync", this.parser || this.Parser), en("processSync", this.compiler || this.Compiler), this.process(n, i), pt("processSync", "process", t), r;

        function i(l, o) {
            t = !0, tt(l), r = o
        }
    }
    run(n, t, r) {
        ct(n), this.freeze();
        const i = this.transformers;
        return !r && typeof t == "function" && (r = t, t = void 0), r ? l(void 0, r) : new Promise(l);

        function l(o, a) {
            const s = Re(t);
            i.run(n, s, u);

            function u(p, m, d) {
                const c = m || n;
                p ? a(p) : o ? o(c) : r(void 0, c, d)
            }
        }
    }
    runSync(n, t) {
        let r = !1,
            i;
        return this.run(n, t, l), pt("runSync", "run", r), i;

        function l(o, a) {
            tt(o), i = a, r = !0
        }
    }
    stringify(n, t) {
        this.freeze();
        const r = Re(t),
            i = this.compiler || this.Compiler;
        return en("stringify", i), ct(n), i(n, r)
    }
    use(n, ...t) {
        const r = this.attachers,
            i = this.namespace;
        if (nn("use", this.frozen), n != null)
            if (typeof n == "function") s(n, t);
            else if (typeof n == "object") Array.isArray(n) ? a(n) : o(n);
        else throw new TypeError("Expected usable value, not `" + n + "`");
        return this;

        function l(u) {
            if (typeof u == "function") s(u, []);
            else if (typeof u == "object")
                if (Array.isArray(u)) {
                    const [p, ...m] = u;
                    s(p, m)
                } else o(u);
            else throw new TypeError("Expected usable value, not `" + u + "`")
        }

        function o(u) {
            if (!("plugins" in u) && !("settings" in u)) throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
            a(u.plugins), u.settings && (i.settings = Xe(!0, i.settings, u.settings))
        }

        function a(u) {
            let p = -1;
            if (u != null)
                if (Array.isArray(u))
                    for (; ++p < u.length;) {
                        const m = u[p];
                        l(m)
                    } else throw new TypeError("Expected a list of plugins, not `" + u + "`")
        }

        function s(u, p) {
            let m = -1,
                d = -1;
            for (; ++m < r.length;)
                if (r[m][0] === u) {
                    d = m;
                    break
                }
            if (d === -1) r.push([u, ...p]);
            else if (p.length > 0) {
                let [c, ...x] = p;
                const w = r[d][1];
                cn(w) && cn(c) && (c = Xe(!0, w, c)), r[d] = [u, c, ...x]
            }
        }
    }
}
const ca = new wn().freeze();

function Ze(e, n) {
    if (typeof n != "function") throw new TypeError("Cannot `" + e + "` without `parser`")
}

function en(e, n) {
    if (typeof n != "function") throw new TypeError("Cannot `" + e + "` without `compiler`")
}

function nn(e, n) {
    if (n) throw new Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
}

function ct(e) {
    if (!cn(e) || typeof e.type != "string") throw new TypeError("Expected node, got `" + e + "`")
}

function pt(e, n, t) {
    if (!t) throw new Error("`" + e + "` finished async. Use `" + n + "` instead")
}

function Re(e) {
    return pa(e) ? e : new Wt(e)
}

function pa(e) {
    return !!(e && typeof e == "object" && "message" in e && "messages" in e)
}

function ha(e) {
    return typeof e == "string" || fa(e)
}

function fa(e) {
    return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e)
}
const ma = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
    ht = [],
    ft = {
        allowDangerousHtml: !0
    },
    da = /^(https?|ircs?|mailto|xmpp)$/i,
    ga = [{
        from: "astPlugins",
        id: "remove-buggy-html-in-markdown-parser"
    }, {
        from: "allowDangerousHtml",
        id: "remove-buggy-html-in-markdown-parser"
    }, {
        from: "allowNode",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
        to: "allowElement"
    }, {
        from: "allowedTypes",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
        to: "allowedElements"
    }, {
        from: "disallowedTypes",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
        to: "disallowedElements"
    }, {
        from: "escapeHtml",
        id: "remove-buggy-html-in-markdown-parser"
    }, {
        from: "includeElementIndex",
        id: "#remove-includeelementindex"
    }, {
        from: "includeNodeIndex",
        id: "change-includenodeindex-to-includeelementindex"
    }, {
        from: "linkTarget",
        id: "remove-linktarget"
    }, {
        from: "plugins",
        id: "change-plugins-to-remarkplugins",
        to: "remarkPlugins"
    }, {
        from: "rawSourcePos",
        id: "#remove-rawsourcepos"
    }, {
        from: "renderers",
        id: "change-renderers-to-components",
        to: "components"
    }, {
        from: "source",
        id: "change-source-to-children",
        to: "children"
    }, {
        from: "sourcePos",
        id: "#remove-sourcepos"
    }, {
        from: "transformImageUri",
        id: "#add-urltransform",
        to: "urlTransform"
    }, {
        from: "transformLinkUri",
        id: "#add-urltransform",
        to: "urlTransform"
    }];

function ya(e) {
    const n = e.allowedElements,
        t = e.allowElement,
        r = e.children || "",
        i = e.className,
        l = e.components,
        o = e.disallowedElements,
        a = e.rehypePlugins || ht,
        s = e.remarkPlugins || ht,
        u = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions,
            ...ft
        } : ft,
        p = e.skipHtml,
        m = e.unwrapDisallowed,
        d = e.urlTransform || Yt,
        c = ca().use(co).use(s).use(Yo, u).use(a),
        x = new Wt;
    typeof r == "string" && (x.value = r);
    for (const E of ga) Object.hasOwn(e, E.from) && ("" + E.from + (E.to ? "use `" + E.to + "` instead" : "remove it") + ma + E.id, void 0);
    const w = c.parse(x);
    let I = c.runSync(w, x);
    return i && (I = {
        type: "element",
        tagName: "div",
        properties: {
            className: i
        },
        children: I.type === "root" ? I.children : [I]
    }), mt(I, b), Ur(I, {
        Fragment: qe.Fragment,
        components: l,
        ignoreInvalidStyle: !0,
        jsx: qe.jsx,
        jsxs: qe.jsxs,
        passKeys: !0,
        passNode: !0
    });

    function b(E, C, F) {
        if (E.type === "raw" && F && typeof C == "number") return p ? F.children.splice(C, 1) : F.children[C] = {
            type: "text",
            value: E.value
        }, C;
        if (E.type === "element") {
            let L;
            for (L in We)
                if (Object.hasOwn(We, L) && Object.hasOwn(E.properties, L)) {
                    const y = E.properties[L],
                        N = We[L];
                    (N === null || N.includes(E.tagName)) && (E.properties[L] = d(String(y || ""), L, E))
                }
        }
        if (E.type === "element") {
            let L = n ? !n.includes(E.tagName) : o ? o.includes(E.tagName) : !1;
            if (!L && t && typeof C == "number" && (L = !t(E, C, F)), L && F && typeof C == "number") return m && E.children ? F.children.splice(C, 1, ...E.children) : F.children.splice(C, 1), C
        }
    }
}

function Yt(e) {
    const n = e.indexOf(":"),
        t = e.indexOf("?"),
        r = e.indexOf("#"),
        i = e.indexOf("/");
    return n < 0 || i > -1 && n > i || t > -1 && n > t || r > -1 && n > r || da.test(e.slice(0, n)) ? e : ""
}
const Sa = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: ya,
    defaultUrlTransform: Yt
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    Vn as A, ui as B, Yt as C, ir as D, Yo as E, Sa as F, ya as M, xn as a, ue as b, B as c, lo as d, J as e, gr as f, De as g, br as h, ee as i, A as j, di as k, mi as l, _ as m, tn as n, ba as o, wa as p, Ie as q, co as r, fn as s, oi as t, ca as u, on as v, sr as w, Ue as x, fe as y, kn as z
};
//# sourceMappingURL=ihors7v1ehg5i95p.js.map