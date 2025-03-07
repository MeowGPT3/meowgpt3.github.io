import {
    j as a,
    M as m,
    r as c,
    v as u
} from "./mna1wiucqak6lqzp.js";
import {
    f_ as r,
    f$ as k,
    bE as y
} from "./lwme42j7zzyr3q7j.js";
import {
    ci as S,
    ak as h,
    a6 as x,
    D as A,
    d as F
} from "./bq4rrqi54riy5k2e.js";
import {
    i as l
} from "./fl41y0is7h6g0gxe.js";
import {
    F as i
} from "./m01asv1bmfnb610p.js";
import {
    u as P,
    F as d,
    a as n
} from "./yd60g7kbq2sqnnyu.js";
import "./cxz91putlw7pmfk2.js";

function f() {
    return (l() ? "⌘" : "Ctrl") + " K"
}

function g({
    children: e,
    sideOffset: t,
    className: s
}) {
    return r.markStart("FannyPackSearchTooltip", r.NS_SIDEBAR), r.markRendered("FannyPackSearchTooltip", r.NS_SIDEBAR), a.jsx(S, {
        sideOffset: t,
        className: s,
        label: a.jsxs("div", {
            children: [a.jsx(m, {
                id: "jmd8WH",
                defaultMessage: "Search chats"
            }), a.jsx("div", {
                className: "text-sm font-normal text-token-text-secondary",
                children: f()
            })]
        }),
        children: e
    })
}

function v(e) {
    return (l() ? e.metaKey : e.ctrlKey) && e.key === "k"
}

function E() {
    const e = h(),
        t = P(o => o.isActive),
        {
            value: s
        } = x("1422501431");
    return c.useEffect(() => {
        e && (s ? i.setCurrentAccountV2(e) : i.setCurrentAccount(e), i.init())
    }, [e, s]), c.useEffect(() => {
        const o = p => {
            v(p) && (t ? n.logClose("shortcut") : (n.setSessionId(u()), n.logOpen("shortcut")), d.setIsActive(!t))
        };
        return window.addEventListener("keydown", o), () => {
            window.removeEventListener("keydown", o)
        }
    }, [t]), {
        openSearch: c.useCallback(() => {
            d.setIsActive(!0), n.setSessionId(u()), n.logOpen("button")
        }, [])
    }
}

function N({
    className: e
}) {
    const {
        openSearch: t
    } = E();
    return c.useEffect(() => {
        A.addAction("fannypack.web.action_seen")
    }, []), a.jsx(g, {
        sideOffset: 4,
        className: F("flex", e),
        children: a.jsx(k, {
            "aria-label": f(),
            onClick: t,
            icon: y
        })
    })
}
export {
    N as FannyPackAction
};
//# sourceMappingURL=ervbcbd76q4uns1s.js.map