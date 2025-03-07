import {
    r as u,
    j as e,
    M as k
} from "./mna1wiucqak6lqzp.js";
import {
    c6 as b,
    c7 as _,
    cj as j,
    bC as g,
    cP as y,
    cQ as S,
    cR as w
} from "./lwme42j7zzyr3q7j.js";
import {
    bs as A,
    a6 as f,
    a as d,
    d as m,
    cq as M
} from "./bq4rrqi54riy5k2e.js";
const p = 4;

function F({
    navigation: i,
    onShowSearchResults: a,
    trackContentReferenceEvent: s
}) {
    const {
        value: t
    } = f("3472722167"), n = i.domains.filter(o => o.url);
    u.useEffect(() => {
        s(d.searchContentReferenceShown, "search_content_reference_shown", i.type, {
            urls: n.map(o => o.url).join(",")
        })
    }, [n]);
    let r = [],
        l = [],
        x = n[0].sub_domains.length > 0 && t;
    return n.length > 3 || x ? (r = [n[0]], l = n.slice(1, p)) : r = n, e.jsxs("div", {
        className: m("not-prose mb-3 flex gap-2", l.length > 0 ? "flex-col" : "flex-row"),
        children: [r.map((o, c) => e.jsx(v, {
            isPrimaryDomain: c === 0,
            isFistLineDomain: !0,
            navigationDomain: o,
            trackContentReferenceEvent: s,
            analyticsMetadata: {
                section_index: c
            }
        }, o.url)), l.length > 0 && e.jsxs("div", {
            className: "flex items-stretch gap-2",
            children: [l.map((o, c) => e.jsx(v, {
                navigationDomain: o,
                trackContentReferenceEvent: s,
                analyticsMetadata: {
                    section_index: r.length + c
                }
            }, o.url)), i.domains.length > p && e.jsx(I, {
                onShowSearchResults: a,
                trackContentReferenceEvent: s
            })]
        })]
    })
}
const N = A.div `border border-token-border-light shadow-xxs hover:bg-token-main-surface-secondary dark:border-token-border-xlight dark:bg-token-main-surface-secondary hover:dark:bg-token-main-surface-tertiary`,
    I = ({
        onShowSearchResults: i,
        trackContentReferenceEvent: a
    }) => e.jsx(N, {
        className: "flex w-8 cursor-pointer items-center justify-center rounded-xl",
        onClick: () => {
            a(d.searchContentReferenceClicked, "search_content_reference_clicked", "navigation", {
                sidebar: "sidebar"
            }), i(b.Sources, _.Links)
        },
        children: e.jsx(M, {
            className: "opacity-50"
        })
    }),
    v = ({
        isPrimaryDomain: i,
        isFistLineDomain: a,
        navigationDomain: s,
        trackContentReferenceEvent: t,
        analyticsMetadata: n
    }) => (u.useEffect(() => {
        t(d.linkAction, "link_action", "navigation", {
            url: s.url,
            title: s.title,
            link_type: "card",
            action: "show",
            section: "fast_nav",
            section_location: "response",
            section_index: n.section_index
        })
    }, []), e.jsx("div", {
        className: m("flex-1", i ? "min-w-[40%]" : "min-w-0"),
        children: e.jsx(C, {
            isFistLineDomain: a,
            isPrimaryDomain: i,
            title: s.title,
            subtitle: s.subtitle ? ? void 0,
            url: s.url,
            domain: s.domain,
            subDomains: s.sub_domains,
            trackContentReferenceEvent: t,
            analyticsMetadata: n
        })
    })),
    C = ({
        isFistLineDomain: i,
        isPrimaryDomain: a,
        title: s,
        subtitle: t,
        url: n,
        subDomains: r,
        trackContentReferenceEvent: l,
        analyticsMetadata: x
    }) => {
        const {
            value: o
        } = f("3472722167");
        u.useState(!1);
        const c = {
            url: n,
            title: s,
            link_type: "card",
            section: "fast_nav",
            section_location: "response",
            section_index: x.section_index
        };
        return r.length > 0, e.jsxs(N, {
            className: "group/navigation flex flex-col rounded-2xl text-token-link",
            children: [e.jsxs(j, {
                href: n,
                onClick: () => l(d.linkAction, "link_action", "navigation", { ...c,
                    action: "click"
                }),
                onMouseEnter: () => {
                    l(d.linkAction, "link_action", "navigation", { ...c,
                        action: "hover"
                    })
                },
                className: m("flex flex-row items-center gap-2", i ? "px-4 py-3" : "px-4 py-2.5"),
                children: [e.jsx("div", {
                    className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1D53BF0D] group-hover/navigation:bg-[#1D53BF1A] dark:bg-[#7CA8FF33] group-hover/navigation:dark:bg-[#7CA8FF33]",
                    children: e.jsx(g, {
                        url: n,
                        size: 32,
                        minSize: 20,
                        className: "icon-sm rounded-full"
                    })
                }), e.jsxs("div", {
                    className: "flex min-w-0 flex-col gap-0.5",
                    children: [e.jsxs("div", {
                        className: m("flex items-center gap-1 font-semibold", i ? "text-sm" : "text-xs"),
                        children: [e.jsx("span", {
                            className: "flex-1 truncate",
                            children: s
                        }), !1]
                    }), e.jsx("div", {
                        className: "truncate text-xs",
                        children: t
                    })]
                })]
            }), !1]
        })
    },
    h = 3,
    L = 3;

function W({
    navigation: i,
    onShowSearchResults: a,
    trackContentReferenceEvent: s
}) {
    const {
        value: t
    } = f("756982149"), n = u.useContext(y) != null, r = u.useContext(S);
    return e.jsx("div", {
        className: m({
            hidden: r && n
        }),
        children: t ? e.jsx(z, {
            navigation: i,
            onShowSearchResults: a,
            trackContentReferenceEvent: s
        }) : e.jsx(F, {
            navigation: i,
            onShowSearchResults: a,
            trackContentReferenceEvent: s
        })
    })
}

function z({
    navigation: i,
    onShowSearchResults: a,
    trackContentReferenceEvent: s
}) {
    const t = i.domains.filter(l => l.url);
    u.useEffect(() => {
        s(d.searchContentReferenceShown, "search_content_reference_shown", i.type, {
            urls: t.map(l => l.url).join(",")
        })
    }, [t]);
    let n = t.slice(0, h),
        r = t.slice(h, h + L);
    return e.jsxs("div", {
        className: "not-prose mb-3 flex gap-2",
        children: [n.map((l, x) => e.jsx(B, {
            isPrimaryDomain: x === 0,
            isFistLineDomain: !0,
            navigationDomain: l,
            trackContentReferenceEvent: s,
            analyticsMetadata: {
                section_index: x
            }
        }, l.url)), r.length > 0 && e.jsx(O, {
            onShowSearchResults: a,
            trackContentReferenceEvent: s,
            moreDomains: r
        })]
    })
}
const O = ({
        onShowSearchResults: i,
        trackContentReferenceEvent: a,
        moreDomains: s
    }) => e.jsx("div", {
        className: "group flex w-20 cursor-pointer",
        onClick: () => {
            a(d.searchContentReferenceClicked, "search_content_reference_clicked", "navigation", {
                sidebar: "sidebar"
            }), i(b.Sources, _.Links)
        },
        children: e.jsxs("div", {
            className: "flex flex-col",
            children: [e.jsx("div", {
                className: "flex items-center truncate text-sm font-semibold text-token-text-primary group-hover:underline",
                children: e.jsx(k, {
                    id: "gJPygN",
                    defaultMessage: "More"
                })
            }), e.jsx("div", {
                className: "flex items-center",
                children: s.map((t, n) => e.jsx("div", {
                    style: {
                        zIndex: s.length - n
                    },
                    className: "ml-[-6px] first:ml-0",
                    children: e.jsx("div", {
                        className: m("flex h-5 w-5 items-center overflow-hidden rounded-full", "border-2 border-token-main-surface-primary bg-token-main-surface-primary"),
                        children: e.jsx(g, {
                            url: t.url,
                            size: 32,
                            minSize: 20,
                            className: "icon-sm rounded-full"
                        })
                    }, t.url)
                }, t.url))
            })]
        })
    }),
    B = ({
        isPrimaryDomain: i,
        isFistLineDomain: a,
        navigationDomain: s,
        trackContentReferenceEvent: t,
        analyticsMetadata: n
    }) => (u.useEffect(() => {
        t(d.linkAction, "link_action", "navigation", {
            url: s.url,
            title: s.title,
            link_type: "card",
            action: "show",
            section: "fast_nav",
            section_location: "response",
            section_index: n.section_index
        })
    }, []), e.jsx("div", {
        className: "min-w-0 flex-1",
        children: e.jsx(P, {
            isFistLineDomain: a,
            isPrimaryDomain: i,
            title: s.title,
            subtitle: s.subtitle ? ? void 0,
            url: s.url,
            domain: s.domain,
            subDomains: s.sub_domains,
            trackContentReferenceEvent: t,
            analyticsMetadata: n
        })
    })),
    P = ({
        isFistLineDomain: i,
        isPrimaryDomain: a,
        title: s,
        subtitle: t,
        url: n,
        subDomains: r,
        trackContentReferenceEvent: l,
        analyticsMetadata: x
    }) => {
        const {
            value: o
        } = f("3472722167");
        u.useState(!1);
        const c = {
            url: n,
            title: s,
            link_type: "card",
            section: "fast_nav",
            section_location: "response",
            section_index: x.section_index
        };
        return r.length > 0, e.jsxs("div", {
            className: "group/navigation flex flex-col text-token-link",
            children: [e.jsxs(j, {
                href: n,
                onClick: () => l(d.linkAction, "link_action", "navigation", { ...c,
                    action: "click"
                }),
                onMouseEnter: () => {
                    l(d.linkAction, "link_action", "navigation", { ...c,
                        action: "hover"
                    })
                },
                className: "flex flex-row items-center gap-2",
                children: [e.jsx(T, {
                    url: n
                }), e.jsxs("div", {
                    className: "flex min-w-0 flex-col gap-0.5",
                    children: [e.jsxs("div", {
                        className: m("flex items-center gap-1 font-semibold", i ? "text-sm" : "text-xs"),
                        children: [e.jsx("span", {
                            className: "flex-1 truncate text-token-text-primary group-hover/navigation:underline",
                            children: s
                        }), !1]
                    }), e.jsx("div", {
                        className: "truncate text-xs text-token-text-secondary",
                        children: t
                    })]
                })]
            }), !1]
        })
    },
    T = ({
        url: i
    }) => {
        const a = w(i, 32);
        return e.jsxs("div", {
            className: "relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px]",
            children: [e.jsx("div", {
                className: "h-10 w-10 bg-cover bg-center bg-no-repeat opacity-20 blur-lg",
                style: {
                    backgroundImage: `url(${a})`,
                    backgroundSize: "5rem 5rem"
                }
            }), e.jsx("div", {
                className: "absolute flex h-10 w-10 items-center justify-center",
                children: e.jsx(g, {
                    url: i,
                    size: 32,
                    minSize: 20,
                    className: "icon-sm rounded-full"
                })
            })]
        })
    };
export {
    W as N
};
//# sourceMappingURL=ld626s1jynzsi9nc.js.map