const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/cw8u45029jb64qaj.js", "assets/bq4rrqi54riy5k2e.js", "assets/mna1wiucqak6lqzp.js", "assets/root-ey6kd8gf.css", "assets/lwme42j7zzyr3q7j.js", "assets/conversation-small-fu0y35oi.css", "assets/jw6sc4xdk4t84xqm.js", "assets/fl41y0is7h6g0gxe.js", "assets/cxz91putlw7pmfk2.js", "assets/cpk7efinoraevon9.js", "assets/itn5nsb38f5hxryr.js", "assets/dezjogalgkr4n852.js", "assets/ef49bv6zx1dh47uf.js", "assets/feoa0h9f66d56whq.js", "assets/nmr5d79kmws977p2.js", "assets/mudxqzvnzrr4lh0z.js", "assets/m3b3wk7x0ejaq5a6.js", "assets/bnmzmikiaefr3trh.js"]))) => i.map(i => d[i]);
import {
    bz as ne,
    bA as ie,
    aa as G,
    a0 as le,
    B as ue,
    a2 as ce,
    Q as i,
    O as h,
    fn as de,
    n as fe,
    d as N,
    P as v,
    a as _,
    S as me,
    aT as ge,
    k as pe,
    Z as b,
    $ as he
} from "./bq4rrqi54riy5k2e.js";
import {
    c as F,
    r as o,
    j as t,
    L as M,
    a as Se
} from "./mna1wiucqak6lqzp.js";
import {
    a2 as Ee,
    a3 as K,
    a4 as xe,
    a5 as ye,
    a6 as Re,
    G as Te,
    a7 as Ce,
    a8 as U,
    a9 as Ne,
    aa as be,
    ab as ve,
    ac as _e,
    ad as q,
    ae as De,
    af as we,
    ag as Ie,
    ah as je,
    ai as ke,
    aj as H,
    ak as Ae,
    al as Le
} from "./lwme42j7zzyr3q7j.js";
import {
    G as Pe
} from "./fl41y0is7h6g0gxe.js";
const ze = ne(() => ie(() =>
        import ("./cw8u45029jb64qaj.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])).then(e => e.GizmoConversationOptionsDropdown)),
    Oe = new Date(2024, 9, 11, 0);

function V(e) {
    me.checkGate("3922476776") || ge.abortAllRequests(), v.logEvent(_.loadThread, {
        threadId: e
    })
}

function Ge({
    conversation: e,
    onOpenChange: l,
    testId: c,
    inMainScreen: a = !1
}) {
    const r = F(),
        {
            isUnauthenticated: n
        } = pe();
    return n ? null : t.jsx(ze, {
        conversation: e,
        onOpenChange: l,
        inMainScreen: a,
        children: t.jsx("button", {
            className: "flex items-center justify-center text-token-text-secondary transition hover:text-token-text-primary radix-state-open:text-token-text-secondary",
            "data-testid": c,
            "aria-label": r.formatMessage({
                id: "idEcXk",
                defaultMessage: "Open conversation options"
            }),
            children: t.jsx(ke, {
                className: "icon-md"
            })
        })
    })
}
const X = 5,
    Me = 3e3;

function Ue({
    threadId: e
}) {
    const l = Se(),
        c = o.useRef(!1),
        a = o.useRef(null);
    return o.useEffect(() => {
        async function r() {
            c.current = !0;
            const n = await Ae(e);
            if (n.async_status === i.UNREAD) {
                Le(l, n.gizmo_id), he.initThreadFromServerData(e, n, !0, void 0, !0);
                return
            }
            if (n.async_status !== i.STREAMING) return;
            const S = n.update_time ? ? 0;
            K(new Date, new Date(S * 1e3)) < X ? a.current = window.setTimeout(r, Me) : b.setConversationStatus(e)
        }
        return c.current || (v.logEvent(_.conversationPollingStarted), r()), () => {
            a.current && window.clearTimeout(a.current)
        }
    }, [l, e]), null
}

function Ke({
    conversation: e,
    className: l,
    hideOverflowMenu: c = !1,
    isActiveInMainWindow: a,
    isActive: r,
    elementRef: n,
    testId: S
}) {
    const D = F(),
        [B, E] = o.useState(!1),
        [x, Q] = o.useState(!1),
        [d, w] = o.useState(!1),
        {
            value: I
        } = G("3922476776"),
        {
            value: f
        } = G("232791851"),
        $ = Ee(e.id),
        {
            value: u = null,
            source: g = null
        } = $ ? ? {},
        Y = le(e.id, ue.getRequestId),
        m = ce(Y),
        j = K(new Date, new Date(e.update_time ? ? 0)) < X,
        k = xe(e.id),
        Z = e.update_time && ye(new Date(e.update_time), Oe),
        A = u === i.STREAMING && j,
        J = f && !r && !m && Z && !d && u === i.UNREAD,
        L = f && (m || A) && !d,
        W = f && !a && k.length > 0 && !d,
        ee = f && !a && (m || A),
        te = f && u === i.STREAMING && g === h.SERVER && !m && j,
        y = o.useRef(!1);
    o.useEffect(() => {
        y.current || I && (async () => (y.current = !0, r && u === i.UNREAD && (g === h.SERVER && await b.setConversationStatus(e.id), H(e.id, null)), !r && g === h.CLIENT && u === i.UNREAD && (await b.setConversationStatus(e.id, u), H(e.id, {
            value: i.UNREAD,
            source: h.SERVER
        })), y.current = !1))()
    }, [I, r, e.id, u, g, m]), o.useEffect(() => de(Pe, {
        editTitle: ({
            serverThreadId: s
        }) => {
            (s ? s === e.id : a) && E(!0)
        }
    }), [e.id, a]);
    const R = D.formatMessage({
            id: "mpXAeu",
            defaultMessage: "New chat"
        }),
        {
            resolvedTitle: T,
            isTypingEffect: se
        } = Re(e.id, e.title, r),
        ae = Te(),
        re = se && r && ae,
        {
            data: oe
        } = Ce(),
        P = e.conversation_template_id != null ? oe ? .gizmos.find(s => s.resource.gizmo.id === e.conversation_template_id) ? .resource : void 0,
        z = o.useRef(null),
        O = o.useRef(null);
    return t.jsxs("div", {
        draggable: U(e.gizmo_id),
        onDragStart: s => {
            if (!U(e.gizmo_id)) return;
            const C = fe(O.current),
                p = z.current;
            p && (p.style.display = "none"), s.dataTransfer.setDragImage(C, C.clientWidth / 3, C.clientHeight / 2), p && requestAnimationFrame(() => {
                p.style.display = ""
            }), s.dataTransfer.effectAllowed = "move", Ne({
                kind: "conversation",
                conversation: e,
                gizmoId: e.gizmo_id
            })
        },
        onDragEnd: () => {
            be()
        },
        ref: O,
        style: {
            "--item-background-color": ve(d, r, x)
        },
        className: N(_e, "relative screen-arch:bg-transparent", l),
        onMouseEnter: () => {
            w(!0)
        },
        onMouseLeave: () => {
            w(!1)
        },
        children: [te && t.jsx(Ue, {
            threadId: e.id
        }), t.jsx(M, {
            to: q(e.id, P),
            onClick: s => {
                s.metaKey || s.ctrlKey || a || V(e.id)
            },
            onDoubleClick: () => {
                E(!0)
            },
            ref: n,
            className: "flex items-center gap-2 p-2 screen-arch:motion-safe:group-active:scale-[98%] screen-arch:motion-safe:group-active:transition-transform screen-arch:motion-safe:group-active:duration-100",
            style: {
                maskImage: "var(--sidebar-mask)"
            },
            children: t.jsx("div", {
                className: N("relative grow overflow-hidden whitespace-nowrap", ee && !L && "loading-shimmer"),
                dir: "auto",
                title: T ? ? R,
                children: re ? t.jsx(De, {
                    text: T || R
                }) : T || R
            })
        }), B ? t.jsx("div", {
            className: "absolute bottom-0 left-[7px] right-2 top-0 flex items-center bg-token-sidebar-surface-secondary",
            children: t.jsx(we, {
                conversation: e,
                onClose: () => {
                    E(!1)
                }
            })
        }) : J ? t.jsx(M, {
            to: q(e.id, P),
            onClick: s => {
                s.metaKey || s.ctrlKey || a || V(e.id)
            },
            children: t.jsx("div", {
                className: "absolute bottom-0 top-0 flex items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",
                children: t.jsx("div", {
                    className: "h-2 w-2 rounded-full bg-blue-selection"
                })
            })
        }) : W ? t.jsx("div", {
            className: "absolute bottom-0 top-0 flex items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",
            children: t.jsx(Ie, {
                task: k[0]
            })
        }) : L ? t.jsx("div", {
            className: "absolute bottom-0 top-0 flex items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",
            children: t.jsx(je, {
                size: 16,
                className: "text-token-text-primary"
            })
        }) : !c && (d || x) && t.jsx("div", {
            className: N("absolute bottom-0 top-0 inline-flex items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0", a || x ? "flex" : "invisible can-hover:group-hover:visible"),
            ref: z,
            children: t.jsx(Ge, {
                conversation: e,
                onOpenChange: s => {
                    Q(s), s && v.logEvent(_.conversationHistoryItemOpenMenu, {
                        conversationId: e.id
                    })
                },
                testId: `${S}-options`
            })
        })]
    })
}
export {
    Ge as G, Ke as H
};
//# sourceMappingURL=h88qamfv10wkp88v.js.map