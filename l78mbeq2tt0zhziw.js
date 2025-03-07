import {
    eP as c,
    f9 as u,
    cI as d,
    D as n,
    fp as l
} from "./bq4rrqi54riy5k2e.js";
import {
    w as f,
    x as m,
    r as p,
    a as h,
    j as e,
    ao as g
} from "./mna1wiucqak6lqzp.js";
import {
    C as y
} from "./n83ot8g87n35y6bo.js";
import {
    bo as P
} from "./lwme42j7zzyr3q7j.js";
import "./nc7lfqrltu2fqkst.js";
import "./m0wlwtibo8yb2c2h.js";
import "./cxz91putlw7pmfk2.js";
import "./h880urmi5g802uqa.js";
import "./klo929ei6t0ugfr6.js";
import "./niyc1j17i1iogjjg.js";
import "./hx3p6g5v1c632c0c.js";
import "./fl41y0is7h6g0gxe.js";
import "./jk32tpxhwr7rebuc.js";
import "./htcgfe1v0opekz8u.js";
import "./h88qamfv10wkp88v.js";
import "./nmr5d79kmws977p2.js";
import "./lizbu6fwxn81l4m4.js";
import "./g77ymanjjcustcw3.js";
import "./m44xlxtgozicne9l.js";
import "./mudxqzvnzrr4lh0z.js";
import "./m3b3wk7x0ejaq5a6.js";
import "./oqh7hur52tf42g0a.js";
import "./m1vqqb108216sh4q.js";
import "./ld626s1jynzsi9nc.js";
import "./hexf8t3k7mz2tojm.js";
const H = () => (u(), {
        prefetchSearch: null
    }),
    J = ({
        currentUrl: a,
        nextUrl: o
    }) => {
        const t = a.searchParams,
            r = o.searchParams;
        return t.get("hints") !== r.get("hints") || t.get("q") !== r.get("q")
    },
    N = c(function() {
        const o = d(),
            {
                conversationId: t
            } = f(),
            {
                prefetchSearch: r
            } = m(),
            s = m();
        p.useEffect(() => {
            n.addFeatureFlagEvaluation("prefetch_models_query", s.didPrefetchModelsQuery)
        }, [s.didPrefetchModelsQuery]);
        const i = h();
        return p.useEffect(() => P(i, l(!1).queryKey, () => {
            n.addFirstTiming("load.models")
        }), [i]), e.jsxs(e.Fragment, {
            children: [e.jsx(y, { ...o,
                urlThreadId: t,
                prefetchSearch: r
            }), e.jsx(g, {})]
        })
    });
export {
    H as clientLoader, N as
    default, J as shouldRevalidate
};
//# sourceMappingURL=l78mbeq2tt0zhziw.js.map