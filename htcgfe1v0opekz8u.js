import {
    r as f,
    j as t,
    c as k,
    M as h
} from "./mna1wiucqak6lqzp.js";
import {
    dZ as N,
    r as I
} from "./bq4rrqi54riy5k2e.js";
import {
    cT as S,
    cU as Y,
    cV as v,
    cW as $,
    cX as E
} from "./lwme42j7zzyr3q7j.js";
import {
    H as F
} from "./h88qamfv10wkp88v.js";

function _({
    className: l,
    elementRef: o,
    item: i,
    isActiveInMainWindow: e,
    isActive: s,
    testId: a,
    hideOverflowMenu: r = !1
}) {
    return t.jsx("li", {
        className: "relative",
        "data-testid": a,
        children: t.jsx(F, {
            className: l,
            conversation: i,
            isActiveInMainWindow: e,
            isActive: s,
            elementRef: o,
            testId: a,
            hideOverflowMenu: r
        })
    })
}
const D = f.memo(_),
    u = I({
        historyBucketToday: {
            id: "history.bucket.today",
            defaultMessage: "Today"
        },
        historyBucketYesterday: {
            id: "history.bucket.yesterday",
            defaultMessage: "Yesterday"
        },
        historyBucketLastSeven: {
            id: "history.bucket.lastSeven",
            defaultMessage: "Previous 7 Days"
        },
        historyBucketLastThirty: {
            id: "history.bucket.lastThirty",
            defaultMessage: "Previous 30 Days"
        }
    }),
    H = 5;

function R(l, o) {
    const i = k();
    return f.useMemo(() => l.reduce((e, s) => {
        const a = new Date(s.update_time ? ? s.create_time ? ? 0),
            r = S(new Date, a);
        if (r === 0) e.recent.today.items.push(s);
        else if (r <= 1) e.recent.yesterday.items.push(s);
        else if (r <= 7) e.recent.lastSeven.items.push(s);
        else if (r <= 30) e.recent.lastThirty.items.push(s);
        else if (Y(a)) {
            const m = v(a),
                n = $(a),
                d = `${m}-${n}`;
            e.dynamicMonths[d] ? e.dynamicMonths[d].items.push(s) : e.dynamicMonths[d] = {
                label: i.formatDate(a, {
                    month: "long"
                }),
                items: [s]
            }
        } else {
            const n = `${v(a)}-`;
            e.dynamicYears[n] ? e.dynamicYears[n].items.push(s) : e.dynamicYears[n] = {
                label: i.formatDate(a, {
                    year: "numeric"
                }),
                items: [s]
            }
        }
        return e
    }, {
        recent: {
            today: {
                label: t.jsx(h, { ...u.historyBucketToday
                }),
                items: []
            },
            yesterday: {
                label: t.jsx(h, { ...u.historyBucketYesterday
                }),
                items: []
            },
            lastSeven: {
                label: t.jsx(h, { ...u.historyBucketLastSeven
                }),
                items: []
            },
            lastThirty: {
                label: t.jsx(h, { ...u.historyBucketLastThirty
                }),
                items: []
            }
        },
        dynamicMonths: {},
        dynamicYears: {}
    }), [o, l])
}

function z({
    activeId: l,
    bucketedItems: o,
    items: i,
    hasNextPage: e,
    infiniteScrollTriggerElementRef: s,
    hideOverflowMenu: a
}) {
    const r = N().activeServerThreadIds;
    return t.jsx(t.Fragment, {
        children: [o.recent, o.dynamicMonths, o.dynamicYears].flatMap((m, n) => t.jsx(f.Fragment, {
            children: Object.entries(m).map(([d, {
                items: c,
                label: T
            }], M) => {
                if (d !== "today" && !c.length) return null;
                const x = !!c.find(y => i.length > 0 && y.id === i[0] ? .id);
                return c.length > 0 && t.jsxs("div", {
                    className: "relative mt-5 first:mt-0 last:mb-5",
                    children: [t.jsx("div", {
                        className: "sticky top-0 z-20 bg-token-sidebar-surface-primary",
                        children: t.jsx("span", {
                            className: "flex h-9 items-center",
                            children: t.jsx(E, {
                                children: T
                            })
                        })
                    }), t.jsx("ol", {
                        children: c.map((y, p) => {
                            const g = l === y.id,
                                j = r.has(y.id),
                                B = x && p === 0,
                                b = e && i[i.length - H - 1] ? .id === y.id ? s : void 0;
                            return t.jsx(D, {
                                item: y,
                                hideOverflowMenu: a,
                                isActiveInMainWindow: g,
                                isActive: j,
                                isFirstItem: B,
                                elementRef: b,
                                testId: `history-item-${p}`
                            }, `history-item-${y.id}-${d}`)
                        })
                    })]
                }, `${d}-${n}-${M}`)
            })
        }, `category-${n}`))
    })
}
export {
    z as H, D as a, R as u
};
//# sourceMappingURL=htcgfe1v0opekz8u.js.map