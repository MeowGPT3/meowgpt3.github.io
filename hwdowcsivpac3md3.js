import {
    r as t,
    aH as m,
    aI as R,
    aJ as x,
    aK as w,
    aL as M,
    l as g,
    aM as h,
    aN as p,
    aO as v,
    aP as S,
    aQ as D,
    aR as y,
    aS as P,
    aT as _,
    aU as E,
    aV as b,
    aW as I,
    j as f
} from "./mna1wiucqak6lqzp.js";
import {
    c as C
} from "./do5id1w5k5vogwvo.js";
/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function F(i) {
    return t.createElement(M, {
        flushSync: g.flushSync,
        ...i
    })
}
var e = null,
    u = null;

function H() {
    !e && window.__reactRouterContext && window.__reactRouterManifest && window.__reactRouterRouteModules && (e = {
        context: window.__reactRouterContext,
        manifest: window.__reactRouterManifest,
        routeModules: window.__reactRouterRouteModules,
        stateDecodingPromise: void 0,
        router: void 0,
        routerInitialized: !1
    })
}

function z() {
    if (H(), !e) throw new Error("You must be using the SSR features of React Router in order to skip passing a `router` prop to `<RouterProvider>`");
    let i = e;
    if (!e.stateDecodingPromise) {
        let a = e.context.stream;
        m(a, "No stream found for single fetch decoding"), e.context.stream = void 0, e.stateDecodingPromise = h(a, window).then(s => {
            e.context.state = s.value, i.stateDecodingPromise.value = !0
        }).catch(s => {
            i.stateDecodingPromise.error = s
        })
    }
    if (e.stateDecodingPromise.error) throw e.stateDecodingPromise.error;
    if (!e.stateDecodingPromise.value) throw e.stateDecodingPromise;
    let d = p(e.manifest.routes, e.routeModules, e.context.state, e.context.isSpaMode),
        o;
    if (!e.context.isSpaMode) {
        o = { ...e.context.state,
            loaderData: { ...e.context.state.loaderData
            }
        };
        let a = v(d, window.location, window.__reactRouterContext ? .basename);
        if (a)
            for (let s of a) {
                let c = s.route.id,
                    l = e.routeModules[c],
                    n = e.manifest.routes[c];
                l && n && S(n, l, e.context.isSpaMode) && (l.HydrateFallback || !n.hasLoader) ? delete o.loaderData[c] : n && !n.hasLoader && (o.loaderData[c] = null)
            }
        o && o.errors && (o.errors = D(o.errors))
    }
    let r = y({
        routes: d,
        history: P(),
        basename: e.context.basename,
        hydrationData: o,
        mapRouteProperties: _,
        dataStrategy: E(e.manifest, e.routeModules, () => r),
        patchRoutesOnNavigation: b(e.manifest, e.routeModules, e.context.isSpaMode, e.context.basename)
    });
    return e.router = r, r.state.initialized && (e.routerInitialized = !0, r.initialize()), r.createRoutesForHMR = I, window.__reactRouterDataRouter = r, r
}

function L() {
    u || (u = z());
    let [i, d] = t.useState(void 0), [o, r] = t.useState(u.state.location);
    return t.useLayoutEffect(() => {
        e && e.router && !e.routerInitialized && (e.routerInitialized = !0, e.router.initialize())
    }, []), t.useLayoutEffect(() => {
        if (e && e.router) return e.router.subscribe(a => {
            a.location !== o && r(a.location)
        })
    }, [o]), m(e, "ssrInfo unavailable for HydratedRouter"), R(u, e.manifest, e.routeModules, e.context.isSpaMode), t.createElement(t.Fragment, null, t.createElement(x.Provider, {
        value: {
            manifest: e.manifest,
            routeModules: e.routeModules,
            future: e.context.future,
            criticalCss: i,
            isSpaMode: e.context.isSpaMode
        }
    }, t.createElement(w, {
        location: o
    }, t.createElement(F, {
        router: u
    }))), t.createElement(t.Fragment, null))
}
t.startTransition(() => {
    C.hydrateRoot(document, f.jsx(t.StrictMode, {
        children: f.jsx(L, {})
    }))
});
//# sourceMappingURL=hwdowcsivpac3md3.js.map