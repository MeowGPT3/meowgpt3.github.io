const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/lzja4zezd19ee0dw.js", "assets/mna1wiucqak6lqzp.js", "assets/bq4rrqi54riy5k2e.js", "assets/root-ey6kd8gf.css", "assets/mljlvs3cxnloj5hz.js", "assets/fw8md2p1g1hr3nkr.js", "assets/lwme42j7zzyr3q7j.js", "assets/conversation-small-fu0y35oi.css", "assets/nyviq03ca6m2usa2.js", "assets/jw6sc4xdk4t84xqm.js", "assets/htcgfe1v0opekz8u.js", "assets/h88qamfv10wkp88v.js", "assets/fl41y0is7h6g0gxe.js", "assets/cxz91putlw7pmfk2.js", "assets/nmr5d79kmws977p2.js", "assets/niyc1j17i1iogjjg.js", "assets/m0wlwtibo8yb2c2h.js", "assets/hx3p6g5v1c632c0c.js", "assets/ervbcbd76q4uns1s.js", "assets/m01asv1bmfnb610p.js", "assets/yd60g7kbq2sqnnyu.js"]))) => i.map(i => d[i]);
import {
    bs as fe,
    g2 as ge,
    aM as pe,
    ak as G,
    d as J,
    bv as he,
    cp as $,
    b_ as Se,
    r as ee,
    aa as ve,
    ci as L,
    aG as je,
    dm as be,
    dZ as Ie,
    bz as U,
    bA as W,
    E as se,
    gs as K,
    k as te,
    d5 as ye,
    e6 as Ne,
    U as ke
} from "./bq4rrqi54riy5k2e.js";
import {
    R as Ce,
    a as ae,
    r as u,
    j as e,
    M as T,
    d as Ee,
    c as D,
    av as R,
    L as ne,
    ax as ze
} from "./mna1wiucqak6lqzp.js";
import {
    iY as ie,
    h1 as oe,
    cm as Me,
    jK as _e,
    jL as Le,
    f_ as g,
    hw as Te,
    al as Ge,
    jM as De,
    jN as Ae,
    jO as we,
    jP as H,
    jQ as re,
    jR as Oe,
    jS as le,
    z as ce,
    fu as Fe,
    U as V,
    gR as He,
    fi as Re,
    jT as O,
    r as de,
    bz as B,
    dQ as Pe,
    jU as P,
    a1 as Be,
    j0 as Ue,
    $ as We,
    iV as Ve,
    cI as Qe,
    d2 as $e,
    jV as _,
    db as Ke,
    jW as Xe,
    jX as Ye,
    ji as qe,
    fU as Ze,
    jY as Je,
    ai as es,
    ap as ss,
    ao as ts,
    jZ as as,
    j_ as F,
    bb as ue,
    a7 as ns,
    j$ as is,
    V as os,
    k0 as rs,
    k1 as ls,
    f$ as cs,
    k2 as ds,
    k3 as us,
    gU as X,
    k4 as ms,
    k5 as xs,
    k6 as fs
} from "./lwme42j7zzyr3q7j.js";
import {
    u as gs,
    H as ps,
    a as hs
} from "./htcgfe1v0opekz8u.js";
import {
    G as me
} from "./nmr5d79kmws977p2.js";
import {
    u as Ss,
    N as vs
} from "./niyc1j17i1iogjjg.js";
const Y = ee({
    unableToLoadHistory: {
        id: "history.unableToLoad",
        defaultMessage: "Unable to load history"
    },
    retryButton: {
        id: "history.retryButton",
        defaultMessage: "Retry"
    }
});

function js({
    activeId: s,
    hideOverflowMenu: t
}) {
    const a = ae(),
        [i, l] = u.useState(!1),
        [r, c] = u.useState(0),
        d = ge(),
        [m, n] = u.useState(!1),
        o = ie(),
        p = oe(),
        {
            conversations: f,
            hasNextPage: v,
            fetchNextPage: h,
            isLoading: S,
            isFetchingNextPage: k,
            isError: C
        } = Me({}),
        E = u.useRef(null),
        b = u.useCallback(x => {
            S || x == null || (E.current ? .disconnect(), E.current = new IntersectionObserver(w => {
                w[0].isIntersecting && v && h()
            }), E.current.observe(x))
        }, [S, v, h]);
    u.useEffect(() => () => {
        E.current ? .disconnect()
    }, []), u.useMemo(() => {
        pe.publish({
            kind: "refreshHistory",
            conversations: f
        })
    }, [f]);
    const M = f;
    u.useEffect(() => {
        const x = _e(Le(), Date.now());
        d(() => {
            c(r + 1)
        }, x + 1e3)
    }, [r, d]);
    const I = M.length === 0;
    g.markStart("History", g.NS_SIDEBAR), G() ? .data != null && !S && g.markRendered("History", g.NS_SIDEBAR);
    const A = gs(M, r),
        z = o != null && o.kind === "conversation" && o.gizmoId != null && Te(o.gizmoId),
        y = u.useRef(0);
    return e.jsxs(Is, {
        $centered: S || C || I,
        onDragOver: x => {
            x.preventDefault(), z && n(!0)
        },
        onDrop: x => {
            x.preventDefault(), z && (y.current = 0, n(!1), p({
                newGizmoId: null,
                conversation: o.conversation,
                previousGizmoId: o.gizmoId ? ? null
            }))
        },
        onDragEnter: x => {
            x.preventDefault(), z && (y.current += 1)
        },
        onDragLeave: x => {
            x.preventDefault(), z && (y.current -= 1, y.current === 0 && n(!1))
        },
        className: J(m && "opacity-50"),
        children: [I && S && e.jsx(he, {
            children: e.jsx($, {
                className: "m-auto"
            })
        }), I && C && e.jsxs("div", {
            className: "p-3 text-center italic text-token-text-tertiary",
            children: [e.jsx(T, { ...Y.unableToLoadHistory
            }), !i && e.jsx("div", {
                className: "mt-1",
                children: e.jsx(Se, {
                    as: "button",
                    color: "primary",
                    size: "small",
                    className: "m-auto mt-2",
                    onClick: () => {
                        l(!0), Ge(a)
                    },
                    children: e.jsx(T, { ...Y.retryButton
                    })
                })
            })]
        }), !S && !I && e.jsx("div", {
            children: e.jsx(ps, {
                activeId: s,
                bucketedItems: A,
                hasNextPage: v,
                items: M,
                infiniteScrollTriggerElementRef: b,
                hideOverflowMenu: t
            })
        }), k && e.jsx("div", {
            className: "m-4 mb-5 flex justify-center",
            children: e.jsx($, {})
        })]
    })
}
const bs = Ce.memo(js),
    Is = fe.div `flex flex-col gap-2 text-token-text-primary text-sm mt-5 first:mt-0
${({$centered:s})=>[s&&"h-full justify-center items-center empty:hidden"]}`;

function q({
    isNewConversation: s
}) {
    const t = De(),
        {
            value: a,
            isLoading: i
        } = ve("2113934735");
    return g.markStart("OperatorSidebarListItem", g.NS_SIDEBAR), !i && !a ? g.cancelRender("OperatorSidebarListItem", g.NS_SIDEBAR) : a && g.markRendered("OperatorSidebarListItem", g.NS_SIDEBAR), e.jsxs(e.Fragment, {
        children: [e.jsx(ys, {
            isNewConversation: s
        }), a ? e.jsx(Ae, {}) : null, t ? e.jsx(we, {}) : null]
    })
}
const ys = ({
    isNewConversation: s
}) => {
    const [t, a] = u.useState(!1), i = ae(), l = Ee(), r = D(), c = G();
    let d;
    return c == null ? null : (d = le, e.jsx("div", {
        className: "bg-token-sidebar-surface-primary pt-0",
        children: e.jsx(L, {
            side: "right",
            label: r.formatMessage(H.newChat),
            className: "flex w-full items-center",
            children: e.jsx(R.div, {
                className: "flex-1",
                whileTap: {
                    scale: .98
                },
                onMouseEnter: () => {
                    a(!0)
                },
                onMouseLeave: () => {
                    a(!1)
                },
                children: e.jsx(re, {
                    loggingGizmoId: "primary",
                    href: "/",
                    isHovered: t,
                    onClick: m => {
                        !je(be(i)) && !s && (m.preventDefault(), Oe(l))
                    },
                    icon: e.jsx(me, {
                        isFirstParty: !0,
                        className: "h-6 w-6"
                    }),
                    isMenuOpen: !1,
                    label: d,
                    hoverRightIcon: null
                })
            })
        })
    }))
};

function Ns() {
    const s = D(),
        t = ce(),
        a = s.formatMessage({
            id: "gizmo.exploreStoreEnabled",
            defaultMessage: "Explore GPTs"
        });
    return e.jsx(R.div, {
        whileTap: {
            scale: .98
        },
        children: e.jsx(ne, {
            to: Fe(),
            onClick: () => {
                t.activeSidebar === "popover-nav" && V.setActiveSidebar(!1)
            },
            children: e.jsx(He, {
                icon: Re,
                "data-testid": "explore-gpts-button",
                children: a
            })
        }, "explore")
    })
}

function ks({
    gizmoResource: s,
    serverThreadId: t,
    isOnProjectPage: a,
    conversations: i,
    hasNextPage: l = !1
}) {
    const r = i ? ? [],
        c = r.findIndex(o => o.id === t),
        d = r.slice(0, O);
    c != null && c >= O && (d[O - 1] = r[c]);
    const m = l || r.length > O,
        n = Ie().activeServerThreadIds;
    return e.jsxs("div", {
        className: "flex flex-col screen-arch:gap-0.5",
        children: [d.map(o => e.jsx(hs, {
            className: "ml-7 pl-1",
            item: o,
            isActiveInMainWindow: o.id === t,
            isActive: n.has(o.id)
        }, o.id)), m && !a && e.jsx(ne, {
            to: de(s),
            className: "group ml-7 flex h-9 items-center gap-2.5 rounded-lg pl-3 pr-2 text-sm tracking-condensed text-token-text-primary hover:bg-token-sidebar-surface-secondary",
            children: e.jsx("span", {
                className: "text-left",
                children: e.jsx(T, { ...B.seeAllChats
                })
            })
        })]
    })
}
const Cs = U(() => W(() =>
        import ("./lzja4zezd19ee0dw.js"), __vite__mapDeps([0, 1, 2, 3, 4])).then(s => s.SnorlaxFolderAnimation), {
        loading: ({
            color: s
        }) => e.jsx(xe, {
            color: s
        })
    }),
    Es = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .15,
                ease: "easeOut"
            }
        },
        closed: {
            opacity: 0,
            y: -5,
            transition: {
                duration: .15,
                ease: "easeIn"
            }
        }
    };

function zs({
    color: s,
    folderState: t,
    gizmoId: a,
    sidebarSnorlaxFolderStore: i
}) {
    const l = D(),
        [r, c] = u.useState(!1);
    return e.jsx(L, {
        side: "top",
        sideOffset: 4,
        delayDuration: 600,
        label: t === "open" ? l.formatMessage(B.hideChatsForProjectTooltip) : l.formatMessage(B.showChatsForProjectTooltip),
        children: e.jsx("button", {
            onClick: d => {
                d.preventDefault(), t === "open" ? i.collapseProject(a) : i.expandProject(a)
            },
            className: "-m-0.5 flex rounded-xl p-0.5 text-token-text-secondary hover:bg-token-sidebar-surface-tertiary",
            onMouseEnter: () => {
                c(!0)
            },
            onMouseLeave: () => {
                c(!1)
            },
            children: e.jsx("div", {
                className: "h-6 w-6",
                children: e.jsx("div", {
                    className: "relative flex h-full items-center justify-center text-token-text-primary",
                    children: e.jsx(Cs, {
                        isOpen: t === "open",
                        isHovered: r,
                        color: s
                    })
                })
            })
        })
    })
}

function xe({
    color: s
}) {
    return e.jsx("div", {
        className: "flex h-6 w-6 shrink-0 items-center justify-center text-token-text-primary",
        children: e.jsx(Pe, {
            className: "h-3/4 w-3/4",
            style: {
                color: s
            }
        })
    })
}

function Ms({
    gizmo: s,
    historyDisabled: t,
    section: a,
    onClick: i,
    isActive: l,
    hideOverflowMenu: r = !1,
    elementRef: c
}) {
    const {
        clientThreadId: d
    } = Ss(), m = se(d), n = D(), [o, p] = u.useState(!1), [f, v] = u.useState(!1), h = s.gizmo.id, S = P.useStore(), k = P.useState(j => P.selectFolderState(j, h)), C = G(), E = !!s.gizmo.tags ? .includes(Be.FirstParty), b = ie(), M = oe(), {
        items: I = [],
        hasNextPage: Q
    } = Ue(s.gizmo.id), N = We(h), A = Ve(s), z = Qe();
    let y = !1;
    l && N && !(k === "open" && m) && (y = !0), u.useEffect(() => {
        k !== "open" && l && m && S.expandProject(h)
    }, [l, m, S, h]);
    let x;
    if (s != null) x = s.gizmo.display.name || $e;
    else {
        if (C == null) return null;
        t ? x = n.formatMessage(H.clearChat) : x = le
    }
    const w = b != null && b.kind === "conversation" && (b.gizmoId == null || b.gizmoId != h);
    return e.jsxs(e.Fragment, {
        children: [e.jsx(R.div, {
            onMouseEnter: z ? () => {
                v(!0)
            } : void 0,
            onMouseLeave: () => {
                v(!1)
            },
            onDrop: j => {
                j.preventDefault(), w && (M({
                    newGizmoId: h,
                    conversation: b.conversation,
                    previousGizmoId: b.gizmoId ? ? null
                }), v(!1))
            },
            onDragOver: j => {
                j.preventDefault(), w && v(!0)
            },
            onDragLeave: () => {
                v(!1)
            },
            children: e.jsx(re, {
                loggingGizmoId: s ? .gizmo.id ? ? "primary",
                href: de(s),
                onClick: i,
                showActiveIndicator: y,
                isHovered: f,
                icon: N && I.length > 0 ? e.jsx(zs, {
                    color: A,
                    folderState: k,
                    gizmoId: h,
                    sidebarSnorlaxFolderStore: S
                }) : N ? e.jsx(xe, {
                    color: A
                }) : e.jsx(me, {
                    isFirstParty: E,
                    src: s ? .gizmo.display.profile_picture_url,
                    className: "h-6 w-6 shrink-0"
                }),
                isMenuOpen: o,
                label: x,
                rightIcon: a === _.Workspace && e.jsx(L, {
                    side: "right",
                    label: n.formatMessage(Z.workspaceRecommended, {
                        workspace_name: C ? .name ? ? "Your Workspace"
                    }),
                    children: e.jsx(Ke, {
                        className: "icon-md text-token-text-secondary",
                        alt: n.formatMessage(Z.workspaceRecommended, {
                            workspace_name: C ? .name ? ? "Your Workspace"
                        })
                    })
                }),
                hoverRightIcon: e.jsxs("div", {
                    className: "flex gap-2",
                    children: [(f || o) && !r && (N ? e.jsx("div", {
                        className: "text-token-text-tertiary",
                        onClick: j => {
                            j.preventDefault()
                        },
                        children: e.jsx(Xe, {
                            gizmo: s,
                            isOpen: o,
                            setIsOpen: p
                        })
                    }) : e.jsx("div", {
                        className: "text-token-text-tertiary",
                        onClick: j => {
                            j.preventDefault()
                        },
                        children: e.jsx(Ye, {
                            gizmo: s,
                            isOpen: o,
                            setIsOpen: p,
                            section: a
                        })
                    })), !N && !r && e.jsx(L, {
                        side: "right",
                        label: n.formatMessage(t ? H.clearChat : H.newChat),
                        className: "flex items-center",
                        children: e.jsx("button", {
                            className: o ? "text-token-text-tertiary" : "invisible text-token-text-secondary hover:text-token-text-primary group-hover:visible",
                            children: t ? e.jsx(qe, {
                                className: "icon-md"
                            }) : e.jsx(Ze, {
                                className: "icon-md"
                            })
                        })
                    })]
                }),
                elementRef: c
            })
        }), e.jsx(ze, {
            initial: !1,
            children: N && k === "open" && I.length > 0 && e.jsx(R.div, {
                initial: "closed",
                animate: "open",
                exit: "closed",
                variants: Es,
                className: "overflow-hidden",
                children: e.jsx(ks, {
                    gizmoResource: s,
                    serverThreadId: m,
                    isOnProjectPage: y,
                    conversations: I,
                    hasNextPage: Q
                })
            }, "nested-conversations")
        })]
    })
}
const Z = ee({
        workspaceRecommended: {
            id: "gizmo.workspaceRecommended",
            defaultMessage: "Recommended at {workspace_name}"
        }
    }),
    _s = 2;

function Ls({
    gizmos: s,
    maxToShowOnLoad: t = 4,
    showAllSidebarItems: a
}) {
    const i = as(s, f => f.flair.kind),
        l = [...(i[F.Workspace] ? .map(({
            resource: f
        }) => ({
            gizmo: f,
            section: _.Workspace
        })) ? ? []).slice(0, 3), ...i[F.FirstParty] ? .map(({
            resource: f
        }) => ({
            gizmo: f,
            section: _.Keep
        })) ? ? [], ...i[F.SidebarKeep] ? .map(({
            resource: f
        }) => ({
            gizmo: f,
            section: _.Keep
        })) ? ? []],
        r = i[F.Recent] ? ? [],
        d = (a ? r : r.slice(0, _s)).map(({
            resource: f
        }) => ({
            gizmo: f,
            section: _.Recents
        })),
        m = l.length;
    let n = [];
    n = [...l, ...d], a || (n.length > t && m > t ? n = n.slice(0, m) : n.length > t && (n = n.slice(0, t)));
    const p = s.length > n.length;
    return {
        listItems: n,
        itemsLeft: s.length - n.length,
        needsToCollapseItems: p,
        total: s.length
    }
}

function Ts({
    gizmo: s,
    currentGizmoId: t,
    maxToShowOnLoad: a,
    hideOverflowMenu: i = !1
}) {
    const l = ce(n => !Je.isGptListCollapsed(n)),
        {
            listItems: r,
            needsToCollapseItems: c,
            itemsLeft: d
        } = Ls({
            gizmos: s,
            maxToShowOnLoad: a,
            showAllSidebarItems: l
        });

    function m(n, o) {
        return e.jsx(Ms, {
            gizmo: n,
            isActive: n.gizmo.id === t,
            section: o,
            hideOverflowMenu: i
        }, n.gizmo.id)
    }
    return e.jsxs("div", {
        children: [r.map(({
            gizmo: n,
            section: o
        }, p) => e.jsxs(u.Fragment, {
            children: [p > 1 && o !== r[p - 1].section && e.jsx("div", {
                className: "my-2 ml-2 h-px w-7 bg-token-border-light"
            }), m(n, o)]
        }, p)), c ? e.jsxs("button", {
            onClick: V.toggleGptListCollapsed,
            className: "flex h-10 w-full items-center gap-2 rounded-lg px-2 text-sm text-token-text-primary hover:bg-token-sidebar-surface-secondary",
            children: [e.jsx("div", {
                className: "flex h-6 w-6 flex-shrink-0 items-center justify-center",
                children: e.jsx(es, {
                    className: "icon-md text-token-text-primary"
                })
            }), e.jsx("div", {
                className: "flex grow items-center gap-1",
                children: l ? e.jsxs(e.Fragment, {
                    children: [e.jsx(T, {
                        id: "GizmoSidebarList.showLess",
                        defaultMessage: "See less"
                    }), e.jsx(ss, {
                        className: "icon-xs"
                    })]
                }) : e.jsxs(e.Fragment, {
                    children: [e.jsx(T, {
                        id: "GizmoSidebarList.showMoreItems",
                        defaultMessage: "{numMore} more",
                        values: {
                            numMore: d
                        }
                    }), e.jsx(ts, {
                        className: "icon-xs"
                    })]
                })
            })]
        }) : null, e.jsx(Ns, {})]
    })
}

function Gs({
    currentGizmoId: s
}) {
    const t = ue(),
        a = G(),
        {
            data: {
                gizmos: i
            } = {}
        } = ns();
    let l = i;
    t && (l = i ? .filter(d => !is(d.resource))), g.markStart("GizmoSidebarList", g.NS_SIDEBAR), l !== void 0 && g.markRendered("GizmoSidebarList", g.NS_SIDEBAR);
    const r = K("2152104812", "hide_gpts_if_none", !1),
        c = K("2152104812", "hide_default_gpts", !1);
    return a ? r && i ? .length === 0 ? !c && e.jsx(q, {
        isNewConversation: !0
    }) : e.jsxs(e.Fragment, {
        children: [!c && e.jsx(q, {
            isNewConversation: !0
        }), e.jsx(Ts, {
            gizmo: l ? ? [],
            currentGizmoId: s,
            maxToShowOnLoad: 7
        })]
    }) : null
}
const Ds = U(() => W(() =>
        import ("./fw8md2p1g1hr3nkr.js"), __vite__mapDeps([5, 1, 6, 2, 3, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])).then(s => s.SnorlaxSidebarList)),
    As = U(() => W(() =>
        import ("./ervbcbd76q4uns1s.js"), __vite__mapDeps([18, 1, 6, 2, 3, 7, 12, 13, 19, 20])).then(s => s.FannyPackAction));

function ws({
    clientThreadId: s
}) {
    const t = se(s);
    G();
    const {
        isUnauthenticated: a
    } = te(), i = Ne(s), l = ke(), r = ue(), [c, d] = u.useState(!1), m = u.useCallback(o => o === X.Snorlax ? c : !1, [c]), n = u.useCallback((o, p) => {
        o === X.Snorlax && d(p)
    }, []);
    return e.jsx(ms, {
        value: {
            isSidebarFlyoutOpen: m,
            onSidebarFlyoutOpenChange: n
        },
        children: e.jsxs("div", {
            className: "group/sidebar",
            children: [!a && e.jsx(Gs, {
                currentGizmoId: i
            }), null, r && e.jsx(Ds, {
                currentGizmoId: i
            }), null, !a && e.jsx(bs, {
                activeId: l ? void 0 : t
            })]
        })
    })
}

function Us({
    clientThreadId: s
}) {
    const {
        isUnauthenticated: t
    } = te();
    return t ? null : e.jsx(ws, {
        clientThreadId: s
    })
}

function Ws({
    className: s,
    onNewThread: t
}) {
    const a = D(),
        i = ye(() => navigator.windowControlsOverlay),
        {
            isFannyPackEnabled: l
        } = os(),
        r = rs(fs, xs, !0, !0),
        c = ls();
    return e.jsxs("div", {
        className: J("flex", i ? .visible && i.getTitlebarAreaRect().left > 0 ? "justify-end" : "justify-between", s),
        children: [e.jsx(L, {
            sideOffset: 4,
            label: a.formatMessage({
                id: "e7SzX9",
                defaultMessage: "Close sidebar"
            }),
            className: "flex",
            side: "right",
            children: e.jsx(cs, {
                className: "no-draggable",
                "aria-label": a.formatMessage({
                    id: "e7SzX9",
                    defaultMessage: "Close sidebar"
                }),
                onClick: () => V.toggleNavCollapsed(),
                icon: r,
                mobileIcon: ds,
                "data-testid": "close-sidebar-button"
            })
        }), e.jsxs("div", {
            className: "flex",
            children: [c && e.jsx(us, {}), l && e.jsx(As, {}), e.jsx(vs, {
                onClick: t,
                testId: "create-new-chat-button"
            })]
        })]
    })
}
export {
    Us as C, Gs as G, bs as H, Ws as S, Ms as a
};
//# sourceMappingURL=jk32tpxhwr7rebuc.js.map