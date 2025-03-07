import {
    j as t,
    ax as X,
    av as J,
    c as E,
    r,
    M as q,
    g as W,
    d as Z,
    f as z,
    v as ee,
    R as te
} from "./mna1wiucqak6lqzp.js";
import {
    bk as F,
    d as w,
    cx as se,
    ch as ne,
    P as ae,
    eF as oe,
    es as H,
    R as re,
    a6 as T,
    bi as ce,
    ak as ie,
    c1 as le
} from "./bq4rrqi54riy5k2e.js";
import {
    u as ue,
    F as B
} from "./m01asv1bmfnb610p.js";
import {
    u as b,
    F as v,
    a as j,
    b as de
} from "./yd60g7kbq2sqnnyu.js";
import {
    d9 as K,
    fU as fe,
    y as U,
    U as me,
    cm as xe,
    ad as Y,
    e as he,
    bE as ge
} from "./lwme42j7zzyr3q7j.js";
import {
    S as ye
} from "./itn5nsb38f5hxryr.js";
import {
    u as ve
} from "./htcgfe1v0opekz8u.js";
import "./h88qamfv10wkp88v.js";
import "./fl41y0is7h6g0gxe.js";
import "./cxz91putlw7pmfk2.js";

function pe({
    children: e,
    rootClassName: s,
    className: n,
    description: a,
    icon: i,
    isOpen: o = !1,
    onClose: c,
    primaryButton: m,
    secondaryButton: d,
    size: x = "normal",
    title: h,
    type: g,
    noPadding: f = !1,
    hideSeparator: p = !1,
    showCloseButton: l = !1,
    shouldIgnoreClickOutside: y = !1,
    closeButton: _,
    isScrollable: S = !0,
    position: D = "center",
    removePopoverStyling: A = !1,
    showOverlayBackground: L = !0,
    shadow: M = "normal"
}) {
    const P = !!h,
        R = !!e,
        u = P && R && !p;
    return t.jsx(X, {
        children: o && t.jsx(F.Root, {
            isOpen: !0,
            onClose: c,
            shouldIgnoreClickOutside: y,
            className: s,
            children: t.jsx(F.Overlay, {
                showBackground: L,
                children: t.jsxs(ke, {
                    size: x,
                    position: D,
                    className: w("flex flex-col focus:outline-none", {
                        "max-w-md": x === "normal"
                    }, n),
                    removePopoverStyling: A,
                    shadow: M,
                    children: [t.jsx(F.Header, {
                        icon: i,
                        title: h,
                        type: g,
                        closeButton: l && (_ ? ? t.jsx(se, {
                            onClick: () => c(!0)
                        })),
                        description: a,
                        withSeparator: u
                    }), t.jsxs("div", {
                        className: w("flex-grow", S ? "overflow-y-auto" : "overflow-y-hidden", {
                            "p-4 sm:p-6": x !== "fullscreen" && !f,
                            "md:!pt-0": !R
                        }),
                        children: [e, m != null || d != null ? t.jsx(F.Actions, {
                            primaryButton: m,
                            secondaryButton: d,
                            modalHasContent: R
                        }) : null]
                    })]
                })
            })
        })
    })
}

function ke({
    className: e,
    children: s,
    position: n = "center",
    size: a,
    removePopoverStyling: i = !1,
    shadow: o = "normal"
}) {
    return t.jsx(J.div, {
        initial: {
            opacity: 0,
            y: 6
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: 14
        },
        transition: {
            duration: .175,
            ease: "easeInOut",
            exit: {
                opacity: {
                    duration: .1,
                    ease: "easeOut"
                },
                y: {
                    duration: .175,
                    ease: "easeOut"
                }
            }
        },
        className: w("z-50 h-full w-full overflow-y-auto", a !== "fullscreen" && "grid grid-cols-[10px_1fr_10px]", a !== "fullscreen" && n === "center" && "grid-rows-[minmax(10px,_1fr)_auto_minmax(10px,_1fr)] md:grid-rows-[minmax(20px,_1fr)_auto_minmax(20px,_1fr)]", a !== "fullscreen" && n === "bottom" && "grid-rows-[minmax(10px,_1fr)_auto_10px] md:grid-rows-[minmax(20px,_1fr)_auto_20px]"),
        children: t.jsx(ne, {
            className: w(!i && "popover", "relative start-1/2 col-auto col-start-2 row-auto row-start-2 h-full w-full bg-token-main-surface-primary text-start ltr:-translate-x-1/2 rtl:translate-x-1/2", a !== "fullscreen" && "rounded-2xl", o === "normal" && "shadow-xl", e),
            children: s
        })
    })
}

function we() {
    const e = E(),
        s = b(a => a.query),
        n = r.useRef(null);
    return t.jsx("input", {
        className: "w-full border-none bg-transparent placeholder:text-token-text-tertiary focus:border-transparent focus:outline-none focus:ring-0",
        placeholder: e.formatMessage({
            id: "FannyPack.SearchPlaceholder",
            defaultMessage: "Search chats..."
        }),
        onChange: a => v.setQuery(a.target.value),
        onKeyDown: a => {
            !a.shiftKey && (a.key === "ArrowUp" || a.key === "ArrowDown") && a.preventDefault()
        },
        value: s,
        ref: n
    })
}

function C({
    className: e,
    isActive: s = !1,
    icon: n,
    children: a,
    onClick: i,
    onMouseEnter: o,
    onMouseLeave: c
}) {
    const m = b(d => d.mouseInteractionsDisabled);
    return t.jsx("div", {
        className: w("cursor-pointer", e),
        onMouseEnter: m ? void 0 : o,
        onMouseLeave: m ? void 0 : c,
        onClick: i,
        children: t.jsxs("div", {
            className: w("group relative flex items-center rounded-lg px-4 py-3", s && "bg-[#f4f4f4] dark:bg-token-main-surface-secondary"),
            children: [n, t.jsx("div", {
                className: w("relative grow overflow-hidden whitespace-nowrap", n ? "pl-4" : ""),
                children: a
            })]
        })
    })
}

function $(e) {
    return e.formatMessage({
        id: "fannyPack.DefaultChatTitle",
        defaultMessage: "New chat"
    })
}

function je({
    historyResult: e,
    index: s
}) {
    const n = E(),
        {
            item: a,
            onSelect: i
        } = e,
        o = b(c => c.activeIndex);
    return t.jsx(C, {
        isActive: o === s,
        icon: t.jsx(K, {
            className: "icon-sidebar text-token-text-secondary"
        }),
        onClick: () => {
            j.logClick(a.id, s, "history"), i && i()
        },
        onMouseEnter: () => v.setActiveIndex(s),
        onMouseLeave: () => v.setActiveIndex(void 0),
        children: t.jsx("div", {
            className: "text-sm",
            children: a.title ? ? $(n)
        })
    })
}

function be({
    labelResult: e
}) {
    return t.jsx("div", {
        className: "group relative my-2 px-4 py-2 text-xs font-medium leading-4 text-token-text-secondary",
        children: e.text
    })
}

function Ne({
    newChatResult: e,
    query: s = void 0,
    index: n
}) {
    const {
        onSelect: a
    } = e, i = b(o => o.activeIndex);
    return t.jsx(C, {
        isActive: i === n,
        onClick: () => {
            ae.logNewChatButtonClicked({
                location: "Fanny Pack"
            }), a && a()
        },
        onMouseEnter: () => v.setActiveIndex(n),
        onMouseLeave: () => v.setActiveIndex(void 0),
        icon: t.jsx(fe, {
            className: "icon-sidebar text-token-text-secondary"
        }),
        children: t.jsx("div", {
            className: "text-sm",
            children: s ? t.jsx(q, {
                id: "iQsutJ",
                defaultMessage: 'New chat "{query}"',
                values: {
                    query: s
                }
            }) : t.jsx(q, {
                id: "FannyPack.NewChat",
                defaultMessage: "New chat"
            })
        })
    })
}

function Ce(e) {
    return r.useMemo(() => {
        if (!e) return null;
        const s = new Date(e * 1e3),
            n = new Date;
        return s.toDateString() === n.toDateString() ? "Today" : new Date(new Date().setDate(n.getDate() - 1)).toDateString() === s.toDateString() ? "Yesterday" : s.getFullYear() === n.getFullYear() ? s.toLocaleDateString(void 0, {
            month: "short",
            day: "numeric"
        }) : s.toLocaleDateString(void 0, {
            year: "2-digit",
            month: "numeric",
            day: "numeric"
        })
    }, [e])
}
var Se = oe,
    V = /[\\^$.*+?()[\]{}|]/g,
    Me = RegExp(V.source);

function Pe(e) {
    return e = Se(e), e && Me.test(e) ? e.replace(V, "\\$&") : e
}
var Re = Pe;
const Fe = W(Re),
    Ee = 8;

function Ie(e) {
    return e.isArchived ? {
        titleClassName: "text-sm text-token-text-tertiary",
        titleHighlightedClassName: "text-token-text-secondary font-semibold",
        messageClassName: "text-xs text-token-text-tertiary",
        messageHighlightedClassName: "text-token-text-secondary font-medium"
    } : {
        titleClassName: "text-sm text-token-text-primary",
        titleHighlightedClassName: "text-token-text-primary font-semibold",
        messageClassName: "text-xs text-token-text-secondary",
        messageHighlightedClassName: "text-token-text-primary font-medium"
    }
}

function Q({
    text: e,
    textToHighlight: s,
    shouldAdjustStart: n = !1,
    highlightClassName: a
}) {
    const i = r.useMemo(() => {
            if (!n || !s) return e;
            const c = e.toLowerCase().indexOf(s ? .toLowerCase());
            if (c === -1) return e;
            const m = Math.max(c - Ee, 0),
                d = e.substring(m);
            return m === 0 ? d : "…" + d
        }, [e, s, n]),
        o = r.useMemo(() => {
            const c = new RegExp(`(${Fe(s)})`, "gi");
            return i.split(c)
        }, [i, s]);
    return !s || s.length === 0 ? t.jsx("span", {
        children: e
    }) : t.jsx("div", {
        className: "truncate",
        children: o.map((c, m) => c.toLowerCase() === s.toLowerCase() ? t.jsx("span", {
            className: a,
            children: c
        }, m) : c)
    })
}

function _e({
    searchResult: e,
    index: s,
    elementRef: n
}) {
    const {
        item: a,
        onSelect: i,
        query: o
    } = e, c = E(), m = Ce(a.updateTime), d = Ie(a), h = b(f => f.activeIndex) === s, g = r.useRef(null);
    return r.useEffect(() => {
        let f;
        const p = setTimeout(() => {
            f = new IntersectionObserver(l => {
                l.forEach(y => {
                    y.isIntersecting && (j.logImpression(a.source, s, a.conversationId), f && f.disconnect())
                })
            }, {
                threshold: .5
            }), g.current && f.observe(g.current)
        }, 250);
        return () => {
            f && f.disconnect(), clearTimeout(p)
        }
    }, [g, a, o, s]), t.jsx("div", {
        ref: g,
        children: t.jsx(C, {
            isActive: h,
            icon: a.isArchived ? t.jsx(ye, {
                className: "icon-sidebar text-token-text-tertiary"
            }) : t.jsx(K, {
                className: "icon-sidebar text-token-text-secondary"
            }),
            onClick: () => {
                j.logClick(a.conversationId, s, a.source), i && i()
            },
            onMouseEnter: () => v.setActiveIndex(s),
            onMouseLeave: () => v.setActiveIndex(void 0),
            children: t.jsxs("div", {
                className: "flex items-center",
                ref: n,
                children: [t.jsxs("div", {
                    className: "relative grow overflow-hidden whitespace-nowrap",
                    children: [t.jsx("div", {
                        className: d.titleClassName,
                        children: t.jsx(Q, {
                            text: a.title && a.title.length > 0 ? a.title : $(c),
                            textToHighlight: o.length >= 3 ? o : void 0,
                            highlightClassName: d.titleHighlightedClassName
                        })
                    }), t.jsx("div", {
                        className: w("pt-1", d.messageClassName),
                        children: t.jsx(Q, {
                            text: a.snippet ? ? "",
                            textToHighlight: o.length >= 3 ? o : void 0,
                            shouldAdjustStart: !0,
                            highlightClassName: d.messageHighlightedClassName
                        })
                    })]
                }), h && t.jsx("div", {
                    className: "pl-6 text-xs text-token-text-secondary",
                    children: m
                })]
            })
        })
    })
}

function I() {
    return r.useMemo(() => ({
        closeFannyPackModal: e => {
            j.logClose(e), v.setIsActive(!1)
        }
    }), [])
}

function O() {
    const e = Z(),
        s = U(),
        {
            closeFannyPackModal: n
        } = I();
    return r.useCallback(a => {
        s && me.closeActiveSidebar(), e(a), n("click")
    }, [e, n, s])
}

function De() {
    const {
        conversations: e
    } = xe(r.useMemo(() => ({}), [])), s = H("550560761").config.value, n = Number(s ? .history_results_limit ? ? 6), a = r.useMemo(() => e.slice(0, Math.min(e.length, n)), [e, n]), i = ve(a, 0), o = O(), c = r.useMemo(() => ({
        kind: "newChat",
        onSelect: () => {
            o("/")
        }
    }), [o]);
    return r.useMemo(() => {
        const d = [c];
        return d.push(...[i.recent, i.dynamicMonths, i.dynamicYears].reduce((x, h) => (Object.entries(h).forEach(([g, {
            items: f,
            label: p
        }]) => {
            f.length > 0 && (x.push({
                kind: "label",
                text: p
            }), f.forEach(l => {
                x.push({
                    kind: "history",
                    onSelect: () => {
                        o(Y(l.id))
                    },
                    item: l
                })
            }))
        }), x), [])), d
    }, [c, i, o])
}
async function Ae({
    query: e,
    cursor: s
}) {
    return re.safeGet("/conversations/search", {
        parameters: {
            query: {
                query: e,
                cursor: s
            }
        }
    })
}

function Le() {
    const e = b(u => u.query),
        s = O(),
        [n, a] = r.useState(""),
        [i, o] = r.useState(!1),
        c = r.useRef(he(u => {
            o(!1), a(u)
        }, 250)).current,
        m = r.useCallback(u => {
            u !== n && (o(!0), c(u))
        }, [n, c]);
    r.useEffect(() => {
        m(e)
    }, [e, m]);
    const {
        data: d,
        isError: x,
        isLoading: h,
        isFetchingNextPage: g,
        hasNextPage: f,
        fetchNextPage: p
    } = z({
        queryKey: ["conversationSearch", {
            query: n
        }],
        queryFn: ({
            pageParam: u
        }) => Ae({
            query: n,
            cursor: u
        }),
        initialPageParam: "",
        getNextPageParam: u => u.cursor ? ? void 0,
        enabled: !!n
    });
    r.useEffect(() => {
        h && j.logQuery()
    }, [h]), r.useEffect(() => {
        x && j.logQueryError()
    }, [x]), r.useEffect(() => {
        g && j.logQueryMore()
    }, [g]);
    const l = r.useMemo(() => d ? .pages.flatMap(u => u.items) ? ? [], [d]),
        y = r.useRef(null),
        _ = r.useCallback(u => {
            h || u == null || (y.current ? .disconnect(), y.current = new IntersectionObserver(k => {
                k[0].isIntersecting && !g && f && p()
            }), y.current.observe(u))
        }, [h, g, f, p]);
    r.useEffect(() => () => {
        y.current ? .disconnect()
    }, []);
    const S = l && n === e,
        D = e.length > 0 && (i || h || g),
        A = H("550560761").config.value,
        L = Number(A ? .local_results_limit ? ? 0),
        M = ue(e, L),
        P = r.useMemo(() => {
            const u = M;
            return S && l.forEach(k => {
                u.has(k.conversation_id) || u.set(k.conversation_id, {
                    conversationId: k.conversation_id,
                    nodeId: k.current_node_id,
                    title: k.title,
                    isArchived: k.is_archived,
                    updateTime: k.update_time,
                    snippet: k.payload.snippet,
                    source: "remote"
                })
            }), Array.from(u.values())
        }, [M, l, S]);
    return {
        searchResults: r.useMemo(() => P.map(u => ({
            kind: "search",
            onSelect: () => {
                s(Y(u.conversationId))
            },
            item: u,
            query: e
        })), [P, s, e]),
        shouldShowLoading: D,
        infiniteScrollTriggerElementRef: _
    }
}

function qe(e, s, n) {
    switch (e.kind) {
        case "history":
            return t.jsx(je, {
                historyResult: e,
                index: s
            });
        case "label":
            return t.jsx(be, {
                labelResult: e
            });
        case "loading":
            return t.jsx(Qe, {
                loadingResults: e
            });
        case "newChat":
            return t.jsx(Ne, {
                newChatResult: e,
                query: e.query,
                index: s
            });
        case "noResults":
            return t.jsx(Be, {});
        case "search":
            return t.jsx(_e, {
                searchResult: e,
                index: s,
                elementRef: n
            })
    }
}

function Te(e, s) {
    const n = r.useCallback(() => {
            for (let o = (e ? ? -1) + 1; o < s.length; o++)
                if (s[o].onSelect) return o;
            return e
        }, [e, s]),
        a = r.useCallback(() => {
            for (let o = (e ? ? s.length) - 1; o >= 0; o--)
                if (s[o].onSelect) return o;
            return e
        }, [e, s]),
        i = r.useCallback(() => {
            e !== void 0 && s[e] && s[e].onSelect && s[e].onSelect()
        }, [e, s]);
    r.useEffect(() => {
        const o = c => {
            c.isComposing || (c.key === "ArrowUp" && !c.shiftKey ? v.setActiveIndex(a()) : c.key === "ArrowDown" && !c.shiftKey ? v.setActiveIndex(n()) : (c.key === "Enter" || c.key === "Return") && (c.preventDefault(), i()))
        };
        return window.addEventListener("keydown", o), () => {
            window.removeEventListener("keydown", o)
        }
    }, [a, n, i]), r.useEffect(() => {
        const o = () => {
            de.getMouseInteractionsDisabled() && v.setMouseInteractionsDisabled(!1)
        };
        return window.addEventListener("mousemove", o), () => {
            window.removeEventListener("mousemove", o)
        }
    }, [])
}

function Oe(e, s) {
    const n = r.useRef([]);
    return r.useEffect(() => {
        n.current = s.map(() => te.createRef())
    }, [s]), r.useEffect(() => {
        n.current.forEach((a, i) => {
            e === i && a ? .current && a.current.scrollIntoView({
                behavior: "instant",
                block: "nearest"
            })
        })
    }, [e, n]), n
}

function Be() {
    return t.jsx(C, {
        className: "text-sm text-token-text-tertiary",
        icon: t.jsx(ge, {
            className: "icon-sidebar"
        }),
        children: t.jsx(q, {
            id: "FannyPack.Noresults",
            defaultMessage: "No results"
        })
    })
}

function N() {
    return t.jsx(C, {
        icon: t.jsx("div", {
            className: "loading-results-shimmer h-[14px] w-[14px] rounded-full bg-token-main-surface-secondary"
        }),
        children: t.jsxs("div", {
            className: "flex min-h-[40px] flex-col justify-center",
            children: [t.jsx("div", {
                className: "loading-results-shimmer h-2 w-1/4 rounded-full bg-token-main-surface-secondary"
            }), t.jsx("div", {
                className: "loading-results-shimmer mt-3 h-2 w-1/2 rounded-full bg-token-main-surface-secondary"
            })]
        })
    })
}

function Qe({
    loadingResults: e
}) {
    return e.shouldShowMultiple ? t.jsxs(t.Fragment, {
        children: [t.jsx(N, {}), t.jsx(N, {}), t.jsx(N, {}), t.jsx(N, {}), t.jsx(N, {})]
    }) : t.jsx(N, {})
}

function He() {
    const e = O(),
        {
            searchResults: s,
            shouldShowLoading: n,
            infiniteScrollTriggerElementRef: a
        } = Le(),
        i = De(),
        o = b(l => l.query),
        c = o.length > 0,
        {
            value: m
        } = T("1741586789");
    r.useEffect(() => {
        j.setQuerySessionId(ee())
    }, [o]);
    const d = r.useMemo(() => ({
            kind: "newChat",
            query: o,
            onSelect: () => {
                e(`/?q=${o}`)
            }
        }), [o, e]),
        x = r.useMemo(() => {
            const l = [];
            return o && m && l.push(d), c ? l.push(...s) : l.push(...i), n ? l.push({
                kind: "loading",
                shouldShowMultiple: l.length === 0
            }) : l.length === 0 && l.push({
                kind: "noResults"
            }), l
        }, [o, m, d, c, n, s, i]),
        h = b(l => l.activeIndex);
    Te(h, x);
    const g = Oe(h, x),
        f = r.useRef(null);
    r.useEffect(() => {
        v.setActiveIndex(0), f.current && (f.current.scrollTop = 0)
    }, [o]);
    const p = r.useRef(!0);
    return r.useEffect(() => {
        p.current && !n && x.length === 1 && x[0].kind === "noResults" && j.logNoResults(), p.current = n
    }, [n, x]), t.jsx("div", {
        ref: f,
        children: t.jsx("ol", {
            className: "mx-2",
            children: x.map((l, y) => t.jsx("li", {
                ref: g.current[y],
                children: qe(l, y, y === x.length - 1 ? a : void 0)
            }, y))
        })
    })
}

function st() {
    const e = b(n => n.isActive);
    return U() ? t.jsx(Ue, {
        isOpen: e
    }) : t.jsx(Ye, {
        isOpen: e
    })
}

function Ke({
    onClick: e,
    className: s
}) {
    const n = E();
    return t.jsx("button", {
        className: w("flex items-center justify-center rounded-full bg-transparent p-1 hover:bg-token-main-surface-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-token-text-quaternary focus-visible:ring-offset-1 focus-visible:ring-offset-transparent dark:hover:bg-token-main-surface-tertiary", s),
        "aria-label": n.formatMessage({
            id: "Px7S/2",
            defaultMessage: "Close"
        }),
        onClick: e,
        children: t.jsx(le, {
            className: "icon-sidebar text-token-text-tertiary hover:text-token-text-primary"
        })
    })
}

function G({
    className: e
}) {
    const {
        closeFannyPackModal: s
    } = I(), n = ie(), a = r.useRef(!1), {
        value: i
    } = T("3678527908"), {
        value: o
    } = T("1422501431");
    return r.useEffect(() => {
        !a.current && i && n && (o ? B.setCurrentAccountV2(n) : B.setCurrentAccount(n), a.current = !0)
    }, [i, n, o]), t.jsxs("div", {
        className: w("flex flex-col", e),
        children: [t.jsxs("div", {
            className: "ml-6 mr-4 flex max-h-[64px] min-h-[64px] items-center justify-between",
            children: [t.jsx(we, {}), t.jsx(Ke, {
                className: "ml-4",
                onClick: () => {
                    s("button")
                }
            })]
        }), t.jsx("hr", {
            className: "border-token-border-light"
        }), t.jsx("div", {
            className: "my-2 flex-grow overflow-y-auto",
            children: t.jsx(He, {})
        })]
    })
}

function Ue({
    isOpen: e
}) {
    const {
        closeFannyPackModal: s
    } = I();
    return t.jsx(ce, {
        isOpen: e,
        onClose: () => {
            s("modal")
        },
        size: "fullscreen",
        showCloseButton: !0,
        type: "success",
        noPadding: !0,
        children: t.jsx(G, {})
    })
}

function Ye({
    isOpen: e
}) {
    const {
        closeFannyPackModal: s
    } = I();
    return t.jsx(pe, {
        className: "border border-token-border-light shadow-[0_14px_62px_0_rgba(0,0,0,0.25)] md:min-w-[680px] md:max-w-[680px]",
        isOpen: e,
        onClose: () => {
            s("modal")
        },
        showCloseButton: !0,
        type: "success",
        noPadding: !0,
        showOverlayBackground: !1,
        shadow: "custom",
        children: t.jsx(G, {
            className: "max-h-[440px] min-h-[440px]"
        })
    })
}
export {
    st as FannyPackModalContainer
};
//# sourceMappingURL=ob8dn8mbjes1k351.js.map