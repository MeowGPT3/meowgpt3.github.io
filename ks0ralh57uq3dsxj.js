import {
    eO as P,
    eP as T,
    eQ as L,
    eR as A,
    eS as N,
    eT as _,
    eU as w,
    eV as b,
    eW as B,
    eX as D,
    eY as F,
    eZ as Q,
    e_ as $,
    e$ as G,
    f0 as H,
    f1 as M,
    av as j,
    R as U,
    f2 as W,
    d as h,
    f3 as k,
    f4 as q,
    W as I,
    f5 as O,
    f6 as V,
    f7 as S,
    bv as Y,
    f8 as X
} from "./bq4rrqi54riy5k2e.js";
import {
    x as Z,
    r,
    al as z,
    e as J,
    j as e,
    am as K,
    an as ee,
    ao as te,
    ap as se,
    aq as re,
    ar as ae,
    A as ne,
    as as oe
} from "./mna1wiucqak6lqzp.js";
var ie = {};
P();
const de = () => !1,
    fe = () => [{
        title: "ChatGPT"
    }, ...L];

function E({
    children: a,
    isSearchPage: t,
    isElectron: s,
    isIos: c,
    isAndroidChrome: l,
    windowStyle: f,
    cspScriptNonce: o
}) {
    const n = ""; {
        const {
            layer: u
        } = j("3613709240");
        U.setRefreshAccessTokenLayer(u)
    }
    return e.jsxs("html", {
        "data-build": W,
        dir: "ltr",
        className: h({
            "snc-root": t,
            "sdtrn-root": s || !1
        }, n),
        suppressHydrationWarning: !0,
        children: [e.jsxs("head", {
            children: [e.jsx("meta", {
                charSet: "UTF-8"
            }), e.jsx("meta", {
                name: "viewport",
                content: `width=device-width, initial-scale=1${c?", maximum-scale=1":""}`
            }), l ? e.jsx("link", {
                rel: "manifest",
                href: "/manifest.json"
            }) : null, e.jsx(k, {}), e.jsx(q, {}), e.jsx(se, {}), e.jsx(re, {}), e.jsx("script", {
                nonce: o,
                suppressHydrationWarning: !0,
                children: '!function initScrollTimelineInline(){try{if(CSS.supports("animation-timeline: --works"))return;var t=new Map;document.addEventListener("animationstart",(n=>{if(!(n.target instanceof HTMLElement))return;const e=n.target.getAnimations().filter((t=>t.animationName===n.animationName));t.set(n.target,e)})),document.addEventListener("scrolltimelineload",(n=>{t.forEach(((t,e)=>{t.forEach((t=>{n.detail.upgradeAnimation(t,e)}))})),t.clear()}),{once:!0})}catch{}}();'
            })]
        }), e.jsxs("body", {
            className: h({
                snc: t
            }),
            children: [e.jsx(I.Provider, {
                value: {
                    cspScriptNonce: o,
                    isElectron: !!s,
                    windowStyle: f,
                    isIos: c,
                    isAndroidChrome: l
                },
                children: a
            }), e.jsx(ae, {
                nonce: o
            })]
        })]
    })
}
const pe = A(function() {
    const t = ne(),
        {
            cspNonce: s
        } = r.useContext(O);
    return e.jsx(E, {
        cspScriptNonce: s,
        children: oe(t) ? t.status === 404 ? e.jsx(V, {}) : e.jsx(S, {
            error: new Error(`Route Error (${t.status} ${t.statusText}): ${t.message}`),
            resetError: () => location.reload()
        }) : e.jsx(S, {
            error: t,
            resetError: () => location.reload()
        })
    })
});

function ce({
    children: a
}) {
    const {
        layer: t
    } = j("1358849452");
    return t.get("disable-ssr", !1) ? e.jsx(Y, {
        children: a
    }) : a
}
const me = T(function() {
    const {
        clientBootstrap: t,
        isIos: s,
        isAndroidChrome: c,
        isElectron: l,
        windowStyle: f,
        cspScriptNonce: o
    } = Z(), n = r.useRef(void 0);
    n.current || (n.current = N(), _(n.current));
    const u = n.current,
        i = w(u);
    r.useEffect(() => {
        b()
    }, []);
    const {
        staticQueries: p,
        promiseQueries: C
    } = B(), m = r.useMemo(() => ({
        queries: [...p],
        mutations: []
    }), [p]), x = r.useRef(!1);
    D(i, C);
    const d = r.useRef(void 0);
    x.current || (x.current = !0, z(i, m), X(t), F(i), Q(t, i, g => {
        d.current = g
    })), r.useEffect(() => {
        d.current && (d.current(), d.current = void 0)
    }, []);
    const {
        pathname: R
    } = J(), v = R.startsWith("/search"), y = t.statsig ? ? null;
    return e.jsx($, {
        sessionContext: u,
        children: e.jsx(G, {
            statsig: ie.FORCE_STATSIG_DEFAULTS ? null : y,
            children: e.jsx(E, {
                isIos: s,
                isAndroidChrome: c,
                isElectron: l,
                isSearchPage: v,
                cspScriptNonce: o,
                windowStyle: f,
                children: e.jsx(H, {
                    attribute: "class",
                    children: e.jsx(ce, {
                        children: e.jsx(K, {
                            client: i,
                            children: e.jsx(ee, {
                                state: m,
                                children: e.jsx(M, {
                                    Component: te,
                                    pageProps: t
                                })
                            })
                        })
                    })
                })
            })
        })
    })
});
export {
    pe as ErrorBoundary, me as
    default, fe as meta, de as shouldRevalidate
};
//# sourceMappingURL=ks0ralh57uq3dsxj.js.map