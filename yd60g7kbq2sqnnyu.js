import {
    dG as g,
    dH as k
} from "./lwme42j7zzyr3q7j.js";
import {
    D as i,
    P as s,
    a as t,
    S as r,
    g as p,
    s as f
} from "./bq4rrqi54riy5k2e.js";
let a = "",
    c = "";
const _ = new Set,
    I = {
        setSessionId(n) {
            a = n
        },
        setQuerySessionId(n) {
            _.clear(), c = n
        },
        logClick(n, e, o) {
            i.addAction("fannypack.web.click", {
                index: e,
                source: o
            }), s.logEvent(t.fannyPackClickResult, {
                fanny_pack_session_id: a,
                fanny_pack_query_session_id: c,
                conversationId: n,
                index: e,
                source: o
            }), r.logEvent("chatgpt_fannypack_click", e, {
                index: String(e),
                source: o
            })
        },
        logClose(n) {
            s.logEvent(t.fannyPackClose, {
                fanny_pack_session_id: a,
                source: n
            })
        },
        logOpen(n) {
            g.count(k.DEFAULT, "conversation_search.open", [{
                key: "source",
                value: n
            }]), i.addAction("fannypack.web.open", {
                source: n
            }), s.logEvent(t.fannyPackOpen, {
                fanny_pack_session_id: a,
                source: n
            }), r.logEvent("chatgpt_fannypack_open", n)
        },
        logQuery() {
            i.addAction("fannypack.web.query"), s.logEvent(t.fannyPackQuery, {
                fanny_pack_session_id: a,
                fanny_pack_query_session_id: c
            }), r.logEvent("chatgpt_fannypack_query")
        },
        logQueryError() {
            i.addError("fannypack.web.query_error"), s.logEvent(t.fannyPackQueryError, {
                fanny_pack_session_id: a,
                fanny_pack_query_session_id: c
            })
        },
        logQueryMore() {
            i.addAction("fannypack.web.queryMore"), s.logEvent(t.fannyPackQueryFetchMore, {
                fanny_pack_session_id: a,
                fanny_pack_query_session_id: c
            }), r.logEvent("chatgpt_fannypack_query_more")
        },
        logNoResults() {
            s.logEvent(t.fannyPackNoResults, {
                fanny_pack_session_id: a,
                fanny_pack_query_session_id: c
            })
        },
        logImpression(n, e, o) {
            _.has(o) || (_.add(o), s.logEvent(t.fannyPackImpression, {
                fanny_pack_session_id: a,
                fanny_pack_query_session_id: c,
                source: n,
                index: e,
                conversation_id: o
            }))
        }
    },
    u = {
        isActive: !1,
        query: "",
        activeIndex: void 0,
        mouseInteractionsDisabled: !1
    },
    d = p(f(() => ({ ...u
    }))),
    l = d.getState,
    y = d.setState,
    P = {
        getQuery: (n = l()) => n.query,
        getMouseInteractionsDisabled: () => l().mouseInteractionsDisabled
    },
    m = {
        setIsActive: n => {
            y({
                isActive: n
            })
        },
        setQuery: n => {
            y({
                query: n
            })
        },
        setActiveIndex: n => {
            y(e => {
                e.activeIndex = n, e.mouseInteractionsDisabled = !0
            })
        },
        setMouseInteractionsDisabled: n => {
            y(e => {
                e.mouseInteractionsDisabled = n
            })
        }
    };
export {
    m as F, I as a, P as b, d as u
};
//# sourceMappingURL=yd60g7kbq2sqnnyu.js.map