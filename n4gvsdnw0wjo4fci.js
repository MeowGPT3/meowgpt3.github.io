const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/er3244jpp1olp5tj.js", "assets/mna1wiucqak6lqzp.js"]))) => i.map(i => d[i]);
import {
    fd as u,
    a0 as f,
    Z as c,
    bA as p,
    ag as l,
    B as S,
    k as b,
    z as w
} from "./bq4rrqi54riy5k2e.js";
import {
    r as i,
    u as y
} from "./mna1wiucqak6lqzp.js";
import {
    e as g
} from "./lwme42j7zzyr3q7j.js";
async function m(e) {
    const t = await p(() =>
        import ("./er3244jpp1olp5tj.js").then(n => n.i), __vite__mapDeps([0, 1]));
    if (l != null && e ? .startsWith(l)) return !0;
    try {
        return t.get(new URL(e ? ? "").hostname) === "openai.com"
    } catch {
        return !1
    }
}

function h(e, t) {
    const n = u(),
        {
            isUnauthenticated: s
        } = b();
    return y({
        queryKey: ["safe-url", {
            serverThreadId: e,
            url: t,
            isHistoryAndTrainingDisabled: n
        }],
        queryFn: async () => {
            if (e == null || t == null) throw new Error("Unexpected falsey useSafeUrlQuery");
            return await m(t) || S.isThreadUrlSafe(w(e), t) ? {
                safe: !0
            } : s ? {
                safe: !1
            } : c.getConversationSafeUrls(e, t, n)
        },
        enabled: e != null && t != null
    })
}

function D(e, t, n = !0) {
    const s = f(e, o => t != null && S.isThreadUrlSafe(o, t)),
        {
            data: {
                safe: r
            } = {}
        } = h(e, s ? void 0 : t);
    return s || r || !n ? t : void 0
}

function V(e, t, n = !0) {
    const s = k(t, 500);
    return D(e, s, n)
}

function k(e, t) {
    const [n, s] = i.useState(void 0), [r] = i.useState(() => g(o => {
        s(o)
    }, t));
    return i.useEffect(() => {
        r(e)
    }, [r, e]), n === e ? e : void 0
}

function H(e, t) {
    const n = u(),
        s = f(e, o => o ? .safeUrls ? ? []),
        {
            data: r = []
        } = y({
            queryKey: ["safe-urls", e, t, n, s],
            queryFn: async () => {
                const o = s.filter(a => t.includes(a)),
                    d = t.filter(a => !o.includes(a)),
                    U = (await Promise.allSettled(d.map(async a => {
                        if (await m(a)) return a;
                        if (e == null) return null;
                        try {
                            return (await c.getConversationSafeUrls(e, a, n)).safe ? a : null
                        } catch {
                            return null
                        }
                    }))).map(a => a.status === "fulfilled" ? a.value : null).filter(a => a != null);
                return o.concat(U)
            },
            enabled: e != null && t.length > 0
        });
    return r
}
export {
    V as a, H as u
};
//# sourceMappingURL=n4gvsdnw0wjo4fci.js.map